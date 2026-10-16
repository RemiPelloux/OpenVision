import { Ct, S, Se, bt, cn, ve } from "./HVr.js";
import { Zm, cm } from "./actionbar.js";
import { hS } from "./aria.js";
import { MO } from "./cssValue.js";
import { M7, en } from "./dom_2.js";
import { B7, mp } from "./event_2.js";
import { mvn } from "./formattedTextRenderer.js";
import { Uyi, o_n } from "./history_2.js";
import { ykg } from "./inputBox.css";
import { rt } from "./nls.js";
import { bu } from "./objects.js";
import { Ebi, LP, V7, Ve, Ye, dJ, fM, iRe, jy, p5, yI, yh, zbg } from "./qIc.js";
import { P_i, mA } from "./scrollableElement.js";
import { x } from "./tslib.es6.js";
import { RO, pR } from "./widget.js";
var i3t, VP, OHc, f5, $yi;
export { $yi, OHc, VP, f5, i3t };
var __wakaru_CW_initialized = false;
export function CW() {
if (__wakaru_CW_initialized) return;
__wakaru_CW_initialized = true;
"use strict";
x(), en(), MO(), B7(), mvn(), Zm(), hS(), V7(), mA(), RO(), bt(), o_n(), bu(), ykg(), rt(), Se(), i3t = Ve, VP = ((e)=>(e[e.INFO = 1] = "INFO", e[e.WARNING = 2] = "WARNING", e[e.ERROR = 3] = "ERROR", e))(VP || {}), OHc = {
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
}, f5 = class extends pR {
    constructor(e, t, n){
        super(), this.state = "idle", this.maxHeight = Number.POSITIVE_INFINITY, this.hover = this._register(new cn), this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event, this._onDidHeightChange = this._register(new ve), this.onDidHeightChange = this._onDidHeightChange.event, this.contextViewProvider = t, this.options = n, this.message = null, this.placeholder = this.options.placeholder || "", this.tooltip = this.options.tooltip ?? (this.placeholder || ""), this.ariaLabel = this.options.ariaLabel || "", this.options.validationOptions && (this.validation = this.options.validationOptions.validation), this.element = Ye(e, i3t(".monaco-inputbox.idle"));
        const i = this.options.flexibleHeight ? "textarea" : "input", r = Ye(this.element, i3t(".ibwrapper"));
        if (this.input = Ye(r, i3t(i + ".input.empty")), this.input.setAttribute("autocorrect", "off"), this.input.setAttribute("autocapitalize", "off"), this.input.setAttribute("spellcheck", "false"), this.onfocus(this.input, ()=>this.element.classList.add("synthetic-focus")), this.onblur(this.input, ()=>this.element.classList.remove("synthetic-focus")), this.options.flexibleHeight) {
            this.maxHeight = typeof this.options.flexibleMaxHeight == "number" ? this.options.flexibleMaxHeight : Number.POSITIVE_INFINITY, this.mirror = Ye(r, i3t("div.mirror")), this.mirror.innerText = "\xA0", this.scrollableElement = new P_i(this.element, {
                vertical: 1
            }), this.options.flexibleWidth && (this.input.setAttribute("wrap", "off"), this.mirror.style.whiteSpace = "pre", this.mirror.style.wordWrap = "initial"), Ye(e, this.scrollableElement.getDomNode()), this._register(this.scrollableElement), this._register(this.scrollableElement.onScroll((a)=>this.input.scrollTop = a.scrollTop));
            const s = this._register(new mp(e.ownerDocument, "selectionchange")), o = Ct.filter(s.event, ()=>e.ownerDocument.getSelection()?.anchorNode === r);
            this._register(o(this.updateScrollDimensions, this)), this._register(this.onDidHeightChange(this.updateScrollDimensions, this));
        } else this.input.type = this.options.type || "text", this.input.setAttribute("wrap", "off");
        this.ariaLabel && this.input.setAttribute("aria-label", this.ariaLabel), this.placeholder && !this.options.showPlaceholderOnFocus && this.setPlaceHolder(this.placeholder), this.tooltip && this.setTooltip(this.tooltip), this.oninput(this.input, ()=>this.onValueChange()), this.onblur(this.input, ()=>this.onBlur()), this.onfocus(this.input, ()=>this.onFocus()), this._register(this.ignoreGesture(this.input)), setTimeout(()=>this.updateMirror(), 0), this.options.actions && (this.actionbar = this._register(new cm(this.element)), this.actionbar.push(this.options.actions, {
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
    setPlaceHolder(e) {
        this.placeholder = e, this.input.setAttribute("placeholder", e);
    }
    setTooltip(e) {
        this.tooltip = e, !this.hover.value && e && (this.hover.value = this._register(p5().setupDelayedHoverAtMouse(this.input, ()=>({
                content: this.tooltip,
                appearance: {
                    compact: !0
                }
            }))));
    }
    setAriaLabel(e) {
        this.ariaLabel = e, e ? this.input.setAttribute("aria-label", this.ariaLabel) : this.input.removeAttribute("aria-label");
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
    set value(e) {
        this.input.value !== e && (this.input.value = e, this.onValueChange());
    }
    get step() {
        return this.input.step;
    }
    set step(e) {
        this.input.step = e;
    }
    get height() {
        return typeof this.cachedHeight == "number" ? this.cachedHeight : dJ(this.element);
    }
    focus() {
        this.input.focus();
    }
    blur() {
        this.input.blur();
    }
    hasFocus() {
        return fM(this.input);
    }
    select(e = null) {
        this.input.select(), e && (this.input.setSelectionRange(e.start, e.end), e.end === this.input.value.length && (this.input.scrollLeft = this.input.scrollWidth));
    }
    isSelectionAtEnd() {
        return this.input.selectionEnd === this.input.value.length && this.input.selectionStart === this.input.selectionEnd;
    }
    getSelection() {
        const e = this.input.selectionStart;
        if (e === null) return null;
        const t = this.input.selectionEnd ?? e;
        return {
            start: e,
            end: t
        };
    }
    enable() {
        this.input.removeAttribute("disabled");
    }
    disable() {
        this.blur(), this.input.disabled = !0, this._hideMessage();
    }
    setEnabled(e) {
        e ? this.enable() : this.disable();
    }
    get width() {
        return LP(this.input);
    }
    set width(e) {
        if (this.options.flexibleHeight && this.options.flexibleWidth) {
            let t = 0;
            if (this.mirror) {
                const n = parseFloat(this.mirror.style.paddingLeft || "") || 0, i = parseFloat(this.mirror.style.paddingRight || "") || 0;
                t = n + i;
            }
            this.input.style.width = e - t + "px";
        } else this.input.style.width = e + "px";
        this.mirror && (this.mirror.style.width = e + "px");
    }
    set paddingRight(e) {
        this.input.style.width = `calc(100% - ${e}px)`, this.mirror && (this.mirror.style.paddingRight = e + "px");
    }
    updateScrollDimensions() {
        if (typeof this.cachedContentHeight != "number" || typeof this.cachedHeight != "number" || !this.scrollableElement) return;
        const e = this.cachedContentHeight, t = this.cachedHeight, n = this.input.scrollTop;
        this.scrollableElement.setScrollDimensions({
            scrollHeight: e,
            height: t
        }), this.scrollableElement.setScrollPosition({
            scrollTop: n
        });
    }
    showMessage(e, t) {
        if (this.state === "open" && yh(this.message, e)) return;
        this.message = e, this.element.classList.remove("idle"), this.element.classList.remove("info"), this.element.classList.remove("warning"), this.element.classList.remove("error"), this.element.classList.add(this.classForType(e.type));
        const n = this.stylesForType(this.message.type);
        this.element.style.border = `1px solid ${iRe(n.border, "transparent")}`, this.message.content && (this.hasFocus() || t) && this._showMessage();
    }
    hideMessage() {
        this.message = null, this.element.classList.remove("info"), this.element.classList.remove("warning"), this.element.classList.remove("error"), this.element.classList.add("idle"), this._hideMessage(), this.applyStyles();
    }
    isInputValid() {
        return !!this.validation && !this.validation(this.value);
    }
    validate() {
        let e = null;
        return this.validation && (e = this.validation(this.value), e ? (this.inputElement.setAttribute("aria-invalid", "true"), this.showMessage(e)) : this.inputElement.hasAttribute("aria-invalid") && (this.inputElement.removeAttribute("aria-invalid"), this.hideMessage())), e?.type;
    }
    stylesForType(e) {
        const t = this.options.inputBoxStyles;
        switch(e){
            case 1:
                return {
                    border: t.inputValidationInfoBorder,
                    background: t.inputValidationInfoBackground,
                    foreground: t.inputValidationInfoForeground
                };
            case 2:
                return {
                    border: t.inputValidationWarningBorder,
                    background: t.inputValidationWarningBackground,
                    foreground: t.inputValidationWarningForeground
                };
            default:
                return {
                    border: t.inputValidationErrorBorder,
                    background: t.inputValidationErrorBackground,
                    foreground: t.inputValidationErrorForeground
                };
        }
    }
    classForType(e) {
        switch(e){
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
        let e;
        const t = ()=>e.style.width = LP(this.element) + "px";
        this.contextViewProvider.showContextView({
            getAnchor: ()=>this.element,
            anchorAlignment: 1,
            render: (i)=>{
                if (!this.message) return null;
                e = Ye(i, i3t(".monaco-inputbox-container")), t();
                const r = {
                    inline: !0,
                    className: "monaco-inputbox-message"
                }, s = this.message.formatContent ? Ebi(this.message.content, r) : zbg(this.message.content, r);
                s.classList.add(this.classForType(this.message.type));
                const o = this.stylesForType(this.message.type);
                return s.style.backgroundColor = o.background ?? "", s.style.color = o.foreground ?? "", s.style.border = o.border ? `1px solid ${o.border}` : "", Ye(e, s), null;
            },
            onHide: ()=>{
                this.state = "closed";
            },
            layout: t
        });
        let n;
        this.message.type === 3 ? n = S(19, null, this.message.content) : this.message.type === 2 ? n = S(20, null, this.message.content) : n = S(21, null, this.message.content), jy(n), this.state = "open";
    }
    _hideMessage() {
        this.contextViewProvider && (this.state === "open" && this.contextViewProvider.hideContextView(), this.state = "idle");
    }
    onValueChange() {
        this._onDidChange.fire(this.value), this.validate(), this.updateMirror(), this.input.classList.toggle("empty", !this.value), this.state === "open" && this.contextViewProvider && this.contextViewProvider.layout();
    }
    updateMirror() {
        if (!this.mirror) return;
        const e = this.value, n = e.charCodeAt(e.length - 1) === 10 ? " " : "";
        (e + n).replace(/\u000c/g, "") ? this.mirror.textContent = e + n : this.mirror.innerText = "\xA0", this.layout();
    }
    applyStyles() {
        const e = this.options.inputBoxStyles, t = e.inputBackground ?? "", n = e.inputForeground ?? "", i = e.inputBorder ?? "";
        this.element.style.backgroundColor = t, this.element.style.color = n, this.input.style.backgroundColor = "inherit", this.input.style.color = n, this.element.style.border = `1px solid ${iRe(i, "transparent")}`;
    }
    layout() {
        if (!this.mirror) return;
        const e = this.cachedContentHeight;
        this.cachedContentHeight = dJ(this.mirror), e !== this.cachedContentHeight && (this.cachedHeight = Math.min(this.cachedContentHeight, this.maxHeight), this.input.style.height = this.cachedHeight + "px", this._onDidHeightChange.fire(this.cachedContentHeight));
    }
    insertAtCursor(e) {
        const t = this.inputElement, n = t.selectionStart, i = t.selectionEnd, r = t.value;
        n !== null && i !== null && (this.value = r.substr(0, n) + e + r.substr(i), t.setSelectionRange(n + 1, n + 1), this.layout());
    }
    dispose() {
        this._hideMessage(), this.message = null, this.actionbar?.dispose(), super.dispose();
    }
}, $yi = class extends f5 {
    constructor(e, t, n){
        const i = S(22, null, "\u21C5"), r = S(23, null, "\u21C5");
        super(e, t, n), this._onDidFocus = this._register(new ve), this.onDidFocus = this._onDidFocus.event, this._onDidBlur = this._register(new ve), this.onDidBlur = this._onDidBlur.event, this.history = this._register(new Uyi(n.history, 100)), this.addCurrentToHistoryOnNavigate = n.addCurrentToHistoryOnNavigate ?? !0;
        const s = ()=>{
            if (n.showHistoryHint && n.showHistoryHint() && !this.placeholder.endsWith(i) && !this.placeholder.endsWith(r) && this.history.getHistory().length) {
                const o = this.placeholder.endsWith(")") ? i : r, a = this.placeholder + o;
                n.showPlaceholderOnFocus && !fM(this.input) ? this.placeholder = a : this.setPlaceHolder(a);
            }
        };
        this._register(M7.observe(this.input, this._store, {
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
                    const c = this.placeholder.slice(0, this.placeholder.length - a.length);
                    return n.showPlaceholderOnFocus ? this.placeholder = c : this.setPlaceHolder(c), !0;
                } else return !1;
            };
            o(r) || o(i);
        });
    }
    addToHistory(e) {
        this.value && (e || this.value !== this.getCurrentValue()) && this.history.add(this.value);
    }
    prependHistory(e) {
        const t = this.getHistory();
        this.clearHistory(), e.forEach((n)=>{
            this.history.add(n);
        }), t.forEach((n)=>{
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
        let e = this.getNextValue();
        e && (e = e === this.value ? this.getNextValue() : e), this.value = e ?? "", yI(this.value ? this.value : S(24, null));
    }
    showPreviousValue() {
        this.addCurrentToHistoryOnNavigate && !this.history.has(this.value) && this.addToHistory();
        let e = this.getPreviousValue();
        e && (e = e === this.value ? this.getPreviousValue() : e), e && (this.value = e, yI(this.value));
    }
    clearHistory() {
        this.history.clear();
    }
    setPlaceHolder(e) {
        super.setPlaceHolder(e), this.setTooltip(e);
    }
    onBlur() {
        super.onBlur(), this._onDidBlur.fire();
    }
    onFocus() {
        super.onFocus(), this._onDidFocus.fire();
    }
    getCurrentValue() {
        let e = this.history.current();
        return e || (e = this.history.last(), this.history.next()), e;
    }
    getPreviousValue() {
        return this.history.previous() || this.history.first();
    }
    getNextValue() {
        return this.history.next();
    }
};

}
