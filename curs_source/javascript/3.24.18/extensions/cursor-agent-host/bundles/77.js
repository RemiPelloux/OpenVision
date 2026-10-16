"use strict";
((exports.id = 77),
  (exports.ids = [77, 859]),
  (exports.modules = {
    60077: (e, r, t) => {
      t.d(r, { createIdeDiskExtensibility: () => D });
      var s = t(70857),
        o = t(75088),
        n = t(33002),
        i = t(98875),
        a = t(91105),
        c = t(91398),
        l = t(34102),
        u = t(89350),
        d = t(11762);
      function p(e, r) {
        const t = e.split(/\r?\n/).find((e) => new RegExp(`^\\s*${r}\\s*:`).test(e)),
          s = t?.replace(new RegExp(`^\\s*${r}\\s*:\\s*`), "");
        if (!s) return;
        const o = (function (e) {
            let r;
            for (let t = 0; t < e.length; t++) {
              const s = e[t];
              if (('"' !== s && "'" !== s) || (0 !== t && "\\" === e[t - 1])) {
                if ("#" === s && void 0 === r) return e.slice(0, t);
              } else r = r === s ? void 0 : (r ?? s);
            }
            return e;
          })(s).trim(),
          n = o.match(/^(['"])(.*)\1$/);
        return n ? n[2]?.trim() : o;
      }
      function h(e) {
        return e.map((e) => {
          if ("agentFetched" !== e.type?.type.case || !e.content) return e;
          if (
            (function (e) {
              const r = e.match(/^\s*---\r?\n([\s\S]*?)\r?\n---/);
              if (!r) return !1;
              const t = r[1] ?? "";
              return (
                "true" === p(t, "mode")?.toLowerCase() &&
                ["icon", "color", "reminder"].every((e) => {
                  const r = p(t, e);
                  return void 0 !== r && r.length > 0;
                })
              );
            })(e.content)
          )
            return e;
          const r = e.clone();
          return ((r.content = ""), r);
        });
      }
      var g = t(89859),
        f = (e, r) => ((r = Symbol[e]) ? r : Symbol.for("Symbol." + e)),
        v = (e) => {
          throw TypeError(e);
        },
        y = (e, r, t) => {
          var s, o;
          null != r
            ? ("object" != typeof r && "function" != typeof r && v("Object expected"),
              t && (s = r[f("asyncDispose")]),
              void 0 === s && ((s = r[f("dispose")]), t && (o = s)),
              "function" != typeof s && v("Object not disposable"),
              o &&
                (s = function () {
                  try {
                    o.call(this);
                  } catch (e) {
                    return Promise.reject(e);
                  }
                }),
              e.push([t, s, r]))
            : t && e.push([t]);
          return r;
        },
        S = (e, r, t) => {
          var s =
              "function" == typeof SuppressedError
                ? SuppressedError
                : function (e, r, t, s) {
                    return (
                      ((s = Error(t)).name = "SuppressedError"),
                      (s.error = e),
                      (s.suppressed = r),
                      s
                    );
                  },
            o = (e) =>
              (r = t ? new s(e, r, "An error was suppressed during disposal") : ((t = !0), e)),
            n = (s) => {
              for (; (s = e.pop());)
                try {
                  var i = s[1] && s[1].call(s[2]);
                  if (s[0]) return Promise.resolve(i).then(n, (e) => (o(e), n()));
                } catch (e) {
                  o(e);
                }
              if (t) throw r;
            };
          return n();
        };
      const m = "cursor_rules_batch_update",
        w = 4e3,
        b = "cursorAgentExec.waitForInitialRulesReadyForTesting";
      function k(e) {
        const r = [],
          t = (function (e) {
            return (
              e.pushRequestContextEnabled &&
              "rootWorkspace" === e.glassWorkspaceRole &&
              0 === e.workspacePathCount
            );
          })({
            pushRequestContextEnabled: e.pushRequestContextEnabled,
            glassWorkspaceRole: c.cursor.glassWorkspaceRole,
            workspacePathCount: e.workspacePaths.length,
          });
        let s,
          o = Promise.resolve();
        const a = (e, r = !1) => {
            const n = o.then(async () => {
              const o = h(
                ((e) => {
                  if (!t) return e;
                  const r = (0, g.H)();
                  return e.some((e) => e.fullPath === r.fullPath) ? e : [r, ...e];
                })(e),
              );
              if (
                !r &&
                void 0 !== s &&
                ((i = o), (n = s).length === i.length && n.every((e, r) => e.equals(i[r])))
              )
                return;
              var n, i;
              s = void 0;
              ((await Promise.resolve(c.cursor.checkFeatureGate(m)).catch(() => !1))
                ? await c.cursor.updateCursorRulesInBatches(o)
                : await c.cursor.updateCursorRules(o),
                (s = o));
            });
            return ((o = n.catch(() => {})), n);
          },
          l = (0, n.q6)(),
          u = e.cursorRulesService.getAllCursorRules(l).then(async (r) => {
            (e.appendLine("cursorRulesService.getAllCursorRules"), await a(r));
          });
        let d;
        (u.catch((r) => {
          e.appendLine(`Failed to load or push initial cursor rules: ${String(r)}`);
        }),
          r.push(
            c.commands.registerCommand(b, async () => {
              await u;
            }),
          ));
        const p = e.cursorRulesService.onDidChangeRules(() => {
          (void 0 !== d && clearTimeout(d),
            (d = setTimeout(() => {
              ((d = void 0),
                (async () => {
                  const r = await e.cursorRulesService.getAllCursorRules(l);
                  await a(r);
                })().catch((r) => {
                  e.appendLine(`cursorRulesService.onDidChangeRules failed: ${String(r)}`);
                }));
            }, w)));
        });
        return (
          r.push({ dispose: p }),
          r.push({
            dispose: () => {
              void 0 !== d && clearTimeout(d);
            },
          }),
          r.push(
            c.cursor.registerCursorRulesProvider({
              reloadRules: async () => {
                var r = [];
                try {
                  const t = (0, n.q6)(),
                    s = y(r, (0, i.VI)(t.withName("cursorRulesProvider.reloadRules")));
                  e.cursorRulesService.reload(s.ctx);
                  const o = await e.cursorRulesService.getAllCursorRules(s.ctx);
                  (void 0 !== d && (clearTimeout(d), (d = void 0)), await a(o, !0));
                } catch (e) {
                  var t = e,
                    s = !0;
                } finally {
                  S(r, t, s);
                }
              },
            }),
          ),
          r.push(
            c.cursor.registerSubagentsProvider({
              getAllSubagents: async () => e.subagentsService.getAllSubagents(),
              reload: async () => {
                await e.subagentsService.reload();
              },
              reloadAndGetAllSubagents: async () => await e.subagentsService.reload(),
            }),
          ),
          c.Disposable.from(...r)
        );
      }
      class P {
        async getCodebaseReference(e, r) {
          const [t, s] = await Promise.all([
            c.cursor.getRepoInfo(),
            c.cursor.getPathEncryptionKey(),
          ]);
          if (t && s)
            return {
              relativeWorkspacePath: t.relativeWorkspacePath,
              repoName: t.repoName,
              repoOwner: t.repoOwner,
              isTracked: !1,
              isLocal: !0,
              numFiles: 0,
              orthogonalTransformSeed: t.orthogonalTransformSeed ?? 0,
              pathEncryptionKey: s,
            };
        }
      }
      var R = (e, r) => ((r = Symbol[e]) ? r : Symbol.for("Symbol." + e)),
        x = (e) => {
          throw TypeError(e);
        },
        C = (e, r, t) => {
          var s, o;
          null != r
            ? ("object" != typeof r && "function" != typeof r && x("Object expected"),
              t && (s = r[R("asyncDispose")]),
              void 0 === s && ((s = r[R("dispose")]), t && (o = s)),
              "function" != typeof s && x("Object not disposable"),
              o &&
                (s = function () {
                  try {
                    o.call(this);
                  } catch (e) {
                    return Promise.reject(e);
                  }
                }),
              e.push([t, s, r]))
            : t && e.push([t]);
          return r;
        },
        E = (e, r, t) => {
          var s =
              "function" == typeof SuppressedError
                ? SuppressedError
                : function (e, r, t, s) {
                    return (
                      ((s = Error(t)).name = "SuppressedError"),
                      (s.error = e),
                      (s.suppressed = r),
                      s
                    );
                  },
            o = (e) =>
              (r = t ? new s(e, r, "An error was suppressed during disposal") : ((t = !0), e)),
            n = (s) => {
              for (; (s = e.pop());)
                try {
                  var i = s[1] && s[1].call(s[2]);
                  if (s[0]) return Promise.resolve(i).then(n, (e) => (o(e), n()));
                } catch (e) {
                  o(e);
                }
              if (t) throw r;
            };
          return n();
        };
      const j = "rules_discovery_respect_cursorignore",
        _ = "subagents_discovery_allow_external_symlinks",
        A = "skill_catalog_ide_cache";
      async function D(e) {
        const [r, t, p, h] = await Promise.all([
          Promise.resolve(c.cursor.checkFeatureGate(j)).catch(() => !1),
          Promise.resolve(c.cursor.checkFeatureGate(_)).catch(() => !1),
          Promise.resolve(c.cursor.getPushRequestContextEnabled()).catch(() => !1),
          Promise.resolve(c.cursor.checkFeatureGate(A)).catch(() => !1),
        ]);
        (0, a.ba_)(!0 === r);
        const g = (function (e, r) {
            const t = (0, n.q6)();
            return (0, u.w)({
              ctx: t,
              extensionPath: r,
              getAuthToken: () => c.cursor.getCursorAuthToken(),
              getManagedSkills: () => Promise.resolve(c.cursor.getManagedSkills()),
              syncBuiltinSkills: a.Rhp,
              ensureCanvasSdkMirror: d.I_,
              appendLine: e,
            }).catch((r) => {
              e(`Failed to sync Cursor-managed skills: ${String(r)}`);
            });
          })(e.appendLine, e.extensionPath),
          f = {
            subscribe: (e, r, t) => {
              const s = [],
                o = (e) => {
                  "git" !== e.scheme && t(e.fsPath);
                };
              for (const t of r) {
                const r = new c.RelativePattern(e, t),
                  n = c.workspace.createFileSystemWatcher(r);
                (n.onDidCreate(o), n.onDidChange(o), n.onDidDelete(o), s.push(n));
              }
              return () => {
                for (const e of s) e.dispose();
              };
            },
          },
          v = e.getAgentStoreSkillsContext ?? (() => a.$3f),
          y = (0, o.xD)({
            workspacePaths: e.workspacePaths,
            gitExecutor: e.gitExecutor,
            sources: ["project", "user"],
            userHome: e.userHome ?? s.homedir(),
            fileWatcher: f,
            ignoreService: e.ignoreService,
            getThirdPartyExtensibilityEnabled: () => c.cursor.getThirdPartyExtensibilityEnabled(),
            allowExternalSubagentSymlinks: !0 === t,
            surface: "ide",
            initialBuiltinSkillsSyncPromise: g,
            ripgrepPath: e.ripgrepPath,
            getAgentStoreSkillsContext: v,
            ...(void 0 === e.globalStoragePath || !0 !== h
              ? {}
              : { agentSkillsCatalogCache: (0, a.V2h)(e.globalStoragePath) }),
          }),
          S =
            void 0 === e.pluginsService
              ? void 0
              : (function (e) {
                  const r = () => ({
                      importThirdPartyPlugins: c.cursor.getThirdPartyExtensibilityEnabled(),
                    }),
                    t = new a.Rxj((0, n.q6)(), r, e.fileWatcher, e.pluginsService),
                    s = new a._Ji(r, e.pluginsService);
                  return {
                    cursorRulesService: new a.Px0([e.diskRules, t], e.getAgentStoreSkillsContext),
                    subagentsService: new a.o_K([e.diskSubagents, s]),
                    agentSkillsService: new a.NB(
                      [e.diskSkills, t],
                      () => [],
                      () => ({
                        ...e.getAgentStoreSkillsContext(),
                        workspacePaths: e.workspacePaths,
                      }),
                    ),
                  };
                })({
                  diskRules: y.cursorRulesService,
                  diskSubagents: y.subagentsService,
                  diskSkills: y.agentSkillsService,
                  pluginsService: e.pluginsService,
                  fileWatcher: f,
                  workspacePaths: e.workspacePaths,
                  getAgentStoreSkillsContext: v,
                }),
          m = S?.cursorRulesService ?? y.cursorRulesService,
          w = S?.subagentsService ?? y.subagentsService,
          b = S?.agentSkillsService ?? y.agentSkillsService,
          R = k({
            cursorRulesService: m,
            subagentsService: w,
            workspacePaths: e.workspacePaths,
            appendLine: e.appendLine,
            pushRequestContextEnabled: !0 === p,
          }),
          x = (0, l.Ps)({ agentSkillsService: b, appendLine: e.appendLine }),
          D = new P(),
          T = c.cursor.onDidChangeThirdPartyExtensibilityEnabled(() => {
            var e = [];
            try {
              const r = (0, n.q6)(),
                t = C(e, (0, i.VI)(r.withName("thirdPartyExtensibilityEnabledChanged")));
              (m.reload(t.ctx), w.reload());
            } catch (e) {
              var r = e,
                t = !0;
            } finally {
              E(e, r, t);
            }
          });
        let q = void 0 === e.whenProviderRegistered;
        e.whenProviderRegistered?.then(() => {
          q = !0;
        });
        const W = e.onDidChangeAgentStoreSkillRoots?.(() => {
          q
            ? y.reloadSkillRoots()
            : e.whenProviderRegistered?.then(() => {
                y.reloadSkillRoots();
              });
        });
        return {
          cursorRulesService: m,
          subagentsService: w,
          codebaseReferenceProvider: D,
          getAgentSkills: (e) => b.getAllAgentSkills(e),
          dispose() {
            (W?.(),
              T.dispose(),
              x.dispose(),
              R.dispose(),
              void 0 !== S ? S.cursorRulesService.dispose() : y.dispose());
          },
        };
      }
    },
    89859: (e, r, t) => {
      t.d(r, { H: () => n, glassRootAdditionalRules: () => i });
      var s = t(43955);
      const o =
        "You are in the user's home directory—the starting point, not a project workspace. Handle **general tasks** here: questions, quick file/system exploration, one-off commands, and anything that isn't really tied to a single codebase. Use your judgment.\n\nWhen the work belongs in a **project workspace**, infer or confirm the folder (recent paths, ~/Projects/, ~/Developer/, ~/repos/, and what the user said). If it's **clearly one existing project**, **always** use the `cursor-app-control` MCP's `move_agent_to_root` **before** you start making changes—edits, new files, installs, commits, or other project-scoped work—as soon as the path is known. Do that work only **after** the move; don't begin from home and relocate later. Working inside the project beats staying on home. If **which project or path is unclear**, use the ask question tool first. If **no suitable project exists**, help them create one, then call `move_agent_to_root` **before** any substantive project work, as soon as the directory exists.\n\n## Questions About Cursor\n\nWhen users ask how to use Cursor, configure settings, or have questions about Cursor features, use the cursor-guide skill to provide accurate, up-to-date answers.\n\n## Creating New Projects\n\nWhen a user wants to build something, help them get set up in a new project:\n\n1. Use the ask question tool to confirm the project name. Suggest a sensible default based on what they described. Include a brief \"any preferences for setup?\" option—if they care about directory layout, git, or boilerplate they can say so; otherwise use sensible defaults.\n2. Create the directory (prefer ~/Projects/ or ~/Developer/ if either exists, otherwise ~/), initialize git, and immediately call `move_agent_to_root` to move into the new project. Do this as soon as the folder exists—**before** making changes (scaffolding, installs, or anything else). Do not start project work from home and move afterward. Moving first gives you full workspace access for everything that follows.\n3. Continue scaffolding starter files, installing dependencies, and completing any remaining setup inside the project workspace.\n\nKeep setup frictionless by default—handle git, structure, and boilerplate without forcing decisions on things they may not care about. If they state preferences, respect them and go as deep as they want.";
      function n() {
        return new s.DX({
          fullPath: "Home workspace guidance",
          content: o,
          type: new s.f5({ type: { case: "global", value: new s.i9() } }),
          source: s.gv.TEAM,
        });
      }
      function i(e) {
        return !0 === e ? [n()] : [];
      }
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-host/dist/77.js.map
