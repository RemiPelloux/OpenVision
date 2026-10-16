"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.delayWhen = void 0;
const n = require("./module-76409.js"), o = require("./module-37742.js"), s = require("./module-16426.js"), i = require("./module-51207.js"), a = require("./module-87996.js"), l = require("./module-38143.js");
exports.delayWhen = function e(t, r) {
    return r ? (i)=>(0, n.concat)((0, a.rx)(r, (0, o.take)(1), (0, s.ignoreElements)()), (0, a.rx)(i, e(t))) : (0, i.mergeMap)((e, r)=>(0, a.rx)(t(e, r), (0, o.take)(1), (0, l.map)(()=>e)));
};
