import { O, se } from "./event.js";
import { j, ve } from "./lifecycle.js";
import { fi } from "./policy.js";
import { h } from "./tslib.es6.js";
var Jfe;
export { Jfe };
var __wakaru_SZe_initialized = false;
export function SZe() {
if (__wakaru_SZe_initialized) return;
__wakaru_SZe_initialized = true;
"use strict";
h(), se(), j(), fi(), Jfe = class {
    constructor(e){
        this.service = e, this.disposables = new ve, this.onDidChangeEvent = O.map(this.service.onDidChange, (t)=>t.reduce((n, r)=>({
                    ...n,
                    [r]: this.service.getPolicyValue(r) ?? null
                }), {}), this.disposables);
    }
    listen(e, t) {
        switch(t){
            case "onDidChange":
                return this.onDidChangeEvent;
        }
        throw new Error(`Event not found: ${t}`);
    }
    call(e, t, n) {
        switch(t){
            case "updatePolicyDefinitions":
                return this.service.updatePolicyDefinitions(n);
        }
        throw new Error(`Call not found: ${t}`);
    }
    dispose() {
        this.disposables.dispose();
    }
};

}
