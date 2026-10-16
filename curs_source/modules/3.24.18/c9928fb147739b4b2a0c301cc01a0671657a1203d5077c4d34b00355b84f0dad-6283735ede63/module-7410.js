function n(e, a) {
    return a(e);
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.pipe = void 0, exports.pipe = function(...e) {
    return 1 === e.length ? e[0] : (a)=>e.reduce(n, a);
};
