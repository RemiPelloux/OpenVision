Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.immediateProvider = void 0;
const s = require("./module-2301.js"), { setImmediate: o, clearImmediate: r } = s.Immediate;
exports.immediateProvider = {
    setImmediate (...e) {
        const { delegate: n } = exports.immediateProvider;
        return (n?.setImmediate || o)(...e);
    },
    clearImmediate (e) {
        const { delegate: n } = exports.immediateProvider;
        return (n?.clearImmediate || r)(e);
    },
    delegate: void 0
};
