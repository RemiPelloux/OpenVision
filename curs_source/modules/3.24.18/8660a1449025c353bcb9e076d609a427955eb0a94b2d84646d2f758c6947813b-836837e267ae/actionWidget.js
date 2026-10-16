import { At, D, Nt, Qe, Vn, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { GLy, Qqo, Zqo, pEr } from "./actionList.js";
import { Gzd } from "./actionWidget.css";
import { PT, oR } from "./actionbar.js";
import { es, sn } from "./actions_2.js";
import { Ap } from "./colorRegistry.js";
import { aL, pf } from "./contextView.js";
import { Hi, Rr, cn } from "./contextkey.js";
import { Hn, Pr } from "./dom_2.js";
import { Rn } from "./extensions.js";
import { q9t } from "./inputColors.js";
import { It, dn } from "./instantiation.js";
import { Ma, Ze, ut } from "./keyCodes.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ht, Ii, j3, li, mn } from "./ze.js";
var Kyt, IHe, Yyt, vvn;
export { IHe, Kyt, Yyt, vvn };
var __wakaru_ezo_initialized = false;
export function ezo() {
if (__wakaru_ezo_initialized) return;
__wakaru_ezo_initialized = true;
"use strict";
E(), Hn(), PT(), Ma(), Qe(), Gzd(), Bt(), GLy(), es(), Hi(), pf(), Rn(), It(), Ap(), mn("actionBar.toggledBackground", q9t, D(1790, null)), Kyt = {
    Visible: new cn("codeActionMenuVisible", !1, D(1791, null))
}, IHe = jn("actionWidgetService"), Yyt = class extends st {
    constructor(t, e, n){
        super(), this._contextViewService = t, this._contextKeyService = e, this._instantiationService = n, this._list = this._register(new Vn);
    }
    get isVisible() {
        return Kyt.Visible.getValue(this._contextKeyService) || !1;
    }
    show(t, e, n, i, r, s, o) {
        const a = Kyt.Visible.bindTo(this._contextKeyService), l = this._instantiationService.createInstance(pEr, t, e, n, i);
        this._contextViewService.showContextView({
            getAnchor: ()=>r,
            render: (c)=>(a.set(!0), this._renderWidget(c, l, o ?? [])),
            onHide: (c)=>{
                a.reset(), this._onWidgetClosed(c);
            }
        }, s, !1);
    }
    acceptSelected(t) {
        this._list.value?.acceptSelected(t);
    }
    focusPrevious() {
        this._list?.value?.focusPrevious();
    }
    focusNext() {
        this._list?.value?.focusNext();
    }
    hide(t) {
        this._list.value?.hide(t), this._list.clear();
    }
    clear() {
        this._list.clear();
    }
    _renderWidget(t, e, n) {
        const i = document.createElement("div");
        if (i.classList.add("action-widget"), t.appendChild(i), this._list.value = e, this._list.value) i.appendChild(this._list.value.domNode);
        else throw new Error("List has no value");
        const r = new Nt, s = document.createElement("div"), o = t.appendChild(s);
        o.classList.add("context-view-block"), r.add(li(o, Pr.MOUSE_DOWN, (h)=>h.stopPropagation()));
        const a = document.createElement("div"), l = t.appendChild(a);
        l.classList.add("context-view-pointerBlock"), r.add(li(l, Pr.POINTER_MOVE, ()=>l.remove())), r.add(li(l, Pr.MOUSE_DOWN, ()=>l.remove()));
        let c = 0;
        if (n.length) {
            const h = this._createActionBar(".action-widget-action-bar", n);
            h && (i.appendChild(h.getContainer().parentElement), r.add(h), c = h.getContainer().offsetWidth);
        }
        const u = this._list.value?.layout(c);
        i.style.width = `${u}px`;
        const d = r.add(j3(t));
        return r.add(d.onDidBlur(()=>this.hide(!0))), r;
    }
    _createActionBar(t, e) {
        if (!e.length) return;
        const n = Ii(t), i = new oR(n);
        return i.push(e, {
            icon: !1,
            label: !0
        }), i;
    }
    _onWidgetClosed(t) {
        this._list.value?.hide(t);
    }
}, Yyt = Re([
    F(0, aL),
    F(1, Rr),
    F(2, dn)
], Yyt), bn(IHe, Yyt, 1), vvn = 1100, Ht(class extends sn {
    constructor(){
        super({
            id: "hideCodeActionWidget",
            title: At(1792, "Hide action widget"),
            precondition: Kyt.Visible,
            keybinding: {
                weight: vvn,
                primary: Ze.Escape,
                secondary: [
                    ut.Shift | Ze.Escape
                ]
            }
        });
    }
    run(t) {
        t.get(IHe).hide(!0);
    }
}), Ht(class extends sn {
    constructor(){
        super({
            id: "selectPrevCodeAction",
            title: At(1793, "Select previous action"),
            precondition: Kyt.Visible,
            keybinding: {
                weight: vvn,
                primary: Ze.UpArrow,
                secondary: [
                    ut.CtrlCmd | Ze.UpArrow
                ],
                mac: {
                    primary: Ze.UpArrow,
                    secondary: [
                        ut.CtrlCmd | Ze.UpArrow,
                        ut.WinCtrl | Ze.KeyP
                    ]
                }
            }
        });
    }
    run(t) {
        const e = t.get(IHe);
        e instanceof Yyt && e.focusPrevious();
    }
}), Ht(class extends sn {
    constructor(){
        super({
            id: "selectNextCodeAction",
            title: At(1794, "Select next action"),
            precondition: Kyt.Visible,
            keybinding: {
                weight: vvn,
                primary: Ze.DownArrow,
                secondary: [
                    ut.CtrlCmd | Ze.DownArrow
                ],
                mac: {
                    primary: Ze.DownArrow,
                    secondary: [
                        ut.CtrlCmd | Ze.DownArrow,
                        ut.WinCtrl | Ze.KeyN
                    ]
                }
            }
        });
    }
    run(t) {
        const e = t.get(IHe);
        e instanceof Yyt && e.focusNext();
    }
}), Ht(class extends sn {
    constructor(){
        super({
            id: Zqo,
            title: At(1795, "Accept selected action"),
            precondition: Kyt.Visible,
            keybinding: {
                weight: vvn,
                primary: Ze.Enter,
                secondary: [
                    ut.CtrlCmd | Ze.Period
                ]
            }
        });
    }
    run(t) {
        const e = t.get(IHe);
        e instanceof Yyt && e.acceptSelected();
    }
}), Ht(class extends sn {
    constructor(){
        super({
            id: Qqo,
            title: At(1796, "Preview selected action"),
            precondition: Kyt.Visible,
            keybinding: {
                weight: vvn,
                primary: ut.CtrlCmd | Ze.Enter
            }
        });
    }
    run(t) {
        const e = t.get(IHe);
        e instanceof Yyt && e.acceptSelected(!0);
    }
});

}
