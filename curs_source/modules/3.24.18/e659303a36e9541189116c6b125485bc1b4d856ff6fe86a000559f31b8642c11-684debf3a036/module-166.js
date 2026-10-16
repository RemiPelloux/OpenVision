Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isString = r, exports.isStringArray = function(e) {
    return Array.isArray(e) && e.every((e)=>r(e));
}, exports.isObject = s, exports.isTypedArray = function(e) {
    const t = Object.getPrototypeOf(Uint8Array);
    return "object" == typeof e && e instanceof t;
}, exports.isNumber = function(e) {
    return "number" == typeof e && !isNaN(e);
}, exports.isIterable = function(e) {
    return !!e && "function" == typeof e[Symbol.iterator];
}, exports.isBoolean = function(e) {
    return !0 === e || !1 === e;
}, exports.isUndefined = o, exports.isDefined = function(e) {
    return !a(e);
}, exports.isUndefinedOrNull = a, exports.assertType = function(e, t) {
    if (!e) throw new Error(t ? `Unexpected type, expected '${t}'` : "Unexpected type");
}, exports.assertIsDefined = function(e) {
    return (0, i.assert)(null != e, "Argument is `undefined` or `null`."), e;
}, exports.assertDefined = function(e, t) {
    if (null == e) {
        throw "string" == typeof t ? new Error(t) : t;
    }
}, exports.assertAllDefined = function(...e) {
    const t = [];
    for(let n = 0; n < e.length; n++){
        const i = e[n];
        if (a(i)) throw new Error(`Assertion Failed: argument at index ${n} is undefined or null`);
        t.push(i);
    }
    return t;
}, exports.assertOneOf = function(e, t, n) {
    (0, i.assert)(t.includes(e), `${n}: Expected '${e}' to be one of [${t.join(", ")}].`);
}, exports.typeCheck = function(e) {}, exports.isEmptyObject = function(e) {
    if (!s(e)) return !1;
    for(const t in e)if (u.call(e, t)) return !1;
    return !0;
}, exports.isFunction = l, exports.areFunctions = function(...e) {
    return e.length > 0 && e.every(l);
}, exports.validateConstraints = function(e, t) {
    const n = Math.min(e.length, t.length);
    for(let i = 0; i < n; i++)h(e[i], t[i]);
}, exports.validateConstraint = h, exports.upcast = function(e) {
    return e;
};
const i = require("./module-141.js");
function r(e) {
    return "string" == typeof e;
}
function s(e) {
    return !("object" != typeof e || null === e || Array.isArray(e) || e instanceof RegExp || e instanceof Date);
}
function o(e) {
    return void 0 === e;
}
function a(e) {
    return o(e) || null === e;
}
const u = Object.prototype.hasOwnProperty;
function l(e) {
    return "function" == typeof e;
}
function h(e, t) {
    if (r(t)) {
        if (typeof e !== t) throw new Error(`argument does not match constraint: typeof ${t}`);
    } else if (l(t)) {
        try {
            if (e instanceof t) return;
        } catch  {}
        if (!a(e) && e.constructor === t) return;
        if (1 === t.length && !0 === t.call(void 0, e)) return;
        throw new Error("argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true");
    }
}
