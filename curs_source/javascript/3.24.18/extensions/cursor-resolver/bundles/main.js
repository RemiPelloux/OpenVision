(() => {
  "use strict";
  var e = {
      21: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BytesValue =
            t.StringValue =
            t.BoolValue =
            t.UInt32Value =
            t.Int32Value =
            t.UInt64Value =
            t.Int64Value =
            t.FloatValue =
            t.DoubleValue =
              void 0));
        const r = n(193),
          o = n(599),
          a = n(408),
          s = n(498);
        class i extends r.Message {
          constructor(e) {
            (super(), (this.value = 0), o.proto3.util.initPartial(e, this));
          }
          toJson(e) {
            return o.proto3.json.writeScalar(a.ScalarType.DOUBLE, this.value, !0);
          }
          fromJson(e, t) {
            try {
              this.value = o.proto3.json.readScalar(a.ScalarType.DOUBLE, e);
            } catch (e) {
              let t = 'cannot decode message google.protobuf.DoubleValue from JSON"';
              throw (
                e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t)
              );
            }
            return this;
          }
          static fromBinary(e, t) {
            return new i().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new i().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new i().fromJsonString(e, t);
          }
          static equals(e, t) {
            return o.proto3.util.equals(i, e, t);
          }
        }
        ((t.DoubleValue = i),
          (i.runtime = o.proto3),
          (i.typeName = "google.protobuf.DoubleValue"),
          (i.fields = o.proto3.util.newFieldList(() => [
            { no: 1, name: "value", kind: "scalar", T: 1 },
          ])),
          (i.fieldWrapper = {
            wrapField: (e) => new i({ value: e }),
            unwrapField: (e) => e.value,
          }));
        class l extends r.Message {
          constructor(e) {
            (super(), (this.value = 0), o.proto3.util.initPartial(e, this));
          }
          toJson(e) {
            return o.proto3.json.writeScalar(a.ScalarType.FLOAT, this.value, !0);
          }
          fromJson(e, t) {
            try {
              this.value = o.proto3.json.readScalar(a.ScalarType.FLOAT, e);
            } catch (e) {
              let t = 'cannot decode message google.protobuf.FloatValue from JSON"';
              throw (
                e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t)
              );
            }
            return this;
          }
          static fromBinary(e, t) {
            return new l().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new l().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new l().fromJsonString(e, t);
          }
          static equals(e, t) {
            return o.proto3.util.equals(l, e, t);
          }
        }
        ((t.FloatValue = l),
          (l.runtime = o.proto3),
          (l.typeName = "google.protobuf.FloatValue"),
          (l.fields = o.proto3.util.newFieldList(() => [
            { no: 1, name: "value", kind: "scalar", T: 2 },
          ])),
          (l.fieldWrapper = {
            wrapField: (e) => new l({ value: e }),
            unwrapField: (e) => e.value,
          }));
        class u extends r.Message {
          constructor(e) {
            (super(), (this.value = s.protoInt64.zero), o.proto3.util.initPartial(e, this));
          }
          toJson(e) {
            return o.proto3.json.writeScalar(a.ScalarType.INT64, this.value, !0);
          }
          fromJson(e, t) {
            try {
              this.value = o.proto3.json.readScalar(a.ScalarType.INT64, e);
            } catch (e) {
              let t = 'cannot decode message google.protobuf.Int64Value from JSON"';
              throw (
                e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t)
              );
            }
            return this;
          }
          static fromBinary(e, t) {
            return new u().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new u().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new u().fromJsonString(e, t);
          }
          static equals(e, t) {
            return o.proto3.util.equals(u, e, t);
          }
        }
        ((t.Int64Value = u),
          (u.runtime = o.proto3),
          (u.typeName = "google.protobuf.Int64Value"),
          (u.fields = o.proto3.util.newFieldList(() => [
            { no: 1, name: "value", kind: "scalar", T: 3 },
          ])),
          (u.fieldWrapper = {
            wrapField: (e) => new u({ value: e }),
            unwrapField: (e) => e.value,
          }));
        class c extends r.Message {
          constructor(e) {
            (super(), (this.value = s.protoInt64.zero), o.proto3.util.initPartial(e, this));
          }
          toJson(e) {
            return o.proto3.json.writeScalar(a.ScalarType.UINT64, this.value, !0);
          }
          fromJson(e, t) {
            try {
              this.value = o.proto3.json.readScalar(a.ScalarType.UINT64, e);
            } catch (e) {
              let t = 'cannot decode message google.protobuf.UInt64Value from JSON"';
              throw (
                e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t)
              );
            }
            return this;
          }
          static fromBinary(e, t) {
            return new c().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new c().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new c().fromJsonString(e, t);
          }
          static equals(e, t) {
            return o.proto3.util.equals(c, e, t);
          }
        }
        ((t.UInt64Value = c),
          (c.runtime = o.proto3),
          (c.typeName = "google.protobuf.UInt64Value"),
          (c.fields = o.proto3.util.newFieldList(() => [
            { no: 1, name: "value", kind: "scalar", T: 4 },
          ])),
          (c.fieldWrapper = {
            wrapField: (e) => new c({ value: e }),
            unwrapField: (e) => e.value,
          }));
        class m extends r.Message {
          constructor(e) {
            (super(), (this.value = 0), o.proto3.util.initPartial(e, this));
          }
          toJson(e) {
            return o.proto3.json.writeScalar(a.ScalarType.INT32, this.value, !0);
          }
          fromJson(e, t) {
            try {
              this.value = o.proto3.json.readScalar(a.ScalarType.INT32, e);
            } catch (e) {
              let t = 'cannot decode message google.protobuf.Int32Value from JSON"';
              throw (
                e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t)
              );
            }
            return this;
          }
          static fromBinary(e, t) {
            return new m().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new m().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new m().fromJsonString(e, t);
          }
          static equals(e, t) {
            return o.proto3.util.equals(m, e, t);
          }
        }
        ((t.Int32Value = m),
          (m.runtime = o.proto3),
          (m.typeName = "google.protobuf.Int32Value"),
          (m.fields = o.proto3.util.newFieldList(() => [
            { no: 1, name: "value", kind: "scalar", T: 5 },
          ])),
          (m.fieldWrapper = {
            wrapField: (e) => new m({ value: e }),
            unwrapField: (e) => e.value,
          }));
        class p extends r.Message {
          constructor(e) {
            (super(), (this.value = 0), o.proto3.util.initPartial(e, this));
          }
          toJson(e) {
            return o.proto3.json.writeScalar(a.ScalarType.UINT32, this.value, !0);
          }
          fromJson(e, t) {
            try {
              this.value = o.proto3.json.readScalar(a.ScalarType.UINT32, e);
            } catch (e) {
              let t = 'cannot decode message google.protobuf.UInt32Value from JSON"';
              throw (
                e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t)
              );
            }
            return this;
          }
          static fromBinary(e, t) {
            return new p().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new p().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new p().fromJsonString(e, t);
          }
          static equals(e, t) {
            return o.proto3.util.equals(p, e, t);
          }
        }
        ((t.UInt32Value = p),
          (p.runtime = o.proto3),
          (p.typeName = "google.protobuf.UInt32Value"),
          (p.fields = o.proto3.util.newFieldList(() => [
            { no: 1, name: "value", kind: "scalar", T: 13 },
          ])),
          (p.fieldWrapper = {
            wrapField: (e) => new p({ value: e }),
            unwrapField: (e) => e.value,
          }));
        class d extends r.Message {
          constructor(e) {
            (super(), (this.value = !1), o.proto3.util.initPartial(e, this));
          }
          toJson(e) {
            return o.proto3.json.writeScalar(a.ScalarType.BOOL, this.value, !0);
          }
          fromJson(e, t) {
            try {
              this.value = o.proto3.json.readScalar(a.ScalarType.BOOL, e);
            } catch (e) {
              let t = 'cannot decode message google.protobuf.BoolValue from JSON"';
              throw (
                e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t)
              );
            }
            return this;
          }
          static fromBinary(e, t) {
            return new d().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new d().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new d().fromJsonString(e, t);
          }
          static equals(e, t) {
            return o.proto3.util.equals(d, e, t);
          }
        }
        ((t.BoolValue = d),
          (d.runtime = o.proto3),
          (d.typeName = "google.protobuf.BoolValue"),
          (d.fields = o.proto3.util.newFieldList(() => [
            { no: 1, name: "value", kind: "scalar", T: 8 },
          ])),
          (d.fieldWrapper = {
            wrapField: (e) => new d({ value: e }),
            unwrapField: (e) => e.value,
          }));
        class f extends r.Message {
          constructor(e) {
            (super(), (this.value = ""), o.proto3.util.initPartial(e, this));
          }
          toJson(e) {
            return o.proto3.json.writeScalar(a.ScalarType.STRING, this.value, !0);
          }
          fromJson(e, t) {
            try {
              this.value = o.proto3.json.readScalar(a.ScalarType.STRING, e);
            } catch (e) {
              let t = 'cannot decode message google.protobuf.StringValue from JSON"';
              throw (
                e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t)
              );
            }
            return this;
          }
          static fromBinary(e, t) {
            return new f().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new f().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new f().fromJsonString(e, t);
          }
          static equals(e, t) {
            return o.proto3.util.equals(f, e, t);
          }
        }
        ((t.StringValue = f),
          (f.runtime = o.proto3),
          (f.typeName = "google.protobuf.StringValue"),
          (f.fields = o.proto3.util.newFieldList(() => [
            { no: 1, name: "value", kind: "scalar", T: 9 },
          ])),
          (f.fieldWrapper = {
            wrapField: (e) => new f({ value: e }),
            unwrapField: (e) => e.value,
          }));
        class T extends r.Message {
          constructor(e) {
            (super(), (this.value = new Uint8Array(0)), o.proto3.util.initPartial(e, this));
          }
          toJson(e) {
            return o.proto3.json.writeScalar(a.ScalarType.BYTES, this.value, !0);
          }
          fromJson(e, t) {
            try {
              this.value = o.proto3.json.readScalar(a.ScalarType.BYTES, e);
            } catch (e) {
              let t = 'cannot decode message google.protobuf.BytesValue from JSON"';
              throw (
                e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t)
              );
            }
            return this;
          }
          static fromBinary(e, t) {
            return new T().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new T().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new T().fromJsonString(e, t);
          }
          static equals(e, t) {
            return o.proto3.util.equals(T, e, t);
          }
        }
        ((t.BytesValue = T),
          (T.runtime = o.proto3),
          (T.typeName = "google.protobuf.BytesValue"),
          (T.fields = o.proto3.util.newFieldList(() => [
            { no: 1, name: "value", kind: "scalar", T: 12 },
          ])),
          (T.fieldWrapper = {
            wrapField: (e) => new T({ value: e }),
            unwrapField: (e) => e.value,
          }));
      },
      38: function (e, t, n) {
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n);
                  var o = Object.getOwnPropertyDescriptor(t, n);
                  ((o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, r, o));
                }
              : function (e, t, n, r) {
                  (void 0 === r && (r = n), (e[r] = t[n]));
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n);
            };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.toPlainMessage =
            t.createRegistryFromDescriptors =
            t.createRegistry =
            t.createDescriptorSet =
            t.BinaryReader =
            t.BinaryWriter =
            t.WireType =
            t.MethodIdempotency =
            t.MethodKind =
            t.clearExtension =
            t.hasExtension =
            t.setExtension =
            t.getExtension =
            t.ScalarType =
            t.LongType =
            t.isMessage =
            t.Message =
            t.codegenInfo =
            t.protoDelimited =
            t.protoBase64 =
            t.protoInt64 =
            t.protoDouble =
            t.proto2 =
            t.proto3 =
              void 0));
        var a = n(599);
        Object.defineProperty(t, "proto3", {
          enumerable: !0,
          get: function () {
            return a.proto3;
          },
        });
        var s = n(291);
        Object.defineProperty(t, "proto2", {
          enumerable: !0,
          get: function () {
            return s.proto2;
          },
        });
        var i = n(492);
        Object.defineProperty(t, "protoDouble", {
          enumerable: !0,
          get: function () {
            return i.protoDouble;
          },
        });
        var l = n(498);
        Object.defineProperty(t, "protoInt64", {
          enumerable: !0,
          get: function () {
            return l.protoInt64;
          },
        });
        var u = n(526);
        Object.defineProperty(t, "protoBase64", {
          enumerable: !0,
          get: function () {
            return u.protoBase64;
          },
        });
        var c = n(638);
        Object.defineProperty(t, "protoDelimited", {
          enumerable: !0,
          get: function () {
            return c.protoDelimited;
          },
        });
        var m = n(596);
        Object.defineProperty(t, "codegenInfo", {
          enumerable: !0,
          get: function () {
            return m.codegenInfo;
          },
        });
        var p = n(193);
        Object.defineProperty(t, "Message", {
          enumerable: !0,
          get: function () {
            return p.Message;
          },
        });
        var d = n(706);
        Object.defineProperty(t, "isMessage", {
          enumerable: !0,
          get: function () {
            return d.isMessage;
          },
        });
        var f = n(408);
        (Object.defineProperty(t, "LongType", {
          enumerable: !0,
          get: function () {
            return f.LongType;
          },
        }),
          Object.defineProperty(t, "ScalarType", {
            enumerable: !0,
            get: function () {
              return f.ScalarType;
            },
          }));
        var T = n(771);
        (Object.defineProperty(t, "getExtension", {
          enumerable: !0,
          get: function () {
            return T.getExtension;
          },
        }),
          Object.defineProperty(t, "setExtension", {
            enumerable: !0,
            get: function () {
              return T.setExtension;
            },
          }),
          Object.defineProperty(t, "hasExtension", {
            enumerable: !0,
            get: function () {
              return T.hasExtension;
            },
          }),
          Object.defineProperty(t, "clearExtension", {
            enumerable: !0,
            get: function () {
              return T.clearExtension;
            },
          }));
        var g = n(422);
        (Object.defineProperty(t, "MethodKind", {
          enumerable: !0,
          get: function () {
            return g.MethodKind;
          },
        }),
          Object.defineProperty(t, "MethodIdempotency", {
            enumerable: !0,
            get: function () {
              return g.MethodIdempotency;
            },
          }));
        var E = n(831);
        (Object.defineProperty(t, "WireType", {
          enumerable: !0,
          get: function () {
            return E.WireType;
          },
        }),
          Object.defineProperty(t, "BinaryWriter", {
            enumerable: !0,
            get: function () {
              return E.BinaryWriter;
            },
          }),
          Object.defineProperty(t, "BinaryReader", {
            enumerable: !0,
            get: function () {
              return E.BinaryReader;
            },
          }));
        var y = n(101);
        Object.defineProperty(t, "createDescriptorSet", {
          enumerable: !0,
          get: function () {
            return y.createDescriptorSet;
          },
        });
        var h = n(942);
        Object.defineProperty(t, "createRegistry", {
          enumerable: !0,
          get: function () {
            return h.createRegistry;
          },
        });
        var N = n(269);
        Object.defineProperty(t, "createRegistryFromDescriptors", {
          enumerable: !0,
          get: function () {
            return N.createRegistryFromDescriptors;
          },
        });
        var _ = n(174);
        (Object.defineProperty(t, "toPlainMessage", {
          enumerable: !0,
          get: function () {
            return _.toPlainMessage;
          },
        }),
          o(n(636), t),
          o(n(443), t),
          o(n(245), t),
          o(n(374), t),
          o(n(574), t),
          o(n(668), t),
          o(n(970), t),
          o(n(206), t),
          o(n(814), t),
          o(n(907), t),
          o(n(469), t),
          o(n(21), t));
      },
      84: (e, t) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.varint32read =
            t.varint32write =
            t.uInt64ToString =
            t.int64ToString =
            t.int64FromString =
            t.varint64write =
            t.varint64read =
              void 0),
          (t.varint64read = function () {
            let e = 0,
              t = 0;
            for (let n = 0; n < 28; n += 7) {
              let r = this.buf[this.pos++];
              if (((e |= (127 & r) << n), !(128 & r))) return (this.assertBounds(), [e, t]);
            }
            let n = this.buf[this.pos++];
            if (((e |= (15 & n) << 28), (t = (112 & n) >> 4), !(128 & n)))
              return (this.assertBounds(), [e, t]);
            for (let n = 3; n <= 31; n += 7) {
              let r = this.buf[this.pos++];
              if (((t |= (127 & r) << n), !(128 & r))) return (this.assertBounds(), [e, t]);
            }
            throw new Error("invalid varint");
          }),
          (t.varint64write = function (e, t, n) {
            for (let r = 0; r < 28; r += 7) {
              const o = e >>> r,
                a = !(o >>> 7 == 0 && 0 == t),
                s = 255 & (a ? 128 | o : o);
              if ((n.push(s), !a)) return;
            }
            const r = ((e >>> 28) & 15) | ((7 & t) << 4),
              o = !!(t >> 3);
            if ((n.push(255 & (o ? 128 | r : r)), o)) {
              for (let e = 3; e < 31; e += 7) {
                const r = t >>> e,
                  o = !(r >>> 7 == 0),
                  a = 255 & (o ? 128 | r : r);
                if ((n.push(a), !o)) return;
              }
              n.push((t >>> 31) & 1);
            }
          }));
        const n = 4294967296;
        function r(e, t) {
          if (
            (({ lo: e, hi: t } = (function (e, t) {
              return { lo: e >>> 0, hi: t >>> 0 };
            })(e, t)),
            t <= 2097151)
          )
            return String(n * t + e);
          const r = 16777215 & ((e >>> 24) | (t << 8)),
            o = (t >> 16) & 65535;
          let a = (16777215 & e) + 6777216 * r + 6710656 * o,
            i = r + 8147497 * o,
            l = 2 * o;
          const u = 1e7;
          return (
            a >= u && ((i += Math.floor(a / u)), (a %= u)),
            i >= u && ((l += Math.floor(i / u)), (i %= u)),
            l.toString() + s(i) + s(a)
          );
        }
        function o(e, t) {
          return { lo: 0 | e, hi: 0 | t };
        }
        function a(e, t) {
          return ((t = ~t), e ? (e = 1 + ~e) : (t += 1), o(e, t));
        }
        ((t.int64FromString = function (e) {
          const t = "-" === e[0];
          t && (e = e.slice(1));
          const r = 1e6;
          let s = 0,
            i = 0;
          function l(t, o) {
            const a = Number(e.slice(t, o));
            ((i *= r), (s = s * r + a), s >= n && ((i += (s / n) | 0), (s %= n)));
          }
          return (l(-24, -18), l(-18, -12), l(-12, -6), l(-6), t ? a(s, i) : o(s, i));
        }),
          (t.int64ToString = function (e, t) {
            let n = o(e, t);
            const s = 2147483648 & n.hi;
            s && (n = a(n.lo, n.hi));
            const i = r(n.lo, n.hi);
            return s ? "-" + i : i;
          }),
          (t.uInt64ToString = r));
        const s = (e) => {
          const t = String(e);
          return "0000000".slice(t.length) + t;
        };
        ((t.varint32write = function (e, t) {
          if (e >= 0) {
            for (; e > 127;) (t.push((127 & e) | 128), (e >>>= 7));
            t.push(e);
          } else {
            for (let n = 0; n < 9; n++) (t.push((127 & e) | 128), (e >>= 7));
            t.push(1);
          }
        }),
          (t.varint32read = function () {
            let e = this.buf[this.pos++],
              t = 127 & e;
            if (!(128 & e)) return (this.assertBounds(), t);
            if (((e = this.buf[this.pos++]), (t |= (127 & e) << 7), !(128 & e)))
              return (this.assertBounds(), t);
            if (((e = this.buf[this.pos++]), (t |= (127 & e) << 14), !(128 & e)))
              return (this.assertBounds(), t);
            if (((e = this.buf[this.pos++]), (t |= (127 & e) << 21), !(128 & e)))
              return (this.assertBounds(), t);
            ((e = this.buf[this.pos++]), (t |= (15 & e) << 28));
            for (let t = 5; 128 & e && t < 10; t++) e = this.buf[this.pos++];
            if (128 & e) throw new Error("invalid varint");
            return (this.assertBounds(), t >>> 0);
          }));
      },
      98: (e, t) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.assertFloat32 = t.assertUInt32 = t.assertInt32 = t.assert = void 0),
          (t.assert = function (e, t) {
            if (!e) throw new Error(t);
          }));
        ((t.assertInt32 = function (e) {
          if ("number" != typeof e) throw new Error("invalid int 32: " + typeof e);
          if (!Number.isInteger(e) || e > 2147483647 || e < -2147483648)
            throw new Error("invalid int 32: " + e);
        }),
          (t.assertUInt32 = function (e) {
            if ("number" != typeof e) throw new Error("invalid uint 32: " + typeof e);
            if (!Number.isInteger(e) || e > 4294967295 || e < 0)
              throw new Error("invalid uint 32: " + e);
          }),
          (t.assertFloat32 = function (e) {
            if ("number" != typeof e) throw new Error("invalid float 32: " + typeof e);
            if (Number.isFinite(e) && (e > 34028234663852886e22 || e < -34028234663852886e22))
              throw new Error("invalid float 32: " + e);
          }));
      },
      101: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.createDescriptorSet = void 0));
        const r = n(374),
          o = n(98),
          a = n(422),
          s = n(822),
          i = n(663),
          l = n(301),
          u = n(408),
          c = n(706);
        function m(e, t, n) {
          var r, a;
          (0, o.assert)(e.name, "invalid FileDescriptorProto: missing name");
          const s = Object.assign(
            Object.assign(
              {
                kind: "file",
                proto: e,
                deprecated:
                  null !== (a = null === (r = e.options) || void 0 === r ? void 0 : r.deprecated) &&
                  void 0 !== a &&
                  a,
              },
              N(e.syntax, e.edition),
            ),
            {
              name: e.name.replace(/\.proto/, ""),
              dependencies: _(e, t),
              enums: [],
              messages: [],
              extensions: [],
              services: [],
              toString() {
                return `file ${this.proto.name}`;
              },
              getSyntaxComments() {
                return P(this.proto.sourceCodeInfo, [F.FileDescriptorProto_Syntax]);
              },
              getPackageComments() {
                return P(this.proto.sourceCodeInfo, [F.FileDescriptorProto_Package]);
              },
              getFeatures() {
                var t;
                return n(null === (t = e.options) || void 0 === t ? void 0 : t.features);
              },
            },
          );
          t.mapEntries.clear();
          for (const r of e.enumType) f(r, s, void 0, t, n);
          for (const r of e.messageType) T(r, s, void 0, t, n);
          for (const r of e.service) g(r, s, t, n);
          p(s, t, n);
          for (const e of t.mapEntries.values()) d(e, t, n);
          for (const e of s.messages) (d(e, t, n), p(e, t, n));
          (t.mapEntries.clear(), t.files.push(s));
        }
        function p(e, t, n) {
          switch (e.kind) {
            case "file":
              for (const r of e.proto.extension) {
                const o = h(r, e, void 0, t, n);
                (e.extensions.push(o), t.extensions.set(o.typeName, o));
              }
              break;
            case "message":
              for (const r of e.proto.extension) {
                const o = h(r, e.file, e, t, n);
                (e.nestedExtensions.push(o), t.extensions.set(o.typeName, o));
              }
              for (const r of e.nestedMessages) p(r, t, n);
          }
        }
        function d(e, t, n) {
          const r = e.proto.oneofDecl.map((t) =>
              (function (e, t, n) {
                return (
                  (0, o.assert)(e.name, "invalid OneofDescriptorProto: missing name"),
                  {
                    kind: "oneof",
                    proto: e,
                    deprecated: !1,
                    parent: t,
                    fields: [],
                    name: e.name,
                    toString() {
                      return `oneof ${t.typeName}.${this.name}`;
                    },
                    getComments() {
                      const e = [
                        ...this.parent.getComments().sourcePath,
                        F.DescriptorProto_OneofDecl,
                        this.parent.proto.oneofDecl.indexOf(this.proto),
                      ];
                      return P(t.file.proto.sourceCodeInfo, e);
                    },
                    getFeatures() {
                      var r;
                      return n(
                        t.getFeatures(),
                        null === (r = e.options) || void 0 === r ? void 0 : r.features,
                      );
                    },
                  }
                );
              })(t, e, n),
            ),
            a = new Set();
          for (const o of e.proto.field) {
            const s = w(o, r),
              i = y(o, e.file, e, s, t, n);
            (e.fields.push(i),
              void 0 === s
                ? e.members.push(i)
                : (s.fields.push(i), a.has(s) || (a.add(s), e.members.push(s))));
          }
          for (const t of r.filter((e) => a.has(e))) e.oneofs.push(t);
          for (const r of e.nestedMessages) d(r, t, n);
        }
        function f(e, t, n, r, a) {
          var i, l, u;
          (0, o.assert)(e.name, "invalid EnumDescriptorProto: missing name");
          const c = {
            kind: "enum",
            proto: e,
            deprecated:
              null !== (l = null === (i = e.options) || void 0 === i ? void 0 : i.deprecated) &&
              void 0 !== l &&
              l,
            file: t,
            parent: n,
            name: e.name,
            typeName: I(e, n, t),
            values: [],
            sharedPrefix: (0, s.findEnumSharedPrefix)(
              e.name,
              e.value.map((e) => {
                var t;
                return null !== (t = e.name) && void 0 !== t ? t : "";
              }),
            ),
            toString() {
              return `enum ${this.typeName}`;
            },
            getComments() {
              const e = this.parent
                ? [
                    ...this.parent.getComments().sourcePath,
                    F.DescriptorProto_EnumType,
                    this.parent.proto.enumType.indexOf(this.proto),
                  ]
                : [F.FileDescriptorProto_EnumType, this.file.proto.enumType.indexOf(this.proto)];
              return P(t.proto.sourceCodeInfo, e);
            },
            getFeatures() {
              var r, o;
              return a(
                null !== (r = null == n ? void 0 : n.getFeatures()) && void 0 !== r
                  ? r
                  : t.getFeatures(),
                null === (o = e.options) || void 0 === o ? void 0 : o.features,
              );
            },
          };
          (r.enums.set(c.typeName, c),
            e.value.forEach((e) => {
              var n, r;
              ((0, o.assert)(e.name, "invalid EnumValueDescriptorProto: missing name"),
                (0, o.assert)(
                  void 0 !== e.number,
                  "invalid EnumValueDescriptorProto: missing number",
                ),
                c.values.push({
                  kind: "enum_value",
                  proto: e,
                  deprecated:
                    null !==
                      (r = null === (n = e.options) || void 0 === n ? void 0 : n.deprecated) &&
                    void 0 !== r &&
                    r,
                  parent: c,
                  name: e.name,
                  number: e.number,
                  toString() {
                    return `enum value ${c.typeName}.${this.name}`;
                  },
                  declarationString() {
                    var e;
                    let t = `${this.name} = ${this.number}`;
                    return (
                      !0 ===
                        (null === (e = this.proto.options) || void 0 === e
                          ? void 0
                          : e.deprecated) && (t += " [deprecated = true]"),
                      t
                    );
                  },
                  getComments() {
                    const e = [
                      ...this.parent.getComments().sourcePath,
                      F.EnumDescriptorProto_Value,
                      this.parent.proto.value.indexOf(this.proto),
                    ];
                    return P(t.proto.sourceCodeInfo, e);
                  },
                  getFeatures() {
                    var t;
                    return a(
                      c.getFeatures(),
                      null === (t = e.options) || void 0 === t ? void 0 : t.features,
                    );
                  },
                }));
            }),
            (null !== (u = null == n ? void 0 : n.nestedEnums) && void 0 !== u ? u : t.enums).push(
              c,
            ));
        }
        function T(e, t, n, r, a) {
          var s, i, l, u;
          (0, o.assert)(e.name, "invalid DescriptorProto: missing name");
          const c = {
            kind: "message",
            proto: e,
            deprecated:
              null !== (i = null === (s = e.options) || void 0 === s ? void 0 : s.deprecated) &&
              void 0 !== i &&
              i,
            file: t,
            parent: n,
            name: e.name,
            typeName: I(e, n, t),
            fields: [],
            oneofs: [],
            members: [],
            nestedEnums: [],
            nestedMessages: [],
            nestedExtensions: [],
            toString() {
              return `message ${this.typeName}`;
            },
            getComments() {
              const e = this.parent
                ? [
                    ...this.parent.getComments().sourcePath,
                    F.DescriptorProto_NestedType,
                    this.parent.proto.nestedType.indexOf(this.proto),
                  ]
                : [
                    F.FileDescriptorProto_MessageType,
                    this.file.proto.messageType.indexOf(this.proto),
                  ];
              return P(t.proto.sourceCodeInfo, e);
            },
            getFeatures() {
              var r, o;
              return a(
                null !== (r = null == n ? void 0 : n.getFeatures()) && void 0 !== r
                  ? r
                  : t.getFeatures(),
                null === (o = e.options) || void 0 === o ? void 0 : o.features,
              );
            },
          };
          !0 === (null === (l = e.options) || void 0 === l ? void 0 : l.mapEntry)
            ? r.mapEntries.set(c.typeName, c)
            : ((null !== (u = null == n ? void 0 : n.nestedMessages) && void 0 !== u
                ? u
                : t.messages
              ).push(c),
              r.messages.set(c.typeName, c));
          for (const n of e.enumType) f(n, t, c, r, a);
          for (const n of e.nestedType) T(n, t, c, r, a);
        }
        function g(e, t, n, r) {
          var a, s;
          (0, o.assert)(e.name, "invalid ServiceDescriptorProto: missing name");
          const i = {
            kind: "service",
            proto: e,
            deprecated:
              null !== (s = null === (a = e.options) || void 0 === a ? void 0 : a.deprecated) &&
              void 0 !== s &&
              s,
            file: t,
            name: e.name,
            typeName: I(e, void 0, t),
            methods: [],
            toString() {
              return `service ${this.typeName}`;
            },
            getComments() {
              const e = [
                F.FileDescriptorProto_Service,
                this.file.proto.service.indexOf(this.proto),
              ];
              return P(t.proto.sourceCodeInfo, e);
            },
            getFeatures() {
              var n;
              return r(
                t.getFeatures(),
                null === (n = e.options) || void 0 === n ? void 0 : n.features,
              );
            },
          };
          (t.services.push(i), n.services.set(i.typeName, i));
          for (const t of e.method) i.methods.push(E(t, i, n, r));
        }
        function E(e, t, n, s) {
          var i, l, u;
          let c, m;
          switch (
            ((0, o.assert)(e.name, "invalid MethodDescriptorProto: missing name"),
            (0, o.assert)(e.inputType, "invalid MethodDescriptorProto: missing input_type"),
            (0, o.assert)(e.outputType, "invalid MethodDescriptorProto: missing output_type"),
            (c =
              !0 === e.clientStreaming && !0 === e.serverStreaming
                ? a.MethodKind.BiDiStreaming
                : !0 === e.clientStreaming
                  ? a.MethodKind.ClientStreaming
                  : !0 === e.serverStreaming
                    ? a.MethodKind.ServerStreaming
                    : a.MethodKind.Unary),
            null === (i = e.options) || void 0 === i ? void 0 : i.idempotencyLevel)
          ) {
            case r.MethodOptions_IdempotencyLevel.IDEMPOTENT:
              m = a.MethodIdempotency.Idempotent;
              break;
            case r.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
              m = a.MethodIdempotency.NoSideEffects;
              break;
            case r.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
            case void 0:
              m = void 0;
          }
          const p = n.messages.get(S(e.inputType)),
            d = n.messages.get(S(e.outputType));
          ((0, o.assert)(p, `invalid MethodDescriptorProto: input_type ${e.inputType} not found`),
            (0, o.assert)(
              d,
              `invalid MethodDescriptorProto: output_type ${e.inputType} not found`,
            ));
          const f = e.name;
          return {
            kind: "rpc",
            proto: e,
            deprecated:
              null !== (u = null === (l = e.options) || void 0 === l ? void 0 : l.deprecated) &&
              void 0 !== u &&
              u,
            parent: t,
            name: f,
            methodKind: c,
            input: p,
            output: d,
            idempotency: m,
            toString: () => `rpc ${t.typeName}.${f}`,
            getComments() {
              const e = [
                ...this.parent.getComments().sourcePath,
                F.ServiceDescriptorProto_Method,
                this.parent.proto.method.indexOf(this.proto),
              ];
              return P(t.file.proto.sourceCodeInfo, e);
            },
            getFeatures() {
              var n;
              return s(
                t.getFeatures(),
                null === (n = e.options) || void 0 === n ? void 0 : n.features,
              );
            },
          };
        }
        function y(e, t, n, a, i, l) {
          var c, m, p;
          ((0, o.assert)(e.name, "invalid FieldDescriptorProto: missing name"),
            (0, o.assert)(e.number, "invalid FieldDescriptorProto: missing number"),
            (0, o.assert)(e.type, "invalid FieldDescriptorProto: missing type"));
          const d = {
              proto: e,
              deprecated:
                null !== (m = null === (c = e.options) || void 0 === c ? void 0 : c.deprecated) &&
                void 0 !== m &&
                m,
              name: e.name,
              number: e.number,
              parent: n,
              oneof: a,
              optional: O(e, t.syntax),
              packedByDefault: b(e, l),
              packed: k(t, n, e, l),
              jsonName: e.jsonName === (0, s.fieldJsonName)(e.name) ? void 0 : e.jsonName,
              scalar: void 0,
              longType: void 0,
              message: void 0,
              enum: void 0,
              mapKey: void 0,
              mapValue: void 0,
              declarationString: D,
              toString() {
                return `field ${this.parent.typeName}.${this.name}`;
              },
              getComments() {
                const e = [
                  ...this.parent.getComments().sourcePath,
                  F.DescriptorProto_Field,
                  this.parent.proto.field.indexOf(this.proto),
                ];
                return P(t.proto.sourceCodeInfo, e);
              },
              getFeatures() {
                var t;
                return l(
                  n.getFeatures(),
                  null === (t = e.options) || void 0 === t ? void 0 : t.features,
                );
              },
            },
            f = e.label === r.FieldDescriptorProto_Label.REPEATED;
          switch (e.type) {
            case r.FieldDescriptorProto_Type.MESSAGE:
            case r.FieldDescriptorProto_Type.GROUP: {
              (0, o.assert)(e.typeName, "invalid FieldDescriptorProto: missing type_name");
              const t = i.mapEntries.get(S(e.typeName));
              if (void 0 !== t)
                return (
                  (0, o.assert)(
                    f,
                    "invalid FieldDescriptorProto: expected map entry to be repeated",
                  ),
                  Object.assign(
                    Object.assign(Object.assign({}, d), {
                      kind: "field",
                      fieldKind: "map",
                      repeated: !1,
                    }),
                    (function (e) {
                      var t, n;
                      ((0, o.assert)(
                        null === (t = e.proto.options) || void 0 === t ? void 0 : t.mapEntry,
                        `invalid DescriptorProto: expected ${e.toString()} to be a map entry`,
                      ),
                        (0, o.assert)(
                          2 === e.fields.length,
                          `invalid DescriptorProto: map entry ${e.toString()} has ${e.fields.length} fields`,
                        ));
                      const r = e.fields.find((e) => 1 === e.proto.number);
                      (0, o.assert)(
                        r,
                        `invalid DescriptorProto: map entry ${e.toString()} is missing key field`,
                      );
                      const a = r.scalar;
                      (0, o.assert)(
                        void 0 !== a &&
                          a !== u.ScalarType.BYTES &&
                          a !== u.ScalarType.FLOAT &&
                          a !== u.ScalarType.DOUBLE,
                        `invalid DescriptorProto: map entry ${e.toString()} has unexpected key type ${null !== (n = r.proto.type) && void 0 !== n ? n : -1}`,
                      );
                      const s = e.fields.find((e) => 2 === e.proto.number);
                      switch (
                        ((0, o.assert)(
                          s,
                          `invalid DescriptorProto: map entry ${e.toString()} is missing value field`,
                        ),
                        s.fieldKind)
                      ) {
                        case "scalar":
                          return {
                            mapKey: a,
                            mapValue: Object.assign(Object.assign({}, s), { kind: "scalar" }),
                          };
                        case "message":
                          return {
                            mapKey: a,
                            mapValue: Object.assign(Object.assign({}, s), { kind: "message" }),
                          };
                        case "enum":
                          return {
                            mapKey: a,
                            mapValue: Object.assign(Object.assign({}, s), { kind: "enum" }),
                          };
                        default:
                          throw new Error(
                            "invalid DescriptorProto: unsupported map entry value field",
                          );
                      }
                    })(t),
                  )
                );
              const n = i.messages.get(S(e.typeName));
              return (
                (0, o.assert)(
                  void 0 !== n,
                  `invalid FieldDescriptorProto: type_name ${e.typeName} not found`,
                ),
                Object.assign(Object.assign({}, d), {
                  kind: "field",
                  fieldKind: "message",
                  repeated: f,
                  message: n,
                })
              );
            }
            case r.FieldDescriptorProto_Type.ENUM: {
              (0, o.assert)(e.typeName, "invalid FieldDescriptorProto: missing type_name");
              const t = i.enums.get(S(e.typeName));
              return (
                (0, o.assert)(
                  void 0 !== t,
                  `invalid FieldDescriptorProto: type_name ${e.typeName} not found`,
                ),
                Object.assign(Object.assign({}, d), {
                  kind: "field",
                  fieldKind: "enum",
                  getDefaultValue: R,
                  repeated: f,
                  enum: t,
                })
              );
            }
            default: {
              const t = v[e.type];
              return (
                (0, o.assert)(t, `invalid FieldDescriptorProto: unknown type ${e.type}`),
                Object.assign(Object.assign({}, d), {
                  kind: "field",
                  fieldKind: "scalar",
                  getDefaultValue: R,
                  repeated: f,
                  scalar: t,
                  longType:
                    (null === (p = e.options) || void 0 === p ? void 0 : p.jstype) ==
                    r.FieldOptions_JSType.JS_STRING
                      ? u.LongType.STRING
                      : u.LongType.BIGINT,
                })
              );
            }
          }
        }
        function h(e, t, n, r, a) {
          (0, o.assert)(e.extendee, "invalid FieldDescriptorProto: missing extendee");
          const s = y(e, t, null, void 0, r, a),
            i = r.messages.get(S(e.extendee));
          return (
            (0, o.assert)(i, `invalid FieldDescriptorProto: extendee ${e.extendee} not found`),
            Object.assign(Object.assign({}, s), {
              kind: "extension",
              typeName: I(e, n, t),
              parent: n,
              file: t,
              extendee: i,
              toString() {
                return `extension ${this.typeName}`;
              },
              getComments() {
                const n = this.parent
                  ? [
                      ...this.parent.getComments().sourcePath,
                      F.DescriptorProto_Extension,
                      this.parent.proto.extension.indexOf(e),
                    ]
                  : [F.FileDescriptorProto_Extension, this.file.proto.extension.indexOf(e)];
                return P(t.proto.sourceCodeInfo, n);
              },
              getFeatures() {
                var r;
                return a(
                  (null != n ? n : t).getFeatures(),
                  null === (r = e.options) || void 0 === r ? void 0 : r.features,
                );
              },
            })
          );
        }
        function N(e, t) {
          let n, o;
          switch (e) {
            case void 0:
            case "proto2":
              ((o = "proto2"), (n = r.Edition.EDITION_PROTO2));
              break;
            case "proto3":
              ((o = "proto3"), (n = r.Edition.EDITION_PROTO3));
              break;
            case "editions":
              switch (((o = "editions"), t)) {
                case void 0:
                case r.Edition.EDITION_1_TEST_ONLY:
                case r.Edition.EDITION_2_TEST_ONLY:
                case r.Edition.EDITION_99997_TEST_ONLY:
                case r.Edition.EDITION_99998_TEST_ONLY:
                case r.Edition.EDITION_99999_TEST_ONLY:
                case r.Edition.EDITION_UNKNOWN:
                  n = r.Edition.EDITION_UNKNOWN;
                  break;
                default:
                  n = t;
              }
              break;
            default:
              throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${e}`);
          }
          if ("editions" === e && t === r.Edition.EDITION_UNKNOWN)
            throw new Error(
              `invalid FileDescriptorProto: syntax ${e} cannot have edition ${String(t)}`,
            );
          return { syntax: o, edition: n };
        }
        function _(e, t) {
          return e.dependency.map((e) => {
            const n = t.files.find((t) => t.proto.name === e);
            return ((0, o.assert)(n), n);
          });
        }
        function I(e, t, n) {
          let r;
          return (
            (0, o.assert)(e.name, `invalid ${e.getType().typeName}: missing name`),
            (r = t
              ? `${t.typeName}.${e.name}`
              : void 0 !== n.proto.package
                ? `${n.proto.package}.${e.name}`
                : `${e.name}`),
            r
          );
        }
        function S(e) {
          return e.startsWith(".") ? e.substring(1) : e;
        }
        function w(e, t) {
          var n;
          const r = e.oneofIndex;
          if (void 0 === r) return;
          let a;
          return (
            !0 !== e.proto3Optional &&
              ((a = t[r]),
              (0, o.assert)(
                a,
                `invalid FieldDescriptorProto: oneof #${r} for field #${null !== (n = e.number) && void 0 !== n ? n : -1} not found`,
              )),
            a
          );
        }
        function O(e, t) {
          switch (t) {
            case "proto2":
              return void 0 === e.oneofIndex && e.label === r.FieldDescriptorProto_Label.OPTIONAL;
            case "proto3":
              return !0 === e.proto3Optional;
            case "editions":
              return !1;
          }
        }
        function b(e, t) {
          const { repeatedFieldEncoding: n } = t();
          if (n != r.FeatureSet_RepeatedFieldEncoding.PACKED) return !1;
          switch (e.type) {
            case r.FieldDescriptorProto_Type.STRING:
            case r.FieldDescriptorProto_Type.BYTES:
            case r.FieldDescriptorProto_Type.GROUP:
            case r.FieldDescriptorProto_Type.MESSAGE:
              return !1;
            default:
              return !0;
          }
        }
        function k(e, t, n, o) {
          var a, s, i, l, u, c;
          switch (n.type) {
            case r.FieldDescriptorProto_Type.STRING:
            case r.FieldDescriptorProto_Type.BYTES:
            case r.FieldDescriptorProto_Type.GROUP:
            case r.FieldDescriptorProto_Type.MESSAGE:
              return !1;
            default:
              switch (e.edition) {
                case r.Edition.EDITION_PROTO2:
                  return (
                    null !== (s = null === (a = n.options) || void 0 === a ? void 0 : a.packed) &&
                    void 0 !== s &&
                    s
                  );
                case r.Edition.EDITION_PROTO3:
                  return (
                    null === (l = null === (i = n.options) || void 0 === i ? void 0 : i.packed) ||
                    void 0 === l ||
                    l
                  );
                default: {
                  const { repeatedFieldEncoding: a } = o(
                    null !== (u = null == t ? void 0 : t.getFeatures()) && void 0 !== u
                      ? u
                      : e.getFeatures(),
                    null === (c = n.options) || void 0 === c ? void 0 : c.features,
                  );
                  return a == r.FeatureSet_RepeatedFieldEncoding.PACKED;
                }
              }
          }
        }
        t.createDescriptorSet = function (e, t) {
          var n;
          const o = {
              files: [],
              enums: new Map(),
              messages: new Map(),
              services: new Map(),
              extensions: new Map(),
              mapEntries: new Map(),
            },
            a = (0, c.isMessage)(e, r.FileDescriptorSet)
              ? e.file
              : e instanceof Uint8Array
                ? r.FileDescriptorSet.fromBinary(e).file
                : e,
            s = new Map();
          for (const e of a) {
            const r = null !== (n = e.edition) && void 0 !== n ? n : N(e.syntax, e.edition).edition;
            let a = s.get(r);
            (void 0 === a &&
              ((a = (0, l.createFeatureResolver)(
                r,
                null == t ? void 0 : t.featureSetDefaults,
                null == t ? void 0 : t.serializationOptions,
              )),
              s.set(r, a)),
              m(e, o, a));
          }
          return o;
        };
        const v = {
          [r.FieldDescriptorProto_Type.DOUBLE]: u.ScalarType.DOUBLE,
          [r.FieldDescriptorProto_Type.FLOAT]: u.ScalarType.FLOAT,
          [r.FieldDescriptorProto_Type.INT64]: u.ScalarType.INT64,
          [r.FieldDescriptorProto_Type.UINT64]: u.ScalarType.UINT64,
          [r.FieldDescriptorProto_Type.INT32]: u.ScalarType.INT32,
          [r.FieldDescriptorProto_Type.FIXED64]: u.ScalarType.FIXED64,
          [r.FieldDescriptorProto_Type.FIXED32]: u.ScalarType.FIXED32,
          [r.FieldDescriptorProto_Type.BOOL]: u.ScalarType.BOOL,
          [r.FieldDescriptorProto_Type.STRING]: u.ScalarType.STRING,
          [r.FieldDescriptorProto_Type.GROUP]: void 0,
          [r.FieldDescriptorProto_Type.MESSAGE]: void 0,
          [r.FieldDescriptorProto_Type.BYTES]: u.ScalarType.BYTES,
          [r.FieldDescriptorProto_Type.UINT32]: u.ScalarType.UINT32,
          [r.FieldDescriptorProto_Type.ENUM]: void 0,
          [r.FieldDescriptorProto_Type.SFIXED32]: u.ScalarType.SFIXED32,
          [r.FieldDescriptorProto_Type.SFIXED64]: u.ScalarType.SFIXED64,
          [r.FieldDescriptorProto_Type.SINT32]: u.ScalarType.SINT32,
          [r.FieldDescriptorProto_Type.SINT64]: u.ScalarType.SINT64,
        };
        function P(e, t) {
          if (!e) return { leadingDetached: [], sourcePath: t };
          for (const n of e.location)
            if (n.path.length === t.length && !n.path.some((e, n) => t[n] !== e))
              return {
                leadingDetached: n.leadingDetachedComments,
                leading: n.leadingComments,
                trailing: n.trailingComments,
                sourcePath: t,
              };
          return { leadingDetached: [], sourcePath: t };
        }
        var F;
        function D() {
          var e, t, n;
          const o = [];
          (this.repeated && o.push("repeated"), this.optional && o.push("optional"));
          let a;
          switch (
            ("proto2" == ("extension" === this.kind ? this.file : this.parent.file).syntax &&
              this.proto.label === r.FieldDescriptorProto_Label.REQUIRED &&
              o.push("required"),
            this.fieldKind)
          ) {
            case "scalar":
              a = u.ScalarType[this.scalar].toLowerCase();
              break;
            case "enum":
              a = this.enum.typeName;
              break;
            case "message":
              a = this.message.typeName;
              break;
            case "map": {
              const e = u.ScalarType[this.mapKey].toLowerCase();
              let t;
              switch (this.mapValue.kind) {
                case "scalar":
                  t = u.ScalarType[this.mapValue.scalar].toLowerCase();
                  break;
                case "enum":
                  t = this.mapValue.enum.typeName;
                  break;
                case "message":
                  t = this.mapValue.message.typeName;
              }
              a = `map<${e}, ${t}>`;
              break;
            }
          }
          o.push(`${a} ${this.name} = ${this.number}`);
          const s = [];
          void 0 !== (null === (e = this.proto.options) || void 0 === e ? void 0 : e.packed) &&
            s.push(`packed = ${this.proto.options.packed.toString()}`);
          let i = this.proto.defaultValue;
          return (
            void 0 !== i &&
              ((this.proto.type != r.FieldDescriptorProto_Type.BYTES &&
                this.proto.type != r.FieldDescriptorProto_Type.STRING) ||
                (i = '"' + i.replace('"', '\\"') + '"'),
              s.push(`default = ${i}`)),
            void 0 !== this.jsonName && s.push(`json_name = "${this.jsonName}"`),
            void 0 !== (null === (t = this.proto.options) || void 0 === t ? void 0 : t.jstype) &&
              s.push(`jstype = ${r.FieldOptions_JSType[this.proto.options.jstype]}`),
            !0 === (null === (n = this.proto.options) || void 0 === n ? void 0 : n.deprecated) &&
              s.push("deprecated = true"),
            s.length > 0 && o.push("[" + s.join(", ") + "]"),
            o.join(" ")
          );
        }
        function R() {
          const e = this.proto.defaultValue;
          if (void 0 !== e)
            switch (this.fieldKind) {
              case "enum":
                return (0, i.parseTextFormatEnumValue)(this.enum, e);
              case "scalar":
                return (0, i.parseTextFormatScalarValue)(this.scalar, e);
              default:
                return;
            }
        }
        !(function (e) {
          ((e[(e.FileDescriptorProto_Package = 2)] = "FileDescriptorProto_Package"),
            (e[(e.FileDescriptorProto_MessageType = 4)] = "FileDescriptorProto_MessageType"),
            (e[(e.FileDescriptorProto_EnumType = 5)] = "FileDescriptorProto_EnumType"),
            (e[(e.FileDescriptorProto_Service = 6)] = "FileDescriptorProto_Service"),
            (e[(e.FileDescriptorProto_Extension = 7)] = "FileDescriptorProto_Extension"),
            (e[(e.FileDescriptorProto_Syntax = 12)] = "FileDescriptorProto_Syntax"),
            (e[(e.DescriptorProto_Field = 2)] = "DescriptorProto_Field"),
            (e[(e.DescriptorProto_NestedType = 3)] = "DescriptorProto_NestedType"),
            (e[(e.DescriptorProto_EnumType = 4)] = "DescriptorProto_EnumType"),
            (e[(e.DescriptorProto_Extension = 6)] = "DescriptorProto_Extension"),
            (e[(e.DescriptorProto_OneofDecl = 8)] = "DescriptorProto_OneofDecl"),
            (e[(e.EnumDescriptorProto_Value = 2)] = "EnumDescriptorProto_Value"),
            (e[(e.ServiceDescriptorProto_Method = 2)] = "ServiceDescriptorProto_Method"));
        })(F || (F = {}));
      },
      141: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.writeMapEntry = t.makeBinaryFormat = void 0));
        const r = n(831),
          o = n(212),
          a = n(455),
          s = n(98),
          i = n(803),
          l = n(408),
          u = n(706),
          c = Symbol("@bufbuild/protobuf/unknown-fields"),
          m = { readUnknownFields: !0, readerFactory: (e) => new r.BinaryReader(e) },
          p = { writeUnknownFields: !0, writerFactory: () => new r.BinaryWriter() };
        function d(e) {
          return e ? Object.assign(Object.assign({}, m), e) : m;
        }
        function f(e) {
          return e ? Object.assign(Object.assign({}, p), e) : p;
        }
        function T(e, t, n, o, s) {
          let { repeated: i, localName: c } = n;
          switch (
            (n.oneof &&
              ((e = e[n.oneof.localName]).case != c && delete e.value, (e.case = c), (c = "value")),
            n.kind)
          ) {
            case "scalar":
            case "enum":
              const m = "enum" == n.kind ? l.ScalarType.INT32 : n.T;
              let p = y;
              if (("scalar" == n.kind && n.L > 0 && (p = E), i)) {
                let n = e[c];
                if (
                  o == r.WireType.LengthDelimited &&
                  m != l.ScalarType.STRING &&
                  m != l.ScalarType.BYTES
                ) {
                  let e = t.uint32() + t.pos;
                  for (; t.pos < e;) n.push(p(t, m));
                } else n.push(p(t, m));
              } else e[c] = p(t, m);
              break;
            case "message":
              const d = n.T;
              i
                ? e[c].push(g(t, new d(), s, n))
                : (0, u.isMessage)(e[c])
                  ? g(t, e[c], s, n)
                  : ((e[c] = g(t, new d(), s, n)),
                    !d.fieldWrapper ||
                      n.oneof ||
                      n.repeated ||
                      (e[c] = d.fieldWrapper.unwrapField(e[c])));
              break;
            case "map":
              let [f, T] = (function (e, t, n) {
                const r = t.uint32(),
                  o = t.pos + r;
                let s, i;
                for (; t.pos < o;) {
                  const [r] = t.tag();
                  switch (r) {
                    case 1:
                      s = y(t, e.K);
                      break;
                    case 2:
                      switch (e.V.kind) {
                        case "scalar":
                          i = y(t, e.V.T);
                          break;
                        case "enum":
                          i = t.int32();
                          break;
                        case "message":
                          i = g(t, new e.V.T(), n, void 0);
                      }
                  }
                }
                void 0 === s && (s = (0, a.scalarZeroValue)(e.K, l.LongType.BIGINT));
                "string" != typeof s && "number" != typeof s && (s = s.toString());
                if (void 0 === i)
                  switch (e.V.kind) {
                    case "scalar":
                      i = (0, a.scalarZeroValue)(e.V.T, l.LongType.BIGINT);
                      break;
                    case "enum":
                      i = e.V.T.values[0].no;
                      break;
                    case "message":
                      i = new e.V.T();
                  }
                return [s, i];
              })(n, t, s);
              e[c][f] = T;
          }
        }
        function g(e, t, n, r) {
          const o = t.getType().runtime.bin,
            a = null == r ? void 0 : r.delimited;
          return (o.readMessage(t, e, a ? r.no : e.uint32(), n, a), t);
        }
        function E(e, t) {
          const n = y(e, t);
          return "bigint" == typeof n ? n.toString() : n;
        }
        function y(e, t) {
          switch (t) {
            case l.ScalarType.STRING:
              return e.string();
            case l.ScalarType.BOOL:
              return e.bool();
            case l.ScalarType.DOUBLE:
              return e.double();
            case l.ScalarType.FLOAT:
              return e.float();
            case l.ScalarType.INT32:
              return e.int32();
            case l.ScalarType.INT64:
              return e.int64();
            case l.ScalarType.UINT64:
              return e.uint64();
            case l.ScalarType.FIXED64:
              return e.fixed64();
            case l.ScalarType.BYTES:
              return e.bytes();
            case l.ScalarType.FIXED32:
              return e.fixed32();
            case l.ScalarType.SFIXED32:
              return e.sfixed32();
            case l.ScalarType.SFIXED64:
              return e.sfixed64();
            case l.ScalarType.SINT64:
              return e.sint64();
            case l.ScalarType.UINT32:
              return e.uint32();
            case l.ScalarType.SINT32:
              return e.sint32();
          }
        }
        function h(e, t, n, o) {
          (0, s.assert)(void 0 !== t);
          const a = e.repeated;
          switch (e.kind) {
            case "scalar":
            case "enum":
              let i = "enum" == e.kind ? l.ScalarType.INT32 : e.T;
              if (a)
                if (((0, s.assert)(Array.isArray(t)), e.packed))
                  !(function (e, t, n, o) {
                    if (!o.length) return;
                    e.tag(n, r.WireType.LengthDelimited).fork();
                    let [, a] = S(t);
                    for (let t = 0; t < o.length; t++) e[a](o[t]);
                    e.join();
                  })(n, i, e.no, t);
                else for (const r of t) I(n, i, e.no, r);
              else I(n, i, e.no, t);
              break;
            case "message":
              if (a) {
                (0, s.assert)(Array.isArray(t));
                for (const r of t) _(n, o, e, r);
              } else _(n, o, e, t);
              break;
            case "map":
              (0, s.assert)("object" == typeof t && null != t);
              for (const [r, a] of Object.entries(t)) N(n, o, e, r, a);
          }
        }
        function N(e, t, n, o, a) {
          (e.tag(n.no, r.WireType.LengthDelimited), e.fork());
          let i = o;
          switch (n.K) {
            case l.ScalarType.INT32:
            case l.ScalarType.FIXED32:
            case l.ScalarType.UINT32:
            case l.ScalarType.SFIXED32:
            case l.ScalarType.SINT32:
              i = Number.parseInt(o);
              break;
            case l.ScalarType.BOOL:
              ((0, s.assert)("true" == o || "false" == o), (i = "true" == o));
          }
          switch ((I(e, n.K, 1, i), n.V.kind)) {
            case "scalar":
              I(e, n.V.T, 2, a);
              break;
            case "enum":
              I(e, l.ScalarType.INT32, 2, a);
              break;
            case "message":
              ((0, s.assert)(void 0 !== a),
                e.tag(2, r.WireType.LengthDelimited).bytes(a.toBinary(t)));
          }
          e.join();
        }
        function _(e, t, n, a) {
          const s = (0, o.wrapField)(n.T, a);
          n.delimited
            ? e.tag(n.no, r.WireType.StartGroup).raw(s.toBinary(t)).tag(n.no, r.WireType.EndGroup)
            : e.tag(n.no, r.WireType.LengthDelimited).bytes(s.toBinary(t));
        }
        function I(e, t, n, r) {
          (0, s.assert)(void 0 !== r);
          let [o, a] = S(t);
          e.tag(n, o)[a](r);
        }
        function S(e) {
          let t = r.WireType.Varint;
          switch (e) {
            case l.ScalarType.BYTES:
            case l.ScalarType.STRING:
              t = r.WireType.LengthDelimited;
              break;
            case l.ScalarType.DOUBLE:
            case l.ScalarType.FIXED64:
            case l.ScalarType.SFIXED64:
              t = r.WireType.Bit64;
              break;
            case l.ScalarType.FIXED32:
            case l.ScalarType.SFIXED32:
            case l.ScalarType.FLOAT:
              t = r.WireType.Bit32;
          }
          return [t, l.ScalarType[e].toLowerCase()];
        }
        ((t.makeBinaryFormat = function () {
          return {
            makeReadOptions: d,
            makeWriteOptions: f,
            listUnknownFields(e) {
              var t;
              return null !== (t = e[c]) && void 0 !== t ? t : [];
            },
            discardUnknownFields(e) {
              delete e[c];
            },
            writeUnknownFields(e, t) {
              const n = e[c];
              if (n) for (const e of n) t.tag(e.no, e.wireType).raw(e.data);
            },
            onUnknownField(e, t, n, r) {
              const o = e;
              (Array.isArray(o[c]) || (o[c] = []), o[c].push({ no: t, wireType: n, data: r }));
            },
            readMessage(e, t, n, o, a) {
              const s = e.getType(),
                i = a ? t.len : t.pos + n;
              let l, u;
              for (; t.pos < i && (([l, u] = t.tag()), !0 !== a || u != r.WireType.EndGroup);) {
                const n = s.fields.find(l);
                if (!n) {
                  const n = t.skip(u, l);
                  o.readUnknownFields && this.onUnknownField(e, l, u, n);
                  continue;
                }
                T(e, t, n, u, o);
              }
              if (a && (u != r.WireType.EndGroup || l !== n))
                throw new Error("invalid end group tag");
            },
            readField: T,
            writeMessage(e, t, n) {
              const r = e.getType();
              for (const o of r.fields.byNumber()) {
                if (!(0, i.isFieldSet)(o, e)) {
                  if (o.req)
                    throw new Error(
                      `cannot encode field ${r.typeName}.${o.name} to binary: required field not set`,
                    );
                  continue;
                }
                h(o, o.oneof ? e[o.oneof.localName].value : e[o.localName], t, n);
              }
              return (n.writeUnknownFields && this.writeUnknownFields(e, t), t);
            },
            writeField(e, t, n, r) {
              void 0 !== t && h(e, t, n, r);
            },
          };
        }),
          (t.writeMapEntry = N));
      },
      174: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.toPlainMessage = void 0));
        const r = n(706);
        function o(e) {
          if (!(0, r.isMessage)(e)) return e;
          const t = e.getType(),
            n = {};
          for (const r of t.fields.byMember()) {
            const t = e[r.localName];
            let o;
            if (r.repeated) o = t.map((e) => a(e));
            else if ("map" == r.kind) {
              o = {};
              for (const [e, n] of Object.entries(t)) o[e] = a(n);
            } else if ("oneof" == r.kind) {
              o = r.findField(t.case) ? { case: t.case, value: a(t.value) } : { case: void 0 };
            } else o = a(t);
            n[r.localName] = o;
          }
          return n;
        }
        function a(e) {
          if (void 0 === e) return e;
          if ((0, r.isMessage)(e)) return o(e);
          if (e instanceof Uint8Array) {
            const t = new Uint8Array(e.byteLength);
            return (t.set(e), t);
          }
          return e;
        }
        t.toPlainMessage = o;
      },
      186: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.InternalOneofInfo = void 0));
        const r = n(822),
          o = n(98);
        t.InternalOneofInfo = class {
          constructor(e) {
            ((this.kind = "oneof"),
              (this.repeated = !1),
              (this.packed = !1),
              (this.opt = !1),
              (this.req = !1),
              (this.default = void 0),
              (this.fields = []),
              (this.name = e),
              (this.localName = (0, r.localOneofName)(e)));
          }
          addField(e) {
            ((0, o.assert)(e.oneof === this, `field ${e.name} not one of ${this.name}`),
              this.fields.push(e));
          }
          findField(e) {
            if (!this._lookup) {
              this._lookup = Object.create(null);
              for (let e = 0; e < this.fields.length; e++)
                this._lookup[this.fields[e].localName] = this.fields[e];
            }
            return this._lookup[e];
          }
        };
      },
      193: (e, t) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.Message = void 0));
        t.Message = class {
          equals(e) {
            return this.getType().runtime.util.equals(this.getType(), this, e);
          }
          clone() {
            return this.getType().runtime.util.clone(this);
          }
          fromBinary(e, t) {
            const n = this.getType().runtime.bin,
              r = n.makeReadOptions(t);
            return (n.readMessage(this, r.readerFactory(e), e.byteLength, r), this);
          }
          fromJson(e, t) {
            const n = this.getType(),
              r = n.runtime.json,
              o = r.makeReadOptions(t);
            return (r.readMessage(n, e, o, this), this);
          }
          fromJsonString(e, t) {
            let n;
            try {
              n = JSON.parse(e);
            } catch (e) {
              throw new Error(
                `cannot decode ${this.getType().typeName} from JSON: ${e instanceof Error ? e.message : String(e)}`,
              );
            }
            return this.fromJson(n, t);
          }
          toBinary(e) {
            const t = this.getType().runtime.bin,
              n = t.makeWriteOptions(e),
              r = n.writerFactory();
            return (t.writeMessage(this, r, n), r.finish());
          }
          toJson(e) {
            const t = this.getType().runtime.json,
              n = t.makeWriteOptions(e);
            return t.writeMessage(this, n);
          }
          toJsonString(e) {
            var t;
            const n = this.toJson(e);
            return JSON.stringify(
              n,
              null,
              null !== (t = null == e ? void 0 : e.prettySpaces) && void 0 !== t ? t : 0,
            );
          }
          toJSON() {
            return this.toJson({ emitDefaultValues: !0 });
          }
          getType() {
            return Object.getPrototypeOf(this).constructor;
          }
        };
      },
      206: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.SourceContext = void 0));
        const r = n(193),
          o = n(599);
        class a extends r.Message {
          constructor(e) {
            (super(), (this.fileName = ""), o.proto3.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new a().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new a().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new a().fromJsonString(e, t);
          }
          static equals(e, t) {
            return o.proto3.util.equals(a, e, t);
          }
        }
        ((t.SourceContext = a),
          (a.runtime = o.proto3),
          (a.typeName = "google.protobuf.SourceContext"),
          (a.fields = o.proto3.util.newFieldList(() => [
            { no: 1, name: "file_name", kind: "scalar", T: 9 },
          ])));
      },
      212: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getUnwrappedFieldType = t.wrapField = void 0));
        const r = n(408),
          o = n(706);
        ((t.wrapField = function (e, t) {
          return (0, o.isMessage)(t) || !e.fieldWrapper ? t : e.fieldWrapper.wrapField(t);
        }),
          (t.getUnwrappedFieldType = function (e) {
            if ("message" === e.fieldKind && !e.repeated && null == e.oneof)
              return a[e.message.typeName];
          }));
        const a = {
          "google.protobuf.DoubleValue": r.ScalarType.DOUBLE,
          "google.protobuf.FloatValue": r.ScalarType.FLOAT,
          "google.protobuf.Int64Value": r.ScalarType.INT64,
          "google.protobuf.UInt64Value": r.ScalarType.UINT64,
          "google.protobuf.Int32Value": r.ScalarType.INT32,
          "google.protobuf.UInt32Value": r.ScalarType.UINT32,
          "google.protobuf.BoolValue": r.ScalarType.BOOL,
          "google.protobuf.StringValue": r.ScalarType.STRING,
          "google.protobuf.BytesValue": r.ScalarType.BYTES,
        };
      },
      228: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.normalizeFieldInfos = void 0));
        const r = n(186),
          o = n(822),
          a = n(408);
        t.normalizeFieldInfos = function (e, t) {
          var n, s, i, l, u, c;
          const m = [];
          let p;
          for (const d of "function" == typeof e ? e() : e) {
            const e = d;
            if (
              ((e.localName = (0, o.localFieldName)(d.name, void 0 !== d.oneof)),
              (e.jsonName =
                null !== (n = d.jsonName) && void 0 !== n ? n : (0, o.fieldJsonName)(d.name)),
              (e.repeated = null !== (s = d.repeated) && void 0 !== s && s),
              "scalar" == d.kind &&
                (e.L = null !== (i = d.L) && void 0 !== i ? i : a.LongType.BIGINT),
              (e.delimited = null !== (l = d.delimited) && void 0 !== l && l),
              (e.req = null !== (u = d.req) && void 0 !== u && u),
              (e.opt = null !== (c = d.opt) && void 0 !== c && c),
              void 0 === d.packed &&
                (e.packed =
                  !!t &&
                  ("enum" == d.kind ||
                    ("scalar" == d.kind &&
                      d.T != a.ScalarType.BYTES &&
                      d.T != a.ScalarType.STRING))),
              void 0 !== d.oneof)
            ) {
              const t = "string" == typeof d.oneof ? d.oneof : d.oneof.name;
              ((p && p.name == t) || (p = new r.InternalOneofInfo(t)),
                (e.oneof = p),
                p.addField(e));
            }
            m.push(e);
          }
          return m;
        };
      },
      245: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.Any = void 0));
        const r = n(193),
          o = n(599);
        class a extends r.Message {
          constructor(e) {
            (super(),
              (this.typeUrl = ""),
              (this.value = new Uint8Array(0)),
              o.proto3.util.initPartial(e, this));
          }
          toJson(e) {
            var t;
            if ("" === this.typeUrl) return {};
            const n = this.typeUrlToName(this.typeUrl),
              r =
                null === (t = null == e ? void 0 : e.typeRegistry) || void 0 === t
                  ? void 0
                  : t.findMessage(n);
            if (!r)
              throw new Error(
                `cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`,
              );
            let o = r.fromBinary(this.value).toJson(e);
            return (
              (n.startsWith("google.protobuf.") ||
                null === o ||
                Array.isArray(o) ||
                "object" != typeof o) &&
                (o = { value: o }),
              (o["@type"] = this.typeUrl),
              o
            );
          }
          fromJson(e, t) {
            var n;
            if (null === e || Array.isArray(e) || "object" != typeof e)
              throw new Error(
                "cannot decode message google.protobuf.Any from JSON: expected object but got " +
                  (null === e ? "null" : Array.isArray(e) ? "array" : typeof e),
              );
            if (0 == Object.keys(e).length) return this;
            const r = e["@type"];
            if ("string" != typeof r || "" == r)
              throw new Error(
                'cannot decode message google.protobuf.Any from JSON: "@type" is empty',
              );
            const o = this.typeUrlToName(r),
              a =
                null === (n = null == t ? void 0 : t.typeRegistry) || void 0 === n
                  ? void 0
                  : n.findMessage(o);
            if (!a)
              throw new Error(
                `cannot decode message google.protobuf.Any from JSON: ${r} is not in the type registry`,
              );
            let s;
            if (
              o.startsWith("google.protobuf.") &&
              Object.prototype.hasOwnProperty.call(e, "value")
            )
              s = a.fromJson(e.value, t);
            else {
              const n = Object.assign({}, e);
              (delete n["@type"], (s = a.fromJson(n, t)));
            }
            return (this.packFrom(s), this);
          }
          packFrom(e) {
            ((this.value = e.toBinary()),
              (this.typeUrl = this.typeNameToUrl(e.getType().typeName)));
          }
          unpackTo(e) {
            return !!this.is(e.getType()) && (e.fromBinary(this.value), !0);
          }
          unpack(e) {
            if ("" === this.typeUrl) return;
            const t = e.findMessage(this.typeUrlToName(this.typeUrl));
            return t ? t.fromBinary(this.value) : void 0;
          }
          is(e) {
            if ("" === this.typeUrl) return !1;
            const t = this.typeUrlToName(this.typeUrl);
            let n = "";
            return ((n = "string" == typeof e ? e : e.typeName), t === n);
          }
          typeNameToUrl(e) {
            return `type.googleapis.com/${e}`;
          }
          typeUrlToName(e) {
            if (!e.length) throw new Error(`invalid type url: ${e}`);
            const t = e.lastIndexOf("/"),
              n = t >= 0 ? e.substring(t + 1) : e;
            if (!n.length) throw new Error(`invalid type url: ${e}`);
            return n;
          }
          static pack(e) {
            const t = new a();
            return (t.packFrom(e), t);
          }
          static fromBinary(e, t) {
            return new a().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new a().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new a().fromJsonString(e, t);
          }
          static equals(e, t) {
            return o.proto3.util.equals(a, e, t);
          }
        }
        ((t.Any = a),
          (a.runtime = o.proto3),
          (a.typeName = "google.protobuf.Any"),
          (a.fields = o.proto3.util.newFieldList(() => [
            { no: 1, name: "type_url", kind: "scalar", T: 9 },
            { no: 2, name: "value", kind: "scalar", T: 12 },
          ])));
      },
      269: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createRegistryFromDescriptors = void 0));
        const r = n(98),
          o = n(599),
          a = n(291),
          s = n(822),
          i = n(907),
          l = n(574),
          u = n(245),
          c = n(668),
          m = n(970),
          p = n(814),
          d = n(609),
          f = n(21),
          T = n(374),
          g = n(101),
          E = n(706),
          y = [
            u.Any,
            l.Duration,
            c.Empty,
            m.FieldMask,
            p.Struct,
            p.Value,
            p.ListValue,
            i.Timestamp,
            l.Duration,
            f.DoubleValue,
            f.FloatValue,
            f.Int64Value,
            f.Int32Value,
            f.UInt32Value,
            f.UInt64Value,
            f.BoolValue,
            f.StringValue,
            f.BytesValue,
          ],
          h = [(0, d.getEnumType)(p.NullValue)];
        function N(e, t) {
          var n;
          const o = {
            kind: e.fieldKind,
            no: e.number,
            name: e.name,
            jsonName: e.jsonName,
            delimited: e.proto.type == T.FieldDescriptorProto_Type.GROUP,
            repeated: e.repeated,
            packed: e.packed,
            oneof: null === (n = e.oneof) || void 0 === n ? void 0 : n.name,
            opt: e.optional,
            req: e.proto.label === T.FieldDescriptorProto_Label.REQUIRED,
          };
          switch (e.fieldKind) {
            case "map": {
              let n;
              switch (((0, r.assert)("field" == e.kind), e.mapValue.kind)) {
                case "scalar":
                  n = e.mapValue.scalar;
                  break;
                case "enum":
                  n = _(e.mapValue.enum, t, e);
                  break;
                case "message":
                  n = _(e.mapValue.message, t, e);
              }
              ((o.K = e.mapKey), (o.V = { kind: e.mapValue.kind, T: n }));
              break;
            }
            case "message":
              o.T = _(e.message, t, e);
              break;
            case "enum":
              ((o.T = _(e.enum, t, e)), (o.default = e.getDefaultValue()));
              break;
            case "scalar":
              ((o.L = e.longType), (o.T = e.scalar), (o.default = e.getDefaultValue()));
          }
          return o;
        }
        function _(e, t, n) {
          const o = "message" == e.kind ? t.findMessage(e.typeName) : t.findEnum(e.typeName);
          return ((0, r.assert)(o, `${e.toString()}" for ${n.toString()} not found`), o);
        }
        t.createRegistryFromDescriptors = function (e, t = !0) {
          const n =
              e instanceof Uint8Array || (0, E.isMessage)(e, T.FileDescriptorSet)
                ? (0, g.createDescriptorSet)(e)
                : e,
            r = new Map(),
            i = new Map(),
            l = new Map(),
            u = new Map(),
            c = {};
          if (t) {
            for (const e of y) i.set(e.typeName, e);
            for (const e of h) r.set(e.typeName, e);
          }
          return {
            findEnum(e) {
              const t = r.get(e);
              if (t) return t;
              const i = n.enums.get(e);
              if (!i) return;
              const l = ("proto3" == i.file.syntax ? o.proto3 : a.proto2).makeEnumType(
                e,
                i.values.map((e) => ({
                  no: e.number,
                  name: e.name,
                  localName: (0, s.localName)(e),
                })),
                {},
              );
              return (r.set(e, l), l);
            },
            findMessage(e) {
              const t = i.get(e);
              if (t) return t;
              const r = n.messages.get(e);
              if (!r) return;
              const l = "proto3" == r.file.syntax ? o.proto3 : a.proto2,
                u = [],
                c = l.makeMessageType(e, () => u, { localName: (0, s.localName)(r) });
              i.set(e, c);
              for (const e of r.fields) u.push(N(e, this));
              return c;
            },
            findService(e) {
              const t = c[e];
              if (t) return t;
              const r = n.services.get(e);
              if (!r) return;
              const o = {};
              for (const e of r.methods) {
                const t = _(e.input, this, e),
                  n = _(e.output, this, e);
                o[(0, s.localName)(e)] = {
                  name: e.name,
                  I: t,
                  O: n,
                  kind: e.methodKind,
                  idempotency: e.idempotency,
                };
              }
              return (c[e] = { typeName: r.typeName, methods: o });
            },
            findExtensionFor(e, t) {
              var r;
              if (!n.messages.has(e)) return;
              let o = u.get(e);
              if (!o) {
                ((o = new Map()), u.set(e, o));
                for (const t of n.extensions.values())
                  t.extendee.typeName == e && o.set(t.number, t);
              }
              const a = null === (r = u.get(e)) || void 0 === r ? void 0 : r.get(t);
              return a ? this.findExtension(a.typeName) : void 0;
            },
            findExtension(e) {
              const t = l.get(e);
              if (t) return t;
              const r = n.extensions.get(e);
              if (!r) return;
              const s = _(r.extendee, this, r),
                i = ("proto3" == r.file.syntax ? o.proto3 : a.proto2).makeExtension(
                  e,
                  s,
                  N(r, this),
                );
              return (l.set(e, i), i);
            },
          };
        };
      },
      291: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.proto2 = void 0));
        const r = n(829),
          o = n(331),
          a = n(228);
        t.proto2 = (0, r.makeProtoRuntime)(
          "proto2",
          (e) => new o.InternalFieldList(e, (e) => (0, a.normalizeFieldInfos)(e, !1)),
          (e) => {
            for (const t of e.getType().fields.byMember()) {
              const n = t.localName,
                r = e;
              if (t.repeated) r[n] = [];
              else
                switch (t.kind) {
                  case "oneof":
                    r[n] = { case: void 0 };
                    break;
                  case "map":
                    r[n] = {};
                }
            }
          },
        );
      },
      301: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.createFeatureResolver = void 0));
        const r = n(374),
          o = n(526);
        t.createFeatureResolver = function (e, t, n) {
          var a;
          const s =
            null != t
              ? t
              : ((i = n),
                r.FeatureSetDefaults.fromBinary(
                  o.protoBase64.dec(
                    "ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH",
                  ),
                  i,
                ));
          var i;
          const l = s.minimumEdition,
            u = s.maximumEdition;
          if (void 0 === l || void 0 === u || s.defaults.some((e) => void 0 === e.edition))
            throw new Error("Invalid FeatureSetDefaults");
          if (e < l)
            throw new Error(
              `Edition ${r.Edition[e]} is earlier than the minimum supported edition ${r.Edition[l]}`,
            );
          if (u < e)
            throw new Error(
              `Edition ${r.Edition[e]} is later than the maximum supported edition ${r.Edition[u]}`,
            );
          let c;
          for (const t of s.defaults) {
            const n = null !== (a = t.edition) && void 0 !== a ? a : 0;
            if (n > e) continue;
            if (void 0 !== c && c.e > n) continue;
            let o;
            (t.fixedFeatures && t.overridableFeatures
              ? ((o = t.fixedFeatures), o.fromBinary(t.overridableFeatures.toBinary()))
              : (o = t.fixedFeatures
                  ? t.fixedFeatures
                  : t.overridableFeatures
                    ? t.overridableFeatures
                    : new r.FeatureSet()),
              (c = { e: n, f: o }));
          }
          if (void 0 === c) throw new Error(`No valid default found for edition ${r.Edition[e]}`);
          const m = c.f.toBinary(n);
          return (...t) => {
            const o = r.FeatureSet.fromBinary(m, n);
            for (const e of t) void 0 !== e && o.fromBinary(e.toBinary(n), n);
            if (
              !(function (e) {
                for (const t of r.FeatureSet.fields.list()) {
                  const n = e[t.localName];
                  if (void 0 === n) return !1;
                  if ("enum" == t.kind && 0 === n) return !1;
                }
                return !0;
              })(o)
            )
              throw new Error(`Invalid FeatureSet for edition ${r.Edition[e]}`);
            return o;
          };
        };
      },
      331: (e, t) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.InternalFieldList = void 0));
        t.InternalFieldList = class {
          constructor(e, t) {
            ((this._fields = e), (this._normalizer = t));
          }
          findJsonName(e) {
            if (!this.jsonNames) {
              const e = {};
              for (const t of this.list()) e[t.jsonName] = e[t.name] = t;
              this.jsonNames = e;
            }
            return this.jsonNames[e];
          }
          find(e) {
            if (!this.numbers) {
              const e = {};
              for (const t of this.list()) e[t.no] = t;
              this.numbers = e;
            }
            return this.numbers[e];
          }
          list() {
            return (this.all || (this.all = this._normalizer(this._fields)), this.all);
          }
          byNumber() {
            return (
              this.numbersAsc ||
                (this.numbersAsc = this.list()
                  .concat()
                  .sort((e, t) => e.no - t.no)),
              this.numbersAsc
            );
          }
          byMember() {
            if (!this.members) {
              this.members = [];
              const e = this.members;
              let t;
              for (const n of this.list())
                n.oneof ? n.oneof !== t && ((t = n.oneof), e.push(t)) : e.push(n);
            }
            return this.members;
          }
        };
      },
      374: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GeneratedCodeInfo_Annotation_Semantic =
            t.GeneratedCodeInfo_Annotation =
            t.GeneratedCodeInfo =
            t.SourceCodeInfo_Location =
            t.SourceCodeInfo =
            t.FeatureSetDefaults_FeatureSetEditionDefault =
            t.FeatureSetDefaults =
            t.FeatureSet_JsonFormat =
            t.FeatureSet_MessageEncoding =
            t.FeatureSet_Utf8Validation =
            t.FeatureSet_RepeatedFieldEncoding =
            t.FeatureSet_EnumType =
            t.FeatureSet_FieldPresence =
            t.FeatureSet =
            t.UninterpretedOption_NamePart =
            t.UninterpretedOption =
            t.MethodOptions_IdempotencyLevel =
            t.MethodOptions =
            t.ServiceOptions =
            t.EnumValueOptions =
            t.EnumOptions =
            t.OneofOptions =
            t.FieldOptions_FeatureSupport =
            t.FieldOptions_EditionDefault =
            t.FieldOptions_OptionTargetType =
            t.FieldOptions_OptionRetention =
            t.FieldOptions_JSType =
            t.FieldOptions_CType =
            t.FieldOptions =
            t.MessageOptions =
            t.FileOptions_OptimizeMode =
            t.FileOptions =
            t.MethodDescriptorProto =
            t.ServiceDescriptorProto =
            t.EnumValueDescriptorProto =
            t.EnumDescriptorProto_EnumReservedRange =
            t.EnumDescriptorProto =
            t.OneofDescriptorProto =
            t.FieldDescriptorProto_Label =
            t.FieldDescriptorProto_Type =
            t.FieldDescriptorProto =
            t.ExtensionRangeOptions_Declaration =
            t.ExtensionRangeOptions_VerificationState =
            t.ExtensionRangeOptions =
            t.DescriptorProto_ReservedRange =
            t.DescriptorProto_ExtensionRange =
            t.DescriptorProto =
            t.FileDescriptorProto =
            t.FileDescriptorSet =
            t.Edition =
              void 0));
        const r = n(291),
          o = n(193);
        var a, s, i, l, u, c, m, p, d, f, T, g, E, y, h, N, _;
        (!(function (e) {
          ((e[(e.EDITION_UNKNOWN = 0)] = "EDITION_UNKNOWN"),
            (e[(e.EDITION_LEGACY = 900)] = "EDITION_LEGACY"),
            (e[(e.EDITION_PROTO2 = 998)] = "EDITION_PROTO2"),
            (e[(e.EDITION_PROTO3 = 999)] = "EDITION_PROTO3"),
            (e[(e.EDITION_2023 = 1e3)] = "EDITION_2023"),
            (e[(e.EDITION_2024 = 1001)] = "EDITION_2024"),
            (e[(e.EDITION_1_TEST_ONLY = 1)] = "EDITION_1_TEST_ONLY"),
            (e[(e.EDITION_2_TEST_ONLY = 2)] = "EDITION_2_TEST_ONLY"),
            (e[(e.EDITION_99997_TEST_ONLY = 99997)] = "EDITION_99997_TEST_ONLY"),
            (e[(e.EDITION_99998_TEST_ONLY = 99998)] = "EDITION_99998_TEST_ONLY"),
            (e[(e.EDITION_99999_TEST_ONLY = 99999)] = "EDITION_99999_TEST_ONLY"),
            (e[(e.EDITION_MAX = 2147483647)] = "EDITION_MAX"));
        })(a || (t.Edition = a = {})),
          r.proto2.util.setEnumType(a, "google.protobuf.Edition", [
            { no: 0, name: "EDITION_UNKNOWN" },
            { no: 900, name: "EDITION_LEGACY" },
            { no: 998, name: "EDITION_PROTO2" },
            { no: 999, name: "EDITION_PROTO3" },
            { no: 1e3, name: "EDITION_2023" },
            { no: 1001, name: "EDITION_2024" },
            { no: 1, name: "EDITION_1_TEST_ONLY" },
            { no: 2, name: "EDITION_2_TEST_ONLY" },
            { no: 99997, name: "EDITION_99997_TEST_ONLY" },
            { no: 99998, name: "EDITION_99998_TEST_ONLY" },
            { no: 99999, name: "EDITION_99999_TEST_ONLY" },
            { no: 2147483647, name: "EDITION_MAX" },
          ]));
        class I extends o.Message {
          constructor(e) {
            (super(), (this.file = []), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new I().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new I().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new I().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(I, e, t);
          }
        }
        ((t.FileDescriptorSet = I),
          (I.runtime = r.proto2),
          (I.typeName = "google.protobuf.FileDescriptorSet"),
          (I.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "file", kind: "message", T: S, repeated: !0 },
          ])));
        class S extends o.Message {
          constructor(e) {
            (super(),
              (this.dependency = []),
              (this.publicDependency = []),
              (this.weakDependency = []),
              (this.messageType = []),
              (this.enumType = []),
              (this.service = []),
              (this.extension = []),
              r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new S().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new S().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new S().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(S, e, t);
          }
        }
        ((t.FileDescriptorProto = S),
          (S.runtime = r.proto2),
          (S.typeName = "google.protobuf.FileDescriptorProto"),
          (S.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
            { no: 2, name: "package", kind: "scalar", T: 9, opt: !0 },
            { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: !0 },
            { no: 10, name: "public_dependency", kind: "scalar", T: 5, repeated: !0 },
            { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: !0 },
            { no: 4, name: "message_type", kind: "message", T: w, repeated: !0 },
            { no: 5, name: "enum_type", kind: "message", T: D, repeated: !0 },
            { no: 6, name: "service", kind: "message", T: U, repeated: !0 },
            { no: 7, name: "extension", kind: "message", T: P, repeated: !0 },
            { no: 8, name: "options", kind: "message", T: L, opt: !0 },
            { no: 9, name: "source_code_info", kind: "message", T: H, opt: !0 },
            { no: 12, name: "syntax", kind: "scalar", T: 9, opt: !0 },
            { no: 14, name: "edition", kind: "enum", T: r.proto2.getEnumType(a), opt: !0 },
          ])));
        class w extends o.Message {
          constructor(e) {
            (super(),
              (this.field = []),
              (this.extension = []),
              (this.nestedType = []),
              (this.enumType = []),
              (this.extensionRange = []),
              (this.oneofDecl = []),
              (this.reservedRange = []),
              (this.reservedName = []),
              r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new w().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new w().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new w().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(w, e, t);
          }
        }
        ((t.DescriptorProto = w),
          (w.runtime = r.proto2),
          (w.typeName = "google.protobuf.DescriptorProto"),
          (w.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
            { no: 2, name: "field", kind: "message", T: P, repeated: !0 },
            { no: 6, name: "extension", kind: "message", T: P, repeated: !0 },
            { no: 3, name: "nested_type", kind: "message", T: w, repeated: !0 },
            { no: 4, name: "enum_type", kind: "message", T: D, repeated: !0 },
            { no: 5, name: "extension_range", kind: "message", T: O, repeated: !0 },
            { no: 8, name: "oneof_decl", kind: "message", T: F, repeated: !0 },
            { no: 7, name: "options", kind: "message", T: B, opt: !0 },
            { no: 9, name: "reserved_range", kind: "message", T: b, repeated: !0 },
            { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: !0 },
          ])));
        class O extends o.Message {
          constructor(e) {
            (super(), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new O().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new O().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new O().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(O, e, t);
          }
        }
        ((t.DescriptorProto_ExtensionRange = O),
          (O.runtime = r.proto2),
          (O.typeName = "google.protobuf.DescriptorProto.ExtensionRange"),
          (O.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "start", kind: "scalar", T: 5, opt: !0 },
            { no: 2, name: "end", kind: "scalar", T: 5, opt: !0 },
            { no: 3, name: "options", kind: "message", T: k, opt: !0 },
          ])));
        class b extends o.Message {
          constructor(e) {
            (super(), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new b().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new b().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new b().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(b, e, t);
          }
        }
        ((t.DescriptorProto_ReservedRange = b),
          (b.runtime = r.proto2),
          (b.typeName = "google.protobuf.DescriptorProto.ReservedRange"),
          (b.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "start", kind: "scalar", T: 5, opt: !0 },
            { no: 2, name: "end", kind: "scalar", T: 5, opt: !0 },
          ])));
        class k extends o.Message {
          constructor(e) {
            (super(),
              (this.uninterpretedOption = []),
              (this.declaration = []),
              r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new k().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new k().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new k().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(k, e, t);
          }
        }
        ((t.ExtensionRangeOptions = k),
          (k.runtime = r.proto2),
          (k.typeName = "google.protobuf.ExtensionRangeOptions"),
          (k.fields = r.proto2.util.newFieldList(() => [
            { no: 999, name: "uninterpreted_option", kind: "message", T: $, repeated: !0 },
            { no: 2, name: "declaration", kind: "message", T: v, repeated: !0 },
            { no: 50, name: "features", kind: "message", T: X, opt: !0 },
            {
              no: 3,
              name: "verification",
              kind: "enum",
              T: r.proto2.getEnumType(s),
              opt: !0,
              default: s.UNVERIFIED,
            },
          ])),
          (function (e) {
            ((e[(e.DECLARATION = 0)] = "DECLARATION"), (e[(e.UNVERIFIED = 1)] = "UNVERIFIED"));
          })(s || (t.ExtensionRangeOptions_VerificationState = s = {})),
          r.proto2.util.setEnumType(s, "google.protobuf.ExtensionRangeOptions.VerificationState", [
            { no: 0, name: "DECLARATION" },
            { no: 1, name: "UNVERIFIED" },
          ]));
        class v extends o.Message {
          constructor(e) {
            (super(), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new v().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new v().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new v().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(v, e, t);
          }
        }
        ((t.ExtensionRangeOptions_Declaration = v),
          (v.runtime = r.proto2),
          (v.typeName = "google.protobuf.ExtensionRangeOptions.Declaration"),
          (v.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "number", kind: "scalar", T: 5, opt: !0 },
            { no: 2, name: "full_name", kind: "scalar", T: 9, opt: !0 },
            { no: 3, name: "type", kind: "scalar", T: 9, opt: !0 },
            { no: 5, name: "reserved", kind: "scalar", T: 8, opt: !0 },
            { no: 6, name: "repeated", kind: "scalar", T: 8, opt: !0 },
          ])));
        class P extends o.Message {
          constructor(e) {
            (super(), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new P().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new P().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new P().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(P, e, t);
          }
        }
        ((t.FieldDescriptorProto = P),
          (P.runtime = r.proto2),
          (P.typeName = "google.protobuf.FieldDescriptorProto"),
          (P.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
            { no: 3, name: "number", kind: "scalar", T: 5, opt: !0 },
            { no: 4, name: "label", kind: "enum", T: r.proto2.getEnumType(l), opt: !0 },
            { no: 5, name: "type", kind: "enum", T: r.proto2.getEnumType(i), opt: !0 },
            { no: 6, name: "type_name", kind: "scalar", T: 9, opt: !0 },
            { no: 2, name: "extendee", kind: "scalar", T: 9, opt: !0 },
            { no: 7, name: "default_value", kind: "scalar", T: 9, opt: !0 },
            { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: !0 },
            { no: 10, name: "json_name", kind: "scalar", T: 9, opt: !0 },
            { no: 8, name: "options", kind: "message", T: M, opt: !0 },
            { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: !0 },
          ])),
          (function (e) {
            ((e[(e.DOUBLE = 1)] = "DOUBLE"),
              (e[(e.FLOAT = 2)] = "FLOAT"),
              (e[(e.INT64 = 3)] = "INT64"),
              (e[(e.UINT64 = 4)] = "UINT64"),
              (e[(e.INT32 = 5)] = "INT32"),
              (e[(e.FIXED64 = 6)] = "FIXED64"),
              (e[(e.FIXED32 = 7)] = "FIXED32"),
              (e[(e.BOOL = 8)] = "BOOL"),
              (e[(e.STRING = 9)] = "STRING"),
              (e[(e.GROUP = 10)] = "GROUP"),
              (e[(e.MESSAGE = 11)] = "MESSAGE"),
              (e[(e.BYTES = 12)] = "BYTES"),
              (e[(e.UINT32 = 13)] = "UINT32"),
              (e[(e.ENUM = 14)] = "ENUM"),
              (e[(e.SFIXED32 = 15)] = "SFIXED32"),
              (e[(e.SFIXED64 = 16)] = "SFIXED64"),
              (e[(e.SINT32 = 17)] = "SINT32"),
              (e[(e.SINT64 = 18)] = "SINT64"));
          })(i || (t.FieldDescriptorProto_Type = i = {})),
          r.proto2.util.setEnumType(i, "google.protobuf.FieldDescriptorProto.Type", [
            { no: 1, name: "TYPE_DOUBLE" },
            { no: 2, name: "TYPE_FLOAT" },
            { no: 3, name: "TYPE_INT64" },
            { no: 4, name: "TYPE_UINT64" },
            { no: 5, name: "TYPE_INT32" },
            { no: 6, name: "TYPE_FIXED64" },
            { no: 7, name: "TYPE_FIXED32" },
            { no: 8, name: "TYPE_BOOL" },
            { no: 9, name: "TYPE_STRING" },
            { no: 10, name: "TYPE_GROUP" },
            { no: 11, name: "TYPE_MESSAGE" },
            { no: 12, name: "TYPE_BYTES" },
            { no: 13, name: "TYPE_UINT32" },
            { no: 14, name: "TYPE_ENUM" },
            { no: 15, name: "TYPE_SFIXED32" },
            { no: 16, name: "TYPE_SFIXED64" },
            { no: 17, name: "TYPE_SINT32" },
            { no: 18, name: "TYPE_SINT64" },
          ]),
          (function (e) {
            ((e[(e.OPTIONAL = 1)] = "OPTIONAL"),
              (e[(e.REPEATED = 3)] = "REPEATED"),
              (e[(e.REQUIRED = 2)] = "REQUIRED"));
          })(l || (t.FieldDescriptorProto_Label = l = {})),
          r.proto2.util.setEnumType(l, "google.protobuf.FieldDescriptorProto.Label", [
            { no: 1, name: "LABEL_OPTIONAL" },
            { no: 3, name: "LABEL_REPEATED" },
            { no: 2, name: "LABEL_REQUIRED" },
          ]));
        class F extends o.Message {
          constructor(e) {
            (super(), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new F().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new F().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new F().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(F, e, t);
          }
        }
        ((t.OneofDescriptorProto = F),
          (F.runtime = r.proto2),
          (F.typeName = "google.protobuf.OneofDescriptorProto"),
          (F.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
            { no: 2, name: "options", kind: "message", T: C, opt: !0 },
          ])));
        class D extends o.Message {
          constructor(e) {
            (super(),
              (this.value = []),
              (this.reservedRange = []),
              (this.reservedName = []),
              r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new D().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new D().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new D().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(D, e, t);
          }
        }
        ((t.EnumDescriptorProto = D),
          (D.runtime = r.proto2),
          (D.typeName = "google.protobuf.EnumDescriptorProto"),
          (D.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
            { no: 2, name: "value", kind: "message", T: J, repeated: !0 },
            { no: 3, name: "options", kind: "message", T: j, opt: !0 },
            { no: 4, name: "reserved_range", kind: "message", T: R, repeated: !0 },
            { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: !0 },
          ])));
        class R extends o.Message {
          constructor(e) {
            (super(), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new R().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new R().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new R().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(R, e, t);
          }
        }
        ((t.EnumDescriptorProto_EnumReservedRange = R),
          (R.runtime = r.proto2),
          (R.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange"),
          (R.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "start", kind: "scalar", T: 5, opt: !0 },
            { no: 2, name: "end", kind: "scalar", T: 5, opt: !0 },
          ])));
        class J extends o.Message {
          constructor(e) {
            (super(), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new J().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new J().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new J().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(J, e, t);
          }
        }
        ((t.EnumValueDescriptorProto = J),
          (J.runtime = r.proto2),
          (J.typeName = "google.protobuf.EnumValueDescriptorProto"),
          (J.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
            { no: 2, name: "number", kind: "scalar", T: 5, opt: !0 },
            { no: 3, name: "options", kind: "message", T: V, opt: !0 },
          ])));
        class U extends o.Message {
          constructor(e) {
            (super(), (this.method = []), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new U().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new U().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new U().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(U, e, t);
          }
        }
        ((t.ServiceDescriptorProto = U),
          (U.runtime = r.proto2),
          (U.typeName = "google.protobuf.ServiceDescriptorProto"),
          (U.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
            { no: 2, name: "method", kind: "message", T: A, repeated: !0 },
            { no: 3, name: "options", kind: "message", T: G, opt: !0 },
          ])));
        class A extends o.Message {
          constructor(e) {
            (super(), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new A().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new A().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new A().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(A, e, t);
          }
        }
        ((t.MethodDescriptorProto = A),
          (A.runtime = r.proto2),
          (A.typeName = "google.protobuf.MethodDescriptorProto"),
          (A.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
            { no: 2, name: "input_type", kind: "scalar", T: 9, opt: !0 },
            { no: 3, name: "output_type", kind: "scalar", T: 9, opt: !0 },
            { no: 4, name: "options", kind: "message", T: q, opt: !0 },
            { no: 5, name: "client_streaming", kind: "scalar", T: 8, opt: !0, default: !1 },
            { no: 6, name: "server_streaming", kind: "scalar", T: 8, opt: !0, default: !1 },
          ])));
        class L extends o.Message {
          constructor(e) {
            (super(), (this.uninterpretedOption = []), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new L().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new L().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new L().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(L, e, t);
          }
        }
        ((t.FileOptions = L),
          (L.runtime = r.proto2),
          (L.typeName = "google.protobuf.FileOptions"),
          (L.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "java_package", kind: "scalar", T: 9, opt: !0 },
            { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: !0 },
            { no: 10, name: "java_multiple_files", kind: "scalar", T: 8, opt: !0, default: !1 },
            { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8, opt: !0 },
            { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8, opt: !0, default: !1 },
            {
              no: 9,
              name: "optimize_for",
              kind: "enum",
              T: r.proto2.getEnumType(u),
              opt: !0,
              default: u.SPEED,
            },
            { no: 11, name: "go_package", kind: "scalar", T: 9, opt: !0 },
            { no: 16, name: "cc_generic_services", kind: "scalar", T: 8, opt: !0, default: !1 },
            { no: 17, name: "java_generic_services", kind: "scalar", T: 8, opt: !0, default: !1 },
            { no: 18, name: "py_generic_services", kind: "scalar", T: 8, opt: !0, default: !1 },
            { no: 23, name: "deprecated", kind: "scalar", T: 8, opt: !0, default: !1 },
            { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8, opt: !0, default: !0 },
            { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: !0 },
            { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: !0 },
            { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: !0 },
            { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: !0 },
            { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: !0 },
            { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9, opt: !0 },
            { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: !0 },
            { no: 50, name: "features", kind: "message", T: X, opt: !0 },
            { no: 999, name: "uninterpreted_option", kind: "message", T: $, repeated: !0 },
          ])),
          (function (e) {
            ((e[(e.SPEED = 1)] = "SPEED"),
              (e[(e.CODE_SIZE = 2)] = "CODE_SIZE"),
              (e[(e.LITE_RUNTIME = 3)] = "LITE_RUNTIME"));
          })(u || (t.FileOptions_OptimizeMode = u = {})),
          r.proto2.util.setEnumType(u, "google.protobuf.FileOptions.OptimizeMode", [
            { no: 1, name: "SPEED" },
            { no: 2, name: "CODE_SIZE" },
            { no: 3, name: "LITE_RUNTIME" },
          ]));
        class B extends o.Message {
          constructor(e) {
            (super(), (this.uninterpretedOption = []), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new B().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new B().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new B().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(B, e, t);
          }
        }
        ((t.MessageOptions = B),
          (B.runtime = r.proto2),
          (B.typeName = "google.protobuf.MessageOptions"),
          (B.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "message_set_wire_format", kind: "scalar", T: 8, opt: !0, default: !1 },
            {
              no: 2,
              name: "no_standard_descriptor_accessor",
              kind: "scalar",
              T: 8,
              opt: !0,
              default: !1,
            },
            { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: !0, default: !1 },
            { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: !0 },
            {
              no: 11,
              name: "deprecated_legacy_json_field_conflicts",
              kind: "scalar",
              T: 8,
              opt: !0,
            },
            { no: 12, name: "features", kind: "message", T: X, opt: !0 },
            { no: 999, name: "uninterpreted_option", kind: "message", T: $, repeated: !0 },
          ])));
        class M extends o.Message {
          constructor(e) {
            (super(),
              (this.targets = []),
              (this.editionDefaults = []),
              (this.uninterpretedOption = []),
              r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new M().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new M().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new M().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(M, e, t);
          }
        }
        ((t.FieldOptions = M),
          (M.runtime = r.proto2),
          (M.typeName = "google.protobuf.FieldOptions"),
          (M.fields = r.proto2.util.newFieldList(() => [
            {
              no: 1,
              name: "ctype",
              kind: "enum",
              T: r.proto2.getEnumType(c),
              opt: !0,
              default: c.STRING,
            },
            { no: 2, name: "packed", kind: "scalar", T: 8, opt: !0 },
            {
              no: 6,
              name: "jstype",
              kind: "enum",
              T: r.proto2.getEnumType(m),
              opt: !0,
              default: m.JS_NORMAL,
            },
            { no: 5, name: "lazy", kind: "scalar", T: 8, opt: !0, default: !1 },
            { no: 15, name: "unverified_lazy", kind: "scalar", T: 8, opt: !0, default: !1 },
            { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: !0, default: !1 },
            { no: 10, name: "weak", kind: "scalar", T: 8, opt: !0, default: !1 },
            { no: 16, name: "debug_redact", kind: "scalar", T: 8, opt: !0, default: !1 },
            { no: 17, name: "retention", kind: "enum", T: r.proto2.getEnumType(p), opt: !0 },
            { no: 19, name: "targets", kind: "enum", T: r.proto2.getEnumType(d), repeated: !0 },
            { no: 20, name: "edition_defaults", kind: "message", T: x, repeated: !0 },
            { no: 21, name: "features", kind: "message", T: X, opt: !0 },
            { no: 22, name: "feature_support", kind: "message", T: Y, opt: !0 },
            { no: 999, name: "uninterpreted_option", kind: "message", T: $, repeated: !0 },
          ])),
          (function (e) {
            ((e[(e.STRING = 0)] = "STRING"),
              (e[(e.CORD = 1)] = "CORD"),
              (e[(e.STRING_PIECE = 2)] = "STRING_PIECE"));
          })(c || (t.FieldOptions_CType = c = {})),
          r.proto2.util.setEnumType(c, "google.protobuf.FieldOptions.CType", [
            { no: 0, name: "STRING" },
            { no: 1, name: "CORD" },
            { no: 2, name: "STRING_PIECE" },
          ]),
          (function (e) {
            ((e[(e.JS_NORMAL = 0)] = "JS_NORMAL"),
              (e[(e.JS_STRING = 1)] = "JS_STRING"),
              (e[(e.JS_NUMBER = 2)] = "JS_NUMBER"));
          })(m || (t.FieldOptions_JSType = m = {})),
          r.proto2.util.setEnumType(m, "google.protobuf.FieldOptions.JSType", [
            { no: 0, name: "JS_NORMAL" },
            { no: 1, name: "JS_STRING" },
            { no: 2, name: "JS_NUMBER" },
          ]),
          (function (e) {
            ((e[(e.RETENTION_UNKNOWN = 0)] = "RETENTION_UNKNOWN"),
              (e[(e.RETENTION_RUNTIME = 1)] = "RETENTION_RUNTIME"),
              (e[(e.RETENTION_SOURCE = 2)] = "RETENTION_SOURCE"));
          })(p || (t.FieldOptions_OptionRetention = p = {})),
          r.proto2.util.setEnumType(p, "google.protobuf.FieldOptions.OptionRetention", [
            { no: 0, name: "RETENTION_UNKNOWN" },
            { no: 1, name: "RETENTION_RUNTIME" },
            { no: 2, name: "RETENTION_SOURCE" },
          ]),
          (function (e) {
            ((e[(e.TARGET_TYPE_UNKNOWN = 0)] = "TARGET_TYPE_UNKNOWN"),
              (e[(e.TARGET_TYPE_FILE = 1)] = "TARGET_TYPE_FILE"),
              (e[(e.TARGET_TYPE_EXTENSION_RANGE = 2)] = "TARGET_TYPE_EXTENSION_RANGE"),
              (e[(e.TARGET_TYPE_MESSAGE = 3)] = "TARGET_TYPE_MESSAGE"),
              (e[(e.TARGET_TYPE_FIELD = 4)] = "TARGET_TYPE_FIELD"),
              (e[(e.TARGET_TYPE_ONEOF = 5)] = "TARGET_TYPE_ONEOF"),
              (e[(e.TARGET_TYPE_ENUM = 6)] = "TARGET_TYPE_ENUM"),
              (e[(e.TARGET_TYPE_ENUM_ENTRY = 7)] = "TARGET_TYPE_ENUM_ENTRY"),
              (e[(e.TARGET_TYPE_SERVICE = 8)] = "TARGET_TYPE_SERVICE"),
              (e[(e.TARGET_TYPE_METHOD = 9)] = "TARGET_TYPE_METHOD"));
          })(d || (t.FieldOptions_OptionTargetType = d = {})),
          r.proto2.util.setEnumType(d, "google.protobuf.FieldOptions.OptionTargetType", [
            { no: 0, name: "TARGET_TYPE_UNKNOWN" },
            { no: 1, name: "TARGET_TYPE_FILE" },
            { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" },
            { no: 3, name: "TARGET_TYPE_MESSAGE" },
            { no: 4, name: "TARGET_TYPE_FIELD" },
            { no: 5, name: "TARGET_TYPE_ONEOF" },
            { no: 6, name: "TARGET_TYPE_ENUM" },
            { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" },
            { no: 8, name: "TARGET_TYPE_SERVICE" },
            { no: 9, name: "TARGET_TYPE_METHOD" },
          ]));
        class x extends o.Message {
          constructor(e) {
            (super(), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new x().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new x().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new x().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(x, e, t);
          }
        }
        ((t.FieldOptions_EditionDefault = x),
          (x.runtime = r.proto2),
          (x.typeName = "google.protobuf.FieldOptions.EditionDefault"),
          (x.fields = r.proto2.util.newFieldList(() => [
            { no: 3, name: "edition", kind: "enum", T: r.proto2.getEnumType(a), opt: !0 },
            { no: 2, name: "value", kind: "scalar", T: 9, opt: !0 },
          ])));
        class Y extends o.Message {
          constructor(e) {
            (super(), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new Y().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new Y().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new Y().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(Y, e, t);
          }
        }
        ((t.FieldOptions_FeatureSupport = Y),
          (Y.runtime = r.proto2),
          (Y.typeName = "google.protobuf.FieldOptions.FeatureSupport"),
          (Y.fields = r.proto2.util.newFieldList(() => [
            {
              no: 1,
              name: "edition_introduced",
              kind: "enum",
              T: r.proto2.getEnumType(a),
              opt: !0,
            },
            {
              no: 2,
              name: "edition_deprecated",
              kind: "enum",
              T: r.proto2.getEnumType(a),
              opt: !0,
            },
            { no: 3, name: "deprecation_warning", kind: "scalar", T: 9, opt: !0 },
            { no: 4, name: "edition_removed", kind: "enum", T: r.proto2.getEnumType(a), opt: !0 },
          ])));
        class C extends o.Message {
          constructor(e) {
            (super(), (this.uninterpretedOption = []), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new C().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new C().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new C().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(C, e, t);
          }
        }
        ((t.OneofOptions = C),
          (C.runtime = r.proto2),
          (C.typeName = "google.protobuf.OneofOptions"),
          (C.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "features", kind: "message", T: X, opt: !0 },
            { no: 999, name: "uninterpreted_option", kind: "message", T: $, repeated: !0 },
          ])));
        class j extends o.Message {
          constructor(e) {
            (super(), (this.uninterpretedOption = []), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new j().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new j().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new j().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(j, e, t);
          }
        }
        ((t.EnumOptions = j),
          (j.runtime = r.proto2),
          (j.typeName = "google.protobuf.EnumOptions"),
          (j.fields = r.proto2.util.newFieldList(() => [
            { no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: !0 },
            { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: !0, default: !1 },
            {
              no: 6,
              name: "deprecated_legacy_json_field_conflicts",
              kind: "scalar",
              T: 8,
              opt: !0,
            },
            { no: 7, name: "features", kind: "message", T: X, opt: !0 },
            { no: 999, name: "uninterpreted_option", kind: "message", T: $, repeated: !0 },
          ])));
        class V extends o.Message {
          constructor(e) {
            (super(), (this.uninterpretedOption = []), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new V().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new V().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new V().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(V, e, t);
          }
        }
        ((t.EnumValueOptions = V),
          (V.runtime = r.proto2),
          (V.typeName = "google.protobuf.EnumValueOptions"),
          (V.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "deprecated", kind: "scalar", T: 8, opt: !0, default: !1 },
            { no: 2, name: "features", kind: "message", T: X, opt: !0 },
            { no: 3, name: "debug_redact", kind: "scalar", T: 8, opt: !0, default: !1 },
            { no: 4, name: "feature_support", kind: "message", T: Y, opt: !0 },
            { no: 999, name: "uninterpreted_option", kind: "message", T: $, repeated: !0 },
          ])));
        class G extends o.Message {
          constructor(e) {
            (super(), (this.uninterpretedOption = []), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new G().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new G().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new G().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(G, e, t);
          }
        }
        ((t.ServiceOptions = G),
          (G.runtime = r.proto2),
          (G.typeName = "google.protobuf.ServiceOptions"),
          (G.fields = r.proto2.util.newFieldList(() => [
            { no: 34, name: "features", kind: "message", T: X, opt: !0 },
            { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: !0, default: !1 },
            { no: 999, name: "uninterpreted_option", kind: "message", T: $, repeated: !0 },
          ])));
        class q extends o.Message {
          constructor(e) {
            (super(), (this.uninterpretedOption = []), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new q().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new q().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new q().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(q, e, t);
          }
        }
        ((t.MethodOptions = q),
          (q.runtime = r.proto2),
          (q.typeName = "google.protobuf.MethodOptions"),
          (q.fields = r.proto2.util.newFieldList(() => [
            { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: !0, default: !1 },
            {
              no: 34,
              name: "idempotency_level",
              kind: "enum",
              T: r.proto2.getEnumType(f),
              opt: !0,
              default: f.IDEMPOTENCY_UNKNOWN,
            },
            { no: 35, name: "features", kind: "message", T: X, opt: !0 },
            { no: 999, name: "uninterpreted_option", kind: "message", T: $, repeated: !0 },
          ])),
          (function (e) {
            ((e[(e.IDEMPOTENCY_UNKNOWN = 0)] = "IDEMPOTENCY_UNKNOWN"),
              (e[(e.NO_SIDE_EFFECTS = 1)] = "NO_SIDE_EFFECTS"),
              (e[(e.IDEMPOTENT = 2)] = "IDEMPOTENT"));
          })(f || (t.MethodOptions_IdempotencyLevel = f = {})),
          r.proto2.util.setEnumType(f, "google.protobuf.MethodOptions.IdempotencyLevel", [
            { no: 0, name: "IDEMPOTENCY_UNKNOWN" },
            { no: 1, name: "NO_SIDE_EFFECTS" },
            { no: 2, name: "IDEMPOTENT" },
          ]));
        class $ extends o.Message {
          constructor(e) {
            (super(), (this.name = []), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new $().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new $().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new $().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals($, e, t);
          }
        }
        ((t.UninterpretedOption = $),
          ($.runtime = r.proto2),
          ($.typeName = "google.protobuf.UninterpretedOption"),
          ($.fields = r.proto2.util.newFieldList(() => [
            { no: 2, name: "name", kind: "message", T: W, repeated: !0 },
            { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: !0 },
            { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: !0 },
            { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: !0 },
            { no: 6, name: "double_value", kind: "scalar", T: 1, opt: !0 },
            { no: 7, name: "string_value", kind: "scalar", T: 12, opt: !0 },
            { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: !0 },
          ])));
        class W extends o.Message {
          constructor(e) {
            (super(), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new W().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new W().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new W().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(W, e, t);
          }
        }
        ((t.UninterpretedOption_NamePart = W),
          (W.runtime = r.proto2),
          (W.typeName = "google.protobuf.UninterpretedOption.NamePart"),
          (W.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "name_part", kind: "scalar", T: 9, req: !0 },
            { no: 2, name: "is_extension", kind: "scalar", T: 8, req: !0 },
          ])));
        class X extends o.Message {
          constructor(e) {
            (super(), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new X().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new X().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new X().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(X, e, t);
          }
        }
        ((t.FeatureSet = X),
          (X.runtime = r.proto2),
          (X.typeName = "google.protobuf.FeatureSet"),
          (X.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "field_presence", kind: "enum", T: r.proto2.getEnumType(T), opt: !0 },
            { no: 2, name: "enum_type", kind: "enum", T: r.proto2.getEnumType(g), opt: !0 },
            {
              no: 3,
              name: "repeated_field_encoding",
              kind: "enum",
              T: r.proto2.getEnumType(E),
              opt: !0,
            },
            { no: 4, name: "utf8_validation", kind: "enum", T: r.proto2.getEnumType(y), opt: !0 },
            { no: 5, name: "message_encoding", kind: "enum", T: r.proto2.getEnumType(h), opt: !0 },
            { no: 6, name: "json_format", kind: "enum", T: r.proto2.getEnumType(N), opt: !0 },
          ])),
          (function (e) {
            ((e[(e.FIELD_PRESENCE_UNKNOWN = 0)] = "FIELD_PRESENCE_UNKNOWN"),
              (e[(e.EXPLICIT = 1)] = "EXPLICIT"),
              (e[(e.IMPLICIT = 2)] = "IMPLICIT"),
              (e[(e.LEGACY_REQUIRED = 3)] = "LEGACY_REQUIRED"));
          })(T || (t.FeatureSet_FieldPresence = T = {})),
          r.proto2.util.setEnumType(T, "google.protobuf.FeatureSet.FieldPresence", [
            { no: 0, name: "FIELD_PRESENCE_UNKNOWN" },
            { no: 1, name: "EXPLICIT" },
            { no: 2, name: "IMPLICIT" },
            { no: 3, name: "LEGACY_REQUIRED" },
          ]),
          (function (e) {
            ((e[(e.ENUM_TYPE_UNKNOWN = 0)] = "ENUM_TYPE_UNKNOWN"),
              (e[(e.OPEN = 1)] = "OPEN"),
              (e[(e.CLOSED = 2)] = "CLOSED"));
          })(g || (t.FeatureSet_EnumType = g = {})),
          r.proto2.util.setEnumType(g, "google.protobuf.FeatureSet.EnumType", [
            { no: 0, name: "ENUM_TYPE_UNKNOWN" },
            { no: 1, name: "OPEN" },
            { no: 2, name: "CLOSED" },
          ]),
          (function (e) {
            ((e[(e.REPEATED_FIELD_ENCODING_UNKNOWN = 0)] = "REPEATED_FIELD_ENCODING_UNKNOWN"),
              (e[(e.PACKED = 1)] = "PACKED"),
              (e[(e.EXPANDED = 2)] = "EXPANDED"));
          })(E || (t.FeatureSet_RepeatedFieldEncoding = E = {})),
          r.proto2.util.setEnumType(E, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [
            { no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" },
            { no: 1, name: "PACKED" },
            { no: 2, name: "EXPANDED" },
          ]),
          (function (e) {
            ((e[(e.UTF8_VALIDATION_UNKNOWN = 0)] = "UTF8_VALIDATION_UNKNOWN"),
              (e[(e.VERIFY = 2)] = "VERIFY"),
              (e[(e.NONE = 3)] = "NONE"));
          })(y || (t.FeatureSet_Utf8Validation = y = {})),
          r.proto2.util.setEnumType(y, "google.protobuf.FeatureSet.Utf8Validation", [
            { no: 0, name: "UTF8_VALIDATION_UNKNOWN" },
            { no: 2, name: "VERIFY" },
            { no: 3, name: "NONE" },
          ]),
          (function (e) {
            ((e[(e.MESSAGE_ENCODING_UNKNOWN = 0)] = "MESSAGE_ENCODING_UNKNOWN"),
              (e[(e.LENGTH_PREFIXED = 1)] = "LENGTH_PREFIXED"),
              (e[(e.DELIMITED = 2)] = "DELIMITED"));
          })(h || (t.FeatureSet_MessageEncoding = h = {})),
          r.proto2.util.setEnumType(h, "google.protobuf.FeatureSet.MessageEncoding", [
            { no: 0, name: "MESSAGE_ENCODING_UNKNOWN" },
            { no: 1, name: "LENGTH_PREFIXED" },
            { no: 2, name: "DELIMITED" },
          ]),
          (function (e) {
            ((e[(e.JSON_FORMAT_UNKNOWN = 0)] = "JSON_FORMAT_UNKNOWN"),
              (e[(e.ALLOW = 1)] = "ALLOW"),
              (e[(e.LEGACY_BEST_EFFORT = 2)] = "LEGACY_BEST_EFFORT"));
          })(N || (t.FeatureSet_JsonFormat = N = {})),
          r.proto2.util.setEnumType(N, "google.protobuf.FeatureSet.JsonFormat", [
            { no: 0, name: "JSON_FORMAT_UNKNOWN" },
            { no: 1, name: "ALLOW" },
            { no: 2, name: "LEGACY_BEST_EFFORT" },
          ]));
        class K extends o.Message {
          constructor(e) {
            (super(), (this.defaults = []), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new K().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new K().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new K().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(K, e, t);
          }
        }
        ((t.FeatureSetDefaults = K),
          (K.runtime = r.proto2),
          (K.typeName = "google.protobuf.FeatureSetDefaults"),
          (K.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "defaults", kind: "message", T: Z, repeated: !0 },
            { no: 4, name: "minimum_edition", kind: "enum", T: r.proto2.getEnumType(a), opt: !0 },
            { no: 5, name: "maximum_edition", kind: "enum", T: r.proto2.getEnumType(a), opt: !0 },
          ])));
        class Z extends o.Message {
          constructor(e) {
            (super(), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new Z().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new Z().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new Z().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(Z, e, t);
          }
        }
        ((t.FeatureSetDefaults_FeatureSetEditionDefault = Z),
          (Z.runtime = r.proto2),
          (Z.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault"),
          (Z.fields = r.proto2.util.newFieldList(() => [
            { no: 3, name: "edition", kind: "enum", T: r.proto2.getEnumType(a), opt: !0 },
            { no: 4, name: "overridable_features", kind: "message", T: X, opt: !0 },
            { no: 5, name: "fixed_features", kind: "message", T: X, opt: !0 },
          ])));
        class H extends o.Message {
          constructor(e) {
            (super(), (this.location = []), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new H().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new H().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new H().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(H, e, t);
          }
        }
        ((t.SourceCodeInfo = H),
          (H.runtime = r.proto2),
          (H.typeName = "google.protobuf.SourceCodeInfo"),
          (H.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "location", kind: "message", T: z, repeated: !0 },
          ])));
        class z extends o.Message {
          constructor(e) {
            (super(),
              (this.path = []),
              (this.span = []),
              (this.leadingDetachedComments = []),
              r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new z().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new z().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new z().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(z, e, t);
          }
        }
        ((t.SourceCodeInfo_Location = z),
          (z.runtime = r.proto2),
          (z.typeName = "google.protobuf.SourceCodeInfo.Location"),
          (z.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "path", kind: "scalar", T: 5, repeated: !0, packed: !0 },
            { no: 2, name: "span", kind: "scalar", T: 5, repeated: !0, packed: !0 },
            { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: !0 },
            { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: !0 },
            { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9, repeated: !0 },
          ])));
        class Q extends o.Message {
          constructor(e) {
            (super(), (this.annotation = []), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new Q().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new Q().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new Q().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(Q, e, t);
          }
        }
        ((t.GeneratedCodeInfo = Q),
          (Q.runtime = r.proto2),
          (Q.typeName = "google.protobuf.GeneratedCodeInfo"),
          (Q.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "annotation", kind: "message", T: ee, repeated: !0 },
          ])));
        class ee extends o.Message {
          constructor(e) {
            (super(), (this.path = []), r.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new ee().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new ee().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new ee().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto2.util.equals(ee, e, t);
          }
        }
        ((t.GeneratedCodeInfo_Annotation = ee),
          (ee.runtime = r.proto2),
          (ee.typeName = "google.protobuf.GeneratedCodeInfo.Annotation"),
          (ee.fields = r.proto2.util.newFieldList(() => [
            { no: 1, name: "path", kind: "scalar", T: 5, repeated: !0, packed: !0 },
            { no: 2, name: "source_file", kind: "scalar", T: 9, opt: !0 },
            { no: 3, name: "begin", kind: "scalar", T: 5, opt: !0 },
            { no: 4, name: "end", kind: "scalar", T: 5, opt: !0 },
            { no: 5, name: "semantic", kind: "enum", T: r.proto2.getEnumType(_), opt: !0 },
          ])),
          (function (e) {
            ((e[(e.NONE = 0)] = "NONE"), (e[(e.SET = 1)] = "SET"), (e[(e.ALIAS = 2)] = "ALIAS"));
          })(_ || (t.GeneratedCodeInfo_Annotation_Semantic = _ = {})),
          r.proto2.util.setEnumType(_, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [
            { no: 0, name: "NONE" },
            { no: 1, name: "SET" },
            { no: 2, name: "ALIAS" },
          ]));
      },
      408: (e, t) => {
        var n, r;
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LongType = t.ScalarType = void 0),
          (function (e) {
            ((e[(e.DOUBLE = 1)] = "DOUBLE"),
              (e[(e.FLOAT = 2)] = "FLOAT"),
              (e[(e.INT64 = 3)] = "INT64"),
              (e[(e.UINT64 = 4)] = "UINT64"),
              (e[(e.INT32 = 5)] = "INT32"),
              (e[(e.FIXED64 = 6)] = "FIXED64"),
              (e[(e.FIXED32 = 7)] = "FIXED32"),
              (e[(e.BOOL = 8)] = "BOOL"),
              (e[(e.STRING = 9)] = "STRING"),
              (e[(e.BYTES = 12)] = "BYTES"),
              (e[(e.UINT32 = 13)] = "UINT32"),
              (e[(e.SFIXED32 = 15)] = "SFIXED32"),
              (e[(e.SFIXED64 = 16)] = "SFIXED64"),
              (e[(e.SINT32 = 17)] = "SINT32"),
              (e[(e.SINT64 = 18)] = "SINT64"));
          })(n || (t.ScalarType = n = {})),
          (function (e) {
            ((e[(e.BIGINT = 0)] = "BIGINT"), (e[(e.STRING = 1)] = "STRING"));
          })(r || (t.LongType = r = {})));
      },
      422: (e, t) => {
        var n, r;
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MethodIdempotency = t.MethodKind = void 0),
          (function (e) {
            ((e[(e.Unary = 0)] = "Unary"),
              (e[(e.ServerStreaming = 1)] = "ServerStreaming"),
              (e[(e.ClientStreaming = 2)] = "ClientStreaming"),
              (e[(e.BiDiStreaming = 3)] = "BiDiStreaming"));
          })(n || (t.MethodKind = n = {})),
          (function (e) {
            ((e[(e.NoSideEffects = 1)] = "NoSideEffects"), (e[(e.Idempotent = 2)] = "Idempotent"));
          })(r || (t.MethodIdempotency = r = {})));
      },
      443: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Mixin = t.Method = t.Api = void 0));
        const r = n(193),
          o = n(469),
          a = n(206),
          s = n(599);
        class i extends r.Message {
          constructor(e) {
            (super(),
              (this.name = ""),
              (this.methods = []),
              (this.options = []),
              (this.version = ""),
              (this.mixins = []),
              (this.syntax = o.Syntax.PROTO2),
              s.proto3.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new i().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new i().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new i().fromJsonString(e, t);
          }
          static equals(e, t) {
            return s.proto3.util.equals(i, e, t);
          }
        }
        ((t.Api = i),
          (i.runtime = s.proto3),
          (i.typeName = "google.protobuf.Api"),
          (i.fields = s.proto3.util.newFieldList(() => [
            { no: 1, name: "name", kind: "scalar", T: 9 },
            { no: 2, name: "methods", kind: "message", T: l, repeated: !0 },
            { no: 3, name: "options", kind: "message", T: o.Option, repeated: !0 },
            { no: 4, name: "version", kind: "scalar", T: 9 },
            { no: 5, name: "source_context", kind: "message", T: a.SourceContext },
            { no: 6, name: "mixins", kind: "message", T: u, repeated: !0 },
            { no: 7, name: "syntax", kind: "enum", T: s.proto3.getEnumType(o.Syntax) },
          ])));
        class l extends r.Message {
          constructor(e) {
            (super(),
              (this.name = ""),
              (this.requestTypeUrl = ""),
              (this.requestStreaming = !1),
              (this.responseTypeUrl = ""),
              (this.responseStreaming = !1),
              (this.options = []),
              (this.syntax = o.Syntax.PROTO2),
              s.proto3.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new l().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new l().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new l().fromJsonString(e, t);
          }
          static equals(e, t) {
            return s.proto3.util.equals(l, e, t);
          }
        }
        ((t.Method = l),
          (l.runtime = s.proto3),
          (l.typeName = "google.protobuf.Method"),
          (l.fields = s.proto3.util.newFieldList(() => [
            { no: 1, name: "name", kind: "scalar", T: 9 },
            { no: 2, name: "request_type_url", kind: "scalar", T: 9 },
            { no: 3, name: "request_streaming", kind: "scalar", T: 8 },
            { no: 4, name: "response_type_url", kind: "scalar", T: 9 },
            { no: 5, name: "response_streaming", kind: "scalar", T: 8 },
            { no: 6, name: "options", kind: "message", T: o.Option, repeated: !0 },
            { no: 7, name: "syntax", kind: "enum", T: s.proto3.getEnumType(o.Syntax) },
          ])));
        class u extends r.Message {
          constructor(e) {
            (super(), (this.name = ""), (this.root = ""), s.proto3.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new u().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new u().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new u().fromJsonString(e, t);
          }
          static equals(e, t) {
            return s.proto3.util.equals(u, e, t);
          }
        }
        ((t.Mixin = u),
          (u.runtime = s.proto3),
          (u.typeName = "google.protobuf.Mixin"),
          (u.fields = s.proto3.util.newFieldList(() => [
            { no: 1, name: "name", kind: "scalar", T: 9 },
            { no: 2, name: "root", kind: "scalar", T: 9 },
          ])));
      },
      455: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isScalarZeroValue = t.scalarZeroValue = t.scalarEquals = void 0));
        const r = n(498),
          o = n(408);
        ((t.scalarEquals = function (e, t, n) {
          if (t === n) return !0;
          if (e == o.ScalarType.BYTES) {
            if (!(t instanceof Uint8Array && n instanceof Uint8Array)) return !1;
            if (t.length !== n.length) return !1;
            for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return !1;
            return !0;
          }
          switch (e) {
            case o.ScalarType.UINT64:
            case o.ScalarType.FIXED64:
            case o.ScalarType.INT64:
            case o.ScalarType.SFIXED64:
            case o.ScalarType.SINT64:
              return t == n;
          }
          return !1;
        }),
          (t.scalarZeroValue = function (e, t) {
            switch (e) {
              case o.ScalarType.BOOL:
                return !1;
              case o.ScalarType.UINT64:
              case o.ScalarType.FIXED64:
              case o.ScalarType.INT64:
              case o.ScalarType.SFIXED64:
              case o.ScalarType.SINT64:
                return 0 == t ? r.protoInt64.zero : "0";
              case o.ScalarType.DOUBLE:
              case o.ScalarType.FLOAT:
                return 0;
              case o.ScalarType.BYTES:
                return new Uint8Array(0);
              case o.ScalarType.STRING:
                return "";
              default:
                return 0;
            }
          }),
          (t.isScalarZeroValue = function (e, t) {
            switch (e) {
              case o.ScalarType.BOOL:
                return !1 === t;
              case o.ScalarType.STRING:
                return "" === t;
              case o.ScalarType.BYTES:
                return t instanceof Uint8Array && !t.byteLength;
              default:
                return 0 == t;
            }
          }));
      },
      469: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Option =
            t.EnumValue =
            t.Enum =
            t.Field_Cardinality =
            t.Field_Kind =
            t.Field =
            t.Type =
            t.Syntax =
              void 0));
        const r = n(599),
          o = n(193),
          a = n(206),
          s = n(245);
        var i, l, u;
        (!(function (e) {
          ((e[(e.PROTO2 = 0)] = "PROTO2"),
            (e[(e.PROTO3 = 1)] = "PROTO3"),
            (e[(e.EDITIONS = 2)] = "EDITIONS"));
        })(i || (t.Syntax = i = {})),
          r.proto3.util.setEnumType(i, "google.protobuf.Syntax", [
            { no: 0, name: "SYNTAX_PROTO2" },
            { no: 1, name: "SYNTAX_PROTO3" },
            { no: 2, name: "SYNTAX_EDITIONS" },
          ]));
        class c extends o.Message {
          constructor(e) {
            (super(),
              (this.name = ""),
              (this.fields = []),
              (this.oneofs = []),
              (this.options = []),
              (this.syntax = i.PROTO2),
              (this.edition = ""),
              r.proto3.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new c().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new c().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new c().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto3.util.equals(c, e, t);
          }
        }
        ((t.Type = c),
          (c.runtime = r.proto3),
          (c.typeName = "google.protobuf.Type"),
          (c.fields = r.proto3.util.newFieldList(() => [
            { no: 1, name: "name", kind: "scalar", T: 9 },
            { no: 2, name: "fields", kind: "message", T: m, repeated: !0 },
            { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: !0 },
            { no: 4, name: "options", kind: "message", T: f, repeated: !0 },
            { no: 5, name: "source_context", kind: "message", T: a.SourceContext },
            { no: 6, name: "syntax", kind: "enum", T: r.proto3.getEnumType(i) },
            { no: 7, name: "edition", kind: "scalar", T: 9 },
          ])));
        class m extends o.Message {
          constructor(e) {
            (super(),
              (this.kind = l.TYPE_UNKNOWN),
              (this.cardinality = u.UNKNOWN),
              (this.number = 0),
              (this.name = ""),
              (this.typeUrl = ""),
              (this.oneofIndex = 0),
              (this.packed = !1),
              (this.options = []),
              (this.jsonName = ""),
              (this.defaultValue = ""),
              r.proto3.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new m().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new m().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new m().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto3.util.equals(m, e, t);
          }
        }
        ((t.Field = m),
          (m.runtime = r.proto3),
          (m.typeName = "google.protobuf.Field"),
          (m.fields = r.proto3.util.newFieldList(() => [
            { no: 1, name: "kind", kind: "enum", T: r.proto3.getEnumType(l) },
            { no: 2, name: "cardinality", kind: "enum", T: r.proto3.getEnumType(u) },
            { no: 3, name: "number", kind: "scalar", T: 5 },
            { no: 4, name: "name", kind: "scalar", T: 9 },
            { no: 6, name: "type_url", kind: "scalar", T: 9 },
            { no: 7, name: "oneof_index", kind: "scalar", T: 5 },
            { no: 8, name: "packed", kind: "scalar", T: 8 },
            { no: 9, name: "options", kind: "message", T: f, repeated: !0 },
            { no: 10, name: "json_name", kind: "scalar", T: 9 },
            { no: 11, name: "default_value", kind: "scalar", T: 9 },
          ])),
          (function (e) {
            ((e[(e.TYPE_UNKNOWN = 0)] = "TYPE_UNKNOWN"),
              (e[(e.TYPE_DOUBLE = 1)] = "TYPE_DOUBLE"),
              (e[(e.TYPE_FLOAT = 2)] = "TYPE_FLOAT"),
              (e[(e.TYPE_INT64 = 3)] = "TYPE_INT64"),
              (e[(e.TYPE_UINT64 = 4)] = "TYPE_UINT64"),
              (e[(e.TYPE_INT32 = 5)] = "TYPE_INT32"),
              (e[(e.TYPE_FIXED64 = 6)] = "TYPE_FIXED64"),
              (e[(e.TYPE_FIXED32 = 7)] = "TYPE_FIXED32"),
              (e[(e.TYPE_BOOL = 8)] = "TYPE_BOOL"),
              (e[(e.TYPE_STRING = 9)] = "TYPE_STRING"),
              (e[(e.TYPE_GROUP = 10)] = "TYPE_GROUP"),
              (e[(e.TYPE_MESSAGE = 11)] = "TYPE_MESSAGE"),
              (e[(e.TYPE_BYTES = 12)] = "TYPE_BYTES"),
              (e[(e.TYPE_UINT32 = 13)] = "TYPE_UINT32"),
              (e[(e.TYPE_ENUM = 14)] = "TYPE_ENUM"),
              (e[(e.TYPE_SFIXED32 = 15)] = "TYPE_SFIXED32"),
              (e[(e.TYPE_SFIXED64 = 16)] = "TYPE_SFIXED64"),
              (e[(e.TYPE_SINT32 = 17)] = "TYPE_SINT32"),
              (e[(e.TYPE_SINT64 = 18)] = "TYPE_SINT64"));
          })(l || (t.Field_Kind = l = {})),
          r.proto3.util.setEnumType(l, "google.protobuf.Field.Kind", [
            { no: 0, name: "TYPE_UNKNOWN" },
            { no: 1, name: "TYPE_DOUBLE" },
            { no: 2, name: "TYPE_FLOAT" },
            { no: 3, name: "TYPE_INT64" },
            { no: 4, name: "TYPE_UINT64" },
            { no: 5, name: "TYPE_INT32" },
            { no: 6, name: "TYPE_FIXED64" },
            { no: 7, name: "TYPE_FIXED32" },
            { no: 8, name: "TYPE_BOOL" },
            { no: 9, name: "TYPE_STRING" },
            { no: 10, name: "TYPE_GROUP" },
            { no: 11, name: "TYPE_MESSAGE" },
            { no: 12, name: "TYPE_BYTES" },
            { no: 13, name: "TYPE_UINT32" },
            { no: 14, name: "TYPE_ENUM" },
            { no: 15, name: "TYPE_SFIXED32" },
            { no: 16, name: "TYPE_SFIXED64" },
            { no: 17, name: "TYPE_SINT32" },
            { no: 18, name: "TYPE_SINT64" },
          ]),
          (function (e) {
            ((e[(e.UNKNOWN = 0)] = "UNKNOWN"),
              (e[(e.OPTIONAL = 1)] = "OPTIONAL"),
              (e[(e.REQUIRED = 2)] = "REQUIRED"),
              (e[(e.REPEATED = 3)] = "REPEATED"));
          })(u || (t.Field_Cardinality = u = {})),
          r.proto3.util.setEnumType(u, "google.protobuf.Field.Cardinality", [
            { no: 0, name: "CARDINALITY_UNKNOWN" },
            { no: 1, name: "CARDINALITY_OPTIONAL" },
            { no: 2, name: "CARDINALITY_REQUIRED" },
            { no: 3, name: "CARDINALITY_REPEATED" },
          ]));
        class p extends o.Message {
          constructor(e) {
            (super(),
              (this.name = ""),
              (this.enumvalue = []),
              (this.options = []),
              (this.syntax = i.PROTO2),
              (this.edition = ""),
              r.proto3.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new p().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new p().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new p().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto3.util.equals(p, e, t);
          }
        }
        ((t.Enum = p),
          (p.runtime = r.proto3),
          (p.typeName = "google.protobuf.Enum"),
          (p.fields = r.proto3.util.newFieldList(() => [
            { no: 1, name: "name", kind: "scalar", T: 9 },
            { no: 2, name: "enumvalue", kind: "message", T: d, repeated: !0 },
            { no: 3, name: "options", kind: "message", T: f, repeated: !0 },
            { no: 4, name: "source_context", kind: "message", T: a.SourceContext },
            { no: 5, name: "syntax", kind: "enum", T: r.proto3.getEnumType(i) },
            { no: 6, name: "edition", kind: "scalar", T: 9 },
          ])));
        class d extends o.Message {
          constructor(e) {
            (super(),
              (this.name = ""),
              (this.number = 0),
              (this.options = []),
              r.proto3.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new d().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new d().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new d().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto3.util.equals(d, e, t);
          }
        }
        ((t.EnumValue = d),
          (d.runtime = r.proto3),
          (d.typeName = "google.protobuf.EnumValue"),
          (d.fields = r.proto3.util.newFieldList(() => [
            { no: 1, name: "name", kind: "scalar", T: 9 },
            { no: 2, name: "number", kind: "scalar", T: 5 },
            { no: 3, name: "options", kind: "message", T: f, repeated: !0 },
          ])));
        class f extends o.Message {
          constructor(e) {
            (super(), (this.name = ""), r.proto3.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new f().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new f().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new f().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto3.util.equals(f, e, t);
          }
        }
        ((t.Option = f),
          (f.runtime = r.proto3),
          (f.typeName = "google.protobuf.Option"),
          (f.fields = r.proto3.util.newFieldList(() => [
            { no: 1, name: "name", kind: "scalar", T: 9 },
            { no: 2, name: "value", kind: "message", T: s.Any },
          ])));
      },
      492: (e, t) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.protoDouble = void 0),
          (t.protoDouble = {
            NaN: Number.NaN,
            POSITIVE_INFINITY: Number.POSITIVE_INFINITY,
            NEGATIVE_INFINITY: Number.NEGATIVE_INFINITY,
          }));
      },
      498: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.protoInt64 = void 0));
        const r = n(98),
          o = n(84);
        t.protoInt64 = (function () {
          const e = new DataView(new ArrayBuffer(8));
          if (
            "function" == typeof BigInt &&
            "function" == typeof e.getBigInt64 &&
            "function" == typeof e.getBigUint64 &&
            "function" == typeof e.setBigInt64 &&
            "function" == typeof e.setBigUint64 &&
            ("object" != typeof process ||
              "object" != typeof process.env ||
              "1" !== process.env.BUF_BIGINT_DISABLE)
          ) {
            const t = BigInt("-9223372036854775808"),
              n = BigInt("9223372036854775807"),
              r = BigInt("0"),
              o = BigInt("18446744073709551615");
            return {
              zero: BigInt(0),
              supported: !0,
              parse(e) {
                const r = "bigint" == typeof e ? e : BigInt(e);
                if (r > n || r < t) throw new Error(`int64 invalid: ${e}`);
                return r;
              },
              uParse(e) {
                const t = "bigint" == typeof e ? e : BigInt(e);
                if (t > o || t < r) throw new Error(`uint64 invalid: ${e}`);
                return t;
              },
              enc(t) {
                return (
                  e.setBigInt64(0, this.parse(t), !0),
                  { lo: e.getInt32(0, !0), hi: e.getInt32(4, !0) }
                );
              },
              uEnc(t) {
                return (
                  e.setBigInt64(0, this.uParse(t), !0),
                  { lo: e.getInt32(0, !0), hi: e.getInt32(4, !0) }
                );
              },
              dec: (t, n) => (e.setInt32(0, t, !0), e.setInt32(4, n, !0), e.getBigInt64(0, !0)),
              uDec: (t, n) => (e.setInt32(0, t, !0), e.setInt32(4, n, !0), e.getBigUint64(0, !0)),
            };
          }
          const t = (e) => (0, r.assert)(/^-?[0-9]+$/.test(e), `int64 invalid: ${e}`),
            n = (e) => (0, r.assert)(/^[0-9]+$/.test(e), `uint64 invalid: ${e}`);
          return {
            zero: "0",
            supported: !1,
            parse: (e) => ("string" != typeof e && (e = e.toString()), t(e), e),
            uParse: (e) => ("string" != typeof e && (e = e.toString()), n(e), e),
            enc: (e) => (
              "string" != typeof e && (e = e.toString()),
              t(e),
              (0, o.int64FromString)(e)
            ),
            uEnc: (e) => (
              "string" != typeof e && (e = e.toString()),
              n(e),
              (0, o.int64FromString)(e)
            ),
            dec: (e, t) => (0, o.int64ToString)(e, t),
            uDec: (e, t) => (0, o.uInt64ToString)(e, t),
          };
        })();
      },
      526: (e, t) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.protoBase64 = void 0));
        let n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
          r = [];
        for (let e = 0; e < n.length; e++) r[n[e].charCodeAt(0)] = e;
        ((r["-".charCodeAt(0)] = n.indexOf("+")),
          (r["_".charCodeAt(0)] = n.indexOf("/")),
          (t.protoBase64 = {
            dec(e) {
              let t = (3 * e.length) / 4;
              "=" == e[e.length - 2] ? (t -= 2) : "=" == e[e.length - 1] && (t -= 1);
              let n,
                o = new Uint8Array(t),
                a = 0,
                s = 0,
                i = 0;
              for (let t = 0; t < e.length; t++) {
                if (((n = r[e.charCodeAt(t)]), void 0 === n))
                  switch (e[t]) {
                    case "=":
                      s = 0;
                    case "\n":
                    case "\r":
                    case "\t":
                    case " ":
                      continue;
                    default:
                      throw Error("invalid base64 string.");
                  }
                switch (s) {
                  case 0:
                    ((i = n), (s = 1));
                    break;
                  case 1:
                    ((o[a++] = (i << 2) | ((48 & n) >> 4)), (i = n), (s = 2));
                    break;
                  case 2:
                    ((o[a++] = ((15 & i) << 4) | ((60 & n) >> 2)), (i = n), (s = 3));
                    break;
                  case 3:
                    ((o[a++] = ((3 & i) << 6) | n), (s = 0));
                }
              }
              if (1 == s) throw Error("invalid base64 string.");
              return o.subarray(0, a);
            },
            enc(e) {
              let t,
                r = "",
                o = 0,
                a = 0;
              for (let s = 0; s < e.length; s++)
                switch (((t = e[s]), o)) {
                  case 0:
                    ((r += n[t >> 2]), (a = (3 & t) << 4), (o = 1));
                    break;
                  case 1:
                    ((r += n[a | (t >> 4)]), (a = (15 & t) << 2), (o = 2));
                    break;
                  case 2:
                    ((r += n[a | (t >> 6)]), (r += n[63 & t]), (o = 0));
                }
              return (o && ((r += n[a]), (r += "="), 1 == o && (r += "=")), r);
            },
          }));
      },
      536: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeJsonFormat = void 0));
        const r = n(98),
          o = n(498),
          a = n(526),
          s = n(802),
          i = n(771),
          l = n(803),
          u = n(212),
          c = n(455),
          m = n(455),
          p = n(408),
          d = n(706),
          f = { ignoreUnknownFields: !1 },
          T = { emitDefaultValues: !1, enumAsInteger: !1, useProtoFieldName: !1, prettySpaces: 0 };
        function g(e) {
          return e ? Object.assign(Object.assign({}, f), e) : f;
        }
        function E(e) {
          return e ? Object.assign(Object.assign({}, T), e) : T;
        }
        const y = Symbol(),
          h = Symbol();
        function N(e) {
          if (null === e) return "null";
          switch (typeof e) {
            case "object":
              return Array.isArray(e) ? "array" : "object";
            case "string":
              return e.length > 100 ? "string" : `"${e.split('"').join('\\"')}"`;
            default:
              return String(e);
          }
        }
        function _(e, t, n, o, a) {
          let s = n.localName;
          if (n.repeated) {
            if (((0, r.assert)("map" != n.kind), null === t)) return;
            if (!Array.isArray(t))
              throw new Error(`cannot decode field ${a.typeName}.${n.name} from JSON: ${N(t)}`);
            const i = e[s];
            for (const e of t) {
              if (null === e)
                throw new Error(`cannot decode field ${a.typeName}.${n.name} from JSON: ${N(e)}`);
              switch (n.kind) {
                case "message":
                  i.push(n.T.fromJson(e, o));
                  break;
                case "enum":
                  const t = w(n.T, e, o.ignoreUnknownFields, !0);
                  t !== h && i.push(t);
                  break;
                case "scalar":
                  try {
                    i.push(S(n.T, e, n.L, !0));
                  } catch (t) {
                    let r = `cannot decode field ${a.typeName}.${n.name} from JSON: ${N(e)}`;
                    throw (
                      t instanceof Error && t.message.length > 0 && (r += `: ${t.message}`),
                      new Error(r)
                    );
                  }
              }
            }
          } else if ("map" == n.kind) {
            if (null === t) return;
            if ("object" != typeof t || Array.isArray(t))
              throw new Error(`cannot decode field ${a.typeName}.${n.name} from JSON: ${N(t)}`);
            const r = e[s];
            for (const [e, s] of Object.entries(t)) {
              if (null === s)
                throw new Error(
                  `cannot decode field ${a.typeName}.${n.name} from JSON: map value null`,
                );
              let i;
              try {
                i = I(n.K, e);
              } catch (e) {
                let r = `cannot decode map key for field ${a.typeName}.${n.name} from JSON: ${N(t)}`;
                throw (
                  e instanceof Error && e.message.length > 0 && (r += `: ${e.message}`),
                  new Error(r)
                );
              }
              switch (n.V.kind) {
                case "message":
                  r[i] = n.V.T.fromJson(s, o);
                  break;
                case "enum":
                  const e = w(n.V.T, s, o.ignoreUnknownFields, !0);
                  e !== h && (r[i] = e);
                  break;
                case "scalar":
                  try {
                    r[i] = S(n.V.T, s, p.LongType.BIGINT, !0);
                  } catch (e) {
                    let r = `cannot decode map value for field ${a.typeName}.${n.name} from JSON: ${N(t)}`;
                    throw (
                      e instanceof Error && e.message.length > 0 && (r += `: ${e.message}`),
                      new Error(r)
                    );
                  }
              }
            }
          } else
            switch (
              (n.oneof && ((e = e[n.oneof.localName] = { case: s }), (s = "value")), n.kind)
            ) {
              case "message":
                const r = n.T;
                if (null === t && "google.protobuf.Value" != r.typeName) return;
                let i = e[s];
                (0, d.isMessage)(i)
                  ? i.fromJson(t, o)
                  : ((e[s] = i = r.fromJson(t, o)),
                    r.fieldWrapper && !n.oneof && (e[s] = r.fieldWrapper.unwrapField(i)));
                break;
              case "enum":
                const u = w(n.T, t, o.ignoreUnknownFields, !1);
                switch (u) {
                  case y:
                    (0, l.clearField)(n, e);
                    break;
                  case h:
                    break;
                  default:
                    e[s] = u;
                }
                break;
              case "scalar":
                try {
                  const r = S(n.T, t, n.L, !1);
                  if (r === y) (0, l.clearField)(n, e);
                  else e[s] = r;
                } catch (e) {
                  let r = `cannot decode field ${a.typeName}.${n.name} from JSON: ${N(t)}`;
                  throw (
                    e instanceof Error && e.message.length > 0 && (r += `: ${e.message}`),
                    new Error(r)
                  );
                }
            }
        }
        function I(e, t) {
          if (e === p.ScalarType.BOOL)
            switch (t) {
              case "true":
                t = !0;
                break;
              case "false":
                t = !1;
            }
          return S(e, t, p.LongType.BIGINT, !0).toString();
        }
        function S(e, t, n, s) {
          if (null === t) return s ? (0, c.scalarZeroValue)(e, n) : y;
          switch (e) {
            case p.ScalarType.DOUBLE:
            case p.ScalarType.FLOAT:
              if ("NaN" === t) return Number.NaN;
              if ("Infinity" === t) return Number.POSITIVE_INFINITY;
              if ("-Infinity" === t) return Number.NEGATIVE_INFINITY;
              if ("" === t) break;
              if ("string" == typeof t && t.trim().length !== t.length) break;
              if ("string" != typeof t && "number" != typeof t) break;
              const s = Number(t);
              if (Number.isNaN(s)) break;
              if (!Number.isFinite(s)) break;
              return (e == p.ScalarType.FLOAT && (0, r.assertFloat32)(s), s);
            case p.ScalarType.INT32:
            case p.ScalarType.FIXED32:
            case p.ScalarType.SFIXED32:
            case p.ScalarType.SINT32:
            case p.ScalarType.UINT32:
              let i;
              if (
                ("number" == typeof t
                  ? (i = t)
                  : "string" == typeof t &&
                    t.length > 0 &&
                    t.trim().length === t.length &&
                    (i = Number(t)),
                void 0 === i)
              )
                break;
              return (
                e == p.ScalarType.UINT32 || e == p.ScalarType.FIXED32
                  ? (0, r.assertUInt32)(i)
                  : (0, r.assertInt32)(i),
                i
              );
            case p.ScalarType.INT64:
            case p.ScalarType.SFIXED64:
            case p.ScalarType.SINT64:
              if ("number" != typeof t && "string" != typeof t) break;
              const l = o.protoInt64.parse(t);
              return n ? l.toString() : l;
            case p.ScalarType.FIXED64:
            case p.ScalarType.UINT64:
              if ("number" != typeof t && "string" != typeof t) break;
              const u = o.protoInt64.uParse(t);
              return n ? u.toString() : u;
            case p.ScalarType.BOOL:
              if ("boolean" != typeof t) break;
              return t;
            case p.ScalarType.STRING:
              if ("string" != typeof t) break;
              try {
                encodeURIComponent(t);
              } catch (e) {
                throw new Error("invalid UTF8");
              }
              return t;
            case p.ScalarType.BYTES:
              if ("" === t) return new Uint8Array(0);
              if ("string" != typeof t) break;
              return a.protoBase64.dec(t);
          }
          throw new Error();
        }
        function w(e, t, n, r) {
          if (null === t)
            return "google.protobuf.NullValue" == e.typeName ? 0 : r ? e.values[0].no : y;
          switch (typeof t) {
            case "number":
              if (Number.isInteger(t)) return t;
              break;
            case "string":
              const r = e.findName(t);
              if (void 0 !== r) return r.no;
              if (n) return h;
          }
          throw new Error(`cannot decode enum ${e.typeName} from JSON: ${N(t)}`);
        }
        function O(e) {
          return (
            !(!e.repeated && "map" != e.kind) ||
            (!e.oneof && "message" != e.kind && !e.opt && !e.req)
          );
        }
        function b(e, t, n) {
          if ("map" == e.kind) {
            (0, r.assert)("object" == typeof t && null != t);
            const o = {},
              a = Object.entries(t);
            switch (e.V.kind) {
              case "scalar":
                for (const [t, n] of a) o[t.toString()] = v(e.V.T, n);
                break;
              case "message":
                for (const [e, t] of a) o[e.toString()] = t.toJson(n);
                break;
              case "enum":
                const t = e.V.T;
                for (const [e, r] of a) o[e.toString()] = k(t, r, n.enumAsInteger);
            }
            return n.emitDefaultValues || a.length > 0 ? o : void 0;
          }
          if (e.repeated) {
            (0, r.assert)(Array.isArray(t));
            const o = [];
            switch (e.kind) {
              case "scalar":
                for (let n = 0; n < t.length; n++) o.push(v(e.T, t[n]));
                break;
              case "enum":
                for (let r = 0; r < t.length; r++) o.push(k(e.T, t[r], n.enumAsInteger));
                break;
              case "message":
                for (let e = 0; e < t.length; e++) o.push(t[e].toJson(n));
            }
            return n.emitDefaultValues || o.length > 0 ? o : void 0;
          }
          switch (e.kind) {
            case "scalar":
              return v(e.T, t);
            case "enum":
              return k(e.T, t, n.enumAsInteger);
            case "message":
              return (0, u.wrapField)(e.T, t).toJson(n);
          }
        }
        function k(e, t, n) {
          var o;
          if (((0, r.assert)("number" == typeof t), "google.protobuf.NullValue" == e.typeName))
            return null;
          if (n) return t;
          const a = e.findNumber(t);
          return null !== (o = null == a ? void 0 : a.name) && void 0 !== o ? o : t;
        }
        function v(e, t) {
          switch (e) {
            case p.ScalarType.INT32:
            case p.ScalarType.SFIXED32:
            case p.ScalarType.SINT32:
            case p.ScalarType.FIXED32:
            case p.ScalarType.UINT32:
              return ((0, r.assert)("number" == typeof t), t);
            case p.ScalarType.FLOAT:
            case p.ScalarType.DOUBLE:
              return (
                (0, r.assert)("number" == typeof t),
                Number.isNaN(t)
                  ? "NaN"
                  : t === Number.POSITIVE_INFINITY
                    ? "Infinity"
                    : t === Number.NEGATIVE_INFINITY
                      ? "-Infinity"
                      : t
              );
            case p.ScalarType.STRING:
              return ((0, r.assert)("string" == typeof t), t);
            case p.ScalarType.BOOL:
              return ((0, r.assert)("boolean" == typeof t), t);
            case p.ScalarType.UINT64:
            case p.ScalarType.FIXED64:
            case p.ScalarType.INT64:
            case p.ScalarType.SFIXED64:
            case p.ScalarType.SINT64:
              return (
                (0, r.assert)("bigint" == typeof t || "string" == typeof t || "number" == typeof t),
                t.toString()
              );
            case p.ScalarType.BYTES:
              return ((0, r.assert)(t instanceof Uint8Array), a.protoBase64.enc(t));
          }
        }
        t.makeJsonFormat = function () {
          return {
            makeReadOptions: g,
            makeWriteOptions: E,
            readMessage(e, t, n, r) {
              if (null == t || Array.isArray(t) || "object" != typeof t)
                throw new Error(`cannot decode message ${e.typeName} from JSON: ${N(t)}`);
              r = null != r ? r : new e();
              const o = new Map(),
                a = n.typeRegistry;
              for (const [l, u] of Object.entries(t)) {
                const t = e.fields.findJsonName(l);
                if (t) {
                  if (t.oneof) {
                    if (null === u && "scalar" == t.kind) continue;
                    const n = o.get(t.oneof);
                    if (void 0 !== n)
                      throw new Error(
                        `cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${t.oneof.name}" present: "${n}", "${l}"`,
                      );
                    o.set(t.oneof, l);
                  }
                  _(r, u, t, n, e);
                } else {
                  let t = !1;
                  if (
                    (null == a ? void 0 : a.findExtension) &&
                    l.startsWith("[") &&
                    l.endsWith("]")
                  ) {
                    const o = a.findExtension(l.substring(1, l.length - 1));
                    if (o && o.extendee.typeName == e.typeName) {
                      t = !0;
                      const [e, a] = (0, s.createExtensionContainer)(o);
                      (_(e, u, o.field, n, o), (0, i.setExtension)(r, o, a(), n));
                    }
                  }
                  if (!t && !n.ignoreUnknownFields)
                    throw new Error(
                      `cannot decode message ${e.typeName} from JSON: key "${l}" is unknown`,
                    );
                }
              }
              return r;
            },
            writeMessage(e, t) {
              const n = e.getType(),
                r = {};
              let o;
              try {
                for (o of n.fields.byNumber()) {
                  if (!(0, l.isFieldSet)(o, e)) {
                    if (o.req) throw "required field not set";
                    if (!t.emitDefaultValues) continue;
                    if (!O(o)) continue;
                  }
                  const n = b(o, o.oneof ? e[o.oneof.localName].value : e[o.localName], t);
                  void 0 !== n && (r[t.useProtoFieldName ? o.name : o.jsonName] = n);
                }
                const a = t.typeRegistry;
                if (null == a ? void 0 : a.findExtensionFor)
                  for (const o of n.runtime.bin.listUnknownFields(e)) {
                    const s = a.findExtensionFor(n.typeName, o.no);
                    if (s && (0, i.hasExtension)(e, s)) {
                      const n = (0, i.getExtension)(e, s, t),
                        o = b(s.field, n, t);
                      void 0 !== o && (r[s.field.jsonName] = o);
                    }
                  }
              } catch (e) {
                const t = o
                    ? `cannot encode field ${n.typeName}.${o.name} to JSON`
                    : `cannot encode message ${n.typeName} to JSON`,
                  r = e instanceof Error ? e.message : String(e);
                throw new Error(t + (r.length > 0 ? `: ${r}` : ""));
              }
              return r;
            },
            readScalar: (e, t, n) => S(e, t, null != n ? n : p.LongType.BIGINT, !0),
            writeScalar(e, t, n) {
              if (void 0 !== t) return n || (0, m.isScalarZeroValue)(e, t) ? v(e, t) : void 0;
            },
            debug: N,
          };
        };
      },
      574: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.Duration = void 0));
        const r = n(193),
          o = n(498),
          a = n(599);
        class s extends r.Message {
          constructor(e) {
            (super(),
              (this.seconds = o.protoInt64.zero),
              (this.nanos = 0),
              a.proto3.util.initPartial(e, this));
          }
          fromJson(e, t) {
            if ("string" != typeof e)
              throw new Error(
                `cannot decode google.protobuf.Duration from JSON: ${a.proto3.json.debug(e)}`,
              );
            const n = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
            if (null === n)
              throw new Error(
                `cannot decode google.protobuf.Duration from JSON: ${a.proto3.json.debug(e)}`,
              );
            const r = Number(n[1]);
            if (r > 315576e6 || r < -315576e6)
              throw new Error(
                `cannot decode google.protobuf.Duration from JSON: ${a.proto3.json.debug(e)}`,
              );
            if (((this.seconds = o.protoInt64.parse(r)), "string" == typeof n[2])) {
              const e = n[2] + "0".repeat(9 - n[2].length);
              ((this.nanos = parseInt(e)),
                (r < 0 || Object.is(r, -0)) && (this.nanos = -this.nanos));
            }
            return this;
          }
          toJson(e) {
            if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6)
              throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
            let t = this.seconds.toString();
            if (0 !== this.nanos) {
              let e = Math.abs(this.nanos).toString();
              ((e = "0".repeat(9 - e.length) + e),
                "000000" === e.substring(3)
                  ? (e = e.substring(0, 3))
                  : "000" === e.substring(6) && (e = e.substring(0, 6)),
                (t += "." + e),
                this.nanos < 0 && 0 == Number(this.seconds) && (t = "-" + t));
            }
            return t + "s";
          }
          static fromBinary(e, t) {
            return new s().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new s().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new s().fromJsonString(e, t);
          }
          static equals(e, t) {
            return a.proto3.util.equals(s, e, t);
          }
        }
        ((t.Duration = s),
          (s.runtime = a.proto3),
          (s.typeName = "google.protobuf.Duration"),
          (s.fields = a.proto3.util.newFieldList(() => [
            { no: 1, name: "seconds", kind: "scalar", T: 3 },
            { no: 2, name: "nanos", kind: "scalar", T: 5 },
          ])));
      },
      596: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.codegenInfo = void 0));
        const r = n(822),
          o = n(212),
          a = n(455),
          s = n(924),
          i = "@bufbuild/protobuf";
        t.codegenInfo = {
          packageName: "@bufbuild/protobuf",
          localName: r.localName,
          reifyWkt: s.reifyWkt,
          getUnwrappedFieldType: o.getUnwrappedFieldType,
          scalarDefaultValue: a.scalarZeroValue,
          scalarZeroValue: a.scalarZeroValue,
          safeIdentifier: r.safeIdentifier,
          safeObjectProperty: r.safeObjectProperty,
          symbols: {
            proto2: { typeOnly: !1, privateImportPath: "./proto2.js", publicImportPath: i },
            proto3: { typeOnly: !1, privateImportPath: "./proto3.js", publicImportPath: i },
            Message: { typeOnly: !1, privateImportPath: "./message.js", publicImportPath: i },
            PartialMessage: {
              typeOnly: !0,
              privateImportPath: "./message.js",
              publicImportPath: i,
            },
            PlainMessage: { typeOnly: !0, privateImportPath: "./message.js", publicImportPath: i },
            FieldList: { typeOnly: !0, privateImportPath: "./field-list.js", publicImportPath: i },
            MessageType: {
              typeOnly: !0,
              privateImportPath: "./message-type.js",
              publicImportPath: i,
            },
            Extension: { typeOnly: !0, privateImportPath: "./extension.js", publicImportPath: i },
            BinaryReadOptions: {
              typeOnly: !0,
              privateImportPath: "./binary-format.js",
              publicImportPath: i,
            },
            BinaryWriteOptions: {
              typeOnly: !0,
              privateImportPath: "./binary-format.js",
              publicImportPath: i,
            },
            JsonReadOptions: {
              typeOnly: !0,
              privateImportPath: "./json-format.js",
              publicImportPath: i,
            },
            JsonWriteOptions: {
              typeOnly: !0,
              privateImportPath: "./json-format.js",
              publicImportPath: i,
            },
            JsonValue: { typeOnly: !0, privateImportPath: "./json-format.js", publicImportPath: i },
            JsonObject: {
              typeOnly: !0,
              privateImportPath: "./json-format.js",
              publicImportPath: i,
            },
            protoDouble: {
              typeOnly: !1,
              privateImportPath: "./proto-double.js",
              publicImportPath: i,
            },
            protoInt64: {
              typeOnly: !1,
              privateImportPath: "./proto-int64.js",
              publicImportPath: i,
            },
            ScalarType: { typeOnly: !1, privateImportPath: "./scalar.js", publicImportPath: i },
            LongType: { typeOnly: !1, privateImportPath: "./scalar.js", publicImportPath: i },
            MethodKind: {
              typeOnly: !1,
              privateImportPath: "./service-type.js",
              publicImportPath: i,
            },
            MethodIdempotency: {
              typeOnly: !1,
              privateImportPath: "./service-type.js",
              publicImportPath: i,
            },
            IMessageTypeRegistry: {
              typeOnly: !0,
              privateImportPath: "./type-registry.js",
              publicImportPath: i,
            },
          },
          wktSourceFiles: [
            "google/protobuf/compiler/plugin.proto",
            "google/protobuf/any.proto",
            "google/protobuf/api.proto",
            "google/protobuf/descriptor.proto",
            "google/protobuf/duration.proto",
            "google/protobuf/empty.proto",
            "google/protobuf/field_mask.proto",
            "google/protobuf/source_context.proto",
            "google/protobuf/struct.proto",
            "google/protobuf/timestamp.proto",
            "google/protobuf/type.proto",
            "google/protobuf/wrappers.proto",
          ],
        };
      },
      599: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.proto3 = void 0));
        const r = n(829),
          o = n(331),
          a = n(455),
          s = n(228);
        t.proto3 = (0, r.makeProtoRuntime)(
          "proto3",
          (e) => new o.InternalFieldList(e, (e) => (0, s.normalizeFieldInfos)(e, !0)),
          (e) => {
            for (const t of e.getType().fields.byMember()) {
              if (t.opt) continue;
              const n = t.localName,
                r = e;
              if (t.repeated) r[n] = [];
              else
                switch (t.kind) {
                  case "oneof":
                    r[n] = { case: void 0 };
                    break;
                  case "enum":
                    r[n] = 0;
                    break;
                  case "map":
                    r[n] = {};
                    break;
                  case "scalar":
                    r[n] = (0, a.scalarZeroValue)(t.T, t.L);
                }
            }
          },
        );
      },
      609: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.makeEnum = t.makeEnumType = t.setEnumType = t.getEnumType = void 0));
        const r = n(98),
          o = Symbol("@bufbuild/protobuf/enum-type");
        function a(e, t, n, r) {
          e[o] = s(
            t,
            n.map((t) => ({ no: t.no, name: t.name, localName: e[t.no] })),
            r,
          );
        }
        function s(e, t, n) {
          const r = Object.create(null),
            o = Object.create(null),
            a = [];
          for (const e of t) {
            const t = i(e);
            (a.push(t), (r[e.name] = t), (o[e.no] = t));
          }
          return { typeName: e, values: a, findName: (e) => r[e], findNumber: (e) => o[e] };
        }
        function i(e) {
          return "localName" in e ? e : Object.assign(Object.assign({}, e), { localName: e.name });
        }
        ((t.getEnumType = function (e) {
          const t = e[o];
          return ((0, r.assert)(t, "missing enum type on enum object"), t);
        }),
          (t.setEnumType = a),
          (t.makeEnumType = s),
          (t.makeEnum = function (e, t, n) {
            const r = {};
            for (const e of t) {
              const t = i(e);
              ((r[t.localName] = t.no), (r[t.no] = t.localName));
            }
            return (a(r, e, t, n), r);
          }));
      },
      636: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CodeGeneratorResponse_File =
            t.CodeGeneratorResponse_Feature =
            t.CodeGeneratorResponse =
            t.CodeGeneratorRequest =
            t.Version =
              void 0));
        const r = n(193),
          o = n(291),
          a = n(374);
        class s extends r.Message {
          constructor(e) {
            (super(), o.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new s().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new s().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new s().fromJsonString(e, t);
          }
          static equals(e, t) {
            return o.proto2.util.equals(s, e, t);
          }
        }
        ((t.Version = s),
          (s.runtime = o.proto2),
          (s.typeName = "google.protobuf.compiler.Version"),
          (s.fields = o.proto2.util.newFieldList(() => [
            { no: 1, name: "major", kind: "scalar", T: 5, opt: !0 },
            { no: 2, name: "minor", kind: "scalar", T: 5, opt: !0 },
            { no: 3, name: "patch", kind: "scalar", T: 5, opt: !0 },
            { no: 4, name: "suffix", kind: "scalar", T: 9, opt: !0 },
          ])));
        class i extends r.Message {
          constructor(e) {
            (super(),
              (this.fileToGenerate = []),
              (this.protoFile = []),
              (this.sourceFileDescriptors = []),
              o.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new i().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new i().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new i().fromJsonString(e, t);
          }
          static equals(e, t) {
            return o.proto2.util.equals(i, e, t);
          }
        }
        ((t.CodeGeneratorRequest = i),
          (i.runtime = o.proto2),
          (i.typeName = "google.protobuf.compiler.CodeGeneratorRequest"),
          (i.fields = o.proto2.util.newFieldList(() => [
            { no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: !0 },
            { no: 2, name: "parameter", kind: "scalar", T: 9, opt: !0 },
            { no: 15, name: "proto_file", kind: "message", T: a.FileDescriptorProto, repeated: !0 },
            {
              no: 17,
              name: "source_file_descriptors",
              kind: "message",
              T: a.FileDescriptorProto,
              repeated: !0,
            },
            { no: 3, name: "compiler_version", kind: "message", T: s, opt: !0 },
          ])));
        class l extends r.Message {
          constructor(e) {
            (super(), (this.file = []), o.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new l().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new l().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new l().fromJsonString(e, t);
          }
          static equals(e, t) {
            return o.proto2.util.equals(l, e, t);
          }
        }
        var u;
        ((t.CodeGeneratorResponse = l),
          (l.runtime = o.proto2),
          (l.typeName = "google.protobuf.compiler.CodeGeneratorResponse"),
          (l.fields = o.proto2.util.newFieldList(() => [
            { no: 1, name: "error", kind: "scalar", T: 9, opt: !0 },
            { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: !0 },
            { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: !0 },
            { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: !0 },
            { no: 15, name: "file", kind: "message", T: c, repeated: !0 },
          ])),
          (function (e) {
            ((e[(e.NONE = 0)] = "NONE"),
              (e[(e.PROTO3_OPTIONAL = 1)] = "PROTO3_OPTIONAL"),
              (e[(e.SUPPORTS_EDITIONS = 2)] = "SUPPORTS_EDITIONS"));
          })(u || (t.CodeGeneratorResponse_Feature = u = {})),
          o.proto2.util.setEnumType(u, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [
            { no: 0, name: "FEATURE_NONE" },
            { no: 1, name: "FEATURE_PROTO3_OPTIONAL" },
            { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" },
          ]));
        class c extends r.Message {
          constructor(e) {
            (super(), o.proto2.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new c().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new c().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new c().fromJsonString(e, t);
          }
          static equals(e, t) {
            return o.proto2.util.equals(c, e, t);
          }
        }
        ((t.CodeGeneratorResponse_File = c),
          (c.runtime = o.proto2),
          (c.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File"),
          (c.fields = o.proto2.util.newFieldList(() => [
            { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
            { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: !0 },
            { no: 15, name: "content", kind: "scalar", T: 9, opt: !0 },
            {
              no: 16,
              name: "generated_code_info",
              kind: "message",
              T: a.GeneratedCodeInfo,
              opt: !0,
            },
          ])));
      },
      638: function (e, t, n) {
        var r =
            (this && this.__asyncValues) ||
            function (e) {
              if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
              var t,
                n = e[Symbol.asyncIterator];
              return n
                ? n.call(e)
                : ((e = "function" == typeof __values ? __values(e) : e[Symbol.iterator]()),
                  (t = {}),
                  r("next"),
                  r("throw"),
                  r("return"),
                  (t[Symbol.asyncIterator] = function () {
                    return this;
                  }),
                  t);
              function r(n) {
                t[n] =
                  e[n] &&
                  function (t) {
                    return new Promise(function (r, o) {
                      (function (e, t, n, r) {
                        Promise.resolve(r).then(function (t) {
                          e({ value: t, done: n });
                        }, t);
                      })(r, o, (t = e[n](t)).done, t.value);
                    });
                  };
              }
            },
          o =
            (this && this.__await) ||
            function (e) {
              return this instanceof o ? ((this.v = e), this) : new o(e);
            },
          a =
            (this && this.__asyncGenerator) ||
            function (e, t, n) {
              if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
              var r,
                a = n.apply(e, t || []),
                s = [];
              return (
                (r = {}),
                i("next"),
                i("throw"),
                i("return", function (e) {
                  return function (t) {
                    return Promise.resolve(t).then(e, c);
                  };
                }),
                (r[Symbol.asyncIterator] = function () {
                  return this;
                }),
                r
              );
              function i(e, t) {
                a[e] &&
                  ((r[e] = function (t) {
                    return new Promise(function (n, r) {
                      s.push([e, t, n, r]) > 1 || l(e, t);
                    });
                  }),
                  t && (r[e] = t(r[e])));
              }
              function l(e, t) {
                try {
                  (n = a[e](t)).value instanceof o
                    ? Promise.resolve(n.value.v).then(u, c)
                    : m(s[0][2], n);
                } catch (e) {
                  m(s[0][3], e);
                }
                var n;
              }
              function u(e) {
                l("next", e);
              }
              function c(e) {
                l("throw", e);
              }
              function m(e, t) {
                (e(t), s.shift(), s.length && l(s[0][0], s[0][1]));
              }
            };
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.protoDelimited = void 0));
        const s = n(831);
        t.protoDelimited = {
          enc(e, t) {
            const n = e.getType().runtime.bin.makeWriteOptions(t);
            return n.writerFactory().bytes(e.toBinary(n)).finish();
          },
          dec(e, t, n) {
            const r = e.runtime.bin.makeReadOptions(n);
            return e.fromBinary(r.readerFactory(t).bytes(), r);
          },
          decStream(e, n) {
            return a(this, arguments, function* () {
              var a, s, i, l;
              function u(e, t) {
                const n = new Uint8Array(e.byteLength + t.byteLength);
                return (n.set(e), n.set(t, e.length), n);
              }
              let c = new Uint8Array(0);
              try {
                for (var m, p = !0, d = r(n); !(a = (m = yield o(d.next())).done); p = !0) {
                  ((l = m.value), (p = !1));
                  for (c = u(c, l); ;) {
                    const n = t.protoDelimited.peekSize(c);
                    if (n.eof) break;
                    if (n.offset + n.size > c.byteLength) break;
                    (yield yield o(t.protoDelimited.dec(e, c)),
                      (c = c.subarray(n.offset + n.size)));
                  }
                }
              } catch (e) {
                s = { error: e };
              } finally {
                try {
                  p || a || !(i = d.return) || (yield o(i.call(d)));
                } finally {
                  if (s) throw s.error;
                }
              }
              if (c.byteLength > 0) throw new Error("incomplete data");
            });
          },
          peekSize(e) {
            const t = { eof: !0, size: null, offset: null };
            for (let n = 0; n < 10; n++) {
              if (n > e.byteLength) return t;
              if (!(128 & e[n])) {
                const n = new s.BinaryReader(e);
                let r;
                try {
                  r = n.uint32();
                } catch (e) {
                  if (e instanceof RangeError) return t;
                  throw e;
                }
                return { eof: !1, size: r, offset: n.pos };
              }
            }
            throw new Error("invalid varint");
          },
        };
      },
      663: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.parseTextFormatScalarValue = t.parseTextFormatEnumValue = void 0));
        const r = n(98),
          o = n(498),
          a = n(408);
        ((t.parseTextFormatEnumValue = function (e, t) {
          const n = e.values.find((e) => e.name === t);
          return ((0, r.assert)(n, `cannot parse ${e.name} default value: ${t}`), n.number);
        }),
          (t.parseTextFormatScalarValue = function (e, t) {
            switch (e) {
              case a.ScalarType.STRING:
                return t;
              case a.ScalarType.BYTES: {
                const n = (function (e) {
                  const t = [],
                    n = {
                      tail: e,
                      c: "",
                      next() {
                        return (
                          0 != this.tail.length &&
                          ((this.c = this.tail[0]), (this.tail = this.tail.substring(1)), !0)
                        );
                      },
                      take(e) {
                        if (this.tail.length >= e) {
                          const t = this.tail.substring(0, e);
                          return ((this.tail = this.tail.substring(e)), t);
                        }
                        return !1;
                      },
                    };
                  for (; n.next();)
                    if ("\\" === n.c) {
                      if (n.next())
                        switch (n.c) {
                          case "\\":
                            t.push(n.c.charCodeAt(0));
                            break;
                          case "b":
                            t.push(8);
                            break;
                          case "f":
                            t.push(12);
                            break;
                          case "n":
                            t.push(10);
                            break;
                          case "r":
                            t.push(13);
                            break;
                          case "t":
                            t.push(9);
                            break;
                          case "v":
                            t.push(11);
                            break;
                          case "0":
                          case "1":
                          case "2":
                          case "3":
                          case "4":
                          case "5":
                          case "6":
                          case "7": {
                            const e = n.c,
                              r = n.take(2);
                            if (!1 === r) return !1;
                            const o = parseInt(e + r, 8);
                            if (isNaN(o)) return !1;
                            t.push(o);
                            break;
                          }
                          case "x": {
                            const e = n.c,
                              r = n.take(2);
                            if (!1 === r) return !1;
                            const o = parseInt(e + r, 16);
                            if (isNaN(o)) return !1;
                            t.push(o);
                            break;
                          }
                          case "u": {
                            const e = n.c,
                              r = n.take(4);
                            if (!1 === r) return !1;
                            const o = parseInt(e + r, 16);
                            if (isNaN(o)) return !1;
                            const a = new Uint8Array(4);
                            (new DataView(a.buffer).setInt32(0, o, !0),
                              t.push(a[0], a[1], a[2], a[3]));
                            break;
                          }
                          case "U": {
                            const e = n.c,
                              r = n.take(8);
                            if (!1 === r) return !1;
                            const a = o.protoInt64.uEnc(e + r),
                              s = new Uint8Array(8),
                              i = new DataView(s.buffer);
                            (i.setInt32(0, a.lo, !0),
                              i.setInt32(4, a.hi, !0),
                              t.push(s[0], s[1], s[2], s[3], s[4], s[5], s[6], s[7]));
                            break;
                          }
                        }
                    } else t.push(n.c.charCodeAt(0));
                  return new Uint8Array(t);
                })(t);
                if (!1 === n)
                  throw new Error(`cannot parse ${a.ScalarType[e]} default value: ${t}`);
                return n;
              }
              case a.ScalarType.INT64:
              case a.ScalarType.SFIXED64:
              case a.ScalarType.SINT64:
                return o.protoInt64.parse(t);
              case a.ScalarType.UINT64:
              case a.ScalarType.FIXED64:
                return o.protoInt64.uParse(t);
              case a.ScalarType.DOUBLE:
              case a.ScalarType.FLOAT:
                switch (t) {
                  case "inf":
                    return Number.POSITIVE_INFINITY;
                  case "-inf":
                    return Number.NEGATIVE_INFINITY;
                  case "nan":
                    return Number.NaN;
                  default:
                    return parseFloat(t);
                }
              case a.ScalarType.BOOL:
                return "true" === t;
              case a.ScalarType.INT32:
              case a.ScalarType.UINT32:
              case a.ScalarType.SINT32:
              case a.ScalarType.FIXED32:
              case a.ScalarType.SFIXED32:
                return parseInt(t, 10);
            }
          }));
      },
      668: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.Empty = void 0));
        const r = n(193),
          o = n(599);
        class a extends r.Message {
          constructor(e) {
            (super(), o.proto3.util.initPartial(e, this));
          }
          static fromBinary(e, t) {
            return new a().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new a().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new a().fromJsonString(e, t);
          }
          static equals(e, t) {
            return o.proto3.util.equals(a, e, t);
          }
        }
        ((t.Empty = a),
          (a.runtime = o.proto3),
          (a.typeName = "google.protobuf.Empty"),
          (a.fields = o.proto3.util.newFieldList(() => [])));
      },
      672: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeUtilCommon = void 0));
        const r = n(609),
          o = n(455),
          a = n(408),
          s = n(706);
        function i(e) {
          if (void 0 === e) return e;
          if ((0, s.isMessage)(e)) return e.clone();
          if (e instanceof Uint8Array) {
            const t = new Uint8Array(e.byteLength);
            return (t.set(e), t);
          }
          return e;
        }
        function l(e) {
          return e instanceof Uint8Array ? e : new Uint8Array(e);
        }
        t.makeUtilCommon = function () {
          return {
            setEnumType: r.setEnumType,
            initPartial(e, t) {
              if (void 0 === e) return;
              const n = t.getType();
              for (const r of n.fields.byMember()) {
                const n = r.localName,
                  o = t,
                  i = e;
                if (null != i[n])
                  switch (r.kind) {
                    case "oneof":
                      const e = i[n].case;
                      if (void 0 === e) continue;
                      const t = r.findField(e);
                      let u = i[n].value;
                      (t && "message" == t.kind && !(0, s.isMessage)(u, t.T)
                        ? (u = new t.T(u))
                        : t && "scalar" === t.kind && t.T === a.ScalarType.BYTES && (u = l(u)),
                        (o[n] = { case: e, value: u }));
                      break;
                    case "scalar":
                    case "enum":
                      let c = i[n];
                      (r.T === a.ScalarType.BYTES && (c = r.repeated ? c.map(l) : l(c)),
                        (o[n] = c));
                      break;
                    case "map":
                      switch (r.V.kind) {
                        case "scalar":
                        case "enum":
                          if (r.V.T === a.ScalarType.BYTES)
                            for (const [e, t] of Object.entries(i[n])) o[n][e] = l(t);
                          else Object.assign(o[n], i[n]);
                          break;
                        case "message":
                          const e = r.V.T;
                          for (const t of Object.keys(i[n])) {
                            let r = i[n][t];
                            (e.fieldWrapper || (r = new e(r)), (o[n][t] = r));
                          }
                      }
                      break;
                    case "message":
                      const m = r.T;
                      if (r.repeated)
                        o[n] = i[n].map((e) => ((0, s.isMessage)(e, m) ? e : new m(e)));
                      else {
                        const e = i[n];
                        m.fieldWrapper
                          ? "google.protobuf.BytesValue" === m.typeName
                            ? (o[n] = l(e))
                            : (o[n] = e)
                          : (o[n] = (0, s.isMessage)(e, m) ? e : new m(e));
                      }
                  }
              }
            },
            equals: (e, t, n) =>
              t === n ||
              (!(!t || !n) &&
                e.fields.byMember().every((e) => {
                  const r = t[e.localName],
                    s = n[e.localName];
                  if (e.repeated) {
                    if (r.length !== s.length) return !1;
                    switch (e.kind) {
                      case "message":
                        return r.every((t, n) => e.T.equals(t, s[n]));
                      case "scalar":
                        return r.every((t, n) => (0, o.scalarEquals)(e.T, t, s[n]));
                      case "enum":
                        return r.every((e, t) => (0, o.scalarEquals)(a.ScalarType.INT32, e, s[t]));
                    }
                    throw new Error(`repeated cannot contain ${e.kind}`);
                  }
                  switch (e.kind) {
                    case "message":
                      return e.T.equals(r, s);
                    case "enum":
                      return (0, o.scalarEquals)(a.ScalarType.INT32, r, s);
                    case "scalar":
                      return (0, o.scalarEquals)(e.T, r, s);
                    case "oneof":
                      if (r.case !== s.case) return !1;
                      const t = e.findField(r.case);
                      if (void 0 === t) return !0;
                      switch (t.kind) {
                        case "message":
                          return t.T.equals(r.value, s.value);
                        case "enum":
                          return (0, o.scalarEquals)(a.ScalarType.INT32, r.value, s.value);
                        case "scalar":
                          return (0, o.scalarEquals)(t.T, r.value, s.value);
                      }
                      throw new Error(`oneof cannot contain ${t.kind}`);
                    case "map":
                      const n = Object.keys(r).concat(Object.keys(s));
                      switch (e.V.kind) {
                        case "message":
                          const t = e.V.T;
                          return n.every((e) => t.equals(r[e], s[e]));
                        case "enum":
                          return n.every((e) =>
                            (0, o.scalarEquals)(a.ScalarType.INT32, r[e], s[e]),
                          );
                        case "scalar":
                          const i = e.V.T;
                          return n.every((e) => (0, o.scalarEquals)(i, r[e], s[e]));
                      }
                  }
                })),
            clone(e) {
              const t = e.getType(),
                n = new t(),
                r = n;
              for (const n of t.fields.byMember()) {
                const t = e[n.localName];
                let o;
                if (n.repeated) o = t.map(i);
                else if ("map" == n.kind) {
                  o = r[n.localName];
                  for (const [e, n] of Object.entries(t)) o[e] = i(n);
                } else if ("oneof" == n.kind) {
                  o = n.findField(t.case) ? { case: t.case, value: i(t.value) } : { case: void 0 };
                } else o = i(t);
                r[n.localName] = o;
              }
              for (const n of t.runtime.bin.listUnknownFields(e))
                t.runtime.bin.onUnknownField(r, n.no, n.wireType, n.data);
              return n;
            },
          };
        };
      },
      682: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeMessageType = void 0));
        const r = n(193);
        t.makeMessageType = function (e, t, n, o) {
          var a;
          const s =
              null !== (a = null == o ? void 0 : o.localName) && void 0 !== a
                ? a
                : t.substring(t.lastIndexOf(".") + 1),
            i = {
              [s]: function (t) {
                (e.util.initFields(this), e.util.initPartial(t, this));
              },
            }[s];
          return (
            Object.setPrototypeOf(i.prototype, new r.Message()),
            Object.assign(i, {
              runtime: e,
              typeName: t,
              fields: e.util.newFieldList(n),
              fromBinary: (e, t) => new i().fromBinary(e, t),
              fromJson: (e, t) => new i().fromJson(e, t),
              fromJsonString: (e, t) => new i().fromJsonString(e, t),
              equals: (t, n) => e.util.equals(i, t, n),
            }),
            i
          );
        };
      },
      706: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.isMessage = void 0));
        const r = n(193);
        t.isMessage = function (e, t) {
          if (null === e || "object" != typeof e) return !1;
          if (
            !Object.getOwnPropertyNames(r.Message.prototype).every(
              (t) => t in e && "function" == typeof e[t],
            )
          )
            return !1;
          const n = e.getType();
          return (
            null !== n &&
            "function" == typeof n &&
            "typeName" in n &&
            "string" == typeof n.typeName &&
            (void 0 === t || n.typeName == t.typeName)
          );
        };
      },
      771: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.hasExtension = t.clearExtension = t.setExtension = t.getExtension = void 0));
        const r = n(98),
          o = n(802);
        function a(e, t) {
          const n = e.getType();
          return (
            t.extendee.typeName === n.typeName &&
            !!n.runtime.bin.listUnknownFields(e).find((e) => e.no == t.field.no)
          );
        }
        function s(e, t) {
          (0, r.assert)(
            e.extendee.typeName == t.getType().typeName,
            `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`,
          );
        }
        ((t.getExtension = function (e, t, n) {
          s(t, e);
          const r = t.runtime.bin.makeReadOptions(n),
            a = (0, o.filterUnknownFields)(e.getType().runtime.bin.listUnknownFields(e), t.field),
            [i, l] = (0, o.createExtensionContainer)(t);
          for (const e of a)
            t.runtime.bin.readField(i, r.readerFactory(e.data), t.field, e.wireType, r);
          return l();
        }),
          (t.setExtension = function (e, t, n, r) {
            s(t, e);
            const o = t.runtime.bin.makeReadOptions(r),
              i = t.runtime.bin.makeWriteOptions(r);
            if (a(e, t)) {
              const n = e
                .getType()
                .runtime.bin.listUnknownFields(e)
                .filter((e) => e.no != t.field.no);
              e.getType().runtime.bin.discardUnknownFields(e);
              for (const t of n)
                e.getType().runtime.bin.onUnknownField(e, t.no, t.wireType, t.data);
            }
            const l = i.writerFactory();
            let u = t.field;
            (u.opt ||
              u.repeated ||
              ("enum" != u.kind && "scalar" != u.kind) ||
              (u = Object.assign(Object.assign({}, t.field), { opt: !0 })),
              t.runtime.bin.writeField(u, n, l, i));
            const c = o.readerFactory(l.finish());
            for (; c.pos < c.len;) {
              const [t, n] = c.tag(),
                r = c.skip(n, t);
              e.getType().runtime.bin.onUnknownField(e, t, n, r);
            }
          }),
          (t.clearExtension = function (e, t) {
            if ((s(t, e), a(e, t))) {
              const n = e.getType().runtime.bin,
                r = n.listUnknownFields(e).filter((e) => e.no != t.field.no);
              n.discardUnknownFields(e);
              for (const t of r) n.onUnknownField(e, t.no, t.wireType, t.data);
            }
          }),
          (t.hasExtension = a));
      },
      802: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.filterUnknownFields = t.createExtensionContainer = t.makeExtension = void 0));
        const r = n(455);
        ((t.makeExtension = function (e, t, n, r) {
          let o;
          return {
            typeName: t,
            extendee: n,
            get field() {
              if (!o) {
                const n = "function" == typeof r ? r() : r;
                ((n.name = t.split(".").pop()),
                  (n.jsonName = `[${t}]`),
                  (o = e.util.newFieldList([n]).list()[0]));
              }
              return o;
            },
            runtime: e,
          };
        }),
          (t.createExtensionContainer = function (e) {
            const t = e.field.localName,
              n = Object.create(null);
            return (
              (n[t] = (function (e) {
                const t = e.field;
                if (t.repeated) return [];
                if (void 0 !== t.default) return t.default;
                switch (t.kind) {
                  case "enum":
                    return t.T.values[0].no;
                  case "scalar":
                    return (0, r.scalarZeroValue)(t.T, t.L);
                  case "message":
                    const e = t.T,
                      n = new e();
                    return e.fieldWrapper ? e.fieldWrapper.unwrapField(n) : n;
                  case "map":
                    throw "map fields are not allowed to be extensions";
                }
              })(e)),
              [n, () => n[t]]
            );
          }),
          (t.filterUnknownFields = function (e, t) {
            if (!t.repeated && ("enum" == t.kind || "scalar" == t.kind)) {
              for (let n = e.length - 1; n >= 0; --n) if (e[n].no == t.no) return [e[n]];
              return [];
            }
            return e.filter((e) => e.no === t.no);
          }));
      },
      803: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.clearField = t.isFieldSet = void 0));
        const r = n(455);
        ((t.isFieldSet = function (e, t) {
          const n = e.localName;
          if (e.repeated) return t[n].length > 0;
          if (e.oneof) return t[e.oneof.localName].case === n;
          switch (e.kind) {
            case "enum":
            case "scalar":
              return e.opt || e.req
                ? void 0 !== t[n]
                : "enum" == e.kind
                  ? t[n] !== e.T.values[0].no
                  : !(0, r.isScalarZeroValue)(e.T, t[n]);
            case "message":
              return void 0 !== t[n];
            case "map":
              return Object.keys(t[n]).length > 0;
          }
        }),
          (t.clearField = function (e, t) {
            const n = e.localName,
              o = !e.opt && !e.req;
            if (e.repeated) t[n] = [];
            else if (e.oneof) t[e.oneof.localName] = { case: void 0 };
            else
              switch (e.kind) {
                case "map":
                  t[n] = {};
                  break;
                case "enum":
                  t[n] = o ? e.T.values[0].no : void 0;
                  break;
                case "scalar":
                  t[n] = o ? (0, r.scalarZeroValue)(e.T, e.L) : void 0;
                  break;
                case "message":
                  t[n] = void 0;
              }
          }));
      },
      814: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ListValue = t.Value = t.Struct = t.NullValue = void 0));
        const r = n(599),
          o = n(193);
        var a;
        (!(function (e) {
          e[(e.NULL_VALUE = 0)] = "NULL_VALUE";
        })(a || (t.NullValue = a = {})),
          r.proto3.util.setEnumType(a, "google.protobuf.NullValue", [
            { no: 0, name: "NULL_VALUE" },
          ]));
        class s extends o.Message {
          constructor(e) {
            (super(), (this.fields = {}), r.proto3.util.initPartial(e, this));
          }
          toJson(e) {
            const t = {};
            for (const [n, r] of Object.entries(this.fields)) t[n] = r.toJson(e);
            return t;
          }
          fromJson(e, t) {
            if ("object" != typeof e || null == e || Array.isArray(e))
              throw new Error(
                "cannot decode google.protobuf.Struct from JSON " + r.proto3.json.debug(e),
              );
            for (const [t, n] of Object.entries(e)) this.fields[t] = i.fromJson(n);
            return this;
          }
          static fromBinary(e, t) {
            return new s().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new s().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new s().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto3.util.equals(s, e, t);
          }
        }
        ((t.Struct = s),
          (s.runtime = r.proto3),
          (s.typeName = "google.protobuf.Struct"),
          (s.fields = r.proto3.util.newFieldList(() => [
            { no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: i } },
          ])));
        class i extends o.Message {
          constructor(e) {
            (super(), (this.kind = { case: void 0 }), r.proto3.util.initPartial(e, this));
          }
          toJson(e) {
            switch (this.kind.case) {
              case "nullValue":
                return null;
              case "numberValue":
                if (!Number.isFinite(this.kind.value))
                  throw new Error("google.protobuf.Value cannot be NaN or Infinity");
                return this.kind.value;
              case "boolValue":
              case "stringValue":
                return this.kind.value;
              case "structValue":
              case "listValue":
                return this.kind.value.toJson(
                  Object.assign(Object.assign({}, e), { emitDefaultValues: !0 }),
                );
            }
            throw new Error("google.protobuf.Value must have a value");
          }
          fromJson(e, t) {
            switch (typeof e) {
              case "number":
                this.kind = { case: "numberValue", value: e };
                break;
              case "string":
                this.kind = { case: "stringValue", value: e };
                break;
              case "boolean":
                this.kind = { case: "boolValue", value: e };
                break;
              case "object":
                null === e
                  ? (this.kind = { case: "nullValue", value: a.NULL_VALUE })
                  : Array.isArray(e)
                    ? (this.kind = { case: "listValue", value: l.fromJson(e) })
                    : (this.kind = { case: "structValue", value: s.fromJson(e) });
                break;
              default:
                throw new Error(
                  "cannot decode google.protobuf.Value from JSON " + r.proto3.json.debug(e),
                );
            }
            return this;
          }
          static fromBinary(e, t) {
            return new i().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new i().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new i().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto3.util.equals(i, e, t);
          }
        }
        ((t.Value = i),
          (i.runtime = r.proto3),
          (i.typeName = "google.protobuf.Value"),
          (i.fields = r.proto3.util.newFieldList(() => [
            { no: 1, name: "null_value", kind: "enum", T: r.proto3.getEnumType(a), oneof: "kind" },
            { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" },
            { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" },
            { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" },
            { no: 5, name: "struct_value", kind: "message", T: s, oneof: "kind" },
            { no: 6, name: "list_value", kind: "message", T: l, oneof: "kind" },
          ])));
        class l extends o.Message {
          constructor(e) {
            (super(), (this.values = []), r.proto3.util.initPartial(e, this));
          }
          toJson(e) {
            return this.values.map((e) => e.toJson());
          }
          fromJson(e, t) {
            if (!Array.isArray(e))
              throw new Error(
                "cannot decode google.protobuf.ListValue from JSON " + r.proto3.json.debug(e),
              );
            for (let t of e) this.values.push(i.fromJson(t));
            return this;
          }
          static fromBinary(e, t) {
            return new l().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new l().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new l().fromJsonString(e, t);
          }
          static equals(e, t) {
            return r.proto3.util.equals(l, e, t);
          }
        }
        ((t.ListValue = l),
          (l.runtime = r.proto3),
          (l.typeName = "google.protobuf.ListValue"),
          (l.fields = r.proto3.util.newFieldList(() => [
            { no: 1, name: "values", kind: "message", T: i, repeated: !0 },
          ])));
      },
      822: (e, t) => {
        function n(e, n) {
          const r = o(e);
          return n ? r : (0, t.safeObjectProperty)(u(r));
        }
        function r(e) {
          return n(e, !1);
        }
        function o(e) {
          let t = !1;
          const n = [];
          for (let r = 0; r < e.length; r++) {
            let o = e.charAt(r);
            switch (o) {
              case "_":
                t = !0;
                break;
              case "0":
              case "1":
              case "2":
              case "3":
              case "4":
              case "5":
              case "6":
              case "7":
              case "8":
              case "9":
                (n.push(o), (t = !1));
                break;
              default:
                (t && ((t = !1), (o = o.toUpperCase())), n.push(o));
            }
          }
          return n.join("");
        }
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.safeIdentifier =
            t.safeObjectProperty =
            t.findEnumSharedPrefix =
            t.fieldJsonName =
            t.localOneofName =
            t.localFieldName =
            t.localName =
              void 0),
          (t.localName = function (e) {
            switch (e.kind) {
              case "field":
                return n(e.name, void 0 !== e.oneof);
              case "oneof":
                return r(e.name);
              case "enum":
              case "message":
              case "service":
              case "extension": {
                const n = e.file.proto.package,
                  r = void 0 === n ? 0 : n.length + 1,
                  o = e.typeName.substring(r).replace(/\./g, "_");
                return (0, t.safeObjectProperty)((0, t.safeIdentifier)(o));
              }
              case "enum_value": {
                let n = e.name;
                const r = e.parent.sharedPrefix;
                return (void 0 !== r && (n = n.substring(r.length)), (0, t.safeObjectProperty)(n));
              }
              case "rpc": {
                let n = e.name;
                return 0 == n.length
                  ? n
                  : ((n = n[0].toLowerCase() + n.substring(1)), (0, t.safeObjectProperty)(n));
              }
            }
          }),
          (t.localFieldName = n),
          (t.localOneofName = r),
          (t.fieldJsonName = o),
          (t.findEnumSharedPrefix = function (e, t) {
            const n =
              (
                (r = e).substring(0, 1) + r.substring(1).replace(/[A-Z]/g, (e) => "_" + e)
              ).toLowerCase() + "_";
            var r;
            for (const e of t) {
              if (!e.toLowerCase().startsWith(n)) return;
              const t = e.substring(n.length);
              if (0 == t.length) return;
              if (/^\d/.test(t)) return;
            }
            return n;
          }));
        const a = new Set([
            "break",
            "case",
            "catch",
            "class",
            "const",
            "continue",
            "debugger",
            "default",
            "delete",
            "do",
            "else",
            "export",
            "extends",
            "false",
            "finally",
            "for",
            "function",
            "if",
            "import",
            "in",
            "instanceof",
            "new",
            "null",
            "return",
            "super",
            "switch",
            "this",
            "throw",
            "true",
            "try",
            "typeof",
            "var",
            "void",
            "while",
            "with",
            "yield",
            "enum",
            "implements",
            "interface",
            "let",
            "package",
            "private",
            "protected",
            "public",
            "static",
            "Object",
            "bigint",
            "number",
            "boolean",
            "string",
            "object",
            "globalThis",
            "Uint8Array",
            "Partial",
          ]),
          s = new Set(["constructor", "toString", "toJSON", "valueOf"]),
          i = new Set([
            "getType",
            "clone",
            "equals",
            "fromBinary",
            "fromJson",
            "fromJsonString",
            "toBinary",
            "toJson",
            "toJsonString",
            "toObject",
          ]),
          l = (e) => `${e}$`,
          u = (e) => (i.has(e) ? l(e) : e);
        t.safeObjectProperty = (e) => (s.has(e) ? l(e) : e);
        t.safeIdentifier = (e) => (a.has(e) ? l(e) : e);
      },
      829: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeProtoRuntime = void 0));
        const r = n(609),
          o = n(682),
          a = n(802),
          s = n(536),
          i = n(141),
          l = n(672);
        t.makeProtoRuntime = function (e, t, n) {
          return {
            syntax: e,
            json: (0, s.makeJsonFormat)(),
            bin: (0, i.makeBinaryFormat)(),
            util: Object.assign(Object.assign({}, (0, l.makeUtilCommon)()), {
              newFieldList: t,
              initFields: n,
            }),
            makeMessageType(e, t, n) {
              return (0, o.makeMessageType)(this, e, t, n);
            },
            makeEnum: r.makeEnum,
            makeEnumType: r.makeEnumType,
            getEnumType: r.getEnumType,
            makeExtension(e, t, n) {
              return (0, a.makeExtension)(this, e, t, n);
            },
          };
        };
      },
      831: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BinaryReader = t.BinaryWriter = t.WireType = void 0));
        const r = n(84),
          o = n(98),
          a = n(498);
        var s;
        !(function (e) {
          ((e[(e.Varint = 0)] = "Varint"),
            (e[(e.Bit64 = 1)] = "Bit64"),
            (e[(e.LengthDelimited = 2)] = "LengthDelimited"),
            (e[(e.StartGroup = 3)] = "StartGroup"),
            (e[(e.EndGroup = 4)] = "EndGroup"),
            (e[(e.Bit32 = 5)] = "Bit32"));
        })(s || (t.WireType = s = {}));
        t.BinaryWriter = class {
          constructor(e) {
            ((this.stack = []),
              (this.textEncoder = null != e ? e : new TextEncoder()),
              (this.chunks = []),
              (this.buf = []));
          }
          finish() {
            this.chunks.push(new Uint8Array(this.buf));
            let e = 0;
            for (let t = 0; t < this.chunks.length; t++) e += this.chunks[t].length;
            let t = new Uint8Array(e),
              n = 0;
            for (let e = 0; e < this.chunks.length; e++)
              (t.set(this.chunks[e], n), (n += this.chunks[e].length));
            return ((this.chunks = []), t);
          }
          fork() {
            return (
              this.stack.push({ chunks: this.chunks, buf: this.buf }),
              (this.chunks = []),
              (this.buf = []),
              this
            );
          }
          join() {
            let e = this.finish(),
              t = this.stack.pop();
            if (!t) throw new Error("invalid state, fork stack empty");
            return (
              (this.chunks = t.chunks), (this.buf = t.buf), this.uint32(e.byteLength), this.raw(e)
            );
          }
          tag(e, t) {
            return this.uint32(((e << 3) | t) >>> 0);
          }
          raw(e) {
            return (
              this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), (this.buf = [])),
              this.chunks.push(e),
              this
            );
          }
          uint32(e) {
            for ((0, o.assertUInt32)(e); e > 127;) (this.buf.push((127 & e) | 128), (e >>>= 7));
            return (this.buf.push(e), this);
          }
          int32(e) {
            return ((0, o.assertInt32)(e), (0, r.varint32write)(e, this.buf), this);
          }
          bool(e) {
            return (this.buf.push(e ? 1 : 0), this);
          }
          bytes(e) {
            return (this.uint32(e.byteLength), this.raw(e));
          }
          string(e) {
            let t = this.textEncoder.encode(e);
            return (this.uint32(t.byteLength), this.raw(t));
          }
          float(e) {
            (0, o.assertFloat32)(e);
            let t = new Uint8Array(4);
            return (new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t));
          }
          double(e) {
            let t = new Uint8Array(8);
            return (new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t));
          }
          fixed32(e) {
            (0, o.assertUInt32)(e);
            let t = new Uint8Array(4);
            return (new DataView(t.buffer).setUint32(0, e, !0), this.raw(t));
          }
          sfixed32(e) {
            (0, o.assertInt32)(e);
            let t = new Uint8Array(4);
            return (new DataView(t.buffer).setInt32(0, e, !0), this.raw(t));
          }
          sint32(e) {
            return (
              (0, o.assertInt32)(e),
              (e = ((e << 1) ^ (e >> 31)) >>> 0),
              (0, r.varint32write)(e, this.buf),
              this
            );
          }
          sfixed64(e) {
            let t = new Uint8Array(8),
              n = new DataView(t.buffer),
              r = a.protoInt64.enc(e);
            return (n.setInt32(0, r.lo, !0), n.setInt32(4, r.hi, !0), this.raw(t));
          }
          fixed64(e) {
            let t = new Uint8Array(8),
              n = new DataView(t.buffer),
              r = a.protoInt64.uEnc(e);
            return (n.setInt32(0, r.lo, !0), n.setInt32(4, r.hi, !0), this.raw(t));
          }
          int64(e) {
            let t = a.protoInt64.enc(e);
            return ((0, r.varint64write)(t.lo, t.hi, this.buf), this);
          }
          sint64(e) {
            let t = a.protoInt64.enc(e),
              n = t.hi >> 31,
              o = (t.lo << 1) ^ n,
              s = ((t.hi << 1) | (t.lo >>> 31)) ^ n;
            return ((0, r.varint64write)(o, s, this.buf), this);
          }
          uint64(e) {
            let t = a.protoInt64.uEnc(e);
            return ((0, r.varint64write)(t.lo, t.hi, this.buf), this);
          }
        };
        t.BinaryReader = class {
          constructor(e, t) {
            ((this.varint64 = r.varint64read),
              (this.uint32 = r.varint32read),
              (this.buf = e),
              (this.len = e.length),
              (this.pos = 0),
              (this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)),
              (this.textDecoder = null != t ? t : new TextDecoder()));
          }
          tag() {
            let e = this.uint32(),
              t = e >>> 3,
              n = 7 & e;
            if (t <= 0 || n < 0 || n > 5)
              throw new Error("illegal tag: field no " + t + " wire type " + n);
            return [t, n];
          }
          skip(e, t) {
            let n = this.pos;
            switch (e) {
              case s.Varint:
                for (; 128 & this.buf[this.pos++];);
                break;
              case s.Bit64:
                this.pos += 4;
              case s.Bit32:
                this.pos += 4;
                break;
              case s.LengthDelimited:
                let n = this.uint32();
                this.pos += n;
                break;
              case s.StartGroup:
                for (;;) {
                  const [e, n] = this.tag();
                  if (n === s.EndGroup) {
                    if (void 0 !== t && e !== t) throw new Error("invalid end group tag");
                    break;
                  }
                  this.skip(n, e);
                }
                break;
              default:
                throw new Error("cant skip wire type " + e);
            }
            return (this.assertBounds(), this.buf.subarray(n, this.pos));
          }
          assertBounds() {
            if (this.pos > this.len) throw new RangeError("premature EOF");
          }
          int32() {
            return 0 | this.uint32();
          }
          sint32() {
            let e = this.uint32();
            return (e >>> 1) ^ -(1 & e);
          }
          int64() {
            return a.protoInt64.dec(...this.varint64());
          }
          uint64() {
            return a.protoInt64.uDec(...this.varint64());
          }
          sint64() {
            let [e, t] = this.varint64(),
              n = -(1 & e);
            return (
              (e = ((e >>> 1) | ((1 & t) << 31)) ^ n), (t = (t >>> 1) ^ n), a.protoInt64.dec(e, t)
            );
          }
          bool() {
            let [e, t] = this.varint64();
            return 0 !== e || 0 !== t;
          }
          fixed32() {
            return this.view.getUint32((this.pos += 4) - 4, !0);
          }
          sfixed32() {
            return this.view.getInt32((this.pos += 4) - 4, !0);
          }
          fixed64() {
            return a.protoInt64.uDec(this.sfixed32(), this.sfixed32());
          }
          sfixed64() {
            return a.protoInt64.dec(this.sfixed32(), this.sfixed32());
          }
          float() {
            return this.view.getFloat32((this.pos += 4) - 4, !0);
          }
          double() {
            return this.view.getFloat64((this.pos += 8) - 8, !0);
          }
          bytes() {
            let e = this.uint32(),
              t = this.pos;
            return ((this.pos += e), this.assertBounds(), this.buf.subarray(t, t + e));
          }
          string() {
            return this.textDecoder.decode(this.bytes());
          }
        };
      },
      907: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.Timestamp = void 0));
        const r = n(193),
          o = n(498),
          a = n(599);
        class s extends r.Message {
          constructor(e) {
            (super(),
              (this.seconds = o.protoInt64.zero),
              (this.nanos = 0),
              a.proto3.util.initPartial(e, this));
          }
          fromJson(e, t) {
            if ("string" != typeof e)
              throw new Error(
                `cannot decode google.protobuf.Timestamp from JSON: ${a.proto3.json.debug(e)}`,
              );
            const n = e.match(
              /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/,
            );
            if (!n)
              throw new Error(
                "cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string",
              );
            const r = Date.parse(
              n[1] +
                "-" +
                n[2] +
                "-" +
                n[3] +
                "T" +
                n[4] +
                ":" +
                n[5] +
                ":" +
                n[6] +
                (n[8] ? n[8] : "Z"),
            );
            if (Number.isNaN(r))
              throw new Error(
                "cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string",
              );
            if (r < Date.parse("0001-01-01T00:00:00Z") || r > Date.parse("9999-12-31T23:59:59Z"))
              throw new Error(
                "cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive",
              );
            return (
              (this.seconds = o.protoInt64.parse(r / 1e3)),
              (this.nanos = 0),
              n[7] && (this.nanos = parseInt("1" + n[7] + "0".repeat(9 - n[7].length)) - 1e9),
              this
            );
          }
          toJson(e) {
            const t = 1e3 * Number(this.seconds);
            if (t < Date.parse("0001-01-01T00:00:00Z") || t > Date.parse("9999-12-31T23:59:59Z"))
              throw new Error(
                "cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive",
              );
            if (this.nanos < 0)
              throw new Error(
                "cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative",
              );
            let n = "Z";
            if (this.nanos > 0) {
              const e = (this.nanos + 1e9).toString().substring(1);
              n =
                "000000" === e.substring(3)
                  ? "." + e.substring(0, 3) + "Z"
                  : "000" === e.substring(6)
                    ? "." + e.substring(0, 6) + "Z"
                    : "." + e + "Z";
            }
            return new Date(t).toISOString().replace(".000Z", n);
          }
          toDate() {
            return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
          }
          static now() {
            return s.fromDate(new Date());
          }
          static fromDate(e) {
            const t = e.getTime();
            return new s({
              seconds: o.protoInt64.parse(Math.floor(t / 1e3)),
              nanos: (t % 1e3) * 1e6,
            });
          }
          static fromBinary(e, t) {
            return new s().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new s().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new s().fromJsonString(e, t);
          }
          static equals(e, t) {
            return a.proto3.util.equals(s, e, t);
          }
        }
        ((t.Timestamp = s),
          (s.runtime = a.proto3),
          (s.typeName = "google.protobuf.Timestamp"),
          (s.fields = a.proto3.util.newFieldList(() => [
            { no: 1, name: "seconds", kind: "scalar", T: 3 },
            { no: 2, name: "nanos", kind: "scalar", T: 5 },
          ])));
      },
      924: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.reifyWkt = void 0));
        const r = n(408);
        t.reifyWkt = function (e) {
          switch (e.typeName) {
            case "google.protobuf.Any": {
              const t = e.fields.find(
                  (e) =>
                    1 == e.number && "scalar" == e.fieldKind && e.scalar === r.ScalarType.STRING,
                ),
                n = e.fields.find(
                  (e) =>
                    2 == e.number && "scalar" == e.fieldKind && e.scalar === r.ScalarType.BYTES,
                );
              if (t && n) return { typeName: e.typeName, typeUrl: t, value: n };
              break;
            }
            case "google.protobuf.Timestamp": {
              const t = e.fields.find(
                  (e) =>
                    1 == e.number && "scalar" == e.fieldKind && e.scalar === r.ScalarType.INT64,
                ),
                n = e.fields.find(
                  (e) =>
                    2 == e.number && "scalar" == e.fieldKind && e.scalar === r.ScalarType.INT32,
                );
              if (t && n) return { typeName: e.typeName, seconds: t, nanos: n };
              break;
            }
            case "google.protobuf.Duration": {
              const t = e.fields.find(
                  (e) =>
                    1 == e.number && "scalar" == e.fieldKind && e.scalar === r.ScalarType.INT64,
                ),
                n = e.fields.find(
                  (e) =>
                    2 == e.number && "scalar" == e.fieldKind && e.scalar === r.ScalarType.INT32,
                );
              if (t && n) return { typeName: e.typeName, seconds: t, nanos: n };
              break;
            }
            case "google.protobuf.Struct": {
              const t = e.fields.find((e) => 1 == e.number && !e.repeated);
              if (
                "map" !== (null == t ? void 0 : t.fieldKind) ||
                "message" !== t.mapValue.kind ||
                "google.protobuf.Value" !== t.mapValue.message.typeName
              )
                break;
              return { typeName: e.typeName, fields: t };
            }
            case "google.protobuf.Value": {
              const t = e.oneofs.find((e) => "kind" === e.name),
                n = e.fields.find((e) => 1 == e.number && e.oneof === t);
              if (
                "enum" !== (null == n ? void 0 : n.fieldKind) ||
                "google.protobuf.NullValue" !== n.enum.typeName
              )
                return;
              const o = e.fields.find(
                  (e) =>
                    2 == e.number &&
                    "scalar" == e.fieldKind &&
                    e.scalar === r.ScalarType.DOUBLE &&
                    e.oneof === t,
                ),
                a = e.fields.find(
                  (e) =>
                    3 == e.number &&
                    "scalar" == e.fieldKind &&
                    e.scalar === r.ScalarType.STRING &&
                    e.oneof === t,
                ),
                s = e.fields.find(
                  (e) =>
                    4 == e.number &&
                    "scalar" == e.fieldKind &&
                    e.scalar === r.ScalarType.BOOL &&
                    e.oneof === t,
                ),
                i = e.fields.find((e) => 5 == e.number && e.oneof === t);
              if (
                "message" !== (null == i ? void 0 : i.fieldKind) ||
                "google.protobuf.Struct" !== i.message.typeName
              )
                return;
              const l = e.fields.find((e) => 6 == e.number && e.oneof === t);
              if (
                "message" !== (null == l ? void 0 : l.fieldKind) ||
                "google.protobuf.ListValue" !== l.message.typeName
              )
                return;
              if (t && o && a && s)
                return {
                  typeName: e.typeName,
                  kind: t,
                  nullValue: n,
                  numberValue: o,
                  stringValue: a,
                  boolValue: s,
                  structValue: i,
                  listValue: l,
                };
              break;
            }
            case "google.protobuf.ListValue": {
              const t = e.fields.find((e) => 1 == e.number && e.repeated);
              if (
                "message" != (null == t ? void 0 : t.fieldKind) ||
                "google.protobuf.Value" !== t.message.typeName
              )
                break;
              return { typeName: e.typeName, values: t };
            }
            case "google.protobuf.FieldMask": {
              const t = e.fields.find(
                (e) =>
                  1 == e.number &&
                  "scalar" == e.fieldKind &&
                  e.scalar === r.ScalarType.STRING &&
                  e.repeated,
              );
              if (t) return { typeName: e.typeName, paths: t };
              break;
            }
            case "google.protobuf.DoubleValue":
            case "google.protobuf.FloatValue":
            case "google.protobuf.Int64Value":
            case "google.protobuf.UInt64Value":
            case "google.protobuf.Int32Value":
            case "google.protobuf.UInt32Value":
            case "google.protobuf.BoolValue":
            case "google.protobuf.StringValue":
            case "google.protobuf.BytesValue": {
              const t = e.fields.find((e) => 1 == e.number && "value" == e.name);
              if (!t) break;
              if ("scalar" !== t.fieldKind) break;
              return { typeName: e.typeName, value: t };
            }
          }
        };
      },
      942: (e, t) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createRegistry = void 0),
          (t.createRegistry = function (...e) {
            const t = {},
              n = {},
              r = {},
              o = new Map(),
              a = new Map(),
              s = {
                findMessage: (e) => t[e],
                findEnum: (e) => n[e],
                findService: (e) => r[e],
                findExtensionFor(e, t) {
                  var n, r;
                  return null !==
                    (r = null === (n = a.get(e)) || void 0 === n ? void 0 : n.get(t)) &&
                    void 0 !== r
                    ? r
                    : void 0;
                },
                findExtension(e) {
                  var t;
                  return null !== (t = o.get(e)) && void 0 !== t ? t : void 0;
                },
              };
            function i(e) {
              var u;
              if ("fields" in e)
                s.findMessage(e.typeName) || ((t[e.typeName] = e), e.fields.list().forEach(l));
              else if ("methods" in e) {
                if (!s.findService(e.typeName)) {
                  r[e.typeName] = e;
                  for (const t of Object.values(e.methods)) (i(t.I), i(t.O));
                }
              } else if ("extendee" in e) {
                if (!o.has(e.typeName)) {
                  o.set(e.typeName, e);
                  const t = e.extendee.typeName;
                  (a.has(t) || a.set(t, new Map()),
                    null === (u = a.get(t)) || void 0 === u || u.set(e.field.no, e),
                    i(e.extendee),
                    l(e.field));
                }
              } else n[e.typeName] = e;
            }
            function l(e) {
              "message" == e.kind
                ? i(e.T)
                : "map" == e.kind && "message" == e.V.kind
                  ? i(e.V.T)
                  : "enum" == e.kind && i(e.T);
            }
            for (const t of e) i(t);
            return s;
          }));
      },
      970: (e, t, n) => {
        (Object.defineProperty(t, "__esModule", { value: !0 }), (t.FieldMask = void 0));
        const r = n(193),
          o = n(599);
        class a extends r.Message {
          constructor(e) {
            (super(), (this.paths = []), o.proto3.util.initPartial(e, this));
          }
          toJson(e) {
            return this.paths
              .map((e) => {
                if (e.match(/_[0-9]?_/g) || e.match(/[A-Z]/g))
                  throw new Error(
                    'cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' +
                      e +
                      '" is irreversible',
                  );
                return (function (e) {
                  let t = !1;
                  const n = [];
                  for (let r = 0; r < e.length; r++) {
                    let o = e.charAt(r);
                    switch (o) {
                      case "_":
                        t = !0;
                        break;
                      case "0":
                      case "1":
                      case "2":
                      case "3":
                      case "4":
                      case "5":
                      case "6":
                      case "7":
                      case "8":
                      case "9":
                        (n.push(o), (t = !1));
                        break;
                      default:
                        (t && ((t = !1), (o = o.toUpperCase())), n.push(o));
                    }
                  }
                  return n.join("");
                })(e);
              })
              .join(",");
          }
          fromJson(e, t) {
            if ("string" != typeof e)
              throw new Error(
                "cannot decode google.protobuf.FieldMask from JSON: " + o.proto3.json.debug(e),
              );
            if ("" === e) return this;
            return (
              (this.paths = e.split(",").map(function (e) {
                if (e.includes("_"))
                  throw new Error(
                    "cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase",
                  );
                const t = e.replace(/[A-Z]/g, (e) => "_" + e.toLowerCase());
                return "_" === t[0] ? t.substring(1) : t;
              })),
              this
            );
          }
          static fromBinary(e, t) {
            return new a().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new a().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new a().fromJsonString(e, t);
          }
          static equals(e, t) {
            return o.proto3.util.equals(a, e, t);
          }
        }
        ((t.FieldMask = a),
          (a.runtime = o.proto3),
          (a.typeName = "google.protobuf.FieldMask"),
          (a.fields = o.proto3.util.newFieldList(() => [
            { no: 1, name: "paths", kind: "scalar", T: 9, repeated: !0 },
          ])));
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return (e[r].call(a.exports, a, a.exports, n), a.exports);
  }
  ((n.d = (e, t) => {
    for (var r in t)
      n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }));
  var r = {};
  (n.r(r), n.d(r, { activate: () => Kr, deactivate: () => Zr }));
  const o = require("vscode");
  var a = n(38);
  function s(e, t) {
    if (!e) throw new Error(t);
  }
  function i(e) {
    if ("number" != typeof e) throw new Error("invalid int 32: " + typeof e);
    if (!Number.isInteger(e) || e > 2147483647 || e < -2147483648)
      throw new Error("invalid int 32: " + e);
  }
  function l(e) {
    if ("number" != typeof e) throw new Error("invalid uint 32: " + typeof e);
    if (!Number.isInteger(e) || e > 4294967295 || e < 0) throw new Error("invalid uint 32: " + e);
  }
  function u(e) {
    if ("number" != typeof e) throw new Error("invalid float 32: " + typeof e);
    if (Number.isFinite(e) && (e > 34028234663852886e22 || e < -34028234663852886e22))
      throw new Error("invalid float 32: " + e);
  }
  const c = Symbol("@bufbuild/protobuf/enum-type");
  function m(e) {
    const t = e[c];
    return (s(t, "missing enum type on enum object"), t);
  }
  function p(e, t, n, r) {
    e[c] = d(
      t,
      n.map((t) => ({ no: t.no, name: t.name, localName: e[t.no] })),
      r,
    );
  }
  function d(e, t, n) {
    const r = Object.create(null),
      o = Object.create(null),
      a = [];
    for (const e of t) {
      const t = T(e);
      (a.push(t), (r[e.name] = t), (o[e.no] = t));
    }
    return { typeName: e, values: a, findName: (e) => r[e], findNumber: (e) => o[e] };
  }
  function f(e, t, n) {
    const r = {};
    for (const e of t) {
      const t = T(e);
      ((r[t.localName] = t.no), (r[t.no] = t.localName));
    }
    return (p(r, e, t, n), r);
  }
  function T(e) {
    return "localName" in e ? e : { ...e, localName: e.name };
  }
  class g {
    equals(e) {
      return this.getType().runtime.util.equals(this.getType(), this, e);
    }
    clone() {
      return this.getType().runtime.util.clone(this);
    }
    fromBinary(e, t) {
      const n = this.getType().runtime.bin,
        r = n.makeReadOptions(t);
      return (n.readMessage(this, r.readerFactory(e), e.byteLength, r), this);
    }
    fromJson(e, t) {
      const n = this.getType(),
        r = n.runtime.json,
        o = r.makeReadOptions(t);
      return (r.readMessage(n, e, o, this), this);
    }
    fromJsonString(e, t) {
      let n;
      try {
        n = JSON.parse(e);
      } catch (e) {
        throw new Error(
          `cannot decode ${this.getType().typeName} from JSON: ${e instanceof Error ? e.message : String(e)}`,
        );
      }
      return this.fromJson(n, t);
    }
    toBinary(e) {
      const t = this.getType().runtime.bin,
        n = t.makeWriteOptions(e),
        r = n.writerFactory();
      return (t.writeMessage(this, r, n), r.finish());
    }
    toJson(e) {
      const t = this.getType().runtime.json,
        n = t.makeWriteOptions(e);
      return t.writeMessage(this, n);
    }
    toJsonString(e) {
      const t = this.toJson(e);
      return JSON.stringify(t, null, e?.prettySpaces ?? 0);
    }
    toJSON() {
      return this.toJson({ emitDefaultValues: !0 });
    }
    getType() {
      return Object.getPrototypeOf(this).constructor;
    }
  }
  function E() {
    let e = 0,
      t = 0;
    for (let n = 0; n < 28; n += 7) {
      let r = this.buf[this.pos++];
      if (((e |= (127 & r) << n), !(128 & r))) return (this.assertBounds(), [e, t]);
    }
    let n = this.buf[this.pos++];
    if (((e |= (15 & n) << 28), (t = (112 & n) >> 4), !(128 & n)))
      return (this.assertBounds(), [e, t]);
    for (let n = 3; n <= 31; n += 7) {
      let r = this.buf[this.pos++];
      if (((t |= (127 & r) << n), !(128 & r))) return (this.assertBounds(), [e, t]);
    }
    throw new Error("invalid varint");
  }
  function y(e, t, n) {
    for (let r = 0; r < 28; r += 7) {
      const o = e >>> r,
        a = !(o >>> 7 == 0 && 0 == t),
        s = 255 & (a ? 128 | o : o);
      if ((n.push(s), !a)) return;
    }
    const r = ((e >>> 28) & 15) | ((7 & t) << 4),
      o = !!(t >> 3);
    if ((n.push(255 & (o ? 128 | r : r)), o)) {
      for (let e = 3; e < 31; e += 7) {
        const r = t >>> e,
          o = !(r >>> 7 == 0),
          a = 255 & (o ? 128 | r : r);
        if ((n.push(a), !o)) return;
      }
      n.push((t >>> 31) & 1);
    }
  }
  const h = 4294967296;
  function N(e) {
    const t = "-" === e[0];
    t && (e = e.slice(1));
    const n = 1e6;
    let r = 0,
      o = 0;
    function a(t, a) {
      const s = Number(e.slice(t, a));
      ((o *= n), (r = r * n + s), r >= h && ((o += (r / h) | 0), (r %= h)));
    }
    return (a(-24, -18), a(-18, -12), a(-12, -6), a(-6), t ? S(r, o) : I(r, o));
  }
  function _(e, t) {
    if (
      (({ lo: e, hi: t } = (function (e, t) {
        return { lo: e >>> 0, hi: t >>> 0 };
      })(e, t)),
      t <= 2097151)
    )
      return String(h * t + e);
    const n = 16777215 & ((e >>> 24) | (t << 8)),
      r = (t >> 16) & 65535;
    let o = (16777215 & e) + 6777216 * n + 6710656 * r,
      a = n + 8147497 * r,
      s = 2 * r;
    const i = 1e7;
    return (
      o >= i && ((a += Math.floor(o / i)), (o %= i)),
      a >= i && ((s += Math.floor(a / i)), (a %= i)),
      s.toString() + w(a) + w(o)
    );
  }
  function I(e, t) {
    return { lo: 0 | e, hi: 0 | t };
  }
  function S(e, t) {
    return ((t = ~t), e ? (e = 1 + ~e) : (t += 1), I(e, t));
  }
  const w = (e) => {
    const t = String(e);
    return "0000000".slice(t.length) + t;
  };
  function O(e, t) {
    if (e >= 0) {
      for (; e > 127;) (t.push((127 & e) | 128), (e >>>= 7));
      t.push(e);
    } else {
      for (let n = 0; n < 9; n++) (t.push((127 & e) | 128), (e >>= 7));
      t.push(1);
    }
  }
  function b() {
    let e = this.buf[this.pos++],
      t = 127 & e;
    if (!(128 & e)) return (this.assertBounds(), t);
    if (((e = this.buf[this.pos++]), (t |= (127 & e) << 7), !(128 & e)))
      return (this.assertBounds(), t);
    if (((e = this.buf[this.pos++]), (t |= (127 & e) << 14), !(128 & e)))
      return (this.assertBounds(), t);
    if (((e = this.buf[this.pos++]), (t |= (127 & e) << 21), !(128 & e)))
      return (this.assertBounds(), t);
    ((e = this.buf[this.pos++]), (t |= (15 & e) << 28));
    for (let t = 5; 128 & e && t < 10; t++) e = this.buf[this.pos++];
    if (128 & e) throw new Error("invalid varint");
    return (this.assertBounds(), t >>> 0);
  }
  const k = (function () {
    const e = new DataView(new ArrayBuffer(8));
    if (
      "function" == typeof BigInt &&
      "function" == typeof e.getBigInt64 &&
      "function" == typeof e.getBigUint64 &&
      "function" == typeof e.setBigInt64 &&
      "function" == typeof e.setBigUint64 &&
      ("object" != typeof process ||
        "object" != typeof process.env ||
        "1" !== process.env.BUF_BIGINT_DISABLE)
    ) {
      const t = BigInt("-9223372036854775808"),
        n = BigInt("9223372036854775807"),
        r = BigInt("0"),
        o = BigInt("18446744073709551615");
      return {
        zero: BigInt(0),
        supported: !0,
        parse(e) {
          const r = "bigint" == typeof e ? e : BigInt(e);
          if (r > n || r < t) throw new Error(`int64 invalid: ${e}`);
          return r;
        },
        uParse(e) {
          const t = "bigint" == typeof e ? e : BigInt(e);
          if (t > o || t < r) throw new Error(`uint64 invalid: ${e}`);
          return t;
        },
        enc(t) {
          return (
            e.setBigInt64(0, this.parse(t), !0), { lo: e.getInt32(0, !0), hi: e.getInt32(4, !0) }
          );
        },
        uEnc(t) {
          return (
            e.setBigInt64(0, this.uParse(t), !0), { lo: e.getInt32(0, !0), hi: e.getInt32(4, !0) }
          );
        },
        dec: (t, n) => (e.setInt32(0, t, !0), e.setInt32(4, n, !0), e.getBigInt64(0, !0)),
        uDec: (t, n) => (e.setInt32(0, t, !0), e.setInt32(4, n, !0), e.getBigUint64(0, !0)),
      };
    }
    const t = (e) => s(/^-?[0-9]+$/.test(e), `int64 invalid: ${e}`),
      n = (e) => s(/^[0-9]+$/.test(e), `uint64 invalid: ${e}`);
    return {
      zero: "0",
      supported: !1,
      parse: (e) => ("string" != typeof e && (e = e.toString()), t(e), e),
      uParse: (e) => ("string" != typeof e && (e = e.toString()), n(e), e),
      enc: (e) => ("string" != typeof e && (e = e.toString()), t(e), N(e)),
      uEnc: (e) => ("string" != typeof e && (e = e.toString()), n(e), N(e)),
      dec: (e, t) =>
        (function (e, t) {
          let n = I(e, t);
          const r = 2147483648 & n.hi;
          r && (n = S(n.lo, n.hi));
          const o = _(n.lo, n.hi);
          return r ? "-" + o : o;
        })(e, t),
      uDec: (e, t) => _(e, t),
    };
  })();
  var v = ((e) => (
      (e[(e.DOUBLE = 1)] = "DOUBLE"),
      (e[(e.FLOAT = 2)] = "FLOAT"),
      (e[(e.INT64 = 3)] = "INT64"),
      (e[(e.UINT64 = 4)] = "UINT64"),
      (e[(e.INT32 = 5)] = "INT32"),
      (e[(e.FIXED64 = 6)] = "FIXED64"),
      (e[(e.FIXED32 = 7)] = "FIXED32"),
      (e[(e.BOOL = 8)] = "BOOL"),
      (e[(e.STRING = 9)] = "STRING"),
      (e[(e.BYTES = 12)] = "BYTES"),
      (e[(e.UINT32 = 13)] = "UINT32"),
      (e[(e.SFIXED32 = 15)] = "SFIXED32"),
      (e[(e.SFIXED64 = 16)] = "SFIXED64"),
      (e[(e.SINT32 = 17)] = "SINT32"),
      (e[(e.SINT64 = 18)] = "SINT64"),
      e
    ))(v || {}),
    P = ((e) => ((e[(e.BIGINT = 0)] = "BIGINT"), (e[(e.STRING = 1)] = "STRING"), e))(P || {});
  function F(e, t, n) {
    if (t === n) return !0;
    if (e == v.BYTES) {
      if (!(t instanceof Uint8Array && n instanceof Uint8Array)) return !1;
      if (t.length !== n.length) return !1;
      for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return !1;
      return !0;
    }
    switch (e) {
      case v.UINT64:
      case v.FIXED64:
      case v.INT64:
      case v.SFIXED64:
      case v.SINT64:
        return t == n;
    }
    return !1;
  }
  function D(e, t) {
    switch (e) {
      case v.BOOL:
        return !1;
      case v.UINT64:
      case v.FIXED64:
      case v.INT64:
      case v.SFIXED64:
      case v.SINT64:
        return 0 == t ? k.zero : "0";
      case v.DOUBLE:
      case v.FLOAT:
        return 0;
      case v.BYTES:
        return new Uint8Array(0);
      case v.STRING:
        return "";
      default:
        return 0;
    }
  }
  function R(e, t) {
    switch (e) {
      case v.BOOL:
        return !1 === t;
      case v.STRING:
        return "" === t;
      case v.BYTES:
        return t instanceof Uint8Array && !t.byteLength;
      default:
        return 0 == t;
    }
  }
  function J(e) {
    const t = e.field.localName,
      n = Object.create(null);
    return (
      (n[t] = (function (e) {
        const t = e.field;
        if (t.repeated) return [];
        if (void 0 !== t.default) return t.default;
        switch (t.kind) {
          case "enum":
            return t.T.values[0].no;
          case "scalar":
            return D(t.T, t.L);
          case "message":
            const e = t.T,
              n = new e();
            return e.fieldWrapper ? e.fieldWrapper.unwrapField(n) : n;
          case "map":
            throw "map fields are not allowed to be extensions";
        }
      })(e)),
      [n, () => n[t]]
    );
  }
  let U = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
    A = [];
  for (let e = 0; e < U.length; e++) A[U[e].charCodeAt(0)] = e;
  ((A["-".charCodeAt(0)] = U.indexOf("+")), (A["_".charCodeAt(0)] = U.indexOf("/")));
  const L = {
    dec(e) {
      let t = (3 * e.length) / 4;
      "=" == e[e.length - 2] ? (t -= 2) : "=" == e[e.length - 1] && (t -= 1);
      let n,
        r = new Uint8Array(t),
        o = 0,
        a = 0,
        s = 0;
      for (let t = 0; t < e.length; t++) {
        if (((n = A[e.charCodeAt(t)]), void 0 === n))
          switch (e[t]) {
            case "=":
              a = 0;
            case "\n":
            case "\r":
            case "\t":
            case " ":
              continue;
            default:
              throw Error("invalid base64 string.");
          }
        switch (a) {
          case 0:
            ((s = n), (a = 1));
            break;
          case 1:
            ((r[o++] = (s << 2) | ((48 & n) >> 4)), (s = n), (a = 2));
            break;
          case 2:
            ((r[o++] = ((15 & s) << 4) | ((60 & n) >> 2)), (s = n), (a = 3));
            break;
          case 3:
            ((r[o++] = ((3 & s) << 6) | n), (a = 0));
        }
      }
      if (1 == a) throw Error("invalid base64 string.");
      return r.subarray(0, o);
    },
    enc(e) {
      let t,
        n = "",
        r = 0,
        o = 0;
      for (let a = 0; a < e.length; a++)
        switch (((t = e[a]), r)) {
          case 0:
            ((n += U[t >> 2]), (o = (3 & t) << 4), (r = 1));
            break;
          case 1:
            ((n += U[o | (t >> 4)]), (o = (15 & t) << 2), (r = 2));
            break;
          case 2:
            ((n += U[o | (t >> 6)]), (n += U[63 & t]), (r = 0));
        }
      return (r && ((n += U[o]), (n += "="), 1 == r && (n += "=")), n);
    },
  };
  function B(e, t, n) {
    Y(t, e);
    const r = t.runtime.bin.makeReadOptions(n),
      o = (function (e, t) {
        if (!t.repeated && ("enum" == t.kind || "scalar" == t.kind)) {
          for (let n = e.length - 1; n >= 0; --n) if (e[n].no == t.no) return [e[n]];
          return [];
        }
        return e.filter((e) => e.no === t.no);
      })(e.getType().runtime.bin.listUnknownFields(e), t.field),
      [a, s] = J(t);
    for (const e of o) t.runtime.bin.readField(a, r.readerFactory(e.data), t.field, e.wireType, r);
    return s();
  }
  function M(e, t, n, r) {
    Y(t, e);
    const o = t.runtime.bin.makeReadOptions(r),
      a = t.runtime.bin.makeWriteOptions(r);
    if (x(e, t)) {
      const n = e
        .getType()
        .runtime.bin.listUnknownFields(e)
        .filter((e) => e.no != t.field.no);
      e.getType().runtime.bin.discardUnknownFields(e);
      for (const t of n) e.getType().runtime.bin.onUnknownField(e, t.no, t.wireType, t.data);
    }
    const s = a.writerFactory();
    let i = t.field;
    (i.opt ||
      i.repeated ||
      ("enum" != i.kind && "scalar" != i.kind) ||
      (i = { ...t.field, opt: !0 }),
      t.runtime.bin.writeField(i, n, s, a));
    const l = o.readerFactory(s.finish());
    for (; l.pos < l.len;) {
      const [t, n] = l.tag(),
        r = l.skip(n, t);
      e.getType().runtime.bin.onUnknownField(e, t, n, r);
    }
  }
  function x(e, t) {
    const n = e.getType();
    return (
      t.extendee.typeName === n.typeName &&
      !!n.runtime.bin.listUnknownFields(e).find((e) => e.no == t.field.no)
    );
  }
  function Y(e, t) {
    s(
      e.extendee.typeName == t.getType().typeName,
      `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`,
    );
  }
  function C(e, t) {
    const n = e.localName;
    if (e.repeated) return t[n].length > 0;
    if (e.oneof) return t[e.oneof.localName].case === n;
    switch (e.kind) {
      case "enum":
      case "scalar":
        return e.opt || e.req
          ? void 0 !== t[n]
          : "enum" == e.kind
            ? t[n] !== e.T.values[0].no
            : !R(e.T, t[n]);
      case "message":
        return void 0 !== t[n];
      case "map":
        return Object.keys(t[n]).length > 0;
    }
  }
  function j(e, t) {
    const n = e.localName,
      r = !e.opt && !e.req;
    if (e.repeated) t[n] = [];
    else if (e.oneof) t[e.oneof.localName] = { case: void 0 };
    else
      switch (e.kind) {
        case "map":
          t[n] = {};
          break;
        case "enum":
          t[n] = r ? e.T.values[0].no : void 0;
          break;
        case "scalar":
          t[n] = r ? D(e.T, e.L) : void 0;
          break;
        case "message":
          t[n] = void 0;
      }
  }
  function V(e, t) {
    if (null === e || "object" != typeof e) return !1;
    if (!Object.getOwnPropertyNames(g.prototype).every((t) => t in e && "function" == typeof e[t]))
      return !1;
    const n = e.getType();
    return (
      null !== n &&
      "function" == typeof n &&
      "typeName" in n &&
      "string" == typeof n.typeName &&
      (void 0 === t || n.typeName == t.typeName)
    );
  }
  function G(e, t) {
    const n = V(t);
    return n || e.fieldWrapper
      ? n || !e.fieldWrapper
        ? t
        : e.fieldWrapper.wrapField(t)
      : new e(t);
  }
  (v.DOUBLE, v.FLOAT, v.INT64, v.UINT64, v.INT32, v.UINT32, v.BOOL, v.STRING, v.BYTES);
  const q = { ignoreUnknownFields: !1 },
    $ = { emitDefaultValues: !1, enumAsInteger: !1, useProtoFieldName: !1, prettySpaces: 0 };
  function W(e) {
    return e ? { ...q, ...e } : q;
  }
  function X(e) {
    return e ? { ...$, ...e } : $;
  }
  const K = Symbol(),
    Z = Symbol();
  function H(e) {
    if (null === e) return "null";
    switch (typeof e) {
      case "object":
        return Array.isArray(e) ? "array" : "object";
      case "string":
        return e.length > 100 ? "string" : `"${e.split('"').join('\\"')}"`;
      default:
        return String(e);
    }
  }
  function z(e, t, n, r, o) {
    let a = n.localName;
    if (n.repeated) {
      if ((s("map" != n.kind), null === t)) return;
      if (!Array.isArray(t))
        throw new Error(`cannot decode field ${o.typeName}.${n.name} from JSON: ${H(t)}`);
      const i = e[a];
      for (const e of t) {
        if (null === e)
          throw new Error(`cannot decode field ${o.typeName}.${n.name} from JSON: ${H(e)}`);
        switch (n.kind) {
          case "message":
            i.push(n.T.fromJson(e, r));
            break;
          case "enum":
            const t = te(n.T, e, r.ignoreUnknownFields, !0);
            t !== Z && i.push(t);
            break;
          case "scalar":
            try {
              i.push(ee(n.T, e, n.L, !0));
            } catch (t) {
              let r = `cannot decode field ${o.typeName}.${n.name} from JSON: ${H(e)}`;
              throw (
                t instanceof Error && t.message.length > 0 && (r += `: ${t.message}`), new Error(r)
              );
            }
        }
      }
    } else if ("map" == n.kind) {
      if (null === t) return;
      if ("object" != typeof t || Array.isArray(t))
        throw new Error(`cannot decode field ${o.typeName}.${n.name} from JSON: ${H(t)}`);
      const s = e[a];
      for (const [e, a] of Object.entries(t)) {
        if (null === a)
          throw new Error(`cannot decode field ${o.typeName}.${n.name} from JSON: map value null`);
        let i;
        try {
          i = Q(n.K, e);
        } catch (e) {
          let r = `cannot decode map key for field ${o.typeName}.${n.name} from JSON: ${H(t)}`;
          throw (
            e instanceof Error && e.message.length > 0 && (r += `: ${e.message}`), new Error(r)
          );
        }
        switch (n.V.kind) {
          case "message":
            s[i] = n.V.T.fromJson(a, r);
            break;
          case "enum":
            const e = te(n.V.T, a, r.ignoreUnknownFields, !0);
            e !== Z && (s[i] = e);
            break;
          case "scalar":
            try {
              s[i] = ee(n.V.T, a, P.BIGINT, !0);
            } catch (e) {
              let r = `cannot decode map value for field ${o.typeName}.${n.name} from JSON: ${H(t)}`;
              throw (
                e instanceof Error && e.message.length > 0 && (r += `: ${e.message}`), new Error(r)
              );
            }
        }
      }
    } else
      switch ((n.oneof && ((e = e[n.oneof.localName] = { case: a }), (a = "value")), n.kind)) {
        case "message":
          const s = n.T;
          if (null === t && "google.protobuf.Value" != s.typeName) return;
          let i = e[a];
          V(i)
            ? i.fromJson(t, r)
            : ((e[a] = i = s.fromJson(t, r)),
              s.fieldWrapper && !n.oneof && (e[a] = s.fieldWrapper.unwrapField(i)));
          break;
        case "enum":
          const l = te(n.T, t, r.ignoreUnknownFields, !1);
          switch (l) {
            case K:
              j(n, e);
              break;
            case Z:
              break;
            default:
              e[a] = l;
          }
          break;
        case "scalar":
          try {
            const r = ee(n.T, t, n.L, !1);
            if (r === K) j(n, e);
            else e[a] = r;
          } catch (e) {
            let r = `cannot decode field ${o.typeName}.${n.name} from JSON: ${H(t)}`;
            throw (
              e instanceof Error && e.message.length > 0 && (r += `: ${e.message}`), new Error(r)
            );
          }
      }
  }
  function Q(e, t) {
    if (e === v.BOOL)
      switch (t) {
        case "true":
          t = !0;
          break;
        case "false":
          t = !1;
      }
    return ee(e, t, P.BIGINT, !0).toString();
  }
  function ee(e, t, n, r) {
    if (null === t) return r ? D(e, n) : K;
    switch (e) {
      case v.DOUBLE:
      case v.FLOAT:
        if ("NaN" === t) return Number.NaN;
        if ("Infinity" === t) return Number.POSITIVE_INFINITY;
        if ("-Infinity" === t) return Number.NEGATIVE_INFINITY;
        if ("" === t) break;
        if ("string" == typeof t && t.trim().length !== t.length) break;
        if ("string" != typeof t && "number" != typeof t) break;
        const r = Number(t);
        if (Number.isNaN(r)) break;
        if (!Number.isFinite(r)) break;
        return (e == v.FLOAT && u(r), r);
      case v.INT32:
      case v.FIXED32:
      case v.SFIXED32:
      case v.SINT32:
      case v.UINT32:
        let o;
        if (
          ("number" == typeof t
            ? (o = t)
            : "string" == typeof t &&
              t.length > 0 &&
              t.trim().length === t.length &&
              (o = Number(t)),
          void 0 === o)
        )
          break;
        return (e == v.UINT32 || e == v.FIXED32 ? l(o) : i(o), o);
      case v.INT64:
      case v.SFIXED64:
      case v.SINT64:
        if ("number" != typeof t && "string" != typeof t) break;
        const a = k.parse(t);
        return n ? a.toString() : a;
      case v.FIXED64:
      case v.UINT64:
        if ("number" != typeof t && "string" != typeof t) break;
        const s = k.uParse(t);
        return n ? s.toString() : s;
      case v.BOOL:
        if ("boolean" != typeof t) break;
        return t;
      case v.STRING:
        if ("string" != typeof t) break;
        try {
          encodeURIComponent(t);
        } catch (e) {
          throw new Error("invalid UTF8");
        }
        return t;
      case v.BYTES:
        if ("" === t) return new Uint8Array(0);
        if ("string" != typeof t) break;
        return L.dec(t);
    }
    throw new Error();
  }
  function te(e, t, n, r) {
    if (null === t) return "google.protobuf.NullValue" == e.typeName ? 0 : r ? e.values[0].no : K;
    switch (typeof t) {
      case "number":
        if (Number.isInteger(t)) return t;
        break;
      case "string":
        const r = e.findName(t);
        if (void 0 !== r) return r.no;
        if (n) return Z;
    }
    throw new Error(`cannot decode enum ${e.typeName} from JSON: ${H(t)}`);
  }
  function ne(e) {
    return (
      !(!e.repeated && "map" != e.kind) || (!e.oneof && "message" != e.kind && !e.opt && !e.req)
    );
  }
  function re(e, t, n) {
    if ("map" == e.kind) {
      s("object" == typeof t && null != t);
      const r = {},
        o = Object.entries(t);
      switch (e.V.kind) {
        case "scalar":
          for (const [t, n] of o) r[t.toString()] = ae(e.V.T, n);
          break;
        case "message":
          for (const [e, t] of o) r[e.toString()] = t.toJson(n);
          break;
        case "enum":
          const t = e.V.T;
          for (const [e, a] of o) r[e.toString()] = oe(t, a, n.enumAsInteger);
      }
      return n.emitDefaultValues || o.length > 0 ? r : void 0;
    }
    if (e.repeated) {
      s(Array.isArray(t));
      const r = [];
      switch (e.kind) {
        case "scalar":
          for (let n = 0; n < t.length; n++) r.push(ae(e.T, t[n]));
          break;
        case "enum":
          for (let o = 0; o < t.length; o++) r.push(oe(e.T, t[o], n.enumAsInteger));
          break;
        case "message":
          for (let e = 0; e < t.length; e++) r.push(t[e].toJson(n));
      }
      return n.emitDefaultValues || r.length > 0 ? r : void 0;
    }
    switch (e.kind) {
      case "scalar":
        return ae(e.T, t);
      case "enum":
        return oe(e.T, t, n.enumAsInteger);
      case "message":
        return G(e.T, t).toJson(n);
    }
  }
  function oe(e, t, n) {
    if ((s("number" == typeof t), "google.protobuf.NullValue" == e.typeName)) return null;
    if (n) return t;
    const r = e.findNumber(t);
    return r?.name ?? t;
  }
  function ae(e, t) {
    switch (e) {
      case v.INT32:
      case v.SFIXED32:
      case v.SINT32:
      case v.FIXED32:
      case v.UINT32:
        return (s("number" == typeof t), t);
      case v.FLOAT:
      case v.DOUBLE:
        return (
          s("number" == typeof t),
          Number.isNaN(t)
            ? "NaN"
            : t === Number.POSITIVE_INFINITY
              ? "Infinity"
              : t === Number.NEGATIVE_INFINITY
                ? "-Infinity"
                : t
        );
      case v.STRING:
        return (s("string" == typeof t), t);
      case v.BOOL:
        return (s("boolean" == typeof t), t);
      case v.UINT64:
      case v.FIXED64:
      case v.INT64:
      case v.SFIXED64:
      case v.SINT64:
        return (
          s("bigint" == typeof t || "string" == typeof t || "number" == typeof t), t.toString()
        );
      case v.BYTES:
        return (s(t instanceof Uint8Array), L.enc(t));
    }
  }
  var se = ((e) => (
    (e[(e.Varint = 0)] = "Varint"),
    (e[(e.Bit64 = 1)] = "Bit64"),
    (e[(e.LengthDelimited = 2)] = "LengthDelimited"),
    (e[(e.StartGroup = 3)] = "StartGroup"),
    (e[(e.EndGroup = 4)] = "EndGroup"),
    (e[(e.Bit32 = 5)] = "Bit32"),
    e
  ))(se || {});
  class ie {
    constructor(e) {
      ((this.stack = []),
        (this.textEncoder = e ?? new TextEncoder()),
        (this.chunks = []),
        (this.buf = []));
    }
    finish() {
      this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), (this.buf = []));
      let e = 0;
      for (let t = 0; t < this.chunks.length; t++) e += this.chunks[t].length;
      let t = new Uint8Array(e),
        n = 0;
      for (let e = 0; e < this.chunks.length; e++)
        (t.set(this.chunks[e], n), (n += this.chunks[e].length));
      return ((this.chunks = []), t);
    }
    fork() {
      return (
        this.stack.push({ chunks: this.chunks, buf: this.buf }),
        (this.chunks = []),
        (this.buf = []),
        this
      );
    }
    join() {
      let e = this.finish(),
        t = this.stack.pop();
      if (!t) throw new Error("invalid state, fork stack empty");
      return ((this.chunks = t.chunks), (this.buf = t.buf), this.uint32(e.byteLength), this.raw(e));
    }
    tag(e, t) {
      return this.uint32(((e << 3) | t) >>> 0);
    }
    raw(e) {
      return (
        this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), (this.buf = [])),
        this.chunks.push(e),
        this
      );
    }
    uint32(e) {
      for (l(e); e > 127;) (this.buf.push((127 & e) | 128), (e >>>= 7));
      return (this.buf.push(e), this);
    }
    int32(e) {
      return (i(e), O(e, this.buf), this);
    }
    bool(e) {
      return (this.buf.push(e ? 1 : 0), this);
    }
    bytes(e) {
      return (this.uint32(e.byteLength), this.raw(e));
    }
    string(e) {
      let t = this.textEncoder.encode(e);
      return (this.uint32(t.byteLength), this.raw(t));
    }
    float(e) {
      u(e);
      let t = new Uint8Array(4);
      return (new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t));
    }
    double(e) {
      let t = new Uint8Array(8);
      return (new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t));
    }
    fixed32(e) {
      l(e);
      let t = new Uint8Array(4);
      return (new DataView(t.buffer).setUint32(0, e, !0), this.raw(t));
    }
    sfixed32(e) {
      i(e);
      let t = new Uint8Array(4);
      return (new DataView(t.buffer).setInt32(0, e, !0), this.raw(t));
    }
    sint32(e) {
      return (i(e), O((e = ((e << 1) ^ (e >> 31)) >>> 0), this.buf), this);
    }
    sfixed64(e) {
      let t = new Uint8Array(8),
        n = new DataView(t.buffer),
        r = k.enc(e);
      return (n.setInt32(0, r.lo, !0), n.setInt32(4, r.hi, !0), this.raw(t));
    }
    fixed64(e) {
      let t = new Uint8Array(8),
        n = new DataView(t.buffer),
        r = k.uEnc(e);
      return (n.setInt32(0, r.lo, !0), n.setInt32(4, r.hi, !0), this.raw(t));
    }
    int64(e) {
      let t = k.enc(e);
      return (y(t.lo, t.hi, this.buf), this);
    }
    sint64(e) {
      let t = k.enc(e),
        n = t.hi >> 31;
      return (y((t.lo << 1) ^ n, ((t.hi << 1) | (t.lo >>> 31)) ^ n, this.buf), this);
    }
    uint64(e) {
      let t = k.uEnc(e);
      return (y(t.lo, t.hi, this.buf), this);
    }
  }
  class le {
    constructor(e, t) {
      ((this.varint64 = E),
        (this.uint32 = b),
        (this.buf = e),
        (this.len = e.length),
        (this.pos = 0),
        (this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)),
        (this.textDecoder = t ?? new TextDecoder()));
    }
    tag() {
      let e = this.uint32(),
        t = e >>> 3,
        n = 7 & e;
      if (t <= 0 || n < 0 || n > 5)
        throw new Error("illegal tag: field no " + t + " wire type " + n);
      return [t, n];
    }
    skip(e, t) {
      let n = this.pos;
      switch (e) {
        case 0:
          for (; 128 & this.buf[this.pos++];);
          break;
        case 1:
          this.pos += 4;
        case 5:
          this.pos += 4;
          break;
        case 2:
          let n = this.uint32();
          this.pos += n;
          break;
        case 3:
          for (;;) {
            const [e, n] = this.tag();
            if (4 === n) {
              if (void 0 !== t && e !== t) throw new Error("invalid end group tag");
              break;
            }
            this.skip(n, e);
          }
          break;
        default:
          throw new Error("cant skip wire type " + e);
      }
      return (this.assertBounds(), this.buf.subarray(n, this.pos));
    }
    assertBounds() {
      if (this.pos > this.len) throw new RangeError("premature EOF");
    }
    int32() {
      return 0 | this.uint32();
    }
    sint32() {
      let e = this.uint32();
      return (e >>> 1) ^ -(1 & e);
    }
    int64() {
      return k.dec(...this.varint64());
    }
    uint64() {
      return k.uDec(...this.varint64());
    }
    sint64() {
      let [e, t] = this.varint64(),
        n = -(1 & e);
      return ((e = ((e >>> 1) | ((1 & t) << 31)) ^ n), (t = (t >>> 1) ^ n), k.dec(e, t));
    }
    bool() {
      let [e, t] = this.varint64();
      return 0 !== e || 0 !== t;
    }
    fixed32() {
      return this.view.getUint32((this.pos += 4) - 4, !0);
    }
    sfixed32() {
      return this.view.getInt32((this.pos += 4) - 4, !0);
    }
    fixed64() {
      return k.uDec(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
      return k.dec(this.sfixed32(), this.sfixed32());
    }
    float() {
      return this.view.getFloat32((this.pos += 4) - 4, !0);
    }
    double() {
      return this.view.getFloat64((this.pos += 8) - 8, !0);
    }
    bytes() {
      let e = this.uint32(),
        t = this.pos;
      return ((this.pos += e), this.assertBounds(), this.buf.subarray(t, t + e));
    }
    string() {
      return this.textDecoder.decode(this.bytes());
    }
  }
  const ue = Symbol("@bufbuild/protobuf/unknown-fields"),
    ce = { readUnknownFields: !0, readerFactory: (e) => new le(e) },
    me = { writeUnknownFields: !0, writerFactory: () => new ie() };
  function pe(e) {
    return e ? { ...ce, ...e } : ce;
  }
  function de(e) {
    return e ? { ...me, ...e } : me;
  }
  function fe(e, t, n, r, o) {
    let { repeated: a, localName: s } = n;
    switch (
      (n.oneof &&
        ((e = e[n.oneof.localName]).case != s && delete e.value, (e.case = s), (s = "value")),
      n.kind)
    ) {
      case "scalar":
      case "enum":
        const i = "enum" == n.kind ? v.INT32 : n.T;
        let l = Ee;
        if (("scalar" == n.kind && n.L > 0 && (l = ge), a)) {
          let n = e[s];
          if (r == se.LengthDelimited && i != v.STRING && i != v.BYTES) {
            let e = t.uint32() + t.pos;
            for (; t.pos < e;) n.push(l(t, i));
          } else n.push(l(t, i));
        } else e[s] = l(t, i);
        break;
      case "message":
        const u = n.T;
        a
          ? e[s].push(Te(t, new u(), o, n))
          : V(e[s])
            ? Te(t, e[s], o, n)
            : ((e[s] = Te(t, new u(), o, n)),
              !u.fieldWrapper ||
                n.oneof ||
                n.repeated ||
                (e[s] = u.fieldWrapper.unwrapField(e[s])));
        break;
      case "map":
        let [c, m] = (function (e, t, n) {
          const r = t.uint32(),
            o = t.pos + r;
          let a, s;
          for (; t.pos < o;) {
            const [r] = t.tag();
            switch (r) {
              case 1:
                a = Ee(t, e.K);
                break;
              case 2:
                switch (e.V.kind) {
                  case "scalar":
                    s = Ee(t, e.V.T);
                    break;
                  case "enum":
                    s = t.int32();
                    break;
                  case "message":
                    s = Te(t, new e.V.T(), n, void 0);
                }
            }
          }
          void 0 === a && (a = D(e.K, P.BIGINT));
          "string" != typeof a && "number" != typeof a && (a = a.toString());
          if (void 0 === s)
            switch (e.V.kind) {
              case "scalar":
                s = D(e.V.T, P.BIGINT);
                break;
              case "enum":
                s = e.V.T.values[0].no;
                break;
              case "message":
                s = new e.V.T();
            }
          return [a, s];
        })(n, t, o);
        e[s][c] = m;
    }
  }
  function Te(e, t, n, r) {
    const o = t.getType().runtime.bin,
      a = r?.delimited;
    return (o.readMessage(t, e, a ? r.no : e.uint32(), n, a), t);
  }
  function ge(e, t) {
    const n = Ee(e, t);
    return "bigint" == typeof n ? n.toString() : n;
  }
  function Ee(e, t) {
    switch (t) {
      case v.STRING:
        return e.string();
      case v.BOOL:
        return e.bool();
      case v.DOUBLE:
        return e.double();
      case v.FLOAT:
        return e.float();
      case v.INT32:
        return e.int32();
      case v.INT64:
        return e.int64();
      case v.UINT64:
        return e.uint64();
      case v.FIXED64:
        return e.fixed64();
      case v.BYTES:
        return e.bytes();
      case v.FIXED32:
        return e.fixed32();
      case v.SFIXED32:
        return e.sfixed32();
      case v.SFIXED64:
        return e.sfixed64();
      case v.SINT64:
        return e.sint64();
      case v.UINT32:
        return e.uint32();
      case v.SINT32:
        return e.sint32();
    }
  }
  function ye(e, t, n, r) {
    s(void 0 !== t);
    const o = e.repeated;
    switch (e.kind) {
      case "scalar":
      case "enum":
        let a = "enum" == e.kind ? v.INT32 : e.T;
        if (o)
          if ((s(Array.isArray(t)), e.packed))
            !(function (e, t, n, r) {
              if (!r.length) return;
              e.tag(n, se.LengthDelimited).fork();
              let [, o] = Ie(t);
              for (let t = 0; t < r.length; t++) e[o](r[t]);
              e.join();
            })(n, a, e.no, t);
          else for (const r of t) _e(n, a, e.no, r);
        else _e(n, a, e.no, t);
        break;
      case "message":
        if (o) {
          s(Array.isArray(t));
          for (const o of t) Ne(n, r, e, o);
        } else Ne(n, r, e, t);
        break;
      case "map":
        s("object" == typeof t && null != t);
        for (const [o, a] of Object.entries(t)) he(n, r, e, o, a);
    }
  }
  function he(e, t, n, r, o) {
    (e.tag(n.no, se.LengthDelimited), e.fork());
    let a = r;
    switch (n.K) {
      case v.INT32:
      case v.FIXED32:
      case v.UINT32:
      case v.SFIXED32:
      case v.SINT32:
        a = Number.parseInt(r);
        break;
      case v.BOOL:
        (s("true" == r || "false" == r), (a = "true" == r));
    }
    switch ((_e(e, n.K, 1, a), n.V.kind)) {
      case "scalar":
        _e(e, n.V.T, 2, o);
        break;
      case "enum":
        _e(e, v.INT32, 2, o);
        break;
      case "message":
        (s(void 0 !== o), e.tag(2, se.LengthDelimited).bytes(o.toBinary(t)));
    }
    e.join();
  }
  function Ne(e, t, n, r) {
    const o = G(n.T, r);
    n.delimited
      ? e.tag(n.no, se.StartGroup).raw(o.toBinary(t)).tag(n.no, se.EndGroup)
      : e.tag(n.no, se.LengthDelimited).bytes(o.toBinary(t));
  }
  function _e(e, t, n, r) {
    s(void 0 !== r);
    let [o, a] = Ie(t);
    e.tag(n, o)[a](r);
  }
  function Ie(e) {
    let t = se.Varint;
    switch (e) {
      case v.BYTES:
      case v.STRING:
        t = se.LengthDelimited;
        break;
      case v.DOUBLE:
      case v.FIXED64:
      case v.SFIXED64:
        t = se.Bit64;
        break;
      case v.FIXED32:
      case v.SFIXED32:
      case v.FLOAT:
        t = se.Bit32;
    }
    return [t, v[e].toLowerCase()];
  }
  function Se(e) {
    if (void 0 === e) return e;
    if (V(e)) return e.clone();
    if (e instanceof Uint8Array) {
      const t = new Uint8Array(e.byteLength);
      return (t.set(e), t);
    }
    return e;
  }
  function we(e) {
    return e instanceof Uint8Array ? e : new Uint8Array(e);
  }
  function Oe(e, t, n) {
    return {
      syntax: e,
      json: {
        makeReadOptions: W,
        makeWriteOptions: X,
        readMessage(e, t, n, r) {
          if (null == t || Array.isArray(t) || "object" != typeof t)
            throw new Error(`cannot decode message ${e.typeName} from JSON: ${H(t)}`);
          r = r ?? new e();
          const o = new Map(),
            a = n.typeRegistry;
          for (const [s, i] of Object.entries(t)) {
            const t = e.fields.findJsonName(s);
            if (t) {
              if (t.oneof) {
                if (null === i && "scalar" == t.kind) continue;
                const n = o.get(t.oneof);
                if (void 0 !== n)
                  throw new Error(
                    `cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${t.oneof.name}" present: "${n}", "${s}"`,
                  );
                o.set(t.oneof, s);
              }
              z(r, i, t, n, e);
            } else {
              let t = !1;
              if (a?.findExtension && s.startsWith("[") && s.endsWith("]")) {
                const o = a.findExtension(s.substring(1, s.length - 1));
                if (o && o.extendee.typeName == e.typeName) {
                  t = !0;
                  const [e, a] = J(o);
                  (z(e, i, o.field, n, o), M(r, o, a(), n));
                }
              }
              if (!t && !n.ignoreUnknownFields)
                throw new Error(
                  `cannot decode message ${e.typeName} from JSON: key "${s}" is unknown`,
                );
            }
          }
          return r;
        },
        writeMessage(e, t) {
          const n = e.getType(),
            r = {};
          let o;
          try {
            for (o of n.fields.byNumber()) {
              if (!C(o, e)) {
                if (o.req) throw "required field not set";
                if (!t.emitDefaultValues) continue;
                if (!ne(o)) continue;
              }
              const n = re(o, o.oneof ? e[o.oneof.localName].value : e[o.localName], t);
              void 0 !== n && (r[t.useProtoFieldName ? o.name : o.jsonName] = n);
            }
            const a = t.typeRegistry;
            if (a?.findExtensionFor)
              for (const o of n.runtime.bin.listUnknownFields(e)) {
                const s = a.findExtensionFor(n.typeName, o.no);
                if (s && x(e, s)) {
                  const n = B(e, s, t),
                    o = re(s.field, n, t);
                  void 0 !== o && (r[s.field.jsonName] = o);
                }
              }
          } catch (e) {
            const t = o
                ? `cannot encode field ${n.typeName}.${o.name} to JSON`
                : `cannot encode message ${n.typeName} to JSON`,
              r = e instanceof Error ? e.message : String(e);
            throw new Error(t + (r.length > 0 ? `: ${r}` : ""));
          }
          return r;
        },
        readScalar: (e, t, n) => ee(e, t, n ?? P.BIGINT, !0),
        writeScalar(e, t, n) {
          if (void 0 !== t) return n || R(e, t) ? ae(e, t) : void 0;
        },
        debug: H,
      },
      bin: {
        makeReadOptions: pe,
        makeWriteOptions: de,
        listUnknownFields: (e) => e[ue] ?? [],
        discardUnknownFields(e) {
          delete e[ue];
        },
        writeUnknownFields(e, t) {
          const n = e[ue];
          if (n) for (const e of n) t.tag(e.no, e.wireType).raw(e.data);
        },
        onUnknownField(e, t, n, r) {
          const o = e;
          (Array.isArray(o[ue]) || (o[ue] = []),
            o[ue].push({ no: t, wireType: n, data: new Uint8Array(r) }));
        },
        readMessage(e, t, n, r, o) {
          const a = e.getType(),
            s = o ? t.len : t.pos + n;
          let i, l;
          for (; t.pos < s && (([i, l] = t.tag()), !0 !== o || l != se.EndGroup);) {
            const n = a.fields.find(i);
            if (!n) {
              const n = t.skip(l, i);
              r.readUnknownFields && this.onUnknownField(e, i, l, n);
              continue;
            }
            fe(e, t, n, l, r);
          }
          if (o && (l != se.EndGroup || i !== n)) throw new Error("invalid end group tag");
        },
        readField: fe,
        writeMessage(e, t, n) {
          const r = e.getType();
          for (const o of r.fields.byNumber())
            if (C(o, e)) ye(o, o.oneof ? e[o.oneof.localName].value : e[o.localName], t, n);
            else if (o.req)
              throw new Error(
                `cannot encode field ${r.typeName}.${o.name} to binary: required field not set`,
              );
          return (n.writeUnknownFields && this.writeUnknownFields(e, t), t);
        },
        writeField(e, t, n, r) {
          void 0 !== t && ye(e, t, n, r);
        },
      },
      util: {
        ...{
          setEnumType: p,
          initPartial(e, t) {
            if (void 0 === e) return;
            const n = t.getType();
            for (const r of n.fields.byMember()) {
              const n = r.localName,
                o = t,
                a = e;
              if (null != a[n])
                switch (r.kind) {
                  case "oneof":
                    const e = a[n].case;
                    if (void 0 === e) continue;
                    const t = r.findField(e);
                    let s = a[n].value;
                    (t && "message" == t.kind && !V(s, t.T)
                      ? (s = new t.T(s))
                      : t && "scalar" === t.kind && t.T === v.BYTES && (s = we(s)),
                      (o[n] = { case: e, value: s }));
                    break;
                  case "scalar":
                  case "enum":
                    let i = a[n];
                    (r.T === v.BYTES && (i = r.repeated ? i.map(we) : we(i)), (o[n] = i));
                    break;
                  case "map":
                    switch (r.V.kind) {
                      case "scalar":
                      case "enum":
                        if (r.V.T === v.BYTES)
                          for (const [e, t] of Object.entries(a[n])) o[n][e] = we(t);
                        else Object.assign(o[n], a[n]);
                        break;
                      case "message":
                        const e = r.V.T;
                        for (const t of Object.keys(a[n])) {
                          let r = a[n][t];
                          (e.fieldWrapper || (r = new e(r)), (o[n][t] = r));
                        }
                    }
                    break;
                  case "message":
                    const l = r.T;
                    if (r.repeated) o[n] = a[n].map((e) => (V(e, l) ? e : new l(e)));
                    else {
                      const e = a[n];
                      l.fieldWrapper
                        ? "google.protobuf.BytesValue" === l.typeName
                          ? (o[n] = we(e))
                          : (o[n] = e)
                        : (o[n] = V(e, l) ? e : new l(e));
                    }
                }
            }
          },
          equals: (e, t, n) =>
            t === n ||
            (!(!t || !n) &&
              e.fields.byMember().every((e) => {
                const r = t[e.localName],
                  o = n[e.localName];
                if (e.repeated) {
                  if (r.length !== o.length) return !1;
                  switch (e.kind) {
                    case "message":
                      return r.every((t, n) => e.T.equals(t, o[n]));
                    case "scalar":
                      return r.every((t, n) => F(e.T, t, o[n]));
                    case "enum":
                      return r.every((e, t) => F(v.INT32, e, o[t]));
                  }
                  throw new Error(`repeated cannot contain ${e.kind}`);
                }
                switch (e.kind) {
                  case "message":
                    return e.T.equals(r, o);
                  case "enum":
                    return F(v.INT32, r, o);
                  case "scalar":
                    return F(e.T, r, o);
                  case "oneof":
                    if (r.case !== o.case) return !1;
                    const t = e.findField(r.case);
                    if (void 0 === t) return !0;
                    switch (t.kind) {
                      case "message":
                        return t.T.equals(r.value, o.value);
                      case "enum":
                        return F(v.INT32, r.value, o.value);
                      case "scalar":
                        return F(t.T, r.value, o.value);
                    }
                    throw new Error(`oneof cannot contain ${t.kind}`);
                  case "map":
                    const n = Object.keys(r).concat(Object.keys(o));
                    switch (e.V.kind) {
                      case "message":
                        const t = e.V.T;
                        return n.every((e) => t.equals(r[e], o[e]));
                      case "enum":
                        return n.every((e) => F(v.INT32, r[e], o[e]));
                      case "scalar":
                        const a = e.V.T;
                        return n.every((e) => F(a, r[e], o[e]));
                    }
                }
              })),
          clone(e) {
            const t = e.getType(),
              n = new t(),
              r = n;
            for (const n of t.fields.byMember()) {
              const t = e[n.localName];
              let o;
              if (n.repeated) o = t.map(Se);
              else if ("map" == n.kind) {
                o = r[n.localName];
                for (const [e, n] of Object.entries(t)) o[e] = Se(n);
              } else
                o =
                  "oneof" == n.kind
                    ? n.findField(t.case)
                      ? { case: t.case, value: Se(t.value) }
                      : { case: void 0 }
                    : Se(t);
              r[n.localName] = o;
            }
            for (const n of t.runtime.bin.listUnknownFields(e))
              t.runtime.bin.onUnknownField(r, n.no, n.wireType, n.data);
            return n;
          },
        },
        newFieldList: t,
        initFields: n,
      },
      makeMessageType(e, t, n) {
        return (function (e, t, n, r) {
          const o = r?.localName ?? t.substring(t.lastIndexOf(".") + 1),
            a = {
              [o]: function (t) {
                (e.util.initFields(this), e.util.initPartial(t, this));
              },
            }[o];
          return (
            Object.setPrototypeOf(a.prototype, new g()),
            Object.assign(a, {
              runtime: e,
              typeName: t,
              fields: e.util.newFieldList(n),
              fromBinary: (e, t) => new a().fromBinary(e, t),
              fromJson: (e, t) => new a().fromJson(e, t),
              fromJsonString: (e, t) => new a().fromJsonString(e, t),
              equals: (t, n) => e.util.equals(a, t, n),
            }),
            a
          );
        })(this, e, t, n);
      },
      makeEnum: f,
      makeEnumType: d,
      getEnumType: m,
      makeExtension(e, t, n) {
        return (function (e, t, n, r) {
          let o;
          return {
            typeName: t,
            extendee: n,
            get field() {
              if (!o) {
                const n = "function" == typeof r ? r() : r;
                ((n.name = t.split(".").pop()),
                  (n.jsonName = `[${t}]`),
                  (o = e.util.newFieldList([n]).list()[0]));
              }
              return o;
            },
            runtime: e,
          };
        })(this, e, t, n);
      },
    };
  }
  class be {
    constructor(e, t) {
      ((this._fields = e), (this._normalizer = t));
    }
    findJsonName(e) {
      if (!this.jsonNames) {
        const e = {};
        for (const t of this.list()) e[t.jsonName] = e[t.name] = t;
        this.jsonNames = e;
      }
      return this.jsonNames[e];
    }
    find(e) {
      if (!this.numbers) {
        const e = {};
        for (const t of this.list()) e[t.no] = t;
        this.numbers = e;
      }
      return this.numbers[e];
    }
    list() {
      return (this.all || (this.all = this._normalizer(this._fields)), this.all);
    }
    byNumber() {
      return (
        this.numbersAsc ||
          (this.numbersAsc = this.list()
            .concat()
            .sort((e, t) => e.no - t.no)),
        this.numbersAsc
      );
    }
    byMember() {
      if (!this.members) {
        this.members = [];
        const e = this.members;
        let t;
        for (const n of this.list())
          n.oneof ? n.oneof !== t && ((t = n.oneof), e.push(t)) : e.push(n);
      }
      return this.members;
    }
  }
  function ke(e, t) {
    const n = Fe(e);
    return t ? n : Ae(Ue(n));
  }
  function ve(e) {
    return ke(e, !1);
  }
  const Pe = Fe;
  function Fe(e) {
    let t = !1;
    const n = [];
    for (let r = 0; r < e.length; r++) {
      let o = e.charAt(r);
      switch (o) {
        case "_":
          t = !0;
          break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          (n.push(o), (t = !1));
          break;
        default:
          (t && ((t = !1), (o = o.toUpperCase())), n.push(o));
      }
    }
    return n.join("");
  }
  const De = new Set(["constructor", "toString", "toJSON", "valueOf"]),
    Re = new Set([
      "getType",
      "clone",
      "equals",
      "fromBinary",
      "fromJson",
      "fromJsonString",
      "toBinary",
      "toJson",
      "toJsonString",
      "toObject",
    ]),
    Je = (e) => `${e}$`,
    Ue = (e) => (Re.has(e) ? Je(e) : e),
    Ae = (e) => (De.has(e) ? Je(e) : e);
  class Le {
    constructor(e) {
      ((this.kind = "oneof"),
        (this.repeated = !1),
        (this.packed = !1),
        (this.opt = !1),
        (this.req = !1),
        (this.default = void 0),
        (this.fields = []),
        (this.name = e),
        (this.localName = ve(e)));
    }
    addField(e) {
      (s(e.oneof === this, `field ${e.name} not one of ${this.name}`), this.fields.push(e));
    }
    findField(e) {
      if (!this._lookup) {
        this._lookup = Object.create(null);
        for (let e = 0; e < this.fields.length; e++)
          this._lookup[this.fields[e].localName] = this.fields[e];
      }
      return this._lookup[e];
    }
  }
  function Be(e, t) {
    const n = [];
    let r;
    for (const o of "function" == typeof e ? e() : e) {
      const e = o;
      if (
        ((e.localName = ke(o.name, void 0 !== o.oneof)),
        (e.jsonName = o.jsonName ?? Pe(o.name)),
        (e.repeated = o.repeated ?? !1),
        "scalar" == o.kind && (e.L = o.L ?? P.BIGINT),
        (e.delimited = o.delimited ?? !1),
        (e.req = o.req ?? !1),
        (e.opt = o.opt ?? !1),
        void 0 === o.packed &&
          (e.packed =
            !!t && ("enum" == o.kind || ("scalar" == o.kind && o.T != v.BYTES && o.T != v.STRING))),
        void 0 !== o.oneof)
      ) {
        const t = "string" == typeof o.oneof ? o.oneof : o.oneof.name;
        ((r && r.name == t) || (r = new Le(t)), (e.oneof = r), r.addField(e));
      }
      n.push(e);
    }
    return n;
  }
  const Me = Oe(
      "proto3",
      (e) => new be(e, (e) => Be(e, !0)),
      (e) => {
        for (const t of e.getType().fields.byMember()) {
          if (t.opt) continue;
          const n = t.localName,
            r = e;
          if (t.repeated) r[n] = [];
          else
            switch (t.kind) {
              case "oneof":
                r[n] = { case: void 0 };
                break;
              case "enum":
                r[n] = 0;
                break;
              case "map":
                r[n] = {};
                break;
              case "scalar":
                r[n] = D(t.T, t.L);
            }
        }
      },
    ),
    xe = Oe(
      "proto2",
      (e) => new be(e, (e) => Be(e, !1)),
      (e) => {
        for (const t of e.getType().fields.byMember()) {
          const n = t.localName,
            r = e;
          if (t.repeated) r[n] = [];
          else
            switch (t.kind) {
              case "oneof":
                r[n] = { case: void 0 };
                break;
              case "map":
                r[n] = {};
            }
        }
      },
    );
  (Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);
  var Ye = ((e) => (
    (e[(e.EDITION_UNKNOWN = 0)] = "EDITION_UNKNOWN"),
    (e[(e.EDITION_LEGACY = 900)] = "EDITION_LEGACY"),
    (e[(e.EDITION_PROTO2 = 998)] = "EDITION_PROTO2"),
    (e[(e.EDITION_PROTO3 = 999)] = "EDITION_PROTO3"),
    (e[(e.EDITION_2023 = 1e3)] = "EDITION_2023"),
    (e[(e.EDITION_2024 = 1001)] = "EDITION_2024"),
    (e[(e.EDITION_1_TEST_ONLY = 1)] = "EDITION_1_TEST_ONLY"),
    (e[(e.EDITION_2_TEST_ONLY = 2)] = "EDITION_2_TEST_ONLY"),
    (e[(e.EDITION_99997_TEST_ONLY = 99997)] = "EDITION_99997_TEST_ONLY"),
    (e[(e.EDITION_99998_TEST_ONLY = 99998)] = "EDITION_99998_TEST_ONLY"),
    (e[(e.EDITION_99999_TEST_ONLY = 99999)] = "EDITION_99999_TEST_ONLY"),
    (e[(e.EDITION_MAX = 2147483647)] = "EDITION_MAX"),
    e
  ))(Ye || {});
  xe.util.setEnumType(Ye, "google.protobuf.Edition", [
    { no: 0, name: "EDITION_UNKNOWN" },
    { no: 900, name: "EDITION_LEGACY" },
    { no: 998, name: "EDITION_PROTO2" },
    { no: 999, name: "EDITION_PROTO3" },
    { no: 1e3, name: "EDITION_2023" },
    { no: 1001, name: "EDITION_2024" },
    { no: 1, name: "EDITION_1_TEST_ONLY" },
    { no: 2, name: "EDITION_2_TEST_ONLY" },
    { no: 99997, name: "EDITION_99997_TEST_ONLY" },
    { no: 99998, name: "EDITION_99998_TEST_ONLY" },
    { no: 99999, name: "EDITION_99999_TEST_ONLY" },
    { no: 2147483647, name: "EDITION_MAX" },
  ]);
  const Ce = class e extends g {
    constructor(e) {
      (super(), (this.file = []), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((Ce.runtime = xe),
    (Ce.typeName = "google.protobuf.FileDescriptorSet"),
    (Ce.fields = xe.util.newFieldList(() => [
      { no: 1, name: "file", kind: "message", T: Ve, repeated: !0 },
    ])));
  const je = class e extends g {
    constructor(e) {
      (super(),
        (this.dependency = []),
        (this.publicDependency = []),
        (this.weakDependency = []),
        (this.messageType = []),
        (this.enumType = []),
        (this.service = []),
        (this.extension = []),
        xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((je.runtime = xe),
    (je.typeName = "google.protobuf.FileDescriptorProto"),
    (je.fields = xe.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "package", kind: "scalar", T: 9, opt: !0 },
      { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: !0 },
      { no: 10, name: "public_dependency", kind: "scalar", T: 5, repeated: !0 },
      { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: !0 },
      { no: 4, name: "message_type", kind: "message", T: qe, repeated: !0 },
      { no: 5, name: "enum_type", kind: "message", T: lt, repeated: !0 },
      { no: 6, name: "service", kind: "message", T: ft, repeated: !0 },
      { no: 7, name: "extension", kind: "message", T: nt, repeated: !0 },
      { no: 8, name: "options", kind: "message", T: yt, opt: !0 },
      { no: 9, name: "source_code_info", kind: "message", T: an, opt: !0 },
      { no: 12, name: "syntax", kind: "scalar", T: 9, opt: !0 },
      { no: 14, name: "edition", kind: "enum", T: xe.getEnumType(Ye), opt: !0 },
    ])));
  let Ve = je;
  const Ge = class e extends g {
    constructor(e) {
      (super(),
        (this.field = []),
        (this.extension = []),
        (this.nestedType = []),
        (this.enumType = []),
        (this.extensionRange = []),
        (this.oneofDecl = []),
        (this.reservedRange = []),
        (this.reservedName = []),
        xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((Ge.runtime = xe),
    (Ge.typeName = "google.protobuf.DescriptorProto"),
    (Ge.fields = xe.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "field", kind: "message", T: nt, repeated: !0 },
      { no: 6, name: "extension", kind: "message", T: nt, repeated: !0 },
      { no: 3, name: "nested_type", kind: "message", T: Ge, repeated: !0 },
      { no: 4, name: "enum_type", kind: "message", T: lt, repeated: !0 },
      { no: 5, name: "extension_range", kind: "message", T: We, repeated: !0 },
      { no: 8, name: "oneof_decl", kind: "message", T: st, repeated: !0 },
      { no: 7, name: "options", kind: "message", T: _t, opt: !0 },
      { no: 9, name: "reserved_range", kind: "message", T: Ke, repeated: !0 },
      { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: !0 },
    ])));
  let qe = Ge;
  const $e = class e extends g {
    constructor(e) {
      (super(), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  (($e.runtime = xe),
    ($e.typeName = "google.protobuf.DescriptorProto.ExtensionRange"),
    ($e.fields = xe.util.newFieldList(() => [
      { no: 1, name: "start", kind: "scalar", T: 5, opt: !0 },
      { no: 2, name: "end", kind: "scalar", T: 5, opt: !0 },
      { no: 3, name: "options", kind: "message", T: He, opt: !0 },
    ])));
  let We = $e;
  const Xe = class e extends g {
    constructor(e) {
      (super(), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((Xe.runtime = xe),
    (Xe.typeName = "google.protobuf.DescriptorProto.ReservedRange"),
    (Xe.fields = xe.util.newFieldList(() => [
      { no: 1, name: "start", kind: "scalar", T: 5, opt: !0 },
      { no: 2, name: "end", kind: "scalar", T: 5, opt: !0 },
    ])));
  let Ke = Xe;
  const Ze = class e extends g {
    constructor(e) {
      (super(),
        (this.uninterpretedOption = []),
        (this.declaration = []),
        xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((Ze.runtime = xe),
    (Ze.typeName = "google.protobuf.ExtensionRangeOptions"),
    (Ze.fields = xe.util.newFieldList(() => [
      { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: !0 },
      { no: 2, name: "declaration", kind: "message", T: et, repeated: !0 },
      { no: 50, name: "features", kind: "message", T: Xt, opt: !0 },
      { no: 3, name: "verification", kind: "enum", T: xe.getEnumType(ze), opt: !0, default: 1 },
    ])));
  let He = Ze;
  var ze = ((e) => (
    (e[(e.DECLARATION = 0)] = "DECLARATION"),
    (e[(e.UNVERIFIED = 1)] = "UNVERIFIED"),
    e
  ))(ze || {});
  xe.util.setEnumType(ze, "google.protobuf.ExtensionRangeOptions.VerificationState", [
    { no: 0, name: "DECLARATION" },
    { no: 1, name: "UNVERIFIED" },
  ]);
  const Qe = class e extends g {
    constructor(e) {
      (super(), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((Qe.runtime = xe),
    (Qe.typeName = "google.protobuf.ExtensionRangeOptions.Declaration"),
    (Qe.fields = xe.util.newFieldList(() => [
      { no: 1, name: "number", kind: "scalar", T: 5, opt: !0 },
      { no: 2, name: "full_name", kind: "scalar", T: 9, opt: !0 },
      { no: 3, name: "type", kind: "scalar", T: 9, opt: !0 },
      { no: 5, name: "reserved", kind: "scalar", T: 8, opt: !0 },
      { no: 6, name: "repeated", kind: "scalar", T: 8, opt: !0 },
    ])));
  let et = Qe;
  const tt = class e extends g {
    constructor(e) {
      (super(), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((tt.runtime = xe),
    (tt.typeName = "google.protobuf.FieldDescriptorProto"),
    (tt.fields = xe.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
      { no: 3, name: "number", kind: "scalar", T: 5, opt: !0 },
      { no: 4, name: "label", kind: "enum", T: xe.getEnumType(ot), opt: !0 },
      { no: 5, name: "type", kind: "enum", T: xe.getEnumType(rt), opt: !0 },
      { no: 6, name: "type_name", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "extendee", kind: "scalar", T: 9, opt: !0 },
      { no: 7, name: "default_value", kind: "scalar", T: 9, opt: !0 },
      { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: !0 },
      { no: 10, name: "json_name", kind: "scalar", T: 9, opt: !0 },
      { no: 8, name: "options", kind: "message", T: St, opt: !0 },
      { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: !0 },
    ])));
  let nt = tt;
  var rt = ((e) => (
    (e[(e.DOUBLE = 1)] = "DOUBLE"),
    (e[(e.FLOAT = 2)] = "FLOAT"),
    (e[(e.INT64 = 3)] = "INT64"),
    (e[(e.UINT64 = 4)] = "UINT64"),
    (e[(e.INT32 = 5)] = "INT32"),
    (e[(e.FIXED64 = 6)] = "FIXED64"),
    (e[(e.FIXED32 = 7)] = "FIXED32"),
    (e[(e.BOOL = 8)] = "BOOL"),
    (e[(e.STRING = 9)] = "STRING"),
    (e[(e.GROUP = 10)] = "GROUP"),
    (e[(e.MESSAGE = 11)] = "MESSAGE"),
    (e[(e.BYTES = 12)] = "BYTES"),
    (e[(e.UINT32 = 13)] = "UINT32"),
    (e[(e.ENUM = 14)] = "ENUM"),
    (e[(e.SFIXED32 = 15)] = "SFIXED32"),
    (e[(e.SFIXED64 = 16)] = "SFIXED64"),
    (e[(e.SINT32 = 17)] = "SINT32"),
    (e[(e.SINT64 = 18)] = "SINT64"),
    e
  ))(rt || {});
  xe.util.setEnumType(rt, "google.protobuf.FieldDescriptorProto.Type", [
    { no: 1, name: "TYPE_DOUBLE" },
    { no: 2, name: "TYPE_FLOAT" },
    { no: 3, name: "TYPE_INT64" },
    { no: 4, name: "TYPE_UINT64" },
    { no: 5, name: "TYPE_INT32" },
    { no: 6, name: "TYPE_FIXED64" },
    { no: 7, name: "TYPE_FIXED32" },
    { no: 8, name: "TYPE_BOOL" },
    { no: 9, name: "TYPE_STRING" },
    { no: 10, name: "TYPE_GROUP" },
    { no: 11, name: "TYPE_MESSAGE" },
    { no: 12, name: "TYPE_BYTES" },
    { no: 13, name: "TYPE_UINT32" },
    { no: 14, name: "TYPE_ENUM" },
    { no: 15, name: "TYPE_SFIXED32" },
    { no: 16, name: "TYPE_SFIXED64" },
    { no: 17, name: "TYPE_SINT32" },
    { no: 18, name: "TYPE_SINT64" },
  ]);
  var ot = ((e) => (
    (e[(e.OPTIONAL = 1)] = "OPTIONAL"),
    (e[(e.REPEATED = 3)] = "REPEATED"),
    (e[(e.REQUIRED = 2)] = "REQUIRED"),
    e
  ))(ot || {});
  xe.util.setEnumType(ot, "google.protobuf.FieldDescriptorProto.Label", [
    { no: 1, name: "LABEL_OPTIONAL" },
    { no: 3, name: "LABEL_REPEATED" },
    { no: 2, name: "LABEL_REQUIRED" },
  ]);
  const at = class e extends g {
    constructor(e) {
      (super(), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((at.runtime = xe),
    (at.typeName = "google.protobuf.OneofDescriptorProto"),
    (at.fields = xe.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "options", kind: "message", T: Jt, opt: !0 },
    ])));
  let st = at;
  const it = class e extends g {
    constructor(e) {
      (super(),
        (this.value = []),
        (this.reservedRange = []),
        (this.reservedName = []),
        xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((it.runtime = xe),
    (it.typeName = "google.protobuf.EnumDescriptorProto"),
    (it.fields = xe.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "value", kind: "message", T: pt, repeated: !0 },
      { no: 3, name: "options", kind: "message", T: At, opt: !0 },
      { no: 4, name: "reserved_range", kind: "message", T: ct, repeated: !0 },
      { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: !0 },
    ])));
  let lt = it;
  const ut = class e extends g {
    constructor(e) {
      (super(), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((ut.runtime = xe),
    (ut.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange"),
    (ut.fields = xe.util.newFieldList(() => [
      { no: 1, name: "start", kind: "scalar", T: 5, opt: !0 },
      { no: 2, name: "end", kind: "scalar", T: 5, opt: !0 },
    ])));
  let ct = ut;
  const mt = class e extends g {
    constructor(e) {
      (super(), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((mt.runtime = xe),
    (mt.typeName = "google.protobuf.EnumValueDescriptorProto"),
    (mt.fields = xe.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "number", kind: "scalar", T: 5, opt: !0 },
      { no: 3, name: "options", kind: "message", T: Bt, opt: !0 },
    ])));
  let pt = mt;
  const dt = class e extends g {
    constructor(e) {
      (super(), (this.method = []), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((dt.runtime = xe),
    (dt.typeName = "google.protobuf.ServiceDescriptorProto"),
    (dt.fields = xe.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "method", kind: "message", T: gt, repeated: !0 },
      { no: 3, name: "options", kind: "message", T: xt, opt: !0 },
    ])));
  let ft = dt;
  const Tt = class e extends g {
    constructor(e) {
      (super(), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((Tt.runtime = xe),
    (Tt.typeName = "google.protobuf.MethodDescriptorProto"),
    (Tt.fields = xe.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "input_type", kind: "scalar", T: 9, opt: !0 },
      { no: 3, name: "output_type", kind: "scalar", T: 9, opt: !0 },
      { no: 4, name: "options", kind: "message", T: Ct, opt: !0 },
      { no: 5, name: "client_streaming", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 6, name: "server_streaming", kind: "scalar", T: 8, opt: !0, default: !1 },
    ])));
  let gt = Tt;
  const Et = class e extends g {
    constructor(e) {
      (super(), (this.uninterpretedOption = []), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((Et.runtime = xe),
    (Et.typeName = "google.protobuf.FileOptions"),
    (Et.fields = xe.util.newFieldList(() => [
      { no: 1, name: "java_package", kind: "scalar", T: 9, opt: !0 },
      { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: !0 },
      { no: 10, name: "java_multiple_files", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8, opt: !0 },
      { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 9, name: "optimize_for", kind: "enum", T: xe.getEnumType(ht), opt: !0, default: 1 },
      { no: 11, name: "go_package", kind: "scalar", T: 9, opt: !0 },
      { no: 16, name: "cc_generic_services", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 17, name: "java_generic_services", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 18, name: "py_generic_services", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 23, name: "deprecated", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8, opt: !0, default: !0 },
      { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: !0 },
      { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: !0 },
      { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: !0 },
      { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: !0 },
      { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: !0 },
      { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9, opt: !0 },
      { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: !0 },
      { no: 50, name: "features", kind: "message", T: Xt, opt: !0 },
      { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: !0 },
    ])));
  let yt = Et;
  var ht = ((e) => (
    (e[(e.SPEED = 1)] = "SPEED"),
    (e[(e.CODE_SIZE = 2)] = "CODE_SIZE"),
    (e[(e.LITE_RUNTIME = 3)] = "LITE_RUNTIME"),
    e
  ))(ht || {});
  xe.util.setEnumType(ht, "google.protobuf.FileOptions.OptimizeMode", [
    { no: 1, name: "SPEED" },
    { no: 2, name: "CODE_SIZE" },
    { no: 3, name: "LITE_RUNTIME" },
  ]);
  const Nt = class e extends g {
    constructor(e) {
      (super(), (this.uninterpretedOption = []), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((Nt.runtime = xe),
    (Nt.typeName = "google.protobuf.MessageOptions"),
    (Nt.fields = xe.util.newFieldList(() => [
      { no: 1, name: "message_set_wire_format", kind: "scalar", T: 8, opt: !0, default: !1 },
      {
        no: 2,
        name: "no_standard_descriptor_accessor",
        kind: "scalar",
        T: 8,
        opt: !0,
        default: !1,
      },
      { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: !0 },
      { no: 11, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: !0 },
      { no: 12, name: "features", kind: "message", T: Xt, opt: !0 },
      { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: !0 },
    ])));
  let _t = Nt;
  const It = class e extends g {
    constructor(e) {
      (super(),
        (this.targets = []),
        (this.editionDefaults = []),
        (this.uninterpretedOption = []),
        xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((It.runtime = xe),
    (It.typeName = "google.protobuf.FieldOptions"),
    (It.fields = xe.util.newFieldList(() => [
      { no: 1, name: "ctype", kind: "enum", T: xe.getEnumType(wt), opt: !0, default: 0 },
      { no: 2, name: "packed", kind: "scalar", T: 8, opt: !0 },
      { no: 6, name: "jstype", kind: "enum", T: xe.getEnumType(Ot), opt: !0, default: 0 },
      { no: 5, name: "lazy", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 15, name: "unverified_lazy", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 10, name: "weak", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 16, name: "debug_redact", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 17, name: "retention", kind: "enum", T: xe.getEnumType(bt), opt: !0 },
      { no: 19, name: "targets", kind: "enum", T: xe.getEnumType(kt), repeated: !0 },
      { no: 20, name: "edition_defaults", kind: "message", T: Pt, repeated: !0 },
      { no: 21, name: "features", kind: "message", T: Xt, opt: !0 },
      { no: 22, name: "feature_support", kind: "message", T: Dt, opt: !0 },
      { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: !0 },
    ])));
  let St = It;
  var wt = ((e) => (
    (e[(e.STRING = 0)] = "STRING"),
    (e[(e.CORD = 1)] = "CORD"),
    (e[(e.STRING_PIECE = 2)] = "STRING_PIECE"),
    e
  ))(wt || {});
  xe.util.setEnumType(wt, "google.protobuf.FieldOptions.CType", [
    { no: 0, name: "STRING" },
    { no: 1, name: "CORD" },
    { no: 2, name: "STRING_PIECE" },
  ]);
  var Ot = ((e) => (
    (e[(e.JS_NORMAL = 0)] = "JS_NORMAL"),
    (e[(e.JS_STRING = 1)] = "JS_STRING"),
    (e[(e.JS_NUMBER = 2)] = "JS_NUMBER"),
    e
  ))(Ot || {});
  xe.util.setEnumType(Ot, "google.protobuf.FieldOptions.JSType", [
    { no: 0, name: "JS_NORMAL" },
    { no: 1, name: "JS_STRING" },
    { no: 2, name: "JS_NUMBER" },
  ]);
  var bt = ((e) => (
    (e[(e.RETENTION_UNKNOWN = 0)] = "RETENTION_UNKNOWN"),
    (e[(e.RETENTION_RUNTIME = 1)] = "RETENTION_RUNTIME"),
    (e[(e.RETENTION_SOURCE = 2)] = "RETENTION_SOURCE"),
    e
  ))(bt || {});
  xe.util.setEnumType(bt, "google.protobuf.FieldOptions.OptionRetention", [
    { no: 0, name: "RETENTION_UNKNOWN" },
    { no: 1, name: "RETENTION_RUNTIME" },
    { no: 2, name: "RETENTION_SOURCE" },
  ]);
  var kt = ((e) => (
    (e[(e.TARGET_TYPE_UNKNOWN = 0)] = "TARGET_TYPE_UNKNOWN"),
    (e[(e.TARGET_TYPE_FILE = 1)] = "TARGET_TYPE_FILE"),
    (e[(e.TARGET_TYPE_EXTENSION_RANGE = 2)] = "TARGET_TYPE_EXTENSION_RANGE"),
    (e[(e.TARGET_TYPE_MESSAGE = 3)] = "TARGET_TYPE_MESSAGE"),
    (e[(e.TARGET_TYPE_FIELD = 4)] = "TARGET_TYPE_FIELD"),
    (e[(e.TARGET_TYPE_ONEOF = 5)] = "TARGET_TYPE_ONEOF"),
    (e[(e.TARGET_TYPE_ENUM = 6)] = "TARGET_TYPE_ENUM"),
    (e[(e.TARGET_TYPE_ENUM_ENTRY = 7)] = "TARGET_TYPE_ENUM_ENTRY"),
    (e[(e.TARGET_TYPE_SERVICE = 8)] = "TARGET_TYPE_SERVICE"),
    (e[(e.TARGET_TYPE_METHOD = 9)] = "TARGET_TYPE_METHOD"),
    e
  ))(kt || {});
  xe.util.setEnumType(kt, "google.protobuf.FieldOptions.OptionTargetType", [
    { no: 0, name: "TARGET_TYPE_UNKNOWN" },
    { no: 1, name: "TARGET_TYPE_FILE" },
    { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" },
    { no: 3, name: "TARGET_TYPE_MESSAGE" },
    { no: 4, name: "TARGET_TYPE_FIELD" },
    { no: 5, name: "TARGET_TYPE_ONEOF" },
    { no: 6, name: "TARGET_TYPE_ENUM" },
    { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" },
    { no: 8, name: "TARGET_TYPE_SERVICE" },
    { no: 9, name: "TARGET_TYPE_METHOD" },
  ]);
  const vt = class e extends g {
    constructor(e) {
      (super(), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((vt.runtime = xe),
    (vt.typeName = "google.protobuf.FieldOptions.EditionDefault"),
    (vt.fields = xe.util.newFieldList(() => [
      { no: 3, name: "edition", kind: "enum", T: xe.getEnumType(Ye), opt: !0 },
      { no: 2, name: "value", kind: "scalar", T: 9, opt: !0 },
    ])));
  let Pt = vt;
  const Ft = class e extends g {
    constructor(e) {
      (super(), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((Ft.runtime = xe),
    (Ft.typeName = "google.protobuf.FieldOptions.FeatureSupport"),
    (Ft.fields = xe.util.newFieldList(() => [
      { no: 1, name: "edition_introduced", kind: "enum", T: xe.getEnumType(Ye), opt: !0 },
      { no: 2, name: "edition_deprecated", kind: "enum", T: xe.getEnumType(Ye), opt: !0 },
      { no: 3, name: "deprecation_warning", kind: "scalar", T: 9, opt: !0 },
      { no: 4, name: "edition_removed", kind: "enum", T: xe.getEnumType(Ye), opt: !0 },
    ])));
  let Dt = Ft;
  const Rt = class e extends g {
    constructor(e) {
      (super(), (this.uninterpretedOption = []), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((Rt.runtime = xe),
    (Rt.typeName = "google.protobuf.OneofOptions"),
    (Rt.fields = xe.util.newFieldList(() => [
      { no: 1, name: "features", kind: "message", T: Xt, opt: !0 },
      { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: !0 },
    ])));
  let Jt = Rt;
  const Ut = class e extends g {
    constructor(e) {
      (super(), (this.uninterpretedOption = []), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((Ut.runtime = xe),
    (Ut.typeName = "google.protobuf.EnumOptions"),
    (Ut.fields = xe.util.newFieldList(() => [
      { no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: !0 },
      { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 6, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: !0 },
      { no: 7, name: "features", kind: "message", T: Xt, opt: !0 },
      { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: !0 },
    ])));
  let At = Ut;
  const Lt = class e extends g {
    constructor(e) {
      (super(), (this.uninterpretedOption = []), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((Lt.runtime = xe),
    (Lt.typeName = "google.protobuf.EnumValueOptions"),
    (Lt.fields = xe.util.newFieldList(() => [
      { no: 1, name: "deprecated", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 2, name: "features", kind: "message", T: Xt, opt: !0 },
      { no: 3, name: "debug_redact", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 4, name: "feature_support", kind: "message", T: Dt, opt: !0 },
      { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: !0 },
    ])));
  let Bt = Lt;
  const Mt = class e extends g {
    constructor(e) {
      (super(), (this.uninterpretedOption = []), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((Mt.runtime = xe),
    (Mt.typeName = "google.protobuf.ServiceOptions"),
    (Mt.fields = xe.util.newFieldList(() => [
      { no: 34, name: "features", kind: "message", T: Xt, opt: !0 },
      { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: !0 },
    ])));
  let xt = Mt;
  const Yt = class e extends g {
    constructor(e) {
      (super(), (this.uninterpretedOption = []), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((Yt.runtime = xe),
    (Yt.typeName = "google.protobuf.MethodOptions"),
    (Yt.fields = xe.util.newFieldList(() => [
      { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: !0, default: !1 },
      {
        no: 34,
        name: "idempotency_level",
        kind: "enum",
        T: xe.getEnumType(jt),
        opt: !0,
        default: 0,
      },
      { no: 35, name: "features", kind: "message", T: Xt, opt: !0 },
      { no: 999, name: "uninterpreted_option", kind: "message", T: Gt, repeated: !0 },
    ])));
  let Ct = Yt;
  var jt = ((e) => (
    (e[(e.IDEMPOTENCY_UNKNOWN = 0)] = "IDEMPOTENCY_UNKNOWN"),
    (e[(e.NO_SIDE_EFFECTS = 1)] = "NO_SIDE_EFFECTS"),
    (e[(e.IDEMPOTENT = 2)] = "IDEMPOTENT"),
    e
  ))(jt || {});
  xe.util.setEnumType(jt, "google.protobuf.MethodOptions.IdempotencyLevel", [
    { no: 0, name: "IDEMPOTENCY_UNKNOWN" },
    { no: 1, name: "NO_SIDE_EFFECTS" },
    { no: 2, name: "IDEMPOTENT" },
  ]);
  const Vt = class e extends g {
    constructor(e) {
      (super(), (this.name = []), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((Vt.runtime = xe),
    (Vt.typeName = "google.protobuf.UninterpretedOption"),
    (Vt.fields = xe.util.newFieldList(() => [
      { no: 2, name: "name", kind: "message", T: $t, repeated: !0 },
      { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: !0 },
      { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: !0 },
      { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: !0 },
      { no: 6, name: "double_value", kind: "scalar", T: 1, opt: !0 },
      { no: 7, name: "string_value", kind: "scalar", T: 12, opt: !0 },
      { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: !0 },
    ])));
  let Gt = Vt;
  const qt = class e extends g {
    constructor(e) {
      (super(), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((qt.runtime = xe),
    (qt.typeName = "google.protobuf.UninterpretedOption.NamePart"),
    (qt.fields = xe.util.newFieldList(() => [
      { no: 1, name: "name_part", kind: "scalar", T: 9, req: !0 },
      { no: 2, name: "is_extension", kind: "scalar", T: 8, req: !0 },
    ])));
  let $t = qt;
  const Wt = class e extends g {
    constructor(e) {
      (super(), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((Wt.runtime = xe),
    (Wt.typeName = "google.protobuf.FeatureSet"),
    (Wt.fields = xe.util.newFieldList(() => [
      { no: 1, name: "field_presence", kind: "enum", T: xe.getEnumType(Kt), opt: !0 },
      { no: 2, name: "enum_type", kind: "enum", T: xe.getEnumType(Zt), opt: !0 },
      { no: 3, name: "repeated_field_encoding", kind: "enum", T: xe.getEnumType(Ht), opt: !0 },
      { no: 4, name: "utf8_validation", kind: "enum", T: xe.getEnumType(zt), opt: !0 },
      { no: 5, name: "message_encoding", kind: "enum", T: xe.getEnumType(Qt), opt: !0 },
      { no: 6, name: "json_format", kind: "enum", T: xe.getEnumType(en), opt: !0 },
    ])));
  let Xt = Wt;
  var Kt = ((e) => (
    (e[(e.FIELD_PRESENCE_UNKNOWN = 0)] = "FIELD_PRESENCE_UNKNOWN"),
    (e[(e.EXPLICIT = 1)] = "EXPLICIT"),
    (e[(e.IMPLICIT = 2)] = "IMPLICIT"),
    (e[(e.LEGACY_REQUIRED = 3)] = "LEGACY_REQUIRED"),
    e
  ))(Kt || {});
  xe.util.setEnumType(Kt, "google.protobuf.FeatureSet.FieldPresence", [
    { no: 0, name: "FIELD_PRESENCE_UNKNOWN" },
    { no: 1, name: "EXPLICIT" },
    { no: 2, name: "IMPLICIT" },
    { no: 3, name: "LEGACY_REQUIRED" },
  ]);
  var Zt = ((e) => (
    (e[(e.ENUM_TYPE_UNKNOWN = 0)] = "ENUM_TYPE_UNKNOWN"),
    (e[(e.OPEN = 1)] = "OPEN"),
    (e[(e.CLOSED = 2)] = "CLOSED"),
    e
  ))(Zt || {});
  xe.util.setEnumType(Zt, "google.protobuf.FeatureSet.EnumType", [
    { no: 0, name: "ENUM_TYPE_UNKNOWN" },
    { no: 1, name: "OPEN" },
    { no: 2, name: "CLOSED" },
  ]);
  var Ht = ((e) => (
    (e[(e.REPEATED_FIELD_ENCODING_UNKNOWN = 0)] = "REPEATED_FIELD_ENCODING_UNKNOWN"),
    (e[(e.PACKED = 1)] = "PACKED"),
    (e[(e.EXPANDED = 2)] = "EXPANDED"),
    e
  ))(Ht || {});
  xe.util.setEnumType(Ht, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [
    { no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" },
    { no: 1, name: "PACKED" },
    { no: 2, name: "EXPANDED" },
  ]);
  var zt = ((e) => (
    (e[(e.UTF8_VALIDATION_UNKNOWN = 0)] = "UTF8_VALIDATION_UNKNOWN"),
    (e[(e.VERIFY = 2)] = "VERIFY"),
    (e[(e.NONE = 3)] = "NONE"),
    e
  ))(zt || {});
  xe.util.setEnumType(zt, "google.protobuf.FeatureSet.Utf8Validation", [
    { no: 0, name: "UTF8_VALIDATION_UNKNOWN" },
    { no: 2, name: "VERIFY" },
    { no: 3, name: "NONE" },
  ]);
  var Qt = ((e) => (
    (e[(e.MESSAGE_ENCODING_UNKNOWN = 0)] = "MESSAGE_ENCODING_UNKNOWN"),
    (e[(e.LENGTH_PREFIXED = 1)] = "LENGTH_PREFIXED"),
    (e[(e.DELIMITED = 2)] = "DELIMITED"),
    e
  ))(Qt || {});
  xe.util.setEnumType(Qt, "google.protobuf.FeatureSet.MessageEncoding", [
    { no: 0, name: "MESSAGE_ENCODING_UNKNOWN" },
    { no: 1, name: "LENGTH_PREFIXED" },
    { no: 2, name: "DELIMITED" },
  ]);
  var en = ((e) => (
    (e[(e.JSON_FORMAT_UNKNOWN = 0)] = "JSON_FORMAT_UNKNOWN"),
    (e[(e.ALLOW = 1)] = "ALLOW"),
    (e[(e.LEGACY_BEST_EFFORT = 2)] = "LEGACY_BEST_EFFORT"),
    e
  ))(en || {});
  xe.util.setEnumType(en, "google.protobuf.FeatureSet.JsonFormat", [
    { no: 0, name: "JSON_FORMAT_UNKNOWN" },
    { no: 1, name: "ALLOW" },
    { no: 2, name: "LEGACY_BEST_EFFORT" },
  ]);
  const tn = class e extends g {
    constructor(e) {
      (super(), (this.defaults = []), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((tn.runtime = xe),
    (tn.typeName = "google.protobuf.FeatureSetDefaults"),
    (tn.fields = xe.util.newFieldList(() => [
      { no: 1, name: "defaults", kind: "message", T: rn, repeated: !0 },
      { no: 4, name: "minimum_edition", kind: "enum", T: xe.getEnumType(Ye), opt: !0 },
      { no: 5, name: "maximum_edition", kind: "enum", T: xe.getEnumType(Ye), opt: !0 },
    ])));
  const nn = class e extends g {
    constructor(e) {
      (super(), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((nn.runtime = xe),
    (nn.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault"),
    (nn.fields = xe.util.newFieldList(() => [
      { no: 3, name: "edition", kind: "enum", T: xe.getEnumType(Ye), opt: !0 },
      { no: 4, name: "overridable_features", kind: "message", T: Xt, opt: !0 },
      { no: 5, name: "fixed_features", kind: "message", T: Xt, opt: !0 },
    ])));
  let rn = nn;
  const on = class e extends g {
    constructor(e) {
      (super(), (this.location = []), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((on.runtime = xe),
    (on.typeName = "google.protobuf.SourceCodeInfo"),
    (on.fields = xe.util.newFieldList(() => [
      { no: 1, name: "location", kind: "message", T: ln, repeated: !0 },
    ])));
  let an = on;
  const sn = class e extends g {
    constructor(e) {
      (super(),
        (this.path = []),
        (this.span = []),
        (this.leadingDetachedComments = []),
        xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((sn.runtime = xe),
    (sn.typeName = "google.protobuf.SourceCodeInfo.Location"),
    (sn.fields = xe.util.newFieldList(() => [
      { no: 1, name: "path", kind: "scalar", T: 5, repeated: !0, packed: !0 },
      { no: 2, name: "span", kind: "scalar", T: 5, repeated: !0, packed: !0 },
      { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: !0 },
      { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: !0 },
      { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9, repeated: !0 },
    ])));
  let ln = sn;
  const un = class e extends g {
    constructor(e) {
      (super(), (this.annotation = []), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((un.runtime = xe),
    (un.typeName = "google.protobuf.GeneratedCodeInfo"),
    (un.fields = xe.util.newFieldList(() => [
      { no: 1, name: "annotation", kind: "message", T: pn, repeated: !0 },
    ])));
  let cn = un;
  const mn = class e extends g {
    constructor(e) {
      (super(), (this.path = []), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((mn.runtime = xe),
    (mn.typeName = "google.protobuf.GeneratedCodeInfo.Annotation"),
    (mn.fields = xe.util.newFieldList(() => [
      { no: 1, name: "path", kind: "scalar", T: 5, repeated: !0, packed: !0 },
      { no: 2, name: "source_file", kind: "scalar", T: 9, opt: !0 },
      { no: 3, name: "begin", kind: "scalar", T: 5, opt: !0 },
      { no: 4, name: "end", kind: "scalar", T: 5, opt: !0 },
      { no: 5, name: "semantic", kind: "enum", T: xe.getEnumType(dn), opt: !0 },
    ])));
  let pn = mn;
  var dn = ((e) => (
    (e[(e.NONE = 0)] = "NONE"),
    (e[(e.SET = 1)] = "SET"),
    (e[(e.ALIAS = 2)] = "ALIAS"),
    e
  ))(dn || {});
  xe.util.setEnumType(dn, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [
    { no: 0, name: "NONE" },
    { no: 1, name: "SET" },
    { no: 2, name: "ALIAS" },
  ]);
  (rt.DOUBLE,
    v.DOUBLE,
    rt.FLOAT,
    v.FLOAT,
    rt.INT64,
    v.INT64,
    rt.UINT64,
    v.UINT64,
    rt.INT32,
    v.INT32,
    rt.FIXED64,
    v.FIXED64,
    rt.FIXED32,
    v.FIXED32,
    rt.BOOL,
    v.BOOL,
    rt.STRING,
    v.STRING,
    rt.GROUP,
    rt.MESSAGE,
    rt.BYTES,
    v.BYTES,
    rt.UINT32,
    v.UINT32,
    rt.ENUM,
    rt.SFIXED32,
    v.SFIXED32,
    rt.SFIXED64,
    v.SFIXED64,
    rt.SINT32,
    v.SINT32,
    rt.SINT64,
    v.SINT64);
  const fn = class e extends g {
    constructor(e) {
      (super(), (this.seconds = k.zero), (this.nanos = 0), Me.util.initPartial(e, this));
    }
    fromJson(e, t) {
      if ("string" != typeof e)
        throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${Me.json.debug(e)}`);
      const n = e.match(
        /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/,
      );
      if (!n)
        throw new Error(
          "cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string",
        );
      const r = Date.parse(
        n[1] + "-" + n[2] + "-" + n[3] + "T" + n[4] + ":" + n[5] + ":" + n[6] + (n[8] ? n[8] : "Z"),
      );
      if (Number.isNaN(r))
        throw new Error(
          "cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string",
        );
      if (r < Date.parse("0001-01-01T00:00:00Z") || r > Date.parse("9999-12-31T23:59:59Z"))
        throw new Error(
          "cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive",
        );
      return (
        (this.seconds = k.parse(r / 1e3)),
        (this.nanos = 0),
        n[7] && (this.nanos = parseInt("1" + n[7] + "0".repeat(9 - n[7].length)) - 1e9),
        this
      );
    }
    toJson(e) {
      const t = 1e3 * Number(this.seconds);
      if (t < Date.parse("0001-01-01T00:00:00Z") || t > Date.parse("9999-12-31T23:59:59Z"))
        throw new Error(
          "cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive",
        );
      if (this.nanos < 0)
        throw new Error(
          "cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative",
        );
      let n = "Z";
      if (this.nanos > 0) {
        const e = (this.nanos + 1e9).toString().substring(1);
        n =
          "000000" === e.substring(3)
            ? "." + e.substring(0, 3) + "Z"
            : "000" === e.substring(6)
              ? "." + e.substring(0, 6) + "Z"
              : "." + e + "Z";
      }
      return new Date(t).toISOString().replace(".000Z", n);
    }
    toDate() {
      return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
    }
    static now() {
      return e.fromDate(new Date());
    }
    static fromDate(t) {
      const n = t.getTime();
      return new e({ seconds: k.parse(Math.floor(n / 1e3)), nanos: (n % 1e3) * 1e6 });
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((fn.runtime = Me),
    (fn.typeName = "google.protobuf.Timestamp"),
    (fn.fields = Me.util.newFieldList(() => [
      { no: 1, name: "seconds", kind: "scalar", T: 3 },
      { no: 2, name: "nanos", kind: "scalar", T: 5 },
    ])));
  const Tn = class e extends g {
    constructor(e) {
      (super(), (this.seconds = k.zero), (this.nanos = 0), Me.util.initPartial(e, this));
    }
    fromJson(e, t) {
      if ("string" != typeof e)
        throw new Error(`cannot decode google.protobuf.Duration from JSON: ${Me.json.debug(e)}`);
      const n = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
      if (null === n)
        throw new Error(`cannot decode google.protobuf.Duration from JSON: ${Me.json.debug(e)}`);
      const r = Number(n[1]);
      if (r > 315576e6 || r < -315576e6)
        throw new Error(`cannot decode google.protobuf.Duration from JSON: ${Me.json.debug(e)}`);
      if (((this.seconds = k.parse(r)), "string" == typeof n[2])) {
        const e = n[2] + "0".repeat(9 - n[2].length);
        ((this.nanos = parseInt(e)), (r < 0 || Object.is(r, -0)) && (this.nanos = -this.nanos));
      }
      return this;
    }
    toJson(e) {
      if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6)
        throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
      let t = this.seconds.toString();
      if (0 !== this.nanos) {
        let e = Math.abs(this.nanos).toString();
        ((e = "0".repeat(9 - e.length) + e),
          "000000" === e.substring(3)
            ? (e = e.substring(0, 3))
            : "000" === e.substring(6) && (e = e.substring(0, 6)),
          (t += "." + e),
          this.nanos < 0 && 0 == Number(this.seconds) && (t = "-" + t));
      }
      return t + "s";
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((Tn.runtime = Me),
    (Tn.typeName = "google.protobuf.Duration"),
    (Tn.fields = Me.util.newFieldList(() => [
      { no: 1, name: "seconds", kind: "scalar", T: 3 },
      { no: 2, name: "nanos", kind: "scalar", T: 5 },
    ])));
  const gn = class e extends g {
    constructor(e) {
      (super(),
        (this.typeUrl = ""),
        (this.value = new Uint8Array(0)),
        Me.util.initPartial(e, this));
    }
    toJson(e) {
      if ("" === this.typeUrl) return {};
      const t = this.typeUrlToName(this.typeUrl),
        n = e?.typeRegistry?.findMessage(t);
      if (!n)
        throw new Error(
          `cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`,
        );
      let r = n.fromBinary(this.value).toJson(e);
      return (
        (t.startsWith("google.protobuf.") ||
          null === r ||
          Array.isArray(r) ||
          "object" != typeof r) &&
          (r = { value: r }),
        (r["@type"] = this.typeUrl),
        r
      );
    }
    fromJson(e, t) {
      if (null === e || Array.isArray(e) || "object" != typeof e)
        throw new Error(
          "cannot decode message google.protobuf.Any from JSON: expected object but got " +
            (null === e ? "null" : Array.isArray(e) ? "array" : typeof e),
        );
      if (0 == Object.keys(e).length) return this;
      const n = e["@type"];
      if ("string" != typeof n || "" == n)
        throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
      const r = this.typeUrlToName(n),
        o = t?.typeRegistry?.findMessage(r);
      if (!o)
        throw new Error(
          `cannot decode message google.protobuf.Any from JSON: ${n} is not in the type registry`,
        );
      let a;
      if (r.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(e, "value"))
        a = o.fromJson(e.value, t);
      else {
        const n = Object.assign({}, e);
        (delete n["@type"], (a = o.fromJson(n, t)));
      }
      return (this.packFrom(a), this);
    }
    packFrom(e) {
      ((this.value = e.toBinary()), (this.typeUrl = this.typeNameToUrl(e.getType().typeName)));
    }
    unpackTo(e) {
      return !!this.is(e.getType()) && (e.fromBinary(this.value), !0);
    }
    unpack(e) {
      if ("" === this.typeUrl) return;
      const t = e.findMessage(this.typeUrlToName(this.typeUrl));
      return t ? t.fromBinary(this.value) : void 0;
    }
    is(e) {
      if ("" === this.typeUrl) return !1;
      const t = this.typeUrlToName(this.typeUrl);
      let n = "";
      return ((n = "string" == typeof e ? e : e.typeName), t === n);
    }
    typeNameToUrl(e) {
      return `type.googleapis.com/${e}`;
    }
    typeUrlToName(e) {
      if (!e.length) throw new Error(`invalid type url: ${e}`);
      const t = e.lastIndexOf("/"),
        n = t >= 0 ? e.substring(t + 1) : e;
      if (!n.length) throw new Error(`invalid type url: ${e}`);
      return n;
    }
    static pack(t) {
      const n = new e();
      return (n.packFrom(t), n);
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((gn.runtime = Me),
    (gn.typeName = "google.protobuf.Any"),
    (gn.fields = Me.util.newFieldList(() => [
      { no: 1, name: "type_url", kind: "scalar", T: 9 },
      { no: 2, name: "value", kind: "scalar", T: 12 },
    ])));
  let En = gn;
  const yn = class e extends g {
    constructor(e) {
      (super(), Me.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((yn.runtime = Me),
    (yn.typeName = "google.protobuf.Empty"),
    (yn.fields = Me.util.newFieldList(() => [])));
  const hn = class e extends g {
    constructor(e) {
      (super(), (this.paths = []), Me.util.initPartial(e, this));
    }
    toJson(e) {
      return this.paths
        .map((e) => {
          if (e.match(/_[0-9]?_/g) || e.match(/[A-Z]/g))
            throw new Error(
              'cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' +
                e +
                '" is irreversible',
            );
          return (function (e) {
            let t = !1;
            const n = [];
            for (let r = 0; r < e.length; r++) {
              let o = e.charAt(r);
              switch (o) {
                case "_":
                  t = !0;
                  break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                  (n.push(o), (t = !1));
                  break;
                default:
                  (t && ((t = !1), (o = o.toUpperCase())), n.push(o));
              }
            }
            return n.join("");
          })(e);
        })
        .join(",");
    }
    fromJson(e, t) {
      if ("string" != typeof e)
        throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + Me.json.debug(e));
      if ("" === e) return this;
      return (
        (this.paths = e.split(",").map(function (e) {
          if (e.includes("_"))
            throw new Error(
              "cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase",
            );
          const t = e.replace(/[A-Z]/g, (e) => "_" + e.toLowerCase());
          return "_" === t[0] ? t.substring(1) : t;
        })),
        this
      );
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((hn.runtime = Me),
    (hn.typeName = "google.protobuf.FieldMask"),
    (hn.fields = Me.util.newFieldList(() => [
      { no: 1, name: "paths", kind: "scalar", T: 9, repeated: !0 },
    ])));
  var Nn = ((e) => ((e[(e.NULL_VALUE = 0)] = "NULL_VALUE"), e))(Nn || {});
  Me.util.setEnumType(Nn, "google.protobuf.NullValue", [{ no: 0, name: "NULL_VALUE" }]);
  const _n = class e extends g {
    constructor(e) {
      (super(), (this.fields = {}), Me.util.initPartial(e, this));
    }
    toJson(e) {
      const t = {};
      for (const [n, r] of Object.entries(this.fields)) t[n] = r.toJson(e);
      return t;
    }
    fromJson(e, t) {
      if ("object" != typeof e || null == e || Array.isArray(e))
        throw new Error("cannot decode google.protobuf.Struct from JSON " + Me.json.debug(e));
      for (const [t, n] of Object.entries(e)) this.fields[t] = wn.fromJson(n);
      return this;
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((_n.runtime = Me),
    (_n.typeName = "google.protobuf.Struct"),
    (_n.fields = Me.util.newFieldList(() => [
      { no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: wn } },
    ])));
  let In = _n;
  const Sn = class e extends g {
    constructor(e) {
      (super(), (this.kind = { case: void 0 }), Me.util.initPartial(e, this));
    }
    toJson(e) {
      switch (this.kind.case) {
        case "nullValue":
          return null;
        case "numberValue":
          if (!Number.isFinite(this.kind.value))
            throw new Error("google.protobuf.Value cannot be NaN or Infinity");
          return this.kind.value;
        case "boolValue":
        case "stringValue":
          return this.kind.value;
        case "structValue":
        case "listValue":
          return this.kind.value.toJson({ ...e, emitDefaultValues: !0 });
      }
      throw new Error("google.protobuf.Value must have a value");
    }
    fromJson(e, t) {
      switch (typeof e) {
        case "number":
          this.kind = { case: "numberValue", value: e };
          break;
        case "string":
          this.kind = { case: "stringValue", value: e };
          break;
        case "boolean":
          this.kind = { case: "boolValue", value: e };
          break;
        case "object":
          null === e
            ? (this.kind = { case: "nullValue", value: 0 })
            : Array.isArray(e)
              ? (this.kind = { case: "listValue", value: bn.fromJson(e) })
              : (this.kind = { case: "structValue", value: In.fromJson(e) });
          break;
        default:
          throw new Error("cannot decode google.protobuf.Value from JSON " + Me.json.debug(e));
      }
      return this;
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((Sn.runtime = Me),
    (Sn.typeName = "google.protobuf.Value"),
    (Sn.fields = Me.util.newFieldList(() => [
      { no: 1, name: "null_value", kind: "enum", T: Me.getEnumType(Nn), oneof: "kind" },
      { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" },
      { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" },
      { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" },
      { no: 5, name: "struct_value", kind: "message", T: In, oneof: "kind" },
      { no: 6, name: "list_value", kind: "message", T: bn, oneof: "kind" },
    ])));
  let wn = Sn;
  const On = class e extends g {
    constructor(e) {
      (super(), (this.values = []), Me.util.initPartial(e, this));
    }
    toJson(e) {
      return this.values.map((e) => e.toJson());
    }
    fromJson(e, t) {
      if (!Array.isArray(e))
        throw new Error("cannot decode google.protobuf.ListValue from JSON " + Me.json.debug(e));
      for (let t of e) this.values.push(wn.fromJson(t));
      return this;
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((On.runtime = Me),
    (On.typeName = "google.protobuf.ListValue"),
    (On.fields = Me.util.newFieldList(() => [
      { no: 1, name: "values", kind: "message", T: wn, repeated: !0 },
    ])));
  let bn = On;
  const kn = class e extends g {
    constructor(e) {
      (super(), (this.value = 0), Me.util.initPartial(e, this));
    }
    toJson(e) {
      return Me.json.writeScalar(v.DOUBLE, this.value, !0);
    }
    fromJson(e, t) {
      try {
        this.value = Me.json.readScalar(v.DOUBLE, e);
      } catch (e) {
        let t = 'cannot decode message google.protobuf.DoubleValue from JSON"';
        throw (e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t));
      }
      return this;
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((kn.runtime = Me),
    (kn.typeName = "google.protobuf.DoubleValue"),
    (kn.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 1 }])),
    (kn.fieldWrapper = { wrapField: (e) => new kn({ value: e }), unwrapField: (e) => e.value }));
  const vn = class e extends g {
    constructor(e) {
      (super(), (this.value = 0), Me.util.initPartial(e, this));
    }
    toJson(e) {
      return Me.json.writeScalar(v.FLOAT, this.value, !0);
    }
    fromJson(e, t) {
      try {
        this.value = Me.json.readScalar(v.FLOAT, e);
      } catch (e) {
        let t = 'cannot decode message google.protobuf.FloatValue from JSON"';
        throw (e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t));
      }
      return this;
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((vn.runtime = Me),
    (vn.typeName = "google.protobuf.FloatValue"),
    (vn.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 2 }])),
    (vn.fieldWrapper = { wrapField: (e) => new vn({ value: e }), unwrapField: (e) => e.value }));
  const Pn = class e extends g {
    constructor(e) {
      (super(), (this.value = k.zero), Me.util.initPartial(e, this));
    }
    toJson(e) {
      return Me.json.writeScalar(v.INT64, this.value, !0);
    }
    fromJson(e, t) {
      try {
        this.value = Me.json.readScalar(v.INT64, e);
      } catch (e) {
        let t = 'cannot decode message google.protobuf.Int64Value from JSON"';
        throw (e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t));
      }
      return this;
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((Pn.runtime = Me),
    (Pn.typeName = "google.protobuf.Int64Value"),
    (Pn.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 3 }])),
    (Pn.fieldWrapper = { wrapField: (e) => new Pn({ value: e }), unwrapField: (e) => e.value }));
  const Fn = class e extends g {
    constructor(e) {
      (super(), (this.value = k.zero), Me.util.initPartial(e, this));
    }
    toJson(e) {
      return Me.json.writeScalar(v.UINT64, this.value, !0);
    }
    fromJson(e, t) {
      try {
        this.value = Me.json.readScalar(v.UINT64, e);
      } catch (e) {
        let t = 'cannot decode message google.protobuf.UInt64Value from JSON"';
        throw (e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t));
      }
      return this;
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((Fn.runtime = Me),
    (Fn.typeName = "google.protobuf.UInt64Value"),
    (Fn.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 4 }])),
    (Fn.fieldWrapper = { wrapField: (e) => new Fn({ value: e }), unwrapField: (e) => e.value }));
  const Dn = class e extends g {
    constructor(e) {
      (super(), (this.value = 0), Me.util.initPartial(e, this));
    }
    toJson(e) {
      return Me.json.writeScalar(v.INT32, this.value, !0);
    }
    fromJson(e, t) {
      try {
        this.value = Me.json.readScalar(v.INT32, e);
      } catch (e) {
        let t = 'cannot decode message google.protobuf.Int32Value from JSON"';
        throw (e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t));
      }
      return this;
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((Dn.runtime = Me),
    (Dn.typeName = "google.protobuf.Int32Value"),
    (Dn.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 5 }])),
    (Dn.fieldWrapper = { wrapField: (e) => new Dn({ value: e }), unwrapField: (e) => e.value }));
  const Rn = class e extends g {
    constructor(e) {
      (super(), (this.value = 0), Me.util.initPartial(e, this));
    }
    toJson(e) {
      return Me.json.writeScalar(v.UINT32, this.value, !0);
    }
    fromJson(e, t) {
      try {
        this.value = Me.json.readScalar(v.UINT32, e);
      } catch (e) {
        let t = 'cannot decode message google.protobuf.UInt32Value from JSON"';
        throw (e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t));
      }
      return this;
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((Rn.runtime = Me),
    (Rn.typeName = "google.protobuf.UInt32Value"),
    (Rn.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 13 }])),
    (Rn.fieldWrapper = { wrapField: (e) => new Rn({ value: e }), unwrapField: (e) => e.value }));
  const Jn = class e extends g {
    constructor(e) {
      (super(), (this.value = !1), Me.util.initPartial(e, this));
    }
    toJson(e) {
      return Me.json.writeScalar(v.BOOL, this.value, !0);
    }
    fromJson(e, t) {
      try {
        this.value = Me.json.readScalar(v.BOOL, e);
      } catch (e) {
        let t = 'cannot decode message google.protobuf.BoolValue from JSON"';
        throw (e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t));
      }
      return this;
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((Jn.runtime = Me),
    (Jn.typeName = "google.protobuf.BoolValue"),
    (Jn.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 8 }])),
    (Jn.fieldWrapper = { wrapField: (e) => new Jn({ value: e }), unwrapField: (e) => e.value }));
  const Un = class e extends g {
    constructor(e) {
      (super(), (this.value = ""), Me.util.initPartial(e, this));
    }
    toJson(e) {
      return Me.json.writeScalar(v.STRING, this.value, !0);
    }
    fromJson(e, t) {
      try {
        this.value = Me.json.readScalar(v.STRING, e);
      } catch (e) {
        let t = 'cannot decode message google.protobuf.StringValue from JSON"';
        throw (e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t));
      }
      return this;
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((Un.runtime = Me),
    (Un.typeName = "google.protobuf.StringValue"),
    (Un.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 9 }])),
    (Un.fieldWrapper = { wrapField: (e) => new Un({ value: e }), unwrapField: (e) => e.value }));
  const An = class e extends g {
    constructor(e) {
      (super(), (this.value = new Uint8Array(0)), Me.util.initPartial(e, this));
    }
    toJson(e) {
      return Me.json.writeScalar(v.BYTES, this.value, !0);
    }
    fromJson(e, t) {
      try {
        this.value = Me.json.readScalar(v.BYTES, e);
      } catch (e) {
        let t = 'cannot decode message google.protobuf.BytesValue from JSON"';
        throw (e instanceof Error && e.message.length > 0 && (t += `: ${e.message}`), new Error(t));
      }
      return this;
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((An.runtime = Me),
    (An.typeName = "google.protobuf.BytesValue"),
    (An.fields = Me.util.newFieldList(() => [{ no: 1, name: "value", kind: "scalar", T: 12 }])),
    (An.fieldWrapper = { wrapField: (e) => new An({ value: e }), unwrapField: (e) => e.value }));
  m(Nn);
  const Ln = class e extends g {
    constructor(e) {
      (super(), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((Ln.runtime = xe),
    (Ln.typeName = "google.protobuf.compiler.Version"),
    (Ln.fields = xe.util.newFieldList(() => [
      { no: 1, name: "major", kind: "scalar", T: 5, opt: !0 },
      { no: 2, name: "minor", kind: "scalar", T: 5, opt: !0 },
      { no: 3, name: "patch", kind: "scalar", T: 5, opt: !0 },
      { no: 4, name: "suffix", kind: "scalar", T: 9, opt: !0 },
    ])));
  let Bn = Ln;
  const Mn = class e extends g {
    constructor(e) {
      (super(),
        (this.fileToGenerate = []),
        (this.protoFile = []),
        (this.sourceFileDescriptors = []),
        xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((Mn.runtime = xe),
    (Mn.typeName = "google.protobuf.compiler.CodeGeneratorRequest"),
    (Mn.fields = xe.util.newFieldList(() => [
      { no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: !0 },
      { no: 2, name: "parameter", kind: "scalar", T: 9, opt: !0 },
      { no: 15, name: "proto_file", kind: "message", T: Ve, repeated: !0 },
      { no: 17, name: "source_file_descriptors", kind: "message", T: Ve, repeated: !0 },
      { no: 3, name: "compiler_version", kind: "message", T: Bn, opt: !0 },
    ])));
  const xn = class e extends g {
    constructor(e) {
      (super(), (this.file = []), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((xn.runtime = xe),
    (xn.typeName = "google.protobuf.compiler.CodeGeneratorResponse"),
    (xn.fields = xe.util.newFieldList(() => [
      { no: 1, name: "error", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: !0 },
      { no: 3, name: "minimum_edition", kind: "scalar", T: 5, opt: !0 },
      { no: 4, name: "maximum_edition", kind: "scalar", T: 5, opt: !0 },
      { no: 15, name: "file", kind: "message", T: jn, repeated: !0 },
    ])));
  var Yn = ((e) => (
    (e[(e.NONE = 0)] = "NONE"),
    (e[(e.PROTO3_OPTIONAL = 1)] = "PROTO3_OPTIONAL"),
    (e[(e.SUPPORTS_EDITIONS = 2)] = "SUPPORTS_EDITIONS"),
    e
  ))(Yn || {});
  xe.util.setEnumType(Yn, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [
    { no: 0, name: "FEATURE_NONE" },
    { no: 1, name: "FEATURE_PROTO3_OPTIONAL" },
    { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" },
  ]);
  const Cn = class e extends g {
    constructor(e) {
      (super(), xe.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return xe.util.equals(e, t, n);
    }
  };
  ((Cn.runtime = xe),
    (Cn.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File"),
    (Cn.fields = xe.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: !0 },
      { no: 15, name: "content", kind: "scalar", T: 9, opt: !0 },
      { no: 16, name: "generated_code_info", kind: "message", T: cn, opt: !0 },
    ])));
  let jn = Cn;
  const Vn = class e extends g {
    constructor(e) {
      (super(), (this.fileName = ""), Me.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((Vn.runtime = Me),
    (Vn.typeName = "google.protobuf.SourceContext"),
    (Vn.fields = Me.util.newFieldList(() => [{ no: 1, name: "file_name", kind: "scalar", T: 9 }])));
  let Gn = Vn;
  var qn = ((e) => (
    (e[(e.PROTO2 = 0)] = "PROTO2"),
    (e[(e.PROTO3 = 1)] = "PROTO3"),
    (e[(e.EDITIONS = 2)] = "EDITIONS"),
    e
  ))(qn || {});
  Me.util.setEnumType(qn, "google.protobuf.Syntax", [
    { no: 0, name: "SYNTAX_PROTO2" },
    { no: 1, name: "SYNTAX_PROTO3" },
    { no: 2, name: "SYNTAX_EDITIONS" },
  ]);
  const $n = class e extends g {
    constructor(e) {
      (super(),
        (this.name = ""),
        (this.fields = []),
        (this.oneofs = []),
        (this.options = []),
        (this.syntax = 0),
        (this.edition = ""),
        Me.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  (($n.runtime = Me),
    ($n.typeName = "google.protobuf.Type"),
    ($n.fields = Me.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9 },
      { no: 2, name: "fields", kind: "message", T: Xn, repeated: !0 },
      { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: !0 },
      { no: 4, name: "options", kind: "message", T: tr, repeated: !0 },
      { no: 5, name: "source_context", kind: "message", T: Gn },
      { no: 6, name: "syntax", kind: "enum", T: Me.getEnumType(qn) },
      { no: 7, name: "edition", kind: "scalar", T: 9 },
    ])));
  const Wn = class e extends g {
    constructor(e) {
      (super(),
        (this.kind = 0),
        (this.cardinality = 0),
        (this.number = 0),
        (this.name = ""),
        (this.typeUrl = ""),
        (this.oneofIndex = 0),
        (this.packed = !1),
        (this.options = []),
        (this.jsonName = ""),
        (this.defaultValue = ""),
        Me.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((Wn.runtime = Me),
    (Wn.typeName = "google.protobuf.Field"),
    (Wn.fields = Me.util.newFieldList(() => [
      { no: 1, name: "kind", kind: "enum", T: Me.getEnumType(Kn) },
      { no: 2, name: "cardinality", kind: "enum", T: Me.getEnumType(Zn) },
      { no: 3, name: "number", kind: "scalar", T: 5 },
      { no: 4, name: "name", kind: "scalar", T: 9 },
      { no: 6, name: "type_url", kind: "scalar", T: 9 },
      { no: 7, name: "oneof_index", kind: "scalar", T: 5 },
      { no: 8, name: "packed", kind: "scalar", T: 8 },
      { no: 9, name: "options", kind: "message", T: tr, repeated: !0 },
      { no: 10, name: "json_name", kind: "scalar", T: 9 },
      { no: 11, name: "default_value", kind: "scalar", T: 9 },
    ])));
  let Xn = Wn;
  var Kn = ((e) => (
    (e[(e.TYPE_UNKNOWN = 0)] = "TYPE_UNKNOWN"),
    (e[(e.TYPE_DOUBLE = 1)] = "TYPE_DOUBLE"),
    (e[(e.TYPE_FLOAT = 2)] = "TYPE_FLOAT"),
    (e[(e.TYPE_INT64 = 3)] = "TYPE_INT64"),
    (e[(e.TYPE_UINT64 = 4)] = "TYPE_UINT64"),
    (e[(e.TYPE_INT32 = 5)] = "TYPE_INT32"),
    (e[(e.TYPE_FIXED64 = 6)] = "TYPE_FIXED64"),
    (e[(e.TYPE_FIXED32 = 7)] = "TYPE_FIXED32"),
    (e[(e.TYPE_BOOL = 8)] = "TYPE_BOOL"),
    (e[(e.TYPE_STRING = 9)] = "TYPE_STRING"),
    (e[(e.TYPE_GROUP = 10)] = "TYPE_GROUP"),
    (e[(e.TYPE_MESSAGE = 11)] = "TYPE_MESSAGE"),
    (e[(e.TYPE_BYTES = 12)] = "TYPE_BYTES"),
    (e[(e.TYPE_UINT32 = 13)] = "TYPE_UINT32"),
    (e[(e.TYPE_ENUM = 14)] = "TYPE_ENUM"),
    (e[(e.TYPE_SFIXED32 = 15)] = "TYPE_SFIXED32"),
    (e[(e.TYPE_SFIXED64 = 16)] = "TYPE_SFIXED64"),
    (e[(e.TYPE_SINT32 = 17)] = "TYPE_SINT32"),
    (e[(e.TYPE_SINT64 = 18)] = "TYPE_SINT64"),
    e
  ))(Kn || {});
  Me.util.setEnumType(Kn, "google.protobuf.Field.Kind", [
    { no: 0, name: "TYPE_UNKNOWN" },
    { no: 1, name: "TYPE_DOUBLE" },
    { no: 2, name: "TYPE_FLOAT" },
    { no: 3, name: "TYPE_INT64" },
    { no: 4, name: "TYPE_UINT64" },
    { no: 5, name: "TYPE_INT32" },
    { no: 6, name: "TYPE_FIXED64" },
    { no: 7, name: "TYPE_FIXED32" },
    { no: 8, name: "TYPE_BOOL" },
    { no: 9, name: "TYPE_STRING" },
    { no: 10, name: "TYPE_GROUP" },
    { no: 11, name: "TYPE_MESSAGE" },
    { no: 12, name: "TYPE_BYTES" },
    { no: 13, name: "TYPE_UINT32" },
    { no: 14, name: "TYPE_ENUM" },
    { no: 15, name: "TYPE_SFIXED32" },
    { no: 16, name: "TYPE_SFIXED64" },
    { no: 17, name: "TYPE_SINT32" },
    { no: 18, name: "TYPE_SINT64" },
  ]);
  var Zn = ((e) => (
    (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
    (e[(e.OPTIONAL = 1)] = "OPTIONAL"),
    (e[(e.REQUIRED = 2)] = "REQUIRED"),
    (e[(e.REPEATED = 3)] = "REPEATED"),
    e
  ))(Zn || {});
  Me.util.setEnumType(Zn, "google.protobuf.Field.Cardinality", [
    { no: 0, name: "CARDINALITY_UNKNOWN" },
    { no: 1, name: "CARDINALITY_OPTIONAL" },
    { no: 2, name: "CARDINALITY_REQUIRED" },
    { no: 3, name: "CARDINALITY_REPEATED" },
  ]);
  const Hn = class e extends g {
    constructor(e) {
      (super(),
        (this.name = ""),
        (this.enumvalue = []),
        (this.options = []),
        (this.syntax = 0),
        (this.edition = ""),
        Me.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((Hn.runtime = Me),
    (Hn.typeName = "google.protobuf.Enum"),
    (Hn.fields = Me.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9 },
      { no: 2, name: "enumvalue", kind: "message", T: Qn, repeated: !0 },
      { no: 3, name: "options", kind: "message", T: tr, repeated: !0 },
      { no: 4, name: "source_context", kind: "message", T: Gn },
      { no: 5, name: "syntax", kind: "enum", T: Me.getEnumType(qn) },
      { no: 6, name: "edition", kind: "scalar", T: 9 },
    ])));
  const zn = class e extends g {
    constructor(e) {
      (super(),
        (this.name = ""),
        (this.number = 0),
        (this.options = []),
        Me.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((zn.runtime = Me),
    (zn.typeName = "google.protobuf.EnumValue"),
    (zn.fields = Me.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9 },
      { no: 2, name: "number", kind: "scalar", T: 5 },
      { no: 3, name: "options", kind: "message", T: tr, repeated: !0 },
    ])));
  let Qn = zn;
  const er = class e extends g {
    constructor(e) {
      (super(), (this.name = ""), Me.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((er.runtime = Me),
    (er.typeName = "google.protobuf.Option"),
    (er.fields = Me.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9 },
      { no: 2, name: "value", kind: "message", T: En },
    ])));
  let tr = er;
  const nr = class e extends g {
    constructor(e) {
      (super(),
        (this.name = ""),
        (this.methods = []),
        (this.options = []),
        (this.version = ""),
        (this.mixins = []),
        (this.syntax = qn.PROTO2),
        Me.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((nr.runtime = Me),
    (nr.typeName = "google.protobuf.Api"),
    (nr.fields = Me.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9 },
      { no: 2, name: "methods", kind: "message", T: or, repeated: !0 },
      { no: 3, name: "options", kind: "message", T: tr, repeated: !0 },
      { no: 4, name: "version", kind: "scalar", T: 9 },
      { no: 5, name: "source_context", kind: "message", T: Gn },
      { no: 6, name: "mixins", kind: "message", T: sr, repeated: !0 },
      { no: 7, name: "syntax", kind: "enum", T: Me.getEnumType(qn) },
    ])));
  const rr = class e extends g {
    constructor(e) {
      (super(),
        (this.name = ""),
        (this.requestTypeUrl = ""),
        (this.requestStreaming = !1),
        (this.responseTypeUrl = ""),
        (this.responseStreaming = !1),
        (this.options = []),
        (this.syntax = qn.PROTO2),
        Me.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((rr.runtime = Me),
    (rr.typeName = "google.protobuf.Method"),
    (rr.fields = Me.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9 },
      { no: 2, name: "request_type_url", kind: "scalar", T: 9 },
      { no: 3, name: "request_streaming", kind: "scalar", T: 8 },
      { no: 4, name: "response_type_url", kind: "scalar", T: 9 },
      { no: 5, name: "response_streaming", kind: "scalar", T: 8 },
      { no: 6, name: "options", kind: "message", T: tr, repeated: !0 },
      { no: 7, name: "syntax", kind: "enum", T: Me.getEnumType(qn) },
    ])));
  let or = rr;
  const ar = class e extends g {
    constructor(e) {
      (super(), (this.name = ""), (this.root = ""), Me.util.initPartial(e, this));
    }
    static fromBinary(t, n) {
      return new e().fromBinary(t, n);
    }
    static fromJson(t, n) {
      return new e().fromJson(t, n);
    }
    static fromJsonString(t, n) {
      return new e().fromJsonString(t, n);
    }
    static equals(t, n) {
      return Me.util.equals(e, t, n);
    }
  };
  ((ar.runtime = Me),
    (ar.typeName = "google.protobuf.Mixin"),
    (ar.fields = Me.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9 },
      { no: 2, name: "root", kind: "scalar", T: 9 },
    ])));
  let sr = ar;
  const ir = Me.makeMessageType("aiserver.v1.ErrorDetails", () => [
      { no: 1, name: "error", kind: "enum", T: Me.getEnumType(lr) },
      { no: 2, name: "details", kind: "message", T: ur },
      { no: 3, name: "is_expected", kind: "scalar", T: 8, opt: !0 },
    ]),
    lr = Me.makeEnum("aiserver.v1.ErrorDetails.Error", [
      { no: 0, name: "ERROR_UNSPECIFIED", localName: "UNSPECIFIED" },
      { no: 1, name: "ERROR_BAD_API_KEY", localName: "BAD_API_KEY" },
      { no: 42, name: "ERROR_BAD_USER_API_KEY", localName: "BAD_USER_API_KEY" },
      { no: 2, name: "ERROR_NOT_LOGGED_IN", localName: "NOT_LOGGED_IN" },
      { no: 3, name: "ERROR_INVALID_AUTH_ID", localName: "INVALID_AUTH_ID" },
      {
        no: 4,
        name: "ERROR_NOT_HIGH_ENOUGH_PERMISSIONS",
        localName: "NOT_HIGH_ENOUGH_PERMISSIONS",
      },
      { no: 18, name: "ERROR_AGENT_REQUIRES_LOGIN", localName: "AGENT_REQUIRES_LOGIN" },
      { no: 5, name: "ERROR_BAD_MODEL_NAME", localName: "BAD_MODEL_NAME" },
      { no: 39, name: "ERROR_NOT_FOUND", localName: "NOT_FOUND" },
      { no: 40, name: "ERROR_DEPRECATED", localName: "DEPRECATED" },
      { no: 6, name: "ERROR_USER_NOT_FOUND", localName: "USER_NOT_FOUND" },
      {
        no: 7,
        name: "ERROR_FREE_USER_RATE_LIMIT_EXCEEDED",
        localName: "FREE_USER_RATE_LIMIT_EXCEEDED",
      },
      {
        no: 8,
        name: "ERROR_PRO_USER_RATE_LIMIT_EXCEEDED",
        localName: "PRO_USER_RATE_LIMIT_EXCEEDED",
      },
      { no: 9, name: "ERROR_FREE_USER_USAGE_LIMIT", localName: "FREE_USER_USAGE_LIMIT" },
      { no: 10, name: "ERROR_PRO_USER_USAGE_LIMIT", localName: "PRO_USER_USAGE_LIMIT" },
      { no: 41, name: "ERROR_RESOURCE_EXHAUSTED", localName: "RESOURCE_EXHAUSTED" },
      { no: 11, name: "ERROR_AUTH_TOKEN_NOT_FOUND", localName: "AUTH_TOKEN_NOT_FOUND" },
      { no: 12, name: "ERROR_AUTH_TOKEN_EXPIRED", localName: "AUTH_TOKEN_EXPIRED" },
      { no: 13, name: "ERROR_OPENAI", localName: "OPENAI" },
      { no: 14, name: "ERROR_OPENAI_RATE_LIMIT_EXCEEDED", localName: "OPENAI_RATE_LIMIT_EXCEEDED" },
      { no: 20, name: "ERROR_MAX_TOKENS", localName: "MAX_TOKENS" },
      { no: 23, name: "ERROR_PRO_USER_ONLY", localName: "PRO_USER_ONLY" },
      { no: 21, name: "ERROR_USER_ABORTED_REQUEST", localName: "USER_ABORTED_REQUEST" },
      { no: 25, name: "ERROR_TIMEOUT", localName: "TIMEOUT" },
      {
        no: 22,
        name: "ERROR_GENERIC_RATE_LIMIT_EXCEEDED",
        localName: "GENERIC_RATE_LIMIT_EXCEEDED",
      },
      {
        no: 28,
        name: "ERROR_GPT_4_VISION_PREVIEW_RATE_LIMIT",
        localName: "GPT_4_VISION_PREVIEW_RATE_LIMIT",
      },
      { no: 29, name: "ERROR_CUSTOM_MESSAGE", localName: "CUSTOM_MESSAGE" },
      { no: 30, name: "ERROR_OUTDATED_CLIENT", localName: "OUTDATED_CLIENT" },
      { no: 31, name: "ERROR_CLAUDE_IMAGE_TOO_LARGE", localName: "CLAUDE_IMAGE_TOO_LARGE" },
      { no: 33, name: "ERROR_FILE_NOT_FOUND", localName: "FILE_NOT_FOUND" },
      { no: 34, name: "ERROR_API_KEY_RATE_LIMIT", localName: "API_KEY_RATE_LIMIT" },
      { no: 35, name: "ERROR_DEBOUNCED", localName: "DEBOUNCED" },
      { no: 36, name: "ERROR_BAD_REQUEST", localName: "BAD_REQUEST" },
      {
        no: 37,
        name: "ERROR_REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED",
        localName: "REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED",
      },
      { no: 38, name: "ERROR_UNAUTHORIZED", localName: "UNAUTHORIZED" },
      { no: 43, name: "ERROR_CONVERSATION_TOO_LONG", localName: "CONVERSATION_TOO_LONG" },
      { no: 44, name: "ERROR_USAGE_PRICING_REQUIRED", localName: "USAGE_PRICING_REQUIRED" },
      {
        no: 45,
        name: "ERROR_USAGE_PRICING_REQUIRED_CHANGEABLE",
        localName: "USAGE_PRICING_REQUIRED_CHANGEABLE",
      },
      { no: 46, name: "ERROR_GITHUB_NO_USER_CREDENTIALS", localName: "GITHUB_NO_USER_CREDENTIALS" },
      { no: 47, name: "ERROR_GITHUB_USER_NO_ACCESS", localName: "GITHUB_USER_NO_ACCESS" },
      { no: 48, name: "ERROR_GITHUB_APP_NO_ACCESS", localName: "GITHUB_APP_NO_ACCESS" },
      { no: 49, name: "ERROR_GITHUB_MULTIPLE_OWNERS", localName: "GITHUB_MULTIPLE_OWNERS" },
      { no: 50, name: "ERROR_RATE_LIMITED", localName: "RATE_LIMITED" },
      { no: 51, name: "ERROR_RATE_LIMITED_CHANGEABLE", localName: "RATE_LIMITED_CHANGEABLE" },
      { no: 52, name: "ERROR_CUSTOM", localName: "CUSTOM" },
      { no: 53, name: "ERROR_HOOKS_BLOCKED", localName: "HOOKS_BLOCKED" },
      { no: 54, name: "ERROR_SUSPICIOUS_USAGE_BLOCKED", localName: "SUSPICIOUS_USAGE_BLOCKED" },
      { no: 55, name: "ERROR_EXTENSION_HOST_TIMEOUT", localName: "EXTENSION_HOST_TIMEOUT" },
      { no: 56, name: "ERROR_NETWORK_ERROR", localName: "NETWORK_ERROR" },
      { no: 57, name: "ERROR_PROVIDER_ERROR", localName: "PROVIDER_ERROR" },
      { no: 58, name: "ERROR_MODEL_BLOCKED", localName: "MODEL_BLOCKED" },
      { no: 59, name: "ERROR_INTERNAL", localName: "INTERNAL" },
      { no: 60, name: "ERROR_MAX_MODE_REQUIRED", localName: "MAX_MODE_REQUIRED" },
      { no: 61, name: "ERROR_MODEL_NO_LONGER_SUPPORTED", localName: "MODEL_NO_LONGER_SUPPORTED" },
      { no: 62, name: "ERROR_PRICING_WARNING", localName: "PRICING_WARNING" },
      { no: 63, name: "ERROR_SLOW_POOL", localName: "SLOW_POOL" },
      { no: 64, name: "ERROR_UNSUPPORTED_REGION", localName: "UNSUPPORTED_REGION" },
      { no: 65, name: "ERROR_ACCOUNT_CLOSED", localName: "ACCOUNT_CLOSED" },
      {
        no: 66,
        name: "ERROR_TENANT_RESTRICTION_VIOLATION",
        localName: "TENANT_RESTRICTION_VIOLATION",
      },
    ]),
    ur = Me.makeMessageType("aiserver.v1.CustomErrorDetails", () => [
      { no: 1, name: "title", kind: "scalar", T: 9 },
      { no: 2, name: "detail", kind: "scalar", T: 9 },
      {
        no: 3,
        name: "allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown",
        kind: "scalar",
        T: 8,
        opt: !0,
      },
      { no: 4, name: "is_retryable", kind: "scalar", T: 8, opt: !0 },
      { no: 5, name: "show_request_id", kind: "scalar", T: 8, opt: !0 },
      { no: 6, name: "should_show_immediate_error", kind: "scalar", T: 8, opt: !0 },
      { no: 8, name: "buttons", kind: "message", T: pr, repeated: !0 },
      { no: 7, name: "additional_info", kind: "map", K: 9, V: { kind: "scalar", T: 9 } },
      { no: 9, name: "plan_choices", kind: "message", T: mr, repeated: !0 },
      { no: 10, name: "analytics_metadata", kind: "message", T: cr, opt: !0 },
    ]),
    cr = Me.makeMessageType("aiserver.v1.ErrorAnalyticsMetadata", () => [
      { no: 1, name: "action_required", kind: "scalar", T: 9, opt: !0 },
    ]),
    mr = Me.makeMessageType("aiserver.v1.PlanChoice", () => [
      { no: 1, name: "label", kind: "scalar", T: 9 },
      { no: 2, name: "sublabel", kind: "scalar", T: 9, opt: !0 },
      { no: 3, name: "description", kind: "scalar", T: 9, opt: !0 },
      { no: 4, name: "value", kind: "scalar", T: 9 },
    ]),
    pr = Me.makeMessageType("aiserver.v1.ErrorButton", () => [
      { no: 1, name: "label", kind: "scalar", T: 9 },
      { no: 2, name: "upgrade", kind: "message", T: Er, oneof: "action" },
      { no: 3, name: "switch_model", kind: "message", T: yr, oneof: "action" },
      { no: 4, name: "configure_spend_limit", kind: "message", T: Nr, oneof: "action" },
      { no: 5, name: "url", kind: "message", T: _r, oneof: "action" },
      { no: 6, name: "upgrade_choice", kind: "message", T: gr, oneof: "action" },
      { no: 7, name: "dashboard_action", kind: "message", T: Tr, oneof: "action" },
      { no: 8, name: "reload_window", kind: "message", T: fr, oneof: "action" },
      { no: 9, name: "client_action", kind: "message", T: dr, oneof: "action" },
    ]),
    dr = Me.makeMessageType("aiserver.v1.ClientAction", () => [
      { no: 1, name: "command_id", kind: "scalar", T: 9 },
      { no: 2, name: "args", kind: "map", K: 9, V: { kind: "scalar", T: 9 } },
    ]),
    fr = Me.makeMessageType("aiserver.v1.ReloadWindowAction", []),
    Tr = Me.makeMessageType("aiserver.v1.DashboardAction", () => [
      { no: 1, name: "action", kind: "scalar", T: 9 },
      { no: 2, name: "args", kind: "map", K: 9, V: { kind: "scalar", T: 9 } },
      { no: 3, name: "success_message", kind: "scalar", T: 9, opt: !0 },
    ]),
    gr = Me.makeMessageType("aiserver.v1.UpgradeChoice", []),
    Er = Me.makeMessageType("aiserver.v1.UpgradeAction", () => [
      { no: 1, name: "membership_to_upgrade_to", kind: "scalar", T: 9 },
      { no: 2, name: "try_immediate_upgrade", kind: "scalar", T: 8, opt: !0 },
      { no: 3, name: "allow_trial", kind: "scalar", T: 8, opt: !0 },
      { no: 4, name: "dashboard_action", kind: "message", T: Tr, opt: !0 },
    ]),
    yr = Me.makeMessageType("aiserver.v1.SwitchModelAction", () => [
      { no: 1, name: "suggested_model", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "parameters", kind: "message", T: hr, repeated: !0 },
      { no: 3, name: "max_mode", kind: "scalar", T: 8, opt: !0 },
    ]),
    hr = Me.makeMessageType(
      "aiserver.v1.SwitchModelAction.ModelParameterValue",
      () => [
        { no: 1, name: "id", kind: "scalar", T: 9 },
        { no: 2, name: "value", kind: "scalar", T: 9 },
      ],
      { localName: "SwitchModelAction_ModelParameterValue" },
    ),
    Nr = Me.makeMessageType("aiserver.v1.ConfigureSpendLimitAction", () => [
      { no: 1, name: "confirm_label", kind: "scalar", T: 9 },
    ]),
    _r = Me.makeMessageType("aiserver.v1.UrlAction", () => [
      { no: 1, name: "url", kind: "scalar", T: 9 },
    ]),
    Ir = Me.makeMessageType("aiserver.v1.GetCursorServerUrlResponse", () => [
      { no: 1, name: "host", kind: "scalar", T: 9 },
      { no: 2, name: "port", kind: "scalar", T: 5 },
      { no: 3, name: "connection_token", kind: "scalar", T: 9 },
      { no: 4, name: "headers", kind: "message", T: Sr, repeated: !0 },
      { no: 5, name: "upgrade_path", kind: "scalar", T: 9 },
    ]),
    Sr = Me.makeMessageType(
      "aiserver.v1.GetCursorServerUrlResponse.Header",
      () => [
        { no: 1, name: "key", kind: "scalar", T: 9 },
        { no: 2, name: "value", kind: "scalar", T: 9 },
      ],
      { localName: "GetCursorServerUrlResponse_Header" },
    );
  function wr(e) {
    return void 0 !== e.upgradePath && "" !== e.upgradePath;
  }
  var Or;
  function br(e) {
    const t = Or[e];
    return "string" != typeof t
      ? e.toString()
      : t[0].toLowerCase() + t.substring(1).replace(/[A-Z]/g, (e) => "_" + e.toLowerCase());
  }
  !(function (e) {
    ((e[(e.Canceled = 1)] = "Canceled"),
      (e[(e.Unknown = 2)] = "Unknown"),
      (e[(e.InvalidArgument = 3)] = "InvalidArgument"),
      (e[(e.DeadlineExceeded = 4)] = "DeadlineExceeded"),
      (e[(e.NotFound = 5)] = "NotFound"),
      (e[(e.AlreadyExists = 6)] = "AlreadyExists"),
      (e[(e.PermissionDenied = 7)] = "PermissionDenied"),
      (e[(e.ResourceExhausted = 8)] = "ResourceExhausted"),
      (e[(e.FailedPrecondition = 9)] = "FailedPrecondition"),
      (e[(e.Aborted = 10)] = "Aborted"),
      (e[(e.OutOfRange = 11)] = "OutOfRange"),
      (e[(e.Unimplemented = 12)] = "Unimplemented"),
      (e[(e.Internal = 13)] = "Internal"),
      (e[(e.Unavailable = 14)] = "Unavailable"),
      (e[(e.DataLoss = 15)] = "DataLoss"),
      (e[(e.Unauthenticated = 16)] = "Unauthenticated"));
  })(Or || (Or = {}));
  class kr extends Error {
    constructor(e, t = Or.Unknown, n, r, o) {
      (super(
        (function (e, t) {
          return e.length ? `[${br(t)}] ${e}` : `[${br(t)}]`;
        })(e, t),
      ),
        (this.name = "ConnectError"),
        Object.setPrototypeOf(this, new.target.prototype),
        (this.rawMessage = e),
        (this.code = t),
        (this.metadata = new Headers(null != n ? n : {})),
        (this.details = null != r ? r : []),
        (this.cause = o));
    }
    static from(e, t = Or.Unknown) {
      return e instanceof kr
        ? e
        : e instanceof Error
          ? "AbortError" == e.name
            ? new kr(e.message, Or.Canceled)
            : new kr(e.message, t, void 0, void 0, e)
          : new kr(String(e), t, void 0, void 0, e);
    }
    static [Symbol.hasInstance](e) {
      return (
        e instanceof Error &&
        (Object.getPrototypeOf(e) === kr.prototype ||
          ("ConnectError" === e.name &&
            "code" in e &&
            "number" == typeof e.code &&
            "metadata" in e &&
            "details" in e &&
            Array.isArray(e.details) &&
            "rawMessage" in e &&
            "string" == typeof e.rawMessage &&
            "cause" in e))
      );
    }
    findDetails(e) {
      const t = "typeName" in e ? { findMessage: (t) => (t === e.typeName ? e : void 0) } : e,
        n = [];
      for (const e of this.details) {
        if ("getType" in e) {
          t.findMessage(e.getType().typeName) && n.push(e);
          continue;
        }
        const r = t.findMessage(e.type);
        if (r)
          try {
            n.push(r.fromBinary(e.value));
          } catch (e) {}
      }
      return n;
    }
  }
  const vr = [0, 5e3, 5e3, 1e4, 1e4, 1e4, 3e4, 3e4, 6e4],
    Pr = 18e4,
    Fr = 63e4;
  function Dr(e) {
    return vr[Math.min(e, vr.length - 1)];
  }
  function Rr(e, t = 0) {
    const n = Jr(e);
    return void 0 !== n && t < n;
  }
  function Jr(e) {
    const t = Ur(e);
    if (void 0 !== t)
      return (function (e) {
        switch (e) {
          case "NO_POD_INFO_YET":
            return 1e4;
          case "NO_VM_CONNECTION_INFO_YET":
            return 3e4;
          case "EXEC_DAEMON_NOT_READY":
          case "POD_REPLACEMENT_IN_PROGRESS":
          case "WORKER_OFFLINE":
            return Pr;
          case "POD_MIGRATING":
            return Fr;
          default:
            return;
        }
      })(t);
    const n = Br(e);
    return n === Or.DeadlineExceeded || n === Or.Unavailable ? Pr : void 0;
  }
  function Ur(e) {
    const t = e instanceof kr ? e.findDetails(ir)[0] : void 0,
      n = t?.details?.additionalInfo?.cursorServerUrlRetryReason;
    if (void 0 !== n && "" !== n) return n;
    const r = t?.details?.additionalInfo?.cursorServerUrlReason;
    if (void 0 !== r && "" !== r) return r;
    const o = e instanceof Error ? e.message : void 0,
      a = o ? /cursorServerUrlRetryReason=([A-Z_]+)/.exec(o) : null;
    if (a?.[1]) return a[1];
    const s = o ? /cursorServerUrlReason=([A-Z_]+)/.exec(o) : null;
    return s?.[1];
  }
  const Ar = new Set(["WORKER_UPDATE_REQUIRED"]);
  async function Lr(e) {
    await new Promise((t) => setTimeout(t, e));
  }
  function Br(e) {
    if (e instanceof kr) return e.code;
    if ("object" == typeof e && null !== e && "code" in e) {
      const t = e.code;
      if ("number" == typeof t)
        return (function (e) {
          switch (e) {
            case Or.InvalidArgument:
              return Or.InvalidArgument;
            case Or.DeadlineExceeded:
              return Or.DeadlineExceeded;
            case Or.Unavailable:
              return Or.Unavailable;
            case Or.Internal:
              return Or.Internal;
            case Or.Unknown:
              return Or.Unknown;
            case Or.NotFound:
              return Or.NotFound;
            default:
              return;
          }
        })(t);
    }
    if (!(e instanceof Error)) return;
    const t = /^\[([a-z_]+)\](?:\s|$)/.exec(e.message);
    if (t) return Mr(t[1]);
    const n =
      "string" == typeof e.stack
        ? /(?:^|\n)\s*ConnectError:\s*\[([a-z_]+)\](?:\s|$)/.exec(e.stack)
        : null;
    return n ? Mr(n[1]) : void 0;
  }
  function Mr(e) {
    switch (e) {
      case "invalid_argument":
        return Or.InvalidArgument;
      case "deadline_exceeded":
        return Or.DeadlineExceeded;
      case "unavailable":
        return Or.Unavailable;
      case "internal":
        return Or.Internal;
      case "unknown":
        return Or.Unknown;
      case "not_found":
        return Or.NotFound;
      default:
        return;
    }
  }
  function xr(e) {
    return e instanceof Error && "CursorSocketTransient" === e.code
      ? o.RemoteAuthorityResolverError.TemporarilyNotAvailable(e.message)
      : e;
  }
  function Yr(e) {
    if (
      (function (e) {
        return Br(e) === Or.NotFound;
      })(e)
    )
      return o.RemoteAuthorityResolverError.NotAvailable(
        "This cloud agent's environment is no longer available.",
      );
    const t = (function (e) {
      const t = Ur(e);
      if (void 0 === t || !Ar.has(t)) return;
      const n = e instanceof kr ? e.findDetails(ir)[0]?.details?.detail : void 0;
      if (void 0 !== n && "" !== n) return n;
      const r = (e instanceof Error ? e.message : String(e))
        .replace(/^\[[a-z_]+\]\s*/, "")
        .replace(/\s*\(cursorServerUrlReason=[A-Z_]+\)\s*$/, "")
        .trim();
      return "" !== r
        ? r
        : "This cloud agent's workspace is unavailable on its self-hosted worker.";
    })(e);
    return void 0 !== t ? o.RemoteAuthorityResolverError.NotAvailable(t) : e;
  }
  function Cr(e) {
    if (
      !(function (e) {
        const t = Br(e);
        return (
          t === Or.Internal || t === Or.Unknown || t === Or.DeadlineExceeded || t === Or.Unavailable
        );
      })(e)
    )
      return e;
    const t = e instanceof Error ? e.message : String(e);
    return o.RemoteAuthorityResolverError.TemporarilyNotAvailable(t);
  }
  let jr;
  function Vr(...e) {
    const t = e.map(String).join(" ");
    (console.log(`[cursor-resolver]  ${t}`), jr?.appendLine(`[INFO]  ${t}`));
  }
  function Gr(...e) {
    const t = e.map(String).join(" ");
    jr?.appendLine(`[ERROR] ${t}`);
  }
  class qr {
    constructor(e, t) {
      ((this.connectionTokenProvider = e),
        (this.staleCursorServerUrlBcIds = new Set()),
        (this.alwaysShowPortsView = !0),
        (function (e) {
          jr = e;
        })(t),
        Vr("RemoteAuthorityResolver constructor"));
    }
    createManagedResolvedAuthority(e, t, n) {
      return Object.assign(new o.ManagedResolvedAuthority(e, t, n), {
        skipCreateInspectTunnel: !0,
        isTrusted: !0,
      });
    }
    async showCandidatePort(e, t, n) {
      return (
        !(function (e) {
          return (
            !!(function (e) {
              return e >= 26e3 && e <= 26999;
            })(e) ||
            (e >= 5870 && e <= 5890) ||
            2375 === e ||
            5901 === e ||
            50052 === e
          );
        })(t) || (Vr(`Filtering out reserved/internal port ${t} from candidates`), !1)
      );
    }
    async fetchCursorServerUrl({ bcId: e, commit: t, initialUseCache: n, progress: r }) {
      return (async function ({
        getCursorServerUrl: e,
        initialUseCache: t,
        sleep: n = Lr,
        onRetry: r,
      }) {
        let o = t;
        const a = Date.now();
        for (let t = 0; ; t++)
          try {
            return await e(o);
          } catch (e) {
            const s = Date.now() - a;
            if (!Rr(e, s)) throw e;
            const i = Jr(e),
              l = void 0 !== i ? i - s : 0,
              u = Math.min(Dr(t), Math.max(0, l));
            (r?.(e, t + 1, u), u > 0 && (await n(u)), (o = !1));
          }
      })({
        initialUseCache: n,
        getCursorServerUrl: (n) =>
          Xr("getCursorServerUrl", async () => {
            try {
              return await this.connectionTokenProvider.getOrCreateCursorServerUrl(e, t, n);
            } catch (e) {
              throw (Gr("Error getting cursor server url", e), e);
            }
          }),
        onRetry: (e, t, n) => {
          const o = (function (e) {
            if ("POD_MIGRATING" !== Ur(e)) return;
            const t = e instanceof kr ? e.findDetails(ir)[0]?.details?.detail.trim() : void 0;
            if (t) return t;
            const n = e instanceof kr ? e.rawMessage : e instanceof Error ? e.message : void 0,
              r = n?.replace(/\s*(?:\(cursorServerUrl(?:Retry)?Reason=[A-Z_]+\)\s*)+$/, "").trim();
            return r || void 0;
          })(e);
          void 0 !== o && r?.report({ kind: "retrying", phase: "connect", attempt: t, detail: o });
          Vr(
            "Error getting cursor server url,",
            n > 0 ? `retrying in ${n / 1e3}s` : "retrying immediately",
            `attempt=${t}`,
            e,
          );
        },
      });
    }
    async resolve(e, t, n) {
      return Xr("resolve", async () => {
        (Vr("resolve", e, `resolveAttempt=${t.resolveAttempt}`), n?.report({ phase: "init" }));
        const r = (function (e, t) {
          const n = e.indexOf("+"),
            r = e.substring(n + 1).trim();
          if (-1 === n || 0 === r.length) throw new Error("No bcId found in authority");
          if (!r.startsWith("{")) return { kind: "bcId", bcId: r };
          if (!t.allowInlineJson) throw new Error("Inline remote authority is not supported");
          let o;
          try {
            o = Ir.fromJsonString(r, { ignoreUnknownFields: !0 });
          } catch {
            throw new Error("Invalid url found in authority");
          }
          if (
            0 === o.host.trim().length ||
            !Number.isInteger(o.port) ||
            o.port < 1 ||
            o.port > 65535
          )
            throw new Error("Invalid url found in authority");
          return { kind: "inlineUrl", url: (0, a.toPlainMessage)(o) };
        })(e, { allowInlineJson: ((s = o.env.uriScheme), "cursor-dev" === s) });
        var s;
        if ("inlineUrl" === r.kind) {
          const e = r.url;
          Vr("resolved url (inline)", e.host, e.port);
          const t = async () => {
              try {
                return await Wr(e);
              } catch (e) {
                throw xr(e);
              }
            },
            n = o.cursor.createSocketConsumerTunnelFactory({
              makeConnection: t,
              connectionToken: e.connectionToken,
            });
          return this.createManagedResolvedAuthority(t, e.connectionToken, n);
        }
        const i = r.bcId;
        n?.report({ phase: "auth" });
        const l = (function () {
            const e = o.cursor.productCommit ?? o.cursor.cursorServerCommit;
            if (!e || !/^[a-zA-Z0-9\-_.]+$/.test(e))
              throw (
                Gr("Invalid or missing product commit", e),
                new Error("Invalid or missing product commit")
              );
            return e;
          })(),
          { connectionToken: u } = await this.connectionTokenProvider.getOrCreateConnectionToken(
            i,
            l,
          );
        n?.report({ phase: "get-url" });
        const c = !this.staleCursorServerUrlBcIds.delete(i);
        let m;
        try {
          m = await this.fetchCursorServerUrl({
            bcId: i,
            commit: l,
            initialUseCache: c,
            progress: n,
          });
        } catch (e) {
          throw Cr(Yr(e));
        }
        Vr("resolved url", m.host, m.port, `useCachedUrl=${c}`);
        const p =
          (d = { returnedToken: m.connectionToken, mintedToken: u }).returnedToken || d.mintedToken;
        var d;
        const f = () => {
            this.staleCursorServerUrlBcIds.has(i) ||
              (Vr("marking cursor server url suspect, next resolve fetches fresh", i),
              this.staleCursorServerUrlBcIds.add(i));
          },
          T =
            ((E = async () => {
              try {
                return await this.fetchCursorServerUrl({
                  bcId: i,
                  commit: l,
                  initialUseCache: !this.staleCursorServerUrlBcIds.delete(i),
                  progress: n,
                });
              } catch (e) {
                throw Cr(Yr(e));
              }
            }),
            wr((g = m)) ? E : async () => g);
        var g, E;
        const y = async () => {
            n?.report({ phase: "socket" });
            const e = await T();
            try {
              return await Wr(e, f);
            } catch (e) {
              throw (f(), xr(e));
            }
          },
          h = o.cursor.createSocketConsumerTunnelFactory({ makeConnection: y, connectionToken: p });
        return this.createManagedResolvedAuthority(y, p, h);
      });
    }
  }
  const $r = 1e4;
  async function Wr(e, t) {
    const n = 443 === e.port || wr(e),
      r = await o.cursor.createTcpConnection({
        host: e.host,
        port: e.port,
        tls: n ? { rejectUnauthorized: !0, servername: e.host } : void 0,
      });
    Vr("tcp connection established", `${e.host}:${e.port}`, n ? "(tls)" : "(plain)");
    const a = new o.EventEmitter(),
      s = new o.EventEmitter(),
      i = new o.EventEmitter(),
      l = Date.now();
    let u = !1;
    return (
      r.onDidReceiveData((e) => a.fire(e)),
      r.onDidClose((e) => {
        const n = Date.now() - l < $r;
        (u || (void 0 === e && !n) || t?.(), s.fire(e), i.fire());
      }),
      {
        onDidReceiveMessage: a.event,
        onDidClose: s.event,
        onDidEnd: i.event,
        send: (e) => {
          r.send(e);
        },
        end: () => {
          ((u = !0), r.close());
        },
        connectionOptions: {
          headers: [`Host: ${e.host}:${e.port}`, ...e.headers.map((e) => `${e.key}: ${e.value}`)],
          doNotIncludeWsLocalhostPrefix: !0,
          ...(wr(e) ? { path: e.upgradePath } : {}),
        },
      }
    );
  }
  async function Xr(e, t) {
    const n = performance.now();
    try {
      return await t();
    } finally {
      !(function (e, t) {
        try {
          o.cursor.metricsDistribution({ stat: `background-composer.${e}`, value: t, tags: {} });
        } catch {}
      })(e, performance.now() - n);
    }
  }
  function Kr(e) {
    const t = o.window.createOutputChannel("Cursor Resolver");
    e.subscriptions.push(t);
    const n = "undefined" != typeof process && !!process.versions?.node;
    t.appendLine(`[cursor-resolver] Running in ${n ? "Node.js" : "web-worker"} extension host`);
    const r = new qr(o.cursor.connectionTokenProvider, t);
    e.subscriptions.push(o.workspace.registerRemoteAuthorityResolver("background-composer", r));
  }
  function Zr() {}
  var Hr = exports;
  for (var zr in r) Hr[zr] = r[zr];
  r.__esModule && Object.defineProperty(Hr, "__esModule", { value: !0 });
})();
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-resolver/dist/main.js.map
