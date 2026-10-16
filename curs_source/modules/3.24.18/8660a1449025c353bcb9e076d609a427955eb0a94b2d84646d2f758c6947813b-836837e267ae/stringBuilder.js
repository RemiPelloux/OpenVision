import { Di, Fa, Ga, K9 } from "./Iwo.js";
import { E } from "./tslib.es6.js";
import { vFd } from "./ze.js";
var Z$e;
export { Z$e };
var __wakaru_Q$e_initialized = false;
export function Q$e() {
if (__wakaru_Q$e_initialized) return;
__wakaru_Q$e_initialized = true;
"use strict";
E(), Fa(), Di(), Ga(), Z$e = class {
    constructor(t){
        this._capacity = t | 0, this._buffer = new Uint16Array(this._capacity), this._completedStrings = null, this._bufferLength = 0;
    }
    reset() {
        this._completedStrings = null, this._bufferLength = 0;
    }
    build() {
        return this._completedStrings !== null ? (this._flushBuffer(), this._completedStrings.join("")) : this._buildBuffer();
    }
    _buildBuffer() {
        if (this._bufferLength === 0) return "";
        const t = new Uint16Array(this._buffer.buffer, 0, this._bufferLength);
        return vFd().decode(t);
    }
    _flushBuffer() {
        const t = this._buildBuffer();
        this._bufferLength = 0, this._completedStrings === null ? this._completedStrings = [
            t
        ] : this._completedStrings[this._completedStrings.length] = t;
    }
    appendCharCode(t) {
        const e = this._capacity - this._bufferLength;
        e <= 1 && (e === 0 || K9(t)) && this._flushBuffer(), this._buffer[this._bufferLength++] = t;
    }
    appendASCIICharCode(t) {
        this._bufferLength === this._capacity && this._flushBuffer(), this._buffer[this._bufferLength++] = t;
    }
    appendString(t) {
        const e = t.length;
        if (this._bufferLength + e >= this._capacity) {
            this._flushBuffer(), this._completedStrings[this._completedStrings.length] = t;
            return;
        }
        for(let n = 0; n < e; n++)this._buffer[this._bufferLength++] = t.charCodeAt(n);
    }
};

}
