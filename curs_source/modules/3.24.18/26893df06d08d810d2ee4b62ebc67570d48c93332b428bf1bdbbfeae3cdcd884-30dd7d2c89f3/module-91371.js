require.d(exports, {
    fromIni: ()=>S
});
var n = require("./module-98459.js"), o = require(50800), s = require(61178), i = require(97464), a = require(480);
const c = (e)=>(0, i.setCredentialFeature)(e, "CREDENTIALS_PROFILE_NAMED_PROVIDER", "p"), l = (e, { profile: t, logger: r })=>{
    const n = "string" == typeof e.source_profile && void 0 === e.credential_source;
    return n && r?.debug?.(`    ${t} isAssumeRoleWithSourceProfile source_profile=${e.source_profile}`), n;
}, d = (e, { profile: t, logger: r })=>{
    const n = "string" == typeof e.credential_source && void 0 === e.source_profile;
    return n && r?.debug?.(`    ${t} isCredentialSourceProfile credential_source=${e.credential_source}`), n;
}, g = async (e, t, n, l, d = {}, g)=>{
    n.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
    const u = t[e], { source_profile: p, region: h } = u;
    if (!n.roleAssumer) {
        const { getDefaultRoleAssumer: e } = await Promise.all([
            require.e(66),
            require.e(163)
        ]).then(require.t.bind(require, 37163, 23));
        n.roleAssumer = e({
            ...n.clientConfig,
            credentialProviderLogger: n.logger,
            parentClientConfig: {
                ...l,
                ...n?.parentClientConfig,
                region: h ?? n?.parentClientConfig?.region ?? l?.region
            }
        }, n.clientPlugins);
    }
    if (p && p in d) throw new s.C(`Detected a cycle attempting to resolve credentials for profile ${(0, o.Bz)(n)}. Profiles visited: ` + Object.keys(d).join(", "), {
        logger: n.logger
    });
    n.logger?.debug("@aws-sdk/credential-provider-ini - finding credential resolver using " + (p ? `source_profile=[${p}]` : `profile=[${e}]`));
    const _ = p ? g(p, t, n, l, {
        ...d,
        [p]: !0
    }, f(t[p] ?? {})) : (await ((e, t, n)=>{
        const o = {
            EcsContainer: async (e)=>{
                const { fromHttp: t } = await require.e(369).then(require.bind(require, 18750)), { fromContainerMetadata: o } = await require.e(356).then(require.bind(require, 95975));
                return n?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer"), async ()=>(0, a.c)(t(e ?? {}), o(e))().then(c);
            },
            Ec2InstanceMetadata: async (e)=>{
                n?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
                const { fromInstanceMetadata: t } = await require.e(356).then(require.bind(require, 95975));
                return async ()=>t(e)().then(c);
            },
            Environment: async (e)=>{
                n?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
                const { fromEnv: t } = await require.e(957).then(require.bind(require, 88957));
                return async ()=>t(e)().then(c);
            }
        };
        if (e in o) return o[e];
        throw new s.C(`Unsupported credential source in profile ${t}. Got ${e}, expected EcsContainer or Ec2InstanceMetadata or Environment.`, {
            logger: n
        });
    })(u.credential_source, e, n.logger)(n))();
    if (f(u)) return _.then((e)=>(0, i.setCredentialFeature)(e, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
    {
        const t = {
            RoleArn: u.role_arn,
            RoleSessionName: u.role_session_name || `aws-sdk-js-${Date.now()}`,
            ExternalId: u.external_id,
            DurationSeconds: parseInt(u.duration_seconds || "3600", 10)
        }, { mfa_serial: r } = u;
        if (r) {
            if (!n.mfaCodeProvider) throw new s.C(`Profile ${e} requires multi-factor authentication, but no MFA code callback was provided.`, {
                logger: n.logger,
                tryNextLink: !1
            });
            t.SerialNumber = r, t.TokenCode = await n.mfaCodeProvider(r);
        }
        const o = await _;
        return n.roleAssumer(o, t).then((e)=>(0, i.setCredentialFeature)(e, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
    }
}, f = (e)=>!e.role_arn && !!e.credential_source;
var u = require("./module-50333.js"), p = require("./module-65600.js"), h = require(77598), _ = require(73024), y = require(48161), w = require(76760);
class C {
    profileData;
    init;
    callerClientConfig;
    static REFRESH_THRESHOLD = 3e5;
    constructor(e, t, r){
        this.profileData = e, this.init = t, this.callerClientConfig = r;
    }
    async loadCredentials() {
        const e = await this.loadToken();
        if (!e) throw new s.C(`Failed to load a token for session ${this.loginSession}, please re-authenticate using aws login`, {
            tryNextLink: !1,
            logger: this.logger
        });
        const t = e.accessToken, r = Date.now();
        return new Date(t.expiresAt).getTime() - r <= C.REFRESH_THRESHOLD ? this.refresh(e) : {
            accessKeyId: t.accessKeyId,
            secretAccessKey: t.secretAccessKey,
            sessionToken: t.sessionToken,
            accountId: t.accountId,
            expiration: new Date(t.expiresAt)
        };
    }
    get logger() {
        return this.init?.logger;
    }
    get loginSession() {
        return this.profileData.login_session;
    }
    async refresh(e) {
        const { SigninClient: t, CreateOAuth2TokenCommand: n } = await Promise.all([
            require.e(66),
            require.e(59)
        ]).then(require.t.bind(require, 73059, 23)), { logger: o, userAgentAppId: i } = this.callerClientConfig ?? {}, a = ((e)=>"h2" === e?.metadata?.handlerProtocol)(this.callerClientConfig?.requestHandler) ? void 0 : this.callerClientConfig?.requestHandler, c = new t({
            credentials: {
                accessKeyId: "",
                secretAccessKey: ""
            },
            region: this.profileData.region ?? await this.callerClientConfig?.region?.() ?? process.env.AWS_REGION,
            requestHandler: a,
            logger: o,
            userAgentAppId: i,
            ...this.init?.clientConfig
        });
        this.createDPoPInterceptor(c.middlewareStack);
        const l = {
            tokenInput: {
                clientId: e.clientId,
                refreshToken: e.refreshToken,
                grantType: "refresh_token"
            }
        };
        try {
            const t = await c.send(new n(l)), { accessKeyId: r, secretAccessKey: o, sessionToken: i } = t.tokenOutput?.accessToken ?? {}, { refreshToken: a, expiresIn: d } = t.tokenOutput ?? {};
            if (!(r && o && i && a)) throw new s.C("Token refresh response missing required fields", {
                logger: this.logger,
                tryNextLink: !1
            });
            const g = 1e3 * (d ?? 900), f = new Date(Date.now() + g), u = {
                ...e,
                accessToken: {
                    ...e.accessToken,
                    accessKeyId: r,
                    secretAccessKey: o,
                    sessionToken: i,
                    expiresAt: f.toISOString()
                },
                refreshToken: a
            };
            await this.saveToken(u);
            const p = u.accessToken;
            return {
                accessKeyId: p.accessKeyId,
                secretAccessKey: p.secretAccessKey,
                sessionToken: p.sessionToken,
                accountId: p.accountId,
                expiration: f
            };
        } catch (e) {
            if ("AccessDeniedException" === e.name) {
                let t;
                switch(e.error){
                    case "TOKEN_EXPIRED":
                        t = "Your session has expired. Please reauthenticate.";
                        break;
                    case "USER_CREDENTIALS_CHANGED":
                        t = "Unable to refresh credentials because of a change in your password. Please reauthenticate with your new password.";
                        break;
                    case "INSUFFICIENT_PERMISSIONS":
                        t = "Unable to refresh credentials due to insufficient permissions. You may be missing permission for the 'CreateOAuth2Token' action.";
                        break;
                    default:
                        t = `Failed to refresh token: ${String(e)}. Please re-authenticate using \`aws login\``;
                }
                throw new s.C(t, {
                    logger: this.logger,
                    tryNextLink: !1
                });
            }
            throw new s.C(`Failed to refresh token: ${String(e)}. Please re-authenticate using aws login`, {
                logger: this.logger
            });
        }
    }
    async loadToken() {
        const e = this.getTokenFilePath();
        try {
            let t;
            try {
                t = await (0, p.TA)(e, {
                    ignoreCache: this.init?.ignoreCache
                });
            } catch  {
                t = await _.promises.readFile(e, "utf8");
            }
            const r = JSON.parse(t), n = [
                "accessToken",
                "clientId",
                "refreshToken",
                "dpopKey"
            ].filter((e)=>!r[e]);
            if (r.accessToken?.accountId || n.push("accountId"), n.length > 0) throw new s.C(`Token validation failed, missing fields: ${n.join(", ")}`, {
                logger: this.logger,
                tryNextLink: !1
            });
            return r;
        } catch (t) {
            throw new s.C(`Failed to load token from ${e}: ${String(t)}`, {
                logger: this.logger,
                tryNextLink: !1
            });
        }
    }
    async saveToken(e) {
        const t = this.getTokenFilePath(), r = (0, w.dirname)(t);
        try {
            await _.promises.mkdir(r, {
                recursive: !0
            });
        } catch (e) {}
        await _.promises.writeFile(t, JSON.stringify(e, null, 2), "utf8");
    }
    getTokenFilePath() {
        const e = process.env.AWS_LOGIN_CACHE_DIRECTORY ?? (0, w.join)((0, y.homedir)(), ".aws", "login", "cache"), t = Buffer.from(this.loginSession, "utf8"), r = (0, h.createHash)("sha256").update(t).digest("hex");
        return (0, w.join)(e, `${r}.json`);
    }
    derToRawSignature(e) {
        let t = 2;
        if (2 !== e[t]) throw new Error("Invalid DER signature");
        t++;
        const r = e[t++];
        let n = e.subarray(t, t + r);
        if (t += r, 2 !== e[t]) throw new Error("Invalid DER signature");
        t++;
        const o = e[t++];
        let s = e.subarray(t, t + o);
        n = 0 === n[0] ? n.subarray(1) : n, s = 0 === s[0] ? s.subarray(1) : s;
        const i = Buffer.concat([
            Buffer.alloc(32 - n.length),
            n
        ]), a = Buffer.concat([
            Buffer.alloc(32 - s.length),
            s
        ]);
        return Buffer.concat([
            i,
            a
        ]);
    }
    createDPoPInterceptor(e) {
        e.add((e)=>async (t)=>{
                if (u.K.isInstance(t.request)) {
                    const e = t.request, r = `${e.protocol}//${e.hostname}${e.port ? `:${e.port}` : ""}${e.path}`, n = await this.generateDpop(e.method, r);
                    e.headers = {
                        ...e.headers,
                        DPoP: n
                    };
                }
                return e(t);
            }, {
            step: "finalizeRequest",
            name: "dpopInterceptor",
            override: !0
        });
    }
    async generateDpop(e = "POST", t) {
        const r = await this.loadToken();
        try {
            const n = (0, h.createPrivateKey)({
                key: r.dpopKey,
                format: "pem",
                type: "sec1"
            }), o = (0, h.createPublicKey)(n).export({
                format: "der",
                type: "spki"
            });
            let s = -1;
            for(let e = 0; e < o.length; e++)if (4 === o[e]) {
                s = e;
                break;
            }
            const i = o.slice(s + 1, s + 33), a = o.slice(s + 33, s + 65), c = {
                alg: "ES256",
                typ: "dpop+jwt",
                jwk: {
                    kty: "EC",
                    crv: "P-256",
                    x: i.toString("base64url"),
                    y: a.toString("base64url")
                }
            }, l = {
                jti: crypto.randomUUID(),
                htm: e,
                htu: t,
                iat: Math.floor(Date.now() / 1e3)
            }, d = Buffer.from(JSON.stringify(c)).toString("base64url"), g = `${d}.${Buffer.from(JSON.stringify(l)).toString("base64url")}`, f = (0, h.sign)("sha256", Buffer.from(g), n), u = this.derToRawSignature(f);
            return `${g}.${u.toString("base64url")}`;
        } catch (e) {
            throw new s.C(`Failed to generate Dpop proof: ${e instanceof Error ? e.message : String(e)}`, {
                logger: this.logger,
                tryNextLink: !1
            });
        }
    }
}
const m = async (e, t, r)=>{
    const a = await (c = {
        ...t,
        profile: e
    }, async ({ callerClientConfig: e } = {})=>{
        c?.logger?.debug?.("@aws-sdk/credential-providers - fromLoginCredentials");
        const t = await (0, n.Y)(c || {}), r = (0, o.Bz)({
            profile: c?.profile ?? e?.profile
        }), a = t[r];
        if (!a?.login_session) throw new s.C(`Profile ${r} does not contain login_session.`, {
            tryNextLink: !0,
            logger: c?.logger
        });
        const l = new C(a, c, e), d = await l.loadCredentials();
        return (0, i.setCredentialFeature)(d, "CREDENTIALS_LOGIN", "AD");
    })({
        callerClientConfig: r
    });
    var c;
    return (0, i.setCredentialFeature)(a, "CREDENTIALS_PROFILE_LOGIN", "AC");
}, E = (e)=>Boolean(e) && "object" == typeof e && "string" == typeof e.aws_access_key_id && "string" == typeof e.aws_secret_access_key && [
        "undefined",
        "string"
    ].indexOf(typeof e.aws_session_token) > -1 && [
        "undefined",
        "string"
    ].indexOf(typeof e.aws_account_id) > -1, I = async (e, t)=>{
    t?.logger?.debug("@aws-sdk/credential-provider-ini - resolveStaticCredentials");
    const r = {
        accessKeyId: e.aws_access_key_id,
        secretAccessKey: e.aws_secret_access_key,
        sessionToken: e.aws_session_token,
        ...e.aws_credential_scope && {
            credentialScope: e.aws_credential_scope
        },
        ...e.aws_account_id && {
            accountId: e.aws_account_id
        }
    };
    return (0, i.setCredentialFeature)(r, "CREDENTIALS_PROFILE", "n");
}, k = async (e, t, n, o, a = {}, c = !1)=>{
    const f = t[e];
    if (Object.keys(a).length > 0 && E(f)) return I(f, n);
    if (c || ((e, { profile: t = "default", logger: r } = {})=>Boolean(e) && "object" == typeof e && "string" == typeof e.role_arn && [
            "undefined",
            "string"
        ].indexOf(typeof e.role_session_name) > -1 && [
            "undefined",
            "string"
        ].indexOf(typeof e.external_id) > -1 && [
            "undefined",
            "string"
        ].indexOf(typeof e.mfa_serial) > -1 && (l(e, {
            profile: t,
            logger: r
        }) || d(e, {
            profile: t,
            logger: r
        })))(f, {
        profile: e,
        logger: n.logger
    })) return g(e, t, n, o, a, k);
    if (E(f)) return I(f, n);
    if (u = f, Boolean(u) && "object" == typeof u && "string" == typeof u.web_identity_token_file && "string" == typeof u.role_arn && [
        "undefined",
        "string"
    ].indexOf(typeof u.role_session_name) > -1) return (async (e, t, n)=>require.e(109).then(require.bind(require, 3109)).then(({ fromTokenFile: r })=>r({
                webIdentityTokenFile: e.web_identity_token_file,
                roleArn: e.role_arn,
                roleSessionName: e.role_session_name,
                roleAssumerWithWebIdentity: t.roleAssumerWithWebIdentity,
                logger: t.logger,
                parentClientConfig: t.parentClientConfig
            })({
                callerClientConfig: n
            }).then((e)=>(0, i.setCredentialFeature)(e, "CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN", "q"))))(f, n, o);
    var u;
    if (((e)=>Boolean(e) && "object" == typeof e && "string" == typeof e.credential_process)(f)) return (async (e, t)=>require.e(379).then(require.bind(require, 93760)).then(({ fromProcess: r })=>r({
                ...e,
                profile: t
            })().then((e)=>(0, i.setCredentialFeature)(e, "CREDENTIALS_PROFILE_PROCESS", "v"))))(n, e);
    if (((e)=>e && ("string" == typeof e.sso_start_url || "string" == typeof e.sso_account_id || "string" == typeof e.sso_session || "string" == typeof e.sso_region || "string" == typeof e.sso_role_name))(f)) return await (async (e, t, n = {}, o)=>{
        const { fromSSO: s } = await require.e(115).then(require.bind(require, 87496));
        return s({
            profile: e,
            logger: n.logger,
            parentClientConfig: n.parentClientConfig,
            clientConfig: n.clientConfig
        })({
            callerClientConfig: o
        }).then((e)=>t.sso_session ? (0, i.setCredentialFeature)(e, "CREDENTIALS_PROFILE_SSO", "r") : (0, i.setCredentialFeature)(e, "CREDENTIALS_PROFILE_SSO_LEGACY", "t"));
    })(e, f, n, o);
    if (((e)=>Boolean(e && e.login_session))(f)) return m(e, n, o);
    throw new s.C(`Could not resolve credentials using profile: [${e}] in configuration/credentials file(s).`, {
        logger: n.logger
    });
}, S = (e = {})=>async ({ callerClientConfig: t } = {})=>{
        e.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
        const r = await (0, n.Y)(e);
        return k((0, o.Bz)({
            profile: e.profile ?? t?.profile
        }), r, e, t);
    };
