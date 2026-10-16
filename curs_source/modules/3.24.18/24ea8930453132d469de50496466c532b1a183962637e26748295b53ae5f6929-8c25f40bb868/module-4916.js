var getBuiltIn = require("./module-7751.js");
var createSetLike = function(size) {
    return {
        size,
        has: function() {
            return false;
        },
        keys: function() {
            return {
                next: function() {
                    return {
                        done: true
                    };
                }
            };
        }
    };
};
var createSetLikeWithInfinitySize = function(size) {
    return {
        size,
        has: function() {
            return true;
        },
        keys: function() {
            throw new Error("e");
        }
    };
};
module.exports = function(name, callback) {
    var Set2 = getBuiltIn("Set");
    try {
        new Set2()[name](createSetLike(0));
        try {
            new Set2()[name](createSetLike(-1));
            return false;
        } catch (error2) {
            if (!callback) return true;
            try {
                new Set2()[name](createSetLikeWithInfinitySize(-Infinity));
                return false;
            } catch (error) {
                var set = new Set2();
                set.add(1);
                set.add(2);
                return callback(set[name](createSetLikeWithInfinitySize(Infinity)));
            }
        }
    } catch (error) {
        return false;
    }
};
