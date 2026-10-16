"use strict";
require.d(exports, {
    T: ()=>o
});
var n = require("./module-62340.js");
const s = new Set, i = (e)=>"string" == typeof e && (e.startsWith("fips-") || e.endsWith("-fips")), o = (e)=>{
    const { region: t, useFipsEndpoint: r } = e;
    if (!t) throw new Error("Region is missing");
    return Object.assign(e, {
        region: async ()=>{
            const e = ((e)=>i(e) ? [
                    "fips-aws-global",
                    "aws-fips"
                ].includes(e) ? "us-east-1" : e.replace(/fips-(dkr-|prod-)?|-fips/, "") : e)("function" == typeof t ? await t() : t);
            return ((e, t = n.X)=>{
                if (s.has(e) || t(e)) s.add(e);
                else {
                    if ("*" !== e) throw new Error(`Region not accepted: region="${e}" is not a valid hostname component.`);
                    console.warn('@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.');
                }
            })(e), e;
        },
        useFipsEndpoint: async ()=>{
            const e = "string" == typeof t ? t : await t();
            return !!i(e) || ("function" != typeof r ? Promise.resolve(!!r) : r());
        }
    });
};
