const { homedir: n } = require("./module-48161.js"), { sep: s, join: o } = require("./module-76760.js"), { createHash: i } = require("./module-77598.js"), { readFile: a } = require("./module-51455.js"), { IniSectionType: c } = require("./module-52391.js"), { normalizeProvider: l } = require("./module-42997.js"), { isValidHostLabel: u } = require("./module-11255.js");
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
class m extends d {
    name = "TokenProviderError";
    constructor(e, t = !0){
        super(e, t), Object.setPrototypeOf(this, m.prototype);
    }
}
const h = (...e)=>async ()=>{
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
    let n, s, o, i = !1;
    const a = async ()=>{
        s || (s = e());
        try {
            n = await s, o = !0, i = !1;
        } finally{
            s = void 0;
        }
        return n;
    };
    return void 0 === t ? async (e)=>(o && !e?.forceRefresh || (n = await a()), n) : async (e)=>(o && !e?.forceRefresh || (n = await a()), i ? n : r && !r(n) ? (i = !0, n) : t(n) ? (await a(), n) : n);
}, y = (e, t, r)=>{
    if (t in e) {
        if ("true" === e[t]) return !0;
        if ("false" === e[t]) return !1;
        throw new Error(`Cannot load ${r} "${t}". Expected "true" or "false", got ${e[t]}.`);
    }
};
var w;
!function(e) {
    e.ENV = "env", e.CONFIG = "shared config entry";
}(w || (w = {}));
const v = {}, _ = ()=>{
    const { HOME: e, USERPROFILE: t, HOMEPATH: r, HOMEDRIVE: o = `C:${s}` } = process.env;
    if (e) return e;
    if (t) return t;
    if (r) return `${o}${r}`;
    const i = process && process.geteuid ? `${process.geteuid()}` : "DEFAULT";
    return v[i] || (v[i] = n()), v[i];
}, b = "AWS_PROFILE", S = "default", k = (e)=>e.profile || process.env[b] || S, x = (e)=>{
    const t = i("sha1").update(e).digest("hex");
    return o(_(), ".aws", "sso", "cache", `${t}.json`);
}, E = {}, I = ".", T = (e)=>Object.entries(e).filter(([e])=>{
        const t = e.indexOf(I);
        return -1 !== t && Object.values(c).includes(e.substring(0, t));
    }).reduce((e, [t, r])=>{
        const n = t.indexOf(I);
        return e[t.substring(0, n) === c.PROFILE ? t.substring(n + 1) : t] = r, e;
    }, {
        ...e.default && {
            default: e.default
        }
    }), C = ()=>process.env.AWS_CONFIG_FILE || o(_(), ".aws", "config"), P = ()=>process.env.AWS_SHARED_CREDENTIALS_FILE || o(_(), ".aws", "credentials"), A = /^([\w-]+)\s(["'])?([\w-@+.%:/]+)\2$/, R = [
    "__proto__",
    "profile __proto__"
], M = (e)=>{
    const t = {};
    let r, n;
    for (const s of e.split(/\r?\n/)){
        const e = s.split(/(^|\s)[;#]/)[0].trim();
        if ("[" === e[0] && "]" === e[e.length - 1]) {
            r = void 0, n = void 0;
            const t = e.substring(1, e.length - 1), s = A.exec(t);
            if (s) {
                const [, e, , t] = s;
                Object.values(c).includes(e) && (r = [
                    e,
                    t
                ].join(I));
            } else r = t;
            if (R.includes(t)) throw new Error(`Found invalid profile name "${t}"`);
        } else if (r) {
            const o = e.indexOf("=");
            if (![
                0,
                -1
            ].includes(o)) {
                const [i, a] = [
                    e.substring(0, o).trim(),
                    e.substring(o + 1).trim()
                ];
                if ("" === a) n = i;
                else {
                    n && s.trimStart() === s && (n = void 0), t[r] = t[r] || {};
                    const e = n ? [
                        n,
                        i
                    ].join(I) : i;
                    t[r][e] = a;
                }
            }
        }
    }
    return t;
}, J = {}, O = {}, B = (e, t)=>void 0 !== O[e] ? O[e] : (J[e] && !t?.ignoreCache || (J[e] = a(e, "utf8")), J[e]), D = ()=>({}), q = async (e = {})=>{
    const { filepath: t = P(), configFilepath: r = C() } = e, n = _();
    let s = t;
    t.startsWith("~/") && (s = o(n, t.slice(2)));
    let i = r;
    r.startsWith("~/") && (i = o(n, r.slice(2)));
    const a = await Promise.all([
        B(i, {
            ignoreCache: e.ignoreCache
        }).then(M).then(T).catch(D),
        B(s, {
            ignoreCache: e.ignoreCache
        }).then(M).catch(D)
    ]);
    return {
        configFile: a[0],
        credentialsFile: a[1]
    };
}, N = (e)=>Object.entries(e).filter(([e])=>e.startsWith(c.SSO_SESSION + I)).reduce((e, [t, r])=>({
            ...e,
            [t.substring(t.indexOf(I) + 1)]: r
        }), {}), F = ()=>({}), U = {
    getFileRecord: ()=>O,
    interceptFile (e, t) {
        O[e] = Promise.resolve(t);
    },
    getTokenRecord: ()=>E,
    interceptToken (e, t) {
        E[e] = t;
    }
};
function L(e) {
    try {
        const t = new Set(Array.from(e.match(/([A-Z_]){3,}/g) ?? []));
        return t.delete("CONFIG"), t.delete("CONFIG_PREFIX_SEPARATOR"), t.delete("ENV"), [
            ...t
        ].join(", ");
    } catch (t) {
        return e;
    }
}
const $ = (e)=>"function" == typeof e ? async ()=>await e() : f(e), j = ({ environmentVariableSelector: e, configFileSelector: t, default: r }, n = {})=>{
    const { signingName: s, logger: o } = n;
    return g(h((i = e, a = {
        signingName: s,
        logger: o
    }, async ()=>{
        try {
            const e = i(process.env, a);
            if (void 0 === e) throw new Error;
            return e;
        } catch (e) {
            throw new p(e.message || `Not found in ENV: ${L(i.toString())}`, {
                logger: a?.logger
            });
        }
    }), ((e, { preferredFile: t = "config", ...r } = {})=>async ()=>{
            const n = k(r), { configFile: s, credentialsFile: o } = await q(r), i = o[n] || {}, a = s[n] || {}, c = "config" === t ? {
                ...i,
                ...a
            } : {
                ...a,
                ...i
            };
            try {
                const r = e(c, "config" === t ? s : o);
                if (void 0 === r) throw new Error;
                return r;
            } catch (t) {
                throw new p(t.message || `Not found in config files w/ profile [${n}]: ${L(e.toString())}`, {
                    logger: r.logger
                });
            }
        })(t, n), $(r)));
    var i, a;
}, G = "AWS_USE_DUALSTACK_ENDPOINT", z = "use_dualstack_endpoint", W = {
    environmentVariableSelector: (e)=>y(e, G, w.ENV),
    configFileSelector: (e)=>y(e, z, w.CONFIG),
    default: !1
}, H = {
    environmentVariableSelector: (e)=>y(e, G, w.ENV),
    configFileSelector: (e)=>y(e, z, w.CONFIG),
    default: void 0
}, K = "AWS_USE_FIPS_ENDPOINT", V = "use_fips_endpoint", Y = {
    environmentVariableSelector: (e)=>y(e, K, w.ENV),
    configFileSelector: (e)=>y(e, V, w.CONFIG),
    default: !1
}, Q = {
    environmentVariableSelector: (e)=>y(e, K, w.ENV),
    configFileSelector: (e)=>y(e, V, w.CONFIG),
    default: void 0
}, X = "AWS_REGION", Z = "AWS_DEFAULT_REGION", ee = [
    "in-region",
    "cross-region",
    "mobile",
    "standard",
    "legacy"
], te = "x-aws-ec2-metadata-token", re = "x-aws-ec2-metadata-token-ttl-seconds";
let ne = 0;
const se = async ()=>{
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
        })).toString().trim() || oe();
    } catch  {
        return oe();
    }
}, oe = ()=>{
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
        const s = t({
            hostname: e.hostname,
            port: e.port,
            path: e.path,
            method: e.method,
            headers: e.headers,
            timeout: 1e3,
            signal: AbortSignal.timeout(1e3)
        });
        s.on("error", (e)=>{
            n(e), s.destroy();
        }), s.on("timeout", ()=>{
            n(new Error("TimeoutError from instance metadata service")), s.destroy();
        }), s.on("response", (e)=>{
            const { statusCode: t = 400 } = e;
            if (t < 200 || t >= 300) return n(Object.assign(new Error("Error response received from instance metadata service"), {
                statusCode: t
            })), void s.destroy();
            const o = [];
            e.on("data", (e)=>o.push(e)), e.on("end", ()=>{
                r(Buffer.concat(o)), s.destroy();
            });
        }), s.end();
    });
}, ce = "AWS_REGION", le = "region", ue = {
    environmentVariableSelector: (e)=>e[ce],
    configFileSelector: (e)=>e[le],
    default: async ()=>{
        const e = await se();
        if (e) return e;
        throw new Error("Region is missing");
    }
}, de = new Set, pe = (e)=>"string" == typeof e && (e.startsWith("fips-") || e.endsWith("-fips")), me = (e = [], { useFipsEndpoint: t, useDualstackEndpoint: r })=>e.find(({ tags: e })=>t === e.includes("fips") && r === e.includes("dualstack"))?.hostname, he = {
    environmentVariableSelector: (e)=>e.AWS_DEFAULTS_MODE,
    configFileSelector: (e)=>e.defaults_mode,
    default: "legacy"
}, fe = async (e)=>{
    if (e) {
        const t = "function" == typeof e ? await e() : e, r = await ge();
        return r ? t === r ? "in-region" : "cross-region" : "standard";
    }
    return "standard";
}, ge = async ()=>process.env.AWS_EXECUTION_ENV && (process.env[X] || process.env[Z]) ? process.env[X] ?? process.env[Z] : se();
exports.CONFIG_PREFIX_SEPARATOR = I, exports.CONFIG_USE_DUALSTACK_ENDPOINT = z, exports.CONFIG_USE_FIPS_ENDPOINT = V, exports.CredentialsProviderError = p, exports.DEFAULT_PROFILE = S, exports.DEFAULT_USE_DUALSTACK_ENDPOINT = !1, exports.DEFAULT_USE_FIPS_ENDPOINT = !1, exports.ENV_PROFILE = b, exports.ENV_USE_DUALSTACK_ENDPOINT = G, exports.ENV_USE_FIPS_ENDPOINT = K, exports.NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials"
}, exports.NODE_REGION_CONFIG_OPTIONS = ue, exports.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = W, exports.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = Y, exports.ProviderError = d, exports.REGION_ENV_NAME = ce, exports.REGION_INI_NAME = le, exports.SelectorType = w, exports.TokenProviderError = m, exports.booleanSelector = y, exports.chain = h, exports.externalDataInterceptor = U, exports.fromStatic = $, exports.fromValue = f, exports.getHomeDir = _, exports.getProfileName = k, exports.getRegionInfo = (e, { useFipsEndpoint: t = !1, useDualstackEndpoint: r = !1, signingService: n, regionHash: s, partitionHash: o })=>{
    const i = ((e, { partitionHash: t })=>Object.keys(t || {}).find((r)=>t[r].regions.includes(e)) ?? "aws")(e, {
        partitionHash: o
    }), a = e in s ? e : o[i]?.endpoint ?? e, c = {
        useFipsEndpoint: t,
        useDualstackEndpoint: r
    }, l = ((e, { regionHostname: t, partitionHostname: r })=>t || (r ? r.replace("{region}", e) : void 0))(a, {
        regionHostname: me(s[a]?.variants, c),
        partitionHostname: me(o[i]?.variants, c)
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
        regionRegex: o[i].regionRegex,
        useFipsEndpoint: t
    });
    return {
        partition: i,
        signingService: n,
        hostname: l,
        ...u && {
            signingRegion: u
        },
        ...s[a]?.signingService && {
            signingService: s[a].signingService
        }
    };
}, exports.getSSOTokenFilepath = x, exports.getSSOTokenFromFile = async (e)=>{
    if (E[e]) return E[e];
    const t = x(e), r = await a(t, "utf8");
    return JSON.parse(r);
}, exports.loadConfig = j, exports.loadSharedConfigFiles = q, exports.loadSsoSessionData = async (e = {})=>B(e.configFilepath ?? C()).then(M).then(N).catch(F), exports.memoize = g, exports.nodeDualstackConfigSelectors = H, exports.nodeFipsConfigSelectors = Q, exports.numberSelector = (e, t, r)=>{
    if (!(t in e)) return;
    const n = parseInt(e[t], 10);
    if (Number.isNaN(n)) throw new TypeError(`Cannot load ${r} '${t}'. Expected number, got '${e[t]}'.`);
    return n;
}, exports.parseKnownFiles = async (e)=>{
    const t = await q(e);
    return ((...e)=>{
        const t = {};
        for (const r of e)for (const [e, n] of Object.entries(r))void 0 !== t[e] ? Object.assign(t[e], n) : t[e] = n;
        return t;
    })(t.configFile, t.credentialsFile);
}, exports.readFile = B, exports.resolveCustomEndpointsConfig = (e)=>{
    const { tls: t, endpoint: r, urlParser: n, useDualstackEndpoint: s } = e;
    return Object.assign(e, {
        tls: t ?? !0,
        endpoint: l("string" == typeof r ? n(r) : r),
        isCustomEndpoint: !0,
        useDualstackEndpoint: l(s ?? !1)
    });
}, exports.resolveDefaultsModeConfig = ({ region: e = j(ue), defaultsMode: t = j(he) } = {})=>g(async ()=>{
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
    const t = l(e.useDualstackEndpoint ?? !1), { endpoint: r, useFipsEndpoint: n, urlParser: s, tls: o } = e;
    return Object.assign(e, {
        tls: o ?? !0,
        endpoint: r ? l("string" == typeof r ? s(r) : r) : ()=>(async (e)=>{
                const { tls: t = !0 } = e, r = await e.region();
                if (!new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/).test(r)) throw new Error("Invalid region in client config");
                const n = await e.useDualstackEndpoint(), s = await e.useFipsEndpoint(), { hostname: o } = await e.regionInfoProvider(r, {
                    useDualstackEndpoint: n,
                    useFipsEndpoint: s
                }) ?? {};
                if (!o) throw new Error("Cannot resolve hostname from client config");
                return e.urlParser(`${t ? "https:" : "http:"}//${o}`);
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
