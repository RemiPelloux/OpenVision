import { D, Gt, Qe, Vn, en, tt } from "./Iwo.js";
import { PT, oR } from "./actionbar.js";
import { $3 } from "./aria.js";
import { NQ } from "./cssValue.js";
import { Hn, Xde } from "./dom_2.js";
import { Gg, voe } from "./event_2.js";
import { tTr } from "./formattedTextRenderer.js";
import { qzo, xKd } from "./history_2.js";
import { t5y } from "./inputBox.css";
import { Bt } from "./nls.js";
import { cp } from "./objects.js";
import { E7, oCr } from "./scrollableElement.js";
import { E } from "./tslib.es6.js";
import { CY, k4 } from "./widget.js";
import { $3y, Dj, FAe, Fj, Ii, Mj, Rp, Xte, cGo, fr, gz, qve, vHe } from "./ze.js";
var Rvn, Eoe, AKd, Pvn, BEr;
export { AKd, BEr, Eoe, Pvn, Rvn };
var __wakaru_fnt_initialized = false;
export function fnt() {
if (__wakaru_fnt_initialized) return;
__wakaru_fnt_initialized = true;
"use strict";
E(), Hn(), NQ(), voe(), tTr(), PT(), $3(), gz(), E7(), CY(), Gt(), qzo(), cp(), t5y(), Bt(), Qe(), Rvn = Ii, Eoe = ((t)=>(t[t.INFO = 1] = "INFO", t[t.WARNING = 2] = "WARNING", t[t.ERROR = 3] = "ERROR", t))(Eoe || {}), AKd = {
    inputBackground: "#3C3C3C",
    inputForeground: "#CCCCCC",
    inputValidationInfoBorder: "#55AAFF",
    inputValidationInfoBackground: "#063B49",
    inputValidationWarningBorder: "#B89500",
    inputValidationWarningBackground: "#352A05",
    inputValidationErrorBorder: "#BE1100",
    inputValidationErrorBackground: "#5A1D1D",
    inputBorder: void 0,
    inputValidationErrorForeground: void 0,
    inputValidationInfoForeground: void 0,
    inputValidationWarningForeground: void 0
}, Pvn = class extends k4 {
    constructor(t, e, n){
        super(), this.state = "idle", this.maxHeight = Number.POSITIVE_INFINITY, this.hover = this._register(new Vn), this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._onDidHeightChange = this._register(new tt), this.onDidHeightChange = this._onDidHeightChange.event, this.contextViewProvider = e, this.options = n, this.message = null, this.placeholder = this.options.placeholder || "", this.tooltip = this.options.tooltip ?? (this.placeholder || ""), this.ariaLabel = this.options.ariaLabel || "", this.options.validationOptions && (this.validation = this.options.validationOptions.validation), this.element = fr(t, Rvn(".monaco-inputbox.idle"));
        const i = this.options.flexibleHeight ? "textarea" : "input", r = fr(this.element, Rvn(".ibwrapper"));
        if (this.input = fr(r, Rvn(i + ".input.empty")), this.input.setAttribute("autocorrect", "off"), this.input.setAttribute("autocapitalize", "off"), this.input.setAttribute("spellcheck", "false"), this.onfocus(this.input, ()=>this.element.classList.add("synthetic-focus")), this.onblur(this.input, ()=>this.element.classList.remove("synthetic-focus")), this.options.flexibleHeight) {
            this.maxHeight = typeof this.options.flexibleMaxHeight == "number" ? this.options.flexibleMaxHeight : Number.POSITIVE_INFINITY, this.mirror = fr(r, Rvn("div.mirror")), this.mirror.innerText = "\xA0", this.scrollableElement = new oCr(this.element, {
                vertical: 1
            }), this.options.flexibleWidth && (this.input.setAttribute("wrap", "off"), this.mirror.style.whiteSpace = "pre", this.mirror.style.wordWrap = "initial"), fr(t, this.scrollableElement.getDomNode()), this._register(this.scrollableElement), this._register(this.scrollableElement.onScroll((a)=>this.input.scrollTop = a.scrollTop));
            const s = this._register(new Gg(t.ownerDocument, "selectionchange")), o = en.filter(s.event, ()=>t.ownerDocument.getSelection()?.anchorNode === r);
            this._register(o(this.updateScrollDimensions, this)), this._register(this.onDidHeightChange(this.updateScrollDimensions, this));
        } else this.input.type = this.options.type || "text", this.input.setAttribute("wrap", "off");
        this.ariaLabel && this.input.setAttribute("aria-label", this.ariaLabel), this.placeholder && !this.options.showPlaceholderOnFocus && this.setPlaceHolder(this.placeholder), this.tooltip && this.setTooltip(this.tooltip), this.oninput(this.input, ()=>this.onValueChange()), this.onblur(this.input, ()=>this.onBlur()), this.onfocus(this.input, ()=>this.onFocus()), this._register(this.ignoreGesture(this.input)), setTimeout(()=>this.updateMirror(), 0), this.options.actions && (this.actionbar = this._register(new oR(this.element)), this.actionbar.push(this.options.actions, {
            icon: !0,
            label: !1
        })), this.applyStyles();
    }
    onBlur() {
        this._hideMessage(), this.options.showPlaceholderOnFocus && this.input.setAttribute("placeholder", "");
    }
    onFocus() {
        this._showMessage(), this.options.showPlaceholderOnFocus && this.input.setAttribute("placeholder", this.placeholder || "");
    }
    setPlaceHolder(t) {
        this.placeholder = t, this.input.setAttribute("placeholder", t);
    }
    setTooltip(t) {
        this.tooltip = t, !this.hover.value && t && (this.hover.value = this._register(Fj().setupDelayedHoverAtMouse(this.input, ()=>({
                content: this.tooltip,
                appearance: {
                    compact: !0
                }
            }))));
    }
    setAriaLabel(t) {
        this.ariaLabel = t, t ? this.input.setAttribute("aria-label", this.ariaLabel) : this.input.removeAttribute("aria-label");
    }
    getAriaLabel() {
        return this.ariaLabel;
    }
    get mirrorElement() {
        return this.mirror;
    }
    get inputElement() {
        return this.input;
    }
    get value() {
        return this.input.value;
    }
    set value(t) {
        this.input.value !== t && (this.input.value = t, this.onValueChange());
    }
    get step() {
        return this.input.step;
    }
    set step(t) {
        this.input.step = t;
    }
    get height() {
        return typeof this.cachedHeight == "number" ? this.cachedHeight : FAe(this.element);
    }
    focus() {
        this.input.focus();
    }
    blur() {
        this.input.blur();
    }
    hasFocus() {
        return Xte(this.input);
    }
    select(t = null) {
        this.input.select(), t && (this.input.setSelectionRange(t.start, t.end), t.end === this.input.value.length && (this.input.scrollLeft = this.input.scrollWidth));
    }
    isSelectionAtEnd() {
        return this.input.selectionEnd === this.input.value.length && this.input.selectionStart === this.input.selectionEnd;
    }
    getSelection() {
        const t = this.input.selectionStart;
        if (t === null) return null;
        const e = this.input.selectionEnd ?? t;
        return {
            start: t,
            end: e
        };
    }
    enable() {
        this.input.removeAttribute("disabled");
    }
    disable() {
        this.blur(), this.input.disabled = !0, this._hideMessage();
    }
    setEnabled(t) {
        t ? this.enable() : this.disable();
    }
    get width() {
        return Mj(this.input);
    }
    set width(t) {
        if (this.options.flexibleHeight && this.options.flexibleWidth) {
            let e = 0;
            if (this.mirror) {
                const n = parseFloat(this.mirror.style.paddingLeft || "") || 0, i = parseFloat(this.mirror.style.paddingRight || "") || 0;
                e = n + i;
            }
            this.input.style.width = t - e + "px";
        } else this.input.style.width = t + "px";
        this.mirror && (this.mirror.style.width = t + "px");
    }
    set paddingRight(t) {
        this.input.style.width = `calc(100% - ${t}px)`, this.mirror && (this.mirror.style.paddingRight = t + "px");
    }
    updateScrollDimensions() {
        if (typeof this.cachedContentHeight != "number" || typeof this.cachedHeight != "number" || !this.scrollableElement) return;
        const t = this.cachedContentHeight, e = this.cachedHeight, n = this.input.scrollTop;
        this.scrollableElement.setScrollDimensions({
            scrollHeight: t,
            height: e
        }), this.scrollableElement.setScrollPosition({
            scrollTop: n
        });
    }
    showMessage(t, e) {
        if (this.state === "open" && Rp(this.message, t)) return;
        this.message = t, this.element.classList.remove("idle"), this.element.classList.remove("info"), this.element.classList.remove("warning"), this.element.classList.remove("error"), this.element.classList.add(this.classForType(t.type));
        const n = this.stylesForType(this.message.type);
        this.element.style.border = `1px solid ${vHe(n.border, "transparent")}`, this.message.content && (this.hasFocus() || e) && this._showMessage();
    }
    hideMessage() {
        this.message = null, this.element.classList.remove("info"), this.element.classList.remove("warning"), this.element.classList.remove("error"), this.element.classList.add("idle"), this._hideMessage(), this.applyStyles();
    }
    isInputValid() {
        return !!this.validation && !this.validation(this.value);
    }
    validate() {
        let t = null;
        return this.validation && (t = this.validation(this.value), t ? (this.inputElement.setAttribute("aria-invalid", "true"), this.showMessage(t)) : this.inputElement.hasAttribute("aria-invalid") && (this.inputElement.removeAttribute("aria-invalid"), this.hideMessage())), t?.type;
    }
    stylesForType(t) {
        const e = this.options.inputBoxStyles;
        switch(t){
            case 1:
                return {
                    border: e.inputValidationInfoBorder,
                    background: e.inputValidationInfoBackground,
                    foreground: e.inputValidationInfoForeground
                };
            case 2:
                return {
                    border: e.inputValidationWarningBorder,
                    background: e.inputValidationWarningBackground,
                    foreground: e.inputValidationWarningForeground
                };
            default:
                return {
                    border: e.inputValidationErrorBorder,
                    background: e.inputValidationErrorBackground,
                    foreground: e.inputValidationErrorForeground
                };
        }
    }
    classForType(t) {
        switch(t){
            case 1:
                return "info";
            case 2:
                return "warning";
            default:
                return "error";
        }
    }
    _showMessage() {
        if (!this.contextViewProvider || !this.message) return;
        let t;
        const e = ()=>t.style.width = Mj(this.element) + "px";
        this.contextViewProvider.showContextView({
            getAnchor: ()=>this.element,
            anchorAlignment: 1,
            render: (i)=>{
                if (!this.message) return null;
                t = fr(i, Rvn(".monaco-inputbox-container")), e();
                const r = {
                    inline: !0,
                    className: "monaco-inputbox-message"
                }, s = this.message.formatContent ? cGo(this.message.content, r) : $3y(this.message.content, r);
                s.classList.add(this.classForType(this.message.type));
                const o = this.stylesForType(this.message.type);
                return s.style.backgroundColor = o.background ?? "", s.style.color = o.foreground ?? "", s.style.border = o.border ? `1px solid ${o.border}` : "", fr(t, s), null;
            },
            onHide: ()=>{
                this.state = "closed";
            },
            layout: e
        });
        let n;
        this.message.type === 3 ? n = D(19, null, this.message.content) : this.message.type === 2 ? n = D(20, null, this.message.content) : n = D(21, null, this.message.content), Dj(n), this.state = "open";
    }
    _hideMessage() {
        this.contextViewProvider && (this.state === "open" && this.contextViewProvider.hideContextView(), this.state = "idle");
    }
    onValueChange() {
        this._onDidChange.fire(this.value), this.validate(), this.updateMirror(), this.input.classList.toggle("empty", !this.value), this.state === "open" && this.contextViewProvider && this.contextViewProvider.layout();
    }
    updateMirror() {
        if (!this.mirror) return;
        const t = this.value, n = t.charCodeAt(t.length - 1) === 10 ? " " : "";
        (t + n).replace(/\u000c/g, "") ? this.mirror.textContent = t + n : this.mirror.innerText = "\xA0", this.layout();
    }
    applyStyles() {
        const t = this.options.inputBoxStyles, e = t.inputBackground ?? "", n = t.inputForeground ?? "", i = t.inputBorder ?? "";
        this.element.style.backgroundColor = e, this.element.style.color = n, this.input.style.backgroundColor = "inherit", this.input.style.color = n, this.element.style.border = `1px solid ${vHe(i, "transparent")}`;
    }
    layout() {
        if (!this.mirror) return;
        const t = this.cachedContentHeight;
        this.cachedContentHeight = FAe(this.mirror), t !== this.cachedContentHeight && (this.cachedHeight = Math.min(this.cachedContentHeight, this.maxHeight), this.input.style.height = this.cachedHeight + "px", this._onDidHeightChange.fire(this.cachedContentHeight));
    }
    insertAtCursor(t) {
        const e = this.inputElement, n = e.selectionStart, i = e.selectionEnd, r = e.value;
        n !== null && i !== null && (this.value = r.substr(0, n) + t + r.substr(i), e.setSelectionRange(n + 1, n + 1), this.layout());
    }
    dispose() {
        this._hideMessage(), this.message = null, this.actionbar?.dispose(), super.dispose();
    }
}, BEr = class extends Pvn {
    constructor(t, e, n){
        const i = D(22, null, "\u21C5"), r = D(23, null, "\u21C5");
        super(t, e, n), this._onDidFocus = this._register(new tt), this.onDidFocus = this._onDidFocus.event, this._onDidBlur = this._register(new tt), this.onDidBlur = this._onDidBlur.event, this.history = this._register(new xKd(n.history, 100)), this.addCurrentToHistoryOnNavigate = n.addCurrentToHistoryOnNavigate ?? !0;
        const s = ()=>{
            if (n.showHistoryHint && n.showHistoryHint() && !this.placeholder.endsWith(i) && !this.placeholder.endsWith(r) && this.history.getHistory().length) {
                const o = this.placeholder.endsWith(")") ? i : r, a = this.placeholder + o;
                n.showPlaceholderOnFocus && !Xte(this.input) ? this.placeholder = a : this.setPlaceHolder(a);
            }
        };
        this._register(Xde.observe(this.input, this._store, {
            attributeFilter: [
                "class"
            ]
        })((o)=>{
            o.forEach((a)=>{
                a.target.textContent || s();
            });
        })), this.onfocus(this.input, ()=>s()), this.onblur(this.input, ()=>{
            const o = (a)=>{
                if (this.placeholder.endsWith(a)) {
                    const l = this.placeholder.slice(0, this.placeholder.length - a.length);
                    return n.showPlaceholderOnFocus ? this.placeholder = l : this.setPlaceHolder(l), !0;
                } else return !1;
            };
            o(r) || o(i);
        });
    }
    addToHistory(t) {
        this.value && (t || this.value !== this.getCurrentValue()) && this.history.add(this.value);
    }
    prependHistory(t) {
        const e = this.getHistory();
        this.clearHistory(), t.forEach((n)=>{
            this.history.add(n);
        }), e.forEach((n)=>{
            this.history.add(n);
        });
    }
    getHistory() {
        return this.history.getHistory();
    }
    isAtFirstInHistory() {
        return this.history.isFirst();
    }
    isAtLastInHistory() {
        return this.history.isLast();
    }
    isNowhereInHistory() {
        return this.history.isNowhere();
    }
    showNextValue() {
        this.addCurrentToHistoryOnNavigate && !this.history.has(this.value) && this.addToHistory();
        let t = this.getNextValue();
        t && (t = t === this.value ? this.getNextValue() : t), this.value = t ?? "", qve(this.value ? this.value : D(24, null));
    }
    showPreviousValue() {
        this.addCurrentToHistoryOnNavigate && !this.history.has(this.value) && this.addToHistory();
        let t = this.getPreviousValue();
        t && (t = t === this.value ? this.getPreviousValue() : t), t && (this.value = t, qve(this.value));
    }
    clearHistory() {
        this.history.clear();
    }
    setPlaceHolder(t) {
        super.setPlaceHolder(t), this.setTooltip(t);
    }
    onBlur() {
        super.onBlur(), this._onDidBlur.fire();
    }
    onFocus() {
        super.onFocus(), this._onDidFocus.fire();
    }
    getCurrentValue() {
        let t = this.history.current();
        return t || (t = this.history.last(), this.history.next()), t;
    }
    getPreviousValue() {
        return this.history.previous() || this.history.first();
    }
    getNextValue() {
        return this.history.next();
    }
};

}
