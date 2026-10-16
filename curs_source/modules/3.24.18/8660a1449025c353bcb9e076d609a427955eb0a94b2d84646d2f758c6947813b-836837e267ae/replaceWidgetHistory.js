import { Gt, tt } from "./Iwo.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var $2e;
export { $2e };
var __wakaru_zI1_initialized = false;
export function zI1() {
if (__wakaru_zI1_initialized) return;
__wakaru_zI1_initialized = true;
"use strict";
E(), Gt(), Zi(), $2e = class {
    constructor(t){
        this.storageService = t, this.inMemoryValues = new Set, this._onDidChangeEmitter = new tt, this.onDidChange = this._onDidChangeEmitter.event, this.load();
    }
    static getOrCreate(t) {
        return $2e._instance || ($2e._instance = new $2e(t)), $2e._instance;
    }
    delete(t) {
        const e = this.inMemoryValues.delete(t);
        return this.save(), e;
    }
    add(t) {
        return this.inMemoryValues.add(t), this.save(), this;
    }
    has(t) {
        return this.inMemoryValues.has(t);
    }
    clear() {
        this.inMemoryValues.clear(), this.save();
    }
    forEach(t, e) {
        return this.load(), this.inMemoryValues.forEach(t);
    }
    replace(t) {
        this.inMemoryValues = new Set(t), this.save();
    }
    load() {
        let t;
        const e = this.storageService.get($2e.FIND_HISTORY_KEY, 1);
        if (e) try {
            t = JSON.parse(e);
        } catch  {}
        this.inMemoryValues = new Set(t || []);
    }
    save() {
        const t = [];
        return this.inMemoryValues.forEach((e)=>t.push(e)), new Promise((e)=>{
            this.storageService.store($2e.FIND_HISTORY_KEY, JSON.stringify(t), 1, 0), this._onDidChangeEmitter.fire(t), e();
        });
    }
}, $2e.FIND_HISTORY_KEY = "workbench.replace.history", $2e._instance = null, $2e = Re([
    F(0, ki)
], $2e);

}
