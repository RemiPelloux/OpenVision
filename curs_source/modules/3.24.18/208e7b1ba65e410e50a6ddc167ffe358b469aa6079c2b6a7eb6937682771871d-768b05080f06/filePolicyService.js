import { le, pa } from "./async.js";
import { O, se } from "./event.js";
import { Wt, cn } from "./files.js";
import { B } from "./ipc.js";
import { xv, zo } from "./iterator.js";
import { Z, te } from "./log.js";
import { Un } from "./platform_2.js";
import { fi, oO } from "./policy.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
function Llt(e, t) {
    const n = [];
    for (const r of new Set(zo.concat(e.keys(), t.keys())))e.get(r) !== t.get(r) && n.push(r);
    return n;
}
var kb;
export { Llt, kb };
var __wakaru_Ult_initialized = false;
export function Ult() {
if (__wakaru_Ult_initialized) return;
__wakaru_Ult_initialized = true;
"use strict";
h(), le(), se(), xv(), Ze(), Wt(), te(), fi(), kb = class extends oO {
    constructor(e, t, n){
        super(), this.file = e, this.fileService = t, this.logService = n, this.throttledDelayer = this._register(new pa(500));
        const r = O.filter(t.onDidFilesChange, (s)=>s.affects(e));
        this._register(t.watch(e)), this._register(r(()=>this.throttledDelayer.trigger(()=>this.refresh())));
    }
    async _updatePolicyDefinitions() {
        await this.refresh();
    }
    async read() {
        const e = new Map;
        try {
            const t = await this.fileService.readFile(this.file), n = JSON.parse(t.value.toString());
            if (!Un(n)) throw new Error("Policy file isn't a JSON object");
            for (const r of Object.keys(n))this.policyDefinitions[r] && e.set(r, n[r]);
        } catch (t) {
            t.fileOperationResult !== 1 && this.logService.error("[FilePolicyService] Failed to read policies", t);
        }
        return e;
    }
    async refresh() {
        const e = await this.read(), t = Llt(this.policies, e);
        this.policies = e, t.length > 0 && this._onDidChange.fire(t);
    }
}, kb = B([
    w(1, cn),
    w(2, Z)
], kb);

}
