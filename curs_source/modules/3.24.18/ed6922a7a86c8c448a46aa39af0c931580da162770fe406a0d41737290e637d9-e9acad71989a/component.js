import { Q5, xq } from "./memento.js";
import { aW, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
var fqt;
export { fqt };
var __wakaru_Ctr_initialized = false;
export function Ctr() {
if (__wakaru_Ctr_initialized) return;
__wakaru_Ctr_initialized = true;
"use strict";
x(), xq(), as(), fqt = class extends aW {
    constructor(e, t, n){
        super(t), this.id = e, this.memento = new Q5(this.id, n), this._register(n.onWillSaveState(()=>{
            this.saveState(), this.memento.saveMemento();
        }));
    }
    getId() {
        return this.id;
    }
    getMemento(e, t) {
        return this.memento.getMemento(e, t);
    }
    reloadMemento(e) {
        return this.memento.reloadMemento(e);
    }
    onDidChangeMementoValue(e, t) {
        return this.memento.onDidChangeValue(e, t);
    }
    saveState() {}
};

}
