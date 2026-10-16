import { Se, bt, cn, ve } from "./HVr.js";
import { ME, WP } from "./actionViewItems.js";
import { Pe, _i } from "./codicons.js";
import { Fn, en } from "./dom_2.js";
import { $f, V7, Ve, Xt, fM, ih, p5 } from "./qIc.js";
import { Ft, Sr } from "./themables.js";
import { _kg } from "./toggle.css";
import { x } from "./tslib.es6.js";
import { RO, pR } from "./widget.js";
var e3t, AHc, E3, prs, t3t, RHc;
export { AHc, E3, RHc, e3t, prs, t3t };
var __wakaru_uU_initialized = false;
export function uU() {
if (__wakaru_uU_initialized) return;
__wakaru_uU_initialized = true;
"use strict";
x(), ME(), RO(), _i(), Sr(), bt(), Se(), _kg(), en(), $f(), V7(), e3t = {
    inputActiveOptionBorder: "#007ACC00",
    inputActiveOptionForeground: "#FFFFFF",
    inputActiveOptionBackground: "#0E639C50"
}, AHc = class extends WP {
    constructor(e, t, n){
        super(e, t, n), this.toggle = this._register(new E3({
            actionClassName: this._action.class,
            isChecked: !!this._action.checked,
            title: this.options.keybinding ? `${this._action.label} (${this.options.keybinding})` : this._action.label,
            notFocusable: !0,
            inputActiveOptionBackground: n.toggleStyles?.inputActiveOptionBackground,
            inputActiveOptionBorder: n.toggleStyles?.inputActiveOptionBorder,
            inputActiveOptionForeground: n.toggleStyles?.inputActiveOptionForeground,
            hoverDelegate: n.hoverDelegate
        })), this._register(this.toggle.onChange(()=>this._action.checked = !!this.toggle && this.toggle.checked));
    }
    render(e) {
        this.element = e, this.element.appendChild(this.toggle.domNode);
    }
    updateEnabled() {
        this.toggle && (this.isEnabled() ? this.toggle.enable() : this.toggle.disable());
    }
    updateChecked() {
        this.toggle.checked = !!this._action.checked;
    }
    focus() {
        this.toggle.domNode.tabIndex = 0, this.toggle.focus();
    }
    blur() {
        this.toggle.domNode.tabIndex = -1, this.toggle.domNode.blur();
    }
    setFocusable(e) {
        this.toggle.domNode.tabIndex = e ? 0 : -1;
    }
}, E3 = class extends pR {
    constructor(e){
        super(), this._onChange = this._register(new ve), this.onChange = this._onChange.event, this._onKeyDown = this._register(new ve), this.onKeyDown = this._onKeyDown.event, this._opts = e, this._checked = this._opts.isChecked;
        const t = [
            "monaco-custom-toggle"
        ];
        this._opts.icon && (this._icon = this._opts.icon, t.push(...Ft.asClassNameArray(this._icon))), this._opts.actionClassName && t.push(...this._opts.actionClassName.split(" ")), this._checked && t.push("checked"), this.domNode = document.createElement("div"), this._hover = this._register(p5().setupManagedHover(e.hoverDelegate ?? ih("mouse"), this.domNode, this._opts.title)), this.domNode.classList.add(...t), this._opts.notFocusable || (this.domNode.tabIndex = 0), this.domNode.setAttribute("role", "checkbox"), this.domNode.setAttribute("aria-checked", String(this._checked)), this.domNode.setAttribute("aria-label", this._opts.title), this.applyStyles(), this.onclick(this.domNode, (n)=>{
            this.enabled && (this.checked = !this._checked, this._onChange.fire(!1), n.preventDefault());
        }), this._register(this.ignoreGesture(this.domNode)), this.onkeydown(this.domNode, (n)=>{
            if (n.keyCode === 10 || n.keyCode === 3) {
                this.checked = !this._checked, this._onChange.fire(!0), n.preventDefault(), n.stopPropagation();
                return;
            }
            this._onKeyDown.fire(n);
        });
    }
    get enabled() {
        return this.domNode.getAttribute("aria-disabled") !== "true";
    }
    focus() {
        this.domNode.focus();
    }
    get checked() {
        return this._checked;
    }
    set checked(e) {
        this._checked = e, this.domNode.setAttribute("aria-checked", String(this._checked)), this.domNode.classList.toggle("checked", this._checked), this.applyStyles();
    }
    setIcon(e) {
        this._icon && this.domNode.classList.remove(...Ft.asClassNameArray(this._icon)), this._icon = e, this._icon && this.domNode.classList.add(...Ft.asClassNameArray(this._icon));
    }
    width() {
        return 22;
    }
    applyStyles() {
        this.domNode && (this.domNode.style.borderColor = this._checked && this._opts.inputActiveOptionBorder || "", this.domNode.style.color = this._checked && this._opts.inputActiveOptionForeground || "inherit", this.domNode.style.backgroundColor = this._checked && this._opts.inputActiveOptionBackground || "");
    }
    enable() {
        this.domNode.setAttribute("aria-disabled", String(!1));
    }
    disable() {
        this.domNode.setAttribute("aria-disabled", String(!0));
    }
    setTitle(e) {
        this._hover.update(e), this.domNode.setAttribute("aria-label", e);
    }
    set visible(e) {
        this.domNode.style.display = e ? "" : "none";
    }
    get visible() {
        return this.domNode.style.display !== "none";
    }
}, prs = class twm extends pR {
    constructor(t, n, i){
        super(), this.title = t, this.isChecked = n, this._onChange = this._register(new ve), this.onChange = this._onChange.event, this.checkbox = this._register(new E3({
            title: this.title,
            isChecked: this.isChecked,
            icon: Pe.check,
            actionClassName: twm.CLASS_NAME,
            ...e3t
        })), this.domNode = this.checkbox.domNode, this.styles = i, this.applyStyles(), this._register(this.checkbox.onChange((r)=>{
            this.applyStyles(), this._onChange.fire(r);
        }));
    }
    get checked() {
        return this.checkbox.checked;
    }
    get enabled() {
        return this.checkbox.enabled;
    }
    set checked(t) {
        this.checkbox.checked = t, this.applyStyles();
    }
    focus() {
        this.domNode.focus();
    }
    hasFocus() {
        return fM(this.domNode);
    }
    enable() {
        this.checkbox.enable();
    }
    disable() {
        this.checkbox.disable();
    }
    applyStyles() {
        this.domNode.style.color = this.styles.checkboxForeground || "", this.domNode.style.backgroundColor = this.styles.checkboxBackground || "", this.domNode.style.borderColor = this.styles.checkboxBorder || "";
    }
}, prs.CLASS_NAME = "monaco-checkbox", t3t = prs, RHc = class extends WP {
    constructor(e, t, n){
        super(e, t, n), this._labelClickListener = this._register(new cn), this.toggle = this._register(new t3t(this._action.label, !!this._action.checked, n.checkboxStyles)), this._register(this.toggle.onChange(()=>this.onChange()));
    }
    render(e) {
        if (this.element = e, this.element.classList.add("checkbox-action-item"), this.element.appendChild(this.toggle.domNode), this.options.label && this._action.label) {
            const t = this.element.appendChild(Ve("span.checkbox-label", void 0, this._action.label));
            this._labelClickListener.value = Xt(t, Fn.CLICK, (n)=>{
                this.toggle.checked = !this.toggle.checked, n.stopPropagation(), n.preventDefault(), this.onChange();
            });
        } else this._labelClickListener.clear();
        this.updateEnabled(), this.updateClass(), this.updateChecked();
    }
    onChange() {
        this._action.checked = !!this.toggle && this.toggle.checked, this.actionRunner.run(this._action, this._context);
    }
    updateEnabled() {
        this.isEnabled() ? this.toggle.enable() : this.toggle.disable(), this.action.enabled ? this.element?.classList.remove("disabled") : this.element?.classList.add("disabled");
    }
    updateChecked() {
        this.toggle.checked = !!this._action.checked;
    }
    updateClass() {
        this.cssClass && this.toggle.domNode.classList.remove(...this.cssClass.split(" ")), this.cssClass = this.getClass(), this.cssClass && this.toggle.domNode.classList.add(...this.cssClass.split(" "));
    }
    focus() {
        this.toggle.domNode.tabIndex = 0, this.toggle.focus();
    }
    blur() {
        this.toggle.domNode.tabIndex = -1, this.toggle.domNode.blur();
    }
    setFocusable(e) {
        this.toggle.domNode.tabIndex = e ? 0 : -1;
    }
};

}
