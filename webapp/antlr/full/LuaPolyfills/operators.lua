--[[
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
]]
-- src: https://docs.python.org/3/reference/datamodel.html
-- TODO: Add None Type
-- TODO Add NotImplemented type (& Error potentially)
-- TODO: Ellipsis

-- number __repr__, __str__

-- bytes(), bytearray(), set(), frozenset()

local len = defFunction(function (s)
    return s.__len__() -- TODO: Proper function calling
end, { { Name = "s" } }, false, false)

local iter = defFunction(function (s)
    return s.__iter__() -- TODO: Proper function calling
end, { { Name = "s" } }, false, false)

-- __len__
-- __length_hint__
-- __getitem__
-- __setitem__
-- __delitem__
-- __missing__ -- Used by dict
-- __iter__ -- Returns the iter
-- __reversed__ -- used by reversed() to return reversed iterator [if not implemented it uses __len__() and __getitem__(_)]
-- __contains__ - used by contain operator (if does not exist it uses __iter and then __getitem__)


local int_isinstance = function(obj, class)

end

local int_operator_lt = function (a, b)

end
local int_operator_le = function (a, b)

end
local int_operator_ne = function (a, b)

end
local int_operator_ge = function (a, b)

end
local int_operator_gt = function (a, b)

end

local int_operator_not = function (obj)

end

local int_operator_is = function (a, b)

end

local int_operator_is_not = function (a, b)

end

local int_operator_abs = function (obj)

end

-- TODO: Note If the right operand’s type is a subclass of the left operand’s type and that subclass provides a different implementation of the reflected method for the operation, this method will be called before the left operand’s non-reflected method. This behavior allows subclasses to override their ancestors’ operations.
local int_operator_add = function (f, s)
  f.__add__(s)
  s.__radd__(f) -- Only if f.__add__ = NotImplemented AND types are different
end

local int_operator_and = function (a, b)
  f.__and__(s)
  s.__rand__(f)
end

local int_operator_floordiv = function (f, s)
  f.__floordiv__(s)
  s.__rfloordiv__(f)
end

local int_operator_index = function (a)

end

local int_operator_invert = function (obj)

end

local int_operator_lshift = function (f, s)
  f.__lshift__(s)
  s.__rlshift__(f)
end

local int_operator_mod = function (f, s)
  f.__mod__(s)
  s.__rmod__(f)
end

local int_operator_mul = function (f, s)
  f.__mul__(s)
  s.__rmul__(f)
end

local int_operator_matmul = function (f, s)
  f.__matmul__(s)
  s.__rmatmul__(f)
end

-- __neg__

local int_operator_neg = function(obj)

end

local int_operator_or = function (f, s)
  f.__or__(s)
  s.__ror__(f)
end

-- __pos__
local int_operator_pos = function (obj) -- +obj

end

local int_operator_pow = function (f, s, modulo)
  -- Note that __pow__() should be defined to accept an optional third argument if the ternary version of the built-in pow() function is to be supported.
end

local int_operator_rshift = function (f, s)
  f.__rshift__(s)
  s.__rrshift__(f)
end

local int_operator_sub = function (f, s)
  f.__sub__(s)
  s.__rsub__(f)
end

local int_operator_truediv = function (f, s)
  f.__truediv__(s)
  s.__rtruediv__(f)
end

local int_operator_xor = function (f, s)
  f.__xor__(s)
  s.__rxor__(f)
end

local int_operator_concat = function (a, b)

end

local int_operator_contains = function (a, b)

end

local int_operator_countOf = function (a, b)

end

local int_operator_delitem = function (a, b)

end

local int_operator_getitem = function (a, b)

end

local int_operator_indexof = function (a, b)

end

local int_operator_setitem = function (a, b, c)

end

--local int_operator_length_hint = function (obj, default=0)

--end

--local int_operator_call = function (obj, /, *args, **kwargs)

--end


local int_operator_iadd = function (a, b)
  f.__iadd__(s)
  return int_operator_add(f, s)
end

local int_operator_iand = function (f, s)
  f.__iand__(s)
  return int_operator_and(f, s)
end

local int_operator_iconcat = function (a, b)

end

local int_operator_ifloordiv = function (f, s)
  f.__ifloordiv__(s)
  return int_operator_floordiv(f, s)
end

local int_operator_ilshift = function (f, s)
  f.__ilshift__(s)
  return int_operator_lshift(f, s)
end

local int_operator_imod = function (f, s)

end

local int_operator_imul = function (f, s)
  f.__imul__(s)
  return int_operator_mul(f, s)
end

local int_operator_imatmul = function (f, s)
  f.__imatmul__(s)
  return int_operator_matmul(f, s)
end

local int_operator_ior = function (f, s)
  f.__ior__(s)
  return int_operator_or(f, s)
end

local int_operator_ipow = function (f, s)
  f.__ipow__(s)
  return int_operator_pow(f, s)
end

local int_operator_irshift = function (f, s)
  f.__irshift__(s)
  return int_operator_rshift(f, s)
end

local int_operator_isub = function (f, s)
  f.__isub__(s)
  return int_operator_sub(f, s)
end

local int_operator_itruediv = function (f, s)
  f.__itruediv__(s)
  return int_operator_truediv(f, s)
end

local int_operator_ixor = function (f, s)
  f.__ixor__(s)
  return int_operator_xor(f, s)
end

--[[
local int_operator_divmod = function (f, s)
  -- __floordiv__, __mod__
end
]]


-- __abs__
-- __invert__

-- __complex__
-- __int__
-- __float__
-- __index__ Must return integer
-- __round__(Optional ndigits)
-- __trunc__
-- __floor__
-- __ceil__

-- __enter__(self)
-- __exit__(self, exc_type, exc_value, traceback)
-- __match_args__ ("left", "center", "right") case MyClass(x, y)     then MyClass(left=x, center=y)

-- SKIP __buffer__, __release_buffer__

-- __await__

-- TODO: 3.4 Coroutines