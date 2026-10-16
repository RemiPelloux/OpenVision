Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.pairwise = void 0;
const s = require("./module-1078.js");
exports.pairwise = function() {
    return (e)=>new s.Observable((a)=>{
            let n, o = !1;
            e.subscribe((0, s.operate)({
                destination: a,
                next: (e)=>{
                    const s = n;
                    n = e, o && a.next([
                        s,
                        e
                    ]), o = !0;
                }
            }));
        });
};
