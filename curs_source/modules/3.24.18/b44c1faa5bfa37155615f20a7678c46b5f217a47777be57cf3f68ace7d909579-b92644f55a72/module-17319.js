"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.willAccessTokenExpireSoon = function(e) {
    try {
        const t = new Date, r = (0, n.decodeJwt)(e);
        if (new Date(1e3 * r.exp).getTime() < t.getTime() - s) return !0;
    } catch (e) {}
    return !1;
};
const n = require("./module-73442.js"), s = 45792e5;
