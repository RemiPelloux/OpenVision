import { D, Di, Gt, Qe, Zm, _r, en, st, tt } from "./Iwo.js";
import { bo } from "./arrays.js";
import { NQ } from "./cssValue.js";
import { Dd, Hn, Pr, n0, ws } from "./dom_2.js";
import { Gg, voe } from "./event_2.js";
import { M5, Ma } from "./keyCodes.js";
import { nT, rv } from "./keyboardEvent.js";
import { F5, nRe } from "./listWidget.js";
import { kBt } from "./markdownRenderer.js";
import { Bt } from "./nls.js";
import { CGo } from "./selectBox.js";
import { wNy } from "./selectBoxCustom.css";
import { E } from "./tslib.es6.js";
import { Ex, Fj, Ii, JE, Mj, U3, WGd, bP, c2, fr, gz, li, qsi, sR, vHe } from "./ze.js";
var Oyt, wGo, jGd, Qsi, $Gd;
export { $Gd, Oyt, Qsi, jGd, wGo };
var __wakaru_CNy_initialized = false;
export function CNy() {
if (__wakaru_CNy_initialized) return;
__wakaru_CNy_initialized = true;
"use strict";
E(), Hn(), U3(), NQ(), voe(), nT(), kBt(), gz(), sR(), nRe(), CGo(), bo(), Gt(), Ma(), Qe(), Di(), wNy(), Bt(), Oyt = Ii, wGo = "selectOption.entry.template", jGd = class {
    get templateId() {
        return wGo;
    }
    renderTemplate(t) {
        const e = Object.create(null);
        return e.root = t, e.text = fr(t, Oyt(".option-text")), e.detail = fr(t, Oyt(".option-detail")), e.decoratorRight = fr(t, Oyt(".option-decorator-right")), e;
    }
    renderElement(t, e, n) {
        const i = n, r = t.text, s = t.detail, o = t.decoratorRight, a = t.isDisabled;
        i.text.textContent = r, i.detail.textContent = s || "", i.decoratorRight.innerText = o || "", a ? i.root.classList.add("option-disabled") : i.root.classList.remove("option-disabled");
    }
    disposeTemplate(t) {}
}, Qsi = class Zjn extends st {
    constructor(e, n, i, r, s){
        super(), this.options = [], this._currentSelection = 0, this._hasDetails = !1, this._skipLayout = !1, this._sticky = !1, this._isVisible = !1, this.styles = r, this.selectBoxOptions = s || Object.create(null), typeof this.selectBoxOptions.minBottomMargin != "number" ? this.selectBoxOptions.minBottomMargin = Zjn.DEFAULT_DROPDOWN_MINIMUM_BOTTOM_MARGIN : this.selectBoxOptions.minBottomMargin < 0 && (this.selectBoxOptions.minBottomMargin = 0), this.selectElement = document.createElement("select"), this.selectElement.className = "monaco-select-box monaco-select-box-dropdown-padding", typeof this.selectBoxOptions.ariaLabel == "string" && this.selectElement.setAttribute("aria-label", this.selectBoxOptions.ariaLabel), typeof this.selectBoxOptions.ariaDescription == "string" && this.selectElement.setAttribute("aria-description", this.selectBoxOptions.ariaDescription), this._onDidSelect = new tt, this._register(this._onDidSelect), this.registerListeners(), this.constructSelectDropDown(i), this.selected = n || 0, e && this.setOptions(e, n), this.initStyleSheet();
    }
    setTitle(e) {
        !this._hover && e ? this._hover = this._register(Fj().setupManagedHover(c2("mouse"), this.selectElement, e)) : this._hover && this._hover.update(e);
    }
    getHeight() {
        return 22;
    }
    getTemplateId() {
        return wGo;
    }
    constructSelectDropDown(e) {
        this.contextViewProvider = e, this.selectDropDownContainer = Ii(".monaco-select-box-dropdown-container"), this.selectDropDownContainer.classList.add("monaco-select-box-dropdown-padding"), this.selectionDetailsPane = fr(this.selectDropDownContainer, Oyt(".select-box-details-pane"));
        const n = fr(this.selectDropDownContainer, Oyt(".select-box-dropdown-container-width-control")), i = fr(n, Oyt(".width-control-div"));
        this.widthControlElement = document.createElement("span"), this.widthControlElement.className = "option-text-width-control", fr(i, this.widthControlElement), this._dropDownPosition = 0, this.styleElement = bP(this.selectDropDownContainer), this.selectDropDownContainer.setAttribute("draggable", "true"), this._register(li(this.selectDropDownContainer, Pr.DRAG_START, (r)=>{
            Dd.stop(r, !0);
        }));
    }
    registerListeners() {
        this._register(n0(this.selectElement, "change", (n)=>{
            this.selected = n.target.selectedIndex, this._onDidSelect.fire({
                index: n.target.selectedIndex,
                selected: n.target.value
            }), this.options[this.selected] && this.options[this.selected].text && this.setTitle(this.options[this.selected].text);
        })), this._register(li(this.selectElement, Pr.CLICK, (n)=>{
            Dd.stop(n), this._isVisible ? this.hideSelectDropDown(!0) : this.showSelectDropDown();
        })), this._register(li(this.selectElement, Pr.MOUSE_DOWN, (n)=>{
            Dd.stop(n);
        }));
        let e;
        this._register(li(this.selectElement, "touchstart", (n)=>{
            e = this._isVisible;
        })), this._register(li(this.selectElement, "touchend", (n)=>{
            Dd.stop(n), e ? this.hideSelectDropDown(!0) : this.showSelectDropDown();
        })), this._register(li(this.selectElement, Pr.KEY_DOWN, (n)=>{
            const i = new rv(n);
            let r = !1;
            _r ? (i.keyCode === 18 || i.keyCode === 16 || i.keyCode === 10 || i.keyCode === 3) && (r = !0) : (i.keyCode === 18 && i.altKey || i.keyCode === 16 && i.altKey || i.keyCode === 10 || i.keyCode === 3) && (r = !0), r && (this.showSelectDropDown(), Dd.stop(n, !0));
        }));
    }
    get onDidSelect() {
        return this._onDidSelect.event;
    }
    setOptions(e, n) {
        Zm(this.options, e, WGd) || (this.options = e, this.selectElement.options.length = 0, this._hasDetails = !1, this._cachedMaxDetailsHeight = void 0, this.options.forEach((i, r)=>{
            this.selectElement.add(this.createOption(i.text, r, i.isDisabled)), typeof i.description == "string" && (this._hasDetails = !0);
        })), n !== void 0 && (this.select(n), this._currentSelection = this.selected);
    }
    setEnabled(e) {
        this.selectElement.disabled = !e;
    }
    setOptionsList() {
        this.selectList?.splice(0, this.selectList.length, this.options);
    }
    select(e) {
        e >= 0 && e < this.options.length ? this.selected = e : e > this.options.length - 1 ? this.select(this.options.length - 1) : this.selected < 0 && (this.selected = 0), this.selectElement.selectedIndex = this.selected, this.options[this.selected] && this.options[this.selected].text && this.setTitle(this.options[this.selected].text);
    }
    setAriaLabel(e) {
        this.selectBoxOptions.ariaLabel = e, this.selectElement.setAttribute("aria-label", this.selectBoxOptions.ariaLabel);
    }
    focus() {
        this.selectElement && (this.selectElement.tabIndex = 0, this.selectElement.focus());
    }
    blur() {
        this.selectElement && (this.selectElement.tabIndex = -1, this.selectElement.blur());
    }
    setFocusable(e) {
        this.selectElement.tabIndex = e ? 0 : -1;
    }
    render(e) {
        this.container = e, e.classList.add("select-container"), e.appendChild(this.selectElement), this.styleSelectElement();
    }
    initStyleSheet() {
        const e = [];
        this.styles.listFocusBackground && e.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { background-color: ${this.styles.listFocusBackground} !important; }`), this.styles.listFocusForeground && e.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { color: ${this.styles.listFocusForeground} !important; }`), this.styles.decoratorRightForeground && e.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.focused) .option-decorator-right { color: ${this.styles.decoratorRightForeground}; }`), this.styles.selectBackground && this.styles.selectBorder && this.styles.selectBorder !== this.styles.selectBackground ? (e.push(`.monaco-select-box-dropdown-container { border: 1px solid ${this.styles.selectBorder} } `), e.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-top { border-top: 1px solid ${this.styles.selectBorder} } `), e.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-bottom { border-bottom: 1px solid ${this.styles.selectBorder} } `)) : this.styles.selectListBorder && (e.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-top { border-top: 1px solid ${this.styles.selectListBorder} } `), e.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-bottom { border-bottom: 1px solid ${this.styles.selectListBorder} } `)), this.styles.listHoverForeground && e.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { color: ${this.styles.listHoverForeground} !important; }`), this.styles.listHoverBackground && e.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { background-color: ${this.styles.listHoverBackground} !important; }`), this.styles.listFocusOutline && e.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { outline: 1.6px dotted ${this.styles.listFocusOutline} !important; outline-offset: -1.6px !important; }`), this.styles.listHoverOutline && e.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { outline: 1.6px dashed ${this.styles.listHoverOutline} !important; outline-offset: -1.6px !important; }`), e.push(".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.option-disabled.focused { background-color: transparent !important; color: inherit !important; outline: none !important; }"), e.push(".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.option-disabled:hover { background-color: transparent !important; color: inherit !important; outline: none !important; }"), this.styleElement.textContent = e.join(`
`);
    }
    styleSelectElement() {
        const e = this.styles.selectBackground ?? "", n = this.styles.selectForeground ?? "", i = this.styles.selectBorder ?? "";
        this.selectElement.style.backgroundColor = e, this.selectElement.style.color = n, this.selectElement.style.borderColor = i;
    }
    styleList() {
        const e = this.styles.selectBackground ?? "", n = vHe(this.styles.selectListBackground, e);
        this.selectDropDownListContainer.style.backgroundColor = n, this.selectionDetailsPane.style.backgroundColor = n;
        const i = this.styles.focusBorder ?? "";
        this.selectDropDownContainer.style.outlineColor = i, this.selectDropDownContainer.style.outlineOffset = "-1px", this.selectList.style(this.styles);
    }
    createOption(e, n, i) {
        const r = document.createElement("option");
        return r.value = e, r.text = e, r.disabled = !!i, r;
    }
    showSelectDropDown() {
        this.selectionDetailsPane.innerText = "", !(!this.contextViewProvider || this._isVisible) && (this.createSelectList(this.selectDropDownContainer), this.setOptionsList(), this.contextViewProvider.showContextView({
            getAnchor: ()=>this.selectElement,
            render: (e)=>this.renderSelectDropDown(e, !0),
            layout: ()=>{
                this.layoutSelectDropDown();
            },
            onHide: ()=>{
                this.selectDropDownContainer.classList.remove("visible"), this.selectElement.classList.remove("synthetic-focus");
            },
            anchorPosition: this._dropDownPosition
        }, this.selectBoxOptions.optionsAsChildren ? this.container : void 0), this._isVisible = !0, this.hideSelectDropDown(!1), this.contextViewProvider.showContextView({
            getAnchor: ()=>this.selectElement,
            render: (e)=>this.renderSelectDropDown(e),
            layout: ()=>this.layoutSelectDropDown(),
            onHide: ()=>{
                this.selectDropDownContainer.classList.remove("visible"), this.selectElement.classList.remove("synthetic-focus");
            },
            anchorPosition: this._dropDownPosition
        }, this.selectBoxOptions.optionsAsChildren ? this.container : void 0), this._currentSelection = this.selected, this._isVisible = !0, this.selectElement.setAttribute("aria-expanded", "true"));
    }
    hideSelectDropDown(e) {
        !this.contextViewProvider || !this._isVisible || (this._isVisible = !1, this.selectElement.setAttribute("aria-expanded", "false"), e && this.selectElement.focus(), this.contextViewProvider.hideContextView());
    }
    renderSelectDropDown(e, n) {
        return e.appendChild(this.selectDropDownContainer), this.layoutSelectDropDown(n), {
            dispose: ()=>{
                this.selectDropDownContainer.remove();
            }
        };
    }
    measureMaxDetailsHeight() {
        let e = 0;
        return this.options.forEach((n, i)=>{
            this.updateDetail(i), this.selectionDetailsPane.offsetHeight > e && (e = this.selectionDetailsPane.offsetHeight);
        }), e;
    }
    layoutSelectDropDown(e) {
        if (this._skipLayout) return !1;
        if (this.selectList) {
            this.selectDropDownContainer.classList.add("visible");
            const n = ws(this.selectElement), i = Ex(this.selectElement), r = ws(this.selectElement).getComputedStyle(this.selectElement), s = parseFloat(r.getPropertyValue("--dropdown-padding-top")) + parseFloat(r.getPropertyValue("--dropdown-padding-bottom")), o = n.innerHeight - i.top - i.height - (this.selectBoxOptions.minBottomMargin || 0), a = i.top - Zjn.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN, l = this.selectElement.offsetWidth, c = this.setWidthControlElement(this.widthControlElement), u = Math.max(c, Math.round(l)).toString() + "px";
            this.selectDropDownContainer.style.width = u, this.selectList.getHTMLElement().style.height = "", this.selectList.layout();
            let d = this.selectList.contentHeight;
            this._hasDetails && this._cachedMaxDetailsHeight === void 0 && (this._cachedMaxDetailsHeight = this.measureMaxDetailsHeight());
            const h = this._hasDetails ? this._cachedMaxDetailsHeight : 0, p = d + s + h, g = Math.floor((o - s - h) / this.getHeight()), f = Math.floor((a - s - h) / this.getHeight());
            if (e) return i.top + i.height > n.innerHeight - 22 || i.top < Zjn.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN || g < 1 && f < 1 ? !1 : (g < Zjn.DEFAULT_MINIMUM_VISIBLE_OPTIONS && f > g && this.options.length > g ? (this._dropDownPosition = 1, this.selectDropDownListContainer.remove(), this.selectionDetailsPane.remove(), this.selectDropDownContainer.appendChild(this.selectionDetailsPane), this.selectDropDownContainer.appendChild(this.selectDropDownListContainer), this.selectionDetailsPane.classList.remove("border-top"), this.selectionDetailsPane.classList.add("border-bottom")) : (this._dropDownPosition = 0, this.selectDropDownListContainer.remove(), this.selectionDetailsPane.remove(), this.selectDropDownContainer.appendChild(this.selectDropDownListContainer), this.selectDropDownContainer.appendChild(this.selectionDetailsPane), this.selectionDetailsPane.classList.remove("border-bottom"), this.selectionDetailsPane.classList.add("border-top")), !0);
            if (i.top + i.height > n.innerHeight - 22 || i.top < Zjn.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN || this._dropDownPosition === 0 && g < 1 || this._dropDownPosition === 1 && f < 1) return this.hideSelectDropDown(!0), !1;
            if (this._dropDownPosition === 0) {
                if (this._isVisible && g + f < 1) return this.hideSelectDropDown(!0), !1;
                p > o && (d = g * this.getHeight());
            } else p > a && (d = f * this.getHeight());
            return this.selectList.layout(d), this.selectList.domFocus(), this.selectList.length > 0 && (this.selectList.setFocus([
                this.selected || 0
            ]), this.selectList.reveal(this.selectList.getFocus()[0] || 0)), this._hasDetails ? (this.selectList.getHTMLElement().style.height = d + s + "px", this.selectDropDownContainer.style.height = "") : this.selectDropDownContainer.style.height = d + s + "px", this.updateDetail(this.selected), this.selectDropDownContainer.style.width = u, this.selectDropDownListContainer.setAttribute("tabindex", "0"), this.selectElement.classList.add("synthetic-focus"), this.selectDropDownContainer.classList.add("synthetic-focus"), !0;
        } else return !1;
    }
    setWidthControlElement(e) {
        let n = 0;
        if (e) {
            let i = 0, r = 0;
            this.options.forEach((s, o)=>{
                const a = s.detail ? s.detail.length : 0, l = s.decoratorRight ? s.decoratorRight.length : 0, c = s.text.length + a + l;
                c > r && (i = o, r = c);
            }), e.textContent = this.options[i].text + (this.options[i].decoratorRight ? this.options[i].decoratorRight + " " : ""), n = Mj(e);
        }
        return n;
    }
    createSelectList(e) {
        if (this.selectList) return;
        this.selectDropDownListContainer = fr(e, Oyt(".select-box-dropdown-list-container")), this.listRenderer = new jGd, this.selectList = this._register(new F5("SelectBoxCustom", this.selectDropDownListContainer, this, [
            this.listRenderer
        ], {
            useShadows: !1,
            verticalScrollMode: 3,
            keyboardSupport: !1,
            mouseSupport: !1,
            accessibilityProvider: {
                getAriaLabel: (r)=>{
                    let s = r.text;
                    return r.detail && (s += `. ${r.detail}`), r.decoratorRight && (s += `. ${r.decoratorRight}`), r.description && (s += `. ${r.description}`), s;
                },
                getWidgetAriaLabel: ()=>D(28, null),
                getRole: ()=>_r ? "" : "option",
                getWidgetRole: ()=>"listbox"
            }
        })), this.selectBoxOptions.ariaLabel && (this.selectList.ariaLabel = this.selectBoxOptions.ariaLabel);
        const n = this._register(new Gg(this.selectDropDownListContainer, "keydown")), i = en.chain(n.event, (r)=>r.filter(()=>this.selectList.length > 0).map((s)=>new rv(s)));
        this._register(en.chain(i, (r)=>r.filter((s)=>s.keyCode === 3))(this.onEnter, this)), this._register(en.chain(i, (r)=>r.filter((s)=>s.keyCode === 2))(this.onEnter, this)), this._register(en.chain(i, (r)=>r.filter((s)=>s.keyCode === 9))(this.onEscape, this)), this._register(en.chain(i, (r)=>r.filter((s)=>s.keyCode === 16))(this.onUpArrow, this)), this._register(en.chain(i, (r)=>r.filter((s)=>s.keyCode === 18))(this.onDownArrow, this)), this._register(en.chain(i, (r)=>r.filter((s)=>s.keyCode === 12))(this.onPageDown, this)), this._register(en.chain(i, (r)=>r.filter((s)=>s.keyCode === 11))(this.onPageUp, this)), this._register(en.chain(i, (r)=>r.filter((s)=>s.keyCode === 14))(this.onHome, this)), this._register(en.chain(i, (r)=>r.filter((s)=>s.keyCode === 13))(this.onEnd, this)), this._register(en.chain(i, (r)=>r.filter((s)=>s.keyCode >= 21 && s.keyCode <= 56 || s.keyCode >= 85 && s.keyCode <= 113))(this.onCharacter, this)), this._register(li(this.selectList.getHTMLElement(), Pr.POINTER_UP, (r)=>this.onPointerUp(r))), this._register(this.selectList.onMouseOver((r)=>typeof r.index < "u" && this.selectList.setFocus([
                r.index
            ]))), this._register(this.selectList.onDidChangeFocus((r)=>this.onListFocus(r))), this._register(li(this.selectDropDownContainer, Pr.FOCUS_OUT, (r)=>{
            !this._isVisible || JE(r.relatedTarget, this.selectDropDownContainer) || this.onListBlur();
        })), this.selectList.getHTMLElement().setAttribute("aria-label", this.selectBoxOptions.ariaLabel || ""), this.selectList.getHTMLElement().setAttribute("aria-expanded", "true"), this.styleList();
    }
    onPointerUp(e) {
        if (!this.selectList.length) return;
        Dd.stop(e);
        const n = e.target;
        if (!n || n.classList.contains("slider")) return;
        const i = n.closest(".monaco-list-row");
        if (!i) return;
        const r = Number(i.getAttribute("data-index")), s = i.classList.contains("option-disabled");
        r >= 0 && r < this.options.length && !s && (this.selected = r, this.select(this.selected), this.selectList.setFocus([
            this.selected
        ]), this.selectList.reveal(this.selectList.getFocus()[0]), this.selected !== this._currentSelection && (this._currentSelection = this.selected, this._onDidSelect.fire({
            index: this.selectElement.selectedIndex,
            selected: this.options[this.selected].text
        }), this.options[this.selected] && this.options[this.selected].text && this.setTitle(this.options[this.selected].text)), this.hideSelectDropDown(!0));
    }
    onListBlur() {
        this._sticky || (this.selected !== this._currentSelection && this.select(this._currentSelection), this.hideSelectDropDown(!1));
    }
    renderDescriptionMarkdown(e, n) {
        const i = (s)=>{
            for(let o = 0; o < s.childNodes.length; o++){
                const a = s.childNodes.item(o);
                (a.tagName && a.tagName.toLowerCase()) === "img" ? a.remove() : i(a);
            }
        }, r = qsi({
            value: e,
            supportThemeIcons: !0
        }, {
            actionHandler: n
        });
        return r.element.classList.add("select-box-description-markdown"), i(r.element), r.element;
    }
    onListFocus(e) {
        !this._isVisible || !this._hasDetails || this.updateDetail(e.indexes[0]);
    }
    updateDetail(e) {
        this.selectionDetailsPane.innerText = "";
        const n = this.options[e], i = n?.description ?? "", r = n?.descriptionIsMarkdown ?? !1;
        if (i) {
            if (r) {
                const s = n.descriptionMarkdownActionHandler;
                this.selectionDetailsPane.appendChild(this.renderDescriptionMarkdown(i, s));
            } else this.selectionDetailsPane.innerText = i;
            this.selectionDetailsPane.style.display = "block";
        } else this.selectionDetailsPane.style.display = "none";
        this._skipLayout = !0, this.contextViewProvider.layout(), this._skipLayout = !1;
    }
    onEscape(e) {
        Dd.stop(e), this.select(this._currentSelection), this.hideSelectDropDown(!0);
    }
    onEnter(e) {
        Dd.stop(e), this.selected !== this._currentSelection && (this._currentSelection = this.selected, this._onDidSelect.fire({
            index: this.selectElement.selectedIndex,
            selected: this.options[this.selected].text
        }), this.options[this.selected] && this.options[this.selected].text && this.setTitle(this.options[this.selected].text)), this.hideSelectDropDown(!0);
    }
    onDownArrow(e) {
        if (this.selected < this.options.length - 1) {
            Dd.stop(e, !0);
            const n = this.options[this.selected + 1].isDisabled;
            if (n && this.options.length > this.selected + 2) this.selected += 2;
            else {
                if (n) return;
                this.selected++;
            }
            this.select(this.selected), this.selectList.setFocus([
                this.selected
            ]), this.selectList.reveal(this.selectList.getFocus()[0]);
        }
    }
    onUpArrow(e) {
        this.selected > 0 && (Dd.stop(e, !0), this.options[this.selected - 1].isDisabled && this.selected > 1 ? this.selected -= 2 : this.selected--, this.select(this.selected), this.selectList.setFocus([
            this.selected
        ]), this.selectList.reveal(this.selectList.getFocus()[0]));
    }
    onPageUp(e) {
        Dd.stop(e), this.selectList.focusPreviousPage(), setTimeout(()=>{
            this.selected = this.selectList.getFocus()[0], this.options[this.selected].isDisabled && this.selected < this.options.length - 1 && (this.selected++, this.selectList.setFocus([
                this.selected
            ])), this.selectList.reveal(this.selected), this.select(this.selected);
        }, 1);
    }
    onPageDown(e) {
        Dd.stop(e), this.selectList.focusNextPage(), setTimeout(()=>{
            this.selected = this.selectList.getFocus()[0], this.options[this.selected].isDisabled && this.selected > 0 && (this.selected--, this.selectList.setFocus([
                this.selected
            ])), this.selectList.reveal(this.selected), this.select(this.selected);
        }, 1);
    }
    onHome(e) {
        Dd.stop(e), !(this.options.length < 2) && (this.selected = 0, this.options[this.selected].isDisabled && this.selected > 1 && this.selected++, this.selectList.setFocus([
            this.selected
        ]), this.selectList.reveal(this.selected), this.select(this.selected));
    }
    onEnd(e) {
        Dd.stop(e), !(this.options.length < 2) && (this.selected = this.options.length - 1, this.options[this.selected].isDisabled && this.selected > 1 && this.selected--, this.selectList.setFocus([
            this.selected
        ]), this.selectList.reveal(this.selected), this.select(this.selected));
    }
    onCharacter(e) {
        const n = M5.toString(e.keyCode);
        let i = -1;
        for(let r = 0; r < this.options.length - 1; r++)if (i = (r + this.selected + 1) % this.options.length, this.options[i].text.charAt(0).toUpperCase() === n && !this.options[i].isDisabled) {
            this.select(i), this.selectList.setFocus([
                i
            ]), this.selectList.reveal(this.selectList.getFocus()[0]), Dd.stop(e);
            break;
        }
    }
    dispose() {
        this.hideSelectDropDown(!1), super.dispose();
    }
}, Qsi.DEFAULT_DROPDOWN_MINIMUM_BOTTOM_MARGIN = 32, Qsi.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN = 2, Qsi.DEFAULT_MINIMUM_VISIBLE_OPTIONS = 3, $Gd = Qsi;

}
