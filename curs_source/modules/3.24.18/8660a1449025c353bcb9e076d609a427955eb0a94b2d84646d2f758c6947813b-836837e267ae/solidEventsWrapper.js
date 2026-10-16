import { Gt, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
import { pi } from "./ze.js";
var vb;
export { vb };
var __wakaru_sk_initialized = false;
export function sk() {
if (__wakaru_sk_initialized) return;
__wakaru_sk_initialized = true;
"use strict";
E(), pi(), Gt(), vb = class {
    constructor(t){
        this._value = t, this.emitter = new tt, this.muteEventsCounter = 0, this.shouldEmit = !1, this.event = this.emitter.event;
    }
    get value() {
        return this._value;
    }
    change(t) {
        this._value = t, this.muteEventsCounter === 0 ? (this.emitter.fire(t), this.shouldEmit = !1) : this.shouldEmit = !0;
    }
    dispose() {
        this.emitter.dispose();
    }
    nonReactive() {
        return this._value;
    }
    muteEvents() {
        ++this.muteEventsCounter;
    }
    unmuteEvents() {
        --this.muteEventsCounter, this.muteEventsCounter === 0 && this.shouldEmit && (this.emitter.fire(this._value), this.shouldEmit = !1);
    }
};

}
