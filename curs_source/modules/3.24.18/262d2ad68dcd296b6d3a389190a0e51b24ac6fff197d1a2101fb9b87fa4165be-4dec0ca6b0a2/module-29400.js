const { CONFIG_PREFIX_SEPARATOR: n, booleanSelector: o, SelectorType: s, loadConfig: i } = require("./module-86344.js"), { toEndpointV1: a, getSmithyContext: l, normalizeProvider: c, isValidHostLabel: u, hasOwn: d } = require("./module-11255.js");
exports.isValidHostLabel = u, exports.middlewareEndpointToEndpointV1 = a, exports.toEndpointV1 = a;
const { EndpointURLScheme: p } = require("./module-52391.js"), h = "AWS_ENDPOINT_URL", m = "endpoint_url", f = {
    environmentVariableSelector: (e)=>o(e, "AWS_IGNORE_CONFIGURED_ENDPOINT_URLS", s.ENV),
    configFileSelector: (e)=>o(e, "ignore_configured_endpoint_urls", s.CONFIG),
    default: !1
}, g = async (e)=>{
    if (!await i(f)()) return i(((e)=>({
            environmentVariableSelector: (t)=>{
                const r = e.split(" ").map((e)=>e.toUpperCase()), n = t[[
                    h,
                    ...r
                ].join("_")];
                if (n) return n;
                return t[h] || void 0;
            },
            configFileSelector: (t, r)=>{
                if (t.services) {
                    const o = [
                        "services",
                        t.services
                    ].join(n);
                    if (!r || !r[o]) throw new Error(`The services section "${t.services}" specified in the profile is not present in the shared configuration file.`);
                    const s = r[o][[
                        e.split(" ").map((e)=>e.toLowerCase()).join("_"),
                        m
                    ].join(n)];
                    if (s) return s;
                }
                const o = t[m];
                if (o) return o;
            },
            default: void 0
        }))(e ?? ""))();
}, y = /^[a-z0-9][a-z0-9.-]{1,61}[a-z0-9]$/, v = /(\d+\.){3}\d+/, w = /\.\./, b = (e)=>y.test(e) && !v.test(e) && !w.test(e), _ = (e)=>{
    const [t, r, n, , , o] = e.split(":"), s = "arn" === t && e.split(":").length >= 6, i = Boolean(s && r && n && o);
    if (s && !i) throw new Error(`Invalid ARN: ${e} was an invalid ARN.`);
    return i;
}, S = (e, t, r, n = !1)=>{
    const o = async ()=>{
        let o;
        if (n) {
            const n = r.clientContextParams, s = n?.[e];
            o = s ?? r[e] ?? r[t];
        } else o = r[e] ?? r[t];
        return "function" == typeof o ? o() : o;
    };
    return "credentialScope" === e || "CredentialScope" === t ? async ()=>{
        const e = "function" == typeof r.credentials ? await r.credentials() : r.credentials;
        return e?.credentialScope ?? e?.CredentialScope;
    } : "accountId" === e || "AccountId" === t ? async ()=>{
        const e = "function" == typeof r.credentials ? await r.credentials() : r.credentials;
        return e?.accountId ?? e?.AccountId;
    } : "endpoint" === e || "endpoint" === t ? async ()=>{
        if (!1 === r.isCustomEndpoint) return;
        const e = await o();
        if (e && "object" == typeof e) {
            if ("url" in e) return e.url.href;
            if ("hostname" in e) {
                const { protocol: t, hostname: r, port: n, path: o } = e;
                return `${t}//${r}${n ? ":" + n : ""}${o}`;
            }
        }
        return e;
    } : o;
};
function x(e) {
    return async (t, r, n, o)=>{
        if (!n.isCustomEndpoint && !n.ignoreConfiguredEndpointUrls) {
            let t;
            t = n.serviceConfiguredEndpoint ? await n.serviceConfiguredEndpoint() : await e(n.serviceId), t && (n.endpoint = ()=>Promise.resolve(a(t)), n.isCustomEndpoint = !0, o?.logger?.debug?.(`@smithy/core/endpoints - resolved endpoint from config: ${t}`));
        }
        const s = await k(t, r, n);
        if ("function" != typeof n.endpointProvider) throw new Error("config.endpointProvider is not set.");
        const i = n.endpointProvider(s, o);
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
const k = async (e, t, r)=>{
    const n = {}, o = t?.getEndpointParameterInstructions?.() || {};
    for (const [t, s] of Object.entries(o))switch(s.type){
        case "staticContextParams":
            n[t] = s.value;
            break;
        case "contextParams":
            n[t] = e[s.name];
            break;
        case "clientContextParams":
        case "builtInParams":
            n[t] = await S(s.name, t, r, "builtInParams" !== s.type)();
            break;
        case "operationContextParams":
            n[t] = s.get(e);
            break;
        default:
            throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(s));
    }
    return 0 === Object.keys(o).length && Object.assign(n, r), "s3" === String(r.serviceId).toLowerCase() && await (async (e)=>{
        const t = e?.Bucket || "";
        if ("string" == typeof e.Bucket && (e.Bucket = t.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"))), _(t)) {
            if (!0 === e.ForcePathStyle) throw new Error("Path-style addressing cannot be used with ARN buckets");
        } else (!b(t) || -1 !== t.indexOf(".") && !String(e.Endpoint).startsWith("http:") || t.toLowerCase() !== t || t.length < 3) && (e.ForcePathStyle = !0);
        return e.DisableMultiRegionAccessPoints && (e.disableMultiRegionAccessPoints = !0, e.DisableMRAP = !0), e;
    })(n), n;
};
function E(e) {
    const t = x(e);
    return ({ config: e, instructions: r })=>(n, o)=>async (s)=>{
                e.isCustomEndpoint && function(e, t, r) {
                    e.__smithy_context ? e.__smithy_context.features || (e.__smithy_context.features = {}) : e.__smithy_context = {
                        features: {}
                    }, e.__smithy_context.features[t] = r;
                }(o, "ENDPOINT_OVERRIDE", "N");
                const i = await t(s.input, {
                    getEndpointParameterInstructions: ()=>r
                }, {
                    ...e
                }, o);
                o.endpointV2 = i, o.authSchemes = i.properties?.authSchemes;
                const a = o.authSchemes?.[0];
                if (a) {
                    o.signing_region = a.signingRegion, o.signing_service = a.signingName;
                    const e = l(o), t = e?.selectedHttpAuthScheme?.httpAuthOption;
                    t && (t.signingProperties = Object.assign(t.signingProperties || {}, {
                        signing_region: a.signingRegion,
                        signingRegion: a.signingRegion,
                        signing_service: a.signingName,
                        signingName: a.signingName,
                        signingRegionSet: a.signingRegionSet
                    }, a.properties));
                }
                return n({
                    ...s
                });
            };
}
const T = {
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
class C {
    nodes;
    root;
    conditions;
    results;
    constructor(e, t, r, n){
        this.nodes = e, this.root = t, this.conditions = r, this.results = n;
    }
    static from(e, t, r, n) {
        return new C(e, t, r, n);
    }
}
class I extends Error {
    constructor(e){
        super(e), this.name = "EndpointError";
    }
}
const A = "endpoints";
function P(e) {
    return "object" != typeof e || null == e ? e : "ref" in e ? `$${P(e.ref)}` : "fn" in e ? `${e.fn}(${(e.argv || []).map(P).join(", ")})` : JSON.stringify(e, null, 2);
}
const M = {};
const R = (e, t)=>((e)=>{
        const t = e.split("."), r = [];
        for (const n of t){
            const t = n.indexOf("[");
            if (-1 !== t) {
                if (n.indexOf("]") !== n.length - 1) throw new I(`Path: '${e}' does not end with ']'`);
                const o = n.slice(t + 1, -1);
                if (Number.isNaN(parseInt(o))) throw new I(`Invalid array index: '${o}' in path: '${e}'`);
                0 !== t && r.push(n.slice(0, t)), r.push(o);
            } else r.push(n);
        }
        return r;
    })(t).reduce((r, n)=>{
        if ("object" != typeof r) throw new I(`Index '${n}' in '${t}' not found in '${JSON.stringify(e)}'`);
        if (Array.isArray(r)) {
            const e = parseInt(n);
            return r[e < 0 ? r.length + e : e];
        }
        return r[n];
    }, e);
const O = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"), D = (e)=>O.test(e) || e.startsWith("[") && e.endsWith("]"), N = {
    [p.HTTP]: 80,
    [p.HTTPS]: 443
};
const F = {
    booleanEquals: (e, t)=>e === t,
    coalesce: function(...e) {
        for (const t of e)if (null != t) return t;
    },
    getAttr: R,
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
                    const { hostname: t, port: r, protocol: n = "", path: o = "", query: s = {} } = e, i = new URL(`${n}//${t}${r ? `:${r}` : ""}${o}`);
                    return i.search = Object.entries(s).map(([e, t])=>`${e}=${t}`).join("&"), i;
                }
                return new URL(e);
            } catch (e) {
                return null;
            }
        })();
        if (!t) return console.error(`Unable to parse ${JSON.stringify(e)} as a whatwg URL.`), null;
        const r = t.href, { host: n, hostname: o, pathname: s, protocol: i, search: a } = t;
        if (a) return null;
        const l = i.slice(0, -1);
        if (!Object.values(p).includes(l)) return null;
        const c = D(o);
        return {
            scheme: l,
            authority: `${n}${r.includes(`${n}:${N[l]}`) || "string" == typeof e && e.includes(`${n}:${N[l]}`) ? `:${N[l]}` : ""}`,
            path: s,
            normalizedPath: s.endsWith("/") ? s : `${s}/`,
            isIp: c
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
}, L = (e, t)=>{
    const r = [], { referenceRecord: n, endpointParams: o } = t;
    let s = 0;
    for(; s < e.length;){
        const t = e.indexOf("{", s);
        if (-1 === t) {
            r.push(e.slice(s));
            break;
        }
        r.push(e.slice(s, t));
        const i = e.indexOf("}", t);
        if (-1 === i) {
            r.push(e.slice(t));
            break;
        }
        "{" === e[t + 1] && "}" === e[i + 1] && (r.push(e.slice(t + 1, i)), s = i + 2);
        const a = e.substring(t + 1, i);
        if (a.includes("#")) {
            const [e, t] = a.split("#");
            r.push(R(n[e] ?? o[e], t));
        } else r.push(n[a] ?? o[a]);
        s = i + 1;
    }
    return r.join("");
}, U = (e, t, r)=>{
    if ("string" == typeof e) return L(e, r);
    if (e.fn) return $.callFunction(e, r);
    if (e.ref) return (({ ref: e }, t)=>t.referenceRecord[e] ?? t.endpointParams[e])(e, r);
    throw new I(`'${t}': ${String(e)} is not a string, function or reference.`);
}, B = ({ fn: e, argv: t }, r)=>{
    const n = Array(t.length);
    for(let e = 0; e < n.length; ++e){
        const o = t[e];
        n[e] = "boolean" == typeof o || "number" == typeof o ? o : $.evaluateExpression(o, "arg", r);
    }
    const o = e.indexOf(".");
    if (-1 !== o) {
        const t = M[e.slice(0, o)], r = t?.[e.slice(o + 1)];
        if ("function" == typeof r) return r(...n);
    }
    const s = F[e];
    if ("function" == typeof s) return s(...n);
    throw new Error(`function ${e} not loaded in endpointFunctions.`);
}, $ = {
    evaluateExpression: U,
    callFunction: B
}, q = (e, t)=>{
    const { assign: r } = e;
    if (r && r in t.referenceRecord) throw new I(`'${r}' is already defined in Reference Record.`);
    const n = B(e, t);
    t.logger?.debug?.(`${A} evaluateCondition: ${P(e)} = ${P(n)}`);
    const o = "" === n || !!n;
    return null != r ? {
        result: o,
        toAssign: {
            name: r,
            value: n
        }
    } : {
        result: o
    };
}, j = (e, t)=>Object.entries(e ?? {}).reduce((e, [r, n])=>(e[r] = n.map((e)=>{
            const n = U(e, "Header value entry", t);
            if ("string" != typeof n) throw new I(`Header '${r}' value '${n}' is not a string`);
            return n;
        }), e), {}), J = (e, t)=>Object.entries(e).reduce((e, [r, n])=>(e[r] = H.getEndpointProperty(n, t), e), {}), z = (e, t)=>{
    if (Array.isArray(e)) return e.map((e)=>z(e, t));
    switch(typeof e){
        case "string":
            return L(e, t);
        case "object":
            if (null === e) throw new I(`Unexpected endpoint property: ${e}`);
            return H.getEndpointProperties(e, t);
        case "boolean":
            return e;
        default:
            throw new I("Unexpected endpoint property type: " + typeof e);
    }
}, H = {
    getEndpointProperty: z,
    getEndpointProperties: J
}, W = (e, t)=>{
    const r = U(e, "Endpoint URL", t);
    if ("string" == typeof r) try {
        return new URL(r);
    } catch (e) {
        throw console.error(`Failed to construct URL with ${r}`, e), e;
    }
    throw new I("Endpoint URL must be a string, got " + typeof r);
}, G = 1e8, Y = (e = [], t)=>{
    const r = {}, n = {
        ...t,
        referenceRecord: {
            ...t.referenceRecord
        }
    };
    let o = !1;
    for (const s of e){
        const { result: e, toAssign: i } = q(s, n);
        if (!e) return {
            result: e
        };
        i && (o = !0, r[i.name] = i.value, n.referenceRecord[i.name] = i.value, t.logger?.debug?.(`${A} assign: ${i.name} := ${P(i.value)}`));
    }
    return o ? {
        result: !0,
        referenceRecord: r
    } : {
        result: !0
    };
}, V = (e, t)=>{
    const { conditions: r, endpoint: n } = e, { result: o, referenceRecord: s } = Y(r, t);
    if (!o) return;
    const i = s ? {
        ...t,
        referenceRecord: {
            ...t.referenceRecord,
            ...s
        }
    } : t, { url: a, properties: l, headers: c } = n;
    t.logger?.debug?.(`${A} Resolving endpoint from template: ${P(n)}`);
    const u = {
        url: W(a, i)
    };
    return null != c && (u.headers = j(c, i)), null != l && (u.properties = J(l, i)), u;
}, K = (e, t)=>{
    const { conditions: r, error: n } = e, { result: o, referenceRecord: s } = Y(r, t);
    if (!o) return;
    const i = s ? {
        ...t,
        referenceRecord: {
            ...t.referenceRecord,
            ...s
        }
    } : t;
    throw new I(U(n, "Error", i));
}, Z = (e, t)=>{
    for (const r of e)if ("endpoint" === r.type) {
        const e = V(r, t);
        if (e) return e;
    } else if ("error" === r.type) K(r, t);
    else {
        if ("tree" !== r.type) throw new I(`Unknown endpoint rule: ${r}`);
        {
            const e = X.evaluateTreeRule(r, t);
            if (e) return e;
        }
    }
    throw new I("Rules evaluation failed");
}, X = {
    evaluateRules: Z,
    evaluateTreeRule: (e, t)=>{
        const { conditions: r, rules: n } = e, { result: o, referenceRecord: s } = Y(r, t);
        if (!o) return;
        const i = s ? {
            ...t,
            referenceRecord: {
                ...t.referenceRecord,
                ...s
            }
        } : t;
        return X.evaluateRules(n, i);
    }
}, Q = x(g), ee = function(e) {
    return (t)=>{
        const r = t.tls ?? !0, { endpoint: n, useDualstackEndpoint: o, useFipsEndpoint: s } = t, i = null != n ? async ()=>a(await c(n)()) : void 0, l = !!n, u = Object.assign(t, {
            endpoint: i,
            tls: r,
            isCustomEndpoint: l,
            useDualstackEndpoint: c(o ?? !1),
            useFipsEndpoint: c(s ?? !1),
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
                }), T);
            }
        });
}(g);
exports.BinaryDecisionDiagram = C, exports.EndpointCache = class {
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
}, exports.EndpointError = I, exports.customEndpointFunctions = M, exports.decideEndpoint = (e, t)=>{
    const { nodes: r, root: n, results: o, conditions: s } = e;
    let i = n;
    const a = {}, l = {
        referenceRecord: a,
        endpointParams: t.endpointParams,
        logger: t.logger
    };
    for(; 1 !== i && -1 !== i && i < G;){
        const e = 3 * (Math.abs(i) - 1), [t, n, o] = [
            r[e],
            r[e + 1],
            r[e + 2]
        ], [c, u, d] = s[t], p = q({
            fn: c,
            assign: d,
            argv: u
        }, l);
        if (p.toAssign) {
            const { name: e, value: t } = p.toAssign;
            a[e] = t;
        }
        i = i >= 0 === p.result ? n : o;
    }
    if (i >= G) {
        const e = o[i - G];
        if (-1 === e[0]) {
            const [, t] = e;
            throw new I(U(t, "Error", l));
        }
        const [t, r, n] = e;
        return {
            url: W(t, l),
            properties: J(r, l),
            headers: j(n ?? {}, l)
        };
    }
    throw new I("No matching endpoint.");
}, exports.endpointMiddleware = te, exports.endpointMiddlewareOptions = T, exports.getEndpointFromInstructions = Q, exports.getEndpointPlugin = re, exports.isIpAddress = D, exports.resolveEndpoint = (e, t)=>{
    const { endpointParams: r, logger: n } = t, { parameters: o, rules: s } = e;
    t.logger?.debug?.(`${A} Initial EndpointParams: ${P(r)}`);
    for(const e in o){
        if (!d(o, e)) continue;
        const t = o[e], n = r[e];
        if (null != n || null == t.default) {
            if (t.required && null == n) throw new I(`Missing required parameter: '${e}'`);
        } else r[e] = t.default;
    }
    const i = Z(s, {
        endpointParams: r,
        logger: n,
        referenceRecord: {}
    });
    return t.logger?.debug?.(`${A} Resolved endpoint: ${P(i)}`), i;
}, exports.resolveEndpointConfig = ee, exports.resolveEndpointRequiredConfig = (e)=>{
    const { endpoint: t } = e;
    return void 0 === t && (e.endpoint = async ()=>{
        throw new Error("@smithy/middleware-endpoint: (default endpointRuleSet) endpoint is not set - you must configure an endpoint.");
    }), e;
}, exports.resolveParams = k;
