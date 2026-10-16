"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.exhaustMap = void 0;
const n = require("./module-51078.js");
exports.exhaustMap = function(e) {
    return (t)=>new n.Observable((r)=>{
            let o = 0, s = null, i = !1;
            t.subscribe((0, n.operate)({
                destination: r,
                next: (t)=>{
                    s || (s = (0, n.operate)({
                        destination: r,
                        complete: ()=>{
                            s = null, i && r.complete();
                        }
                    }), (0, n.from)(e(t, o++)).subscribe(s));
                },
                complete: ()=>{
                    i = !0, !s && r.complete();
                }
            }));
        });
};
