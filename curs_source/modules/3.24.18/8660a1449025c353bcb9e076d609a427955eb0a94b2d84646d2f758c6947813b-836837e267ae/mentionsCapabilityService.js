import { Qe, Vh, st, yx } from "./Iwo.js";
import { PY } from "./LYd.js";
import { ma, wl } from "./agentRepositoryServiceTypes.js";
import { DP, ans } from "./anythingQuickAccess.js";
import { c_, ype } from "./async.cursor.js";
import { Yu, qn, xI } from "./async.js";
import { ptl } from "./browserMentionPayload.js";
import { El, yo } from "./cancellation.js";
import { ICi, Xqt } from "./canvasMentionProvider.js";
import { Tak } from "./canvasMentions.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { DJ, uG } from "./cursorCommands.js";
import { a0, xA } from "./cursorRules.js";
import { Wm, od } from "./editor_2.js";
import { cy, fb } from "./environment.js";
import { is, ms } from "./files.js";
import { kJ } from "./fuzzyScorer.js";
import { Cak, Cns, Ctl, EZm, FCe, KZm, Mtl, Ptl, UXm, UZm, XCi, XZm, atl, bze, eTi, etl, jXm, kX, nat, nxn, qel, rel, rxn, rzt, sel, zZm } from "./gYa.js";
import { hV, sI } from "./history_3.js";
import { UPe, dle } from "./hostedMcpPlacementService.js";
import { Gel } from "./hostedMcpServiceProbe.js";
import { nl } from "./index.ts";
import { du, gd } from "./map.js";
import { $In } from "./mcpServerPresentation.js";
import { N0, y2 } from "./mcpServiceTypes.js";
import { wns } from "./mcpStatusLabel.js";
import { ACe, Obe } from "./mcpWellKnownDetection.js";
import { aTt } from "./mentionsQuery.js";
import { Ttl } from "./mentionsRanking.js";
import { Rtl } from "./pastChatMentionSelection.js";
import { $ak } from "./pastChatTooltip.js";
import { Rd, ih } from "./pathService.js";
import { lTt } from "./plusMenuMcpServerMapping.js";
import { hAe } from "./project-subagents.ts";
import { D4e } from "./promptInputUriPayload.js";
import { Zts, lel } from "./recentFilesTrackerService.js";
import { HZm } from "./recentMentionedFiles.js";
import { Aa, Lr, Mc } from "./resources.js";
import { Zi, ki } from "./storage_2.js";
import { Mv, Py } from "./terminal.js";
import { M4e } from "./transcriptPaths.js";
import { E } from "./tslib.es6.js";
import { Sr, yr } from "./workspace.js";
import { Cu, Lc, ey } from "./workspaceCollectionService.js";
import { C2 } from "./workspaceProjectPaths.js";
import { OB } from "./yBp.js";
var Dtl, ZZm, QZm, JZm, Ntl, N4e, eQm, tQm, nQm, Ltl, iQm, Nns, Otl, rQm, Lns;
export { Dtl, JZm, Lns, Ltl, N4e, Nns, Ntl, Otl, QZm, ZZm, eQm, iQm, nQm, rQm, tQm };
var __wakaru_Ftl_initialized = false;
export function Ftl() {
if (__wakaru_Ftl_initialized) return;
__wakaru_Ftl_initialized = true;
"use strict";
E(), nl(), $In(), qn(), c_(), yo(), kJ(), Qe(), du(), Lr(), ms(), fb(), Zi(), Sr(), ICi(), Pl(), lel(), ans(), y2(), Gel(), dle(), wns(), ACe(), lTt(), M4e(), DJ(), a0(), hV(), ih(), D4e(), wl(), ptl(), Tak(), Cu(), C2(), Mv(), od(), aTt(), Ttl(), HZm(), $ak(), Rtl(), Cu(), Dtl = "read-branch.md", ZZm = "<branch_context_reference>", QZm = "branch read-branch", JZm = "browser playwright mcp tools use-browser", Ntl = "terminal", N4e = 25, eQm = 1e4, tQm = class {
    constructor(t){
        this.pending = [], this.cancellationTokenSource = new El(t), this.token = this.cancellationTokenSource.token;
    }
    async settle(t, e) {
        return this.pending.push(t), await yx(Vh(t.catch(()=>{}), eQm), this.token) ?? e();
    }
    end(t) {
        this.cancellationTokenSource.dispose(!0), t !== void 0 && Promise.allSettled(this.pending).then(t);
    }
}, nQm = 5, Ltl = 65536, iQm = 262144, Nns = 100, Otl = 1500, rQm = 15e3, Lns = class extends st {
    constructor(t){
        super(), this.workspace = t, this.readBranchCommandRefresh = this._register(new ype), this.didInitializeAnythingQuickAccessCaches = !1, this.resolvedPastChatTranscripts = new Map, this.pastChatFirstPromptSnippetCache = new Map, this.pastChatSnippetReadLimiter = new xI(nQm), this.fileCacheInvalidationDeadline = 0, this.fileCacheInvalidationScheduler = this._register(new Yu(()=>this.resetFileQueryCache(), Otl));
    }
    dispose() {
        this.createdAnythingQuickAccessProvider?.dispose(), this.createdAnythingQuickAccessProvider = void 0, this.pastChatFirstPromptSnippetCache.clear(), this.didInitializeAnythingQuickAccessCaches = !1, this.fileCacheInvalidationDeadline = 0, super.dispose();
    }
    resetFileQueryCache() {
        this.fileCacheInvalidationDeadline = 0, this.didInitializeAnythingQuickAccessCaches = !1;
    }
    invalidateFileQueryCache() {
        if (!this.didInitializeAnythingQuickAccessCaches) return;
        const t = Date.now();
        this.fileCacheInvalidationDeadline === 0 && (this.fileCacheInvalidationDeadline = t + rQm);
        const e = this.fileCacheInvalidationDeadline - t;
        if (e <= 0) {
            this.fileCacheInvalidationScheduler.cancel(), this.resetFileQueryCache();
            return;
        }
        this.fileCacheInvalidationScheduler.schedule(Math.min(Otl, e));
    }
    getWorkspaceServicesForWorkspace(t) {
        if (t) try {
            return t.instantiationService.invokeFunction((e)=>{
                const n = (r)=>{
                    try {
                        return e.get(r);
                    } catch  {
                        return;
                    }
                };
                return {
                    anythingQuickAccessProvider: n(DP) ?? (()=>{
                        if (this.createdAnythingQuickAccessProvider) return this.createdAnythingQuickAccessProvider;
                        try {
                            return this.createdAnythingQuickAccessProvider = t.instantiationService.createInstance(DP), this.createdAnythingQuickAccessProvider;
                        } catch  {
                            return;
                        }
                    })(),
                    workspaceContextService: n(yr),
                    cursorCommandsService: n(uG),
                    cursorRulesService: n(xA),
                    composerDataService: n(no),
                    agentRepositoryService: n(ma),
                    terminalService: n(Py),
                    historyService: n(sI),
                    recentFilesTrackerService: n(Zts),
                    storageService: n(ki),
                    environmentService: n(cy),
                    fileService: n(is),
                    pathService: n(Rd),
                    mcpService: n(N0),
                    mcpWellKnownDetectionService: n(Obe),
                    hostedMcpPlacementService: n(UPe),
                    canvasMentionProvider: n(Xqt)
                };
            });
        } catch  {
            return;
        }
    }
    getWorkspaceServices() {
        return this.getWorkspaceServicesForWorkspace(this.workspace);
    }
    async getWorkspaceServicesWithFallback(t = []) {
        const e = this.getWorkspaceServices();
        if (!e || !this.workspace) return {
            services: e,
            usedFallbackWorkspace: !1
        };
        if ((e.workspaceContextService?.getWorkspace().folders.length ?? 0) > 0) return {
            services: e,
            usedFallbackWorkspace: !1
        };
        const i = this.workspace.instantiationService.invokeFunction((a)=>{
            try {
                return a.get(ey);
            } catch  {
                return;
            }
        });
        if (!i) return {
            services: e,
            usedFallbackWorkspace: !1
        };
        const r = i.getDiagnostics(), s = new Set, o = [];
        for (const a of t)s.has(a.id) || (s.add(a.id), o.push(a));
        for (const a of r.workspaces)s.has(a.workspaceId) || (s.add(a.workspaceId), o.push({
            id: a.workspaceId
        }));
        for (const a of o){
            if (a.id === this.workspace.workspaceIdentifier.id) continue;
            let l;
            try {
                l = await i.createWorkspaceReference(a, Lc.Unknown);
                const c = l.object, u = this.getWorkspaceServicesForWorkspace(c), d = u?.workspaceContextService?.getWorkspace().folders.length ?? 0;
                if (!u || d === 0) {
                    l.dispose();
                    continue;
                }
                return {
                    services: u,
                    dispose: ()=>l?.dispose(),
                    usedFallbackWorkspace: !0
                };
            } catch  {
                l?.dispose();
            }
        }
        return {
            services: e,
            usedFallbackWorkspace: !1
        };
    }
    async resolvePastChatTranscript(t) {
        const e = this.resolvedPastChatTranscripts.get(t);
        if (e) return e;
        const { services: n, dispose: i } = await this.getWorkspaceServicesWithFallback();
        try {
            if (!n?.workspaceContextService || !n.pathService || !n.fileService) return;
            const r = await bze(n.workspaceContextService.getWorkspace(), n.pathService), s = n.agentRepositoryService?.agents.value.find((l)=>l.id === t)?.subagentParentId, o = [
                ...nat({
                    transcriptsDir: r,
                    conversationId: t
                }),
                ...s === void 0 ? [] : nat({
                    transcriptsDir: r,
                    conversationId: t,
                    parentConversationId: s
                })
            ], a = await atl(n.fileService, o);
            return a && !this._store.isDisposed && this.resolvedPastChatTranscripts.set(t, a), a;
        } catch  {
            return;
        } finally{
            i?.();
        }
    }
    async getPastChatFirstPromptSnippet(t) {
        const { services: e, dispose: n } = await this.getWorkspaceServicesWithFallback();
        if (!e) {
            n?.();
            return;
        }
        try {
            return await this.getCachedPastChatFirstPromptSnippet(t, e);
        } finally{
            n?.();
        }
    }
    getCachedPastChatFirstPromptSnippet(t, e) {
        const n = t.toString(), i = this.pastChatFirstPromptSnippetCache.get(n);
        if (i) return i;
        const r = this.pastChatSnippetReadLimiter.queue(()=>this.readPastChatFirstPromptSnippet(t, e));
        return this.pastChatFirstPromptSnippetCache.set(n, r), r.then((s)=>{
            s === void 0 && this.pastChatFirstPromptSnippetCache.get(n) === r && this.pastChatFirstPromptSnippetCache.delete(n);
        }, ()=>{
            this.pastChatFirstPromptSnippetCache.get(n) === r && this.pastChatFirstPromptSnippetCache.delete(n);
        }), r;
    }
    async readPastChatFirstPromptSnippet(t, e) {
        const n = e.fileService;
        if (n) try {
            const i = await n.readFile(t, {
                length: Ltl
            }), r = zZm(i.value.toString());
            if (r !== void 0) return r;
            if (i.value.byteLength < Ltl) return;
            const s = await n.readFile(t, {
                length: iQm
            });
            return zZm(s.value.toString());
        } catch  {
            return;
        }
    }
    getPastChatMentionItems(t, e) {
        const n = [];
        for (const i of e.agentRepositoryService?.agents.value ?? []){
            const r = i.source === "local", s = i.subagentParentId !== void 0, o = i.subagentTypeName === hAe;
            if (!r || s && !o) continue;
            const a = i.name.value;
            if (!etl(t, a)) continue;
            const l = i.lastUpdatedAt.value ?? i.createdAt ?? 0;
            n.push({
                item: {
                    id: `past-chat:${i.id}`,
                    label: a,
                    rawText: KZm({
                        name: a,
                        agentId: i.id
                    }),
                    type: "chat",
                    menuIcon: "chat-bubble",
                    description: "Past Chat",
                    lastUsedTime: l,
                    payload: {
                        case: "pastChatSelection",
                        agentId: i.id,
                        name: a
                    }
                },
                timestamp: l
            });
        }
        return n.sort((i, r)=>r.timestamp - i.timestamp), n.slice(0, N4e).map((i)=>i.item);
    }
    buildFileMentionItems(t, e, n, i) {
        if (!e.workspaceContextService) return [];
        const r = [], s = new Set;
        for (const o of i.recentResources)Mtl(r, s, o, t, e.workspaceContextService);
        for (const o of n){
            const a = o.resource;
            a && Mtl(r, s, a, t, e.workspaceContextService);
        }
        for (const o of i.historyResources)Mtl(r, s, o, t, e.workspaceContextService);
        return t ? Ctl(t, r, i.recencyRanks).slice(0, N4e).map((o)=>o.item) : EZm(r, i.recencyRanks).slice(0, N4e);
    }
    buildFolderMentionItems(t, e, n) {
        if (!e.workspaceContextService) return [];
        const i = [], r = new Set;
        for (const s of n){
            const o = s.resource;
            if (!o || !rxn(o)) continue;
            const a = Mc(o), c = e.workspaceContextService.asRelativePath(a) || Aa(a);
            if (!c || r.has(c)) continue;
            r.add(c);
            const u = Aa(a), d = c;
            if (FCe(t, u, d, c) && (i.push({
                id: `folder:${c}`,
                label: u,
                rawText: c,
                type: "folder",
                description: d,
                payload: {
                    case: "folderSelection",
                    relativePath: c
                }
            }), i.length >= N4e)) break;
        }
        if (!t && i.length < N4e) for (const s of e.workspaceContextService.getWorkspace().folders){
            const o = s.uri, l = e.workspaceContextService.asRelativePath(o) || s.name || Aa(o);
            if (!(!l || r.has(l)) && (r.add(l), i.push({
                id: `folder:${l}`,
                label: s.name || Aa(o),
                rawText: l,
                type: "folder",
                description: l,
                payload: {
                    case: "folderSelection",
                    relativePath: l
                }
            }), i.length >= N4e)) break;
        }
        return i;
    }
    async getSharedMentionFilePicks(t, e, n) {
        if (!e.anythingQuickAccessProvider) return [];
        this.didInitializeAnythingQuickAccessCaches || (e.anythingQuickAccessProvider.initializeCaches(), this.didInitializeAnythingQuickAccessCaches = !0);
        let i = await e.anythingQuickAccessProvider.getFilePicks(OB(t), new gd, n);
        return !t && i.length === 0 && (i = await e.anythingQuickAccessProvider.getFilePicks(OB("."), new gd, n)), i;
    }
    async getCursorRuleMentionItems(t, e) {
        if (!e.cursorRulesService) return [];
        const n = await e.cursorRulesService.getAllRules(), i = [];
        for (const r of n){
            const s = r.filename;
            if (!s.endsWith(".mdc")) continue;
            const o = s.replace(/\.mdc$/i, "");
            if (FCe(t, o, r.description, s) && (i.push({
                id: `cursor-rule:${s}`,
                label: o,
                rawText: s,
                type: "cursorRule",
                description: r.description,
                payload: {
                    case: "cursorRule",
                    filename: s
                }
            }), i.length >= N4e)) break;
        }
        return i;
    }
    async getTerminalMentionItems(t, e) {
        if (!e.terminalService) return [];
        const n = [], i = new Set;
        for (const r of e.terminalService.instances){
            if (r.shellLaunchConfig.hideFromUser === !0) continue;
            const s = r.resource;
            if (!s) continue;
            const o = s.toString();
            if (i.has(o)) continue;
            i.add(o);
            const a = r.title || "Terminal";
            let l;
            try {
                l = await e.terminalService.getTerminalFilePathFromResource(s);
            } catch  {
                l = void 0;
            }
            const c = l || void 0;
            if (FCe(t, a, c, l, Ntl) && (n.push({
                id: `terminal:${o}`,
                label: a,
                rawText: l || a,
                secondaryText: Ntl,
                type: "terminal",
                description: c,
                payload: {
                    case: "terminalFile",
                    uri: kX(s.toJSON()),
                    text: a,
                    terminalFilePath: l
                }
            }), n.length >= N4e)) break;
        }
        return n;
    }
    getMcpMentionItems(t, e) {
        if (!e.mcpService || !e.mcpWellKnownDetectionService) return [];
        const n = e.mcpService, i = jXm(n, e.mcpWellKnownDetectionService, e.hostedMcpPlacementService), r = new Map(n.allServers().map((c)=>[
                c.identifier,
                c
            ])), s = XCi(n), o = rel(i), a = sel(i), l = [];
        for (const c of i){
            const u = r.get(c.id), d = u ? s.isServerBlocked(u) : !1, p = c.isEnabled === !1 && !d ? "disabled" : c.status ?? "initializing", g = n.toolsCache()[c.id] ?? [], f = qel({
                status: p,
                isEnabled: c.isEnabled,
                isBlocked: d,
                blockedMessage: u && d ? n.getServerBlockMessage(u) : void 0,
                enabledToolCount: u ? g.filter((y)=>!n.isToolDisabled(u, y.name)).length : g.length,
                promptCount: n.promptsCache()[c.id]?.length ?? 0,
                resourceCount: n.resourcesCache()[c.id]?.length ?? 0
            }), _ = rzt(c.id), b = {
                id: _,
                ...UXm(c, {
                    duplicateVisibleNames: o,
                    ambiguousVisibleSourceKeys: a
                }),
                type: "mcp",
                description: c.description,
                secondaryText: f.mentionLabel,
                mcpStatusTone: f.mentionTone,
                mcpSource: c.source,
                pluginId: c.pluginId,
                iconSrc: c.iconSrc,
                payload: {
                    case: "mcpSelection",
                    status: p,
                    serverId: _
                }
            };
            if (Cns(t, b) && (l.push(b), l.length >= N4e)) break;
        }
        return l;
    }
    async getCanvasMentionItems(t, e, n, i, r) {
        if (!r) return [];
        const s = e.canvasMentionProvider;
        if (!s) return [];
        try {
            const o = await s.queryCanvases({
                query: t,
                limit: N4e,
                cancellationToken: n,
                strategy: i
            });
            return n.isCancellationRequested ? [] : Cak(o);
        } catch  {
            return [];
        }
    }
    getUnscopedCanvasMentionItems(t, e, n, i, r) {
        return !r || t.length === 0 ? Promise.resolve([]) : this.getCanvasMentionItems(t, e, n, i, r);
    }
    getBranchMentionItems(t, e) {
        const n = e.cursorCommandsService;
        if (!n) return [];
        const i = this.readBranchCommand, r = i?.service === n, s = t.length === 0;
        return (!r || s) && this.refreshReadBranchCommand(n), r ? i.content ? eTi(t, i.content) : [] : eTi(t);
    }
    refreshReadBranchCommand(t) {
        this.readBranchCommandRefresh.run(async (e)=>{
            const n = await t.getCommand(Dtl);
            e.throwIfStale(), this.readBranchCommand = {
                service: t,
                content: n?.content
            };
        }).catch(()=>{});
    }
    getMentionFileRecencyData(t) {
        const e = new Map, n = new Map, i = new Map, r = [], s = [], o = new Set;
        for (const c of UZm(t.storageService)){
            const u = c.toString();
            e.has(u) || (e.set(u, e.size), o.add(u), r.push(c));
        }
        const a = t.recentFilesTrackerService?.getRecentlyViewedFiles(Nns) ?? [];
        for (const c of a){
            const u = c.uri;
            if (!rxn(u)) continue;
            const d = u.toString();
            if (!n.has(d) && (n.set(d, n.size), o.has(d) || (o.add(d), r.push(u)), n.size >= Nns)) break;
        }
        const l = t.historyService?.getHistory() ?? [];
        for (const c of l){
            const u = PY(c) ? c.resource : Wm.getOriginalUri(c);
            if (!u || !rxn(u)) continue;
            const d = u.toString();
            if (!(e.has(d) || n.has(d) || i.has(d)) && (i.set(d, s.length), s.push(u), s.length >= Nns)) break;
        }
        return {
            recencyRanks: {
                mentionRanks: e,
                trackerRanks: n,
                historyRanks: i
            },
            recentResources: r,
            historyResources: s
        };
    }
    rankMentionItems(t, e, n) {
        if (!t) {
            const r = new Map;
            for (const s of e)r.has(s.id) || r.set(s.id, s);
            return EZm([
                ...r.values()
            ], n);
        }
        return Ctl(t, e, n).map((r)=>r.item);
    }
    async getMentionItems(t) {
        const { services: e, dispose: n, usedFallbackWorkspace: i } = await this.getWorkspaceServicesWithFallback();
        if (!e) return n?.(), [];
        const r = !i, s = new tQm(t.cancellationToken);
        try {
            if (t.cancellationToken.isCancellationRequested) return [];
            const o = nxn(t.query);
            if (t.scope !== void 0) switch(t.scope){
                case "files_and_folders":
                    {
                        const k = this.getMentionFileRecencyData(e), C = t.strategy === "fast" ? [] : await s.settle(this.getSharedMentionFilePicks(o, e, s.token), ()=>[]);
                        return t.cancellationToken.isCancellationRequested ? [] : this.rankMentionItems(o, [
                            ...this.buildFileMentionItems(o, e, C, k),
                            ...this.buildFolderMentionItems(o, e, C)
                        ], k.recencyRanks);
                    }
                case "terminals":
                    return t.strategy === "fast" ? [] : await s.settle(this.getTerminalMentionItems(o, e), ()=>[]);
                case "past_chats":
                    {
                        const k = this.getPastChatMentionItems(o, e);
                        return this.rankMentionItems(o, k, XZm());
                    }
                case "canvases":
                    {
                        const k = (T)=>this.getCanvasMentionItems(o, e, s.token, T, r), C = await s.settle(k(t.strategy ?? "full"), ()=>k("fast"));
                        return t.cancellationToken.isCancellationRequested ? [] : this.rankMentionItems(o, C, XZm());
                    }
                case "branch_diff_main":
                    return t.strategy === "fast" ? eTi(o) : this.getBranchMentionItems(o, e);
                case "browser":
                    return Ptl(o);
                case "docs":
                    return [];
                default:
                    {
                        const k = t.scope;
                        return [];
                    }
            }
            const a = this.getMentionFileRecencyData(e), l = Ptl(o), c = this.getMcpMentionItems(o, e);
            if (t.strategy === "fast") {
                const k = eTi(o), C = await this.getUnscopedCanvasMentionItems(o, e, t.cancellationToken, "fast", r), T = this.buildFileMentionItems(o, e, [], a), I = this.buildFolderMentionItems(o, e, []), A = o.length > 0 ? this.getPastChatMentionItems(o, e) : [];
                return this.rankMentionItems(o, [
                    ...k,
                    ...l,
                    ...c,
                    ...A,
                    ...C,
                    ...T,
                    ...I
                ], a.recencyRanks);
            }
            const u = (k)=>this.getUnscopedCanvasMentionItems(o, e, s.token, k, r), d = s.settle(u(t.strategy ?? "full"), ()=>u("fast")), h = s.settle(this.getTerminalMentionItems(o, e), ()=>[]), p = await s.settle(this.getSharedMentionFilePicks(o, e, s.token), ()=>[]);
            if (t.cancellationToken.isCancellationRequested) return [];
            const g = this.buildFileMentionItems(o, e, p, a), f = this.buildFolderMentionItems(o, e, p), _ = a.recencyRanks, b = await h;
            if (t.cancellationToken.isCancellationRequested) return [];
            const y = this.getPastChatMentionItems(o, e), S = this.getBranchMentionItems(o, e);
            return await this.finishUnscopedFullMentionItems({
                query: o,
                nonCanvasPrefix: [
                    ...S,
                    ...l,
                    ...c,
                    ...b,
                    ...y
                ],
                fileItems: g,
                folderItems: f,
                canvasItemsPromise: d,
                recencyRanks: _,
                cancellationToken: t.cancellationToken,
                onAuthoritativePartial: t.onAuthoritativePartial
            });
        } finally{
            s.end(n);
        }
    }
    async finishUnscopedFullMentionItems(t) {
        const e = [
            ...t.nonCanvasPrefix,
            ...t.fileItems,
            ...t.folderItems
        ], n = this.rankMentionItems(t.query, e, t.recencyRanks);
        let i = !1, r;
        const s = t.canvasItemsPromise.then((a)=>(i = !0, r = a, a));
        await Promise.race([
            s,
            Promise.resolve()
        ]), t.onAuthoritativePartial !== void 0 && t.query.length > 0 && !i && !t.cancellationToken.isCancellationRequested && t.onAuthoritativePartial(n);
        const o = i ? r ?? [] : await s;
        return t.cancellationToken.isCancellationRequested ? [] : this.rankMentionItems(t.query, [
            ...t.nonCanvasPrefix,
            ...o,
            ...t.fileItems,
            ...t.folderItems
        ], t.recencyRanks);
    }
    getMentionKindLabel(t) {
        switch(t){
            case "file":
                return "File";
            case "code":
                return "Code";
            case "folder":
                return "Folder";
            case "doc":
                return "Doc";
            case "cursorRule":
                return "Cursor Rule";
            case "terminal":
                return "Terminal";
            case "branch":
                return "Branch";
            default:
                {
                    const e = t;
                    return "Unknown";
                }
        }
    }
};

}
