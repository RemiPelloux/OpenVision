Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.writeMapEntry = exports.makeBinaryFormat = void 0;
const r = require("./module-831.js"), o = require("./module-212.js"), a = require("./module-455.js"), s = require("./module-98.js"), i = require("./module-803.js"), l = require("./module-408.js"), u = require("./module-706.js"), c = Symbol("@bufbuild/protobuf/unknown-fields"), m = {
    readUnknownFields: !0,
    readerFactory: (e)=>new r.BinaryReader(e)
}, p = {
    writeUnknownFields: !0,
    writerFactory: ()=>new r.BinaryWriter
};
function d(e) {
    return e ? Object.assign(Object.assign({}, m), e) : m;
}
function f(e) {
    return e ? Object.assign(Object.assign({}, p), e) : p;
}
function T(e, t, n, o, s) {
    let { repeated: i, localName: c } = n;
    switch(n.oneof && ((e = e[n.oneof.localName]).case != c && delete e.value, e.case = c, c = "value"), n.kind){
        case "scalar":
        case "enum":
            const m = "enum" == n.kind ? l.ScalarType.INT32 : n.T;
            let p = y;
            if ("scalar" == n.kind && n.L > 0 && (p = E), i) {
                let n = e[c];
                if (o == r.WireType.LengthDelimited && m != l.ScalarType.STRING && m != l.ScalarType.BYTES) {
                    let e = t.uint32() + t.pos;
                    for(; t.pos < e;)n.push(p(t, m));
                } else n.push(p(t, m));
            } else e[c] = p(t, m);
            break;
        case "message":
            const d = n.T;
            i ? e[c].push(g(t, new d, s, n)) : (0, u.isMessage)(e[c]) ? g(t, e[c], s, n) : (e[c] = g(t, new d, s, n), !d.fieldWrapper || n.oneof || n.repeated || (e[c] = d.fieldWrapper.unwrapField(e[c])));
            break;
        case "map":
            let [f, T] = function(e, t, n) {
                const r = t.uint32(), o = t.pos + r;
                let s, i;
                for(; t.pos < o;){
                    const [r] = t.tag();
                    switch(r){
                        case 1:
                            s = y(t, e.K);
                            break;
                        case 2:
                            switch(e.V.kind){
                                case "scalar":
                                    i = y(t, e.V.T);
                                    break;
                                case "enum":
                                    i = t.int32();
                                    break;
                                case "message":
                                    i = g(t, new e.V.T, n, void 0);
                            }
                    }
                }
                void 0 === s && (s = (0, a.scalarZeroValue)(e.K, l.LongType.BIGINT));
                "string" != typeof s && "number" != typeof s && (s = s.toString());
                if (void 0 === i) switch(e.V.kind){
                    case "scalar":
                        i = (0, a.scalarZeroValue)(e.V.T, l.LongType.BIGINT);
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
            }(n, t, s);
            e[c][f] = T;
    }
}
function g(e, t, n, r) {
    const o = t.getType().runtime.bin, a = null == r ? void 0 : r.delimited;
    return o.readMessage(t, e, a ? r.no : e.uint32(), n, a), t;
}
function E(e, t) {
    const n = y(e, t);
    return "bigint" == typeof n ? n.toString() : n;
}
function y(e, t) {
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
function h(e, t, n, o) {
    (0, s.assert)(void 0 !== t);
    const a = e.repeated;
    switch(e.kind){
        case "scalar":
        case "enum":
            let i = "enum" == e.kind ? l.ScalarType.INT32 : e.T;
            if (a) if ((0, s.assert)(Array.isArray(t)), e.packed) !function(e, t, n, o) {
                if (!o.length) return;
                e.tag(n, r.WireType.LengthDelimited).fork();
                let [, a] = S(t);
                for(let t = 0; t < o.length; t++)e[a](o[t]);
                e.join();
            }(n, i, e.no, t);
            else for (const r of t)I(n, i, e.no, r);
            else I(n, i, e.no, t);
            break;
        case "message":
            if (a) {
                (0, s.assert)(Array.isArray(t));
                for (const r of t)_(n, o, e, r);
            } else _(n, o, e, t);
            break;
        case "map":
            (0, s.assert)("object" == typeof t && null != t);
            for (const [r, a] of Object.entries(t))N(n, o, e, r, a);
    }
}
function N(e, t, n, o, a) {
    e.tag(n.no, r.WireType.LengthDelimited), e.fork();
    let i = o;
    switch(n.K){
        case l.ScalarType.INT32:
        case l.ScalarType.FIXED32:
        case l.ScalarType.UINT32:
        case l.ScalarType.SFIXED32:
        case l.ScalarType.SINT32:
            i = Number.parseInt(o);
            break;
        case l.ScalarType.BOOL:
            (0, s.assert)("true" == o || "false" == o), i = "true" == o;
    }
    switch(I(e, n.K, 1, i), n.V.kind){
        case "scalar":
            I(e, n.V.T, 2, a);
            break;
        case "enum":
            I(e, l.ScalarType.INT32, 2, a);
            break;
        case "message":
            (0, s.assert)(void 0 !== a), e.tag(2, r.WireType.LengthDelimited).bytes(a.toBinary(t));
    }
    e.join();
}
function _(e, t, n, a) {
    const s = (0, o.wrapField)(n.T, a);
    n.delimited ? e.tag(n.no, r.WireType.StartGroup).raw(s.toBinary(t)).tag(n.no, r.WireType.EndGroup) : e.tag(n.no, r.WireType.LengthDelimited).bytes(s.toBinary(t));
}
function I(e, t, n, r) {
    (0, s.assert)(void 0 !== r);
    let [o, a] = S(t);
    e.tag(n, o)[a](r);
}
function S(e) {
    let t = r.WireType.Varint;
    switch(e){
        case l.ScalarType.BYTES:
        case l.ScalarType.STRING:
            t = r.WireType.LengthDelimited;
            break;
        case l.ScalarType.DOUBLE:
        case l.ScalarType.FIXED64:
        case l.ScalarType.SFIXED64:
            t = r.WireType.Bit64;
            break;
        case l.ScalarType.FIXED32:
        case l.ScalarType.SFIXED32:
        case l.ScalarType.FLOAT:
            t = r.WireType.Bit32;
    }
    return [
        t,
        l.ScalarType[e].toLowerCase()
    ];
}
exports.makeBinaryFormat = function() {
    return {
        makeReadOptions: d,
        makeWriteOptions: f,
        listUnknownFields (e) {
            var t;
            return null !== (t = e[c]) && void 0 !== t ? t : [];
        },
        discardUnknownFields (e) {
            delete e[c];
        },
        writeUnknownFields (e, t) {
            const n = e[c];
            if (n) for (const e of n)t.tag(e.no, e.wireType).raw(e.data);
        },
        onUnknownField (e, t, n, r) {
            const o = e;
            Array.isArray(o[c]) || (o[c] = []), o[c].push({
                no: t,
                wireType: n,
                data: r
            });
        },
        readMessage (e, t, n, o, a) {
            const s = e.getType(), i = a ? t.len : t.pos + n;
            let l, u;
            for(; t.pos < i && ([l, u] = t.tag(), !0 !== a || u != r.WireType.EndGroup);){
                const n = s.fields.find(l);
                if (!n) {
                    const n = t.skip(u, l);
                    o.readUnknownFields && this.onUnknownField(e, l, u, n);
                    continue;
                }
                T(e, t, n, u, o);
            }
            if (a && (u != r.WireType.EndGroup || l !== n)) throw new Error("invalid end group tag");
        },
        readField: T,
        writeMessage (e, t, n) {
            const r = e.getType();
            for (const o of r.fields.byNumber()){
                if (!(0, i.isFieldSet)(o, e)) {
                    if (o.req) throw new Error(`cannot encode field ${r.typeName}.${o.name} to binary: required field not set`);
                    continue;
                }
                h(o, o.oneof ? e[o.oneof.localName].value : e[o.localName], t, n);
            }
            return n.writeUnknownFields && this.writeUnknownFields(e, t), t;
        },
        writeField (e, t, n, r) {
            void 0 !== t && h(e, t, n, r);
        }
    };
}, exports.writeMapEntry = N;
