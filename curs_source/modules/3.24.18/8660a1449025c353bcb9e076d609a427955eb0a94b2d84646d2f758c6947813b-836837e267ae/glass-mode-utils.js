import { R6k } from "./Ycg.js";
import { HTe, aFl } from "./composerPromptMode.js";
import { mgs, pgs } from "./modeConfig.js";
import { E } from "./tslib.es6.js";
var k3f, x3n, W3i, P1s, lFl, w3f, cFl, A3n, M1s, C3f, uFl, dFl, D1s, N1s;
export { A3n, C3f, D1s, M1s, N1s, P1s, W3i, cFl, dFl, k3f, lFl, uFl, w3f, x3n };
var __wakaru_hFl_initialized = false;
export function hFl() {
if (__wakaru_hFl_initialized) return;
__wakaru_hFl_initialized = true;
"use strict";
E(), mgs(), aFl(), k3f = [
    "plan",
    "debug",
    "multitask",
    "chat"
], x3n = (t)=>({
        multitaskEnabled: !t
    }), W3i = (t, e)=>{
    const n = HTe(t, e);
    if (n !== void 0) return n === pgs.id ? pgs : R6k(n);
}, P1s = (t)=>k3f.flatMap((e)=>{
        const n = W3i(e, t);
        return n ? [
            n
        ] : [];
    }), lFl = (t)=>P1s(t).map((e)=>({
            id: e.id,
            label: e.label,
            icon: e.icon,
            color: e.color,
            placeholder: e.placeholder,
            description: e.description
        })), w3f = (t)=>{
    if (t.preferProvided) return t.placeholder;
    if (t.tight) {
        const e = t.modeLabel ?? t.compactPlaceholder;
        if (e !== void 0) return e;
    }
    return t.modePlaceholder ?? t.placeholder;
}, cFl = "ui-prompt-input-mode-chip", A3n = (t, e)=>{
    const n = t ?? void 0;
    return HTe(n) !== void 0 && HTe(n, e) === void 0;
}, M1s = (t, e)=>{
    const n = [
        void 0,
        ...P1s(e).map((o)=>o.id)
    ], i = HTe(t, e), r = n.indexOf(i);
    if (r === -1) return n.find((o)=>o !== void 0);
    const s = (r + 1) % n.length;
    return n[s];
}, C3f = (t)=>{
    const { composerUnifiedMode: e, pendingMode: n, isDraftAgent: i, multitaskEnabled: r } = t, s = HTe(e, {
        multitaskEnabled: r
    });
    return s || (e !== void 0 ? null : i ? n === void 0 ? null : HTe(n, {
        multitaskEnabled: r
    }) ?? null : null);
}, uFl = (t)=>t.hasExplicitModeOverride ? A3n(t.modeOverride, {
        multitaskEnabled: t.multitaskEnabled
    }) ? null : t.modeOverride ?? null : C3f({
        composerUnifiedMode: t.composerUnifiedMode,
        pendingMode: t.pendingMode,
        isDraftAgent: t.isDraftAgent,
        multitaskEnabled: t.multitaskEnabled
    }), dFl = (t)=>t === "plan" || t === "chat" || t === "debug" || t === "multitask", D1s = (t)=>dFl(t) ? t : void 0, N1s = (t)=>dFl(t) ? t : "agent";

}
