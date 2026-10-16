import { Ei, xh } from "./Iwo.js";
import { bo } from "./arrays.js";
import { Jc } from "./observable.js";
import { QAe } from "./platformObservableUtils.js";
import { jc } from "./position.js";
import { TWo } from "./positionToOffset.js";
import { Qs, qt } from "./range.js";
import { LQ } from "./textEdit.js";
import { E } from "./tslib.es6.js";
import { gHe } from "./ze.js";
var XMp, ZMp, QMp;
export { QMp, XMp, ZMp };
var __wakaru_byi_initialized = false;
export function byi() {
if (__wakaru_byi_initialized) return;
__wakaru_byi_initialized = true;
"use strict";
E(), bo(), Ei(), Jc(), QAe(), jc(), TWo(), Qs(), LQ(), XMp = [], ZMp = class {
    constructor(t, e){
        if (this.startColumn = t, this.endColumnExclusive = e, t > e) throw new xh(`startColumn ${t} cannot be after endColumnExclusive ${e}`);
    }
    toRange(t) {
        return new qt(t, this.startColumn, t, this.endColumnExclusive);
    }
    equals(t) {
        return this.startColumn === t.startColumn && this.endColumnExclusive === t.endColumnExclusive;
    }
}, QMp = class {
    constructor(t){
        this._contextKeyService = t;
    }
    bind(t, e) {
        return gHe(t, this._contextKeyService, e instanceof Function ? e : (n)=>e.read(n));
    }
};

}
