// TODO: __globals__
// __doc__
// __name__
// __qualname__
// __module__
// __defaults__
// __dict__
// __kwdefaults__

// TODO: Methods!!!
// __self__ - instance if method is bound
// __func__ - original function object
// __doc__ = method.__func__.__doc__
// __name__ = method.__func__.__name__
// __module__ = name of the module

/*

__new__
__init__
__del__
__repr__
__str__
__bytes__
__format__(self, format_spec)
object.__lt__(self, other)
object.__le__(self, other)
object.__eq__(self, other) default = is
object.__ne__(self, other) default = !eq if not NotImplemented
// If the operands are of different types, and the right operand’s type is a direct or indirect subclass of the left operand’s type, the reflected method of the right operand has priority, otherwise the left operand’s method has priority. Virtual subclassing is not considered.
object.__gt__(self, other)
object.__ge__(self, other)
__hash__
__bool__ (if not defined, __len__) or true

// __getattribute__ (calls __get__)
// __getattr__
// __setattr__
// __delattr__
// __dir__

// __get__ __set__ __delete__
// __slots__
// __class__
// __init_subclass__ 
// __set_name__
// type(object) => object.__class__
// type(name, bases, dict, **kwds)
// __mro_entries__
// metaclass

MRO entries are resolved;

the appropriate metaclass is determined;

the class namespace is prepared;

the class body is executed;

the class object is created.
metaclass.__prepare__  (should be a classmethod)
metaclass(name, bases, namespace, **kwds)
__instancecheck__
__subclasscheck__
hasattr
getattr
delattr
setattr

__call__
__len__
__length_hint__
__getitem__
__setitem__
__delitem__
__missing__
__iter__
__reversed__
__contains__
object.__add__(self, other)
object.__sub__(self, other)
object.__mul__(self, other)
object.__matmul__(self, other)
object.__truediv__(self, other)
object.__floordiv__(self, other)
object.__mod__(self, other)
object.__divmod__(self, other)
object.__pow__(self, other[, modulo])
object.__lshift__(self, other)
object.__rshift__(self, other)
object.__and__(self, other)
object.__xor__(self, other)
object.__or__(self, other)
object.__radd__(self, other)
object.__rsub__(self, other)
object.__rmul__(self, other)
object.__rmatmul__(self, other)
object.__rtruediv__(self, other)
object.__rfloordiv__(self, other)
object.__rmod__(self, other)
object.__rdivmod__(self, other)
object.__rpow__(self, other[, modulo])
object.__rlshift__(self, other)
object.__rrshift__(self, other)
object.__rand__(self, other)
object.__rxor__(self, other)
object.__ror__(self, other)
object.__iadd__(self, other)
object.__isub__(self, other)
object.__imul__(self, other)
object.__imatmul__(self, other)
object.__itruediv__(self, other)
object.__ifloordiv__(self, other)
object.__imod__(self, other)
object.__ipow__(self, other[, modulo])
object.__ilshift__(self, other)
object.__irshift__(self, other)
object.__iand__(self, other)
object.__ixor__(self, other)
object.__ior__(self, other)
object.__neg__(self)
object.__pos__(self)
object.__abs__(self)
object.__invert__(self)
object.__complex__(self)
object.__int__(self)
object.__float__(self)
object.__index__(self)
object.__round__(self[, ndigits])
object.__trunc__(self)
object.__floor__(self)
object.__ceil__(self)
__enter__
__exit__
__match_args__ - tuple of fstrings

__match_args__
coroutine.send
coroutine.throw
coroutine.close

__aiter__
__anext__
__aenter__
__aexit__
*/

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
-- NOTE: TODO: In python unpack bases on iter

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

local defClass = function (f, bases)
    local c = {}
    
    for _, base in ipairs(bases) do
        for k, v in pairs(base) do
            c[k] = v
        end
    end

    c._bases = bases
    
    c = class_init(c)
    
    local mt = getmetatable(c) or {}
    mt.__call = function(_, ...)
        local object = {}
        
        setmetatable(object, {
            __index = function(tbl, idx)
                local method = c[idx]
                if type(method) == "function" then
                    return function(...)
                        return c[idx](object, ...) 
                    end
                end
                
                return method
            end,
        })
    
        if type(object.__init__) == "function" then
            object.__init__(...)
        end
        
        return object
    end
    
    setmetatable(c, mt)
    
    return c
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
local check_bool = function(obj)
    if obj ~= nil then
        if obj.__bool__ ~= nil then return obj.__bool__() end
        if obj.__len__ ~= nil then return obj.__len__() ~= 0 end
        return true
    end
    return false
end

local rawCall = defFunction(function (objects, func) return func(table.unpack(objects, 1, objects.n)) end, { { Name = "func" } }, true, false)
local custCall = function (func, ...) return func(table.pack(...), {}) end

-- PYTHON FUNCTIONS
-- https ://docs.python.org/3/library/functions.html
local abs = defFunction(function (x) return x.__abs__() end, { { Name = "x" } }, false, false)
local aiter = defFunction(function (async_iterable) error("TODO") end, { { Name = "async_iterable" } }, false, false)
local all = defFunction(function (iterable) error("TODO") end, { { Name = "iterable" } }, false, false)
local anext = defFunction(function (iterable, default) error("TODO") end, { { Name = "iterable" }, { Default = None, Name = "default" } }, false, false)
local any = defFunction(function (iterable) error("TODO") end, { { Name = "iterable" } }, false, false)
local ascii = defFunction(function (object) error("TODO") end, { { Name = "object" } }, false, false)

local bin = defFunction(function (x) error("TODO") end, { { Name = "x" } }, false, false)
local boolConv = defFunction(function (object) error("TODO") end, { { Default = false, Name = "object", OnlyPositional = true } }, false, false)
-- bytes

local callable = defFunction(function (object) return object.__call__ ~= nil end, { { Name = "object" } }, false, false)
local chr = defFunction(function (i) error("TODO") end, { { Name = "i" } }, false, false)
-- classmethod
-- complex

local print = defFunction(function (objects, sep, endl)
    local res = {}
    for _, object in ipairs(objects) do
        table.insert(res, tostring(object))
    end
    io.write(table.concat(res, sep) .. endl)
end, { { Default = ' ', Name = "sep", OnlyNamed = true }, { Default = '\\n', Name = "end", OnlyNamed = true } }, true, false)



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

-- TODO: bool derives int

--[[
classmethod()
complex()

delattr()
dict()
dir()
divmod()

enumerate()
eval()
exec()

filter()
float()
format()
frozenset()

getattr()
globals()

hasattr()
hash()
help()
hex()

id()
int()
isinstance()
issubclass()
iter()
len()
list()
locals()

map()
max()
min()

next()

object()
oct()
open()
ord()

pow()
property()

range()
repr()
reversed()
round()

set()
setattr()
slice()
sorted()
staticmethod()
str()
sum()
super()

tuple()
type()

vars()

zip()

__import__()
]]

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
    ["abs"]: 'abs',
    ["aiter"]: 'aiter',
    ["all"]: 'all',
    ["anext"]: 'anext',
    ["any"]: 'any',
    ["ascii"]: 'ascii',
    ["bin"]: 'bin',
    // bool
    ["bytes"]: 'bytes',
    ["callable"]: 'callable',
    ["chr"]: 'chr',
    ["print"]: 'print',
    ["len"]: 'len',
    ["input"]: 'input',
    ["rawCall"]: 'rawCall',
    ["None"]: 'None'
}

export default polyfills