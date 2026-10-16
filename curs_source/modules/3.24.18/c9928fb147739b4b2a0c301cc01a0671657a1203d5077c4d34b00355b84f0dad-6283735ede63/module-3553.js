Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.intervalProvider = void 0, exports.intervalProvider = {
    setInterval (e, n, ...s) {
        const { delegate: o } = exports.intervalProvider;
        return o?.setInterval ? o.setInterval(e, n, ...s) : setInterval(e, n, ...s);
    },
    clearInterval (e) {
        const { delegate: n } = exports.intervalProvider;
        return (n?.clearInterval || clearInterval)(e);
    },
    delegate: void 0
};
