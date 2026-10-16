module.exports = function(t) {
    try {
        var r = new Set, e = {
            size: 0,
            has: function() {
                return !0;
            },
            keys: function() {
                return Object.defineProperty({}, "next", {
                    get: function() {
                        return r.clear(), r.add(4), function() {
                            return {
                                done: !0
                            };
                        };
                    }
                });
            }
        }, n = r[t](e);
        return 1 === n.size && 4 === n.values().next().value;
    } catch (t) {
        return !1;
    }
};
