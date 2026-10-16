Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.concat = void 0;
const s = require("./module-1078.js"), o = require("./module-3006.js"), r = require("./module-5619.js"), t = require("./module-9880.js");
exports.concat = function(...e) {
    const a = (0, r.popScheduler)(e);
    return (0, o.concatAll)()(a ? (0, t.scheduled)(e, a) : (0, s.from)(e));
};
