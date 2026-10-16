"use strict";
((exports.id = 21),
  (exports.ids = [21]),
  (exports.modules = {
    18021: (t, e, n) => {
      n.d(e, { UU: () => f });
      var r = n(36038);
      var o = n(42761),
        i = n(47777),
        a = n(53131),
        l = function (t) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var e,
            n = t[Symbol.asyncIterator];
          return n
            ? n.call(t)
            : ((t = "function" == typeof __values ? __values(t) : t[Symbol.iterator]()),
              (e = {}),
              r("next"),
              r("throw"),
              r("return"),
              (e[Symbol.asyncIterator] = function () {
                return this;
              }),
              e);
          function r(n) {
            e[n] =
              t[n] &&
              function (e) {
                return new Promise(function (r, o) {
                  (function (t, e, n, r) {
                    Promise.resolve(r).then(function (e) {
                      t({ value: e, done: n });
                    }, e);
                  })(r, o, (e = t[n](e)).done, e.value);
                });
              };
          }
        },
        u = function (t) {
          return this instanceof u ? ((this.v = t), this) : new u(t);
        },
        s = function (t) {
          var e, n;
          return (
            (e = {}),
            r("next"),
            r("throw", function (t) {
              throw t;
            }),
            r("return"),
            (e[Symbol.iterator] = function () {
              return this;
            }),
            e
          );
          function r(r, o) {
            e[r] = t[r]
              ? function (e) {
                  return (n = !n) ? { value: u(t[r](e)), done: !1 } : o ? o(e) : e;
                }
              : o;
          }
        },
        c = function (t, e, n) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var r,
            o = n.apply(t, e || []),
            i = [];
          return (
            (r = {}),
            a("next"),
            a("throw"),
            a("return", function (t) {
              return function (e) {
                return Promise.resolve(e).then(t, c);
              };
            }),
            (r[Symbol.asyncIterator] = function () {
              return this;
            }),
            r
          );
          function a(t, e) {
            o[t] &&
              ((r[t] = function (e) {
                return new Promise(function (n, r) {
                  i.push([t, e, n, r]) > 1 || l(t, e);
                });
              }),
              e && (r[t] = e(r[t])));
          }
          function l(t, e) {
            try {
              (n = o[t](e)).value instanceof u
                ? Promise.resolve(n.value.v).then(s, c)
                : f(i[0][2], n);
            } catch (t) {
              f(i[0][3], t);
            }
            var n;
          }
          function s(t) {
            l("next", t);
          }
          function c(t) {
            l("throw", t);
          }
          function f(t, e) {
            (t(e), i.shift(), i.length && l(i[0][0], i[0][1]));
          }
        };
      function f(t, e) {
        return (function (t, e) {
          const n = {};
          for (const [r, o] of Object.entries(t.methods)) {
            const i = e(Object.assign(Object.assign({}, o), { localName: r, service: t }));
            null != i && (n[r] = i);
          }
          return n;
        })(t, (n) => {
          switch (n.kind) {
            case r.MethodKind.Unary:
              return (function (t, e, n) {
                return async function (r, o) {
                  var i, a;
                  const l = await t.unary(
                    e,
                    n,
                    null == o ? void 0 : o.signal,
                    null == o ? void 0 : o.timeoutMs,
                    null == o ? void 0 : o.headers,
                    r,
                    null == o ? void 0 : o.contextValues,
                  );
                  return (
                    null === (i = null == o ? void 0 : o.onHeader) ||
                      void 0 === i ||
                      i.call(o, l.header),
                    null === (a = null == o ? void 0 : o.onTrailer) ||
                      void 0 === a ||
                      a.call(o, l.trailer),
                    l.message
                  );
                };
              })(e, t, n);
            case r.MethodKind.ServerStreaming:
              return (function (t, e, n) {
                return function (r, o) {
                  return d(
                    t.stream(
                      e,
                      n,
                      null == o ? void 0 : o.signal,
                      null == o ? void 0 : o.timeoutMs,
                      null == o ? void 0 : o.headers,
                      (0, a.T$)([r]),
                      null == o ? void 0 : o.contextValues,
                    ),
                    o,
                  );
                };
              })(e, t, n);
            case r.MethodKind.ClientStreaming:
              return (function (t, e, n) {
                return async function (r, a) {
                  var u, s, c, f, d, y;
                  const h = await t.stream(
                    e,
                    n,
                    null == a ? void 0 : a.signal,
                    null == a ? void 0 : a.timeoutMs,
                    null == a ? void 0 : a.headers,
                    r,
                    null == a ? void 0 : a.contextValues,
                  );
                  let v;
                  null === (d = null == a ? void 0 : a.onHeader) ||
                    void 0 === d ||
                    d.call(a, h.header);
                  let w = 0;
                  try {
                    for (
                      var m, g = !0, b = l(h.message);
                      !(u = (m = await b.next()).done);
                      g = !0
                    ) {
                      ((f = m.value), (g = !1));
                      ((v = f), w++);
                    }
                  } catch (t) {
                    s = { error: t };
                  } finally {
                    try {
                      g || u || !(c = b.return) || (await c.call(b));
                    } finally {
                      if (s) throw s.error;
                    }
                  }
                  if (!v)
                    throw new o.T("protocol error: missing response message", i.C.Unimplemented);
                  if (w > 1)
                    throw new o.T(
                      "protocol error: received extra messages for client streaming method",
                      i.C.Unimplemented,
                    );
                  return (
                    null === (y = null == a ? void 0 : a.onTrailer) ||
                      void 0 === y ||
                      y.call(a, h.trailer),
                    v
                  );
                };
              })(e, t, n);
            case r.MethodKind.BiDiStreaming:
              return (function (t, e, n) {
                return function (r, o) {
                  return d(
                    t.stream(
                      e,
                      n,
                      null == o ? void 0 : o.signal,
                      null == o ? void 0 : o.timeoutMs,
                      null == o ? void 0 : o.headers,
                      r,
                      null == o ? void 0 : o.contextValues,
                    ),
                    o,
                  );
                };
              })(e, t, n);
            default:
              return null;
          }
        });
      }
      function d(t, e) {
        const n = (function () {
          return c(this, arguments, function* () {
            var n, r;
            const o = yield u(t);
            (null === (n = null == e ? void 0 : e.onHeader) || void 0 === n || n.call(e, o.header),
              yield u(yield* s(l(o.message))),
              null === (r = null == e ? void 0 : e.onTrailer) ||
                void 0 === r ||
                r.call(e, o.trailer));
          });
        })()[Symbol.asyncIterator]();
        return { [Symbol.asyncIterator]: () => ({ next: () => n.next() }) };
      }
    },
    53009: (t, e, n) => {
      n.d(e, { NL: () => u, Tw: () => s, kk: () => c });
      var r = n(42761),
        o = n(47777);
      const i = 4294967295,
        a = i,
        l = 1024;
      function u(t, e, n) {
        if ((null != e || (e = a), null != t || (t = i), null != n || (n = l), e < 1 || e > a))
          throw new r.T(`writeMaxBytes ${e} must be >= 1 and <= ${a}`, o.C.Internal);
        if (t < 1 || t > i)
          throw new r.T(`readMaxBytes ${t} must be >= 1 and <= ${i}`, o.C.Internal);
        return { readMaxBytes: t, writeMaxBytes: e, compressMinBytes: n };
      }
      function s(t, e) {
        if (e > t)
          throw new r.T(
            `message size ${e} is larger than configured writeMaxBytes ${t}`,
            o.C.ResourceExhausted,
          );
      }
      function c(t, e, n = !1) {
        if (e > t) {
          let i = `message size is larger than configured readMaxBytes ${t}`;
          throw (
            n && (i = `message size ${e} is larger than configured readMaxBytes ${t}`),
            new r.T(i, o.C.ResourceExhausted)
          );
        }
      }
    },
    53131: (t, e, n) => {
      n.d(e, {
        T$: () => M,
        Fs: () => m,
        WK: () => w,
        fM: () => p,
        ew: () => x,
        yQ: () => S,
        uv: () => b,
        XO: () => g,
        pY: () => I,
      });
      var r = n(47777),
        o = n(42761);
      const i = 1;
      var a = n(53009);
      function l(t) {
        return new u(t);
      }
      class u {
        constructor(t) {
          ((this.readMaxBytes = t),
            (this.header = new Uint8Array(5)),
            (this.headerView = new DataView(this.header.buffer)),
            (this.buf = []));
        }
        get byteLength() {
          return this.buf.reduce((t, e) => t + e.byteLength, 0);
        }
        decode(t) {
          this.buf.push(t);
          const e = [];
          for (;;) {
            let t = this.pop();
            if (!t) break;
            e.push(t);
          }
          return e;
        }
        pop() {
          if ((this.env || ((this.env = this.head()), this.env)) && this.cons(this.env.data)) {
            const t = this.env;
            return ((this.env = void 0), t);
          }
        }
        head() {
          if (!this.cons(this.header)) return;
          const t = this.headerView.getUint8(0),
            e = this.headerView.getUint32(1);
          return ((0, a.kk)(this.readMaxBytes, e, !0), { flags: t, data: new Uint8Array(e) });
        }
        cons(t) {
          const e = t.byteLength;
          if (this.byteLength < e) return !1;
          let n = 0;
          for (; n < e;) {
            const r = this.buf.shift();
            r.byteLength > e - n
              ? (t.set(r.subarray(0, e - n), n), this.buf.unshift(r.subarray(e - n)), (n += e - n))
              : (t.set(r, n), (n += r.byteLength));
          }
          return !0;
        }
      }
      async function s(t, e, n) {
        let { flags: a, data: l } = t;
        if ((a & i) === i) throw new o.T("invalid envelope, already compressed", r.C.Internal);
        return (
          e && l.byteLength >= n && ((l = await e.compress(l)), (a |= i)), { data: l, flags: a }
        );
      }
      async function c(t, e, n) {
        let { flags: a, data: l } = t;
        if ((a & i) === i) {
          if (!e)
            throw new o.T(
              "received compressed envelope, but do not know how to decompress",
              r.C.Internal,
            );
          ((l = await e.decompress(l, n)), (a ^= i));
        }
        return { data: l, flags: a };
      }
      function f(t, e) {
        const n = new Uint8Array(e.length + 5);
        n.set(e, 5);
        const r = new DataView(n.buffer, n.byteOffset, n.byteLength);
        return (r.setUint8(0, t), r.setUint32(1, e.length), n);
      }
      var d = function (t) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var e,
            n = t[Symbol.asyncIterator];
          return n
            ? n.call(t)
            : ((t = "function" == typeof __values ? __values(t) : t[Symbol.iterator]()),
              (e = {}),
              r("next"),
              r("throw"),
              r("return"),
              (e[Symbol.asyncIterator] = function () {
                return this;
              }),
              e);
          function r(n) {
            e[n] =
              t[n] &&
              function (e) {
                return new Promise(function (r, o) {
                  (function (t, e, n, r) {
                    Promise.resolve(r).then(function (e) {
                      t({ value: e, done: n });
                    }, e);
                  })(r, o, (e = t[n](e)).done, e.value);
                });
              };
          }
        },
        y = function (t) {
          return this instanceof y ? ((this.v = t), this) : new y(t);
        },
        h = function (t, e, n) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var r,
            o = n.apply(t, e || []),
            i = [];
          return (
            (r = {}),
            a("next"),
            a("throw"),
            a("return", function (t) {
              return function (e) {
                return Promise.resolve(e).then(t, s);
              };
            }),
            (r[Symbol.asyncIterator] = function () {
              return this;
            }),
            r
          );
          function a(t, e) {
            o[t] &&
              ((r[t] = function (e) {
                return new Promise(function (n, r) {
                  i.push([t, e, n, r]) > 1 || l(t, e);
                });
              }),
              e && (r[t] = e(r[t])));
          }
          function l(t, e) {
            try {
              (n = o[t](e)).value instanceof y
                ? Promise.resolve(n.value.v).then(u, s)
                : c(i[0][2], n);
            } catch (t) {
              c(i[0][3], t);
            }
            var n;
          }
          function u(t) {
            l("next", t);
          }
          function s(t) {
            l("throw", t);
          }
          function c(t, e) {
            (t(e), i.shift(), i.length && l(i[0][0], i[0][1]));
          }
        },
        v = function (t) {
          var e, n;
          return (
            (e = {}),
            r("next"),
            r("throw", function (t) {
              throw t;
            }),
            r("return"),
            (e[Symbol.iterator] = function () {
              return this;
            }),
            e
          );
          function r(r, o) {
            e[r] = t[r]
              ? function (e) {
                  return (n = !n) ? { value: y(t[r](e)), done: !1 } : o ? o(e) : e;
                }
              : o;
          }
        };
      function w(t, ...e) {
        const [n, r, o] = (function (t) {
          let e;
          "function" != typeof t[t.length - 1] && (e = t.pop());
          const n = t.pop();
          return [t, n, e];
        })(e);
        let i,
          a = t;
        return (
          !0 === (null == o ? void 0 : o.propagateDownStreamError) && (a = i = T(a)),
          (a = m(a, ...n, { propagateDownStreamError: !1 })),
          r(a).catch((t) => (i ? i.abort(t).then(() => Promise.reject(t)) : Promise.reject(t)))
        );
      }
      function m(t, ...e) {
        return h(this, arguments, function* () {
          var n;
          const [r, o] = (function (t) {
            let e;
            "function" != typeof t[t.length - 1] && (e = t.pop());
            return [t, e];
          })(e);
          let i;
          const a = t[Symbol.asyncIterator]();
          let l = { [Symbol.asyncIterator]: () => a };
          !0 === (null == o ? void 0 : o.propagateDownStreamError) && (l = i = T(l));
          for (const t of r) l = t(l);
          const u = l[Symbol.asyncIterator]();
          try {
            for (;;) {
              const t = yield y(u.next());
              if (!0 === t.done) break;
              if (i)
                try {
                  yield yield y(t.value);
                } catch (t) {
                  throw (yield y(i.abort(t)), t);
                }
              else yield yield y(t.value);
            }
          } finally {
            !0 === (null == o ? void 0 : o.propagateDownStreamError) &&
              (null === (n = a.return) || void 0 === n || n.call(a).catch(() => {}));
          }
        });
      }
      function g(t, e, n) {
        return void 0 === e || void 0 === n
          ? function (e) {
              return h(this, arguments, function* () {
                var n, r, o, i;
                try {
                  for (var a, l = !0, u = d(e); !(n = (a = yield y(u.next())).done); l = !0) {
                    ((i = a.value), (l = !1));
                    const e = i,
                      n = t.serialize(e);
                    yield yield y({ flags: 0, data: n });
                  }
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    l || n || !(o = u.return) || (yield y(o.call(u)));
                  } finally {
                    if (r) throw r.error;
                  }
                }
              });
            }
          : function (r) {
              return h(this, arguments, function* () {
                var o, i, a, l;
                try {
                  for (var u, s = !0, c = d(r); !(o = (u = yield y(c.next())).done); s = !0) {
                    ((l = u.value), (s = !1));
                    const r = l;
                    let o,
                      i = 0;
                    (r.end ? ((i |= e), (o = n.serialize(r.value))) : (o = t.serialize(r.value)),
                      yield yield y({ flags: i, data: o }));
                  }
                } catch (t) {
                  i = { error: t };
                } finally {
                  try {
                    s || o || !(a = c.return) || (yield y(a.call(c)));
                  } finally {
                    if (i) throw i.error;
                  }
                }
              });
            };
      }
      function b(t, e, n) {
        return n && void 0 !== e
          ? function (r) {
              return h(this, arguments, function* () {
                var o, i, a, l;
                try {
                  for (var u, s = !0, c = d(r); !(o = (u = yield y(c.next())).done); s = !0) {
                    ((l = u.value), (s = !1));
                    const { flags: r, data: o } = l;
                    (r & e) === e
                      ? yield yield y({ value: n.parse(o), end: !0 })
                      : yield yield y({ value: t.parse(o), end: !1 });
                  }
                } catch (t) {
                  i = { error: t };
                } finally {
                  try {
                    s || o || !(a = c.return) || (yield y(a.call(c)));
                  } finally {
                    if (i) throw i.error;
                  }
                }
              });
            }
          : function (i) {
              return h(this, arguments, function* () {
                var a, l, u, s;
                try {
                  for (var c, f = !0, h = d(i); !(a = (c = yield y(h.next())).done); f = !0) {
                    ((s = c.value), (f = !1));
                    const { flags: i, data: a } = s;
                    if (void 0 === e || (i & e) !== e) yield yield y(t.parse(a));
                    else if (null === n) throw new o.T("unexpected end flag", r.C.InvalidArgument);
                  }
                } catch (t) {
                  l = { error: t };
                } finally {
                  try {
                    f || a || !(u = h.return) || (yield y(u.call(h)));
                  } finally {
                    if (l) throw l.error;
                  }
                }
              });
            };
      }
      function p(t, e) {
        return function (n) {
          return h(this, arguments, function* () {
            var r, o, i, a;
            try {
              for (var l, u = !0, c = d(n); !(r = (l = yield y(c.next())).done); u = !0) {
                ((a = l.value), (u = !1));
                const n = a;
                yield yield y(yield y(s(n, t, e)));
              }
            } catch (t) {
              o = { error: t };
            } finally {
              try {
                u || r || !(i = c.return) || (yield y(i.call(c)));
              } finally {
                if (o) throw o.error;
              }
            }
          });
        };
      }
      function x(t, e) {
        return function (n) {
          return h(this, arguments, function* () {
            var r, o, i, a;
            try {
              for (var l, u = !0, s = d(n); !(r = (l = yield y(s.next())).done); u = !0) {
                ((a = l.value), (u = !1));
                const n = a;
                yield yield y(yield y(c(n, t, e)));
              }
            } catch (t) {
              o = { error: t };
            } finally {
              try {
                u || r || !(i = s.return) || (yield y(i.call(s)));
              } finally {
                if (o) throw o.error;
              }
            }
          });
        };
      }
      function S() {
        return function (t) {
          return h(this, arguments, function* () {
            var e, n, r, o;
            try {
              for (var i, a = !0, l = d(t); !(e = (i = yield y(l.next())).done); a = !0) {
                ((o = i.value), (a = !1));
                const { flags: t, data: e } = o;
                yield yield y(f(t, e));
              }
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                a || e || !(r = l.return) || (yield y(r.call(l)));
              } finally {
                if (n) throw n.error;
              }
            }
          });
        };
      }
      function I(t) {
        return function (e) {
          return h(this, arguments, function* () {
            var n, i, a, u;
            const s = l(t);
            try {
              for (var c, f = !0, h = d(e); !(n = (c = yield y(h.next())).done); f = !0) {
                ((u = c.value), (f = !1));
                const t = u;
                for (const e of s.decode(t)) yield yield y(e);
              }
            } catch (t) {
              i = { error: t };
            } finally {
              try {
                f || n || !(a = h.return) || (yield y(a.call(h)));
              } finally {
                if (i) throw i.error;
              }
            }
            if (s.byteLength > 0)
              throw new o.T("protocol error: incomplete envelope", r.C.InvalidArgument);
          });
        };
      }
      function T(t) {
        const e = t[Symbol.asyncIterator]();
        if (void 0 === e.throw) throw new Error("AsyncIterable does not implement throw");
        const n = e;
        let r,
          o,
          i = {
            next: () => (
              (o = n.next().finally(() => {
                o = void 0;
              })),
              o
            ),
            throw: (t) => n.throw(t),
          };
        void 0 !== e.return &&
          (i = Object.assign(Object.assign({}, i), { return: (t) => n.return(t) }));
        let a = !1;
        return {
          abort(t) {
            if (r) return r.state;
            const e = () =>
              n.throw(t).then(
                (t) => (!0 === t.done ? "completed" : "caught"),
                () => "rethrown",
              );
            return o
              ? ((r = { reason: t, state: o.then(e, e) }), r.state)
              : ((r = { reason: t, state: e() }), r.state);
          },
          [Symbol.asyncIterator]() {
            if (a) throw new Error("AsyncIterable cannot be re-used");
            return ((a = !0), i);
          },
        };
      }
      function M(t) {
        return h(this, arguments, function* () {
          yield y(yield* v(d(t)));
        });
      }
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-host/dist/21.js.map
