"use strict";
function r(e) {
    const t = e.length;
    let r, n = 0, s = 0;
    for(; s < t;)n++, r = e.charCodeAt(s++), r >= 55296 && r <= 56319 && s < t && (r = e.charCodeAt(s), 56320 == (64512 & r) && s++);
    return n;
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = r, r.code = 'require("ajv/dist/runtime/ucs2length").default';
