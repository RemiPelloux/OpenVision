import { Gt, Pn, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Am, avk, cs, jp } from "./Sol.js";
import { LEi, xss } from "./aiClientService.js";
import { Dc, jl } from "./aiService.js";
import { Rs, ss } from "./authenticationService.js";
import { Rn } from "./extensions.js";
import { Jv, hy } from "./gitContextService.js";
import { It } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { EE, mT } from "./privateInferenceEnablementService.js";
import { PB, hCe } from "./privateInferenceFeatures.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { aN } from "./yBp.js";
import { Qm, Wt, pi } from "./ze.js";
var aAn, OEi, ycg, Uze, Ass;
export { Ass, OEi, Uze, aAn, ycg };
var __wakaru_bat_initialized = false;
export function bat() {
if (__wakaru_bat_initialized) return;
__wakaru_bat_initialized = true;
"use strict";
E(), It(), Qe(), Rn(), Dc(), EE(), PB(), pi(), Am(), hy(), Rs(), xss(), Gt(), Ji(), aAn = cs([]), OEi = cs(!1), ycg = "No full commit provider registered", Uze = jn("knowledgeBaseService"), Ass = class extends st {
    constructor(t, e, n, i, r, s){
        super(), this.gitContextService = t, this.cursorAuthenticationService = e, this.privateInferenceEnablementService = n, this.aiClientService = i, this.aiService = r, this.logService = s, this.jotaiStore = jp(), this._onDidChangeItems = this._register(new tt), this.onDidChangeItems = this._onDidChangeItems.event, this._cachedGitUpstreamURL = void 0;
        const [o, a] = Wt(this.jotaiStore.get(aAn));
        this.itemsSignal = o, this._register(Pn(this.jotaiStore.sub(aAn, ()=>a(this.jotaiStore.get(aAn)))));
        const [l, c] = Wt(this.jotaiStore.get(OEi));
        this.isLoadingSignal = l, this._register(Pn(this.jotaiStore.sub(OEi, ()=>c(this.jotaiStore.get(OEi)))));
        const u = async ()=>{
            this._cachedGitUpstreamURL = void 0, await this.refresh(!0);
        };
        this.cursorAuthenticationService.addLoginChangedListener(u), this._register(Pn(()=>this.cursorAuthenticationService.removeLoginChangedListener(u))), this.refresh(!0), this.maybeAddOldUserRules();
    }
    get items() {
        return this.itemsSignal();
    }
    get isLoading() {
        return this.isLoadingSignal();
    }
    setItems(t) {
        this.jotaiStore.set(aAn, typeof t == "function" ? t(this.jotaiStore.get(aAn)) : t);
    }
    setIsLoading(t) {
        this.jotaiStore.set(OEi, t);
    }
    dispose() {
        super.dispose();
    }
    async getGitUpstreamUrl() {
        if (this._cachedGitUpstreamURL === void 0) try {
            const t = await this.gitContextService.getGitUpstreamURL();
            this._cachedGitUpstreamURL = t;
        } catch (t) {
            avk(t) ? this.logService.trace("[KnowledgeBaseService] Git context provider unavailable; deferring git upstream URL lookup") : this.logService.error("[KnowledgeBaseService] Error fetching git upstream URL:", t), this._cachedGitUpstreamURL = void 0;
        }
        return this._cachedGitUpstreamURL ?? void 0;
    }
    async refresh(t = !1) {
        if (this.knowledgeBaseOffUnderPrivateInference()) {
            Qm(()=>{
                this.setItems([]), this.setIsLoading(!1);
            }), this.notifyItemsChanged();
            return;
        }
        this.setIsLoading(!0);
        try {
            const e = await this.aiClientService.aiClient(), n = await this.getGitUpstreamUrl(), r = (await e.knowledgeBaseList({
                gitOrigin: n,
                limit: 100
            })).allResults.map((s)=>({
                    id: s.id ?? "",
                    title: s.title ?? "",
                    knowledge: s.knowledge ?? "",
                    createdAt: s.createdAt ?? void 0,
                    isGenerated: s.isGenerated ?? !1
                }));
            Qm(()=>{
                this.setItems(r), this.setIsLoading(!1);
            }), this.notifyItemsChanged(), console.log("[KnowledgeBaseService] Successfully refreshed knowledge base:", r.length, "items");
        } catch (e) {
            console.error("[KnowledgeBaseService] Failed to fetch knowledge:", e), this.setIsLoading(!1);
        }
    }
    knowledgeBaseOffUnderPrivateInference() {
        return !aN(this.privateInferenceEnablementService, "knowledge-base");
    }
    assertKnowledgeBaseAvailable() {
        if (this.knowledgeBaseOffUnderPrivateInference()) throw new hCe("knowledge-base");
    }
    async addItem(t, e, n) {
        this.assertKnowledgeBaseAvailable();
        try {
            const i = await this.aiClientService.aiClient(), r = await this.getGitUpstreamUrl(), s = await i.knowledgeBaseAdd({
                title: t.trim() || "[Untitled]",
                knowledge: e,
                gitOrigin: r,
                composerId: n
            }), o = {
                id: s.id ?? "",
                title: t.trim() || "[Untitled]",
                knowledge: e,
                createdAt: new Date().toISOString(),
                isGenerated: !!n
            };
            return this.setItems((a)=>[
                    o,
                    ...a
                ]), this.notifyItemsChanged(), console.log("[KnowledgeBaseService] Successfully added knowledge item:", s.id), s.id;
        } catch (i) {
            throw console.error("[KnowledgeBaseService] Failed to add knowledge:", i), i;
        }
    }
    async updateItem(t, e, n) {
        this.assertKnowledgeBaseAvailable();
        const i = this.items.find((s)=>s.id === t);
        if (!i) throw new Error("Knowledge item not found");
        const r = {
            ...i
        };
        this.setItems((s)=>s.map((o)=>o.id === t ? {
                    ...o,
                    title: e.trim() || "[Untitled]",
                    knowledge: n
                } : o)), this.notifyItemsChanged();
        try {
            if (!(await (await this.aiClientService.aiClient()).knowledgeBaseUpdate({
                id: t,
                title: e.trim() || "[Untitled]",
                knowledge: n
            })).success) throw new Error("Failed to update knowledge item");
            console.log("[KnowledgeBaseService] Successfully updated knowledge item:", t);
        } catch (s) {
            throw console.error("[KnowledgeBaseService] Failed to update knowledge:", s), this.setItems((o)=>o.map((a)=>a.id === t ? r : a)), this.notifyItemsChanged(), s;
        }
    }
    async removeItem(t) {
        const e = this.items.find((n)=>n.id === t);
        if (e) {
            this.setItems((n)=>n.filter((i)=>i.id !== t)), this.notifyItemsChanged();
            try {
                await (await this.aiClientService.aiClient()).knowledgeBaseRemove({
                    id: t
                }), console.log("[KnowledgeBaseService] Successfully removed knowledge item:", t);
            } catch (n) {
                throw console.error("[KnowledgeBaseService] Failed to delete knowledge:", n), this.setItems((i)=>[
                        ...i,
                        e
                    ].sort((r, s)=>(r.createdAt ?? "") < (s.createdAt ?? "") ? 1 : -1)), this.notifyItemsChanged(), n;
            }
        }
    }
    async removeAll() {
        const t = [
            ...this.items
        ];
        if (t.length !== 0) {
            this.setItems([]), this.notifyItemsChanged();
            try {
                const e = await this.aiClientService.aiClient();
                await Promise.all(t.map((n)=>e.knowledgeBaseRemove({
                        id: n.id
                    }))), console.log("[KnowledgeBaseService] Successfully removed all knowledge items");
            } catch (e) {
                throw console.error("[KnowledgeBaseService] Failed to delete all knowledge:", e), this.setItems(t), this.notifyItemsChanged(), e;
            }
        }
    }
    notifyItemsChanged() {
        this._onDidChangeItems.fire(this.items.map((t)=>({
                ...t
            })));
    }
    async maybeAddOldUserRules() {
        const t = this.aiService.getPersonalContext();
        if (!(!t || t.trim() === "") && !this.knowledgeBaseOffUnderPrivateInference()) try {
            const e = await this.aiClientService.aiClient(), n = await this.getGitUpstreamUrl();
            await e.knowledgeBaseAdd({
                title: "Migrated User Rules",
                knowledge: t,
                gitOrigin: n
            }), console.log("[KnowledgeBaseService Migration] Successfully migrated old user rules");
        } catch (e) {
            console.error("[KnowledgeBaseService Migration] Failed to migrate old user rules:", e);
        }
    }
}, Ass = Re([
    F(0, Jv),
    F(1, ss),
    F(2, mT),
    F(3, LEi),
    F(4, jl),
    F(5, Li)
], Ass), bn(Uze, Ass, 1);

}
