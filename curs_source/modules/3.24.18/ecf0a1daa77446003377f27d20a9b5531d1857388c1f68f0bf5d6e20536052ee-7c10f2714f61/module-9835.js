module.exports = function(t) {
    try {
        var e = new Set, i = {
            size: 0,
            has: function() {
                return !0;
            },
            keys: function() {
                return Object.defineProperty({}, "next", {
                    get: function() {
                        return e.clear(), e.add(4), function() {
                            return {
                                done: !0
                            };
                        };
                    }
                });
            }
        }, s = e[t](i);
        return 1 === s.size && 4 === s.values().next().value;
    } catch (t) {
        return !1;
    }
};
