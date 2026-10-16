"use strict";
((exports.id = 265),
  (exports.ids = [265]),
  (exports.modules = {
    96265: (o, e, r) => {
      r.d(e, { createIdeHooksWrap: () => y });
      var t = r(75088),
        s = r(33002),
        i = r(13920),
        n = r(91398);
      function c(...o) {
        for (const e of o) {
          const o = e?.trim() ?? "";
          if (o.length > 0) return o;
        }
      }
      var a = r(98875),
        u = r(91022),
        p = r(15599),
        d = (o, e) => ((e = Symbol[o]) ? e : Symbol.for("Symbol." + o)),
        h = (o) => {
          throw TypeError(o);
        },
        f = (o, e, r) => {
          var t, s;
          null != e
            ? ("object" != typeof e && "function" != typeof e && h("Object expected"),
              r && (t = e[d("asyncDispose")]),
              void 0 === t && ((t = e[d("dispose")]), r && (s = t)),
              "function" != typeof t && h("Object not disposable"),
              s &&
                (t = function () {
                  try {
                    s.call(this);
                  } catch (o) {
                    return Promise.reject(o);
                  }
                }),
              o.push([r, t, e]))
            : r && o.push([r]);
          return e;
        },
        l = (o, e, r) => {
          var t =
              "function" == typeof SuppressedError
                ? SuppressedError
                : function (o, e, r, t) {
                    return (
                      ((t = Error(r)).name = "SuppressedError"),
                      (t.error = o),
                      (t.suppressed = e),
                      t
                    );
                  },
            s = (o) =>
              (e = r ? new t(o, e, "An error was suppressed during disposal") : ((r = !0), o)),
            i = (t) => {
              for (; (t = o.pop());)
                try {
                  var n = t[1] && t[1].call(t[2]);
                  if (t[0]) return Promise.resolve(n).then(i, (o) => (s(o), i()));
                } catch (o) {
                  s(o);
                }
              if (r) throw e;
            };
          return i();
        };
      class g {
        constructor(o) {
          ((this.configuredHooks = []),
            (this.configuredSteps = new Set()),
            (this.subscription = n.cursor.onDidChangeHooks((o) => {
              ((this.configuredHooks = o), (this.configuredSteps = new Set(o.map((o) => o.step))));
            })),
            (this.initPromise = (async () => {
              var e = [];
              try {
                const r = o
                    ? o.withName("HooksConfigTracker.constructorInit")
                    : (0, s.q6)().withName("HooksConfigTracker.constructorInit"),
                  t = f(e, (0, a.VI)(r)),
                  i = (0, p.K)(t.ctx),
                  c = await n.cursor.getConfiguredHooks(i);
                ((this.configuredHooks = c),
                  (this.configuredSteps = new Set(c.map((o) => o.step))));
              } catch (o) {
                var r = o,
                  t = !0;
              } finally {
                l(e, r, t);
              }
            })()));
        }
        async initialize(o) {
          var e = [];
          try {
            f(e, (0, a.VI)(o.withName("HooksConfigTracker.initialize")));
            await this.initPromise;
          } catch (o) {
            var r = o,
              t = !0;
          } finally {
            l(e, r, t);
          }
        }
        hasHookForStep(o) {
          return this.configuredSteps.has(o);
        }
        hasHookForRequest(o, e) {
          const r = (0, u.bi)(o, e);
          return this.configuredHooks.some(
            (e) => e.step === o && (0, u.Qk)(e.scripts, r).length > 0,
          );
        }
        getConfiguredHooks() {
          return [...this.configuredHooks];
        }
        getConfiguredSteps() {
          return new Set(this.configuredSteps);
        }
        dispose() {
          this.subscription.dispose();
        }
      }
      var k = r(42358);
      class m {
        constructor(o, e) {
          ((this.vscodeHookExecutor = o), (this.configTracker = e));
        }
        async executeHookForStep(o, e) {
          if (!this.configTracker.hasHookForRequest(o, e)) return;
          return await this.vscodeHookExecutor.executeHookForStep(o, e);
        }
      }
      async function y(o) {
        const e = o.parentCtx ?? (0, s.q6)(),
          r = new g(e);
        await r.initialize(e);
        const a = new m(n.cursor.getHookExecutor(), r);
        return {
          wrapResources: ({ args: e, provider: r }) => {
            const s = (0, k.Qr)(o.sessionOverlayDisposables, e.sessionId);
            try {
              return {
                accessor: (0, t.Qm)({
                  provider: r,
                  hookExecutor: a,
                  mcpLease: e.mcpLease,
                  context: (o) =>
                    (function (o, e, r) {
                      const t = c(e?.parentToolCallId);
                      return {
                        conversation_id: c(e?.conversationId, r) ?? "",
                        generation_id: c(e?.requestId) ?? "",
                        model: c(e?.modelName) ?? "",
                        ...(t ? { parent_tool_call_id: t } : {}),
                      };
                    })(0, o.get(i.zN), e.rootSessionId),
                }).accessor,
                dispose: () => {
                  s?.();
                },
              };
            } catch (o) {
              throw (s?.(), o);
            }
          },
          dispose: () => {
            r.dispose();
          },
        };
      }
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-host/dist/265.js.map
