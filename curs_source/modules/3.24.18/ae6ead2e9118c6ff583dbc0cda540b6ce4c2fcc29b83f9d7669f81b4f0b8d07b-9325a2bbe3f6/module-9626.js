let r = require("./module-8401.js"), n = [
    function() {},
    function(t, e, i, r) {
        if (r === e.length) throw new Error("Ran out of data");
        let n = e[r];
        t[i] = n, t[i + 1] = n, t[i + 2] = n, t[i + 3] = 255;
    },
    function(t, e, i, r) {
        if (r + 1 >= e.length) throw new Error("Ran out of data");
        let n = e[r];
        t[i] = n, t[i + 1] = n, t[i + 2] = n, t[i + 3] = e[r + 1];
    },
    function(t, e, i, r) {
        if (r + 2 >= e.length) throw new Error("Ran out of data");
        t[i] = e[r], t[i + 1] = e[r + 1], t[i + 2] = e[r + 2], t[i + 3] = 255;
    },
    function(t, e, i, r) {
        if (r + 3 >= e.length) throw new Error("Ran out of data");
        t[i] = e[r], t[i + 1] = e[r + 1], t[i + 2] = e[r + 2], t[i + 3] = e[r + 3];
    }
], s = [
    function() {},
    function(t, e, i, r) {
        let n = e[0];
        t[i] = n, t[i + 1] = n, t[i + 2] = n, t[i + 3] = r;
    },
    function(t, e, i) {
        let r = e[0];
        t[i] = r, t[i + 1] = r, t[i + 2] = r, t[i + 3] = e[1];
    },
    function(t, e, i, r) {
        t[i] = e[0], t[i + 1] = e[1], t[i + 2] = e[2], t[i + 3] = r;
    },
    function(t, e, i) {
        t[i] = e[0], t[i + 1] = e[1], t[i + 2] = e[2], t[i + 3] = e[3];
    }
];
function h(t, e, i, r, s, h) {
    let o = t.width, a = t.height, l = t.index;
    for(let t = 0; t < a; t++)for(let a = 0; a < o; a++){
        let o = i(a, t, l);
        n[r](e, s, o, h), h += r;
    }
    return h;
}
function o(t, e, i, r, n, h) {
    let o = t.width, a = t.height, l = t.index;
    for(let t = 0; t < a; t++){
        for(let a = 0; a < o; a++){
            let o = n.get(r), f = i(a, t, l);
            s[r](e, o, f, h);
        }
        n.resetAfterLine();
    }
}
exports.dataToBitMap = function(t, e) {
    let i, n, s = e.width, a = e.height, l = e.depth, f = e.bpp, p = e.interlace;
    8 !== l && (i = function(t, e) {
        let i = [], r = 0;
        function n() {
            if (r === t.length) throw new Error("Ran out of data");
            let n, s, h, o, a, l, f, p, d = t[r];
            switch(r++, e){
                default:
                    throw new Error("unrecognised depth");
                case 16:
                    f = t[r], r++, i.push((d << 8) + f);
                    break;
                case 4:
                    f = 15 & d, p = d >> 4, i.push(p, f);
                    break;
                case 2:
                    a = 3 & d, l = d >> 2 & 3, f = d >> 4 & 3, p = d >> 6 & 3, i.push(p, f, l, a);
                    break;
                case 1:
                    n = 1 & d, s = d >> 1 & 1, h = d >> 2 & 1, o = d >> 3 & 1, a = d >> 4 & 1, l = d >> 5 & 1, f = d >> 6 & 1, p = d >> 7 & 1, i.push(p, f, l, a, o, h, s, n);
            }
        }
        return {
            get: function(t) {
                for(; i.length < t;)n();
                let e = i.slice(0, t);
                return i = i.slice(t), e;
            },
            resetAfterLine: function() {
                i.length = 0;
            },
            end: function() {
                if (r !== t.length) throw new Error("extra data found");
            }
        };
    }(t, l)), n = l <= 8 ? Buffer.alloc(s * a * 4) : new Uint16Array(s * a * 4);
    let d, u, c = Math.pow(2, l) - 1, _ = 0;
    if (p) d = r.getImagePasses(s, a), u = r.getInterlaceIterator(s, a);
    else {
        let t = 0;
        u = function() {
            let e = t;
            return t += 4, e;
        }, d = [
            {
                width: s,
                height: a
            }
        ];
    }
    for(let e = 0; e < d.length; e++)8 === l ? _ = h(d[e], n, u, f, t, _) : o(d[e], n, u, f, i, c);
    if (8 === l) {
        if (_ !== t.length) throw new Error("extra data found");
    } else i.end();
    return n;
};
