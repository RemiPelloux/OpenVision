Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.merge = void 0;
const s = require("./module-1078.js"), o = require("./module-6102.js"), r = require("./module-744.js"), t = require("./module-5619.js"), i = require("./module-9880.js");
exports.merge = function(...e) {
    const a = (0, t.popScheduler)(e), n = (0, t.popNumber)(e, 1 / 0), m = e;
    return m.length ? 1 === m.length ? (0, s.from)(m[0]) : (0, o.mergeAll)(n)(a ? (0, i.scheduled)(m, a) : (0, s.from)(m)) : r.EMPTY;
};
