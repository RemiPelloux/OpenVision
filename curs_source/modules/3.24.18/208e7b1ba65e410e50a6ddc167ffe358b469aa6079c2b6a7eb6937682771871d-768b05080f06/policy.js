import { N, O, se } from "./event.js";
import { Q, ne } from "./instantiation.js";
import { xv, zo } from "./iterator.js";
import { J, j } from "./lifecycle.js";
import { h } from "./tslib.es6.js";
var bo, oO, cO;
export { bo, cO, oO };
var __wakaru_fi_initialized = false;
export function fi() {
if (__wakaru_fi_initialized) return;
__wakaru_fi_initialized = true;
"use strict";
h(), se(), xv(), j(), ne(), bo = Q("policy"), oO = class extends J {
    constructor(){
        super(...arguments), this.policyDefinitions = {}, this.policies = new Map, this._onDidChange = this._register(new N), this.onDidChange = this._onDidChange.event;
    }
    async updatePolicyDefinitions(e) {
        const t = Object.keys(this.policyDefinitions).length;
        return this.policyDefinitions = {
            ...e,
            ...this.policyDefinitions
        }, t !== Object.keys(this.policyDefinitions).length && await this._updatePolicyDefinitions(this.policyDefinitions), zo.reduce(this.policies.entries(), (n, [r, s])=>({
                ...n,
                [r]: s
            }), {});
    }
    getPolicyValue(e) {
        return this.policies.get(e);
    }
    serialize() {
        return zo.reduce(Object.entries(this.policyDefinitions), (e, [t, n])=>({
                ...e,
                [t]: {
                    definition: n,
                    value: this.policies.get(t)
                }
            }), {});
    }
}, cO = class {
    constructor(){
        this.onDidChange = O.None, this.policyDefinitions = {};
    }
    async updatePolicyDefinitions() {
        return {};
    }
    getPolicyValue() {}
    serialize() {}
};

}
