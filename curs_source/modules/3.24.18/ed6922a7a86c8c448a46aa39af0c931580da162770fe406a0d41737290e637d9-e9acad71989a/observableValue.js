import { x } from "./tslib.es6.js";
var HU;
export { HU };
var __wakaru_wde_initialized = false;
export function wde() {
if (__wakaru_wde_initialized) return;
__wakaru_wde_initialized = true;
"use strict";
x(), HU = class {
    constructor(){
        this.listeners = new Set, this.state = {
            state: "pending"
        }, this.writeVersion = 0;
    }
    onChange(e) {
        return this.listeners.add(e), {
            dispose: ()=>{
                this.listeners.delete(e);
            }
        };
    }
    notifyListeners() {
        for (const e of this.listeners)e(this.state);
    }
    getState() {
        return this.state;
    }
    peekWriteVersion() {
        return this.writeVersion;
    }
    set(e) {
        const t = ++this.writeVersion;
        return this.state = {
            state: "fulfilled",
            value: e
        }, this.notifyListeners(), {
            dispose: ()=>{
                this.writeVersion === t && this.clear();
            }
        };
    }
    error(e) {
        this.writeVersion++, this.state = {
            state: "rejected",
            error: e
        }, this.notifyListeners();
    }
    clear() {
        this.writeVersion++, this.state = {
            state: "pending"
        }, this.notifyListeners();
    }
};

}
