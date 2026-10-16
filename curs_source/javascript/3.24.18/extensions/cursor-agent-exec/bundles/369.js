"use strict";
((exports.id = 369),
  (exports.ids = [369]),
  (exports.modules = {
    18750: (e, t, o) => {
      o.d(t, { fromHttp: () => A });
      var r = o(97464),
        n = o(41741),
        s = o(61178),
        i = o(51455),
        a = o.n(i);
      var c = o(50333),
        u = o(96851),
        l = o(90443),
        d = o(2203),
        f = o(55936),
        h = o(8353),
        m = o(86507);
      const g = (e) =>
          "function" == typeof ReadableStream &&
          (e?.constructor?.name === ReadableStream.name || e instanceof ReadableStream),
        p = "The stream has already been transformed.",
        w = (e) => {
          if (!T(e) && !g(e)) {
            throw new Error(
              `Unexpected stream implementation, expect Blob or ReadableStream, got ${e?.__proto__?.constructor?.name || e}`,
            );
          }
          let t = !1;
          const o = async () => {
            if (t) throw new Error(p);
            return ((t = !0), await (0, u.streamCollector)(e));
          };
          return Object.assign(e, {
            transformToByteArray: o,
            transformToString: async (e) => {
              const t = await o();
              if ("base64" === e) return (0, f.n)(t);
              if ("hex" === e) return (0, h.n)(t);
              if (void 0 === e || "utf8" === e || "utf-8" === e) return (0, m.P)(t);
              if ("function" == typeof TextDecoder) return new TextDecoder(e).decode(t);
              throw new Error(
                "TextDecoder is not available, please make sure polyfill is provided.",
              );
            },
            transformToWebStream: () => {
              if (t) throw new Error(p);
              if (((t = !0), T(e)))
                return ((e) => {
                  if ("function" != typeof e.stream)
                    throw new Error(
                      "Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body",
                    );
                  return e.stream();
                })(e);
              if (g(e)) return e;
              throw new Error(`Cannot transform payload to web stream, got ${e}`);
            },
          });
        },
        T = (e) => "function" == typeof Blob && e instanceof Blob,
        y = "The stream has already been transformed.";
      async function b(e, t) {
        const o = ((e) => {
            if (!(e instanceof d.Readable))
              try {
                return w(e);
              } catch (t) {
                throw new Error(
                  `Unexpected stream implementation, expect Stream.Readable instance, got ${e?.__proto__?.constructor?.name || e}`,
                );
              }
            let t = !1;
            const o = async () => {
              if (t) throw new Error(y);
              return ((t = !0), await (0, u.streamCollector)(e));
            };
            return Object.assign(e, {
              transformToByteArray: o,
              transformToString: async (e) => {
                const t = await o();
                return void 0 === e || Buffer.isEncoding(e)
                  ? (0, l.Q)(t.buffer, t.byteOffset, t.byteLength).toString(e)
                  : new TextDecoder(e).decode(t);
              },
              transformToWebStream: () => {
                if (t) throw new Error(y);
                if (null !== e.readableFlowing)
                  throw new Error("The stream has been consumed by other callbacks.");
                if ("function" != typeof d.Readable.toWeb)
                  throw new Error(
                    "Readable.toWeb() is not supported. Please ensure a polyfill is available.",
                  );
                return ((t = !0), d.Readable.toWeb(e));
              },
            });
          })(e.body),
          r = await o.transformToString();
        if (200 === e.statusCode) {
          const e = JSON.parse(r);
          if (
            "string" != typeof e.AccessKeyId ||
            "string" != typeof e.SecretAccessKey ||
            "string" != typeof e.Token ||
            "string" != typeof e.Expiration
          )
            throw new s.C(
              "HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }",
              { logger: t },
            );
          return {
            accessKeyId: e.AccessKeyId,
            secretAccessKey: e.SecretAccessKey,
            sessionToken: e.Token,
            expiration: (0, u.parseRfc3339DateTime)(e.Expiration),
          };
        }
        if (e.statusCode >= 400 && e.statusCode < 500) {
          let o = {};
          try {
            o = JSON.parse(r);
          } catch (e) {}
          throw Object.assign(
            new s.C(`Server responded with status: ${e.statusCode}`, { logger: t }),
            { Code: o.Code, Message: o.Message },
          );
        }
        throw new s.C(`Server responded with status: ${e.statusCode}`, { logger: t });
      }
      const A = (e = {}) => {
        let t;
        e.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
        const o =
            e.awsContainerCredentialsRelativeUri ??
            process.env.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI,
          i = e.awsContainerCredentialsFullUri ?? process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI,
          u = e.awsContainerAuthorizationToken ?? process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN,
          l =
            e.awsContainerAuthorizationTokenFile ??
            process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE,
          d =
            "NoOpLogger" !== e.logger?.constructor?.name && e.logger?.warn
              ? e.logger.warn.bind(e.logger)
              : console.warn;
        if (
          (o &&
            i &&
            (d(
              "@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.",
            ),
            d("awsContainerCredentialsFullUri will take precedence.")),
          u &&
            l &&
            (d(
              "@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.",
            ),
            d("awsContainerAuthorizationToken will take precedence.")),
          i)
        )
          t = i;
        else {
          if (!o)
            throw new s.C(
              "No HTTP credential provider host provided.\nSet AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.",
              { logger: e.logger },
            );
          t = `http://169.254.170.2${o}`;
        }
        const f = new URL(t);
        ((e, t) => {
          if (
            "https:" !== e.protocol &&
            "169.254.170.2" !== e.hostname &&
            "169.254.170.23" !== e.hostname &&
            "[fd00:ec2::23]" !== e.hostname
          ) {
            if (e.hostname.includes("[")) {
              if (
                "[::1]" === e.hostname ||
                "[0000:0000:0000:0000:0000:0000:0000:0001]" === e.hostname
              )
                return;
            } else {
              if ("localhost" === e.hostname) return;
              const t = e.hostname.split("."),
                o = (e) => {
                  const t = parseInt(e, 10);
                  return 0 <= t && t <= 255;
                };
              if ("127" === t[0] && o(t[1]) && o(t[2]) && o(t[3]) && 4 === t.length) return;
            }
            throw new s.C(
              "URL not accepted. It must either be HTTPS or match one of the following:\n  - loopback CIDR 127.0.0.0/8 or [::1/128]\n  - ECS container host 169.254.170.2\n  - EKS container host 169.254.170.23 or [fd00:ec2::23]",
              { logger: t },
            );
          }
        })(f, e.logger);
        const h = n.$.create({
          requestTimeout: e.timeout ?? 1e3,
          connectionTimeout: e.timeout ?? 1e3,
        });
        return (
          (m = async () => {
            const t = (function (e) {
              return new c.K({
                protocol: e.protocol,
                hostname: e.hostname,
                port: Number(e.port),
                path: e.pathname,
                query: Array.from(e.searchParams.entries()).reduce(
                  (e, [t, o]) => ((e[t] = o), e),
                  {},
                ),
                fragment: e.hash,
              });
            })(f);
            u
              ? (t.headers.Authorization = u)
              : l && (t.headers.Authorization = (await a().readFile(l)).toString());
            try {
              return b((await h.handle(t)).response).then((e) =>
                (0, r.setCredentialFeature)(e, "CREDENTIALS_HTTP", "z"),
              );
            } catch (t) {
              throw new s.C(String(t), { logger: e.logger });
            }
          }),
          (g = e.maxRetries ?? 3),
          (p = e.timeout ?? 1e3),
          async () => {
            for (let e = 0; e < g; ++e)
              try {
                return await m();
              } catch (e) {
                await new Promise((e) => setTimeout(e, p));
              }
            return await m();
          }
        );
        var m, g, p;
      };
    },
    29428: (e, t, o) => {
      o.d(t, { f: () => i });
      var r = o(57075),
        n = o(70904);
      const s = 6e3;
      async function i(e, t, o = s, i = !1) {
        const a = t.headers,
          c = a ? a.Expect || a.expect : void 0;
        let u = -1,
          l = !0;
        (i ||
          "100-continue" !== c ||
          (l = await Promise.race([
            new Promise((e) => {
              u = Number(n.N.setTimeout(() => e(!0), Math.max(s, o)));
            }),
            new Promise((t) => {
              (e.on("continue", () => {
                (n.N.clearTimeout(u), t(!0));
              }),
                e.on("response", () => {
                  (n.N.clearTimeout(u), t(!1));
                }),
                e.on("error", () => {
                  (n.N.clearTimeout(u), t(!1));
                }));
            }),
          ])),
          l &&
            (function (e, t) {
              if (t instanceof r.Readable) return void t.pipe(e);
              if (t) {
                const o = Buffer.isBuffer(t);
                if (o || "string" == typeof t)
                  return void (o && 0 === t.byteLength ? e.end() : e.end(t));
                const r = t;
                return "object" == typeof r &&
                  r.buffer &&
                  "number" == typeof r.byteOffset &&
                  "number" == typeof r.byteLength
                  ? void e.end(Buffer.from(r.buffer, r.byteOffset, r.byteLength))
                  : void e.end(Buffer.from(t));
              }
              e.end();
            })(e, t.body));
      }
    },
    41741: (e, t, o) => {
      o.d(t, { w: () => f, $: () => g });
      var r = o(96851),
        n = o(73931),
        s = o(94804);
      const i = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
      var a = o(86639),
        c = o(44708),
        u = o.n(c),
        l = o(70904);
      var d = o(29428);
      const f = 0;
      let h, m;
      class g {
        config;
        configProvider;
        socketWarningTimestamp = 0;
        externalAgent = !1;
        metadata = { handlerProtocol: "http/1.1" };
        static create(e) {
          return "function" == typeof e?.handle ? e : new g(e);
        }
        static checkSocketUsage(e, t, o = console) {
          const { sockets: n, requests: s, maxSockets: i } = e;
          if ("number" != typeof i || i === 1 / 0) return t;
          if (Date.now() - 15e3 < t) return t;
          if (n && s)
            for (const e in n) {
              if (!(0, r.hasOwn)(n, e)) continue;
              const t = n[e]?.length ?? 0,
                a = s[e]?.length ?? 0;
              if (t >= i && a >= 2 * i)
                return (
                  o?.warn?.(
                    `@smithy/node-http-handler:WARN - socket usage at capacity=${t} and ${a} additional requests are enqueued.\nSee https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html\nor increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`,
                  ),
                  Date.now()
                );
            }
          return t;
        }
        constructor(e) {
          this.configProvider = new Promise((t, o) => {
            "function" == typeof e
              ? e()
                  .then((e) => {
                    t(this.resolveDefaultConfig(e));
                  })
                  .catch(o)
              : t(this.resolveDefaultConfig(e));
          });
        }
        destroy() {
          (this.config?.httpAgent?.destroy(), this.config?.httpsAgent?.destroy());
        }
        async handle(e, { abortSignal: t, requestTimeout: o } = {}) {
          this.config || (this.config = await this.configProvider);
          const r = this.config,
            c = r.logger,
            f = "https:" === e.protocol;
          return (
            f ||
              this.config.httpAgent ||
              (this.config.httpAgent = await this.config.httpAgentProvider()),
            new Promise((p, w) => {
              let T,
                y = -1,
                b = -1,
                A = -1,
                v = -1,
                E = -1;
              const k = () => {
                  (l.N.clearTimeout(y),
                    l.N.clearTimeout(b),
                    l.N.clearTimeout(A),
                    l.N.clearTimeout(v),
                    l.N.clearTimeout(E));
                },
                C = async (e) => {
                  (await T, k(), w(e));
                };
              if (t?.aborted) {
                const e = (0, s.F)(t);
                return void C(e);
              }
              const N = e.headers,
                R = !!N && "100-continue" === (N.Expect ?? N.expect);
              let S = f ? r.httpsAgent : r.httpAgent;
              (R &&
                !this.externalAgent &&
                (S = new (f ? u().Agent : h)({ keepAlive: !1, maxSockets: 1 / 0 })),
                (y = l.N.setTimeout(
                  () => {
                    this.socketWarningTimestamp = g.checkSocketUsage(
                      S,
                      this.socketWarningTimestamp,
                      c,
                    );
                  },
                  r.socketAcquisitionWarningTimeout ??
                    (r.requestTimeout ?? 2e3) + (r.connectionTimeout ?? 1e3),
                )));
              const O = e.query ? (0, n.buildQueryString)(e.query) : "";
              let I;
              if (null != e.username || null != e.password) {
                I = `${e.username ?? ""}:${e.password ?? ""}`;
              }
              let x = e.path;
              (O && (x += `?${O}`), e.fragment && (x += `#${e.fragment}`));
              let q = e.hostname ?? "";
              q = "[" === q[0] && q.endsWith("]") ? e.hostname.slice(1, -1) : e.hostname;
              const _ = {
                  headers: e.headers,
                  host: q,
                  method: e.method,
                  path: x,
                  port: e.port,
                  agent: S,
                  auth: I,
                },
                P = (f ? u().request : m)(_, (e) => {
                  (async (e) => {
                    (await T, k(), p(e));
                  })({
                    response: new n.HttpResponse({
                      statusCode: e.statusCode || -1,
                      reason: e.statusMessage,
                      headers: (0, a.u)(e.headers),
                      body: e,
                    }),
                  });
                });
              if (
                (P.on("error", (e) => {
                  i.includes(e.code) ? C(Object.assign(e, { name: "TimeoutError" })) : C(e);
                }),
                t)
              ) {
                const e = () => {
                  P.destroy();
                  const e = (0, s.F)(t);
                  C(e);
                };
                if ("function" == typeof t.addEventListener) {
                  const o = t;
                  (o.addEventListener("abort", e, { once: !0 }),
                    P.once("close", () => o.removeEventListener("abort", e)));
                } else t.onabort = e;
              }
              const L = o ?? r.requestTimeout;
              ((b = ((e, t, o = 0) => {
                if (!o) return -1;
                const r = (r) => {
                  const n = l.N.setTimeout(() => {
                      (e.destroy(),
                        t(
                          Object.assign(
                            new Error(
                              `@smithy/node-http-handler - the request socket did not establish a connection with the server within the configured timeout of ${o} ms.`,
                            ),
                            { name: "TimeoutError" },
                          ),
                        ));
                    }, o - r),
                    s = (e) => {
                      e?.connecting
                        ? e.on("connect", () => {
                            l.N.clearTimeout(n);
                          })
                        : l.N.clearTimeout(n);
                    };
                  e.socket ? s(e.socket) : e.on("socket", s);
                };
                return o < 2e3 ? (r(0), 0) : l.N.setTimeout(r.bind(null, 1e3), 1e3);
              })(P, C, r.connectionTimeout)),
                (A = ((e, t, o = 0, r, n) =>
                  o
                    ? l.N.setTimeout(() => {
                        let s = `@smithy/node-http-handler - [${r ? "ERROR" : "WARN"}] a request has exceeded the configured ${o} ms requestTimeout.`;
                        if (r) {
                          const o = Object.assign(new Error(s), {
                            name: "TimeoutError",
                            code: "ETIMEDOUT",
                          });
                          (e.destroy(o), t(o));
                        } else
                          ((s +=
                            " Init client requestHandler with throwOnRequestTimeout=true to turn this into an error."),
                            n?.warn?.(s));
                      }, o)
                    : -1)(P, C, L, r.throwOnRequestTimeout, c ?? console)),
                (v = ((e, t, o = 0) => {
                  const r = (r) => {
                    const n = o - r,
                      s = () => {
                        (e.destroy(),
                          t(
                            Object.assign(
                              new Error(
                                `@smithy/node-http-handler - the request socket timed out after ${o} ms of inactivity (configured by client requestHandler).`,
                              ),
                              { name: "TimeoutError" },
                            ),
                          ));
                      };
                    e.socket
                      ? (e.socket.setTimeout(n, s),
                        e.on("close", () => e.socket?.removeListener("timeout", s)))
                      : e.setTimeout(n, s);
                  };
                  return 0 < o && o < 6e3
                    ? (r(0), 0)
                    : l.N.setTimeout(r.bind(null, 0 === o ? 0 : 3e3), 3e3);
                })(P, C, r.socketTimeout)));
              const U = _.agent;
              ("object" == typeof U &&
                "keepAlive" in U &&
                (E = ((e, { keepAlive: t, keepAliveMsecs: o }, r = 3e3) => {
                  if (!0 !== t) return -1;
                  const n = () => {
                    e.socket
                      ? e.socket.setKeepAlive(t, o || 0)
                      : e.on("socket", (e) => {
                          e.setKeepAlive(t, o || 0);
                        });
                  };
                  return 0 === r ? (n(), 0) : l.N.setTimeout(n, r);
                })(P, { keepAlive: U.keepAlive, keepAliveMsecs: U.keepAliveMsecs })),
                (T = (0, d.f)(P, e, L, this.externalAgent).catch((e) => (k(), w(e)))));
            })
          );
        }
        updateHttpClientConfig(e, t) {
          ((this.config = void 0),
            (this.configProvider = this.configProvider.then((o) =>
              e === Symbol.for("logger") ? { ...o, logger: o.logger ?? t } : { ...o, [e]: t },
            )));
        }
        httpHandlerConfigs() {
          return this.config ?? {};
        }
        resolveDefaultConfig(e) {
          const {
              requestTimeout: t,
              connectionTimeout: r,
              socketTimeout: n,
              socketAcquisitionWarningTimeout: s,
              httpAgent: i,
              httpsAgent: a,
              throwOnRequestTimeout: c,
              logger: l,
            } = e || {},
            d = !0;
          return {
            connectionTimeout: r,
            requestTimeout: t,
            socketTimeout: n,
            socketAcquisitionWarningTimeout: s,
            throwOnRequestTimeout: c,
            httpAgentProvider: async () => {
              const e = await Promise.resolve().then(o.t.bind(o, 37067, 23)),
                { Agent: t, request: r } = e.default ?? e;
              return (
                (m = r),
                (h = t),
                i instanceof h || "function" == typeof i?.destroy
                  ? ((this.externalAgent = !0), i)
                  : new h({ keepAlive: d, maxSockets: 50, ...i })
              );
            },
            httpsAgent: (() =>
              a instanceof u().Agent || "function" == typeof a?.destroy
                ? ((this.externalAgent = !0), a)
                : new (u().Agent)({ keepAlive: d, maxSockets: 50, ...a }))(),
            logger: l,
          };
        }
      }
    },
    55936: (e, t, o) => {
      o.d(t, { n: () => s });
      var r = o(90443),
        n = o(6846);
      const s = (e) => {
        let t;
        if (
          ((t = "string" == typeof e ? (0, n.a)(e) : e),
          "object" != typeof t ||
            "number" != typeof t.byteOffset ||
            "number" != typeof t.byteLength)
        )
          throw new Error(
            "@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.",
          );
        return (0, r.Q)(t.buffer, t.byteOffset, t.byteLength).toString("base64");
      };
    },
    70904: (e, t, o) => {
      o.d(t, { N: () => r });
      const r = { setTimeout: (e, t) => setTimeout(e, t), clearTimeout: (e) => clearTimeout(e) };
    },
    86639: (e, t, o) => {
      o.d(t, { u: () => n });
      var r = o(96851);
      const n = (e) => {
        const t = {};
        for (const o in e) {
          if (!(0, r.hasOwn)(e, o)) continue;
          const n = e[o];
          t[o] = Array.isArray(n) ? n.join(",") : n;
        }
        return t;
      };
    },
    94804: (e, t, o) => {
      function r(e) {
        const t = e && "object" == typeof e && "reason" in e ? e.reason : void 0;
        if (t) {
          if (t instanceof Error) {
            const e = new Error("Request aborted");
            return ((e.name = "AbortError"), (e.cause = t), e);
          }
          const e = new Error(String(t));
          return ((e.name = "AbortError"), e);
        }
        const o = new Error("Request aborted");
        return ((o.name = "AbortError"), o);
      }
      o.d(t, { F: () => r });
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-exec/dist/369.js.map
