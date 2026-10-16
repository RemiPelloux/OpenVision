"use strict";
const { REGEX_BACKSLASH: n, REGEX_REMOVE_BACKSLASH: o, REGEX_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_GLOBAL: i } = require("./module-94443.js");
exports.isObject = (e)=>null !== e && "object" == typeof e && !Array.isArray(e), exports.hasRegexChars = (e)=>s.test(e), exports.isRegexChar = (e)=>1 === e.length && exports.hasRegexChars(e), exports.escapeRegex = (e)=>e.replace(i, "\\$1"), exports.toPosixSlashes = (e)=>e.replace(n, "/"), exports.isWindows = ()=>{
    if ("undefined" != typeof navigator && navigator.platform) {
        const e = navigator.platform.toLowerCase();
        return "win32" === e || "windows" === e;
    }
    return !("undefined" == typeof process || !process.platform) && "win32" === process.platform;
}, exports.removeBackslashes = (e)=>e.replace(o, (e)=>"\\" === e ? "" : e), exports.escapeLast = (e, r, n)=>{
    const o = e.lastIndexOf(r, n);
    return -1 === o ? e : "\\" === e[o - 1] ? exports.escapeLast(e, r, o - 1) : `${e.slice(0, o)}\\${e.slice(o)}`;
}, exports.removePrefix = (e, t = {})=>{
    let r = e;
    return r.startsWith("./") && (r = r.slice(2), t.prefix = "./"), r;
}, exports.wrapOutput = (e, t = {}, r = {})=>{
    let n = `${r.contains ? "" : "^"}(?:${e})${r.contains ? "" : "$"}`;
    return !0 === t.negated && (n = `(?:^(?!${n}).*$)`), n;
}, exports.basename = (e, { windows: t } = {})=>{
    const r = e.split(t ? /[\\/]/ : "/"), n = r[r.length - 1];
    return "" === n ? r[r.length - 2] : n;
};
