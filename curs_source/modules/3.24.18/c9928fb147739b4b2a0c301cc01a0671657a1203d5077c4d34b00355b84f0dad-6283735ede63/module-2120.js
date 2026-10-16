Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.switchScan = void 0;
const s = require("./module-711.js"), o = require("./module-1078.js");
exports.switchScan = function(e, a) {
    return (n)=>new o.Observable((r)=>{
            let t = a;
            return (0, s.switchMap)((a, n)=>e(t, a, n))(n).subscribe((0, o.operate)({
                destination: r,
                next: (e)=>{
                    t = e, r.next(e);
                }
            })), ()=>{
                t = null;
            };
        });
};
