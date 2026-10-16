"use strict";
((exports.id = 109),
  (exports.ids = [109]),
  (exports.modules = {
    3109: (e, n, o) => {
      (o.r(n), o.d(n, { fromTokenFile: () => l, fromWebToken: () => a }));
      var r = o(97464),
        t = o(61178),
        i = o(29846),
        s = o(73024);
      const a = (e) => async (n) => {
          e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
          const {
            roleArn: r,
            roleSessionName: t,
            webIdentityToken: i,
            providerId: s,
            policyArns: a,
            policy: d,
            durationSeconds: l,
          } = e;
          let { roleAssumerWithWebIdentity: c } = e;
          if (!c) {
            const { getDefaultRoleAssumerWithWebIdentity: r } = await Promise.all([
              o.e(66),
              o.e(163),
              o.e(55),
            ]).then(o.t.bind(o, 37163, 23));
            c = r(
              {
                ...e.clientConfig,
                credentialProviderLogger: e.logger,
                parentClientConfig: { ...n?.callerClientConfig, ...e.parentClientConfig },
              },
              e.clientPlugins,
            );
          }
          return c({
            RoleArn: r,
            RoleSessionName: t ?? `aws-sdk-js-session-${Date.now()}`,
            WebIdentityToken: i,
            ProviderId: s,
            PolicyArns: a,
            Policy: d,
            DurationSeconds: l,
          });
        },
        d = "AWS_WEB_IDENTITY_TOKEN_FILE",
        l =
          (e = {}) =>
          async (n) => {
            e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
            const o = e?.webIdentityTokenFile ?? process.env[d],
              l = e?.roleArn ?? process.env.AWS_ROLE_ARN,
              c = e?.roleSessionName ?? process.env.AWS_ROLE_SESSION_NAME;
            if (!o || !l)
              throw new t.C("Web identity configuration not specified", { logger: e.logger });
            const g = await a({
              ...e,
              webIdentityToken:
                i.Z?.getTokenRecord?.()[o] ?? (0, s.readFileSync)(o, { encoding: "ascii" }),
              roleArn: l,
              roleSessionName: c,
            })(n);
            return (
              o === process.env[d] &&
                (0, r.setCredentialFeature)(g, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h"),
              g
            );
          };
    },
    5217: (e, n, o) => {
      o.d(n, { C: () => s });
      var r = o(76982),
        t = o(16928),
        i = o(43344);
      const s = (e) => {
        const n = (0, r.createHash)("sha1").update(e).digest("hex");
        return (0, t.join)((0, i.R)(), ".aws", "sso", "cache", `${n}.json`);
      };
    },
    29846: (e, n, o) => {
      o.d(n, { Z: () => i });
      var r = o(35666),
        t = o(65600);
      const i = {
        getFileRecord: () => t.Jj,
        interceptFile(e, n) {
          t.Jj[e] = Promise.resolve(n);
        },
        getTokenRecord: () => r.a,
        interceptToken(e, n) {
          r.a[e] = n;
        },
      };
    },
    35666: (e, n, o) => {
      o.d(n, { a: () => i, v: () => s });
      var r = o(91943),
        t = o(5217);
      const i = {},
        s = async (e) => {
          if (i[e]) return i[e];
          const n = (0, t.C)(e),
            o = await (0, r.readFile)(n, "utf8");
          return JSON.parse(o);
        };
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-exec/dist/109.js.map
