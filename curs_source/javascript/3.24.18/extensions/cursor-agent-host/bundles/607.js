"use strict";
((exports.id = 607),
  (exports.ids = [607]),
  (exports.modules = {
    13607: (n, e, t) => {
      t.d(e, { connectProductDaemon: () => z });
      var o = t(77598),
        a = t(91398);
      const i = "agentHost.clientInstanceId";
      async function s(n, e) {
        const t = (function (n) {
            const e = void 0 === n.nativeWindowId ? "unknown" : String(n.nativeWindowId),
              t = n.windowWorkspaceId?.trim() || "none";
            return `${i}.w${e}.${n.role}.${t}`;
          })(
            e ?? {
              nativeWindowId: a.cursor.nativeWindowId,
              role: a.cursor.glassWorkspaceRole ?? "ide",
              windowWorkspaceId: a.cursor.windowWorkspaceId,
            },
          ),
          s = n.get(t);
        if ("string" == typeof s && s.trim().length > 0) return s.trim();
        const r = (0, o.randomUUID)();
        return (await n.update(t, r), r);
      }
      var r = t(51455),
        d = t(76760),
        c = t(77030),
        l = t(60525),
        u = t(36038),
        h = t(85113);
      const p = {
        typeName: "agent.v1.AgentHostService",
        methods: {
          createSession: { name: "CreateSession", I: l.Hz, O: l.R1, kind: u.MethodKind.Unary },
          forkSession: { name: "ForkSession", I: l.zF, O: l.BZ, kind: u.MethodKind.Unary },
          listSessions: { name: "ListSessions", I: l.cK, O: l.Qk, kind: u.MethodKind.Unary },
          hasSession: { name: "HasSession", I: l.bq, O: l.pI, kind: u.MethodKind.Unary },
          watchSessions: {
            name: "WatchSessions",
            I: l.N9,
            O: l.cy,
            kind: u.MethodKind.ServerStreaming,
          },
          listWorkspaces: { name: "ListWorkspaces", I: l.XO, O: l.LX, kind: u.MethodKind.Unary },
          listSkills: { name: "ListSkills", I: l.re, O: l.nP, kind: u.MethodKind.Unary },
          sendMessage: { name: "SendMessage", I: l.AY, O: l.Ot, kind: u.MethodKind.Unary },
          sendAction: { name: "SendAction", I: l.J6, O: l.Jn, kind: u.MethodKind.Unary },
          deleteSession: { name: "DeleteSession", I: l.mq, O: l.mY, kind: u.MethodKind.Unary },
          interruptTurn: { name: "InterruptTurn", I: l.ty, O: l.n4, kind: u.MethodKind.Unary },
          cancelQueuedTurn: {
            name: "CancelQueuedTurn",
            I: l.To,
            O: l.ZS,
            kind: u.MethodKind.Unary,
          },
          reorderQueuedTurns: {
            name: "ReorderQueuedTurns",
            I: l.J4,
            O: l.j2,
            kind: u.MethodKind.Unary,
          },
          editQueuedTurn: { name: "EditQueuedTurn", I: l.dC, O: l.vq, kind: u.MethodKind.Unary },
          respondToInteraction: {
            name: "RespondToInteraction",
            I: l.nK,
            O: l.Th,
            kind: u.MethodKind.Unary,
          },
          watchSessionInteractions: {
            name: "WatchSessionInteractions",
            I: l.X7,
            O: l.Mt,
            kind: u.MethodKind.ServerStreaming,
          },
          watchSessionBackgroundWork: {
            name: "WatchSessionBackgroundWork",
            I: l.j$,
            O: l.Ml,
            kind: u.MethodKind.ServerStreaming,
          },
          watchSessionTurnLifecycle: {
            name: "WatchSessionTurnLifecycle",
            I: l.X,
            O: l.m$,
            kind: u.MethodKind.ServerStreaming,
          },
          abortBackgroundWork: {
            name: "AbortBackgroundWork",
            I: l.c_,
            O: l.k4,
            kind: u.MethodKind.Unary,
          },
          abortAllBackgroundWork: {
            name: "AbortAllBackgroundWork",
            I: l.vC,
            O: l.fF,
            kind: u.MethodKind.Unary,
          },
          watchAgentHostSessionShellOutput: {
            name: "WatchAgentHostSessionShellOutput",
            I: l.Fg,
            O: l.k9,
            kind: u.MethodKind.ServerStreaming,
          },
          writeAgentHostSessionShellInput: {
            name: "WriteAgentHostSessionShellInput",
            I: l.Ev,
            O: l.Qf,
            kind: u.MethodKind.Unary,
          },
          attachSession: {
            name: "AttachSession",
            I: l.EM,
            O: l.cp,
            kind: u.MethodKind.ServerStreaming,
          },
          getSessionBlobs: { name: "GetSessionBlobs", I: l.z4, O: l.NY, kind: u.MethodKind.Unary },
          readFile: { name: "ReadFile", I: l.Xi, O: l.JK, kind: u.MethodKind.ServerStreaming },
          getDaemonInfo: { name: "GetDaemonInfo", I: l.OZ, O: l.D7, kind: u.MethodKind.Unary },
          shutdownDaemon: { name: "ShutdownDaemon", I: l.H0, O: l.Zi, kind: u.MethodKind.Unary },
          updateDaemonAuth: {
            name: "UpdateDaemonAuth",
            I: l.IO,
            O: l.Wn,
            kind: u.MethodKind.Unary,
          },
          setSessionTitle: { name: "SetSessionTitle", I: l.aq, O: l.Pg, kind: u.MethodKind.Unary },
          openAgentHostSurfaceChannel: {
            name: "OpenAgentHostSurfaceChannel",
            I: h.HG,
            O: h.ww,
            kind: u.MethodKind.ServerStreaming,
          },
          respondAgentHostSurfaceCallback: {
            name: "RespondAgentHostSurfaceCallback",
            I: h.a,
            O: h.q_,
            kind: u.MethodKind.Unary,
          },
          pushAgentHostSessionPermissions: {
            name: "PushAgentHostSessionPermissions",
            I: h.DL,
            O: h.pj,
            kind: u.MethodKind.Unary,
          },
        },
      };
      var m = t(18021),
        g = t(12865);
      const w = "http://127.0.0.1",
        f = 128;
      function k(n) {
        const e = {
            socketPath: n.socketPath,
            maxSessionMemory: f,
            createConnection: () => c.connect(n.socketPath),
          },
          t = new g.gE(w, void 0, e),
          o = (0, g.Aw)({ baseUrl: w, httpVersion: "2", sessionManager: t });
        return {
          client: (0, m.UU)(p, o),
          close: () => {
            t.abort();
          },
        };
      }
      var S = t(48161);
      const b = ".cursor-agents",
        I = "daemon.sock";
      function v(n) {
        return (0, d.join)(n, b);
      }
      function E(n) {
        return `unix://${n.path}`;
      }
      var y = t(42761),
        O = t(47777);
      const P = "1";
      async function C(n, e = {}) {
        return n.getDaemonInfo(
          new l.OZ({
            expectedApiSchemaRevision: e.expectedApiSchemaRevision ?? P,
            desiredLocalLoopEnabled: !0 === e.desiredLocalLoopEnabled,
            allowNewerSchema: e.allowNewerSchema,
          }),
        );
      }
      var M = t(31421),
        D = t(73024);
      const _ = ["dist", "agent-host-daemon"],
        U = ["dist", "bin", "daemon.cjs"],
        R = [
          "dist/node_modules/tree-sitter/build/Release/tree_sitter_runtime_binding.node",
          "dist/node_modules/tree-sitter-bash/build/Release/tree_sitter_bash_binding.node",
        ],
        H = [
          "dist/node_modules/tree-sitter/package.json",
          "dist/node_modules/tree-sitter/index.js",
          "dist/node_modules/tree-sitter-bash/package.json",
          "dist/node_modules/tree-sitter-bash/bindings/node/index.js",
          "dist/node_modules/node-gyp-build/package.json",
        ];
      function L(n, e) {
        return (0, d.join)(n, e);
      }
      function x(n) {
        const e = (function (n) {
            return (0, d.join)(n, ..._);
          })(n),
          t = L(e, U.join("/")),
          o = R.map((n) => L(e, n));
        return { extensionPath: n, packagedDaemonRoot: e, daemonCjsPath: t, nativeBindingPaths: o };
      }
      const K = ["CURSOR_API_KEY", "CURSOR_SERVICE_ACCOUNT_KEY"];
      function A(n) {
        const e = x(n.extensionPath);
        !(function (n) {
          if (!(0, D.existsSync)(n.daemonCjsPath))
            throw new Error(
              `packaged agent-host-daemon entry missing: ${n.daemonCjsPath}. Run the cursor-agent-host compile-dist pipeline so dist/agent-host-daemon is copied.`,
            );
          const e = [...n.nativeBindingPaths, ...H.map((e) => L(n.packagedDaemonRoot, e))].filter(
            (n) => !(0, D.existsSync)(n),
          );
          if (e.length > 0)
            throw new Error(
              `packaged agent-host-daemon native tree is incomplete (missing ${e.join(", ")}). The host bundler must copy dist/node_modules from @anysphere/agent-host-daemon, not skip natives.`,
            );
        })(e);
        const t = (function () {
          const n = a.env.bundledNodePath?.();
          if (void 0 !== n && n.length > 0) return n;
          if (process.versions.electron)
            throw new Error(
              "vscode.env.bundledNodePath() is required to spawn the packaged agent-host-daemon in Electron; refusing process.execPath because that would start a second Cursor instance",
            );
          return process.execPath;
        })();
        !(function (n) {
          const e = (0, d.basename)(n);
          if ("node" !== e && "node.exe" !== e)
            throw new Error(
              `packaged daemon must be launched with bundled Node (basename node/node.exe), got ${n}`,
            );
          if (process.versions.electron && n === process.execPath)
            throw new Error(
              "packaged daemon must not spawn process.execPath inside Electron (that is a second Cursor)",
            );
        })(t);
        const o = (function (n) {
          const e = [n.daemonCjsPath, "--listen", ((t = n.listen), `unix://${t.path}`)];
          var t;
          return (
            !0 === n.localLoop && e.push("--local-loop"),
            !0 === n.updaterEnabled && e.push("--updater"),
            !0 === n.nativeCloudSubagents && e.push("--native-cloud-subagents"),
            !0 === n.surfaceOwnsBackgroundWakeups && e.push("--surface-owns-background-wakeups"),
            void 0 !== n.projectDir && e.push("--project-dir", n.projectDir),
            void 0 !== n.blobsDir && e.push("--blobs-dir", n.blobsDir),
            e
          );
        })({
          daemonCjsPath: e.daemonCjsPath,
          listen: n.listen,
          localLoop: n.localLoop,
          updaterEnabled: n.updaterEnabled,
          nativeCloudSubagents: n.nativeCloudSubagents,
          surfaceOwnsBackgroundWakeups: n.surfaceOwnsBackgroundWakeups,
          projectDir: n.projectDir,
          blobsDir: n.blobsDir,
        });
        !(function (n) {
          const e = n[0];
          if (void 0 === e || !e.endsWith("daemon.cjs"))
            throw new Error(
              `packaged daemon argv must start with dist/bin/daemon.cjs, got ${JSON.stringify(n)}`,
            );
          if (
            n.some(
              (n) => n.endsWith(".mjs") || n.includes("tsx") || n.endsWith("agent-host-daemon.mjs"),
            )
          )
            throw new Error(
              `packaged daemon argv must not use the .mjs wrapper or tsx: ${JSON.stringify(n)}`,
            );
        })(o);
        return {
          command: t,
          argv: o,
          env: (function (n, e) {
            let t = (function (n, e) {
              return void 0 === e || 0 === e.trim().length
                ? n
                : { ...n, CURSOR_API_ENDPOINT: e.trim() };
            })(n, e.apiEndpoint);
            const o = e.ripgrepPath?.trim();
            void 0 !== o && o.length > 0 && (t = { ...t, CURSOR_AGENT_HOST_RIPGREP_PATH: o });
            const a = e.sandboxHelperPath?.trim();
            return (
              void 0 !== a &&
                a.length > 0 &&
                (t = { ...t, CURSOR_AGENT_HOST_SANDBOX_HELPER_PATH: a }),
              t
            );
          })(
            (function (n, e) {
              const t = { ...n, ELECTRON_RUN_AS_NODE: "1", HOME: e, USERPROFILE: e };
              for (const n of K) delete t[n];
              return t;
            })(n.env ?? process.env, n.homeDir),
            n.networkEnv ?? {},
          ),
          cwd: n.cwd ?? e.packagedDaemonRoot,
          layout: e,
          listen: n.listen,
          homeDir: n.homeDir,
        };
      }
      function j(n) {
        const e = A(n);
        return {
          child: (0, M.spawn)(e.command, [...e.argv], {
            cwd: e.cwd,
            env: e.env,
            detached: n.detached ?? !0,
            stdio: n.stdio ?? ["ignore", "ignore", "pipe"],
          }),
          plan: e,
        };
      }
      const W = 6e4,
        T = 50,
        N = 5e3;
      async function B(n) {
        const e = !0 === n.localLoopEnabled,
          t = n.env ?? process.env,
          a =
            n.homeDir ??
            (function (n = process.env) {
              const e = n.HOME ?? n.USERPROFILE;
              return void 0 !== e && e.length > 0 ? e : (0, S.homedir)();
            })(t),
          i =
            n.listen ??
            (function (n) {
              return { kind: "unix", path: (0, d.join)(v(n), I) };
            })(a),
          s = n.clientInstanceId ?? (0, o.randomUUID)(),
          c = n.waitForReadyMs ?? W,
          l = await F(i.path, e);
        if ("ready" === l.kind)
          return $({
            clientInstanceId: s,
            clientHandle: l.clientHandle,
            info: l.info,
            listen: i,
            localLoopEnabled: e,
            didSpawn: !1,
          });
        ("mismatch" === l.kind && (await q(i.path, e)),
          await (0, r.mkdir)(a, { recursive: !0 }),
          await (0, r.mkdir)((0, d.dirname)(i.path), { recursive: !0 }));
        const u = (n.spawnDaemon ?? j)({
          extensionPath: n.extensionPath,
          listen: i,
          homeDir: a,
          env: t,
          localLoop: e,
          updaterEnabled: !0 === n.updaterEnabled,
          nativeCloudSubagents: !0 === n.nativeCloudSubagents,
          surfaceOwnsBackgroundWakeups: !0 === n.surfaceOwnsBackgroundWakeups,
          networkEnv: {
            apiEndpoint: n.apiEndpoint,
            ripgrepPath: n.ripgrepPath,
            sandboxHelperPath: n.sandboxHelperPath,
          },
          detached: !0,
          stdio: ["ignore", "ignore", "ignore"],
        });
        u.child.unref();
        try {
          return await (async function (n) {
            const e = Date.now() + n.waitForReadyMs;
            let t;
            for (; Date.now() < e;) {
              if (null !== n.child.exitCode || null !== n.child.signalCode) {
                t ??= Date.now();
                const e = await F(n.listen.path, n.localLoopEnabled);
                if ("ready" === e.kind)
                  return $({
                    clientInstanceId: n.clientInstanceId,
                    clientHandle: e.clientHandle,
                    info: e.info,
                    listen: n.listen,
                    localLoopEnabled: n.localLoopEnabled,
                    didSpawn: !1,
                  });
                if (
                  ("mismatch" === e.kind && (await q(n.listen.path, n.localLoopEnabled)),
                  Date.now() - t >= N)
                )
                  throw new Error(
                    `packaged agent-host-daemon exited before handshake at ${E(n.listen)}`,
                  );
                await Q(T);
                continue;
              }
              const e = await F(n.listen.path, n.localLoopEnabled);
              if ("ready" === e.kind) {
                const t = void 0 !== n.child.pid && e.info.processPid === n.child.pid;
                return $({
                  clientInstanceId: n.clientInstanceId,
                  clientHandle: e.clientHandle,
                  info: e.info,
                  listen: n.listen,
                  localLoopEnabled: n.localLoopEnabled,
                  didSpawn: t,
                });
              }
              ("mismatch" === e.kind && (await q(n.listen.path, n.localLoopEnabled)), await Q(T));
            }
            throw new Error(
              `timed out after ${String(n.waitForReadyMs)}ms waiting for packaged agent-host-daemon at ${E(n.listen)}`,
            );
          })({
            child: u.child,
            listen: i,
            localLoopEnabled: e,
            clientInstanceId: s,
            waitForReadyMs: c,
          });
        } catch (n) {
          const t = await F(i.path, e);
          if ("ready" === t.kind)
            return $({
              clientInstanceId: s,
              clientHandle: t.clientHandle,
              info: t.info,
              listen: i,
              localLoopEnabled: e,
              didSpawn: !1,
            });
          throw (
            (function (n) {
              if (null !== n.exitCode || null !== n.signalCode) return;
              n.kill("SIGTERM");
            })(u.child),
            "mismatch" === t.kind && (await q(i.path, e)),
            n
          );
        }
      }
      function $(n) {
        let e = !1;
        return {
          clientInstanceId: n.clientInstanceId,
          client: n.clientHandle.client,
          info: n.info,
          listen: n.listen,
          localLoopEnabled: n.localLoopEnabled,
          didSpawn: n.didSpawn,
          close: () => {
            e || ((e = !0), n.clientHandle.close());
          },
        };
      }
      async function F(n, e) {
        const t = k({ socketPath: n });
        try {
          return {
            kind: "ready",
            clientHandle: t,
            info: await C(t.client, { desiredLocalLoopEnabled: e }),
          };
        } catch (n) {
          return (
            t.close(),
            (function (n) {
              return (
                n instanceof y.T &&
                (n.code === O.C.FailedPrecondition || n.code === O.C.Unimplemented)
              );
            })(n)
              ? { kind: "mismatch", error: n }
              : { kind: "unreachable" }
          );
        }
      }
      async function q(n, e) {
        const t = k({ socketPath: n });
        try {
          throw (
            await (async function (n, e = {}, t) {
              try {
                return await C(n, e);
              } catch (n) {
                throw (
                  (o = { didSpawnThisDaemon: !1, runningSessionCount: 0, terminate: t })
                    .didSpawnThisDaemon &&
                    (o.runningSessionCount > 0 || o.terminate),
                  n
                );
              }
              var o;
            })(t.client, { desiredLocalLoopEnabled: e }),
            new Error("agent-host-daemon handshake mismatch did not fail loud")
          );
        } finally {
          t.close();
        }
      }
      function Q(n) {
        return new Promise((e) => {
          setTimeout(e, n);
        });
      }
      const G = ["agent_host_plugins.v1", "agent_host_agent_store.v1", "auth_refresh.v1"];
      function J(n, e = G) {
        const t = new Set(n.map((n) => n.trim()).filter((n) => n.length > 0));
        return e.filter((n) => !t.has(n));
      }
      class X extends Error {
        constructor(n) {
          (super(`agent-host-daemon is busy and missing required capabilities: ${n.join(", ")}`),
            (this.name = "BusyIncompatibleDaemonError"));
        }
      }
      async function Y(n) {
        try {
          await n.shutdownDaemon(
            new l.H0({
              onlyIfIdle: !0,
              reason: "cursor-agent-host: replace idle daemon missing capabilities",
            }),
          );
        } catch (n) {
          if (
            !(function (n) {
              if (!(n instanceof y.T)) return !1;
              if (n.code === O.C.Unavailable || n.code === O.C.Aborted || n.code === O.C.Canceled)
                return !0;
              if (n.code === O.C.Internal) {
                const e = n.message.toLowerCase();
                return (
                  e.includes("missing status") ||
                  e.includes("protocol error") ||
                  e.includes("stream closed")
                );
              }
              return !1;
            })(n)
          )
            throw n;
        }
      }
      async function Z(n) {
        const e = J(n.info.capabilities ?? []);
        if (0 === e.length) return "compatible";
        if (n.info.runningSessionCount > 0) throw new X(e);
        return (await Y(n.client), "idle-replaced");
      }
      async function z(n) {
        if ("win32" === (n.platform ?? process.platform))
          throw new Error(
            "cursor_agent_host_move_exec ON is not supported on Windows in this cut (no named pipes)",
          );
        const e = n.clientInstanceId ?? (await s(n.globalState)),
          t = n.connect ?? B,
          o = () =>
            t({
              extensionPath: n.extensionPath,
              localLoopEnabled: n.localLoopEnabled,
              updaterEnabled: n.updaterEnabled,
              nativeCloudSubagents: n.nativeCloudSubagentsEnabled,
              surfaceOwnsBackgroundWakeups: !0,
              clientInstanceId: e,
              apiEndpoint: n.apiEndpoint,
              ripgrepPath: n.ripgrepPath,
              sandboxHelperPath: n.sandboxHelperPath,
              homeDir: n.homeDir,
              listen: n.listen,
              env: n.env,
              waitForReadyMs: n.waitForReadyMs,
              spawnDaemon: n.spawnDaemon,
            });
        let a = await o();
        try {
          if ("idle-replaced" === (await Z({ client: a.client, info: a.info }))) {
            (a.close(), (a = await o()));
            if ("compatible" !== (await Z({ client: a.client, info: a.info })))
              throw new Error(
                `respawned agent-host-daemon is still missing required capabilities: ${J(a.info.capabilities ?? []).join(", ")}`,
              );
          }
        } catch (n) {
          throw (a.close(), n);
        }
        return a;
      }
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-host/dist/607.js.map
