"use strict";
((exports.id = 807),
  (exports.ids = [807]),
  (exports.modules = {
    29534: (e, s, t) => {
      t.d(s, { Qf: () => o, ic: () => i });
      const i = "sandbox_read_control_portal";
      function o(e) {
        let s = !1,
          t = 0;
        const o = () => {
          const i = ++t;
          Promise.resolve(e.checkFeatureGate()).then(
            (e) => {
              i === t && (s = e);
            },
            () => {
              i === t && (s = !1);
            },
          );
        };
        o();
        const n = e.onDidChangeGates((e) => {
          var s;
          (void 0 === (s = e.changedGates) || s.includes(i)) && o();
        });
        return { getEnabled: () => s, dispose: () => n.dispose() };
      }
    },
    36807: (e, s, t) => {
      t.d(s, {
        createIdeSessionResourceOverlay: () => y,
        createIdeTeamSettingsService: () => w,
        getOrCreateIdeIgnoreService: () => S,
      });
      var i = t(70857),
        o = t(91105),
        n = t(32180),
        r = t(91398),
        a = t(29534),
        c = t(25925);
      function l(e) {
        if ("insecure_none" === e.type) return e;
        const { networkAccess: s, skipStatsigDefaults: t, ...i } = e;
        return { ...i, networkPolicy: s ? (0, c.T6)() : (0, c.Po)(), skipStatsigDefaults: t };
      }
      function d(e) {
        return { ...e, userConfiguredPolicy: l(e.userConfiguredPolicy) };
      }
      class u {
        constructor(e, s) {
          ((this.fetchPermissions = e),
            (this.onDidChangePermissions = s),
            (this.fetchStarted = !1),
            (this.cachedPermissions = new Promise((e) => {
              this.resolveFirstPermissions = e;
            })),
            (this.permissionsSubscription = this.onDidChangePermissions((e) => {
              this.applyPermissions(d(e));
            })));
        }
        async getPermissions() {
          return void 0 !== this.latestPermissions
            ? this.latestPermissions
            : (this.ensureFetchStarted(), this.cachedPermissions);
        }
        getPermissionsSnapshot() {
          return this.latestPermissions;
        }
        applyPermissions(e) {
          ((this.latestPermissions = e), (this.cachedPermissions = Promise.resolve(e)));
          const s = this.resolveFirstPermissions;
          ((this.resolveFirstPermissions = void 0), s?.(e));
        }
        ensureFetchStarted() {
          this.fetchStarted ||
            void 0 !== this.latestPermissions ||
            ((this.fetchStarted = !0),
            this.fetchPermissions().then(
              (e) => {
                void 0 === this.latestPermissions && this.applyPermissions(d(e));
              },
              () => {},
            ));
        }
        async updatePermissions(e) {}
        dispose() {
          this.permissionsSubscription.dispose();
        }
      }
      var h = t(46862);
      const p = "mcp_access_network_allowlist",
        m = "mcp_settings_overhaul",
        g = "mcp_user_extension_stdio_unsandboxed_win32",
        v = "admin_command_denylist_enforcement_killswitch";
      class P {
        constructor(e) {
          this.approvalHandler = e;
        }
        async requestApproval(e) {
          if (e.toolCallId) {
            const s = { toolCallId: e.toolCallId, operation: { type: e.type, details: e.details } };
            return this.approvalHandler(s);
          }
          return { approved: !0 };
        }
        async requestReadApproval(e) {
          if (e.toolCallId) {
            const s = { toolCallId: e.toolCallId, operation: { type: e.type, details: e.details } };
            return this.approvalHandler(s);
          }
          return { approved: !0 };
        }
      }
      function w() {
        const e = {
            getTeamAdminSettings: async () => {
              const e = await r.cursor.getTeamAdminSettings();
              return e ? n.V5U.fromJson(e, { ignoreUnknownFields: !0 }) : void 0;
            },
            getTeamRepos: async () => {
              try {
                const e = await r.cursor.getTeamRepos();
                return e ? new n.k1F(e) : void 0;
              } catch {
                return;
              }
            },
          },
          s = {
            getDefaultNetworkAllowlist: async () => {
              try {
                const e = await r.cursor.getDynamicConfigValue("sandbox_default_network_allowlist");
                return e?.allowlist ?? [];
              } catch {
                return [];
              }
            },
          };
        return new o.waD(e, s, {
          isMcpAccessNetworkAllowlistEnabled: () => r.cursor.checkFeatureGate(p),
          isMcpSettingsOverhaulEnabled: (e) => r.cursor.checkFeatureGate(m, e),
          isWin32UserExtensionStdioUnsandboxEnabled: (e) => r.cursor.checkFeatureGate(g, e),
          isAdminCommandDenylistEnforcementKilled: () => r.cursor.checkFeatureGate(v),
          isReadControlEnabled: () => r.cursor.checkFeatureGate(a.ic),
        });
      }
      function S(e) {
        const s = [...e.workspacePaths].sort().join("\0");
        let t = e.ignoreServiceCache.get(s);
        return (
          void 0 === t &&
            ((t = new o.E1e(e.gitExecutor, e.teamSettingsService, [...e.workspacePaths])),
            e.ignoreServiceCache.set(s, t)),
          t
        );
      }
      function y(e) {
        const s = S(e),
          t = new P(async (s) => await e.session.approvalHandler(s)),
          n = new u(async () => await e.session.getPermissions(), e.session.onDidChangePermissions),
          r = (0, h.En)(e.workspacePaths, i.homedir());
        return {
          ignoreService: s,
          pendingDecisionStore: t,
          permissionsService: new o.khl(
            s,
            t,
            n,
            e.teamSettingsService,
            r,
            !0,
            void 0 === e.mcpAllowlistLog ? void 0 : { mcpAllowlistLog: e.mcpAllowlistLog },
          ),
          executionWorkspacePaths: r,
          getSandboxEnabled: () => {
            const e = n.getPermissionsSnapshot()?.userConfiguredPolicy;
            return void 0 !== e && "insecure_none" !== e.type;
          },
          dispose: () => {
            n.dispose();
          },
        };
      }
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-host/dist/807.js.map
