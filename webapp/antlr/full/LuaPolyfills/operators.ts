const operators_polyfill = `
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

local int_operator_lt = function (a, b)

end
local int_operator_le = function (a, b)

end
local int_operator_eq = function (a, b)

end
local int_operator_ne = function (a, b)

end
local int_operator_ge = function (a, b)

end
local int_operator_gt = function (a, b)

end

local int_operator_not = function (obj)

end

local int_operator_truth = function (obj)

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

`
export default operators_polyfill