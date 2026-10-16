"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.scan = void 0;
const n = require("./module-51078.js"), o = require("./module-19904.js");
exports.scan = function(e, t) {
    const r = arguments.length >= 2;
    return (s)=>new n.Observable((n)=>(0, o.scanInternals)(e, t, r, !0, !1, s, n));
};
