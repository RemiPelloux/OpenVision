import { LXe, qge } from "./analytics_connectweb.js";
import { Hge, cl, e2 } from "./analytics_pb.js";
import { ae } from "./buffer.js";
import { Be } from "./code.js";
import { Vc } from "./compression.js";
import { KS, wt } from "./connect-error.js";
import { Vy } from "./connect.js";
import { JH, QH, XH, YH, ZH } from "./content-type_3.js";
import { tq } from "./end-stream.js";
import { NH, Ny } from "./envelope_6.js";
import { s2 } from "./experimentConfig.gen.js";
import { a2, dfe, gfe, hfe, i2, lfe, mfe, pfe, ufe } from "./firstWindowLocalReactivation.js";
import { Tu, dme } from "./firstWindowStartup.js";
import { oP } from "./get-request.js";
import { iq, jc, nP, rP, rq, sP, sq, tP, wg } from "./headers_3.js";
import { Q, ne } from "./instantiation.js";
import { B } from "./ipc.js";
import { Z, te } from "./log.js";
import { Tt, et } from "./productService.js";
import { zd } from "./proto-base64.js";
import { Yge } from "./semver.js";
import { C, WM } from "./service-type.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { iP } from "./version_2.js";
function rxe(e) {
    let t = 0, n = 0, r = 0;
    const s = new Uint8Array(Math.floor(e.length / 4 * 3)), i = (o)=>{
        switch(n){
            case 3:
                s[r++] = t | o, n = 0;
                break;
            case 2:
                s[r++] = t | o >>> 2, t = o << 6, n = 3;
                break;
            case 1:
                s[r++] = t | o >>> 4, t = o << 4, n = 2;
                break;
            default:
                t = o << 2, n = 1;
        }
    };
    for(let o = 0; o < e.length; o++){
        const l = e.charCodeAt(o);
        if (l >= 65 && l <= 90) i(l - 65);
        else if (l >= 97 && l <= 122) i(l - 97 + 26);
        else if (l >= 48 && l <= 57) i(l - 48 + 52);
        else if (l === 43 || l === 45) i(62);
        else if (l === 47 || l === 95) i(63);
        else {
            if (l === 61) break;
            throw new SyntaxError(`Unexpected base64 character ${e[o]}`);
        }
    }
    const a = r;
    for(; n > 0;)i(0);
    return ae.wrap(s).slice(0, a);
}
function P5(e) {
    const t = e.split(".")[1], n = rxe(t);
    return JSON.parse(n.toString());
}
function Sje(e) {
    if (!zS) {
        zS = {};
        for (const t of Object.values(Be))typeof t != "string" && (zS[KS(t)] = t);
    }
    return zS[e];
}
var zS;
function PH(...e) {
    const t = new Headers;
    for (const n of e)n.forEach((r, s)=>{
        t.append(s, r);
    });
    return t;
}
function fHe(e, t) {
    const n = {};
    for (const [r, s] of Object.entries(e.methods)){
        const i = t({
            ...s,
            localName: r,
            service: e
        });
        i != null && (n[r] = i);
    }
    return n;
}
function _He(e, t) {
    if (t > e) throw new wt(`message size ${t} is larger than configured writeMaxBytes ${e}`, Be.ResourceExhausted);
}
function vHe(e) {
    return new NH(e);
}
async function THe(e, t, n) {
    let { flags: r, data: s } = e;
    if ((r & Vc) === Vc) throw new wt("invalid envelope, already compressed", Be.Internal);
    return t && s.byteLength >= n && (s = await t.compress(s), r = r | Vc), {
        data: s,
        flags: r
    };
}
async function kHe(e, t, n) {
    let { flags: r, data: s } = e;
    if ((r & Vc) === Vc) {
        if (!t) throw new wt("received compressed envelope, but do not know how to decompress", Be.Internal);
        s = await t.decompress(s, n), r = r ^ Vc;
    }
    return {
        data: s,
        flags: r
    };
}
function SHe(e, t) {
    const n = new Uint8Array(t.length + 5);
    n.set(t, 5);
    const r = new DataView(n.buffer, n.byteOffset, n.byteLength);
    return r.setUint8(0, e), r.setUint32(1, t.length), n;
}
function wHe(e, ...t) {
    const [n, r, s] = EHe(t);
    let i = e, a;
    return s?.propagateDownStreamError === !0 && (i = a = DH(i)), i = zM(i, ...n, {
        propagateDownStreamError: !1
    }), r(i).catch((o)=>a ? a.abort(o).then(()=>Promise.reject(o)) : Promise.reject(o));
}
function EHe(e) {
    let t;
    typeof e[e.length - 1] != "function" && (t = e.pop());
    const n = e.pop();
    return [
        e,
        n,
        t
    ];
}
function bHe(e, t) {
    return async function(n) {
        return await DHe(n, e, t);
    };
}
async function* zM(e, ...t) {
    const [n, r] = RHe(t);
    let s;
    const i = e[Symbol.asyncIterator]();
    let o = {
        [Symbol.asyncIterator] () {
            return i;
        }
    };
    r?.propagateDownStreamError === !0 && (o = s = DH(o));
    for (const d of n)o = d(o);
    const l = o[Symbol.asyncIterator]();
    try {
        for(;;){
            const d = await l.next();
            if (d.done === !0) break;
            if (!s) {
                yield d.value;
                continue;
            }
            try {
                yield d.value;
            } catch (u) {
                throw await s.abort(u), u;
            }
        }
    } finally{
        r?.propagateDownStreamError === !0 && i.return?.().catch(()=>{});
    }
}
function RHe(e) {
    let t;
    return typeof e[e.length - 1] != "function" && (t = e.pop()), [
        e,
        t
    ];
}
function CHe(e, t, n) {
    return t === void 0 || n === void 0 ? async function*(r) {
        for await (const s of r)yield {
            flags: 0,
            data: e.serialize(s)
        };
    } : async function*(r) {
        for await (const s of r){
            let i, a = 0;
            s.end ? (a = a | t, i = n.serialize(s.value)) : i = e.serialize(s.value), yield {
                flags: a,
                data: i
            };
        }
    };
}
function IHe(e, t, n) {
    return n && t !== void 0 ? async function*(r) {
        for await (const { flags: s, data: i } of r)(s & t) === t ? yield {
            value: n.parse(i),
            end: !0
        } : yield {
            value: e.parse(i),
            end: !1
        };
    } : async function*(r) {
        for await (const { flags: s, data: i } of r){
            if (t !== void 0 && (s & t) === t) {
                if (n === null) throw new wt("unexpected end flag", Be.InvalidArgument);
                continue;
            }
            yield e.parse(i);
        }
    };
}
function AHe(e, t) {
    return async function*(n) {
        for await (const r of n)yield await THe(r, e, t);
    };
}
function MHe(e, t) {
    return async function*(n) {
        for await (const r of n)yield await kHe(r, e, t);
    };
}
function PHe() {
    return async function*(e) {
        for await (const { flags: t, data: n } of e)yield SHe(t, n);
    };
}
function NHe(e) {
    return async function*(t) {
        const n = vHe(e);
        for await (const r of t)for (const s of n.decode(r))yield s;
        if (n.byteLength > 0) throw new wt("protocol error: incomplete envelope", Be.InvalidArgument);
    };
}
async function DHe(e, t, n) {
    const [r, s] = OHe(n);
    if (r) {
        s > t && Ny(t, s, !0);
        const d = new Uint8Array(s);
        let u = 0;
        for await (const m of e){
            if (u + m.byteLength > s) throw new wt(`protocol error: promised ${s} bytes, received ${u + m.byteLength}`, Be.InvalidArgument);
            d.set(m, u), u += m.byteLength;
        }
        if (u < s) throw new wt(`protocol error: promised ${s} bytes, received ${u}`, Be.InvalidArgument);
        return d;
    }
    const i = [];
    let a = 0;
    for await (const d of e)a += d.byteLength, Ny(t, a), i.push(d);
    const o = new Uint8Array(a);
    let l = 0;
    for(let d = i.shift(); d; d = i.shift())o.set(d, l), l += d.byteLength;
    return o;
}
function OHe(e) {
    if (e == null) return [
        !1,
        0
    ];
    const t = typeof e == "string" ? parseInt(e, 10) : e;
    return !Number.isSafeInteger(t) || t < 0 ? [
        !1,
        t
    ] : [
        !0,
        t
    ];
}
function DH(e) {
    const t = e[Symbol.asyncIterator]();
    if (t.throw === void 0) throw new Error("AsyncIterable does not implement throw");
    const n = t;
    let r, s, i = {
        next () {
            return s = n.next().finally(()=>{
                s = void 0;
            }), s;
        },
        throw (o) {
            return n.throw(o);
        }
    };
    t.return !== void 0 && (i = {
        ...i,
        return (o) {
            return n.return(o);
        }
    });
    let a = !1;
    return {
        abort (o) {
            if (r) return r.state;
            const l = ()=>n.throw(o).then((d)=>d.done === !0 ? "completed" : "caught", ()=>"rethrown");
            return s ? (r = {
                reason: o,
                state: s.then(l, l)
            }, r.state) : (r = {
                reason: o,
                state: l()
            }, r.state);
        },
        [Symbol.asyncIterator] () {
            if (a) throw new Error("AsyncIterable cannot be re-used");
            return a = !0, i;
        }
    };
}
async function* OH(e) {
    yield* e;
}
function UHe(e, t) {
    return fHe(e, (n)=>{
        switch(n.kind){
            case C.Unary:
                return xHe(t, e, n);
            case C.ServerStreaming:
                return FHe(t, e, n);
            case C.ClientStreaming:
                return WHe(t, e, n);
            case C.BiDiStreaming:
                return BHe(t, e, n);
            default:
                return null;
        }
    });
}
function YM(e, t) {
    return UHe(e, t);
}
function xHe(e, t, n) {
    return async function(r, s) {
        const i = await e.unary(t, n, s?.signal, s?.timeoutMs, s?.headers, r, s?.contextValues);
        return s?.onHeader?.(i.header), s?.onTrailer?.(i.trailer), i.message;
    };
}
function FHe(e, t, n) {
    return function(r, s) {
        return LH(e.stream(t, n, s?.signal, s?.timeoutMs, s?.headers, OH([
            r
        ]), s?.contextValues), s);
    };
}
function WHe(e, t, n) {
    return async function(r, s) {
        const i = await e.stream(t, n, s?.signal, s?.timeoutMs, s?.headers, r, s?.contextValues);
        s?.onHeader?.(i.header);
        let a, o = 0;
        for await (const l of i.message)a = l, o++;
        if (!a) throw new wt("protocol error: missing response message", Be.Unimplemented);
        if (o > 1) throw new wt("protocol error: received extra messages for client streaming method", Be.Unimplemented);
        return s?.onTrailer?.(i.trailer), a;
    };
}
function BHe(e, t, n) {
    return function(r, s) {
        return LH(e.stream(t, n, s?.signal, s?.timeoutMs, s?.headers, r, s?.contextValues), s);
    };
}
function LH(e, t) {
    const n = (async function*() {
        const r = await e;
        t?.onHeader?.(r.header), yield* r.message, t?.onTrailer?.(r.trailer);
    })()[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator]: ()=>({
                next: ()=>n.next()
            })
    };
}
function VHe(...e) {
    const t = new AbortController, n = e.filter((s)=>s !== void 0).concat(t.signal);
    for (const s of n){
        if (s.aborted) {
            r.apply(s);
            break;
        }
        s.addEventListener("abort", r);
    }
    function r() {
        t.signal.aborted || t.abort(UH(this));
        for (const s of n)s.removeEventListener("abort", r);
    }
    return t;
}
function $He(e) {
    const t = new AbortController, n = ()=>{
        t.abort(new wt("the operation timed out", Be.DeadlineExceeded));
    };
    let r;
    return e !== void 0 && (e <= 0 ? n() : r = setTimeout(n, e)), {
        signal: t.signal,
        cleanup: ()=>clearTimeout(r)
    };
}
function UH(e) {
    if (!e.aborted) return;
    if (e.reason !== void 0) return e.reason;
    const t = new Error("This operation was aborted");
    return t.name = "AbortError", t;
}
function xH() {
    return {
        get (e) {
            return e.id in this ? this[e.id] : e.defaultValue;
        },
        set (e, t) {
            return this[e.id] = t, this;
        },
        delete (e) {
            return delete this[e.id], this;
        }
    };
}
function GH(e, t, n) {
    const r = typeof t == "string" ? t : t.typeName, s = typeof n == "string" ? n : n.name;
    return e.toString().replace(/\/?$/, `/${r}/${s}`);
}
function VH(e, t) {
    return t instanceof e ? t : new e(t);
}
function KHe(e, t) {
    function n(r) {
        return r.done === !0 ? r : {
            done: r.done,
            value: VH(e, r.value)
        };
    }
    return {
        [Symbol.asyncIterator] () {
            const r = t[Symbol.asyncIterator](), s = {
                next: ()=>r.next().then(n)
            };
            return r.throw !== void 0 && (s.throw = (i)=>r.throw(i).then(n)), r.return !== void 0 && (s.return = (i)=>r.return(i).then(n)), s;
        }
    };
}
function jH(e, t) {
    return t?.concat().reverse().reduce((n, r)=>r(n), e) ?? e;
}
function zHe(e) {
    const t = {
        ...e
    };
    return t.ignoreUnknownFields ??= !0, t;
}
function qH(e, t, n, r) {
    const s = Fy(KH(e.I, t), r), i = Fy(zH(e.I, n), r), a = Fy(KH(e.O, t), r), o = Fy(zH(e.O, n), r);
    return {
        getI (l) {
            return l ? s : i;
        },
        getO (l) {
            return l ? a : o;
        }
    };
}
function Fy(e, t) {
    return {
        serialize (n) {
            const r = e.serialize(n);
            return _He(t.writeMaxBytes, r.byteLength), r;
        },
        parse (n) {
            return Ny(t.readMaxBytes, n.byteLength, !0), e.parse(n);
        }
    };
}
function KH(e, t) {
    return {
        parse (n) {
            try {
                return e.fromBinary(n, t);
            } catch (r) {
                const s = r instanceof Error ? r.message : String(r);
                throw new wt(`parse binary: ${s}`, Be.Internal);
            }
        },
        serialize (n) {
            try {
                return n.toBinary(t);
            } catch (r) {
                const s = r instanceof Error ? r.message : String(r);
                throw new wt(`serialize binary: ${s}`, Be.Internal);
            }
        }
    };
}
function zH(e, t) {
    const n = t?.textEncoder ?? new TextEncoder, r = t?.textDecoder ?? new TextDecoder, s = zHe(t);
    return {
        parse (i) {
            try {
                const a = r.decode(i);
                return e.fromJsonString(a, s);
            } catch (a) {
                throw wt.from(a, Be.InvalidArgument);
            }
        },
        serialize (i) {
            try {
                const a = i.toJsonString(s);
                return n.encode(a);
            } catch (a) {
                throw wt.from(a, Be.Internal);
            }
        }
    };
}
function QHe(e) {
    if (e === "text/event-stream") return {
        stream: !0,
        binary: !0
    };
    const t = e?.match(YH);
    if (!t) return;
    const n = !!t[1], r = !!t[3];
    return {
        stream: n,
        binary: r
    };
}
function eq(e, t, n) {
    if (t && new Headers(t).forEach((a, o)=>n.metadata.append(o, a)), typeof e != "object" || e == null || Array.isArray(e)) throw n;
    let r = n.code;
    "code" in e && typeof e.code == "string" && (r = Sje(e.code) ?? r);
    const s = e.message;
    if (s != null && typeof s != "string") throw n;
    const i = new wt(s ?? "", r, t);
    if ("details" in e && Array.isArray(e.details)) for (const a of e.details){
        if (a === null || typeof a != "object" || Array.isArray(a) || typeof a.type != "string" || typeof a.value != "string") throw n;
        try {
            i.details.push({
                type: a.type,
                value: zd.dec(a.value),
                debug: a.debug
            });
        } catch  {
            throw n;
        }
    }
    return i;
}
function ZHe(e, t, n) {
    let r;
    try {
        r = JSON.parse(new TextDecoder().decode(e));
    } catch  {
        throw n;
    }
    return eq(r, t, n);
}
function eqe(e, t) {
    const n = {
        code: KS(e.code)
    };
    return e.rawMessage.length > 0 && (n.message = e.rawMessage), e.details.length > 0 && (n.details = e.details.map((r)=>{
        if ("getType" in r) {
            const s = {
                type: r.getType().typeName,
                value: r.toBinary()
            };
            try {
                s.debug = r.toJson(t);
            } catch  {}
            return s;
        }
        return r;
    }).map(({ value: r, ...s })=>({
            ...s,
            value: zd.enc(r).replace(/=+$/, "")
        }))), n;
}
function tqe(e) {
    const t = new wt("invalid end stream", Be.Unknown);
    let n;
    try {
        n = JSON.parse(typeof e == "string" ? e : new TextDecoder().decode(e));
    } catch  {
        throw t;
    }
    if (typeof n != "object" || n == null || Array.isArray(n)) throw t;
    const r = new Headers;
    if ("metadata" in n) {
        if (typeof n.metadata != "object" || n.metadata == null || Array.isArray(n.metadata)) throw t;
        for (const [i, a] of Object.entries(n.metadata)){
            if (!Array.isArray(a) || a.some((o)=>typeof o != "string")) throw t;
            for (const o of a)r.append(i, o);
        }
    }
    const s = "error" in n && n.error != null ? eq(n.error, r, t) : void 0;
    return {
        metadata: r,
        error: s
    };
}
function nqe(e, t, n) {
    const r = {};
    t !== void 0 && (r.error = eqe(t, n), e = PH(e, t.metadata));
    let s = !1;
    const i = {};
    return e.forEach((a, o)=>{
        s = !0, i[o] = [
            a
        ];
    }), s && (r.metadata = i), r;
}
function rqe(e) {
    const t = new TextEncoder;
    return {
        serialize (n) {
            try {
                const r = nqe(n.metadata, n.error, e), s = JSON.stringify(r);
                return t.encode(s);
            } catch (r) {
                const s = r instanceof Error ? r.message : String(r);
                throw new wt(`failed to serialize EndStreamResponse: ${s}`, Be.Internal);
            }
        },
        parse (n) {
            try {
                return tqe(n);
            } catch (r) {
                const s = r instanceof Error ? r.message : String(r);
                throw new wt(`failed to parse EndStreamResponse: ${s}`, Be.InvalidArgument);
            }
        }
    };
}
function sqe(e) {
    switch(e){
        case 400:
            return Be.Internal;
        case 401:
            return Be.Unauthenticated;
        case 403:
            return Be.PermissionDenied;
        case 404:
            return Be.Unimplemented;
        case 429:
            return Be.Unavailable;
        case 502:
            return Be.Unavailable;
        case 503:
            return Be.Unavailable;
        case 504:
            return Be.Unavailable;
        default:
            return Be.Unknown;
    }
}
function aqe(e) {
    const t = new Headers, n = new Headers;
    return e.forEach((r, s)=>{
        s.toLowerCase().startsWith("trailer-") ? n.append(s.substring(8), r) : t.append(s, r);
    }), [
        t,
        n
    ];
}
function lqe(e, t, n, r, s) {
    const i = new Headers(r ?? {});
    return n !== void 0 && i.set(sq, `${n}`), i.set(wg, e == C.Unary ? t ? JH : XH : t ? QH : ZH), i.set(sP, iP), s && i.set(iq, "CONNECT_ES_USER_AGENT"), i;
}
function dq(e, t, n, r, s, i, a) {
    const o = lqe(e, t, n, r, a);
    if (i != null) {
        const l = e == C.Unary ? jc : nP;
        o.set(l, i.name);
    }
    if (s.length > 0) {
        const l = e == C.Unary ? rP : rq;
        o.set(l, s.map((d)=>d.name).join(","));
    }
    return o;
}
function uqe(e, t, n, r) {
    const s = r.get(wg), i = QHe(s);
    if (n !== 200) {
        const o = new wt(`HTTP ${n}`, sqe(n), r);
        if (e == C.Unary && i && !i.binary) return {
            isUnaryError: !0,
            unaryError: o
        };
        throw o;
    }
    const a = {
        binary: t,
        stream: e !== C.Unary
    };
    if (i?.binary !== a.binary || i.stream !== a.stream) throw new wt(`unsupported content type ${s}`, i === void 0 ? Be.Unknown : Be.Internal, r);
    return {
        isUnaryError: !1
    };
}
function uq(e, t, n, r, s) {
    let i;
    const a = s.get(e == C.Unary ? jc : nP);
    if (a != null && a.toLowerCase() !== "identity" && (i = t.find((o)=>o.name === a), !i)) throw new wt(`unsupported response encoding "${a}"`, Be.Internal, s);
    return {
        compression: i,
        ...uqe(e, n, r, s)
    };
}
function pqe(e, t) {
    return t ? zd.enc(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : encodeURIComponent(new TextDecoder().decode(e));
}
function hqe(e, t, n) {
    let r = `?connect=v${iP}`;
    const s = e.header.get(wg);
    s?.indexOf(oP) === 0 && (r += "&encoding=" + encodeURIComponent(s.slice(oP.length)));
    const i = e.header.get(jc);
    i !== null && i !== "identity" && (r += "&compression=" + encodeURIComponent(i), n = !0), n && (r += "&base64=1"), r += "&message=" + pqe(t, n);
    const a = e.url + r, o = new Headers(e.header);
    return [
        sP,
        wg,
        tP,
        jc,
        rP
    ].forEach((l)=>o.delete(l)), {
        ...e,
        init: {
            ...e.init,
            method: "GET"
        },
        url: a,
        header: o
    };
}
function fqe(e) {
    const t = jH(e.next, e.interceptors), [n, r, s] = mq(e), i = {
        ...e.req,
        message: VH(e.req.method.I, e.req.message),
        signal: n
    };
    return t(i).then((a)=>(s(), a), r);
}
function _qe(e) {
    const t = jH(e.next, e.interceptors), [n, r, s] = mq(e), i = {
        ...e.req,
        message: KHe(e.req.method.I, e.req.message),
        signal: n
    };
    let a = !1;
    return n.addEventListener("abort", function() {
        const o = e.req.message[Symbol.asyncIterator]();
        a || o.throw?.(this.reason).catch(()=>{}), o.return?.().catch(()=>{});
    }), t(i).then((o)=>({
            ...o,
            message: {
                [Symbol.asyncIterator] () {
                    const l = o.message[Symbol.asyncIterator]();
                    return {
                        next () {
                            return l.next().then((d)=>(d.done == !0 && (a = !0, s()), d), r);
                        }
                    };
                }
            }
        }), r);
}
function mq(e) {
    const { signal: t, cleanup: n } = $He(e.timeoutMs), r = VHe(e.signal, t);
    return [
        r.signal,
        function(i) {
            const a = wt.from(t.aborted ? UH(t) : i);
            return r.abort(a), n(), Promise.reject(a);
        },
        function() {
            n(), r.abort();
        }
    ];
}
function cP(e) {
    return {
        async unary (t, n, r, s, i, a, o) {
            const l = qH(n, e.binaryOptions, e.jsonOptions, e);
            return s = s === void 0 ? e.defaultTimeoutMs : s <= 0 ? void 0 : s, await fqe({
                interceptors: e.interceptors,
                signal: r,
                timeoutMs: s,
                req: {
                    stream: !1,
                    service: t,
                    method: n,
                    url: GH(e.baseUrl, t, n),
                    init: {},
                    header: dq(n.kind, e.useBinaryFormat, s, i, e.acceptCompression, e.sendCompression, !0),
                    contextValues: o ?? xH(),
                    message: a
                },
                next: async (d)=>{
                    let u = l.getI(e.useBinaryFormat).serialize(d.message);
                    e.sendCompression && u.byteLength > e.compressMinBytes ? (u = await e.sendCompression.compress(u), d.header.set(jc, e.sendCompression.name)) : d.header.delete(jc);
                    const m = e.useHttpGet === !0 && n.idempotency === WM.NoSideEffects;
                    let f;
                    m ? d = hqe(d, u, e.useBinaryFormat) : f = OH([
                        u
                    ]);
                    const v = await e.httpClient({
                        url: d.url,
                        method: d.init.method ?? "POST",
                        header: d.header,
                        signal: d.signal,
                        body: f
                    }), { compression: T, isUnaryError: S, unaryError: k } = uq(n.kind, e.acceptCompression, e.useBinaryFormat, v.status, v.header), [y, b] = aqe(v.header);
                    let I = await wHe(v.body, bHe(e.readMaxBytes, v.header.get(tP)), {
                        propagateDownStreamError: !1
                    });
                    if (T && (I = await T.decompress(I, e.readMaxBytes)), S) throw ZHe(I, PH(y, b), k);
                    return {
                        stream: !1,
                        service: t,
                        method: n,
                        header: y,
                        message: l.getO(e.useBinaryFormat).parse(I),
                        trailer: b
                    };
                }
            });
        },
        async stream (t, n, r, s, i, a, o) {
            const l = qH(n, e.binaryOptions, e.jsonOptions, e), d = rqe(e.jsonOptions);
            return s = s === void 0 ? e.defaultTimeoutMs : s <= 0 ? void 0 : s, _qe({
                interceptors: e.interceptors,
                signal: r,
                timeoutMs: s,
                req: {
                    stream: !0,
                    service: t,
                    method: n,
                    url: GH(e.baseUrl, t, n),
                    init: {
                        method: "POST",
                        redirect: "error",
                        mode: "cors"
                    },
                    header: dq(n.kind, e.useBinaryFormat, s, i, e.acceptCompression, e.sendCompression, !0),
                    contextValues: o ?? xH(),
                    message: a
                },
                next: async (u)=>{
                    const m = await e.httpClient({
                        url: u.url,
                        method: "POST",
                        header: u.header,
                        signal: u.signal,
                        body: zM(u.message, CHe(l.getI(e.useBinaryFormat)), AHe(e.sendCompression, e.compressMinBytes), PHe(), {
                            propagateDownStreamError: !0
                        })
                    }), { compression: f } = uq(n.kind, e.acceptCompression, e.useBinaryFormat, m.status, m.header), v = {
                        ...u,
                        header: m.header,
                        trailer: new Headers,
                        message: zM(m.body, NHe(e.readMaxBytes), MHe(f ?? null, e.readMaxBytes), IHe(l.getO(e.useBinaryFormat), tq, d), async function*(T) {
                            let S = !1;
                            for await (const k of T){
                                if (k.end) {
                                    if (S) throw new wt("protocol error: received extra EndStreamResponse", Be.InvalidArgument);
                                    if (S = !0, k.value.error) {
                                        const y = k.value.error;
                                        throw m.header.forEach((b, I)=>{
                                            y.metadata.append(I, b);
                                        }), y;
                                    }
                                    k.value.metadata.forEach((y, b)=>v.trailer.set(b, y));
                                    continue;
                                }
                                if (S) throw new wt("protocol error: received extra message after EndStreamResponse", Be.InvalidArgument);
                                yield k.value;
                            }
                            if (!S) throw new wt("protocol error: missing EndStreamResponse", Be.InvalidArgument);
                        }, {
                            propagateDownStreamError: !0
                        })
                    };
                    return v;
                }
            });
        }
    };
}
function Tw(e, t) {
    if (e) try {
        const n = P5(e).exp;
        return typeof n == "number" && Number.isFinite(n) && n > t / 1e3 ? e : void 0;
    } catch  {
        return;
    }
}
function ofe(e, t) {
    const n = encodeURIComponent(t);
    return `${e}:${n}`;
}
function EQe(e) {
    return e ? {
        timestampKey: ofe(i2, e),
        versionKey: ofe(a2, e)
    } : {
        timestampKey: i2,
        versionKey: a2
    };
}
function y1(e) {
    if (e) try {
        const t = P5(e).sub;
        return typeof t == "string" && t.length > 0 ? t : void 0;
    } catch  {
        return;
    }
}
function bQe(e, t) {
    const n = typeof e.lastActivityTimestampMs == "number" ? e.lastActivityTimestampMs : typeof e.lastActivityTimestampMs == "string" ? Number(e.lastActivityTimestampMs) : NaN, r = typeof e.lastActivityClientVersion == "string" ? e.lastActivityClientVersion.trim() : "";
    if (!(!Number.isFinite(n) || n <= 0) && !(n > t + hfe) && r.length !== 0) return {
        lastActivityTimestampMs: n,
        lastActivityClientVersion: r
    };
}
function RQe(e, t) {
    const { timestampKey: n, versionKey: r } = EQe(t.authId), s = e.get(n, -1), i = e.get(r, -1);
    return s === void 0 && i === void 0 ? "absent" : s === void 0 || i === void 0 ? "invalid" : bQe({
        lastActivityTimestampMs: s,
        lastActivityClientVersion: i
    }, t.nowMs) ?? "invalid";
}
function CQe() {
    const e = s2[ufe].fallbackValues;
    return {
        localRoutingEnabled: e.local_routing_enabled,
        userRoutingEnabled: e.user_routing_enabled,
        inactiveDays: e.inactive_days,
        minSupportedClientVersion: mfe
    };
}
function IQe(e) {
    if (e) try {
        const t = JSON.parse(e), n = typeof t.inactiveDays == "number" && Number.isFinite(t.inactiveDays) && t.inactiveDays > 0 ? t.inactiveDays : void 0, r = typeof t.minSupportedClientVersion == "string" && t.minSupportedClientVersion.trim().length > 0 ? t.minSupportedClientVersion.trim() : void 0;
        return n === void 0 || r === void 0 ? void 0 : {
            localRoutingEnabled: t.localRoutingEnabled !== !1,
            userRoutingEnabled: t.userRoutingEnabled === !0,
            inactiveDays: n,
            minSupportedClientVersion: r
        };
    } catch  {
        return;
    }
}
function AQe(e) {
    const t = IQe(e.get(dfe, -1));
    if (t) return t;
    const n = CQe(), r = MQe(e);
    return {
        ...n,
        minSupportedClientVersion: r ?? n.minSupportedClientVersion
    };
}
function MQe(e) {
    const t = e.get(lfe, -1);
    if (t) return o2?.raw !== t && (o2 = {
        raw: t,
        value: PQe(t)
    }), o2.value;
}
function PQe(e) {
    try {
        const t = JSON.parse(e), n = t.clientVersionStatus?.minSupportedClientVersion?.trim();
        return n || t.client_version_status?.min_supported_client_version?.trim() || void 0;
    } catch  {
        return;
    }
}
function cfe(e, t) {
    try {
        return Yge(e || "0.0.0", t);
    } catch  {
        return !1;
    }
}
function NQe(e) {
    if (!e.localRoutingEnabled || e.activity === "invalid" || e.activity === "absent") return;
    const { lastActivityTimestampMs: t, lastActivityClientVersion: n } = e.activity, r = e.minSupportedClientVersion, s = e.currentClientVersion;
    if (n.length > 0 && s.length > 0 && cfe(s, r) && !cfe(n, r)) return "reactivated_stale_upgrade";
    if (e.nowMs - t > e.inactiveDays * pfe) return "reactivated_inactive";
}
var o2;
function UQe(e) {
    return async (t)=>{
        const n = await e(t.url, {
            method: t.method,
            headers: t.header,
            signal: t.signal,
            body: t.body ? await xQe(t.body) : void 0
        });
        return {
            status: n.status,
            header: n.headers,
            body: FQe(n),
            trailer: new Headers
        };
    };
}
async function xQe(e) {
    const t = [];
    let n = 0;
    for await (const i of e)t.push(i), n += i.byteLength;
    if (n === 0) return;
    const r = new Uint8Array(n);
    let s = 0;
    for (const i of t)r.set(i, s), s += i.byteLength;
    return r.buffer;
}
async function* FQe(e) {
    const t = new Uint8Array(await e.arrayBuffer());
    t.byteLength > 0 && (yield t);
}
var c2, ffe, l2, w1;
export { $He, AHe, AQe, BHe, CHe, CQe, DH, DHe, EHe, EQe, FHe, FQe, Fy, GH, IHe, IQe, KH, KHe, LH, MHe, MQe, NHe, NQe, OH, OHe, P5, PH, PHe, PQe, QHe, RHe, RQe, SHe, Sje, THe, Tw, UH, UHe, UQe, VH, VHe, WHe, YM, ZHe, _He, _qe, aqe, bHe, bQe, c2, cP, cfe, dq, eq, eqe, fHe, ffe, fqe, hqe, jH, kHe, l2, lqe, mq, nqe, o2, ofe, pqe, qH, rqe, rxe, sqe, tqe, uq, uqe, vHe, w1, wHe, xH, xHe, xQe, y1, zH, zHe, zM, zS };
var __wakaru__fe_initialized = false;
export function _fe() {
if (__wakaru__fe_initialized) return;
__wakaru__fe_initialized = true;
"use strict";
h(), ne(), te(), Tt(), Vy(), LXe(), Hge(), Tu(), gfe(), c2 = Q("firstWindowStartupMainService"), ffe = "https://api2.cursor.sh", l2 = "00000000", w1 = class {
    constructor(e, t, n){
        this.options = e, this.productService = t, this.logService = n, this.initialWindowWasConsidered = !1;
    }
    start(e) {
        return this.startPromise || (this.startPromise = this.doStart(e)), this.startPromise;
    }
    getInitialStartupDecision() {
        return this.initialStartupDecision;
    }
    async resolveInitialWindowDecision(e) {
        if (!this.shouldConsiderInitialWindow(e)) return;
        this.initialWindowWasConsidered = !0;
        const t = await e.readOpenAgentsWindowOnStartupPreference?.() ?? "default";
        if (t === "lastUsedWindows") return;
        let n;
        if (t === "agentWindow") n = {
            reason: "open_agents_window_on_startup_enabled"
        };
        else if (!e.state.hasStoredNormalWindowState) n = {
            reason: "fresh_startup"
        };
        else {
            const r = Date.now();
            let s;
            try {
                s = Tw(await e.readStoredAccessToken?.(), r);
            } catch (a) {
                this.logService.warn("[FirstWindowStartupMainService] Failed to read stored access token", a);
            }
            let i;
            try {
                const a = await e.readApplicationStorage?.();
                if (a) {
                    const o = AQe(a);
                    if (o.localRoutingEnabled) {
                        const l = o.userRoutingEnabled ? y1(s) : void 0, d = RQe(a, {
                            authId: l,
                            nowMs: r
                        });
                        typeof d != "string" && (i = {
                            reason: NQe({
                                activity: d,
                                nowMs: r,
                                inactiveDays: o.inactiveDays,
                                currentClientVersion: this.productService.version,
                                minSupportedClientVersion: o.minSupportedClientVersion,
                                localRoutingEnabled: o.localRoutingEnabled
                            }) ?? "default"
                        });
                    }
                }
            } catch (a) {
                this.logService.warn("[FirstWindowStartupMainService] Local reactivation decision failed", a);
            }
            n = i ?? await this.start(s);
        }
        return this.initialStartupDecision = n, n;
    }
    async doStart(e) {
        try {
            return await this.fetchBackendDecision(e) ?? {
                reason: "decision_unavailable"
            };
        } catch (t) {
            return this.logService.warn("[FirstWindowStartupMainService] Backend first-window decision failed", t), {
                reason: "decision_error"
            };
        }
    }
    shouldConsiderInitialWindow(e) {
        return e.initialStartup && !this.initialWindowWasConsidered && e.openWindowCount === 0 && !e.hasExplicitFirstWindowIntent;
    }
    async fetchBackendDecision(e) {
        try {
            const t = this.options.fetchFn ?? globalThis.fetch.bind(globalThis), n = YM(qge, cP({
                httpClient: UQe(t),
                baseUrl: this.getBackendEndpoint(),
                useBinaryFormat: !1,
                interceptors: [],
                acceptCompression: [],
                sendCompression: null,
                compressMinBytes: Number.MAX_SAFE_INTEGER,
                readMaxBytes: Number.MAX_SAFE_INTEGER,
                writeMaxBytes: Number.MAX_SAFE_INTEGER
            })), r = Date.now() + dme, s = async (a)=>{
                const o = r - Date.now();
                if (!(o <= 0)) return n.getFirstWindowStatsigDecision(new e2({
                    operatingSystem: this.getClientOS()
                }), {
                    headers: this.createDecisionHeaders(a),
                    timeoutMs: o
                });
            };
            let i;
            try {
                i = await s(e);
            } catch (a) {
                if (e && a instanceof wt && a.code === Be.Unauthenticated) i = await s(void 0);
                else throw a;
            }
            return i ? {
                reason: i.reason || "backend_decision"
            } : void 0;
        } catch (t) {
            if (t instanceof wt && t.code === Be.DeadlineExceeded) {
                this.logService.warn("[FirstWindowStartupMainService] GetFirstWindowStatsigDecision timed out");
                return;
            }
            if (t instanceof wt) {
                this.logService.warn(`[FirstWindowStartupMainService] GetFirstWindowStatsigDecision failed with ${t.code}`);
                return;
            }
            throw t;
        }
    }
    getBackendEndpoint() {
        const e = this.options.args["test-backend-url"];
        return typeof e == "string" && e.length > 0 ? e : ffe;
    }
    createDecisionHeaders(e) {
        const t = {
            "Content-Type": "application/json",
            "x-cursor-client-type": "ide",
            "x-cursor-client-version": this.productService.version
        };
        return t["x-cursor-checksum"] = this.createMachineIdChecksumHeader(), e && (t.Authorization = `Bearer ${e}`), t;
    }
    createMachineIdChecksumHeader() {
        return this.options.macMachineId === void 0 ? `${l2}${this.options.machineId}` : `${l2}${this.options.machineId}/${this.options.macMachineId}`;
    }
    getClientOS() {
        switch(process.platform){
            case "win32":
                return cl.CLIENT_OS_WINDOWS;
            case "darwin":
                return cl.CLIENT_OS_MACOS;
            case "linux":
                return cl.CLIENT_OS_LINUX;
            default:
                return cl.CLIENT_OS_UNSPECIFIED;
        }
    }
}, w1 = B([
    w(1, et),
    w(2, Z)
], w1);

}
