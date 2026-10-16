"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.writeMapEntry = exports.makeBinaryFormat = void 0;
const n = require("./module-18831.js"), o = require("./module-42212.js"), s = require("./module-31455.js"), i = require("./module-43098.js"), a = require("./module-88803.js"), l = require("./module-3408.js"), c = require("./module-62706.js"), u = Symbol("@bufbuild/protobuf/unknown-fields"), d = {
    readUnknownFields: !0,
    readerFactory: (e)=>new n.BinaryReader(e)
}, p = {
    writeUnknownFields: !0,
    writerFactory: ()=>new n.BinaryWriter
};
function h(e) {
    return e ? Object.assign(Object.assign({}, d), e) : d;
}
function m(e) {
    return e ? Object.assign(Object.assign({}, p), e) : p;
}
function f(e, t, r, o, i) {
    let { repeated: a, localName: u } = r;
    switch(r.oneof && ((e = e[r.oneof.localName]).case != u && delete e.value, e.case = u, u = "value"), r.kind){
        case "scalar":
        case "enum":
            const d = "enum" == r.kind ? l.ScalarType.INT32 : r.T;
            let p = v;
            if ("scalar" == r.kind && r.L > 0 && (p = y), a) {
                let r = e[u];
                if (o == n.WireType.LengthDelimited && d != l.ScalarType.STRING && d != l.ScalarType.BYTES) {
                    let e = t.uint32() + t.pos;
                    for(; t.pos < e;)r.push(p(t, d));
                } else r.push(p(t, d));
            } else e[u] = p(t, d);
            break;
        case "message":
            const h = r.T;
            a ? e[u].push(g(t, new h, i, r)) : (0, c.isMessage)(e[u]) ? g(t, e[u], i, r) : (e[u] = g(t, new h, i, r), !h.fieldWrapper || r.oneof || r.repeated || (e[u] = h.fieldWrapper.unwrapField(e[u])));
            break;
        case "map":
            let [m, f] = function(e, t, r) {
                const n = t.uint32(), o = t.pos + n;
                let i, a;
                for(; t.pos < o;){
                    const [n] = t.tag();
                    switch(n){
                        case 1:
                            i = v(t, e.K);
                            break;
                        case 2:
                            switch(e.V.kind){
                                case "scalar":
                                    a = v(t, e.V.T);
                                    break;
                                case "enum":
                                    a = t.int32();
                                    break;
                                case "message":
                                    a = g(t, new e.V.T, r, void 0);
                            }
                    }
                }
                void 0 === i && (i = (0, s.scalarZeroValue)(e.K, l.LongType.BIGINT));
                "string" != typeof i && "number" != typeof i && (i = i.toString());
                if (void 0 === a) switch(e.V.kind){
                    case "scalar":
                        a = (0, s.scalarZeroValue)(e.V.T, l.LongType.BIGINT);
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
            e[u][m] = f;
    }
}
function g(e, t, r, n) {
    const o = t.getType().runtime.bin, s = null == n ? void 0 : n.delimited;
    return o.readMessage(t, e, s ? n.no : e.uint32(), r, s), t;
}
function y(e, t) {
    const r = v(e, t);
    return "bigint" == typeof r ? r.toString() : r;
}
function v(e, t) {
    switch(t){
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
function w(e, t, r, o) {
    (0, i.assert)(void 0 !== t);
    const s = e.repeated;
    switch(e.kind){
        case "scalar":
        case "enum":
            let a = "enum" == e.kind ? l.ScalarType.INT32 : e.T;
            if (s) if ((0, i.assert)(Array.isArray(t)), e.packed) !function(e, t, r, o) {
                if (!o.length) return;
                e.tag(r, n.WireType.LengthDelimited).fork();
                let [, s] = x(t);
                for(let t = 0; t < o.length; t++)e[s](o[t]);
                e.join();
            }(r, a, e.no, t);
            else for (const n of t)S(r, a, e.no, n);
            else S(r, a, e.no, t);
            break;
        case "message":
            if (s) {
                (0, i.assert)(Array.isArray(t));
                for (const n of t)_(r, o, e, n);
            } else _(r, o, e, t);
            break;
        case "map":
            (0, i.assert)("object" == typeof t && null != t);
            for (const [n, s] of Object.entries(t))b(r, o, e, n, s);
    }
}
function b(e, t, r, o, s) {
    e.tag(r.no, n.WireType.LengthDelimited), e.fork();
    let a = o;
    switch(r.K){
        case l.ScalarType.INT32:
        case l.ScalarType.FIXED32:
        case l.ScalarType.UINT32:
        case l.ScalarType.SFIXED32:
        case l.ScalarType.SINT32:
            a = Number.parseInt(o);
            break;
        case l.ScalarType.BOOL:
            (0, i.assert)("true" == o || "false" == o), a = "true" == o;
    }
    switch(S(e, r.K, 1, a), r.V.kind){
        case "scalar":
            S(e, r.V.T, 2, s);
            break;
        case "enum":
            S(e, l.ScalarType.INT32, 2, s);
            break;
        case "message":
            (0, i.assert)(void 0 !== s), e.tag(2, n.WireType.LengthDelimited).bytes(s.toBinary(t));
    }
    e.join();
}
function _(e, t, r, s) {
    const i = (0, o.wrapField)(r.T, s);
    r.delimited ? e.tag(r.no, n.WireType.StartGroup).raw(i.toBinary(t)).tag(r.no, n.WireType.EndGroup) : e.tag(r.no, n.WireType.LengthDelimited).bytes(i.toBinary(t));
}
function S(e, t, r, n) {
    (0, i.assert)(void 0 !== n);
    let [o, s] = x(t);
    e.tag(r, o)[s](n);
}
function x(e) {
    let t = n.WireType.Varint;
    switch(e){
        case l.ScalarType.BYTES:
        case l.ScalarType.STRING:
            t = n.WireType.LengthDelimited;
            break;
        case l.ScalarType.DOUBLE:
        case l.ScalarType.FIXED64:
        case l.ScalarType.SFIXED64:
            t = n.WireType.Bit64;
            break;
        case l.ScalarType.FIXED32:
        case l.ScalarType.SFIXED32:
        case l.ScalarType.FLOAT:
            t = n.WireType.Bit32;
    }
    return [
        t,
        l.ScalarType[e].toLowerCase()
    ];
}
exports.makeBinaryFormat = function() {
    return {
        makeReadOptions: h,
        makeWriteOptions: m,
        listUnknownFields (e) {
            var t;
            return null !== (t = e[u]) && void 0 !== t ? t : [];
        },
        discardUnknownFields (e) {
            delete e[u];
        },
        writeUnknownFields (e, t) {
            const r = e[u];
            if (r) for (const e of r)t.tag(e.no, e.wireType).raw(e.data);
        },
        onUnknownField (e, t, r, n) {
            const o = e;
            Array.isArray(o[u]) || (o[u] = []), o[u].push({
                no: t,
                wireType: r,
                data: n
            });
        },
        readMessage (e, t, r, o, s) {
            const i = e.getType(), a = s ? t.len : t.pos + r;
            let l, c;
            for(; t.pos < a && ([l, c] = t.tag(), !0 !== s || c != n.WireType.EndGroup);){
                const r = i.fields.find(l);
                if (!r) {
                    const r = t.skip(c, l);
                    o.readUnknownFields && this.onUnknownField(e, l, c, r);
                    continue;
                }
                f(e, t, r, c, o);
            }
            if (s && (c != n.WireType.EndGroup || l !== r)) throw new Error("invalid end group tag");
        },
        readField: f,
        writeMessage (e, t, r) {
            const n = e.getType();
            for (const o of n.fields.byNumber()){
                if (!(0, a.isFieldSet)(o, e)) {
                    if (o.req) throw new Error(`cannot encode field ${n.typeName}.${o.name} to binary: required field not set`);
                    continue;
                }
                w(o, o.oneof ? e[o.oneof.localName].value : e[o.localName], t, r);
            }
            return r.writeUnknownFields && this.writeUnknownFields(e, t), t;
        },
        writeField (e, t, r, n) {
            void 0 !== t && w(e, t, r, n);
        }
    };
}, exports.writeMapEntry = b;
