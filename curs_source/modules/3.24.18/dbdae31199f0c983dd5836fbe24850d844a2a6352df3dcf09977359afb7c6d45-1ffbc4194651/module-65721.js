require.d(exports, {
    createIdeMcpActivate: ()=>m
});
var s = require(37949), o = require(91105), a = require(91398);
function c(e) {
    if ("string" != typeof e) return;
    const t = e.trim();
    return t.length > 0 ? t : void 0;
}
class i {
    constructor(e){
        this.elicitationHandler = e;
    }
    createProvider(e, t, r) {
        return new n(this.elicitationHandler, e, t, r);
    }
}
class n {
    constructor(e, t, r, s){
        this.elicitationHandler = e, this.serverName = t, this.toolName = r, this.toolCallId = s;
    }
    async elicit(e, t) {
        return await this.elicitationHandler(this.serverName, this.toolName, this.toolCallId, e, t?.signal);
    }
}
var l = require("./module-28144.js");
const u = "meta_mcp_tool", p = "mcp_meta_tool_slim_descriptors", h = "mcp_always_expose_auth_tool", d = "snapshots";
async function m(e) {
    const [t, r, n, m, g] = await Promise.all([
        a.cursor.checkFeatureGate(u),
        a.cursor.checkFeatureGate(p),
        a.cursor.checkFeatureGate(h),
        Promise.resolve(a.cursor.getDynamicConfigValue("mcp_auth_status_copy_config")).catch(()=>{}),
        Promise.resolve(a.cursor.getPushRequestContextEnabled()).catch(()=>!1)
    ]), b = a.window.createOutputChannel("Mcp FileSystem Writer", {
        log: !0
    });
    try {
        return function(e, t, r) {
            const { mcpMetaToolEnabled: n, mcpMetaToolSlimDescriptors: u, alwaysExposeVirtualMcpAuthTool: p, mcpAuthStatusCopyConfigRaw: h, pushRequestContextEnabled: m } = r, g = new s.yt([
                new l.jX(t),
                new l.h2(new l.An({
                    subkey: "agent_exec_mcp_file_writer",
                    mcpVersion: d
                }))
            ]);
            let b;
            try {
                b = function(e) {
                    if (null === e || "object" != typeof e || Array.isArray(e)) return;
                    const t = e, r = {
                        authToolDescription: c(t.authToolDescription),
                        errorStatusMessage: c(t.errorStatusMessage),
                        needsAuthStatusMessageWithAuthTool: c(t.needsAuthStatusMessageWithAuthTool)
                    };
                    return Object.values(r).every((e)=>void 0 === e) ? void 0 : r;
                }(h);
            } catch  {
                b = void 0;
            }
            const f = new o.x7h(e.mcpLease, e.projectDir, {
                loggerBackend: g,
                mcpAuthCopyOverrides: b,
                alwaysExposeVirtualMcpAuthTool: p,
                snapshotProvider: e.mcpLease.snapshotProvider,
                mcpVersion: d,
                onDidWrite: m ? (e)=>{
                    a.cursor.pushMcpFileSystemDescriptors(e);
                } : void 0
            });
            let y;
            const w = ()=>(y ??= new o.aZ7(e.mcpLease), y), v = (e, t)=>f.getMcpFileSystemOptions(e, t);
            return {
                snapshot: {
                    metaToolEnabled: n,
                    slimDescriptors: u,
                    alwaysExposeVirtualMcpAuthTool: p,
                    fileSystemWriterRegistered: !0,
                    allowlistLogRegistered: !0
                },
                resourceDefaults: {
                    mcpMetaToolEnabled: n,
                    mcpMetaToolSlimDescriptors: u,
                    alwaysExposeVirtualMcpAuthTool: p,
                    getMcpFileSystemOptions: v
                },
                createSessionOverrides: ({ session: e })=>({
                        overrides: {
                            mcpElicitationFactory: new i(async (t, r, s, o, a)=>await e.mcpElicitationHandler(t, r, s, o, a)),
                            mcpStateAccessor: w(),
                            getMcpFileSystemOptions: v,
                            mcpMetaToolEnabled: n,
                            mcpMetaToolSlimDescriptors: u,
                            alwaysExposeVirtualMcpAuthTool: p
                        }
                    }),
                dispose: ()=>{
                    f.dispose(), y?.dispose(), t.dispose();
                }
            };
        }(e, b, {
            mcpMetaToolEnabled: t,
            mcpMetaToolSlimDescriptors: r,
            alwaysExposeVirtualMcpAuthTool: n,
            mcpAuthStatusCopyConfigRaw: m,
            pushRequestContextEnabled: g
        });
    } catch (e) {
        throw b.dispose(), e;
    }
}
