const { CONFIG_PREFIX_SEPARATOR: n, booleanSelector: s, SelectorType: o, loadConfig: i } = require("./module-86344.js"), { toEndpointV1: a, getSmithyContext: c, normalizeProvider: l, isValidHostLabel: u, hasOwn: d } = require("./module-11255.js");
exports.isValidHostLabel = u, exports.middlewareEndpointToEndpointV1 = a, exports.toEndpointV1 = a;
const { EndpointURLScheme: p } = require("./module-52391.js"), m = "AWS_ENDPOINT_URL", h = "endpoint_url", f = {
    environmentVariableSelector: (e)=>s(e, "AWS_IGNORE_CONFIGURED_ENDPOINT_URLS", o.ENV),
    configFileSelector: (e)=>s(e, "ignore_configured_endpoint_urls", o.CONFIG),
    default: !1
}, g = async (e)=>{
    if (!await i(f)()) return i(((e)=>({
            environmentVariableSelector: (t)=>{
                const r = e.split(" ").map((e)=>e.toUpperCase()), n = t[[
                    m,
                    ...r
                ].join("_")];
                if (n) return n;
                return t[m] || void 0;
            },
            configFileSelector: (t, r)=>{
                if (t.services) {
                    const s = [
                        "services",
                        t.services
                    ].join(n);
                    if (!r || !r[s]) throw new Error(`The services section "${t.services}" specified in the profile is not present in the shared configuration file.`);
                    const o = r[s][[
                        e.split(" ").map((e)=>e.toLowerCase()).join("_"),
                        h
                    ].join(n)];
                    if (o) return o;
                }
                const s = t[h];
                if (s) return s;
            },
            default: void 0
        }))(e ?? ""))();
}, y = /^[a-z0-9][a-z0-9.-]{1,61}[a-z0-9]$/, w = /(\d+\.){3}\d+/, v = /\.\./, _ = (e)=>y.test(e) && !w.test(e) && !v.test(e), b = (e)=>{
    const [t, r, n, , , s] = e.split(":"), o = "arn" === t && e.split(":").length >= 6, i = Boolean(o && r && n && s);
    if (o && !i) throw new Error(`Invalid ARN: ${e} was an invalid ARN.`);
    return i;
}, S = (e, t, r, n = !1)=>{
    const s = async ()=>{
        let s;
        if (n) {
            const n = r.clientContextParams, o = n?.[e];
            s = o ?? r[e] ?? r[t];
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
function k(e) {
    return async (t, r, n, s)=>{
        if (!n.isCustomEndpoint && !n.ignoreConfiguredEndpointUrls) {
            let t;
            t = n.serviceConfiguredEndpoint ? await n.serviceConfiguredEndpoint() : await e(n.serviceId), t && (n.endpoint = ()=>Promise.resolve(a(t)), n.isCustomEndpoint = !0, s?.logger?.debug?.(`@smithy/core/endpoints - resolved endpoint from config: ${t}`));
        }
        const o = await x(t, r, n);
        if ("function" != typeof n.endpointProvider) throw new Error("config.endpointProvider is not set.");
        const i = n.endpointProvider(o, s);
        if (n.isCustomEndpoint && n.endpoint) {
            const e = await n.endpoint();
            if (e?.headers) {
                i.headers ??= {};
                for (const [t, r] of Object.entries(e.headers))i.headers[t] = Array.isArray(r) ? r : [
                    r
                ];
            }
        }
        return i;
    };
}
const x = async (e, t, r)=>{
    const n = {}, s = t?.getEndpointParameterInstructions?.() || {};
    for (const [t, o] of Object.entries(s))switch(o.type){
        case "staticContextParams":
            n[t] = o.value;
            break;
        case "contextParams":
            n[t] = e[o.name];
            break;
        case "clientContextParams":
        case "builtInParams":
            n[t] = await S(o.name, t, r, "builtInParams" !== o.type)();
            break;
        case "operationContextParams":
            n[t] = o.get(e);
            break;
        default:
            throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(o));
    }
    return 0 === Object.keys(s).length && Object.assign(n, r), "s3" === String(r.serviceId).toLowerCase() && await (async (e)=>{
        const t = e?.Bucket || "";
        if ("string" == typeof e.Bucket && (e.Bucket = t.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"))), b(t)) {
            if (!0 === e.ForcePathStyle) throw new Error("Path-style addressing cannot be used with ARN buckets");
        } else (!_(t) || -1 !== t.indexOf(".") && !String(e.Endpoint).startsWith("http:") || t.toLowerCase() !== t || t.length < 3) && (e.ForcePathStyle = !0);
        return e.DisableMultiRegionAccessPoints && (e.disableMultiRegionAccessPoints = !0, e.DisableMRAP = !0), e;
    })(n), n;
};
function E(e) {
    const t = k(e);
    return ({ config: e, instructions: r })=>(n, s)=>async (o)=>{
                e.isCustomEndpoint && function(e, t, r) {
                    e.__smithy_context ? e.__smithy_context.features || (e.__smithy_context.features = {}) : e.__smithy_context = {
                        features: {}
                    }, e.__smithy_context.features[t] = r;
                }(s, "ENDPOINT_OVERRIDE", "N");
                const i = await t(o.input, {
                    getEndpointParameterInstructions: ()=>r
                }, {
                    ...e
                }, s);
                s.endpointV2 = i, s.authSchemes = i.properties?.authSchemes;
                const a = s.authSchemes?.[0];
                if (a) {
                    s.signing_region = a.signingRegion, s.signing_service = a.signingName;
                    const e = c(s), t = e?.selectedHttpAuthScheme?.httpAuthOption;
                    t && (t.signingProperties = Object.assign(t.signingProperties || {}, {
                        signing_region: a.signingRegion,
                        signingRegion: a.signingRegion,
                        signing_service: a.signingName,
                        signingName: a.signingName,
                        signingRegionSet: a.signingRegionSet
                    }, a.properties));
                }
                return n({
                    ...o
                });
            };
}
const I = {
    step: "serialize",
    tags: [
        "ENDPOINT_PARAMETERS",
        "ENDPOINT_V2",
        "ENDPOINT"
    ],
    name: "endpointV2Middleware",
    override: !0,
    relation: "before",
    toMiddleware: "serializerMiddleware"
};
class T {
    nodes;
    root;
    conditions;
    results;
    constructor(e, t, r, n){
        this.nodes = e, this.root = t, this.conditions = r, this.results = n;
    }
    static from(e, t, r, n) {
        return new T(e, t, r, n);
    }
}
class C extends Error {
    constructor(e){
        super(e), this.name = "EndpointError";
    }
}
const P = "endpoints";
function A(e) {
    return "object" != typeof e || null == e ? e : "ref" in e ? `$${A(e.ref)}` : "fn" in e ? `${e.fn}(${(e.argv || []).map(A).join(", ")})` : JSON.stringify(e, null, 2);
}
const R = {};
const M = (e, t)=>((e)=>{
        const t = e.split("."), r = [];
        for (const n of t){
            const t = n.indexOf("[");
            if (-1 !== t) {
                if (n.indexOf("]") !== n.length - 1) throw new C(`Path: '${e}' does not end with ']'`);
                const s = n.slice(t + 1, -1);
                if (Number.isNaN(parseInt(s))) throw new C(`Invalid array index: '${s}' in path: '${e}'`);
                0 !== t && r.push(n.slice(0, t)), r.push(s);
            } else r.push(n);
        }
        return r;
    })(t).reduce((r, n)=>{
        if ("object" != typeof r) throw new C(`Index '${n}' in '${t}' not found in '${JSON.stringify(e)}'`);
        if (Array.isArray(r)) {
            const e = parseInt(n);
            return r[e < 0 ? r.length + e : e];
        }
        return r[n];
    }, e);
const J = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"), O = (e)=>J.test(e) || e.startsWith("[") && e.endsWith("]"), B = {
    [p.HTTP]: 80,
    [p.HTTPS]: 443
};
const D = {
    booleanEquals: (e, t)=>e === t,
    coalesce: function(...e) {
        for (const t of e)if (null != t) return t;
    },
    getAttr: M,
    isSet: (e)=>null != e,
    isValidHostLabel: u,
    ite: function(e, t, r) {
        return e ? t : r;
    },
    not: (e)=>!e,
    parseURL: (e)=>{
        const t = (()=>{
            try {
                if (e instanceof URL) return e;
                if ("object" == typeof e && "hostname" in e) {
                    const { hostname: t, port: r, protocol: n = "", path: s = "", query: o = {} } = e, i = new URL(`${n}//${t}${r ? `:${r}` : ""}${s}`);
                    return i.search = Object.entries(o).map(([e, t])=>`${e}=${t}`).join("&"), i;
                }
                return new URL(e);
            } catch (e) {
                return null;
            }
        })();
        if (!t) return console.error(`Unable to parse ${JSON.stringify(e)} as a whatwg URL.`), null;
        const r = t.href, { host: n, hostname: s, pathname: o, protocol: i, search: a } = t;
        if (a) return null;
        const c = i.slice(0, -1);
        if (!Object.values(p).includes(c)) return null;
        const l = O(s);
        return {
            scheme: c,
            authority: `${n}${r.includes(`${n}:${B[c]}`) || "string" == typeof e && e.includes(`${n}:${B[c]}`) ? `:${B[c]}` : ""}`,
            path: o,
            normalizedPath: o.endsWith("/") ? o : `${o}/`,
            isIp: l
        };
    },
    split: function(e, t, r) {
        if (1 === r) return [
            e
        ];
        if ("" === e) return [
            ""
        ];
        const n = e.split(t);
        return 0 === r ? n : n.slice(0, r - 1).concat(n.slice(1).join(t));
    },
    stringEquals: (e, t)=>e === t,
    substring: (e, t, r, n)=>null == e || t >= r || e.length < r || /[^\u0000-\u007f]/.test(e) ? null : n ? e.substring(e.length - r, e.length - t) : e.substring(t, r),
    uriEncode: (e)=>encodeURIComponent(e).replace(/[!*'()]/g, (e)=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)
}, q = (e, t)=>{
    const r = [], { referenceRecord: n, endpointParams: s } = t;
    let o = 0;
    for(; o < e.length;){
        const t = e.indexOf("{", o);
        if (-1 === t) {
            r.push(e.slice(o));
            break;
        }
        r.push(e.slice(o, t));
        const i = e.indexOf("}", t);
        if (-1 === i) {
            r.push(e.slice(t));
            break;
        }
        "{" === e[t + 1] && "}" === e[i + 1] && (r.push(e.slice(t + 1, i)), o = i + 2);
        const a = e.substring(t + 1, i);
        if (a.includes("#")) {
            const [e, t] = a.split("#");
            r.push(M(n[e] ?? s[e], t));
        } else r.push(n[a] ?? s[a]);
        o = i + 1;
    }
    return r.join("");
}, N = (e, t, r)=>{
    if ("string" == typeof e) return q(e, r);
    if (e.fn) return U.callFunction(e, r);
    if (e.ref) return (({ ref: e }, t)=>t.referenceRecord[e] ?? t.endpointParams[e])(e, r);
    throw new C(`'${t}': ${String(e)} is not a string, function or reference.`);
}, F = ({ fn: e, argv: t }, r)=>{
    const n = Array(t.length);
    for(let e = 0; e < n.length; ++e){
        const s = t[e];
        n[e] = "boolean" == typeof s || "number" == typeof s ? s : U.evaluateExpression(s, "arg", r);
    }
    const s = e.indexOf(".");
    if (-1 !== s) {
        const t = R[e.slice(0, s)], r = t?.[e.slice(s + 1)];
        if ("function" == typeof r) return r(...n);
    }
    const o = D[e];
    if ("function" == typeof o) return o(...n);
    throw new Error(`function ${e} not loaded in endpointFunctions.`);
}, U = {
    evaluateExpression: N,
    callFunction: F
}, L = (e, t)=>{
    const { assign: r } = e;
    if (r && r in t.referenceRecord) throw new C(`'${r}' is already defined in Reference Record.`);
    const n = F(e, t);
    t.logger?.debug?.(`${P} evaluateCondition: ${A(e)} = ${A(n)}`);
    const s = "" === n || !!n;
    return null != r ? {
        result: s,
        toAssign: {
            name: r,
            value: n
        }
    } : {
        result: s
    };
}, $ = (e, t)=>Object.entries(e ?? {}).reduce((e, [r, n])=>(e[r] = n.map((e)=>{
            const n = N(e, "Header value entry", t);
            if ("string" != typeof n) throw new C(`Header '${r}' value '${n}' is not a string`);
            return n;
        }), e), {}), j = (e, t)=>Object.entries(e).reduce((e, [r, n])=>(e[r] = z.getEndpointProperty(n, t), e), {}), G = (e, t)=>{
    if (Array.isArray(e)) return e.map((e)=>G(e, t));
    switch(typeof e){
        case "string":
            return q(e, t);
        case "object":
            if (null === e) throw new C(`Unexpected endpoint property: ${e}`);
            return z.getEndpointProperties(e, t);
        case "boolean":
            return e;
        default:
            throw new C("Unexpected endpoint property type: " + typeof e);
    }
}, z = {
    getEndpointProperty: G,
    getEndpointProperties: j
}, W = (e, t)=>{
    const r = N(e, "Endpoint URL", t);
    if ("string" == typeof r) try {
        return new URL(r);
    } catch (e) {
        throw console.error(`Failed to construct URL with ${r}`, e), e;
    }
    throw new C("Endpoint URL must be a string, got " + typeof r);
}, H = 1e8, K = (e = [], t)=>{
    const r = {}, n = {
        ...t,
        referenceRecord: {
            ...t.referenceRecord
        }
    };
    let s = !1;
    for (const o of e){
        const { result: e, toAssign: i } = L(o, n);
        if (!e) return {
            result: e
        };
        i && (s = !0, r[i.name] = i.value, n.referenceRecord[i.name] = i.value, t.logger?.debug?.(`${P} assign: ${i.name} := ${A(i.value)}`));
    }
    return s ? {
        result: !0,
        referenceRecord: r
    } : {
        result: !0
    };
}, V = (e, t)=>{
    const { conditions: r, endpoint: n } = e, { result: s, referenceRecord: o } = K(r, t);
    if (!s) return;
    const i = o ? {
        ...t,
        referenceRecord: {
            ...t.referenceRecord,
            ...o
        }
    } : t, { url: a, properties: c, headers: l } = n;
    t.logger?.debug?.(`${P} Resolving endpoint from template: ${A(n)}`);
    const u = {
        url: W(a, i)
    };
    return null != l && (u.headers = $(l, i)), null != c && (u.properties = j(c, i)), u;
}, Y = (e, t)=>{
    const { conditions: r, error: n } = e, { result: s, referenceRecord: o } = K(r, t);
    if (!s) return;
    const i = o ? {
        ...t,
        referenceRecord: {
            ...t.referenceRecord,
            ...o
        }
    } : t;
    throw new C(N(n, "Error", i));
}, Q = (e, t)=>{
    for (const r of e)if ("endpoint" === r.type) {
        const e = V(r, t);
        if (e) return e;
    } else if ("error" === r.type) Y(r, t);
    else {
        if ("tree" !== r.type) throw new C(`Unknown endpoint rule: ${r}`);
        {
            const e = X.evaluateTreeRule(r, t);
            if (e) return e;
        }
    }
    throw new C("Rules evaluation failed");
}, X = {
    evaluateRules: Q,
    evaluateTreeRule: (e, t)=>{
        const { conditions: r, rules: n } = e, { result: s, referenceRecord: o } = K(r, t);
        if (!s) return;
        const i = o ? {
            ...t,
            referenceRecord: {
                ...t.referenceRecord,
                ...o
            }
        } : t;
        return X.evaluateRules(n, i);
    }
}, Z = k(g), ee = function(e) {
    return (t)=>{
        const r = t.tls ?? !0, { endpoint: n, useDualstackEndpoint: s, useFipsEndpoint: o } = t, i = null != n ? async ()=>a(await l(n)()) : void 0, c = !!n, u = Object.assign(t, {
            endpoint: i,
            tls: r,
            isCustomEndpoint: c,
            useDualstackEndpoint: l(s ?? !1),
            useFipsEndpoint: l(o ?? !1),
            ignoreConfiguredEndpointUrls: !!t.ignoreConfiguredEndpointUrls
        });
        let d;
        return u.serviceConfiguredEndpoint = async ()=>(t.serviceId && !d && (d = e(t.serviceId)), d), u;
    };
}(g), te = E(g), re = function(e) {
    const t = E(e);
    return (e, r)=>({
            applyToStack: (n)=>{
                n.addRelativeTo(t({
                    config: e,
                    instructions: r
                }), I);
            }
        });
}(g);
exports.BinaryDecisionDiagram = T, exports.EndpointCache = class {
    capacity;
    data = new Map;
    parameters = [];
    constructor({ size: e, params: t }){
        this.capacity = e ?? 50, t && (this.parameters = t);
    }
    get(e, t) {
        const r = this.hash(e);
        if (!1 === r) return t();
        if (!this.data.has(r)) {
            if (this.data.size > this.capacity + 10) {
                const e = this.data.keys();
                let t = 0;
                for(;;){
                    const { value: r, done: n } = e.next();
                    if (this.data.delete(r), n || ++t > 10) break;
                }
            }
            this.data.set(r, t());
        }
        return this.data.get(r);
    }
    size() {
        return this.data.size;
    }
    hash(e) {
        let t = "";
        const { parameters: r } = this;
        if (0 === r.length) return !1;
        for (const n of r){
            const r = String(e[n] ?? "");
            if (r.includes("|;")) return !1;
            t += r + "|;";
        }
        return t;
    }
}, exports.EndpointError = C, exports.customEndpointFunctions = R, exports.decideEndpoint = (e, t)=>{
    const { nodes: r, root: n, results: s, conditions: o } = e;
    let i = n;
    const a = {}, c = {
        referenceRecord: a,
        endpointParams: t.endpointParams,
        logger: t.logger
    };
    for(; 1 !== i && -1 !== i && i < H;){
        const e = 3 * (Math.abs(i) - 1), [t, n, s] = [
            r[e],
            r[e + 1],
            r[e + 2]
        ], [l, u, d] = o[t], p = L({
            fn: l,
            assign: d,
            argv: u
        }, c);
        if (p.toAssign) {
            const { name: e, value: t } = p.toAssign;
            a[e] = t;
        }
        i = i >= 0 === p.result ? n : s;
    }
    if (i >= H) {
        const e = s[i - H];
        if (-1 === e[0]) {
            const [, t] = e;
            throw new C(N(t, "Error", c));
        }
        const [t, r, n] = e;
        return {
            url: W(t, c),
            properties: j(r, c),
            headers: $(n ?? {}, c)
        };
    }
    throw new C("No matching endpoint.");
}, exports.endpointMiddleware = te, exports.endpointMiddlewareOptions = I, exports.getEndpointFromInstructions = Z, exports.getEndpointPlugin = re, exports.isIpAddress = O, exports.resolveEndpoint = (e, t)=>{
    const { endpointParams: r, logger: n } = t, { parameters: s, rules: o } = e;
    t.logger?.debug?.(`${P} Initial EndpointParams: ${A(r)}`);
    for(const e in s){
        if (!d(s, e)) continue;
        const t = s[e], n = r[e];
        if (null != n || null == t.default) {
            if (t.required && null == n) throw new C(`Missing required parameter: '${e}'`);
        } else r[e] = t.default;
    }
    const i = Q(o, {
        endpointParams: r,
        logger: n,
        referenceRecord: {}
    });
    return t.logger?.debug?.(`${P} Resolved endpoint: ${A(i)}`), i;
}, exports.resolveEndpointConfig = ee, exports.resolveEndpointRequiredConfig = (e)=>{
    const { endpoint: t } = e;
    return void 0 === t && (e.endpoint = async ()=>{
        throw new Error("@smithy/middleware-endpoint: (default endpointRuleSet) endpoint is not set - you must configure an endpoint.");
    }), e;
}, exports.resolveParams = x;
