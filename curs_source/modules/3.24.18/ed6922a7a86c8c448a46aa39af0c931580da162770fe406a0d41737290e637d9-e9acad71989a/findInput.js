import { He, S, Se, bt, cn, ve } from "./HVr.js";
import { Gc, en } from "./dom_2.js";
import { FHc } from "./findInput.css";
import { LHc, frs, grs, mrs } from "./findInputToggles.js";
import { $yi, CW } from "./inputBox.js";
import { rt } from "./nls.js";
import { $f, VV, Xt } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { RO, pR } from "./widget.js";
var BHc, r3t;
export { BHc, r3t };
var __wakaru_Hyi_initialized = false;
export function Hyi() {
if (__wakaru_Hyi_initialized) return;
__wakaru_Hyi_initialized = true;
"use strict";
x(), en(), LHc(), CW(), RO(), bt(), FHc(), rt(), Se(), $f(), BHc = S(9, null), r3t = class extends pR {
    constructor(e, t, n){
        super(), this.fixFocusOnOptionClickEnabled = !0, this.imeSessionInProgress = !1, this.additionalTogglesDisposables = this._register(new cn), this.additionalToggles = [], this._onDidOptionChange = this._register(new ve), this.onDidOptionChange = this._onDidOptionChange.event, this._onKeyDown = this._register(new ve), this.onKeyDown = this._onKeyDown.event, this._onMouseDown = this._register(new ve), this.onMouseDown = this._onMouseDown.event, this._onInput = this._register(new ve), this.onInput = this._onInput.event, this._onKeyUp = this._register(new ve), this.onKeyUp = this._onKeyUp.event, this._onCaseSensitiveKeyDown = this._register(new ve), this.onCaseSensitiveKeyDown = this._onCaseSensitiveKeyDown.event, this._onRegexKeyDown = this._register(new ve), this.onRegexKeyDown = this._onRegexKeyDown.event, this._lastHighlightFindOptions = 0, this.placeholder = n.placeholder || "", this.validation = n.validation, this.label = n.label || BHc, this.showCommonFindToggles = !!n.showCommonFindToggles;
        const i = n.appendCaseSensitiveLabel || "", r = n.appendWholeWordsLabel || "", s = n.appendRegexLabel || "", o = !!n.flexibleHeight, a = !!n.flexibleWidth, c = n.flexibleMaxHeight;
        this.domNode = document.createElement("div"), this.domNode.classList.add("monaco-findInput"), this.inputBox = this._register(new $yi(this.domNode, t, {
            placeholder: this.placeholder || "",
            ariaLabel: this.label || "",
            validationOptions: {
                validation: this.validation
            },
            showHistoryHint: n.showHistoryHint,
            flexibleHeight: o,
            flexibleWidth: a,
            flexibleMaxHeight: c,
            inputBoxStyles: n.inputBoxStyles,
            history: n.history,
            addCurrentToHistoryOnNavigate: n.addCurrentToHistoryOnNavigate
        }));
        const l = this._register(VV());
        if (this.showCommonFindToggles) {
            this.regex = this._register(new frs({
                appendTitle: s,
                isChecked: !1,
                hoverDelegate: l,
                ...n.toggleStyles
            })), this._register(this.regex.onChange((h)=>{
                this._onDidOptionChange.fire(h), !h && this.fixFocusOnOptionClickEnabled && this.inputBox.focus(), this.validate();
            })), this._register(this.regex.onKeyDown((h)=>{
                this._onRegexKeyDown.fire(h);
            })), this.wholeWords = this._register(new grs({
                appendTitle: r,
                isChecked: !1,
                hoverDelegate: l,
                ...n.toggleStyles
            })), this._register(this.wholeWords.onChange((h)=>{
                this._onDidOptionChange.fire(h), !h && this.fixFocusOnOptionClickEnabled && this.inputBox.focus(), this.validate();
            })), this.caseSensitive = this._register(new mrs({
                appendTitle: i,
                isChecked: !1,
                hoverDelegate: l,
                ...n.toggleStyles
            })), this._register(this.caseSensitive.onChange((h)=>{
                this._onDidOptionChange.fire(h), !h && this.fixFocusOnOptionClickEnabled && this.inputBox.focus(), this.validate();
            })), this._register(this.caseSensitive.onKeyDown((h)=>{
                this._onCaseSensitiveKeyDown.fire(h);
            }));
            const u = [
                this.caseSensitive.domNode,
                this.wholeWords.domNode,
                this.regex.domNode
            ];
            this.onkeydown(this.domNode, (h)=>{
                if (h.equals(15) || h.equals(17) || h.equals(9)) {
                    const p = u.indexOf(this.domNode.ownerDocument.activeElement);
                    if (p >= 0) {
                        let g = -1;
                        h.equals(17) ? g = (p + 1) % u.length : h.equals(15) && (p === 0 ? g = u.length - 1 : g = p - 1), h.equals(9) ? (u[p].blur(), this.inputBox.focus()) : g >= 0 && u[g].focus(), Gc.stop(h, !0);
                    }
                }
            });
        }
        this.controls = document.createElement("div"), this.controls.className = "controls", this.controls.style.display = this.showCommonFindToggles ? "" : "none", this.caseSensitive && this.controls.append(this.caseSensitive.domNode), this.wholeWords && this.controls.appendChild(this.wholeWords.domNode), this.regex && this.controls.appendChild(this.regex.domNode), this.setAdditionalToggles(n?.additionalToggles), this.controls && this.domNode.appendChild(this.controls), e?.appendChild(this.domNode), this._register(Xt(this.inputBox.inputElement, "compositionstart", (u)=>{
            this.imeSessionInProgress = !0;
        })), this._register(Xt(this.inputBox.inputElement, "compositionend", (u)=>{
            this.imeSessionInProgress = !1, this._onInput.fire();
        })), this.onkeydown(this.inputBox.inputElement, (u)=>this._onKeyDown.fire(u)), this.onkeyup(this.inputBox.inputElement, (u)=>this._onKeyUp.fire(u)), this.oninput(this.inputBox.inputElement, (u)=>this._onInput.fire()), this.onmousedown(this.inputBox.inputElement, (u)=>this._onMouseDown.fire(u));
    }
    get isImeSessionInProgress() {
        return this.imeSessionInProgress;
    }
    get onDidChange() {
        return this.inputBox.onDidChange;
    }
    layout(e) {
        this.inputBox.layout(), this.updateInputBoxPadding(e.collapsedFindWidget);
    }
    enable() {
        this.domNode.classList.remove("disabled"), this.inputBox.enable(), this.regex?.enable(), this.wholeWords?.enable(), this.caseSensitive?.enable();
        for (const e of this.additionalToggles)e.enable();
    }
    disable() {
        this.domNode.classList.add("disabled"), this.inputBox.disable(), this.regex?.disable(), this.wholeWords?.disable(), this.caseSensitive?.disable();
        for (const e of this.additionalToggles)e.disable();
    }
    setFocusInputOnOptionClick(e) {
        this.fixFocusOnOptionClickEnabled = e;
    }
    setEnabled(e) {
        e ? this.enable() : this.disable();
    }
    setAdditionalToggles(e) {
        for (const t of this.additionalToggles)t.domNode.remove();
        this.additionalToggles = [], this.additionalTogglesDisposables.value = new He;
        for (const t of e ?? [])this.additionalTogglesDisposables.value.add(t), this.controls.appendChild(t.domNode), this.additionalTogglesDisposables.value.add(t.onChange((n)=>{
            this._onDidOptionChange.fire(n), !n && this.fixFocusOnOptionClickEnabled && this.inputBox.focus();
        })), this.additionalToggles.push(t);
        this.additionalToggles.length > 0 && (this.controls.style.display = ""), this.updateInputBoxPadding();
    }
    updateInputBoxPadding(e = !1) {
        e ? this.inputBox.paddingRight = 0 : this.inputBox.paddingRight = (this.caseSensitive?.width() ?? 0) + (this.wholeWords?.width() ?? 0) + (this.regex?.width() ?? 0) + this.additionalToggles.reduce((t, n)=>t + n.width(), 0);
    }
    clear() {
        this.clearValidation(), this.setValue(""), this.focus();
    }
    getValue() {
        return this.inputBox.value;
    }
    setValue(e) {
        this.inputBox.value !== e && (this.inputBox.value = e);
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
    setCaseSensitive(e) {
        this.caseSensitive && (this.caseSensitive.checked = e);
    }
    getWholeWords() {
        return this.wholeWords?.checked ?? !1;
    }
    setWholeWords(e) {
        this.wholeWords && (this.wholeWords.checked = e);
    }
    getRegex() {
        return this.regex?.checked ?? !1;
    }
    setRegex(e) {
        this.regex && (this.regex.checked = e, this.validate());
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
    showMessage(e) {
        this.inputBox.showMessage(e);
    }
    clearMessage() {
        this.inputBox.hideMessage();
    }
    clearValidation() {
        this.inputBox.hideMessage();
    }
}, r3t.OPTION_CHANGE = "optionChange";

}
