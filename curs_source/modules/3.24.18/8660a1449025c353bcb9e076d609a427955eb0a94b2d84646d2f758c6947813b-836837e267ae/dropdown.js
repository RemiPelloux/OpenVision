import { Gt, tt } from "./Iwo.js";
import { _Y, vu } from "./actions.js";
import { Dd, Hn, Pr } from "./dom_2.js";
import { Jqd } from "./dropdown.css";
import { nT, rv } from "./keyboardEvent.js";
import { fO, kM, mS } from "./touch.js";
import { E } from "./tslib.es6.js";
import { Fj, Ii, Zte, c2, fr, gz, li, sR } from "./ze.js";
var ezd, tzd;
export { ezd, tzd };
var __wakaru_nzd_initialized = false;
export function nzd() {
if (__wakaru_nzd_initialized) return;
__wakaru_nzd_initialized = true;
"use strict";
E(), Hn(), nT(), fO(), gz(), sR(), vu(), Gt(), Jqd(), ezd = class extends _Y {
    constructor(t, e){
        super(), this._onDidChangeVisibility = this._register(new tt), this.onDidChangeVisibility = this._onDidChangeVisibility.event, this._element = fr(t, Ii(".monaco-dropdown")), this._label = fr(this._element, Ii(".dropdown-label"));
        let n = e.labelRenderer;
        n || (n = (r)=>(r.textContent = e.label || "", null));
        for (const r of [
            Pr.CLICK,
            Pr.MOUSE_DOWN,
            mS.Tap
        ])this._register(li(this.element, r, (s)=>Dd.stop(s, !0)));
        for (const r of [
            Pr.MOUSE_DOWN,
            mS.Tap
        ])this._register(li(this._label, r, (s)=>{
            Zte(s) && (s.detail > 1 || s.button !== 0) || (this.visible ? this.hide() : this.show());
        }));
        this._register(li(this._label, Pr.KEY_DOWN, (r)=>{
            const s = new rv(r);
            (s.equals(3) || s.equals(10)) && (Dd.stop(r, !0), this.visible ? this.hide() : this.show());
        }));
        const i = n(this._label);
        i && this._register(i), this._register(kM.addTarget(this._label));
    }
    get element() {
        return this._element;
    }
    get label() {
        return this._label;
    }
    set tooltip(t) {
        this._label && (!this.hover && t !== "" ? this.hover = this._register(Fj().setupManagedHover(c2("mouse"), this._label, t)) : this.hover && this.hover.update(t));
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
    onEvent(t, e) {
        this.hide();
    }
    dispose() {
        super.dispose(), this.hide(), this.boxContainer && (this.boxContainer.remove(), this.boxContainer = void 0), this.contents && (this.contents.remove(), this.contents = void 0), this._label && (this._label.remove(), this._label = void 0);
    }
}, tzd = class extends ezd {
    constructor(t, e){
        super(t, e), this._options = e, this._actions = [], this.actions = e.actions || [];
    }
    set menuOptions(t) {
        this._menuOptions = t;
    }
    get menuOptions() {
        return this._menuOptions;
    }
    get actions() {
        return this._options.actionProvider ? this._options.actionProvider.getActions() : this._actions;
    }
    set actions(t) {
        this._actions = t;
    }
    show() {
        super.show(), this.element.classList.add("active"), this._options.contextMenuProvider.showContextMenu({
            getAnchor: ()=>this.element,
            getActions: ()=>this.actions,
            getActionsContext: ()=>this.menuOptions ? this.menuOptions.context : null,
            getActionViewItem: (t, e)=>this.menuOptions && this.menuOptions.actionViewItemProvider ? this.menuOptions.actionViewItemProvider(t, e) : void 0,
            getKeyBinding: (t)=>this.menuOptions && this.menuOptions.getKeyBinding ? this.menuOptions.getKeyBinding(t) : void 0,
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
