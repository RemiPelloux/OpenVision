"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.connect = void 0;
const n = require("./module-51078.js"), s = require("./module-83043.js"), o = require("./module-96824.js"), i = {
    connector: ()=>new s.Subject
};
exports.connect = function(e, t = i) {
    const { connector: r } = t;
    return (t)=>new n.Observable((s)=>{
            const i = r();
            (0, n.from)(e((0, o.fromSubscribable)(i))).subscribe(s), s.add(t.subscribe(i));
        });
};
