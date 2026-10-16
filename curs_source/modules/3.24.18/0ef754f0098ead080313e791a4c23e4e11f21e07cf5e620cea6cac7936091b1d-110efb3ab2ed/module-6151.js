"use strict";
var a = {};
function n(e) {
    return e < 0 ? -1 : 1;
}
function t(e, a) {
    a.unsigned || --e;
    const t = a.unsigned ? 0 : -Math.pow(2, e), s = Math.pow(2, e) - 1, o = a.moduloBitLength ? Math.pow(2, a.moduloBitLength) : Math.pow(2, e), r = a.moduloBitLength ? Math.pow(2, a.moduloBitLength - 1) : Math.pow(2, e - 1);
    return function(e, i) {
        i || (i = {});
        let l = +e;
        if (i.enforceRange) {
            if (!Number.isFinite(l)) throw new TypeError("Argument is not a finite number");
            if (l = n(l) * Math.floor(Math.abs(l)), l < t || l > s) throw new TypeError("Argument is not in byte range");
            return l;
        }
        if (!isNaN(l) && i.clamp) return l = function(e) {
            return e % 1 != .5 || 1 & e ? Math.round(e) : Math.floor(e);
        }(l), l < t && (l = t), l > s && (l = s), l;
        if (!Number.isFinite(l) || 0 === l) return 0;
        if (l = n(l) * Math.floor(Math.abs(l)), l %= o, !a.unsigned && l >= r) return l - o;
        if (a.unsigned) {
            if (l < 0) l += o;
            else if (-0 === l) return 0;
        }
        return l;
    };
}
module.exports = a, a.void = function() {}, a.boolean = function(e) {
    return !!e;
}, a.byte = t(8, {
    unsigned: !1
}), a.octet = t(8, {
    unsigned: !0
}), a.short = t(16, {
    unsigned: !1
}), a["unsigned short"] = t(16, {
    unsigned: !0
}), a.long = t(32, {
    unsigned: !1
}), a["unsigned long"] = t(32, {
    unsigned: !0
}), a["long long"] = t(32, {
    unsigned: !1,
    moduloBitLength: 64
}), a["unsigned long long"] = t(32, {
    unsigned: !0,
    moduloBitLength: 64
}), a.double = function(e) {
    const a = +e;
    if (!Number.isFinite(a)) throw new TypeError("Argument is not a finite floating-point value");
    return a;
}, a["unrestricted double"] = function(e) {
    const a = +e;
    if (isNaN(a)) throw new TypeError("Argument is NaN");
    return a;
}, a.float = a.double, a["unrestricted float"] = a["unrestricted double"], a.DOMString = function(e, a) {
    return a || (a = {}), a.treatNullAsEmptyString && null === e ? "" : String(e);
}, a.ByteString = function(e, a) {
    const n = String(e);
    let t;
    for(let e = 0; void 0 !== (t = n.codePointAt(e)); ++e)if (t > 255) throw new TypeError("Argument is not a valid bytestring");
    return n;
}, a.USVString = function(e) {
    const a = String(e), n = a.length, t = [];
    for(let e = 0; e < n; ++e){
        const s = a.charCodeAt(e);
        if (s < 55296 || s > 57343) t.push(String.fromCodePoint(s));
        else if (56320 <= s && s <= 57343) t.push(String.fromCodePoint(65533));
        else if (e === n - 1) t.push(String.fromCodePoint(65533));
        else {
            const n = a.charCodeAt(e + 1);
            if (56320 <= n && n <= 57343) {
                const a = 1023 & s, o = 1023 & n;
                t.push(String.fromCodePoint(65536 + 1024 * a + o)), ++e;
            } else t.push(String.fromCodePoint(65533));
        }
    }
    return t.join("");
}, a.Date = function(e, a) {
    if (!(e instanceof Date)) throw new TypeError("Argument is not a Date object");
    if (!isNaN(e)) return e;
}, a.RegExp = function(e, a) {
    return e instanceof RegExp || (e = new RegExp(e)), e;
};
