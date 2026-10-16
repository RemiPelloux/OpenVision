"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.writeMapEntry = exports.makeBinaryFormat = void 0;
const n = require("./module-8831.js"), r = require("./module-2212.js"), o = require("./module-1455.js"), s = require("./module-3098.js"), a = require("./module-8803.js"), i = require("./module-3408.js"), c = require("./module-2706.js"), l = Symbol("@bufbuild/protobuf/unknown-fields"), g = {
    readUnknownFields: !0,
    readerFactory: (e)=>new n.BinaryReader(e)
}, E = {
    writeUnknownFields: !0,
    writerFactory: ()=>new n.BinaryWriter
};
function u(e) {
    return e ? Object.assign(Object.assign({}, g), e) : g;
}
function d(e) {
    return e ? Object.assign(Object.assign({}, E), e) : E;
}
function I(e, A, t, r, s) {
    let { repeated: a, localName: l } = t;
    switch(t.oneof && ((e = e[t.oneof.localName]).case != l && delete e.value, e.case = l, l = "value"), t.kind){
        case "scalar":
        case "enum":
            const g = "enum" == t.kind ? i.ScalarType.INT32 : t.T;
            let E = m;
            if ("scalar" == t.kind && t.L > 0 && (E = Q), a) {
                let t = e[l];
                if (r == n.WireType.LengthDelimited && g != i.ScalarType.STRING && g != i.ScalarType.BYTES) {
                    let e = A.uint32() + A.pos;
                    for(; A.pos < e;)t.push(E(A, g));
                } else t.push(E(A, g));
            } else e[l] = E(A, g);
            break;
        case "message":
            const u = t.T;
            a ? e[l].push(h(A, new u, s, t)) : (0, c.isMessage)(e[l]) ? h(A, e[l], s, t) : (e[l] = h(A, new u, s, t), !u.fieldWrapper || t.oneof || t.repeated || (e[l] = u.fieldWrapper.unwrapField(e[l])));
            break;
        case "map":
            let [d, I] = function(e, A, t) {
                const n = A.uint32(), r = A.pos + n;
                let s, a;
                for(; A.pos < r;){
                    const [n] = A.tag();
                    switch(n){
                        case 1:
                            s = m(A, e.K);
                            break;
                        case 2:
                            switch(e.V.kind){
                                case "scalar":
                                    a = m(A, e.V.T);
                                    break;
                                case "enum":
                                    a = A.int32();
                                    break;
                                case "message":
                                    a = h(A, new e.V.T, t, void 0);
                            }
                    }
                }
                void 0 === s && (s = (0, o.scalarZeroValue)(e.K, i.LongType.BIGINT));
                "string" != typeof s && "number" != typeof s && (s = s.toString());
                if (void 0 === a) switch(e.V.kind){
                    case "scalar":
                        a = (0, o.scalarZeroValue)(e.V.T, i.LongType.BIGINT);
                        break;
                    case "enum":
                        a = e.V.T.values[0].no;
                        break;
                    case "message":
                        a = new e.V.T;
                }
                return [
                    s,
                    a
                ];
            }(t, A, s);
            e[l][d] = I;
    }
}
function h(e, A, t, n) {
    const r = A.getType().runtime.bin, o = null == n ? void 0 : n.delimited;
    return r.readMessage(A, e, o ? n.no : e.uint32(), t, o), A;
}
function Q(e, A) {
    const t = m(e, A);
    return "bigint" == typeof t ? t.toString() : t;
}
function m(e, A) {
    switch(A){
        case i.ScalarType.STRING:
            return e.string();
        case i.ScalarType.BOOL:
            return e.bool();
        case i.ScalarType.DOUBLE:
            return e.double();
        case i.ScalarType.FLOAT:
            return e.float();
        case i.ScalarType.INT32:
            return e.int32();
        case i.ScalarType.INT64:
            return e.int64();
        case i.ScalarType.UINT64:
            return e.uint64();
        case i.ScalarType.FIXED64:
            return e.fixed64();
        case i.ScalarType.BYTES:
            return e.bytes();
        case i.ScalarType.FIXED32:
            return e.fixed32();
        case i.ScalarType.SFIXED32:
            return e.sfixed32();
        case i.ScalarType.SFIXED64:
            return e.sfixed64();
        case i.ScalarType.SINT64:
            return e.sint64();
        case i.ScalarType.UINT32:
            return e.uint32();
        case i.ScalarType.SINT32:
            return e.sint32();
    }
}
function C(e, A, t, r) {
    (0, s.assert)(void 0 !== A);
    const o = e.repeated;
    switch(e.kind){
        case "scalar":
        case "enum":
            let a = "enum" == e.kind ? i.ScalarType.INT32 : e.T;
            if (o) if ((0, s.assert)(Array.isArray(A)), e.packed) !function(e, A, t, r) {
                if (!r.length) return;
                e.tag(t, n.WireType.LengthDelimited).fork();
                let [, o] = y(A);
                for(let A = 0; A < r.length; A++)e[o](r[A]);
                e.join();
            }(t, a, e.no, A);
            else for (const n of A)f(t, a, e.no, n);
            else f(t, a, e.no, A);
            break;
        case "message":
            if (o) {
                (0, s.assert)(Array.isArray(A));
                for (const n of A)p(t, r, e, n);
            } else p(t, r, e, A);
            break;
        case "map":
            (0, s.assert)("object" == typeof A && null != A);
            for (const [n, o] of Object.entries(A))B(t, r, e, n, o);
    }
}
function B(e, A, t, r, o) {
    e.tag(t.no, n.WireType.LengthDelimited), e.fork();
    let a = r;
    switch(t.K){
        case i.ScalarType.INT32:
        case i.ScalarType.FIXED32:
        case i.ScalarType.UINT32:
        case i.ScalarType.SFIXED32:
        case i.ScalarType.SINT32:
            a = Number.parseInt(r);
            break;
        case i.ScalarType.BOOL:
            (0, s.assert)("true" == r || "false" == r), a = "true" == r;
    }
    switch(f(e, t.K, 1, a), t.V.kind){
        case "scalar":
            f(e, t.V.T, 2, o);
            break;
        case "enum":
            f(e, i.ScalarType.INT32, 2, o);
            break;
        case "message":
            (0, s.assert)(void 0 !== o), e.tag(2, n.WireType.LengthDelimited).bytes(o.toBinary(A));
    }
    e.join();
}
function p(e, A, t, o) {
    const s = (0, r.wrapField)(t.T, o);
    t.delimited ? e.tag(t.no, n.WireType.StartGroup).raw(s.toBinary(A)).tag(t.no, n.WireType.EndGroup) : e.tag(t.no, n.WireType.LengthDelimited).bytes(s.toBinary(A));
}
function f(e, A, t, n) {
    (0, s.assert)(void 0 !== n);
    let [r, o] = y(A);
    e.tag(t, r)[o](n);
}
function y(e) {
    let A = n.WireType.Varint;
    switch(e){
        case i.ScalarType.BYTES:
        case i.ScalarType.STRING:
            A = n.WireType.LengthDelimited;
            break;
        case i.ScalarType.DOUBLE:
        case i.ScalarType.FIXED64:
        case i.ScalarType.SFIXED64:
            A = n.WireType.Bit64;
            break;
        case i.ScalarType.FIXED32:
        case i.ScalarType.SFIXED32:
        case i.ScalarType.FLOAT:
            A = n.WireType.Bit32;
    }
    return [
        A,
        i.ScalarType[e].toLowerCase()
    ];
}
exports.makeBinaryFormat = function() {
    return {
        makeReadOptions: u,
        makeWriteOptions: d,
        listUnknownFields (e) {
            var A;
            return null !== (A = e[l]) && void 0 !== A ? A : [];
        },
        discardUnknownFields (e) {
            delete e[l];
        },
        writeUnknownFields (e, A) {
            const t = e[l];
            if (t) for (const e of t)A.tag(e.no, e.wireType).raw(e.data);
        },
        onUnknownField (e, A, t, n) {
            const r = e;
            Array.isArray(r[l]) || (r[l] = []), r[l].push({
                no: A,
                wireType: t,
                data: n
            });
        },
        readMessage (e, A, t, r, o) {
            const s = e.getType(), a = o ? A.len : A.pos + t;
            let i, c;
            for(; A.pos < a && ([i, c] = A.tag(), !0 !== o || c != n.WireType.EndGroup);){
                const t = s.fields.find(i);
                if (!t) {
                    const t = A.skip(c, i);
                    r.readUnknownFields && this.onUnknownField(e, i, c, t);
                    continue;
                }
                I(e, A, t, c, r);
            }
            if (o && (c != n.WireType.EndGroup || i !== t)) throw new Error("invalid end group tag");
        },
        readField: I,
        writeMessage (e, A, t) {
            const n = e.getType();
            for (const r of n.fields.byNumber()){
                if (!(0, a.isFieldSet)(r, e)) {
                    if (r.req) throw new Error(`cannot encode field ${n.typeName}.${r.name} to binary: required field not set`);
                    continue;
                }
                C(r, r.oneof ? e[r.oneof.localName].value : e[r.localName], A, t);
            }
            return t.writeUnknownFields && this.writeUnknownFields(e, A), A;
        },
        writeField (e, A, t, n) {
            void 0 !== A && C(e, A, t, n);
        }
    };
}, exports.writeMapEntry = B;
