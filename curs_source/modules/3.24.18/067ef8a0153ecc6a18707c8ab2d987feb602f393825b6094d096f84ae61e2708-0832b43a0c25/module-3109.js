require.r(exports), require.d(exports, {
    fromTokenFile: ()=>l,
    fromWebToken: ()=>a
});
var r = require(97464), t = require(61178), i = require("./module-29846.js"), s = require(73024);
const a = (e)=>async (n)=>{
        e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
        const { roleArn: r, roleSessionName: t, webIdentityToken: i, providerId: s, policyArns: a, policy: d, durationSeconds: l } = e;
        let { roleAssumerWithWebIdentity: c } = e;
        if (!c) {
            const { getDefaultRoleAssumerWithWebIdentity: r } = await Promise.all([
                require.e(66),
                require.e(163),
                require.e(55)
            ]).then(require.t.bind(require, 37163, 23));
            c = r({
                ...e.clientConfig,
                credentialProviderLogger: e.logger,
                parentClientConfig: {
                    ...n?.callerClientConfig,
                    ...e.parentClientConfig
                }
            }, e.clientPlugins);
        }
        return c({
            RoleArn: r,
            RoleSessionName: t ?? `aws-sdk-js-session-${Date.now()}`,
            WebIdentityToken: i,
            ProviderId: s,
            PolicyArns: a,
            Policy: d,
            DurationSeconds: l
        });
    }, d = "AWS_WEB_IDENTITY_TOKEN_FILE", l = (e = {})=>async (n)=>{
        e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
        const o = e?.webIdentityTokenFile ?? process.env[d], l = e?.roleArn ?? process.env.AWS_ROLE_ARN, c = e?.roleSessionName ?? process.env.AWS_ROLE_SESSION_NAME;
        if (!o || !l) throw new t.C("Web identity configuration not specified", {
            logger: e.logger
        });
        const g = await a({
            ...e,
            webIdentityToken: i.Z?.getTokenRecord?.()[o] ?? (0, s.readFileSync)(o, {
                encoding: "ascii"
            }),
            roleArn: l,
            roleSessionName: c
        })(n);
        return o === process.env[d] && (0, r.setCredentialFeature)(g, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h"), g;
    };
