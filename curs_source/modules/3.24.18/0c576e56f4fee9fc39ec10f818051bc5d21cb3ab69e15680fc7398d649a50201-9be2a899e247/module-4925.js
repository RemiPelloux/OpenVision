"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.startWith = void 0;
const n = require("./module-1078.js");
exports.startWith = function(...e) {
    return (t)=>new n.Observable((r)=>{
            (0, n.subscribeToArray)(e, (0, n.operate)({
                destination: r,
                complete: ()=>t.subscribe(r)
            }));
        });
};
