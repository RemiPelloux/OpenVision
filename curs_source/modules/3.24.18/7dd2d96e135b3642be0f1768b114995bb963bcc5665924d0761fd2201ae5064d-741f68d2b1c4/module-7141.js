"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.writeMapEntry = exports.makeBinaryFormat = void 0;
const a = require("./module-8831.js"), s = require("./module-2212.js"), o = require("./module-1455.js"), r = require("./module-3098.js"), i = require("./module-8803.js"), A = require("./module-3408.js"), c = require("./module-2706.js"), l = Symbol("@bufbuild/protobuf/unknown-fields"), d = {
    readUnknownFields: !0,
    readerFactory: (e)=>new a.BinaryReader(e)
}, m = {
    writeUnknownFields: !0,
    writerFactory: ()=>new a.BinaryWriter
};
function u(e) {
    return e ? Object.assign(Object.assign({}, d), e) : d;
}
function g(e) {
    return e ? Object.assign(Object.assign({}, m), e) : m;
}
function p(e, n, t, s, r) {
    let { repeated: i, localName: l } = t;
    switch(t.oneof && ((e = e[t.oneof.localName]).case != l && delete e.value, e.case = l, l = "value"), t.kind){
        case "scalar":
        case "enum":
            const d = "enum" == t.kind ? A.ScalarType.INT32 : t.T;
            let m = T;
            if ("scalar" == t.kind && t.L > 0 && (m = h), i) {
                let t = e[l];
                if (s == a.WireType.LengthDelimited && d != A.ScalarType.STRING && d != A.ScalarType.BYTES) {
                    let e = n.uint32() + n.pos;
                    for(; n.pos < e;)t.push(m(n, d));
                } else t.push(m(n, d));
            } else e[l] = m(n, d);
            break;
        case "message":
            const u = t.T;
            i ? e[l].push(E(n, new u, r, t)) : (0, c.isMessage)(e[l]) ? E(n, e[l], r, t) : (e[l] = E(n, new u, r, t), !u.fieldWrapper || t.oneof || t.repeated || (e[l] = u.fieldWrapper.unwrapField(e[l])));
            break;
        case "map":
            let [g, p] = function(e, n, t) {
                const a = n.uint32(), s = n.pos + a;
                let r, i;
                for(; n.pos < s;){
                    const [a] = n.tag();
                    switch(a){
                        case 1:
                            r = T(n, e.K);
                            break;
                        case 2:
                            switch(e.V.kind){
                                case "scalar":
                                    i = T(n, e.V.T);
                                    break;
                                case "enum":
                                    i = n.int32();
                                    break;
                                case "message":
                                    i = E(n, new e.V.T, t, void 0);
                            }
                    }
                }
                void 0 === r && (r = (0, o.scalarZeroValue)(e.K, A.LongType.BIGINT));
                "string" != typeof r && "number" != typeof r && (r = r.toString());
                if (void 0 === i) switch(e.V.kind){
                    case "scalar":
                        i = (0, o.scalarZeroValue)(e.V.T, A.LongType.BIGINT);
                        break;
                    case "enum":
                        i = e.V.T.values[0].no;
                        break;
                    case "message":
                        i = new e.V.T;
                }
                return [
                    r,
                    i
                ];
            }(t, n, r);
            e[l][g] = p;
    }
}
function E(e, n, t, a) {
    const s = n.getType().runtime.bin, o = null == a ? void 0 : a.delimited;
    return s.readMessage(n, e, o ? a.no : e.uint32(), t, o), n;
}
function h(e, n) {
    const t = T(e, n);
    return "bigint" == typeof t ? t.toString() : t;
}
function T(e, n) {
    switch(n){
        case A.ScalarType.STRING:
            return e.string();
        case A.ScalarType.BOOL:
            return e.bool();
        case A.ScalarType.DOUBLE:
            return e.double();
        case A.ScalarType.FLOAT:
            return e.float();
        case A.ScalarType.INT32:
            return e.int32();
        case A.ScalarType.INT64:
            return e.int64();
        case A.ScalarType.UINT64:
            return e.uint64();
        case A.ScalarType.FIXED64:
            return e.fixed64();
        case A.ScalarType.BYTES:
            return e.bytes();
        case A.ScalarType.FIXED32:
            return e.fixed32();
        case A.ScalarType.SFIXED32:
            return e.sfixed32();
        case A.ScalarType.SFIXED64:
            return e.sfixed64();
        case A.ScalarType.SINT64:
            return e.sint64();
        case A.ScalarType.UINT32:
            return e.uint32();
        case A.ScalarType.SINT32:
            return e.sint32();
    }
}
function k(e, n, t, s) {
    (0, r.assert)(void 0 !== n);
    const o = e.repeated;
    switch(e.kind){
        case "scalar":
        case "enum":
            let i = "enum" == e.kind ? A.ScalarType.INT32 : e.T;
            if (o) if ((0, r.assert)(Array.isArray(n)), e.packed) !function(e, n, t, s) {
                if (!s.length) return;
                e.tag(t, a.WireType.LengthDelimited).fork();
                let [, o] = C(n);
                for(let n = 0; n < s.length; n++)e[o](s[n]);
                e.join();
            }(t, i, e.no, n);
            else for (const a of n)I(t, i, e.no, a);
            else I(t, i, e.no, n);
            break;
        case "message":
            if (o) {
                (0, r.assert)(Array.isArray(n));
                for (const a of n)_(t, s, e, a);
            } else _(t, s, e, n);
            break;
        case "map":
            (0, r.assert)("object" == typeof n && null != n);
            for (const [a, o] of Object.entries(n))f(t, s, e, a, o);
    }
}
function f(e, n, t, s, o) {
    e.tag(t.no, a.WireType.LengthDelimited), e.fork();
    let i = s;
    switch(t.K){
        case A.ScalarType.INT32:
        case A.ScalarType.FIXED32:
        case A.ScalarType.UINT32:
        case A.ScalarType.SFIXED32:
        case A.ScalarType.SINT32:
            i = Number.parseInt(s);
            break;
        case A.ScalarType.BOOL:
            (0, r.assert)("true" == s || "false" == s), i = "true" == s;
    }
    switch(I(e, t.K, 1, i), t.V.kind){
        case "scalar":
            I(e, t.V.T, 2, o);
            break;
        case "enum":
            I(e, A.ScalarType.INT32, 2, o);
            break;
        case "message":
            (0, r.assert)(void 0 !== o), e.tag(2, a.WireType.LengthDelimited).bytes(o.toBinary(n));
    }
    e.join();
}
function _(e, n, t, o) {
    const r = (0, s.wrapField)(t.T, o);
    t.delimited ? e.tag(t.no, a.WireType.StartGroup).raw(r.toBinary(n)).tag(t.no, a.WireType.EndGroup) : e.tag(t.no, a.WireType.LengthDelimited).bytes(r.toBinary(n));
}
function I(e, n, t, a) {
    (0, r.assert)(void 0 !== a);
    let [s, o] = C(n);
    e.tag(t, s)[o](a);
}
function C(e) {
    let n = a.WireType.Varint;
    switch(e){
        case A.ScalarType.BYTES:
        case A.ScalarType.STRING:
            n = a.WireType.LengthDelimited;
            break;
        case A.ScalarType.DOUBLE:
        case A.ScalarType.FIXED64:
        case A.ScalarType.SFIXED64:
            n = a.WireType.Bit64;
            break;
        case A.ScalarType.FIXED32:
        case A.ScalarType.SFIXED32:
        case A.ScalarType.FLOAT:
            n = a.WireType.Bit32;
    }
    return [
        n,
        A.ScalarType[e].toLowerCase()
    ];
}
exports.makeBinaryFormat = function() {
    return {
        makeReadOptions: u,
        makeWriteOptions: g,
        listUnknownFields (e) {
            var n;
            return null !== (n = e[l]) && void 0 !== n ? n : [];
        },
        discardUnknownFields (e) {
            delete e[l];
        },
        writeUnknownFields (e, n) {
            const t = e[l];
            if (t) for (const e of t)n.tag(e.no, e.wireType).raw(e.data);
        },
        onUnknownField (e, n, t, a) {
            const s = e;
            Array.isArray(s[l]) || (s[l] = []), s[l].push({
                no: n,
                wireType: t,
                data: a
            });
        },
        readMessage (e, n, t, s, o) {
            const r = e.getType(), i = o ? n.len : n.pos + t;
            let A, c;
            for(; n.pos < i && ([A, c] = n.tag(), !0 !== o || c != a.WireType.EndGroup);){
                const t = r.fields.find(A);
                if (!t) {
                    const t = n.skip(c, A);
                    s.readUnknownFields && this.onUnknownField(e, A, c, t);
                    continue;
                }
                p(e, n, t, c, s);
            }
            if (o && (c != a.WireType.EndGroup || A !== t)) throw new Error("invalid end group tag");
        },
        readField: p,
        writeMessage (e, n, t) {
            const a = e.getType();
            for (const s of a.fields.byNumber()){
                if (!(0, i.isFieldSet)(s, e)) {
                    if (s.req) throw new Error(`cannot encode field ${a.typeName}.${s.name} to binary: required field not set`);
                    continue;
                }
                k(s, s.oneof ? e[s.oneof.localName].value : e[s.localName], n, t);
            }
            return t.writeUnknownFields && this.writeUnknownFields(e, n), n;
        },
        writeField (e, n, t, a) {
            void 0 !== n && k(e, n, t, a);
        }
    };
}, exports.writeMapEntry = f;
