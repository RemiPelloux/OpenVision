import { Gie, He, S, Se, bt, we } from "./HVr.js";
import { Zm, cm } from "./actionbar.js";
import { JL, Vo, er } from "./actions.js";
import { Pe, _i } from "./codicons.js";
import { Owe, YV } from "./dropdownActionViewItem.js";
import { rt } from "./nls.js";
import { $f, VV } from "./qIc.js";
import { Ft, Sr } from "./themables.js";
import { wSg } from "./toolbar.css";
import { x } from "./tslib.es6.js";
var Zge, ris, uyi;
export { Zge, ris, uyi };
var __wakaru_cRe_initialized = false;
export function cRe() {
if (__wakaru_cRe_initialized) return;
__wakaru_cRe_initialized = true;
"use strict";
x(), rt(), Vo(), _i(), bt(), Se(), Sr(), Zm(), Owe(), $f(), wSg(), Zge = class extends we {
    constructor(e, t, n = {
        orientation: 0
    }){
        super(), this.submenuActionViewItems = [], this.hasSecondaryActions = !1, this._onDidChangeDropdownVisibility = this._register(new Gie), this.onDidChangeDropdownVisibility = this._onDidChangeDropdownVisibility.event, this.disposables = this._register(new He), n.hoverDelegate = n.hoverDelegate ?? this._register(VV()), this.options = n, this.toggleMenuAction = this._register(new uyi(()=>this.toggleMenuActionViewItem?.show(), n.toggleMenuTitle)), this.element = document.createElement("div"), this.element.className = "monaco-toolbar", e.appendChild(this.element), this.actionBar = this._register(new cm(this.element, {
            orientation: n.orientation,
            ariaLabel: n.ariaLabel,
            actionRunner: n.actionRunner,
            allowContextMenu: n.allowContextMenu,
            highlightToggledItems: n.highlightToggledItems,
            hoverDelegate: n.hoverDelegate,
            actionViewItemProvider: (i, r)=>{
                if (i.id === uyi.ID) return this.toggleMenuActionViewItem = new YV(i, i.menuActions, t, {
                    actionViewItemProvider: this.options.actionViewItemProvider,
                    actionRunner: this.actionRunner,
                    keybindingProvider: this.options.getKeyBinding,
                    classNames: Ft.asClassNameArray(n.moreIcon ?? Pe.ellipsisTwo),
                    anchorAlignmentProvider: this.options.anchorAlignmentProvider,
                    menuAsChild: !!this.options.renderDropdownAsChildElement,
                    skipTelemetry: this.options.skipTelemetry,
                    isMenu: !0,
                    hoverDelegate: this.options.hoverDelegate
                }), this.toggleMenuActionViewItem.setActionContext(this.actionBar.context), this.disposables.add(this._onDidChangeDropdownVisibility.add(this.toggleMenuActionViewItem.onDidChangeVisibility)), this.toggleMenuActionViewItem;
                if (n.actionViewItemProvider) {
                    const s = n.actionViewItemProvider(i, r);
                    if (s) return s;
                }
                if (i instanceof JL) {
                    const s = new YV(i, i.actions, t, {
                        actionViewItemProvider: this.options.actionViewItemProvider,
                        actionRunner: this.actionRunner,
                        keybindingProvider: this.options.getKeyBinding,
                        classNames: i.class,
                        anchorAlignmentProvider: this.options.anchorAlignmentProvider,
                        menuAsChild: !!this.options.renderDropdownAsChildElement,
                        skipTelemetry: this.options.skipTelemetry,
                        hoverDelegate: this.options.hoverDelegate
                    });
                    return s.setActionContext(this.actionBar.context), this.submenuActionViewItems.push(s), this.disposables.add(this._onDidChangeDropdownVisibility.add(s.onDidChangeVisibility)), s;
                }
            }
        }));
    }
    set actionRunner(e) {
        this.actionBar.actionRunner = e;
    }
    get actionRunner() {
        return this.actionBar.actionRunner;
    }
    set context(e) {
        this.actionBar.context = e, this.toggleMenuActionViewItem?.setActionContext(e);
        for (const t of this.submenuActionViewItems)t.setActionContext(e);
    }
    getElement() {
        return this.element;
    }
    focus() {
        this.actionBar.focus();
    }
    getItemsWidth() {
        let e = 0;
        for(let t = 0; t < this.actionBar.length(); t++)e += this.actionBar.getWidth(t);
        return e;
    }
    getItemAction(e) {
        return this.actionBar.getAction(e);
    }
    getItemWidth(e) {
        return this.actionBar.getWidth(e);
    }
    getItemsLength() {
        return this.actionBar.length();
    }
    setAriaLabel(e) {
        this.actionBar.setAriaLabel(e);
    }
    setActions(e, t) {
        this.clear();
        const n = e ? e.slice(0) : [];
        this.hasSecondaryActions = !!(t && t.length > 0), this.hasSecondaryActions && t && (this.toggleMenuAction.menuActions = t.slice(0), (typeof this.options.moreActionPlacement == "function" ? this.options.moreActionPlacement(e, t) : this.options.moreActionPlacement ?? "end") === "start" ? n.unshift(this.toggleMenuAction) : n.push(this.toggleMenuAction)), n.forEach((i)=>{
            this.actionBar.push(i, {
                icon: this.options.icon ?? !0,
                label: this.options.label ?? !1,
                keybinding: this.getKeybindingLabel(i)
            });
        });
    }
    isEmpty() {
        return this.actionBar.isEmpty();
    }
    getKeybindingLabel(e) {
        return this.options.getKeyBinding?.(e)?.getLabel() ?? void 0;
    }
    clear() {
        this.submenuActionViewItems = [], this.disposables.clear(), this.actionBar.clear();
    }
    dispose() {
        this.clear(), this.disposables.dispose(), super.dispose();
    }
}, ris = class Vkm extends er {
    constructor(t, n){
        n = n || S(30, null), super(Vkm.ID, n, void 0, !0), this._menuActions = [], this.toggleDropdownMenu = t;
    }
    async run() {
        this.toggleDropdownMenu();
    }
    get menuActions() {
        return this._menuActions;
    }
    set menuActions(t) {
        this._menuActions = t;
    }
}, ris.ID = "toolbar.toggle.more", uyi = ris;

}
