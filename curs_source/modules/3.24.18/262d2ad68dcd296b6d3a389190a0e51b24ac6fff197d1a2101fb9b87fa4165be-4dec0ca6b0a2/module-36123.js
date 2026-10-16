"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.connectable = void 0;
const n = require("./module-83043.js"), o = require("./module-51078.js"), s = require("./module-33737.js"), i = {
    connector: ()=>new n.Subject,
    resetOnDisconnect: !0
};
exports.connectable = function(e, t = i) {
    let r = null;
    const { connector: n, resetOnDisconnect: a = !0 } = t;
    let l = n();
    const c = new o.Observable((e)=>l.subscribe(e));
    return c.connect = ()=>(r && !r.closed || (r = (0, s.defer)(()=>e).subscribe(l), a && r.add(()=>l = n())), r), c;
};
