import { bt, ve } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Vn, yn } from "./storage_2.js";
import { x } from "./tslib.es6.js";
var Bve;
export { Bve };
var __wakaru_kcv_initialized = false;
export function kcv() {
if (__wakaru_kcv_initialized) return;
__wakaru_kcv_initialized = true;
"use strict";
x(), bt(), Vn(), Bve = class {
    constructor(e){
        this.storageService = e, this.inMemoryValues = new Set, this._onDidChangeEmitter = new ve, this.onDidChange = this._onDidChangeEmitter.event, this.load();
    }
    static getOrCreate(e) {
        return Bve._instance || (Bve._instance = new Bve(e)), Bve._instance;
    }
    delete(e) {
        const t = this.inMemoryValues.delete(e);
        return this.save(), t;
    }
    add(e) {
        return this.inMemoryValues.add(e), this.save(), this;
    }
    has(e) {
        return this.inMemoryValues.has(e);
    }
    clear() {
        this.inMemoryValues.clear(), this.save();
    }
    forEach(e, t) {
        return this.load(), this.inMemoryValues.forEach(e);
    }
    replace(e) {
        this.inMemoryValues = new Set(e), this.save();
    }
    load() {
        let e;
        const t = this.storageService.get(Bve.FIND_HISTORY_KEY, 1);
        if (t) try {
            e = JSON.parse(t);
        } catch  {}
        this.inMemoryValues = new Set(e || []);
    }
    save() {
        const e = [];
        return this.inMemoryValues.forEach((t)=>e.push(t)), new Promise((t)=>{
            this.storageService.store(Bve.FIND_HISTORY_KEY, JSON.stringify(e), 1, 0), this._onDidChangeEmitter.fire(e), t();
        });
    }
}, Bve.FIND_HISTORY_KEY = "workbench.replace.history", Bve._instance = null, Bve = ie([
    C(0, yn)
], Bve);

}
