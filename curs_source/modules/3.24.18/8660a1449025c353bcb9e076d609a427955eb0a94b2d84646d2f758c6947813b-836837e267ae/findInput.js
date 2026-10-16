import { D, Gt, Nt, Qe, Vn, tt } from "./Iwo.js";
import { Dd, Hn } from "./dom_2.js";
import { RKd } from "./findInput.css";
import { EKd, Gzo, Hzo, Wzo } from "./findInputToggles.js";
import { BEr, fnt } from "./inputBox.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
import { CY, k4 } from "./widget.js";
import { fHe, li, sR } from "./ze.js";
var PKd, qoi;
export { PKd, qoi };
var __wakaru_zzo_initialized = false;
export function zzo() {
if (__wakaru_zzo_initialized) return;
__wakaru_zzo_initialized = true;
"use strict";
E(), Hn(), EKd(), fnt(), CY(), Gt(), RKd(), Bt(), Qe(), sR(), PKd = D(9, null), qoi = class extends k4 {
    constructor(t, e, n){
        super(), this.fixFocusOnOptionClickEnabled = !0, this.imeSessionInProgress = !1, this.additionalTogglesDisposables = this._register(new Vn), this.additionalToggles = [], this._onDidOptionChange = this._register(new tt), this.onDidOptionChange = this._onDidOptionChange.event, this._onKeyDown = this._register(new tt), this.onKeyDown = this._onKeyDown.event, this._onMouseDown = this._register(new tt), this.onMouseDown = this._onMouseDown.event, this._onInput = this._register(new tt), this.onInput = this._onInput.event, this._onKeyUp = this._register(new tt), this.onKeyUp = this._onKeyUp.event, this._onCaseSensitiveKeyDown = this._register(new tt), this.onCaseSensitiveKeyDown = this._onCaseSensitiveKeyDown.event, this._onRegexKeyDown = this._register(new tt), this.onRegexKeyDown = this._onRegexKeyDown.event, this._lastHighlightFindOptions = 0, this.placeholder = n.placeholder || "", this.validation = n.validation, this.label = n.label || PKd, this.showCommonFindToggles = !!n.showCommonFindToggles;
        const i = n.appendCaseSensitiveLabel || "", r = n.appendWholeWordsLabel || "", s = n.appendRegexLabel || "", o = !!n.flexibleHeight, a = !!n.flexibleWidth, l = n.flexibleMaxHeight;
        this.domNode = document.createElement("div"), this.domNode.classList.add("monaco-findInput"), this.inputBox = this._register(new BEr(this.domNode, e, {
            placeholder: this.placeholder || "",
            ariaLabel: this.label || "",
            validationOptions: {
                validation: this.validation
            },
            showHistoryHint: n.showHistoryHint,
            flexibleHeight: o,
            flexibleWidth: a,
            flexibleMaxHeight: l,
            inputBoxStyles: n.inputBoxStyles,
            history: n.history,
            addCurrentToHistoryOnNavigate: n.addCurrentToHistoryOnNavigate
        }));
        const c = this._register(fHe());
        if (this.showCommonFindToggles) {
            this.regex = this._register(new Gzo({
                appendTitle: s,
                isChecked: !1,
                hoverDelegate: c,
                ...n.toggleStyles
            })), this._register(this.regex.onChange((d)=>{
                this._onDidOptionChange.fire(d), !d && this.fixFocusOnOptionClickEnabled && this.inputBox.focus(), this.validate();
            })), this._register(this.regex.onKeyDown((d)=>{
                this._onRegexKeyDown.fire(d);
            })), this.wholeWords = this._register(new Wzo({
                appendTitle: r,
                isChecked: !1,
                hoverDelegate: c,
                ...n.toggleStyles
            })), this._register(this.wholeWords.onChange((d)=>{
                this._onDidOptionChange.fire(d), !d && this.fixFocusOnOptionClickEnabled && this.inputBox.focus(), this.validate();
            })), this.caseSensitive = this._register(new Hzo({
                appendTitle: i,
                isChecked: !1,
                hoverDelegate: c,
                ...n.toggleStyles
            })), this._register(this.caseSensitive.onChange((d)=>{
                this._onDidOptionChange.fire(d), !d && this.fixFocusOnOptionClickEnabled && this.inputBox.focus(), this.validate();
            })), this._register(this.caseSensitive.onKeyDown((d)=>{
                this._onCaseSensitiveKeyDown.fire(d);
            }));
            const u = [
                this.caseSensitive.domNode,
                this.wholeWords.domNode,
                this.regex.domNode
            ];
            this.onkeydown(this.domNode, (d)=>{
                if (d.equals(15) || d.equals(17) || d.equals(9)) {
                    const h = u.indexOf(this.domNode.ownerDocument.activeElement);
                    if (h >= 0) {
                        let p = -1;
                        d.equals(17) ? p = (h + 1) % u.length : d.equals(15) && (h === 0 ? p = u.length - 1 : p = h - 1), d.equals(9) ? (u[h].blur(), this.inputBox.focus()) : p >= 0 && u[p].focus(), Dd.stop(d, !0);
                    }
                }
            });
        }
        this.controls = document.createElement("div"), this.controls.className = "controls", this.controls.style.display = this.showCommonFindToggles ? "" : "none", this.caseSensitive && this.controls.append(this.caseSensitive.domNode), this.wholeWords && this.controls.appendChild(this.wholeWords.domNode), this.regex && this.controls.appendChild(this.regex.domNode), this.setAdditionalToggles(n?.additionalToggles), this.controls && this.domNode.appendChild(this.controls), t?.appendChild(this.domNode), this._register(li(this.inputBox.inputElement, "compositionstart", (u)=>{
            this.imeSessionInProgress = !0;
        })), this._register(li(this.inputBox.inputElement, "compositionend", (u)=>{
            this.imeSessionInProgress = !1, this._onInput.fire();
        })), this.onkeydown(this.inputBox.inputElement, (u)=>this._onKeyDown.fire(u)), this.onkeyup(this.inputBox.inputElement, (u)=>this._onKeyUp.fire(u)), this.oninput(this.inputBox.inputElement, (u)=>this._onInput.fire()), this.onmousedown(this.inputBox.inputElement, (u)=>this._onMouseDown.fire(u));
    }
    get isImeSessionInProgress() {
        return this.imeSessionInProgress;
    }
    get onDidChange() {
        return this.inputBox.onDidChange;
    }
    layout(t) {
        this.inputBox.layout(), this.updateInputBoxPadding(t.collapsedFindWidget);
    }
    enable() {
        this.domNode.classList.remove("disabled"), this.inputBox.enable(), this.regex?.enable(), this.wholeWords?.enable(), this.caseSensitive?.enable();
        for (const t of this.additionalToggles)t.enable();
    }
    disable() {
        this.domNode.classList.add("disabled"), this.inputBox.disable(), this.regex?.disable(), this.wholeWords?.disable(), this.caseSensitive?.disable();
        for (const t of this.additionalToggles)t.disable();
    }
    setFocusInputOnOptionClick(t) {
        this.fixFocusOnOptionClickEnabled = t;
    }
    setEnabled(t) {
        t ? this.enable() : this.disable();
    }
    setAdditionalToggles(t) {
        for (const e of this.additionalToggles)e.domNode.remove();
        this.additionalToggles = [], this.additionalTogglesDisposables.value = new Nt;
        for (const e of t ?? [])this.additionalTogglesDisposables.value.add(e), this.controls.appendChild(e.domNode), this.additionalTogglesDisposables.value.add(e.onChange((n)=>{
            this._onDidOptionChange.fire(n), !n && this.fixFocusOnOptionClickEnabled && this.inputBox.focus();
        })), this.additionalToggles.push(e);
        this.additionalToggles.length > 0 && (this.controls.style.display = ""), this.updateInputBoxPadding();
    }
    updateInputBoxPadding(t = !1) {
        t ? this.inputBox.paddingRight = 0 : this.inputBox.paddingRight = (this.caseSensitive?.width() ?? 0) + (this.wholeWords?.width() ?? 0) + (this.regex?.width() ?? 0) + this.additionalToggles.reduce((e, n)=>e + n.width(), 0);
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
    select() {
        this.inputBox.select();
    }
    focus() {
        this.inputBox.focus();
    }
    getCaseSensitive() {
        return this.caseSensitive?.checked ?? !1;
    }
    setCaseSensitive(t) {
        this.caseSensitive && (this.caseSensitive.checked = t);
    }
    getWholeWords() {
        return this.wholeWords?.checked ?? !1;
    }
    setWholeWords(t) {
        this.wholeWords && (this.wholeWords.checked = t);
    }
    getRegex() {
        return this.regex?.checked ?? !1;
    }
    setRegex(t) {
        this.regex && (this.regex.checked = t, this.validate());
    }
    focusOnCaseSensitive() {
        this.caseSensitive?.focus();
    }
    focusOnRegex() {
        this.regex?.focus();
    }
    highlightFindOptions() {
        this.domNode.classList.remove("highlight-" + this._lastHighlightFindOptions), this._lastHighlightFindOptions = 1 - this._lastHighlightFindOptions, this.domNode.classList.add("highlight-" + this._lastHighlightFindOptions);
    }
    validate() {
        this.inputBox.validate();
    }
    showMessage(t) {
        this.inputBox.showMessage(t);
    }
    clearMessage() {
        this.inputBox.hideMessage();
    }
    clearValidation() {
        this.inputBox.hideMessage();
    }
}, qoi.OPTION_CHANGE = "optionChange";

}
