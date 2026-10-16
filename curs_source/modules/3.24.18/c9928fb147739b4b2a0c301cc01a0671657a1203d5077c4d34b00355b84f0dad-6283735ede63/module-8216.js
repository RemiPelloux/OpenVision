Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.observeNotification = void 0, exports.observeNotification = function(e, a) {
    const { kind: n, value: s, error: o } = e;
    if ("string" != typeof n) throw new TypeError('Invalid notification, missing "kind"');
    "N" === n ? a.next?.(s) : "E" === n ? a.error?.(o) : a.complete?.();
};
