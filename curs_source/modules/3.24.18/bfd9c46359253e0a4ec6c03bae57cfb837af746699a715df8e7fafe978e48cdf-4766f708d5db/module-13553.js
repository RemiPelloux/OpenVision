"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.intervalProvider = void 0, exports.intervalProvider = {
    setInterval (e, r, ...n) {
        const { delegate: s } = exports.intervalProvider;
        return s?.setInterval ? s.setInterval(e, r, ...n) : setInterval(e, r, ...n);
    },
    clearInterval (e) {
        const { delegate: r } = exports.intervalProvider;
        return (r?.clearInterval || clearInterval)(e);
    },
    delegate: void 0
};
