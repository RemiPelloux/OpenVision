import { Gr } from "./Ycg.js";
import { Uy } from "./ipa.js";
import { LM } from "./selectedContextData.js";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { OFk, eJg } from "./useContextSideEffects.js";
import { pi, vt } from "./ze.js";
var L0l;
export { L0l };
var __wakaru_tJg_initialized = false;
export function tJg() {
if (__wakaru_tJg_initialized) return;
__wakaru_tJg_initialized = true;
"use strict";
E(), pi(), OFk(), LM(), vo(), L0l = (t, e, n)=>{
    const i = Gr(), { composerDataService: r, composerContextService: s } = i, o = vt(()=>{
        if (n) return r.getComposerBubble(t(), n())?.context ?? Uy();
        const d = t().data;
        if (!d) throw new Error("[composer] No current composer available");
        return d.context ?? Uy();
    });
    return eJg((d, h, p, g)=>{
        n ? s.addBubbleContext({
            composerHandle: t(),
            bubbleId: n(),
            contextType: d,
            value: h,
            uuid: p,
            addToUndoRedo: g
        }) : s.addContext({
            composerHandle: t(),
            contextType: d,
            value: h,
            uuid: p,
            addToUndoRedo: g
        });
    }, (d, h, p)=>{
        n ? s.removeBubbleContext({
            composerHandle: t(),
            bubbleId: n(),
            contextType: d,
            index: h,
            addToUndoRedo: p
        }) : s.removeContext({
            composerHandle: t(),
            contextType: d,
            index: h,
            addToUndoRedo: p
        });
    }, (d)=>{
        n ? s.removeBubbleMention(t(), n(), d) : s.removeMention(t(), d);
    }, e, o, (d, h, p)=>{
        n ? s.addAllListContext({
            composerHandle: t(),
            bubbleId: n(),
            contextType: d,
            values: h,
            addToUndoRedo: p
        }) : s.addAllListContext({
            composerHandle: t(),
            contextType: d,
            values: h,
            addToUndoRedo: p
        });
    }, t);
};

}
