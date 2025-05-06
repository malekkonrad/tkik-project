const polyfills = `-- Lua Polyfills
local org_print = print
function shortHandIf(a, b, c)
    if a then return b end
    return c
end

function tableMerge(...)
    local target = {}
    for _, t in ipairs(table.pack(...)) do
        for _, v in ipairs(t) do
            table.insert(target, v)
        end
    end
    return target
end

function tableFind(t, val)
    for i, v in ipairs(t) do
        if v == val then
            return i
        end
    end
    return nil
end

function objectMerge(...)
    local target = {}
    for _, t in ipairs(table.pack(...)) do
        for i, v in pairs(t) do
            target[i] = v
        end
    end
    return target
end

local defFunction = function (func, argsData, has_largs, has_kwargs)
    -- argData = { Name = STRING_NAME, Default = VALUE, OnlyPositional = BOOLEAN, OnlyNamed = BOOLEAN }
    -- argsData = { argData }
    local argsList = {}
    local min_pos_args, max_pos_args = 0, 0
    for i, v in ipairs(argsData) do
        if not v.OnlyNamed then
            if v.Default ~= nil then
                max_pos_args = i
            else
                min_pos_args = i
                max_pos_args = i
            end
        end
        table.insert(argsList, v.Name)
    end

    -- Calling the function
    return function (orderedArgs, kwArgs) -- TODO: Check if that's good :D
        local finalArgs = {}
        local specifiedArgs = {}
        local largs = {}
        -- Add defaults
        for i, arg in ipairs(argsData) do
            if arg.Default ~= nil then
                finalArgs[i] = arg.Default
            end
        end
        -- Apply positional args
        local all_pos_args = #orderedArgs
        if all_pos_args > max_pos_args and not has_largs then
            if min_pos_args == max_pos_args then
                error("TypeError: takes from " .. tostring(min_pos_args) .. " to " .. tostring(max_pos_args) .. " positional arguments but " .. tostring(all_pos_args) .. " were given")
            else
                error("TypeError: takes " .. tostring(min_pos_args) .. " positional arguments but " .. tostring(all_pos_args) .. " were given")
            end
        end
        
        for i, v in ipairs(orderedArgs) do
            if i > #argsData or argsData[i].OnlyNamed then
                if has_largs then
                    table.insert(largs, v)
                else
                    error("TypeError: takes " .. tostring(i - 1) .. " positional arguments but 4 were given")
                end
            else
                finalArgs[i] = v
                specifiedArgs[i] = true
            end
        end
        -- Apply kwargs
        for name, v in pairs(kwArgs) do
            local i = tableFind(argsList, name)
            if i ~= nil then
                if argsData[i].OnlyPositional then error("TypeError: got some positional-only arguments passed as keyword arguments: '" .. name .. "'") end
                if specifiedArgs[i] then error("TypeError: got multiple values for argument '" .. name .. "'") end
                specifiedArgs[i] = true -- Mark as specified
                finalArgs[i] = v -- Add the value
                kwArgs[name] = nil -- Remove the value from kwargs
            elseif not has_kwargs then
                error("TypeError got an unexpected keyword argument '" .. name .. "'")
            end
            -- Else it's kept and passed as kwArgs
        end
        local missing_pos_args = {}
        for i, v in ipairs(argsData) do
            if not specifiedArgs[i] and v.Default == nil and not v.OnlyNamed then
                table.insert(missing_pos_args, v.Name)
            end
        end
        if #missing_pos_args > 0 then error("TypeError: missing " .. tostring(#missing_pos_args) .. " required positional arguments: '" .. table.concat(missing_pos_args, "', '") .. "'") end
        local missing_kw_args = {}
        for i, v in ipairs(argsData) do
            if not specifiedArgs[i] and v.Default == nil and v.OnlyNamed then
                table.insert(missing_kw_args, v.Name)
            end
        end
        if #missing_kw_args > 0 then error("TypeError: missing " .. tostring(#missing_kw_args) .. " required keyword-only arguments: '" .. table.concat(missing_kw_args, "', '") .. "'") end
        
        local func_args = {}
        if has_kwargs then table.insert(func_args, kwargs) end
        if has_largs then table.insert(func_args, largs) end
        return func(table.unpack(tableMerge(func_args, finalArgs)))
    end
end

-- Basic functions
local print = defFunction(function (objects, sep, endl)
    local res = {}
    for _, object in ipairs(objects) do
        table.insert(res, tostring(object))
    end
    io.write(table.concat(res, sep) .. endl)
end, { { Default = ' ', Name = "sep", OnlyNamed = true }, { Default = '\\n', Name = "end", OnlyNamed = true } }, true, false)

local len = defFunction(function (s)
    if type(s) == 'table' then
        return #s
    end
    -- TODO: Len of different objects?
end, { { Name = "s" } }, false, false)

local input = defFunction(function (prompt)
    print(tableMerge({prompt}), objectMerge({ ['end'] = '' }))
    return io.read()
end, { { Default = '', Name = "prompt" } }, false, false)
`
export default polyfills