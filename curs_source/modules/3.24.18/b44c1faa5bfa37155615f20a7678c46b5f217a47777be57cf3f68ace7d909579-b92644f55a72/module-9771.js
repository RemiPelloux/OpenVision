"use strict";
require.d(exports, {
    AJ: ()=>o,
    l2: ()=>i
});
const n = "Cursor-CLI/unknown";
function s(e) {
    return void 0 !== e && "" !== e ? e : n;
}
function o(e) {
    return {
        ...e.customHeaders,
        "User-Agent": s(e.userAgent)
    };
}
function i(e, t = fetch, r) {
    return (n, o)=>{
        const i = new Headers(n instanceof Request ? n.headers : void 0);
        if (void 0 !== o?.headers && new Headers(o.headers).forEach((e, t)=>{
            i.set(t, e);
        }), void 0 !== r) for (const [e, t] of Object.entries(r))i.set(e, t);
        return i.set("User-Agent", s(e)), t(n, {
            ...o,
            headers: i
        });
    };
}
