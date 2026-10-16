import { C, ie } from "./actions_2.js";
import { Vr, Yi } from "./environmentService.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Qn, Wn } from "./log.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var FJe, bWi;
export { FJe, bWi };
var __wakaru_tkt_initialized = false;
export function tkt() {
if (__wakaru_tkt_initialized) return;
__wakaru_tkt_initialized = true;
"use strict";
x(), Qn(), Pn(), Ze(), Vr(), FJe = vn("cursorExtensionIsolationService"), bWi = class {
    constructor(e, t){
        const n = !!e.isGlass;
        this._isolationEnabled = !n;
        const i = `[CursorExtensionIsolationService] Extension isolation is ${this._isolationEnabled ? "enabled" : "disabled"}` + (n ? " (forced disabled in glass mode)" : "");
        t.info(i);
    }
    getCursorExtensionsIsolationEnabled() {
        return this._isolationEnabled;
    }
}, bWi = ie([
    C(0, Yi),
    C(1, Wn)
], bWi), mn(FJe, bWi, 0);

}
