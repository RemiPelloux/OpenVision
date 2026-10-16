import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Al, ru } from "./keybinding.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Mme, Eys;
export { Eys, Mme };
var __wakaru_NTe_initialized = false;
export function NTe() {
if (__wakaru_NTe_initialized) return;
__wakaru_NTe_initialized = true;
"use strict";
E(), Rn(), It(), ru(), Mme = jn("glassKeybindingService"), Eys = class {
    constructor(t){
        this._keybindingService = t;
    }
    get vscodeService() {
        return this._keybindingService;
    }
    get inChordMode() {
        return this._keybindingService.inChordMode;
    }
    get inKeybindingHoldMode() {
        return this._keybindingService.inKeybindingHoldMode;
    }
    get onDidUpdateKeybindings() {
        return this._keybindingService.onDidUpdateKeybindings;
    }
    get onDidDispatchKeybinding() {
        return this._keybindingService.onDidDispatchKeybinding;
    }
    resolveKeybinding(t) {
        return this._keybindingService.resolveKeybinding(t);
    }
    resolveKeyboardEvent(t) {
        return this._keybindingService.resolveKeyboardEvent(t);
    }
    dispatchEventWithContext(t, e) {
        return this._keybindingService.dispatchEventWithContext(t, e);
    }
    mightDispatch(t) {
        return this._keybindingService.mightDispatch(t);
    }
    softDispatch(t, e, n, i) {
        return this._keybindingService.softDispatch(t, e, n, i);
    }
    enableKeybindingHoldMode(t) {
        return this._keybindingService.enableKeybindingHoldMode(t);
    }
    resetKeybindingHoldMode() {
        this._keybindingService.resetKeybindingHoldMode();
    }
    lookupDefaultKeybindingItems(t) {
        return this._keybindingService.lookupDefaultKeybindingItems(t);
    }
    lookupKeybinding(t, e, n) {
        return this._keybindingService.lookupKeybinding(t, e, n);
    }
}, Eys = Re([
    F(0, Al)
], Eys), bn(Mme, Eys, 1);

}
