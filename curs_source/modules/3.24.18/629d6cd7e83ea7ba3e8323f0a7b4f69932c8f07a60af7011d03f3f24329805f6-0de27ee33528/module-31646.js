"use strict";
module.exports = class {
    #C;
    constructor(A){
        if ("object" != typeof A || null === A) throw new TypeError("handler must be an object");
        this.#C = A;
    }
    onConnect(...A) {
        return this.#C.onConnect?.(...A);
    }
    onError(...A) {
        return this.#C.onError?.(...A);
    }
    onUpgrade(...A) {
        return this.#C.onUpgrade?.(...A);
    }
    onResponseStarted(...A) {
        return this.#C.onResponseStarted?.(...A);
    }
    onHeaders(...A) {
        return this.#C.onHeaders?.(...A);
    }
    onData(...A) {
        return this.#C.onData?.(...A);
    }
    onComplete(...A) {
        return this.#C.onComplete?.(...A);
    }
    onBodySent(...A) {
        return this.#C.onBodySent?.(...A);
    }
};
