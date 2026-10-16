import { Gt, Nt, Qe, tt } from "./Iwo.js";
import { Bj, fz } from "./actionViewItems.js";
import { vu } from "./actions.js";
import { gs } from "./codicons.js";
import { Hn } from "./dom_2.js";
import { Jqd } from "./dropdown.css";
import { nzd, tzd } from "./dropdown.js";
import { nT } from "./keyboardEvent.js";
import { Bt } from "./nls.js";
import { ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { Fj, Ii, c2, fr, gz, sR } from "./ze.js";
var lnt;
export { lnt };
var __wakaru_goi_initialized = false;
export function goi() {
if (__wakaru_goi_initialized) return;
__wakaru_goi_initialized = true;
"use strict";
E(), Bt(), vu(), gs(), Gt(), Qe(), ta(), Hn(), nT(), fz(), gz(), sR(), Jqd(), nzd(), lnt = class extends Bj {
    constructor(t, e, n, i = Object.create(null)){
        super(null, t, i), this.actionItem = null, this.visibilityDisposables = this._register(new Nt), this._onDidChangeVisibility = this._register(new tt), this.onDidChangeVisibility = this._onDidChangeVisibility.event, this.menuActionsOrProvider = e, this.contextMenuProvider = n, this.options = i, this.options.actionRunner && (this.actionRunner = this.options.actionRunner);
    }
    render(t) {
        this.visibilityDisposables.clear(), this.actionItem = t;
        const e = (r)=>(this.element = fr(r, Ii("a.action-label")), this.renderLabel(this.element)), n = Array.isArray(this.menuActionsOrProvider), i = {
            contextMenuProvider: this.contextMenuProvider,
            labelRenderer: e,
            menuAsChild: this.options.menuAsChild,
            actions: n ? this.menuActionsOrProvider : void 0,
            actionProvider: n ? void 0 : this.menuActionsOrProvider,
            skipTelemetry: this.options.skipTelemetry
        };
        if (this.dropdownMenu = this._register(new tzd(t, i)), this.visibilityDisposables.add(this.dropdownMenu.onDidChangeVisibility((r)=>{
            this.element?.setAttribute("aria-expanded", `${r}`), this._onDidChangeVisibility.fire(r);
        })), this.dropdownMenu.menuOptions = {
            actionViewItemProvider: this.options.actionViewItemProvider,
            actionRunner: this.actionRunner,
            getKeyBinding: this.options.keybindingProvider,
            context: this._context
        }, this.options.anchorAlignmentProvider) {
            const r = this;
            this.dropdownMenu.menuOptions = {
                ...this.dropdownMenu.menuOptions,
                get anchorAlignment () {
                    return r.options.anchorAlignmentProvider();
                }
            };
        }
        this.updateTooltip(), this.updateEnabled();
    }
    renderLabel(t) {
        let e = [];
        return typeof this.options.classNames == "string" ? e = this.options.classNames.split(/\s+/g).filter((n)=>!!n) : this.options.classNames && (e = this.options.classNames), e.find((n)=>n === "icon") || e.push("codicon"), t.classList.add(...e), this._action.label && this._register(Fj().setupManagedHover(this.options.hoverDelegate ?? c2("mouse"), t, this._action.label)), null;
    }
    setAriaLabelAttributes(t) {
        t.setAttribute("role", "button"), t.setAttribute("aria-haspopup", "true"), t.setAttribute("aria-expanded", "false"), t.ariaLabel = this._action.label || "";
    }
    getTooltip() {
        let t = null;
        return this.action.tooltip ? t = this.action.tooltip : this.action.label && (t = this.action.label), t ?? void 0;
    }
    setActionContext(t) {
        super.setActionContext(t), this.dropdownMenu && (this.dropdownMenu.menuOptions ? this.dropdownMenu.menuOptions.context = t : this.dropdownMenu.menuOptions = {
            context: t
        });
    }
    show() {
        this.dropdownMenu?.show();
    }
    updateEnabled() {
        const t = !this.action.enabled;
        this.actionItem?.classList.toggle("disabled", t), this.element?.classList.toggle("disabled", t);
    }
};

}
