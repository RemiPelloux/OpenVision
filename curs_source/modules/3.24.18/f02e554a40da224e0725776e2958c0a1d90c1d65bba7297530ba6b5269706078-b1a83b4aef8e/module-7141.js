"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.writeMapEntry = exports.makeBinaryFormat = void 0;
const n = require("./module-8831.js"), s = require("./module-2212.js"), i = require("./module-1455.js"), o = require("./module-3098.js"), a = require("./module-8803.js"), u = require("./module-3408.js"), c = require("./module-2706.js"), l = Symbol("@bufbuild/protobuf/unknown-fields"), m = {
    readUnknownFields: !0,
    readerFactory: (t)=>new n.BinaryReader(t)
}, d = {
    writeUnknownFields: !0,
    writerFactory: ()=>new n.BinaryWriter
};
function f(t) {
    return t ? Object.assign(Object.assign({}, m), t) : m;
}
function p(t) {
    return t ? Object.assign(Object.assign({}, d), t) : d;
}
function h(t, e, r, s, o) {
    let { repeated: a, localName: l } = r;
    switch(r.oneof && ((t = t[r.oneof.localName]).case != l && delete t.value, t.case = l, l = "value"), r.kind){
        case "scalar":
        case "enum":
            const m = "enum" == r.kind ? u.ScalarType.INT32 : r.T;
            let d = _;
            if ("scalar" == r.kind && r.L > 0 && (d = A), a) {
                let r = t[l];
                if (s == n.WireType.LengthDelimited && m != u.ScalarType.STRING && m != u.ScalarType.BYTES) {
                    let t = e.uint32() + e.pos;
                    for(; e.pos < t;)r.push(d(e, m));
                } else r.push(d(e, m));
            } else t[l] = d(e, m);
            break;
        case "message":
            const f = r.T;
            a ? t[l].push(g(e, new f, o, r)) : (0, c.isMessage)(t[l]) ? g(e, t[l], o, r) : (t[l] = g(e, new f, o, r), !f.fieldWrapper || r.oneof || r.repeated || (t[l] = f.fieldWrapper.unwrapField(t[l])));
            break;
        case "map":
            let [p, h] = function(t, e, r) {
                const n = e.uint32(), s = e.pos + n;
                let o, a;
                for(; e.pos < s;){
                    const [n] = e.tag();
                    switch(n){
                        case 1:
                            o = _(e, t.K);
                            break;
                        case 2:
                            switch(t.V.kind){
                                case "scalar":
                                    a = _(e, t.V.T);
                                    break;
                                case "enum":
                                    a = e.int32();
                                    break;
                                case "message":
                                    a = g(e, new t.V.T, r, void 0);
                            }
                    }
                }
                void 0 === o && (o = (0, i.scalarZeroValue)(t.K, u.LongType.BIGINT));
                "string" != typeof o && "number" != typeof o && (o = o.toString());
                if (void 0 === a) switch(t.V.kind){
                    case "scalar":
                        a = (0, i.scalarZeroValue)(t.V.T, u.LongType.BIGINT);
                        break;
                    case "enum":
                        a = t.V.T.values[0].no;
                        break;
                    case "message":
                        a = new t.V.T;
                }
                return [
                    o,
                    a
                ];
            }(r, e, o);
            t[l][p] = h;
    }
}
function g(t, e, r, n) {
    const s = e.getType().runtime.bin, i = null == n ? void 0 : n.delimited;
    return s.readMessage(e, t, i ? n.no : t.uint32(), r, i), e;
}
function A(t, e) {
    const r = _(t, e);
    return "bigint" == typeof r ? r.toString() : r;
}
function _(t, e) {
    switch(e){
        case u.ScalarType.STRING:
            return t.string();
        case u.ScalarType.BOOL:
            return t.bool();
        case u.ScalarType.DOUBLE:
            return t.double();
        case u.ScalarType.FLOAT:
            return t.float();
        case u.ScalarType.INT32:
            return t.int32();
        case u.ScalarType.INT64:
            return t.int64();
        case u.ScalarType.UINT64:
            return t.uint64();
        case u.ScalarType.FIXED64:
            return t.fixed64();
        case u.ScalarType.BYTES:
            return t.bytes();
        case u.ScalarType.FIXED32:
            return t.fixed32();
        case u.ScalarType.SFIXED32:
            return t.sfixed32();
        case u.ScalarType.SFIXED64:
            return t.sfixed64();
        case u.ScalarType.SINT64:
            return t.sint64();
        case u.ScalarType.UINT32:
            return t.uint32();
        case u.ScalarType.SINT32:
            return t.sint32();
    }
}
function y(t, e, r, s) {
    (0, o.assert)(void 0 !== e);
    const i = t.repeated;
    switch(t.kind){
        case "scalar":
        case "enum":
            let a = "enum" == t.kind ? u.ScalarType.INT32 : t.T;
            if (i) if ((0, o.assert)(Array.isArray(e)), t.packed) !function(t, e, r, s) {
                if (!s.length) return;
                t.tag(r, n.WireType.LengthDelimited).fork();
                let [, i] = B(e);
                for(let e = 0; e < s.length; e++)t[i](s[e]);
                t.join();
            }(r, a, t.no, e);
            else for (const n of e)J(r, a, t.no, n);
            else J(r, a, t.no, e);
            break;
        case "message":
            if (i) {
                (0, o.assert)(Array.isArray(e));
                for (const n of e)S(r, s, t, n);
            } else S(r, s, t, e);
            break;
        case "map":
            (0, o.assert)("object" == typeof e && null != e);
            for (const [n, i] of Object.entries(e))w(r, s, t, n, i);
    }
}
function w(t, e, r, s, i) {
    t.tag(r.no, n.WireType.LengthDelimited), t.fork();
    let a = s;
    switch(r.K){
        case u.ScalarType.INT32:
        case u.ScalarType.FIXED32:
        case u.ScalarType.UINT32:
        case u.ScalarType.SFIXED32:
        case u.ScalarType.SINT32:
            a = Number.parseInt(s);
            break;
        case u.ScalarType.BOOL:
            (0, o.assert)("true" == s || "false" == s), a = "true" == s;
    }
    switch(J(t, r.K, 1, a), r.V.kind){
        case "scalar":
            J(t, r.V.T, 2, i);
            break;
        case "enum":
            J(t, u.ScalarType.INT32, 2, i);
            break;
        case "message":
            (0, o.assert)(void 0 !== i), t.tag(2, n.WireType.LengthDelimited).bytes(i.toBinary(e));
    }
    t.join();
}
function S(t, e, r, i) {
    const o = (0, s.wrapField)(r.T, i);
    r.delimited ? t.tag(r.no, n.WireType.StartGroup).raw(o.toBinary(e)).tag(r.no, n.WireType.EndGroup) : t.tag(r.no, n.WireType.LengthDelimited).bytes(o.toBinary(e));
}
function J(t, e, r, n) {
    (0, o.assert)(void 0 !== n);
    let [s, i] = B(e);
    t.tag(r, s)[i](n);
}
function B(t) {
    let e = n.WireType.Varint;
    switch(t){
        case u.ScalarType.BYTES:
        case u.ScalarType.STRING:
            e = n.WireType.LengthDelimited;
            break;
        case u.ScalarType.DOUBLE:
        case u.ScalarType.FIXED64:
        case u.ScalarType.SFIXED64:
            e = n.WireType.Bit64;
            break;
        case u.ScalarType.FIXED32:
        case u.ScalarType.SFIXED32:
        case u.ScalarType.FLOAT:
            e = n.WireType.Bit32;
    }
    return [
        e,
        u.ScalarType[t].toLowerCase()
    ];
}
exports.makeBinaryFormat = function() {
    return {
        makeReadOptions: f,
        makeWriteOptions: p,
        listUnknownFields (t) {
            var e;
            return null !== (e = t[l]) && void 0 !== e ? e : [];
        },
        discardUnknownFields (t) {
            delete t[l];
        },
        writeUnknownFields (t, e) {
            const r = t[l];
            if (r) for (const t of r)e.tag(t.no, t.wireType).raw(t.data);
        },
        onUnknownField (t, e, r, n) {
            const s = t;
            Array.isArray(s[l]) || (s[l] = []), s[l].push({
                no: e,
                wireType: r,
                data: n
            });
        },
        readMessage (t, e, r, s, i) {
            const o = t.getType(), a = i ? e.len : e.pos + r;
            let u, c;
            for(; e.pos < a && ([u, c] = e.tag(), !0 !== i || c != n.WireType.EndGroup);){
                const r = o.fields.find(u);
                if (!r) {
                    const r = e.skip(c, u);
                    s.readUnknownFields && this.onUnknownField(t, u, c, r);
                    continue;
                }
                h(t, e, r, c, s);
            }
            if (i && (c != n.WireType.EndGroup || u !== r)) throw new Error("invalid end group tag");
        },
        readField: h,
        writeMessage (t, e, r) {
            const n = t.getType();
            for (const s of n.fields.byNumber()){
                if (!(0, a.isFieldSet)(s, t)) {
                    if (s.req) throw new Error(`cannot encode field ${n.typeName}.${s.name} to binary: required field not set`);
                    continue;
                }
                y(s, s.oneof ? t[s.oneof.localName].value : t[s.localName], e, r);
            }
            return r.writeUnknownFields && this.writeUnknownFields(t, e), e;
        },
        writeField (t, e, r, n) {
            void 0 !== e && y(t, e, r, n);
        }
    };
}, exports.writeMapEntry = w;
