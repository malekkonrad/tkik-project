-- CUSTOM FUNCTIONS
local org_print = print
local typeClass = {}
typeClass.class = typeClass
local dictClass = {}
dictClass.class = typeClass
local int_properbool, int_custcall, int_getattribute_implicit

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
    -- TODO: Handle others
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

strClass.dref.dictdata['__init__'] = defFunction(function (self, data)
    if type(data) == "string" then
        self.stringdata = data
    else
        -- TODO
        self.stringdata = ''
    end
end, { { Name = 'self' }, { Name = 'data', Default = None } })
strClass.dref.dictdata['__add__'] = defFunction(function (self, other)
    return int_custcall(self.class, self.stringdata .. other.stringdata)
end, { { Name = 'self' }, { Name = 'other' } })
strClass.dref.dictdata['__eq__'] = defFunction(function (self, other)
    return int_properbool(self.stringdata == other.stringdata)
end, { { Name = 'self' }, { Name = 'other' } })
strClass.dref.dictdata['__ne__'] = defFunction(function (self, other)
    return int_properbool(self.stringdata ~= other.stringdata)
end, { { Name = 'self' }, { Name = 'other' } })
strClass.dref.dictdata['__getitem__'] = defFunction(function (self, i)
    local num = int_getrawnumber(i)
    if num  < 0 then
        num = #self.stringdata - num + 1
    else
        num = num + 1
    end
    return int_custcall(self.class, self.stringdata[i])
end, { { Name = 'self' }, { Name = 'i' } })
strClass.dref.dictdata['__str__'] = defFunction(function (self) return self end, { { Name = 'self' } })
-- strClass.dref.dictdata['__doc__'] 
-- strClass.dref.dictdata['isidentifier'] 
-- strClass.dref.dictdata['isprintable'] 
-- strClass.dref.dictdata['startswith'] 
-- strClass.dref.dictdata['endswith'] 
-- strClass.dref.dictdata['removeprefix'] 
-- strClass.dref.dictdata['removesuffix'] 
-- strClass.dref.dictdata['__getnewargs__'] 
-- strClass.dref.dictdata['replace'] 
-- strClass.dref.dictdata['__sizeof__'] 
-- strClass.dref.dictdata['isalnum'] 
-- strClass.dref.dictdata['__new__'] 
-- strClass.dref.dictdata['casefold'] 
-- strClass.dref.dictdata['isdecimal'] 
-- strClass.dref.dictdata['__repr__'] 
-- strClass.dref.dictdata['__hash__'] 
-- strClass.dref.dictdata['__lt__'] 
-- strClass.dref.dictdata['__le__'] 
-- strClass.dref.dictdata['__gt__'] 
-- strClass.dref.dictdata['__ge__'] 
-- strClass.dref.dictdata['__iter__'] 
-- strClass.dref.dictdata['__mod__'] 
-- strClass.dref.dictdata['__rmod__'] 
-- strClass.dref.dictdata['__mul__'] 
-- strClass.dref.dictdata['__rmul__'] 
-- strClass.dref.dictdata['__contains__'] 
-- strClass.dref.dictdata['encode'] 
-- strClass.dref.dictdata['split'] 
-- strClass.dref.dictdata['rsplit'] 
-- strClass.dref.dictdata['join'] 
-- strClass.dref.dictdata['capitalize'] 
-- strClass.dref.dictdata['partition'] 
-- strClass.dref.dictdata['isalpha'] 
-- strClass.dref.dictdata['isnumeric'] 
-- strClass.dref.dictdata['isdigit'] 
-- strClass.dref.dictdata['swapcase'] 
-- strClass.dref.dictdata['translate'] 
-- strClass.dref.dictdata['zfill'] 
-- strClass.dref.dictdata['index'] 
-- strClass.dref.dictdata['ljust'] 
-- strClass.dref.dictdata['format_map'] 
-- strClass.dref.dictdata['__format__'] 
-- strClass.dref.dictdata['maketrans'] 
-- strClass.dref.dictdata['format'] 
strClass.dref.dictdata['upper'] = defFunction(function (self)
    local newstring = ''
    for _, s in ipairs(self.stringdata) do
        newstring = newstring .. s:upper()
    end
    return int_custcall(self.class, newstring)
end, { { Name = 'self' } })
strClass.dref.dictdata['lower'] = defFunction(function (self)
    local newstring = ''
    for _, s in ipairs(self.stringdata) do
        newstring = newstring .. s:lower()
    end
    return int_custcall(self.class, newstring)
end, { { Name = 'self' } })
-- strClass.dref.dictdata['rstrip'] 
-- strClass.dref.dictdata['isascii'] 
-- strClass.dref.dictdata['lstrip'] 
-- strClass.dref.dictdata['rfind'] 
-- strClass.dref.dictdata['expandtabs'] 
-- strClass.dref.dictdata['rindex'] 
-- strClass.dref.dictdata['rjust'] 
strClass.dref.dictdata['__len__'] = defFunction(function (self)
    return int_custcall(intClass, #self.stringdata)
end, { { Name = 'self' } })
strClass.dref.dictdata['islower'] = defFunction(function (self)
    for _, s in ipairs(self.stringdata) do
        if s ~= s:lower() then return False end
    end
    return True
end, { { Name = 'self' } })
strClass.dref.dictdata['isupper'] = defFunction(function (self)
    for _, s in ipairs(self.stringdata) do
        if s ~= s:upper() then return False end
    end
    return True
end, { { Name = 'self' } })
-- strClass.dref.dictdata['find'] 
-- strClass.dref.dictdata['splitlines'] 
-- strClass.dref.dictdata['count'] 
-- strClass.dref.dictdata['strip'] 
-- strClass.dref.dictdata['center'] 
-- strClass.dref.dictdata['title'] 
-- strClass.dref.dictdata['rpartition'] 
-- strClass.dref.dictdata['istitle'] 
-- strClass.dref.dictdata['isspace'] 

-- Tuple
local tupleClass = int_createobject(typeClass, false)
tupleClass.base = objectClass

tupleClass.dref.dictdata['__init__'] = defFunction(function (self)
    self.tupledata = {}
end, { { Name = 'self' } })
tupleClass.dref.dictdata['__contains__'] = defFunction(function (self, val)
    for _, v in ipairs(self.tupledata) do
        if int_operator_eq(self, val) then return True end
    end
    return False
end, { { Name = 'self' }, { Name = 'val' } })
tupleClass.dref.dictdata['__getitem__'] = defFunction(function (self, i)
    local num = int_getrawnumber(i)
    if num  < 0 then
        num = #self.stringdata - num + 1
    else
        num = num + 1
    end
    return self.tupledata[num]
end, { { Name = 'self' }, { Name = 'i' } })
tupleClass.dref.dictdata['__len__'] = defFunction(function (self)
    return #self.tupledata
end, { { Name = 'self' } })
tupleClass.dref.dictdata['__add__'] = defFunction(function (self, other)
    local newtuple = int_custcall(tupleClass)
    for _, v in ipairs(self.tupledata) do
        table.insert(newtuple.tupledata, v)
    end
    table.insert(newtuple.tupledata, other)
    return newtuple
end, { { Name = 'self' }, { Name = 'other' } })
-- tupleClass.dref.dictdata['__new__']
-- tupleClass.dref.dictdata['__repr__']
-- tupleClass.dref.dictdata['__hash__']
-- tupleClass.dref.dictdata['__getattribute__']
-- tupleClass.dref.dictdata['__lt__']
-- tupleClass.dref.dictdata['__le__']
-- tupleClass.dref.dictdata['__eq__']
-- tupleClass.dref.dictdata['__ne__']
-- tupleClass.dref.dictdata['__gt__']
-- tupleClass.dref.dictdata['__ge__']
-- tupleClass.dref.dictdata['__iter__']
-- tupleClass.dref.dictdata['__mul__']
-- tupleClass.dref.dictdata['__rmul__']
-- tupleClass.dref.dictdata['__getnewargs__']
-- tupleClass.dref.dictdata['index']
-- tupleClass.dref.dictdata['count']
-- tupleClass.dref.dictdata['__class_getitem__']
-- tupleClass.dref.dictdata['__doc__']

-- Exception
local baseexceptionClass = int_createobject(typeClass, true)
baseexceptionClass.base = objectClass
baseexceptionClass.dref.dictdata['__init__'] = defFunction(function (self, txt)
    self.errortxt = txt
end, { { Name = 'self' }, { Name = 'txt', Default = None } }, false, false)
-- baseexceptionClass.dref.dictdata['__new__']
-- baseexceptionClass.dref.dictdata['__cause__']
-- baseexceptionClass.dref.dictdata['__repr__']
-- baseexceptionClass.dref.dictdata['__str__']
-- baseexceptionClass.dref.dictdata['__getattribute__']
-- baseexceptionClass.dref.dictdata['with_traceback']
-- baseexceptionClass.dref.dictdata['add_note']
-- baseexceptionClass.dref.dictdata['__setstate__']
-- baseexceptionClass.dref.dictdata['args']
-- baseexceptionClass.dref.dictdata['__traceback__']
-- baseexceptionClass.dref.dictdata['__suppress_context__']
-- baseexceptionClass.dref.dictdata['__context__']
-- baseexceptionClass.dref.dictdata['__reduce__']
-- baseexceptionClass.dref.dictdata['__doc__']

-- Internal operators
local int_directcall = function (fobj, ...)
    return fobj.fref(...)
end

int_custcall = function (obj, ...)
    local call = int_getattribute_implicit(obj, obj.class, '__call__')
    while call.fref == nil do
        call = int_getattribute_implicit(call, call.class, '__call__')
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

int_getattribute_implicit = function (obj, cls, attr)
    local ct = cls
    while ct ~= None and ct ~= nil do
        local a = ct.dref.dictdata[attr] 
        if a ~= nil then
            local getter_t = a.class
            local getter_ct = getter_t
            local getter = nil -- Can't use getattribute_implicit as __get__ is not recursive
            while getter_ct ~= None and getter_ct ~= nil do
                local cgetter = getter_ct.dref.dictdata['__get__']
                if cgetter ~= nil then
                    getter = cgetter
                    break
                end
                getter_ct = getter_ct.base
            end

            if getter ~= noneClass and getter ~= nil then
                --[[
                    TODO: This is completely wrong but I havent figured out how to do it completely correctly
                if getter.inst_getcall ~= nil then
                    a = getter.inst_getcall(getter, obj, cls)
                else
                    a = int_custcall(a, obj, cls) -- Standard call
                end
                ]]
                a = int_directcall(getter.fref, table.pack(a, obj, class))
            end
            
            return a
        end
        ct = ct.base
    end
end

local methodClass = int_createobject(typeClass, true)
methodClass.base = objectClass
local functionClass = int_createobject(typeClass, true)
functionClass.base = objectClass
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
    local getitem = int_getattribute_implicit(self.dref, self.dref.class, '__getitem__')
    int_custcall(getitem, key, v)
end, { { Name = 'self' }, { Name = 'key' }, { Name = 'v' } })
objectClass.dref.dictdata['__delattr__'] = defFunction(function (self, key)
    local delitem = int_getattribute_implicit(self.dref, self.dref.class, '__delitem__')
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

typeClass.dref.dictdata['__call__'] = defFunction(function (kwargs, args, self)
    local newmethod = int_getattribute_implicit(self, self.class, '__new__')
    -- TODO: If __new__() does not return an instance of cls, then the new instance’s __init__() method will not be invoked.
    local res = int_directcall(newmethod, args.listdata, kwargs.dictdata)
    if res ~= nil and res ~= None then
        local initmethod = int_getattribute_implicit(res, res.class, '__init__')
        int_directcall(initmethod, args.listdata, kwargs.dictdata)
        return res
    end
end, { { Name = "self" } }, true, true)
-- typeClass.dref.dictdata['__repr__']
-- typeClass.dref.dictdata['__getattribute__']
-- typeClass.dref.dictdata['__setattr__']
-- typeClass.dref.dictdata['__delattr__']
-- typeClass.dref.dictdata['__init__']
-- typeClass.dref.dictdata['__or__']
-- typeClass.dref.dictdata['__ror__']
-- typeClass.dref.dictdata['mro']
-- typeClass.dref.dictdata['__subclasses__']
-- typeClass.dref.dictdata['__prepare__']
-- typeClass.dref.dictdata['__instancecheck__']
-- typeClass.dref.dictdata['__subclasscheck__']
-- typeClass.dref.dictdata['__dir__']
-- typeClass.dref.dictdata['__sizeof__']
-- typeClass.dref.dictdata['__basicsize__']
-- typeClass.dref.dictdata['__itemsize__']
-- typeClass.dref.dictdata['__flags__']
-- typeClass.dref.dictdata['__weakrefoffset__']
-- typeClass.dref.dictdata['__base__']
-- typeClass.dref.dictdata['__dictoffset__']
-- typeClass.dref.dictdata['__qualname__']
-- typeClass.dref.dictdata['__bases__']
-- typeClass.dref.dictdata['__mro__']
-- typeClass.dref.dictdata['__module__']
-- typeClass.dref.dictdata['__abstractmethods__']
-- typeClass.dref.dictdata['__dict__']
-- typeClass.dref.dictdata['__doc__']
-- typeClass.dref.dictdata['__text_signature__']
-- typeClass.dref.dictdata['__annotations__']
-- typeClass.dref.dictdata['__type_params__']
-- typeClass.dref.dictdata['__name__']

dictClass.dref.dictdata['__init__'] = defFunction(function (self) -- TODO: Add option to construct dict from iterable
    self.dictdata = {}
    self.dictinsertorder = {}
end, { { Name = 'self' } }, false, false)
dictClass.dref.dictdata['__delitem__'] = defFunction(function (self, i)
    local s = int_getrawstring(i)
    self.dictdata[s] = nil
    local order_i = tableFind(self.dictinsertorder, s) -- TODO: Should customize that to use any scope
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
    else
        i = i + 1
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