Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createSingleCallFunction = function(e, t) {
    const n = this;
    let i, r = !1;
    return function() {
        if (r) return i;
        if (r = !0, t) try {
            i = e.apply(n, arguments);
        } finally{
            t();
        }
        else i = e.apply(n, arguments);
        return i;
    };
};
