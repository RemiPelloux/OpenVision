import { require_ieee754 } from "../../../../ieee754@1.2.1/node_modules/ieee754/index.js";
var __wakaru_require_lib2_cache;
export function require_lib2() {
if (__wakaru_require_lib2_cache) return __wakaru_require_lib2_cache;
var exports2 = {};
__wakaru_require_lib2_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.AnsiStringType = exports2.StringType = exports2.BufferType = exports2.Uint8ArrayType = exports2.IgnoreType = exports2.Float80_LE = exports2.Float80_BE = exports2.Float64_LE = exports2.Float64_BE = exports2.Float32_LE = exports2.Float32_BE = exports2.Float16_LE = exports2.Float16_BE = exports2.INT64_BE = exports2.UINT64_BE = exports2.INT64_LE = exports2.UINT64_LE = exports2.INT32_LE = exports2.INT32_BE = exports2.INT24_BE = exports2.INT24_LE = exports2.INT16_LE = exports2.INT16_BE = exports2.INT8 = exports2.UINT32_BE = exports2.UINT32_LE = exports2.UINT24_BE = exports2.UINT24_LE = exports2.UINT16_BE = exports2.UINT16_LE = exports2.UINT8 = void 0;
var ieee754 = require_ieee754();
function dv(array3) {
    return new DataView(array3.buffer, array3.byteOffset);
}
exports2.UINT8 = {
    len: 1,
    get (array3, offset) {
        return dv(array3).getUint8(offset);
    },
    put (array3, offset, value) {
        dv(array3).setUint8(offset, value);
        return offset + 1;
    }
};
exports2.UINT16_LE = {
    len: 2,
    get (array3, offset) {
        return dv(array3).getUint16(offset, true);
    },
    put (array3, offset, value) {
        dv(array3).setUint16(offset, value, true);
        return offset + 2;
    }
};
exports2.UINT16_BE = {
    len: 2,
    get (array3, offset) {
        return dv(array3).getUint16(offset);
    },
    put (array3, offset, value) {
        dv(array3).setUint16(offset, value);
        return offset + 2;
    }
};
exports2.UINT24_LE = {
    len: 3,
    get (array3, offset) {
        const dataView = dv(array3);
        return dataView.getUint8(offset) + (dataView.getUint16(offset + 1, true) << 8);
    },
    put (array3, offset, value) {
        const dataView = dv(array3);
        dataView.setUint8(offset, value & 255);
        dataView.setUint16(offset + 1, value >> 8, true);
        return offset + 3;
    }
};
exports2.UINT24_BE = {
    len: 3,
    get (array3, offset) {
        const dataView = dv(array3);
        return (dataView.getUint16(offset) << 8) + dataView.getUint8(offset + 2);
    },
    put (array3, offset, value) {
        const dataView = dv(array3);
        dataView.setUint16(offset, value >> 8);
        dataView.setUint8(offset + 2, value & 255);
        return offset + 3;
    }
};
exports2.UINT32_LE = {
    len: 4,
    get (array3, offset) {
        return dv(array3).getUint32(offset, true);
    },
    put (array3, offset, value) {
        dv(array3).setUint32(offset, value, true);
        return offset + 4;
    }
};
exports2.UINT32_BE = {
    len: 4,
    get (array3, offset) {
        return dv(array3).getUint32(offset);
    },
    put (array3, offset, value) {
        dv(array3).setUint32(offset, value);
        return offset + 4;
    }
};
exports2.INT8 = {
    len: 1,
    get (array3, offset) {
        return dv(array3).getInt8(offset);
    },
    put (array3, offset, value) {
        dv(array3).setInt8(offset, value);
        return offset + 1;
    }
};
exports2.INT16_BE = {
    len: 2,
    get (array3, offset) {
        return dv(array3).getInt16(offset);
    },
    put (array3, offset, value) {
        dv(array3).setInt16(offset, value);
        return offset + 2;
    }
};
exports2.INT16_LE = {
    len: 2,
    get (array3, offset) {
        return dv(array3).getInt16(offset, true);
    },
    put (array3, offset, value) {
        dv(array3).setInt16(offset, value, true);
        return offset + 2;
    }
};
exports2.INT24_LE = {
    len: 3,
    get (array3, offset) {
        const unsigned = exports2.UINT24_LE.get(array3, offset);
        return unsigned > 8388607 ? unsigned - 16777216 : unsigned;
    },
    put (array3, offset, value) {
        const dataView = dv(array3);
        dataView.setUint8(offset, value & 255);
        dataView.setUint16(offset + 1, value >> 8, true);
        return offset + 3;
    }
};
exports2.INT24_BE = {
    len: 3,
    get (array3, offset) {
        const unsigned = exports2.UINT24_BE.get(array3, offset);
        return unsigned > 8388607 ? unsigned - 16777216 : unsigned;
    },
    put (array3, offset, value) {
        const dataView = dv(array3);
        dataView.setUint16(offset, value >> 8);
        dataView.setUint8(offset + 2, value & 255);
        return offset + 3;
    }
};
exports2.INT32_BE = {
    len: 4,
    get (array3, offset) {
        return dv(array3).getInt32(offset);
    },
    put (array3, offset, value) {
        dv(array3).setInt32(offset, value);
        return offset + 4;
    }
};
exports2.INT32_LE = {
    len: 4,
    get (array3, offset) {
        return dv(array3).getInt32(offset, true);
    },
    put (array3, offset, value) {
        dv(array3).setInt32(offset, value, true);
        return offset + 4;
    }
};
exports2.UINT64_LE = {
    len: 8,
    get (array3, offset) {
        return dv(array3).getBigUint64(offset, true);
    },
    put (array3, offset, value) {
        dv(array3).setBigUint64(offset, value, true);
        return offset + 8;
    }
};
exports2.INT64_LE = {
    len: 8,
    get (array3, offset) {
        return dv(array3).getBigInt64(offset, true);
    },
    put (array3, offset, value) {
        dv(array3).setBigInt64(offset, value, true);
        return offset + 8;
    }
};
exports2.UINT64_BE = {
    len: 8,
    get (array3, offset) {
        return dv(array3).getBigUint64(offset);
    },
    put (array3, offset, value) {
        dv(array3).setBigUint64(offset, value);
        return offset + 8;
    }
};
exports2.INT64_BE = {
    len: 8,
    get (array3, offset) {
        return dv(array3).getBigInt64(offset);
    },
    put (array3, offset, value) {
        dv(array3).setBigInt64(offset, value);
        return offset + 8;
    }
};
exports2.Float16_BE = {
    len: 2,
    get (dataView, offset) {
        return ieee754.read(dataView, offset, false, 10, this.len);
    },
    put (dataView, offset, value) {
        ieee754.write(dataView, value, offset, false, 10, this.len);
        return offset + this.len;
    }
};
exports2.Float16_LE = {
    len: 2,
    get (array3, offset) {
        return ieee754.read(array3, offset, true, 10, this.len);
    },
    put (array3, offset, value) {
        ieee754.write(array3, value, offset, true, 10, this.len);
        return offset + this.len;
    }
};
exports2.Float32_BE = {
    len: 4,
    get (array3, offset) {
        return dv(array3).getFloat32(offset);
    },
    put (array3, offset, value) {
        dv(array3).setFloat32(offset, value);
        return offset + 4;
    }
};
exports2.Float32_LE = {
    len: 4,
    get (array3, offset) {
        return dv(array3).getFloat32(offset, true);
    },
    put (array3, offset, value) {
        dv(array3).setFloat32(offset, value, true);
        return offset + 4;
    }
};
exports2.Float64_BE = {
    len: 8,
    get (array3, offset) {
        return dv(array3).getFloat64(offset);
    },
    put (array3, offset, value) {
        dv(array3).setFloat64(offset, value);
        return offset + 8;
    }
};
exports2.Float64_LE = {
    len: 8,
    get (array3, offset) {
        return dv(array3).getFloat64(offset, true);
    },
    put (array3, offset, value) {
        dv(array3).setFloat64(offset, value, true);
        return offset + 8;
    }
};
exports2.Float80_BE = {
    len: 10,
    get (array3, offset) {
        return ieee754.read(array3, offset, false, 63, this.len);
    },
    put (array3, offset, value) {
        ieee754.write(array3, value, offset, false, 63, this.len);
        return offset + this.len;
    }
};
exports2.Float80_LE = {
    len: 10,
    get (array3, offset) {
        return ieee754.read(array3, offset, true, 63, this.len);
    },
    put (array3, offset, value) {
        ieee754.write(array3, value, offset, true, 63, this.len);
        return offset + this.len;
    }
};
var IgnoreType = class {
    constructor(len){
        this.len = len;
    }
    get(array3, off) {}
};
exports2.IgnoreType = IgnoreType;
var Uint8ArrayType = class {
    constructor(len){
        this.len = len;
    }
    get(array3, offset) {
        return array3.subarray(offset, offset + this.len);
    }
};
exports2.Uint8ArrayType = Uint8ArrayType;
var BufferType = class {
    constructor(len){
        this.len = len;
    }
    get(uint8Array, off) {
        return Buffer.from(uint8Array.subarray(off, off + this.len));
    }
};
exports2.BufferType = BufferType;
var StringType = class {
    constructor(len, encoding){
        this.len = len;
        this.encoding = encoding;
    }
    get(uint8Array, offset) {
        return Buffer.from(uint8Array).toString(this.encoding, offset, offset + this.len);
    }
};
exports2.StringType = StringType;
var AnsiStringType = class _AnsiStringType {
    constructor(len){
        this.len = len;
    }
    static decode(buffer, offset, until) {
        let str3 = "";
        for(let i = offset; i < until; ++i){
            str3 += _AnsiStringType.codePointToString(_AnsiStringType.singleByteDecoder(buffer[i]));
        }
        return str3;
    }
    static inRange(a, min, max) {
        return min <= a && a <= max;
    }
    static codePointToString(cp2) {
        if (cp2 <= 65535) {
            return String.fromCharCode(cp2);
        } else {
            cp2 -= 65536;
            return String.fromCharCode((cp2 >> 10) + 55296, (cp2 & 1023) + 56320);
        }
    }
    static singleByteDecoder(bite) {
        if (_AnsiStringType.inRange(bite, 0, 127)) {
            return bite;
        }
        const codePoint = _AnsiStringType.windows1252[bite - 128];
        if (codePoint === null) {
            throw Error("invaliding encoding");
        }
        return codePoint;
    }
    get(buffer, offset = 0) {
        return _AnsiStringType.decode(buffer, offset, offset + this.len);
    }
};
exports2.AnsiStringType = AnsiStringType;
AnsiStringType.windows1252 = [
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

return exports2;
}
