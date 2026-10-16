require.r(exports), require.d(exports, {
    fromTokenFile: ()=>a,
    fromWebToken: ()=>c
});
var o = require(97464), t = require(61178), i = require("./module-29846.js"), s = require(73024);
const c = (e)=>async (r)=>{
        e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
        const { roleArn: o, roleSessionName: t, webIdentityToken: i, providerId: s, policyArns: c, policy: d, durationSeconds: a } = e;
        let { roleAssumerWithWebIdentity: l } = e;
        if (!l) {
            const { getDefaultRoleAssumerWithWebIdentity: o } = await Promise.all([
                require.e(66),
                require.e(163),
                require.e(55)
            ]).then(require.t.bind(require, 37163, 23));
            l = o({
                ...e.clientConfig,
                credentialProviderLogger: e.logger,
                parentClientConfig: {
                    ...r?.callerClientConfig,
                    ...e.parentClientConfig
                }
            }, e.clientPlugins);
        }
        return l({
            RoleArn: o,
            RoleSessionName: t ?? `aws-sdk-js-session-${Date.now()}`,
            WebIdentityToken: i,
            ProviderId: s,
            PolicyArns: c,
            Policy: d,
            DurationSeconds: a
        });
    }, d = "AWS_WEB_IDENTITY_TOKEN_FILE", a = (e = {})=>async (r)=>{
        e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
        const n = e?.webIdentityTokenFile ?? process.env[d], a = e?.roleArn ?? process.env.AWS_ROLE_ARN, l = e?.roleSessionName ?? process.env.AWS_ROLE_SESSION_NAME;
        if (!n || !a) throw new t.C("Web identity configuration not specified", {
            logger: e.logger
        });
        const g = await c({
            ...e,
            webIdentityToken: i.Z?.getTokenRecord?.()[n] ?? (0, s.readFileSync)(n, {
                encoding: "ascii"
            }),
            roleArn: a,
            roleSessionName: l
        })(r);
        return n === process.env[d] && (0, o.setCredentialFeature)(g, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h"), g;
    };
