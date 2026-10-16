let r = require("./module-2707.js");
let n = {
    0: function(t, e, i, r, n) {
        for(let s = 0; s < i; s++)r[n + s] = t[e + s];
    },
    1: function(t, e, i, r, n, s) {
        for(let h = 0; h < i; h++){
            let i = h >= s ? t[e + h - s] : 0, o = t[e + h] - i;
            r[n + h] = o;
        }
    },
    2: function(t, e, i, r, n) {
        for(let s = 0; s < i; s++){
            let h = e > 0 ? t[e + s - i] : 0, o = t[e + s] - h;
            r[n + s] = o;
        }
    },
    3: function(t, e, i, r, n, s) {
        for(let h = 0; h < i; h++){
            let o = h >= s ? t[e + h - s] : 0, a = e > 0 ? t[e + h - i] : 0, l = t[e + h] - (o + a >> 1);
            r[n + h] = l;
        }
    },
    4: function(t, e, i, n, s, h) {
        for(let o = 0; o < i; o++){
            let a = o >= h ? t[e + o - h] : 0, l = e > 0 ? t[e + o - i] : 0, f = e > 0 && o >= h ? t[e + o - (i + h)] : 0, p = t[e + o] - r(a, l, f);
            n[s + o] = p;
        }
    }
}, s = {
    0: function(t, e, i) {
        let r = 0, n = e + i;
        for(let i = e; i < n; i++)r += Math.abs(t[i]);
        return r;
    },
    1: function(t, e, i, r) {
        let n = 0;
        for(let s = 0; s < i; s++){
            let i = s >= r ? t[e + s - r] : 0, h = t[e + s] - i;
            n += Math.abs(h);
        }
        return n;
    },
    2: function(t, e, i) {
        let r = 0, n = e + i;
        for(let s = e; s < n; s++){
            let n = e > 0 ? t[s - i] : 0, h = t[s] - n;
            r += Math.abs(h);
        }
        return r;
    },
    3: function(t, e, i, r) {
        let n = 0;
        for(let s = 0; s < i; s++){
            let h = s >= r ? t[e + s - r] : 0, o = e > 0 ? t[e + s - i] : 0, a = t[e + s] - (h + o >> 1);
            n += Math.abs(a);
        }
        return n;
    },
    4: function(t, e, i, n) {
        let s = 0;
        for(let h = 0; h < i; h++){
            let o = h >= n ? t[e + h - n] : 0, a = e > 0 ? t[e + h - i] : 0, l = e > 0 && h >= n ? t[e + h - (i + n)] : 0, f = t[e + h] - r(o, a, l);
            s += Math.abs(f);
        }
        return s;
    }
};
module.exports = function(t, e, i, r, h) {
    let o;
    if ("filterType" in r && -1 !== r.filterType) {
        if ("number" != typeof r.filterType) throw new Error("unrecognised filter types");
        o = [
            r.filterType
        ];
    } else o = [
        0,
        1,
        2,
        3,
        4
    ];
    16 === r.bitDepth && (h *= 2);
    let a = e * h, l = 0, f = 0, p = Buffer.alloc((a + 1) * i), d = o[0];
    for(let e = 0; e < i; e++){
        if (o.length > 1) {
            let e = 1 / 0;
            for(let i = 0; i < o.length; i++){
                let r = s[o[i]](t, f, a, h);
                r < e && (d = o[i], e = r);
            }
        }
        p[l] = d, l++, n[d](t, f, a, p, l, h), l += a, f += a;
    }
    return p;
};
