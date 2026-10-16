import { require_pako } from "../../../pako@1.0.11/node_modules/pako/index.js";
var __wakaru_require_UTIF_cache;
export function require_UTIF() {
if (__wakaru_require_UTIF_cache) return __wakaru_require_UTIF_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_UTIF_cache = module2;
(function() {
    var UTIF = {};
    if (typeof module2 == "object") {
        module2.exports = UTIF;
    } else {
        self.UTIF = UTIF;
    }
    var pako = typeof require === "function" ? require_pako() : self.pako;
    function log5() {
        if (typeof process == "undefined" || process.env.NODE_ENV == "development") console.log.apply(console, arguments);
    }
    (function(UTIF2, pako2) {
        (function() {
            "use strict";
            var W2 = (function a1() {
                function W3(p2) {
                    this.message = "JPEG error: " + p2;
                }
                W3.prototype = new Error();
                W3.prototype.name = "JpegError";
                W3.constructor = W3;
                return W3;
            })(), ak = (function ag() {
                var p2 = new Uint8Array([
                    0,
                    1,
                    8,
                    16,
                    9,
                    2,
                    3,
                    10,
                    17,
                    24,
                    32,
                    25,
                    18,
                    11,
                    4,
                    5,
                    12,
                    19,
                    26,
                    33,
                    40,
                    48,
                    41,
                    34,
                    27,
                    20,
                    13,
                    6,
                    7,
                    14,
                    21,
                    28,
                    35,
                    42,
                    49,
                    56,
                    57,
                    50,
                    43,
                    36,
                    29,
                    22,
                    15,
                    23,
                    30,
                    37,
                    44,
                    51,
                    58,
                    59,
                    52,
                    45,
                    38,
                    31,
                    39,
                    46,
                    53,
                    60,
                    61,
                    54,
                    47,
                    55,
                    62,
                    63
                ]), t = 4017, ac = 799, ah = 3406, ao2 = 2276, ar2 = 1567, ai2 = 3784, s3 = 5793, ad = 2896;
                function ak2(Q2) {
                    if (Q2 == null) Q2 = {};
                    if (Q2.w == null) Q2.w = -1;
                    this.V = Q2.n;
                    this.N = Q2.w;
                }
                function a5(Q2, h) {
                    var f2 = 0, G2 = [], n, E, a = 16, F2;
                    while(a > 0 && !Q2[a - 1]){
                        a--;
                    }
                    G2.push({
                        children: [],
                        index: 0
                    });
                    var C2 = G2[0];
                    for(n = 0; n < a; n++){
                        for(E = 0; E < Q2[n]; E++){
                            C2 = G2.pop();
                            C2.children[C2.index] = h[f2];
                            while(C2.index > 0){
                                C2 = G2.pop();
                            }
                            C2.index++;
                            G2.push(C2);
                            while(G2.length <= n){
                                G2.push(F2 = {
                                    children: [],
                                    index: 0
                                });
                                C2.children[C2.index] = F2.children;
                                C2 = F2;
                            }
                            f2++;
                        }
                        if (n + 1 < a) {
                            G2.push(F2 = {
                                children: [],
                                index: 0
                            });
                            C2.children[C2.index] = F2.children;
                            C2 = F2;
                        }
                    }
                    return G2[0].children;
                }
                function a2(Q2, h, f2) {
                    return 64 * ((Q2.P + 1) * h + f2);
                }
                function a7(Q2, h, f2, G2, n, E, a, C2, F2, d) {
                    if (d == null) d = false;
                    var T = f2.m, U2 = f2.Z, z2 = h, J2 = 0, V2 = 0, r = 0, D = 0, a8, q2 = 0, X2, O2, _2, N2, e, K2, x = 0, k2, g2, R2, c;
                    function Y2() {
                        if (V2 > 0) {
                            V2--;
                            return J2 >> V2 & 1;
                        }
                        J2 = Q2[h++];
                        if (J2 === 255) {
                            var I2 = Q2[h++];
                            if (I2) {
                                if (I2 === 220 && d) {
                                    h += 2;
                                    var l = Z2(Q2, h);
                                    h += 2;
                                    if (l > 0 && l !== f2.s) {
                                        throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data", l);
                                    }
                                } else if (I2 === 217) {
                                    if (d) {
                                        var M2 = q2 * 8;
                                        if (M2 > 0 && M2 < f2.s / 10) {
                                            throw new DNLMarkerError("Found EOI marker (0xFFD9) while parsing scan data, possibly caused by incorrect `scanLines` parameter", M2);
                                        }
                                    }
                                    throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data");
                                }
                                throw new W2("unexpected marker");
                            }
                        }
                        V2 = 7;
                        return J2 >>> 7;
                    }
                    function u2(I2) {
                        var l = I2;
                        while(true){
                            l = l[Y2()];
                            switch(typeof l){
                                case "number":
                                    return l;
                                case "object":
                                    continue;
                            }
                            throw new W2("invalid huffman sequence");
                        }
                    }
                    function m2(I2) {
                        var e2 = 0;
                        while(I2 > 0){
                            e2 = e2 << 1 | Y2();
                            I2--;
                        }
                        return e2;
                    }
                    function j2(I2) {
                        if (I2 === 1) {
                            return Y2() === 1 ? 1 : -1;
                        }
                        var e2 = m2(I2);
                        if (e2 >= 1 << I2 - 1) {
                            return e2;
                        }
                        return e2 + (-1 << I2) + 1;
                    }
                    function v2(X3, I2) {
                        var l = u2(X3.J), M2 = l === 0 ? 0 : j2(l), N3 = 1;
                        X3.D[I2] = X3.Q += M2;
                        while(N3 < 64){
                            var S2 = u2(X3.i), i = S2 & 15, A2 = S2 >> 4;
                            if (i === 0) {
                                if (A2 < 15) {
                                    break;
                                }
                                N3 += 16;
                                continue;
                            }
                            N3 += A2;
                            var o = p2[N3];
                            X3.D[I2 + o] = j2(i);
                            N3++;
                        }
                    }
                    function $2(X3, I2) {
                        var l = u2(X3.J), M2 = l === 0 ? 0 : j2(l) << F2;
                        X3.D[I2] = X3.Q += M2;
                    }
                    function b2(X3, I2) {
                        X3.D[I2] |= Y2() << F2;
                    }
                    function P2(X3, I2) {
                        if (r > 0) {
                            r--;
                            return;
                        }
                        var N3 = E, l = a;
                        while(N3 <= l){
                            var M2 = u2(X3.i), S2 = M2 & 15, i = M2 >> 4;
                            if (S2 === 0) {
                                if (i < 15) {
                                    r = m2(i) + (1 << i) - 1;
                                    break;
                                }
                                N3 += 16;
                                continue;
                            }
                            N3 += i;
                            var A2 = p2[N3];
                            X3.D[I2 + A2] = j2(S2) * (1 << F2);
                            N3++;
                        }
                    }
                    function a4(X3, I2) {
                        var N3 = E, l = a, M2 = 0, S2, i;
                        while(N3 <= l){
                            var A2 = I2 + p2[N3], o = X3.D[A2] < 0 ? -1 : 1;
                            switch(D){
                                case 0:
                                    i = u2(X3.i);
                                    S2 = i & 15;
                                    M2 = i >> 4;
                                    if (S2 === 0) {
                                        if (M2 < 15) {
                                            r = m2(M2) + (1 << M2);
                                            D = 4;
                                        } else {
                                            M2 = 16;
                                            D = 1;
                                        }
                                    } else {
                                        if (S2 !== 1) {
                                            throw new W2("invalid ACn encoding");
                                        }
                                        a8 = j2(S2);
                                        D = M2 ? 2 : 3;
                                    }
                                    continue;
                                case 1:
                                case 2:
                                    if (X3.D[A2]) {
                                        X3.D[A2] += o * (Y2() << F2);
                                    } else {
                                        M2--;
                                        if (M2 === 0) {
                                            D = D === 2 ? 3 : 0;
                                        }
                                    }
                                    break;
                                case 3:
                                    if (X3.D[A2]) {
                                        X3.D[A2] += o * (Y2() << F2);
                                    } else {
                                        X3.D[A2] = a8 << F2;
                                        D = 0;
                                    }
                                    break;
                                case 4:
                                    if (X3.D[A2]) {
                                        X3.D[A2] += o * (Y2() << F2);
                                    }
                                    break;
                            }
                            N3++;
                        }
                        if (D === 4) {
                            r--;
                            if (r === 0) {
                                D = 0;
                            }
                        }
                    }
                    function H2(X3, I2, x2, l, M2) {
                        var S2 = x2 / T | 0, i = x2 % T;
                        q2 = S2 * X3.A + l;
                        var A2 = i * X3.h + M2, o = a2(X3, q2, A2);
                        I2(X3, o);
                    }
                    function w2(X3, I2, x2) {
                        q2 = x2 / X3.P | 0;
                        var l = x2 % X3.P, M2 = a2(X3, q2, l);
                        I2(X3, M2);
                    }
                    var y = G2.length;
                    if (U2) {
                        if (E === 0) {
                            K2 = C2 === 0 ? $2 : b2;
                        } else {
                            K2 = C2 === 0 ? P2 : a4;
                        }
                    } else {
                        K2 = v2;
                    }
                    if (y === 1) {
                        g2 = G2[0].P * G2[0].c;
                    } else {
                        g2 = T * f2.R;
                    }
                    while(x <= g2){
                        var L2 = n ? Math.min(g2 - x, n) : g2;
                        if (L2 > 0) {
                            for(O2 = 0; O2 < y; O2++){
                                G2[O2].Q = 0;
                            }
                            r = 0;
                            if (y === 1) {
                                X2 = G2[0];
                                for(e = 0; e < L2; e++){
                                    w2(X2, K2, x);
                                    x++;
                                }
                            } else {
                                for(e = 0; e < L2; e++){
                                    for(O2 = 0; O2 < y; O2++){
                                        X2 = G2[O2];
                                        R2 = X2.h;
                                        c = X2.A;
                                        for(_2 = 0; _2 < c; _2++){
                                            for(N2 = 0; N2 < R2; N2++){
                                                H2(X2, K2, x, _2, N2);
                                            }
                                        }
                                    }
                                    x++;
                                }
                            }
                        }
                        V2 = 0;
                        k2 = an2(Q2, h);
                        if (!k2) {
                            break;
                        }
                        if (k2.u) {
                            var a6 = L2 > 0 ? "unexpected" : "excessive";
                            h = k2.offset;
                        }
                        if (k2.M >= 65488 && k2.M <= 65495) {
                            h += 2;
                        } else {
                            break;
                        }
                    }
                    return h - z2;
                }
                function al(Q2, h, f2) {
                    var G2 = Q2.$, n = Q2.D, E, a, C2, F2, d, T, U2, z2, J2, V2, Y2, u2, m2, j2, v2, $2, b2;
                    if (!G2) {
                        throw new W2("missing required Quantization Table.");
                    }
                    for(var r = 0; r < 64; r += 8){
                        J2 = n[h + r];
                        V2 = n[h + r + 1];
                        Y2 = n[h + r + 2];
                        u2 = n[h + r + 3];
                        m2 = n[h + r + 4];
                        j2 = n[h + r + 5];
                        v2 = n[h + r + 6];
                        $2 = n[h + r + 7];
                        J2 *= G2[r];
                        if ((V2 | Y2 | u2 | m2 | j2 | v2 | $2) === 0) {
                            b2 = s3 * J2 + 512 >> 10;
                            f2[r] = b2;
                            f2[r + 1] = b2;
                            f2[r + 2] = b2;
                            f2[r + 3] = b2;
                            f2[r + 4] = b2;
                            f2[r + 5] = b2;
                            f2[r + 6] = b2;
                            f2[r + 7] = b2;
                            continue;
                        }
                        V2 *= G2[r + 1];
                        Y2 *= G2[r + 2];
                        u2 *= G2[r + 3];
                        m2 *= G2[r + 4];
                        j2 *= G2[r + 5];
                        v2 *= G2[r + 6];
                        $2 *= G2[r + 7];
                        E = s3 * J2 + 128 >> 8;
                        a = s3 * m2 + 128 >> 8;
                        C2 = Y2;
                        F2 = v2;
                        d = ad * (V2 - $2) + 128 >> 8;
                        z2 = ad * (V2 + $2) + 128 >> 8;
                        T = u2 << 4;
                        U2 = j2 << 4;
                        E = E + a + 1 >> 1;
                        a = E - a;
                        b2 = C2 * ai2 + F2 * ar2 + 128 >> 8;
                        C2 = C2 * ar2 - F2 * ai2 + 128 >> 8;
                        F2 = b2;
                        d = d + U2 + 1 >> 1;
                        U2 = d - U2;
                        z2 = z2 + T + 1 >> 1;
                        T = z2 - T;
                        E = E + F2 + 1 >> 1;
                        F2 = E - F2;
                        a = a + C2 + 1 >> 1;
                        C2 = a - C2;
                        b2 = d * ao2 + z2 * ah + 2048 >> 12;
                        d = d * ah - z2 * ao2 + 2048 >> 12;
                        z2 = b2;
                        b2 = T * ac + U2 * t + 2048 >> 12;
                        T = T * t - U2 * ac + 2048 >> 12;
                        U2 = b2;
                        f2[r] = E + z2;
                        f2[r + 7] = E - z2;
                        f2[r + 1] = a + U2;
                        f2[r + 6] = a - U2;
                        f2[r + 2] = C2 + T;
                        f2[r + 5] = C2 - T;
                        f2[r + 3] = F2 + d;
                        f2[r + 4] = F2 - d;
                    }
                    for(var P2 = 0; P2 < 8; ++P2){
                        J2 = f2[P2];
                        V2 = f2[P2 + 8];
                        Y2 = f2[P2 + 16];
                        u2 = f2[P2 + 24];
                        m2 = f2[P2 + 32];
                        j2 = f2[P2 + 40];
                        v2 = f2[P2 + 48];
                        $2 = f2[P2 + 56];
                        if ((V2 | Y2 | u2 | m2 | j2 | v2 | $2) === 0) {
                            b2 = s3 * J2 + 8192 >> 14;
                            if (b2 < -2040) {
                                b2 = 0;
                            } else if (b2 >= 2024) {
                                b2 = 255;
                            } else {
                                b2 = b2 + 2056 >> 4;
                            }
                            n[h + P2] = b2;
                            n[h + P2 + 8] = b2;
                            n[h + P2 + 16] = b2;
                            n[h + P2 + 24] = b2;
                            n[h + P2 + 32] = b2;
                            n[h + P2 + 40] = b2;
                            n[h + P2 + 48] = b2;
                            n[h + P2 + 56] = b2;
                            continue;
                        }
                        E = s3 * J2 + 2048 >> 12;
                        a = s3 * m2 + 2048 >> 12;
                        C2 = Y2;
                        F2 = v2;
                        d = ad * (V2 - $2) + 2048 >> 12;
                        z2 = ad * (V2 + $2) + 2048 >> 12;
                        T = u2;
                        U2 = j2;
                        E = (E + a + 1 >> 1) + 4112;
                        a = E - a;
                        b2 = C2 * ai2 + F2 * ar2 + 2048 >> 12;
                        C2 = C2 * ar2 - F2 * ai2 + 2048 >> 12;
                        F2 = b2;
                        d = d + U2 + 1 >> 1;
                        U2 = d - U2;
                        z2 = z2 + T + 1 >> 1;
                        T = z2 - T;
                        E = E + F2 + 1 >> 1;
                        F2 = E - F2;
                        a = a + C2 + 1 >> 1;
                        C2 = a - C2;
                        b2 = d * ao2 + z2 * ah + 2048 >> 12;
                        d = d * ah - z2 * ao2 + 2048 >> 12;
                        z2 = b2;
                        b2 = T * ac + U2 * t + 2048 >> 12;
                        T = T * t - U2 * ac + 2048 >> 12;
                        U2 = b2;
                        J2 = E + z2;
                        $2 = E - z2;
                        V2 = a + U2;
                        v2 = a - U2;
                        Y2 = C2 + T;
                        j2 = C2 - T;
                        u2 = F2 + d;
                        m2 = F2 - d;
                        if (J2 < 16) {
                            J2 = 0;
                        } else if (J2 >= 4080) {
                            J2 = 255;
                        } else {
                            J2 >>= 4;
                        }
                        if (V2 < 16) {
                            V2 = 0;
                        } else if (V2 >= 4080) {
                            V2 = 255;
                        } else {
                            V2 >>= 4;
                        }
                        if (Y2 < 16) {
                            Y2 = 0;
                        } else if (Y2 >= 4080) {
                            Y2 = 255;
                        } else {
                            Y2 >>= 4;
                        }
                        if (u2 < 16) {
                            u2 = 0;
                        } else if (u2 >= 4080) {
                            u2 = 255;
                        } else {
                            u2 >>= 4;
                        }
                        if (m2 < 16) {
                            m2 = 0;
                        } else if (m2 >= 4080) {
                            m2 = 255;
                        } else {
                            m2 >>= 4;
                        }
                        if (j2 < 16) {
                            j2 = 0;
                        } else if (j2 >= 4080) {
                            j2 = 255;
                        } else {
                            j2 >>= 4;
                        }
                        if (v2 < 16) {
                            v2 = 0;
                        } else if (v2 >= 4080) {
                            v2 = 255;
                        } else {
                            v2 >>= 4;
                        }
                        if ($2 < 16) {
                            $2 = 0;
                        } else if ($2 >= 4080) {
                            $2 = 255;
                        } else {
                            $2 >>= 4;
                        }
                        n[h + P2] = J2;
                        n[h + P2 + 8] = V2;
                        n[h + P2 + 16] = Y2;
                        n[h + P2 + 24] = u2;
                        n[h + P2 + 32] = m2;
                        n[h + P2 + 40] = j2;
                        n[h + P2 + 48] = v2;
                        n[h + P2 + 56] = $2;
                    }
                }
                function a0(Q2, h) {
                    var f2 = h.P, G2 = h.c, n = new Int16Array(64);
                    for(var E = 0; E < G2; E++){
                        for(var a = 0; a < f2; a++){
                            var C2 = a2(h, E, a);
                            al(h, C2, n);
                        }
                    }
                    return h.D;
                }
                function an2(Q2, h, f2) {
                    if (f2 == null) f2 = h;
                    var G2 = Q2.length - 1, n = f2 < h ? f2 : h;
                    if (h >= G2) {
                        return null;
                    }
                    var E = Z2(Q2, h);
                    if (E >= 65472 && E <= 65534) {
                        return {
                            u: null,
                            M: E,
                            offset: h
                        };
                    }
                    var a = Z2(Q2, n);
                    while(!(a >= 65472 && a <= 65534)){
                        if (++n >= G2) {
                            return null;
                        }
                        a = Z2(Q2, n);
                    }
                    return {
                        u: E.toString(16),
                        M: a,
                        offset: n
                    };
                }
                ak2.prototype = {
                    parse (Q2, h) {
                        if (h == null) h = {};
                        var f2 = h.F, E = 0, a = null, C2 = null, F2, d, T = 0;
                        function G2() {
                            var o = Z2(Q2, E);
                            E += 2;
                            var B2 = E + o - 2, V3 = an2(Q2, B2, E);
                            if (V3 && V3.u) {
                                B2 = V3.offset;
                            }
                            var ab = Q2.subarray(E, B2);
                            E += ab.length;
                            return ab;
                        }
                        function n(F3) {
                            var o = Math.ceil(F3.o / 8 / F3.X), B2 = Math.ceil(F3.s / 8 / F3.B);
                            for(var Y3 = 0; Y3 < F3.W.length; Y3++){
                                R2 = F3.W[Y3];
                                var ab = Math.ceil(Math.ceil(F3.o / 8) * R2.h / F3.X), af = Math.ceil(Math.ceil(F3.s / 8) * R2.A / F3.B), ap = o * R2.h, aq = B2 * R2.A, ae2 = 64 * aq * (ap + 1);
                                R2.D = new Int16Array(ae2);
                                R2.P = ab;
                                R2.c = af;
                            }
                            F3.m = o;
                            F3.R = B2;
                        }
                        var U2 = [], z2 = [], J2 = [], V2 = Z2(Q2, E);
                        E += 2;
                        if (V2 !== 65496) {
                            throw new W2("SOI not found");
                        }
                        V2 = Z2(Q2, E);
                        E += 2;
                        markerLoop: while(V2 !== 65497){
                            var Y2, u2, m2;
                            switch(V2){
                                case 65504:
                                case 65505:
                                case 65506:
                                case 65507:
                                case 65508:
                                case 65509:
                                case 65510:
                                case 65511:
                                case 65512:
                                case 65513:
                                case 65514:
                                case 65515:
                                case 65516:
                                case 65517:
                                case 65518:
                                case 65519:
                                case 65534:
                                    var j2 = G2();
                                    if (V2 === 65504) {
                                        if (j2[0] === 74 && j2[1] === 70 && j2[2] === 73 && j2[3] === 70 && j2[4] === 0) {
                                            a = {
                                                version: {
                                                    d: j2[5],
                                                    T: j2[6]
                                                },
                                                K: j2[7],
                                                j: j2[8] << 8 | j2[9],
                                                H: j2[10] << 8 | j2[11],
                                                S: j2[12],
                                                I: j2[13],
                                                C: j2.subarray(14, 14 + 3 * j2[12] * j2[13])
                                            };
                                        }
                                    }
                                    if (V2 === 65518) {
                                        if (j2[0] === 65 && j2[1] === 100 && j2[2] === 111 && j2[3] === 98 && j2[4] === 101) {
                                            C2 = {
                                                version: j2[5] << 8 | j2[6],
                                                k: j2[7] << 8 | j2[8],
                                                q: j2[9] << 8 | j2[10],
                                                a: j2[11]
                                            };
                                        }
                                    }
                                    break;
                                case 65499:
                                    var v2 = Z2(Q2, E), b2;
                                    E += 2;
                                    var $2 = v2 + E - 2;
                                    while(E < $2){
                                        var r = Q2[E++], P2 = new Uint16Array(64);
                                        if (r >> 4 === 0) {
                                            for(u2 = 0; u2 < 64; u2++){
                                                b2 = p2[u2];
                                                P2[b2] = Q2[E++];
                                            }
                                        } else if (r >> 4 === 1) {
                                            for(u2 = 0; u2 < 64; u2++){
                                                b2 = p2[u2];
                                                P2[b2] = Z2(Q2, E);
                                                E += 2;
                                            }
                                        } else {
                                            throw new W2("DQT - invalid table spec");
                                        }
                                        U2[r & 15] = P2;
                                    }
                                    break;
                                case 65472:
                                case 65473:
                                case 65474:
                                    if (F2) {
                                        throw new W2("Only single frame JPEGs supported");
                                    }
                                    E += 2;
                                    F2 = {};
                                    F2.G = V2 === 65473;
                                    F2.Z = V2 === 65474;
                                    F2.precision = Q2[E++];
                                    var D = Z2(Q2, E), a4, q2 = 0, H2 = 0;
                                    E += 2;
                                    F2.s = f2 || D;
                                    F2.o = Z2(Q2, E);
                                    E += 2;
                                    F2.W = [];
                                    F2._ = {};
                                    var a8 = Q2[E++];
                                    for(Y2 = 0; Y2 < a8; Y2++){
                                        a4 = Q2[E];
                                        var w2 = Q2[E + 1] >> 4, y = Q2[E + 1] & 15;
                                        if (q2 < w2) {
                                            q2 = w2;
                                        }
                                        if (H2 < y) {
                                            H2 = y;
                                        }
                                        var X2 = Q2[E + 2];
                                        m2 = F2.W.push({
                                            h: w2,
                                            A: y,
                                            L: X2,
                                            $: null
                                        });
                                        F2._[a4] = m2 - 1;
                                        E += 3;
                                    }
                                    F2.X = q2;
                                    F2.B = H2;
                                    n(F2);
                                    break;
                                case 65476:
                                    var O2 = Z2(Q2, E);
                                    E += 2;
                                    for(Y2 = 2; Y2 < O2;){
                                        var _2 = Q2[E++], N2 = new Uint8Array(16), e = 0;
                                        for(u2 = 0; u2 < 16; u2++, E++){
                                            e += N2[u2] = Q2[E];
                                        }
                                        var K2 = new Uint8Array(e);
                                        for(u2 = 0; u2 < e; u2++, E++){
                                            K2[u2] = Q2[E];
                                        }
                                        Y2 += 17 + e;
                                        (_2 >> 4 === 0 ? J2 : z2)[_2 & 15] = a5(N2, K2);
                                    }
                                    break;
                                case 65501:
                                    E += 2;
                                    d = Z2(Q2, E);
                                    E += 2;
                                    break;
                                case 65498:
                                    var x = ++T === 1 && !f2, R2;
                                    E += 2;
                                    var k2 = Q2[E++], g2 = [];
                                    for(Y2 = 0; Y2 < k2; Y2++){
                                        var c = Q2[E++], L2 = F2._[c];
                                        R2 = F2.W[L2];
                                        R2.index = c;
                                        var a6 = Q2[E++];
                                        R2.J = J2[a6 >> 4];
                                        R2.i = z2[a6 & 15];
                                        g2.push(R2);
                                    }
                                    var I2 = Q2[E++], l = Q2[E++], M2 = Q2[E++];
                                    try {
                                        var S2 = a7(Q2, E, F2, g2, d, I2, l, M2 >> 4, M2 & 15, x);
                                        E += S2;
                                    } catch (ex) {
                                        if (ex instanceof DNLMarkerError) {
                                            return this.parse(Q2, {
                                                F: ex.s
                                            });
                                        } else if (ex instanceof EOIMarkerError) {
                                            break markerLoop;
                                        }
                                        throw ex;
                                    }
                                    break;
                                case 65500:
                                    E += 4;
                                    break;
                                case 65535:
                                    if (Q2[E] !== 255) {
                                        E--;
                                    }
                                    break;
                                default:
                                    var i = an2(Q2, E - 2, E - 3);
                                    if (i && i.u) {
                                        E = i.offset;
                                        break;
                                    }
                                    if (E >= Q2.length - 1) {
                                        break markerLoop;
                                    }
                                    throw new W2("JpegImage.parse - unknown marker: " + V2.toString(16));
                            }
                            V2 = Z2(Q2, E);
                            E += 2;
                        }
                        this.width = F2.o;
                        this.height = F2.s;
                        this.g = a;
                        this.b = C2;
                        this.W = [];
                        for(Y2 = 0; Y2 < F2.W.length; Y2++){
                            R2 = F2.W[Y2];
                            var A2 = U2[R2.L];
                            if (A2) {
                                R2.$ = A2;
                            }
                            this.W.push({
                                index: R2.index,
                                e: a0(F2, R2),
                                l: R2.h / F2.X,
                                t: R2.A / F2.B,
                                P: R2.P,
                                c: R2.c
                            });
                        }
                        this.p = this.W.length;
                        return void 0;
                    },
                    Y (Q2, h, f2) {
                        if (f2 == null) f2 = false;
                        var G2 = this.width / Q2, n = this.height / h, E, a, C2, F2, d, T, U2, z2, J2, V2, Y2 = 0, u2, m2 = this.W.length, j2 = Q2 * h * m2, v2 = new Uint8ClampedArray(j2), $2 = new Uint32Array(Q2), b2 = 4294967288, r;
                        for(U2 = 0; U2 < m2; U2++){
                            E = this.W[U2];
                            a = E.l * G2;
                            C2 = E.t * n;
                            Y2 = U2;
                            u2 = E.e;
                            F2 = E.P + 1 << 3;
                            if (a !== r) {
                                for(d = 0; d < Q2; d++){
                                    z2 = 0 | d * a;
                                    $2[d] = (z2 & b2) << 3 | z2 & 7;
                                }
                                r = a;
                            }
                            for(T = 0; T < h; T++){
                                z2 = 0 | T * C2;
                                V2 = F2 * (z2 & b2) | (z2 & 7) << 3;
                                for(d = 0; d < Q2; d++){
                                    v2[Y2] = u2[V2 + $2[d]];
                                    Y2 += m2;
                                }
                            }
                        }
                        var P2 = this.V;
                        if (!f2 && m2 === 4 && !P2) {
                            P2 = new Int32Array([
                                -256,
                                255,
                                -256,
                                255,
                                -256,
                                255,
                                -256,
                                255
                            ]);
                        }
                        if (P2) {
                            for(U2 = 0; U2 < j2;){
                                for(z2 = 0, J2 = 0; z2 < m2; z2++, U2++, J2 += 2){
                                    v2[U2] = (v2[U2] * P2[J2] >> 8) + P2[J2 + 1];
                                }
                            }
                        }
                        return v2;
                    },
                    get f () {
                        if (this.b) {
                            return !!this.b.a;
                        }
                        if (this.p === 3) {
                            if (this.N === 0) {
                                return false;
                            } else if (this.W[0].index === 82 && this.W[1].index === 71 && this.W[2].index === 66) {
                                return false;
                            }
                            return true;
                        }
                        if (this.N === 1) {
                            return true;
                        }
                        return false;
                    },
                    z: function aj(Q2) {
                        var h, f2, G2;
                        for(var n = 0, E = Q2.length; n < E; n += 3){
                            h = Q2[n];
                            f2 = Q2[n + 1];
                            G2 = Q2[n + 2];
                            Q2[n] = h - 179.456 + 1.402 * G2;
                            Q2[n + 1] = h + 135.459 - 0.344 * f2 - 0.714 * G2;
                            Q2[n + 2] = h - 226.816 + 1.772 * f2;
                        }
                        return Q2;
                    },
                    O: function aa(Q2) {
                        var h, f2, G2, n, E = 0;
                        for(var a = 0, C2 = Q2.length; a < C2; a += 4){
                            h = Q2[a];
                            f2 = Q2[a + 1];
                            G2 = Q2[a + 2];
                            n = Q2[a + 3];
                            Q2[E++] = -122.67195406894 + f2 * (-660635669420364e-19 * f2 + 437130475926232e-18 * G2 - 54080610064599e-18 * h + 48449797120281e-17 * n - 0.154362151871126) + G2 * (-957964378445773e-18 * G2 + 817076911346625e-18 * h - 0.00477271405408747 * n + 1.53380253221734) + h * (961250184130688e-18 * h - 0.00266257332283933 * n + 0.48357088451265) + n * (-336197177618394e-18 * n + 0.484791561490776);
                            Q2[E++] = 107.268039397724 + f2 * (219927104525741e-19 * f2 - 640992018297945e-18 * G2 + 659397001245577e-18 * h + 426105652938837e-18 * n - 0.176491792462875) + G2 * (-778269941513683e-18 * G2 + 0.00130872261408275 * h + 770482631801132e-18 * n - 0.151051492775562) + h * (0.00126935368114843 * h - 0.00265090189010898 * n + 0.25802910206845) + n * (-318913117588328e-18 * n - 0.213742400323665);
                            Q2[E++] = -20.810012546947 + f2 * (-570115196973677e-18 * f2 - 263409051004589e-19 * G2 + 0.0020741088115012 * h - 0.00288260236853442 * n + 0.814272968359295) + G2 * (-153496057440975e-19 * G2 - 132689043961446e-18 * h + 560833691242812e-18 * n - 0.195152027534049) + h * (0.00174418132927582 * h - 0.00255243321439347 * n + 0.116935020465145) + n * (-343531996510555e-18 * n + 0.24165260232407);
                        }
                        return Q2.subarray(0, E);
                    },
                    r: function a3(Q2) {
                        var h, f2, G2;
                        for(var n = 0, E = Q2.length; n < E; n += 4){
                            h = Q2[n];
                            f2 = Q2[n + 1];
                            G2 = Q2[n + 2];
                            Q2[n] = 434.456 - h - 1.402 * G2;
                            Q2[n + 1] = 119.541 - h + 0.344 * f2 + 0.714 * G2;
                            Q2[n + 2] = 481.816 - h - 1.772 * f2;
                        }
                        return Q2;
                    },
                    U: function as2(Q2) {
                        var h, f2, G2, n, E = 0;
                        for(var a = 0, C2 = Q2.length; a < C2; a += 4){
                            h = Q2[a];
                            f2 = Q2[a + 1];
                            G2 = Q2[a + 2];
                            n = Q2[a + 3];
                            Q2[E++] = 255 + h * (-6747147073602441e-20 * h + 8379262121013727e-19 * f2 + 2894718188643294e-19 * G2 + 0.003264231057537806 * n - 1.1185611867203937) + f2 * (26374107616089405e-21 * f2 - 8626949158638572e-20 * G2 - 2748769067499491e-19 * n - 0.02155688794978967) + G2 * (-3878099212869363e-20 * G2 - 3267808279485286e-19 * n + 0.0686742238595345) - n * (3361971776183937e-19 * n + 0.7430659151342254);
                            Q2[E++] = 255 + h * (13596372813588848e-20 * h + 924537132573585e-18 * f2 + 10567359618683593e-20 * G2 + 4791864687436512e-19 * n - 0.3109689587515875) + f2 * (-23545346108370344e-20 * f2 + 2702845253534714e-19 * G2 + 0.0020200308977307156 * n - 0.7488052167015494) + G2 * (6834815998235662e-20 * G2 + 15168452363460973e-20 * n - 0.09751927774728933) - n * (3189131175883281e-19 * n + 0.7364883807733168);
                            Q2[E++] = 255 + h * (13598650411385307e-21 * h + 12423956175490851e-20 * f2 + 4751985097583589e-19 * G2 - 36729317476630422e-22 * n - 0.05562186980264034) + f2 * (16141380598724676e-20 * f2 + 9692239130725186e-19 * G2 + 7782692450036253e-19 * n - 0.44015232367526463) + G2 * (5068882914068769e-22 * G2 + 0.0017778369011375071 * n - 0.7591454649749609) - n * (3435319965105553e-19 * n + 0.7063770186160144);
                        }
                        return Q2.subarray(0, E);
                    },
                    getData: function(Q2) {
                        var h = Q2.width, f2 = Q2.height, G2 = Q2.forceRGB, n = Q2.isSourcePDF;
                        if (this.p > 4) {
                            throw new W2("Unsupported color mode");
                        }
                        var E = this.Y(h, f2, n);
                        if (this.p === 1 && G2) {
                            var a = E.length, C2 = new Uint8ClampedArray(a * 3), F2 = 0;
                            for(var d = 0; d < a; d++){
                                var T = E[d];
                                C2[F2++] = T;
                                C2[F2++] = T;
                                C2[F2++] = T;
                            }
                            return C2;
                        } else if (this.p === 3 && this.f) {
                            return this.z(E);
                        } else if (this.p === 4) {
                            if (this.f) {
                                if (G2) {
                                    return this.O(E);
                                }
                                return this.r(E);
                            } else if (G2) {
                                return this.U(E);
                            }
                        }
                        return E;
                    }
                };
                return ak2;
            })();
            function a9(p2, t) {
                return p2[t] << 24 >> 24;
            }
            function Z2(p2, t) {
                return p2[t] << 8 | p2[t + 1];
            }
            function am(p2, t) {
                return (p2[t] << 24 | p2[t + 1] << 16 | p2[t + 2] << 8 | p2[t + 3]) >>> 0;
            }
            UTIF2.JpegDecoder = ak;
        })();
        UTIF2.encodeImage = function(rgba, w2, h, metadata) {
            var idf = {
                "t256": [
                    w2
                ],
                "t257": [
                    h
                ],
                "t258": [
                    8,
                    8,
                    8,
                    8
                ],
                "t259": [
                    1
                ],
                "t262": [
                    2
                ],
                "t273": [
                    1e3
                ],
                "t277": [
                    4
                ],
                "t278": [
                    h
                ],
                "t279": [
                    w2 * h * 4
                ],
                "t282": [
                    [
                        72,
                        1
                    ]
                ],
                "t283": [
                    [
                        72,
                        1
                    ]
                ],
                "t284": [
                    1
                ],
                "t286": [
                    [
                        0,
                        1
                    ]
                ],
                "t287": [
                    [
                        0,
                        1
                    ]
                ],
                "t296": [
                    1
                ],
                "t305": [
                    "Photopea (UTIF.js)"
                ],
                "t338": [
                    1
                ]
            };
            if (metadata) for(var i in metadata)idf[i] = metadata[i];
            var prfx = new Uint8Array(UTIF2.encode([
                idf
            ]));
            var img = new Uint8Array(rgba);
            var data = new Uint8Array(1e3 + w2 * h * 4);
            for(var i = 0; i < prfx.length; i++)data[i] = prfx[i];
            for(var i = 0; i < img.length; i++)data[1e3 + i] = img[i];
            return data.buffer;
        };
        UTIF2.encode = function(ifds) {
            var LE = false;
            var data = new Uint8Array(2e4), offset = 4, bin = LE ? UTIF2._binLE : UTIF2._binBE;
            data[0] = data[1] = LE ? 73 : 77;
            bin.writeUshort(data, 2, 42);
            var ifdo = 8;
            bin.writeUint(data, offset, ifdo);
            offset += 4;
            for(var i = 0; i < ifds.length; i++){
                var noffs = UTIF2._writeIFD(bin, UTIF2._types.basic, data, ifdo, ifds[i]);
                ifdo = noffs[1];
                if (i < ifds.length - 1) {
                    if ((ifdo & 3) != 0) ifdo += 4 - (ifdo & 3);
                    bin.writeUint(data, noffs[0], ifdo);
                }
            }
            return data.slice(0, ifdo).buffer;
        };
        UTIF2.decode = function(buff, prm) {
            if (prm == null) prm = {
                parseMN: true,
                debug: false
            };
            var data = new Uint8Array(buff), offset = 0;
            var id = UTIF2._binBE.readASCII(data, offset, 2);
            offset += 2;
            var bin = id == "II" ? UTIF2._binLE : UTIF2._binBE;
            var num = bin.readUshort(data, offset);
            offset += 2;
            var ifdo = bin.readUint(data, offset);
            offset += 4;
            var ifds = [];
            while(true){
                var cnt = bin.readUshort(data, ifdo), typ = bin.readUshort(data, ifdo + 4);
                if (cnt != 0) {
                    if (typ < 1 || 13 < typ) {
                        log5("error in TIFF");
                        break;
                    }
                }
                ;
                UTIF2._readIFD(bin, data, ifdo, ifds, 0, prm);
                ifdo = bin.readUint(data, ifdo + 2 + cnt * 12);
                if (ifdo == 0) break;
            }
            return ifds;
        };
        UTIF2.decodeImage = function(buff, img, ifds) {
            if (img.data) return;
            var data = new Uint8Array(buff);
            var id = UTIF2._binBE.readASCII(data, 0, 2);
            if (img["t256"] == null) return;
            img.isLE = id == "II";
            img.width = img["t256"][0];
            img.height = img["t257"][0];
            var cmpr = img["t259"] ? img["t259"][0] : 1;
            var fo2 = img["t266"] ? img["t266"][0] : 1;
            if (img["t284"] && img["t284"][0] == 2) log5("PlanarConfiguration 2 should not be used!");
            if (cmpr == 7 && img["t258"] && img["t258"].length > 3) img["t258"] = img["t258"].slice(0, 3);
            var spp = img["t277"] ? img["t277"][0] : 1;
            var bps = img["t258"] ? img["t258"][0] : 1;
            var bipp = bps * spp;
            if (cmpr == 1 && img["t279"] != null && img["t278"] && img["t262"][0] == 32803) {
                bipp = Math.round(img["t279"][0] * 8 / (img.width * img["t278"][0]));
            }
            if (img["t50885"] && img["t50885"][0] == 4) bipp = img["t258"][0] * 3;
            var bipl = Math.ceil(img.width * bipp / 8) * 8;
            var soff = img["t273"];
            if (soff == null || img["t322"]) soff = img["t324"];
            var bcnt = img["t279"];
            if (cmpr == 1 && soff.length == 1) bcnt = [
                img.height * (bipl >>> 3)
            ];
            if (bcnt == null || img["t322"]) bcnt = img["t325"];
            var bytes = new Uint8Array(img.height * (bipl >>> 3)), bilen = 0;
            if (img["t322"] != null) {
                var tw = img["t322"][0], th = img["t323"][0];
                var tx = Math.floor((img.width + tw - 1) / tw);
                var ty = Math.floor((img.height + th - 1) / th);
                var tbuff = new Uint8Array(Math.ceil(tw * th * bipp / 8) | 0);
                console.log("====", tx, ty);
                for(var y = 0; y < ty; y++)for(var x = 0; x < tx; x++){
                    var i = y * tx + x;
                    tbuff.fill(0);
                    UTIF2.decode._decompress(img, ifds, data, soff[i], bcnt[i], cmpr, tbuff, 0, fo2, tw, th);
                    if (cmpr == 6) bytes = tbuff;
                    else UTIF2._copyTile(tbuff, Math.ceil(tw * bipp / 8) | 0, th, bytes, Math.ceil(img.width * bipp / 8) | 0, img.height, Math.ceil(x * tw * bipp / 8) | 0, y * th);
                }
                bilen = bytes.length * 8;
            } else {
                if (soff == null) return;
                var rps = img["t278"] ? img["t278"][0] : img.height;
                rps = Math.min(rps, img.height);
                for(var i = 0; i < soff.length; i++){
                    UTIF2.decode._decompress(img, ifds, data, soff[i], bcnt[i], cmpr, bytes, Math.ceil(bilen / 8) | 0, fo2, img.width, rps);
                    bilen += bipl * rps;
                }
                bilen = Math.min(bilen, bytes.length * 8);
            }
            img.data = new Uint8Array(bytes.buffer, 0, Math.ceil(bilen / 8) | 0);
        };
        UTIF2.decode._decompress = function(img, ifds, data, off, len, cmpr, tgt, toff, fo2, w2, h) {
            if (img["t271"] && img["t271"][0] == "Panasonic" && img["t45"] && img["t45"][0] == 6) cmpr = 34316;
            if (false) {} else if (cmpr == 1) for(var j2 = 0; j2 < len; j2++)tgt[toff + j2] = data[off + j2];
            else if (cmpr == 2) UTIF2.decode._decodeG2(data, off, len, tgt, toff, w2, fo2);
            else if (cmpr == 3) UTIF2.decode._decodeG3(data, off, len, tgt, toff, w2, fo2, img["t292"] ? (img["t292"][0] & 1) == 1 : false);
            else if (cmpr == 4) UTIF2.decode._decodeG4(data, off, len, tgt, toff, w2, fo2);
            else if (cmpr == 5) UTIF2.decode._decodeLZW(data, off, len, tgt, toff, 8);
            else if (cmpr == 6) UTIF2.decode._decodeOldJPEG(img, data, off, len, tgt, toff);
            else if (cmpr == 7 || cmpr == 34892) UTIF2.decode._decodeNewJPEG(img, data, off, len, tgt, toff);
            else if (cmpr == 8 || cmpr == 32946) {
                var src = new Uint8Array(data.buffer, off + 2, len - 6);
                var bin = pako2["inflateRaw"](src);
                if (toff + bin.length <= tgt.length) tgt.set(bin, toff);
            } else if (cmpr == 9) UTIF2.decode._decodeVC5(data, off, len, tgt, toff, img["t33422"]);
            else if (cmpr == 32767) UTIF2.decode._decodeARW(img, data, off, len, tgt, toff);
            else if (cmpr == 32773) UTIF2.decode._decodePackBits(data, off, len, tgt, toff);
            else if (cmpr == 32809) UTIF2.decode._decodeThunder(data, off, len, tgt, toff);
            else if (cmpr == 34316) UTIF2.decode._decodePanasonic(img, data, off, len, tgt, toff);
            else if (cmpr == 34713) UTIF2.decode._decodeNikon(img, ifds, data, off, len, tgt, toff);
            else if (cmpr == 34676) UTIF2.decode._decodeLogLuv32(img, data, off, len, tgt, toff);
            else log5("Unknown compression", cmpr);
            var bps = img["t258"] ? Math.min(32, img["t258"][0]) : 1;
            var noc = img["t277"] ? img["t277"][0] : 1, bpp = bps * noc >>> 3, bpl = Math.ceil(bps * noc * w2 / 8);
            if (bps == 16 && !img.isLE && img["t33422"] == null) for(var y = 0; y < h; y++){
                var roff = toff + y * bpl;
                for(var x = 1; x < bpl; x += 2){
                    var t = tgt[roff + x];
                    tgt[roff + x] = tgt[roff + x - 1];
                    tgt[roff + x - 1] = t;
                }
            }
            if (img["t317"] && img["t317"][0] == 2) {
                for(var y = 0; y < h; y++){
                    var ntoff = toff + y * bpl;
                    if (bps == 16) for(var j2 = bpp; j2 < bpl; j2 += 2){
                        var nv = (tgt[ntoff + j2 + 1] << 8 | tgt[ntoff + j2]) + (tgt[ntoff + j2 - bpp + 1] << 8 | tgt[ntoff + j2 - bpp]);
                        tgt[ntoff + j2] = nv & 255;
                        tgt[ntoff + j2 + 1] = nv >>> 8 & 255;
                    }
                    else if (noc == 3) for(var j2 = 3; j2 < bpl; j2 += 3){
                        tgt[ntoff + j2] = tgt[ntoff + j2] + tgt[ntoff + j2 - 3] & 255;
                        tgt[ntoff + j2 + 1] = tgt[ntoff + j2 + 1] + tgt[ntoff + j2 - 2] & 255;
                        tgt[ntoff + j2 + 2] = tgt[ntoff + j2 + 2] + tgt[ntoff + j2 - 1] & 255;
                    }
                    else for(var j2 = bpp; j2 < bpl; j2++)tgt[ntoff + j2] = tgt[ntoff + j2] + tgt[ntoff + j2 - bpp] & 255;
                }
            }
        };
        UTIF2.decode._decodePanasonic = function(img, data, off, len, tgt, toff) {
            var img_buffer = data.buffer;
            var rawWidth = img["t2"][0];
            var rawHeight = img["t3"][0];
            var bitsPerSample = img["t10"][0];
            var RW2_Format = img["t45"][0];
            var bidx = 0;
            var imageIndex = 0;
            var vpos = 0;
            var byte = 0;
            var arr_a, arr_b;
            var bytes = RW2_Format == 6 ? new Uint32Array(18) : new Uint8Array(16);
            var i, j2, sh, pred = [
                0,
                0
            ], nonz = [
                0,
                0
            ], isOdd, idx = 0, pixel_base;
            var row, col, crow;
            var buffer = new Uint8Array(16384);
            var result = new Uint16Array(tgt.buffer);
            function getDataRaw(bits) {
                if (vpos == 0) {
                    var arr_a2 = new Uint8Array(img_buffer, off + imageIndex + 8184, 16384 - 8184);
                    var arr_b2 = new Uint8Array(img_buffer, off + imageIndex, 8184);
                    buffer.set(arr_a2);
                    buffer.set(arr_b2, arr_a2.length);
                    imageIndex += 16384;
                }
                if (RW2_Format == 5) {
                    for(i = 0; i < 16; i++){
                        bytes[i] = buffer[vpos++];
                        vpos &= 16383;
                    }
                } else {
                    vpos = vpos - bits & 131071;
                    byte = vpos >> 3 ^ 16368;
                    return (buffer[byte] | buffer[byte + 1] << 8) >> (vpos & 7) & ~(-1 << bits);
                }
            }
            function getBufferDataRW6(i2) {
                return buffer[vpos + 15 - i2];
            }
            function readPageRW6() {
                bytes[0] = getBufferDataRW6(0) << 6 | getBufferDataRW6(1) >> 2;
                bytes[1] = ((getBufferDataRW6(1) & 3) << 12 | getBufferDataRW6(2) << 4 | getBufferDataRW6(3) >> 4) & 16383;
                bytes[2] = getBufferDataRW6(3) >> 2 & 3;
                bytes[3] = (getBufferDataRW6(3) & 3) << 8 | getBufferDataRW6(4);
                bytes[4] = getBufferDataRW6(5) << 2 | getBufferDataRW6(6) >> 6;
                bytes[5] = (getBufferDataRW6(6) & 63) << 4 | getBufferDataRW6(7) >> 4;
                bytes[6] = getBufferDataRW6(7) >> 2 & 3;
                bytes[7] = (getBufferDataRW6(7) & 3) << 8 | getBufferDataRW6(8);
                bytes[8] = getBufferDataRW6(9) << 2 & 1020 | getBufferDataRW6(10) >> 6;
                bytes[9] = (getBufferDataRW6(10) << 4 | getBufferDataRW6(11) >> 4) & 1023;
                bytes[10] = getBufferDataRW6(11) >> 2 & 3;
                bytes[11] = (getBufferDataRW6(11) & 3) << 8 | getBufferDataRW6(12);
                bytes[12] = (getBufferDataRW6(13) << 2 & 1020 | getBufferDataRW6(14) >> 6) & 1023;
                bytes[13] = (getBufferDataRW6(14) << 4 | getBufferDataRW6(15) >> 4) & 1023;
                vpos += 16;
                byte = 0;
            }
            function readPageRw6_bps12() {
                bytes[0] = getBufferDataRW6(0) << 4 | getBufferDataRW6(1) >> 4;
                bytes[1] = ((getBufferDataRW6(1) & 15) << 8 | getBufferDataRW6(2)) & 4095;
                bytes[2] = getBufferDataRW6(3) >> 6 & 3;
                bytes[3] = (getBufferDataRW6(3) & 63) << 2 | getBufferDataRW6(4) >> 6;
                bytes[4] = (getBufferDataRW6(4) & 63) << 2 | getBufferDataRW6(5) >> 6;
                bytes[5] = (getBufferDataRW6(5) & 63) << 2 | getBufferDataRW6(6) >> 6;
                bytes[6] = getBufferDataRW6(6) >> 4 & 3;
                bytes[7] = (getBufferDataRW6(6) & 15) << 4 | getBufferDataRW6(7) >> 4;
                bytes[8] = (getBufferDataRW6(7) & 15) << 4 | getBufferDataRW6(8) >> 4;
                bytes[9] = (getBufferDataRW6(8) & 15) << 4 | getBufferDataRW6(9) >> 4;
                bytes[10] = getBufferDataRW6(9) >> 2 & 3;
                bytes[11] = (getBufferDataRW6(9) & 3) << 6 | getBufferDataRW6(10) >> 2;
                bytes[12] = (getBufferDataRW6(10) & 3) << 6 | getBufferDataRW6(11) >> 2;
                bytes[13] = (getBufferDataRW6(11) & 3) << 6 | getBufferDataRW6(12) >> 2;
                bytes[14] = getBufferDataRW6(12) & 3;
                bytes[15] = getBufferDataRW6(13);
                bytes[16] = getBufferDataRW6(14);
                bytes[17] = getBufferDataRW6(15);
                vpos += 16;
                byte = 0;
            }
            function resetPredNonzeros() {
                pred[0] = 0;
                pred[1] = 0;
                nonz[0] = 0;
                nonz[1] = 0;
            }
            if (RW2_Format == 7) {
                throw RW2_Format;
            } else if (RW2_Format == 6) {
                var is12bit = bitsPerSample == 12, readPageRw6Fn = is12bit ? readPageRw6_bps12 : readPageRW6, pixelsPerBlock = is12bit ? 14 : 11, pixelbase0 = is12bit ? 128 : 512, pixelbase_compare = is12bit ? 2048 : 8192, spix_compare = is12bit ? 16383 : 65535, pixel_mask = is12bit ? 4095 : 16383, blocksperrow = rawWidth / pixelsPerBlock, rowbytes = blocksperrow * 16, bufferSize = is12bit ? 18 : 14;
                for(row = 0; row < rawHeight - 15; row += 16){
                    var rowstoread = Math.min(16, rawHeight - row);
                    var readlen = rowbytes * rowstoread;
                    buffer = new Uint8Array(img_buffer, off + bidx, readlen);
                    vpos = 0;
                    bidx += readlen;
                    for(crow = 0, col = 0; crow < rowstoread; crow++, col = 0){
                        idx = (row + crow) * rawWidth;
                        for(var rblock = 0; rblock < blocksperrow; rblock++){
                            readPageRw6Fn();
                            resetPredNonzeros();
                            sh = 0;
                            pixel_base = 0;
                            for(i = 0; i < pixelsPerBlock; i++){
                                isOdd = i & 1;
                                if (i % 3 == 2) {
                                    var base = byte < bufferSize ? bytes[byte++] : 0;
                                    if (base == 3) base = 4;
                                    pixel_base = pixelbase0 << base;
                                    sh = 1 << base;
                                }
                                var epixel = byte < bufferSize ? bytes[byte++] : 0;
                                if (pred[isOdd]) {
                                    epixel *= sh;
                                    if (pixel_base < pixelbase_compare && nonz[isOdd] > pixel_base) epixel += nonz[isOdd] - pixel_base;
                                    nonz[isOdd] = epixel;
                                } else {
                                    pred[isOdd] = epixel;
                                    if (epixel) nonz[isOdd] = epixel;
                                    else epixel = nonz[isOdd];
                                }
                                result[idx + col++] = epixel - 15 <= spix_compare ? epixel - 15 & spix_compare : epixel + 2147483633 >> 31 & pixel_mask;
                            }
                        }
                    }
                }
            } else if (RW2_Format == 5) {
                var blockSize = bitsPerSample == 12 ? 10 : 9;
                for(row = 0; row < rawHeight; row++){
                    for(col = 0; col < rawWidth; col += blockSize){
                        getDataRaw(0);
                        if (bitsPerSample == 12) {
                            result[idx++] = ((bytes[1] & 15) << 8) + bytes[0];
                            result[idx++] = 16 * bytes[2] + (bytes[1] >> 4);
                            result[idx++] = ((bytes[4] & 15) << 8) + bytes[3];
                            result[idx++] = 16 * bytes[5] + (bytes[4] >> 4);
                            result[idx++] = ((bytes[7] & 15) << 8) + bytes[6];
                            result[idx++] = 16 * bytes[8] + (bytes[7] >> 4);
                            result[idx++] = ((bytes[10] & 15) << 8) + bytes[9];
                            result[idx++] = 16 * bytes[11] + (bytes[10] >> 4);
                            result[idx++] = ((bytes[13] & 15) << 8) + bytes[12];
                            result[idx++] = 16 * bytes[14] + (bytes[13] >> 4);
                        } else if (bitsPerSample == 14) {
                            result[idx++] = bytes[0] + ((bytes[1] & 63) << 8);
                            result[idx++] = (bytes[1] >> 6) + 4 * bytes[2] + ((bytes[3] & 15) << 10);
                            result[idx++] = (bytes[3] >> 4) + 16 * bytes[4] + ((bytes[5] & 3) << 12);
                            result[idx++] = ((bytes[5] & 252) >> 2) + (bytes[6] << 6);
                            result[idx++] = bytes[7] + ((bytes[8] & 63) << 8);
                            result[idx++] = (bytes[8] >> 6) + 4 * bytes[9] + ((bytes[10] & 15) << 10);
                            result[idx++] = (bytes[10] >> 4) + 16 * bytes[11] + ((bytes[12] & 3) << 12);
                            result[idx++] = ((bytes[12] & 252) >> 2) + (bytes[13] << 6);
                            result[idx++] = bytes[14] + ((bytes[15] & 63) << 8);
                        }
                    }
                }
            } else if (RW2_Format == 4) {
                for(row = 0; row < rawHeight; row++){
                    for(col = 0; col < rawWidth; col++){
                        i = col % 14;
                        isOdd = i & 1;
                        if (i == 0) resetPredNonzeros();
                        if (i % 3 == 2) sh = 4 >> 3 - getDataRaw(2);
                        if (nonz[isOdd]) {
                            j2 = getDataRaw(8);
                            if (j2 != 0) {
                                pred[isOdd] -= 128 << sh;
                                if (pred[isOdd] < 0 || sh == 4) pred[isOdd] &= ~(-1 << sh);
                                pred[isOdd] += j2 << sh;
                            }
                        } else {
                            nonz[isOdd] = getDataRaw(8);
                            if (nonz[isOdd] || i > 11) pred[isOdd] = nonz[isOdd] << 4 | getDataRaw(4);
                        }
                        result[idx++] = pred[col & 1];
                    }
                }
            } else throw RW2_Format;
        };
        UTIF2.decode._decodeVC5 = (function() {
            var x = [
                1,
                0,
                1,
                0,
                2,
                2,
                1,
                1,
                3,
                7,
                1,
                2,
                5,
                25,
                1,
                3,
                6,
                48,
                1,
                4,
                6,
                54,
                1,
                5,
                7,
                111,
                1,
                8,
                7,
                99,
                1,
                6,
                7,
                105,
                12,
                0,
                7,
                107,
                1,
                7,
                8,
                209,
                20,
                0,
                8,
                212,
                1,
                9,
                8,
                220,
                1,
                10,
                9,
                393,
                1,
                11,
                9,
                394,
                32,
                0,
                9,
                416,
                1,
                12,
                9,
                427,
                1,
                13,
                10,
                887,
                1,
                18,
                10,
                784,
                1,
                14,
                10,
                790,
                1,
                15,
                10,
                835,
                60,
                0,
                10,
                852,
                1,
                16,
                10,
                885,
                1,
                17,
                11,
                1571,
                1,
                19,
                11,
                1668,
                1,
                20,
                11,
                1669,
                100,
                0,
                11,
                1707,
                1,
                21,
                11,
                1772,
                1,
                22,
                12,
                3547,
                1,
                29,
                12,
                3164,
                1,
                24,
                12,
                3166,
                1,
                25,
                12,
                3140,
                1,
                23,
                12,
                3413,
                1,
                26,
                12,
                3537,
                1,
                27,
                12,
                3539,
                1,
                28,
                13,
                7093,
                1,
                35,
                13,
                6283,
                1,
                30,
                13,
                6331,
                1,
                31,
                13,
                6335,
                180,
                0,
                13,
                6824,
                1,
                32,
                13,
                7072,
                1,
                33,
                13,
                7077,
                320,
                0,
                13,
                7076,
                1,
                34,
                14,
                12565,
                1,
                36,
                14,
                12661,
                1,
                37,
                14,
                12669,
                1,
                38,
                14,
                13651,
                1,
                39,
                14,
                14184,
                1,
                40,
                15,
                28295,
                1,
                46,
                15,
                28371,
                1,
                47,
                15,
                25320,
                1,
                42,
                15,
                25336,
                1,
                43,
                15,
                25128,
                1,
                41,
                15,
                27300,
                1,
                44,
                15,
                28293,
                1,
                45,
                16,
                50259,
                1,
                48,
                16,
                50643,
                1,
                49,
                16,
                50675,
                1,
                50,
                16,
                56740,
                1,
                53,
                16,
                56584,
                1,
                51,
                16,
                56588,
                1,
                52,
                17,
                113483,
                1,
                61,
                17,
                113482,
                1,
                60,
                17,
                101285,
                1,
                55,
                17,
                101349,
                1,
                56,
                17,
                109205,
                1,
                57,
                17,
                109207,
                1,
                58,
                17,
                100516,
                1,
                54,
                17,
                113171,
                1,
                59,
                18,
                202568,
                1,
                62,
                18,
                202696,
                1,
                63,
                18,
                218408,
                1,
                64,
                18,
                218412,
                1,
                65,
                18,
                226340,
                1,
                66,
                18,
                226356,
                1,
                67,
                18,
                226358,
                1,
                68,
                19,
                402068,
                1,
                69,
                19,
                405138,
                1,
                70,
                19,
                405394,
                1,
                71,
                19,
                436818,
                1,
                72,
                19,
                436826,
                1,
                73,
                19,
                452714,
                1,
                75,
                19,
                452718,
                1,
                76,
                19,
                452682,
                1,
                74,
                20,
                804138,
                1,
                77,
                20,
                810279,
                1,
                78,
                20,
                810790,
                1,
                79,
                20,
                873638,
                1,
                80,
                20,
                873654,
                1,
                81,
                20,
                905366,
                1,
                82,
                20,
                905430,
                1,
                83,
                20,
                905438,
                1,
                84,
                21,
                1608278,
                1,
                85,
                21,
                1620557,
                1,
                86,
                21,
                1621582,
                1,
                87,
                21,
                1621583,
                1,
                88,
                21,
                1747310,
                1,
                89,
                21,
                1810734,
                1,
                90,
                21,
                1810735,
                1,
                91,
                21,
                1810863,
                1,
                92,
                21,
                1810879,
                1,
                93,
                22,
                3621725,
                1,
                99,
                22,
                3621757,
                1,
                100,
                22,
                3241112,
                1,
                94,
                22,
                3494556,
                1,
                95,
                22,
                3494557,
                1,
                96,
                22,
                3494622,
                1,
                97,
                22,
                3494623,
                1,
                98,
                23,
                6482227,
                1,
                102,
                23,
                6433117,
                1,
                101,
                23,
                6989117,
                1,
                103,
                23,
                6989119,
                1,
                105,
                23,
                6989118,
                1,
                104,
                23,
                7243449,
                1,
                106,
                23,
                7243512,
                1,
                107,
                24,
                13978233,
                1,
                111,
                24,
                12964453,
                1,
                109,
                24,
                12866232,
                1,
                108,
                24,
                14486897,
                1,
                113,
                24,
                13978232,
                1,
                110,
                24,
                14486896,
                1,
                112,
                24,
                14487026,
                1,
                114,
                24,
                14487027,
                1,
                115,
                25,
                25732598,
                1,
                225,
                25,
                25732597,
                1,
                189,
                25,
                25732596,
                1,
                188,
                25,
                25732595,
                1,
                203,
                25,
                25732594,
                1,
                202,
                25,
                25732593,
                1,
                197,
                25,
                25732592,
                1,
                207,
                25,
                25732591,
                1,
                169,
                25,
                25732590,
                1,
                223,
                25,
                25732589,
                1,
                159,
                25,
                25732522,
                1,
                235,
                25,
                25732579,
                1,
                152,
                25,
                25732575,
                1,
                192,
                25,
                25732489,
                1,
                179,
                25,
                25732573,
                1,
                201,
                25,
                25732472,
                1,
                172,
                25,
                25732576,
                1,
                149,
                25,
                25732488,
                1,
                178,
                25,
                25732566,
                1,
                120,
                25,
                25732571,
                1,
                219,
                25,
                25732577,
                1,
                150,
                25,
                25732487,
                1,
                127,
                25,
                25732506,
                1,
                211,
                25,
                25732548,
                1,
                125,
                25,
                25732588,
                1,
                158,
                25,
                25732486,
                1,
                247,
                25,
                25732467,
                1,
                238,
                25,
                25732508,
                1,
                163,
                25,
                25732552,
                1,
                228,
                25,
                25732603,
                1,
                183,
                25,
                25732513,
                1,
                217,
                25,
                25732587,
                1,
                168,
                25,
                25732520,
                1,
                122,
                25,
                25732484,
                1,
                128,
                25,
                25732562,
                1,
                249,
                25,
                25732505,
                1,
                187,
                25,
                25732504,
                1,
                186,
                25,
                25732483,
                1,
                136,
                25,
                25928905,
                1,
                181,
                25,
                25732560,
                1,
                255,
                25,
                25732500,
                1,
                230,
                25,
                25732482,
                1,
                135,
                25,
                25732555,
                1,
                233,
                25,
                25732568,
                1,
                222,
                25,
                25732583,
                1,
                145,
                25,
                25732481,
                1,
                134,
                25,
                25732586,
                1,
                167,
                25,
                25732521,
                1,
                248,
                25,
                25732518,
                1,
                209,
                25,
                25732480,
                1,
                243,
                25,
                25732512,
                1,
                216,
                25,
                25732509,
                1,
                164,
                25,
                25732547,
                1,
                140,
                25,
                25732479,
                1,
                157,
                25,
                25732544,
                1,
                239,
                25,
                25732574,
                1,
                191,
                25,
                25732564,
                1,
                251,
                25,
                25732478,
                1,
                156,
                25,
                25732546,
                1,
                139,
                25,
                25732498,
                1,
                242,
                25,
                25732557,
                1,
                133,
                25,
                25732477,
                1,
                162,
                25,
                25732515,
                1,
                213,
                25,
                25732584,
                1,
                165,
                25,
                25732514,
                1,
                212,
                25,
                25732476,
                1,
                227,
                25,
                25732494,
                1,
                198,
                25,
                25732531,
                1,
                236,
                25,
                25732530,
                1,
                234,
                25,
                25732529,
                1,
                117,
                25,
                25732528,
                1,
                215,
                25,
                25732527,
                1,
                124,
                25,
                25732526,
                1,
                123,
                25,
                25732525,
                1,
                254,
                25,
                25732524,
                1,
                253,
                25,
                25732523,
                1,
                148,
                25,
                25732570,
                1,
                218,
                25,
                25732580,
                1,
                146,
                25,
                25732581,
                1,
                147,
                25,
                25732569,
                1,
                224,
                25,
                25732533,
                1,
                143,
                25,
                25732540,
                1,
                184,
                25,
                25732541,
                1,
                185,
                25,
                25732585,
                1,
                166,
                25,
                25732556,
                1,
                132,
                25,
                25732485,
                1,
                129,
                25,
                25732563,
                1,
                250,
                25,
                25732578,
                1,
                151,
                25,
                25732501,
                1,
                119,
                25,
                25732502,
                1,
                193,
                25,
                25732536,
                1,
                176,
                25,
                25732496,
                1,
                245,
                25,
                25732553,
                1,
                229,
                25,
                25732516,
                1,
                206,
                25,
                25732582,
                1,
                144,
                25,
                25732517,
                1,
                208,
                25,
                25732558,
                1,
                137,
                25,
                25732543,
                1,
                241,
                25,
                25732466,
                1,
                237,
                25,
                25732507,
                1,
                190,
                25,
                25732542,
                1,
                240,
                25,
                25732551,
                1,
                131,
                25,
                25732554,
                1,
                232,
                25,
                25732565,
                1,
                252,
                25,
                25732475,
                1,
                171,
                25,
                25732493,
                1,
                205,
                25,
                25732492,
                1,
                204,
                25,
                25732491,
                1,
                118,
                25,
                25732490,
                1,
                214,
                25,
                25928904,
                1,
                180,
                25,
                25732549,
                1,
                126,
                25,
                25732602,
                1,
                182,
                25,
                25732539,
                1,
                175,
                25,
                25732545,
                1,
                141,
                25,
                25732559,
                1,
                138,
                25,
                25732537,
                1,
                177,
                25,
                25732534,
                1,
                153,
                25,
                25732503,
                1,
                194,
                25,
                25732606,
                1,
                160,
                25,
                25732567,
                1,
                121,
                25,
                25732538,
                1,
                174,
                25,
                25732497,
                1,
                246,
                25,
                25732550,
                1,
                130,
                25,
                25732572,
                1,
                200,
                25,
                25732474,
                1,
                170,
                25,
                25732511,
                1,
                221,
                25,
                25732601,
                1,
                196,
                25,
                25732532,
                1,
                142,
                25,
                25732519,
                1,
                210,
                25,
                25732495,
                1,
                199,
                25,
                25732605,
                1,
                155,
                25,
                25732535,
                1,
                154,
                25,
                25732499,
                1,
                244,
                25,
                25732510,
                1,
                220,
                25,
                25732600,
                1,
                195,
                25,
                25732607,
                1,
                161,
                25,
                25732604,
                1,
                231,
                25,
                25732473,
                1,
                173,
                25,
                25732599,
                1,
                226,
                26,
                51465122,
                1,
                116,
                26,
                51465123,
                0,
                1
            ], o, C2, k2, P2 = [
                3,
                3,
                3,
                3,
                2,
                2,
                2,
                1,
                1,
                1
            ], V2 = 24576, ar2 = 16384, H2 = 8192, az = ar2 | H2;
            function d(t) {
                var E = t[1], h = t[0][E >>> 3] >>> 7 - (E & 7) & 1;
                t[1]++;
                return h;
            }
            function ag(t, E) {
                if (o == null) {
                    o = {};
                    for(var h = 0; h < x.length; h += 4)o[x[h + 1]] = x.slice(h, h + 4);
                }
                var L2 = d(t), g2 = o[L2];
                while(g2 == null){
                    L2 = L2 << 1 | d(t);
                    g2 = o[L2];
                }
                var n = g2[3];
                if (n != 0) n = d(t) == 0 ? n : -n;
                E[0] = g2[2];
                E[1] = n;
            }
            function m2(t, E) {
                for(var h = 0; h < E; h++){
                    if ((t & 1) == 1) t++;
                    t = t >>> 1;
                }
                return t;
            }
            function A2(t, E) {
                return t >> E;
            }
            function O2(t, E, h, L2, g2, n) {
                E[h] = A2(A2(11 * t[g2] - 4 * t[g2 + n] + t[g2 + n + n] + 4, 3) + t[L2], 1);
                E[h + n] = A2(A2(5 * t[g2] + 4 * t[g2 + n] - t[g2 + n + n] + 4, 3) - t[L2], 1);
            }
            function J2(t, E, h, L2, g2, n) {
                var W2 = t[g2 - n] - t[g2 + n], j2 = t[g2], $2 = t[L2];
                E[h] = A2(A2(W2 + 4, 3) + j2 + $2, 1);
                E[h + n] = A2(A2(-W2 + 4, 3) + j2 - $2, 1);
            }
            function y(t, E, h, L2, g2, n) {
                E[h] = A2(A2(5 * t[g2] + 4 * t[g2 - n] - t[g2 - n - n] + 4, 3) + t[L2], 1);
                E[h + n] = A2(A2(11 * t[g2] - 4 * t[g2 - n] + t[g2 - n - n] + 4, 3) - t[L2], 1);
            }
            function q2(t) {
                t = t < 0 ? 0 : t > 4095 ? 4095 : t;
                t = k2[t] >>> 2;
                return t;
            }
            function av(t, E, h, L2, g2, n) {
                L2 = new Uint16Array(L2.buffer);
                var W2 = Date.now(), j2 = UTIF2._binBE, $2 = E + h, r, u2, X2, I2, ax, a3, R2, ai2, aa, ap, ah, ae2, aD, al, i, aE, T, B2;
                E += 4;
                var a5 = n[0] == 1;
                while(E < $2){
                    var S2 = j2.readShort(t, E), s3 = j2.readUshort(t, E + 2);
                    E += 4;
                    if (S2 == 12) r = s3;
                    else if (S2 == 20) u2 = s3;
                    else if (S2 == 21) X2 = s3;
                    else if (S2 == 48) I2 = s3;
                    else if (S2 == 53) ax = s3;
                    else if (S2 == 35) a3 = s3;
                    else if (S2 == 62) R2 = s3;
                    else if (S2 == 101) ai2 = s3;
                    else if (S2 == 109) aa = s3;
                    else if (S2 == 84) ap = s3;
                    else if (S2 == 106) ah = s3;
                    else if (S2 == 107) ae2 = s3;
                    else if (S2 == 108) aD = s3;
                    else if (S2 == 102) al = s3;
                    else if (S2 == 104) i = s3;
                    else if (S2 == 105) aE = s3;
                    else {
                        var F2 = S2 < 0 ? -S2 : S2, D = F2 & 65280, _2 = 0;
                        if (F2 & az) {
                            if (F2 & H2) {
                                _2 = s3 & 65535;
                                _2 += (F2 & 255) << 16;
                            } else {
                                _2 = s3 & 65535;
                            }
                        }
                        if ((F2 & V2) == V2) {
                            if (T == null) {
                                T = [];
                                for(var M2 = 0; M2 < 4; M2++)T[M2] = new Int16Array((u2 >>> 1) * (X2 >>> 1));
                                B2 = new Int16Array((u2 >>> 1) * (X2 >>> 1));
                                C2 = new Int16Array(1024);
                                for(var M2 = 0; M2 < 1024; M2++){
                                    var aG = M2 - 512, p2 = Math.abs(aG), r = Math.floor(768 * p2 * p2 * p2 / (255 * 255 * 255)) + p2;
                                    C2[M2] = Math.sign(aG) * r;
                                }
                                k2 = new Uint16Array(4096);
                                var aA = (1 << 16) - 1;
                                for(var M2 = 0; M2 < 4096; M2++){
                                    var at2 = M2, a1 = aA * (Math.pow(113, at2 / 4095) - 1) / 112;
                                    k2[M2] = Math.min(a1, aA);
                                }
                            }
                            var w2 = T[R2], v2 = m2(u2, 1 + P2[I2]), N2 = m2(X2, 1 + P2[I2]);
                            if (I2 == 0) {
                                for(var b2 = 0; b2 < N2; b2++)for(var G2 = 0; G2 < v2; G2++){
                                    var c = E + (b2 * v2 + G2) * 2;
                                    w2[b2 * (u2 >>> 1) + G2] = t[c] << 8 | t[c + 1];
                                }
                            } else {
                                var a7 = [
                                    t,
                                    E * 8
                                ], a4 = [], ay = 0, aw = v2 * N2, f2 = [
                                    0,
                                    0
                                ], Q2 = 0, s3 = 0;
                                while(ay < aw){
                                    ag(a7, f2);
                                    Q2 = f2[0];
                                    s3 = f2[1];
                                    while(Q2 > 0){
                                        a4[ay++] = s3;
                                        Q2--;
                                    }
                                }
                                var l = (I2 - 1) % 3, aF = l != 1 ? v2 : 0, a2 = l != 0 ? N2 : 0;
                                for(var b2 = 0; b2 < N2; b2++){
                                    var af = (b2 + a2) * (u2 >>> 1) + aF, au = b2 * v2;
                                    for(var G2 = 0; G2 < v2; G2++)w2[af + G2] = C2[a4[au + G2] + 512] * ax;
                                }
                                if (l == 2) {
                                    var i = u2 >>> 1, an2 = v2 * 2, a9 = N2 * 2;
                                    for(var b2 = 0; b2 < N2; b2++){
                                        for(var G2 = 0; G2 < an2; G2++){
                                            var M2 = b2 * 2 * i + G2, a = b2 * i + G2, e = N2 * i + a;
                                            if (b2 == 0) O2(w2, B2, M2, e, a, i);
                                            else if (b2 == N2 - 1) y(w2, B2, M2, e, a, i);
                                            else J2(w2, B2, M2, e, a, i);
                                        }
                                    }
                                    var Z2 = w2;
                                    w2 = B2;
                                    B2 = Z2;
                                    for(var b2 = 0; b2 < a9; b2++){
                                        for(var G2 = 0; G2 < v2; G2++){
                                            var M2 = b2 * i + 2 * G2, a = b2 * i + G2, e = v2 + a;
                                            if (G2 == 0) O2(w2, B2, M2, e, a, 1);
                                            else if (G2 == v2 - 1) y(w2, B2, M2, e, a, 1);
                                            else J2(w2, B2, M2, e, a, 1);
                                        }
                                    }
                                    var Z2 = w2;
                                    w2 = B2;
                                    B2 = Z2;
                                    var aC = [], aB = 2 - ~~((I2 - 1) / 3);
                                    for(var K2 = 0; K2 < 3; K2++)aC[K2] = aa >> 14 - K2 * 2 & 3;
                                    var a6 = aC[aB];
                                    if (a6 != 0) for(var b2 = 0; b2 < a9; b2++)for(var G2 = 0; G2 < an2; G2++){
                                        var M2 = b2 * i + G2;
                                        w2[M2] = w2[M2] << a6;
                                    }
                                }
                            }
                            if (I2 == 9 && R2 == 3) {
                                var a8 = T[0], ab = T[1], aq = T[2], as2 = T[3];
                                for(var b2 = 0; b2 < X2; b2 += 2)for(var G2 = 0; G2 < u2; G2 += 2){
                                    var U2 = b2 * u2 + G2, c = (b2 >>> 1) * (u2 >>> 1) + (G2 >>> 1), z2 = a8[c], ao2 = ab[c] - 2048, ak = aq[c] - 2048, ad = as2[c] - 2048, aj = (ao2 << 1) + z2, a0 = (ak << 1) + z2, aH = z2 + ad, am = z2 - ad;
                                    if (a5) {
                                        L2[U2] = q2(aH);
                                        L2[U2 + 1] = q2(a0);
                                        L2[U2 + u2] = q2(aj);
                                        L2[U2 + u2 + 1] = q2(am);
                                    } else {
                                        L2[U2] = q2(aj);
                                        L2[U2 + 1] = q2(aH);
                                        L2[U2 + u2] = q2(am);
                                        L2[U2 + u2 + 1] = q2(a0);
                                    }
                                }
                            }
                            E += _2 * 4;
                        } else if (F2 == 16388) {
                            E += _2 * 4;
                        } else if (D == 8192 || D == 8448 || D == 9216) {} else throw F2.toString(16);
                    }
                }
                console.log(Date.now() - W2);
            }
            return av;
        })();
        UTIF2.decode._decodeLogLuv32 = function(img, data, off, len, tgt, toff) {
            var w2 = img.width, qw = w2 * 4;
            var io2 = 0, out = new Uint8Array(qw);
            while(io2 < len){
                var oo2 = 0;
                while(oo2 < qw){
                    var c = data[off + io2];
                    io2++;
                    if (c < 128) {
                        for(var j2 = 0; j2 < c; j2++)out[oo2 + j2] = data[off + io2 + j2];
                        oo2 += c;
                        io2 += c;
                    } else {
                        c = c - 126;
                        for(var j2 = 0; j2 < c; j2++)out[oo2 + j2] = data[off + io2];
                        oo2 += c;
                        io2++;
                    }
                }
                for(var x = 0; x < w2; x++){
                    tgt[toff + 0] = out[x];
                    tgt[toff + 1] = out[x + w2];
                    tgt[toff + 2] = out[x + w2 * 2];
                    tgt[toff + 4] = out[x + w2 * 3];
                    toff += 6;
                }
            }
        };
        UTIF2.decode._ljpeg_diff = function(data, prm, huff) {
            var getbithuff = UTIF2.decode._getbithuff;
            var len, diff;
            len = getbithuff(data, prm, huff[0], huff);
            diff = getbithuff(data, prm, len, 0);
            if ((diff & 1 << len - 1) == 0) diff -= (1 << len) - 1;
            return diff;
        };
        UTIF2.decode._decodeARW = function(img, inp, off, src_length, tgt, toff) {
            var raw_width = img["t256"][0], height = img["t257"][0], tiff_bps = img["t258"][0];
            var bin = img.isLE ? UTIF2._binLE : UTIF2._binBE;
            var arw2 = raw_width * height == src_length || raw_width * height * 1.5 == src_length;
            if (!arw2) {
                height += 8;
                var prm = [
                    off,
                    0,
                    0,
                    0
                ];
                var huff = new Uint16Array(32770);
                var tab = [
                    3857,
                    3856,
                    3599,
                    3342,
                    3085,
                    2828,
                    2571,
                    2314,
                    2057,
                    1800,
                    1543,
                    1286,
                    1029,
                    772,
                    771,
                    768,
                    514,
                    513
                ];
                var i, c, n, col, row, sum = 0;
                var ljpeg_diff = UTIF2.decode._ljpeg_diff;
                huff[0] = 15;
                for(n = i = 0; i < 18; i++){
                    var lim = 32768 >>> (tab[i] >>> 8);
                    for(var c = 0; c < lim; c++)huff[++n] = tab[i];
                }
                for(col = raw_width; col--;)for(row = 0; row < height + 1; row += 2){
                    if (row == height) row = 1;
                    sum += ljpeg_diff(inp, prm, huff);
                    if (row < height) {
                        var clr = sum & 4095;
                        UTIF2.decode._putsF(tgt, (row * raw_width + col) * tiff_bps, clr << 16 - tiff_bps);
                    }
                }
                return;
            }
            if (raw_width * height * 1.5 == src_length) {
                for(var i = 0; i < src_length; i += 3){
                    var b0 = inp[off + i + 0], b1 = inp[off + i + 1], b2 = inp[off + i + 2];
                    tgt[toff + i] = b1 << 4 | b0 >>> 4;
                    tgt[toff + i + 1] = b0 << 4 | b2 >>> 4;
                    tgt[toff + i + 2] = b2 << 4 | b1 >>> 4;
                }
                return;
            }
            var pix = new Uint16Array(16);
            var row, col, val, max, min, imax, imin, sh, bit, i, dp;
            var data = new Uint8Array(raw_width + 1);
            for(row = 0; row < height; row++){
                for(var j2 = 0; j2 < raw_width; j2++)data[j2] = inp[off++];
                for(dp = 0, col = 0; col < raw_width - 30; dp += 16){
                    max = 2047 & (val = bin.readUint(data, dp));
                    min = 2047 & val >>> 11;
                    imax = 15 & val >>> 22;
                    imin = 15 & val >>> 26;
                    for(sh = 0; sh < 4 && 128 << sh <= max - min; sh++);
                    for(bit = 30, i = 0; i < 16; i++)if (i == imax) pix[i] = max;
                    else if (i == imin) pix[i] = min;
                    else {
                        pix[i] = ((bin.readUshort(data, dp + (bit >> 3)) >>> (bit & 7) & 127) << sh) + min;
                        if (pix[i] > 2047) pix[i] = 2047;
                        bit += 7;
                    }
                    for(i = 0; i < 16; i++, col += 2){
                        var clr = pix[i] << 1;
                        UTIF2.decode._putsF(tgt, (row * raw_width + col) * tiff_bps, clr << 16 - tiff_bps);
                    }
                    col -= col & 1 ? 1 : 31;
                }
            }
        };
        UTIF2.decode._decodeNikon = function(img, imgs, data, off, src_length, tgt, toff) {
            var nikon_tree = [
                [
                    0,
                    0,
                    1,
                    5,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    5,
                    4,
                    3,
                    6,
                    2,
                    7,
                    1,
                    0,
                    8,
                    9,
                    11,
                    10,
                    12
                ],
                [
                    0,
                    0,
                    1,
                    5,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    57,
                    90,
                    56,
                    39,
                    22,
                    5,
                    4,
                    3,
                    2,
                    1,
                    0,
                    11,
                    12,
                    12
                ],
                [
                    0,
                    0,
                    1,
                    4,
                    2,
                    3,
                    1,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    5,
                    4,
                    6,
                    3,
                    7,
                    2,
                    8,
                    1,
                    9,
                    0,
                    10,
                    11,
                    12
                ],
                [
                    0,
                    0,
                    1,
                    4,
                    3,
                    1,
                    1,
                    1,
                    1,
                    1,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    5,
                    6,
                    4,
                    7,
                    8,
                    3,
                    9,
                    2,
                    1,
                    0,
                    10,
                    11,
                    12,
                    13,
                    14
                ],
                [
                    0,
                    0,
                    1,
                    5,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    8,
                    92,
                    75,
                    58,
                    41,
                    7,
                    6,
                    5,
                    4,
                    3,
                    2,
                    1,
                    0,
                    13,
                    14
                ],
                [
                    0,
                    0,
                    1,
                    4,
                    2,
                    2,
                    3,
                    1,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    7,
                    6,
                    8,
                    5,
                    9,
                    4,
                    10,
                    3,
                    11,
                    12,
                    2,
                    0,
                    1,
                    13,
                    14
                ]
            ];
            var raw_width = img["t256"][0], height = img["t257"][0], tiff_bps = img["t258"][0];
            var tree = 0, split = 0;
            var make_decoder = UTIF2.decode._make_decoder;
            var getbithuff = UTIF2.decode._getbithuff;
            var mn2 = imgs[0].exifIFD.makerNote, md = mn2["t150"] ? mn2["t150"] : mn2["t140"], mdo = 0;
            var ver0 = md[mdo++], ver1 = md[mdo++];
            if (ver0 == 73 || ver1 == 88) mdo += 2110;
            if (ver0 == 70) tree = 2;
            if (tiff_bps == 14) tree += 3;
            var vpred = [
                [
                    0,
                    0
                ],
                [
                    0,
                    0
                ]
            ], bin = img.isLE ? UTIF2._binLE : UTIF2._binBE;
            for(var i = 0; i < 2; i++)for(var j2 = 0; j2 < 2; j2++){
                vpred[i][j2] = bin.readShort(md, mdo);
                mdo += 2;
            }
            var max = 1 << tiff_bps & 32767, step = 0;
            var csize = bin.readShort(md, mdo);
            mdo += 2;
            if (csize > 1) step = Math.floor(max / (csize - 1));
            if (ver0 == 68 && ver1 == 32 && step > 0) split = bin.readShort(md, 562);
            var i;
            var row, col;
            var len, shl, diff;
            var min_v = 0;
            var hpred = [
                0,
                0
            ];
            var huff = make_decoder(nikon_tree[tree]);
            var prm = [
                off,
                0,
                0,
                0
            ];
            for(min_v = row = 0; row < height; row++){
                if (split && row == split) {
                    huff = make_decoder(nikon_tree[tree + 1]);
                }
                for(col = 0; col < raw_width; col++){
                    i = getbithuff(data, prm, huff[0], huff);
                    len = i & 15;
                    shl = i >>> 4;
                    diff = (getbithuff(data, prm, len - shl, 0) << 1) + 1 << shl >>> 1;
                    if ((diff & 1 << len - 1) == 0) diff -= (1 << len) - (shl == 0 ? 1 : 0);
                    if (col < 2) hpred[col] = vpred[row & 1][col] += diff;
                    else hpred[col & 1] += diff;
                    var clr = Math.min(Math.max(hpred[col & 1], 0), (1 << tiff_bps) - 1);
                    var bti = (row * raw_width + col) * tiff_bps;
                    UTIF2.decode._putsF(tgt, bti, clr << 16 - tiff_bps);
                }
            }
        };
        UTIF2.decode._putsF = function(dt2, pos, val) {
            val = val << 8 - (pos & 7);
            var o = pos >>> 3;
            dt2[o] |= val >>> 16;
            dt2[o + 1] |= val >>> 8;
            dt2[o + 2] |= val;
        };
        UTIF2.decode._getbithuff = function(data, prm, nbits, huff) {
            var zero_after_ff = 0;
            var get_byte = UTIF2.decode._get_byte;
            var c;
            var off = prm[0], bitbuf = prm[1], vbits = prm[2], reset = prm[3];
            if (nbits == 0 || vbits < 0) return 0;
            while(!reset && vbits < nbits && (c = data[off++]) != -1 && !(reset = zero_after_ff && c == 255 && data[off++])){
                bitbuf = (bitbuf << 8) + c;
                vbits += 8;
            }
            c = bitbuf << 32 - vbits >>> 32 - nbits;
            if (huff) {
                vbits -= huff[c + 1] >>> 8;
                c = huff[c + 1] & 255;
            } else vbits -= nbits;
            if (vbits < 0) throw "e";
            prm[0] = off;
            prm[1] = bitbuf;
            prm[2] = vbits;
            prm[3] = reset;
            return c;
        };
        UTIF2.decode._make_decoder = function(source) {
            var max, len, h, i, j2;
            var huff = [];
            for(max = 16; max != 0 && !source[max]; max--);
            var si2 = 17;
            huff[0] = max;
            for(h = len = 1; len <= max; len++)for(i = 0; i < source[len]; i++, ++si2)for(j2 = 0; j2 < 1 << max - len; j2++)if (h <= 1 << max) huff[h++] = len << 8 | source[si2];
            return huff;
        };
        UTIF2.decode._decodeNewJPEG = function(img, data, off, len, tgt, toff) {
            len = Math.min(len, data.length - off);
            var tables = img["t347"], tlen = tables ? tables.length : 0, buff = new Uint8Array(tlen + len);
            if (tables) {
                var SOI = 216, EOI2 = 217, boff = 0;
                for(var i = 0; i < tlen - 1; i++){
                    if (tables[i] == 255 && tables[i + 1] == EOI2) break;
                    buff[boff++] = tables[i];
                }
                var byte1 = data[off], byte2 = data[off + 1];
                if (byte1 != 255 || byte2 != SOI) {
                    buff[boff++] = byte1;
                    buff[boff++] = byte2;
                }
                for(var i = 2; i < len; i++)buff[boff++] = data[off + i];
            } else for(var i = 0; i < len; i++)buff[i] = data[off + i];
            if (img["t262"][0] == 32803 || img["t259"][0] == 7 && img["t262"][0] == 34892) {
                var bps = img["t258"][0];
                var out = UTIF2.LosslessJpegDecode(buff), olen = out.length;
                if (false) {} else if (bps == 16) {
                    if (img.isLE) for(var i = 0; i < olen; i++){
                        tgt[toff + (i << 1)] = out[i] & 255;
                        tgt[toff + (i << 1) + 1] = out[i] >>> 8;
                    }
                    else for(var i = 0; i < olen; i++){
                        tgt[toff + (i << 1)] = out[i] >>> 8;
                        tgt[toff + (i << 1) + 1] = out[i] & 255;
                    }
                } else if (bps == 14 || bps == 12 || bps == 10) {
                    var rst = 16 - bps;
                    for(var i = 0; i < olen; i++)UTIF2.decode._putsF(tgt, i * bps, out[i] << rst);
                } else if (bps == 8) {
                    for(var i = 0; i < olen; i++)tgt[toff + i] = out[i];
                } else throw new Error("unsupported bit depth " + bps);
            } else {
                var parser = new UTIF2.JpegDecoder();
                parser.parse(buff);
                var decoded = parser.getData({
                    "width": parser.width,
                    "height": parser.height,
                    "forceRGB": true,
                    "isSourcePDF": false
                });
                for(var i = 0; i < decoded.length; i++)tgt[toff + i] = decoded[i];
            }
            if (img["t262"][0] == 6) img["t262"][0] = 2;
        };
        UTIF2.decode._decodeOldJPEGInit = function(img, data, off, len) {
            var SOI = 216, EOI2 = 217, DQT = 219, DHT = 196, DRI = 221, SOF0 = 192, SOS2 = 218;
            var joff = 0, soff = 0, tables, sosMarker2, isTiled = false, i, j2, k2;
            var jpgIchgFmt = img["t513"], jifoff = jpgIchgFmt ? jpgIchgFmt[0] : 0;
            var jpgIchgFmtLen = img["t514"], jiflen = jpgIchgFmtLen ? jpgIchgFmtLen[0] : 0;
            var soffTag = img["t324"] || img["t273"] || jpgIchgFmt;
            var ycbcrss = img["t530"], ssx = 0, ssy = 0;
            var spp = img["t277"] ? img["t277"][0] : 1;
            var jpgresint = img["t515"];
            if (soffTag) {
                soff = soffTag[0];
                isTiled = soffTag.length > 1;
            }
            if (!isTiled) {
                if (data[off] == 255 && data[off + 1] == SOI) return {
                    jpegOffset: off
                };
                if (jpgIchgFmt != null) {
                    if (data[off + jifoff] == 255 && data[off + jifoff + 1] == SOI) joff = off + jifoff;
                    else log5("JPEGInterchangeFormat does not point to SOI");
                    if (jpgIchgFmtLen == null) log5("JPEGInterchangeFormatLength field is missing");
                    else if (jifoff >= soff || jifoff + jiflen <= soff) log5("JPEGInterchangeFormatLength field value is invalid");
                    if (joff != null) return {
                        jpegOffset: joff
                    };
                }
            }
            if (ycbcrss != null) {
                ssx = ycbcrss[0];
                ssy = ycbcrss[1];
            }
            if (jpgIchgFmt != null) {
                if (jpgIchgFmtLen != null) if (jiflen >= 2 && jifoff + jiflen <= soff) {
                    if (data[off + jifoff + jiflen - 2] == 255 && data[off + jifoff + jiflen - 1] == SOI) tables = new Uint8Array(jiflen - 2);
                    else tables = new Uint8Array(jiflen);
                    for(i = 0; i < tables.length; i++)tables[i] = data[off + jifoff + i];
                    log5("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables");
                } else log5("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile");
            }
            if (tables == null) {
                var ooff = 0, out = [];
                out[ooff++] = 255;
                out[ooff++] = SOI;
                var qtables = img["t519"];
                if (qtables == null) throw new Error("JPEGQTables tag is missing");
                for(i = 0; i < qtables.length; i++){
                    out[ooff++] = 255;
                    out[ooff++] = DQT;
                    out[ooff++] = 0;
                    out[ooff++] = 67;
                    out[ooff++] = i;
                    for(j2 = 0; j2 < 64; j2++)out[ooff++] = data[off + qtables[i] + j2];
                }
                for(k2 = 0; k2 < 2; k2++){
                    var htables = img[k2 == 0 ? "t520" : "t521"];
                    if (htables == null) throw new Error((k2 == 0 ? "JPEGDCTables" : "JPEGACTables") + " tag is missing");
                    for(i = 0; i < htables.length; i++){
                        out[ooff++] = 255;
                        out[ooff++] = DHT;
                        var nc = 19;
                        for(j2 = 0; j2 < 16; j2++)nc += data[off + htables[i] + j2];
                        out[ooff++] = nc >>> 8;
                        out[ooff++] = nc & 255;
                        out[ooff++] = i | k2 << 4;
                        for(j2 = 0; j2 < 16; j2++)out[ooff++] = data[off + htables[i] + j2];
                        for(j2 = 0; j2 < nc; j2++)out[ooff++] = data[off + htables[i] + 16 + j2];
                    }
                }
                out[ooff++] = 255;
                out[ooff++] = SOF0;
                out[ooff++] = 0;
                out[ooff++] = 8 + 3 * spp;
                out[ooff++] = 8;
                out[ooff++] = img.height >>> 8 & 255;
                out[ooff++] = img.height & 255;
                out[ooff++] = img.width >>> 8 & 255;
                out[ooff++] = img.width & 255;
                out[ooff++] = spp;
                if (spp == 1) {
                    out[ooff++] = 1;
                    out[ooff++] = 17;
                    out[ooff++] = 0;
                } else for(i = 0; i < 3; i++){
                    out[ooff++] = i + 1;
                    out[ooff++] = i != 0 ? 17 : (ssx & 15) << 4 | ssy & 15;
                    out[ooff++] = i;
                }
                if (jpgresint != null && jpgresint[0] != 0) {
                    out[ooff++] = 255;
                    out[ooff++] = DRI;
                    out[ooff++] = 0;
                    out[ooff++] = 4;
                    out[ooff++] = jpgresint[0] >>> 8 & 255;
                    out[ooff++] = jpgresint[0] & 255;
                }
                tables = new Uint8Array(out);
            }
            var sofpos = -1;
            i = 0;
            while(i < tables.length - 1){
                if (tables[i] == 255 && tables[i + 1] == SOF0) {
                    sofpos = i;
                    break;
                }
                i++;
            }
            if (sofpos == -1) {
                var tmptab = new Uint8Array(tables.length + 10 + 3 * spp);
                tmptab.set(tables);
                var tmpoff = tables.length;
                sofpos = tables.length;
                tables = tmptab;
                tables[tmpoff++] = 255;
                tables[tmpoff++] = SOF0;
                tables[tmpoff++] = 0;
                tables[tmpoff++] = 8 + 3 * spp;
                tables[tmpoff++] = 8;
                tables[tmpoff++] = img.height >>> 8 & 255;
                tables[tmpoff++] = img.height & 255;
                tables[tmpoff++] = img.width >>> 8 & 255;
                tables[tmpoff++] = img.width & 255;
                tables[tmpoff++] = spp;
                if (spp == 1) {
                    tables[tmpoff++] = 1;
                    tables[tmpoff++] = 17;
                    tables[tmpoff++] = 0;
                } else for(i = 0; i < 3; i++){
                    tables[tmpoff++] = i + 1;
                    tables[tmpoff++] = i != 0 ? 17 : (ssx & 15) << 4 | ssy & 15;
                    tables[tmpoff++] = i;
                }
            }
            if (data[soff] == 255 && data[soff + 1] == SOS2) {
                var soslen = data[soff + 2] << 8 | data[soff + 3];
                sosMarker2 = new Uint8Array(soslen + 2);
                sosMarker2[0] = data[soff];
                sosMarker2[1] = data[soff + 1];
                sosMarker2[2] = data[soff + 2];
                sosMarker2[3] = data[soff + 3];
                for(i = 0; i < soslen - 2; i++)sosMarker2[i + 4] = data[soff + i + 4];
            } else {
                sosMarker2 = new Uint8Array(2 + 6 + 2 * spp);
                var sosoff = 0;
                sosMarker2[sosoff++] = 255;
                sosMarker2[sosoff++] = SOS2;
                sosMarker2[sosoff++] = 0;
                sosMarker2[sosoff++] = 6 + 2 * spp;
                sosMarker2[sosoff++] = spp;
                if (spp == 1) {
                    sosMarker2[sosoff++] = 1;
                    sosMarker2[sosoff++] = 0;
                } else for(i = 0; i < 3; i++){
                    sosMarker2[sosoff++] = i + 1;
                    sosMarker2[sosoff++] = i << 4 | i;
                }
                sosMarker2[sosoff++] = 0;
                sosMarker2[sosoff++] = 63;
                sosMarker2[sosoff++] = 0;
            }
            return {
                jpegOffset: off,
                tables,
                sosMarker: sosMarker2,
                sofPosition: sofpos
            };
        };
        UTIF2.decode._decodeOldJPEG = function(img, data, off, len, tgt, toff) {
            var i, dlen, tlen, buff, buffoff;
            var jpegData = UTIF2.decode._decodeOldJPEGInit(img, data, off, len);
            if (jpegData.jpegOffset != null) {
                dlen = off + len - jpegData.jpegOffset;
                buff = new Uint8Array(dlen);
                for(i = 0; i < dlen; i++)buff[i] = data[jpegData.jpegOffset + i];
            } else {
                tlen = jpegData.tables.length;
                buff = new Uint8Array(tlen + jpegData.sosMarker.length + len + 2);
                buff.set(jpegData.tables);
                buffoff = tlen;
                buff[jpegData.sofPosition + 5] = img.height >>> 8 & 255;
                buff[jpegData.sofPosition + 6] = img.height & 255;
                buff[jpegData.sofPosition + 7] = img.width >>> 8 & 255;
                buff[jpegData.sofPosition + 8] = img.width & 255;
                if (data[off] != 255 || data[off + 1] != SOS) {
                    buff.set(jpegData.sosMarker, buffoff);
                    buffoff += sosMarker.length;
                }
                for(i = 0; i < len; i++)buff[buffoff++] = data[off + i];
                buff[buffoff++] = 255;
                buff[buffoff++] = EOI;
            }
            var parser = new UTIF2.JpegDecoder();
            parser.parse(buff);
            var decoded = parser.getData({
                "width": parser.width,
                "height": parser.height,
                "forceRGB": true,
                "isSourcePDF": false
            });
            for(var i = 0; i < decoded.length; i++)tgt[toff + i] = decoded[i];
            if (img["t262"] && img["t262"][0] == 6) img["t262"][0] = 2;
        };
        UTIF2.decode._decodePackBits = function(data, off, len, tgt, toff) {
            var sa = new Int8Array(data.buffer), ta = new Int8Array(tgt.buffer), lim = off + len;
            while(off < lim){
                var n = sa[off];
                off++;
                if (n >= 0 && n < 128) for(var i = 0; i < n + 1; i++){
                    ta[toff] = sa[off];
                    toff++;
                    off++;
                }
                if (n >= -127 && n < 0) {
                    for(var i = 0; i < -n + 1; i++){
                        ta[toff] = sa[off];
                        toff++;
                    }
                    off++;
                }
            }
            return toff;
        };
        UTIF2.decode._decodeThunder = function(data, off, len, tgt, toff) {
            var d2 = [
                0,
                1,
                0,
                -1
            ], d3 = [
                0,
                1,
                2,
                3,
                0,
                -3,
                -2,
                -1
            ];
            var lim = off + len, qoff = toff * 2, px = 0;
            while(off < lim){
                var b2 = data[off], msk = b2 >>> 6, n = b2 & 63;
                off++;
                if (msk == 3) {
                    px = n & 15;
                    tgt[qoff >>> 1] |= px << 4 * (1 - qoff & 1);
                    qoff++;
                }
                if (msk == 0) for(var i = 0; i < n; i++){
                    tgt[qoff >>> 1] |= px << 4 * (1 - qoff & 1);
                    qoff++;
                }
                if (msk == 2) for(var i = 0; i < 2; i++){
                    var d = n >>> 3 * (1 - i) & 7;
                    if (d != 4) {
                        px += d3[d];
                        tgt[qoff >>> 1] |= px << 4 * (1 - qoff & 1);
                        qoff++;
                    }
                }
                if (msk == 1) for(var i = 0; i < 3; i++){
                    var d = n >>> 2 * (2 - i) & 3;
                    if (d != 2) {
                        px += d2[d];
                        tgt[qoff >>> 1] |= px << 4 * (1 - qoff & 1);
                        qoff++;
                    }
                }
            }
        };
        UTIF2.decode._dmap = {
            "1": 0,
            "011": 1,
            "000011": 2,
            "0000011": 3,
            "010": -1,
            "000010": -2,
            "0000010": -3
        };
        UTIF2.decode._lens = (function() {
            var addKeys = function(lens, arr, i0, inc) {
                for(var i = 0; i < arr.length; i++)lens[arr[i]] = i0 + i * inc;
            };
            var termW = "00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100";
            var termB = "0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111";
            var makeW = "11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011";
            var makeB = "0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101";
            var makeA = "00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111";
            termW = termW.split(",");
            termB = termB.split(",");
            makeW = makeW.split(",");
            makeB = makeB.split(",");
            makeA = makeA.split(",");
            var lensW = {}, lensB = {};
            addKeys(lensW, termW, 0, 1);
            addKeys(lensW, makeW, 64, 64);
            addKeys(lensW, makeA, 1792, 64);
            addKeys(lensB, termB, 0, 1);
            addKeys(lensB, makeB, 64, 64);
            addKeys(lensB, makeA, 1792, 64);
            return [
                lensW,
                lensB
            ];
        })();
        UTIF2.decode._decodeG4 = function(data, off, slen, tgt, toff, w2, fo2) {
            var U2 = UTIF2.decode, boff = off << 3, len = 0, wrd = "";
            var line = [], pline = [];
            for(var i = 0; i < w2; i++)pline.push(0);
            pline = U2._makeDiff(pline);
            var a0 = 0, a1 = 0, a2 = 0, b1 = 0, b2 = 0, clr = 0;
            var y = 0, mode = "", toRead = 0;
            var bipl = Math.ceil(w2 / 8) * 8;
            while(boff >>> 3 < off + slen){
                b1 = U2._findDiff(pline, a0 + (a0 == 0 ? 0 : 1), 1 - clr), b2 = U2._findDiff(pline, b1, clr);
                var bit = 0;
                if (fo2 == 1) bit = data[boff >>> 3] >>> 7 - (boff & 7) & 1;
                if (fo2 == 2) bit = data[boff >>> 3] >>> (boff & 7) & 1;
                boff++;
                wrd += bit;
                if (mode == "H") {
                    if (U2._lens[clr][wrd] != null) {
                        var dl = U2._lens[clr][wrd];
                        wrd = "";
                        len += dl;
                        if (dl < 64) {
                            U2._addNtimes(line, len, clr);
                            a0 += len;
                            clr = 1 - clr;
                            len = 0;
                            toRead--;
                            if (toRead == 0) mode = "";
                        }
                    }
                } else {
                    if (wrd == "0001") {
                        wrd = "";
                        U2._addNtimes(line, b2 - a0, clr);
                        a0 = b2;
                    }
                    if (wrd == "001") {
                        wrd = "";
                        mode = "H";
                        toRead = 2;
                    }
                    if (U2._dmap[wrd] != null) {
                        a1 = b1 + U2._dmap[wrd];
                        U2._addNtimes(line, a1 - a0, clr);
                        a0 = a1;
                        wrd = "";
                        clr = 1 - clr;
                    }
                }
                if (line.length == w2 && mode == "") {
                    U2._writeBits(line, tgt, toff * 8 + y * bipl);
                    clr = 0;
                    y++;
                    a0 = 0;
                    pline = U2._makeDiff(line);
                    line = [];
                }
            }
        };
        UTIF2.decode._findDiff = function(line, x, clr) {
            for(var i = 0; i < line.length; i += 2)if (line[i] >= x && line[i + 1] == clr) return line[i];
        };
        UTIF2.decode._makeDiff = function(line) {
            var out = [];
            if (line[0] == 1) out.push(0, 1);
            for(var i = 1; i < line.length; i++)if (line[i - 1] != line[i]) out.push(i, line[i]);
            out.push(line.length, 0, line.length, 1);
            return out;
        };
        UTIF2.decode._decodeG2 = function(data, off, slen, tgt, toff, w2, fo2) {
            var U2 = UTIF2.decode, boff = off << 3, len = 0, wrd = "";
            var line = [];
            var clr = 0;
            var y = 0;
            var bipl = Math.ceil(w2 / 8) * 8;
            while(boff >>> 3 < off + slen){
                var bit = 0;
                if (fo2 == 1) bit = data[boff >>> 3] >>> 7 - (boff & 7) & 1;
                if (fo2 == 2) bit = data[boff >>> 3] >>> (boff & 7) & 1;
                boff++;
                wrd += bit;
                len = U2._lens[clr][wrd];
                if (len != null) {
                    U2._addNtimes(line, len, clr);
                    wrd = "";
                    if (len < 64) clr = 1 - clr;
                    if (line.length == w2) {
                        U2._writeBits(line, tgt, toff * 8 + y * bipl);
                        line = [];
                        y++;
                        clr = 0;
                        if ((boff & 7) != 0) boff += 8 - (boff & 7);
                        if (len >= 64) boff += 8;
                    }
                }
            }
        };
        UTIF2.decode._decodeG3 = function(data, off, slen, tgt, toff, w2, fo2, twoDim) {
            var U2 = UTIF2.decode, boff = off << 3, len = 0, wrd = "";
            var line = [], pline = [];
            for(var i = 0; i < w2; i++)line.push(0);
            var a0 = 0, a1 = 0, a2 = 0, b1 = 0, b2 = 0, clr = 0;
            var y = -1, mode = "", toRead = 0, is1D = true;
            var bipl = Math.ceil(w2 / 8) * 8;
            while(boff >>> 3 < off + slen){
                b1 = U2._findDiff(pline, a0 + (a0 == 0 ? 0 : 1), 1 - clr), b2 = U2._findDiff(pline, b1, clr);
                var bit = 0;
                if (fo2 == 1) bit = data[boff >>> 3] >>> 7 - (boff & 7) & 1;
                if (fo2 == 2) bit = data[boff >>> 3] >>> (boff & 7) & 1;
                boff++;
                wrd += bit;
                if (is1D) {
                    if (U2._lens[clr][wrd] != null) {
                        var dl = U2._lens[clr][wrd];
                        wrd = "";
                        len += dl;
                        if (dl < 64) {
                            U2._addNtimes(line, len, clr);
                            clr = 1 - clr;
                            len = 0;
                        }
                    }
                } else {
                    if (mode == "H") {
                        if (U2._lens[clr][wrd] != null) {
                            var dl = U2._lens[clr][wrd];
                            wrd = "";
                            len += dl;
                            if (dl < 64) {
                                U2._addNtimes(line, len, clr);
                                a0 += len;
                                clr = 1 - clr;
                                len = 0;
                                toRead--;
                                if (toRead == 0) mode = "";
                            }
                        }
                    } else {
                        if (wrd == "0001") {
                            wrd = "";
                            U2._addNtimes(line, b2 - a0, clr);
                            a0 = b2;
                        }
                        if (wrd == "001") {
                            wrd = "";
                            mode = "H";
                            toRead = 2;
                        }
                        if (U2._dmap[wrd] != null) {
                            a1 = b1 + U2._dmap[wrd];
                            U2._addNtimes(line, a1 - a0, clr);
                            a0 = a1;
                            wrd = "";
                            clr = 1 - clr;
                        }
                    }
                }
                if (wrd.endsWith("000000000001")) {
                    if (y >= 0) U2._writeBits(line, tgt, toff * 8 + y * bipl);
                    if (twoDim) {
                        if (fo2 == 1) is1D = (data[boff >>> 3] >>> 7 - (boff & 7) & 1) == 1;
                        if (fo2 == 2) is1D = (data[boff >>> 3] >>> (boff & 7) & 1) == 1;
                        boff++;
                    }
                    wrd = "";
                    clr = 0;
                    y++;
                    a0 = 0;
                    pline = U2._makeDiff(line);
                    line = [];
                }
            }
            if (line.length == w2) U2._writeBits(line, tgt, toff * 8 + y * bipl);
        };
        UTIF2.decode._addNtimes = function(arr, n, val) {
            for(var i = 0; i < n; i++)arr.push(val);
        };
        UTIF2.decode._writeBits = function(bits, tgt, boff) {
            for(var i = 0; i < bits.length; i++)tgt[boff + i >>> 3] |= bits[i] << 7 - (boff + i & 7);
        };
        UTIF2.decode._decodeLZW = UTIF2.decode._decodeLZW = (function() {
            var e, U2, Z2, u2, K2 = 0, V2 = 0, g2 = 0, N2 = 0, O2 = function() {
                var S2 = e >>> 3, A2 = U2[S2] << 16 | U2[S2 + 1] << 8 | U2[S2 + 2], j2 = A2 >>> 24 - (e & 7) - V2 & (1 << V2) - 1;
                e += V2;
                return j2;
            }, h = new Uint32Array(4096 * 4), w2 = 0, m2 = function(S2) {
                if (S2 == w2) return;
                w2 = S2;
                g2 = 1 << S2;
                N2 = g2 + 1;
                for(var A2 = 0; A2 < N2 + 1; A2++){
                    h[4 * A2] = h[4 * A2 + 3] = A2;
                    h[4 * A2 + 1] = 65535;
                    h[4 * A2 + 2] = 1;
                }
            }, i = function(S2) {
                V2 = S2 + 1;
                K2 = N2 + 1;
            }, D = function(S2) {
                var A2 = S2 << 2, j2 = h[A2 + 2], a = u2 + j2 - 1;
                while(A2 != 65535){
                    Z2[a--] = h[A2];
                    A2 = h[A2 + 1];
                }
                u2 += j2;
            }, L2 = function(S2, A2) {
                var j2 = K2 << 2, a = S2 << 2;
                h[j2] = h[(A2 << 2) + 3];
                h[j2 + 1] = a;
                h[j2 + 2] = h[a + 2] + 1;
                h[j2 + 3] = h[a + 3];
                K2++;
                if (K2 + 1 == 1 << V2 && V2 != 12) V2++;
            }, T = function(S2, A2, j2, a, n, q2) {
                e = A2 << 3;
                U2 = S2;
                Z2 = a;
                u2 = n;
                var B2 = A2 + j2 << 3, _2 = 0, t = 0;
                m2(q2);
                i(q2);
                while(e < B2 && (_2 = O2()) != N2){
                    if (_2 == g2) {
                        i(q2);
                        _2 = O2();
                        if (_2 == N2) break;
                        D(_2);
                    } else {
                        if (_2 < K2) {
                            D(_2);
                            L2(t, _2);
                        } else {
                            L2(t, t);
                            D(K2 - 1);
                        }
                    }
                    t = _2;
                }
                return u2;
            };
            return T;
        })();
        UTIF2.tags = {};
        UTIF2._types = (function() {
            var main = new Array(250);
            main.fill(0);
            main = main.concat([
                0,
                0,
                0,
                0,
                4,
                3,
                3,
                3,
                3,
                3,
                0,
                0,
                3,
                0,
                0,
                0,
                3,
                0,
                0,
                2,
                2,
                2,
                2,
                4,
                3,
                0,
                0,
                3,
                4,
                4,
                3,
                3,
                5,
                5,
                3,
                2,
                5,
                5,
                0,
                0,
                0,
                0,
                4,
                4,
                0,
                0,
                3,
                3,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2,
                2,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2,
                2,
                3,
                5,
                5,
                3,
                0,
                3,
                3,
                4,
                4,
                4,
                3,
                4,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                3,
                3,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                7,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                4,
                4,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                3,
                3,
                5,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                7,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]);
            var rest = {
                33432: 2,
                33434: 5,
                33437: 5,
                34665: 4,
                34850: 3,
                34853: 4,
                34855: 3,
                34864: 3,
                34866: 4,
                36864: 7,
                36867: 2,
                36868: 2,
                37121: 7,
                37377: 10,
                37378: 5,
                37380: 10,
                37381: 5,
                37383: 3,
                37384: 3,
                37385: 3,
                37386: 5,
                37510: 7,
                37520: 2,
                37521: 2,
                37522: 2,
                40960: 7,
                40961: 3,
                40962: 4,
                40963: 4,
                40965: 4,
                41486: 5,
                41487: 5,
                41488: 3,
                41985: 3,
                41986: 3,
                41987: 3,
                41988: 5,
                41989: 3,
                41990: 3,
                41993: 3,
                41994: 3,
                41995: 7,
                41996: 3,
                42032: 2,
                42033: 2,
                42034: 5,
                42036: 2,
                42037: 2,
                59932: 7
            };
            return {
                basic: {
                    main,
                    rest
                },
                gps: {
                    main: [
                        1,
                        2,
                        5,
                        2,
                        5,
                        1,
                        5,
                        5,
                        0,
                        9
                    ],
                    rest: {
                        18: 2,
                        29: 2
                    }
                }
            };
        })();
        UTIF2._readIFD = function(bin, data, offset, ifds, depth, prm) {
            var cnt = bin.readUshort(data, offset);
            offset += 2;
            var ifd = {};
            if (prm.debug) log5("   ".repeat(depth), ifds.length - 1, ">>>----------------");
            for(var i = 0; i < cnt; i++){
                var tag = bin.readUshort(data, offset);
                offset += 2;
                var type2 = bin.readUshort(data, offset);
                offset += 2;
                var num = bin.readUint(data, offset);
                offset += 4;
                var voff = bin.readUint(data, offset);
                offset += 4;
                var arr = [];
                if (type2 == 1 || type2 == 7) {
                    var no2 = num < 5 ? offset - 4 : voff;
                    if (no2 + num > data.buffer.byteLength) num = data.buffer.byteLength - no2;
                    arr = new Uint8Array(data.buffer, no2, num);
                }
                if (type2 == 2) {
                    var o0 = num < 5 ? offset - 4 : voff, c = data[o0], len = Math.max(0, Math.min(num - 1, data.length - o0));
                    if (c < 128 || len == 0) arr.push(bin.readASCII(data, o0, len));
                    else arr = new Uint8Array(data.buffer, o0, len);
                }
                if (type2 == 3) {
                    for(var j2 = 0; j2 < num; j2++)arr.push(bin.readUshort(data, (num < 3 ? offset - 4 : voff) + 2 * j2));
                }
                if (type2 == 4 || type2 == 13) {
                    for(var j2 = 0; j2 < num; j2++)arr.push(bin.readUint(data, (num < 2 ? offset - 4 : voff) + 4 * j2));
                }
                if (type2 == 5 || type2 == 10) {
                    var ri2 = type2 == 5 ? bin.readUint : bin.readInt;
                    for(var j2 = 0; j2 < num; j2++)arr.push([
                        ri2(data, voff + j2 * 8),
                        ri2(data, voff + j2 * 8 + 4)
                    ]);
                }
                if (type2 == 8) {
                    for(var j2 = 0; j2 < num; j2++)arr.push(bin.readShort(data, (num < 3 ? offset - 4 : voff) + 2 * j2));
                }
                if (type2 == 9) {
                    for(var j2 = 0; j2 < num; j2++)arr.push(bin.readInt(data, (num < 2 ? offset - 4 : voff) + 4 * j2));
                }
                if (type2 == 11) {
                    for(var j2 = 0; j2 < num; j2++)arr.push(bin.readFloat(data, voff + j2 * 4));
                }
                if (type2 == 12) {
                    for(var j2 = 0; j2 < num; j2++)arr.push(bin.readDouble(data, voff + j2 * 8));
                }
                if (num != 0 && arr.length == 0) {
                    log5(tag, "unknown TIFF tag type: ", type2, "num:", num);
                    if (i == 0) return;
                    continue;
                }
                if (prm.debug) log5("   ".repeat(depth), tag, type2, UTIF2.tags[tag], arr);
                ifd["t" + tag] = arr;
                if (tag == 330 && ifd["t272"] && ifd["t272"][0] == "DSLR-A100") {} else if (tag == 330 || tag == 34665 || tag == 34853 || tag == 50740 && bin.readUshort(data, bin.readUint(arr, 0)) < 300 || tag == 61440) {
                    var oarr = tag == 50740 ? [
                        bin.readUint(arr, 0)
                    ] : arr;
                    var subfd = [];
                    for(var j2 = 0; j2 < oarr.length; j2++)UTIF2._readIFD(bin, data, oarr[j2], subfd, depth + 1, prm);
                    if (tag == 330) ifd.subIFD = subfd;
                    if (tag == 34665) ifd.exifIFD = subfd[0];
                    if (tag == 34853) ifd.gpsiIFD = subfd[0];
                    if (tag == 50740) ifd.dngPrvt = subfd[0];
                    if (tag == 61440) ifd.fujiIFD = subfd[0];
                }
                if (tag == 37500 && prm.parseMN) {
                    var mn2 = arr;
                    if (bin.readASCII(mn2, 0, 5) == "Nikon") ifd.makerNote = UTIF2["decode"](mn2.slice(10).buffer)[0];
                    else if (bin.readASCII(mn2, 0, 5) == "OLYMP" || bin.readASCII(mn2, 0, 9) == "OM SYSTEM") {
                        var inds = [
                            8208,
                            8224,
                            8240,
                            8256,
                            8272
                        ];
                        var subsub = [];
                        UTIF2._readIFD(bin, mn2, mn2[1] == 77 ? 16 : mn2[5] == 85 ? 12 : 8, subsub, depth + 1, prm);
                        var obj = ifd.makerNote = subsub.pop();
                        for(var j2 = 0; j2 < inds.length; j2++){
                            var k2 = "t" + inds[j2];
                            if (obj[k2] == null) continue;
                            UTIF2._readIFD(bin, mn2, obj[k2][0], subsub, depth + 1, prm);
                            obj[k2] = subsub.pop();
                        }
                        if (obj["t12288"]) {
                            UTIF2._readIFD(bin, obj["t12288"], 0, subsub, depth + 1, prm);
                            obj["t12288"] = subsub.pop();
                        }
                    } else if (bin.readUshort(data, voff) < 300 && bin.readUshort(data, voff + 4) <= 12) {
                        var subsub = [];
                        UTIF2._readIFD(bin, data, voff, subsub, depth + 1, prm);
                        ifd.makerNote = subsub[0];
                    }
                }
            }
            ifds.push(ifd);
            if (prm.debug) log5("   ".repeat(depth), "<<<---------------");
            return offset;
        };
        UTIF2._writeIFD = function(bin, types3, data, offset, ifd) {
            var keys = Object.keys(ifd), knum = keys.length;
            if (ifd["exifIFD"]) knum--;
            if (ifd["gpsiIFD"]) knum--;
            bin.writeUshort(data, offset, knum);
            offset += 2;
            var eoff = offset + knum * 12 + 4;
            for(var ki2 = 0; ki2 < keys.length; ki2++){
                var key = keys[ki2];
                if (key == "t34665" || key == "t34853") continue;
                if (key == "exifIFD") key = "t34665";
                if (key == "gpsiIFD") key = "t34853";
                var tag = parseInt(key.slice(1)), type2 = types3.main[tag];
                if (type2 == null) type2 = types3.rest[tag];
                if (type2 == null || type2 == 0) throw new Error("unknown type of tag: " + tag);
                var val = ifd[key];
                if (tag == 34665) {
                    var outp = UTIF2._writeIFD(bin, types3, data, eoff, ifd["exifIFD"]);
                    val = [
                        eoff
                    ];
                    eoff = outp[1];
                }
                if (tag == 34853) {
                    var outp = UTIF2._writeIFD(bin, UTIF2._types.gps, data, eoff, ifd["gpsiIFD"]);
                    val = [
                        eoff
                    ];
                    eoff = outp[1];
                }
                if (type2 == 2) val = val[0] + "\0";
                var num = val.length;
                bin.writeUshort(data, offset, tag);
                offset += 2;
                bin.writeUshort(data, offset, type2);
                offset += 2;
                bin.writeUint(data, offset, num);
                offset += 4;
                var dlen = [
                    -1,
                    1,
                    1,
                    2,
                    4,
                    8,
                    0,
                    1,
                    0,
                    4,
                    8,
                    0,
                    8
                ][type2] * num;
                var toff = offset;
                if (dlen > 4) {
                    bin.writeUint(data, offset, eoff);
                    toff = eoff;
                }
                if (type2 == 1 || type2 == 7) {
                    for(var i = 0; i < num; i++)data[toff + i] = val[i];
                } else if (type2 == 2) {
                    bin.writeASCII(data, toff, val);
                } else if (type2 == 3) {
                    for(var i = 0; i < num; i++)bin.writeUshort(data, toff + 2 * i, val[i]);
                } else if (type2 == 4) {
                    for(var i = 0; i < num; i++)bin.writeUint(data, toff + 4 * i, val[i]);
                } else if (type2 == 5 || type2 == 10) {
                    var wr2 = type2 == 5 ? bin.writeUint : bin.writeInt;
                    for(var i = 0; i < num; i++){
                        var v2 = val[i], nu = v2[0], de2 = v2[1];
                        if (nu == null) throw "e";
                        wr2(data, toff + 8 * i, nu);
                        wr2(data, toff + 8 * i + 4, de2);
                    }
                } else if (type2 == 9) {
                    for(var i = 0; i < num; i++)bin.writeInt(data, toff + 4 * i, val[i]);
                } else if (type2 == 12) {
                    for(var i = 0; i < num; i++)bin.writeDouble(data, toff + 8 * i, val[i]);
                } else throw type2;
                if (dlen > 4) {
                    dlen += dlen & 1;
                    eoff += dlen;
                }
                offset += 4;
            }
            return [
                offset,
                eoff
            ];
        };
        UTIF2.toRGBA8 = function(out, scl) {
            function gamma(x2) {
                return x2 < 31308e-7 ? 12.92 * x2 : 1.055 * Math.pow(x2, 1 / 2.4) - 0.055;
            }
            var w2 = out.width, h = out.height, area = w2 * h, qarea = area * 4, data = out.data;
            var img = new Uint8Array(area * 4);
            var intp = out["t262"] ? out["t262"][0] : 2, bps = out["t258"] ? Math.min(32, out["t258"][0]) : 1;
            if (out["t262"] == null && bps == 1) intp = 0;
            var smpls = out["t277"] ? out["t277"][0] : out["t258"] ? out["t258"].length : [
                1,
                1,
                3,
                1,
                1,
                4,
                3
            ][intp];
            var sfmt = out["t339"] ? out["t339"][0] : null;
            if (intp == 1 && bps == 32 && sfmt != 3) throw "e";
            var bpl = Math.ceil(smpls * bps * w2 / 8);
            if (false) {} else if (intp == 0) {
                scl = 1 / 256;
                for(var y = 0; y < h; y++){
                    var off = y * bpl, io2 = y * w2;
                    if (bps == 1) for(var i = 0; i < w2; i++){
                        var qi2 = io2 + i << 2, px = data[off + (i >> 3)] >> 7 - (i & 7) & 1;
                        img[qi2] = img[qi2 + 1] = img[qi2 + 2] = (1 - px) * 255;
                        img[qi2 + 3] = 255;
                    }
                    if (bps == 4) for(var i = 0; i < w2; i++){
                        var qi2 = io2 + i << 2, px = data[off + (i >> 1)] >> 4 - 4 * (i & 1) & 15;
                        img[qi2] = img[qi2 + 1] = img[qi2 + 2] = (15 - px) * 17;
                        img[qi2 + 3] = 255;
                    }
                    if (bps == 8) for(var i = 0; i < w2; i++){
                        var qi2 = io2 + i << 2, px = data[off + i];
                        img[qi2] = img[qi2 + 1] = img[qi2 + 2] = 255 - px;
                        img[qi2 + 3] = 255;
                    }
                    if (bps == 16) for(var i = 0; i < w2; i++){
                        var qi2 = io2 + i << 2, o = off + 2 * i, px = data[o + 1] << 8 | data[o];
                        img[qi2] = img[qi2 + 1] = img[qi2 + 2] = Math.min(255, 255 - ~~(px * scl));
                        img[qi2 + 3] = 255;
                    }
                }
            } else if (intp == 1) {
                if (scl == null) scl = 1 / 256;
                var f32 = (data.length & 3) == 0 ? new Float32Array(data.buffer) : null;
                for(var y = 0; y < h; y++){
                    var off = y * bpl, io2 = y * w2;
                    if (bps == 1) for(var i = 0; i < w2; i++){
                        var qi2 = io2 + i << 2, px = data[off + (i >> 3)] >> 7 - (i & 7) & 1;
                        img[qi2] = img[qi2 + 1] = img[qi2 + 2] = px * 255;
                        img[qi2 + 3] = 255;
                    }
                    if (bps == 2) for(var i = 0; i < w2; i++){
                        var qi2 = io2 + i << 2, px = data[off + (i >> 2)] >> 6 - 2 * (i & 3) & 3;
                        img[qi2] = img[qi2 + 1] = img[qi2 + 2] = px * 85;
                        img[qi2 + 3] = 255;
                    }
                    if (bps == 8) for(var i = 0; i < w2; i++){
                        var qi2 = io2 + i << 2, px = data[off + i * smpls];
                        img[qi2] = img[qi2 + 1] = img[qi2 + 2] = px;
                        img[qi2 + 3] = 255;
                    }
                    if (bps == 16) for(var i = 0; i < w2; i++){
                        var qi2 = io2 + i << 2, o = off + 2 * i, px = data[o + 1] << 8 | data[o];
                        img[qi2] = img[qi2 + 1] = img[qi2 + 2] = Math.min(255, ~~(px * scl));
                        img[qi2 + 3] = 255;
                    }
                    if (bps == 32) for(var i = 0; i < w2; i++){
                        var qi2 = io2 + i << 2, o = (off >>> 2) + i, px = f32[o];
                        img[qi2] = img[qi2 + 1] = img[qi2 + 2] = ~~(0.5 + 255 * px);
                        img[qi2 + 3] = 255;
                    }
                }
            } else if (intp == 2) {
                if (bps == 8) {
                    if (smpls == 1) for(var i = 0; i < area; i++){
                        img[4 * i] = img[4 * i + 1] = img[4 * i + 2] = data[i];
                        img[4 * i + 3] = 255;
                    }
                    if (smpls == 3) for(var i = 0; i < area; i++){
                        var qi2 = i << 2, ti2 = i * 3;
                        img[qi2] = data[ti2];
                        img[qi2 + 1] = data[ti2 + 1];
                        img[qi2 + 2] = data[ti2 + 2];
                        img[qi2 + 3] = 255;
                    }
                    if (smpls >= 4) for(var i = 0; i < area; i++){
                        var qi2 = i << 2, ti2 = i * smpls;
                        img[qi2] = data[ti2];
                        img[qi2 + 1] = data[ti2 + 1];
                        img[qi2 + 2] = data[ti2 + 2];
                        img[qi2 + 3] = data[ti2 + 3];
                    }
                } else if (bps == 16) {
                    if (smpls == 4) for(var i = 0; i < area; i++){
                        var qi2 = i << 2, ti2 = i * 8 + 1;
                        img[qi2] = data[ti2];
                        img[qi2 + 1] = data[ti2 + 2];
                        img[qi2 + 2] = data[ti2 + 4];
                        img[qi2 + 3] = data[ti2 + 6];
                    }
                    if (smpls == 3) for(var i = 0; i < area; i++){
                        var qi2 = i << 2, ti2 = i * 6 + 1;
                        img[qi2] = data[ti2];
                        img[qi2 + 1] = data[ti2 + 2];
                        img[qi2 + 2] = data[ti2 + 4];
                        img[qi2 + 3] = 255;
                    }
                } else if (bps == 32) {
                    var ndt = new Float32Array(data.buffer);
                    var min = 0;
                    for(var i = 0; i < ndt.length; i++)min = Math.min(min, ndt[i]);
                    if (min < 0) for(var i = 0; i < data.length; i += 4){
                        var t = data[i];
                        data[i] = data[i + 3];
                        data[i + 3] = t;
                        t = data[i + 1];
                        data[i + 1] = data[i + 2];
                        data[i + 2] = t;
                    }
                    var pmap = [];
                    for(var i = 0; i < 65536; i++)pmap.push(gamma(i / 65535));
                    for(var i = 0; i < ndt.length; i++){
                        var cv = Math.max(0, Math.min(1, ndt[i]));
                        ndt[i] = pmap[~~(0.5 + cv * 65535)];
                    }
                    if (smpls == 3) for(var i = 0; i < area; i++){
                        var qi2 = i << 2, ti2 = i * 3;
                        img[qi2] = ~~(0.5 + ndt[ti2] * 255);
                        img[qi2 + 1] = ~~(0.5 + ndt[ti2 + 1] * 255);
                        img[qi2 + 2] = ~~(0.5 + ndt[ti2 + 2] * 255);
                        img[qi2 + 3] = 255;
                    }
                    else if (smpls == 4) for(var i = 0; i < area; i++){
                        var qi2 = i << 2, ti2 = i * 4;
                        img[qi2] = ~~(0.5 + ndt[ti2] * 255);
                        img[qi2 + 1] = ~~(0.5 + ndt[ti2 + 1] * 255);
                        img[qi2 + 2] = ~~(0.5 + ndt[ti2 + 2] * 255);
                        img[qi2 + 3] = ~~(0.5 + ndt[ti2 + 3] * 255);
                    }
                    else throw smpls;
                } else throw bps;
            } else if (intp == 3) {
                var map4 = out["t320"];
                var cn2 = 1 << bps;
                var nexta = bps == 8 && smpls > 1 && out["t338"] && out["t338"][0] != 0;
                for(var y = 0; y < h; y++)for(var x = 0; x < w2; x++){
                    var i = y * w2 + x;
                    var qi2 = i << 2, mi2 = 0;
                    var dof = y * bpl;
                    if (false) {} else if (bps == 1) mi2 = data[dof + (x >>> 3)] >>> 7 - (x & 7) & 1;
                    else if (bps == 2) mi2 = data[dof + (x >>> 2)] >>> 6 - 2 * (x & 3) & 3;
                    else if (bps == 4) mi2 = data[dof + (x >>> 1)] >>> 4 - 4 * (x & 1) & 15;
                    else if (bps == 8) mi2 = data[dof + x * smpls];
                    else throw bps;
                    img[qi2] = map4[mi2] >> 8;
                    img[qi2 + 1] = map4[cn2 + mi2] >> 8;
                    img[qi2 + 2] = map4[cn2 + cn2 + mi2] >> 8;
                    img[qi2 + 3] = nexta ? data[dof + x * smpls + 1] : 255;
                }
            } else if (intp == 5) {
                var gotAlpha = smpls > 4 ? 1 : 0;
                for(var i = 0; i < area; i++){
                    var qi2 = i << 2, si2 = i * smpls;
                    if (window.UDOC) {
                        var C2 = data[si2], M2 = data[si2 + 1], Y2 = data[si2 + 2], K2 = data[si2 + 3];
                        var c = UDOC.C.cmykToRgb([
                            C2 * (1 / 255),
                            M2 * (1 / 255),
                            Y2 * (1 / 255),
                            K2 * (1 / 255)
                        ]);
                        img[qi2] = ~~(0.5 + 255 * c[0]);
                        img[qi2 + 1] = ~~(0.5 + 255 * c[1]);
                        img[qi2 + 2] = ~~(0.5 + 255 * c[2]);
                    } else {
                        var C2 = 255 - data[si2], M2 = 255 - data[si2 + 1], Y2 = 255 - data[si2 + 2], K2 = (255 - data[si2 + 3]) * (1 / 255);
                        img[qi2] = ~~(C2 * K2 + 0.5);
                        img[qi2 + 1] = ~~(M2 * K2 + 0.5);
                        img[qi2 + 2] = ~~(Y2 * K2 + 0.5);
                    }
                    img[qi2 + 3] = 255 * (1 - gotAlpha) + data[si2 + 4] * gotAlpha;
                }
            } else if (intp == 6 && out["t278"]) {
                var rps = out["t278"][0];
                for(var y = 0; y < h; y += rps){
                    var i = y * w2, len = rps * w2;
                    for(var j2 = 0; j2 < len; j2++){
                        var qi2 = 4 * (i + j2), si2 = 3 * i + 4 * (j2 >>> 1);
                        var Y2 = data[si2 + (j2 & 1)], Cb = data[si2 + 2] - 128, Cr2 = data[si2 + 3] - 128;
                        var r = Y2 + ((Cr2 >> 2) + (Cr2 >> 3) + (Cr2 >> 5));
                        var g2 = Y2 - ((Cb >> 2) + (Cb >> 4) + (Cb >> 5)) - ((Cr2 >> 1) + (Cr2 >> 3) + (Cr2 >> 4) + (Cr2 >> 5));
                        var b2 = Y2 + (Cb + (Cb >> 1) + (Cb >> 2) + (Cb >> 6));
                        img[qi2] = Math.max(0, Math.min(255, r));
                        img[qi2 + 1] = Math.max(0, Math.min(255, g2));
                        img[qi2 + 2] = Math.max(0, Math.min(255, b2));
                        img[qi2 + 3] = 255;
                    }
                }
            } else if (intp == 32845) {
                for(var y = 0; y < h; y++)for(var x = 0; x < w2; x++){
                    var si2 = (y * w2 + x) * 6, qi2 = (y * w2 + x) * 4;
                    var L2 = data[si2 + 1] << 8 | data[si2];
                    var L2 = Math.pow(2, (L2 + 0.5) / 256 - 64);
                    var u2 = (data[si2 + 3] + 0.5) / 410;
                    var v2 = (data[si2 + 5] + 0.5) / 410;
                    var sX = 9 * u2 / (6 * u2 - 16 * v2 + 12);
                    var sY = 4 * v2 / (6 * u2 - 16 * v2 + 12);
                    var bY = L2;
                    var X2 = sX * bY / sY, Y2 = bY, Z2 = (1 - sX - sY) * bY / sY;
                    var r = 2.69 * X2 - 1.276 * Y2 - 0.414 * Z2;
                    var g2 = -1.022 * X2 + 1.978 * Y2 + 0.044 * Z2;
                    var b2 = 0.061 * X2 - 0.224 * Y2 + 1.163 * Z2;
                    img[qi2] = gamma(Math.min(r, 1)) * 255;
                    img[qi2 + 1] = gamma(Math.min(g2, 1)) * 255;
                    img[qi2 + 2] = gamma(Math.min(b2, 1)) * 255;
                    img[qi2 + 3] = 255;
                }
            } else log5("Unknown Photometric interpretation: " + intp);
            return img;
        };
        UTIF2.replaceIMG = function(imgs) {
            if (imgs == null) imgs = document.getElementsByTagName("img");
            var sufs = [
                "tif",
                "tiff",
                "dng",
                "cr2",
                "nef"
            ];
            for(var i = 0; i < imgs.length; i++){
                var img = imgs[i], src = img.getAttribute("src");
                if (src == null) continue;
                var suff = src.split(".").pop().toLowerCase();
                if (sufs.indexOf(suff) == -1) continue;
                var xhr = new XMLHttpRequest();
                UTIF2._xhrs.push(xhr);
                UTIF2._imgs.push(img);
                xhr.open("GET", src);
                xhr.responseType = "arraybuffer";
                xhr.onload = UTIF2._imgLoaded;
                xhr.send();
            }
        };
        UTIF2._xhrs = [];
        UTIF2._imgs = [];
        UTIF2._imgLoaded = function(e) {
            var ind = UTIF2._xhrs.indexOf(e.target), img = UTIF2._imgs[ind];
            UTIF2._xhrs.splice(ind, 1);
            UTIF2._imgs.splice(ind, 1);
            img.setAttribute("src", UTIF2.bufferToURI(e.target.response));
        };
        UTIF2.bufferToURI = function(buff) {
            var ifds = UTIF2.decode(buff);
            var vsns = ifds, ma = 0, page = vsns[0];
            if (ifds[0].subIFD) vsns = vsns.concat(ifds[0].subIFD);
            for(var i = 0; i < vsns.length; i++){
                var img = vsns[i];
                if (img["t258"] == null || img["t258"].length < 3) continue;
                var ar2 = img["t256"] * img["t257"];
                if (ar2 > ma) {
                    ma = ar2;
                    page = img;
                }
            }
            UTIF2.decodeImage(buff, page, ifds);
            var rgba = UTIF2.toRGBA8(page), w2 = page.width, h = page.height;
            var cnv = document.createElement("canvas");
            cnv.width = w2;
            cnv.height = h;
            var ctx = cnv.getContext("2d");
            var imgd = new ImageData(new Uint8ClampedArray(rgba.buffer), w2, h);
            ctx.putImageData(imgd, 0, 0);
            return cnv.toDataURL();
        };
        UTIF2._binBE = {
            nextZero: function(data, o) {
                while(data[o] != 0)o++;
                return o;
            },
            readUshort: function(buff, p2) {
                return buff[p2] << 8 | buff[p2 + 1];
            },
            readShort: function(buff, p2) {
                var a = UTIF2._binBE.ui8;
                a[0] = buff[p2 + 1];
                a[1] = buff[p2 + 0];
                return UTIF2._binBE.i16[0];
            },
            readInt: function(buff, p2) {
                var a = UTIF2._binBE.ui8;
                a[0] = buff[p2 + 3];
                a[1] = buff[p2 + 2];
                a[2] = buff[p2 + 1];
                a[3] = buff[p2 + 0];
                return UTIF2._binBE.i32[0];
            },
            readUint: function(buff, p2) {
                var a = UTIF2._binBE.ui8;
                a[0] = buff[p2 + 3];
                a[1] = buff[p2 + 2];
                a[2] = buff[p2 + 1];
                a[3] = buff[p2 + 0];
                return UTIF2._binBE.ui32[0];
            },
            readASCII: function(buff, p2, l) {
                var s3 = "";
                for(var i = 0; i < l; i++)s3 += String.fromCharCode(buff[p2 + i]);
                return s3;
            },
            readFloat: function(buff, p2) {
                var a = UTIF2._binBE.ui8;
                for(var i = 0; i < 4; i++)a[i] = buff[p2 + 3 - i];
                return UTIF2._binBE.fl32[0];
            },
            readDouble: function(buff, p2) {
                var a = UTIF2._binBE.ui8;
                for(var i = 0; i < 8; i++)a[i] = buff[p2 + 7 - i];
                return UTIF2._binBE.fl64[0];
            },
            writeUshort: function(buff, p2, n) {
                buff[p2] = n >> 8 & 255;
                buff[p2 + 1] = n & 255;
            },
            writeInt: function(buff, p2, n) {
                var a = UTIF2._binBE.ui8;
                UTIF2._binBE.i32[0] = n;
                buff[p2 + 3] = a[0];
                buff[p2 + 2] = a[1];
                buff[p2 + 1] = a[2];
                buff[p2 + 0] = a[3];
            },
            writeUint: function(buff, p2, n) {
                buff[p2] = n >> 24 & 255;
                buff[p2 + 1] = n >> 16 & 255;
                buff[p2 + 2] = n >> 8 & 255;
                buff[p2 + 3] = n >> 0 & 255;
            },
            writeASCII: function(buff, p2, s3) {
                for(var i = 0; i < s3.length; i++)buff[p2 + i] = s3.charCodeAt(i);
            },
            writeDouble: function(buff, p2, n) {
                UTIF2._binBE.fl64[0] = n;
                for(var i = 0; i < 8; i++)buff[p2 + i] = UTIF2._binBE.ui8[7 - i];
            }
        };
        UTIF2._binBE.ui8 = new Uint8Array(8);
        UTIF2._binBE.i16 = new Int16Array(UTIF2._binBE.ui8.buffer);
        UTIF2._binBE.i32 = new Int32Array(UTIF2._binBE.ui8.buffer);
        UTIF2._binBE.ui32 = new Uint32Array(UTIF2._binBE.ui8.buffer);
        UTIF2._binBE.fl32 = new Float32Array(UTIF2._binBE.ui8.buffer);
        UTIF2._binBE.fl64 = new Float64Array(UTIF2._binBE.ui8.buffer);
        UTIF2._binLE = {
            nextZero: UTIF2._binBE.nextZero,
            readUshort: function(buff, p2) {
                return buff[p2 + 1] << 8 | buff[p2];
            },
            readShort: function(buff, p2) {
                var a = UTIF2._binBE.ui8;
                a[0] = buff[p2 + 0];
                a[1] = buff[p2 + 1];
                return UTIF2._binBE.i16[0];
            },
            readInt: function(buff, p2) {
                var a = UTIF2._binBE.ui8;
                a[0] = buff[p2 + 0];
                a[1] = buff[p2 + 1];
                a[2] = buff[p2 + 2];
                a[3] = buff[p2 + 3];
                return UTIF2._binBE.i32[0];
            },
            readUint: function(buff, p2) {
                var a = UTIF2._binBE.ui8;
                a[0] = buff[p2 + 0];
                a[1] = buff[p2 + 1];
                a[2] = buff[p2 + 2];
                a[3] = buff[p2 + 3];
                return UTIF2._binBE.ui32[0];
            },
            readASCII: UTIF2._binBE.readASCII,
            readFloat: function(buff, p2) {
                var a = UTIF2._binBE.ui8;
                for(var i = 0; i < 4; i++)a[i] = buff[p2 + i];
                return UTIF2._binBE.fl32[0];
            },
            readDouble: function(buff, p2) {
                var a = UTIF2._binBE.ui8;
                for(var i = 0; i < 8; i++)a[i] = buff[p2 + i];
                return UTIF2._binBE.fl64[0];
            },
            writeUshort: function(buff, p2, n) {
                buff[p2] = n & 255;
                buff[p2 + 1] = n >> 8 & 255;
            },
            writeInt: function(buff, p2, n) {
                var a = UTIF2._binBE.ui8;
                UTIF2._binBE.i32[0] = n;
                buff[p2 + 0] = a[0];
                buff[p2 + 1] = a[1];
                buff[p2 + 2] = a[2];
                buff[p2 + 3] = a[3];
            },
            writeUint: function(buff, p2, n) {
                buff[p2] = n >>> 0 & 255;
                buff[p2 + 1] = n >>> 8 & 255;
                buff[p2 + 2] = n >>> 16 & 255;
                buff[p2 + 3] = n >>> 24 & 255;
            },
            writeASCII: UTIF2._binBE.writeASCII
        };
        UTIF2._copyTile = function(tb, tw, th, b2, w2, h, xoff, yoff) {
            var xlim = Math.min(tw, w2 - xoff);
            var ylim = Math.min(th, h - yoff);
            for(var y = 0; y < ylim; y++){
                var tof = (yoff + y) * w2 + xoff;
                var sof = y * tw;
                for(var x = 0; x < xlim; x++)b2[tof + x] = tb[sof + x];
            }
        };
        UTIF2.LosslessJpegDecode = (function() {
            var b2, O2;
            function l() {
                return b2[O2++];
            }
            function m2() {
                return b2[O2++] << 8 | b2[O2++];
            }
            function a0(h) {
                var V2 = l(), I2 = [
                    0,
                    0,
                    0,
                    255
                ], f2 = [], G2 = 8;
                for(var w2 = 0; w2 < 16; w2++)f2[w2] = l();
                for(var w2 = 0; w2 < 16; w2++){
                    for(var x = 0; x < f2[w2]; x++){
                        var T = z2(I2, 0, w2 + 1, 1);
                        I2[T + 3] = l();
                    }
                }
                var E = new Uint8Array(1 << G2);
                h[V2] = [
                    new Uint8Array(I2),
                    E
                ];
                for(var w2 = 0; w2 < 1 << G2; w2++){
                    var s3 = G2, _2 = w2, Y2 = 0, F2 = 0;
                    while(I2[Y2 + 3] == 255 && s3 != 0){
                        F2 = _2 >> --s3 & 1;
                        Y2 = I2[Y2 + F2];
                    }
                    E[w2] = Y2;
                }
            }
            function z2(h, V2, I2, f2) {
                if (h[V2 + 3] != 255) return 0;
                if (I2 == 0) return V2;
                for(var w2 = 0; w2 < 2; w2++){
                    if (h[V2 + w2] == 0) {
                        h[V2 + w2] = h.length;
                        h.push(0, 0, f2, 255);
                    }
                    var x = z2(h, h[V2 + w2], I2 - 1, f2 + 1);
                    if (x != 0) return x;
                }
                return 0;
            }
            function i(h) {
                var V2 = h.b, I2 = h.f;
                while(V2 < 25 && h.a < h.d){
                    var f2 = h.data[h.a++];
                    if (f2 == 255 && !h.c) h.a++;
                    I2 = I2 << 8 | f2;
                    V2 += 8;
                }
                if (V2 < 0) throw "e";
                h.b = V2;
                h.f = I2;
            }
            function H2(h, V2) {
                if (V2.b < h) i(V2);
                return V2.f >> (V2.b -= h) & 65535 >> 16 - h;
            }
            function g2(h, V2) {
                var I2 = h[0], f2 = 0, w2 = 255, x = 0;
                if (V2.b < 16) i(V2);
                var T = V2.f >> V2.b - 8 & 255;
                f2 = h[1][T];
                w2 = I2[f2 + 3];
                V2.b -= I2[f2 + 2];
                while(w2 == 255){
                    x = V2.f >> --V2.b & 1;
                    f2 = I2[f2 + x];
                    w2 = I2[f2 + 3];
                }
                return w2;
            }
            function P2(h, V2) {
                if (h < 32768 >> 16 - V2) h += -(1 << V2) + 1;
                return h;
            }
            function a2(h, V2) {
                var I2 = g2(h, V2);
                if (I2 == 0) return 0;
                if (I2 == 16) return -32768;
                var f2 = H2(I2, V2);
                return P2(f2, I2);
            }
            function X2(h, V2, I2, f2, w2, x) {
                var T = 0;
                for(var G2 = 0; G2 < x; G2++){
                    var s3 = G2 * V2;
                    for(var _2 = 0; _2 < V2; _2 += w2){
                        T++;
                        for(var Y2 = 0; Y2 < w2; Y2++)h[s3 + _2 + Y2] = a2(f2[Y2], I2);
                    }
                    if (I2.e != 0 && T % I2.e == 0 && G2 != 0) {
                        var F2 = I2.a, t = I2.data;
                        while(t[F2] != 255 || !(208 <= t[F2 + 1] && t[F2 + 1] <= 215))F2--;
                        I2.a = F2 + 2;
                        I2.f = 0;
                        I2.b = 0;
                    }
                }
            }
            function o(h, V2) {
                return P2(H2(h, V2), h);
            }
            function a1(h, V2, I2, f2, w2) {
                var x = b2.length - O2;
                for(var T = 0; T < x; T += 4){
                    var G2 = b2[O2 + T];
                    b2[O2 + T] = b2[O2 + T + 3];
                    b2[O2 + T + 3] = G2;
                    var G2 = b2[O2 + T + 1];
                    b2[O2 + T + 1] = b2[O2 + T + 2];
                    b2[O2 + T + 2] = G2;
                }
                for(var E = 0; E < w2; E++){
                    var s3 = 32768, _2 = 32768;
                    for(var Y2 = 0; Y2 < V2; Y2 += 2){
                        var F2 = g2(f2, I2), t = g2(f2, I2);
                        if (F2 != 0) s3 += o(F2, I2);
                        if (t != 0) _2 += o(t, I2);
                        h[E * V2 + Y2] = s3 & 65535;
                        h[E * V2 + Y2 + 1] = _2 & 65535;
                    }
                }
            }
            function C2(h) {
                b2 = h;
                O2 = 0;
                if (m2() != 65496) throw "e";
                var V2 = [], I2 = 0, f2 = 0, w2 = 0, x = [], T = [], G2 = [], E = 0, s3 = 0, _2 = 0;
                while(true){
                    var Y2 = m2();
                    if (Y2 == 65535) {
                        O2--;
                        continue;
                    }
                    var F2 = m2();
                    if (Y2 == 65475) {
                        f2 = l();
                        s3 = m2();
                        _2 = m2();
                        E = l();
                        for(var t = 0; t < E; t++){
                            var a = l(), J2 = l(), r = l();
                            if (r != 0) throw "e";
                            V2[a] = [
                                t,
                                J2 >> 4,
                                J2 & 15
                            ];
                        }
                    } else if (Y2 == 65476) {
                        var a3 = O2 + F2 - 2;
                        while(O2 < a3)a0(T);
                    } else if (Y2 == 65498) {
                        O2++;
                        for(var t = 0; t < E; t++){
                            var a5 = l(), v2 = V2[a5];
                            G2[v2[0]] = T[l() >>> 4];
                            x[v2[0]] = v2.slice(1);
                        }
                        I2 = l();
                        O2 += 2;
                        break;
                    } else if (Y2 == 65501) {
                        w2 = m2();
                    } else {
                        O2 += F2 - 2;
                    }
                }
                var a4 = f2 > 8 ? Uint16Array : Uint8Array, $2 = new a4(s3 * _2 * E), M2 = {
                    b: 0,
                    f: 0,
                    c: I2 == 8,
                    a: O2,
                    data: b2,
                    d: b2.length,
                    e: w2
                };
                if (M2.c) a1($2, _2 * E, M2, G2[0], s3);
                else {
                    var c = [], p2 = 0, D = 0;
                    for(var t = 0; t < E; t++){
                        var N2 = x[t], S2 = N2[0], K2 = N2[1];
                        if (S2 > p2) p2 = S2;
                        if (K2 > D) D = K2;
                        c.push(S2 * K2);
                    }
                    if (p2 != 1 || D != 1) {
                        if (E != 3 || c[1] != 1 || c[2] != 1) throw "e";
                        if (p2 != 2 || D != 1 && D != 2) throw "e";
                        var u2 = [], Z2 = 0;
                        for(var t = 0; t < E; t++){
                            for(var R2 = 0; R2 < c[t]; R2++)u2.push(G2[t]);
                            Z2 += c[t];
                        }
                        var B2 = _2 / p2, e = s3 / D, d = B2 * e;
                        X2($2, B2 * Z2, M2, u2, Z2, e);
                        j2($2, I2, B2, e, Z2 - 2, Z2, Z2, f2);
                        var A2 = new Uint16Array(d * c[0]);
                        if (p2 == 2 && D == 2) {
                            for(var t = 0; t < d; t++){
                                A2[4 * t] = $2[6 * t];
                                A2[4 * t + 1] = $2[6 * t + 1];
                                A2[4 * t + 2] = $2[6 * t + 2];
                                A2[4 * t + 3] = $2[6 * t + 3];
                            }
                            j2(A2, I2, B2 * 4, e, 0, 1, 1, f2);
                            for(var t = 0; t < d; t++){
                                $2[6 * t] = A2[4 * t];
                                $2[6 * t + 1] = A2[4 * t + 1];
                                $2[6 * t + 2] = A2[4 * t + 2];
                                $2[6 * t + 3] = A2[4 * t + 3];
                            }
                        }
                        if (p2 == 2 && D == 1) {
                            for(var t = 0; t < d; t++){
                                A2[2 * t] = $2[4 * t];
                                A2[2 * t + 1] = $2[4 * t + 1];
                            }
                            j2(A2, I2, B2 * 2, e, 0, 1, 1, f2);
                            for(var t = 0; t < d; t++){
                                $2[4 * t] = A2[2 * t];
                                $2[4 * t + 1] = A2[2 * t + 1];
                            }
                        }
                        var n = $2.slice(0);
                        for(var K2 = 0; K2 < s3; K2++){
                            if (D == 2) for(var S2 = 0; S2 < _2; S2++){
                                var q2 = (K2 * _2 + S2) * E, k2 = ((K2 >>> 1) * B2 + (S2 >>> 1)) * Z2, y = (K2 & 1) * 2 + (S2 & 1);
                                $2[q2] = n[k2 + y];
                                $2[q2 + 1] = n[k2 + 4];
                                $2[q2 + 2] = n[k2 + 5];
                            }
                            else for(var S2 = 0; S2 < _2; S2++){
                                var q2 = (K2 * _2 + S2) * E, k2 = (K2 * B2 + (S2 >>> 1)) * Z2, y = S2 & 1;
                                $2[q2] = n[k2 + y];
                                $2[q2 + 1] = n[k2 + 2];
                                $2[q2 + 2] = n[k2 + 3];
                            }
                        }
                    } else {
                        X2($2, _2 * E, M2, G2, E, s3);
                        if (w2 == 0) j2($2, I2, _2, s3, 0, E, E, f2);
                        else {
                            var U2 = Math.floor(w2 / _2);
                            for(var K2 = 0; K2 < s3; K2 += U2){
                                var L2 = $2.slice(K2 * _2 * E, (K2 + U2) * _2 * E);
                                j2(L2, I2, _2, U2, 0, E, E, f2);
                                $2.set(L2, K2 * _2 * E);
                            }
                        }
                    }
                }
                return $2;
            }
            function j2(h, V2, I2, f2, w2, x, G2, E) {
                var s3 = I2 * G2;
                for(var _2 = w2; _2 < x; _2++)h[_2] += 1 << E - 1;
                for(var Y2 = G2; Y2 < s3; Y2 += G2)for(var _2 = w2; _2 < x; _2++)h[Y2 + _2] += h[Y2 + _2 - G2];
                for(var F2 = 1; F2 < f2; F2++){
                    var t = F2 * s3;
                    for(var _2 = w2; _2 < x; _2++)h[t + _2] += h[t + _2 - s3];
                    for(var Y2 = G2; Y2 < s3; Y2 += G2){
                        for(var _2 = w2; _2 < x; _2++){
                            var a = t + Y2 + _2, J2 = a - s3, r = h[a - G2], Q2 = 0;
                            if (V2 == 0) Q2 = 0;
                            else if (V2 == 1) Q2 = r;
                            else if (V2 == 2) Q2 = h[J2];
                            else if (V2 == 3) Q2 = h[J2 - G2];
                            else if (V2 == 4) Q2 = r + (h[J2] - h[J2 - G2]);
                            else if (V2 == 5) Q2 = r + (h[J2] - h[J2 - G2] >>> 1);
                            else if (V2 == 6) Q2 = h[J2] + (r - h[J2 - G2] >>> 1);
                            else if (V2 == 7) Q2 = r + h[J2] >>> 1;
                            else throw V2;
                            h[a] += Q2;
                        }
                    }
                }
            }
            return C2;
        })();
        (function() {
            var G2 = 0, F2 = 1, i = 2, b2 = 3, J2 = 4, N2 = 5, E = 6, s3 = 7, c = 8, T = 9, a3 = 10, f2 = 11, q2 = 12, M2 = 13, m2 = 14, x = 15, L2 = 16, $2 = 17, p2 = 18;
            function a5(t) {
                var Z2 = UTIF2._binBE.readUshort, u2 = {
                    b: Z2(t, 0),
                    i: t[2],
                    C: t[3],
                    u: t[4],
                    q: Z2(t, 5),
                    k: Z2(t, 7),
                    e: Z2(t, 9),
                    l: Z2(t, 11),
                    s: t[13],
                    d: Z2(t, 14)
                };
                if (u2.b != 18771 || u2.i > 1 || u2.q < 6 || u2.q % 6 || u2.e < 768 || u2.e % 24 || u2.l != 768 || u2.k < u2.l || u2.k % u2.l || u2.k - u2.e >= u2.l || u2.s > 16 || u2.s != u2.k / u2.l || u2.s != Math.ceil(u2.e / u2.l) || u2.d != u2.q / 6 || u2.u != 12 && u2.u != 14 && u2.u != 16 || u2.C != 16 && u2.C != 0) {
                    throw "Invalid data";
                }
                if (u2.i == 0) {
                    throw "Not implemented. We need this file!";
                }
                u2.h = u2.C == 16;
                u2.m = (u2.h ? u2.l * 2 / 3 : u2.l >>> 1) | 0;
                u2.A = u2.m + 2;
                u2.f = 64;
                u2.g = (1 << u2.u) - 1;
                u2.n = 4 * u2.u;
                return u2;
            }
            function a7(t, Z2) {
                var u2 = new Array(Z2.s), e = 4 * Z2.s, Q2 = 16 + e;
                if (e & 12) Q2 += 16 - (e & 12);
                for(var V2 = 0, O2 = 16; V2 < Z2.s; O2 += 4){
                    var o = UTIF2._binBE.readUint(t, O2);
                    u2[V2] = t.slice(Q2, Q2 + o);
                    u2[V2].j = 0;
                    u2[V2].a = 0;
                    Q2 += o;
                    V2++;
                }
                if (Q2 != t.length) throw "Invalid data";
                return u2;
            }
            function a6(t, Z2) {
                for(var u2 = -Z2[4], e = 0; u2 <= Z2[4]; e++, u2++){
                    t[e] = u2 <= -Z2[3] ? -4 : u2 <= -Z2[2] ? -3 : u2 <= -Z2[1] ? -2 : u2 < -Z2[0] ? -1 : u2 <= Z2[0] ? 0 : u2 < Z2[1] ? 1 : u2 < Z2[2] ? 2 : u2 < Z2[3] ? 3 : 4;
                }
            }
            function a1(t, Z2, u2) {
                var e = [
                    Z2,
                    3 * Z2 + 18,
                    5 * Z2 + 67,
                    7 * Z2 + 276,
                    u2
                ];
                t.o = Z2;
                t.w = (e[4] + 2 * Z2) / (2 * Z2 + 1) + 1 | 0;
                t.v = Math.ceil(Math.log2(t.w));
                t.t = 9;
                a6(t.c, e);
            }
            function a2(t) {
                var Z2 = {
                    c: new Int8Array(2 << t.u)
                };
                a1(Z2, 0, t.g);
                return Z2;
            }
            function D(t) {
                var Z2 = [
                    [],
                    [],
                    []
                ], u2 = Math.max(2, t.w + 32 >>> 6);
                for(var e = 0; e < 3; e++){
                    for(var Q2 = 0; Q2 < 41; Q2++){
                        Z2[e][Q2] = [
                            u2,
                            1
                        ];
                    }
                }
                return Z2;
            }
            function a4(t) {
                for(var Z2 = -1, u2 = 0; !u2; Z2++){
                    u2 = t[t.j] >>> 7 - t.a & 1;
                    t.a++;
                    t.a &= 7;
                    if (!t.a) t.j++;
                }
                return Z2;
            }
            function K2(t, Z2) {
                var u2 = 0, e = 8 - t.a, Q2 = t.j, V2 = t.a;
                if (Z2) {
                    if (Z2 >= e) {
                        do {
                            u2 <<= e;
                            Z2 -= e;
                            u2 |= t[t.j] & (1 << e) - 1;
                            t.j++;
                            e = 8;
                        }while (Z2 >= 8)
                    }
                    if (Z2) {
                        u2 <<= Z2;
                        e -= Z2;
                        u2 |= t[t.j] >>> e & (1 << Z2) - 1;
                    }
                    t.a = 8 - e;
                }
                return u2;
            }
            function a0(t, Z2) {
                var u2 = 0;
                if (Z2 < t) {
                    while(u2 <= 14 && Z2 << ++u2 < t);
                }
                return u2;
            }
            function r(t, Z2, u2, e, Q2, V2, O2, o) {
                if (o == null) o = 0;
                var X2 = V2 + 1, k2 = X2 % 2, j2 = 0, I2 = 0, a = 0, l, R2, w2 = e[Q2], S2 = e[Q2 - 1], H2 = e[Q2 - 2][X2], g2 = S2[X2 - 1], Y2 = S2[X2], P2 = S2[X2 + 1], A2 = w2[X2 - 1], v2 = w2[X2 + 1], y = Math.abs, d, C2, n, h;
                if (k2) {
                    d = y(P2 - Y2);
                    C2 = y(H2 - Y2);
                    n = y(g2 - Y2);
                }
                if (k2) {
                    h = d > n && C2 < d ? H2 + g2 : d < n && C2 < n ? H2 + P2 : P2 + g2;
                    h = h + 2 * Y2 >>> 2;
                    if (o) {
                        w2[X2] = h;
                        return;
                    }
                    l = Z2.t * Z2.c[t.g + Y2 - H2] + Z2.c[t.g + g2 - Y2];
                } else {
                    h = Y2 > g2 && Y2 > P2 || Y2 < g2 && Y2 < P2 ? v2 + A2 + 2 * Y2 >>> 2 : A2 + v2 >>> 1;
                    l = Z2.t * Z2.c[t.g + Y2 - g2] + Z2.c[t.g + g2 - A2];
                }
                R2 = y(l);
                var W2 = a4(u2);
                if (W2 < t.n - Z2.v - 1) {
                    var z2 = a0(O2[R2][0], O2[R2][1]);
                    a = K2(u2, z2) + (W2 << z2);
                } else {
                    a = K2(u2, Z2.v) + 1;
                }
                a = a & 1 ? -1 - (a >>> 1) : a >>> 1;
                O2[R2][0] += y(a);
                if (O2[R2][1] == t.f) {
                    O2[R2][0] >>>= 1;
                    O2[R2][1] >>>= 1;
                }
                O2[R2][1]++;
                h = l < 0 ? h - a : h + a;
                if (t.i) {
                    if (h < 0) h += Z2.w;
                    else if (h > t.g) h -= Z2.w;
                }
                w2[X2] = h >= 0 ? Math.min(h, t.g) : 0;
            }
            function U2(t, Z2, u2) {
                var e = t[0].length;
                for(var Q2 = Z2; Q2 <= u2; Q2++){
                    t[Q2][0] = t[Q2 - 1][1];
                    t[Q2][e - 1] = t[Q2 - 1][e - 2];
                }
            }
            function B2(t) {
                U2(t, s3, q2);
                U2(t, i, J2);
                U2(t, x, $2);
            }
            function _2(t, Z2, u2, e, Q2, V2, O2, o, X2, k2, j2, I2, a) {
                var l = 0, R2 = 1, w2 = Q2 < M2 && Q2 > J2;
                while(R2 < t.m){
                    if (l < t.m) {
                        r(t, Z2, u2, e, Q2, l, O2[X2], t.h && (w2 && k2 || !w2 && (j2 || (l & I2) == a)));
                        r(t, Z2, u2, e, V2, l, O2[X2], t.h && (!w2 && k2 || w2 && (j2 || (l & I2) == a)));
                        l += 2;
                    }
                    if (l > 8) {
                        r(t, Z2, u2, e, Q2, R2, o[X2]);
                        r(t, Z2, u2, e, V2, R2, o[X2]);
                        R2 += 2;
                    }
                }
                B2(e);
            }
            function a8(t, Z2, u2, e, Q2, V2) {
                _2(t, Z2, u2, e, i, s3, Q2, V2, 0, 0, 1, 0, 8);
                _2(t, Z2, u2, e, c, x, Q2, V2, 1, 0, 1, 0, 8);
                _2(t, Z2, u2, e, b2, T, Q2, V2, 2, 1, 0, 3, 0);
                _2(t, Z2, u2, e, a3, L2, Q2, V2, 0, 0, 0, 3, 2);
                _2(t, Z2, u2, e, J2, f2, Q2, V2, 1, 0, 0, 3, 2);
                _2(t, Z2, u2, e, q2, $2, Q2, V2, 2, 1, 0, 3, 0);
            }
            function a9(t, Z2, u2, e, Q2, V2) {
                var O2 = V2.length, o = t.l;
                if (Q2 + 1 == t.s) o = t.e - Q2 * t.l;
                var X2 = 6 * t.e * e + Q2 * t.l;
                for(var k2 = 0; k2 < 6; k2++){
                    for(var j2 = 0; j2 < o; j2++){
                        var I2 = V2[k2 % O2][j2 % O2], a;
                        if (I2 == 0) {
                            a = i + (k2 >>> 1);
                        } else if (I2 == 2) {
                            a = x + (k2 >>> 1);
                        } else {
                            a = s3 + k2;
                        }
                        var l = t.h ? (j2 * 2 / 3 & 2147483646 | j2 % 3 & 1) + (j2 % 3 >>> 1) : j2 >>> 1;
                        Z2[X2 + j2] = u2[a][l + 1];
                    }
                    X2 += t.e;
                }
            }
            UTIF2._decompressRAF = function(t, Z2) {
                var u2 = a5(t), e = a7(t, u2), Q2 = a2(u2), V2 = new Int16Array(u2.e * u2.q);
                if (Z2 == null) {
                    Z2 = u2.h ? [
                        [
                            1,
                            1,
                            0,
                            1,
                            1,
                            2
                        ],
                        [
                            1,
                            1,
                            2,
                            1,
                            1,
                            0
                        ],
                        [
                            2,
                            0,
                            1,
                            0,
                            2,
                            1
                        ],
                        [
                            1,
                            1,
                            2,
                            1,
                            1,
                            0
                        ],
                        [
                            1,
                            1,
                            0,
                            1,
                            1,
                            2
                        ],
                        [
                            0,
                            2,
                            1,
                            2,
                            0,
                            1
                        ]
                    ] : [
                        [
                            0,
                            1
                        ],
                        [
                            3,
                            2
                        ]
                    ];
                }
                var O2 = [
                    [
                        G2,
                        b2
                    ],
                    [
                        F2,
                        J2
                    ],
                    [
                        N2,
                        f2
                    ],
                    [
                        E,
                        q2
                    ],
                    [
                        M2,
                        L2
                    ],
                    [
                        m2,
                        $2
                    ]
                ], o = [];
                for(var X2 = 0; X2 < p2; X2++){
                    o[X2] = new Uint16Array(u2.A);
                }
                for(var k2 = 0; k2 < u2.s; k2++){
                    var j2 = D(Q2), I2 = D(Q2);
                    for(var X2 = 0; X2 < p2; X2++){
                        for(var a = 0; a < u2.A; a++){
                            o[X2][a] = 0;
                        }
                    }
                    for(var l = 0; l < u2.d; l++){
                        a8(u2, Q2, e[k2], o, j2, I2);
                        for(var X2 = 0; X2 < 6; X2++){
                            for(var a = 0; a < u2.A; a++){
                                o[O2[X2][0]][a] = o[O2[X2][1]][a];
                            }
                        }
                        a9(u2, V2, o, l, k2, Z2);
                        for(var X2 = i; X2 < p2; X2++){
                            if ([
                                N2,
                                E,
                                M2,
                                m2
                            ].indexOf(X2) == -1) {
                                for(var a = 0; a < u2.A; a++){
                                    o[X2][a] = 0;
                                }
                            }
                        }
                        B2(o);
                    }
                }
                return V2;
            };
        })();
    })(UTIF, pako);
})();

return module2.exports;
}
