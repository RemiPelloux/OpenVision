"use strict";
module.exports = class {
    constructor(A){
        this.handler = A;
    }
    onConnect(...A) {
        return this.handler.onConnect(...A);
    }
    onError(...A) {
        return this.handler.onError(...A);
    }
    onUpgrade(...A) {
        return this.handler.onUpgrade(...A);
    }
    onHeaders(...A) {
        return this.handler.onHeaders(...A);
    }
    onData(...A) {
        return this.handler.onData(...A);
    }
    onComplete(...A) {
        return this.handler.onComplete(...A);
    }
    onBodySent(...A) {
        return this.handler.onBodySent(...A);
    }
};
