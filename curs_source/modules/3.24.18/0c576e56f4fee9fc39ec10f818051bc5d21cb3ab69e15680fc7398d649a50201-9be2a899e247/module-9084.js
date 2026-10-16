"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isEmpty = void 0;
const n = require("./module-1078.js");
exports.isEmpty = function() {
    return (e)=>new n.Observable((t)=>{
            e.subscribe((0, n.operate)({
                destination: t,
                next: ()=>{
                    t.next(!1), t.complete();
                },
                complete: ()=>{
                    t.next(!0), t.complete();
                }
            }));
        });
};
