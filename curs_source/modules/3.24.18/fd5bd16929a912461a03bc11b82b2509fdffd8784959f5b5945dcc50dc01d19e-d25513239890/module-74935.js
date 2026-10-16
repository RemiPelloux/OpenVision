"use strict";
require.d(exports, {
    Z: ()=>u
});
var n = require("./module-68521.js"), s = require(480), i = require(61178);
function o(e) {
    try {
        const t = new Set(Array.from(e.match(/([A-Z_]){3,}/g) ?? []));
        return t.delete("CONFIG"), t.delete("CONFIG_PREFIX_SEPARATOR"), t.delete("ENV"), [
            ...t
        ].join(", ");
    } catch (t) {
        return e;
    }
}
var a = require(50800), c = require(68395);
const l = (e)=>{
    return "function" == typeof e ? async ()=>await e() : (t = e, ()=>Promise.resolve(t));
    var t;
}, u = ({ environmentVariableSelector: e, configFileSelector: t, default: r }, u = {})=>{
    const { signingName: d, logger: h } = u, f = {
        signingName: d,
        logger: h
    };
    return (0, n.B)((0, s.c)((p = e, g = f, async ()=>{
        try {
            const e = p(process.env, g);
            if (void 0 === e) throw new Error;
            return e;
        } catch (e) {
            throw new i.C(e.message || `Not found in ENV: ${o(p.toString())}`, {
                logger: g?.logger
            });
        }
    }), ((e, { preferredFile: t = "config", ...r } = {})=>async ()=>{
            const n = (0, a.Bz)(r), { configFile: s, credentialsFile: l } = await (0, c.p)(r), u = l[n] || {}, d = s[n] || {}, h = "config" === t ? {
                ...u,
                ...d
            } : {
                ...d,
                ...u
            };
            try {
                const r = e(h, "config" === t ? s : l);
                if (void 0 === r) throw new Error;
                return r;
            } catch (t) {
                throw new i.C(t.message || `Not found in config files w/ profile [${n}]: ${o(e.toString())}`, {
                    logger: r.logger
                });
            }
        })(t, u), l(r)));
    var p, g;
};
