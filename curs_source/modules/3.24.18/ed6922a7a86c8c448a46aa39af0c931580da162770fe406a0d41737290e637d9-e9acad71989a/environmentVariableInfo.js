import { S } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Pe, _i } from "./codicons.js";
import { $n, vi } from "./commands.js";
import { Ma, hc } from "./extensions_4.js";
import { rt } from "./nls.js";
import { Kp, Us } from "./severity_2.js";
import { Gf, ng } from "./terminal.js";
import { x } from "./tslib.es6.js";
function d9h(e, t, n, i) {
    const r = [
        `
`
    ], s = e.getDescriptionMap(void 0), o = e.getDescriptionMap(t);
    for (const a of i){
        const c = s.get(a);
        c && (r.push(`
- \`${tMo(a, n)}\``), r.push(`: ${c}`));
        const l = o.get(a);
        if (l) {
            const u = c ? ` (${S(10201, null)})` : "";
            r.push(`
- \`${tMo(a, n)}${u}\``), r.push(`: ${l}`);
        }
        !c && !l && r.push(`
- \`${tMo(a, n)}\``);
    }
    return r.join("");
}
function Nir(e, t) {
    for (const n of t)for (const i of n)e.add(i.extensionIdentifier);
}
function tMo(e, t) {
    return t.extensions.find((n)=>n.id === e)?.displayName || e;
}
var O5n, mzt;
export { Nir, O5n, d9h, mzt, tMo };
var __wakaru_nh__initialized = false;
export function nh_() {
if (__wakaru_nh__initialized) return;
__wakaru_nh__initialized = true;
"use strict";
x(), ng(), rt(), _i(), Kp(), vi(), hc(), O5n = class {
    constructor(e, t, n, i, r){
        this._diff = e, this._terminalId = t, this._collection = n, this._terminalService = i, this._extensionService = r, this.requiresAction = !0;
    }
    _getInfo(e) {
        const t = new Set;
        Nir(t, this._diff.added.values()), Nir(t, this._diff.removed.values()), Nir(t, this._diff.changed.values());
        let n = S(10197, null);
        return n += d9h(this._collection, e, this._extensionService, t), n;
    }
    _getActions() {
        return [
            {
                label: S(10198, null),
                run: ()=>this._terminalService.getInstanceFromId(this._terminalId)?.relaunch(),
                commandId: "workbench.action.terminal.relaunch"
            }
        ];
    }
    getStatus(e) {
        return {
            id: "relaunch-needed",
            severity: Us.Warning,
            icon: Pe.warning,
            tooltip: this._getInfo(e),
            hoverActions: this._getActions()
        };
    }
}, O5n = ie([
    C(3, Gf),
    C(4, Ma)
], O5n), mzt = class {
    constructor(e, t, n){
        this._collection = e, this._commandService = t, this._extensionService = n, this.requiresAction = !1;
    }
    _getInfo(e) {
        const t = new Set;
        Nir(t, this._collection.getVariableMap(e).values());
        let n = S(10199, null);
        return n += d9h(this._collection, e, this._extensionService, t), n;
    }
    _getActions(e) {
        return [
            {
                label: S(10200, null),
                run: ()=>this._commandService.executeCommand("workbench.action.terminal.showEnvironmentContributions", e),
                commandId: "workbench.action.terminal.showEnvironmentContributions"
            }
        ];
    }
    getStatus(e) {
        return {
            id: "env-var-info-changes-active",
            severity: Us.Info,
            tooltip: void 0,
            detailedTooltip: this._getInfo(e),
            hoverActions: this._getActions(e)
        };
    }
}, mzt = ie([
    C(1, $n),
    C(2, Ma)
], mzt);

}
