"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.subscribeOn = void 0;
const n = require("./module-1078.js");
exports.subscribeOn = function(e, t = 0) {
    return (r)=>new n.Observable((n)=>{
            n.add(e.schedule(()=>r.subscribe(n), t));
        });
};
