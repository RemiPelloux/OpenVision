"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.using = void 0;
const n = require("./module-51078.js"), s = require("./module-744.js");
exports.using = function(e, t) {
    return new n.Observable((r)=>{
        const o = e(), i = t(o);
        return (i ? (0, n.from)(i) : s.EMPTY).subscribe(r), ()=>{
            o && o.unsubscribe();
        };
    });
};
