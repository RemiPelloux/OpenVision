import { bn, jn } from "./SZu.js";
import { nr, rs } from "./commands.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Vc, Gys;
export { Gys, Vc };
var __wakaru_yp_initialized = false;
export function yp() {
if (__wakaru_yp_initialized) return;
__wakaru_yp_initialized = true;
"use strict";
E(), rs(), Rn(), It(), rs(), Vc = jn("glassCommandService"), Gys = class {
    constructor(t){
        this._commandService = t;
    }
    get vscodeService() {
        return this._commandService;
    }
    get onDidExecuteCommand() {
        return this._commandService.onDidExecuteCommand;
    }
    executeCommand(t, ...e) {
        return this._commandService.executeCommand(t, ...e);
    }
}, Gys = Re([
    F(0, nr)
], Gys), bn(Vc, Gys, 1);

}
