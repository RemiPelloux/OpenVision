"use strict";
module.exports = function e(t, r) {
    if (t === r) return !0;
    if (t && r && "object" == typeof t && "object" == typeof r) {
        if (t.constructor !== r.constructor) return !1;
        var n, o, s;
        if (Array.isArray(t)) {
            if ((n = t.length) != r.length) return !1;
            for(o = n; 0 !== o--;)if (!e(t[o], r[o])) return !1;
            return !0;
        }
        if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
        if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
        if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
        if ((n = (s = Object.keys(t)).length) !== Object.keys(r).length) return !1;
        for(o = n; 0 !== o--;)if (!Object.prototype.hasOwnProperty.call(r, s[o])) return !1;
        for(o = n; 0 !== o--;){
            var i = s[o];
            if (!e(t[i], r[i])) return !1;
        }
        return !0;
    }
    return t != t && r != r;
};
