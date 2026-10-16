const { homedir: n } = require("./module-48161.js"), { sep: o, join: s } = require("./module-76760.js"), { createHash: i } = require("./module-77598.js"), { readFile: a } = require("./module-51455.js"), { IniSectionType: l } = require("./module-52391.js"), { normalizeProvider: c } = require("./module-42997.js"), { isValidHostLabel: u } = require("./module-11255.js");
class d extends Error {
    name = "ProviderError";
    tryNextLink;
    constructor(e, t = !0){
        let r, n = !0;
        "boolean" == typeof t ? (r = void 0, n = t) : null != t && "object" == typeof t && (r = t.logger, n = t.tryNextLink ?? !0), super(e), this.tryNextLink = n, Object.setPrototypeOf(this, d.prototype), r?.debug?.(`@smithy/property-provider ${n ? "->" : "(!)"} ${e}`);
    }
    static from(e, t = !0) {
        return Object.assign(new this(e.message, t), e);
    }
}
class p extends d {
    name = "CredentialsProviderError";
    constructor(e, t = !0){
        super(e, t), Object.setPrototypeOf(this, p.prototype);
    }
}
class h extends d {
    name = "TokenProviderError";
    constructor(e, t = !0){
        super(e, t), Object.setPrototypeOf(this, h.prototype);
    }
}
const m = (...e)=>async ()=>{
        if (0 === e.length) throw new d("No providers in chain");
        let t;
        for (const r of e)try {
            return await r();
        } catch (e) {
            if (t = e, e?.tryNextLink) continue;
            throw e;
        }
        throw t;
    }, f = (e)=>()=>Promise.resolve(e), g = (e, t, r)=>{
    let n, o, s, i = !1;
    const a = async ()=>{
        o || (o = e());
        try {
            n = await o, s = !0, i = !1;
        } finally{
            o = void 0;
        }
        return n;
    };
    return void 0 === t ? async (e)=>(s && !e?.forceRefresh || (n = await a()), n) : async (e)=>(s && !e?.forceRefresh || (n = await a()), i ? n : r && !r(n) ? (i = !0, n) : t(n) ? (await a(), n) : n);
}, y = (e, t, r)=>{
    if (t in e) {
        if ("true" === e[t]) return !0;
        if ("false" === e[t]) return !1;
        throw new Error(`Cannot load ${r} "${t}". Expected "true" or "false", got ${e[t]}.`);
    }
};
var v;
!function(e) {
    e.ENV = "env", e.CONFIG = "shared config entry";
}(v || (v = {}));
const w = {}, b = ()=>{
    const { HOME: e, USERPROFILE: t, HOMEPATH: r, HOMEDRIVE: s = `C:${o}` } = process.env;
    if (e) return e;
    if (t) return t;
    if (r) return `${s}${r}`;
    const i = process && process.geteuid ? `${process.geteuid()}` : "DEFAULT";
    return w[i] || (w[i] = n()), w[i];
}, _ = "AWS_PROFILE", S = "default", x = (e)=>e.profile || process.env[_] || S, k = (e)=>{
    const t = i("sha1").update(e).digest("hex");
    return s(b(), ".aws", "sso", "cache", `${t}.json`);
}, E = {}, T = ".", C = (e)=>Object.entries(e).filter(([e])=>{
        const t = e.indexOf(T);
        return -1 !== t && Object.values(l).includes(e.substring(0, t));
    }).reduce((e, [t, r])=>{
        const n = t.indexOf(T);
        return e[t.substring(0, n) === l.PROFILE ? t.substring(n + 1) : t] = r, e;
    }, {
        ...e.default && {
            default: e.default
        }
    }), I = ()=>process.env.AWS_CONFIG_FILE || s(b(), ".aws", "config"), A = ()=>process.env.AWS_SHARED_CREDENTIALS_FILE || s(b(), ".aws", "credentials"), P = /^([\w-]+)\s(["'])?([\w-@+.%:/]+)\2$/, M = [
    "__proto__",
    "profile __proto__"
], R = (e)=>{
    const t = {};
    let r, n;
    for (const o of e.split(/\r?\n/)){
        const e = o.split(/(^|\s)[;#]/)[0].trim();
        if ("[" === e[0] && "]" === e[e.length - 1]) {
            r = void 0, n = void 0;
            const t = e.substring(1, e.length - 1), o = P.exec(t);
            if (o) {
                const [, e, , t] = o;
                Object.values(l).includes(e) && (r = [
                    e,
                    t
                ].join(T));
            } else r = t;
            if (M.includes(t)) throw new Error(`Found invalid profile name "${t}"`);
        } else if (r) {
            const s = e.indexOf("=");
            if (![
                0,
                -1
            ].includes(s)) {
                const [i, a] = [
                    e.substring(0, s).trim(),
                    e.substring(s + 1).trim()
                ];
                if ("" === a) n = i;
                else {
                    n && o.trimStart() === o && (n = void 0), t[r] = t[r] || {};
                    const e = n ? [
                        n,
                        i
                    ].join(T) : i;
                    t[r][e] = a;
                }
            }
        }
    }
    return t;
}, O = {}, D = {}, N = (e, t)=>void 0 !== D[e] ? D[e] : (O[e] && !t?.ignoreCache || (O[e] = a(e, "utf8")), O[e]), F = ()=>({}), L = async (e = {})=>{
    const { filepath: t = A(), configFilepath: r = I() } = e, n = b();
    let o = t;
    t.startsWith("~/") && (o = s(n, t.slice(2)));
    let i = r;
    r.startsWith("~/") && (i = s(n, r.slice(2)));
    const a = await Promise.all([
        N(i, {
            ignoreCache: e.ignoreCache
        }).then(R).then(C).catch(F),
        N(o, {
            ignoreCache: e.ignoreCache
        }).then(R).catch(F)
    ]);
    return {
        configFile: a[0],
        credentialsFile: a[1]
    };
}, U = (e)=>Object.entries(e).filter(([e])=>e.startsWith(l.SSO_SESSION + T)).reduce((e, [t, r])=>({
            ...e,
            [t.substring(t.indexOf(T) + 1)]: r
        }), {}), B = ()=>({}), $ = {
    getFileRecord: ()=>D,
    interceptFile (e, t) {
        D[e] = Promise.resolve(t);
    },
    getTokenRecord: ()=>E,
    interceptToken (e, t) {
        E[e] = t;
    }
};
function q(e) {
    try {
        const t = new Set(Array.from(e.match(/([A-Z_]){3,}/g) ?? []));
        return t.delete("CONFIG"), t.delete("CONFIG_PREFIX_SEPARATOR"), t.delete("ENV"), [
            ...t
        ].join(", ");
    } catch (t) {
        return e;
    }
}
const j = (e)=>"function" == typeof e ? async ()=>await e() : f(e), J = ({ environmentVariableSelector: e, configFileSelector: t, default: r }, n = {})=>{
    const { signingName: o, logger: s } = n;
    return g(m((i = e, a = {
        signingName: o,
        logger: s
    }, async ()=>{
        try {
            const e = i(process.env, a);
            if (void 0 === e) throw new Error;
            return e;
        } catch (e) {
            throw new p(e.message || `Not found in ENV: ${q(i.toString())}`, {
                logger: a?.logger
            });
        }
    }), ((e, { preferredFile: t = "config", ...r } = {})=>async ()=>{
            const n = x(r), { configFile: o, credentialsFile: s } = await L(r), i = s[n] || {}, a = o[n] || {}, l = "config" === t ? {
                ...i,
                ...a
            } : {
                ...a,
                ...i
            };
            try {
                const r = e(l, "config" === t ? o : s);
                if (void 0 === r) throw new Error;
                return r;
            } catch (t) {
                throw new p(t.message || `Not found in config files w/ profile [${n}]: ${q(e.toString())}`, {
                    logger: r.logger
                });
            }
        })(t, n), j(r)));
    var i, a;
}, z = "AWS_USE_DUALSTACK_ENDPOINT", H = "use_dualstack_endpoint", W = {
    environmentVariableSelector: (e)=>y(e, z, v.ENV),
    configFileSelector: (e)=>y(e, H, v.CONFIG),
    default: !1
}, G = {
    environmentVariableSelector: (e)=>y(e, z, v.ENV),
    configFileSelector: (e)=>y(e, H, v.CONFIG),
    default: void 0
}, Y = "AWS_USE_FIPS_ENDPOINT", V = "use_fips_endpoint", K = {
    environmentVariableSelector: (e)=>y(e, Y, v.ENV),
    configFileSelector: (e)=>y(e, V, v.CONFIG),
    default: !1
}, Z = {
    environmentVariableSelector: (e)=>y(e, Y, v.ENV),
    configFileSelector: (e)=>y(e, V, v.CONFIG),
    default: void 0
}, X = "AWS_REGION", Q = "AWS_DEFAULT_REGION", ee = [
    "in-region",
    "cross-region",
    "mobile",
    "standard",
    "legacy"
], te = "x-aws-ec2-metadata-token", re = "x-aws-ec2-metadata-token-ttl-seconds";
let ne = 0;
const oe = async ()=>{
    if (!(process.env.AWS_EC2_METADATA_DISABLED || Date.now() < ne)) try {
        const e = ie(), t = (await ae({
            ...e,
            path: "/latest/api/token",
            method: "PUT",
            headers: {
                [re]: "21600"
            }
        })).toString();
        return (await ae({
            ...e,
            path: "/latest/meta-data/placement/region",
            method: "GET",
            headers: {
                [te]: t
            }
        })).toString().trim() || se();
    } catch  {
        return se();
    }
}, se = ()=>{
    ne = Date.now() + 6e4;
}, ie = ()=>{
    const e = process.env.AWS_EC2_METADATA_SERVICE_ENDPOINT;
    if (e) {
        const t = new URL(e);
        return {
            hostname: t.hostname.replace(/^\[(.+)]$/, "$1"),
            port: t.port ? Number(t.port) : void 0
        };
    }
    return "IPv6" === process.env.AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE ? {
        hostname: "fd00:ec2::254"
    } : {
        hostname: "169.254.169.254"
    };
}, ae = async (e)=>{
    const { request: t } = require("./module-37067.js");
    return new Promise((r, n)=>{
        const o = t({
            hostname: e.hostname,
            port: e.port,
            path: e.path,
            method: e.method,
            headers: e.headers,
            timeout: 1e3,
            signal: AbortSignal.timeout(1e3)
        });
        o.on("error", (e)=>{
            n(e), o.destroy();
        }), o.on("timeout", ()=>{
            n(new Error("TimeoutError from instance metadata service")), o.destroy();
        }), o.on("response", (e)=>{
            const { statusCode: t = 400 } = e;
            if (t < 200 || t >= 300) return n(Object.assign(new Error("Error response received from instance metadata service"), {
                statusCode: t
            })), void o.destroy();
            const s = [];
            e.on("data", (e)=>s.push(e)), e.on("end", ()=>{
                r(Buffer.concat(s)), o.destroy();
            });
        }), o.end();
    });
}, le = "AWS_REGION", ce = "region", ue = {
    environmentVariableSelector: (e)=>e[le],
    configFileSelector: (e)=>e[ce],
    default: async ()=>{
        const e = await oe();
        if (e) return e;
        throw new Error("Region is missing");
    }
}, de = new Set, pe = (e)=>"string" == typeof e && (e.startsWith("fips-") || e.endsWith("-fips")), he = (e = [], { useFipsEndpoint: t, useDualstackEndpoint: r })=>e.find(({ tags: e })=>t === e.includes("fips") && r === e.includes("dualstack"))?.hostname, me = {
    environmentVariableSelector: (e)=>e.AWS_DEFAULTS_MODE,
    configFileSelector: (e)=>e.defaults_mode,
    default: "legacy"
}, fe = async (e)=>{
    if (e) {
        const t = "function" == typeof e ? await e() : e, r = await ge();
        return r ? t === r ? "in-region" : "cross-region" : "standard";
    }
    return "standard";
}, ge = async ()=>process.env.AWS_EXECUTION_ENV && (process.env[X] || process.env[Q]) ? process.env[X] ?? process.env[Q] : oe();
exports.CONFIG_PREFIX_SEPARATOR = T, exports.CONFIG_USE_DUALSTACK_ENDPOINT = H, exports.CONFIG_USE_FIPS_ENDPOINT = V, exports.CredentialsProviderError = p, exports.DEFAULT_PROFILE = S, exports.DEFAULT_USE_DUALSTACK_ENDPOINT = !1, exports.DEFAULT_USE_FIPS_ENDPOINT = !1, exports.ENV_PROFILE = _, exports.ENV_USE_DUALSTACK_ENDPOINT = z, exports.ENV_USE_FIPS_ENDPOINT = Y, exports.NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials"
}, exports.NODE_REGION_CONFIG_OPTIONS = ue, exports.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = W, exports.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = K, exports.ProviderError = d, exports.REGION_ENV_NAME = le, exports.REGION_INI_NAME = ce, exports.SelectorType = v, exports.TokenProviderError = h, exports.booleanSelector = y, exports.chain = m, exports.externalDataInterceptor = $, exports.fromStatic = j, exports.fromValue = f, exports.getHomeDir = b, exports.getProfileName = x, exports.getRegionInfo = (e, { useFipsEndpoint: t = !1, useDualstackEndpoint: r = !1, signingService: n, regionHash: o, partitionHash: s })=>{
    const i = ((e, { partitionHash: t })=>Object.keys(t || {}).find((r)=>t[r].regions.includes(e)) ?? "aws")(e, {
        partitionHash: s
    }), a = e in o ? e : s[i]?.endpoint ?? e, l = {
        useFipsEndpoint: t,
        useDualstackEndpoint: r
    }, c = ((e, { regionHostname: t, partitionHostname: r })=>t || (r ? r.replace("{region}", e) : void 0))(a, {
        regionHostname: he(o[a]?.variants, l),
        partitionHostname: he(s[i]?.variants, l)
    });
    if (void 0 === c) throw new Error(`Endpoint resolution failed for: ${{
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
    })(c, {
        signingRegion: o[a]?.signingRegion,
        regionRegex: s[i].regionRegex,
        useFipsEndpoint: t
    });
    return {
        partition: i,
        signingService: n,
        hostname: c,
        ...u && {
            signingRegion: u
        },
        ...o[a]?.signingService && {
            signingService: o[a].signingService
        }
    };
}, exports.getSSOTokenFilepath = k, exports.getSSOTokenFromFile = async (e)=>{
    if (E[e]) return E[e];
    const t = k(e), r = await a(t, "utf8");
    return JSON.parse(r);
}, exports.loadConfig = J, exports.loadSharedConfigFiles = L, exports.loadSsoSessionData = async (e = {})=>N(e.configFilepath ?? I()).then(R).then(U).catch(B), exports.memoize = g, exports.nodeDualstackConfigSelectors = G, exports.nodeFipsConfigSelectors = Z, exports.numberSelector = (e, t, r)=>{
    if (!(t in e)) return;
    const n = parseInt(e[t], 10);
    if (Number.isNaN(n)) throw new TypeError(`Cannot load ${r} '${t}'. Expected number, got '${e[t]}'.`);
    return n;
}, exports.parseKnownFiles = async (e)=>{
    const t = await L(e);
    return ((...e)=>{
        const t = {};
        for (const r of e)for (const [e, n] of Object.entries(r))void 0 !== t[e] ? Object.assign(t[e], n) : t[e] = n;
        return t;
    })(t.configFile, t.credentialsFile);
}, exports.readFile = N, exports.resolveCustomEndpointsConfig = (e)=>{
    const { tls: t, endpoint: r, urlParser: n, useDualstackEndpoint: o } = e;
    return Object.assign(e, {
        tls: t ?? !0,
        endpoint: c("string" == typeof r ? n(r) : r),
        isCustomEndpoint: !0,
        useDualstackEndpoint: c(o ?? !1)
    });
}, exports.resolveDefaultsModeConfig = ({ region: e = J(ue), defaultsMode: t = J(me) } = {})=>g(async ()=>{
        const r = "function" == typeof t ? await t() : t;
        switch(r?.toLowerCase()){
            case "auto":
                return fe(e);
            case "in-region":
            case "cross-region":
            case "mobile":
            case "standard":
            case "legacy":
                return Promise.resolve(r?.toLocaleLowerCase());
            case void 0:
                return Promise.resolve("legacy");
            default:
                throw new Error(`Invalid parameter for "defaultsMode", expect ${ee.join(", ")}, got ${r}`);
        }
    }), exports.resolveEndpointsConfig = (e)=>{
    const t = c(e.useDualstackEndpoint ?? !1), { endpoint: r, useFipsEndpoint: n, urlParser: o, tls: s } = e;
    return Object.assign(e, {
        tls: s ?? !0,
        endpoint: r ? c("string" == typeof r ? o(r) : r) : ()=>(async (e)=>{
                const { tls: t = !0 } = e, r = await e.region();
                if (!new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/).test(r)) throw new Error("Invalid region in client config");
                const n = await e.useDualstackEndpoint(), o = await e.useFipsEndpoint(), { hostname: s } = await e.regionInfoProvider(r, {
                    useDualstackEndpoint: n,
                    useFipsEndpoint: o
                }) ?? {};
                if (!s) throw new Error("Cannot resolve hostname from client config");
                return e.urlParser(`${t ? "https:" : "http:"}//${s}`);
            })({
                ...e,
                useDualstackEndpoint: t,
                useFipsEndpoint: n
            }),
        isCustomEndpoint: !!r,
        useDualstackEndpoint: t
    });
}, exports.resolveRegionConfig = (e)=>{
    const { region: t, useFipsEndpoint: r } = e;
    if (!t) throw new Error("Region is missing");
    return Object.assign(e, {
        region: async ()=>{
            const e = ((e)=>pe(e) ? [
                    "fips-aws-global",
                    "aws-fips"
                ].includes(e) ? "us-east-1" : e.replace(/fips-(dkr-|prod-)?|-fips/, "") : e)("function" == typeof t ? await t() : t);
            return ((e, t = u)=>{
                if (de.has(e) || t(e)) de.add(e);
                else {
                    if ("*" !== e) throw new Error(`Region not accepted: region="${e}" is not a valid hostname component.`);
                    console.warn('@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.');
                }
            })(e), e;
        },
        useFipsEndpoint: async ()=>{
            const e = "string" == typeof t ? t : await t();
            return !!pe(e) || ("function" != typeof r ? Promise.resolve(!!r) : r());
        }
    });
};
