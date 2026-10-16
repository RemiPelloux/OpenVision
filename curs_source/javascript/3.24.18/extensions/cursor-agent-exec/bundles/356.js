"use strict";
((exports.id = 356),
  (exports.ids = [213, 356]),
  (exports.modules = {
    53043: (e, t, r) => {
      (r.r(t), r.d(t, { parseUrl: () => n }));
      const n = (e) => {
        if ("string" == typeof e) return n(new URL(e));
        const { hostname: t, pathname: r, port: a, protocol: o, search: i } = e;
        let s;
        return (
          i &&
            (s = (function (e) {
              const t = {};
              if ((e = e.replace(/^\?/, "")))
                for (const r of e.split("&")) {
                  let [e, n = null] = r.split("=");
                  ((e = decodeURIComponent(e)),
                    n && (n = decodeURIComponent(n)),
                    e in t
                      ? Array.isArray(t[e])
                        ? t[e].push(n)
                        : (t[e] = [t[e], n])
                      : (t[e] = n));
                }
              return t;
            })(i)),
          { hostname: t, port: a ? parseInt(a) : void 0, protocol: o, path: r, query: s }
        );
      };
    },
    68521: (e, t, r) => {
      r.d(t, { B: () => n });
      const n = (e, t, r) => {
        let n,
          a,
          o,
          i = !1;
        const s = async () => {
          a || (a = e());
          try {
            ((n = await a), (o = !0), (i = !1));
          } finally {
            a = void 0;
          }
          return n;
        };
        return void 0 === t
          ? async (e) => ((o && !e?.forceRefresh) || (n = await s()), n)
          : async (e) => (
              (o && !e?.forceRefresh) || (n = await s()),
              i ? n : r && !r(n) ? ((i = !0), n) : t(n) ? (await s(), n) : n
            );
      };
    },
    74935: (e, t, r) => {
      r.d(t, { Z: () => d });
      var n = r(68521),
        a = r(480),
        o = r(61178);
      function i(e) {
        try {
          const t = new Set(Array.from(e.match(/([A-Z_]){3,}/g) ?? []));
          return (
            t.delete("CONFIG"),
            t.delete("CONFIG_PREFIX_SEPARATOR"),
            t.delete("ENV"),
            [...t].join(", ")
          );
        } catch (t) {
          return e;
        }
      }
      var s = r(50800),
        c = r(68395);
      const l = (e) => {
          return "function" == typeof e
            ? async () => await e()
            : ((t = e), () => Promise.resolve(t));
          var t;
        },
        d = ({ environmentVariableSelector: e, configFileSelector: t, default: r }, d = {}) => {
          const { signingName: u, logger: p } = d,
            f = { signingName: u, logger: p };
          return (0, n.B)(
            (0, a.c)(
              ((g = e),
              (m = f),
              async () => {
                try {
                  const e = g(process.env, m);
                  if (void 0 === e) throw new Error();
                  return e;
                } catch (e) {
                  throw new o.C(e.message || `Not found in ENV: ${i(g.toString())}`, {
                    logger: m?.logger,
                  });
                }
              }),
              (
                (e, { preferredFile: t = "config", ...r } = {}) =>
                async () => {
                  const n = (0, s.Bz)(r),
                    { configFile: a, credentialsFile: l } = await (0, c.p)(r),
                    d = l[n] || {},
                    u = a[n] || {},
                    p = "config" === t ? { ...d, ...u } : { ...u, ...d };
                  try {
                    const r = e(p, "config" === t ? a : l);
                    if (void 0 === r) throw new Error();
                    return r;
                  } catch (t) {
                    throw new o.C(
                      t.message ||
                        `Not found in config files w/ profile [${n}]: ${i(e.toString())}`,
                      { logger: r.logger },
                    );
                  }
                }
              )(t, d),
              l(r),
            ),
          );
          var g, m;
        };
    },
    95975: (e, t, r) => {
      r.d(t, {
        ENV_CMDS_FULL_URI: () => f,
        ENV_CMDS_RELATIVE_URI: () => g,
        fromContainerMetadata: () => h,
        fromInstanceMetadata: () => V,
        getInstanceMetadataEndpoint: () => T,
        httpRequest: () => c,
      });
      var n = r(61178),
        a = r(87016),
        o = r(75504),
        i = r(20181),
        s = r(58611);
      function c(e) {
        return new Promise((t, r) => {
          const n = (0, s.request)({
            method: "GET",
            ...e,
            hostname: e.hostname?.replace(/^\[(.+)\]$/, "$1"),
          });
          (n.on("error", (e) => {
            (r(Object.assign(new o.m("Unable to connect to instance metadata service"), e)),
              n.destroy());
          }),
            n.on("timeout", () => {
              (r(new o.m("TimeoutError from instance metadata service")), n.destroy());
            }),
            n.on("response", (e) => {
              const { statusCode: a = 400 } = e;
              (a < 200 || 300 <= a) &&
                (r(
                  Object.assign(new o.m("Error response received from instance metadata service"), {
                    statusCode: a,
                  }),
                ),
                n.destroy());
              const s = [];
              (e.on("data", (e) => {
                s.push(e);
              }),
                e.on("end", () => {
                  (t(i.Buffer.concat(s)), n.destroy());
                }));
            }),
            n.end());
        });
      }
      const l = (e) =>
          Boolean(e) &&
          "object" == typeof e &&
          "string" == typeof e.AccessKeyId &&
          "string" == typeof e.SecretAccessKey &&
          "string" == typeof e.Token &&
          "string" == typeof e.Expiration,
        d = (e) => ({
          accessKeyId: e.AccessKeyId,
          secretAccessKey: e.SecretAccessKey,
          sessionToken: e.Token,
          expiration: new Date(e.Expiration),
          ...(e.AccountId && { accountId: e.AccountId }),
        }),
        u = ({ maxRetries: e = 0, timeout: t = 1e3 }) => ({ maxRetries: e, timeout: t }),
        p = (e, t) => {
          let r = e();
          for (let n = 0; n < t; n++) r = r.catch(e);
          return r;
        },
        f = "AWS_CONTAINER_CREDENTIALS_FULL_URI",
        g = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
        m = "AWS_CONTAINER_AUTHORIZATION_TOKEN",
        h = (e = {}) => {
          const { timeout: t, maxRetries: r } = u(e);
          return () =>
            p(async () => {
              const r = await I({ logger: e.logger }),
                a = JSON.parse(await v(t, r));
              if (!l(a))
                throw new n.C("Invalid response received from instance metadata service.", {
                  logger: e.logger,
                });
              return d(a);
            }, r);
        },
        v = async (e, t) => {
          process.env[m] && (t.headers = { ...t.headers, Authorization: process.env[m] });
          return (await c({ ...t, timeout: e })).toString();
        },
        w = { localhost: !0, "127.0.0.1": !0 },
        y = { "http:": !0, "https:": !0 },
        I = async ({ logger: e }) => {
          if (process.env[g]) return { hostname: "169.254.170.2", path: process.env[g] };
          if (process.env[f]) {
            const t = (0, a.parse)(process.env[f]);
            if (!t.hostname || !(t.hostname in w))
              throw new n.C(`${t.hostname} is not a valid container metadata service hostname`, {
                tryNextLink: !1,
                logger: e,
              });
            if (!t.protocol || !(t.protocol in y))
              throw new n.C(`${t.protocol} is not a valid container metadata service protocol`, {
                tryNextLink: !1,
                logger: e,
              });
            return { ...t, port: t.port ? parseInt(t.port, 10) : void 0 };
          }
          throw new n.C(
            `The container metadata credential provider cannot be used unless the ${g} or ${f} environment variable is set`,
            { tryNextLink: !1, logger: e },
          );
        };
      var E = r(74935);
      class A extends n.C {
        tryNextLink;
        name = "InstanceMetadataV1FallbackError";
        constructor(e, t = !0) {
          (super(e, t), (this.tryNextLink = t), Object.setPrototypeOf(this, A.prototype));
        }
      }
      var _,
        S = r(53043);
      !(function (e) {
        ((e.IPv4 = "http://169.254.169.254"), (e.IPv6 = "http://[fd00:ec2::254]"));
      })(_ || (_ = {}));
      const C = {
        environmentVariableSelector: (e) => e.AWS_EC2_METADATA_SERVICE_ENDPOINT,
        configFileSelector: (e) => e.ec2_metadata_service_endpoint,
        default: void 0,
      };
      var N;
      !(function (e) {
        ((e.IPv4 = "IPv4"), (e.IPv6 = "IPv6"));
      })(N || (N = {}));
      const b = {
          environmentVariableSelector: (e) => e.AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE,
          configFileSelector: (e) => e.ec2_metadata_service_endpoint_mode,
          default: N.IPv4,
        },
        T = async () => (0, S.parseUrl)((await x()) || (await R())),
        x = async () => (0, E.Z)(C)(),
        R = async () => {
          const e = await (0, E.Z)(b)();
          switch (e) {
            case N.IPv4:
              return _.IPv4;
            case N.IPv6:
              return _.IPv6;
            default:
              throw new Error(`Unsupported endpoint mode: ${e}. Select from ${Object.values(N)}`);
          }
        },
        D = (e, t) => {
          const r = 300 + Math.floor(300 * Math.random()),
            n = new Date(Date.now() + 1e3 * r);
          t.warn(
            `Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(n)}.\nFor more information, please visit: https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html`,
          );
          const a = e.originalExpiration ?? e.expiration;
          return { ...e, ...(a ? { originalExpiration: a } : {}), expiration: n };
        },
        k = "/latest/meta-data/iam/security-credentials/",
        O = "AWS_EC2_METADATA_V1_DISABLED",
        M = "ec2_metadata_v1_disabled",
        P = "x-aws-ec2-metadata-token",
        V = (e = {}) =>
          ((e, t = {}) => {
            const r = t?.logger || console;
            let n;
            return async () => {
              let t;
              try {
                ((t = await e()),
                  t.expiration && t.expiration.getTime() < Date.now() && (t = D(t, r)));
              } catch (e) {
                if (!n) throw e;
                (r.warn("Credential renew failed: ", e), (t = D(n, r)));
              }
              return ((n = t), t);
            };
          })($(e), { logger: e.logger }),
        $ = (e = {}) => {
          let t = !1;
          const { logger: r, profile: a } = e,
            { timeout: o, maxRetries: i } = u(e),
            s = async (r, o) => {
              if (t || null == o.headers?.[P]) {
                let t = !1,
                  r = !1;
                const o = await (0, E.Z)(
                  {
                    environmentVariableSelector: (t) => {
                      const a = t[O];
                      if (((r = !!a && "false" !== a), void 0 === a))
                        throw new n.C(`${O} not set in env, checking config file next.`, {
                          logger: e.logger,
                        });
                      return r;
                    },
                    configFileSelector: (e) => {
                      const r = e[M];
                      return ((t = !!r && "false" !== r), t);
                    },
                    default: !1,
                  },
                  { profile: a },
                )();
                if (e.ec2MetadataV1Disabled || o) {
                  const n = [];
                  throw (
                    e.ec2MetadataV1Disabled &&
                      n.push(
                        "credential provider initialization (runtime option ec2MetadataV1Disabled)",
                      ),
                    t && n.push(`config file profile (${M})`),
                    r && n.push(`process environment variable (${O})`),
                    new A(
                      `AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${n.join(", ")}].`,
                    )
                  );
                }
              }
              const i = (
                await p(async () => {
                  let e;
                  try {
                    e = await U(o);
                  } catch (e) {
                    throw (401 === e.statusCode && (t = !1), e);
                  }
                  return e;
                }, r)
              ).trim();
              return p(async () => {
                let r;
                try {
                  r = await F(i, o, e);
                } catch (e) {
                  throw (401 === e.statusCode && (t = !1), e);
                }
                return r;
              }, r);
            };
          return async () => {
            const e = await T();
            if (t)
              return (
                r?.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)"),
                s(i, { ...e, timeout: o })
              );
            {
              let n;
              try {
                n = (await L({ ...e, timeout: o })).toString();
              } catch (n) {
                if (400 === n?.statusCode)
                  throw Object.assign(n, { message: "EC2 Metadata token request returned error" });
                return (
                  ("TimeoutError" === n.message || [403, 404, 405].includes(n.statusCode)) &&
                    (t = !0),
                  r?.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)"),
                  s(i, { ...e, timeout: o })
                );
              }
              return s(i, { ...e, headers: { [P]: n }, timeout: o });
            }
          };
        },
        L = async (e) =>
          c({
            ...e,
            path: "/latest/api/token",
            method: "PUT",
            headers: { "x-aws-ec2-metadata-token-ttl-seconds": "21600" },
          }),
        U = async (e) => (await c({ ...e, path: k })).toString(),
        F = async (e, t, r) => {
          const a = JSON.parse((await c({ ...t, path: k + e })).toString());
          if (!l(a))
            throw new n.C("Invalid response received from instance metadata service.", {
              logger: r.logger,
            });
          return d(a);
        };
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-exec/dist/356.js.map
