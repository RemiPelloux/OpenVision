require.d(exports, {
    Z: ()=>d
});
var n = require("./module-68521.js"), a = require(480), o = require(61178);
function i(e) {
    try {
        const t = new Set(Array.from(e.match(/([A-Z_]){3,}/g) ?? []));
        return t.delete("CONFIG"), t.delete("CONFIG_PREFIX_SEPARATOR"), t.delete("ENV"), [
            ...t
        ].join(", ");
    } catch (t) {
        return e;
    }
}
var s = require(50800), c = require(68395);
const l = (e)=>{
    return "function" == typeof e ? async ()=>await e() : (t = e, ()=>Promise.resolve(t));
    var t;
}, d = ({ environmentVariableSelector: e, configFileSelector: t, default: r }, d = {})=>{
    const { signingName: u, logger: p } = d, f = {
        signingName: u,
        logger: p
    };
    return (0, n.B)((0, a.c)((g = e, m = f, async ()=>{
        try {
            const e = g(process.env, m);
            if (void 0 === e) throw new Error;
            return e;
        } catch (e) {
            throw new o.C(e.message || `Not found in ENV: ${i(g.toString())}`, {
                logger: m?.logger
            });
        }
    }), ((e, { preferredFile: t = "config", ...r } = {})=>async ()=>{
            const n = (0, s.Bz)(r), { configFile: a, credentialsFile: l } = await (0, c.p)(r), d = l[n] || {}, u = a[n] || {}, p = "config" === t ? {
                ...d,
                ...u
            } : {
                ...u,
                ...d
            };
            try {
                const r = e(p, "config" === t ? a : l);
                if (void 0 === r) throw new Error;
                return r;
            } catch (t) {
                throw new o.C(t.message || `Not found in config files w/ profile [${n}]: ${i(e.toString())}`, {
                    logger: r.logger
                });
            }
        })(t, d), l(r)));
    var g, m;
};
