"use strict";
require.r(exports), require.d(exports, {
    resolveDefaultsModeConfig: ()=>u
});
var n = require("./module-24060.js"), s = require("./module-74935.js"), i = require("./module-68521.js");
const o = "AWS_REGION", a = "AWS_DEFAULT_REGION", c = [
    "in-region",
    "cross-region",
    "mobile",
    "standard",
    "legacy"
], l = {
    environmentVariableSelector: (e)=>e.AWS_DEFAULTS_MODE,
    configFileSelector: (e)=>e.defaults_mode,
    default: "legacy"
}, u = ({ region: e = (0, s.Z)(n.GG), defaultsMode: t = (0, s.Z)(l) } = {})=>(0, i.B)(async ()=>{
        const r = "function" == typeof t ? await t() : t;
        switch(r?.toLowerCase()){
            case "auto":
                return d(e);
            case "in-region":
            case "cross-region":
            case "mobile":
            case "standard":
            case "legacy":
                return Promise.resolve(r?.toLocaleLowerCase());
            case void 0:
                return Promise.resolve("legacy");
            default:
                throw new Error(`Invalid parameter for "defaultsMode", expect ${c.join(", ")}, got ${r}`);
        }
    }), d = async (e)=>{
    if (e) {
        const t = "function" == typeof e ? await e() : e, r = await h();
        return r ? t === r ? "in-region" : "cross-region" : "standard";
    }
    return "standard";
}, h = async ()=>{
    if (process.env.AWS_EXECUTION_ENV && (process.env[o] || process.env[a])) return process.env[o] ?? process.env[a];
    if (!process.env.AWS_EC2_METADATA_DISABLED) try {
        const { getInstanceMetadataEndpoint: e, httpRequest: t } = await require.e(213).then(require.bind(require, 95975)), n = await e();
        return (await t({
            ...n,
            path: "/latest/meta-data/placement/region"
        })).toString();
    } catch (e) {}
};
