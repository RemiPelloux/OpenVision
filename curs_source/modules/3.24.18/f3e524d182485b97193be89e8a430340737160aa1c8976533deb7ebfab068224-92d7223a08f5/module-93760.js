require.r(exports), require.d(exports, {
    fromProcess: ()=>p
});
var t = require(98459), s = require(50800), n = require(61178), c = require("./module-29846.js"), i = require(31421), a = require(57975), d = require(97464);
const l = async (e, r, o)=>{
    const t = r[e];
    if (!r[e]) throw new n.C(`Profile ${e} could not be found in shared credentials file.`, {
        logger: o
    });
    {
        const s = t.credential_process;
        if (void 0 === s) throw new n.C(`Profile ${e} did not contain credential_process.`, {
            logger: o
        });
        {
            const t = (0, a.promisify)(c.Z?.getTokenRecord?.().exec ?? i.exec);
            try {
                const { stdout: o } = await t(s);
                let n;
                try {
                    n = JSON.parse(o.trim());
                } catch  {
                    throw Error(`Profile ${e} credential_process returned invalid JSON.`);
                }
                return ((e, r, o)=>{
                    if (1 !== r.Version) throw Error(`Profile ${e} credential_process did not return Version 1.`);
                    if (void 0 === r.AccessKeyId || void 0 === r.SecretAccessKey) throw Error(`Profile ${e} credential_process returned invalid credentials.`);
                    if (r.Expiration) {
                        const o = new Date;
                        if (new Date(r.Expiration) < o) throw Error(`Profile ${e} credential_process returned expired credentials.`);
                    }
                    let t = r.AccountId;
                    !t && o?.[e]?.aws_account_id && (t = o[e].aws_account_id);
                    const s = {
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
                        ...t && {
                            accountId: t
                        }
                    };
                    return (0, d.setCredentialFeature)(s, "CREDENTIALS_PROCESS", "w"), s;
                })(e, n, r);
            } catch (e) {
                throw new n.C(e.message, {
                    logger: o
                });
            }
        }
    }
}, p = (e = {})=>async ({ callerClientConfig: r } = {})=>{
        e.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
        const o = await (0, t.Y)(e);
        return l((0, s.Bz)({
            profile: e.profile ?? r?.profile
        }), o, e.logger);
    };
