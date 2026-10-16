import { p } from "./jsx-runtime.js";
!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "12da335e-d9f6-5411-bc5a-facb78ab8b1e");
    } catch (e) {}
}();
var a = Object.getOwnPropertyNames;
const o = p();
export const Fragment = o.Fragment, jsx = o.jsx, jsxs = o.jsxs, jsxDEV = o.jsxDEV;
export default o;
