import { Ei, Gt, Pn, Qe, Vn, e$e, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { nr, rs } from "./commands.js";
import { a0, tTt } from "./cursorRules.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { is, ms } from "./files.js";
import { Pak } from "./gYa.js";
import { It } from "./instantiation.js";
import { Xh } from "./ipa.js";
import { Yz, cCe } from "./observableValue.js";
import { Rd, ih } from "./pathService.js";
import { IA, VI } from "./pluginsProviderService.js";
import { azt, uTt } from "./pushRequestContextService.js";
import { Zi, ki } from "./storage_2.js";
import { Cm, wh } from "./structuredLog.js";
import { Uv, Xv } from "./telemetry.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { wu } from "./utilities_3.js";
import { LAe } from "./utils_10.js";
import { Sr, yr } from "./workspace.js";
import { C2 } from "./workspaceProjectPaths.js";
import { D_ } from "./yBp.js";
import { t6 } from "./ze.js";
var jPe, sQm, Fns;
export { Fns, jPe, sQm };
var __wakaru_yze_initialized = false;
export function yze() {
if (__wakaru_yze_initialized) return;
__wakaru_yze_initialized = true;
"use strict";
E(), Ei(), Gt(), Qe(), LAe(), cCe(), fn(), rs(), IA(), ms(), Rn(), It(), wu(), Zi(), Cm(), Xv(), Sr(), a0(), _s(), ih(), C2(), azt(), jPe = jn("subagentsService"), sQm = "[push_req_context]", Fns = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c){
        super(), this.fileService = t, this.workspaceContextService = e, this.pathService = n, this.commandService = i, this.storageService = r, this.experimentService = s, this.pluginsProviderService = o, this.pushRequestContextService = a, this.structuredLogService = l, this.telemetryService = c, this._subagentsProvider = new Yz, this._rawSubagentsGeneration = 0, this._onDidSubagentsChange = this._register(new tt), this.onDidSubagentsChange = this._onDidSubagentsChange.event, this._userAgentsDirWatcher = this._register(new Vn), this.firstRawSubagentsWarmStartedAt = performance.now(), this.hasLoggedFirstRawSubagentsWarm = !1, this.thirdPartyExtensibilityObservable = this._register(Xh(this.storageService, "thirdPartyExtensibilityEnabled")), this.pushRequestContextEnabled = this.pushRequestContextService.getPushRequestContextEnabled(), this._register(this.fileService.onDidFilesChange((d)=>this.onDidFilesChange(d))), this._register(this.workspaceContextService.onDidChangeWorkspaceFolders(()=>{
            this.initializeWatchedPaths().then(()=>this.reload()).then(()=>{
                this._onDidSubagentsChange.fire();
            });
        }));
        const u = ()=>{
            this.reload().then(()=>{
                this._onDidSubagentsChange.fire();
            });
        };
        this._register(this.pluginsProviderService.onDidPluginsChange(u)), this._register(this.pluginsProviderService.onDidPluginsChangeWithoutRefetch(u)), this._register(t6(this.thirdPartyExtensibilityObservable, ()=>{
            this.reload().then(()=>{
                this._onDidSubagentsChange.fire();
            });
        })), this.initializeWatchedPaths();
    }
    invalidateRawSubagents() {
        this._rawSubagents = void 0, this._rawSubagentsFetch = void 0, this._rawSubagentsGeneration++;
    }
    logFirstRawSubagentsWarm(t) {
        !this.pushRequestContextEnabled || this.hasLoggedFirstRawSubagentsWarm || (this.hasLoggedFirstRawSubagentsWarm = !0, this.structuredLogService.info("agent_exec", `${sQm} First request-context cache warm completed`, {
            vscodeSessionId: this.telemetryService.sessionId,
            cacheName: "subagents",
            latencyMs: performance.now() - this.firstRawSubagentsWarmStartedAt,
            subagentCount: t.length
        }));
    }
    async initializeWatchedPaths() {
        const t = this.pathService.userHome({
            preferLocal: !0
        });
        this._userAgentsDir = rt.joinPath(t, ".cursor", "agents");
        const e = this._userAgentsDir.toString();
        if (this._watchedUserAgentsDirKey !== e) {
            this._watchedUserAgentsDirKey = e;
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
        n.folders.length > 0 && (this._workspaceRulesDir = await Pak(n, this.pathService));
    }
    isSubagentRelatedPath(t) {
        const e = t.replace(/\\/g, "/");
        return !!(e.includes(".cursor/agents") || e.includes(".cursor/rules") || this._userAgentsDir && e.startsWith(this._userAgentsDir.path) || this._workspaceRulesDir && e.startsWith(this._workspaceRulesDir.path));
    }
    onDidFilesChange(t) {
        (t.rawAdded.some((n)=>this.isSubagentRelatedPath(n.path)) || t.rawUpdated.some((n)=>this.isSubagentRelatedPath(n.path)) || t.rawDeleted.some((n)=>this.isSubagentRelatedPath(n.path))) && this.reload().then(()=>{
            this._onDidSubagentsChange.fire();
        });
    }
    async reload() {
        const t = await D_(this._subagentsProvider);
        if (this.invalidateRawSubagents(), this.pushRequestContextEnabled) {
            const e = this._rawSubagentsGeneration, n = await t.reloadAndGetAllSubagents();
            this._rawSubagentsGeneration === e && (this._rawSubagents = n, this.logFirstRawSubagentsWarm(n));
        } else await t.reload();
    }
    async refresh() {
        await this.reload(), this._onDidSubagentsChange.fire();
    }
    ensureInitialized(t) {
        if (this._rawSubagents !== void 0) return Promise.resolve(this._rawSubagents);
        if (this._rawSubagentsFetch === void 0) {
            const e = this._rawSubagentsGeneration;
            this._rawSubagentsFetch = (async ()=>{
                try {
                    const i = await (await D_(this._subagentsProvider)).getAllSubagents();
                    return this._rawSubagentsGeneration === e && (this._rawSubagents = i, this.logFirstRawSubagentsWarm(i)), i;
                } finally{
                    this._rawSubagentsGeneration === e && (this._rawSubagentsFetch = void 0);
                }
            })();
        }
        return t ? e$e(this._rawSubagentsFetch, "Subagents lookup aborted", t) : this._rawSubagentsFetch;
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
    async getAllSubagents(t) {
        if (!t) return this._getAllSubagents();
        const e = new AbortController;
        t.isCancellationRequested && e.abort();
        const n = t.onCancellationRequested(()=>e.abort());
        try {
            return await this._getAllSubagents(e.signal);
        } finally{
            n.dispose();
        }
    }
    async _getAllSubagents(t) {
        if (this.pushRequestContextEnabled) return this.filterSubagents(await this.ensureInitialized(t));
        const e = await D_(this._subagentsProvider, t);
        return this.filterSubagents(await e.getAllSubagents());
    }
    filterSubagents(t) {
        const e = this.thirdPartyExtensibilityObservable.get(), n = this.experimentService.checkFeatureGate("enable_cc_plugin_import", {
            disableExposureLog: !1
        }), i = (r)=>r.replace(/\\/g, "/");
        return t.filter((r)=>{
            const s = i(r.fullPath), o = tTt(s);
            return !(!e && o || !n && o);
        });
    }
    registerSubagentsProvider(t) {
        return this._subagentsProvider.set(t), this.invalidateRawSubagents(), Pn(()=>{
            this.invalidateRawSubagents(), this._subagentsProvider.clear();
        });
    }
    notifyProviderReady() {
        this.pushRequestContextEnabled ? this.ensureInitialized().then(()=>{
            this._onDidSubagentsChange.fire();
        }) : this._onDidSubagentsChange.fire();
    }
}, Fns = Re([
    F(0, is),
    F(1, yr),
    F(2, Rd),
    F(3, nr),
    F(4, ki),
    F(5, Cr),
    F(6, VI),
    F(7, uTt),
    F(8, wh),
    F(9, Uv)
], Fns), bn(jPe, Fns, 1);

}
