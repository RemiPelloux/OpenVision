import { bt, ve } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Vn, yn } from "./storage_2.js";
import { x } from "./tslib.es6.js";
var Fve;
export { Fve };
var __wakaru_Scv_initialized = false;
export function Scv() {
if (__wakaru_Scv_initialized) return;
__wakaru_Scv_initialized = true;
"use strict";
x(), bt(), Vn(), Fve = class {
    constructor(e){
        this.storageService = e, this.inMemoryValues = new Set, this._onDidChangeEmitter = new ve, this.onDidChange = this._onDidChangeEmitter.event, this.load();
    }
    static getOrCreate(e) {
        return Fve._instance || (Fve._instance = new Fve(e)), Fve._instance;
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
        const t = this.storageService.get(Fve.FIND_HISTORY_KEY, 1);
        if (t) try {
            e = JSON.parse(t);
        } catch  {}
        this.inMemoryValues = new Set(e || []);
    }
    save() {
        const e = [];
        return this.inMemoryValues.forEach((t)=>e.push(t)), new Promise((t)=>{
            this.storageService.store(Fve.FIND_HISTORY_KEY, JSON.stringify(e), 1, 0), this._onDidChangeEmitter.fire(e), t();
        });
    }
}, Fve.FIND_HISTORY_KEY = "workbench.find.history", Fve._instance = null, Fve = ie([
    C(0, yn)
], Fve);

}
