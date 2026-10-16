((exports.id = 928),
  (exports.ids = [928]),
  (exports.modules = {
    1182: (e, t, r) => {
      !(function () {
        var t = {};
        function n() {
          "undefined" == typeof process && console.log.apply(console, arguments);
        }
        ((e.exports = t),
          (function (e, t) {
            var r, a, i, o, s, f, l, h, d, u, c, _, v, w;
            (!(function () {
              "use strict";
              var t = (function () {
                  function e(e) {
                    this.message = "JPEG error: " + e;
                  }
                  return (
                    (e.prototype = new Error()),
                    (e.prototype.name = "JpegError"),
                    (e.constructor = e),
                    e
                  );
                })(),
                r = (function () {
                  var e = new Uint8Array([
                      0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40,
                      48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29,
                      22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54,
                      47, 55, 62, 63,
                    ]),
                    r = 4017,
                    a = 799,
                    i = 3406,
                    o = 2276,
                    s = 1567,
                    f = 3784,
                    l = 5793,
                    h = 2896;
                  function d(e) {
                    (null == e && (e = {}),
                      null == e.w && (e.w = -1),
                      (this.V = e.n),
                      (this.N = e.w));
                  }
                  function u(e, t) {
                    for (var r, n, a, i = 0, o = [], s = 16; s > 0 && !e[s - 1];) s--;
                    o.push({ children: [], index: 0 });
                    var f = o[0];
                    for (r = 0; r < s; r++) {
                      for (n = 0; n < e[r]; n++) {
                        for ((f = o.pop()).children[f.index] = t[i]; f.index > 0;) f = o.pop();
                        for (f.index++, o.push(f); o.length <= r;)
                          (o.push((a = { children: [], index: 0 })),
                            (f.children[f.index] = a.children),
                            (f = a));
                        i++;
                      }
                      r + 1 < s &&
                        (o.push((a = { children: [], index: 0 })),
                        (f.children[f.index] = a.children),
                        (f = a));
                    }
                    return o[0].children;
                  }
                  function c(e, t, r) {
                    return 64 * ((e.P + 1) * t + r);
                  }
                  function _(r, a, i, o, s, f, l, h, d, u) {
                    null == u && (u = !1);
                    var _,
                      v,
                      w,
                      b,
                      p,
                      m,
                      k,
                      y,
                      x,
                      A,
                      E,
                      I = i.m,
                      B = i.Z,
                      U = a,
                      z = 0,
                      D = 0,
                      S = 0,
                      M = 0,
                      F = 0,
                      C = 0;
                    function N() {
                      if (D > 0) return (D--, (z >> D) & 1);
                      if (255 === (z = r[a++])) {
                        var e = r[a++];
                        if (e) {
                          if (220 === e && u) {
                            var o = n(r, (a += 2));
                            if (((a += 2), o > 0 && o !== i.s))
                              throw new DNLMarkerError(
                                "Found DNL marker (0xFFDC) while parsing scan data",
                                o,
                              );
                          } else if (217 === e) {
                            if (u) {
                              var s = 8 * F;
                              if (s > 0 && s < i.s / 10)
                                throw new DNLMarkerError(
                                  "Found EOI marker (0xFFD9) while parsing scan data, possibly caused by incorrect `scanLines` parameter",
                                  s,
                                );
                            }
                            throw new EOIMarkerError(
                              "Found EOI marker (0xFFD9) while parsing scan data",
                            );
                          }
                          throw new t("unexpected marker");
                        }
                      }
                      return ((D = 7), z >>> 7);
                    }
                    function O(e) {
                      for (var r = e; ;) {
                        switch (typeof (r = r[N()])) {
                          case "number":
                            return r;
                          case "object":
                            continue;
                        }
                        throw new t("invalid huffman sequence");
                      }
                    }
                    function L(e) {
                      for (var t = 0; e > 0;) ((t = (t << 1) | N()), e--);
                      return t;
                    }
                    function Z(e) {
                      if (1 === e) return 1 === N() ? 1 : -1;
                      var t = L(e);
                      return t >= 1 << (e - 1) ? t : t + (-1 << e) + 1;
                    }
                    function R(e, t, r, n, a) {
                      var i = r % I;
                      F = ((r / I) | 0) * e.A + n;
                      var o = i * e.h + a;
                      t(e, c(e, F, o));
                    }
                    function P(e, t, r) {
                      F = (r / e.P) | 0;
                      var n = r % e.P;
                      t(e, c(e, F, n));
                    }
                    var T = o.length;
                    for (
                      k = B
                        ? 0 === f
                          ? 0 === h
                            ? function (e, t) {
                                var r = O(e.J),
                                  n = 0 === r ? 0 : Z(r) << d;
                                e.D[t] = e.Q += n;
                              }
                            : function (e, t) {
                                e.D[t] |= N() << d;
                              }
                          : 0 === h
                            ? function (t, r) {
                                if (S > 0) S--;
                                else
                                  for (var n = f, a = l; n <= a;) {
                                    var i = O(t.i),
                                      o = 15 & i,
                                      s = i >> 4;
                                    if (0 !== o) {
                                      var h = e[(n += s)];
                                      ((t.D[r + h] = Z(o) * (1 << d)), n++);
                                    } else {
                                      if (s < 15) {
                                        S = L(s) + (1 << s) - 1;
                                        break;
                                      }
                                      n += 16;
                                    }
                                  }
                              }
                            : function (r, n) {
                                for (var a, i, o = f, s = l, h = 0; o <= s;) {
                                  var u = n + e[o],
                                    c = r.D[u] < 0 ? -1 : 1;
                                  switch (M) {
                                    case 0:
                                      if (((h = (i = O(r.i)) >> 4), 0 == (a = 15 & i)))
                                        h < 15
                                          ? ((S = L(h) + (1 << h)), (M = 4))
                                          : ((h = 16), (M = 1));
                                      else {
                                        if (1 !== a) throw new t("invalid ACn encoding");
                                        ((_ = Z(a)), (M = h ? 2 : 3));
                                      }
                                      continue;
                                    case 1:
                                    case 2:
                                      r.D[u]
                                        ? (r.D[u] += c * (N() << d))
                                        : 0 === --h && (M = 2 === M ? 3 : 0);
                                      break;
                                    case 3:
                                      r.D[u]
                                        ? (r.D[u] += c * (N() << d))
                                        : ((r.D[u] = _ << d), (M = 0));
                                      break;
                                    case 4:
                                      r.D[u] && (r.D[u] += c * (N() << d));
                                  }
                                  o++;
                                }
                                4 === M && 0 === --S && (M = 0);
                              }
                        : function (t, r) {
                            var n = O(t.J),
                              a = 0 === n ? 0 : Z(n),
                              i = 1;
                            for (t.D[r] = t.Q += a; i < 64;) {
                              var o = O(t.i),
                                s = 15 & o,
                                f = o >> 4;
                              if (0 !== s) {
                                var l = e[(i += f)];
                                ((t.D[r + l] = Z(s)), i++);
                              } else {
                                if (f < 15) break;
                                i += 16;
                              }
                            }
                          },
                        x = 1 === T ? o[0].P * o[0].c : I * i.R;
                      C <= x;
                    ) {
                      var G = s ? Math.min(x - C, s) : x;
                      if (G > 0) {
                        for (w = 0; w < T; w++) o[w].Q = 0;
                        if (((S = 0), 1 === T)) for (v = o[0], m = 0; m < G; m++) (P(v, k, C), C++);
                        else
                          for (m = 0; m < G; m++) {
                            for (w = 0; w < T; w++)
                              for (A = (v = o[w]).h, E = v.A, b = 0; b < E; b++)
                                for (p = 0; p < A; p++) R(v, k, C, b, p);
                            C++;
                          }
                      }
                      if (((D = 0), !(y = g(r, a)))) break;
                      if (y.u) {
                        a = y.offset;
                      }
                      if (!(y.M >= 65488 && y.M <= 65495)) break;
                      a += 2;
                    }
                    return a - U;
                  }
                  function v(e, n, d) {
                    var u,
                      c,
                      _,
                      v,
                      w,
                      g,
                      b,
                      p,
                      m,
                      k,
                      y,
                      x,
                      A,
                      E,
                      I,
                      B,
                      U,
                      z = e.$,
                      D = e.D;
                    if (!z) throw new t("missing required Quantization Table.");
                    for (var S = 0; S < 64; S += 8)
                      ((m = D[n + S]),
                        (k = D[n + S + 1]),
                        (y = D[n + S + 2]),
                        (x = D[n + S + 3]),
                        (A = D[n + S + 4]),
                        (E = D[n + S + 5]),
                        (I = D[n + S + 6]),
                        (B = D[n + S + 7]),
                        (m *= z[S]),
                        0 !== (k | y | x | A | E | I | B)
                          ? ((k *= z[S + 1]),
                            (y *= z[S + 2]),
                            (x *= z[S + 3]),
                            (A *= z[S + 4]),
                            (E *= z[S + 5]),
                            (I *= z[S + 6]),
                            (B *= z[S + 7]),
                            (c =
                              (u = ((u = (l * m + 128) >> 8) + (c = (l * A + 128) >> 8) + 1) >> 1) -
                              c),
                            (U = ((_ = y) * f + (v = I) * s + 128) >> 8),
                            (_ = (_ * s - v * f + 128) >> 8),
                            (b =
                              (w = ((w = (h * (k - B) + 128) >> 8) + (b = E << 4) + 1) >> 1) - b),
                            (g =
                              (p = ((p = (h * (k + B) + 128) >> 8) + (g = x << 4) + 1) >> 1) - g),
                            (v = (u = (u + (v = U) + 1) >> 1) - v),
                            (_ = (c = (c + _ + 1) >> 1) - _),
                            (U = (w * o + p * i + 2048) >> 12),
                            (w = (w * i - p * o + 2048) >> 12),
                            (p = U),
                            (U = (g * a + b * r + 2048) >> 12),
                            (g = (g * r - b * a + 2048) >> 12),
                            (b = U),
                            (d[S] = u + p),
                            (d[S + 7] = u - p),
                            (d[S + 1] = c + b),
                            (d[S + 6] = c - b),
                            (d[S + 2] = _ + g),
                            (d[S + 5] = _ - g),
                            (d[S + 3] = v + w),
                            (d[S + 4] = v - w))
                          : ((U = (l * m + 512) >> 10),
                            (d[S] = U),
                            (d[S + 1] = U),
                            (d[S + 2] = U),
                            (d[S + 3] = U),
                            (d[S + 4] = U),
                            (d[S + 5] = U),
                            (d[S + 6] = U),
                            (d[S + 7] = U)));
                    for (var M = 0; M < 8; ++M)
                      ((m = d[M]),
                        0 !==
                        ((k = d[M + 8]) |
                          (y = d[M + 16]) |
                          (x = d[M + 24]) |
                          (A = d[M + 32]) |
                          (E = d[M + 40]) |
                          (I = d[M + 48]) |
                          (B = d[M + 56]))
                          ? ((c =
                              (u =
                                4112 +
                                (((u = (l * m + 2048) >> 12) + (c = (l * A + 2048) >> 12) + 1) >>
                                  1)) - c),
                            (U = ((_ = y) * f + (v = I) * s + 2048) >> 12),
                            (_ = (_ * s - v * f + 2048) >> 12),
                            (v = U),
                            (b = (w = ((w = (h * (k - B) + 2048) >> 12) + (b = E) + 1) >> 1) - b),
                            (g = (p = ((p = (h * (k + B) + 2048) >> 12) + (g = x) + 1) >> 1) - g),
                            (U = (w * o + p * i + 2048) >> 12),
                            (w = (w * i - p * o + 2048) >> 12),
                            (p = U),
                            (U = (g * a + b * r + 2048) >> 12),
                            (g = (g * r - b * a + 2048) >> 12),
                            (m = (u = (u + v + 1) >> 1) + p) < 16
                              ? (m = 0)
                              : m >= 4080
                                ? (m = 255)
                                : (m >>= 4),
                            (k = (c = (c + _ + 1) >> 1) + (b = U)) < 16
                              ? (k = 0)
                              : k >= 4080
                                ? (k = 255)
                                : (k >>= 4),
                            (y = (_ = c - _) + g) < 16
                              ? (y = 0)
                              : y >= 4080
                                ? (y = 255)
                                : (y >>= 4),
                            (x = (v = u - v) + w) < 16
                              ? (x = 0)
                              : x >= 4080
                                ? (x = 255)
                                : (x >>= 4),
                            (A = v - w) < 16 ? (A = 0) : A >= 4080 ? (A = 255) : (A >>= 4),
                            (E = _ - g) < 16 ? (E = 0) : E >= 4080 ? (E = 255) : (E >>= 4),
                            (I = c - b) < 16 ? (I = 0) : I >= 4080 ? (I = 255) : (I >>= 4),
                            (B = u - p) < 16 ? (B = 0) : B >= 4080 ? (B = 255) : (B >>= 4),
                            (D[n + M] = m),
                            (D[n + M + 8] = k),
                            (D[n + M + 16] = y),
                            (D[n + M + 24] = x),
                            (D[n + M + 32] = A),
                            (D[n + M + 40] = E),
                            (D[n + M + 48] = I),
                            (D[n + M + 56] = B))
                          : ((U =
                              (U = (l * m + 8192) >> 14) < -2040
                                ? 0
                                : U >= 2024
                                  ? 255
                                  : (U + 2056) >> 4),
                            (D[n + M] = U),
                            (D[n + M + 8] = U),
                            (D[n + M + 16] = U),
                            (D[n + M + 24] = U),
                            (D[n + M + 32] = U),
                            (D[n + M + 40] = U),
                            (D[n + M + 48] = U),
                            (D[n + M + 56] = U)));
                  }
                  function w(e, t) {
                    for (var r = t.P, n = t.c, a = new Int16Array(64), i = 0; i < n; i++)
                      for (var o = 0; o < r; o++) {
                        v(t, c(t, i, o), a);
                      }
                    return t.D;
                  }
                  function g(e, t, r) {
                    null == r && (r = t);
                    var a = e.length - 1,
                      i = r < t ? r : t;
                    if (t >= a) return null;
                    var o = n(e, t);
                    if (o >= 65472 && o <= 65534) return { u: null, M: o, offset: t };
                    for (var s = n(e, i); !(s >= 65472 && s <= 65534);) {
                      if (++i >= a) return null;
                      s = n(e, i);
                    }
                    return { u: o.toString(16), M: s, offset: i };
                  }
                  return (
                    (d.prototype = {
                      parse(r, a) {
                        null == a && (a = {});
                        var i,
                          o,
                          s = a.F,
                          f = 0,
                          l = null,
                          h = null,
                          d = 0;
                        function c() {
                          var e = n(r, f),
                            t = (f += 2) + e - 2,
                            a = g(r, t, f);
                          a && a.u && (t = a.offset);
                          var i = r.subarray(f, t);
                          return ((f += i.length), i);
                        }
                        function v(e) {
                          for (
                            var t = Math.ceil(e.o / 8 / e.X), r = Math.ceil(e.s / 8 / e.B), n = 0;
                            n < e.W.length;
                            n++
                          ) {
                            G = e.W[n];
                            var a = Math.ceil((Math.ceil(e.o / 8) * G.h) / e.X),
                              i = Math.ceil((Math.ceil(e.s / 8) * G.A) / e.B),
                              o = t * G.h,
                              s = 64 * (r * G.A) * (o + 1);
                            ((G.D = new Int16Array(s)), (G.P = a), (G.c = i));
                          }
                          ((e.m = t), (e.R = r));
                        }
                        var b = [],
                          p = [],
                          m = [],
                          k = n(r, f);
                        if (((f += 2), 65496 !== k)) throw new t("SOI not found");
                        ((k = n(r, f)), (f += 2));
                        e: for (; 65497 !== k;) {
                          var y, x, A;
                          switch (k) {
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
                              var E = c();
                              (65504 === k &&
                                74 === E[0] &&
                                70 === E[1] &&
                                73 === E[2] &&
                                70 === E[3] &&
                                0 === E[4] &&
                                (l = {
                                  version: { d: E[5], T: E[6] },
                                  K: E[7],
                                  j: (E[8] << 8) | E[9],
                                  H: (E[10] << 8) | E[11],
                                  S: E[12],
                                  I: E[13],
                                  C: E.subarray(14, 14 + 3 * E[12] * E[13]),
                                }),
                                65518 === k &&
                                  65 === E[0] &&
                                  100 === E[1] &&
                                  111 === E[2] &&
                                  98 === E[3] &&
                                  101 === E[4] &&
                                  (h = {
                                    version: (E[5] << 8) | E[6],
                                    k: (E[7] << 8) | E[8],
                                    q: (E[9] << 8) | E[10],
                                    a: E[11],
                                  }));
                              break;
                            case 65499:
                              for (var I = n(r, f) + (f += 2) - 2; f < I;) {
                                var B = r[f++],
                                  U = new Uint16Array(64);
                                if (B >> 4) {
                                  if (B >> 4 != 1) throw new t("DQT - invalid table spec");
                                  for (x = 0; x < 64; x++) ((U[e[x]] = n(r, f)), (f += 2));
                                } else for (x = 0; x < 64; x++) U[e[x]] = r[f++];
                                b[15 & B] = U;
                              }
                              break;
                            case 65472:
                            case 65473:
                            case 65474:
                              if (i) throw new t("Only single frame JPEGs supported");
                              ((f += 2),
                                ((i = {}).G = 65473 === k),
                                (i.Z = 65474 === k),
                                (i.precision = r[f++]));
                              var z,
                                D = n(r, f),
                                S = 0,
                                M = 0;
                              ((f += 2),
                                (i.s = s || D),
                                (i.o = n(r, f)),
                                (f += 2),
                                (i.W = []),
                                (i._ = {}));
                              var F = r[f++];
                              for (y = 0; y < F; y++) {
                                z = r[f];
                                var C = r[f + 1] >> 4,
                                  N = 15 & r[f + 1];
                                (S < C && (S = C), M < N && (M = N));
                                var O = r[f + 2];
                                ((A = i.W.push({ h: C, A: N, L: O, $: null })),
                                  (i._[z] = A - 1),
                                  (f += 3));
                              }
                              ((i.X = S), (i.B = M), v(i));
                              break;
                            case 65476:
                              var L = n(r, f);
                              for (f += 2, y = 2; y < L;) {
                                var Z = r[f++],
                                  R = new Uint8Array(16),
                                  P = 0;
                                for (x = 0; x < 16; x++, f++) P += R[x] = r[f];
                                var T = new Uint8Array(P);
                                for (x = 0; x < P; x++, f++) T[x] = r[f];
                                ((y += 17 + P), ((Z >> 4 ? p : m)[15 & Z] = u(R, T)));
                              }
                              break;
                            case 65501:
                              ((o = n(r, (f += 2))), (f += 2));
                              break;
                            case 65498:
                              var G,
                                j = 1 === ++d && !s;
                              f += 2;
                              var J = r[f++],
                                H = [];
                              for (y = 0; y < J; y++) {
                                var W = r[f++],
                                  K = i._[W];
                                (G = i.W[K]).index = W;
                                var Y = r[f++];
                                ((G.J = m[Y >> 4]), (G.i = p[15 & Y]), H.push(G));
                              }
                              var q = r[f++],
                                X = r[f++],
                                Q = r[f++];
                              try {
                                var V = _(r, f, i, H, o, q, X, Q >> 4, 15 & Q, j);
                                f += V;
                              } catch (e) {
                                if (e instanceof DNLMarkerError) return this.parse(r, { F: e.s });
                                if (e instanceof EOIMarkerError) break e;
                                throw e;
                              }
                              break;
                            case 65500:
                              f += 4;
                              break;
                            case 65535:
                              255 !== r[f] && f--;
                              break;
                            default:
                              var $ = g(r, f - 2, f - 3);
                              if ($ && $.u) {
                                f = $.offset;
                                break;
                              }
                              if (f >= r.length - 1) break e;
                              throw new t("JpegImage.parse - unknown marker: " + k.toString(16));
                          }
                          ((k = n(r, f)), (f += 2));
                        }
                        for (
                          this.width = i.o,
                            this.height = i.s,
                            this.g = l,
                            this.b = h,
                            this.W = [],
                            y = 0;
                          y < i.W.length;
                          y++
                        ) {
                          var ee = b[(G = i.W[y]).L];
                          (ee && (G.$ = ee),
                            this.W.push({
                              index: G.index,
                              e: w(0, G),
                              l: G.h / i.X,
                              t: G.A / i.B,
                              P: G.P,
                              c: G.c,
                            }));
                        }
                        this.p = this.W.length;
                      },
                      Y(e, t, r) {
                        null == r && (r = !1);
                        var n,
                          a,
                          i,
                          o,
                          s,
                          f,
                          l,
                          h,
                          d,
                          u,
                          c,
                          _,
                          v = this.width / e,
                          w = this.height / t,
                          g = 0,
                          b = this.W.length,
                          p = e * t * b,
                          m = new Uint8ClampedArray(p),
                          k = new Uint32Array(e),
                          y = 4294967288;
                        for (l = 0; l < b; l++) {
                          if (
                            ((a = (n = this.W[l]).l * v),
                            (i = n.t * w),
                            (g = l),
                            (c = n.e),
                            (o = (n.P + 1) << 3),
                            a !== _)
                          ) {
                            for (s = 0; s < e; s++)
                              ((h = 0 | (s * a)), (k[s] = ((h & y) << 3) | (7 & h)));
                            _ = a;
                          }
                          for (f = 0; f < t; f++)
                            for (
                              u = (o * ((h = 0 | (f * i)) & y)) | ((7 & h) << 3), s = 0;
                              s < e;
                              s++
                            )
                              ((m[g] = c[u + k[s]]), (g += b));
                        }
                        var x = this.V;
                        if (
                          (r ||
                            4 !== b ||
                            x ||
                            (x = new Int32Array([-256, 255, -256, 255, -256, 255, -256, 255])),
                          x)
                        )
                          for (l = 0; l < p;)
                            for (h = 0, d = 0; h < b; h++, l++, d += 2)
                              m[l] = ((m[l] * x[d]) >> 8) + x[d + 1];
                        return m;
                      },
                      get f() {
                        return this.b
                          ? !!this.b.a
                          : 3 === this.p
                            ? 0 !== this.N &&
                              (82 !== this.W[0].index ||
                                71 !== this.W[1].index ||
                                66 !== this.W[2].index)
                            : 1 === this.N;
                      },
                      z: function (e) {
                        for (var t, r, n, a = 0, i = e.length; a < i; a += 3)
                          ((t = e[a]),
                            (r = e[a + 1]),
                            (n = e[a + 2]),
                            (e[a] = t - 179.456 + 1.402 * n),
                            (e[a + 1] = t + 135.459 - 0.344 * r - 0.714 * n),
                            (e[a + 2] = t - 226.816 + 1.772 * r));
                        return e;
                      },
                      O: function (e) {
                        for (var t, r, n, a, i = 0, o = 0, s = e.length; o < s; o += 4)
                          ((t = e[o]),
                            (r = e[o + 1]),
                            (n = e[o + 2]),
                            (a = e[o + 3]),
                            (e[i++] =
                              r *
                                (-660635669420364e-19 * r +
                                  0.000437130475926232 * n -
                                  54080610064599e-18 * t +
                                  0.00048449797120281 * a -
                                  0.154362151871126) -
                              122.67195406894 +
                              n *
                                (-0.000957964378445773 * n +
                                  0.000817076911346625 * t -
                                  0.00477271405408747 * a +
                                  1.53380253221734) +
                              t *
                                (0.000961250184130688 * t -
                                  0.00266257332283933 * a +
                                  0.48357088451265) +
                              a * (-0.000336197177618394 * a + 0.484791561490776)),
                            (e[i++] =
                              107.268039397724 +
                              r *
                                (219927104525741e-19 * r -
                                  0.000640992018297945 * n +
                                  0.000659397001245577 * t +
                                  0.000426105652938837 * a -
                                  0.176491792462875) +
                              n *
                                (-0.000778269941513683 * n +
                                  0.00130872261408275 * t +
                                  0.000770482631801132 * a -
                                  0.151051492775562) +
                              t *
                                (0.00126935368114843 * t -
                                  0.00265090189010898 * a +
                                  0.25802910206845) +
                              a * (-0.000318913117588328 * a - 0.213742400323665)),
                            (e[i++] =
                              r *
                                (-0.000570115196973677 * r -
                                  263409051004589e-19 * n +
                                  0.0020741088115012 * t -
                                  0.00288260236853442 * a +
                                  0.814272968359295) -
                              20.810012546947 +
                              n *
                                (-153496057440975e-19 * n -
                                  0.000132689043961446 * t +
                                  0.000560833691242812 * a -
                                  0.195152027534049) +
                              t *
                                (0.00174418132927582 * t -
                                  0.00255243321439347 * a +
                                  0.116935020465145) +
                              a * (-0.000343531996510555 * a + 0.24165260232407)));
                        return e.subarray(0, i);
                      },
                      r: function (e) {
                        for (var t, r, n, a = 0, i = e.length; a < i; a += 4)
                          ((t = e[a]),
                            (r = e[a + 1]),
                            (n = e[a + 2]),
                            (e[a] = 434.456 - t - 1.402 * n),
                            (e[a + 1] = 119.541 - t + 0.344 * r + 0.714 * n),
                            (e[a + 2] = 481.816 - t - 1.772 * r));
                        return e;
                      },
                      U: function (e) {
                        for (var t, r, n, a, i = 0, o = 0, s = e.length; o < s; o += 4)
                          ((t = e[o]),
                            (r = e[o + 1]),
                            (n = e[o + 2]),
                            (a = e[o + 3]),
                            (e[i++] =
                              255 +
                              t *
                                (-6747147073602441e-20 * t +
                                  0.0008379262121013727 * r +
                                  0.0002894718188643294 * n +
                                  0.003264231057537806 * a -
                                  1.1185611867203937) +
                              r *
                                (26374107616089405e-21 * r -
                                  8626949158638572e-20 * n -
                                  0.0002748769067499491 * a -
                                  0.02155688794978967) +
                              n *
                                (-3878099212869363e-20 * n -
                                  0.0003267808279485286 * a +
                                  0.0686742238595345) -
                              a * (0.0003361971776183937 * a + 0.7430659151342254)),
                            (e[i++] =
                              255 +
                              t *
                                (0.00013596372813588848 * t +
                                  0.000924537132573585 * r +
                                  0.00010567359618683593 * n +
                                  0.0004791864687436512 * a -
                                  0.3109689587515875) +
                              r *
                                (-0.00023545346108370344 * r +
                                  0.0002702845253534714 * n +
                                  0.0020200308977307156 * a -
                                  0.7488052167015494) +
                              n *
                                (6834815998235662e-20 * n +
                                  0.00015168452363460973 * a -
                                  0.09751927774728933) -
                              a * (0.0003189131175883281 * a + 0.7364883807733168)),
                            (e[i++] =
                              255 +
                              t *
                                (13598650411385307e-21 * t +
                                  0.00012423956175490851 * r +
                                  0.0004751985097583589 * n -
                                  36729317476630422e-22 * a -
                                  0.05562186980264034) +
                              r *
                                (0.00016141380598724676 * r +
                                  0.0009692239130725186 * n +
                                  0.0007782692450036253 * a -
                                  0.44015232367526463) +
                              n *
                                (5.068882914068769e-7 * n +
                                  0.0017778369011375071 * a -
                                  0.7591454649749609) -
                              a * (0.0003435319965105553 * a + 0.7063770186160144)));
                        return e.subarray(0, i);
                      },
                      getData: function (e) {
                        var r = e.width,
                          n = e.height,
                          a = e.forceRGB,
                          i = e.isSourcePDF;
                        if (this.p > 4) throw new t("Unsupported color mode");
                        var o = this.Y(r, n, i);
                        if (1 === this.p && a) {
                          for (
                            var s = o.length, f = new Uint8ClampedArray(3 * s), l = 0, h = 0;
                            h < s;
                            h++
                          ) {
                            var d = o[h];
                            ((f[l++] = d), (f[l++] = d), (f[l++] = d));
                          }
                          return f;
                        }
                        if (3 === this.p && this.f) return this.z(o);
                        if (4 === this.p) {
                          if (this.f) return a ? this.O(o) : this.r(o);
                          if (a) return this.U(o);
                        }
                        return o;
                      },
                    }),
                    d
                  );
                })();
              function n(e, t) {
                return (e[t] << 8) | e[t + 1];
              }
              e.JpegDecoder = r;
            })(),
              (e.encodeImage = function (t, r, n, a) {
                var i = {
                  t256: [r],
                  t257: [n],
                  t258: [8, 8, 8, 8],
                  t259: [1],
                  t262: [2],
                  t273: [1e3],
                  t277: [4],
                  t278: [n],
                  t279: [r * n * 4],
                  t282: [[72, 1]],
                  t283: [[72, 1]],
                  t284: [1],
                  t286: [[0, 1]],
                  t287: [[0, 1]],
                  t296: [1],
                  t305: ["Photopea (UTIF.js)"],
                  t338: [1],
                };
                if (a) for (var o in a) i[o] = a[o];
                var s = new Uint8Array(e.encode([i])),
                  f = new Uint8Array(t),
                  l = new Uint8Array(1e3 + r * n * 4);
                for (o = 0; o < s.length; o++) l[o] = s[o];
                for (o = 0; o < f.length; o++) l[1e3 + o] = f[o];
                return l.buffer;
              }),
              (e.encode = function (t) {
                var r = new Uint8Array(2e4),
                  n = 4,
                  a = e._binBE;
                ((r[0] = r[1] = 77), a.writeUshort(r, 2, 42));
                var i = 8;
                (a.writeUint(r, n, i), (n += 4));
                for (var o = 0; o < t.length; o++) {
                  var s = e._writeIFD(a, e._types.basic, r, i, t[o]);
                  ((i = s[1]),
                    o < t.length - 1 && (3 & i && (i += 4 - (3 & i)), a.writeUint(r, s[0], i)));
                }
                return r.slice(0, i).buffer;
              }),
              (e.decode = function (t, r) {
                null == r && (r = { parseMN: !0, debug: !1 });
                var a = new Uint8Array(t),
                  i = 0,
                  o = e._binBE.readASCII(a, i, 2);
                i += 2;
                var s = "II" == o ? e._binLE : e._binBE;
                s.readUshort(a, i);
                i += 2;
                var f = s.readUint(a, i);
                i += 4;
                for (var l = []; ;) {
                  var h = s.readUshort(a, f),
                    d = s.readUshort(a, f + 4);
                  if (0 != h && (d < 1 || 13 < d)) {
                    n("error in TIFF");
                    break;
                  }
                  if ((e._readIFD(s, a, f, l, 0, r), 0 == (f = s.readUint(a, f + 2 + 12 * h))))
                    break;
                }
                return l;
              }),
              (e.decodeImage = function (t, r, a) {
                if (!r.data) {
                  var i = new Uint8Array(t),
                    o = e._binBE.readASCII(i, 0, 2);
                  if (null != r.t256) {
                    ((r.isLE = "II" == o), (r.width = r.t256[0]), (r.height = r.t257[0]));
                    var s = r.t259 ? r.t259[0] : 1,
                      f = r.t266 ? r.t266[0] : 1;
                    (r.t284 && 2 == r.t284[0] && n("PlanarConfiguration 2 should not be used!"),
                      7 == s && r.t258 && r.t258.length > 3 && (r.t258 = r.t258.slice(0, 3)));
                    var l = r.t277 ? r.t277[0] : 1,
                      h = (r.t258 ? r.t258[0] : 1) * l;
                    (1 == s &&
                      null != r.t279 &&
                      r.t278 &&
                      32803 == r.t262[0] &&
                      (h = Math.round((8 * r.t279[0]) / (r.width * r.t278[0]))),
                      r.t50885 && 4 == r.t50885[0] && (h = 3 * r.t258[0]));
                    var d = 8 * Math.ceil((r.width * h) / 8),
                      u = r.t273;
                    (null == u || r.t322) && (u = r.t324);
                    var c = r.t279;
                    (1 == s && 1 == u.length && (c = [r.height * (d >>> 3)]),
                      (null == c || r.t322) && (c = r.t325));
                    var _ = new Uint8Array(r.height * (d >>> 3)),
                      v = 0;
                    if (null != r.t322) {
                      var w = r.t322[0],
                        g = r.t323[0],
                        b = Math.floor((r.width + w - 1) / w),
                        p = Math.floor((r.height + g - 1) / g),
                        m = new Uint8Array(0 | Math.ceil((w * g * h) / 8));
                      console.log("====", b, p);
                      for (var k = 0; k < p; k++)
                        for (var y = 0; y < b; y++) {
                          var x = k * b + y;
                          (m.fill(0),
                            e.decode._decompress(r, a, i, u[x], c[x], s, m, 0, f, w, g),
                            6 == s
                              ? (_ = m)
                              : e._copyTile(
                                  m,
                                  0 | Math.ceil((w * h) / 8),
                                  g,
                                  _,
                                  0 | Math.ceil((r.width * h) / 8),
                                  r.height,
                                  0 | Math.ceil((y * w * h) / 8),
                                  k * g,
                                ));
                        }
                      v = 8 * _.length;
                    } else {
                      if (null == u) return;
                      var A = r.t278 ? r.t278[0] : r.height;
                      A = Math.min(A, r.height);
                      for (x = 0; x < u.length; x++)
                        (e.decode._decompress(
                          r,
                          a,
                          i,
                          u[x],
                          c[x],
                          s,
                          _,
                          0 | Math.ceil(v / 8),
                          f,
                          r.width,
                          A,
                        ),
                          (v += d * A));
                      v = Math.min(v, 8 * _.length);
                    }
                    r.data = new Uint8Array(_.buffer, 0, 0 | Math.ceil(v / 8));
                  }
                }
              }),
              (e.decode._decompress = function (r, a, i, o, s, f, l, h, d, u, c) {
                if (
                  (r.t271 && "Panasonic" == r.t271[0] && r.t45 && 6 == r.t45[0] && (f = 34316),
                  1 == f)
                )
                  for (var _ = 0; _ < s; _++) l[h + _] = i[o + _];
                else if (2 == f) e.decode._decodeG2(i, o, s, l, h, u, d);
                else if (3 == f)
                  e.decode._decodeG3(i, o, s, l, h, u, d, !!r.t292 && !(1 & ~r.t292[0]));
                else if (4 == f) e.decode._decodeG4(i, o, s, l, h, u, d);
                else if (5 == f) e.decode._decodeLZW(i, o, s, l, h, 8);
                else if (6 == f) e.decode._decodeOldJPEG(r, i, o, s, l, h);
                else if (7 == f || 34892 == f) e.decode._decodeNewJPEG(r, i, o, s, l, h);
                else if (8 == f || 32946 == f) {
                  var v = new Uint8Array(i.buffer, o + 2, s - 6),
                    w = t.inflateRaw(v);
                  h + w.length <= l.length && l.set(w, h);
                } else
                  9 == f
                    ? e.decode._decodeVC5(i, o, s, l, h, r.t33422)
                    : 32767 == f
                      ? e.decode._decodeARW(r, i, o, s, l, h)
                      : 32773 == f
                        ? e.decode._decodePackBits(i, o, s, l, h)
                        : 32809 == f
                          ? e.decode._decodeThunder(i, o, s, l, h)
                          : 34316 == f
                            ? e.decode._decodePanasonic(r, i, o, s, l, h)
                            : 34713 == f
                              ? e.decode._decodeNikon(r, a, i, o, s, l, h)
                              : 34676 == f
                                ? e.decode._decodeLogLuv32(r, i, o, s, l, h)
                                : n("Unknown compression", f);
                var g = r.t258 ? Math.min(32, r.t258[0]) : 1,
                  b = r.t277 ? r.t277[0] : 1,
                  p = (g * b) >>> 3,
                  m = Math.ceil((g * b * u) / 8);
                if (16 == g && !r.isLE && null == r.t33422)
                  for (var k = 0; k < c; k++)
                    for (var y = h + k * m, x = 1; x < m; x += 2) {
                      var A = l[y + x];
                      ((l[y + x] = l[y + x - 1]), (l[y + x - 1] = A));
                    }
                if (r.t317 && 2 == r.t317[0])
                  for (k = 0; k < c; k++) {
                    var E = h + k * m;
                    if (16 == g)
                      for (_ = p; _ < m; _ += 2) {
                        var I =
                          ((l[E + _ + 1] << 8) | l[E + _]) +
                          ((l[E + _ - p + 1] << 8) | l[E + _ - p]);
                        ((l[E + _] = 255 & I), (l[E + _ + 1] = (I >>> 8) & 255));
                      }
                    else if (3 == b)
                      for (_ = 3; _ < m; _ += 3)
                        ((l[E + _] = (l[E + _] + l[E + _ - 3]) & 255),
                          (l[E + _ + 1] = (l[E + _ + 1] + l[E + _ - 2]) & 255),
                          (l[E + _ + 2] = (l[E + _ + 2] + l[E + _ - 1]) & 255));
                    else for (_ = p; _ < m; _++) l[E + _] = (l[E + _] + l[E + _ - p]) & 255;
                  }
              }),
              (e.decode._decodePanasonic = function (e, t, r, n, a, i) {
                var o,
                  s,
                  f,
                  l,
                  h,
                  d,
                  u,
                  c,
                  _ = t.buffer,
                  v = e.t2[0],
                  w = e.t3[0],
                  g = e.t10[0],
                  b = e.t45[0],
                  p = 0,
                  m = 0,
                  k = 0,
                  y = 0,
                  x = 6 == b ? new Uint32Array(18) : new Uint8Array(16),
                  A = [0, 0],
                  E = [0, 0],
                  I = 0,
                  B = new Uint8Array(16384),
                  U = new Uint16Array(a.buffer);
                function z(e) {
                  if (0 == k) {
                    var t = new Uint8Array(_, r + m + 8184, 8200),
                      n = new Uint8Array(_, r + m, 8184);
                    (B.set(t), B.set(n, t.length), (m += 16384));
                  }
                  if (5 != b)
                    return (
                      ((B[(y = ((k = (k - e) & 131071) >> 3) ^ 16368)] | (B[y + 1] << 8)) >>
                        (7 & k)) &
                      ~(-1 << e)
                    );
                  for (o = 0; o < 16; o++) ((x[o] = B[k++]), (k &= 16383));
                }
                function D(e) {
                  return B[k + 15 - e];
                }
                function S() {
                  ((A[0] = 0), (A[1] = 0), (E[0] = 0), (E[1] = 0));
                }
                if (7 == b) throw b;
                if (6 == b) {
                  var M = 12 == g,
                    F = M
                      ? function () {
                          ((x[0] = (D(0) << 4) | (D(1) >> 4)),
                            (x[1] = 4095 & (((15 & D(1)) << 8) | D(2))),
                            (x[2] = (D(3) >> 6) & 3),
                            (x[3] = ((63 & D(3)) << 2) | (D(4) >> 6)),
                            (x[4] = ((63 & D(4)) << 2) | (D(5) >> 6)),
                            (x[5] = ((63 & D(5)) << 2) | (D(6) >> 6)),
                            (x[6] = (D(6) >> 4) & 3),
                            (x[7] = ((15 & D(6)) << 4) | (D(7) >> 4)),
                            (x[8] = ((15 & D(7)) << 4) | (D(8) >> 4)),
                            (x[9] = ((15 & D(8)) << 4) | (D(9) >> 4)),
                            (x[10] = (D(9) >> 2) & 3),
                            (x[11] = ((3 & D(9)) << 6) | (D(10) >> 2)),
                            (x[12] = ((3 & D(10)) << 6) | (D(11) >> 2)),
                            (x[13] = ((3 & D(11)) << 6) | (D(12) >> 2)),
                            (x[14] = 3 & D(12)),
                            (x[15] = D(13)),
                            (x[16] = D(14)),
                            (x[17] = D(15)),
                            (k += 16),
                            (y = 0));
                        }
                      : function () {
                          ((x[0] = (D(0) << 6) | (D(1) >> 2)),
                            (x[1] = 16383 & (((3 & D(1)) << 12) | (D(2) << 4) | (D(3) >> 4))),
                            (x[2] = (D(3) >> 2) & 3),
                            (x[3] = ((3 & D(3)) << 8) | D(4)),
                            (x[4] = (D(5) << 2) | (D(6) >> 6)),
                            (x[5] = ((63 & D(6)) << 4) | (D(7) >> 4)),
                            (x[6] = (D(7) >> 2) & 3),
                            (x[7] = ((3 & D(7)) << 8) | D(8)),
                            (x[8] = ((D(9) << 2) & 1020) | (D(10) >> 6)),
                            (x[9] = 1023 & ((D(10) << 4) | (D(11) >> 4))),
                            (x[10] = (D(11) >> 2) & 3),
                            (x[11] = ((3 & D(11)) << 8) | D(12)),
                            (x[12] = 1023 & (((D(13) << 2) & 1020) | (D(14) >> 6))),
                            (x[13] = 1023 & ((D(14) << 4) | (D(15) >> 4))),
                            (k += 16),
                            (y = 0));
                        },
                    C = M ? 14 : 11,
                    N = M ? 128 : 512,
                    O = M ? 2048 : 8192,
                    L = M ? 16383 : 65535,
                    Z = M ? 4095 : 16383,
                    R = v / C,
                    P = 16 * R,
                    T = M ? 18 : 14;
                  for (d = 0; d < w - 15; d += 16) {
                    var G = Math.min(16, w - d),
                      j = P * G;
                    for (
                      B = new Uint8Array(_, r + p, j), k = 0, p += j, c = 0, u = 0;
                      c < G;
                      c++, u = 0
                    ) {
                      I = (d + c) * v;
                      for (var J = 0; J < R; J++)
                        for (F(), S(), f = 0, h = 0, o = 0; o < C; o++) {
                          if (((l = 1 & o), o % 3 == 2)) {
                            var H = y < T ? x[y++] : 0;
                            (3 == H && (H = 4), (h = N << H), (f = 1 << H));
                          }
                          var W = y < T ? x[y++] : 0;
                          (A[l]
                            ? ((W *= f), h < O && E[l] > h && (W += E[l] - h), (E[l] = W))
                            : ((A[l] = W), W ? (E[l] = W) : (W = E[l])),
                            (U[I + u++] =
                              W - 15 <= L ? (W - 15) & L : ((W + 2147483633) >> 31) & Z));
                        }
                    }
                  }
                } else if (5 == b) {
                  var K = 12 == g ? 10 : 9;
                  for (d = 0; d < w; d++)
                    for (u = 0; u < v; u += K)
                      (z(0),
                        12 == g
                          ? ((U[I++] = ((15 & x[1]) << 8) + x[0]),
                            (U[I++] = 16 * x[2] + (x[1] >> 4)),
                            (U[I++] = ((15 & x[4]) << 8) + x[3]),
                            (U[I++] = 16 * x[5] + (x[4] >> 4)),
                            (U[I++] = ((15 & x[7]) << 8) + x[6]),
                            (U[I++] = 16 * x[8] + (x[7] >> 4)),
                            (U[I++] = ((15 & x[10]) << 8) + x[9]),
                            (U[I++] = 16 * x[11] + (x[10] >> 4)),
                            (U[I++] = ((15 & x[13]) << 8) + x[12]),
                            (U[I++] = 16 * x[14] + (x[13] >> 4)))
                          : 14 == g &&
                            ((U[I++] = x[0] + ((63 & x[1]) << 8)),
                            (U[I++] = (x[1] >> 6) + 4 * x[2] + ((15 & x[3]) << 10)),
                            (U[I++] = (x[3] >> 4) + 16 * x[4] + ((3 & x[5]) << 12)),
                            (U[I++] = ((252 & x[5]) >> 2) + (x[6] << 6)),
                            (U[I++] = x[7] + ((63 & x[8]) << 8)),
                            (U[I++] = (x[8] >> 6) + 4 * x[9] + ((15 & x[10]) << 10)),
                            (U[I++] = (x[10] >> 4) + 16 * x[11] + ((3 & x[12]) << 12)),
                            (U[I++] = ((252 & x[12]) >> 2) + (x[13] << 6)),
                            (U[I++] = x[14] + ((63 & x[15]) << 8))));
                } else {
                  if (4 != b) throw b;
                  for (d = 0; d < w; d++)
                    for (u = 0; u < v; u++)
                      ((l = 1 & (o = u % 14)),
                        0 == o && S(),
                        o % 3 == 2 && (f = 4 >> (3 - z(2))),
                        E[l]
                          ? 0 != (s = z(8)) &&
                            ((A[l] -= 128 << f),
                            (A[l] < 0 || 4 == f) && (A[l] &= ~(-1 << f)),
                            (A[l] += s << f))
                          : ((E[l] = z(8)), (E[l] || o > 11) && (A[l] = (E[l] << 4) | z(4))),
                        (U[I++] = A[1 & u]));
                }
              }),
              (e.decode._decodeVC5 = (function () {
                var t,
                  r,
                  n,
                  a = [
                    1, 0, 1, 0, 2, 2, 1, 1, 3, 7, 1, 2, 5, 25, 1, 3, 6, 48, 1, 4, 6, 54, 1, 5, 7,
                    111, 1, 8, 7, 99, 1, 6, 7, 105, 12, 0, 7, 107, 1, 7, 8, 209, 20, 0, 8, 212, 1,
                    9, 8, 220, 1, 10, 9, 393, 1, 11, 9, 394, 32, 0, 9, 416, 1, 12, 9, 427, 1, 13,
                    10, 887, 1, 18, 10, 784, 1, 14, 10, 790, 1, 15, 10, 835, 60, 0, 10, 852, 1, 16,
                    10, 885, 1, 17, 11, 1571, 1, 19, 11, 1668, 1, 20, 11, 1669, 100, 0, 11, 1707, 1,
                    21, 11, 1772, 1, 22, 12, 3547, 1, 29, 12, 3164, 1, 24, 12, 3166, 1, 25, 12,
                    3140, 1, 23, 12, 3413, 1, 26, 12, 3537, 1, 27, 12, 3539, 1, 28, 13, 7093, 1, 35,
                    13, 6283, 1, 30, 13, 6331, 1, 31, 13, 6335, 180, 0, 13, 6824, 1, 32, 13, 7072,
                    1, 33, 13, 7077, 320, 0, 13, 7076, 1, 34, 14, 12565, 1, 36, 14, 12661, 1, 37,
                    14, 12669, 1, 38, 14, 13651, 1, 39, 14, 14184, 1, 40, 15, 28295, 1, 46, 15,
                    28371, 1, 47, 15, 25320, 1, 42, 15, 25336, 1, 43, 15, 25128, 1, 41, 15, 27300,
                    1, 44, 15, 28293, 1, 45, 16, 50259, 1, 48, 16, 50643, 1, 49, 16, 50675, 1, 50,
                    16, 56740, 1, 53, 16, 56584, 1, 51, 16, 56588, 1, 52, 17, 113483, 1, 61, 17,
                    113482, 1, 60, 17, 101285, 1, 55, 17, 101349, 1, 56, 17, 109205, 1, 57, 17,
                    109207, 1, 58, 17, 100516, 1, 54, 17, 113171, 1, 59, 18, 202568, 1, 62, 18,
                    202696, 1, 63, 18, 218408, 1, 64, 18, 218412, 1, 65, 18, 226340, 1, 66, 18,
                    226356, 1, 67, 18, 226358, 1, 68, 19, 402068, 1, 69, 19, 405138, 1, 70, 19,
                    405394, 1, 71, 19, 436818, 1, 72, 19, 436826, 1, 73, 19, 452714, 1, 75, 19,
                    452718, 1, 76, 19, 452682, 1, 74, 20, 804138, 1, 77, 20, 810279, 1, 78, 20,
                    810790, 1, 79, 20, 873638, 1, 80, 20, 873654, 1, 81, 20, 905366, 1, 82, 20,
                    905430, 1, 83, 20, 905438, 1, 84, 21, 1608278, 1, 85, 21, 1620557, 1, 86, 21,
                    1621582, 1, 87, 21, 1621583, 1, 88, 21, 1747310, 1, 89, 21, 1810734, 1, 90, 21,
                    1810735, 1, 91, 21, 1810863, 1, 92, 21, 1810879, 1, 93, 22, 3621725, 1, 99, 22,
                    3621757, 1, 100, 22, 3241112, 1, 94, 22, 3494556, 1, 95, 22, 3494557, 1, 96, 22,
                    3494622, 1, 97, 22, 3494623, 1, 98, 23, 6482227, 1, 102, 23, 6433117, 1, 101,
                    23, 6989117, 1, 103, 23, 6989119, 1, 105, 23, 6989118, 1, 104, 23, 7243449, 1,
                    106, 23, 7243512, 1, 107, 24, 13978233, 1, 111, 24, 12964453, 1, 109, 24,
                    12866232, 1, 108, 24, 14486897, 1, 113, 24, 13978232, 1, 110, 24, 14486896, 1,
                    112, 24, 14487026, 1, 114, 24, 14487027, 1, 115, 25, 25732598, 1, 225, 25,
                    25732597, 1, 189, 25, 25732596, 1, 188, 25, 25732595, 1, 203, 25, 25732594, 1,
                    202, 25, 25732593, 1, 197, 25, 25732592, 1, 207, 25, 25732591, 1, 169, 25,
                    25732590, 1, 223, 25, 25732589, 1, 159, 25, 25732522, 1, 235, 25, 25732579, 1,
                    152, 25, 25732575, 1, 192, 25, 25732489, 1, 179, 25, 25732573, 1, 201, 25,
                    25732472, 1, 172, 25, 25732576, 1, 149, 25, 25732488, 1, 178, 25, 25732566, 1,
                    120, 25, 25732571, 1, 219, 25, 25732577, 1, 150, 25, 25732487, 1, 127, 25,
                    25732506, 1, 211, 25, 25732548, 1, 125, 25, 25732588, 1, 158, 25, 25732486, 1,
                    247, 25, 25732467, 1, 238, 25, 25732508, 1, 163, 25, 25732552, 1, 228, 25,
                    25732603, 1, 183, 25, 25732513, 1, 217, 25, 25732587, 1, 168, 25, 25732520, 1,
                    122, 25, 25732484, 1, 128, 25, 25732562, 1, 249, 25, 25732505, 1, 187, 25,
                    25732504, 1, 186, 25, 25732483, 1, 136, 25, 25928905, 1, 181, 25, 25732560, 1,
                    255, 25, 25732500, 1, 230, 25, 25732482, 1, 135, 25, 25732555, 1, 233, 25,
                    25732568, 1, 222, 25, 25732583, 1, 145, 25, 25732481, 1, 134, 25, 25732586, 1,
                    167, 25, 25732521, 1, 248, 25, 25732518, 1, 209, 25, 25732480, 1, 243, 25,
                    25732512, 1, 216, 25, 25732509, 1, 164, 25, 25732547, 1, 140, 25, 25732479, 1,
                    157, 25, 25732544, 1, 239, 25, 25732574, 1, 191, 25, 25732564, 1, 251, 25,
                    25732478, 1, 156, 25, 25732546, 1, 139, 25, 25732498, 1, 242, 25, 25732557, 1,
                    133, 25, 25732477, 1, 162, 25, 25732515, 1, 213, 25, 25732584, 1, 165, 25,
                    25732514, 1, 212, 25, 25732476, 1, 227, 25, 25732494, 1, 198, 25, 25732531, 1,
                    236, 25, 25732530, 1, 234, 25, 25732529, 1, 117, 25, 25732528, 1, 215, 25,
                    25732527, 1, 124, 25, 25732526, 1, 123, 25, 25732525, 1, 254, 25, 25732524, 1,
                    253, 25, 25732523, 1, 148, 25, 25732570, 1, 218, 25, 25732580, 1, 146, 25,
                    25732581, 1, 147, 25, 25732569, 1, 224, 25, 25732533, 1, 143, 25, 25732540, 1,
                    184, 25, 25732541, 1, 185, 25, 25732585, 1, 166, 25, 25732556, 1, 132, 25,
                    25732485, 1, 129, 25, 25732563, 1, 250, 25, 25732578, 1, 151, 25, 25732501, 1,
                    119, 25, 25732502, 1, 193, 25, 25732536, 1, 176, 25, 25732496, 1, 245, 25,
                    25732553, 1, 229, 25, 25732516, 1, 206, 25, 25732582, 1, 144, 25, 25732517, 1,
                    208, 25, 25732558, 1, 137, 25, 25732543, 1, 241, 25, 25732466, 1, 237, 25,
                    25732507, 1, 190, 25, 25732542, 1, 240, 25, 25732551, 1, 131, 25, 25732554, 1,
                    232, 25, 25732565, 1, 252, 25, 25732475, 1, 171, 25, 25732493, 1, 205, 25,
                    25732492, 1, 204, 25, 25732491, 1, 118, 25, 25732490, 1, 214, 25, 25928904, 1,
                    180, 25, 25732549, 1, 126, 25, 25732602, 1, 182, 25, 25732539, 1, 175, 25,
                    25732545, 1, 141, 25, 25732559, 1, 138, 25, 25732537, 1, 177, 25, 25732534, 1,
                    153, 25, 25732503, 1, 194, 25, 25732606, 1, 160, 25, 25732567, 1, 121, 25,
                    25732538, 1, 174, 25, 25732497, 1, 246, 25, 25732550, 1, 130, 25, 25732572, 1,
                    200, 25, 25732474, 1, 170, 25, 25732511, 1, 221, 25, 25732601, 1, 196, 25,
                    25732532, 1, 142, 25, 25732519, 1, 210, 25, 25732495, 1, 199, 25, 25732605, 1,
                    155, 25, 25732535, 1, 154, 25, 25732499, 1, 244, 25, 25732510, 1, 220, 25,
                    25732600, 1, 195, 25, 25732607, 1, 161, 25, 25732604, 1, 231, 25, 25732473, 1,
                    173, 25, 25732599, 1, 226, 26, 51465122, 1, 116, 26, 51465123, 0, 1,
                  ],
                  i = [3, 3, 3, 3, 2, 2, 2, 1, 1, 1];
                function o(e) {
                  var t = e[1],
                    r = (e[0][t >>> 3] >>> (7 - (7 & t))) & 1;
                  return (e[1]++, r);
                }
                function s(e, r) {
                  if (null == t) {
                    t = {};
                    for (var n = 0; n < a.length; n += 4) t[a[n + 1]] = a.slice(n, n + 4);
                  }
                  for (var i = o(e), s = t[i]; null == s;) ((i = (i << 1) | o(e)), (s = t[i]));
                  var f = s[3];
                  (0 != f && (f = 0 == o(e) ? f : -f), (r[0] = s[2]), (r[1] = f));
                }
                function f(e, t) {
                  for (var r = 0; r < t; r++) (1 & ~e || e++, (e >>>= 1));
                  return e;
                }
                function l(e, t) {
                  return e >> t;
                }
                function h(e, t, r, n, a, i) {
                  ((t[r] = l(l(11 * e[a] - 4 * e[a + i] + e[a + i + i] + 4, 3) + e[n], 1)),
                    (t[r + i] = l(l(5 * e[a] + 4 * e[a + i] - e[a + i + i] + 4, 3) - e[n], 1)));
                }
                function d(e, t, r, n, a, i) {
                  var o = e[a - i] - e[a + i],
                    s = e[a],
                    f = e[n];
                  ((t[r] = l(l(o + 4, 3) + s + f, 1)), (t[r + i] = l(l(4 - o, 3) + s - f, 1)));
                }
                function u(e, t, r, n, a, i) {
                  ((t[r] = l(l(5 * e[a] + 4 * e[a - i] - e[a - i - i] + 4, 3) + e[n], 1)),
                    (t[r + i] = l(l(11 * e[a] - 4 * e[a - i] + e[a - i - i] + 4, 3) - e[n], 1)));
                }
                function c(e) {
                  return (e = n[(e = e < 0 ? 0 : e > 4095 ? 4095 : e)] >>> 2);
                }
                return function (t, a, o, l, _, v) {
                  l = new Uint16Array(l.buffer);
                  var w,
                    g,
                    b,
                    p,
                    m,
                    k,
                    y,
                    x,
                    A = Date.now(),
                    E = e._binBE,
                    I = a + o;
                  a += 4;
                  for (var B = 1 == v[0]; a < I;) {
                    var U = E.readShort(t, a),
                      z = E.readUshort(t, a + 2);
                    if (((a += 4), 12 == U)) O = z;
                    else if (20 == U) w = z;
                    else if (21 == U) g = z;
                    else if (48 == U) b = z;
                    else if (53 == U) p = z;
                    else if (35 == U) 0;
                    else if (62 == U) m = z;
                    else if (101 == U) 0;
                    else if (109 == U) k = z;
                    else if (84 == U) 0;
                    else if (106 == U) 0;
                    else if (107 == U) 0;
                    else if (108 == U) 0;
                    else if (102 == U) 0;
                    else if (104 == U) re = z;
                    else if (105 == U) 0;
                    else {
                      var D = U < 0 ? -U : U,
                        S = 65280 & D,
                        M = 0;
                      if (
                        (24576 & D &&
                          (8192 & D ? ((M = 65535 & z), (M += (255 & D) << 16)) : (M = 65535 & z)),
                        24576 & ~D)
                      ) {
                        if (16388 == D) a += 4 * M;
                        else if (8192 != S && 8448 != S && 9216 != S) throw D.toString(16);
                      } else {
                        if (null == y) {
                          y = [];
                          for (var F = 0; F < 4; F++) y[F] = new Int16Array((w >>> 1) * (g >>> 1));
                          ((x = new Int16Array((w >>> 1) * (g >>> 1))), (r = new Int16Array(1024)));
                          for (F = 0; F < 1024; F++) {
                            var C = F - 512,
                              N = Math.abs(C),
                              O = Math.floor((768 * N * N * N) / 16581375) + N;
                            r[F] = Math.sign(C) * O;
                          }
                          n = new Uint16Array(4096);
                          for (F = 0; F < 4096; F++) {
                            var L = F,
                              Z = (65535 * (Math.pow(113, L / 4095) - 1)) / 112;
                            n[F] = Math.min(Z, 65535);
                          }
                        }
                        var R = y[m],
                          P = f(w, 1 + i[b]),
                          T = f(g, 1 + i[b]);
                        if (0 == b)
                          for (var G = 0; G < T; G++)
                            for (var j = 0; j < P; j++) {
                              var J = a + 2 * (G * P + j);
                              R[G * (w >>> 1) + j] = (t[J] << 8) | t[J + 1];
                            }
                        else {
                          var H = [t, 8 * a],
                            W = [],
                            K = 0,
                            Y = P * T,
                            q = [0, 0],
                            X = 0;
                          for (z = 0; K < Y;)
                            for (s(H, q), X = q[0], z = q[1]; X > 0;) ((W[K++] = z), X--);
                          var Q = (b - 1) % 3,
                            V = 1 != Q ? P : 0,
                            $ = 0 != Q ? T : 0;
                          for (G = 0; G < T; G++) {
                            var ee = (G + $) * (w >>> 1) + V,
                              te = G * P;
                            for (j = 0; j < P; j++) R[ee + j] = r[W[te + j] + 512] * p;
                          }
                          if (2 == Q) {
                            var re = w >>> 1,
                              ne = 2 * P,
                              ae = 2 * T;
                            for (G = 0; G < T; G++)
                              for (j = 0; j < ne; j++) {
                                F = 2 * G * re + j;
                                var ie = T * re + (se = G * re + j);
                                0 == G
                                  ? h(R, x, F, ie, se, re)
                                  : G == T - 1
                                    ? u(R, x, F, ie, se, re)
                                    : d(R, x, F, ie, se, re);
                              }
                            var oe = R;
                            ((R = x), (x = oe));
                            for (G = 0; G < ae; G++)
                              for (j = 0; j < P; j++) {
                                var se;
                                ((F = G * re + 2 * j), (ie = P + (se = G * re + j)));
                                0 == j
                                  ? h(R, x, F, ie, se, 1)
                                  : j == P - 1
                                    ? u(R, x, F, ie, se, 1)
                                    : d(R, x, F, ie, se, 1);
                              }
                            oe = R;
                            ((R = x), (x = oe));
                            for (var fe = [], le = 2 - ~~((b - 1) / 3), he = 0; he < 3; he++)
                              fe[he] = (k >> (14 - 2 * he)) & 3;
                            var de = fe[le];
                            if (0 != de)
                              for (G = 0; G < ae; G++)
                                for (j = 0; j < ne; j++) {
                                  R[(F = G * re + j)] = R[F] << de;
                                }
                          }
                        }
                        if (9 == b && 3 == m) {
                          var ue = y[0],
                            ce = y[1],
                            _e = y[2],
                            ve = y[3];
                          for (G = 0; G < g; G += 2)
                            for (j = 0; j < w; j += 2) {
                              var we = G * w + j,
                                ge = ue[(J = (G >>> 1) * (w >>> 1) + (j >>> 1))],
                                be = ce[J] - 2048,
                                pe = _e[J] - 2048,
                                me = ve[J] - 2048,
                                ke = (be << 1) + ge,
                                ye = (pe << 1) + ge,
                                xe = ge + me,
                                Ae = ge - me;
                              B
                                ? ((l[we] = c(xe)),
                                  (l[we + 1] = c(ye)),
                                  (l[we + w] = c(ke)),
                                  (l[we + w + 1] = c(Ae)))
                                : ((l[we] = c(ke)),
                                  (l[we + 1] = c(xe)),
                                  (l[we + w] = c(Ae)),
                                  (l[we + w + 1] = c(ye)));
                            }
                        }
                        a += 4 * M;
                      }
                    }
                  }
                  console.log(Date.now() - A);
                };
              })()),
              (e.decode._decodeLogLuv32 = function (e, t, r, n, a, i) {
                for (var o = e.width, s = 4 * o, f = 0, l = new Uint8Array(s); f < n;) {
                  for (var h = 0; h < s;) {
                    var d = t[r + f];
                    if ((f++, d < 128)) {
                      for (var u = 0; u < d; u++) l[h + u] = t[r + f + u];
                      ((h += d), (f += d));
                    } else {
                      d -= 126;
                      for (u = 0; u < d; u++) l[h + u] = t[r + f];
                      ((h += d), f++);
                    }
                  }
                  for (var c = 0; c < o; c++)
                    ((a[i + 0] = l[c]),
                      (a[i + 1] = l[c + o]),
                      (a[i + 2] = l[c + 2 * o]),
                      (a[i + 4] = l[c + 3 * o]),
                      (i += 6));
                }
              }),
              (e.decode._ljpeg_diff = function (t, r, n) {
                var a,
                  i,
                  o = e.decode._getbithuff;
                return (
                  (a = o(t, r, n[0], n)),
                  (i = o(t, r, a, 0)) & (1 << (a - 1)) || (i -= (1 << a) - 1),
                  i
                );
              }),
              (e.decode._decodeARW = function (t, r, n, a, i, o) {
                var s = t.t256[0],
                  f = t.t257[0],
                  l = t.t258[0],
                  h = t.isLE ? e._binLE : e._binBE;
                if (s * f == a || s * f * 1.5 == a)
                  if (s * f * 1.5 != a) {
                    var d,
                      u,
                      c,
                      _,
                      v,
                      w,
                      g,
                      b,
                      p = new Uint16Array(16),
                      m = new Uint8Array(s + 1);
                    for (U = 0; U < f; U++) {
                      for (var k = 0; k < s; k++) m[k] = r[n++];
                      for (b = 0, B = 0; B < s - 30; b += 16) {
                        for (
                          u = 2047 & (d = h.readUint(m, b)),
                            c = 2047 & (d >>> 11),
                            _ = 15 & (d >>> 22),
                            v = 15 & (d >>> 26),
                            w = 0;
                          w < 4 && 128 << w <= u - c;
                          w++
                        );
                        for (g = 30, y = 0; y < 16; y++)
                          y == _
                            ? (p[y] = u)
                            : y == v
                              ? (p[y] = c)
                              : ((p[y] =
                                  (((h.readUshort(m, b + (g >> 3)) >>> (7 & g)) & 127) << w) + c),
                                p[y] > 2047 && (p[y] = 2047),
                                (g += 7));
                        for (y = 0; y < 16; y++, B += 2) {
                          O = p[y] << 1;
                          e.decode._putsF(i, (U * s + B) * l, O << (16 - l));
                        }
                        B -= 1 & B ? 1 : 31;
                      }
                    }
                  } else
                    for (var y = 0; y < a; y += 3) {
                      var x = r[n + y + 0],
                        A = r[n + y + 1],
                        E = r[n + y + 2];
                      ((i[o + y] = (A << 4) | (x >>> 4)),
                        (i[o + y + 1] = (x << 4) | (E >>> 4)),
                        (i[o + y + 2] = (E << 4) | (A >>> 4)));
                    }
                else {
                  f += 8;
                  var I,
                    B,
                    U,
                    z = [n, 0, 0, 0],
                    D = new Uint16Array(32770),
                    S = [
                      3857, 3856, 3599, 3342, 3085, 2828, 2571, 2314, 2057, 1800, 1543, 1286, 1029,
                      772, 771, 768, 514, 513,
                    ],
                    M = 0,
                    F = e.decode._ljpeg_diff;
                  for (D[0] = 15, I = y = 0; y < 18; y++)
                    for (var C = 32768 >>> (S[y] >>> 8), N = 0; N < C; N++) D[++I] = S[y];
                  for (B = s; B--;)
                    for (U = 0; U < f + 1; U += 2)
                      if ((U == f && (U = 1), (M += F(r, z, D)), U < f)) {
                        var O = 4095 & M;
                        e.decode._putsF(i, (U * s + B) * l, O << (16 - l));
                      }
                }
              }),
              (e.decode._decodeNikon = function (t, r, n, a, i, o, s) {
                var f = [
                    [
                      0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 5, 4, 3, 6, 2, 7, 1, 0, 8,
                      9, 11, 10, 12,
                    ],
                    [
                      0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 57, 90, 56, 39, 22, 5, 4,
                      3, 2, 1, 0, 11, 12, 12,
                    ],
                    [
                      0, 0, 1, 4, 2, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 4, 6, 3, 7, 2, 8, 1, 9,
                      0, 10, 11, 12,
                    ],
                    [
                      0, 0, 1, 4, 3, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 5, 6, 4, 7, 8, 3, 9, 2, 1,
                      0, 10, 11, 12, 13, 14,
                    ],
                    [
                      0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 8, 92, 75, 58, 41, 7, 6, 5,
                      4, 3, 2, 1, 0, 13, 14,
                    ],
                    [
                      0, 0, 1, 4, 2, 2, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 7, 6, 8, 5, 9, 4, 10, 3,
                      11, 12, 2, 0, 1, 13, 14,
                    ],
                  ],
                  l = t.t256[0],
                  h = t.t257[0],
                  d = t.t258[0],
                  u = 0,
                  c = 0,
                  _ = e.decode._make_decoder,
                  v = e.decode._getbithuff,
                  w = r[0].exifIFD.makerNote,
                  g = w.t150 ? w.t150 : w.t140,
                  b = 0,
                  p = g[b++],
                  m = g[b++];
                ((73 != p && 88 != m) || (b += 2110), 70 == p && (u = 2), 14 == d && (u += 3));
                for (
                  var k = [
                      [0, 0],
                      [0, 0],
                    ],
                    y = t.isLE ? e._binLE : e._binBE,
                    x = 0;
                  x < 2;
                  x++
                )
                  for (var A = 0; A < 2; A++) ((k[x][A] = y.readShort(g, b)), (b += 2));
                var E,
                  I,
                  B,
                  U,
                  z,
                  D = (1 << d) & 32767,
                  S = 0,
                  M = y.readShort(g, b);
                ((b += 2),
                  M > 1 && (S = Math.floor(D / (M - 1))),
                  68 == p && 32 == m && S > 0 && (c = y.readShort(g, 562)));
                var F = [0, 0],
                  C = _(f[u]),
                  N = [a, 0, 0, 0];
                for (E = 0; E < h; E++)
                  for (c && E == c && (C = _(f[u + 1])), I = 0; I < l; I++) {
                    ((x = v(n, N, C[0], C)),
                      (z = ((1 + (v(n, N, (B = 15 & x) - (U = x >>> 4), 0) << 1)) << U) >>> 1) &
                        (1 << (B - 1)) || (z -= (1 << B) - (0 == U ? 1 : 0)),
                      I < 2 ? (F[I] = k[1 & E][I] += z) : (F[1 & I] += z));
                    var O = Math.min(Math.max(F[1 & I], 0), (1 << d) - 1),
                      L = (E * l + I) * d;
                    e.decode._putsF(o, L, O << (16 - d));
                  }
              }),
              (e.decode._putsF = function (e, t, r) {
                r <<= 8 - (7 & t);
                var n = t >>> 3;
                ((e[n] |= r >>> 16), (e[n + 1] |= r >>> 8), (e[n + 2] |= r));
              }),
              (e.decode._getbithuff = function (t, r, n, a) {
                e.decode._get_byte;
                var i,
                  o = r[0],
                  s = r[1],
                  f = r[2],
                  l = r[3];
                if (0 == n || f < 0) return 0;
                for (; !l && f < n && -1 != (i = t[o++]) && !(l = 0);)
                  ((s = (s << 8) + i), (f += 8));
                if (
                  ((i = (s << (32 - f)) >>> (32 - n)),
                  a ? ((f -= a[i + 1] >>> 8), (i = 255 & a[i + 1])) : (f -= n),
                  f < 0)
                )
                  throw "e";
                return ((r[0] = o), (r[1] = s), (r[2] = f), (r[3] = l), i);
              }),
              (e.decode._make_decoder = function (e) {
                var t,
                  r,
                  n,
                  a,
                  i,
                  o = [];
                for (t = 16; 0 != t && !e[t]; t--);
                var s = 17;
                for (o[0] = t, n = r = 1; r <= t; r++)
                  for (a = 0; a < e[r]; a++, ++s)
                    for (i = 0; i < 1 << (t - r); i++) n <= 1 << t && (o[n++] = (r << 8) | e[s]);
                return o;
              }),
              (e.decode._decodeNewJPEG = function (t, r, n, a, i, o) {
                a = Math.min(a, r.length - n);
                var s = t.t347,
                  f = s ? s.length : 0,
                  l = new Uint8Array(f + a);
                if (s) {
                  for (var h = 0, d = 0; d < f - 1 && (255 != s[d] || 217 != s[d + 1]); d++)
                    l[h++] = s[d];
                  var u = r[n],
                    c = r[n + 1];
                  (255 == u && 216 == c) || ((l[h++] = u), (l[h++] = c));
                  for (d = 2; d < a; d++) l[h++] = r[n + d];
                } else for (d = 0; d < a; d++) l[d] = r[n + d];
                if (32803 == t.t262[0] || (7 == t.t259[0] && 34892 == t.t262[0])) {
                  var _ = t.t258[0],
                    v = e.LosslessJpegDecode(l),
                    w = v.length;
                  if (16 == _)
                    if (t.isLE)
                      for (d = 0; d < w; d++)
                        ((i[o + (d << 1)] = 255 & v[d]), (i[o + (d << 1) + 1] = v[d] >>> 8));
                    else
                      for (d = 0; d < w; d++)
                        ((i[o + (d << 1)] = v[d] >>> 8), (i[o + (d << 1) + 1] = 255 & v[d]));
                  else if (14 == _ || 12 == _ || 10 == _) {
                    var g = 16 - _;
                    for (d = 0; d < w; d++) e.decode._putsF(i, d * _, v[d] << g);
                  } else {
                    if (8 != _) throw new Error("unsupported bit depth " + _);
                    for (d = 0; d < w; d++) i[o + d] = v[d];
                  }
                } else {
                  var b = new e.JpegDecoder();
                  b.parse(l);
                  var p = b.getData({
                    width: b.width,
                    height: b.height,
                    forceRGB: !0,
                    isSourcePDF: !1,
                  });
                  for (d = 0; d < p.length; d++) i[o + d] = p[d];
                }
                6 == t.t262[0] && (t.t262[0] = 2);
              }),
              (e.decode._decodeOldJPEGInit = function (e, t, r, a) {
                var i,
                  o,
                  s,
                  f,
                  l,
                  h = 216,
                  d = 0,
                  u = 0,
                  c = !1,
                  _ = e.t513,
                  v = _ ? _[0] : 0,
                  w = e.t514,
                  g = w ? w[0] : 0,
                  b = e.t324 || e.t273 || _,
                  p = e.t530,
                  m = 0,
                  k = 0,
                  y = e.t277 ? e.t277[0] : 1,
                  x = e.t515;
                if ((b && ((u = b[0]), (c = b.length > 1)), !c)) {
                  if (255 == t[r] && t[r + 1] == h) return { jpegOffset: r };
                  if (
                    null != _ &&
                    (255 == t[r + v] && t[r + v + 1] == h
                      ? (d = r + v)
                      : n("JPEGInterchangeFormat does not point to SOI"),
                    null == w
                      ? n("JPEGInterchangeFormatLength field is missing")
                      : (v >= u || v + g <= u) &&
                        n("JPEGInterchangeFormatLength field value is invalid"),
                    null != d)
                  )
                    return { jpegOffset: d };
                }
                if ((null != p && ((m = p[0]), (k = p[1])), null != _ && null != w))
                  if (g >= 2 && v + g <= u) {
                    for (
                      i =
                        255 == t[r + v + g - 2] && t[r + v + g - 1] == h
                          ? new Uint8Array(g - 2)
                          : new Uint8Array(g),
                        s = 0;
                      s < i.length;
                      s++
                    )
                      i[s] = t[r + v + s];
                    n(
                      "Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables",
                    );
                  } else
                    n(
                      "JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile",
                    );
                if (null == i) {
                  var A = 0,
                    E = [];
                  ((E[A++] = 255), (E[A++] = h));
                  var I = e.t519;
                  if (null == I) throw new Error("JPEGQTables tag is missing");
                  for (s = 0; s < I.length; s++)
                    for (
                      E[A++] = 255, E[A++] = 219, E[A++] = 0, E[A++] = 67, E[A++] = s, f = 0;
                      f < 64;
                      f++
                    )
                      E[A++] = t[r + I[s] + f];
                  for (l = 0; l < 2; l++) {
                    var B = e[0 == l ? "t520" : "t521"];
                    if (null == B)
                      throw new Error(
                        (0 == l ? "JPEGDCTables" : "JPEGACTables") + " tag is missing",
                      );
                    for (s = 0; s < B.length; s++) {
                      ((E[A++] = 255), (E[A++] = 196));
                      var U = 19;
                      for (f = 0; f < 16; f++) U += t[r + B[s] + f];
                      for (
                        E[A++] = U >>> 8, E[A++] = 255 & U, E[A++] = s | (l << 4), f = 0;
                        f < 16;
                        f++
                      )
                        E[A++] = t[r + B[s] + f];
                      for (f = 0; f < U; f++) E[A++] = t[r + B[s] + 16 + f];
                    }
                  }
                  if (
                    ((E[A++] = 255),
                    (E[A++] = 192),
                    (E[A++] = 0),
                    (E[A++] = 8 + 3 * y),
                    (E[A++] = 8),
                    (E[A++] = (e.height >>> 8) & 255),
                    (E[A++] = 255 & e.height),
                    (E[A++] = (e.width >>> 8) & 255),
                    (E[A++] = 255 & e.width),
                    (E[A++] = y),
                    1 == y)
                  )
                    ((E[A++] = 1), (E[A++] = 17), (E[A++] = 0));
                  else
                    for (s = 0; s < 3; s++)
                      ((E[A++] = s + 1),
                        (E[A++] = 0 != s ? 17 : ((15 & m) << 4) | (15 & k)),
                        (E[A++] = s));
                  (null != x &&
                    0 != x[0] &&
                    ((E[A++] = 255),
                    (E[A++] = 221),
                    (E[A++] = 0),
                    (E[A++] = 4),
                    (E[A++] = (x[0] >>> 8) & 255),
                    (E[A++] = 255 & x[0])),
                    (i = new Uint8Array(E)));
                }
                var z = -1;
                for (s = 0; s < i.length - 1;) {
                  if (255 == i[s] && 192 == i[s + 1]) {
                    z = s;
                    break;
                  }
                  s++;
                }
                if (-1 == z) {
                  var D = new Uint8Array(i.length + 10 + 3 * y);
                  D.set(i);
                  var S = i.length;
                  if (
                    ((z = i.length),
                    ((i = D)[S++] = 255),
                    (i[S++] = 192),
                    (i[S++] = 0),
                    (i[S++] = 8 + 3 * y),
                    (i[S++] = 8),
                    (i[S++] = (e.height >>> 8) & 255),
                    (i[S++] = 255 & e.height),
                    (i[S++] = (e.width >>> 8) & 255),
                    (i[S++] = 255 & e.width),
                    (i[S++] = y),
                    1 == y)
                  )
                    ((i[S++] = 1), (i[S++] = 17), (i[S++] = 0));
                  else
                    for (s = 0; s < 3; s++)
                      ((i[S++] = s + 1),
                        (i[S++] = 0 != s ? 17 : ((15 & m) << 4) | (15 & k)),
                        (i[S++] = s));
                }
                if (255 == t[u] && 218 == t[u + 1]) {
                  var M = (t[u + 2] << 8) | t[u + 3];
                  for (
                    (o = new Uint8Array(M + 2))[0] = t[u],
                      o[1] = t[u + 1],
                      o[2] = t[u + 2],
                      o[3] = t[u + 3],
                      s = 0;
                    s < M - 2;
                    s++
                  )
                    o[s + 4] = t[u + s + 4];
                } else {
                  var F = 0;
                  if (
                    (((o = new Uint8Array(8 + 2 * y))[F++] = 255),
                    (o[F++] = 218),
                    (o[F++] = 0),
                    (o[F++] = 6 + 2 * y),
                    (o[F++] = y),
                    1 == y)
                  )
                    ((o[F++] = 1), (o[F++] = 0));
                  else for (s = 0; s < 3; s++) ((o[F++] = s + 1), (o[F++] = (s << 4) | s));
                  ((o[F++] = 0), (o[F++] = 63), (o[F++] = 0));
                }
                return { jpegOffset: r, tables: i, sosMarker: o, sofPosition: z };
              }),
              (e.decode._decodeOldJPEG = function (t, r, n, a, i, o) {
                var s,
                  f,
                  l,
                  h,
                  d = e.decode._decodeOldJPEGInit(t, r, n, a);
                if (null != d.jpegOffset)
                  for (s = n + a - d.jpegOffset, l = new Uint8Array(s), _ = 0; _ < s; _++)
                    l[_] = r[d.jpegOffset + _];
                else {
                  for (
                    f = d.tables.length,
                      (l = new Uint8Array(f + d.sosMarker.length + a + 2)).set(d.tables),
                      h = f,
                      l[d.sofPosition + 5] = (t.height >>> 8) & 255,
                      l[d.sofPosition + 6] = 255 & t.height,
                      l[d.sofPosition + 7] = (t.width >>> 8) & 255,
                      l[d.sofPosition + 8] = 255 & t.width,
                      (255 == r[n] && r[n + 1] == SOS) ||
                        (l.set(d.sosMarker, h), (h += sosMarker.length)),
                      _ = 0;
                    _ < a;
                    _++
                  )
                    l[h++] = r[n + _];
                  ((l[h++] = 255), (l[h++] = EOI));
                }
                var u = new e.JpegDecoder();
                u.parse(l);
                for (
                  var c = u.getData({
                      width: u.width,
                      height: u.height,
                      forceRGB: !0,
                      isSourcePDF: !1,
                    }),
                    _ = 0;
                  _ < c.length;
                  _++
                )
                  i[o + _] = c[_];
                t.t262 && 6 == t.t262[0] && (t.t262[0] = 2);
              }),
              (e.decode._decodePackBits = function (e, t, r, n, a) {
                for (
                  var i = new Int8Array(e.buffer), o = new Int8Array(n.buffer), s = t + r;
                  t < s;
                ) {
                  var f = i[t];
                  if ((t++, f >= 0 && f < 128))
                    for (var l = 0; l < f + 1; l++) ((o[a] = i[t]), a++, t++);
                  if (f >= -127 && f < 0) {
                    for (l = 0; l < 1 - f; l++) ((o[a] = i[t]), a++);
                    t++;
                  }
                }
                return a;
              }),
              (e.decode._decodeThunder = function (e, t, r, n, a) {
                for (
                  var i = [0, 1, 0, -1],
                    o = [0, 1, 2, 3, 0, -3, -2, -1],
                    s = t + r,
                    f = 2 * a,
                    l = 0;
                  t < s;
                ) {
                  var h = e[t],
                    d = h >>> 6,
                    u = 63 & h;
                  if (
                    (t++,
                    3 == d && ((l = 15 & u), (n[f >>> 1] |= l << (4 * ((1 - f) & 1))), f++),
                    0 == d)
                  )
                    for (var c = 0; c < u; c++) ((n[f >>> 1] |= l << (4 * ((1 - f) & 1))), f++);
                  if (2 == d)
                    for (c = 0; c < 2; c++) {
                      4 != (_ = (u >>> (3 * (1 - c))) & 7) &&
                        ((l += o[_]), (n[f >>> 1] |= l << (4 * ((1 - f) & 1))), f++);
                    }
                  if (1 == d)
                    for (c = 0; c < 3; c++) {
                      var _;
                      2 != (_ = (u >>> (2 * (2 - c))) & 3) &&
                        ((l += i[_]), (n[f >>> 1] |= l << (4 * ((1 - f) & 1))), f++);
                    }
                }
              }),
              (e.decode._dmap = {
                1: 0,
                "011": 1,
                "000011": 2,
                "0000011": 3,
                "010": -1,
                "000010": -2,
                "0000010": -3,
              }),
              (e.decode._lens = (function () {
                var e = function (e, t, r, n) {
                    for (var a = 0; a < t.length; a++) e[t[a]] = r + a * n;
                  },
                  t =
                    "00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100",
                  r =
                    "0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111",
                  n =
                    "11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011",
                  a =
                    "0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101",
                  i =
                    "00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111";
                ((t = t.split(",")),
                  (r = r.split(",")),
                  (n = n.split(",")),
                  (a = a.split(",")),
                  (i = i.split(",")));
                var o = {},
                  s = {};
                return (
                  e(o, t, 0, 1),
                  e(o, n, 64, 64),
                  e(o, i, 1792, 64),
                  e(s, r, 0, 1),
                  e(s, a, 64, 64),
                  e(s, i, 1792, 64),
                  [o, s]
                );
              })()),
              (e.decode._decodeG4 = function (t, r, n, a, i, o, s) {
                for (var f = e.decode, l = r << 3, h = 0, d = "", u = [], c = [], _ = 0; _ < o; _++)
                  c.push(0);
                c = f._makeDiff(c);
                for (
                  var v = 0,
                    w = 0,
                    g = 0,
                    b = 0,
                    p = 0,
                    m = 0,
                    k = "",
                    y = 0,
                    x = 8 * Math.ceil(o / 8);
                  l >>> 3 < r + n;
                ) {
                  ((g = f._findDiff(c, v + (0 == v ? 0 : 1), 1 - p)), (b = f._findDiff(c, g, p)));
                  var A = 0;
                  if (
                    (1 == s && (A = (t[l >>> 3] >>> (7 - (7 & l))) & 1),
                    2 == s && (A = (t[l >>> 3] >>> (7 & l)) & 1),
                    l++,
                    (d += A),
                    "H" == k)
                  ) {
                    if (null != f._lens[p][d]) {
                      var E = f._lens[p][d];
                      ((d = ""),
                        (h += E),
                        E < 64 &&
                          (f._addNtimes(u, h, p),
                          (v += h),
                          (p = 1 - p),
                          (h = 0),
                          0 == --y && (k = "")));
                    }
                  } else
                    ("0001" == d && ((d = ""), f._addNtimes(u, b - v, p), (v = b)),
                      "001" == d && ((d = ""), (k = "H"), (y = 2)),
                      null != f._dmap[d] &&
                        ((w = g + f._dmap[d]),
                        f._addNtimes(u, w - v, p),
                        (v = w),
                        (d = ""),
                        (p = 1 - p)));
                  u.length == o &&
                    "" == k &&
                    (f._writeBits(u, a, 8 * i + m * x),
                    (p = 0),
                    m++,
                    (v = 0),
                    (c = f._makeDiff(u)),
                    (u = []));
                }
              }),
              (e.decode._findDiff = function (e, t, r) {
                for (var n = 0; n < e.length; n += 2) if (e[n] >= t && e[n + 1] == r) return e[n];
              }),
              (e.decode._makeDiff = function (e) {
                var t = [];
                1 == e[0] && t.push(0, 1);
                for (var r = 1; r < e.length; r++) e[r - 1] != e[r] && t.push(r, e[r]);
                return (t.push(e.length, 0, e.length, 1), t);
              }),
              (e.decode._decodeG2 = function (t, r, n, a, i, o, s) {
                for (
                  var f = e.decode,
                    l = r << 3,
                    h = 0,
                    d = "",
                    u = [],
                    c = 0,
                    _ = 0,
                    v = 8 * Math.ceil(o / 8);
                  l >>> 3 < r + n;
                ) {
                  var w = 0;
                  (1 == s && (w = (t[l >>> 3] >>> (7 - (7 & l))) & 1),
                    2 == s && (w = (t[l >>> 3] >>> (7 & l)) & 1),
                    l++,
                    (d += w),
                    null != (h = f._lens[c][d]) &&
                      (f._addNtimes(u, h, c),
                      (d = ""),
                      h < 64 && (c = 1 - c),
                      u.length == o &&
                        (f._writeBits(u, a, 8 * i + _ * v),
                        (u = []),
                        _++,
                        (c = 0),
                        7 & l && (l += 8 - (7 & l)),
                        h >= 64 && (l += 8))));
                }
              }),
              (e.decode._decodeG3 = function (t, r, n, a, i, o, s, f) {
                for (var l = e.decode, h = r << 3, d = 0, u = "", c = [], _ = [], v = 0; v < o; v++)
                  c.push(0);
                for (
                  var w = 0,
                    g = 0,
                    b = 0,
                    p = 0,
                    m = 0,
                    k = -1,
                    y = "",
                    x = 0,
                    A = !0,
                    E = 8 * Math.ceil(o / 8);
                  h >>> 3 < r + n;
                ) {
                  ((b = l._findDiff(_, w + (0 == w ? 0 : 1), 1 - m)), (p = l._findDiff(_, b, m)));
                  var I = 0;
                  if (
                    (1 == s && (I = (t[h >>> 3] >>> (7 - (7 & h))) & 1),
                    2 == s && (I = (t[h >>> 3] >>> (7 & h)) & 1),
                    h++,
                    (u += I),
                    A)
                  ) {
                    if (null != l._lens[m][u]) {
                      var B = l._lens[m][u];
                      ((u = ""), (d += B), B < 64 && (l._addNtimes(c, d, m), (m = 1 - m), (d = 0)));
                    }
                  } else if ("H" == y) {
                    if (null != l._lens[m][u]) {
                      B = l._lens[m][u];
                      ((u = ""),
                        (d += B),
                        B < 64 &&
                          (l._addNtimes(c, d, m),
                          (w += d),
                          (m = 1 - m),
                          (d = 0),
                          0 == --x && (y = "")));
                    }
                  } else
                    ("0001" == u && ((u = ""), l._addNtimes(c, p - w, m), (w = p)),
                      "001" == u && ((u = ""), (y = "H"), (x = 2)),
                      null != l._dmap[u] &&
                        ((g = b + l._dmap[u]),
                        l._addNtimes(c, g - w, m),
                        (w = g),
                        (u = ""),
                        (m = 1 - m)));
                  u.endsWith("000000000001") &&
                    (k >= 0 && l._writeBits(c, a, 8 * i + k * E),
                    f &&
                      (1 == s && (A = 1 == ((t[h >>> 3] >>> (7 - (7 & h))) & 1)),
                      2 == s && (A = 1 == ((t[h >>> 3] >>> (7 & h)) & 1)),
                      h++),
                    (u = ""),
                    (m = 0),
                    k++,
                    (w = 0),
                    (_ = l._makeDiff(c)),
                    (c = []));
                }
                c.length == o && l._writeBits(c, a, 8 * i + k * E);
              }),
              (e.decode._addNtimes = function (e, t, r) {
                for (var n = 0; n < t; n++) e.push(r);
              }),
              (e.decode._writeBits = function (e, t, r) {
                for (var n = 0; n < e.length; n++) t[(r + n) >>> 3] |= e[n] << (7 - ((r + n) & 7));
              }),
              (e.decode._decodeLZW = e.decode._decodeLZW =
                ((s = 0),
                (f = 0),
                (l = 0),
                (h = 0),
                (d = function () {
                  var e = r >>> 3,
                    t =
                      (((a[e] << 16) | (a[e + 1] << 8) | a[e + 2]) >>> (24 - (7 & r) - f)) &
                      ((1 << f) - 1);
                  return ((r += f), t);
                }),
                (u = new Uint32Array(16384)),
                (c = 0),
                (_ = function (e) {
                  ((f = e + 1), (s = h + 1));
                }),
                (v = function (e) {
                  for (var t = e << 2, r = u[t + 2], n = o + r - 1; 65535 != t;)
                    ((i[n--] = u[t]), (t = u[t + 1]));
                  o += r;
                }),
                (w = function (e, t) {
                  var r = s << 2,
                    n = e << 2;
                  ((u[r] = u[3 + (t << 2)]),
                    (u[r + 1] = n),
                    (u[r + 2] = u[n + 2] + 1),
                    (u[r + 3] = u[n + 3]),
                    1 + ++s == 1 << f && 12 != f && f++);
                }),
                function (e, t, n, f, g, b) {
                  ((r = t << 3), (a = e), (i = f), (o = g));
                  var p = (t + n) << 3,
                    m = 0,
                    k = 0;
                  for (
                    (function (e) {
                      if (e != c) {
                        ((c = e), (h = 1 + (l = 1 << e)));
                        for (var t = 0; t < h + 1; t++)
                          ((u[4 * t] = u[4 * t + 3] = t),
                            (u[4 * t + 1] = 65535),
                            (u[4 * t + 2] = 1));
                      }
                    })(b),
                      _(b);
                    r < p && (m = d()) != h;
                  ) {
                    if (m == l) {
                      if ((_(b), (m = d()) == h)) break;
                      v(m);
                    } else m < s ? (v(m), w(k, m)) : (w(k, k), v(s - 1));
                    k = m;
                  }
                  return o;
                })),
              (e.tags = {}),
              (e._types = (function () {
                var e = new Array(250);
                e.fill(0);
                return {
                  basic: {
                    main: (e = e.concat([
                      0, 0, 0, 0, 4, 3, 3, 3, 3, 3, 0, 0, 3, 0, 0, 0, 3, 0, 0, 2, 2, 2, 2, 4, 3, 0,
                      0, 3, 4, 4, 3, 3, 5, 5, 3, 2, 5, 5, 0, 0, 0, 0, 4, 4, 0, 0, 3, 3, 0, 0, 0, 0,
                      0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 5, 5, 3, 0, 3, 3, 4, 4, 4, 3,
                      4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 5, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    ])),
                    rest: {
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
                      59932: 7,
                    },
                  },
                  gps: { main: [1, 2, 5, 2, 5, 1, 5, 5, 0, 9], rest: { 18: 2, 29: 2 } },
                };
              })()),
              (e._readIFD = function (t, r, a, i, o, s) {
                var f = t.readUshort(r, a);
                a += 2;
                var l = {};
                s.debug && n("   ".repeat(o), i.length - 1, ">>>----------------");
                for (var h = 0; h < f; h++) {
                  var d = t.readUshort(r, a);
                  a += 2;
                  var u = t.readUshort(r, a);
                  a += 2;
                  var c = t.readUint(r, a);
                  a += 4;
                  var _ = t.readUint(r, a);
                  a += 4;
                  var v = [];
                  if (1 == u || 7 == u) {
                    var w = c < 5 ? a - 4 : _;
                    (w + c > r.buffer.byteLength && (c = r.buffer.byteLength - w),
                      (v = new Uint8Array(r.buffer, w, c)));
                  }
                  if (2 == u) {
                    var g = c < 5 ? a - 4 : _,
                      b = r[g],
                      p = Math.max(0, Math.min(c - 1, r.length - g));
                    b < 128 || 0 == p
                      ? v.push(t.readASCII(r, g, p))
                      : (v = new Uint8Array(r.buffer, g, p));
                  }
                  if (3 == u)
                    for (var m = 0; m < c; m++)
                      v.push(t.readUshort(r, (c < 3 ? a - 4 : _) + 2 * m));
                  if (4 == u || 13 == u)
                    for (m = 0; m < c; m++) v.push(t.readUint(r, (c < 2 ? a - 4 : _) + 4 * m));
                  if (5 == u || 10 == u) {
                    var k = 5 == u ? t.readUint : t.readInt;
                    for (m = 0; m < c; m++) v.push([k(r, _ + 8 * m), k(r, _ + 8 * m + 4)]);
                  }
                  if (8 == u)
                    for (m = 0; m < c; m++) v.push(t.readShort(r, (c < 3 ? a - 4 : _) + 2 * m));
                  if (9 == u)
                    for (m = 0; m < c; m++) v.push(t.readInt(r, (c < 2 ? a - 4 : _) + 4 * m));
                  if (11 == u) for (m = 0; m < c; m++) v.push(t.readFloat(r, _ + 4 * m));
                  if (12 == u) for (m = 0; m < c; m++) v.push(t.readDouble(r, _ + 8 * m));
                  if (0 == c || 0 != v.length) {
                    if (
                      (s.debug && n("   ".repeat(o), d, u, e.tags[d], v),
                      (l["t" + d] = v),
                      330 == d && l.t272 && "DSLR-A100" == l.t272[0])
                    );
                    else if (
                      330 == d ||
                      34665 == d ||
                      34853 == d ||
                      (50740 == d && t.readUshort(r, t.readUint(v, 0)) < 300) ||
                      61440 == d
                    ) {
                      var y = 50740 == d ? [t.readUint(v, 0)] : v,
                        x = [];
                      for (m = 0; m < y.length; m++) e._readIFD(t, r, y[m], x, o + 1, s);
                      (330 == d && (l.subIFD = x),
                        34665 == d && (l.exifIFD = x[0]),
                        34853 == d && (l.gpsiIFD = x[0]),
                        50740 == d && (l.dngPrvt = x[0]),
                        61440 == d && (l.fujiIFD = x[0]));
                    }
                    if (37500 == d && s.parseMN) {
                      var A = v;
                      if ("Nikon" == t.readASCII(A, 0, 5))
                        l.makerNote = e.decode(A.slice(10).buffer)[0];
                      else if (
                        "OLYMP" == t.readASCII(A, 0, 5) ||
                        "OM SYSTEM" == t.readASCII(A, 0, 9)
                      ) {
                        var E = [8208, 8224, 8240, 8256, 8272],
                          I = [];
                        e._readIFD(t, A, 77 == A[1] ? 16 : 85 == A[5] ? 12 : 8, I, o + 1, s);
                        var B = (l.makerNote = I.pop());
                        for (m = 0; m < E.length; m++) {
                          var U = "t" + E[m];
                          null != B[U] &&
                            (e._readIFD(t, A, B[U][0], I, o + 1, s), (B[U] = I.pop()));
                        }
                        B.t12288 && (e._readIFD(t, B.t12288, 0, I, o + 1, s), (B.t12288 = I.pop()));
                      } else if (t.readUshort(r, _) < 300 && t.readUshort(r, _ + 4) <= 12) {
                        I = [];
                        (e._readIFD(t, r, _, I, o + 1, s), (l.makerNote = I[0]));
                      }
                    }
                  } else if ((n(d, "unknown TIFF tag type: ", u, "num:", c), 0 == h)) return;
                }
                return (i.push(l), s.debug && n("   ".repeat(o), "<<<---------------"), a);
              }),
              (e._writeIFD = function (t, r, n, a, i) {
                var o = Object.keys(i),
                  s = o.length;
                (i.exifIFD && s--, i.gpsiIFD && s--, t.writeUshort(n, a, s));
                for (var f = (a += 2) + 12 * s + 4, l = 0; l < o.length; l++) {
                  var h = o[l];
                  if ("t34665" != h && "t34853" != h) {
                    ("exifIFD" == h && (h = "t34665"), "gpsiIFD" == h && (h = "t34853"));
                    var d = parseInt(h.slice(1)),
                      u = r.main[d];
                    if ((null == u && (u = r.rest[d]), null == u || 0 == u))
                      throw new Error("unknown type of tag: " + d);
                    var c = i[h];
                    if (34665 == d) ((c = [f]), (f = e._writeIFD(t, r, n, f, i.exifIFD)[1]));
                    if (34853 == d)
                      ((c = [f]), (f = e._writeIFD(t, e._types.gps, n, f, i.gpsiIFD)[1]));
                    2 == u && (c = c[0] + "\0");
                    var _ = c.length;
                    (t.writeUshort(n, a, d),
                      (a += 2),
                      t.writeUshort(n, a, u),
                      (a += 2),
                      t.writeUint(n, a, _));
                    var v = [-1, 1, 1, 2, 4, 8, 0, 1, 0, 4, 8, 0, 8][u] * _,
                      w = (a += 4);
                    if ((v > 4 && (t.writeUint(n, a, f), (w = f)), 1 == u || 7 == u))
                      for (var g = 0; g < _; g++) n[w + g] = c[g];
                    else if (2 == u) t.writeASCII(n, w, c);
                    else if (3 == u) for (g = 0; g < _; g++) t.writeUshort(n, w + 2 * g, c[g]);
                    else if (4 == u) for (g = 0; g < _; g++) t.writeUint(n, w + 4 * g, c[g]);
                    else if (5 == u || 10 == u) {
                      var b = 5 == u ? t.writeUint : t.writeInt;
                      for (g = 0; g < _; g++) {
                        var p = c[g],
                          m = p[0],
                          k = p[1];
                        if (null == m) throw "e";
                        (b(n, w + 8 * g, m), b(n, w + 8 * g + 4, k));
                      }
                    } else if (9 == u) for (g = 0; g < _; g++) t.writeInt(n, w + 4 * g, c[g]);
                    else {
                      if (12 != u) throw u;
                      for (g = 0; g < _; g++) t.writeDouble(n, w + 8 * g, c[g]);
                    }
                    (v > 4 && (f += v += 1 & v), (a += 4));
                  }
                }
                return [a, f];
              }),
              (e.toRGBA8 = function (e, t) {
                function r(e) {
                  return e < 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - 0.055;
                }
                var a = e.width,
                  i = e.height,
                  o = a * i,
                  s = e.data,
                  f = new Uint8Array(4 * o),
                  l = e.t262 ? e.t262[0] : 2,
                  h = e.t258 ? Math.min(32, e.t258[0]) : 1;
                null == e.t262 && 1 == h && (l = 0);
                var d = e.t277 ? e.t277[0] : e.t258 ? e.t258.length : [1, 1, 3, 1, 1, 4, 3][l],
                  u = e.t339 ? e.t339[0] : null;
                if (1 == l && 32 == h && 3 != u) throw "e";
                var c = Math.ceil((d * h * a) / 8);
                if (0 == l) {
                  t = 1 / 256;
                  for (var _ = 0; _ < i; _++) {
                    var v = _ * c,
                      w = _ * a;
                    if (1 == h)
                      for (var g = 0; g < a; g++) {
                        var b = (w + g) << 2,
                          p = (s[v + (g >> 3)] >> (7 - (7 & g))) & 1;
                        ((f[b] = f[b + 1] = f[b + 2] = 255 * (1 - p)), (f[b + 3] = 255));
                      }
                    if (4 == h)
                      for (g = 0; g < a; g++) {
                        ((b = (w + g) << 2), (p = (s[v + (g >> 1)] >> (4 - 4 * (1 & g))) & 15));
                        ((f[b] = f[b + 1] = f[b + 2] = 17 * (15 - p)), (f[b + 3] = 255));
                      }
                    if (8 == h)
                      for (g = 0; g < a; g++) {
                        ((b = (w + g) << 2), (p = s[v + g]));
                        ((f[b] = f[b + 1] = f[b + 2] = 255 - p), (f[b + 3] = 255));
                      }
                    if (16 == h)
                      for (g = 0; g < a; g++) {
                        ((b = (w + g) << 2), (p = (s[(k = v + 2 * g) + 1] << 8) | s[k]));
                        ((f[b] = f[b + 1] = f[b + 2] = Math.min(255, 255 - ~~(p * t))),
                          (f[b + 3] = 255));
                      }
                  }
                } else if (1 == l) {
                  null == t && (t = 1 / 256);
                  var m = 3 & s.length ? null : new Float32Array(s.buffer);
                  for (_ = 0; _ < i; _++) {
                    ((v = _ * c), (w = _ * a));
                    if (1 == h)
                      for (g = 0; g < a; g++) {
                        ((b = (w + g) << 2), (p = (s[v + (g >> 3)] >> (7 - (7 & g))) & 1));
                        ((f[b] = f[b + 1] = f[b + 2] = 255 * p), (f[b + 3] = 255));
                      }
                    if (2 == h)
                      for (g = 0; g < a; g++) {
                        ((b = (w + g) << 2), (p = (s[v + (g >> 2)] >> (6 - 2 * (3 & g))) & 3));
                        ((f[b] = f[b + 1] = f[b + 2] = 85 * p), (f[b + 3] = 255));
                      }
                    if (8 == h)
                      for (g = 0; g < a; g++) {
                        ((b = (w + g) << 2), (p = s[v + g * d]));
                        ((f[b] = f[b + 1] = f[b + 2] = p), (f[b + 3] = 255));
                      }
                    if (16 == h)
                      for (g = 0; g < a; g++) {
                        ((b = (w + g) << 2), (p = (s[(k = v + 2 * g) + 1] << 8) | s[k]));
                        ((f[b] = f[b + 1] = f[b + 2] = Math.min(255, ~~(p * t))), (f[b + 3] = 255));
                      }
                    if (32 == h)
                      for (g = 0; g < a; g++) {
                        var k;
                        ((b = (w + g) << 2), (p = m[(k = (v >>> 2) + g)]));
                        ((f[b] = f[b + 1] = f[b + 2] = ~~(0.5 + 255 * p)), (f[b + 3] = 255));
                      }
                  }
                } else if (2 == l)
                  if (8 == h) {
                    if (1 == d)
                      for (g = 0; g < o; g++)
                        ((f[4 * g] = f[4 * g + 1] = f[4 * g + 2] = s[g]), (f[4 * g + 3] = 255));
                    if (3 == d)
                      for (g = 0; g < o; g++) {
                        var y = 3 * g;
                        ((f[(b = g << 2)] = s[y]),
                          (f[b + 1] = s[y + 1]),
                          (f[b + 2] = s[y + 2]),
                          (f[b + 3] = 255));
                      }
                    if (d >= 4)
                      for (g = 0; g < o; g++) {
                        y = g * d;
                        ((f[(b = g << 2)] = s[y]),
                          (f[b + 1] = s[y + 1]),
                          (f[b + 2] = s[y + 2]),
                          (f[b + 3] = s[y + 3]));
                      }
                  } else if (16 == h) {
                    if (4 == d)
                      for (g = 0; g < o; g++) {
                        y = 8 * g + 1;
                        ((f[(b = g << 2)] = s[y]),
                          (f[b + 1] = s[y + 2]),
                          (f[b + 2] = s[y + 4]),
                          (f[b + 3] = s[y + 6]));
                      }
                    if (3 == d)
                      for (g = 0; g < o; g++) {
                        y = 6 * g + 1;
                        ((f[(b = g << 2)] = s[y]),
                          (f[b + 1] = s[y + 2]),
                          (f[b + 2] = s[y + 4]),
                          (f[b + 3] = 255));
                      }
                  } else {
                    if (32 != h) throw h;
                    var x = new Float32Array(s.buffer),
                      A = 0;
                    for (g = 0; g < x.length; g++) A = Math.min(A, x[g]);
                    if (A < 0)
                      for (g = 0; g < s.length; g += 4) {
                        var E = s[g];
                        ((s[g] = s[g + 3]),
                          (s[g + 3] = E),
                          (E = s[g + 1]),
                          (s[g + 1] = s[g + 2]),
                          (s[g + 2] = E));
                      }
                    var I = [];
                    for (g = 0; g < 65536; g++) I.push(r(g / 65535));
                    for (g = 0; g < x.length; g++) {
                      var B = Math.max(0, Math.min(1, x[g]));
                      x[g] = I[~~(0.5 + 65535 * B)];
                    }
                    if (3 == d)
                      for (g = 0; g < o; g++) {
                        y = 3 * g;
                        ((f[(b = g << 2)] = ~~(0.5 + 255 * x[y])),
                          (f[b + 1] = ~~(0.5 + 255 * x[y + 1])),
                          (f[b + 2] = ~~(0.5 + 255 * x[y + 2])),
                          (f[b + 3] = 255));
                      }
                    else {
                      if (4 != d) throw d;
                      for (g = 0; g < o; g++) {
                        y = 4 * g;
                        ((f[(b = g << 2)] = ~~(0.5 + 255 * x[y])),
                          (f[b + 1] = ~~(0.5 + 255 * x[y + 1])),
                          (f[b + 2] = ~~(0.5 + 255 * x[y + 2])),
                          (f[b + 3] = ~~(0.5 + 255 * x[y + 3])));
                      }
                    }
                  }
                else if (3 == l) {
                  var U = e.t320,
                    z = 1 << h,
                    D = 8 == h && d > 1 && e.t338 && 0 != e.t338[0];
                  for (_ = 0; _ < i; _++)
                    for (var S = 0; S < a; S++) {
                      b = (g = _ * a + S) << 2;
                      var M = 0,
                        F = _ * c;
                      if (1 == h) M = (s[F + (S >>> 3)] >>> (7 - (7 & S))) & 1;
                      else if (2 == h) M = (s[F + (S >>> 2)] >>> (6 - 2 * (3 & S))) & 3;
                      else if (4 == h) M = (s[F + (S >>> 1)] >>> (4 - 4 * (1 & S))) & 15;
                      else {
                        if (8 != h) throw h;
                        M = s[F + S * d];
                      }
                      ((f[b] = U[M] >> 8),
                        (f[b + 1] = U[z + M] >> 8),
                        (f[b + 2] = U[z + z + M] >> 8),
                        (f[b + 3] = D ? s[F + S * d + 1] : 255));
                    }
                } else if (5 == l) {
                  var C = d > 4 ? 1 : 0;
                  for (g = 0; g < o; g++) {
                    b = g << 2;
                    var N = g * d;
                    if (window.UDOC) {
                      var O = s[N],
                        L = s[N + 1],
                        Z = s[N + 2],
                        R = s[N + 3],
                        P = UDOC.C.cmykToRgb([
                          O * (1 / 255),
                          L * (1 / 255),
                          Z * (1 / 255),
                          R * (1 / 255),
                        ]);
                      ((f[b] = ~~(0.5 + 255 * P[0])),
                        (f[b + 1] = ~~(0.5 + 255 * P[1])),
                        (f[b + 2] = ~~(0.5 + 255 * P[2])));
                    } else {
                      ((O = 255 - s[N]),
                        (L = 255 - s[N + 1]),
                        (Z = 255 - s[N + 2]),
                        (R = (255 - s[N + 3]) * (1 / 255)));
                      ((f[b] = ~~(O * R + 0.5)),
                        (f[b + 1] = ~~(L * R + 0.5)),
                        (f[b + 2] = ~~(Z * R + 0.5)));
                    }
                    f[b + 3] = 255 * (1 - C) + s[N + 4] * C;
                  }
                } else if (6 == l && e.t278) {
                  var T = e.t278[0];
                  for (_ = 0; _ < i; _ += T) {
                    g = _ * a;
                    for (var G = T * a, j = 0; j < G; j++) {
                      ((b = 4 * (g + j)), (Z = s[(N = 3 * g + 4 * (j >>> 1)) + (1 & j)]));
                      var J = s[N + 2] - 128,
                        H = s[N + 3] - 128,
                        W = Z + ((H >> 2) + (H >> 3) + (H >> 5)),
                        K =
                          Z -
                          ((J >> 2) + (J >> 4) + (J >> 5)) -
                          ((H >> 1) + (H >> 3) + (H >> 4) + (H >> 5)),
                        Y = Z + (J + (J >> 1) + (J >> 2) + (J >> 6));
                      ((f[b] = Math.max(0, Math.min(255, W))),
                        (f[b + 1] = Math.max(0, Math.min(255, K))),
                        (f[b + 2] = Math.max(0, Math.min(255, Y))),
                        (f[b + 3] = 255));
                    }
                  }
                } else if (32845 == l)
                  for (_ = 0; _ < i; _++)
                    for (S = 0; S < a; S++) {
                      b = 4 * (_ * a + S);
                      var q = (s[(N = 6 * (_ * a + S)) + 1] << 8) | s[N],
                        X = ((q = Math.pow(2, (q + 0.5) / 256 - 64)), (s[N + 3] + 0.5) / 410),
                        Q = (s[N + 5] + 0.5) / 410,
                        V = (9 * X) / (6 * X - 16 * Q + 12),
                        $ = (4 * Q) / (6 * X - 16 * Q + 12),
                        ee = (V * q) / $,
                        te = ((1 - V - $) * q) / $;
                      ((W = 2.69 * ee - 1.276 * (Z = q) - 0.414 * te),
                        (K = -1.022 * ee + 1.978 * Z + 0.044 * te),
                        (Y = 0.061 * ee - 0.224 * Z + 1.163 * te));
                      ((f[b] = 255 * r(Math.min(W, 1))),
                        (f[b + 1] = 255 * r(Math.min(K, 1))),
                        (f[b + 2] = 255 * r(Math.min(Y, 1))),
                        (f[b + 3] = 255));
                    }
                else n("Unknown Photometric interpretation: " + l);
                return f;
              }),
              (e.replaceIMG = function (t) {
                null == t && (t = document.getElementsByTagName("img"));
                for (var r = ["tif", "tiff", "dng", "cr2", "nef"], n = 0; n < t.length; n++) {
                  var a = t[n],
                    i = a.getAttribute("src");
                  if (null != i) {
                    var o = i.split(".").pop().toLowerCase();
                    if (-1 != r.indexOf(o)) {
                      var s = new XMLHttpRequest();
                      (e._xhrs.push(s),
                        e._imgs.push(a),
                        s.open("GET", i),
                        (s.responseType = "arraybuffer"),
                        (s.onload = e._imgLoaded),
                        s.send());
                    }
                  }
                }
              }),
              (e._xhrs = []),
              (e._imgs = []),
              (e._imgLoaded = function (t) {
                var r = e._xhrs.indexOf(t.target),
                  n = e._imgs[r];
                (e._xhrs.splice(r, 1),
                  e._imgs.splice(r, 1),
                  n.setAttribute("src", e.bufferToURI(t.target.response)));
              }),
              (e.bufferToURI = function (t) {
                var r = e.decode(t),
                  n = r,
                  a = 0,
                  i = n[0];
                r[0].subIFD && (n = n.concat(r[0].subIFD));
                for (var o = 0; o < n.length; o++) {
                  var s = n[o];
                  if (!(null == s.t258 || s.t258.length < 3)) {
                    var f = s.t256 * s.t257;
                    f > a && ((a = f), (i = s));
                  }
                }
                e.decodeImage(t, i, r);
                var l = e.toRGBA8(i),
                  h = i.width,
                  d = i.height,
                  u = document.createElement("canvas");
                ((u.width = h), (u.height = d));
                var c = u.getContext("2d"),
                  _ = new ImageData(new Uint8ClampedArray(l.buffer), h, d);
                return (c.putImageData(_, 0, 0), u.toDataURL());
              }),
              (e._binBE = {
                nextZero: function (e, t) {
                  for (; 0 != e[t];) t++;
                  return t;
                },
                readUshort: function (e, t) {
                  return (e[t] << 8) | e[t + 1];
                },
                readShort: function (t, r) {
                  var n = e._binBE.ui8;
                  return ((n[0] = t[r + 1]), (n[1] = t[r + 0]), e._binBE.i16[0]);
                },
                readInt: function (t, r) {
                  var n = e._binBE.ui8;
                  return (
                    (n[0] = t[r + 3]),
                    (n[1] = t[r + 2]),
                    (n[2] = t[r + 1]),
                    (n[3] = t[r + 0]),
                    e._binBE.i32[0]
                  );
                },
                readUint: function (t, r) {
                  var n = e._binBE.ui8;
                  return (
                    (n[0] = t[r + 3]),
                    (n[1] = t[r + 2]),
                    (n[2] = t[r + 1]),
                    (n[3] = t[r + 0]),
                    e._binBE.ui32[0]
                  );
                },
                readASCII: function (e, t, r) {
                  for (var n = "", a = 0; a < r; a++) n += String.fromCharCode(e[t + a]);
                  return n;
                },
                readFloat: function (t, r) {
                  for (var n = e._binBE.ui8, a = 0; a < 4; a++) n[a] = t[r + 3 - a];
                  return e._binBE.fl32[0];
                },
                readDouble: function (t, r) {
                  for (var n = e._binBE.ui8, a = 0; a < 8; a++) n[a] = t[r + 7 - a];
                  return e._binBE.fl64[0];
                },
                writeUshort: function (e, t, r) {
                  ((e[t] = (r >> 8) & 255), (e[t + 1] = 255 & r));
                },
                writeInt: function (t, r, n) {
                  var a = e._binBE.ui8;
                  ((e._binBE.i32[0] = n),
                    (t[r + 3] = a[0]),
                    (t[r + 2] = a[1]),
                    (t[r + 1] = a[2]),
                    (t[r + 0] = a[3]));
                },
                writeUint: function (e, t, r) {
                  ((e[t] = (r >> 24) & 255),
                    (e[t + 1] = (r >> 16) & 255),
                    (e[t + 2] = (r >> 8) & 255),
                    (e[t + 3] = 255 & r));
                },
                writeASCII: function (e, t, r) {
                  for (var n = 0; n < r.length; n++) e[t + n] = r.charCodeAt(n);
                },
                writeDouble: function (t, r, n) {
                  e._binBE.fl64[0] = n;
                  for (var a = 0; a < 8; a++) t[r + a] = e._binBE.ui8[7 - a];
                },
              }),
              (e._binBE.ui8 = new Uint8Array(8)),
              (e._binBE.i16 = new Int16Array(e._binBE.ui8.buffer)),
              (e._binBE.i32 = new Int32Array(e._binBE.ui8.buffer)),
              (e._binBE.ui32 = new Uint32Array(e._binBE.ui8.buffer)),
              (e._binBE.fl32 = new Float32Array(e._binBE.ui8.buffer)),
              (e._binBE.fl64 = new Float64Array(e._binBE.ui8.buffer)),
              (e._binLE = {
                nextZero: e._binBE.nextZero,
                readUshort: function (e, t) {
                  return (e[t + 1] << 8) | e[t];
                },
                readShort: function (t, r) {
                  var n = e._binBE.ui8;
                  return ((n[0] = t[r + 0]), (n[1] = t[r + 1]), e._binBE.i16[0]);
                },
                readInt: function (t, r) {
                  var n = e._binBE.ui8;
                  return (
                    (n[0] = t[r + 0]),
                    (n[1] = t[r + 1]),
                    (n[2] = t[r + 2]),
                    (n[3] = t[r + 3]),
                    e._binBE.i32[0]
                  );
                },
                readUint: function (t, r) {
                  var n = e._binBE.ui8;
                  return (
                    (n[0] = t[r + 0]),
                    (n[1] = t[r + 1]),
                    (n[2] = t[r + 2]),
                    (n[3] = t[r + 3]),
                    e._binBE.ui32[0]
                  );
                },
                readASCII: e._binBE.readASCII,
                readFloat: function (t, r) {
                  for (var n = e._binBE.ui8, a = 0; a < 4; a++) n[a] = t[r + a];
                  return e._binBE.fl32[0];
                },
                readDouble: function (t, r) {
                  for (var n = e._binBE.ui8, a = 0; a < 8; a++) n[a] = t[r + a];
                  return e._binBE.fl64[0];
                },
                writeUshort: function (e, t, r) {
                  ((e[t] = 255 & r), (e[t + 1] = (r >> 8) & 255));
                },
                writeInt: function (t, r, n) {
                  var a = e._binBE.ui8;
                  ((e._binBE.i32[0] = n),
                    (t[r + 0] = a[0]),
                    (t[r + 1] = a[1]),
                    (t[r + 2] = a[2]),
                    (t[r + 3] = a[3]));
                },
                writeUint: function (e, t, r) {
                  ((e[t] = (r >>> 0) & 255),
                    (e[t + 1] = (r >>> 8) & 255),
                    (e[t + 2] = (r >>> 16) & 255),
                    (e[t + 3] = (r >>> 24) & 255));
                },
                writeASCII: e._binBE.writeASCII,
              }),
              (e._copyTile = function (e, t, r, n, a, i, o, s) {
                for (var f = Math.min(t, a - o), l = Math.min(r, i - s), h = 0; h < l; h++)
                  for (var d = (s + h) * a + o, u = h * t, c = 0; c < f; c++) n[d + c] = e[u + c];
              }),
              (e.LosslessJpegDecode = (function () {
                var e, t;
                function r() {
                  return e[t++];
                }
                function n() {
                  return (e[t++] << 8) | e[t++];
                }
                function a(e) {
                  for (var t = r(), n = [0, 0, 0, 255], a = [], o = 0; o < 16; o++) a[o] = r();
                  for (o = 0; o < 16; o++)
                    for (var s = 0; s < a[o]; s++) {
                      n[i(n, 0, o + 1, 1) + 3] = r();
                    }
                  var f = new Uint8Array(256);
                  e[t] = [new Uint8Array(n), f];
                  for (o = 0; o < 256; o++) {
                    for (var l = 8, h = o, d = 0; 255 == n[d + 3] && 0 != l;)
                      d = n[d + ((h >> --l) & 1)];
                    f[o] = d;
                  }
                }
                function i(e, t, r, n) {
                  if (255 != e[t + 3]) return 0;
                  if (0 == r) return t;
                  for (var a = 0; a < 2; a++) {
                    0 == e[t + a] && ((e[t + a] = e.length), e.push(0, 0, n, 255));
                    var o = i(e, e[t + a], r - 1, n + 1);
                    if (0 != o) return o;
                  }
                  return 0;
                }
                function o(e) {
                  for (var t = e.b, r = e.f; t < 25 && e.a < e.d;) {
                    var n = e.data[e.a++];
                    (255 != n || e.c || e.a++, (r = (r << 8) | n), (t += 8));
                  }
                  if (t < 0) throw "e";
                  ((e.b = t), (e.f = r));
                }
                function s(e, t) {
                  return (t.b < e && o(t), (t.f >> (t.b -= e)) & (65535 >> (16 - e)));
                }
                function f(e, t) {
                  var r = e[0],
                    n = 0,
                    a = 255;
                  t.b < 16 && o(t);
                  var i = (t.f >> (t.b - 8)) & 255;
                  for (a = r[(n = e[1][i]) + 3], t.b -= r[n + 2]; 255 == a;)
                    a = r[(n = r[n + ((t.f >> --t.b) & 1)]) + 3];
                  return a;
                }
                function l(e, t) {
                  return (e < 32768 >> (16 - t) && (e += 1 - (1 << t)), e);
                }
                function h(e, t) {
                  var r = f(e, t);
                  return 0 == r ? 0 : 16 == r ? -32768 : l(s(r, t), r);
                }
                function d(e, t, r, n, a, i) {
                  for (var o = 0, s = 0; s < i; s++) {
                    for (var f = s * t, l = 0; l < t; l += a) {
                      o++;
                      for (var d = 0; d < a; d++) e[f + l + d] = h(n[d], r);
                    }
                    if (0 != r.e && o % r.e == 0 && 0 != s) {
                      for (
                        var u = r.a, c = r.data;
                        255 != c[u] || !(208 <= c[u + 1] && c[u + 1] <= 215);
                      )
                        u--;
                      ((r.a = u + 2), (r.f = 0), (r.b = 0));
                    }
                  }
                }
                function u(e, t) {
                  return l(s(e, t), e);
                }
                function c(e, t, r, n, a, i, o, s) {
                  for (var f = r * o, l = a; l < i; l++) e[l] += 1 << (s - 1);
                  for (var h = o; h < f; h += o) for (l = a; l < i; l++) e[h + l] += e[h + l - o];
                  for (var d = 1; d < n; d++) {
                    var u = d * f;
                    for (l = a; l < i; l++) e[u + l] += e[u + l - f];
                    for (h = o; h < f; h += o)
                      for (l = a; l < i; l++) {
                        var c = u + h + l,
                          _ = c - f,
                          v = e[c - o],
                          w = 0;
                        if (0 == t) w = 0;
                        else if (1 == t) w = v;
                        else if (2 == t) w = e[_];
                        else if (3 == t) w = e[_ - o];
                        else if (4 == t) w = v + (e[_] - e[_ - o]);
                        else if (5 == t) w = v + ((e[_] - e[_ - o]) >>> 1);
                        else if (6 == t) w = e[_] + ((v - e[_ - o]) >>> 1);
                        else {
                          if (7 != t) throw t;
                          w = (v + e[_]) >>> 1;
                        }
                        e[c] += w;
                      }
                  }
                }
                return function (i) {
                  if (((e = i), (t = 0), 65496 != n())) throw "e";
                  for (
                    var o = [], s = 0, l = 0, h = 0, _ = [], v = [], w = [], g = 0, b = 0, p = 0;
                    ;
                  ) {
                    var m = n();
                    if (65535 != m) {
                      var k = n();
                      if (65475 == m) {
                        ((l = r()), (b = n()), (p = n()), (g = r()));
                        for (var y = 0; y < g; y++) {
                          var x = r(),
                            A = r();
                          if (0 != r()) throw "e";
                          o[x] = [y, A >> 4, 15 & A];
                        }
                      } else if (65476 == m) for (var E = t + k - 2; t < E;) a(v);
                      else {
                        if (65498 == m) {
                          t++;
                          for (y = 0; y < g; y++) {
                            var I = o[r()];
                            ((w[I[0]] = v[r() >>> 4]), (_[I[0]] = I.slice(1)));
                          }
                          ((s = r()), (t += 2));
                          break;
                        }
                        65501 == m ? (h = n()) : (t += k - 2);
                      }
                    } else t--;
                  }
                  var B = new (l > 8 ? Uint16Array : Uint8Array)(b * p * g),
                    U = { b: 0, f: 0, c: 8 == s, a: t, data: e, d: e.length, e: h };
                  if (U.c)
                    !(function (r, n, a, i, o) {
                      for (var s = e.length - t, l = 0; l < s; l += 4) {
                        var h = e[t + l];
                        ((e[t + l] = e[t + l + 3]),
                          (e[t + l + 3] = h),
                          (h = e[t + l + 1]),
                          (e[t + l + 1] = e[t + l + 2]),
                          (e[t + l + 2] = h));
                      }
                      for (var d = 0; d < o; d++)
                        for (var c = 32768, _ = 32768, v = 0; v < n; v += 2) {
                          var w = f(i, a),
                            g = f(i, a);
                          (0 != w && (c += u(w, a)),
                            0 != g && (_ += u(g, a)),
                            (r[d * n + v] = 65535 & c),
                            (r[d * n + v + 1] = 65535 & _));
                        }
                    })(B, p * g, U, w[0], b);
                  else {
                    var z = [],
                      D = 0,
                      S = 0;
                    for (y = 0; y < g; y++) {
                      var M = _[y];
                      ((G = M[0]) > D && (D = G), (T = M[1]) > S && (S = T), z.push(G * T));
                    }
                    if (1 != D || 1 != S) {
                      if (3 != g || 1 != z[1] || 1 != z[2]) throw "e";
                      if (2 != D || (1 != S && 2 != S)) throw "e";
                      var F = [],
                        C = 0;
                      for (y = 0; y < g; y++) {
                        for (var N = 0; N < z[y]; N++) F.push(w[y]);
                        C += z[y];
                      }
                      var O = p / D,
                        L = b / S,
                        Z = O * L;
                      (d(B, O * C, U, F, C, L), c(B, s, O, L, C - 2, C, C, l));
                      var R = new Uint16Array(Z * z[0]);
                      if (2 == D && 2 == S) {
                        for (y = 0; y < Z; y++)
                          ((R[4 * y] = B[6 * y]),
                            (R[4 * y + 1] = B[6 * y + 1]),
                            (R[4 * y + 2] = B[6 * y + 2]),
                            (R[4 * y + 3] = B[6 * y + 3]));
                        c(R, s, 4 * O, L, 0, 1, 1, l);
                        for (y = 0; y < Z; y++)
                          ((B[6 * y] = R[4 * y]),
                            (B[6 * y + 1] = R[4 * y + 1]),
                            (B[6 * y + 2] = R[4 * y + 2]),
                            (B[6 * y + 3] = R[4 * y + 3]));
                      }
                      if (2 == D && 1 == S) {
                        for (y = 0; y < Z; y++)
                          ((R[2 * y] = B[4 * y]), (R[2 * y + 1] = B[4 * y + 1]));
                        c(R, s, 2 * O, L, 0, 1, 1, l);
                        for (y = 0; y < Z; y++)
                          ((B[4 * y] = R[2 * y]), (B[4 * y + 1] = R[2 * y + 1]));
                      }
                      for (var P = B.slice(0), T = 0; T < b; T++)
                        if (2 == S)
                          for (var G = 0; G < p; G++) {
                            var j = ((T >>> 1) * O + (G >>> 1)) * C,
                              J = 2 * (1 & T) + (1 & G);
                            ((B[(H = (T * p + G) * g)] = P[j + J]),
                              (B[H + 1] = P[j + 4]),
                              (B[H + 2] = P[j + 5]));
                          }
                        else
                          for (G = 0; G < p; G++) {
                            var H;
                            ((j = (T * O + (G >>> 1)) * C), (J = 1 & G));
                            ((B[(H = (T * p + G) * g)] = P[j + J]),
                              (B[H + 1] = P[j + 2]),
                              (B[H + 2] = P[j + 3]));
                          }
                    } else if ((d(B, p * g, U, w, g, b), 0 == h)) c(B, s, p, b, 0, g, g, l);
                    else {
                      var W = Math.floor(h / p);
                      for (T = 0; T < b; T += W) {
                        var K = B.slice(T * p * g, (T + W) * p * g);
                        (c(K, s, p, W, 0, g, g, l), B.set(K, T * p * g));
                      }
                    }
                  }
                  return B;
                };
              })()),
              (function () {
                var t = 5,
                  r = 6,
                  n = 13,
                  a = 14;
                function i(e) {
                  var t = { c: new Int8Array(2 << e.u) };
                  return (
                    (function (e, t, r) {
                      var n = [t, 3 * t + 18, 5 * t + 67, 7 * t + 276, r];
                      ((e.o = t),
                        (e.w = ((n[4] + 2 * t) / (2 * t + 1) + 1) | 0),
                        (e.v = Math.ceil(Math.log2(e.w))),
                        (e.t = 9),
                        (function (e, t) {
                          for (var r = -t[4], n = 0; r <= t[4]; n++, r++)
                            e[n] =
                              r <= -t[3]
                                ? -4
                                : r <= -t[2]
                                  ? -3
                                  : r <= -t[1]
                                    ? -2
                                    : r < -t[0]
                                      ? -1
                                      : r <= t[0]
                                        ? 0
                                        : r < t[1]
                                          ? 1
                                          : r < t[2]
                                            ? 2
                                            : r < t[3]
                                              ? 3
                                              : 4;
                        })(e.c, n));
                    })(t, 0, e.g),
                    t
                  );
                }
                function o(e) {
                  for (var t = [[], [], []], r = Math.max(2, (e.w + 32) >>> 6), n = 0; n < 3; n++)
                    for (var a = 0; a < 41; a++) t[n][a] = [r, 1];
                  return t;
                }
                function s(e, t) {
                  var r = 0,
                    n = 8 - e.a;
                  (e.j, e.a);
                  if (t) {
                    if (t >= n)
                      do {
                        ((r <<= n), (t -= n), (r |= e[e.j] & ((1 << n) - 1)), e.j++, (n = 8));
                      } while (t >= 8);
                    (t && ((r <<= t), (n -= t), (r |= (e[e.j] >>> n) & ((1 << t) - 1))),
                      (e.a = 8 - n));
                  }
                  return r;
                }
                function f(e, t, r, n, a, i, o, f) {
                  null == f && (f = 0);
                  var l,
                    h,
                    d,
                    u,
                    c,
                    _,
                    v = i + 1,
                    w = v % 2,
                    g = 0,
                    b = n[a],
                    p = n[a - 1],
                    m = n[a - 2][v],
                    k = p[v - 1],
                    y = p[v],
                    x = p[v + 1],
                    A = b[v - 1],
                    E = b[v + 1],
                    I = Math.abs;
                  if ((w && ((d = I(x - y)), (u = I(m - y)), (c = I(k - y))), w)) {
                    if (
                      ((_ =
                        ((_ = d > c && u < d ? m + k : d < c && u < c ? m + x : x + k) + 2 * y) >>>
                        2),
                      f)
                    )
                      return void (b[v] = _);
                    l = t.t * t.c[e.g + y - m] + t.c[e.g + k - y];
                  } else
                    ((_ =
                      (y > k && y > x) || (y < k && y < x) ? (E + A + 2 * y) >>> 2 : (A + E) >>> 1),
                      (l = t.t * t.c[e.g + y - k] + t.c[e.g + k - A]));
                  h = I(l);
                  var B = (function (e) {
                    for (var t = -1, r = 0; !r; t++)
                      ((r = (e[e.j] >>> (7 - e.a)) & 1), e.a++, (e.a &= 7), e.a || e.j++);
                    return t;
                  })(r);
                  if (B < e.n - t.v - 1) {
                    var U = (function (e, t) {
                      var r = 0;
                      if (t < e) for (; r <= 14 && t << ++r < e;);
                      return r;
                    })(o[h][0], o[h][1]);
                    g = s(r, U) + (B << U);
                  } else g = s(r, t.v) + 1;
                  ((g = 1 & g ? -1 - (g >>> 1) : g >>> 1),
                    (o[h][0] += I(g)),
                    o[h][1] == e.f && ((o[h][0] >>>= 1), (o[h][1] >>>= 1)),
                    o[h][1]++,
                    (_ = l < 0 ? _ - g : _ + g),
                    e.i && (_ < 0 ? (_ += t.w) : _ > e.g && (_ -= t.w)),
                    (b[v] = _ >= 0 ? Math.min(_, e.g) : 0));
                }
                function l(e, t, r) {
                  for (var n = e[0].length, a = t; a <= r; a++)
                    ((e[a][0] = e[a - 1][1]), (e[a][n - 1] = e[a - 1][n - 2]));
                }
                function h(e) {
                  (l(e, 7, 12), l(e, 2, 4), l(e, 15, 17));
                }
                function d(e, t, r, a, i, o, s, l, d, u, c, _, v) {
                  for (var w = 0, g = 1, b = i < n && i > 4; g < e.m;)
                    (w < e.m &&
                      (f(e, t, r, a, i, w, s[d], e.h && ((b && u) || (!b && (c || (w & _) == v)))),
                      f(e, t, r, a, o, w, s[d], e.h && ((!b && u) || (b && (c || (w & _) == v)))),
                      (w += 2)),
                      w > 8 && (f(e, t, r, a, i, g, l[d]), f(e, t, r, a, o, g, l[d]), (g += 2)));
                  h(a);
                }
                function u(e, t, r, n, a, i) {
                  (d(e, t, r, n, 2, 7, a, i, 0, 0, 1, 0, 8),
                    d(e, t, r, n, 8, 15, a, i, 1, 0, 1, 0, 8),
                    d(e, t, r, n, 3, 9, a, i, 2, 1, 0, 3, 0),
                    d(e, t, r, n, 10, 16, a, i, 0, 0, 0, 3, 2),
                    d(e, t, r, n, 4, 11, a, i, 1, 0, 0, 3, 2),
                    d(e, t, r, n, 12, 17, a, i, 2, 1, 0, 3, 0));
                }
                function c(e, t, r, n, a, i) {
                  var o = i.length,
                    s = e.l;
                  a + 1 == e.s && (s = e.e - a * e.l);
                  for (var f = 6 * e.e * n + a * e.l, l = 0; l < 6; l++) {
                    for (var h = 0; h < s; h++) {
                      var d,
                        u = i[l % o][h % o];
                      d = 0 == u ? 2 + (l >>> 1) : 2 == u ? 15 + (l >>> 1) : 7 + l;
                      var c = e.h
                        ? ((((2 * h) / 3) & 2147483646) | ((h % 3) & 1)) + ((h % 3) >>> 1)
                        : h >>> 1;
                      t[f + h] = r[d][c + 1];
                    }
                    f += e.e;
                  }
                }
                e._decompressRAF = function (s, f) {
                  var l = (function (t) {
                      var r = e._binBE.readUshort,
                        n = {
                          b: r(t, 0),
                          i: t[2],
                          C: t[3],
                          u: t[4],
                          q: r(t, 5),
                          k: r(t, 7),
                          e: r(t, 9),
                          l: r(t, 11),
                          s: t[13],
                          d: r(t, 14),
                        };
                      if (
                        18771 != n.b ||
                        n.i > 1 ||
                        n.q < 6 ||
                        n.q % 6 ||
                        n.e < 768 ||
                        n.e % 24 ||
                        768 != n.l ||
                        n.k < n.l ||
                        n.k % n.l ||
                        n.k - n.e >= n.l ||
                        n.s > 16 ||
                        n.s != n.k / n.l ||
                        n.s != Math.ceil(n.e / n.l) ||
                        n.d != n.q / 6 ||
                        (12 != n.u && 14 != n.u && 16 != n.u) ||
                        (16 != n.C && 0 != n.C)
                      )
                        throw "Invalid data";
                      if (0 == n.i) throw "Not implemented. We need this file!";
                      return (
                        (n.h = 16 == n.C),
                        (n.m = 0 | (n.h ? (2 * n.l) / 3 : n.l >>> 1)),
                        (n.A = n.m + 2),
                        (n.f = 64),
                        (n.g = (1 << n.u) - 1),
                        (n.n = 4 * n.u),
                        n
                      );
                    })(s),
                    d = (function (t, r) {
                      var n = new Array(r.s),
                        a = 4 * r.s,
                        i = 16 + a;
                      12 & a && (i += 16 - (12 & a));
                      for (var o = 0, s = 16; o < r.s; s += 4) {
                        var f = e._binBE.readUint(t, s);
                        ((n[o] = t.slice(i, i + f)), (n[o].j = 0), (n[o].a = 0), (i += f), o++);
                      }
                      if (i != t.length) throw "Invalid data";
                      return n;
                    })(s, l),
                    _ = i(l),
                    v = new Int16Array(l.e * l.q);
                  null == f &&
                    (f = l.h
                      ? [
                          [1, 1, 0, 1, 1, 2],
                          [1, 1, 2, 1, 1, 0],
                          [2, 0, 1, 0, 2, 1],
                          [1, 1, 2, 1, 1, 0],
                          [1, 1, 0, 1, 1, 2],
                          [0, 2, 1, 2, 0, 1],
                        ]
                      : [
                          [0, 1],
                          [3, 2],
                        ]);
                  for (
                    var w = [
                        [0, 3],
                        [1, 4],
                        [t, 11],
                        [r, 12],
                        [n, 16],
                        [a, 17],
                      ],
                      g = [],
                      b = 0;
                    b < 18;
                    b++
                  )
                    g[b] = new Uint16Array(l.A);
                  for (var p = 0; p < l.s; p++) {
                    var m = o(_),
                      k = o(_);
                    for (b = 0; b < 18; b++) for (var y = 0; y < l.A; y++) g[b][y] = 0;
                    for (var x = 0; x < l.d; x++) {
                      u(l, _, d[p], g, m, k);
                      for (b = 0; b < 6; b++)
                        for (y = 0; y < l.A; y++) g[w[b][0]][y] = g[w[b][1]][y];
                      c(l, v, g, x, p, f);
                      for (b = 2; b < 18; b++)
                        if (-1 == [t, r, n, a].indexOf(b)) for (y = 0; y < l.A; y++) g[b][y] = 0;
                      h(g);
                    }
                  }
                  return v;
                };
              })());
          })(t, r(8440)));
      })();
    },
    2589: (e, t, r) => {
      "use strict";
      var n = r(7353);
      function a(e) {
        for (var t = e.length; --t >= 0;) e[t] = 0;
      }
      var i = 256,
        o = 286,
        s = 30,
        f = 15,
        l = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
        h = [
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
          13, 13,
        ],
        d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        u = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        c = new Array(576);
      a(c);
      var _ = new Array(60);
      a(_);
      var v = new Array(512);
      a(v);
      var w = new Array(256);
      a(w);
      var g = new Array(29);
      a(g);
      var b,
        p,
        m,
        k = new Array(s);
      function y(e, t, r, n, a) {
        ((this.static_tree = e),
          (this.extra_bits = t),
          (this.extra_base = r),
          (this.elems = n),
          (this.max_length = a),
          (this.has_stree = e && e.length));
      }
      function x(e, t) {
        ((this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t));
      }
      function A(e) {
        return e < 256 ? v[e] : v[256 + (e >>> 7)];
      }
      function E(e, t) {
        ((e.pending_buf[e.pending++] = 255 & t), (e.pending_buf[e.pending++] = (t >>> 8) & 255));
      }
      function I(e, t, r) {
        e.bi_valid > 16 - r
          ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
            E(e, e.bi_buf),
            (e.bi_buf = t >> (16 - e.bi_valid)),
            (e.bi_valid += r - 16))
          : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += r));
      }
      function B(e, t, r) {
        I(e, r[2 * t], r[2 * t + 1]);
      }
      function U(e, t) {
        var r = 0;
        do {
          ((r |= 1 & e), (e >>>= 1), (r <<= 1));
        } while (--t > 0);
        return r >>> 1;
      }
      function z(e, t, r) {
        var n,
          a,
          i = new Array(16),
          o = 0;
        for (n = 1; n <= f; n++) i[n] = o = (o + r[n - 1]) << 1;
        for (a = 0; a <= t; a++) {
          var s = e[2 * a + 1];
          0 !== s && (e[2 * a] = U(i[s]++, s));
        }
      }
      function D(e) {
        var t;
        for (t = 0; t < o; t++) e.dyn_ltree[2 * t] = 0;
        for (t = 0; t < s; t++) e.dyn_dtree[2 * t] = 0;
        for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
        ((e.dyn_ltree[512] = 1), (e.opt_len = e.static_len = 0), (e.last_lit = e.matches = 0));
      }
      function S(e) {
        (e.bi_valid > 8
          ? E(e, e.bi_buf)
          : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
          (e.bi_buf = 0),
          (e.bi_valid = 0));
      }
      function M(e, t, r, n) {
        var a = 2 * t,
          i = 2 * r;
        return e[a] < e[i] || (e[a] === e[i] && n[t] <= n[r]);
      }
      function F(e, t, r) {
        for (
          var n = e.heap[r], a = r << 1;
          a <= e.heap_len &&
          (a < e.heap_len && M(t, e.heap[a + 1], e.heap[a], e.depth) && a++,
          !M(t, n, e.heap[a], e.depth));
        )
          ((e.heap[r] = e.heap[a]), (r = a), (a <<= 1));
        e.heap[r] = n;
      }
      function C(e, t, r) {
        var n,
          a,
          o,
          s,
          f = 0;
        if (0 !== e.last_lit)
          do {
            ((n = (e.pending_buf[e.d_buf + 2 * f] << 8) | e.pending_buf[e.d_buf + 2 * f + 1]),
              (a = e.pending_buf[e.l_buf + f]),
              f++,
              0 === n
                ? B(e, a, t)
                : (B(e, (o = w[a]) + i + 1, t),
                  0 !== (s = l[o]) && I(e, (a -= g[o]), s),
                  B(e, (o = A(--n)), r),
                  0 !== (s = h[o]) && I(e, (n -= k[o]), s)));
          } while (f < e.last_lit);
        B(e, 256, t);
      }
      function N(e, t) {
        var r,
          n,
          a,
          i = t.dyn_tree,
          o = t.stat_desc.static_tree,
          s = t.stat_desc.has_stree,
          l = t.stat_desc.elems,
          h = -1;
        for (e.heap_len = 0, e.heap_max = 573, r = 0; r < l; r++)
          0 !== i[2 * r] ? ((e.heap[++e.heap_len] = h = r), (e.depth[r] = 0)) : (i[2 * r + 1] = 0);
        for (; e.heap_len < 2;)
          ((i[2 * (a = e.heap[++e.heap_len] = h < 2 ? ++h : 0)] = 1),
            (e.depth[a] = 0),
            e.opt_len--,
            s && (e.static_len -= o[2 * a + 1]));
        for (t.max_code = h, r = e.heap_len >> 1; r >= 1; r--) F(e, i, r);
        a = l;
        do {
          ((r = e.heap[1]),
            (e.heap[1] = e.heap[e.heap_len--]),
            F(e, i, 1),
            (n = e.heap[1]),
            (e.heap[--e.heap_max] = r),
            (e.heap[--e.heap_max] = n),
            (i[2 * a] = i[2 * r] + i[2 * n]),
            (e.depth[a] = (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1),
            (i[2 * r + 1] = i[2 * n + 1] = a),
            (e.heap[1] = a++),
            F(e, i, 1));
        } while (e.heap_len >= 2);
        ((e.heap[--e.heap_max] = e.heap[1]),
          (function (e, t) {
            var r,
              n,
              a,
              i,
              o,
              s,
              l = t.dyn_tree,
              h = t.max_code,
              d = t.stat_desc.static_tree,
              u = t.stat_desc.has_stree,
              c = t.stat_desc.extra_bits,
              _ = t.stat_desc.extra_base,
              v = t.stat_desc.max_length,
              w = 0;
            for (i = 0; i <= f; i++) e.bl_count[i] = 0;
            for (l[2 * e.heap[e.heap_max] + 1] = 0, r = e.heap_max + 1; r < 573; r++)
              ((i = l[2 * l[2 * (n = e.heap[r]) + 1] + 1] + 1) > v && ((i = v), w++),
                (l[2 * n + 1] = i),
                n > h ||
                  (e.bl_count[i]++,
                  (o = 0),
                  n >= _ && (o = c[n - _]),
                  (s = l[2 * n]),
                  (e.opt_len += s * (i + o)),
                  u && (e.static_len += s * (d[2 * n + 1] + o))));
            if (0 !== w) {
              do {
                for (i = v - 1; 0 === e.bl_count[i];) i--;
                (e.bl_count[i]--, (e.bl_count[i + 1] += 2), e.bl_count[v]--, (w -= 2));
              } while (w > 0);
              for (i = v; 0 !== i; i--)
                for (n = e.bl_count[i]; 0 !== n;)
                  (a = e.heap[--r]) > h ||
                    (l[2 * a + 1] !== i &&
                      ((e.opt_len += (i - l[2 * a + 1]) * l[2 * a]), (l[2 * a + 1] = i)),
                    n--);
            }
          })(e, t),
          z(i, h, e.bl_count));
      }
      function O(e, t, r) {
        var n,
          a,
          i = -1,
          o = t[1],
          s = 0,
          f = 7,
          l = 4;
        for (0 === o && ((f = 138), (l = 3)), t[2 * (r + 1) + 1] = 65535, n = 0; n <= r; n++)
          ((a = o),
            (o = t[2 * (n + 1) + 1]),
            (++s < f && a === o) ||
              (s < l
                ? (e.bl_tree[2 * a] += s)
                : 0 !== a
                  ? (a !== i && e.bl_tree[2 * a]++, e.bl_tree[32]++)
                  : s <= 10
                    ? e.bl_tree[34]++
                    : e.bl_tree[36]++,
              (s = 0),
              (i = a),
              0 === o ? ((f = 138), (l = 3)) : a === o ? ((f = 6), (l = 3)) : ((f = 7), (l = 4))));
      }
      function L(e, t, r) {
        var n,
          a,
          i = -1,
          o = t[1],
          s = 0,
          f = 7,
          l = 4;
        for (0 === o && ((f = 138), (l = 3)), n = 0; n <= r; n++)
          if (((a = o), (o = t[2 * (n + 1) + 1]), !(++s < f && a === o))) {
            if (s < l)
              do {
                B(e, a, e.bl_tree);
              } while (0 !== --s);
            else
              0 !== a
                ? (a !== i && (B(e, a, e.bl_tree), s--), B(e, 16, e.bl_tree), I(e, s - 3, 2))
                : s <= 10
                  ? (B(e, 17, e.bl_tree), I(e, s - 3, 3))
                  : (B(e, 18, e.bl_tree), I(e, s - 11, 7));
            ((s = 0),
              (i = a),
              0 === o ? ((f = 138), (l = 3)) : a === o ? ((f = 6), (l = 3)) : ((f = 7), (l = 4)));
          }
      }
      a(k);
      var Z = !1;
      function R(e, t, r, a) {
        (I(e, 0 + (a ? 1 : 0), 3),
          (function (e, t, r, a) {
            (S(e),
              a && (E(e, r), E(e, ~r)),
              n.arraySet(e.pending_buf, e.window, t, r, e.pending),
              (e.pending += r));
          })(e, t, r, !0));
      }
      ((t._tr_init = function (e) {
        (Z ||
          (!(function () {
            var e,
              t,
              r,
              n,
              a,
              i = new Array(16);
            for (r = 0, n = 0; n < 28; n++) for (g[n] = r, e = 0; e < 1 << l[n]; e++) w[r++] = n;
            for (w[r - 1] = n, a = 0, n = 0; n < 16; n++)
              for (k[n] = a, e = 0; e < 1 << h[n]; e++) v[a++] = n;
            for (a >>= 7; n < s; n++)
              for (k[n] = a << 7, e = 0; e < 1 << (h[n] - 7); e++) v[256 + a++] = n;
            for (t = 0; t <= f; t++) i[t] = 0;
            for (e = 0; e <= 143;) ((c[2 * e + 1] = 8), e++, i[8]++);
            for (; e <= 255;) ((c[2 * e + 1] = 9), e++, i[9]++);
            for (; e <= 279;) ((c[2 * e + 1] = 7), e++, i[7]++);
            for (; e <= 287;) ((c[2 * e + 1] = 8), e++, i[8]++);
            for (z(c, 287, i), e = 0; e < s; e++) ((_[2 * e + 1] = 5), (_[2 * e] = U(e, 5)));
            ((b = new y(c, l, 257, o, f)),
              (p = new y(_, h, 0, s, f)),
              (m = new y(new Array(0), d, 0, 19, 7)));
          })(),
          (Z = !0)),
          (e.l_desc = new x(e.dyn_ltree, b)),
          (e.d_desc = new x(e.dyn_dtree, p)),
          (e.bl_desc = new x(e.bl_tree, m)),
          (e.bi_buf = 0),
          (e.bi_valid = 0),
          D(e));
      }),
        (t._tr_stored_block = R),
        (t._tr_flush_block = function (e, t, r, n) {
          var a,
            o,
            s = 0;
          (e.level > 0
            ? (2 === e.strm.data_type &&
                (e.strm.data_type = (function (e) {
                  var t,
                    r = 4093624447;
                  for (t = 0; t <= 31; t++, r >>>= 1)
                    if (1 & r && 0 !== e.dyn_ltree[2 * t]) return 0;
                  if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26])
                    return 1;
                  for (t = 32; t < i; t++) if (0 !== e.dyn_ltree[2 * t]) return 1;
                  return 0;
                })(e)),
              N(e, e.l_desc),
              N(e, e.d_desc),
              (s = (function (e) {
                var t;
                for (
                  O(e, e.dyn_ltree, e.l_desc.max_code),
                    O(e, e.dyn_dtree, e.d_desc.max_code),
                    N(e, e.bl_desc),
                    t = 18;
                  t >= 3 && 0 === e.bl_tree[2 * u[t] + 1];
                  t--
                );
                return ((e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t);
              })(e)),
              (a = (e.opt_len + 3 + 7) >>> 3),
              (o = (e.static_len + 3 + 7) >>> 3) <= a && (a = o))
            : (a = o = r + 5),
            r + 4 <= a && -1 !== t
              ? R(e, t, r, n)
              : 4 === e.strategy || o === a
                ? (I(e, 2 + (n ? 1 : 0), 3), C(e, c, _))
                : (I(e, 4 + (n ? 1 : 0), 3),
                  (function (e, t, r, n) {
                    var a;
                    for (I(e, t - 257, 5), I(e, r - 1, 5), I(e, n - 4, 4), a = 0; a < n; a++)
                      I(e, e.bl_tree[2 * u[a] + 1], 3);
                    (L(e, e.dyn_ltree, t - 1), L(e, e.dyn_dtree, r - 1));
                  })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1),
                  C(e, e.dyn_ltree, e.dyn_dtree)),
            D(e),
            n && S(e));
        }),
        (t._tr_tally = function (e, t, r) {
          return (
            (e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255),
            (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t),
            (e.pending_buf[e.l_buf + e.last_lit] = 255 & r),
            e.last_lit++,
            0 === t
              ? e.dyn_ltree[2 * r]++
              : (e.matches++, t--, e.dyn_ltree[2 * (w[r] + i + 1)]++, e.dyn_dtree[2 * A(t)]++),
            e.last_lit === e.lit_bufsize - 1
          );
        }),
        (t._tr_align = function (e) {
          (I(e, 2, 3),
            B(e, 256, c),
            (function (e) {
              16 === e.bi_valid
                ? (E(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
                : e.bi_valid >= 8 &&
                  ((e.pending_buf[e.pending++] = 255 & e.bi_buf),
                  (e.bi_buf >>= 8),
                  (e.bi_valid -= 8));
            })(e));
        }));
    },
    3376: (e, t, r) => {
      "use strict";
      var n = r(7353),
        a = !0,
        i = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch (e) {
        a = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch (e) {
        i = !1;
      }
      for (var o = new n.Buf8(256), s = 0; s < 256; s++)
        o[s] = s >= 252 ? 6 : s >= 248 ? 5 : s >= 240 ? 4 : s >= 224 ? 3 : s >= 192 ? 2 : 1;
      function f(e, t) {
        if (t < 65534 && ((e.subarray && i) || (!e.subarray && a)))
          return String.fromCharCode.apply(null, n.shrinkBuf(e, t));
        for (var r = "", o = 0; o < t; o++) r += String.fromCharCode(e[o]);
        return r;
      }
      ((o[254] = o[254] = 1),
        (t.string2buf = function (e) {
          var t,
            r,
            a,
            i,
            o,
            s = e.length,
            f = 0;
          for (i = 0; i < s; i++)
            (55296 == (64512 & (r = e.charCodeAt(i))) &&
              i + 1 < s &&
              56320 == (64512 & (a = e.charCodeAt(i + 1))) &&
              ((r = 65536 + ((r - 55296) << 10) + (a - 56320)), i++),
              (f += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4));
          for (t = new n.Buf8(f), o = 0, i = 0; o < f; i++)
            (55296 == (64512 & (r = e.charCodeAt(i))) &&
              i + 1 < s &&
              56320 == (64512 & (a = e.charCodeAt(i + 1))) &&
              ((r = 65536 + ((r - 55296) << 10) + (a - 56320)), i++),
              r < 128
                ? (t[o++] = r)
                : r < 2048
                  ? ((t[o++] = 192 | (r >>> 6)), (t[o++] = 128 | (63 & r)))
                  : r < 65536
                    ? ((t[o++] = 224 | (r >>> 12)),
                      (t[o++] = 128 | ((r >>> 6) & 63)),
                      (t[o++] = 128 | (63 & r)))
                    : ((t[o++] = 240 | (r >>> 18)),
                      (t[o++] = 128 | ((r >>> 12) & 63)),
                      (t[o++] = 128 | ((r >>> 6) & 63)),
                      (t[o++] = 128 | (63 & r))));
          return t;
        }),
        (t.buf2binstring = function (e) {
          return f(e, e.length);
        }),
        (t.binstring2buf = function (e) {
          for (var t = new n.Buf8(e.length), r = 0, a = t.length; r < a; r++)
            t[r] = e.charCodeAt(r);
          return t;
        }),
        (t.buf2string = function (e, t) {
          var r,
            n,
            a,
            i,
            s = t || e.length,
            l = new Array(2 * s);
          for (n = 0, r = 0; r < s;)
            if ((a = e[r++]) < 128) l[n++] = a;
            else if ((i = o[a]) > 4) ((l[n++] = 65533), (r += i - 1));
            else {
              for (a &= 2 === i ? 31 : 3 === i ? 15 : 7; i > 1 && r < s;)
                ((a = (a << 6) | (63 & e[r++])), i--);
              i > 1
                ? (l[n++] = 65533)
                : a < 65536
                  ? (l[n++] = a)
                  : ((a -= 65536),
                    (l[n++] = 55296 | ((a >> 10) & 1023)),
                    (l[n++] = 56320 | (1023 & a)));
            }
          return f(l, n);
        }),
        (t.utf8border = function (e, t) {
          var r;
          for (
            (t = t || e.length) > e.length && (t = e.length), r = t - 1;
            r >= 0 && 128 == (192 & e[r]);
          )
            r--;
          return r < 0 || 0 === r ? t : r + o[e[r]] > t ? r : t;
        }));
    },
    3638: (e) => {
      "use strict";
      e.exports = function () {
        ((this.input = null),
          (this.next_in = 0),
          (this.avail_in = 0),
          (this.total_in = 0),
          (this.output = null),
          (this.next_out = 0),
          (this.avail_out = 0),
          (this.total_out = 0),
          (this.msg = ""),
          (this.state = null),
          (this.data_type = 2),
          (this.adler = 0));
      };
    },
    4803: (e, t, r) => {
      "use strict";
      var n = r(6095),
        a = r(7353),
        i = r(3376),
        o = r(5534),
        s = r(3638),
        f = Object.prototype.toString;
      function l(e) {
        if (!(this instanceof l)) return new l(e);
        this.options = a.assign(
          {
            level: -1,
            method: 8,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: 0,
            to: "",
          },
          e || {},
        );
        var t = this.options;
        (t.raw && t.windowBits > 0
          ? (t.windowBits = -t.windowBits)
          : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16),
          (this.err = 0),
          (this.msg = ""),
          (this.ended = !1),
          (this.chunks = []),
          (this.strm = new s()),
          (this.strm.avail_out = 0));
        var r = n.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
        if (0 !== r) throw new Error(o[r]);
        if ((t.header && n.deflateSetHeader(this.strm, t.header), t.dictionary)) {
          var h;
          if (
            ((h =
              "string" == typeof t.dictionary
                ? i.string2buf(t.dictionary)
                : "[object ArrayBuffer]" === f.call(t.dictionary)
                  ? new Uint8Array(t.dictionary)
                  : t.dictionary),
            0 !== (r = n.deflateSetDictionary(this.strm, h)))
          )
            throw new Error(o[r]);
          this._dict_set = !0;
        }
      }
      function h(e, t) {
        var r = new l(t);
        if ((r.push(e, !0), r.err)) throw r.msg || o[r.err];
        return r.result;
      }
      ((l.prototype.push = function (e, t) {
        var r,
          o,
          s = this.strm,
          l = this.options.chunkSize;
        if (this.ended) return !1;
        ((o = t === ~~t ? t : !0 === t ? 4 : 0),
          "string" == typeof e
            ? (s.input = i.string2buf(e))
            : "[object ArrayBuffer]" === f.call(e)
              ? (s.input = new Uint8Array(e))
              : (s.input = e),
          (s.next_in = 0),
          (s.avail_in = s.input.length));
        do {
          if (
            (0 === s.avail_out && ((s.output = new a.Buf8(l)), (s.next_out = 0), (s.avail_out = l)),
            1 !== (r = n.deflate(s, o)) && 0 !== r)
          )
            return (this.onEnd(r), (this.ended = !0), !1);
          (0 !== s.avail_out && (0 !== s.avail_in || (4 !== o && 2 !== o))) ||
            ("string" === this.options.to
              ? this.onData(i.buf2binstring(a.shrinkBuf(s.output, s.next_out)))
              : this.onData(a.shrinkBuf(s.output, s.next_out)));
        } while ((s.avail_in > 0 || 0 === s.avail_out) && 1 !== r);
        return 4 === o
          ? ((r = n.deflateEnd(this.strm)), this.onEnd(r), (this.ended = !0), 0 === r)
          : 2 !== o || (this.onEnd(0), (s.avail_out = 0), !0);
      }),
        (l.prototype.onData = function (e) {
          this.chunks.push(e);
        }),
        (l.prototype.onEnd = function (e) {
          (0 === e &&
            ("string" === this.options.to
              ? (this.result = this.chunks.join(""))
              : (this.result = a.flattenChunks(this.chunks))),
            (this.chunks = []),
            (this.err = e),
            (this.msg = this.strm.msg));
        }),
        (t.Deflate = l),
        (t.deflate = h),
        (t.deflateRaw = function (e, t) {
          return (((t = t || {}).raw = !0), h(e, t));
        }),
        (t.gzip = function (e, t) {
          return (((t = t || {}).gzip = !0), h(e, t));
        }));
    },
    4975: (e, t, r) => {
      "use strict";
      var n = r(9763),
        a = r(7353),
        i = r(3376),
        o = r(7101),
        s = r(5534),
        f = r(3638),
        l = r(6930),
        h = Object.prototype.toString;
      function d(e) {
        if (!(this instanceof d)) return new d(e);
        this.options = a.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e || {});
        var t = this.options;
        (t.raw &&
          t.windowBits >= 0 &&
          t.windowBits < 16 &&
          ((t.windowBits = -t.windowBits), 0 === t.windowBits && (t.windowBits = -15)),
          !(t.windowBits >= 0 && t.windowBits < 16) || (e && e.windowBits) || (t.windowBits += 32),
          t.windowBits > 15 && t.windowBits < 48 && (15 & t.windowBits || (t.windowBits |= 15)),
          (this.err = 0),
          (this.msg = ""),
          (this.ended = !1),
          (this.chunks = []),
          (this.strm = new f()),
          (this.strm.avail_out = 0));
        var r = n.inflateInit2(this.strm, t.windowBits);
        if (r !== o.Z_OK) throw new Error(s[r]);
        if (
          ((this.header = new l()),
          n.inflateGetHeader(this.strm, this.header),
          t.dictionary &&
            ("string" == typeof t.dictionary
              ? (t.dictionary = i.string2buf(t.dictionary))
              : "[object ArrayBuffer]" === h.call(t.dictionary) &&
                (t.dictionary = new Uint8Array(t.dictionary)),
            t.raw && (r = n.inflateSetDictionary(this.strm, t.dictionary)) !== o.Z_OK))
        )
          throw new Error(s[r]);
      }
      function u(e, t) {
        var r = new d(t);
        if ((r.push(e, !0), r.err)) throw r.msg || s[r.err];
        return r.result;
      }
      ((d.prototype.push = function (e, t) {
        var r,
          s,
          f,
          l,
          d,
          u = this.strm,
          c = this.options.chunkSize,
          _ = this.options.dictionary,
          v = !1;
        if (this.ended) return !1;
        ((s = t === ~~t ? t : !0 === t ? o.Z_FINISH : o.Z_NO_FLUSH),
          "string" == typeof e
            ? (u.input = i.binstring2buf(e))
            : "[object ArrayBuffer]" === h.call(e)
              ? (u.input = new Uint8Array(e))
              : (u.input = e),
          (u.next_in = 0),
          (u.avail_in = u.input.length));
        do {
          if (
            (0 === u.avail_out && ((u.output = new a.Buf8(c)), (u.next_out = 0), (u.avail_out = c)),
            (r = n.inflate(u, o.Z_NO_FLUSH)) === o.Z_NEED_DICT &&
              _ &&
              (r = n.inflateSetDictionary(this.strm, _)),
            r === o.Z_BUF_ERROR && !0 === v && ((r = o.Z_OK), (v = !1)),
            r !== o.Z_STREAM_END && r !== o.Z_OK)
          )
            return (this.onEnd(r), (this.ended = !0), !1);
          (u.next_out &&
            ((0 !== u.avail_out &&
              r !== o.Z_STREAM_END &&
              (0 !== u.avail_in || (s !== o.Z_FINISH && s !== o.Z_SYNC_FLUSH))) ||
              ("string" === this.options.to
                ? ((f = i.utf8border(u.output, u.next_out)),
                  (l = u.next_out - f),
                  (d = i.buf2string(u.output, f)),
                  (u.next_out = l),
                  (u.avail_out = c - l),
                  l && a.arraySet(u.output, u.output, f, l, 0),
                  this.onData(d))
                : this.onData(a.shrinkBuf(u.output, u.next_out)))),
            0 === u.avail_in && 0 === u.avail_out && (v = !0));
        } while ((u.avail_in > 0 || 0 === u.avail_out) && r !== o.Z_STREAM_END);
        return (
          r === o.Z_STREAM_END && (s = o.Z_FINISH),
          s === o.Z_FINISH
            ? ((r = n.inflateEnd(this.strm)), this.onEnd(r), (this.ended = !0), r === o.Z_OK)
            : s !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), (u.avail_out = 0), !0)
        );
      }),
        (d.prototype.onData = function (e) {
          this.chunks.push(e);
        }),
        (d.prototype.onEnd = function (e) {
          (e === o.Z_OK &&
            ("string" === this.options.to
              ? (this.result = this.chunks.join(""))
              : (this.result = a.flattenChunks(this.chunks))),
            (this.chunks = []),
            (this.err = e),
            (this.msg = this.strm.msg));
        }),
        (t.Inflate = d),
        (t.inflate = u),
        (t.inflateRaw = function (e, t) {
          return (((t = t || {}).raw = !0), u(e, t));
        }),
        (t.ungzip = u));
    },
    5534: (e) => {
      "use strict";
      e.exports = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version",
      };
    },
    6095: (e, t, r) => {
      "use strict";
      var n,
        a = r(7353),
        i = r(2589),
        o = r(9761),
        s = r(7515),
        f = r(5534),
        l = -2,
        h = 258,
        d = 262,
        u = 103,
        c = 113,
        _ = 666;
      function v(e, t) {
        return ((e.msg = f[t]), t);
      }
      function w(e) {
        return (e << 1) - (e > 4 ? 9 : 0);
      }
      function g(e) {
        for (var t = e.length; --t >= 0;) e[t] = 0;
      }
      function b(e) {
        var t = e.state,
          r = t.pending;
        (r > e.avail_out && (r = e.avail_out),
          0 !== r &&
            (a.arraySet(e.output, t.pending_buf, t.pending_out, r, e.next_out),
            (e.next_out += r),
            (t.pending_out += r),
            (e.total_out += r),
            (e.avail_out -= r),
            (t.pending -= r),
            0 === t.pending && (t.pending_out = 0)));
      }
      function p(e, t) {
        (i._tr_flush_block(
          e,
          e.block_start >= 0 ? e.block_start : -1,
          e.strstart - e.block_start,
          t,
        ),
          (e.block_start = e.strstart),
          b(e.strm));
      }
      function m(e, t) {
        e.pending_buf[e.pending++] = t;
      }
      function k(e, t) {
        ((e.pending_buf[e.pending++] = (t >>> 8) & 255), (e.pending_buf[e.pending++] = 255 & t));
      }
      function y(e, t, r, n) {
        var i = e.avail_in;
        return (
          i > n && (i = n),
          0 === i
            ? 0
            : ((e.avail_in -= i),
              a.arraySet(t, e.input, e.next_in, i, r),
              1 === e.state.wrap
                ? (e.adler = o(e.adler, t, i, r))
                : 2 === e.state.wrap && (e.adler = s(e.adler, t, i, r)),
              (e.next_in += i),
              (e.total_in += i),
              i)
        );
      }
      function x(e, t) {
        var r,
          n,
          a = e.max_chain_length,
          i = e.strstart,
          o = e.prev_length,
          s = e.nice_match,
          f = e.strstart > e.w_size - d ? e.strstart - (e.w_size - d) : 0,
          l = e.window,
          u = e.w_mask,
          c = e.prev,
          _ = e.strstart + h,
          v = l[i + o - 1],
          w = l[i + o];
        (e.prev_length >= e.good_match && (a >>= 2), s > e.lookahead && (s = e.lookahead));
        do {
          if (l[(r = t) + o] === w && l[r + o - 1] === v && l[r] === l[i] && l[++r] === l[i + 1]) {
            ((i += 2), r++);
            do {} while (
              l[++i] === l[++r] &&
              l[++i] === l[++r] &&
              l[++i] === l[++r] &&
              l[++i] === l[++r] &&
              l[++i] === l[++r] &&
              l[++i] === l[++r] &&
              l[++i] === l[++r] &&
              l[++i] === l[++r] &&
              i < _
            );
            if (((n = h - (_ - i)), (i = _ - h), n > o)) {
              if (((e.match_start = t), (o = n), n >= s)) break;
              ((v = l[i + o - 1]), (w = l[i + o]));
            }
          }
        } while ((t = c[t & u]) > f && 0 !== --a);
        return o <= e.lookahead ? o : e.lookahead;
      }
      function A(e) {
        var t,
          r,
          n,
          i,
          o,
          s = e.w_size;
        do {
          if (((i = e.window_size - e.lookahead - e.strstart), e.strstart >= s + (s - d))) {
            (a.arraySet(e.window, e.window, s, s, 0),
              (e.match_start -= s),
              (e.strstart -= s),
              (e.block_start -= s),
              (t = r = e.hash_size));
            do {
              ((n = e.head[--t]), (e.head[t] = n >= s ? n - s : 0));
            } while (--r);
            t = r = s;
            do {
              ((n = e.prev[--t]), (e.prev[t] = n >= s ? n - s : 0));
            } while (--r);
            i += s;
          }
          if (0 === e.strm.avail_in) break;
          if (
            ((r = y(e.strm, e.window, e.strstart + e.lookahead, i)),
            (e.lookahead += r),
            e.lookahead + e.insert >= 3)
          )
            for (
              o = e.strstart - e.insert,
                e.ins_h = e.window[o],
                e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[o + 1]) & e.hash_mask;
              e.insert &&
              ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[o + 3 - 1]) & e.hash_mask),
              (e.prev[o & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = o),
              o++,
              e.insert--,
              !(e.lookahead + e.insert < 3));
            );
        } while (e.lookahead < d && 0 !== e.strm.avail_in);
      }
      function E(e, t) {
        for (var r, n; ;) {
          if (e.lookahead < d) {
            if ((A(e), e.lookahead < d && 0 === t)) return 1;
            if (0 === e.lookahead) break;
          }
          if (
            ((r = 0),
            e.lookahead >= 3 &&
              ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) & e.hash_mask),
              (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = e.strstart)),
            0 !== r && e.strstart - r <= e.w_size - d && (e.match_length = x(e, r)),
            e.match_length >= 3)
          )
            if (
              ((n = i._tr_tally(e, e.strstart - e.match_start, e.match_length - 3)),
              (e.lookahead -= e.match_length),
              e.match_length <= e.max_lazy_match && e.lookahead >= 3)
            ) {
              e.match_length--;
              do {
                (e.strstart++,
                  (e.ins_h =
                    ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) & e.hash_mask),
                  (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                  (e.head[e.ins_h] = e.strstart));
              } while (0 !== --e.match_length);
              e.strstart++;
            } else
              ((e.strstart += e.match_length),
                (e.match_length = 0),
                (e.ins_h = e.window[e.strstart]),
                (e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 1]) & e.hash_mask));
          else ((n = i._tr_tally(e, 0, e.window[e.strstart])), e.lookahead--, e.strstart++);
          if (n && (p(e, !1), 0 === e.strm.avail_out)) return 1;
        }
        return (
          (e.insert = e.strstart < 2 ? e.strstart : 2),
          4 === t
            ? (p(e, !0), 0 === e.strm.avail_out ? 3 : 4)
            : e.last_lit && (p(e, !1), 0 === e.strm.avail_out)
              ? 1
              : 2
        );
      }
      function I(e, t) {
        for (var r, n, a; ;) {
          if (e.lookahead < d) {
            if ((A(e), e.lookahead < d && 0 === t)) return 1;
            if (0 === e.lookahead) break;
          }
          if (
            ((r = 0),
            e.lookahead >= 3 &&
              ((e.ins_h = ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) & e.hash_mask),
              (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = e.strstart)),
            (e.prev_length = e.match_length),
            (e.prev_match = e.match_start),
            (e.match_length = 2),
            0 !== r &&
              e.prev_length < e.max_lazy_match &&
              e.strstart - r <= e.w_size - d &&
              ((e.match_length = x(e, r)),
              e.match_length <= 5 &&
                (1 === e.strategy || (3 === e.match_length && e.strstart - e.match_start > 4096)) &&
                (e.match_length = 2)),
            e.prev_length >= 3 && e.match_length <= e.prev_length)
          ) {
            ((a = e.strstart + e.lookahead - 3),
              (n = i._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - 3)),
              (e.lookahead -= e.prev_length - 1),
              (e.prev_length -= 2));
            do {
              ++e.strstart <= a &&
                ((e.ins_h =
                  ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 3 - 1]) & e.hash_mask),
                (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                (e.head[e.ins_h] = e.strstart));
            } while (0 !== --e.prev_length);
            if (
              ((e.match_available = 0),
              (e.match_length = 2),
              e.strstart++,
              n && (p(e, !1), 0 === e.strm.avail_out))
            )
              return 1;
          } else if (e.match_available) {
            if (
              ((n = i._tr_tally(e, 0, e.window[e.strstart - 1])) && p(e, !1),
              e.strstart++,
              e.lookahead--,
              0 === e.strm.avail_out)
            )
              return 1;
          } else ((e.match_available = 1), e.strstart++, e.lookahead--);
        }
        return (
          e.match_available &&
            ((n = i._tr_tally(e, 0, e.window[e.strstart - 1])), (e.match_available = 0)),
          (e.insert = e.strstart < 2 ? e.strstart : 2),
          4 === t
            ? (p(e, !0), 0 === e.strm.avail_out ? 3 : 4)
            : e.last_lit && (p(e, !1), 0 === e.strm.avail_out)
              ? 1
              : 2
        );
      }
      function B(e, t, r, n, a) {
        ((this.good_length = e),
          (this.max_lazy = t),
          (this.nice_length = r),
          (this.max_chain = n),
          (this.func = a));
      }
      function U() {
        ((this.strm = null),
          (this.status = 0),
          (this.pending_buf = null),
          (this.pending_buf_size = 0),
          (this.pending_out = 0),
          (this.pending = 0),
          (this.wrap = 0),
          (this.gzhead = null),
          (this.gzindex = 0),
          (this.method = 8),
          (this.last_flush = -1),
          (this.w_size = 0),
          (this.w_bits = 0),
          (this.w_mask = 0),
          (this.window = null),
          (this.window_size = 0),
          (this.prev = null),
          (this.head = null),
          (this.ins_h = 0),
          (this.hash_size = 0),
          (this.hash_bits = 0),
          (this.hash_mask = 0),
          (this.hash_shift = 0),
          (this.block_start = 0),
          (this.match_length = 0),
          (this.prev_match = 0),
          (this.match_available = 0),
          (this.strstart = 0),
          (this.match_start = 0),
          (this.lookahead = 0),
          (this.prev_length = 0),
          (this.max_chain_length = 0),
          (this.max_lazy_match = 0),
          (this.level = 0),
          (this.strategy = 0),
          (this.good_match = 0),
          (this.nice_match = 0),
          (this.dyn_ltree = new a.Buf16(1146)),
          (this.dyn_dtree = new a.Buf16(122)),
          (this.bl_tree = new a.Buf16(78)),
          g(this.dyn_ltree),
          g(this.dyn_dtree),
          g(this.bl_tree),
          (this.l_desc = null),
          (this.d_desc = null),
          (this.bl_desc = null),
          (this.bl_count = new a.Buf16(16)),
          (this.heap = new a.Buf16(573)),
          g(this.heap),
          (this.heap_len = 0),
          (this.heap_max = 0),
          (this.depth = new a.Buf16(573)),
          g(this.depth),
          (this.l_buf = 0),
          (this.lit_bufsize = 0),
          (this.last_lit = 0),
          (this.d_buf = 0),
          (this.opt_len = 0),
          (this.static_len = 0),
          (this.matches = 0),
          (this.insert = 0),
          (this.bi_buf = 0),
          (this.bi_valid = 0));
      }
      function z(e) {
        var t;
        return e && e.state
          ? ((e.total_in = e.total_out = 0),
            (e.data_type = 2),
            ((t = e.state).pending = 0),
            (t.pending_out = 0),
            t.wrap < 0 && (t.wrap = -t.wrap),
            (t.status = t.wrap ? 42 : c),
            (e.adler = 2 === t.wrap ? 0 : 1),
            (t.last_flush = 0),
            i._tr_init(t),
            0)
          : v(e, l);
      }
      function D(e) {
        var t,
          r = z(e);
        return (
          0 === r &&
            (((t = e.state).window_size = 2 * t.w_size),
            g(t.head),
            (t.max_lazy_match = n[t.level].max_lazy),
            (t.good_match = n[t.level].good_length),
            (t.nice_match = n[t.level].nice_length),
            (t.max_chain_length = n[t.level].max_chain),
            (t.strstart = 0),
            (t.block_start = 0),
            (t.lookahead = 0),
            (t.insert = 0),
            (t.match_length = t.prev_length = 2),
            (t.match_available = 0),
            (t.ins_h = 0)),
          r
        );
      }
      function S(e, t, r, n, i, o) {
        if (!e) return l;
        var s = 1;
        if (
          (-1 === t && (t = 6),
          n < 0 ? ((s = 0), (n = -n)) : n > 15 && ((s = 2), (n -= 16)),
          i < 1 || i > 9 || 8 !== r || n < 8 || n > 15 || t < 0 || t > 9 || o < 0 || o > 4)
        )
          return v(e, l);
        8 === n && (n = 9);
        var f = new U();
        return (
          (e.state = f),
          (f.strm = e),
          (f.wrap = s),
          (f.gzhead = null),
          (f.w_bits = n),
          (f.w_size = 1 << f.w_bits),
          (f.w_mask = f.w_size - 1),
          (f.hash_bits = i + 7),
          (f.hash_size = 1 << f.hash_bits),
          (f.hash_mask = f.hash_size - 1),
          (f.hash_shift = ~~((f.hash_bits + 3 - 1) / 3)),
          (f.window = new a.Buf8(2 * f.w_size)),
          (f.head = new a.Buf16(f.hash_size)),
          (f.prev = new a.Buf16(f.w_size)),
          (f.lit_bufsize = 1 << (i + 6)),
          (f.pending_buf_size = 4 * f.lit_bufsize),
          (f.pending_buf = new a.Buf8(f.pending_buf_size)),
          (f.d_buf = 1 * f.lit_bufsize),
          (f.l_buf = 3 * f.lit_bufsize),
          (f.level = t),
          (f.strategy = o),
          (f.method = r),
          D(e)
        );
      }
      ((n = [
        new B(0, 0, 0, 0, function (e, t) {
          var r = 65535;
          for (r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5); ;) {
            if (e.lookahead <= 1) {
              if ((A(e), 0 === e.lookahead && 0 === t)) return 1;
              if (0 === e.lookahead) break;
            }
            ((e.strstart += e.lookahead), (e.lookahead = 0));
            var n = e.block_start + r;
            if (
              (0 === e.strstart || e.strstart >= n) &&
              ((e.lookahead = e.strstart - n), (e.strstart = n), p(e, !1), 0 === e.strm.avail_out)
            )
              return 1;
            if (e.strstart - e.block_start >= e.w_size - d && (p(e, !1), 0 === e.strm.avail_out))
              return 1;
          }
          return (
            (e.insert = 0),
            4 === t
              ? (p(e, !0), 0 === e.strm.avail_out ? 3 : 4)
              : (e.strstart > e.block_start && (p(e, !1), e.strm.avail_out), 1)
          );
        }),
        new B(4, 4, 8, 4, E),
        new B(4, 5, 16, 8, E),
        new B(4, 6, 32, 32, E),
        new B(4, 4, 16, 16, I),
        new B(8, 16, 32, 32, I),
        new B(8, 16, 128, 128, I),
        new B(8, 32, 128, 256, I),
        new B(32, 128, 258, 1024, I),
        new B(32, 258, 258, 4096, I),
      ]),
        (t.deflateInit = function (e, t) {
          return S(e, t, 8, 15, 8, 0);
        }),
        (t.deflateInit2 = S),
        (t.deflateReset = D),
        (t.deflateResetKeep = z),
        (t.deflateSetHeader = function (e, t) {
          return e && e.state ? (2 !== e.state.wrap ? l : ((e.state.gzhead = t), 0)) : l;
        }),
        (t.deflate = function (e, t) {
          var r, a, o, f;
          if (!e || !e.state || t > 5 || t < 0) return e ? v(e, l) : l;
          if (
            ((a = e.state),
            !e.output || (!e.input && 0 !== e.avail_in) || (a.status === _ && 4 !== t))
          )
            return v(e, 0 === e.avail_out ? -5 : l);
          if (((a.strm = e), (r = a.last_flush), (a.last_flush = t), 42 === a.status))
            if (2 === a.wrap)
              ((e.adler = 0),
                m(a, 31),
                m(a, 139),
                m(a, 8),
                a.gzhead
                  ? (m(
                      a,
                      (a.gzhead.text ? 1 : 0) +
                        (a.gzhead.hcrc ? 2 : 0) +
                        (a.gzhead.extra ? 4 : 0) +
                        (a.gzhead.name ? 8 : 0) +
                        (a.gzhead.comment ? 16 : 0),
                    ),
                    m(a, 255 & a.gzhead.time),
                    m(a, (a.gzhead.time >> 8) & 255),
                    m(a, (a.gzhead.time >> 16) & 255),
                    m(a, (a.gzhead.time >> 24) & 255),
                    m(a, 9 === a.level ? 2 : a.strategy >= 2 || a.level < 2 ? 4 : 0),
                    m(a, 255 & a.gzhead.os),
                    a.gzhead.extra &&
                      a.gzhead.extra.length &&
                      (m(a, 255 & a.gzhead.extra.length), m(a, (a.gzhead.extra.length >> 8) & 255)),
                    a.gzhead.hcrc && (e.adler = s(e.adler, a.pending_buf, a.pending, 0)),
                    (a.gzindex = 0),
                    (a.status = 69))
                  : (m(a, 0),
                    m(a, 0),
                    m(a, 0),
                    m(a, 0),
                    m(a, 0),
                    m(a, 9 === a.level ? 2 : a.strategy >= 2 || a.level < 2 ? 4 : 0),
                    m(a, 3),
                    (a.status = c)));
            else {
              var d = (8 + ((a.w_bits - 8) << 4)) << 8;
              ((d |=
                (a.strategy >= 2 || a.level < 2 ? 0 : a.level < 6 ? 1 : 6 === a.level ? 2 : 3) <<
                6),
                0 !== a.strstart && (d |= 32),
                (d += 31 - (d % 31)),
                (a.status = c),
                k(a, d),
                0 !== a.strstart && (k(a, e.adler >>> 16), k(a, 65535 & e.adler)),
                (e.adler = 1));
            }
          if (69 === a.status)
            if (a.gzhead.extra) {
              for (
                o = a.pending;
                a.gzindex < (65535 & a.gzhead.extra.length) &&
                (a.pending !== a.pending_buf_size ||
                  (a.gzhead.hcrc &&
                    a.pending > o &&
                    (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)),
                  b(e),
                  (o = a.pending),
                  a.pending !== a.pending_buf_size));
              )
                (m(a, 255 & a.gzhead.extra[a.gzindex]), a.gzindex++);
              (a.gzhead.hcrc &&
                a.pending > o &&
                (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)),
                a.gzindex === a.gzhead.extra.length && ((a.gzindex = 0), (a.status = 73)));
            } else a.status = 73;
          if (73 === a.status)
            if (a.gzhead.name) {
              o = a.pending;
              do {
                if (
                  a.pending === a.pending_buf_size &&
                  (a.gzhead.hcrc &&
                    a.pending > o &&
                    (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)),
                  b(e),
                  (o = a.pending),
                  a.pending === a.pending_buf_size)
                ) {
                  f = 1;
                  break;
                }
                ((f =
                  a.gzindex < a.gzhead.name.length
                    ? 255 & a.gzhead.name.charCodeAt(a.gzindex++)
                    : 0),
                  m(a, f));
              } while (0 !== f);
              (a.gzhead.hcrc &&
                a.pending > o &&
                (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)),
                0 === f && ((a.gzindex = 0), (a.status = 91)));
            } else a.status = 91;
          if (91 === a.status)
            if (a.gzhead.comment) {
              o = a.pending;
              do {
                if (
                  a.pending === a.pending_buf_size &&
                  (a.gzhead.hcrc &&
                    a.pending > o &&
                    (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)),
                  b(e),
                  (o = a.pending),
                  a.pending === a.pending_buf_size)
                ) {
                  f = 1;
                  break;
                }
                ((f =
                  a.gzindex < a.gzhead.comment.length
                    ? 255 & a.gzhead.comment.charCodeAt(a.gzindex++)
                    : 0),
                  m(a, f));
              } while (0 !== f);
              (a.gzhead.hcrc &&
                a.pending > o &&
                (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)),
                0 === f && (a.status = u));
            } else a.status = u;
          if (
            (a.status === u &&
              (a.gzhead.hcrc
                ? (a.pending + 2 > a.pending_buf_size && b(e),
                  a.pending + 2 <= a.pending_buf_size &&
                    (m(a, 255 & e.adler),
                    m(a, (e.adler >> 8) & 255),
                    (e.adler = 0),
                    (a.status = c)))
                : (a.status = c)),
            0 !== a.pending)
          ) {
            if ((b(e), 0 === e.avail_out)) return ((a.last_flush = -1), 0);
          } else if (0 === e.avail_in && w(t) <= w(r) && 4 !== t) return v(e, -5);
          if (a.status === _ && 0 !== e.avail_in) return v(e, -5);
          if (0 !== e.avail_in || 0 !== a.lookahead || (0 !== t && a.status !== _)) {
            var y =
              2 === a.strategy
                ? (function (e, t) {
                    for (var r; ;) {
                      if (0 === e.lookahead && (A(e), 0 === e.lookahead)) {
                        if (0 === t) return 1;
                        break;
                      }
                      if (
                        ((e.match_length = 0),
                        (r = i._tr_tally(e, 0, e.window[e.strstart])),
                        e.lookahead--,
                        e.strstart++,
                        r && (p(e, !1), 0 === e.strm.avail_out))
                      )
                        return 1;
                    }
                    return (
                      (e.insert = 0),
                      4 === t
                        ? (p(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                        : e.last_lit && (p(e, !1), 0 === e.strm.avail_out)
                          ? 1
                          : 2
                    );
                  })(a, t)
                : 3 === a.strategy
                  ? (function (e, t) {
                      for (var r, n, a, o, s = e.window; ;) {
                        if (e.lookahead <= h) {
                          if ((A(e), e.lookahead <= h && 0 === t)) return 1;
                          if (0 === e.lookahead) break;
                        }
                        if (
                          ((e.match_length = 0),
                          e.lookahead >= 3 &&
                            e.strstart > 0 &&
                            (n = s[(a = e.strstart - 1)]) === s[++a] &&
                            n === s[++a] &&
                            n === s[++a])
                        ) {
                          o = e.strstart + h;
                          do {} while (
                            n === s[++a] &&
                            n === s[++a] &&
                            n === s[++a] &&
                            n === s[++a] &&
                            n === s[++a] &&
                            n === s[++a] &&
                            n === s[++a] &&
                            n === s[++a] &&
                            a < o
                          );
                          ((e.match_length = h - (o - a)),
                            e.match_length > e.lookahead && (e.match_length = e.lookahead));
                        }
                        if (
                          (e.match_length >= 3
                            ? ((r = i._tr_tally(e, 1, e.match_length - 3)),
                              (e.lookahead -= e.match_length),
                              (e.strstart += e.match_length),
                              (e.match_length = 0))
                            : ((r = i._tr_tally(e, 0, e.window[e.strstart])),
                              e.lookahead--,
                              e.strstart++),
                          r && (p(e, !1), 0 === e.strm.avail_out))
                        )
                          return 1;
                      }
                      return (
                        (e.insert = 0),
                        4 === t
                          ? (p(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                          : e.last_lit && (p(e, !1), 0 === e.strm.avail_out)
                            ? 1
                            : 2
                      );
                    })(a, t)
                  : n[a.level].func(a, t);
            if (((3 !== y && 4 !== y) || (a.status = _), 1 === y || 3 === y))
              return (0 === e.avail_out && (a.last_flush = -1), 0);
            if (
              2 === y &&
              (1 === t
                ? i._tr_align(a)
                : 5 !== t &&
                  (i._tr_stored_block(a, 0, 0, !1),
                  3 === t &&
                    (g(a.head),
                    0 === a.lookahead && ((a.strstart = 0), (a.block_start = 0), (a.insert = 0)))),
              b(e),
              0 === e.avail_out)
            )
              return ((a.last_flush = -1), 0);
          }
          return 4 !== t
            ? 0
            : a.wrap <= 0
              ? 1
              : (2 === a.wrap
                  ? (m(a, 255 & e.adler),
                    m(a, (e.adler >> 8) & 255),
                    m(a, (e.adler >> 16) & 255),
                    m(a, (e.adler >> 24) & 255),
                    m(a, 255 & e.total_in),
                    m(a, (e.total_in >> 8) & 255),
                    m(a, (e.total_in >> 16) & 255),
                    m(a, (e.total_in >> 24) & 255))
                  : (k(a, e.adler >>> 16), k(a, 65535 & e.adler)),
                b(e),
                a.wrap > 0 && (a.wrap = -a.wrap),
                0 !== a.pending ? 0 : 1);
        }),
        (t.deflateEnd = function (e) {
          var t;
          return e && e.state
            ? 42 !== (t = e.state.status) &&
              69 !== t &&
              73 !== t &&
              91 !== t &&
              t !== u &&
              t !== c &&
              t !== _
              ? v(e, l)
              : ((e.state = null), t === c ? v(e, -3) : 0)
            : l;
        }),
        (t.deflateSetDictionary = function (e, t) {
          var r,
            n,
            i,
            s,
            f,
            h,
            d,
            u,
            c = t.length;
          if (!e || !e.state) return l;
          if (2 === (s = (r = e.state).wrap) || (1 === s && 42 !== r.status) || r.lookahead)
            return l;
          for (
            1 === s && (e.adler = o(e.adler, t, c, 0)),
              r.wrap = 0,
              c >= r.w_size &&
                (0 === s && (g(r.head), (r.strstart = 0), (r.block_start = 0), (r.insert = 0)),
                (u = new a.Buf8(r.w_size)),
                a.arraySet(u, t, c - r.w_size, r.w_size, 0),
                (t = u),
                (c = r.w_size)),
              f = e.avail_in,
              h = e.next_in,
              d = e.input,
              e.avail_in = c,
              e.next_in = 0,
              e.input = t,
              A(r);
            r.lookahead >= 3;
          ) {
            ((n = r.strstart), (i = r.lookahead - 2));
            do {
              ((r.ins_h = ((r.ins_h << r.hash_shift) ^ r.window[n + 3 - 1]) & r.hash_mask),
                (r.prev[n & r.w_mask] = r.head[r.ins_h]),
                (r.head[r.ins_h] = n),
                n++);
            } while (--i);
            ((r.strstart = n), (r.lookahead = 2), A(r));
          }
          return (
            (r.strstart += r.lookahead),
            (r.block_start = r.strstart),
            (r.insert = r.lookahead),
            (r.lookahead = 0),
            (r.match_length = r.prev_length = 2),
            (r.match_available = 0),
            (e.next_in = h),
            (e.input = d),
            (e.avail_in = f),
            (r.wrap = s),
            0
          );
        }),
        (t.deflateInfo = "pako deflate (from Nodeca project)"));
    },
    6417: (e) => {
      "use strict";
      e.exports = function (e, t) {
        var r, n, a, i, o, s, f, l, h, d, u, c, _, v, w, g, b, p, m, k, y, x, A, E, I;
        ((r = e.state),
          (n = e.next_in),
          (E = e.input),
          (a = n + (e.avail_in - 5)),
          (i = e.next_out),
          (I = e.output),
          (o = i - (t - e.avail_out)),
          (s = i + (e.avail_out - 257)),
          (f = r.dmax),
          (l = r.wsize),
          (h = r.whave),
          (d = r.wnext),
          (u = r.window),
          (c = r.hold),
          (_ = r.bits),
          (v = r.lencode),
          (w = r.distcode),
          (g = (1 << r.lenbits) - 1),
          (b = (1 << r.distbits) - 1));
        e: do {
          (_ < 15 && ((c += E[n++] << _), (_ += 8), (c += E[n++] << _), (_ += 8)), (p = v[c & g]));
          t: for (;;) {
            if (((c >>>= m = p >>> 24), (_ -= m), 0 === (m = (p >>> 16) & 255))) I[i++] = 65535 & p;
            else {
              if (!(16 & m)) {
                if (64 & m) {
                  if (32 & m) {
                    r.mode = 12;
                    break e;
                  }
                  ((e.msg = "invalid literal/length code"), (r.mode = 30));
                  break e;
                }
                p = v[(65535 & p) + (c & ((1 << m) - 1))];
                continue t;
              }
              for (
                k = 65535 & p,
                  (m &= 15) &&
                    (_ < m && ((c += E[n++] << _), (_ += 8)),
                    (k += c & ((1 << m) - 1)),
                    (c >>>= m),
                    (_ -= m)),
                  _ < 15 && ((c += E[n++] << _), (_ += 8), (c += E[n++] << _), (_ += 8)),
                  p = w[c & b];
                ;
              ) {
                if (((c >>>= m = p >>> 24), (_ -= m), 16 & (m = (p >>> 16) & 255))) {
                  if (
                    ((y = 65535 & p),
                    _ < (m &= 15) &&
                      ((c += E[n++] << _), (_ += 8) < m && ((c += E[n++] << _), (_ += 8))),
                    (y += c & ((1 << m) - 1)) > f)
                  ) {
                    ((e.msg = "invalid distance too far back"), (r.mode = 30));
                    break e;
                  }
                  if (((c >>>= m), (_ -= m), y > (m = i - o))) {
                    if ((m = y - m) > h && r.sane) {
                      ((e.msg = "invalid distance too far back"), (r.mode = 30));
                      break e;
                    }
                    if (((x = 0), (A = u), 0 === d)) {
                      if (((x += l - m), m < k)) {
                        k -= m;
                        do {
                          I[i++] = u[x++];
                        } while (--m);
                        ((x = i - y), (A = I));
                      }
                    } else if (d < m) {
                      if (((x += l + d - m), (m -= d) < k)) {
                        k -= m;
                        do {
                          I[i++] = u[x++];
                        } while (--m);
                        if (((x = 0), d < k)) {
                          k -= m = d;
                          do {
                            I[i++] = u[x++];
                          } while (--m);
                          ((x = i - y), (A = I));
                        }
                      }
                    } else if (((x += d - m), m < k)) {
                      k -= m;
                      do {
                        I[i++] = u[x++];
                      } while (--m);
                      ((x = i - y), (A = I));
                    }
                    for (; k > 2;)
                      ((I[i++] = A[x++]), (I[i++] = A[x++]), (I[i++] = A[x++]), (k -= 3));
                    k && ((I[i++] = A[x++]), k > 1 && (I[i++] = A[x++]));
                  } else {
                    x = i - y;
                    do {
                      ((I[i++] = I[x++]), (I[i++] = I[x++]), (I[i++] = I[x++]), (k -= 3));
                    } while (k > 2);
                    k && ((I[i++] = I[x++]), k > 1 && (I[i++] = I[x++]));
                  }
                  break;
                }
                if (64 & m) {
                  ((e.msg = "invalid distance code"), (r.mode = 30));
                  break e;
                }
                p = w[(65535 & p) + (c & ((1 << m) - 1))];
              }
            }
            break;
          }
        } while (n < a && i < s);
        ((n -= k = _ >> 3),
          (c &= (1 << (_ -= k << 3)) - 1),
          (e.next_in = n),
          (e.next_out = i),
          (e.avail_in = n < a ? a - n + 5 : 5 - (n - a)),
          (e.avail_out = i < s ? s - i + 257 : 257 - (i - s)),
          (r.hold = c),
          (r.bits = _));
      };
    },
    6818: (e, t, r) => {
      "use strict";
      var n = r(7353),
        a = 15,
        i = [
          3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115,
          131, 163, 195, 227, 258, 0, 0,
        ],
        o = [
          16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20,
          20, 20, 21, 21, 21, 21, 16, 72, 78,
        ],
        s = [
          1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537,
          2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0,
        ],
        f = [
          16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25,
          26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
        ];
      e.exports = function (e, t, r, l, h, d, u, c) {
        var _,
          v,
          w,
          g,
          b,
          p,
          m,
          k,
          y,
          x = c.bits,
          A = 0,
          E = 0,
          I = 0,
          B = 0,
          U = 0,
          z = 0,
          D = 0,
          S = 0,
          M = 0,
          F = 0,
          C = null,
          N = 0,
          O = new n.Buf16(16),
          L = new n.Buf16(16),
          Z = null,
          R = 0;
        for (A = 0; A <= a; A++) O[A] = 0;
        for (E = 0; E < l; E++) O[t[r + E]]++;
        for (U = x, B = a; B >= 1 && 0 === O[B]; B--);
        if ((U > B && (U = B), 0 === B))
          return ((h[d++] = 20971520), (h[d++] = 20971520), (c.bits = 1), 0);
        for (I = 1; I < B && 0 === O[I]; I++);
        for (U < I && (U = I), S = 1, A = 1; A <= a; A++)
          if (((S <<= 1), (S -= O[A]) < 0)) return -1;
        if (S > 0 && (0 === e || 1 !== B)) return -1;
        for (L[1] = 0, A = 1; A < a; A++) L[A + 1] = L[A] + O[A];
        for (E = 0; E < l; E++) 0 !== t[r + E] && (u[L[t[r + E]]++] = E);
        if (
          (0 === e
            ? ((C = Z = u), (p = 19))
            : 1 === e
              ? ((C = i), (N -= 257), (Z = o), (R -= 257), (p = 256))
              : ((C = s), (Z = f), (p = -1)),
          (F = 0),
          (E = 0),
          (A = I),
          (b = d),
          (z = U),
          (D = 0),
          (w = -1),
          (g = (M = 1 << U) - 1),
          (1 === e && M > 852) || (2 === e && M > 592))
        )
          return 1;
        for (;;) {
          ((m = A - D),
            u[E] < p
              ? ((k = 0), (y = u[E]))
              : u[E] > p
                ? ((k = Z[R + u[E]]), (y = C[N + u[E]]))
                : ((k = 96), (y = 0)),
            (_ = 1 << (A - D)),
            (I = v = 1 << z));
          do {
            h[b + (F >> D) + (v -= _)] = (m << 24) | (k << 16) | y;
          } while (0 !== v);
          for (_ = 1 << (A - 1); F & _;) _ >>= 1;
          if ((0 !== _ ? ((F &= _ - 1), (F += _)) : (F = 0), E++, 0 === --O[A])) {
            if (A === B) break;
            A = t[r + u[E]];
          }
          if (A > U && (F & g) !== w) {
            for (
              0 === D && (D = U), b += I, S = 1 << (z = A - D);
              z + D < B && !((S -= O[z + D]) <= 0);
            )
              (z++, (S <<= 1));
            if (((M += 1 << z), (1 === e && M > 852) || (2 === e && M > 592))) return 1;
            h[(w = F & g)] = (U << 24) | (z << 16) | (b - d);
          }
        }
        return (0 !== F && (h[b + F] = ((A - D) << 24) | (64 << 16)), (c.bits = U), 0);
      };
    },
    6930: (e) => {
      "use strict";
      e.exports = function () {
        ((this.text = 0),
          (this.time = 0),
          (this.xflags = 0),
          (this.os = 0),
          (this.extra = null),
          (this.extra_len = 0),
          (this.name = ""),
          (this.comment = ""),
          (this.hcrc = 0),
          (this.done = !1));
      };
    },
    7101: (e) => {
      "use strict";
      e.exports = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8,
      };
    },
    7353: (e, t) => {
      "use strict";
      var r =
        "undefined" != typeof Uint8Array &&
        "undefined" != typeof Uint16Array &&
        "undefined" != typeof Int32Array;
      function n(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      ((t.assign = function (e) {
        for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
          var r = t.shift();
          if (r) {
            if ("object" != typeof r) throw new TypeError(r + "must be non-object");
            for (var a in r) n(r, a) && (e[a] = r[a]);
          }
        }
        return e;
      }),
        (t.shrinkBuf = function (e, t) {
          return e.length === t ? e : e.subarray ? e.subarray(0, t) : ((e.length = t), e);
        }));
      var a = {
          arraySet: function (e, t, r, n, a) {
            if (t.subarray && e.subarray) e.set(t.subarray(r, r + n), a);
            else for (var i = 0; i < n; i++) e[a + i] = t[r + i];
          },
          flattenChunks: function (e) {
            var t, r, n, a, i, o;
            for (n = 0, t = 0, r = e.length; t < r; t++) n += e[t].length;
            for (o = new Uint8Array(n), a = 0, t = 0, r = e.length; t < r; t++)
              ((i = e[t]), o.set(i, a), (a += i.length));
            return o;
          },
        },
        i = {
          arraySet: function (e, t, r, n, a) {
            for (var i = 0; i < n; i++) e[a + i] = t[r + i];
          },
          flattenChunks: function (e) {
            return [].concat.apply([], e);
          },
        };
      ((t.setTyped = function (e) {
        e
          ? ((t.Buf8 = Uint8Array), (t.Buf16 = Uint16Array), (t.Buf32 = Int32Array), t.assign(t, a))
          : ((t.Buf8 = Array), (t.Buf16 = Array), (t.Buf32 = Array), t.assign(t, i));
      }),
        t.setTyped(r));
    },
    7515: (e) => {
      "use strict";
      var t = (function () {
        for (var e, t = [], r = 0; r < 256; r++) {
          e = r;
          for (var n = 0; n < 8; n++) e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
          t[r] = e;
        }
        return t;
      })();
      e.exports = function (e, r, n, a) {
        var i = t,
          o = a + n;
        e ^= -1;
        for (var s = a; s < o; s++) e = (e >>> 8) ^ i[255 & (e ^ r[s])];
        return -1 ^ e;
      };
    },
    8440: (e, t, r) => {
      "use strict";
      var n = {};
      ((0, r(7353).assign)(n, r(4803), r(4975), r(7101)), (e.exports = n));
    },
    9761: (e) => {
      "use strict";
      e.exports = function (e, t, r, n) {
        for (var a = 65535 & e, i = (e >>> 16) & 65535, o = 0; 0 !== r;) {
          r -= o = r > 2e3 ? 2e3 : r;
          do {
            i = (i + (a = (a + t[n++]) | 0)) | 0;
          } while (--o);
          ((a %= 65521), (i %= 65521));
        }
        return a | (i << 16);
      };
    },
    9763: (e, t, r) => {
      "use strict";
      var n = r(7353),
        a = r(9761),
        i = r(7515),
        o = r(6417),
        s = r(6818),
        f = -2,
        l = 12,
        h = 30;
      function d(e) {
        return ((e >>> 24) & 255) + ((e >>> 8) & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
      }
      function u() {
        ((this.mode = 0),
          (this.last = !1),
          (this.wrap = 0),
          (this.havedict = !1),
          (this.flags = 0),
          (this.dmax = 0),
          (this.check = 0),
          (this.total = 0),
          (this.head = null),
          (this.wbits = 0),
          (this.wsize = 0),
          (this.whave = 0),
          (this.wnext = 0),
          (this.window = null),
          (this.hold = 0),
          (this.bits = 0),
          (this.length = 0),
          (this.offset = 0),
          (this.extra = 0),
          (this.lencode = null),
          (this.distcode = null),
          (this.lenbits = 0),
          (this.distbits = 0),
          (this.ncode = 0),
          (this.nlen = 0),
          (this.ndist = 0),
          (this.have = 0),
          (this.next = null),
          (this.lens = new n.Buf16(320)),
          (this.work = new n.Buf16(288)),
          (this.lendyn = null),
          (this.distdyn = null),
          (this.sane = 0),
          (this.back = 0),
          (this.was = 0));
      }
      function c(e) {
        var t;
        return e && e.state
          ? ((t = e.state),
            (e.total_in = e.total_out = t.total = 0),
            (e.msg = ""),
            t.wrap && (e.adler = 1 & t.wrap),
            (t.mode = 1),
            (t.last = 0),
            (t.havedict = 0),
            (t.dmax = 32768),
            (t.head = null),
            (t.hold = 0),
            (t.bits = 0),
            (t.lencode = t.lendyn = new n.Buf32(852)),
            (t.distcode = t.distdyn = new n.Buf32(592)),
            (t.sane = 1),
            (t.back = -1),
            0)
          : f;
      }
      function _(e) {
        var t;
        return e && e.state ? (((t = e.state).wsize = 0), (t.whave = 0), (t.wnext = 0), c(e)) : f;
      }
      function v(e, t) {
        var r, n;
        return e && e.state
          ? ((n = e.state),
            t < 0 ? ((r = 0), (t = -t)) : ((r = 1 + (t >> 4)), t < 48 && (t &= 15)),
            t && (t < 8 || t > 15)
              ? f
              : (null !== n.window && n.wbits !== t && (n.window = null),
                (n.wrap = r),
                (n.wbits = t),
                _(e)))
          : f;
      }
      function w(e, t) {
        var r, n;
        return e
          ? ((n = new u()),
            (e.state = n),
            (n.window = null),
            0 !== (r = v(e, t)) && (e.state = null),
            r)
          : f;
      }
      var g,
        b,
        p = !0;
      function m(e) {
        if (p) {
          var t;
          for (g = new n.Buf32(512), b = new n.Buf32(32), t = 0; t < 144;) e.lens[t++] = 8;
          for (; t < 256;) e.lens[t++] = 9;
          for (; t < 280;) e.lens[t++] = 7;
          for (; t < 288;) e.lens[t++] = 8;
          for (s(1, e.lens, 0, 288, g, 0, e.work, { bits: 9 }), t = 0; t < 32;) e.lens[t++] = 5;
          (s(2, e.lens, 0, 32, b, 0, e.work, { bits: 5 }), (p = !1));
        }
        ((e.lencode = g), (e.lenbits = 9), (e.distcode = b), (e.distbits = 5));
      }
      function k(e, t, r, a) {
        var i,
          o = e.state;
        return (
          null === o.window &&
            ((o.wsize = 1 << o.wbits),
            (o.wnext = 0),
            (o.whave = 0),
            (o.window = new n.Buf8(o.wsize))),
          a >= o.wsize
            ? (n.arraySet(o.window, t, r - o.wsize, o.wsize, 0), (o.wnext = 0), (o.whave = o.wsize))
            : ((i = o.wsize - o.wnext) > a && (i = a),
              n.arraySet(o.window, t, r - a, i, o.wnext),
              (a -= i)
                ? (n.arraySet(o.window, t, r - a, a, 0), (o.wnext = a), (o.whave = o.wsize))
                : ((o.wnext += i),
                  o.wnext === o.wsize && (o.wnext = 0),
                  o.whave < o.wsize && (o.whave += i))),
          0
        );
      }
      ((t.inflateReset = _),
        (t.inflateReset2 = v),
        (t.inflateResetKeep = c),
        (t.inflateInit = function (e) {
          return w(e, 15);
        }),
        (t.inflateInit2 = w),
        (t.inflate = function (e, t) {
          var r,
            u,
            c,
            _,
            v,
            w,
            g,
            b,
            p,
            y,
            x,
            A,
            E,
            I,
            B,
            U,
            z,
            D,
            S,
            M,
            F,
            C,
            N,
            O,
            L = 0,
            Z = new n.Buf8(4),
            R = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!e || !e.state || !e.output || (!e.input && 0 !== e.avail_in)) return f;
          ((r = e.state).mode === l && (r.mode = 13),
            (v = e.next_out),
            (c = e.output),
            (g = e.avail_out),
            (_ = e.next_in),
            (u = e.input),
            (w = e.avail_in),
            (b = r.hold),
            (p = r.bits),
            (y = w),
            (x = g),
            (C = 0));
          e: for (;;)
            switch (r.mode) {
              case 1:
                if (0 === r.wrap) {
                  r.mode = 13;
                  break;
                }
                for (; p < 16;) {
                  if (0 === w) break e;
                  (w--, (b += u[_++] << p), (p += 8));
                }
                if (2 & r.wrap && 35615 === b) {
                  ((r.check = 0),
                    (Z[0] = 255 & b),
                    (Z[1] = (b >>> 8) & 255),
                    (r.check = i(r.check, Z, 2, 0)),
                    (b = 0),
                    (p = 0),
                    (r.mode = 2));
                  break;
                }
                if (
                  ((r.flags = 0),
                  r.head && (r.head.done = !1),
                  !(1 & r.wrap) || (((255 & b) << 8) + (b >> 8)) % 31)
                ) {
                  ((e.msg = "incorrect header check"), (r.mode = h));
                  break;
                }
                if (8 != (15 & b)) {
                  ((e.msg = "unknown compression method"), (r.mode = h));
                  break;
                }
                if (((p -= 4), (F = 8 + (15 & (b >>>= 4))), 0 === r.wbits)) r.wbits = F;
                else if (F > r.wbits) {
                  ((e.msg = "invalid window size"), (r.mode = h));
                  break;
                }
                ((r.dmax = 1 << F),
                  (e.adler = r.check = 1),
                  (r.mode = 512 & b ? 10 : l),
                  (b = 0),
                  (p = 0));
                break;
              case 2:
                for (; p < 16;) {
                  if (0 === w) break e;
                  (w--, (b += u[_++] << p), (p += 8));
                }
                if (((r.flags = b), 8 != (255 & r.flags))) {
                  ((e.msg = "unknown compression method"), (r.mode = h));
                  break;
                }
                if (57344 & r.flags) {
                  ((e.msg = "unknown header flags set"), (r.mode = h));
                  break;
                }
                (r.head && (r.head.text = (b >> 8) & 1),
                  512 & r.flags &&
                    ((Z[0] = 255 & b), (Z[1] = (b >>> 8) & 255), (r.check = i(r.check, Z, 2, 0))),
                  (b = 0),
                  (p = 0),
                  (r.mode = 3));
              case 3:
                for (; p < 32;) {
                  if (0 === w) break e;
                  (w--, (b += u[_++] << p), (p += 8));
                }
                (r.head && (r.head.time = b),
                  512 & r.flags &&
                    ((Z[0] = 255 & b),
                    (Z[1] = (b >>> 8) & 255),
                    (Z[2] = (b >>> 16) & 255),
                    (Z[3] = (b >>> 24) & 255),
                    (r.check = i(r.check, Z, 4, 0))),
                  (b = 0),
                  (p = 0),
                  (r.mode = 4));
              case 4:
                for (; p < 16;) {
                  if (0 === w) break e;
                  (w--, (b += u[_++] << p), (p += 8));
                }
                (r.head && ((r.head.xflags = 255 & b), (r.head.os = b >> 8)),
                  512 & r.flags &&
                    ((Z[0] = 255 & b), (Z[1] = (b >>> 8) & 255), (r.check = i(r.check, Z, 2, 0))),
                  (b = 0),
                  (p = 0),
                  (r.mode = 5));
              case 5:
                if (1024 & r.flags) {
                  for (; p < 16;) {
                    if (0 === w) break e;
                    (w--, (b += u[_++] << p), (p += 8));
                  }
                  ((r.length = b),
                    r.head && (r.head.extra_len = b),
                    512 & r.flags &&
                      ((Z[0] = 255 & b), (Z[1] = (b >>> 8) & 255), (r.check = i(r.check, Z, 2, 0))),
                    (b = 0),
                    (p = 0));
                } else r.head && (r.head.extra = null);
                r.mode = 6;
              case 6:
                if (
                  1024 & r.flags &&
                  ((A = r.length) > w && (A = w),
                  A &&
                    (r.head &&
                      ((F = r.head.extra_len - r.length),
                      r.head.extra || (r.head.extra = new Array(r.head.extra_len)),
                      n.arraySet(r.head.extra, u, _, A, F)),
                    512 & r.flags && (r.check = i(r.check, u, A, _)),
                    (w -= A),
                    (_ += A),
                    (r.length -= A)),
                  r.length)
                )
                  break e;
                ((r.length = 0), (r.mode = 7));
              case 7:
                if (2048 & r.flags) {
                  if (0 === w) break e;
                  A = 0;
                  do {
                    ((F = u[_ + A++]),
                      r.head && F && r.length < 65536 && (r.head.name += String.fromCharCode(F)));
                  } while (F && A < w);
                  if ((512 & r.flags && (r.check = i(r.check, u, A, _)), (w -= A), (_ += A), F))
                    break e;
                } else r.head && (r.head.name = null);
                ((r.length = 0), (r.mode = 8));
              case 8:
                if (4096 & r.flags) {
                  if (0 === w) break e;
                  A = 0;
                  do {
                    ((F = u[_ + A++]),
                      r.head &&
                        F &&
                        r.length < 65536 &&
                        (r.head.comment += String.fromCharCode(F)));
                  } while (F && A < w);
                  if ((512 & r.flags && (r.check = i(r.check, u, A, _)), (w -= A), (_ += A), F))
                    break e;
                } else r.head && (r.head.comment = null);
                r.mode = 9;
              case 9:
                if (512 & r.flags) {
                  for (; p < 16;) {
                    if (0 === w) break e;
                    (w--, (b += u[_++] << p), (p += 8));
                  }
                  if (b !== (65535 & r.check)) {
                    ((e.msg = "header crc mismatch"), (r.mode = h));
                    break;
                  }
                  ((b = 0), (p = 0));
                }
                (r.head && ((r.head.hcrc = (r.flags >> 9) & 1), (r.head.done = !0)),
                  (e.adler = r.check = 0),
                  (r.mode = l));
                break;
              case 10:
                for (; p < 32;) {
                  if (0 === w) break e;
                  (w--, (b += u[_++] << p), (p += 8));
                }
                ((e.adler = r.check = d(b)), (b = 0), (p = 0), (r.mode = 11));
              case 11:
                if (0 === r.havedict)
                  return (
                    (e.next_out = v),
                    (e.avail_out = g),
                    (e.next_in = _),
                    (e.avail_in = w),
                    (r.hold = b),
                    (r.bits = p),
                    2
                  );
                ((e.adler = r.check = 1), (r.mode = l));
              case l:
                if (5 === t || 6 === t) break e;
              case 13:
                if (r.last) {
                  ((b >>>= 7 & p), (p -= 7 & p), (r.mode = 27));
                  break;
                }
                for (; p < 3;) {
                  if (0 === w) break e;
                  (w--, (b += u[_++] << p), (p += 8));
                }
                switch (((r.last = 1 & b), (p -= 1), 3 & (b >>>= 1))) {
                  case 0:
                    r.mode = 14;
                    break;
                  case 1:
                    if ((m(r), (r.mode = 20), 6 === t)) {
                      ((b >>>= 2), (p -= 2));
                      break e;
                    }
                    break;
                  case 2:
                    r.mode = 17;
                    break;
                  case 3:
                    ((e.msg = "invalid block type"), (r.mode = h));
                }
                ((b >>>= 2), (p -= 2));
                break;
              case 14:
                for (b >>>= 7 & p, p -= 7 & p; p < 32;) {
                  if (0 === w) break e;
                  (w--, (b += u[_++] << p), (p += 8));
                }
                if ((65535 & b) != ((b >>> 16) ^ 65535)) {
                  ((e.msg = "invalid stored block lengths"), (r.mode = h));
                  break;
                }
                if (((r.length = 65535 & b), (b = 0), (p = 0), (r.mode = 15), 6 === t)) break e;
              case 15:
                r.mode = 16;
              case 16:
                if ((A = r.length)) {
                  if ((A > w && (A = w), A > g && (A = g), 0 === A)) break e;
                  (n.arraySet(c, u, _, A, v),
                    (w -= A),
                    (_ += A),
                    (g -= A),
                    (v += A),
                    (r.length -= A));
                  break;
                }
                r.mode = l;
                break;
              case 17:
                for (; p < 14;) {
                  if (0 === w) break e;
                  (w--, (b += u[_++] << p), (p += 8));
                }
                if (
                  ((r.nlen = 257 + (31 & b)),
                  (b >>>= 5),
                  (p -= 5),
                  (r.ndist = 1 + (31 & b)),
                  (b >>>= 5),
                  (p -= 5),
                  (r.ncode = 4 + (15 & b)),
                  (b >>>= 4),
                  (p -= 4),
                  r.nlen > 286 || r.ndist > 30)
                ) {
                  ((e.msg = "too many length or distance symbols"), (r.mode = h));
                  break;
                }
                ((r.have = 0), (r.mode = 18));
              case 18:
                for (; r.have < r.ncode;) {
                  for (; p < 3;) {
                    if (0 === w) break e;
                    (w--, (b += u[_++] << p), (p += 8));
                  }
                  ((r.lens[R[r.have++]] = 7 & b), (b >>>= 3), (p -= 3));
                }
                for (; r.have < 19;) r.lens[R[r.have++]] = 0;
                if (
                  ((r.lencode = r.lendyn),
                  (r.lenbits = 7),
                  (N = { bits: r.lenbits }),
                  (C = s(0, r.lens, 0, 19, r.lencode, 0, r.work, N)),
                  (r.lenbits = N.bits),
                  C)
                ) {
                  ((e.msg = "invalid code lengths set"), (r.mode = h));
                  break;
                }
                ((r.have = 0), (r.mode = 19));
              case 19:
                for (; r.have < r.nlen + r.ndist;) {
                  for (
                    ;
                    (U = ((L = r.lencode[b & ((1 << r.lenbits) - 1)]) >>> 16) & 255),
                      (z = 65535 & L),
                      !((B = L >>> 24) <= p);
                  ) {
                    if (0 === w) break e;
                    (w--, (b += u[_++] << p), (p += 8));
                  }
                  if (z < 16) ((b >>>= B), (p -= B), (r.lens[r.have++] = z));
                  else {
                    if (16 === z) {
                      for (O = B + 2; p < O;) {
                        if (0 === w) break e;
                        (w--, (b += u[_++] << p), (p += 8));
                      }
                      if (((b >>>= B), (p -= B), 0 === r.have)) {
                        ((e.msg = "invalid bit length repeat"), (r.mode = h));
                        break;
                      }
                      ((F = r.lens[r.have - 1]), (A = 3 + (3 & b)), (b >>>= 2), (p -= 2));
                    } else if (17 === z) {
                      for (O = B + 3; p < O;) {
                        if (0 === w) break e;
                        (w--, (b += u[_++] << p), (p += 8));
                      }
                      ((p -= B), (F = 0), (A = 3 + (7 & (b >>>= B))), (b >>>= 3), (p -= 3));
                    } else {
                      for (O = B + 7; p < O;) {
                        if (0 === w) break e;
                        (w--, (b += u[_++] << p), (p += 8));
                      }
                      ((p -= B), (F = 0), (A = 11 + (127 & (b >>>= B))), (b >>>= 7), (p -= 7));
                    }
                    if (r.have + A > r.nlen + r.ndist) {
                      ((e.msg = "invalid bit length repeat"), (r.mode = h));
                      break;
                    }
                    for (; A--;) r.lens[r.have++] = F;
                  }
                }
                if (r.mode === h) break;
                if (0 === r.lens[256]) {
                  ((e.msg = "invalid code -- missing end-of-block"), (r.mode = h));
                  break;
                }
                if (
                  ((r.lenbits = 9),
                  (N = { bits: r.lenbits }),
                  (C = s(1, r.lens, 0, r.nlen, r.lencode, 0, r.work, N)),
                  (r.lenbits = N.bits),
                  C)
                ) {
                  ((e.msg = "invalid literal/lengths set"), (r.mode = h));
                  break;
                }
                if (
                  ((r.distbits = 6),
                  (r.distcode = r.distdyn),
                  (N = { bits: r.distbits }),
                  (C = s(2, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, N)),
                  (r.distbits = N.bits),
                  C)
                ) {
                  ((e.msg = "invalid distances set"), (r.mode = h));
                  break;
                }
                if (((r.mode = 20), 6 === t)) break e;
              case 20:
                r.mode = 21;
              case 21:
                if (w >= 6 && g >= 258) {
                  ((e.next_out = v),
                    (e.avail_out = g),
                    (e.next_in = _),
                    (e.avail_in = w),
                    (r.hold = b),
                    (r.bits = p),
                    o(e, x),
                    (v = e.next_out),
                    (c = e.output),
                    (g = e.avail_out),
                    (_ = e.next_in),
                    (u = e.input),
                    (w = e.avail_in),
                    (b = r.hold),
                    (p = r.bits),
                    r.mode === l && (r.back = -1));
                  break;
                }
                for (
                  r.back = 0;
                  (U = ((L = r.lencode[b & ((1 << r.lenbits) - 1)]) >>> 16) & 255),
                    (z = 65535 & L),
                    !((B = L >>> 24) <= p);
                ) {
                  if (0 === w) break e;
                  (w--, (b += u[_++] << p), (p += 8));
                }
                if (U && !(240 & U)) {
                  for (
                    D = B, S = U, M = z;
                    (U = ((L = r.lencode[M + ((b & ((1 << (D + S)) - 1)) >> D)]) >>> 16) & 255),
                      (z = 65535 & L),
                      !(D + (B = L >>> 24) <= p);
                  ) {
                    if (0 === w) break e;
                    (w--, (b += u[_++] << p), (p += 8));
                  }
                  ((b >>>= D), (p -= D), (r.back += D));
                }
                if (((b >>>= B), (p -= B), (r.back += B), (r.length = z), 0 === U)) {
                  r.mode = 26;
                  break;
                }
                if (32 & U) {
                  ((r.back = -1), (r.mode = l));
                  break;
                }
                if (64 & U) {
                  ((e.msg = "invalid literal/length code"), (r.mode = h));
                  break;
                }
                ((r.extra = 15 & U), (r.mode = 22));
              case 22:
                if (r.extra) {
                  for (O = r.extra; p < O;) {
                    if (0 === w) break e;
                    (w--, (b += u[_++] << p), (p += 8));
                  }
                  ((r.length += b & ((1 << r.extra) - 1)),
                    (b >>>= r.extra),
                    (p -= r.extra),
                    (r.back += r.extra));
                }
                ((r.was = r.length), (r.mode = 23));
              case 23:
                for (
                  ;
                  (U = ((L = r.distcode[b & ((1 << r.distbits) - 1)]) >>> 16) & 255),
                    (z = 65535 & L),
                    !((B = L >>> 24) <= p);
                ) {
                  if (0 === w) break e;
                  (w--, (b += u[_++] << p), (p += 8));
                }
                if (!(240 & U)) {
                  for (
                    D = B, S = U, M = z;
                    (U = ((L = r.distcode[M + ((b & ((1 << (D + S)) - 1)) >> D)]) >>> 16) & 255),
                      (z = 65535 & L),
                      !(D + (B = L >>> 24) <= p);
                  ) {
                    if (0 === w) break e;
                    (w--, (b += u[_++] << p), (p += 8));
                  }
                  ((b >>>= D), (p -= D), (r.back += D));
                }
                if (((b >>>= B), (p -= B), (r.back += B), 64 & U)) {
                  ((e.msg = "invalid distance code"), (r.mode = h));
                  break;
                }
                ((r.offset = z), (r.extra = 15 & U), (r.mode = 24));
              case 24:
                if (r.extra) {
                  for (O = r.extra; p < O;) {
                    if (0 === w) break e;
                    (w--, (b += u[_++] << p), (p += 8));
                  }
                  ((r.offset += b & ((1 << r.extra) - 1)),
                    (b >>>= r.extra),
                    (p -= r.extra),
                    (r.back += r.extra));
                }
                if (r.offset > r.dmax) {
                  ((e.msg = "invalid distance too far back"), (r.mode = h));
                  break;
                }
                r.mode = 25;
              case 25:
                if (0 === g) break e;
                if (((A = x - g), r.offset > A)) {
                  if ((A = r.offset - A) > r.whave && r.sane) {
                    ((e.msg = "invalid distance too far back"), (r.mode = h));
                    break;
                  }
                  (A > r.wnext ? ((A -= r.wnext), (E = r.wsize - A)) : (E = r.wnext - A),
                    A > r.length && (A = r.length),
                    (I = r.window));
                } else ((I = c), (E = v - r.offset), (A = r.length));
                (A > g && (A = g), (g -= A), (r.length -= A));
                do {
                  c[v++] = I[E++];
                } while (--A);
                0 === r.length && (r.mode = 21);
                break;
              case 26:
                if (0 === g) break e;
                ((c[v++] = r.length), g--, (r.mode = 21));
                break;
              case 27:
                if (r.wrap) {
                  for (; p < 32;) {
                    if (0 === w) break e;
                    (w--, (b |= u[_++] << p), (p += 8));
                  }
                  if (
                    ((x -= g),
                    (e.total_out += x),
                    (r.total += x),
                    x &&
                      (e.adler = r.check =
                        r.flags ? i(r.check, c, x, v - x) : a(r.check, c, x, v - x)),
                    (x = g),
                    (r.flags ? b : d(b)) !== r.check)
                  ) {
                    ((e.msg = "incorrect data check"), (r.mode = h));
                    break;
                  }
                  ((b = 0), (p = 0));
                }
                r.mode = 28;
              case 28:
                if (r.wrap && r.flags) {
                  for (; p < 32;) {
                    if (0 === w) break e;
                    (w--, (b += u[_++] << p), (p += 8));
                  }
                  if (b !== (4294967295 & r.total)) {
                    ((e.msg = "incorrect length check"), (r.mode = h));
                    break;
                  }
                  ((b = 0), (p = 0));
                }
                r.mode = 29;
              case 29:
                C = 1;
                break e;
              case h:
                C = -3;
                break e;
              case 31:
                return -4;
              default:
                return f;
            }
          return (
            (e.next_out = v),
            (e.avail_out = g),
            (e.next_in = _),
            (e.avail_in = w),
            (r.hold = b),
            (r.bits = p),
            (r.wsize || (x !== e.avail_out && r.mode < h && (r.mode < 27 || 4 !== t))) &&
            k(e, e.output, e.next_out, x - e.avail_out)
              ? ((r.mode = 31), -4)
              : ((y -= e.avail_in),
                (x -= e.avail_out),
                (e.total_in += y),
                (e.total_out += x),
                (r.total += x),
                r.wrap &&
                  x &&
                  (e.adler = r.check =
                    r.flags ? i(r.check, c, x, e.next_out - x) : a(r.check, c, x, e.next_out - x)),
                (e.data_type =
                  r.bits +
                  (r.last ? 64 : 0) +
                  (r.mode === l ? 128 : 0) +
                  (20 === r.mode || 15 === r.mode ? 256 : 0)),
                ((0 === y && 0 === x) || 4 === t) && 0 === C && (C = -5),
                C)
          );
        }),
        (t.inflateEnd = function (e) {
          if (!e || !e.state) return f;
          var t = e.state;
          return (t.window && (t.window = null), (e.state = null), 0);
        }),
        (t.inflateGetHeader = function (e, t) {
          var r;
          return e && e.state && 2 & (r = e.state).wrap ? ((r.head = t), (t.done = !1), 0) : f;
        }),
        (t.inflateSetDictionary = function (e, t) {
          var r,
            n = t.length;
          return e && e.state
            ? 0 !== (r = e.state).wrap && 11 !== r.mode
              ? f
              : 11 === r.mode && a(1, t, n, 0) !== r.check
                ? -3
                : k(e, t, n, n)
                  ? ((r.mode = 31), -4)
                  : ((r.havedict = 1), 0)
            : f;
        }),
        (t.inflateInfo = "pako inflate (from Nodeca project)"));
    },
    9928: (e, t, r) => {
      "use strict";
      (r.r(t), r.d(t, { default: () => i }));
      var n = r(1182);
      function a(e) {
        return "number" == typeof e
          ? e
          : e instanceof Uint8Array
            ? e[0]
            : "string" == typeof e[0]
              ? parseInt(e[0])
              : e[0];
      }
      function i() {
        return {
          mime: "image/tiff",
          encode: (e) => {
            const t = n.encodeImage(e.data, e.width, e.height);
            return Buffer.from(t);
          },
          decode: (e) => {
            const t = n.decode(e),
              r = t[0];
            if (!r) throw new Error("No page found in TIFF");
            if (!r.t256) throw new Error("No image width found in TIFF");
            if (!r.t257) throw new Error("No image height found in TIFF");
            t.forEach((t) => {
              n.decodeImage(e, t);
            });
            const i = n.toRGBA8(r);
            return { data: Buffer.from(i), width: a(r.t256), height: a(r.t257) };
          },
        };
      }
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-computer-use/dist/928.js.map
