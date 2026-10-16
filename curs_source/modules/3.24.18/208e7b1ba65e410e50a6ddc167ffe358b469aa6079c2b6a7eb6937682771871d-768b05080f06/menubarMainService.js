import { Q, ne, ni } from "./instantiation.js";
import { B } from "./ipc.js";
import { J, j } from "./lifecycle.js";
import { Vt, ht } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { Pze, rl } from "./menubar_2.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
var eO, Ww;
export { Ww, eO };
var __wakaru_Nze_initialized = false;
export function Nze() {
if (__wakaru_Nze_initialized) return;
__wakaru_Nze_initialized = true;
"use strict";
h(), ne(), Vt(), te(), Pze(), j(), eO = Q("menubarMainService"), Ww = class extends J {
    constructor(e, t, n){
        super(), this.instantiationService = e, this.lifecycleMainService = t, this.logService = n, this.menubar = this.installMenuBarAfterWindowOpen();
    }
    async installMenuBarAfterWindowOpen() {
        return await this.lifecycleMainService.when(3), this._register(this.instantiationService.createInstance(rl));
    }
    async updateMenubar(e, t) {
        this.logService.trace("menubarService#updateMenubar", e), (await this.menubar).updateMenu(t, e);
    }
}, Ww = B([
    w(0, ni),
    w(1, ht),
    w(2, Z)
], Ww);

}
