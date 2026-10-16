import { N1 } from "./reactive.js";
import { x } from "./tslib.es6.js";
function Txh(e) {
    return e.map((t)=>t.id).join("");
}
var Exh, xxh;
export { Exh, Txh, xxh };
var __wakaru_De__initialized = false;
export function De_() {
if (__wakaru_De__initialized) return;
__wakaru_De__initialized = true;
"use strict";
x(), N1(), Exh = class {
    constructor(e, t, n){
        this.allAgents = e, this.projectId = t, this.source = n;
    }
    get value() {
        return this.allAgents.value.filter((e)=>e.source === this.source && e.projectId === this.projectId);
    }
    onChange(e) {
        let t = Txh(this.value);
        return this.allAgents.onChange(()=>{
            const n = this.value, i = Txh(n);
            i !== t && (t = i, e(n));
        });
    }
}, xxh = class {
    constructor(e){
        this.agents = e;
    }
    get value() {
        const e = new Set;
        for (const t of this.agents.value)for (const n of t.trackedGitRepos.value){
            const i = n.activeBranchName.value;
            i && e.add(i);
        }
        return [
            ...e
        ];
    }
    onChange(e) {
        let t = this.value.join("\0");
        return this.agents.onChange(()=>{
            const n = this.value, i = n.join("\0");
            i !== t && (t = i, e(n));
        });
    }
};

}
