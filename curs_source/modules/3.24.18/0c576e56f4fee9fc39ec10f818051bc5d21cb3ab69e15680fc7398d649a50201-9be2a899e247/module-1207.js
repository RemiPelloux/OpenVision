"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mergeMap = void 0;
const n = require("./module-1078.js"), o = require("./module-9935.js");
exports.mergeMap = function(e, t = 1 / 0) {
    return (r)=>new n.Observable((n)=>(0, o.mergeInternals)(r, n, e, t));
};
