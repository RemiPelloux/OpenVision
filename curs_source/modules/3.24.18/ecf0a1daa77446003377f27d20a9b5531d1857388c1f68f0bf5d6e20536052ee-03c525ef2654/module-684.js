module.exports = function(t, e) {
    var i = "function" == typeof Iterator && Iterator.prototype[t];
    if (i) try {
        i.call({
            next: null
        }, e).next();
    } catch (t) {
        return !0;
    }
};
