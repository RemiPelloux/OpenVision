Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createObject = void 0, exports.createObject = function(e, a) {
    return e.reduce((e, n, s)=>(e[n] = a[s], e), {});
};
