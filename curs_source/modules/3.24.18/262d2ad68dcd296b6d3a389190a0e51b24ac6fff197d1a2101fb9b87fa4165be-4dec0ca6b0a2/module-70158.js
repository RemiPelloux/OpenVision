"use strict";
require.d(exports, {
    pi: ()=>i,
    sF: ()=>a,
    yG: ()=>s
});
var n = require("./module-97464.js"), o = require("./module-61178.js");
const s = "AWS_ACCESS_KEY_ID", i = "AWS_SECRET_ACCESS_KEY", a = (e)=>async ()=>{
        e?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
        const t = process.env[s], r = process.env[i], a = process.env.AWS_SESSION_TOKEN, l = process.env.AWS_CREDENTIAL_EXPIRATION, c = process.env.AWS_CREDENTIAL_SCOPE, u = process.env.AWS_ACCOUNT_ID;
        if (t && r) {
            const e = {
                accessKeyId: t,
                secretAccessKey: r,
                ...a && {
                    sessionToken: a
                },
                ...l && {
                    expiration: new Date(l)
                },
                ...c && {
                    credentialScope: c
                },
                ...u && {
                    accountId: u
                }
            };
            return (0, n.setCredentialFeature)(e, "CREDENTIALS_ENV_VARS", "g"), e;
        }
        throw new o.C("Unable to find environment variable credentials.", {
            logger: e?.logger
        });
    };
