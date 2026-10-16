"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.NoopContextManager = void 0;
const n = require("./module-2954.js");
exports.NoopContextManager = class {
    active() {
        return n.ROOT_CONTEXT;
    }
    with(e, t, r, ...n) {
        return t.call(r, ...n);
    }
    bind(e, t) {
        return t;
    }
    enable() {
        return this;
    }
    disable() {
        return this;
    }
};
