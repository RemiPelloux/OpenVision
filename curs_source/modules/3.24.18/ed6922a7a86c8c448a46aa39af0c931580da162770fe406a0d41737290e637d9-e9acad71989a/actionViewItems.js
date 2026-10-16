import { Ai, He, Im, S, Se, Tf, jn, we } from "./HVr.js";
import { v8c } from "./actionbar.css";
import { Vc, Vo, er, lA } from "./actions.js";
import { i5, n_ } from "./browser_2.js";
import { jK, yD } from "./dnd.js";
import { Fn, Gc, en } from "./dom_2.js";
import { rt } from "./nls.js";
import { $f, V7, Xt, ih, p5 } from "./qIc.js";
import { p5e, rKe } from "./selectBox.js";
import { Ex, ov, zT } from "./touch.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var WP, SD, Svn;
export { SD, Svn, WP };
var __wakaru_ME_initialized = false;
export function ME() {
if (__wakaru_ME_initialized) return;
__wakaru_ME_initialized = true;
"use strict";
x(), n_(), jK(), en(), Ex(), $f(), rKe(), Vo(), Se(), jn(), gr(), v8c(), rt(), V7(), WP = class extends we {
    constructor(e, t, n = {}){
        super(), this.options = n, this.elementDisposables = this._register(new He), this._context = e || this, this._action = t, t instanceof er && this._register(t.onDidChange((i)=>{
            this.element && this.handleActionChangeEvent(i);
        }));
    }
    get action() {
        return this._action;
    }
    handleActionChangeEvent(e) {
        e.enabled !== void 0 && this.updateEnabled(), e.checked !== void 0 && this.updateChecked(), e.class !== void 0 && this.updateClass(), e.label !== void 0 && (this.updateLabel(), this.updateTooltip()), e.tooltip !== void 0 && this.updateTooltip();
    }
    get actionRunner() {
        return this._actionRunner || (this._actionRunner = this._register(new lA)), this._actionRunner;
    }
    set actionRunner(e) {
        this._actionRunner = e;
    }
    isEnabled() {
        return this._action.enabled;
    }
    setActionContext(e) {
        this._context = e;
    }
    render(e) {
        this.elementDisposables.clear();
        const t = this.element = e;
        this._register(zT.addTarget(e));
        const n = this.options && this.options.draggable;
        n && (e.draggable = !0, i5 && this.elementDisposables.add(Xt(e, Fn.DRAG_START, (i)=>i.dataTransfer?.setData(yD.TEXT, this._action.label)))), this.elementDisposables.add(Xt(t, ov.Tap, (i)=>this.onClick(i, !0))), this.elementDisposables.add(Xt(t, Fn.MOUSE_DOWN, (i)=>{
            n || Gc.stop(i, !0), this._action.enabled && i.button === 0 && t.classList.add("active");
        })), Ai && this.elementDisposables.add(Xt(t, Fn.CONTEXT_MENU, (i)=>{
            i.button === 0 && i.ctrlKey === !0 && this.onClick(i);
        })), this.elementDisposables.add(Xt(t, Fn.CLICK, (i)=>{
            Gc.stop(i, !0), this.options && this.options.isMenu || this.onClick(i);
        })), this.elementDisposables.add(Xt(t, Fn.DBLCLICK, (i)=>{
            Gc.stop(i, !0);
        })), [
            Fn.MOUSE_UP,
            Fn.MOUSE_OUT
        ].forEach((i)=>{
            this.elementDisposables.add(Xt(t, i, (r)=>{
                Gc.stop(r), t.classList.remove("active");
            }));
        });
    }
    onClick(e, t = !1) {
        Gc.stop(e, !0);
        const n = Tf(this._context) ? this.options?.useEventAsContext ? e : {
            preserveFocus: t
        } : this._context;
        this.actionRunner.run(this._action, n);
    }
    focus() {
        this.element && (this.element.tabIndex = 0, this.element.focus(), this.element.classList.add("focused"));
    }
    isFocused() {
        return !!this.element?.classList.contains("focused");
    }
    blur() {
        this.element && (this.element.blur(), this.element.tabIndex = -1, this.element.classList.remove("focused"));
    }
    setFocusable(e) {
        this.element && (this.element.tabIndex = e ? 0 : -1);
    }
    get trapsArrowNavigation() {
        return !1;
    }
    updateEnabled() {}
    updateLabel() {}
    getClass() {
        return this.action.class;
    }
    getTooltip() {
        return this.action.tooltip;
    }
    updateTooltip() {
        if (!this.element) return;
        const e = this.getTooltip() ?? "";
        if (this.updateAriaLabel(), this.options.hoverDelegate?.showNativeHover) this.element.title = e;
        else if (!this.customHover && e !== "") {
            const t = this.options.hoverDelegate ?? ih("element");
            this.customHover = this._store.add(p5().setupManagedHover(t, this.element, e));
        } else this.customHover && this.customHover.update(e);
    }
    updateAriaLabel() {
        if (this.element) {
            const e = this.getTooltip() ?? "";
            this.element.setAttribute("aria-label", e);
        }
    }
    updateClass() {}
    updateChecked() {}
    dispose() {
        this.element && (this.element.remove(), this.element = void 0), this._context = void 0, super.dispose();
    }
}, SD = class extends WP {
    constructor(e, t, n){
        super(e, t, n), this.options = n, this.options.icon = n.icon !== void 0 ? n.icon : !1, this.options.label = n.label !== void 0 ? n.label : !0, this.cssClass = "";
    }
    render(e) {
        super.render(e), Im(this.element);
        const t = document.createElement("a");
        if (t.classList.add("action-label"), t.setAttribute("role", this.getDefaultAriaRole()), this.label = t, this.element.appendChild(t), this.options.label && this.options.keybinding && !this.options.keybindingNotRenderedWithLabel) {
            const n = document.createElement("span");
            n.classList.add("keybinding"), n.textContent = this.options.keybinding, this.element.appendChild(n);
        }
        this.updateClass(), this.updateLabel(), this.updateTooltip(), this.updateEnabled(), this.updateChecked();
    }
    getDefaultAriaRole() {
        return this._action.id === Vc.ID ? "presentation" : this.options.isMenu ? "menuitem" : this.options.isTabList ? "tab" : "button";
    }
    focus() {
        this.label && (this.label.tabIndex = 0, this.label.focus());
    }
    isFocused() {
        return !!this.label && this.label?.tabIndex === 0;
    }
    blur() {
        this.label && (this.label.tabIndex = -1);
    }
    setFocusable(e) {
        this.label && (this.label.tabIndex = e ? 0 : -1);
    }
    updateLabel() {
        this.options.label && this.label && (this.label.textContent = this.action.label);
    }
    getTooltip() {
        let e = null;
        return this.action.tooltip ? e = this.action.tooltip : this.action.label && (e = this.action.label, this.options.keybinding && (e = S(0, null, e, this.options.keybinding))), e ?? void 0;
    }
    updateClass() {
        this.cssClass && this.label && this.label.classList.remove(...this.cssClass.split(" ")), this.options.icon ? (this.cssClass = this.getClass(), this.label && (this.label.classList.add("codicon"), this.cssClass && this.label.classList.add(...this.cssClass.split(" "))), this.updateEnabled()) : this.label?.classList.remove("codicon");
    }
    updateEnabled() {
        this.action.enabled ? (this.label && (this.label.removeAttribute("aria-disabled"), this.label.classList.remove("disabled")), this.element?.classList.remove("disabled")) : (this.label && (this.label.setAttribute("aria-disabled", "true"), this.label.classList.add("disabled")), this.element?.classList.add("disabled"));
    }
    updateAriaLabel() {
        if (this.label) {
            const e = this.getTooltip() ?? "";
            this.label.setAttribute("aria-label", e);
        }
    }
    updateChecked() {
        this.label && (this.action.checked !== void 0 ? (this.label.classList.toggle("checked", this.action.checked), this.options.isTabList ? this.label.setAttribute("aria-selected", this.action.checked ? "true" : "false") : (this.label.setAttribute("aria-checked", this.action.checked ? "true" : "false"), this.label.setAttribute("role", "checkbox"))) : (this.label.classList.remove("checked"), this.label.removeAttribute(this.options.isTabList ? "aria-selected" : "aria-checked"), this.label.setAttribute("role", this.getDefaultAriaRole())));
    }
}, Svn = class extends WP {
    constructor(e, t, n, i, r, s, o){
        super(e, t), this.selectBox = new p5e(n, i, r, s, o), this.selectBox.setFocusable(!1), this._register(this.selectBox), this.registerListeners();
    }
    setOptions(e, t) {
        this.selectBox.setOptions(e, t);
    }
    select(e) {
        this.selectBox.select(e);
    }
    registerListeners() {
        this._register(this.selectBox.onDidSelect((e)=>this.runAction(e.selected, e.index)));
    }
    runAction(e, t) {
        this.actionRunner.run(this._action, this.getActionContext(e, t));
    }
    getActionContext(e, t) {
        return e;
    }
    setFocusable(e) {
        this.selectBox.setFocusable(e);
    }
    focus() {
        this.selectBox?.focus();
    }
    blur() {
        this.selectBox?.blur();
    }
    render(e) {
        this.selectBox.render(e);
    }
};

}
