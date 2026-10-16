((exports.id = 502),
  (exports.ids = [502]),
  (exports.modules = {
    1855: (r) => {
      var e = (function () {
        "use strict";
        var r = new Int32Array([
            0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34,
            27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37,
            44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63,
          ]),
          e = 4017,
          n = 799,
          o = 3406,
          a = 2276,
          t = 1567,
          s = 3784,
          i = 5793,
          f = 2896;
        function c() {}
        function l(r, e) {
          for (var n, o, a = 0, t = [], s = 16; s > 0 && !r[s - 1];) s--;
          t.push({ children: [], index: 0 });
          var i,
            f = t[0];
          for (n = 0; n < s; n++) {
            for (o = 0; o < r[n]; o++) {
              for ((f = t.pop()).children[f.index] = e[a]; f.index > 0;) {
                if (0 === t.length) throw new Error("Could not recreate Huffman Table");
                f = t.pop();
              }
              for (f.index++, t.push(f); t.length <= n;)
                (t.push((i = { children: [], index: 0 })),
                  (f.children[f.index] = i.children),
                  (f = i));
              a++;
            }
            n + 1 < s &&
              (t.push((i = { children: [], index: 0 })),
              (f.children[f.index] = i.children),
              (f = i));
          }
          return t[0].children;
        }
        function h(e, n, o, a, t, s, i, f, c, l) {
          (o.precision, o.samplesPerLine, o.scanLines);
          var h = o.mcusPerLine,
            u = o.progressive,
            v = (o.maxH, o.maxV, n),
            m = 0,
            d = 0;
          function p() {
            if (d > 0) return (d--, (m >> d) & 1);
            if (255 == (m = e[n++])) {
              var r = e[n++];
              if (r) throw new Error("unexpected marker: " + ((m << 8) | r).toString(16));
            }
            return ((d = 7), m >>> 7);
          }
          function w(r) {
            for (var e, n = r; null !== (e = p());) {
              if ("number" == typeof (n = n[e])) return n;
              if ("object" != typeof n) throw new Error("invalid huffman sequence");
            }
            return null;
          }
          function b(r) {
            for (var e = 0; r > 0;) {
              var n = p();
              if (null === n) return;
              ((e = (e << 1) | n), r--);
            }
            return e;
          }
          function g(r) {
            var e = b(r);
            return e >= 1 << (r - 1) ? e : e + (-1 << r) + 1;
          }
          var y = 0;
          var k,
            A = 0;
          function x(r, e, n, o, a) {
            var t = n % h,
              s = ((n / h) | 0) * r.v + o,
              i = t * r.h + a;
            (void 0 === r.blocks[s] && l.tolerantDecoding) || e(r, r.blocks[s][i]);
          }
          function M(r, e, n) {
            var o = (n / r.blocksPerLine) | 0,
              a = n % r.blocksPerLine;
            (void 0 === r.blocks[o] && l.tolerantDecoding) || e(r, r.blocks[o][a]);
          }
          var P,
            E,
            T,
            C,
            L,
            X,
            B = a.length;
          X = u
            ? 0 === s
              ? 0 === f
                ? function (r, e) {
                    var n = w(r.huffmanTableDC),
                      o = 0 === n ? 0 : g(n) << c;
                    e[0] = r.pred += o;
                  }
                : function (r, e) {
                    e[0] |= p() << c;
                  }
              : 0 === f
                ? function (e, n) {
                    if (y > 0) y--;
                    else
                      for (var o = s, a = i; o <= a;) {
                        var t = w(e.huffmanTableAC),
                          f = 15 & t,
                          l = t >> 4;
                        if (0 !== f) ((n[r[(o += l)]] = g(f) * (1 << c)), o++);
                        else {
                          if (l < 15) {
                            y = b(l) + (1 << l) - 1;
                            break;
                          }
                          o += 16;
                        }
                      }
                  }
                : function (e, n) {
                    for (var o = s, a = i, t = 0; o <= a;) {
                      var f = r[o],
                        l = n[f] < 0 ? -1 : 1;
                      switch (A) {
                        case 0:
                          var h = w(e.huffmanTableAC),
                            u = 15 & h;
                          if (((t = h >> 4), 0 === u))
                            t < 15 ? ((y = b(t) + (1 << t)), (A = 4)) : ((t = 16), (A = 1));
                          else {
                            if (1 !== u) throw new Error("invalid ACn encoding");
                            ((k = g(u)), (A = t ? 2 : 3));
                          }
                          continue;
                        case 1:
                        case 2:
                          n[f] ? (n[f] += (p() << c) * l) : 0 === --t && (A = 2 == A ? 3 : 0);
                          break;
                        case 3:
                          n[f] ? (n[f] += (p() << c) * l) : ((n[f] = k << c), (A = 0));
                          break;
                        case 4:
                          n[f] && (n[f] += (p() << c) * l);
                      }
                      o++;
                    }
                    4 === A && 0 === --y && (A = 0);
                  }
            : function (e, n) {
                var o = w(e.huffmanTableDC),
                  a = 0 === o ? 0 : g(o);
                n[0] = e.pred += a;
                for (var t = 1; t < 64;) {
                  var s = w(e.huffmanTableAC),
                    i = 15 & s,
                    f = s >> 4;
                  if (0 !== i) ((n[r[(t += f)]] = g(i)), t++);
                  else {
                    if (f < 15) break;
                    t += 16;
                  }
                }
              };
          var D,
            I,
            U,
            q,
            R = 0;
          for (
            I = 1 == B ? a[0].blocksPerLine * a[0].blocksPerColumn : h * o.mcusPerColumn,
              t || (t = I);
            R < I;
          ) {
            for (E = 0; E < B; E++) a[E].pred = 0;
            if (((y = 0), 1 == B)) for (P = a[0], L = 0; L < t; L++) (M(P, X, R), R++);
            else
              for (L = 0; L < t; L++) {
                for (E = 0; E < B; E++)
                  for (U = (P = a[E]).h, q = P.v, T = 0; T < q; T++)
                    for (C = 0; C < U; C++) x(P, X, R, T, C);
                if (++R === I) break;
              }
            if (R === I)
              do {
                if (255 === e[n] && 0 !== e[n + 1]) break;
                n += 1;
              } while (n < e.length - 2);
            if (((d = 0), (D = (e[n] << 8) | e[n + 1]) < 65280))
              throw new Error("marker was not found");
            if (!(D >= 65488 && D <= 65495)) break;
            n += 2;
          }
          return n - v;
        }
        function u(r, c) {
          var l,
            h,
            u = [],
            v = c.blocksPerLine,
            m = c.blocksPerColumn,
            d = v << 3,
            w = new Int32Array(64),
            b = new Uint8Array(64);
          function g(r, l, h) {
            var u,
              v,
              m,
              d,
              p,
              w,
              b,
              g,
              y,
              k,
              A = c.quantizationTable,
              x = h;
            for (k = 0; k < 64; k++) x[k] = r[k] * A[k];
            for (k = 0; k < 8; ++k) {
              var M = 8 * k;
              0 != x[1 + M] ||
              0 != x[2 + M] ||
              0 != x[3 + M] ||
              0 != x[4 + M] ||
              0 != x[5 + M] ||
              0 != x[6 + M] ||
              0 != x[7 + M]
                ? ((u = (i * x[0 + M] + 128) >> 8),
                  (v = (i * x[4 + M] + 128) >> 8),
                  (m = x[2 + M]),
                  (d = x[6 + M]),
                  (p = (f * (x[1 + M] - x[7 + M]) + 128) >> 8),
                  (g = (f * (x[1 + M] + x[7 + M]) + 128) >> 8),
                  (w = x[3 + M] << 4),
                  (b = x[5 + M] << 4),
                  (y = (u - v + 1) >> 1),
                  (u = (u + v + 1) >> 1),
                  (v = y),
                  (y = (m * s + d * t + 128) >> 8),
                  (m = (m * t - d * s + 128) >> 8),
                  (d = y),
                  (y = (p - b + 1) >> 1),
                  (p = (p + b + 1) >> 1),
                  (b = y),
                  (y = (g + w + 1) >> 1),
                  (w = (g - w + 1) >> 1),
                  (g = y),
                  (y = (u - d + 1) >> 1),
                  (u = (u + d + 1) >> 1),
                  (d = y),
                  (y = (v - m + 1) >> 1),
                  (v = (v + m + 1) >> 1),
                  (m = y),
                  (y = (p * a + g * o + 2048) >> 12),
                  (p = (p * o - g * a + 2048) >> 12),
                  (g = y),
                  (y = (w * n + b * e + 2048) >> 12),
                  (w = (w * e - b * n + 2048) >> 12),
                  (b = y),
                  (x[0 + M] = u + g),
                  (x[7 + M] = u - g),
                  (x[1 + M] = v + b),
                  (x[6 + M] = v - b),
                  (x[2 + M] = m + w),
                  (x[5 + M] = m - w),
                  (x[3 + M] = d + p),
                  (x[4 + M] = d - p))
                : ((y = (i * x[0 + M] + 512) >> 10),
                  (x[0 + M] = y),
                  (x[1 + M] = y),
                  (x[2 + M] = y),
                  (x[3 + M] = y),
                  (x[4 + M] = y),
                  (x[5 + M] = y),
                  (x[6 + M] = y),
                  (x[7 + M] = y));
            }
            for (k = 0; k < 8; ++k) {
              var P = k;
              0 != x[8 + P] ||
              0 != x[16 + P] ||
              0 != x[24 + P] ||
              0 != x[32 + P] ||
              0 != x[40 + P] ||
              0 != x[48 + P] ||
              0 != x[56 + P]
                ? ((u = (i * x[0 + P] + 2048) >> 12),
                  (v = (i * x[32 + P] + 2048) >> 12),
                  (m = x[16 + P]),
                  (d = x[48 + P]),
                  (p = (f * (x[8 + P] - x[56 + P]) + 2048) >> 12),
                  (g = (f * (x[8 + P] + x[56 + P]) + 2048) >> 12),
                  (w = x[24 + P]),
                  (b = x[40 + P]),
                  (y = (u - v + 1) >> 1),
                  (u = (u + v + 1) >> 1),
                  (v = y),
                  (y = (m * s + d * t + 2048) >> 12),
                  (m = (m * t - d * s + 2048) >> 12),
                  (d = y),
                  (y = (p - b + 1) >> 1),
                  (p = (p + b + 1) >> 1),
                  (b = y),
                  (y = (g + w + 1) >> 1),
                  (w = (g - w + 1) >> 1),
                  (g = y),
                  (y = (u - d + 1) >> 1),
                  (u = (u + d + 1) >> 1),
                  (d = y),
                  (y = (v - m + 1) >> 1),
                  (v = (v + m + 1) >> 1),
                  (m = y),
                  (y = (p * a + g * o + 2048) >> 12),
                  (p = (p * o - g * a + 2048) >> 12),
                  (g = y),
                  (y = (w * n + b * e + 2048) >> 12),
                  (w = (w * e - b * n + 2048) >> 12),
                  (b = y),
                  (x[0 + P] = u + g),
                  (x[56 + P] = u - g),
                  (x[8 + P] = v + b),
                  (x[48 + P] = v - b),
                  (x[16 + P] = m + w),
                  (x[40 + P] = m - w),
                  (x[24 + P] = d + p),
                  (x[32 + P] = d - p))
                : ((y = (i * h[k + 0] + 8192) >> 14),
                  (x[0 + P] = y),
                  (x[8 + P] = y),
                  (x[16 + P] = y),
                  (x[24 + P] = y),
                  (x[32 + P] = y),
                  (x[40 + P] = y),
                  (x[48 + P] = y),
                  (x[56 + P] = y));
            }
            for (k = 0; k < 64; ++k) {
              var E = 128 + ((x[k] + 8) >> 4);
              l[k] = E < 0 ? 0 : E > 255 ? 255 : E;
            }
          }
          p(d * m * 8);
          for (var y = 0; y < m; y++) {
            var k = y << 3;
            for (l = 0; l < 8; l++) u.push(new Uint8Array(d));
            for (var A = 0; A < v; A++) {
              g(c.blocks[y][A], b, w);
              var x = 0,
                M = A << 3;
              for (h = 0; h < 8; h++) {
                var P = u[k + h];
                for (l = 0; l < 8; l++) P[M + l] = b[x++];
              }
            }
          }
          return u;
        }
        function v(r) {
          return r < 0 ? 0 : r > 255 ? 255 : r;
        }
        c.prototype = {
          load: function (r) {
            var e = new XMLHttpRequest();
            (e.open("GET", r, !0),
              (e.responseType = "arraybuffer"),
              (e.onload = function () {
                var r = new Uint8Array(e.response || e.mozResponseArrayBuffer);
                (this.parse(r), this.onload && this.onload());
              }.bind(this)),
              e.send(null));
          },
          parse: function (e) {
            var n = 1e3 * this.opts.maxResolutionInMP * 1e3,
              o = 0;
            e.length;
            function a() {
              var r = (e[o] << 8) | e[o + 1];
              return ((o += 2), r);
            }
            function t() {
              var r = a(),
                n = e.subarray(o, o + r - 2);
              return ((o += n.length), n);
            }
            function s(r) {
              var e,
                n,
                o = 1,
                a = 1;
              for (n in r.components)
                r.components.hasOwnProperty(n) &&
                  (o < (e = r.components[n]).h && (o = e.h), a < e.v && (a = e.v));
              var t = Math.ceil(r.samplesPerLine / 8 / o),
                s = Math.ceil(r.scanLines / 8 / a);
              for (n in r.components)
                if (r.components.hasOwnProperty(n)) {
                  e = r.components[n];
                  var i = Math.ceil((Math.ceil(r.samplesPerLine / 8) * e.h) / o),
                    f = Math.ceil((Math.ceil(r.scanLines / 8) * e.v) / a),
                    c = t * e.h,
                    l = s * e.v,
                    h = [];
                  p(256 * (l * c));
                  for (var u = 0; u < l; u++) {
                    for (var v = [], m = 0; m < c; m++) v.push(new Int32Array(64));
                    h.push(v);
                  }
                  ((e.blocksPerLine = i), (e.blocksPerColumn = f), (e.blocks = h));
                }
              ((r.maxH = o), (r.maxV = a), (r.mcusPerLine = t), (r.mcusPerColumn = s));
            }
            var i,
              f,
              c = null,
              v = null,
              m = [],
              d = [],
              w = [],
              b = [],
              g = a(),
              y = -1;
            if (((this.comments = []), 65496 != g)) throw new Error("SOI not found");
            for (g = a(); 65497 != g;) {
              switch (g) {
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
                  (65504 === g &&
                    74 === k[0] &&
                    70 === k[1] &&
                    73 === k[2] &&
                    70 === k[3] &&
                    0 === k[4] &&
                    (c = {
                      version: { major: k[5], minor: k[6] },
                      densityUnits: k[7],
                      xDensity: (k[8] << 8) | k[9],
                      yDensity: (k[10] << 8) | k[11],
                      thumbWidth: k[12],
                      thumbHeight: k[13],
                      thumbData: k.subarray(14, 14 + 3 * k[12] * k[13]),
                    }),
                    65505 === g &&
                      69 === k[0] &&
                      120 === k[1] &&
                      105 === k[2] &&
                      102 === k[3] &&
                      0 === k[4] &&
                      (this.exifBuffer = k.subarray(5, k.length)),
                    65518 === g &&
                      65 === k[0] &&
                      100 === k[1] &&
                      111 === k[2] &&
                      98 === k[3] &&
                      101 === k[4] &&
                      0 === k[5] &&
                      (v = {
                        version: k[6],
                        flags0: (k[7] << 8) | k[8],
                        flags1: (k[9] << 8) | k[10],
                        transformCode: k[11],
                      }));
                  break;
                case 65499:
                  for (var x = a() + o - 2; o < x;) {
                    var M = e[o++];
                    p(256);
                    var P = new Int32Array(64);
                    if (M >> 4) {
                      if (M >> 4 != 1) throw new Error("DQT: invalid table spec");
                      for (_ = 0; _ < 64; _++) {
                        P[r[_]] = a();
                      }
                    } else
                      for (_ = 0; _ < 64; _++) {
                        P[r[_]] = e[o++];
                      }
                    m[15 & M] = P;
                  }
                  break;
                case 65472:
                case 65473:
                case 65474:
                  (a(),
                    ((i = {}).extended = 65473 === g),
                    (i.progressive = 65474 === g),
                    (i.precision = e[o++]),
                    (i.scanLines = a()),
                    (i.samplesPerLine = a()),
                    (i.components = {}),
                    (i.componentsOrder = []));
                  var E = i.scanLines * i.samplesPerLine;
                  if (E > n) {
                    var T = Math.ceil((E - n) / 1e6);
                    throw new Error(`maxResolutionInMP limit exceeded by ${T}MP`);
                  }
                  var C,
                    L = e[o++];
                  for (J = 0; J < L; J++) {
                    C = e[o];
                    var X = e[o + 1] >> 4,
                      B = 15 & e[o + 1],
                      D = e[o + 2];
                    if (X <= 0 || B <= 0)
                      throw new Error("Invalid sampling factor, expected values above 0");
                    (i.componentsOrder.push(C),
                      (i.components[C] = { h: X, v: B, quantizationIdx: D }),
                      (o += 3));
                  }
                  (s(i), d.push(i));
                  break;
                case 65476:
                  var I = a();
                  for (J = 2; J < I;) {
                    var U = e[o++],
                      q = new Uint8Array(16),
                      R = 0;
                    for (_ = 0; _ < 16; _++, o++) R += q[_] = e[o];
                    p(16 + R);
                    var Y = new Uint8Array(R);
                    for (_ = 0; _ < R; _++, o++) Y[_] = e[o];
                    ((J += 17 + R), ((U >> 4 ? w : b)[15 & U] = l(q, Y)));
                  }
                  break;
                case 65501:
                  (a(), (f = a()));
                  break;
                case 65500:
                  (a(), a());
                  break;
                case 65498:
                  a();
                  var G = e[o++],
                    S = [];
                  for (J = 0; J < G; J++) {
                    N = i.components[e[o++]];
                    var O = e[o++];
                    ((N.huffmanTableDC = b[O >> 4]), (N.huffmanTableAC = w[15 & O]), S.push(N));
                  }
                  var z = e[o++],
                    H = e[o++],
                    $ = e[o++],
                    j = h(e, o, i, S, f, z, H, $ >> 4, 15 & $, this.opts);
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
                    if (-1 !== y)
                      throw new Error(
                        `first unknown JPEG marker at offset ${y.toString(16)}, second unknown JPEG marker ${g.toString(16)} at offset ${(o - 1).toString(16)}`,
                      );
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
            for (var J = 0; J < d.length; J++) {
              var V = d[J].components;
              for (var _ in V)
                ((V[_].quantizationTable = m[V[_].quantizationIdx]), delete V[_].quantizationIdx);
            }
            ((this.width = i.samplesPerLine),
              (this.height = i.scanLines),
              (this.jfif = c),
              (this.adobe = v),
              (this.components = []));
            for (J = 0; J < i.componentsOrder.length; J++) {
              var N = i.components[i.componentsOrder[J]];
              this.components.push({ lines: u(0, N), scaleX: N.h / i.maxH, scaleY: N.v / i.maxV });
            }
          },
          getData: function (r, e) {
            var n,
              o,
              a,
              t,
              s,
              i,
              f,
              c,
              l,
              h,
              u,
              m,
              d,
              w,
              b,
              g,
              y,
              k,
              A,
              x,
              M,
              P = this.width / r,
              E = this.height / e,
              T = 0,
              C = r * e * this.components.length;
            p(C);
            var L = new Uint8Array(C);
            switch (this.components.length) {
              case 1:
                for (n = this.components[0], h = 0; h < e; h++)
                  for (s = n.lines[0 | (h * n.scaleY * E)], l = 0; l < r; l++)
                    ((u = s[0 | (l * n.scaleX * P)]), (L[T++] = u));
                break;
              case 2:
                for (n = this.components[0], o = this.components[1], h = 0; h < e; h++)
                  for (
                    s = n.lines[0 | (h * n.scaleY * E)], i = o.lines[0 | (h * o.scaleY * E)], l = 0;
                    l < r;
                    l++
                  )
                    ((u = s[0 | (l * n.scaleX * P)]),
                      (L[T++] = u),
                      (u = i[0 | (l * o.scaleX * P)]),
                      (L[T++] = u));
                break;
              case 3:
                for (
                  M = !0,
                    this.adobe && this.adobe.transformCode
                      ? (M = !0)
                      : void 0 !== this.opts.colorTransform && (M = !!this.opts.colorTransform),
                    n = this.components[0],
                    o = this.components[1],
                    a = this.components[2],
                    h = 0;
                  h < e;
                  h++
                )
                  for (
                    s = n.lines[0 | (h * n.scaleY * E)],
                      i = o.lines[0 | (h * o.scaleY * E)],
                      f = a.lines[0 | (h * a.scaleY * E)],
                      l = 0;
                    l < r;
                    l++
                  )
                    (M
                      ? ((u = s[0 | (l * n.scaleX * P)]),
                        (m = i[0 | (l * o.scaleX * P)]),
                        (k = v(u + 1.402 * ((d = f[0 | (l * a.scaleX * P)]) - 128))),
                        (A = v(u - 0.3441363 * (m - 128) - 0.71413636 * (d - 128))),
                        (x = v(u + 1.772 * (m - 128))))
                      : ((k = s[0 | (l * n.scaleX * P)]),
                        (A = i[0 | (l * o.scaleX * P)]),
                        (x = f[0 | (l * a.scaleX * P)])),
                      (L[T++] = k),
                      (L[T++] = A),
                      (L[T++] = x));
                break;
              case 4:
                if (!this.adobe) throw new Error("Unsupported color mode (4 components)");
                for (
                  M = !1,
                    this.adobe && this.adobe.transformCode
                      ? (M = !0)
                      : void 0 !== this.opts.colorTransform && (M = !!this.opts.colorTransform),
                    n = this.components[0],
                    o = this.components[1],
                    a = this.components[2],
                    t = this.components[3],
                    h = 0;
                  h < e;
                  h++
                )
                  for (
                    s = n.lines[0 | (h * n.scaleY * E)],
                      i = o.lines[0 | (h * o.scaleY * E)],
                      f = a.lines[0 | (h * a.scaleY * E)],
                      c = t.lines[0 | (h * t.scaleY * E)],
                      l = 0;
                    l < r;
                    l++
                  )
                    (M
                      ? ((u = s[0 | (l * n.scaleX * P)]),
                        (m = i[0 | (l * o.scaleX * P)]),
                        (d = f[0 | (l * a.scaleX * P)]),
                        (w = c[0 | (l * t.scaleX * P)]),
                        (b = 255 - v(u + 1.402 * (d - 128))),
                        (g = 255 - v(u - 0.3441363 * (m - 128) - 0.71413636 * (d - 128))),
                        (y = 255 - v(u + 1.772 * (m - 128))))
                      : ((b = s[0 | (l * n.scaleX * P)]),
                        (g = i[0 | (l * o.scaleX * P)]),
                        (y = f[0 | (l * a.scaleX * P)]),
                        (w = c[0 | (l * t.scaleX * P)])),
                      (L[T++] = 255 - b),
                      (L[T++] = 255 - g),
                      (L[T++] = 255 - y),
                      (L[T++] = 255 - w));
                break;
              default:
                throw new Error("Unsupported color mode");
            }
            return L;
          },
          copyToImageData: function (r, e) {
            var n,
              o,
              a,
              t,
              s,
              i,
              f,
              c,
              l,
              h = r.width,
              u = r.height,
              m = r.data,
              d = this.getData(h, u),
              p = 0,
              w = 0;
            switch (this.components.length) {
              case 1:
                for (o = 0; o < u; o++)
                  for (n = 0; n < h; n++)
                    ((a = d[p++]), (m[w++] = a), (m[w++] = a), (m[w++] = a), e && (m[w++] = 255));
                break;
              case 3:
                for (o = 0; o < u; o++)
                  for (n = 0; n < h; n++)
                    ((f = d[p++]),
                      (c = d[p++]),
                      (l = d[p++]),
                      (m[w++] = f),
                      (m[w++] = c),
                      (m[w++] = l),
                      e && (m[w++] = 255));
                break;
              case 4:
                for (o = 0; o < u; o++)
                  for (n = 0; n < h; n++)
                    ((s = d[p++]),
                      (i = d[p++]),
                      (a = d[p++]),
                      (f = 255 - v(s * (1 - (t = d[p++]) / 255) + t)),
                      (c = 255 - v(i * (1 - t / 255) + t)),
                      (l = 255 - v(a * (1 - t / 255) + t)),
                      (m[w++] = f),
                      (m[w++] = c),
                      (m[w++] = l),
                      e && (m[w++] = 255));
                break;
              default:
                throw new Error("Unsupported color mode");
            }
          },
        };
        var m = 0,
          d = 0;
        function p(r = 0) {
          var e = m + r;
          if (e > d) {
            var n = Math.ceil((e - d) / 1024 / 1024);
            throw new Error(`maxMemoryUsageInMB limit exceeded by at least ${n}MB`);
          }
          m = e;
        }
        return (
          (c.resetMaxMemoryUsage = function (r) {
            ((m = 0), (d = r));
          }),
          (c.getBytesAllocated = function () {
            return m;
          }),
          (c.requestMemoryAllocation = p),
          c
        );
      })();
      r.exports = function (r, n = {}) {
        var o = {
            colorTransform: void 0,
            useTArray: !1,
            formatAsRGBA: !0,
            tolerantDecoding: !0,
            maxResolutionInMP: 100,
            maxMemoryUsageInMB: 512,
            ...n,
          },
          a = new Uint8Array(r),
          t = new e();
        ((t.opts = o), e.resetMaxMemoryUsage(1024 * o.maxMemoryUsageInMB * 1024), t.parse(a));
        var s = o.formatAsRGBA ? 4 : 3,
          i = t.width * t.height * s;
        try {
          e.requestMemoryAllocation(i);
          var f = {
            width: t.width,
            height: t.height,
            exifBuffer: t.exifBuffer,
            data: o.useTArray ? new Uint8Array(i) : Buffer.alloc(i),
          };
          t.comments.length > 0 && (f.comments = t.comments);
        } catch (r) {
          if (r instanceof RangeError)
            throw new Error("Could not allocate enough memory for the image. Required: " + i);
          if (r instanceof ReferenceError && "Buffer is not defined" === r.message)
            throw new Error(
              "Buffer is not globally defined in this environment. Consider setting useTArray to true",
            );
          throw r;
        }
        return (t.copyToImageData(f, o.formatAsRGBA), f);
      };
    },
    6502: (r, e, n) => {
      "use strict";
      (n.r(e), n.d(e, { default: () => a }));
      var o = n(6643);
      function a() {
        return {
          mime: "image/jpeg",
          encode: (r, { quality: e = 100 } = {}) => o.encode(r, e).data,
          decode: (r, e) => o.decode(r, e),
        };
      }
    },
    6643: (r, e, n) => {
      var o = n(6727),
        a = n(1855);
      r.exports = { encode: o, decode: a };
    },
    6727: (r) => {
      function e(r) {
        Math.round;
        var e,
          n,
          o,
          a,
          t,
          s = Math.floor,
          i = new Array(64),
          f = new Array(64),
          c = new Array(64),
          l = new Array(64),
          h = new Array(65535),
          u = new Array(65535),
          v = new Array(64),
          m = new Array(64),
          d = [],
          p = 0,
          w = 7,
          b = new Array(64),
          g = new Array(64),
          y = new Array(64),
          k = new Array(256),
          A = new Array(2048),
          x = [
            0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43,
            9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51,
            55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63,
          ],
          M = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
          P = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          E = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
          T = [
            1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161,
            8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26,
            37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83,
            84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118,
            119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150,
            151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181,
            182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212,
            213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241,
            242, 243, 244, 245, 246, 247, 248, 249, 250,
          ],
          C = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
          L = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          X = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
          B = [
            0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66,
            145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241,
            23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73,
            74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116,
            117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147,
            148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178,
            179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202,
            210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233,
            234, 242, 243, 244, 245, 246, 247, 248, 249, 250,
          ];
        function D(r, e) {
          for (var n = 0, o = 0, a = new Array(), t = 1; t <= 16; t++) {
            for (var s = 1; s <= r[t]; s++)
              ((a[e[o]] = []), (a[e[o]][0] = n), (a[e[o]][1] = t), o++, n++);
            n *= 2;
          }
          return a;
        }
        function I(r) {
          for (var e = r[0], n = r[1] - 1; n >= 0;)
            (e & (1 << n) && (p |= 1 << w),
              n--,
              --w < 0 && (255 == p ? (U(255), U(0)) : U(p), (w = 7), (p = 0)));
        }
        function U(r) {
          d.push(r);
        }
        function q(r) {
          (U((r >> 8) & 255), U(255 & r));
        }
        function R(r, e, n, o, a) {
          for (
            var t,
              s = a[0],
              i = a[240],
              f = (function (r, e) {
                var n,
                  o,
                  a,
                  t,
                  s,
                  i,
                  f,
                  c,
                  l,
                  h,
                  u = 0;
                for (l = 0; l < 8; ++l) {
                  ((n = r[u]),
                    (o = r[u + 1]),
                    (a = r[u + 2]),
                    (t = r[u + 3]),
                    (s = r[u + 4]),
                    (i = r[u + 5]),
                    (f = r[u + 6]));
                  var m = n + (c = r[u + 7]),
                    d = n - c,
                    p = o + f,
                    w = o - f,
                    b = a + i,
                    g = a - i,
                    y = t + s,
                    k = t - s,
                    A = m + y,
                    x = m - y,
                    M = p + b,
                    P = p - b;
                  ((r[u] = A + M), (r[u + 4] = A - M));
                  var E = 0.707106781 * (P + x);
                  ((r[u + 2] = x + E), (r[u + 6] = x - E));
                  var T = 0.382683433 * ((A = k + g) - (P = w + d)),
                    C = 0.5411961 * A + T,
                    L = 1.306562965 * P + T,
                    X = 0.707106781 * (M = g + w),
                    B = d + X,
                    D = d - X;
                  ((r[u + 5] = D + C),
                    (r[u + 3] = D - C),
                    (r[u + 1] = B + L),
                    (r[u + 7] = B - L),
                    (u += 8));
                }
                for (u = 0, l = 0; l < 8; ++l) {
                  ((n = r[u]),
                    (o = r[u + 8]),
                    (a = r[u + 16]),
                    (t = r[u + 24]),
                    (s = r[u + 32]),
                    (i = r[u + 40]),
                    (f = r[u + 48]));
                  var I = n + (c = r[u + 56]),
                    U = n - c,
                    q = o + f,
                    R = o - f,
                    Y = a + i,
                    G = a - i,
                    S = t + s,
                    O = t - s,
                    z = I + S,
                    H = I - S,
                    $ = q + Y,
                    j = q - Y;
                  ((r[u] = z + $), (r[u + 32] = z - $));
                  var J = 0.707106781 * (j + H);
                  ((r[u + 16] = H + J), (r[u + 48] = H - J));
                  var V = 0.382683433 * ((z = O + G) - (j = R + U)),
                    _ = 0.5411961 * z + V,
                    N = 1.306562965 * j + V,
                    Q = 0.707106781 * ($ = G + R),
                    W = U + Q,
                    F = U - Q;
                  ((r[u + 40] = F + _),
                    (r[u + 24] = F - _),
                    (r[u + 8] = W + N),
                    (r[u + 56] = W - N),
                    u++);
                }
                for (l = 0; l < 64; ++l)
                  ((h = r[l] * e[l]), (v[l] = h > 0 ? (h + 0.5) | 0 : (h - 0.5) | 0));
                return v;
              })(r, e),
              c = 0;
            c < 64;
            ++c
          )
            m[x[c]] = f[c];
          var l = m[0] - n;
          ((n = m[0]), 0 == l ? I(o[0]) : (I(o[u[(t = 32767 + l)]]), I(h[t])));
          for (var d = 63; d > 0 && 0 == m[d]; d--);
          if (0 == d) return (I(s), n);
          for (var p, w = 1; w <= d;) {
            for (var b = w; 0 == m[w] && w <= d; ++w);
            var g = w - b;
            if (g >= 16) {
              p = g >> 4;
              for (var y = 1; y <= p; ++y) I(i);
              g &= 15;
            }
            ((t = 32767 + m[w]), I(a[(g << 4) + u[t]]), I(h[t]), w++);
          }
          return (63 != d && I(s), n);
        }
        function Y(r) {
          if ((r <= 0 && (r = 1), r > 100 && (r = 100), t != r)) {
            ((function (r) {
              for (
                var e = [
                    16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24,
                    40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103,
                    77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72,
                    92, 95, 98, 112, 100, 103, 99,
                  ],
                  n = 0;
                n < 64;
                n++
              ) {
                var o = s((e[n] * r + 50) / 100);
                (o < 1 ? (o = 1) : o > 255 && (o = 255), (i[x[n]] = o));
              }
              for (
                var a = [
                    17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99,
                    99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
                    99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
                    99, 99, 99, 99,
                  ],
                  t = 0;
                t < 64;
                t++
              ) {
                var h = s((a[t] * r + 50) / 100);
                (h < 1 ? (h = 1) : h > 255 && (h = 255), (f[x[t]] = h));
              }
              for (
                var u = [
                    1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961,
                    0.275899379,
                  ],
                  v = 0,
                  m = 0;
                m < 8;
                m++
              )
                for (var d = 0; d < 8; d++)
                  ((c[v] = 1 / (i[x[v]] * u[m] * u[d] * 8)),
                    (l[v] = 1 / (f[x[v]] * u[m] * u[d] * 8)),
                    v++);
            })(r < 50 ? Math.floor(5e3 / r) : Math.floor(200 - 2 * r)),
              (t = r));
          }
        }
        ((this.encode = function (r, t) {
          var s;
          new Date().getTime();
          (t && Y(t),
            (d = new Array()),
            (p = 0),
            (w = 7),
            q(65496),
            q(65504),
            q(16),
            U(74),
            U(70),
            U(73),
            U(70),
            U(0),
            U(1),
            U(1),
            U(0),
            q(1),
            q(1),
            U(0),
            U(0),
            void 0 !== (s = r.comments) &&
              s.constructor === Array &&
              s.forEach((r) => {
                if ("string" == typeof r) {
                  q(65534);
                  var e,
                    n = r.length;
                  for (q(n + 2), e = 0; e < n; e++) U(r.charCodeAt(e));
                }
              }),
            (function (r) {
              if (r) {
                (q(65505),
                  69 === r[0] && 120 === r[1] && 105 === r[2] && 102 === r[3]
                    ? q(r.length + 2)
                    : (q(r.length + 5 + 2), U(69), U(120), U(105), U(102), U(0)));
                for (var e = 0; e < r.length; e++) U(r[e]);
              }
            })(r.exifBuffer),
            (function () {
              (q(65499), q(132), U(0));
              for (var r = 0; r < 64; r++) U(i[r]);
              U(1);
              for (var e = 0; e < 64; e++) U(f[e]);
            })(),
            (function (r, e) {
              (q(65472),
                q(17),
                U(8),
                q(e),
                q(r),
                U(3),
                U(1),
                U(17),
                U(0),
                U(2),
                U(17),
                U(1),
                U(3),
                U(17),
                U(1));
            })(r.width, r.height),
            (function () {
              (q(65476), q(418), U(0));
              for (var r = 0; r < 16; r++) U(M[r + 1]);
              for (var e = 0; e <= 11; e++) U(P[e]);
              U(16);
              for (var n = 0; n < 16; n++) U(E[n + 1]);
              for (var o = 0; o <= 161; o++) U(T[o]);
              U(1);
              for (var a = 0; a < 16; a++) U(C[a + 1]);
              for (var t = 0; t <= 11; t++) U(L[t]);
              U(17);
              for (var s = 0; s < 16; s++) U(X[s + 1]);
              for (var i = 0; i <= 161; i++) U(B[i]);
            })(),
            q(65498),
            q(12),
            U(3),
            U(1),
            U(0),
            U(2),
            U(17),
            U(3),
            U(17),
            U(0),
            U(63),
            U(0));
          var h = 0,
            u = 0,
            v = 0;
          ((p = 0), (w = 7), (this.encode.displayName = "_encode_"));
          for (
            var m, k, x, D, G, S, O, z, H, $ = r.data, j = r.width, J = r.height, V = 4 * j, _ = 0;
            _ < J;
          ) {
            for (m = 0; m < V;) {
              for (S = G = V * _ + m, O = -1, z = 0, H = 0; H < 64; H++)
                ((S = G + (z = H >> 3) * V + (O = 4 * (7 & H))),
                  _ + z >= J && (S -= V * (_ + 1 + z - J)),
                  m + O >= V && (S -= m + O - V + 4),
                  (k = $[S++]),
                  (x = $[S++]),
                  (D = $[S++]),
                  (b[H] = ((A[k] + A[(x + 256) | 0] + A[(D + 512) | 0]) >> 16) - 128),
                  (g[H] = ((A[(k + 768) | 0] + A[(x + 1024) | 0] + A[(D + 1280) | 0]) >> 16) - 128),
                  (y[H] =
                    ((A[(k + 1280) | 0] + A[(x + 1536) | 0] + A[(D + 1792) | 0]) >> 16) - 128));
              ((h = R(b, c, h, e, o)), (u = R(g, l, u, n, a)), (v = R(y, l, v, n, a)), (m += 32));
            }
            _ += 8;
          }
          if (w >= 0) {
            var N = [];
            ((N[1] = w + 1), (N[0] = (1 << (w + 1)) - 1), I(N));
          }
          return (q(65497), Buffer.from(d));
        }),
          (function () {
            new Date().getTime();
            (r || (r = 50),
              (function () {
                for (var r = String.fromCharCode, e = 0; e < 256; e++) k[e] = r(e);
              })(),
              (e = D(M, P)),
              (n = D(C, L)),
              (o = D(E, T)),
              (a = D(X, B)),
              (function () {
                for (var r = 1, e = 2, n = 1; n <= 15; n++) {
                  for (var o = r; o < e; o++)
                    ((u[32767 + o] = n),
                      (h[32767 + o] = []),
                      (h[32767 + o][1] = n),
                      (h[32767 + o][0] = o));
                  for (var a = -(e - 1); a <= -r; a++)
                    ((u[32767 + a] = n),
                      (h[32767 + a] = []),
                      (h[32767 + a][1] = n),
                      (h[32767 + a][0] = e - 1 + a));
                  ((r <<= 1), (e <<= 1));
                }
              })(),
              (function () {
                for (var r = 0; r < 256; r++)
                  ((A[r] = 19595 * r),
                    (A[(r + 256) | 0] = 38470 * r),
                    (A[(r + 512) | 0] = 7471 * r + 32768),
                    (A[(r + 768) | 0] = -11059 * r),
                    (A[(r + 1024) | 0] = -21709 * r),
                    (A[(r + 1280) | 0] = 32768 * r + 8421375),
                    (A[(r + 1536) | 0] = -27439 * r),
                    (A[(r + 1792) | 0] = -5329 * r));
              })(),
              Y(r),
              new Date().getTime());
          })());
      }
      r.exports = function (r, n) {
        void 0 === n && (n = 50);
        return { data: new e(n).encode(r, n), width: r.width, height: r.height };
      };
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-computer-use/dist/502.js.map
