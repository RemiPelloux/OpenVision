"use strict";
const t = require("./module-6928.js"), s = "win32" === process.platform, { REGEX_BACKSLASH: o, REGEX_REMOVE_BACKSLASH: r, REGEX_SPECIAL_CHARS: i, REGEX_SPECIAL_CHARS_GLOBAL: l } = require("./module-557.js");
exports.isObject = (e)=>null !== e && "object" == typeof e && !Array.isArray(e), exports.hasRegexChars = (e)=>i.test(e), exports.isRegexChar = (e)=>1 === e.length && exports.hasRegexChars(e), exports.escapeRegex = (e)=>e.replace(l, "\\$1"), exports.toPosixSlashes = (e)=>e.replace(o, "/"), exports.removeBackslashes = (e)=>e.replace(r, (e)=>"\\" === e ? "" : e), exports.supportsLookbehinds = ()=>{
    const e = process.version.slice(1).split(".").map(Number);
    return 3 === e.length && e[0] >= 9 || 8 === e[0] && e[1] >= 10;
}, exports.isWindows = (e)=>e && "boolean" == typeof e.windows ? e.windows : !0 === s || "\\" === t.sep, exports.escapeLast = (e, n, t)=>{
    const s = e.lastIndexOf(n, t);
    return -1 === s ? e : "\\" === e[s - 1] ? exports.escapeLast(e, n, s - 1) : `${e.slice(0, s)}\\${e.slice(s)}`;
}, exports.removePrefix = (e, a = {})=>{
    let n = e;
    return n.startsWith("./") && (n = n.slice(2), a.prefix = "./"), n;
}, exports.wrapOutput = (e, a = {}, n = {})=>{
    let t = `${n.contains ? "" : "^"}(?:${e})${n.contains ? "" : "$"}`;
    return !0 === a.negated && (t = `(?:^(?!${t}).*$)`), t;
};
