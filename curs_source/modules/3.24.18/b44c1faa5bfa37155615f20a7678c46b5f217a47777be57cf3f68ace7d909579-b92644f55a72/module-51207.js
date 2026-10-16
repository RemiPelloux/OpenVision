"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mergeMap = void 0;
const n = require("./module-51078.js"), s = require("./module-59935.js");
exports.mergeMap = function(e, t = 1 / 0) {
    return (r)=>new n.Observable((n)=>(0, s.mergeInternals)(r, n, e, t));
};
