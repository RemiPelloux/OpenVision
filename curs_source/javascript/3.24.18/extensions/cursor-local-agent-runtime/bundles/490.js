"use strict";
((exports.id = 490),
  (exports.ids = [109, 490]),
  (exports.modules = {
    3109: (e, r, n) => {
      (n.r(r), n.d(r, { fromTokenFile: () => a, fromWebToken: () => c }));
      var o = n(97464),
        t = n(61178),
        i = n(29846),
        s = n(73024);
      const c = (e) => async (r) => {
          e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
          const {
            roleArn: o,
            roleSessionName: t,
            webIdentityToken: i,
            providerId: s,
            policyArns: c,
            policy: d,
            durationSeconds: a,
          } = e;
          let { roleAssumerWithWebIdentity: l } = e;
          if (!l) {
            const { getDefaultRoleAssumerWithWebIdentity: o } = await Promise.all([
              n.e(66),
              n.e(163),
              n.e(55),
            ]).then(n.t.bind(n, 37163, 23));
            l = o(
              {
                ...e.clientConfig,
                credentialProviderLogger: e.logger,
                parentClientConfig: { ...r?.callerClientConfig, ...e.parentClientConfig },
              },
              e.clientPlugins,
            );
          }
          return l({
            RoleArn: o,
            RoleSessionName: t ?? `aws-sdk-js-session-${Date.now()}`,
            WebIdentityToken: i,
            ProviderId: s,
            PolicyArns: c,
            Policy: d,
            DurationSeconds: a,
          });
        },
        d = "AWS_WEB_IDENTITY_TOKEN_FILE",
        a =
          (e = {}) =>
          async (r) => {
            e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
            const n = e?.webIdentityTokenFile ?? process.env[d],
              a = e?.roleArn ?? process.env.AWS_ROLE_ARN,
              l = e?.roleSessionName ?? process.env.AWS_ROLE_SESSION_NAME;
            if (!n || !a)
              throw new t.C("Web identity configuration not specified", { logger: e.logger });
            const g = await c({
              ...e,
              webIdentityToken:
                i.Z?.getTokenRecord?.()[n] ?? (0, s.readFileSync)(n, { encoding: "ascii" }),
              roleArn: a,
              roleSessionName: l,
            })(r);
            return (
              n === process.env[d] &&
                (0, o.setCredentialFeature)(g, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h"),
              g
            );
          };
    },
    5217: (e, r, n) => {
      n.d(r, { C: () => s });
      var o = n(76982),
        t = n(16928),
        i = n(43344);
      const s = (e) => {
        const r = (0, o.createHash)("sha1").update(e).digest("hex");
        return (0, t.join)((0, i.R)(), ".aws", "sso", "cache", `${r}.json`);
      };
    },
    29846: (e, r, n) => {
      n.d(r, { Z: () => i });
      var o = n(35666),
        t = n(65600);
      const i = {
        getFileRecord: () => t.Jj,
        interceptFile(e, r) {
          t.Jj[e] = Promise.resolve(r);
        },
        getTokenRecord: () => o.a,
        interceptToken(e, r) {
          o.a[e] = r;
        },
      };
    },
    35666: (e, r, n) => {
      n.d(r, { a: () => i, v: () => s });
      var o = n(91943),
        t = n(5217);
      const i = {},
        s = async (e) => {
          if (i[e]) return i[e];
          const r = (0, t.C)(e),
            n = await (0, o.readFile)(r, "utf8");
          return JSON.parse(n);
        };
    },
    43344: (e, r, n) => {
      n.d(r, { R: () => s });
      var o = n(70857),
        t = n(16928);
      const i = {},
        s = () => {
          const { HOME: e, USERPROFILE: r, HOMEPATH: n, HOMEDRIVE: s = `C:${t.sep}` } = process.env;
          if (e) return e;
          if (r) return r;
          if (n) return `${s}${n}`;
          const c = process && process.geteuid ? `${process.geteuid()}` : "DEFAULT";
          return (i[c] || (i[c] = (0, o.homedir)()), i[c]);
        };
    },
    65600: (e, r, n) => {
      n.d(r, { Jj: () => i, TA: () => s });
      var o = n(51455);
      const t = {},
        i = {},
        s = (e, r) =>
          void 0 !== i[e]
            ? i[e]
            : ((t[e] && !r?.ignoreCache) || (t[e] = (0, o.readFile)(e, "utf8")), t[e]);
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-local-agent-runtime/dist/490.js.map
