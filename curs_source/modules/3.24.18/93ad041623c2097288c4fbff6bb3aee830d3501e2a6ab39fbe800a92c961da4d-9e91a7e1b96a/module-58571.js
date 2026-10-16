const { ProviderError: n, booleanSelector: s, SelectorType: i, loadConfig: o } = require(86344), { setCredentialFeature: a } = require(97464), { normalizeProvider: c, memoizeIdentityProvider: l, isIdentityExpired: u, doesIdentityRequireRefresh: d } = require(55909), { SignatureV4: h } = require("./module-6328.js"), { HttpResponse: f, HttpRequest: p } = require(73931), g = (e)=>f.isInstance(e) ? e.headers?.date ?? e.headers?.Date : void 0, m = (e)=>f.isInstance(e) ? e.headers?.age ?? e.headers?.Age : void 0, y = (e)=>new Date(Date.now() + e), w = (e, t, r, n)=>{
    if (void 0 !== n) return t;
    const s = Date.parse(e), i = Date.now();
    if (void 0 !== r && i - r > 9e5) return t;
    return void 0 !== r ? s - (r + i) / 2 : s - i;
}, S = (e, t)=>{
    if (!t) throw new Error(`Property \`${e}\` is not resolved for AWS SDK SigV4Auth`);
    return t;
}, b = async (e)=>{
    const t = S("context", e.context), r = S("config", e.config), n = t.endpointV2?.properties?.authSchemes?.[0], s = S("signer", r.signer), i = await s(n), o = e?.signingRegion, a = e?.signingRegionSet, c = e?.signingName;
    return {
        config: r,
        signer: i,
        signingRegion: o,
        signingRegionSet: a,
        signingName: c
    };
};
class E {
    async sign(e, t, r) {
        if (!p.isInstance(e)) throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        const n = await b(r), { config: s, signer: i } = n;
        let { signingRegion: o, signingName: a } = n;
        const c = r.context;
        if (c?.authSchemes?.length) {
            const [e, t] = c.authSchemes;
            "sigv4a" === e?.name && "sigv4" === t?.name && (o = t?.signingRegion ?? o, a = t?.signingName ?? a);
        }
        const l = !0 === await s.disableClockSkewCorrection?.();
        r._disableClockSkewCorrection = l, l || (r._preRequestSystemClockOffset = s.systemClockOffset, r._requestSentAt = Date.now());
        return await i.sign(e, {
            signingDate: l ? new Date : y(s.systemClockOffset),
            signingRegion: o,
            signingService: a
        });
    }
    errorHandler(e) {
        return (t)=>{
            const r = t;
            if (!e._disableClockSkewCorrection) {
                const t = r.ServerTime ?? g(r.$response);
                if (t) {
                    const n = S("config", e.config), s = e._preRequestSystemClockOffset, i = e._requestSentAt, o = m(r.$response), a = w(t, n.systemClockOffset, i, o);
                    n.systemClockOffset = a;
                    Math.abs(a) >= 24e4 && (a !== s || void 0 !== s && s !== a) && r.$metadata && (r.$metadata.clockSkewCorrected = !0);
                }
            }
            throw t;
        };
    }
    successHandler(e, t) {
        if (t._disableClockSkewCorrection) return;
        const r = g(e);
        if (r) {
            const n = S("config", t.config), s = t._requestSentAt, i = m(e);
            n.systemClockOffset = w(r, n.systemClockOffset, s, i);
        }
    }
}
const v = E;
const x = (e)=>"string" == typeof e && e.length > 0 ? e.split(",").map((e)=>e.trim()) : [], T = (e)=>`AWS_BEARER_TOKEN_${e.replace(/[\s-]/g, "_").toUpperCase()}`, A = "AWS_AUTH_SCHEME_PREFERENCE", N = "auth_scheme_preference", C = {
    environmentVariableSelector: (e, t)=>{
        if (t?.signingName) {
            if (T(t.signingName) in e) return [
                "httpBearerAuth"
            ];
        }
        if (A in e) return x(e[A]);
    },
    configFileSelector: (e)=>{
        if (N in e) return x(e[N]);
    },
    default: []
}, _ = {
    environmentVariableSelector (e) {
        if (e.AWS_SIGV4A_SIGNING_REGION_SET) return e.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map((e)=>e.trim());
        throw new n("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", {
            tryNextLink: !0
        });
    },
    configFileSelector (e) {
        if (e.sigv4a_signing_region_set) return (e.sigv4a_signing_region_set ?? "").split(",").map((e)=>e.trim());
        throw new n("sigv4a_signing_region_set not set in profile.", {
            tryNextLink: !0
        });
    },
    default: void 0
};
const R = o({
    environmentVariableSelector: (e)=>s(e, "AWS_DISABLE_CLOCK_SKEW_CORRECTION", i.ENV),
    configFileSelector: (e)=>s(e, "disable_clock_skew_correction", i.CONFIG),
    default: !1
}), I = (D = R, (e)=>{
    let t, r = e.credentials, n = !!e.credentials;
    Object.defineProperty(e, "credentials", {
        set (s) {
            s && s !== r && s !== t && (n = !0), r = s;
            const i = function(e, { credentials: t, credentialDefaultProvider: r }) {
                let n;
                return n = t ? t?.memoized ? t : l(t, u, d) : r ? c(r(Object.assign({}, e, {
                    parentClientConfig: e
                }))) : async ()=>{
                    throw new Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
                }, n.memoized = !0, n;
            }(e, {
                credentials: r,
                credentialDefaultProvider: e.credentialDefaultProvider
            }), o = function(e, t) {
                if (t.configBound) return t;
                const r = async (r)=>t({
                        ...r,
                        callerClientConfig: e
                    });
                return r.memoized = t.memoized, r.configBound = !0, r;
            }(e, i);
            if (n && !o.attributed) {
                const e = "object" == typeof r && null !== r;
                t = async (t)=>{
                    const r = await o(t);
                    return !e || r.$source && 0 !== Object.keys(r.$source).length ? r : a(r, "CREDENTIALS_CODE", "e");
                }, t.memoized = o.memoized, t.configBound = o.configBound, t.attributed = !0;
            } else t = o;
        },
        get: ()=>t,
        enumerable: !0,
        configurable: !0
    }), e.credentials = r;
    const { signingEscapePath: s = !0, systemClockOffset: i = e.systemClockOffset || 0, sha256: o } = e;
    let f;
    return f = e.signer ? c(e.signer) : e.regionInfoProvider ? ()=>c(e.region)().then(async (t)=>[
                await e.regionInfoProvider(t, {
                    useFipsEndpoint: await e.useFipsEndpoint(),
                    useDualstackEndpoint: await e.useDualstackEndpoint()
                }) || {},
                t
            ]).then(([t, r])=>{
            const { signingRegion: n, signingService: i } = t;
            e.signingRegion = e.signingRegion || n || r, e.signingName = e.signingName || i || e.serviceId;
            const a = {
                ...e,
                credentials: e.credentials,
                region: e.signingRegion,
                service: e.signingName,
                sha256: o,
                uriEscapePath: s
            };
            return new (e.signerConstructor || h)(a);
        }) : async (t)=>{
        const r = (t = Object.assign({}, {
            name: "sigv4",
            signingName: e.signingName || e.defaultSigningName,
            signingRegion: await c(e.region)(),
            properties: {}
        }, t)).signingRegion, n = t.signingName;
        e.signingRegion = e.signingRegion || r, e.signingName = e.signingName || n || e.serviceId;
        const i = {
            ...e,
            credentials: e.credentials,
            region: e.signingRegion,
            service: e.signingName,
            sha256: o,
            uriEscapePath: s
        };
        return new (e.signerConstructor || h)(i);
    }, Object.assign(e, {
        systemClockOffset: i,
        signingEscapePath: s,
        signer: f,
        disableClockSkewCorrection: c(e.disableClockSkewCorrection ?? D)
    });
});
var D;
const k = I;
exports.AWSSDKSigV4Signer = v, exports.AwsSdkSigV4ASigner = class extends E {
    async sign(e, t, r) {
        if (!p.isInstance(e)) throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        const { config: n, signer: s, signingRegion: i, signingRegionSet: o, signingName: a } = await b(r), c = (await n.sigv4aSigningRegionSet?.() ?? o ?? [
            i
        ]).join(","), l = !0 === await n.disableClockSkewCorrection?.();
        r._disableClockSkewCorrection = l, l || (r._preRequestSystemClockOffset = n.systemClockOffset, r._requestSentAt = Date.now());
        return await s.sign(e, {
            signingDate: l ? new Date : y(n.systemClockOffset),
            signingRegion: c,
            signingService: a
        });
    }
}, exports.AwsSdkSigV4Signer = E, exports.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = C, exports.NODE_SIGV4A_CONFIG_OPTIONS = _, exports.getBearerTokenEnvKey = T, exports.resolveAWSSDKSigV4Config = k, exports.resolveAwsSdkSigV4AConfig = (e)=>(e.sigv4aSigningRegionSet = c(e.sigv4aSigningRegionSet), e), exports.resolveAwsSdkSigV4Config = I, exports.validateSigningProperties = b;
