"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.reduce = void 0;
const n = require("./module-19904.js"), o = require("./module-51078.js");
exports.reduce = function(e, t) {
    const r = arguments.length >= 2;
    return (s)=>new o.Observable((o)=>(0, n.scanInternals)(e, t, r, !1, !0, s, o));
};
