"use strict";
((exports.id = 914),
  (exports.ids = [914]),
  (exports.modules = {
    41914: (e, t, n) => {
      n.d(t, { createDaemonAgentHostProvider: () => m });
      var s = n(91398),
        a = n(60525),
        o = n(85113);
      function i(e) {
        return void 0 === (t = e.request.workspacePathsFilter) ||
          0 === t.length ||
          t.every((e) => 0 === e.trim().length)
          ? (function (e) {
              const t = ((n = e.workspacePaths), [...n].filter((e) => e.trim().length > 0));
              var n;
              if (
                (!0 === e.isGlassRoot && 0 === t.length && t.push(e.clientInstanceId),
                0 === t.length)
              )
                throw new Error(
                  "agent-host: workspace_paths_filter must be non-empty (daemon fail-closed)",
                );
              return new a.cK({
                workspacePathsFilter: t,
                includeChildren: e.includeChildren,
                parentSessionId: e.parentSessionId,
                limit: e.limit,
                ownerClientInstanceId: !0 === e.isGlassRoot ? e.clientInstanceId : void 0,
                includeOwnerUnrootedSessions: !0 === e.isGlassRoot || void 0,
              });
            })({
              workspacePaths: e.windowWorkspacePaths,
              clientInstanceId: e.clientInstanceId,
              isGlassRoot: e.isGlassRoot,
              includeChildren: e.request.includeChildren,
              parentSessionId:
                (e.request.parentSessionId ?? "").length > 0 ? e.request.parentSessionId : void 0,
              limit: e.request.limit,
            })
          : !0 === e.isGlassRoot && 0 === (e.request.ownerClientInstanceId ?? "").length
            ? new a.cK({
                includeChildren: e.request.includeChildren,
                parentSessionId: e.request.parentSessionId,
                limit: e.request.limit,
                workspacePathsFilter: e.request.workspacePathsFilter,
                matchAnyWorkspaceRoot: e.request.matchAnyWorkspaceRoot,
                ownerClientInstanceId: e.clientInstanceId,
                includeOwnerUnrootedSessions: !0,
              })
            : e.request;
        var t;
      }
      var r = n(13574);
      function c(e) {
        switch (e) {
          case "unrestricted":
            return o.pB.UNRESTRICTED;
          case "allowlist":
            return o.pB.ALLOWLIST;
          case "ask-every-time":
            return o.pB.ASK_EVERY_TIME;
          default:
            return o.pB.UNSPECIFIED;
        }
      }
      function l(e) {
        switch (e) {
          case "system":
            return o.wb.SYSTEM;
          case "workspace":
            return o.wb.WORKSPACE;
          default:
            return;
        }
      }
      function d(e) {
        if (void 0 === e) return;
        if ("insecure_none" === e.type)
          return new r.Mw({
            type: r.vc.INSECURE_NONE,
            ...(void 0 === e.captureDenies ? {} : { captureDenies: e.captureDenies }),
            ...(void 0 === e.debugOutputDir ? {} : { debugOutputDir: e.debugOutputDir }),
          });
        const t = (function (e) {
            switch (e) {
              case "workspace":
                return r.Sz.WORKSPACE;
              case "system":
                return r.Sz.SYSTEM;
              default:
                return r.Sz.UNSPECIFIED;
            }
          })(e.readBoundary),
          n = {
            networkAccess: e.networkAccess,
            readBoundary: t,
            ...(void 0 === e.captureDenies ? {} : { captureDenies: e.captureDenies }),
            ...(void 0 === e.debugOutputDir ? {} : { debugOutputDir: e.debugOutputDir }),
            ...(void 0 === e.skipStatsigDefaults
              ? {}
              : { skipStatsigDefaults: e.skipStatsigDefaults }),
          };
        return "workspace_readonly" === e.type
          ? new r.Mw({
              type: r.vc.WORKSPACE_READONLY,
              additionalReadonlyPaths: [...(e.additionalReadonlyPaths ?? [])],
              additionalReadPaths: [...(e.additionalReadPaths ?? [])],
              ...n,
            })
          : new r.Mw({
              type: r.vc.WORKSPACE_READWRITE,
              additionalReadwritePaths: [...(e.additionalReadwritePaths ?? [])],
              additionalReadonlyPaths: [...(e.additionalReadonlyPaths ?? [])],
              additionalReadPaths: [...(e.additionalReadPaths ?? [])],
              ...(void 0 === e.disableTmpWrite ? {} : { disableTmpWrite: e.disableTmpWrite }),
              ...n,
            });
      }
      function u(e) {
        return new o.Xn({
          allow: [...e.allow],
          deny: [...e.deny],
          approvalMode: c(e.approvalMode),
          readBoundary: l(e.readBoundary),
          userSandboxDataFolderName: e.userSandboxDataFolderName,
          userConfiguredPolicy: d(e.userConfiguredPolicy),
          dashboardTerminalAllowlistOverriddenByPermissionsFile:
            e.dashboardTerminalAllowlistOverriddenByPermissionsFile,
          ...(void 0 === e.smartAllowlistEnabled
            ? {}
            : { smartAllowlistEnabled: e.smartAllowlistEnabled }),
          ...(void 0 === e.promptWorkspaceWrites
            ? {}
            : { promptWorkspaceWrites: e.promptWorkspaceWrites }),
          smartAllowlistDenylist: [...(e.smartAllowlistDenylist ?? [])],
        });
      }
      var w = n(69584);
      class p extends Error {
        constructor(e) {
          (super(
            `agent-host: catalogHydrate but HasSession is false for ${e}; do not proto-Create`,
          ),
            (this.name = "HydrateMissError"));
        }
      }
      async function h(e) {
        const t = (function (e) {
          return e.exists
            ? { action: "rebind" }
            : e.catalogHydrate
              ? { action: "hydrate-miss" }
              : { action: "create" };
        })({
          exists: (await e.client.hasSession(new a.bq({ sessionId: e.input.sessionId }))).exists,
          catalogHydrate: !0 === e.input.catalogHydrate,
        });
        if ("rebind" === t.action) return { action: "rebind" };
        if ("hydrate-miss" === t.action) throw new p(e.input.sessionId);
        return (
          await e.client.createSession(
            (function (e) {
              return new a.Hz({
                sessionId: e.input.sessionId,
                clientInstanceId: e.clientInstanceId,
                sessionOptions: {
                  workspacePaths: [...e.input.workspacePaths],
                  ...(void 0 === e.input.isGlassRoot ? {} : { isGlassRoot: e.input.isGlassRoot }),
                  ...(void 0 === e.input.worktreeMainPath
                    ? {}
                    : { worktreeMainPath: e.input.worktreeMainPath }),
                  ...(void 0 === e.input.owningProject
                    ? {}
                    : {
                        owningProject: {
                          projectAgentId: e.input.owningProject.projectAgentId,
                          ...(void 0 === e.input.owningProject.projectName
                            ? {}
                            : { projectName: e.input.owningProject.projectName }),
                        },
                      }),
                  ...(!0 === e.input.hostedMcpRoutingEnabled
                    ? { hostedMcpRoutingEnabled: !0 }
                    : {}),
                },
                ...(void 0 === e.input.initialHistory
                  ? {}
                  : { initialHistory: w.Y9z.fromBinary(e.input.initialHistory) }),
              });
            })({ clientInstanceId: e.clientInstanceId, input: e.input }),
          ),
          { action: "create" }
        );
      }
      const y = new Set([
        "watchSessions",
        "watchSessionInteractions",
        "watchSessionBackgroundWork",
        "watchSessionTurnLifecycle",
        "watchAgentHostSessionShellOutput",
        "attachSession",
        "readFile",
        "openAgentHostSurfaceChannel",
      ]);
      function I(e) {
        let t = 0;
        const n = [],
          s = () => {
            const e = n.splice(0);
            for (const t of e) t();
          },
          a = () => {
            t--;
          },
          o = (e) => {
            let a;
            const o = (
              t > 0
                ? Promise.resolve()
                : new Promise((e) => {
                    (n.push(e), queueMicrotask(s));
                  })
            ).then(() => {
              a = e();
            });
            return {
              [Symbol.asyncIterator]() {
                let e;
                return {
                  next: async () => (await o, (e ??= a[Symbol.asyncIterator]()), e.next()),
                  return: async (t) => (
                    await o,
                    void 0 === e?.return ? { done: !0, value: void 0 } : e.return(t)
                  ),
                  async throw(t) {
                    if ((await o, void 0 === e?.throw)) throw t;
                    return e.throw(t);
                  },
                };
              },
            };
          };
        return new Proxy(e, {
          get(e, n, i) {
            const r = Reflect.get(e, n, i);
            if ("function" != typeof r) return r;
            const c = r.bind(e);
            return y.has(String(n))
              ? ((l = c), (...e) => o(() => l(...e)))
              : (
                  (e) =>
                  (...n) => {
                    t++;
                    try {
                      const t = e(...n);
                      return (s(), Promise.resolve(t).finally(() => a()));
                    } catch (e) {
                      throw (a(), e);
                    }
                  }
                )(c);
            var l;
          },
        });
      }
      function m(e) {
        const t = I(e.client),
          n = new Map(),
          r = new Map(),
          c = new Map(),
          l = "rootWorkspace" === s.cursor.glassWorkspaceRole,
          d = () => {
            const t = e.workspacePaths?.();
            return void 0 !== t && t.length > 0
              ? [...t]
              : (s.workspace.workspaceFolders ?? []).map((e) => e.uri.fsPath);
          },
          w = (t) =>
            (function (e) {
              const t = i({
                request: new a.cK({
                  workspacePathsFilter: e.request.workspacePathsFilter,
                  matchAnyWorkspaceRoot: e.request.matchAnyWorkspaceRoot,
                  ownerClientInstanceId: e.request.ownerClientInstanceId,
                  includeOwnerUnrootedSessions: e.request.includeOwnerUnrootedSessions,
                }),
                windowWorkspacePaths: e.windowWorkspacePaths,
                clientInstanceId: e.clientInstanceId,
                isGlassRoot: e.isGlassRoot,
              });
              return new a.N9({
                workspacePathsFilter: t.workspacePathsFilter,
                matchAnyWorkspaceRoot: t.matchAnyWorkspaceRoot,
                ownerClientInstanceId: t.ownerClientInstanceId,
                includeOwnerUnrootedSessions: t.includeOwnerUnrootedSessions,
              });
            })({
              request: t,
              windowWorkspacePaths: d(),
              clientInstanceId: e.clientInstanceId,
              isGlassRoot: l,
            }),
          p = (n) => {
            r.get(n.sessionId)?.dispose();
            const s = n.onDidChangePermissions((s) => {
              const a = (async (n, s) => {
                await t.pushAgentHostSessionPermissions(
                  new o.DL({
                    sessionId: n,
                    clientInstanceId: e.clientInstanceId,
                    permissions: u(s),
                  }),
                );
              })(n.sessionId, s);
              (c.set(n.sessionId, a), a.catch(() => {}));
            });
            r.set(n.sessionId, s);
          },
          y = (e) => {
            (r.get(e)?.dispose(), r.delete(e), c.delete(e), n.delete(e));
          },
          m = (t) => ({
            sessionId: t.sessionId,
            workspacePaths: t.workspacePaths,
            catalogHydrate: t.catalogHydrate,
            isGlassRoot: t.isGlassRoot,
            worktreeMainPath: t.worktreeMainPath,
            owningProject: t.owningProject,
            initialHistory: t.initialHistory,
            hostedMcpRoutingEnabled: !0 === e.hostedMcpRoutingEnabled?.(),
          });
        return {
          sessionHandlers: n,
          ...(void 0 === e.loop ? {} : { loop: e.loop }),
          async createSession(s) {
            n.set(s.sessionId, s);
            try {
              await h({ client: t, clientInstanceId: e.clientInstanceId, input: m(s) });
            } catch (e) {
              throw (y(s.sessionId), e);
            }
            return (p(s), new a.R1().toBinary());
          },
          async deleteSession(e) {
            const n = a.mq.fromBinary(e);
            return (
              y(n.sessionId),
              (async function (e) {
                const t = a.mq.fromBinary(e.request);
                return (await e.client.deleteSession(t)).toBinary();
              })({ client: t, request: e })
            );
          },
          async flushPermissionPush(e) {
            await c.get(e);
          },
          listSessions: async (n) =>
            (
              await t.listSessions(
                ((t) =>
                  i({
                    request: t,
                    windowWorkspacePaths: d(),
                    clientInstanceId: e.clientInstanceId,
                    isGlassRoot: l,
                  }))(a.cK.fromBinary(n)),
              )
            ).toBinary(),
          watchSessions: (e, n) => g(t.watchSessions(w(a.N9.fromBinary(e)), { signal: k(n) }), n),
          sendMessage: async (e) => (await t.sendMessage(a.AY.fromBinary(e))).toBinary(),
          sendAction: async (e) => (await t.sendAction(a.J6.fromBinary(e))).toBinary(),
          interruptTurn: async (e) => (await t.interruptTurn(a.ty.fromBinary(e))).toBinary(),
          cancelQueuedTurn: async (e) => (await t.cancelQueuedTurn(a.To.fromBinary(e))).toBinary(),
          watchSessionInteractions: (e, n) =>
            g(t.watchSessionInteractions(a.X7.fromBinary(e), { signal: k(n) }), n),
          watchSessionBackgroundWork: (e, n) =>
            g(t.watchSessionBackgroundWork(a.j$.fromBinary(e), { signal: k(n) }), n),
          watchSessionTurnLifecycle: (e, n) =>
            g(t.watchSessionTurnLifecycle(a.X.fromBinary(e), { signal: k(n) }), n),
          abortBackgroundWork: async (e) =>
            (await t.abortBackgroundWork(a.c_.fromBinary(e))).toBinary(),
          abortAllBackgroundWork: async (e) =>
            (await t.abortAllBackgroundWork(a.vC.fromBinary(e))).toBinary(),
          attachSession(n, s) {
            const o = a.EM.fromBinary(n);
            return g(
              t.attachSession(
                new a.EM({
                  sessionId: o.sessionId,
                  clientInstanceId: e.clientInstanceId,
                  lastEventId: o.lastEventId,
                  backgroundTaskCompletionsOnly: o.backgroundTaskCompletionsOnly,
                }),
                { signal: k(s) },
              ),
              s,
            );
          },
          async setSessionTitle(e) {
            await t.setSessionTitle(new a.aq({ sessionId: e.sessionId, title: e.title }));
          },
          getSessionBlobs: async (e) => (await t.getSessionBlobs(a.z4.fromBinary(e))).toBinary(),
          async listWorkspaces(e) {
            a.XO.fromBinary(e);
            const t = await s.cursor.listAgentHostWorkspaceCatalog();
            return void 0 === t
              ? new a.LX().toBinary()
              : new a.LX({
                  workspaces: t.map(
                    (e) =>
                      new a.hq({
                        workspacePaths: [...e.workspacePaths],
                        ...(void 0 === e.worktreeMainPath
                          ? {}
                          : { worktreeMainPath: e.worktreeMainPath }),
                        ...(void 0 === e.displayPath ? {} : { displayPath: e.displayPath }),
                      }),
                  ),
                }).toBinary();
          },
          async fetchPrivateInferenceCatalog() {},
        };
      }
      async function* g(e, t) {
        for await (const n of e) {
          if (!0 === t?.isCancellationRequested) return;
          yield n.toBinary();
        }
      }
      function k(e) {
        const t = new AbortController();
        return !0 === e?.isCancellationRequested
          ? (t.abort(), t.signal)
          : (e?.onCancellationRequested?.(() => t.abort()), t.signal);
      }
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-host/dist/914.js.map
