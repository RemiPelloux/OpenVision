"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.writeMapEntry = exports.makeBinaryFormat = void 0;
const n = require("./module-8831.js"), r = require("./module-2212.js"), o = require("./module-1455.js"), s = require("./module-3098.js"), i = require("./module-8803.js"), a = require("./module-3408.js"), c = require("./module-2706.js"), l = Symbol("@bufbuild/protobuf/unknown-fields"), u = {
    readUnknownFields: !0,
    readerFactory: (e)=>new n.BinaryReader(e)
}, g = {
    writeUnknownFields: !0,
    writerFactory: ()=>new n.BinaryWriter
};
function E(e) {
    return e ? Object.assign(Object.assign({}, u), e) : u;
}
function h(e) {
    return e ? Object.assign(Object.assign({}, g), e) : g;
}
function d(e, t, A, r, s) {
    let { repeated: i, localName: l } = A;
    switch(A.oneof && ((e = e[A.oneof.localName]).case != l && delete e.value, e.case = l, l = "value"), A.kind){
        case "scalar":
        case "enum":
            const u = "enum" == A.kind ? a.ScalarType.INT32 : A.T;
            let g = Q;
            if ("scalar" == A.kind && A.L > 0 && (g = B), i) {
                let A = e[l];
                if (r == n.WireType.LengthDelimited && u != a.ScalarType.STRING && u != a.ScalarType.BYTES) {
                    let e = t.uint32() + t.pos;
                    for(; t.pos < e;)A.push(g(t, u));
                } else A.push(g(t, u));
            } else e[l] = g(t, u);
            break;
        case "message":
            const E = A.T;
            i ? e[l].push(I(t, new E, s, A)) : (0, c.isMessage)(e[l]) ? I(t, e[l], s, A) : (e[l] = I(t, new E, s, A), !E.fieldWrapper || A.oneof || A.repeated || (e[l] = E.fieldWrapper.unwrapField(e[l])));
            break;
        case "map":
            let [h, d] = function(e, t, A) {
                const n = t.uint32(), r = t.pos + n;
                let s, i;
                for(; t.pos < r;){
                    const [n] = t.tag();
                    switch(n){
                        case 1:
                            s = Q(t, e.K);
                            break;
                        case 2:
                            switch(e.V.kind){
                                case "scalar":
                                    i = Q(t, e.V.T);
                                    break;
                                case "enum":
                                    i = t.int32();
                                    break;
                                case "message":
                                    i = I(t, new e.V.T, A, void 0);
                            }
                    }
                }
                void 0 === s && (s = (0, o.scalarZeroValue)(e.K, a.LongType.BIGINT));
                "string" != typeof s && "number" != typeof s && (s = s.toString());
                if (void 0 === i) switch(e.V.kind){
                    case "scalar":
                        i = (0, o.scalarZeroValue)(e.V.T, a.LongType.BIGINT);
                        break;
                    case "enum":
                        i = e.V.T.values[0].no;
                        break;
                    case "message":
                        i = new e.V.T;
                }
                return [
                    s,
                    i
                ];
            }(A, t, s);
            e[l][h] = d;
    }
}
function I(e, t, A, n) {
    const r = t.getType().runtime.bin, o = null == n ? void 0 : n.delimited;
    return r.readMessage(t, e, o ? n.no : e.uint32(), A, o), t;
}
function B(e, t) {
    const A = Q(e, t);
    return "bigint" == typeof A ? A.toString() : A;
}
function Q(e, t) {
    switch(t){
        case a.ScalarType.STRING:
            return e.string();
        case a.ScalarType.BOOL:
            return e.bool();
        case a.ScalarType.DOUBLE:
            return e.double();
        case a.ScalarType.FLOAT:
            return e.float();
        case a.ScalarType.INT32:
            return e.int32();
        case a.ScalarType.INT64:
            return e.int64();
        case a.ScalarType.UINT64:
            return e.uint64();
        case a.ScalarType.FIXED64:
            return e.fixed64();
        case a.ScalarType.BYTES:
            return e.bytes();
        case a.ScalarType.FIXED32:
            return e.fixed32();
        case a.ScalarType.SFIXED32:
            return e.sfixed32();
        case a.ScalarType.SFIXED64:
            return e.sfixed64();
        case a.ScalarType.SINT64:
            return e.sint64();
        case a.ScalarType.UINT32:
            return e.uint32();
        case a.ScalarType.SINT32:
            return e.sint32();
    }
}
function f(e, t, A, r) {
    (0, s.assert)(void 0 !== t);
    const o = e.repeated;
    switch(e.kind){
        case "scalar":
        case "enum":
            let i = "enum" == e.kind ? a.ScalarType.INT32 : e.T;
            if (o) if ((0, s.assert)(Array.isArray(t)), e.packed) !function(e, t, A, r) {
                if (!r.length) return;
                e.tag(A, n.WireType.LengthDelimited).fork();
                let [, o] = y(t);
                for(let t = 0; t < r.length; t++)e[o](r[t]);
                e.join();
            }(A, i, e.no, t);
            else for (const n of t)m(A, i, e.no, n);
            else m(A, i, e.no, t);
            break;
        case "message":
            if (o) {
                (0, s.assert)(Array.isArray(t));
                for (const n of t)p(A, r, e, n);
            } else p(A, r, e, t);
            break;
        case "map":
            (0, s.assert)("object" == typeof t && null != t);
            for (const [n, o] of Object.entries(t))C(A, r, e, n, o);
    }
}
function C(e, t, A, r, o) {
    e.tag(A.no, n.WireType.LengthDelimited), e.fork();
    let i = r;
    switch(A.K){
        case a.ScalarType.INT32:
        case a.ScalarType.FIXED32:
        case a.ScalarType.UINT32:
        case a.ScalarType.SFIXED32:
        case a.ScalarType.SINT32:
            i = Number.parseInt(r);
            break;
        case a.ScalarType.BOOL:
            (0, s.assert)("true" == r || "false" == r), i = "true" == r;
    }
    switch(m(e, A.K, 1, i), A.V.kind){
        case "scalar":
            m(e, A.V.T, 2, o);
            break;
        case "enum":
            m(e, a.ScalarType.INT32, 2, o);
            break;
        case "message":
            (0, s.assert)(void 0 !== o), e.tag(2, n.WireType.LengthDelimited).bytes(o.toBinary(t));
    }
    e.join();
}
function p(e, t, A, o) {
    const s = (0, r.wrapField)(A.T, o);
    A.delimited ? e.tag(A.no, n.WireType.StartGroup).raw(s.toBinary(t)).tag(A.no, n.WireType.EndGroup) : e.tag(A.no, n.WireType.LengthDelimited).bytes(s.toBinary(t));
}
function m(e, t, A, n) {
    (0, s.assert)(void 0 !== n);
    let [r, o] = y(t);
    e.tag(A, r)[o](n);
}
function y(e) {
    let t = n.WireType.Varint;
    switch(e){
        case a.ScalarType.BYTES:
        case a.ScalarType.STRING:
            t = n.WireType.LengthDelimited;
            break;
        case a.ScalarType.DOUBLE:
        case a.ScalarType.FIXED64:
        case a.ScalarType.SFIXED64:
            t = n.WireType.Bit64;
            break;
        case a.ScalarType.FIXED32:
        case a.ScalarType.SFIXED32:
        case a.ScalarType.FLOAT:
            t = n.WireType.Bit32;
    }
    return [
        t,
        a.ScalarType[e].toLowerCase()
    ];
}
exports.makeBinaryFormat = function() {
    return {
        makeReadOptions: E,
        makeWriteOptions: h,
        listUnknownFields (e) {
            var t;
            return null !== (t = e[l]) && void 0 !== t ? t : [];
        },
        discardUnknownFields (e) {
            delete e[l];
        },
        writeUnknownFields (e, t) {
            const A = e[l];
            if (A) for (const e of A)t.tag(e.no, e.wireType).raw(e.data);
        },
        onUnknownField (e, t, A, n) {
            const r = e;
            Array.isArray(r[l]) || (r[l] = []), r[l].push({
                no: t,
                wireType: A,
                data: n
            });
        },
        readMessage (e, t, A, r, o) {
            const s = e.getType(), i = o ? t.len : t.pos + A;
            let a, c;
            for(; t.pos < i && ([a, c] = t.tag(), !0 !== o || c != n.WireType.EndGroup);){
                const A = s.fields.find(a);
                if (!A) {
                    const A = t.skip(c, a);
                    r.readUnknownFields && this.onUnknownField(e, a, c, A);
                    continue;
                }
                d(e, t, A, c, r);
            }
            if (o && (c != n.WireType.EndGroup || a !== A)) throw new Error("invalid end group tag");
        },
        readField: d,
        writeMessage (e, t, A) {
            const n = e.getType();
            for (const r of n.fields.byNumber()){
                if (!(0, i.isFieldSet)(r, e)) {
                    if (r.req) throw new Error(`cannot encode field ${n.typeName}.${r.name} to binary: required field not set`);
                    continue;
                }
                f(r, r.oneof ? e[r.oneof.localName].value : e[r.localName], t, A);
            }
            return A.writeUnknownFields && this.writeUnknownFields(e, t), t;
        },
        writeField (e, t, A, n) {
            void 0 !== t && f(e, t, A, n);
        }
    };
}, exports.writeMapEntry = C;
