require.r(exports), require.d(exports, {
    parseUrl: ()=>r
});
const r = (e)=>{
    if ("string" == typeof e) return r(new URL(e));
    const { hostname: t, pathname: n, port: o, protocol: a, search: s } = e;
    let i;
    return s && (i = function(e) {
        const t = {};
        if (e = e.replace(/^\?/, "")) for (const n of e.split("&")){
            let [e, r = null] = n.split("=");
            e = decodeURIComponent(e), r && (r = decodeURIComponent(r)), e in t ? Array.isArray(t[e]) ? t[e].push(r) : t[e] = [
                t[e],
                r
            ] : t[e] = r;
        }
        return t;
    }(s)), {
        hostname: t,
        port: o ? parseInt(o) : void 0,
        protocol: a,
        path: n,
        query: i
    };
};
