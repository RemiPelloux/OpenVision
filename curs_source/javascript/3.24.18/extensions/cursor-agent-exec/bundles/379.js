"use strict";
((exports.id = 379),
  (exports.ids = [379]),
  (exports.modules = {
    5217: (e, r, o) => {
      o.d(r, { C: () => c });
      var t = o(76982),
        s = o(16928),
        n = o(43344);
      const c = (e) => {
        const r = (0, t.createHash)("sha1").update(e).digest("hex");
        return (0, s.join)((0, n.R)(), ".aws", "sso", "cache", `${r}.json`);
      };
    },
    29846: (e, r, o) => {
      o.d(r, { Z: () => n });
      var t = o(35666),
        s = o(65600);
      const n = {
        getFileRecord: () => s.Jj,
        interceptFile(e, r) {
          s.Jj[e] = Promise.resolve(r);
        },
        getTokenRecord: () => t.a,
        interceptToken(e, r) {
          t.a[e] = r;
        },
      };
    },
    35666: (e, r, o) => {
      o.d(r, { a: () => n, v: () => c });
      var t = o(91943),
        s = o(5217);
      const n = {},
        c = async (e) => {
          if (n[e]) return n[e];
          const r = (0, s.C)(e),
            o = await (0, t.readFile)(r, "utf8");
          return JSON.parse(o);
        };
    },
    93760: (e, r, o) => {
      (o.r(r), o.d(r, { fromProcess: () => p }));
      var t = o(98459),
        s = o(50800),
        n = o(61178),
        c = o(29846),
        i = o(31421),
        a = o(57975),
        d = o(97464);
      const l = async (e, r, o) => {
          const t = r[e];
          if (!r[e])
            throw new n.C(`Profile ${e} could not be found in shared credentials file.`, {
              logger: o,
            });
          {
            const s = t.credential_process;
            if (void 0 === s)
              throw new n.C(`Profile ${e} did not contain credential_process.`, { logger: o });
            {
              const t = (0, a.promisify)(c.Z?.getTokenRecord?.().exec ?? i.exec);
              try {
                const { stdout: o } = await t(s);
                let n;
                try {
                  n = JSON.parse(o.trim());
                } catch {
                  throw Error(`Profile ${e} credential_process returned invalid JSON.`);
                }
                return ((e, r, o) => {
                  if (1 !== r.Version)
                    throw Error(`Profile ${e} credential_process did not return Version 1.`);
                  if (void 0 === r.AccessKeyId || void 0 === r.SecretAccessKey)
                    throw Error(`Profile ${e} credential_process returned invalid credentials.`);
                  if (r.Expiration) {
                    const o = new Date();
                    if (new Date(r.Expiration) < o)
                      throw Error(`Profile ${e} credential_process returned expired credentials.`);
                  }
                  let t = r.AccountId;
                  !t && o?.[e]?.aws_account_id && (t = o[e].aws_account_id);
                  const s = {
                    accessKeyId: r.AccessKeyId,
                    secretAccessKey: r.SecretAccessKey,
                    ...(r.SessionToken && { sessionToken: r.SessionToken }),
                    ...(r.Expiration && { expiration: new Date(r.Expiration) }),
                    ...(r.CredentialScope && { credentialScope: r.CredentialScope }),
                    ...(t && { accountId: t }),
                  };
                  return ((0, d.setCredentialFeature)(s, "CREDENTIALS_PROCESS", "w"), s);
                })(e, n, r);
              } catch (e) {
                throw new n.C(e.message, { logger: o });
              }
            }
          }
        },
        p =
          (e = {}) =>
          async ({ callerClientConfig: r } = {}) => {
            e.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
            const o = await (0, t.Y)(e);
            return l((0, s.Bz)({ profile: e.profile ?? r?.profile }), o, e.logger);
          };
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-exec/dist/379.js.map
