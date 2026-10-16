import { cge } from "./HVr.js";
import { LLo, PLo, hHh } from "./glassFocusedConversation.js";
import { x } from "./tslib.es6.js";
import { lo, on } from "./window.js";
function uHh(e) {
    return e?.closest(hHh)?.getAttribute(PLo)?.trim() || void 0;
}
function Qrr(e, t) {
    return `${e}::${t}`;
}
function o__(e) {
    let t;
    for (const n of e ?? [])t = n.target;
    return t;
}
function Jrr(e, t) {
    const n = t?.voiceOwnerId;
    if (n) return {
        kind: e,
        supportsSubmitKeywords: e !== "edit",
        voiceOwnerId: n
    };
}
function pHh(e) {
    return Jrr("edit", e?.edit?.isFocused() ? e.edit : void 0) ?? Jrr("main", e?.main?.isFocused() ? e.main : void 0) ?? Jrr("main", e?.main) ?? Jrr("edit", e?.edit);
}
var mHh, v9n;
export { Jrr, Qrr, mHh, o__, pHh, uHh, v9n };
var __wakaru_gHh_initialized = false;
export function gHh() {
if (__wakaru_gHh_initialized) return;
__wakaru_gHh_initialized = true;
"use strict";
x(), lo(), LLo(), mHh = class {
    constructor(){
        this._entriesByKey = new Map, this._nextOrder = 0;
    }
    register(e, t, n, i = on) {
        const r = cge(i), s = Qrr(e, r), o = this._entriesByKey.get(s), a = o?.order ?? this._nextOrder++, c = {
            target: n
        }, l = {
            ...o?.targets ?? {},
            [t]: n
        }, u = {
            ...o?.registrations ?? {},
            [t]: [
                ...o?.registrations[t] ?? [],
                c
            ]
        };
        return this._entriesByKey.set(s, {
            order: a,
            windowId: r,
            targets: l,
            registrations: u
        }), ()=>{
            const h = this._entriesByKey.get(s);
            if (!h) return;
            const p = h.registrations[t];
            if (!p?.includes(c)) return;
            const g = p.filter((R)=>R !== c), { [t]: f, ...v } = h.registrations, { [t]: b, ...y } = h.targets, T = o__(g), E = g.length === 0 ? v : {
                ...v,
                [t]: g
            }, A = T === void 0 ? y : {
                ...y,
                [t]: T
            };
            if (Object.keys(E).length === 0) {
                this._entriesByKey.delete(s);
                return;
            }
            this._entriesByKey.set(s, {
                order: h.order,
                windowId: h.windowId,
                targets: A,
                registrations: E
            });
        };
    }
    getFocusedPromptTarget(e) {
        const t = this._resolveTargets(e);
        if (t) {
            if (t.edit?.isFocused()) return t.edit;
            if (t.main?.isFocused()) return t.main;
        }
    }
    getDefaultPromptTarget(e) {
        const t = this._resolveTargets(e);
        if (t) return t.main ?? t.edit;
    }
    shouldCancelLeftoverEditOnFollowUpFocus(e, t, n = on) {
        const i = this.getTargetForWindow(e, "main", n), r = this.getTargetForWindow(e, "edit", n), s = r?.agentId ?? i?.agentId, o = uHh(t);
        if (o !== void 0 && s !== void 0 && o !== s || i?.isFocused() !== !0) return !1;
        const a = cge(n);
        for (const c of this._entriesByKey.values()){
            if (c.windowId !== a) continue;
            const l = c.targets.edit, u = c.targets.main;
            if (l?.isFocused() && l !== r || u?.isFocused() && u !== i) return !1;
        }
        return !0;
    }
    getFocusedPromptTargetAcrossComposers() {
        return this._getFocusedPromptTargetFromEntries(this._entriesByKey.values());
    }
    getFocusedPromptTargetInWindow(e) {
        const t = cge(e);
        return this._getFocusedPromptTargetFromEntries([
            ...this._entriesByKey.values()
        ].filter((n)=>n.windowId === t));
    }
    _getFocusedPromptTargetFromEntries(e) {
        for (const t of e){
            if (t.targets.edit?.isFocused()) return t.targets.edit;
            if (t.targets.main?.isFocused()) return t.targets.main;
            if (t.targets.questionnaire?.isFocused()) return t.targets.main ?? t.targets.edit;
        }
    }
    getPromptTargetForWindow(e, t = on) {
        const n = Qrr(e, cge(t)), i = this._entriesByKey.get(n)?.targets;
        return i?.main ?? i?.edit;
    }
    getTargetForWindow(e, t, n = on) {
        const i = Qrr(e, cge(n));
        return this._entriesByKey.get(i)?.targets[t];
    }
    resolveVoicePromptTarget(e, t = on) {
        const n = Qrr(e, cge(t)), i = this._entriesByKey.get(n)?.targets;
        return pHh(i) ?? pHh(this._resolveTargets(e));
    }
    _resolveTargets(e) {
        const t = `${e}::`;
        let n;
        for (const [i, r] of this._entriesByKey)if (i.startsWith(t) && !(!r.targets.main && !r.targets.edit)) {
            if (r.targets.edit?.isFocused() || r.targets.main?.isFocused()) return r.targets;
            (!n || r.order < n.order) && (n = r);
        }
        return n?.targets;
    }
}, v9n = new mHh;

}
