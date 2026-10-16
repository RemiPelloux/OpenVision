"use strict";
const r = require(78474);
class s extends r {
    dispatch() {
        throw new Error("not implemented");
    }
    close() {
        throw new Error("not implemented");
    }
    destroy() {
        throw new Error("not implemented");
    }
    compose(...A) {
        const e = Array.isArray(A[0]) ? A[0] : A;
        let t = this.dispatch.bind(this);
        for (const A of e)if (null != A) {
            if ("function" != typeof A) throw new TypeError("invalid interceptor, expected function received " + typeof A);
            if (t = A(t), null == t || "function" != typeof t || 2 !== t.length) throw new TypeError("invalid interceptor");
        }
        return new o(this, t);
    }
}
class o extends s {
    #M = null;
    #I = null;
    constructor(A, e){
        super(), this.#M = A, this.#I = e;
    }
    dispatch(...A) {
        this.#I(...A);
    }
    close(...A) {
        return this.#M.close(...A);
    }
    destroy(...A) {
        return this.#M.destroy(...A);
    }
}
module.exports = s;
