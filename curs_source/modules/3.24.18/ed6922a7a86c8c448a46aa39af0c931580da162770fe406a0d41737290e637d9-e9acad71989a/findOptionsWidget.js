import { ac, bn } from "./async.js";
import { tc } from "./colorRegistry.js";
import { Fn, en } from "./dom_2.js";
import { LHc, frs, grs, mrs } from "./findInputToggles.js";
import { n4e, uw } from "./findModel.js";
import { vcv } from "./findOptionsWidget.css";
import { apt, cpt, hze } from "./inputColors.js";
import { $f, Is, VV, Xt } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { RO, pR } from "./widget.js";
var X$s, twu;
export { X$s, twu };
var __wakaru__cv_initialized = false;
export function _cv() {
if (__wakaru__cv_initialized) return;
__wakaru__cv_initialized = true;
"use strict";
x(), en(), vcv(), LHc(), RO(), bn(), n4e(), tc(), $f(), X$s = class Xwm extends pR {
    constructor(t, n, i){
        super(), this._hideSoon = this._register(new ac(()=>this._hide(), 2e3)), this._isVisible = !1, this._editor = t, this._state = n, this._keybindingService = i, this._domNode = document.createElement("div"), this._domNode.className = "findOptionsWidget", this._domNode.style.display = "none", this._domNode.style.top = "10px", this._domNode.style.zIndex = "12", this._domNode.setAttribute("role", "presentation"), this._domNode.setAttribute("aria-hidden", "true");
        const r = {
            inputActiveOptionBorder: Is(apt),
            inputActiveOptionForeground: Is(cpt),
            inputActiveOptionBackground: Is(hze)
        }, s = this._register(VV());
        this.caseSensitive = this._register(new mrs({
            appendTitle: this._keybindingLabelFor(uw.ToggleCaseSensitiveCommand),
            isChecked: this._state.matchCase,
            hoverDelegate: s,
            ...r
        })), this._domNode.appendChild(this.caseSensitive.domNode), this._register(this.caseSensitive.onChange(()=>{
            this._state.change({
                matchCase: this.caseSensitive.checked
            }, !1);
        })), this.wholeWords = this._register(new grs({
            appendTitle: this._keybindingLabelFor(uw.ToggleWholeWordCommand),
            isChecked: this._state.wholeWord,
            hoverDelegate: s,
            ...r
        })), this._domNode.appendChild(this.wholeWords.domNode), this._register(this.wholeWords.onChange(()=>{
            this._state.change({
                wholeWord: this.wholeWords.checked
            }, !1);
        })), this.regex = this._register(new frs({
            appendTitle: this._keybindingLabelFor(uw.ToggleRegexCommand),
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
        })), this._register(Xt(this._domNode, Fn.MOUSE_LEAVE, (o)=>this._onMouseLeave())), this._register(Xt(this._domNode, "mouseover", (o)=>this._onMouseOver()));
    }
    _keybindingLabelFor(t) {
        const n = this._keybindingService.lookupKeybinding(t);
        return n ? ` (${n.getLabel()})` : "";
    }
    dispose() {
        this._editor.removeOverlayWidget(this), super.dispose();
    }
    getId() {
        return Xwm.ID;
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
}, X$s.ID = "editor.contrib.findOptionsWidget", twu = X$s;

}
