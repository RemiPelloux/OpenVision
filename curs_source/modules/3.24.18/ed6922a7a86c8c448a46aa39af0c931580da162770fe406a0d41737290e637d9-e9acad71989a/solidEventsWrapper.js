import { bt, ve } from "./HVr.js";
import { qn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var av;
export { av };
var __wakaru_sy_initialized = false;
export function sy() {
if (__wakaru_sy_initialized) return;
__wakaru_sy_initialized = true;
"use strict";
x(), qn(), bt(), av = class {
    constructor(e){
        this._value = e, this.emitter = new ve, this.muteEventsCounter = 0, this.shouldEmit = !1, this.event = this.emitter.event;
    }
    get value() {
        return this._value;
    }
    change(e) {
        this._value = e, this.muteEventsCounter === 0 ? (this.emitter.fire(e), this.shouldEmit = !1) : this.shouldEmit = !0;
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
