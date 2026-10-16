Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.arrRemove = void 0, exports.arrRemove = function(e, a) {
    if (e) {
        const n = e.indexOf(a);
        0 <= n && e.splice(n, 1);
    }
};
