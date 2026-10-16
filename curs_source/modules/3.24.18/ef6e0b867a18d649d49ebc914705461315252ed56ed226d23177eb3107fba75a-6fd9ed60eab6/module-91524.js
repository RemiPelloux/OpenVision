"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.EndOfStreamError = exports.defaultMessages = void 0, exports.defaultMessages = "End-Of-Stream";
class i extends Error {
    constructor(){
        super(exports.defaultMessages);
    }
}
exports.EndOfStreamError = i;
