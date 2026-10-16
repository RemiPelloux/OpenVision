"use strict";
require.d(exports, {
    HL: ()=>i,
    QT: ()=>a,
    kU: ()=>s
});
var n = require("./module-36038.js");
function s(e, t, r) {
    return Object.defineProperty(e, t, {
        value: r,
        writable: !0,
        enumerable: !0,
        configurable: !0
    }), r;
}
function o(e, t, r) {
    if ("#" !== r.charAt(0)) return {
        kind: "scalar",
        T: Number(r)
    };
    const n = t[Number(r.slice(1))];
    return "function" == typeof n ? {
        kind: "message",
        T: n
    } : {
        kind: "enum",
        T: e.getEnumType(n)
    };
}
class i extends n.Message {
    static get typeName() {
        const e = this;
        return s(e, "typeName", e.$p() + function(e) {
            const t = e[0], r = t.indexOf("|");
            return -1 === r ? t : t.slice(0, r);
        }(e.$()));
    }
    static get fields() {
        const e = this, t = e.$(), r = e.runtime;
        return s(e, "fields", r.util.newFieldList(()=>(function(e, t) {
                const r = t[0].split("|"), n = t.slice(1), s = [];
                for(let t = 1; t < r.length; t++){
                    const i = r[t].split(" "), a = Number(i[0]), c = i[1];
                    let l = i[2], u = i[3];
                    const d = l.charAt(l.length - 1);
                    "?" !== d && "*" !== d || (u = d, l = l.slice(0, -1));
                    const p = l.indexOf(",");
                    if (-1 !== p) {
                        s.push({
                            no: a,
                            name: c,
                            kind: "map",
                            K: Number(l.slice(0, p)),
                            V: o(e, n, l.slice(p + 1))
                        });
                        continue;
                    }
                    const m = Object.assign({
                        no: a,
                        name: c
                    }, o(e, n, l));
                    "?" === u ? m.opt = !0 : "*" === u ? m.repeated = !0 : void 0 !== u && (m.oneof = u), s.push(m);
                }
                return s;
            })(r, t)));
    }
}
function a(e, t, r, n, s) {
    const o = r.slice(r.lastIndexOf(".") + 1);
    let i, a;
    if (1 === s) {
        const e = function(e) {
            return (e.charAt(0) + e.slice(1).replace(/[A-Z]/g, (e)=>"_" + e)).toUpperCase() + "_";
        }(o);
        a = n.map((e)=>e[1]), i = a.map((t)=>e + t);
    } else i = n.map((e)=>e[1]), a = void 0 === s ? function(e, t) {
        const r = (e.charAt(0) + e.slice(1).replace(/[A-Z]/g, (e)=>"_" + e)).toLowerCase() + "_", n = [];
        for (const e of t){
            if (!e.toLowerCase().startsWith(r)) return t.slice();
            const s = e.slice(r.length);
            if ("" === s || /^[0-9]/.test(s)) return t.slice();
            n.push(s);
        }
        return n;
    }(o, i) : s;
    const c = {}, l = [];
    for(let e = 0; e < n.length; e++){
        const t = n[e][0];
        c[a[e]] = t, c[t] = a[e], l.push({
            no: t,
            name: i[e]
        });
    }
    return e.util.setEnumType(c, t + r, l), c;
}
