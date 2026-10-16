"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.materialize = void 0;
const n = require("./module-1078.js");
exports.materialize = function() {
    return (e)=>new n.Observable((t)=>{
            e.subscribe((0, n.operate)({
                destination: t,
                next: (e)=>{
                    t.next((0, n.nextNotification)(e));
                },
                error: (e)=>{
                    t.next((0, n.errorNotification)(e)), t.complete();
                },
                complete: ()=>{
                    t.next(n.COMPLETE_NOTIFICATION), t.complete();
                }
            }));
        });
};
