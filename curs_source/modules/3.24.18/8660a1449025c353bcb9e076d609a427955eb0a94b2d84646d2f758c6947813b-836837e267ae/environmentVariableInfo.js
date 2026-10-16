import { D } from "./Iwo.js";
import { H2g, ehs } from "./Ycg.js";
import { gs, yt } from "./codicons.js";
import { nr, rs } from "./commands.js";
import { id, ld } from "./extensions_4.js";
import { Bt } from "./nls.js";
import { Ua, ob } from "./severity_2.js";
import { Mv, Py } from "./terminal.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var jAi, k2n;
export { jAi, k2n };
var __wakaru_uDk_initialized = false;
export function uDk() {
if (__wakaru_uDk_initialized) return;
__wakaru_uDk_initialized = true;
"use strict";
E(), Mv(), Bt(), gs(), ob(), rs(), ld(), jAi = class {
    constructor(t, e, n, i, r){
        this._diff = t, this._terminalId = e, this._collection = n, this._terminalService = i, this._extensionService = r, this.requiresAction = !0;
    }
    _getInfo(t) {
        const e = new Set;
        ehs(e, this._diff.added.values()), ehs(e, this._diff.removed.values()), ehs(e, this._diff.changed.values());
        let n = D(10197, null);
        return n += H2g(this._collection, t, this._extensionService, e), n;
    }
    _getActions() {
        return [
            {
                label: D(10198, null),
                run: ()=>this._terminalService.getInstanceFromId(this._terminalId)?.relaunch(),
                commandId: "workbench.action.terminal.relaunch"
            }
        ];
    }
    getStatus(t) {
        return {
            id: "relaunch-needed",
            severity: Ua.Warning,
            icon: yt.warning,
            tooltip: this._getInfo(t),
            hoverActions: this._getActions()
        };
    }
}, jAi = Re([
    F(3, Py),
    F(4, id)
], jAi), k2n = class {
    constructor(t, e, n){
        this._collection = t, this._commandService = e, this._extensionService = n, this.requiresAction = !1;
    }
    _getInfo(t) {
        const e = new Set;
        ehs(e, this._collection.getVariableMap(t).values());
        let n = D(10199, null);
        return n += H2g(this._collection, t, this._extensionService, e), n;
    }
    _getActions(t) {
        return [
            {
                label: D(10200, null),
                run: ()=>this._commandService.executeCommand("workbench.action.terminal.showEnvironmentContributions", t),
                commandId: "workbench.action.terminal.showEnvironmentContributions"
            }
        ];
    }
    getStatus(t) {
        return {
            id: "env-var-info-changes-active",
            severity: Ua.Info,
            tooltip: void 0,
            detailedTooltip: this._getInfo(t),
            hoverActions: this._getActions(t)
        };
    }
}, k2n = Re([
    F(1, nr),
    F(2, id)
], k2n);

}
