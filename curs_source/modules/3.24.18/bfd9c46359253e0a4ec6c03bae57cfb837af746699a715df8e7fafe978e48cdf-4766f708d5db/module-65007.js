"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.NotFoundError = void 0;
class r extends Error {
    constructor(e){
        super(e), this.name = "NotFoundError";
    }
}
exports.NotFoundError = r;
