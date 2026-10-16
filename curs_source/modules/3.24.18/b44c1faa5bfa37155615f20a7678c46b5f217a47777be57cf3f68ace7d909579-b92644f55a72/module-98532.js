"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
class r extends Error {
    constructor(e){
        super("validation failed"), this.errors = e, this.ajv = this.validation = !0;
    }
}
exports.default = r;
