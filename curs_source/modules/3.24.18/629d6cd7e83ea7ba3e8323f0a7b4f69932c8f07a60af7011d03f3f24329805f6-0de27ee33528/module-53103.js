"use strict";
const r = require("./module-55201.js"), { InvalidArgumentError: s, RequestAbortedError: o } = require("./module-38238.js"), n = require("./module-31646.js");
class i extends n {
    #v = 1048576;
    #H = null;
    #V = !1;
    #x = !1;
    #W = 0;
    #O = null;
    #C = null;
    constructor({ maxSize: A }, e){
        if (super(e), null != A && (!Number.isFinite(A) || A < 1)) throw new s("maxSize must be a number greater than 0");
        this.#v = A ?? this.#v, this.#C = e;
    }
    onConnect(A) {
        this.#H = A, this.#C.onConnect(this.#P.bind(this));
    }
    #P(A) {
        this.#x = !0, this.#O = A;
    }
    onHeaders(A, e, t, s) {
        const n = r.parseHeaders(e)["content-length"];
        if (null != n && n > this.#v) throw new o(`Response size (${n}) larger than maxSize (${this.#v})`);
        return !!this.#x || this.#C.onHeaders(A, e, t, s);
    }
    onError(A) {
        this.#V || (A = this.#O ?? A, this.#C.onError(A));
    }
    onData(A) {
        return this.#W = this.#W + A.length, this.#W >= this.#v && (this.#V = !0, this.#x ? this.#C.onError(this.#O) : this.#C.onComplete([])), !0;
    }
    onComplete(A) {
        this.#V || (this.#x ? this.#C.onError(this.reason) : this.#C.onComplete(A));
    }
}
module.exports = function({ maxSize: A } = {
    maxSize: 1048576
}) {
    return (e)=>function(t, r) {
            const { dumpMaxSize: s = A } = t, o = new i({
                maxSize: s
            }, r);
            return e(t, o);
        };
};
