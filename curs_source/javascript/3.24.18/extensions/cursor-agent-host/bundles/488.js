"use strict";
((exports.id = 488),
  (exports.ids = [488]),
  (exports.modules = {
    98488: (e, t, s) => {
      s.d(t, { createIdeAgentStoreActivate: () => g });
      var i = s(94289),
        o = s(70857),
        n = s(91398),
        r = s(9639),
        c = s(35068),
        a = s(47462),
        l = s(13920),
        d = s(77273),
        h = s(7334);
      class f {
        constructor() {
          ((this.conflictNoticeSessions = new Map()),
            (this.conflictNoticeKeyOwners = new Map()),
            (this.conflictNoticeSessionStarts = new Map()),
            (this.sharedConflictClaimState = (0, c.createConflictNoticeClaimState)()));
        }
        wrapSessionResources(e) {
          const t = () => !0,
            s = e.sessionId,
            i = new Set(),
            o = e.workspacePaths.length > 0 ? [...e.workspacePaths] : [e.projectDir],
            c = () => {
              const e = n.workspace.workspaceFolders?.map((e) => e.uri.fsPath) ?? [],
                t = new Set(),
                s = [];
              for (const i of [...o, ...e]) 0 === i.length || t.has(i) || (t.add(i), s.push(i));
              return s.length > 0 ? s : o;
            };
          (this.getOrCreateConflictNoticeSession({
            sessionKey: s,
            isEnabled: t,
            initialConversationId: s,
            getBasePaths: c,
          }),
            this.acquireConflictNoticeKey(s),
            i.add(s));
          const f = (e) => {
              if ("object" == typeof e && null !== e && "get" in e && "function" == typeof e.get)
                return (0, d.L)(e, e.get(l.zN)?.conversationId)?.trim();
            },
            g = (e) => {
              const t = f(e);
              return void 0 !== t && t.length > 0 ? t : s;
            },
            S = !0 === e.isIdeLocalAgentPath,
            C = new a.OJ(
              e.accessor,
              (e) => {
                const o = g(e);
                return (
                  i.has(o) || (i.add(o), this.acquireConflictNoticeKey(o)),
                  this.getOrCreateConflictNoticeSession({
                    sessionKey: o,
                    isEnabled: t,
                    initialConversationId: f(e) ?? s,
                    getBasePaths: c,
                  }).drain
                );
              },
              (0, h.te)(t, c),
              {
                skipPathWriteDrain: () => {
                  return (
                    (e = {
                      isIdeLocalAgentPath: S,
                      noticesEnabled: !0,
                      hostRegistered: void 0 !== this.conflictNoticeSessions.get(s)?.host,
                    }).isIdeLocalAgentPath &&
                    e.noticesEnabled &&
                    e.hostRegistered
                  );
                  var e;
                },
                forceWrittenPathBeforeDrain: (0, h.H_)(t, c),
                resolveWriteBarrierTimeoutMs: (0, h.mt)(),
                onWriteBarrier: (0, h.kE)(),
                onWakeWrittenPath: (e, i) => {
                  try {
                    const o = g(i);
                    this.getOrCreateConflictNoticeSession({
                      sessionKey: o,
                      isEnabled: t,
                      initialConversationId: f(i) ?? s,
                      getBasePaths: c,
                    }).host.noteDeferredWrittenPaths([e]);
                  } catch {}
                },
              },
            ),
            v = {
              execute: (e, i, o) => {
                const n =
                    ("conversationId" in i &&
                    "string" == typeof i.conversationId &&
                    i.conversationId.trim().length > 0
                      ? i.conversationId.trim()
                      : void 0) ?? s,
                  { host: r } = this.getOrCreateConflictNoticeSession({
                    sessionKey: n,
                    isEnabled: t,
                    initialConversationId: n === s ? s : n,
                    getBasePaths: c,
                  });
                return r.execute(e, i, o);
              },
            };
          return {
            accessor: new r.dwX(C, [(0, r.VNS)(r.YhQ, v)]),
            acquiredConflictNoticeKeys: i,
            dispose: () => {
              this.clearConflictDrain(s);
              for (const e of i) this.releaseConflictNoticeKey(e);
              i.clear();
            },
          };
        }
        noteConflictNoticeSessionStart(e) {
          this.conflictNoticeSessionStarts.has(e) ||
            this.conflictNoticeSessionStarts.set(e, Date.now());
        }
        acquireConflictNoticeKey(e) {
          const t = e.trim();
          0 !== t.length &&
            (this.noteConflictNoticeSessionStart(t),
            this.conflictNoticeKeyOwners.set(t, (this.conflictNoticeKeyOwners.get(t) ?? 0) + 1));
        }
        releaseConflictNoticeKey(e) {
          const t = e.trim();
          if (0 === t.length) return;
          const s = this.conflictNoticeKeyOwners.get(t) ?? 0;
          s <= 1
            ? this.conflictNoticeKeyOwners.delete(t)
            : this.conflictNoticeKeyOwners.set(t, s - 1);
        }
        releaseConflictNoticeSessionLeases(e) {
          const t = this.conflictNoticeSessions.get(e);
          void 0 !== t && (t.drain.releaseAllLeased(), t.host.releaseAllLeased());
        }
        clearConflictDrain(e) {
          const t = e.trim();
          0 !== t.length &&
            (this.releaseConflictNoticeSessionLeases(t),
            this.conflictNoticeSessions.delete(t),
            this.conflictNoticeKeyOwners.delete(t),
            this.conflictNoticeSessionStarts.delete(t));
        }
        getOrCreateConflictNoticeSession(e) {
          const t = this.conflictNoticeSessions.get(e.sessionKey);
          if (void 0 !== t)
            return (
              void 0 !== e.initialConversationId &&
                e.initialConversationId.length > 0 &&
                t.bindConversationId(e.initialConversationId),
              t
            );
          let s = this.conflictNoticeSessionStarts.get(e.sessionKey);
          void 0 === s && ((s = Date.now()), this.conflictNoticeSessionStarts.set(e.sessionKey, s));
          const i = { current: e.initialConversationId },
            o = {
              drain: new c.AgentStoreConflictDrain({
                sources: [(0, h.uR)(e.isEnabled, () => i.current)],
                sessionStartedAtMs: s,
                claimState: this.sharedConflictClaimState,
              }),
              host: new a.ng({
                driver: (0, h.V0)(e.isEnabled, e.getBasePaths),
                sessionStartedAtMs: s,
                claimState: this.sharedConflictClaimState,
                resolveForceGraceTimeoutMs: (0, h.mt)(),
              }),
              bindConversationId: (e) => {
                const t = e.trim();
                t.length > 0 && (i.current = t);
              },
            };
          return (this.conflictNoticeSessions.set(e.sessionKey, o), o);
        }
      }
      async function g(e) {
        const t = [],
          s = new Map(),
          r = {
            name: "Cursor Agent Host",
            appendLine: (c = e.appendLine),
            append: (e) => {
              c(e);
            },
            replace: (e) => {
              c(e);
            },
            clear: () => {},
            show: () => {},
            hide: () => {},
            dispose: () => {},
          };
        var c;
        (await (0, h.iH)(
          e.context,
          r,
          t,
          void 0 !== e.whenProviderRegistered
            ? { whenProviderRegistered: e.whenProviderRegistered }
            : void 0,
        ),
          t.push(
            h.dw.onDidChangeTargetDirs(() => {
              n.commands.executeCommand(i._d).then(void 0, () => {});
            }),
          ));
        const a = new f();
        let l;
        return {
          snapshot: {
            harnessActivated: !0,
            conflictNoticesWired: !0,
            shellExtraEnvProviderWired: !0,
          },
          getAgentStoreSkillsContext: () => ({
            agentStoreSkillsDirs: h.dw.get(),
            userHomeDirectory: o.homedir(),
          }),
          onDidChangeSkillRoots: (e) => h.dw.onDidChange(e),
          createSessionOverrides: ({ sessionId: e, workspacePaths: t }) => (
            s.set(e, t),
            { overrides: { shellExtraEnvProvider: (0, h.dk)({ sessionId: e }) } }
          ),
          wrapResources({ args: t, accessor: i }) {
            const o = a.wrapSessionResources({
              sessionId: t.sessionId,
              accessor: i,
              workspacePaths: s.get(t.sessionId) ?? [],
              projectDir: e.projectDir,
            });
            return {
              accessor: o.accessor,
              dispose: () => {
                (o.dispose(), s.delete(t.sessionId));
              },
            };
          },
          dispose: () => (
            void 0 === l &&
              (l = (async () => {
                const e = t.splice(0).reverse();
                for (const t of e) {
                  const e = t();
                  if (e instanceof Promise)
                    try {
                      await e;
                    } catch {}
                }
              })()),
            l
          ),
        };
      }
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-host/dist/488.js.map
