import { D, Ei, Fpr, Gt, Nt, Qe, f_y, tt, xh } from "./Iwo.js";
import { SLy, fqo } from "./actionViewItemService.js";
import { Kh, vu } from "./actions.js";
import { Db, Ft, es, kQ, n6 } from "./actions_2.js";
import { bo } from "./arrays.js";
import { YFt } from "./collections.js";
import { nr, rs } from "./commands.js";
import { Mf, pf } from "./contextView.js";
import { Hi, Rr } from "./contextkey.js";
import { Hn, ws } from "./dom_2.js";
import { It, dn } from "./instantiation.js";
import { IT, np } from "./iterator.js";
import { Al, ru } from "./keybinding.js";
import { MC } from "./menuEntryActionViewItem.js";
import { gqo } from "./menuService.js";
import { i2, iT } from "./mouseEvent.js";
import { Bt } from "./nls.js";
import { Uv, Xv } from "./telemetry.js";
import { $Tr, _Ly, izd } from "./toolbar.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ig, cnt, li, pqo, sRe } from "./ze.js";
var Soe, Gyt;
export { Gyt, Soe };
var __wakaru_wwe_initialized = false;
export function wwe() {
if (__wakaru_wwe_initialized) return;
__wakaru_wwe_initialized = true;
"use strict";
E(), Hn(), i2(), _Ly(), vu(), bo(), YFt(), Ei(), Gt(), IT(), Qe(), Bt(), rs(), Hi(), pf(), It(), ru(), Xv(), es(), gqo(), SLy(), MC(), Soe = class extends izd {
    constructor(t, e, n, i, r, s, o, a){
        super(t, r, {
            getKeyBinding: (l)=>s.lookupKeybinding(l.id) ?? void 0,
            ...e,
            allowContextMenu: !0,
            skipTelemetry: typeof e?.telemetrySource == "string"
        }), this._options = e, this._menuService = n, this._contextKeyService = i, this._contextMenuService = r, this._keybindingService = s, this._commandService = o, this._sessionDisposables = this._store.add(new Nt);
    }
    setActions(t, e = [], n) {
        this._sessionDisposables.clear();
        const i = t.slice(), r = e.slice(), s = [];
        let o = 0;
        const a = [];
        let l = !1;
        if (this._options?.hiddenItemStrategy !== -1) for(let u = 0; u < i.length; u++){
            const d = i[u];
            !(d instanceof n6) && !(d instanceof kQ) || d.hideActions && (s.push(d.hideActions.toggle), d.hideActions.toggle.checked && o++, d.hideActions.isHidden && (l = !0, i[u] = void 0, this._options?.hiddenItemStrategy !== 0 && (a[u] = d)));
        }
        if (this._options?.overflowBehavior !== void 0) {
            const u = f_y(new Set(this._options.overflowBehavior.exempted), np.map(i, (p)=>p?.id)), d = this._options.overflowBehavior.maxItems - u.size;
            let h = 0;
            for(let p = 0; p < i.length; p++){
                const g = i[p];
                g && (h++, !u.has(g.id) && h >= d && (i[p] = void 0, a[p] = g));
            }
        }
        Fpr(i), Fpr(a);
        const c = Kh.join(a, r);
        if ((s.length > 0 || i.length > 0) && this._options?.resetMenu === Ft.EditorTitle) {
            const u = s.slice(), d = l;
            let h = n ? n.slice() : void 0;
            this._options?.resetMenu && !h && (h = [
                this._options.resetMenu
            ]);
            const p = Ig({
                id: "configureIconVisibility",
                label: D(1779, null),
                run: ()=>{
                    const g = this.getElement(), _ = g.querySelector('[data-command-id="toolbar.toggle.more"]') || g.querySelector(".monaco-action-bar .action-item:last-child") || g, b = [];
                    u.length > 0 && b.push(...u), b.length > 0 && b.push(new Kh), b.push(Ig({
                        id: "resetThisMenu",
                        label: D(1780, null),
                        run: ()=>this._menuService.resetHiddenStates(h)
                    })), b.length > 0 && this._contextMenuService.showContextMenu({
                        getAnchor: ()=>_,
                        getActions: ()=>b,
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
            c.length > 0 && c.push(new Kh), c.push(p);
        }
        super.setActions(i, c), (s.length > 0 || i.length > 0) && this._sessionDisposables.add(li(this.getElement(), "contextmenu", (u)=>{
            const d = new iT(ws(this.getElement()), u), h = this.getItemAction(d.target);
            if (!h) return;
            d.preventDefault(), d.stopPropagation();
            const p = [];
            if (h instanceof n6 && h.menuKeybinding) p.push(h.menuKeybinding);
            else if (!(h instanceof kQ || h instanceof $Tr)) {
                const f = !!this._keybindingService.lookupKeybinding(h.id);
                p.push(pqo(this._commandService, this._keybindingService, h.id, void 0, f));
            }
            if (s.length > 0) {
                let f = !1;
                if (o === 1 && this._options?.hiddenItemStrategy === 0) {
                    f = !0;
                    for(let _ = 0; _ < s.length; _++)if (s[_].checked) {
                        s[_] = Ig({
                            id: h.id,
                            label: h.label,
                            checked: !0,
                            enabled: !1,
                            run () {}
                        });
                        break;
                    }
                }
                if (!f && (h instanceof n6 || h instanceof kQ)) {
                    if (!h.hideActions) return;
                    p.push(h.hideActions.hide);
                } else p.push(Ig({
                    id: "label",
                    label: D(1781, null),
                    enabled: !1,
                    run () {}
                }));
            }
            const g = Kh.join(p, s);
            this._options?.resetMenu && !n && (n = [
                this._options.resetMenu
            ]), l && n && (g.push(new Kh), g.push(Ig({
                id: "resetThisMenu",
                label: D(1782, null),
                run: ()=>this._menuService.resetHiddenStates(n)
            }))), g.length !== 0 && this._contextMenuService.showContextMenu({
                getAnchor: ()=>d,
                getActions: ()=>g,
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
}, Soe = Re([
    F(2, Db),
    F(3, Rr),
    F(4, Mf),
    F(5, Al),
    F(6, nr),
    F(7, Uv)
], Soe), Gyt = class extends Soe {
    constructor(t, e, n, i, r, s, o, a, l, c, u){
        super(t, {
            resetMenu: e,
            ...n,
            actionViewItemProvider: (p, g)=>{
                let f = c.lookUp(e, p instanceof kQ ? p.item.submenu.id : p.id);
                f || (f = n?.actionViewItemProvider);
                const _ = f?.(p, g);
                return _ || sRe(u, p, g);
            }
        }, i, r, s, o, a, l), this._onDidChangeMenuItems = this._store.add(new tt), this.onDidChangeMenuItems = this._onDidChangeMenuItems.event;
        const d = this._store.add(i.createMenu(e, r, {
            emitEventsForSubmenuChanges: !0,
            eventDebounceDelay: n?.eventDebounceDelay
        })), h = ()=>{
            const { primary: p, secondary: g } = cnt(d.getActions(n?.menuOptions), n?.toolbarOptions?.primaryGroup, n?.toolbarOptions?.shouldInlineSubmenu, n?.toolbarOptions?.useSeparatorsInPrimaryActions);
            t.classList.toggle("has-no-actions", p.length === 0 && g.length === 0), super.setActions(p, g);
        };
        this._store.add(d.onDidChange(()=>{
            h(), this._onDidChangeMenuItems.fire(this);
        })), this._store.add(c.onDidChange((p)=>{
            p === e && h();
        })), h();
    }
    setActions() {
        throw new xh("This toolbar is populated from a menu.");
    }
}, Gyt = Re([
    F(3, Db),
    F(4, Rr),
    F(5, Mf),
    F(6, Al),
    F(7, nr),
    F(8, Uv),
    F(9, fqo),
    F(10, dn)
], Gyt);

}
