function t(e, t) {
    switch(e){
        case 1:
            return t.nextUInt8();
        case 3:
        case 8:
            return t.nextUInt16();
        case 4:
        case 9:
            return t.nextUInt32();
        case 5:
            return [
                t.nextUInt32(),
                t.nextUInt32()
            ];
        case 6:
            return t.nextInt8();
        case 10:
            return [
                t.nextInt32(),
                t.nextInt32()
            ];
        case 11:
            return t.nextFloat();
        case 12:
            return t.nextDouble();
        default:
            throw new Error("Invalid format while decoding: " + e);
    }
}
function i(e, i) {
    var a, n, r = i.nextUInt16(), o = i.nextUInt16(), s = function(e) {
        switch(e){
            case 1:
            case 2:
            case 6:
            case 7:
                return 1;
            case 3:
            case 8:
                return 2;
            case 4:
            case 9:
            case 11:
                return 4;
            case 5:
            case 10:
            case 12:
                return 8;
            default:
                return 0;
        }
    }(o), f = i.nextUInt32(), p = s * f;
    if (p > 4 && (i = e.openWithOffset(i.nextUInt32())), 2 === o) {
        var m = (a = i.nextString(f)).indexOf("\0");
        -1 !== m && (a = a.substr(0, m));
    } else if (7 === o) a = i.nextBuffer(f);
    else if (0 !== o) for(a = [], n = 0; n < f; ++n)a.push(t(o, i));
    return p < 4 && i.skip(4 - p), [
        r,
        a,
        o
    ];
}
function a(e, t, a) {
    var n, r, o = t.nextUInt16();
    for(r = 0; r < o; ++r)a((n = i(e, t))[0], n[1], n[2]);
}
module.exports = {
    IFD0: 1,
    IFD1: 2,
    GPSIFD: 3,
    SubIFD: 4,
    InteropIFD: 5,
    parseTags: function(e, t) {
        var i, n, r, o;
        try {
            i = function(e) {
                if ("Exif\0\0" !== e.nextString(6)) throw new Error("Invalid EXIF header");
                var t = e.mark(), i = e.nextUInt16();
                if (18761 === i) e.setBigEndian(!1);
                else {
                    if (19789 !== i) throw new Error("Invalid TIFF header");
                    e.setBigEndian(!0);
                }
                if (42 !== e.nextUInt16()) throw new Error("Invalid TIFF data");
                return t;
            }(e);
        } catch (e) {
            return !1;
        }
        var s = i.openWithOffset(e.nextUInt32()), f = this.IFD0;
        a(i, s, function(e, i, a) {
            switch(e){
                case 34853:
                    r = i[0];
                    break;
                case 34665:
                    n = i[0];
                    break;
                default:
                    t(f, e, i, a);
            }
        });
        var p = s.nextUInt32();
        if (0 !== p) {
            var m = i.openWithOffset(p);
            a(i, m, t.bind(null, this.IFD1));
        }
        if (r) {
            var l = i.openWithOffset(r);
            a(i, l, t.bind(null, this.GPSIFD));
        }
        if (n) {
            var c = i.openWithOffset(n), u = this.InteropIFD;
            a(i, c, function(e, i, a) {
                40965 === e ? o = i[0] : t(u, e, i, a);
            });
        }
        if (o) {
            var d = i.openWithOffset(o);
            a(i, d, t.bind(null, this.InteropIFD));
        }
        return !0;
    }
};
