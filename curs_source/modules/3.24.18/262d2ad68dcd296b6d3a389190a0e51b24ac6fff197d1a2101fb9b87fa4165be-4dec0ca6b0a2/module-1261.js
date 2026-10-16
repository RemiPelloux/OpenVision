"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.mergeWith = void 0;
const n = require("./module-51078.js"), o = require("./module-6102.js");
exports.mergeWith = function(...e) {
    return (t)=>new n.Observable((r)=>{
            (0, o.mergeAll)()((0, n.from)([
                t,
                ...e
            ])).subscribe(r);
        });
};
