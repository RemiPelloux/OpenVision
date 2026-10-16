"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.canonicalDomain = function(t) {
    if (null == t) return;
    let e = t.trim().replace(/^\./, "");
    if (n.IP_V6_REGEX_OBJECT.test(e)) return e.startsWith("[") || (e = "[" + e), e.endsWith("]") || (e += "]"), s(e).slice(1, -1);
    if (/[^\u0001-\u007f]/.test(e)) return s(e);
    return e.toLowerCase();
};
const n = require("./module-1548.js");
function s(t) {
    return new URL(`http://${t}`).hostname;
}
