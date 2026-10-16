"use strict";
require.r(exports), require.d(exports, {
    endpointMiddleware: ()=>b,
    endpointMiddlewareOptions: ()=>v,
    getEndpointFromInstructions: ()=>m,
    getEndpointPlugin: ()=>x,
    resolveEndpointConfig: ()=>A,
    resolveEndpointRequiredConfig: ()=>N,
    resolveParams: ()=>y,
    toEndpointV1: ()=>g
});
const n = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/, s = /(\d+\.){3}\d+/, i = /\.\./, o = (e)=>n.test(e) && !s.test(e) && !i.test(e), a = (e)=>{
    const [t, r, n, , , s] = e.split(":"), i = "arn" === t && e.split(":").length >= 6, o = Boolean(i && r && n && s);
    if (i && !o) throw new Error(`Invalid ARN: ${e} was an invalid ARN.`);
    return o;
}, c = (e, t, r, n = !1)=>{
    const s = async ()=>{
        let s;
        if (n) {
            const n = r.clientContextParams, i = n?.[e];
            s = i ?? r[e] ?? r[t];
        } else s = r[e] ?? r[t];
        return "function" == typeof s ? s() : s;
    };
    return "credentialScope" === e || "CredentialScope" === t ? async ()=>{
        const e = "function" == typeof r.credentials ? await r.credentials() : r.credentials;
        return e?.credentialScope ?? e?.CredentialScope;
    } : "accountId" === e || "AccountId" === t ? async ()=>{
        const e = "function" == typeof r.credentials ? await r.credentials() : r.credentials;
        return e?.accountId ?? e?.AccountId;
    } : "endpoint" === e || "endpoint" === t ? async ()=>{
        if (!1 === r.isCustomEndpoint) return;
        const e = await s();
        if (e && "object" == typeof e) {
            if ("url" in e) return e.url.href;
            if ("hostname" in e) {
                const { protocol: t, hostname: r, port: n, path: s } = e;
                return `${t}//${r}${n ? ":" + n : ""}${s}`;
            }
        }
        return e;
    } : s;
};
var l = require("./module-74935.js"), u = require(42757);
const d = "AWS_ENDPOINT_URL", h = "endpoint_url", f = async (e)=>(0, l.Z)(((e)=>({
            environmentVariableSelector: (t)=>{
                const r = e.split(" ").map((e)=>e.toUpperCase()), n = t[[
                    d,
                    ...r
                ].join("_")];
                if (n) return n;
                return t[d] || void 0;
            },
            configFileSelector: (t, r)=>{
                if (r && t.services) {
                    const n = r[[
                        "services",
                        t.services
                    ].join(u.Q)];
                    if (n) {
                        const t = n[[
                            e.split(" ").map((e)=>e.toLowerCase()).join("_"),
                            h
                        ].join(u.Q)];
                        if (t) return t;
                    }
                }
                const n = t[h];
                if (n) return n;
            },
            default: void 0
        }))(e ?? ""))();
var p = require("./module-53043.js");
const g = (e)=>{
    if ("object" == typeof e) {
        if ("url" in e) {
            const t = (0, p.parseUrl)(e.url);
            if (e.headers) {
                t.headers = {};
                for (const [r, n] of Object.entries(e.headers))t.headers[r.toLowerCase()] = n.join(", ");
            }
            return t;
        }
        return e;
    }
    return (0, p.parseUrl)(e);
}, m = async (e, t, r, n)=>{
    if (!r.isCustomEndpoint) {
        let e;
        e = r.serviceConfiguredEndpoint ? await r.serviceConfiguredEndpoint() : await f(r.serviceId), e && (r.endpoint = ()=>Promise.resolve(g(e)), r.isCustomEndpoint = !0);
    }
    const s = await y(e, t, r);
    if ("function" != typeof r.endpointProvider) throw new Error("config.endpointProvider is not set.");
    const i = r.endpointProvider(s, n);
    if (r.isCustomEndpoint && r.endpoint) {
        const e = await r.endpoint();
        if (e?.headers) {
            i.headers ??= {};
            for (const [t, r] of Object.entries(e.headers))i.headers[t] = Array.isArray(r) ? r : [
                r
            ];
        }
    }
    return i;
}, y = async (e, t, r)=>{
    const n = {}, s = t?.getEndpointParameterInstructions?.() || {};
    for (const [t, i] of Object.entries(s))switch(i.type){
        case "staticContextParams":
            n[t] = i.value;
            break;
        case "contextParams":
            n[t] = e[i.name];
            break;
        case "clientContextParams":
        case "builtInParams":
            n[t] = await c(i.name, t, r, "builtInParams" !== i.type)();
            break;
        case "operationContextParams":
            n[t] = i.get(e);
            break;
        default:
            throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(i));
    }
    return 0 === Object.keys(s).length && Object.assign(n, r), "s3" === String(r.serviceId).toLowerCase() && await (async (e)=>{
        const t = e?.Bucket || "";
        if ("string" == typeof e.Bucket && (e.Bucket = t.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"))), a(t)) {
            if (!0 === e.ForcePathStyle) throw new Error("Path-style addressing cannot be used with ARN buckets");
        } else (!o(t) || -1 !== t.indexOf(".") && !String(e.Endpoint).startsWith("http:") || t.toLowerCase() !== t || t.length < 3) && (e.ForcePathStyle = !0);
        return e.DisableMultiRegionAccessPoints && (e.disableMultiRegionAccessPoints = !0, e.DisableMRAP = !0), e;
    })(n), n;
};
var w = require(55909), S = require("./module-85919.js");
const b = ({ config: e, instructions: t })=>(r, n)=>async (s)=>{
            e.isCustomEndpoint && (0, w.setFeature)(n, "ENDPOINT_OVERRIDE", "N");
            const i = await m(s.input, {
                getEndpointParameterInstructions: ()=>t
            }, {
                ...e
            }, n);
            n.endpointV2 = i, n.authSchemes = i.properties?.authSchemes;
            const o = n.authSchemes?.[0];
            if (o) {
                n.signing_region = o.signingRegion, n.signing_service = o.signingName;
                const e = (0, S.u)(n), t = e?.selectedHttpAuthScheme?.httpAuthOption;
                t && (t.signingProperties = Object.assign(t.signingProperties || {}, {
                    signing_region: o.signingRegion,
                    signingRegion: o.signingRegion,
                    signing_service: o.signingName,
                    signingName: o.signingName,
                    signingRegionSet: o.signingRegionSet
                }, o.properties));
            }
            return r({
                ...s
            });
        }, E = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: [
        "SERIALIZER"
    ],
    override: !0
};
const v = {
    step: "serialize",
    tags: [
        "ENDPOINT_PARAMETERS",
        "ENDPOINT_V2",
        "ENDPOINT"
    ],
    name: "endpointV2Middleware",
    override: !0,
    relation: "before",
    toMiddleware: E.name
}, x = (e, t)=>({
        applyToStack: (r)=>{
            r.addRelativeTo(b({
                config: e,
                instructions: t
            }), v);
        }
    });
var T = require("./module-90570.js");
const A = (e)=>{
    const t = e.tls ?? !0, { endpoint: r, useDualstackEndpoint: n, useFipsEndpoint: s } = e, i = null != r ? async ()=>g(await (0, T.t)(r)()) : void 0, o = !!r, a = Object.assign(e, {
        endpoint: i,
        tls: t,
        isCustomEndpoint: o,
        useDualstackEndpoint: (0, T.t)(n ?? !1),
        useFipsEndpoint: (0, T.t)(s ?? !1)
    });
    let c;
    return a.serviceConfiguredEndpoint = async ()=>(e.serviceId && !c && (c = f(e.serviceId)), c), a;
}, N = (e)=>{
    const { endpoint: t } = e;
    return void 0 === t && (e.endpoint = async ()=>{
        throw new Error("@smithy/middleware-endpoint: (default endpointRuleSet) endpoint is not set - you must configure an endpoint.");
    }), e;
};
