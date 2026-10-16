import { oL } from "./A3u.js";
import { Df, Rg, qKv, so } from "./ECo.js";
import { Se, bt, rn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { QZi, w3n } from "./aiClientService.js";
import { Sg, jp } from "./aiService.js";
import { Za, na } from "./authenticationService.js";
import { Pn } from "./extensions.js";
import { kk, r0 } from "./gitContextService.js";
import { Ze } from "./instantiation.js";
import { Qn, Wn } from "./log.js";
import { Hx, uT } from "./privateInferenceEnablementService.js";
import { D6, d_e } from "./privateInferenceFeatures.js";
import { Lh, Ut, mn, qn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var ujt, C3n, cCh, h8e, JZi;
export { C3n, JZi, cCh, h8e, ujt };
var __wakaru_xtt_initialized = false;
export function xtt() {
if (__wakaru_xtt_initialized) return;
__wakaru_xtt_initialized = true;
"use strict";
x(), Ze(), Se(), Pn(), Sg(), Hx(), D6(), qn(), Df(), r0(), Za(), QZi(), bt(), Qn(), ujt = so([]), C3n = so(!1), cCh = "No full commit provider registered", h8e = vn("knowledgeBaseService"), JZi = class extends we {
    constructor(e, t, n, i, r, s){
        super(), this.gitContextService = e, this.cursorAuthenticationService = t, this.privateInferenceEnablementService = n, this.aiClientService = i, this.aiService = r, this.logService = s, this.jotaiStore = Rg(), this._onDidChangeItems = this._register(new ve), this.onDidChangeItems = this._onDidChangeItems.event, this._cachedGitUpstreamURL = void 0;
        const [o, a] = Ut(this.jotaiStore.get(ujt));
        this.itemsSignal = o, this._register(rn(this.jotaiStore.sub(ujt, ()=>a(this.jotaiStore.get(ujt)))));
        const [c, l] = Ut(this.jotaiStore.get(C3n));
        this.isLoadingSignal = c, this._register(rn(this.jotaiStore.sub(C3n, ()=>l(this.jotaiStore.get(C3n)))));
        const u = async ()=>{
            this._cachedGitUpstreamURL = void 0, await this.refresh(!0);
        };
        this.cursorAuthenticationService.addLoginChangedListener(u), this._register(rn(()=>this.cursorAuthenticationService.removeLoginChangedListener(u))), this.refresh(!0), this.maybeAddOldUserRules();
    }
    get items() {
        return this.itemsSignal();
    }
    get isLoading() {
        return this.isLoadingSignal();
    }
    setItems(e) {
        this.jotaiStore.set(ujt, typeof e == "function" ? e(this.jotaiStore.get(ujt)) : e);
    }
    setIsLoading(e) {
        this.jotaiStore.set(C3n, e);
    }
    dispose() {
        super.dispose();
    }
    async getGitUpstreamUrl() {
        if (this._cachedGitUpstreamURL === void 0) try {
            const e = await this.gitContextService.getGitUpstreamURL();
            this._cachedGitUpstreamURL = e;
        } catch (e) {
            qKv(e) ? this.logService.trace("[KnowledgeBaseService] Git context provider unavailable; deferring git upstream URL lookup") : this.logService.error("[KnowledgeBaseService] Error fetching git upstream URL:", e), this._cachedGitUpstreamURL = void 0;
        }
        return this._cachedGitUpstreamURL ?? void 0;
    }
    async refresh(e = !1) {
        if (this.knowledgeBaseOffUnderPrivateInference()) {
            Lh(()=>{
                this.setItems([]), this.setIsLoading(!1);
            }), this.notifyItemsChanged();
            return;
        }
        this.setIsLoading(!0);
        try {
            const t = await this.aiClientService.aiClient(), n = await this.getGitUpstreamUrl(), r = (await t.knowledgeBaseList({
                gitOrigin: n,
                limit: 100
            })).allResults.map((s)=>({
                    id: s.id ?? "",
                    title: s.title ?? "",
                    knowledge: s.knowledge ?? "",
                    createdAt: s.createdAt ?? void 0,
                    isGenerated: s.isGenerated ?? !1
                }));
            Lh(()=>{
                this.setItems(r), this.setIsLoading(!1);
            }), this.notifyItemsChanged(), console.log("[KnowledgeBaseService] Successfully refreshed knowledge base:", r.length, "items");
        } catch (t) {
            console.error("[KnowledgeBaseService] Failed to fetch knowledge:", t), this.setIsLoading(!1);
        }
    }
    knowledgeBaseOffUnderPrivateInference() {
        return !oL(this.privateInferenceEnablementService, "knowledge-base");
    }
    assertKnowledgeBaseAvailable() {
        if (this.knowledgeBaseOffUnderPrivateInference()) throw new d_e("knowledge-base");
    }
    async addItem(e, t, n) {
        this.assertKnowledgeBaseAvailable();
        try {
            const i = await this.aiClientService.aiClient(), r = await this.getGitUpstreamUrl(), s = await i.knowledgeBaseAdd({
                title: e.trim() || "[Untitled]",
                knowledge: t,
                gitOrigin: r,
                composerId: n
            }), o = {
                id: s.id ?? "",
                title: e.trim() || "[Untitled]",
                knowledge: t,
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
    async updateItem(e, t, n) {
        this.assertKnowledgeBaseAvailable();
        const i = this.items.find((s)=>s.id === e);
        if (!i) throw new Error("Knowledge item not found");
        const r = {
            ...i
        };
        this.setItems((s)=>s.map((o)=>o.id === e ? {
                    ...o,
                    title: t.trim() || "[Untitled]",
                    knowledge: n
                } : o)), this.notifyItemsChanged();
        try {
            if (!(await (await this.aiClientService.aiClient()).knowledgeBaseUpdate({
                id: e,
                title: t.trim() || "[Untitled]",
                knowledge: n
            })).success) throw new Error("Failed to update knowledge item");
            console.log("[KnowledgeBaseService] Successfully updated knowledge item:", e);
        } catch (s) {
            throw console.error("[KnowledgeBaseService] Failed to update knowledge:", s), this.setItems((o)=>o.map((a)=>a.id === e ? r : a)), this.notifyItemsChanged(), s;
        }
    }
    async removeItem(e) {
        const t = this.items.find((n)=>n.id === e);
        if (t) {
            this.setItems((n)=>n.filter((i)=>i.id !== e)), this.notifyItemsChanged();
            try {
                await (await this.aiClientService.aiClient()).knowledgeBaseRemove({
                    id: e
                }), console.log("[KnowledgeBaseService] Successfully removed knowledge item:", e);
            } catch (n) {
                throw console.error("[KnowledgeBaseService] Failed to delete knowledge:", n), this.setItems((i)=>[
                        ...i,
                        t
                    ].sort((r, s)=>(r.createdAt ?? "") < (s.createdAt ?? "") ? 1 : -1)), this.notifyItemsChanged(), n;
            }
        }
    }
    async removeAll() {
        const e = [
            ...this.items
        ];
        if (e.length !== 0) {
            this.setItems([]), this.notifyItemsChanged();
            try {
                const t = await this.aiClientService.aiClient();
                await Promise.all(e.map((n)=>t.knowledgeBaseRemove({
                        id: n.id
                    }))), console.log("[KnowledgeBaseService] Successfully removed all knowledge items");
            } catch (t) {
                throw console.error("[KnowledgeBaseService] Failed to delete all knowledge:", t), this.setItems(e), this.notifyItemsChanged(), t;
            }
        }
    }
    notifyItemsChanged() {
        this._onDidChangeItems.fire(this.items.map((e)=>({
                ...e
            })));
    }
    async maybeAddOldUserRules() {
        const e = this.aiService.getPersonalContext();
        if (!(!e || e.trim() === "") && !this.knowledgeBaseOffUnderPrivateInference()) try {
            const t = await this.aiClientService.aiClient(), n = await this.getGitUpstreamUrl();
            await t.knowledgeBaseAdd({
                title: "Migrated User Rules",
                knowledge: e,
                gitOrigin: n
            }), console.log("[KnowledgeBaseService Migration] Successfully migrated old user rules");
        } catch (t) {
            console.error("[KnowledgeBaseService Migration] Failed to migrate old user rules:", t);
        }
    }
}, JZi = ie([
    C(0, kk),
    C(1, na),
    C(2, uT),
    C(3, w3n),
    C(4, jp),
    C(5, Wn)
], JZi), mn(h8e, JZi, 1);

}
