import { S, bt, ve } from "./HVr.js";
import { Pe, _i } from "./codicons.js";
import { Gc, en } from "./dom_2.js";
import { FHc } from "./findInput.css";
import { $yi, CW } from "./inputBox.js";
import { rt } from "./nls.js";
import { $f, ih } from "./qIc.js";
import { E3, uU } from "./toggle.js";
import { x } from "./tslib.es6.js";
import { RO, pR } from "./widget.js";
var nwu, iwu, rwu, Z$s;
export { Z$s, iwu, nwu, rwu };
var __wakaru_ycv_initialized = false;
export function ycv() {
if (__wakaru_ycv_initialized) return;
__wakaru_ycv_initialized = true;
"use strict";
x(), en(), uU(), CW(), RO(), _i(), bt(), FHc(), rt(), $f(), nwu = S(13, null), iwu = S(14, null), rwu = class extends E3 {
    constructor(e){
        super({
            icon: Pe.preserveCase,
            title: iwu + e.appendTitle,
            isChecked: e.isChecked,
            hoverDelegate: e.hoverDelegate ?? ih("element"),
            inputActiveOptionBorder: e.inputActiveOptionBorder,
            inputActiveOptionForeground: e.inputActiveOptionForeground,
            inputActiveOptionBackground: e.inputActiveOptionBackground
        });
    }
}, Z$s = class extends pR {
    constructor(e, t, n, i){
        super(), this._showOptionButtons = n, this.fixFocusOnOptionClickEnabled = !0, this.cachedOptionsWidth = 0, this._onDidOptionChange = this._register(new ve), this.onDidOptionChange = this._onDidOptionChange.event, this._onKeyDown = this._register(new ve), this.onKeyDown = this._onKeyDown.event, this._onMouseDown = this._register(new ve), this.onMouseDown = this._onMouseDown.event, this._onInput = this._register(new ve), this.onInput = this._onInput.event, this._onKeyUp = this._register(new ve), this.onKeyUp = this._onKeyUp.event, this._onPreserveCaseKeyDown = this._register(new ve), this.onPreserveCaseKeyDown = this._onPreserveCaseKeyDown.event, this._lastHighlightFindOptions = 0, this.contextViewProvider = t, this.placeholder = i.placeholder || "", this.validation = i.validation, this.label = i.label || nwu;
        const r = i.appendPreserveCaseLabel || "", s = i.history || new Set([]), o = !!i.flexibleHeight, a = !!i.flexibleWidth, c = i.flexibleMaxHeight;
        this.domNode = document.createElement("div"), this.domNode.classList.add("monaco-findInput"), this.inputBox = this._register(new $yi(this.domNode, this.contextViewProvider, {
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
            flexibleMaxHeight: c,
            inputBoxStyles: i.inputBoxStyles
        })), this.preserveCase = this._register(new rwu({
            appendTitle: r,
            isChecked: !1,
            ...i.toggleStyles
        })), this._register(this.preserveCase.onChange((h)=>{
            this._onDidOptionChange.fire(h), !h && this.fixFocusOnOptionClickEnabled && this.inputBox.focus(), this.validate();
        })), this._register(this.preserveCase.onKeyDown((h)=>{
            this._onPreserveCaseKeyDown.fire(h);
        })), this._showOptionButtons ? this.cachedOptionsWidth = this.preserveCase.width() : this.cachedOptionsWidth = 0;
        const l = [
            this.preserveCase.domNode
        ];
        this.onkeydown(this.domNode, (h)=>{
            if (h.equals(15) || h.equals(17) || h.equals(9)) {
                const p = l.indexOf(this.domNode.ownerDocument.activeElement);
                if (p >= 0) {
                    let g = -1;
                    h.equals(17) ? g = (p + 1) % l.length : h.equals(15) && (p === 0 ? g = l.length - 1 : g = p - 1), h.equals(9) ? (l[p].blur(), this.inputBox.focus()) : g >= 0 && l[g].focus(), Gc.stop(h, !0);
                }
            }
        });
        const u = document.createElement("div");
        u.className = "controls", u.style.display = this._showOptionButtons ? "block" : "none", u.appendChild(this.preserveCase.domNode), this.domNode.appendChild(u), e?.appendChild(this.domNode), this.onkeydown(this.inputBox.inputElement, (h)=>this._onKeyDown.fire(h)), this.onkeyup(this.inputBox.inputElement, (h)=>this._onKeyUp.fire(h)), this.oninput(this.inputBox.inputElement, (h)=>this._onInput.fire()), this.onmousedown(this.inputBox.inputElement, (h)=>this._onMouseDown.fire(h));
    }
    enable() {
        this.domNode.classList.remove("disabled"), this.inputBox.enable(), this.preserveCase.enable();
    }
    disable() {
        this.domNode.classList.add("disabled"), this.inputBox.disable(), this.preserveCase.disable();
    }
    setFocusInputOnOptionClick(e) {
        this.fixFocusOnOptionClickEnabled = e;
    }
    setEnabled(e) {
        e ? this.enable() : this.disable();
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
    setPreserveCase(e) {
        this.preserveCase.checked = e;
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
    showMessage(e) {
        this.inputBox?.showMessage(e);
    }
    clearMessage() {
        this.inputBox?.hideMessage();
    }
    clearValidation() {
        this.inputBox?.hideMessage();
    }
    set width(e) {
        this.inputBox.paddingRight = this.cachedOptionsWidth, this.domNode.style.width = e + "px";
    }
    dispose() {
        super.dispose();
    }
}, Z$s.OPTION_CHANGE = "optionChange";

}
