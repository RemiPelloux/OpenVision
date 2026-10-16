import { Ei, Nt, Qe } from "./Iwo.js";
import { she } from "./domFontInfo.js";
import { Kp, Ph } from "./language.js";
import { kBt } from "./markdownRenderer.js";
import { iR, y4 } from "./modesRegistry.js";
import { kc, qc } from "./opener.js";
import { BLy } from "./renderedMarkdown.css";
import { rUd } from "./textToHtmlTokenizer.js";
import { Ztt } from "./trustedTypes.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { HPy, Xtt, oB, qsi, uEr } from "./ze.js";
var AY;
export { AY };
var __wakaru_Coe_initialized = false;
export function Coe() {
if (__wakaru_Coe_initialized) return;
__wakaru_Coe_initialized = true;
"use strict";
E(), kBt(), Ztt(), Ei(), Qe(), qc(), Kp(), y4(), rUd(), she(), BLy(), AY = class {
    constructor(t, e, n){
        this._options = t, this._languageService = e, this._openerService = n;
    }
    render(t, e, n) {
        if (!t) return {
            element: document.createElement("span"),
            dispose: ()=>{}
        };
        const i = new Nt, r = i.add(qsi(t, {
            ...this._getRenderOptions(t, i),
            ...e
        }, n));
        return r.element.classList.add("rendered-markdown"), {
            element: r.element,
            dispose: ()=>i.dispose()
        };
    }
    _getRenderOptions(t, e) {
        return {
            codeBlockRenderer: async (n, i)=>{
                let r;
                n ? r = this._languageService.getLanguageIdByLanguageName(n) : this._options.editor && (r = this._options.editor.getModel()?.getLanguageId()), r || (r = iR);
                const s = await HPy(this._languageService, i, r), o = document.createElement("span");
                if (o.innerHTML = AY._ttpTokenizer?.createHTML(s) ?? s, this._options.editor) {
                    const a = this._options.editor.getOption(52);
                    oB(o, a);
                } else this._options.codeBlockFontFamily && (o.style.fontFamily = this._options.codeBlockFontFamily);
                return this._options.codeBlockFontSize !== void 0 && (o.style.fontSize = this._options.codeBlockFontSize), o;
            },
            actionHandler: {
                callback: (n)=>this.openMarkdownLink(n, t),
                disposables: e
            }
        };
    }
    async openMarkdownLink(t, e) {
        await uEr(this._openerService, t, e.isTrusted);
    }
}, AY._ttpTokenizer = Xtt("tokenizeToString", {
    createHTML (t) {
        return t;
    }
}), AY = Re([
    F(1, Ph),
    F(2, kc)
], AY);

}
