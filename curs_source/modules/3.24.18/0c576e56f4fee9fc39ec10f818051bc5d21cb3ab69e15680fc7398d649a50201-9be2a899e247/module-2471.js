"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.toArray = void 0;
const n = require("./module-8339.js"), o = require("./module-1078.js"), s = (e, t)=>(e.push(t), e);
exports.toArray = function() {
    return (e)=>new o.Observable((t)=>{
            (0, n.reduce)(s, [])(e).subscribe(t);
        });
};
