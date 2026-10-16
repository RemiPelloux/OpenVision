"use strict";
module.exports = class {
    constructor(t){
        this.handler = t;
    }
    onConnect(...t) {
        return this.handler.onConnect(...t);
    }
    onError(...t) {
        return this.handler.onError(...t);
    }
    onUpgrade(...t) {
        return this.handler.onUpgrade(...t);
    }
    onHeaders(...t) {
        return this.handler.onHeaders(...t);
    }
    onData(...t) {
        return this.handler.onData(...t);
    }
    onComplete(...t) {
        return this.handler.onComplete(...t);
    }
    onBodySent(...t) {
        return this.handler.onBodySent(...t);
    }
};
