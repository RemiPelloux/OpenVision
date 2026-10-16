import { CO, Fo, Ps, jn } from "./HVr.js";
import { XMc } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Dge;
export { Dge };
var __wakaru_lwe_initialized = false;
export function lwe() {
if (__wakaru_lwe_initialized) return;
__wakaru_lwe_initialized = true;
"use strict";
x(), Ps(), jn(), Fo(), Dge = class {
    constructor(e){
        this._capacity = e | 0, this._buffer = new Uint16Array(this._capacity), this._completedStrings = null, this._bufferLength = 0;
    }
    reset() {
        this._completedStrings = null, this._bufferLength = 0;
    }
    build() {
        return this._completedStrings !== null ? (this._flushBuffer(), this._completedStrings.join("")) : this._buildBuffer();
    }
    _buildBuffer() {
        if (this._bufferLength === 0) return "";
        const e = new Uint16Array(this._buffer.buffer, 0, this._bufferLength);
        return XMc().decode(e);
    }
    _flushBuffer() {
        const e = this._buildBuffer();
        this._bufferLength = 0, this._completedStrings === null ? this._completedStrings = [
            e
        ] : this._completedStrings[this._completedStrings.length] = e;
    }
    appendCharCode(e) {
        const t = this._capacity - this._bufferLength;
        t <= 1 && (t === 0 || CO(e)) && this._flushBuffer(), this._buffer[this._bufferLength++] = e;
    }
    appendASCIICharCode(e) {
        this._bufferLength === this._capacity && this._flushBuffer(), this._buffer[this._bufferLength++] = e;
    }
    appendString(e) {
        const t = e.length;
        if (this._bufferLength + t >= this._capacity) {
            this._flushBuffer(), this._completedStrings[this._completedStrings.length] = e;
            return;
        }
        for(let n = 0; n < t; n++)this._buffer[this._bufferLength++] = e.charCodeAt(n);
    }
};

}
