"use strict";
require.r(exports), require.d(exports, {
    CONFIG_USE_DUALSTACK_ENDPOINT: ()=>o,
    CONFIG_USE_FIPS_ENDPOINT: ()=>d,
    DEFAULT_USE_DUALSTACK_ENDPOINT: ()=>a,
    DEFAULT_USE_FIPS_ENDPOINT: ()=>h,
    ENV_USE_DUALSTACK_ENDPOINT: ()=>i,
    ENV_USE_FIPS_ENDPOINT: ()=>u,
    NODE_REGION_CONFIG_FILE_OPTIONS: ()=>w.zH,
    NODE_REGION_CONFIG_OPTIONS: ()=>w.GG,
    NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS: ()=>c,
    NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS: ()=>f,
    REGION_ENV_NAME: ()=>w.Fc,
    REGION_INI_NAME: ()=>w.OR,
    getRegionInfo: ()=>E,
    nodeDualstackConfigSelectors: ()=>l,
    nodeFipsConfigSelectors: ()=>p,
    resolveCustomEndpointsConfig: ()=>m,
    resolveEndpointsConfig: ()=>y,
    resolveRegionConfig: ()=>S.T
});
var n = require("./module-86349.js"), s = require("./module-98025.js");
const i = "AWS_USE_DUALSTACK_ENDPOINT", o = "use_dualstack_endpoint", a = !1, c = {
    environmentVariableSelector: (e)=>(0, n.Q)(e, i, s.c.ENV),
    configFileSelector: (e)=>(0, n.Q)(e, o, s.c.CONFIG),
    default: !1
}, l = {
    environmentVariableSelector: (e)=>(0, n.Q)(e, i, s.c.ENV),
    configFileSelector: (e)=>(0, n.Q)(e, o, s.c.CONFIG),
    default: void 0
}, u = "AWS_USE_FIPS_ENDPOINT", d = "use_fips_endpoint", h = !1, f = {
    environmentVariableSelector: (e)=>(0, n.Q)(e, u, s.c.ENV),
    configFileSelector: (e)=>(0, n.Q)(e, d, s.c.CONFIG),
    default: !1
}, p = {
    environmentVariableSelector: (e)=>(0, n.Q)(e, u, s.c.ENV),
    configFileSelector: (e)=>(0, n.Q)(e, d, s.c.CONFIG),
    default: void 0
};
var g = require("./module-90570.js");
const m = (e)=>{
    const { tls: t, endpoint: r, urlParser: n, useDualstackEndpoint: s } = e;
    return Object.assign(e, {
        tls: t ?? !0,
        endpoint: (0, g.t)("string" == typeof r ? n(r) : r),
        isCustomEndpoint: !0,
        useDualstackEndpoint: (0, g.t)(s ?? !1)
    });
}, y = (e)=>{
    const t = (0, g.t)(e.useDualstackEndpoint ?? !1), { endpoint: r, useFipsEndpoint: n, urlParser: s, tls: i } = e;
    return Object.assign(e, {
        tls: i ?? !0,
        endpoint: r ? (0, g.t)("string" == typeof r ? s(r) : r) : ()=>(async (e)=>{
                const { tls: t = !0 } = e, r = await e.region();
                if (!new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/).test(r)) throw new Error("Invalid region in client config");
                const n = await e.useDualstackEndpoint(), s = await e.useFipsEndpoint(), { hostname: i } = await e.regionInfoProvider(r, {
                    useDualstackEndpoint: n,
                    useFipsEndpoint: s
                }) ?? {};
                if (!i) throw new Error("Cannot resolve hostname from client config");
                return e.urlParser(`${t ? "https:" : "http:"}//${i}`);
            })({
                ...e,
                useDualstackEndpoint: t,
                useFipsEndpoint: n
            }),
        isCustomEndpoint: !!r,
        useDualstackEndpoint: t
    });
};
var w = require("./module-24060.js"), S = require("./module-77654.js");
const b = (e = [], { useFipsEndpoint: t, useDualstackEndpoint: r })=>e.find(({ tags: e })=>t === e.includes("fips") && r === e.includes("dualstack"))?.hostname, E = (e, { useFipsEndpoint: t = !1, useDualstackEndpoint: r = !1, signingService: n, regionHash: s, partitionHash: i })=>{
    const o = ((e, { partitionHash: t })=>Object.keys(t || {}).find((r)=>t[r].regions.includes(e)) ?? "aws")(e, {
        partitionHash: i
    }), a = e in s ? e : i[o]?.endpoint ?? e, c = {
        useFipsEndpoint: t,
        useDualstackEndpoint: r
    }, l = ((e, { regionHostname: t, partitionHostname: r })=>t || (r ? r.replace("{region}", e) : void 0))(a, {
        regionHostname: b(s[a]?.variants, c),
        partitionHostname: b(i[o]?.variants, c)
    });
    if (void 0 === l) throw new Error(`Endpoint resolution failed for: ${{
        resolvedRegion: a,
        useFipsEndpoint: t,
        useDualstackEndpoint: r
    }}`);
    const u = ((e, { signingRegion: t, regionRegex: r, useFipsEndpoint: n })=>{
        if (t) return t;
        if (n) {
            const t = r.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\."), n = e.match(t);
            if (n) return n[0].slice(1, -1);
        }
    })(l, {
        signingRegion: s[a]?.signingRegion,
        regionRegex: i[o].regionRegex,
        useFipsEndpoint: t
    });
    return {
        partition: o,
        signingService: n,
        hostname: l,
        ...u && {
            signingRegion: u
        },
        ...s[a]?.signingService && {
            signingService: s[a].signingService
        }
    };
};
