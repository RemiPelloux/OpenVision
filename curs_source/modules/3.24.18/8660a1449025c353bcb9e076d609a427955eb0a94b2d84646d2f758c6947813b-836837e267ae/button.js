import { D, Gt, Nt, Qe, st, tt } from "./Iwo.js";
import { vu, za } from "./actions.js";
import { jLy } from "./button.css";
import { gs, yt } from "./codicons.js";
import { _b, ls } from "./color.js";
import { Dd, Hn, Pr } from "./dom_2.js";
import { kbt, noe } from "./dompurify.js";
import { Ek } from "./htmlContent.js";
import { bW } from "./iconLabels_2.js";
import { nT, rv } from "./keyboardEvent.js";
import { kBt } from "./markdownRenderer.js";
import { Bt } from "./nls.js";
import { Gn, ta } from "./themables.js";
import { fO, kM, mS } from "./touch.js";
import { E } from "./tslib.es6.js";
import { Fj, O5, P3y, Xte, c2, fHe, gz, hE, j3, li, qsi, sR, uGd, vO } from "./ze.js";
var $Ly, lRe, Kqo, Yqo, dEr;
export { $Ly, Kqo, Yqo, dEr, lRe };
var __wakaru_pnt_initialized = false;
export function pnt() {
if (__wakaru_pnt_initialized) return;
__wakaru_pnt_initialized = true;
"use strict";
E(), Hn(), kbt(), nT(), kBt(), fO(), sR(), bW(), vu(), gs(), _b(), Gt(), Ek(), Qe(), ta(), jLy(), Bt(), gz(), $Ly = {
    buttonBackground: "#0E639C",
    buttonHoverBackground: "#006BB3",
    buttonSeparator: ls.white.toString(),
    buttonForeground: ls.white.toString(),
    buttonBorder: void 0,
    buttonSecondaryBackground: void 0,
    buttonSecondaryForeground: void 0,
    buttonSecondaryHoverBackground: void 0
}, lRe = class extends st {
    constructor(t, e){
        super(), this._label = "", this._onDidClick = this._register(new tt), this._onDidEscape = this._register(new tt), this.options = e, this._element = document.createElement("a"), this._element.classList.add("monaco-button"), this._element.tabIndex = 0, this._element.setAttribute("role", "button"), this._element.classList.toggle("secondary", !!e.secondary);
        const n = e.secondary ? e.buttonSecondaryBackground : e.buttonBackground, i = e.secondary ? e.buttonSecondaryForeground : e.buttonForeground;
        this._element.style.color = i || "", this._element.style.backgroundColor = n || "", e.supportShortLabel && (this._labelShortElement = document.createElement("div"), this._labelShortElement.classList.add("monaco-button-label-short"), this._element.appendChild(this._labelShortElement), this._labelElement = document.createElement("div"), this._labelElement.classList.add("monaco-button-label"), this._element.appendChild(this._labelElement), this._element.classList.add("monaco-text-button-with-short-label")), typeof e.title == "string" && this.setTitle(e.title), typeof e.ariaLabel == "string" && this._element.setAttribute("aria-label", e.ariaLabel), t.appendChild(this._element), this._register(kM.addTarget(this._element)), [
            Pr.CLICK,
            mS.Tap
        ].forEach((r)=>{
            this._register(li(this._element, r, (s)=>{
                if (!this.enabled) {
                    Dd.stop(s);
                    return;
                }
                this._onDidClick.fire(s);
            }));
        }), this._register(li(this._element, Pr.KEY_DOWN, (r)=>{
            const s = new rv(r);
            let o = !1;
            this.enabled && (s.equals(3) || s.equals(10)) ? (this._onDidClick.fire(r), o = !0) : s.equals(9) && (this._onDidEscape.fire(r), this._element.blur(), o = !0), o && Dd.stop(s, !0);
        })), this._register(li(this._element, Pr.MOUSE_OVER, (r)=>{
            this._element.classList.contains("disabled") || this.updateBackground(!0);
        })), this._register(li(this._element, Pr.MOUSE_OUT, (r)=>{
            this.updateBackground(!1);
        })), this.focusTracker = this._register(j3(this._element)), this._register(this.focusTracker.onDidFocus(()=>{
            this.enabled && this.updateBackground(!0);
        })), this._register(this.focusTracker.onDidBlur(()=>{
            this.enabled && this.updateBackground(!1);
        }));
    }
    get onDidClick() {
        return this._onDidClick.event;
    }
    get onDidEscape() {
        return this._onDidEscape.event;
    }
    dispose() {
        super.dispose(), this._element.remove();
    }
    getContentElements(t) {
        const e = [];
        for (let n of O5(t))if (typeof n == "string") {
            if (n = n.trim(), n === "") continue;
            const i = document.createElement("span");
            i.textContent = n, e.push(i);
        } else e.push(n);
        return e;
    }
    updateBackground(t) {
        let e;
        this.options.secondary ? e = t ? this.options.buttonSecondaryHoverBackground : this.options.buttonSecondaryBackground : e = t ? this.options.buttonHoverBackground : this.options.buttonBackground, e && (this._element.style.backgroundColor = e);
    }
    get element() {
        return this._element;
    }
    set label(t) {
        if (this._label === t || vO(this._label) && vO(t) && P3y(this._label, t)) return;
        this._element.classList.add("monaco-text-button");
        const e = this.options.supportShortLabel ? this._labelElement : this._element;
        if (vO(t)) {
            const i = qsi(t, {
                inline: !0
            });
            i.dispose();
            const r = i.element.querySelector("p")?.innerHTML;
            if (r) {
                const s = noe.sanitize(r, {
                    ADD_TAGS: [
                        "b",
                        "i",
                        "u",
                        "code",
                        "span"
                    ],
                    ALLOWED_ATTR: [
                        "class"
                    ],
                    RETURN_TRUSTED_TYPE: !0
                });
                e.innerHTML = s;
            } else hE(e);
        } else this.options.supportIcons ? hE(e, ...this.getContentElements(t)) : e.textContent = t;
        let n = "";
        typeof this.options.title == "string" ? n = this.options.title : this.options.title && (n = uGd(t)), this.setTitle(n), this._setAriaLabel(), this._label = t;
    }
    get label() {
        return this._label;
    }
    set labelShort(t) {
        !this.options.supportShortLabel || !this._labelShortElement || (this.options.supportIcons ? hE(this._labelShortElement, ...this.getContentElements(t)) : this._labelShortElement.textContent = t);
    }
    _setAriaLabel() {
        typeof this.options.ariaLabel == "string" ? this._element.setAttribute("aria-label", this.options.ariaLabel) : typeof this.options.title == "string" && this._element.setAttribute("aria-label", this.options.title);
    }
    set icon(t) {
        this._setAriaLabel();
        const e = Array.from(this._element.classList).filter((n)=>n.startsWith("codicon-"));
        this._element.classList.remove(...e), this._element.classList.add(...Gn.asClassNameArray(t));
    }
    set enabled(t) {
        t ? (this._element.classList.remove("disabled"), this._element.setAttribute("aria-disabled", String(!1)), this._element.tabIndex = 0) : (this._element.classList.add("disabled"), this._element.setAttribute("aria-disabled", String(!0)));
    }
    get enabled() {
        return !this._element.classList.contains("disabled");
    }
    set checked(t) {
        t ? (this._element.classList.add("checked"), this._element.setAttribute("aria-checked", "true")) : (this._element.classList.remove("checked"), this._element.setAttribute("aria-checked", "false"));
    }
    get checked() {
        return this._element.classList.contains("checked");
    }
    setTitle(t) {
        !this._hover && t !== "" ? this._hover = this._register(Fj().setupManagedHover(this.options.hoverDelegate ?? c2("element"), this._element, t)) : this._hover && this._hover.update(t);
    }
    focus() {
        this._element.focus();
    }
    hasFocus() {
        return Xte(this._element);
    }
}, Kqo = class extends st {
    constructor(t, e){
        super(), this._onDidClick = this._register(new tt), this.onDidClick = this._onDidClick.event, this.element = document.createElement("div"), this.element.classList.add("monaco-button-dropdown"), t.appendChild(this.element), e.hoverDelegate || (e = {
            ...e,
            hoverDelegate: this._register(fHe())
        }), this.primaryButton = this._register(new lRe(this.element, e)), this._register(this.primaryButton.onDidClick((r)=>this._onDidClick.fire(r))), this.action = this._register(new za("primaryAction", uGd(this.primaryButton.label), void 0, !0, async ()=>this._onDidClick.fire(void 0))), this.separatorContainer = document.createElement("div"), this.separatorContainer.classList.add("monaco-button-dropdown-separator"), this.separator = document.createElement("div"), this.separatorContainer.appendChild(this.separator), this.element.appendChild(this.separatorContainer);
        const n = e.buttonBorder;
        n && (this.separatorContainer.style.borderTop = "1px solid " + n, this.separatorContainer.style.borderBottom = "1px solid " + n);
        const i = e.secondary ? e.buttonSecondaryBackground : e.buttonBackground;
        this.separatorContainer.style.backgroundColor = i ?? "", this.separator.style.backgroundColor = e.buttonSeparator ?? "", this.dropdownButton = this._register(new lRe(this.element, {
            ...e,
            title: D(1, null),
            supportIcons: !0
        })), this.dropdownButton.element.setAttribute("aria-haspopup", "true"), this.dropdownButton.element.setAttribute("aria-expanded", "false"), this.dropdownButton.element.classList.add("monaco-dropdown-button"), this.dropdownButton.icon = yt.dropDownButton, this._register(this.dropdownButton.onDidClick((r)=>{
            const s = Array.isArray(e.actions) ? e.actions : e.actions.getActions();
            e.contextMenuProvider.showContextMenu({
                getAnchor: ()=>this.dropdownButton.element,
                getActions: ()=>e.addPrimaryActionToDropdown === !1 ? [
                        ...s
                    ] : [
                        this.action,
                        ...s
                    ],
                actionRunner: e.actionRunner,
                onHide: ()=>this.dropdownButton.element.setAttribute("aria-expanded", "false"),
                layer: e.dropdownLayer
            }), this.dropdownButton.element.setAttribute("aria-expanded", "true");
        }));
    }
    dispose() {
        super.dispose(), this.element.remove();
    }
    set label(t) {
        this.primaryButton.label = t, this.action.label = t;
    }
    set icon(t) {
        this.primaryButton.icon = t;
    }
    set enabled(t) {
        this.primaryButton.enabled = t, this.dropdownButton.enabled = t, this.element.classList.toggle("disabled", !t);
    }
    get enabled() {
        return this.primaryButton.enabled;
    }
    set checked(t) {
        this.primaryButton.checked = t;
    }
    get checked() {
        return this.primaryButton.checked;
    }
    focus() {
        this.primaryButton.focus();
    }
    hasFocus() {
        return this.primaryButton.hasFocus() || this.dropdownButton.hasFocus();
    }
}, Yqo = class {
    constructor(t, e){
        this.options = e, this._element = document.createElement("div"), this._element.classList.add("monaco-description-button"), this._button = new lRe(this._element, e), this._descriptionElement = document.createElement("div"), this._descriptionElement.classList.add("monaco-button-description"), this._element.appendChild(this._descriptionElement), t.appendChild(this._element);
    }
    get onDidClick() {
        return this._button.onDidClick;
    }
    get element() {
        return this._element;
    }
    set label(t) {
        this._button.label = t;
    }
    set icon(t) {
        this._button.icon = t;
    }
    get enabled() {
        return this._button.enabled;
    }
    set enabled(t) {
        this._button.enabled = t;
    }
    set checked(t) {
        this._button.checked = t;
    }
    get checked() {
        return this._button.checked;
    }
    focus() {
        this._button.focus();
    }
    hasFocus() {
        return this._button.hasFocus();
    }
    dispose() {
        this._button.dispose();
    }
    set description(t) {
        this.options.supportIcons ? hE(this._descriptionElement, ...O5(t)) : this._descriptionElement.textContent = t;
    }
}, dEr = class {
    constructor(t){
        this.container = t, this._buttons = [], this._buttonStore = new Nt;
    }
    dispose() {
        this._buttonStore.dispose();
    }
    get buttons() {
        return this._buttons;
    }
    clear() {
        this._buttonStore.clear(), this._buttons.length = 0;
    }
    addButton(t) {
        const e = this._buttonStore.add(new lRe(this.container, t));
        return this.pushButton(e), e;
    }
    addButtonWithDescription(t) {
        const e = this._buttonStore.add(new Yqo(this.container, t));
        return this.pushButton(e), e;
    }
    addButtonWithDropdown(t) {
        const e = this._buttonStore.add(new Kqo(this.container, t));
        return this.pushButton(e), e;
    }
    pushButton(t) {
        this._buttons.push(t);
        const e = this._buttons.length - 1;
        this._buttonStore.add(li(t.element, Pr.KEY_DOWN, (n)=>{
            const i = new rv(n);
            let r = !0, s;
            i.equals(15) ? s = e > 0 ? e - 1 : this._buttons.length - 1 : i.equals(17) ? s = e === this._buttons.length - 1 ? 0 : e + 1 : r = !1, r && typeof s == "number" && (this._buttons[s].focus(), Dd.stop(n, !0));
        }));
    }
};

}
