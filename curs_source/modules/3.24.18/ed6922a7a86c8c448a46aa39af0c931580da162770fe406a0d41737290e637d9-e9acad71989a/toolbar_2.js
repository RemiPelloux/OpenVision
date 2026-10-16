import { Alg, He, S, Se, Tpn, Zu, bt, si, ve } from "./HVr.js";
import { ESg, his } from "./actionViewItemService.js";
import { Vc, Vo } from "./actions.js";
import { C, Re, Zl, ei, ie, n2, rv } from "./actions_2.js";
import { dr } from "./arrays.js";
import { lge } from "./collections.js";
import { $n, vi } from "./commands.js";
import { Yo, ka } from "./contextView.js";
import { dn, xn } from "./contextkey.js";
import { en, xi } from "./dom_2.js";
import { Ze, _t } from "./instantiation.js";
import { Eg, _a } from "./iterator.js";
import { no, qr } from "./keybinding.js";
import { lm } from "./menuEntryActionViewItem.js";
import { dis } from "./menuService.js";
import { J_, ew } from "./mouseEvent.js";
import { rt } from "./nls.js";
import { Xt, iN, lh, lis, wM } from "./qIc.js";
import { $h, np } from "./telemetry.js";
import { Zge, cRe, uyi } from "./toolbar.js";
import { x } from "./tslib.es6.js";
var Ax, XV;
export { Ax, XV };
var __wakaru_CM_initialized = false;
export function CM() {
if (__wakaru_CM_initialized) return;
__wakaru_CM_initialized = true;
"use strict";
x(), en(), ew(), cRe(), Vo(), dr(), lge(), si(), bt(), Eg(), Se(), rt(), vi(), dn(), ka(), Ze(), no(), np(), ei(), dis(), ESg(), lm(), Ax = class extends Zge {
    constructor(e, t, n, i, r, s, o, a){
        super(e, r, {
            getKeyBinding: (c)=>s.lookupKeybinding(c.id) ?? void 0,
            ...t,
            allowContextMenu: !0,
            skipTelemetry: typeof t?.telemetrySource == "string"
        }), this._options = t, this._menuService = n, this._contextKeyService = i, this._contextMenuService = r, this._keybindingService = s, this._commandService = o, this._sessionDisposables = this._store.add(new He);
    }
    setActions(e, t = [], n) {
        this._sessionDisposables.clear();
        const i = e.slice(), r = t.slice(), s = [];
        let o = 0;
        const a = [];
        let c = !1;
        if (this._options?.hiddenItemStrategy !== -1) for(let u = 0; u < i.length; u++){
            const h = i[u];
            !(h instanceof rv) && !(h instanceof n2) || h.hideActions && (s.push(h.hideActions.toggle), h.hideActions.toggle.checked && o++, h.hideActions.isHidden && (c = !0, i[u] = void 0, this._options?.hiddenItemStrategy !== 0 && (a[u] = h)));
        }
        if (this._options?.overflowBehavior !== void 0) {
            const u = Alg(new Set(this._options.overflowBehavior.exempted), _a.map(i, (g)=>g?.id)), h = this._options.overflowBehavior.maxItems - u.size;
            let p = 0;
            for(let g = 0; g < i.length; g++){
                const f = i[g];
                f && (p++, !u.has(f.id) && p >= h && (i[g] = void 0, a[g] = f));
            }
        }
        Tpn(i), Tpn(a);
        const l = Vc.join(a, r);
        if ((s.length > 0 || i.length > 0) && this._options?.resetMenu === Re.EditorTitle) {
            const u = s.slice(), h = c;
            let p = n ? n.slice() : void 0;
            this._options?.resetMenu && !p && (p = [
                this._options.resetMenu
            ]);
            const g = lh({
                id: "configureIconVisibility",
                label: S(1779, null),
                run: ()=>{
                    const f = this.getElement(), b = f.querySelector('[data-command-id="toolbar.toggle.more"]') || f.querySelector(".monaco-action-bar .action-item:last-child") || f, y = [];
                    u.length > 0 && y.push(...u), y.length > 0 && y.push(new Vc), y.push(lh({
                        id: "resetThisMenu",
                        label: S(1780, null),
                        run: ()=>this._menuService.resetHiddenStates(p)
                    })), y.length > 0 && this._contextMenuService.showContextMenu({
                        getAnchor: ()=>b,
                        getActions: ()=>y,
                        menuId: this._options?.contextMenu,
                        menuActionOptions: {
                            renderShortTitle: !0,
                            ...this._options?.menuOptions
                        },
                        skipTelemetry: typeof this._options?.telemetrySource == "string",
                        contextKeyService: this._contextKeyService
                    });
                }
            });
            l.length > 0 && l.push(new Vc), l.push(g);
        }
        super.setActions(i, l), (s.length > 0 || i.length > 0) && this._sessionDisposables.add(Xt(this.getElement(), "contextmenu", (u)=>{
            const h = new J_(xi(this.getElement()), u), p = this.getItemAction(h.target);
            if (!p) return;
            h.preventDefault(), h.stopPropagation();
            const g = [];
            if (p instanceof rv && p.menuKeybinding) g.push(p.menuKeybinding);
            else if (!(p instanceof n2 || p instanceof uyi)) {
                const v = !!this._keybindingService.lookupKeybinding(p.id);
                g.push(lis(this._commandService, this._keybindingService, p.id, void 0, v));
            }
            if (s.length > 0) {
                let v = !1;
                if (o === 1 && this._options?.hiddenItemStrategy === 0) {
                    v = !0;
                    for(let b = 0; b < s.length; b++)if (s[b].checked) {
                        s[b] = lh({
                            id: p.id,
                            label: p.label,
                            checked: !0,
                            enabled: !1,
                            run () {}
                        });
                        break;
                    }
                }
                if (!v && (p instanceof rv || p instanceof n2)) {
                    if (!p.hideActions) return;
                    g.push(p.hideActions.hide);
                } else g.push(lh({
                    id: "label",
                    label: S(1781, null),
                    enabled: !1,
                    run () {}
                }));
            }
            const f = Vc.join(g, s);
            this._options?.resetMenu && !n && (n = [
                this._options.resetMenu
            ]), c && n && (f.push(new Vc), f.push(lh({
                id: "resetThisMenu",
                label: S(1782, null),
                run: ()=>this._menuService.resetHiddenStates(n)
            }))), f.length !== 0 && this._contextMenuService.showContextMenu({
                getAnchor: ()=>h,
                getActions: ()=>f,
                menuId: this._options?.contextMenu,
                menuActionOptions: {
                    renderShortTitle: !0,
                    ...this._options?.menuOptions
                },
                skipTelemetry: typeof this._options?.telemetrySource == "string",
                contextKeyService: this._contextKeyService
            });
        }));
    }
}, Ax = ie([
    C(2, Zl),
    C(3, xn),
    C(4, Yo),
    C(5, qr),
    C(6, $n),
    C(7, $h)
], Ax), XV = class extends Ax {
    constructor(e, t, n, i, r, s, o, a, c, l, u){
        super(e, {
            resetMenu: t,
            ...n,
            actionViewItemProvider: (g, f)=>{
                let v = l.lookUp(t, g instanceof n2 ? g.item.submenu.id : g.id);
                v || (v = n?.actionViewItemProvider);
                const b = v?.(g, f);
                return b || wM(u, g, f);
            }
        }, i, r, s, o, a, c), this._onDidChangeMenuItems = this._store.add(new ve), this.onDidChangeMenuItems = this._onDidChangeMenuItems.event;
        const h = this._store.add(i.createMenu(t, r, {
            emitEventsForSubmenuChanges: !0,
            eventDebounceDelay: n?.eventDebounceDelay
        })), p = ()=>{
            const { primary: g, secondary: f } = iN(h.getActions(n?.menuOptions), n?.toolbarOptions?.primaryGroup, n?.toolbarOptions?.shouldInlineSubmenu, n?.toolbarOptions?.useSeparatorsInPrimaryActions);
            e.classList.toggle("has-no-actions", g.length === 0 && f.length === 0), super.setActions(g, f);
        };
        this._store.add(h.onDidChange(()=>{
            p(), this._onDidChangeMenuItems.fire(this);
        })), this._store.add(l.onDidChange((g)=>{
            g === t && p();
        })), p();
    }
    setActions() {
        throw new Zu("This toolbar is populated from a menu.");
    }
}, XV = ie([
    C(3, Zl),
    C(4, xn),
    C(5, Yo),
    C(6, qr),
    C(7, $n),
    C(8, $h),
    C(9, his),
    C(10, _t)
], XV);

}
