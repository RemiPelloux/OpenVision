import { He, S, Se, bt, ve } from "./HVr.js";
import { ME, SD, WP } from "./actionViewItems.js";
import { Vo, er } from "./actions.js";
import { Pe, _i } from "./codicons.js";
import { Fn, en } from "./dom_2.js";
import { T7c } from "./dropdown.css";
import { I7c, x7c } from "./dropdown.js";
import { gu, jg } from "./keyboardEvent.js";
import { rt } from "./nls.js";
import { $f, V7, Ve, Xt, Ye, cu, ih, p5 } from "./qIc.js";
import { Ft, Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
var YV, A7c;
export { A7c, YV };
var __wakaru_Owe_initialized = false;
export function Owe() {
if (__wakaru_Owe_initialized) return;
__wakaru_Owe_initialized = true;
"use strict";
x(), rt(), Vo(), _i(), bt(), Se(), Sr(), en(), jg(), ME(), V7(), $f(), T7c(), I7c(), YV = class extends WP {
    constructor(e, t, n, i = Object.create(null)){
        super(null, e, i), this.actionItem = null, this.visibilityDisposables = this._register(new He), this._onDidChangeVisibility = this._register(new ve), this.onDidChangeVisibility = this._onDidChangeVisibility.event, this.menuActionsOrProvider = t, this.contextMenuProvider = n, this.options = i, this.options.actionRunner && (this.actionRunner = this.options.actionRunner);
    }
    render(e) {
        this.visibilityDisposables.clear(), this.actionItem = e;
        const t = (r)=>(this.element = Ye(r, Ve("a.action-label")), this.renderLabel(this.element)), n = Array.isArray(this.menuActionsOrProvider), i = {
            contextMenuProvider: this.contextMenuProvider,
            labelRenderer: t,
            menuAsChild: this.options.menuAsChild,
            actions: n ? this.menuActionsOrProvider : void 0,
            actionProvider: n ? void 0 : this.menuActionsOrProvider,
            skipTelemetry: this.options.skipTelemetry
        };
        if (this.dropdownMenu = this._register(new x7c(e, i)), this.visibilityDisposables.add(this.dropdownMenu.onDidChangeVisibility((r)=>{
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
    renderLabel(e) {
        let t = [];
        return typeof this.options.classNames == "string" ? t = this.options.classNames.split(/\s+/g).filter((n)=>!!n) : this.options.classNames && (t = this.options.classNames), t.find((n)=>n === "icon") || t.push("codicon"), e.classList.add(...t), this._action.label && this._register(p5().setupManagedHover(this.options.hoverDelegate ?? ih("mouse"), e, this._action.label)), null;
    }
    setAriaLabelAttributes(e) {
        e.setAttribute("role", "button"), e.setAttribute("aria-haspopup", "true"), e.setAttribute("aria-expanded", "false"), e.ariaLabel = this._action.label || "";
    }
    getTooltip() {
        let e = null;
        return this.action.tooltip ? e = this.action.tooltip : this.action.label && (e = this.action.label), e ?? void 0;
    }
    setActionContext(e) {
        super.setActionContext(e), this.dropdownMenu && (this.dropdownMenu.menuOptions ? this.dropdownMenu.menuOptions.context = e : this.dropdownMenu.menuOptions = {
            context: e
        });
    }
    show() {
        this.dropdownMenu?.show();
    }
    updateEnabled() {
        const e = !this.action.enabled;
        this.actionItem?.classList.toggle("disabled", e), this.element?.classList.toggle("disabled", e);
    }
}, A7c = class extends SD {
    constructor(e, t, n, i){
        super(e, t, n), this.contextMenuProvider = i, this.keyDownDisposables = this._register(new He);
    }
    render(e) {
        if (this.keyDownDisposables.clear(), super.render(e), this.element) {
            this.element.classList.add("action-dropdown-item");
            const t = {
                getActions: ()=>{
                    const r = this.options.menuActionsOrProvider;
                    return Array.isArray(r) ? r : r.getActions();
                }
            }, n = this.options.menuActionClassNames || [], i = cu("div.action-dropdown-item-separator", [
                cu("div", {})
            ]).root;
            i.classList.toggle("prominent", n.includes("prominent")), Ye(this.element, i), this.dropdownMenuActionViewItem = this._register(new YV(this._register(new er("dropdownAction", S(8, null))), t, this.contextMenuProvider, {
                classNames: [
                    "dropdown",
                    ...Ft.asClassNameArray(Pe.dropDownButton),
                    ...n
                ],
                hoverDelegate: this.options.hoverDelegate
            })), this.dropdownMenuActionViewItem.render(this.element), this.keyDownDisposables.add(Xt(this.element, Fn.KEY_DOWN, (r)=>{
                if (t.getActions().length === 0) return;
                const s = new gu(r);
                let o = !1;
                this.dropdownMenuActionViewItem?.isFocused() && s.equals(15) ? (o = !0, this.dropdownMenuActionViewItem?.blur(), this.focus()) : this.isFocused() && s.equals(17) && (o = !0, this.blur(), this.dropdownMenuActionViewItem?.focus()), o && (s.preventDefault(), s.stopPropagation());
            }));
        }
    }
    blur() {
        super.blur(), this.dropdownMenuActionViewItem?.blur();
    }
    setFocusable(e) {
        super.setFocusable(e), this.dropdownMenuActionViewItem?.setFocusable(e);
    }
};

}
