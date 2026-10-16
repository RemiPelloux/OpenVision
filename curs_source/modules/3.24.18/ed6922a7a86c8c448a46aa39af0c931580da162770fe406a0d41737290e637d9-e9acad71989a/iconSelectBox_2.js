import { C, ie } from "./actions_2.js";
import { At, dn, he, xn } from "./contextkey.js";
import { en } from "./dom_2.js";
import { Qd_, o9h } from "./iconSelectBox.js";
import { Pr, fe } from "./keyCodes.js";
import { Qr, eb } from "./keybindingsRegistry.js";
import { rw } from "./qIc.js";
import { x } from "./tslib.es6.js";
var B0t, Mir, Pir, hbe;
export { B0t, Mir, Pir, hbe };
var __wakaru_a9h_initialized = false;
export function a9h() {
if (__wakaru_a9h_initialized) return;
__wakaru_a9h_initialized = true;
"use strict";
x(), Qd_(), Pr(), en(), dn(), eb(), B0t = new At("iconSelectBoxFocus", !0), Mir = new At("iconSelectBoxInputFocus", !0), Pir = new At("iconSelectBoxInputEmpty", !0), hbe = class extends o9h {
    static getFocusedWidget() {
        return hbe.focusedWidget;
    }
    constructor(e, t){
        if (super(e), this.contextKeyService = this._register(t.createScoped(this.domNode)), B0t.bindTo(this.contextKeyService), this.inputFocusContextKey = Mir.bindTo(this.contextKeyService), this.inputEmptyContextKey = Pir.bindTo(this.contextKeyService), this.inputBox) {
            const n = this._register(rw(this.inputBox.inputElement));
            this._register(n.onDidFocus(()=>this.inputFocusContextKey.set(!0))), this._register(n.onDidBlur(()=>this.inputFocusContextKey.set(!1))), this._register(this.inputBox.onDidChange(()=>this.inputEmptyContextKey.set(this.inputBox?.value.length === 0)));
        }
    }
    focus() {
        super.focus(), hbe.focusedWidget = this;
    }
}, hbe = ie([
    C(1, xn)
], hbe), Qr.registerCommandAndKeybindingRule({
    id: "iconSelectBox.focusUp",
    weight: 200,
    when: B0t,
    primary: fe.UpArrow,
    handler: ()=>{
        const e = hbe.getFocusedWidget();
        e && e.focusPreviousRow();
    }
}), Qr.registerCommandAndKeybindingRule({
    id: "iconSelectBox.focusDown",
    weight: 200,
    when: B0t,
    primary: fe.DownArrow,
    handler: ()=>{
        const e = hbe.getFocusedWidget();
        e && e.focusNextRow();
    }
}), Qr.registerCommandAndKeybindingRule({
    id: "iconSelectBox.focusNext",
    weight: 200,
    when: he.and(B0t, he.or(Pir, Mir.toNegated())),
    primary: fe.RightArrow,
    handler: ()=>{
        const e = hbe.getFocusedWidget();
        e && e.focusNext();
    }
}), Qr.registerCommandAndKeybindingRule({
    id: "iconSelectBox.focusPrevious",
    weight: 200,
    when: he.and(B0t, he.or(Pir, Mir.toNegated())),
    primary: fe.LeftArrow,
    handler: ()=>{
        const e = hbe.getFocusedWidget();
        e && e.focusPrevious();
    }
}), Qr.registerCommandAndKeybindingRule({
    id: "iconSelectBox.selectFocused",
    weight: 200,
    when: B0t,
    primary: fe.Enter,
    handler: ()=>{
        const e = hbe.getFocusedWidget();
        e && e.setSelection(e.getFocus()[0]);
    }
});

}
