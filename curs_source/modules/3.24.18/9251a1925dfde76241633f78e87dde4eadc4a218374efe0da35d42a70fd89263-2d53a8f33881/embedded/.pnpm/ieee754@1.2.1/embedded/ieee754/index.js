var __wakaru_require_ieee754_cache;
export function require_ieee754() {
if (__wakaru_require_ieee754_cache) return __wakaru_require_ieee754_cache;
var exports2 = {};
__wakaru_require_ieee754_cache = exports2;
exports2.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m2;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s3 = buffer[offset + i];
    i += d;
    e = s3 & (1 << -nBits) - 1;
    s3 >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8){}
    m2 = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m2 = m2 * 256 + buffer[offset + i], i += d, nBits -= 8){}
    if (e === 0) {
        e = 1 - eBias;
    } else if (e === eMax) {
        return m2 ? NaN : (s3 ? -1 : 1) * Infinity;
    } else {
        m2 = m2 + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s3 ? -1 : 1) * m2 * Math.pow(2, e - mLen);
};
exports2.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m2, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt2 = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s3 = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m2 = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) {
            value += rt2 / c;
        } else {
            value += rt2 * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m2 = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m2 = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m2 = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m2 & 255, i += d, m2 /= 256, mLen -= 8){}
    e = e << mLen | m2;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8){}
    buffer[offset + i - d] |= s3 * 128;
};

return exports2;
}
