"use strict";
((exports.id = 750),
  (exports.ids = [369, 750]),
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
        h = o(90443),
        l = o(2203),
        d = o(55936),
        f = o(8353),
        m = o(86507);
      const p = (e) =>
          "function" == typeof ReadableStream &&
          (e?.constructor?.name === ReadableStream.name || e instanceof ReadableStream),
        g = "The stream has already been transformed.",
        y = (e) => {
          if (!w(e) && !p(e)) {
            throw new Error(
              `Unexpected stream implementation, expect Blob or ReadableStream, got ${e?.__proto__?.constructor?.name || e}`,
            );
          }
          let t = !1;
          const o = async () => {
            if (t) throw new Error(g);
            return ((t = !0), await (0, u.streamCollector)(e));
          };
          return Object.assign(e, {
            transformToByteArray: o,
            transformToString: async (e) => {
              const t = await o();
              if ("base64" === e) return (0, d.n)(t);
              if ("hex" === e) return (0, f.n)(t);
              if (void 0 === e || "utf8" === e || "utf-8" === e) return (0, m.P)(t);
              if ("function" == typeof TextDecoder) return new TextDecoder(e).decode(t);
              throw new Error(
                "TextDecoder is not available, please make sure polyfill is provided.",
              );
            },
            transformToWebStream: () => {
              if (t) throw new Error(g);
              if (((t = !0), w(e)))
                return ((e) => {
                  if ("function" != typeof e.stream)
                    throw new Error(
                      "Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body",
                    );
                  return e.stream();
                })(e);
              if (p(e)) return e;
              throw new Error(`Cannot transform payload to web stream, got ${e}`);
            },
          });
        },
        w = (e) => "function" == typeof Blob && e instanceof Blob,
        T = "The stream has already been transformed.";
      async function b(e, t) {
        const o = ((e) => {
            if (!(e instanceof l.Readable))
              try {
                return y(e);
              } catch (t) {
                throw new Error(
                  `Unexpected stream implementation, expect Stream.Readable instance, got ${e?.__proto__?.constructor?.name || e}`,
                );
              }
            let t = !1;
            const o = async () => {
              if (t) throw new Error(T);
              return ((t = !0), await (0, u.streamCollector)(e));
            };
            return Object.assign(e, {
              transformToByteArray: o,
              transformToString: async (e) => {
                const t = await o();
                return void 0 === e || Buffer.isEncoding(e)
                  ? (0, h.Q)(t.buffer, t.byteOffset, t.byteLength).toString(e)
                  : new TextDecoder(e).decode(t);
              },
              transformToWebStream: () => {
                if (t) throw new Error(T);
                if (null !== e.readableFlowing)
                  throw new Error("The stream has been consumed by other callbacks.");
                if ("function" != typeof l.Readable.toWeb)
                  throw new Error(
                    "Readable.toWeb() is not supported. Please ensure a polyfill is available.",
                  );
                return ((t = !0), l.Readable.toWeb(e));
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
          h =
            e.awsContainerAuthorizationTokenFile ??
            process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE,
          l =
            "NoOpLogger" !== e.logger?.constructor?.name && e.logger?.warn
              ? e.logger.warn.bind(e.logger)
              : console.warn;
        if (
          (o &&
            i &&
            (l(
              "@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.",
            ),
            l("awsContainerCredentialsFullUri will take precedence.")),
          u &&
            h &&
            (l(
              "@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.",
            ),
            l("awsContainerAuthorizationToken will take precedence.")),
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
        const d = new URL(t);
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
        })(d, e.logger);
        const f = n.$.create({
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
            })(d);
            u
              ? (t.headers.Authorization = u)
              : h && (t.headers.Authorization = (await a().readFile(h)).toString());
            try {
              return b((await f.handle(t)).response).then((e) =>
                (0, r.setCredentialFeature)(e, "CREDENTIALS_HTTP", "z"),
              );
            } catch (t) {
              throw new s.C(String(t), { logger: e.logger });
            }
          }),
          (p = e.maxRetries ?? 3),
          (g = e.timeout ?? 1e3),
          async () => {
            for (let e = 0; e < p; ++e)
              try {
                return await m();
              } catch (e) {
                await new Promise((e) => setTimeout(e, g));
              }
            return await m();
          }
        );
        var m, p, g;
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
          h = !0;
        (i ||
          "100-continue" !== c ||
          (h = await Promise.race([
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
          h &&
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
      o.d(t, { w: () => d, $: () => p });
      var r = o(96851),
        n = o(73931),
        s = o(94804);
      const i = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
      var a = o(86639),
        c = o(44708),
        u = o.n(c),
        h = o(70904);
      var l = o(29428);
      const d = 0;
      let f, m;
      class p {
        config;
        configProvider;
        socketWarningTimestamp = 0;
        externalAgent = !1;
        metadata = { handlerProtocol: "http/1.1" };
        static create(e) {
          return "function" == typeof e?.handle ? e : new p(e);
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
            d = "https:" === e.protocol;
          return (
            d ||
              this.config.httpAgent ||
              (this.config.httpAgent = await this.config.httpAgentProvider()),
            new Promise((g, y) => {
              let w,
                T = -1,
                b = -1,
                A = -1,
                v = -1,
                E = -1;
              const k = () => {
                  (h.N.clearTimeout(T),
                    h.N.clearTimeout(b),
                    h.N.clearTimeout(A),
                    h.N.clearTimeout(v),
                    h.N.clearTimeout(E));
                },
                C = async (e) => {
                  (await w, k(), y(e));
                };
              if (t?.aborted) {
                const e = (0, s.F)(t);
                return void C(e);
              }
              const N = e.headers,
                R = !!N && "100-continue" === (N.Expect ?? N.expect);
              let S = d ? r.httpsAgent : r.httpAgent;
              (R &&
                !this.externalAgent &&
                (S = new (d ? u().Agent : f)({ keepAlive: !1, maxSockets: 1 / 0 })),
                (T = h.N.setTimeout(
                  () => {
                    this.socketWarningTimestamp = p.checkSocketUsage(
                      S,
                      this.socketWarningTimestamp,
                      c,
                    );
                  },
                  r.socketAcquisitionWarningTimeout ??
                    (r.requestTimeout ?? 2e3) + (r.connectionTimeout ?? 1e3),
                )));
              const q = e.query ? (0, n.buildQueryString)(e.query) : "";
              let O;
              if (null != e.username || null != e.password) {
                O = `${e.username ?? ""}:${e.password ?? ""}`;
              }
              let I = e.path;
              (q && (I += `?${q}`), e.fragment && (I += `#${e.fragment}`));
              let x = e.hostname ?? "";
              x = "[" === x[0] && x.endsWith("]") ? e.hostname.slice(1, -1) : e.hostname;
              const _ = {
                  headers: e.headers,
                  host: x,
                  method: e.method,
                  path: I,
                  port: e.port,
                  agent: S,
                  auth: O,
                },
                P = (d ? u().request : m)(_, (e) => {
                  (async (e) => {
                    (await w, k(), g(e));
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
                  const n = h.N.setTimeout(() => {
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
                            h.N.clearTimeout(n);
                          })
                        : h.N.clearTimeout(n);
                    };
                  e.socket ? s(e.socket) : e.on("socket", s);
                };
                return o < 2e3 ? (r(0), 0) : h.N.setTimeout(r.bind(null, 1e3), 1e3);
              })(P, C, r.connectionTimeout)),
                (A = ((e, t, o = 0, r, n) =>
                  o
                    ? h.N.setTimeout(() => {
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
                    : h.N.setTimeout(r.bind(null, 0 === o ? 0 : 3e3), 3e3);
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
                  return 0 === r ? (n(), 0) : h.N.setTimeout(n, r);
                })(P, { keepAlive: U.keepAlive, keepAliveMsecs: U.keepAliveMsecs })),
                (w = (0, l.f)(P, e, L, this.externalAgent).catch((e) => (k(), y(e)))));
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
              logger: h,
            } = e || {},
            l = !0;
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
                (f = t),
                i instanceof f || "function" == typeof i?.destroy
                  ? ((this.externalAgent = !0), i)
                  : new f({ keepAlive: l, maxSockets: 50, ...i })
              );
            },
            httpsAgent: (() =>
              a instanceof u().Agent || "function" == typeof a?.destroy
                ? ((this.externalAgent = !0), a)
                : new (u().Agent)({ keepAlive: l, maxSockets: 50, ...a }))(),
            logger: h,
          };
        }
      }
    },
    50333: (e, t, o) => {
      o.d(t, { K: () => r });
      class r {
        method;
        protocol;
        hostname;
        port;
        path;
        query;
        headers;
        username;
        password;
        fragment;
        body;
        constructor(e) {
          ((this.method = e.method || "GET"),
            (this.hostname = e.hostname || "localhost"),
            (this.port = e.port),
            (this.query = e.query || {}),
            (this.headers = e.headers || {}),
            (this.body = e.body),
            (this.protocol = e.protocol
              ? ":" !== e.protocol.slice(-1)
                ? `${e.protocol}:`
                : e.protocol
              : "https:"),
            (this.path = e.path ? ("/" !== e.path.charAt(0) ? `/${e.path}` : e.path) : "/"),
            (this.username = e.username),
            (this.password = e.password),
            (this.fragment = e.fragment));
        }
        static clone(e) {
          const t = new r({ ...e, headers: { ...e.headers } });
          var o;
          return (
            t.query &&
              (t.query =
                ((o = t.query),
                Object.keys(o).reduce((e, t) => {
                  const r = o[t];
                  return { ...e, [t]: Array.isArray(r) ? [...r] : r };
                }, {}))),
            t
          );
        }
        static isInstance(e) {
          if (!e) return !1;
          const t = e;
          return (
            "method" in t &&
            "protocol" in t &&
            "hostname" in t &&
            "path" in t &&
            "object" == typeof t.query &&
            "object" == typeof t.headers
          );
        }
        clone() {
          return r.clone(this);
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
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-local-agent-runtime/dist/750.js.map
