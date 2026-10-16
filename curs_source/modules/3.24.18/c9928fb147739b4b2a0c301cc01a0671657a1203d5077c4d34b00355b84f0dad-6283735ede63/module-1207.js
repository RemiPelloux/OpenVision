Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mergeMap = void 0;
const s = require("./module-1078.js"), o = require("./module-9935.js");
exports.mergeMap = function(e, a = 1 / 0) {
    return (n)=>new s.Observable((s)=>(0, o.mergeInternals)(n, s, e, a));
};
