"use strict";
module.exports = class {
    constructor(e){
        this.handler = e;
    }
    onConnect(...e) {
        return this.handler.onConnect(...e);
    }
    onError(...e) {
        return this.handler.onError(...e);
    }
    onUpgrade(...e) {
        return this.handler.onUpgrade(...e);
    }
    onHeaders(...e) {
        return this.handler.onHeaders(...e);
    }
    onData(...e) {
        return this.handler.onData(...e);
    }
    onComplete(...e) {
        return this.handler.onComplete(...e);
    }
    onBodySent(...e) {
        return this.handler.onBodySent(...e);
    }
};
