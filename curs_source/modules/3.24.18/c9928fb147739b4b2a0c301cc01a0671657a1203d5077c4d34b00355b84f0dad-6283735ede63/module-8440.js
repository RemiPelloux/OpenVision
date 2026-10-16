Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mergeScan = void 0;
const s = require("./module-1078.js"), o = require("./module-9935.js");
exports.mergeScan = function(e, a, n = 1 / 0) {
    return (r)=>new s.Observable((s)=>{
            let t = a;
            return (0, o.mergeInternals)(r, s, (a, n)=>e(t, a, n), n, (e)=>{
                t = e;
            }, !1, void 0, ()=>t = null);
        });
};
