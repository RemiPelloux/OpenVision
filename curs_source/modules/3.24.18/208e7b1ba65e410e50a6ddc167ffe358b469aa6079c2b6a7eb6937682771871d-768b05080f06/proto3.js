import { SM, YS, ej, jr } from "./binary-encoding.js";
import { LM, UM, Wc } from "./binary-format.js";
import { aj } from "./create-registry-from-desc.js";
import { yM } from "./enum.js";
import { Oj, xM } from "./field-list.js";
import { jj } from "./field-normalize.js";
import { Lj, Vj, vn } from "./field.js";
import { Ch, DM, NM, Rh } from "./json-format.js";
import { fe } from "./message.js";
import { xj } from "./names.js";
import { zd } from "./proto-base64.js";
import { In } from "./proto-int64.js";
import { Dj } from "./proto-runtime.js";
import { V, go } from "./scalar.js";
import { _o } from "./scalars.js";
import { h } from "./tslib.es6.js";
function oj(e, t, n, r) {
    e[yM] = cj(t, n.map((s)=>({
            no: s.no,
            name: s.name,
            localName: e[s.no]
        })), r);
}
function cj(e, t, n) {
    const r = Object.create(null), s = Object.create(null), i = [];
    for (const a of t){
        const o = lj(a);
        i.push(o), r[a.name] = o, s[a.no] = o;
    }
    return {
        typeName: e,
        values: i,
        findName (a) {
            return r[a];
        },
        findNumber (a) {
            return s[a];
        }
    };
}
function wje(e, t, n) {
    const r = {};
    for (const s of t){
        const i = lj(s);
        r[i.localName] = i.no, r[i.no] = i.localName;
    }
    return oj(r, e, t, n), r;
}
function lj(e) {
    return "localName" in e ? e : {
        ...e,
        localName: e.name
    };
}
function Eje(e, t, n, r) {
    const s = r?.localName ?? t.substring(t.lastIndexOf(".") + 1), i = {
        [s]: function(a) {
            e.util.initFields(this), e.util.initPartial(a, this);
        }
    }[s];
    return Object.setPrototypeOf(i.prototype, new fe), Object.assign(i, {
        runtime: e,
        typeName: t,
        fields: e.util.newFieldList(n),
        fromBinary (a, o) {
            return new i().fromBinary(a, o);
        },
        fromJson (a, o) {
            return new i().fromJson(a, o);
        },
        fromJsonString (a, o) {
            return new i().fromJsonString(a, o);
        },
        equals (a, o) {
            return e.util.equals(i, a, o);
        }
    }), i;
}
function fo(e, t, n) {
    if (t === n) return !0;
    if (e == V.BYTES) {
        if (!(t instanceof Uint8Array) || !(n instanceof Uint8Array) || t.length !== n.length) return !1;
        for(let r = 0; r < t.length; r++)if (t[r] !== n[r]) return !1;
        return !0;
    }
    switch(e){
        case V.UINT64:
        case V.FIXED64:
        case V.INT64:
        case V.SFIXED64:
        case V.SINT64:
            return t == n;
    }
    return !1;
}
function Kd(e, t) {
    switch(e){
        case V.BOOL:
            return !1;
        case V.UINT64:
        case V.FIXED64:
        case V.INT64:
        case V.SFIXED64:
        case V.SINT64:
            return t == 0 ? In.zero : "0";
        case V.DOUBLE:
        case V.FLOAT:
            return 0;
        case V.BYTES:
            return new Uint8Array(0);
        case V.STRING:
            return "";
        default:
            return 0;
    }
}
function gj(e, t) {
    switch(e){
        case V.BOOL:
            return t === !1;
        case V.STRING:
            return t === "";
        case V.BYTES:
            return t instanceof Uint8Array && !t.byteLength;
        default:
            return t == 0;
    }
}
function Pje(e, t, n, r) {
    let s;
    return {
        typeName: t,
        extendee: n,
        get field () {
            if (!s) {
                const i = typeof r == "function" ? r() : r;
                i.name = t.split(".").pop(), i.jsonName = `[${t}]`, s = e.util.newFieldList([
                    i
                ]).list()[0];
            }
            return s;
        },
        runtime: e
    };
}
function fj(e) {
    const t = e.field.localName, n = Object.create(null);
    return n[t] = Nje(e), [
        n,
        ()=>n[t]
    ];
}
function Nje(e) {
    const t = e.field;
    if (t.repeated) return [];
    if (t.default !== void 0) return t.default;
    switch(t.kind){
        case "enum":
            return t.T.values[0].no;
        case "scalar":
            return Kd(t.T, t.L);
        case "message":
            const n = t.T, r = new n;
            return n.fieldWrapper ? n.fieldWrapper.unwrapField(r) : r;
        case "map":
            throw "map fields are not allowed to be extensions";
    }
}
function Dje(e, t) {
    if (!t.repeated && (t.kind == "enum" || t.kind == "scalar")) {
        for(let n = e.length - 1; n >= 0; --n)if (e[n].no == t.no) return [
            e[n]
        ];
        return [];
    }
    return e.filter((n)=>n.no === t.no);
}
function Oje(e, t, n) {
    vj(t, e);
    const r = t.runtime.bin.makeReadOptions(n), s = Dje(e.getType().runtime.bin.listUnknownFields(e), t.field), [i, a] = fj(t);
    for (const o of s)t.runtime.bin.readField(i, r.readerFactory(o.data), t.field, o.wireType, r);
    return a();
}
function Lje(e, t, n, r) {
    vj(t, e);
    const s = t.runtime.bin.makeReadOptions(r), i = t.runtime.bin.makeWriteOptions(r);
    if (_j(e, t)) {
        const d = e.getType().runtime.bin.listUnknownFields(e).filter((u)=>u.no != t.field.no);
        e.getType().runtime.bin.discardUnknownFields(e);
        for (const u of d)e.getType().runtime.bin.onUnknownField(e, u.no, u.wireType, u.data);
    }
    const a = i.writerFactory();
    let o = t.field;
    !o.opt && !o.repeated && (o.kind == "enum" || o.kind == "scalar") && (o = {
        ...t.field,
        opt: !0
    }), t.runtime.bin.writeField(o, n, a, i);
    const l = s.readerFactory(a.finish());
    for(; l.pos < l.len;){
        const [d, u] = l.tag(), m = l.skip(u, d);
        e.getType().runtime.bin.onUnknownField(e, d, u, m);
    }
}
function _j(e, t) {
    const n = e.getType();
    return t.extendee.typeName === n.typeName && !!n.runtime.bin.listUnknownFields(e).find((r)=>r.no == t.field.no);
}
function vj(e, t) {
    vn(e.extendee.typeName == t.getType().typeName, `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`);
}
function kj(e, t) {
    const n = e.localName;
    if (e.repeated) return t[n].length > 0;
    if (e.oneof) return t[e.oneof.localName].case === n;
    switch(e.kind){
        case "enum":
        case "scalar":
            return e.opt || e.req ? t[n] !== void 0 : e.kind == "enum" ? t[n] !== e.T.values[0].no : !gj(e.T, t[n]);
        case "message":
            return t[n] !== void 0;
        case "map":
            return Object.keys(t[n]).length > 0;
    }
}
function Sj(e, t) {
    const n = e.localName, r = !e.opt && !e.req;
    if (e.repeated) t[n] = [];
    else if (e.oneof) t[e.oneof.localName] = {
        case: void 0
    };
    else switch(e.kind){
        case "map":
            t[n] = {};
            break;
        case "enum":
            t[n] = r ? e.T.values[0].no : void 0;
            break;
        case "scalar":
            t[n] = r ? Kd(e.T, e.L) : void 0;
            break;
        case "message":
            t[n] = void 0;
            break;
    }
}
function Fc(e, t) {
    if (e === null || typeof e != "object" || !Object.getOwnPropertyNames(fe.prototype).every((r)=>r in e && typeof e[r] == "function")) return !1;
    const n = e.getType();
    return n === null || typeof n != "function" || !("typeName" in n) || typeof n.typeName != "string" ? !1 : t === void 0 ? !0 : n.typeName == t.typeName;
}
function wj(e, t) {
    const n = Fc(t);
    return !n && !e.fieldWrapper ? new e(t) : n || !e.fieldWrapper ? t : e.fieldWrapper.wrapField(t);
}
function xje(e) {
    return e ? {
        ...NM,
        ...e
    } : NM;
}
function Fje(e) {
    return e ? {
        ...DM,
        ...e
    } : DM;
}
function Wje() {
    return {
        makeReadOptions: xje,
        makeWriteOptions: Fje,
        readMessage (e, t, n, r) {
            if (t == null || Array.isArray(t) || typeof t != "object") throw new Error(`cannot decode message ${e.typeName} from JSON: ${Hi(t)}`);
            r = r ?? new e;
            const s = new Map, i = n.typeRegistry;
            for (const [a, o] of Object.entries(t)){
                const l = e.fields.findJsonName(a);
                if (l) {
                    if (l.oneof) {
                        if (o === null && l.kind == "scalar") continue;
                        const d = s.get(l.oneof);
                        if (d !== void 0) throw new Error(`cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${l.oneof.name}" present: "${d}", "${a}"`);
                        s.set(l.oneof, a);
                    }
                    Ej(r, o, l, n, e);
                } else {
                    let d = !1;
                    if (i?.findExtension && a.startsWith("[") && a.endsWith("]")) {
                        const u = i.findExtension(a.substring(1, a.length - 1));
                        if (u && u.extendee.typeName == e.typeName) {
                            d = !0;
                            const [m, f] = fj(u);
                            Ej(m, o, u.field, n, u), Lje(r, u, f(), n);
                        }
                    }
                    if (!d && !n.ignoreUnknownFields) throw new Error(`cannot decode message ${e.typeName} from JSON: key "${a}" is unknown`);
                }
            }
            return r;
        },
        writeMessage (e, t) {
            const n = e.getType(), r = {};
            let s;
            try {
                for (s of n.fields.byNumber()){
                    if (!kj(s, e)) {
                        if (s.req) throw "required field not set";
                        if (!t.emitDefaultValues || !Gje(s)) continue;
                    }
                    const a = s.oneof ? e[s.oneof.localName].value : e[s.localName], o = bj(s, a, t);
                    o !== void 0 && (r[t.useProtoFieldName ? s.name : s.jsonName] = o);
                }
                const i = t.typeRegistry;
                if (i?.findExtensionFor) for (const a of n.runtime.bin.listUnknownFields(e)){
                    const o = i.findExtensionFor(n.typeName, a.no);
                    if (o && _j(e, o)) {
                        const l = Oje(e, o, t), d = bj(o.field, l, t);
                        d !== void 0 && (r[o.field.jsonName] = d);
                    }
                }
            } catch (i) {
                const a = s ? `cannot encode field ${n.typeName}.${s.name} to JSON` : `cannot encode message ${n.typeName} to JSON`, o = i instanceof Error ? i.message : String(i);
                throw new Error(a + (o.length > 0 ? `: ${o}` : ""));
            }
            return r;
        },
        readScalar (e, t, n) {
            return bh(e, t, n ?? go.BIGINT, !0);
        },
        writeScalar (e, t, n) {
            if (t !== void 0 && (n || gj(e, t))) return JS(e, t);
        },
        debug: Hi
    };
}
function Hi(e) {
    if (e === null) return "null";
    switch(typeof e){
        case "object":
            return Array.isArray(e) ? "array" : "object";
        case "string":
            return e.length > 100 ? "string" : `"${e.split('"').join('\\"')}"`;
        default:
            return String(e);
    }
}
function Ej(e, t, n, r, s) {
    let i = n.localName;
    if (n.repeated) {
        if (vn(n.kind != "map"), t === null) return;
        if (!Array.isArray(t)) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: ${Hi(t)}`);
        const a = e[i];
        for (const o of t){
            if (o === null) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: ${Hi(o)}`);
            switch(n.kind){
                case "message":
                    a.push(n.T.fromJson(o, r));
                    break;
                case "enum":
                    const l = MM(n.T, o, r.ignoreUnknownFields, !0);
                    l !== Ch && a.push(l);
                    break;
                case "scalar":
                    try {
                        a.push(bh(n.T, o, n.L, !0));
                    } catch (d) {
                        let u = `cannot decode field ${s.typeName}.${n.name} from JSON: ${Hi(o)}`;
                        throw d instanceof Error && d.message.length > 0 && (u += `: ${d.message}`), new Error(u);
                    }
                    break;
            }
        }
    } else if (n.kind == "map") {
        if (t === null) return;
        if (typeof t != "object" || Array.isArray(t)) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: ${Hi(t)}`);
        const a = e[i];
        for (const [o, l] of Object.entries(t)){
            if (l === null) throw new Error(`cannot decode field ${s.typeName}.${n.name} from JSON: map value null`);
            let d;
            try {
                d = Bje(n.K, o);
            } catch (u) {
                let m = `cannot decode map key for field ${s.typeName}.${n.name} from JSON: ${Hi(t)}`;
                throw u instanceof Error && u.message.length > 0 && (m += `: ${u.message}`), new Error(m);
            }
            switch(n.V.kind){
                case "message":
                    a[d] = n.V.T.fromJson(l, r);
                    break;
                case "enum":
                    const u = MM(n.V.T, l, r.ignoreUnknownFields, !0);
                    u !== Ch && (a[d] = u);
                    break;
                case "scalar":
                    try {
                        a[d] = bh(n.V.T, l, go.BIGINT, !0);
                    } catch (m) {
                        let f = `cannot decode map value for field ${s.typeName}.${n.name} from JSON: ${Hi(t)}`;
                        throw m instanceof Error && m.message.length > 0 && (f += `: ${m.message}`), new Error(f);
                    }
                    break;
            }
        }
    } else switch(n.oneof && (e = e[n.oneof.localName] = {
        case: i
    }, i = "value"), n.kind){
        case "message":
            const a = n.T;
            if (t === null && a.typeName != "google.protobuf.Value") return;
            let o = e[i];
            Fc(o) ? o.fromJson(t, r) : (e[i] = o = a.fromJson(t, r), a.fieldWrapper && !n.oneof && (e[i] = a.fieldWrapper.unwrapField(o)));
            break;
        case "enum":
            const l = MM(n.T, t, r.ignoreUnknownFields, !1);
            switch(l){
                case Rh:
                    Sj(n, e);
                    break;
                case Ch:
                    break;
                default:
                    e[i] = l;
                    break;
            }
            break;
        case "scalar":
            try {
                const d = bh(n.T, t, n.L, !1);
                switch(d){
                    case Rh:
                        Sj(n, e);
                        break;
                    default:
                        e[i] = d;
                        break;
                }
            } catch (d) {
                let u = `cannot decode field ${s.typeName}.${n.name} from JSON: ${Hi(t)}`;
                throw d instanceof Error && d.message.length > 0 && (u += `: ${d.message}`), new Error(u);
            }
            break;
    }
}
function Bje(e, t) {
    if (e === V.BOOL) switch(t){
        case "true":
            t = !0;
            break;
        case "false":
            t = !1;
            break;
    }
    return bh(e, t, go.BIGINT, !0).toString();
}
function bh(e, t, n, r) {
    if (t === null) return r ? Kd(e, n) : Rh;
    switch(e){
        case V.DOUBLE:
        case V.FLOAT:
            if (t === "NaN") return Number.NaN;
            if (t === "Infinity") return Number.POSITIVE_INFINITY;
            if (t === "-Infinity") return Number.NEGATIVE_INFINITY;
            if (t === "" || typeof t == "string" && t.trim().length !== t.length || typeof t != "string" && typeof t != "number") break;
            const s = Number(t);
            if (Number.isNaN(s) || !Number.isFinite(s)) break;
            return e == V.FLOAT && ej(s), s;
        case V.INT32:
        case V.FIXED32:
        case V.SFIXED32:
        case V.SINT32:
        case V.UINT32:
            let i;
            if (typeof t == "number" ? i = t : typeof t == "string" && t.length > 0 && t.trim().length === t.length && (i = Number(t)), i === void 0) break;
            return e == V.UINT32 || e == V.FIXED32 ? SM(i) : YS(i), i;
        case V.INT64:
        case V.SFIXED64:
        case V.SINT64:
            if (typeof t != "number" && typeof t != "string") break;
            const a = In.parse(t);
            return n ? a.toString() : a;
        case V.FIXED64:
        case V.UINT64:
            if (typeof t != "number" && typeof t != "string") break;
            const o = In.uParse(t);
            return n ? o.toString() : o;
        case V.BOOL:
            if (typeof t != "boolean") break;
            return t;
        case V.STRING:
            if (typeof t != "string") break;
            try {
                encodeURIComponent(t);
            } catch  {
                throw new Error("invalid UTF8");
            }
            return t;
        case V.BYTES:
            if (t === "") return new Uint8Array(0);
            if (typeof t != "string") break;
            return zd.dec(t);
    }
    throw new Error;
}
function MM(e, t, n, r) {
    if (t === null) return e.typeName == "google.protobuf.NullValue" ? 0 : r ? e.values[0].no : Rh;
    switch(typeof t){
        case "number":
            if (Number.isInteger(t)) return t;
            break;
        case "string":
            const s = e.findName(t);
            if (s !== void 0) return s.no;
            if (n) return Ch;
            break;
    }
    throw new Error(`cannot decode enum ${e.typeName} from JSON: ${Hi(t)}`);
}
function Gje(e) {
    return e.repeated || e.kind == "map" ? !0 : !(e.oneof || e.kind == "message" || e.opt || e.req);
}
function bj(e, t, n) {
    if (e.kind == "map") {
        vn(typeof t == "object" && t != null);
        const r = {}, s = Object.entries(t);
        switch(e.V.kind){
            case "scalar":
                for (const [a, o] of s)r[a.toString()] = JS(e.V.T, o);
                break;
            case "message":
                for (const [a, o] of s)r[a.toString()] = o.toJson(n);
                break;
            case "enum":
                const i = e.V.T;
                for (const [a, o] of s)r[a.toString()] = PM(i, o, n.enumAsInteger);
                break;
        }
        return n.emitDefaultValues || s.length > 0 ? r : void 0;
    }
    if (e.repeated) {
        vn(Array.isArray(t));
        const r = [];
        switch(e.kind){
            case "scalar":
                for(let s = 0; s < t.length; s++)r.push(JS(e.T, t[s]));
                break;
            case "enum":
                for(let s = 0; s < t.length; s++)r.push(PM(e.T, t[s], n.enumAsInteger));
                break;
            case "message":
                for(let s = 0; s < t.length; s++)r.push(t[s].toJson(n));
                break;
        }
        return n.emitDefaultValues || r.length > 0 ? r : void 0;
    }
    switch(e.kind){
        case "scalar":
            return JS(e.T, t);
        case "enum":
            return PM(e.T, t, n.enumAsInteger);
        case "message":
            return wj(e.T, t).toJson(n);
    }
}
function PM(e, t, n) {
    return vn(typeof t == "number"), e.typeName == "google.protobuf.NullValue" ? null : n ? t : e.findNumber(t)?.name ?? t;
}
function JS(e, t) {
    switch(e){
        case V.INT32:
        case V.SFIXED32:
        case V.SINT32:
        case V.FIXED32:
        case V.UINT32:
            return vn(typeof t == "number"), t;
        case V.FLOAT:
        case V.DOUBLE:
            return vn(typeof t == "number"), Number.isNaN(t) ? "NaN" : t === Number.POSITIVE_INFINITY ? "Infinity" : t === Number.NEGATIVE_INFINITY ? "-Infinity" : t;
        case V.STRING:
            return vn(typeof t == "string"), t;
        case V.BOOL:
            return vn(typeof t == "boolean"), t;
        case V.UINT64:
        case V.FIXED64:
        case V.INT64:
        case V.SFIXED64:
        case V.SINT64:
            return vn(typeof t == "bigint" || typeof t == "string" || typeof t == "number"), t.toString();
        case V.BYTES:
            return vn(t instanceof Uint8Array), zd.enc(t);
    }
}
function $je(e) {
    return e ? {
        ...LM,
        ...e
    } : LM;
}
function jje(e) {
    return e ? {
        ...UM,
        ...e
    } : UM;
}
function Hje() {
    return {
        makeReadOptions: $je,
        makeWriteOptions: jje,
        listUnknownFields (e) {
            return e[Wc] ?? [];
        },
        discardUnknownFields (e) {
            delete e[Wc];
        },
        writeUnknownFields (e, t) {
            const r = e[Wc];
            if (r) for (const s of r)t.tag(s.no, s.wireType).raw(s.data);
        },
        onUnknownField (e, t, n, r) {
            const s = e;
            Array.isArray(s[Wc]) || (s[Wc] = []), s[Wc].push({
                no: t,
                wireType: n,
                data: new Uint8Array(r)
            });
        },
        readMessage (e, t, n, r, s) {
            const i = e.getType(), a = s ? t.len : t.pos + n;
            let o, l;
            for(; t.pos < a && ([o, l] = t.tag(), !(s === !0 && l == jr.EndGroup));){
                const d = i.fields.find(o);
                if (!d) {
                    const u = t.skip(l, o);
                    r.readUnknownFields && this.onUnknownField(e, o, l, u);
                    continue;
                }
                Ij(e, t, d, l, r);
            }
            if (s && (l != jr.EndGroup || o !== n)) throw new Error("invalid end group tag");
        },
        readField: Ij,
        writeMessage (e, t, n) {
            const r = e.getType();
            for (const s of r.fields.byNumber()){
                if (!kj(s, e)) {
                    if (s.req) throw new Error(`cannot encode field ${r.typeName}.${s.name} to binary: required field not set`);
                    continue;
                }
                const i = s.oneof ? e[s.oneof.localName].value : e[s.localName];
                Aj(s, i, t, n);
            }
            return n.writeUnknownFields && this.writeUnknownFields(e, t), t;
        },
        writeField (e, t, n, r) {
            t !== void 0 && Aj(e, t, n, r);
        }
    };
}
function Ij(e, t, n, r, s) {
    let { repeated: i, localName: a } = n;
    switch(n.oneof && (e = e[n.oneof.localName], e.case != a && delete e.value, e.case = a, a = "value"), n.kind){
        case "scalar":
        case "enum":
            const o = n.kind == "enum" ? V.INT32 : n.T;
            let l = QS;
            if (n.kind == "scalar" && n.L > 0 && (l = Kje), i) {
                let f = e[a];
                if (r == jr.LengthDelimited && o != V.STRING && o != V.BYTES) {
                    let T = t.uint32() + t.pos;
                    for(; t.pos < T;)f.push(l(t, o));
                } else f.push(l(t, o));
            } else e[a] = l(t, o);
            break;
        case "message":
            const d = n.T;
            i ? e[a].push(XS(t, new d, s, n)) : Fc(e[a]) ? XS(t, e[a], s, n) : (e[a] = XS(t, new d, s, n), d.fieldWrapper && !n.oneof && !n.repeated && (e[a] = d.fieldWrapper.unwrapField(e[a])));
            break;
        case "map":
            let [u, m] = qje(n, t, s);
            e[a][u] = m;
            break;
    }
}
function XS(e, t, n, r) {
    const s = t.getType().runtime.bin, i = r?.delimited;
    return s.readMessage(t, e, i ? r.no : e.uint32(), n, i), t;
}
function qje(e, t, n) {
    const r = t.uint32(), s = t.pos + r;
    let i, a;
    for(; t.pos < s;){
        const [o] = t.tag();
        switch(o){
            case 1:
                i = QS(t, e.K);
                break;
            case 2:
                switch(e.V.kind){
                    case "scalar":
                        a = QS(t, e.V.T);
                        break;
                    case "enum":
                        a = t.int32();
                        break;
                    case "message":
                        a = XS(t, new e.V.T, n, void 0);
                        break;
                }
                break;
        }
    }
    if (i === void 0 && (i = Kd(e.K, go.BIGINT)), typeof i != "string" && typeof i != "number" && (i = i.toString()), a === void 0) switch(e.V.kind){
        case "scalar":
            a = Kd(e.V.T, go.BIGINT);
            break;
        case "enum":
            a = e.V.T.values[0].no;
            break;
        case "message":
            a = new e.V.T;
            break;
    }
    return [
        i,
        a
    ];
}
function Kje(e, t) {
    const n = QS(e, t);
    return typeof n == "bigint" ? n.toString() : n;
}
function QS(e, t) {
    switch(t){
        case V.STRING:
            return e.string();
        case V.BOOL:
            return e.bool();
        case V.DOUBLE:
            return e.double();
        case V.FLOAT:
            return e.float();
        case V.INT32:
            return e.int32();
        case V.INT64:
            return e.int64();
        case V.UINT64:
            return e.uint64();
        case V.FIXED64:
            return e.fixed64();
        case V.BYTES:
            return e.bytes();
        case V.FIXED32:
            return e.fixed32();
        case V.SFIXED32:
            return e.sfixed32();
        case V.SFIXED64:
            return e.sfixed64();
        case V.SINT64:
            return e.sint64();
        case V.UINT32:
            return e.uint32();
        case V.SINT32:
            return e.sint32();
    }
}
function Aj(e, t, n, r) {
    vn(t !== void 0);
    const s = e.repeated;
    switch(e.kind){
        case "scalar":
        case "enum":
            let i = e.kind == "enum" ? V.INT32 : e.T;
            if (s) if (vn(Array.isArray(t)), e.packed) Yje(n, i, e.no, t);
            else for (const a of t)Ih(n, i, e.no, a);
            else Ih(n, i, e.no, t);
            break;
        case "message":
            if (s) {
                vn(Array.isArray(t));
                for (const a of t)Mj(n, r, e, a);
            } else Mj(n, r, e, t);
            break;
        case "map":
            vn(typeof t == "object" && t != null);
            for (const [a, o] of Object.entries(t))zje(n, r, e, a, o);
            break;
    }
}
function zje(e, t, n, r, s) {
    e.tag(n.no, jr.LengthDelimited), e.fork();
    let i = r;
    switch(n.K){
        case V.INT32:
        case V.FIXED32:
        case V.UINT32:
        case V.SFIXED32:
        case V.SINT32:
            i = Number.parseInt(r);
            break;
        case V.BOOL:
            vn(r == "true" || r == "false"), i = r == "true";
            break;
    }
    switch(Ih(e, n.K, 1, i), n.V.kind){
        case "scalar":
            Ih(e, n.V.T, 2, s);
            break;
        case "enum":
            Ih(e, V.INT32, 2, s);
            break;
        case "message":
            vn(s !== void 0), e.tag(2, jr.LengthDelimited).bytes(s.toBinary(t));
            break;
    }
    e.join();
}
function Mj(e, t, n, r) {
    const s = wj(n.T, r);
    n.delimited ? e.tag(n.no, jr.StartGroup).raw(s.toBinary(t)).tag(n.no, jr.EndGroup) : e.tag(n.no, jr.LengthDelimited).bytes(s.toBinary(t));
}
function Ih(e, t, n, r) {
    vn(r !== void 0);
    let [s, i] = Pj(t);
    e.tag(n, s)[i](r);
}
function Yje(e, t, n, r) {
    if (!r.length) return;
    e.tag(n, jr.LengthDelimited).fork();
    let [, s] = Pj(t);
    for(let i = 0; i < r.length; i++)e[s](r[i]);
    e.join();
}
function Pj(e) {
    let t = jr.Varint;
    switch(e){
        case V.BYTES:
        case V.STRING:
            t = jr.LengthDelimited;
            break;
        case V.DOUBLE:
        case V.FIXED64:
        case V.SFIXED64:
            t = jr.Bit64;
            break;
        case V.FIXED32:
        case V.SFIXED32:
        case V.FLOAT:
            t = jr.Bit32;
            break;
    }
    const n = V[e].toLowerCase();
    return [
        t,
        n
    ];
}
function Xje() {
    return {
        setEnumType: oj,
        initPartial (e, t) {
            if (e === void 0) return;
            const n = t.getType();
            for (const r of n.fields.byMember()){
                const s = r.localName, i = t, a = e;
                if (a[s] != null) switch(r.kind){
                    case "oneof":
                        const o = a[s].case;
                        if (o === void 0) continue;
                        const l = r.findField(o);
                        let d = a[s].value;
                        l && l.kind == "message" && !Fc(d, l.T) ? d = new l.T(d) : l && l.kind === "scalar" && l.T === V.BYTES && (d = Ah(d)), i[s] = {
                            case: o,
                            value: d
                        };
                        break;
                    case "scalar":
                    case "enum":
                        let u = a[s];
                        r.T === V.BYTES && (u = r.repeated ? u.map(Ah) : Ah(u)), i[s] = u;
                        break;
                    case "map":
                        switch(r.V.kind){
                            case "scalar":
                            case "enum":
                                if (r.V.T === V.BYTES) for (const [v, T] of Object.entries(a[s]))i[s][v] = Ah(T);
                                else Object.assign(i[s], a[s]);
                                break;
                            case "message":
                                const f = r.V.T;
                                for (const v of Object.keys(a[s])){
                                    let T = a[s][v];
                                    f.fieldWrapper || (T = new f(T)), i[s][v] = T;
                                }
                                break;
                        }
                        break;
                    case "message":
                        const m = r.T;
                        if (r.repeated) i[s] = a[s].map((f)=>Fc(f, m) ? f : new m(f));
                        else {
                            const f = a[s];
                            m.fieldWrapper ? m.typeName === "google.protobuf.BytesValue" ? i[s] = Ah(f) : i[s] = f : i[s] = Fc(f, m) ? f : new m(f);
                        }
                        break;
                }
            }
        },
        equals (e, t, n) {
            return t === n ? !0 : !t || !n ? !1 : e.fields.byMember().every((r)=>{
                const s = t[r.localName], i = n[r.localName];
                if (r.repeated) {
                    if (s.length !== i.length) return !1;
                    switch(r.kind){
                        case "message":
                            return s.every((a, o)=>r.T.equals(a, i[o]));
                        case "scalar":
                            return s.every((a, o)=>fo(r.T, a, i[o]));
                        case "enum":
                            return s.every((a, o)=>fo(V.INT32, a, i[o]));
                    }
                    throw new Error(`repeated cannot contain ${r.kind}`);
                }
                switch(r.kind){
                    case "message":
                        return r.T.equals(s, i);
                    case "enum":
                        return fo(V.INT32, s, i);
                    case "scalar":
                        return fo(r.T, s, i);
                    case "oneof":
                        if (s.case !== i.case) return !1;
                        const a = r.findField(s.case);
                        if (a === void 0) return !0;
                        switch(a.kind){
                            case "message":
                                return a.T.equals(s.value, i.value);
                            case "enum":
                                return fo(V.INT32, s.value, i.value);
                            case "scalar":
                                return fo(a.T, s.value, i.value);
                        }
                        throw new Error(`oneof cannot contain ${a.kind}`);
                    case "map":
                        const o = Object.keys(s).concat(Object.keys(i));
                        switch(r.V.kind){
                            case "message":
                                const l = r.V.T;
                                return o.every((u)=>l.equals(s[u], i[u]));
                            case "enum":
                                return o.every((u)=>fo(V.INT32, s[u], i[u]));
                            case "scalar":
                                const d = r.V.T;
                                return o.every((u)=>fo(d, s[u], i[u]));
                        }
                        break;
                }
            });
        },
        clone (e) {
            const t = e.getType(), n = new t, r = n;
            for (const s of t.fields.byMember()){
                const i = e[s.localName];
                let a;
                if (s.repeated) a = i.map(ZS);
                else if (s.kind == "map") {
                    a = r[s.localName];
                    for (const [o, l] of Object.entries(i))a[o] = ZS(l);
                } else s.kind == "oneof" ? a = s.findField(i.case) ? {
                    case: i.case,
                    value: ZS(i.value)
                } : {
                    case: void 0
                } : a = ZS(i);
                r[s.localName] = a;
            }
            for (const s of t.runtime.bin.listUnknownFields(e))t.runtime.bin.onUnknownField(r, s.no, s.wireType, s.data);
            return n;
        }
    };
}
function ZS(e) {
    if (e === void 0) return e;
    if (Fc(e)) return e.clone();
    if (e instanceof Uint8Array) {
        const t = new Uint8Array(e.byteLength);
        return t.set(e), t;
    }
    return e;
}
function Ah(e) {
    return e instanceof Uint8Array ? e : new Uint8Array(e);
}
function Nj(e, t, n) {
    return {
        syntax: e,
        json: Wje(),
        bin: Hje(),
        util: {
            ...Xje(),
            newFieldList: t,
            initFields: n
        },
        makeMessageType (r, s, i) {
            return Eje(this, r, s, i);
        },
        makeEnum: wje,
        makeEnumType: cj,
        getEnumType: aj,
        makeExtension (r, s, i) {
            return Pje(this, r, s, i);
        }
    };
}
function $j(e, t) {
    const n = [];
    let r;
    for (const s of typeof e == "function" ? e() : e){
        const i = s;
        if (i.localName = Lj(s.name, s.oneof !== void 0), i.jsonName = s.jsonName ?? xj(s.name), i.repeated = s.repeated ?? !1, s.kind == "scalar" && (i.L = s.L ?? go.BIGINT), i.delimited = s.delimited ?? !1, i.req = s.req ?? !1, i.opt = s.opt ?? !1, s.packed === void 0 && (t ? i.packed = s.kind == "enum" || s.kind == "scalar" && s.T != V.BYTES && s.T != V.STRING : i.packed = !1), s.oneof !== void 0) {
            const a = typeof s.oneof == "string" ? s.oneof : s.oneof.name;
            (!r || r.name != a) && (r = new Vj(a)), i.oneof = r, r.addField(i);
        }
        n.push(i);
    }
    return n;
}
var c;
export { $j, $je, Ah, Aj, Bje, Dje, Ej, Eje, Fc, Fje, Gje, Hi, Hje, Ih, Ij, JS, Kd, Kje, Lje, MM, Mj, Nj, Nje, Oje, PM, Pj, Pje, QS, Sj, Wje, XS, Xje, Yje, ZS, _j, bh, bj, c, cj, fj, fo, gj, jje, kj, lj, oj, qje, vj, wj, wje, xje, zje };
var __wakaru_$s_initialized = false;
export function $s() {
if (__wakaru_$s_initialized) return;
__wakaru_$s_initialized = true;
"use strict";
h(), Dj(), Oj(), _o(), jj(), c = Nj("proto3", (e)=>new xM(e, (t)=>$j(t, !0)), (e)=>{
    for (const t of e.getType().fields.byMember()){
        if (t.opt) continue;
        const n = t.localName, r = e;
        if (t.repeated) {
            r[n] = [];
            continue;
        }
        switch(t.kind){
            case "oneof":
                r[n] = {
                    case: void 0
                };
                break;
            case "enum":
                r[n] = 0;
                break;
            case "map":
                r[n] = {};
                break;
            case "scalar":
                r[n] = Kd(t.T, t.L);
                break;
            case "message":
                break;
        }
    }
});

}
