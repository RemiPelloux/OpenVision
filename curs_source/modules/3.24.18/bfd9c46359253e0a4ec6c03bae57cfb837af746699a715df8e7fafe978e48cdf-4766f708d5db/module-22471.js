"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.toArray = void 0;
const n = require("./module-78339.js"), s = require("./module-51078.js"), o = (e, t)=>(e.push(t), e);
exports.toArray = function() {
    return (e)=>new s.Observable((t)=>{
            (0, n.reduce)(o, [])(e).subscribe(t);
        });
};
