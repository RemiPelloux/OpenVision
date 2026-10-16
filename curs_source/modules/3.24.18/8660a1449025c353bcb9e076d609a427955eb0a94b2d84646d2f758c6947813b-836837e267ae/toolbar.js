import { D, Gt, Nt, Qe, st, wke } from "./Iwo.js";
import { PT, oR } from "./actionbar.js";
import { az, vu, za } from "./actions.js";
import { gs, yt } from "./codicons.js";
import { goi, lnt } from "./dropdownActionViewItem.js";
import { Bt } from "./nls.js";
import { Gn, ta } from "./themables.js";
import { vLy } from "./toolbar.css";
import { E } from "./tslib.es6.js";
import { fHe, sR } from "./ze.js";
var izd, cqo, $Tr;
export { $Tr, cqo, izd };
var __wakaru__Ly_initialized = false;
export function _Ly() {
if (__wakaru__Ly_initialized) return;
__wakaru__Ly_initialized = true;
"use strict";
E(), Bt(), vu(), gs(), Gt(), Qe(), ta(), PT(), goi(), sR(), vLy(), izd = class extends st {
    constructor(t, e, n = {
        orientation: 0
    }){
        super(), this.submenuActionViewItems = [], this.hasSecondaryActions = !1, this._onDidChangeDropdownVisibility = this._register(new wke), this.onDidChangeDropdownVisibility = this._onDidChangeDropdownVisibility.event, this.disposables = this._register(new Nt), n.hoverDelegate = n.hoverDelegate ?? this._register(fHe()), this.options = n, this.toggleMenuAction = this._register(new $Tr(()=>this.toggleMenuActionViewItem?.show(), n.toggleMenuTitle)), this.element = document.createElement("div"), this.element.className = "monaco-toolbar", t.appendChild(this.element), this.actionBar = this._register(new oR(this.element, {
            orientation: n.orientation,
            ariaLabel: n.ariaLabel,
            actionRunner: n.actionRunner,
            allowContextMenu: n.allowContextMenu,
            highlightToggledItems: n.highlightToggledItems,
            hoverDelegate: n.hoverDelegate,
            actionViewItemProvider: (i, r)=>{
                if (i.id === $Tr.ID) return this.toggleMenuActionViewItem = new lnt(i, i.menuActions, e, {
                    actionViewItemProvider: this.options.actionViewItemProvider,
                    actionRunner: this.actionRunner,
                    keybindingProvider: this.options.getKeyBinding,
                    classNames: Gn.asClassNameArray(n.moreIcon ?? yt.ellipsisTwo),
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
                if (i instanceof az) {
                    const s = new lnt(i, i.actions, e, {
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
    set actionRunner(t) {
        this.actionBar.actionRunner = t;
    }
    get actionRunner() {
        return this.actionBar.actionRunner;
    }
    set context(t) {
        this.actionBar.context = t, this.toggleMenuActionViewItem?.setActionContext(t);
        for (const e of this.submenuActionViewItems)e.setActionContext(t);
    }
    getElement() {
        return this.element;
    }
    focus() {
        this.actionBar.focus();
    }
    getItemsWidth() {
        let t = 0;
        for(let e = 0; e < this.actionBar.length(); e++)t += this.actionBar.getWidth(e);
        return t;
    }
    getItemAction(t) {
        return this.actionBar.getAction(t);
    }
    getItemWidth(t) {
        return this.actionBar.getWidth(t);
    }
    getItemsLength() {
        return this.actionBar.length();
    }
    setAriaLabel(t) {
        this.actionBar.setAriaLabel(t);
    }
    setActions(t, e) {
        this.clear();
        const n = t ? t.slice(0) : [];
        this.hasSecondaryActions = !!(e && e.length > 0), this.hasSecondaryActions && e && (this.toggleMenuAction.menuActions = e.slice(0), (typeof this.options.moreActionPlacement == "function" ? this.options.moreActionPlacement(t, e) : this.options.moreActionPlacement ?? "end") === "start" ? n.unshift(this.toggleMenuAction) : n.push(this.toggleMenuAction)), n.forEach((i)=>{
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
    getKeybindingLabel(t) {
        return this.options.getKeyBinding?.(t)?.getLabel() ?? void 0;
    }
    clear() {
        this.submenuActionViewItems = [], this.disposables.clear(), this.actionBar.clear();
    }
    dispose() {
        this.clear(), this.disposables.dispose(), super.dispose();
    }
}, cqo = class gRb extends za {
    constructor(e, n){
        n = n || D(30, null), super(gRb.ID, n, void 0, !0), this._menuActions = [], this.toggleDropdownMenu = e;
    }
    async run() {
        this.toggleDropdownMenu();
    }
    get menuActions() {
        return this._menuActions;
    }
    set menuActions(e) {
        this._menuActions = e;
    }
}, cqo.ID = "toolbar.toggle.more", $Tr = cqo;

}
