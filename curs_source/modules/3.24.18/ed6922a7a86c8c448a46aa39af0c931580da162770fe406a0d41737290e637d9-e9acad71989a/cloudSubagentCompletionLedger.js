import { HM, cb } from "./index_191.js";
import { ag, oc } from "./map.js";
import { x } from "./tslib.es6.js";
var GJi, QAh, JAh, eRh, tRh;
export { GJi, JAh, QAh, eRh, tRh };
var __wakaru_Qn__initialized = false;
export function Qn_() {
if (__wakaru_Qn__initialized) return;
__wakaru_Qn__initialized = true;
"use strict";
x(), HM(), oc(), GJi = "cloudAgentRepository.subagentDeliveredCompletions", QAh = 4096, JAh = cb.enum([
    "user_driven_interactive_child",
    "notification_driven_interactive_child"
]), eRh = cb.tuple([
    cb.string().min(1),
    cb.object({
        parentToolCallId: cb.string().trim().min(1).optional(),
        turns: cb.number().finite().optional(),
        delivered: cb.boolean().optional(),
        pendingNotificationContexts: cb.array(cb.object({
            followupId: cb.string().trim().min(1),
            context: JAh
        })).optional()
    })
]), tRh = class {
    constructor(e){
        this._options = e, this._inProgressObserved = new Set;
    }
    _getEntries() {
        return this._entries ??= this._loadEntries(), this._entries;
    }
    _loadEntries() {
        const e = new ag(this._options.maxEntries ?? QAh);
        try {
            const t = this._options.loadRaw();
            if (t === void 0) return e;
            const n = JSON.parse(t);
            if (!Array.isArray(n)) return e;
            for (const i of n){
                const r = eRh.safeParse(i);
                r.success && e.set(r.data[0], r.data[1]);
            }
        } catch  {}
        return e;
    }
    _saveEntries() {
        const e = this._entries;
        if (e !== void 0) try {
            this._options.saveRaw(JSON.stringify(e.toJSON()));
        } catch (t) {
            this._options.onSaveError?.(t);
        }
    }
    recordInProgressObserved(e) {
        this._inProgressObserved.add(e);
    }
    forgetInProgressObservation(e) {
        this._inProgressObserved.delete(e);
    }
    reset() {
        this._entries = void 0, this._inProgressObserved.clear();
    }
    recordDelivery(e, t) {
        const n = this._getEntries(), i = n.peek(e), r = t.parentToolCallId?.trim() || i?.parentToolCallId, s = t.observedTurns, o = s !== void 0 && (i?.turns === void 0 || s > i.turns) ? s : i?.turns;
        n.set(e, {
            ...r ? {
                parentToolCallId: r
            } : {},
            ...o !== void 0 ? {
                turns: o
            } : {},
            delivered: !0,
            pendingNotificationContexts: i?.pendingNotificationContexts
        }), this._inProgressObserved.delete(e), this._saveEntries();
    }
    recordPendingNotificationContext(e, t, n) {
        const i = t.trim();
        if (i.length === 0) return;
        const r = this._getEntries(), s = r.peek(e);
        r.set(e, {
            ...s ?? {},
            pendingNotificationContexts: [
                ...s?.pendingNotificationContexts ?? [],
                {
                    followupId: i,
                    context: n
                }
            ]
        }), this._saveEntries();
    }
    takePendingNotificationContext(e, t) {
        const n = t?.trim();
        if (n === void 0 || n.length === 0) return;
        const i = this._getEntries(), r = i.peek(e), s = r?.pendingNotificationContexts, o = s?.findIndex((l)=>l.followupId === n);
        if (o === void 0 || o < 0 || s === void 0) return;
        const a = [
            ...s
        ], [c] = a.splice(o, 1);
        return i.set(e, {
            ...r,
            pendingNotificationContexts: a
        }), this._saveEntries(), c?.context;
    }
    getVerdict(e, t) {
        if (this._inProgressObserved.has(e)) return "new";
        const n = this._getEntries().peek(e);
        if (n === void 0 || n.delivered !== !0 && n.parentToolCallId === void 0 && n.turns === void 0 && n.pendingNotificationContexts !== void 0) return "unknown";
        const r = t.observedTurns;
        if (r !== void 0 && n.turns !== void 0 && r > n.turns) return "new";
        const s = t.parentToolCallId?.trim();
        return s !== void 0 && s.length > 0 && n.parentToolCallId !== void 0 ? s === n.parentToolCallId ? "delivered" : "new" : "delivered";
    }
};

}
