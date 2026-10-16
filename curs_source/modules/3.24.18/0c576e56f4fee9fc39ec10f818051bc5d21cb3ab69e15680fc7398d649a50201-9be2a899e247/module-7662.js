"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.delayWhen = void 0;
const n = require("./module-6409.js"), o = require("./module-7742.js"), s = require("./module-6426.js"), i = require("./module-1207.js"), a = require("./module-7996.js"), c = require("./module-8143.js");
exports.delayWhen = function e(t, r) {
    return r ? (i)=>(0, n.concat)((0, a.rx)(r, (0, o.take)(1), (0, s.ignoreElements)()), (0, a.rx)(i, e(t))) : (0, i.mergeMap)((e, r)=>(0, a.rx)(t(e, r), (0, o.take)(1), (0, c.map)(()=>e)));
};
