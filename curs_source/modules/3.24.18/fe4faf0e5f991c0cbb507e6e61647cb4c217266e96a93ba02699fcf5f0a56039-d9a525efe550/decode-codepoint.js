import { i } from "./plugin-brand-icon.js";
function oar(r) {
    var e;
    return r >= 55296 && r <= 57343 || r > 1114111 ? 65533 : (e = sar.get(r)) !== null && e !== void 0 ? e : r;
}
var RNt, sar, yvi;
export { RNt, oar, sar, yvi };
var __wakaru_car_initialized = false;
export function car() {
if (__wakaru_car_initialized) return;
__wakaru_car_initialized = true;
sar = new Map([
    [
        0,
        65533
    ],
    [
        128,
        8364
    ],
    [
        130,
        8218
    ],
    [
        131,
        402
    ],
    [
        132,
        8222
    ],
    [
        133,
        8230
    ],
    [
        134,
        8224
    ],
    [
        135,
        8225
    ],
    [
        136,
        710
    ],
    [
        137,
        8240
    ],
    [
        138,
        352
    ],
    [
        139,
        8249
    ],
    [
        140,
        338
    ],
    [
        142,
        381
    ],
    [
        145,
        8216
    ],
    [
        146,
        8217
    ],
    [
        147,
        8220
    ],
    [
        148,
        8221
    ],
    [
        149,
        8226
    ],
    [
        150,
        8211
    ],
    [
        151,
        8212
    ],
    [
        152,
        732
    ],
    [
        153,
        8482
    ],
    [
        154,
        353
    ],
    [
        155,
        8250
    ],
    [
        156,
        339
    ],
    [
        158,
        382
    ],
    [
        159,
        376
    ]
]), yvi = (RNt = String.fromCodePoint) !== null && RNt !== void 0 ? RNt : function(r) {
    let e = "";
    return r > 65535 && (r -= 65536, e += String.fromCharCode(r >>> 10 & 1023 | 55296), r = 56320 | r & 1023), e += String.fromCharCode(r), e;
}, i(oar, "replaceCodePoint");

}
