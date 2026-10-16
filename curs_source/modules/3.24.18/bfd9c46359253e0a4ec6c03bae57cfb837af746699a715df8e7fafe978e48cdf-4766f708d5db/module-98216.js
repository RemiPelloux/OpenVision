"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.observeNotification = void 0, exports.observeNotification = function(e, t) {
    const { kind: r, value: n, error: s } = e;
    if ("string" != typeof r) throw new TypeError('Invalid notification, missing "kind"');
    "N" === r ? t.next?.(n) : "E" === r ? t.error?.(s) : t.complete?.();
};
