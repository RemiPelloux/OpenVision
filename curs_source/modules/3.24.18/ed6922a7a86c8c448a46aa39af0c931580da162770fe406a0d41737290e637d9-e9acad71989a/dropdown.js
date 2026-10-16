import { bt, ve } from "./HVr.js";
import { Vo, lA } from "./actions.js";
import { Fn, Gc, en } from "./dom_2.js";
import { T7c } from "./dropdown.css";
import { gu, jg } from "./keyboardEvent.js";
import { $f, K9, V7, Ve, Xt, Ye, ih, p5 } from "./qIc.js";
import { Ex, ov, zT } from "./touch.js";
import { x } from "./tslib.es6.js";
var E7c, x7c;
export { E7c, x7c };
var __wakaru_I7c_initialized = false;
export function I7c() {
if (__wakaru_I7c_initialized) return;
__wakaru_I7c_initialized = true;
"use strict";
x(), en(), jg(), Ex(), V7(), $f(), Vo(), bt(), T7c(), E7c = class extends lA {
    constructor(e, t){
        super(), this._onDidChangeVisibility = this._register(new ve), this.onDidChangeVisibility = this._onDidChangeVisibility.event, this._element = Ye(e, Ve(".monaco-dropdown")), this._label = Ye(this._element, Ve(".dropdown-label"));
        let n = t.labelRenderer;
        n || (n = (r)=>(r.textContent = t.label || "", null));
        for (const r of [
            Fn.CLICK,
            Fn.MOUSE_DOWN,
            ov.Tap
        ])this._register(Xt(this.element, r, (s)=>Gc.stop(s, !0)));
        for (const r of [
            Fn.MOUSE_DOWN,
            ov.Tap
        ])this._register(Xt(this._label, r, (s)=>{
            K9(s) && (s.detail > 1 || s.button !== 0) || (this.visible ? this.hide() : this.show());
        }));
        this._register(Xt(this._label, Fn.KEY_DOWN, (r)=>{
            const s = new gu(r);
            (s.equals(3) || s.equals(10)) && (Gc.stop(r, !0), this.visible ? this.hide() : this.show());
        }));
        const i = n(this._label);
        i && this._register(i), this._register(zT.addTarget(this._label));
    }
    get element() {
        return this._element;
    }
    get label() {
        return this._label;
    }
    set tooltip(e) {
        this._label && (!this.hover && e !== "" ? this.hover = this._register(p5().setupManagedHover(ih("mouse"), this._label, e)) : this.hover && this.hover.update(e));
    }
    show() {
        this.visible || (this.visible = !0, this._onDidChangeVisibility.fire(!0));
    }
    hide() {
        this.visible && (this.visible = !1, this._onDidChangeVisibility.fire(!1));
    }
    isVisible() {
        return !!this.visible;
    }
    onEvent(e, t) {
        this.hide();
    }
    dispose() {
        super.dispose(), this.hide(), this.boxContainer && (this.boxContainer.remove(), this.boxContainer = void 0), this.contents && (this.contents.remove(), this.contents = void 0), this._label && (this._label.remove(), this._label = void 0);
    }
}, x7c = class extends E7c {
    constructor(e, t){
        super(e, t), this._options = t, this._actions = [], this.actions = t.actions || [];
    }
    set menuOptions(e) {
        this._menuOptions = e;
    }
    get menuOptions() {
        return this._menuOptions;
    }
    get actions() {
        return this._options.actionProvider ? this._options.actionProvider.getActions() : this._actions;
    }
    set actions(e) {
        this._actions = e;
    }
    show() {
        super.show(), this.element.classList.add("active"), this._options.contextMenuProvider.showContextMenu({
            getAnchor: ()=>this.element,
            getActions: ()=>this.actions,
            getActionsContext: ()=>this.menuOptions ? this.menuOptions.context : null,
            getActionViewItem: (e, t)=>this.menuOptions && this.menuOptions.actionViewItemProvider ? this.menuOptions.actionViewItemProvider(e, t) : void 0,
            getKeyBinding: (e)=>this.menuOptions && this.menuOptions.getKeyBinding ? this.menuOptions.getKeyBinding(e) : void 0,
            getMenuClassName: ()=>this._options.menuClassName || "",
            onHide: ()=>this.onHide(),
            actionRunner: this.menuOptions ? this.menuOptions.actionRunner : void 0,
            anchorAlignment: this.menuOptions ? this.menuOptions.anchorAlignment : 0,
            domForShadowRoot: this._options.menuAsChild ? this.element : void 0,
            skipTelemetry: this._options.skipTelemetry
        });
    }
    hide() {
        super.hide();
    }
    onHide() {
        this.hide(), this.element.classList.remove("active");
    }
};

}
