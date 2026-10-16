"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.NoopTracerProvider = void 0;
const n = require("./module-1866.js");
exports.NoopTracerProvider = class {
    getTracer(e, t, r) {
        return new n.NoopTracer;
    }
};
