import { Ai, Ct, S, Se, bt, jn, nh, ve, we } from "./HVr.js";
import { dr } from "./arrays.js";
import { MO } from "./cssValue.js";
import { Fn, Gc, en, xi, zp } from "./dom_2.js";
import { B7, mp } from "./event_2.js";
import { PP, Pr } from "./keyCodes.js";
import { gu, jg } from "./keyboardEvent.js";
import { mR, qV } from "./listWidget.js";
import { G7 } from "./markdownRenderer.js";
import { rt } from "./nls.js";
import { $f, LP, Mwe, Nk, V7, Ve, Xt, Ye, dS, f8c, iRe, ih, iw, nw, p5 } from "./qIc.js";
import { rKe } from "./selectBox.js";
import { Ryg } from "./selectBoxCustom.css";
import { x } from "./tslib.es6.js";
var iKe, Sns, p8c, yvn, m8c;
export { Sns, iKe, m8c, p8c, yvn };
var __wakaru_Dyg_initialized = false;
export function Dyg() {
if (__wakaru_Dyg_initialized) return;
__wakaru_Dyg_initialized = true;
"use strict";
x(), en(), nw(), MO(), B7(), jg(), G7(), V7(), $f(), qV(), rKe(), dr(), bt(), Pr(), Se(), jn(), Ryg(), rt(), iKe = Ve, Sns = "selectOption.entry.template", p8c = class {
    get templateId() {
        return Sns;
    }
    renderTemplate(e) {
        const t = Object.create(null);
        return t.root = e, t.text = Ye(e, iKe(".option-text")), t.detail = Ye(e, iKe(".option-detail")), t.decoratorRight = Ye(e, iKe(".option-decorator-right")), t;
    }
    renderElement(e, t, n) {
        const i = n, r = e.text, s = e.detail, o = e.decoratorRight, a = e.isDisabled;
        i.text.textContent = r, i.detail.textContent = s || "", i.decoratorRight.innerText = o || "", a ? i.root.classList.add("option-disabled") : i.root.classList.remove("option-disabled");
    }
    disposeTemplate(e) {}
}, yvn = class Ein extends we {
    constructor(t, n, i, r, s){
        super(), this.options = [], this._currentSelection = 0, this._hasDetails = !1, this._skipLayout = !1, this._sticky = !1, this._isVisible = !1, this.styles = r, this.selectBoxOptions = s || Object.create(null), typeof this.selectBoxOptions.minBottomMargin != "number" ? this.selectBoxOptions.minBottomMargin = Ein.DEFAULT_DROPDOWN_MINIMUM_BOTTOM_MARGIN : this.selectBoxOptions.minBottomMargin < 0 && (this.selectBoxOptions.minBottomMargin = 0), this.selectElement = document.createElement("select"), this.selectElement.className = "monaco-select-box monaco-select-box-dropdown-padding", typeof this.selectBoxOptions.ariaLabel == "string" && this.selectElement.setAttribute("aria-label", this.selectBoxOptions.ariaLabel), typeof this.selectBoxOptions.ariaDescription == "string" && this.selectElement.setAttribute("aria-description", this.selectBoxOptions.ariaDescription), this._onDidSelect = new ve, this._register(this._onDidSelect), this.registerListeners(), this.constructSelectDropDown(i), this.selected = n || 0, t && this.setOptions(t, n), this.initStyleSheet();
    }
    setTitle(t) {
        !this._hover && t ? this._hover = this._register(p5().setupManagedHover(ih("mouse"), this.selectElement, t)) : this._hover && this._hover.update(t);
    }
    getHeight() {
        return 22;
    }
    getTemplateId() {
        return Sns;
    }
    constructSelectDropDown(t) {
        this.contextViewProvider = t, this.selectDropDownContainer = Ve(".monaco-select-box-dropdown-container"), this.selectDropDownContainer.classList.add("monaco-select-box-dropdown-padding"), this.selectionDetailsPane = Ye(this.selectDropDownContainer, iKe(".select-box-details-pane"));
        const n = Ye(this.selectDropDownContainer, iKe(".select-box-dropdown-container-width-control")), i = Ye(n, iKe(".width-control-div"));
        this.widthControlElement = document.createElement("span"), this.widthControlElement.className = "option-text-width-control", Ye(i, this.widthControlElement), this._dropDownPosition = 0, this.styleElement = dS(this.selectDropDownContainer), this.selectDropDownContainer.setAttribute("draggable", "true"), this._register(Xt(this.selectDropDownContainer, Fn.DRAG_START, (r)=>{
            Gc.stop(r, !0);
        }));
    }
    registerListeners() {
        this._register(zp(this.selectElement, "change", (n)=>{
            this.selected = n.target.selectedIndex, this._onDidSelect.fire({
                index: n.target.selectedIndex,
                selected: n.target.value
            }), this.options[this.selected] && this.options[this.selected].text && this.setTitle(this.options[this.selected].text);
        })), this._register(Xt(this.selectElement, Fn.CLICK, (n)=>{
            Gc.stop(n), this._isVisible ? this.hideSelectDropDown(!0) : this.showSelectDropDown();
        })), this._register(Xt(this.selectElement, Fn.MOUSE_DOWN, (n)=>{
            Gc.stop(n);
        }));
        let t;
        this._register(Xt(this.selectElement, "touchstart", (n)=>{
            t = this._isVisible;
        })), this._register(Xt(this.selectElement, "touchend", (n)=>{
            Gc.stop(n), t ? this.hideSelectDropDown(!0) : this.showSelectDropDown();
        })), this._register(Xt(this.selectElement, Fn.KEY_DOWN, (n)=>{
            const i = new gu(n);
            let r = !1;
            Ai ? (i.keyCode === 18 || i.keyCode === 16 || i.keyCode === 10 || i.keyCode === 3) && (r = !0) : (i.keyCode === 18 && i.altKey || i.keyCode === 16 && i.altKey || i.keyCode === 10 || i.keyCode === 3) && (r = !0), r && (this.showSelectDropDown(), Gc.stop(n, !0));
        }));
    }
    get onDidSelect() {
        return this._onDidSelect.event;
    }
    setOptions(t, n) {
        nh(this.options, t, f8c) || (this.options = t, this.selectElement.options.length = 0, this._hasDetails = !1, this._cachedMaxDetailsHeight = void 0, this.options.forEach((i, r)=>{
            this.selectElement.add(this.createOption(i.text, r, i.isDisabled)), typeof i.description == "string" && (this._hasDetails = !0);
        })), n !== void 0 && (this.select(n), this._currentSelection = this.selected);
    }
    setEnabled(t) {
        this.selectElement.disabled = !t;
    }
    setOptionsList() {
        this.selectList?.splice(0, this.selectList.length, this.options);
    }
    select(t) {
        t >= 0 && t < this.options.length ? this.selected = t : t > this.options.length - 1 ? this.select(this.options.length - 1) : this.selected < 0 && (this.selected = 0), this.selectElement.selectedIndex = this.selected, this.options[this.selected] && this.options[this.selected].text && this.setTitle(this.options[this.selected].text);
    }
    setAriaLabel(t) {
        this.selectBoxOptions.ariaLabel = t, this.selectElement.setAttribute("aria-label", this.selectBoxOptions.ariaLabel);
    }
    focus() {
        this.selectElement && (this.selectElement.tabIndex = 0, this.selectElement.focus());
    }
    blur() {
        this.selectElement && (this.selectElement.tabIndex = -1, this.selectElement.blur());
    }
    setFocusable(t) {
        this.selectElement.tabIndex = t ? 0 : -1;
    }
    render(t) {
        this.container = t, t.classList.add("select-container"), t.appendChild(this.selectElement), this.styleSelectElement();
    }
    initStyleSheet() {
        const t = [];
        this.styles.listFocusBackground && t.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { background-color: ${this.styles.listFocusBackground} !important; }`), this.styles.listFocusForeground && t.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { color: ${this.styles.listFocusForeground} !important; }`), this.styles.decoratorRightForeground && t.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.focused) .option-decorator-right { color: ${this.styles.decoratorRightForeground}; }`), this.styles.selectBackground && this.styles.selectBorder && this.styles.selectBorder !== this.styles.selectBackground ? (t.push(`.monaco-select-box-dropdown-container { border: 1px solid ${this.styles.selectBorder} } `), t.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-top { border-top: 1px solid ${this.styles.selectBorder} } `), t.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-bottom { border-bottom: 1px solid ${this.styles.selectBorder} } `)) : this.styles.selectListBorder && (t.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-top { border-top: 1px solid ${this.styles.selectListBorder} } `), t.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-bottom { border-bottom: 1px solid ${this.styles.selectListBorder} } `)), this.styles.listHoverForeground && t.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { color: ${this.styles.listHoverForeground} !important; }`), this.styles.listHoverBackground && t.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { background-color: ${this.styles.listHoverBackground} !important; }`), this.styles.listFocusOutline && t.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { outline: 1.6px dotted ${this.styles.listFocusOutline} !important; outline-offset: -1.6px !important; }`), this.styles.listHoverOutline && t.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { outline: 1.6px dashed ${this.styles.listHoverOutline} !important; outline-offset: -1.6px !important; }`), t.push(".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.option-disabled.focused { background-color: transparent !important; color: inherit !important; outline: none !important; }"), t.push(".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.option-disabled:hover { background-color: transparent !important; color: inherit !important; outline: none !important; }"), this.styleElement.textContent = t.join(`
`);
    }
    styleSelectElement() {
        const t = this.styles.selectBackground ?? "", n = this.styles.selectForeground ?? "", i = this.styles.selectBorder ?? "";
        this.selectElement.style.backgroundColor = t, this.selectElement.style.color = n, this.selectElement.style.borderColor = i;
    }
    styleList() {
        const t = this.styles.selectBackground ?? "", n = iRe(this.styles.selectListBackground, t);
        this.selectDropDownListContainer.style.backgroundColor = n, this.selectionDetailsPane.style.backgroundColor = n;
        const i = this.styles.focusBorder ?? "";
        this.selectDropDownContainer.style.outlineColor = i, this.selectDropDownContainer.style.outlineOffset = "-1px", this.selectList.style(this.styles);
    }
    createOption(t, n, i) {
        const r = document.createElement("option");
        return r.value = t, r.text = t, r.disabled = !!i, r;
    }
    showSelectDropDown() {
        this.selectionDetailsPane.innerText = "", !(!this.contextViewProvider || this._isVisible) && (this.createSelectList(this.selectDropDownContainer), this.setOptionsList(), this.contextViewProvider.showContextView({
            getAnchor: ()=>this.selectElement,
            render: (t)=>this.renderSelectDropDown(t, !0),
            layout: ()=>{
                this.layoutSelectDropDown();
            },
            onHide: ()=>{
                this.selectDropDownContainer.classList.remove("visible"), this.selectElement.classList.remove("synthetic-focus");
            },
            anchorPosition: this._dropDownPosition
        }, this.selectBoxOptions.optionsAsChildren ? this.container : void 0), this._isVisible = !0, this.hideSelectDropDown(!1), this.contextViewProvider.showContextView({
            getAnchor: ()=>this.selectElement,
            render: (t)=>this.renderSelectDropDown(t),
            layout: ()=>this.layoutSelectDropDown(),
            onHide: ()=>{
                this.selectDropDownContainer.classList.remove("visible"), this.selectElement.classList.remove("synthetic-focus");
            },
            anchorPosition: this._dropDownPosition
        }, this.selectBoxOptions.optionsAsChildren ? this.container : void 0), this._currentSelection = this.selected, this._isVisible = !0, this.selectElement.setAttribute("aria-expanded", "true"));
    }
    hideSelectDropDown(t) {
        !this.contextViewProvider || !this._isVisible || (this._isVisible = !1, this.selectElement.setAttribute("aria-expanded", "false"), t && this.selectElement.focus(), this.contextViewProvider.hideContextView());
    }
    renderSelectDropDown(t, n) {
        return t.appendChild(this.selectDropDownContainer), this.layoutSelectDropDown(n), {
            dispose: ()=>{
                this.selectDropDownContainer.remove();
            }
        };
    }
    measureMaxDetailsHeight() {
        let t = 0;
        return this.options.forEach((n, i)=>{
            this.updateDetail(i), this.selectionDetailsPane.offsetHeight > t && (t = this.selectionDetailsPane.offsetHeight);
        }), t;
    }
    layoutSelectDropDown(t) {
        if (this._skipLayout) return !1;
        if (this.selectList) {
            this.selectDropDownContainer.classList.add("visible");
            const n = xi(this.selectElement), i = Nk(this.selectElement), r = xi(this.selectElement).getComputedStyle(this.selectElement), s = parseFloat(r.getPropertyValue("--dropdown-padding-top")) + parseFloat(r.getPropertyValue("--dropdown-padding-bottom")), o = n.innerHeight - i.top - i.height - (this.selectBoxOptions.minBottomMargin || 0), a = i.top - Ein.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN, c = this.selectElement.offsetWidth, l = this.setWidthControlElement(this.widthControlElement), u = Math.max(l, Math.round(c)).toString() + "px";
            this.selectDropDownContainer.style.width = u, this.selectList.getHTMLElement().style.height = "", this.selectList.layout();
            let h = this.selectList.contentHeight;
            this._hasDetails && this._cachedMaxDetailsHeight === void 0 && (this._cachedMaxDetailsHeight = this.measureMaxDetailsHeight());
            const p = this._hasDetails ? this._cachedMaxDetailsHeight : 0, g = h + s + p, f = Math.floor((o - s - p) / this.getHeight()), v = Math.floor((a - s - p) / this.getHeight());
            if (t) return i.top + i.height > n.innerHeight - 22 || i.top < Ein.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN || f < 1 && v < 1 ? !1 : (f < Ein.DEFAULT_MINIMUM_VISIBLE_OPTIONS && v > f && this.options.length > f ? (this._dropDownPosition = 1, this.selectDropDownListContainer.remove(), this.selectionDetailsPane.remove(), this.selectDropDownContainer.appendChild(this.selectionDetailsPane), this.selectDropDownContainer.appendChild(this.selectDropDownListContainer), this.selectionDetailsPane.classList.remove("border-top"), this.selectionDetailsPane.classList.add("border-bottom")) : (this._dropDownPosition = 0, this.selectDropDownListContainer.remove(), this.selectionDetailsPane.remove(), this.selectDropDownContainer.appendChild(this.selectDropDownListContainer), this.selectDropDownContainer.appendChild(this.selectionDetailsPane), this.selectionDetailsPane.classList.remove("border-bottom"), this.selectionDetailsPane.classList.add("border-top")), !0);
            if (i.top + i.height > n.innerHeight - 22 || i.top < Ein.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN || this._dropDownPosition === 0 && f < 1 || this._dropDownPosition === 1 && v < 1) return this.hideSelectDropDown(!0), !1;
            if (this._dropDownPosition === 0) {
                if (this._isVisible && f + v < 1) return this.hideSelectDropDown(!0), !1;
                g > o && (h = f * this.getHeight());
            } else g > a && (h = v * this.getHeight());
            return this.selectList.layout(h), this.selectList.domFocus(), this.selectList.length > 0 && (this.selectList.setFocus([
                this.selected || 0
            ]), this.selectList.reveal(this.selectList.getFocus()[0] || 0)), this._hasDetails ? (this.selectList.getHTMLElement().style.height = h + s + "px", this.selectDropDownContainer.style.height = "") : this.selectDropDownContainer.style.height = h + s + "px", this.updateDetail(this.selected), this.selectDropDownContainer.style.width = u, this.selectDropDownListContainer.setAttribute("tabindex", "0"), this.selectElement.classList.add("synthetic-focus"), this.selectDropDownContainer.classList.add("synthetic-focus"), !0;
        } else return !1;
    }
    setWidthControlElement(t) {
        let n = 0;
        if (t) {
            let i = 0, r = 0;
            this.options.forEach((s, o)=>{
                const a = s.detail ? s.detail.length : 0, c = s.decoratorRight ? s.decoratorRight.length : 0, l = s.text.length + a + c;
                l > r && (i = o, r = l);
            }), t.textContent = this.options[i].text + (this.options[i].decoratorRight ? this.options[i].decoratorRight + " " : ""), n = LP(t);
        }
        return n;
    }
    createSelectList(t) {
        if (this.selectList) return;
        this.selectDropDownListContainer = Ye(t, iKe(".select-box-dropdown-list-container")), this.listRenderer = new p8c, this.selectList = this._register(new mR("SelectBoxCustom", this.selectDropDownListContainer, this, [
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
                getWidgetAriaLabel: ()=>S(28, null),
                getRole: ()=>Ai ? "" : "option",
                getWidgetRole: ()=>"listbox"
            }
        })), this.selectBoxOptions.ariaLabel && (this.selectList.ariaLabel = this.selectBoxOptions.ariaLabel);
        const n = this._register(new mp(this.selectDropDownListContainer, "keydown")), i = Ct.chain(n.event, (r)=>r.filter(()=>this.selectList.length > 0).map((s)=>new gu(s)));
        this._register(Ct.chain(i, (r)=>r.filter((s)=>s.keyCode === 3))(this.onEnter, this)), this._register(Ct.chain(i, (r)=>r.filter((s)=>s.keyCode === 2))(this.onEnter, this)), this._register(Ct.chain(i, (r)=>r.filter((s)=>s.keyCode === 9))(this.onEscape, this)), this._register(Ct.chain(i, (r)=>r.filter((s)=>s.keyCode === 16))(this.onUpArrow, this)), this._register(Ct.chain(i, (r)=>r.filter((s)=>s.keyCode === 18))(this.onDownArrow, this)), this._register(Ct.chain(i, (r)=>r.filter((s)=>s.keyCode === 12))(this.onPageDown, this)), this._register(Ct.chain(i, (r)=>r.filter((s)=>s.keyCode === 11))(this.onPageUp, this)), this._register(Ct.chain(i, (r)=>r.filter((s)=>s.keyCode === 14))(this.onHome, this)), this._register(Ct.chain(i, (r)=>r.filter((s)=>s.keyCode === 13))(this.onEnd, this)), this._register(Ct.chain(i, (r)=>r.filter((s)=>s.keyCode >= 21 && s.keyCode <= 56 || s.keyCode >= 85 && s.keyCode <= 113))(this.onCharacter, this)), this._register(Xt(this.selectList.getHTMLElement(), Fn.POINTER_UP, (r)=>this.onPointerUp(r))), this._register(this.selectList.onMouseOver((r)=>typeof r.index < "u" && this.selectList.setFocus([
                r.index
            ]))), this._register(this.selectList.onDidChangeFocus((r)=>this.onListFocus(r))), this._register(Xt(this.selectDropDownContainer, Fn.FOCUS_OUT, (r)=>{
            !this._isVisible || iw(r.relatedTarget, this.selectDropDownContainer) || this.onListBlur();
        })), this.selectList.getHTMLElement().setAttribute("aria-label", this.selectBoxOptions.ariaLabel || ""), this.selectList.getHTMLElement().setAttribute("aria-expanded", "true"), this.styleList();
    }
    onPointerUp(t) {
        if (!this.selectList.length) return;
        Gc.stop(t);
        const n = t.target;
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
    renderDescriptionMarkdown(t, n) {
        const i = (s)=>{
            for(let o = 0; o < s.childNodes.length; o++){
                const a = s.childNodes.item(o);
                (a.tagName && a.tagName.toLowerCase()) === "img" ? a.remove() : i(a);
            }
        }, r = Mwe({
            value: t,
            supportThemeIcons: !0
        }, {
            actionHandler: n
        });
        return r.element.classList.add("select-box-description-markdown"), i(r.element), r.element;
    }
    onListFocus(t) {
        !this._isVisible || !this._hasDetails || this.updateDetail(t.indexes[0]);
    }
    updateDetail(t) {
        this.selectionDetailsPane.innerText = "";
        const n = this.options[t], i = n?.description ?? "", r = n?.descriptionIsMarkdown ?? !1;
        if (i) {
            if (r) {
                const s = n.descriptionMarkdownActionHandler;
                this.selectionDetailsPane.appendChild(this.renderDescriptionMarkdown(i, s));
            } else this.selectionDetailsPane.innerText = i;
            this.selectionDetailsPane.style.display = "block";
        } else this.selectionDetailsPane.style.display = "none";
        this._skipLayout = !0, this.contextViewProvider.layout(), this._skipLayout = !1;
    }
    onEscape(t) {
        Gc.stop(t), this.select(this._currentSelection), this.hideSelectDropDown(!0);
    }
    onEnter(t) {
        Gc.stop(t), this.selected !== this._currentSelection && (this._currentSelection = this.selected, this._onDidSelect.fire({
            index: this.selectElement.selectedIndex,
            selected: this.options[this.selected].text
        }), this.options[this.selected] && this.options[this.selected].text && this.setTitle(this.options[this.selected].text)), this.hideSelectDropDown(!0);
    }
    onDownArrow(t) {
        if (this.selected < this.options.length - 1) {
            Gc.stop(t, !0);
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
    onUpArrow(t) {
        this.selected > 0 && (Gc.stop(t, !0), this.options[this.selected - 1].isDisabled && this.selected > 1 ? this.selected -= 2 : this.selected--, this.select(this.selected), this.selectList.setFocus([
            this.selected
        ]), this.selectList.reveal(this.selectList.getFocus()[0]));
    }
    onPageUp(t) {
        Gc.stop(t), this.selectList.focusPreviousPage(), setTimeout(()=>{
            this.selected = this.selectList.getFocus()[0], this.options[this.selected].isDisabled && this.selected < this.options.length - 1 && (this.selected++, this.selectList.setFocus([
                this.selected
            ])), this.selectList.reveal(this.selected), this.select(this.selected);
        }, 1);
    }
    onPageDown(t) {
        Gc.stop(t), this.selectList.focusNextPage(), setTimeout(()=>{
            this.selected = this.selectList.getFocus()[0], this.options[this.selected].isDisabled && this.selected > 0 && (this.selected--, this.selectList.setFocus([
                this.selected
            ])), this.selectList.reveal(this.selected), this.select(this.selected);
        }, 1);
    }
    onHome(t) {
        Gc.stop(t), !(this.options.length < 2) && (this.selected = 0, this.options[this.selected].isDisabled && this.selected > 1 && this.selected++, this.selectList.setFocus([
            this.selected
        ]), this.selectList.reveal(this.selected), this.select(this.selected));
    }
    onEnd(t) {
        Gc.stop(t), !(this.options.length < 2) && (this.selected = this.options.length - 1, this.options[this.selected].isDisabled && this.selected > 1 && this.selected--, this.selectList.setFocus([
            this.selected
        ]), this.selectList.reveal(this.selected), this.select(this.selected));
    }
    onCharacter(t) {
        const n = PP.toString(t.keyCode);
        let i = -1;
        for(let r = 0; r < this.options.length - 1; r++)if (i = (r + this.selected + 1) % this.options.length, this.options[i].text.charAt(0).toUpperCase() === n && !this.options[i].isDisabled) {
            this.select(i), this.selectList.setFocus([
                i
            ]), this.selectList.reveal(this.selectList.getFocus()[0]), Gc.stop(t);
            break;
        }
    }
    dispose() {
        this.hideSelectDropDown(!1), super.dispose();
    }
}, yvn.DEFAULT_DROPDOWN_MINIMUM_BOTTOM_MARGIN = 32, yvn.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN = 2, yvn.DEFAULT_MINIMUM_VISIBLE_OPTIONS = 3, m8c = yvn;

}
