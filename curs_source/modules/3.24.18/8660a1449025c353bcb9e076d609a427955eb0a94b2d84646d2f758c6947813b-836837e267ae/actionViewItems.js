import { D, Di, Kv, Nt, Qe, Yw, _r, st } from "./Iwo.js";
import { qGd } from "./actionbar.css";
import { Kh, _Y, vu, za } from "./actions.js";
import { A_, _7 } from "./browser_2.js";
import { fwe, r6 } from "./dnd.js";
import { Dd, Hn, Pr } from "./dom_2.js";
import { Bt } from "./nls.js";
import { CGo, GGd } from "./selectBox.js";
import { fO, kM, mS } from "./touch.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { Fj, c2, gz, li, sR } from "./ze.js";
var Bj, r_e, TGo;
export { Bj, TGo, r_e };
var __wakaru_fz_initialized = false;
export function fz() {
if (__wakaru_fz_initialized) return;
__wakaru_fz_initialized = true;
"use strict";
E(), A_(), fwe(), Hn(), fO(), sR(), CGo(), vu(), Qe(), Di(), To(), qGd(), Bt(), gz(), Bj = class extends st {
    constructor(t, e, n = {}){
        super(), this.options = n, this.elementDisposables = this._register(new Nt), this._context = t || this, this._action = e, e instanceof za && this._register(e.onDidChange((i)=>{
            this.element && this.handleActionChangeEvent(i);
        }));
    }
    get action() {
        return this._action;
    }
    handleActionChangeEvent(t) {
        t.enabled !== void 0 && this.updateEnabled(), t.checked !== void 0 && this.updateChecked(), t.class !== void 0 && this.updateClass(), t.label !== void 0 && (this.updateLabel(), this.updateTooltip()), t.tooltip !== void 0 && this.updateTooltip();
    }
    get actionRunner() {
        return this._actionRunner || (this._actionRunner = this._register(new _Y)), this._actionRunner;
    }
    set actionRunner(t) {
        this._actionRunner = t;
    }
    isEnabled() {
        return this._action.enabled;
    }
    setActionContext(t) {
        this._context = t;
    }
    render(t) {
        this.elementDisposables.clear();
        const e = this.element = t;
        this._register(kM.addTarget(t));
        const n = this.options && this.options.draggable;
        n && (t.draggable = !0, _7 && this.elementDisposables.add(li(t, Pr.DRAG_START, (i)=>i.dataTransfer?.setData(r6.TEXT, this._action.label)))), this.elementDisposables.add(li(e, mS.Tap, (i)=>this.onClick(i, !0))), this.elementDisposables.add(li(e, Pr.MOUSE_DOWN, (i)=>{
            n || Dd.stop(i, !0), this._action.enabled && i.button === 0 && e.classList.add("active");
        })), _r && this.elementDisposables.add(li(e, Pr.CONTEXT_MENU, (i)=>{
            i.button === 0 && i.ctrlKey === !0 && this.onClick(i);
        })), this.elementDisposables.add(li(e, Pr.CLICK, (i)=>{
            Dd.stop(i, !0), this.options && this.options.isMenu || this.onClick(i);
        })), this.elementDisposables.add(li(e, Pr.DBLCLICK, (i)=>{
            Dd.stop(i, !0);
        })), [
            Pr.MOUSE_UP,
            Pr.MOUSE_OUT
        ].forEach((i)=>{
            this.elementDisposables.add(li(e, i, (r)=>{
                Dd.stop(r), e.classList.remove("active");
            }));
        });
    }
    onClick(t, e = !1) {
        Dd.stop(t, !0);
        const n = Yw(this._context) ? this.options?.useEventAsContext ? t : {
            preserveFocus: e
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
    setFocusable(t) {
        this.element && (this.element.tabIndex = t ? 0 : -1);
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
        const t = this.getTooltip() ?? "";
        if (this.updateAriaLabel(), this.options.hoverDelegate?.showNativeHover) this.element.title = t;
        else if (!this.customHover && t !== "") {
            const e = this.options.hoverDelegate ?? c2("element");
            this.customHover = this._store.add(Fj().setupManagedHover(e, this.element, t));
        } else this.customHover && this.customHover.update(t);
    }
    updateAriaLabel() {
        if (this.element) {
            const t = this.getTooltip() ?? "";
            this.element.setAttribute("aria-label", t);
        }
    }
    updateClass() {}
    updateChecked() {}
    dispose() {
        this.element && (this.element.remove(), this.element = void 0), this._context = void 0, super.dispose();
    }
}, r_e = class extends Bj {
    constructor(t, e, n){
        super(t, e, n), this.options = n, this.options.icon = n.icon !== void 0 ? n.icon : !1, this.options.label = n.label !== void 0 ? n.label : !0, this.cssClass = "";
    }
    render(t) {
        super.render(t), Kv(this.element);
        const e = document.createElement("a");
        if (e.classList.add("action-label"), e.setAttribute("role", this.getDefaultAriaRole()), this.label = e, this.element.appendChild(e), this.options.label && this.options.keybinding && !this.options.keybindingNotRenderedWithLabel) {
            const n = document.createElement("span");
            n.classList.add("keybinding"), n.textContent = this.options.keybinding, this.element.appendChild(n);
        }
        this.updateClass(), this.updateLabel(), this.updateTooltip(), this.updateEnabled(), this.updateChecked();
    }
    getDefaultAriaRole() {
        return this._action.id === Kh.ID ? "presentation" : this.options.isMenu ? "menuitem" : this.options.isTabList ? "tab" : "button";
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
    setFocusable(t) {
        this.label && (this.label.tabIndex = t ? 0 : -1);
    }
    updateLabel() {
        this.options.label && this.label && (this.label.textContent = this.action.label);
    }
    getTooltip() {
        let t = null;
        return this.action.tooltip ? t = this.action.tooltip : this.action.label && (t = this.action.label, this.options.keybinding && (t = D(0, null, t, this.options.keybinding))), t ?? void 0;
    }
    updateClass() {
        this.cssClass && this.label && this.label.classList.remove(...this.cssClass.split(" ")), this.options.icon ? (this.cssClass = this.getClass(), this.label && (this.label.classList.add("codicon"), this.cssClass && this.label.classList.add(...this.cssClass.split(" "))), this.updateEnabled()) : this.label?.classList.remove("codicon");
    }
    updateEnabled() {
        this.action.enabled ? (this.label && (this.label.removeAttribute("aria-disabled"), this.label.classList.remove("disabled")), this.element?.classList.remove("disabled")) : (this.label && (this.label.setAttribute("aria-disabled", "true"), this.label.classList.add("disabled")), this.element?.classList.add("disabled"));
    }
    updateAriaLabel() {
        if (this.label) {
            const t = this.getTooltip() ?? "";
            this.label.setAttribute("aria-label", t);
        }
    }
    updateChecked() {
        this.label && (this.action.checked !== void 0 ? (this.label.classList.toggle("checked", this.action.checked), this.options.isTabList ? this.label.setAttribute("aria-selected", this.action.checked ? "true" : "false") : (this.label.setAttribute("aria-checked", this.action.checked ? "true" : "false"), this.label.setAttribute("role", "checkbox"))) : (this.label.classList.remove("checked"), this.label.removeAttribute(this.options.isTabList ? "aria-selected" : "aria-checked"), this.label.setAttribute("role", this.getDefaultAriaRole())));
    }
}, TGo = class extends Bj {
    constructor(t, e, n, i, r, s, o){
        super(t, e), this.selectBox = new GGd(n, i, r, s, o), this.selectBox.setFocusable(!1), this._register(this.selectBox), this.registerListeners();
    }
    setOptions(t, e) {
        this.selectBox.setOptions(t, e);
    }
    select(t) {
        this.selectBox.select(t);
    }
    registerListeners() {
        this._register(this.selectBox.onDidSelect((t)=>this.runAction(t.selected, t.index)));
    }
    runAction(t, e) {
        this.actionRunner.run(this._action, this.getActionContext(t, e));
    }
    getActionContext(t, e) {
        return t;
    }
    setFocusable(t) {
        this.selectBox.setFocusable(t);
    }
    focus() {
        this.selectBox?.focus();
    }
    blur() {
        this.selectBox?.blur();
    }
    render(t) {
        this.selectBox.render(t);
    }
};

}
