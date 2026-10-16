"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.expand = void 0;
const n = require("./module-1078.js"), o = require("./module-9935.js");
exports.expand = function(e, t = 1 / 0, r) {
    return t = (t || 0) < 1 ? 1 / 0 : t, (s)=>new n.Observable((n)=>(0, o.mergeInternals)(s, n, e, t, void 0, !0, r));
};
