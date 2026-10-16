"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.takeUntil = void 0;
const n = require("./module-51078.js"), o = require("./module-64462.js");
exports.takeUntil = function(e) {
    return (t)=>new n.Observable((r)=>{
            (0, n.from)(e).subscribe((0, n.operate)({
                destination: r,
                next: ()=>r.complete(),
                complete: o.noop
            })), !r.closed && t.subscribe(r);
        });
};
