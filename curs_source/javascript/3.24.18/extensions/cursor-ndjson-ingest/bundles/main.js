(() => {
  "use strict";
  var e = {
      93: (e, t, r) => {
        (r.r(t),
          r.d(t, {
            DEFAULT_NDJSON_PORT_RANGE_END: () => h,
            DEFAULT_NDJSON_PORT_RANGE_START: () => f,
            NdjsonIngestServer: () => N,
            NdjsonServerStartError: () => w,
            chooseNdjsonPort: () => v,
            isPortAvailable: () => l,
            resolveLogger: () => d,
          }));
        const o = require("node:events"),
          n = require("node:fs"),
          s = require("node:http"),
          i = require("node:path"),
          a = require("node:stream/promises"),
          c = { info: () => {}, warn: () => {}, error: () => {} };
        function d(e) {
          return e ?? c;
        }
        const g = require("node:stream"),
          u = /^[a-zA-Z0-9-]+$/;
        async function l(e, t) {
          return new Promise((r) => {
            const o = s.createServer();
            (o.once("error", () => r(!1)),
              o.once("listening", () => {
                o.close(() => r(!0));
              }),
              o.listen(e, t));
          });
        }
        function p(e) {
          if (e && u.test(e)) return e;
        }
        const f = 7242,
          h = 7942;
        class w extends Error {
          constructor(e) {
            (super(e.message),
              (this.name = "NdjsonServerStartError"),
              (this.code = e.code),
              (this.port = e.port),
              void 0 !== e.cause && (this.cause = e.cause));
          }
        }
        async function v(e) {
          const t = e.configuredPort ?? 0;
          if (0 !== t) return t;
          const r = new Set((e.excludedPorts ?? []).filter((e) => e > 0)),
            o = e.previouslyAllocatedPort ?? 0;
          if (0 !== o && !r.has(o)) {
            if (await l(o, e.bindAddress))
              return (d(e.logger).info(`Reusing previously allocated port ${o}`), o);
            d(e.logger).info(
              `Previously allocated port ${o} is unavailable; scanning for a new port`,
            );
          }
          const n = e.rangeStart ?? f,
            s = e.rangeEnd ?? h;
          if (n > s) throw new Error(`Invalid port range ${n}-${s}`);
          const i = s - n + 1,
            a = Math.floor(Math.random() * i);
          for (let t = 0; t < i; t++) {
            const o = n + ((a + t) % i);
            if (!r.has(o) && (await l(o, e.bindAddress)))
              return (
                await e.onAutoAllocatedPort?.(o),
                d(e.logger).info(`Auto-allocated port ${o} and saved to internal storage`),
                o
              );
          }
          throw new Error(`No available ports in range ${n}-${s}`);
        }
        class N {
          constructor(e) {
            ((this.options = e),
              (this.currentPort = 0),
              (this.writeQueue = Promise.resolve()),
              (this.logger = d(e.logger)));
          }
          getLoopbackUrl() {
            if (this.currentPort)
              return `http://${this.options.bindAddress}:${this.currentPort}/ingest/${this.options.ingestPathId}`;
          }
          getLogDirectory() {
            return this.options.logDirectory;
          }
          getLogPathForSession(e) {
            const t = p(e);
            if (!t) throw new Error("Expected a valid debug session id");
            return (0, i.join)(this.options.logDirectory, `debug-${t}.log`);
          }
          async start() {
            if (this.server) return this.buildStartResult();
            n.mkdirSync(this.options.logDirectory, { recursive: !0 });
            const e = s.createServer((e, t) => this.handleRequest(e, t));
            try {
              await this.listen(e);
            } catch (t) {
              throw (
                e.removeAllListeners(),
                (function (e, t) {
                  if (e instanceof w) return e;
                  if (e instanceof Error) {
                    const r = e.message || `Failed to start NDJSON server on port ${t}`;
                    return new w({ message: r, port: t, code: y(e), cause: e });
                  }
                  return new w({
                    message: `Failed to start NDJSON server on port ${t}`,
                    port: t,
                    cause: e,
                  });
                })(t, this.options.port)
              );
            }
            this.server = e;
            const t = this.server.address();
            return (
              (this.currentPort = t?.port ?? 0),
              this.logger.info(
                `NDJSON ingest server started on port ${this.currentPort} in directory ${this.options.logDirectory}`,
              ),
              this.buildStartResult()
            );
          }
          async stop() {
            const e = this.server;
            e &&
              (e.closeAllConnections(),
              e.close(),
              await (0, o.once)(e, "close"),
              (this.server = void 0),
              (this.currentPort = 0));
          }
          async appendExclusive(e, t) {
            const r = async () => {
                const r = n.createWriteStream(t, { flags: "a" });
                await (0, a.pipeline)(
                  e,
                  (function () {
                    let e = 10;
                    return new g.Transform({
                      transform(t, r, o) {
                        (t.length > 0 && (e = t[t.length - 1]), o(null, t));
                      },
                      flush(t) {
                        (10 !== e && this.push(Buffer.from("\n")), t());
                      },
                    });
                  })(),
                  r,
                );
              },
              o = this.writeQueue.then(r, r);
            return (
              (this.writeQueue = o.catch((e) => {
                this.logger.error("Error appending to log file:", e);
              })),
              o
            );
          }
          buildStartResult() {
            const e = this.getLoopbackUrl();
            if (!e) throw new Error("NDJSON server is not listening");
            return { loopbackUrl: e, logDirectory: this.options.logDirectory };
          }
          async handleRequest(e, t) {
            if (
              (t.setHeader("Access-Control-Allow-Origin", "*"),
              t.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"),
              t.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Debug-Session-Id"),
              "OPTIONS" === e.method)
            )
              return (t.writeHead(200), void t.end());
            if ("POST" !== e.method || e.url !== `/ingest/${this.options.ingestPathId}`)
              return (t.writeHead(404), void t.end());
            const r = e.headers["x-debug-session-id"];
            if (void 0 === r)
              return (
                this.logger.warn(
                  "Rejected NDJSON ingest request without X-Debug-Session-Id header",
                ),
                t.writeHead(400),
                void t.end("missing-session-id")
              );
            if ("string" != typeof r)
              return (
                this.logger.warn(
                  "Rejected NDJSON ingest request with invalid X-Debug-Session-Id header",
                ),
                t.writeHead(400),
                void t.end("invalid-session-id")
              );
            const o = p(r);
            if (!o)
              return (
                this.logger.warn(
                  "Rejected NDJSON ingest request with invalid X-Debug-Session-Id header",
                ),
                t.writeHead(400),
                void t.end("invalid-session-id")
              );
            try {
              const r = this.getLogPathForSession(o);
              (await this.appendExclusive(e, r), t.writeHead(204), t.end());
            } catch (e) {
              (this.logger.error("NDJSON ingest write error:", e),
                t.writeHead(500),
                t.end("write-failed"));
            }
          }
          async listen(e) {
            (e.listen(this.options.port, this.options.bindAddress),
              await (0, o.once)(e, "listening"));
          }
        }
        function y(e) {
          if ("code" in e && "string" == typeof e.code) return e.code;
        }
      },
      184: function (e, t, r) {
        var o,
          n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, o) {
                  void 0 === o && (o = r);
                  var n = Object.getOwnPropertyDescriptor(t, r);
                  ((n && !("get" in n ? !t.__esModule : n.writable || n.configurable)) ||
                    (n = {
                      enumerable: !0,
                      get: function () {
                        return t[r];
                      },
                    }),
                    Object.defineProperty(e, o, n));
                }
              : function (e, t, r, o) {
                  (void 0 === o && (o = r), (e[o] = t[r]));
                }),
          s =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", { enumerable: !0, value: t });
                }
              : function (e, t) {
                  e.default = t;
                }),
          i =
            (this && this.__importStar) ||
            ((o = function (e) {
              return (
                (o =
                  Object.getOwnPropertyNames ||
                  function (e) {
                    var t = [];
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                    return t;
                  }),
                o(e)
              );
            }),
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r = o(e), i = 0; i < r.length; i++) "default" !== r[i] && n(t, e, r[i]);
              return (s(t, e), t);
            });
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.activate = async function (e) {
            (l.NdjsonIngestLogger.init(),
              e.subscriptions.push(
                g.workspace.onDidChangeConfiguration((t) => {
                  (t.affectsConfiguration("ndjson.port") ||
                    t.affectsConfiguration("ndjson.bindAddress")) &&
                    (function (e) {
                      (_(),
                        (y = setTimeout(() => {
                          ((y = void 0),
                            b(async () => {
                              if (!p || !N) return;
                              const t = g.workspace.getConfiguration("ndjson"),
                                r = t.get("bindAddress", "127.0.0.1"),
                                o = t.get("port", 0);
                              if (r === N.bindAddress && o === N.configuredPort) return;
                              const n = f;
                              (l.NdjsonIngestLogger.info(
                                "Server settings changed, restarting ingest server",
                              ),
                                await L());
                              const s = await E(e, { surface: n });
                              void 0 !== s &&
                                "string" != typeof s &&
                                l.NdjsonIngestLogger.info(
                                  "NDJSON ingest server restarted after settings change",
                                );
                            }));
                        }, 300)));
                    })(e);
                }),
              ),
              e.subscriptions.push(
                g.commands.registerCommand("cursor.ndjsonIngest.start", (t) =>
                  (function (e, t = {}) {
                    return b(() => E(e, t));
                  })(
                    e,
                    (function (e) {
                      if ("string" == typeof e) return { sessionId: e };
                      return e ?? {};
                    })(t),
                  ),
                ),
              ),
              e.subscriptions.push(
                g.commands.registerCommand("cursor.ndjsonIngest.stop", () => A()),
              ),
              e.subscriptions.push(
                g.commands.registerCommand("cursor.ndjsonIngest.copyCurl", async () => {
                  if (!h) return void g.window.showWarningMessage("Server is not running.");
                  const e = `curl -sS -H "Content-Type: application/x-ndjson" --data-binary '{"hello":"world"}' "${h.toString()}"`;
                  (await g.env.clipboard.writeText(e),
                    g.window.showInformationMessage(
                      "NDJSON Ingest: curl command copied to clipboard.",
                    ));
                }),
              ),
              e.subscriptions.push(
                g.commands.registerCommand("cursor.ndjsonIngest.reassignPort", (t) =>
                  (function (e, t) {
                    return b(async () => {
                      const r = m(t ?? f),
                        o = g.workspace.getConfiguration("ndjson").get("port", 0);
                      if (0 !== o)
                        return (
                          O(
                            `NDJSON Ingest: Cannot reassign the port while ndjson.port is pinned to ${o}. Set ndjson.port to 0 to use automatic workspace port assignment.`,
                          ),
                          `Cannot reassign pinned port ${o}`
                        );
                      const n = D(h || p?.getLoopbackUrl()) ?? j(e, r);
                      (0 !== n
                        ? l.NdjsonIngestLogger.info(
                            `Reassigning NDJSON ingest server away from sticky port ${n}`,
                          )
                        : l.NdjsonIngestLogger.info(
                            "Reassigning NDJSON ingest server to a fresh auto-allocated port",
                          ),
                        await I(e, r, 0),
                        await L());
                      const s = await E(e, {
                        ignoreStickyPort: !0,
                        excludedPorts: 0 !== n ? [n] : [],
                        surface: r,
                      });
                      if ("string" != typeof s && s) {
                        const e = D(s.externalUrl);
                        0 !== n && void 0 !== e && e !== n
                          ? g.window.showInformationMessage(
                              `NDJSON Ingest: Reassigned workspace port from ${n} to ${e} and restarted the server.`,
                            )
                          : void 0 !== e
                            ? g.window.showInformationMessage(
                                `NDJSON Ingest: Restarted the server on port ${e}.`,
                              )
                            : g.window.showInformationMessage(
                                "NDJSON Ingest: Reassigned workspace port and restarted the server.",
                              );
                      }
                      return s;
                    });
                  })(e, t),
                ),
              ),
              e.subscriptions.push(
                g.commands.registerCommand("cursor.ndjsonIngest.showStatus", () => {
                  h
                    ? g.window.showInformationMessage(`URL: ${h.toString()}`)
                    : g.window.showInformationMessage("NDJSON: server not running.");
                }),
              ));
          }),
          (t.deactivate = async function () {
            (_(), await A());
          }));
        const a = i(r(982)),
          c = r(857),
          d = r(928),
          g = i(r(398)),
          u = r(93),
          l = r(377);
        let p,
          f,
          h = "";
        const w = 1,
          v = "classic";
        let N,
          y,
          S = Promise.resolve();
        function b(e) {
          const t = S.then(e, e);
          return ((S = t.catch(() => {})), t);
        }
        function m(e) {
          return "glass" === e ? "glass" : v;
        }
        function P(e) {
          return "classic" === e
            ? { allocatedPortKey: "ndjson.allocatedPort", ingestPathIdKey: "ndjson.targetId" }
            : {
                allocatedPortKey: `ndjson.allocatedPort.${e}`,
                ingestPathIdKey: `ndjson.targetId.${e}`,
              };
        }
        function j(e, t) {
          return e.workspaceState.get(P(t).allocatedPortKey, 0);
        }
        async function I(e, t, r) {
          await e.workspaceState.update(P(t).allocatedPortKey, 0 === r ? void 0 : r);
        }
        function O(e) {
          g.window.showErrorMessage(e, "Change Port").then((e) => {
            "Change Port" === e &&
              g.commands.executeCommand("workbench.action.openWorkspaceSettings", "ndjson.port");
          });
        }
        function D(e) {
          if (e)
            try {
              const t = new URL(e);
              if (!t.port) return;
              const r = Number(t.port);
              return Number.isInteger(r) && r > 0 ? r : void 0;
            } catch (t) {
              return void l.NdjsonIngestLogger.warn(
                `Failed to parse NDJSON server URL while resolving port: ${e}`,
                t,
              );
            }
        }
        async function $(e, t, r) {
          const o = await e.start();
          ((p = e), (f = r));
          const n = g.Uri.parse(o.loopbackUrl);
          try {
            const e = await g.env.asExternalUri(n);
            h = e.toString();
          } catch (e) {
            (l.NdjsonIngestLogger.error("asExternalUri failed; using loopback URL", e),
              (h = n.toString()));
          }
          return { externalUrl: h, logPath: t ? e.getLogPathForSession(t) : "" };
        }
        async function L() {
          (l.NdjsonIngestLogger.info("Stopping NDJSON ingest server"),
            p &&
              (await p.stop().catch((e) => {
                l.NdjsonIngestLogger.error("Error stopping NDJSON ingest server:", e);
              }),
              (p = void 0),
              (h = ""),
              (f = void 0),
              (N = void 0)));
        }
        async function E(e, t = {}) {
          const r = m(t.surface ?? f);
          if (!g.workspace.isTrusted)
            return void g.window.showWarningMessage("debug mode disabled in untrusted workspace.");
          const o = g.workspace.workspaceFolders?.[0],
            n = o
              ? g.Uri.joinPath(o.uri, ".cursor").fsPath
              : (0, d.join)((0, c.homedir)(), ".cursor", "debug-logs");
          if (p) {
            const e = (0, d.resolve)(p.getLogDirectory()) === (0, d.resolve)(n),
              o = h || p.getLoopbackUrl();
            if (e)
              if (o) {
                if (void 0 === f || f === r)
                  return {
                    externalUrl: o,
                    logPath: t.sessionId ? p.getLogPathForSession(t.sessionId) : "",
                  };
                (l.NdjsonIngestLogger.info(
                  `Restarting NDJSON ingest server to switch from ${f} to ${r} sticky identity`,
                ),
                  await L());
              } else
                (l.NdjsonIngestLogger.warn(
                  "Server was set but no URL was available; stopping stale server.",
                ),
                  await L());
            else await L();
          }
          const s = g.workspace.getConfiguration("ndjson"),
            i = s.get("bindAddress", "127.0.0.1"),
            v = s.get("port", 0),
            y = 0 === v,
            S = j(e, r),
            b = t.ignoreStickyPort ? 0 : S,
            D = await (async function (e, t) {
              const { ingestPathIdKey: r } = P(t),
                o = e.workspaceState.get(r);
              if (o && o.length > 0) return o;
              const n = a.randomUUID();
              return (await e.workspaceState.update(r, n), n);
            })(e, r);
          let A,
            _ = !1;
          try {
            A = await (0, u.chooseNdjsonPort)({
              bindAddress: i,
              configuredPort: v,
              previouslyAllocatedPort: b,
              excludedPorts: t.excludedPorts,
              onAutoAllocatedPort: async (e) => {
                _ = !0;
              },
              logger: l.NdjsonIngestLogger,
            });
          } catch (e) {
            const t = e instanceof Error ? e.message : String(e);
            return (
              l.NdjsonIngestLogger.error("Failed to choose port:", e),
              g.window.showErrorMessage(`NDJSON Ingest: ${t}`),
              t
            );
          }
          const J = new u.NdjsonIngestServer({
              bindAddress: i,
              port: A,
              ingestPathId: D,
              logDirectory: n,
              logger: l.NdjsonIngestLogger,
            }),
            k = y && !t.ignoreStickyPort && 0 !== S && A === S;
          try {
            const o = await $(J, t.sessionId, r);
            if (((N = { bindAddress: i, configuredPort: v }), _))
              try {
                await I(e, r, A);
              } catch (e) {
                l.NdjsonIngestLogger.error(
                  "Failed to persist allocated port (server is running anyway):",
                  e,
                );
              }
            return o;
          } catch (o) {
            let n = o;
            if (o instanceof u.NdjsonServerStartError && "EADDRINUSE" === o.code && k) {
              (l.NdjsonIngestLogger.info(`Sticky port ${A} busy, retrying after brief delay...`),
                await new Promise((e) => setTimeout(e, 300)));
              try {
                const o = await $(J, t.sessionId, r);
                if (((N = { bindAddress: i, configuredPort: v }), _))
                  try {
                    await I(e, r, A);
                  } catch (e) {
                    l.NdjsonIngestLogger.error(
                      "Failed to persist allocated port (server is running anyway):",
                      e,
                    );
                  }
                return o;
              } catch (e) {
                n = e;
              }
            }
            const s = t.autoAllocatedPortRetryCount ?? w;
            if (n instanceof u.NdjsonServerStartError && "EADDRINUSE" === n.code && y && s > 0)
              return (
                l.NdjsonIngestLogger.info(
                  `Port ${A} was claimed by another process; retrying with a fresh auto-allocated port`,
                ),
                E(e, {
                  ...t,
                  surface: r,
                  ignoreStickyPort: !0,
                  excludedPorts: [...(t.excludedPorts ?? []), A],
                  autoAllocatedPortRetryCount: s - 1,
                })
              );
            if (n instanceof u.NdjsonServerStartError)
              return (function (e, t) {
                switch (e.code) {
                  case "EADDRINUSE":
                    return (
                      l.NdjsonIngestLogger.error(`Port ${e.port} is already in use`),
                      t
                        ? g.window.showErrorMessage(
                            `NDJSON Ingest: Cannot start server - port ${e.port} became unavailable. Please try again.`,
                          )
                        : O(
                            `NDJSON Ingest: Cannot start server - port ${e.port} is already in use. Try changing the port in settings or stopping the other service.`,
                          ),
                      "Port is already in use"
                    );
                  case "EACCES":
                    return (
                      l.NdjsonIngestLogger.error(`Permission denied for port ${e.port}`),
                      t
                        ? g.window.showErrorMessage(
                            `NDJSON Ingest: Permission denied for port ${e.port}. This is unexpected for auto-allocated ports.`,
                          )
                        : O(
                            `NDJSON Ingest: Permission denied for port ${e.port}. Try using a port number greater than 1024.`,
                          ),
                      `Permission denied for port ${e.port}`
                    );
                  default:
                    return (
                      l.NdjsonIngestLogger.error("NDJSON ingest server listen error:", e),
                      g.window.showErrorMessage(`NDJSON Ingest: Server error - ${e.message}`),
                      `Server error - ${e.message}`
                    );
                }
              })(n, y);
            const a = n instanceof Error ? n.message : String(n);
            return (
              l.NdjsonIngestLogger.error("NDJSON ingest server listen error:", n),
              g.window.showErrorMessage(`NDJSON Ingest: Server error - ${a}`),
              `Server error - ${a}`
            );
          }
        }
        function A() {
          return b(() => L());
        }
        function _() {
          void 0 !== y && (clearTimeout(y), (y = void 0));
        }
      },
      377: function (e, t, r) {
        var o,
          n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, o) {
                  void 0 === o && (o = r);
                  var n = Object.getOwnPropertyDescriptor(t, r);
                  ((n && !("get" in n ? !t.__esModule : n.writable || n.configurable)) ||
                    (n = {
                      enumerable: !0,
                      get: function () {
                        return t[r];
                      },
                    }),
                    Object.defineProperty(e, o, n));
                }
              : function (e, t, r, o) {
                  (void 0 === o && (o = r), (e[o] = t[r]));
                }),
          s =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", { enumerable: !0, value: t });
                }
              : function (e, t) {
                  e.default = t;
                }),
          i =
            (this && this.__importStar) ||
            ((o = function (e) {
              return (
                (o =
                  Object.getOwnPropertyNames ||
                  function (e) {
                    var t = [];
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                    return t;
                  }),
                o(e)
              );
            }),
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r = o(e), i = 0; i < r.length; i++) "default" !== r[i] && n(t, e, r[i]);
              return (s(t, e), t);
            });
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.NdjsonIngestLogger = void 0));
        const a = i(r(398));
        class c {
          static init() {
            c.output = a.window.createOutputChannel("NDJSON Ingest", { log: !0 });
          }
          static error(e, ...t) {
            (c.output || c.init(), c.output?.error(e, ...t));
          }
          static warn(e, ...t) {
            (c.output || c.init(), c.output?.warn(e, ...t));
          }
          static info(e, ...t) {
            (c.output || c.init(), c.output?.info(e, ...t));
          }
          static debug(e, ...t) {
            (c.output || c.init(), c.output?.debug(e, ...t));
          }
          static trace(e, ...t) {
            (c.output || c.init(), c.output?.trace(e, ...t));
          }
        }
        t.NdjsonIngestLogger = c;
      },
      398: (e) => {
        e.exports = require("vscode");
      },
      857: (e) => {
        e.exports = require("os");
      },
      928: (e) => {
        e.exports = require("path");
      },
      982: (e) => {
        e.exports = require("crypto");
      },
    },
    t = {};
  function r(o) {
    var n = t[o];
    if (void 0 !== n) return n.exports;
    var s = (t[o] = { exports: {} });
    return (e[o].call(s.exports, s, s.exports, r), s.exports);
  }
  ((r.d = (e, t) => {
    for (var o in t)
      r.o(t, o) && !r.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
  }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }));
  var o = r(184),
    n = exports;
  for (var s in o) n[s] = o[s];
  o.__esModule && Object.defineProperty(n, "__esModule", { value: !0 });
})();
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-ndjson-ingest/dist/main.js.map
