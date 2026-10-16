import { D, Gt, Nt, Qe, Vn, st, tt } from "./Iwo.js";
import { $3 } from "./aria.js";
import { Hn, Pr } from "./dom_2.js";
import { sIr, ynt } from "./highlightedLabel.js";
import { rDk } from "./iconSelectBox.css";
import { Pvn, fnt } from "./inputBox.js";
import { Bt } from "./nls.js";
import { E7, mwe } from "./scrollableElement.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { Dj, Ii, fr, li, uy } from "./ze.js";
var Pvl, B2g;
export { B2g, Pvl };
var __wakaru_sDk_initialized = false;
export function sDk() {
if (__wakaru_sDk_initialized) return;
__wakaru_sDk_initialized = true;
"use strict";
E(), rDk(), Hn(), $3(), fnt(), E7(), Gt(), Qe(), ta(), Bt(), sIr(), Pvl = class IPb extends st {
    constructor(e){
        super(), this.options = e, this.domId = `icon_select_box_id_${++IPb.InstanceCount}`, this._onDidSelect = this._register(new tt), this.onDidSelect = this._onDidSelect.event, this.renderedIcons = [], this.focusedItemIndex = 0, this.numberOfElementsPerRow = 1, this.iconContainerWidth = 36, this.iconContainerHeight = 36, this.domNode = Ii(".icon-select-box"), this._register(this.create());
    }
    create() {
        const e = new Nt, n = fr(this.domNode, Ii(".icon-select-box-container"));
        n.style.margin = "10px 15px";
        const i = fr(n, Ii(".icon-select-input-container"));
        i.style.paddingBottom = "10px", this.inputBox = e.add(new Pvn(i, void 0, {
            placeholder: D(17, null),
            inputBoxStyles: this.options.inputBoxStyles
        }));
        const r = this.iconsContainer = Ii(".icon-select-icons-container", {
            id: `${this.domId}_icons`
        });
        r.role = "listbox", r.tabIndex = 0, this.scrollableElement = e.add(new mwe(r, {
            useShadows: !1,
            horizontal: 2
        })), fr(n, this.scrollableElement.getDomNode()), this.options.showIconInfo && (this.iconIdElement = this._register(new ynt(fr(fr(n, Ii(".icon-select-id-container")), Ii(".icon-select-id-label")))));
        const s = e.add(new Vn);
        return s.value = this.renderIcons(this.options.icons, [], r), this.scrollableElement.scanDomNode(), e.add(this.inputBox.onDidChange((o)=>{
            const a = [], l = [];
            for (const c of this.options.icons){
                const u = this.matchesContiguous(o, c.id);
                u && (a.push(c), l.push(u));
            }
            a.length && (s.value = this.renderIcons(a, l, r), this.scrollableElement?.scanDomNode());
        })), this.inputBox.inputElement.role = "combobox", this.inputBox.inputElement.ariaHasPopup = "menu", this.inputBox.inputElement.ariaAutoComplete = "list", this.inputBox.inputElement.ariaExpanded = "true", this.inputBox.inputElement.setAttribute("aria-controls", r.id), e;
    }
    renderIcons(e, n, i) {
        const r = new Nt;
        uy(i);
        const s = this.renderedIcons[this.focusedItemIndex]?.icon;
        let o = 0;
        const a = [];
        if (e.length) for(let l = 0; l < e.length; l++){
            const c = e[l], u = fr(i, Ii(".icon-container", {
                id: `${this.domId}_icons_${l}`
            }));
            u.style.width = `${this.iconContainerWidth}px`, u.style.height = `${this.iconContainerHeight}px`, u.title = c.id, u.role = "button", u.setAttribute("aria-setsize", `${e.length}`), u.setAttribute("aria-posinset", `${l + 1}`), fr(u, Ii(Gn.asCSSSelector(c))), a.push({
                icon: c,
                element: u,
                highlightMatches: n[l]
            }), r.add(li(u, Pr.CLICK, (d)=>{
                d.stopPropagation(), this.setSelection(l);
            })), c === s && (o = l);
        }
        else {
            const l = D(18, null);
            fr(i, Ii(".icon-no-results", void 0, l)), Dj(l);
        }
        return this.renderedIcons.splice(0, this.renderedIcons.length, ...a), this.focusIcon(o), r;
    }
    focusIcon(e) {
        const n = this.renderedIcons[this.focusedItemIndex];
        n && n.element.classList.remove("focused"), this.focusedItemIndex = e;
        const i = this.renderedIcons[e];
        i && i.element.classList.add("focused"), this.inputBox && (i ? this.inputBox.inputElement.setAttribute("aria-activedescendant", i.element.id) : this.inputBox.inputElement.removeAttribute("aria-activedescendant")), this.iconIdElement && (i ? this.iconIdElement.set(i.icon.id, i.highlightMatches) : this.iconIdElement.set("")), this.reveal(e);
    }
    reveal(e) {
        if (!this.scrollableElement || e < 0 || e >= this.renderedIcons.length) return;
        const n = this.renderedIcons[e].element;
        if (!n) return;
        const { height: i } = this.scrollableElement.getScrollDimensions(), { scrollTop: r } = this.scrollableElement.getScrollPosition();
        n.offsetTop + this.iconContainerHeight > r + i ? this.scrollableElement.setScrollPosition({
            scrollTop: n.offsetTop + this.iconContainerHeight - i
        }) : n.offsetTop < r && this.scrollableElement.setScrollPosition({
            scrollTop: n.offsetTop
        });
    }
    matchesContiguous(e, n) {
        const i = n.toLowerCase().indexOf(e.toLowerCase());
        return i !== -1 ? [
            {
                start: i,
                end: i + e.length
            }
        ] : null;
    }
    layout(e) {
        this.domNode.style.width = `${e.width}px`, this.domNode.style.height = `${e.height}px`;
        const n = e.width - 30;
        if (this.numberOfElementsPerRow = Math.floor(n / this.iconContainerWidth), this.numberOfElementsPerRow === 0) throw new Error("Insufficient width");
        const i = n % this.iconContainerWidth, r = Math.floor(i / this.numberOfElementsPerRow);
        for (const { element: o } of this.renderedIcons)o.style.marginRight = `${r}px`;
        const s = i % this.numberOfElementsPerRow;
        this.iconsContainer && (this.iconsContainer.style.paddingLeft = `${Math.floor(s / 2)}px`, this.iconsContainer.style.paddingRight = `${Math.ceil(s / 2)}px`), this.scrollableElement && (this.scrollableElement.getDomNode().style.height = `${this.iconIdElement ? e.height - 80 : e.height - 40}px`, this.scrollableElement.scanDomNode());
    }
    getFocus() {
        return [
            this.focusedItemIndex
        ];
    }
    setSelection(e) {
        if (e < 0 || e >= this.renderedIcons.length) throw new Error(`Invalid index ${e}`);
        this.focusIcon(e), this._onDidSelect.fire(this.renderedIcons[e].icon);
    }
    clearInput() {
        this.inputBox && (this.inputBox.value = "");
    }
    focus() {
        this.inputBox?.focus(), this.focusIcon(0);
    }
    focusNext() {
        this.focusIcon((this.focusedItemIndex + 1) % this.renderedIcons.length);
    }
    focusPrevious() {
        this.focusIcon((this.focusedItemIndex - 1 + this.renderedIcons.length) % this.renderedIcons.length);
    }
    focusNextRow() {
        let e = this.focusedItemIndex + this.numberOfElementsPerRow;
        e >= this.renderedIcons.length && (e = (e + 1) % this.numberOfElementsPerRow, e = e >= this.renderedIcons.length ? 0 : e), this.focusIcon(e);
    }
    focusPreviousRow() {
        let e = this.focusedItemIndex - this.numberOfElementsPerRow;
        if (e < 0) {
            const n = Math.floor(this.renderedIcons.length / this.numberOfElementsPerRow);
            e = this.focusedItemIndex + this.numberOfElementsPerRow * n - 1, e = e < 0 ? this.renderedIcons.length - 1 : e >= this.renderedIcons.length ? e - this.numberOfElementsPerRow : e;
        }
        this.focusIcon(e);
    }
    getFocusedIcon() {
        return this.renderedIcons[this.focusedItemIndex].icon;
    }
}, Pvl.InstanceCount = 0, B2g = Pvl;

}
