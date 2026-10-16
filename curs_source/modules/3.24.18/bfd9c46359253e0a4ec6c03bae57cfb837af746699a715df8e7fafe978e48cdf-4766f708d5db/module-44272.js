"use strict";
function n(e, t) {
    void 0 !== e && t.length > 0 && e.push(...t);
}
require.d(exports, {
    B1: ()=>s,
    Bv: ()=>n,
    nB: ()=>d,
    JJ: ()=>c,
    vV: ()=>l,
    Rp: ()=>u
});
class s extends Error {
    constructor(e){
        super(`Hook additional_context for ${e.hookEventName} is ${e.actualLength} chars (max ${e.maxLength}).`), this.name = "HookAdditionalContextTooLargeError", this.hookEventName = e.hookEventName, this.actualLength = e.actualLength, this.maxLength = e.maxLength;
    }
}
var o = require("./module-21180.js");
const i = 1e4;
var a = require("./module-91022.js");
Object.fromEntries(Array.from(a.Qu).map((e)=>{
    if (!function(e) {
        return e === a._E.sessionStart || e === a._E.beforeSubmitPrompt || e === a._E.preToolUse || e === a._E.postToolUse || e === a._E.postToolUseFailure;
    }(e)) throw new Error(`HOOK_STEPS_SUPPORTING_ADDITIONAL_CONTEXT lists ${e} but HookStepAdditionalContextEventName does not include it. Extend the Extract<> union in spec.ts.`);
    return [
        e,
        {
            hookEventName: e
        }
    ];
}));
function c({ hookEventName: e, additionalContext: t }) {
    const r = function(e) {
        const t = e?.trim();
        return void 0 !== t && t.length > 0 ? t : void 0;
    }(t);
    if (void 0 === r) return [];
    if (r.length > i) throw new s({
        hookEventName: e,
        actualLength: r.length,
        maxLength: i
    });
    return [
        new o.C({
            hookEventName: e,
            content: r
        })
    ];
}
function l(e, t) {
    const r = e?.trim();
    if (!r) return;
    if (r.length > i) return void t?.(r.length, i);
    return `<system_reminder>\n${(0, a.Mw)(r)}\n</system_reminder>`;
}
function u(e) {
    const t = e.trim();
    if (0 !== t.length) return `<system_reminder>\n${(0, a.Mw)(t)}\n</system_reminder>`;
}
function d(e, t, r) {
    const n = (function(e) {
        return e.map((e)=>e.content.trim()).filter((e)=>e.length > 0);
    })(r).flatMap((e)=>{
        const t = u(e);
        return void 0 === t ? [] : [
            t
        ];
    });
    for (const r of n)e.push(r), t.push({
        type: "text",
        text: r
    });
}
