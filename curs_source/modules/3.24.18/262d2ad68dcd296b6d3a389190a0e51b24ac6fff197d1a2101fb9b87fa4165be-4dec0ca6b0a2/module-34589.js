"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.using = void 0;
const n = require("./module-51078.js"), o = require("./module-744.js");
exports.using = function(e, t) {
    return new n.Observable((r)=>{
        const s = e(), i = t(s);
        return (i ? (0, n.from)(i) : o.EMPTY).subscribe(r), ()=>{
            s && s.unsubscribe();
        };
    });
};
