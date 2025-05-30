const polyfills = `-- Lua Polyfills
-- CUSTOM FUNCTIONS
local org_print = print

local getOrErr = function (name, str_name, isLocal) -- DEVIATION: Unfortunately that's not the literal translation. Python has many error types here basing on the context but those are the base ones
    if name == nil then
        if not isLocal then error("NameError: name '" .. str_name .. "' is not defined")
        else error("UnboundLocalError: cannot access local variable '" .. str_name .. "' where it is not associated with a value")
        end
    end
    return name
end

function shortHandIf(a, b, c) if a then return b end return end

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

local cunpack = function (left, right, ...) -- if right ~= nil, then we expect there is *args between left & right (and right can be eventually equal to 0)
    local rargs = {}
    local pargs = table.pack(...)
    local totalcount = left
    for i = 1, left, 1 do table.insert(rargs, table.remove(pargs, 1)) end
    if right ~= nil then
        totalcount = totalcount + 1 + right
        table.insert(rargs, pargs)
        for i = right, 1, -1 do table.insert(rargs, table.remove(pargs, #pargs - i + 1)) end
    end
    return table.unpack(rargs, 1, totalcount)
end

local in_operator = function (a, b) return a.__contains__(b) end
local is_operator = function (a, b) return a == b end

local rawCall = defFunction(function (objects, func) return func(table.unpack(objects, 1, objects.n)) end, { { Name = "func" } }, true, false)
local custCall = function (func, ...) return func(table.pack(...), {}) end

local print = defFunction(function (objects, sep, endl)
    local res = {}
    for _, object in ipairs(objects) do
        table.insert(res, tostring(object))
    end
    io.write(table.concat(res, sep) .. endl)
end, { { Default = ' ', Name = "sep", OnlyNamed = true }, { Default = '\\n', Name = "end", OnlyNamed = true } }, true, false)

local len = defFunction(function (s)
    return #s
end, { { Name = "s" } }, false, false)

local input = defFunction(function (prompt)
    print(tableMerge({prompt}), objectMerge({ ['end'] = '' }))
    return io.read()
end, { { Default = '', Name = "prompt" } }, false, false)

local list = {}
setmetatable(list, {
    __call = function (_, t)
        local inst = {
            _data = t
        }
        local methods = { -- TODO: Add the methods
            append = function (v) table.insert(inst._data, v) end;
            insert = function (i, v) table.insert(inst._data, i, v) end;
            clear = function () inst._data = {} end;
            __str__ = function ()

            end,
            __len__ = function () return #inst._data end;
            __bool__ = function () return true end;
            __getitem__ = function (i) return inst._data[i - 1] end;
            __contains__ = function (i)
                for _, v in ipairs(inst._data) do
                    if i == v then return true end
                end
                return false
            end;
        }
        return setmetatable(inst, {
            __index = function (_, i) return methods[i] end,
            __len = function (v) return v.__len__ end
        })
    end
})

local tuple = {}
setmetatable(tuple, {
    __call = function (_, t)
        local inst = {
            _data = t
        }
        local methods = { -- TODO: Add the methods
            __len__ = function () return #inst._data end;
            __bool__ = function () return true end;
            __getitem__ = function (i) return inst._data[i + 1] end;
        }
        return setmetatable(inst, {
            __index = function (_, i) return methods[i] end,
            __len = function (v) return v.__len__ end
        })
    end
})

local set = {}
setmetatable(set, {
    __call = function (_, t)
        local inst = {
            _data = {}
        }
        local methods = { -- TODO: Add the methods
            __bool__ = function () return true end;
            __contains__ = function (i) return inst._data[i] == true end;
        }
        for _, v in ipairs(t) do inst._data[v] = true end
        return setmetatable(inst, {
            __index = function (_, i) return methods[i] end
        })
    end
})

local dict = {}
setmetatable(dict, {
    __call = function (_, t)
        local inst = {
            _data = t
        }
        local methods = { -- TODO: Add the methods
            __bool__ = function () return true end;
            __getitem__ = function (i) return inst._data[i] end;
            __setitem__ = function (i, v) inst._data[i] = v end;
            __contains__ = function (i) return inst._data[i] ~= nil end;
        }
        return setmetatable(inst, {
            __index = function (_, i) return methods[i] end
        })
    end
})

local string = {}
setmetatable(string, {
    __call = function (_, s)
        local inst = { _data = s }
        local methods = { -- TODO: Add the methods
            __contains__ = function (i) return string.find(inst._data, i, 1, true) end;
        }
    end
})

local None = {}
do
    local methods = { -- TODO: Add the methods
        __bool__ = function () return false end
    }
    setmetatable(None, {
        __index = function (_, i) return methods[i] end
    })
end

local Ellipsis = {}
setmetatable(Ellipsis, { -- TODO: Add the methods
})

Complex = {}
Complex.__index = Complex

function Complex.new(re, im)
    return setmetatable({re = re, im = im}, Complex)
end

function Complex.__add(a, b)
    if type(a) == "number" then
      a = Complex.new(a, 0)
    end
    if type(b) == "number" then
      b = Complex.new(b,0)
    end
    return Complex.new(a.re + b.re, a.im + b.im)
end

function Complex.__sub(a, b)
    if type(a) == "number" then
      a = Complex.new(a, 0)
    end
    if type(b) == "number" then
      b = Complex.new(b,0)
    end
    return Complex.new(a.re - b.re, a.im - b.im)
end

function Complex.__mul(a, b)
    if type(a) == "number" then
      return Complex.new(b.re * a, b.im * a)
    end
    if type(b) == "number" then
      return Complex.new(a.re * b, a.im * b)
    end
    return Complex.new(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re)
end

function Complex.__eq(a, b)
    if type(a) == "number" then
        a = Complex.new(a, 0)
    end
    if type(b) == "number" then
        b = Complex.new(b, 0)
    end
    return a.re == b.re and a.im == b.im
end

function Complex.__unm(c)
    return Complex.new(-c.re, -c.im)
end

function Complex.__tostring(c)
    if c.re == 0 then
      return ("%gi"):format(c.im)
    end
    return ("(%g%+gi)"):format(c.re, c.im)
end
`

// Global definitions that are supposed to be reachable in code
export const globalDefinitions: { [Name: string]: string } = {
    ["print"]: 'print',
    ["len"]: 'len',
    ["input"]: 'input',
    ["rawCall"]: 'rawCall',
    ["None"]: 'None'
}

export default polyfills