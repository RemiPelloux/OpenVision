import { He, Se, si } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { WK } from "./domFontInfo.js";
import { kl, pc } from "./language.js";
import { G7 } from "./markdownRenderer.js";
import { $T, Sy } from "./modesRegistry.js";
import { eo, ko } from "./opener.js";
import { $Ft, Iwe, Mwe, c2, g_i } from "./qIc.js";
import { BSg } from "./renderedMarkdown.css";
import { Bze } from "./textToHtmlTokenizer.js";
import { Awe } from "./trustedTypes.js";
import { x } from "./tslib.es6.js";
var u2;
export { u2 };
var __wakaru_g5_initialized = false;
export function g5() {
if (__wakaru_g5_initialized) return;
__wakaru_g5_initialized = true;
"use strict";
x(), G7(), Awe(), si(), Se(), ko(), kl(), $T(), Bze(), WK(), BSg(), u2 = class {
    constructor(e, t, n){
        this._options = e, this._languageService = t, this._openerService = n;
    }
    render(e, t, n) {
        if (!e) return {
            element: document.createElement("span"),
            dispose: ()=>{}
        };
        const i = new He, r = i.add(Mwe(e, {
            ...this._getRenderOptions(e, i),
            ...t
        }, n));
        return r.element.classList.add("rendered-markdown"), {
            element: r.element,
            dispose: ()=>i.dispose()
        };
    }
    _getRenderOptions(e, t) {
        return {
            codeBlockRenderer: async (n, i)=>{
                let r;
                n ? r = this._languageService.getLanguageIdByLanguageName(n) : this._options.editor && (r = this._options.editor.getModel()?.getLanguageId()), r || (r = Sy);
                const s = await g_i(this._languageService, i, r), o = document.createElement("span");
                if (o.innerHTML = u2._ttpTokenizer?.createHTML(s) ?? s, this._options.editor) {
                    const a = this._options.editor.getOption(52);
                    c2(o, a);
                } else this._options.codeBlockFontFamily && (o.style.fontFamily = this._options.codeBlockFontFamily);
                return this._options.codeBlockFontSize !== void 0 && (o.style.fontSize = this._options.codeBlockFontSize), o;
            },
            actionHandler: {
                callback: (n)=>this.openMarkdownLink(n, e),
                disposables: t
            }
        };
    }
    async openMarkdownLink(e, t) {
        await $Ft(this._openerService, e, t.isTrusted);
    }
}, u2._ttpTokenizer = Iwe("tokenizeToString", {
    createHTML (e) {
        return e;
    }
}), u2 = ie([
    C(1, pc),
    C(2, eo)
], u2);

}
