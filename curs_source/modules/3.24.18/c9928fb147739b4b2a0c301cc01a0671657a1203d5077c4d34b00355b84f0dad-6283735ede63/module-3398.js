Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.joinAllInternals = void 0;
const s = require("./module-4896.js"), o = require("./module-5683.js"), r = require("./module-7410.js"), t = require("./module-1207.js"), i = require("./module-2471.js");
exports.joinAllInternals = function(e, a) {
    return (0, r.pipe)((0, i.toArray)(), (0, t.mergeMap)((a)=>e(a)), a ? (0, o.mapOneOrManyArgs)(a) : s.identity);
};
