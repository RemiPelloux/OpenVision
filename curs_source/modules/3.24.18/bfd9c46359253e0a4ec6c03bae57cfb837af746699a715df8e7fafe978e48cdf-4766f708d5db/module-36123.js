"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.connectable = void 0;
const n = require("./module-83043.js"), s = require("./module-51078.js"), o = require("./module-33737.js"), i = {
    connector: ()=>new n.Subject,
    resetOnDisconnect: !0
};
exports.connectable = function(e, t = i) {
    let r = null;
    const { connector: n, resetOnDisconnect: a = !0 } = t;
    let c = n();
    const l = new s.Observable((e)=>c.subscribe(e));
    return l.connect = ()=>(r && !r.closed || (r = (0, o.defer)(()=>e).subscribe(c), a && r.add(()=>c = n())), r), l;
};
