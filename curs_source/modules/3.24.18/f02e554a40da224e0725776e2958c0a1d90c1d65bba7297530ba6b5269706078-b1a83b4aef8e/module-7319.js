"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.willAccessTokenExpireSoon = function(t) {
    try {
        const e = new Date, r = (0, n.decodeJwt)(t);
        if (new Date(1e3 * r.exp).getTime() < e.getTime() - s) return !0;
    } catch (t) {}
    return !1;
};
const n = require("./module-3442.js"), s = 45792e5;
