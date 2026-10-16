import { N, se } from "./event.js";
import { Q, ne } from "./instantiation.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { Vt, ht } from "./lifecycleMainService.js";
import { l4, oe } from "./platform.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
function Gme(e) {
    const t = e.getKeyMap(), n = e.getCurrentKeyboardLayout();
    return {
        keyboardMapping: t,
        keyboardLayoutInfo: n
    };
}
var jD, Pw;
export { Gme, Pw, jD };
var __wakaru_gze_initialized = false;
export function gze() {
if (__wakaru_gze_initialized) return;
__wakaru_gze_initialized = true;
"use strict";
h(), oe(), se(), j(), ne(), Vt(), jD = Q("keyboardLayoutMainService"), Pw = class extends J {
    constructor(e){
        super(), this._onDidChangeKeyboardLayout = this._register(new N), this.onDidChangeKeyboardLayout = this._onDidChangeKeyboardLayout.event, this._initPromise = null, this._keyboardLayoutData = null, e.when(3).then(()=>this._initialize());
    }
    _initialize() {
        return this._initPromise || (this._initPromise = this._doInitialize()), this._initPromise;
    }
    async _doInitialize() {
        const e = await import("native-keymap");
        this._keyboardLayoutData = Gme(e), l4 || e.onDidChangeKeyboardLayout(()=>{
            this._keyboardLayoutData = Gme(e), this._onDidChangeKeyboardLayout.fire(this._keyboardLayoutData);
        });
    }
    async getKeyboardLayoutData() {
        return await this._initialize(), this._keyboardLayoutData;
    }
}, Pw = B([
    w(0, ht)
], Pw);

}
