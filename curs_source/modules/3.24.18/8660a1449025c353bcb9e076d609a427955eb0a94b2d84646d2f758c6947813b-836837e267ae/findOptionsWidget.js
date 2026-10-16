import { Yu, qn } from "./async.js";
import { Ap } from "./colorRegistry.js";
import { Hn, Pr } from "./dom_2.js";
import { EKd, Gzo, Hzo, Wzo } from "./findInputToggles.js";
import { OC, Zwt } from "./findModel.js";
import { $I1 } from "./findOptionsWidget.css";
import { $gn, Hgn, q9t } from "./inputColors.js";
import { E } from "./tslib.es6.js";
import { CY, k4 } from "./widget.js";
import { Xa, fHe, li, sR } from "./ze.js";
var a3a, zPp;
export { a3a, zPp };
var __wakaru_HI1_initialized = false;
export function HI1() {
if (__wakaru_HI1_initialized) return;
__wakaru_HI1_initialized = true;
"use strict";
E(), Hn(), $I1(), EKd(), CY(), qn(), Zwt(), Ap(), sR(), a3a = class M2b extends k4 {
    constructor(e, n, i){
        super(), this._hideSoon = this._register(new Yu(()=>this._hide(), 2e3)), this._isVisible = !1, this._editor = e, this._state = n, this._keybindingService = i, this._domNode = document.createElement("div"), this._domNode.className = "findOptionsWidget", this._domNode.style.display = "none", this._domNode.style.top = "10px", this._domNode.style.zIndex = "12", this._domNode.setAttribute("role", "presentation"), this._domNode.setAttribute("aria-hidden", "true");
        const r = {
            inputActiveOptionBorder: Xa($gn),
            inputActiveOptionForeground: Xa(Hgn),
            inputActiveOptionBackground: Xa(q9t)
        }, s = this._register(fHe());
        this.caseSensitive = this._register(new Hzo({
            appendTitle: this._keybindingLabelFor(OC.ToggleCaseSensitiveCommand),
            isChecked: this._state.matchCase,
            hoverDelegate: s,
            ...r
        })), this._domNode.appendChild(this.caseSensitive.domNode), this._register(this.caseSensitive.onChange(()=>{
            this._state.change({
                matchCase: this.caseSensitive.checked
            }, !1);
        })), this.wholeWords = this._register(new Wzo({
            appendTitle: this._keybindingLabelFor(OC.ToggleWholeWordCommand),
            isChecked: this._state.wholeWord,
            hoverDelegate: s,
            ...r
        })), this._domNode.appendChild(this.wholeWords.domNode), this._register(this.wholeWords.onChange(()=>{
            this._state.change({
                wholeWord: this.wholeWords.checked
            }, !1);
        })), this.regex = this._register(new Gzo({
            appendTitle: this._keybindingLabelFor(OC.ToggleRegexCommand),
            isChecked: this._state.isRegex,
            hoverDelegate: s,
            ...r
        })), this._domNode.appendChild(this.regex.domNode), this._register(this.regex.onChange(()=>{
            this._state.change({
                isRegex: this.regex.checked
            }, !1);
        })), this._editor.addOverlayWidget(this), this._register(this._state.onFindReplaceStateChange((o)=>{
            let a = !1;
            o.isRegex && (this.regex.checked = this._state.isRegex, a = !0), o.wholeWord && (this.wholeWords.checked = this._state.wholeWord, a = !0), o.matchCase && (this.caseSensitive.checked = this._state.matchCase, a = !0), !this._state.isRevealed && a && this._revealTemporarily();
        })), this._register(li(this._domNode, Pr.MOUSE_LEAVE, (o)=>this._onMouseLeave())), this._register(li(this._domNode, "mouseover", (o)=>this._onMouseOver()));
    }
    _keybindingLabelFor(e) {
        const n = this._keybindingService.lookupKeybinding(e);
        return n ? ` (${n.getLabel()})` : "";
    }
    dispose() {
        this._editor.removeOverlayWidget(this), super.dispose();
    }
    getId() {
        return M2b.ID;
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        return {
            preference: 0
        };
    }
    highlightFindOptions() {
        this._revealTemporarily();
    }
    _revealTemporarily() {
        this._show(), this._hideSoon.schedule();
    }
    _onMouseLeave() {
        this._hideSoon.schedule();
    }
    _onMouseOver() {
        this._hideSoon.cancel();
    }
    _show() {
        this._isVisible || (this._isVisible = !0, this._domNode.style.display = "block");
    }
    _hide() {
        this._isVisible && (this._isVisible = !1, this._domNode.style.display = "none");
    }
}, a3a.ID = "editor.contrib.findOptionsWidget", zPp = a3a;

}
