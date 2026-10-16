"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.expand = void 0;
const n = require("./module-51078.js"), s = require("./module-59935.js");
exports.expand = function(e, t = 1 / 0, r) {
    return t = (t || 0) < 1 ? 1 / 0 : t, (o)=>new n.Observable((n)=>(0, s.mergeInternals)(o, n, e, t, void 0, !0, r));
};
