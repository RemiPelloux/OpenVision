import { D, Gt, tt } from "./Iwo.js";
import { gs, yt } from "./codicons.js";
import { Dd, Hn } from "./dom_2.js";
import { RKd } from "./findInput.css";
import { BEr, fnt } from "./inputBox.js";
import { Bt } from "./nls.js";
import { M5e, che } from "./toggle.js";
import { E } from "./tslib.es6.js";
import { CY, k4 } from "./widget.js";
import { c2, sR } from "./ze.js";
var VPp, KPp, YPp, u3a;
export { KPp, VPp, YPp, u3a };
var __wakaru_GI1_initialized = false;
export function GI1() {
if (__wakaru_GI1_initialized) return;
__wakaru_GI1_initialized = true;
"use strict";
E(), Hn(), M5e(), fnt(), CY(), gs(), Gt(), RKd(), Bt(), sR(), VPp = D(13, null), KPp = D(14, null), YPp = class extends che {
    constructor(t){
        super({
            icon: yt.preserveCase,
            title: KPp + t.appendTitle,
            isChecked: t.isChecked,
            hoverDelegate: t.hoverDelegate ?? c2("element"),
            inputActiveOptionBorder: t.inputActiveOptionBorder,
            inputActiveOptionForeground: t.inputActiveOptionForeground,
            inputActiveOptionBackground: t.inputActiveOptionBackground
        });
    }
}, u3a = class extends k4 {
    constructor(t, e, n, i){
        super(), this._showOptionButtons = n, this.fixFocusOnOptionClickEnabled = !0, this.cachedOptionsWidth = 0, this._onDidOptionChange = this._register(new tt), this.onDidOptionChange = this._onDidOptionChange.event, this._onKeyDown = this._register(new tt), this.onKeyDown = this._onKeyDown.event, this._onMouseDown = this._register(new tt), this.onMouseDown = this._onMouseDown.event, this._onInput = this._register(new tt), this.onInput = this._onInput.event, this._onKeyUp = this._register(new tt), this.onKeyUp = this._onKeyUp.event, this._onPreserveCaseKeyDown = this._register(new tt), this.onPreserveCaseKeyDown = this._onPreserveCaseKeyDown.event, this._lastHighlightFindOptions = 0, this.contextViewProvider = e, this.placeholder = i.placeholder || "", this.validation = i.validation, this.label = i.label || VPp;
        const r = i.appendPreserveCaseLabel || "", s = i.history || new Set([]), o = !!i.flexibleHeight, a = !!i.flexibleWidth, l = i.flexibleMaxHeight;
        this.domNode = document.createElement("div"), this.domNode.classList.add("monaco-findInput"), this.inputBox = this._register(new BEr(this.domNode, this.contextViewProvider, {
            ariaLabel: this.label || "",
            placeholder: this.placeholder || "",
            validationOptions: {
                validation: this.validation
            },
            history: s,
            addCurrentToHistoryOnNavigate: i.addCurrentToHistoryOnNavigate,
            showHistoryHint: i.showHistoryHint,
            flexibleHeight: o,
            flexibleWidth: a,
            flexibleMaxHeight: l,
            inputBoxStyles: i.inputBoxStyles
        })), this.preserveCase = this._register(new YPp({
            appendTitle: r,
            isChecked: !1,
            ...i.toggleStyles
        })), this._register(this.preserveCase.onChange((d)=>{
            this._onDidOptionChange.fire(d), !d && this.fixFocusOnOptionClickEnabled && this.inputBox.focus(), this.validate();
        })), this._register(this.preserveCase.onKeyDown((d)=>{
            this._onPreserveCaseKeyDown.fire(d);
        })), this._showOptionButtons ? this.cachedOptionsWidth = this.preserveCase.width() : this.cachedOptionsWidth = 0;
        const c = [
            this.preserveCase.domNode
        ];
        this.onkeydown(this.domNode, (d)=>{
            if (d.equals(15) || d.equals(17) || d.equals(9)) {
                const h = c.indexOf(this.domNode.ownerDocument.activeElement);
                if (h >= 0) {
                    let p = -1;
                    d.equals(17) ? p = (h + 1) % c.length : d.equals(15) && (h === 0 ? p = c.length - 1 : p = h - 1), d.equals(9) ? (c[h].blur(), this.inputBox.focus()) : p >= 0 && c[p].focus(), Dd.stop(d, !0);
                }
            }
        });
        const u = document.createElement("div");
        u.className = "controls", u.style.display = this._showOptionButtons ? "block" : "none", u.appendChild(this.preserveCase.domNode), this.domNode.appendChild(u), t?.appendChild(this.domNode), this.onkeydown(this.inputBox.inputElement, (d)=>this._onKeyDown.fire(d)), this.onkeyup(this.inputBox.inputElement, (d)=>this._onKeyUp.fire(d)), this.oninput(this.inputBox.inputElement, (d)=>this._onInput.fire()), this.onmousedown(this.inputBox.inputElement, (d)=>this._onMouseDown.fire(d));
    }
    enable() {
        this.domNode.classList.remove("disabled"), this.inputBox.enable(), this.preserveCase.enable();
    }
    disable() {
        this.domNode.classList.add("disabled"), this.inputBox.disable(), this.preserveCase.disable();
    }
    setFocusInputOnOptionClick(t) {
        this.fixFocusOnOptionClickEnabled = t;
    }
    setEnabled(t) {
        t ? this.enable() : this.disable();
    }
    clear() {
        this.clearValidation(), this.setValue(""), this.focus();
    }
    getValue() {
        return this.inputBox.value;
    }
    setValue(t) {
        this.inputBox.value !== t && (this.inputBox.value = t);
    }
    onSearchSubmit() {
        this.inputBox.addToHistory();
    }
    applyStyles() {}
    select() {
        this.inputBox.select();
    }
    focus() {
        this.inputBox.focus();
    }
    getPreserveCase() {
        return this.preserveCase.checked;
    }
    setPreserveCase(t) {
        this.preserveCase.checked = t;
    }
    focusOnPreserve() {
        this.preserveCase.focus();
    }
    highlightFindOptions() {
        this.domNode.classList.remove("highlight-" + this._lastHighlightFindOptions), this._lastHighlightFindOptions = 1 - this._lastHighlightFindOptions, this.domNode.classList.add("highlight-" + this._lastHighlightFindOptions);
    }
    validate() {
        this.inputBox?.validate();
    }
    showMessage(t) {
        this.inputBox?.showMessage(t);
    }
    clearMessage() {
        this.inputBox?.hideMessage();
    }
    clearValidation() {
        this.inputBox?.hideMessage();
    }
    set width(t) {
        this.inputBox.paddingRight = this.cachedOptionsWidth, this.domNode.style.width = t + "px";
    }
    dispose() {
        super.dispose();
    }
}, u3a.OPTION_CHANGE = "optionChange";

}
