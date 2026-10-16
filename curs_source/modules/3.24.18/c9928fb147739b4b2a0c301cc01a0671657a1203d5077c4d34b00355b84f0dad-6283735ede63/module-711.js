Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.switchMap = void 0;
const s = require("./module-1078.js");
exports.switchMap = function(e) {
    return (a)=>new s.Observable((n)=>{
            let o = null, r = 0, t = !1;
            const i = ()=>t && !o && n.complete();
            a.subscribe((0, s.operate)({
                destination: n,
                next: (a)=>{
                    o?.unsubscribe();
                    const t = r++;
                    (0, s.from)(e(a, t)).subscribe(o = (0, s.operate)({
                        destination: n,
                        complete: ()=>{
                            o = null, i();
                        }
                    }));
                },
                complete: ()=>{
                    t = !0, i();
                }
            }));
        });
};
