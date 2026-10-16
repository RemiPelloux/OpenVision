import { At, D, Di, Nt, Qe, tY } from "./Iwo.js";
import { $Sy } from "./SZu.js";
import { fz, r_e } from "./actionViewItems.js";
import { Kh, az, vu } from "./actions.js";
import { Db, es, kQ } from "./actions_2.js";
import { or, yi } from "./configuration.js";
import { aMo, pa } from "./constants_8.js";
import { Mf, aL, pf } from "./contextView.js";
import { Hi, Rr } from "./contextkey.js";
import { Hn } from "./dom_2.js";
import { cg, si } from "./editorContextKeys.js";
import { Ud, xu } from "./editorExtensions.js";
import { Ma, Ze, ut } from "./keyCodes.js";
import { Al, ru } from "./keybinding.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
import { Ex, _l, sv, xbt } from "./ze.js";
var G0e, OPp;
export { G0e, OPp };
var __wakaru_hWr_initialized = false;
export function hWr() {
if (__wakaru_hWr_initialized) return;
__wakaru_hWr_initialized = true;
"use strict";
E(), Hn(), fz(), vu(), pa(), Ma(), Qe(), Di(), Ud(), cg(), Bt(), es(), Hi(), pf(), ru(), or(), Sr(), G0e = class {
    constructor(t, e, n, i, r, s, o, a){
        this._contextMenuService = e, this._contextViewService = n, this._contextKeyService = i, this._keybindingService = r, this._menuService = s, this._configurationService = o, this._workspaceContextService = a, this._toDispose = new Nt, this._contextMenuIsBeingShownCount = 0, this._editor = t, this._toDispose.add(this._editor.onContextMenu((l)=>this._onContextMenu(l))), this._toDispose.add(this._editor.onMouseWheel((l)=>{
            if (this._contextMenuIsBeingShownCount > 0) {
                const c = this._contextViewService.getContextViewElement(), u = l.srcElement;
                u.shadowRoot && xbt(c) === u.shadowRoot || this._contextViewService.hideContextView();
            }
        })), this._toDispose.add(this._editor.onKeyDown((l)=>{
            this._editor.getOption(24) && l.keyCode === Ze.ContextMenu && (l.preventDefault(), l.stopPropagation(), this.showContextMenu());
        }));
    }
    static get(t) {
        return t.getContribution(G0e.ID);
    }
    _onContextMenu(t) {
        if (!this._editor.hasModel()) return;
        if (!this._editor.getOption(24)) {
            this._editor.focus(), t.target.position && !this._editor.getSelection().containsPosition(t.target.position) && this._editor.setPosition(t.target.position);
            return;
        }
        if (t.target.type === 12 || t.target.type === 6 && t.target.detail.injectedText) return;
        if (t.event.preventDefault(), t.event.stopPropagation(), t.target.type === 11) return this._showScrollbarContextMenu(t.event);
        if (t.target.type !== 6 && t.target.type !== 7 && t.target.type !== 1) return;
        if (this._editor.focus(), t.target.position) {
            let n = !1;
            for (const i of this._editor.getSelections())if (i.containsPosition(t.target.position)) {
                n = !0;
                break;
            }
            n || this._editor.setPosition(t.target.position);
        }
        let e = null;
        t.target.type !== 1 && (e = t.event), this.showContextMenu(e);
    }
    showContextMenu(t) {
        if (!this._editor.getOption(24) || !this._editor.hasModel()) return;
        const e = this._getMenuActions(this._editor.getModel(), this._editor.contextMenuId);
        e.length > 0 && this._doShowContextMenu(e, t);
    }
    _getMenuActions(t, e) {
        const n = [], i = this._menuService.getMenuActions(e, this._contextKeyService, {
            arg: t.uri
        });
        for (const r of i){
            const [, s] = r;
            let o = 0;
            for (const a of s)if (a instanceof kQ) {
                const l = this._getMenuActions(t, a.item.submenu);
                l.length > 0 && (n.push(new az(a.id, a.label, l)), o++);
            } else n.push(a), o++;
            o && n.push(new Kh);
        }
        return n.length && n.pop(), n;
    }
    _doShowContextMenu(t, e = null) {
        if (!this._editor.hasModel()) return;
        const n = this._editor.getOption(62);
        this._editor.updateOptions({
            hover: {
                enabled: !1
            }
        });
        let i = e;
        if (!i) {
            this._editor.revealPosition(this._editor.getPosition(), 1), this._editor.render();
            const s = this._editor.getScrolledVisiblePosition(this._editor.getPosition()), o = Ex(this._editor.getDomNode()), a = o.left + s.left, l = o.top + s.top + s.height;
            i = {
                x: a,
                y: l
            };
        }
        const r = this._editor.getOption(132) && !tY;
        this._contextMenuIsBeingShownCount++, this._contextMenuService.showContextMenu({
            domForShadowRoot: r ? this._editor.getOverflowWidgetsDomNode() ?? this._editor.getDomNode() : void 0,
            getAnchor: ()=>i,
            getActions: ()=>t,
            getActionViewItem: (s)=>{
                const o = this._keybindingFor(s);
                if (o) return new r_e(s, s, {
                    label: !0,
                    keybinding: o.getLabel(),
                    isMenu: !0
                });
                const a = s;
                return typeof a.getActionViewItem == "function" ? a.getActionViewItem() : new r_e(s, s, {
                    icon: !0,
                    label: !0,
                    isMenu: !0
                });
            },
            getKeyBinding: (s)=>this._keybindingFor(s),
            onHide: (s)=>{
                this._contextMenuIsBeingShownCount--, this._editor.updateOptions({
                    hover: n
                });
            }
        });
    }
    _showScrollbarContextMenu(t) {
        if (!this._editor.hasModel() || $Sy(this._workspaceContextService.getWorkspace())) return;
        const e = this._editor.getOption(74);
        let n = 0;
        const i = (l)=>({
                id: `menu-action-${++n}`,
                label: l.label,
                tooltip: "",
                class: void 0,
                enabled: typeof l.enabled > "u" ? !0 : l.enabled,
                checked: l.checked,
                run: l.run
            }), r = (l, c)=>new az(`menu-action-${++n}`, l, c, void 0), s = (l, c, u, d, h)=>{
            if (!c) return i({
                label: l,
                enabled: c,
                run: ()=>{}
            });
            const p = (f)=>()=>{
                    this._configurationService.updateValue(u, f);
                }, g = [];
            for (const f of h)g.push(i({
                label: f.label,
                checked: d === f.value,
                run: p(f.value)
            }));
            return r(l, g);
        }, o = [];
        o.push(i({
            label: D(1037, null),
            checked: e.enabled,
            run: ()=>{
                this._configurationService.updateValue("editor.minimap.enabled", !e.enabled);
            }
        })), o.push(new Kh), o.push(i({
            label: D(1038, null),
            enabled: e.enabled,
            checked: e.renderCharacters,
            run: ()=>{
                this._configurationService.updateValue("editor.minimap.renderCharacters", !e.renderCharacters);
            }
        })), o.push(s(D(1039, null), e.enabled, "editor.minimap.size", e.size, [
            {
                label: D(1040, null),
                value: "proportional"
            },
            {
                label: D(1041, null),
                value: "fill"
            },
            {
                label: D(1042, null),
                value: "fit"
            }
        ])), o.push(s(D(1043, null), e.enabled, "editor.minimap.showSlider", e.showSlider, [
            {
                label: D(1044, null),
                value: "mouseover"
            },
            {
                label: D(1045, null),
                value: "always"
            }
        ]));
        const a = this._editor.getOption(132) && !tY;
        this._contextMenuIsBeingShownCount++, this._contextMenuService.showContextMenu({
            domForShadowRoot: a ? this._editor.getDomNode() : void 0,
            getAnchor: ()=>t,
            getActions: ()=>o,
            onHide: (l)=>{
                this._contextMenuIsBeingShownCount--, this._editor.focus();
            }
        });
    }
    _keybindingFor(t) {
        const e = this._keybindingService.lookupKeybinding(t.id);
        if (e) return e;
        const n = aMo.get(t.id);
        return n ? this._keybindingService.lookupKeybinding(n) : void 0;
    }
    dispose() {
        this._contextMenuIsBeingShownCount > 0 && this._contextViewService.hideContextView(), this._toDispose.dispose();
    }
}, G0e.ID = "editor.contrib.contextmenu", G0e = Re([
    F(1, Mf),
    F(2, aL),
    F(3, Rr),
    F(4, Al),
    F(5, Db),
    F(6, yi),
    F(7, yr)
], G0e), OPp = class extends xu {
    constructor(){
        super({
            id: "editor.action.showContextMenu",
            label: At(1046, "Show Editor Context Menu"),
            precondition: void 0,
            kbOpts: {
                kbExpr: si.textInputFocus,
                primary: ut.Shift | Ze.F10,
                weight: 100
            }
        });
    }
    run(t, e) {
        G0e.get(e)?.showContextMenu();
    }
}, sv(G0e.ID, G0e, 2), _l(OPp);

}
