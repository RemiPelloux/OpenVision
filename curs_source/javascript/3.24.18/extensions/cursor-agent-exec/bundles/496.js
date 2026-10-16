"use strict";
((exports.id = 496),
  (exports.ids = [115, 496]),
  (exports.modules = {
    5217: (e, s, o) => {
      o.d(s, { C: () => r });
      var t = o(76982),
        n = o(16928),
        i = o(43344);
      const r = (e) => {
        const s = (0, t.createHash)("sha1").update(e).digest("hex");
        return (0, n.join)((0, i.R)(), ".aws", "sso", "cache", `${s}.json`);
      };
    },
    8041: (e, s, o) => {
      o.d(s, { A: () => a });
      var t = o(65835),
        n = o(42757);
      const i = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/,
        r = ["__proto__", "profile __proto__"],
        a = (e) => {
          const s = {};
          let o, a;
          for (const c of e.split(/\r?\n/)) {
            const e = c.split(/(^|\s)[;#]/)[0].trim();
            if ("[" === e[0] && "]" === e[e.length - 1]) {
              ((o = void 0), (a = void 0));
              const s = e.substring(1, e.length - 1),
                c = i.exec(s);
              if (c) {
                const [, e, , s] = c;
                Object.values(t.I).includes(e) && (o = [e, s].join(n.Q));
              } else o = s;
              if (r.includes(s)) throw new Error(`Found invalid profile name "${s}"`);
            } else if (o) {
              const t = e.indexOf("=");
              if (![0, -1].includes(t)) {
                const [i, r] = [e.substring(0, t).trim(), e.substring(t + 1).trim()];
                if ("" === r) a = i;
                else {
                  (a && c.trimStart() === c && (a = void 0), (s[o] = s[o] || {}));
                  const e = a ? [a, i].join(n.Q) : i;
                  s[o][e] = r;
                }
              }
            }
          }
          return s;
        };
    },
    35666: (e, s, o) => {
      o.d(s, { a: () => i, v: () => r });
      var t = o(91943),
        n = o(5217);
      const i = {},
        r = async (e) => {
          if (i[e]) return i[e];
          const s = (0, n.C)(e),
            o = await (0, t.readFile)(s, "utf8");
          return JSON.parse(o);
        };
    },
    42757: (e, s, o) => {
      o.d(s, { Q: () => t });
      const t = ".";
    },
    43344: (e, s, o) => {
      o.d(s, { R: () => r });
      var t = o(70857),
        n = o(16928);
      const i = {},
        r = () => {
          const { HOME: e, USERPROFILE: s, HOMEPATH: o, HOMEDRIVE: r = `C:${n.sep}` } = process.env;
          if (e) return e;
          if (s) return s;
          if (o) return `${r}${o}`;
          const a = process && process.geteuid ? `${process.geteuid()}` : "DEFAULT";
          return (i[a] || (i[a] = (0, t.homedir)()), i[a]);
        };
    },
    53835: (e, s, o) => {
      o.d(s, { g: () => i });
      var t = o(16928),
        n = o(43344);
      const i = () => process.env.AWS_CONFIG_FILE || (0, t.join)((0, n.R)(), ".aws", "config");
    },
    65600: (e, s, o) => {
      o.d(s, { Jj: () => i, TA: () => r });
      var t = o(51455);
      const n = {},
        i = {},
        r = (e, s) =>
          void 0 !== i[e]
            ? i[e]
            : ((n[e] && !s?.ignoreCache) || (n[e] = (0, t.readFile)(e, "utf8")), n[e]);
    },
    68395: (e, s, o) => {
      o.d(s, { p: () => p });
      var t = o(16928),
        n = o(65835),
        i = o(42757);
      const r = (e) =>
        Object.entries(e)
          .filter(([e]) => {
            const s = e.indexOf(i.Q);
            return -1 !== s && Object.values(n.I).includes(e.substring(0, s));
          })
          .reduce(
            (e, [s, o]) => {
              const t = s.indexOf(i.Q);
              return ((e[s.substring(0, t) === n.I.PROFILE ? s.substring(t + 1) : s] = o), e);
            },
            { ...(e.default && { default: e.default }) },
          );
      var a = o(53835),
        c = o(43344);
      const l = () =>
        process.env.AWS_SHARED_CREDENTIALS_FILE || (0, t.join)((0, c.R)(), ".aws", "credentials");
      var g = o(8041),
        f = o(65600);
      const d = () => ({}),
        p = async (e = {}) => {
          const { filepath: s = l(), configFilepath: o = (0, a.g)() } = e,
            n = (0, c.R)();
          let i = s;
          s.startsWith("~/") && (i = (0, t.join)(n, s.slice(2)));
          let p = o;
          o.startsWith("~/") && (p = (0, t.join)(n, o.slice(2)));
          const u = await Promise.all([
            (0, f.TA)(p, { ignoreCache: e.ignoreCache }).then(g.A).then(r).catch(d),
            (0, f.TA)(i, { ignoreCache: e.ignoreCache }).then(g.A).catch(d),
          ]);
          return { configFile: u[0], credentialsFile: u[1] };
        };
    },
    87496: (e, s, o) => {
      o.d(s, { fromSSO: () => R });
      var t = o(61178),
        n = o(50800),
        i = o(98459),
        r = o(53835),
        a = o(65835),
        c = o(42757);
      const l = (e) =>
        Object.entries(e)
          .filter(([e]) => e.startsWith(a.I.SSO_SESSION + c.Q))
          .reduce((e, [s, o]) => ({ ...e, [s.substring(s.indexOf(c.Q) + 1)]: o }), {});
      var g = o(8041),
        f = o(65600);
      const d = () => ({}),
        p = async (e = {}) =>
          (0, f.TA)(e.configFilepath ?? (0, r.g)())
            .then(g.A)
            .then(l)
            .catch(d);
      var u = o(97464),
        h = o(75504);
      class w extends h.m {
        name = "TokenProviderError";
        constructor(e, s = !0) {
          (super(e, s), Object.setPrototypeOf(this, w.prototype));
        }
      }
      var C = o(35666);
      const S = "To refresh this SSO session run 'aws sso login' with the corresponding profile.",
        _ = async (e, s, t = {}, n) => {
          const { CreateTokenCommand: i } = await Promise.all([o.e(66), o.e(578)]).then(
              o.t.bind(o, 69654, 23),
            ),
            r = await (async (e, s = {}, t) => {
              const { SSOOIDCClient: n } = await Promise.all([o.e(66), o.e(578)]).then(
                  o.t.bind(o, 69654, 23),
                ),
                i = (e) => s.clientConfig?.[e] ?? s.parentClientConfig?.[e] ?? t?.[e];
              return new n(
                Object.assign({}, s.clientConfig ?? {}, {
                  region: e ?? s.clientConfig?.region,
                  logger: i("logger"),
                  userAgentAppId: i("userAgentAppId"),
                }),
              );
            })(s, t, n);
          return r.send(
            new i({
              clientId: e.clientId,
              clientSecret: e.clientSecret,
              refreshToken: e.refreshToken,
              grantType: "refresh_token",
            }),
          );
        },
        m = (e) => {
          if (e.expiration && e.expiration.getTime() < Date.now())
            throw new w(`Token is expired. ${S}`, !1);
        },
        O = (e, s, o = !1) => {
          if (void 0 === s)
            throw new w(
              `Value not present for '${e}' in SSO Token${o ? ". Cannot refresh" : ""}. ${S}`,
              !1,
            );
        };
      var T = o(5217),
        A = o(73024);
      const { writeFile: k } = A.promises,
        y = new Date(0),
        I =
          (e = {}) =>
          async ({ callerClientConfig: s } = {}) => {
            e.logger?.debug("@aws-sdk/token-providers - fromSso");
            const o = await (0, i.Y)(e),
              t = (0, n.Bz)({ profile: e.profile ?? s?.profile }),
              r = o[t];
            if (!r)
              throw new w(`Profile '${t}' could not be found in shared credentials file.`, !1);
            if (!r.sso_session)
              throw new w(`Profile '${t}' is missing required property 'sso_session'.`);
            const a = r.sso_session,
              c = (await p(e))[a];
            if (!c)
              throw new w(`Sso session '${a}' could not be found in shared credentials file.`, !1);
            for (const e of ["sso_start_url", "sso_region"])
              if (!c[e]) throw new w(`Sso session '${a}' is missing required property '${e}'.`, !1);
            c.sso_start_url;
            const l = c.sso_region;
            let g;
            try {
              g = await (0, C.v)(a);
            } catch (e) {
              throw new w(
                `The SSO session token associated with profile=${t} was not found or is invalid. ${S}`,
                !1,
              );
            }
            (O("accessToken", g.accessToken), O("expiresAt", g.expiresAt));
            const { accessToken: f, expiresAt: d } = g,
              u = { token: f, expiration: new Date(d) };
            if (u.expiration.getTime() - Date.now() > 3e5) return u;
            if (Date.now() - y.getTime() < 3e4) return (m(u), u);
            (O("clientId", g.clientId, !0),
              O("clientSecret", g.clientSecret, !0),
              O("refreshToken", g.refreshToken, !0));
            try {
              y.setTime(Date.now());
              const o = await _(g, l, e, s);
              (O("accessToken", o.accessToken), O("expiresIn", o.expiresIn));
              const t = new Date(Date.now() + 1e3 * o.expiresIn);
              try {
                await ((e, s) => {
                  const o = (0, T.C)(e),
                    t = JSON.stringify(s, null, 2);
                  return k(o, t);
                })(a, {
                  ...g,
                  accessToken: o.accessToken,
                  expiresAt: t.toISOString(),
                  refreshToken: o.refreshToken,
                });
              } catch (e) {}
              return { token: o.accessToken, expiration: t };
            } catch (e) {
              return (m(u), u);
            }
          },
        v = !1,
        x = async ({
          ssoStartUrl: e,
          ssoSession: s,
          ssoAccountId: n,
          ssoRegion: i,
          ssoRoleName: r,
          ssoClient: a,
          clientConfig: c,
          parentClientConfig: l,
          callerClientConfig: g,
          profile: f,
          filepath: d,
          configFilepath: p,
          ignoreCache: h,
          logger: w,
        }) => {
          let S;
          const _ = "To refresh this SSO session run aws sso login with the corresponding profile.";
          if (s)
            try {
              const e = await I({ profile: f, filepath: d, configFilepath: p, ignoreCache: h })();
              S = { accessToken: e.token, expiresAt: new Date(e.expiration).toISOString() };
            } catch (e) {
              throw new t.C(e.message, { tryNextLink: v, logger: w });
            }
          else
            try {
              S = await (0, C.v)(e);
            } catch (e) {
              throw new t.C(`The SSO session associated with this profile is invalid. ${_}`, {
                tryNextLink: v,
                logger: w,
              });
            }
          if (new Date(S.expiresAt).getTime() - Date.now() <= 0)
            throw new t.C(`The SSO session associated with this profile has expired. ${_}`, {
              tryNextLink: v,
              logger: w,
            });
          const { accessToken: m } = S,
            { SSOClient: O, GetRoleCredentialsCommand: T } = await Promise.all([
              o.e(66),
              o.e(378),
            ]).then(o.bind(o, 27846)),
            A =
              a ||
              new O(
                Object.assign({}, c ?? {}, {
                  logger: c?.logger ?? g?.logger ?? l?.logger,
                  region: c?.region ?? i,
                  userAgentAppId: c?.userAgentAppId ?? g?.userAgentAppId ?? l?.userAgentAppId,
                }),
              );
          let k;
          try {
            k = await A.send(new T({ accountId: n, roleName: r, accessToken: m }));
          } catch (e) {
            throw new t.C(e, { tryNextLink: v, logger: w });
          }
          const {
            roleCredentials: {
              accessKeyId: y,
              secretAccessKey: x,
              sessionToken: R,
              expiration: $,
              credentialScope: b,
              accountId: F,
            } = {},
          } = k;
          if (!(y && x && R && $))
            throw new t.C("SSO returns an invalid temporary credential.", {
              tryNextLink: v,
              logger: w,
            });
          const N = {
            accessKeyId: y,
            secretAccessKey: x,
            sessionToken: R,
            expiration: new Date($),
            ...(b && { credentialScope: b }),
            ...(F && { accountId: F }),
          };
          return (
            s
              ? (0, u.setCredentialFeature)(N, "CREDENTIALS_SSO", "s")
              : (0, u.setCredentialFeature)(N, "CREDENTIALS_SSO_LEGACY", "u"),
            N
          );
        },
        R =
          (e = {}) =>
          async ({ callerClientConfig: s } = {}) => {
            e.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
            const {
                ssoStartUrl: o,
                ssoAccountId: r,
                ssoRegion: a,
                ssoRoleName: c,
                ssoSession: l,
              } = e,
              { ssoClient: g } = e,
              f = (0, n.Bz)({ profile: e.profile ?? s?.profile });
            if (o || r || a || c || l) {
              if (o && r && a && c)
                return x({
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
                  logger: e.logger,
                });
              throw new t.C(
                'Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"',
                { tryNextLink: !1, logger: e.logger },
              );
            }
            {
              const s = (await (0, i.Y)(e))[f];
              if (!s) throw new t.C(`Profile ${f} was not found.`, { logger: e.logger });
              if (
                !(d = s) ||
                ("string" != typeof d.sso_start_url &&
                  "string" != typeof d.sso_account_id &&
                  "string" != typeof d.sso_session &&
                  "string" != typeof d.sso_region &&
                  "string" != typeof d.sso_role_name)
              )
                throw new t.C(`Profile ${f} is not configured with SSO credentials.`, {
                  logger: e.logger,
                });
              if (s?.sso_session) {
                const n = (await p(e))[s.sso_session],
                  i = ` configurations in profile ${f} and sso-session ${s.sso_session}`;
                if (a && a !== n.sso_region)
                  throw new t.C("Conflicting SSO region" + i, {
                    tryNextLink: !1,
                    logger: e.logger,
                  });
                if (o && o !== n.sso_start_url)
                  throw new t.C("Conflicting SSO start_url" + i, {
                    tryNextLink: !1,
                    logger: e.logger,
                  });
                ((s.sso_region = n.sso_region), (s.sso_start_url = n.sso_start_url));
              }
              const {
                sso_start_url: n,
                sso_account_id: r,
                sso_region: c,
                sso_role_name: l,
                sso_session: u,
              } = ((e, s) => {
                const { sso_start_url: o, sso_account_id: n, sso_region: i, sso_role_name: r } = e;
                if (!(o && n && i && r))
                  throw new t.C(
                    `Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(e).join(", ")}\nReference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`,
                    { tryNextLink: !1, logger: s },
                  );
                return e;
              })(s, e.logger);
              return x({
                ssoStartUrl: n,
                ssoSession: u,
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
                logger: e.logger,
              });
            }
            var d;
          };
    },
    98459: (e, s, o) => {
      o.d(s, { Y: () => n });
      var t = o(68395);
      const n = async (e) => {
        const s = await (0, t.p)(e);
        return ((...e) => {
          const s = {};
          for (const o of e)
            for (const [e, t] of Object.entries(o))
              void 0 !== s[e] ? Object.assign(s[e], t) : (s[e] = t);
          return s;
        })(s.configFile, s.credentialsFile);
      };
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-exec/dist/496.js.map
