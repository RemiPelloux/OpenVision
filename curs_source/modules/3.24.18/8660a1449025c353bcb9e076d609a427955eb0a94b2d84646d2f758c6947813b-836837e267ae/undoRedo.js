import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var C7, k$o, tsi, nsi, isi, hyt;
export { C7, hyt, isi, k$o, nsi, tsi };
var __wakaru_rB_initialized = false;
export function rB() {
if (__wakaru_rB_initialized) return;
__wakaru_rB_initialized = true;
"use strict";
E(), It(), C7 = jn("undoRedoService"), k$o = class {
    constructor(t, e){
        this.resource = t, this.elements = e;
    }
}, tsi = class BAb {
    constructor(){
        this.id = BAb._ID++, this.order = 1;
    }
    nextOrder() {
        return this.id === 0 ? 0 : this.order++;
    }
}, tsi._ID = 0, tsi.None = new tsi, nsi = tsi, isi = class UAb {
    constructor(){
        this.id = UAb._ID++, this.order = 1;
    }
    nextOrder() {
        return this.id === 0 ? 0 : this.order++;
    }
}, isi._ID = 0, isi.None = new isi, hyt = isi;

}
