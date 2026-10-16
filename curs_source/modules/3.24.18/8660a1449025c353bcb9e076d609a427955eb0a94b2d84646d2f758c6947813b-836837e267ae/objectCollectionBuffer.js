import { Gt, Nc, Pn, Qe, en, st, tt } from "./Iwo.js";
import { ADy, G$d } from "./bufferDirtyTracker.js";
import { a7, tL } from "./linkedList.js";
import { E } from "./tslib.es6.js";
var q$d, z$d;
export { q$d, z$d };
var __wakaru_PDy_initialized = false;
export function PDy() {
if (__wakaru_PDy_initialized) return;
__wakaru_PDy_initialized = true;
"use strict";
E(), Gt(), Qe(), a7(), ADy(), q$d = class extends st {
    constructor(t, e){
        super(), this.propertySpecs = t, this.capacity = e, this._dirtyTracker = new G$d, this._propertySpecsMap = new Map, this._entries = new tL, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._onDidChangeBuffer = this._register(new tt), this.onDidChangeBuffer = this._onDidChangeBuffer.event, this.view = new Float32Array(e * t.length), this.buffer = this.view.buffer, this._entrySize = t.length;
        for(let n = 0; n < t.length; n++){
            const i = {
                offset: n,
                ...t[n]
            };
            this._propertySpecsMap.set(i.name, i);
        }
        this._register(Pn(()=>Nc(this._entries)));
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
    createEntry(t) {
        this._entries.size === this.capacity && (this._expandBuffer(), this._onDidChangeBuffer.fire());
        const e = new z$d(this.view, this._propertySpecsMap, this._dirtyTracker, this._entries.size, t), n = this._entries.push(e), i = [];
        return i.push(en.forward(e.onDidChange, this._onDidChange)), i.push(e.onWillDispose(()=>{
            const r = e.i;
            n(), this.view.set(this.view.subarray(r * this._entrySize + 2, this._entries.size * this._entrySize + 2), r * this._entrySize);
            for (const s of this._entries)s.i > r && s.i--;
            this._dirtyTracker.flag(r, (this._entries.size - r) * this._entrySize), Nc(i);
        })), e;
    }
    _expandBuffer() {
        this.capacity *= 2;
        const t = new Float32Array(this.capacity * this._entrySize);
        t.set(this.view), this.view = t, this.buffer = this.view.buffer;
    }
}, z$d = class extends st {
    constructor(t, e, n, i, r){
        super(), this._view = t, this._propertySpecsMap = e, this._dirtyTracker = n, this.i = i, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._onWillDispose = this._register(new tt), this.onWillDispose = this._onWillDispose.event;
        for (const s of this._propertySpecsMap.values())this._view[this.i * this._propertySpecsMap.size + s.offset] = r[s.name];
        this._dirtyTracker.flag(this.i * this._propertySpecsMap.size, this._propertySpecsMap.size);
    }
    dispose() {
        this._onWillDispose.fire(), super.dispose();
    }
    set(t, e) {
        const n = this.i * this._propertySpecsMap.size + this._propertySpecsMap.get(t).offset;
        this._view[this._dirtyTracker.flag(n)] = e, this._onDidChange.fire();
    }
    get(t) {
        return this._view[this.i * this._propertySpecsMap.size + this._propertySpecsMap.get(t).offset];
    }
    setRaw(t) {
        if (t.length !== this._propertySpecsMap.size) throw new Error(`Data length ${t.length} does not match the number of properties in the collection (${this._propertySpecsMap.size})`);
        this._view.set(t, this.i * this._propertySpecsMap.size), this._dirtyTracker.flag(this.i * this._propertySpecsMap.size, this._propertySpecsMap.size);
    }
};

}
