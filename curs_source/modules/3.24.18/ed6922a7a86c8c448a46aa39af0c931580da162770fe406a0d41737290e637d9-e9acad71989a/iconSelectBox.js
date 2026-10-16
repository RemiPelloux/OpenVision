import { He, S, Se, bt, cn, ve, we } from "./HVr.js";
import { hS } from "./aria.js";
import { Fn, en } from "./dom_2.js";
import { tT, ufe } from "./highlightedLabel.js";
import { Zd_ } from "./iconSelectBox.css";
import { CW, f5 } from "./inputBox.js";
import { rt } from "./nls.js";
import { Fd, Ve, Xt, Ye, jy } from "./qIc.js";
import { DO, mA } from "./scrollableElement.js";
import { Ft, Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
var eMo, o9h;
export { eMo, o9h };
var __wakaru_Qd__initialized = false;
export function Qd_() {
if (__wakaru_Qd__initialized) return;
__wakaru_Qd__initialized = true;
"use strict";
x(), Zd_(), en(), hS(), CW(), mA(), bt(), Se(), Sr(), rt(), ufe(), eMo = class UCm extends we {
    constructor(t){
        super(), this.options = t, this.domId = `icon_select_box_id_${++UCm.InstanceCount}`, this._onDidSelect = this._register(new ve), this.onDidSelect = this._onDidSelect.event, this.renderedIcons = [], this.focusedItemIndex = 0, this.numberOfElementsPerRow = 1, this.iconContainerWidth = 36, this.iconContainerHeight = 36, this.domNode = Ve(".icon-select-box"), this._register(this.create());
    }
    create() {
        const t = new He, n = Ye(this.domNode, Ve(".icon-select-box-container"));
        n.style.margin = "10px 15px";
        const i = Ye(n, Ve(".icon-select-input-container"));
        i.style.paddingBottom = "10px", this.inputBox = t.add(new f5(i, void 0, {
            placeholder: S(17, null),
            inputBoxStyles: this.options.inputBoxStyles
        }));
        const r = this.iconsContainer = Ve(".icon-select-icons-container", {
            id: `${this.domId}_icons`
        });
        r.role = "listbox", r.tabIndex = 0, this.scrollableElement = t.add(new DO(r, {
            useShadows: !1,
            horizontal: 2
        })), Ye(n, this.scrollableElement.getDomNode()), this.options.showIconInfo && (this.iconIdElement = this._register(new tT(Ye(Ye(n, Ve(".icon-select-id-container")), Ve(".icon-select-id-label")))));
        const s = t.add(new cn);
        return s.value = this.renderIcons(this.options.icons, [], r), this.scrollableElement.scanDomNode(), t.add(this.inputBox.onDidChange((o)=>{
            const a = [], c = [];
            for (const l of this.options.icons){
                const u = this.matchesContiguous(o, l.id);
                u && (a.push(l), c.push(u));
            }
            a.length && (s.value = this.renderIcons(a, c, r), this.scrollableElement?.scanDomNode());
        })), this.inputBox.inputElement.role = "combobox", this.inputBox.inputElement.ariaHasPopup = "menu", this.inputBox.inputElement.ariaAutoComplete = "list", this.inputBox.inputElement.ariaExpanded = "true", this.inputBox.inputElement.setAttribute("aria-controls", r.id), t;
    }
    renderIcons(t, n, i) {
        const r = new He;
        Fd(i);
        const s = this.renderedIcons[this.focusedItemIndex]?.icon;
        let o = 0;
        const a = [];
        if (t.length) for(let c = 0; c < t.length; c++){
            const l = t[c], u = Ye(i, Ve(".icon-container", {
                id: `${this.domId}_icons_${c}`
            }));
            u.style.width = `${this.iconContainerWidth}px`, u.style.height = `${this.iconContainerHeight}px`, u.title = l.id, u.role = "button", u.setAttribute("aria-setsize", `${t.length}`), u.setAttribute("aria-posinset", `${c + 1}`), Ye(u, Ve(Ft.asCSSSelector(l))), a.push({
                icon: l,
                element: u,
                highlightMatches: n[c]
            }), r.add(Xt(u, Fn.CLICK, (h)=>{
                h.stopPropagation(), this.setSelection(c);
            })), l === s && (o = c);
        }
        else {
            const c = S(18, null);
            Ye(i, Ve(".icon-no-results", void 0, c)), jy(c);
        }
        return this.renderedIcons.splice(0, this.renderedIcons.length, ...a), this.focusIcon(o), r;
    }
    focusIcon(t) {
        const n = this.renderedIcons[this.focusedItemIndex];
        n && n.element.classList.remove("focused"), this.focusedItemIndex = t;
        const i = this.renderedIcons[t];
        i && i.element.classList.add("focused"), this.inputBox && (i ? this.inputBox.inputElement.setAttribute("aria-activedescendant", i.element.id) : this.inputBox.inputElement.removeAttribute("aria-activedescendant")), this.iconIdElement && (i ? this.iconIdElement.set(i.icon.id, i.highlightMatches) : this.iconIdElement.set("")), this.reveal(t);
    }
    reveal(t) {
        if (!this.scrollableElement || t < 0 || t >= this.renderedIcons.length) return;
        const n = this.renderedIcons[t].element;
        if (!n) return;
        const { height: i } = this.scrollableElement.getScrollDimensions(), { scrollTop: r } = this.scrollableElement.getScrollPosition();
        n.offsetTop + this.iconContainerHeight > r + i ? this.scrollableElement.setScrollPosition({
            scrollTop: n.offsetTop + this.iconContainerHeight - i
        }) : n.offsetTop < r && this.scrollableElement.setScrollPosition({
            scrollTop: n.offsetTop
        });
    }
    matchesContiguous(t, n) {
        const i = n.toLowerCase().indexOf(t.toLowerCase());
        return i !== -1 ? [
            {
                start: i,
                end: i + t.length
            }
        ] : null;
    }
    layout(t) {
        this.domNode.style.width = `${t.width}px`, this.domNode.style.height = `${t.height}px`;
        const n = t.width - 30;
        if (this.numberOfElementsPerRow = Math.floor(n / this.iconContainerWidth), this.numberOfElementsPerRow === 0) throw new Error("Insufficient width");
        const i = n % this.iconContainerWidth, r = Math.floor(i / this.numberOfElementsPerRow);
        for (const { element: o } of this.renderedIcons)o.style.marginRight = `${r}px`;
        const s = i % this.numberOfElementsPerRow;
        this.iconsContainer && (this.iconsContainer.style.paddingLeft = `${Math.floor(s / 2)}px`, this.iconsContainer.style.paddingRight = `${Math.ceil(s / 2)}px`), this.scrollableElement && (this.scrollableElement.getDomNode().style.height = `${this.iconIdElement ? t.height - 80 : t.height - 40}px`, this.scrollableElement.scanDomNode());
    }
    getFocus() {
        return [
            this.focusedItemIndex
        ];
    }
    setSelection(t) {
        if (t < 0 || t >= this.renderedIcons.length) throw new Error(`Invalid index ${t}`);
        this.focusIcon(t), this._onDidSelect.fire(this.renderedIcons[t].icon);
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
        let t = this.focusedItemIndex + this.numberOfElementsPerRow;
        t >= this.renderedIcons.length && (t = (t + 1) % this.numberOfElementsPerRow, t = t >= this.renderedIcons.length ? 0 : t), this.focusIcon(t);
    }
    focusPreviousRow() {
        let t = this.focusedItemIndex - this.numberOfElementsPerRow;
        if (t < 0) {
            const n = Math.floor(this.renderedIcons.length / this.numberOfElementsPerRow);
            t = this.focusedItemIndex + this.numberOfElementsPerRow * n - 1, t = t < 0 ? this.renderedIcons.length - 1 : t >= this.renderedIcons.length ? t - this.numberOfElementsPerRow : t;
        }
        this.focusIcon(t);
    }
    getFocusedIcon() {
        return this.renderedIcons[this.focusedItemIndex].icon;
    }
}, eMo.InstanceCount = 0, o9h = eMo;

}
