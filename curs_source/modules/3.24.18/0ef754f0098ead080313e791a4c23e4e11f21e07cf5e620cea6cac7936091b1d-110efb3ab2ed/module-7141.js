"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.writeMapEntry = exports.makeBinaryFormat = void 0;
const t = require("./module-8831.js"), s = require("./module-2212.js"), o = require("./module-1455.js"), r = require("./module-3098.js"), i = require("./module-8803.js"), l = require("./module-3408.js"), d = require("./module-2706.js"), m = Symbol("@bufbuild/protobuf/unknown-fields"), c = {
    readUnknownFields: !0,
    readerFactory: (e)=>new t.BinaryReader(e)
}, p = {
    writeUnknownFields: !0,
    writerFactory: ()=>new t.BinaryWriter
};
function A(e) {
    return e ? Object.assign(Object.assign({}, c), e) : c;
}
function u(e) {
    return e ? Object.assign(Object.assign({}, p), e) : p;
}
function g(e, a, n, s, r) {
    let { repeated: i, localName: m } = n;
    switch(n.oneof && ((e = e[n.oneof.localName]).case != m && delete e.value, e.case = m, m = "value"), n.kind){
        case "scalar":
        case "enum":
            const c = "enum" == n.kind ? l.ScalarType.INT32 : n.T;
            let p = k;
            if ("scalar" == n.kind && n.L > 0 && (p = h), i) {
                let n = e[m];
                if (s == t.WireType.LengthDelimited && c != l.ScalarType.STRING && c != l.ScalarType.BYTES) {
                    let e = a.uint32() + a.pos;
                    for(; a.pos < e;)n.push(p(a, c));
                } else n.push(p(a, c));
            } else e[m] = p(a, c);
            break;
        case "message":
            const A = n.T;
            i ? e[m].push(T(a, new A, r, n)) : (0, d.isMessage)(e[m]) ? T(a, e[m], r, n) : (e[m] = T(a, new A, r, n), !A.fieldWrapper || n.oneof || n.repeated || (e[m] = A.fieldWrapper.unwrapField(e[m])));
            break;
        case "map":
            let [u, g] = function(e, a, n) {
                const t = a.uint32(), s = a.pos + t;
                let r, i;
                for(; a.pos < s;){
                    const [t] = a.tag();
                    switch(t){
                        case 1:
                            r = k(a, e.K);
                            break;
                        case 2:
                            switch(e.V.kind){
                                case "scalar":
                                    i = k(a, e.V.T);
                                    break;
                                case "enum":
                                    i = a.int32();
                                    break;
                                case "message":
                                    i = T(a, new e.V.T, n, void 0);
                            }
                    }
                }
                void 0 === r && (r = (0, o.scalarZeroValue)(e.K, l.LongType.BIGINT));
                "string" != typeof r && "number" != typeof r && (r = r.toString());
                if (void 0 === i) switch(e.V.kind){
                    case "scalar":
                        i = (0, o.scalarZeroValue)(e.V.T, l.LongType.BIGINT);
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
            }(n, a, r);
            e[m][u] = g;
    }
}
function T(e, a, n, t) {
    const s = a.getType().runtime.bin, o = null == t ? void 0 : t.delimited;
    return s.readMessage(a, e, o ? t.no : e.uint32(), n, o), a;
}
function h(e, a) {
    const n = k(e, a);
    return "bigint" == typeof n ? n.toString() : n;
}
function k(e, a) {
    switch(a){
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
function _(e, a, n, s) {
    (0, r.assert)(void 0 !== a);
    const o = e.repeated;
    switch(e.kind){
        case "scalar":
        case "enum":
            let i = "enum" == e.kind ? l.ScalarType.INT32 : e.T;
            if (o) if ((0, r.assert)(Array.isArray(a)), e.packed) !function(e, a, n, s) {
                if (!s.length) return;
                e.tag(n, t.WireType.LengthDelimited).fork();
                let [, o] = I(a);
                for(let a = 0; a < s.length; a++)e[o](s[a]);
                e.join();
            }(n, i, e.no, a);
            else for (const t of a)C(n, i, e.no, t);
            else C(n, i, e.no, a);
            break;
        case "message":
            if (o) {
                (0, r.assert)(Array.isArray(a));
                for (const t of a)f(n, s, e, t);
            } else f(n, s, e, a);
            break;
        case "map":
            (0, r.assert)("object" == typeof a && null != a);
            for (const [t, o] of Object.entries(a))E(n, s, e, t, o);
    }
}
function E(e, a, n, s, o) {
    e.tag(n.no, t.WireType.LengthDelimited), e.fork();
    let i = s;
    switch(n.K){
        case l.ScalarType.INT32:
        case l.ScalarType.FIXED32:
        case l.ScalarType.UINT32:
        case l.ScalarType.SFIXED32:
        case l.ScalarType.SINT32:
            i = Number.parseInt(s);
            break;
        case l.ScalarType.BOOL:
            (0, r.assert)("true" == s || "false" == s), i = "true" == s;
    }
    switch(C(e, n.K, 1, i), n.V.kind){
        case "scalar":
            C(e, n.V.T, 2, o);
            break;
        case "enum":
            C(e, l.ScalarType.INT32, 2, o);
            break;
        case "message":
            (0, r.assert)(void 0 !== o), e.tag(2, t.WireType.LengthDelimited).bytes(o.toBinary(a));
    }
    e.join();
}
function f(e, a, n, o) {
    const r = (0, s.wrapField)(n.T, o);
    n.delimited ? e.tag(n.no, t.WireType.StartGroup).raw(r.toBinary(a)).tag(n.no, t.WireType.EndGroup) : e.tag(n.no, t.WireType.LengthDelimited).bytes(r.toBinary(a));
}
function C(e, a, n, t) {
    (0, r.assert)(void 0 !== t);
    let [s, o] = I(a);
    e.tag(n, s)[o](t);
}
function I(e) {
    let a = t.WireType.Varint;
    switch(e){
        case l.ScalarType.BYTES:
        case l.ScalarType.STRING:
            a = t.WireType.LengthDelimited;
            break;
        case l.ScalarType.DOUBLE:
        case l.ScalarType.FIXED64:
        case l.ScalarType.SFIXED64:
            a = t.WireType.Bit64;
            break;
        case l.ScalarType.FIXED32:
        case l.ScalarType.SFIXED32:
        case l.ScalarType.FLOAT:
            a = t.WireType.Bit32;
    }
    return [
        a,
        l.ScalarType[e].toLowerCase()
    ];
}
exports.makeBinaryFormat = function() {
    return {
        makeReadOptions: A,
        makeWriteOptions: u,
        listUnknownFields (e) {
            var a;
            return null !== (a = e[m]) && void 0 !== a ? a : [];
        },
        discardUnknownFields (e) {
            delete e[m];
        },
        writeUnknownFields (e, a) {
            const n = e[m];
            if (n) for (const e of n)a.tag(e.no, e.wireType).raw(e.data);
        },
        onUnknownField (e, a, n, t) {
            const s = e;
            Array.isArray(s[m]) || (s[m] = []), s[m].push({
                no: a,
                wireType: n,
                data: t
            });
        },
        readMessage (e, a, n, s, o) {
            const r = e.getType(), i = o ? a.len : a.pos + n;
            let l, d;
            for(; a.pos < i && ([l, d] = a.tag(), !0 !== o || d != t.WireType.EndGroup);){
                const n = r.fields.find(l);
                if (!n) {
                    const n = a.skip(d, l);
                    s.readUnknownFields && this.onUnknownField(e, l, d, n);
                    continue;
                }
                g(e, a, n, d, s);
            }
            if (o && (d != t.WireType.EndGroup || l !== n)) throw new Error("invalid end group tag");
        },
        readField: g,
        writeMessage (e, a, n) {
            const t = e.getType();
            for (const s of t.fields.byNumber()){
                if (!(0, i.isFieldSet)(s, e)) {
                    if (s.req) throw new Error(`cannot encode field ${t.typeName}.${s.name} to binary: required field not set`);
                    continue;
                }
                _(s, s.oneof ? e[s.oneof.localName].value : e[s.localName], a, n);
            }
            return n.writeUnknownFields && this.writeUnknownFields(e, a), a;
        },
        writeField (e, a, n, t) {
            void 0 !== a && _(e, a, n, t);
        }
    };
}, exports.writeMapEntry = E;
