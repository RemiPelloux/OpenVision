Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.expand = void 0;
const s = require("./module-1078.js"), o = require("./module-9935.js");
exports.expand = function(e, a = 1 / 0, n) {
    return a = (a || 0) < 1 ? 1 / 0 : a, (r)=>new s.Observable((s)=>(0, o.mergeInternals)(r, s, e, a, void 0, !0, n));
};
