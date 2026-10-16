module.exports = function e(a, n, t, s) {
    if ("function" != typeof t) throw new Error("method for before hook must be a function");
    s || (s = {});
    if (Array.isArray(n)) return n.reverse().reduce(function(n, t) {
        return e.bind(null, a, t, n, s);
    }, t)();
    return Promise.resolve().then(function() {
        return a.registry[n] ? a.registry[n].reduce(function(e, a) {
            return a.hook.bind(null, e, s);
        }, t)() : t(s);
    });
};
