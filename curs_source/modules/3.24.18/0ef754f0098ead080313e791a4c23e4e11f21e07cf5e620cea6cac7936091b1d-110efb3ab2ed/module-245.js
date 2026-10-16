module.exports = function(e, a, n, t) {
    var s = t;
    e.registry[n] || (e.registry[n] = []);
    "before" === a && (t = function(e, a) {
        return Promise.resolve().then(s.bind(null, a)).then(e.bind(null, a));
    });
    "after" === a && (t = function(e, a) {
        var n;
        return Promise.resolve().then(e.bind(null, a)).then(function(e) {
            return s(n = e, a);
        }).then(function() {
            return n;
        });
    });
    "error" === a && (t = function(e, a) {
        return Promise.resolve().then(e.bind(null, a)).catch(function(e) {
            return s(e, a);
        });
    });
    e.registry[n].push({
        hook: t,
        orig: s
    });
};
