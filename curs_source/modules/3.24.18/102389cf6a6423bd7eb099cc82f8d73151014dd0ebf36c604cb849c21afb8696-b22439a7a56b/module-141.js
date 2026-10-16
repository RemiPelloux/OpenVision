Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.writeMapEntry = exports.makeBinaryFormat = void 0;
const o = require("./module-831.js"), s = require("./module-212.js"), t = require("./module-455.js"), r = require("./module-98.js"), i = require("./module-803.js"), m = require("./module-408.js"), l = require("./module-706.js"), d = Symbol("@bufbuild/protobuf/unknown-fields"), c = {
    readUnknownFields: !0,
    readerFactory: (e)=>new o.BinaryReader(e)
}, T = {
    writeUnknownFields: !0,
    writerFactory: ()=>new o.BinaryWriter
};
function _(e) {
    return e ? Object.assign(Object.assign({}, c), e) : c;
}
function p(e) {
    return e ? Object.assign(Object.assign({}, T), e) : T;
}
function u(e, a, n, s, r) {
    let { repeated: i, localName: d } = n;
    switch(n.oneof && ((e = e[n.oneof.localName]).case != d && delete e.value, e.case = d, d = "value"), n.kind){
        case "scalar":
        case "enum":
            const c = "enum" == n.kind ? m.ScalarType.INT32 : n.T;
            let T = E;
            if ("scalar" == n.kind && n.L > 0 && (T = g), i) {
                let n = e[d];
                if (s == o.WireType.LengthDelimited && c != m.ScalarType.STRING && c != m.ScalarType.BYTES) {
                    let e = a.uint32() + a.pos;
                    for(; a.pos < e;)n.push(T(a, c));
                } else n.push(T(a, c));
            } else e[d] = T(a, c);
            break;
        case "message":
            const _ = n.T;
            i ? e[d].push(k(a, new _, r, n)) : (0, l.isMessage)(e[d]) ? k(a, e[d], r, n) : (e[d] = k(a, new _, r, n), !_.fieldWrapper || n.oneof || n.repeated || (e[d] = _.fieldWrapper.unwrapField(e[d])));
            break;
        case "map":
            let [p, u] = function(e, a, n) {
                const o = a.uint32(), s = a.pos + o;
                let r, i;
                for(; a.pos < s;){
                    const [o] = a.tag();
                    switch(o){
                        case 1:
                            r = E(a, e.K);
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
                                    i = k(a, new e.V.T, n, void 0);
                            }
                    }
                }
                void 0 === r && (r = (0, t.scalarZeroValue)(e.K, m.LongType.BIGINT));
                "string" != typeof r && "number" != typeof r && (r = r.toString());
                if (void 0 === i) switch(e.V.kind){
                    case "scalar":
                        i = (0, t.scalarZeroValue)(e.V.T, m.LongType.BIGINT);
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
            e[d][p] = u;
    }
}
function k(e, a, n, o) {
    const s = a.getType().runtime.bin, t = null == o ? void 0 : o.delimited;
    return s.readMessage(a, e, t ? o.no : e.uint32(), n, t), a;
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
function f(e, a, n, s) {
    (0, r.assert)(void 0 !== a);
    const t = e.repeated;
    switch(e.kind){
        case "scalar":
        case "enum":
            let i = "enum" == e.kind ? m.ScalarType.INT32 : e.T;
            if (t) if ((0, r.assert)(Array.isArray(a)), e.packed) !function(e, a, n, s) {
                if (!s.length) return;
                e.tag(n, o.WireType.LengthDelimited).fork();
                let [, t] = S(a);
                for(let a = 0; a < s.length; a++)e[t](s[a]);
                e.join();
            }(n, i, e.no, a);
            else for (const o of a)y(n, i, e.no, o);
            else y(n, i, e.no, a);
            break;
        case "message":
            if (t) {
                (0, r.assert)(Array.isArray(a));
                for (const o of a)v(n, s, e, o);
            } else v(n, s, e, a);
            break;
        case "map":
            (0, r.assert)("object" == typeof a && null != a);
            for (const [o, t] of Object.entries(a))N(n, s, e, o, t);
    }
}
function N(e, a, n, s, t) {
    e.tag(n.no, o.WireType.LengthDelimited), e.fork();
    let i = s;
    switch(n.K){
        case m.ScalarType.INT32:
        case m.ScalarType.FIXED32:
        case m.ScalarType.UINT32:
        case m.ScalarType.SFIXED32:
        case m.ScalarType.SINT32:
            i = Number.parseInt(s);
            break;
        case m.ScalarType.BOOL:
            (0, r.assert)("true" == s || "false" == s), i = "true" == s;
    }
    switch(y(e, n.K, 1, i), n.V.kind){
        case "scalar":
            y(e, n.V.T, 2, t);
            break;
        case "enum":
            y(e, m.ScalarType.INT32, 2, t);
            break;
        case "message":
            (0, r.assert)(void 0 !== t), e.tag(2, o.WireType.LengthDelimited).bytes(t.toBinary(a));
    }
    e.join();
}
function v(e, a, n, t) {
    const r = (0, s.wrapField)(n.T, t);
    n.delimited ? e.tag(n.no, o.WireType.StartGroup).raw(r.toBinary(a)).tag(n.no, o.WireType.EndGroup) : e.tag(n.no, o.WireType.LengthDelimited).bytes(r.toBinary(a));
}
function y(e, a, n, o) {
    (0, r.assert)(void 0 !== o);
    let [s, t] = S(a);
    e.tag(n, s)[t](o);
}
function S(e) {
    let a = o.WireType.Varint;
    switch(e){
        case m.ScalarType.BYTES:
        case m.ScalarType.STRING:
            a = o.WireType.LengthDelimited;
            break;
        case m.ScalarType.DOUBLE:
        case m.ScalarType.FIXED64:
        case m.ScalarType.SFIXED64:
            a = o.WireType.Bit64;
            break;
        case m.ScalarType.FIXED32:
        case m.ScalarType.SFIXED32:
        case m.ScalarType.FLOAT:
            a = o.WireType.Bit32;
    }
    return [
        a,
        m.ScalarType[e].toLowerCase()
    ];
}
exports.makeBinaryFormat = function() {
    return {
        makeReadOptions: _,
        makeWriteOptions: p,
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
        onUnknownField (e, a, n, o) {
            const s = e;
            Array.isArray(s[d]) || (s[d] = []), s[d].push({
                no: a,
                wireType: n,
                data: o
            });
        },
        readMessage (e, a, n, s, t) {
            const r = e.getType(), i = t ? a.len : a.pos + n;
            let m, l;
            for(; a.pos < i && ([m, l] = a.tag(), !0 !== t || l != o.WireType.EndGroup);){
                const n = r.fields.find(m);
                if (!n) {
                    const n = a.skip(l, m);
                    s.readUnknownFields && this.onUnknownField(e, m, l, n);
                    continue;
                }
                u(e, a, n, l, s);
            }
            if (t && (l != o.WireType.EndGroup || m !== n)) throw new Error("invalid end group tag");
        },
        readField: u,
        writeMessage (e, a, n) {
            const o = e.getType();
            for (const s of o.fields.byNumber()){
                if (!(0, i.isFieldSet)(s, e)) {
                    if (s.req) throw new Error(`cannot encode field ${o.typeName}.${s.name} to binary: required field not set`);
                    continue;
                }
                f(s, s.oneof ? e[s.oneof.localName].value : e[s.localName], a, n);
            }
            return n.writeUnknownFields && this.writeUnknownFields(e, a), a;
        },
        writeField (e, a, n, o) {
            void 0 !== a && f(e, a, n, o);
        }
    };
}, exports.writeMapEntry = N;
