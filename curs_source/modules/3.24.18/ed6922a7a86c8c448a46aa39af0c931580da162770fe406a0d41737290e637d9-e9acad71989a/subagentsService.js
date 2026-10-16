import { lf } from "./A3u.js";
import { Th } from "./De_3.js";
import { Se, bt, cn, rn, si, ve, we, yqe } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { $n, vi } from "./commands.js";
import { Bw, zet } from "./cursorRules.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { Fi, Ii } from "./files.js";
import { Ze } from "./instantiation.js";
import { HU, wde } from "./observableValue.js";
import { fu, zl } from "./pathService.js";
import { EN, lF } from "./pluginsProviderService.js";
import { Bwt, ttt } from "./pushRequestContextService.js";
import { mn, vn, xO } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { Xh, im } from "./structuredLog.js";
import { $h, np } from "./telemetry.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Ku } from "./utilities_3.js";
import { xge } from "./utils_10.js";
import { Jn, ci } from "./workspace.js";
import { NR } from "./workspaceProjectPaths.js";
import { p7v } from "./xmo.js";
var U_e, Mhh, kYi;
export { Mhh, U_e, kYi };
var __wakaru_jPe_initialized = false;
export function jPe() {
if (__wakaru_jPe_initialized) return;
__wakaru_jPe_initialized = true;
"use strict";
x(), si(), bt(), Se(), xge(), wde(), Qt(), vi(), lF(), Fi(), Pn(), Ze(), Ku(), Vn(), im(), np(), ci(), Bw(), qs(), fu(), NR(), Bwt(), U_e = vn("subagentsService"), Mhh = "[push_req_context]", kYi = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l){
        super(), this.fileService = e, this.workspaceContextService = t, this.pathService = n, this.commandService = i, this.storageService = r, this.experimentService = s, this.pluginsProviderService = o, this.pushRequestContextService = a, this.structuredLogService = c, this.telemetryService = l, this._subagentsProvider = new HU, this._rawSubagentsGeneration = 0, this._onDidSubagentsChange = this._register(new ve), this.onDidSubagentsChange = this._onDidSubagentsChange.event, this._userAgentsDirWatcher = this._register(new cn), this.firstRawSubagentsWarmStartedAt = performance.now(), this.hasLoggedFirstRawSubagentsWarm = !1, this.thirdPartyExtensibilityObservable = this._register(Th(this.storageService, "thirdPartyExtensibilityEnabled")), this.pushRequestContextEnabled = this.pushRequestContextService.getPushRequestContextEnabled(), this._register(this.fileService.onDidFilesChange((h)=>this.onDidFilesChange(h))), this._register(this.workspaceContextService.onDidChangeWorkspaceFolders(()=>{
            this.initializeWatchedPaths().then(()=>this.reload()).then(()=>{
                this._onDidSubagentsChange.fire();
            });
        }));
        const u = ()=>{
            this.reload().then(()=>{
                this._onDidSubagentsChange.fire();
            });
        };
        this._register(this.pluginsProviderService.onDidPluginsChange(u)), this._register(this.pluginsProviderService.onDidPluginsChangeWithoutRefetch(u)), this._register(xO(this.thirdPartyExtensibilityObservable, ()=>{
            this.reload().then(()=>{
                this._onDidSubagentsChange.fire();
            });
        })), this.initializeWatchedPaths();
    }
    invalidateRawSubagents() {
        this._rawSubagents = void 0, this._rawSubagentsFetch = void 0, this._rawSubagentsGeneration++;
    }
    logFirstRawSubagentsWarm(e) {
        !this.pushRequestContextEnabled || this.hasLoggedFirstRawSubagentsWarm || (this.hasLoggedFirstRawSubagentsWarm = !0, this.structuredLogService.info("agent_exec", `${Mhh} First request-context cache warm completed`, {
            vscodeSessionId: this.telemetryService.sessionId,
            cacheName: "subagents",
            latencyMs: performance.now() - this.firstRawSubagentsWarmStartedAt,
            subagentCount: e.length
        }));
    }
    async initializeWatchedPaths() {
        const e = this.pathService.userHome({
            preferLocal: !0
        });
        this._userAgentsDir = Ee.joinPath(e, ".cursor", "agents");
        const t = this._userAgentsDir.toString();
        if (this._watchedUserAgentsDirKey !== t) {
            this._watchedUserAgentsDirKey = t;
            try {
                await this.fileService.exists(this._userAgentsDir) || await this.fileService.createFolder(this._userAgentsDir);
            } catch (i) {
                this.structuredLogService.info("agent_exec", "Failed to ensure ~/.cursor/agents before watch; watch may not attach until it exists", {
                    error: i instanceof Error ? i.name : "unknown"
                });
            }
            this._userAgentsDirWatcher.value = this.fileService.watch(this._userAgentsDir, {
                recursive: !0,
                excludes: []
            });
        }
        const n = this.workspaceContextService.getWorkspace();
        n.folders.length > 0 && (this._workspaceRulesDir = await p7v(n, this.pathService));
    }
    isSubagentRelatedPath(e) {
        const t = e.replace(/\\/g, "/");
        return !!(t.includes(".cursor/agents") || t.includes(".cursor/rules") || this._userAgentsDir && t.startsWith(this._userAgentsDir.path) || this._workspaceRulesDir && t.startsWith(this._workspaceRulesDir.path));
    }
    onDidFilesChange(e) {
        (e.rawAdded.some((n)=>this.isSubagentRelatedPath(n.path)) || e.rawUpdated.some((n)=>this.isSubagentRelatedPath(n.path)) || e.rawDeleted.some((n)=>this.isSubagentRelatedPath(n.path))) && this.reload().then(()=>{
            this._onDidSubagentsChange.fire();
        });
    }
    async reload() {
        const e = await lf(this._subagentsProvider);
        if (this.invalidateRawSubagents(), this.pushRequestContextEnabled) {
            const t = this._rawSubagentsGeneration, n = await e.reloadAndGetAllSubagents();
            this._rawSubagentsGeneration === t && (this._rawSubagents = n, this.logFirstRawSubagentsWarm(n));
        } else await e.reload();
    }
    async refresh() {
        await this.reload(), this._onDidSubagentsChange.fire();
    }
    ensureInitialized(e) {
        if (this._rawSubagents !== void 0) return Promise.resolve(this._rawSubagents);
        if (this._rawSubagentsFetch === void 0) {
            const t = this._rawSubagentsGeneration;
            this._rawSubagentsFetch = (async ()=>{
                try {
                    const i = await (await lf(this._subagentsProvider)).getAllSubagents();
                    return this._rawSubagentsGeneration === t && (this._rawSubagents = i, this.logFirstRawSubagentsWarm(i)), i;
                } finally{
                    this._rawSubagentsGeneration === t && (this._rawSubagentsFetch = void 0);
                }
            })();
        }
        return e ? yqe(this._rawSubagentsFetch, "Subagents lookup aborted", e) : this._rawSubagentsFetch;
    }
    async getRawSubagents() {
        return [
            ...await this.ensureInitialized()
        ];
    }
    peekRawSubagents() {
        return this._rawSubagents ? [
            ...this._rawSubagents
        ] : void 0;
    }
    async getAllSubagents(e) {
        if (!e) return this._getAllSubagents();
        const t = new AbortController;
        e.isCancellationRequested && t.abort();
        const n = e.onCancellationRequested(()=>t.abort());
        try {
            return await this._getAllSubagents(t.signal);
        } finally{
            n.dispose();
        }
    }
    async _getAllSubagents(e) {
        if (this.pushRequestContextEnabled) return this.filterSubagents(await this.ensureInitialized(e));
        const t = await lf(this._subagentsProvider, e);
        return this.filterSubagents(await t.getAllSubagents());
    }
    filterSubagents(e) {
        const t = this.thirdPartyExtensibilityObservable.get(), n = this.experimentService.checkFeatureGate("enable_cc_plugin_import", {
            disableExposureLog: !1
        }), i = (r)=>r.replace(/\\/g, "/");
        return e.filter((r)=>{
            const s = i(r.fullPath), o = zet(s);
            return !(!t && o || !n && o);
        });
    }
    registerSubagentsProvider(e) {
        return this._subagentsProvider.set(e), this.invalidateRawSubagents(), rn(()=>{
            this.invalidateRawSubagents(), this._subagentsProvider.clear();
        });
    }
    notifyProviderReady() {
        this.pushRequestContextEnabled ? this.ensureInitialized().then(()=>{
            this._onDidSubagentsChange.fire();
        }) : this._onDidSubagentsChange.fire();
    }
}, kYi = ie([
    C(0, Ii),
    C(1, Jn),
    C(2, zl),
    C(3, $n),
    C(4, yn),
    C(5, Kr),
    C(6, EN),
    C(7, ttt),
    C(8, Xh),
    C(9, $h)
], kYi), mn(U_e, kYi, 1);

}
