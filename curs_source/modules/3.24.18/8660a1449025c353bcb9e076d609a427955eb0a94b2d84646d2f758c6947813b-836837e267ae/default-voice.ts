import { E } from "./tslib.es6.js";
var Erf;
export { Erf };
var __wakaru_qBk_initialized = false;
export function qBk() {
if (__wakaru_qBk_initialized) return;
__wakaru_qBk_initialized = true;
"use strict";
E(), Erf = class {
    constructor(t){
        this.ports = t;
    }
    value;
    edits = 0;
    account = 0;
    saves = Promise.resolve();
    get voiceId() {
        return this.value;
    }
    pick(t) {
        this.adopt(t.voiceId);
        const e = this.account;
        this.saves = this.saves.then(()=>{
            if (e === this.account) return this.ports.saveVoice(t);
            this.ports.log.info("a voice picked before the account changed was not saved");
        }).catch((n)=>this.ports.log.warn("voice was not saved", n));
    }
    refresh() {
        const t = ++this.edits;
        this.saves.then(()=>this.ports.readDefaultVoice()).then((e)=>{
            t === this.edits && this.show(e);
        }, (e)=>this.ports.log.warn("default voice was not read", e));
    }
    reset() {
        this.account += 1, this.saves = Promise.resolve(), this.adopt(void 0);
    }
    savesSettled() {
        return this.saves;
    }
    adopt(t) {
        this.edits += 1, this.show(t);
    }
    show(t) {
        t !== this.value && (this.value = t, this.ports.onDidChangeDefaultVoice(t));
    }
};

}
