"use strict";
require.d(exports, {
    HL: ()=>i,
    QT: ()=>a,
    kU: ()=>o
});
var n = require("./module-36038.js");
function o(e, t, r) {
    return Object.defineProperty(e, t, {
        value: r,
        writable: !0,
        enumerable: !0,
        configurable: !0
    }), r;
}
function s(e, t, r) {
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
        return o(e, "typeName", e.$p() + function(e) {
            const t = e[0], r = t.indexOf("|");
            return -1 === r ? t : t.slice(0, r);
        }(e.$()));
    }
    static get fields() {
        const e = this, t = e.$(), r = e.runtime;
        return o(e, "fields", r.util.newFieldList(()=>(function(e, t) {
                const r = t[0].split("|"), n = t.slice(1), o = [];
                for(let t = 1; t < r.length; t++){
                    const i = r[t].split(" "), a = Number(i[0]), l = i[1];
                    let c = i[2], u = i[3];
                    const d = c.charAt(c.length - 1);
                    "?" !== d && "*" !== d || (u = d, c = c.slice(0, -1));
                    const p = c.indexOf(",");
                    if (-1 !== p) {
                        o.push({
                            no: a,
                            name: l,
                            kind: "map",
                            K: Number(c.slice(0, p)),
                            V: s(e, n, c.slice(p + 1))
                        });
                        continue;
                    }
                    const h = Object.assign({
                        no: a,
                        name: l
                    }, s(e, n, c));
                    "?" === u ? h.opt = !0 : "*" === u ? h.repeated = !0 : void 0 !== u && (h.oneof = u), o.push(h);
                }
                return o;
            })(r, t)));
    }
}
function a(e, t, r, n, o) {
    const s = r.slice(r.lastIndexOf(".") + 1);
    let i, a;
    if (1 === o) {
        const e = function(e) {
            return (e.charAt(0) + e.slice(1).replace(/[A-Z]/g, (e)=>"_" + e)).toUpperCase() + "_";
        }(s);
        a = n.map((e)=>e[1]), i = a.map((t)=>e + t);
    } else i = n.map((e)=>e[1]), a = void 0 === o ? function(e, t) {
        const r = (e.charAt(0) + e.slice(1).replace(/[A-Z]/g, (e)=>"_" + e)).toLowerCase() + "_", n = [];
        for (const e of t){
            if (!e.toLowerCase().startsWith(r)) return t.slice();
            const o = e.slice(r.length);
            if ("" === o || /^[0-9]/.test(o)) return t.slice();
            n.push(o);
        }
        return n;
    }(s, i) : o;
    const l = {}, c = [];
    for(let e = 0; e < n.length; e++){
        const t = n[e][0];
        l[a[e]] = t, l[t] = a[e], c.push({
            no: t,
            name: i[e]
        });
    }
    return e.util.setEnumType(l, t + r, c), l;
}
