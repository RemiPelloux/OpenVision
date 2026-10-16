import { E } from "./tslib.es6.js";
var Yz;
export { Yz };
var __wakaru_cCe_initialized = false;
export function cCe() {
if (__wakaru_cCe_initialized) return;
__wakaru_cCe_initialized = true;
"use strict";
E(), Yz = class {
    constructor(){
        this.listeners = new Set, this.state = {
            state: "pending"
        }, this.writeVersion = 0;
    }
    onChange(t) {
        return this.listeners.add(t), {
            dispose: ()=>{
                this.listeners.delete(t);
            }
        };
    }
    notifyListeners() {
        for (const t of this.listeners)t(this.state);
    }
    getState() {
        return this.state;
    }
    peekWriteVersion() {
        return this.writeVersion;
    }
    set(t) {
        const e = ++this.writeVersion;
        return this.state = {
            state: "fulfilled",
            value: t
        }, this.notifyListeners(), {
            dispose: ()=>{
                this.writeVersion === e && this.clear();
            }
        };
    }
    error(t) {
        this.writeVersion++, this.state = {
            state: "rejected",
            error: t
        }, this.notifyListeners();
    }
    clear() {
        this.writeVersion++, this.state = {
            state: "pending"
        }, this.notifyListeners();
    }
};

}
