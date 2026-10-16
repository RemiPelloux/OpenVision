module.exports = function(e, a, n) {
    if (!e.registry[a]) return;
    var t = e.registry[a].map(function(e) {
        return e.orig;
    }).indexOf(n);
    if (-1 === t) return;
    e.registry[a].splice(t, 1);
};
