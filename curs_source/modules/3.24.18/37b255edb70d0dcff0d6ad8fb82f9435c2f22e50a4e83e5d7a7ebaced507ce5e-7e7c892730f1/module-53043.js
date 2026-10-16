require.r(exports), require.d(exports, {
    parseUrl: ()=>n
});
const n = (e)=>{
    if ("string" == typeof e) return n(new URL(e));
    const { hostname: t, pathname: r, port: a, protocol: o, search: i } = e;
    let s;
    return i && (s = function(e) {
        const t = {};
        if (e = e.replace(/^\?/, "")) for (const r of e.split("&")){
            let [e, n = null] = r.split("=");
            e = decodeURIComponent(e), n && (n = decodeURIComponent(n)), e in t ? Array.isArray(t[e]) ? t[e].push(n) : t[e] = [
                t[e],
                n
            ] : t[e] = n;
        }
        return t;
    }(i)), {
        hostname: t,
        port: a ? parseInt(a) : void 0,
        protocol: o,
        path: r,
        query: s
    };
};
