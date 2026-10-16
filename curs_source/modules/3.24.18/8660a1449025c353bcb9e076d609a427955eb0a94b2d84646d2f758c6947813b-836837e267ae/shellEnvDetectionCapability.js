import { $0o, Gt, Qe, st, tt } from "./Iwo.js";
import { du } from "./map.js";
import { cp } from "./objects.js";
import { E } from "./tslib.es6.js";
import { Rp } from "./ze.js";
var aPg;
export { aPg };
var __wakaru_yDk_initialized = false;
export function yDk() {
if (__wakaru_yDk_initialized) return;
__wakaru_yDk_initialized = true;
"use strict";
E(), Qe(), Gt(), cp(), du(), aPg = class extends st {
    constructor(){
        super(...arguments), this.type = 5, this._env = {
            value: new Map,
            isTrusted: !0
        }, this._onDidChangeEnv = this._register(new tt), this.onDidChangeEnv = this._onDidChangeEnv.event;
    }
    get env() {
        return this._createStateObject();
    }
    setEnvironment(t, e) {
        if (!Rp(this.env.value, t)) {
            this._env.value.clear();
            for (const [n, i] of Object.entries(t))i !== void 0 && this._env.value.set(n, i);
            this._env.isTrusted = e, this._fireEnvChange();
        }
    }
    startEnvironmentSingleVar(t, e) {
        t ? this._pendingEnv = {
            value: new Map,
            isTrusted: e
        } : this._pendingEnv = {
            value: new Map(this._env.value),
            isTrusted: this._env.isTrusted && e
        };
    }
    setEnvironmentSingleVar(t, e, n) {
        this._pendingEnv && t !== void 0 && e !== void 0 && (this._pendingEnv.value.set(t, e), this._pendingEnv.isTrusted &&= n);
    }
    endEnvironmentSingleVar(t) {
        if (!this._pendingEnv) return;
        this._pendingEnv.isTrusted &&= t, !$0o(this._env.value, this._pendingEnv.value) && (this._env = this._pendingEnv, this._fireEnvChange()), this._pendingEnv = void 0;
    }
    deleteEnvironmentSingleVar(t, e, n) {
        this._pendingEnv && t !== void 0 && e !== void 0 && (this._pendingEnv.value.delete(t), this._pendingEnv.isTrusted &&= n);
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
