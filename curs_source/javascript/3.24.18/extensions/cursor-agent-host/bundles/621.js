"use strict";
((exports.id = 621),
  (exports.ids = [621]),
  (exports.modules = {
    3041: (t, e, i) => {
      let r = i(94393);
      t.exports = function (t, e, i, n) {
        let s = -1 !== [r.COLORTYPE_COLOR_ALPHA, r.COLORTYPE_ALPHA].indexOf(n.colorType);
        if (n.colorType === n.inputColorType) {
          let e = (function () {
            let t = new ArrayBuffer(2);
            return (new DataView(t).setInt16(0, 256, !0), 256 !== new Int16Array(t)[0]);
          })();
          if (8 === n.bitDepth || (16 === n.bitDepth && e)) return t;
        }
        let h = 16 !== n.bitDepth ? t : new Uint16Array(t.buffer),
          o = 255,
          a = r.COLORTYPE_TO_BPP_MAP[n.inputColorType];
        4 !== a || n.inputHasAlpha || (a = 3);
        let l = r.COLORTYPE_TO_BPP_MAP[n.colorType];
        16 === n.bitDepth && ((o = 65535), (l *= 2));
        let f = Buffer.alloc(e * i * l),
          p = 0,
          d = 0,
          u = n.bgColor || {};
        function c() {
          let t,
            e,
            i,
            a = o;
          switch (n.inputColorType) {
            case r.COLORTYPE_COLOR_ALPHA:
              ((a = h[p + 3]), (t = h[p]), (e = h[p + 1]), (i = h[p + 2]));
              break;
            case r.COLORTYPE_COLOR:
              ((t = h[p]), (e = h[p + 1]), (i = h[p + 2]));
              break;
            case r.COLORTYPE_ALPHA:
              ((a = h[p + 1]), (t = h[p]), (e = t), (i = t));
              break;
            case r.COLORTYPE_GRAYSCALE:
              ((t = h[p]), (e = t), (i = t));
              break;
            default:
              throw new Error(
                "input color type:" + n.inputColorType + " is not supported at present",
              );
          }
          return (
            n.inputHasAlpha &&
              (s ||
                ((a /= o),
                (t = Math.min(Math.max(Math.round((1 - a) * u.red + a * t), 0), o)),
                (e = Math.min(Math.max(Math.round((1 - a) * u.green + a * e), 0), o)),
                (i = Math.min(Math.max(Math.round((1 - a) * u.blue + a * i), 0), o)))),
            { red: t, green: e, blue: i, alpha: a }
          );
        }
        (void 0 === u.red && (u.red = o),
          void 0 === u.green && (u.green = o),
          void 0 === u.blue && (u.blue = o));
        for (let t = 0; t < i; t++)
          for (let t = 0; t < e; t++) {
            let t = c();
            switch (n.colorType) {
              case r.COLORTYPE_COLOR_ALPHA:
              case r.COLORTYPE_COLOR:
                8 === n.bitDepth
                  ? ((f[d] = t.red),
                    (f[d + 1] = t.green),
                    (f[d + 2] = t.blue),
                    s && (f[d + 3] = t.alpha))
                  : (f.writeUInt16BE(t.red, d),
                    f.writeUInt16BE(t.green, d + 2),
                    f.writeUInt16BE(t.blue, d + 4),
                    s && f.writeUInt16BE(t.alpha, d + 6));
                break;
              case r.COLORTYPE_ALPHA:
              case r.COLORTYPE_GRAYSCALE: {
                let e = (t.red + t.green + t.blue) / 3;
                8 === n.bitDepth
                  ? ((f[d] = e), s && (f[d + 1] = t.alpha))
                  : (f.writeUInt16BE(e, d), s && f.writeUInt16BE(t.alpha, d + 2));
                break;
              }
              default:
                throw new Error("unrecognised color Type " + n.colorType);
            }
            ((p += a), (d += l));
          }
        return f;
      };
    },
    5788: (t, e, i) => {
      let r = i(74561),
        n = i(44050);
      ((e.read = function (t, e) {
        return r(t, e || {});
      }),
        (e.write = function (t, e) {
          return n(t, e);
        }));
    },
    6446: (t, e, i) => {
      let r = i(68401),
        n = i(12707);
      function s(t, e, i) {
        let r = t * e;
        return (8 !== i && (r = Math.ceil(r / (8 / i))), r);
      }
      let h = (t.exports = function (t, e) {
        let i = t.width,
          n = t.height,
          h = t.interlace,
          o = t.bpp,
          a = t.depth;
        if (
          ((this.read = e.read),
          (this.write = e.write),
          (this.complete = e.complete),
          (this._imageIndex = 0),
          (this._images = []),
          h)
        ) {
          let t = r.getImagePasses(i, n);
          for (let e = 0; e < t.length; e++)
            this._images.push({
              byteWidth: s(t[e].width, o, a),
              height: t[e].height,
              lineIndex: 0,
            });
        } else this._images.push({ byteWidth: s(i, o, a), height: n, lineIndex: 0 });
        this._xComparison = 8 === a ? o : 16 === a ? 2 * o : 1;
      });
      ((h.prototype.start = function () {
        this.read(this._images[this._imageIndex].byteWidth + 1, this._reverseFilterLine.bind(this));
      }),
        (h.prototype._unFilterType1 = function (t, e, i) {
          let r = this._xComparison,
            n = r - 1;
          for (let s = 0; s < i; s++) {
            let i = t[1 + s],
              h = s > n ? e[s - r] : 0;
            e[s] = i + h;
          }
        }),
        (h.prototype._unFilterType2 = function (t, e, i) {
          let r = this._lastLine;
          for (let n = 0; n < i; n++) {
            let i = t[1 + n],
              s = r ? r[n] : 0;
            e[n] = i + s;
          }
        }),
        (h.prototype._unFilterType3 = function (t, e, i) {
          let r = this._xComparison,
            n = r - 1,
            s = this._lastLine;
          for (let h = 0; h < i; h++) {
            let i = t[1 + h],
              o = s ? s[h] : 0,
              a = h > n ? e[h - r] : 0,
              l = Math.floor((a + o) / 2);
            e[h] = i + l;
          }
        }),
        (h.prototype._unFilterType4 = function (t, e, i) {
          let r = this._xComparison,
            s = r - 1,
            h = this._lastLine;
          for (let o = 0; o < i; o++) {
            let i = t[1 + o],
              a = h ? h[o] : 0,
              l = o > s ? e[o - r] : 0,
              f = o > s && h ? h[o - r] : 0,
              p = n(l, a, f);
            e[o] = i + p;
          }
        }),
        (h.prototype._reverseFilterLine = function (t) {
          let e,
            i = t[0],
            r = this._images[this._imageIndex],
            n = r.byteWidth;
          if (0 === i) e = t.slice(1, n + 1);
          else
            switch (((e = Buffer.alloc(n)), i)) {
              case 1:
                this._unFilterType1(t, e, n);
                break;
              case 2:
                this._unFilterType2(t, e, n);
                break;
              case 3:
                this._unFilterType3(t, e, n);
                break;
              case 4:
                this._unFilterType4(t, e, n);
                break;
              default:
                throw new Error("Unrecognised filter type - " + i);
            }
          (this.write(e),
            r.lineIndex++,
            r.lineIndex >= r.height
              ? ((this._lastLine = null), this._imageIndex++, (r = this._images[this._imageIndex]))
              : (this._lastLine = e),
            r
              ? this.read(r.byteWidth + 1, this._reverseFilterLine.bind(this))
              : ((this._lastLine = null), this.complete()));
        }));
    },
    7263: (t, e, i) => {
      let r = i(42613).ok,
        n = i(43106),
        s = i(39023),
        h = i(20181).kMaxLength;
      function o(t) {
        if (!(this instanceof o)) return new o(t);
        (t && t.chunkSize < n.Z_MIN_CHUNK && (t.chunkSize = n.Z_MIN_CHUNK),
          n.Inflate.call(this, t),
          (this._offset = void 0 === this._offset ? this._outOffset : this._offset),
          (this._buffer = this._buffer || this._outBuffer),
          t && null != t.maxLength && (this._maxLength = t.maxLength));
      }
      function a(t, e) {
        (e && process.nextTick(e), t._handle && (t._handle.close(), (t._handle = null)));
      }
      function l(t, e) {
        return (function (t, e) {
          if (("string" == typeof e && (e = Buffer.from(e)), !(e instanceof Buffer)))
            throw new TypeError("Not a string or buffer");
          let i = t._finishFlushFlag;
          return (null == i && (i = n.Z_FINISH), t._processChunk(e, i));
        })(new o(e), t);
      }
      ((o.prototype._processChunk = function (t, e, i) {
        if ("function" == typeof i) return n.Inflate._processChunk.call(this, t, e, i);
        let s,
          o,
          l = this,
          f = t && t.length,
          p = this._chunkSize - this._offset,
          d = this._maxLength,
          u = 0,
          c = [],
          _ = 0;
        function g(t, e) {
          if (l._hadError) return;
          let i = p - e;
          if ((r(i >= 0, "have should not go down"), i > 0)) {
            let t = l._buffer.slice(l._offset, l._offset + i);
            if (
              ((l._offset += i),
              t.length > d && (t = t.slice(0, d)),
              c.push(t),
              (_ += t.length),
              (d -= t.length),
              0 === d)
            )
              return !1;
          }
          return (
            (0 === e || l._offset >= l._chunkSize) &&
              ((p = l._chunkSize), (l._offset = 0), (l._buffer = Buffer.allocUnsafe(l._chunkSize))),
            0 === e && ((u += f - t), (f = t), !0)
          );
        }
        (this.on("error", function (t) {
          s = t;
        }),
          r(this._handle, "zlib binding closed"));
        do {
          ((o = this._handle.writeSync(e, t, u, f, this._buffer, this._offset, p)),
            (o = o || this._writeState));
        } while (!this._hadError && g(o[0], o[1]));
        if (this._hadError) throw s;
        if (_ >= h)
          throw (
            a(this),
            new RangeError(
              "Cannot create final Buffer. It would be larger than 0x" + h.toString(16) + " bytes",
            )
          );
        let b = Buffer.concat(c, _);
        return (a(this), b);
      }),
        s.inherits(o, n.Inflate),
        (t.exports = e = l),
        (e.Inflate = o),
        (e.createInflate = function (t) {
          return new o(t);
        }),
        (e.inflateSync = l));
    },
    12707: (t) => {
      t.exports = function (t, e, i) {
        let r = t + e - i,
          n = Math.abs(r - t),
          s = Math.abs(r - e),
          h = Math.abs(r - i);
        return n <= s && n <= h ? t : s <= h ? e : i;
      };
    },
    18409: (t, e, i) => {
      let r = i(39023),
        n = i(2203),
        s = i(94393),
        h = i(77976),
        o = (t.exports = function (t) {
          n.call(this);
          let e = t || {};
          ((this._packer = new h(e)),
            (this._deflate = this._packer.createDeflate()),
            (this.readable = !0));
        });
      (r.inherits(o, n),
        (o.prototype.pack = function (t, e, i, r) {
          (this.emit("data", Buffer.from(s.PNG_SIGNATURE)),
            this.emit("data", this._packer.packIHDR(e, i)),
            r && this.emit("data", this._packer.packGAMA(r)));
          let n = this._packer.filterData(t, e, i);
          (this._deflate.on("error", this.emit.bind(this, "error")),
            this._deflate.on(
              "data",
              function (t) {
                this.emit("data", this._packer.packIDAT(t));
              }.bind(this),
            ),
            this._deflate.on(
              "end",
              function () {
                (this.emit("data", this._packer.packIEND()), this.emit("end"));
              }.bind(this),
            ),
            this._deflate.end(n));
        }));
    },
    27749: (t) => {
      let e = (t.exports = function (t) {
        ((this._buffer = t), (this._reads = []));
      });
      ((e.prototype.read = function (t, e) {
        this._reads.push({ length: Math.abs(t), allowLess: t < 0, func: e });
      }),
        (e.prototype.process = function () {
          for (; this._reads.length > 0 && this._buffer.length;) {
            let t = this._reads[0];
            if (!this._buffer.length || !(this._buffer.length >= t.length || t.allowLess)) break;
            {
              this._reads.shift();
              let e = this._buffer;
              ((this._buffer = e.slice(t.length)), t.func.call(this, e.slice(0, t.length)));
            }
          }
          if (this._reads.length > 0)
            throw new Error("There are some read requests waitng on finished stream");
          if (this._buffer.length > 0) throw new Error("unrecognised content at end of stream");
        }));
    },
    29626: (t, e, i) => {
      let r = i(68401),
        n = [
          function () {},
          function (t, e, i, r) {
            if (r === e.length) throw new Error("Ran out of data");
            let n = e[r];
            ((t[i] = n), (t[i + 1] = n), (t[i + 2] = n), (t[i + 3] = 255));
          },
          function (t, e, i, r) {
            if (r + 1 >= e.length) throw new Error("Ran out of data");
            let n = e[r];
            ((t[i] = n), (t[i + 1] = n), (t[i + 2] = n), (t[i + 3] = e[r + 1]));
          },
          function (t, e, i, r) {
            if (r + 2 >= e.length) throw new Error("Ran out of data");
            ((t[i] = e[r]), (t[i + 1] = e[r + 1]), (t[i + 2] = e[r + 2]), (t[i + 3] = 255));
          },
          function (t, e, i, r) {
            if (r + 3 >= e.length) throw new Error("Ran out of data");
            ((t[i] = e[r]), (t[i + 1] = e[r + 1]), (t[i + 2] = e[r + 2]), (t[i + 3] = e[r + 3]));
          },
        ],
        s = [
          function () {},
          function (t, e, i, r) {
            let n = e[0];
            ((t[i] = n), (t[i + 1] = n), (t[i + 2] = n), (t[i + 3] = r));
          },
          function (t, e, i) {
            let r = e[0];
            ((t[i] = r), (t[i + 1] = r), (t[i + 2] = r), (t[i + 3] = e[1]));
          },
          function (t, e, i, r) {
            ((t[i] = e[0]), (t[i + 1] = e[1]), (t[i + 2] = e[2]), (t[i + 3] = r));
          },
          function (t, e, i) {
            ((t[i] = e[0]), (t[i + 1] = e[1]), (t[i + 2] = e[2]), (t[i + 3] = e[3]));
          },
        ];
      function h(t, e, i, r, s, h) {
        let o = t.width,
          a = t.height,
          l = t.index;
        for (let t = 0; t < a; t++)
          for (let a = 0; a < o; a++) {
            let o = i(a, t, l);
            (n[r](e, s, o, h), (h += r));
          }
        return h;
      }
      function o(t, e, i, r, n, h) {
        let o = t.width,
          a = t.height,
          l = t.index;
        for (let t = 0; t < a; t++) {
          for (let a = 0; a < o; a++) {
            let o = n.get(r),
              f = i(a, t, l);
            s[r](e, o, f, h);
          }
          n.resetAfterLine();
        }
      }
      e.dataToBitMap = function (t, e) {
        let i,
          n,
          s = e.width,
          a = e.height,
          l = e.depth,
          f = e.bpp,
          p = e.interlace;
        (8 !== l &&
          (i = (function (t, e) {
            let i = [],
              r = 0;
            function n() {
              if (r === t.length) throw new Error("Ran out of data");
              let n,
                s,
                h,
                o,
                a,
                l,
                f,
                p,
                d = t[r];
              switch ((r++, e)) {
                default:
                  throw new Error("unrecognised depth");
                case 16:
                  ((f = t[r]), r++, i.push((d << 8) + f));
                  break;
                case 4:
                  ((f = 15 & d), (p = d >> 4), i.push(p, f));
                  break;
                case 2:
                  ((a = 3 & d),
                    (l = (d >> 2) & 3),
                    (f = (d >> 4) & 3),
                    (p = (d >> 6) & 3),
                    i.push(p, f, l, a));
                  break;
                case 1:
                  ((n = 1 & d),
                    (s = (d >> 1) & 1),
                    (h = (d >> 2) & 1),
                    (o = (d >> 3) & 1),
                    (a = (d >> 4) & 1),
                    (l = (d >> 5) & 1),
                    (f = (d >> 6) & 1),
                    (p = (d >> 7) & 1),
                    i.push(p, f, l, a, o, h, s, n));
              }
            }
            return {
              get: function (t) {
                for (; i.length < t;) n();
                let e = i.slice(0, t);
                return ((i = i.slice(t)), e);
              },
              resetAfterLine: function () {
                i.length = 0;
              },
              end: function () {
                if (r !== t.length) throw new Error("extra data found");
              },
            };
          })(t, l)),
          (n = l <= 8 ? Buffer.alloc(s * a * 4) : new Uint16Array(s * a * 4)));
        let d,
          u,
          c = Math.pow(2, l) - 1,
          _ = 0;
        if (p) ((d = r.getImagePasses(s, a)), (u = r.getInterlaceIterator(s, a)));
        else {
          let t = 0;
          ((u = function () {
            let e = t;
            return ((t += 4), e);
          }),
            (d = [{ width: s, height: a }]));
        }
        for (let e = 0; e < d.length; e++)
          8 === l ? (_ = h(d[e], n, u, f, t, _)) : o(d[e], n, u, f, i, c);
        if (8 === l) {
          if (_ !== t.length) throw new Error("extra data found");
        } else i.end();
        return n;
      };
    },
    30795: (t, e, i) => {
      let r = i(39023),
        n = i(79233),
        s = i(6446),
        h = (t.exports = function (t) {
          n.call(this);
          let e = [],
            i = this;
          ((this._filter = new s(t, {
            read: this.read.bind(this),
            write: function (t) {
              e.push(t);
            },
            complete: function () {
              i.emit("complete", Buffer.concat(e));
            },
          })),
            this._filter.start());
        });
      r.inherits(h, n);
    },
    37621: (t, e, i) => {
      (i.r(e), i.d(e, { PNGColorType: () => n, PNGFilterType: () => r, default: () => h }));
      var r,
        n,
        s = i(57559);
      function h() {
        return {
          mime: "image/png",
          hasAlpha: !0,
          encode: (
            t,
            {
              deflateLevel: e = 9,
              deflateStrategy: i = 3,
              filterType: h = r.AUTO,
              colorType: o,
              inputHasAlpha: a = !0,
              ...l
            } = {},
          ) => {
            const f = new s.O({ width: t.width, height: t.height });
            return (
              (f.data = t.data),
              s.O.sync.write(f, {
                ...l,
                deflateLevel: e,
                deflateStrategy: i,
                filterType: h,
                colorType: void 0 !== o ? o : a ? n.COLOR_ALPHA : n.COLOR,
                inputHasAlpha: a,
              })
            );
          },
          decode: (t, e) => {
            const i = s.O.sync.read(t, e);
            return { data: i.data, width: i.width, height: i.height };
          },
        };
      }
      (!(function (t) {
        ((t[(t.AUTO = -1)] = "AUTO"),
          (t[(t.NONE = 0)] = "NONE"),
          (t[(t.SUB = 1)] = "SUB"),
          (t[(t.UP = 2)] = "UP"),
          (t[(t.AVERAGE = 3)] = "AVERAGE"),
          (t[(t.PATH = 4)] = "PATH"));
      })(r || (r = {})),
        (function (t) {
          ((t[(t.GRAYSCALE = 0)] = "GRAYSCALE"),
            (t[(t.COLOR = 2)] = "COLOR"),
            (t[(t.GRAYSCALE_ALPHA = 4)] = "GRAYSCALE_ALPHA"),
            (t[(t.COLOR_ALPHA = 6)] = "COLOR_ALPHA"));
        })(n || (n = {})));
    },
    44050: (t, e, i) => {
      let r = !0,
        n = i(43106);
      n.deflateSync || (r = !1);
      let s = i(94393),
        h = i(77976);
      t.exports = function (t, e) {
        if (!r)
          throw new Error(
            "To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0",
          );
        let i = new h(e || {}),
          o = [];
        (o.push(Buffer.from(s.PNG_SIGNATURE)),
          o.push(i.packIHDR(t.width, t.height)),
          t.gamma && o.push(i.packGAMA(t.gamma)));
        let a = i.filterData(t.data, t.width, t.height),
          l = n.deflateSync(a, i.getDeflateOptions());
        if (((a = null), !l || !l.length))
          throw new Error("bad png - invalid compressed data response");
        return (o.push(i.packIDAT(l)), o.push(i.packIEND()), Buffer.concat(o));
      };
    },
    57559: (t, e, i) => {
      let r = i(39023),
        n = i(2203),
        s = i(89568),
        h = i(18409),
        o = i(5788),
        a = (e.O = function (t) {
          (n.call(this),
            (t = t || {}),
            (this.width = 0 | t.width),
            (this.height = 0 | t.height),
            (this.data =
              this.width > 0 && this.height > 0
                ? Buffer.alloc(4 * this.width * this.height)
                : null),
            t.fill && this.data && this.data.fill(0),
            (this.gamma = 0),
            (this.readable = this.writable = !0),
            (this._parser = new s(t)),
            this._parser.on("error", this.emit.bind(this, "error")),
            this._parser.on("close", this._handleClose.bind(this)),
            this._parser.on("metadata", this._metadata.bind(this)),
            this._parser.on("gamma", this._gamma.bind(this)),
            this._parser.on(
              "parsed",
              function (t) {
                ((this.data = t), this.emit("parsed", t));
              }.bind(this),
            ),
            (this._packer = new h(t)),
            this._packer.on("data", this.emit.bind(this, "data")),
            this._packer.on("end", this.emit.bind(this, "end")),
            this._parser.on("close", this._handleClose.bind(this)),
            this._packer.on("error", this.emit.bind(this, "error")));
        });
      (r.inherits(a, n),
        (a.sync = o),
        (a.prototype.pack = function () {
          return this.data && this.data.length
            ? (process.nextTick(
                function () {
                  this._packer.pack(this.data, this.width, this.height, this.gamma);
                }.bind(this),
              ),
              this)
            : (this.emit("error", "No data provided"), this);
        }),
        (a.prototype.parse = function (t, e) {
          if (e) {
            let t, i;
            ((t = function (t) {
              (this.removeListener("error", i), (this.data = t), e(null, this));
            }.bind(this)),
              (i = function (i) {
                (this.removeListener("parsed", t), e(i, null));
              }.bind(this)),
              this.once("parsed", t),
              this.once("error", i));
          }
          return (this.end(t), this);
        }),
        (a.prototype.write = function (t) {
          return (this._parser.write(t), !0);
        }),
        (a.prototype.end = function (t) {
          this._parser.end(t);
        }),
        (a.prototype._metadata = function (t) {
          ((this.width = t.width), (this.height = t.height), this.emit("metadata", t));
        }),
        (a.prototype._gamma = function (t) {
          this.gamma = t;
        }),
        (a.prototype._handleClose = function () {
          this._parser.writable || this._packer.readable || this.emit("close");
        }),
        (a.bitblt = function (t, e, i, r, n, s, h, o) {
          if (
            ((r |= 0),
            (n |= 0),
            (s |= 0),
            (h |= 0),
            (o |= 0),
            (i |= 0) > t.width || r > t.height || i + n > t.width || r + s > t.height)
          )
            throw new Error("bitblt reading outside image");
          if (h > e.width || o > e.height || h + n > e.width || o + s > e.height)
            throw new Error("bitblt writing outside image");
          for (let a = 0; a < s; a++)
            t.data.copy(
              e.data,
              ((o + a) * e.width + h) << 2,
              ((r + a) * t.width + i) << 2,
              ((r + a) * t.width + i + n) << 2,
            );
        }),
        (a.prototype.bitblt = function (t, e, i, r, n, s, h) {
          return (a.bitblt(this, t, e, i, r, n, s, h), this);
        }),
        (a.adjustGamma = function (t) {
          if (t.gamma) {
            for (let e = 0; e < t.height; e++)
              for (let i = 0; i < t.width; i++) {
                let r = (t.width * e + i) << 2;
                for (let e = 0; e < 3; e++) {
                  let i = t.data[r + e] / 255;
                  ((i = Math.pow(i, 1 / 2.2 / t.gamma)), (t.data[r + e] = Math.round(255 * i)));
                }
              }
            t.gamma = 0;
          }
        }),
        (a.prototype.adjustGamma = function () {
          a.adjustGamma(this);
        }));
    },
    58102: (t) => {
      let e = [];
      !(function () {
        for (let t = 0; t < 256; t++) {
          let i = t;
          for (let t = 0; t < 8; t++) 1 & i ? (i = 3988292384 ^ (i >>> 1)) : (i >>>= 1);
          e[t] = i;
        }
      })();
      let i = (t.exports = function () {
        this._crc = -1;
      });
      ((i.prototype.write = function (t) {
        for (let i = 0; i < t.length; i++)
          this._crc = e[255 & (this._crc ^ t[i])] ^ (this._crc >>> 8);
        return !0;
      }),
        (i.prototype.crc32 = function () {
          return -1 ^ this._crc;
        }),
        (i.crc32 = function (t) {
          let i = -1;
          for (let r = 0; r < t.length; r++) i = e[255 & (i ^ t[r])] ^ (i >>> 8);
          return -1 ^ i;
        }));
    },
    61041: (t, e, i) => {
      let r = i(94393),
        n = i(58102),
        s = (t.exports = function (t, e) {
          ((this._options = t),
            (t.checkCRC = !1 !== t.checkCRC),
            (this._hasIHDR = !1),
            (this._hasIEND = !1),
            (this._emittedHeadersFinished = !1),
            (this._palette = []),
            (this._colorType = 0),
            (this._chunks = {}),
            (this._chunks[r.TYPE_IHDR] = this._handleIHDR.bind(this)),
            (this._chunks[r.TYPE_IEND] = this._handleIEND.bind(this)),
            (this._chunks[r.TYPE_IDAT] = this._handleIDAT.bind(this)),
            (this._chunks[r.TYPE_PLTE] = this._handlePLTE.bind(this)),
            (this._chunks[r.TYPE_tRNS] = this._handleTRNS.bind(this)),
            (this._chunks[r.TYPE_gAMA] = this._handleGAMA.bind(this)),
            (this.read = e.read),
            (this.error = e.error),
            (this.metadata = e.metadata),
            (this.gamma = e.gamma),
            (this.transColor = e.transColor),
            (this.palette = e.palette),
            (this.parsed = e.parsed),
            (this.inflateData = e.inflateData),
            (this.finished = e.finished),
            (this.simpleTransparency = e.simpleTransparency),
            (this.headersFinished = e.headersFinished || function () {}));
        });
      ((s.prototype.start = function () {
        this.read(r.PNG_SIGNATURE.length, this._parseSignature.bind(this));
      }),
        (s.prototype._parseSignature = function (t) {
          let e = r.PNG_SIGNATURE;
          for (let i = 0; i < e.length; i++)
            if (t[i] !== e[i]) return void this.error(new Error("Invalid file signature"));
          this.read(8, this._parseChunkBegin.bind(this));
        }),
        (s.prototype._parseChunkBegin = function (t) {
          let e = t.readUInt32BE(0),
            i = t.readUInt32BE(4),
            s = "";
          for (let e = 4; e < 8; e++) s += String.fromCharCode(t[e]);
          let h = Boolean(32 & t[4]);
          if (this._hasIHDR || i === r.TYPE_IHDR) {
            if (((this._crc = new n()), this._crc.write(Buffer.from(s)), this._chunks[i]))
              return this._chunks[i](e);
            h
              ? this.read(e + 4, this._skipChunk.bind(this))
              : this.error(new Error("Unsupported critical chunk type " + s));
          } else this.error(new Error("Expected IHDR on beggining"));
        }),
        (s.prototype._skipChunk = function () {
          this.read(8, this._parseChunkBegin.bind(this));
        }),
        (s.prototype._handleChunkEnd = function () {
          this.read(4, this._parseChunkEnd.bind(this));
        }),
        (s.prototype._parseChunkEnd = function (t) {
          let e = t.readInt32BE(0),
            i = this._crc.crc32();
          this._options.checkCRC && i !== e
            ? this.error(new Error("Crc error - " + e + " - " + i))
            : this._hasIEND || this.read(8, this._parseChunkBegin.bind(this));
        }),
        (s.prototype._handleIHDR = function (t) {
          this.read(t, this._parseIHDR.bind(this));
        }),
        (s.prototype._parseIHDR = function (t) {
          this._crc.write(t);
          let e = t.readUInt32BE(0),
            i = t.readUInt32BE(4),
            n = t[8],
            s = t[9],
            h = t[10],
            o = t[11],
            a = t[12];
          if (8 !== n && 4 !== n && 2 !== n && 1 !== n && 16 !== n)
            return void this.error(new Error("Unsupported bit depth " + n));
          if (!(s in r.COLORTYPE_TO_BPP_MAP))
            return void this.error(new Error("Unsupported color type"));
          if (0 !== h) return void this.error(new Error("Unsupported compression method"));
          if (0 !== o) return void this.error(new Error("Unsupported filter method"));
          if (0 !== a && 1 !== a) return void this.error(new Error("Unsupported interlace method"));
          this._colorType = s;
          let l = r.COLORTYPE_TO_BPP_MAP[this._colorType];
          ((this._hasIHDR = !0),
            this.metadata({
              width: e,
              height: i,
              depth: n,
              interlace: Boolean(a),
              palette: Boolean(s & r.COLORTYPE_PALETTE),
              color: Boolean(s & r.COLORTYPE_COLOR),
              alpha: Boolean(s & r.COLORTYPE_ALPHA),
              bpp: l,
              colorType: s,
            }),
            this._handleChunkEnd());
        }),
        (s.prototype._handlePLTE = function (t) {
          this.read(t, this._parsePLTE.bind(this));
        }),
        (s.prototype._parsePLTE = function (t) {
          this._crc.write(t);
          let e = Math.floor(t.length / 3);
          for (let i = 0; i < e; i++)
            this._palette.push([t[3 * i], t[3 * i + 1], t[3 * i + 2], 255]);
          (this.palette(this._palette), this._handleChunkEnd());
        }),
        (s.prototype._handleTRNS = function (t) {
          (this.simpleTransparency(), this.read(t, this._parseTRNS.bind(this)));
        }),
        (s.prototype._parseTRNS = function (t) {
          if ((this._crc.write(t), this._colorType === r.COLORTYPE_PALETTE_COLOR)) {
            if (0 === this._palette.length)
              return void this.error(new Error("Transparency chunk must be after palette"));
            if (t.length > this._palette.length)
              return void this.error(new Error("More transparent colors than palette size"));
            for (let e = 0; e < t.length; e++) this._palette[e][3] = t[e];
            this.palette(this._palette);
          }
          (this._colorType === r.COLORTYPE_GRAYSCALE && this.transColor([t.readUInt16BE(0)]),
            this._colorType === r.COLORTYPE_COLOR &&
              this.transColor([t.readUInt16BE(0), t.readUInt16BE(2), t.readUInt16BE(4)]),
            this._handleChunkEnd());
        }),
        (s.prototype._handleGAMA = function (t) {
          this.read(t, this._parseGAMA.bind(this));
        }),
        (s.prototype._parseGAMA = function (t) {
          (this._crc.write(t),
            this.gamma(t.readUInt32BE(0) / r.GAMMA_DIVISION),
            this._handleChunkEnd());
        }),
        (s.prototype._handleIDAT = function (t) {
          (this._emittedHeadersFinished ||
            ((this._emittedHeadersFinished = !0), this.headersFinished()),
            this.read(-t, this._parseIDAT.bind(this, t)));
        }),
        (s.prototype._parseIDAT = function (t, e) {
          if (
            (this._crc.write(e),
            this._colorType === r.COLORTYPE_PALETTE_COLOR && 0 === this._palette.length)
          )
            throw new Error("Expected palette not found");
          this.inflateData(e);
          let i = t - e.length;
          i > 0 ? this._handleIDAT(i) : this._handleChunkEnd();
        }),
        (s.prototype._handleIEND = function (t) {
          this.read(t, this._parseIEND.bind(this));
        }),
        (s.prototype._parseIEND = function (t) {
          (this._crc.write(t),
            (this._hasIEND = !0),
            this._handleChunkEnd(),
            this.finished && this.finished());
        }));
    },
    67736: (t, e, i) => {
      let r = i(27749),
        n = i(6446);
      e.process = function (t, e) {
        let i = [],
          s = new r(t);
        return (
          new n(e, {
            read: s.read.bind(s),
            write: function (t) {
              i.push(t);
            },
            complete: function () {},
          }).start(),
          s.process(),
          Buffer.concat(i)
        );
      };
    },
    68056: (t, e, i) => {
      let r = i(12707);
      let n = {
          0: function (t, e, i, r, n) {
            for (let s = 0; s < i; s++) r[n + s] = t[e + s];
          },
          1: function (t, e, i, r, n, s) {
            for (let h = 0; h < i; h++) {
              let i = h >= s ? t[e + h - s] : 0,
                o = t[e + h] - i;
              r[n + h] = o;
            }
          },
          2: function (t, e, i, r, n) {
            for (let s = 0; s < i; s++) {
              let h = e > 0 ? t[e + s - i] : 0,
                o = t[e + s] - h;
              r[n + s] = o;
            }
          },
          3: function (t, e, i, r, n, s) {
            for (let h = 0; h < i; h++) {
              let o = h >= s ? t[e + h - s] : 0,
                a = e > 0 ? t[e + h - i] : 0,
                l = t[e + h] - ((o + a) >> 1);
              r[n + h] = l;
            }
          },
          4: function (t, e, i, n, s, h) {
            for (let o = 0; o < i; o++) {
              let a = o >= h ? t[e + o - h] : 0,
                l = e > 0 ? t[e + o - i] : 0,
                f = e > 0 && o >= h ? t[e + o - (i + h)] : 0,
                p = t[e + o] - r(a, l, f);
              n[s + o] = p;
            }
          },
        },
        s = {
          0: function (t, e, i) {
            let r = 0,
              n = e + i;
            for (let i = e; i < n; i++) r += Math.abs(t[i]);
            return r;
          },
          1: function (t, e, i, r) {
            let n = 0;
            for (let s = 0; s < i; s++) {
              let i = s >= r ? t[e + s - r] : 0,
                h = t[e + s] - i;
              n += Math.abs(h);
            }
            return n;
          },
          2: function (t, e, i) {
            let r = 0,
              n = e + i;
            for (let s = e; s < n; s++) {
              let n = e > 0 ? t[s - i] : 0,
                h = t[s] - n;
              r += Math.abs(h);
            }
            return r;
          },
          3: function (t, e, i, r) {
            let n = 0;
            for (let s = 0; s < i; s++) {
              let h = s >= r ? t[e + s - r] : 0,
                o = e > 0 ? t[e + s - i] : 0,
                a = t[e + s] - ((h + o) >> 1);
              n += Math.abs(a);
            }
            return n;
          },
          4: function (t, e, i, n) {
            let s = 0;
            for (let h = 0; h < i; h++) {
              let o = h >= n ? t[e + h - n] : 0,
                a = e > 0 ? t[e + h - i] : 0,
                l = e > 0 && h >= n ? t[e + h - (i + n)] : 0,
                f = t[e + h] - r(o, a, l);
              s += Math.abs(f);
            }
            return s;
          },
        };
      t.exports = function (t, e, i, r, h) {
        let o;
        if ("filterType" in r && -1 !== r.filterType) {
          if ("number" != typeof r.filterType) throw new Error("unrecognised filter types");
          o = [r.filterType];
        } else o = [0, 1, 2, 3, 4];
        16 === r.bitDepth && (h *= 2);
        let a = e * h,
          l = 0,
          f = 0,
          p = Buffer.alloc((a + 1) * i),
          d = o[0];
        for (let e = 0; e < i; e++) {
          if (o.length > 1) {
            let e = 1 / 0;
            for (let i = 0; i < o.length; i++) {
              let r = s[o[i]](t, f, a, h);
              r < e && ((d = o[i]), (e = r));
            }
          }
          ((p[l] = d), l++, n[d](t, f, a, p, l, h), (l += a), (f += a));
        }
        return p;
      };
    },
    68401: (t, e) => {
      let i = [
        { x: [0], y: [0] },
        { x: [4], y: [0] },
        { x: [0, 4], y: [4] },
        { x: [2, 6], y: [0, 4] },
        { x: [0, 2, 4, 6], y: [2, 6] },
        { x: [1, 3, 5, 7], y: [0, 2, 4, 6] },
        { x: [0, 1, 2, 3, 4, 5, 6, 7], y: [1, 3, 5, 7] },
      ];
      ((e.getImagePasses = function (t, e) {
        let r = [],
          n = t % 8,
          s = e % 8,
          h = (t - n) / 8,
          o = (e - s) / 8;
        for (let t = 0; t < i.length; t++) {
          let e = i[t],
            a = h * e.x.length,
            l = o * e.y.length;
          for (let t = 0; t < e.x.length && e.x[t] < n; t++) a++;
          for (let t = 0; t < e.y.length && e.y[t] < s; t++) l++;
          a > 0 && l > 0 && r.push({ width: a, height: l, index: t });
        }
        return r;
      }),
        (e.getInterlaceIterator = function (t) {
          return function (e, r, n) {
            let s = e % i[n].x.length,
              h = ((e - s) / i[n].x.length) * 8 + i[n].x[s],
              o = r % i[n].y.length;
            return 4 * h + (((r - o) / i[n].y.length) * 8 + i[n].y[o]) * t * 4;
          };
        }));
    },
    74561: (t, e, i) => {
      let r = !0,
        n = i(43106),
        s = i(7263);
      n.deflateSync || (r = !1);
      let h = i(27749),
        o = i(67736),
        a = i(61041),
        l = i(29626),
        f = i(99734);
      t.exports = function (t, e) {
        if (!r)
          throw new Error(
            "To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0",
          );
        let i, p, d;
        let u = [];
        let c = new h(t),
          _ = new a(e, {
            read: c.read.bind(c),
            error: function (t) {
              i = t;
            },
            metadata: function (t) {
              p = t;
            },
            gamma: function (t) {
              d = t;
            },
            palette: function (t) {
              p.palette = t;
            },
            transColor: function (t) {
              p.transColor = t;
            },
            inflateData: function (t) {
              u.push(t);
            },
            simpleTransparency: function () {
              p.alpha = !0;
            },
          });
        if ((_.start(), c.process(), i)) throw i;
        let g,
          b = Buffer.concat(u);
        if (((u.length = 0), p.interlace)) g = n.inflateSync(b);
        else {
          let t = (1 + ((p.width * p.bpp * p.depth + 7) >> 3)) * p.height;
          g = s(b, { chunkSize: t, maxLength: t });
        }
        if (((b = null), !g || !g.length))
          throw new Error("bad png - invalid inflate data response");
        let y = o.process(g, p);
        b = null;
        let w = l.dataToBitMap(y, p);
        y = null;
        let E = f(w, p, e.skipRescale);
        return ((p.data = E), (p.gamma = d || 0), p);
      };
    },
    77976: (t, e, i) => {
      let r = i(94393),
        n = i(58102),
        s = i(3041),
        h = i(68056),
        o = i(43106),
        a = (t.exports = function (t) {
          if (
            ((this._options = t),
            (t.deflateChunkSize = t.deflateChunkSize || 32768),
            (t.deflateLevel = null != t.deflateLevel ? t.deflateLevel : 9),
            (t.deflateStrategy = null != t.deflateStrategy ? t.deflateStrategy : 3),
            (t.inputHasAlpha = null == t.inputHasAlpha || t.inputHasAlpha),
            (t.deflateFactory = t.deflateFactory || o.createDeflate),
            (t.bitDepth = t.bitDepth || 8),
            (t.colorType = "number" == typeof t.colorType ? t.colorType : r.COLORTYPE_COLOR_ALPHA),
            (t.inputColorType =
              "number" == typeof t.inputColorType ? t.inputColorType : r.COLORTYPE_COLOR_ALPHA),
            -1 ===
              [
                r.COLORTYPE_GRAYSCALE,
                r.COLORTYPE_COLOR,
                r.COLORTYPE_COLOR_ALPHA,
                r.COLORTYPE_ALPHA,
              ].indexOf(t.colorType))
          )
            throw new Error("option color type:" + t.colorType + " is not supported at present");
          if (
            -1 ===
            [
              r.COLORTYPE_GRAYSCALE,
              r.COLORTYPE_COLOR,
              r.COLORTYPE_COLOR_ALPHA,
              r.COLORTYPE_ALPHA,
            ].indexOf(t.inputColorType)
          )
            throw new Error(
              "option input color type:" + t.inputColorType + " is not supported at present",
            );
          if (8 !== t.bitDepth && 16 !== t.bitDepth)
            throw new Error("option bit depth:" + t.bitDepth + " is not supported at present");
        });
      ((a.prototype.getDeflateOptions = function () {
        return {
          chunkSize: this._options.deflateChunkSize,
          level: this._options.deflateLevel,
          strategy: this._options.deflateStrategy,
        };
      }),
        (a.prototype.createDeflate = function () {
          return this._options.deflateFactory(this.getDeflateOptions());
        }),
        (a.prototype.filterData = function (t, e, i) {
          let n = s(t, e, i, this._options),
            o = r.COLORTYPE_TO_BPP_MAP[this._options.colorType];
          return h(n, e, i, this._options, o);
        }),
        (a.prototype._packChunk = function (t, e) {
          let i = e ? e.length : 0,
            r = Buffer.alloc(i + 12);
          return (
            r.writeUInt32BE(i, 0),
            r.writeUInt32BE(t, 4),
            e && e.copy(r, 8),
            r.writeInt32BE(n.crc32(r.slice(4, r.length - 4)), r.length - 4),
            r
          );
        }),
        (a.prototype.packGAMA = function (t) {
          let e = Buffer.alloc(4);
          return (
            e.writeUInt32BE(Math.floor(t * r.GAMMA_DIVISION), 0), this._packChunk(r.TYPE_gAMA, e)
          );
        }),
        (a.prototype.packIHDR = function (t, e) {
          let i = Buffer.alloc(13);
          return (
            i.writeUInt32BE(t, 0),
            i.writeUInt32BE(e, 4),
            (i[8] = this._options.bitDepth),
            (i[9] = this._options.colorType),
            (i[10] = 0),
            (i[11] = 0),
            (i[12] = 0),
            this._packChunk(r.TYPE_IHDR, i)
          );
        }),
        (a.prototype.packIDAT = function (t) {
          return this._packChunk(r.TYPE_IDAT, t);
        }),
        (a.prototype.packIEND = function () {
          return this._packChunk(r.TYPE_IEND, null);
        }));
    },
    79233: (t, e, i) => {
      let r = i(39023),
        n = i(2203),
        s = (t.exports = function () {
          (n.call(this),
            (this._buffers = []),
            (this._buffered = 0),
            (this._reads = []),
            (this._paused = !1),
            (this._encoding = "utf8"),
            (this.writable = !0));
        });
      (r.inherits(s, n),
        (s.prototype.read = function (t, e) {
          (this._reads.push({ length: Math.abs(t), allowLess: t < 0, func: e }),
            process.nextTick(
              function () {
                (this._process(),
                  this._paused &&
                    this._reads &&
                    this._reads.length > 0 &&
                    ((this._paused = !1), this.emit("drain")));
              }.bind(this),
            ));
        }),
        (s.prototype.write = function (t, e) {
          if (!this.writable) return (this.emit("error", new Error("Stream not writable")), !1);
          let i;
          return (
            (i = Buffer.isBuffer(t) ? t : Buffer.from(t, e || this._encoding)),
            this._buffers.push(i),
            (this._buffered += i.length),
            this._process(),
            this._reads && 0 === this._reads.length && (this._paused = !0),
            this.writable && !this._paused
          );
        }),
        (s.prototype.end = function (t, e) {
          (t && this.write(t, e),
            (this.writable = !1),
            this._buffers &&
              (0 === this._buffers.length
                ? this._end()
                : (this._buffers.push(null), this._process())));
        }),
        (s.prototype.destroySoon = s.prototype.end),
        (s.prototype._end = function () {
          (this._reads.length > 0 && this.emit("error", new Error("Unexpected end of input")),
            this.destroy());
        }),
        (s.prototype.destroy = function () {
          this._buffers &&
            ((this.writable = !1),
            (this._reads = null),
            (this._buffers = null),
            this.emit("close"));
        }),
        (s.prototype._processReadAllowingLess = function (t) {
          this._reads.shift();
          let e = this._buffers[0];
          e.length > t.length
            ? ((this._buffered -= t.length),
              (this._buffers[0] = e.slice(t.length)),
              t.func.call(this, e.slice(0, t.length)))
            : ((this._buffered -= e.length), this._buffers.shift(), t.func.call(this, e));
        }),
        (s.prototype._processRead = function (t) {
          this._reads.shift();
          let e = 0,
            i = 0,
            r = Buffer.alloc(t.length);
          for (; e < t.length;) {
            let n = this._buffers[i++],
              s = Math.min(n.length, t.length - e);
            (n.copy(r, e, 0, s), (e += s), s !== n.length && (this._buffers[--i] = n.slice(s)));
          }
          (i > 0 && this._buffers.splice(0, i), (this._buffered -= t.length), t.func.call(this, r));
        }),
        (s.prototype._process = function () {
          try {
            for (; this._buffered > 0 && this._reads && this._reads.length > 0;) {
              let t = this._reads[0];
              if (t.allowLess) this._processReadAllowingLess(t);
              else {
                if (!(this._buffered >= t.length)) break;
                this._processRead(t);
              }
            }
            this._buffers && !this.writable && this._end();
          } catch (t) {
            this.emit("error", t);
          }
        }));
    },
    89568: (t, e, i) => {
      let r = i(39023),
        n = i(43106),
        s = i(79233),
        h = i(30795),
        o = i(61041),
        a = i(29626),
        l = i(99734),
        f = (t.exports = function (t) {
          (s.call(this),
            (this._parser = new o(t, {
              read: this.read.bind(this),
              error: this._handleError.bind(this),
              metadata: this._handleMetaData.bind(this),
              gamma: this.emit.bind(this, "gamma"),
              palette: this._handlePalette.bind(this),
              transColor: this._handleTransColor.bind(this),
              finished: this._finished.bind(this),
              inflateData: this._inflateData.bind(this),
              simpleTransparency: this._simpleTransparency.bind(this),
              headersFinished: this._headersFinished.bind(this),
            })),
            (this._options = t),
            (this.writable = !0),
            this._parser.start());
        });
      (r.inherits(f, s),
        (f.prototype._handleError = function (t) {
          (this.emit("error", t),
            (this.writable = !1),
            this.destroy(),
            this._inflate && this._inflate.destroy && this._inflate.destroy(),
            this._filter && (this._filter.destroy(), this._filter.on("error", function () {})),
            (this.errord = !0));
        }),
        (f.prototype._inflateData = function (t) {
          if (!this._inflate)
            if (this._bitmapInfo.interlace)
              ((this._inflate = n.createInflate()),
                this._inflate.on("error", this.emit.bind(this, "error")),
                this._filter.on("complete", this._complete.bind(this)),
                this._inflate.pipe(this._filter));
            else {
              let t =
                  (1 +
                    ((this._bitmapInfo.width * this._bitmapInfo.bpp * this._bitmapInfo.depth + 7) >>
                      3)) *
                  this._bitmapInfo.height,
                e = Math.max(t, n.Z_MIN_CHUNK);
              this._inflate = n.createInflate({ chunkSize: e });
              let i = t,
                r = this.emit.bind(this, "error");
              (this._inflate.on("error", function (t) {
                i && r(t);
              }),
                this._filter.on("complete", this._complete.bind(this)));
              let s = this._filter.write.bind(this._filter);
              (this._inflate.on("data", function (t) {
                i && (t.length > i && (t = t.slice(0, i)), (i -= t.length), s(t));
              }),
                this._inflate.on("end", this._filter.end.bind(this._filter)));
            }
          this._inflate.write(t);
        }),
        (f.prototype._handleMetaData = function (t) {
          ((this._metaData = t),
            (this._bitmapInfo = Object.create(t)),
            (this._filter = new h(this._bitmapInfo)));
        }),
        (f.prototype._handleTransColor = function (t) {
          this._bitmapInfo.transColor = t;
        }),
        (f.prototype._handlePalette = function (t) {
          this._bitmapInfo.palette = t;
        }),
        (f.prototype._simpleTransparency = function () {
          this._metaData.alpha = !0;
        }),
        (f.prototype._headersFinished = function () {
          this.emit("metadata", this._metaData);
        }),
        (f.prototype._finished = function () {
          this.errord ||
            (this._inflate ? this._inflate.end() : this.emit("error", "No Inflate block"));
        }),
        (f.prototype._complete = function (t) {
          if (this.errord) return;
          let e;
          try {
            let i = a.dataToBitMap(t, this._bitmapInfo);
            ((e = l(i, this._bitmapInfo, this._options.skipRescale)), (i = null));
          } catch (t) {
            return void this._handleError(t);
          }
          this.emit("parsed", e);
        }));
    },
    94393: (t) => {
      t.exports = {
        PNG_SIGNATURE: [137, 80, 78, 71, 13, 10, 26, 10],
        TYPE_IHDR: 1229472850,
        TYPE_IEND: 1229278788,
        TYPE_IDAT: 1229209940,
        TYPE_PLTE: 1347179589,
        TYPE_tRNS: 1951551059,
        TYPE_gAMA: 1732332865,
        COLORTYPE_GRAYSCALE: 0,
        COLORTYPE_PALETTE: 1,
        COLORTYPE_COLOR: 2,
        COLORTYPE_ALPHA: 4,
        COLORTYPE_PALETTE_COLOR: 3,
        COLORTYPE_COLOR_ALPHA: 6,
        COLORTYPE_TO_BPP_MAP: { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 },
        GAMMA_DIVISION: 1e5,
      };
    },
    99734: (t) => {
      t.exports = function (t, e, i = !1) {
        let r = e.depth,
          n = e.width,
          s = e.height,
          h = e.colorType,
          o = e.transColor,
          a = e.palette,
          l = t;
        return (
          3 === h
            ? (function (t, e, i, r, n) {
                let s = 0;
                for (let h = 0; h < r; h++)
                  for (let r = 0; r < i; r++) {
                    let i = n[t[s]];
                    if (!i) throw new Error("index " + t[s] + " not in palette");
                    for (let t = 0; t < 4; t++) e[s + t] = i[t];
                    s += 4;
                  }
              })(t, l, n, s, a)
            : (o &&
                (function (t, e, i, r, n) {
                  let s = 0;
                  for (let h = 0; h < r; h++)
                    for (let r = 0; r < i; r++) {
                      let i = !1;
                      if (
                        (1 === n.length
                          ? n[0] === t[s] && (i = !0)
                          : n[0] === t[s] && n[1] === t[s + 1] && n[2] === t[s + 2] && (i = !0),
                        i)
                      )
                        for (let t = 0; t < 4; t++) e[s + t] = 0;
                      s += 4;
                    }
                })(t, l, n, s, o),
              8 === r ||
                i ||
                (16 === r && (l = Buffer.alloc(n * s * 4)),
                (function (t, e, i, r, n) {
                  let s = Math.pow(2, n) - 1,
                    h = 0;
                  for (let n = 0; n < r; n++)
                    for (let r = 0; r < i; r++) {
                      for (let i = 0; i < 4; i++) e[h + i] = Math.floor((255 * t[h + i]) / s + 0.5);
                      h += 4;
                    }
                })(t, l, n, s, r))),
          l
        );
      };
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-host/dist/621.js.map
