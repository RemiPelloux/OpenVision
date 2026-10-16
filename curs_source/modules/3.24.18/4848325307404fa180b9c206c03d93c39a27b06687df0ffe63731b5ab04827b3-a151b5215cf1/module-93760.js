require.r(exports), require.d(exports, {
    fromProcess: ()=>f
});
var s = require("./module-98459.js"), n = require(50800), o = require(61178), i = require("./module-29846.js"), c = require(31421), a = require(57975), d = require(97464);
const l = async (e, r, t)=>{
    const s = r[e];
    if (!r[e]) throw new o.C(`Profile ${e} could not be found in shared credentials file.`, {
        logger: t
    });
    {
        const n = s.credential_process;
        if (void 0 === n) throw new o.C(`Profile ${e} did not contain credential_process.`, {
            logger: t
        });
        {
            const s = (0, a.promisify)(i.Z?.getTokenRecord?.().exec ?? c.exec);
            try {
                const { stdout: t } = await s(n);
                let o;
                try {
                    o = JSON.parse(t.trim());
                } catch  {
                    throw Error(`Profile ${e} credential_process returned invalid JSON.`);
                }
                return ((e, r, t)=>{
                    if (1 !== r.Version) throw Error(`Profile ${e} credential_process did not return Version 1.`);
                    if (void 0 === r.AccessKeyId || void 0 === r.SecretAccessKey) throw Error(`Profile ${e} credential_process returned invalid credentials.`);
                    if (r.Expiration) {
                        const t = new Date;
                        if (new Date(r.Expiration) < t) throw Error(`Profile ${e} credential_process returned expired credentials.`);
                    }
                    let s = r.AccountId;
                    !s && t?.[e]?.aws_account_id && (s = t[e].aws_account_id);
                    const n = {
                        accessKeyId: r.AccessKeyId,
                        secretAccessKey: r.SecretAccessKey,
                        ...r.SessionToken && {
                            sessionToken: r.SessionToken
                        },
                        ...r.Expiration && {
                            expiration: new Date(r.Expiration)
                        },
                        ...r.CredentialScope && {
                            credentialScope: r.CredentialScope
                        },
                        ...s && {
                            accountId: s
                        }
                    };
                    return (0, d.setCredentialFeature)(n, "CREDENTIALS_PROCESS", "w"), n;
                })(e, o, r);
            } catch (e) {
                throw new o.C(e.message, {
                    logger: t
                });
            }
        }
    }
}, f = (e = {})=>async ({ callerClientConfig: r } = {})=>{
        e.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
        const t = await (0, s.Y)(e);
        return l((0, n.Bz)({
            profile: e.profile ?? r?.profile
        }), t, e.logger);
    };
