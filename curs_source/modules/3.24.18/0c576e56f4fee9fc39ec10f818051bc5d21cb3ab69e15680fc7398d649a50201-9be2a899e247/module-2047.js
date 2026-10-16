"use strict";
require.d(exports, {
    m: ()=>o,
    u: ()=>s
});
var n = require("./module-1771.js");
function o(e, t) {
    if (void 0 === t) return {
        headers: t,
        cursorAuthHeaderValue: void 0,
        cursorAuthOrigin: void 0
    };
    const r = Object.entries(t), o = r.find(([e])=>e.toLowerCase() === n.Qy);
    if (void 0 === o) return {
        headers: t,
        cursorAuthHeaderValue: void 0,
        cursorAuthOrigin: void 0
    };
    let s;
    try {
        s = new URL(e).origin;
    } catch  {
        s = void 0;
    }
    return {
        headers: Object.fromEntries(r.filter(([e])=>e.toLowerCase() !== n.Qy)),
        cursorAuthHeaderValue: o[1],
        cursorAuthOrigin: s
    };
}
function s(e, t, r) {
    return async (o, s)=>{
        let i;
        try {
            i = new URL("string" == typeof o ? o : o.toString()).origin;
        } catch  {
            return r(o, s);
        }
        if (i !== t) return r(o, s);
        const a = await e();
        if (void 0 === a || 0 === a.length) return r(o, s);
        const c = new Headers(s?.headers);
        return c.set(n.Qy, a), r(o, {
            ...s,
            headers: c,
            redirect: "manual"
        });
    };
}
