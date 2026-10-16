import { $tv, Euu, Tuu, UFi, xuu } from "./f0s.js";
import { M0 } from "./index_18.js";
import { iY } from "./index_28.js";
import { AW, A_, bS, cy, zS } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Iuu, Auu, $Fi, BZe, Vue, Ruu;
export { $Fi, Auu, BZe, Iuu, Ruu, Vue };
var __wakaru_FFs_initialized = false;
export function FFs() {
if (__wakaru_FFs_initialized) return;
__wakaru_FFs_initialized = true;
"use strict";
x(), A_(), M0(), iY(), zS(), AW(), Iuu = "ui-rich-text-editor__search-result ui-6chtzl", Auu = "ui-rich-text-editor__search-result ui-rich-text-editor__search-result--current ui-13eqifn", $Fi = /(?<!\\)\[([^\]]+)\]\(((?:[^()]|\([^)]*\))+)\)/g, BZe = {
    query: "",
    total: 0,
    currentIndex: -1,
    current: 0
}, Vue = new cy("richTextSearch"), Ruu = bS.create({
    name: "richTextSearch",
    addProseMirrorPlugins () {
        return [
            $tv()
        ];
    },
    addCommands () {
        return {
            setRichTextSearchQuery: (e)=>({ tr: t, dispatch: n })=>{
                    const i = UFi(t.doc, e, 0);
                    return t.setMeta(Vue, {
                        nextState: i
                    }), Tuu(t, i), n?.(t), !0;
                },
            selectNextRichTextSearchResult: ()=>({ state: e, tr: t, dispatch: n })=>{
                    const i = Vue.getState(e);
                    if (!Euu(i)) return !1;
                    const r = (i.currentIndex + 1) % i.matches.length;
                    return xuu(t, i, r, n);
                },
            selectPreviousRichTextSearchResult: ()=>({ state: e, tr: t, dispatch: n })=>{
                    const i = Vue.getState(e);
                    if (!Euu(i)) return !1;
                    const r = (i.currentIndex - 1 + i.matches.length) % i.matches.length;
                    return xuu(t, i, r, n);
                },
            clearRichTextSearchQuery: ()=>({ tr: e, dispatch: t })=>{
                    const n = UFi(e.doc, "", -1);
                    return e.setMeta(Vue, {
                        nextState: n
                    }), t?.(e), !0;
                }
        };
    }
});

}
