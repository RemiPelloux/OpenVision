import { oL } from "./A3u.js";
import { qW, qh, zv } from "./De_3.js";
import { Cl, Se, cn, rn, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { R1, pw } from "./adminSettingsService.js";
import { aLe, gCt } from "./agentAnalyticsOperationsService.js";
import { Hm, zd } from "./agent_pb.js";
import { DHt, LLn } from "./analytics_connectweb.js";
import { Gro, PLn } from "./analytics_pb.js";
import { bn } from "./async.js";
import { Za, na } from "./authenticationService.js";
import { db, nE } from "./backendClient.js";
import { ett } from "./browser_2.ts";
import { am, kc } from "./buildFlags.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { AA, xC } from "./composerModesServiceTypes.js";
import { Hee, KU } from "./debugNamespaceService.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { Fi, Ii } from "./files.js";
import { Gp } from "./index_3.ts";
import { A1 } from "./index_5.ts";
import { Ze, _t } from "./instantiation.js";
import { $d, Id } from "./lifecycle_2.js";
import { ag, oc } from "./map.js";
import { fu, zl } from "./pathService.js";
import { Hx, uT } from "./privateInferenceEnablementService.js";
import { D6 } from "./privateInferenceFeatures.js";
import { mn, vn } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { ydh } from "./transcript-loader.ts";
import { Gbo, L1e, Wbo } from "./transcriptPaths.js";
import { x } from "./tslib.es6.js";
import { lo, on } from "./window.js";
import { Jn, ci } from "./workspace.js";
import { NR } from "./workspaceProjectPaths.js";
import { KUe, Udh, XUe } from "./xmo.js";
var _Co, ZSh, QSh, p3n, JSh, ekh, bCo, tkh, nkh, ikh, fCt;
export { JSh, QSh, ZSh, _Co, bCo, ekh, fCt, ikh, nkh, p3n, tkh };
var __wakaru_CZi_initialized = false;
export function CZi() {
if (__wakaru_CZi_initialized) return;
__wakaru_CZi_initialized = true;
"use strict";
x(), ett(), zd(), A1(), Gp(), lo(), am(), Za(), Hx(), D6(), bn(), Se(), oc(), gCt(), Fi(), Pn(), Ze(), nl(), AA(), qs(), $d(), R1(), Hee(), Vn(), fu(), nE(), LLn(), PLn(), ci(), NR(), L1e(), _Co = "agentKv:blob:", ZSh = "agentKv:checkpoint:", QSh = class {
    constructor(e, t){
        this.storageService = e, this.composerDataService = t;
    }
    async listConversations(e) {
        const t = this.composerDataService.allComposersData.allComposers, n = [];
        for (const i of t){
            if (i.type !== "head") continue;
            const r = await this.getLatestCheckpoint(e, i.composerId);
            let s = 0;
            r && (s = r.rootPromptMessagesJson.length), n.push({
                conversationId: i.composerId,
                lastUpdatedAt: i.lastUpdatedAt || i.createdAt || Date.now(),
                messageCount: s
            });
        }
        return n.sort((i, r)=>r.lastUpdatedAt - i.lastUpdatedAt);
    }
    async getLatestCheckpoint(e, t) {
        try {
            const n = `${ZSh}${t}`, i = await this.storageService.cursorDiskKVGet(n);
            if (!i) return;
            const r = qW(i), s = `${_Co}${zv(r)}`, o = await this.storageService.cursorDiskKVGet(s);
            if (!o) return;
            const a = qW(o);
            return Hm.fromBinary(a);
        } catch  {
            return;
        }
    }
}, p3n = vn("conversationClassificationService"), JSh = 600 * 1e3, ekh = .1, bCo = 10, tkh = 1e3, nkh = "conversationClassificationScoredConversations", ikh = 30 * 1e3, fCt = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g){
        super(), this.composerDataService = e, this.composerModesService = t, this.experimentService = n, this.lifecycleService = i, this.devConsoleService = r, this.storageService = s, this.instantiationService = o, this.gitOperationsService = a, this.workspaceContextService = c, this.fileService = l, this.pathService = u, this.adminSettingsService = h, this.cursorAuthenticationService = p, this.privateInferenceEnablementService = g, this.pollingTimer = this._register(new cn), this.scoredConversations = new ag(tkh), this.inFlightClassifications = new Map;
        const f = {
            getBlob: async (b, y)=>{
                const T = `${_Co}${zv(y)}`, E = await this.storageService.cursorDiskKVGet(T);
                if (E) try {
                    return qW(E);
                } catch  {
                    return;
                }
            }
        }, v = new QSh(this.storageService, this.composerDataService);
        this.transcriptLoader = new ydh(f, v), this.backendClient = this.instantiationService.createInstance(db, {
            service: DHt
        }), this.backendClient.createServer(), this.loadScoredConversations(), this._register(r.register("classifyRecentConversations", async ()=>{
            console.log("[ConversationClassification] Manually triggering classification for recent conversations...");
            try {
                await this.classifyConversations({
                    force: !0
                });
                const b = this.scoredConversations.size;
                return console.log(`[ConversationClassification] Classification complete. Total conversations scored: ${b}`), {
                    message: "Classification triggered",
                    conversationsScored: b
                };
            } catch (b) {
                return console.error("[ConversationClassification] Error during manual classification:", b), {
                    error: String(b)
                };
            }
        })), this.lifecycleService.when(2).then(()=>{
            this._store.isDisposed || this.experimentService.checkFeatureGate("cursor_blame", {
                disableExposureLog: !1
            }) && this.adminSettingsService.isCursorBlameEnabledForTeam() && this.scheduleNextPoll();
        }), this._register(this.storageService.onWillSaveState(()=>this.saveScoredConversations())), this._register(rn(()=>{
            for (const b of this.inFlightClassifications.values())b.abort();
            this.inFlightClassifications.clear(), this.saveScoredConversations();
        }));
    }
    scheduleNextPoll() {
        if (this._store.isDisposed) return;
        const e = (Math.random() * 2 - 1) * ekh, t = Math.floor(JSh * (1 + e));
        this.pollingTimer.value = Cl(()=>{
            this.pollingTimer.clear(), this.pollAndScheduleNext();
        }, t);
    }
    async pollAndScheduleNext() {
        try {
            await this.classifyConversations();
        } catch (e) {
            console.error("[ConversationClassification] Error during classification polling:", e);
        } finally{
            !this._store.isDisposed && this.experimentService.checkFeatureGate("cursor_blame", {
                disableExposureLog: !1
            }) && this.adminSettingsService.isCursorBlameEnabledForTeam() && this.scheduleNextPoll();
        }
    }
    async classifyConversations(e) {
        if (e?.force !== !0 && (!this.experimentService.checkFeatureGate("cursor_blame", {
            disableExposureLog: !1
        }) || !this.adminSettingsService.isCursorBlameEnabledForTeam())) return;
        const t = qh(), n = this.composerDataService.allComposersData.allComposers, i = [];
        for (const a of n)a.type === "head" && i.push({
            conversationId: a.composerId,
            lastUpdatedAt: a.lastUpdatedAt || a.createdAt || Date.now(),
            title: a.name
        });
        const r = i.sort((a, c)=>c.lastUpdatedAt - a.lastUpdatedAt).slice(0, bCo * 10);
        let s = [];
        for (const a of r)(e?.force || this.shouldScoreConversation(a)) && s.push(a);
        s = s.sort((a, c)=>{
            const l = this.scoredConversations.get(a.conversationId), u = this.scoredConversations.get(c.conversationId), h = l === void 0;
            return h !== (u === void 0) ? h ? -1 : 1 : c.lastUpdatedAt - a.lastUpdatedAt;
        });
        const o = s.slice(0, bCo);
        for (const a of o)this.classifySingleConversation(a.conversationId);
    }
    async classifyConversationsByIds(e) {
        if (!this.experimentService.checkFeatureGate("cursor_blame", {
            disableExposureLog: !1
        }) || !this.adminSettingsService.isCursorBlameEnabledForTeam() || e.length === 0) return;
        const t = [
            ...new Set(e)
        ];
        for (const n of t)this.classifySingleConversation(n);
    }
    shouldScoreConversation(e) {
        const t = this.scoredConversations.get(e.conversationId);
        return t === void 0 ? !0 : e.lastUpdatedAt > t;
    }
    async readTranscriptFromDisk(e) {
        try {
            const t = this.workspaceContextService.getWorkspace(), n = await XUe(t, this.pathService);
            return (await Udh(this.fileService, KUe({
                transcriptsDir: n,
                conversationId: e,
                preferJsonl: !0
            }), {
                maxBytes: Wbo,
                headBytes: Gbo
            }))?.content;
        } catch  {
            return;
        }
    }
    classifySingleConversation(e) {
        const t = this.inFlightClassifications.get(e);
        t && t.abort();
        const n = new AbortController;
        this.inFlightClassifications.set(e, n);
        const i = n.signal, r = on.setTimeout(()=>{
            n.abort();
        }, ikh);
        this.doClassifyConversation(e, i).finally(()=>{
            on.clearTimeout(r), this.inFlightClassifications.get(e) === n && this.inFlightClassifications.delete(e), this.scoredConversations.set(e, Date.now());
        });
    }
    async doClassifyConversation(e, t) {
        const n = !oL(this.privateInferenceEnablementService, "conversation-classification");
        if (kc.localMode || n || t.aborted) return;
        const i = await this.readTranscriptFromDisk(e).catch(()=>{}), r = this.composerDataService.getComposerDataIfLoaded(e), o = this.composerModesService.getComposerUnifiedMode(e) || "unknown", a = r?.modelConfig?.modelName || "unknown", c = r?.name || void 0, l = r?.lastUpdatedAt || r?.createdAt || Date.now();
        this.backendClient.get().then((u)=>u.ingestConversation(new Gro({
                conversationId: e,
                transcript: i?.trim() || "",
                transcriptJson: "",
                mode: o,
                model: a,
                lastUpdatedAt: BigInt(l)
            }))).then((u)=>{
            u.success && u.summary && this.gitOperationsService.storeConversationSummary({
                conversationId: e,
                title: c ?? null,
                tldr: u.summary ?? null,
                overview: u.detailedSummary ?? null,
                summaryBullets: [],
                model: a !== "unknown" ? a : null,
                mode: o !== "unknown" ? o : null,
                updatedAt: l
            }).catch((h)=>{
                console.debug("[ConversationClassification] Failed to store summary locally:", e, h);
            });
        }).catch((u)=>{
            console.debug("[ConversationClassification] Fire-and-forget summarization failed (non-fatal):", e, u);
        }), this.scoredConversations.set(e, Date.now());
    }
    loadScoredConversations() {
        const e = this.storageService.get(fCt.STORAGE_KEY, 0, "");
        if (e) try {
            const t = JSON.parse(e);
            if (Array.isArray(t)) {
                this.scoredConversations.clear();
                for (const n of t)n && typeof n.conversationId == "string" && typeof n.timestamp == "number" && this.scoredConversations.set(n.conversationId, n.timestamp);
            }
        } catch (t) {
            console.error("[ConversationClassification] Error parsing stored scored conversations:", t);
        }
    }
    saveScoredConversations() {
        try {
            const e = Array.from(this.scoredConversations.entries()).map(([t, n])=>({
                    conversationId: t,
                    timestamp: n
                }));
            this.storageService.store(fCt.STORAGE_KEY, JSON.stringify(e), 0, 1);
        } catch (e) {
            console.error("[ConversationClassification] Error saving scored conversations:", e);
        }
    }
}, fCt.STORAGE_KEY = nkh, fCt = ie([
    C(0, Zs),
    C(1, xC),
    C(2, Kr),
    C(3, Id),
    C(4, KU),
    C(5, yn),
    C(6, _t),
    C(7, aLe),
    C(8, Jn),
    C(9, Ii),
    C(10, zl),
    C(11, pw),
    C(12, na),
    C(13, uT)
], fCt), mn(p3n, fCt, 0);

}
