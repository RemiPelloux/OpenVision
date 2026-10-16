"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.immediateProvider = void 0;
const n = require("./module-22301.js"), { setImmediate: o, clearImmediate: s } = n.Immediate;
exports.immediateProvider = {
    setImmediate (...e) {
        const { delegate: r } = exports.immediateProvider;
        return (r?.setImmediate || o)(...e);
    },
    clearImmediate (e) {
        const { delegate: r } = exports.immediateProvider;
        return (r?.clearImmediate || s)(e);
    },
    delegate: void 0
};
