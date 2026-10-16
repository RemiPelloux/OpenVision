import { Aw, Fy, HQ, Rw, j1 } from "./LYd.js";
import { gE } from "./index_23.js";
import { Doe } from "./index_33.js";
import { $$r, KEp, Sw1, XEp, YEp } from "./ipa.js";
import { E } from "./tslib.es6.js";
var ZEp, QEp, H$r, w6e, U0e, TPa;
export { H$r, QEp, TPa, U0e, ZEp, w6e };
var __wakaru_W$r_initialized = false;
export function W$r() {
if (__wakaru_W$r_initialized) return;
__wakaru_W$r_initialized = true;
"use strict";
E(), Fy(), gE(), Doe(), Aw(), HQ(), ZEp = "ui-rich-text-editor__search-result ui-6chtzl", QEp = "ui-rich-text-editor__search-result ui-rich-text-editor__search-result--current ui-13eqifn", H$r = /(?<!\\)\[([^\]]+)\]\(((?:[^()]|\([^)]*\))+)\)/g, w6e = {
    query: "",
    total: 0,
    currentIndex: -1,
    current: 0
}, U0e = new j1("richTextSearch"), TPa = Rw.create({
    name: "richTextSearch",
    addProseMirrorPlugins () {
        return [
            Sw1()
        ];
    },
    addCommands () {
        return {
            setRichTextSearchQuery: (t)=>({ tr: e, dispatch: n })=>{
                    const i = $$r(e.doc, t, 0);
                    return e.setMeta(U0e, {
                        nextState: i
                    }), KEp(e, i), n?.(e), !0;
                },
            selectNextRichTextSearchResult: ()=>({ state: t, tr: e, dispatch: n })=>{
                    const i = U0e.getState(t);
                    if (!YEp(i)) return !1;
                    const r = (i.currentIndex + 1) % i.matches.length;
                    return XEp(e, i, r, n);
                },
            selectPreviousRichTextSearchResult: ()=>({ state: t, tr: e, dispatch: n })=>{
                    const i = U0e.getState(t);
                    if (!YEp(i)) return !1;
                    const r = (i.currentIndex - 1 + i.matches.length) % i.matches.length;
                    return XEp(e, i, r, n);
                },
            clearRichTextSearchQuery: ()=>({ tr: t, dispatch: e })=>{
                    const n = $$r(t.doc, "", -1);
                    return t.setMeta(U0e, {
                        nextState: n
                    }), e?.(t), !0;
                }
        };
    }
});

}
