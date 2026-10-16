var e = {}.propertyIsEnumerable, n = Object.getOwnPropertyDescriptor, o = n && !e.call({
    1: 2
}, 1);
exports.f = o ? function(t) {
    var r = n(this, t);
    return !!r && r.enumerable;
} : e;
