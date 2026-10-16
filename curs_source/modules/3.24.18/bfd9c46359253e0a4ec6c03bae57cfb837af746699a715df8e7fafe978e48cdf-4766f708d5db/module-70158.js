"use strict";
require.d(exports, {
    pi: ()=>i,
    sF: ()=>a,
    yG: ()=>o
});
var n = require("./module-97464.js"), s = require("./module-61178.js");
const o = "AWS_ACCESS_KEY_ID", i = "AWS_SECRET_ACCESS_KEY", a = (e)=>async ()=>{
        e?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
        const t = process.env[o], r = process.env[i], a = process.env.AWS_SESSION_TOKEN, c = process.env.AWS_CREDENTIAL_EXPIRATION, l = process.env.AWS_CREDENTIAL_SCOPE, u = process.env.AWS_ACCOUNT_ID;
        if (t && r) {
            const e = {
                accessKeyId: t,
                secretAccessKey: r,
                ...a && {
                    sessionToken: a
                },
                ...c && {
                    expiration: new Date(c)
                },
                ...l && {
                    credentialScope: l
                },
                ...u && {
                    accountId: u
                }
            };
            return (0, n.setCredentialFeature)(e, "CREDENTIALS_ENV_VARS", "g"), e;
        }
        throw new s.C("Unable to find environment variable credentials.", {
            logger: e?.logger
        });
    };
