"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.connectable = void 0;
const n = require("./module-3043.js"), o = require("./module-1078.js"), s = require("./module-3737.js"), i = {
    connector: ()=>new n.Subject,
    resetOnDisconnect: !0
};
exports.connectable = function(e, t = i) {
    let r = null;
    const { connector: n, resetOnDisconnect: a = !0 } = t;
    let c = n();
    const u = new o.Observable((e)=>c.subscribe(e));
    return u.connect = ()=>(r && !r.closed || (r = (0, s.defer)(()=>e).subscribe(c), a && r.add(()=>c = n())), r), u;
};
