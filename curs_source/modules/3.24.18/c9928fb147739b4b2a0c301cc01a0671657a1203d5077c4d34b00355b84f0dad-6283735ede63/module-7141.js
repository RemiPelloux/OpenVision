Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.writeMapEntry = exports.makeBinaryFormat = void 0;
const s = require("./module-8831.js"), o = require("./module-2212.js"), r = require("./module-1455.js"), t = require("./module-3098.js"), i = require("./module-8803.js"), m = require("./module-3408.js"), l = require("./module-2706.js"), d = Symbol("@bufbuild/protobuf/unknown-fields"), c = {
    readUnknownFields: !0,
    readerFactory: (e)=>new s.BinaryReader(e)
}, T = {
    writeUnknownFields: !0,
    writerFactory: ()=>new s.BinaryWriter
};
function p(e) {
    return e ? Object.assign(Object.assign({}, c), e) : c;
}
function _(e) {
    return e ? Object.assign(Object.assign({}, T), e) : T;
}
function k(e, a, n, o, t) {
    let { repeated: i, localName: d } = n;
    switch(n.oneof && ((e = e[n.oneof.localName]).case != d && delete e.value, e.case = d, d = "value"), n.kind){
        case "scalar":
        case "enum":
            const c = "enum" == n.kind ? m.ScalarType.INT32 : n.T;
            let T = E;
            if ("scalar" == n.kind && n.L > 0 && (T = g), i) {
                let n = e[d];
                if (o == s.WireType.LengthDelimited && c != m.ScalarType.STRING && c != m.ScalarType.BYTES) {
                    let e = a.uint32() + a.pos;
                    for(; a.pos < e;)n.push(T(a, c));
                } else n.push(T(a, c));
            } else e[d] = T(a, c);
            break;
        case "message":
            const p = n.T;
            i ? e[d].push(u(a, new p, t, n)) : (0, l.isMessage)(e[d]) ? u(a, e[d], t, n) : (e[d] = u(a, new p, t, n), !p.fieldWrapper || n.oneof || n.repeated || (e[d] = p.fieldWrapper.unwrapField(e[d])));
            break;
        case "map":
            let [_, k] = function(e, a, n) {
                const s = a.uint32(), o = a.pos + s;
                let t, i;
                for(; a.pos < o;){
                    const [s] = a.tag();
                    switch(s){
                        case 1:
                            t = E(a, e.K);
                            break;
                        case 2:
                            switch(e.V.kind){
                                case "scalar":
                                    i = E(a, e.V.T);
                                    break;
                                case "enum":
                                    i = a.int32();
                                    break;
                                case "message":
                                    i = u(a, new e.V.T, n, void 0);
                            }
                    }
                }
                void 0 === t && (t = (0, r.scalarZeroValue)(e.K, m.LongType.BIGINT));
                "string" != typeof t && "number" != typeof t && (t = t.toString());
                if (void 0 === i) switch(e.V.kind){
                    case "scalar":
                        i = (0, r.scalarZeroValue)(e.V.T, m.LongType.BIGINT);
                        break;
                    case "enum":
                        i = e.V.T.values[0].no;
                        break;
                    case "message":
                        i = new e.V.T;
                }
                return [
                    t,
                    i
                ];
            }(n, a, t);
            e[d][_] = k;
    }
}
function u(e, a, n, s) {
    const o = a.getType().runtime.bin, r = null == s ? void 0 : s.delimited;
    return o.readMessage(a, e, r ? s.no : e.uint32(), n, r), a;
}
function g(e, a) {
    const n = E(e, a);
    return "bigint" == typeof n ? n.toString() : n;
}
function E(e, a) {
    switch(a){
        case m.ScalarType.STRING:
            return e.string();
        case m.ScalarType.BOOL:
            return e.bool();
        case m.ScalarType.DOUBLE:
            return e.double();
        case m.ScalarType.FLOAT:
            return e.float();
        case m.ScalarType.INT32:
            return e.int32();
        case m.ScalarType.INT64:
            return e.int64();
        case m.ScalarType.UINT64:
            return e.uint64();
        case m.ScalarType.FIXED64:
            return e.fixed64();
        case m.ScalarType.BYTES:
            return e.bytes();
        case m.ScalarType.FIXED32:
            return e.fixed32();
        case m.ScalarType.SFIXED32:
            return e.sfixed32();
        case m.ScalarType.SFIXED64:
            return e.sfixed64();
        case m.ScalarType.SINT64:
            return e.sint64();
        case m.ScalarType.UINT32:
            return e.uint32();
        case m.ScalarType.SINT32:
            return e.sint32();
    }
}
function v(e, a, n, o) {
    (0, t.assert)(void 0 !== a);
    const r = e.repeated;
    switch(e.kind){
        case "scalar":
        case "enum":
            let i = "enum" == e.kind ? m.ScalarType.INT32 : e.T;
            if (r) if ((0, t.assert)(Array.isArray(a)), e.packed) !function(e, a, n, o) {
                if (!o.length) return;
                e.tag(n, s.WireType.LengthDelimited).fork();
                let [, r] = I(a);
                for(let a = 0; a < o.length; a++)e[r](o[a]);
                e.join();
            }(n, i, e.no, a);
            else for (const s of a)R(n, i, e.no, s);
            else R(n, i, e.no, a);
            break;
        case "message":
            if (r) {
                (0, t.assert)(Array.isArray(a));
                for (const s of a)S(n, o, e, s);
            } else S(n, o, e, a);
            break;
        case "map":
            (0, t.assert)("object" == typeof a && null != a);
            for (const [s, r] of Object.entries(a))y(n, o, e, s, r);
    }
}
function y(e, a, n, o, r) {
    e.tag(n.no, s.WireType.LengthDelimited), e.fork();
    let i = o;
    switch(n.K){
        case m.ScalarType.INT32:
        case m.ScalarType.FIXED32:
        case m.ScalarType.UINT32:
        case m.ScalarType.SFIXED32:
        case m.ScalarType.SINT32:
            i = Number.parseInt(o);
            break;
        case m.ScalarType.BOOL:
            (0, t.assert)("true" == o || "false" == o), i = "true" == o;
    }
    switch(R(e, n.K, 1, i), n.V.kind){
        case "scalar":
            R(e, n.V.T, 2, r);
            break;
        case "enum":
            R(e, m.ScalarType.INT32, 2, r);
            break;
        case "message":
            (0, t.assert)(void 0 !== r), e.tag(2, s.WireType.LengthDelimited).bytes(r.toBinary(a));
    }
    e.join();
}
function S(e, a, n, r) {
    const t = (0, o.wrapField)(n.T, r);
    n.delimited ? e.tag(n.no, s.WireType.StartGroup).raw(t.toBinary(a)).tag(n.no, s.WireType.EndGroup) : e.tag(n.no, s.WireType.LengthDelimited).bytes(t.toBinary(a));
}
function R(e, a, n, s) {
    (0, t.assert)(void 0 !== s);
    let [o, r] = I(a);
    e.tag(n, o)[r](s);
}
function I(e) {
    let a = s.WireType.Varint;
    switch(e){
        case m.ScalarType.BYTES:
        case m.ScalarType.STRING:
            a = s.WireType.LengthDelimited;
            break;
        case m.ScalarType.DOUBLE:
        case m.ScalarType.FIXED64:
        case m.ScalarType.SFIXED64:
            a = s.WireType.Bit64;
            break;
        case m.ScalarType.FIXED32:
        case m.ScalarType.SFIXED32:
        case m.ScalarType.FLOAT:
            a = s.WireType.Bit32;
    }
    return [
        a,
        m.ScalarType[e].toLowerCase()
    ];
}
exports.makeBinaryFormat = function() {
    return {
        makeReadOptions: p,
        makeWriteOptions: _,
        listUnknownFields (e) {
            var a;
            return null !== (a = e[d]) && void 0 !== a ? a : [];
        },
        discardUnknownFields (e) {
            delete e[d];
        },
        writeUnknownFields (e, a) {
            const n = e[d];
            if (n) for (const e of n)a.tag(e.no, e.wireType).raw(e.data);
        },
        onUnknownField (e, a, n, s) {
            const o = e;
            Array.isArray(o[d]) || (o[d] = []), o[d].push({
                no: a,
                wireType: n,
                data: s
            });
        },
        readMessage (e, a, n, o, r) {
            const t = e.getType(), i = r ? a.len : a.pos + n;
            let m, l;
            for(; a.pos < i && ([m, l] = a.tag(), !0 !== r || l != s.WireType.EndGroup);){
                const n = t.fields.find(m);
                if (!n) {
                    const n = a.skip(l, m);
                    o.readUnknownFields && this.onUnknownField(e, m, l, n);
                    continue;
                }
                k(e, a, n, l, o);
            }
            if (r && (l != s.WireType.EndGroup || m !== n)) throw new Error("invalid end group tag");
        },
        readField: k,
        writeMessage (e, a, n) {
            const s = e.getType();
            for (const o of s.fields.byNumber()){
                if (!(0, i.isFieldSet)(o, e)) {
                    if (o.req) throw new Error(`cannot encode field ${s.typeName}.${o.name} to binary: required field not set`);
                    continue;
                }
                v(o, o.oneof ? e[o.oneof.localName].value : e[o.localName], a, n);
            }
            return n.writeUnknownFields && this.writeUnknownFields(e, a), a;
        },
        writeField (e, a, n, s) {
            void 0 !== a && v(e, a, n, s);
        }
    };
}, exports.writeMapEntry = y;
