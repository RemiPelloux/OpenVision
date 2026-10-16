import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Mv, NJ, Py } from "./terminal.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var rre, Mxs, EVl, Dxs;
export { Dxs, EVl, Mxs, rre };
var __wakaru_iEe_initialized = false;
export function iEe() {
if (__wakaru_iEe_initialized) return;
__wakaru_iEe_initialized = true;
"use strict";
E(), Rn(), It(), Mv(), Mv(), rre = jn("glassTerminalService"), Mxs = class {
    constructor(t){
        this._terminalService = t;
    }
    get instances() {
        return this._terminalService.instances;
    }
    get activeInstance() {
        return this._terminalService.activeInstance;
    }
    get connectionState() {
        return this._terminalService.connectionState;
    }
    get whenConnected() {
        return this._terminalService.whenConnected;
    }
    get onDidCreateInstance() {
        return this._terminalService.onDidCreateInstance;
    }
    get onDidDisposeInstance() {
        return this._terminalService.onDidDisposeInstance;
    }
    get onDidChangeInstances() {
        return this._terminalService.onDidChangeInstances;
    }
    get onAnyInstanceTitleChange() {
        return this._terminalService.onAnyInstanceTitleChange;
    }
    createTerminal(t) {
        return this._terminalService.createTerminal(t);
    }
    getInstanceFromId(t) {
        return this._terminalService.getInstanceFromId(t);
    }
    setActiveInstance(t) {
        this._terminalService.setActiveInstance(t);
    }
}, Mxs = Re([
    F(0, Py)
], Mxs), bn(rre, Mxs, 1), EVl = jn("glassTerminalConfigurationService"), Dxs = class {
    constructor(t){
        this._terminalConfigurationService = t;
    }
    get config() {
        return this._terminalConfigurationService.config;
    }
}, Dxs = Re([
    F(0, NJ)
], Dxs), bn(EVl, Dxs, 1);

}
