"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.endWith = void 0;
const n = require("./module-1078.js");
exports.endWith = function(...e) {
    return (t)=>new n.Observable((r)=>{
            t.subscribe((0, n.operate)({
                destination: r,
                complete: ()=>{
                    (0, n.subscribeToArray)(e, r);
                }
            }));
        });
};
