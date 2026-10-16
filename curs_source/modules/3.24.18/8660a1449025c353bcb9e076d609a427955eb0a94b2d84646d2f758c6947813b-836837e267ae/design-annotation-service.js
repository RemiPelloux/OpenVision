import { De0, Me0, Tql, _e0, wLn } from "./Asv.js";
import { Ei, Gt, Pn, Qe, st, tt, xr } from "./Iwo.js";
import { Il } from "./SZu.js";
import { $X } from "./Ycg.js";
import { df, qn } from "./async.js";
import { bme } from "./composerInputEditSession.js";
import { CLn, eRt } from "./design-annotation-model.js";
import { a5i } from "./design-annotation-turn.js";
import { bIs } from "./design-mode-page-url.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var Blv, Ulv, TIs, Eql, jlv, HV, $lv;
export { $lv, Blv, Eql, HV, TIs, Ulv, jlv };
var __wakaru__ee_initialized = false;
export function _ee() {
if (__wakaru__ee_initialized) return;
__wakaru__ee_initialized = true;
"use strict";
E(), qn(), Ei(), Gt(), Qe(), It(), bme(), CLn(), bIs(), a5i(), Blv = 5, Ulv = 20, TIs = {
    kind: "submitted"
}, Eql = {
    kind: "not-carried"
}, jlv = {
    kind: "cancelled"
}, HV = Il("glassDesignAnnotationService"), $lv = class extends st {
    constructor(){
        super(...arguments), this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._onDidNotSendNote = this._register(new tt), this.onDidNotSendNote = this._onDidNotSendNote.event, this._onDidRequestReveal = this._register(new tt), this.onDidRequestReveal = this._onDidRequestReveal.event, this._queues = new Map, this._browserPages = new Map, this._closedBrowserTabs = new Set, this._currentPageAnnotations = new Map, this._sessions = new Map, this._pendingAnnotations = new Set, this._submitTargetStacks = new Map, this._submitScopes = new Map, this._revealTargets = [], this._sentTurns = new Map;
    }
    getQueue(t) {
        return this._queues.get(t) ?? eRt;
    }
    getCurrentPageAnnotations(t) {
        const e = this.getQueue(t), n = this._currentPageAnnotations.get(t);
        if (n?.queue === e) return n.annotations;
        const i = e.items.filter((s)=>this._isOnCurrentPage(s)), r = i.length === e.items.length ? e.items : i;
        return this._currentPageAnnotations.set(t, {
            queue: e,
            annotations: r
        }), r;
    }
    getActiveAnnotations(t) {
        return this.isAnnotating(t) ? this.getCurrentPageAnnotations(t) : eRt.items;
    }
    getAnnotationsToSend(t, e) {
        return e === void 0 ? this.getActiveAnnotations(t) : this.getCurrentPageAnnotations(t).filter((n)=>e.has(n.id));
    }
    clearCurrentPageAnnotations(t) {
        const e = this.getCurrentPageAnnotations(t).map((n)=>n.id);
        e.length > 0 && this.dispatch(t, {
            type: "remove",
            ids: e
        });
    }
    setBrowserPage({ browserId: t, url: e }) {
        if (!e || this._closedBrowserTabs.has(t)) return;
        const n = wLn(e);
        this._browserPages.get(t) !== n && (this._browserPages.delete(t), this._browserPages.set(t, n), this._didChangeBrowserPage(t));
    }
    forgetBrowserTab(t) {
        this._closedBrowserTabs.add(t), this._browserPages.delete(t) && this._didChangeBrowserPage(t);
    }
    get browserPages() {
        return this._browserPages;
    }
    _didChangeBrowserPage(t) {
        for (const [e, n] of this._queues)n.items.some((i)=>i.browserId === t) && (this._currentPageAnnotations.delete(e), this._onDidChange.fire(e));
    }
    _isOnCurrentPage(t) {
        const e = this._browserPages.get(t.browserId);
        return t.pageUrl === void 0 || e === void 0 || wLn(t.pageUrl) === e;
    }
    isAnnotating(t) {
        for (const e of this._sessions.values())if (e.agentId === t) return !0;
        return !1;
    }
    dispatch(t, e) {
        const n = this.getQueue(t), i = _e0(n, e);
        i !== n && (i === eRt ? this._queues.delete(t) : this._queues.set(t, i), this._currentPageAnnotations.delete(t), this._onDidChange.fire(t));
    }
    clearQueues() {
        for (const t of [
            ...this._queues.keys()
        ])this.dispatch(t, {
            type: "clear"
        });
        this._browserPages.clear();
    }
    countAnnotateUse() {}
    registerDesignModeSession({ agentId: t, browserId: e, exit: n }) {
        const i = {
            agentId: t,
            exit: n
        }, r = this._sessions.get(e);
        return this._sessions.set(e, i), r !== void 0 && r.agentId !== t && this._onDidChange.fire(r.agentId), this._onDidChange.fire(t), Pn(()=>{
            this._sessions.get(e) === i && (this._sessions.delete(e), this._onDidChange.fire(i.agentId));
        });
    }
    getDesignModeSessionAgentId(t) {
        return this._sessions.get(t)?.agentId;
    }
    beginAnnotation(t) {
        const e = {
            agentId: t
        };
        this._pendingAnnotations.add(e);
        const n = ()=>{
            this._pendingAnnotations.delete(e);
        };
        return {
            add: (i)=>(this.dispatch(e.agentId, {
                    type: "add",
                    draft: i
                }), this.countAnnotateUse(), e.agentId),
            dispose: n,
            [Symbol.dispose]: n
        };
    }
    exitDesignMode(t) {
        for (const e of [
            ...this._sessions.values()
        ])e.agentId === t && e.exit();
    }
    async followDraftCreate({ draftAgentId: t, submission: e, callbacks: n, create: i }) {
        e?.markSent();
        let r = t;
        const s = (a)=>{
            this._rebindSentTurns(r, a.header.id), this.handOffDesignMode({
                fromAgentId: r,
                toAgentId: a.header.id
            }), r = a.header.id;
        }, o = ()=>{
            this.handOffDesignMode({
                fromAgentId: r,
                toAgentId: t
            }), e?.restore();
        };
        try {
            const a = await i({
                onCreated: (l)=>{
                    s(l), n.onCreated?.(l);
                },
                onWorktreeSetupComplete: (l)=>{
                    s(l), n.onWorktreeSetupComplete?.(l);
                },
                onCreateFailed: (l)=>{
                    n.onCreateFailed?.(l), this.handOffDesignMode({
                        fromAgentId: l,
                        toAgentId: t
                    });
                }
            });
            return a === void 0 && o(), a;
        } catch (a) {
            throw o(), a;
        }
    }
    handOffDesignMode({ fromAgentId: t, toAgentId: e }) {
        if (t === e) return;
        const { items: n } = this.getQueue(t);
        n.length > 0 && (this.dispatch(t, {
            type: "clear"
        }), this.dispatch(e, {
            type: "append",
            items: n
        }));
        for (const r of this._pendingAnnotations)r.agentId === t && (r.agentId = e);
        let i = !1;
        for (const r of this._sessions.values())r.agentId === t && (r.agentId = e, i = !0);
        i && (this._onDidChange.fire(t), this._onDidChange.fire(e));
    }
    handOffAbandonedAgent(t) {
        t.fromAgentId !== t.toAgentId && (this.handOffDesignMode(t), this._returnQueuedTurns(new Set([
            t.fromAgentId
        ]), t.toAgentId, void 0));
    }
    revealAnnotation(t, e) {
        this._onDidRequestReveal.fire({
            agentId: t,
            id: e
        });
    }
    registerRevealTarget(t) {
        return this._revealTargets.push(t), this._onDidChange.fire(t.agentId), Pn(()=>{
            this._revealTargets.splice(this._revealTargets.indexOf(t), 1), this._onDidChange.fire(t.agentId);
        });
    }
    canReveal(t, e) {
        return this._revealTargets.some((n)=>n.agentId === t && n.pinnedIds.has(e));
    }
    registerSubmitTarget(t, e, n = !0, i) {
        const r = this._submitTargetStacks.get(t) ?? [], s = {
            submit: e,
            ready: n,
            waitsFor: i
        };
        return r.push(s), this._submitTargetStacks.set(t, r), this._onDidChange.fire(t), {
            dispose: ()=>{
                const a = r.lastIndexOf(s);
                a !== -1 && (r.splice(a, 1), r.length === 0 && this._submitTargetStacks.delete(t), this._onDidChange.fire(t));
            },
            setReady: (a)=>{
                s.ready === a || !r.includes(s) || (s.ready = a, this._onDidChange.fire(t));
            },
            setWaitsFor: (a)=>{
                s.waitsFor = a;
            }
        };
    }
    canSubmit(t) {
        return this._submitTargetStacks.has(t);
    }
    canSendNow(t) {
        return this._submitTargetStacks.get(t)?.at(-1)?.ready === !0;
    }
    async requestScopedSubmit(t, e) {
        const n = this._submitTargetStacks.get(t)?.at(-1);
        if (!n?.ready) return {
            kind: "unavailable"
        };
        if (n.waitsFor !== void 0) return {
            kind: "waits",
            waitsFor: n.waitsFor
        };
        const i = new df;
        let r = !1;
        this._submitScopes.set(t, {
            only: e,
            onSent: ()=>void i.complete(),
            onCancelled: ()=>{
                r = !0;
            }
        });
        let s;
        try {
            s = n.submit();
        } finally{
            this._submitScopes.delete(t);
        }
        return i.isSettled ? TIs : s === void 0 ? Eql : Promise.race([
            i.p.then(()=>TIs),
            s.then(()=>r ? jlv : Eql, (o)=>{
                if (!i.isSettled) throw o;
                return xr(o), TIs;
            })
        ]);
    }
    prepareSubmission(t, e, n) {
        return this._prepareSubmission(t, e, n, void 0);
    }
    prepareRequestedSubmission(t, e) {
        const n = this._submitScopes.get(t.header.id);
        return n && this._prepareSubmission(t, e, n.only, n);
    }
    _prepareSubmission(t, e, n, i) {
        const r = t.header.id, s = this.getAnnotationsToSend(r, n);
        if (s.length === 0) return;
        const o = Me0(s, e), a = new Set(s.map((d)=>d.id));
        let l;
        const c = ()=>{
            if (l === void 0) return;
            const d = l.key;
            if (t.getQueueItems().some((h)=>Tql(h.richText) === d)) {
                l.queued = !0;
                return;
            }
            l.delivered = !0, this._retireEarlierDeliveredTurns(l);
        }, u = {
            turn: o,
            markSent: ()=>{
                const d = this.getQueue(r).items.filter((h)=>a.has(h.id));
                l = {
                    agentId: r,
                    agentIds: new Set([
                        r
                    ]),
                    key: Tql(o.richText),
                    items: d,
                    typed: e,
                    turn: o,
                    returned: !1,
                    delivered: !1,
                    queued: !1
                }, this._recordSentTurn(l), this.dispatch(r, {
                    type: "remove",
                    ids: d.map((h)=>h.id)
                }), n === void 0 && this.getCurrentPageAnnotations(r).length === 0 && this.exitDesignMode(r), i?.onSent();
            },
            markCancelled: ()=>{
                i?.onCancelled();
            },
            restore: ()=>{
                l !== void 0 && this._returnToQueue(l, r);
            },
            send: async (d)=>{
                u.markSent();
                try {
                    const h = await d();
                    return c(), h;
                } catch (h) {
                    throw u.restore(), h;
                }
            }
        };
        return u;
    }
    reportNoteNotSent(t) {
        this._onDidNotSendNote.fire(t);
    }
    holdsSentTurn(t) {
        return this._findSentTurn(t) !== void 0;
    }
    reclaimRejectedTurn(t) {
        if ($X(t.data) !== void 0) return !1;
        const e = this._findSentTurn(t.data.richText);
        return e === void 0 ? !1 : (t.setData({
            text: e.typed.text,
            richText: e.typed.richText ?? e.typed.text,
            context: De0(t.data.context, e.turn)
        }), t.composerId !== e.agentId && this._returnQueuedTurns(e.agentIds, t.composerId, e), this._returnToQueue(e, t.composerId), !0);
    }
    _rebindSentTurns(t, e) {
        for (const n of this._sentTurns.values())n.agentId === t && (n.agentId = e, n.agentIds.add(e));
    }
    _recordSentTurn(t) {
        if (t.key === void 0) return;
        this._sentTurns.set(t.key, t);
        const e = [
            ...this._sentTurns
        ].filter(([, n])=>n.agentId === t.agentId);
        for (const [n] of e.slice(0, -Blv))this._sentTurns.delete(n);
        for (const n of [
            ...this._sentTurns.keys()
        ].slice(0, -Ulv))this._sentTurns.delete(n);
    }
    _retireEarlierDeliveredTurns(t) {
        if (!(t.key === void 0 || this._sentTurns.get(t.key) !== t)) for (const [e, n] of this._sentTurns){
            if (n === t) return;
            n.agentId === t.agentId && n.delivered && this._sentTurns.delete(e);
        }
    }
    _findSentTurn(t) {
        if (this._sentTurns.size === 0) return;
        const e = Tql(t);
        return e === void 0 ? void 0 : this._sentTurns.get(e);
    }
    _returnQueuedTurns(t, e, n) {
        for (const i of [
            ...this._sentTurns.values()
        ].reverse()){
            if (i === n) return;
            t.has(i.agentId) && i.queued && !i.delivered && this._returnToQueue(i, e);
        }
    }
    _returnToQueue(t, e) {
        t.returned || t.key === void 0 || this._sentTurns.get(t.key) !== t || (t.returned = !0, this.dispatch(e, {
            type: "restore",
            items: t.items
        }));
    }
};

}
