"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.exhaustMap = void 0;
const n = require("./module-51078.js");
exports.exhaustMap = function(e) {
    return (t)=>new n.Observable((r)=>{
            let s = 0, o = null, i = !1;
            t.subscribe((0, n.operate)({
                destination: r,
                next: (t)=>{
                    o || (o = (0, n.operate)({
                        destination: r,
                        complete: ()=>{
                            o = null, i && r.complete();
                        }
                    }), (0, n.from)(e(t, s++)).subscribe(o));
                },
                complete: ()=>{
                    i = !0, !o && r.complete();
                }
            }));
        });
};
