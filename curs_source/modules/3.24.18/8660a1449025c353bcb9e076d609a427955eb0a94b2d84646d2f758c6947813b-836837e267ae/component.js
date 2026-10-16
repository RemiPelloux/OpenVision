import { p9e, ume } from "./memento.js";
import { Dl, HAe } from "./themeService.js";
import { E } from "./tslib.es6.js";
var wxi;
export { wxi };
var __wakaru_Xhl_initialized = false;
export function Xhl() {
if (__wakaru_Xhl_initialized) return;
__wakaru_Xhl_initialized = true;
"use strict";
E(), p9e(), Dl(), wxi = class extends HAe {
    constructor(t, e, n){
        super(e), this.id = t, this.memento = new ume(this.id, n), this._register(n.onWillSaveState(()=>{
            this.saveState(), this.memento.saveMemento();
        }));
    }
    getId() {
        return this.id;
    }
    getMemento(t, e) {
        return this.memento.getMemento(t, e);
    }
    reloadMemento(t) {
        return this.memento.reloadMemento(t);
    }
    onDidChangeMementoValue(t, e) {
        return this.memento.onDidChangeValue(t, e);
    }
    saveState() {}
};

}
