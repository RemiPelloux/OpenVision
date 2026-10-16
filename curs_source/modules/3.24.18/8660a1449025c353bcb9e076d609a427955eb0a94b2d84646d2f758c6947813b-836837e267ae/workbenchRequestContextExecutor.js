import { Vh } from "./Iwo.js";
import { abk, cbk, dbk, lbk, mbk, obk, pbk, ubk } from "./Ycg.js";
import { rbt } from "./agent_skills_pb.js";
import { qn } from "./async.js";
import { vl, wm } from "./buildFlags.js";
import { Wde, Xet, dmn } from "./cursor_rules_pb.js";
import { uie } from "./index_11.ts";
import { Ng } from "./index_3.ts";
import { SS } from "./ipa.js";
import { $ol } from "./mcp-tool-annotations_2.ts";
import { Q_t } from "./mcp_pb.js";
import { Ku, Ul } from "./path_2.js";
import { ESr, Gte, Sni, itt, kni, mY } from "./request_context_exec_pb.js";
import { Cei } from "./struct_pb.js";
import { E } from "./tslib.es6.js";
var pll, mll, gll, fll, oos, kdg, wdg;
export { fll, gll, kdg, mll, oos, pll, wdg };
var __wakaru_gbk_initialized = false;
export function gbk() {
if (__wakaru_gbk_initialized) return;
__wakaru_gbk_initialized = true;
"use strict";
E(), uie(), Ng(), $ol(), Cei(), Gte(), Q_t(), wm(), Ul(), qn(), Xet(), rbt(), pll = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), mll = (t)=>{
    throw TypeError(t);
}, gll = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && mll("Object expected");
        var i, r;
        n && (i = e[pll("asyncDispose")]), i === void 0 && (i = e[pll("dispose")], n && (r = i)), typeof i != "function" && mll("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), t.push([
            n,
            i,
            e
        ]);
    } else n && t.push([
        n
    ]);
    return e;
}, fll = (t, e, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, l, c) {
        return c = Error(l), c.name = "SuppressedError", c.error = o, c.suppressed = a, c;
    }, r = (o)=>e = n ? new i(o, e, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = t.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (l)=>(r(l), s()));
        } catch (l) {
            r(l);
        }
        if (n) throw e;
    };
    return s();
}, oos = "[push_req_context]", kdg = 1e4, wdg = class {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y){
        this.remoteExecutor = t, this.cursorRulesService = e, this.subagentsService = n, this.pushRequestContextEnabled = i, this.codebaseReferenceService = r, this.mcpService = s, this.mcpMetaToolEnabled = o, this.mcpInputSchemaJsonEnabled = a, this.mcpMetaToolSlimDescriptorsEnabled = l, this.agentSkillsService = c, this.adminSettingsService = u, this.experimentService = d, this.pushRequestContextService = h, this.workspaceContextService = p, this.pinnedWorkspacePaths = g, this.trackedStateSnapshotService = f, this.structuredLogService = _, this.telemetryService = b, this.knowledgeBaseService = y;
    }
    async execute(t, e, n) {
        var i = [];
        try {
            const o = gll(i, SS(t.withName("WorkbenchRequestContextExecutor.execute")));
            if (this.pushRequestContextEnabled) return this.buildFromPushedData(o.ctx, e, n);
            const a = await this.remoteExecutor.execute(o.ctx, e, n);
            if (this.mcpMetaToolEnabled && a.result.case === "success") {
                const l = a.result.value.requestContext?.mcpMetaToolOptions;
                l?.enabled && this.mcpService.setMetaMcpFreshnessBaseline(pbk(l.mcpDescriptors));
            }
            return a.result.case === "success" && a.result.value.requestContext && this.injectLocalModeNonFileRules(a.result.value.requestContext), a;
        } catch (o) {
            var r = o, s = !0;
        } finally{
            fll(i, r, s);
        }
    }
    injectLocalModeNonFileRules(t) {
        if (!vl.localMode) return;
        const e = cbk({
            userRules: this.knowledgeBaseService.items,
            teamRules: this.cursorRulesService.getTeamRules({
                includeDisabled: !0
            })
        });
        e.length > 0 && (t.rules = [
            ...t.rules,
            ...e
        ]);
        const n = this.cursorRulesService.getTeamRules({
            includeDisabled: !0
        }).filter((i)=>this.cursorRulesService.isTeamRuleDisabled(i.filename)).map((i)=>i.filename);
        t.disabledTeamRules = [
            ...new Set([
                ...t.disabledTeamRules,
                ...n
            ])
        ];
    }
    buildEnv(t) {
        const e = [
            ...this.pinnedWorkspacePaths
        ];
        let n;
        try {
            n = ubk(new Intl.DateTimeFormat().resolvedOptions().timeZone);
        } catch  {
            n = void 0;
        }
        const i = t?.projectDir, r = i, s = i ? `${i}/terminals` : void 0, o = i ? `${i}/agent-transcripts` : void 0, a = t?.isWorkingDirHomeDir, l = this.pushRequestContextService.getSandboxNetworkFileEntries(), c = this.adminSettingsService.getCached().networkAllowlist ?? [], u = [
            ...new Set([
                ...c,
                ...l
            ])
        ];
        let d = !1;
        try {
            const p = this.experimentService.getDynamicConfig("sandbox_default_network_allowlist", {
                disableExposureLog: !1
            })?.allowlist;
            d = Array.isArray(p) && p.length > 0;
        } catch  {
            d = !1;
        }
        return new itt({
            osVersion: t?.osVersion,
            shell: t?.shell,
            workspacePaths: e,
            timeZone: n,
            projectFolder: r,
            terminalsFolder: s,
            agentTranscriptsFolder: o,
            isWorkingDirHomeDir: a,
            computerUseSupported: !1,
            sandboxNetworkHasDefaults: d,
            ...u.length > 0 && {
                sandboxNetworkExplicitAllowlist: u
            }
        });
    }
    buildGitRepos(t) {
        const e = this.pushRequestContextService.getGitWorkspaceCaches();
        if (!e) return {
            gitRepos: [],
            gitRepoInfoComplete: !1,
            gitStatusInfoComplete: !1
        };
        const n = this.workspaceContextService.getWorkspace().folders.map((c)=>c.uri.fsPath);
        if (n.length === 0 && this.pinnedWorkspacePaths.length > 0) return {
            gitRepos: [],
            gitRepoInfoComplete: !1,
            gitStatusInfoComplete: !1
        };
        const i = n.filter((c)=>e.get(c)?.repoPath !== void 0), r = [];
        for (const c of n){
            const u = e.get(c);
            if (!u || u.repoPath === void 0) continue;
            const d = t?.[c];
            r.push(new ESr({
                path: u.repoPath,
                remoteUrl: u.remoteUrl,
                status: d?.gitStatus,
                branchName: d?.gitBranchName,
                isOriginBacked: u.isOriginBacked
            }));
        }
        if (t === void 0 && !this.pushRequestContextService.isTrackedStateExpected()) return {
            gitRepos: r,
            gitRepoInfoComplete: !0,
            gitStatusInfoComplete: !1
        };
        const s = t === void 0 ? 0 : i.filter((c)=>t[c] !== void 0).length, o = t === void 0 ? 0 : i.filter((c)=>t[c]?.gitStatus !== void 0).length, a = t !== void 0 && s === i.length, l = t !== void 0 && o === i.length;
        return t !== void 0 && !a && this.structuredLogService.debug("agent_exec", `${oos} Tracked state snapshot missing git workspace coverage`, this.getLogMetadata({
            trackedWorkspaceCount: s,
            expectedTrackedWorkspaceCount: i.length
        })), t !== void 0 && a && !l && this.structuredLogService.debug("agent_exec", `${oos} Tracked state snapshot missing git status coverage`, this.getLogMetadata({
            trackedWorkspaceStatusCount: o,
            expectedTrackedWorkspaceStatusCount: i.length
        })), {
            gitRepos: r,
            gitRepoInfoComplete: a,
            gitStatusInfoComplete: l
        };
    }
    getRequestIdMetadata(t) {
        return t ? {
            request: {
                id: t
            }
        } : {};
    }
    getLogMetadata(t = {}, e) {
        return {
            vscodeSessionId: this.telemetryService.sessionId,
            ...this.getRequestIdMetadata(e),
            ...t
        };
    }
    async buildFromPushedData(t, e, n) {
        var i = [];
        try {
            const o = gll(i, SS(t.withName("WorkbenchRequestContextExecutor.buildFromPushedData"))), a = performance.now(), l = n?.execId;
            let c = this.cursorRulesService.peekPushedRulesProto();
            c === void 0 && (c = await Vh(Promise.resolve(this.cursorRulesService.getPushedRulesProto()), kdg));
            const u = this.subagentsService.peekRawSubagents(), d = this.trackedStateSnapshotService.getTrackedState(), h = this.codebaseReferenceService.getCodebaseReference(), p = this.codebaseReferenceService.isFirstRefreshComplete(), g = this.pushRequestContextService.getEnvStaticData(), f = c ?? [], _ = u ?? [], b = this.agentSkillsService.getAgentSkills(), y = b.filter(abk).map(obk), S = this.agentSkillsService.hasAgentSkillsSnapshot(), k = this.buildEnv(g), C = dbk(this.mcpService, this.mcpInputSchemaJsonEnabled, this.mcpMetaToolEnabled && this.mcpMetaToolSlimDescriptorsEnabled);
            this.mcpMetaToolEnabled && this.mcpService.setMetaMcpFreshnessBaseline(C.sourceServers);
            const T = this.mcpService.isMcpInfoComplete(), I = this.mcpService.getMcpFileSystemDescriptors(), A = this.mcpService.getMcpWorkspaceProjectDir(), P = this.mcpMetaToolEnabled || I !== void 0 && A !== void 0, M = I && A ? mbk(I, this.mcpService, A) : void 0, { gitRepos: O, gitRepoInfoComplete: N, gitStatusInfoComplete: U } = this.buildGitRepos(d), j = f.map((K)=>Wde.fromJson(K, {
                    ignoreUnknownFields: !0
                })).filter((K)=>K.source !== dmn.TEAM || !this.cursorRulesService.isTeamRuleDisabled(Ku(K.fullPath))), $ = lbk(j, b), H = this.cursorRulesService.getTeamRules({
                includeDisabled: !0
            }).filter((K)=>this.cursorRulesService.isTeamRuleDisabled(K.filename)).map((K)=>K.filename), G = new mY({
                rules: $,
                disabledTeamRules: H,
                env: k,
                repositoryInfo: h ? [
                    {
                        relativeWorkspacePath: h.relativeWorkspacePath,
                        repoName: h.repoName,
                        repoOwner: h.repoOwner,
                        isTracked: h.isTracked,
                        isLocal: h.isLocal,
                        orthogonalTransformSeed: h.orthogonalTransformSeed,
                        pathEncryptionKey: h.pathEncryptionKey
                    }
                ] : [],
                customSubagents: _,
                tools: C.tools,
                mcpInstructions: C.mcpInstructions,
                mcpMetaToolOptions: this.mcpMetaToolEnabled ? C.mcpMetaToolOptions : void 0,
                mcpFileSystemOptions: M,
                supportsMcpAuth: !0,
                agentSkills: y,
                gitRepos: O,
                gitRepoInfoComplete: N,
                mcpInfoComplete: T,
                rulesInfoComplete: c !== void 0,
                envInfoComplete: g !== void 0,
                repositoryInfoComplete: p,
                customSubagentsInfoComplete: u !== void 0,
                agentSkillsInfoComplete: S,
                mcpFileSystemInfoComplete: P,
                gitStatusInfoComplete: U
            });
            this.injectLocalModeNonFileRules(G);
            const q = new Sni({
                result: {
                    case: "success",
                    value: new kni({
                        requestContext: G
                    })
                }
            });
            return this.structuredLogService.debug("agent_exec", `${oos} buildFromPushedData completed`, this.getLogMetadata({
                cachePeekHit: {
                    pushedRulesProto: c !== void 0,
                    rawSubagents: u !== void 0,
                    trackedState: d !== void 0,
                    codebaseReference: h !== void 0,
                    envStaticData: g !== void 0
                },
                latencyMs: performance.now() - a
            }, l)), q;
        } catch (o) {
            var r = o, s = !0;
        } finally{
            fll(i, r, s);
        }
    }
};

}
