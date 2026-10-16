import { Ec, Pn, Qe, Vn, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { iS, lb } from "./adminSettingsService.js";
import { Fze, Hzt } from "./agentAnalyticsOperationsService.js";
import { ju, nf } from "./agent_pb.js";
import { cki, yTn } from "./analytics_connectweb.js";
import { Q8a, lki } from "./analytics_pb.js";
import { qn } from "./async.js";
import { Rs, ss } from "./authenticationService.js";
import { cb, sC } from "./backendClient.js";
import { _ze } from "./browser_2.ts";
import { vl, wm } from "./buildFlags.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { uk, xE } from "./composerModesServiceTypes.js";
import { CJ, UB } from "./debugNamespaceService.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { is, ms } from "./files.js";
import { bze, mZm, nat } from "./gYa.js";
import { Ng } from "./index_3.ts";
import { OT } from "./index_5.ts";
import { It, dn } from "./instantiation.js";
import { $v, Xp, fJ } from "./ipa.js";
import { Fp, zp } from "./lifecycle_2.js";
import { du, kv } from "./map.js";
import { Rd, ih } from "./pathService.js";
import { EE, mT } from "./privateInferenceEnablementService.js";
import { PB } from "./privateInferenceFeatures.js";
import { Zi, ki } from "./storage_2.js";
import { YXm } from "./transcript-loader.ts";
import { M4e, ctl, utl } from "./transcriptPaths.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { $t, Bs } from "./window.js";
import { Sr, yr } from "./workspace.js";
import { C2 } from "./workspaceProjectPaths.js";
import { aN } from "./yBp.js";
var pol, dag, hag, TEi, pag, mag, mol, gag, fag, vag, Wzt;
export { TEi, Wzt, dag, fag, gag, hag, mag, mol, pag, pol, vag };
var __wakaru_ess_initialized = false;
export function ess() {
if (__wakaru_ess_initialized) return;
__wakaru_ess_initialized = true;
"use strict";
E(), _ze(), ju(), OT(), Ng(), Bs(), wm(), Rs(), EE(), PB(), qn(), Qe(), du(), Hzt(), ms(), Rn(), It(), Pl(), xE(), _s(), zp(), iS(), CJ(), Zi(), ih(), sC(), cki(), lki(), Sr(), C2(), M4e(), pol = "agentKv:blob:", dag = "agentKv:checkpoint:", hag = class {
    constructor(t, e){
        this.storageService = t, this.composerDataService = e;
    }
    async listConversations(t) {
        const e = this.composerDataService.allComposersData.allComposers, n = [];
        for (const i of e){
            if (i.type !== "head") continue;
            const r = await this.getLatestCheckpoint(t, i.composerId);
            let s = 0;
            r && (s = r.rootPromptMessagesJson.length), n.push({
                conversationId: i.composerId,
                lastUpdatedAt: i.lastUpdatedAt || i.createdAt || Date.now(),
                messageCount: s
            });
        }
        return n.sort((i, r)=>r.lastUpdatedAt - i.lastUpdatedAt);
    }
    async getLatestCheckpoint(t, e) {
        try {
            const n = `${dag}${e}`, i = await this.storageService.cursorDiskKVGet(n);
            if (!i) return;
            const r = fJ(i), s = `${pol}${$v(r)}`, o = await this.storageService.cursorDiskKVGet(s);
            if (!o) return;
            const a = fJ(o);
            return nf.fromBinary(a);
        } catch  {
            return;
        }
    }
}, TEi = jn("conversationClassificationService"), pag = 600 * 1e3, mag = .1, mol = 10, gag = 1e3, fag = "conversationClassificationScoredConversations", vag = 30 * 1e3, Wzt = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p){
        super(), this.composerDataService = t, this.composerModesService = e, this.experimentService = n, this.lifecycleService = i, this.devConsoleService = r, this.storageService = s, this.instantiationService = o, this.gitOperationsService = a, this.workspaceContextService = l, this.fileService = c, this.pathService = u, this.adminSettingsService = d, this.cursorAuthenticationService = h, this.privateInferenceEnablementService = p, this.pollingTimer = this._register(new Vn), this.scoredConversations = new kv(gag), this.inFlightClassifications = new Map;
        const g = {
            getBlob: async (_, b)=>{
                const y = `${pol}${$v(b)}`, S = await this.storageService.cursorDiskKVGet(y);
                if (S) try {
                    return fJ(S);
                } catch  {
                    return;
                }
            }
        }, f = new hag(this.storageService, this.composerDataService);
        this.transcriptLoader = new YXm(g, f), this.backendClient = this.instantiationService.createInstance(cb, {
            service: yTn
        }), this.backendClient.createServer(), this.loadScoredConversations(), this._register(r.register("classifyRecentConversations", async ()=>{
            console.log("[ConversationClassification] Manually triggering classification for recent conversations...");
            try {
                await this.classifyConversations({
                    force: !0
                });
                const _ = this.scoredConversations.size;
                return console.log(`[ConversationClassification] Classification complete. Total conversations scored: ${_}`), {
                    message: "Classification triggered",
                    conversationsScored: _
                };
            } catch (_) {
                return console.error("[ConversationClassification] Error during manual classification:", _), {
                    error: String(_)
                };
            }
        })), this.lifecycleService.when(2).then(()=>{
            this._store.isDisposed || this.experimentService.checkFeatureGate("cursor_blame", {
                disableExposureLog: !1
            }) && this.adminSettingsService.isCursorBlameEnabledForTeam() && this.scheduleNextPoll();
        }), this._register(this.storageService.onWillSaveState(()=>this.saveScoredConversations())), this._register(Pn(()=>{
            for (const _ of this.inFlightClassifications.values())_.abort();
            this.inFlightClassifications.clear(), this.saveScoredConversations();
        }));
    }
    scheduleNextPoll() {
        if (this._store.isDisposed) return;
        const t = (Math.random() * 2 - 1) * mag, e = Math.floor(pag * (1 + t));
        this.pollingTimer.value = Ec(()=>{
            this.pollingTimer.clear(), this.pollAndScheduleNext();
        }, e);
    }
    async pollAndScheduleNext() {
        try {
            await this.classifyConversations();
        } catch (t) {
            console.error("[ConversationClassification] Error during classification polling:", t);
        } finally{
            !this._store.isDisposed && this.experimentService.checkFeatureGate("cursor_blame", {
                disableExposureLog: !1
            }) && this.adminSettingsService.isCursorBlameEnabledForTeam() && this.scheduleNextPoll();
        }
    }
    async classifyConversations(t) {
        if (t?.force !== !0 && (!this.experimentService.checkFeatureGate("cursor_blame", {
            disableExposureLog: !1
        }) || !this.adminSettingsService.isCursorBlameEnabledForTeam())) return;
        const e = Xp(), n = this.composerDataService.allComposersData.allComposers, i = [];
        for (const a of n)a.type === "head" && i.push({
            conversationId: a.composerId,
            lastUpdatedAt: a.lastUpdatedAt || a.createdAt || Date.now(),
            title: a.name
        });
        const r = i.sort((a, l)=>l.lastUpdatedAt - a.lastUpdatedAt).slice(0, mol * 10);
        let s = [];
        for (const a of r)(t?.force || this.shouldScoreConversation(a)) && s.push(a);
        s = s.sort((a, l)=>{
            const c = this.scoredConversations.get(a.conversationId), u = this.scoredConversations.get(l.conversationId), d = c === void 0;
            return d !== (u === void 0) ? d ? -1 : 1 : l.lastUpdatedAt - a.lastUpdatedAt;
        });
        const o = s.slice(0, mol);
        for (const a of o)this.classifySingleConversation(a.conversationId);
    }
    async classifyConversationsByIds(t) {
        if (!this.experimentService.checkFeatureGate("cursor_blame", {
            disableExposureLog: !1
        }) || !this.adminSettingsService.isCursorBlameEnabledForTeam() || t.length === 0) return;
        const e = [
            ...new Set(t)
        ];
        for (const n of e)this.classifySingleConversation(n);
    }
    shouldScoreConversation(t) {
        const e = this.scoredConversations.get(t.conversationId);
        return e === void 0 ? !0 : t.lastUpdatedAt > e;
    }
    async readTranscriptFromDisk(t) {
        try {
            const e = this.workspaceContextService.getWorkspace(), n = await bze(e, this.pathService);
            return (await mZm(this.fileService, nat({
                transcriptsDir: n,
                conversationId: t,
                preferJsonl: !0
            }), {
                maxBytes: ctl,
                headBytes: utl
            }))?.content;
        } catch  {
            return;
        }
    }
    classifySingleConversation(t) {
        const e = this.inFlightClassifications.get(t);
        e && e.abort();
        const n = new AbortController;
        this.inFlightClassifications.set(t, n);
        const i = n.signal, r = $t.setTimeout(()=>{
            n.abort();
        }, vag);
        this.doClassifyConversation(t, i).finally(()=>{
            $t.clearTimeout(r), this.inFlightClassifications.get(t) === n && this.inFlightClassifications.delete(t), this.scoredConversations.set(t, Date.now());
        });
    }
    async doClassifyConversation(t, e) {
        const n = !aN(this.privateInferenceEnablementService, "conversation-classification");
        if (vl.localMode || n || e.aborted) return;
        const i = await this.readTranscriptFromDisk(t).catch(()=>{}), r = this.composerDataService.getComposerDataIfLoaded(t), o = this.composerModesService.getComposerUnifiedMode(t) || "unknown", a = r?.modelConfig?.modelName || "unknown", l = r?.name || void 0, c = r?.lastUpdatedAt || r?.createdAt || Date.now();
        this.backendClient.get().then((u)=>u.ingestConversation(new Q8a({
                conversationId: t,
                transcript: i?.trim() || "",
                transcriptJson: "",
                mode: o,
                model: a,
                lastUpdatedAt: BigInt(c)
            }))).then((u)=>{
            u.success && u.summary && this.gitOperationsService.storeConversationSummary({
                conversationId: t,
                title: l ?? null,
                tldr: u.summary ?? null,
                overview: u.detailedSummary ?? null,
                summaryBullets: [],
                model: a !== "unknown" ? a : null,
                mode: o !== "unknown" ? o : null,
                updatedAt: c
            }).catch((d)=>{
                console.debug("[ConversationClassification] Failed to store summary locally:", t, d);
            });
        }).catch((u)=>{
            console.debug("[ConversationClassification] Fire-and-forget summarization failed (non-fatal):", t, u);
        }), this.scoredConversations.set(t, Date.now());
    }
    loadScoredConversations() {
        const t = this.storageService.get(Wzt.STORAGE_KEY, 0, "");
        if (t) try {
            const e = JSON.parse(t);
            if (Array.isArray(e)) {
                this.scoredConversations.clear();
                for (const n of e)n && typeof n.conversationId == "string" && typeof n.timestamp == "number" && this.scoredConversations.set(n.conversationId, n.timestamp);
            }
        } catch (e) {
            console.error("[ConversationClassification] Error parsing stored scored conversations:", e);
        }
    }
    saveScoredConversations() {
        try {
            const t = Array.from(this.scoredConversations.entries()).map(([e, n])=>({
                    conversationId: e,
                    timestamp: n
                }));
            this.storageService.store(Wzt.STORAGE_KEY, JSON.stringify(t), 0, 1);
        } catch (t) {
            console.error("[ConversationClassification] Error saving scored conversations:", t);
        }
    }
}, Wzt.STORAGE_KEY = fag, Wzt = Re([
    F(0, no),
    F(1, uk),
    F(2, Cr),
    F(3, Fp),
    F(4, UB),
    F(5, ki),
    F(6, dn),
    F(7, Fze),
    F(8, yr),
    F(9, is),
    F(10, Rd),
    F(11, lb),
    F(12, ss),
    F(13, mT)
], Wzt), bn(TEi, Wzt, 0);

}
