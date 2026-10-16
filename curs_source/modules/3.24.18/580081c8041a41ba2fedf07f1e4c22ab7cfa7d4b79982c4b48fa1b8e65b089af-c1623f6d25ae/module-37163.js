var i = require("./module-78920.js"), o = require(90099), r = require(55164), s = require("./module-412.js"), a = require("./module-9823.js"), c = require("./module-55339.js"), l = require(97464), d = require(18415), u = require("./module-32834.js");
class p extends o.Command.classBuilder().ep(s.commonParams).m(function(e, t, n, i) {
    return [
        r.getEndpointPlugin(n, e.getEndpointParameterInstructions())
    ];
}).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").sc(a.AssumeRole$).build() {
}
class g extends o.Command.classBuilder().ep(s.commonParams).m(function(e, t, n, i) {
    return [
        r.getEndpointPlugin(n, e.getEndpointParameterInstructions())
    ];
}).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").sc(a.AssumeRoleWithWebIdentity$).build() {
}
const m = {
    AssumeRoleCommand: p,
    AssumeRoleWithWebIdentityCommand: g
};
class h extends i.STSClient {
}
o.createAggregatedClient(m, h);
const S = (e)=>{
    if ("string" == typeof e?.Arn) {
        const t = e.Arn.split(":");
        if (t.length > 4 && "" !== t[4]) return t[4];
    }
}, f = async (e, t, n, i = {})=>{
    const o = "function" == typeof e ? await e() : e, r = "function" == typeof t ? await t() : t;
    let s = "";
    const a = o ?? r ?? (s = await d.stsRegionDefaultResolver(i)());
    return n?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${o} (credential provider clientConfig)`, `${r} (contextual client)`, `${s} (STS default: AWS_REGION, profile region, or us-east-1)`), a;
}, v = (e)=>"h2" === e?.metadata?.handlerProtocol, y = (e, t)=>t ? class extends e {
        constructor(e){
            super(e);
            for (const e of t)this.middlewareStack.use(e);
        }
    } : e, E = (e = {}, t)=>((e, t)=>{
        let n, i;
        return async (o, r)=>{
            if (i = o, !n) {
                const { logger: o = e?.parentClientConfig?.logger, profile: r = e?.parentClientConfig?.profile, region: s, requestHandler: a = e?.parentClientConfig?.requestHandler, credentialProviderLogger: c, userAgentAppId: l = e?.parentClientConfig?.userAgentAppId } = e, d = await f(s, e?.parentClientConfig?.region, c, {
                    logger: o,
                    profile: r
                }), u = !v(a);
                n = new t({
                    ...e,
                    userAgentAppId: l,
                    profile: r,
                    credentialDefaultProvider: ()=>async ()=>i,
                    region: d,
                    requestHandler: u ? a : void 0,
                    logger: o
                });
            }
            const { Credentials: s, AssumedRoleUser: a } = await n.send(new p(r));
            if (!s || !s.AccessKeyId || !s.SecretAccessKey) throw new Error(`Invalid response from STS.assumeRole call with role ${r.RoleArn}`);
            const c = S(a), d = {
                accessKeyId: s.AccessKeyId,
                secretAccessKey: s.SecretAccessKey,
                sessionToken: s.SessionToken,
                expiration: s.Expiration,
                ...s.CredentialScope && {
                    credentialScope: s.CredentialScope
                },
                ...c && {
                    accountId: c
                }
            };
            return l.setCredentialFeature(d, "CREDENTIALS_STS_ASSUME_ROLE", "i"), d;
        };
    })(e, y(i.STSClient, t)), P = (e = {}, t)=>((e, t)=>{
        let n;
        return async (i)=>{
            if (!n) {
                const { logger: i = e?.parentClientConfig?.logger, profile: o = e?.parentClientConfig?.profile, region: r, requestHandler: s = e?.parentClientConfig?.requestHandler, credentialProviderLogger: a, userAgentAppId: c = e?.parentClientConfig?.userAgentAppId } = e, l = await f(r, e?.parentClientConfig?.region, a, {
                    logger: i,
                    profile: o
                }), d = !v(s);
                n = new t({
                    ...e,
                    userAgentAppId: c,
                    profile: o,
                    region: l,
                    requestHandler: d ? s : void 0,
                    logger: i
                });
            }
            const { Credentials: o, AssumedRoleUser: r } = await n.send(new g(i));
            if (!o || !o.AccessKeyId || !o.SecretAccessKey) throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${i.RoleArn}`);
            const s = S(r), a = {
                accessKeyId: o.AccessKeyId,
                secretAccessKey: o.SecretAccessKey,
                sessionToken: o.SessionToken,
                expiration: o.Expiration,
                ...o.CredentialScope && {
                    credentialScope: o.CredentialScope
                },
                ...s && {
                    accountId: s
                }
            };
            return s && l.setCredentialFeature(a, "RESOLVED_ACCOUNT_ID", "T"), l.setCredentialFeature(a, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k"), a;
        };
    })(e, y(i.STSClient, t));
exports.$Command = o.Command, exports.STSServiceException = u.STSServiceException, exports.AssumeRoleCommand = p, exports.AssumeRoleWithWebIdentityCommand = g, exports.STS = h, exports.decorateDefaultCredentialProvider = (e)=>(t)=>e({
            roleAssumer: E(t),
            roleAssumerWithWebIdentity: P(t),
            ...t
        }), exports.getDefaultRoleAssumer = E, exports.getDefaultRoleAssumerWithWebIdentity = P, Object.prototype.hasOwnProperty.call(i, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: !0,
    value: i.__proto__
}), Object.keys(i).forEach(function(e) {
    "default" === e || Object.prototype.hasOwnProperty.call(exports, e) || (exports[e] = i[e]);
}), Object.prototype.hasOwnProperty.call(a, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: !0,
    value: a.__proto__
}), Object.keys(a).forEach(function(e) {
    "default" === e || Object.prototype.hasOwnProperty.call(exports, e) || (exports[e] = a[e]);
}), Object.prototype.hasOwnProperty.call(c, "__proto__") && !Object.prototype.hasOwnProperty.call(exports, "__proto__") && Object.defineProperty(exports, "__proto__", {
    enumerable: !0,
    value: c.__proto__
}), Object.keys(c).forEach(function(e) {
    "default" === e || Object.prototype.hasOwnProperty.call(exports, e) || (exports[e] = c[e]);
});
