import { ugn } from "./derived.js";
import { E } from "./tslib.es6.js";
import { Zo, bc, mg, ytt } from "./ze.js";
var $Od, y7o, Eii, HOd;
export { $Od, Eii, HOd, y7o };
var __wakaru_gxy_initialized = false;
export function gxy() {
if (__wakaru_gxy_initialized) return;
__wakaru_gxy_initialized = true;
"use strict";
E(), ytt(), ugn(), $Od = class {
    constructor(t){
        this._computeValue = t, this._value = bc(this, void 0);
    }
    get cachedValue() {
        return this._value;
    }
    getValue() {
        let t = this._value.get();
        return t || (t = this._computeValue(), this._value.set(t, void 0)), t;
    }
}, y7o = class uAb {
    constructor(e){
        this._value = bc(this, void 0), this.promiseResult = this._value, this.promise = e.then((n)=>(mg((i)=>{
                this._value.set(new Eii(n, void 0), i);
            }), n), (n)=>{
            throw mg((i)=>{
                this._value.set(new Eii(void 0, n), i);
            }), n;
        });
    }
    static fromFn(e) {
        return new uAb(e());
    }
}, Eii = class {
    constructor(t, e){
        this.data = t, this.error = e;
    }
    getDataOrThrow() {
        if (this.error) throw this.error;
        return this.data;
    }
}, HOd = class {
    constructor(t){
        this._computePromise = t, this._lazyValue = new $Od(()=>new y7o(this._computePromise())), this.cachedPromiseResult = Zo(this, (e)=>this._lazyValue.cachedValue.read(e)?.promiseResult.read(e));
    }
    getPromise() {
        return this._lazyValue.getValue().promise;
    }
};

}
