"use strict";
((exports.id = 760),
  (exports.ids = [379, 760]),
  (exports.modules = {
    5217: (e, r, t) => {
      t.d(r, { C: () => i });
      var s = t(76982),
        n = t(16928),
        o = t(43344);
      const i = (e) => {
        const r = (0, s.createHash)("sha1").update(e).digest("hex");
        return (0, n.join)((0, o.R)(), ".aws", "sso", "cache", `${r}.json`);
      };
    },
    8041: (e, r, t) => {
      t.d(r, { A: () => c });
      var s = t(65835),
        n = t(42757);
      const o = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/,
        i = ["__proto__", "profile __proto__"],
        c = (e) => {
          const r = {};
          let t, c;
          for (const a of e.split(/\r?\n/)) {
            const e = a.split(/(^|\s)[;#]/)[0].trim();
            if ("[" === e[0] && "]" === e[e.length - 1]) {
              ((t = void 0), (c = void 0));
              const r = e.substring(1, e.length - 1),
                a = o.exec(r);
              if (a) {
                const [, e, , r] = a;
                Object.values(s.I).includes(e) && (t = [e, r].join(n.Q));
              } else t = r;
              if (i.includes(r)) throw new Error(`Found invalid profile name "${r}"`);
            } else if (t) {
              const s = e.indexOf("=");
              if (![0, -1].includes(s)) {
                const [o, i] = [e.substring(0, s).trim(), e.substring(s + 1).trim()];
                if ("" === i) c = o;
                else {
                  (c && a.trimStart() === a && (c = void 0), (r[t] = r[t] || {}));
                  const e = c ? [c, o].join(n.Q) : o;
                  r[t][e] = i;
                }
              }
            }
          }
          return r;
        };
    },
    29846: (e, r, t) => {
      t.d(r, { Z: () => o });
      var s = t(35666),
        n = t(65600);
      const o = {
        getFileRecord: () => n.Jj,
        interceptFile(e, r) {
          n.Jj[e] = Promise.resolve(r);
        },
        getTokenRecord: () => s.a,
        interceptToken(e, r) {
          s.a[e] = r;
        },
      };
    },
    35666: (e, r, t) => {
      t.d(r, { a: () => o, v: () => i });
      var s = t(91943),
        n = t(5217);
      const o = {},
        i = async (e) => {
          if (o[e]) return o[e];
          const r = (0, n.C)(e),
            t = await (0, s.readFile)(r, "utf8");
          return JSON.parse(t);
        };
    },
    42757: (e, r, t) => {
      t.d(r, { Q: () => s });
      const s = ".";
    },
    43344: (e, r, t) => {
      t.d(r, { R: () => i });
      var s = t(70857),
        n = t(16928);
      const o = {},
        i = () => {
          const { HOME: e, USERPROFILE: r, HOMEPATH: t, HOMEDRIVE: i = `C:${n.sep}` } = process.env;
          if (e) return e;
          if (r) return r;
          if (t) return `${i}${t}`;
          const c = process && process.geteuid ? `${process.geteuid()}` : "DEFAULT";
          return (o[c] || (o[c] = (0, s.homedir)()), o[c]);
        };
    },
    53835: (e, r, t) => {
      t.d(r, { g: () => o });
      var s = t(16928),
        n = t(43344);
      const o = () => process.env.AWS_CONFIG_FILE || (0, s.join)((0, n.R)(), ".aws", "config");
    },
    65600: (e, r, t) => {
      t.d(r, { Jj: () => o, TA: () => i });
      var s = t(51455);
      const n = {},
        o = {},
        i = (e, r) =>
          void 0 !== o[e]
            ? o[e]
            : ((n[e] && !r?.ignoreCache) || (n[e] = (0, s.readFile)(e, "utf8")), n[e]);
    },
    68395: (e, r, t) => {
      t.d(r, { p: () => p });
      var s = t(16928),
        n = t(65835),
        o = t(42757);
      const i = (e) =>
        Object.entries(e)
          .filter(([e]) => {
            const r = e.indexOf(o.Q);
            return -1 !== r && Object.values(n.I).includes(e.substring(0, r));
          })
          .reduce(
            (e, [r, t]) => {
              const s = r.indexOf(o.Q);
              return ((e[r.substring(0, s) === n.I.PROFILE ? r.substring(s + 1) : r] = t), e);
            },
            { ...(e.default && { default: e.default }) },
          );
      var c = t(53835),
        a = t(43344);
      const d = () =>
        process.env.AWS_SHARED_CREDENTIALS_FILE || (0, s.join)((0, a.R)(), ".aws", "credentials");
      var l = t(8041),
        f = t(65600);
      const u = () => ({}),
        p = async (e = {}) => {
          const { filepath: r = d(), configFilepath: t = (0, c.g)() } = e,
            n = (0, a.R)();
          let o = r;
          r.startsWith("~/") && (o = (0, s.join)(n, r.slice(2)));
          let p = t;
          t.startsWith("~/") && (p = (0, s.join)(n, t.slice(2)));
          const g = await Promise.all([
            (0, f.TA)(p, { ignoreCache: e.ignoreCache }).then(l.A).then(i).catch(u),
            (0, f.TA)(o, { ignoreCache: e.ignoreCache }).then(l.A).catch(u),
          ]);
          return { configFile: g[0], credentialsFile: g[1] };
        };
    },
    93760: (e, r, t) => {
      (t.r(r), t.d(r, { fromProcess: () => f }));
      var s = t(98459),
        n = t(50800),
        o = t(61178),
        i = t(29846),
        c = t(31421),
        a = t(57975),
        d = t(97464);
      const l = async (e, r, t) => {
          const s = r[e];
          if (!r[e])
            throw new o.C(`Profile ${e} could not be found in shared credentials file.`, {
              logger: t,
            });
          {
            const n = s.credential_process;
            if (void 0 === n)
              throw new o.C(`Profile ${e} did not contain credential_process.`, { logger: t });
            {
              const s = (0, a.promisify)(i.Z?.getTokenRecord?.().exec ?? c.exec);
              try {
                const { stdout: t } = await s(n);
                let o;
                try {
                  o = JSON.parse(t.trim());
                } catch {
                  throw Error(`Profile ${e} credential_process returned invalid JSON.`);
                }
                return ((e, r, t) => {
                  if (1 !== r.Version)
                    throw Error(`Profile ${e} credential_process did not return Version 1.`);
                  if (void 0 === r.AccessKeyId || void 0 === r.SecretAccessKey)
                    throw Error(`Profile ${e} credential_process returned invalid credentials.`);
                  if (r.Expiration) {
                    const t = new Date();
                    if (new Date(r.Expiration) < t)
                      throw Error(`Profile ${e} credential_process returned expired credentials.`);
                  }
                  let s = r.AccountId;
                  !s && t?.[e]?.aws_account_id && (s = t[e].aws_account_id);
                  const n = {
                    accessKeyId: r.AccessKeyId,
                    secretAccessKey: r.SecretAccessKey,
                    ...(r.SessionToken && { sessionToken: r.SessionToken }),
                    ...(r.Expiration && { expiration: new Date(r.Expiration) }),
                    ...(r.CredentialScope && { credentialScope: r.CredentialScope }),
                    ...(s && { accountId: s }),
                  };
                  return ((0, d.setCredentialFeature)(n, "CREDENTIALS_PROCESS", "w"), n);
                })(e, o, r);
              } catch (e) {
                throw new o.C(e.message, { logger: t });
              }
            }
          }
        },
        f =
          (e = {}) =>
          async ({ callerClientConfig: r } = {}) => {
            e.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
            const t = await (0, s.Y)(e);
            return l((0, n.Bz)({ profile: e.profile ?? r?.profile }), t, e.logger);
          };
    },
    98459: (e, r, t) => {
      t.d(r, { Y: () => n });
      var s = t(68395);
      const n = async (e) => {
        const r = await (0, s.p)(e);
        return ((...e) => {
          const r = {};
          for (const t of e)
            for (const [e, s] of Object.entries(t))
              void 0 !== r[e] ? Object.assign(r[e], s) : (r[e] = s);
          return r;
        })(r.configFile, r.credentialsFile);
      };
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-exec/dist/760.js.map
