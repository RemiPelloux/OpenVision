"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.canonicalDomain = function(e) {
    if (null == e) return;
    let t = e.trim().replace(/^\./, "");
    if (n.IP_V6_REGEX_OBJECT.test(t)) return t.startsWith("[") || (t = "[" + t), t.endsWith("]") || (t += "]"), s(t).slice(1, -1);
    if (/[^\u0001-\u007f]/.test(t)) return s(t);
    return t.toLowerCase();
};
const n = require("./module-21548.js");
function s(e) {
    return new URL(`http://${e}`).hostname;
}
