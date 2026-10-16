Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.connectable = void 0;
const s = require("./module-3043.js"), o = require("./module-1078.js"), r = require("./module-3737.js"), t = {
    connector: ()=>new s.Subject,
    resetOnDisconnect: !0
};
exports.connectable = function(e, a = t) {
    let n = null;
    const { connector: s, resetOnDisconnect: i = !0 } = a;
    let m = s();
    const l = new o.Observable((e)=>m.subscribe(e));
    return l.connect = ()=>(n && !n.closed || (n = (0, r.defer)(()=>e).subscribe(m), i && n.add(()=>m = s())), n), l;
};
