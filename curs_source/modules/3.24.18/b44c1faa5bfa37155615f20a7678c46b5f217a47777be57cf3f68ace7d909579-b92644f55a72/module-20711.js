"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.switchMap = void 0;
const n = require("./module-51078.js");
exports.switchMap = function(e) {
    return (t)=>new n.Observable((r)=>{
            let s = null, o = 0, i = !1;
            const a = ()=>i && !s && r.complete();
            t.subscribe((0, n.operate)({
                destination: r,
                next: (t)=>{
                    s?.unsubscribe();
                    const i = o++;
                    (0, n.from)(e(t, i)).subscribe(s = (0, n.operate)({
                        destination: r,
                        complete: ()=>{
                            s = null, a();
                        }
                    }));
                },
                complete: ()=>{
                    i = !0, a();
                }
            }));
        });
};
