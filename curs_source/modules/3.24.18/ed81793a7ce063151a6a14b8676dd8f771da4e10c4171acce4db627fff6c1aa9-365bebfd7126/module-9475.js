module.exports = function(t, r) {
    var e = "function" == typeof Iterator && Iterator.prototype[t];
    if (e) try {
        e.call({
            next: null
        }, r).next();
    } catch (t) {
        return !0;
    }
};
