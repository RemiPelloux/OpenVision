"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.pairwise = void 0;
const n = require("./module-51078.js");
exports.pairwise = function() {
    return (e)=>new n.Observable((t)=>{
            let r, o = !1;
            e.subscribe((0, n.operate)({
                destination: t,
                next: (e)=>{
                    const n = r;
                    r = e, o && t.next([
                        n,
                        e
                    ]), o = !0;
                }
            }));
        });
};
