"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.min = void 0;
const n = require("./module-78339.js"), s = require("./module-51078.js");
exports.min = function(e) {
    return (0, n.reduce)((0, s.isFunction)(e) ? (t, r)=>e(t, r) < 0 ? t : r : (e, t)=>e < t ? e : t);
};
