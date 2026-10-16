import { Se, VEc, bt, ve, we } from "./HVr.js";
import { oc } from "./map.js";
import { bu } from "./objects.js";
import { yh } from "./qIc.js";
import { x } from "./tslib.es6.js";
var R9h;
export { R9h };
var __wakaru_hh__initialized = false;
export function hh_() {
if (__wakaru_hh__initialized) return;
__wakaru_hh__initialized = true;
"use strict";
x(), Se(), bt(), bu(), oc(), R9h = class extends we {
    constructor(){
        super(...arguments), this.type = 5, this._env = {
            value: new Map,
            isTrusted: !0
        }, this._onDidChangeEnv = this._register(new ve), this.onDidChangeEnv = this._onDidChangeEnv.event;
    }
    get env() {
        return this._createStateObject();
    }
    setEnvironment(e, t) {
        if (!yh(this.env.value, e)) {
            this._env.value.clear();
            for (const [n, i] of Object.entries(e))i !== void 0 && this._env.value.set(n, i);
            this._env.isTrusted = t, this._fireEnvChange();
        }
    }
    startEnvironmentSingleVar(e, t) {
        e ? this._pendingEnv = {
            value: new Map,
            isTrusted: t
        } : this._pendingEnv = {
            value: new Map(this._env.value),
            isTrusted: this._env.isTrusted && t
        };
    }
    setEnvironmentSingleVar(e, t, n) {
        this._pendingEnv && e !== void 0 && t !== void 0 && (this._pendingEnv.value.set(e, t), this._pendingEnv.isTrusted &&= n);
    }
    endEnvironmentSingleVar(e) {
        if (!this._pendingEnv) return;
        this._pendingEnv.isTrusted &&= e, !VEc(this._env.value, this._pendingEnv.value) && (this._env = this._pendingEnv, this._fireEnvChange()), this._pendingEnv = void 0;
    }
    deleteEnvironmentSingleVar(e, t, n) {
        this._pendingEnv && e !== void 0 && t !== void 0 && (this._pendingEnv.value.delete(e), this._pendingEnv.isTrusted &&= n);
    }
    _fireEnvChange() {
        this._onDidChangeEnv.fire(this._createStateObject());
    }
    _createStateObject() {
        return {
            value: Object.fromEntries(this._env.value),
            isTrusted: this._env.isTrusted
        };
    }
};

}
