"use strict";
((exports.id = 721),
  (exports.ids = [721]),
  (exports.modules = {
    28144: (e, t, r) => {
      r.d(t, { An: () => l, E5: () => m, e5: () => d, h2: () => u, jX: () => p });
      var s = r(91105),
        o = r(91398),
        a = r(30306);
      const c = "mcp",
        i = { disableConsoleFallback: !0 },
        n = (async () => {
          try {
            return await o.cursor.checkFeatureGate("mcp_structured_logging");
          } catch {
            return !1;
          }
        })();
      class l {
        constructor(e) {
          this.options = e;
        }
        log(e, t) {
          var r;
          ((r = () => {
            const e = this.buildMcpMetadata(t.metadata),
              r = t.error instanceof Error ? t.error : void 0;
            switch (t.level) {
              case "debug":
                o.cursor.logStructuredDebug(c, t.message, e, i);
                break;
              case "info":
                o.cursor.logStructuredInfo(c, t.message, e, i);
                break;
              case "warn":
                o.cursor.logStructuredWarn(c, t.message, e, i);
                break;
              case "error":
                o.cursor.logStructuredError(c, t.message, r, e, i);
                break;
              default: {
                const e = t.level;
                throw new Error(`Unhandled log level: ${e}`);
              }
            }
          }),
            n.then((e) => {
              e && r();
            }));
        }
        buildMcpMetadata(e) {
          const t = { subkey: this.options.subkey, mcp_version: this.options.mcpVersion };
          if ((void 0 !== this.options.identifier && (t.identifier = this.options.identifier), e))
            for (const [r, s] of Object.entries(e)) t[r] = s;
          return { mcpMeta: t };
        }
      }
      class u {
        constructor(e, t = s.utt) {
          ((this.backend = e), (this.metadataKey = t));
        }
        log(e, t) {
          if (!0 !== t.metadata?.[this.metadataKey]) return;
          const r = { ...(t.metadata ?? {}) };
          (delete r[this.metadataKey], this.backend.log(e, { ...t, metadata: r }));
        }
      }
      class p {
        constructor(e) {
          this.outputChannel = e;
        }
        log(e, t) {
          const { level: r, message: s, metadata: o, error: a } = t;
          let c = s;
          if (o && Object.keys(o).length > 0)
            try {
              c += ` ${JSON.stringify(o)}`;
            } catch {
              c += " [metadata not serializable]";
            }
          switch (r) {
            case "debug":
              (this.outputChannel.debug(c), a && this.outputChannel.debug(this.formatError(a)));
              break;
            case "info":
              (this.outputChannel.info(c), a && this.outputChannel.info(this.formatError(a)));
              break;
            case "warn":
              (this.outputChannel.warn(c), a && this.outputChannel.warn(this.formatError(a)));
              break;
            case "error":
              (this.outputChannel.error(c), a && this.outputChannel.error(this.formatError(a)));
              break;
            default:
              throw new Error(`Unhandled log level: ${r}`);
          }
        }
        formatError(e) {
          return e instanceof Error ? `${e.message}\n${e.stack ?? ""}` : String(e);
        }
      }
      const h = "agent_exec";
      class d {
        log(e, t) {
          const { level: r, message: s, metadata: c, error: i } = t,
            n = i instanceof Error ? i : void 0,
            l = (0, a.QE)(c);
          switch (r) {
            case "debug":
              o.cursor.logStructuredDebug(h, s, c);
              break;
            case "info":
              o.cursor.logStructuredInfo(h, s, c);
              break;
            case "warn":
              o.cursor.logStructuredWarn(h, s, l, a.bn);
              break;
            case "error":
              o.cursor.logStructuredError(h, s, n, l, a.bn);
              break;
            default:
              throw new Error(`Unhandled log level: ${r}`);
          }
        }
      }
      class m {
        record(e, t, r, s) {
          o.cursor.metricsGauge({ stat: t.name, value: r, tags: s });
        }
        increment(e, t, r, s) {
          o.cursor.metricsIncrement({ stat: t.name, value: r ?? 1, tags: s });
        }
        gauge(e, t, r, s) {
          o.cursor.metricsGauge({ stat: t.name, value: r, tags: s });
        }
        histogram(e, t, r, s) {
          o.cursor.metricsDistribution({ stat: t.name, value: r, tags: s });
        }
      }
    },
    65721: (e, t, r) => {
      r.d(t, { createIdeMcpActivate: () => m });
      var s = r(37949),
        o = r(91105),
        a = r(91398);
      function c(e) {
        if ("string" != typeof e) return;
        const t = e.trim();
        return t.length > 0 ? t : void 0;
      }
      class i {
        constructor(e) {
          this.elicitationHandler = e;
        }
        createProvider(e, t, r) {
          return new n(this.elicitationHandler, e, t, r);
        }
      }
      class n {
        constructor(e, t, r, s) {
          ((this.elicitationHandler = e),
            (this.serverName = t),
            (this.toolName = r),
            (this.toolCallId = s));
        }
        async elicit(e, t) {
          return await this.elicitationHandler(
            this.serverName,
            this.toolName,
            this.toolCallId,
            e,
            t?.signal,
          );
        }
      }
      var l = r(28144);
      const u = "meta_mcp_tool",
        p = "mcp_meta_tool_slim_descriptors",
        h = "mcp_always_expose_auth_tool",
        d = "snapshots";
      async function m(e) {
        const [t, r, n, m, g] = await Promise.all([
            a.cursor.checkFeatureGate(u),
            a.cursor.checkFeatureGate(p),
            a.cursor.checkFeatureGate(h),
            Promise.resolve(a.cursor.getDynamicConfigValue("mcp_auth_status_copy_config")).catch(
              () => {},
            ),
            Promise.resolve(a.cursor.getPushRequestContextEnabled()).catch(() => !1),
          ]),
          b = a.window.createOutputChannel("Mcp FileSystem Writer", { log: !0 });
        try {
          return (function (e, t, r) {
            const {
                mcpMetaToolEnabled: n,
                mcpMetaToolSlimDescriptors: u,
                alwaysExposeVirtualMcpAuthTool: p,
                mcpAuthStatusCopyConfigRaw: h,
                pushRequestContextEnabled: m,
              } = r,
              g = new s.yt([
                new l.jX(t),
                new l.h2(new l.An({ subkey: "agent_exec_mcp_file_writer", mcpVersion: d })),
              ]);
            let b;
            try {
              b = (function (e) {
                if (null === e || "object" != typeof e || Array.isArray(e)) return;
                const t = e,
                  r = {
                    authToolDescription: c(t.authToolDescription),
                    errorStatusMessage: c(t.errorStatusMessage),
                    needsAuthStatusMessageWithAuthTool: c(t.needsAuthStatusMessageWithAuthTool),
                  };
                return Object.values(r).every((e) => void 0 === e) ? void 0 : r;
              })(h);
            } catch {
              b = void 0;
            }
            const f = new o.x7h(e.mcpLease, e.projectDir, {
              loggerBackend: g,
              mcpAuthCopyOverrides: b,
              alwaysExposeVirtualMcpAuthTool: p,
              snapshotProvider: e.mcpLease.snapshotProvider,
              mcpVersion: d,
              onDidWrite: m
                ? (e) => {
                    a.cursor.pushMcpFileSystemDescriptors(e);
                  }
                : void 0,
            });
            let y;
            const w = () => ((y ??= new o.aZ7(e.mcpLease)), y),
              v = (e, t) => f.getMcpFileSystemOptions(e, t);
            return {
              snapshot: {
                metaToolEnabled: n,
                slimDescriptors: u,
                alwaysExposeVirtualMcpAuthTool: p,
                fileSystemWriterRegistered: !0,
                allowlistLogRegistered: !0,
              },
              resourceDefaults: {
                mcpMetaToolEnabled: n,
                mcpMetaToolSlimDescriptors: u,
                alwaysExposeVirtualMcpAuthTool: p,
                getMcpFileSystemOptions: v,
              },
              createSessionOverrides: ({ session: e }) => ({
                overrides: {
                  mcpElicitationFactory: new i(
                    async (t, r, s, o, a) => await e.mcpElicitationHandler(t, r, s, o, a),
                  ),
                  mcpStateAccessor: w(),
                  getMcpFileSystemOptions: v,
                  mcpMetaToolEnabled: n,
                  mcpMetaToolSlimDescriptors: u,
                  alwaysExposeVirtualMcpAuthTool: p,
                },
              }),
              dispose: () => {
                (f.dispose(), y?.dispose(), t.dispose());
              },
            };
          })(e, b, {
            mcpMetaToolEnabled: t,
            mcpMetaToolSlimDescriptors: r,
            alwaysExposeVirtualMcpAuthTool: n,
            mcpAuthStatusCopyConfigRaw: m,
            pushRequestContextEnabled: g,
          });
        } catch (e) {
          throw (b.dispose(), e);
        }
      }
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-host/dist/721.js.map
