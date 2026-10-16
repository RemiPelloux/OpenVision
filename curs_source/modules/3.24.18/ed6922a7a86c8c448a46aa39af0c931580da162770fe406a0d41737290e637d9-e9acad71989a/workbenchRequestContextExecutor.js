import { S_ } from "./De_3.js";
import { jzv } from "./ECo.js";
import { Hp } from "./HVr.js";
import { Fyt, GQe } from "./agent_skills_pb.js";
import { bn } from "./async.js";
import { am, kc } from "./buildFlags.js";
import { $7t, Cee, LQe, U7t, YWs, _4e } from "./cursor_rules_pb.js";
import { CX } from "./index_11.ts";
import { Gp } from "./index_3.ts";
import { VCo } from "./mcp-tool-annotations_2.ts";
import { qMd } from "./mcp_2.ts";
import { AMe, FQe, S4i, V7t, iDn, k4i, rDn } from "./mcp_pb.js";
import { Xl, ba } from "./path_2.js";
import { ADn, Bj, IDn, V4i, k4e, x$ } from "./request_context_exec_pb.js";
import { EW, mbn } from "./struct_pb.js";
import { x } from "./tslib.es6.js";
function sZv(e) {
    return new Fyt({
        scopedTo: e.scopedTo,
        content: "",
        description: e.description,
        disabledEnvironments: e.disabledEnvironments,
        disableModelInvocation: e.disableModelInvocation,
        environments: e.environments,
        fullPath: e.fullPath,
        gitRemoteOrigin: e.gitRemoteOrigin,
        globs: e.globs,
        marketplace: e.marketplace,
        marketplaceId: e.marketplaceId,
        parseError: e.parseError,
        plugin: e.plugin,
        pluginId: e.pluginId,
        argumentHint: e.argumentHint,
        disableUserInvocation: e.disableUserInvocation
    });
}
function oZv(e) {
    return e.disableModelInvocation ? e.plugin !== void 0 || e.marketplace !== void 0 || e.pluginId !== void 0 || e.marketplaceId !== void 0 : !0;
}
function aZv(e, t) {
    const n = new Set(t.map((i)=>i.fullPath).filter((i)=>i.length > 0));
    return n.size === 0 ? e : e.filter((i)=>i.type?.type.case !== "agentFetched" || !n.has(i.fullPath));
}
function cZv(e) {
    const t = e.userRules.filter((i)=>!i.isGenerated).map((i)=>new Cee({
            fullPath: i.id,
            content: i.knowledge,
            type: new LQe({
                type: {
                    case: "global",
                    value: new $7t({})
                }
            }),
            source: U7t.USER
        }));
    return [
        ...e.teamRules.map((i)=>{
            const r = i.globs ?? [], s = r.length > 0 ? new LQe({
                type: {
                    case: "fileGlobbed",
                    value: new YWs({
                        globs: r
                    })
                }
            }) : new LQe({
                type: {
                    case: "global",
                    value: new $7t({})
                }
            });
            return new Cee({
                fullPath: i.filename,
                content: i.body,
                type: s,
                source: U7t.TEAM,
                isRequired: i.isRequired === !0
            });
        }),
        ...t
    ];
}
function lZv(e) {
    const t = e?.trim();
    if (t) try {
        return new Intl.DateTimeFormat("en-US", {
            timeZone: t
        }).format(new Date(0)), t;
    } catch  {
        return;
    }
}
function uZv(e, t, n) {
    const i = e.getResolvedMcpSnapshots();
    return dZv(i, t, n);
}
function n1h(e, t) {
    return e === void 0 ? {} : t ? {
        inputSchemaJson: JSON.stringify(e)
    } : {
        inputSchema: EW.fromJson(e)
    };
}
function dZv(e, t, n) {
    const i = [], r = [], s = [];
    for (const o of e){
        if (!n || qMd.has(o.serverIdentifier)) for (const l of o.tools)i.push(new AMe({
            name: `${o.serverIdentifier}-${l.name}`,
            providerIdentifier: o.serverName,
            toolName: l.name,
            description: l.description,
            ...n1h(l.inputSchema, t)
        }));
        const c = o.instructions?.trim();
        c && r.push(new iDn({
            serverName: o.serverName,
            instructions: c,
            serverIdentifier: o.serverIdentifier
        })), s.push(new rDn({
            serverIdentifier: o.serverIdentifier,
            serverName: o.serverName,
            plugin: o.plugin,
            marketplace: o.marketplace,
            pluginDbId: o.pluginId,
            marketplaceId: o.marketplaceId,
            serverUseInstructions: c || void 0,
            tools: o.tools.map((l)=>new S4i({
                    toolName: l.name,
                    ...jzv(l.annotations),
                    ...n ? {} : {
                        description: l.description,
                        ...n1h(l.inputSchema, t)
                    }
                }))
        }));
    }
    return {
        tools: i,
        mcpInstructions: r,
        mcpMetaToolOptions: new k4i({
            enabled: !0,
            mcpDescriptors: s
        }),
        sourceServers: [
            ...e
        ]
    };
}
function hZv(e) {
    return e.map((t)=>({
            serverIdentifier: t.serverIdentifier,
            serverName: t.serverName,
            plugin: t.plugin,
            marketplace: t.marketplace,
            pluginId: t.pluginDbId,
            marketplaceId: t.marketplaceId,
            snapshotEpoch: 0,
            snapshotRevision: 0,
            snapshotGeneration: 0,
            status: "connected",
            tools: t.tools.map((n)=>{
                let i;
                if (n.inputSchemaJson !== void 0) try {
                    i = JSON.parse(n.inputSchemaJson);
                } catch  {
                    i = void 0;
                }
                const r = n.inputSchema;
                if (i === void 0 && r !== void 0 && typeof r.toJson == "function") try {
                    i = r.toJson();
                } catch  {
                    i = void 0;
                }
                return {
                    name: n.toolName,
                    description: n.description,
                    inputSchema: i
                };
            }),
            resources: [],
            prompts: [],
            instructions: t.serverUseInstructions
        }));
}
function pZv(e, t, n) {
    const i = t.instructionsCache(), r = t.allServers(), s = new Map(r.map((a)=>[
            a.identifier,
            a
        ])), o = e.map((a)=>{
        const c = s.get(a.serverIdentifier), l = i[a.serverIdentifier]?.trim();
        return new rDn({
            serverIdentifier: a.serverIdentifier,
            serverName: c?.name ?? a.serverIdentifier,
            plugin: c?.pluginName,
            marketplace: c?.marketplace,
            pluginDbId: c?.pluginId,
            marketplaceId: c?.marketplaceId,
            folderPath: a.folderPath,
            serverUseInstructions: l || void 0,
            tools: a.tools.map((u)=>new S4i({
                    toolName: u.toolName,
                    definitionPath: u.definitionPath
                }))
        });
    });
    return new V7t({
        enabled: !0,
        workspaceProjectDir: n,
        mcpDescriptors: o
    });
}
var u1o, d1o, h1o, p1o, AQi, i1h, r1h;
export { AQi, aZv, cZv, d1o, dZv, h1o, hZv, i1h, lZv, n1h, oZv, p1o, pZv, r1h, sZv, u1o, uZv };
var __wakaru_mZv_initialized = false;
export function mZv() {
if (__wakaru_mZv_initialized) return;
__wakaru_mZv_initialized = true;
"use strict";
x(), CX(), Gp(), VCo(), mbn(), Bj(), FQe(), am(), ba(), bn(), _4e(), GQe(), u1o = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), d1o = (e)=>{
    throw TypeError(e);
}, h1o = (e, t, n)=>{
    if (t != null) {
        typeof t != "object" && typeof t != "function" && d1o("Object expected");
        var i, r;
        n && (i = t[u1o("asyncDispose")]), i === void 0 && (i = t[u1o("dispose")], n && (r = i)), typeof i != "function" && d1o("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), e.push([
            n,
            i,
            t
        ]);
    } else n && e.push([
        n
    ]);
    return t;
}, p1o = (e, t, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, c, l) {
        return l = Error(c), l.name = "SuppressedError", l.error = o, l.suppressed = a, l;
    }, r = (o)=>t = n ? new i(o, t, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = e.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (c)=>(r(c), s()));
        } catch (c) {
            r(c);
        }
        if (n) throw t;
    };
    return s();
}, AQi = "[push_req_context]", i1h = 1e4, r1h = class {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v, b, y, T){
        this.remoteExecutor = e, this.cursorRulesService = t, this.subagentsService = n, this.pushRequestContextEnabled = i, this.codebaseReferenceService = r, this.mcpService = s, this.mcpMetaToolEnabled = o, this.mcpInputSchemaJsonEnabled = a, this.mcpMetaToolSlimDescriptorsEnabled = c, this.agentSkillsService = l, this.adminSettingsService = u, this.experimentService = h, this.pushRequestContextService = p, this.workspaceContextService = g, this.pinnedWorkspacePaths = f, this.trackedStateSnapshotService = v, this.structuredLogService = b, this.telemetryService = y, this.knowledgeBaseService = T;
    }
    async execute(e, t, n) {
        var i = [];
        try {
            const o = h1o(i, S_(e.withName("WorkbenchRequestContextExecutor.execute")));
            if (this.pushRequestContextEnabled) return this.buildFromPushedData(o.ctx, t, n);
            const a = await this.remoteExecutor.execute(o.ctx, t, n);
            if (this.mcpMetaToolEnabled && a.result.case === "success") {
                const c = a.result.value.requestContext?.mcpMetaToolOptions;
                c?.enabled && this.mcpService.setMetaMcpFreshnessBaseline(hZv(c.mcpDescriptors));
            }
            return a.result.case === "success" && a.result.value.requestContext && this.injectLocalModeNonFileRules(a.result.value.requestContext), a;
        } catch (o) {
            var r = o, s = !0;
        } finally{
            p1o(i, r, s);
        }
    }
    injectLocalModeNonFileRules(e) {
        if (!kc.localMode) return;
        const t = cZv({
            userRules: this.knowledgeBaseService.items,
            teamRules: this.cursorRulesService.getTeamRules({
                includeDisabled: !0
            })
        });
        t.length > 0 && (e.rules = [
            ...e.rules,
            ...t
        ]);
        const n = this.cursorRulesService.getTeamRules({
            includeDisabled: !0
        }).filter((i)=>this.cursorRulesService.isTeamRuleDisabled(i.filename)).map((i)=>i.filename);
        e.disabledTeamRules = [
            ...new Set([
                ...e.disabledTeamRules,
                ...n
            ])
        ];
    }
    buildEnv(e) {
        const t = [
            ...this.pinnedWorkspacePaths
        ];
        let n;
        try {
            n = lZv(new Intl.DateTimeFormat().resolvedOptions().timeZone);
        } catch  {
            n = void 0;
        }
        const i = e?.projectDir, r = i, s = i ? `${i}/terminals` : void 0, o = i ? `${i}/agent-transcripts` : void 0, a = e?.isWorkingDirHomeDir, c = this.pushRequestContextService.getSandboxNetworkFileEntries(), l = this.adminSettingsService.getCached().networkAllowlist ?? [], u = [
            ...new Set([
                ...l,
                ...c
            ])
        ];
        let h = !1;
        try {
            const g = this.experimentService.getDynamicConfig("sandbox_default_network_allowlist", {
                disableExposureLog: !1
            })?.allowlist;
            h = Array.isArray(g) && g.length > 0;
        } catch  {
            h = !1;
        }
        return new k4e({
            osVersion: e?.osVersion,
            shell: e?.shell,
            workspacePaths: t,
            timeZone: n,
            projectFolder: r,
            terminalsFolder: s,
            agentTranscriptsFolder: o,
            isWorkingDirHomeDir: a,
            computerUseSupported: !1,
            sandboxNetworkHasDefaults: h,
            ...u.length > 0 && {
                sandboxNetworkExplicitAllowlist: u
            }
        });
    }
    buildGitRepos(e) {
        const t = this.pushRequestContextService.getGitWorkspaceCaches();
        if (!t) return {
            gitRepos: [],
            gitRepoInfoComplete: !1,
            gitStatusInfoComplete: !1
        };
        const n = this.workspaceContextService.getWorkspace().folders.map((l)=>l.uri.fsPath);
        if (n.length === 0 && this.pinnedWorkspacePaths.length > 0) return {
            gitRepos: [],
            gitRepoInfoComplete: !1,
            gitStatusInfoComplete: !1
        };
        const i = n.filter((l)=>t.get(l)?.repoPath !== void 0), r = [];
        for (const l of n){
            const u = t.get(l);
            if (!u || u.repoPath === void 0) continue;
            const h = e?.[l];
            r.push(new V4i({
                path: u.repoPath,
                remoteUrl: u.remoteUrl,
                status: h?.gitStatus,
                branchName: h?.gitBranchName,
                isOriginBacked: u.isOriginBacked
            }));
        }
        if (e === void 0 && !this.pushRequestContextService.isTrackedStateExpected()) return {
            gitRepos: r,
            gitRepoInfoComplete: !0,
            gitStatusInfoComplete: !1
        };
        const s = e === void 0 ? 0 : i.filter((l)=>e[l] !== void 0).length, o = e === void 0 ? 0 : i.filter((l)=>e[l]?.gitStatus !== void 0).length, a = e !== void 0 && s === i.length, c = e !== void 0 && o === i.length;
        return e !== void 0 && !a && this.structuredLogService.debug("agent_exec", `${AQi} Tracked state snapshot missing git workspace coverage`, this.getLogMetadata({
            trackedWorkspaceCount: s,
            expectedTrackedWorkspaceCount: i.length
        })), e !== void 0 && a && !c && this.structuredLogService.debug("agent_exec", `${AQi} Tracked state snapshot missing git status coverage`, this.getLogMetadata({
            trackedWorkspaceStatusCount: o,
            expectedTrackedWorkspaceStatusCount: i.length
        })), {
            gitRepos: r,
            gitRepoInfoComplete: a,
            gitStatusInfoComplete: c
        };
    }
    getRequestIdMetadata(e) {
        return e ? {
            request: {
                id: e
            }
        } : {};
    }
    getLogMetadata(e = {}, t) {
        return {
            vscodeSessionId: this.telemetryService.sessionId,
            ...this.getRequestIdMetadata(t),
            ...e
        };
    }
    async buildFromPushedData(e, t, n) {
        var i = [];
        try {
            const o = h1o(i, S_(e.withName("WorkbenchRequestContextExecutor.buildFromPushedData"))), a = performance.now(), c = n?.execId;
            let l = this.cursorRulesService.peekPushedRulesProto();
            l === void 0 && (l = await Hp(Promise.resolve(this.cursorRulesService.getPushedRulesProto()), i1h));
            const u = this.subagentsService.peekRawSubagents(), h = this.trackedStateSnapshotService.getTrackedState(), p = this.codebaseReferenceService.getCodebaseReference(), g = this.codebaseReferenceService.isFirstRefreshComplete(), f = this.pushRequestContextService.getEnvStaticData(), v = l ?? [], b = u ?? [], y = this.agentSkillsService.getAgentSkills(), T = y.filter(oZv).map(sZv), E = this.agentSkillsService.hasAgentSkillsSnapshot(), A = this.buildEnv(f), R = uZv(this.mcpService, this.mcpInputSchemaJsonEnabled, this.mcpMetaToolEnabled && this.mcpMetaToolSlimDescriptorsEnabled);
            this.mcpMetaToolEnabled && this.mcpService.setMetaMcpFreshnessBaseline(R.sourceServers);
            const D = this.mcpService.isMcpInfoComplete(), P = this.mcpService.getMcpFileSystemDescriptors(), N = this.mcpService.getMcpWorkspaceProjectDir(), O = this.mcpMetaToolEnabled || P !== void 0 && N !== void 0, F = P && N ? pZv(P, this.mcpService, N) : void 0, { gitRepos: H, gitRepoInfoComplete: $, gitStatusInfoComplete: W } = this.buildGitRepos(h), G = v.map((Z)=>Cee.fromJson(Z, {
                    ignoreUnknownFields: !0
                })).filter((Z)=>Z.source !== U7t.TEAM || !this.cursorRulesService.isTeamRuleDisabled(Xl(Z.fullPath))), q = aZv(G, y), z = this.cursorRulesService.getTeamRules({
                includeDisabled: !0
            }).filter((Z)=>this.cursorRulesService.isTeamRuleDisabled(Z.filename)).map((Z)=>Z.filename), X = new x$({
                rules: q,
                disabledTeamRules: z,
                env: A,
                repositoryInfo: p ? [
                    {
                        relativeWorkspacePath: p.relativeWorkspacePath,
                        repoName: p.repoName,
                        repoOwner: p.repoOwner,
                        isTracked: p.isTracked,
                        isLocal: p.isLocal,
                        orthogonalTransformSeed: p.orthogonalTransformSeed,
                        pathEncryptionKey: p.pathEncryptionKey
                    }
                ] : [],
                customSubagents: b,
                tools: R.tools,
                mcpInstructions: R.mcpInstructions,
                mcpMetaToolOptions: this.mcpMetaToolEnabled ? R.mcpMetaToolOptions : void 0,
                mcpFileSystemOptions: F,
                supportsMcpAuth: !0,
                agentSkills: T,
                gitRepos: H,
                gitRepoInfoComplete: $,
                mcpInfoComplete: D,
                rulesInfoComplete: l !== void 0,
                envInfoComplete: f !== void 0,
                repositoryInfoComplete: g,
                customSubagentsInfoComplete: u !== void 0,
                agentSkillsInfoComplete: E,
                mcpFileSystemInfoComplete: O,
                gitStatusInfoComplete: W
            });
            this.injectLocalModeNonFileRules(X);
            const Y = new IDn({
                result: {
                    case: "success",
                    value: new ADn({
                        requestContext: X
                    })
                }
            });
            return this.structuredLogService.debug("agent_exec", `${AQi} buildFromPushedData completed`, this.getLogMetadata({
                cachePeekHit: {
                    pushedRulesProto: l !== void 0,
                    rawSubagents: u !== void 0,
                    trackedState: h !== void 0,
                    codebaseReference: p !== void 0,
                    envStaticData: f !== void 0
                },
                latencyMs: performance.now() - a
            }, c)), Y;
        } catch (o) {
            var r = o, s = !0;
        } finally{
            p1o(i, r, s);
        }
    }
};

}
