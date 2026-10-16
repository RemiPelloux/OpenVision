"use strict";
function r(e) {
    const t = e.length;
    let r, n = 0, o = 0;
    for(; o < t;)n++, r = e.charCodeAt(o++), r >= 55296 && r <= 56319 && o < t && (r = e.charCodeAt(o), 56320 == (64512 & r) && o++);
    return n;
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = r, r.code = 'require("ajv/dist/runtime/ucs2length").default';
