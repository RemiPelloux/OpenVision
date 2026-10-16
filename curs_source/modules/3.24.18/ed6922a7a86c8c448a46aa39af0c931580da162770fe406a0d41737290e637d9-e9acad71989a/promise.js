import { n2t } from "./derived.js";
import { Ds, Uh, Xo, hBe } from "./qIc.js";
import { x } from "./tslib.es6.js";
var ZRc, aYr, Mmn, QRc;
export { Mmn, QRc, ZRc, aYr };
var __wakaru_ihg_initialized = false;
export function ihg() {
if (__wakaru_ihg_initialized) return;
__wakaru_ihg_initialized = true;
"use strict";
x(), hBe(), n2t(), ZRc = class {
    constructor(e){
        this._computeValue = e, this._value = Xo(this, void 0);
    }
    get cachedValue() {
        return this._value;
    }
    getValue() {
        let e = this._value.get();
        return e || (e = this._computeValue(), this._value.set(e, void 0)), e;
    }
}, aYr = class TSm {
    constructor(t){
        this._value = Xo(this, void 0), this.promiseResult = this._value, this.promise = t.then((n)=>(Uh((i)=>{
                this._value.set(new Mmn(n, void 0), i);
            }), n), (n)=>{
            throw Uh((i)=>{
                this._value.set(new Mmn(void 0, n), i);
            }), n;
        });
    }
    static fromFn(t) {
        return new TSm(t());
    }
}, Mmn = class {
    constructor(e, t){
        this.data = e, this.error = t;
    }
    getDataOrThrow() {
        if (this.error) throw this.error;
        return this.data;
    }
}, QRc = class {
    constructor(e){
        this._computePromise = e, this._lazyValue = new ZRc(()=>new aYr(this._computePromise())), this.cachedPromiseResult = Ds(this, (t)=>this._lazyValue.cachedValue.read(t)?.promiseResult.read(t));
    }
    getPromise() {
        return this._lazyValue.getValue().promise;
    }
};

}
