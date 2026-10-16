var e = function() {
    "use strict";
    var r = new Int32Array([
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
    ]), e = 4017, n = 799, o = 3406, a = 2276, t = 1567, s = 3784, i = 5793, f = 2896;
    function c() {}
    function l(r, e) {
        for(var n, o, a = 0, t = [], s = 16; s > 0 && !r[s - 1];)s--;
        t.push({
            children: [],
            index: 0
        });
        var i, f = t[0];
        for(n = 0; n < s; n++){
            for(o = 0; o < r[n]; o++){
                for((f = t.pop()).children[f.index] = e[a]; f.index > 0;){
                    if (0 === t.length) throw new Error("Could not recreate Huffman Table");
                    f = t.pop();
                }
                for(f.index++, t.push(f); t.length <= n;)t.push(i = {
                    children: [],
                    index: 0
                }), f.children[f.index] = i.children, f = i;
                a++;
            }
            n + 1 < s && (t.push(i = {
                children: [],
                index: 0
            }), f.children[f.index] = i.children, f = i);
        }
        return t[0].children;
    }
    function h(e, n, o, a, t, s, i, f, c, l) {
        o.precision, o.samplesPerLine, o.scanLines;
        var h = o.mcusPerLine, u = o.progressive, v = (o.maxH, o.maxV, n), m = 0, d = 0;
        function p() {
            if (d > 0) return d--, m >> d & 1;
            if (255 == (m = e[n++])) {
                var r = e[n++];
                if (r) throw new Error("unexpected marker: " + (m << 8 | r).toString(16));
            }
            return d = 7, m >>> 7;
        }
        function w(r) {
            for(var e, n = r; null !== (e = p());){
                if ("number" == typeof (n = n[e])) return n;
                if ("object" != typeof n) throw new Error("invalid huffman sequence");
            }
            return null;
        }
        function b(r) {
            for(var e = 0; r > 0;){
                var n = p();
                if (null === n) return;
                e = e << 1 | n, r--;
            }
            return e;
        }
        function g(r) {
            var e = b(r);
            return e >= 1 << r - 1 ? e : e + (-1 << r) + 1;
        }
        var y = 0;
        var k, A = 0;
        function x(r, e, n, o, a) {
            var t = n % h, s = (n / h | 0) * r.v + o, i = t * r.h + a;
            void 0 === r.blocks[s] && l.tolerantDecoding || e(r, r.blocks[s][i]);
        }
        function M(r, e, n) {
            var o = n / r.blocksPerLine | 0, a = n % r.blocksPerLine;
            void 0 === r.blocks[o] && l.tolerantDecoding || e(r, r.blocks[o][a]);
        }
        var P, E, T, C, L, X, B = a.length;
        X = u ? 0 === s ? 0 === f ? function(r, e) {
            var n = w(r.huffmanTableDC), o = 0 === n ? 0 : g(n) << c;
            e[0] = r.pred += o;
        } : function(r, e) {
            e[0] |= p() << c;
        } : 0 === f ? function(e, n) {
            if (y > 0) y--;
            else for(var o = s, a = i; o <= a;){
                var t = w(e.huffmanTableAC), f = 15 & t, l = t >> 4;
                if (0 !== f) n[r[o += l]] = g(f) * (1 << c), o++;
                else {
                    if (l < 15) {
                        y = b(l) + (1 << l) - 1;
                        break;
                    }
                    o += 16;
                }
            }
        } : function(e, n) {
            for(var o = s, a = i, t = 0; o <= a;){
                var f = r[o], l = n[f] < 0 ? -1 : 1;
                switch(A){
                    case 0:
                        var h = w(e.huffmanTableAC), u = 15 & h;
                        if (t = h >> 4, 0 === u) t < 15 ? (y = b(t) + (1 << t), A = 4) : (t = 16, A = 1);
                        else {
                            if (1 !== u) throw new Error("invalid ACn encoding");
                            k = g(u), A = t ? 2 : 3;
                        }
                        continue;
                    case 1:
                    case 2:
                        n[f] ? n[f] += (p() << c) * l : 0 === --t && (A = 2 == A ? 3 : 0);
                        break;
                    case 3:
                        n[f] ? n[f] += (p() << c) * l : (n[f] = k << c, A = 0);
                        break;
                    case 4:
                        n[f] && (n[f] += (p() << c) * l);
                }
                o++;
            }
            4 === A && 0 === --y && (A = 0);
        } : function(e, n) {
            var o = w(e.huffmanTableDC), a = 0 === o ? 0 : g(o);
            n[0] = e.pred += a;
            for(var t = 1; t < 64;){
                var s = w(e.huffmanTableAC), i = 15 & s, f = s >> 4;
                if (0 !== i) n[r[t += f]] = g(i), t++;
                else {
                    if (f < 15) break;
                    t += 16;
                }
            }
        };
        var D, I, U, q, R = 0;
        for(I = 1 == B ? a[0].blocksPerLine * a[0].blocksPerColumn : h * o.mcusPerColumn, t || (t = I); R < I;){
            for(E = 0; E < B; E++)a[E].pred = 0;
            if (y = 0, 1 == B) for(P = a[0], L = 0; L < t; L++)M(P, X, R), R++;
            else for(L = 0; L < t; L++){
                for(E = 0; E < B; E++)for(U = (P = a[E]).h, q = P.v, T = 0; T < q; T++)for(C = 0; C < U; C++)x(P, X, R, T, C);
                if (++R === I) break;
            }
            if (R === I) do {
                if (255 === e[n] && 0 !== e[n + 1]) break;
                n += 1;
            }while (n < e.length - 2)
            if (d = 0, (D = e[n] << 8 | e[n + 1]) < 65280) throw new Error("marker was not found");
            if (!(D >= 65488 && D <= 65495)) break;
            n += 2;
        }
        return n - v;
    }
    function u(r, c) {
        var l, h, u = [], v = c.blocksPerLine, m = c.blocksPerColumn, d = v << 3, w = new Int32Array(64), b = new Uint8Array(64);
        function g(r, l, h) {
            var u, v, m, d, p, w, b, g, y, k, A = c.quantizationTable, x = h;
            for(k = 0; k < 64; k++)x[k] = r[k] * A[k];
            for(k = 0; k < 8; ++k){
                var M = 8 * k;
                0 != x[1 + M] || 0 != x[2 + M] || 0 != x[3 + M] || 0 != x[4 + M] || 0 != x[5 + M] || 0 != x[6 + M] || 0 != x[7 + M] ? (u = i * x[0 + M] + 128 >> 8, v = i * x[4 + M] + 128 >> 8, m = x[2 + M], d = x[6 + M], p = f * (x[1 + M] - x[7 + M]) + 128 >> 8, g = f * (x[1 + M] + x[7 + M]) + 128 >> 8, w = x[3 + M] << 4, b = x[5 + M] << 4, y = u - v + 1 >> 1, u = u + v + 1 >> 1, v = y, y = m * s + d * t + 128 >> 8, m = m * t - d * s + 128 >> 8, d = y, y = p - b + 1 >> 1, p = p + b + 1 >> 1, b = y, y = g + w + 1 >> 1, w = g - w + 1 >> 1, g = y, y = u - d + 1 >> 1, u = u + d + 1 >> 1, d = y, y = v - m + 1 >> 1, v = v + m + 1 >> 1, m = y, y = p * a + g * o + 2048 >> 12, p = p * o - g * a + 2048 >> 12, g = y, y = w * n + b * e + 2048 >> 12, w = w * e - b * n + 2048 >> 12, b = y, x[0 + M] = u + g, x[7 + M] = u - g, x[1 + M] = v + b, x[6 + M] = v - b, x[2 + M] = m + w, x[5 + M] = m - w, x[3 + M] = d + p, x[4 + M] = d - p) : (y = i * x[0 + M] + 512 >> 10, x[0 + M] = y, x[1 + M] = y, x[2 + M] = y, x[3 + M] = y, x[4 + M] = y, x[5 + M] = y, x[6 + M] = y, x[7 + M] = y);
            }
            for(k = 0; k < 8; ++k){
                var P = k;
                0 != x[8 + P] || 0 != x[16 + P] || 0 != x[24 + P] || 0 != x[32 + P] || 0 != x[40 + P] || 0 != x[48 + P] || 0 != x[56 + P] ? (u = i * x[0 + P] + 2048 >> 12, v = i * x[32 + P] + 2048 >> 12, m = x[16 + P], d = x[48 + P], p = f * (x[8 + P] - x[56 + P]) + 2048 >> 12, g = f * (x[8 + P] + x[56 + P]) + 2048 >> 12, w = x[24 + P], b = x[40 + P], y = u - v + 1 >> 1, u = u + v + 1 >> 1, v = y, y = m * s + d * t + 2048 >> 12, m = m * t - d * s + 2048 >> 12, d = y, y = p - b + 1 >> 1, p = p + b + 1 >> 1, b = y, y = g + w + 1 >> 1, w = g - w + 1 >> 1, g = y, y = u - d + 1 >> 1, u = u + d + 1 >> 1, d = y, y = v - m + 1 >> 1, v = v + m + 1 >> 1, m = y, y = p * a + g * o + 2048 >> 12, p = p * o - g * a + 2048 >> 12, g = y, y = w * n + b * e + 2048 >> 12, w = w * e - b * n + 2048 >> 12, b = y, x[0 + P] = u + g, x[56 + P] = u - g, x[8 + P] = v + b, x[48 + P] = v - b, x[16 + P] = m + w, x[40 + P] = m - w, x[24 + P] = d + p, x[32 + P] = d - p) : (y = i * h[k + 0] + 8192 >> 14, x[0 + P] = y, x[8 + P] = y, x[16 + P] = y, x[24 + P] = y, x[32 + P] = y, x[40 + P] = y, x[48 + P] = y, x[56 + P] = y);
            }
            for(k = 0; k < 64; ++k){
                var E = 128 + (x[k] + 8 >> 4);
                l[k] = E < 0 ? 0 : E > 255 ? 255 : E;
            }
        }
        p(d * m * 8);
        for(var y = 0; y < m; y++){
            var k = y << 3;
            for(l = 0; l < 8; l++)u.push(new Uint8Array(d));
            for(var A = 0; A < v; A++){
                g(c.blocks[y][A], b, w);
                var x = 0, M = A << 3;
                for(h = 0; h < 8; h++){
                    var P = u[k + h];
                    for(l = 0; l < 8; l++)P[M + l] = b[x++];
                }
            }
        }
        return u;
    }
    function v(r) {
        return r < 0 ? 0 : r > 255 ? 255 : r;
    }
    c.prototype = {
        load: function(r) {
            var e = new XMLHttpRequest;
            e.open("GET", r, !0), e.responseType = "arraybuffer", e.onload = (function() {
                var r = new Uint8Array(e.response || e.mozResponseArrayBuffer);
                this.parse(r), this.onload && this.onload();
            }).bind(this), e.send(null);
        },
        parse: function(e) {
            var n = 1e3 * this.opts.maxResolutionInMP * 1e3, o = 0;
            e.length;
            function a() {
                var r = e[o] << 8 | e[o + 1];
                return o += 2, r;
            }
            function t() {
                var r = a(), n = e.subarray(o, o + r - 2);
                return o += n.length, n;
            }
            function s(r) {
                var e, n, o = 1, a = 1;
                for(n in r.components)r.components.hasOwnProperty(n) && (o < (e = r.components[n]).h && (o = e.h), a < e.v && (a = e.v));
                var t = Math.ceil(r.samplesPerLine / 8 / o), s = Math.ceil(r.scanLines / 8 / a);
                for(n in r.components)if (r.components.hasOwnProperty(n)) {
                    e = r.components[n];
                    var i = Math.ceil(Math.ceil(r.samplesPerLine / 8) * e.h / o), f = Math.ceil(Math.ceil(r.scanLines / 8) * e.v / a), c = t * e.h, l = s * e.v, h = [];
                    p(256 * (l * c));
                    for(var u = 0; u < l; u++){
                        for(var v = [], m = 0; m < c; m++)v.push(new Int32Array(64));
                        h.push(v);
                    }
                    e.blocksPerLine = i, e.blocksPerColumn = f, e.blocks = h;
                }
                r.maxH = o, r.maxV = a, r.mcusPerLine = t, r.mcusPerColumn = s;
            }
            var i, f, c = null, v = null, m = [], d = [], w = [], b = [], g = a(), y = -1;
            if (this.comments = [], 65496 != g) throw new Error("SOI not found");
            for(g = a(); 65497 != g;){
                switch(g){
                    case 65280:
                        break;
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
                        var k = t();
                        if (65534 === g) {
                            var A = String.fromCharCode.apply(null, k);
                            this.comments.push(A);
                        }
                        65504 === g && 74 === k[0] && 70 === k[1] && 73 === k[2] && 70 === k[3] && 0 === k[4] && (c = {
                            version: {
                                major: k[5],
                                minor: k[6]
                            },
                            densityUnits: k[7],
                            xDensity: k[8] << 8 | k[9],
                            yDensity: k[10] << 8 | k[11],
                            thumbWidth: k[12],
                            thumbHeight: k[13],
                            thumbData: k.subarray(14, 14 + 3 * k[12] * k[13])
                        }), 65505 === g && 69 === k[0] && 120 === k[1] && 105 === k[2] && 102 === k[3] && 0 === k[4] && (this.exifBuffer = k.subarray(5, k.length)), 65518 === g && 65 === k[0] && 100 === k[1] && 111 === k[2] && 98 === k[3] && 101 === k[4] && 0 === k[5] && (v = {
                            version: k[6],
                            flags0: k[7] << 8 | k[8],
                            flags1: k[9] << 8 | k[10],
                            transformCode: k[11]
                        });
                        break;
                    case 65499:
                        for(var x = a() + o - 2; o < x;){
                            var M = e[o++];
                            p(256);
                            var P = new Int32Array(64);
                            if (M >> 4) {
                                if (M >> 4 != 1) throw new Error("DQT: invalid table spec");
                                for(_ = 0; _ < 64; _++){
                                    P[r[_]] = a();
                                }
                            } else for(_ = 0; _ < 64; _++){
                                P[r[_]] = e[o++];
                            }
                            m[15 & M] = P;
                        }
                        break;
                    case 65472:
                    case 65473:
                    case 65474:
                        a(), (i = {}).extended = 65473 === g, i.progressive = 65474 === g, i.precision = e[o++], i.scanLines = a(), i.samplesPerLine = a(), i.components = {}, i.componentsOrder = [];
                        var E = i.scanLines * i.samplesPerLine;
                        if (E > n) {
                            var T = Math.ceil((E - n) / 1e6);
                            throw new Error(`maxResolutionInMP limit exceeded by ${T}MP`);
                        }
                        var C, L = e[o++];
                        for(J = 0; J < L; J++){
                            C = e[o];
                            var X = e[o + 1] >> 4, B = 15 & e[o + 1], D = e[o + 2];
                            if (X <= 0 || B <= 0) throw new Error("Invalid sampling factor, expected values above 0");
                            i.componentsOrder.push(C), i.components[C] = {
                                h: X,
                                v: B,
                                quantizationIdx: D
                            }, o += 3;
                        }
                        s(i), d.push(i);
                        break;
                    case 65476:
                        var I = a();
                        for(J = 2; J < I;){
                            var U = e[o++], q = new Uint8Array(16), R = 0;
                            for(_ = 0; _ < 16; _++, o++)R += q[_] = e[o];
                            p(16 + R);
                            var Y = new Uint8Array(R);
                            for(_ = 0; _ < R; _++, o++)Y[_] = e[o];
                            J += 17 + R, (U >> 4 ? w : b)[15 & U] = l(q, Y);
                        }
                        break;
                    case 65501:
                        a(), f = a();
                        break;
                    case 65500:
                        a(), a();
                        break;
                    case 65498:
                        a();
                        var G = e[o++], S = [];
                        for(J = 0; J < G; J++){
                            N = i.components[e[o++]];
                            var O = e[o++];
                            N.huffmanTableDC = b[O >> 4], N.huffmanTableAC = w[15 & O], S.push(N);
                        }
                        var z = e[o++], H = e[o++], $ = e[o++], j = h(e, o, i, S, f, z, H, $ >> 4, 15 & $, this.opts);
                        o += j;
                        break;
                    case 65535:
                        255 !== e[o] && o--;
                        break;
                    default:
                        if (255 == e[o - 3] && e[o - 2] >= 192 && e[o - 2] <= 254) {
                            o -= 3;
                            break;
                        }
                        if (224 === g || 225 == g) {
                            if (-1 !== y) throw new Error(`first unknown JPEG marker at offset ${y.toString(16)}, second unknown JPEG marker ${g.toString(16)} at offset ${(o - 1).toString(16)}`);
                            y = o - 1;
                            const r = a();
                            if (255 === e[o + r - 2]) {
                                o += r - 2;
                                break;
                            }
                        }
                        throw new Error("unknown JPEG marker " + g.toString(16));
                }
                g = a();
            }
            if (1 != d.length) throw new Error("only single frame JPEGs supported");
            for(var J = 0; J < d.length; J++){
                var V = d[J].components;
                for(var _ in V)V[_].quantizationTable = m[V[_].quantizationIdx], delete V[_].quantizationIdx;
            }
            this.width = i.samplesPerLine, this.height = i.scanLines, this.jfif = c, this.adobe = v, this.components = [];
            for(J = 0; J < i.componentsOrder.length; J++){
                var N = i.components[i.componentsOrder[J]];
                this.components.push({
                    lines: u(0, N),
                    scaleX: N.h / i.maxH,
                    scaleY: N.v / i.maxV
                });
            }
        },
        getData: function(r, e) {
            var n, o, a, t, s, i, f, c, l, h, u, m, d, w, b, g, y, k, A, x, M, P = this.width / r, E = this.height / e, T = 0, C = r * e * this.components.length;
            p(C);
            var L = new Uint8Array(C);
            switch(this.components.length){
                case 1:
                    for(n = this.components[0], h = 0; h < e; h++)for(s = n.lines[0 | h * n.scaleY * E], l = 0; l < r; l++)u = s[0 | l * n.scaleX * P], L[T++] = u;
                    break;
                case 2:
                    for(n = this.components[0], o = this.components[1], h = 0; h < e; h++)for(s = n.lines[0 | h * n.scaleY * E], i = o.lines[0 | h * o.scaleY * E], l = 0; l < r; l++)u = s[0 | l * n.scaleX * P], L[T++] = u, u = i[0 | l * o.scaleX * P], L[T++] = u;
                    break;
                case 3:
                    for(M = !0, this.adobe && this.adobe.transformCode ? M = !0 : void 0 !== this.opts.colorTransform && (M = !!this.opts.colorTransform), n = this.components[0], o = this.components[1], a = this.components[2], h = 0; h < e; h++)for(s = n.lines[0 | h * n.scaleY * E], i = o.lines[0 | h * o.scaleY * E], f = a.lines[0 | h * a.scaleY * E], l = 0; l < r; l++)M ? (u = s[0 | l * n.scaleX * P], m = i[0 | l * o.scaleX * P], k = v(u + 1.402 * ((d = f[0 | l * a.scaleX * P]) - 128)), A = v(u - .3441363 * (m - 128) - .71413636 * (d - 128)), x = v(u + 1.772 * (m - 128))) : (k = s[0 | l * n.scaleX * P], A = i[0 | l * o.scaleX * P], x = f[0 | l * a.scaleX * P]), L[T++] = k, L[T++] = A, L[T++] = x;
                    break;
                case 4:
                    if (!this.adobe) throw new Error("Unsupported color mode (4 components)");
                    for(M = !1, this.adobe && this.adobe.transformCode ? M = !0 : void 0 !== this.opts.colorTransform && (M = !!this.opts.colorTransform), n = this.components[0], o = this.components[1], a = this.components[2], t = this.components[3], h = 0; h < e; h++)for(s = n.lines[0 | h * n.scaleY * E], i = o.lines[0 | h * o.scaleY * E], f = a.lines[0 | h * a.scaleY * E], c = t.lines[0 | h * t.scaleY * E], l = 0; l < r; l++)M ? (u = s[0 | l * n.scaleX * P], m = i[0 | l * o.scaleX * P], d = f[0 | l * a.scaleX * P], w = c[0 | l * t.scaleX * P], b = 255 - v(u + 1.402 * (d - 128)), g = 255 - v(u - .3441363 * (m - 128) - .71413636 * (d - 128)), y = 255 - v(u + 1.772 * (m - 128))) : (b = s[0 | l * n.scaleX * P], g = i[0 | l * o.scaleX * P], y = f[0 | l * a.scaleX * P], w = c[0 | l * t.scaleX * P]), L[T++] = 255 - b, L[T++] = 255 - g, L[T++] = 255 - y, L[T++] = 255 - w;
                    break;
                default:
                    throw new Error("Unsupported color mode");
            }
            return L;
        },
        copyToImageData: function(r, e) {
            var n, o, a, t, s, i, f, c, l, h = r.width, u = r.height, m = r.data, d = this.getData(h, u), p = 0, w = 0;
            switch(this.components.length){
                case 1:
                    for(o = 0; o < u; o++)for(n = 0; n < h; n++)a = d[p++], m[w++] = a, m[w++] = a, m[w++] = a, e && (m[w++] = 255);
                    break;
                case 3:
                    for(o = 0; o < u; o++)for(n = 0; n < h; n++)f = d[p++], c = d[p++], l = d[p++], m[w++] = f, m[w++] = c, m[w++] = l, e && (m[w++] = 255);
                    break;
                case 4:
                    for(o = 0; o < u; o++)for(n = 0; n < h; n++)s = d[p++], i = d[p++], a = d[p++], f = 255 - v(s * (1 - (t = d[p++]) / 255) + t), c = 255 - v(i * (1 - t / 255) + t), l = 255 - v(a * (1 - t / 255) + t), m[w++] = f, m[w++] = c, m[w++] = l, e && (m[w++] = 255);
                    break;
                default:
                    throw new Error("Unsupported color mode");
            }
        }
    };
    var m = 0, d = 0;
    function p(r = 0) {
        var e = m + r;
        if (e > d) {
            var n = Math.ceil((e - d) / 1024 / 1024);
            throw new Error(`maxMemoryUsageInMB limit exceeded by at least ${n}MB`);
        }
        m = e;
    }
    return c.resetMaxMemoryUsage = function(r) {
        m = 0, d = r;
    }, c.getBytesAllocated = function() {
        return m;
    }, c.requestMemoryAllocation = p, c;
}();
module.exports = function(r, n = {}) {
    var o = {
        colorTransform: void 0,
        useTArray: !1,
        formatAsRGBA: !0,
        tolerantDecoding: !0,
        maxResolutionInMP: 100,
        maxMemoryUsageInMB: 512,
        ...n
    }, a = new Uint8Array(r), t = new e;
    t.opts = o, e.resetMaxMemoryUsage(1024 * o.maxMemoryUsageInMB * 1024), t.parse(a);
    var s = o.formatAsRGBA ? 4 : 3, i = t.width * t.height * s;
    try {
        e.requestMemoryAllocation(i);
        var f = {
            width: t.width,
            height: t.height,
            exifBuffer: t.exifBuffer,
            data: o.useTArray ? new Uint8Array(i) : Buffer.alloc(i)
        };
        t.comments.length > 0 && (f.comments = t.comments);
    } catch (r) {
        if (r instanceof RangeError) throw new Error("Could not allocate enough memory for the image. Required: " + i);
        if (r instanceof ReferenceError && "Buffer is not defined" === r.message) throw new Error("Buffer is not globally defined in this environment. Consider setting useTArray to true");
        throw r;
    }
    return t.copyToImageData(f, o.formatAsRGBA), f;
};
