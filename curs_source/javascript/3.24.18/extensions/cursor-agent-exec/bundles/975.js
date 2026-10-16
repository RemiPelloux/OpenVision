"use strict";
((exports.id = 975),
  (exports.ids = [213, 356, 975]),
  (exports.modules = {
    8041: (e, t, n) => {
      n.d(t, { A: () => i });
      var r = n(65835),
        o = n(42757);
      const a = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/,
        s = ["__proto__", "profile __proto__"],
        i = (e) => {
          const t = {};
          let n, i;
          for (const c of e.split(/\r?\n/)) {
            const e = c.split(/(^|\s)[;#]/)[0].trim();
            if ("[" === e[0] && "]" === e[e.length - 1]) {
              ((n = void 0), (i = void 0));
              const t = e.substring(1, e.length - 1),
                c = a.exec(t);
              if (c) {
                const [, e, , t] = c;
                Object.values(r.I).includes(e) && (n = [e, t].join(o.Q));
              } else n = t;
              if (s.includes(t)) throw new Error(`Found invalid profile name "${t}"`);
            } else if (n) {
              const r = e.indexOf("=");
              if (![0, -1].includes(r)) {
                const [a, s] = [e.substring(0, r).trim(), e.substring(r + 1).trim()];
                if ("" === s) i = a;
                else {
                  (i && c.trimStart() === c && (i = void 0), (t[n] = t[n] || {}));
                  const e = i ? [i, a].join(o.Q) : a;
                  t[n][e] = s;
                }
              }
            }
          }
          return t;
        };
    },
    42757: (e, t, n) => {
      n.d(t, { Q: () => r });
      const r = ".";
    },
    43344: (e, t, n) => {
      n.d(t, { R: () => s });
      var r = n(70857),
        o = n(16928);
      const a = {},
        s = () => {
          const { HOME: e, USERPROFILE: t, HOMEPATH: n, HOMEDRIVE: s = `C:${o.sep}` } = process.env;
          if (e) return e;
          if (t) return t;
          if (n) return `${s}${n}`;
          const i = process && process.geteuid ? `${process.geteuid()}` : "DEFAULT";
          return (a[i] || (a[i] = (0, r.homedir)()), a[i]);
        };
    },
    53043: (e, t, n) => {
      (n.r(t), n.d(t, { parseUrl: () => r }));
      const r = (e) => {
        if ("string" == typeof e) return r(new URL(e));
        const { hostname: t, pathname: n, port: o, protocol: a, search: s } = e;
        let i;
        return (
          s &&
            (i = (function (e) {
              const t = {};
              if ((e = e.replace(/^\?/, "")))
                for (const n of e.split("&")) {
                  let [e, r = null] = n.split("=");
                  ((e = decodeURIComponent(e)),
                    r && (r = decodeURIComponent(r)),
                    e in t
                      ? Array.isArray(t[e])
                        ? t[e].push(r)
                        : (t[e] = [t[e], r])
                      : (t[e] = r));
                }
              return t;
            })(s)),
          { hostname: t, port: o ? parseInt(o) : void 0, protocol: a, path: n, query: i }
        );
      };
    },
    53835: (e, t, n) => {
      n.d(t, { g: () => a });
      var r = n(16928),
        o = n(43344);
      const a = () => process.env.AWS_CONFIG_FILE || (0, r.join)((0, o.R)(), ".aws", "config");
    },
    65600: (e, t, n) => {
      n.d(t, { Jj: () => a, TA: () => s });
      var r = n(51455);
      const o = {},
        a = {},
        s = (e, t) =>
          void 0 !== a[e]
            ? a[e]
            : ((o[e] && !t?.ignoreCache) || (o[e] = (0, r.readFile)(e, "utf8")), o[e]);
    },
    68395: (e, t, n) => {
      n.d(t, { p: () => p });
      var r = n(16928),
        o = n(65835),
        a = n(42757);
      const s = (e) =>
        Object.entries(e)
          .filter(([e]) => {
            const t = e.indexOf(a.Q);
            return -1 !== t && Object.values(o.I).includes(e.substring(0, t));
          })
          .reduce(
            (e, [t, n]) => {
              const r = t.indexOf(a.Q);
              return ((e[t.substring(0, r) === o.I.PROFILE ? t.substring(r + 1) : t] = n), e);
            },
            { ...(e.default && { default: e.default }) },
          );
      var i = n(53835),
        c = n(43344);
      const l = () =>
        process.env.AWS_SHARED_CREDENTIALS_FILE || (0, r.join)((0, c.R)(), ".aws", "credentials");
      var d = n(8041),
        u = n(65600);
      const f = () => ({}),
        p = async (e = {}) => {
          const { filepath: t = l(), configFilepath: n = (0, i.g)() } = e,
            o = (0, c.R)();
          let a = t;
          t.startsWith("~/") && (a = (0, r.join)(o, t.slice(2)));
          let p = n;
          n.startsWith("~/") && (p = (0, r.join)(o, n.slice(2)));
          const g = await Promise.all([
            (0, u.TA)(p, { ignoreCache: e.ignoreCache }).then(d.A).then(s).catch(f),
            (0, u.TA)(a, { ignoreCache: e.ignoreCache }).then(d.A).catch(f),
          ]);
          return { configFile: g[0], credentialsFile: g[1] };
        };
    },
    68521: (e, t, n) => {
      n.d(t, { B: () => r });
      const r = (e, t, n) => {
        let r,
          o,
          a,
          s = !1;
        const i = async () => {
          o || (o = e());
          try {
            ((r = await o), (a = !0), (s = !1));
          } finally {
            o = void 0;
          }
          return r;
        };
        return void 0 === t
          ? async (e) => ((a && !e?.forceRefresh) || (r = await i()), r)
          : async (e) => (
              (a && !e?.forceRefresh) || (r = await i()),
              s ? r : n && !n(r) ? ((s = !0), r) : t(r) ? (await i(), r) : r
            );
      };
    },
    74935: (e, t, n) => {
      n.d(t, { Z: () => d });
      var r = n(68521),
        o = n(480),
        a = n(61178);
      function s(e) {
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
      var i = n(50800),
        c = n(68395);
      const l = (e) => {
          return "function" == typeof e
            ? async () => await e()
            : ((t = e), () => Promise.resolve(t));
          var t;
        },
        d = ({ environmentVariableSelector: e, configFileSelector: t, default: n }, d = {}) => {
          const { signingName: u, logger: f } = d,
            p = { signingName: u, logger: f };
          return (0, r.B)(
            (0, o.c)(
              ((g = e),
              (h = p),
              async () => {
                try {
                  const e = g(process.env, h);
                  if (void 0 === e) throw new Error();
                  return e;
                } catch (e) {
                  throw new a.C(e.message || `Not found in ENV: ${s(g.toString())}`, {
                    logger: h?.logger,
                  });
                }
              }),
              (
                (e, { preferredFile: t = "config", ...n } = {}) =>
                async () => {
                  const r = (0, i.Bz)(n),
                    { configFile: o, credentialsFile: l } = await (0, c.p)(n),
                    d = l[r] || {},
                    u = o[r] || {},
                    f = "config" === t ? { ...d, ...u } : { ...u, ...d };
                  try {
                    const n = e(f, "config" === t ? o : l);
                    if (void 0 === n) throw new Error();
                    return n;
                  } catch (t) {
                    throw new a.C(
                      t.message ||
                        `Not found in config files w/ profile [${r}]: ${s(e.toString())}`,
                      { logger: n.logger },
                    );
                  }
                }
              )(t, d),
              l(n),
            ),
          );
          var g, h;
        };
    },
    95975: (e, t, n) => {
      n.d(t, {
        ENV_CMDS_FULL_URI: () => p,
        ENV_CMDS_RELATIVE_URI: () => g,
        fromContainerMetadata: () => m,
        fromInstanceMetadata: () => $,
        getInstanceMetadataEndpoint: () => T,
        httpRequest: () => c,
      });
      var r = n(61178),
        o = n(87016),
        a = n(75504),
        s = n(20181),
        i = n(58611);
      function c(e) {
        return new Promise((t, n) => {
          const r = (0, i.request)({
            method: "GET",
            ...e,
            hostname: e.hostname?.replace(/^\[(.+)\]$/, "$1"),
          });
          (r.on("error", (e) => {
            (n(Object.assign(new a.m("Unable to connect to instance metadata service"), e)),
              r.destroy());
          }),
            r.on("timeout", () => {
              (n(new a.m("TimeoutError from instance metadata service")), r.destroy());
            }),
            r.on("response", (e) => {
              const { statusCode: o = 400 } = e;
              (o < 200 || 300 <= o) &&
                (n(
                  Object.assign(new a.m("Error response received from instance metadata service"), {
                    statusCode: o,
                  }),
                ),
                r.destroy());
              const i = [];
              (e.on("data", (e) => {
                i.push(e);
              }),
                e.on("end", () => {
                  (t(s.Buffer.concat(i)), r.destroy());
                }));
            }),
            r.end());
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
        f = (e, t) => {
          let n = e();
          for (let r = 0; r < t; r++) n = n.catch(e);
          return n;
        },
        p = "AWS_CONTAINER_CREDENTIALS_FULL_URI",
        g = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
        h = "AWS_CONTAINER_AUTHORIZATION_TOKEN",
        m = (e = {}) => {
          const { timeout: t, maxRetries: n } = u(e);
          return () =>
            f(async () => {
              const n = await E({ logger: e.logger }),
                o = JSON.parse(await v(t, n));
              if (!l(o))
                throw new r.C("Invalid response received from instance metadata service.", {
                  logger: e.logger,
                });
              return d(o);
            }, n);
        },
        v = async (e, t) => {
          process.env[h] && (t.headers = { ...t.headers, Authorization: process.env[h] });
          return (await c({ ...t, timeout: e })).toString();
        },
        w = { localhost: !0, "127.0.0.1": !0 },
        y = { "http:": !0, "https:": !0 },
        E = async ({ logger: e }) => {
          if (process.env[g]) return { hostname: "169.254.170.2", path: process.env[g] };
          if (process.env[p]) {
            const t = (0, o.parse)(process.env[p]);
            if (!t.hostname || !(t.hostname in w))
              throw new r.C(`${t.hostname} is not a valid container metadata service hostname`, {
                tryNextLink: !1,
                logger: e,
              });
            if (!t.protocol || !(t.protocol in y))
              throw new r.C(`${t.protocol} is not a valid container metadata service protocol`, {
                tryNextLink: !1,
                logger: e,
              });
            return { ...t, port: t.port ? parseInt(t.port, 10) : void 0 };
          }
          throw new r.C(
            `The container metadata credential provider cannot be used unless the ${g} or ${p} environment variable is set`,
            { tryNextLink: !1, logger: e },
          );
        };
      var I = n(74935);
      class A extends r.C {
        tryNextLink;
        name = "InstanceMetadataV1FallbackError";
        constructor(e, t = !0) {
          (super(e, t), (this.tryNextLink = t), Object.setPrototypeOf(this, A.prototype));
        }
      }
      var _,
        S = n(53043);
      !(function (e) {
        ((e.IPv4 = "http://169.254.169.254"), (e.IPv6 = "http://[fd00:ec2::254]"));
      })(_ || (_ = {}));
      const C = {
        environmentVariableSelector: (e) => e.AWS_EC2_METADATA_SERVICE_ENDPOINT,
        configFileSelector: (e) => e.ec2_metadata_service_endpoint,
        default: void 0,
      };
      var b;
      !(function (e) {
        ((e.IPv4 = "IPv4"), (e.IPv6 = "IPv6"));
      })(b || (b = {}));
      const R = {
          environmentVariableSelector: (e) => e.AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE,
          configFileSelector: (e) => e.ec2_metadata_service_endpoint_mode,
          default: b.IPv4,
        },
        T = async () => (0, S.parseUrl)((await N()) || (await O())),
        N = async () => (0, I.Z)(C)(),
        O = async () => {
          const e = await (0, I.Z)(R)();
          switch (e) {
            case b.IPv4:
              return _.IPv4;
            case b.IPv6:
              return _.IPv6;
            default:
              throw new Error(`Unsupported endpoint mode: ${e}. Select from ${Object.values(b)}`);
          }
        },
        x = (e, t) => {
          const n = 300 + Math.floor(300 * Math.random()),
            r = new Date(Date.now() + 1e3 * n);
          t.warn(
            `Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(r)}.\nFor more information, please visit: https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html`,
          );
          const o = e.originalExpiration ?? e.expiration;
          return { ...e, ...(o ? { originalExpiration: o } : {}), expiration: r };
        },
        D = "/latest/meta-data/iam/security-credentials/",
        F = "AWS_EC2_METADATA_V1_DISABLED",
        P = "ec2_metadata_v1_disabled",
        M = "x-aws-ec2-metadata-token",
        $ = (e = {}) =>
          ((e, t = {}) => {
            const n = t?.logger || console;
            let r;
            return async () => {
              let t;
              try {
                ((t = await e()),
                  t.expiration && t.expiration.getTime() < Date.now() && (t = x(t, n)));
              } catch (e) {
                if (!r) throw e;
                (n.warn("Credential renew failed: ", e), (t = x(r, n)));
              }
              return ((r = t), t);
            };
          })(L(e), { logger: e.logger }),
        L = (e = {}) => {
          let t = !1;
          const { logger: n, profile: o } = e,
            { timeout: a, maxRetries: s } = u(e),
            i = async (n, a) => {
              if (t || null == a.headers?.[M]) {
                let t = !1,
                  n = !1;
                const a = await (0, I.Z)(
                  {
                    environmentVariableSelector: (t) => {
                      const o = t[F];
                      if (((n = !!o && "false" !== o), void 0 === o))
                        throw new r.C(`${F} not set in env, checking config file next.`, {
                          logger: e.logger,
                        });
                      return n;
                    },
                    configFileSelector: (e) => {
                      const n = e[P];
                      return ((t = !!n && "false" !== n), t);
                    },
                    default: !1,
                  },
                  { profile: o },
                )();
                if (e.ec2MetadataV1Disabled || a) {
                  const r = [];
                  throw (
                    e.ec2MetadataV1Disabled &&
                      r.push(
                        "credential provider initialization (runtime option ec2MetadataV1Disabled)",
                      ),
                    t && r.push(`config file profile (${P})`),
                    n && r.push(`process environment variable (${F})`),
                    new A(
                      `AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${r.join(", ")}].`,
                    )
                  );
                }
              }
              const s = (
                await f(async () => {
                  let e;
                  try {
                    e = await j(a);
                  } catch (e) {
                    throw (401 === e.statusCode && (t = !1), e);
                  }
                  return e;
                }, n)
              ).trim();
              return f(async () => {
                let n;
                try {
                  n = await V(s, a, e);
                } catch (e) {
                  throw (401 === e.statusCode && (t = !1), e);
                }
                return n;
              }, n);
            };
          return async () => {
            const e = await T();
            if (t)
              return (
                n?.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)"),
                i(s, { ...e, timeout: a })
              );
            {
              let r;
              try {
                r = (await k({ ...e, timeout: a })).toString();
              } catch (r) {
                if (400 === r?.statusCode)
                  throw Object.assign(r, { message: "EC2 Metadata token request returned error" });
                return (
                  ("TimeoutError" === r.message || [403, 404, 405].includes(r.statusCode)) &&
                    (t = !0),
                  n?.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)"),
                  i(s, { ...e, timeout: a })
                );
              }
              return i(s, { ...e, headers: { [M]: r }, timeout: a });
            }
          };
        },
        k = async (e) =>
          c({
            ...e,
            path: "/latest/api/token",
            method: "PUT",
            headers: { "x-aws-ec2-metadata-token-ttl-seconds": "21600" },
          }),
        j = async (e) => (await c({ ...e, path: D })).toString(),
        V = async (e, t, n) => {
          const o = JSON.parse((await c({ ...t, path: D + e })).toString());
          if (!l(o))
            throw new r.C("Invalid response received from instance metadata service.", {
              logger: n.logger,
            });
          return d(o);
        };
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-exec/dist/975.js.map
