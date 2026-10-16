"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.writeMapEntry = exports.makeBinaryFormat = void 0;
const t = require("./module-8831.js"), s = require("./module-2212.js"), o = require("./module-1455.js"), r = require("./module-3098.js"), i = require("./module-8803.js"), A = require("./module-3408.js"), l = require("./module-2706.js"), c = Symbol("@bufbuild/protobuf/unknown-fields"), m = {
    readUnknownFields: !0,
    readerFactory: (e)=>new t.BinaryReader(e)
}, d = {
    writeUnknownFields: !0,
    writerFactory: ()=>new t.BinaryWriter
};
function g(e) {
    return e ? Object.assign(Object.assign({}, m), e) : m;
}
function u(e) {
    return e ? Object.assign(Object.assign({}, d), e) : d;
}
function E(e, n, a, s, r) {
    let { repeated: i, localName: c } = a;
    switch(a.oneof && ((e = e[a.oneof.localName]).case != c && delete e.value, e.case = c, c = "value"), a.kind){
        case "scalar":
        case "enum":
            const m = "enum" == a.kind ? A.ScalarType.INT32 : a.T;
            let d = k;
            if ("scalar" == a.kind && a.L > 0 && (d = T), i) {
                let a = e[c];
                if (s == t.WireType.LengthDelimited && m != A.ScalarType.STRING && m != A.ScalarType.BYTES) {
                    let e = n.uint32() + n.pos;
                    for(; n.pos < e;)a.push(d(n, m));
                } else a.push(d(n, m));
            } else e[c] = d(n, m);
            break;
        case "message":
            const g = a.T;
            i ? e[c].push(p(n, new g, r, a)) : (0, l.isMessage)(e[c]) ? p(n, e[c], r, a) : (e[c] = p(n, new g, r, a), !g.fieldWrapper || a.oneof || a.repeated || (e[c] = g.fieldWrapper.unwrapField(e[c])));
            break;
        case "map":
            let [u, E] = function(e, n, a) {
                const t = n.uint32(), s = n.pos + t;
                let r, i;
                for(; n.pos < s;){
                    const [t] = n.tag();
                    switch(t){
                        case 1:
                            r = k(n, e.K);
                            break;
                        case 2:
                            switch(e.V.kind){
                                case "scalar":
                                    i = k(n, e.V.T);
                                    break;
                                case "enum":
                                    i = n.int32();
                                    break;
                                case "message":
                                    i = p(n, new e.V.T, a, void 0);
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
            }(a, n, r);
            e[c][u] = E;
    }
}
function p(e, n, a, t) {
    const s = n.getType().runtime.bin, o = null == t ? void 0 : t.delimited;
    return s.readMessage(n, e, o ? t.no : e.uint32(), a, o), n;
}
function T(e, n) {
    const a = k(e, n);
    return "bigint" == typeof a ? a.toString() : a;
}
function k(e, n) {
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
function I(e, n, a, s) {
    (0, r.assert)(void 0 !== n);
    const o = e.repeated;
    switch(e.kind){
        case "scalar":
        case "enum":
            let i = "enum" == e.kind ? A.ScalarType.INT32 : e.T;
            if (o) if ((0, r.assert)(Array.isArray(n)), e.packed) !function(e, n, a, s) {
                if (!s.length) return;
                e.tag(a, t.WireType.LengthDelimited).fork();
                let [, o] = f(n);
                for(let n = 0; n < s.length; n++)e[o](s[n]);
                e.join();
            }(a, i, e.no, n);
            else for (const t of n)C(a, i, e.no, t);
            else C(a, i, e.no, n);
            break;
        case "message":
            if (o) {
                (0, r.assert)(Array.isArray(n));
                for (const t of n)_(a, s, e, t);
            } else _(a, s, e, n);
            break;
        case "map":
            (0, r.assert)("object" == typeof n && null != n);
            for (const [t, o] of Object.entries(n))h(a, s, e, t, o);
    }
}
function h(e, n, a, s, o) {
    e.tag(a.no, t.WireType.LengthDelimited), e.fork();
    let i = s;
    switch(a.K){
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
    switch(C(e, a.K, 1, i), a.V.kind){
        case "scalar":
            C(e, a.V.T, 2, o);
            break;
        case "enum":
            C(e, A.ScalarType.INT32, 2, o);
            break;
        case "message":
            (0, r.assert)(void 0 !== o), e.tag(2, t.WireType.LengthDelimited).bytes(o.toBinary(n));
    }
    e.join();
}
function _(e, n, a, o) {
    const r = (0, s.wrapField)(a.T, o);
    a.delimited ? e.tag(a.no, t.WireType.StartGroup).raw(r.toBinary(n)).tag(a.no, t.WireType.EndGroup) : e.tag(a.no, t.WireType.LengthDelimited).bytes(r.toBinary(n));
}
function C(e, n, a, t) {
    (0, r.assert)(void 0 !== t);
    let [s, o] = f(n);
    e.tag(a, s)[o](t);
}
function f(e) {
    let n = t.WireType.Varint;
    switch(e){
        case A.ScalarType.BYTES:
        case A.ScalarType.STRING:
            n = t.WireType.LengthDelimited;
            break;
        case A.ScalarType.DOUBLE:
        case A.ScalarType.FIXED64:
        case A.ScalarType.SFIXED64:
            n = t.WireType.Bit64;
            break;
        case A.ScalarType.FIXED32:
        case A.ScalarType.SFIXED32:
        case A.ScalarType.FLOAT:
            n = t.WireType.Bit32;
    }
    return [
        n,
        A.ScalarType[e].toLowerCase()
    ];
}
exports.makeBinaryFormat = function() {
    return {
        makeReadOptions: g,
        makeWriteOptions: u,
        listUnknownFields (e) {
            var n;
            return null !== (n = e[c]) && void 0 !== n ? n : [];
        },
        discardUnknownFields (e) {
            delete e[c];
        },
        writeUnknownFields (e, n) {
            const a = e[c];
            if (a) for (const e of a)n.tag(e.no, e.wireType).raw(e.data);
        },
        onUnknownField (e, n, a, t) {
            const s = e;
            Array.isArray(s[c]) || (s[c] = []), s[c].push({
                no: n,
                wireType: a,
                data: t
            });
        },
        readMessage (e, n, a, s, o) {
            const r = e.getType(), i = o ? n.len : n.pos + a;
            let A, l;
            for(; n.pos < i && ([A, l] = n.tag(), !0 !== o || l != t.WireType.EndGroup);){
                const a = r.fields.find(A);
                if (!a) {
                    const a = n.skip(l, A);
                    s.readUnknownFields && this.onUnknownField(e, A, l, a);
                    continue;
                }
                E(e, n, a, l, s);
            }
            if (o && (l != t.WireType.EndGroup || A !== a)) throw new Error("invalid end group tag");
        },
        readField: E,
        writeMessage (e, n, a) {
            const t = e.getType();
            for (const s of t.fields.byNumber()){
                if (!(0, i.isFieldSet)(s, e)) {
                    if (s.req) throw new Error(`cannot encode field ${t.typeName}.${s.name} to binary: required field not set`);
                    continue;
                }
                I(s, s.oneof ? e[s.oneof.localName].value : e[s.localName], n, a);
            }
            return a.writeUnknownFields && this.writeUnknownFields(e, n), n;
        },
        writeField (e, n, a, t) {
            void 0 !== n && I(e, n, a, t);
        }
    };
}, exports.writeMapEntry = h;
