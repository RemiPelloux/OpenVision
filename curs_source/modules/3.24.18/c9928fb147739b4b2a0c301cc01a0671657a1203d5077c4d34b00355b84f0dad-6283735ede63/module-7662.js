Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.delayWhen = void 0;
const s = require("./module-6409.js"), o = require("./module-7742.js"), r = require("./module-6426.js"), t = require("./module-1207.js"), i = require("./module-7996.js"), m = require("./module-8143.js");
exports.delayWhen = function e(a, n) {
    return n ? (t)=>(0, s.concat)((0, i.rx)(n, (0, o.take)(1), (0, r.ignoreElements)()), (0, i.rx)(t, e(a))) : (0, t.mergeMap)((e, n)=>(0, i.rx)(a(e, n), (0, o.take)(1), (0, m.map)(()=>e)));
};
