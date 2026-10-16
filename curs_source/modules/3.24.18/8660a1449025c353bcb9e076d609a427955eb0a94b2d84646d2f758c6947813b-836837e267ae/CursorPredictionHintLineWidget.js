import { Qe, st } from "./Iwo.js";
import { or, yi } from "./configuration.js";
import { pa, y$e } from "./constants_8.js";
import { Hn } from "./dom_2.js";
import { Al, ru } from "./keybinding.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ii, fr } from "./ze.js";
var wen;
export { wen };
var __wakaru_cVv_initialized = false;
export function cVv() {
if (__wakaru_cVv_initialized) return;
__wakaru_cVv_initialized = true;
"use strict";
E(), Qe(), Hn(), Dl(), or(), ru(), pa(), wen = class extends st {
    constructor(t, e, n, i, r){
        super(), this._editor = t, this._decorationId = e, this._configurationService = i, this._keybindingService = r, this._id = "cursorPredictionHintLineWidget." + Math.random().toString(36).substring(2, 15), this._domNode = Ii("span.cursor-prediction-hint-line-widget"), this._textDomNode = Ii("span", {}), this._tabKeyNode = Ii("span.tab-key", {}), fr(this._textDomNode, this._tabKeyNode), fr(this._textDomNode, Ii("span.jump-to-edit", {}, "to jump here")), this._register(this._keybindingService.onDidUpdateKeybindings(()=>{
            const o = this._keybindingService.lookupKeybinding(y$e)?.getLabel();
            this._tabKeybinding = o ?? void 0, this.updateTabKeyText();
        }));
        const s = this._keybindingService.lookupKeybinding(y$e)?.getLabel();
        this._tabKeybinding = s ?? void 0, this.updateTabKeyText(), fr(this._domNode, this._textDomNode), this._domNode.classList.add("fancy"), this._domNode.style.height = this._editor.getOption(68) - 2 + "px", this._textDomNode.style.fontSize = this._editor.getOption(54) - 2 + "px", this._register(this._configurationService.onDidChangeConfiguration((o)=>{
            o.affectsConfiguration("editor.lineHeight") && (this._domNode.style.height = this._editor.getOption(68) + "px"), o.affectsConfiguration("editor.fontSize") && (this._textDomNode.style.fontSize = this._editor.getOption(54) - 2 + "px");
        })), this.updateMarginLeft2(), this._editor.addContentWidget(this), this._register(this._editor.onDidScrollChange(()=>{
            this._editor.layoutContentWidget(this);
        })), this._register(this._editor.onDidLayoutChange(()=>{
            this._editor.layoutContentWidget(this);
        }));
    }
    highlight() {
        this._domNode.classList.add("highlight");
    }
    unhighlight() {
        this._domNode.classList.remove("highlight");
    }
    updateTabKeyText() {
        this._tabKeyNode.textContent = (this._tabKeybinding ?? "tab").toUpperCase();
    }
    dispose() {
        super.dispose(), this._editor.removeContentWidget(this), this._domNode.remove();
    }
    hide() {
        this._editor.removeContentWidget(this);
    }
    updateMarginLeft2() {
        const t = this._editor.getModel();
        if (t === null) return;
        const e = t.getDecorationRange(this._decorationId);
        if (e === null) return;
        const n = t.getLineContent(e.startLineNumber);
        n !== null && (this._textDomNode.style.marginLeft = n.length === 0 ? "2px" : "0.5rem");
    }
    show() {
        this._editor.addContentWidget(this), this._editor.layoutContentWidget(this);
    }
    getId() {
        return this._id;
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        const t = this._editor.getModel();
        if (t === null) return null;
        const e = t.getDecorationRange(this._decorationId);
        if (e === null) return null;
        const n = t.getLineContent(e.startLineNumber), i = Math.max(n.length + 2, e.endColumn);
        return {
            position: {
                lineNumber: e.startLineNumber,
                column: i
            },
            preference: [
                0
            ]
        };
    }
    updateMarginLeft(t) {}
}, wen._posPref = [
    0
], wen = Re([
    F(2, Ml),
    F(3, yi),
    F(4, Al)
], wen);

}
