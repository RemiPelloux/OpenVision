"use strict";
require.d(exports, {
    HL: ()=>o,
    QT: ()=>a,
    kU: ()=>s
});
var n = require("./module-6038.js");
function s(t, e, r) {
    return Object.defineProperty(t, e, {
        value: r,
        writable: !0,
        enumerable: !0,
        configurable: !0
    }), r;
}
function i(t, e, r) {
    if ("#" !== r.charAt(0)) return {
        kind: "scalar",
        T: Number(r)
    };
    const n = e[Number(r.slice(1))];
    return "function" == typeof n ? {
        kind: "message",
        T: n
    } : {
        kind: "enum",
        T: t.getEnumType(n)
    };
}
class o extends n.Message {
    static get typeName() {
        const t = this;
        return s(t, "typeName", t.$p() + function(t) {
            const e = t[0], r = e.indexOf("|");
            return -1 === r ? e : e.slice(0, r);
        }(t.$()));
    }
    static get fields() {
        const t = this, e = t.$(), r = t.runtime;
        return s(t, "fields", r.util.newFieldList(()=>(function(t, e) {
                const r = e[0].split("|"), n = e.slice(1), s = [];
                for(let e = 1; e < r.length; e++){
                    const o = r[e].split(" "), a = Number(o[0]), u = o[1];
                    let c = o[2], l = o[3];
                    const m = c.charAt(c.length - 1);
                    "?" !== m && "*" !== m || (l = m, c = c.slice(0, -1));
                    const d = c.indexOf(",");
                    if (-1 !== d) {
                        s.push({
                            no: a,
                            name: u,
                            kind: "map",
                            K: Number(c.slice(0, d)),
                            V: i(t, n, c.slice(d + 1))
                        });
                        continue;
                    }
                    const f = Object.assign({
                        no: a,
                        name: u
                    }, i(t, n, c));
                    "?" === l ? f.opt = !0 : "*" === l ? f.repeated = !0 : void 0 !== l && (f.oneof = l), s.push(f);
                }
                return s;
            })(r, e)));
    }
}
function a(t, e, r, n, s) {
    const i = r.slice(r.lastIndexOf(".") + 1);
    let o, a;
    if (1 === s) {
        const t = function(t) {
            return (t.charAt(0) + t.slice(1).replace(/[A-Z]/g, (t)=>"_" + t)).toUpperCase() + "_";
        }(i);
        a = n.map((t)=>t[1]), o = a.map((e)=>t + e);
    } else o = n.map((t)=>t[1]), a = void 0 === s ? function(t, e) {
        const r = (t.charAt(0) + t.slice(1).replace(/[A-Z]/g, (t)=>"_" + t)).toLowerCase() + "_", n = [];
        for (const t of e){
            if (!t.toLowerCase().startsWith(r)) return e.slice();
            const s = t.slice(r.length);
            if ("" === s || /^[0-9]/.test(s)) return e.slice();
            n.push(s);
        }
        return n;
    }(i, o) : s;
    const u = {}, c = [];
    for(let t = 0; t < n.length; t++){
        const e = n[t][0];
        u[a[t]] = e, u[e] = a[t], c.push({
            no: e,
            name: o[t]
        });
    }
    return t.util.setEnumType(u, e + r, c), u;
}
