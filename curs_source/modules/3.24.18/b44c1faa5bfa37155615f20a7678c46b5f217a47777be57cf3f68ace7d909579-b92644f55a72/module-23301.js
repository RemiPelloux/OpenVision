"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.concatWith = void 0;
const n = require("./module-51078.js"), s = require("./module-3006.js");
exports.concatWith = function(...e) {
    return (t)=>new n.Observable((r)=>{
            (0, s.concatAll)()((0, n.from)([
                t,
                ...e
            ])).subscribe(r);
        });
};
