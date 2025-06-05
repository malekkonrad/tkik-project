-- CUSTOM FUNCTIONS
local org_print = print
local typeClass = {}
typeClass.class = typeClass
local dictClass = {}
dictClass.class = typeClass
local int_properbool

-- LUA Polyfills
function tableFind(t, val)
    for i, v in ipairs(t) do
        if v == val then
            return i
        end
    end
    return nil
end

--[[
Object {
    fref: Optional<function>,
    dref: Object[Dict],
    class: Object,

    dictdata,
    stringdata,
    numberdata
}
]]
local int_createobject = function (tClass, createDict) -- Creates a blank object
    local obj = { class = tClass }
    if createDict then
        obj.dref = int_createobject(dictClass, false) -- Dict contains no dict
    end
    return obj
end
local objectClass = int_createobject(tClass, false)
typeClass.base = objectClass
dictClass.base = objectClass

-- None
local noneClass = int_createobject(typeClass, true)
noneClass.base = objectClass
local None = int_createobject(noneClass, false)
objectClass.base = None
-- TODO: Add staticmethod
noneClass.dref.dictdata['__new__'] = defFunction(function (cls)
    return None
end, { { Name = 'cls' } }, false, false)
noneClass.dref.dictdata['__bool__'] = defFunction(function (self)
    return False
end, { { Name = 'self' } }, false, false)
-- noneClass.dref.dictdata['__new__'] -- I suppose None should be static
-- noneClass.dref.dictdata['__repr__']
-- noneClass.dref.dictdata['__hash__']
-- noneClass.dref.dictdata['__eq__']
-- noneClass.dref.dictdata['__ne__']
-- noneClass.dref.dictdata['__doc__']
-- noneClass.dref.dictdata['__le__']
-- noneClass.dref.dictdata['__lt__']
-- noneClass.dref.dictdata['__gt__']
-- noneClass.dref.dictdata['__ge__']

-- Int
local intClass = int_createobject(typeClass, true)
intClass.base = objectClass
intClass.dref.dictdata['__init__'] = defFunction(function (self, data, base)
    if type(data) == 'number' then
        self.numberdata = data
    else
        self.numberdata = 0
    end
end, { { Name = "self", OnlyPositional = true }, { Name = "data", OnlyPositional = true, Default = None }, { Name = "base", Default = None } }, false, false)
intClass.dref.dictdata['__mul__'] = defFunction(function (self, other)
    local newnum = int_custcall(self.class)
    newnum.numberdata = self.numberdata * other.numberdata
    -- TODO: Should add complex
    return newnum
end, { { Name = 'self' }, { Name = 'other' } }, false, false)
intClass.dref.dictdata['__rmul__'] = defFunction(function (self, other)
    local newnum = int_custcall(self.class)
    newnum.numberdata = self.numberdata * other.numberdata
    -- TODO: Should add complex
    return newnum
end, { { Name = 'self' }, { Name = 'other' } }, false, false)
intClass.dref.dictdata['__bool__'] = defFunction(function (self, other)
    return int_properbool(self.numberdata ~= 0)
end, { { Name = 'self' }, { Name = 'other' } }, false, false)
intClass.dref.dictdata['__add__'] = defFunction(function (self, other)
    local newnum = int_custcall(self.class)
    newnum.numberdata = self.numberdata + other.numberdata
    -- TODO: Should add complex
    return newnum
end, { { Name = 'self' }, { Name = 'other' } }, false, false)
intClass.dref.dictdata['__radd__'] = defFunction(function (self, other)
    local newnum = int_custcall(self.class)
    newnum.numberdata = self.numberdata + other.numberdata
    -- TODO: Should add complex
    return newnum
end, { { Name = 'self' }, { Name = 'other' } }, false, false)
intClass.dref.dictdata['__sub__'] = defFunction(function (self, other)
    local newnum = int_custcall(self.class)
    newnum.numberdata = self.numberdata - other.numberdata
    -- TODO: Should add complex
    return newnum
end, { { Name = 'self' }, { Name = 'other' } }, false, false)
intClass.dref.dictdata['__rsub__'] = defFunction(function (self, other)
    local newnum = int_custcall(self.class)
    newnum.numberdata = other.numberdata - self.numberdata
    -- TODO: Should add complex
    return newnum
end, { { Name = 'self' }, { Name = 'other' } }, false, false)
intClass.dref.dictdata['__lshift__'] = defFunction(function (self, other)
    local newnum = int_custcall(self.class)
    newnum.numberdata = self.numberdata << other.numberdata
    -- TODO: Should add complex
    return newnum
end, { { Name = 'self' }, { Name = 'other' } }, false, false)
intClass.dref.dictdata['__rlshift__'] = defFunction(function (self, other)
    local newnum = int_custcall(self.class)
    newnum.numberdata = other.numberdata << self.numberdata
    -- TODO: Should add complex
    return newnum
end, { { Name = 'self' }, { Name = 'other' } }, false, false)
intClass.dref.dictdata['__xor__'] = defFunction(function (self, other)
    local newnum = int_custcall(self.class)
    newnum.numberdata = self.numberdata ~ other.numberdata
    -- TODO: Should add complex
    return newnum
end, { { Name = 'self' }, { Name = 'other' } }, false, false)
intClass.dref.dictdata['__rxor__'] = defFunction(function (self, other)
    local newnum = int_custcall(self.class)
    newnum.numberdata = other.numberdata ~ self.numberdata
    -- TODO: Should add complex
    return newnum
end, { { Name = 'self' }, { Name = 'other' } }, false, false)
-- intClass.dref.dictdata['__index__'] 
-- intClass.dref.dictdata['conjugate'] 
-- intClass.dref.dictdata['__truediv__'] 
-- intClass.dref.dictdata['bit_length'] 
-- intClass.dref.dictdata['__int__'] 
-- intClass.dref.dictdata['from_bytes'] 
-- intClass.dref.dictdata['__abs__'] 
-- intClass.dref.dictdata['__ceil__'] 
-- intClass.dref.dictdata['__invert__'] 
-- intClass.dref.dictdata['__floordiv__'] 
-- intClass.dref.dictdata['to_bytes'] 
-- intClass.dref.dictdata['__getnewargs__'] 
-- intClass.dref.dictdata['bit_count'] 
intClass.dref.dictdata['__or__'] = defFunction(function (self, other)
    if int_operator_truth(self) then return self end
    return other
end, { { Name = 'self' }, { Name = 'other'} }, false, false)
intClass.dref.dictdata['__ror__'] = defFunction(function (self, other)
    if int_operator_truth(other) then return other end
    return self
end, { { Name = 'self' }, { Name = 'other'} }, false, false)
intClass.dref.dictdata['__and__'] = defFunction(function (self, other)
    if not int_operator_truth(self) then return self end
    return other
end, { { Name = 'self' }, { Name = 'other'} }, false, false)
intClass.dref.dictdata['__rand__'] = defFunction(function (self, other)
    if not int_operator_truth(other) then return other end
    return self
end, { { Name = 'self' }, { Name = 'other'} }, false, false)
-- intClass.dref.dictdata['as_integer_ratio'] 
-- intClass.dref.dictdata['__float__'] 
-- intClass.dref.dictdata['__rtruediv__'] 
-- intClass.dref.dictdata['__floor__'] 
-- intClass.dref.dictdata['__rfloordiv__'] 
-- intClass.dref.dictdata['__divmod__'] 
-- intClass.dref.dictdata['__rpow__'] 
-- intClass.dref.dictdata['__rshift__'] 
-- intClass.dref.dictdata['__trunc__'] 
-- intClass.dref.dictdata['__mod__'] 
-- intClass.dref.dictdata['__pow__'] 
-- intClass.dref.dictdata['real'] 
-- intClass.dref.dictdata['__rdivmod__'] 
-- intClass.dref.dictdata['numerator'] 
-- intClass.dref.dictdata['__rrshift__'] 
-- intClass.dref.dictdata['denominator'] 
-- intClass.dref.dictdata['imag'] 
intClass.dref.dictdata['__pos__'] = defFunction(function (self)
    local newnum = int_custcall(self.class)
    newnum.numberdata = self.numberdata
    -- TODO: Should add complex
    return newnum
end, { { Name = 'self' } }, false, false)
intClass.dref.dictdata['__neg__'] = defFunction(function (self)
    local newnum = int_custcall(self.class)
    newnum.numberdata = -self.numberdata
    -- TODO: Should add complex
    return newnum
end, { { Name = 'self' } }, false, false)
intClass.dref.dictdata['is_integer'] = defFunction(function (self)
    return int_properbool(self.numberdata % 1 == 0)
end, { { Name = 'self' } }, false, false)
-- intClass.dref.dictdata['__rmod__'] 
-- intClass.dref.dictdata['__round__'] 
-- intClass.dref.dictdata['__doc__'] 
-- intClass.dref.dictdata['__sizeof__'] 
-- intClass.dref.dictdata['__format__']
intClass.dref.dictdata['__ge__'] = defFunction(function (self, other)
    return int_properbool(self.numberdata > other.numberdata)
end, { { Name = 'self' }, { Name = 'other'} }, false, false)
intClass.dref.dictdata['__gt__'] = defFunction(function (self, other)
    return int_properbool(self.numberdata >= other.numberdata)
end, { { Name = 'self' }, { Name = 'other'} }, false, false)
intClass.dref.dictdata['__le__'] = defFunction(function (self, other)
    return int_properbool(self.numberdata < other.numberdata)
end, { { Name = 'self' }, { Name = 'other'} }, false, false)
intClass.dref.dictdata['__lt__'] = defFunction(function (self, other)
    return int_properbool(self.numberdata <= other.numberdata)
end, { { Name = 'self' }, { Name = 'other'} }, false, false)
intClass.dref.dictdata['__eq__'] = defFunction(function (self, other)
    return int_properbool(self.numberdata == other.numberdata)
end, { { Name = 'self' }, { Name = 'other'} }, false, false)
intClass.dref.dictdata['__ne__'] = defFunction(function (self, other)
    return int_properbool(self.numberdata ~= other.numberdata)
end, { { Name = 'self' }, { Name = 'other'} }, false, false)
-- intClass.dref.dictdata['__getattribute__']
-- intClass.dref.dictdata['__hash__']
-- intClass.dref.dictdata['__repr__']
-- intClass.dref.dictdata['__new__']

-- Bool
local boolClass = int_createobject(intClass)
boolClass.base = intClass
local True = int_createobject(boolClass)
True.numberdata = 1
local False = int_createobject(boolClass)
False.numberdata = 0
int_properbool = function (v) if v then return True else return False end end

boolClass.dref.dictdata['__new__'] = defFunction(function (self, data)
    if int_operator_truth(data) then return True end
    return False
end, { { Name = 'self' }, { Name = 'data', Default = None } }, false, false)
-- boolClass.dref.dictdata['__repr__']
-- boolClass.dref.dictdata['__invert__']
-- boolClass.dref.dictdata['__and__']
-- boolClass.dref.dictdata['__rand__']
-- boolClass.dref.dictdata['__xor__']
-- boolClass.dref.dictdata['__rxor__']
-- boolClass.dref.dictdata['__or__']
-- boolClass.dref.dictdata['__ror__']
-- boolClass.dref.dictdata['__doc__']

-- String
local strClass = int_createobject(typeClass)
strClass.base = objectClass

-- Exception
local baseexceptionClass = int_createobject(typeClass)
baseexceptionClass.base = objectClass

-- Internal operators
local int_directcall = function (fobj, ...)
    return fobj.fref(...)
end

local int_getattribute_implicit
local int_custcall = function (obj, ...)
    local call = int_getattribute_implicit(obj.class, '__call__')
    while call.fref == nil do
        call = int_getattribute_implicit(call.class, '__call__')
    end
    return int_directcall(call, table.pack(...), {}) -- selene: allow(incorrect_library_use)
end

local int_getrawstring = function (obj)
    if type(obj) == 'string' then return obj end
    return obj.stringdata
end
local int_getrawnumber = function (obj)
    if type(obj) == 'number' then return obj end
    return obj.numberdata
end

local int_operator_truth = function (obj)
    -- TODO
end

local int_operator_eq = function (first, second)
    -- TODO
end

int_getattribute_implicit = function (t, attr)
    local ct = t
    while ct ~= None and ct ~= nil do
        local a = ct.dref.dictdata[attr] 
        if a ~= nil then
            local getter_t = int_type(a)
            local getter_ct = getter_t
            local getter = nil -- Can't use getattribute_implicit as __get__ is not recursive
            while getter_ct ~= noneClass and getter_ct ~= nil do
                local cgetter = getter_ct.oref.dictdata['__get__'] 
                if cgetter ~= nil then
                    getter = cgetter
                    break
                end
                getter_ct = getter_ct.oref.dictdata.__base__
            end

            if getter ~= noneClass and getter ~= nil then
                a = int_custcall(getter, a, getter_t)
            end
            
            return a
        end
        ct = ct.oref.dictdata.__base__
    end
end

local functionClass = {

--[[
  local attr = int_type(a).__getattribute__(b)
  if not attr then

  end
  if a.__dict__ ~= nil and a.__dict__[b] ~= nil then
    if int_isinstance(a, type) and a.__dict__[b].__get__ ~= nil then
      return a.__dict__[b].__get__(None, a)
    end
    return a.__dict__[b]
  end
  t = type(a)
  if t ~= nil then
    if t.__dict__ ~= nil and t.__dict__[b] ~= nil then
      if t.__dict__[b].__get__ ~= nil then
        local inst = None
        local cls = a
        if not int_isinstance(a, type) then
          inst = a
          cls = t
        end
        return t.__dict__[b].__get__(inst, cls)
      end
      return t.__dict__[b]
    end
  end
end]]

--[[
local int_call = function (obj, ...)
  local t = int_class(obj) -- Retrieve the type
  local call = t.dictdata.__call__
  -- TODO: Should handle any kind of error here?
  return int_directcall(call, ...) -- Process the direct call
end]]

--[[
local staticmethodClass = 
= defFunction(function (func)
  return {
    __wrapped__
    __func__ 
    
  }
end, { { Name = 'func' } }, false, false)
]]


-- TODO: Wrap with staticmethod()
objectClass.dref.dictdata['__new__'] = defFunction(function (cls)
    return int_createobject(cls, true)
end, { { Name = 'cls' } })
objectClass.dref.dictdata['__init__'] = defFunction(function (self) end, { { Name = 'self' } })
objectClass.dref.dictdata['__init_subclass__'] = defFunction(function (self) end, { { Name = 'self' } })
objectClass.dref.dictdata['__class__'] = defFunction(function (self) return self.class end, { { Name = 'self' } })
objectClass.dref.dictdata['__setattr__'] = defFunction(function (self, key, v)
    local getitem = int_getattribute_implicit(self.dref, '__getitem__')
    int_custcall(getitem, key, v)
end, { { Name = 'self' }, { Name = 'key' }, { Name = 'v' } })
objectClass.dref.dictdata['__delattr__'] = defFunction(function (self, key)
    local delitem = int_getattribute_implicit(self.dref, '__delitem__')
    int_custcall(delitem, key)
end, { { Name = 'self' }, { Name = 'key' } })
objectClass.dref.dictdata['__eq__'] = defFunction(function (self, other)
    return int_properbool(self == other)
end, { { Name = 'self' }, { Name = 'other' } })
objectClass.dref.dictdata['__ne__'] = defFunction(function (self, other)
    return int_properbool(self ~= other)
end, { { Name = 'self' }, { Name = 'other' } })
objectClass.dref.dictdata['__getattribute__'] = defFunction(function (self, key)
    
end, { { Name = 'self' }, { Name = 'key' } })
objectClass.dref.dictdata['__getstate__'] = defFunction(function (self)
    return None
end, { { Name = 'self' } })
-- objectClass.dref.dictdata['__doc__'] 
-- objectClass.dref.dictdata['__dir__'] 
-- objectClass.dref.dictdata['__sizeof__'] 
-- objectClass.dref.dictdata['__ge__'] 
-- objectClass.dref.dictdata['__gt__'] 
-- objectClass.dref.dictdata['__le__'] 
-- objectClass.dref.dictdata['__lt__'] 
-- objectClass.dref.dictdata['__str__'] 
-- objectClass.dref.dictdata['__hash__'] 
-- objectClass.dref.dictdata['__repr__'] 
-- objectClass.dref.dictdata['__reduce_ex__'] 
-- objectClass.dref.dictdata['__reduce__'] 
-- objectClass.dref.dictdata['__subclasshook__']
-- objectClass.dref.dictdata['__format__']

-- TODO: Module-level __getattr__, __dir__

local typeClass = {
  __call__ = function ()

  end,
  __delattr__ = function ()

  end,
  
}
objectClass.__class__ = typeClass
typeClass.__base__ = objectClass
-- typeClass.__bases__ = tuple(objectClass)
typeClass.__class__ = typeClass

dictClass = {
    __init__ = defFunction(function (self) -- TODO: Add option to construct dict from iterable
        self.dictdata = {}
        self.dictinsertorder = {}

dictClass.dref.dictdata['__init__'] = defFunction(function (self) -- TODO: Add option to construct dict from iterable
    self.dictdata = {}
    self.dictinsertorder = {}
end, { { Name = 'self' } }, false, false)
dictClass.dref.dictdata['__delitem__'] = defFunction(function (self, i)
    local s = int_getrawstring(i)
    self.dictdata[s] = nil
    local order_i = tableFind(self.dictinsertorder, s)
    if order_i ~= nil then table.remove(self.dictinsertorder, order_i) end
end, { { Name = 'self' }, { Name = 'i' } }, false, false)
dictClass.dref.dictdata['popitem'] = defFunction(function (self)
    if #self.dictinsertorder == 0 then error('TODO') end
    local key = table.remove(self.dictinsertorder, #self.dictinsertorder)
    local val = self.dictdata[key]
    self.dictdata[key] = nil
    return val
end, { { Name = 'self' } }, false, false)
dictClass.dref.dictdata['__or__'] = defFunction(function (self, other)
    local newDict = int_custcall(self.class)
    local addedKeys = {}
    for i, v in pairs(self.dictdata) do
        if v ~= nil then
            newDict.dictdata[i] = v
            table.insert(newDict.dictinsertorder, i)
            addedKeys[i] = true
        end
    end
    for i, v in pairs(other.dictdata) do
        if v ~= nil then
            newDict.dictdata[i] = v
            if not addedKeys[i] then
                table.insert(newDict.dictinsertorder, i)
                addedKeys[i] = true
            end
        end
    end
    return newDict
end, { { Name = 'self' }, { Name = 'other'} }, false, false)
dictClass.dref.dictdata['__contains__'] = defFunction(function (self, i)
    local s = int_getrawstring(i)
    return int_custcall(boolClass, self.dictdata[s] ~= nil)
end, { { Name = 'self' }, { Name = 'i' } }, false, false)
dictClass.dref.dictdata['__len__'] = defFunction(function (self)
    return int_custcall(numberClass, #self.dictinsertorder)
end, { { Name = 'self' }, { Name = 'i' } }, false, false)
dictClass.dref.dictdata['pop'] = defFunction(function (self, pos)
    local i = int_getrawnumber(pos)
    if i < 0 then
        i = #self.dictinsertorder + 1 - i
    end
    local key = table.remove(self.dictinsertorder, i)
    local val = self.dictdata[key]
    self.dictdata[key] = nil
    return val
end, { { Name = 'self' }, { Name = 'pos', Default = int_custcall(numberClass, -1) } }, false, false)
dictClass.dref.dictdata['__setitem__'] = defFunction(function (self, i, v)
    local s = int_getrawstring(i)
    self.dictdata[i] = v
    if tableFind(self.dictinsertorder, s) ~= nil then
        table.insert(self.dictinsertorder, s)
    end
end, { { Name = 'self' }, { Name = 'i' }, { Name = 'v' } }, false, false)
dictClass.dref.dictdata['__eq__'] = defFunction(function (self, other)
    local keys = {}
    for _, k in ipairs(self.dictinsertorder) do
        keys[k] = (keys[k] or 0) + 1
    end
    for _, k in ipairs(other.dictinsertorder) do
        keys[k] = (keys[k] or 0) + 1
    end
    for _, c in pairs(keys) do
        if c == 1 then
            error('TODO')
        end
    end

    for k, v in pairs(self.dictdata) do
        if not int_operator_truth(int_operator_eq(v, other.dictdata[k])) then
            return falseBool
        end
    end
    return trueBool
end, { { Name = 'self' }, { Name = 'other' } }, false, false)
dictClass.dref.dictdata['__ror__'] = defFunction(function (self, other)
    local call = int_getattribute_implicit(other.class, '__or__')
    return int_custcall(call, other, self)
end, { { Name = 'self' }, { Name = 'other'} }, false, false)
dictClass.dref.dictdata['setdefault'] = defFunction(function (self, keyname, value)
    local s = int_getrawstring(keyname)
    if self.dictdata[s] == nil then -- Add the value via __setitem__
        local call = int_getattribute_implicit(self.class, '__setitem__')
        int_custcall(call, keyname, value)
    end
end, { { Name = 'self' }, { Name = 'keyname' }, { Name = 'value', Default = noneClass } }, false, false)
dictClass.dref.dictdata['__getitem__'] = defFunction(function (self, key)
    local s = int_getrawstring(key)
    local val = self.dictdata[s]
    if val == nil then error('TODO') end
    return val
end, { { Name = 'self' }, { Name = 'key' } }, false, false)
dictClass.dref.dictdata['get'] = defFunction(function (self, keyname, default_value)
    local s = int_getrawstring(keyname)
    local val = self.dictdata[s]
    if val == nil then return default_value end
    return val
end, { { Name = 'self'}, { Name = 'keyname' }, { Name = 'value', Default = noneClass } }, false, false)
dictClass.dref.dictdata['copy'] = defFunction(function (self)
    local newDict = int_custcall(self.class)
    for i, v in pairs(self.dictdata) do
        newDict.dictdata[i] = v
    end
    newDict.dictinsertorder = table.pack(table.unpack(self.dictinsertorder))
    return newDict
end, { { Name = 'self' } }, false, false)
dictClass.dref.dictdata['clear'] = defFunction(function (self)
    self.dictdata = {}
    self.dictinsertorder = {}
end, { { Name = 'self' } }, false, false)
dictClass.dref.dictdata['__ior__'] = defFunction(function (self, other)
    for i, v in pairs(other.dictdata) do
        if v ~= nil then
            if self.dictdata[i] == nil then
                table.insert(self.dictinsertorder, i)
            end
            self.dictdata[i] = v
        end
    end
    return self
end, { { Name = 'self' }, { Name = 'other' } }, false, false)
-- dictClass.dref.dictdata['__class_getitem__']
-- dictClass.dref.dictdata['fromkeys']
-- dictClass.dref.dictdata['keys']
-- dictClass.dref.dictdata['__new__']
-- dictClass.dref.dictdata['__repr__']
-- dictClass.dref.dictdata['__doc__']
-- dictClass.dref.dictdata['__reversed__']
-- dictClass.dref.dictdata['items']
-- dictClass.dref.dictdata['values']
-- dictClass.dref.dictdata['update']
-- dictClass.dref.dictdata['__hash__']
-- dictClass.dref.dictdata['__getattribute__']
-- dictClass.dref.dictdata['__lt__']
-- dictClass.dref.dictdata['__le__']
-- dictClass.dref.dictdata['__ne__']
-- dictClass.dref.dictdata['__gt__']
-- dictClass.dref.dictdata['__ge__']
-- dictClass.dref.dictdata['__sizeof__']


-- Builtins:
-- dict_keys(['__name__', '__doc__', '__package__', '__loader__', '__spec__', '__build_class__', '__import__', 'abs', 'all', 'any', 'ascii', 'bin', 'breakpoint', 'callable', 'chr', 'compile', 'delattr', 'dir', 'divmod', 'eval', 'exec', 'format', 'getattr', 'globals', 'hasattr', 'hash', 'hex', 'id', 'input', 'isinstance', 'issubclass', 'iter', 'aiter', 'len', 'locals', 'max', 'min', 'next', 'anext', 'oct', 'ord', 'pow', 'print', 'repr', 'round', 'setattr', 'sorted', 'sum', 'vars', 'None', 'Ellipsis', 'NotImplemented', 'False', 'True', 'bool', 'memoryview', 'bytearray', 'bytes', 'classmethod', 'complex', 'dict', 'enumerate', 'filter', 'float', 'frozenset', 'property', 'int', 'list', 'map', 'object', 'range', 'reversed', 'set', 'slice', 'staticmethod', 'str', 'super', 'tuple', 'type', 'zip', '__debug__', 'BaseException', 'BaseExceptionGroup', 'Exception', 'GeneratorExit', 'KeyboardInterrupt', 'SystemExit', 'ArithmeticError', 'AssertionError', 'AttributeError', 'BufferError', 'EOFError', 'ImportError', 'LookupError', 'MemoryError', 'NameError', 'OSError', 'ReferenceError', 'RuntimeError', 'StopAsyncIteration', 'StopIteration', 'SyntaxError', 'SystemError', 'TypeError', 'ValueError', 'Warning', 'FloatingPointError', 'OverflowError', 'ZeroDivisionError', 'BytesWarning', 'DeprecationWarning', 'EncodingWarning', 'FutureWarning', 'ImportWarning', 'PendingDeprecationWarning', 'ResourceWarning', 'RuntimeWarning', 'SyntaxWarning', 'UnicodeWarning', 'UserWarning', 'BlockingIOError', 'ChildProcessError', 'ConnectionError', 'FileExistsError', 'FileNotFoundError', 'InterruptedError', 'IsADirectoryError', 'NotADirectoryError', 'PermissionError', 'ProcessLookupError', 'TimeoutError', 'IndentationError', 'IndexError', 'KeyError', 'ModuleNotFoundError', 'NotImplementedError', 'RecursionError', 'UnboundLocalError', 'UnicodeError', 'BrokenPipeError', 'ConnectionAbortedError', 'ConnectionRefusedError', 'ConnectionResetError', 'TabError', 'UnicodeDecodeError', 'UnicodeEncodeError', 'UnicodeTranslateError', 'ExceptionGroup', 'EnvironmentError', 'IOError', 'open', 'quit', 'exit', 'copyright', 'credits', 'license', 'help'])

-- TODO: docstrings
-- TODO: Base, class fetching?
-- TODO: Module-level __getattr__, __dir__
-- TODO
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