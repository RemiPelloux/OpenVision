require.d(exports, {
    Z: ()=>d
});
var r = require("./module-68521.js"), o = require(480), a = require(61178);
function s(e) {
    try {
        const t = new Set(Array.from(e.match(/([A-Z_]){3,}/g) ?? []));
        return t.delete("CONFIG"), t.delete("CONFIG_PREFIX_SEPARATOR"), t.delete("ENV"), [
            ...t
        ].join(", ");
    } catch (t) {
        return e;
    }
}
var i = require(50800), c = require("./module-68395.js");
const l = (e)=>{
    return "function" == typeof e ? async ()=>await e() : (t = e, ()=>Promise.resolve(t));
    var t;
}, d = ({ environmentVariableSelector: e, configFileSelector: t, default: n }, d = {})=>{
    const { signingName: u, logger: f } = d, p = {
        signingName: u,
        logger: f
    };
    return (0, r.B)((0, o.c)((g = e, h = p, async ()=>{
        try {
            const e = g(process.env, h);
            if (void 0 === e) throw new Error;
            return e;
        } catch (e) {
            throw new a.C(e.message || `Not found in ENV: ${s(g.toString())}`, {
                logger: h?.logger
            });
        }
    }), ((e, { preferredFile: t = "config", ...n } = {})=>async ()=>{
            const r = (0, i.Bz)(n), { configFile: o, credentialsFile: l } = await (0, c.p)(n), d = l[r] || {}, u = o[r] || {}, f = "config" === t ? {
                ...d,
                ...u
            } : {
                ...u,
                ...d
            };
            try {
                const n = e(f, "config" === t ? o : l);
                if (void 0 === n) throw new Error;
                return n;
            } catch (t) {
                throw new a.C(t.message || `Not found in config files w/ profile [${r}]: ${s(e.toString())}`, {
                    logger: n.logger
                });
            }
        })(t, d), l(n)));
    var g, h;
};
