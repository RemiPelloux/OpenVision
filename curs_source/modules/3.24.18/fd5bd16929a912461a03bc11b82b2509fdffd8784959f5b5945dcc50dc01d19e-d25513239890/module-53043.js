"use strict";
require.r(exports), require.d(exports, {
    parseUrl: ()=>n
});
const n = (e)=>{
    if ("string" == typeof e) return n(new URL(e));
    const { hostname: t, pathname: r, port: s, protocol: i, search: o } = e;
    let a;
    return o && (a = function(e) {
        const t = {};
        if (e = e.replace(/^\?/, "")) for (const r of e.split("&")){
            let [e, n = null] = r.split("=");
            e = decodeURIComponent(e), n && (n = decodeURIComponent(n)), e in t ? Array.isArray(t[e]) ? t[e].push(n) : t[e] = [
                t[e],
                n
            ] : t[e] = n;
        }
        return t;
    }(o)), {
        hostname: t,
        port: s ? parseInt(s) : void 0,
        protocol: i,
        path: r,
        query: a
    };
};
