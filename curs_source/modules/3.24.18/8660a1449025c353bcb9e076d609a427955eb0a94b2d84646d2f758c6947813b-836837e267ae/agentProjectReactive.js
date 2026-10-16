import { Ymg } from "./Ycg.js";
import { Kf } from "./reactive.js";
import { E } from "./tslib.es6.js";
var Xmg, Zmg;
export { Xmg, Zmg };
var __wakaru_k1k_initialized = false;
export function k1k() {
if (__wakaru_k1k_initialized) return;
__wakaru_k1k_initialized = true;
"use strict";
E(), Kf(), Xmg = class {
    constructor(t, e, n){
        this.allAgents = t, this.projectId = e, this.source = n;
    }
    get value() {
        return this.allAgents.value.filter((t)=>t.source === this.source && t.projectId === this.projectId);
    }
    onChange(t) {
        let e = Ymg(this.value);
        return this.allAgents.onChange(()=>{
            const n = this.value, i = Ymg(n);
            i !== e && (e = i, t(n));
        });
    }
}, Zmg = class {
    constructor(t){
        this.agents = t;
    }
    get value() {
        const t = new Set;
        for (const e of this.agents.value)for (const n of e.trackedGitRepos.value){
            const i = n.activeBranchName.value;
            i && t.add(i);
        }
        return [
            ...t
        ];
    }
    onChange(t) {
        let e = this.value.join("\0");
        return this.agents.onChange(()=>{
            const n = this.value, i = n.join("\0");
            i !== e && (e = i, t(n));
        });
    }
};

}
