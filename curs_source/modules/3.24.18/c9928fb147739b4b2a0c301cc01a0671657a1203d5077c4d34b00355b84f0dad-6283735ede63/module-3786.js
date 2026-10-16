Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.takeLast = void 0;
const s = require("./module-744.js"), o = require("./module-1078.js");
exports.takeLast = function(e) {
    return e <= 0 ? ()=>s.EMPTY : (a)=>new o.Observable((n)=>{
            let s = new Array(e), r = 0;
            a.subscribe((0, o.operate)({
                destination: n,
                next: (a)=>{
                    s[r++ % e] = a;
                },
                complete: ()=>{
                    const a = e <= r ? r : 0, o = Math.min(e, r);
                    for(let r = 0; r < o; r++)n.next(s[(a + r) % e]);
                    n.complete();
                },
                finalize: ()=>{
                    s = null;
                }
            }));
        });
};
