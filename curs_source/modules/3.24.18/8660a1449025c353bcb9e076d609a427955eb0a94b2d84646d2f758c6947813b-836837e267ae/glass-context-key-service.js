import { bn, jn } from "./SZu.js";
import { Hi, Rr } from "./contextkey.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var vN, Iys;
export { Iys, vN };
var __wakaru_aw_initialized = false;
export function aw() {
if (__wakaru_aw_initialized) return;
__wakaru_aw_initialized = true;
"use strict";
E(), Hi(), Rn(), It(), Hi(), vN = jn("glassContextKeyService"), Iys = class {
    constructor(t){
        this._contextKeyService = t;
    }
    get vscodeService() {
        return this._contextKeyService;
    }
    get onDidChangeContext() {
        return this._contextKeyService.onDidChangeContext;
    }
    createKey(t, e) {
        return this._contextKeyService.createKey(t, e);
    }
    getContextKeyValue(t) {
        return this._contextKeyService.getContextKeyValue(t);
    }
    createScoped(t) {
        return this._contextKeyService.createScoped(t);
    }
    createOverlay(t) {
        return this._contextKeyService.createOverlay(t);
    }
    getContext(t) {
        return this._contextKeyService.getContext(t);
    }
    contextMatchesRules(t) {
        return this._contextKeyService.contextMatchesRules(t);
    }
    bindContextKey(t) {
        return t.bindTo(this._contextKeyService);
    }
    createMenu(t, e) {
        return t.createMenu(e, this._contextKeyService);
    }
}, Iys = Re([
    F(0, Rr)
], Iys), bn(vN, Iys, 1);

}
