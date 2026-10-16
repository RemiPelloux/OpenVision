"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SequenceError = void 0;
class r extends Error {
    constructor(e){
        super(e), this.name = "SequenceError";
    }
}
exports.SequenceError = r;
