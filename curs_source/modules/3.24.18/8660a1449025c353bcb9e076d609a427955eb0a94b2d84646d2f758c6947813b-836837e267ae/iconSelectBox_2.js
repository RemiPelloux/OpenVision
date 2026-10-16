import { Hi, Rr, cn, mt } from "./contextkey.js";
import { Hn } from "./dom_2.js";
import { B2g, sDk } from "./iconSelectBox.js";
import { Ma, Ze } from "./keyCodes.js";
import { ja, xT } from "./keybindingsRegistry.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { j3 } from "./ze.js";
var pKt, Zds, Qds, D9e;
export { D9e, Qds, Zds, pKt };
var __wakaru_oDk_initialized = false;
export function oDk() {
if (__wakaru_oDk_initialized) return;
__wakaru_oDk_initialized = true;
"use strict";
E(), sDk(), Ma(), Hn(), Hi(), xT(), pKt = new cn("iconSelectBoxFocus", !0), Zds = new cn("iconSelectBoxInputFocus", !0), Qds = new cn("iconSelectBoxInputEmpty", !0), D9e = class extends B2g {
    static getFocusedWidget() {
        return D9e.focusedWidget;
    }
    constructor(t, e){
        if (super(t), this.contextKeyService = this._register(e.createScoped(this.domNode)), pKt.bindTo(this.contextKeyService), this.inputFocusContextKey = Zds.bindTo(this.contextKeyService), this.inputEmptyContextKey = Qds.bindTo(this.contextKeyService), this.inputBox) {
            const n = this._register(j3(this.inputBox.inputElement));
            this._register(n.onDidFocus(()=>this.inputFocusContextKey.set(!0))), this._register(n.onDidBlur(()=>this.inputFocusContextKey.set(!1))), this._register(this.inputBox.onDidChange(()=>this.inputEmptyContextKey.set(this.inputBox?.value.length === 0)));
        }
    }
    focus() {
        super.focus(), D9e.focusedWidget = this;
    }
}, D9e = Re([
    F(1, Rr)
], D9e), ja.registerCommandAndKeybindingRule({
    id: "iconSelectBox.focusUp",
    weight: 200,
    when: pKt,
    primary: Ze.UpArrow,
    handler: ()=>{
        const t = D9e.getFocusedWidget();
        t && t.focusPreviousRow();
    }
}), ja.registerCommandAndKeybindingRule({
    id: "iconSelectBox.focusDown",
    weight: 200,
    when: pKt,
    primary: Ze.DownArrow,
    handler: ()=>{
        const t = D9e.getFocusedWidget();
        t && t.focusNextRow();
    }
}), ja.registerCommandAndKeybindingRule({
    id: "iconSelectBox.focusNext",
    weight: 200,
    when: mt.and(pKt, mt.or(Qds, Zds.toNegated())),
    primary: Ze.RightArrow,
    handler: ()=>{
        const t = D9e.getFocusedWidget();
        t && t.focusNext();
    }
}), ja.registerCommandAndKeybindingRule({
    id: "iconSelectBox.focusPrevious",
    weight: 200,
    when: mt.and(pKt, mt.or(Qds, Zds.toNegated())),
    primary: Ze.LeftArrow,
    handler: ()=>{
        const t = D9e.getFocusedWidget();
        t && t.focusPrevious();
    }
}), ja.registerCommandAndKeybindingRule({
    id: "iconSelectBox.selectFocused",
    weight: 200,
    when: pKt,
    primary: Ze.Enter,
    handler: ()=>{
        const t = D9e.getFocusedWidget();
        t && t.setSelection(t.getFocus()[0]);
    }
});

}
