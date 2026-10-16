((exports.id = 66),
  (exports.ids = [66]),
  (exports.modules = {
    2682: (e, t, r) => {
      const {
          nv: n,
          NumericValue: s,
          calculateBodyLength: i,
          generateIdempotencyToken: o,
          fromBase64: a,
          _parseEpochTimestamp: c,
        } = r(96851),
        { hasOwn: l, getSmithyContext: u } = r(11255),
        { HttpRequest: d, collectBody: h, SerdeContext: f, RpcProtocol: p } = r(73931),
        { NormalizedSchema: g, deref: m, TypeRegistry: y } = r(93353),
        w = 20,
        S = 21,
        b = 22,
        E = 25,
        v = 26,
        x = 27,
        T = 31;
      function A(e) {
        return "undefined" != typeof Buffer ? Buffer.alloc(e) : new Uint8Array(e);
      }
      const N = Symbol("@smithy/core/cbor::tagSymbol");
      function C(e) {
        return ((e[N] = !0), e);
      }
      const _ = "undefined" != typeof Buffer,
        R = new TextDecoder();
      let I = A(0),
        D = !1,
        k = new DataView(I.buffer, I.byteOffset, I.byteLength),
        O = 0;
      function M(e, t) {
        if (e >= t) throw new Error("unexpected end of (decode) payload.");
        const r = (224 & I[e]) >> 5,
          s = 31 & I[e];
        if (31 === s && 2 <= r && r <= 5)
          return (function (e, t) {
            const r = (224 & I[e]) >> 5,
              n = 31 & I[e];
            if (n === T)
              switch (r) {
                case 3:
                  return (function (e, t) {
                    const r = [];
                    for (const n = (e += 1); e < t;) {
                      if (255 === I[e]) {
                        const t = A(r.length);
                        return (
                          t.set(r, 0),
                          (O = e - n + 2),
                          _ ? t.toString("utf-8", 0, t.length) : R.decode(t)
                        );
                      }
                      const s = (224 & I[e]) >> 5,
                        i = 31 & I[e];
                      if ((3 !== s && H(s), i === T)) throw new Error("nested indefinite string.");
                      const o = U(e, t);
                      e += O;
                      for (let e = 0; e < o.length; ++e) r.push(o[e]);
                    }
                    throw new Error("expected break marker.");
                  })(e, t);
                case 5:
                  return (function (e, t) {
                    e += 1;
                    const r = e,
                      n = {};
                    for (; e < t;) {
                      if (255 === I[e]) return ((O = e - r + 2), n);
                      const s = P(e, t);
                      ((e += O), (n[s] = M(e, t)), (e += O));
                    }
                    throw new Error("expected break marker.");
                  })(e, t);
                case 4:
                  return (function (e, t) {
                    const r = [];
                    for (const n = (e += 1); e < t;) {
                      if (255 === I[e]) return ((O = e - n + 2), r);
                      (r.push(M(e, t)), (e += O));
                    }
                    throw new Error("expected break marker.");
                  })(e, t);
                case 2:
                  return (function (e, t) {
                    const r = [];
                    for (const n = (e += 1); e < t;) {
                      if (255 === I[e]) {
                        const t = A(r.length);
                        return (t.set(r, 0), (O = e - n + 2), t);
                      }
                      const s = (224 & I[e]) >> 5,
                        i = 31 & I[e];
                      if ((2 !== s && H(s), i === T)) throw new Error("nested indefinite string.");
                      const o = U(e, t);
                      e += O;
                      for (let e = 0; e < o.length; ++e) r.push(o[e]);
                    }
                    throw new Error("expected break marker.");
                  })(e, t);
              }
          })(e, t);
        switch (r) {
          case 0:
          case 1:
          case 6: {
            let i, o;
            if (s < 24) ((i = s), (o = 1));
            else
              switch (s) {
                case 24:
                  (t - e < 2 && z(1), (i = I[e + 1]), (o = 2));
                  break;
                case E:
                  (t - e < 3 && z(2), (i = k.getUint16(e + 1)), (o = 3));
                  break;
                case v:
                  (t - e < 5 && z(4), (i = k.getUint32(e + 1)), (o = 5));
                  break;
                case x:
                  t - e < 9 && z(8);
                  {
                    const t = k.getUint32(e + 1);
                    i = t < 2097152 ? 4294967296 * t + k.getUint32(e + 5) : k.getBigUint64(e + 1);
                  }
                  o = 9;
                  break;
                default:
                  V(s);
              }
            if (0 === r) return ((O = o), F(i));
            if (1 === r) {
              let e;
              return ((e = "bigint" == typeof i ? BigInt(-1) - i : -1 - i), (O = o), F(e));
            }
            return (function (e, t, r, s, i) {
              if (2 === r || 3 === r) {
                const n = B(e + i, t);
                let s = BigInt(0);
                const o = e + i + O;
                for (let e = o; e < o + n; ++e) s = (s << BigInt(8)) | BigInt(I[e]);
                return ((O = i + O + n), 3 === r ? -s - BigInt(1) : s);
              }
              if (4 === r) {
                const r = M(e + i, t),
                  [s, o] = r,
                  a = BigInt(o < 0 ? -1 : 1) * BigInt(o),
                  c = String(a),
                  l = o < 0 ? "-" : "";
                let u;
                if ("number" == typeof s && Math.abs(s) <= 2 ** 28) {
                  const e = s,
                    t = "0".repeat(Math.abs(e) + 1) + c;
                  ((u = 0 === e ? t : t.slice(0, t.length + e) + "." + t.slice(e)),
                    (u = u.replace(/^0+/g, "")),
                    "" === u && (u = "0"),
                    "." === u[0] && (u = "0" + u),
                    (u = l + u));
                } else {
                  const e = BigInt(s);
                  if (1 === c.length) u = l + c + "e" + String(e);
                  else {
                    const t = e + BigInt(c.length - 1);
                    u = l + c[0] + "." + c.slice(1) + "e" + String(t);
                  }
                }
                return ((O = i + O), n(u));
              }
              {
                const r = M(e + i, t);
                return ((O = i + O), C({ tag: F(s), value: r }));
              }
            })(e, t, s, i, o);
          }
          case 3:
            return P(e, t);
          case 5:
            return (function (e, t) {
              const r = B(e, t);
              if (r < 25)
                return (function (e, t, r) {
                  const n = O;
                  e += n;
                  const s = e,
                    i = {};
                  for (let n = 0; n < r; ++n) {
                    const r = P(e, t);
                    ((e += O), (i[r] = M(e, t)), (e += O));
                  }
                  return ((O = n + (e - s)), i);
                })(e, t, r);
              return (function (e, t, r) {
                const n = O;
                e += n;
                const s = e,
                  i = Object.create(null);
                for (let n = 0; n < r; ++n) {
                  const r = P(e, t),
                    n = (224 & I[(e += O)]) >> 5;
                  ((i[r] = 3 === n ? P(e, t) : M(e, t)), (e += O));
                }
                return ((O = n + (e - s)), Object.setPrototypeOf(i, Object.prototype), i);
              })(e, t, r);
            })(e, t);
          case 4:
            return (function (e, t) {
              const r = B(e, t),
                n = O;
              e += n;
              const s = e,
                i = Array(r);
              for (let n = 0; n < r; ++n) ((i[n] = M(e, t)), (e += O));
              return ((O = n + (e - s)), i);
            })(e, t);
          case 2:
            return U(e, t);
          default:
            return (function (e, t) {
              const r = 31 & I[e];
              switch (r) {
                case S:
                case w:
                  return ((O = 1), r === S);
                case b:
                case 23:
                  return ((O = 1), null);
                case E:
                  if (t - e < 3) throw new Error("incomplete float16 at end of buf.");
                  return (
                    (O = 3),
                    (function (e, t) {
                      const r = (124 & e) >> 2,
                        n = ((3 & e) << 8) | t,
                        s = e >> 7 ? -1 : 1;
                      if (0 === r) return 0 === n ? 0 : s * (Math.pow(2, -14) * (n / 1024));
                      if (31 === r) return 0 === n ? s * (1 / 0) : NaN;
                      return s * (Math.pow(2, r - 15) * (1 + n / 1024));
                    })(I[e + 1], I[e + 2])
                  );
                case v:
                  if (t - e < 5) throw new Error("incomplete float32 at end of buf.");
                  return ((O = 5), k.getFloat32(e + 1));
                case x:
                  if (t - e < 9) throw new Error("incomplete float64 at end of buf.");
                  return ((O = 9), k.getFloat64(e + 1));
                default:
                  V(r);
              }
            })(e, t);
        }
      }
      function P(e, t) {
        const r = B(e, t),
          n = O;
        return (
          t - (e += n) < r && z(r),
          (O = n + r),
          r < 24
            ? (function (e, t) {
                let r = t;
                for (let n = 0; n < t; ++n) r = (31 * r + I[e + n]) | 0;
                const n = (r >>> 0) & 2047,
                  s = $[n];
                if (void 0 !== s && s.length === t) {
                  let r = !0;
                  for (let n = 0; n < t; ++n)
                    if (s.charCodeAt(n) !== I[e + n]) {
                      r = !1;
                      break;
                    }
                  if (r) return ((j[n] = L), s);
                }
                const i = D ? I.toString("utf-8", e, e + t) : R.decode(I.subarray(e, e + t));
                j[n] !== L && (($[n] = i), (j[n] = L));
                return i;
              })(e, r)
            : D
              ? I.toString("utf-8", e, e + r)
              : R.decode(I.subarray(e, e + r))
        );
      }
      const $ = new Array(2048),
        j = new Uint16Array(2048);
      let L = 0;
      function U(e, t) {
        const r = B(e, t),
          n = O;
        t - (e += n) < r && z(r);
        const s = I.subarray(e, e + r);
        return ((O = n + r), s);
      }
      function B(e, t) {
        const r = 31 & I[e];
        if (r < 24) return ((O = 1), r);
        switch (r) {
          case 24:
            return (t - e < 2 && z(1), (O = 2), I[e + 1]);
          case E:
            return (t - e < 3 && z(2), (O = 3), k.getUint16(e + 1));
          case v:
            return (t - e < 5 && z(4), (O = 5), k.getUint32(e + 1));
          case x:
            return (
              t - e < 9 && z(8),
              (O = 9),
              (function (e) {
                const t = Number(e);
                (t < Number.MIN_SAFE_INTEGER || Number.MAX_SAFE_INTEGER < t) &&
                  console.warn(
                    new Error(
                      `@smithy/core/cbor - truncating BigInt(${e}) to ${t} with loss of precision.`,
                    ),
                  );
                return t;
              })(k.getBigUint64(e + 1))
            );
          default:
            V(r);
        }
      }
      function F(e) {
        if ("number" == typeof e) return e;
        const t = Number(e);
        return Number.MIN_SAFE_INTEGER <= t && t <= Number.MAX_SAFE_INTEGER ? t : e;
      }
      function z(e) {
        throw new Error(`length ${e} greater than remaining buf len.`);
      }
      function V(e) {
        throw new Error(`unexpected minor value ${e}.`);
      }
      function H(e) {
        throw new Error(`unexpected major type ${e} in indefinite string.`);
      }
      const q = "undefined" != typeof Buffer,
        W = new Map();
      let G = 0,
        Q = !1;
      let X = A(2048),
        K = new DataView(X.buffer, X.byteOffset, X.byteLength),
        J = 0;
      function Y() {
        const e = A(J);
        return (e.set(X.subarray(0, J), 0), (J = 0), e);
      }
      function Z(e) {
        const t = X;
        ((X = A(e)),
          t && (t.copy ? t.copy(X, 0, 0, t.byteLength) : X.set(t, 0)),
          (K = new DataView(X.buffer, X.byteOffset, X.byteLength)));
      }
      function ee(e) {
        const t = W.get(e);
        if (void 0 !== t) return (X.set(t.bytes, J), (J += t.bytes.length), void (t.epoch = G));
        const r = J;
        (ne(3, Buffer.byteLength(e)), (J += X.write(e, J)));
        const n = Uint8Array.prototype.slice.call(X, r, J);
        if (W.size >= 2048) {
          if (Q) return;
          let e = 0;
          for (const [t, r] of W) {
            if (e >= 1024) break;
            r.epoch !== G && (W.delete(t), e++);
          }
          if (0 === e) return void (Q = !0);
        }
        W.size < 2048 && W.set(e, { epoch: G, bytes: n });
      }
      function te(e) {
        X.byteLength - J < e &&
          Z(J < 16e6 ? Math.max(4 * X.byteLength, X.byteLength + e) : X.byteLength + e + 16e6);
      }
      function re(e, t) {
        t < 24
          ? (X[J++] = (e << 5) | t)
          : t < 256
            ? ((X[J++] = (e << 5) | 24), (X[J++] = t))
            : t < 65536
              ? ((X[J++] = (e << 5) | E), K.setUint16(J, t), (J += 2))
              : t < 4294967296
                ? ((X[J++] = (e << 5) | v), K.setUint32(J, t), (J += 4))
                : ((X[J++] = (e << 5) | x),
                  K.setBigUint64(J, "bigint" == typeof t ? t : BigInt(t)),
                  (J += 8));
      }
      function ne(e, t) {
        if (t < 24) X[J++] = (e << 5) | t;
        else if (t < 256) ((X[J++] = (e << 5) | 24), (X[J++] = t));
        else if (t < 65536) ((X[J++] = (e << 5) | E), (X[J++] = t >> 8), (X[J++] = 255 & t));
        else if (t < 4294967296) ((X[J++] = (e << 5) | v), K.setUint32(J, t), (J += 4));
        else {
          X[J++] = (e << 5) | x;
          const r = (t / 4294967296) | 0,
            n = (t - 4294967296 * r) | 0;
          (K.setUint32(J, r), K.setUint32(J + 4, n), (J += 8));
        }
      }
      const se = {
          deserialize: (e) => (
            (L = (L + 1) & 65535),
            (I = e),
            (D = _ && I instanceof Buffer),
            (k = new DataView(I.buffer, I.byteOffset, I.byteLength)),
            M(0, e.length)
          ),
          serialize(e) {
            ((G = (G + 1) & 65535), (Q = !1));
            try {
              return (
                (function (e) {
                  const t = [e];
                  for (; t.length;) {
                    const e = t.pop();
                    if ("string" == typeof e) {
                      const t = e.length;
                      if (q)
                        (te(3 * t + 9),
                          t > 23 ? (re(3, Buffer.byteLength(e)), (J += X.write(e, J))) : ee(e));
                      else {
                        te(3 * t + 9);
                        const r = J,
                          n = new TextEncoder().encodeInto(e, X.subarray(J + 9)).written;
                        let s;
                        ((s = n < 24 ? 1 : n < 256 ? 2 : n < 65536 ? 3 : n < 4294967296 ? 5 : 9),
                          s < 9 && X.copyWithin(r + s, r + 9, r + 9 + n),
                          (J = r),
                          ne(3, n),
                          (J += n));
                      }
                      continue;
                    }
                    if ((X.byteLength - J < 9 && te(64), "number" != typeof e)) {
                      if ("bigint" == typeof e) {
                        const t = e >= 0,
                          r = t ? 0 : 1,
                          n = t ? e : -e - BigInt(1);
                        if (n < BigInt("18446744073709551616")) {
                          const e = Number(n);
                          e < 4294967296
                            ? ne(r, e)
                            : ((X[J++] = (r << 5) | x), K.setBigUint64(J, n), (J += 8));
                        } else {
                          const e = n.toString(2),
                            r = new Uint8Array(Math.ceil(e.length / 8));
                          let s = n,
                            i = 0;
                          for (; r.byteLength - ++i >= 0;)
                            ((r[r.byteLength - i] = Number(s & BigInt(255))), (s >>= BigInt(8)));
                          (te(2 * r.byteLength + 16),
                            (X[J++] = t ? 194 : 195),
                            re(2, r.byteLength),
                            X.set(r, J),
                            (J += r.byteLength));
                        }
                        continue;
                      }
                      if (null !== e)
                        if ("boolean" != typeof e) {
                          if (void 0 === e)
                            throw new Error(
                              "@smithy/core/cbor: client may not serialize undefined value.",
                            );
                          if (Array.isArray(e)) {
                            (ne(4, e.length), te(9 * e.length + 64));
                            for (let r = e.length - 1; r >= 0; --r) t.push(e[r]);
                          } else {
                            if ("number" != typeof e.byteLength) {
                              if ("object" == typeof e) {
                                if (e instanceof s) {
                                  let r = e.string,
                                    n = BigInt(0);
                                  const s = r.search(/[eE]/);
                                  -1 !== s && ((n = BigInt(r.slice(s + 1))), (r = r.slice(0, s)));
                                  const i = r.indexOf("."),
                                    o = -1 === i ? 0 : r.length - i - 1,
                                    a = n - BigInt(o),
                                    c = BigInt(r.replace(".", ""));
                                  ((X[J++] = 196),
                                    ne(4, 2),
                                    t.push(c),
                                    t.push(
                                      a >= -0x20000000000000n && a <= 0x1fffffffffffffn
                                        ? Number(a)
                                        : a,
                                    ));
                                  continue;
                                }
                                if (e[N]) {
                                  if ("tag" in e && "value" in e) {
                                    (t.push(e.value), re(6, e.tag));
                                    continue;
                                  }
                                  throw new Error(
                                    "tag encountered with missing fields, need 'tag' and 'value', found: " +
                                      JSON.stringify(e),
                                  );
                                }
                                const r = Object.keys(e),
                                  n = r.length;
                                ne(5, n);
                                for (let s = n - 1; s >= 0; --s) (t.push(e[r[s]]), t.push(r[s]));
                                continue;
                              }
                              throw new Error(
                                `data type ${e?.constructor?.name ?? typeof e} not compatible for encoding.`,
                              );
                            }
                            (te(2 * e.length + 9),
                              ne(2, e.length),
                              X.set(e, J),
                              (J += e.byteLength));
                          }
                        } else X[J++] = 224 | (e ? S : w);
                      else X[J++] = 246;
                    } else {
                      if (Number.isInteger(e) && e >= -9007199254740992 && e <= 9007199254740991) {
                        const t = e >= 0,
                          r = t ? 0 : 1,
                          n = t ? e : -e - 1;
                        if (n < 24) X[J++] = (r << 5) | n;
                        else if (n < 256) ((X[J++] = (r << 5) | 24), (X[J++] = n));
                        else if (n < 65536)
                          ((X[J++] = (r << 5) | E), (X[J++] = n >> 8), (X[J++] = 255 & n));
                        else if (n < 4294967296)
                          ((X[J++] = (r << 5) | v), K.setUint32(J, n), (J += 4));
                        else {
                          X[J++] = (r << 5) | x;
                          const e = (n / 4294967296) | 0,
                            t = (n - 4294967296 * e) | 0;
                          (K.setUint32(J, e), K.setUint32(J + 4, t), (J += 8));
                        }
                        continue;
                      }
                      ((X[J++] = 251), K.setFloat64(J, e), (J += 8));
                    }
                  }
                })(e),
                Y()
              );
            } catch (e) {
              throw (Y(), e);
            }
          },
          resizeEncodingBuffer(e) {
            Z(e);
          },
        },
        ie = (e, t) =>
          h(e, t).then(async (e) => {
            if (e.length)
              try {
                return se.deserialize(e);
              } catch (r) {
                throw (
                  Object.defineProperty(r, "$responseBodyText", { value: t.utf8Encoder(e) }), r
                );
              }
            return {};
          }),
        oe = (e) => C({ tag: 1, value: e.getTime() / 1e3 }),
        ae = (e, t) => {
          const r = (e) => {
            let t = e;
            return (
              "number" == typeof t && (t = t.toString()),
              t.indexOf(",") >= 0 && (t = t.split(",")[0]),
              t.indexOf(":") >= 0 && (t = t.split(":")[0]),
              t.indexOf("#") >= 0 && (t = t.split("#")[1]),
              t
            );
          };
          if (void 0 !== t.__type) return r(t.__type);
          let n;
          for (const e in t)
            if (l(t, e) && "code" === e.toLowerCase()) {
              n = e;
              break;
            }
          return n && void 0 !== t[n] ? r(t[n]) : void 0;
        };
      class ce extends f {
        write(e, t) {
          ye = 0;
          xe(g.of(e), t, void 0, this.serdeContext);
        }
        flush() {
          const e = ge.subarray(0, ye);
          return (
            (ye = 0), (ge = ve(pe)), (me = new DataView(ge.buffer, ge.byteOffset, ge.byteLength)), e
          );
        }
      }
      const le = Symbol.for("@smithy/cbor-struct-cache");
      function ue(e) {
        const t = e.getSchema(),
          r = t[le];
        if (r) return r;
        const n = [],
          s = [];
        for (const [t, r] of e.structIterator()) (n.push(t), s.push(r));
        const i = new Array(n.length);
        for (let e = 0; e < n.length; ++e) i[e] = de(n[e]);
        const o = { memberNames: n, memberSchemas: s, encodedKeys: i };
        return ((t[le] = o), o);
      }
      function de(e) {
        let t;
        t = he ? Buffer.from(e, "utf-8") : new TextEncoder().encode(e);
        const r = t.length;
        let n;
        n = r < 24 ? 1 : r < 256 ? 2 : 3;
        const s = new Uint8Array(n + r);
        return (
          1 === n
            ? (s[0] = 96 | r)
            : 2 === n
              ? ((s[0] = 120), (s[1] = r))
              : ((s[0] = 121), (s[1] = r >> 8), (s[2] = 255 & r)),
          s.set(t, n),
          s
        );
      }
      const he = "undefined" != typeof Buffer,
        fe = new TextEncoder(),
        pe = 2048;
      let ge = he ? Buffer.allocUnsafe(pe) : new Uint8Array(pe),
        me = new DataView(ge.buffer, ge.byteOffset, ge.byteLength),
        ye = 0;
      const we = 2048,
        Se = new Map();
      let be = 0,
        Ee = !1;
      function ve(e) {
        return he ? Buffer.allocUnsafe(e) : new Uint8Array(e);
      }
      function xe(e, t, r, n) {
        if (null == t)
          return void 0 === t && e.isIdempotencyToken()
            ? void Ie(o())
            : (Ce(1), void (ge[ye++] = 246));
        if (e.isUnitSchema()) return (Ce(1), void _e(5, 0));
        if ("object" == typeof t) {
          if (e.isBlobSchema() && t instanceof Uint8Array) return void Pe(t);
          if (e.isTimestampSchema() && t instanceof Date) return void Le(t);
          if (e.isStructSchema())
            return void (function (e, t, r) {
              if (e.isUnionSchema()) {
                let n = !1;
                for (const [s, i] of e.structIterator()) {
                  const o = t[s];
                  if (null != o) {
                    (Ce(9), _e(5, 1), Ie(s), xe(i, o, e, r), (n = !0));
                    break;
                  }
                }
                if (!n) {
                  const { $unknown: e } = t;
                  Array.isArray(e) ? (Ce(9), _e(5, 1), Ie(e[0]), Ne(e[1])) : (Ce(9), _e(5, 0));
                }
                return;
              }
              const n = ue(e),
                { memberNames: s, memberSchemas: i, encodedKeys: o } = n,
                a = s.length;
              let c;
              c = a < 24 ? 1 : a < 256 ? 2 : 3;
              Ce(c);
              const u = ye;
              ye += c;
              let d = 0;
              for (let n = 0; n < a; ++n) {
                const a = t[s[n]];
                if (null == a && !i[n].isIdempotencyToken()) continue;
                const c = o[n];
                (Ce(c.length), ge.set(c, ye), (ye += c.length), xe(i[n], a, e, r), ++d);
              }
              if ("string" == typeof t.__type)
                for (const e in t) l(t, e) && (s.includes(e) || (Ie(e), Ne(t[e]), ++d));
              1 === c
                ? (ge[u] = 160 | d)
                : 2 === c
                  ? ((ge[u] = 184), (ge[u + 1] = d))
                  : ((ge[u] = 185), (ge[u + 1] = d >> 8), (ge[u + 2] = 255 & d));
            })(e, t, n);
          if (Array.isArray(t) && (e.isListSchema() || e.isDocumentSchema()))
            return void Te(e, t, e.isDocumentSchema(), n);
          if (e.isMapSchema()) return void Ae(e, t, !1, n);
          if (t instanceof Date) return void Le(t);
          if (t instanceof Uint8Array) return void Pe(t);
          if (t instanceof s) return void je(t);
          if (t[N]) {
            const e = t;
            return void $e(e.tag, e.value);
          }
          return e.isDocumentSchema()
            ? void (Array.isArray(t) ? Te(e, t, !0, n) : Ae(e, t, !0, n))
            : e.isBigDecimalSchema()
              ? void Ne(t)
              : void Ae(e, t, !0, n);
        }
        if ("string" != typeof t)
          return "number" == typeof t
            ? (Ce(9),
              void (Number.isInteger(t) && t >= -9007199254740992 && t <= 9007199254740991
                ? Oe(t)
                : ke(t)))
            : "boolean" == typeof t
              ? (Ce(1), void (ge[ye++] = 224 | (t ? S : w)))
              : void ("bigint" != typeof t ? Ie(String(t)) : Me(t));
        if (e.isBlobSchema()) {
          return void Pe((n?.base64Decoder ?? a)(t));
        }
        Ie(t);
      }
      function Te(e, t, r, n) {
        const s = !!e.getMergedTraits().sparse,
          i = e.getValueSchema();
        if (r || s) {
          const e = [];
          for (let n = 0; n < t.length; ++n) {
            const i = t[n];
            r ? void 0 !== i && e.push(i) : (null != i || s) && e.push(i);
          }
          (Ce(9), _e(4, e.length));
          for (let t = 0; t < e.length; ++t) xe(i, e[t], 0, n);
        } else {
          let e = 0;
          for (let r = 0; r < t.length; ++r) null != t[r] && ++e;
          (Ce(9), _e(4, e));
          for (let e = 0; e < t.length; ++e) null != t[e] && xe(i, t[e], 0, n);
        }
      }
      function Ae(e, t, r, n) {
        const s = !!e.getMergedTraits().sparse,
          i = e.getValueSchema(),
          o = [];
        for (const e in t) {
          if (!l(t, e)) continue;
          const n = t[e];
          (r ? void 0 !== n : null != n || s) && o.push(e);
        }
        (Ce(9), _e(5, o.length));
        for (let e = 0; e < o.length; ++e) {
          const r = o[e];
          (Ie(r), xe(i, t[r], 0, n));
        }
      }
      function Ne(e) {
        if (null == e) return (Ce(1), void (ge[ye++] = 246));
        if ("string" != typeof e) {
          if ("number" == typeof e)
            return (
              Ce(9),
              void (Number.isInteger(e) && e >= -9007199254740992 && e <= 9007199254740991
                ? Oe(e)
                : ke(e))
            );
          if ("boolean" == typeof e) return (Ce(1), void (ge[ye++] = 224 | (e ? S : w)));
          if ("bigint" != typeof e)
            if (e instanceof Uint8Array) Pe(e);
            else if (e instanceof Date) Le(e);
            else if (e instanceof s) je(e);
            else {
              if (e[N]) {
                const t = e;
                return void $e(t.tag, t.value);
              }
              if (Array.isArray(e)) {
                (Ce(9), _e(4, e.length));
                for (let t = 0; t < e.length; ++t) Ne(e[t]);
              } else {
                if ("object" == typeof e) {
                  const t = Object.keys(e);
                  (Ce(9), _e(5, t.length));
                  for (let r = 0; r < t.length; ++r) (Ie(t[r]), Ne(e[t[r]]));
                  return;
                }
                Ie(String(e));
              }
            }
          else Me(e);
        } else Ie(e);
      }
      function Ce(e) {
        if (ye + e > ge.length) {
          let t = 2 * ge.length;
          for (; t < ye + e;) t *= 2;
          const r = ve(t);
          (r.set(ge.subarray(0, ye)),
            (ge = r),
            (me = new DataView(r.buffer, r.byteOffset, r.byteLength)));
        }
      }
      function _e(e, t) {
        if (t < 24) ge[ye++] = (e << 5) | t;
        else if (t < 256) ((ge[ye++] = (e << 5) | 24), (ge[ye++] = t));
        else if (t < 65536) ((ge[ye++] = (e << 5) | E), (ge[ye++] = t >> 8), (ge[ye++] = 255 & t));
        else if (t < 4294967296) ((ge[ye++] = (e << 5) | v), me.setUint32(ye, t), (ye += 4));
        else {
          ge[ye++] = (e << 5) | x;
          const r = (t / 4294967296) | 0,
            n = (t - 4294967296 * r) | 0;
          (me.setUint32(ye, r), me.setUint32(ye + 4, n), (ye += 8));
        }
      }
      function Re(e, t) {
        const r = Number(t);
        r < 4294967296 ? _e(e, r) : ((ge[ye++] = (e << 5) | x), me.setBigUint64(ye, t), (ye += 8));
      }
      function Ie(e) {
        const t = e.length;
        if (t <= 23) {
          const r = Se.get(e);
          if (r)
            return (
              Ce(r.bytes.length), ge.set(r.bytes, ye), (ye += r.bytes.length), void (r.epoch = be)
            );
          const n = ye;
          De(e, t);
          const s = ye,
            i = Uint8Array.prototype.slice.call(ge, n, s);
          if (Se.size >= we) {
            if (Ee) return;
            let e = 0;
            for (const [t, r] of Se) {
              if (e >= 1024) break;
              r.epoch !== be && (Se.delete(t), ++e);
            }
            if (0 === e) return void (Ee = !0);
          }
          return void (Se.size < we && Se.set(e, { epoch: be, bytes: i }));
        }
        De(e, t);
      }
      function De(e, t) {
        if (he) {
          Ce(3 * t + 9);
          (_e(3, Buffer.byteLength(e)), (ye += ge.write(e, ye)));
        } else {
          Ce(3 * t + 9);
          const r = ye,
            n = fe.encodeInto(e, ge.subarray(r + 9)).written;
          let s;
          ((s = n < 24 ? 1 : n < 256 ? 2 : n < 65536 ? 3 : n < 4294967296 ? 5 : 9),
            s < 9 && ge.copyWithin(r + s, r + 9, r + 9 + n),
            (ye = r),
            _e(3, n),
            (ye += n));
        }
      }
      function ke(e) {
        (Ce(9), (ge[ye++] = 251), me.setFloat64(ye, e), (ye += 8));
      }
      function Oe(e) {
        Ce(9);
        const t = e >= 0;
        _e(t ? 0 : 1, t ? e : -e - 1);
      }
      function Me(e) {
        const t = e >= 0,
          r = t ? 0 : 1,
          n = t ? e : -e - BigInt(1);
        if (n < BigInt("18446744073709551616")) (Ce(9), Re(r, n));
        else {
          const e = n.toString(2),
            r = Math.ceil(e.length / 8),
            s = new Uint8Array(r);
          let i = n;
          for (let e = r - 1; e >= 0; --e) ((s[e] = Number(i & BigInt(255))), (i >>= BigInt(8)));
          (Ce(r + 16), (ge[ye++] = t ? 194 : 195), _e(2, r), ge.set(s, ye), (ye += r));
        }
      }
      function Pe(e) {
        (Ce(e.length + 9), _e(2, e.length), ge.set(e, ye), (ye += e.length));
      }
      function $e(e, t) {
        (Ce(9), "bigint" == typeof e ? Re(6, e) : _e(6, e), Ne(t));
      }
      function je(e) {
        let t = e.string,
          r = BigInt(0);
        const n = t.search(/[eE]/);
        -1 !== n && ((r = BigInt(t.slice(n + 1))), (t = t.slice(0, n)));
        const s = t.indexOf("."),
          i = -1 === s ? 0 : t.length - s - 1,
          o = r - BigInt(i),
          a = BigInt(t.replace(".", ""));
        (Ce(9),
          (ge[ye++] = 196),
          _e(4, 2),
          Ce(9),
          o >= -0x20000000000000n && o <= 0x1fffffffffffffn ? Oe(Number(o)) : Me(o),
          Me(a));
      }
      function Le(e) {
        (Ce(18), _e(6, 1));
        const t = e.getTime() / 1e3;
        Number.isInteger(t) ? Oe(t) : ke(t);
      }
      class Ue extends f {
        read(e, t) {
          return (
            (ze = t),
            (Ve = Be && t instanceof Buffer),
            (He = new DataView(t.buffer, t.byteOffset, t.byteLength)),
            (qe = 0),
            (We = t.length),
            (Ke = (Ke + 1) & 65535),
            Je(g.of(e))
          );
        }
        readValue(e, t) {
          return ot(g.of(e), t);
        }
      }
      const Be = "undefined" != typeof Buffer,
        Fe = new TextDecoder();
      let ze = new Uint8Array(0),
        Ve = !1,
        He = new DataView(new ArrayBuffer(0)),
        qe = 0,
        We = 0;
      const Ge = 2048,
        Qe = new Array(Ge),
        Xe = new Uint16Array(Ge);
      let Ke = 0;
      function Je(e) {
        if (qe >= We) throw new Error("unexpected end of CBOR payload.");
        const t = (224 & ze[qe]) >> 5;
        if ((31 & ze[qe]) === T && t >= 2 && t <= 5)
          return (function (e, t) {
            switch (t) {
              case 3:
                return (function () {
                  qe += 1;
                  const e = [];
                  let t = 0;
                  for (; qe < We;) {
                    if (255 === ze[qe]) {
                      qe += 1;
                      const r = new Uint8Array(t);
                      let n = 0;
                      for (let t = 0; t < e.length; ++t) (r.set(e[t], n), (n += e[t].length));
                      return Be
                        ? Buffer.from(r.buffer, r.byteOffset, r.byteLength).toString("utf-8")
                        : Fe.decode(r);
                    }
                    const r = rt();
                    (e.push(r), (t += r.length));
                  }
                  throw new Error("expected break marker.");
                })();
              case 2:
                return (function () {
                  qe += 1;
                  const e = [];
                  let t = 0;
                  for (; qe < We;) {
                    if (255 === ze[qe]) {
                      qe += 1;
                      const r = new Uint8Array(t);
                      let n = 0;
                      for (let t = 0; t < e.length; ++t) (r.set(e[t], n), (n += e[t].length));
                      return r;
                    }
                    const r = rt();
                    (e.push(r), (t += r.length));
                  }
                  throw new Error("expected break marker.");
                })();
              case 4:
                return (function (e) {
                  qe += 1;
                  const t = e.isListSchema() ? e.getValueSchema() : e,
                    r = [];
                  for (; qe < We;) {
                    if (255 === ze[qe]) return ((qe += 1), r);
                    r.push(Je(t));
                  }
                  throw new Error("expected break marker.");
                })(e);
              case 5:
                return (function (e) {
                  if (((qe += 1), e.isStructSchema())) {
                    const t = ue(e),
                      { memberSchemas: r, encodedKeys: n, memberNames: s } = t,
                      i = n.length,
                      o = e.isUnionSchema(),
                      a = {};
                    let c,
                      u,
                      d = 0,
                      h = 0;
                    for (; qe < We;) {
                      if (255 === ze[qe]) {
                        if (((qe += 1), o)) {
                          let e = !0;
                          for (const t in a)
                            if (l(a, t)) {
                              e = !1;
                              break;
                            }
                          e && 1 === d && (a.$unknown = [c, u]);
                        }
                        return a;
                      }
                      const e = Ye(n, i, h);
                      if (e >= 0) {
                        ((h = e + 1), h >= i && (h = 0));
                        const t = Je(r[e]);
                        null != t && (a[s[e]] = t);
                      } else {
                        const e = nt(),
                          t = Je(g.of(15));
                        "__type" !== e && ((c = e), (u = t), ++d);
                      }
                    }
                    throw new Error("expected break marker.");
                  }
                  const t = e.isMapSchema() ? e.getValueSchema() : e,
                    r = {};
                  for (; qe < We;) {
                    if (255 === ze[qe]) return ((qe += 1), r);
                    r[nt()] = Je(t);
                  }
                  throw new Error("expected break marker.");
                })(e);
              default:
                throw new Error(`unexpected indefinite length for major ${t}.`);
            }
          })(e, t);
        switch (t) {
          case 0:
            return st(et());
          case 1:
            return (function () {
              const e = et();
              if ("bigint" == typeof e) return BigInt(-1) - e;
              return -1 - e;
            })();
          case 2:
            return rt();
          case 3:
            return nt();
          case 4:
            return (function (e) {
              const t = tt(),
                r = e.isListSchema() ? e.getValueSchema() : e,
                n = Array(t);
              for (let e = 0; e < t; ++e) n[e] = Je(r);
              return n;
            })(e);
          case 5:
            return (function (e) {
              const t = tt();
              if (e.isStructSchema()) {
                return (function (e, t, r) {
                  const n = e.isUnionSchema(),
                    s = ue(e),
                    { memberSchemas: i, encodedKeys: o, memberNames: a } = s,
                    c = o.length,
                    u = {};
                  let d,
                    h,
                    f = 0,
                    p = !1,
                    m = 0;
                  for (let e = 0; e < t; ++e) {
                    const e = Ye(o, c, m);
                    if (e >= 0) {
                      ((m = e + 1), m >= c && (m = 0));
                      const t = Je(i[e]);
                      null != t && (u[a[e]] = t);
                    } else {
                      const e = nt(),
                        t = Je(g.of(15));
                      "__type" === e && "string" == typeof t ? (p = !0) : ((d = e), (h = t), ++f);
                    }
                  }
                  if (n) {
                    let e = !0;
                    for (const t in u)
                      if (l(u, t)) {
                        e = !1;
                        break;
                      }
                    e && 1 === f && (u.$unknown = [d, h]);
                  } else if (p) {
                    qe = r;
                    const e = g.of(15);
                    for (let r = 0; r < t; ++r) {
                      const t = nt(),
                        r = Je(e);
                      t in u || (u[t] = r);
                    }
                  }
                  return u;
                })(e, t, qe);
              }
              const r = e.isMapSchema() ? e.getValueSchema() : e,
                n = {};
              for (let e = 0; e < t; ++e) {
                n[nt()] = Je(r);
              }
              return n;
            })(e);
          case 6:
            return (function () {
              const e = et(),
                t = "bigint" == typeof e ? Number(e) : e;
              if (1 === t) {
                const e = Je(g.of(15));
                return c(e);
              }
              if (2 === t || 3 === t) {
                const e = rt();
                let r = BigInt(0);
                for (let t = 0; t < e.length; ++t) r = (r << BigInt(8)) | BigInt(e[t]);
                return 3 === t ? -r - BigInt(1) : r;
              }
              if (4 === t) {
                const e = Je(g.of(15)),
                  [t, r] = e,
                  s = BigInt(r < 0 ? -1 : 1) * BigInt(r),
                  i = String(s),
                  o = r < 0 ? "-" : "";
                let a;
                if ("number" == typeof t && Math.abs(t) <= 2 ** 28) {
                  const e = t,
                    r = "0".repeat(Math.abs(e) + 1) + i;
                  ((a = 0 === e ? r : r.slice(0, r.length + e) + "." + r.slice(e)),
                    (a = a.replace(/^0+/g, "")),
                    "" === a && (a = "0"),
                    "." === a[0] && (a = "0" + a),
                    (a = o + a));
                } else {
                  const e = BigInt(t);
                  if (1 === i.length) a = o + i + "e" + String(e);
                  else {
                    const t = e + BigInt(i.length - 1);
                    a = o + i[0] + "." + i.slice(1) + "e" + String(t);
                  }
                }
                return n(a);
              }
              const r = Je(g.of(15));
              return { tag: st(e), value: r };
            })();
          case 7:
            return (function () {
              const e = qe,
                t = 31 & ze[e];
              switch (t) {
                case S:
                  return ((qe = e + 1), !0);
                case w:
                  return ((qe = e + 1), !1);
                case b:
                case 23:
                  return ((qe = e + 1), null);
                case E:
                  return (
                    We - e < 3 && it(2),
                    (qe = e + 3),
                    (function (e, t) {
                      const r = (124 & e) >> 2,
                        n = ((3 & e) << 8) | t,
                        s = e >> 7 ? -1 : 1;
                      if (0 === r) return 0 === n ? 0 : s * (Math.pow(2, -14) * (n / 1024));
                      if (31 === r) return 0 === n ? s * (1 / 0) : NaN;
                      return s * (Math.pow(2, r - 15) * (1 + n / 1024));
                    })(ze[e + 1], ze[e + 2])
                  );
                case v:
                  return (We - e < 5 && it(4), (qe = e + 5), He.getFloat32(e + 1));
                case x:
                  return (We - e < 9 && it(8), (qe = e + 9), He.getFloat64(e + 1));
                default:
                  throw new Error(`unexpected minor value ${t} for major 7.`);
              }
            })();
          default:
            throw new Error(`unexpected CBOR major type ${t}.`);
        }
      }
      function Ye(e, t, r) {
        const n = e[r];
        if (qe + n.length <= We && Ze(qe, n)) return ((qe += n.length), r);
        for (let n = 0; n < t; ++n) {
          if (n === r) continue;
          const t = e[n];
          if (qe + t.length <= We && Ze(qe, t)) return ((qe += t.length), n);
        }
        return -1;
      }
      function Ze(e, t) {
        const r = t.length;
        if (ze[e] !== t[0]) return !1;
        for (let n = 1; n < r; ++n) if (ze[e + n] !== t[n]) return !1;
        return !0;
      }
      function et() {
        const e = 31 & ze[qe];
        if (e < 24) return ((qe += 1), e);
        switch (e) {
          case 24:
            return (We - qe < 2 && it(1), (qe += 2), ze[qe - 1]);
          case E:
            return (We - qe < 3 && it(2), (qe += 3), He.getUint16(qe - 2));
          case v:
            return (We - qe < 5 && it(4), (qe += 5), He.getUint32(qe - 4));
          case x: {
            (We - qe < 9 && it(8), (qe += 9));
            const e = He.getUint32(qe - 8);
            return e < 2097152 ? 4294967296 * e + He.getUint32(qe - 4) : He.getBigUint64(qe - 8);
          }
          default:
            throw new Error(`unexpected minor value ${e}.`);
        }
      }
      function tt() {
        const e = et();
        return "bigint" == typeof e ? Number(e) : e;
      }
      function rt() {
        const e = tt();
        We - qe < e && it(e);
        const t = qe;
        return ((qe += e), ze.subarray(t, t + e));
      }
      function nt() {
        const e = tt();
        We - qe < e && it(e);
        const t = qe;
        return (
          (qe += e),
          e < 24
            ? (function (e, t) {
                let r = t;
                for (let n = 0; n < t; ++n) r = (31 * r + ze[e + n]) | 0;
                const n = (r >>> 0) & (Ge - 1),
                  s = Qe[n];
                if (void 0 !== s && s.length === t) {
                  let r = !0;
                  for (let n = 0; n < t; ++n)
                    if (s.charCodeAt(n) !== ze[e + n]) {
                      r = !1;
                      break;
                    }
                  if (r) return ((Xe[n] = Ke), s);
                }
                const i = Ve ? ze.toString("utf-8", e, e + t) : Fe.decode(ze.subarray(e, e + t));
                Xe[n] !== Ke && ((Qe[n] = i), (Xe[n] = Ke));
                return i;
              })(t, e)
            : Ve
              ? ze.toString("utf-8", t, t + e)
              : Fe.decode(ze.subarray(t, t + e))
        );
      }
      function st(e) {
        if ("number" == typeof e) return e;
        const t = Number(e);
        return Number.MIN_SAFE_INTEGER <= t && t <= Number.MAX_SAFE_INTEGER ? t : e;
      }
      function it(e) {
        throw new Error(`CBOR: length ${e} greater than remaining buffer length.`);
      }
      function ot(e, t) {
        if (e.isTimestampSchema()) {
          if ("number" == typeof t) return c(t);
          if ("object" == typeof t && null !== t && 1 === t.tag && "value" in t) return c(t.value);
        }
        if (e.isBlobSchema()) return t;
        if (
          void 0 === t ||
          "boolean" == typeof t ||
          "number" == typeof t ||
          "string" == typeof t ||
          "bigint" == typeof t ||
          "symbol" == typeof t
        )
          return t;
        if ("object" != typeof t || null === t) return t;
        if ("byteLength" in t) return t;
        if (t instanceof Date) return t;
        if (t instanceof s) return t;
        if (e.isDocumentSchema()) return t;
        if (e.isListSchema()) {
          const r = e.getValueSchema(),
            n = [];
          for (const e of t) n.push(ot(r, e));
          return n;
        }
        const r = {};
        if (e.isMapSchema()) {
          const n = e.getValueSchema();
          for (const e in t) l(t, e) && (r[e] = ot(n, t[e]));
        } else if (e.isStructSchema()) {
          const n = e.isUnionSchema();
          let s;
          if (n) {
            s = new Set();
            for (const e in t) l(t, e) && "__type" !== e && s.add(e);
          }
          for (const [i, o] of e.structIterator())
            (n && s.delete(i), null != t[i] && (r[i] = ot(o, t[i])));
          if (n && 1 === s?.size) {
            let e = !0;
            for (const t in r)
              if (l(r, t)) {
                e = !1;
                break;
              }
            if (e) {
              const e = s.values().next().value;
              r.$unknown = [e, t[e]];
            }
          } else if ("string" == typeof t.__type)
            for (const e in t) l(t, e) && (e in r || (r[e] = t[e]));
        }
        return r;
      }
      class at extends f {
        createSerializer() {
          const e = new ce();
          return (e.setSerdeContext(this.serdeContext), e);
        }
        createDeserializer() {
          const e = new Ue();
          return (e.setSerdeContext(this.serdeContext), e);
        }
      }
      ((t.CborCodec = at),
        (t.CborShapeDeserializer = class extends f {
          read(e, t) {
            const r = se.deserialize(t);
            return this.readValue(e, r);
          }
          readValue(e, t) {
            const r = g.of(e);
            if (r.isTimestampSchema()) {
              if ("number" == typeof t) return c(t);
              if ("object" == typeof t && 1 === t.tag && "value" in t) return c(t.value);
            }
            if (r.isBlobSchema())
              return "string" == typeof t ? (this.serdeContext?.base64Decoder ?? a)(t) : t;
            if (
              void 0 === t ||
              "boolean" == typeof t ||
              "number" == typeof t ||
              "string" == typeof t ||
              "bigint" == typeof t ||
              "symbol" == typeof t
            )
              return t;
            if ("object" == typeof t) {
              if (null === t) return null;
              if ("byteLength" in t) return t;
              if (t instanceof Date) return t;
              if (r.isDocumentSchema()) return t;
              if (r.isListSchema()) {
                const e = [],
                  n = r.getValueSchema();
                for (const r of t) {
                  const t = this.readValue(n, r);
                  e.push(t);
                }
                return e;
              }
              const e = {};
              if (r.isMapSchema()) {
                const n = r.getValueSchema();
                for (const r in t) {
                  if (!l(t, r)) continue;
                  const s = this.readValue(n, t[r]);
                  e[r] = s;
                }
              } else if (r.isStructSchema()) {
                const n = r.isUnionSchema();
                let s;
                if (n) {
                  s = new Set();
                  for (const e in t) l(t, e) && "__type" !== e && s.add(e);
                }
                for (const [i, o] of r.structIterator())
                  (n && s.delete(i), null != t[i] && (e[i] = this.readValue(o, t[i])));
                if (n && 1 === s?.size) {
                  let r = !0;
                  for (const t in e)
                    if (l(e, t)) {
                      r = !1;
                      break;
                    }
                  if (r) {
                    const r = s.values().next().value;
                    e.$unknown = [r, t[r]];
                  }
                } else if ("string" == typeof t.__type)
                  for (const r in t) l(t, r) && (r in e || (e[r] = t[r]));
              } else if (t instanceof s) return t;
              return e;
            }
            return t;
          }
        }),
        (t.CborShapeDeserializer2 = Ue),
        (t.CborShapeSerializer = class extends f {
          value;
          write(e, t) {
            this.value = this.serialize(e, t);
          }
          serialize(e, t) {
            const r = g.of(e);
            if (null == t) return r.isIdempotencyToken() ? o() : t;
            if (r.isBlobSchema())
              return "string" == typeof t ? (this.serdeContext?.base64Decoder ?? a)(t) : t;
            if (r.isTimestampSchema())
              return oe(
                "number" == typeof t || "bigint" == typeof t ? new Date((Number(t) / 1e3) | 0) : t,
              );
            if ("function" == typeof t || "object" == typeof t) {
              const e = t;
              if (r.isListSchema() && Array.isArray(e)) {
                const t = !!r.getMergedTraits().sparse,
                  n = [];
                let s = 0;
                for (const i of e) {
                  const e = this.serialize(r.getValueSchema(), i);
                  (null != e || t) && (n[s++] = e);
                }
                return n;
              }
              if (e instanceof Date) return oe(e);
              const n = {};
              if (r.isMapSchema()) {
                const t = !!r.getMergedTraits().sparse;
                for (const s in e) {
                  if (!l(e, s)) continue;
                  const i = this.serialize(r.getValueSchema(), e[s]);
                  (null != i || t) && (n[s] = i);
                }
              } else if (r.isStructSchema()) {
                for (const [t, s] of r.structIterator()) {
                  const r = this.serialize(s, e[t]);
                  null != r && (n[t] = r);
                }
                if (r.isUnionSchema() && Array.isArray(e.$unknown)) {
                  const [t, r] = e.$unknown;
                  n[t] = r;
                } else if ("string" == typeof e.__type)
                  for (const t in e) l(e, t) && (t in n || (n[t] = this.serialize(15, e[t])));
              } else if (r.isDocumentSchema()) {
                if (Array.isArray(e)) {
                  const t = [];
                  let n = 0;
                  for (const s of e) t[n++] = this.serialize(r.getValueSchema(), s);
                  return t;
                }
                for (const t in e) l(e, t) && (n[t] = this.serialize(r.getValueSchema(), e[t]));
              } else if (r.isBigDecimalSchema()) return e;
              return n;
            }
            return t;
          }
          flush() {
            const e = se.serialize(this.value);
            return ((this.value = void 0), e);
          }
        }),
        (t.CborShapeSerializer2 = ce),
        (t.SmithyRpcV2CborProtocol = class extends p {
          codec = new at();
          serializer = this.codec.createSerializer();
          deserializer = this.codec.createDeserializer();
          constructor({ defaultNamespace: e, errorTypeRegistries: t }) {
            super({ defaultNamespace: e, errorTypeRegistries: t });
          }
          getShapeId() {
            return "smithy.protocols#rpcv2Cbor";
          }
          getPayloadCodec() {
            return this.codec;
          }
          async serializeRequest(e, t, r) {
            const n = await super.serializeRequest(e, t, r);
            (Object.assign(n.headers, {
              "content-type": this.getDefaultContentType(),
              "smithy-protocol": "rpc-v2-cbor",
              accept: this.getDefaultContentType(),
            }),
              "unit" === m(e.input)
                ? (delete n.body, delete n.headers["content-type"])
                : (n.body || (this.serializer.write(15, {}), (n.body = this.serializer.flush())),
                  n.body instanceof Uint8Array &&
                    (n.headers["content-length"] = String(n.body.byteLength))));
            const { service: s, operation: i } = u(r),
              o = `/service/${s}/operation/${i}`;
            return (n.path.endsWith("/") ? (n.path += o.slice(1)) : (n.path += o), n);
          }
          async deserializeResponse(e, t, r) {
            return super.deserializeResponse(e, t, r);
          }
          async handleError(e, t, r, n, s) {
            const i = ae(0, n) ?? "Unknown",
              o = { $metadata: s, $fault: r.statusCode <= 500 ? "client" : "server" };
            let a = this.options.defaultNamespace;
            i.includes("#") && ([a] = i.split("#"));
            const c = this.compositeErrorRegistry,
              l = y.for(a);
            let u;
            c.copyFrom(l);
            try {
              u = c.getSchema(i);
            } catch (e) {
              n.Message && (n.message = n.Message);
              const t = y.for("smithy.ts.sdk.synthetic." + a);
              c.copyFrom(t);
              const r = c.getBaseException();
              if (r) {
                const e = c.getErrorCtor(r);
                throw Object.assign(new e({ name: i }), o, n);
              }
              throw Object.assign(new Error(i), o, n);
            }
            const d = g.of(u),
              h = c.getErrorCtor(u),
              f = n.message ?? n.Message ?? "Unknown",
              p = new h({}),
              m = {};
            for (const [e, t] of d.structIterator()) m[e] = this.deserializer.readValue(t, n[e]);
            throw Object.assign(p, o, { $fault: d.getMergedTraits().error, message: f }, m);
          }
          getDefaultContentType() {
            return "application/cbor";
          }
        }),
        (t.buildHttpRpcRequest = async (e, t, r, n, s) => {
          const o = await e.endpoint(),
            { hostname: a, protocol: c = "https", port: u, path: h } = o,
            f = {
              protocol: c,
              hostname: a,
              port: u,
              method: "POST",
              path: h.endsWith("/") ? h.slice(0, -1) + r : h + r,
              headers: { ...t },
            };
          if ((void 0 !== n && (f.hostname = n), o.headers))
            for (const e in o.headers) l(o.headers, e) && (f.headers[e] = o.headers[e]);
          if (void 0 !== s) {
            f.body = s;
            try {
              f.headers["content-length"] = String(i(s));
            } catch (e) {}
          }
          return new d(f);
        }),
        (t.cbor = se),
        (t.checkCborResponse = (e) => {
          if ("rpc-v2-cbor" !== String(e.headers["smithy-protocol"]).toLowerCase())
            throw new Error("Malformed RPCv2 CBOR response, status: " + e.statusCode);
        }),
        (t.dateToTag = oe),
        (t.loadSmithyRpcV2CborErrorCode = ae),
        (t.parseCborBody = ie),
        (t.parseCborErrorBody = async (e, t) => {
          const r = await ie(e, t);
          return ((r.message = r.message ?? r.Message), r);
        }),
        (t.tag = C),
        (t.tagSymbol = N));
    },
    2798: (e, t, r) => {
      "use strict";
      r.d(t, { n: () => i });
      var n = r(73931),
        s = r(88141);
      const i = (e) => {
        e = n.HttpRequest.clone(e);
        for (const t of Object.keys(e.headers))
          s.pj.indexOf(t.toLowerCase()) > -1 && delete e.headers[t];
        return e;
      };
    },
    2979: (e, t, r) => {
      "use strict";
      r.d(t, { i: () => s });
      var n = r(93451);
      const s = (e, t) =>
        ((e) => {
          const t = e.split("."),
            r = [];
          for (const s of t) {
            const t = s.indexOf("[");
            if (-1 !== t) {
              if (s.indexOf("]") !== s.length - 1)
                throw new n.c(`Path: '${e}' does not end with ']'`);
              const i = s.slice(t + 1, -1);
              if (Number.isNaN(parseInt(i)))
                throw new n.c(`Invalid array index: '${i}' in path: '${e}'`);
              (0 !== t && r.push(s.slice(0, t)), r.push(i));
            } else r.push(s);
          }
          return r;
        })(t).reduce((r, s) => {
          if ("object" != typeof r)
            throw new n.c(`Index '${s}' in '${t}' not found in '${JSON.stringify(e)}'`);
          if (Array.isArray(r)) {
            const e = parseInt(s);
            return r[e < 0 ? r.length + e : e];
          }
          return r[s];
        }, e);
    },
    3745: (e, t, r) => {
      "use strict";
      r.d(t, { Y: () => o });
      var n = r(64972),
        s = r(36419),
        i = r(23694);
      class o {
        mode = n.cm.ADAPTIVE;
        rateLimiter;
        standardRetryStrategy;
        constructor(e, t) {
          const { rateLimiter: r } = t ?? {};
          ((this.rateLimiter = r ?? new s.Q()),
            (this.standardRetryStrategy = t
              ? new i.r({ maxAttempts: "number" == typeof e ? e : 3, ...t })
              : new i.r(e)));
        }
        async acquireInitialRetryToken(e) {
          const t = this.standardRetryStrategy.acquireInitialRetryToken(e);
          return (await this.rateLimiter.getSendToken(), t);
        }
        async refreshRetryTokenForRetry(e, t) {
          this.rateLimiter.updateClientSendingRate(t);
          const r = this.standardRetryStrategy.refreshRetryTokenForRetry(e, t);
          return (await this.rateLimiter.getSendToken(), r);
        }
        recordSuccess(e) {
          (this.rateLimiter.updateClientSendingRate({}),
            this.standardRetryStrategy.recordSuccess(e));
        }
        async maxAttemptsProvider() {
          return this.standardRetryStrategy.maxAttempts();
        }
      }
    },
    3865: (e, t, r) => {
      "use strict";
      (r.r(t), r.d(t, { fromBase64: () => i, toBase64: () => o.n }));
      var n = r(90443);
      const s = /^[A-Za-z0-9+/]*={0,2}$/,
        i = (e) => {
          if ((3 * e.length) % 4 != 0) throw new TypeError("Incorrect padding on base64 string.");
          if (!s.exec(e)) throw new TypeError("Invalid base64 string.");
          const t = (0, n.s)(e, "base64");
          return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
        };
      var o = r(55936);
    },
    3871: (e, t, r) => {
      "use strict";
      r.d(t, { o: () => s });
      const n = new RegExp(
          "^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$",
        ),
        s = (e) => n.test(e) || (e.startsWith("[") && e.endsWith("]"));
    },
    4374: (e, t, r) => {
      "use strict";
      r.d(t, { t: () => i });
      var n = r(93451),
        s = r(15235);
      const i = (e, t) => {
        const r = (0, s.O4)(e, "Endpoint URL", t);
        if ("string" == typeof r)
          try {
            return new URL(r);
          } catch (e) {
            throw (console.error(`Failed to construct URL with ${r}`, e), e);
          }
        throw new n.c("Endpoint URL must be a string, got " + typeof r);
      };
    },
    5090: (e, t, r) => {
      "use strict";
      r.d(t, { F: () => a });
      var n = r(12046),
        s = r(19497),
        i = r(93451),
        o = r(15235);
      const a = (e, t) => {
        const { assign: r } = e;
        if (r && r in t.referenceRecord)
          throw new i.c(`'${r}' is already defined in Reference Record.`);
        const a = (0, o.Tx)(e, t);
        t.logger?.debug?.(`${n.z} evaluateCondition: ${(0, s.m)(e)} = ${(0, s.m)(a)}`);
        const c = "" === a || !!a;
        return null != r ? { result: c, toAssign: { name: r, value: a } } : { result: c };
      };
    },
    5944: (e, t, r) => {
      "use strict";
      (r.r(t), r.d(t, { getSmithyContext: () => n.u, normalizeProvider: () => s.t }));
      var n = r(85919),
        s = r(90570);
    },
    6328: (e, t, r) => {
      "use strict";
      (r.r(t),
        r.d(t, {
          ALGORITHM_IDENTIFIER: () => s.SG,
          ALGORITHM_IDENTIFIER_V4A: () => s.ku,
          ALGORITHM_QUERY_PARAM: () => s.XI,
          ALWAYS_UNSIGNABLE_HEADERS: () => s.SN,
          AMZ_DATE_HEADER: () => s.ot,
          AMZ_DATE_QUERY_PARAM: () => s.Zs,
          AUTH_HEADER: () => s.H1,
          CREDENTIAL_QUERY_PARAM: () => s.tI,
          DATE_HEADER: () => s.J9,
          EVENT_ALGORITHM_IDENTIFIER: () => s.r1,
          EXPIRES_QUERY_PARAM: () => s.MS,
          GENERATED_HEADERS: () => s.pj,
          HOST_HEADER: () => s.zX,
          KEY_TYPE_IDENTIFIER: () => s.VQ,
          MAX_CACHE_SIZE: () => s.g5,
          MAX_PRESIGNED_TTL: () => s.Uv,
          PROXY_HEADER_PATTERN: () => s.Ir,
          REGION_SET_PARAM: () => s.oB,
          SEC_HEADER_PATTERN: () => s.lP,
          SHA256_HEADER: () => s.Wd,
          SIGNATURE_HEADER: () => s.D8,
          SIGNATURE_QUERY_PARAM: () => s.cR,
          SIGNED_HEADERS_QUERY_PARAM: () => s.FY,
          SignatureV4: () => n.B,
          SignatureV4Base: () => d.y,
          TOKEN_HEADER: () => s.wE,
          TOKEN_QUERY_PARAM: () => s.r2,
          UNSIGNABLE_PATTERNS: () => s.Jp,
          UNSIGNED_PAYLOAD: () => s.z8,
          clearCredentialCache: () => u.HK,
          createScope: () => u.Ds,
          getCanonicalHeaders: () => i.H,
          getCanonicalQuery: () => o.$,
          getPayloadHash: () => a.p,
          getSigningKey: () => u.Xf,
          hasHeader: () => h.ou,
          moveHeadersToQuery: () => c.b,
          prepareRequest: () => l.n,
          signatureV4aContainer: () => f.d,
        }));
      var n = r(84329),
        s = r(88141),
        i = r(37060),
        o = r(99430),
        a = r(66220),
        c = r(8770),
        l = r(2798),
        u = r(29134),
        d = r(43801),
        h = r(58699),
        f = r(16936);
    },
    6685: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => n });
      const n = {};
    },
    6921: (e, t, r) => {
      "use strict";
      const n = {
          REQUEST_ID: Symbol.for("_AWS_LAMBDA_REQUEST_ID"),
          X_RAY_TRACE_ID: Symbol.for("_AWS_LAMBDA_X_RAY_TRACE_ID"),
          TENANT_ID: Symbol.for("_AWS_LAMBDA_TENANT_ID"),
        },
        s = ["true", "1"].includes(process.env?.AWS_LAMBDA_NODEJS_NO_GLOBAL_AWSLAMBDA ?? "");
      s || (globalThis.awslambda = globalThis.awslambda || {});
      class i {
        static PROTECTED_KEYS = n;
        isProtectedKey(e) {
          return Object.values(n).includes(e);
        }
        getRequestId() {
          return this.get(n.REQUEST_ID) ?? "-";
        }
        getXRayTraceId() {
          return this.get(n.X_RAY_TRACE_ID);
        }
        getTenantId() {
          return this.get(n.TENANT_ID);
        }
      }
      class o extends i {
        currentContext;
        getContext() {
          return this.currentContext;
        }
        hasContext() {
          return void 0 !== this.currentContext;
        }
        get(e) {
          return this.currentContext?.[e];
        }
        set(e, t) {
          if (this.isProtectedKey(e))
            throw new Error(`Cannot modify protected Lambda context field: ${String(e)}`);
          ((this.currentContext = this.currentContext || {}), (this.currentContext[e] = t));
        }
        run(e, t) {
          return ((this.currentContext = e), t());
        }
      }
      class a extends i {
        als;
        static async create() {
          const e = new a(),
            t = await Promise.resolve().then(r.t.bind(r, 16698, 23));
          return ((e.als = new t.AsyncLocalStorage()), e);
        }
        getContext() {
          return this.als.getStore();
        }
        hasContext() {
          return void 0 !== this.als.getStore();
        }
        get(e) {
          return this.als.getStore()?.[e];
        }
        set(e, t) {
          if (this.isProtectedKey(e))
            throw new Error(`Cannot modify protected Lambda context field: ${String(e)}`);
          const r = this.als.getStore();
          if (!r) throw new Error("No context available");
          r[e] = t;
        }
        run(e, t) {
          return this.als.run(e, t);
        }
      }
      ((t.A = void 0),
        (function (e) {
          let t = null;
          ((e.getInstanceAsync = async function (e) {
            return (
              t ||
                (t = (async () => {
                  const t =
                    !0 === e || "AWS_LAMBDA_MAX_CONCURRENCY" in process.env
                      ? await a.create()
                      : new o();
                  return !s && globalThis.awslambda?.InvokeStore
                    ? globalThis.awslambda.InvokeStore
                    : !s && globalThis.awslambda
                      ? ((globalThis.awslambda.InvokeStore = t), t)
                      : t;
                })()),
              t
            );
          }),
            (e._testing =
              "1" === process.env.AWS_LAMBDA_BENCHMARK_MODE
                ? {
                    reset: () => {
                      ((t = null),
                        globalThis.awslambda?.InvokeStore &&
                          delete globalThis.awslambda.InvokeStore,
                        (globalThis.awslambda = { InvokeStore: void 0 }));
                    },
                  }
                : void 0));
        })(t.A || (t.A = {})));
    },
    7369: (e, t, r) => {
      "use strict";
      r.d(t, { c: () => n });
      class n {
        statusCode;
        reason;
        headers;
        body;
        constructor(e) {
          ((this.statusCode = e.statusCode),
            (this.reason = e.reason),
            (this.headers = e.headers || {}),
            (this.body = e.body));
        }
        static isInstance(e) {
          if (!e) return !1;
          const t = e;
          return "number" == typeof t.statusCode && "object" == typeof t.headers;
        }
      }
    },
    8770: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => s });
      var n = r(73931);
      const s = (e, t = {}) => {
        const { headers: r, query: s = {} } = n.HttpRequest.clone(e);
        for (const e of Object.keys(r)) {
          const n = e.toLowerCase();
          (("x-amz-" === n.slice(0, 6) && !t.unhoistableHeaders?.has(n)) ||
            t.hoistableHeaders?.has(n)) &&
            ((s[e] = r[e]), delete r[e]);
        }
        return { ...e, headers: r, query: s };
      };
    },
    9622: (e, t, r) => {
      "use strict";
      (r.r(t),
        r.d(t, { getRecursionDetectionPlugin: () => c, recursionDetectionMiddleware: () => a }));
      const n = {
        step: "build",
        tags: ["RECURSION_DETECTION"],
        name: "recursionDetectionMiddleware",
        override: !0,
        priority: "low",
      };
      var s = r(6921),
        i = r(50333);
      const o = "X-Amzn-Trace-Id",
        a = () => (e) => async (t) => {
          const { request: r } = t;
          if (!i.K.isInstance(r)) return e(t);
          const n =
            Object.keys(r.headers ?? {}).find((e) => e.toLowerCase() === o.toLowerCase()) ?? o;
          if (r.headers.hasOwnProperty(n)) return e(t);
          const a = process.env.AWS_LAMBDA_FUNCTION_NAME,
            c = process.env._X_AMZN_TRACE_ID,
            l = await s.A.getInstanceAsync(),
            u = l?.getXRayTraceId(),
            d = u ?? c,
            h = (e) => "string" == typeof e && e.length > 0;
          return (h(a) && h(d) && (r.headers[o] = d), e({ ...t, request: r }));
        },
        c = (e) => ({
          applyToStack: (e) => {
            e.add(a(), n);
          },
        });
    },
    12046: (e, t, r) => {
      "use strict";
      r.d(t, { z: () => n });
      const n = "endpoints";
    },
    14074: (e, t, r) => {
      "use strict";
      r.d(t, { s: () => m });
      var n = r(12046),
        s = r(19497),
        i = r(93451),
        o = r(5090);
      const a = (e = [], t) => {
        const r = {},
          i = { ...t, referenceRecord: { ...t.referenceRecord } };
        let a = !1;
        for (const c of e) {
          const { result: e, toAssign: l } = (0, o.F)(c, i);
          if (!e) return { result: e };
          l &&
            ((a = !0),
            (r[l.name] = l.value),
            (i.referenceRecord[l.name] = l.value),
            t.logger?.debug?.(`${n.z} assign: ${l.name} := ${(0, s.m)(l.value)}`));
        }
        return a ? { result: !0, referenceRecord: r } : { result: !0 };
      };
      var c = r(20961),
        l = r(77330),
        u = r(4374);
      const d = (e, t) => {
        const { conditions: r, endpoint: i } = e,
          { result: o, referenceRecord: d } = a(r, t);
        if (!o) return;
        const h = d ? { ...t, referenceRecord: { ...t.referenceRecord, ...d } } : t,
          { url: f, properties: p, headers: g } = i;
        t.logger?.debug?.(`${n.z} Resolving endpoint from template: ${(0, s.m)(i)}`);
        const m = { url: (0, u.t)(f, h) };
        return (
          null != g && (m.headers = (0, c.w)(g, h)),
          null != p && (m.properties = (0, l.Fb)(p, h)),
          m
        );
      };
      var h = r(15235);
      const f = (e, t) => {
          const { conditions: r, error: n } = e,
            { result: s, referenceRecord: o } = a(r, t);
          if (!s) return;
          const c = o ? { ...t, referenceRecord: { ...t.referenceRecord, ...o } } : t;
          throw new i.c((0, h.O4)(n, "Error", c));
        },
        p = (e, t) => {
          for (const r of e)
            if ("endpoint" === r.type) {
              const e = d(r, t);
              if (e) return e;
            } else if ("error" === r.type) f(r, t);
            else {
              if ("tree" !== r.type) throw new i.c(`Unknown endpoint rule: ${r}`);
              {
                const e = g.evaluateTreeRule(r, t);
                if (e) return e;
              }
            }
          throw new i.c("Rules evaluation failed");
        },
        g = {
          evaluateRules: p,
          evaluateTreeRule: (e, t) => {
            const { conditions: r, rules: n } = e,
              { result: s, referenceRecord: i } = a(r, t);
            if (!s) return;
            const o = i ? { ...t, referenceRecord: { ...t.referenceRecord, ...i } } : t;
            return g.evaluateRules(n, o);
          },
        },
        m = (e, t) => {
          const { endpointParams: r, logger: o } = t,
            { parameters: a, rules: c } = e;
          t.logger?.debug?.(`${n.z} Initial EndpointParams: ${(0, s.m)(r)}`);
          for (const e in a) {
            const t = a[e],
              n = r[e];
            if (null != n || null == t.default) {
              if (t.required && null == n) throw new i.c(`Missing required parameter: '${e}'`);
            } else r[e] = t.default;
          }
          const l = p(c, { endpointParams: r, logger: o, referenceRecord: {} });
          return (t.logger?.debug?.(`${n.z} Resolved endpoint: ${(0, s.m)(l)}`), l);
        };
    },
    15235: (e, t, r) => {
      "use strict";
      r.d(t, { Tx: () => f, O4: () => h });
      var n = r(93451),
        s = r(6685);
      var i = r(2979);
      var o = r(62340);
      var a = r(67857),
        c = r(3871);
      const l = { [a.U.HTTP]: 80, [a.U.HTTPS]: 443 };
      const u = {
        booleanEquals: (e, t) => e === t,
        coalesce: function (...e) {
          for (const t of e) if (null != t) return t;
        },
        getAttr: i.i,
        isSet: (e) => null != e,
        isValidHostLabel: o.X,
        ite: function (e, t, r) {
          return e ? t : r;
        },
        not: (e) => !e,
        parseURL: (e) => {
          const t = (() => {
            try {
              if (e instanceof URL) return e;
              if ("object" == typeof e && "hostname" in e) {
                const { hostname: t, port: r, protocol: n = "", path: s = "", query: i = {} } = e,
                  o = new URL(`${n}//${t}${r ? `:${r}` : ""}${s}`);
                return (
                  (o.search = Object.entries(i)
                    .map(([e, t]) => `${e}=${t}`)
                    .join("&")),
                  o
                );
              }
              return new URL(e);
            } catch (e) {
              return null;
            }
          })();
          if (!t)
            return (console.error(`Unable to parse ${JSON.stringify(e)} as a whatwg URL.`), null);
          const r = t.href,
            { host: n, hostname: s, pathname: i, protocol: o, search: u } = t;
          if (u) return null;
          const d = o.slice(0, -1);
          if (!Object.values(a.U).includes(d)) return null;
          const h = (0, c.o)(s);
          return {
            scheme: d,
            authority: `${n}${r.includes(`${n}:${l[d]}`) || ("string" == typeof e && e.includes(`${n}:${l[d]}`)) ? `:${l[d]}` : ""}`,
            path: i,
            normalizedPath: i.endsWith("/") ? i : `${i}/`,
            isIp: h,
          };
        },
        split: function (e, t, r) {
          if (1 === r) return [e];
          if ("" === e) return [""];
          const n = e.split(t);
          return 0 === r ? n : n.slice(0, r - 1).concat(n.slice(1).join(t));
        },
        stringEquals: (e, t) => e === t,
        substring: (e, t, r, n) =>
          null == e || t >= r || e.length < r || /[^\u0000-\u007f]/.test(e)
            ? null
            : n
              ? e.substring(e.length - r, e.length - t)
              : e.substring(t, r),
        uriEncode: (e) =>
          encodeURIComponent(e).replace(
            /[!*'()]/g,
            (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`,
          ),
      };
      var d = r(26713);
      const h = (e, t, r) => {
          if ("string" == typeof e) return (0, d.M)(e, r);
          if (e.fn) return p.callFunction(e, r);
          if (e.ref) return (({ ref: e }, t) => t.referenceRecord[e] ?? t.endpointParams[e])(e, r);
          throw new n.c(`'${t}': ${String(e)} is not a string, function or reference.`);
        },
        f = ({ fn: e, argv: t }, r) => {
          const n = Array(t.length);
          for (let e = 0; e < n.length; ++e) {
            const s = t[e];
            n[e] =
              "boolean" == typeof s || "number" == typeof s ? s : p.evaluateExpression(s, "arg", r);
          }
          const i = e.indexOf(".");
          if (-1 !== i) {
            const t = s.m[e.slice(0, i)],
              r = t?.[e.slice(i + 1)];
            if ("function" == typeof r) return r(...n);
          }
          const o = u[e];
          if ("function" == typeof o) return o(...n);
          throw new Error(`function ${e} not loaded in endpointFunctions.`);
        },
        p = { evaluateExpression: h, callFunction: f };
    },
    15725: (e, t, r) => {
      "use strict";
      r.d(t, { F: () => s });
      var n = r(6846);
      const s = (e) =>
        "string" == typeof e
          ? (0, n.a)(e)
          : ArrayBuffer.isView(e)
            ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT)
            : new Uint8Array(e);
    },
    16936: (e, t, r) => {
      "use strict";
      r.d(t, { d: () => n });
      const n = { SignatureV4a: null };
    },
    18020: (e, t, r) => {
      "use strict";
      (r.r(t),
        r.d(t, {
          AdaptiveRetryStrategy: () => n.Y,
          ConfiguredRetryStrategy: () => o,
          DEFAULT_MAX_ATTEMPTS: () => c.Gz,
          DEFAULT_RETRY_DELAY_BASE: () => l.bp,
          DEFAULT_RETRY_MODE: () => c.L0,
          DefaultRateLimiter: () => a.Q,
          INITIAL_RETRY_TOKENS: () => l.Df,
          INVOCATION_ID_HEADER: () => l.l5,
          MAXIMUM_RETRY_DELAY: () => l.G8,
          NO_RETRY_INCREMENT: () => l.XP,
          REQUEST_HEADER: () => l.ok,
          RETRY_COST: () => l.XS,
          RETRY_MODES: () => c.cm,
          Retry: () => s.f,
          StandardRetryStrategy: () => i.r,
          THROTTLING_RETRY_DELAY_BASE: () => l.jh,
          TIMEOUT_RETRY_COST: () => l.Rn,
        }));
      var n = r(3745),
        s = r(79892),
        i = r(23694);
      class o extends i.r {
        computeNextBackoffDelay;
        constructor(e, t = s.f.delay()) {
          (super("function" == typeof e ? e : async () => e),
            (this.computeNextBackoffDelay = "number" == typeof t ? () => t : t));
        }
        async refreshRetryTokenForRetry(e, t) {
          const r = await super.refreshRetryTokenForRetry(e, t);
          return ((r.getRetryDelay = () => this.computeNextBackoffDelay(r.getRetryCount())), r);
        }
      }
      var a = r(36419),
        c = r(64972),
        l = r(51181);
    },
    18415: (e, t, r) => {
      "use strict";
      (r.r(t),
        r.d(t, {
          NODE_REGION_CONFIG_FILE_OPTIONS: () => i.zH,
          NODE_REGION_CONFIG_OPTIONS: () => i.GG,
          REGION_ENV_NAME: () => i.Fc,
          REGION_INI_NAME: () => i.OR,
          getAwsRegionExtensionConfiguration: () => n,
          resolveAwsRegionExtensionConfiguration: () => s,
          resolveRegionConfig: () => o.T,
          stsRegionDefaultResolver: () => c,
          warning: () => l,
        }));
      const n = (e) => ({
          setRegion(t) {
            e.region = t;
          },
          region: () => e.region,
        }),
        s = (e) => ({ region: e.region() });
      var i = r(24060),
        o = r(77654),
        a = r(74935);
      function c(e = {}) {
        return (0, a.Z)(
          {
            ...i.GG,
            default: async () => (
              l.silence ||
                console.warn(
                  "@aws-sdk - WARN - default STS region of us-east-1 used. See @aws-sdk/credential-providers README and set a region explicitly.",
                ),
              "us-east-1"
            ),
          },
          { ...i.zH, ...e },
        );
      }
      const l = { silence: !1 };
    },
    19497: (e, t, r) => {
      "use strict";
      function n(e) {
        return "object" != typeof e || null == e
          ? e
          : "ref" in e
            ? `$${n(e.ref)}`
            : "fn" in e
              ? `${e.fn}(${(e.argv || []).map(n).join(", ")})`
              : JSON.stringify(e, null, 2);
      }
      r.d(t, { m: () => n });
    },
    20961: (e, t, r) => {
      "use strict";
      r.d(t, { w: () => i });
      var n = r(93451),
        s = r(15235);
      const i = (e, t) =>
        Object.entries(e ?? {}).reduce(
          (e, [r, i]) => (
            (e[r] = i.map((e) => {
              const i = (0, s.O4)(e, "Header value entry", t);
              if ("string" != typeof i) throw new n.c(`Header '${r}' value '${i}' is not a string`);
              return i;
            })),
            e
          ),
          {},
        );
    },
    21413: (e, t, r) => {
      "use strict";
      (r.r(t),
        r.d(t, {
          getHostHeaderPlugin: () => a,
          hostHeaderMiddleware: () => i,
          hostHeaderMiddlewareOptions: () => o,
          resolveHostHeaderConfig: () => s,
        }));
      var n = r(50333);
      function s(e) {
        return e;
      }
      const i = (e) => (t) => async (r) => {
          if (!n.K.isInstance(r.request)) return t(r);
          const { request: s } = r,
            { handlerProtocol: i = "" } = e.requestHandler.metadata || {};
          if (i.indexOf("h2") >= 0 && !s.headers[":authority"])
            (delete s.headers.host,
              (s.headers[":authority"] = s.hostname + (s.port ? ":" + s.port : "")));
          else if (!s.headers.host) {
            let e = s.hostname;
            (null != s.port && (e += `:${s.port}`), (s.headers.host = e));
          }
          return t(r);
        },
        o = {
          name: "hostHeaderMiddleware",
          step: "build",
          priority: "low",
          tags: ["HOST"],
          override: !0,
        },
        a = (e) => ({
          applyToStack: (t) => {
            t.add(i(e), o);
          },
        });
    },
    23296: (e, t, r) => {
      "use strict";
      (r.r(t), r.d(t, { Hash: () => a }));
      var n = r(90443),
        s = r(15725),
        i = r(20181),
        o = r(76982);
      class a {
        algorithmIdentifier;
        secret;
        hash;
        constructor(e, t) {
          ((this.algorithmIdentifier = e), (this.secret = t), this.reset());
        }
        update(e, t) {
          this.hash.update((0, s.F)(c(e, t)));
        }
        digest() {
          return Promise.resolve(this.hash.digest());
        }
        reset() {
          this.hash = this.secret
            ? (0, o.createHmac)(this.algorithmIdentifier, c(this.secret))
            : (0, o.createHash)(this.algorithmIdentifier);
        }
      }
      function c(e, t) {
        return i.Buffer.isBuffer(e)
          ? e
          : "string" == typeof e
            ? (0, n.s)(e, t)
            : ArrayBuffer.isView(e)
              ? (0, n.Q)(e.buffer, e.byteOffset, e.byteLength)
              : (0, n.Q)(e);
      }
    },
    23694: (e, t, r) => {
      "use strict";
      r.d(t, { r: () => d });
      var n = r(64972),
        s = r(51181),
        i = r(79892);
      class o {
        x = i.f.delay();
        computeNextBackoffDelay(e) {
          const t = Math.random() * Math.min(this.x * 2 ** e, s.G8);
          return Math.floor(t);
        }
        setDelayBase(e) {
          this.x = e;
        }
      }
      class a {
        delay;
        count;
        cost;
        longPoll;
        constructor(e, t, r, n) {
          ((this.delay = e), (this.count = t), (this.cost = r), (this.longPoll = n));
        }
        getRetryCount() {
          return this.count;
        }
        getRetryDelay() {
          return Math.min(s.G8, this.delay);
        }
        getRetryCost() {
          return this.cost;
        }
        isLongPoll() {
          return this.longPoll;
        }
      }
      const c = 1,
        l = 2,
        u = 3;
      class d {
        mode = n.cm.STANDARD;
        capacity = s.Df;
        retryBackoffStrategy;
        maxAttemptsProvider;
        baseDelay;
        constructor(e) {
          ("number" == typeof e
            ? (this.maxAttemptsProvider = async () => e)
            : "function" == typeof e
              ? (this.maxAttemptsProvider = e)
              : e &&
                "object" == typeof e &&
                ((this.maxAttemptsProvider = async () => e.maxAttempts),
                (this.baseDelay = e.baseDelay),
                (this.retryBackoffStrategy = e.backoff)),
            (this.maxAttemptsProvider ??= async () => n.Gz),
            (this.baseDelay ??= i.f.delay()),
            (this.retryBackoffStrategy ??= new o()));
        }
        async acquireInitialRetryToken(e) {
          return new a(i.f.delay(), 0, void 0, i.f.v2026 && e.includes(":longpoll"));
        }
        async refreshRetryTokenForRetry(e, t) {
          const r = await this.getMaxAttempts(),
            n = this.retryCode(e, t, r),
            s = 0 === n,
            o = e.isLongPoll?.();
          if (s || o) {
            const r = t.errorType;
            this.retryBackoffStrategy.setDelayBase(
              "THROTTLING" === r ? i.f.throttlingDelay() : this.baseDelay,
            );
            const c = this.retryBackoffStrategy.computeNextBackoffDelay(e.getRetryCount());
            let l = c;
            if (
              (t.retryAfterHint instanceof Date &&
                (l = Math.max(c, Math.min(t.retryAfterHint.getTime() - Date.now(), c + 5e3))),
              s)
            ) {
              const t = this.getCapacityCost(r);
              return (
                (this.capacity -= t), new a(l, e.getRetryCount() + 1, t, e.isLongPoll?.() ?? !1)
              );
            }
            throw Object.assign(new Error("No retry token available"), {
              $backoff: i.f.v2026 && n === u && o ? l : 0,
            });
          }
          throw new Error("No retry token available");
        }
        recordSuccess(e) {
          this.capacity = Math.min(s.Df, this.capacity + (e.getRetryCost() ?? s.XP));
        }
        getCapacity() {
          return this.capacity;
        }
        async maxAttempts() {
          return this.maxAttemptsProvider();
        }
        async getMaxAttempts() {
          try {
            return await this.maxAttemptsProvider();
          } catch (e) {
            return (
              console.warn(`Max attempts provider could not resolve. Using default of ${n.Gz}`),
              n.Gz
            );
          }
        }
        retryCode(e, t, r) {
          const n = e.getRetryCount() + 1,
            s = this.isRetryableError(t.errorType) ? 0 : c,
            i = n < r ? 0 : l,
            o = this.capacity >= this.getCapacityCost(t.errorType) ? 0 : u;
          return s || i || o;
        }
        getCapacityCost(e) {
          return e === i.f.modifiedCostType() ? i.f.throttlingCost() : i.f.cost();
        }
        isRetryableError(e) {
          return "THROTTLING" === e || "TRANSIENT" === e;
        }
      }
    },
    24060: (e, t, r) => {
      "use strict";
      r.d(t, { Fc: () => n, GG: () => i, OR: () => s, zH: () => o });
      const n = "AWS_REGION",
        s = "region",
        i = {
          environmentVariableSelector: (e) => e[n],
          configFileSelector: (e) => e[s],
          default: () => {
            throw new Error("Region is missing");
          },
        },
        o = { preferredFile: "credentials" };
    },
    26713: (e, t, r) => {
      "use strict";
      r.d(t, { M: () => s });
      var n = r(2979);
      const s = (e, t) => {
        const r = [],
          { referenceRecord: s, endpointParams: i } = t;
        let o = 0;
        for (; o < e.length;) {
          const t = e.indexOf("{", o);
          if (-1 === t) {
            r.push(e.slice(o));
            break;
          }
          r.push(e.slice(o, t));
          const a = e.indexOf("}", t);
          if (-1 === a) {
            r.push(e.slice(t));
            break;
          }
          "{" === e[t + 1] && "}" === e[a + 1] && (r.push(e.slice(t + 1, a)), (o = a + 2));
          const c = e.substring(t + 1, a);
          if (c.includes("#")) {
            const [e, t] = c.split("#");
            r.push((0, n.i)(s[e] ?? i[e], t));
          } else r.push(s[c] ?? i[c]);
          o = a + 1;
        }
        return r.join("");
      };
    },
    26939: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"name":"@aws-sdk/nested-clients","version":"3.997.6","description":"Nested clients for AWS SDK packages.","main":"./dist-cjs/index.js","module":"./dist-es/index.js","types":"./dist-types/index.d.ts","scripts":{"build":"yarn lint && concurrently \'yarn:build:types\' \'yarn:build:es\' && yarn build:cjs","build:cjs":"node ../../scripts/compilation/inline nested-clients","build:es":"tsc -p tsconfig.es.json","build:include:deps":"yarn g:turbo run build -F=\\"$npm_package_name\\"","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4","clean":"premove dist-cjs dist-es dist-types tsconfig.cjs.tsbuildinfo tsconfig.es.tsbuildinfo tsconfig.types.tsbuildinfo","lint":"node ../../scripts/validation/submodules-linter.js --pkg nested-clients","test":"yarn g:vitest run","test:watch":"yarn g:vitest watch"},"engines":{"node":">=20.0.0"},"sideEffects":false,"author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"license":"Apache-2.0","dependencies":{"@aws-crypto/sha256-browser":"5.2.0","@aws-crypto/sha256-js":"5.2.0","@aws-sdk/core":"^3.974.8","@aws-sdk/middleware-host-header":"^3.972.10","@aws-sdk/middleware-logger":"^3.972.10","@aws-sdk/middleware-recursion-detection":"^3.972.11","@aws-sdk/middleware-user-agent":"^3.972.38","@aws-sdk/region-config-resolver":"^3.972.13","@aws-sdk/signature-v4-multi-region":"^3.996.25","@aws-sdk/types":"^3.973.8","@aws-sdk/util-endpoints":"^3.996.8","@aws-sdk/util-user-agent-browser":"^3.972.10","@aws-sdk/util-user-agent-node":"^3.973.24","@smithy/config-resolver":"^4.4.17","@smithy/core":"^3.23.17","@smithy/fetch-http-handler":"^5.3.17","@smithy/hash-node":"^4.2.14","@smithy/invalid-dependency":"^4.2.14","@smithy/middleware-content-length":"^4.2.14","@smithy/middleware-endpoint":"^4.4.32","@smithy/middleware-retry":"^4.5.7","@smithy/middleware-serde":"^4.2.20","@smithy/middleware-stack":"^4.2.14","@smithy/node-config-provider":"^4.3.14","@smithy/node-http-handler":"^4.6.1","@smithy/protocol-http":"^5.3.14","@smithy/smithy-client":"^4.12.13","@smithy/types":"^4.14.1","@smithy/url-parser":"^4.2.14","@smithy/util-base64":"^4.3.2","@smithy/util-body-length-browser":"^4.2.2","@smithy/util-body-length-node":"^4.2.3","@smithy/util-defaults-mode-browser":"^4.3.49","@smithy/util-defaults-mode-node":"^4.2.54","@smithy/util-endpoints":"^3.4.2","@smithy/util-middleware":"^4.2.14","@smithy/util-retry":"^4.3.6","@smithy/util-utf8":"^4.2.2","tslib":"^2.6.2"},"devDependencies":{"concurrently":"7.0.0","downlevel-dts":"0.10.1","premove":"4.0.0","typescript":"~5.8.3"},"typesVersions":{"<4.5":{"dist-types/*":["dist-types/ts3.4/*"]}},"files":["./cognito-identity.d.ts","./cognito-identity.js","./signin.d.ts","./signin.js","./sso-oidc.d.ts","./sso-oidc.js","./sso.d.ts","./sso.js","./sts.d.ts","./sts.js","dist-*/**"],"browser":{"./dist-es/submodules/cognito-identity/runtimeConfig":"./dist-es/submodules/cognito-identity/runtimeConfig.browser","./dist-es/submodules/signin/runtimeConfig":"./dist-es/submodules/signin/runtimeConfig.browser","./dist-es/submodules/sso-oidc/runtimeConfig":"./dist-es/submodules/sso-oidc/runtimeConfig.browser","./dist-es/submodules/sso/runtimeConfig":"./dist-es/submodules/sso/runtimeConfig.browser","./dist-es/submodules/sts/runtimeConfig":"./dist-es/submodules/sts/runtimeConfig.browser"},"react-native":{},"homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/packages/nested-clients","repository":{"type":"git","url":"https://github.com/aws/aws-sdk-js-v3.git","directory":"packages/nested-clients"},"exports":{"./package.json":"./package.json","./sso-oidc":{"types":"./dist-types/submodules/sso-oidc/index.d.ts","module":"./dist-es/submodules/sso-oidc/index.js","node":"./dist-cjs/submodules/sso-oidc/index.js","import":"./dist-es/submodules/sso-oidc/index.js","require":"./dist-cjs/submodules/sso-oidc/index.js"},"./sts":{"types":"./dist-types/submodules/sts/index.d.ts","module":"./dist-es/submodules/sts/index.js","node":"./dist-cjs/submodules/sts/index.js","import":"./dist-es/submodules/sts/index.js","require":"./dist-cjs/submodules/sts/index.js"},"./signin":{"types":"./dist-types/submodules/signin/index.d.ts","module":"./dist-es/submodules/signin/index.js","node":"./dist-cjs/submodules/signin/index.js","import":"./dist-es/submodules/signin/index.js","require":"./dist-cjs/submodules/signin/index.js"},"./cognito-identity":{"types":"./dist-types/submodules/cognito-identity/index.d.ts","module":"./dist-es/submodules/cognito-identity/index.js","node":"./dist-cjs/submodules/cognito-identity/index.js","import":"./dist-es/submodules/cognito-identity/index.js","require":"./dist-cjs/submodules/cognito-identity/index.js"},"./sso":{"types":"./dist-types/submodules/sso/index.d.ts","module":"./dist-es/submodules/sso/index.js","node":"./dist-cjs/submodules/sso/index.js","import":"./dist-es/submodules/sso/index.js","require":"./dist-cjs/submodules/sso/index.js"}}}',
      );
    },
    29134: (e, t, r) => {
      "use strict";
      r.d(t, { Ds: () => a, HK: () => l, Xf: () => c });
      var n = r(96851),
        s = r(88141);
      const i = {},
        o = [],
        a = (e, t, r) => `${e}/${t}/${r}/${s.VQ}`,
        c = async (e, t, r, a, c) => {
          const l = await u(e, t.secretAccessKey, t.accessKeyId),
            d = `${r}:${a}:${c}:${(0, n.toHex)(l)}:${t.sessionToken}`;
          if (d in i) return i[d];
          for (o.push(d); o.length > s.g5;) delete i[o.shift()];
          let h = `AWS4${t.secretAccessKey}`;
          for (const t of [r, a, c, s.VQ]) h = await u(e, h, t);
          return (i[d] = h);
        },
        l = () => {
          ((o.length = 0),
            Object.keys(i).forEach((e) => {
              delete i[e];
            }));
        },
        u = (e, t, r) => {
          const s = new e(t);
          return (s.update((0, n.toUint8Array)(r)), s.digest());
        };
    },
    29428: (e, t, r) => {
      "use strict";
      r.d(t, { f: () => o });
      var n = r(57075),
        s = r(70904);
      const i = 6e3;
      async function o(e, t, r = i, o = !1) {
        const a = t.headers,
          c = a ? a.Expect || a.expect : void 0;
        let l = -1,
          u = !0;
        (o ||
          "100-continue" !== c ||
          (u = await Promise.race([
            new Promise((e) => {
              l = Number(s.N.setTimeout(() => e(!0), Math.max(i, r)));
            }),
            new Promise((t) => {
              (e.on("continue", () => {
                (s.N.clearTimeout(l), t(!0));
              }),
                e.on("response", () => {
                  (s.N.clearTimeout(l), t(!1));
                }),
                e.on("error", () => {
                  (s.N.clearTimeout(l), t(!1));
                }));
            }),
          ])),
          u &&
            (function (e, t) {
              if (t instanceof n.Readable) return void t.pipe(e);
              if (t) {
                const r = Buffer.isBuffer(t);
                if (r || "string" == typeof t)
                  return void (r && 0 === t.byteLength ? e.end() : e.end(t));
                const n = t;
                return "object" == typeof n &&
                  n.buffer &&
                  "number" == typeof n.byteOffset &&
                  "number" == typeof n.byteLength
                  ? void e.end(Buffer.from(n.buffer, n.byteOffset, n.byteLength))
                  : void e.end(Buffer.from(t));
              }
              e.end();
            })(e, t.body));
      }
    },
    30740: (e, t, r) => {
      "use strict";
      (r.r(t),
        r.d(t, {
          getLoggerPlugin: () => i,
          loggerMiddleware: () => n,
          loggerMiddlewareOptions: () => s,
        }));
      const n = () => (e, t) => async (r) => {
          try {
            const n = await e(r),
              {
                clientName: s,
                commandName: i,
                logger: o,
                dynamoDbDocumentClientOptions: a = {},
              } = t,
              { overrideInputFilterSensitiveLog: c, overrideOutputFilterSensitiveLog: l } = a,
              u = c ?? t.inputFilterSensitiveLog,
              d = l ?? t.outputFilterSensitiveLog,
              { $metadata: h, ...f } = n.output;
            return (
              o?.info?.({
                clientName: s,
                commandName: i,
                input: u(r.input),
                output: d(f),
                metadata: h,
              }),
              n
            );
          } catch (e) {
            const {
                clientName: n,
                commandName: s,
                logger: i,
                dynamoDbDocumentClientOptions: o = {},
              } = t,
              { overrideInputFilterSensitiveLog: a } = o,
              c = a ?? t.inputFilterSensitiveLog;
            throw (
              i?.error?.({
                clientName: n,
                commandName: s,
                input: c(r.input),
                error: e,
                metadata: e.$metadata,
              }),
              e
            );
          }
        },
        s = { name: "loggerMiddleware", tags: ["LOGGER"], step: "initialize", override: !0 },
        i = (e) => ({
          applyToStack: (e) => {
            e.add(n(), s);
          },
        });
    },
    31643: (e, t, r) => {
      "use strict";
      (r.r(t), r.d(t, { resolveDefaultsModeConfig: () => u }));
      var n = r(24060),
        s = r(74935),
        i = r(68521);
      const o = "AWS_REGION",
        a = "AWS_DEFAULT_REGION",
        c = ["in-region", "cross-region", "mobile", "standard", "legacy"],
        l = {
          environmentVariableSelector: (e) => e.AWS_DEFAULTS_MODE,
          configFileSelector: (e) => e.defaults_mode,
          default: "legacy",
        },
        u = ({ region: e = (0, s.Z)(n.GG), defaultsMode: t = (0, s.Z)(l) } = {}) =>
          (0, i.B)(async () => {
            const r = "function" == typeof t ? await t() : t;
            switch (r?.toLowerCase()) {
              case "auto":
                return d(e);
              case "in-region":
              case "cross-region":
              case "mobile":
              case "standard":
              case "legacy":
                return Promise.resolve(r?.toLocaleLowerCase());
              case void 0:
                return Promise.resolve("legacy");
              default:
                throw new Error(
                  `Invalid parameter for "defaultsMode", expect ${c.join(", ")}, got ${r}`,
                );
            }
          }),
        d = async (e) => {
          if (e) {
            const t = "function" == typeof e ? await e() : e,
              r = await h();
            return r ? (t === r ? "in-region" : "cross-region") : "standard";
          }
          return "standard";
        },
        h = async () => {
          if (process.env.AWS_EXECUTION_ENV && (process.env[o] || process.env[a]))
            return process.env[o] ?? process.env[a];
          if (!process.env.AWS_EC2_METADATA_DISABLED)
            try {
              const { getInstanceMetadataEndpoint: e, httpRequest: t } = await r
                  .e(213)
                  .then(r.bind(r, 95975)),
                n = await e();
              return (await t({ ...n, path: "/latest/meta-data/placement/region" })).toString();
            } catch (e) {}
        };
    },
    34770: (e, t, r) => {
      "use strict";
      (r.r(t),
        r.d(t, {
          contentLengthMiddleware: () => i,
          contentLengthMiddlewareOptions: () => o,
          getContentLengthPlugin: () => a,
        }));
      var n = r(50333);
      const s = "content-length";
      function i(e) {
        return (t) => async (r) => {
          const i = r.request;
          if (n.K.isInstance(i)) {
            const { body: t, headers: r } = i;
            if (
              t &&
              -1 ===
                Object.keys(r)
                  .map((e) => e.toLowerCase())
                  .indexOf(s)
            )
              try {
                const r = e(t);
                i.headers = { ...i.headers, [s]: String(r) };
              } catch (e) {}
          }
          return t({ ...r, request: i });
        };
      }
      const o = {
          step: "build",
          tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
          name: "contentLengthMiddleware",
          override: !0,
        },
        a = (e) => ({
          applyToStack: (t) => {
            t.add(i(e.bodyLengthChecker), o);
          },
        });
    },
    35517: (e, t, r) => {
      "use strict";
      (r.r(t),
        r.d(t, {
          DEFAULT_UA_APP_ID: () => n.b,
          getUserAgentMiddlewareOptions: () => g,
          getUserAgentPlugin: () => m,
          resolveUserAgentConfig: () => n.D,
          userAgentMiddleware: () => f,
        }));
      var n = r(71747),
        s = r(41119),
        i = r(50333),
        o = r(97464),
        a = r(64972);
      const c = /\d{12}\.ddb/;
      const l = "user-agent",
        u = "x-amz-user-agent",
        d = /[^!$%&'*+\-.^_`|~\w]/g,
        h = /[^!$%&'*+\-.^_`|~\w#]/g;
      const f = (e) => (t, r) => async (n) => {
          const { request: d } = n;
          if (!i.K.isInstance(d)) return t(n);
          const { headers: h } = d,
            f = r?.userAgent?.map(p) || [],
            g = (await e.defaultUserAgentProvider()).map(p);
          await (async function (e, t, r) {
            const n = r.request;
            if (
              ("rpc-v2-cbor" === n?.headers?.["smithy-protocol"] &&
                (0, o.setFeature)(e, "PROTOCOL_RPC_V2_CBOR", "M"),
              "function" == typeof t.retryStrategy)
            ) {
              const r = await t.retryStrategy();
              if ("string" == typeof r.mode)
                switch (r.mode) {
                  case a.cm.ADAPTIVE:
                    (0, o.setFeature)(e, "RETRY_MODE_ADAPTIVE", "F");
                    break;
                  case a.cm.STANDARD:
                    (0, o.setFeature)(e, "RETRY_MODE_STANDARD", "E");
                }
            }
            if ("function" == typeof t.accountIdEndpointMode) {
              const r = e.endpointV2;
              switch (
                (String(r?.url?.hostname).match(c) &&
                  (0, o.setFeature)(e, "ACCOUNT_ID_ENDPOINT", "O"),
                await t.accountIdEndpointMode?.())
              ) {
                case "disabled":
                  (0, o.setFeature)(e, "ACCOUNT_ID_MODE_DISABLED", "Q");
                  break;
                case "preferred":
                  (0, o.setFeature)(e, "ACCOUNT_ID_MODE_PREFERRED", "P");
                  break;
                case "required":
                  (0, o.setFeature)(e, "ACCOUNT_ID_MODE_REQUIRED", "R");
              }
            }
            const s = e.__smithy_context?.selectedHttpAuthScheme?.identity;
            if (s?.$source) {
              const t = s;
              t.accountId && (0, o.setFeature)(e, "RESOLVED_ACCOUNT_ID", "T");
              for (const [r, n] of Object.entries(t.$source ?? {})) (0, o.setFeature)(e, r, n);
            }
          })(r, e, n);
          const m = r;
          g.push(
            `m/${(function (e) {
              let t = "";
              for (const r in e) {
                const n = e[r];
                if (!(t.length + n.length + 1 <= 1024)) break;
                t.length ? (t += "," + n) : (t += n);
              }
              return t;
            })(Object.assign({}, r.__smithy_context?.features, m.__aws_sdk_context?.features))}`,
          );
          const y = e?.customUserAgent?.map(p) || [],
            w = await e.userAgentAppId();
          w && g.push(p(["app", `${w}`]));
          const S = (0, s.getUserAgentPrefix)(),
            b = (S ? [S] : []).concat([...g, ...f, ...y]).join(" "),
            E = [...g.filter((e) => e.startsWith("aws-sdk-")), ...y].join(" ");
          return (
            "browser" !== e.runtime
              ? (E && (h[u] = h[u] ? `${h[l]} ${E}` : E), (h[l] = b))
              : (h[u] = b),
            t({ ...n, request: d })
          );
        },
        p = (e) => {
          const t = e[0]
              .split("/")
              .map((e) => e.replace(d, "-"))
              .join("/"),
            r = e[1]?.replace(h, "-"),
            n = t.indexOf("/"),
            s = t.substring(0, n);
          let i = t.substring(n + 1);
          return (
            "api" === s && (i = i.toLowerCase()),
            [s, i, r]
              .filter((e) => e && e.length > 0)
              .reduce((e, t, r) => {
                switch (r) {
                  case 0:
                    return t;
                  case 1:
                    return `${e}/${t}`;
                  default:
                    return `${e}#${t}`;
                }
              }, "")
          );
        },
        g = {
          name: "getUserAgentMiddleware",
          step: "build",
          priority: "low",
          tags: ["SET_USER_AGENT", "USER_AGENT"],
          override: !0,
        },
        m = (e) => ({
          applyToStack: (t) => {
            t.add(f(e), g);
          },
        });
    },
    36419: (e, t, r) => {
      "use strict";
      r.d(t, { Q: () => s });
      var n = r(41011);
      class s {
        static setTimeoutFn = setTimeout;
        beta;
        minCapacity;
        minFillRate;
        scaleConstant;
        smooth;
        enabled = !1;
        availableTokens = 0;
        lastMaxRate = 0;
        measuredTxRate = 0;
        requestCount = 0;
        fillRate;
        lastThrottleTime;
        lastTimestamp = 0;
        lastTxRateBucket;
        maxCapacity;
        timeWindow = 0;
        constructor(e) {
          ((this.beta = e?.beta ?? 0.7),
            (this.minCapacity = e?.minCapacity ?? 1),
            (this.minFillRate = e?.minFillRate ?? 0.5),
            (this.scaleConstant = e?.scaleConstant ?? 0.4),
            (this.smooth = e?.smooth ?? 0.8),
            (this.lastThrottleTime = this.getCurrentTimeInSeconds()),
            (this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds())),
            (this.fillRate = this.minFillRate),
            (this.maxCapacity = this.minCapacity));
        }
        async getSendToken() {
          return this.acquireTokenBucket(1);
        }
        updateClientSendingRate(e) {
          let t;
          this.updateMeasuredRate();
          const r = e;
          if ("THROTTLING" === r?.errorType || (0, n.Qb)(r?.error ?? e)) {
            const e = this.enabled
              ? Math.min(this.measuredTxRate, this.fillRate)
              : this.measuredTxRate;
            ((this.lastMaxRate = e),
              this.calculateTimeWindow(),
              (this.lastThrottleTime = this.getCurrentTimeInSeconds()),
              (t = this.cubicThrottle(e)),
              this.enableTokenBucket());
          } else
            (this.calculateTimeWindow(), (t = this.cubicSuccess(this.getCurrentTimeInSeconds())));
          const s = Math.min(t, 2 * this.measuredTxRate);
          this.updateTokenBucketRate(s);
        }
        getCurrentTimeInSeconds() {
          return Date.now() / 1e3;
        }
        async acquireTokenBucket(e) {
          if (this.enabled) {
            for (this.refillTokenBucket(); e > this.availableTokens;) {
              const t = ((e - this.availableTokens) / this.fillRate) * 1e3;
              (await new Promise((e) => s.setTimeoutFn(e, t)), this.refillTokenBucket());
            }
            this.availableTokens = this.availableTokens - e;
          }
        }
        refillTokenBucket() {
          const e = this.getCurrentTimeInSeconds();
          if (!this.lastTimestamp) return void (this.lastTimestamp = e);
          const t = (e - this.lastTimestamp) * this.fillRate;
          ((this.availableTokens = Math.min(this.maxCapacity, this.availableTokens + t)),
            (this.lastTimestamp = e));
        }
        calculateTimeWindow() {
          this.timeWindow = this.getPrecise(
            Math.pow((this.lastMaxRate * (1 - this.beta)) / this.scaleConstant, 1 / 3),
          );
        }
        cubicThrottle(e) {
          return this.getPrecise(e * this.beta);
        }
        cubicSuccess(e) {
          return this.getPrecise(
            this.scaleConstant * Math.pow(e - this.lastThrottleTime - this.timeWindow, 3) +
              this.lastMaxRate,
          );
        }
        enableTokenBucket() {
          this.enabled = !0;
        }
        updateTokenBucketRate(e) {
          (this.refillTokenBucket(),
            (this.fillRate = Math.max(e, this.minFillRate)),
            (this.maxCapacity = Math.max(e, this.minCapacity)),
            (this.availableTokens = Math.min(this.availableTokens, this.maxCapacity)));
        }
        updateMeasuredRate() {
          const e = this.getCurrentTimeInSeconds(),
            t = Math.floor(2 * e) / 2;
          if ((this.requestCount++, t > this.lastTxRateBucket)) {
            const e = this.requestCount / (t - this.lastTxRateBucket);
            ((this.measuredTxRate = this.getPrecise(
              e * this.smooth + this.measuredTxRate * (1 - this.smooth),
            )),
              (this.requestCount = 0),
              (this.lastTxRateBucket = t));
          }
        }
        getPrecise(e) {
          return parseFloat(e.toFixed(8));
        }
      }
    },
    37060: (e, t, r) => {
      "use strict";
      r.d(t, { H: () => s });
      var n = r(88141);
      const s = ({ headers: e }, t, r) => {
        const s = {};
        for (const i of Object.keys(e).sort()) {
          if (null == e[i]) continue;
          const o = i.toLowerCase();
          ((o in n.SN || t?.has(o) || n.Ir.test(o) || n.lP.test(o)) && (!r || (r && !r.has(o)))) ||
            (s[o] = e[i].trim().replace(/\s+/g, " "));
        }
        return s;
      };
    },
    39022: (e, t, r) => {
      "use strict";
      (r.r(t),
        r.d(t, {
          AdaptiveRetryStrategy: () => S,
          CONFIG_MAX_ATTEMPTS: () => T,
          CONFIG_RETRY_MODE: () => _,
          ENV_MAX_ATTEMPTS: () => x,
          ENV_RETRY_MODE: () => C,
          NODE_MAX_ATTEMPT_CONFIG_OPTIONS: () => A,
          NODE_RETRY_MODE_CONFIG_OPTIONS: () => R,
          StandardRetryStrategy: () => y,
          defaultDelayDecider: () => g,
          defaultRetryDecider: () => m,
          getOmitRetryHeadersPlugin: () => k,
          getRetryAfterHint: () => L,
          getRetryPlugin: () => q,
          omitRetryHeadersMiddleware: () => I,
          omitRetryHeadersMiddlewareOptions: () => D,
          resolveRetryConfig: () => N,
          retryMiddleware: () => U,
          retryMiddlewareOptions: () => H,
        }));
      var n = r(36419),
        s = r(64972),
        i = r(50333),
        o = r(7369),
        a = r(41011),
        c = r(51181),
        l = r(76982),
        u = r.n(l);
      const d = u().randomUUID.bind(u()),
        h = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0")),
        f = () => {
          if (d) return d();
          const e = new Uint8Array(16);
          return (
            crypto.getRandomValues(e),
            (e[6] = (15 & e[6]) | 64),
            (e[8] = (63 & e[8]) | 128),
            h[e[0]] +
              h[e[1]] +
              h[e[2]] +
              h[e[3]] +
              "-" +
              h[e[4]] +
              h[e[5]] +
              "-" +
              h[e[6]] +
              h[e[7]] +
              "-" +
              h[e[8]] +
              h[e[9]] +
              "-" +
              h[e[10]] +
              h[e[11]] +
              h[e[12]] +
              h[e[13]] +
              h[e[14]] +
              h[e[15]]
          );
        },
        p = (e) =>
          e instanceof Error
            ? e
            : e instanceof Object
              ? Object.assign(new Error(), e)
              : "string" == typeof e
                ? new Error(e)
                : new Error(`AWS SDK error wrapper for ${e}`),
        g = (e, t) => Math.floor(Math.min(c.G8, Math.random() * 2 ** t * e)),
        m = (e) => !!e && ((0, a.S0)(e) || (0, a.h5)(e) || (0, a.Qb)(e) || (0, a.bV)(e));
      class y {
        maxAttemptsProvider;
        retryDecider;
        delayDecider;
        retryQuota;
        mode = s.cm.STANDARD;
        constructor(e, t) {
          ((this.maxAttemptsProvider = e),
            (this.retryDecider = t?.retryDecider ?? m),
            (this.delayDecider = t?.delayDecider ?? g),
            (this.retryQuota =
              t?.retryQuota ??
              ((e, t) => {
                const r = e,
                  n = t?.noRetryIncrement ?? c.XP,
                  s = t?.retryCost ?? c.XS,
                  i = t?.timeoutRetryCost ?? c.Rn;
                let o = e;
                const a = (e) => ("TimeoutError" === e.name ? i : s),
                  l = (e) => a(e) <= o;
                return Object.freeze({
                  hasRetryTokens: l,
                  retrieveRetryTokens: (e) => {
                    if (!l(e)) throw new Error("No retry token available");
                    const t = a(e);
                    return ((o -= t), t);
                  },
                  releaseRetryTokens: (e) => {
                    ((o += e ?? n), (o = Math.min(o, r)));
                  },
                });
              })(c.Df)));
        }
        shouldRetry(e, t, r) {
          return t < r && this.retryDecider(e) && this.retryQuota.hasRetryTokens(e);
        }
        async getMaxAttempts() {
          let e;
          try {
            e = await this.maxAttemptsProvider();
          } catch (t) {
            e = s.Gz;
          }
          return e;
        }
        async retry(e, t, r) {
          let n,
            s = 0,
            o = 0;
          const l = await this.getMaxAttempts(),
            { request: u } = t;
          for (i.K.isInstance(u) && (u.headers[c.l5] = f()); ;)
            try {
              (i.K.isInstance(u) && (u.headers[c.ok] = `attempt=${s + 1}; max=${l}`),
                r?.beforeRequest && (await r.beforeRequest()));
              const { response: a, output: d } = await e(t);
              return (
                r?.afterRequest && r.afterRequest(a),
                this.retryQuota.releaseRetryTokens(n),
                (d.$metadata.attempts = s + 1),
                (d.$metadata.totalRetryDelay = o),
                { response: a, output: d }
              );
            } catch (e) {
              const t = p(e);
              if ((s++, this.shouldRetry(t, s, l))) {
                n = this.retryQuota.retrieveRetryTokens(t);
                const e = this.delayDecider((0, a.Qb)(t) ? c.jh : c.bp, s),
                  r = w(t.$response),
                  i = Math.max(r || 0, e);
                ((o += i), await new Promise((e) => setTimeout(e, i)));
                continue;
              }
              throw (
                t.$metadata || (t.$metadata = {}),
                (t.$metadata.attempts = s),
                (t.$metadata.totalRetryDelay = o),
                t
              );
            }
        }
      }
      const w = (e) => {
        if (!o.c.isInstance(e)) return;
        const t = Object.keys(e.headers).find((e) => "retry-after" === e.toLowerCase());
        if (!t) return;
        const r = e.headers[t],
          n = Number(r);
        if (!Number.isNaN(n)) return 1e3 * n;
        return new Date(r).getTime() - Date.now();
      };
      class S extends y {
        rateLimiter;
        constructor(e, t) {
          const { rateLimiter: r, ...i } = t ?? {};
          (super(e, i), (this.rateLimiter = r ?? new n.Q()), (this.mode = s.cm.ADAPTIVE));
        }
        async retry(e, t) {
          return super.retry(e, t, {
            beforeRequest: async () => this.rateLimiter.getSendToken(),
            afterRequest: (e) => {
              this.rateLimiter.updateClientSendingRate(e);
            },
          });
        }
      }
      var b = r(90570),
        E = r(3745),
        v = r(23694);
      const x = "AWS_MAX_ATTEMPTS",
        T = "max_attempts",
        A = {
          environmentVariableSelector: (e) => {
            const t = e[x];
            if (!t) return;
            const r = parseInt(t);
            if (Number.isNaN(r))
              throw new Error(`Environment variable ${x} mast be a number, got "${t}"`);
            return r;
          },
          configFileSelector: (e) => {
            const t = e[T];
            if (!t) return;
            const r = parseInt(t);
            if (Number.isNaN(r))
              throw new Error(`Shared config file entry ${T} mast be a number, got "${t}"`);
            return r;
          },
          default: s.Gz,
        },
        N = (e) => {
          const { retryStrategy: t, retryMode: r } = e,
            n = (0, b.t)(e.maxAttempts ?? s.Gz);
          let i = t ? Promise.resolve(t) : void 0;
          return Object.assign(e, {
            maxAttempts: n,
            retryStrategy: () =>
              (i ??= (async () =>
                (await (0, b.t)(r)()) === s.cm.ADAPTIVE ? new E.Y(n) : new v.r(n))()),
          });
        },
        C = "AWS_RETRY_MODE",
        _ = "retry_mode",
        R = {
          environmentVariableSelector: (e) => e[C],
          configFileSelector: (e) => e[_],
          default: s.L0,
        },
        I = () => (e) => async (t) => {
          const { request: r } = t;
          return (i.K.isInstance(r) && (delete r.headers[c.l5], delete r.headers[c.ok]), e(t));
        },
        D = {
          name: "omitRetryHeadersMiddleware",
          tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
          relation: "before",
          toMiddleware: "awsAuthMiddleware",
          override: !0,
        },
        k = (e) => ({
          applyToStack: (e) => {
            e.addRelativeTo(I(), D);
          },
        });
      var O = r(65844),
        M = r(2203);
      const P = (e) =>
        e?.body instanceof M.Readable ||
        ("undefined" != typeof ReadableStream && e?.body instanceof ReadableStream);
      var $ = r(96851);
      function j(e, t) {
        if (o.c.isInstance(e))
          for (const r of Object.keys(e.headers)) {
            const n = r.toLowerCase();
            if ("retry-after" === n) {
              const n = e.headers[r];
              let s = NaN;
              if (n.endsWith("GMT"))
                try {
                  s = ((0, $.parseRfc7231DateTime)(n).getTime() - Date.now()) / 1e3;
                } catch (e) {
                  (t?.trace?.("Failed to parse retry-after header"), t?.trace?.(e));
                }
              else
                n.match(/ GMT, ((\d+)|(\d+\.\d+))$/)
                  ? (s = Number(n.match(/ GMT, ([\d.]+)$/)?.[1]))
                  : n.match(/^((\d+)|(\d+\.\d+))$/)
                    ? (s = Number(n))
                    : Date.parse(n) >= Date.now() && (s = (Date.parse(n) - Date.now()) / 1e3);
              if (isNaN(s)) return;
              return new Date(Date.now() + 1e3 * s);
            }
            if ("x-amz-retry-after" === n) {
              const n = e.headers[r],
                s = Number(n);
              return isNaN(s)
                ? void t?.trace?.(`Failed to parse x-amz-retry-after=${n}`)
                : new Date(Date.now() + s);
            }
          }
      }
      function L(e, t) {
        return j(e, t);
      }
      const U = (e) => (t, r) => async (n) => {
          let s = await e.retryStrategy();
          const o = await e.maxAttempts();
          if (!F(s))
            return (
              s?.mode && (r.userAgent = [...(r.userAgent || []), ["cfg/retry-mode", s.mode]]),
              s.retry(t, n)
            );
          {
            let a = await s.acquireInitialRetryToken(
                (r.partition_id ?? "") + (r.__retryLongPoll ? ":longpoll" : ""),
              ),
              l = new Error(),
              u = 0,
              d = 0;
            const { request: h } = n,
              g = i.K.isInstance(h);
            for (g && (h.headers[c.l5] = f()); ;)
              try {
                g && (h.headers[c.ok] = `attempt=${u + 1}; max=${o}`);
                const { response: e, output: r } = await t(n);
                return (
                  s.recordSuccess(a),
                  (r.$metadata.attempts = u + 1),
                  (r.$metadata.totalRetryDelay = d),
                  { response: e, output: r }
                );
              } catch (t) {
                const n = z(t, e.logger);
                if (((l = p(t)), g && P(h)))
                  throw (
                    (r.logger instanceof O.N ? console : r.logger)?.warn(
                      "An error was encountered in a non-retryable streaming request.",
                    ),
                    l
                  );
                try {
                  a = await s.refreshRetryTokenForRetry(a, n);
                } catch (e) {
                  throw (
                    "number" == typeof e.$backoff && (await B(e.$backoff)),
                    l.$metadata || (l.$metadata = {}),
                    (l.$metadata.attempts = u + 1),
                    (l.$metadata.totalRetryDelay = d),
                    l
                  );
                }
                u = a.getRetryCount();
                const i = a.getRetryDelay();
                ((d += i), await B(i));
              }
          }
        },
        B = (e) => new Promise((t) => setTimeout(t, e)),
        F = (e) =>
          void 0 !== e.acquireInitialRetryToken &&
          void 0 !== e.refreshRetryTokenForRetry &&
          void 0 !== e.recordSuccess,
        z = (e, t) => {
          const r = { error: e, errorType: V(e) },
            n = j(e.$response, t);
          return (n && (r.retryAfterHint = n), r);
        },
        V = (e) =>
          (0, a.Qb)(e)
            ? "THROTTLING"
            : (0, a.bV)(e)
              ? "TRANSIENT"
              : (0, a.GQ)(e)
                ? "SERVER_ERROR"
                : "CLIENT_ERROR",
        H = {
          name: "retryMiddleware",
          tags: ["RETRY"],
          step: "finalizeRequest",
          priority: "high",
          override: !0,
        },
        q = (e) => ({
          applyToStack: (t) => {
            t.add(U(e), H);
          },
        });
    },
    41011: (e, t, r) => {
      "use strict";
      r.d(t, { h5: () => u, S0: () => l, GQ: () => f, Qb: () => d, bV: () => h });
      const n = [
          "AuthFailure",
          "InvalidSignatureException",
          "RequestExpired",
          "RequestInTheFuture",
          "RequestTimeTooSkewed",
          "SignatureDoesNotMatch",
        ],
        s = [
          "BandwidthLimitExceeded",
          "EC2ThrottledException",
          "LimitExceededException",
          "PriorRequestNotComplete",
          "ProvisionedThroughputExceededException",
          "RequestLimitExceeded",
          "RequestThrottled",
          "RequestThrottledException",
          "SlowDown",
          "ThrottledException",
          "Throttling",
          "ThrottlingException",
          "TooManyRequestsException",
          "TransactionInProgressException",
        ],
        i = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"],
        o = [500, 502, 503, 504],
        a = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"],
        c = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND"],
        l = (e) => void 0 !== e?.$retryable,
        u = (e) => n.includes(e.name),
        d = (e) =>
          429 === e.$metadata?.httpStatusCode ||
          s.includes(e.name) ||
          1 == e.$retryable?.throttling,
        h = (e, t = 0) =>
          l(e) ||
          ((e) => e.$metadata?.clockSkewCorrected)(e) ||
          ("InvalidSignatureException" === e.name && e.message?.includes("Signature expired")) ||
          i.includes(e.name) ||
          a.includes(e?.code || "") ||
          c.includes(e?.code || "") ||
          o.includes(e.$metadata?.httpStatusCode || 0) ||
          ((e) => {
            const t = new Set([
              "Failed to fetch",
              "NetworkError when attempting to fetch resource",
              "The Internet connection appears to be offline",
              "Load failed",
              "Network request failed",
            ]);
            return !!(e && e instanceof TypeError) && t.has(e.message);
          })(e) ||
          (function (e) {
            return (
              "ERR_HTTP2_STREAM_ERROR" === e.code && e.message.includes("NGHTTP2_REFUSED_STREAM")
            );
          })(e) ||
          (void 0 !== e.cause && t <= 10 && h(e.cause, t + 1)),
        f = (e) => {
          if (void 0 !== e.$metadata?.httpStatusCode) {
            const t = e.$metadata.httpStatusCode;
            return 500 <= t && t <= 599 && !h(e);
          }
          return !1;
        };
    },
    41119: (e, t, r) => {
      "use strict";
      (r.r(t),
        r.d(t, {
          EndpointError: () => S.c,
          awsEndpointFunctions: () => p,
          getUserAgentPrefix: () => f,
          isIpAddress: () => i.o,
          partition: () => u,
          resolveDefaultAwsRegionalEndpointsConfig: () => m,
          resolveEndpoint: () => w.s,
          setPartitionInfo: () => d,
          toEndpointV1: () => y,
          useDefaultPartitionInfo: () => h,
        }));
      var n = r(6685),
        s = r(62340),
        i = r(3871);
      const o = (e, t = !1) => {
          if (t) {
            for (const t of e.split(".")) if (!o(t)) return !1;
            return !0;
          }
          return (
            !!(0, s.X)(e) &&
            !(e.length < 3 || e.length > 63) &&
            e === e.toLowerCase() &&
            !(0, i.o)(e)
          );
        },
        a = JSON.parse(
          '{"partitions":[{"id":"aws","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-east-1","name":"aws","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^(us|eu|ap|sa|ca|me|af|il|mx)\\\\-\\\\w+\\\\-\\\\d+$","regions":{"af-south-1":{"description":"Africa (Cape Town)"},"ap-east-1":{"description":"Asia Pacific (Hong Kong)"},"ap-east-2":{"description":"Asia Pacific (Taipei)"},"ap-northeast-1":{"description":"Asia Pacific (Tokyo)"},"ap-northeast-2":{"description":"Asia Pacific (Seoul)"},"ap-northeast-3":{"description":"Asia Pacific (Osaka)"},"ap-south-1":{"description":"Asia Pacific (Mumbai)"},"ap-south-2":{"description":"Asia Pacific (Hyderabad)"},"ap-southeast-1":{"description":"Asia Pacific (Singapore)"},"ap-southeast-2":{"description":"Asia Pacific (Sydney)"},"ap-southeast-3":{"description":"Asia Pacific (Jakarta)"},"ap-southeast-4":{"description":"Asia Pacific (Melbourne)"},"ap-southeast-5":{"description":"Asia Pacific (Malaysia)"},"ap-southeast-6":{"description":"Asia Pacific (New Zealand)"},"ap-southeast-7":{"description":"Asia Pacific (Thailand)"},"aws-global":{"description":"aws global region"},"ca-central-1":{"description":"Canada (Central)"},"ca-west-1":{"description":"Canada West (Calgary)"},"eu-central-1":{"description":"Europe (Frankfurt)"},"eu-central-2":{"description":"Europe (Zurich)"},"eu-north-1":{"description":"Europe (Stockholm)"},"eu-south-1":{"description":"Europe (Milan)"},"eu-south-2":{"description":"Europe (Spain)"},"eu-west-1":{"description":"Europe (Ireland)"},"eu-west-2":{"description":"Europe (London)"},"eu-west-3":{"description":"Europe (Paris)"},"il-central-1":{"description":"Israel (Tel Aviv)"},"me-central-1":{"description":"Middle East (UAE)"},"me-south-1":{"description":"Middle East (Bahrain)"},"mx-central-1":{"description":"Mexico (Central)"},"sa-east-1":{"description":"South America (Sao Paulo)"},"us-east-1":{"description":"US East (N. Virginia)"},"us-east-2":{"description":"US East (Ohio)"},"us-west-1":{"description":"US West (N. California)"},"us-west-2":{"description":"US West (Oregon)"}}},{"id":"aws-cn","outputs":{"dnsSuffix":"amazonaws.com.cn","dualStackDnsSuffix":"api.amazonwebservices.com.cn","implicitGlobalRegion":"cn-northwest-1","name":"aws-cn","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^cn\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-cn-global":{"description":"aws-cn global region"},"cn-north-1":{"description":"China (Beijing)"},"cn-northwest-1":{"description":"China (Ningxia)"}}},{"id":"aws-eusc","outputs":{"dnsSuffix":"amazonaws.eu","dualStackDnsSuffix":"api.amazonwebservices.eu","implicitGlobalRegion":"eusc-de-east-1","name":"aws-eusc","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^eusc\\\\-(de)\\\\-\\\\w+\\\\-\\\\d+$","regions":{"eusc-de-east-1":{"description":"AWS European Sovereign Cloud (Germany)"}}},{"id":"aws-iso","outputs":{"dnsSuffix":"c2s.ic.gov","dualStackDnsSuffix":"api.aws.ic.gov","implicitGlobalRegion":"us-iso-east-1","name":"aws-iso","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-iso\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-global":{"description":"aws-iso global region"},"us-iso-east-1":{"description":"US ISO East"},"us-iso-west-1":{"description":"US ISO WEST"}}},{"id":"aws-iso-b","outputs":{"dnsSuffix":"sc2s.sgov.gov","dualStackDnsSuffix":"api.aws.scloud","implicitGlobalRegion":"us-isob-east-1","name":"aws-iso-b","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-isob\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-b-global":{"description":"aws-iso-b global region"},"us-isob-east-1":{"description":"US ISOB East (Ohio)"},"us-isob-west-1":{"description":"US ISOB West"}}},{"id":"aws-iso-e","outputs":{"dnsSuffix":"cloud.adc-e.uk","dualStackDnsSuffix":"api.cloud-aws.adc-e.uk","implicitGlobalRegion":"eu-isoe-west-1","name":"aws-iso-e","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^eu\\\\-isoe\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-e-global":{"description":"aws-iso-e global region"},"eu-isoe-west-1":{"description":"EU ISOE West"}}},{"id":"aws-iso-f","outputs":{"dnsSuffix":"csp.hci.ic.gov","dualStackDnsSuffix":"api.aws.hci.ic.gov","implicitGlobalRegion":"us-isof-south-1","name":"aws-iso-f","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-isof\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-f-global":{"description":"aws-iso-f global region"},"us-isof-east-1":{"description":"US ISOF EAST"},"us-isof-south-1":{"description":"US ISOF SOUTH"}}},{"id":"aws-us-gov","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-gov-west-1","name":"aws-us-gov","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-gov\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-us-gov-global":{"description":"aws-us-gov global region"},"us-gov-east-1":{"description":"AWS GovCloud (US-East)"},"us-gov-west-1":{"description":"AWS GovCloud (US-West)"}}}],"version":"1.1"}',
        );
      let c = a,
        l = "";
      const u = (e) => {
          const { partitions: t } = c;
          for (const r of t) {
            const { regions: t, outputs: n } = r;
            for (const [r, s] of Object.entries(t)) if (r === e) return { ...n, ...s };
          }
          for (const r of t) {
            const { regionRegex: t, outputs: n } = r;
            if (new RegExp(t).test(e)) return { ...n };
          }
          const r = t.find((e) => "aws" === e.id);
          if (!r)
            throw new Error(
              "Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.",
            );
          return { ...r.outputs };
        },
        d = (e, t = "") => {
          ((c = e), (l = t));
        },
        h = () => {
          d(a, "");
        },
        f = () => l,
        p = {
          isVirtualHostableS3Bucket: o,
          parseArn: (e) => {
            const t = e.split(":");
            if (t.length < 6) return null;
            const [r, n, s, i, o, ...a] = t;
            if ("arn" !== r || "" === n || "" === s || "" === a.join(":")) return null;
            return {
              partition: n,
              service: s,
              region: i,
              accountId: o,
              resourceId: a.map((e) => e.split("/")).flat(),
            };
          },
          partition: u,
        };
      n.m.aws = p;
      var g = r(53043);
      const m = (e) => {
          if ("function" != typeof e.endpointProvider)
            throw new Error(
              "@aws-sdk/util-endpoint - endpointProvider and endpoint missing in config for this client.",
            );
          const { endpoint: t } = e;
          return (
            void 0 === t &&
              (e.endpoint = async () =>
                y(
                  e.endpointProvider(
                    {
                      Region: "function" == typeof e.region ? await e.region() : e.region,
                      UseDualStack:
                        "function" == typeof e.useDualstackEndpoint
                          ? await e.useDualstackEndpoint()
                          : e.useDualstackEndpoint,
                      UseFIPS:
                        "function" == typeof e.useFipsEndpoint
                          ? await e.useFipsEndpoint()
                          : e.useFipsEndpoint,
                      Endpoint: void 0,
                    },
                    { logger: e.logger },
                  ),
                )),
            e
          );
        },
        y = (e) => (0, g.parseUrl)(e.url);
      var w = r(14074),
        S = r(93451);
    },
    41741: (e, t, r) => {
      "use strict";
      r.d(t, { w: () => h, $: () => g });
      var n = r(96851),
        s = r(73931),
        i = r(94804);
      const o = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
      var a = r(86639),
        c = r(44708),
        l = r.n(c),
        u = r(70904);
      var d = r(29428);
      const h = 0;
      let f, p;
      class g {
        config;
        configProvider;
        socketWarningTimestamp = 0;
        externalAgent = !1;
        metadata = { handlerProtocol: "http/1.1" };
        static create(e) {
          return "function" == typeof e?.handle ? e : new g(e);
        }
        static checkSocketUsage(e, t, r = console) {
          const { sockets: s, requests: i, maxSockets: o } = e;
          if ("number" != typeof o || o === 1 / 0) return t;
          if (Date.now() - 15e3 < t) return t;
          if (s && i)
            for (const e in s) {
              if (!(0, n.hasOwn)(s, e)) continue;
              const t = s[e]?.length ?? 0,
                a = i[e]?.length ?? 0;
              if (t >= o && a >= 2 * o)
                return (
                  r?.warn?.(
                    `@smithy/node-http-handler:WARN - socket usage at capacity=${t} and ${a} additional requests are enqueued.\nSee https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html\nor increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`,
                  ),
                  Date.now()
                );
            }
          return t;
        }
        constructor(e) {
          this.configProvider = new Promise((t, r) => {
            "function" == typeof e
              ? e()
                  .then((e) => {
                    t(this.resolveDefaultConfig(e));
                  })
                  .catch(r)
              : t(this.resolveDefaultConfig(e));
          });
        }
        destroy() {
          (this.config?.httpAgent?.destroy(), this.config?.httpsAgent?.destroy());
        }
        async handle(e, { abortSignal: t, requestTimeout: r } = {}) {
          this.config || (this.config = await this.configProvider);
          const n = this.config,
            c = n.logger,
            h = "https:" === e.protocol;
          return (
            h ||
              this.config.httpAgent ||
              (this.config.httpAgent = await this.config.httpAgentProvider()),
            new Promise((m, y) => {
              let w,
                S = -1,
                b = -1,
                E = -1,
                v = -1,
                x = -1;
              const T = () => {
                  (u.N.clearTimeout(S),
                    u.N.clearTimeout(b),
                    u.N.clearTimeout(E),
                    u.N.clearTimeout(v),
                    u.N.clearTimeout(x));
                },
                A = async (e) => {
                  (await w, T(), y(e));
                };
              if (t?.aborted) {
                const e = (0, i.F)(t);
                return void A(e);
              }
              const N = e.headers,
                C = !!N && "100-continue" === (N.Expect ?? N.expect);
              let _ = h ? n.httpsAgent : n.httpAgent;
              (C &&
                !this.externalAgent &&
                (_ = new (h ? l().Agent : f)({ keepAlive: !1, maxSockets: 1 / 0 })),
                (S = u.N.setTimeout(
                  () => {
                    this.socketWarningTimestamp = g.checkSocketUsage(
                      _,
                      this.socketWarningTimestamp,
                      c,
                    );
                  },
                  n.socketAcquisitionWarningTimeout ??
                    (n.requestTimeout ?? 2e3) + (n.connectionTimeout ?? 1e3),
                )));
              const R = e.query ? (0, s.buildQueryString)(e.query) : "";
              let I;
              if (null != e.username || null != e.password) {
                I = `${e.username ?? ""}:${e.password ?? ""}`;
              }
              let D = e.path;
              (R && (D += `?${R}`), e.fragment && (D += `#${e.fragment}`));
              let k = e.hostname ?? "";
              k = "[" === k[0] && k.endsWith("]") ? e.hostname.slice(1, -1) : e.hostname;
              const O = {
                  headers: e.headers,
                  host: k,
                  method: e.method,
                  path: D,
                  port: e.port,
                  agent: _,
                  auth: I,
                },
                M = (h ? l().request : p)(O, (e) => {
                  (async (e) => {
                    (await w, T(), m(e));
                  })({
                    response: new s.HttpResponse({
                      statusCode: e.statusCode || -1,
                      reason: e.statusMessage,
                      headers: (0, a.u)(e.headers),
                      body: e,
                    }),
                  });
                });
              if (
                (M.on("error", (e) => {
                  o.includes(e.code) ? A(Object.assign(e, { name: "TimeoutError" })) : A(e);
                }),
                t)
              ) {
                const e = () => {
                  M.destroy();
                  const e = (0, i.F)(t);
                  A(e);
                };
                if ("function" == typeof t.addEventListener) {
                  const r = t;
                  (r.addEventListener("abort", e, { once: !0 }),
                    M.once("close", () => r.removeEventListener("abort", e)));
                } else t.onabort = e;
              }
              const P = r ?? n.requestTimeout;
              ((b = ((e, t, r = 0) => {
                if (!r) return -1;
                const n = (n) => {
                  const s = u.N.setTimeout(() => {
                      (e.destroy(),
                        t(
                          Object.assign(
                            new Error(
                              `@smithy/node-http-handler - the request socket did not establish a connection with the server within the configured timeout of ${r} ms.`,
                            ),
                            { name: "TimeoutError" },
                          ),
                        ));
                    }, r - n),
                    i = (e) => {
                      e?.connecting
                        ? e.on("connect", () => {
                            u.N.clearTimeout(s);
                          })
                        : u.N.clearTimeout(s);
                    };
                  e.socket ? i(e.socket) : e.on("socket", i);
                };
                return r < 2e3 ? (n(0), 0) : u.N.setTimeout(n.bind(null, 1e3), 1e3);
              })(M, A, n.connectionTimeout)),
                (E = ((e, t, r = 0, n, s) =>
                  r
                    ? u.N.setTimeout(() => {
                        let i = `@smithy/node-http-handler - [${n ? "ERROR" : "WARN"}] a request has exceeded the configured ${r} ms requestTimeout.`;
                        if (n) {
                          const r = Object.assign(new Error(i), {
                            name: "TimeoutError",
                            code: "ETIMEDOUT",
                          });
                          (e.destroy(r), t(r));
                        } else
                          ((i +=
                            " Init client requestHandler with throwOnRequestTimeout=true to turn this into an error."),
                            s?.warn?.(i));
                      }, r)
                    : -1)(M, A, P, n.throwOnRequestTimeout, c ?? console)),
                (v = ((e, t, r = 0) => {
                  const n = (n) => {
                    const s = r - n,
                      i = () => {
                        (e.destroy(),
                          t(
                            Object.assign(
                              new Error(
                                `@smithy/node-http-handler - the request socket timed out after ${r} ms of inactivity (configured by client requestHandler).`,
                              ),
                              { name: "TimeoutError" },
                            ),
                          ));
                      };
                    e.socket
                      ? (e.socket.setTimeout(s, i),
                        e.on("close", () => e.socket?.removeListener("timeout", i)))
                      : e.setTimeout(s, i);
                  };
                  return 0 < r && r < 6e3
                    ? (n(0), 0)
                    : u.N.setTimeout(n.bind(null, 0 === r ? 0 : 3e3), 3e3);
                })(M, A, n.socketTimeout)));
              const $ = O.agent;
              ("object" == typeof $ &&
                "keepAlive" in $ &&
                (x = ((e, { keepAlive: t, keepAliveMsecs: r }, n = 3e3) => {
                  if (!0 !== t) return -1;
                  const s = () => {
                    e.socket
                      ? e.socket.setKeepAlive(t, r || 0)
                      : e.on("socket", (e) => {
                          e.setKeepAlive(t, r || 0);
                        });
                  };
                  return 0 === n ? (s(), 0) : u.N.setTimeout(s, n);
                })(M, { keepAlive: $.keepAlive, keepAliveMsecs: $.keepAliveMsecs })),
                (w = (0, d.f)(M, e, P, this.externalAgent).catch((e) => (T(), y(e)))));
            })
          );
        }
        updateHttpClientConfig(e, t) {
          ((this.config = void 0),
            (this.configProvider = this.configProvider.then((r) =>
              e === Symbol.for("logger") ? { ...r, logger: r.logger ?? t } : { ...r, [e]: t },
            )));
        }
        httpHandlerConfigs() {
          return this.config ?? {};
        }
        resolveDefaultConfig(e) {
          const {
              requestTimeout: t,
              connectionTimeout: n,
              socketTimeout: s,
              socketAcquisitionWarningTimeout: i,
              httpAgent: o,
              httpsAgent: a,
              throwOnRequestTimeout: c,
              logger: u,
            } = e || {},
            d = !0;
          return {
            connectionTimeout: n,
            requestTimeout: t,
            socketTimeout: s,
            socketAcquisitionWarningTimeout: i,
            throwOnRequestTimeout: c,
            httpAgentProvider: async () => {
              const e = await Promise.resolve().then(r.t.bind(r, 37067, 23)),
                { Agent: t, request: n } = e.default ?? e;
              return (
                (p = n),
                (f = t),
                o instanceof f || "function" == typeof o?.destroy
                  ? ((this.externalAgent = !0), o)
                  : new f({ keepAlive: d, maxSockets: 50, ...o })
              );
            },
            httpsAgent: (() =>
              a instanceof l().Agent || "function" == typeof a?.destroy
                ? ((this.externalAgent = !0), a)
                : new (l().Agent)({ keepAlive: d, maxSockets: 50, ...a }))(),
            logger: u,
          };
        }
      }
    },
    43409: (e, t, r) => {
      "use strict";
      (r.r(t), r.d(t, { XmlNode: () => l, XmlText: () => c, parseXML: () => We }));
      const n = /[&<>"]/g,
        s = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
      function i(e) {
        return e.replace(n, (e) => s[e]);
      }
      const o = /[&"'<>\r\n\u0085\u2028]/g,
        a = {
          "&": "&amp;",
          '"': "&quot;",
          "'": "&apos;",
          "<": "&lt;",
          ">": "&gt;",
          "\r": "&#x0D;",
          "\n": "&#x0A;",
          "": "&#x85;",
          "\u2028": "&#x2028;",
        };
      class c {
        value;
        constructor(e) {
          this.value = e;
        }
        toString() {
          return ("" + this.value).replace(o, (e) => a[e]);
        }
      }
      class l {
        name;
        children;
        attributes = {};
        static of(e, t, r) {
          const n = new l(e);
          return (void 0 !== t && n.addChildNode(new c(t)), void 0 !== r && n.withName(r), n);
        }
        constructor(e, t = []) {
          ((this.name = e), (this.children = t));
        }
        withName(e) {
          return ((this.name = e), this);
        }
        addAttribute(e, t) {
          return ((this.attributes[e] = t), this);
        }
        addChildNode(e) {
          return (this.children.push(e), this);
        }
        removeAttribute(e) {
          return (delete this.attributes[e], this);
        }
        n(e) {
          return ((this.name = e), this);
        }
        c(e) {
          return (this.children.push(e), this);
        }
        a(e, t) {
          return (null != t && (this.attributes[e] = t), this);
        }
        cc(e, t, r = t) {
          if (null != e[t]) {
            const n = l.of(t, e[t]).withName(r);
            this.c(n);
          }
        }
        l(e, t, r, n) {
          if (null != e[t]) {
            n().map((e) => {
              (e.withName(r), this.c(e));
            });
          }
        }
        lc(e, t, r, n) {
          if (null != e[t]) {
            const e = n(),
              t = new l(r);
            (e.map((e) => {
              t.c(e);
            }),
              this.c(t));
          }
        }
        toString() {
          const e = Boolean(this.children.length);
          let t = `<${this.name}`;
          const r = this.attributes;
          for (const e of Object.keys(r)) {
            const n = r[e];
            null != n && (t += ` ${e}="${i("" + n)}"`);
          }
          return (
            t + (e ? `>${this.children.map((e) => e.toString()).join("")}</${this.name}>` : "/>")
          );
        }
      }
      const u =
          ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
        d = new RegExp(
          "^" +
            ("[" + u + "][" + (u + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040") + "]*") +
            "$",
        );
      function h(e, t) {
        const r = [];
        let n = t.exec(e);
        for (; n;) {
          const s = [];
          s.startIndex = t.lastIndex - n[0].length;
          const i = n.length;
          for (let e = 0; e < i; e++) s.push(n[e]);
          (r.push(s), (n = t.exec(e)));
        }
        return r;
      }
      const f = function (e) {
        const t = d.exec(e);
        return !(null == t);
      };
      const p = [
          "hasOwnProperty",
          "toString",
          "valueOf",
          "__defineGetter__",
          "__defineSetter__",
          "__lookupGetter__",
          "__lookupSetter__",
        ],
        g = ["__proto__", "constructor", "prototype"],
        m = (e) => (p.includes(e) ? "__" + e : e),
        y = {
          preserveOrder: !1,
          attributeNamePrefix: "@_",
          attributesGroupName: !1,
          textNodeName: "#text",
          ignoreAttributes: !0,
          removeNSPrefix: !1,
          allowBooleanAttributes: !1,
          parseTagValue: !0,
          parseAttributeValue: !1,
          trimValues: !0,
          cdataPropName: !1,
          numberParseOptions: { hex: !0, leadingZeros: !0, eNotation: !0 },
          tagValueProcessor: function (e, t) {
            return t;
          },
          attributeValueProcessor: function (e, t) {
            return t;
          },
          stopNodes: [],
          alwaysCreateTextNode: !1,
          isArray: () => !1,
          commentPropName: !1,
          unpairedTags: [],
          processEntities: !0,
          htmlEntities: !1,
          entityDecoder: null,
          ignoreDeclaration: !1,
          ignorePiTags: !1,
          transformTagName: !1,
          transformAttributeName: !1,
          updateTag: function (e, t, r) {
            return e;
          },
          captureMetaData: !1,
          maxNestedTags: 100,
          strictReservedNames: !0,
          jPath: !0,
          onDangerousProperty: m,
        };
      function w(e, t) {
        if ("string" != typeof e) return;
        const r = e.toLowerCase();
        if (p.some((e) => r === e.toLowerCase()))
          throw new Error(
            `[SECURITY] Invalid ${t}: "${e}" is a reserved JavaScript keyword that could cause prototype pollution`,
          );
        if (g.some((e) => r === e.toLowerCase()))
          throw new Error(
            `[SECURITY] Invalid ${t}: "${e}" is a reserved JavaScript keyword that could cause prototype pollution`,
          );
      }
      function S(e, t) {
        return "boolean" == typeof e
          ? {
              enabled: e,
              maxEntitySize: 1e4,
              maxExpansionDepth: 1e4,
              maxTotalExpansions: 1 / 0,
              maxExpandedLength: 1e5,
              maxEntityCount: 1e3,
              allowedTags: null,
              tagFilter: null,
              appliesTo: "all",
            }
          : "object" == typeof e && null !== e
            ? {
                enabled: !1 !== e.enabled,
                maxEntitySize: Math.max(1, e.maxEntitySize ?? 1e4),
                maxExpansionDepth: Math.max(1, e.maxExpansionDepth ?? 1e4),
                maxTotalExpansions: Math.max(1, e.maxTotalExpansions ?? 1 / 0),
                maxExpandedLength: Math.max(1, e.maxExpandedLength ?? 1e5),
                maxEntityCount: Math.max(1, e.maxEntityCount ?? 1e3),
                allowedTags: e.allowedTags ?? null,
                tagFilter: e.tagFilter ?? null,
                appliesTo: e.appliesTo ?? "all",
              }
            : S(!0);
      }
      const b = function (e) {
        const t = Object.assign({}, y, e),
          r = [
            { value: t.attributeNamePrefix, name: "attributeNamePrefix" },
            { value: t.attributesGroupName, name: "attributesGroupName" },
            { value: t.textNodeName, name: "textNodeName" },
            { value: t.cdataPropName, name: "cdataPropName" },
            { value: t.commentPropName, name: "commentPropName" },
          ];
        for (const { value: e, name: t } of r) e && w(e, t);
        return (
          null === t.onDangerousProperty && (t.onDangerousProperty = m),
          (t.processEntities = S(t.processEntities, t.htmlEntities)),
          (t.unpairedTagsSet = new Set(t.unpairedTags)),
          t.stopNodes &&
            Array.isArray(t.stopNodes) &&
            (t.stopNodes = t.stopNodes.map((e) =>
              "string" == typeof e && e.startsWith("*.") ? ".." + e.substring(2) : e,
            )),
          t
        );
      };
      let E;
      E = "function" != typeof Symbol ? "@@xmlMetadata" : Symbol("XML Node Metadata");
      class v {
        constructor(e) {
          ((this.tagname = e), (this.child = []), (this[":@"] = Object.create(null)));
        }
        add(e, t) {
          ("__proto__" === e && (e = "#__proto__"), this.child.push({ [e]: t }));
        }
        addChild(e, t) {
          ("__proto__" === e.tagname && (e.tagname = "#__proto__"),
            e[":@"] && Object.keys(e[":@"]).length > 0
              ? this.child.push({ [e.tagname]: e.child, ":@": e[":@"] })
              : this.child.push({ [e.tagname]: e.child }),
            void 0 !== t && (this.child[this.child.length - 1][E] = { startIndex: t }));
        }
        static getMetaDataSymbol() {
          return E;
        }
      }
      class x {
        constructor(e) {
          ((this.suppressValidationErr = !e), (this.options = e));
        }
        readDocType(e, t) {
          const r = Object.create(null);
          let n = 0;
          if (
            "O" !== e[t + 3] ||
            "C" !== e[t + 4] ||
            "T" !== e[t + 5] ||
            "Y" !== e[t + 6] ||
            "P" !== e[t + 7] ||
            "E" !== e[t + 8]
          )
            throw new Error("Invalid Tag instead of DOCTYPE");
          {
            t += 9;
            let s = 1,
              i = !1,
              o = !1,
              a = "";
            for (; t < e.length; t++)
              if ("<" !== e[t] || o)
                if (">" === e[t]) {
                  if ((o ? "-" === e[t - 1] && "-" === e[t - 2] && ((o = !1), s--) : s--, 0 === s))
                    break;
                } else "[" === e[t] ? (i = !0) : (a += e[t]);
              else {
                if (i && A(e, "!ENTITY", t)) {
                  let s, i;
                  if (
                    ((t += 7),
                    ([s, i, t] = this.readEntityExp(e, t + 1, this.suppressValidationErr)),
                    -1 === i.indexOf("&"))
                  ) {
                    if (
                      !1 !== this.options.enabled &&
                      null != this.options.maxEntityCount &&
                      n >= this.options.maxEntityCount
                    )
                      throw new Error(
                        `Entity count (${n + 1}) exceeds maximum allowed (${this.options.maxEntityCount})`,
                      );
                    ((r[s] = i), n++);
                  }
                } else if (i && A(e, "!ELEMENT", t)) {
                  t += 8;
                  const { index: r } = this.readElementExp(e, t + 1);
                  t = r;
                } else if (i && A(e, "!ATTLIST", t)) t += 8;
                else if (i && A(e, "!NOTATION", t)) {
                  t += 9;
                  const { index: r } = this.readNotationExp(e, t + 1, this.suppressValidationErr);
                  t = r;
                } else {
                  if (!A(e, "!--", t)) throw new Error("Invalid DOCTYPE");
                  o = !0;
                }
                (s++, (a = ""));
              }
            if (0 !== s) throw new Error("Unclosed DOCTYPE");
          }
          return { entities: r, i: t };
        }
        readEntityExp(e, t) {
          const r = (t = T(e, t));
          for (; t < e.length && !/\s/.test(e[t]) && '"' !== e[t] && "'" !== e[t];) t++;
          let n = e.substring(r, t);
          if ((N(n), (t = T(e, t)), !this.suppressValidationErr)) {
            if ("SYSTEM" === e.substring(t, t + 6).toUpperCase())
              throw new Error("External entities are not supported");
            if ("%" === e[t]) throw new Error("Parameter entities are not supported");
          }
          let s = "";
          if (
            (([t, s] = this.readIdentifierVal(e, t, "entity")),
            !1 !== this.options.enabled &&
              null != this.options.maxEntitySize &&
              s.length > this.options.maxEntitySize)
          )
            throw new Error(
              `Entity "${n}" size (${s.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`,
            );
          return [n, s, --t];
        }
        readNotationExp(e, t) {
          const r = (t = T(e, t));
          for (; t < e.length && !/\s/.test(e[t]);) t++;
          let n = e.substring(r, t);
          (!this.suppressValidationErr && N(n), (t = T(e, t)));
          const s = e.substring(t, t + 6).toUpperCase();
          if (!this.suppressValidationErr && "SYSTEM" !== s && "PUBLIC" !== s)
            throw new Error(`Expected SYSTEM or PUBLIC, found "${s}"`);
          ((t += s.length), (t = T(e, t)));
          let i = null,
            o = null;
          if ("PUBLIC" === s)
            (([t, i] = this.readIdentifierVal(e, t, "publicIdentifier")),
              ('"' !== e[(t = T(e, t))] && "'" !== e[t]) ||
                ([t, o] = this.readIdentifierVal(e, t, "systemIdentifier")));
          else if (
            "SYSTEM" === s &&
            (([t, o] = this.readIdentifierVal(e, t, "systemIdentifier")),
            !this.suppressValidationErr && !o)
          )
            throw new Error("Missing mandatory system identifier for SYSTEM notation");
          return { notationName: n, publicIdentifier: i, systemIdentifier: o, index: --t };
        }
        readIdentifierVal(e, t, r) {
          let n = "";
          const s = e[t];
          if ('"' !== s && "'" !== s) throw new Error(`Expected quoted string, found "${s}"`);
          const i = ++t;
          for (; t < e.length && e[t] !== s;) t++;
          if (((n = e.substring(i, t)), e[t] !== s)) throw new Error(`Unterminated ${r} value`);
          return [++t, n];
        }
        readElementExp(e, t) {
          const r = (t = T(e, t));
          for (; t < e.length && !/\s/.test(e[t]);) t++;
          let n = e.substring(r, t);
          if (!this.suppressValidationErr && !f(n)) throw new Error(`Invalid element name: "${n}"`);
          let s = "";
          if ("E" === e[(t = T(e, t))] && A(e, "MPTY", t)) t += 4;
          else if ("A" === e[t] && A(e, "NY", t)) t += 2;
          else if ("(" === e[t]) {
            const r = ++t;
            for (; t < e.length && ")" !== e[t];) t++;
            if (((s = e.substring(r, t)), ")" !== e[t]))
              throw new Error("Unterminated content model");
          } else if (!this.suppressValidationErr)
            throw new Error(`Invalid Element Expression, found "${e[t]}"`);
          return { elementName: n, contentModel: s.trim(), index: t };
        }
        readAttlistExp(e, t) {
          let r = (t = T(e, t));
          for (; t < e.length && !/\s/.test(e[t]);) t++;
          let n = e.substring(r, t);
          for (N(n), r = t = T(e, t); t < e.length && !/\s/.test(e[t]);) t++;
          let s = e.substring(r, t);
          if (!N(s)) throw new Error(`Invalid attribute name: "${s}"`);
          t = T(e, t);
          let i = "";
          if ("NOTATION" === e.substring(t, t + 8).toUpperCase()) {
            if (((i = "NOTATION"), "(" !== e[(t = T(e, (t += 8)))]))
              throw new Error(`Expected '(', found "${e[t]}"`);
            t++;
            let r = [];
            for (; t < e.length && ")" !== e[t];) {
              const n = t;
              for (; t < e.length && "|" !== e[t] && ")" !== e[t];) t++;
              let s = e.substring(n, t);
              if (((s = s.trim()), !N(s))) throw new Error(`Invalid notation name: "${s}"`);
              (r.push(s), "|" === e[t] && (t++, (t = T(e, t))));
            }
            if (")" !== e[t]) throw new Error("Unterminated list of notations");
            (t++, (i += " (" + r.join("|") + ")"));
          } else {
            const r = t;
            for (; t < e.length && !/\s/.test(e[t]);) t++;
            i += e.substring(r, t);
            const n = [
              "CDATA",
              "ID",
              "IDREF",
              "IDREFS",
              "ENTITY",
              "ENTITIES",
              "NMTOKEN",
              "NMTOKENS",
            ];
            if (!this.suppressValidationErr && !n.includes(i.toUpperCase()))
              throw new Error(`Invalid attribute type: "${i}"`);
          }
          t = T(e, t);
          let o = "";
          return (
            "#REQUIRED" === e.substring(t, t + 8).toUpperCase()
              ? ((o = "#REQUIRED"), (t += 8))
              : "#IMPLIED" === e.substring(t, t + 7).toUpperCase()
                ? ((o = "#IMPLIED"), (t += 7))
                : ([t, o] = this.readIdentifierVal(e, t, "ATTLIST")),
            { elementName: n, attributeName: s, attributeType: i, defaultValue: o, index: t }
          );
        }
      }
      const T = (e, t) => {
        for (; t < e.length && /\s/.test(e[t]);) t++;
        return t;
      };
      function A(e, t, r) {
        for (let n = 0; n < t.length; n++) if (t[n] !== e[r + n + 1]) return !1;
        return !0;
      }
      function N(e) {
        if (f(e)) return e;
        throw new Error(`Invalid entity name ${e}`);
      }
      const C = /^[-+]?0x[a-fA-F0-9]+$/,
        _ = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/,
        R = { hex: !0, leadingZeros: !0, decimalPoint: ".", eNotation: !0, infinity: "original" };
      function I(e, t = {}) {
        if (((t = Object.assign({}, R, t)), !e || "string" != typeof e)) return e;
        let r = e.trim();
        if (0 === r.length) return e;
        if (void 0 !== t.skipLike && t.skipLike.test(r)) return e;
        if ("0" === r) return 0;
        if (t.hex && C.test(r))
          return (function (e, t) {
            if (parseInt) return parseInt(e, t);
            if (Number.parseInt) return Number.parseInt(e, t);
            if (window && window.parseInt) return window.parseInt(e, t);
            throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
          })(r, 16);
        if (isFinite(r)) {
          if (r.includes("e") || r.includes("E"))
            return (function (e, t, r) {
              if (!r.eNotation) return e;
              const n = t.match(D);
              if (n) {
                let s = n[1] || "";
                const i = -1 === n[3].indexOf("e") ? "E" : "e",
                  o = n[2],
                  a = s ? e[o.length + 1] === i : e[o.length] === i;
                return o.length > 1 && a
                  ? e
                  : (1 !== o.length || (!n[3].startsWith(`.${i}`) && n[3][0] !== i)) && o.length > 0
                    ? r.leadingZeros && !a
                      ? ((t = (n[1] || "") + n[3]), Number(t))
                      : e
                    : Number(t);
              }
              return e;
            })(e, r, t);
          {
            const n = _.exec(r);
            if (n) {
              const s = n[1] || "",
                i = n[2];
              let o = (function (e) {
                if (e && -1 !== e.indexOf("."))
                  return (
                    "." === (e = e.replace(/0+$/, ""))
                      ? (e = "0")
                      : "." === e[0]
                        ? (e = "0" + e)
                        : "." === e[e.length - 1] && (e = e.substring(0, e.length - 1)),
                    e
                  );
                return e;
              })(n[3]);
              const a = s ? "." === e[i.length + 1] : "." === e[i.length];
              if (!t.leadingZeros && (i.length > 1 || (1 === i.length && !a))) return e;
              {
                const n = Number(r),
                  a = String(n);
                if (0 === n) return n;
                if (-1 !== a.search(/[eE]/)) return t.eNotation ? n : e;
                if (-1 !== r.indexOf(".")) return "0" === a || a === o || a === `${s}${o}` ? n : e;
                let c = i ? o : r;
                return i ? (c === a || s + c === a ? n : e) : c === a || c === s + a ? n : e;
              }
            }
            return e;
          }
        }
        return (function (e, t, r) {
          const n = t === 1 / 0;
          switch (r.infinity.toLowerCase()) {
            case "null":
              return null;
            case "infinity":
              return t;
            case "string":
              return n ? "Infinity" : "-Infinity";
            default:
              return e;
          }
        })(e, Number(r), t);
      }
      const D = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
      class k {
        constructor(e) {
          this._matcher = e;
        }
        get separator() {
          return this._matcher.separator;
        }
        getCurrentTag() {
          const e = this._matcher.path;
          return e.length > 0 ? e[e.length - 1].tag : void 0;
        }
        getCurrentNamespace() {
          const e = this._matcher.path;
          return e.length > 0 ? e[e.length - 1].namespace : void 0;
        }
        getAttrValue(e) {
          const t = this._matcher.path;
          if (0 !== t.length) return t[t.length - 1].values?.[e];
        }
        hasAttr(e) {
          const t = this._matcher.path;
          if (0 === t.length) return !1;
          const r = t[t.length - 1];
          return void 0 !== r.values && e in r.values;
        }
        getPosition() {
          const e = this._matcher.path;
          return 0 === e.length ? -1 : (e[e.length - 1].position ?? 0);
        }
        getCounter() {
          const e = this._matcher.path;
          return 0 === e.length ? -1 : (e[e.length - 1].counter ?? 0);
        }
        getIndex() {
          return this.getPosition();
        }
        getDepth() {
          return this._matcher.path.length;
        }
        toString(e, t = !0) {
          return this._matcher.toString(e, t);
        }
        toArray() {
          return this._matcher.path.map((e) => e.tag);
        }
        matches(e) {
          return this._matcher.matches(e);
        }
        matchesAny(e) {
          return e.matchesAny(this._matcher);
        }
      }
      class O {
        constructor(e = {}) {
          ((this.separator = e.separator || "."),
            (this.path = []),
            (this.siblingStacks = []),
            (this._pathStringCache = null),
            (this._view = new k(this)));
        }
        push(e, t = null, r = null) {
          ((this._pathStringCache = null),
            this.path.length > 0 && (this.path[this.path.length - 1].values = void 0));
          const n = this.path.length;
          this.siblingStacks[n] || (this.siblingStacks[n] = new Map());
          const s = this.siblingStacks[n],
            i = r ? `${r}:${e}` : e,
            o = s.get(i) || 0;
          let a = 0;
          for (const e of s.values()) a += e;
          s.set(i, o + 1);
          const c = { tag: e, position: a, counter: o };
          (null != r && (c.namespace = r), null != t && (c.values = t), this.path.push(c));
        }
        pop() {
          if (0 === this.path.length) return;
          this._pathStringCache = null;
          const e = this.path.pop();
          return (
            this.siblingStacks.length > this.path.length + 1 &&
              (this.siblingStacks.length = this.path.length + 1),
            e
          );
        }
        updateCurrent(e) {
          if (this.path.length > 0) {
            const t = this.path[this.path.length - 1];
            null != e && (t.values = e);
          }
        }
        getCurrentTag() {
          return this.path.length > 0 ? this.path[this.path.length - 1].tag : void 0;
        }
        getCurrentNamespace() {
          return this.path.length > 0 ? this.path[this.path.length - 1].namespace : void 0;
        }
        getAttrValue(e) {
          if (0 !== this.path.length) return this.path[this.path.length - 1].values?.[e];
        }
        hasAttr(e) {
          if (0 === this.path.length) return !1;
          const t = this.path[this.path.length - 1];
          return void 0 !== t.values && e in t.values;
        }
        getPosition() {
          return 0 === this.path.length ? -1 : (this.path[this.path.length - 1].position ?? 0);
        }
        getCounter() {
          return 0 === this.path.length ? -1 : (this.path[this.path.length - 1].counter ?? 0);
        }
        getIndex() {
          return this.getPosition();
        }
        getDepth() {
          return this.path.length;
        }
        toString(e, t = !0) {
          const r = e || this.separator;
          if (r === this.separator && !0 === t) {
            if (null !== this._pathStringCache) return this._pathStringCache;
            const e = this.path
              .map((e) => (e.namespace ? `${e.namespace}:${e.tag}` : e.tag))
              .join(r);
            return ((this._pathStringCache = e), e);
          }
          return this.path
            .map((e) => (t && e.namespace ? `${e.namespace}:${e.tag}` : e.tag))
            .join(r);
        }
        toArray() {
          return this.path.map((e) => e.tag);
        }
        reset() {
          ((this._pathStringCache = null), (this.path = []), (this.siblingStacks = []));
        }
        matches(e) {
          const t = e.segments;
          return (
            0 !== t.length &&
            (e.hasDeepWildcard() ? this._matchWithDeepWildcard(t) : this._matchSimple(t))
          );
        }
        _matchSimple(e) {
          if (this.path.length !== e.length) return !1;
          for (let t = 0; t < e.length; t++)
            if (!this._matchSegment(e[t], this.path[t], t === this.path.length - 1)) return !1;
          return !0;
        }
        _matchWithDeepWildcard(e) {
          let t = this.path.length - 1,
            r = e.length - 1;
          for (; r >= 0 && t >= 0;) {
            const n = e[r];
            if ("deep-wildcard" === n.type) {
              if ((r--, r < 0)) return !0;
              const n = e[r];
              let s = !1;
              for (let e = t; e >= 0; e--)
                if (this._matchSegment(n, this.path[e], e === this.path.length - 1)) {
                  ((t = e - 1), r--, (s = !0));
                  break;
                }
              if (!s) return !1;
            } else {
              if (!this._matchSegment(n, this.path[t], t === this.path.length - 1)) return !1;
              (t--, r--);
            }
          }
          return r < 0;
        }
        _matchSegment(e, t, r) {
          if ("*" !== e.tag && e.tag !== t.tag) return !1;
          if (void 0 !== e.namespace && "*" !== e.namespace && e.namespace !== t.namespace)
            return !1;
          if (void 0 !== e.attrName) {
            if (!r) return !1;
            if (!t.values || !(e.attrName in t.values)) return !1;
            if (void 0 !== e.attrValue && String(t.values[e.attrName]) !== String(e.attrValue))
              return !1;
          }
          if (void 0 !== e.position) {
            if (!r) return !1;
            const n = t.counter ?? 0;
            if ("first" === e.position && 0 !== n) return !1;
            if ("odd" === e.position && n % 2 != 1) return !1;
            if ("even" === e.position && n % 2 != 0) return !1;
            if ("nth" === e.position && n !== e.positionValue) return !1;
          }
          return !0;
        }
        matchesAny(e) {
          return e.matchesAny(this);
        }
        snapshot() {
          return {
            path: this.path.map((e) => ({ ...e })),
            siblingStacks: this.siblingStacks.map((e) => new Map(e)),
          };
        }
        restore(e) {
          ((this._pathStringCache = null),
            (this.path = e.path.map((e) => ({ ...e }))),
            (this.siblingStacks = e.siblingStacks.map((e) => new Map(e))));
        }
        readOnly() {
          return this._view;
        }
      }
      class M {
        constructor(e, t = {}, r) {
          ((this.pattern = e),
            (this.separator = t.separator || "."),
            (this.segments = this._parse(e)),
            (this.data = r),
            (this._hasDeepWildcard = this.segments.some((e) => "deep-wildcard" === e.type)),
            (this._hasAttributeCondition = this.segments.some((e) => void 0 !== e.attrName)),
            (this._hasPositionSelector = this.segments.some((e) => void 0 !== e.position)));
        }
        _parse(e) {
          const t = [];
          let r = 0,
            n = "";
          for (; r < e.length;)
            e[r] === this.separator
              ? r + 1 < e.length && e[r + 1] === this.separator
                ? (n.trim() && (t.push(this._parseSegment(n.trim())), (n = "")),
                  t.push({ type: "deep-wildcard" }),
                  (r += 2))
                : (n.trim() && t.push(this._parseSegment(n.trim())), (n = ""), r++)
              : ((n += e[r]), r++);
          return (n.trim() && t.push(this._parseSegment(n.trim())), t);
        }
        _parseSegment(e) {
          const t = { type: "tag" };
          let r = null,
            n = e;
          const s = e.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);
          if (s && ((n = s[1] + s[3]), s[2])) {
            const e = s[2].slice(1, -1);
            e && (r = e);
          }
          let i,
            o,
            a = n;
          if (n.includes("::")) {
            const t = n.indexOf("::");
            if (((i = n.substring(0, t).trim()), (a = n.substring(t + 2).trim()), !i))
              throw new Error(`Invalid namespace in pattern: ${e}`);
          }
          let c = null;
          if (a.includes(":")) {
            const e = a.lastIndexOf(":"),
              t = a.substring(0, e).trim(),
              r = a.substring(e + 1).trim();
            ["first", "last", "odd", "even"].includes(r) || /^nth\(\d+\)$/.test(r)
              ? ((o = t), (c = r))
              : (o = a);
          } else o = a;
          if (!o) throw new Error(`Invalid segment pattern: ${e}`);
          if (((t.tag = o), i && (t.namespace = i), r))
            if (r.includes("=")) {
              const e = r.indexOf("=");
              ((t.attrName = r.substring(0, e).trim()), (t.attrValue = r.substring(e + 1).trim()));
            } else t.attrName = r.trim();
          if (c) {
            const e = c.match(/^nth\((\d+)\)$/);
            e ? ((t.position = "nth"), (t.positionValue = parseInt(e[1], 10))) : (t.position = c);
          }
          return t;
        }
        get length() {
          return this.segments.length;
        }
        hasDeepWildcard() {
          return this._hasDeepWildcard;
        }
        hasAttributeCondition() {
          return this._hasAttributeCondition;
        }
        hasPositionSelector() {
          return this._hasPositionSelector;
        }
        toString() {
          return this.pattern;
        }
      }
      class P {
        constructor() {
          ((this._byDepthAndTag = new Map()),
            (this._wildcardByDepth = new Map()),
            (this._deepWildcards = []),
            (this._patterns = new Set()),
            (this._sealed = !1));
        }
        add(e) {
          if (this._sealed)
            throw new TypeError(
              "ExpressionSet is sealed. Create a new ExpressionSet to add more expressions.",
            );
          if (this._patterns.has(e.pattern)) return this;
          if ((this._patterns.add(e.pattern), e.hasDeepWildcard()))
            return (this._deepWildcards.push(e), this);
          const t = e.length,
            r = e.segments[e.segments.length - 1],
            n = r?.tag;
          if (n && "*" !== n) {
            const r = `${t}:${n}`;
            (this._byDepthAndTag.has(r) || this._byDepthAndTag.set(r, []),
              this._byDepthAndTag.get(r).push(e));
          } else
            (this._wildcardByDepth.has(t) || this._wildcardByDepth.set(t, []),
              this._wildcardByDepth.get(t).push(e));
          return this;
        }
        addAll(e) {
          for (const t of e) this.add(t);
          return this;
        }
        has(e) {
          return this._patterns.has(e.pattern);
        }
        get size() {
          return this._patterns.size;
        }
        seal() {
          return ((this._sealed = !0), this);
        }
        get isSealed() {
          return this._sealed;
        }
        matchesAny(e) {
          return null !== this.findMatch(e);
        }
        findMatch(e) {
          const t = e.getDepth(),
            r = `${t}:${e.getCurrentTag()}`,
            n = this._byDepthAndTag.get(r);
          if (n) for (let t = 0; t < n.length; t++) if (e.matches(n[t])) return n[t];
          const s = this._wildcardByDepth.get(t);
          if (s) for (let t = 0; t < s.length; t++) if (e.matches(s[t])) return s[t];
          for (let t = 0; t < this._deepWildcards.length; t++)
            if (e.matches(this._deepWildcards[t])) return this._deepWildcards[t];
          return null;
        }
      }
      const $ = {
          cent: "¢",
          pound: "£",
          curren: "¤",
          yen: "¥",
          euro: "€",
          dollar: "$",
          euro: "€",
          fnof: "ƒ",
          inr: "₹",
          af: "؋",
          birr: "ብር",
          peso: "₱",
          rub: "₽",
          won: "₩",
          yuan: "¥",
          cedil: "¸",
        },
        j = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' },
        L = {
          nbsp: " ",
          copy: "©",
          reg: "®",
          trade: "™",
          mdash: "—",
          ndash: "–",
          hellip: "…",
          laquo: "«",
          raquo: "»",
          lsquo: "‘",
          rsquo: "’",
          ldquo: "“",
          rdquo: "”",
          bull: "•",
          para: "¶",
          sect: "§",
          deg: "°",
          frac12: "½",
          frac14: "¼",
          frac34: "¾",
        },
        U = new Set("!?\\\\/[]$%{}^&*()<>|+");
      function B(e) {
        if ("#" === e[0])
          throw new Error(`[EntityReplacer] Invalid character '#' in entity name: "${e}"`);
        for (const t of e)
          if (U.has(t))
            throw new Error(`[EntityReplacer] Invalid character '${t}' in entity name: "${e}"`);
        return e;
      }
      function F(...e) {
        const t = Object.create(null);
        for (const r of e)
          if (r)
            for (const e of Object.keys(r)) {
              const n = r[e];
              if ("string" == typeof n) t[e] = n;
              else if (n && "object" == typeof n && void 0 !== n.val) {
                const r = n.val;
                "string" == typeof r && (t[e] = r);
              }
            }
        return t;
      }
      const z = "external",
        V = "base",
        H = "all";
      const q = Object.freeze({ allow: 0, leave: 1, remove: 2, throw: 3 }),
        W = new Set([9, 10, 13]);
      class G {
        constructor(e = {}) {
          var t;
          ((this._limit = e.limit || {}),
            (this._maxTotalExpansions = this._limit.maxTotalExpansions || 0),
            (this._maxExpandedLength = this._limit.maxExpandedLength || 0),
            (this._postCheck = "function" == typeof e.postCheck ? e.postCheck : (e) => e),
            (this._limitTiers =
              (t = this._limit.applyLimitsTo ?? z) && t !== z
                ? t === H
                  ? new Set([H])
                  : t === V
                    ? new Set([V])
                    : Array.isArray(t)
                      ? new Set(t)
                      : new Set([z])
                : new Set([z])),
            (this._numericAllowed = e.numericAllowed ?? !0),
            (this._baseMap = F(j, e.namedEntities || null)),
            (this._externalMap = Object.create(null)),
            (this._inputMap = Object.create(null)),
            (this._totalExpansions = 0),
            (this._expandedLength = 0),
            (this._removeSet = new Set(e.remove && Array.isArray(e.remove) ? e.remove : [])),
            (this._leaveSet = new Set(e.leave && Array.isArray(e.leave) ? e.leave : [])));
          const r = (function (e) {
            if (!e) return { xmlVersion: 1, onLevel: q.allow, nullLevel: q.remove };
            const t = 1.1 === e.xmlVersion ? 1.1 : 1,
              r = q[e.onNCR] ?? q.allow,
              n = q[e.nullNCR] ?? q.remove;
            return { xmlVersion: t, onLevel: r, nullLevel: Math.max(n, q.remove) };
          })(e.ncr);
          ((this._ncrXmlVersion = r.xmlVersion),
            (this._ncrOnLevel = r.onLevel),
            (this._ncrNullLevel = r.nullLevel));
        }
        setExternalEntities(e) {
          if (e) for (const t of Object.keys(e)) B(t);
          this._externalMap = F(e);
        }
        addExternalEntity(e, t) {
          (B(e), "string" == typeof t && -1 === t.indexOf("&") && (this._externalMap[e] = t));
        }
        addInputEntities(e) {
          ((this._totalExpansions = 0), (this._expandedLength = 0), (this._inputMap = F(e)));
        }
        reset() {
          return (
            (this._inputMap = Object.create(null)),
            (this._totalExpansions = 0),
            (this._expandedLength = 0),
            this
          );
        }
        setXmlVersion(e) {
          this._ncrXmlVersion = 1.1 === e ? 1.1 : 1;
        }
        decode(e) {
          if ("string" != typeof e || 0 === e.length) return e;
          const t = e,
            r = [],
            n = e.length;
          let s = 0,
            i = 0;
          const o = this._maxTotalExpansions > 0,
            a = this._maxExpandedLength > 0,
            c = o || a;
          for (; i < n;) {
            if (38 !== e.charCodeAt(i)) {
              i++;
              continue;
            }
            let t = i + 1;
            for (; t < n && 59 !== e.charCodeAt(t) && t - i <= 32;) t++;
            if (t >= n || 59 !== e.charCodeAt(t)) {
              i++;
              continue;
            }
            const l = e.slice(i + 1, t);
            if (0 === l.length) {
              i++;
              continue;
            }
            let u, d;
            if (this._removeSet.has(l)) ((u = ""), void 0 === d && (d = z));
            else {
              if (this._leaveSet.has(l)) {
                i++;
                continue;
              }
              if (35 === l.charCodeAt(0)) {
                const e = this._resolveNCR(l);
                if (void 0 === e) {
                  i++;
                  continue;
                }
                ((u = e), (d = V));
              } else {
                const e = this._resolveName(l);
                ((u = e?.value), (d = e?.tier));
              }
            }
            if (void 0 !== u) {
              if (
                (i > s && r.push(e.slice(s, i)),
                r.push(u),
                (s = t + 1),
                (i = s),
                c && this._tierCounts(d))
              ) {
                if (
                  o &&
                  (this._totalExpansions++, this._totalExpansions > this._maxTotalExpansions)
                )
                  throw new Error(
                    `[EntityReplacer] Entity expansion count limit exceeded: ${this._totalExpansions} > ${this._maxTotalExpansions}`,
                  );
                if (a) {
                  const e = u.length - (l.length + 2);
                  if (
                    e > 0 &&
                    ((this._expandedLength += e), this._expandedLength > this._maxExpandedLength)
                  )
                    throw new Error(
                      `[EntityReplacer] Expanded content length limit exceeded: ${this._expandedLength} > ${this._maxExpandedLength}`,
                    );
                }
              }
            } else i++;
          }
          s < n && r.push(e.slice(s));
          const l = 0 === r.length ? e : r.join("");
          return this._postCheck(l, t);
        }
        _tierCounts(e) {
          return !!this._limitTiers.has(H) || this._limitTiers.has(e);
        }
        _resolveName(e) {
          return e in this._inputMap
            ? { value: this._inputMap[e], tier: z }
            : e in this._externalMap
              ? { value: this._externalMap[e], tier: z }
              : e in this._baseMap
                ? { value: this._baseMap[e], tier: V }
                : void 0;
        }
        _classifyNCR(e) {
          return 0 === e
            ? this._ncrNullLevel
            : (e >= 55296 && e <= 57343) ||
                (1 === this._ncrXmlVersion && e >= 1 && e <= 31 && !W.has(e))
              ? q.remove
              : -1;
        }
        _applyNCRAction(e, t, r) {
          switch (e) {
            case q.allow:
              return String.fromCodePoint(r);
            case q.remove:
              return "";
            case q.leave:
              return;
            case q.throw:
              throw new Error(
                `[EntityDecoder] Prohibited numeric character reference &${t}; (U+${r.toString(16).toUpperCase().padStart(4, "0")})`,
              );
            default:
              return String.fromCodePoint(r);
          }
        }
        _resolveNCR(e) {
          const t = e.charCodeAt(1);
          let r;
          if (
            ((r = 120 === t || 88 === t ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10)),
            Number.isNaN(r) || r < 0 || r > 1114111)
          )
            return;
          const n = this._classifyNCR(r);
          if (!this._numericAllowed && n < q.remove) return;
          const s = -1 === n ? this._ncrOnLevel : Math.max(this._ncrOnLevel, n);
          return this._applyNCRAction(s, e, r);
        }
      }
      function Q(e, t) {
        if (!e) return {};
        const r = t.attributesGroupName ? e[t.attributesGroupName] : e;
        if (!r) return {};
        const n = {};
        for (const e in r)
          if (e.startsWith(t.attributeNamePrefix)) {
            n[e.substring(t.attributeNamePrefix.length)] = r[e];
          } else n[e] = r[e];
        return n;
      }
      function X(e) {
        if (!e || "string" != typeof e) return;
        const t = e.indexOf(":");
        if (-1 !== t && t > 0) {
          const r = e.substring(0, t);
          if ("xmlns" !== r) return r;
        }
      }
      class K {
        constructor(e, t) {
          var r;
          ((this.options = e),
            (this.currentNode = null),
            (this.tagsNodeStack = []),
            (this.parseXml = te),
            (this.parseTextData = J),
            (this.resolveNameSpace = Y),
            (this.buildAttributesMap = ee),
            (this.isItStopNode = ie),
            (this.replaceEntitiesValue = ne),
            (this.readStopNodeData = le),
            (this.saveTextToParentTag = se),
            (this.addChild = re),
            (this.ignoreAttributesFn =
              "function" == typeof (r = this.options.ignoreAttributes)
                ? r
                : Array.isArray(r)
                  ? (e) => {
                      for (const t of r) {
                        if ("string" == typeof t && e === t) return !0;
                        if (t instanceof RegExp && t.test(e)) return !0;
                      }
                    }
                  : () => !1),
            (this.entityExpansionCount = 0),
            (this.currentExpandedLength = 0));
          let n = { ...j };
          (this.options.entityDecoder
            ? (this.entityDecoder = this.options.entityDecoder)
            : ("object" == typeof this.options.htmlEntities
                ? (n = this.options.htmlEntities)
                : !0 === this.options.htmlEntities && (n = { ...L, ...$ }),
              (this.entityDecoder = new G({
                namedEntities: { ...n, ...t },
                numericAllowed: this.options.htmlEntities,
                limit: {
                  maxTotalExpansions: this.options.processEntities.maxTotalExpansions,
                  maxExpandedLength: this.options.processEntities.maxExpandedLength,
                  applyLimitsTo: this.options.processEntities.appliesTo,
                },
              }))),
            (this.matcher = new O()),
            (this.readonlyMatcher = this.matcher.readOnly()),
            (this.isCurrentNodeStopNode = !1),
            (this.stopNodeExpressionsSet = new P()));
          const s = this.options.stopNodes;
          if (s && s.length > 0) {
            for (let e = 0; e < s.length; e++) {
              const t = s[e];
              "string" == typeof t
                ? this.stopNodeExpressionsSet.add(new M(t))
                : t instanceof M && this.stopNodeExpressionsSet.add(t);
            }
            this.stopNodeExpressionsSet.seal();
          }
        }
      }
      function J(e, t, r, n, s, i, o) {
        const a = this.options;
        if (void 0 !== e && (a.trimValues && !n && (e = e.trim()), e.length > 0)) {
          o || (e = this.replaceEntitiesValue(e, t, r));
          const n = a.jPath ? r.toString() : r,
            c = a.tagValueProcessor(t, e, n, s, i);
          if (null == c) return e;
          if (typeof c != typeof e || c !== e) return c;
          if (a.trimValues) return ue(e, a.parseTagValue, a.numberParseOptions);
          return e.trim() === e ? ue(e, a.parseTagValue, a.numberParseOptions) : e;
        }
      }
      function Y(e) {
        if (this.options.removeNSPrefix) {
          const t = e.split(":"),
            r = "/" === e.charAt(0) ? "/" : "";
          if ("xmlns" === t[0]) return "";
          2 === t.length && (e = r + t[1]);
        }
        return e;
      }
      const Z = new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?", "gm");
      function ee(e, t, r, n = !1) {
        const s = this.options;
        if (!0 === n || (!0 !== s.ignoreAttributes && "string" == typeof e)) {
          const n = h(e, Z),
            i = n.length,
            o = {},
            a = new Array(i);
          let c = !1;
          const l = {};
          for (let e = 0; e < i; e++) {
            const t = this.resolveNameSpace(n[e][1]),
              i = n[e][4];
            if (t.length && void 0 !== i) {
              let n = i;
              (s.trimValues && (n = n.trim()),
                (n = this.replaceEntitiesValue(n, r, this.readonlyMatcher)),
                (a[e] = n),
                (l[t] = n),
                (c = !0));
            }
          }
          c && "object" == typeof t && t.updateCurrent && t.updateCurrent(l);
          const u = s.jPath ? t.toString() : this.readonlyMatcher;
          let d = !1;
          for (let e = 0; e < i; e++) {
            const t = this.resolveNameSpace(n[e][1]);
            if (this.ignoreAttributesFn(t, u)) continue;
            let r = s.attributeNamePrefix + t;
            if (t.length)
              if (
                (s.transformAttributeName && (r = s.transformAttributeName(r)),
                (r = he(r, s)),
                void 0 !== n[e][4])
              ) {
                const n = a[e],
                  i = s.attributeValueProcessor(t, n, u);
                ((o[r] =
                  null == i
                    ? n
                    : typeof i != typeof n || i !== n
                      ? i
                      : ue(n, s.parseAttributeValue, s.numberParseOptions)),
                  (d = !0));
              } else s.allowBooleanAttributes && ((o[r] = !0), (d = !0));
          }
          if (!d) return;
          if (s.attributesGroupName && !s.preserveOrder) {
            const e = {};
            return ((e[s.attributesGroupName] = o), e);
          }
          return o;
        }
      }
      const te = function (e) {
        e = e.replace(/\r\n?/g, "\n");
        const t = new v("!xml");
        let r = t,
          n = "";
        (this.matcher.reset(),
          this.entityDecoder.reset(),
          (this.entityExpansionCount = 0),
          (this.currentExpandedLength = 0));
        const s = this.options,
          i = new x(s.processEntities),
          o = e.length;
        for (let a = 0; a < o; a++) {
          if ("<" === e[a]) {
            const c = e.charCodeAt(a + 1);
            if (47 === c) {
              const t = oe(e, ">", a, "Closing Tag is not closed.");
              let i = e.substring(a + 2, t).trim();
              if (s.removeNSPrefix) {
                const e = i.indexOf(":");
                -1 !== e && (i = i.substr(e + 1));
              }
              ((i = de(s.transformTagName, i, "", s).tagName),
                r && (n = this.saveTextToParentTag(n, r, this.readonlyMatcher)));
              const o = this.matcher.getCurrentTag();
              if (i && s.unpairedTagsSet.has(i))
                throw new Error(`Unpaired tag can not be used as closing tag: </${i}>`);
              (o && s.unpairedTagsSet.has(o) && (this.matcher.pop(), this.tagsNodeStack.pop()),
                this.matcher.pop(),
                (this.isCurrentNodeStopNode = !1),
                (r = this.tagsNodeStack.pop()),
                (n = ""),
                (a = t));
            } else if (63 === c) {
              let t = ce(e, a, !1, "?>");
              if (!t) throw new Error("Pi Tag is not closed.");
              n = this.saveTextToParentTag(n, r, this.readonlyMatcher);
              const i = this.buildAttributesMap(t.tagExp, this.matcher, t.tagName, !0);
              if (i) {
                const e = i[this.options.attributeNamePrefix + "version"];
                this.entityDecoder.setXmlVersion(Number(e) || 1);
              }
              if ((s.ignoreDeclaration && "?xml" === t.tagName) || s.ignorePiTags);
              else {
                const e = new v(t.tagName);
                (e.add(s.textNodeName, ""),
                  t.tagName !== t.tagExp &&
                    t.attrExpPresent &&
                    !0 !== s.ignoreAttributes &&
                    (e[":@"] = i),
                  this.addChild(r, e, this.readonlyMatcher, a));
              }
              a = t.closeIndex + 1;
            } else if (33 === c && 45 === e.charCodeAt(a + 2) && 45 === e.charCodeAt(a + 3)) {
              const t = oe(e, "--\x3e", a + 4, "Comment is not closed.");
              if (s.commentPropName) {
                const i = e.substring(a + 4, t - 2);
                ((n = this.saveTextToParentTag(n, r, this.readonlyMatcher)),
                  r.add(s.commentPropName, [{ [s.textNodeName]: i }]));
              }
              a = t;
            } else if (33 === c && 68 === e.charCodeAt(a + 2)) {
              const t = i.readDocType(e, a);
              (this.entityDecoder.addInputEntities(t.entities), (a = t.i));
            } else if (33 === c && 91 === e.charCodeAt(a + 2)) {
              const t = oe(e, "]]>", a, "CDATA is not closed.") - 2,
                i = e.substring(a + 9, t);
              n = this.saveTextToParentTag(n, r, this.readonlyMatcher);
              let o = this.parseTextData(i, r.tagname, this.readonlyMatcher, !0, !1, !0, !0);
              (null == o && (o = ""),
                s.cdataPropName
                  ? r.add(s.cdataPropName, [{ [s.textNodeName]: i }])
                  : r.add(s.textNodeName, o),
                (a = t + 2));
            } else {
              let i = ce(e, a, s.removeNSPrefix);
              if (!i) {
                const t = e.substring(Math.max(0, a - 50), Math.min(o, a + 50));
                throw new Error(`readTagExp returned undefined at position ${a}. Context: "${t}"`);
              }
              let c = i.tagName;
              const l = i.rawTagName;
              let u = i.tagExp,
                d = i.attrExpPresent,
                h = i.closeIndex;
              if (
                (({ tagName: c, tagExp: u } = de(s.transformTagName, c, u, s)),
                s.strictReservedNames &&
                  (c === s.commentPropName ||
                    c === s.cdataPropName ||
                    c === s.textNodeName ||
                    c === s.attributesGroupName))
              )
                throw new Error(`Invalid tag name: ${c}`);
              r &&
                n &&
                "!xml" !== r.tagname &&
                (n = this.saveTextToParentTag(n, r, this.readonlyMatcher, !1));
              const f = r;
              f &&
                s.unpairedTagsSet.has(f.tagname) &&
                ((r = this.tagsNodeStack.pop()), this.matcher.pop());
              let p = !1;
              u.length > 0 &&
                u.lastIndexOf("/") === u.length - 1 &&
                ((p = !0),
                "/" === c[c.length - 1]
                  ? ((c = c.substr(0, c.length - 1)), (u = c))
                  : (u = u.substr(0, u.length - 1)),
                (d = c !== u));
              let g,
                m = null,
                y = {};
              ((g = X(l)),
                c !== t.tagname && this.matcher.push(c, {}, g),
                c !== u &&
                  d &&
                  ((m = this.buildAttributesMap(u, this.matcher, c)), m && (y = Q(m, s))),
                c !== t.tagname && (this.isCurrentNodeStopNode = this.isItStopNode()));
              const w = a;
              if (this.isCurrentNodeStopNode) {
                let t = "";
                if (p) a = i.closeIndex;
                else if (s.unpairedTagsSet.has(c)) a = i.closeIndex;
                else {
                  const r = this.readStopNodeData(e, l, h + 1);
                  if (!r) throw new Error(`Unexpected end of ${l}`);
                  ((a = r.i), (t = r.tagContent));
                }
                const n = new v(c);
                (m && (n[":@"] = m),
                  n.add(s.textNodeName, t),
                  this.matcher.pop(),
                  (this.isCurrentNodeStopNode = !1),
                  this.addChild(r, n, this.readonlyMatcher, w));
              } else {
                if (p) {
                  ({ tagName: c, tagExp: u } = de(s.transformTagName, c, u, s));
                  const e = new v(c);
                  (m && (e[":@"] = m),
                    this.addChild(r, e, this.readonlyMatcher, w),
                    this.matcher.pop(),
                    (this.isCurrentNodeStopNode = !1));
                } else {
                  if (s.unpairedTagsSet.has(c)) {
                    const e = new v(c);
                    (m && (e[":@"] = m),
                      this.addChild(r, e, this.readonlyMatcher, w),
                      this.matcher.pop(),
                      (this.isCurrentNodeStopNode = !1),
                      (a = i.closeIndex));
                    continue;
                  }
                  {
                    const e = new v(c);
                    if (this.tagsNodeStack.length > s.maxNestedTags)
                      throw new Error("Maximum nested tags exceeded");
                    (this.tagsNodeStack.push(r),
                      m && (e[":@"] = m),
                      this.addChild(r, e, this.readonlyMatcher, w),
                      (r = e));
                  }
                }
                ((n = ""), (a = h));
              }
            }
          } else n += e[a];
        }
        return t.child;
      };
      function re(e, t, r, n) {
        this.options.captureMetaData || (n = void 0);
        const s = this.options.jPath ? r.toString() : r,
          i = this.options.updateTag(t.tagname, s, t[":@"]);
        !1 === i || ("string" == typeof i ? ((t.tagname = i), e.addChild(t, n)) : e.addChild(t, n));
      }
      function ne(e, t, r) {
        const n = this.options.processEntities;
        if (!n || !n.enabled) return e;
        if (n.allowedTags) {
          const s = this.options.jPath ? r.toString() : r;
          if (!(Array.isArray(n.allowedTags) ? n.allowedTags.includes(t) : n.allowedTags(t, s)))
            return e;
        }
        if (n.tagFilter) {
          const s = this.options.jPath ? r.toString() : r;
          if (!n.tagFilter(t, s)) return e;
        }
        return this.entityDecoder.decode(e);
      }
      function se(e, t, r, n) {
        return (
          e &&
            (void 0 === n && (n = 0 === t.child.length),
            void 0 !==
              (e = this.parseTextData(
                e,
                t.tagname,
                r,
                !1,
                !!t[":@"] && 0 !== Object.keys(t[":@"]).length,
                n,
              )) &&
              "" !== e &&
              t.add(this.options.textNodeName, e),
            (e = "")),
          e
        );
      }
      function ie() {
        return (
          0 !== this.stopNodeExpressionsSet.size &&
          this.matcher.matchesAny(this.stopNodeExpressionsSet)
        );
      }
      function oe(e, t, r, n) {
        const s = e.indexOf(t, r);
        if (-1 === s) throw new Error(n);
        return s + t.length - 1;
      }
      function ae(e, t, r, n) {
        const s = e.indexOf(t, r);
        if (-1 === s) throw new Error(n);
        return s;
      }
      function ce(e, t, r, n = ">") {
        const s = (function (e, t, r = ">") {
          let n = 0;
          const s = e.length,
            i = r.charCodeAt(0),
            o = r.length > 1 ? r.charCodeAt(1) : -1;
          let a = "",
            c = t;
          for (let r = t; r < s; r++) {
            const t = e.charCodeAt(r);
            if (n) t === n && (n = 0);
            else if (34 === t || 39 === t) n = t;
            else if (t === i) {
              if (-1 === o) return ((a += e.substring(c, r)), { data: a, index: r });
              if (e.charCodeAt(r + 1) === o)
                return ((a += e.substring(c, r)), { data: a, index: r });
            } else 9 !== t || n || ((a += e.substring(c, r) + " "), (c = r + 1));
          }
        })(e, t + 1, n);
        if (!s) return;
        let i = s.data;
        const o = s.index,
          a = i.search(/\s/);
        let c = i,
          l = !0;
        -1 !== a && ((c = i.substring(0, a)), (i = i.substring(a + 1).trimStart()));
        const u = c;
        if (r) {
          const e = c.indexOf(":");
          -1 !== e && ((c = c.substr(e + 1)), (l = c !== s.data.substr(e + 1)));
        }
        return { tagName: c, tagExp: i, closeIndex: o, attrExpPresent: l, rawTagName: u };
      }
      function le(e, t, r) {
        const n = r;
        let s = 1;
        const i = e.length;
        for (; r < i; r++)
          if ("<" === e[r]) {
            const i = e.charCodeAt(r + 1);
            if (47 === i) {
              const i = ae(e, ">", r, `${t} is not closed`);
              if (e.substring(r + 2, i).trim() === t && (s--, 0 === s))
                return { tagContent: e.substring(n, r), i };
              r = i;
            } else if (63 === i) {
              r = oe(e, "?>", r + 1, "StopNode is not closed.");
            } else if (33 === i && 45 === e.charCodeAt(r + 2) && 45 === e.charCodeAt(r + 3)) {
              r = oe(e, "--\x3e", r + 3, "StopNode is not closed.");
            } else if (33 === i && 91 === e.charCodeAt(r + 2)) {
              r = oe(e, "]]>", r, "StopNode is not closed.") - 2;
            } else {
              const n = ce(e, r, ">");
              if (n) {
                ((n && n.tagName) === t && "/" !== n.tagExp[n.tagExp.length - 1] && s++,
                  (r = n.closeIndex));
              }
            }
          }
      }
      function ue(e, t, r) {
        if (t && "string" == typeof e) {
          const t = e.trim();
          return "true" === t || ("false" !== t && I(e, r));
        }
        return void 0 !== e ? e : "";
      }
      function de(e, t, r, n) {
        if (e) {
          const n = e(t);
          (r === t && (r = n), (t = n));
        }
        return { tagName: (t = he(t, n)), tagExp: r };
      }
      function he(e, t) {
        if (g.includes(e))
          throw new Error(
            `[SECURITY] Invalid name: "${e}" is a reserved JavaScript keyword that could cause prototype pollution`,
          );
        return p.includes(e) ? t.onDangerousProperty(e) : e;
      }
      const fe = v.getMetaDataSymbol();
      function pe(e, t) {
        if (!e || "object" != typeof e) return {};
        if (!t) return e;
        const r = {};
        for (const n in e)
          if (n.startsWith(t)) {
            r[n.substring(t.length)] = e[n];
          } else r[n] = e[n];
        return r;
      }
      function ge(e, t, r, n) {
        return me(e, t, r, n);
      }
      function me(e, t, r, n) {
        let s;
        const i = {};
        for (let o = 0; o < e.length; o++) {
          const a = e[o],
            c = ye(a);
          if (void 0 !== c && c !== t.textNodeName) {
            const e = pe(a[":@"] || {}, t.attributeNamePrefix);
            r.push(c, e);
          }
          if (c === t.textNodeName) void 0 === s ? (s = a[c]) : (s += "" + a[c]);
          else {
            if (void 0 === c) continue;
            if (a[c]) {
              let e = me(a[c], t, r, n);
              const s = Se(e, t);
              if (
                (a[":@"]
                  ? we(e, a[":@"], n, t)
                  : 1 !== Object.keys(e).length ||
                      void 0 === e[t.textNodeName] ||
                      t.alwaysCreateTextNode
                    ? 0 === Object.keys(e).length &&
                      (t.alwaysCreateTextNode ? (e[t.textNodeName] = "") : (e = ""))
                    : (e = e[t.textNodeName]),
                void 0 !== a[fe] && "object" == typeof e && null !== e && (e[fe] = a[fe]),
                void 0 !== i[c] && Object.prototype.hasOwnProperty.call(i, c))
              )
                (Array.isArray(i[c]) || (i[c] = [i[c]]), i[c].push(e));
              else {
                const r = t.jPath ? n.toString() : n;
                t.isArray(c, r, s) ? (i[c] = [e]) : (i[c] = e);
              }
              void 0 !== c && c !== t.textNodeName && r.pop();
            }
          }
        }
        return (
          "string" == typeof s
            ? s.length > 0 && (i[t.textNodeName] = s)
            : void 0 !== s && (i[t.textNodeName] = s),
          i
        );
      }
      function ye(e) {
        const t = Object.keys(e);
        for (let e = 0; e < t.length; e++) {
          const r = t[e];
          if (":@" !== r) return r;
        }
      }
      function we(e, t, r, n) {
        if (t) {
          const s = Object.keys(t),
            i = s.length;
          for (let o = 0; o < i; o++) {
            const i = s[o],
              a = i.startsWith(n.attributeNamePrefix)
                ? i.substring(n.attributeNamePrefix.length)
                : i,
              c = n.jPath ? r.toString() + "." + a : r;
            n.isArray(i, c, !0, !0) ? (e[i] = [t[i]]) : (e[i] = t[i]);
          }
        }
      }
      function Se(e, t) {
        const { textNodeName: r } = t,
          n = Object.keys(e).length;
        return 0 === n || !(1 !== n || (!e[r] && "boolean" != typeof e[r] && 0 !== e[r]));
      }
      const be = { allowBooleanAttributes: !1, unpairedTags: [] };
      function Ee(e) {
        return " " === e || "\t" === e || "\n" === e || "\r" === e;
      }
      function ve(e, t) {
        const r = t;
        for (; t < e.length; t++)
          if ("?" == e[t] || " " == e[t]) {
            const n = e.substr(r, t - r);
            if (t > 5 && "xml" === n)
              return Ie(
                "InvalidXml",
                "XML declaration allowed only at the start of the document.",
                Oe(e, t),
              );
            if ("?" == e[t] && ">" == e[t + 1]) {
              t++;
              break;
            }
            continue;
          }
        return t;
      }
      function xe(e, t) {
        if (e.length > t + 5 && "-" === e[t + 1] && "-" === e[t + 2]) {
          for (t += 3; t < e.length; t++)
            if ("-" === e[t] && "-" === e[t + 1] && ">" === e[t + 2]) {
              t += 2;
              break;
            }
        } else if (
          e.length > t + 8 &&
          "D" === e[t + 1] &&
          "O" === e[t + 2] &&
          "C" === e[t + 3] &&
          "T" === e[t + 4] &&
          "Y" === e[t + 5] &&
          "P" === e[t + 6] &&
          "E" === e[t + 7]
        ) {
          let r = 1;
          for (t += 8; t < e.length; t++)
            if ("<" === e[t]) r++;
            else if (">" === e[t] && (r--, 0 === r)) break;
        } else if (
          e.length > t + 9 &&
          "[" === e[t + 1] &&
          "C" === e[t + 2] &&
          "D" === e[t + 3] &&
          "A" === e[t + 4] &&
          "T" === e[t + 5] &&
          "A" === e[t + 6] &&
          "[" === e[t + 7]
        )
          for (t += 8; t < e.length; t++)
            if ("]" === e[t] && "]" === e[t + 1] && ">" === e[t + 2]) {
              t += 2;
              break;
            }
        return t;
      }
      const Te = '"',
        Ae = "'";
      function Ne(e, t) {
        let r = "",
          n = "",
          s = !1;
        for (; t < e.length; t++) {
          if (e[t] === Te || e[t] === Ae) "" === n ? (n = e[t]) : n !== e[t] || (n = "");
          else if (">" === e[t] && "" === n) {
            s = !0;
            break;
          }
          r += e[t];
        }
        return "" === n && { value: r, index: t, tagClosed: s };
      }
      const Ce = new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");
      function _e(e, t) {
        const r = h(e, Ce),
          n = {};
        for (let e = 0; e < r.length; e++) {
          if (0 === r[e][1].length)
            return Ie(
              "InvalidAttr",
              "Attribute '" + r[e][2] + "' has no space in starting.",
              Me(r[e]),
            );
          if (void 0 !== r[e][3] && void 0 === r[e][4])
            return Ie("InvalidAttr", "Attribute '" + r[e][2] + "' is without value.", Me(r[e]));
          if (void 0 === r[e][3] && !t.allowBooleanAttributes)
            return Ie(
              "InvalidAttr",
              "boolean attribute '" + r[e][2] + "' is not allowed.",
              Me(r[e]),
            );
          const s = r[e][2];
          if (!De(s))
            return Ie("InvalidAttr", "Attribute '" + s + "' is an invalid name.", Me(r[e]));
          if (Object.prototype.hasOwnProperty.call(n, s))
            return Ie("InvalidAttr", "Attribute '" + s + "' is repeated.", Me(r[e]));
          n[s] = 1;
        }
        return !0;
      }
      function Re(e, t) {
        if (";" === e[++t]) return -1;
        if ("#" === e[t])
          return (function (e, t) {
            let r = /\d/;
            for ("x" === e[t] && (t++, (r = /[\da-fA-F]/)); t < e.length; t++) {
              if (";" === e[t]) return t;
              if (!e[t].match(r)) break;
            }
            return -1;
          })(e, ++t);
        let r = 0;
        for (; t < e.length; t++, r++)
          if (!(e[t].match(/\w/) && r < 20)) {
            if (";" === e[t]) break;
            return -1;
          }
        return t;
      }
      function Ie(e, t, r) {
        return { err: { code: e, msg: t, line: r.line || r, col: r.col } };
      }
      function De(e) {
        return f(e);
      }
      function ke(e) {
        return f(e);
      }
      function Oe(e, t) {
        const r = e.substring(0, t).split(/\r?\n/);
        return { line: r.length, col: r[r.length - 1].length + 1 };
      }
      function Me(e) {
        return e.startIndex + e[1].length;
      }
      const Pe = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' },
        $e = new Set("!?\\/[]$%{}^&*()<>|+");
      function je(e) {
        if ("#" === e[0])
          throw new Error(`[EntityReplacer] Invalid character '#' in entity name: "${e}"`);
        for (const t of e)
          if ($e.has(t))
            throw new Error(`[EntityReplacer] Invalid character '${t}' in entity name: "${e}"`);
        return e;
      }
      function Le(...e) {
        const t = Object.create(null);
        for (const r of e)
          if (r)
            for (const e of Object.keys(r)) {
              const n = r[e];
              if ("string" == typeof n) t[e] = n;
              else if (n && "object" == typeof n && void 0 !== n.val) {
                const r = n.val;
                "string" == typeof r && (t[e] = r);
              }
            }
        return t;
      }
      const Ue = "external",
        Be = "base",
        Fe = "all";
      const ze = Object.freeze({ allow: 0, leave: 1, remove: 2, throw: 3 }),
        Ve = new Set([9, 10, 13]);
      const He = new (class {
          _limit;
          _maxTotalExpansions;
          _maxExpandedLength;
          _postCheck;
          _limitTiers;
          _numericAllowed;
          _baseMap;
          _externalMap;
          _inputMap;
          _totalExpansions;
          _expandedLength;
          _removeSet;
          _leaveSet;
          _ncrXmlVersion;
          _ncrOnLevel;
          _ncrNullLevel;
          constructor(e = {}) {
            var t;
            ((this._limit = e.limit || {}),
              (this._maxTotalExpansions = this._limit.maxTotalExpansions || 0),
              (this._maxExpandedLength = this._limit.maxExpandedLength || 0),
              (this._postCheck = "function" == typeof e.postCheck ? e.postCheck : (e) => e),
              (this._limitTiers =
                (t = this._limit.applyLimitsTo ?? Ue) && t !== Ue
                  ? t === Fe
                    ? new Set([Fe])
                    : t === Be
                      ? new Set([Be])
                      : Array.isArray(t)
                        ? new Set(t)
                        : new Set([Ue])
                  : new Set([Ue])),
              (this._numericAllowed = e.numericAllowed ?? !0),
              (this._baseMap = Le(Pe, e.namedEntities || null)),
              (this._externalMap = Object.create(null)),
              (this._inputMap = Object.create(null)),
              (this._totalExpansions = 0),
              (this._expandedLength = 0),
              (this._removeSet = new Set(e.remove && Array.isArray(e.remove) ? e.remove : [])),
              (this._leaveSet = new Set(e.leave && Array.isArray(e.leave) ? e.leave : [])));
            const r = (function (e) {
              if (!e) return { xmlVersion: 1, onLevel: ze.allow, nullLevel: ze.remove };
              const t = 1.1 === e.xmlVersion ? 1.1 : 1,
                r = ze[e.onNCR ?? "allow"] ?? ze.allow,
                n = ze[e.nullNCR ?? "remove"] ?? ze.remove;
              return { xmlVersion: t, onLevel: r, nullLevel: Math.max(n, ze.remove) };
            })(e.ncr);
            ((this._ncrXmlVersion = r.xmlVersion),
              (this._ncrOnLevel = r.onLevel),
              (this._ncrNullLevel = r.nullLevel));
          }
          setExternalEntities(e) {
            if (e) for (const t of Object.keys(e)) je(t);
            this._externalMap = Le(e);
          }
          addExternalEntity(e, t) {
            (je(e), "string" == typeof t && -1 === t.indexOf("&") && (this._externalMap[e] = t));
          }
          addInputEntities(e) {
            ((this._totalExpansions = 0), (this._expandedLength = 0), (this._inputMap = Le(e)));
          }
          reset() {
            return (
              (this._inputMap = Object.create(null)),
              (this._totalExpansions = 0),
              (this._expandedLength = 0),
              this
            );
          }
          setXmlVersion(e) {
            this._ncrXmlVersion = "1.1" === e || 1.1 === e ? 1.1 : 1;
          }
          decode(e) {
            if ("string" != typeof e || 0 === e.length) return e;
            const t = e,
              r = [],
              n = e.length;
            let s = 0,
              i = 0;
            const o = this._maxTotalExpansions > 0,
              a = this._maxExpandedLength > 0,
              c = o || a;
            for (; i < n;) {
              if (38 !== e.charCodeAt(i)) {
                i++;
                continue;
              }
              let t = i + 1;
              for (; t < n && 59 !== e.charCodeAt(t) && t - i <= 32;) t++;
              if (t >= n || 59 !== e.charCodeAt(t)) {
                i++;
                continue;
              }
              const l = e.slice(i + 1, t);
              if (0 === l.length) {
                i++;
                continue;
              }
              let u, d;
              if (this._removeSet.has(l)) ((u = ""), void 0 === d && (d = Ue));
              else {
                if (this._leaveSet.has(l)) {
                  i++;
                  continue;
                }
                if (35 === l.charCodeAt(0)) {
                  const e = this._resolveNCR(l);
                  if (void 0 === e) {
                    i++;
                    continue;
                  }
                  ((u = e), (d = Be));
                } else {
                  const e = this._resolveName(l);
                  ((u = e?.value), (d = e?.tier));
                }
              }
              if (void 0 !== u) {
                if (
                  (i > s && r.push(e.slice(s, i)),
                  r.push(u),
                  (s = t + 1),
                  (i = s),
                  c && this._tierCounts(d))
                ) {
                  if (
                    o &&
                    (this._totalExpansions++, this._totalExpansions > this._maxTotalExpansions)
                  )
                    throw new Error(
                      `[EntityReplacer] Entity expansion count limit exceeded: ${this._totalExpansions} > ${this._maxTotalExpansions}`,
                    );
                  if (a) {
                    const e = u.length - (l.length + 2);
                    if (
                      e > 0 &&
                      ((this._expandedLength += e), this._expandedLength > this._maxExpandedLength)
                    )
                      throw new Error(
                        `[EntityReplacer] Expanded content length limit exceeded: ${this._expandedLength} > ${this._maxExpandedLength}`,
                      );
                  }
                }
              } else i++;
            }
            s < n && r.push(e.slice(s));
            const l = 0 === r.length ? e : r.join("");
            return this._postCheck(l, t);
          }
          _tierCounts(e) {
            return !!this._limitTiers.has(Fe) || this._limitTiers.has(e);
          }
          _resolveName(e) {
            return e in this._inputMap
              ? { value: this._inputMap[e], tier: Ue }
              : e in this._externalMap
                ? { value: this._externalMap[e], tier: Ue }
                : e in this._baseMap
                  ? { value: this._baseMap[e], tier: Be }
                  : void 0;
          }
          _classifyNCR(e) {
            return 0 === e
              ? this._ncrNullLevel
              : (e >= 55296 && e <= 57343) ||
                  (1 === this._ncrXmlVersion && e >= 1 && e <= 31 && !Ve.has(e))
                ? ze.remove
                : -1;
          }
          _applyNCRAction(e, t, r) {
            switch (e) {
              case ze.allow:
                return String.fromCodePoint(r);
              case ze.remove:
                return "";
              case ze.leave:
                return;
              case ze.throw:
                throw new Error(
                  `[EntityDecoder] Prohibited numeric character reference &${t}; (U+${r.toString(16).toUpperCase().padStart(4, "0")})`,
                );
              default:
                return String.fromCodePoint(r);
            }
          }
          _resolveNCR(e) {
            const t = e.charCodeAt(1);
            let r;
            if (
              ((r = 120 === t || 88 === t ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10)),
              Number.isNaN(r) || r < 0 || r > 1114111)
            )
              return;
            const n = this._classifyNCR(r);
            if (!this._numericAllowed && n < ze.remove) return;
            const s = -1 === n ? this._ncrOnLevel : Math.max(this._ncrOnLevel, n);
            return this._applyNCRAction(s, e, r);
          }
        })({
          namedEntities: {
            ...Pe,
            nbsp: " ",
            copy: "©",
            reg: "®",
            trade: "™",
            mdash: "—",
            ndash: "–",
            hellip: "…",
            laquo: "«",
            raquo: "»",
            lsquo: "‘",
            rsquo: "’",
            ldquo: "“",
            rdquo: "”",
            bull: "•",
            para: "¶",
            sect: "§",
            deg: "°",
            frac12: "½",
            frac14: "¼",
            frac34: "¾",
            cent: "¢",
            pound: "£",
            curren: "¤",
            yen: "¥",
            euro: "€",
            dollar: "$",
            fnof: "ƒ",
            inr: "₹",
            af: "؋",
            birr: "ብር",
            peso: "₱",
            rub: "₽",
            won: "₩",
            yuan: "¥",
            cedil: "¸",
          },
          numericAllowed: !0,
          limit: { maxTotalExpansions: 1 / 0 },
          ncr: { xmlVersion: 1.1 },
        }),
        qe = new (class {
          constructor(e) {
            ((this.externalEntities = {}), (this.options = b(e)));
          }
          parse(e, t) {
            if ("string" != typeof e && e.toString) e = e.toString();
            else if ("string" != typeof e)
              throw new Error("XML data is accepted in String or Bytes[] form.");
            if (t) {
              !0 === t && (t = {});
              const r = (function (e, t) {
                t = Object.assign({}, be, t);
                const r = [];
                let n = !1,
                  s = !1;
                "\ufeff" === e[0] && (e = e.substr(1));
                for (let i = 0; i < e.length; i++)
                  if ("<" === e[i] && "?" === e[i + 1]) {
                    if (((i += 2), (i = ve(e, i)), i.err)) return i;
                  } else {
                    if ("<" !== e[i]) {
                      if (Ee(e[i])) continue;
                      return Ie("InvalidChar", "char '" + e[i] + "' is not expected.", Oe(e, i));
                    }
                    {
                      let o = i;
                      if ((i++, "!" === e[i])) {
                        i = xe(e, i);
                        continue;
                      }
                      {
                        let a = !1;
                        "/" === e[i] && ((a = !0), i++);
                        let c = "";
                        for (
                          ;
                          i < e.length &&
                          ">" !== e[i] &&
                          " " !== e[i] &&
                          "\t" !== e[i] &&
                          "\n" !== e[i] &&
                          "\r" !== e[i];
                          i++
                        )
                          c += e[i];
                        if (
                          ((c = c.trim()),
                          "/" === c[c.length - 1] && ((c = c.substring(0, c.length - 1)), i--),
                          !ke(c))
                        ) {
                          let t;
                          return (
                            (t =
                              0 === c.trim().length
                                ? "Invalid space after '<'."
                                : "Tag '" + c + "' is an invalid name."),
                            Ie("InvalidTag", t, Oe(e, i))
                          );
                        }
                        const l = Ne(e, i);
                        if (!1 === l)
                          return Ie(
                            "InvalidAttr",
                            "Attributes for '" + c + "' have open quote.",
                            Oe(e, i),
                          );
                        let u = l.value;
                        if (((i = l.index), "/" === u[u.length - 1])) {
                          const r = i - u.length;
                          u = u.substring(0, u.length - 1);
                          const s = _e(u, t);
                          if (!0 !== s) return Ie(s.err.code, s.err.msg, Oe(e, r + s.err.line));
                          n = !0;
                        } else if (a) {
                          if (!l.tagClosed)
                            return Ie(
                              "InvalidTag",
                              "Closing tag '" + c + "' doesn't have proper closing.",
                              Oe(e, i),
                            );
                          if (u.trim().length > 0)
                            return Ie(
                              "InvalidTag",
                              "Closing tag '" + c + "' can't have attributes or invalid starting.",
                              Oe(e, o),
                            );
                          if (0 === r.length)
                            return Ie(
                              "InvalidTag",
                              "Closing tag '" + c + "' has not been opened.",
                              Oe(e, o),
                            );
                          {
                            const t = r.pop();
                            if (c !== t.tagName) {
                              let r = Oe(e, t.tagStartPos);
                              return Ie(
                                "InvalidTag",
                                "Expected closing tag '" +
                                  t.tagName +
                                  "' (opened in line " +
                                  r.line +
                                  ", col " +
                                  r.col +
                                  ") instead of closing tag '" +
                                  c +
                                  "'.",
                                Oe(e, o),
                              );
                            }
                            0 == r.length && (s = !0);
                          }
                        } else {
                          const a = _e(u, t);
                          if (!0 !== a)
                            return Ie(a.err.code, a.err.msg, Oe(e, i - u.length + a.err.line));
                          if (!0 === s)
                            return Ie(
                              "InvalidXml",
                              "Multiple possible root nodes found.",
                              Oe(e, i),
                            );
                          (-1 !== t.unpairedTags.indexOf(c) ||
                            r.push({ tagName: c, tagStartPos: o }),
                            (n = !0));
                        }
                        for (i++; i < e.length; i++)
                          if ("<" === e[i]) {
                            if ("!" === e[i + 1]) {
                              (i++, (i = xe(e, i)));
                              continue;
                            }
                            if ("?" !== e[i + 1]) break;
                            if (((i = ve(e, ++i)), i.err)) return i;
                          } else if ("&" === e[i]) {
                            const t = Re(e, i);
                            if (-1 == t)
                              return Ie("InvalidChar", "char '&' is not expected.", Oe(e, i));
                            i = t;
                          } else if (!0 === s && !Ee(e[i]))
                            return Ie("InvalidXml", "Extra text at the end", Oe(e, i));
                        "<" === e[i] && i--;
                      }
                    }
                  }
                return n
                  ? 1 == r.length
                    ? Ie(
                        "InvalidTag",
                        "Unclosed tag '" + r[0].tagName + "'.",
                        Oe(e, r[0].tagStartPos),
                      )
                    : !(r.length > 0) ||
                      Ie(
                        "InvalidXml",
                        "Invalid '" +
                          JSON.stringify(
                            r.map((e) => e.tagName),
                            null,
                            4,
                          ).replace(/\r?\n/g, "") +
                          "' found.",
                        { line: 1, col: 1 },
                      )
                  : Ie("InvalidXml", "Start tag expected.", 1);
              })(e, t);
              if (!0 !== r) throw Error(`${r.err.msg}:${r.err.line}:${r.err.col}`);
            }
            const r = new K(this.options, this.externalEntities),
              n = r.parseXml(e);
            return this.options.preserveOrder || void 0 === n
              ? n
              : ge(n, this.options, r.matcher, r.readonlyMatcher);
          }
          addEntity(e, t) {
            if (-1 !== t.indexOf("&")) throw new Error("Entity value can't have '&'");
            if (-1 !== e.indexOf("&") || -1 !== e.indexOf(";"))
              throw new Error(
                "An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'",
              );
            if ("&" === t) throw new Error("An entity with value '&' is not permitted");
            this.externalEntities[e] = t;
          }
          static getMetaDataSymbol() {
            return v.getMetaDataSymbol();
          }
        })({
          attributeNamePrefix: "",
          processEntities: { enabled: !0, maxTotalExpansions: 1 / 0 },
          htmlEntities: !0,
          entityDecoder: {
            setExternalEntities: (e) => {
              He.setExternalEntities(e);
            },
            addInputEntities: (e) => {
              He.addInputEntities(e);
            },
            reset: () => {
              He.reset();
            },
            decode: (e) => He.decode(e),
            setXmlVersion: (e) => {},
          },
          ignoreAttributes: !1,
          ignoreDeclaration: !0,
          parseTagValue: !1,
          trimValues: !1,
          tagValueProcessor: (e, t) => ("" === t.trim() && t.includes("\n") ? "" : void 0),
          maxNestedTags: 1 / 0,
        });
      function We(e) {
        return qe.parse(e, !0);
      }
    },
    43801: (e, t, r) => {
      "use strict";
      r.d(t, { y: () => c });
      var n = r(42997),
        s = r(73931),
        i = r(96851),
        o = r(99430);
      const a = (e) =>
        "number" == typeof e
          ? new Date(1e3 * e)
          : "string" == typeof e
            ? Number(e)
              ? new Date(1e3 * Number(e))
              : new Date(e)
            : e;
      class c {
        service;
        regionProvider;
        credentialProvider;
        sha256;
        uriEscapePath;
        applyChecksum;
        constructor({
          applyChecksum: e,
          credentials: t,
          region: r,
          service: s,
          sha256: i,
          uriEscapePath: o = !0,
        }) {
          ((this.service = s),
            (this.sha256 = i),
            (this.uriEscapePath = o),
            (this.applyChecksum = "boolean" != typeof e || e),
            (this.regionProvider = (0, n.normalizeProvider)(r)),
            (this.credentialProvider = (0, n.normalizeProvider)(t)));
        }
        createCanonicalRequest(e, t, r) {
          const n = Object.keys(t).sort();
          return `${e.method}\n${this.getCanonicalPath(e)}\n${(0, o.$)(e)}\n${n.map((e) => `${e}:${t[e]}`).join("\n")}\n\n${n.join(";")}\n${r}`;
        }
        async createStringToSign(e, t, r, n) {
          const s = new this.sha256();
          s.update((0, i.toUint8Array)(r));
          const o = await s.digest();
          return `${n}\n${e}\n${t}\n${(0, i.toHex)(o)}`;
        }
        getCanonicalPath({ path: e }) {
          if (this.uriEscapePath) {
            const t = [];
            for (const r of e.split("/"))
              0 !== r?.length && "." !== r && (".." === r ? t.pop() : t.push(r));
            const r = `${e?.startsWith("/") ? "/" : ""}${t.join("/")}${t.length > 0 && e?.endsWith("/") ? "/" : ""}`;
            return (0, s.escapeUri)(r).replace(/%2F/g, "/");
          }
          return e;
        }
        validateResolvedCredentials(e) {
          if (
            "object" != typeof e ||
            "string" != typeof e.accessKeyId ||
            "string" != typeof e.secretAccessKey
          )
            throw new Error("Resolved credential object is not valid");
        }
        formatDate(e) {
          const t = ((r = e),
          a(r)
            .toISOString()
            .replace(/\.\d{3}Z$/, "Z")).replace(/[\-:]/g, "");
          var r;
          return { longDate: t, shortDate: t.slice(0, 8) };
        }
        getCanonicalHeaderList(e) {
          return Object.keys(e).sort().join(";");
        }
      }
    },
    49125: (e, t, r) => {
      "use strict";
      (r.r(t), r.d(t, { fromUtf8: () => n.a, toUint8Array: () => s.F, toUtf8: () => i.P }));
      var n = r(6846),
        s = r(15725),
        i = r(86507);
    },
    50358: (e, t, r) => {
      "use strict";
      (r.r(t), r.d(t, { calculateBodyLength: () => s }));
      var n = r(73024);
      const s = (e) => {
        if (!e) return 0;
        if ("string" == typeof e) return Buffer.byteLength(e);
        if ("number" == typeof e.byteLength) return e.byteLength;
        if ("number" == typeof e.size) return e.size;
        if ("number" == typeof e.start && "number" == typeof e.end) return e.end + 1 - e.start;
        if (e instanceof n.ReadStream) {
          if (null != e.path) return (0, n.lstatSync)(e.path).size;
          if ("number" == typeof e.fd) return (0, n.fstatSync)(e.fd).size;
        }
        throw new Error(`Body Length computation failed for ${e}`);
      };
    },
    51181: (e, t, r) => {
      "use strict";
      r.d(t, {
        Df: () => o,
        G8: () => s,
        Rn: () => c,
        XP: () => l,
        XS: () => a,
        bp: () => n,
        jh: () => i,
        l5: () => u,
        ok: () => d,
      });
      const n = 100,
        s = 2e4,
        i = 500,
        o = 500,
        a = 5,
        c = 10,
        l = 1,
        u = "amz-sdk-invocation-id",
        d = "amz-sdk-request";
    },
    53043: (e, t, r) => {
      "use strict";
      (r.r(t), r.d(t, { parseUrl: () => n }));
      const n = (e) => {
        if ("string" == typeof e) return n(new URL(e));
        const { hostname: t, pathname: r, port: s, protocol: i, search: o } = e;
        let a;
        return (
          o &&
            (a = (function (e) {
              const t = {};
              if ((e = e.replace(/^\?/, "")))
                for (const r of e.split("&")) {
                  let [e, n = null] = r.split("=");
                  ((e = decodeURIComponent(e)),
                    n && (n = decodeURIComponent(n)),
                    e in t
                      ? Array.isArray(t[e])
                        ? t[e].push(n)
                        : (t[e] = [t[e], n])
                      : (t[e] = n));
                }
              return t;
            })(o)),
          { hostname: t, port: s ? parseInt(s) : void 0, protocol: i, path: r, query: a }
        );
      };
    },
    55164: (e, t, r) => {
      "use strict";
      (r.r(t),
        r.d(t, {
          endpointMiddleware: () => b,
          endpointMiddlewareOptions: () => v,
          getEndpointFromInstructions: () => m,
          getEndpointPlugin: () => x,
          resolveEndpointConfig: () => A,
          resolveEndpointRequiredConfig: () => N,
          resolveParams: () => y,
          toEndpointV1: () => g,
        }));
      const n = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/,
        s = /(\d+\.){3}\d+/,
        i = /\.\./,
        o = (e) => n.test(e) && !s.test(e) && !i.test(e),
        a = (e) => {
          const [t, r, n, , , s] = e.split(":"),
            i = "arn" === t && e.split(":").length >= 6,
            o = Boolean(i && r && n && s);
          if (i && !o) throw new Error(`Invalid ARN: ${e} was an invalid ARN.`);
          return o;
        },
        c = (e, t, r, n = !1) => {
          const s = async () => {
            let s;
            if (n) {
              const n = r.clientContextParams,
                i = n?.[e];
              s = i ?? r[e] ?? r[t];
            } else s = r[e] ?? r[t];
            return "function" == typeof s ? s() : s;
          };
          return "credentialScope" === e || "CredentialScope" === t
            ? async () => {
                const e =
                  "function" == typeof r.credentials ? await r.credentials() : r.credentials;
                return e?.credentialScope ?? e?.CredentialScope;
              }
            : "accountId" === e || "AccountId" === t
              ? async () => {
                  const e =
                    "function" == typeof r.credentials ? await r.credentials() : r.credentials;
                  return e?.accountId ?? e?.AccountId;
                }
              : "endpoint" === e || "endpoint" === t
                ? async () => {
                    if (!1 === r.isCustomEndpoint) return;
                    const e = await s();
                    if (e && "object" == typeof e) {
                      if ("url" in e) return e.url.href;
                      if ("hostname" in e) {
                        const { protocol: t, hostname: r, port: n, path: s } = e;
                        return `${t}//${r}${n ? ":" + n : ""}${s}`;
                      }
                    }
                    return e;
                  }
                : s;
        };
      var l = r(74935),
        u = r(42757);
      const d = "AWS_ENDPOINT_URL",
        h = "endpoint_url",
        f = async (e) =>
          (0, l.Z)(
            ((e) => ({
              environmentVariableSelector: (t) => {
                const r = e.split(" ").map((e) => e.toUpperCase()),
                  n = t[[d, ...r].join("_")];
                if (n) return n;
                return t[d] || void 0;
              },
              configFileSelector: (t, r) => {
                if (r && t.services) {
                  const n = r[["services", t.services].join(u.Q)];
                  if (n) {
                    const t =
                      n[
                        [
                          e
                            .split(" ")
                            .map((e) => e.toLowerCase())
                            .join("_"),
                          h,
                        ].join(u.Q)
                      ];
                    if (t) return t;
                  }
                }
                const n = t[h];
                if (n) return n;
              },
              default: void 0,
            }))(e ?? ""),
          )();
      var p = r(53043);
      const g = (e) => {
          if ("object" == typeof e) {
            if ("url" in e) {
              const t = (0, p.parseUrl)(e.url);
              if (e.headers) {
                t.headers = {};
                for (const [r, n] of Object.entries(e.headers))
                  t.headers[r.toLowerCase()] = n.join(", ");
              }
              return t;
            }
            return e;
          }
          return (0, p.parseUrl)(e);
        },
        m = async (e, t, r, n) => {
          if (!r.isCustomEndpoint) {
            let e;
            ((e = r.serviceConfiguredEndpoint
              ? await r.serviceConfiguredEndpoint()
              : await f(r.serviceId)),
              e && ((r.endpoint = () => Promise.resolve(g(e))), (r.isCustomEndpoint = !0)));
          }
          const s = await y(e, t, r);
          if ("function" != typeof r.endpointProvider)
            throw new Error("config.endpointProvider is not set.");
          const i = r.endpointProvider(s, n);
          if (r.isCustomEndpoint && r.endpoint) {
            const e = await r.endpoint();
            if (e?.headers) {
              i.headers ??= {};
              for (const [t, r] of Object.entries(e.headers))
                i.headers[t] = Array.isArray(r) ? r : [r];
            }
          }
          return i;
        },
        y = async (e, t, r) => {
          const n = {},
            s = t?.getEndpointParameterInstructions?.() || {};
          for (const [t, i] of Object.entries(s))
            switch (i.type) {
              case "staticContextParams":
                n[t] = i.value;
                break;
              case "contextParams":
                n[t] = e[i.name];
                break;
              case "clientContextParams":
              case "builtInParams":
                n[t] = await c(i.name, t, r, "builtInParams" !== i.type)();
                break;
              case "operationContextParams":
                n[t] = i.get(e);
                break;
              default:
                throw new Error(
                  "Unrecognized endpoint parameter instruction: " + JSON.stringify(i),
                );
            }
          return (
            0 === Object.keys(s).length && Object.assign(n, r),
            "s3" === String(r.serviceId).toLowerCase() &&
              (await (async (e) => {
                const t = e?.Bucket || "";
                if (
                  ("string" == typeof e.Bucket &&
                    (e.Bucket = t
                      .replace(/#/g, encodeURIComponent("#"))
                      .replace(/\?/g, encodeURIComponent("?"))),
                  a(t))
                ) {
                  if (!0 === e.ForcePathStyle)
                    throw new Error("Path-style addressing cannot be used with ARN buckets");
                } else
                  (!o(t) ||
                    (-1 !== t.indexOf(".") && !String(e.Endpoint).startsWith("http:")) ||
                    t.toLowerCase() !== t ||
                    t.length < 3) &&
                    (e.ForcePathStyle = !0);
                return (
                  e.DisableMultiRegionAccessPoints &&
                    ((e.disableMultiRegionAccessPoints = !0), (e.DisableMRAP = !0)),
                  e
                );
              })(n)),
            n
          );
        };
      var w = r(55909),
        S = r(85919);
      const b =
          ({ config: e, instructions: t }) =>
          (r, n) =>
          async (s) => {
            e.isCustomEndpoint && (0, w.setFeature)(n, "ENDPOINT_OVERRIDE", "N");
            const i = await m(s.input, { getEndpointParameterInstructions: () => t }, { ...e }, n);
            ((n.endpointV2 = i), (n.authSchemes = i.properties?.authSchemes));
            const o = n.authSchemes?.[0];
            if (o) {
              ((n.signing_region = o.signingRegion), (n.signing_service = o.signingName));
              const e = (0, S.u)(n),
                t = e?.selectedHttpAuthScheme?.httpAuthOption;
              t &&
                (t.signingProperties = Object.assign(
                  t.signingProperties || {},
                  {
                    signing_region: o.signingRegion,
                    signingRegion: o.signingRegion,
                    signing_service: o.signingName,
                    signingName: o.signingName,
                    signingRegionSet: o.signingRegionSet,
                  },
                  o.properties,
                ));
            }
            return r({ ...s });
          },
        E = { name: "serializerMiddleware", step: "serialize", tags: ["SERIALIZER"], override: !0 };
      const v = {
          step: "serialize",
          tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
          name: "endpointV2Middleware",
          override: !0,
          relation: "before",
          toMiddleware: E.name,
        },
        x = (e, t) => ({
          applyToStack: (r) => {
            r.addRelativeTo(b({ config: e, instructions: t }), v);
          },
        });
      var T = r(90570);
      const A = (e) => {
          const t = e.tls ?? !0,
            { endpoint: r, useDualstackEndpoint: n, useFipsEndpoint: s } = e,
            i = null != r ? async () => g(await (0, T.t)(r)()) : void 0,
            o = !!r,
            a = Object.assign(e, {
              endpoint: i,
              tls: t,
              isCustomEndpoint: o,
              useDualstackEndpoint: (0, T.t)(n ?? !1),
              useFipsEndpoint: (0, T.t)(s ?? !1),
            });
          let c;
          return (
            (a.serviceConfiguredEndpoint = async () => (
              e.serviceId && !c && (c = f(e.serviceId)),
              c
            )),
            a
          );
        },
        N = (e) => {
          const { endpoint: t } = e;
          return (
            void 0 === t &&
              (e.endpoint = async () => {
                throw new Error(
                  "@smithy/middleware-endpoint: (default endpointRuleSet) endpoint is not set - you must configure an endpoint.",
                );
              }),
            e
          );
        };
    },
    55936: (e, t, r) => {
      "use strict";
      r.d(t, { n: () => i });
      var n = r(90443),
        s = r(6846);
      const i = (e) => {
        let t;
        if (
          ((t = "string" == typeof e ? (0, s.a)(e) : e),
          "object" != typeof t ||
            "number" != typeof t.byteOffset ||
            "number" != typeof t.byteLength)
        )
          throw new Error(
            "@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.",
          );
        return (0, n.Q)(t.buffer, t.byteOffset, t.byteLength).toString("base64");
      };
    },
    58571: (e, t, r) => {
      const { ProviderError: n, booleanSelector: s, SelectorType: i, loadConfig: o } = r(86344),
        { setCredentialFeature: a } = r(97464),
        {
          normalizeProvider: c,
          memoizeIdentityProvider: l,
          isIdentityExpired: u,
          doesIdentityRequireRefresh: d,
        } = r(55909),
        { SignatureV4: h } = r(6328),
        { HttpResponse: f, HttpRequest: p } = r(73931),
        g = (e) => (f.isInstance(e) ? (e.headers?.date ?? e.headers?.Date) : void 0),
        m = (e) => (f.isInstance(e) ? (e.headers?.age ?? e.headers?.Age) : void 0),
        y = (e) => new Date(Date.now() + e),
        w = (e, t, r, n) => {
          if (void 0 !== n) return t;
          const s = Date.parse(e),
            i = Date.now();
          if (void 0 !== r && i - r > 9e5) return t;
          return void 0 !== r ? s - (r + i) / 2 : s - i;
        },
        S = (e, t) => {
          if (!t) throw new Error(`Property \`${e}\` is not resolved for AWS SDK SigV4Auth`);
          return t;
        },
        b = async (e) => {
          const t = S("context", e.context),
            r = S("config", e.config),
            n = t.endpointV2?.properties?.authSchemes?.[0],
            s = S("signer", r.signer),
            i = await s(n),
            o = e?.signingRegion,
            a = e?.signingRegionSet,
            c = e?.signingName;
          return { config: r, signer: i, signingRegion: o, signingRegionSet: a, signingName: c };
        };
      class E {
        async sign(e, t, r) {
          if (!p.isInstance(e))
            throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
          const n = await b(r),
            { config: s, signer: i } = n;
          let { signingRegion: o, signingName: a } = n;
          const c = r.context;
          if (c?.authSchemes?.length) {
            const [e, t] = c.authSchemes;
            "sigv4a" === e?.name &&
              "sigv4" === t?.name &&
              ((o = t?.signingRegion ?? o), (a = t?.signingName ?? a));
          }
          const l = !0 === (await s.disableClockSkewCorrection?.());
          ((r._disableClockSkewCorrection = l),
            l ||
              ((r._preRequestSystemClockOffset = s.systemClockOffset),
              (r._requestSentAt = Date.now())));
          return await i.sign(e, {
            signingDate: l ? new Date() : y(s.systemClockOffset),
            signingRegion: o,
            signingService: a,
          });
        }
        errorHandler(e) {
          return (t) => {
            const r = t;
            if (!e._disableClockSkewCorrection) {
              const t = r.ServerTime ?? g(r.$response);
              if (t) {
                const n = S("config", e.config),
                  s = e._preRequestSystemClockOffset,
                  i = e._requestSentAt,
                  o = m(r.$response),
                  a = w(t, n.systemClockOffset, i, o);
                n.systemClockOffset = a;
                Math.abs(a) >= 24e4 &&
                  (a !== s || (void 0 !== s && s !== a)) &&
                  r.$metadata &&
                  (r.$metadata.clockSkewCorrected = !0);
              }
            }
            throw t;
          };
        }
        successHandler(e, t) {
          if (t._disableClockSkewCorrection) return;
          const r = g(e);
          if (r) {
            const n = S("config", t.config),
              s = t._requestSentAt,
              i = m(e);
            n.systemClockOffset = w(r, n.systemClockOffset, s, i);
          }
        }
      }
      const v = E;
      const x = (e) =>
          "string" == typeof e && e.length > 0 ? e.split(",").map((e) => e.trim()) : [],
        T = (e) => `AWS_BEARER_TOKEN_${e.replace(/[\s-]/g, "_").toUpperCase()}`,
        A = "AWS_AUTH_SCHEME_PREFERENCE",
        N = "auth_scheme_preference",
        C = {
          environmentVariableSelector: (e, t) => {
            if (t?.signingName) {
              if (T(t.signingName) in e) return ["httpBearerAuth"];
            }
            if (A in e) return x(e[A]);
          },
          configFileSelector: (e) => {
            if (N in e) return x(e[N]);
          },
          default: [],
        },
        _ = {
          environmentVariableSelector(e) {
            if (e.AWS_SIGV4A_SIGNING_REGION_SET)
              return e.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map((e) => e.trim());
            throw new n("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", { tryNextLink: !0 });
          },
          configFileSelector(e) {
            if (e.sigv4a_signing_region_set)
              return (e.sigv4a_signing_region_set ?? "").split(",").map((e) => e.trim());
            throw new n("sigv4a_signing_region_set not set in profile.", { tryNextLink: !0 });
          },
          default: void 0,
        };
      const R = o({
          environmentVariableSelector: (e) => s(e, "AWS_DISABLE_CLOCK_SKEW_CORRECTION", i.ENV),
          configFileSelector: (e) => s(e, "disable_clock_skew_correction", i.CONFIG),
          default: !1,
        }),
        I =
          ((D = R),
          (e) => {
            let t,
              r = e.credentials,
              n = !!e.credentials;
            (Object.defineProperty(e, "credentials", {
              set(s) {
                (s && s !== r && s !== t && (n = !0), (r = s));
                const i = (function (e, { credentials: t, credentialDefaultProvider: r }) {
                    let n;
                    return (
                      (n = t
                        ? t?.memoized
                          ? t
                          : l(t, u, d)
                        : r
                          ? c(r(Object.assign({}, e, { parentClientConfig: e })))
                          : async () => {
                              throw new Error(
                                "@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.",
                              );
                            }),
                      (n.memoized = !0),
                      n
                    );
                  })(e, { credentials: r, credentialDefaultProvider: e.credentialDefaultProvider }),
                  o = (function (e, t) {
                    if (t.configBound) return t;
                    const r = async (r) => t({ ...r, callerClientConfig: e });
                    return ((r.memoized = t.memoized), (r.configBound = !0), r);
                  })(e, i);
                if (n && !o.attributed) {
                  const e = "object" == typeof r && null !== r;
                  ((t = async (t) => {
                    const r = await o(t);
                    return !e || (r.$source && 0 !== Object.keys(r.$source).length)
                      ? r
                      : a(r, "CREDENTIALS_CODE", "e");
                  }),
                    (t.memoized = o.memoized),
                    (t.configBound = o.configBound),
                    (t.attributed = !0));
                } else t = o;
              },
              get: () => t,
              enumerable: !0,
              configurable: !0,
            }),
              (e.credentials = r));
            const {
              signingEscapePath: s = !0,
              systemClockOffset: i = e.systemClockOffset || 0,
              sha256: o,
            } = e;
            let f;
            return (
              (f = e.signer
                ? c(e.signer)
                : e.regionInfoProvider
                  ? () =>
                      c(e.region)()
                        .then(async (t) => [
                          (await e.regionInfoProvider(t, {
                            useFipsEndpoint: await e.useFipsEndpoint(),
                            useDualstackEndpoint: await e.useDualstackEndpoint(),
                          })) || {},
                          t,
                        ])
                        .then(([t, r]) => {
                          const { signingRegion: n, signingService: i } = t;
                          ((e.signingRegion = e.signingRegion || n || r),
                            (e.signingName = e.signingName || i || e.serviceId));
                          const a = {
                            ...e,
                            credentials: e.credentials,
                            region: e.signingRegion,
                            service: e.signingName,
                            sha256: o,
                            uriEscapePath: s,
                          };
                          return new (e.signerConstructor || h)(a);
                        })
                  : async (t) => {
                      const r = (t = Object.assign(
                          {},
                          {
                            name: "sigv4",
                            signingName: e.signingName || e.defaultSigningName,
                            signingRegion: await c(e.region)(),
                            properties: {},
                          },
                          t,
                        )).signingRegion,
                        n = t.signingName;
                      ((e.signingRegion = e.signingRegion || r),
                        (e.signingName = e.signingName || n || e.serviceId));
                      const i = {
                        ...e,
                        credentials: e.credentials,
                        region: e.signingRegion,
                        service: e.signingName,
                        sha256: o,
                        uriEscapePath: s,
                      };
                      return new (e.signerConstructor || h)(i);
                    }),
              Object.assign(e, {
                systemClockOffset: i,
                signingEscapePath: s,
                signer: f,
                disableClockSkewCorrection: c(e.disableClockSkewCorrection ?? D),
              })
            );
          });
      var D;
      const k = I;
      ((t.AWSSDKSigV4Signer = v),
        (t.AwsSdkSigV4ASigner = class extends E {
          async sign(e, t, r) {
            if (!p.isInstance(e))
              throw new Error(
                "The request is not an instance of `HttpRequest` and cannot be signed",
              );
            const {
                config: n,
                signer: s,
                signingRegion: i,
                signingRegionSet: o,
                signingName: a,
              } = await b(r),
              c = ((await n.sigv4aSigningRegionSet?.()) ?? o ?? [i]).join(","),
              l = !0 === (await n.disableClockSkewCorrection?.());
            ((r._disableClockSkewCorrection = l),
              l ||
                ((r._preRequestSystemClockOffset = n.systemClockOffset),
                (r._requestSentAt = Date.now())));
            return await s.sign(e, {
              signingDate: l ? new Date() : y(n.systemClockOffset),
              signingRegion: c,
              signingService: a,
            });
          }
        }),
        (t.AwsSdkSigV4Signer = E),
        (t.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = C),
        (t.NODE_SIGV4A_CONFIG_OPTIONS = _),
        (t.getBearerTokenEnvKey = T),
        (t.resolveAWSSDKSigV4Config = k),
        (t.resolveAwsSdkSigV4AConfig = (e) => (
          (e.sigv4aSigningRegionSet = c(e.sigv4aSigningRegionSet)),
          e
        )),
        (t.resolveAwsSdkSigV4Config = I),
        (t.validateSigningProperties = b));
    },
    58699: (e, t, r) => {
      "use strict";
      r.d(t, { ou: () => n });
      const n = (e, t) => {
        e = e.toLowerCase();
        for (const r of Object.keys(t)) if (e === r.toLowerCase()) return !0;
        return !1;
      };
    },
    59344: (e, t, r) => {
      "use strict";
      (r.r(t),
        r.d(t, {
          Field: () => o,
          Fields: () => a,
          HttpRequest: () => c.K,
          HttpResponse: () => l.c,
          getHttpHandlerExtensionConfiguration: () => n,
          isValidHostname: () => u,
          resolveHttpHandlerRuntimeConfig: () => s,
        }));
      const n = (e) => ({
          setHttpHandler(t) {
            e.httpHandler = t;
          },
          httpHandler: () => e.httpHandler,
          updateHttpClientConfig(t, r) {
            e.httpHandler?.updateHttpClientConfig(t, r);
          },
          httpHandlerConfigs: () => e.httpHandler.httpHandlerConfigs(),
        }),
        s = (e) => ({ httpHandler: e.httpHandler() });
      var i;
      !(function (e) {
        ((e[(e.HEADER = 0)] = "HEADER"), (e[(e.TRAILER = 1)] = "TRAILER"));
      })(i || (i = {}));
      class o {
        name;
        kind;
        values;
        constructor({ name: e, kind: t = i.HEADER, values: r = [] }) {
          ((this.name = e), (this.kind = t), (this.values = r));
        }
        add(e) {
          this.values.push(e);
        }
        set(e) {
          this.values = e;
        }
        remove(e) {
          this.values = this.values.filter((t) => t !== e);
        }
        toString() {
          return this.values
            .map((e) => (e.includes(",") || e.includes(" ") ? `"${e}"` : e))
            .join(", ");
        }
        get() {
          return this.values;
        }
      }
      class a {
        entries = {};
        encoding;
        constructor({ fields: e = [], encoding: t = "utf-8" }) {
          (e.forEach(this.setField.bind(this)), (this.encoding = t));
        }
        setField(e) {
          this.entries[e.name.toLowerCase()] = e;
        }
        getField(e) {
          return this.entries[e.toLowerCase()];
        }
        removeField(e) {
          delete this.entries[e.toLowerCase()];
        }
        getByType(e) {
          return Object.values(this.entries).filter((t) => t.kind === e);
        }
      }
      var c = r(50333),
        l = r(7369);
      function u(e) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(e);
      }
    },
    62340: (e, t, r) => {
      "use strict";
      r.d(t, { X: () => s });
      const n = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"),
        s = (e, t = !1) => {
          if (!t) return n.test(e);
          const r = e.split(".");
          for (const e of r) if (!s(e)) return !1;
          return !0;
        };
    },
    64972: (e, t, r) => {
      "use strict";
      var n;
      (r.d(t, { Gz: () => s, L0: () => i, cm: () => n }),
        (function (e) {
          ((e.STANDARD = "standard"), (e.ADAPTIVE = "adaptive"));
        })(n || (n = {})));
      const s = 3,
        i = n.STANDARD;
    },
    65844: (e, t, r) => {
      "use strict";
      r.d(t, { N: () => n });
      class n {
        trace() {}
        debug() {}
        info() {}
        warn() {}
        error() {}
      }
    },
    66220: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => i });
      var n = r(96851),
        s = r(88141);
      const i = async ({ headers: e, body: t }, r) => {
        for (const t of Object.keys(e)) if (t.toLowerCase() === s.Wd) return e[t];
        if (null == t) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
        if ("string" == typeof t || ArrayBuffer.isView(t) || (0, n.isArrayBuffer)(t)) {
          const e = new r();
          return (e.update((0, n.toUint8Array)(t)), (0, n.toHex)(await e.digest()));
        }
        return s.z8;
      };
    },
    68521: (e, t, r) => {
      "use strict";
      r.d(t, { B: () => n });
      const n = (e, t, r) => {
        let n,
          s,
          i,
          o = !1;
        const a = async () => {
          s || (s = e());
          try {
            ((n = await s), (i = !0), (o = !1));
          } finally {
            s = void 0;
          }
          return n;
        };
        return void 0 === t
          ? async (e) => ((i && !e?.forceRefresh) || (n = await a()), n)
          : async (e) => (
              (i && !e?.forceRefresh) || (n = await a()),
              o ? n : r && !r(n) ? ((o = !0), n) : t(n) ? (await a(), n) : n
            );
      };
    },
    70904: (e, t, r) => {
      "use strict";
      r.d(t, { N: () => n });
      const n = { setTimeout: (e, t) => setTimeout(e, t), clearTimeout: (e) => clearTimeout(e) };
    },
    71747: (e, t, r) => {
      "use strict";
      r.d(t, { D: () => i, b: () => s });
      var n = r(55909);
      const s = void 0;
      function i(e) {
        const t = (0, n.normalizeProvider)(e.userAgentAppId ?? s),
          { customUserAgent: r } = e;
        return Object.assign(e, {
          customUserAgent: "string" == typeof r ? [[r]] : r,
          userAgentAppId: async () => {
            const r = await t();
            if (
              !(function (e) {
                return void 0 === e || ("string" == typeof e && e.length <= 50);
              })(r)
            ) {
              const t =
                "NoOpLogger" !== e.logger?.constructor?.name && e.logger ? e.logger : console;
              "string" != typeof r
                ? t?.warn("userAgentAppId must be a string or undefined.")
                : r.length > 50 &&
                  t?.warn(
                    "The provided userAgentAppId exceeds the maximum length of 50 characters.",
                  );
            }
            return r;
          },
        });
      }
    },
    74935: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => u });
      var n = r(68521),
        s = r(480),
        i = r(61178);
      function o(e) {
        try {
          const t = new Set(Array.from(e.match(/([A-Z_]){3,}/g) ?? []));
          return (
            t.delete("CONFIG"),
            t.delete("CONFIG_PREFIX_SEPARATOR"),
            t.delete("ENV"),
            [...t].join(", ")
          );
        } catch (t) {
          return e;
        }
      }
      var a = r(50800),
        c = r(68395);
      const l = (e) => {
          return "function" == typeof e
            ? async () => await e()
            : ((t = e), () => Promise.resolve(t));
          var t;
        },
        u = ({ environmentVariableSelector: e, configFileSelector: t, default: r }, u = {}) => {
          const { signingName: d, logger: h } = u,
            f = { signingName: d, logger: h };
          return (0, n.B)(
            (0, s.c)(
              ((p = e),
              (g = f),
              async () => {
                try {
                  const e = p(process.env, g);
                  if (void 0 === e) throw new Error();
                  return e;
                } catch (e) {
                  throw new i.C(e.message || `Not found in ENV: ${o(p.toString())}`, {
                    logger: g?.logger,
                  });
                }
              }),
              (
                (e, { preferredFile: t = "config", ...r } = {}) =>
                async () => {
                  const n = (0, a.Bz)(r),
                    { configFile: s, credentialsFile: l } = await (0, c.p)(r),
                    u = l[n] || {},
                    d = s[n] || {},
                    h = "config" === t ? { ...u, ...d } : { ...d, ...u };
                  try {
                    const r = e(h, "config" === t ? s : l);
                    if (void 0 === r) throw new Error();
                    return r;
                  } catch (t) {
                    throw new i.C(
                      t.message ||
                        `Not found in config files w/ profile [${n}]: ${o(e.toString())}`,
                      { logger: r.logger },
                    );
                  }
                }
              )(t, u),
              l(r),
            ),
          );
          var p, g;
        };
    },
    77330: (e, t, r) => {
      "use strict";
      r.d(t, { Fb: () => i });
      var n = r(93451),
        s = r(26713);
      const i = (e, t) =>
          Object.entries(e).reduce((e, [r, n]) => ((e[r] = a.getEndpointProperty(n, t)), e), {}),
        o = (e, t) => {
          if (Array.isArray(e)) return e.map((e) => o(e, t));
          switch (typeof e) {
            case "string":
              return (0, s.M)(e, t);
            case "object":
              if (null === e) throw new n.c(`Unexpected endpoint property: ${e}`);
              return a.getEndpointProperties(e, t);
            case "boolean":
              return e;
            default:
              throw new n.c("Unexpected endpoint property type: " + typeof e);
          }
        },
        a = { getEndpointProperty: o, getEndpointProperties: i };
    },
    77654: (e, t, r) => {
      "use strict";
      r.d(t, { T: () => o });
      var n = r(62340);
      const s = new Set(),
        i = (e) => "string" == typeof e && (e.startsWith("fips-") || e.endsWith("-fips")),
        o = (e) => {
          const { region: t, useFipsEndpoint: r } = e;
          if (!t) throw new Error("Region is missing");
          return Object.assign(e, {
            region: async () => {
              const e = ((e) =>
                i(e)
                  ? ["fips-aws-global", "aws-fips"].includes(e)
                    ? "us-east-1"
                    : e.replace(/fips-(dkr-|prod-)?|-fips/, "")
                  : e)("function" == typeof t ? await t() : t);
              return (
                ((e, t = n.X) => {
                  if (s.has(e) || t(e)) s.add(e);
                  else {
                    if ("*" !== e)
                      throw new Error(
                        `Region not accepted: region="${e}" is not a valid hostname component.`,
                      );
                    console.warn(
                      '@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.',
                    );
                  }
                })(e),
                e
              );
            },
            useFipsEndpoint: async () => {
              const e = "string" == typeof t ? t : await t();
              return !!i(e) || ("function" != typeof r ? Promise.resolve(!!r) : r());
            },
          });
        };
    },
    78520: (e, t, r) => {
      "use strict";
      (r.r(t),
        r.d(t, {
          CONFIG_USE_DUALSTACK_ENDPOINT: () => o,
          CONFIG_USE_FIPS_ENDPOINT: () => d,
          DEFAULT_USE_DUALSTACK_ENDPOINT: () => a,
          DEFAULT_USE_FIPS_ENDPOINT: () => h,
          ENV_USE_DUALSTACK_ENDPOINT: () => i,
          ENV_USE_FIPS_ENDPOINT: () => u,
          NODE_REGION_CONFIG_FILE_OPTIONS: () => w.zH,
          NODE_REGION_CONFIG_OPTIONS: () => w.GG,
          NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS: () => c,
          NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS: () => f,
          REGION_ENV_NAME: () => w.Fc,
          REGION_INI_NAME: () => w.OR,
          getRegionInfo: () => E,
          nodeDualstackConfigSelectors: () => l,
          nodeFipsConfigSelectors: () => p,
          resolveCustomEndpointsConfig: () => m,
          resolveEndpointsConfig: () => y,
          resolveRegionConfig: () => S.T,
        }));
      var n = r(86349),
        s = r(98025);
      const i = "AWS_USE_DUALSTACK_ENDPOINT",
        o = "use_dualstack_endpoint",
        a = !1,
        c = {
          environmentVariableSelector: (e) => (0, n.Q)(e, i, s.c.ENV),
          configFileSelector: (e) => (0, n.Q)(e, o, s.c.CONFIG),
          default: !1,
        },
        l = {
          environmentVariableSelector: (e) => (0, n.Q)(e, i, s.c.ENV),
          configFileSelector: (e) => (0, n.Q)(e, o, s.c.CONFIG),
          default: void 0,
        },
        u = "AWS_USE_FIPS_ENDPOINT",
        d = "use_fips_endpoint",
        h = !1,
        f = {
          environmentVariableSelector: (e) => (0, n.Q)(e, u, s.c.ENV),
          configFileSelector: (e) => (0, n.Q)(e, d, s.c.CONFIG),
          default: !1,
        },
        p = {
          environmentVariableSelector: (e) => (0, n.Q)(e, u, s.c.ENV),
          configFileSelector: (e) => (0, n.Q)(e, d, s.c.CONFIG),
          default: void 0,
        };
      var g = r(90570);
      const m = (e) => {
          const { tls: t, endpoint: r, urlParser: n, useDualstackEndpoint: s } = e;
          return Object.assign(e, {
            tls: t ?? !0,
            endpoint: (0, g.t)("string" == typeof r ? n(r) : r),
            isCustomEndpoint: !0,
            useDualstackEndpoint: (0, g.t)(s ?? !1),
          });
        },
        y = (e) => {
          const t = (0, g.t)(e.useDualstackEndpoint ?? !1),
            { endpoint: r, useFipsEndpoint: n, urlParser: s, tls: i } = e;
          return Object.assign(e, {
            tls: i ?? !0,
            endpoint: r
              ? (0, g.t)("string" == typeof r ? s(r) : r)
              : () =>
                  (async (e) => {
                    const { tls: t = !0 } = e,
                      r = await e.region();
                    if (
                      !new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/).test(
                        r,
                      )
                    )
                      throw new Error("Invalid region in client config");
                    const n = await e.useDualstackEndpoint(),
                      s = await e.useFipsEndpoint(),
                      { hostname: i } =
                        (await e.regionInfoProvider(r, {
                          useDualstackEndpoint: n,
                          useFipsEndpoint: s,
                        })) ?? {};
                    if (!i) throw new Error("Cannot resolve hostname from client config");
                    return e.urlParser(`${t ? "https:" : "http:"}//${i}`);
                  })({ ...e, useDualstackEndpoint: t, useFipsEndpoint: n }),
            isCustomEndpoint: !!r,
            useDualstackEndpoint: t,
          });
        };
      var w = r(24060),
        S = r(77654);
      const b = (e = [], { useFipsEndpoint: t, useDualstackEndpoint: r }) =>
          e.find(({ tags: e }) => t === e.includes("fips") && r === e.includes("dualstack"))
            ?.hostname,
        E = (
          e,
          {
            useFipsEndpoint: t = !1,
            useDualstackEndpoint: r = !1,
            signingService: n,
            regionHash: s,
            partitionHash: i,
          },
        ) => {
          const o = ((e, { partitionHash: t }) =>
              Object.keys(t || {}).find((r) => t[r].regions.includes(e)) ?? "aws")(e, {
              partitionHash: i,
            }),
            a = e in s ? e : (i[o]?.endpoint ?? e),
            c = { useFipsEndpoint: t, useDualstackEndpoint: r },
            l = ((e, { regionHostname: t, partitionHostname: r }) =>
              t || (r ? r.replace("{region}", e) : void 0))(a, {
              regionHostname: b(s[a]?.variants, c),
              partitionHostname: b(i[o]?.variants, c),
            });
          if (void 0 === l)
            throw new Error(
              `Endpoint resolution failed for: ${{ resolvedRegion: a, useFipsEndpoint: t, useDualstackEndpoint: r }}`,
            );
          const u = ((e, { signingRegion: t, regionRegex: r, useFipsEndpoint: n }) => {
            if (t) return t;
            if (n) {
              const t = r.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\."),
                n = e.match(t);
              if (n) return n[0].slice(1, -1);
            }
          })(l, {
            signingRegion: s[a]?.signingRegion,
            regionRegex: i[o].regionRegex,
            useFipsEndpoint: t,
          });
          return {
            partition: o,
            signingService: n,
            hostname: l,
            ...(u && { signingRegion: u }),
            ...(s[a]?.signingService && { signingService: s[a].signingService }),
          };
        };
    },
    79892: (e, t, r) => {
      "use strict";
      r.d(t, { f: () => n });
      class n {
        static v2026 =
          "undefined" != typeof process && "true" === process.env?.SMITHY_NEW_RETRIES_2026;
        static delay() {
          return n.v2026 ? 50 : 100;
        }
        static throttlingDelay() {
          return n.v2026 ? 1e3 : 500;
        }
        static cost() {
          return n.v2026 ? 14 : 5;
        }
        static throttlingCost() {
          return n.v2026 ? 5 : 10;
        }
        static modifiedCostType() {
          return n.v2026 ? "THROTTLING" : "TRANSIENT";
        }
      }
    },
    81124: (e, t, r) => {
      "use strict";
      (r.r(t),
        r.d(t, {
          NODE_APP_ID_CONFIG_OPTIONS: () => v,
          UA_APP_ID_ENV_NAME: () => b,
          UA_APP_ID_INI_NAME: () => E,
          createDefaultUserAgentProvider: () => y,
          crtAvailability: () => m,
          defaultUserAgent: () => w,
        }));
      var n = r(48161),
        s = r(1708);
      var i = r(86349),
        o = r(98025),
        a = r(51455),
        c = r(76760);
      const l =
          /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*)?$/,
        u = (e = "") => {
          const t = e.match(l);
          if (!t) return;
          const [r, n, s, i] = [t[1], t[2], t[3], t[4]];
          return i ? `${r}.${n}.${s}-${i}` : `${r}.${n}.${s}`;
        },
        d = ["^", "~", ">=", "<=", ">", "<"],
        h = ["latest", "beta", "dev", "rc", "insiders", "next"];
      let f;
      const p = (0, c.join)("node_modules", "typescript", "package.json"),
        g = async () => {
          if (null === f) return;
          if ("string" == typeof f) return ["md/tsc", f];
          let e = !1;
          try {
            e = (0, i.Q)(process.env, "AWS_SDK_JS_TYPESCRIPT_DETECTION_DISABLED", o.c.ENV) || !1;
          } catch {}
          if (e) return void (f = null);
          const t = ((e) => {
            const t = process.cwd();
            if (!e) return [t];
            const r = (0, c.normalize)(e),
              n = r.split(c.sep),
              s = n.indexOf("node_modules"),
              i = -1 !== s ? n.slice(0, s).join(c.sep) : r;
            return t === i ? [t] : [i, t];
          })("undefined" != typeof __dirname ? __dirname : void 0);
          let r, n;
          for (const e of t)
            try {
              const t = (0, c.join)(e, "package.json"),
                n = await (0, a.readFile)(t, "utf-8"),
                { dependencies: s, devDependencies: i } = JSON.parse(n),
                o = i?.typescript ?? s?.typescript;
              if ("string" != typeof o) continue;
              r = o;
              break;
            } catch {}
          if (!r) return void (f = null);
          for (const e of t)
            try {
              const t = (0, c.join)(e, p),
                r = await (0, a.readFile)(t, "utf-8"),
                { version: s } = JSON.parse(r),
                i = u(s);
              if ("string" != typeof i) continue;
              n = i;
              break;
            } catch {}
          if (n) return ((f = n), ["md/tsc", f]);
          const s = ((e = "") => {
            if (h.includes(e)) return e;
            const t = d.find((t) => e.startsWith(t)) ?? "",
              r = u(e.slice(t.length));
            return r ? `${t}${r}` : void 0;
          })(r);
          if ("string" == typeof s) return ((f = `dev_${s}`), ["md/tsc", f]);
          f = null;
        },
        m = { isCrtAvailable: !1 },
        y = ({ serviceId: e, clientVersion: t }) => {
          const r = (() => {
            const e = ["deno", "bun", "llrt"];
            for (const t of e) if (s.versions[t]) return [`md/${t}`, s.versions[t]];
            return ["md/nodejs", s.versions.node];
          })();
          return async (i) => {
            const o = [
                ["aws-sdk-js", t],
                ["ua", "2.1"],
                [`os/${(0, n.platform)()}`, (0, n.release)()],
                ["lang/js"],
                r,
              ],
              a = await g();
            a && o.push(a);
            const c = m.isCrtAvailable ? ["md/crt-avail"] : null;
            (c && o.push(c),
              e && o.push([`api/${e}`, t]),
              s.env.AWS_EXECUTION_ENV && o.push([`exec-env/${s.env.AWS_EXECUTION_ENV}`]));
            const l = await i?.userAgentAppId?.();
            return l ? [...o, [`app/${l}`]] : [...o];
          };
        },
        w = y;
      var S = r(71747);
      const b = "AWS_SDK_UA_APP_ID",
        E = "sdk_ua_app_id",
        v = {
          environmentVariableSelector: (e) => e[b],
          configFileSelector: (e) => e[E] ?? e["sdk-ua-app-id"],
          default: S.b,
        };
    },
    82713: (e, t, r) => {
      "use strict";
      (r.r(t),
        r.d(t, {
          BinaryDecisionDiagram: () => n,
          EndpointCache: () => s,
          EndpointError: () => i.c,
          customEndpointFunctions: () => g.m,
          decideEndpoint: () => h,
          isIpAddress: () => f.o,
          isValidHostLabel: () => p.X,
          resolveEndpoint: () => m.s,
        }));
      class n {
        nodes;
        root;
        conditions;
        results;
        constructor(e, t, r, n) {
          ((this.nodes = e), (this.root = t), (this.conditions = r), (this.results = n));
        }
        static from(e, t, r, s) {
          return new n(e, t, r, s);
        }
      }
      class s {
        capacity;
        data = new Map();
        parameters = [];
        constructor({ size: e, params: t }) {
          ((this.capacity = e ?? 50), t && (this.parameters = t));
        }
        get(e, t) {
          const r = this.hash(e);
          if (!1 === r) return t();
          if (!this.data.has(r)) {
            if (this.data.size > this.capacity + 10) {
              const e = this.data.keys();
              let t = 0;
              for (;;) {
                const { value: r, done: n } = e.next();
                if ((this.data.delete(r), n || ++t > 10)) break;
              }
            }
            this.data.set(r, t());
          }
          return this.data.get(r);
        }
        size() {
          return this.data.size;
        }
        hash(e) {
          let t = "";
          const { parameters: r } = this;
          if (0 === r.length) return !1;
          for (const n of r) {
            const r = String(e[n] ?? "");
            if (r.includes("|;")) return !1;
            t += r + "|;";
          }
          return t;
        }
      }
      var i = r(93451),
        o = r(5090),
        a = r(15235),
        c = r(20961),
        l = r(77330),
        u = r(4374);
      const d = 1e8,
        h = (e, t) => {
          const { nodes: r, root: n, results: s, conditions: h } = e;
          let f = n;
          const p = {},
            g = { referenceRecord: p, endpointParams: t.endpointParams, logger: t.logger };
          for (; 1 !== f && -1 !== f && f < d;) {
            const e = 3 * (Math.abs(f) - 1),
              [t, n, s] = [r[e], r[e + 1], r[e + 2]],
              [i, a, c] = h[t],
              l = (0, o.F)({ fn: i, assign: c, argv: a }, g);
            if (l.toAssign) {
              const { name: e, value: t } = l.toAssign;
              p[e] = t;
            }
            f = f >= 0 === l.result ? n : s;
          }
          if (f >= d) {
            const e = s[f - d];
            if (-1 === e[0]) {
              const [, t] = e;
              throw new i.c((0, a.O4)(t, "Error", g));
            }
            const [t, r, n] = e;
            return {
              url: (0, u.t)(t, g),
              properties: (0, l.Fb)(r, g),
              headers: (0, c.w)(n ?? {}, g),
            };
          }
          throw new i.c("No matching endpoint.");
        };
      var f = r(3871),
        p = r(62340),
        g = r(6685),
        m = r(14074);
    },
    84329: (e, t, r) => {
      "use strict";
      r.d(t, { B: () => y });
      var n,
        s = r(96851);
      class i {
        format(e) {
          const t = [];
          for (const r of Object.keys(e)) {
            const n = (0, s.fromUtf8)(r);
            t.push(Uint8Array.from([n.byteLength]), n, this.formatHeaderValue(e[r]));
          }
          const r = new Uint8Array(t.reduce((e, t) => e + t.byteLength, 0));
          let n = 0;
          for (const e of t) (r.set(e, n), (n += e.byteLength));
          return r;
        }
        formatHeaderValue(e) {
          switch (e.type) {
            case "boolean":
              return Uint8Array.from([e.value ? 0 : 1]);
            case "byte":
              return Uint8Array.from([2, e.value]);
            case "short":
              const t = new DataView(new ArrayBuffer(3));
              return (t.setUint8(0, 3), t.setInt16(1, e.value, !1), new Uint8Array(t.buffer));
            case "integer":
              const r = new DataView(new ArrayBuffer(5));
              return (r.setUint8(0, 4), r.setInt32(1, e.value, !1), new Uint8Array(r.buffer));
            case "long":
              const n = new Uint8Array(9);
              return ((n[0] = 5), n.set(e.value.bytes, 1), n);
            case "binary":
              const i = new DataView(new ArrayBuffer(3 + e.value.byteLength));
              (i.setUint8(0, 6), i.setUint16(1, e.value.byteLength, !1));
              const c = new Uint8Array(i.buffer);
              return (c.set(e.value, 3), c);
            case "string":
              const l = (0, s.fromUtf8)(e.value),
                u = new DataView(new ArrayBuffer(3 + l.byteLength));
              (u.setUint8(0, 7), u.setUint16(1, l.byteLength, !1));
              const d = new Uint8Array(u.buffer);
              return (d.set(l, 3), d);
            case "timestamp":
              const h = new Uint8Array(9);
              return ((h[0] = 8), h.set(a.fromNumber(e.value.valueOf()).bytes, 1), h);
            case "uuid":
              if (!o.test(e.value)) throw new Error(`Invalid UUID received: ${e.value}`);
              const f = new Uint8Array(17);
              return ((f[0] = 9), f.set((0, s.fromHex)(e.value.replace(/\-/g, "")), 1), f);
          }
        }
      }
      !(function (e) {
        ((e[(e.boolTrue = 0)] = "boolTrue"),
          (e[(e.boolFalse = 1)] = "boolFalse"),
          (e[(e.byte = 2)] = "byte"),
          (e[(e.short = 3)] = "short"),
          (e[(e.integer = 4)] = "integer"),
          (e[(e.long = 5)] = "long"),
          (e[(e.byteArray = 6)] = "byteArray"),
          (e[(e.string = 7)] = "string"),
          (e[(e.timestamp = 8)] = "timestamp"),
          (e[(e.uuid = 9)] = "uuid"));
      })(n || (n = {}));
      const o = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
      class a {
        bytes;
        constructor(e) {
          if (((this.bytes = e), 8 !== e.byteLength))
            throw new Error("Int64 buffers must be exactly 8 bytes");
        }
        static fromNumber(e) {
          if (e > 0x8000000000000000 || e < -0x8000000000000000)
            throw new Error(
              `${e} is too large (or, if negative, too small) to represent as an Int64`,
            );
          const t = new Uint8Array(8);
          for (let r = 7, n = Math.abs(Math.round(e)); r > -1 && n > 0; r--, n /= 256) t[r] = n;
          return (e < 0 && c(t), new a(t));
        }
        valueOf() {
          const e = this.bytes.slice(0),
            t = 128 & e[0];
          return (t && c(e), parseInt((0, s.toHex)(e), 16) * (t ? -1 : 1));
        }
        toString() {
          return String(this.valueOf());
        }
      }
      function c(e) {
        for (let t = 0; t < 8; t++) e[t] ^= 255;
        for (let t = 7; t > -1 && (e[t]++, 0 === e[t]); t--);
      }
      var l = r(43801),
        u = r(88141),
        d = r(29134),
        h = r(37060),
        f = r(66220),
        p = r(58699),
        g = r(8770),
        m = r(2798);
      class y extends l.y {
        headerFormatter = new i();
        constructor({
          applyChecksum: e,
          credentials: t,
          region: r,
          service: n,
          sha256: s,
          uriEscapePath: i = !0,
        }) {
          super({
            applyChecksum: e,
            credentials: t,
            region: r,
            service: n,
            sha256: s,
            uriEscapePath: i,
          });
        }
        async presign(e, t = {}) {
          const {
              signingDate: r = new Date(),
              expiresIn: n = 3600,
              unsignableHeaders: s,
              unhoistableHeaders: i,
              signableHeaders: o,
              hoistableHeaders: a,
              signingRegion: c,
              signingService: l,
            } = t,
            p = await this.credentialProvider();
          this.validateResolvedCredentials(p);
          const y = c ?? (await this.regionProvider()),
            { longDate: w, shortDate: S } = this.formatDate(r);
          if (n > u.Uv)
            return Promise.reject(
              "Signature version 4 presigned URLs must have an expiration date less than one week in the future",
            );
          const b = (0, d.Ds)(S, y, l ?? this.service),
            E = (0, g.b)((0, m.n)(e), { unhoistableHeaders: i, hoistableHeaders: a });
          (p.sessionToken && (E.query[u.r2] = p.sessionToken),
            (E.query[u.XI] = u.SG),
            (E.query[u.tI] = `${p.accessKeyId}/${b}`),
            (E.query[u.Zs] = w),
            (E.query[u.MS] = n.toString(10)));
          const v = (0, h.H)(E, s, o);
          return (
            (E.query[u.FY] = this.getCanonicalHeaderList(v)),
            (E.query[u.cR] = await this.getSignature(
              w,
              b,
              this.getSigningKey(p, y, S, l),
              this.createCanonicalRequest(E, v, await (0, f.p)(e, this.sha256)),
            )),
            E
          );
        }
        async sign(e, t) {
          return "string" == typeof e
            ? this.signString(e, t)
            : e.headers && e.payload
              ? this.signEvent(e, t)
              : e.message
                ? this.signMessage(e, t)
                : this.signRequest(e, t);
        }
        async signEvent(
          { headers: e, payload: t },
          {
            signingDate: r = new Date(),
            priorSignature: n,
            signingRegion: i,
            signingService: o,
            eventStreamCredentials: a,
          },
        ) {
          const c = i ?? (await this.regionProvider()),
            { shortDate: l, longDate: h } = this.formatDate(r),
            p = (0, d.Ds)(l, c, o ?? this.service),
            g = await (0, f.p)({ headers: {}, body: t }, this.sha256),
            m = new this.sha256();
          m.update(e);
          const y = (0, s.toHex)(await m.digest()),
            w = [u.r1, h, p, n, y, g].join("\n");
          return this.signString(w, {
            signingDate: r,
            signingRegion: c,
            signingService: o,
            eventStreamCredentials: a,
          });
        }
        async signMessage(
          e,
          {
            signingDate: t = new Date(),
            signingRegion: r,
            signingService: n,
            eventStreamCredentials: s,
          },
        ) {
          return this.signEvent(
            { headers: this.headerFormatter.format(e.message.headers), payload: e.message.body },
            {
              signingDate: t,
              signingRegion: r,
              signingService: n,
              priorSignature: e.priorSignature,
              eventStreamCredentials: s,
            },
          ).then((t) => ({ message: e.message, signature: t }));
        }
        async signString(
          e,
          {
            signingDate: t = new Date(),
            signingRegion: r,
            signingService: n,
            eventStreamCredentials: i,
          } = {},
        ) {
          const o = i ?? (await this.credentialProvider());
          this.validateResolvedCredentials(o);
          const a = r ?? (await this.regionProvider()),
            { shortDate: c } = this.formatDate(t),
            l = new this.sha256(await this.getSigningKey(o, a, c, n));
          return (l.update((0, s.toUint8Array)(e)), (0, s.toHex)(await l.digest()));
        }
        async signRequest(
          e,
          {
            signingDate: t = new Date(),
            signableHeaders: r,
            unsignableHeaders: n,
            signingRegion: s,
            signingService: i,
          } = {},
        ) {
          const o = await this.credentialProvider();
          this.validateResolvedCredentials(o);
          const a = s ?? (await this.regionProvider()),
            c = (0, m.n)(e),
            { longDate: l, shortDate: g } = this.formatDate(t),
            y = (0, d.Ds)(g, a, i ?? this.service);
          ((c.headers[u.ot] = l), o.sessionToken && (c.headers[u.wE] = o.sessionToken));
          const w = await (0, f.p)(c, this.sha256);
          !(0, p.ou)(u.Wd, c.headers) && this.applyChecksum && (c.headers[u.Wd] = w);
          const S = (0, h.H)(c, n, r),
            b = await this.getSignature(
              l,
              y,
              this.getSigningKey(o, a, g, i),
              this.createCanonicalRequest(c, S, w),
            );
          return (
            (c.headers[u.H1] =
              `${u.SG} Credential=${o.accessKeyId}/${y}, SignedHeaders=${this.getCanonicalHeaderList(S)}, Signature=${b}`),
            c
          );
        }
        async getSignature(e, t, r, n) {
          const i = await this.createStringToSign(e, t, n, u.SG),
            o = new this.sha256(await r);
          return (o.update((0, s.toUint8Array)(i)), (0, s.toHex)(await o.digest()));
        }
        getSigningKey(e, t, r, n) {
          return (0, d.Xf)(this.sha256, e, r, t, n || this.service);
        }
      }
    },
    85802: (e, t, r) => {
      "use strict";
      (r.r(t), r.d(t, { loadConfig: () => n.Z }));
      var n = r(74935);
    },
    85919: (e, t, r) => {
      "use strict";
      r.d(t, { u: () => s });
      var n = r(85264);
      const s = (e) => e[n.V] || (e[n.V] = {});
    },
    86349: (e, t, r) => {
      "use strict";
      r.d(t, { Q: () => n });
      const n = (e, t, r) => {
        if (t in e) {
          if ("true" === e[t]) return !0;
          if ("false" === e[t]) return !1;
          throw new Error(`Cannot load ${r} "${t}". Expected "true" or "false", got ${e[t]}.`);
        }
      };
    },
    86639: (e, t, r) => {
      "use strict";
      r.d(t, { u: () => s });
      var n = r(96851);
      const s = (e) => {
        const t = {};
        for (const r in e) {
          if (!(0, n.hasOwn)(e, r)) continue;
          const s = e[r];
          t[r] = Array.isArray(s) ? s.join(",") : s;
        }
        return t;
      };
    },
    88141: (e, t, r) => {
      "use strict";
      r.d(t, {
        D8: () => g,
        FY: () => o,
        H1: () => d,
        Ir: () => b,
        J9: () => f,
        Jp: () => v,
        MS: () => a,
        SG: () => x,
        SN: () => S,
        Uv: () => R,
        VQ: () => _,
        Wd: () => m,
        XI: () => n,
        Zs: () => i,
        cR: () => c,
        g5: () => C,
        ku: () => T,
        lP: () => E,
        oB: () => u,
        ot: () => h,
        pj: () => p,
        r1: () => A,
        r2: () => l,
        tI: () => s,
        wE: () => y,
        z8: () => N,
        zX: () => w,
      });
      const n = "X-Amz-Algorithm",
        s = "X-Amz-Credential",
        i = "X-Amz-Date",
        o = "X-Amz-SignedHeaders",
        a = "X-Amz-Expires",
        c = "X-Amz-Signature",
        l = "X-Amz-Security-Token",
        u = "X-Amz-Region-Set",
        d = "authorization",
        h = i.toLowerCase(),
        f = "date",
        p = [d, h, f],
        g = c.toLowerCase(),
        m = "x-amz-content-sha256",
        y = l.toLowerCase(),
        w = "host",
        S = {
          authorization: !0,
          "cache-control": !0,
          connection: !0,
          expect: !0,
          from: !0,
          "keep-alive": !0,
          "max-forwards": !0,
          pragma: !0,
          referer: !0,
          te: !0,
          trailer: !0,
          "transfer-encoding": !0,
          upgrade: !0,
          "user-agent": !0,
          "x-amzn-trace-id": !0,
        },
        b = /^proxy-/,
        E = /^sec-/,
        v = [/^proxy-/i, /^sec-/i],
        x = "AWS4-HMAC-SHA256",
        T = "AWS4-ECDSA-P256-SHA256",
        A = "AWS4-HMAC-SHA256-PAYLOAD",
        N = "UNSIGNED-PAYLOAD",
        C = 50,
        _ = "aws4_request",
        R = 604800;
    },
    90099: (e, t, r) => {
      "use strict";
      (r.r(t),
        r.d(t, {
          ChecksumStream: () => q.ChecksumStream,
          Client: () => c,
          Command: () => p,
          Hash: () => q.Hash,
          LazyJsonString: () => q.LazyJsonString,
          NoOpLogger: () => M.N,
          NumericValue: () => q.NumericValue,
          SENSITIVE_STRING: () => m,
          ServiceException: () => w,
          Uint8ArrayBlobAdapter: () => q.Uint8ArrayBlobAdapter,
          _json: () => H,
          _parseEpochTimestamp: () => q._parseEpochTimestamp,
          _parseRfc3339DateTimeWithOffset: () => q._parseRfc3339DateTimeWithOffset,
          _parseRfc7231DateTime: () => q._parseRfc7231DateTime,
          calculateBodyLength: () => q.calculateBodyLength,
          collectBody: () => l.collectBody,
          concatBytes: () => q.concatBytes,
          convertMap: () => $,
          copyDocumentWithTransform: () => q.copyDocumentWithTransform,
          createAggregatedClient: () => y,
          createBufferedReadable: () => q.createBufferedReadable,
          createChecksumStream: () => q.createChecksumStream,
          dateToUtcString: () => q.dateToUtcString,
          decorateServiceException: () => S,
          deserializerMiddleware: () => q.deserializerMiddleware,
          deserializerMiddlewareOption: () => q.deserializerMiddlewareOption,
          emitWarningIfUnsupportedVersion: () => A,
          expectBoolean: () => q.expectBoolean,
          expectByte: () => q.expectByte,
          expectFloat32: () => q.expectFloat32,
          expectInt: () => q.expectInt,
          expectInt32: () => q.expectInt32,
          expectLong: () => q.expectLong,
          expectNonNull: () => q.expectNonNull,
          expectNumber: () => q.expectNumber,
          expectObject: () => q.expectObject,
          expectShort: () => q.expectShort,
          expectString: () => q.expectString,
          expectUnion: () => q.expectUnion,
          extendedEncodeURIComponent: () => l.extendedEncodeURIComponent,
          fromArrayBuffer: () => q.fromArrayBuffer,
          fromBase64: () => q.fromBase64,
          fromHex: () => q.fromHex,
          fromString: () => q.fromString,
          fromUtf8: () => q.fromUtf8,
          generateIdempotencyToken: () => q.generateIdempotencyToken,
          getArrayIfSingleItem: () => D,
          getAwsChunkedEncodingStream: () => q.getAwsChunkedEncodingStream,
          getDefaultClientConfiguration: () => R,
          getDefaultExtensionConfiguration: () => _,
          getSerdePlugin: () => q.getSerdePlugin,
          getValueFromTextNode: () => k,
          handleFloat: () => q.handleFloat,
          hasOwn: () => q.hasOwn,
          headStream: () => q.headStream,
          isArrayBuffer: () => q.isArrayBuffer,
          isBlob: () => q.isBlob,
          isReadableStream: () => q.isReadableStream,
          isSerializableHeaderValue: () => O,
          limitedParseDouble: () => q.limitedParseDouble,
          limitedParseFloat: () => q.limitedParseFloat,
          limitedParseFloat32: () => q.limitedParseFloat32,
          loadConfigsForDefaultMode: () => x,
          logger: () => q.logger,
          map: () => P,
          nv: () => q.nv,
          parseBoolean: () => q.parseBoolean,
          parseEpochTimestamp: () => q.parseEpochTimestamp,
          parseRfc3339DateTime: () => q.parseRfc3339DateTime,
          parseRfc3339DateTimeWithOffset: () => q.parseRfc3339DateTimeWithOffset,
          parseRfc7231DateTime: () => q.parseRfc7231DateTime,
          quoteHeader: () => q.quoteHeader,
          resolveDefaultRuntimeConfig: () => I,
          resolvedPath: () => l.resolvedPath,
          sdkStreamMixin: () => q.sdkStreamMixin,
          serializeDateTime: () => V,
          serializeFloat: () => z,
          serializerMiddleware: () => q.serializerMiddleware,
          serializerMiddlewareOption: () => q.serializerMiddlewareOption,
          splitEvery: () => q.splitEvery,
          splitHeader: () => q.splitHeader,
          splitStream: () => q.splitStream,
          streamCollector: () => q.streamCollector,
          strictParseByte: () => q.strictParseByte,
          strictParseDouble: () => q.strictParseDouble,
          strictParseFloat: () => q.strictParseFloat,
          strictParseFloat32: () => q.strictParseFloat32,
          strictParseInt: () => q.strictParseInt,
          strictParseInt32: () => q.strictParseInt32,
          strictParseLong: () => q.strictParseLong,
          strictParseShort: () => q.strictParseShort,
          take: () => j,
          throwDefaultError: () => b,
          toBase64: () => q.toBase64,
          toHex: () => q.toHex,
          toUint8Array: () => q.toUint8Array,
          toUtf8: () => q.toUtf8,
          v4: () => q.v4,
          withBaseException: () => E,
        }));
      const n = (e, t) => {
          const r = [];
          if ((e && r.push(e), t)) for (const e of t) r.push(e);
          return r;
        },
        s = (e, t) => `${e || "anonymous"}${t && t.length > 0 ? ` (a.k.a. ${t.join(",")})` : ""}`,
        i = () => {
          let e = [],
            t = [],
            r = !1;
          const c = new Set(),
            l = (r) => (
              e.forEach((e) => {
                r.add(e.middleware, { ...e });
              }),
              t.forEach((e) => {
                r.addRelativeTo(e.middleware, { ...e });
              }),
              r.identifyOnResolve?.(h.identifyOnResolve()),
              r
            ),
            u = (e) => {
              const t = [];
              return (
                e.before.forEach((e) => {
                  0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push(...u(e));
                }),
                t.push(e),
                e.after.reverse().forEach((e) => {
                  0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push(...u(e));
                }),
                t
              );
            },
            d = (r = !1) => {
              const i = [],
                c = [],
                l = {};
              (e.forEach((e) => {
                const t = { ...e, before: [], after: [] };
                for (const e of n(t.name, t.aliases)) l[e] = t;
                i.push(t);
              }),
                t.forEach((e) => {
                  const t = { ...e, before: [], after: [] };
                  for (const e of n(t.name, t.aliases)) l[e] = t;
                  c.push(t);
                }),
                c.forEach((e) => {
                  if (e.toMiddleware) {
                    const t = l[e.toMiddleware];
                    if (void 0 === t) {
                      if (r) return;
                      throw new Error(
                        `${e.toMiddleware} is not found when adding ${s(e.name, e.aliases)} middleware ${e.relation} ${e.toMiddleware}`,
                      );
                    }
                    ("after" === e.relation && t.after.push(e),
                      "before" === e.relation && t.before.push(e));
                  }
                }));
              var d;
              return ((d = i),
              d.sort(
                (e, t) =>
                  o[t.step] - o[e.step] || a[t.priority || "normal"] - a[e.priority || "normal"],
              ))
                .map(u)
                .reduce((e, t) => (e.push(...t), e), []);
            },
            h = {
              add: (t, r = {}) => {
                const { name: i, override: o, aliases: a } = r,
                  l = { step: "initialize", priority: "normal", middleware: t, ...r },
                  u = n(i, a);
                if (u.length > 0) {
                  if (u.some((e) => c.has(e))) {
                    if (!o) throw new Error(`Duplicate middleware name '${s(i, a)}'`);
                    for (const t of u) {
                      const r = e.findIndex((e) => e.name === t || e.aliases?.some((e) => e === t));
                      if (-1 === r) continue;
                      const n = e[r];
                      if (n.step !== l.step || l.priority !== n.priority)
                        throw new Error(
                          `"${s(n.name, n.aliases)}" middleware with ${n.priority} priority in ${n.step} step cannot be overridden by "${s(i, a)}" middleware with ${l.priority} priority in ${l.step} step.`,
                        );
                      e.splice(r, 1);
                    }
                  }
                  for (const e of u) c.add(e);
                }
                e.push(l);
              },
              addRelativeTo: (e, r) => {
                const { name: i, override: o, aliases: a } = r,
                  l = { middleware: e, ...r },
                  u = n(i, a);
                if (u.length > 0) {
                  if (u.some((e) => c.has(e))) {
                    if (!o) throw new Error(`Duplicate middleware name '${s(i, a)}'`);
                    for (const e of u) {
                      const r = t.findIndex((t) => t.name === e || t.aliases?.some((t) => t === e));
                      if (-1 === r) continue;
                      const n = t[r];
                      if (n.toMiddleware !== l.toMiddleware || n.relation !== l.relation)
                        throw new Error(
                          `"${s(n.name, n.aliases)}" middleware ${n.relation} "${n.toMiddleware}" middleware cannot be overridden by "${s(i, a)}" middleware ${l.relation} "${l.toMiddleware}" middleware.`,
                        );
                      t.splice(r, 1);
                    }
                  }
                  for (const e of u) c.add(e);
                }
                t.push(l);
              },
              clone: () => l(i()),
              use: (e) => {
                e.applyToStack(h);
              },
              remove: (r) =>
                "string" == typeof r
                  ? ((r) => {
                      let s = !1;
                      const i = (e) => {
                        const t = n(e.name, e.aliases);
                        if (t.includes(r)) {
                          s = !0;
                          for (const e of t) c.delete(e);
                          return !1;
                        }
                        return !0;
                      };
                      return ((e = e.filter(i)), (t = t.filter(i)), s);
                    })(r)
                  : ((r) => {
                      let s = !1;
                      const i = (e) => {
                        if (e.middleware === r) {
                          s = !0;
                          for (const t of n(e.name, e.aliases)) c.delete(t);
                          return !1;
                        }
                        return !0;
                      };
                      return ((e = e.filter(i)), (t = t.filter(i)), s);
                    })(r),
              removeByTag: (r) => {
                let s = !1;
                const i = (e) => {
                  const { tags: t, name: i, aliases: o } = e;
                  if (t && t.includes(r)) {
                    const e = n(i, o);
                    for (const t of e) c.delete(t);
                    return ((s = !0), !1);
                  }
                  return !0;
                };
                return ((e = e.filter(i)), (t = t.filter(i)), s);
              },
              concat: (e) => {
                const t = l(i());
                return (
                  t.use(e),
                  t.identifyOnResolve(
                    r || t.identifyOnResolve() || (e.identifyOnResolve?.() ?? !1),
                  ),
                  t
                );
              },
              applyToStack: l,
              identify: () =>
                d(!0).map((e) => {
                  const t = e.step ?? e.relation + " " + e.toMiddleware;
                  return s(e.name, e.aliases) + " - " + t;
                }),
              identifyOnResolve: (e) => ("boolean" == typeof e && (r = e), r),
              resolve: (e, t) => {
                for (const r of d()
                  .map((e) => e.middleware)
                  .reverse())
                  e = r(e, t);
                return (r && console.log(h.identify()), e);
              },
            };
          return h;
        },
        o = { initialize: 5, serialize: 4, build: 3, finalizeRequest: 2, deserialize: 1 },
        a = { high: 3, normal: 2, low: 1 };
      class c {
        config;
        middlewareStack = i();
        initConfig;
        handlers;
        constructor(e) {
          this.config = e;
          const { protocol: t, protocolSettings: r } = e;
          r && "function" == typeof t && (e.protocol = new t(r));
        }
        send(e, t, r) {
          const n = "function" != typeof t ? t : void 0,
            s = "function" == typeof t ? t : r;
          let i;
          if (void 0 === n && !0 === this.config.cacheMiddleware) {
            this.handlers || (this.handlers = new WeakMap());
            const t = this.handlers;
            t.has(e.constructor)
              ? (i = t.get(e.constructor))
              : ((i = e.resolveMiddleware(this.middlewareStack, this.config, n)),
                t.set(e.constructor, i));
          } else
            (delete this.handlers, (i = e.resolveMiddleware(this.middlewareStack, this.config, n)));
          if (!s) return i(e).then((e) => e.output);
          i(e)
            .then(
              (e) => s(null, e.output),
              (e) => s(e),
            )
            .catch(() => {});
        }
        destroy() {
          (this.config?.requestHandler?.destroy?.(), delete this.handlers);
        }
      }
      var l = r(73931),
        u = r(85264),
        d = r(93353);
      const h = "***SensitiveInformation***";
      function f(e, t) {
        if (null == t) return t;
        const r = d.NormalizedSchema.of(e);
        if (r.getMergedTraits().sensitive) return h;
        if (r.isListSchema()) {
          if (!!r.getValueSchema().getMergedTraits().sensitive) return h;
        } else if (r.isMapSchema()) {
          if (
            !!r.getKeySchema().getMergedTraits().sensitive ||
            !!r.getValueSchema().getMergedTraits().sensitive
          )
            return h;
        } else if (r.isStructSchema() && "object" == typeof t) {
          const e = t,
            n = {};
          for (const [t, s] of r.structIterator()) null != e[t] && (n[t] = f(s, e[t]));
          return n;
        }
        return t;
      }
      class p {
        middlewareStack = i();
        schema;
        static classBuilder() {
          return new g();
        }
        resolveMiddlewareWithContext(
          e,
          t,
          r,
          {
            middlewareFn: n,
            clientName: s,
            commandName: i,
            inputFilterSensitiveLog: o,
            outputFilterSensitiveLog: a,
            smithyContext: c,
            additionalContext: l,
            CommandCtor: d,
          },
        ) {
          for (const s of n.bind(this)(d, e, t, r)) this.middlewareStack.use(s);
          const h = e.concat(this.middlewareStack),
            { logger: f } = t,
            p = {
              logger: f,
              clientName: s,
              commandName: i,
              inputFilterSensitiveLog: o,
              outputFilterSensitiveLog: a,
              [u.V]: { commandInstance: this, ...c },
              ...l,
            },
            { requestHandler: g } = t;
          let m = r ?? {};
          return (
            c.eventStream && (m = { isEventStream: !0, ...m }),
            h.resolve((e) => g.handle(e.request, m), p)
          );
        }
      }
      class g {
        _init = () => {};
        _ep = {};
        _middlewareFn = () => [];
        _commandName = "";
        _clientName = "";
        _additionalContext = {};
        _smithyContext = {};
        _inputFilterSensitiveLog = void 0;
        _outputFilterSensitiveLog = void 0;
        _serializer = null;
        _deserializer = null;
        _operationSchema;
        init(e) {
          this._init = e;
        }
        ep(e) {
          return ((this._ep = e), this);
        }
        m(e) {
          return ((this._middlewareFn = e), this);
        }
        s(e, t, r = {}) {
          return ((this._smithyContext = { service: e, operation: t, ...r }), this);
        }
        c(e = {}) {
          return ((this._additionalContext = e), this);
        }
        n(e, t) {
          return ((this._clientName = e), (this._commandName = t), this);
        }
        f(e = (e) => e, t = (e) => e) {
          return ((this._inputFilterSensitiveLog = e), (this._outputFilterSensitiveLog = t), this);
        }
        ser(e) {
          return ((this._serializer = e), this);
        }
        de(e) {
          return ((this._deserializer = e), this);
        }
        sc(e) {
          return ((this._operationSchema = e), (this._smithyContext.operationSchema = e), this);
        }
        build() {
          const e = this;
          let t;
          return (t = class extends p {
            input;
            static getEndpointParameterInstructions() {
              return e._ep;
            }
            constructor(...[t]) {
              (super(), (this.input = t ?? {}), e._init(this), (this.schema = e._operationSchema));
            }
            resolveMiddleware(r, n, s) {
              const i = e._operationSchema,
                o = i?.[4] ?? i?.input,
                a = i?.[5] ?? i?.output;
              return this.resolveMiddlewareWithContext(r, n, s, {
                CommandCtor: t,
                middlewareFn: e._middlewareFn,
                clientName: e._clientName,
                commandName: e._commandName,
                inputFilterSensitiveLog:
                  e._inputFilterSensitiveLog ?? (i ? f.bind(null, o) : (e) => e),
                outputFilterSensitiveLog:
                  e._outputFilterSensitiveLog ?? (i ? f.bind(null, a) : (e) => e),
                smithyContext: e._smithyContext,
                additionalContext: e._additionalContext,
              });
            }
            serialize = e._serializer;
            deserialize = e._deserializer;
          });
        }
      }
      const m = "***SensitiveInformation***",
        y = (e, t, r) => {
          for (const [r, n] of Object.entries(e)) {
            const e = async function (e, t, r) {
                const s = new n(e);
                if ("function" == typeof t) this.send(s, t);
                else {
                  if ("function" != typeof r) return this.send(s, t);
                  if ("object" != typeof t)
                    throw new Error("Expected http options but got " + typeof t);
                  this.send(s, t || {}, r);
                }
              },
              s = (r[0].toLowerCase() + r.slice(1)).replace(/Command$/, "");
            t.prototype[s] = e;
          }
          const { paginators: n = {}, waiters: s = {} } = r ?? {};
          for (const [e, r] of Object.entries(n))
            void 0 === t.prototype[e] &&
              (t.prototype[e] = function (e = {}, t, ...n) {
                return r({ ...t, client: this }, e, ...n);
              });
          for (const [e, r] of Object.entries(s))
            void 0 === t.prototype[e] &&
              (t.prototype[e] = async function (e = {}, t, ...n) {
                let s = t;
                return (
                  "number" == typeof t && (s = { maxWaitTime: t }),
                  r({ ...s, client: this }, e, ...n)
                );
              });
        };
      class w extends Error {
        $fault;
        $response;
        $retryable;
        $metadata;
        constructor(e) {
          (super(e.message),
            Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype),
            (this.name = e.name),
            (this.$fault = e.$fault),
            (this.$metadata = e.$metadata));
        }
        static isInstance(e) {
          if (!e) return !1;
          const t = e;
          return (
            w.prototype.isPrototypeOf(t) ||
            (Boolean(t.$fault) &&
              Boolean(t.$metadata) &&
              ("client" === t.$fault || "server" === t.$fault))
          );
        }
        static [Symbol.hasInstance](e) {
          if (!e) return !1;
          const t = e;
          return this === w
            ? w.isInstance(e)
            : !!w.isInstance(e) &&
                (t.name && this.name
                  ? this.prototype.isPrototypeOf(e) || t.name === this.name
                  : this.prototype.isPrototypeOf(e));
        }
      }
      const S = (e, t = {}) => {
          Object.entries(t)
            .filter(([, e]) => void 0 !== e)
            .forEach(([t, r]) => {
              (null != e[t] && "" !== e[t]) || (e[t] = r);
            });
          const r = e.message || e.Message || "UnknownError";
          return ((e.message = r), delete e.Message, e);
        },
        b = ({ output: e, parsedBody: t, exceptionCtor: r, errorCode: n }) => {
          const s = v(e),
            i = s.httpStatusCode ? s.httpStatusCode + "" : void 0,
            o = new r({
              name: t?.code || t?.Code || n || i || "UnknownError",
              $fault: "client",
              $metadata: s,
            });
          throw S(o, t);
        },
        E =
          (e) =>
          ({ output: t, parsedBody: r, errorCode: n }) => {
            b({ output: t, parsedBody: r, exceptionCtor: e, errorCode: n });
          },
        v = (e) => ({
          httpStatusCode: e.statusCode,
          requestId:
            e.headers["x-amzn-requestid"] ??
            e.headers["x-amzn-request-id"] ??
            e.headers["x-amz-request-id"],
          extendedRequestId: e.headers["x-amz-id-2"],
          cfId: e.headers["x-amz-cf-id"],
        }),
        x = (e) => {
          switch (e) {
            case "standard":
            case "cross-region":
              return { retryMode: "standard", connectionTimeout: 3100 };
            case "in-region":
              return { retryMode: "standard", connectionTimeout: 1100 };
            case "mobile":
              return { retryMode: "standard", connectionTimeout: 3e4 };
            default:
              return {};
          }
        };
      let T = !1;
      const A = (e) => {
        e && !T && parseInt(e.substring(1, e.indexOf("."))) < 16 && (T = !0);
      };
      var N = r(30338);
      const C = Object.values(N.dB),
        _ = (e) =>
          Object.assign(
            ((e) => {
              const t = [];
              for (const r in N.dB) {
                const n = N.dB[r];
                void 0 !== e[n] &&
                  t.push({ algorithmId: () => n, checksumConstructor: () => e[n] });
              }
              for (const [r, n] of Object.entries(e.checksumAlgorithms ?? {}))
                t.push({ algorithmId: () => r, checksumConstructor: () => n });
              return {
                addChecksumAlgorithm(r) {
                  e.checksumAlgorithms = e.checksumAlgorithms ?? {};
                  const n = r.algorithmId(),
                    s = r.checksumConstructor();
                  (C.includes(n)
                    ? (e.checksumAlgorithms[n.toUpperCase()] = s)
                    : (e.checksumAlgorithms[n] = s),
                    t.push(r));
                },
                checksumAlgorithms: () => t,
              };
            })(e),
            ((e) => ({
              setRetryStrategy(t) {
                e.retryStrategy = t;
              },
              retryStrategy: () => e.retryStrategy,
            }))(e),
          ),
        R = _,
        I = (e) =>
          Object.assign(
            ((e) => {
              const t = {};
              return (
                e.checksumAlgorithms().forEach((e) => {
                  const r = e.algorithmId();
                  C.includes(r) && (t[r] = e.checksumConstructor());
                }),
                t
              );
            })(e),
            ((e) => {
              const t = {};
              return ((t.retryStrategy = e.retryStrategy()), t);
            })(e),
          ),
        D = (e) => (Array.isArray(e) ? e : [e]),
        k = (e) => {
          const t = "#text";
          for (const r in e)
            e.hasOwnProperty(r) && void 0 !== e[r][t]
              ? (e[r] = e[r][t])
              : "object" == typeof e[r] && null !== e[r] && (e[r] = k(e[r]));
          return e;
        },
        O = (e) => null != e;
      var M = r(65844);
      function P(e, t, r) {
        let n, s, i;
        if (void 0 === t && void 0 === r) ((n = {}), (i = e));
        else {
          if (((n = e), "function" == typeof t)) return ((s = t), (i = r), L(n, s, i));
          i = t;
        }
        for (const e of Object.keys(i)) Array.isArray(i[e]) ? U(n, null, i, e) : (n[e] = i[e]);
        return n;
      }
      const $ = (e) => {
          const t = {};
          for (const [r, n] of Object.entries(e || {})) t[r] = [, n];
          return t;
        },
        j = (e, t) => {
          const r = {};
          for (const n in t) U(r, e, t, n);
          return r;
        },
        L = (e, t, r) =>
          P(
            e,
            Object.entries(r).reduce(
              (e, [r, n]) => (
                Array.isArray(n) ? (e[r] = n) : (e[r] = "function" == typeof n ? [t, n()] : [t, n]),
                e
              ),
              {},
            ),
          ),
        U = (e, t, r, n) => {
          if (null !== t) {
            let s = r[n];
            "function" == typeof s && (s = [, s]);
            const [i = B, o = F, a = n] = s;
            return void (
              (("function" == typeof i && i(t[a])) || ("function" != typeof i && i)) &&
              (e[n] = o(t[a]))
            );
          }
          let [s, i] = r[n];
          if ("function" == typeof i) {
            let t;
            const r = void 0 === s && null != (t = i()),
              o = ("function" == typeof s && !!s(void 0)) || ("function" != typeof s && !!s);
            r ? (e[n] = t) : o && (e[n] = i());
          } else {
            const t = void 0 === s && null != i,
              r = ("function" == typeof s && !!s(i)) || ("function" != typeof s && !!s);
            (t || r) && (e[n] = i);
          }
        },
        B = (e) => null != e,
        F = (e) => e,
        z = (e) => {
          if (e != e) return "NaN";
          switch (e) {
            case 1 / 0:
              return "Infinity";
            case -1 / 0:
              return "-Infinity";
            default:
              return e;
          }
        },
        V = (e) => e.toISOString().replace(".000Z", "Z"),
        H = (e) => {
          if (null == e) return {};
          if (Array.isArray(e)) return e.filter((e) => null != e).map(H);
          if ("object" == typeof e) {
            const t = {};
            for (const r of Object.keys(e)) null != e[r] && (t[r] = H(e[r]));
            return t;
          }
          return e;
        };
      var q = r(96851);
    },
    90570: (e, t, r) => {
      "use strict";
      r.d(t, { t: () => n });
      const n = (e) => {
        if ("function" == typeof e) return e;
        const t = Promise.resolve(e);
        return () => t;
      };
    },
    93451: (e, t, r) => {
      "use strict";
      r.d(t, { c: () => n });
      class n extends Error {
        constructor(e) {
          (super(e), (this.name = "EndpointError"));
        }
      }
    },
    93664: (e, t, r) => {
      const { SmithyRpcV2CborProtocol: n, loadSmithyRpcV2CborErrorCode: s } = r(2682),
        { TypeRegistry: i, NormalizedSchema: o, deref: a } = r(93353),
        { decorateServiceException: c, getValueFromTextNode: l } = r(42997),
        {
          collectBody: u,
          determineTimestampFormat: d,
          RpcProtocol: h,
          HttpBindingProtocol: f,
          HttpInterceptingShapeSerializer: p,
          HttpInterceptingShapeDeserializer: g,
          FromStringShapeDeserializer: m,
          extendedEncodeURIComponent: y,
        } = r(73931),
        {
          NumericValue: w,
          toUtf8: S,
          fromBase64: b,
          LazyJsonString: E,
          parseEpochTimestamp: v,
          parseRfc7231DateTime: x,
          parseRfc3339DateTimeWithOffset: T,
          generateIdempotencyToken: A,
          toBase64: N,
          dateToUtcString: C,
          expectUnion: _,
        } = r(96851),
        { parseXML: R, XmlNode: I, XmlText: D } = r(43409);
      class k {
        queryCompat;
        errorRegistry;
        constructor(e = !1) {
          this.queryCompat = e;
        }
        resolveRestContentType(e, t) {
          const r = t.getMemberSchemas(),
            n = Object.values(r).find((e) => !!e.getMergedTraits().httpPayload);
          if (n) {
            const t = n.getMergedTraits().mediaType;
            return (
              t ||
              (n.isStringSchema()
                ? "text/plain"
                : n.isBlobSchema()
                  ? "application/octet-stream"
                  : e)
            );
          }
          if (!t.isUnitSchema()) {
            if (
              Object.values(r).find((e) => {
                const {
                  httpQuery: t,
                  httpQueryParams: r,
                  httpHeader: n,
                  httpLabel: s,
                  httpPrefixHeaders: i,
                } = e.getMergedTraits();
                return !t && !r && !n && !s && void 0 === i;
              })
            )
              return e;
          }
        }
        async getErrorSchemaOrThrowBaseException(e, t, r, n, s, i) {
          let o = e;
          e.includes("#") && ([, o] = e.split("#"));
          const a = { $metadata: s, $fault: r.statusCode < 500 ? "client" : "server" };
          if (!this.errorRegistry)
            throw new Error("@aws-sdk/core/protocols - error handler not initialized.");
          try {
            return {
              errorSchema: i?.(this.errorRegistry, o) ?? this.errorRegistry.getSchema(e),
              errorMetadata: a,
            };
          } catch (e) {
            n.message = n.message ?? n.Message ?? "UnknownError";
            const t = this.errorRegistry,
              r = t.getBaseException();
            if (r) {
              const e = t.getErrorCtor(r) ?? Error;
              throw this.decorateServiceException(Object.assign(new e({ name: o }), a), n);
            }
            const s = n,
              i = s?.message ?? s?.Message ?? s?.Error?.Message ?? s?.Error?.message;
            throw this.decorateServiceException(Object.assign(new Error(i), { name: o }, a), n);
          }
        }
        compose(e, t, r) {
          let n = r;
          t.includes("#") && ([n] = t.split("#"));
          const s = i.for(n),
            o = i.for("smithy.ts.sdk.synthetic." + r);
          (e.copyFrom(s), e.copyFrom(o), (this.errorRegistry = e));
        }
        decorateServiceException(e, t = {}) {
          if (this.queryCompat) {
            const r = e.Message ?? t.Message,
              n = c(e, t);
            r && (n.message = r);
            const s = n.Error ?? {};
            ((s.Type = n.Error?.Type),
              (s.Code = n.Error?.Code),
              (s.Message = n.Error?.message ?? n.Error?.Message ?? r),
              (n.Error = s));
            const i = n.$metadata.requestId;
            return (i && (n.RequestId = i), n);
          }
          return c(e, t);
        }
        setQueryCompatError(e, t) {
          const r = t.headers?.["x-amzn-query-error"];
          if (void 0 !== e && null != r) {
            const [t, n] = r.split(";"),
              s = Object.keys(e),
              i = { Code: t, Type: n };
            ((e.Code = t), (e.Type = n));
            for (let t = 0; t < s.length; t++) {
              const r = s[t];
              i["message" === r ? "Message" : r] = e[r];
            }
            (delete i.__type, (e.Error = i));
          }
        }
        queryCompatOutput(e, t) {
          (e.Error && (t.Error = e.Error),
            e.Type && (t.Type = e.Type),
            e.Code && (t.Code = e.Code));
        }
        findQueryCompatibleError(e, t) {
          try {
            return e.getSchema(t);
          } catch (r) {
            return e.find((e) => o.of(e).getMergedTraits().awsQueryError?.[0] === t);
          }
        }
      }
      class O {
        serdeContext;
        setSerdeContext(e) {
          this.serdeContext = e;
        }
      }
      class M {
        from;
        to;
        keys;
        constructor(e, t) {
          ((this.from = e), (this.to = t));
          const r = Object.keys(this.from),
            n = new Set(r);
          (n.delete("__type"), (this.keys = n));
        }
        mark(e) {
          this.keys.delete(e);
        }
        hasUnknown() {
          return 1 === this.keys.size && 0 === Object.keys(this.to).length;
        }
        writeUnknown() {
          if (this.hasUnknown()) {
            const e = this.keys.values().next().value,
              t = this.from[e];
            this.to.$unknown = [e, t];
          }
        }
      }
      let P;
      function $() {
        if (void 0 === P)
          try {
            if ("function" != typeof Buffer) P = !1;
            else {
              const e = JSON.parse(Buffer.from([123, 125]));
              P = null !== e && "object" == typeof e;
            }
          } catch {
            P = !1;
          }
        return P;
      }
      function j(e, t, r) {
        if (r?.source) {
          const e = r.source;
          if ("number" == typeof t) {
            return t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER
              ? (function (e, t) {
                  if (e === String(t)) return !0;
                  if (Object.is(t, -0)) return !0;
                  if (/[eE]/.test(e)) return L(e) === L(String(t));
                  const r = e.replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, ""),
                    n = String(t);
                  if (r === n) return !0;
                  if (/[eE]/.test(n)) return r === L(n);
                  return !1;
                })(e, t)
                ? t
                : new w(e, "bigDecimal")
              : (function (e) {
                    const t = e.indexOf(".");
                    if (-1 === t) return !1;
                    const r = e.search(/[eE]/);
                    if (-1 === r) return !0;
                    const n = r - t - 1;
                    return parseInt(e.slice(r + 1), 10) < n;
                  })(e)
                ? new w(e, "bigDecimal")
                : /[eE]/.test(e)
                  ? (function (e) {
                      const t = e.search(/[eE]/),
                        r = parseInt(e.slice(t + 1), 10),
                        n = e.startsWith("-"),
                        s = e.slice(n ? 1 : 0, t),
                        i = s.indexOf(".");
                      let o, a;
                      if (-1 === i) ((o = s), (a = r));
                      else {
                        o = s.slice(0, i) + s.slice(i + 1);
                        a = r - (s.length - i - 1);
                      }
                      o = o.replace(/0+$/, "") || "0";
                      const c =
                        BigInt(o) * 10n ** BigInt(a + (s.replace(".", "").length - o.length));
                      return n ? -c : c;
                    })(e)
                  : BigInt(e);
          }
        }
        return t;
      }
      function L(e) {
        const t = e.startsWith("-"),
          r = t ? e.slice(1) : e,
          n = r.search(/[eE]/);
        let s;
        if (-1 === n) s = r;
        else {
          const e = parseInt(r.slice(n + 1), 10),
            t = r.slice(0, n),
            i = t.indexOf(".");
          let o, a;
          (-1 === i ? ((o = t), (a = t.length)) : ((o = t.slice(0, i) + t.slice(i + 1)), (a = i)),
            (o = o.replace(/0+$/, "") || "0"));
          const c = a + e;
          s =
            "0" === o
              ? "0"
              : c <= 0
                ? "0." + "0".repeat(-c) + o
                : c >= o.length
                  ? o + "0".repeat(c - o.length)
                  : o.slice(0, c) + "." + o.slice(c);
        }
        return (
          s.includes(".") && (s = s.replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "")),
          (t ? "-" : "") + s
        );
      }
      const U = Symbol.for("@aws-sdk/reviver");
      function B(e) {
        const t = o.of(e),
          r = t.getSchema();
        if (Array.isArray(r) && t.isStructSchema()) {
          if (U in r) return r[U];
          const e = F(t, new Set());
          return ((r[U] = e), e);
        }
        return F(t, new Set());
      }
      function F(e, t) {
        const r = e.getSchema();
        if (t.has(r)) return !1;
        if ((t.add(r), e.isBigIntegerSchema() || e.isBigDecimalSchema())) return !0;
        if (e.isStructSchema()) {
          for (const [, r] of e.structIterator()) if (F(r, t)) return !0;
        } else if (e.isListSchema() || e.isMapSchema()) {
          if (F(e.getValueSchema(), t)) return !0;
        } else if (e.isDocumentSchema()) return !0;
        return !1;
      }
      const z = (e, t) => u(e, t).then((e) => (t?.utf8Encoder ?? S)(e));
      async function V(e, t, r) {
        let n;
        if ($() && "function" == typeof e?.[Symbol.asyncIterator]) {
          const r = await u(e, t);
          "function" == typeof Buffer &&
            (n = Buffer.isBuffer(r) ? r : Buffer.from(r.buffer, r.byteOffset, r.byteLength));
        }
        if ((n || (n = await z(e, t)), 0 === n.length)) return {};
        const s = r && B(r) ? j : void 0;
        try {
          return JSON.parse(n, s);
        } catch (e) {
          throw (
            "SyntaxError" === e?.name &&
              Object.defineProperty(e, "$responseBodyText", {
                value: "string" == typeof n ? n : n.toString("utf8"),
              }),
            e
          );
        }
      }
      const H = (e, t) => Object.keys(e).find((e) => e.toLowerCase() === t.toLowerCase()),
        q = (e) => {
          let t = e;
          return (
            "number" == typeof t && (t = t.toString()),
            t.indexOf(",") >= 0 && (t = t.split(",")[0]),
            t.indexOf(":") >= 0 && (t = t.split(":")[0]),
            t.indexOf("#") >= 0 && (t = t.split("#")[1]),
            t
          );
        },
        W = (e, t) => Q(e, t, ["header", "code", "type"]),
        G = (e, t, r = !1) => Q(e, t, r ? ["code", "header", "type"] : ["type", "code", "header"]),
        Q = ({ headers: e }, t, r) => {
          for (; r.length > 0;) {
            switch (r.shift()) {
              case "header":
                const r = H(e ?? {}, "x-amzn-errortype");
                if (void 0 !== r) return q(e[r]);
                break;
              case "code":
                const n = H(t ?? {}, "code");
                if (n && void 0 !== t[n]) return q(t[n]);
                break;
              case "type":
                if (void 0 !== t?.__type) return q(t.__type);
            }
          }
        };
      function X(e) {
        Object.defineProperty(e, "__proto__", {
          value: void 0,
          writable: !0,
          enumerable: !0,
          configurable: !0,
        });
      }
      class K extends O {
        settings;
        constructor(e) {
          (super(), (this.settings = e));
        }
        async read(e, t) {
          const r = B(e) ? j : void 0;
          let n;
          if ("string" == typeof t) {
            if (0 === t.length) return {};
            n = JSON.parse(t, r);
          } else if (t instanceof Uint8Array && $()) {
            if (0 === t.byteLength) return {};
            const e = Buffer.isBuffer(t) ? t : Buffer.from(t.buffer, t.byteOffset, t.byteLength);
            n = JSON.parse(e, r);
          } else n = await V(t, this.serdeContext, e);
          return this._read(e, n);
        }
        readObject(e, t) {
          return this._read(e, t);
        }
        _read(e, t) {
          const r = null !== t && "object" == typeof t,
            n = o.of(e);
          if (r) {
            if (n.isStructSchema()) return this._readStruct(n, t);
            if (Array.isArray(t) && n.isListSchema()) {
              const e = n.getValueSchema();
              if (this.needsTransform(e))
                for (let r = 0; r < t.length; ++r) t[r] = this._read(e, t[r]);
              return t;
            }
            if (n.isMapSchema()) {
              const e = n.getValueSchema(),
                r = t;
              if (this.needsTransform(e))
                for (const t in r) ("__proto__" === t && X(r), (r[t] = this._read(e, r[t])));
              return r;
            }
          }
          if (n.isBlobSchema() && "string" == typeof t) return b(t);
          const s = n.getMergedTraits().mediaType;
          if (n.isStringSchema() && "string" == typeof t && s) {
            return "application/json" === s || s.endsWith("+json") ? E.from(t) : t;
          }
          if (n.isTimestampSchema() && null != t) {
            switch (d(n, this.settings)) {
              case 5:
                return T(t);
              case 6:
                return x(t);
              case 7:
                return v(t);
              default:
                return (
                  console.warn("Missing timestamp format, parsing value with Date constructor:", t),
                  new Date(t)
                );
            }
          }
          if (n.isBigIntegerSchema() && ("number" == typeof t || "string" == typeof t))
            return BigInt(t);
          if (n.isBigDecimalSchema() && null != t) {
            if (t instanceof w) return t;
            const e = t;
            return "bigDecimal" === e.type && "string" in e
              ? new w(e.string, e.type)
              : new w(String(t), "bigDecimal");
          }
          if (n.isNumericSchema() && "string" == typeof t) {
            switch (t) {
              case "Infinity":
                return 1 / 0;
              case "-Infinity":
                return -1 / 0;
              case "NaN":
                return NaN;
            }
            return t;
          }
          if (n.isDocumentSchema() && r)
            if (Array.isArray(t))
              for (let e = 0; e < t.length; ++e) {
                const r = t[e];
                r instanceof w || (t[e] = this._read(n, r));
              }
            else {
              const e = t;
              for (const t in e) {
                "__proto__" === t && X(e);
                const r = e[t];
                r instanceof w || (e[t] = this._read(n, r));
              }
            }
          return t;
        }
        _readStruct(e, t) {
          const r = e.isUnionSchema(),
            n = {};
          let s;
          const i = "string" == typeof t.__type,
            { jsonName: o } = this.settings;
          let a;
          (o && i && (s = {}), r && (a = new M(t, n)));
          for (const [c, l] of e.structIterator()) {
            let e = c;
            (o && ((e = l.getMergedTraits().jsonName ?? e), i && (s[e] = c)),
              r && a.mark(e),
              null != t[e] && (n[c] = this._read(l, t[e])));
          }
          if (r) a.writeUnknown();
          else if (i)
            for (const e in t) {
              const r = t[e],
                i = o ? (s[e] ?? e) : e;
              i in n || (n[i] = r);
            }
          return n;
        }
        needsTransform(e) {
          return (
            !!(
              e.isBlobSchema() ||
              e.isTimestampSchema() ||
              e.isBigIntegerSchema() ||
              e.isBigDecimalSchema()
            ) ||
            !!(e.isDocumentSchema() || e.isStructSchema() || e.isListSchema() || e.isMapSchema()) ||
            !(!e.isStringSchema() || !e.getMergedTraits().mediaType)
          );
        }
      }
      class J extends Uint8Array {
        string = null;
        static allocUnsafe(e) {
          if ("function" == typeof Buffer) {
            const t = Buffer.allocUnsafe(e);
            return new J(t.buffer, t.byteOffset, t.byteLength);
          }
          return new J(e);
        }
        toString() {
          return this.s();
        }
        valueOf() {
          return this.s();
        }
        includes(e, t) {
          return "string" == typeof e
            ? this.s().includes(e, t)
            : Uint8Array.prototype.includes.call(this, e, t);
        }
        indexOf(e, t) {
          return "string" == typeof e
            ? this.s().indexOf(e, t)
            : Uint8Array.prototype.indexOf.call(this, e, t);
        }
        lastIndexOf(e, t) {
          if ("string" == typeof e) return this.s().lastIndexOf(e, t);
          const r = Uint8Array.prototype.lastIndexOf;
          return void 0 !== t ? r.call(this, e, t) : r.call(this, e);
        }
        startsWith(e, t) {
          return this.s().startsWith(e, t);
        }
        endsWith(e, t) {
          return this.s().endsWith(e, t);
        }
        match(e) {
          return this.s().match(e);
        }
        replace(e, t) {
          return this.s().replace(e, t);
        }
        search(e) {
          return this.s().search(e);
        }
        split(e, t) {
          return this.s().split(e, t);
        }
        substring(e, t) {
          return this.s().substring(e, t);
        }
        trim() {
          return this.s().trim();
        }
        trimStart() {
          return this.s().trimStart();
        }
        trimEnd() {
          return this.s().trimEnd();
        }
        charAt(e) {
          return this.s().charAt(e);
        }
        charCodeAt(e) {
          return this.s().charCodeAt(e);
        }
        padStart(e, t) {
          return this.s().padStart(e, t);
        }
        padEnd(e, t) {
          return this.s().padEnd(e, t);
        }
        repeat(e) {
          return this.s().repeat(e);
        }
        toUpperCase() {
          return this.s().toUpperCase();
        }
        toLowerCase() {
          return this.s().toLowerCase();
        }
        s() {
          if (null == this.string) {
            const e = Date.now();
            (e > Y + 6e4 &&
              (console.warn(
                "@aws-sdk/core/protocols - WARN - JsonCodec2: you have called a string method on a Uint8Array request body. It has been automatically converted to string. In a future version this will throw an error.",
              ),
              (Y = e)),
              (this.string = S(this)));
          }
          return this.string;
        }
      }
      var Y = 0;
      const Z = new TextEncoder(),
        ee = 34,
        te = new Uint8Array([116, 114, 117, 101]),
        re = new Uint8Array([102, 97, 108, 115, 101]),
        ne = new Uint8Array([110, 117, 108, 108]),
        se = new Array(128).fill(null);
      ((se[8] = "b"),
        (se[9] = "t"),
        (se[10] = "n"),
        (se[12] = "f"),
        (se[13] = "r"),
        (se[34] = '"'),
        (se[92] = "\\"));
      for (let e = 0; e < 32; e++)
        null === se[e] && (se[e] = "u00" + e.toString(16).padStart(2, "0"));
      function ie(e) {
        return J.allocUnsafe(e);
      }
      class oe extends O {
        settings;
        json;
        i = 0;
        rootSchema;
        rawValue;
        passthrough = !1;
        constructor(e) {
          (super(), (this.settings = e), (this.json = ie(2048)));
        }
        write(e, t) {
          ((this.i = 0),
            (this.rawValue = t),
            (this.rootSchema = o.of(e)),
            (this.passthrough = this.rootSchema.isBlobSchema() || this.rootSchema.isStringSchema()),
            this.passthrough || this.writeValue(this.rootSchema, t, void 0));
        }
        writeDiscriminatedDocument(e, t) {
          ((this.i = 0), (this.rootSchema = o.of(e)));
          const r = this.rootSchema;
          if (r.isStructSchema() && null != t && "object" == typeof t) {
            this.writeValue(r, t, void 0);
            const e = `"__type":"${r.getName(!0) ?? "Unknown"}",`,
              n = e.length;
            (this.ensure(n),
              this.json.copyWithin(1 + n, 1, this.i),
              Z.encodeInto(e, this.json.subarray(1)),
              (this.i += n));
          } else this.writeValue(r, t, void 0);
        }
        flush() {
          this.rootSchema = void 0;
          const e = this.i;
          this.i = 0;
          const t = this.rawValue;
          if (((this.rawValue = void 0), 0 === e)) return t;
          const r = this.json.subarray(0, e);
          return ((this.json = ie(2048)), r);
        }
        ensure(e) {
          const { i: t, json: r } = this;
          if (t + e > r.length) {
            let n = 2 * r.length;
            for (; n < t + e;) n *= 2;
            const s = ie(n);
            (s.set(this.json), (this.json = s));
          }
        }
        writeAscii(e) {
          const t = e.length;
          this.ensure(t);
          let { i: r, json: n } = this;
          for (let s = 0; s < t; ++s) ((n[r] = e.charCodeAt(s)), (r += 1));
          this.i = r;
        }
        writeAsciiQuoted(e) {
          const t = e.length;
          this.ensure(t + 4);
          let { json: r, i: n } = this;
          r[n++] = ee;
          for (let s = 0; s < t; ++s) r[n++] = e.charCodeAt(s);
          ((r[n++] = ee), (this.i = n));
        }
        writeJsonString(e) {
          (this.ensure(3 * e.length + 2), (this.json[this.i++] = ee));
          const t = e.length;
          for (let r = 0; r < t; ++r) {
            const n = e.charCodeAt(r);
            if (n > 34 && n < 92) this.json[this.i++] = n;
            else if (n < 128) {
              const e = se[n];
              if (null !== e) {
                (this.ensure(e.length + 1), (this.json[this.i++] = 92));
                for (let t = 0; t < e.length; t++) this.json[this.i++] = e.charCodeAt(t);
              } else this.json[this.i++] = n;
            } else if (n >= 55296 && n <= 56319) {
              const s = r + 1 < t ? e.charCodeAt(r + 1) : 0;
              if (s >= 56320 && s <= 57343) {
                this.ensure(4);
                const { written: t } = Z.encodeInto(
                  e.substring(r, r + 2),
                  this.json.subarray(this.i),
                );
                ((this.i += t), ++r);
              } else (this.ensure(6), this.writeUnicodeEscape(n));
            } else if (n >= 56320 && n <= 57343) (this.ensure(6), this.writeUnicodeEscape(n));
            else {
              let { i: e, json: t } = this;
              (n < 2048
                ? ((t[e++] = 192 | (n >> 6)), (t[e++] = 128 | (63 & n)))
                : ((t[e++] = 224 | (n >> 12)),
                  (t[e++] = 128 | ((n >> 6) & 63)),
                  (t[e++] = 128 | (63 & n))),
                (this.i = e));
            }
          }
          this.json[this.i++] = ee;
        }
        writeUnicodeEscape(e) {
          let { json: t, i: r } = this;
          ((t[r++] = 92), (t[r++] = 117));
          const n = e.toString(16).padStart(4, "0");
          for (let e = 0; e < 4; ++e) t[r++] = n.charCodeAt(e);
          this.i = r;
        }
        static B64 = (() => {
          const e = new Uint8Array(64);
          for (let t = 0; t < 64; ++t)
            e[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(t);
          return e;
        })();
        writeBase64(e) {
          const t = 4 * Math.ceil(e.length / 3);
          this.ensure(t + 2);
          const r = this.json,
            n = oe.B64;
          let s = this.i;
          r[s++] = ee;
          const i = e.length,
            o = i % 3,
            a = i - o;
          for (let t = 0; t < a; t += 3) {
            const i = e[t],
              o = e[t + 1],
              a = e[t + 2];
            ((r[s++] = n[i >> 2]),
              (r[s++] = n[((3 & i) << 4) | (o >> 4)]),
              (r[s++] = n[((15 & o) << 2) | (a >> 6)]),
              (r[s++] = n[63 & a]));
          }
          if (2 === o) {
            const t = e[a],
              i = e[a + 1];
            ((r[s++] = n[t >> 2]),
              (r[s++] = n[((3 & t) << 4) | (i >> 4)]),
              (r[s++] = n[(15 & i) << 2]),
              (r[s++] = 61));
          } else if (1 === o) {
            const t = e[a];
            ((r[s++] = n[t >> 2]), (r[s++] = n[(3 & t) << 4]), (r[s++] = 61), (r[s++] = 61));
          }
          ((r[s++] = ee), (this.i = s));
        }
        writeValue(e, t, r) {
          if (null == t) {
            if (r?.isStructSchema()) {
              if (void 0 === t) {
                if (o.of(e).isIdempotencyToken()) return void this.writeAsciiQuoted(A());
              }
              return;
            }
            return (this.ensure(4), this.json.set(ne, this.i), void (this.i += 4));
          }
          const n = o.of(e),
            s = "object" == typeof t;
          if (n.isStringSchema()) {
            const e = n.getMergedTraits().mediaType;
            if (e) {
              if ("application/json" === e || e.endsWith("+json"))
                return void this.writeJsonString(E.from(t).toString());
            }
          }
          if (s) {
            if (n.isStructSchema()) return void this.writeStruct(n, t);
            if (Array.isArray(t) && (n.isListSchema() || n.isDocumentSchema()))
              return void this.writeList(n, t, n.isDocumentSchema());
            if (n.isMapSchema()) return void this.writeMap(n, t, !1);
            if (t instanceof Uint8Array && (n.isBlobSchema() || n.isDocumentSchema()))
              return void this.writeBase64(t);
            if (t instanceof Date && (n.isTimestampSchema() || n.isDocumentSchema()))
              return void this.writeTimestamp(n, t);
            if (t instanceof w) return void this.writeAscii(t.string);
            if (n.isDocumentSchema())
              return void (Array.isArray(t) ? this.writeList(n, t, !0) : this.writeMap(n, t, !0));
            const e = JSON.stringify(t);
            return void this.writeAscii(e);
          }
          if ("string" != typeof t) {
            if ("number" == typeof t) {
              if (Math.abs(t) === 1 / 0 || Number.isNaN(t))
                return void this.writeAsciiQuoted(String(t));
              const e = String(t);
              return void this.writeAscii(e);
            }
            if ("boolean" == typeof t) {
              this.ensure(5);
              let { i: e, json: r } = this;
              return (t ? (r.set(te, e), (e += 4)) : (r.set(re, e), (e += 5)), void (this.i = e));
            }
            "bigint" != typeof t ? this.writeAscii(String(t)) : this.writeAscii(t.toString());
          } else {
            if (n.isBlobSchema()) {
              const e = (this.serdeContext?.base64Encoder ?? N)(t);
              return void this.writeAsciiQuoted(e);
            }
            this.writeJsonString(t);
          }
        }
        writeStruct(e, t) {
          (this.ensure(2), (this.json[this.i++] = 123));
          let r = !1;
          const n = "string" == typeof t.__type;
          let s;
          n && (s = new Set());
          for (const [n, i] of e.structIterator()) {
            const o = t[n];
            if (null == o && !i.isIdempotencyToken()) continue;
            (r && (this.ensure(1), (this.json[this.i++] = 44)), (r = !0));
            const a = this.settings.jsonName ? (i.getMergedTraits().jsonName ?? n) : n;
            (s && (s.add(n), s.add(a)),
              this.writeAsciiQuoted(a),
              (this.json[this.i++] = 58),
              this.writeValue(i, o, e));
          }
          if (!r && e.isUnionSchema()) {
            const { $unknown: r } = t;
            if (Array.isArray(r)) {
              const [t, n] = r;
              (this.writeAsciiQuoted(t),
                this.ensure(1),
                (this.json[this.i++] = 58),
                this.writeValue(15, n, e));
            }
          } else if (n)
            for (const e in t) {
              if (s.has(e)) continue;
              s.add(e);
              const n = t[e];
              (r && (this.ensure(1), (this.json[this.i++] = 44)),
                (r = !0),
                this.writeAsciiQuoted(e),
                this.ensure(1),
                (this.json[this.i++] = 58),
                this.writeValue(15, n, void 0));
            }
          (this.ensure(1), (this.json[this.i++] = 125));
        }
        writeList(e, t, r) {
          const n = !!e.getMergedTraits().sparse,
            s = e.getValueSchema();
          if (!r && (s.isStringSchema() || s.isNumericSchema() || s.isBooleanSchema())) {
            let e,
              r = !1;
            for (let e = 0; e < t.length; ++e) {
              const s = t[e];
              if (Number.isNaN(s) || s === 1 / 0 || s === -1 / 0 || (null == s && !n)) {
                r = !0;
                break;
              }
            }
            if (r) {
              const r = [];
              for (let e = 0; e < t.length; ++e) {
                const s = t[e];
                (null != s || n) &&
                  (Number.isNaN(s) || s === 1 / 0 || s === -1 / 0 ? r.push(String(s)) : r.push(s));
              }
              e = JSON.stringify(r);
            } else e = JSON.stringify(t);
            return (
              this.ensure(3 * e.length),
              void (this.i += Z.encodeInto(e, this.json.subarray(this.i)).written)
            );
          }
          (this.ensure(2), (this.json[this.i++] = 91));
          let i = !1;
          for (let e = 0; e < t.length; ++e) {
            const o = t[e];
            (r ? void 0 !== o : null != o || n) &&
              (i && (this.ensure(1), (this.json[this.i++] = 44)),
              this.writeValue(s, o, void 0),
              (i = !0));
          }
          (this.ensure(1), (this.json[this.i++] = 93));
        }
        writeMap(e, t, r) {
          const n = !!e.getMergedTraits().sparse,
            s = e.getValueSchema();
          if (!r && (s.isStringSchema() || s.isNumericSchema() || s.isBooleanSchema())) {
            let e;
            for (const r in t) {
              const s = t[r];
              Number.isNaN(s) || s === 1 / 0 || s === -1 / 0
                ? (((e ??= {})[r] = s), (t[r] = String(s)))
                : null !== s || n || (((e ??= {})[r] = null), (t[r] = void 0));
            }
            const r = JSON.stringify(t);
            return (
              e && Object.assign(t, e),
              this.ensure(3 * r.length),
              void (this.i += Z.encodeInto(r, this.json.subarray(this.i)).written)
            );
          }
          (this.ensure(2), (this.json[this.i++] = 123));
          let i = !0;
          for (const e in t) {
            const o = t[e];
            (r ? void 0 !== o : null != o || n) &&
              (i || (this.ensure(1), (this.json[this.i++] = 44)),
              (i = !1),
              this.writeJsonString(e),
              this.ensure(1),
              (this.json[this.i++] = 58),
              this.writeValue(s, o, void 0));
          }
          (this.ensure(1), (this.json[this.i++] = 125));
        }
        writeTimestamp(e, t) {
          switch (d(e, this.settings)) {
            case 5: {
              const e = t.toISOString().replace(".000Z", "Z");
              return void this.writeAsciiQuoted(e);
            }
            case 6:
              return void this.writeAsciiQuoted(C(t));
            case 7: {
              const e = String(t.getTime() / 1e3);
              return void this.writeAscii(e);
            }
            default: {
              const e = String(t.getTime() / 1e3);
              return void this.writeAscii(e);
            }
          }
        }
      }
      class ae extends O {
        settings;
        constructor(e) {
          (super(), (this.settings = e));
        }
        createSerializer() {
          const e = new oe(this.settings);
          return (e.setSerdeContext(this.serdeContext), e);
        }
        createDeserializer() {
          const e = new K(this.settings);
          return (e.setSerdeContext(this.serdeContext), e);
        }
      }
      class ce extends h {
        serializer;
        deserializer;
        serviceTarget;
        codec;
        mixin;
        awsQueryCompatible;
        constructor({
          defaultNamespace: e,
          errorTypeRegistries: t,
          serviceTarget: r,
          awsQueryCompatible: n,
          jsonCodec: s,
        }) {
          (super({ defaultNamespace: e, errorTypeRegistries: t }),
            (this.serviceTarget = r),
            (this.codec =
              s ?? new ae({ timestampFormat: { useTrait: !0, default: 7 }, jsonName: !1 })),
            (this.serializer = this.codec.createSerializer()),
            (this.deserializer = this.codec.createDeserializer()),
            (this.awsQueryCompatible = !!n),
            (this.mixin = new k(this.awsQueryCompatible)));
        }
        async serializeRequest(e, t, r) {
          const n = await super.serializeRequest(e, t, r);
          return (
            n.path.endsWith("/") || (n.path += "/"),
            (n.headers["content-type"] = `application/x-amz-json-${this.getJsonRpcVersion()}`),
            (n.headers["x-amz-target"] = `${this.serviceTarget}.${e.name}`),
            this.awsQueryCompatible && (n.headers["x-amzn-query-mode"] = "true"),
            ("unit" !== a(e.input) && n.body) || (n.body = "{}"),
            n
          );
        }
        getPayloadCodec() {
          return this.codec;
        }
        async handleError(e, t, r, n, s) {
          const { awsQueryCompatible: i } = this;
          i && this.mixin.setQueryCompatError(n, r);
          const a = G(r, n, i) ?? "Unknown";
          this.mixin.compose(this.compositeErrorRegistry, a, this.options.defaultNamespace);
          const { errorSchema: c, errorMetadata: l } =
              await this.mixin.getErrorSchemaOrThrowBaseException(
                a,
                this.options.defaultNamespace,
                r,
                n,
                s,
                i ? this.mixin.findQueryCompatibleError : void 0,
              ),
            u = o.of(c),
            d = n.message ?? n.Message ?? "UnknownError",
            h = new (this.compositeErrorRegistry.getErrorCtor(c) ?? Error)({}),
            f = {},
            p = this.codec.createDeserializer();
          for (const [e, t] of u.structIterator()) null != n[e] && (f[e] = p.readObject(t, n[e]));
          throw (
            i && this.mixin.queryCompatOutput(n, f),
            this.mixin.decorateServiceException(
              Object.assign(h, l, { $fault: u.getMergedTraits().error, message: d }, f),
              n,
            )
          );
        }
      }
      class le extends O {
        settings;
        constructor(e) {
          (super(), (this.settings = e));
        }
        async read(e, t) {
          const r = B(e) ? j : void 0;
          return this._read(
            e,
            "string" == typeof t ? JSON.parse(t, r) : await V(t, this.serdeContext, e),
          );
        }
        readObject(e, t) {
          return this._read(e, t);
        }
        _read(e, t) {
          const r = null !== t && "object" == typeof t,
            n = o.of(e);
          if (r) {
            if (n.isStructSchema()) {
              const e = t,
                r = n.isUnionSchema(),
                s = {};
              let i;
              const { jsonName: o } = this.settings;
              let a;
              (o && (i = {}), r && (a = new M(e, s)));
              for (const [t, c] of n.structIterator()) {
                let n = t;
                (o && ((n = c.getMergedTraits().jsonName ?? n), (i[n] = t)),
                  r && a.mark(n),
                  null != e[n] && (s[t] = this._read(c, e[n])));
              }
              if (r) a.writeUnknown();
              else if ("string" == typeof e.__type)
                for (const t in e) {
                  const r = e[t],
                    n = o ? (i[t] ?? t) : t;
                  n in s || (s[n] = r);
                }
              return s;
            }
            if (Array.isArray(t) && n.isListSchema()) {
              const e = n.getValueSchema(),
                r = [];
              for (const n of t) r.push(this._read(e, n));
              return r;
            }
            if (n.isMapSchema()) {
              const e = n.getValueSchema(),
                r = {};
              for (const n in t) ("__proto__" === n && X(r), (r[n] = this._read(e, t[n])));
              return r;
            }
          }
          if (n.isBlobSchema() && "string" == typeof t) return b(t);
          const s = n.getMergedTraits().mediaType;
          if (n.isStringSchema() && "string" == typeof t && s) {
            return "application/json" === s || s.endsWith("+json") ? E.from(t) : t;
          }
          if (n.isTimestampSchema() && null != t) {
            switch (d(n, this.settings)) {
              case 5:
                return T(t);
              case 6:
                return x(t);
              case 7:
                return v(t);
              default:
                return (
                  console.warn("Missing timestamp format, parsing value with Date constructor:", t),
                  new Date(t)
                );
            }
          }
          if (n.isBigIntegerSchema() && ("number" == typeof t || "string" == typeof t))
            return BigInt(t);
          if (n.isBigDecimalSchema() && null != t) {
            if (t instanceof w) return t;
            const e = t;
            return "bigDecimal" === e.type && "string" in e
              ? new w(e.string, e.type)
              : new w(String(t), "bigDecimal");
          }
          if (n.isNumericSchema() && "string" == typeof t) {
            switch (t) {
              case "Infinity":
                return 1 / 0;
              case "-Infinity":
                return -1 / 0;
              case "NaN":
                return NaN;
            }
            return t;
          }
          if (n.isDocumentSchema()) {
            if (r) {
              const e = Array.isArray(t) ? [] : {};
              for (const r in t) {
                "__proto__" === r && X(e);
                const s = t[r];
                e[r] = s instanceof w ? s : this._read(n, s);
              }
              return e;
            }
            return structuredClone(t);
          }
          return t;
        }
      }
      const ue = String.fromCharCode(925);
      class de {
        values = new Map();
        counter = 0;
        stage = 0;
        createReplacer() {
          if (1 === this.stage)
            throw new Error("@aws-sdk/core/protocols - JsonReplacer already created.");
          if (2 === this.stage)
            throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
          return (
            (this.stage = 1),
            (e, t) => {
              if (t instanceof w) {
                const e = ue + "nv" + this.counter++ + "_" + t.string;
                return (this.values.set(`"${e}"`, t.string), e);
              }
              if ("bigint" == typeof t) {
                const e = t.toString(),
                  r = ue + "b" + this.counter++ + "_" + e;
                return (this.values.set(`"${r}"`, e), r);
              }
              return t;
            }
          );
        }
        replaceInJson(e) {
          if (0 === this.stage)
            throw new Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
          if (2 === this.stage)
            throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
          if (((this.stage = 2), 0 === this.counter)) return e;
          for (const [t, r] of this.values) e = e.replace(t, r);
          return e;
        }
      }
      class he extends O {
        settings;
        buffer;
        useReplacer = !1;
        rootSchema;
        constructor(e) {
          (super(), (this.settings = e));
        }
        write(e, t) {
          ((this.rootSchema = o.of(e)), (this.buffer = this._write(this.rootSchema, t)));
        }
        flush() {
          const { rootSchema: e, useReplacer: t } = this;
          if (
            ((this.rootSchema = void 0),
            (this.useReplacer = !1),
            e?.isStructSchema() || e?.isDocumentSchema())
          ) {
            if (!t) return JSON.stringify(this.buffer);
            const e = new de();
            return e.replaceInJson(JSON.stringify(this.buffer, e.createReplacer(), 0));
          }
          return this.buffer;
        }
        writeDiscriminatedDocument(e, t) {
          (this.write(e, t),
            "object" == typeof this.buffer && (this.buffer.__type = o.of(e).getName(!0)));
        }
        _write(e, t, r) {
          const n = null !== t && "object" == typeof t,
            s = o.of(e);
          if (n) {
            if (s.isStructSchema()) {
              const e = t,
                r = {},
                { jsonName: n } = this.settings;
              let i;
              n && (i = {});
              let o = 0;
              for (const [t, a] of s.structIterator()) {
                const c = this._write(a, e[t], s);
                if (void 0 !== c) {
                  let e = t;
                  (n && ((e = a.getMergedTraits().jsonName ?? t), (i[t] = e)), (r[e] = c), o++);
                }
              }
              if (s.isUnionSchema() && 0 === o) {
                const { $unknown: t } = e;
                if (Array.isArray(t)) {
                  const [e, n] = t;
                  ("__proto__" === e && X(r), (r[e] = this._write(15, n)));
                }
              } else if ("string" == typeof e.__type)
                for (const t in e) {
                  const s = e[t],
                    o = n ? (i[t] ?? t) : t;
                  o in r || (r[o] = this._write(15, s));
                }
              return r;
            }
            if (Array.isArray(t) && s.isListSchema()) {
              const e = s.getValueSchema(),
                r = [],
                n = !!s.getMergedTraits().sparse;
              for (const s of t) (n || null != s) && r.push(this._write(e, s));
              return r;
            }
            if (s.isMapSchema()) {
              const e = s.getValueSchema(),
                r = {},
                n = !!s.getMergedTraits().sparse;
              for (const s in t) {
                const i = t[s];
                (n || null != i) && ("__proto__" === s && X(r), (r[s] = this._write(e, i)));
              }
              return r;
            }
            if (t instanceof Uint8Array && s.isBlobSchema())
              return s === this.rootSchema ? t : (this.serdeContext?.base64Encoder ?? N)(t);
            if (t instanceof Date && (s.isTimestampSchema() || s.isDocumentSchema())) {
              switch (d(s, this.settings)) {
                case 5:
                  return t.toISOString().replace(".000Z", "Z");
                case 6:
                  return C(t);
                case 7:
                  return t.getTime() / 1e3;
                default:
                  return (
                    console.warn("Missing timestamp format, using epoch seconds", t),
                    t.getTime() / 1e3
                  );
              }
            }
            t instanceof w && (this.useReplacer = !0);
          }
          if (null !== t || !r?.isStructSchema()) {
            if (s.isStringSchema()) {
              if (void 0 === t && s.isIdempotencyToken()) return A();
              const e = s.getMergedTraits().mediaType;
              if (null != t && e) {
                if ("application/json" === e || e.endsWith("+json")) return E.from(t);
              }
              return t;
            }
            if ("number" == typeof t) return Math.abs(t) === 1 / 0 || isNaN(t) ? String(t) : t;
            if ("string" == typeof t && s.isBlobSchema())
              return s === this.rootSchema ? t : (this.serdeContext?.base64Encoder ?? N)(t);
            if (("bigint" == typeof t && (this.useReplacer = !0), s.isDocumentSchema())) {
              if (n) {
                if (t instanceof Uint8Array) return (this.serdeContext?.base64Encoder ?? N)(t);
                const e = Array.isArray(t) ? [] : {};
                for (const r in t) {
                  const n = t[r];
                  ("__proto__" === r && X(e),
                    n instanceof w
                      ? ((this.useReplacer = !0), (e[r] = n))
                      : (e[r] = this._write(s, n)));
                }
                return e;
              }
              return structuredClone(t);
            }
            return t;
          }
        }
      }
      class fe extends O {
        settings;
        stringDeserializer;
        constructor(e) {
          (super(), (this.settings = e), (this.stringDeserializer = new m(e)));
        }
        setSerdeContext(e) {
          ((this.serdeContext = e), this.stringDeserializer.setSerdeContext(e));
        }
        read(e, t, r) {
          const n = o.of(e),
            s = n.getMemberSchemas();
          if (
            n.isStructSchema() &&
            n.isMemberSchema() &&
            !!Object.values(s).find((e) => !!e.getMemberTraits().eventPayload)
          ) {
            const e = {},
              r = Object.keys(s)[0];
            return (s[r].isBlobSchema() ? (e[r] = t) : (e[r] = this.read(s[r], t)), e);
          }
          const i = (this.serdeContext?.utf8Encoder ?? S)(t),
            a = this.parseXml(i);
          return this.readSchema(e, r ? a[r] : a);
        }
        readSchema(e, t) {
          const r = o.of(e);
          if (r.isUnitSchema()) return;
          const n = r.getMergedTraits();
          if (r.isListSchema() && !Array.isArray(t)) return this.readSchema(r, [t]);
          if (null == t) return t;
          if ("object" == typeof t) {
            const e = !!n.xmlFlattened;
            if (r.isListSchema()) {
              const n = r.getValueSchema(),
                s = [],
                i = n.getMergedTraits().xmlName ?? "member",
                o = e ? t : (t[0] ?? t)[i];
              if (null == o) return s;
              const a = Array.isArray(o) ? o : [o];
              for (const e of a) s.push(this.readSchema(n, e));
              return s;
            }
            const s = {};
            if (r.isMapSchema()) {
              const n = r.getKeySchema(),
                i = r.getValueSchema();
              let o;
              o = e ? (Array.isArray(t) ? t : [t]) : Array.isArray(t.entry) ? t.entry : [t.entry];
              const a = n.getMergedTraits().xmlName ?? "key",
                c = i.getMergedTraits().xmlName ?? "value";
              for (const e of o) {
                const t = e[a],
                  r = e[c];
                ("__proto__" === t && X(s), (s[t] = this.readSchema(i, r)));
              }
              return s;
            }
            if (r.isStructSchema()) {
              const e = r.isUnionSchema();
              let n;
              e && (n = new M(t, s));
              for (const [i, o] of r.structIterator()) {
                const r = o.getMergedTraits(),
                  a = r.httpPayload
                    ? (r.xmlName ?? o.getName())
                    : (o.getMemberTraits().xmlName ?? i);
                (e && n.mark(a), null != t[a] && (s[i] = this.readSchema(o, t[a])));
              }
              return (e && n.writeUnknown(), s);
            }
            if (r.isDocumentSchema()) return t;
            throw new Error(
              `@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${r.getName(!0)}`,
            );
          }
          return r.isListSchema()
            ? []
            : r.isMapSchema() || r.isStructSchema()
              ? {}
              : this.stringDeserializer.read(r, t);
        }
        parseXml(e) {
          if (e.length) {
            let t;
            try {
              t = R(e);
            } catch (t) {
              throw (
                t &&
                  "object" == typeof t &&
                  Object.defineProperty(t, "$responseBodyText", { value: e }),
                t
              );
            }
            const r = "#text",
              n = Object.keys(t)[0],
              s = t[n];
            return (s[r] && ((s[n] = s[r]), delete s[r]), l(s));
          }
          return {};
        }
      }
      class pe extends O {
        settings;
        buffer;
        constructor(e) {
          (super(), (this.settings = e));
        }
        write(e, t, r = "") {
          void 0 === this.buffer && (this.buffer = "");
          const n = o.of(e);
          if ((r && !r.endsWith(".") && (r += "."), n.isBlobSchema()))
            ("string" == typeof t || t instanceof Uint8Array) &&
              (this.writeKey(r), this.writeValue((this.serdeContext?.base64Encoder ?? N)(t)));
          else if (n.isBooleanSchema() || n.isNumericSchema() || n.isStringSchema())
            null != t
              ? (this.writeKey(r), this.writeValue(String(t)))
              : n.isIdempotencyToken() && (this.writeKey(r), this.writeValue(A()));
          else if (n.isBigIntegerSchema())
            null != t && (this.writeKey(r), this.writeValue(String(t)));
          else if (n.isBigDecimalSchema())
            null != t && (this.writeKey(r), this.writeValue(t instanceof w ? t.string : String(t)));
          else if (n.isTimestampSchema()) {
            if (t instanceof Date) {
              this.writeKey(r);
              switch (d(n, this.settings)) {
                case 5:
                  this.writeValue(t.toISOString().replace(".000Z", "Z"));
                  break;
                case 6:
                  this.writeValue(C(t));
                  break;
                case 7:
                  this.writeValue(String(t.getTime() / 1e3));
              }
            }
          } else if (n.isDocumentSchema())
            Array.isArray(t)
              ? this.write(79, t, r)
              : t instanceof Date
                ? this.write(4, t, r)
                : t instanceof Uint8Array
                  ? this.write(21, t, r)
                  : t && "object" == typeof t
                    ? this.write(143, t, r)
                    : (this.writeKey(r), this.writeValue(String(t)));
          else if (n.isListSchema()) {
            if (Array.isArray(t))
              if (0 === t.length)
                this.settings.serializeEmptyLists && (this.writeKey(r), this.writeValue(""));
              else {
                const e = n.getValueSchema(),
                  s = this.settings.flattenLists || n.getMergedTraits().xmlFlattened;
                let i = 1;
                for (const n of t) {
                  if (null == n) continue;
                  const t = e.getMergedTraits(),
                    o = this.getKey("member", t.xmlName, t.ec2QueryName),
                    a = s ? `${r}${i}` : `${r}${o}.${i}`;
                  (this.write(e, n, a), ++i);
                }
              }
          } else if (n.isMapSchema()) {
            if (t && "object" == typeof t) {
              const e = n.getKeySchema(),
                s = n.getValueSchema(),
                i = n.getMergedTraits().xmlFlattened;
              let o = 1;
              for (const n in t) {
                const a = t[n];
                if (null == a) continue;
                const c = e.getMergedTraits(),
                  l = this.getKey("key", c.xmlName, c.ec2QueryName),
                  u = i ? `${r}${o}.${l}` : `${r}entry.${o}.${l}`,
                  d = s.getMergedTraits(),
                  h = this.getKey("value", d.xmlName, d.ec2QueryName),
                  f = i ? `${r}${o}.${h}` : `${r}entry.${o}.${h}`;
                (this.write(e, n, u), this.write(s, a, f), ++o);
              }
            }
          } else if (n.isStructSchema()) {
            if (t && "object" == typeof t) {
              let e = !1;
              for (const [s, i] of n.structIterator()) {
                if (null == t[s] && !i.isIdempotencyToken()) continue;
                const n = i.getMergedTraits(),
                  o = `${r}${this.getKey(s, n.xmlName, n.ec2QueryName, "struct")}`;
                (this.write(i, t[s], o), (e = !0));
              }
              if (!e && n.isUnionSchema()) {
                const { $unknown: e } = t;
                if (Array.isArray(e)) {
                  const [t, n] = e,
                    s = `${r}${t}`;
                  this.write(15, n, s);
                }
              }
            }
          } else if (!n.isUnitSchema())
            throw new Error(
              `@aws-sdk/core/protocols - QuerySerializer unrecognized schema type ${n.getName(!0)}`,
            );
        }
        flush() {
          if (void 0 === this.buffer)
            throw new Error(
              "@aws-sdk/core/protocols - QuerySerializer cannot flush with nothing written to buffer.",
            );
          const e = this.buffer;
          return (delete this.buffer, e);
        }
        getKey(e, t, r, n) {
          const { ec2: s, capitalizeKeys: i } = this.settings;
          if (s && r) return r;
          const o = t ?? e;
          return i && "struct" === n ? o[0].toUpperCase() + o.slice(1) : o;
        }
        writeKey(e) {
          (e.endsWith(".") && (e = e.slice(0, e.length - 1)), (this.buffer += `&${y(e)}=`));
        }
        writeValue(e) {
          this.buffer += y(e);
        }
      }
      class ge extends h {
        options;
        serializer;
        deserializer;
        mixin = new k();
        constructor(e) {
          (super({
            defaultNamespace: e.defaultNamespace,
            errorTypeRegistries: e.errorTypeRegistries,
          }),
            (this.options = e));
          const t = {
            timestampFormat: { useTrait: !0, default: 5 },
            httpBindings: !1,
            xmlNamespace: e.xmlNamespace,
            serviceNamespace: e.defaultNamespace,
            serializeEmptyLists: !0,
          };
          ((this.serializer = new pe(t)), (this.deserializer = new fe(t)));
        }
        getShapeId() {
          return "aws.protocols#awsQuery";
        }
        setSerdeContext(e) {
          (this.serializer.setSerdeContext(e), this.deserializer.setSerdeContext(e));
        }
        getPayloadCodec() {
          throw new Error("AWSQuery protocol has no payload codec.");
        }
        async serializeRequest(e, t, r) {
          const n = await super.serializeRequest(e, t, r);
          (n.path.endsWith("/") || (n.path += "/"),
            (n.headers["content-type"] = "application/x-www-form-urlencoded"),
            ("unit" !== a(e.input) && n.body) || (n.body = ""));
          const s = e.name.split("#")[1] ?? e.name;
          return (
            (n.body = `Action=${s}&Version=${this.options.version}` + n.body),
            n.body.endsWith("&") && (n.body = n.body.slice(-1)),
            n
          );
        }
        async deserializeResponse(e, t, r) {
          const n = this.deserializer,
            s = o.of(e.output),
            i = {};
          if (r.statusCode >= 300) {
            const s = await u(r.body, t);
            (s.byteLength > 0 && Object.assign(i, await n.read(15, s)),
              await this.handleError(e, t, r, i, this.deserializeMetadata(r)));
          }
          for (const e in r.headers) {
            const t = r.headers[e];
            (delete r.headers[e], (r.headers[e.toLowerCase()] = t));
          }
          const a = e.name.split("#")[1] ?? e.name,
            c = s.isStructSchema() && this.useNestedResult() ? a + "Result" : void 0,
            l = await u(r.body, t);
          return (
            l.byteLength > 0 && Object.assign(i, await n.read(s, l, c)),
            (i.$metadata = this.deserializeMetadata(r)),
            i
          );
        }
        useNestedResult() {
          return !0;
        }
        async handleError(e, t, r, n, s) {
          const i = this.loadQueryErrorCode(r, n) ?? "Unknown";
          this.mixin.compose(this.compositeErrorRegistry, i, this.options.defaultNamespace);
          const a = this.loadQueryError(n) ?? {},
            c = this.loadQueryErrorMessage(n);
          ((a.message = c), (a.Error = { Type: a.Type, Code: a.Code, Message: c }));
          const { errorSchema: l, errorMetadata: u } =
              await this.mixin.getErrorSchemaOrThrowBaseException(
                i,
                this.options.defaultNamespace,
                r,
                a,
                s,
                this.mixin.findQueryCompatibleError,
              ),
            d = o.of(l),
            h = new (this.compositeErrorRegistry.getErrorCtor(l) ?? Error)({}),
            f = { Type: a.Error.Type, Code: a.Error.Code, Error: a.Error };
          for (const [e, t] of d.structIterator()) {
            const r = t.getMergedTraits().xmlName ?? e,
              s = a[r] ?? n[r];
            f[e] = this.deserializer.readSchema(t, s);
          }
          throw this.mixin.decorateServiceException(
            Object.assign(h, u, { $fault: d.getMergedTraits().error, message: c }, f),
            n,
          );
        }
        loadQueryErrorCode(e, t) {
          const r = (t.Errors?.[0]?.Error ?? t.Errors?.Error ?? t.Error)?.Code;
          return void 0 !== r ? r : 404 == e.statusCode ? "NotFound" : void 0;
        }
        loadQueryError(e) {
          return e.Errors?.[0]?.Error ?? e.Errors?.Error ?? e.Error;
        }
        loadQueryErrorMessage(e) {
          const t = this.loadQueryError(e);
          return t?.message ?? t?.Message ?? e.message ?? e.Message ?? "Unknown";
        }
        getDefaultContentType() {
          return "application/x-www-form-urlencoded";
        }
      }
      const me = (e, t) =>
          z(e, t).then((e) => {
            if (e.length) {
              let t;
              try {
                t = R(e);
              } catch (t) {
                throw (
                  t &&
                    "object" == typeof t &&
                    Object.defineProperty(t, "$responseBodyText", { value: e }),
                  t
                );
              }
              const r = "#text",
                n = Object.keys(t)[0],
                s = t[n];
              return (s[r] && ((s[n] = s[r]), delete s[r]), l(s));
            }
            return {};
          }),
        ye = (e, t) =>
          void 0 !== t?.Error?.Code
            ? t.Error.Code
            : void 0 !== t?.Code
              ? t.Code
              : 404 == e.statusCode
                ? "NotFound"
                : void 0;
      class we extends O {
        settings;
        stringBuffer;
        byteBuffer;
        buffer;
        constructor(e) {
          (super(), (this.settings = e));
        }
        write(e, t) {
          const r = o.of(e);
          if (r.isStringSchema() && "string" == typeof t) this.stringBuffer = t;
          else if (r.isBlobSchema())
            this.byteBuffer = "byteLength" in t ? t : (this.serdeContext?.base64Decoder ?? b)(t);
          else {
            this.buffer = this.writeStruct(r, t, void 0);
            const e = r.getMergedTraits();
            e.httpPayload && !e.xmlName && this.buffer.withName(r.getName());
          }
        }
        flush() {
          if (void 0 !== this.byteBuffer) {
            const e = this.byteBuffer;
            return (delete this.byteBuffer, e);
          }
          if (void 0 !== this.stringBuffer) {
            const e = this.stringBuffer;
            return (delete this.stringBuffer, e);
          }
          const e = this.buffer;
          return (
            this.settings.xmlNamespace &&
              (e?.attributes?.xmlns || e.addAttribute("xmlns", this.settings.xmlNamespace)),
            delete this.buffer,
            e.toString()
          );
        }
        writeStruct(e, t, r) {
          const n = e.getMergedTraits(),
            s =
              e.isMemberSchema() && !n.httpPayload
                ? (e.getMemberTraits().xmlName ?? e.getMemberName())
                : (n.xmlName ?? e.getName());
          if (!s || !e.isStructSchema())
            throw new Error(
              `@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${e.getName(!0)}.`,
            );
          const i = I.of(s),
            [o, a] = this.getXmlnsAttribute(e, r);
          for (const [r, n] of e.structIterator()) {
            const e = t[r];
            if (null != e || n.isIdempotencyToken()) {
              if (n.getMergedTraits().xmlAttribute) {
                i.addAttribute(n.getMergedTraits().xmlName ?? r, this.writeSimple(n, e));
                continue;
              }
              if (n.isListSchema()) this.writeList(n, e, i, a);
              else if (n.isMapSchema()) this.writeMap(n, e, i, a);
              else if (n.isStructSchema()) i.addChildNode(this.writeStruct(n, e, a));
              else {
                const t = I.of(n.getMergedTraits().xmlName ?? n.getMemberName());
                (this.writeSimpleInto(n, e, t, a), i.addChildNode(t));
              }
            }
          }
          const { $unknown: c } = t;
          if (c && e.isUnionSchema() && Array.isArray(c) && 1 === Object.keys(t).length) {
            const [e, r] = c,
              n = I.of(e);
            if ("string" != typeof r) {
              if (!(t instanceof I || t instanceof D))
                throw new Error(
                  "@aws-sdk - $unknown union member in XML requires value of type string, @aws-sdk/xml-builder::XmlNode or XmlText.",
                );
              i.addChildNode(t);
            }
            (this.writeSimpleInto(0, r, n, a), i.addChildNode(n));
          }
          return (a && i.addAttribute(o, a), i);
        }
        writeList(e, t, r, n) {
          if (!e.isMemberSchema())
            throw new Error(
              `@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${e.getName(!0)}`,
            );
          const s = e.getMergedTraits(),
            i = e.getValueSchema(),
            o = i.getMergedTraits(),
            a = !!o.sparse,
            c = !!s.xmlFlattened,
            [l, u] = this.getXmlnsAttribute(e, n),
            d = (t, r) => {
              if (i.isListSchema()) this.writeList(i, Array.isArray(r) ? r : [r], t, u);
              else if (i.isMapSchema()) this.writeMap(i, r, t, u);
              else if (i.isStructSchema()) {
                const n = this.writeStruct(i, r, u);
                t.addChildNode(
                  n.withName(c ? (s.xmlName ?? e.getMemberName()) : (o.xmlName ?? "member")),
                );
              } else {
                const n = I.of(c ? (s.xmlName ?? e.getMemberName()) : (o.xmlName ?? "member"));
                (this.writeSimpleInto(i, r, n, u), t.addChildNode(n));
              }
            };
          if (c) for (const e of t) (a || null != e) && d(r, e);
          else {
            const n = I.of(s.xmlName ?? e.getMemberName());
            u && n.addAttribute(l, u);
            for (const e of t) (a || null != e) && d(n, e);
            r.addChildNode(n);
          }
        }
        writeMap(e, t, r, n, s = !1) {
          if (!e.isMemberSchema())
            throw new Error(
              `@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${e.getName(!0)}`,
            );
          const i = e.getMergedTraits(),
            o = e.getKeySchema(),
            a = o.getMergedTraits().xmlName ?? "key",
            c = e.getValueSchema(),
            l = c.getMergedTraits(),
            u = l.xmlName ?? "value",
            d = !!l.sparse,
            h = !!i.xmlFlattened,
            [f, p] = this.getXmlnsAttribute(e, n),
            g = (e, t, r) => {
              const n = I.of(a, t),
                [s, i] = this.getXmlnsAttribute(o, p);
              (i && n.addAttribute(s, i), e.addChildNode(n));
              let l = I.of(u);
              (c.isListSchema()
                ? this.writeList(c, r, l, p)
                : c.isMapSchema()
                  ? this.writeMap(c, r, l, p, !0)
                  : c.isStructSchema()
                    ? (l = this.writeStruct(c, r, p))
                    : this.writeSimpleInto(c, r, l, p),
                e.addChildNode(l));
            };
          if (h)
            for (const n in t) {
              const s = t[n];
              if (d || null != s) {
                const t = I.of(i.xmlName ?? e.getMemberName());
                (g(t, n, s), r.addChildNode(t));
              }
            }
          else {
            let n;
            s ||
              ((n = I.of(i.xmlName ?? e.getMemberName())),
              p && n.addAttribute(f, p),
              r.addChildNode(n));
            for (const e in t) {
              const i = t[e];
              if (d || null != i) {
                const t = I.of("entry");
                (g(t, e, i), (s ? r : n).addChildNode(t));
              }
            }
          }
        }
        writeSimple(e, t) {
          if (null === t)
            throw new Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
          const r = o.of(e);
          let n = null;
          if (t && "object" == typeof t)
            if (r.isBlobSchema()) n = (this.serdeContext?.base64Encoder ?? N)(t);
            else {
              if (!(r.isTimestampSchema() && t instanceof Date)) {
                if (r.isBigDecimalSchema() && t) return t instanceof w ? t.string : String(t);
                throw r.isMapSchema() || r.isListSchema()
                  ? new Error(
                      "@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.",
                    )
                  : new Error(
                      `@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${r.getName(!0)}`,
                    );
              }
              switch (d(r, this.settings)) {
                case 5:
                  n = t.toISOString().replace(".000Z", "Z");
                  break;
                case 6:
                  n = C(t);
                  break;
                case 7:
                  n = String(t.getTime() / 1e3);
                  break;
                default:
                  (console.warn("Missing timestamp format, using http date", t), (n = C(t)));
              }
            }
          if (
            ((r.isBooleanSchema() ||
              r.isNumericSchema() ||
              r.isBigIntegerSchema() ||
              r.isBigDecimalSchema()) &&
              (n = String(t)),
            r.isStringSchema() && (n = void 0 === t && r.isIdempotencyToken() ? A() : String(t)),
            null === n)
          )
            throw new Error(`Unhandled schema-value pair ${r.getName(!0)}=${t}`);
          return n;
        }
        writeSimpleInto(e, t, r, n) {
          const s = this.writeSimple(e, t),
            i = o.of(e),
            a = new D(s),
            [c, l] = this.getXmlnsAttribute(i, n);
          (l && r.addAttribute(c, l), r.addChildNode(a));
        }
        getXmlnsAttribute(e, t) {
          const r = e.getMergedTraits(),
            [n, s] = r.xmlNamespace ?? [];
          return s && s !== t ? [n ? `xmlns:${n}` : "xmlns", s] : [void 0, void 0];
        }
      }
      class Se extends O {
        settings;
        constructor(e) {
          (super(), (this.settings = e));
        }
        createSerializer() {
          const e = new we(this.settings);
          return (e.setSerdeContext(this.serdeContext), e);
        }
        createDeserializer() {
          const e = new fe(this.settings);
          return (e.setSerdeContext(this.serdeContext), e);
        }
      }
      ((t.AwsEc2QueryProtocol = class extends ge {
        options;
        constructor(e) {
          (super(e), (this.options = e));
          Object.assign(this.serializer.settings, {
            capitalizeKeys: !0,
            flattenLists: !0,
            serializeEmptyLists: !1,
            ec2: !0,
          });
        }
        getShapeId() {
          return "aws.protocols#ec2Query";
        }
        useNestedResult() {
          return !1;
        }
      }),
        (t.AwsJson1_0Protocol = class extends ce {
          constructor({
            defaultNamespace: e,
            errorTypeRegistries: t,
            serviceTarget: r,
            awsQueryCompatible: n,
            jsonCodec: s,
          }) {
            super({
              defaultNamespace: e,
              errorTypeRegistries: t,
              serviceTarget: r,
              awsQueryCompatible: n,
              jsonCodec: s,
            });
          }
          getShapeId() {
            return "aws.protocols#awsJson1_0";
          }
          getJsonRpcVersion() {
            return "1.0";
          }
          getDefaultContentType() {
            return "application/x-amz-json-1.0";
          }
        }),
        (t.AwsJson1_1Protocol = class extends ce {
          constructor({
            defaultNamespace: e,
            errorTypeRegistries: t,
            serviceTarget: r,
            awsQueryCompatible: n,
            jsonCodec: s,
          }) {
            super({
              defaultNamespace: e,
              errorTypeRegistries: t,
              serviceTarget: r,
              awsQueryCompatible: n,
              jsonCodec: s,
            });
          }
          getShapeId() {
            return "aws.protocols#awsJson1_1";
          }
          getJsonRpcVersion() {
            return "1.1";
          }
          getDefaultContentType() {
            return "application/x-amz-json-1.1";
          }
        }),
        (t.AwsJsonRpcProtocol = ce),
        (t.AwsQueryProtocol = ge),
        (t.AwsRestJsonProtocol = class extends f {
          serializer;
          deserializer;
          codec;
          mixin = new k();
          constructor({ defaultNamespace: e, errorTypeRegistries: t, jsonCodec: r }) {
            super({ defaultNamespace: e, errorTypeRegistries: t });
            const n = {
              timestampFormat: { useTrait: !0, default: 7 },
              httpBindings: !0,
              jsonName: !0,
            };
            ((this.codec = r ?? new ae(n)),
              (this.serializer = new p(this.codec.createSerializer(), n)),
              (this.deserializer = new g(this.codec.createDeserializer(), n)));
          }
          getShapeId() {
            return "aws.protocols#restJson1";
          }
          getPayloadCodec() {
            return this.codec;
          }
          setSerdeContext(e) {
            (this.codec.setSerdeContext(e), super.setSerdeContext(e));
          }
          async serializeRequest(e, t, r) {
            const n = await super.serializeRequest(e, t, r),
              s = o.of(e.input);
            if (!n.headers["content-type"]) {
              const e = this.mixin.resolveRestContentType(this.getDefaultContentType(), s);
              e && (n.headers["content-type"] = e);
            }
            return (
              null == n.body &&
                n.headers["content-type"] === this.getDefaultContentType() &&
                (n.body = "{}"),
              n
            );
          }
          async deserializeResponse(e, t, r) {
            const n = await super.deserializeResponse(e, t, r),
              s = o.of(e.output);
            for (const [e, t] of s.structIterator())
              t.getMemberTraits().httpPayload && !(e in n) && (n[e] = null);
            return n;
          }
          async handleError(e, t, r, n, s) {
            const i = W(r, n) ?? "Unknown";
            this.mixin.compose(this.compositeErrorRegistry, i, this.options.defaultNamespace);
            const { errorSchema: a, errorMetadata: c } =
                await this.mixin.getErrorSchemaOrThrowBaseException(
                  i,
                  this.options.defaultNamespace,
                  r,
                  n,
                  s,
                ),
              l = o.of(a),
              u = n.message ?? n.Message ?? "UnknownError",
              d = new (this.compositeErrorRegistry.getErrorCtor(a) ?? Error)({});
            await this.deserializeHttpMessage(a, t, r, n);
            const h = {},
              f = this.codec.createDeserializer();
            for (const [e, t] of l.structIterator()) {
              const r = t.getMergedTraits().jsonName ?? e;
              h[e] = f.readObject(t, n[r]);
            }
            throw this.mixin.decorateServiceException(
              Object.assign(d, c, { $fault: l.getMergedTraits().error, message: u }, h),
              n,
            );
          }
          getDefaultContentType() {
            return "application/json";
          }
        }),
        (t.AwsRestXmlProtocol = class extends f {
          codec;
          serializer;
          deserializer;
          mixin = new k();
          constructor(e) {
            super(e);
            const t = {
              timestampFormat: { useTrait: !0, default: 5 },
              httpBindings: !0,
              xmlNamespace: e.xmlNamespace,
              serviceNamespace: e.defaultNamespace,
            };
            ((this.codec = new Se(t)),
              (this.serializer = new p(this.codec.createSerializer(), t)),
              (this.deserializer = new g(this.codec.createDeserializer(), t)));
          }
          getPayloadCodec() {
            return this.codec;
          }
          getShapeId() {
            return "aws.protocols#restXml";
          }
          async serializeRequest(e, t, r) {
            const n = await super.serializeRequest(e, t, r),
              s = o.of(e.input);
            if (!n.headers["content-type"]) {
              const e = this.mixin.resolveRestContentType(this.getDefaultContentType(), s);
              e && (n.headers["content-type"] = e);
            }
            return (
              "string" != typeof n.body ||
                n.headers["content-type"] !== this.getDefaultContentType() ||
                n.body.startsWith("<?xml ") ||
                this.hasUnstructuredPayloadBinding(s) ||
                (n.body = '<?xml version="1.0" encoding="UTF-8"?>' + n.body),
              n
            );
          }
          async deserializeResponse(e, t, r) {
            return super.deserializeResponse(e, t, r);
          }
          async handleError(e, t, r, n, s) {
            const i = ye(r, n) ?? "Unknown";
            if (
              (this.mixin.compose(this.compositeErrorRegistry, i, this.options.defaultNamespace),
              n.Error && "object" == typeof n.Error)
            )
              for (const e of Object.keys(n.Error))
                ((n[e] = n.Error[e]), "message" === e.toLowerCase() && (n.message = n.Error[e]));
            n.RequestId && !s.requestId && (s.requestId = n.RequestId);
            const { errorSchema: a, errorMetadata: c } =
                await this.mixin.getErrorSchemaOrThrowBaseException(
                  i,
                  this.options.defaultNamespace,
                  r,
                  n,
                  s,
                ),
              l = o.of(a),
              u = n.Error?.message ?? n.Error?.Message ?? n.message ?? n.Message ?? "UnknownError",
              d = new (this.compositeErrorRegistry.getErrorCtor(a) ?? Error)({});
            await this.deserializeHttpMessage(a, t, r, n);
            const h = {},
              f = this.codec.createDeserializer();
            for (const [e, t] of l.structIterator()) {
              const r = t.getMergedTraits().xmlName ?? e,
                s = n.Error?.[r] ?? n[r];
              h[e] = f.readSchema(t, s);
            }
            throw this.mixin.decorateServiceException(
              Object.assign(d, c, { $fault: l.getMergedTraits().error, message: u }, h),
              n,
            );
          }
          getDefaultContentType() {
            return "application/xml";
          }
          hasUnstructuredPayloadBinding(e) {
            for (const [, t] of e.structIterator())
              if (t.getMergedTraits().httpPayload)
                return !(t.isStructSchema() || t.isMapSchema() || t.isListSchema());
            return !1;
          }
        }),
        (t.AwsSmithyRpcV2CborProtocol = class extends n {
          awsQueryCompatible;
          mixin;
          constructor({ defaultNamespace: e, errorTypeRegistries: t, awsQueryCompatible: r }) {
            (super({ defaultNamespace: e, errorTypeRegistries: t }),
              (this.awsQueryCompatible = !!r),
              (this.mixin = new k(this.awsQueryCompatible)));
          }
          async serializeRequest(e, t, r) {
            const n = await super.serializeRequest(e, t, r);
            return (this.awsQueryCompatible && (n.headers["x-amzn-query-mode"] = "true"), n);
          }
          async handleError(e, t, r, n, i) {
            this.awsQueryCompatible && this.mixin.setQueryCompatError(n, r);
            const a = (() => {
              const e = r.headers["x-amzn-query-error"];
              return e && this.awsQueryCompatible ? e.split(";")[0] : (s(r, n) ?? "Unknown");
            })();
            this.mixin.compose(this.compositeErrorRegistry, a, this.options.defaultNamespace);
            const { errorSchema: c, errorMetadata: l } =
                await this.mixin.getErrorSchemaOrThrowBaseException(
                  a,
                  this.options.defaultNamespace,
                  r,
                  n,
                  i,
                  this.awsQueryCompatible ? this.mixin.findQueryCompatibleError : void 0,
                ),
              u = o.of(c),
              d = n.message ?? n.Message ?? "UnknownError",
              h = new (this.compositeErrorRegistry.getErrorCtor(c) ?? Error)({}),
              f = {};
            for (const [e, t] of u.structIterator())
              null != n[e] && (f[e] = this.deserializer.readValue(t, n[e]));
            throw (
              this.awsQueryCompatible && this.mixin.queryCompatOutput(n, f),
              this.mixin.decorateServiceException(
                Object.assign(h, l, { $fault: u.getMergedTraits().error, message: d }, f),
                n,
              )
            );
          }
        }),
        (t.JsonCodec = class extends O {
          settings;
          constructor(e) {
            (super(), (this.settings = e));
          }
          createSerializer() {
            const e = new he(this.settings);
            return (e.setSerdeContext(this.serdeContext), e);
          }
          createDeserializer() {
            const e = new le(this.settings);
            return (e.setSerdeContext(this.serdeContext), e);
          }
        }),
        (t.JsonCodec2 = ae),
        (t.JsonShapeDeserializer = le),
        (t.JsonShapeDeserializer2 = K),
        (t.JsonShapeSerializer = he),
        (t.JsonShapeSerializer2 = oe),
        (t.QueryShapeSerializer = pe),
        (t.XmlCodec = Se),
        (t.XmlShapeDeserializer = fe),
        (t.XmlShapeSerializer = we),
        (t._toBool = (e) => {
          if (null == e) return e;
          if ("string" == typeof e) {
            const t = e.toLowerCase();
            if ("" !== e && "false" !== t && "true" !== t) {
              const t = new Error(`Received string "${e}" where a boolean was expected.`);
              ((t.name = "Warning"), console.warn(t));
            }
            return "" !== e && "false" !== t;
          }
          return e;
        }),
        (t._toNum = (e) => {
          if (null == e) return e;
          if ("string" == typeof e) {
            const t = Number(e);
            if (t.toString() !== e) {
              const t = new Error(`Received string "${e}" where a number was expected.`);
              return ((t.name = "Warning"), console.warn(t), e);
            }
            return t;
          }
          return e;
        }),
        (t._toStr = (e) => {
          if (null == e) return e;
          if ("number" == typeof e || "bigint" == typeof e) {
            const t = new Error(`Received number ${e} where a string was expected.`);
            return ((t.name = "Warning"), console.warn(t), String(e));
          }
          if ("boolean" == typeof e) {
            const t = new Error(`Received boolean ${e} where a string was expected.`);
            return ((t.name = "Warning"), console.warn(t), String(e));
          }
          return e;
        }),
        (t.awsExpectUnion = (e) => {
          if (null != e) return ("object" == typeof e && "__type" in e && delete e.__type, _(e));
        }),
        (t.loadJsonRpcErrorCode = G),
        (t.loadRestJsonErrorCode = W),
        (t.loadRestXmlErrorCode = ye),
        (t.parseJsonBody = V),
        (t.parseJsonErrorBody = async (e, t) => {
          const r = await V(e, t);
          return ((r.message = r.message ?? r.Message), r);
        }),
        (t.parseXmlBody = me),
        (t.parseXmlErrorBody = async (e, t) => {
          const r = await me(e, t);
          return (r.Error && (r.Error.message = r.Error.message ?? r.Error.Message), r);
        }));
    },
    94804: (e, t, r) => {
      "use strict";
      function n(e) {
        const t = e && "object" == typeof e && "reason" in e ? e.reason : void 0;
        if (t) {
          if (t instanceof Error) {
            const e = new Error("Request aborted");
            return ((e.name = "AbortError"), (e.cause = t), e);
          }
          const e = new Error(String(t));
          return ((e.name = "AbortError"), e);
        }
        const r = new Error("Request aborted");
        return ((r.name = "AbortError"), r);
      }
      r.d(t, { F: () => n });
    },
    98025: (e, t, r) => {
      "use strict";
      var n;
      (r.d(t, { c: () => n }),
        (function (e) {
          ((e.ENV = "env"), (e.CONFIG = "shared config entry"));
        })(n || (n = {})));
    },
    99202: (e, t, r) => {
      "use strict";
      (r.r(t),
        r.d(t, {
          DEFAULT_REQUEST_TIMEOUT: () => n.w,
          NodeHttp2Handler: () => g,
          NodeHttpHandler: () => n.$,
          streamCollector: () => m.streamCollector,
        }));
      var n = r(41741),
        s = r(73931),
        i = r(94804),
        o = r(86639),
        a = r(32467),
        c = r.n(a);
      const l = new Uint16Array(1);
      class u {
        id = l[0]++;
        total = 0;
        max = 0;
        session;
        refs = 0;
        constructor(e) {
          (e.unref(), (this.session = e));
        }
        retain() {
          if (this.session.destroyed)
            throw new Error(
              "@smithy/node-http-handler - cannot acquire reference to destroyed session.",
            );
          ((this.refs += 1),
            (this.total += 1),
            (this.max = Math.max(this.refs, this.max)),
            this.session.ref());
        }
        free() {
          if (
            !this.session.destroyed &&
            ((this.refs -= 1), 0 === this.refs && this.session.unref(), this.refs < 0)
          )
            throw new Error(
              "@smithy/node-http-handler - ClientHttp2Session refcount at zero, cannot decrement.",
            );
        }
        deref() {
          return this.session;
        }
        close() {
          this.session.closed || this.session.close();
        }
        destroy() {
          ((this.refs = 0), this.session.destroyed || this.session.destroy());
        }
        useCount() {
          return this.refs;
        }
      }
      class d {
        sessions = [];
        maxConcurrency = 0;
        constructor(e) {
          this.sessions = (e ?? []).map((e) => new u(e));
        }
        poll() {
          let e = !1;
          for (const t of this.sessions)
            if (t.deref().destroyed) e = !0;
            else if (!this.maxConcurrency || t.useCount() < this.maxConcurrency) return t;
          if (e) for (const e of this.sessions) e.deref().destroyed && this.remove(e);
        }
        offerLast(e) {
          this.sessions.push(e);
        }
        remove(e) {
          const t = this.sessions.indexOf(e);
          t > -1 && this.sessions.splice(t, 1);
        }
        [Symbol.iterator]() {
          return this.sessions[Symbol.iterator]();
        }
        setMaxConcurrency(e) {
          this.maxConcurrency = e;
        }
        destroy(e) {
          (this.remove(e), e.destroy());
        }
      }
      class h {
        config;
        connectOptions;
        connectionPools = new Map();
        constructor(e) {
          if (((this.config = e), this.config.maxConcurrency && this.config.maxConcurrency <= 0))
            throw new RangeError("maxConcurrency must be greater than zero.");
        }
        lease(e, t) {
          const r = this.getUrlString(e),
            n = this.getPool(r);
          if (!this.config.disableConcurrency && !t.isEventStream) {
            const e = n.poll();
            if (e) return (e.retain(), e);
          }
          const s = new u(this.connect(r)),
            i = s.deref();
          this.config.maxConcurrency &&
            i.settings({ maxConcurrentStreams: this.config.maxConcurrency }, (t) => {
              if (t)
                throw new Error(
                  "Fail to set maxConcurrentStreams to " +
                    this.config.maxConcurrency +
                    "when creating new session for " +
                    e.destination.toString(),
                );
            });
          const o = () => {
            this.removeFromPoolAndCheckedDestroy(r, s);
          };
          return (
            i.on("goaway", () => {
              this.removeFromPoolAndClose(r, s);
            }),
            i.on("error", o),
            i.on("frameError", o),
            i.on("close", o),
            t.requestTimeout && i.setTimeout(t.requestTimeout, o),
            n.offerLast(s),
            s.retain(),
            s
          );
        }
        release(e, t) {
          t.free();
        }
        createIsolatedSession(e, t) {
          const r = this.getUrlString(e),
            n = new u(this.connect(r)),
            s = n.deref();
          s.settings({ maxConcurrentStreams: 1 });
          const i = () => {
            n.destroy();
          };
          return (
            s.on("error", i),
            s.on("frameError", i),
            s.on("close", i),
            t.requestTimeout && s.setTimeout(t.requestTimeout, i),
            n.retain(),
            n
          );
        }
        destroy() {
          for (const [e, t] of this.connectionPools) {
            for (const e of [...t]) e.destroy();
            this.connectionPools.delete(e);
          }
        }
        setMaxConcurrentStreams(e) {
          if (e && e <= 0) throw new RangeError("maxConcurrentStreams must be greater than zero.");
          this.config.maxConcurrency = e;
          for (const t of this.connectionPools.values()) t.setMaxConcurrency(e);
        }
        setDisableConcurrentStreams(e) {
          this.config.disableConcurrency = e;
        }
        setNodeHttp2ConnectOptions(e) {
          this.connectOptions = e;
        }
        debug() {
          const e = {};
          for (const [t, r] of this.connectionPools) {
            const n = [];
            for (const e of r)
              n.push({
                id: e.id,
                active: e.useCount(),
                maxConcurrent: e.max,
                totalRequests: e.total,
              });
            e[t] = { sessions: n };
          }
          return e;
        }
        removeFromPoolAndClose(e, t) {
          (this.connectionPools.get(e)?.remove(t), t.close());
        }
        removeFromPoolAndCheckedDestroy(e, t) {
          (this.connectionPools.get(e)?.remove(t), t.destroy());
        }
        getPool(e) {
          if (!this.connectionPools.has(e)) {
            const t = new d();
            (this.config.maxConcurrency && t.setMaxConcurrency(this.config.maxConcurrency),
              this.connectionPools.set(e, t));
          }
          return this.connectionPools.get(e);
        }
        getUrlString(e) {
          return e.destination.toString();
        }
        connect(e) {
          return void 0 === this.connectOptions
            ? c().connect(e)
            : c().connect(e, this.connectOptions);
        }
      }
      var f = r(29428);
      const { constants: p } = c();
      class g {
        config;
        configProvider;
        metadata = { handlerProtocol: "h2" };
        connectionManager = new h({});
        static create(e) {
          return "function" == typeof e?.handle ? e : new g(e);
        }
        constructor(e) {
          this.configProvider = new Promise((t, r) => {
            "function" == typeof e
              ? e()
                  .then((e) => {
                    t(e || {});
                  })
                  .catch(r)
              : t(e || {});
          });
        }
        destroy() {
          this.connectionManager.destroy();
        }
        async handle(e, { abortSignal: t, requestTimeout: r, isEventStream: n } = {}) {
          if (!this.config) {
            this.config = await this.configProvider;
            const {
              disableConcurrentStreams: e,
              maxConcurrentStreams: t,
              nodeHttp2ConnectOptions: r,
            } = this.config;
            (this.connectionManager.setDisableConcurrentStreams(e ?? !1),
              t && this.connectionManager.setMaxConcurrentStreams(t),
              r && this.connectionManager.setNodeHttp2ConnectOptions(r));
          }
          const { requestTimeout: a, disableConcurrentStreams: c } = this.config,
            l = c || n,
            u = r ?? a;
          return new Promise((r, a) => {
            let c,
              d = !1;
            const h = async (e) => {
              (await c, a(e));
            };
            if (t?.aborted) {
              d = !0;
              const e = (0, i.F)(t);
              return void h(e);
            }
            const { hostname: g, method: m, port: y, protocol: w, query: S } = e;
            let b = "";
            if (null != e.username || null != e.password) {
              b = `${e.username ?? ""}:${e.password ?? ""}@`;
            }
            const E = { destination: new URL(`${w}//${b}${g}${y ? `:${y}` : ""}`) },
              v = { requestTimeout: this.config?.sessionTimeout, isEventStream: n },
              x = l
                ? this.connectionManager.createIsolatedSession(E, v)
                : this.connectionManager.lease(E, v),
              T = x.deref(),
              A = (e) => {
                (l && x.destroy(), (d = !0), h(e));
              },
              N = S ? (0, s.buildQueryString)(S) : "";
            let C = e.path;
            (N && (C += `?${N}`), e.fragment && (C += `#${e.fragment}`));
            const _ = T.request({
              ...e.headers,
              [p.HTTP2_HEADER_PATH]: C,
              [p.HTTP2_HEADER_METHOD]: m,
            });
            if (
              (u &&
                _.setTimeout(u, () => {
                  _.close();
                  const e = new Error(`Stream timed out because of no activity for ${u} ms`);
                  ((e.name = "TimeoutError"), A(e));
                }),
              t)
            ) {
              const e = () => {
                _.close();
                const e = (0, i.F)(t);
                A(e);
              };
              if ("function" == typeof t.addEventListener) {
                const r = t;
                (r.addEventListener("abort", e, { once: !0 }),
                  _.once("close", () => r.removeEventListener("abort", e)));
              } else t.onabort = e;
            }
            (_.on("frameError", (e, t, r) => {
              A(new Error(`Frame type id ${e} in stream id ${r} has failed with code ${t}.`));
            }),
              _.on("error", A),
              _.on("aborted", () => {
                A(
                  new Error(
                    `HTTP/2 stream is abnormally aborted in mid-communication with result code ${_.rstCode}.`,
                  ),
                );
              }),
              _.on("response", (e) => {
                const t = new s.HttpResponse({
                  statusCode: e[":status"] ?? -1,
                  headers: (0, o.u)(e),
                  body: _,
                });
                ((d = !0),
                  (async (e) => {
                    (await c, r(e));
                  })({ response: t }),
                  l && T.close());
              }),
              _.on("close", () => {
                (l ? x.destroy() : this.connectionManager.release(E, x),
                  d || A(new Error("Unexpected error: http2 request did not get a response")));
              }),
              (c = (0, f.f)(_, e, u)));
          });
        }
        updateHttpClientConfig(e, t) {
          ((this.config = void 0),
            (this.configProvider = this.configProvider.then((r) => ({ ...r, [e]: t }))));
        }
        httpHandlerConfigs() {
          return this.config ?? {};
        }
      }
      var m = r(96851);
    },
    99430: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => i });
      var n = r(73931),
        s = r(88141);
      const i = ({ query: e = {} }) => {
        const t = [],
          r = {};
        for (const i of Object.keys(e)) {
          if (i.toLowerCase() === s.D8) continue;
          const o = (0, n.escapeUri)(i);
          t.push(o);
          const a = e[i];
          "string" == typeof a
            ? (r[o] = `${o}=${(0, n.escapeUri)(a)}`)
            : Array.isArray(a) &&
              (r[o] = a
                .slice(0)
                .reduce((e, t) => e.concat([`${o}=${(0, n.escapeUri)(t)}`]), [])
                .sort()
                .join("&"));
        }
        return t
          .sort()
          .map((e) => r[e])
          .filter((e) => e)
          .join("&");
      };
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-local-agent-runtime/dist/66.js.map
