import { Qj } from "./A3u.js";
import { Hp, Se, Tw, we } from "./HVr.js";
import { Kv, Rb } from "./agentRepositoryServiceTypes.js";
import { YKi, qE } from "./anythingQuickAccess.js";
import { ZMe, ub } from "./async.cursor.js";
import { aR, ac, bn } from "./async.js";
import { Vdh } from "./browserMentionPayload.js";
import { Ar, Eo } from "./cancellation.js";
import { PKi, VGt } from "./canvasMentionProvider.js";
import { a7v } from "./canvasMentions.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { VX, ite } from "./cursorCommands.js";
import { Bw, LR } from "./cursorRules.js";
import { vd, xc } from "./editor_2.js";
import { nf, sv } from "./environment.js";
import { Fi, Ii } from "./files.js";
import { S_e } from "./fuzzyScorer.js";
import { c0, i8 } from "./history_3.js";
import { B_e, GX } from "./hostedMcpPlacementService.js";
import { Ibo } from "./hostedMcpServiceProbe.js";
import { Ml } from "./index.ts";
import { Mc, oc } from "./map.js";
import { NOn } from "./mcpServerPresentation.js";
import { MR, P1 } from "./mcpServiceTypes.js";
import { uYi } from "./mcpStatusLabel.js";
import { S1e, k1e } from "./mcpWellKnownDetection.js";
import { Jet } from "./mentionsQuery.js";
import { hhh } from "./mentionsRanking.js";
import { khh } from "./pastChatMentionSelection.js";
import { w7v } from "./pastChatTooltip.js";
import { fu, zl } from "./pathService.js";
import { iFn } from "./plusMenuMcpServerMapping.js";
import { Nmt } from "./project-subagents.ts";
import { YUe } from "./promptInputUriPayload.js";
import { Q7 } from "./qIc.js";
import { LKi, V_o } from "./recentFilesTrackerService.js";
import { y7v } from "./recentMentionedFiles.js";
import { Li, fo, ml } from "./resources.js";
import { Vn, yn } from "./storage_2.js";
import { Gf, ng } from "./terminal.js";
import { L1e } from "./transcriptPaths.js";
import { x } from "./tslib.es6.js";
import { Jn, ci } from "./workspace.js";
import { U0, Yv, lL } from "./workspaceCollectionService.js";
import { NR } from "./workspaceProjectPaths.js";
import { $bo, Abo, H_o, Jdh, KUe, Lbo, N1e, Shh, W_o, XUe, aVt, b7v, bhh, dYi, ddh, eFn, eyo, iyo, jde, ldh, o7v, oFn, ryo, sFn, udh, whh } from "./xmo.js";
var syo, Chh, Thh, Ehh, oyo, O1e, xhh, Ihh, Ahh, ayo, Rhh, bYi, cyo, Dhh, yYi;
export { Ahh, Chh, Dhh, Ehh, Ihh, O1e, Rhh, Thh, ayo, bYi, cyo, oyo, syo, xhh, yYi };
var __wakaru_lyo_initialized = false;
export function lyo() {
if (__wakaru_lyo_initialized) return;
__wakaru_lyo_initialized = true;
"use strict";
x(), Ml(), NOn(), bn(), ub(), Ar(), S_e(), Se(), oc(), Li(), Fi(), nf(), Vn(), ci(), PKi(), nl(), V_o(), YKi(), MR(), Ibo(), GX(), uYi(), k1e(), iFn(), L1e(), ite(), Bw(), i8(), fu(), YUe(), Rb(), Vdh(), a7v(), Yv(), NR(), ng(), xc(), Jet(), hhh(), y7v(), w7v(), khh(), Yv(), syo = "read-branch.md", Chh = "<branch_context_reference>", Thh = "branch read-branch", Ehh = "browser playwright mcp tools use-browser", oyo = "terminal", O1e = 25, xhh = 1e4, Ihh = class {
    constructor(e){
        this.pending = [], this.cancellationTokenSource = new Eo(e), this.token = this.cancellationTokenSource.token;
    }
    async settle(e, t) {
        return this.pending.push(e), await Tw(Hp(e.catch(()=>{}), xhh), this.token) ?? t();
    }
    end(e) {
        this.cancellationTokenSource.dispose(!0), e !== void 0 && Promise.allSettled(this.pending).then(e);
    }
}, Ahh = 5, ayo = 65536, Rhh = 262144, bYi = 100, cyo = 1500, Dhh = 15e3, yYi = class extends we {
    constructor(e){
        super(), this.workspace = e, this.readBranchCommandRefresh = this._register(new ZMe), this.didInitializeAnythingQuickAccessCaches = !1, this.resolvedPastChatTranscripts = new Map, this.pastChatFirstPromptSnippetCache = new Map, this.pastChatSnippetReadLimiter = new aR(Ahh), this.fileCacheInvalidationDeadline = 0, this.fileCacheInvalidationScheduler = this._register(new ac(()=>this.resetFileQueryCache(), cyo));
    }
    dispose() {
        this.createdAnythingQuickAccessProvider?.dispose(), this.createdAnythingQuickAccessProvider = void 0, this.pastChatFirstPromptSnippetCache.clear(), this.didInitializeAnythingQuickAccessCaches = !1, this.fileCacheInvalidationDeadline = 0, super.dispose();
    }
    resetFileQueryCache() {
        this.fileCacheInvalidationDeadline = 0, this.didInitializeAnythingQuickAccessCaches = !1;
    }
    invalidateFileQueryCache() {
        if (!this.didInitializeAnythingQuickAccessCaches) return;
        const e = Date.now();
        this.fileCacheInvalidationDeadline === 0 && (this.fileCacheInvalidationDeadline = e + Dhh);
        const t = this.fileCacheInvalidationDeadline - e;
        if (t <= 0) {
            this.fileCacheInvalidationScheduler.cancel(), this.resetFileQueryCache();
            return;
        }
        this.fileCacheInvalidationScheduler.schedule(Math.min(cyo, t));
    }
    getWorkspaceServicesForWorkspace(e) {
        if (e) try {
            return e.instantiationService.invokeFunction((t)=>{
                const n = (r)=>{
                    try {
                        return t.get(r);
                    } catch  {
                        return;
                    }
                };
                return {
                    anythingQuickAccessProvider: n(qE) ?? (()=>{
                        if (this.createdAnythingQuickAccessProvider) return this.createdAnythingQuickAccessProvider;
                        try {
                            return this.createdAnythingQuickAccessProvider = e.instantiationService.createInstance(qE), this.createdAnythingQuickAccessProvider;
                        } catch  {
                            return;
                        }
                    })(),
                    workspaceContextService: n(Jn),
                    cursorCommandsService: n(VX),
                    cursorRulesService: n(LR),
                    composerDataService: n(Zs),
                    agentRepositoryService: n(Kv),
                    terminalService: n(Gf),
                    historyService: n(c0),
                    recentFilesTrackerService: n(LKi),
                    storageService: n(yn),
                    environmentService: n(sv),
                    fileService: n(Ii),
                    pathService: n(zl),
                    mcpService: n(P1),
                    mcpWellKnownDetectionService: n(S1e),
                    hostedMcpPlacementService: n(B_e),
                    canvasMentionProvider: n(VGt)
                };
            });
        } catch  {
            return;
        }
    }
    getWorkspaceServices() {
        return this.getWorkspaceServicesForWorkspace(this.workspace);
    }
    async getWorkspaceServicesWithFallback(e = []) {
        const t = this.getWorkspaceServices();
        if (!t || !this.workspace) return {
            services: t,
            usedFallbackWorkspace: !1
        };
        if ((t.workspaceContextService?.getWorkspace().folders.length ?? 0) > 0) return {
            services: t,
            usedFallbackWorkspace: !1
        };
        const i = this.workspace.instantiationService.invokeFunction((a)=>{
            try {
                return a.get(lL);
            } catch  {
                return;
            }
        });
        if (!i) return {
            services: t,
            usedFallbackWorkspace: !1
        };
        const r = i.getDiagnostics(), s = new Set, o = [];
        for (const a of e)s.has(a.id) || (s.add(a.id), o.push(a));
        for (const a of r.workspaces)s.has(a.workspaceId) || (s.add(a.workspaceId), o.push({
            id: a.workspaceId
        }));
        for (const a of o){
            if (a.id === this.workspace.workspaceIdentifier.id) continue;
            let c;
            try {
                c = await i.createWorkspaceReference(a, U0.Unknown);
                const l = c.object, u = this.getWorkspaceServicesForWorkspace(l), h = u?.workspaceContextService?.getWorkspace().folders.length ?? 0;
                if (!u || h === 0) {
                    c.dispose();
                    continue;
                }
                return {
                    services: u,
                    dispose: ()=>c?.dispose(),
                    usedFallbackWorkspace: !0
                };
            } catch  {
                c?.dispose();
            }
        }
        return {
            services: t,
            usedFallbackWorkspace: !1
        };
    }
    async resolvePastChatTranscript(e) {
        const t = this.resolvedPastChatTranscripts.get(e);
        if (t) return t;
        const { services: n, dispose: i } = await this.getWorkspaceServicesWithFallback();
        try {
            if (!n?.workspaceContextService || !n.pathService || !n.fileService) return;
            const r = await XUe(n.workspaceContextService.getWorkspace(), n.pathService), s = n.agentRepositoryService?.agents.value.find((c)=>c.id === e)?.subagentParentId, o = [
                ...KUe({
                    transcriptsDir: r,
                    conversationId: e
                }),
                ...s === void 0 ? [] : KUe({
                    transcriptsDir: r,
                    conversationId: e,
                    parentConversationId: s
                })
            ], a = await $bo(n.fileService, o);
            return a && !this._store.isDisposed && this.resolvedPastChatTranscripts.set(e, a), a;
        } catch  {
            return;
        } finally{
            i?.();
        }
    }
    async getPastChatFirstPromptSnippet(e) {
        const { services: t, dispose: n } = await this.getWorkspaceServicesWithFallback();
        if (!t) {
            n?.();
            return;
        }
        try {
            return await this.getCachedPastChatFirstPromptSnippet(e, t);
        } finally{
            n?.();
        }
    }
    getCachedPastChatFirstPromptSnippet(e, t) {
        const n = e.toString(), i = this.pastChatFirstPromptSnippetCache.get(n);
        if (i) return i;
        const r = this.pastChatSnippetReadLimiter.queue(()=>this.readPastChatFirstPromptSnippet(e, t));
        return this.pastChatFirstPromptSnippetCache.set(n, r), r.then((s)=>{
            s === void 0 && this.pastChatFirstPromptSnippetCache.get(n) === r && this.pastChatFirstPromptSnippetCache.delete(n);
        }, ()=>{
            this.pastChatFirstPromptSnippetCache.get(n) === r && this.pastChatFirstPromptSnippetCache.delete(n);
        }), r;
    }
    async readPastChatFirstPromptSnippet(e, t) {
        const n = t.fileService;
        if (n) try {
            const i = await n.readFile(e, {
                length: ayo
            }), r = bhh(i.value.toString());
            if (r !== void 0) return r;
            if (i.value.byteLength < ayo) return;
            const s = await n.readFile(e, {
                length: Rhh
            });
            return bhh(s.value.toString());
        } catch  {
            return;
        }
    }
    getPastChatMentionItems(e, t) {
        const n = [];
        for (const i of t.agentRepositoryService?.agents.value ?? []){
            const r = i.source === "local", s = i.subagentParentId !== void 0, o = i.subagentTypeName === Nmt;
            if (!r || s && !o) continue;
            const a = i.name.value;
            if (!Lbo(e, a)) continue;
            const c = i.lastUpdatedAt.value ?? i.createdAt ?? 0;
            n.push({
                item: {
                    id: `past-chat:${i.id}`,
                    label: a,
                    rawText: Shh({
                        name: a,
                        agentId: i.id
                    }),
                    type: "chat",
                    menuIcon: "chat-bubble",
                    description: "Past Chat",
                    lastUsedTime: c,
                    payload: {
                        case: "pastChatSelection",
                        agentId: i.id,
                        name: a
                    }
                },
                timestamp: c
            });
        }
        return n.sort((i, r)=>r.timestamp - i.timestamp), n.slice(0, O1e).map((i)=>i.item);
    }
    buildFileMentionItems(e, t, n, i) {
        if (!t.workspaceContextService) return [];
        const r = [], s = new Set;
        for (const o of i.recentResources)ryo(r, s, o, e, t.workspaceContextService);
        for (const o of n){
            const a = o.resource;
            a && ryo(r, s, a, e, t.workspaceContextService);
        }
        for (const o of i.historyResources)ryo(r, s, o, e, t.workspaceContextService);
        return e ? eyo(e, r, i.recencyRanks).slice(0, O1e).map((o)=>o.item) : Jdh(r, i.recencyRanks).slice(0, O1e);
    }
    buildFolderMentionItems(e, t, n) {
        if (!t.workspaceContextService) return [];
        const i = [], r = new Set;
        for (const s of n){
            const o = s.resource;
            if (!o || !sFn(o)) continue;
            const a = ml(o), l = t.workspaceContextService.asRelativePath(a) || fo(a);
            if (!l || r.has(l)) continue;
            r.add(l);
            const u = fo(a), h = l;
            if (jde(e, u, h, l) && (i.push({
                id: `folder:${l}`,
                label: u,
                rawText: l,
                type: "folder",
                description: h,
                payload: {
                    case: "folderSelection",
                    relativePath: l
                }
            }), i.length >= O1e)) break;
        }
        if (!e && i.length < O1e) for (const s of t.workspaceContextService.getWorkspace().folders){
            const o = s.uri, c = t.workspaceContextService.asRelativePath(o) || s.name || fo(o);
            if (!(!c || r.has(c)) && (r.add(c), i.push({
                id: `folder:${c}`,
                label: s.name || fo(o),
                rawText: c,
                type: "folder",
                description: c,
                payload: {
                    case: "folderSelection",
                    relativePath: c
                }
            }), i.length >= O1e)) break;
        }
        return i;
    }
    async getSharedMentionFilePicks(e, t, n) {
        if (!t.anythingQuickAccessProvider) return [];
        this.didInitializeAnythingQuickAccessCaches || (t.anythingQuickAccessProvider.initializeCaches(), this.didInitializeAnythingQuickAccessCaches = !0);
        let i = await t.anythingQuickAccessProvider.getFilePicks(Qj(e), new Mc, n);
        return !e && i.length === 0 && (i = await t.anythingQuickAccessProvider.getFilePicks(Qj("."), new Mc, n)), i;
    }
    async getCursorRuleMentionItems(e, t) {
        if (!t.cursorRulesService) return [];
        const n = await t.cursorRulesService.getAllRules(), i = [];
        for (const r of n){
            const s = r.filename;
            if (!s.endsWith(".mdc")) continue;
            const o = s.replace(/\.mdc$/i, "");
            if (jde(e, o, r.description, s) && (i.push({
                id: `cursor-rule:${s}`,
                label: o,
                rawText: s,
                type: "cursorRule",
                description: r.description,
                payload: {
                    case: "cursorRule",
                    filename: s
                }
            }), i.length >= O1e)) break;
        }
        return i;
    }
    async getTerminalMentionItems(e, t) {
        if (!t.terminalService) return [];
        const n = [], i = new Set;
        for (const r of t.terminalService.instances){
            if (r.shellLaunchConfig.hideFromUser === !0) continue;
            const s = r.resource;
            if (!s) continue;
            const o = s.toString();
            if (i.has(o)) continue;
            i.add(o);
            const a = r.title || "Terminal";
            let c;
            try {
                c = await t.terminalService.getTerminalFilePathFromResource(s);
            } catch  {
                c = void 0;
            }
            const l = c || void 0;
            if (jde(e, a, l, c, oyo) && (n.push({
                id: `terminal:${o}`,
                label: a,
                rawText: c || a,
                secondaryText: oyo,
                type: "terminal",
                description: l,
                payload: {
                    case: "terminalFile",
                    uri: N1e(s.toJSON()),
                    text: a,
                    terminalFilePath: c
                }
            }), n.length >= O1e)) break;
        }
        return n;
    }
    getMcpMentionItems(e, t) {
        if (!t.mcpService || !t.mcpWellKnownDetectionService) return [];
        const n = t.mcpService, i = ddh(n, t.mcpWellKnownDetectionService, t.hostedMcpPlacementService), r = new Map(n.allServers().map((l)=>[
                l.identifier,
                l
            ])), s = eFn(n), o = H_o(i), a = W_o(i), c = [];
        for (const l of i){
            const u = r.get(l.id), h = u ? s.isServerBlocked(u) : !1, g = l.isEnabled === !1 && !h ? "disabled" : l.status ?? "initializing", f = n.toolsCache()[l.id] ?? [], v = Abo({
                status: g,
                isEnabled: l.isEnabled,
                isBlocked: h,
                blockedMessage: u && h ? n.getServerBlockMessage(u) : void 0,
                enabledToolCount: u ? f.filter((T)=>!n.isToolDisabled(u, T.name)).length : f.length,
                promptCount: n.promptsCache()[l.id]?.length ?? 0,
                resourceCount: n.resourcesCache()[l.id]?.length ?? 0
            }), b = ldh(l.id), y = {
                id: b,
                ...udh(l, {
                    duplicateVisibleNames: o,
                    ambiguousVisibleSourceKeys: a
                }),
                type: "mcp",
                description: l.description,
                secondaryText: v.mentionLabel,
                mcpStatusTone: v.mentionTone,
                mcpSource: l.source,
                pluginId: l.pluginId,
                iconSrc: l.iconSrc,
                payload: {
                    case: "mcpSelection",
                    status: g,
                    serverId: b
                }
            };
            if (dYi(e, y) && (c.push(y), c.length >= O1e)) break;
        }
        return c;
    }
    async getCanvasMentionItems(e, t, n, i, r) {
        if (!r) return [];
        const s = t.canvasMentionProvider;
        if (!s) return [];
        try {
            const o = await s.queryCanvases({
                query: e,
                limit: O1e,
                cancellationToken: n,
                strategy: i
            });
            return n.isCancellationRequested ? [] : o7v(o);
        } catch  {
            return [];
        }
    }
    getUnscopedCanvasMentionItems(e, t, n, i, r) {
        return !r || e.length === 0 ? Promise.resolve([]) : this.getCanvasMentionItems(e, t, n, i, r);
    }
    getBranchMentionItems(e, t) {
        const n = t.cursorCommandsService;
        if (!n) return [];
        const i = this.readBranchCommand, r = i?.service === n, s = e.length === 0;
        return (!r || s) && this.refreshReadBranchCommand(n), r ? i.content ? oFn(e, i.content) : [] : oFn(e);
    }
    refreshReadBranchCommand(e) {
        this.readBranchCommandRefresh.run(async (t)=>{
            const n = await e.getCommand(syo);
            t.throwIfStale(), this.readBranchCommand = {
                service: e,
                content: n?.content
            };
        }).catch(()=>{});
    }
    getMentionFileRecencyData(e) {
        const t = new Map, n = new Map, i = new Map, r = [], s = [], o = new Set;
        for (const l of b7v(e.storageService)){
            const u = l.toString();
            t.has(u) || (t.set(u, t.size), o.add(u), r.push(l));
        }
        const a = e.recentFilesTrackerService?.getRecentlyViewedFiles(bYi) ?? [];
        for (const l of a){
            const u = l.uri;
            if (!sFn(u)) continue;
            const h = u.toString();
            if (!n.has(h) && (n.set(h, n.size), o.has(h) || (o.add(h), r.push(u)), n.size >= bYi)) break;
        }
        const c = e.historyService?.getHistory() ?? [];
        for (const l of c){
            const u = Q7(l) ? l.resource : vd.getOriginalUri(l);
            if (!u || !sFn(u)) continue;
            const h = u.toString();
            if (!(t.has(h) || n.has(h) || i.has(h)) && (i.set(h, s.length), s.push(u), s.length >= bYi)) break;
        }
        return {
            recencyRanks: {
                mentionRanks: t,
                trackerRanks: n,
                historyRanks: i
            },
            recentResources: r,
            historyResources: s
        };
    }
    rankMentionItems(e, t, n) {
        if (!e) {
            const r = new Map;
            for (const s of t)r.has(s.id) || r.set(s.id, s);
            return Jdh([
                ...r.values()
            ], n);
        }
        return eyo(e, t, n).map((r)=>r.item);
    }
    async getMentionItems(e) {
        const { services: t, dispose: n, usedFallbackWorkspace: i } = await this.getWorkspaceServicesWithFallback();
        if (!t) return n?.(), [];
        const r = !i, s = new Ihh(e.cancellationToken);
        try {
            if (e.cancellationToken.isCancellationRequested) return [];
            const o = aVt(e.query);
            if (e.scope !== void 0) switch(e.scope){
                case "files_and_folders":
                    {
                        const A = this.getMentionFileRecencyData(t), R = e.strategy === "fast" ? [] : await s.settle(this.getSharedMentionFilePicks(o, t, s.token), ()=>[]);
                        return e.cancellationToken.isCancellationRequested ? [] : this.rankMentionItems(o, [
                            ...this.buildFileMentionItems(o, t, R, A),
                            ...this.buildFolderMentionItems(o, t, R)
                        ], A.recencyRanks);
                    }
                case "terminals":
                    return e.strategy === "fast" ? [] : await s.settle(this.getTerminalMentionItems(o, t), ()=>[]);
                case "past_chats":
                    {
                        const A = this.getPastChatMentionItems(o, t);
                        return this.rankMentionItems(o, A, whh());
                    }
                case "canvases":
                    {
                        const A = (D)=>this.getCanvasMentionItems(o, t, s.token, D, r), R = await s.settle(A(e.strategy ?? "full"), ()=>A("fast"));
                        return e.cancellationToken.isCancellationRequested ? [] : this.rankMentionItems(o, R, whh());
                    }
                case "branch_diff_main":
                    return e.strategy === "fast" ? oFn(o) : this.getBranchMentionItems(o, t);
                case "browser":
                    return iyo(o);
                case "docs":
                    return [];
                default:
                    {
                        const A = e.scope;
                        return [];
                    }
            }
            const a = this.getMentionFileRecencyData(t), c = iyo(o), l = this.getMcpMentionItems(o, t);
            if (e.strategy === "fast") {
                const A = oFn(o), R = await this.getUnscopedCanvasMentionItems(o, t, e.cancellationToken, "fast", r), D = this.buildFileMentionItems(o, t, [], a), P = this.buildFolderMentionItems(o, t, []), N = o.length > 0 ? this.getPastChatMentionItems(o, t) : [];
                return this.rankMentionItems(o, [
                    ...A,
                    ...c,
                    ...l,
                    ...N,
                    ...R,
                    ...D,
                    ...P
                ], a.recencyRanks);
            }
            const u = (A)=>this.getUnscopedCanvasMentionItems(o, t, s.token, A, r), h = s.settle(u(e.strategy ?? "full"), ()=>u("fast")), p = s.settle(this.getTerminalMentionItems(o, t), ()=>[]), g = await s.settle(this.getSharedMentionFilePicks(o, t, s.token), ()=>[]);
            if (e.cancellationToken.isCancellationRequested) return [];
            const f = this.buildFileMentionItems(o, t, g, a), v = this.buildFolderMentionItems(o, t, g), b = a.recencyRanks, y = await p;
            if (e.cancellationToken.isCancellationRequested) return [];
            const T = this.getPastChatMentionItems(o, t), E = this.getBranchMentionItems(o, t);
            return await this.finishUnscopedFullMentionItems({
                query: o,
                nonCanvasPrefix: [
                    ...E,
                    ...c,
                    ...l,
                    ...y,
                    ...T
                ],
                fileItems: f,
                folderItems: v,
                canvasItemsPromise: h,
                recencyRanks: b,
                cancellationToken: e.cancellationToken,
                onAuthoritativePartial: e.onAuthoritativePartial
            });
        } finally{
            s.end(n);
        }
    }
    async finishUnscopedFullMentionItems(e) {
        const t = [
            ...e.nonCanvasPrefix,
            ...e.fileItems,
            ...e.folderItems
        ], n = this.rankMentionItems(e.query, t, e.recencyRanks);
        let i = !1, r;
        const s = e.canvasItemsPromise.then((a)=>(i = !0, r = a, a));
        await Promise.race([
            s,
            Promise.resolve()
        ]), e.onAuthoritativePartial !== void 0 && e.query.length > 0 && !i && !e.cancellationToken.isCancellationRequested && e.onAuthoritativePartial(n);
        const o = i ? r ?? [] : await s;
        return e.cancellationToken.isCancellationRequested ? [] : this.rankMentionItems(e.query, [
            ...e.nonCanvasPrefix,
            ...o,
            ...e.fileItems,
            ...e.folderItems
        ], e.recencyRanks);
    }
    getMentionKindLabel(e) {
        switch(e){
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
                    const t = e;
                    return "Unknown";
                }
        }
    }
};

}
