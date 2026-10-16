import { Gt, Qe, tt } from "./Iwo.js";
import { fz } from "./actionViewItems.js";
import { gs, yt } from "./codicons.js";
import { Hn } from "./dom_2.js";
import { Gn, ta } from "./themables.js";
import { JOy } from "./toggle.css";
import { E } from "./tslib.es6.js";
import { CY, k4 } from "./widget.js";
import { Fj, Xte, c2, gz, sR } from "./ze.js";
var OEr, che, $zo, kKd;
export { $zo, OEr, che, kKd };
var __wakaru_M5e_initialized = false;
export function M5e() {
if (__wakaru_M5e_initialized) return;
__wakaru_M5e_initialized = true;
"use strict";
E(), fz(), CY(), gs(), ta(), Gt(), Qe(), JOy(), Hn(), sR(), gz(), OEr = {
    inputActiveOptionBorder: "#007ACC00",
    inputActiveOptionForeground: "#FFFFFF",
    inputActiveOptionBackground: "#0E639C50"
}, che = class extends k4 {
    constructor(t){
        super(), this._onChange = this._register(new tt), this.onChange = this._onChange.event, this._onKeyDown = this._register(new tt), this.onKeyDown = this._onKeyDown.event, this._opts = t, this._checked = this._opts.isChecked;
        const e = [
            "monaco-custom-toggle"
        ];
        this._opts.icon && (this._icon = this._opts.icon, e.push(...Gn.asClassNameArray(this._icon))), this._opts.actionClassName && e.push(...this._opts.actionClassName.split(" ")), this._checked && e.push("checked"), this.domNode = document.createElement("div"), this._hover = this._register(Fj().setupManagedHover(t.hoverDelegate ?? c2("mouse"), this.domNode, this._opts.title)), this.domNode.classList.add(...e), this._opts.notFocusable || (this.domNode.tabIndex = 0), this.domNode.setAttribute("role", "checkbox"), this.domNode.setAttribute("aria-checked", String(this._checked)), this.domNode.setAttribute("aria-label", this._opts.title), this.applyStyles(), this.onclick(this.domNode, (n)=>{
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
    set checked(t) {
        this._checked = t, this.domNode.setAttribute("aria-checked", String(this._checked)), this.domNode.classList.toggle("checked", this._checked), this.applyStyles();
    }
    setIcon(t) {
        this._icon && this.domNode.classList.remove(...Gn.asClassNameArray(this._icon)), this._icon = t, this._icon && this.domNode.classList.add(...Gn.asClassNameArray(this._icon));
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
    setTitle(t) {
        this._hover.update(t), this.domNode.setAttribute("aria-label", t);
    }
    set visible(t) {
        this.domNode.style.display = t ? "" : "none";
    }
    get visible() {
        return this.domNode.style.display !== "none";
    }
}, $zo = class ORb extends k4 {
    constructor(e, n, i){
        super(), this.title = e, this.isChecked = n, this._onChange = this._register(new tt), this.onChange = this._onChange.event, this.checkbox = this._register(new che({
            title: this.title,
            isChecked: this.isChecked,
            icon: yt.check,
            actionClassName: ORb.CLASS_NAME,
            ...OEr
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
    set checked(e) {
        this.checkbox.checked = e, this.applyStyles();
    }
    focus() {
        this.domNode.focus();
    }
    hasFocus() {
        return Xte(this.domNode);
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
}, $zo.CLASS_NAME = "monaco-checkbox", kKd = $zo;

}
