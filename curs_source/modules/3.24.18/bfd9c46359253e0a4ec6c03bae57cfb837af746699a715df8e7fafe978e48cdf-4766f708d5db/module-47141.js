"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.writeMapEntry = exports.makeBinaryFormat = void 0;
const n = require("./module-18831.js"), s = require("./module-42212.js"), o = require("./module-31455.js"), i = require("./module-43098.js"), a = require("./module-88803.js"), c = require("./module-3408.js"), l = require("./module-62706.js"), u = Symbol("@bufbuild/protobuf/unknown-fields"), d = {
    readUnknownFields: !0,
    readerFactory: (e)=>new n.BinaryReader(e)
}, p = {
    writeUnknownFields: !0,
    writerFactory: ()=>new n.BinaryWriter
};
function m(e) {
    return e ? Object.assign(Object.assign({}, d), e) : d;
}
function h(e) {
    return e ? Object.assign(Object.assign({}, p), e) : p;
}
function f(e, t, r, s, i) {
    let { repeated: a, localName: u } = r;
    switch(r.oneof && ((e = e[r.oneof.localName]).case != u && delete e.value, e.case = u, u = "value"), r.kind){
        case "scalar":
        case "enum":
            const d = "enum" == r.kind ? c.ScalarType.INT32 : r.T;
            let p = w;
            if ("scalar" == r.kind && r.L > 0 && (p = y), a) {
                let r = e[u];
                if (s == n.WireType.LengthDelimited && d != c.ScalarType.STRING && d != c.ScalarType.BYTES) {
                    let e = t.uint32() + t.pos;
                    for(; t.pos < e;)r.push(p(t, d));
                } else r.push(p(t, d));
            } else e[u] = p(t, d);
            break;
        case "message":
            const m = r.T;
            a ? e[u].push(g(t, new m, i, r)) : (0, l.isMessage)(e[u]) ? g(t, e[u], i, r) : (e[u] = g(t, new m, i, r), !m.fieldWrapper || r.oneof || r.repeated || (e[u] = m.fieldWrapper.unwrapField(e[u])));
            break;
        case "map":
            let [h, f] = function(e, t, r) {
                const n = t.uint32(), s = t.pos + n;
                let i, a;
                for(; t.pos < s;){
                    const [n] = t.tag();
                    switch(n){
                        case 1:
                            i = w(t, e.K);
                            break;
                        case 2:
                            switch(e.V.kind){
                                case "scalar":
                                    a = w(t, e.V.T);
                                    break;
                                case "enum":
                                    a = t.int32();
                                    break;
                                case "message":
                                    a = g(t, new e.V.T, r, void 0);
                            }
                    }
                }
                void 0 === i && (i = (0, o.scalarZeroValue)(e.K, c.LongType.BIGINT));
                "string" != typeof i && "number" != typeof i && (i = i.toString());
                if (void 0 === a) switch(e.V.kind){
                    case "scalar":
                        a = (0, o.scalarZeroValue)(e.V.T, c.LongType.BIGINT);
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
            e[u][h] = f;
    }
}
function g(e, t, r, n) {
    const s = t.getType().runtime.bin, o = null == n ? void 0 : n.delimited;
    return s.readMessage(t, e, o ? n.no : e.uint32(), r, o), t;
}
function y(e, t) {
    const r = w(e, t);
    return "bigint" == typeof r ? r.toString() : r;
}
function w(e, t) {
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
function v(e, t, r, s) {
    (0, i.assert)(void 0 !== t);
    const o = e.repeated;
    switch(e.kind){
        case "scalar":
        case "enum":
            let a = "enum" == e.kind ? c.ScalarType.INT32 : e.T;
            if (o) if ((0, i.assert)(Array.isArray(t)), e.packed) !function(e, t, r, s) {
                if (!s.length) return;
                e.tag(r, n.WireType.LengthDelimited).fork();
                let [, o] = k(t);
                for(let t = 0; t < s.length; t++)e[o](s[t]);
                e.join();
            }(r, a, e.no, t);
            else for (const n of t)S(r, a, e.no, n);
            else S(r, a, e.no, t);
            break;
        case "message":
            if (o) {
                (0, i.assert)(Array.isArray(t));
                for (const n of t)b(r, s, e, n);
            } else b(r, s, e, t);
            break;
        case "map":
            (0, i.assert)("object" == typeof t && null != t);
            for (const [n, o] of Object.entries(t))_(r, s, e, n, o);
    }
}
function _(e, t, r, s, o) {
    e.tag(r.no, n.WireType.LengthDelimited), e.fork();
    let a = s;
    switch(r.K){
        case c.ScalarType.INT32:
        case c.ScalarType.FIXED32:
        case c.ScalarType.UINT32:
        case c.ScalarType.SFIXED32:
        case c.ScalarType.SINT32:
            a = Number.parseInt(s);
            break;
        case c.ScalarType.BOOL:
            (0, i.assert)("true" == s || "false" == s), a = "true" == s;
    }
    switch(S(e, r.K, 1, a), r.V.kind){
        case "scalar":
            S(e, r.V.T, 2, o);
            break;
        case "enum":
            S(e, c.ScalarType.INT32, 2, o);
            break;
        case "message":
            (0, i.assert)(void 0 !== o), e.tag(2, n.WireType.LengthDelimited).bytes(o.toBinary(t));
    }
    e.join();
}
function b(e, t, r, o) {
    const i = (0, s.wrapField)(r.T, o);
    r.delimited ? e.tag(r.no, n.WireType.StartGroup).raw(i.toBinary(t)).tag(r.no, n.WireType.EndGroup) : e.tag(r.no, n.WireType.LengthDelimited).bytes(i.toBinary(t));
}
function S(e, t, r, n) {
    (0, i.assert)(void 0 !== n);
    let [s, o] = k(t);
    e.tag(r, s)[o](n);
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
        makeReadOptions: m,
        makeWriteOptions: h,
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
            const s = e;
            Array.isArray(s[u]) || (s[u] = []), s[u].push({
                no: t,
                wireType: r,
                data: n
            });
        },
        readMessage (e, t, r, s, o) {
            const i = e.getType(), a = o ? t.len : t.pos + r;
            let c, l;
            for(; t.pos < a && ([c, l] = t.tag(), !0 !== o || l != n.WireType.EndGroup);){
                const r = i.fields.find(c);
                if (!r) {
                    const r = t.skip(l, c);
                    s.readUnknownFields && this.onUnknownField(e, c, l, r);
                    continue;
                }
                f(e, t, r, l, s);
            }
            if (o && (l != n.WireType.EndGroup || c !== r)) throw new Error("invalid end group tag");
        },
        readField: f,
        writeMessage (e, t, r) {
            const n = e.getType();
            for (const s of n.fields.byNumber()){
                if (!(0, a.isFieldSet)(s, e)) {
                    if (s.req) throw new Error(`cannot encode field ${n.typeName}.${s.name} to binary: required field not set`);
                    continue;
                }
                v(s, s.oneof ? e[s.oneof.localName].value : e[s.localName], t, r);
            }
            return r.writeUnknownFields && this.writeUnknownFields(e, t), t;
        },
        writeField (e, t, r, n) {
            void 0 !== t && v(e, t, r, n);
        }
    };
}, exports.writeMapEntry = _;
