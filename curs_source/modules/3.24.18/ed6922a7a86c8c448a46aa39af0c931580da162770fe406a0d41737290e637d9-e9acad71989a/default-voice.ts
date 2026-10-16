import { x } from "./tslib.es6.js";
var u8h;
export { u8h };
var __wakaru_Rm__initialized = false;
export function Rm_() {
if (__wakaru_Rm__initialized) return;
__wakaru_Rm__initialized = true;
"use strict";
x(), u8h = class {
    constructor(e){
        this.ports = e;
    }
    value;
    edits = 0;
    account = 0;
    saves = Promise.resolve();
    get voiceId() {
        return this.value;
    }
    pick(e) {
        this.adopt(e.voiceId);
        const t = this.account;
        this.saves = this.saves.then(()=>{
            if (t === this.account) return this.ports.saveVoice(e);
            this.ports.log.info("a voice picked before the account changed was not saved");
        }).catch((n)=>this.ports.log.warn("voice was not saved", n));
    }
    refresh() {
        const e = ++this.edits;
        this.saves.then(()=>this.ports.readDefaultVoice()).then((t)=>{
            e === this.edits && this.show(t);
        }, (t)=>this.ports.log.warn("default voice was not read", t));
    }
    reset() {
        this.account += 1, this.saves = Promise.resolve(), this.adopt(void 0);
    }
    savesSettled() {
        return this.saves;
    }
    adopt(e) {
        this.edits += 1, this.show(e);
    }
    show(e) {
        e !== this.value && (this.value = e, this.ports.onDidChangeDefaultVoice(e));
    }
};

}
