"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ArgumentOutOfRangeError = void 0;
class r extends Error {
    constructor(){
        super("argument out of range"), this.name = "ArgumentOutOfRangeError";
    }
}
exports.ArgumentOutOfRangeError = r;
