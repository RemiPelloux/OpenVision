import { bn, jn } from "./SZu.js";
import { fo, ps } from "./environmentService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var hot, zKr;
export { hot, zKr };
var __wakaru_Q0t_initialized = false;
export function Q0t() {
if (__wakaru_Q0t_initialized) return;
__wakaru_Q0t_initialized = true;
"use strict";
E(), Ji(), Rn(), It(), fo(), hot = jn("cursorExtensionIsolationService"), zKr = class {
    constructor(t, e){
        const n = !!t.isGlass;
        this._isolationEnabled = !n;
        const i = `[CursorExtensionIsolationService] Extension isolation is ${this._isolationEnabled ? "enabled" : "disabled"}` + (n ? " (forced disabled in glass mode)" : "");
        e.info(i);
    }
    getCursorExtensionsIsolationEnabled() {
        return this._isolationEnabled;
    }
}, zKr = Re([
    F(0, ps),
    F(1, Li)
], zKr), bn(hot, zKr, 0);

}
