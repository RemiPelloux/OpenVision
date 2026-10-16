var i = {}.propertyIsEnumerable, s = Object.getOwnPropertyDescriptor, n = s && !i.call({
    1: 2
}, 1);
exports.f = n ? function(t) {
    var e = s(this, t);
    return !!e && e.enumerable;
} : i;
