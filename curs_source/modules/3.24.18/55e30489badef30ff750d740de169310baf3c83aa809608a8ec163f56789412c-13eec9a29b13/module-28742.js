"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AnsiStringType = exports.StringType = exports.BufferType = exports.Uint8ArrayType = exports.IgnoreType = exports.Float80_LE = exports.Float80_BE = exports.Float64_LE = exports.Float64_BE = exports.Float32_LE = exports.Float32_BE = exports.Float16_LE = exports.Float16_BE = exports.INT64_BE = exports.UINT64_BE = exports.INT64_LE = exports.UINT64_LE = exports.INT32_LE = exports.INT32_BE = exports.INT24_BE = exports.INT24_LE = exports.INT16_LE = exports.INT16_BE = exports.INT8 = exports.UINT32_BE = exports.UINT32_LE = exports.UINT24_BE = exports.UINT24_LE = exports.UINT16_BE = exports.UINT16_LE = exports.UINT8 = void 0;
const a = require("./module-48821.js");
function n(e) {
    return new DataView(e.buffer, e.byteOffset);
}
exports.UINT8 = {
    len: 1,
    get: (e, t)=>n(e).getUint8(t),
    put: (e, t, i)=>(n(e).setUint8(t, i), t + 1)
}, exports.UINT16_LE = {
    len: 2,
    get: (e, t)=>n(e).getUint16(t, !0),
    put: (e, t, i)=>(n(e).setUint16(t, i, !0), t + 2)
}, exports.UINT16_BE = {
    len: 2,
    get: (e, t)=>n(e).getUint16(t),
    put: (e, t, i)=>(n(e).setUint16(t, i), t + 2)
}, exports.UINT24_LE = {
    len: 3,
    get (e, t) {
        const i = n(e);
        return i.getUint8(t) + (i.getUint16(t + 1, !0) << 8);
    },
    put (e, t, i) {
        const a = n(e);
        return a.setUint8(t, 255 & i), a.setUint16(t + 1, i >> 8, !0), t + 3;
    }
}, exports.UINT24_BE = {
    len: 3,
    get (e, t) {
        const i = n(e);
        return (i.getUint16(t) << 8) + i.getUint8(t + 2);
    },
    put (e, t, i) {
        const a = n(e);
        return a.setUint16(t, i >> 8), a.setUint8(t + 2, 255 & i), t + 3;
    }
}, exports.UINT32_LE = {
    len: 4,
    get: (e, t)=>n(e).getUint32(t, !0),
    put: (e, t, i)=>(n(e).setUint32(t, i, !0), t + 4)
}, exports.UINT32_BE = {
    len: 4,
    get: (e, t)=>n(e).getUint32(t),
    put: (e, t, i)=>(n(e).setUint32(t, i), t + 4)
}, exports.INT8 = {
    len: 1,
    get: (e, t)=>n(e).getInt8(t),
    put: (e, t, i)=>(n(e).setInt8(t, i), t + 1)
}, exports.INT16_BE = {
    len: 2,
    get: (e, t)=>n(e).getInt16(t),
    put: (e, t, i)=>(n(e).setInt16(t, i), t + 2)
}, exports.INT16_LE = {
    len: 2,
    get: (e, t)=>n(e).getInt16(t, !0),
    put: (e, t, i)=>(n(e).setInt16(t, i, !0), t + 2)
}, exports.INT24_LE = {
    len: 3,
    get (e, i) {
        const a = exports.UINT24_LE.get(e, i);
        return a > 8388607 ? a - 16777216 : a;
    },
    put (e, t, i) {
        const a = n(e);
        return a.setUint8(t, 255 & i), a.setUint16(t + 1, i >> 8, !0), t + 3;
    }
}, exports.INT24_BE = {
    len: 3,
    get (e, i) {
        const a = exports.UINT24_BE.get(e, i);
        return a > 8388607 ? a - 16777216 : a;
    },
    put (e, t, i) {
        const a = n(e);
        return a.setUint16(t, i >> 8), a.setUint8(t + 2, 255 & i), t + 3;
    }
}, exports.INT32_BE = {
    len: 4,
    get: (e, t)=>n(e).getInt32(t),
    put: (e, t, i)=>(n(e).setInt32(t, i), t + 4)
}, exports.INT32_LE = {
    len: 4,
    get: (e, t)=>n(e).getInt32(t, !0),
    put: (e, t, i)=>(n(e).setInt32(t, i, !0), t + 4)
}, exports.UINT64_LE = {
    len: 8,
    get: (e, t)=>n(e).getBigUint64(t, !0),
    put: (e, t, i)=>(n(e).setBigUint64(t, i, !0), t + 8)
}, exports.INT64_LE = {
    len: 8,
    get: (e, t)=>n(e).getBigInt64(t, !0),
    put: (e, t, i)=>(n(e).setBigInt64(t, i, !0), t + 8)
}, exports.UINT64_BE = {
    len: 8,
    get: (e, t)=>n(e).getBigUint64(t),
    put: (e, t, i)=>(n(e).setBigUint64(t, i), t + 8)
}, exports.INT64_BE = {
    len: 8,
    get: (e, t)=>n(e).getBigInt64(t),
    put: (e, t, i)=>(n(e).setBigInt64(t, i), t + 8)
}, exports.Float16_BE = {
    len: 2,
    get (e, t) {
        return a.read(e, t, !1, 10, this.len);
    },
    put (e, t, i) {
        return a.write(e, i, t, !1, 10, this.len), t + this.len;
    }
}, exports.Float16_LE = {
    len: 2,
    get (e, t) {
        return a.read(e, t, !0, 10, this.len);
    },
    put (e, t, i) {
        return a.write(e, i, t, !0, 10, this.len), t + this.len;
    }
}, exports.Float32_BE = {
    len: 4,
    get: (e, t)=>n(e).getFloat32(t),
    put: (e, t, i)=>(n(e).setFloat32(t, i), t + 4)
}, exports.Float32_LE = {
    len: 4,
    get: (e, t)=>n(e).getFloat32(t, !0),
    put: (e, t, i)=>(n(e).setFloat32(t, i, !0), t + 4)
}, exports.Float64_BE = {
    len: 8,
    get: (e, t)=>n(e).getFloat64(t),
    put: (e, t, i)=>(n(e).setFloat64(t, i), t + 8)
}, exports.Float64_LE = {
    len: 8,
    get: (e, t)=>n(e).getFloat64(t, !0),
    put: (e, t, i)=>(n(e).setFloat64(t, i, !0), t + 8)
}, exports.Float80_BE = {
    len: 10,
    get (e, t) {
        return a.read(e, t, !1, 63, this.len);
    },
    put (e, t, i) {
        return a.write(e, i, t, !1, 63, this.len), t + this.len;
    }
}, exports.Float80_LE = {
    len: 10,
    get (e, t) {
        return a.read(e, t, !0, 63, this.len);
    },
    put (e, t, i) {
        return a.write(e, i, t, !0, 63, this.len), t + this.len;
    }
};
exports.IgnoreType = class {
    constructor(e){
        this.len = e;
    }
    get(e, t) {}
};
exports.Uint8ArrayType = class {
    constructor(e){
        this.len = e;
    }
    get(e, t) {
        return e.subarray(t, t + this.len);
    }
};
exports.BufferType = class {
    constructor(e){
        this.len = e;
    }
    get(e, t) {
        return Buffer.from(e.subarray(t, t + this.len));
    }
};
exports.StringType = class {
    constructor(e, t){
        this.len = e, this.encoding = t;
    }
    get(e, t) {
        return Buffer.from(e).toString(this.encoding, t, t + this.len);
    }
};
class r {
    constructor(e){
        this.len = e;
    }
    static decode(e, t, i) {
        let a = "";
        for(let n = t; n < i; ++n)a += r.codePointToString(r.singleByteDecoder(e[n]));
        return a;
    }
    static inRange(e, t, i) {
        return t <= e && e <= i;
    }
    static codePointToString(e) {
        return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)));
    }
    static singleByteDecoder(e) {
        if (r.inRange(e, 0, 127)) return e;
        const t = r.windows1252[e - 128];
        if (null === t) throw Error("invaliding encoding");
        return t;
    }
    get(e, t = 0) {
        return r.decode(e, t, t + this.len);
    }
}
exports.AnsiStringType = r, r.windows1252 = [
    8364,
    129,
    8218,
    402,
    8222,
    8230,
    8224,
    8225,
    710,
    8240,
    352,
    8249,
    338,
    141,
    381,
    143,
    144,
    8216,
    8217,
    8220,
    8221,
    8226,
    8211,
    8212,
    732,
    8482,
    353,
    8250,
    339,
    157,
    382,
    376,
    160,
    161,
    162,
    163,
    164,
    165,
    166,
    167,
    168,
    169,
    170,
    171,
    172,
    173,
    174,
    175,
    176,
    177,
    178,
    179,
    180,
    181,
    182,
    183,
    184,
    185,
    186,
    187,
    188,
    189,
    190,
    191,
    192,
    193,
    194,
    195,
    196,
    197,
    198,
    199,
    200,
    201,
    202,
    203,
    204,
    205,
    206,
    207,
    208,
    209,
    210,
    211,
    212,
    213,
    214,
    215,
    216,
    217,
    218,
    219,
    220,
    221,
    222,
    223,
    224,
    225,
    226,
    227,
    228,
    229,
    230,
    231,
    232,
    233,
    234,
    235,
    236,
    237,
    238,
    239,
    240,
    241,
    242,
    243,
    244,
    245,
    246,
    247,
    248,
    249,
    250,
    251,
    252,
    253,
    254,
    255
];
