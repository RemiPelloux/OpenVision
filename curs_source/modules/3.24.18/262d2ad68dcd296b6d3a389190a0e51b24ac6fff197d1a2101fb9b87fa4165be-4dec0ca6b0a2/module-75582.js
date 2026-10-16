"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.NoopTextMapPropagator = void 0;
exports.NoopTextMapPropagator = class {
    inject(e, t) {}
    extract(e, t) {
        return e;
    }
    fields() {
        return [];
    }
};
