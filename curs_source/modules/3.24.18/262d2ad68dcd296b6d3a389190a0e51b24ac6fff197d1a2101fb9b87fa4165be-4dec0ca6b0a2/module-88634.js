"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.zipWith = void 0;
const n = require("./module-51078.js"), o = require("./module-39190.js");
exports.zipWith = function(...e) {
    return (t)=>new n.Observable((r)=>{
            (0, o.zip)(t, ...e).subscribe(r);
        });
};
