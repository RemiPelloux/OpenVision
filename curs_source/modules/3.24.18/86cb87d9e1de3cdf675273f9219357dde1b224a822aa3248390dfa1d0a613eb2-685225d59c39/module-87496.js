require.d(exports, {
    fromSSO: ()=>v
});
var t = require(61178), n = require(50800), i = require(98459), r = require(53835), a = require(65835), c = require(42757);
const l = (e)=>Object.entries(e).filter(([e])=>e.startsWith(a.I.SSO_SESSION + c.Q)).reduce((e, [s, o])=>({
            ...e,
            [s.substring(s.indexOf(c.Q) + 1)]: o
        }), {});
var g = require(8041), f = require(65600);
const p = ()=>({}), d = async (e = {})=>(0, f.TA)(e.configFilepath ?? (0, r.g)()).then(g.A).then(l).catch(p);
var h = require(97464), w = require(75504);
class u extends w.m {
    name = "TokenProviderError";
    constructor(e, s = !0){
        super(e, s), Object.setPrototypeOf(this, u.prototype);
    }
}
var C = require("./module-35666.js");
const S = "To refresh this SSO session run 'aws sso login' with the corresponding profile.", _ = async (e, s, t = {}, n)=>{
    const { CreateTokenCommand: i } = await Promise.all([
        require.e(66),
        require.e(578)
    ]).then(require.t.bind(require, 69654, 23)), r = await (async (e, s = {}, t)=>{
        const { SSOOIDCClient: n } = await Promise.all([
            require.e(66),
            require.e(578)
        ]).then(require.t.bind(require, 69654, 23)), i = (e)=>s.clientConfig?.[e] ?? s.parentClientConfig?.[e] ?? t?.[e];
        return new n(Object.assign({}, s.clientConfig ?? {}, {
            region: e ?? s.clientConfig?.region,
            logger: i("logger"),
            userAgentAppId: i("userAgentAppId")
        }));
    })(s, t, n);
    return r.send(new i({
        clientId: e.clientId,
        clientSecret: e.clientSecret,
        refreshToken: e.refreshToken,
        grantType: "refresh_token"
    }));
}, k = (e)=>{
    if (e.expiration && e.expiration.getTime() < Date.now()) throw new u(`Token is expired. ${S}`, !1);
}, m = (e, s, o = !1)=>{
    if (void 0 === s) throw new u(`Value not present for '${e}' in SSO Token${o ? ". Cannot refresh" : ""}. ${S}`, !1);
};
var y = require("./module-5217.js"), T = require(73024);
const { writeFile: x } = T.promises, O = new Date(0), I = (e = {})=>async ({ callerClientConfig: s } = {})=>{
        e.logger?.debug("@aws-sdk/token-providers - fromSso");
        const o = await (0, i.Y)(e), t = (0, n.Bz)({
            profile: e.profile ?? s?.profile
        }), r = o[t];
        if (!r) throw new u(`Profile '${t}' could not be found in shared credentials file.`, !1);
        if (!r.sso_session) throw new u(`Profile '${t}' is missing required property 'sso_session'.`);
        const a = r.sso_session, c = (await d(e))[a];
        if (!c) throw new u(`Sso session '${a}' could not be found in shared credentials file.`, !1);
        for (const e of [
            "sso_start_url",
            "sso_region"
        ])if (!c[e]) throw new u(`Sso session '${a}' is missing required property '${e}'.`, !1);
        c.sso_start_url;
        const l = c.sso_region;
        let g;
        try {
            g = await (0, C.v)(a);
        } catch (e) {
            throw new u(`The SSO session token associated with profile=${t} was not found or is invalid. ${S}`, !1);
        }
        m("accessToken", g.accessToken), m("expiresAt", g.expiresAt);
        const { accessToken: f, expiresAt: p } = g, h = {
            token: f,
            expiration: new Date(p)
        };
        if (h.expiration.getTime() - Date.now() > 3e5) return h;
        if (Date.now() - O.getTime() < 3e4) return k(h), h;
        m("clientId", g.clientId, !0), m("clientSecret", g.clientSecret, !0), m("refreshToken", g.refreshToken, !0);
        try {
            O.setTime(Date.now());
            const o = await _(g, l, e, s);
            m("accessToken", o.accessToken), m("expiresIn", o.expiresIn);
            const t = new Date(Date.now() + 1e3 * o.expiresIn);
            try {
                await ((e, s)=>{
                    const o = (0, y.C)(e), t = JSON.stringify(s, null, 2);
                    return x(o, t);
                })(a, {
                    ...g,
                    accessToken: o.accessToken,
                    expiresAt: t.toISOString(),
                    refreshToken: o.refreshToken
                });
            } catch (e) {}
            return {
                token: o.accessToken,
                expiration: t
            };
        } catch (e) {
            return k(h), h;
        }
    }, A = !1, N = async ({ ssoStartUrl: e, ssoSession: s, ssoAccountId: n, ssoRegion: i, ssoRoleName: r, ssoClient: a, clientConfig: c, parentClientConfig: l, callerClientConfig: g, profile: f, filepath: p, configFilepath: d, ignoreCache: w, logger: u })=>{
    let S;
    const _ = "To refresh this SSO session run aws sso login with the corresponding profile.";
    if (s) try {
        const e = await I({
            profile: f,
            filepath: p,
            configFilepath: d,
            ignoreCache: w
        })();
        S = {
            accessToken: e.token,
            expiresAt: new Date(e.expiration).toISOString()
        };
    } catch (e) {
        throw new t.C(e.message, {
            tryNextLink: A,
            logger: u
        });
    }
    else try {
        S = await (0, C.v)(e);
    } catch (e) {
        throw new t.C(`The SSO session associated with this profile is invalid. ${_}`, {
            tryNextLink: A,
            logger: u
        });
    }
    if (new Date(S.expiresAt).getTime() - Date.now() <= 0) throw new t.C(`The SSO session associated with this profile has expired. ${_}`, {
        tryNextLink: A,
        logger: u
    });
    const { accessToken: k } = S, { SSOClient: m, GetRoleCredentialsCommand: y } = await Promise.all([
        require.e(66),
        require.e(378)
    ]).then(require.bind(require, 27846)), T = a || new m(Object.assign({}, c ?? {}, {
        logger: c?.logger ?? g?.logger ?? l?.logger,
        region: c?.region ?? i,
        userAgentAppId: c?.userAgentAppId ?? g?.userAgentAppId ?? l?.userAgentAppId
    }));
    let x;
    try {
        x = await T.send(new y({
            accountId: n,
            roleName: r,
            accessToken: k
        }));
    } catch (e) {
        throw new t.C(e, {
            tryNextLink: A,
            logger: u
        });
    }
    const { roleCredentials: { accessKeyId: O, secretAccessKey: N, sessionToken: v, expiration: $, credentialScope: R, accountId: D } = {} } = x;
    if (!(O && N && v && $)) throw new t.C("SSO returns an invalid temporary credential.", {
        tryNextLink: A,
        logger: u
    });
    const b = {
        accessKeyId: O,
        secretAccessKey: N,
        sessionToken: v,
        expiration: new Date($),
        ...R && {
            credentialScope: R
        },
        ...D && {
            accountId: D
        }
    };
    return s ? (0, h.setCredentialFeature)(b, "CREDENTIALS_SSO", "s") : (0, h.setCredentialFeature)(b, "CREDENTIALS_SSO_LEGACY", "u"), b;
}, v = (e = {})=>async ({ callerClientConfig: s } = {})=>{
        e.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
        const { ssoStartUrl: o, ssoAccountId: r, ssoRegion: a, ssoRoleName: c, ssoSession: l } = e, { ssoClient: g } = e, f = (0, n.Bz)({
            profile: e.profile ?? s?.profile
        });
        if (o || r || a || c || l) {
            if (o && r && a && c) return N({
                ssoStartUrl: o,
                ssoSession: l,
                ssoAccountId: r,
                ssoRegion: a,
                ssoRoleName: c,
                ssoClient: g,
                clientConfig: e.clientConfig,
                parentClientConfig: e.parentClientConfig,
                callerClientConfig: e.callerClientConfig,
                profile: f,
                filepath: e.filepath,
                configFilepath: e.configFilepath,
                ignoreCache: e.ignoreCache,
                logger: e.logger
            });
            throw new t.C('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', {
                tryNextLink: !1,
                logger: e.logger
            });
        }
        {
            const s = (await (0, i.Y)(e))[f];
            if (!s) throw new t.C(`Profile ${f} was not found.`, {
                logger: e.logger
            });
            if (!(p = s) || "string" != typeof p.sso_start_url && "string" != typeof p.sso_account_id && "string" != typeof p.sso_session && "string" != typeof p.sso_region && "string" != typeof p.sso_role_name) throw new t.C(`Profile ${f} is not configured with SSO credentials.`, {
                logger: e.logger
            });
            if (s?.sso_session) {
                const n = (await d(e))[s.sso_session], i = ` configurations in profile ${f} and sso-session ${s.sso_session}`;
                if (a && a !== n.sso_region) throw new t.C("Conflicting SSO region" + i, {
                    tryNextLink: !1,
                    logger: e.logger
                });
                if (o && o !== n.sso_start_url) throw new t.C("Conflicting SSO start_url" + i, {
                    tryNextLink: !1,
                    logger: e.logger
                });
                s.sso_region = n.sso_region, s.sso_start_url = n.sso_start_url;
            }
            const { sso_start_url: n, sso_account_id: r, sso_region: c, sso_role_name: l, sso_session: h } = ((e, s)=>{
                const { sso_start_url: o, sso_account_id: n, sso_region: i, sso_role_name: r } = e;
                if (!(o && n && i && r)) throw new t.C(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(e).join(", ")}\nReference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, {
                    tryNextLink: !1,
                    logger: s
                });
                return e;
            })(s, e.logger);
            return N({
                ssoStartUrl: n,
                ssoSession: h,
                ssoAccountId: r,
                ssoRegion: c,
                ssoRoleName: l,
                ssoClient: g,
                clientConfig: e.clientConfig,
                parentClientConfig: e.parentClientConfig,
                callerClientConfig: e.callerClientConfig,
                profile: f,
                filepath: e.filepath,
                configFilepath: e.configFilepath,
                ignoreCache: e.ignoreCache,
                logger: e.logger
            });
        }
        var p;
    };
