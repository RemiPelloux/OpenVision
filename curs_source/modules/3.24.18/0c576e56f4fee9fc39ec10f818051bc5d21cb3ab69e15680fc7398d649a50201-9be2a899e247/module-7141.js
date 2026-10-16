"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.writeMapEntry = exports.makeBinaryFormat = void 0;
const n = require("./module-8831.js"), o = require("./module-2212.js"), s = require("./module-3836.js"), i = require("./module-3098.js"), a = require("./module-8803.js"), c = require("./module-3408.js"), u = require("./module-2706.js"), l = Symbol("@bufbuild/protobuf/unknown-fields"), d = {
    readUnknownFields: !0,
    readerFactory: (e)=>new n.BinaryReader(e)
}, p = {
    writeUnknownFields: !0,
    writerFactory: ()=>new n.BinaryWriter
};
function f(e) {
    return e ? Object.assign(Object.assign({}, d), e) : d;
}
function h(e) {
    return e ? Object.assign(Object.assign({}, p), e) : p;
}
function m(e, t, r, o, i) {
    let { repeated: a, localName: l } = r;
    switch(r.oneof && ((e = e[r.oneof.localName]).case != l && delete e.value, e.case = l, l = "value"), r.kind){
        case "scalar":
        case "enum":
            const d = "enum" == r.kind ? c.ScalarType.INT32 : r.T;
            let p = _;
            if ("scalar" == r.kind && r.L > 0 && (p = y), a) {
                let r = e[l];
                if (o == n.WireType.LengthDelimited && d != c.ScalarType.STRING && d != c.ScalarType.BYTES) {
                    let e = t.uint32() + t.pos;
                    for(; t.pos < e;)r.push(p(t, d));
                } else r.push(p(t, d));
            } else e[l] = p(t, d);
            break;
        case "message":
            const f = r.T;
            a ? e[l].push(g(t, new f, i, r)) : (0, u.isMessage)(e[l]) ? g(t, e[l], i, r) : (e[l] = g(t, new f, i, r), !f.fieldWrapper || r.oneof || r.repeated || (e[l] = f.fieldWrapper.unwrapField(e[l])));
            break;
        case "map":
            let [h, m] = function(e, t, r) {
                const n = t.uint32(), o = t.pos + n;
                let i, a;
                for(; t.pos < o;){
                    const [n] = t.tag();
                    switch(n){
                        case 1:
                            i = _(t, e.K);
                            break;
                        case 2:
                            switch(e.V.kind){
                                case "scalar":
                                    a = _(t, e.V.T);
                                    break;
                                case "enum":
                                    a = t.int32();
                                    break;
                                case "message":
                                    a = g(t, new e.V.T, r, void 0);
                            }
                    }
                }
                void 0 === i && (i = (0, s.scalarZeroValue)(e.K, c.LongType.BIGINT));
                "string" != typeof i && "number" != typeof i && (i = i.toString());
                if (void 0 === a) switch(e.V.kind){
                    case "scalar":
                        a = (0, s.scalarZeroValue)(e.V.T, c.LongType.BIGINT);
                        break;
                    case "enum":
                        a = e.V.T.values[0].no;
                        break;
                    case "message":
                        a = new e.V.T;
                }
                return [
                    i,
                    a
                ];
            }(r, t, i);
            e[l][h] = m;
    }
}
function g(e, t, r, n) {
    const o = t.getType().runtime.bin, s = null == n ? void 0 : n.delimited;
    return o.readMessage(t, e, s ? n.no : e.uint32(), r, s), t;
}
function y(e, t) {
    const r = _(e, t);
    return "bigint" == typeof r ? r.toString() : r;
}
function _(e, t) {
    switch(t){
        case c.ScalarType.STRING:
            return e.string();
        case c.ScalarType.BOOL:
            return e.bool();
        case c.ScalarType.DOUBLE:
            return e.double();
        case c.ScalarType.FLOAT:
            return e.float();
        case c.ScalarType.INT32:
            return e.int32();
        case c.ScalarType.INT64:
            return e.int64();
        case c.ScalarType.UINT64:
            return e.uint64();
        case c.ScalarType.FIXED64:
            return e.fixed64();
        case c.ScalarType.BYTES:
            return e.bytes();
        case c.ScalarType.FIXED32:
            return e.fixed32();
        case c.ScalarType.SFIXED32:
            return e.sfixed32();
        case c.ScalarType.SFIXED64:
            return e.sfixed64();
        case c.ScalarType.SINT64:
            return e.sint64();
        case c.ScalarType.UINT32:
            return e.uint32();
        case c.ScalarType.SINT32:
            return e.sint32();
    }
}
function v(e, t, r, o) {
    (0, i.assert)(void 0 !== t);
    const s = e.repeated;
    switch(e.kind){
        case "scalar":
        case "enum":
            let a = "enum" == e.kind ? c.ScalarType.INT32 : e.T;
            if (s) if ((0, i.assert)(Array.isArray(t)), e.packed) !function(e, t, r, o) {
                if (!o.length) return;
                e.tag(r, n.WireType.LengthDelimited).fork();
                let [, s] = k(t);
                for(let t = 0; t < o.length; t++)e[s](o[t]);
                e.join();
            }(r, a, e.no, t);
            else for (const n of t)S(r, a, e.no, n);
            else S(r, a, e.no, t);
            break;
        case "message":
            if (s) {
                (0, i.assert)(Array.isArray(t));
                for (const n of t)b(r, o, e, n);
            } else b(r, o, e, t);
            break;
        case "map":
            (0, i.assert)("object" == typeof t && null != t);
            for (const [n, s] of Object.entries(t))w(r, o, e, n, s);
    }
}
function w(e, t, r, o, s) {
    e.tag(r.no, n.WireType.LengthDelimited), e.fork();
    let a = o;
    switch(r.K){
        case c.ScalarType.INT32:
        case c.ScalarType.FIXED32:
        case c.ScalarType.UINT32:
        case c.ScalarType.SFIXED32:
        case c.ScalarType.SINT32:
            a = Number.parseInt(o);
            break;
        case c.ScalarType.BOOL:
            (0, i.assert)("true" == o || "false" == o), a = "true" == o;
    }
    switch(S(e, r.K, 1, a), r.V.kind){
        case "scalar":
            S(e, r.V.T, 2, s);
            break;
        case "enum":
            S(e, c.ScalarType.INT32, 2, s);
            break;
        case "message":
            (0, i.assert)(void 0 !== s), e.tag(2, n.WireType.LengthDelimited).bytes(s.toBinary(t));
    }
    e.join();
}
function b(e, t, r, s) {
    const i = (0, o.wrapField)(r.T, s);
    r.delimited ? e.tag(r.no, n.WireType.StartGroup).raw(i.toBinary(t)).tag(r.no, n.WireType.EndGroup) : e.tag(r.no, n.WireType.LengthDelimited).bytes(i.toBinary(t));
}
function S(e, t, r, n) {
    (0, i.assert)(void 0 !== n);
    let [o, s] = k(t);
    e.tag(r, o)[s](n);
}
function k(e) {
    let t = n.WireType.Varint;
    switch(e){
        case c.ScalarType.BYTES:
        case c.ScalarType.STRING:
            t = n.WireType.LengthDelimited;
            break;
        case c.ScalarType.DOUBLE:
        case c.ScalarType.FIXED64:
        case c.ScalarType.SFIXED64:
            t = n.WireType.Bit64;
            break;
        case c.ScalarType.FIXED32:
        case c.ScalarType.SFIXED32:
        case c.ScalarType.FLOAT:
            t = n.WireType.Bit32;
    }
    return [
        t,
        c.ScalarType[e].toLowerCase()
    ];
}
exports.makeBinaryFormat = function() {
    return {
        makeReadOptions: f,
        makeWriteOptions: h,
        listUnknownFields (e) {
            var t;
            return null !== (t = e[l]) && void 0 !== t ? t : [];
        },
        discardUnknownFields (e) {
            delete e[l];
        },
        writeUnknownFields (e, t) {
            const r = e[l];
            if (r) for (const e of r)t.tag(e.no, e.wireType).raw(e.data);
        },
        onUnknownField (e, t, r, n) {
            const o = e;
            Array.isArray(o[l]) || (o[l] = []), o[l].push({
                no: t,
                wireType: r,
                data: n
            });
        },
        readMessage (e, t, r, o, s) {
            const i = e.getType(), a = s ? t.len : t.pos + r;
            let c, u;
            for(; t.pos < a && ([c, u] = t.tag(), !0 !== s || u != n.WireType.EndGroup);){
                const r = i.fields.find(c);
                if (!r) {
                    const r = t.skip(u, c);
                    o.readUnknownFields && this.onUnknownField(e, c, u, r);
                    continue;
                }
                m(e, t, r, u, o);
            }
            if (s && (u != n.WireType.EndGroup || c !== r)) throw new Error("invalid end group tag");
        },
        readField: m,
        writeMessage (e, t, r) {
            const n = e.getType();
            for (const o of n.fields.byNumber()){
                if (!(0, a.isFieldSet)(o, e)) {
                    if (o.req) throw new Error(`cannot encode field ${n.typeName}.${o.name} to binary: required field not set`);
                    continue;
                }
                v(o, o.oneof ? e[o.oneof.localName].value : e[o.localName], t, r);
            }
            return r.writeUnknownFields && this.writeUnknownFields(e, t), t;
        },
        writeField (e, t, r, n) {
            void 0 !== t && v(e, t, r, n);
        }
    };
}, exports.writeMapEntry = w;
