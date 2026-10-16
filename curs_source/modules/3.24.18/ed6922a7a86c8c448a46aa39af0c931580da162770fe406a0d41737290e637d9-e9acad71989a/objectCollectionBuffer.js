import { Ct, Lo, Se, bt, rn, ve, we } from "./HVr.js";
import { O_g, R6c } from "./bufferDirtyTracker.js";
import { JN, oA } from "./linkedList.js";
import { x } from "./tslib.es6.js";
var D6c, M6c;
export { D6c, M6c };
var __wakaru_B_g_initialized = false;
export function B_g() {
if (__wakaru_B_g_initialized) return;
__wakaru_B_g_initialized = true;
"use strict";
x(), bt(), Se(), JN(), O_g(), D6c = class extends we {
    constructor(e, t){
        super(), this.propertySpecs = e, this.capacity = t, this._dirtyTracker = new R6c, this._propertySpecsMap = new Map, this._entries = new oA, this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event, this._onDidChangeBuffer = this._register(new ve), this.onDidChangeBuffer = this._onDidChangeBuffer.event, this.view = new Float32Array(t * e.length), this.buffer = this.view.buffer, this._entrySize = e.length;
        for(let n = 0; n < e.length; n++){
            const i = {
                offset: n,
                ...e[n]
            };
            this._propertySpecsMap.set(i.name, i);
        }
        this._register(rn(()=>Lo(this._entries)));
    }
    get bufferUsedSize() {
        return this.viewUsedSize * Float32Array.BYTES_PER_ELEMENT;
    }
    get viewUsedSize() {
        return this._entries.size * this._entrySize;
    }
    get entryCount() {
        return this._entries.size;
    }
    get dirtyTracker() {
        return this._dirtyTracker;
    }
    createEntry(e) {
        this._entries.size === this.capacity && (this._expandBuffer(), this._onDidChangeBuffer.fire());
        const t = new M6c(this.view, this._propertySpecsMap, this._dirtyTracker, this._entries.size, e), n = this._entries.push(t), i = [];
        return i.push(Ct.forward(t.onDidChange, this._onDidChange)), i.push(t.onWillDispose(()=>{
            const r = t.i;
            n(), this.view.set(this.view.subarray(r * this._entrySize + 2, this._entries.size * this._entrySize + 2), r * this._entrySize);
            for (const s of this._entries)s.i > r && s.i--;
            this._dirtyTracker.flag(r, (this._entries.size - r) * this._entrySize), Lo(i);
        })), t;
    }
    _expandBuffer() {
        this.capacity *= 2;
        const e = new Float32Array(this.capacity * this._entrySize);
        e.set(this.view), this.view = e, this.buffer = this.view.buffer;
    }
}, M6c = class extends we {
    constructor(e, t, n, i, r){
        super(), this._view = e, this._propertySpecsMap = t, this._dirtyTracker = n, this.i = i, this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event, this._onWillDispose = this._register(new ve), this.onWillDispose = this._onWillDispose.event;
        for (const s of this._propertySpecsMap.values())this._view[this.i * this._propertySpecsMap.size + s.offset] = r[s.name];
        this._dirtyTracker.flag(this.i * this._propertySpecsMap.size, this._propertySpecsMap.size);
    }
    dispose() {
        this._onWillDispose.fire(), super.dispose();
    }
    set(e, t) {
        const n = this.i * this._propertySpecsMap.size + this._propertySpecsMap.get(e).offset;
        this._view[this._dirtyTracker.flag(n)] = t, this._onDidChange.fire();
    }
    get(e) {
        return this._view[this.i * this._propertySpecsMap.size + this._propertySpecsMap.get(e).offset];
    }
    setRaw(e) {
        if (e.length !== this._propertySpecsMap.size) throw new Error(`Data length ${e.length} does not match the number of properties in the collection (${this._propertySpecsMap.size})`);
        this._view.set(e, this.i * this._propertySpecsMap.size), this._dirtyTracker.flag(this.i * this._propertySpecsMap.size, this._propertySpecsMap.size);
    }
};

}
