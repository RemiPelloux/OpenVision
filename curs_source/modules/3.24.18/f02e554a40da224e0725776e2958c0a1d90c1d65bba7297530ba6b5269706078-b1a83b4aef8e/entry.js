var s = {};
(()=>{
    "use strict";
    require.r(s), require.d(s, {
        activate: ()=>j_,
        deactivate: ()=>X_,
        stats: ()=>Y_
    });
    var t = {};
    require.r(t), require.d(t, {
        base64: ()=>dc,
        base64url: ()=>fc,
        bigint: ()=>Bc,
        boolean: ()=>Cc,
        browserEmail: ()=>sc,
        cidrv4: ()=>lc,
        cidrv6: ()=>mc,
        cuid: ()=>Ou,
        cuid2: ()=>Fu,
        date: ()=>_c,
        datetime: ()=>Sc,
        domain: ()=>hc,
        duration: ()=>Ku,
        e164: ()=>gc,
        email: ()=>Zu,
        emoji: ()=>oc,
        extendedDuration: ()=>Vu,
        guid: ()=>zu,
        hex: ()=>Rc,
        hostname: ()=>pc,
        html5Email: ()=>tc,
        idnEmail: ()=>nc,
        integer: ()=>Ec,
        ipv4: ()=>ac,
        ipv6: ()=>uc,
        ksuid: ()=>Gu,
        lowercase: ()=>vc,
        mac: ()=>cc,
        md5_base64: ()=>Nc,
        md5_base64url: ()=>Dc,
        md5_hex: ()=>xc,
        nanoid: ()=>Hu,
        null: ()=>bc,
        number: ()=>Ic,
        rfc5322Email: ()=>ec,
        sha1_base64: ()=>Qc,
        sha1_base64url: ()=>Mc,
        sha1_hex: ()=>Uc,
        sha256_base64: ()=>Fc,
        sha256_base64url: ()=>Lc,
        sha256_hex: ()=>Oc,
        sha384_base64: ()=>Gc,
        sha384_base64url: ()=>Hc,
        sha384_hex: ()=>$c,
        sha512_base64: ()=>Vc,
        sha512_base64url: ()=>zc,
        sha512_hex: ()=>Kc,
        string: ()=>Jc,
        time: ()=>wc,
        ulid: ()=>Lu,
        undefined: ()=>kc,
        unicodeEmail: ()=>rc,
        uppercase: ()=>qc,
        uuid: ()=>Wu,
        uuid4: ()=>Yu,
        uuid6: ()=>ju,
        uuid7: ()=>Xu,
        xid: ()=>$u
    });
    var e = {};
    require.r(e), require.d(e, {
        endsWith: ()=>Xd,
        gt: ()=>xd,
        gte: ()=>Nd,
        includes: ()=>Yd,
        length: ()=>Kd,
        lowercase: ()=>zd,
        lt: ()=>Pd,
        lte: ()=>Td,
        maxLength: ()=>Gd,
        maxSize: ()=>Fd,
        mime: ()=>tf,
        minLength: ()=>Hd,
        minSize: ()=>Ld,
        multipleOf: ()=>Od,
        negative: ()=>Ud,
        nonnegative: ()=>Md,
        nonpositive: ()=>Qd,
        normalize: ()=>rf,
        overwrite: ()=>ef,
        positive: ()=>Dd,
        property: ()=>Zd,
        regex: ()=>Vd,
        size: ()=>$d,
        slugify: ()=>af,
        startsWith: ()=>jd,
        toLowerCase: ()=>sf,
        toUpperCase: ()=>of,
        trim: ()=>nf,
        uppercase: ()=>Wd
    });
    var r = {};
    require.r(r), require.d(r, {
        ZodISODate: ()=>rp,
        ZodISODateTime: ()=>tp,
        ZodISODuration: ()=>op,
        ZodISOTime: ()=>sp,
        date: ()=>np,
        datetime: ()=>ep,
        duration: ()=>ap,
        time: ()=>ip
    });
    var i = {};
    require.r(i), require.d(i, {
        ZodAny: ()=>$h,
        ZodArray: ()=>Zh,
        ZodBase64: ()=>ch,
        ZodBase64URL: ()=>mh,
        ZodBigInt: ()=>Ph,
        ZodBigIntFormat: ()=>xh,
        ZodBoolean: ()=>qh,
        ZodCIDRv4: ()=>ih,
        ZodCIDRv6: ()=>ah,
        ZodCUID: ()=>$p,
        ZodCUID2: ()=>Hp,
        ZodCatch: ()=>zg,
        ZodCodec: ()=>tA,
        ZodCustom: ()=>dA,
        ZodCustomStringFormat: ()=>Ah,
        ZodDate: ()=>jh,
        ZodDefault: ()=>Og,
        ZodDiscriminatedUnion: ()=>lg,
        ZodE164: ()=>fh,
        ZodEmail: ()=>bp,
        ZodEmoji: ()=>Mp,
        ZodEnum: ()=>Eg,
        ZodExactOptional: ()=>Ng,
        ZodFile: ()=>vg,
        ZodFunction: ()=>lA,
        ZodGUID: ()=>vp,
        ZodIPv4: ()=>Zp,
        ZodIPv6: ()=>nh,
        ZodIntersection: ()=>dg,
        ZodJWT: ()=>hh,
        ZodKSUID: ()=>jp,
        ZodLazy: ()=>oA,
        ZodLiteral: ()=>bg,
        ZodMAC: ()=>eh,
        ZodMap: ()=>wg,
        ZodNaN: ()=>Yg,
        ZodNanoID: ()=>Fp,
        ZodNever: ()=>Vh,
        ZodNonOptional: ()=>Gg,
        ZodNull: ()=>Fh,
        ZodNullable: ()=>Ug,
        ZodNumber: ()=>Jh,
        ZodNumberFormat: ()=>Eh,
        ZodObject: ()=>rg,
        ZodOptional: ()=>Tg,
        ZodPipe: ()=>Xg,
        ZodPrefault: ()=>Lg,
        ZodPromise: ()=>uA,
        ZodReadonly: ()=>rA,
        ZodRecord: ()=>gg,
        ZodSet: ()=>Jg,
        ZodString: ()=>Ep,
        ZodStringFormat: ()=>Cp,
        ZodSuccess: ()=>Kg,
        ZodSymbol: ()=>Uh,
        ZodTemplateLiteral: ()=>sA,
        ZodTransform: ()=>Rg,
        ZodTuple: ()=>pg,
        ZodType: ()=>Jp,
        ZodULID: ()=>Vp,
        ZodURL: ()=>Dp,
        ZodUUID: ()=>Rp,
        ZodUndefined: ()=>Mh,
        ZodUnion: ()=>og,
        ZodUnknown: ()=>Hh,
        ZodVoid: ()=>Wh,
        ZodXID: ()=>Wp,
        ZodXor: ()=>ug,
        _ZodString: ()=>Bp,
        _default: ()=>Fg,
        _function: ()=>mA,
        any: ()=>Gh,
        array: ()=>tg,
        base64: ()=>lh,
        base64url: ()=>dh,
        bigint: ()=>Th,
        boolean: ()=>Rh,
        catch: ()=>Wg,
        check: ()=>fA,
        cidrv4: ()=>oh,
        cidrv6: ()=>uh,
        codec: ()=>eA,
        cuid: ()=>Gp,
        cuid2: ()=>Kp,
        custom: ()=>pA,
        date: ()=>Xh,
        describe: ()=>AA,
        discriminatedUnion: ()=>mg,
        e164: ()=>ph,
        email: ()=>kp,
        emoji: ()=>Op,
        enum: ()=>Ig,
        exactOptional: ()=>Dg,
        file: ()=>qg,
        float32: ()=>Ch,
        float64: ()=>bh,
        function: ()=>mA,
        guid: ()=>qp,
        hash: ()=>Sh,
        hex: ()=>wh,
        hostname: ()=>yh,
        httpUrl: ()=>Qp,
        instanceof: ()=>yA,
        int: ()=>Ih,
        int32: ()=>kh,
        int64: ()=>Nh,
        intersection: ()=>fg,
        ipv4: ()=>th,
        ipv6: ()=>sh,
        json: ()=>SA,
        jwt: ()=>gh,
        keyof: ()=>eg,
        ksuid: ()=>Xp,
        lazy: ()=>aA,
        literal: ()=>kg,
        looseObject: ()=>ig,
        looseRecord: ()=>yg,
        mac: ()=>rh,
        map: ()=>Sg,
        meta: ()=>_A,
        nan: ()=>jg,
        nanoid: ()=>Lp,
        nativeEnum: ()=>Cg,
        never: ()=>zh,
        nonoptional: ()=>Hg,
        null: ()=>Lh,
        nullable: ()=>Qg,
        nullish: ()=>Mg,
        number: ()=>Bh,
        object: ()=>ng,
        optional: ()=>xg,
        partialRecord: ()=>_g,
        pipe: ()=>Zg,
        prefault: ()=>$g,
        preprocess: ()=>JA,
        promise: ()=>cA,
        readonly: ()=>nA,
        record: ()=>Ag,
        refine: ()=>hA,
        set: ()=>Bg,
        strictObject: ()=>sg,
        string: ()=>Ip,
        stringFormat: ()=>_h,
        stringbool: ()=>wA,
        success: ()=>Vg,
        superRefine: ()=>gA,
        symbol: ()=>Qh,
        templateLiteral: ()=>iA,
        transform: ()=>Pg,
        tuple: ()=>hg,
        uint32: ()=>vh,
        uint64: ()=>Dh,
        ulid: ()=>zp,
        undefined: ()=>Oh,
        union: ()=>ag,
        unknown: ()=>Kh,
        url: ()=>Up,
        uuid: ()=>Pp,
        uuidv4: ()=>Tp,
        uuidv6: ()=>xp,
        uuidv7: ()=>Np,
        void: ()=>Yh,
        xid: ()=>Yp,
        xor: ()=>cg
    });
    const o = require("vscode");
    var a = require("./module-5588.js");
    class u {
        static init() {
            u.output = o.window.createOutputChannel("Cursor Always Local", {
                log: !0
            });
        }
        static setUser(t) {}
        static setRepo(t) {}
        static error(t, ...e) {
            u.output.error(t, ...e);
        }
        static warn(t, ...e) {
            u.output.warn(t, ...e);
        }
        static info(t, ...e) {
            u.output.info(t, ...e);
        }
        static debug(t, ...e) {
            u.output.debug(t, ...e);
        }
        static trace(t, ...e) {
            u.output.trace(t, ...e);
        }
    }
    class c {
        static init() {
            c.output = o.window.createOutputChannel("Filesync", {
                log: !0
            });
        }
        static error(t, ...e) {
            c.output.error(t, ...e);
        }
        static warn(t, ...e) {
            c.output.warn(t, ...e);
        }
        static info(t, ...e) {
            c.output.info(t, ...e);
        }
        static debug(t, ...e) {
            c.output.debug(t, ...e);
        }
        static trace(t, ...e) {
            c.output.trace(t, ...e);
        }
    }
    var l = require("./module-6022.js");
    class m {
        constructor(){
            const t = {
                wordDiff: async (t, e)=>({
                        changes: (new l.diff_match_patch).diff_main(t, e).map((t)=>({
                                value: t[1],
                                added: 1 === t[0] || void 0,
                                removed: -1 === t[0] || void 0
                            }))
                    })
            };
            o.cursor.registerDiffingProvider(t);
        }
        dispose() {}
    }
    const d = {};
    function f(t, e) {
        if (t in d) throw new Error(`Action ${t} already registered`);
        d[t] = e;
    }
    function p(t, e) {
        if (!t) throw new Error(e);
    }
    function h(t) {
        if ("number" != typeof t) throw new Error("invalid int 32: " + typeof t);
        if (!Number.isInteger(t) || t > 2147483647 || t < -2147483648) throw new Error("invalid int 32: " + t);
    }
    function g(t) {
        if ("number" != typeof t) throw new Error("invalid uint 32: " + typeof t);
        if (!Number.isInteger(t) || t > 4294967295 || t < 0) throw new Error("invalid uint 32: " + t);
    }
    function A(t) {
        if ("number" != typeof t) throw new Error("invalid float 32: " + typeof t);
        if (Number.isFinite(t) && (t > 34028234663852886e22 || t < -34028234663852886e22)) throw new Error("invalid float 32: " + t);
    }
    const _ = Symbol("@bufbuild/protobuf/enum-type");
    function y(t) {
        const e = t[_];
        return p(e, "missing enum type on enum object"), e;
    }
    function w(t, e, r, n) {
        t[_] = S(e, r.map((e)=>({
                no: e.no,
                name: e.name,
                localName: t[e.no]
            })), n);
    }
    function S(t, e, r) {
        const n = Object.create(null), s = Object.create(null), i = [];
        for (const t of e){
            const e = B(t);
            i.push(e), n[t.name] = e, s[t.no] = e;
        }
        return {
            typeName: t,
            values: i,
            findName: (t)=>n[t],
            findNumber: (t)=>s[t]
        };
    }
    function J(t, e, r) {
        const n = {};
        for (const t of e){
            const e = B(t);
            n[e.localName] = e.no, n[e.no] = e.localName;
        }
        return w(n, t, e, r), n;
    }
    function B(t) {
        return "localName" in t ? t : {
            ...t,
            localName: t.name
        };
    }
    class E {
        equals(t) {
            return this.getType().runtime.util.equals(this.getType(), this, t);
        }
        clone() {
            return this.getType().runtime.util.clone(this);
        }
        fromBinary(t, e) {
            const r = this.getType().runtime.bin, n = r.makeReadOptions(e);
            return r.readMessage(this, n.readerFactory(t), t.byteLength, n), this;
        }
        fromJson(t, e) {
            const r = this.getType(), n = r.runtime.json, s = n.makeReadOptions(e);
            return n.readMessage(r, t, s, this), this;
        }
        fromJsonString(t, e) {
            let r;
            try {
                r = JSON.parse(t);
            } catch (t) {
                throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${t instanceof Error ? t.message : String(t)}`);
            }
            return this.fromJson(r, e);
        }
        toBinary(t) {
            const e = this.getType().runtime.bin, r = e.makeWriteOptions(t), n = r.writerFactory();
            return e.writeMessage(this, n, r), n.finish();
        }
        toJson(t) {
            const e = this.getType().runtime.json, r = e.makeWriteOptions(t);
            return e.writeMessage(this, r);
        }
        toJsonString(t) {
            const e = this.toJson(t);
            return JSON.stringify(e, null, t?.prettySpaces ?? 0);
        }
        toJSON() {
            return this.toJson({
                emitDefaultValues: !0
            });
        }
        getType() {
            return Object.getPrototypeOf(this).constructor;
        }
    }
    function I() {
        let t = 0, e = 0;
        for(let r = 0; r < 28; r += 7){
            let n = this.buf[this.pos++];
            if (t |= (127 & n) << r, !(128 & n)) return this.assertBounds(), [
                t,
                e
            ];
        }
        let r = this.buf[this.pos++];
        if (t |= (15 & r) << 28, e = (112 & r) >> 4, !(128 & r)) return this.assertBounds(), [
            t,
            e
        ];
        for(let r = 3; r <= 31; r += 7){
            let n = this.buf[this.pos++];
            if (e |= (127 & n) << r, !(128 & n)) return this.assertBounds(), [
                t,
                e
            ];
        }
        throw new Error("invalid varint");
    }
    function C(t, e, r) {
        for(let n = 0; n < 28; n += 7){
            const s = t >>> n, i = !(s >>> 7 == 0 && 0 == e), o = 255 & (i ? 128 | s : s);
            if (r.push(o), !i) return;
        }
        const n = t >>> 28 & 15 | (7 & e) << 4, s = !!(e >> 3);
        if (r.push(255 & (s ? 128 | n : n)), s) {
            for(let t = 3; t < 31; t += 7){
                const n = e >>> t, s = !(n >>> 7 == 0), i = 255 & (s ? 128 | n : n);
                if (r.push(i), !s) return;
            }
            r.push(e >>> 31 & 1);
        }
    }
    const b = 4294967296;
    function k(t) {
        const e = "-" === t[0];
        e && (t = t.slice(1));
        const r = 1e6;
        let n = 0, s = 0;
        function i(e, i) {
            const o = Number(t.slice(e, i));
            s *= r, n = n * r + o, n >= b && (s += n / b | 0, n %= b);
        }
        return i(-24, -18), i(-18, -12), i(-12, -6), i(-6), e ? R(n, s) : q(n, s);
    }
    function v(t, e) {
        if ({ lo: t, hi: e } = function(t, e) {
            return {
                lo: t >>> 0,
                hi: e >>> 0
            };
        }(t, e), e <= 2097151) return String(b * e + t);
        const r = 16777215 & (t >>> 24 | e << 8), n = e >> 16 & 65535;
        let s = (16777215 & t) + 6777216 * r + 6710656 * n, i = r + 8147497 * n, o = 2 * n;
        const a = 1e7;
        return s >= a && (i += Math.floor(s / a), s %= a), i >= a && (o += Math.floor(i / a), i %= a), o.toString() + P(i) + P(s);
    }
    function q(t, e) {
        return {
            lo: 0 | t,
            hi: 0 | e
        };
    }
    function R(t, e) {
        return e = ~e, t ? t = 1 + ~t : e += 1, q(t, e);
    }
    const P = (t)=>{
        const e = String(t);
        return "0000000".slice(e.length) + e;
    };
    function T(t, e) {
        if (t >= 0) {
            for(; t > 127;)e.push(127 & t | 128), t >>>= 7;
            e.push(t);
        } else {
            for(let r = 0; r < 9; r++)e.push(127 & t | 128), t >>= 7;
            e.push(1);
        }
    }
    function x() {
        let t = this.buf[this.pos++], e = 127 & t;
        if (!(128 & t)) return this.assertBounds(), e;
        if (t = this.buf[this.pos++], e |= (127 & t) << 7, !(128 & t)) return this.assertBounds(), e;
        if (t = this.buf[this.pos++], e |= (127 & t) << 14, !(128 & t)) return this.assertBounds(), e;
        if (t = this.buf[this.pos++], e |= (127 & t) << 21, !(128 & t)) return this.assertBounds(), e;
        t = this.buf[this.pos++], e |= (15 & t) << 28;
        for(let e = 5; 128 & t && e < 10; e++)t = this.buf[this.pos++];
        if (128 & t) throw new Error("invalid varint");
        return this.assertBounds(), e >>> 0;
    }
    const N = function() {
        const t = new DataView(new ArrayBuffer(8));
        if ("function" == typeof BigInt && "function" == typeof t.getBigInt64 && "function" == typeof t.getBigUint64 && "function" == typeof t.setBigInt64 && "function" == typeof t.setBigUint64 && ("object" != typeof process || "object" != typeof process.env || "1" !== process.env.BUF_BIGINT_DISABLE)) {
            const e = BigInt("-9223372036854775808"), r = BigInt("9223372036854775807"), n = BigInt("0"), s = BigInt("18446744073709551615");
            return {
                zero: BigInt(0),
                supported: !0,
                parse (t) {
                    const n = "bigint" == typeof t ? t : BigInt(t);
                    if (n > r || n < e) throw new Error(`int64 invalid: ${t}`);
                    return n;
                },
                uParse (t) {
                    const e = "bigint" == typeof t ? t : BigInt(t);
                    if (e > s || e < n) throw new Error(`uint64 invalid: ${t}`);
                    return e;
                },
                enc (e) {
                    return t.setBigInt64(0, this.parse(e), !0), {
                        lo: t.getInt32(0, !0),
                        hi: t.getInt32(4, !0)
                    };
                },
                uEnc (e) {
                    return t.setBigInt64(0, this.uParse(e), !0), {
                        lo: t.getInt32(0, !0),
                        hi: t.getInt32(4, !0)
                    };
                },
                dec: (e, r)=>(t.setInt32(0, e, !0), t.setInt32(4, r, !0), t.getBigInt64(0, !0)),
                uDec: (e, r)=>(t.setInt32(0, e, !0), t.setInt32(4, r, !0), t.getBigUint64(0, !0))
            };
        }
        const e = (t)=>p(/^-?[0-9]+$/.test(t), `int64 invalid: ${t}`), r = (t)=>p(/^[0-9]+$/.test(t), `uint64 invalid: ${t}`);
        return {
            zero: "0",
            supported: !1,
            parse: (t)=>("string" != typeof t && (t = t.toString()), e(t), t),
            uParse: (t)=>("string" != typeof t && (t = t.toString()), r(t), t),
            enc: (t)=>("string" != typeof t && (t = t.toString()), e(t), k(t)),
            uEnc: (t)=>("string" != typeof t && (t = t.toString()), r(t), k(t)),
            dec: (t, e)=>(function(t, e) {
                    let r = q(t, e);
                    const n = 2147483648 & r.hi;
                    n && (r = R(r.lo, r.hi));
                    const s = v(r.lo, r.hi);
                    return n ? "-" + s : s;
                })(t, e),
            uDec: (t, e)=>v(t, e)
        };
    }();
    var D = ((t)=>(t[t.DOUBLE = 1] = "DOUBLE", t[t.FLOAT = 2] = "FLOAT", t[t.INT64 = 3] = "INT64", t[t.UINT64 = 4] = "UINT64", t[t.INT32 = 5] = "INT32", t[t.FIXED64 = 6] = "FIXED64", t[t.FIXED32 = 7] = "FIXED32", t[t.BOOL = 8] = "BOOL", t[t.STRING = 9] = "STRING", t[t.BYTES = 12] = "BYTES", t[t.UINT32 = 13] = "UINT32", t[t.SFIXED32 = 15] = "SFIXED32", t[t.SFIXED64 = 16] = "SFIXED64", t[t.SINT32 = 17] = "SINT32", t[t.SINT64 = 18] = "SINT64", t))(D || {}), U = ((t)=>(t[t.BIGINT = 0] = "BIGINT", t[t.STRING = 1] = "STRING", t))(U || {});
    function Q(t, e, r) {
        if (e === r) return !0;
        if (t == D.BYTES) {
            if (!(e instanceof Uint8Array && r instanceof Uint8Array)) return !1;
            if (e.length !== r.length) return !1;
            for(let t = 0; t < e.length; t++)if (e[t] !== r[t]) return !1;
            return !0;
        }
        switch(t){
            case D.UINT64:
            case D.FIXED64:
            case D.INT64:
            case D.SFIXED64:
            case D.SINT64:
                return e == r;
        }
        return !1;
    }
    function M(t, e) {
        switch(t){
            case D.BOOL:
                return !1;
            case D.UINT64:
            case D.FIXED64:
            case D.INT64:
            case D.SFIXED64:
            case D.SINT64:
                return 0 == e ? N.zero : "0";
            case D.DOUBLE:
            case D.FLOAT:
                return 0;
            case D.BYTES:
                return new Uint8Array(0);
            case D.STRING:
                return "";
            default:
                return 0;
        }
    }
    function O(t, e) {
        switch(t){
            case D.BOOL:
                return !1 === e;
            case D.STRING:
                return "" === e;
            case D.BYTES:
                return e instanceof Uint8Array && !e.byteLength;
            default:
                return 0 == e;
        }
    }
    function F(t) {
        const e = t.field.localName, r = Object.create(null);
        return r[e] = function(t) {
            const e = t.field;
            if (e.repeated) return [];
            if (void 0 !== e.default) return e.default;
            switch(e.kind){
                case "enum":
                    return e.T.values[0].no;
                case "scalar":
                    return M(e.T, e.L);
                case "message":
                    const t = e.T, r = new t;
                    return t.fieldWrapper ? t.fieldWrapper.unwrapField(r) : r;
                case "map":
                    throw "map fields are not allowed to be extensions";
            }
        }(t), [
            r,
            ()=>r[e]
        ];
    }
    let L = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), $ = [];
    for(let t = 0; t < L.length; t++)$[L[t].charCodeAt(0)] = t;
    $["-".charCodeAt(0)] = L.indexOf("+"), $["_".charCodeAt(0)] = L.indexOf("/");
    const G = {
        dec (t) {
            let e = 3 * t.length / 4;
            "=" == t[t.length - 2] ? e -= 2 : "=" == t[t.length - 1] && (e -= 1);
            let r, n = new Uint8Array(e), s = 0, i = 0, o = 0;
            for(let e = 0; e < t.length; e++){
                if (r = $[t.charCodeAt(e)], void 0 === r) switch(t[e]){
                    case "=":
                        i = 0;
                    case "\n":
                    case "\r":
                    case "\t":
                    case " ":
                        continue;
                    default:
                        throw Error("invalid base64 string.");
                }
                switch(i){
                    case 0:
                        o = r, i = 1;
                        break;
                    case 1:
                        n[s++] = o << 2 | (48 & r) >> 4, o = r, i = 2;
                        break;
                    case 2:
                        n[s++] = (15 & o) << 4 | (60 & r) >> 2, o = r, i = 3;
                        break;
                    case 3:
                        n[s++] = (3 & o) << 6 | r, i = 0;
                }
            }
            if (1 == i) throw Error("invalid base64 string.");
            return n.subarray(0, s);
        },
        enc (t) {
            let e, r = "", n = 0, s = 0;
            for(let i = 0; i < t.length; i++)switch(e = t[i], n){
                case 0:
                    r += L[e >> 2], s = (3 & e) << 4, n = 1;
                    break;
                case 1:
                    r += L[s | e >> 4], s = (15 & e) << 2, n = 2;
                    break;
                case 2:
                    r += L[s | e >> 6], r += L[63 & e], n = 0;
            }
            return n && (r += L[s], r += "=", 1 == n && (r += "=")), r;
        }
    };
    function H(t, e, r) {
        z(e, t);
        const n = e.runtime.bin.makeReadOptions(r), s = function(t, e) {
            if (!e.repeated && ("enum" == e.kind || "scalar" == e.kind)) {
                for(let r = t.length - 1; r >= 0; --r)if (t[r].no == e.no) return [
                    t[r]
                ];
                return [];
            }
            return t.filter((t)=>t.no === e.no);
        }(t.getType().runtime.bin.listUnknownFields(t), e.field), [i, o] = F(e);
        for (const t of s)e.runtime.bin.readField(i, n.readerFactory(t.data), e.field, t.wireType, n);
        return o();
    }
    function K(t, e, r, n) {
        z(e, t);
        const s = e.runtime.bin.makeReadOptions(n), i = e.runtime.bin.makeWriteOptions(n);
        if (V(t, e)) {
            const r = t.getType().runtime.bin.listUnknownFields(t).filter((t)=>t.no != e.field.no);
            t.getType().runtime.bin.discardUnknownFields(t);
            for (const e of r)t.getType().runtime.bin.onUnknownField(t, e.no, e.wireType, e.data);
        }
        const o = i.writerFactory();
        let a = e.field;
        a.opt || a.repeated || "enum" != a.kind && "scalar" != a.kind || (a = {
            ...e.field,
            opt: !0
        }), e.runtime.bin.writeField(a, r, o, i);
        const u = s.readerFactory(o.finish());
        for(; u.pos < u.len;){
            const [e, r] = u.tag(), n = u.skip(r, e);
            t.getType().runtime.bin.onUnknownField(t, e, r, n);
        }
    }
    function V(t, e) {
        const r = t.getType();
        return e.extendee.typeName === r.typeName && !!r.runtime.bin.listUnknownFields(t).find((t)=>t.no == e.field.no);
    }
    function z(t, e) {
        p(t.extendee.typeName == e.getType().typeName, `extension ${t.typeName} can only be applied to message ${t.extendee.typeName}`);
    }
    function W(t, e) {
        const r = t.localName;
        if (t.repeated) return e[r].length > 0;
        if (t.oneof) return e[t.oneof.localName].case === r;
        switch(t.kind){
            case "enum":
            case "scalar":
                return t.opt || t.req ? void 0 !== e[r] : "enum" == t.kind ? e[r] !== t.T.values[0].no : !O(t.T, e[r]);
            case "message":
                return void 0 !== e[r];
            case "map":
                return Object.keys(e[r]).length > 0;
        }
    }
    function Y(t, e) {
        const r = t.localName, n = !t.opt && !t.req;
        if (t.repeated) e[r] = [];
        else if (t.oneof) e[t.oneof.localName] = {
            case: void 0
        };
        else switch(t.kind){
            case "map":
                e[r] = {};
                break;
            case "enum":
                e[r] = n ? t.T.values[0].no : void 0;
                break;
            case "scalar":
                e[r] = n ? M(t.T, t.L) : void 0;
                break;
            case "message":
                e[r] = void 0;
        }
    }
    function j(t, e) {
        if (null === t || "object" != typeof t) return !1;
        if (!Object.getOwnPropertyNames(E.prototype).every((e)=>e in t && "function" == typeof t[e])) return !1;
        const r = t.getType();
        return null !== r && "function" == typeof r && "typeName" in r && "string" == typeof r.typeName && (void 0 === e || r.typeName == e.typeName);
    }
    function X(t, e) {
        const r = j(e);
        return r || t.fieldWrapper ? r || !t.fieldWrapper ? e : t.fieldWrapper.wrapField(e) : new t(e);
    }
    D.DOUBLE, D.FLOAT, D.INT64, D.UINT64, D.INT32, D.UINT32, D.BOOL, D.STRING, D.BYTES;
    const Z = {
        ignoreUnknownFields: !1
    }, tt = {
        emitDefaultValues: !1,
        enumAsInteger: !1,
        useProtoFieldName: !1,
        prettySpaces: 0
    };
    function et(t) {
        return t ? {
            ...Z,
            ...t
        } : Z;
    }
    function rt(t) {
        return t ? {
            ...tt,
            ...t
        } : tt;
    }
    const nt = Symbol(), st = Symbol();
    function it(t) {
        if (null === t) return "null";
        switch(typeof t){
            case "object":
                return Array.isArray(t) ? "array" : "object";
            case "string":
                return t.length > 100 ? "string" : `"${t.split('"').join('\\"')}"`;
            default:
                return String(t);
        }
    }
    function ot(t, e, r, n, s) {
        let i = r.localName;
        if (r.repeated) {
            if (p("map" != r.kind), null === e) return;
            if (!Array.isArray(e)) throw new Error(`cannot decode field ${s.typeName}.${r.name} from JSON: ${it(e)}`);
            const o = t[i];
            for (const t of e){
                if (null === t) throw new Error(`cannot decode field ${s.typeName}.${r.name} from JSON: ${it(t)}`);
                switch(r.kind){
                    case "message":
                        o.push(r.T.fromJson(t, n));
                        break;
                    case "enum":
                        const e = ct(r.T, t, n.ignoreUnknownFields, !0);
                        e !== st && o.push(e);
                        break;
                    case "scalar":
                        try {
                            o.push(ut(r.T, t, r.L, !0));
                        } catch (e) {
                            let n = `cannot decode field ${s.typeName}.${r.name} from JSON: ${it(t)}`;
                            throw e instanceof Error && e.message.length > 0 && (n += `: ${e.message}`), new Error(n);
                        }
                }
            }
        } else if ("map" == r.kind) {
            if (null === e) return;
            if ("object" != typeof e || Array.isArray(e)) throw new Error(`cannot decode field ${s.typeName}.${r.name} from JSON: ${it(e)}`);
            const o = t[i];
            for (const [t, i] of Object.entries(e)){
                if (null === i) throw new Error(`cannot decode field ${s.typeName}.${r.name} from JSON: map value null`);
                let a;
                try {
                    a = at(r.K, t);
                } catch (t) {
                    let n = `cannot decode map key for field ${s.typeName}.${r.name} from JSON: ${it(e)}`;
                    throw t instanceof Error && t.message.length > 0 && (n += `: ${t.message}`), new Error(n);
                }
                switch(r.V.kind){
                    case "message":
                        o[a] = r.V.T.fromJson(i, n);
                        break;
                    case "enum":
                        const t = ct(r.V.T, i, n.ignoreUnknownFields, !0);
                        t !== st && (o[a] = t);
                        break;
                    case "scalar":
                        try {
                            o[a] = ut(r.V.T, i, U.BIGINT, !0);
                        } catch (t) {
                            let n = `cannot decode map value for field ${s.typeName}.${r.name} from JSON: ${it(e)}`;
                            throw t instanceof Error && t.message.length > 0 && (n += `: ${t.message}`), new Error(n);
                        }
                }
            }
        } else switch(r.oneof && (t = t[r.oneof.localName] = {
            case: i
        }, i = "value"), r.kind){
            case "message":
                const o = r.T;
                if (null === e && "google.protobuf.Value" != o.typeName) return;
                let a = t[i];
                j(a) ? a.fromJson(e, n) : (t[i] = a = o.fromJson(e, n), o.fieldWrapper && !r.oneof && (t[i] = o.fieldWrapper.unwrapField(a)));
                break;
            case "enum":
                const u = ct(r.T, e, n.ignoreUnknownFields, !1);
                switch(u){
                    case nt:
                        Y(r, t);
                        break;
                    case st:
                        break;
                    default:
                        t[i] = u;
                }
                break;
            case "scalar":
                try {
                    const n = ut(r.T, e, r.L, !1);
                    if (n === nt) Y(r, t);
                    else t[i] = n;
                } catch (t) {
                    let n = `cannot decode field ${s.typeName}.${r.name} from JSON: ${it(e)}`;
                    throw t instanceof Error && t.message.length > 0 && (n += `: ${t.message}`), new Error(n);
                }
        }
    }
    function at(t, e) {
        if (t === D.BOOL) switch(e){
            case "true":
                e = !0;
                break;
            case "false":
                e = !1;
        }
        return ut(t, e, U.BIGINT, !0).toString();
    }
    function ut(t, e, r, n) {
        if (null === e) return n ? M(t, r) : nt;
        switch(t){
            case D.DOUBLE:
            case D.FLOAT:
                if ("NaN" === e) return Number.NaN;
                if ("Infinity" === e) return Number.POSITIVE_INFINITY;
                if ("-Infinity" === e) return Number.NEGATIVE_INFINITY;
                if ("" === e) break;
                if ("string" == typeof e && e.trim().length !== e.length) break;
                if ("string" != typeof e && "number" != typeof e) break;
                const n = Number(e);
                if (Number.isNaN(n)) break;
                if (!Number.isFinite(n)) break;
                return t == D.FLOAT && A(n), n;
            case D.INT32:
            case D.FIXED32:
            case D.SFIXED32:
            case D.SINT32:
            case D.UINT32:
                let s;
                if ("number" == typeof e ? s = e : "string" == typeof e && e.length > 0 && e.trim().length === e.length && (s = Number(e)), void 0 === s) break;
                return t == D.UINT32 || t == D.FIXED32 ? g(s) : h(s), s;
            case D.INT64:
            case D.SFIXED64:
            case D.SINT64:
                if ("number" != typeof e && "string" != typeof e) break;
                const i = N.parse(e);
                return r ? i.toString() : i;
            case D.FIXED64:
            case D.UINT64:
                if ("number" != typeof e && "string" != typeof e) break;
                const o = N.uParse(e);
                return r ? o.toString() : o;
            case D.BOOL:
                if ("boolean" != typeof e) break;
                return e;
            case D.STRING:
                if ("string" != typeof e) break;
                try {
                    encodeURIComponent(e);
                } catch (t) {
                    throw new Error("invalid UTF8");
                }
                return e;
            case D.BYTES:
                if ("" === e) return new Uint8Array(0);
                if ("string" != typeof e) break;
                return G.dec(e);
        }
        throw new Error;
    }
    function ct(t, e, r, n) {
        if (null === e) return "google.protobuf.NullValue" == t.typeName ? 0 : n ? t.values[0].no : nt;
        switch(typeof e){
            case "number":
                if (Number.isInteger(e)) return e;
                break;
            case "string":
                const n = t.findName(e);
                if (void 0 !== n) return n.no;
                if (r) return st;
        }
        throw new Error(`cannot decode enum ${t.typeName} from JSON: ${it(e)}`);
    }
    function lt(t) {
        return !(!t.repeated && "map" != t.kind) || !t.oneof && "message" != t.kind && !t.opt && !t.req;
    }
    function mt(t, e, r) {
        if ("map" == t.kind) {
            p("object" == typeof e && null != e);
            const n = {}, s = Object.entries(e);
            switch(t.V.kind){
                case "scalar":
                    for (const [e, r] of s)n[e.toString()] = ft(t.V.T, r);
                    break;
                case "message":
                    for (const [t, e] of s)n[t.toString()] = e.toJson(r);
                    break;
                case "enum":
                    const e = t.V.T;
                    for (const [t, i] of s)n[t.toString()] = dt(e, i, r.enumAsInteger);
            }
            return r.emitDefaultValues || s.length > 0 ? n : void 0;
        }
        if (t.repeated) {
            p(Array.isArray(e));
            const n = [];
            switch(t.kind){
                case "scalar":
                    for(let r = 0; r < e.length; r++)n.push(ft(t.T, e[r]));
                    break;
                case "enum":
                    for(let s = 0; s < e.length; s++)n.push(dt(t.T, e[s], r.enumAsInteger));
                    break;
                case "message":
                    for(let t = 0; t < e.length; t++)n.push(e[t].toJson(r));
            }
            return r.emitDefaultValues || n.length > 0 ? n : void 0;
        }
        switch(t.kind){
            case "scalar":
                return ft(t.T, e);
            case "enum":
                return dt(t.T, e, r.enumAsInteger);
            case "message":
                return X(t.T, e).toJson(r);
        }
    }
    function dt(t, e, r) {
        if (p("number" == typeof e), "google.protobuf.NullValue" == t.typeName) return null;
        if (r) return e;
        const n = t.findNumber(e);
        return n?.name ?? e;
    }
    function ft(t, e) {
        switch(t){
            case D.INT32:
            case D.SFIXED32:
            case D.SINT32:
            case D.FIXED32:
            case D.UINT32:
                return p("number" == typeof e), e;
            case D.FLOAT:
            case D.DOUBLE:
                return p("number" == typeof e), Number.isNaN(e) ? "NaN" : e === Number.POSITIVE_INFINITY ? "Infinity" : e === Number.NEGATIVE_INFINITY ? "-Infinity" : e;
            case D.STRING:
                return p("string" == typeof e), e;
            case D.BOOL:
                return p("boolean" == typeof e), e;
            case D.UINT64:
            case D.FIXED64:
            case D.INT64:
            case D.SFIXED64:
            case D.SINT64:
                return p("bigint" == typeof e || "string" == typeof e || "number" == typeof e), e.toString();
            case D.BYTES:
                return p(e instanceof Uint8Array), G.enc(e);
        }
    }
    var pt = ((t)=>(t[t.Varint = 0] = "Varint", t[t.Bit64 = 1] = "Bit64", t[t.LengthDelimited = 2] = "LengthDelimited", t[t.StartGroup = 3] = "StartGroup", t[t.EndGroup = 4] = "EndGroup", t[t.Bit32 = 5] = "Bit32", t))(pt || {});
    class ht {
        constructor(t){
            this.stack = [], this.textEncoder = t ?? new TextEncoder, this.chunks = [], this.buf = [];
        }
        finish() {
            this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []);
            let t = 0;
            for(let e = 0; e < this.chunks.length; e++)t += this.chunks[e].length;
            let e = new Uint8Array(t), r = 0;
            for(let t = 0; t < this.chunks.length; t++)e.set(this.chunks[t], r), r += this.chunks[t].length;
            return this.chunks = [], e;
        }
        fork() {
            return this.stack.push({
                chunks: this.chunks,
                buf: this.buf
            }), this.chunks = [], this.buf = [], this;
        }
        join() {
            let t = this.finish(), e = this.stack.pop();
            if (!e) throw new Error("invalid state, fork stack empty");
            return this.chunks = e.chunks, this.buf = e.buf, this.uint32(t.byteLength), this.raw(t);
        }
        tag(t, e) {
            return this.uint32((t << 3 | e) >>> 0);
        }
        raw(t) {
            return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(t), this;
        }
        uint32(t) {
            for(g(t); t > 127;)this.buf.push(127 & t | 128), t >>>= 7;
            return this.buf.push(t), this;
        }
        int32(t) {
            return h(t), T(t, this.buf), this;
        }
        bool(t) {
            return this.buf.push(t ? 1 : 0), this;
        }
        bytes(t) {
            return this.uint32(t.byteLength), this.raw(t);
        }
        string(t) {
            let e = this.textEncoder.encode(t);
            return this.uint32(e.byteLength), this.raw(e);
        }
        float(t) {
            A(t);
            let e = new Uint8Array(4);
            return new DataView(e.buffer).setFloat32(0, t, !0), this.raw(e);
        }
        double(t) {
            let e = new Uint8Array(8);
            return new DataView(e.buffer).setFloat64(0, t, !0), this.raw(e);
        }
        fixed32(t) {
            g(t);
            let e = new Uint8Array(4);
            return new DataView(e.buffer).setUint32(0, t, !0), this.raw(e);
        }
        sfixed32(t) {
            h(t);
            let e = new Uint8Array(4);
            return new DataView(e.buffer).setInt32(0, t, !0), this.raw(e);
        }
        sint32(t) {
            return h(t), T(t = (t << 1 ^ t >> 31) >>> 0, this.buf), this;
        }
        sfixed64(t) {
            let e = new Uint8Array(8), r = new DataView(e.buffer), n = N.enc(t);
            return r.setInt32(0, n.lo, !0), r.setInt32(4, n.hi, !0), this.raw(e);
        }
        fixed64(t) {
            let e = new Uint8Array(8), r = new DataView(e.buffer), n = N.uEnc(t);
            return r.setInt32(0, n.lo, !0), r.setInt32(4, n.hi, !0), this.raw(e);
        }
        int64(t) {
            let e = N.enc(t);
            return C(e.lo, e.hi, this.buf), this;
        }
        sint64(t) {
            let e = N.enc(t), r = e.hi >> 31;
            return C(e.lo << 1 ^ r, (e.hi << 1 | e.lo >>> 31) ^ r, this.buf), this;
        }
        uint64(t) {
            let e = N.uEnc(t);
            return C(e.lo, e.hi, this.buf), this;
        }
    }
    class gt {
        constructor(t, e){
            this.varint64 = I, this.uint32 = x, this.buf = t, this.len = t.length, this.pos = 0, this.view = new DataView(t.buffer, t.byteOffset, t.byteLength), this.textDecoder = e ?? new TextDecoder;
        }
        tag() {
            let t = this.uint32(), e = t >>> 3, r = 7 & t;
            if (e <= 0 || r < 0 || r > 5) throw new Error("illegal tag: field no " + e + " wire type " + r);
            return [
                e,
                r
            ];
        }
        skip(t, e) {
            let r = this.pos;
            switch(t){
                case 0:
                    for(; 128 & this.buf[this.pos++];);
                    break;
                case 1:
                    this.pos += 4;
                case 5:
                    this.pos += 4;
                    break;
                case 2:
                    let r = this.uint32();
                    this.pos += r;
                    break;
                case 3:
                    for(;;){
                        const [t, r] = this.tag();
                        if (4 === r) {
                            if (void 0 !== e && t !== e) throw new Error("invalid end group tag");
                            break;
                        }
                        this.skip(r, t);
                    }
                    break;
                default:
                    throw new Error("cant skip wire type " + t);
            }
            return this.assertBounds(), this.buf.subarray(r, this.pos);
        }
        assertBounds() {
            if (this.pos > this.len) throw new RangeError("premature EOF");
        }
        int32() {
            return 0 | this.uint32();
        }
        sint32() {
            let t = this.uint32();
            return t >>> 1 ^ -(1 & t);
        }
        int64() {
            return N.dec(...this.varint64());
        }
        uint64() {
            return N.uDec(...this.varint64());
        }
        sint64() {
            let [t, e] = this.varint64(), r = -(1 & t);
            return t = (t >>> 1 | (1 & e) << 31) ^ r, e = e >>> 1 ^ r, N.dec(t, e);
        }
        bool() {
            let [t, e] = this.varint64();
            return 0 !== t || 0 !== e;
        }
        fixed32() {
            return this.view.getUint32((this.pos += 4) - 4, !0);
        }
        sfixed32() {
            return this.view.getInt32((this.pos += 4) - 4, !0);
        }
        fixed64() {
            return N.uDec(this.sfixed32(), this.sfixed32());
        }
        sfixed64() {
            return N.dec(this.sfixed32(), this.sfixed32());
        }
        float() {
            return this.view.getFloat32((this.pos += 4) - 4, !0);
        }
        double() {
            return this.view.getFloat64((this.pos += 8) - 8, !0);
        }
        bytes() {
            let t = this.uint32(), e = this.pos;
            return this.pos += t, this.assertBounds(), this.buf.subarray(e, e + t);
        }
        string() {
            return this.textDecoder.decode(this.bytes());
        }
    }
    const At = Symbol("@bufbuild/protobuf/unknown-fields"), _t = {
        readUnknownFields: !0,
        readerFactory: (t)=>new gt(t)
    }, yt = {
        writeUnknownFields: !0,
        writerFactory: ()=>new ht
    };
    function wt(t) {
        return t ? {
            ..._t,
            ...t
        } : _t;
    }
    function St(t) {
        return t ? {
            ...yt,
            ...t
        } : yt;
    }
    function Jt(t, e, r, n, s) {
        let { repeated: i, localName: o } = r;
        switch(r.oneof && ((t = t[r.oneof.localName]).case != o && delete t.value, t.case = o, o = "value"), r.kind){
            case "scalar":
            case "enum":
                const a = "enum" == r.kind ? D.INT32 : r.T;
                let u = It;
                if ("scalar" == r.kind && r.L > 0 && (u = Et), i) {
                    let r = t[o];
                    if (n == pt.LengthDelimited && a != D.STRING && a != D.BYTES) {
                        let t = e.uint32() + e.pos;
                        for(; e.pos < t;)r.push(u(e, a));
                    } else r.push(u(e, a));
                } else t[o] = u(e, a);
                break;
            case "message":
                const c = r.T;
                i ? t[o].push(Bt(e, new c, s, r)) : j(t[o]) ? Bt(e, t[o], s, r) : (t[o] = Bt(e, new c, s, r), !c.fieldWrapper || r.oneof || r.repeated || (t[o] = c.fieldWrapper.unwrapField(t[o])));
                break;
            case "map":
                let [l, m] = function(t, e, r) {
                    const n = e.uint32(), s = e.pos + n;
                    let i, o;
                    for(; e.pos < s;){
                        const [n] = e.tag();
                        switch(n){
                            case 1:
                                i = It(e, t.K);
                                break;
                            case 2:
                                switch(t.V.kind){
                                    case "scalar":
                                        o = It(e, t.V.T);
                                        break;
                                    case "enum":
                                        o = e.int32();
                                        break;
                                    case "message":
                                        o = Bt(e, new t.V.T, r, void 0);
                                }
                        }
                    }
                    void 0 === i && (i = M(t.K, U.BIGINT));
                    "string" != typeof i && "number" != typeof i && (i = i.toString());
                    if (void 0 === o) switch(t.V.kind){
                        case "scalar":
                            o = M(t.V.T, U.BIGINT);
                            break;
                        case "enum":
                            o = t.V.T.values[0].no;
                            break;
                        case "message":
                            o = new t.V.T;
                    }
                    return [
                        i,
                        o
                    ];
                }(r, e, s);
                t[o][l] = m;
        }
    }
    function Bt(t, e, r, n) {
        const s = e.getType().runtime.bin, i = n?.delimited;
        return s.readMessage(e, t, i ? n.no : t.uint32(), r, i), e;
    }
    function Et(t, e) {
        const r = It(t, e);
        return "bigint" == typeof r ? r.toString() : r;
    }
    function It(t, e) {
        switch(e){
            case D.STRING:
                return t.string();
            case D.BOOL:
                return t.bool();
            case D.DOUBLE:
                return t.double();
            case D.FLOAT:
                return t.float();
            case D.INT32:
                return t.int32();
            case D.INT64:
                return t.int64();
            case D.UINT64:
                return t.uint64();
            case D.FIXED64:
                return t.fixed64();
            case D.BYTES:
                return t.bytes();
            case D.FIXED32:
                return t.fixed32();
            case D.SFIXED32:
                return t.sfixed32();
            case D.SFIXED64:
                return t.sfixed64();
            case D.SINT64:
                return t.sint64();
            case D.UINT32:
                return t.uint32();
            case D.SINT32:
                return t.sint32();
        }
    }
    function Ct(t, e, r, n) {
        p(void 0 !== e);
        const s = t.repeated;
        switch(t.kind){
            case "scalar":
            case "enum":
                let i = "enum" == t.kind ? D.INT32 : t.T;
                if (s) if (p(Array.isArray(e)), t.packed) !function(t, e, r, n) {
                    if (!n.length) return;
                    t.tag(r, pt.LengthDelimited).fork();
                    let [, s] = qt(e);
                    for(let e = 0; e < n.length; e++)t[s](n[e]);
                    t.join();
                }(r, i, t.no, e);
                else for (const n of e)vt(r, i, t.no, n);
                else vt(r, i, t.no, e);
                break;
            case "message":
                if (s) {
                    p(Array.isArray(e));
                    for (const s of e)kt(r, n, t, s);
                } else kt(r, n, t, e);
                break;
            case "map":
                p("object" == typeof e && null != e);
                for (const [s, i] of Object.entries(e))bt(r, n, t, s, i);
        }
    }
    function bt(t, e, r, n, s) {
        t.tag(r.no, pt.LengthDelimited), t.fork();
        let i = n;
        switch(r.K){
            case D.INT32:
            case D.FIXED32:
            case D.UINT32:
            case D.SFIXED32:
            case D.SINT32:
                i = Number.parseInt(n);
                break;
            case D.BOOL:
                p("true" == n || "false" == n), i = "true" == n;
        }
        switch(vt(t, r.K, 1, i), r.V.kind){
            case "scalar":
                vt(t, r.V.T, 2, s);
                break;
            case "enum":
                vt(t, D.INT32, 2, s);
                break;
            case "message":
                p(void 0 !== s), t.tag(2, pt.LengthDelimited).bytes(s.toBinary(e));
        }
        t.join();
    }
    function kt(t, e, r, n) {
        const s = X(r.T, n);
        r.delimited ? t.tag(r.no, pt.StartGroup).raw(s.toBinary(e)).tag(r.no, pt.EndGroup) : t.tag(r.no, pt.LengthDelimited).bytes(s.toBinary(e));
    }
    function vt(t, e, r, n) {
        p(void 0 !== n);
        let [s, i] = qt(e);
        t.tag(r, s)[i](n);
    }
    function qt(t) {
        let e = pt.Varint;
        switch(t){
            case D.BYTES:
            case D.STRING:
                e = pt.LengthDelimited;
                break;
            case D.DOUBLE:
            case D.FIXED64:
            case D.SFIXED64:
                e = pt.Bit64;
                break;
            case D.FIXED32:
            case D.SFIXED32:
            case D.FLOAT:
                e = pt.Bit32;
        }
        return [
            e,
            D[t].toLowerCase()
        ];
    }
    function Rt(t) {
        if (void 0 === t) return t;
        if (j(t)) return t.clone();
        if (t instanceof Uint8Array) {
            const e = new Uint8Array(t.byteLength);
            return e.set(t), e;
        }
        return t;
    }
    function Pt(t) {
        return t instanceof Uint8Array ? t : new Uint8Array(t);
    }
    function Tt(t, e, r) {
        return {
            syntax: t,
            json: {
                makeReadOptions: et,
                makeWriteOptions: rt,
                readMessage (t, e, r, n) {
                    if (null == e || Array.isArray(e) || "object" != typeof e) throw new Error(`cannot decode message ${t.typeName} from JSON: ${it(e)}`);
                    n = n ?? new t;
                    const s = new Map, i = r.typeRegistry;
                    for (const [o, a] of Object.entries(e)){
                        const e = t.fields.findJsonName(o);
                        if (e) {
                            if (e.oneof) {
                                if (null === a && "scalar" == e.kind) continue;
                                const r = s.get(e.oneof);
                                if (void 0 !== r) throw new Error(`cannot decode message ${t.typeName} from JSON: multiple keys for oneof "${e.oneof.name}" present: "${r}", "${o}"`);
                                s.set(e.oneof, o);
                            }
                            ot(n, a, e, r, t);
                        } else {
                            let e = !1;
                            if (i?.findExtension && o.startsWith("[") && o.endsWith("]")) {
                                const s = i.findExtension(o.substring(1, o.length - 1));
                                if (s && s.extendee.typeName == t.typeName) {
                                    e = !0;
                                    const [t, i] = F(s);
                                    ot(t, a, s.field, r, s), K(n, s, i(), r);
                                }
                            }
                            if (!e && !r.ignoreUnknownFields) throw new Error(`cannot decode message ${t.typeName} from JSON: key "${o}" is unknown`);
                        }
                    }
                    return n;
                },
                writeMessage (t, e) {
                    const r = t.getType(), n = {};
                    let s;
                    try {
                        for (s of r.fields.byNumber()){
                            if (!W(s, t)) {
                                if (s.req) throw "required field not set";
                                if (!e.emitDefaultValues) continue;
                                if (!lt(s)) continue;
                            }
                            const r = mt(s, s.oneof ? t[s.oneof.localName].value : t[s.localName], e);
                            void 0 !== r && (n[e.useProtoFieldName ? s.name : s.jsonName] = r);
                        }
                        const i = e.typeRegistry;
                        if (i?.findExtensionFor) for (const s of r.runtime.bin.listUnknownFields(t)){
                            const o = i.findExtensionFor(r.typeName, s.no);
                            if (o && V(t, o)) {
                                const r = H(t, o, e), s = mt(o.field, r, e);
                                void 0 !== s && (n[o.field.jsonName] = s);
                            }
                        }
                    } catch (t) {
                        const e = s ? `cannot encode field ${r.typeName}.${s.name} to JSON` : `cannot encode message ${r.typeName} to JSON`, n = t instanceof Error ? t.message : String(t);
                        throw new Error(e + (n.length > 0 ? `: ${n}` : ""));
                    }
                    return n;
                },
                readScalar: (t, e, r)=>ut(t, e, r ?? U.BIGINT, !0),
                writeScalar (t, e, r) {
                    if (void 0 !== e) return r || O(t, e) ? ft(t, e) : void 0;
                },
                debug: it
            },
            bin: {
                makeReadOptions: wt,
                makeWriteOptions: St,
                listUnknownFields: (t)=>t[At] ?? [],
                discardUnknownFields (t) {
                    delete t[At];
                },
                writeUnknownFields (t, e) {
                    const r = t[At];
                    if (r) for (const t of r)e.tag(t.no, t.wireType).raw(t.data);
                },
                onUnknownField (t, e, r, n) {
                    const s = t;
                    Array.isArray(s[At]) || (s[At] = []), s[At].push({
                        no: e,
                        wireType: r,
                        data: new Uint8Array(n)
                    });
                },
                readMessage (t, e, r, n, s) {
                    const i = t.getType(), o = s ? e.len : e.pos + r;
                    let a, u;
                    for(; e.pos < o && ([a, u] = e.tag(), !0 !== s || u != pt.EndGroup);){
                        const r = i.fields.find(a);
                        if (!r) {
                            const r = e.skip(u, a);
                            n.readUnknownFields && this.onUnknownField(t, a, u, r);
                            continue;
                        }
                        Jt(t, e, r, u, n);
                    }
                    if (s && (u != pt.EndGroup || a !== r)) throw new Error("invalid end group tag");
                },
                readField: Jt,
                writeMessage (t, e, r) {
                    const n = t.getType();
                    for (const s of n.fields.byNumber())if (W(s, t)) Ct(s, s.oneof ? t[s.oneof.localName].value : t[s.localName], e, r);
                    else if (s.req) throw new Error(`cannot encode field ${n.typeName}.${s.name} to binary: required field not set`);
                    return r.writeUnknownFields && this.writeUnknownFields(t, e), e;
                },
                writeField (t, e, r, n) {
                    void 0 !== e && Ct(t, e, r, n);
                }
            },
            util: {
                ...{
                    setEnumType: w,
                    initPartial (t, e) {
                        if (void 0 === t) return;
                        const r = e.getType();
                        for (const n of r.fields.byMember()){
                            const r = n.localName, s = e, i = t;
                            if (null != i[r]) switch(n.kind){
                                case "oneof":
                                    const t = i[r].case;
                                    if (void 0 === t) continue;
                                    const e = n.findField(t);
                                    let o = i[r].value;
                                    e && "message" == e.kind && !j(o, e.T) ? o = new e.T(o) : e && "scalar" === e.kind && e.T === D.BYTES && (o = Pt(o)), s[r] = {
                                        case: t,
                                        value: o
                                    };
                                    break;
                                case "scalar":
                                case "enum":
                                    let a = i[r];
                                    n.T === D.BYTES && (a = n.repeated ? a.map(Pt) : Pt(a)), s[r] = a;
                                    break;
                                case "map":
                                    switch(n.V.kind){
                                        case "scalar":
                                        case "enum":
                                            if (n.V.T === D.BYTES) for (const [t, e] of Object.entries(i[r]))s[r][t] = Pt(e);
                                            else Object.assign(s[r], i[r]);
                                            break;
                                        case "message":
                                            const t = n.V.T;
                                            for (const e of Object.keys(i[r])){
                                                let n = i[r][e];
                                                t.fieldWrapper || (n = new t(n)), s[r][e] = n;
                                            }
                                    }
                                    break;
                                case "message":
                                    const u = n.T;
                                    if (n.repeated) s[r] = i[r].map((t)=>j(t, u) ? t : new u(t));
                                    else {
                                        const t = i[r];
                                        u.fieldWrapper ? "google.protobuf.BytesValue" === u.typeName ? s[r] = Pt(t) : s[r] = t : s[r] = j(t, u) ? t : new u(t);
                                    }
                            }
                        }
                    },
                    equals: (t, e, r)=>e === r || !(!e || !r) && t.fields.byMember().every((t)=>{
                            const n = e[t.localName], s = r[t.localName];
                            if (t.repeated) {
                                if (n.length !== s.length) return !1;
                                switch(t.kind){
                                    case "message":
                                        return n.every((e, r)=>t.T.equals(e, s[r]));
                                    case "scalar":
                                        return n.every((e, r)=>Q(t.T, e, s[r]));
                                    case "enum":
                                        return n.every((t, e)=>Q(D.INT32, t, s[e]));
                                }
                                throw new Error(`repeated cannot contain ${t.kind}`);
                            }
                            switch(t.kind){
                                case "message":
                                    return t.T.equals(n, s);
                                case "enum":
                                    return Q(D.INT32, n, s);
                                case "scalar":
                                    return Q(t.T, n, s);
                                case "oneof":
                                    if (n.case !== s.case) return !1;
                                    const e = t.findField(n.case);
                                    if (void 0 === e) return !0;
                                    switch(e.kind){
                                        case "message":
                                            return e.T.equals(n.value, s.value);
                                        case "enum":
                                            return Q(D.INT32, n.value, s.value);
                                        case "scalar":
                                            return Q(e.T, n.value, s.value);
                                    }
                                    throw new Error(`oneof cannot contain ${e.kind}`);
                                case "map":
                                    const r = Object.keys(n).concat(Object.keys(s));
                                    switch(t.V.kind){
                                        case "message":
                                            const e = t.V.T;
                                            return r.every((t)=>e.equals(n[t], s[t]));
                                        case "enum":
                                            return r.every((t)=>Q(D.INT32, n[t], s[t]));
                                        case "scalar":
                                            const i = t.V.T;
                                            return r.every((t)=>Q(i, n[t], s[t]));
                                    }
                            }
                        }),
                    clone (t) {
                        const e = t.getType(), r = new e, n = r;
                        for (const r of e.fields.byMember()){
                            const e = t[r.localName];
                            let s;
                            if (r.repeated) s = e.map(Rt);
                            else if ("map" == r.kind) {
                                s = n[r.localName];
                                for (const [t, r] of Object.entries(e))s[t] = Rt(r);
                            } else s = "oneof" == r.kind ? r.findField(e.case) ? {
                                case: e.case,
                                value: Rt(e.value)
                            } : {
                                case: void 0
                            } : Rt(e);
                            n[r.localName] = s;
                        }
                        for (const r of e.runtime.bin.listUnknownFields(t))e.runtime.bin.onUnknownField(n, r.no, r.wireType, r.data);
                        return r;
                    }
                },
                newFieldList: e,
                initFields: r
            },
            makeMessageType (t, e, r) {
                return function(t, e, r, n) {
                    const s = n?.localName ?? e.substring(e.lastIndexOf(".") + 1), i = {
                        [s]: function(e) {
                            t.util.initFields(this), t.util.initPartial(e, this);
                        }
                    }[s];
                    return Object.setPrototypeOf(i.prototype, new E), Object.assign(i, {
                        runtime: t,
                        typeName: e,
                        fields: t.util.newFieldList(r),
                        fromBinary: (t, e)=>(new i).fromBinary(t, e),
                        fromJson: (t, e)=>(new i).fromJson(t, e),
                        fromJsonString: (t, e)=>(new i).fromJsonString(t, e),
                        equals: (e, r)=>t.util.equals(i, e, r)
                    }), i;
                }(this, t, e, r);
            },
            makeEnum: J,
            makeEnumType: S,
            getEnumType: y,
            makeExtension (t, e, r) {
                return function(t, e, r, n) {
                    let s;
                    return {
                        typeName: e,
                        extendee: r,
                        get field () {
                            if (!s) {
                                const r = "function" == typeof n ? n() : n;
                                r.name = e.split(".").pop(), r.jsonName = `[${e}]`, s = t.util.newFieldList([
                                    r
                                ]).list()[0];
                            }
                            return s;
                        },
                        runtime: t
                    };
                }(this, t, e, r);
            }
        };
    }
    class xt {
        constructor(t, e){
            this._fields = t, this._normalizer = e;
        }
        findJsonName(t) {
            if (!this.jsonNames) {
                const t = {};
                for (const e of this.list())t[e.jsonName] = t[e.name] = e;
                this.jsonNames = t;
            }
            return this.jsonNames[t];
        }
        find(t) {
            if (!this.numbers) {
                const t = {};
                for (const e of this.list())t[e.no] = e;
                this.numbers = t;
            }
            return this.numbers[t];
        }
        list() {
            return this.all || (this.all = this._normalizer(this._fields)), this.all;
        }
        byNumber() {
            return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((t, e)=>t.no - e.no)), this.numbersAsc;
        }
        byMember() {
            if (!this.members) {
                this.members = [];
                const t = this.members;
                let e;
                for (const r of this.list())r.oneof ? r.oneof !== e && (e = r.oneof, t.push(e)) : t.push(r);
            }
            return this.members;
        }
    }
    function Nt(t, e) {
        const r = Qt(t);
        return e ? r : $t(Lt(r));
    }
    function Dt(t) {
        return Nt(t, !1);
    }
    const Ut = Qt;
    function Qt(t) {
        let e = !1;
        const r = [];
        for(let n = 0; n < t.length; n++){
            let s = t.charAt(n);
            switch(s){
                case "_":
                    e = !0;
                    break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    r.push(s), e = !1;
                    break;
                default:
                    e && (e = !1, s = s.toUpperCase()), r.push(s);
            }
        }
        return r.join("");
    }
    const Mt = new Set([
        "constructor",
        "toString",
        "toJSON",
        "valueOf"
    ]), Ot = new Set([
        "getType",
        "clone",
        "equals",
        "fromBinary",
        "fromJson",
        "fromJsonString",
        "toBinary",
        "toJson",
        "toJsonString",
        "toObject"
    ]), Ft = (t)=>`${t}$`, Lt = (t)=>Ot.has(t) ? Ft(t) : t, $t = (t)=>Mt.has(t) ? Ft(t) : t;
    class Gt {
        constructor(t){
            this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.req = !1, this.default = void 0, this.fields = [], this.name = t, this.localName = Dt(t);
        }
        addField(t) {
            p(t.oneof === this, `field ${t.name} not one of ${this.name}`), this.fields.push(t);
        }
        findField(t) {
            if (!this._lookup) {
                this._lookup = Object.create(null);
                for(let t = 0; t < this.fields.length; t++)this._lookup[this.fields[t].localName] = this.fields[t];
            }
            return this._lookup[t];
        }
    }
    function Ht(t, e) {
        const r = [];
        let n;
        for (const s of "function" == typeof t ? t() : t){
            const t = s;
            if (t.localName = Nt(s.name, void 0 !== s.oneof), t.jsonName = s.jsonName ?? Ut(s.name), t.repeated = s.repeated ?? !1, "scalar" == s.kind && (t.L = s.L ?? U.BIGINT), t.delimited = s.delimited ?? !1, t.req = s.req ?? !1, t.opt = s.opt ?? !1, void 0 === s.packed && (t.packed = !!e && ("enum" == s.kind || "scalar" == s.kind && s.T != D.BYTES && s.T != D.STRING)), void 0 !== s.oneof) {
                const e = "string" == typeof s.oneof ? s.oneof : s.oneof.name;
                n && n.name == e || (n = new Gt(e)), t.oneof = n, n.addField(t);
            }
            r.push(t);
        }
        return r;
    }
    const Kt = Tt("proto3", (t)=>new xt(t, (t)=>Ht(t, !0)), (t)=>{
        for (const e of t.getType().fields.byMember()){
            if (e.opt) continue;
            const r = e.localName, n = t;
            if (e.repeated) n[r] = [];
            else switch(e.kind){
                case "oneof":
                    n[r] = {
                        case: void 0
                    };
                    break;
                case "enum":
                    n[r] = 0;
                    break;
                case "map":
                    n[r] = {};
                    break;
                case "scalar":
                    n[r] = M(e.T, e.L);
            }
        }
    }), Vt = Tt("proto2", (t)=>new xt(t, (t)=>Ht(t, !1)), (t)=>{
        for (const e of t.getType().fields.byMember()){
            const r = e.localName, n = t;
            if (e.repeated) n[r] = [];
            else switch(e.kind){
                case "oneof":
                    n[r] = {
                        case: void 0
                    };
                    break;
                case "map":
                    n[r] = {};
            }
        }
    });
    Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY;
    var zt = ((t)=>(t[t.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", t[t.EDITION_LEGACY = 900] = "EDITION_LEGACY", t[t.EDITION_PROTO2 = 998] = "EDITION_PROTO2", t[t.EDITION_PROTO3 = 999] = "EDITION_PROTO3", t[t.EDITION_2023 = 1e3] = "EDITION_2023", t[t.EDITION_2024 = 1001] = "EDITION_2024", t[t.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", t[t.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", t[t.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", t[t.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", t[t.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY", t[t.EDITION_MAX = 2147483647] = "EDITION_MAX", t))(zt || {});
    Vt.util.setEnumType(zt, "google.protobuf.Edition", [
        {
            no: 0,
            name: "EDITION_UNKNOWN"
        },
        {
            no: 900,
            name: "EDITION_LEGACY"
        },
        {
            no: 998,
            name: "EDITION_PROTO2"
        },
        {
            no: 999,
            name: "EDITION_PROTO3"
        },
        {
            no: 1e3,
            name: "EDITION_2023"
        },
        {
            no: 1001,
            name: "EDITION_2024"
        },
        {
            no: 1,
            name: "EDITION_1_TEST_ONLY"
        },
        {
            no: 2,
            name: "EDITION_2_TEST_ONLY"
        },
        {
            no: 99997,
            name: "EDITION_99997_TEST_ONLY"
        },
        {
            no: 99998,
            name: "EDITION_99998_TEST_ONLY"
        },
        {
            no: 99999,
            name: "EDITION_99999_TEST_ONLY"
        },
        {
            no: 2147483647,
            name: "EDITION_MAX"
        }
    ]);
    const Wt = class t extends E {
        constructor(t){
            super(), this.file = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    Wt.runtime = Vt, Wt.typeName = "google.protobuf.FileDescriptorSet", Wt.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "file",
                kind: "message",
                T: jt,
                repeated: !0
            }
        ]);
    const Yt = class t extends E {
        constructor(t){
            super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    Yt.runtime = Vt, Yt.typeName = "google.protobuf.FileDescriptorProto", Yt.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "package",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "dependency",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 10,
                name: "public_dependency",
                kind: "scalar",
                T: 5,
                repeated: !0
            },
            {
                no: 11,
                name: "weak_dependency",
                kind: "scalar",
                T: 5,
                repeated: !0
            },
            {
                no: 4,
                name: "message_type",
                kind: "message",
                T: Zt,
                repeated: !0
            },
            {
                no: 5,
                name: "enum_type",
                kind: "message",
                T: ge,
                repeated: !0
            },
            {
                no: 6,
                name: "service",
                kind: "message",
                T: Je,
                repeated: !0
            },
            {
                no: 7,
                name: "extension",
                kind: "message",
                T: le,
                repeated: !0
            },
            {
                no: 8,
                name: "options",
                kind: "message",
                T: Ce,
                opt: !0
            },
            {
                no: 9,
                name: "source_code_info",
                kind: "message",
                T: fr,
                opt: !0
            },
            {
                no: 12,
                name: "syntax",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 14,
                name: "edition",
                kind: "enum",
                T: Vt.getEnumType(zt),
                opt: !0
            }
        ]);
    let jt = Yt;
    const Xt = class t extends E {
        constructor(t){
            super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    Xt.runtime = Vt, Xt.typeName = "google.protobuf.DescriptorProto", Xt.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "field",
                kind: "message",
                T: le,
                repeated: !0
            },
            {
                no: 6,
                name: "extension",
                kind: "message",
                T: le,
                repeated: !0
            },
            {
                no: 3,
                name: "nested_type",
                kind: "message",
                T: Xt,
                repeated: !0
            },
            {
                no: 4,
                name: "enum_type",
                kind: "message",
                T: ge,
                repeated: !0
            },
            {
                no: 5,
                name: "extension_range",
                kind: "message",
                T: ee,
                repeated: !0
            },
            {
                no: 8,
                name: "oneof_decl",
                kind: "message",
                T: pe,
                repeated: !0
            },
            {
                no: 7,
                name: "options",
                kind: "message",
                T: ve,
                opt: !0
            },
            {
                no: 9,
                name: "reserved_range",
                kind: "message",
                T: ne,
                repeated: !0
            },
            {
                no: 10,
                name: "reserved_name",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]);
    let Zt = Xt;
    const te = class t extends E {
        constructor(t){
            super(), Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    te.runtime = Vt, te.typeName = "google.protobuf.DescriptorProto.ExtensionRange", te.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "start",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 2,
                name: "end",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 3,
                name: "options",
                kind: "message",
                T: ie,
                opt: !0
            }
        ]);
    let ee = te;
    const re = class t extends E {
        constructor(t){
            super(), Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    re.runtime = Vt, re.typeName = "google.protobuf.DescriptorProto.ReservedRange", re.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "start",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 2,
                name: "end",
                kind: "scalar",
                T: 5,
                opt: !0
            }
        ]);
    let ne = re;
    const se = class t extends E {
        constructor(t){
            super(), this.uninterpretedOption = [], this.declaration = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    se.runtime = Vt, se.typeName = "google.protobuf.ExtensionRangeOptions", se.fields = Vt.util.newFieldList(()=>[
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: Xe,
                repeated: !0
            },
            {
                no: 2,
                name: "declaration",
                kind: "message",
                T: ue,
                repeated: !0
            },
            {
                no: 50,
                name: "features",
                kind: "message",
                T: rr,
                opt: !0
            },
            {
                no: 3,
                name: "verification",
                kind: "enum",
                T: Vt.getEnumType(oe),
                opt: !0,
                default: 1
            }
        ]);
    let ie = se;
    var oe = ((t)=>(t[t.DECLARATION = 0] = "DECLARATION", t[t.UNVERIFIED = 1] = "UNVERIFIED", t))(oe || {});
    Vt.util.setEnumType(oe, "google.protobuf.ExtensionRangeOptions.VerificationState", [
        {
            no: 0,
            name: "DECLARATION"
        },
        {
            no: 1,
            name: "UNVERIFIED"
        }
    ]);
    const ae = class t extends E {
        constructor(t){
            super(), Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    ae.runtime = Vt, ae.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", ae.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "number",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 2,
                name: "full_name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "type",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 5,
                name: "reserved",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 6,
                name: "repeated",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]);
    let ue = ae;
    const ce = class t extends E {
        constructor(t){
            super(), Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    ce.runtime = Vt, ce.typeName = "google.protobuf.FieldDescriptorProto", ce.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "number",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 4,
                name: "label",
                kind: "enum",
                T: Vt.getEnumType(de),
                opt: !0
            },
            {
                no: 5,
                name: "type",
                kind: "enum",
                T: Vt.getEnumType(me),
                opt: !0
            },
            {
                no: 6,
                name: "type_name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "extendee",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 7,
                name: "default_value",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 9,
                name: "oneof_index",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 10,
                name: "json_name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 8,
                name: "options",
                kind: "message",
                T: Re,
                opt: !0
            },
            {
                no: 17,
                name: "proto3_optional",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]);
    let le = ce;
    var me = ((t)=>(t[t.DOUBLE = 1] = "DOUBLE", t[t.FLOAT = 2] = "FLOAT", t[t.INT64 = 3] = "INT64", t[t.UINT64 = 4] = "UINT64", t[t.INT32 = 5] = "INT32", t[t.FIXED64 = 6] = "FIXED64", t[t.FIXED32 = 7] = "FIXED32", t[t.BOOL = 8] = "BOOL", t[t.STRING = 9] = "STRING", t[t.GROUP = 10] = "GROUP", t[t.MESSAGE = 11] = "MESSAGE", t[t.BYTES = 12] = "BYTES", t[t.UINT32 = 13] = "UINT32", t[t.ENUM = 14] = "ENUM", t[t.SFIXED32 = 15] = "SFIXED32", t[t.SFIXED64 = 16] = "SFIXED64", t[t.SINT32 = 17] = "SINT32", t[t.SINT64 = 18] = "SINT64", t))(me || {});
    Vt.util.setEnumType(me, "google.protobuf.FieldDescriptorProto.Type", [
        {
            no: 1,
            name: "TYPE_DOUBLE"
        },
        {
            no: 2,
            name: "TYPE_FLOAT"
        },
        {
            no: 3,
            name: "TYPE_INT64"
        },
        {
            no: 4,
            name: "TYPE_UINT64"
        },
        {
            no: 5,
            name: "TYPE_INT32"
        },
        {
            no: 6,
            name: "TYPE_FIXED64"
        },
        {
            no: 7,
            name: "TYPE_FIXED32"
        },
        {
            no: 8,
            name: "TYPE_BOOL"
        },
        {
            no: 9,
            name: "TYPE_STRING"
        },
        {
            no: 10,
            name: "TYPE_GROUP"
        },
        {
            no: 11,
            name: "TYPE_MESSAGE"
        },
        {
            no: 12,
            name: "TYPE_BYTES"
        },
        {
            no: 13,
            name: "TYPE_UINT32"
        },
        {
            no: 14,
            name: "TYPE_ENUM"
        },
        {
            no: 15,
            name: "TYPE_SFIXED32"
        },
        {
            no: 16,
            name: "TYPE_SFIXED64"
        },
        {
            no: 17,
            name: "TYPE_SINT32"
        },
        {
            no: 18,
            name: "TYPE_SINT64"
        }
    ]);
    var de = ((t)=>(t[t.OPTIONAL = 1] = "OPTIONAL", t[t.REPEATED = 3] = "REPEATED", t[t.REQUIRED = 2] = "REQUIRED", t))(de || {});
    Vt.util.setEnumType(de, "google.protobuf.FieldDescriptorProto.Label", [
        {
            no: 1,
            name: "LABEL_OPTIONAL"
        },
        {
            no: 3,
            name: "LABEL_REPEATED"
        },
        {
            no: 2,
            name: "LABEL_REQUIRED"
        }
    ]);
    const fe = class t extends E {
        constructor(t){
            super(), Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    fe.runtime = Vt, fe.typeName = "google.protobuf.OneofDescriptorProto", fe.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "options",
                kind: "message",
                T: Fe,
                opt: !0
            }
        ]);
    let pe = fe;
    const he = class t extends E {
        constructor(t){
            super(), this.value = [], this.reservedRange = [], this.reservedName = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    he.runtime = Vt, he.typeName = "google.protobuf.EnumDescriptorProto", he.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "value",
                kind: "message",
                T: we,
                repeated: !0
            },
            {
                no: 3,
                name: "options",
                kind: "message",
                T: $e,
                opt: !0
            },
            {
                no: 4,
                name: "reserved_range",
                kind: "message",
                T: _e,
                repeated: !0
            },
            {
                no: 5,
                name: "reserved_name",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]);
    let ge = he;
    const Ae = class t extends E {
        constructor(t){
            super(), Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    Ae.runtime = Vt, Ae.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", Ae.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "start",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 2,
                name: "end",
                kind: "scalar",
                T: 5,
                opt: !0
            }
        ]);
    let _e = Ae;
    const ye = class t extends E {
        constructor(t){
            super(), Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    ye.runtime = Vt, ye.typeName = "google.protobuf.EnumValueDescriptorProto", ye.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "number",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 3,
                name: "options",
                kind: "message",
                T: He,
                opt: !0
            }
        ]);
    let we = ye;
    const Se = class t extends E {
        constructor(t){
            super(), this.method = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    Se.runtime = Vt, Se.typeName = "google.protobuf.ServiceDescriptorProto", Se.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "method",
                kind: "message",
                T: Ee,
                repeated: !0
            },
            {
                no: 3,
                name: "options",
                kind: "message",
                T: Ve,
                opt: !0
            }
        ]);
    let Je = Se;
    const Be = class t extends E {
        constructor(t){
            super(), Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    Be.runtime = Vt, Be.typeName = "google.protobuf.MethodDescriptorProto", Be.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "input_type",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "output_type",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "options",
                kind: "message",
                T: We,
                opt: !0
            },
            {
                no: 5,
                name: "client_streaming",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 6,
                name: "server_streaming",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            }
        ]);
    let Ee = Be;
    const Ie = class t extends E {
        constructor(t){
            super(), this.uninterpretedOption = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    Ie.runtime = Vt, Ie.typeName = "google.protobuf.FileOptions", Ie.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "java_package",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 8,
                name: "java_outer_classname",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 10,
                name: "java_multiple_files",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 20,
                name: "java_generate_equals_and_hash",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 27,
                name: "java_string_check_utf8",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 9,
                name: "optimize_for",
                kind: "enum",
                T: Vt.getEnumType(be),
                opt: !0,
                default: 1
            },
            {
                no: 11,
                name: "go_package",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 16,
                name: "cc_generic_services",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 17,
                name: "java_generic_services",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 18,
                name: "py_generic_services",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 23,
                name: "deprecated",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 31,
                name: "cc_enable_arenas",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !0
            },
            {
                no: 36,
                name: "objc_class_prefix",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 37,
                name: "csharp_namespace",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 39,
                name: "swift_prefix",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 40,
                name: "php_class_prefix",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 41,
                name: "php_namespace",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 44,
                name: "php_metadata_namespace",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 45,
                name: "ruby_package",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 50,
                name: "features",
                kind: "message",
                T: rr,
                opt: !0
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: Xe,
                repeated: !0
            }
        ]);
    let Ce = Ie;
    var be = ((t)=>(t[t.SPEED = 1] = "SPEED", t[t.CODE_SIZE = 2] = "CODE_SIZE", t[t.LITE_RUNTIME = 3] = "LITE_RUNTIME", t))(be || {});
    Vt.util.setEnumType(be, "google.protobuf.FileOptions.OptimizeMode", [
        {
            no: 1,
            name: "SPEED"
        },
        {
            no: 2,
            name: "CODE_SIZE"
        },
        {
            no: 3,
            name: "LITE_RUNTIME"
        }
    ]);
    const ke = class t extends E {
        constructor(t){
            super(), this.uninterpretedOption = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    ke.runtime = Vt, ke.typeName = "google.protobuf.MessageOptions", ke.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "message_set_wire_format",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 2,
                name: "no_standard_descriptor_accessor",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 3,
                name: "deprecated",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 7,
                name: "map_entry",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 11,
                name: "deprecated_legacy_json_field_conflicts",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 12,
                name: "features",
                kind: "message",
                T: rr,
                opt: !0
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: Xe,
                repeated: !0
            }
        ]);
    let ve = ke;
    const qe = class t extends E {
        constructor(t){
            super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    qe.runtime = Vt, qe.typeName = "google.protobuf.FieldOptions", qe.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "ctype",
                kind: "enum",
                T: Vt.getEnumType(Pe),
                opt: !0,
                default: 0
            },
            {
                no: 2,
                name: "packed",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 6,
                name: "jstype",
                kind: "enum",
                T: Vt.getEnumType(Te),
                opt: !0,
                default: 0
            },
            {
                no: 5,
                name: "lazy",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 15,
                name: "unverified_lazy",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 3,
                name: "deprecated",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 10,
                name: "weak",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 16,
                name: "debug_redact",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 17,
                name: "retention",
                kind: "enum",
                T: Vt.getEnumType(xe),
                opt: !0
            },
            {
                no: 19,
                name: "targets",
                kind: "enum",
                T: Vt.getEnumType(Ne),
                repeated: !0
            },
            {
                no: 20,
                name: "edition_defaults",
                kind: "message",
                T: Ue,
                repeated: !0
            },
            {
                no: 21,
                name: "features",
                kind: "message",
                T: rr,
                opt: !0
            },
            {
                no: 22,
                name: "feature_support",
                kind: "message",
                T: Me,
                opt: !0
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: Xe,
                repeated: !0
            }
        ]);
    let Re = qe;
    var Pe = ((t)=>(t[t.STRING = 0] = "STRING", t[t.CORD = 1] = "CORD", t[t.STRING_PIECE = 2] = "STRING_PIECE", t))(Pe || {});
    Vt.util.setEnumType(Pe, "google.protobuf.FieldOptions.CType", [
        {
            no: 0,
            name: "STRING"
        },
        {
            no: 1,
            name: "CORD"
        },
        {
            no: 2,
            name: "STRING_PIECE"
        }
    ]);
    var Te = ((t)=>(t[t.JS_NORMAL = 0] = "JS_NORMAL", t[t.JS_STRING = 1] = "JS_STRING", t[t.JS_NUMBER = 2] = "JS_NUMBER", t))(Te || {});
    Vt.util.setEnumType(Te, "google.protobuf.FieldOptions.JSType", [
        {
            no: 0,
            name: "JS_NORMAL"
        },
        {
            no: 1,
            name: "JS_STRING"
        },
        {
            no: 2,
            name: "JS_NUMBER"
        }
    ]);
    var xe = ((t)=>(t[t.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", t[t.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", t[t.RETENTION_SOURCE = 2] = "RETENTION_SOURCE", t))(xe || {});
    Vt.util.setEnumType(xe, "google.protobuf.FieldOptions.OptionRetention", [
        {
            no: 0,
            name: "RETENTION_UNKNOWN"
        },
        {
            no: 1,
            name: "RETENTION_RUNTIME"
        },
        {
            no: 2,
            name: "RETENTION_SOURCE"
        }
    ]);
    var Ne = ((t)=>(t[t.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", t[t.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", t[t.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", t[t.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", t[t.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", t[t.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", t[t.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", t[t.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", t[t.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", t[t.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD", t))(Ne || {});
    Vt.util.setEnumType(Ne, "google.protobuf.FieldOptions.OptionTargetType", [
        {
            no: 0,
            name: "TARGET_TYPE_UNKNOWN"
        },
        {
            no: 1,
            name: "TARGET_TYPE_FILE"
        },
        {
            no: 2,
            name: "TARGET_TYPE_EXTENSION_RANGE"
        },
        {
            no: 3,
            name: "TARGET_TYPE_MESSAGE"
        },
        {
            no: 4,
            name: "TARGET_TYPE_FIELD"
        },
        {
            no: 5,
            name: "TARGET_TYPE_ONEOF"
        },
        {
            no: 6,
            name: "TARGET_TYPE_ENUM"
        },
        {
            no: 7,
            name: "TARGET_TYPE_ENUM_ENTRY"
        },
        {
            no: 8,
            name: "TARGET_TYPE_SERVICE"
        },
        {
            no: 9,
            name: "TARGET_TYPE_METHOD"
        }
    ]);
    const De = class t extends E {
        constructor(t){
            super(), Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    De.runtime = Vt, De.typeName = "google.protobuf.FieldOptions.EditionDefault", De.fields = Vt.util.newFieldList(()=>[
            {
                no: 3,
                name: "edition",
                kind: "enum",
                T: Vt.getEnumType(zt),
                opt: !0
            },
            {
                no: 2,
                name: "value",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]);
    let Ue = De;
    const Qe = class t extends E {
        constructor(t){
            super(), Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    Qe.runtime = Vt, Qe.typeName = "google.protobuf.FieldOptions.FeatureSupport", Qe.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "edition_introduced",
                kind: "enum",
                T: Vt.getEnumType(zt),
                opt: !0
            },
            {
                no: 2,
                name: "edition_deprecated",
                kind: "enum",
                T: Vt.getEnumType(zt),
                opt: !0
            },
            {
                no: 3,
                name: "deprecation_warning",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "edition_removed",
                kind: "enum",
                T: Vt.getEnumType(zt),
                opt: !0
            }
        ]);
    let Me = Qe;
    const Oe = class t extends E {
        constructor(t){
            super(), this.uninterpretedOption = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    Oe.runtime = Vt, Oe.typeName = "google.protobuf.OneofOptions", Oe.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "features",
                kind: "message",
                T: rr,
                opt: !0
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: Xe,
                repeated: !0
            }
        ]);
    let Fe = Oe;
    const Le = class t extends E {
        constructor(t){
            super(), this.uninterpretedOption = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    Le.runtime = Vt, Le.typeName = "google.protobuf.EnumOptions", Le.fields = Vt.util.newFieldList(()=>[
            {
                no: 2,
                name: "allow_alias",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 3,
                name: "deprecated",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 6,
                name: "deprecated_legacy_json_field_conflicts",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 7,
                name: "features",
                kind: "message",
                T: rr,
                opt: !0
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: Xe,
                repeated: !0
            }
        ]);
    let $e = Le;
    const Ge = class t extends E {
        constructor(t){
            super(), this.uninterpretedOption = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    Ge.runtime = Vt, Ge.typeName = "google.protobuf.EnumValueOptions", Ge.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "deprecated",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 2,
                name: "features",
                kind: "message",
                T: rr,
                opt: !0
            },
            {
                no: 3,
                name: "debug_redact",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 4,
                name: "feature_support",
                kind: "message",
                T: Me,
                opt: !0
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: Xe,
                repeated: !0
            }
        ]);
    let He = Ge;
    const Ke = class t extends E {
        constructor(t){
            super(), this.uninterpretedOption = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    Ke.runtime = Vt, Ke.typeName = "google.protobuf.ServiceOptions", Ke.fields = Vt.util.newFieldList(()=>[
            {
                no: 34,
                name: "features",
                kind: "message",
                T: rr,
                opt: !0
            },
            {
                no: 33,
                name: "deprecated",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: Xe,
                repeated: !0
            }
        ]);
    let Ve = Ke;
    const ze = class t extends E {
        constructor(t){
            super(), this.uninterpretedOption = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    ze.runtime = Vt, ze.typeName = "google.protobuf.MethodOptions", ze.fields = Vt.util.newFieldList(()=>[
            {
                no: 33,
                name: "deprecated",
                kind: "scalar",
                T: 8,
                opt: !0,
                default: !1
            },
            {
                no: 34,
                name: "idempotency_level",
                kind: "enum",
                T: Vt.getEnumType(Ye),
                opt: !0,
                default: 0
            },
            {
                no: 35,
                name: "features",
                kind: "message",
                T: rr,
                opt: !0
            },
            {
                no: 999,
                name: "uninterpreted_option",
                kind: "message",
                T: Xe,
                repeated: !0
            }
        ]);
    let We = ze;
    var Ye = ((t)=>(t[t.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", t[t.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", t[t.IDEMPOTENT = 2] = "IDEMPOTENT", t))(Ye || {});
    Vt.util.setEnumType(Ye, "google.protobuf.MethodOptions.IdempotencyLevel", [
        {
            no: 0,
            name: "IDEMPOTENCY_UNKNOWN"
        },
        {
            no: 1,
            name: "NO_SIDE_EFFECTS"
        },
        {
            no: 2,
            name: "IDEMPOTENT"
        }
    ]);
    const je = class t extends E {
        constructor(t){
            super(), this.name = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    je.runtime = Vt, je.typeName = "google.protobuf.UninterpretedOption", je.fields = Vt.util.newFieldList(()=>[
            {
                no: 2,
                name: "name",
                kind: "message",
                T: tr,
                repeated: !0
            },
            {
                no: 3,
                name: "identifier_value",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "positive_int_value",
                kind: "scalar",
                T: 4,
                opt: !0
            },
            {
                no: 5,
                name: "negative_int_value",
                kind: "scalar",
                T: 3,
                opt: !0
            },
            {
                no: 6,
                name: "double_value",
                kind: "scalar",
                T: 1,
                opt: !0
            },
            {
                no: 7,
                name: "string_value",
                kind: "scalar",
                T: 12,
                opt: !0
            },
            {
                no: 8,
                name: "aggregate_value",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]);
    let Xe = je;
    const Ze = class t extends E {
        constructor(t){
            super(), Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    Ze.runtime = Vt, Ze.typeName = "google.protobuf.UninterpretedOption.NamePart", Ze.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "name_part",
                kind: "scalar",
                T: 9,
                req: !0
            },
            {
                no: 2,
                name: "is_extension",
                kind: "scalar",
                T: 8,
                req: !0
            }
        ]);
    let tr = Ze;
    const er = class t extends E {
        constructor(t){
            super(), Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    er.runtime = Vt, er.typeName = "google.protobuf.FeatureSet", er.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "field_presence",
                kind: "enum",
                T: Vt.getEnumType(nr),
                opt: !0
            },
            {
                no: 2,
                name: "enum_type",
                kind: "enum",
                T: Vt.getEnumType(sr),
                opt: !0
            },
            {
                no: 3,
                name: "repeated_field_encoding",
                kind: "enum",
                T: Vt.getEnumType(ir),
                opt: !0
            },
            {
                no: 4,
                name: "utf8_validation",
                kind: "enum",
                T: Vt.getEnumType(or),
                opt: !0
            },
            {
                no: 5,
                name: "message_encoding",
                kind: "enum",
                T: Vt.getEnumType(ar),
                opt: !0
            },
            {
                no: 6,
                name: "json_format",
                kind: "enum",
                T: Vt.getEnumType(ur),
                opt: !0
            }
        ]);
    let rr = er;
    var nr = ((t)=>(t[t.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", t[t.EXPLICIT = 1] = "EXPLICIT", t[t.IMPLICIT = 2] = "IMPLICIT", t[t.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED", t))(nr || {});
    Vt.util.setEnumType(nr, "google.protobuf.FeatureSet.FieldPresence", [
        {
            no: 0,
            name: "FIELD_PRESENCE_UNKNOWN"
        },
        {
            no: 1,
            name: "EXPLICIT"
        },
        {
            no: 2,
            name: "IMPLICIT"
        },
        {
            no: 3,
            name: "LEGACY_REQUIRED"
        }
    ]);
    var sr = ((t)=>(t[t.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", t[t.OPEN = 1] = "OPEN", t[t.CLOSED = 2] = "CLOSED", t))(sr || {});
    Vt.util.setEnumType(sr, "google.protobuf.FeatureSet.EnumType", [
        {
            no: 0,
            name: "ENUM_TYPE_UNKNOWN"
        },
        {
            no: 1,
            name: "OPEN"
        },
        {
            no: 2,
            name: "CLOSED"
        }
    ]);
    var ir = ((t)=>(t[t.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", t[t.PACKED = 1] = "PACKED", t[t.EXPANDED = 2] = "EXPANDED", t))(ir || {});
    Vt.util.setEnumType(ir, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [
        {
            no: 0,
            name: "REPEATED_FIELD_ENCODING_UNKNOWN"
        },
        {
            no: 1,
            name: "PACKED"
        },
        {
            no: 2,
            name: "EXPANDED"
        }
    ]);
    var or = ((t)=>(t[t.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", t[t.VERIFY = 2] = "VERIFY", t[t.NONE = 3] = "NONE", t))(or || {});
    Vt.util.setEnumType(or, "google.protobuf.FeatureSet.Utf8Validation", [
        {
            no: 0,
            name: "UTF8_VALIDATION_UNKNOWN"
        },
        {
            no: 2,
            name: "VERIFY"
        },
        {
            no: 3,
            name: "NONE"
        }
    ]);
    var ar = ((t)=>(t[t.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", t[t.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", t[t.DELIMITED = 2] = "DELIMITED", t))(ar || {});
    Vt.util.setEnumType(ar, "google.protobuf.FeatureSet.MessageEncoding", [
        {
            no: 0,
            name: "MESSAGE_ENCODING_UNKNOWN"
        },
        {
            no: 1,
            name: "LENGTH_PREFIXED"
        },
        {
            no: 2,
            name: "DELIMITED"
        }
    ]);
    var ur = ((t)=>(t[t.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", t[t.ALLOW = 1] = "ALLOW", t[t.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT", t))(ur || {});
    Vt.util.setEnumType(ur, "google.protobuf.FeatureSet.JsonFormat", [
        {
            no: 0,
            name: "JSON_FORMAT_UNKNOWN"
        },
        {
            no: 1,
            name: "ALLOW"
        },
        {
            no: 2,
            name: "LEGACY_BEST_EFFORT"
        }
    ]);
    const cr = class t extends E {
        constructor(t){
            super(), this.defaults = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    cr.runtime = Vt, cr.typeName = "google.protobuf.FeatureSetDefaults", cr.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "defaults",
                kind: "message",
                T: mr,
                repeated: !0
            },
            {
                no: 4,
                name: "minimum_edition",
                kind: "enum",
                T: Vt.getEnumType(zt),
                opt: !0
            },
            {
                no: 5,
                name: "maximum_edition",
                kind: "enum",
                T: Vt.getEnumType(zt),
                opt: !0
            }
        ]);
    const lr = class t extends E {
        constructor(t){
            super(), Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    lr.runtime = Vt, lr.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", lr.fields = Vt.util.newFieldList(()=>[
            {
                no: 3,
                name: "edition",
                kind: "enum",
                T: Vt.getEnumType(zt),
                opt: !0
            },
            {
                no: 4,
                name: "overridable_features",
                kind: "message",
                T: rr,
                opt: !0
            },
            {
                no: 5,
                name: "fixed_features",
                kind: "message",
                T: rr,
                opt: !0
            }
        ]);
    let mr = lr;
    const dr = class t extends E {
        constructor(t){
            super(), this.location = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    dr.runtime = Vt, dr.typeName = "google.protobuf.SourceCodeInfo", dr.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "location",
                kind: "message",
                T: hr,
                repeated: !0
            }
        ]);
    let fr = dr;
    const pr = class t extends E {
        constructor(t){
            super(), this.path = [], this.span = [], this.leadingDetachedComments = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    pr.runtime = Vt, pr.typeName = "google.protobuf.SourceCodeInfo.Location", pr.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "path",
                kind: "scalar",
                T: 5,
                repeated: !0,
                packed: !0
            },
            {
                no: 2,
                name: "span",
                kind: "scalar",
                T: 5,
                repeated: !0,
                packed: !0
            },
            {
                no: 3,
                name: "leading_comments",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "trailing_comments",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 6,
                name: "leading_detached_comments",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]);
    let hr = pr;
    const gr = class t extends E {
        constructor(t){
            super(), this.annotation = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    gr.runtime = Vt, gr.typeName = "google.protobuf.GeneratedCodeInfo", gr.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "annotation",
                kind: "message",
                T: yr,
                repeated: !0
            }
        ]);
    let Ar = gr;
    const _r = class t extends E {
        constructor(t){
            super(), this.path = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    _r.runtime = Vt, _r.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", _r.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "path",
                kind: "scalar",
                T: 5,
                repeated: !0,
                packed: !0
            },
            {
                no: 2,
                name: "source_file",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "begin",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 4,
                name: "end",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 5,
                name: "semantic",
                kind: "enum",
                T: Vt.getEnumType(wr),
                opt: !0
            }
        ]);
    let yr = _r;
    var wr = ((t)=>(t[t.NONE = 0] = "NONE", t[t.SET = 1] = "SET", t[t.ALIAS = 2] = "ALIAS", t))(wr || {});
    Vt.util.setEnumType(wr, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [
        {
            no: 0,
            name: "NONE"
        },
        {
            no: 1,
            name: "SET"
        },
        {
            no: 2,
            name: "ALIAS"
        }
    ]);
    me.DOUBLE, D.DOUBLE, me.FLOAT, D.FLOAT, me.INT64, D.INT64, me.UINT64, D.UINT64, me.INT32, D.INT32, me.FIXED64, D.FIXED64, me.FIXED32, D.FIXED32, me.BOOL, D.BOOL, me.STRING, D.STRING, me.GROUP, me.MESSAGE, me.BYTES, D.BYTES, me.UINT32, D.UINT32, me.ENUM, me.SFIXED32, D.SFIXED32, me.SFIXED64, D.SFIXED64, me.SINT32, D.SINT32, me.SINT64, D.SINT64;
    const Sr = class t extends E {
        constructor(t){
            super(), this.seconds = N.zero, this.nanos = 0, Kt.util.initPartial(t, this);
        }
        fromJson(t, e) {
            if ("string" != typeof t) throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${Kt.json.debug(t)}`);
            const r = t.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
            if (!r) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
            const n = Date.parse(r[1] + "-" + r[2] + "-" + r[3] + "T" + r[4] + ":" + r[5] + ":" + r[6] + (r[8] ? r[8] : "Z"));
            if (Number.isNaN(n)) throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
            if (n < Date.parse("0001-01-01T00:00:00Z") || n > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
            return this.seconds = N.parse(n / 1e3), this.nanos = 0, r[7] && (this.nanos = parseInt("1" + r[7] + "0".repeat(9 - r[7].length)) - 1e9), this;
        }
        toJson(t) {
            const e = 1e3 * Number(this.seconds);
            if (e < Date.parse("0001-01-01T00:00:00Z") || e > Date.parse("9999-12-31T23:59:59Z")) throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
            if (this.nanos < 0) throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
            let r = "Z";
            if (this.nanos > 0) {
                const t = (this.nanos + 1e9).toString().substring(1);
                r = "000000" === t.substring(3) ? "." + t.substring(0, 3) + "Z" : "000" === t.substring(6) ? "." + t.substring(0, 6) + "Z" : "." + t + "Z";
            }
            return new Date(e).toISOString().replace(".000Z", r);
        }
        toDate() {
            return new Date(1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6));
        }
        static now() {
            return t.fromDate(new Date);
        }
        static fromDate(e) {
            const r = e.getTime();
            return new t({
                seconds: N.parse(Math.floor(r / 1e3)),
                nanos: r % 1e3 * 1e6
            });
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    Sr.runtime = Kt, Sr.typeName = "google.protobuf.Timestamp", Sr.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "seconds",
                kind: "scalar",
                T: 3
            },
            {
                no: 2,
                name: "nanos",
                kind: "scalar",
                T: 5
            }
        ]);
    const Jr = class t extends E {
        constructor(t){
            super(), this.seconds = N.zero, this.nanos = 0, Kt.util.initPartial(t, this);
        }
        fromJson(t, e) {
            if ("string" != typeof t) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${Kt.json.debug(t)}`);
            const r = t.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
            if (null === r) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${Kt.json.debug(t)}`);
            const n = Number(r[1]);
            if (n > 315576e6 || n < -315576e6) throw new Error(`cannot decode google.protobuf.Duration from JSON: ${Kt.json.debug(t)}`);
            if (this.seconds = N.parse(n), "string" == typeof r[2]) {
                const t = r[2] + "0".repeat(9 - r[2].length);
                this.nanos = parseInt(t), (n < 0 || Object.is(n, -0)) && (this.nanos = -this.nanos);
            }
            return this;
        }
        toJson(t) {
            if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6) throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
            let e = this.seconds.toString();
            if (0 !== this.nanos) {
                let t = Math.abs(this.nanos).toString();
                t = "0".repeat(9 - t.length) + t, "000000" === t.substring(3) ? t = t.substring(0, 3) : "000" === t.substring(6) && (t = t.substring(0, 6)), e += "." + t, this.nanos < 0 && 0 == Number(this.seconds) && (e = "-" + e);
            }
            return e + "s";
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    Jr.runtime = Kt, Jr.typeName = "google.protobuf.Duration", Jr.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "seconds",
                kind: "scalar",
                T: 3
            },
            {
                no: 2,
                name: "nanos",
                kind: "scalar",
                T: 5
            }
        ]);
    const Br = class t extends E {
        constructor(t){
            super(), this.typeUrl = "", this.value = new Uint8Array(0), Kt.util.initPartial(t, this);
        }
        toJson(t) {
            if ("" === this.typeUrl) return {};
            const e = this.typeUrlToName(this.typeUrl), r = t?.typeRegistry?.findMessage(e);
            if (!r) throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
            let n = r.fromBinary(this.value).toJson(t);
            return (e.startsWith("google.protobuf.") || null === n || Array.isArray(n) || "object" != typeof n) && (n = {
                value: n
            }), n["@type"] = this.typeUrl, n;
        }
        fromJson(t, e) {
            if (null === t || Array.isArray(t) || "object" != typeof t) throw new Error("cannot decode message google.protobuf.Any from JSON: expected object but got " + (null === t ? "null" : Array.isArray(t) ? "array" : typeof t));
            if (0 == Object.keys(t).length) return this;
            const r = t["@type"];
            if ("string" != typeof r || "" == r) throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
            const n = this.typeUrlToName(r), s = e?.typeRegistry?.findMessage(n);
            if (!s) throw new Error(`cannot decode message google.protobuf.Any from JSON: ${r} is not in the type registry`);
            let i;
            if (n.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(t, "value")) i = s.fromJson(t.value, e);
            else {
                const r = Object.assign({}, t);
                delete r["@type"], i = s.fromJson(r, e);
            }
            return this.packFrom(i), this;
        }
        packFrom(t) {
            this.value = t.toBinary(), this.typeUrl = this.typeNameToUrl(t.getType().typeName);
        }
        unpackTo(t) {
            return !!this.is(t.getType()) && (t.fromBinary(this.value), !0);
        }
        unpack(t) {
            if ("" === this.typeUrl) return;
            const e = t.findMessage(this.typeUrlToName(this.typeUrl));
            return e ? e.fromBinary(this.value) : void 0;
        }
        is(t) {
            if ("" === this.typeUrl) return !1;
            const e = this.typeUrlToName(this.typeUrl);
            let r = "";
            return r = "string" == typeof t ? t : t.typeName, e === r;
        }
        typeNameToUrl(t) {
            return `type.googleapis.com/${t}`;
        }
        typeUrlToName(t) {
            if (!t.length) throw new Error(`invalid type url: ${t}`);
            const e = t.lastIndexOf("/"), r = e >= 0 ? t.substring(e + 1) : t;
            if (!r.length) throw new Error(`invalid type url: ${t}`);
            return r;
        }
        static pack(e) {
            const r = new t;
            return r.packFrom(e), r;
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    Br.runtime = Kt, Br.typeName = "google.protobuf.Any", Br.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "type_url",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "value",
                kind: "scalar",
                T: 12
            }
        ]);
    let Er = Br;
    const Ir = class t extends E {
        constructor(t){
            super(), Kt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    Ir.runtime = Kt, Ir.typeName = "google.protobuf.Empty", Ir.fields = Kt.util.newFieldList(()=>[]);
    const Cr = class t extends E {
        constructor(t){
            super(), this.paths = [], Kt.util.initPartial(t, this);
        }
        toJson(t) {
            return this.paths.map((t)=>{
                if (t.match(/_[0-9]?_/g) || t.match(/[A-Z]/g)) throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + t + '" is irreversible');
                return function(t) {
                    let e = !1;
                    const r = [];
                    for(let n = 0; n < t.length; n++){
                        let s = t.charAt(n);
                        switch(s){
                            case "_":
                                e = !0;
                                break;
                            case "0":
                            case "1":
                            case "2":
                            case "3":
                            case "4":
                            case "5":
                            case "6":
                            case "7":
                            case "8":
                            case "9":
                                r.push(s), e = !1;
                                break;
                            default:
                                e && (e = !1, s = s.toUpperCase()), r.push(s);
                        }
                    }
                    return r.join("");
                }(t);
            }).join(",");
        }
        fromJson(t, e) {
            if ("string" != typeof t) throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + Kt.json.debug(t));
            if ("" === t) return this;
            return this.paths = t.split(",").map(function(t) {
                if (t.includes("_")) throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
                const e = t.replace(/[A-Z]/g, (t)=>"_" + t.toLowerCase());
                return "_" === e[0] ? e.substring(1) : e;
            }), this;
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    Cr.runtime = Kt, Cr.typeName = "google.protobuf.FieldMask", Cr.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "paths",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]);
    var br = ((t)=>(t[t.NULL_VALUE = 0] = "NULL_VALUE", t))(br || {});
    Kt.util.setEnumType(br, "google.protobuf.NullValue", [
        {
            no: 0,
            name: "NULL_VALUE"
        }
    ]);
    const kr = class t extends E {
        constructor(t){
            super(), this.fields = {}, Kt.util.initPartial(t, this);
        }
        toJson(t) {
            const e = {};
            for (const [r, n] of Object.entries(this.fields))e[r] = n.toJson(t);
            return e;
        }
        fromJson(t, e) {
            if ("object" != typeof t || null == t || Array.isArray(t)) throw new Error("cannot decode google.protobuf.Struct from JSON " + Kt.json.debug(t));
            for (const [e, r] of Object.entries(t))this.fields[e] = Rr.fromJson(r);
            return this;
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    kr.runtime = Kt, kr.typeName = "google.protobuf.Struct", kr.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "fields",
                kind: "map",
                K: 9,
                V: {
                    kind: "message",
                    T: Rr
                }
            }
        ]);
    let vr = kr;
    const qr = class t extends E {
        constructor(t){
            super(), this.kind = {
                case: void 0
            }, Kt.util.initPartial(t, this);
        }
        toJson(t) {
            switch(this.kind.case){
                case "nullValue":
                    return null;
                case "numberValue":
                    if (!Number.isFinite(this.kind.value)) throw new Error("google.protobuf.Value cannot be NaN or Infinity");
                    return this.kind.value;
                case "boolValue":
                case "stringValue":
                    return this.kind.value;
                case "structValue":
                case "listValue":
                    return this.kind.value.toJson({
                        ...t,
                        emitDefaultValues: !0
                    });
            }
            throw new Error("google.protobuf.Value must have a value");
        }
        fromJson(t, e) {
            switch(typeof t){
                case "number":
                    this.kind = {
                        case: "numberValue",
                        value: t
                    };
                    break;
                case "string":
                    this.kind = {
                        case: "stringValue",
                        value: t
                    };
                    break;
                case "boolean":
                    this.kind = {
                        case: "boolValue",
                        value: t
                    };
                    break;
                case "object":
                    null === t ? this.kind = {
                        case: "nullValue",
                        value: 0
                    } : Array.isArray(t) ? this.kind = {
                        case: "listValue",
                        value: Tr.fromJson(t)
                    } : this.kind = {
                        case: "structValue",
                        value: vr.fromJson(t)
                    };
                    break;
                default:
                    throw new Error("cannot decode google.protobuf.Value from JSON " + Kt.json.debug(t));
            }
            return this;
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    qr.runtime = Kt, qr.typeName = "google.protobuf.Value", qr.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "null_value",
                kind: "enum",
                T: Kt.getEnumType(br),
                oneof: "kind"
            },
            {
                no: 2,
                name: "number_value",
                kind: "scalar",
                T: 1,
                oneof: "kind"
            },
            {
                no: 3,
                name: "string_value",
                kind: "scalar",
                T: 9,
                oneof: "kind"
            },
            {
                no: 4,
                name: "bool_value",
                kind: "scalar",
                T: 8,
                oneof: "kind"
            },
            {
                no: 5,
                name: "struct_value",
                kind: "message",
                T: vr,
                oneof: "kind"
            },
            {
                no: 6,
                name: "list_value",
                kind: "message",
                T: Tr,
                oneof: "kind"
            }
        ]);
    let Rr = qr;
    const Pr = class t extends E {
        constructor(t){
            super(), this.values = [], Kt.util.initPartial(t, this);
        }
        toJson(t) {
            return this.values.map((t)=>t.toJson());
        }
        fromJson(t, e) {
            if (!Array.isArray(t)) throw new Error("cannot decode google.protobuf.ListValue from JSON " + Kt.json.debug(t));
            for (let e of t)this.values.push(Rr.fromJson(e));
            return this;
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    Pr.runtime = Kt, Pr.typeName = "google.protobuf.ListValue", Pr.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "values",
                kind: "message",
                T: Rr,
                repeated: !0
            }
        ]);
    let Tr = Pr;
    const xr = class t extends E {
        constructor(t){
            super(), this.value = 0, Kt.util.initPartial(t, this);
        }
        toJson(t) {
            return Kt.json.writeScalar(D.DOUBLE, this.value, !0);
        }
        fromJson(t, e) {
            try {
                this.value = Kt.json.readScalar(D.DOUBLE, t);
            } catch (t) {
                let e = 'cannot decode message google.protobuf.DoubleValue from JSON"';
                throw t instanceof Error && t.message.length > 0 && (e += `: ${t.message}`), new Error(e);
            }
            return this;
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    xr.runtime = Kt, xr.typeName = "google.protobuf.DoubleValue", xr.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 1
            }
        ]), xr.fieldWrapper = {
        wrapField: (t)=>new xr({
                value: t
            }),
        unwrapField: (t)=>t.value
    };
    const Nr = class t extends E {
        constructor(t){
            super(), this.value = 0, Kt.util.initPartial(t, this);
        }
        toJson(t) {
            return Kt.json.writeScalar(D.FLOAT, this.value, !0);
        }
        fromJson(t, e) {
            try {
                this.value = Kt.json.readScalar(D.FLOAT, t);
            } catch (t) {
                let e = 'cannot decode message google.protobuf.FloatValue from JSON"';
                throw t instanceof Error && t.message.length > 0 && (e += `: ${t.message}`), new Error(e);
            }
            return this;
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    Nr.runtime = Kt, Nr.typeName = "google.protobuf.FloatValue", Nr.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 2
            }
        ]), Nr.fieldWrapper = {
        wrapField: (t)=>new Nr({
                value: t
            }),
        unwrapField: (t)=>t.value
    };
    const Dr = class t extends E {
        constructor(t){
            super(), this.value = N.zero, Kt.util.initPartial(t, this);
        }
        toJson(t) {
            return Kt.json.writeScalar(D.INT64, this.value, !0);
        }
        fromJson(t, e) {
            try {
                this.value = Kt.json.readScalar(D.INT64, t);
            } catch (t) {
                let e = 'cannot decode message google.protobuf.Int64Value from JSON"';
                throw t instanceof Error && t.message.length > 0 && (e += `: ${t.message}`), new Error(e);
            }
            return this;
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    Dr.runtime = Kt, Dr.typeName = "google.protobuf.Int64Value", Dr.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 3
            }
        ]), Dr.fieldWrapper = {
        wrapField: (t)=>new Dr({
                value: t
            }),
        unwrapField: (t)=>t.value
    };
    const Ur = class t extends E {
        constructor(t){
            super(), this.value = N.zero, Kt.util.initPartial(t, this);
        }
        toJson(t) {
            return Kt.json.writeScalar(D.UINT64, this.value, !0);
        }
        fromJson(t, e) {
            try {
                this.value = Kt.json.readScalar(D.UINT64, t);
            } catch (t) {
                let e = 'cannot decode message google.protobuf.UInt64Value from JSON"';
                throw t instanceof Error && t.message.length > 0 && (e += `: ${t.message}`), new Error(e);
            }
            return this;
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    Ur.runtime = Kt, Ur.typeName = "google.protobuf.UInt64Value", Ur.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 4
            }
        ]), Ur.fieldWrapper = {
        wrapField: (t)=>new Ur({
                value: t
            }),
        unwrapField: (t)=>t.value
    };
    const Qr = class t extends E {
        constructor(t){
            super(), this.value = 0, Kt.util.initPartial(t, this);
        }
        toJson(t) {
            return Kt.json.writeScalar(D.INT32, this.value, !0);
        }
        fromJson(t, e) {
            try {
                this.value = Kt.json.readScalar(D.INT32, t);
            } catch (t) {
                let e = 'cannot decode message google.protobuf.Int32Value from JSON"';
                throw t instanceof Error && t.message.length > 0 && (e += `: ${t.message}`), new Error(e);
            }
            return this;
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    Qr.runtime = Kt, Qr.typeName = "google.protobuf.Int32Value", Qr.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 5
            }
        ]), Qr.fieldWrapper = {
        wrapField: (t)=>new Qr({
                value: t
            }),
        unwrapField: (t)=>t.value
    };
    const Mr = class t extends E {
        constructor(t){
            super(), this.value = 0, Kt.util.initPartial(t, this);
        }
        toJson(t) {
            return Kt.json.writeScalar(D.UINT32, this.value, !0);
        }
        fromJson(t, e) {
            try {
                this.value = Kt.json.readScalar(D.UINT32, t);
            } catch (t) {
                let e = 'cannot decode message google.protobuf.UInt32Value from JSON"';
                throw t instanceof Error && t.message.length > 0 && (e += `: ${t.message}`), new Error(e);
            }
            return this;
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    Mr.runtime = Kt, Mr.typeName = "google.protobuf.UInt32Value", Mr.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 13
            }
        ]), Mr.fieldWrapper = {
        wrapField: (t)=>new Mr({
                value: t
            }),
        unwrapField: (t)=>t.value
    };
    const Or = class t extends E {
        constructor(t){
            super(), this.value = !1, Kt.util.initPartial(t, this);
        }
        toJson(t) {
            return Kt.json.writeScalar(D.BOOL, this.value, !0);
        }
        fromJson(t, e) {
            try {
                this.value = Kt.json.readScalar(D.BOOL, t);
            } catch (t) {
                let e = 'cannot decode message google.protobuf.BoolValue from JSON"';
                throw t instanceof Error && t.message.length > 0 && (e += `: ${t.message}`), new Error(e);
            }
            return this;
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    Or.runtime = Kt, Or.typeName = "google.protobuf.BoolValue", Or.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 8
            }
        ]), Or.fieldWrapper = {
        wrapField: (t)=>new Or({
                value: t
            }),
        unwrapField: (t)=>t.value
    };
    const Fr = class t extends E {
        constructor(t){
            super(), this.value = "", Kt.util.initPartial(t, this);
        }
        toJson(t) {
            return Kt.json.writeScalar(D.STRING, this.value, !0);
        }
        fromJson(t, e) {
            try {
                this.value = Kt.json.readScalar(D.STRING, t);
            } catch (t) {
                let e = 'cannot decode message google.protobuf.StringValue from JSON"';
                throw t instanceof Error && t.message.length > 0 && (e += `: ${t.message}`), new Error(e);
            }
            return this;
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    Fr.runtime = Kt, Fr.typeName = "google.protobuf.StringValue", Fr.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 9
            }
        ]), Fr.fieldWrapper = {
        wrapField: (t)=>new Fr({
                value: t
            }),
        unwrapField: (t)=>t.value
    };
    const Lr = class t extends E {
        constructor(t){
            super(), this.value = new Uint8Array(0), Kt.util.initPartial(t, this);
        }
        toJson(t) {
            return Kt.json.writeScalar(D.BYTES, this.value, !0);
        }
        fromJson(t, e) {
            try {
                this.value = Kt.json.readScalar(D.BYTES, t);
            } catch (t) {
                let e = 'cannot decode message google.protobuf.BytesValue from JSON"';
                throw t instanceof Error && t.message.length > 0 && (e += `: ${t.message}`), new Error(e);
            }
            return this;
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    Lr.runtime = Kt, Lr.typeName = "google.protobuf.BytesValue", Lr.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "value",
                kind: "scalar",
                T: 12
            }
        ]), Lr.fieldWrapper = {
        wrapField: (t)=>new Lr({
                value: t
            }),
        unwrapField: (t)=>t.value
    };
    y(br);
    const $r = class t extends E {
        constructor(t){
            super(), Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    $r.runtime = Vt, $r.typeName = "google.protobuf.compiler.Version", $r.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "major",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 2,
                name: "minor",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 3,
                name: "patch",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 4,
                name: "suffix",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]);
    let Gr = $r;
    const Hr = class t extends E {
        constructor(t){
            super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    Hr.runtime = Vt, Hr.typeName = "google.protobuf.compiler.CodeGeneratorRequest", Hr.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "file_to_generate",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 2,
                name: "parameter",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 15,
                name: "proto_file",
                kind: "message",
                T: jt,
                repeated: !0
            },
            {
                no: 17,
                name: "source_file_descriptors",
                kind: "message",
                T: jt,
                repeated: !0
            },
            {
                no: 3,
                name: "compiler_version",
                kind: "message",
                T: Gr,
                opt: !0
            }
        ]);
    const Kr = class t extends E {
        constructor(t){
            super(), this.file = [], Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    Kr.runtime = Vt, Kr.typeName = "google.protobuf.compiler.CodeGeneratorResponse", Kr.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "error",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "supported_features",
                kind: "scalar",
                T: 4,
                opt: !0
            },
            {
                no: 3,
                name: "minimum_edition",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 4,
                name: "maximum_edition",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 15,
                name: "file",
                kind: "message",
                T: Wr,
                repeated: !0
            }
        ]);
    var Vr = ((t)=>(t[t.NONE = 0] = "NONE", t[t.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", t[t.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS", t))(Vr || {});
    Vt.util.setEnumType(Vr, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [
        {
            no: 0,
            name: "FEATURE_NONE"
        },
        {
            no: 1,
            name: "FEATURE_PROTO3_OPTIONAL"
        },
        {
            no: 2,
            name: "FEATURE_SUPPORTS_EDITIONS"
        }
    ]);
    const zr = class t extends E {
        constructor(t){
            super(), Vt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Vt.util.equals(t, e, r);
        }
    };
    zr.runtime = Vt, zr.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", zr.fields = Vt.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "insertion_point",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 15,
                name: "content",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 16,
                name: "generated_code_info",
                kind: "message",
                T: Ar,
                opt: !0
            }
        ]);
    let Wr = zr;
    const Yr = class t extends E {
        constructor(t){
            super(), this.fileName = "", Kt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    Yr.runtime = Kt, Yr.typeName = "google.protobuf.SourceContext", Yr.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "file_name",
                kind: "scalar",
                T: 9
            }
        ]);
    let jr = Yr;
    var Xr = ((t)=>(t[t.PROTO2 = 0] = "PROTO2", t[t.PROTO3 = 1] = "PROTO3", t[t.EDITIONS = 2] = "EDITIONS", t))(Xr || {});
    Kt.util.setEnumType(Xr, "google.protobuf.Syntax", [
        {
            no: 0,
            name: "SYNTAX_PROTO2"
        },
        {
            no: 1,
            name: "SYNTAX_PROTO3"
        },
        {
            no: 2,
            name: "SYNTAX_EDITIONS"
        }
    ]);
    const Zr = class t extends E {
        constructor(t){
            super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = 0, this.edition = "", Kt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    Zr.runtime = Kt, Zr.typeName = "google.protobuf.Type", Zr.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "fields",
                kind: "message",
                T: en,
                repeated: !0
            },
            {
                no: 3,
                name: "oneofs",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 4,
                name: "options",
                kind: "message",
                T: cn,
                repeated: !0
            },
            {
                no: 5,
                name: "source_context",
                kind: "message",
                T: jr
            },
            {
                no: 6,
                name: "syntax",
                kind: "enum",
                T: Kt.getEnumType(Xr)
            },
            {
                no: 7,
                name: "edition",
                kind: "scalar",
                T: 9
            }
        ]);
    const tn = class t extends E {
        constructor(t){
            super(), this.kind = 0, this.cardinality = 0, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = !1, this.options = [], this.jsonName = "", this.defaultValue = "", Kt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    tn.runtime = Kt, tn.typeName = "google.protobuf.Field", tn.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "kind",
                kind: "enum",
                T: Kt.getEnumType(rn)
            },
            {
                no: 2,
                name: "cardinality",
                kind: "enum",
                T: Kt.getEnumType(nn)
            },
            {
                no: 3,
                name: "number",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 6,
                name: "type_url",
                kind: "scalar",
                T: 9
            },
            {
                no: 7,
                name: "oneof_index",
                kind: "scalar",
                T: 5
            },
            {
                no: 8,
                name: "packed",
                kind: "scalar",
                T: 8
            },
            {
                no: 9,
                name: "options",
                kind: "message",
                T: cn,
                repeated: !0
            },
            {
                no: 10,
                name: "json_name",
                kind: "scalar",
                T: 9
            },
            {
                no: 11,
                name: "default_value",
                kind: "scalar",
                T: 9
            }
        ]);
    let en = tn;
    var rn = ((t)=>(t[t.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", t[t.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", t[t.TYPE_FLOAT = 2] = "TYPE_FLOAT", t[t.TYPE_INT64 = 3] = "TYPE_INT64", t[t.TYPE_UINT64 = 4] = "TYPE_UINT64", t[t.TYPE_INT32 = 5] = "TYPE_INT32", t[t.TYPE_FIXED64 = 6] = "TYPE_FIXED64", t[t.TYPE_FIXED32 = 7] = "TYPE_FIXED32", t[t.TYPE_BOOL = 8] = "TYPE_BOOL", t[t.TYPE_STRING = 9] = "TYPE_STRING", t[t.TYPE_GROUP = 10] = "TYPE_GROUP", t[t.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", t[t.TYPE_BYTES = 12] = "TYPE_BYTES", t[t.TYPE_UINT32 = 13] = "TYPE_UINT32", t[t.TYPE_ENUM = 14] = "TYPE_ENUM", t[t.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", t[t.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", t[t.TYPE_SINT32 = 17] = "TYPE_SINT32", t[t.TYPE_SINT64 = 18] = "TYPE_SINT64", t))(rn || {});
    Kt.util.setEnumType(rn, "google.protobuf.Field.Kind", [
        {
            no: 0,
            name: "TYPE_UNKNOWN"
        },
        {
            no: 1,
            name: "TYPE_DOUBLE"
        },
        {
            no: 2,
            name: "TYPE_FLOAT"
        },
        {
            no: 3,
            name: "TYPE_INT64"
        },
        {
            no: 4,
            name: "TYPE_UINT64"
        },
        {
            no: 5,
            name: "TYPE_INT32"
        },
        {
            no: 6,
            name: "TYPE_FIXED64"
        },
        {
            no: 7,
            name: "TYPE_FIXED32"
        },
        {
            no: 8,
            name: "TYPE_BOOL"
        },
        {
            no: 9,
            name: "TYPE_STRING"
        },
        {
            no: 10,
            name: "TYPE_GROUP"
        },
        {
            no: 11,
            name: "TYPE_MESSAGE"
        },
        {
            no: 12,
            name: "TYPE_BYTES"
        },
        {
            no: 13,
            name: "TYPE_UINT32"
        },
        {
            no: 14,
            name: "TYPE_ENUM"
        },
        {
            no: 15,
            name: "TYPE_SFIXED32"
        },
        {
            no: 16,
            name: "TYPE_SFIXED64"
        },
        {
            no: 17,
            name: "TYPE_SINT32"
        },
        {
            no: 18,
            name: "TYPE_SINT64"
        }
    ]);
    var nn = ((t)=>(t[t.UNKNOWN = 0] = "UNKNOWN", t[t.OPTIONAL = 1] = "OPTIONAL", t[t.REQUIRED = 2] = "REQUIRED", t[t.REPEATED = 3] = "REPEATED", t))(nn || {});
    Kt.util.setEnumType(nn, "google.protobuf.Field.Cardinality", [
        {
            no: 0,
            name: "CARDINALITY_UNKNOWN"
        },
        {
            no: 1,
            name: "CARDINALITY_OPTIONAL"
        },
        {
            no: 2,
            name: "CARDINALITY_REQUIRED"
        },
        {
            no: 3,
            name: "CARDINALITY_REPEATED"
        }
    ]);
    const sn = class t extends E {
        constructor(t){
            super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = 0, this.edition = "", Kt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    sn.runtime = Kt, sn.typeName = "google.protobuf.Enum", sn.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "enumvalue",
                kind: "message",
                T: an,
                repeated: !0
            },
            {
                no: 3,
                name: "options",
                kind: "message",
                T: cn,
                repeated: !0
            },
            {
                no: 4,
                name: "source_context",
                kind: "message",
                T: jr
            },
            {
                no: 5,
                name: "syntax",
                kind: "enum",
                T: Kt.getEnumType(Xr)
            },
            {
                no: 6,
                name: "edition",
                kind: "scalar",
                T: 9
            }
        ]);
    const on = class t extends E {
        constructor(t){
            super(), this.name = "", this.number = 0, this.options = [], Kt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    on.runtime = Kt, on.typeName = "google.protobuf.EnumValue", on.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "number",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "options",
                kind: "message",
                T: cn,
                repeated: !0
            }
        ]);
    let an = on;
    const un = class t extends E {
        constructor(t){
            super(), this.name = "", Kt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    un.runtime = Kt, un.typeName = "google.protobuf.Option", un.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "value",
                kind: "message",
                T: Er
            }
        ]);
    let cn = un;
    const ln = class t extends E {
        constructor(t){
            super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = Xr.PROTO2, Kt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    ln.runtime = Kt, ln.typeName = "google.protobuf.Api", ln.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "methods",
                kind: "message",
                T: dn,
                repeated: !0
            },
            {
                no: 3,
                name: "options",
                kind: "message",
                T: cn,
                repeated: !0
            },
            {
                no: 4,
                name: "version",
                kind: "scalar",
                T: 9
            },
            {
                no: 5,
                name: "source_context",
                kind: "message",
                T: jr
            },
            {
                no: 6,
                name: "mixins",
                kind: "message",
                T: pn,
                repeated: !0
            },
            {
                no: 7,
                name: "syntax",
                kind: "enum",
                T: Kt.getEnumType(Xr)
            }
        ]);
    const mn = class t extends E {
        constructor(t){
            super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = !1, this.responseTypeUrl = "", this.responseStreaming = !1, this.options = [], this.syntax = Xr.PROTO2, Kt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    mn.runtime = Kt, mn.typeName = "google.protobuf.Method", mn.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "request_type_url",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "request_streaming",
                kind: "scalar",
                T: 8
            },
            {
                no: 4,
                name: "response_type_url",
                kind: "scalar",
                T: 9
            },
            {
                no: 5,
                name: "response_streaming",
                kind: "scalar",
                T: 8
            },
            {
                no: 6,
                name: "options",
                kind: "message",
                T: cn,
                repeated: !0
            },
            {
                no: 7,
                name: "syntax",
                kind: "enum",
                T: Kt.getEnumType(Xr)
            }
        ]);
    let dn = mn;
    const fn = class t extends E {
        constructor(t){
            super(), this.name = "", this.root = "", Kt.util.initPartial(t, this);
        }
        static fromBinary(e, r) {
            return (new t).fromBinary(e, r);
        }
        static fromJson(e, r) {
            return (new t).fromJson(e, r);
        }
        static fromJsonString(e, r) {
            return (new t).fromJsonString(e, r);
        }
        static equals(e, r) {
            return Kt.util.equals(t, e, r);
        }
    };
    fn.runtime = Kt, fn.typeName = "google.protobuf.Mixin", fn.fields = Kt.util.newFieldList(()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "root",
                kind: "scalar",
                T: 9
            }
        ]);
    let pn = fn;
    const hn = Kt.makeMessageType("aiserver.v1.CursorPosition", ()=>[
            {
                no: 1,
                name: "line",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "column",
                kind: "scalar",
                T: 5
            }
        ]), gn = Kt.makeMessageType("aiserver.v1.SelectionWithOrientation", ()=>[
            {
                no: 1,
                name: "selection_start_line_number",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "selection_start_column",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "position_line_number",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "position_column",
                kind: "scalar",
                T: 5
            }
        ]), An = Kt.makeMessageType("aiserver.v1.SimplestRange", ()=>[
            {
                no: 1,
                name: "start_line",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "end_line_inclusive",
                kind: "scalar",
                T: 5
            }
        ]), _n = Kt.makeMessageType("aiserver.v1.SimpleRange", ()=>[
            {
                no: 1,
                name: "start_line_number",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "start_column",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "end_line_number_inclusive",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "end_column",
                kind: "scalar",
                T: 5
            }
        ]), yn = Kt.makeMessageType("aiserver.v1.LineRange", ()=>[
            {
                no: 1,
                name: "start_line_number",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "end_line_number_inclusive",
                kind: "scalar",
                T: 5
            }
        ]), wn = Kt.makeMessageType("aiserver.v1.CursorRange", ()=>[
            {
                no: 1,
                name: "start_position",
                kind: "message",
                T: hn
            },
            {
                no: 2,
                name: "end_position",
                kind: "message",
                T: hn
            }
        ]), Sn = Kt.makeMessageType("aiserver.v1.DetailedLine", ()=>[
            {
                no: 1,
                name: "text",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "line_number",
                kind: "scalar",
                T: 2
            },
            {
                no: 3,
                name: "is_signature",
                kind: "scalar",
                T: 8
            }
        ]), Jn = Kt.makeMessageType("aiserver.v1.CodeBlock", ()=>[
            {
                no: 1,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "file_contents",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 9,
                name: "file_contents_length",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 3,
                name: "range",
                kind: "message",
                T: wn
            },
            {
                no: 4,
                name: "contents",
                kind: "scalar",
                T: 9
            },
            {
                no: 5,
                name: "signatures",
                kind: "message",
                T: Bn
            },
            {
                no: 6,
                name: "override_contents",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 7,
                name: "original_contents",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 8,
                name: "detailed_lines",
                kind: "message",
                T: Sn,
                repeated: !0
            },
            {
                no: 10,
                name: "file_git_context",
                kind: "message",
                T: In
            }
        ]), Bn = Kt.makeMessageType("aiserver.v1.CodeBlock.Signatures", ()=>[
            {
                no: 1,
                name: "ranges",
                kind: "message",
                T: wn,
                repeated: !0
            }
        ], {
        localName: "CodeBlock_Signatures"
    }), En = Kt.makeMessageType("aiserver.v1.GitCommit", ()=>[
            {
                no: 1,
                name: "commit",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "author",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "date",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "message",
                kind: "scalar",
                T: 9
            }
        ]), In = Kt.makeMessageType("aiserver.v1.FileGit", ()=>[
            {
                no: 1,
                name: "commits",
                kind: "message",
                T: En,
                repeated: !0
            }
        ]), Cn = Kt.makeMessageType("aiserver.v1.Diagnostic", ()=>[
            {
                no: 1,
                name: "message",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "range",
                kind: "message",
                T: wn
            },
            {
                no: 3,
                name: "severity",
                kind: "enum",
                T: Kt.getEnumType(bn)
            },
            {
                no: 4,
                name: "related_information",
                kind: "message",
                T: kn,
                repeated: !0
            }
        ]), bn = Kt.makeEnum("aiserver.v1.Diagnostic.DiagnosticSeverity", [
        {
            no: 0,
            name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "DIAGNOSTIC_SEVERITY_ERROR",
            localName: "ERROR"
        },
        {
            no: 2,
            name: "DIAGNOSTIC_SEVERITY_WARNING",
            localName: "WARNING"
        },
        {
            no: 3,
            name: "DIAGNOSTIC_SEVERITY_INFORMATION",
            localName: "INFORMATION"
        },
        {
            no: 4,
            name: "DIAGNOSTIC_SEVERITY_HINT",
            localName: "HINT"
        }
    ]), kn = Kt.makeMessageType("aiserver.v1.Diagnostic.RelatedInformation", ()=>[
            {
                no: 1,
                name: "message",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "range",
                kind: "message",
                T: wn
            }
        ], {
        localName: "Diagnostic_RelatedInformation"
    }), vn = Kt.makeMessageType("aiserver.v1.BM25Chunk", ()=>[
            {
                no: 1,
                name: "content",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "range",
                kind: "message",
                T: An
            },
            {
                no: 3,
                name: "score",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "relative_path",
                kind: "scalar",
                T: 9
            }
        ]), qn = Kt.makeMessageType("aiserver.v1.CurrentFileInfo", ()=>[
            {
                no: 1,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "contents",
                kind: "scalar",
                T: 9
            },
            {
                no: 18,
                name: "rely_on_filesync",
                kind: "scalar",
                T: 8
            },
            {
                no: 17,
                name: "sha_256_hash",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 16,
                name: "cells",
                kind: "message",
                T: Rn,
                repeated: !0
            },
            {
                no: 10,
                name: "top_chunks",
                kind: "message",
                T: vn,
                repeated: !0
            },
            {
                no: 9,
                name: "contents_start_at_line",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "cursor_position",
                kind: "message",
                T: hn
            },
            {
                no: 4,
                name: "dataframes",
                kind: "message",
                T: Pn,
                repeated: !0
            },
            {
                no: 8,
                name: "total_number_of_lines",
                kind: "scalar",
                T: 5
            },
            {
                no: 5,
                name: "language_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 6,
                name: "selection",
                kind: "message",
                T: wn
            },
            {
                no: 11,
                name: "alternative_version_id",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 7,
                name: "diagnostics",
                kind: "message",
                T: Cn,
                repeated: !0
            },
            {
                no: 14,
                name: "file_version",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 15,
                name: "cell_start_lines",
                kind: "scalar",
                T: 5,
                repeated: !0
            },
            {
                no: 19,
                name: "workspace_root_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 20,
                name: "line_ending",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Rn = Kt.makeMessageType("aiserver.v1.CurrentFileInfo.NotebookCell", [], {
        localName: "CurrentFileInfo_NotebookCell"
    }), Pn = Kt.makeMessageType("aiserver.v1.DataframeInfo", ()=>[
            {
                no: 1,
                name: "name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "shape",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "data_dimensionality",
                kind: "scalar",
                T: 5
            },
            {
                no: 6,
                name: "columns",
                kind: "message",
                T: Tn,
                repeated: !0
            },
            {
                no: 7,
                name: "row_count",
                kind: "scalar",
                T: 5
            },
            {
                no: 8,
                name: "index_column",
                kind: "scalar",
                T: 9
            }
        ]), Tn = Kt.makeMessageType("aiserver.v1.DataframeInfo.Column", ()=>[
            {
                no: 1,
                name: "key",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "type",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "DataframeInfo_Column"
    }), xn = Kt.makeMessageType("aiserver.v1.LinterError", ()=>[
            {
                no: 1,
                name: "message",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "range",
                kind: "message",
                T: wn
            },
            {
                no: 3,
                name: "source",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "related_information",
                kind: "message",
                T: kn,
                repeated: !0
            },
            {
                no: 5,
                name: "severity",
                kind: "enum",
                T: Kt.getEnumType(bn),
                opt: !0
            },
            {
                no: 6,
                name: "is_stale",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]), Nn = Kt.makeMessageType("aiserver.v1.LinterErrors", ()=>[
            {
                no: 1,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "errors",
                kind: "message",
                T: xn,
                repeated: !0
            },
            {
                no: 3,
                name: "file_contents",
                kind: "scalar",
                T: 9
            }
        ]), Dn = Kt.makeMessageType("aiserver.v1.ErrorDetails", ()=>[
            {
                no: 1,
                name: "error",
                kind: "enum",
                T: Kt.getEnumType(Un)
            },
            {
                no: 2,
                name: "details",
                kind: "message",
                T: Qn
            },
            {
                no: 3,
                name: "is_expected",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]), Un = Kt.makeEnum("aiserver.v1.ErrorDetails.Error", [
        {
            no: 0,
            name: "ERROR_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "ERROR_BAD_API_KEY",
            localName: "BAD_API_KEY"
        },
        {
            no: 42,
            name: "ERROR_BAD_USER_API_KEY",
            localName: "BAD_USER_API_KEY"
        },
        {
            no: 2,
            name: "ERROR_NOT_LOGGED_IN",
            localName: "NOT_LOGGED_IN"
        },
        {
            no: 3,
            name: "ERROR_INVALID_AUTH_ID",
            localName: "INVALID_AUTH_ID"
        },
        {
            no: 4,
            name: "ERROR_NOT_HIGH_ENOUGH_PERMISSIONS",
            localName: "NOT_HIGH_ENOUGH_PERMISSIONS"
        },
        {
            no: 18,
            name: "ERROR_AGENT_REQUIRES_LOGIN",
            localName: "AGENT_REQUIRES_LOGIN"
        },
        {
            no: 5,
            name: "ERROR_BAD_MODEL_NAME",
            localName: "BAD_MODEL_NAME"
        },
        {
            no: 39,
            name: "ERROR_NOT_FOUND",
            localName: "NOT_FOUND"
        },
        {
            no: 40,
            name: "ERROR_DEPRECATED",
            localName: "DEPRECATED"
        },
        {
            no: 6,
            name: "ERROR_USER_NOT_FOUND",
            localName: "USER_NOT_FOUND"
        },
        {
            no: 7,
            name: "ERROR_FREE_USER_RATE_LIMIT_EXCEEDED",
            localName: "FREE_USER_RATE_LIMIT_EXCEEDED"
        },
        {
            no: 8,
            name: "ERROR_PRO_USER_RATE_LIMIT_EXCEEDED",
            localName: "PRO_USER_RATE_LIMIT_EXCEEDED"
        },
        {
            no: 9,
            name: "ERROR_FREE_USER_USAGE_LIMIT",
            localName: "FREE_USER_USAGE_LIMIT"
        },
        {
            no: 10,
            name: "ERROR_PRO_USER_USAGE_LIMIT",
            localName: "PRO_USER_USAGE_LIMIT"
        },
        {
            no: 41,
            name: "ERROR_RESOURCE_EXHAUSTED",
            localName: "RESOURCE_EXHAUSTED"
        },
        {
            no: 11,
            name: "ERROR_AUTH_TOKEN_NOT_FOUND",
            localName: "AUTH_TOKEN_NOT_FOUND"
        },
        {
            no: 12,
            name: "ERROR_AUTH_TOKEN_EXPIRED",
            localName: "AUTH_TOKEN_EXPIRED"
        },
        {
            no: 13,
            name: "ERROR_OPENAI",
            localName: "OPENAI"
        },
        {
            no: 14,
            name: "ERROR_OPENAI_RATE_LIMIT_EXCEEDED",
            localName: "OPENAI_RATE_LIMIT_EXCEEDED"
        },
        {
            no: 20,
            name: "ERROR_MAX_TOKENS",
            localName: "MAX_TOKENS"
        },
        {
            no: 23,
            name: "ERROR_PRO_USER_ONLY",
            localName: "PRO_USER_ONLY"
        },
        {
            no: 21,
            name: "ERROR_USER_ABORTED_REQUEST",
            localName: "USER_ABORTED_REQUEST"
        },
        {
            no: 25,
            name: "ERROR_TIMEOUT",
            localName: "TIMEOUT"
        },
        {
            no: 22,
            name: "ERROR_GENERIC_RATE_LIMIT_EXCEEDED",
            localName: "GENERIC_RATE_LIMIT_EXCEEDED"
        },
        {
            no: 28,
            name: "ERROR_GPT_4_VISION_PREVIEW_RATE_LIMIT",
            localName: "GPT_4_VISION_PREVIEW_RATE_LIMIT"
        },
        {
            no: 29,
            name: "ERROR_CUSTOM_MESSAGE",
            localName: "CUSTOM_MESSAGE"
        },
        {
            no: 30,
            name: "ERROR_OUTDATED_CLIENT",
            localName: "OUTDATED_CLIENT"
        },
        {
            no: 31,
            name: "ERROR_CLAUDE_IMAGE_TOO_LARGE",
            localName: "CLAUDE_IMAGE_TOO_LARGE"
        },
        {
            no: 33,
            name: "ERROR_FILE_NOT_FOUND",
            localName: "FILE_NOT_FOUND"
        },
        {
            no: 34,
            name: "ERROR_API_KEY_RATE_LIMIT",
            localName: "API_KEY_RATE_LIMIT"
        },
        {
            no: 35,
            name: "ERROR_DEBOUNCED",
            localName: "DEBOUNCED"
        },
        {
            no: 36,
            name: "ERROR_BAD_REQUEST",
            localName: "BAD_REQUEST"
        },
        {
            no: 37,
            name: "ERROR_REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED",
            localName: "REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED"
        },
        {
            no: 38,
            name: "ERROR_UNAUTHORIZED",
            localName: "UNAUTHORIZED"
        },
        {
            no: 43,
            name: "ERROR_CONVERSATION_TOO_LONG",
            localName: "CONVERSATION_TOO_LONG"
        },
        {
            no: 44,
            name: "ERROR_USAGE_PRICING_REQUIRED",
            localName: "USAGE_PRICING_REQUIRED"
        },
        {
            no: 45,
            name: "ERROR_USAGE_PRICING_REQUIRED_CHANGEABLE",
            localName: "USAGE_PRICING_REQUIRED_CHANGEABLE"
        },
        {
            no: 46,
            name: "ERROR_GITHUB_NO_USER_CREDENTIALS",
            localName: "GITHUB_NO_USER_CREDENTIALS"
        },
        {
            no: 47,
            name: "ERROR_GITHUB_USER_NO_ACCESS",
            localName: "GITHUB_USER_NO_ACCESS"
        },
        {
            no: 48,
            name: "ERROR_GITHUB_APP_NO_ACCESS",
            localName: "GITHUB_APP_NO_ACCESS"
        },
        {
            no: 49,
            name: "ERROR_GITHUB_MULTIPLE_OWNERS",
            localName: "GITHUB_MULTIPLE_OWNERS"
        },
        {
            no: 50,
            name: "ERROR_RATE_LIMITED",
            localName: "RATE_LIMITED"
        },
        {
            no: 51,
            name: "ERROR_RATE_LIMITED_CHANGEABLE",
            localName: "RATE_LIMITED_CHANGEABLE"
        },
        {
            no: 52,
            name: "ERROR_CUSTOM",
            localName: "CUSTOM"
        },
        {
            no: 53,
            name: "ERROR_HOOKS_BLOCKED",
            localName: "HOOKS_BLOCKED"
        },
        {
            no: 54,
            name: "ERROR_SUSPICIOUS_USAGE_BLOCKED",
            localName: "SUSPICIOUS_USAGE_BLOCKED"
        },
        {
            no: 55,
            name: "ERROR_EXTENSION_HOST_TIMEOUT",
            localName: "EXTENSION_HOST_TIMEOUT"
        },
        {
            no: 56,
            name: "ERROR_NETWORK_ERROR",
            localName: "NETWORK_ERROR"
        },
        {
            no: 57,
            name: "ERROR_PROVIDER_ERROR",
            localName: "PROVIDER_ERROR"
        },
        {
            no: 58,
            name: "ERROR_MODEL_BLOCKED",
            localName: "MODEL_BLOCKED"
        },
        {
            no: 59,
            name: "ERROR_INTERNAL",
            localName: "INTERNAL"
        },
        {
            no: 60,
            name: "ERROR_MAX_MODE_REQUIRED",
            localName: "MAX_MODE_REQUIRED"
        },
        {
            no: 61,
            name: "ERROR_MODEL_NO_LONGER_SUPPORTED",
            localName: "MODEL_NO_LONGER_SUPPORTED"
        },
        {
            no: 62,
            name: "ERROR_PRICING_WARNING",
            localName: "PRICING_WARNING"
        },
        {
            no: 63,
            name: "ERROR_SLOW_POOL",
            localName: "SLOW_POOL"
        },
        {
            no: 64,
            name: "ERROR_UNSUPPORTED_REGION",
            localName: "UNSUPPORTED_REGION"
        },
        {
            no: 65,
            name: "ERROR_ACCOUNT_CLOSED",
            localName: "ACCOUNT_CLOSED"
        },
        {
            no: 66,
            name: "ERROR_TENANT_RESTRICTION_VIOLATION",
            localName: "TENANT_RESTRICTION_VIOLATION"
        }
    ]), Qn = Kt.makeMessageType("aiserver.v1.CustomErrorDetails", ()=>[
            {
                no: 1,
                name: "title",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "detail",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 4,
                name: "is_retryable",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 5,
                name: "show_request_id",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 6,
                name: "should_show_immediate_error",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 8,
                name: "buttons",
                kind: "message",
                T: Fn,
                repeated: !0
            },
            {
                no: 7,
                name: "additional_info",
                kind: "map",
                K: 9,
                V: {
                    kind: "scalar",
                    T: 9
                }
            },
            {
                no: 9,
                name: "plan_choices",
                kind: "message",
                T: On,
                repeated: !0
            },
            {
                no: 10,
                name: "analytics_metadata",
                kind: "message",
                T: Mn,
                opt: !0
            }
        ]), Mn = Kt.makeMessageType("aiserver.v1.ErrorAnalyticsMetadata", ()=>[
            {
                no: 1,
                name: "action_required",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), On = Kt.makeMessageType("aiserver.v1.PlanChoice", ()=>[
            {
                no: 1,
                name: "label",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "sublabel",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "description",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "value",
                kind: "scalar",
                T: 9
            }
        ]), Fn = Kt.makeMessageType("aiserver.v1.ErrorButton", ()=>[
            {
                no: 1,
                name: "label",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "upgrade",
                kind: "message",
                T: Kn,
                oneof: "action"
            },
            {
                no: 3,
                name: "switch_model",
                kind: "message",
                T: Vn,
                oneof: "action"
            },
            {
                no: 4,
                name: "configure_spend_limit",
                kind: "message",
                T: Wn,
                oneof: "action"
            },
            {
                no: 5,
                name: "url",
                kind: "message",
                T: Yn,
                oneof: "action"
            },
            {
                no: 6,
                name: "upgrade_choice",
                kind: "message",
                T: Hn,
                oneof: "action"
            },
            {
                no: 7,
                name: "dashboard_action",
                kind: "message",
                T: Gn,
                oneof: "action"
            },
            {
                no: 8,
                name: "reload_window",
                kind: "message",
                T: $n,
                oneof: "action"
            },
            {
                no: 9,
                name: "client_action",
                kind: "message",
                T: Ln,
                oneof: "action"
            }
        ]), Ln = Kt.makeMessageType("aiserver.v1.ClientAction", ()=>[
            {
                no: 1,
                name: "command_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "args",
                kind: "map",
                K: 9,
                V: {
                    kind: "scalar",
                    T: 9
                }
            }
        ]), $n = Kt.makeMessageType("aiserver.v1.ReloadWindowAction", []), Gn = Kt.makeMessageType("aiserver.v1.DashboardAction", ()=>[
            {
                no: 1,
                name: "action",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "args",
                kind: "map",
                K: 9,
                V: {
                    kind: "scalar",
                    T: 9
                }
            },
            {
                no: 3,
                name: "success_message",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Hn = Kt.makeMessageType("aiserver.v1.UpgradeChoice", []), Kn = Kt.makeMessageType("aiserver.v1.UpgradeAction", ()=>[
            {
                no: 1,
                name: "membership_to_upgrade_to",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "try_immediate_upgrade",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 3,
                name: "allow_trial",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 4,
                name: "dashboard_action",
                kind: "message",
                T: Gn,
                opt: !0
            }
        ]), Vn = Kt.makeMessageType("aiserver.v1.SwitchModelAction", ()=>[
            {
                no: 1,
                name: "suggested_model",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "parameters",
                kind: "message",
                T: zn,
                repeated: !0
            },
            {
                no: 3,
                name: "max_mode",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ]), zn = Kt.makeMessageType("aiserver.v1.SwitchModelAction.ModelParameterValue", ()=>[
            {
                no: 1,
                name: "id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "value",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "SwitchModelAction_ModelParameterValue"
    }), Wn = Kt.makeMessageType("aiserver.v1.ConfigureSpendLimitAction", ()=>[
            {
                no: 1,
                name: "confirm_label",
                kind: "scalar",
                T: 9
            }
        ]), Yn = Kt.makeMessageType("aiserver.v1.UrlAction", ()=>[
            {
                no: 1,
                name: "url",
                kind: "scalar",
                T: 9
            }
        ]), jn = Kt.makeMessageType("aiserver.v1.LspSubgraphPosition", ()=>[
            {
                no: 1,
                name: "line",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "character",
                kind: "scalar",
                T: 5
            }
        ]), Xn = Kt.makeMessageType("aiserver.v1.LspSubgraphRange", ()=>[
            {
                no: 1,
                name: "start_line",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "start_character",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "end_line",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "end_character",
                kind: "scalar",
                T: 5
            }
        ]), Zn = Kt.makeMessageType("aiserver.v1.LspSubgraphContextItem", ()=>[
            {
                no: 1,
                name: "uri",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "type",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "content",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "range",
                kind: "message",
                T: Xn,
                opt: !0
            }
        ]), ts = Kt.makeMessageType("aiserver.v1.LspSubgraphFullContext", ()=>[
            {
                no: 1,
                name: "uri",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "symbol_name",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "positions",
                kind: "message",
                T: jn,
                repeated: !0
            },
            {
                no: 4,
                name: "context_items",
                kind: "message",
                T: Zn,
                repeated: !0
            },
            {
                no: 5,
                name: "score",
                kind: "scalar",
                T: 2
            }
        ]), es = Kt.makeMessageType("aiserver.v1.FilesyncUpdateWithModelVersion", ()=>[
            {
                no: 1,
                name: "model_version",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "updates",
                kind: "message",
                T: rs,
                repeated: !0
            },
            {
                no: 4,
                name: "expected_file_length",
                kind: "scalar",
                T: 5
            }
        ]), rs = Kt.makeMessageType("aiserver.v1.SingleUpdateRequest", ()=>[
            {
                no: 1,
                name: "start_position",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "end_position",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "change_length",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "replaced_string",
                kind: "scalar",
                T: 9
            },
            {
                no: 5,
                name: "range",
                kind: "message",
                T: _n
            }
        ]), ns = Kt.makeMessageType("aiserver.v1.CodeResult", ()=>[
            {
                no: 1,
                name: "code_block",
                kind: "message",
                T: Jn
            },
            {
                no: 2,
                name: "score",
                kind: "scalar",
                T: 2
            }
        ]), ss = Kt.makeMessageType("aiserver.v1.BugLocation", ()=>[
            {
                no: 1,
                name: "file",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "start_line",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "end_line",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "code_lines",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]), is = Kt.makeMessageType("aiserver.v1.BugReport", ()=>[
            {
                no: 1,
                name: "locations",
                kind: "message",
                T: ss,
                repeated: !0
            },
            {
                no: 2,
                name: "id",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "description",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "confidence",
                kind: "scalar",
                T: 2,
                opt: !0
            },
            {
                no: 5,
                name: "category",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 6,
                name: "severity",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 7,
                name: "title",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 9,
                name: "rationale",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 10,
                name: "triggered_by_rule_id",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 11,
                name: "model_confidence",
                kind: "scalar",
                T: 2,
                opt: !0
            }
        ]), os = Kt.makeMessageType("aiserver.v1.BugReports", ()=>[
            {
                no: 1,
                name: "bug_reports",
                kind: "message",
                T: is,
                repeated: !0
            }
        ]), as = Kt.makeEnum("aiserver.v1.CppSource", [
        {
            no: 0,
            name: "CPP_SOURCE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "CPP_SOURCE_LINE_CHANGE",
            localName: "LINE_CHANGE"
        },
        {
            no: 2,
            name: "CPP_SOURCE_TYPING",
            localName: "TYPING"
        },
        {
            no: 3,
            name: "CPP_SOURCE_OPTION_HOLD",
            localName: "OPTION_HOLD"
        },
        {
            no: 4,
            name: "CPP_SOURCE_LINTER_ERRORS",
            localName: "LINTER_ERRORS"
        },
        {
            no: 5,
            name: "CPP_SOURCE_PARAMETER_HINTS",
            localName: "PARAMETER_HINTS"
        },
        {
            no: 6,
            name: "CPP_SOURCE_CURSOR_PREDICTION",
            localName: "CURSOR_PREDICTION"
        },
        {
            no: 7,
            name: "CPP_SOURCE_MANUAL_TRIGGER",
            localName: "MANUAL_TRIGGER"
        },
        {
            no: 8,
            name: "CPP_SOURCE_EDITOR_CHANGE",
            localName: "EDITOR_CHANGE"
        },
        {
            no: 9,
            name: "CPP_SOURCE_LSP_SUGGESTIONS",
            localName: "LSP_SUGGESTIONS"
        }
    ]), us = Kt.makeMessageType("aiserver.v1.CppIntentInfo", ()=>[
            {
                no: 1,
                name: "source",
                kind: "scalar",
                T: 9
            }
        ]), cs = Kt.makeMessageType("aiserver.v1.LspSuggestion", ()=>[
            {
                no: 1,
                name: "label",
                kind: "scalar",
                T: 9
            }
        ]), ls = Kt.makeMessageType("aiserver.v1.LspSuggestedItems", ()=>[
            {
                no: 1,
                name: "suggestions",
                kind: "message",
                T: cs,
                repeated: !0
            }
        ]), ms = Kt.makeMessageType("aiserver.v1.StreamCppRequest", ()=>[
            {
                no: 1,
                name: "current_file",
                kind: "message",
                T: qn
            },
            {
                no: 2,
                name: "diff_history",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 3,
                name: "model_name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "linter_errors",
                kind: "message",
                T: Nn,
                opt: !0
            },
            {
                no: 13,
                name: "context_items",
                kind: "message",
                T: hs,
                repeated: !0
            },
            {
                no: 5,
                name: "diff_history_keys",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 6,
                name: "give_debug_output",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 7,
                name: "file_diff_histories",
                kind: "message",
                T: ps,
                repeated: !0
            },
            {
                no: 8,
                name: "merged_diff_histories",
                kind: "message",
                T: ps,
                repeated: !0
            },
            {
                no: 9,
                name: "block_diff_patches",
                kind: "message",
                T: ji,
                repeated: !0
            },
            {
                no: 10,
                name: "is_nightly",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 11,
                name: "is_debug",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 12,
                name: "immediately_ack",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 17,
                name: "enable_more_context",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 14,
                name: "parameter_hints",
                kind: "message",
                T: gs,
                repeated: !0
            },
            {
                no: 15,
                name: "lsp_contexts",
                kind: "message",
                T: ts,
                repeated: !0
            },
            {
                no: 16,
                name: "cpp_intent_info",
                kind: "message",
                T: us,
                opt: !0
            },
            {
                no: 18,
                name: "workspace_id",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 19,
                name: "additional_files",
                kind: "message",
                T: fs,
                repeated: !0
            },
            {
                no: 20,
                name: "control_token",
                kind: "enum",
                T: Kt.getEnumType(ds),
                opt: !0
            },
            {
                no: 21,
                name: "client_time",
                kind: "scalar",
                T: 1,
                opt: !0
            },
            {
                no: 22,
                name: "filesync_updates",
                kind: "message",
                T: es,
                repeated: !0
            },
            {
                no: 23,
                name: "time_since_request_start",
                kind: "scalar",
                T: 1
            },
            {
                no: 24,
                name: "time_at_request_send",
                kind: "scalar",
                T: 1
            },
            {
                no: 25,
                name: "client_timezone_offset",
                kind: "scalar",
                T: 1,
                opt: !0
            },
            {
                no: 26,
                name: "lsp_suggested_items",
                kind: "message",
                T: ls,
                opt: !0
            },
            {
                no: 27,
                name: "supports_cpt",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 28,
                name: "supports_crlf_cpt",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 29,
                name: "code_results",
                kind: "message",
                T: ns,
                repeated: !0
            }
        ]), ds = Kt.makeEnum("aiserver.v1.StreamCppRequest.ControlToken", [
        {
            no: 0,
            name: "CONTROL_TOKEN_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "CONTROL_TOKEN_QUIET",
            localName: "QUIET"
        },
        {
            no: 2,
            name: "CONTROL_TOKEN_LOUD",
            localName: "LOUD"
        },
        {
            no: 3,
            name: "CONTROL_TOKEN_OP",
            localName: "OP"
        }
    ]), fs = Kt.makeMessageType("aiserver.v1.AdditionalFile", ()=>[
            {
                no: 1,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "is_open",
                kind: "scalar",
                T: 8
            },
            {
                no: 3,
                name: "visible_range_content",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 4,
                name: "last_viewed_at",
                kind: "scalar",
                T: 1,
                opt: !0
            },
            {
                no: 5,
                name: "start_line_number_one_indexed",
                kind: "scalar",
                T: 5,
                repeated: !0
            },
            {
                no: 6,
                name: "visible_ranges",
                kind: "message",
                T: yn,
                repeated: !0
            }
        ]), ps = Kt.makeMessageType("aiserver.v1.CppFileDiffHistory", ()=>[
            {
                no: 1,
                name: "file_name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "diff_history",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 3,
                name: "diff_history_timestamps",
                kind: "scalar",
                T: 1,
                repeated: !0
            }
        ]), hs = Kt.makeMessageType("aiserver.v1.CppContextItem", ()=>[
            {
                no: 1,
                name: "contents",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "symbol",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "score",
                kind: "scalar",
                T: 2
            }
        ]), gs = Kt.makeMessageType("aiserver.v1.CppParameterHint", ()=>[
            {
                no: 1,
                name: "label",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "documentation",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), As = Kt.makeMessageType("aiserver.v1.IRange", ()=>[
            {
                no: 1,
                name: "start_line_number",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "start_column",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "end_line_number",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "end_column",
                kind: "scalar",
                T: 5
            }
        ]), _s = Kt.makeMessageType("aiserver.v1.OneIndexedPosition", ()=>[
            {
                no: 1,
                name: "line_number_one_indexed",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "column_one_indexed",
                kind: "scalar",
                T: 5
            }
        ]), ys = Kt.makeMessageType("aiserver.v1.CursorSelection", ()=>[
            {
                no: 1,
                name: "selection_start_line_number",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "selection_start_column",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "position_line_number",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "position_column",
                kind: "scalar",
                T: 5
            }
        ]), ws = Kt.makeMessageType("aiserver.v1.ModelChange", ()=>[
            {
                no: 1,
                name: "text",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "range",
                kind: "message",
                T: As
            },
            {
                no: 3,
                name: "final_model_hash",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "model_version_immediately_after_this_change",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 5,
                name: "performance_now_timestamp",
                kind: "scalar",
                T: 1,
                opt: !0
            },
            {
                no: 7,
                name: "is_undoing",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 8,
                name: "is_redoing",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 9,
                name: "model_is_attached_to_editor",
                kind: "scalar",
                T: 8
            },
            {
                no: 10,
                name: "model_is_attached_to_the_active_editor",
                kind: "scalar",
                T: 8
            },
            {
                no: 11,
                name: "cursor_selections",
                kind: "message",
                T: ys,
                repeated: !0
            },
            {
                no: 12,
                name: "model_version_at_metadata_retrieval_time",
                kind: "scalar",
                T: 5
            },
            {
                no: 13,
                name: "global_index",
                kind: "scalar",
                T: 3,
                opt: !0
            },
            {
                no: 14,
                name: "performance_now_flush_time",
                kind: "scalar",
                T: 1,
                opt: !0
            },
            {
                no: 15,
                name: "change_index",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 16,
                name: "flush_index",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 17,
                name: "global_index_v2",
                kind: "scalar",
                T: 5,
                opt: !0
            }
        ]), Ss = Kt.makeMessageType("aiserver.v1.CurrentlyShownCppSuggestion", ()=>[
            {
                no: 1,
                name: "suggestion_id",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "suggestion_text",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "model_version_when_the_change_is_first_indicated_to_the_user_but_not_shown_in_the_model",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "range_of_suggestion_in_current_model",
                kind: "message",
                T: As,
                opt: !0
            },
            {
                no: 5,
                name: "original_text",
                kind: "scalar",
                T: 9
            },
            {
                no: 6,
                name: "binding_id",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Js = Kt.makeMessageType("aiserver.v1.CppAcceptEventNew", ()=>[
            {
                no: 1,
                name: "cpp_suggestion",
                kind: "message",
                T: Ss
            },
            {
                no: 7,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            }
        ]), Bs = Kt.makeMessageType("aiserver.v1.RecoverableCppData", ()=>[
            {
                no: 1,
                name: "request_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "suggestion_text",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "suggestion_range",
                kind: "message",
                T: As
            },
            {
                no: 4,
                name: "position",
                kind: "message",
                T: _s
            }
        ]), Es = Kt.makeMessageType("aiserver.v1.CppSuggestEvent", ()=>[
            {
                no: 1,
                name: "cpp_suggestion",
                kind: "message",
                T: Ss
            },
            {
                no: 2,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            },
            {
                no: 3,
                name: "recoverable_cpp_data",
                kind: "message",
                T: Bs
            }
        ]), Is = Kt.makeMessageType("aiserver.v1.CppTriggerEvent", ()=>[
            {
                no: 1,
                name: "generation_uuid",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "model_version",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "cursor_position",
                kind: "message",
                T: _s
            },
            {
                no: 4,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            },
            {
                no: 5,
                name: "source",
                kind: "enum",
                T: Kt.getEnumType(as)
            }
        ]), Cs = Kt.makeMessageType("aiserver.v1.FinishedCppGenerationEvent", ()=>[
            {
                no: 1,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            },
            {
                no: 2,
                name: "recoverable_cpp_data",
                kind: "message",
                T: Bs
            }
        ]), bs = Kt.makeMessageType("aiserver.v1.CppRejectEventNew", ()=>[
            {
                no: 1,
                name: "cpp_suggestion",
                kind: "message",
                T: Ss
            },
            {
                no: 7,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            }
        ]), ks = Kt.makeMessageType("aiserver.v1.Edit", ()=>[
            {
                no: 1,
                name: "text",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "range",
                kind: "message",
                T: As
            }
        ]), vs = Kt.makeMessageType("aiserver.v1.CppPartialAcceptEvent", ()=>[
            {
                no: 1,
                name: "cpp_suggestion",
                kind: "message",
                T: Ss
            },
            {
                no: 2,
                name: "edit",
                kind: "message",
                T: ks
            },
            {
                no: 3,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            }
        ]), qs = Kt.makeMessageType("aiserver.v1.CursorPrediction", ()=>[
            {
                no: 1,
                name: "request_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "prediction_id",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "line_number",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "source",
                kind: "enum",
                T: Kt.getEnumType(Rs)
            },
            {
                no: 5,
                name: "binding_id",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Rs = Kt.makeEnum("aiserver.v1.CursorPrediction.CursorPredictionSource", [
        {
            no: 0,
            name: "CURSOR_PREDICTION_SOURCE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "CURSOR_PREDICTION_SOURCE_ALWAYS_ON",
            localName: "ALWAYS_ON"
        },
        {
            no: 2,
            name: "CURSOR_PREDICTION_SOURCE_ACCEPT",
            localName: "ACCEPT"
        },
        {
            no: 3,
            name: "CURSOR_PREDICTION_SOURCE_UNDO",
            localName: "UNDO"
        },
        {
            no: 4,
            name: "CURSOR_PREDICTION_SOURCE_EDITOR_CHANGE",
            localName: "EDITOR_CHANGE"
        }
    ]), Ps = Kt.makeMessageType("aiserver.v1.SuggestCursorPredictionEvent", ()=>[
            {
                no: 1,
                name: "cursor_prediction",
                kind: "message",
                T: qs
            },
            {
                no: 2,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            }
        ]), Ts = Kt.makeMessageType("aiserver.v1.AcceptCursorPredictionEvent", ()=>[
            {
                no: 1,
                name: "cursor_prediction",
                kind: "message",
                T: qs
            },
            {
                no: 2,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            }
        ]), xs = Kt.makeMessageType("aiserver.v1.RejectCursorPredictionEvent", ()=>[
            {
                no: 1,
                name: "cursor_prediction",
                kind: "message",
                T: qs
            },
            {
                no: 2,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            }
        ]), Ns = Kt.makeMessageType("aiserver.v1.MaybeDefinedPointInTimeModel", ()=>[
            {
                no: 1,
                name: "model_uuid",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "model_version",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "relative_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "model_id",
                kind: "scalar",
                T: 9
            }
        ]), Ds = Kt.makeMessageType("aiserver.v1.PointInTimeModel", ()=>[
            {
                no: 1,
                name: "model_uuid",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "model_version",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "relative_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "model_id",
                kind: "scalar",
                T: 9
            }
        ]), Us = Kt.makeMessageType("aiserver.v1.CppManualTriggerEventNew", ()=>[
            {
                no: 1,
                name: "line_number_one_indexed",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "column_number_one_indexed",
                kind: "scalar",
                T: 5
            },
            {
                no: 7,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            }
        ]), Qs = Kt.makeMessageType("aiserver.v1.CppStoppedTrackingModelEvent", ()=>[
            {
                no: 1,
                name: "model_uuid",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "relative_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "reason",
                kind: "enum",
                T: Kt.getEnumType(Ms)
            }
        ]), Ms = Kt.makeEnum("aiserver.v1.CppStoppedTrackingModelEvent.StoppedTrackingModelReason", [
        {
            no: 0,
            name: "STOPPED_TRACKING_MODEL_REASON_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "STOPPED_TRACKING_MODEL_REASON_FILE_TOO_BIG",
            localName: "FILE_TOO_BIG"
        },
        {
            no: 2,
            name: "STOPPED_TRACKING_MODEL_REASON_FILE_DISPOSED",
            localName: "FILE_DISPOSED"
        },
        {
            no: 3,
            name: "STOPPED_TRACKING_MODEL_REASON_CHANGE_TOO_BIG",
            localName: "CHANGE_TOO_BIG"
        }
    ]), Os = Kt.makeMessageType("aiserver.v1.CppLinterErrorEvent", ()=>[
            {
                no: 1,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            },
            {
                no: 2,
                name: "added_errors",
                kind: "message",
                T: xn,
                repeated: !0
            },
            {
                no: 3,
                name: "removed_errors",
                kind: "message",
                T: xn,
                repeated: !0
            },
            {
                no: 4,
                name: "errors",
                kind: "message",
                T: xn,
                repeated: !0
            }
        ]), Fs = Kt.makeMessageType("aiserver.v1.CppDebouncedCursorMovementEvent", ()=>[
            {
                no: 1,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            },
            {
                no: 2,
                name: "cursor_position",
                kind: "message",
                T: _s
            }
        ]), Ls = Kt.makeMessageType("aiserver.v1.CppEditorChangedEvent", ()=>[
            {
                no: 1,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            },
            {
                no: 2,
                name: "cursor_position",
                kind: "message",
                T: _s
            },
            {
                no: 3,
                name: "visible_ranges",
                kind: "message",
                T: As,
                repeated: !0
            },
            {
                no: 4,
                name: "editor_id",
                kind: "scalar",
                T: 9
            }
        ]), $s = Kt.makeMessageType("aiserver.v1.CppCopyEvent", ()=>[
            {
                no: 1,
                name: "clipboard_contents",
                kind: "scalar",
                T: 9
            }
        ]), Gs = Kt.makeMessageType("aiserver.v1.CppQuickActionCommand", ()=>[
            {
                no: 1,
                name: "title",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "id",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "arguments",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ]), Hs = Kt.makeMessageType("aiserver.v1.CppQuickAction", ()=>[
            {
                no: 1,
                name: "title",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "edits",
                kind: "message",
                T: Ks,
                repeated: !0
            },
            {
                no: 3,
                name: "is_preferred",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 4,
                name: "command",
                kind: "message",
                T: Gs
            }
        ]), Ks = Kt.makeMessageType("aiserver.v1.CppQuickAction.Edit", ()=>[
            {
                no: 1,
                name: "text",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "range",
                kind: "message",
                T: As
            }
        ], {
        localName: "CppQuickAction_Edit"
    }), Vs = Kt.makeMessageType("aiserver.v1.CppChangeQuickActionEvent", ()=>[
            {
                no: 1,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            },
            {
                no: 2,
                name: "added",
                kind: "message",
                T: Hs,
                repeated: !0
            },
            {
                no: 3,
                name: "removed",
                kind: "message",
                T: Hs,
                repeated: !0
            },
            {
                no: 4,
                name: "actions",
                kind: "message",
                T: Hs,
                repeated: !0
            }
        ]), zs = Kt.makeMessageType("aiserver.v1.CppQuickActionFireEvent", ()=>[
            {
                no: 1,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            },
            {
                no: 2,
                name: "quick_action_command",
                kind: "message",
                T: Gs,
                oneof: "action_identifier"
            },
            {
                no: 3,
                name: "quick_action_event",
                kind: "message",
                T: Hs,
                oneof: "action_identifier"
            }
        ]), Ws = Kt.makeMessageType("aiserver.v1.CmdKEvent", ()=>[
            {
                no: 1,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            },
            {
                no: 2,
                name: "request_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 20,
                name: "prompt_bar_id",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "submit_prompt",
                kind: "message",
                T: Ys,
                oneof: "event_type"
            },
            {
                no: 4,
                name: "end_of_generation",
                kind: "message",
                T: js,
                oneof: "event_type"
            },
            {
                no: 5,
                name: "interrupt_generation",
                kind: "message",
                T: Xs,
                oneof: "event_type"
            },
            {
                no: 6,
                name: "accept_all",
                kind: "message",
                T: Zs,
                oneof: "event_type"
            },
            {
                no: 7,
                name: "reject_all",
                kind: "message",
                T: ti,
                oneof: "event_type"
            },
            {
                no: 8,
                name: "reject_partial_diff",
                kind: "message",
                T: ri,
                oneof: "event_type"
            },
            {
                no: 9,
                name: "accept_partial_diff",
                kind: "message",
                T: ei,
                oneof: "event_type"
            },
            {
                no: 10,
                name: "after_reject",
                kind: "message",
                T: ni,
                oneof: "event_type"
            }
        ]), Ys = Kt.makeMessageType("aiserver.v1.CmdKEvent.SubmitPrompt", ()=>[
            {
                no: 1,
                name: "original_range",
                kind: "message",
                T: As
            },
            {
                no: 2,
                name: "original_text",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "prompt",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "CmdKEvent_SubmitPrompt"
    }), js = Kt.makeMessageType("aiserver.v1.CmdKEvent.EndOfGeneration", [], {
        localName: "CmdKEvent_EndOfGeneration"
    }), Xs = Kt.makeMessageType("aiserver.v1.CmdKEvent.InterruptGeneration", [], {
        localName: "CmdKEvent_InterruptGeneration"
    }), Zs = Kt.makeMessageType("aiserver.v1.CmdKEvent.AcceptDiffs", [], {
        localName: "CmdKEvent_AcceptDiffs"
    }), ti = Kt.makeMessageType("aiserver.v1.CmdKEvent.RejectDiffs", ()=>[
            {
                no: 1,
                name: "actor_request_id",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 2,
                name: "silent",
                kind: "scalar",
                T: 8,
                opt: !0
            }
        ], {
        localName: "CmdKEvent_RejectDiffs"
    }), ei = Kt.makeMessageType("aiserver.v1.CmdKEvent.AcceptPartialDiff", ()=>[
            {
                no: 1,
                name: "green_range",
                kind: "message",
                T: As
            },
            {
                no: 2,
                name: "green_lines",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 3,
                name: "red_lines",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ], {
        localName: "CmdKEvent_AcceptPartialDiff"
    }), ri = Kt.makeMessageType("aiserver.v1.CmdKEvent.RejectPartialDiff", ()=>[
            {
                no: 1,
                name: "green_range",
                kind: "message",
                T: As
            },
            {
                no: 2,
                name: "green_lines",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 3,
                name: "red_lines",
                kind: "scalar",
                T: 9,
                repeated: !0
            }
        ], {
        localName: "CmdKEvent_RejectPartialDiff"
    }), ni = Kt.makeMessageType("aiserver.v1.CmdKEvent.AfterReject", [], {
        localName: "CmdKEvent_AfterReject"
    }), si = Kt.makeMessageType("aiserver.v1.ChatEvent", ()=>[
            {
                no: 1,
                name: "request_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "submit_prompt",
                kind: "message",
                T: ii,
                oneof: "event_type"
            },
            {
                no: 3,
                name: "end_of_any_generation",
                kind: "message",
                T: oi,
                oneof: "event_type"
            },
            {
                no: 4,
                name: "end_of_uninterrupted_generation",
                kind: "message",
                T: ai,
                oneof: "event_type"
            }
        ]), ii = Kt.makeMessageType("aiserver.v1.ChatEvent.SubmitPrompt", ()=>[
            {
                no: 1,
                name: "prompt",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "ChatEvent_SubmitPrompt"
    }), oi = Kt.makeMessageType("aiserver.v1.ChatEvent.EndOfAnyGeneration", [], {
        localName: "ChatEvent_EndOfAnyGeneration"
    }), ai = Kt.makeMessageType("aiserver.v1.ChatEvent.EndOfUninterruptedGeneration", [], {
        localName: "ChatEvent_EndOfUninterruptedGeneration"
    }), ui = Kt.makeMessageType("aiserver.v1.BugBotLinterEvent", ()=>[
            {
                no: 1,
                name: "request_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            },
            {
                no: 3,
                name: "lint_generated",
                kind: "message",
                T: li,
                oneof: "event_type"
            },
            {
                no: 4,
                name: "lint_dismissed",
                kind: "message",
                T: mi,
                oneof: "event_type"
            },
            {
                no: 5,
                name: "user_feedback",
                kind: "message",
                T: di,
                oneof: "event_type"
            },
            {
                no: 6,
                name: "viewed_report",
                kind: "message",
                T: fi,
                oneof: "event_type"
            },
            {
                no: 7,
                name: "unviewed_report",
                kind: "message",
                T: pi,
                oneof: "event_type"
            },
            {
                no: 8,
                name: "started",
                kind: "message",
                T: ci,
                oneof: "event_type"
            },
            {
                no: 9,
                name: "not_shown_because_heuristic",
                kind: "message",
                T: hi,
                oneof: "event_type"
            }
        ]), ci = Kt.makeMessageType("aiserver.v1.BugBotLinterEvent.Started", [], {
        localName: "BugBotLinterEvent_Started"
    }), li = Kt.makeMessageType("aiserver.v1.BugBotLinterEvent.LintGenerated", ()=>[
            {
                no: 1,
                name: "bug_report",
                kind: "message",
                T: is
            }
        ], {
        localName: "BugBotLinterEvent_LintGenerated"
    }), mi = Kt.makeMessageType("aiserver.v1.BugBotLinterEvent.LintDismissed", ()=>[
            {
                no: 1,
                name: "bug_report_id",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "BugBotLinterEvent_LintDismissed"
    }), di = Kt.makeMessageType("aiserver.v1.BugBotLinterEvent.UserFeedback", ()=>[
            {
                no: 1,
                name: "bug_report_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "feedback",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "BugBotLinterEvent_UserFeedback"
    }), fi = Kt.makeMessageType("aiserver.v1.BugBotLinterEvent.ViewedReport", ()=>[
            {
                no: 1,
                name: "bug_report_id",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "BugBotLinterEvent_ViewedReport"
    }), pi = Kt.makeMessageType("aiserver.v1.BugBotLinterEvent.UnviewedReport", ()=>[
            {
                no: 1,
                name: "bug_report_id",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "BugBotLinterEvent_UnviewedReport"
    }), hi = Kt.makeMessageType("aiserver.v1.BugBotLinterEvent.NotShownBecauseHeuristic", ()=>[
            {
                no: 1,
                name: "heuristic",
                kind: "enum",
                T: Kt.getEnumType(gi)
            }
        ], {
        localName: "BugBotLinterEvent_NotShownBecauseHeuristic"
    }), gi = Kt.makeEnum("aiserver.v1.BugBotLinterEvent.NotShownBecauseHeuristic.Heuristic", [
        {
            no: 0,
            name: "HEURISTIC_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "HEURISTIC_LINT_OVERLAP",
            localName: "LINT_OVERLAP"
        },
        {
            no: 2,
            name: "HEURISTIC_LINES_MISMATCH",
            localName: "LINES_MISMATCH"
        }
    ]), Ai = Kt.makeMessageType("aiserver.v1.BugBotEvent", ()=>[
            {
                no: 1,
                name: "request_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "started",
                kind: "message",
                T: yi,
                oneof: "event_type"
            },
            {
                no: 3,
                name: "reports_generated",
                kind: "message",
                T: wi,
                oneof: "event_type"
            },
            {
                no: 4,
                name: "pressed_fix_in_composer",
                kind: "message",
                T: Si,
                oneof: "event_type"
            },
            {
                no: 5,
                name: "pressed_open_in_editor",
                kind: "message",
                T: Bi,
                oneof: "event_type"
            },
            {
                no: 6,
                name: "viewed_report",
                kind: "message",
                T: Ei,
                oneof: "event_type"
            },
            {
                no: 7,
                name: "user_feedback",
                kind: "message",
                T: Ci,
                oneof: "event_type"
            },
            {
                no: 8,
                name: "pressed_add_to_chat",
                kind: "message",
                T: Ji,
                oneof: "event_type"
            },
            {
                no: 9,
                name: "background_interval_started",
                kind: "message",
                T: bi,
                oneof: "event_type"
            },
            {
                no: 10,
                name: "background_interval_ended",
                kind: "message",
                T: ki,
                oneof: "event_type"
            },
            {
                no: 11,
                name: "background_interval_interrupted",
                kind: "message",
                T: vi,
                oneof: "event_type"
            },
            {
                no: 12,
                name: "background_interval_errored",
                kind: "message",
                T: qi,
                oneof: "event_type"
            }
        ]), _i = Kt.makeEnum("aiserver.v1.BugBotEvent.BackgroundIntervalInterruptedReason", [
        {
            no: 0,
            name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DISABLED",
            localName: "DISABLED"
        },
        {
            no: 2,
            name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_TOO_RECENT",
            localName: "TOO_RECENT"
        },
        {
            no: 3,
            name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_UNVIEWED_BUG_REPORTS",
            localName: "UNVIEWED_BUG_REPORTS"
        },
        {
            no: 4,
            name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NOT_IN_GIT_REPO",
            localName: "NOT_IN_GIT_REPO"
        },
        {
            no: 5,
            name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH",
            localName: "DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH"
        },
        {
            no: 6,
            name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NO_GIT_USER",
            localName: "NO_GIT_USER"
        },
        {
            no: 7,
            name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NO_LAST_COMMIT",
            localName: "NO_LAST_COMMIT"
        },
        {
            no: 8,
            name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_LAST_COMMIT_NOT_MADE_BY_USER",
            localName: "LAST_COMMIT_NOT_MADE_BY_USER"
        },
        {
            no: 9,
            name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_LAST_COMMIT_TOO_OLD",
            localName: "LAST_COMMIT_TOO_OLD"
        },
        {
            no: 10,
            name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DIFF_TOO_LONG",
            localName: "DIFF_TOO_LONG"
        },
        {
            no: 11,
            name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DIFF_TOO_SHORT",
            localName: "DIFF_TOO_SHORT"
        },
        {
            no: 12,
            name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_TELEMETRY_UNHEALTHY",
            localName: "TELEMETRY_UNHEALTHY"
        }
    ]), yi = Kt.makeMessageType("aiserver.v1.BugBotEvent.Started", [], {
        localName: "BugBotEvent_Started"
    }), wi = Kt.makeMessageType("aiserver.v1.BugBotEvent.ReportsGenerated", ()=>[
            {
                no: 1,
                name: "bug_reports",
                kind: "message",
                T: os
            }
        ], {
        localName: "BugBotEvent_ReportsGenerated"
    }), Si = Kt.makeMessageType("aiserver.v1.BugBotEvent.PressedFixInComposer", ()=>[
            {
                no: 1,
                name: "bug_report_id",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "BugBotEvent_PressedFixInComposer"
    }), Ji = Kt.makeMessageType("aiserver.v1.BugBotEvent.PressedAddToChat", ()=>[
            {
                no: 1,
                name: "bug_report_id",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "BugBotEvent_PressedAddToChat"
    }), Bi = Kt.makeMessageType("aiserver.v1.BugBotEvent.PressedOpenInEditor", ()=>[
            {
                no: 1,
                name: "bug_location",
                kind: "message",
                T: ss
            },
            {
                no: 2,
                name: "bug_report_id",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "BugBotEvent_PressedOpenInEditor"
    }), Ei = Kt.makeMessageType("aiserver.v1.BugBotEvent.ViewedReport", ()=>[
            {
                no: 1,
                name: "seconds_viewed",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "report_views",
                kind: "message",
                T: Ii,
                repeated: !0
            }
        ], {
        localName: "BugBotEvent_ViewedReport"
    }), Ii = Kt.makeMessageType("aiserver.v1.BugBotEvent.ViewedReport.ReportView", ()=>[
            {
                no: 1,
                name: "bug_report_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "view_percentage",
                kind: "scalar",
                T: 1
            },
            {
                no: 3,
                name: "text_percentage",
                kind: "scalar",
                T: 1
            }
        ], {
        localName: "BugBotEvent_ViewedReport_ReportView"
    }), Ci = Kt.makeMessageType("aiserver.v1.BugBotEvent.UserFeedback", ()=>[
            {
                no: 1,
                name: "bug_report_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "feedback",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "BugBotEvent_UserFeedback"
    }), bi = Kt.makeMessageType("aiserver.v1.BugBotEvent.BackgroundIntervalStarted", [], {
        localName: "BugBotEvent_BackgroundIntervalStarted"
    }), ki = Kt.makeMessageType("aiserver.v1.BugBotEvent.BackgroundIntervalEnded", ()=>[
            {
                no: 1,
                name: "success",
                kind: "scalar",
                T: 8
            }
        ], {
        localName: "BugBotEvent_BackgroundIntervalEnded"
    }), vi = Kt.makeMessageType("aiserver.v1.BugBotEvent.BackgroundIntervalInterrupted", ()=>[
            {
                no: 1,
                name: "reason",
                kind: "enum",
                T: Kt.getEnumType(_i)
            }
        ], {
        localName: "BugBotEvent_BackgroundIntervalInterrupted"
    }), qi = Kt.makeMessageType("aiserver.v1.BugBotEvent.BackgroundIntervalErrored", ()=>[
            {
                no: 1,
                name: "error_message",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "BugBotEvent_BackgroundIntervalErrored"
    }), Ri = Kt.makeMessageType("aiserver.v1.AiRequestEvent", ()=>[
            {
                no: 1,
                name: "request_type",
                kind: "enum",
                T: Kt.getEnumType(Pi)
            },
            {
                no: 2,
                name: "request_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "source",
                kind: "enum",
                T: Kt.getEnumType(Ti)
            }
        ]), Pi = Kt.makeEnum("aiserver.v1.AiRequestEvent.RequestType", [
        {
            no: 0,
            name: "REQUEST_TYPE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "REQUEST_TYPE_START",
            localName: "START"
        },
        {
            no: 2,
            name: "REQUEST_TYPE_END",
            localName: "END"
        }
    ]), Ti = Kt.makeEnum("aiserver.v1.AiRequestEvent.Source", [
        {
            no: 0,
            name: "SOURCE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "SOURCE_CHAT",
            localName: "CHAT"
        },
        {
            no: 2,
            name: "SOURCE_CMDK",
            localName: "CMDK"
        },
        {
            no: 3,
            name: "SOURCE_APPLY",
            localName: "APPLY"
        },
        {
            no: 4,
            name: "SOURCE_COMPOSER",
            localName: "COMPOSER"
        },
        {
            no: 5,
            name: "SOURCE_TASK",
            localName: "TASK"
        },
        {
            no: 6,
            name: "SOURCE_CODE_INTERPRETER",
            localName: "CODE_INTERPRETER"
        },
        {
            no: 7,
            name: "SOURCE_INTERPRETER_EXECUTION",
            localName: "INTERPRETER_EXECUTION"
        },
        {
            no: 8,
            name: "SOURCE_BUGBOT",
            localName: "BUGBOT"
        }
    ]), xi = Kt.makeMessageType("aiserver.v1.ModelOpenedEvent", ()=>[
            {
                no: 1,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            },
            {
                no: 2,
                name: "maybe_defined_point_in_time_model",
                kind: "message",
                T: Ns
            }
        ]), Ni = Kt.makeMessageType("aiserver.v1.BackgroundFilesEvent", ()=>[
            {
                no: 2,
                name: "files",
                kind: "message",
                T: Di,
                repeated: !0
            }
        ]), Di = Kt.makeMessageType("aiserver.v1.BackgroundFilesEvent.BackgroundFile", ()=>[
            {
                no: 1,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "contents",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "hash",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "full_path",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "BackgroundFilesEvent_BackgroundFile"
    }), Ui = Kt.makeMessageType("aiserver.v1.ScrollEvent", ()=>[
            {
                no: 1,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            },
            {
                no: 2,
                name: "visible_ranges",
                kind: "message",
                T: As,
                repeated: !0
            },
            {
                no: 3,
                name: "editor_id",
                kind: "scalar",
                T: 9
            }
        ]), Qi = Kt.makeMessageType("aiserver.v1.EditorCloseEvent", ()=>[
            {
                no: 1,
                name: "editor_id",
                kind: "scalar",
                T: 9
            }
        ]), Mi = Kt.makeMessageType("aiserver.v1.TabCloseEvent", ()=>[
            {
                no: 1,
                name: "point_in_time_model",
                kind: "message",
                T: Ns
            }
        ]), Oi = Kt.makeMessageType("aiserver.v1.ModelAddedEvent", ()=>[
            {
                no: 1,
                name: "point_in_time_model",
                kind: "message",
                T: Ns
            },
            {
                no: 2,
                name: "full_uri",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "model_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 4,
                name: "uri_scheme",
                kind: "scalar",
                T: 9
            },
            {
                no: 5,
                name: "is_too_large_for_syncing",
                kind: "scalar",
                T: 8
            },
            {
                no: 6,
                name: "is_too_large_for_tokenization",
                kind: "scalar",
                T: 8
            },
            {
                no: 7,
                name: "is_too_large_for_heap_operation",
                kind: "scalar",
                T: 8
            }
        ]), Fi = Kt.makeMessageType("aiserver.v1.AnythingQuickAccessItem", ()=>[
            {
                no: 1,
                name: "resource",
                kind: "message",
                T: Li,
                oneof: "item"
            },
            {
                no: 2,
                name: "separator",
                kind: "scalar",
                T: 9,
                oneof: "item"
            },
            {
                no: 3,
                name: "section",
                kind: "scalar",
                T: 9,
                oneof: "item"
            }
        ]), Li = Kt.makeMessageType("aiserver.v1.AnythingQuickAccessItem.Resource", ()=>[
            {
                no: 1,
                name: "model",
                kind: "message",
                T: Ds,
                opt: !0
            },
            {
                no: 2,
                name: "range",
                kind: "message",
                T: As,
                opt: !0
            },
            {
                no: 3,
                name: "uri",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ], {
        localName: "AnythingQuickAccessItem_Resource"
    }), $i = Kt.makeMessageType("aiserver.v1.AnythingQuickAccessSelectionEvent", ()=>[
            {
                no: 1,
                name: "query",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "items",
                kind: "message",
                T: Fi,
                repeated: !0
            },
            {
                no: 3,
                name: "selected_indices",
                kind: "scalar",
                T: 5,
                repeated: !0
            }
        ]), Gi = Kt.makeMessageType("aiserver.v1.LspSuggestionEvent", ()=>[
            {
                no: 1,
                name: "suggestions",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 2,
                name: "request_id",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "editor_id",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            }
        ]), Hi = Kt.makeMessageType("aiserver.v1.CppSessionEvent", ()=>[
            {
                no: 2,
                name: "accept_event",
                kind: "message",
                T: Js,
                oneof: "event"
            },
            {
                no: 3,
                name: "reject_event",
                kind: "message",
                T: bs,
                oneof: "event"
            },
            {
                no: 4,
                name: "manual_trigger_event",
                kind: "message",
                T: Us,
                oneof: "event"
            },
            {
                no: 6,
                name: "stopped_tracking_model_event",
                kind: "message",
                T: Qs,
                oneof: "event"
            },
            {
                no: 7,
                name: "suggest_event",
                kind: "message",
                T: Es,
                oneof: "event"
            },
            {
                no: 8,
                name: "linter_error_event",
                kind: "message",
                T: Os,
                oneof: "event"
            },
            {
                no: 9,
                name: "debounced_cursor_movement_event",
                kind: "message",
                T: Fs,
                oneof: "event"
            },
            {
                no: 10,
                name: "editor_changed_event",
                kind: "message",
                T: Ls,
                oneof: "event"
            },
            {
                no: 11,
                name: "copy_event",
                kind: "message",
                T: $s,
                oneof: "event"
            },
            {
                no: 13,
                name: "quick_action_event",
                kind: "message",
                T: Vs,
                oneof: "event"
            },
            {
                no: 14,
                name: "quick_action_fire_event",
                kind: "message",
                T: zs,
                oneof: "event"
            },
            {
                no: 15,
                name: "model_opened_event",
                kind: "message",
                T: xi,
                oneof: "event"
            },
            {
                no: 17,
                name: "cmd_k_event",
                kind: "message",
                T: Ws,
                oneof: "event"
            },
            {
                no: 18,
                name: "chat_event",
                kind: "message",
                T: si,
                oneof: "event"
            },
            {
                no: 19,
                name: "ai_event",
                kind: "message",
                T: Ri,
                oneof: "event"
            },
            {
                no: 21,
                name: "scroll_event",
                kind: "message",
                T: Ui,
                oneof: "event"
            },
            {
                no: 22,
                name: "editor_close_event",
                kind: "message",
                T: Qi,
                oneof: "event"
            },
            {
                no: 23,
                name: "tab_close_event",
                kind: "message",
                T: Mi,
                oneof: "event"
            },
            {
                no: 33,
                name: "model_added_event",
                kind: "message",
                T: Oi,
                oneof: "event"
            },
            {
                no: 26,
                name: "partial_accept_event",
                kind: "message",
                T: vs,
                oneof: "event"
            },
            {
                no: 27,
                name: "accept_cursor_prediction_event",
                kind: "message",
                T: Ts,
                oneof: "event"
            },
            {
                no: 28,
                name: "reject_cursor_prediction_event",
                kind: "message",
                T: xs,
                oneof: "event"
            },
            {
                no: 29,
                name: "suggest_cursor_prediction_event",
                kind: "message",
                T: Ps,
                oneof: "event"
            },
            {
                no: 30,
                name: "cpp_trigger_event",
                kind: "message",
                T: Is,
                oneof: "event"
            },
            {
                no: 31,
                name: "finished_cpp_generation_event",
                kind: "message",
                T: Cs,
                oneof: "event"
            },
            {
                no: 32,
                name: "bug_bot_event",
                kind: "message",
                T: Ai,
                oneof: "event"
            },
            {
                no: 34,
                name: "bug_bot_linter_event",
                kind: "message",
                T: ui,
                oneof: "event"
            },
            {
                no: 35,
                name: "anything_quick_access_selection_event",
                kind: "message",
                T: $i,
                oneof: "event"
            },
            {
                no: 36,
                name: "lsp_suggestion_event",
                kind: "message",
                T: Gi,
                oneof: "event"
            },
            {
                no: 37,
                name: "ntp_event",
                kind: "message",
                T: Ao,
                oneof: "event"
            },
            {
                no: 38,
                name: "repo_event",
                kind: "message",
                T: _o,
                oneof: "event"
            },
            {
                no: 39,
                name: "git_event",
                kind: "message",
                T: wo,
                oneof: "event"
            },
            {
                no: 40,
                name: "tool_call_event",
                kind: "message",
                T: bo,
                oneof: "event"
            },
            {
                no: 46,
                name: "before_ai_edit_event",
                kind: "message",
                T: Ki,
                oneof: "event"
            },
            {
                no: 47,
                name: "search_event",
                kind: "message",
                T: qo,
                oneof: "event"
            },
            {
                no: 48,
                name: "terminal_event",
                kind: "message",
                T: io,
                oneof: "event"
            },
            {
                no: 49,
                name: "worktree_event",
                kind: "message",
                T: Jo,
                oneof: "event"
            },
            {
                no: 50,
                name: "review_changes_opened_event",
                kind: "message",
                T: Co,
                oneof: "event"
            },
            {
                no: 51,
                name: "browser_event",
                kind: "message",
                T: lo,
                oneof: "event"
            },
            {
                no: 16,
                name: "background_files_event",
                kind: "message",
                T: Ni,
                oneof: "event"
            },
            {
                no: 5,
                name: "performance_now_timestamp",
                kind: "scalar",
                T: 1
            },
            {
                no: 25,
                name: "performance_time_origin",
                kind: "scalar",
                T: 1,
                opt: !0
            },
            {
                no: 41,
                name: "global_index",
                kind: "scalar",
                T: 3,
                opt: !0
            },
            {
                no: 42,
                name: "performance_now_flush_time",
                kind: "scalar",
                T: 1,
                opt: !0
            },
            {
                no: 43,
                name: "event_index",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 44,
                name: "flush_index",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 45,
                name: "global_index_v2",
                kind: "scalar",
                T: 5,
                opt: !0
            }
        ]), Ki = Kt.makeMessageType("aiserver.v1.BeforeAiEditEvent", ()=>[
            {
                no: 1,
                name: "point_in_time_model",
                kind: "message",
                T: Ds,
                oneof: "model"
            },
            {
                no: 5,
                name: "relative_workspace_path",
                kind: "scalar",
                T: 9,
                oneof: "model"
            },
            {
                no: 2,
                name: "tool_call_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "request_id",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "tool_name",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Vi = Kt.makeMessageType("aiserver.v1.CppAppendRequest", ()=>[
            {
                no: 1,
                name: "changes",
                kind: "scalar",
                T: 12
            }
        ]), zi = Kt.makeMessageType("aiserver.v1.EditHistoryAppendChangesRequest", ()=>[
            {
                no: 1,
                name: "session_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "model_uuid",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "starting_model_value",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 10,
                name: "starting_model_version",
                kind: "scalar",
                T: 5,
                opt: !0
            },
            {
                no: 5,
                name: "relative_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 14,
                name: "uri",
                kind: "scalar",
                T: 9
            },
            {
                no: 6,
                name: "client_version",
                kind: "scalar",
                T: 9
            },
            {
                no: 8,
                name: "client_commit",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "changes",
                kind: "message",
                T: ws,
                repeated: !0
            },
            {
                no: 9,
                name: "session_events",
                kind: "message",
                T: Hi,
                repeated: !0
            },
            {
                no: 11,
                name: "model_changes_may_be_out_of_order",
                kind: "scalar",
                T: 8
            },
            {
                no: 12,
                name: "privacy_mode_status",
                kind: "enum",
                T: Kt.getEnumType(Wi)
            },
            {
                no: 7,
                name: "events",
                kind: "message",
                T: to,
                repeated: !0
            },
            {
                no: 13,
                name: "time_origin",
                kind: "scalar",
                T: 2
            }
        ]), Wi = Kt.makeEnum("aiserver.v1.EditHistoryAppendChangesRequest.PrivacyModeStatus", [
        {
            no: 0,
            name: "PRIVACY_MODE_STATUS_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "PRIVACY_MODE_STATUS_PRIVACY_ENABLED",
            localName: "PRIVACY_ENABLED"
        },
        {
            no: 2,
            name: "PRIVACY_MODE_STATUS_IMPLICIT_NO_PRIVACY",
            localName: "IMPLICIT_NO_PRIVACY"
        },
        {
            no: 3,
            name: "PRIVACY_MODE_STATUS_EXPLICIT_NO_PRIVACY",
            localName: "EXPLICIT_NO_PRIVACY"
        }
    ]), Yi = Kt.makeMessageType("aiserver.v1.CppEditHistoryStatusRequest", []), ji = Kt.makeMessageType("aiserver.v1.BlockDiffPatch", ()=>[
            {
                no: 1,
                name: "start_model_window",
                kind: "message",
                T: Zi
            },
            {
                no: 3,
                name: "changes",
                kind: "message",
                T: Xi,
                repeated: !0
            },
            {
                no: 4,
                name: "relative_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 7,
                name: "model_uuid",
                kind: "scalar",
                T: 9
            },
            {
                no: 5,
                name: "start_from_change_index",
                kind: "scalar",
                T: 5
            }
        ]), Xi = Kt.makeMessageType("aiserver.v1.BlockDiffPatch.Change", ()=>[
            {
                no: 1,
                name: "text",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "range",
                kind: "message",
                T: As
            }
        ], {
        localName: "BlockDiffPatch_Change"
    }), Zi = Kt.makeMessageType("aiserver.v1.BlockDiffPatch.ModelWindow", ()=>[
            {
                no: 1,
                name: "lines",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 2,
                name: "start_line_number",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "end_line_number",
                kind: "scalar",
                T: 5
            }
        ], {
        localName: "BlockDiffPatch_ModelWindow"
    }), to = Kt.makeMessageType("aiserver.v1.CppHistoryAppendEvent", ()=>[
            {
                no: 1,
                name: "model_change",
                kind: "message",
                T: ws,
                oneof: "event"
            },
            {
                no: 2,
                name: "accept_event",
                kind: "message",
                T: ro,
                oneof: "event"
            },
            {
                no: 3,
                name: "reject_event",
                kind: "message",
                T: no,
                oneof: "event"
            },
            {
                no: 4,
                name: "manual_trigger_event",
                kind: "message",
                T: eo,
                oneof: "event"
            },
            {
                no: 10,
                name: "final_model_hash",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), eo = Kt.makeMessageType("aiserver.v1.CppManualTriggerEvent", ()=>[
            {
                no: 2,
                name: "position",
                kind: "message",
                T: hn
            }
        ]), ro = Kt.makeMessageType("aiserver.v1.CppAcceptEvent", ()=>[
            {
                no: 1,
                name: "cpp_suggestion",
                kind: "message",
                T: so
            }
        ]), no = Kt.makeMessageType("aiserver.v1.CppRejectEvent", ()=>[
            {
                no: 1,
                name: "cpp_suggestion",
                kind: "message",
                T: so
            }
        ]), so = Kt.makeMessageType("aiserver.v1.CppSuggestion", ()=>[
            {
                no: 1,
                name: "suggestion_text",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "range",
                kind: "message",
                T: As
            },
            {
                no: 5,
                name: "seen",
                kind: "scalar",
                T: 8
            },
            {
                no: 6,
                name: "editor_selection_before_peek",
                kind: "message",
                T: gn
            },
            {
                no: 7,
                name: "binding_id",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), io = Kt.makeMessageType("aiserver.v1.TerminalEvent", ()=>[
            {
                no: 1,
                name: "uri",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "create",
                kind: "message",
                T: oo,
                oneof: "event"
            },
            {
                no: 3,
                name: "exit",
                kind: "message",
                T: ao,
                oneof: "event"
            },
            {
                no: 4,
                name: "command_start",
                kind: "message",
                T: uo,
                oneof: "event"
            },
            {
                no: 5,
                name: "command_finish",
                kind: "message",
                T: co,
                oneof: "event"
            }
        ]), oo = Kt.makeMessageType("aiserver.v1.TerminalEvent.Create", ()=>[
            {
                no: 1,
                name: "is_remote",
                kind: "scalar",
                T: 8
            }
        ], {
        localName: "TerminalEvent_Create"
    }), ao = Kt.makeMessageType("aiserver.v1.TerminalEvent.Exit", ()=>[
            {
                no: 1,
                name: "exit_code",
                kind: "scalar",
                T: 5,
                opt: !0
            }
        ], {
        localName: "TerminalEvent_Exit"
    }), uo = Kt.makeMessageType("aiserver.v1.TerminalEvent.CommandStart", ()=>[
            {
                no: 1,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            },
            {
                no: 2,
                name: "cwd",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ], {
        localName: "TerminalEvent_CommandStart"
    }), co = Kt.makeMessageType("aiserver.v1.TerminalEvent.CommandFinish", ()=>[
            {
                no: 1,
                name: "point_in_time_model",
                kind: "message",
                T: Ds
            },
            {
                no: 2,
                name: "exit_code",
                kind: "scalar",
                T: 5,
                opt: !0
            }
        ], {
        localName: "TerminalEvent_CommandFinish"
    }), lo = Kt.makeMessageType("aiserver.v1.BrowserEvent", ()=>[
            {
                no: 1,
                name: "view_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "tab_created",
                kind: "message",
                T: mo,
                oneof: "event"
            },
            {
                no: 3,
                name: "tab_closed",
                kind: "message",
                T: fo,
                oneof: "event"
            },
            {
                no: 4,
                name: "navigation",
                kind: "message",
                T: po,
                oneof: "event"
            },
            {
                no: 5,
                name: "tool_action",
                kind: "message",
                T: ho,
                oneof: "event"
            }
        ]), mo = Kt.makeMessageType("aiserver.v1.BrowserEvent.TabCreated", [], {
        localName: "BrowserEvent_TabCreated"
    }), fo = Kt.makeMessageType("aiserver.v1.BrowserEvent.TabClosed", [], {
        localName: "BrowserEvent_TabClosed"
    }), po = Kt.makeMessageType("aiserver.v1.BrowserEvent.Navigation", ()=>[
            {
                no: 1,
                name: "url",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "title",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ], {
        localName: "BrowserEvent_Navigation"
    }), ho = Kt.makeMessageType("aiserver.v1.BrowserEvent.ToolAction", ()=>[
            {
                no: 1,
                name: "tool_name",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "args_json",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "success",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 4,
                name: "post_snapshot_yaml",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 5,
                name: "post_url",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 6,
                name: "post_title",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 7,
                name: "source",
                kind: "enum",
                T: Kt.getEnumType(go)
            }
        ], {
        localName: "BrowserEvent_ToolAction"
    }), go = Kt.makeEnum("aiserver.v1.BrowserEvent.ToolAction.Source", [
        {
            no: 0,
            name: "SOURCE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "SOURCE_MCP_TOOL",
            localName: "MCP_TOOL"
        },
        {
            no: 2,
            name: "SOURCE_MANUAL_USER",
            localName: "MANUAL_USER"
        }
    ]), Ao = Kt.makeMessageType("aiserver.v1.NtpEvent", ()=>[
            {
                no: 1,
                name: "originate_timestamp",
                kind: "scalar",
                T: 1
            },
            {
                no: 2,
                name: "receive_timestamp",
                kind: "scalar",
                T: 1
            },
            {
                no: 3,
                name: "transmit_timestamp",
                kind: "scalar",
                T: 1
            },
            {
                no: 4,
                name: "destination_timestamp",
                kind: "scalar",
                T: 1
            }
        ]), _o = Kt.makeMessageType("aiserver.v1.RepoEvent", ()=>[
            {
                no: 1,
                name: "repo_owner",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "repo_name",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "event_type",
                kind: "enum",
                T: Kt.getEnumType(yo)
            }
        ]), yo = Kt.makeEnum("aiserver.v1.RepoEvent.Type", [
        {
            no: 0,
            name: "TYPE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "TYPE_SYNCED",
            localName: "SYNCED"
        },
        {
            no: 2,
            name: "TYPE_LOADING",
            localName: "LOADING"
        },
        {
            no: 3,
            name: "TYPE_INDEXING_SETUP",
            localName: "INDEXING_SETUP"
        },
        {
            no: 4,
            name: "TYPE_INDEXING_INIT_FROM_SIMILAR_CODEBASE",
            localName: "INDEXING_INIT_FROM_SIMILAR_CODEBASE"
        },
        {
            no: 5,
            name: "TYPE_PAUSED",
            localName: "PAUSED"
        },
        {
            no: 6,
            name: "TYPE_INDEXING",
            localName: "INDEXING"
        },
        {
            no: 7,
            name: "TYPE_ERROR",
            localName: "ERROR"
        },
        {
            no: 8,
            name: "TYPE_NOT_AUTO_INDEXING",
            localName: "NOT_AUTO_INDEXING"
        },
        {
            no: 9,
            name: "TYPE_NOT_INDEXED",
            localName: "NOT_INDEXED"
        }
    ]), wo = Kt.makeMessageType("aiserver.v1.GitEvent", ()=>[
            {
                no: 1,
                name: "operation_type",
                kind: "enum",
                T: Kt.getEnumType(So)
            },
            {
                no: 2,
                name: "repository_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "operation_success",
                kind: "scalar",
                T: 8
            },
            {
                no: 4,
                name: "branch_name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 5,
                name: "error_message",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 6,
                name: "is_default_branch",
                kind: "scalar",
                T: 8,
                opt: !0
            },
            {
                no: 7,
                name: "default_branch_name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 8,
                name: "commit_hash",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 9,
                name: "previous_commit_hash",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 10,
                name: "remote_url",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), So = Kt.makeEnum("aiserver.v1.GitEvent.OperationType", [
        {
            no: 0,
            name: "OPERATION_TYPE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "OPERATION_TYPE_COMMIT",
            localName: "COMMIT"
        },
        {
            no: 2,
            name: "OPERATION_TYPE_CHECKOUT",
            localName: "CHECKOUT"
        },
        {
            no: 3,
            name: "OPERATION_TYPE_PULL",
            localName: "PULL"
        },
        {
            no: 4,
            name: "OPERATION_TYPE_FETCH",
            localName: "FETCH"
        },
        {
            no: 5,
            name: "OPERATION_TYPE_MERGE",
            localName: "MERGE"
        },
        {
            no: 6,
            name: "OPERATION_TYPE_REBASE",
            localName: "REBASE"
        },
        {
            no: 7,
            name: "OPERATION_TYPE_STASH",
            localName: "STASH"
        },
        {
            no: 8,
            name: "OPERATION_TYPE_BRANCH",
            localName: "BRANCH"
        },
        {
            no: 9,
            name: "OPERATION_TYPE_TAG",
            localName: "TAG"
        }
    ]), Jo = Kt.makeMessageType("aiserver.v1.WorktreeEvent", ()=>[
            {
                no: 1,
                name: "event_type",
                kind: "enum",
                T: Kt.getEnumType(Bo)
            },
            {
                no: 2,
                name: "model_name",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 3,
                name: "best_of_n_group_id",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 4,
                name: "all_worktree_paths",
                kind: "scalar",
                T: 9,
                repeated: !0
            },
            {
                no: 5,
                name: "applied_worktree_path",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 6,
                name: "worktree_composer_mappings",
                kind: "message",
                T: Eo,
                repeated: !0
            },
            {
                no: 7,
                name: "background_agent_composer_mappings",
                kind: "message",
                T: Io,
                repeated: !0
            },
            {
                no: 8,
                name: "applied_composer_id",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 9,
                name: "viewed_composer_id",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), Bo = Kt.makeEnum("aiserver.v1.WorktreeEvent.EventType", [
        {
            no: 0,
            name: "EVENT_TYPE_UNSPECIFIED",
            localName: "UNSPECIFIED"
        },
        {
            no: 1,
            name: "EVENT_TYPE_APPLY_TO_MAIN",
            localName: "APPLY_TO_MAIN"
        },
        {
            no: 2,
            name: "EVENT_TYPE_UNDO_APPLY",
            localName: "UNDO_APPLY"
        },
        {
            no: 3,
            name: "EVENT_TYPE_VIEW_SUBCOMPOSER",
            localName: "VIEW_SUBCOMPOSER"
        }
    ]), Eo = Kt.makeMessageType("aiserver.v1.WorktreeEvent.WorktreeComposerMapping", ()=>[
            {
                no: 1,
                name: "worktree_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "composer_id",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "WorktreeEvent_WorktreeComposerMapping"
    }), Io = Kt.makeMessageType("aiserver.v1.WorktreeEvent.BackgroundAgentComposerMapping", ()=>[
            {
                no: 1,
                name: "bc_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "composer_id",
                kind: "scalar",
                T: 9
            }
        ], {
        localName: "WorktreeEvent_BackgroundAgentComposerMapping"
    }), Co = Kt.makeMessageType("aiserver.v1.ReviewChangesOpenedEvent", ()=>[
            {
                no: 1,
                name: "composer_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "best_of_n_group_id",
                kind: "scalar",
                T: 9,
                opt: !0
            }
        ]), bo = Kt.makeMessageType("aiserver.v1.ToolCallEvent", ()=>[
            {
                no: 1,
                name: "tool_call_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "request_id",
                kind: "scalar",
                T: 9
            },
            {
                no: 3,
                name: "tool_name",
                kind: "scalar",
                T: 9
            }
        ]), ko = Kt.makeMessageType("aiserver.v1.SearchMatch", ()=>[
            {
                no: 1,
                name: "line_number",
                kind: "scalar",
                T: 5
            },
            {
                no: 2,
                name: "column",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "match_text",
                kind: "scalar",
                T: 9
            }
        ]), vo = Kt.makeMessageType("aiserver.v1.SearchResultFile", ()=>[
            {
                no: 1,
                name: "file_path",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "match_count",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "matches",
                kind: "message",
                T: ko,
                repeated: !0
            }
        ]), qo = Kt.makeMessageType("aiserver.v1.SearchEvent", ()=>[
            {
                no: 1,
                name: "query",
                kind: "scalar",
                T: 9
            },
            {
                no: 2,
                name: "result_count",
                kind: "scalar",
                T: 5
            },
            {
                no: 3,
                name: "file_count",
                kind: "scalar",
                T: 5
            },
            {
                no: 4,
                name: "is_regex",
                kind: "scalar",
                T: 8
            },
            {
                no: 5,
                name: "is_case_sensitive",
                kind: "scalar",
                T: 8
            },
            {
                no: 6,
                name: "is_whole_word",
                kind: "scalar",
                T: 8
            },
            {
                no: 7,
                name: "files_to_include",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 8,
                name: "files_to_exclude",
                kind: "scalar",
                T: 9,
                opt: !0
            },
            {
                no: 9,
                name: "duration_ms",
                kind: "scalar",
                T: 5
            },
            {
                no: 10,
                name: "results",
                kind: "message",
                T: vo,
                repeated: !0
            }
        ]);
    function Ro() {}
    function Po(t, e, r, n, s) {
        const i = [];
        let o;
        for(; e;)i.push(e), o = e.previousComponent, delete e.previousComponent, e = o;
        i.reverse();
        let a = 0, u = i.length, c = 0, l = 0;
        for(; a < u; a++){
            let e = i[a];
            if (e.removed) {
                if (e.value = t.join(n.slice(l, l + e.count)), l += e.count, a && i[a - 1].added) {
                    let t = i[a - 1];
                    i[a - 1] = i[a], i[a] = t;
                }
            } else {
                if (!e.added && s) {
                    let s = r.slice(c, c + e.count);
                    s = s.map(function(t, e) {
                        let r = n[l + e];
                        return r.length > t.length ? r : t;
                    }), e.value = t.join(s);
                } else e.value = t.join(r.slice(c, c + e.count));
                c += e.count, e.added || (l += e.count);
            }
        }
        let m = i[u - 1];
        return u > 1 && "string" == typeof m.value && (m.added || m.removed) && t.equals("", m.value) && (i[u - 2].value += m.value, i.pop()), i;
    }
    Ro.prototype = {
        diff (t, e, r = {}) {
            let n = r.callback;
            "function" == typeof r && (n = r, r = {}), this.options = r;
            let s = this;
            function i(t) {
                return n ? (setTimeout(function() {
                    n(void 0, t);
                }, 0), !0) : t;
            }
            t = this.castInput(t), e = this.castInput(e), t = this.removeEmpty(this.tokenize(t));
            let o = (e = this.removeEmpty(this.tokenize(e))).length, a = t.length, u = 1, c = o + a;
            r.maxEditLength && (c = Math.min(c, r.maxEditLength));
            const l = r.timeout ?? 1 / 0, m = Date.now() + l;
            let d = [
                {
                    oldPos: -1,
                    lastComponent: void 0
                }
            ], f = this.extractCommon(d[0], e, t, 0);
            if (d[0].oldPos + 1 >= a && f + 1 >= o) return i([
                {
                    value: this.join(e),
                    count: e.length
                }
            ]);
            let p = -1 / 0, h = 1 / 0;
            function g() {
                for(let r = Math.max(p, -u); r <= Math.min(h, u); r += 2){
                    let n, u = d[r - 1], c = d[r + 1];
                    u && (d[r - 1] = void 0);
                    let l = !1;
                    if (c) {
                        const t = c.oldPos - r;
                        l = c && 0 <= t && t < o;
                    }
                    let m = u && u.oldPos + 1 < a;
                    if (l || m) {
                        if (n = !m || l && u.oldPos + 1 < c.oldPos ? s.addToPath(c, !0, void 0, 0) : s.addToPath(u, void 0, !0, 1), f = s.extractCommon(n, e, t, r), n.oldPos + 1 >= a && f + 1 >= o) return i(Po(s, n.lastComponent, e, t, s.useLongestToken));
                        d[r] = n, n.oldPos + 1 >= a && (h = Math.min(h, r - 1)), f + 1 >= o && (p = Math.max(p, r + 1));
                    } else d[r] = void 0;
                }
                u++;
            }
            if (n) !function t() {
                setTimeout(function() {
                    if (u > c || Date.now() > m) return n();
                    g() || t();
                }, 0);
            }();
            else for(; u <= c && Date.now() <= m;){
                let t = g();
                if (t) return t;
            }
        },
        addToPath (t, e, r, n) {
            let s = t.lastComponent;
            return s && s.added === e && s.removed === r ? {
                oldPos: t.oldPos + n,
                lastComponent: {
                    count: s.count + 1,
                    added: e,
                    removed: r,
                    previousComponent: s.previousComponent
                }
            } : {
                oldPos: t.oldPos + n,
                lastComponent: {
                    count: 1,
                    added: e,
                    removed: r,
                    previousComponent: s
                }
            };
        },
        extractCommon (t, e, r, n) {
            let s = e.length, i = r.length, o = t.oldPos, a = o - n, u = 0;
            for(; a + 1 < s && o + 1 < i && this.equals(e[a + 1], r[o + 1]);)a++, o++, u++;
            return u && (t.lastComponent = {
                count: u,
                previousComponent: t.lastComponent
            }), t.oldPos = o, a;
        },
        equals (t, e) {
            return this.options.comparator ? this.options.comparator(t, e) : t === e || this.options.ignoreCase && t.toLowerCase() === e.toLowerCase();
        },
        removeEmpty (t) {
            let e = [];
            for(let r = 0; r < t.length; r++)t[r] && e.push(t[r]);
            return e;
        },
        castInput: (t)=>t,
        tokenize: (t)=>t.split(""),
        join: (t)=>t.join("")
    };
    const To = new Ro;
    function xo(t, e, r) {
        return To.diff(t, e, r);
    }
    To.tokenize = function(t) {
        this.options.stripTrailingCr && (t = t.replace(/\r\n/g, "\n"));
        let e = [], r = t.split(/(\n|\r\n)/);
        r[r.length - 1] || r.pop();
        for(let t = 0; t < r.length; t++){
            let n = r[t];
            t % 2 && !this.options.newlineIsToken ? e[e.length - 1] += n : (this.options.ignoreWhitespace && (n = n.trim()), e.push(n));
        }
        return e;
    };
    class No {
        constructor(t){
            this.cache = new Map, this.maxSize = t;
        }
        get size() {
            return this.cache.size;
        }
        get(t) {
            const e = this.cache.get(t);
            return e && (this.cache.delete(t), this.cache.set(t, e)), e;
        }
        set(t, e) {
            if (this.cache.has(t)) this.cache.delete(t);
            else if (this.cache.size >= this.maxSize) {
                const t = this.cache.keys().next().value;
                t && this.cache.delete(t);
            }
            this.cache.set(t, e);
        }
        delete(t) {
            this.cache.delete(t);
        }
    }
    class Do {
        constructor(){
            this.isLocked = !1, this.queue = [];
        }
        async acquire() {
            return new Promise((t)=>{
                this.isLocked ? this.queue.push(()=>{
                    this.isLocked = !0, t(this.release.bind(this));
                }) : (this.isLocked = !0, t(this.release.bind(this)));
            });
        }
        release() {
            this.isLocked = !1;
            const t = this.queue.shift();
            t && t();
        }
    }
    class Uo {
        constructor(t = 100){
            this.locks = new No(t);
        }
        async acquireLock(t) {
            let e = this.locks.get(t);
            return e || (e = new Do, this.locks.set(t, e)), e.acquire();
        }
    }
    const Qo = /^[a-zA-Z\u{C0}-\u{FF}\u{D8}-\u{F6}\u{F8}-\u{2C6}\u{2C8}-\u{2D7}\u{2DE}-\u{2FF}\u{1E00}-\u{1EFF}]+$/u, Mo = /\S/, Oo = new Ro;
    Oo.equals = function(t, e) {
        return this.options.ignoreCase && (t = t.toLowerCase(), e = e.toLowerCase()), t === e || this.options.ignoreWhitespace && !Mo.test(t) && !Mo.test(e);
    }, Oo.tokenize = function(t) {
        let e = t.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/);
        for(let t = 0; t < e.length - 1; t++)!e[t + 1] && e[t + 2] && Qo.test(e[t]) && Qo.test(e[t + 2]) && (e[t] += e[t + 2], e.splice(t + 1, 2), t--);
        return e;
    };
    function Fo(t, e, r) {
        try {
            const { range: n, text: s } = e;
            if (n.startLineNumber > t.length + 1 || n.startLineNumber === t.length + 1 && 1 !== n.startColumn) throw new Error("Start of the range is outside the file.");
            const { startLineNumber: i, startColumn: o, endLineNumber: a, endColumn: u } = n, c = (t[i - 1] ?? "").substring(0, o - 1), l = t[a - 1] ?? "", m = 1 === u ? l : l.substring(u - 1);
            !0 === r?.noNeedToMakeSureLinesAreLines ? t.splice(i - 1, a - i + 1, c + s + m) : t.splice(i - 1, a - i + 1, ...(c + s + m).split("\n"));
        } catch (t) {
            throw t;
        }
    }
    function Lo(t, e) {
        const r = t.split("\n");
        return Fo(r, e, {
            noNeedToMakeSureLinesAreLines: !0
        }), r.join("\n");
    }
    const $o = "cursorhashversionC7wtBsDmlFaPg4ToTvIlm";
    function Go(t, e) {
        if (void 0 === e || 0 === e) return `${Ho(t, 0)}`;
        if (1 === e) {
            const e = `${$o}:1:`;
            return t.length > 1e4 ? `${e}${Ho(t, 0)}` : `${e}${t}`;
        }
        throw new Error("Unsupported hash version");
    }
    function Ho(t, e) {
        e = Ko(149417, e);
        for(let r = 0, n = t.length; r < n; r++)e = Ko(t.charCodeAt(r), e);
        return e;
    }
    function Ko(t, e) {
        return (e << 5) - e + t | 0;
    }
    function Vo(t) {
        return {
            startLineNumber: t.range.startLineNumber,
            endLineNumberExclusive: t.range.endLineNumber + 1
        };
    }
    function zo(t) {
        return {
            startLineNumber: t.range.startLineNumber,
            endLineNumberExclusive: t.range.startLineNumber + t.text.split("\n").length
        };
    }
    function Wo(t, e, r) {
        const n = (t)=>t > e.startLineNumber ? t > e.endLineNumberExclusive ? r.endLineNumberExclusive - e.endLineNumberExclusive : r.endLineNumberExclusive - t : 0;
        return {
            startLineNumber: Math.min(r.startLineNumber, t.startLineNumber + n(t.startLineNumber)),
            endLineNumberExclusive: Math.max(r.endLineNumberExclusive, t.endLineNumberExclusive + n(t.endLineNumberExclusive))
        };
    }
    function Yo(t, e) {
        const r = function(t, e) {
            const r = Math.max(t.startLineNumber, e.startLineNumber);
            let n = Math.min(t.endLineNumberExclusive, e.endLineNumberExclusive);
            r > n && (n = r);
            return {
                startLineNumber: r,
                endLineNumberExclusive: n
            };
        }(t, e);
        return r.endLineNumberExclusive - r.startLineNumber;
    }
    class jo {
        constructor(t){
            this.diffHistorySizeLimit = 90, this.patchStringSizeLimit = 40, this.whitespacePatchStringSizeLimit = 5, this.keepRecentModelHashCount = 20, this.keepRecentlyRejectedEditModelHashCount = 5, this.timeoutCount = 0, this.useFullFileDiffsTilUnmerged = !1, this.includeUnchangedLines = !0, this.previousCompiledGlobalDiffTrajectories = [], this.latestCompiledGlobalDiffTrajectoriesVersion = void 0, this.version = void 0, this._diffStateByIdentifier = {}, this.latestRangeByIdentifier = {}, this.processModelChangeLoopRunning = !1, this.changesToProcessArgs = [], this.MAX_LOOP_DURATION_MS = 5e3, this.diffHistorySizeLimit = t.diffHistorySizeLimit ?? this.diffHistorySizeLimit, this.patchStringSizeLimit = t.patchStringSizeLimit ?? this.patchStringSizeLimit, this.recentModelHashes = t.skipModelHash ? void 0 : {}, this.recentlyRejectedEditModelHashes = t.skipModelHash ? void 0 : {}, this.saveOneBeforeLastModelValue = t.saveOneBeforeLastModelValue ?? !1, this.keepWhitespaceOnlyChanges = t.keepWhitespaceOnlyChanges ?? !1, this.alwaysUseFullFileDiff = t.alwaysUseFullFileDiff ?? !1, this.gitDiffExtraContextRadius = t.gitDiffExtraContextRadius ?? 0, this.mergingBehavior = t.mergingBehavior, this.changeIndex = 0, this.includeUnchangedLines = t.includeUnchangedLines ?? !0, this.modelLockManager = new Uo(10);
        }
        async holdFileLock(t) {
            return this.modelLockManager.acquireLock(t);
        }
        initModel(t, e, r) {
            void 0 !== this.recentModelHashes && (this.recentModelHashes[t] ??= [], this.recentModelHashes[t].push({
                modelHash: Go(e, 1),
                seenAt: Date.now()
            }), this.recentModelHashes[t] = this.recentModelHashes[t].slice(-this.keepRecentModelHashCount)), this._diffStateByIdentifier[t] = {
                oneBeforeLastModel: this.saveOneBeforeLastModelValue ? e : void 0,
                oldestModel: e,
                newModel: e,
                diffHistory: [],
                lastEditTime: ++this.changeIndex,
                modelVersion: r
            };
        }
        getOneBeforeLastModelValue(t) {
            return this._diffStateByIdentifier[t]?.oneBeforeLastModel;
        }
        getModelValue(t) {
            return this._diffStateByIdentifier[t]?.newModel;
        }
        getModelVersion(t) {
            return this._diffStateByIdentifier[t]?.modelVersion;
        }
        updateModelVersion(t, e) {
            const r = this._diffStateByIdentifier[t];
            void 0 !== r && (r.modelVersion = e);
        }
        getTimeoutCount() {
            return this.timeoutCount;
        }
        filterPatch(t) {
            const e = t?.string.split("\n").length ?? 0;
            return void 0 !== t && "" !== t.string.trim() && e <= this.patchStringSizeLimit && (!t.isWhitespaceChange || e <= this.whitespacePatchStringSizeLimit);
        }
        async compileGlobalDiffTrajectories(t, e) {
            if (void 0 !== this.version && this.latestCompiledGlobalDiffTrajectoriesVersion === this.version) return this.previousCompiledGlobalDiffTrajectories;
            const r = t ?? {};
            let n = [];
            for(const t in this._diffStateByIdentifier){
                const r = this._diffStateByIdentifier[t].diffHistory;
                n = n.concat(r.map((e)=>({
                        ...e,
                        modelIdentifier: t
                    })));
                const s = this._diffStateByIdentifier[t].addedRangeInNewModelOneIndexed, i = this._diffStateByIdentifier[t].lastEditTime;
                if (void 0 !== s && void 0 !== i) try {
                    const r = await this.getPatchOfActiveDiff(t, e, !0);
                    n.push({
                        modelIdentifier: t,
                        lastEditTime: i,
                        patch: r
                    });
                } catch (e) {
                    if (this.updateOldestModel(t, this._diffStateByIdentifier[t].newModel), !(e instanceof Error && e.message.toLowerCase().includes("timeout"))) throw e;
                    this.timeoutCount++;
                }
            }
            n.sort((t, e)=>t.lastEditTime - e.lastEditTime);
            const s = n.filter((t)=>this.filterPatch(t.patch)).slice(-this.diffHistorySizeLimit).map((t, e)=>new ps({
                    fileName: r[t.modelIdentifier] ?? t.modelIdentifier,
                    diffHistory: [
                        t.patch.string
                    ],
                    diffHistoryTimestamps: []
                })).reduce((t, e)=>{
                if (0 === t.length) return [
                    e
                ];
                const r = t[t.length - 1];
                return r.fileName === e.fileName ? (r.diffHistory.push(...e.diffHistory), r.diffHistoryTimestamps.push(...e.diffHistoryTimestamps)) : t.push(e), t;
            }, []);
            return this.latestCompiledGlobalDiffTrajectoriesVersion = this.version, this.previousCompiledGlobalDiffTrajectories = s, s;
        }
        isRevertingToRecentModel(t, e) {
            if (null == this.recentModelHashes) throw new Error("Model history tracking is disabled");
            const r = Go(e, 1), n = this.recentModelHashes[t] ?? [], s = Date.now() - 12e4;
            return n.some((t)=>t.modelHash === r && t.seenAt > s);
        }
        isSuggestingRecentlyRejectedEdit(t, e, r, n) {
            if (null == this.recentlyRejectedEditModelHashes) throw new Error("Model history tracking is disabled");
            const s = this.recentlyRejectedEditModelHashes[t] ?? [], i = Go(e, 1), o = s.find((t)=>t.modelHash === i);
            return void 0 !== o?.numberOfTimesSoftRejected && o.numberOfTimesSoftRejected >= r || void 0 !== o?.numberOfTimesHardRejected && o.numberOfTimesHardRejected >= n;
        }
        recordRejectedEdit(t, e, r) {
            if (null == this.recentlyRejectedEditModelHashes) return;
            this.recentlyRejectedEditModelHashes[t] ??= [];
            const n = Go(e, 1), s = this.recentlyRejectedEditModelHashes[t].find((t)=>t.modelHash === n);
            s ? (s.numberOfTimesSoftRejected++, r || s.numberOfTimesHardRejected++) : this.recentlyRejectedEditModelHashes[t].push({
                modelHash: n,
                numberOfTimesSoftRejected: 1,
                numberOfTimesHardRejected: r ? 0 : 1
            }), this.recentlyRejectedEditModelHashes[t].length > this.keepRecentlyRejectedEditModelHashCount && this.recentlyRejectedEditModelHashes[t].shift();
        }
        async processModelChangesLoopWithTimeout() {
            if (this.processModelChangeLoopRunning) return;
            let t;
            const e = new Promise((e)=>{
                t = setTimeout(()=>{
                    console.warn("processModelChangesLoop timed out"), e();
                }, this.MAX_LOOP_DURATION_MS);
            });
            try {
                this.processModelChangeLoopRunning = !0, await Promise.race([
                    this.processModelChangesLoop().then(()=>clearTimeout(t)),
                    e
                ]);
            } catch (t) {
                console.error("Error in processModelChangesLoop:", t);
            } finally{
                this.processModelChangeLoopRunning = !1;
            }
        }
        async processModelChangesLoop() {
            for(; this.changesToProcessArgs.length > 0;){
                const t = this.changesToProcessArgs.shift();
                if (void 0 === t) break;
                const { useFullFileDiffForThisCall: e, uniqueModelIdentifier: r, newModelValue: n, addedRangeInNewModelOneIndexed: s, deletedRangeInOldModelOneIndexed: i } = t;
                if (e && (this.useFullFileDiffsTilUnmerged = !0), void 0 === this._diffStateByIdentifier[r]) return void this.initModel(r, n);
                const { addedRangeInNewModelOneIndexed: o, newModel: a, lastEditTime: u } = this._diffStateByIdentifier[r];
                if (void 0 === o || void 0 === u) e || (this.useFullFileDiffsTilUnmerged = !1), this._diffStateByIdentifier[r].addedRangeInNewModelOneIndexed = s, this._diffStateByIdentifier[r].rangesOfAccumulatedChanges = {
                    currentRange: s,
                    pastRange: i
                };
                else {
                    const t = this.shouldMerge({
                        lastDiffRange: o,
                        replacedChangeRange: i
                    }), n = this._diffStateByIdentifier[r].rangesOfAccumulatedChanges;
                    if (t && this.newestModelIdentifier() === r) {
                        const { startLineNumber: t, endLineNumberExclusive: e } = Wo(o, i, s);
                        if (this._diffStateByIdentifier[r].addedRangeInNewModelOneIndexed = {
                            startLineNumber: t,
                            endLineNumberExclusive: e
                        }, void 0 === n) ;
                        else {
                            const t = Xo({
                                firstAddedRange: n.currentRange,
                                firstRemovedRange: n.pastRange,
                                secondAddedRange: s,
                                secondRemovedRange: i
                            });
                            this._diffStateByIdentifier[r].rangesOfAccumulatedChanges = t;
                        }
                    } else {
                        try {
                            const t = await this.getPatchOfActiveDiff(r, e, !1);
                            this._diffStateByIdentifier[r].diffHistory.push({
                                patch: t,
                                lastEditTime: u
                            }), this.cleanDiffTrajectories();
                        } catch (t) {
                            if (!(t instanceof Error && t.message.toLowerCase().includes("timeout"))) throw t;
                            this.timeoutCount++;
                        }
                        this.updateOldestModel(r, a), this._diffStateByIdentifier[r].addedRangeInNewModelOneIndexed = s, e || (this.useFullFileDiffsTilUnmerged = !1), this._diffStateByIdentifier[r].rangesOfAccumulatedChanges = {
                            currentRange: s,
                            pastRange: i
                        };
                    }
                }
                this._diffStateByIdentifier[r].lastEditTime = ++this.changeIndex, this.updateNewModel(r, n), t.callback && t.callback();
            }
        }
        async processModelChange(t) {
            this.changesToProcessArgs.push(t), void 0 !== this.recentModelHashes && (this.recentModelHashes[t.uniqueModelIdentifier] ??= [], this.recentModelHashes[t.uniqueModelIdentifier].push({
                modelHash: Go(t.newModelValue, 1),
                seenAt: Date.now()
            }), this.recentModelHashes[t.uniqueModelIdentifier] = this.recentModelHashes[t.uniqueModelIdentifier].slice(-this.keepRecentModelHashCount)), await this.processModelChangesLoopWithTimeout();
        }
        removeOldestDiffTrajectory() {
            let t = 1 / 0, e = null;
            for(const r in this._diffStateByIdentifier){
                const n = this._diffStateByIdentifier[r].diffHistory;
                if (n.length > 0) {
                    const s = n[0].lastEditTime;
                    s < t && (t = s, e = r);
                }
            }
            null !== e && this._diffStateByIdentifier[e].diffHistory.shift();
        }
        copyAtPointInTime(t) {
            const e = new jo({
                diffHistorySizeLimit: this.diffHistorySizeLimit,
                patchStringSizeLimit: this.patchStringSizeLimit,
                gitDiffExtraContextRadius: this.gitDiffExtraContextRadius
            });
            for(const r in this._diffStateByIdentifier)if (t) {
                const t = this._diffStateByIdentifier[r].newModel;
                e.initModel(r, t);
            } else {
                const t = this._diffStateByIdentifier[r], n = {
                    ...t,
                    oneBeforeLastModel: t.oneBeforeLastModel ? t.oneBeforeLastModel : void 0,
                    newModel: t.newModel,
                    oldestModel: t.oldestModel,
                    rangesOfAccumulatedChanges: t.rangesOfAccumulatedChanges ? {
                        currentRange: t.rangesOfAccumulatedChanges.currentRange,
                        pastRange: t.rangesOfAccumulatedChanges.pastRange
                    } : void 0,
                    addedRangeInNewModelOneIndexed: t.addedRangeInNewModelOneIndexed ? {
                        ...t.addedRangeInNewModelOneIndexed
                    } : void 0,
                    cachedPatchString: t.cachedPatchString ? {
                        ...t.cachedPatchString
                    } : void 0,
                    lastEditTime: t.lastEditTime,
                    modelVersion: t.modelVersion,
                    diffHistory: t.diffHistory.map((t)=>({
                            ...t
                        }))
                };
                e._diffStateByIdentifier[r] = n, e.latestRangeByIdentifier[r] = this.latestRangeByIdentifier[r];
            }
            return e;
        }
        shouldMerge({ lastDiffRange: t, replacedChangeRange: e }) {
            const r = e.startLineNumber === t.startLineNumber && e.endLineNumberExclusive === t.endLineNumberExclusive, n = e.endLineNumberExclusive - e.startLineNumber === 1, s = this.mergingBehavior;
            if (void 0 === s) return n && t.startLineNumber === e.endLineNumberExclusive || r;
            if ("whitespace compatible" === s.type) {
                return r || n && t.startLineNumber === e.endLineNumberExclusive || n && t.endLineNumberExclusive == e.startLineNumber || e.endLineNumberExclusive - e.startLineNumber <= 2 && t.endLineNumberExclusive == e.endLineNumberExclusive;
            }
            throw new Error(`Unknown merging behavior: ${s.type}`);
        }
        cleanDiffTrajectories() {
            let t = 0;
            for(const e in this._diffStateByIdentifier)this._diffStateByIdentifier[e].diffHistory = this._diffStateByIdentifier[e].diffHistory.filter((t)=>this.filterPatch(t.patch)), t += this._diffStateByIdentifier[e].diffHistory.length;
            for(let e = t; e > this.diffHistorySizeLimit; e--)this.removeOldestDiffTrajectory();
        }
        async getPatchOfActiveDiff(t, e, r) {
            const { oldestModel: n, newModel: s, cachedPatchString: i, rangesOfAccumulatedChanges: o } = this._diffStateByIdentifier[t];
            if (void 0 !== i) return i;
            const a = this.alwaysUseFullFileDiff || e || this.useFullFileDiffsTilUnmerged ? void 0 : o, u = await async function({ past: t, current: e, radius: r, keepWhitespaceChanges: n, rangesOfPastAndCurrent: s, includeUnchangedLines: i = !0, timeout: o = 2e3 }) {
                const { past: a, current: u, currentOffsetLineNumber: c, pastOffsetLineNumber: l } = function({ origPast: t, origCurrent: e, rangesOfPastAndCurrent: r }) {
                    if (void 0 === r) return {
                        past: t,
                        current: e,
                        currentOffsetLineNumber: 0,
                        pastOffsetLineNumber: 0
                    };
                    const { pastRange: n, currentRange: s } = r, i = {
                        ...s
                    }, o = {
                        ...n
                    }, a = e.split("\n"), u = t.split("\n");
                    i.endLineNumberExclusive < a.length && o.endLineNumberExclusive < u.length && (i.endLineNumberExclusive += 1, o.endLineNumberExclusive += 1);
                    i.startLineNumber > 1 && o.startLineNumber > 1 && (i.startLineNumber -= 1, o.startLineNumber -= 1);
                    const c = 25, l = Math.max(Math.min(i.startLineNumber - 1, o.startLineNumber - 1, c), 0), m = Math.max(Math.min(a.length + 1 - i.endLineNumberExclusive, u.length + 1 - o.endLineNumberExclusive, c), 0);
                    i.startLineNumber -= l, o.startLineNumber -= l, i.endLineNumberExclusive += m, o.endLineNumberExclusive += m;
                    const d = a.slice(i.startLineNumber - 1, i.endLineNumberExclusive - 1).join("\n");
                    return {
                        past: u.slice(o.startLineNumber - 1, o.endLineNumberExclusive - 1).join("\n"),
                        current: d,
                        currentOffsetLineNumber: i.startLineNumber - 1,
                        pastOffsetLineNumber: o.startLineNumber - 1
                    };
                }({
                    origPast: t,
                    origCurrent: e,
                    rangesOfPastAndCurrent: s
                });
                let m;
                m = a.split("\n").length > 100 || u.split("\n").length > 100 ? await new Promise((t, e)=>{
                    xo(a, u, {
                        callback: (r, n)=>{
                            void 0 !== n ? t(n) : e(new Error("Timeout exceeded"));
                        },
                        timeout: o
                    });
                }) : xo(a, u);
                let d = 1 / 0, f = -1 / 0, p = -1 / 0, h = 1;
                m.forEach((t)=>{
                    !0 !== t.added && !0 !== t.removed || (d = Math.min(d, h), "" !== t.value.trim() && (f = Math.max(f, h + t.count - 1)), p = Math.max(p, h + t.count - 1)), h += t.count;
                }), d = Math.max(0, d - r), f === -1 / 0 && (f = p);
                if (f += r, d === 1 / 0 || f === -1 / 0) return;
                const g = a.replace(/\s/g, ""), A = u.replace(/\s/g, ""), _ = g === A;
                if (_ && !0 !== n) return;
                let y = "", w = d - 1, S = d - 1;
                for(let t = d; t <= f; t++){
                    h = 1;
                    const e = m.find((e, r)=>{
                        const n = h + e.count, s = h <= t && t < n;
                        return h = n, s;
                    });
                    if (void 0 !== e) {
                        const r = t - (h - e.count);
                        !0 === e.added ? (S++, y += `${(S + c).toString().padStart(0, " ")}+|` + e.value.split("\n")[r] + "\n") : !0 === e.removed ? (w++, y += `${(w + l).toString().padStart(0, " ")}-|` + e.value.split("\n")[r] + "\n") : i ? (w++, S++, y += `${(S + c).toString().padStart(0, " ")} |` + e.value.split("\n")[r] + "\n") : (w++, S++);
                    }
                }
                return {
                    string: y,
                    isWhitespaceChange: _
                };
            }({
                past: n,
                current: s,
                radius: this.gitDiffExtraContextRadius,
                keepWhitespaceChanges: this.keepWhitespaceOnlyChanges && r,
                rangesOfPastAndCurrent: a,
                includeUnchangedLines: this.includeUnchangedLines
            });
            return !1 !== r && !1 !== u?.isWhitespaceChange || (this._diffStateByIdentifier[t].cachedPatchString = u), u;
        }
        newestModelIdentifier() {
            let t = null, e = -1 / 0;
            for(const r in this._diffStateByIdentifier){
                const n = this._diffStateByIdentifier[r].lastEditTime;
                n > e && (t = r, e = n);
            }
            return t;
        }
        updateNewModel(t, e) {
            this.saveOneBeforeLastModelValue && (this._diffStateByIdentifier[t].oneBeforeLastModel = this._diffStateByIdentifier[t].newModel), this._diffStateByIdentifier[t].newModel = e, delete this._diffStateByIdentifier[t].cachedPatchString;
        }
        updateOldestModel(t, e) {
            this._diffStateByIdentifier[t].oldestModel = e, delete this._diffStateByIdentifier[t].cachedPatchString;
        }
        setKeepWhitespaceOnlyChanges(t) {
            this.keepWhitespaceOnlyChanges = t;
        }
        setIncludeUnchangedLines(t) {
            this.includeUnchangedLines = t;
        }
        setMergingBehavior(t) {
            this.mergingBehavior = t;
        }
        compareEditTimes(t) {
            if (t.firstModelIdentifier === t.secondModelIdentifier) return 0;
            const e = this._diffStateByIdentifier[t.firstModelIdentifier]?.lastEditTime, r = this._diffStateByIdentifier[t.secondModelIdentifier]?.lastEditTime;
            if (void 0 === e || void 0 === r) throw new Error(`Edit time is undefined for model identifier: ${t.firstModelIdentifier} or ${t.secondModelIdentifier}`);
            return e - r;
        }
    }
    function Xo({ firstAddedRange: t, secondAddedRange: e, firstRemovedRange: r, secondRemovedRange: n }) {
        if (r.startLineNumber !== t.startLineNumber) throw new Error("firstRemovedRange.startLineNumber !== firstAddedRange.startLineNumber");
        if (n.startLineNumber !== e.startLineNumber) throw new Error("secondRemovedRange.startLineNumber !== secondAddedRange.startLineNumber");
        const s = Math.min(r.startLineNumber, n.startLineNumber), i = Math.max(0, n.endLineNumberExclusive - t.endLineNumberExclusive), o = {
            startLineNumber: s,
            endLineNumberExclusive: r.endLineNumberExclusive + i
        }, a = s, u = Yo(n, {
            ...t,
            startLineNumber: 1
        }), c = Yo(e, {
            ...t,
            startLineNumber: 1
        }) - u;
        return {
            pastRange: o,
            currentRange: {
                startLineNumber: a,
                endLineNumberExclusive: Math.max(t.endLineNumberExclusive, e.endLineNumberExclusive) + c
            }
        };
    }
    Symbol.for("cursor.agentStreamMetadata");
    var Zo = ((t)=>(t.GetCachedServerConfig = "aiServerConfigService.getCachedServerConfig", t))(Zo || {}), ta = ((t)=>(t.Ack = "editHistoryDiffFormatter.ack", t.GetModelValueInRanges = "editHistoryDiffFormatter.getModelValueInRanges", t.GetModelValue = "editHistoryDiffFormatter.getModelValue", t.FormatDiffHistory = "editHistoryDiffFormatter.formatDiffHistory", t.InitModel = "editHistoryDiffFormatter.initModel", t.CompileGlobalDiffTrajectories = "editHistoryDiffFormatter.compileGlobalDiffTrajectories", t.IsRevertingToRecentModel = "editHistoryDiffFormatter.isRevertingToRecentModel", t.IsSuggestingRecentlyRejectedEdit = "editHistoryDiffFormatter.isSuggestingRecentlyRejectedEdit", t.RecordRejectedEdit = "editHistoryDiffFormatter.recordRejectedEdit", t.ProcessModelChangeLoop = "editHistoryDiffFormatter.processModelChangeLoop", t.SetEnableCppWhitespaceDiffHistoryMode = "editHistoryDiffFormatter.setEnableCppWhitespaceDiffHistoryMode", t.SetEnableCppIncludeUnchangedLines = "editHistoryDiffFormatter.setEnableCppIncludeUnchangedLines", t))(ta || {}), ea = ((t)=>(t.GetFileSyncUpdates = "fileSync.getFileSyncUpdates", t.ShouldRelyOnFileSyncForFile = "fileSync.shouldRelyOnFileSyncForFile", t.GetFileSyncEncryptionHeader = "fileSync.getFileSyncEncryptionHeader", t.ResetSequentialSuccessfulSync = "fileSync.resetSequentialSuccessfulSync", t.TriggerFileSync = "fileSync.triggerFileSync", t))(ea || {}), ra = ((t)=>(t.UploadToSignedUrl = "attachedMedia.uploadToSignedUrl", t))(ra || {}), na = ((t)=>(t.DNSLookup = "connectDebug.dnsLookup", t.InspectTLSInfo = "connectDebug.inspectTLSInfo", t.Http2Ping = "connectDebug.http2Ping", t))(na || {}), sa = ((t)=>(t.FREE = "free", t.PRO = "pro", t.PRO_PLUS = "pro_plus", t.ENTERPRISE = "enterprise", t.FREE_TRIAL = "free_trial", t.ULTRA = "ultra", t.PRO_STUDENT = "pro_student", t.EXPRESS = "express", t.PREMIUM = "premium", t.PLUS = "plus", t.SUPER = "super", t.UNIFIED_ULTRA = "unified_ultra", t))(sa || {});
    new Set(Object.values(sa));
    function ia(t, e, r) {
        if (void 0 !== e) {
            const t = [
                ".env",
                ".env.local",
                ".env.development",
                ".env.production",
                ".env.test",
                ".env.testing",
                ".env.development.local",
                ".env.production.local",
                ".env.test.local",
                ".env.testing.local"
            ];
            if ("plaintext" === e.languageId && t.some((t)=>e.fsPath.endsWith(t))) return !1;
            if (function(t, e) {
                if (Array.isArray(e) && e.includes(t)) return !0;
                return !1;
            }(e.languageId, r)) return !1;
        }
        return !0 === t;
    }
    const oa = "cursor.general.disableHttp2", aa = "cursor.general.disableHttp1SSE";
    async function ua(t, e, r, n, s) {
        const i = await e.holdFileLock(t);
        try {
            const i = o.Uri.parse(t), a = o.workspace.asRelativePath(i);
            let u, c = await o.workspace.openTextDocument(i).then((t)=>t.getText());
            if ("vscode-notebook-cell" === i.scheme) {
                const t = o.workspace.notebookDocuments.find((t)=>t.getCells().find((t)=>t.document.uri.toString() === i.toString()));
                if (!t) return;
                const e = t.getCells(), s = e.find((t)=>t.document.uri.toString() === i.toString());
                if (!s) return;
                const a = e.map((t)=>t.document.getText()), l = e.filter((t)=>t.index < s.index).map((t)=>t.document.getText());
                if (void 0 === l) return;
                if (!a || !l) return;
                c = a.join(n);
                const m = l.join(n).split(n).length;
                u = r.map((t)=>({
                        ...t,
                        range: {
                            startLineNumber: t.range.startLineNumber + m,
                            startColumn: t.range.startColumn,
                            endLineNumber: t.range.endLineNumber + m,
                            endColumn: t.range.endColumn
                        }
                    }));
            }
            const l = e.getModelValue(a), m = e.getModelVersion(a);
            if (void 0 === l) return e.initModel(a, c, s), void ("cursor dev" === o.env.appName.toLowerCase() && o.window.showErrorMessage("Cursor Dev: Failed to get previous model value"));
            let d, f = u ?? r;
            f.sort((t, e)=>e.range.startLineNumber === t.range.startLineNumber ? e.range.startColumn - t.range.startColumn : e.range.startLineNumber - t.range.startLineNumber);
            try {
                let t = l;
                for (const e of f)t = Lo(t, e);
                d = t !== c;
            } catch (t) {
                console.error(t), d = !0;
            }
            void 0 !== m && m + 1 === s || (d = !0), e.updateModelVersion(a, s), 1 === f.length ? await async function(t, e) {
                await t.processModelChange({
                    uniqueModelIdentifier: e.uniqueModelIdentifier,
                    newModelValue: e.newModelValue,
                    deletedRangeInOldModelOneIndexed: Vo(e.change),
                    addedRangeInNewModelOneIndexed: zo(e.change),
                    useFullFileDiffForThisCall: e.useFullFileDiffForThisCall
                });
            }(e, {
                newModelValue: c,
                uniqueModelIdentifier: a,
                useFullFileDiffForThisCall: d,
                change: f[0]
            }) : await async function(t, e) {
                let r = e.previousModelValue;
                if (e.useFullFileDiffForThisCall) {
                    const n = await async function({ past: t, current: e, diffingProvider: r }) {
                        const n = await new Promise((n, s)=>{
                            void 0 !== r ? r.diffLines(e, t, void 0, void 0).then((t)=>n(t)) : xo(t, e, {
                                timeout: 2e3,
                                callback: (t, e)=>{
                                    void 0 !== e ? n(e) : s(new Error("Timeout exceeded"));
                                }
                            });
                        });
                        let s = 1 / 0, i = -1 / 0, o = -1 / 0, a = 1;
                        n.forEach((t, e)=>{
                            !0 !== t.added && !0 !== t.removed || (s = Math.min(s, a), "" !== t.value.trim() && (i = Math.max(i, a + t.count - 1)), o = Math.max(o, a + t.count - 1)), a += t.count;
                        }), s = Math.max(0, s), i === -1 / 0 && (i = o);
                        let u = s - 1, c = s - 1, l = 1 / 0, m = -1 / 0, d = 1 / 0, f = -1 / 0;
                        for(let t = s; t <= i; t++){
                            a = 1;
                            const e = n.find((e, r)=>{
                                const n = a + e.count, s = a <= t && t < n;
                                return a = n, s;
                            });
                            void 0 !== e && (!0 === e.added ? (c++, l = Math.min(l, c), m = Math.max(m, c)) : !0 === e.removed ? (u++, d = Math.min(d, u), f = Math.max(f, u)) : (u++, c++));
                        }
                        if (l !== 1 / 0 || d !== 1 / 0) return l === 1 / 0 && (l = d, m = d), d === 1 / 0 && (d = l, f = m), {
                            oldRange: {
                                startLineNumber: d,
                                endLineNumberExclusive: f + 1
                            },
                            newRange: {
                                startLineNumber: l,
                                endLineNumberExclusive: m + 1
                            }
                        };
                    }({
                        past: r,
                        current: e.newModelValue
                    });
                    if (void 0 === n) return;
                    const { oldRange: s, newRange: i } = n;
                    await t.processModelChange({
                        ...e,
                        deletedRangeInOldModelOneIndexed: s,
                        addedRangeInNewModelOneIndexed: i
                    });
                } else for(let n = 0; n < e.changesInReverseOrder.length; n++){
                    const s = e.changesInReverseOrder[n], i = Lo(r, s);
                    await t.processModelChange({
                        ...e,
                        newModelValue: i,
                        deletedRangeInOldModelOneIndexed: Vo(s),
                        addedRangeInNewModelOneIndexed: zo(s)
                    }), r = i;
                }
            }(e, {
                newModelValue: c,
                uniqueModelIdentifier: a,
                changesInReverseOrder: f,
                useFullFileDiffForThisCall: d,
                previousModelValue: l
            });
            const p = await e.compileGlobalDiffTrajectories({});
            if (void 0 === p) throw new Error("Compile Diff Trajectories not registered in extension host");
            return p;
        } finally{
            i();
        }
    }
    const ca = new jo({
        keepWhitespaceOnlyChanges: !0,
        alwaysUseFullFileDiff: !1,
        includeUnchangedLines: !0
    });
    f(ta.Ack, async (t, e)=>!0), f(ta.GetModelValue, async (t, e)=>ca.getModelValue(t.relativePath)), f(ta.GetModelValueInRanges, async (t, e)=>{
        const r = ca.getModelValue(t.relativePath);
        if (void 0 !== r) return t.ranges.map((t)=>(function(t, e) {
                return function(t, e) {
                    let r = t.split("\n");
                    const n = e.startLineNumber - 1, s = e.endLineNumberInclusive - 1, i = e.startColumn - 1, o = e.endColumn - 1;
                    return r = r.slice(n, s + 1), 1 === r.length ? r[0] = r[0].slice(i, o) : (r[0] = r[0].slice(i), r[r.length - 1] = r[r.length - 1].slice(0, o)), r.join("\n");
                }(t, {
                    startColumn: e.startColumn,
                    startLineNumber: e.startLineNumber,
                    endColumn: e.endColumn,
                    endLineNumberInclusive: e.endLineNumber
                });
            })(r, t));
    }), f(ta.InitModel, async (t, e)=>{
        ca.initModel(t.relativePath, t.currentModelValue, t.modelVersion);
    });
    f(ta.CompileGlobalDiffTrajectories, async (t, e)=>{
        const r = await ca.compileGlobalDiffTrajectories(t.relativePathToDisplayName);
        return r.map((t)=>{
            const e = t.diffHistory;
            let r = [];
            const n = (t)=>t.split("\n").map((t)=>t.slice(0, 600)).join("\n");
            for(let t = 0; t < e.length; t++)r.push(n(e[t]));
            return {
                ...t,
                diffHistory: r
            };
        });
    }), f(ta.IsRevertingToRecentModel, async (t, e)=>ca.isRevertingToRecentModel(t.relativePath, t.modelValue)), f(ta.IsSuggestingRecentlyRejectedEdit, async (t, e)=>ca.isSuggestingRecentlyRejectedEdit(t.relativePath, t.modelValue, t.numberOfTimesSoftRejectedThreshold, t.numberOfTimesHardRejectedThreshold)), f(ta.RecordRejectedEdit, async (t, e)=>{
        ca.recordRejectedEdit(t.relativePath, t.modelValue, t.onlySoftRejected);
    }), f(ta.ProcessModelChangeLoop, async (t, e)=>ca.processModelChangesLoopWithTimeout()), f(ta.FormatDiffHistory, (t, e)=>ua(t.uri, ca, t.changes, t.eol, t.modelVersion)), f(ta.SetEnableCppWhitespaceDiffHistoryMode, async (t)=>{
        ca.setKeepWhitespaceOnlyChanges(t.enabled), ca.setMergingBehavior(t.enabled ? {
            type: "whitespace compatible"
        } : void 0);
    }), f(ta.SetEnableCppIncludeUnchangedLines, async (t)=>{
        ca.setIncludeUnchangedLines(t.enabled);
    }), f(ra.UploadToSignedUrl, async (t)=>(0, a.uploadToSignedUrl)(t));
    class la {
        constructor(t){
            this.disposables = [];
            const e = {
                runCommand: (e, r)=>{
                    const n = function(t) {
                        return d[t];
                    }(e);
                    return void 0 !== n ? n(r, {
                        context: t
                    }) : Promise.resolve(void 0);
                }
            };
            o.cursor.registerEverythingProviderAllLocal(e);
        }
        dispose() {
            this.disposables.forEach((t)=>t.dispose());
        }
    }
    var ma, da = require("./module-6038.js");
    function fa(t) {
        const e = ma[t];
        return "string" != typeof e ? t.toString() : e[0].toLowerCase() + e.substring(1).replace(/[A-Z]/g, (t)=>"_" + t.toLowerCase());
    }
    !function(t) {
        t[t.Canceled = 1] = "Canceled", t[t.Unknown = 2] = "Unknown", t[t.InvalidArgument = 3] = "InvalidArgument", t[t.DeadlineExceeded = 4] = "DeadlineExceeded", t[t.NotFound = 5] = "NotFound", t[t.AlreadyExists = 6] = "AlreadyExists", t[t.PermissionDenied = 7] = "PermissionDenied", t[t.ResourceExhausted = 8] = "ResourceExhausted", t[t.FailedPrecondition = 9] = "FailedPrecondition", t[t.Aborted = 10] = "Aborted", t[t.OutOfRange = 11] = "OutOfRange", t[t.Unimplemented = 12] = "Unimplemented", t[t.Internal = 13] = "Internal", t[t.Unavailable = 14] = "Unavailable", t[t.DataLoss = 15] = "DataLoss", t[t.Unauthenticated = 16] = "Unauthenticated";
    }(ma || (ma = {}));
    class pa extends Error {
        constructor(t, e = ma.Unknown, r, n, s){
            super(function(t, e) {
                return t.length ? `[${fa(e)}] ${t}` : `[${fa(e)}]`;
            }(t, e)), this.name = "ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = t, this.code = e, this.metadata = new Headers(null != r ? r : {}), this.details = null != n ? n : [], this.cause = s;
        }
        static from(t, e = ma.Unknown) {
            return t instanceof pa ? t : t instanceof Error ? "AbortError" == t.name ? new pa(t.message, ma.Canceled) : new pa(t.message, e, void 0, void 0, t) : new pa(String(t), e, void 0, void 0, t);
        }
        static [Symbol.hasInstance](t) {
            return t instanceof Error && (Object.getPrototypeOf(t) === pa.prototype || "ConnectError" === t.name && "code" in t && "number" == typeof t.code && "metadata" in t && "details" in t && Array.isArray(t.details) && "rawMessage" in t && "string" == typeof t.rawMessage && "cause" in t);
        }
        findDetails(t) {
            const e = "typeName" in t ? {
                findMessage: (e)=>e === t.typeName ? t : void 0
            } : t, r = [];
            for (const t of this.details){
                if ("getType" in t) {
                    e.findMessage(t.getType().typeName) && r.push(t);
                    continue;
                }
                const n = e.findMessage(t.type);
                if (n) try {
                    r.push(n.fromBinary(t.value));
                } catch (t) {}
            }
            return r;
        }
    }
    var ha = function(t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var e, r = t[Symbol.asyncIterator];
        return r ? r.call(t) : (t = "function" == typeof __values ? __values(t) : t[Symbol.iterator](), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
            return this;
        }, e);
        function n(r) {
            e[r] = t[r] && function(e) {
                return new Promise(function(n, s) {
                    (function(t, e, r, n) {
                        Promise.resolve(n).then(function(e) {
                            t({
                                value: e,
                                done: r
                            });
                        }, e);
                    })(n, s, (e = t[r](e)).done, e.value);
                });
            };
        }
    }, ga = function(t) {
        return this instanceof ga ? (this.v = t, this) : new ga(t);
    }, Aa = function(t, e, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, s = r.apply(t, e || []), i = [];
        return n = {}, o("next"), o("throw"), o("return", function(t) {
            return function(e) {
                return Promise.resolve(e).then(t, c);
            };
        }), n[Symbol.asyncIterator] = function() {
            return this;
        }, n;
        function o(t, e) {
            s[t] && (n[t] = function(e) {
                return new Promise(function(r, n) {
                    i.push([
                        t,
                        e,
                        r,
                        n
                    ]) > 1 || a(t, e);
                });
            }, e && (n[t] = e(n[t])));
        }
        function a(t, e) {
            try {
                (r = s[t](e)).value instanceof ga ? Promise.resolve(r.value.v).then(u, c) : l(i[0][2], r);
            } catch (t) {
                l(i[0][3], t);
            }
            var r;
        }
        function u(t) {
            a("next", t);
        }
        function c(t) {
            a("throw", t);
        }
        function l(t, e) {
            t(e), i.shift(), i.length && a(i[0][0], i[0][1]);
        }
    }, _a = function(t) {
        var e, r;
        return e = {}, n("next"), n("throw", function(t) {
            throw t;
        }), n("return"), e[Symbol.iterator] = function() {
            return this;
        }, e;
        function n(n, s) {
            e[n] = t[n] ? function(e) {
                return (r = !r) ? {
                    value: ga(t[n](e)),
                    done: !1
                } : s ? s(e) : e;
            } : s;
        }
    };
    var ya = function(t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var e, r = t[Symbol.asyncIterator];
        return r ? r.call(t) : (t = "function" == typeof __values ? __values(t) : t[Symbol.iterator](), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
            return this;
        }, e);
        function n(r) {
            e[r] = t[r] && function(e) {
                return new Promise(function(n, s) {
                    (function(t, e, r, n) {
                        Promise.resolve(n).then(function(e) {
                            t({
                                value: e,
                                done: r
                            });
                        }, e);
                    })(n, s, (e = t[r](e)).done, e.value);
                });
            };
        }
    }, wa = function(t) {
        return this instanceof wa ? (this.v = t, this) : new wa(t);
    }, Sa = function(t) {
        var e, r;
        return e = {}, n("next"), n("throw", function(t) {
            throw t;
        }), n("return"), e[Symbol.iterator] = function() {
            return this;
        }, e;
        function n(n, s) {
            e[n] = t[n] ? function(e) {
                return (r = !r) ? {
                    value: wa(t[n](e)),
                    done: !1
                } : s ? s(e) : e;
            } : s;
        }
    }, Ja = function(t, e, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, s = r.apply(t, e || []), i = [];
        return n = {}, o("next"), o("throw"), o("return", function(t) {
            return function(e) {
                return Promise.resolve(e).then(t, c);
            };
        }), n[Symbol.asyncIterator] = function() {
            return this;
        }, n;
        function o(t, e) {
            s[t] && (n[t] = function(e) {
                return new Promise(function(r, n) {
                    i.push([
                        t,
                        e,
                        r,
                        n
                    ]) > 1 || a(t, e);
                });
            }, e && (n[t] = e(n[t])));
        }
        function a(t, e) {
            try {
                (r = s[t](e)).value instanceof wa ? Promise.resolve(r.value.v).then(u, c) : l(i[0][2], r);
            } catch (t) {
                l(i[0][3], t);
            }
            var r;
        }
        function u(t) {
            a("next", t);
        }
        function c(t) {
            a("throw", t);
        }
        function l(t, e) {
            t(e), i.shift(), i.length && a(i[0][0], i[0][1]);
        }
    };
    function Ba(t, e) {
        return function(t, e) {
            const r = {};
            for (const [n, s] of Object.entries(t.methods)){
                const i = e(Object.assign(Object.assign({}, s), {
                    localName: n,
                    service: t
                }));
                null != i && (r[n] = i);
            }
            return r;
        }(t, (r)=>{
            switch(r.kind){
                case da.MethodKind.Unary:
                    return function(t, e, r) {
                        return async function(n, s) {
                            var i, o;
                            const a = await t.unary(e, r, null == s ? void 0 : s.signal, null == s ? void 0 : s.timeoutMs, null == s ? void 0 : s.headers, n, null == s ? void 0 : s.contextValues);
                            return null === (i = null == s ? void 0 : s.onHeader) || void 0 === i || i.call(s, a.header), null === (o = null == s ? void 0 : s.onTrailer) || void 0 === o || o.call(s, a.trailer), a.message;
                        };
                    }(e, t, r);
                case da.MethodKind.ServerStreaming:
                    return function(t, e, r) {
                        return function(n, s) {
                            return Ia(t.stream(e, r, null == s ? void 0 : s.signal, null == s ? void 0 : s.timeoutMs, null == s ? void 0 : s.headers, function(t) {
                                return Aa(this, arguments, function*() {
                                    yield ga((yield* _a(ha(t))));
                                });
                            }([
                                n
                            ]), null == s ? void 0 : s.contextValues), s);
                        };
                    }(e, t, r);
                case da.MethodKind.ClientStreaming:
                    return function(t, e, r) {
                        return async function(n, s) {
                            var i, o, a, u, c, l;
                            const m = await t.stream(e, r, null == s ? void 0 : s.signal, null == s ? void 0 : s.timeoutMs, null == s ? void 0 : s.headers, n, null == s ? void 0 : s.contextValues);
                            let d;
                            null === (c = null == s ? void 0 : s.onHeader) || void 0 === c || c.call(s, m.header);
                            let f = 0;
                            try {
                                for(var p, h = !0, g = ya(m.message); !(i = (p = await g.next()).done); h = !0){
                                    u = p.value, h = !1;
                                    d = u, f++;
                                }
                            } catch (t) {
                                o = {
                                    error: t
                                };
                            } finally{
                                try {
                                    h || i || !(a = g.return) || await a.call(g);
                                } finally{
                                    if (o) throw o.error;
                                }
                            }
                            if (!d) throw new pa("protocol error: missing response message", ma.Unimplemented);
                            if (f > 1) throw new pa("protocol error: received extra messages for client streaming method", ma.Unimplemented);
                            return null === (l = null == s ? void 0 : s.onTrailer) || void 0 === l || l.call(s, m.trailer), d;
                        };
                    }(e, t, r);
                case da.MethodKind.BiDiStreaming:
                    return function(t, e, r) {
                        return function(n, s) {
                            return Ia(t.stream(e, r, null == s ? void 0 : s.signal, null == s ? void 0 : s.timeoutMs, null == s ? void 0 : s.headers, n, null == s ? void 0 : s.contextValues), s);
                        };
                    }(e, t, r);
                default:
                    return null;
            }
        });
    }
    function Ea(t, e) {
        return Ba(t, e);
    }
    function Ia(t, e) {
        const r = (function() {
            return Ja(this, arguments, function*() {
                var r, n;
                const s = yield wa(t);
                null === (r = null == e ? void 0 : e.onHeader) || void 0 === r || r.call(e, s.header), yield wa((yield* Sa(ya(s.message)))), null === (n = null == e ? void 0 : e.onTrailer) || void 0 === n || n.call(e, s.trailer);
            });
        })()[Symbol.asyncIterator]();
        return {
            [Symbol.asyncIterator]: ()=>({
                    next: ()=>r.next()
                })
        };
    }
    const { net: Ca } = require("./module-4482.js");
    function ba() {
        const t = o.cursor.getCursorCreds();
        return new URL(t?.backendUrl ?? "https://api2.cursor.sh");
    }
    f(na.DNSLookup, async (t, e)=>(0, a.dnsLookup)({
            hostname: t.hostname ?? ba().hostname,
            source: t.source,
            resolveHostViaSystem: (t, e)=>Ca.resolveHost(t, e)
        })), f(na.InspectTLSInfo, async (t, e)=>(0, a.inspectTLSInfo)(ba())), f(na.Http2Ping, async (t, e)=>(0, a.http2Ping)(ba()));
    var ka = require("./module-7213.js"), va = require("./module-7949.js"), qa = require("./module-6313.js"), Ra = require("./module-7714.js");
    const Pa = require("os");
    var Ta = require("./module-7996.js");
    const xa = !1;
    var Na = require("./module-8634.js"), Da = require("./module-1933.js"), Ua = require("./module-212.js"), Qa = require("./module-5595.js");
    Object.freeze({
        status: "aborted"
    });
    function Ma(t, e, r) {
        function n(r, n) {
            if (r._zod || Object.defineProperty(r, "_zod", {
                value: {
                    def: n,
                    constr: o,
                    traits: new Set
                },
                enumerable: !1
            }), r._zod.traits.has(t)) return;
            r._zod.traits.add(t), e(r, n);
            const s = o.prototype, i = Object.keys(s);
            for(let t = 0; t < i.length; t++){
                const e = i[t];
                e in r || (r[e] = s[e].bind(r));
            }
        }
        const s = r?.Parent ?? Object;
        class i extends s {
        }
        function o(t) {
            var e;
            const s = r?.Parent ? new i : this;
            n(s, t), (e = s._zod).deferred ?? (e.deferred = []);
            for (const t of s._zod.deferred)t();
            return s;
        }
        return Object.defineProperty(i, "name", {
            value: t
        }), Object.defineProperty(o, "init", {
            value: n
        }), Object.defineProperty(o, Symbol.hasInstance, {
            value: (e)=>!!(r?.Parent && e instanceof r.Parent) || e?._zod?.traits?.has(t)
        }), Object.defineProperty(o, "name", {
            value: t
        }), o;
    }
    Symbol("zod_brand");
    class Oa extends Error {
        constructor(){
            super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
        }
    }
    class Fa extends Error {
        constructor(t){
            super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
        }
    }
    const La = {};
    function $a(t) {
        return t && Object.assign(La, t), La;
    }
    function Ga(t) {
        const e = Object.values(t).filter((t)=>"number" == typeof t);
        return Object.entries(t).filter(([t, r])=>-1 === e.indexOf(+t)).map(([t, e])=>e);
    }
    function Ha(t, e = "|") {
        return t.map((t)=>mu(t)).join(e);
    }
    function Ka(t, e) {
        return "bigint" == typeof e ? e.toString() : e;
    }
    function Va(t) {
        return {
            get value () {
                {
                    const e = t();
                    return Object.defineProperty(this, "value", {
                        value: e
                    }), e;
                }
            }
        };
    }
    function za(t) {
        return null == t;
    }
    function Wa(t) {
        const e = t.startsWith("^") ? 1 : 0, r = t.endsWith("$") ? t.length - 1 : t.length;
        return t.slice(e, r);
    }
    const Ya = Symbol("evaluating");
    function ja(t, e, r) {
        let n;
        Object.defineProperty(t, e, {
            get () {
                if (n !== Ya) return void 0 === n && (n = Ya, n = r()), n;
            },
            set (r) {
                Object.defineProperty(t, e, {
                    value: r
                });
            },
            configurable: !0
        });
    }
    function Xa(t, e, r) {
        Object.defineProperty(t, e, {
            value: r,
            writable: !0,
            enumerable: !0,
            configurable: !0
        });
    }
    function Za(...t) {
        const e = {};
        for (const r of t){
            const t = Object.getOwnPropertyDescriptors(r);
            Object.assign(e, t);
        }
        return Object.defineProperties({}, e);
    }
    function tu(t) {
        return JSON.stringify(t);
    }
    const eu = "captureStackTrace" in Error ? Error.captureStackTrace : (...t)=>{};
    function ru(t) {
        return "object" == typeof t && null !== t && !Array.isArray(t);
    }
    const nu = Va(()=>{
        if ("undefined" != typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return !1;
        try {
            return new Function(""), !0;
        } catch (t) {
            return !1;
        }
    });
    function su(t) {
        if (!1 === ru(t)) return !1;
        const e = t.constructor;
        if (void 0 === e) return !0;
        if ("function" != typeof e) return !0;
        const r = e.prototype;
        return !1 !== ru(r) && !1 !== Object.prototype.hasOwnProperty.call(r, "isPrototypeOf");
    }
    function iu(t) {
        return su(t) ? {
            ...t
        } : Array.isArray(t) ? [
            ...t
        ] : t;
    }
    const ou = new Set([
        "string",
        "number",
        "symbol"
    ]), au = new Set([
        "string",
        "number",
        "bigint",
        "boolean",
        "symbol",
        "undefined"
    ]);
    function uu(t) {
        return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function cu(t, e, r) {
        const n = new t._zod.constr(e ?? t._zod.def);
        return e && !r?.parent || (n._zod.parent = t), n;
    }
    function lu(t) {
        const e = t;
        if (!e) return {};
        if ("string" == typeof e) return {
            error: ()=>e
        };
        if (void 0 !== e?.message) {
            if (void 0 !== e?.error) throw new Error("Cannot specify both `message` and `error` params");
            e.error = e.message;
        }
        return delete e.message, "string" == typeof e.error ? {
            ...e,
            error: ()=>e.error
        } : e;
    }
    function mu(t) {
        return "bigint" == typeof t ? t.toString() + "n" : "string" == typeof t ? `"${t}"` : `${t}`;
    }
    const du = {
        safeint: [
            Number.MIN_SAFE_INTEGER,
            Number.MAX_SAFE_INTEGER
        ],
        int32: [
            -2147483648,
            2147483647
        ],
        uint32: [
            0,
            4294967295
        ],
        float32: [
            -34028234663852886e22,
            34028234663852886e22
        ],
        float64: [
            -Number.MAX_VALUE,
            Number.MAX_VALUE
        ]
    }, fu = {
        int64: [
            BigInt("-9223372036854775808"),
            BigInt("9223372036854775807")
        ],
        uint64: [
            BigInt(0),
            BigInt("18446744073709551615")
        ]
    };
    function pu(t, e = 0) {
        if (!0 === t.aborted) return !0;
        for(let r = e; r < t.issues.length; r++)if (!0 !== t.issues[r]?.continue) return !0;
        return !1;
    }
    function hu(t, e) {
        return e.map((e)=>{
            var r;
            return (r = e).path ?? (r.path = []), e.path.unshift(t), e;
        });
    }
    function gu(t) {
        return "string" == typeof t ? t : t?.message;
    }
    function Au(t, e, r) {
        const n = {
            ...t,
            path: t.path ?? []
        };
        if (!t.message) {
            const s = gu(t.inst?._zod.def?.error?.(t)) ?? gu(e?.error?.(t)) ?? gu(r.customError?.(t)) ?? gu(r.localeError?.(t)) ?? "Invalid input";
            n.message = s;
        }
        return delete n.inst, delete n.continue, e?.reportInput || delete n.input, n;
    }
    function _u(t) {
        return t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof File ? "file" : "unknown";
    }
    function yu(t) {
        return Array.isArray(t) ? "array" : "string" == typeof t ? "string" : "unknown";
    }
    function wu(...t) {
        const [e, r, n] = t;
        return "string" == typeof e ? {
            message: e,
            code: "custom",
            input: r,
            inst: n
        } : {
            ...e
        };
    }
    const Su = (t, e)=>{
        t.name = "$ZodError", Object.defineProperty(t, "_zod", {
            value: t._zod,
            enumerable: !1
        }), Object.defineProperty(t, "issues", {
            value: e,
            enumerable: !1
        }), t.message = JSON.stringify(e, Ka, 2), Object.defineProperty(t, "toString", {
            value: ()=>t.message,
            enumerable: !1
        });
    }, Ju = Ma("$ZodError", Su), Bu = Ma("$ZodError", Su, {
        Parent: Error
    });
    const Eu = (t)=>(e, r, n, s)=>{
            const i = n ? Object.assign(n, {
                async: !1
            }) : {
                async: !1
            }, o = e._zod.run({
                value: r,
                issues: []
            }, i);
            if (o instanceof Promise) throw new Oa;
            if (o.issues.length) {
                const e = new (s?.Err ?? t)(o.issues.map((t)=>Au(t, i, $a())));
                throw eu(e, s?.callee), e;
            }
            return o.value;
        }, Iu = Eu(Bu), Cu = (t)=>async (e, r, n, s)=>{
            const i = n ? Object.assign(n, {
                async: !0
            }) : {
                async: !0
            };
            let o = e._zod.run({
                value: r,
                issues: []
            }, i);
            if (o instanceof Promise && (o = await o), o.issues.length) {
                const e = new (s?.Err ?? t)(o.issues.map((t)=>Au(t, i, $a())));
                throw eu(e, s?.callee), e;
            }
            return o.value;
        }, bu = Cu(Bu), ku = (t)=>(e, r, n)=>{
            const s = n ? {
                ...n,
                async: !1
            } : {
                async: !1
            }, i = e._zod.run({
                value: r,
                issues: []
            }, s);
            if (i instanceof Promise) throw new Oa;
            return i.issues.length ? {
                success: !1,
                error: new (t ?? Ju)(i.issues.map((t)=>Au(t, s, $a())))
            } : {
                success: !0,
                data: i.value
            };
        }, vu = ku(Bu), qu = (t)=>async (e, r, n)=>{
            const s = n ? Object.assign(n, {
                async: !0
            }) : {
                async: !0
            };
            let i = e._zod.run({
                value: r,
                issues: []
            }, s);
            return i instanceof Promise && (i = await i), i.issues.length ? {
                success: !1,
                error: new t(i.issues.map((t)=>Au(t, s, $a())))
            } : {
                success: !0,
                data: i.value
            };
        }, Ru = qu(Bu), Pu = (t)=>(e, r, n)=>{
            const s = n ? Object.assign(n, {
                direction: "backward"
            }) : {
                direction: "backward"
            };
            return Eu(t)(e, r, s);
        }, Tu = (t)=>(e, r, n)=>Eu(t)(e, r, n), xu = (t)=>async (e, r, n)=>{
            const s = n ? Object.assign(n, {
                direction: "backward"
            }) : {
                direction: "backward"
            };
            return Cu(t)(e, r, s);
        }, Nu = (t)=>async (e, r, n)=>Cu(t)(e, r, n), Du = (t)=>(e, r, n)=>{
            const s = n ? Object.assign(n, {
                direction: "backward"
            }) : {
                direction: "backward"
            };
            return ku(t)(e, r, s);
        }, Uu = (t)=>(e, r, n)=>ku(t)(e, r, n), Qu = (t)=>async (e, r, n)=>{
            const s = n ? Object.assign(n, {
                direction: "backward"
            }) : {
                direction: "backward"
            };
            return qu(t)(e, r, s);
        }, Mu = (t)=>async (e, r, n)=>qu(t)(e, r, n), Ou = /^[cC][^\s-]{8,}$/, Fu = /^[0-9a-z]+$/, Lu = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, $u = /^[0-9a-vA-V]{20}$/, Gu = /^[A-Za-z0-9]{27}$/, Hu = /^[a-zA-Z0-9_-]{21}$/, Ku = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Vu = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, zu = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Wu = (t)=>t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Yu = Wu(4), ju = Wu(6), Xu = Wu(7), Zu = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, tc = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, ec = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, rc = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, nc = rc, sc = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, ic = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
    function oc() {
        return new RegExp(ic, "u");
    }
    const ac = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, uc = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, cc = (t)=>{
        const e = uu(t ?? ":");
        return new RegExp(`^(?:[0-9A-F]{2}${e}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${e}){5}[0-9a-f]{2}$`);
    }, lc = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, mc = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, dc = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, fc = /^[A-Za-z0-9_-]*$/, pc = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, hc = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, gc = /^\+[1-9]\d{6,14}$/, Ac = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", _c = new RegExp(`^${Ac}$`);
    function yc(t) {
        const e = "(?:[01]\\d|2[0-3]):[0-5]\\d";
        return "number" == typeof t.precision ? -1 === t.precision ? `${e}` : 0 === t.precision ? `${e}:[0-5]\\d` : `${e}:[0-5]\\d\\.\\d{${t.precision}}` : `${e}(?::[0-5]\\d(?:\\.\\d+)?)?`;
    }
    function wc(t) {
        return new RegExp(`^${yc(t)}$`);
    }
    function Sc(t) {
        const e = yc({
            precision: t.precision
        }), r = [
            "Z"
        ];
        t.local && r.push(""), t.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
        const n = `${e}(?:${r.join("|")})`;
        return new RegExp(`^${Ac}T(?:${n})$`);
    }
    const Jc = (t)=>new RegExp(`^${t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*"}$`), Bc = /^-?\d+n?$/, Ec = /^-?\d+$/, Ic = /^-?\d+(?:\.\d+)?$/, Cc = /^(?:true|false)$/i, bc = /^null$/i, kc = /^undefined$/i, vc = /^[^A-Z]*$/, qc = /^[^a-z]*$/, Rc = /^[0-9a-fA-F]*$/;
    function Pc(t, e) {
        return new RegExp(`^[A-Za-z0-9+/]{${t}}${e}$`);
    }
    function Tc(t) {
        return new RegExp(`^[A-Za-z0-9_-]{${t}}$`);
    }
    const xc = /^[0-9a-fA-F]{32}$/, Nc = Pc(22, "=="), Dc = Tc(22), Uc = /^[0-9a-fA-F]{40}$/, Qc = Pc(27, "="), Mc = Tc(27), Oc = /^[0-9a-fA-F]{64}$/, Fc = Pc(43, "="), Lc = Tc(43), $c = /^[0-9a-fA-F]{96}$/, Gc = Pc(64, ""), Hc = Tc(64), Kc = /^[0-9a-fA-F]{128}$/, Vc = Pc(86, "=="), zc = Tc(86), Wc = Ma("$ZodCheck", (t, e)=>{
        var r;
        t._zod ?? (t._zod = {}), t._zod.def = e, (r = t._zod).onattach ?? (r.onattach = []);
    }), Yc = {
        number: "number",
        bigint: "bigint",
        object: "date"
    }, jc = Ma("$ZodCheckLessThan", (t, e)=>{
        Wc.init(t, e);
        const r = Yc[typeof e.value];
        t._zod.onattach.push((t)=>{
            const r = t._zod.bag, n = (e.inclusive ? r.maximum : r.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
            e.value < n && (e.inclusive ? r.maximum = e.value : r.exclusiveMaximum = e.value);
        }), t._zod.check = (n)=>{
            (e.inclusive ? n.value <= e.value : n.value < e.value) || n.issues.push({
                origin: r,
                code: "too_big",
                maximum: "object" == typeof e.value ? e.value.getTime() : e.value,
                input: n.value,
                inclusive: e.inclusive,
                inst: t,
                continue: !e.abort
            });
        };
    }), Xc = Ma("$ZodCheckGreaterThan", (t, e)=>{
        Wc.init(t, e);
        const r = Yc[typeof e.value];
        t._zod.onattach.push((t)=>{
            const r = t._zod.bag, n = (e.inclusive ? r.minimum : r.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
            e.value > n && (e.inclusive ? r.minimum = e.value : r.exclusiveMinimum = e.value);
        }), t._zod.check = (n)=>{
            (e.inclusive ? n.value >= e.value : n.value > e.value) || n.issues.push({
                origin: r,
                code: "too_small",
                minimum: "object" == typeof e.value ? e.value.getTime() : e.value,
                input: n.value,
                inclusive: e.inclusive,
                inst: t,
                continue: !e.abort
            });
        };
    }), Zc = Ma("$ZodCheckMultipleOf", (t, e)=>{
        Wc.init(t, e), t._zod.onattach.push((t)=>{
            var r;
            (r = t._zod.bag).multipleOf ?? (r.multipleOf = e.value);
        }), t._zod.check = (r)=>{
            if (typeof r.value != typeof e.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
            ("bigint" == typeof r.value ? r.value % e.value === BigInt(0) : 0 === function(t, e) {
                const r = (t.toString().split(".")[1] || "").length, n = e.toString();
                let s = (n.split(".")[1] || "").length;
                if (0 === s && /\d?e-\d?/.test(n)) {
                    const t = n.match(/\d?e-(\d?)/);
                    t?.[1] && (s = Number.parseInt(t[1]));
                }
                const i = r > s ? r : s;
                return Number.parseInt(t.toFixed(i).replace(".", "")) % Number.parseInt(e.toFixed(i).replace(".", "")) / 10 ** i;
            }(r.value, e.value)) || r.issues.push({
                origin: typeof r.value,
                code: "not_multiple_of",
                divisor: e.value,
                input: r.value,
                inst: t,
                continue: !e.abort
            });
        };
    }), tl = Ma("$ZodCheckNumberFormat", (t, e)=>{
        Wc.init(t, e), e.format = e.format || "float64";
        const r = e.format?.includes("int"), n = r ? "int" : "number", [s, i] = du[e.format];
        t._zod.onattach.push((t)=>{
            const n = t._zod.bag;
            n.format = e.format, n.minimum = s, n.maximum = i, r && (n.pattern = Ec);
        }), t._zod.check = (o)=>{
            const a = o.value;
            if (r) {
                if (!Number.isInteger(a)) return void o.issues.push({
                    expected: n,
                    format: e.format,
                    code: "invalid_type",
                    continue: !1,
                    input: a,
                    inst: t
                });
                if (!Number.isSafeInteger(a)) return void (a > 0 ? o.issues.push({
                    input: a,
                    code: "too_big",
                    maximum: Number.MAX_SAFE_INTEGER,
                    note: "Integers must be within the safe integer range.",
                    inst: t,
                    origin: n,
                    inclusive: !0,
                    continue: !e.abort
                }) : o.issues.push({
                    input: a,
                    code: "too_small",
                    minimum: Number.MIN_SAFE_INTEGER,
                    note: "Integers must be within the safe integer range.",
                    inst: t,
                    origin: n,
                    inclusive: !0,
                    continue: !e.abort
                }));
            }
            a < s && o.issues.push({
                origin: "number",
                input: a,
                code: "too_small",
                minimum: s,
                inclusive: !0,
                inst: t,
                continue: !e.abort
            }), a > i && o.issues.push({
                origin: "number",
                input: a,
                code: "too_big",
                maximum: i,
                inclusive: !0,
                inst: t,
                continue: !e.abort
            });
        };
    }), el = Ma("$ZodCheckBigIntFormat", (t, e)=>{
        Wc.init(t, e);
        const [r, n] = fu[e.format];
        t._zod.onattach.push((t)=>{
            const s = t._zod.bag;
            s.format = e.format, s.minimum = r, s.maximum = n;
        }), t._zod.check = (s)=>{
            const i = s.value;
            i < r && s.issues.push({
                origin: "bigint",
                input: i,
                code: "too_small",
                minimum: r,
                inclusive: !0,
                inst: t,
                continue: !e.abort
            }), i > n && s.issues.push({
                origin: "bigint",
                input: i,
                code: "too_big",
                maximum: n,
                inclusive: !0,
                inst: t,
                continue: !e.abort
            });
        };
    }), rl = Ma("$ZodCheckMaxSize", (t, e)=>{
        var r;
        Wc.init(t, e), (r = t._zod.def).when ?? (r.when = (t)=>{
            const e = t.value;
            return !za(e) && void 0 !== e.size;
        }), t._zod.onattach.push((t)=>{
            const r = t._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
            e.maximum < r && (t._zod.bag.maximum = e.maximum);
        }), t._zod.check = (r)=>{
            const n = r.value;
            n.size <= e.maximum || r.issues.push({
                origin: _u(n),
                code: "too_big",
                maximum: e.maximum,
                inclusive: !0,
                input: n,
                inst: t,
                continue: !e.abort
            });
        };
    }), nl = Ma("$ZodCheckMinSize", (t, e)=>{
        var r;
        Wc.init(t, e), (r = t._zod.def).when ?? (r.when = (t)=>{
            const e = t.value;
            return !za(e) && void 0 !== e.size;
        }), t._zod.onattach.push((t)=>{
            const r = t._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
            e.minimum > r && (t._zod.bag.minimum = e.minimum);
        }), t._zod.check = (r)=>{
            const n = r.value;
            n.size >= e.minimum || r.issues.push({
                origin: _u(n),
                code: "too_small",
                minimum: e.minimum,
                inclusive: !0,
                input: n,
                inst: t,
                continue: !e.abort
            });
        };
    }), sl = Ma("$ZodCheckSizeEquals", (t, e)=>{
        var r;
        Wc.init(t, e), (r = t._zod.def).when ?? (r.when = (t)=>{
            const e = t.value;
            return !za(e) && void 0 !== e.size;
        }), t._zod.onattach.push((t)=>{
            const r = t._zod.bag;
            r.minimum = e.size, r.maximum = e.size, r.size = e.size;
        }), t._zod.check = (r)=>{
            const n = r.value, s = n.size;
            if (s === e.size) return;
            const i = s > e.size;
            r.issues.push({
                origin: _u(n),
                ...i ? {
                    code: "too_big",
                    maximum: e.size
                } : {
                    code: "too_small",
                    minimum: e.size
                },
                inclusive: !0,
                exact: !0,
                input: r.value,
                inst: t,
                continue: !e.abort
            });
        };
    }), il = Ma("$ZodCheckMaxLength", (t, e)=>{
        var r;
        Wc.init(t, e), (r = t._zod.def).when ?? (r.when = (t)=>{
            const e = t.value;
            return !za(e) && void 0 !== e.length;
        }), t._zod.onattach.push((t)=>{
            const r = t._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
            e.maximum < r && (t._zod.bag.maximum = e.maximum);
        }), t._zod.check = (r)=>{
            const n = r.value;
            if (n.length <= e.maximum) return;
            const s = yu(n);
            r.issues.push({
                origin: s,
                code: "too_big",
                maximum: e.maximum,
                inclusive: !0,
                input: n,
                inst: t,
                continue: !e.abort
            });
        };
    }), ol = Ma("$ZodCheckMinLength", (t, e)=>{
        var r;
        Wc.init(t, e), (r = t._zod.def).when ?? (r.when = (t)=>{
            const e = t.value;
            return !za(e) && void 0 !== e.length;
        }), t._zod.onattach.push((t)=>{
            const r = t._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
            e.minimum > r && (t._zod.bag.minimum = e.minimum);
        }), t._zod.check = (r)=>{
            const n = r.value;
            if (n.length >= e.minimum) return;
            const s = yu(n);
            r.issues.push({
                origin: s,
                code: "too_small",
                minimum: e.minimum,
                inclusive: !0,
                input: n,
                inst: t,
                continue: !e.abort
            });
        };
    }), al = Ma("$ZodCheckLengthEquals", (t, e)=>{
        var r;
        Wc.init(t, e), (r = t._zod.def).when ?? (r.when = (t)=>{
            const e = t.value;
            return !za(e) && void 0 !== e.length;
        }), t._zod.onattach.push((t)=>{
            const r = t._zod.bag;
            r.minimum = e.length, r.maximum = e.length, r.length = e.length;
        }), t._zod.check = (r)=>{
            const n = r.value, s = n.length;
            if (s === e.length) return;
            const i = yu(n), o = s > e.length;
            r.issues.push({
                origin: i,
                ...o ? {
                    code: "too_big",
                    maximum: e.length
                } : {
                    code: "too_small",
                    minimum: e.length
                },
                inclusive: !0,
                exact: !0,
                input: r.value,
                inst: t,
                continue: !e.abort
            });
        };
    }), ul = Ma("$ZodCheckStringFormat", (t, e)=>{
        var r, n;
        Wc.init(t, e), t._zod.onattach.push((t)=>{
            const r = t._zod.bag;
            r.format = e.format, e.pattern && (r.patterns ?? (r.patterns = new Set), r.patterns.add(e.pattern));
        }), e.pattern ? (r = t._zod).check ?? (r.check = (r)=>{
            e.pattern.lastIndex = 0, e.pattern.test(r.value) || r.issues.push({
                origin: "string",
                code: "invalid_format",
                format: e.format,
                input: r.value,
                ...e.pattern ? {
                    pattern: e.pattern.toString()
                } : {},
                inst: t,
                continue: !e.abort
            });
        }) : (n = t._zod).check ?? (n.check = ()=>{});
    }), cl = Ma("$ZodCheckRegex", (t, e)=>{
        ul.init(t, e), t._zod.check = (r)=>{
            e.pattern.lastIndex = 0, e.pattern.test(r.value) || r.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "regex",
                input: r.value,
                pattern: e.pattern.toString(),
                inst: t,
                continue: !e.abort
            });
        };
    }), ll = Ma("$ZodCheckLowerCase", (t, e)=>{
        e.pattern ?? (e.pattern = vc), ul.init(t, e);
    }), ml = Ma("$ZodCheckUpperCase", (t, e)=>{
        e.pattern ?? (e.pattern = qc), ul.init(t, e);
    }), dl = Ma("$ZodCheckIncludes", (t, e)=>{
        Wc.init(t, e);
        const r = uu(e.includes), n = new RegExp("number" == typeof e.position ? `^.{${e.position}}${r}` : r);
        e.pattern = n, t._zod.onattach.push((t)=>{
            const e = t._zod.bag;
            e.patterns ?? (e.patterns = new Set), e.patterns.add(n);
        }), t._zod.check = (r)=>{
            r.value.includes(e.includes, e.position) || r.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "includes",
                includes: e.includes,
                input: r.value,
                inst: t,
                continue: !e.abort
            });
        };
    }), fl = Ma("$ZodCheckStartsWith", (t, e)=>{
        Wc.init(t, e);
        const r = new RegExp(`^${uu(e.prefix)}.*`);
        e.pattern ?? (e.pattern = r), t._zod.onattach.push((t)=>{
            const e = t._zod.bag;
            e.patterns ?? (e.patterns = new Set), e.patterns.add(r);
        }), t._zod.check = (r)=>{
            r.value.startsWith(e.prefix) || r.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "starts_with",
                prefix: e.prefix,
                input: r.value,
                inst: t,
                continue: !e.abort
            });
        };
    }), pl = Ma("$ZodCheckEndsWith", (t, e)=>{
        Wc.init(t, e);
        const r = new RegExp(`.*${uu(e.suffix)}$`);
        e.pattern ?? (e.pattern = r), t._zod.onattach.push((t)=>{
            const e = t._zod.bag;
            e.patterns ?? (e.patterns = new Set), e.patterns.add(r);
        }), t._zod.check = (r)=>{
            r.value.endsWith(e.suffix) || r.issues.push({
                origin: "string",
                code: "invalid_format",
                format: "ends_with",
                suffix: e.suffix,
                input: r.value,
                inst: t,
                continue: !e.abort
            });
        };
    });
    function hl(t, e, r) {
        t.issues.length && e.issues.push(...hu(r, t.issues));
    }
    const gl = Ma("$ZodCheckProperty", (t, e)=>{
        Wc.init(t, e), t._zod.check = (t)=>{
            const r = e.schema._zod.run({
                value: t.value[e.property],
                issues: []
            }, {});
            if (r instanceof Promise) return r.then((r)=>hl(r, t, e.property));
            hl(r, t, e.property);
        };
    }), Al = Ma("$ZodCheckMimeType", (t, e)=>{
        Wc.init(t, e);
        const r = new Set(e.mime);
        t._zod.onattach.push((t)=>{
            t._zod.bag.mime = e.mime;
        }), t._zod.check = (n)=>{
            r.has(n.value.type) || n.issues.push({
                code: "invalid_value",
                values: e.mime,
                input: n.value.type,
                inst: t,
                continue: !e.abort
            });
        };
    }), _l = Ma("$ZodCheckOverwrite", (t, e)=>{
        Wc.init(t, e), t._zod.check = (t)=>{
            t.value = e.tx(t.value);
        };
    });
    class yl {
        constructor(t = []){
            this.content = [], this.indent = 0, this && (this.args = t);
        }
        indented(t) {
            this.indent += 1, t(this), this.indent -= 1;
        }
        write(t) {
            if ("function" == typeof t) return t(this, {
                execution: "sync"
            }), void t(this, {
                execution: "async"
            });
            const e = t.split("\n").filter((t)=>t), r = Math.min(...e.map((t)=>t.length - t.trimStart().length)), n = e.map((t)=>t.slice(r)).map((t)=>" ".repeat(2 * this.indent) + t);
            for (const t of n)this.content.push(t);
        }
        compile() {
            const t = Function, e = this?.args;
            return new t(...e, [
                ...(this?.content ?? [
                    ""
                ]).map((t)=>`  ${t}`)
            ].join("\n"));
        }
    }
    const wl = {
        major: 4,
        minor: 3,
        patch: 6
    }, Sl = Ma("$ZodType", (t, e)=>{
        var r;
        t ?? (t = {}), t._zod.def = e, t._zod.bag = t._zod.bag || {}, t._zod.version = wl;
        const n = [
            ...t._zod.def.checks ?? []
        ];
        t._zod.traits.has("$ZodCheck") && n.unshift(t);
        for (const e of n)for (const r of e._zod.onattach)r(t);
        if (0 === n.length) (r = t._zod).deferred ?? (r.deferred = []), t._zod.deferred?.push(()=>{
            t._zod.run = t._zod.parse;
        });
        else {
            const e = (t, e, r)=>{
                let n, s = pu(t);
                for (const i of e){
                    if (i._zod.def.when) {
                        if (!i._zod.def.when(t)) continue;
                    } else if (s) continue;
                    const e = t.issues.length, o = i._zod.check(t);
                    if (o instanceof Promise && !1 === r?.async) throw new Oa;
                    if (n || o instanceof Promise) n = (n ?? Promise.resolve()).then(async ()=>{
                        await o;
                        t.issues.length !== e && (s || (s = pu(t, e)));
                    });
                    else {
                        if (t.issues.length === e) continue;
                        s || (s = pu(t, e));
                    }
                }
                return n ? n.then(()=>t) : t;
            }, r = (r, s, i)=>{
                if (pu(r)) return r.aborted = !0, r;
                const o = e(s, n, i);
                if (o instanceof Promise) {
                    if (!1 === i.async) throw new Oa;
                    return o.then((e)=>t._zod.parse(e, i));
                }
                return t._zod.parse(o, i);
            };
            t._zod.run = (s, i)=>{
                if (i.skipChecks) return t._zod.parse(s, i);
                if ("backward" === i.direction) {
                    const e = t._zod.parse({
                        value: s.value,
                        issues: []
                    }, {
                        ...i,
                        skipChecks: !0
                    });
                    return e instanceof Promise ? e.then((t)=>r(t, s, i)) : r(e, s, i);
                }
                const o = t._zod.parse(s, i);
                if (o instanceof Promise) {
                    if (!1 === i.async) throw new Oa;
                    return o.then((t)=>e(t, n, i));
                }
                return e(o, n, i);
            };
        }
        ja(t, "~standard", ()=>({
                validate: (e)=>{
                    try {
                        const r = vu(t, e);
                        return r.success ? {
                            value: r.data
                        } : {
                            issues: r.error?.issues
                        };
                    } catch (r) {
                        return Ru(t, e).then((t)=>t.success ? {
                                value: t.data
                            } : {
                                issues: t.error?.issues
                            });
                    }
                },
                vendor: "zod",
                version: 1
            }));
    }), Jl = Ma("$ZodString", (t, e)=>{
        Sl.init(t, e), t._zod.pattern = [
            ...t?._zod.bag?.patterns ?? []
        ].pop() ?? Jc(t._zod.bag), t._zod.parse = (r, n)=>{
            if (e.coerce) try {
                r.value = String(r.value);
            } catch (n) {}
            return "string" == typeof r.value || r.issues.push({
                expected: "string",
                code: "invalid_type",
                input: r.value,
                inst: t
            }), r;
        };
    }), Bl = Ma("$ZodStringFormat", (t, e)=>{
        ul.init(t, e), Jl.init(t, e);
    }), El = Ma("$ZodGUID", (t, e)=>{
        e.pattern ?? (e.pattern = zu), Bl.init(t, e);
    }), Il = Ma("$ZodUUID", (t, e)=>{
        if (e.version) {
            const t = {
                v1: 1,
                v2: 2,
                v3: 3,
                v4: 4,
                v5: 5,
                v6: 6,
                v7: 7,
                v8: 8
            }[e.version];
            if (void 0 === t) throw new Error(`Invalid UUID version: "${e.version}"`);
            e.pattern ?? (e.pattern = Wu(t));
        } else e.pattern ?? (e.pattern = Wu());
        Bl.init(t, e);
    }), Cl = Ma("$ZodEmail", (t, e)=>{
        e.pattern ?? (e.pattern = Zu), Bl.init(t, e);
    }), bl = Ma("$ZodURL", (t, e)=>{
        Bl.init(t, e), t._zod.check = (r)=>{
            try {
                const n = r.value.trim(), s = new URL(n);
                return e.hostname && (e.hostname.lastIndex = 0, e.hostname.test(s.hostname) || r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid hostname",
                    pattern: e.hostname.source,
                    input: r.value,
                    inst: t,
                    continue: !e.abort
                })), e.protocol && (e.protocol.lastIndex = 0, e.protocol.test(s.protocol.endsWith(":") ? s.protocol.slice(0, -1) : s.protocol) || r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid protocol",
                    pattern: e.protocol.source,
                    input: r.value,
                    inst: t,
                    continue: !e.abort
                })), void (e.normalize ? r.value = s.href : r.value = n);
            } catch (n) {
                r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    input: r.value,
                    inst: t,
                    continue: !e.abort
                });
            }
        };
    }), kl = Ma("$ZodEmoji", (t, e)=>{
        e.pattern ?? (e.pattern = oc()), Bl.init(t, e);
    }), vl = Ma("$ZodNanoID", (t, e)=>{
        e.pattern ?? (e.pattern = Hu), Bl.init(t, e);
    }), ql = Ma("$ZodCUID", (t, e)=>{
        e.pattern ?? (e.pattern = Ou), Bl.init(t, e);
    }), Rl = Ma("$ZodCUID2", (t, e)=>{
        e.pattern ?? (e.pattern = Fu), Bl.init(t, e);
    }), Pl = Ma("$ZodULID", (t, e)=>{
        e.pattern ?? (e.pattern = Lu), Bl.init(t, e);
    }), Tl = Ma("$ZodXID", (t, e)=>{
        e.pattern ?? (e.pattern = $u), Bl.init(t, e);
    }), xl = Ma("$ZodKSUID", (t, e)=>{
        e.pattern ?? (e.pattern = Gu), Bl.init(t, e);
    }), Nl = Ma("$ZodISODateTime", (t, e)=>{
        e.pattern ?? (e.pattern = Sc(e)), Bl.init(t, e);
    }), Dl = Ma("$ZodISODate", (t, e)=>{
        e.pattern ?? (e.pattern = _c), Bl.init(t, e);
    }), Ul = Ma("$ZodISOTime", (t, e)=>{
        e.pattern ?? (e.pattern = wc(e)), Bl.init(t, e);
    }), Ql = Ma("$ZodISODuration", (t, e)=>{
        e.pattern ?? (e.pattern = Ku), Bl.init(t, e);
    }), Ml = Ma("$ZodIPv4", (t, e)=>{
        e.pattern ?? (e.pattern = ac), Bl.init(t, e), t._zod.bag.format = "ipv4";
    }), Ol = Ma("$ZodIPv6", (t, e)=>{
        e.pattern ?? (e.pattern = uc), Bl.init(t, e), t._zod.bag.format = "ipv6", t._zod.check = (r)=>{
            try {
                new URL(`http://[${r.value}]`);
            } catch  {
                r.issues.push({
                    code: "invalid_format",
                    format: "ipv6",
                    input: r.value,
                    inst: t,
                    continue: !e.abort
                });
            }
        };
    }), Fl = Ma("$ZodMAC", (t, e)=>{
        e.pattern ?? (e.pattern = cc(e.delimiter)), Bl.init(t, e), t._zod.bag.format = "mac";
    }), Ll = Ma("$ZodCIDRv4", (t, e)=>{
        e.pattern ?? (e.pattern = lc), Bl.init(t, e);
    }), $l = Ma("$ZodCIDRv6", (t, e)=>{
        e.pattern ?? (e.pattern = mc), Bl.init(t, e), t._zod.check = (r)=>{
            const n = r.value.split("/");
            try {
                if (2 !== n.length) throw new Error;
                const [t, e] = n;
                if (!e) throw new Error;
                const r = Number(e);
                if (`${r}` !== e) throw new Error;
                if (r < 0 || r > 128) throw new Error;
                new URL(`http://[${t}]`);
            } catch  {
                r.issues.push({
                    code: "invalid_format",
                    format: "cidrv6",
                    input: r.value,
                    inst: t,
                    continue: !e.abort
                });
            }
        };
    });
    function Gl(t) {
        if ("" === t) return !0;
        if (t.length % 4 != 0) return !1;
        try {
            return atob(t), !0;
        } catch  {
            return !1;
        }
    }
    const Hl = Ma("$ZodBase64", (t, e)=>{
        e.pattern ?? (e.pattern = dc), Bl.init(t, e), t._zod.bag.contentEncoding = "base64", t._zod.check = (r)=>{
            Gl(r.value) || r.issues.push({
                code: "invalid_format",
                format: "base64",
                input: r.value,
                inst: t,
                continue: !e.abort
            });
        };
    });
    const Kl = Ma("$ZodBase64URL", (t, e)=>{
        e.pattern ?? (e.pattern = fc), Bl.init(t, e), t._zod.bag.contentEncoding = "base64url", t._zod.check = (r)=>{
            (function(t) {
                if (!fc.test(t)) return !1;
                const e = t.replace(/[-_]/g, (t)=>"-" === t ? "+" : "/");
                return Gl(e.padEnd(4 * Math.ceil(e.length / 4), "="));
            })(r.value) || r.issues.push({
                code: "invalid_format",
                format: "base64url",
                input: r.value,
                inst: t,
                continue: !e.abort
            });
        };
    }), Vl = Ma("$ZodE164", (t, e)=>{
        e.pattern ?? (e.pattern = gc), Bl.init(t, e);
    });
    const zl = Ma("$ZodJWT", (t, e)=>{
        Bl.init(t, e), t._zod.check = (r)=>{
            (function(t, e = null) {
                try {
                    const r = t.split(".");
                    if (3 !== r.length) return !1;
                    const [n] = r;
                    if (!n) return !1;
                    const s = JSON.parse(atob(n));
                    return !("typ" in s && "JWT" !== s?.typ || !s.alg || e && (!("alg" in s) || s.alg !== e));
                } catch  {
                    return !1;
                }
            })(r.value, e.alg) || r.issues.push({
                code: "invalid_format",
                format: "jwt",
                input: r.value,
                inst: t,
                continue: !e.abort
            });
        };
    }), Wl = Ma("$ZodCustomStringFormat", (t, e)=>{
        Bl.init(t, e), t._zod.check = (r)=>{
            e.fn(r.value) || r.issues.push({
                code: "invalid_format",
                format: e.format,
                input: r.value,
                inst: t,
                continue: !e.abort
            });
        };
    }), Yl = Ma("$ZodNumber", (t, e)=>{
        Sl.init(t, e), t._zod.pattern = t._zod.bag.pattern ?? Ic, t._zod.parse = (r, n)=>{
            if (e.coerce) try {
                r.value = Number(r.value);
            } catch (t) {}
            const s = r.value;
            if ("number" == typeof s && !Number.isNaN(s) && Number.isFinite(s)) return r;
            const i = "number" == typeof s ? Number.isNaN(s) ? "NaN" : Number.isFinite(s) ? void 0 : "Infinity" : void 0;
            return r.issues.push({
                expected: "number",
                code: "invalid_type",
                input: s,
                inst: t,
                ...i ? {
                    received: i
                } : {}
            }), r;
        };
    }), jl = Ma("$ZodNumberFormat", (t, e)=>{
        tl.init(t, e), Yl.init(t, e);
    }), Xl = Ma("$ZodBoolean", (t, e)=>{
        Sl.init(t, e), t._zod.pattern = Cc, t._zod.parse = (r, n)=>{
            if (e.coerce) try {
                r.value = Boolean(r.value);
            } catch (t) {}
            const s = r.value;
            return "boolean" == typeof s || r.issues.push({
                expected: "boolean",
                code: "invalid_type",
                input: s,
                inst: t
            }), r;
        };
    }), Zl = Ma("$ZodBigInt", (t, e)=>{
        Sl.init(t, e), t._zod.pattern = Bc, t._zod.parse = (r, n)=>{
            if (e.coerce) try {
                r.value = BigInt(r.value);
            } catch (t) {}
            return "bigint" == typeof r.value || r.issues.push({
                expected: "bigint",
                code: "invalid_type",
                input: r.value,
                inst: t
            }), r;
        };
    }), tm = Ma("$ZodBigIntFormat", (t, e)=>{
        el.init(t, e), Zl.init(t, e);
    }), em = Ma("$ZodSymbol", (t, e)=>{
        Sl.init(t, e), t._zod.parse = (e, r)=>{
            const n = e.value;
            return "symbol" == typeof n || e.issues.push({
                expected: "symbol",
                code: "invalid_type",
                input: n,
                inst: t
            }), e;
        };
    }), rm = Ma("$ZodUndefined", (t, e)=>{
        Sl.init(t, e), t._zod.pattern = kc, t._zod.values = new Set([
            void 0
        ]), t._zod.optin = "optional", t._zod.optout = "optional", t._zod.parse = (e, r)=>{
            const n = e.value;
            return void 0 === n || e.issues.push({
                expected: "undefined",
                code: "invalid_type",
                input: n,
                inst: t
            }), e;
        };
    }), nm = Ma("$ZodNull", (t, e)=>{
        Sl.init(t, e), t._zod.pattern = bc, t._zod.values = new Set([
            null
        ]), t._zod.parse = (e, r)=>{
            const n = e.value;
            return null === n || e.issues.push({
                expected: "null",
                code: "invalid_type",
                input: n,
                inst: t
            }), e;
        };
    }), sm = Ma("$ZodAny", (t, e)=>{
        Sl.init(t, e), t._zod.parse = (t)=>t;
    }), im = Ma("$ZodUnknown", (t, e)=>{
        Sl.init(t, e), t._zod.parse = (t)=>t;
    }), om = Ma("$ZodNever", (t, e)=>{
        Sl.init(t, e), t._zod.parse = (e, r)=>(e.issues.push({
                expected: "never",
                code: "invalid_type",
                input: e.value,
                inst: t
            }), e);
    }), am = Ma("$ZodVoid", (t, e)=>{
        Sl.init(t, e), t._zod.parse = (e, r)=>{
            const n = e.value;
            return void 0 === n || e.issues.push({
                expected: "void",
                code: "invalid_type",
                input: n,
                inst: t
            }), e;
        };
    }), um = Ma("$ZodDate", (t, e)=>{
        Sl.init(t, e), t._zod.parse = (r, n)=>{
            if (e.coerce) try {
                r.value = new Date(r.value);
            } catch (t) {}
            const s = r.value, i = s instanceof Date;
            return i && !Number.isNaN(s.getTime()) || r.issues.push({
                expected: "date",
                code: "invalid_type",
                input: s,
                ...i ? {
                    received: "Invalid Date"
                } : {},
                inst: t
            }), r;
        };
    });
    function cm(t, e, r) {
        t.issues.length && e.issues.push(...hu(r, t.issues)), e.value[r] = t.value;
    }
    const lm = Ma("$ZodArray", (t, e)=>{
        Sl.init(t, e), t._zod.parse = (r, n)=>{
            const s = r.value;
            if (!Array.isArray(s)) return r.issues.push({
                expected: "array",
                code: "invalid_type",
                input: s,
                inst: t
            }), r;
            r.value = Array(s.length);
            const i = [];
            for(let t = 0; t < s.length; t++){
                const o = s[t], a = e.element._zod.run({
                    value: o,
                    issues: []
                }, n);
                a instanceof Promise ? i.push(a.then((e)=>cm(e, r, t))) : cm(a, r, t);
            }
            return i.length ? Promise.all(i).then(()=>r) : r;
        };
    });
    function mm(t, e, r, n, s) {
        if (t.issues.length) {
            if (s && !(r in n)) return;
            e.issues.push(...hu(r, t.issues));
        }
        void 0 === t.value ? r in n && (e.value[r] = void 0) : e.value[r] = t.value;
    }
    function dm(t) {
        const e = Object.keys(t.shape);
        for (const r of e)if (!t.shape?.[r]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
        const r = (n = t.shape, Object.keys(n).filter((t)=>"optional" === n[t]._zod.optin && "optional" === n[t]._zod.optout));
        var n;
        return {
            ...t,
            keys: e,
            keySet: new Set(e),
            numKeys: e.length,
            optionalKeys: new Set(r)
        };
    }
    function fm(t, e, r, n, s, i) {
        const o = [], a = s.keySet, u = s.catchall._zod, c = u.def.type, l = "optional" === u.optout;
        for(const s in e){
            if (a.has(s)) continue;
            if ("never" === c) {
                o.push(s);
                continue;
            }
            const i = u.run({
                value: e[s],
                issues: []
            }, n);
            i instanceof Promise ? t.push(i.then((t)=>mm(t, r, s, e, l))) : mm(i, r, s, e, l);
        }
        return o.length && r.issues.push({
            code: "unrecognized_keys",
            keys: o,
            input: e,
            inst: i
        }), t.length ? Promise.all(t).then(()=>r) : r;
    }
    const pm = Ma("$ZodObject", (t, e)=>{
        Sl.init(t, e);
        const r = Object.getOwnPropertyDescriptor(e, "shape");
        if (!r?.get) {
            const t = e.shape;
            Object.defineProperty(e, "shape", {
                get: ()=>{
                    const r = {
                        ...t
                    };
                    return Object.defineProperty(e, "shape", {
                        value: r
                    }), r;
                }
            });
        }
        const n = Va(()=>dm(e));
        ja(t._zod, "propValues", ()=>{
            const t = e.shape, r = {};
            for(const e in t){
                const n = t[e]._zod;
                if (n.values) {
                    r[e] ?? (r[e] = new Set);
                    for (const t of n.values)r[e].add(t);
                }
            }
            return r;
        });
        const s = ru, i = e.catchall;
        let o;
        t._zod.parse = (e, r)=>{
            o ?? (o = n.value);
            const a = e.value;
            if (!s(a)) return e.issues.push({
                expected: "object",
                code: "invalid_type",
                input: a,
                inst: t
            }), e;
            e.value = {};
            const u = [], c = o.shape;
            for (const t of o.keys){
                const n = c[t], s = "optional" === n._zod.optout, i = n._zod.run({
                    value: a[t],
                    issues: []
                }, r);
                i instanceof Promise ? u.push(i.then((r)=>mm(r, e, t, a, s))) : mm(i, e, t, a, s);
            }
            return i ? fm(u, a, e, r, n.value, t) : u.length ? Promise.all(u).then(()=>e) : e;
        };
    }), hm = Ma("$ZodObjectJIT", (t, e)=>{
        pm.init(t, e);
        const r = t._zod.parse, n = Va(()=>dm(e));
        let s;
        const i = ru, o = !La.jitless, a = o && nu.value, u = e.catchall;
        let c;
        t._zod.parse = (l, m)=>{
            c ?? (c = n.value);
            const d = l.value;
            return i(d) ? o && a && !1 === m?.async && !0 !== m.jitless ? (s || (s = ((t)=>{
                const e = new yl([
                    "shape",
                    "payload",
                    "ctx"
                ]), r = n.value, s = (t)=>{
                    const e = tu(t);
                    return `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`;
                };
                e.write("const input = payload.value;");
                const i = Object.create(null);
                let o = 0;
                for (const t of r.keys)i[t] = "key_" + o++;
                e.write("const newResult = {};");
                for (const n of r.keys){
                    const r = i[n], o = tu(n), a = t[n], u = "optional" === a?._zod?.optout;
                    e.write(`const ${r} = ${s(n)};`), u ? e.write(`\n        if (${r}.issues.length) {\n          if (${o} in input) {\n            payload.issues = payload.issues.concat(${r}.issues.map(iss => ({\n              ...iss,\n              path: iss.path ? [${o}, ...iss.path] : [${o}]\n            })));\n          }\n        }\n        \n        if (${r}.value === undefined) {\n          if (${o} in input) {\n            newResult[${o}] = undefined;\n          }\n        } else {\n          newResult[${o}] = ${r}.value;\n        }\n        \n      `) : e.write(`\n        if (${r}.issues.length) {\n          payload.issues = payload.issues.concat(${r}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${o}, ...iss.path] : [${o}]\n          })));\n        }\n        \n        if (${r}.value === undefined) {\n          if (${o} in input) {\n            newResult[${o}] = undefined;\n          }\n        } else {\n          newResult[${o}] = ${r}.value;\n        }\n        \n      `);
                }
                e.write("payload.value = newResult;"), e.write("return payload;");
                const a = e.compile();
                return (e, r)=>a(t, e, r);
            })(e.shape)), l = s(l, m), u ? fm([], d, l, m, c, t) : l) : r(l, m) : (l.issues.push({
                expected: "object",
                code: "invalid_type",
                input: d,
                inst: t
            }), l);
        };
    });
    function gm(t, e, r, n) {
        for (const r of t)if (0 === r.issues.length) return e.value = r.value, e;
        const s = t.filter((t)=>!pu(t));
        return 1 === s.length ? (e.value = s[0].value, s[0]) : (e.issues.push({
            code: "invalid_union",
            input: e.value,
            inst: r,
            errors: t.map((t)=>t.issues.map((t)=>Au(t, n, $a())))
        }), e);
    }
    const Am = Ma("$ZodUnion", (t, e)=>{
        Sl.init(t, e), ja(t._zod, "optin", ()=>e.options.some((t)=>"optional" === t._zod.optin) ? "optional" : void 0), ja(t._zod, "optout", ()=>e.options.some((t)=>"optional" === t._zod.optout) ? "optional" : void 0), ja(t._zod, "values", ()=>{
            if (e.options.every((t)=>t._zod.values)) return new Set(e.options.flatMap((t)=>Array.from(t._zod.values)));
        }), ja(t._zod, "pattern", ()=>{
            if (e.options.every((t)=>t._zod.pattern)) {
                const t = e.options.map((t)=>t._zod.pattern);
                return new RegExp(`^(${t.map((t)=>Wa(t.source)).join("|")})$`);
            }
        });
        const r = 1 === e.options.length, n = e.options[0]._zod.run;
        t._zod.parse = (s, i)=>{
            if (r) return n(s, i);
            let o = !1;
            const a = [];
            for (const t of e.options){
                const e = t._zod.run({
                    value: s.value,
                    issues: []
                }, i);
                if (e instanceof Promise) a.push(e), o = !0;
                else {
                    if (0 === e.issues.length) return e;
                    a.push(e);
                }
            }
            return o ? Promise.all(a).then((e)=>gm(e, s, t, i)) : gm(a, s, t, i);
        };
    });
    function _m(t, e, r, n) {
        const s = t.filter((t)=>0 === t.issues.length);
        return 1 === s.length ? (e.value = s[0].value, e) : (0 === s.length ? e.issues.push({
            code: "invalid_union",
            input: e.value,
            inst: r,
            errors: t.map((t)=>t.issues.map((t)=>Au(t, n, $a())))
        }) : e.issues.push({
            code: "invalid_union",
            input: e.value,
            inst: r,
            errors: [],
            inclusive: !1
        }), e);
    }
    const ym = Ma("$ZodXor", (t, e)=>{
        Am.init(t, e), e.inclusive = !1;
        const r = 1 === e.options.length, n = e.options[0]._zod.run;
        t._zod.parse = (s, i)=>{
            if (r) return n(s, i);
            let o = !1;
            const a = [];
            for (const t of e.options){
                const e = t._zod.run({
                    value: s.value,
                    issues: []
                }, i);
                e instanceof Promise ? (a.push(e), o = !0) : a.push(e);
            }
            return o ? Promise.all(a).then((e)=>_m(e, s, t, i)) : _m(a, s, t, i);
        };
    }), wm = Ma("$ZodDiscriminatedUnion", (t, e)=>{
        e.inclusive = !1, Am.init(t, e);
        const r = t._zod.parse;
        ja(t._zod, "propValues", ()=>{
            const t = {};
            for (const r of e.options){
                const n = r._zod.propValues;
                if (!n || 0 === Object.keys(n).length) throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(r)}"`);
                for (const [e, r] of Object.entries(n)){
                    t[e] || (t[e] = new Set);
                    for (const n of r)t[e].add(n);
                }
            }
            return t;
        });
        const n = Va(()=>{
            const t = e.options, r = new Map;
            for (const n of t){
                const t = n._zod.propValues?.[e.discriminator];
                if (!t || 0 === t.size) throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(n)}"`);
                for (const e of t){
                    if (r.has(e)) throw new Error(`Duplicate discriminator value "${String(e)}"`);
                    r.set(e, n);
                }
            }
            return r;
        });
        t._zod.parse = (s, i)=>{
            const o = s.value;
            if (!ru(o)) return s.issues.push({
                code: "invalid_type",
                expected: "object",
                input: o,
                inst: t
            }), s;
            const a = n.value.get(o?.[e.discriminator]);
            return a ? a._zod.run(s, i) : e.unionFallback ? r(s, i) : (s.issues.push({
                code: "invalid_union",
                errors: [],
                note: "No matching discriminator",
                discriminator: e.discriminator,
                input: o,
                path: [
                    e.discriminator
                ],
                inst: t
            }), s);
        };
    }), Sm = Ma("$ZodIntersection", (t, e)=>{
        Sl.init(t, e), t._zod.parse = (t, r)=>{
            const n = t.value, s = e.left._zod.run({
                value: n,
                issues: []
            }, r), i = e.right._zod.run({
                value: n,
                issues: []
            }, r);
            return s instanceof Promise || i instanceof Promise ? Promise.all([
                s,
                i
            ]).then(([e, r])=>Bm(t, e, r)) : Bm(t, s, i);
        };
    });
    function Jm(t, e) {
        if (t === e) return {
            valid: !0,
            data: t
        };
        if (t instanceof Date && e instanceof Date && +t === +e) return {
            valid: !0,
            data: t
        };
        if (su(t) && su(e)) {
            const r = Object.keys(e), n = Object.keys(t).filter((t)=>-1 !== r.indexOf(t)), s = {
                ...t,
                ...e
            };
            for (const r of n){
                const n = Jm(t[r], e[r]);
                if (!n.valid) return {
                    valid: !1,
                    mergeErrorPath: [
                        r,
                        ...n.mergeErrorPath
                    ]
                };
                s[r] = n.data;
            }
            return {
                valid: !0,
                data: s
            };
        }
        if (Array.isArray(t) && Array.isArray(e)) {
            if (t.length !== e.length) return {
                valid: !1,
                mergeErrorPath: []
            };
            const r = [];
            for(let n = 0; n < t.length; n++){
                const s = Jm(t[n], e[n]);
                if (!s.valid) return {
                    valid: !1,
                    mergeErrorPath: [
                        n,
                        ...s.mergeErrorPath
                    ]
                };
                r.push(s.data);
            }
            return {
                valid: !0,
                data: r
            };
        }
        return {
            valid: !1,
            mergeErrorPath: []
        };
    }
    function Bm(t, e, r) {
        const n = new Map;
        let s;
        for (const r of e.issues)if ("unrecognized_keys" === r.code) {
            s ?? (s = r);
            for (const t of r.keys)n.has(t) || n.set(t, {}), n.get(t).l = !0;
        } else t.issues.push(r);
        for (const e of r.issues)if ("unrecognized_keys" === e.code) for (const t of e.keys)n.has(t) || n.set(t, {}), n.get(t).r = !0;
        else t.issues.push(e);
        const i = [
            ...n
        ].filter(([, t])=>t.l && t.r).map(([t])=>t);
        if (i.length && s && t.issues.push({
            ...s,
            keys: i
        }), pu(t)) return t;
        const o = Jm(e.value, r.value);
        if (!o.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
        return t.value = o.data, t;
    }
    const Em = Ma("$ZodTuple", (t, e)=>{
        Sl.init(t, e);
        const r = e.items;
        t._zod.parse = (n, s)=>{
            const i = n.value;
            if (!Array.isArray(i)) return n.issues.push({
                input: i,
                inst: t,
                expected: "tuple",
                code: "invalid_type"
            }), n;
            n.value = [];
            const o = [], a = [
                ...r
            ].reverse().findIndex((t)=>"optional" !== t._zod.optin), u = -1 === a ? 0 : r.length - a;
            if (!e.rest) {
                const e = i.length > r.length, s = i.length < u - 1;
                if (e || s) return n.issues.push({
                    ...e ? {
                        code: "too_big",
                        maximum: r.length,
                        inclusive: !0
                    } : {
                        code: "too_small",
                        minimum: r.length
                    },
                    input: i,
                    inst: t,
                    origin: "array"
                }), n;
            }
            let c = -1;
            for (const t of r){
                if (c++, c >= i.length && c >= u) continue;
                const e = t._zod.run({
                    value: i[c],
                    issues: []
                }, s);
                e instanceof Promise ? o.push(e.then((t)=>Im(t, n, c))) : Im(e, n, c);
            }
            if (e.rest) {
                const t = i.slice(r.length);
                for (const r of t){
                    c++;
                    const t = e.rest._zod.run({
                        value: r,
                        issues: []
                    }, s);
                    t instanceof Promise ? o.push(t.then((t)=>Im(t, n, c))) : Im(t, n, c);
                }
            }
            return o.length ? Promise.all(o).then(()=>n) : n;
        };
    });
    function Im(t, e, r) {
        t.issues.length && e.issues.push(...hu(r, t.issues)), e.value[r] = t.value;
    }
    const Cm = Ma("$ZodRecord", (t, e)=>{
        Sl.init(t, e), t._zod.parse = (r, n)=>{
            const s = r.value;
            if (!su(s)) return r.issues.push({
                expected: "record",
                code: "invalid_type",
                input: s,
                inst: t
            }), r;
            const i = [], o = e.keyType._zod.values;
            if (o) {
                r.value = {};
                const a = new Set;
                for (const t of o)if ("string" == typeof t || "number" == typeof t || "symbol" == typeof t) {
                    a.add("number" == typeof t ? t.toString() : t);
                    const o = e.valueType._zod.run({
                        value: s[t],
                        issues: []
                    }, n);
                    o instanceof Promise ? i.push(o.then((e)=>{
                        e.issues.length && r.issues.push(...hu(t, e.issues)), r.value[t] = e.value;
                    })) : (o.issues.length && r.issues.push(...hu(t, o.issues)), r.value[t] = o.value);
                }
                let u;
                for(const t in s)a.has(t) || (u = u ?? [], u.push(t));
                u && u.length > 0 && r.issues.push({
                    code: "unrecognized_keys",
                    input: s,
                    inst: t,
                    keys: u
                });
            } else {
                r.value = {};
                for (const o of Reflect.ownKeys(s)){
                    if ("__proto__" === o) continue;
                    let a = e.keyType._zod.run({
                        value: o,
                        issues: []
                    }, n);
                    if (a instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
                    if ("string" == typeof o && Ic.test(o) && a.issues.length) {
                        const t = e.keyType._zod.run({
                            value: Number(o),
                            issues: []
                        }, n);
                        if (t instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
                        0 === t.issues.length && (a = t);
                    }
                    if (a.issues.length) {
                        "loose" === e.mode ? r.value[o] = s[o] : r.issues.push({
                            code: "invalid_key",
                            origin: "record",
                            issues: a.issues.map((t)=>Au(t, n, $a())),
                            input: o,
                            path: [
                                o
                            ],
                            inst: t
                        });
                        continue;
                    }
                    const u = e.valueType._zod.run({
                        value: s[o],
                        issues: []
                    }, n);
                    u instanceof Promise ? i.push(u.then((t)=>{
                        t.issues.length && r.issues.push(...hu(o, t.issues)), r.value[a.value] = t.value;
                    })) : (u.issues.length && r.issues.push(...hu(o, u.issues)), r.value[a.value] = u.value);
                }
            }
            return i.length ? Promise.all(i).then(()=>r) : r;
        };
    }), bm = Ma("$ZodMap", (t, e)=>{
        Sl.init(t, e), t._zod.parse = (r, n)=>{
            const s = r.value;
            if (!(s instanceof Map)) return r.issues.push({
                expected: "map",
                code: "invalid_type",
                input: s,
                inst: t
            }), r;
            const i = [];
            r.value = new Map;
            for (const [o, a] of s){
                const u = e.keyType._zod.run({
                    value: o,
                    issues: []
                }, n), c = e.valueType._zod.run({
                    value: a,
                    issues: []
                }, n);
                u instanceof Promise || c instanceof Promise ? i.push(Promise.all([
                    u,
                    c
                ]).then(([e, i])=>{
                    km(e, i, r, o, s, t, n);
                })) : km(u, c, r, o, s, t, n);
            }
            return i.length ? Promise.all(i).then(()=>r) : r;
        };
    });
    function km(t, e, r, n, s, i, o) {
        t.issues.length && (ou.has(typeof n) ? r.issues.push(...hu(n, t.issues)) : r.issues.push({
            code: "invalid_key",
            origin: "map",
            input: s,
            inst: i,
            issues: t.issues.map((t)=>Au(t, o, $a()))
        })), e.issues.length && (ou.has(typeof n) ? r.issues.push(...hu(n, e.issues)) : r.issues.push({
            origin: "map",
            code: "invalid_element",
            input: s,
            inst: i,
            key: n,
            issues: e.issues.map((t)=>Au(t, o, $a()))
        })), r.value.set(t.value, e.value);
    }
    const vm = Ma("$ZodSet", (t, e)=>{
        Sl.init(t, e), t._zod.parse = (r, n)=>{
            const s = r.value;
            if (!(s instanceof Set)) return r.issues.push({
                input: s,
                inst: t,
                expected: "set",
                code: "invalid_type"
            }), r;
            const i = [];
            r.value = new Set;
            for (const t of s){
                const s = e.valueType._zod.run({
                    value: t,
                    issues: []
                }, n);
                s instanceof Promise ? i.push(s.then((t)=>qm(t, r))) : qm(s, r);
            }
            return i.length ? Promise.all(i).then(()=>r) : r;
        };
    });
    function qm(t, e) {
        t.issues.length && e.issues.push(...t.issues), e.value.add(t.value);
    }
    const Rm = Ma("$ZodEnum", (t, e)=>{
        Sl.init(t, e);
        const r = Ga(e.entries), n = new Set(r);
        t._zod.values = n, t._zod.pattern = new RegExp(`^(${r.filter((t)=>ou.has(typeof t)).map((t)=>"string" == typeof t ? uu(t) : t.toString()).join("|")})$`), t._zod.parse = (e, s)=>{
            const i = e.value;
            return n.has(i) || e.issues.push({
                code: "invalid_value",
                values: r,
                input: i,
                inst: t
            }), e;
        };
    }), Pm = Ma("$ZodLiteral", (t, e)=>{
        if (Sl.init(t, e), 0 === e.values.length) throw new Error("Cannot create literal schema with no valid values");
        const r = new Set(e.values);
        t._zod.values = r, t._zod.pattern = new RegExp(`^(${e.values.map((t)=>"string" == typeof t ? uu(t) : t ? uu(t.toString()) : String(t)).join("|")})$`), t._zod.parse = (n, s)=>{
            const i = n.value;
            return r.has(i) || n.issues.push({
                code: "invalid_value",
                values: e.values,
                input: i,
                inst: t
            }), n;
        };
    }), Tm = Ma("$ZodFile", (t, e)=>{
        Sl.init(t, e), t._zod.parse = (e, r)=>{
            const n = e.value;
            return n instanceof File || e.issues.push({
                expected: "file",
                code: "invalid_type",
                input: n,
                inst: t
            }), e;
        };
    }), xm = Ma("$ZodTransform", (t, e)=>{
        Sl.init(t, e), t._zod.parse = (r, n)=>{
            if ("backward" === n.direction) throw new Fa(t.constructor.name);
            const s = e.transform(r.value, r);
            if (n.async) {
                return (s instanceof Promise ? s : Promise.resolve(s)).then((t)=>(r.value = t, r));
            }
            if (s instanceof Promise) throw new Oa;
            return r.value = s, r;
        };
    });
    function Nm(t, e) {
        return t.issues.length && void 0 === e ? {
            issues: [],
            value: void 0
        } : t;
    }
    const Dm = Ma("$ZodOptional", (t, e)=>{
        Sl.init(t, e), t._zod.optin = "optional", t._zod.optout = "optional", ja(t._zod, "values", ()=>e.innerType._zod.values ? new Set([
                ...e.innerType._zod.values,
                void 0
            ]) : void 0), ja(t._zod, "pattern", ()=>{
            const t = e.innerType._zod.pattern;
            return t ? new RegExp(`^(${Wa(t.source)})?$`) : void 0;
        }), t._zod.parse = (t, r)=>{
            if ("optional" === e.innerType._zod.optin) {
                const n = e.innerType._zod.run(t, r);
                return n instanceof Promise ? n.then((e)=>Nm(e, t.value)) : Nm(n, t.value);
            }
            return void 0 === t.value ? t : e.innerType._zod.run(t, r);
        };
    }), Um = Ma("$ZodExactOptional", (t, e)=>{
        Dm.init(t, e), ja(t._zod, "values", ()=>e.innerType._zod.values), ja(t._zod, "pattern", ()=>e.innerType._zod.pattern), t._zod.parse = (t, r)=>e.innerType._zod.run(t, r);
    }), Qm = Ma("$ZodNullable", (t, e)=>{
        Sl.init(t, e), ja(t._zod, "optin", ()=>e.innerType._zod.optin), ja(t._zod, "optout", ()=>e.innerType._zod.optout), ja(t._zod, "pattern", ()=>{
            const t = e.innerType._zod.pattern;
            return t ? new RegExp(`^(${Wa(t.source)}|null)$`) : void 0;
        }), ja(t._zod, "values", ()=>e.innerType._zod.values ? new Set([
                ...e.innerType._zod.values,
                null
            ]) : void 0), t._zod.parse = (t, r)=>null === t.value ? t : e.innerType._zod.run(t, r);
    }), Mm = Ma("$ZodDefault", (t, e)=>{
        Sl.init(t, e), t._zod.optin = "optional", ja(t._zod, "values", ()=>e.innerType._zod.values), t._zod.parse = (t, r)=>{
            if ("backward" === r.direction) return e.innerType._zod.run(t, r);
            if (void 0 === t.value) return t.value = e.defaultValue, t;
            const n = e.innerType._zod.run(t, r);
            return n instanceof Promise ? n.then((t)=>Om(t, e)) : Om(n, e);
        };
    });
    function Om(t, e) {
        return void 0 === t.value && (t.value = e.defaultValue), t;
    }
    const Fm = Ma("$ZodPrefault", (t, e)=>{
        Sl.init(t, e), t._zod.optin = "optional", ja(t._zod, "values", ()=>e.innerType._zod.values), t._zod.parse = (t, r)=>("backward" === r.direction || void 0 === t.value && (t.value = e.defaultValue), e.innerType._zod.run(t, r));
    }), Lm = Ma("$ZodNonOptional", (t, e)=>{
        Sl.init(t, e), ja(t._zod, "values", ()=>{
            const t = e.innerType._zod.values;
            return t ? new Set([
                ...t
            ].filter((t)=>void 0 !== t)) : void 0;
        }), t._zod.parse = (r, n)=>{
            const s = e.innerType._zod.run(r, n);
            return s instanceof Promise ? s.then((e)=>$m(e, t)) : $m(s, t);
        };
    });
    function $m(t, e) {
        return t.issues.length || void 0 !== t.value || t.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: t.value,
            inst: e
        }), t;
    }
    const Gm = Ma("$ZodSuccess", (t, e)=>{
        Sl.init(t, e), t._zod.parse = (t, r)=>{
            if ("backward" === r.direction) throw new Fa("ZodSuccess");
            const n = e.innerType._zod.run(t, r);
            return n instanceof Promise ? n.then((e)=>(t.value = 0 === e.issues.length, t)) : (t.value = 0 === n.issues.length, t);
        };
    }), Hm = Ma("$ZodCatch", (t, e)=>{
        Sl.init(t, e), ja(t._zod, "optin", ()=>e.innerType._zod.optin), ja(t._zod, "optout", ()=>e.innerType._zod.optout), ja(t._zod, "values", ()=>e.innerType._zod.values), t._zod.parse = (t, r)=>{
            if ("backward" === r.direction) return e.innerType._zod.run(t, r);
            const n = e.innerType._zod.run(t, r);
            return n instanceof Promise ? n.then((n)=>(t.value = n.value, n.issues.length && (t.value = e.catchValue({
                    ...t,
                    error: {
                        issues: n.issues.map((t)=>Au(t, r, $a()))
                    },
                    input: t.value
                }), t.issues = []), t)) : (t.value = n.value, n.issues.length && (t.value = e.catchValue({
                ...t,
                error: {
                    issues: n.issues.map((t)=>Au(t, r, $a()))
                },
                input: t.value
            }), t.issues = []), t);
        };
    }), Km = Ma("$ZodNaN", (t, e)=>{
        Sl.init(t, e), t._zod.parse = (e, r)=>("number" == typeof e.value && Number.isNaN(e.value) || e.issues.push({
                input: e.value,
                inst: t,
                expected: "nan",
                code: "invalid_type"
            }), e);
    }), Vm = Ma("$ZodPipe", (t, e)=>{
        Sl.init(t, e), ja(t._zod, "values", ()=>e.in._zod.values), ja(t._zod, "optin", ()=>e.in._zod.optin), ja(t._zod, "optout", ()=>e.out._zod.optout), ja(t._zod, "propValues", ()=>e.in._zod.propValues), t._zod.parse = (t, r)=>{
            if ("backward" === r.direction) {
                const n = e.out._zod.run(t, r);
                return n instanceof Promise ? n.then((t)=>zm(t, e.in, r)) : zm(n, e.in, r);
            }
            const n = e.in._zod.run(t, r);
            return n instanceof Promise ? n.then((t)=>zm(t, e.out, r)) : zm(n, e.out, r);
        };
    });
    function zm(t, e, r) {
        return t.issues.length ? (t.aborted = !0, t) : e._zod.run({
            value: t.value,
            issues: t.issues
        }, r);
    }
    const Wm = Ma("$ZodCodec", (t, e)=>{
        Sl.init(t, e), ja(t._zod, "values", ()=>e.in._zod.values), ja(t._zod, "optin", ()=>e.in._zod.optin), ja(t._zod, "optout", ()=>e.out._zod.optout), ja(t._zod, "propValues", ()=>e.in._zod.propValues), t._zod.parse = (t, r)=>{
            if ("forward" === (r.direction || "forward")) {
                const n = e.in._zod.run(t, r);
                return n instanceof Promise ? n.then((t)=>Ym(t, e, r)) : Ym(n, e, r);
            }
            {
                const n = e.out._zod.run(t, r);
                return n instanceof Promise ? n.then((t)=>Ym(t, e, r)) : Ym(n, e, r);
            }
        };
    });
    function Ym(t, e, r) {
        if (t.issues.length) return t.aborted = !0, t;
        if ("forward" === (r.direction || "forward")) {
            const n = e.transform(t.value, t);
            return n instanceof Promise ? n.then((n)=>jm(t, n, e.out, r)) : jm(t, n, e.out, r);
        }
        {
            const n = e.reverseTransform(t.value, t);
            return n instanceof Promise ? n.then((n)=>jm(t, n, e.in, r)) : jm(t, n, e.in, r);
        }
    }
    function jm(t, e, r, n) {
        return t.issues.length ? (t.aborted = !0, t) : r._zod.run({
            value: e,
            issues: t.issues
        }, n);
    }
    const Xm = Ma("$ZodReadonly", (t, e)=>{
        Sl.init(t, e), ja(t._zod, "propValues", ()=>e.innerType._zod.propValues), ja(t._zod, "values", ()=>e.innerType._zod.values), ja(t._zod, "optin", ()=>e.innerType?._zod?.optin), ja(t._zod, "optout", ()=>e.innerType?._zod?.optout), t._zod.parse = (t, r)=>{
            if ("backward" === r.direction) return e.innerType._zod.run(t, r);
            const n = e.innerType._zod.run(t, r);
            return n instanceof Promise ? n.then(Zm) : Zm(n);
        };
    });
    function Zm(t) {
        return t.value = Object.freeze(t.value), t;
    }
    const td = Ma("$ZodTemplateLiteral", (t, e)=>{
        Sl.init(t, e);
        const r = [];
        for (const t of e.parts)if ("object" == typeof t && null !== t) {
            if (!t._zod.pattern) throw new Error(`Invalid template literal part, no pattern found: ${[
                ...t._zod.traits
            ].shift()}`);
            const e = t._zod.pattern instanceof RegExp ? t._zod.pattern.source : t._zod.pattern;
            if (!e) throw new Error(`Invalid template literal part: ${t._zod.traits}`);
            const n = e.startsWith("^") ? 1 : 0, s = e.endsWith("$") ? e.length - 1 : e.length;
            r.push(e.slice(n, s));
        } else {
            if (null !== t && !au.has(typeof t)) throw new Error(`Invalid template literal part: ${t}`);
            r.push(uu(`${t}`));
        }
        t._zod.pattern = new RegExp(`^${r.join("")}$`), t._zod.parse = (r, n)=>"string" != typeof r.value ? (r.issues.push({
                input: r.value,
                inst: t,
                expected: "string",
                code: "invalid_type"
            }), r) : (t._zod.pattern.lastIndex = 0, t._zod.pattern.test(r.value) || r.issues.push({
                input: r.value,
                inst: t,
                code: "invalid_format",
                format: e.format ?? "template_literal",
                pattern: t._zod.pattern.source
            }), r);
    }), ed = Ma("$ZodFunction", (t, e)=>(Sl.init(t, e), t._def = e, t._zod.def = e, t.implement = (e)=>{
            if ("function" != typeof e) throw new Error("implement() must be called with a function");
            return function(...r) {
                const n = t._def.input ? Iu(t._def.input, r) : r, s = Reflect.apply(e, this, n);
                return t._def.output ? Iu(t._def.output, s) : s;
            };
        }, t.implementAsync = (e)=>{
            if ("function" != typeof e) throw new Error("implementAsync() must be called with a function");
            return async function(...r) {
                const n = t._def.input ? await bu(t._def.input, r) : r, s = await Reflect.apply(e, this, n);
                return t._def.output ? await bu(t._def.output, s) : s;
            };
        }, t._zod.parse = (e, r)=>{
            if ("function" != typeof e.value) return e.issues.push({
                code: "invalid_type",
                expected: "function",
                input: e.value,
                inst: t
            }), e;
            const n = t._def.output && "promise" === t._def.output._zod.def.type;
            return e.value = n ? t.implementAsync(e.value) : t.implement(e.value), e;
        }, t.input = (...e)=>{
            const r = t.constructor;
            return Array.isArray(e[0]) ? new r({
                type: "function",
                input: new Em({
                    type: "tuple",
                    items: e[0],
                    rest: e[1]
                }),
                output: t._def.output
            }) : new r({
                type: "function",
                input: e[0],
                output: t._def.output
            });
        }, t.output = (e)=>new (0, t.constructor)({
                type: "function",
                input: t._def.input,
                output: e
            }), t)), rd = Ma("$ZodPromise", (t, e)=>{
        Sl.init(t, e), t._zod.parse = (t, r)=>Promise.resolve(t.value).then((t)=>e.innerType._zod.run({
                    value: t,
                    issues: []
                }, r));
    }), nd = Ma("$ZodLazy", (t, e)=>{
        Sl.init(t, e), ja(t._zod, "innerType", ()=>e.getter()), ja(t._zod, "pattern", ()=>t._zod.innerType?._zod?.pattern), ja(t._zod, "propValues", ()=>t._zod.innerType?._zod?.propValues), ja(t._zod, "optin", ()=>t._zod.innerType?._zod?.optin ?? void 0), ja(t._zod, "optout", ()=>t._zod.innerType?._zod?.optout ?? void 0), t._zod.parse = (e, r)=>t._zod.innerType._zod.run(e, r);
    }), sd = Ma("$ZodCustom", (t, e)=>{
        Wc.init(t, e), Sl.init(t, e), t._zod.parse = (t, e)=>t, t._zod.check = (r)=>{
            const n = r.value, s = e.fn(n);
            if (s instanceof Promise) return s.then((e)=>id(e, r, n, t));
            id(s, r, n, t);
        };
    });
    function id(t, e, r, n) {
        if (!t) {
            const t = {
                code: "custom",
                input: r,
                inst: n,
                path: [
                    ...n._zod.def.path ?? []
                ],
                continue: !n._zod.def.abort
            };
            n._zod.def.params && (t.params = n._zod.def.params), e.issues.push(wu(t));
        }
    }
    const od = ()=>{
        const t = {
            string: {
                unit: "characters",
                verb: "to have"
            },
            file: {
                unit: "bytes",
                verb: "to have"
            },
            array: {
                unit: "items",
                verb: "to have"
            },
            set: {
                unit: "items",
                verb: "to have"
            },
            map: {
                unit: "entries",
                verb: "to have"
            }
        };
        function e(e) {
            return t[e] ?? null;
        }
        const r = {
            regex: "input",
            email: "email address",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO datetime",
            date: "ISO date",
            time: "ISO time",
            duration: "ISO duration",
            ipv4: "IPv4 address",
            ipv6: "IPv6 address",
            mac: "MAC address",
            cidrv4: "IPv4 range",
            cidrv6: "IPv6 range",
            base64: "base64-encoded string",
            base64url: "base64url-encoded string",
            json_string: "JSON string",
            e164: "E.164 number",
            jwt: "JWT",
            template_literal: "input"
        }, n = {
            nan: "NaN"
        };
        return (t)=>{
            switch(t.code){
                case "invalid_type":
                    {
                        const e = n[t.expected] ?? t.expected, r = function(t) {
                            const e = typeof t;
                            switch(e){
                                case "number":
                                    return Number.isNaN(t) ? "nan" : "number";
                                case "object":
                                    {
                                        if (null === t) return "null";
                                        if (Array.isArray(t)) return "array";
                                        const e = t;
                                        if (e && Object.getPrototypeOf(e) !== Object.prototype && "constructor" in e && e.constructor) return e.constructor.name;
                                    }
                            }
                            return e;
                        }(t.input);
                        return `Invalid input: expected ${e}, received ${n[r] ?? r}`;
                    }
                case "invalid_value":
                    return 1 === t.values.length ? `Invalid input: expected ${mu(t.values[0])}` : `Invalid option: expected one of ${Ha(t.values, "|")}`;
                case "too_big":
                    {
                        const r = t.inclusive ? "<=" : "<", n = e(t.origin);
                        return n ? `Too big: expected ${t.origin ?? "value"} to have ${r}${t.maximum.toString()} ${n.unit ?? "elements"}` : `Too big: expected ${t.origin ?? "value"} to be ${r}${t.maximum.toString()}`;
                    }
                case "too_small":
                    {
                        const r = t.inclusive ? ">=" : ">", n = e(t.origin);
                        return n ? `Too small: expected ${t.origin} to have ${r}${t.minimum.toString()} ${n.unit}` : `Too small: expected ${t.origin} to be ${r}${t.minimum.toString()}`;
                    }
                case "invalid_format":
                    {
                        const e = t;
                        return "starts_with" === e.format ? `Invalid string: must start with "${e.prefix}"` : "ends_with" === e.format ? `Invalid string: must end with "${e.suffix}"` : "includes" === e.format ? `Invalid string: must include "${e.includes}"` : "regex" === e.format ? `Invalid string: must match pattern ${e.pattern}` : `Invalid ${r[e.format] ?? t.format}`;
                    }
                case "not_multiple_of":
                    return `Invalid number: must be a multiple of ${t.divisor}`;
                case "unrecognized_keys":
                    return `Unrecognized key${t.keys.length > 1 ? "s" : ""}: ${Ha(t.keys, ", ")}`;
                case "invalid_key":
                    return `Invalid key in ${t.origin}`;
                case "invalid_union":
                default:
                    return "Invalid input";
                case "invalid_element":
                    return `Invalid value in ${t.origin}`;
            }
        };
    };
    var ad;
    Symbol("ZodOutput"), Symbol("ZodInput");
    class ud {
        constructor(){
            this._map = new WeakMap, this._idmap = new Map;
        }
        add(t, ...e) {
            const r = e[0];
            return this._map.set(t, r), r && "object" == typeof r && "id" in r && this._idmap.set(r.id, t), this;
        }
        clear() {
            return this._map = new WeakMap, this._idmap = new Map, this;
        }
        remove(t) {
            const e = this._map.get(t);
            return e && "object" == typeof e && "id" in e && this._idmap.delete(e.id), this._map.delete(t), this;
        }
        get(t) {
            const e = t._zod.parent;
            if (e) {
                const r = {
                    ...this.get(e) ?? {}
                };
                delete r.id;
                const n = {
                    ...r,
                    ...this._map.get(t)
                };
                return Object.keys(n).length ? n : void 0;
            }
            return this._map.get(t);
        }
        has(t) {
            return this._map.has(t);
        }
    }
    (ad = globalThis).__zod_globalRegistry ?? (ad.__zod_globalRegistry = new ud);
    const cd = globalThis.__zod_globalRegistry;
    function ld(t, e) {
        return new t({
            type: "string",
            format: "email",
            check: "string_format",
            abort: !1,
            ...lu(e)
        });
    }
    function md(t, e) {
        return new t({
            type: "string",
            format: "guid",
            check: "string_format",
            abort: !1,
            ...lu(e)
        });
    }
    function dd(t, e) {
        return new t({
            type: "string",
            format: "uuid",
            check: "string_format",
            abort: !1,
            ...lu(e)
        });
    }
    function fd(t, e) {
        return new t({
            type: "string",
            format: "uuid",
            check: "string_format",
            abort: !1,
            version: "v4",
            ...lu(e)
        });
    }
    function pd(t, e) {
        return new t({
            type: "string",
            format: "uuid",
            check: "string_format",
            abort: !1,
            version: "v6",
            ...lu(e)
        });
    }
    function hd(t, e) {
        return new t({
            type: "string",
            format: "uuid",
            check: "string_format",
            abort: !1,
            version: "v7",
            ...lu(e)
        });
    }
    function gd(t, e) {
        return new t({
            type: "string",
            format: "url",
            check: "string_format",
            abort: !1,
            ...lu(e)
        });
    }
    function Ad(t, e) {
        return new t({
            type: "string",
            format: "emoji",
            check: "string_format",
            abort: !1,
            ...lu(e)
        });
    }
    function _d(t, e) {
        return new t({
            type: "string",
            format: "nanoid",
            check: "string_format",
            abort: !1,
            ...lu(e)
        });
    }
    function yd(t, e) {
        return new t({
            type: "string",
            format: "cuid",
            check: "string_format",
            abort: !1,
            ...lu(e)
        });
    }
    function wd(t, e) {
        return new t({
            type: "string",
            format: "cuid2",
            check: "string_format",
            abort: !1,
            ...lu(e)
        });
    }
    function Sd(t, e) {
        return new t({
            type: "string",
            format: "ulid",
            check: "string_format",
            abort: !1,
            ...lu(e)
        });
    }
    function Jd(t, e) {
        return new t({
            type: "string",
            format: "xid",
            check: "string_format",
            abort: !1,
            ...lu(e)
        });
    }
    function Bd(t, e) {
        return new t({
            type: "string",
            format: "ksuid",
            check: "string_format",
            abort: !1,
            ...lu(e)
        });
    }
    function Ed(t, e) {
        return new t({
            type: "string",
            format: "ipv4",
            check: "string_format",
            abort: !1,
            ...lu(e)
        });
    }
    function Id(t, e) {
        return new t({
            type: "string",
            format: "ipv6",
            check: "string_format",
            abort: !1,
            ...lu(e)
        });
    }
    function Cd(t, e) {
        return new t({
            type: "string",
            format: "cidrv4",
            check: "string_format",
            abort: !1,
            ...lu(e)
        });
    }
    function bd(t, e) {
        return new t({
            type: "string",
            format: "cidrv6",
            check: "string_format",
            abort: !1,
            ...lu(e)
        });
    }
    function kd(t, e) {
        return new t({
            type: "string",
            format: "base64",
            check: "string_format",
            abort: !1,
            ...lu(e)
        });
    }
    function vd(t, e) {
        return new t({
            type: "string",
            format: "base64url",
            check: "string_format",
            abort: !1,
            ...lu(e)
        });
    }
    function qd(t, e) {
        return new t({
            type: "string",
            format: "e164",
            check: "string_format",
            abort: !1,
            ...lu(e)
        });
    }
    function Rd(t, e) {
        return new t({
            type: "string",
            format: "jwt",
            check: "string_format",
            abort: !1,
            ...lu(e)
        });
    }
    function Pd(t, e) {
        return new jc({
            check: "less_than",
            ...lu(e),
            value: t,
            inclusive: !1
        });
    }
    function Td(t, e) {
        return new jc({
            check: "less_than",
            ...lu(e),
            value: t,
            inclusive: !0
        });
    }
    function xd(t, e) {
        return new Xc({
            check: "greater_than",
            ...lu(e),
            value: t,
            inclusive: !1
        });
    }
    function Nd(t, e) {
        return new Xc({
            check: "greater_than",
            ...lu(e),
            value: t,
            inclusive: !0
        });
    }
    function Dd(t) {
        return xd(0, t);
    }
    function Ud(t) {
        return Pd(0, t);
    }
    function Qd(t) {
        return Td(0, t);
    }
    function Md(t) {
        return Nd(0, t);
    }
    function Od(t, e) {
        return new Zc({
            check: "multiple_of",
            ...lu(e),
            value: t
        });
    }
    function Fd(t, e) {
        return new rl({
            check: "max_size",
            ...lu(e),
            maximum: t
        });
    }
    function Ld(t, e) {
        return new nl({
            check: "min_size",
            ...lu(e),
            minimum: t
        });
    }
    function $d(t, e) {
        return new sl({
            check: "size_equals",
            ...lu(e),
            size: t
        });
    }
    function Gd(t, e) {
        return new il({
            check: "max_length",
            ...lu(e),
            maximum: t
        });
    }
    function Hd(t, e) {
        return new ol({
            check: "min_length",
            ...lu(e),
            minimum: t
        });
    }
    function Kd(t, e) {
        return new al({
            check: "length_equals",
            ...lu(e),
            length: t
        });
    }
    function Vd(t, e) {
        return new cl({
            check: "string_format",
            format: "regex",
            ...lu(e),
            pattern: t
        });
    }
    function zd(t) {
        return new ll({
            check: "string_format",
            format: "lowercase",
            ...lu(t)
        });
    }
    function Wd(t) {
        return new ml({
            check: "string_format",
            format: "uppercase",
            ...lu(t)
        });
    }
    function Yd(t, e) {
        return new dl({
            check: "string_format",
            format: "includes",
            ...lu(e),
            includes: t
        });
    }
    function jd(t, e) {
        return new fl({
            check: "string_format",
            format: "starts_with",
            ...lu(e),
            prefix: t
        });
    }
    function Xd(t, e) {
        return new pl({
            check: "string_format",
            format: "ends_with",
            ...lu(e),
            suffix: t
        });
    }
    function Zd(t, e, r) {
        return new gl({
            check: "property",
            property: t,
            schema: e,
            ...lu(r)
        });
    }
    function tf(t, e) {
        return new Al({
            check: "mime_type",
            mime: t,
            ...lu(e)
        });
    }
    function ef(t) {
        return new _l({
            check: "overwrite",
            tx: t
        });
    }
    function rf(t) {
        return ef((e)=>e.normalize(t));
    }
    function nf() {
        return ef((t)=>t.trim());
    }
    function sf() {
        return ef((t)=>t.toLowerCase());
    }
    function of() {
        return ef((t)=>t.toUpperCase());
    }
    function af() {
        return ef((t)=>(function(t) {
                return t.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
            })(t));
    }
    function uf(t) {
        const e = function(t, e) {
            const r = new Wc({
                check: "custom",
                ...lu(e)
            });
            return r._zod.check = t, r;
        }((r)=>(r.addIssue = (t)=>{
                if ("string" == typeof t) r.issues.push(wu(t, r.value, e._zod.def));
                else {
                    const n = t;
                    n.fatal && (n.continue = !1), n.code ?? (n.code = "custom"), n.input ?? (n.input = r.value), n.inst ?? (n.inst = e), n.continue ?? (n.continue = !e._zod.def.abort), r.issues.push(wu(n));
                }
            }, t(r.value, r)));
        return e;
    }
    function cf(t, e, r, n = {}) {
        const s = lu(n), i = {
            ...lu(n),
            check: "string_format",
            type: "string",
            format: e,
            fn: "function" == typeof r ? r : (t)=>r.test(t),
            ...s
        };
        r instanceof RegExp && (i.pattern = r);
        return new t(i);
    }
    function lf(t) {
        let e = t?.target ?? "draft-2020-12";
        return "draft-4" === e && (e = "draft-04"), "draft-7" === e && (e = "draft-07"), {
            processors: t.processors ?? {},
            metadataRegistry: t?.metadata ?? cd,
            target: e,
            unrepresentable: t?.unrepresentable ?? "throw",
            override: t?.override ?? (()=>{}),
            io: t?.io ?? "output",
            counter: 0,
            seen: new Map,
            cycles: t?.cycles ?? "ref",
            reused: t?.reused ?? "inline",
            external: t?.external ?? void 0
        };
    }
    function mf(t, e, r = {
        path: [],
        schemaPath: []
    }) {
        var n;
        const s = t._zod.def, i = e.seen.get(t);
        if (i) {
            i.count++;
            return r.schemaPath.includes(t) && (i.cycle = r.path), i.schema;
        }
        const o = {
            schema: {},
            count: 1,
            cycle: void 0,
            path: r.path
        };
        e.seen.set(t, o);
        const a = t._zod.toJSONSchema?.();
        if (a) o.schema = a;
        else {
            const n = {
                ...r,
                schemaPath: [
                    ...r.schemaPath,
                    t
                ],
                path: r.path
            };
            if (t._zod.processJSONSchema) t._zod.processJSONSchema(e, o.schema, n);
            else {
                const r = o.schema, i = e.processors[s.type];
                if (!i) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${s.type}`);
                i(t, e, r, n);
            }
            const i = t._zod.parent;
            i && (o.ref || (o.ref = i), mf(i, e, n), e.seen.get(i).isParent = !0);
        }
        const u = e.metadataRegistry.get(t);
        u && Object.assign(o.schema, u), "input" === e.io && pf(t) && (delete o.schema.examples, delete o.schema.default), "input" === e.io && o.schema._prefault && ((n = o.schema).default ?? (n.default = o.schema._prefault)), delete o.schema._prefault;
        return e.seen.get(t).schema;
    }
    function df(t, e) {
        const r = t.seen.get(e);
        if (!r) throw new Error("Unprocessed schema. This is a bug in Zod.");
        const n = new Map;
        for (const e of t.seen.entries()){
            const r = t.metadataRegistry.get(e[0])?.id;
            if (r) {
                const t = n.get(r);
                if (t && t !== e[0]) throw new Error(`Duplicate schema id "${r}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
                n.set(r, e[0]);
            }
        }
        const s = (e)=>{
            if (e[1].schema.$ref) return;
            const n = e[1], { ref: s, defId: i } = ((e)=>{
                const n = "draft-2020-12" === t.target ? "$defs" : "definitions";
                if (t.external) {
                    const r = t.external.registry.get(e[0])?.id, s = t.external.uri ?? ((t)=>t);
                    if (r) return {
                        ref: s(r)
                    };
                    const i = e[1].defId ?? e[1].schema.id ?? "schema" + t.counter++;
                    return e[1].defId = i, {
                        defId: i,
                        ref: `${s("__shared")}#/${n}/${i}`
                    };
                }
                if (e[1] === r) return {
                    ref: "#"
                };
                const s = `#/${n}/`, i = e[1].schema.id ?? "__schema" + t.counter++;
                return {
                    defId: i,
                    ref: s + i
                };
            })(e);
            n.def = {
                ...n.schema
            }, i && (n.defId = i);
            const o = n.schema;
            for(const t in o)delete o[t];
            o.$ref = s;
        };
        if ("throw" === t.cycles) for (const e of t.seen.entries()){
            const t = e[1];
            if (t.cycle) throw new Error(`Cycle detected: #/${t.cycle?.join("/")}/<root>\n\nSet the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        }
        for (const r of t.seen.entries()){
            const n = r[1];
            if (e === r[0]) {
                s(r);
                continue;
            }
            if (t.external) {
                const n = t.external.registry.get(r[0])?.id;
                if (e !== r[0] && n) {
                    s(r);
                    continue;
                }
            }
            const i = t.metadataRegistry.get(r[0])?.id;
            i ? s(r) : (n.cycle || n.count > 1 && "ref" === t.reused) && s(r);
        }
    }
    function ff(t, e) {
        const r = t.seen.get(e);
        if (!r) throw new Error("Unprocessed schema. This is a bug in Zod.");
        const n = (e)=>{
            const r = t.seen.get(e);
            if (null === r.ref) return;
            const s = r.def ?? r.schema, i = {
                ...s
            }, o = r.ref;
            if (r.ref = null, o) {
                n(o);
                const r = t.seen.get(o), a = r.schema;
                !a.$ref || "draft-07" !== t.target && "draft-04" !== t.target && "openapi-3.0" !== t.target ? Object.assign(s, a) : (s.allOf = s.allOf ?? [], s.allOf.push(a)), Object.assign(s, i);
                if (e._zod.parent === o) for(const t in s)"$ref" !== t && "allOf" !== t && (t in i || delete s[t]);
                if (a.$ref && r.def) for(const t in s)"$ref" !== t && "allOf" !== t && t in r.def && JSON.stringify(s[t]) === JSON.stringify(r.def[t]) && delete s[t];
            }
            const a = e._zod.parent;
            if (a && a !== o) {
                n(a);
                const e = t.seen.get(a);
                if (e?.schema.$ref && (s.$ref = e.schema.$ref, e.def)) for(const t in s)"$ref" !== t && "allOf" !== t && t in e.def && JSON.stringify(s[t]) === JSON.stringify(e.def[t]) && delete s[t];
            }
            t.override({
                zodSchema: e,
                jsonSchema: s,
                path: r.path ?? []
            });
        };
        for (const e of [
            ...t.seen.entries()
        ].reverse())n(e[0]);
        const s = {};
        if ("draft-2020-12" === t.target ? s.$schema = "https://json-schema.org/draft/2020-12/schema" : "draft-07" === t.target ? s.$schema = "http://json-schema.org/draft-07/schema#" : "draft-04" === t.target ? s.$schema = "http://json-schema.org/draft-04/schema#" : t.target, t.external?.uri) {
            const r = t.external.registry.get(e)?.id;
            if (!r) throw new Error("Schema is missing an `id` property");
            s.$id = t.external.uri(r);
        }
        Object.assign(s, r.def ?? r.schema);
        const i = t.external?.defs ?? {};
        for (const e of t.seen.entries()){
            const t = e[1];
            t.def && t.defId && (i[t.defId] = t.def);
        }
        t.external || Object.keys(i).length > 0 && ("draft-2020-12" === t.target ? s.$defs = i : s.definitions = i);
        try {
            const r = JSON.parse(JSON.stringify(s));
            return Object.defineProperty(r, "~standard", {
                value: {
                    ...e["~standard"],
                    jsonSchema: {
                        input: hf(e, "input", t.processors),
                        output: hf(e, "output", t.processors)
                    }
                },
                enumerable: !1,
                writable: !1
            }), r;
        } catch (t) {
            throw new Error("Error converting schema to JSON.");
        }
    }
    function pf(t, e) {
        const r = e ?? {
            seen: new Set
        };
        if (r.seen.has(t)) return !1;
        r.seen.add(t);
        const n = t._zod.def;
        if ("transform" === n.type) return !0;
        if ("array" === n.type) return pf(n.element, r);
        if ("set" === n.type) return pf(n.valueType, r);
        if ("lazy" === n.type) return pf(n.getter(), r);
        if ("promise" === n.type || "optional" === n.type || "nonoptional" === n.type || "nullable" === n.type || "readonly" === n.type || "default" === n.type || "prefault" === n.type) return pf(n.innerType, r);
        if ("intersection" === n.type) return pf(n.left, r) || pf(n.right, r);
        if ("record" === n.type || "map" === n.type) return pf(n.keyType, r) || pf(n.valueType, r);
        if ("pipe" === n.type) return pf(n.in, r) || pf(n.out, r);
        if ("object" === n.type) {
            for(const t in n.shape)if (pf(n.shape[t], r)) return !0;
            return !1;
        }
        if ("union" === n.type) {
            for (const t of n.options)if (pf(t, r)) return !0;
            return !1;
        }
        if ("tuple" === n.type) {
            for (const t of n.items)if (pf(t, r)) return !0;
            return !(!n.rest || !pf(n.rest, r));
        }
        return !1;
    }
    const hf = (t, e, r = {})=>(n)=>{
            const { libraryOptions: s, target: i } = n ?? {}, o = lf({
                ...s ?? {},
                target: i,
                io: e,
                processors: r
            });
            return mf(t, o), df(o, t), ff(o, t);
        }, gf = {
        guid: "uuid",
        url: "uri",
        datetime: "date-time",
        json_string: "json-string",
        regex: ""
    }, Af = (t, e, r, n)=>{
        const s = r;
        s.type = "string";
        const { minimum: i, maximum: o, format: a, patterns: u, contentEncoding: c } = t._zod.bag;
        if ("number" == typeof i && (s.minLength = i), "number" == typeof o && (s.maxLength = o), a && (s.format = gf[a] ?? a, "" === s.format && delete s.format, "time" === a && delete s.format), c && (s.contentEncoding = c), u && u.size > 0) {
            const t = [
                ...u
            ];
            1 === t.length ? s.pattern = t[0].source : t.length > 1 && (s.allOf = [
                ...t.map((t)=>({
                        ..."draft-07" === e.target || "draft-04" === e.target || "openapi-3.0" === e.target ? {
                            type: "string"
                        } : {},
                        pattern: t.source
                    }))
            ]);
        }
    }, _f = (t, e, r, n)=>{
        const s = r, { minimum: i, maximum: o, format: a, multipleOf: u, exclusiveMaximum: c, exclusiveMinimum: l } = t._zod.bag;
        "string" == typeof a && a.includes("int") ? s.type = "integer" : s.type = "number", "number" == typeof l && ("draft-04" === e.target || "openapi-3.0" === e.target ? (s.minimum = l, s.exclusiveMinimum = !0) : s.exclusiveMinimum = l), "number" == typeof i && (s.minimum = i, "number" == typeof l && "draft-04" !== e.target && (l >= i ? delete s.minimum : delete s.exclusiveMinimum)), "number" == typeof c && ("draft-04" === e.target || "openapi-3.0" === e.target ? (s.maximum = c, s.exclusiveMaximum = !0) : s.exclusiveMaximum = c), "number" == typeof o && (s.maximum = o, "number" == typeof c && "draft-04" !== e.target && (c <= o ? delete s.maximum : delete s.exclusiveMaximum)), "number" == typeof u && (s.multipleOf = u);
    }, yf = (t, e, r, n)=>{
        r.type = "boolean";
    }, wf = (t, e, r, n)=>{
        if ("throw" === e.unrepresentable) throw new Error("BigInt cannot be represented in JSON Schema");
    }, Sf = (t, e, r, n)=>{
        if ("throw" === e.unrepresentable) throw new Error("Symbols cannot be represented in JSON Schema");
    }, Jf = (t, e, r, n)=>{
        "openapi-3.0" === e.target ? (r.type = "string", r.nullable = !0, r.enum = [
            null
        ]) : r.type = "null";
    }, Bf = (t, e, r, n)=>{
        if ("throw" === e.unrepresentable) throw new Error("Undefined cannot be represented in JSON Schema");
    }, Ef = (t, e, r, n)=>{
        if ("throw" === e.unrepresentable) throw new Error("Void cannot be represented in JSON Schema");
    }, If = (t, e, r, n)=>{
        r.not = {};
    }, Cf = (t, e, r, n)=>{
        if ("throw" === e.unrepresentable) throw new Error("Date cannot be represented in JSON Schema");
    }, bf = (t, e, r, n)=>{
        const s = Ga(t._zod.def.entries);
        s.every((t)=>"number" == typeof t) && (r.type = "number"), s.every((t)=>"string" == typeof t) && (r.type = "string"), r.enum = s;
    }, kf = (t, e, r, n)=>{
        const s = t._zod.def, i = [];
        for (const t of s.values)if (void 0 === t) {
            if ("throw" === e.unrepresentable) throw new Error("Literal `undefined` cannot be represented in JSON Schema");
        } else if ("bigint" == typeof t) {
            if ("throw" === e.unrepresentable) throw new Error("BigInt literals cannot be represented in JSON Schema");
            i.push(Number(t));
        } else i.push(t);
        if (0 === i.length) ;
        else if (1 === i.length) {
            const t = i[0];
            r.type = null === t ? "null" : typeof t, "draft-04" === e.target || "openapi-3.0" === e.target ? r.enum = [
                t
            ] : r.const = t;
        } else i.every((t)=>"number" == typeof t) && (r.type = "number"), i.every((t)=>"string" == typeof t) && (r.type = "string"), i.every((t)=>"boolean" == typeof t) && (r.type = "boolean"), i.every((t)=>null === t) && (r.type = "null"), r.enum = i;
    }, vf = (t, e, r, n)=>{
        if ("throw" === e.unrepresentable) throw new Error("NaN cannot be represented in JSON Schema");
    }, qf = (t, e, r, n)=>{
        const s = r, i = t._zod.pattern;
        if (!i) throw new Error("Pattern not found in template literal");
        s.type = "string", s.pattern = i.source;
    }, Rf = (t, e, r, n)=>{
        const s = r, i = {
            type: "string",
            format: "binary",
            contentEncoding: "binary"
        }, { minimum: o, maximum: a, mime: u } = t._zod.bag;
        void 0 !== o && (i.minLength = o), void 0 !== a && (i.maxLength = a), u ? 1 === u.length ? (i.contentMediaType = u[0], Object.assign(s, i)) : (Object.assign(s, i), s.anyOf = u.map((t)=>({
                contentMediaType: t
            }))) : Object.assign(s, i);
    }, Pf = (t, e, r, n)=>{
        r.type = "boolean";
    }, Tf = (t, e, r, n)=>{
        if ("throw" === e.unrepresentable) throw new Error("Custom types cannot be represented in JSON Schema");
    }, xf = (t, e, r, n)=>{
        if ("throw" === e.unrepresentable) throw new Error("Function types cannot be represented in JSON Schema");
    }, Nf = (t, e, r, n)=>{
        if ("throw" === e.unrepresentable) throw new Error("Transforms cannot be represented in JSON Schema");
    }, Df = (t, e, r, n)=>{
        if ("throw" === e.unrepresentable) throw new Error("Map cannot be represented in JSON Schema");
    }, Uf = (t, e, r, n)=>{
        if ("throw" === e.unrepresentable) throw new Error("Set cannot be represented in JSON Schema");
    }, Qf = (t, e, r, n)=>{
        const s = r, i = t._zod.def, { minimum: o, maximum: a } = t._zod.bag;
        "number" == typeof o && (s.minItems = o), "number" == typeof a && (s.maxItems = a), s.type = "array", s.items = mf(i.element, e, {
            ...n,
            path: [
                ...n.path,
                "items"
            ]
        });
    }, Mf = (t, e, r, n)=>{
        const s = r, i = t._zod.def;
        s.type = "object", s.properties = {};
        const o = i.shape;
        for(const t in o)s.properties[t] = mf(o[t], e, {
            ...n,
            path: [
                ...n.path,
                "properties",
                t
            ]
        });
        const a = new Set(Object.keys(o)), u = new Set([
            ...a
        ].filter((t)=>{
            const r = i.shape[t]._zod;
            return "input" === e.io ? void 0 === r.optin : void 0 === r.optout;
        }));
        u.size > 0 && (s.required = Array.from(u)), "never" === i.catchall?._zod.def.type ? s.additionalProperties = !1 : i.catchall ? i.catchall && (s.additionalProperties = mf(i.catchall, e, {
            ...n,
            path: [
                ...n.path,
                "additionalProperties"
            ]
        })) : "output" === e.io && (s.additionalProperties = !1);
    }, Of = (t, e, r, n)=>{
        const s = t._zod.def, i = !1 === s.inclusive, o = s.options.map((t, r)=>mf(t, e, {
                ...n,
                path: [
                    ...n.path,
                    i ? "oneOf" : "anyOf",
                    r
                ]
            }));
        i ? r.oneOf = o : r.anyOf = o;
    }, Ff = (t, e, r, n)=>{
        const s = t._zod.def, i = mf(s.left, e, {
            ...n,
            path: [
                ...n.path,
                "allOf",
                0
            ]
        }), o = mf(s.right, e, {
            ...n,
            path: [
                ...n.path,
                "allOf",
                1
            ]
        }), a = (t)=>"allOf" in t && 1 === Object.keys(t).length, u = [
            ...a(i) ? i.allOf : [
                i
            ],
            ...a(o) ? o.allOf : [
                o
            ]
        ];
        r.allOf = u;
    }, Lf = (t, e, r, n)=>{
        const s = r, i = t._zod.def;
        s.type = "array";
        const o = "draft-2020-12" === e.target ? "prefixItems" : "items", a = "draft-2020-12" === e.target || "openapi-3.0" === e.target ? "items" : "additionalItems", u = i.items.map((t, r)=>mf(t, e, {
                ...n,
                path: [
                    ...n.path,
                    o,
                    r
                ]
            })), c = i.rest ? mf(i.rest, e, {
            ...n,
            path: [
                ...n.path,
                a,
                ..."openapi-3.0" === e.target ? [
                    i.items.length
                ] : []
            ]
        }) : null;
        "draft-2020-12" === e.target ? (s.prefixItems = u, c && (s.items = c)) : "openapi-3.0" === e.target ? (s.items = {
            anyOf: u
        }, c && s.items.anyOf.push(c), s.minItems = u.length, c || (s.maxItems = u.length)) : (s.items = u, c && (s.additionalItems = c));
        const { minimum: l, maximum: m } = t._zod.bag;
        "number" == typeof l && (s.minItems = l), "number" == typeof m && (s.maxItems = m);
    }, $f = (t, e, r, n)=>{
        const s = r, i = t._zod.def;
        s.type = "object";
        const o = i.keyType, a = o._zod.bag, u = a?.patterns;
        if ("loose" === i.mode && u && u.size > 0) {
            const t = mf(i.valueType, e, {
                ...n,
                path: [
                    ...n.path,
                    "patternProperties",
                    "*"
                ]
            });
            s.patternProperties = {};
            for (const e of u)s.patternProperties[e.source] = t;
        } else "draft-07" !== e.target && "draft-2020-12" !== e.target || (s.propertyNames = mf(i.keyType, e, {
            ...n,
            path: [
                ...n.path,
                "propertyNames"
            ]
        })), s.additionalProperties = mf(i.valueType, e, {
            ...n,
            path: [
                ...n.path,
                "additionalProperties"
            ]
        });
        const c = o._zod.values;
        if (c) {
            const t = [
                ...c
            ].filter((t)=>"string" == typeof t || "number" == typeof t);
            t.length > 0 && (s.required = t);
        }
    }, Gf = (t, e, r, n)=>{
        const s = t._zod.def, i = mf(s.innerType, e, n), o = e.seen.get(t);
        "openapi-3.0" === e.target ? (o.ref = s.innerType, r.nullable = !0) : r.anyOf = [
            i,
            {
                type: "null"
            }
        ];
    }, Hf = (t, e, r, n)=>{
        const s = t._zod.def;
        mf(s.innerType, e, n);
        e.seen.get(t).ref = s.innerType;
    }, Kf = (t, e, r, n)=>{
        const s = t._zod.def;
        mf(s.innerType, e, n);
        e.seen.get(t).ref = s.innerType, r.default = JSON.parse(JSON.stringify(s.defaultValue));
    }, Vf = (t, e, r, n)=>{
        const s = t._zod.def;
        mf(s.innerType, e, n);
        e.seen.get(t).ref = s.innerType, "input" === e.io && (r._prefault = JSON.parse(JSON.stringify(s.defaultValue)));
    }, zf = (t, e, r, n)=>{
        const s = t._zod.def;
        mf(s.innerType, e, n);
        let i;
        e.seen.get(t).ref = s.innerType;
        try {
            i = s.catchValue(void 0);
        } catch  {
            throw new Error("Dynamic catch values are not supported in JSON Schema");
        }
        r.default = i;
    }, Wf = (t, e, r, n)=>{
        const s = t._zod.def, i = "input" === e.io ? "transform" === s.in._zod.def.type ? s.out : s.in : s.out;
        mf(i, e, n);
        e.seen.get(t).ref = i;
    }, Yf = (t, e, r, n)=>{
        const s = t._zod.def;
        mf(s.innerType, e, n);
        e.seen.get(t).ref = s.innerType, r.readOnly = !0;
    }, jf = (t, e, r, n)=>{
        const s = t._zod.def;
        mf(s.innerType, e, n);
        e.seen.get(t).ref = s.innerType;
    }, Xf = (t, e, r, n)=>{
        const s = t._zod.def;
        mf(s.innerType, e, n);
        e.seen.get(t).ref = s.innerType;
    }, Zf = (t, e, r, n)=>{
        const s = t._zod.innerType;
        mf(s, e, n);
        e.seen.get(t).ref = s;
    };
    const tp = Ma("ZodISODateTime", (t, e)=>{
        Nl.init(t, e), Cp.init(t, e);
    });
    function ep(t) {
        return function(t, e) {
            return new t({
                type: "string",
                format: "datetime",
                check: "string_format",
                offset: !1,
                local: !1,
                precision: null,
                ...lu(e)
            });
        }(tp, t);
    }
    const rp = Ma("ZodISODate", (t, e)=>{
        Dl.init(t, e), Cp.init(t, e);
    });
    function np(t) {
        return function(t, e) {
            return new t({
                type: "string",
                format: "date",
                check: "string_format",
                ...lu(e)
            });
        }(rp, t);
    }
    const sp = Ma("ZodISOTime", (t, e)=>{
        Ul.init(t, e), Cp.init(t, e);
    });
    function ip(t) {
        return function(t, e) {
            return new t({
                type: "string",
                format: "time",
                check: "string_format",
                precision: null,
                ...lu(e)
            });
        }(sp, t);
    }
    const op = Ma("ZodISODuration", (t, e)=>{
        Ql.init(t, e), Cp.init(t, e);
    });
    function ap(t) {
        return function(t, e) {
            return new t({
                type: "string",
                format: "duration",
                check: "string_format",
                ...lu(e)
            });
        }(op, t);
    }
    const up = (t, e)=>{
        Ju.init(t, e), t.name = "ZodError", Object.defineProperties(t, {
            format: {
                value: (e)=>(function(t, e = (t)=>t.message) {
                        const r = {
                            _errors: []
                        }, n = (t)=>{
                            for (const s of t.issues)if ("invalid_union" === s.code && s.errors.length) s.errors.map((t)=>n({
                                    issues: t
                                }));
                            else if ("invalid_key" === s.code) n({
                                issues: s.issues
                            });
                            else if ("invalid_element" === s.code) n({
                                issues: s.issues
                            });
                            else if (0 === s.path.length) r._errors.push(e(s));
                            else {
                                let t = r, n = 0;
                                for(; n < s.path.length;){
                                    const r = s.path[n];
                                    n === s.path.length - 1 ? (t[r] = t[r] || {
                                        _errors: []
                                    }, t[r]._errors.push(e(s))) : t[r] = t[r] || {
                                        _errors: []
                                    }, t = t[r], n++;
                                }
                            }
                        };
                        return n(t), r;
                    })(t, e)
            },
            flatten: {
                value: (e)=>(function(t, e = (t)=>t.message) {
                        const r = {}, n = [];
                        for (const s of t.issues)s.path.length > 0 ? (r[s.path[0]] = r[s.path[0]] || [], r[s.path[0]].push(e(s))) : n.push(e(s));
                        return {
                            formErrors: n,
                            fieldErrors: r
                        };
                    })(t, e)
            },
            addIssue: {
                value: (e)=>{
                    t.issues.push(e), t.message = JSON.stringify(t.issues, Ka, 2);
                }
            },
            addIssues: {
                value: (e)=>{
                    t.issues.push(...e), t.message = JSON.stringify(t.issues, Ka, 2);
                }
            },
            isEmpty: {
                get: ()=>0 === t.issues.length
            }
        });
    }, cp = (Ma("ZodError", up), Ma("ZodError", up, {
        Parent: Error
    })), lp = Eu(cp), mp = Cu(cp), dp = ku(cp), fp = qu(cp), pp = Pu(cp), hp = Tu(cp), gp = xu(cp), Ap = Nu(cp), _p = Du(cp), yp = Uu(cp), wp = Qu(cp), Sp = Mu(cp), Jp = Ma("ZodType", (t, e)=>(Sl.init(t, e), Object.assign(t["~standard"], {
            jsonSchema: {
                input: hf(t, "input"),
                output: hf(t, "output")
            }
        }), t.toJSONSchema = ((t, e = {})=>(r)=>{
                const n = lf({
                    ...r,
                    processors: e
                });
                return mf(t, n), df(n, t), ff(n, t);
            })(t, {}), t.def = e, t.type = e.type, Object.defineProperty(t, "_def", {
            value: e
        }), t.check = (...r)=>t.clone(Za(e, {
                checks: [
                    ...e.checks ?? [],
                    ...r.map((t)=>"function" == typeof t ? {
                            _zod: {
                                check: t,
                                def: {
                                    check: "custom"
                                },
                                onattach: []
                            }
                        } : t)
                ]
            }), {
                parent: !0
            }), t.with = t.check, t.clone = (e, r)=>cu(t, e, r), t.brand = ()=>t, t.register = (e, r)=>(e.add(t, r), t), t.parse = (e, r)=>lp(t, e, r, {
                callee: t.parse
            }), t.safeParse = (e, r)=>dp(t, e, r), t.parseAsync = async (e, r)=>mp(t, e, r, {
                callee: t.parseAsync
            }), t.safeParseAsync = async (e, r)=>fp(t, e, r), t.spa = t.safeParseAsync, t.encode = (e, r)=>pp(t, e, r), t.decode = (e, r)=>hp(t, e, r), t.encodeAsync = async (e, r)=>gp(t, e, r), t.decodeAsync = async (e, r)=>Ap(t, e, r), t.safeEncode = (e, r)=>_p(t, e, r), t.safeDecode = (e, r)=>yp(t, e, r), t.safeEncodeAsync = async (e, r)=>wp(t, e, r), t.safeDecodeAsync = async (e, r)=>Sp(t, e, r), t.refine = (e, r)=>t.check(hA(e, r)), t.superRefine = (e)=>t.check(gA(e)), t.overwrite = (e)=>t.check(ef(e)), t.optional = ()=>xg(t), t.exactOptional = ()=>Dg(t), t.nullable = ()=>Qg(t), t.nullish = ()=>xg(Qg(t)), t.nonoptional = (e)=>Hg(t, e), t.array = ()=>tg(t), t.or = (e)=>ag([
                t,
                e
            ]), t.and = (e)=>fg(t, e), t.transform = (e)=>Zg(t, Pg(e)), t.default = (e)=>Fg(t, e), t.prefault = (e)=>$g(t, e), t.catch = (e)=>Wg(t, e), t.pipe = (e)=>Zg(t, e), t.readonly = ()=>nA(t), t.describe = (e)=>{
            const r = t.clone();
            return cd.add(r, {
                description: e
            }), r;
        }, Object.defineProperty(t, "description", {
            get: ()=>cd.get(t)?.description,
            configurable: !0
        }), t.meta = (...e)=>{
            if (0 === e.length) return cd.get(t);
            const r = t.clone();
            return cd.add(r, e[0]), r;
        }, t.isOptional = ()=>t.safeParse(void 0).success, t.isNullable = ()=>t.safeParse(null).success, t.apply = (e)=>e(t), t)), Bp = Ma("_ZodString", (t, e)=>{
        Jl.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>Af(t, e, r);
        const r = t._zod.bag;
        t.format = r.format ?? null, t.minLength = r.minimum ?? null, t.maxLength = r.maximum ?? null, t.regex = (...e)=>t.check(Vd(...e)), t.includes = (...e)=>t.check(Yd(...e)), t.startsWith = (...e)=>t.check(jd(...e)), t.endsWith = (...e)=>t.check(Xd(...e)), t.min = (...e)=>t.check(Hd(...e)), t.max = (...e)=>t.check(Gd(...e)), t.length = (...e)=>t.check(Kd(...e)), t.nonempty = (...e)=>t.check(Hd(1, ...e)), t.lowercase = (e)=>t.check(zd(e)), t.uppercase = (e)=>t.check(Wd(e)), t.trim = ()=>t.check(nf()), t.normalize = (...e)=>t.check(rf(...e)), t.toLowerCase = ()=>t.check(sf()), t.toUpperCase = ()=>t.check(of()), t.slugify = ()=>t.check(af());
    }), Ep = Ma("ZodString", (t, e)=>{
        Jl.init(t, e), Bp.init(t, e), t.email = (e)=>t.check(ld(bp, e)), t.url = (e)=>t.check(gd(Dp, e)), t.jwt = (e)=>t.check(Rd(hh, e)), t.emoji = (e)=>t.check(Ad(Mp, e)), t.guid = (e)=>t.check(md(vp, e)), t.uuid = (e)=>t.check(dd(Rp, e)), t.uuidv4 = (e)=>t.check(fd(Rp, e)), t.uuidv6 = (e)=>t.check(pd(Rp, e)), t.uuidv7 = (e)=>t.check(hd(Rp, e)), t.nanoid = (e)=>t.check(_d(Fp, e)), t.guid = (e)=>t.check(md(vp, e)), t.cuid = (e)=>t.check(yd($p, e)), t.cuid2 = (e)=>t.check(wd(Hp, e)), t.ulid = (e)=>t.check(Sd(Vp, e)), t.base64 = (e)=>t.check(kd(ch, e)), t.base64url = (e)=>t.check(vd(mh, e)), t.xid = (e)=>t.check(Jd(Wp, e)), t.ksuid = (e)=>t.check(Bd(jp, e)), t.ipv4 = (e)=>t.check(Ed(Zp, e)), t.ipv6 = (e)=>t.check(Id(nh, e)), t.cidrv4 = (e)=>t.check(Cd(ih, e)), t.cidrv6 = (e)=>t.check(bd(ah, e)), t.e164 = (e)=>t.check(qd(fh, e)), t.datetime = (e)=>t.check(ep(e)), t.date = (e)=>t.check(np(e)), t.time = (e)=>t.check(ip(e)), t.duration = (e)=>t.check(ap(e));
    });
    function Ip(t) {
        return function(t, e) {
            return new t({
                type: "string",
                ...lu(e)
            });
        }(Ep, t);
    }
    const Cp = Ma("ZodStringFormat", (t, e)=>{
        Bl.init(t, e), Bp.init(t, e);
    }), bp = Ma("ZodEmail", (t, e)=>{
        Cl.init(t, e), Cp.init(t, e);
    });
    function kp(t) {
        return ld(bp, t);
    }
    const vp = Ma("ZodGUID", (t, e)=>{
        El.init(t, e), Cp.init(t, e);
    });
    function qp(t) {
        return md(vp, t);
    }
    const Rp = Ma("ZodUUID", (t, e)=>{
        Il.init(t, e), Cp.init(t, e);
    });
    function Pp(t) {
        return dd(Rp, t);
    }
    function Tp(t) {
        return fd(Rp, t);
    }
    function xp(t) {
        return pd(Rp, t);
    }
    function Np(t) {
        return hd(Rp, t);
    }
    const Dp = Ma("ZodURL", (t, e)=>{
        bl.init(t, e), Cp.init(t, e);
    });
    function Up(t) {
        return gd(Dp, t);
    }
    function Qp(t) {
        return gd(Dp, {
            protocol: /^https?$/,
            hostname: hc,
            ...lu(t)
        });
    }
    const Mp = Ma("ZodEmoji", (t, e)=>{
        kl.init(t, e), Cp.init(t, e);
    });
    function Op(t) {
        return Ad(Mp, t);
    }
    const Fp = Ma("ZodNanoID", (t, e)=>{
        vl.init(t, e), Cp.init(t, e);
    });
    function Lp(t) {
        return _d(Fp, t);
    }
    const $p = Ma("ZodCUID", (t, e)=>{
        ql.init(t, e), Cp.init(t, e);
    });
    function Gp(t) {
        return yd($p, t);
    }
    const Hp = Ma("ZodCUID2", (t, e)=>{
        Rl.init(t, e), Cp.init(t, e);
    });
    function Kp(t) {
        return wd(Hp, t);
    }
    const Vp = Ma("ZodULID", (t, e)=>{
        Pl.init(t, e), Cp.init(t, e);
    });
    function zp(t) {
        return Sd(Vp, t);
    }
    const Wp = Ma("ZodXID", (t, e)=>{
        Tl.init(t, e), Cp.init(t, e);
    });
    function Yp(t) {
        return Jd(Wp, t);
    }
    const jp = Ma("ZodKSUID", (t, e)=>{
        xl.init(t, e), Cp.init(t, e);
    });
    function Xp(t) {
        return Bd(jp, t);
    }
    const Zp = Ma("ZodIPv4", (t, e)=>{
        Ml.init(t, e), Cp.init(t, e);
    });
    function th(t) {
        return Ed(Zp, t);
    }
    const eh = Ma("ZodMAC", (t, e)=>{
        Fl.init(t, e), Cp.init(t, e);
    });
    function rh(t) {
        return function(t, e) {
            return new t({
                type: "string",
                format: "mac",
                check: "string_format",
                abort: !1,
                ...lu(e)
            });
        }(eh, t);
    }
    const nh = Ma("ZodIPv6", (t, e)=>{
        Ol.init(t, e), Cp.init(t, e);
    });
    function sh(t) {
        return Id(nh, t);
    }
    const ih = Ma("ZodCIDRv4", (t, e)=>{
        Ll.init(t, e), Cp.init(t, e);
    });
    function oh(t) {
        return Cd(ih, t);
    }
    const ah = Ma("ZodCIDRv6", (t, e)=>{
        $l.init(t, e), Cp.init(t, e);
    });
    function uh(t) {
        return bd(ah, t);
    }
    const ch = Ma("ZodBase64", (t, e)=>{
        Hl.init(t, e), Cp.init(t, e);
    });
    function lh(t) {
        return kd(ch, t);
    }
    const mh = Ma("ZodBase64URL", (t, e)=>{
        Kl.init(t, e), Cp.init(t, e);
    });
    function dh(t) {
        return vd(mh, t);
    }
    const fh = Ma("ZodE164", (t, e)=>{
        Vl.init(t, e), Cp.init(t, e);
    });
    function ph(t) {
        return qd(fh, t);
    }
    const hh = Ma("ZodJWT", (t, e)=>{
        zl.init(t, e), Cp.init(t, e);
    });
    function gh(t) {
        return Rd(hh, t);
    }
    const Ah = Ma("ZodCustomStringFormat", (t, e)=>{
        Wl.init(t, e), Cp.init(t, e);
    });
    function _h(t, e, r = {}) {
        return cf(Ah, t, e, r);
    }
    function yh(t) {
        return cf(Ah, "hostname", pc, t);
    }
    function wh(t) {
        return cf(Ah, "hex", Rc, t);
    }
    function Sh(e, r) {
        const n = `${e}_${r?.enc ?? "hex"}`, s = t[n];
        if (!s) throw new Error(`Unrecognized hash format: ${n}`);
        return cf(Ah, n, s, r);
    }
    const Jh = Ma("ZodNumber", (t, e)=>{
        Yl.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>_f(t, e, r), t.gt = (e, r)=>t.check(xd(e, r)), t.gte = (e, r)=>t.check(Nd(e, r)), t.min = (e, r)=>t.check(Nd(e, r)), t.lt = (e, r)=>t.check(Pd(e, r)), t.lte = (e, r)=>t.check(Td(e, r)), t.max = (e, r)=>t.check(Td(e, r)), t.int = (e)=>t.check(Ih(e)), t.safe = (e)=>t.check(Ih(e)), t.positive = (e)=>t.check(xd(0, e)), t.nonnegative = (e)=>t.check(Nd(0, e)), t.negative = (e)=>t.check(Pd(0, e)), t.nonpositive = (e)=>t.check(Td(0, e)), t.multipleOf = (e, r)=>t.check(Od(e, r)), t.step = (e, r)=>t.check(Od(e, r)), t.finite = ()=>t;
        const r = t._zod.bag;
        t.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? .5), t.isFinite = !0, t.format = r.format ?? null;
    });
    function Bh(t) {
        return function(t, e) {
            return new t({
                type: "number",
                checks: [],
                ...lu(e)
            });
        }(Jh, t);
    }
    const Eh = Ma("ZodNumberFormat", (t, e)=>{
        jl.init(t, e), Jh.init(t, e);
    });
    function Ih(t) {
        return function(t, e) {
            return new t({
                type: "number",
                check: "number_format",
                abort: !1,
                format: "safeint",
                ...lu(e)
            });
        }(Eh, t);
    }
    function Ch(t) {
        return function(t, e) {
            return new t({
                type: "number",
                check: "number_format",
                abort: !1,
                format: "float32",
                ...lu(e)
            });
        }(Eh, t);
    }
    function bh(t) {
        return function(t, e) {
            return new t({
                type: "number",
                check: "number_format",
                abort: !1,
                format: "float64",
                ...lu(e)
            });
        }(Eh, t);
    }
    function kh(t) {
        return function(t, e) {
            return new t({
                type: "number",
                check: "number_format",
                abort: !1,
                format: "int32",
                ...lu(e)
            });
        }(Eh, t);
    }
    function vh(t) {
        return function(t, e) {
            return new t({
                type: "number",
                check: "number_format",
                abort: !1,
                format: "uint32",
                ...lu(e)
            });
        }(Eh, t);
    }
    const qh = Ma("ZodBoolean", (t, e)=>{
        Xl.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (t, e, r)=>yf(0, 0, e);
    });
    function Rh(t) {
        return function(t, e) {
            return new t({
                type: "boolean",
                ...lu(e)
            });
        }(qh, t);
    }
    const Ph = Ma("ZodBigInt", (t, e)=>{
        Zl.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (t, e, r)=>wf(0, t), t.gte = (e, r)=>t.check(Nd(e, r)), t.min = (e, r)=>t.check(Nd(e, r)), t.gt = (e, r)=>t.check(xd(e, r)), t.gte = (e, r)=>t.check(Nd(e, r)), t.min = (e, r)=>t.check(Nd(e, r)), t.lt = (e, r)=>t.check(Pd(e, r)), t.lte = (e, r)=>t.check(Td(e, r)), t.max = (e, r)=>t.check(Td(e, r)), t.positive = (e)=>t.check(xd(BigInt(0), e)), t.negative = (e)=>t.check(Pd(BigInt(0), e)), t.nonpositive = (e)=>t.check(Td(BigInt(0), e)), t.nonnegative = (e)=>t.check(Nd(BigInt(0), e)), t.multipleOf = (e, r)=>t.check(Od(e, r));
        const r = t._zod.bag;
        t.minValue = r.minimum ?? null, t.maxValue = r.maximum ?? null, t.format = r.format ?? null;
    });
    function Th(t) {
        return function(t, e) {
            return new t({
                type: "bigint",
                ...lu(e)
            });
        }(Ph, t);
    }
    const xh = Ma("ZodBigIntFormat", (t, e)=>{
        tm.init(t, e), Ph.init(t, e);
    });
    function Nh(t) {
        return function(t, e) {
            return new t({
                type: "bigint",
                check: "bigint_format",
                abort: !1,
                format: "int64",
                ...lu(e)
            });
        }(xh, t);
    }
    function Dh(t) {
        return function(t, e) {
            return new t({
                type: "bigint",
                check: "bigint_format",
                abort: !1,
                format: "uint64",
                ...lu(e)
            });
        }(xh, t);
    }
    const Uh = Ma("ZodSymbol", (t, e)=>{
        em.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (t, e, r)=>Sf(0, t);
    });
    function Qh(t) {
        return function(t, e) {
            return new t({
                type: "symbol",
                ...lu(e)
            });
        }(Uh, t);
    }
    const Mh = Ma("ZodUndefined", (t, e)=>{
        rm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (t, e, r)=>Bf(0, t);
    });
    function Oh(t) {
        return function(t, e) {
            return new t({
                type: "undefined",
                ...lu(e)
            });
        }(Mh, t);
    }
    const Fh = Ma("ZodNull", (t, e)=>{
        nm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (t, e, r)=>Jf(0, t, e);
    });
    function Lh(t) {
        return function(t, e) {
            return new t({
                type: "null",
                ...lu(e)
            });
        }(Fh, t);
    }
    const $h = Ma("ZodAny", (t, e)=>{
        sm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (t, e, r)=>{};
    });
    function Gh() {
        return function(t) {
            return new t({
                type: "any"
            });
        }($h);
    }
    const Hh = Ma("ZodUnknown", (t, e)=>{
        im.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (t, e, r)=>{};
    });
    function Kh() {
        return function(t) {
            return new t({
                type: "unknown"
            });
        }(Hh);
    }
    const Vh = Ma("ZodNever", (t, e)=>{
        om.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (t, e, r)=>If(0, 0, e);
    });
    function zh(t) {
        return function(t, e) {
            return new t({
                type: "never",
                ...lu(e)
            });
        }(Vh, t);
    }
    const Wh = Ma("ZodVoid", (t, e)=>{
        am.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (t, e, r)=>Ef(0, t);
    });
    function Yh(t) {
        return function(t, e) {
            return new t({
                type: "void",
                ...lu(e)
            });
        }(Wh, t);
    }
    const jh = Ma("ZodDate", (t, e)=>{
        um.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (t, e, r)=>Cf(0, t), t.min = (e, r)=>t.check(Nd(e, r)), t.max = (e, r)=>t.check(Td(e, r));
        const r = t._zod.bag;
        t.minDate = r.minimum ? new Date(r.minimum) : null, t.maxDate = r.maximum ? new Date(r.maximum) : null;
    });
    function Xh(t) {
        return function(t, e) {
            return new t({
                type: "date",
                ...lu(e)
            });
        }(jh, t);
    }
    const Zh = Ma("ZodArray", (t, e)=>{
        lm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>Qf(t, e, r, n), t.element = e.element, t.min = (e, r)=>t.check(Hd(e, r)), t.nonempty = (e)=>t.check(Hd(1, e)), t.max = (e, r)=>t.check(Gd(e, r)), t.length = (e, r)=>t.check(Kd(e, r)), t.unwrap = ()=>t.element;
    });
    function tg(t, e) {
        return function(t, e, r) {
            return new t({
                type: "array",
                element: e,
                ...lu(r)
            });
        }(Zh, t, e);
    }
    function eg(t) {
        const e = t._zod.def.shape;
        return Ig(Object.keys(e));
    }
    const rg = Ma("ZodObject", (t, e)=>{
        hm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>Mf(t, e, r, n), ja(t, "shape", ()=>e.shape), t.keyof = ()=>Ig(Object.keys(t._zod.def.shape)), t.catchall = (e)=>t.clone({
                ...t._zod.def,
                catchall: e
            }), t.passthrough = ()=>t.clone({
                ...t._zod.def,
                catchall: Kh()
            }), t.loose = ()=>t.clone({
                ...t._zod.def,
                catchall: Kh()
            }), t.strict = ()=>t.clone({
                ...t._zod.def,
                catchall: zh()
            }), t.strip = ()=>t.clone({
                ...t._zod.def,
                catchall: void 0
            }), t.extend = (e)=>(function(t, e) {
                if (!su(e)) throw new Error("Invalid input to extend: expected a plain object");
                const r = t._zod.def.checks;
                if (r && r.length > 0) {
                    const r = t._zod.def.shape;
                    for(const t in e)if (void 0 !== Object.getOwnPropertyDescriptor(r, t)) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
                }
                const n = Za(t._zod.def, {
                    get shape () {
                        const r = {
                            ...t._zod.def.shape,
                            ...e
                        };
                        return Xa(this, "shape", r), r;
                    }
                });
                return cu(t, n);
            })(t, e), t.safeExtend = (e)=>(function(t, e) {
                if (!su(e)) throw new Error("Invalid input to safeExtend: expected a plain object");
                const r = Za(t._zod.def, {
                    get shape () {
                        const r = {
                            ...t._zod.def.shape,
                            ...e
                        };
                        return Xa(this, "shape", r), r;
                    }
                });
                return cu(t, r);
            })(t, e), t.merge = (e)=>(function(t, e) {
                const r = Za(t._zod.def, {
                    get shape () {
                        const r = {
                            ...t._zod.def.shape,
                            ...e._zod.def.shape
                        };
                        return Xa(this, "shape", r), r;
                    },
                    get catchall () {
                        return e._zod.def.catchall;
                    },
                    checks: []
                });
                return cu(t, r);
            })(t, e), t.pick = (e)=>(function(t, e) {
                const r = t._zod.def, n = r.checks;
                if (n && n.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
                return cu(t, Za(t._zod.def, {
                    get shape () {
                        const t = {};
                        for(const n in e){
                            if (!(n in r.shape)) throw new Error(`Unrecognized key: "${n}"`);
                            e[n] && (t[n] = r.shape[n]);
                        }
                        return Xa(this, "shape", t), t;
                    },
                    checks: []
                }));
            })(t, e), t.omit = (e)=>(function(t, e) {
                const r = t._zod.def, n = r.checks;
                if (n && n.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
                const s = Za(t._zod.def, {
                    get shape () {
                        const n = {
                            ...t._zod.def.shape
                        };
                        for(const t in e){
                            if (!(t in r.shape)) throw new Error(`Unrecognized key: "${t}"`);
                            e[t] && delete n[t];
                        }
                        return Xa(this, "shape", n), n;
                    },
                    checks: []
                });
                return cu(t, s);
            })(t, e), t.partial = (...e)=>(function(t, e, r) {
                const n = e._zod.def.checks;
                if (n && n.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
                const s = Za(e._zod.def, {
                    get shape () {
                        const n = e._zod.def.shape, s = {
                            ...n
                        };
                        if (r) for(const e in r){
                            if (!(e in n)) throw new Error(`Unrecognized key: "${e}"`);
                            r[e] && (s[e] = t ? new t({
                                type: "optional",
                                innerType: n[e]
                            }) : n[e]);
                        }
                        else for(const e in n)s[e] = t ? new t({
                            type: "optional",
                            innerType: n[e]
                        }) : n[e];
                        return Xa(this, "shape", s), s;
                    },
                    checks: []
                });
                return cu(e, s);
            })(Tg, t, e[0]), t.required = (...e)=>(function(t, e, r) {
                const n = Za(e._zod.def, {
                    get shape () {
                        const n = e._zod.def.shape, s = {
                            ...n
                        };
                        if (r) for(const e in r){
                            if (!(e in s)) throw new Error(`Unrecognized key: "${e}"`);
                            r[e] && (s[e] = new t({
                                type: "nonoptional",
                                innerType: n[e]
                            }));
                        }
                        else for(const e in n)s[e] = new t({
                            type: "nonoptional",
                            innerType: n[e]
                        });
                        return Xa(this, "shape", s), s;
                    }
                });
                return cu(e, n);
            })(Gg, t, e[0]);
    });
    function ng(t, e) {
        const r = {
            type: "object",
            shape: t ?? {},
            ...lu(e)
        };
        return new rg(r);
    }
    function sg(t, e) {
        return new rg({
            type: "object",
            shape: t,
            catchall: zh(),
            ...lu(e)
        });
    }
    function ig(t, e) {
        return new rg({
            type: "object",
            shape: t,
            catchall: Kh(),
            ...lu(e)
        });
    }
    const og = Ma("ZodUnion", (t, e)=>{
        Am.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>Of(t, e, r, n), t.options = e.options;
    });
    function ag(t, e) {
        return new og({
            type: "union",
            options: t,
            ...lu(e)
        });
    }
    const ug = Ma("ZodXor", (t, e)=>{
        og.init(t, e), ym.init(t, e), t._zod.processJSONSchema = (e, r, n)=>Of(t, e, r, n), t.options = e.options;
    });
    function cg(t, e) {
        return new ug({
            type: "union",
            options: t,
            inclusive: !1,
            ...lu(e)
        });
    }
    const lg = Ma("ZodDiscriminatedUnion", (t, e)=>{
        og.init(t, e), wm.init(t, e);
    });
    function mg(t, e, r) {
        return new lg({
            type: "union",
            options: e,
            discriminator: t,
            ...lu(r)
        });
    }
    const dg = Ma("ZodIntersection", (t, e)=>{
        Sm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>Ff(t, e, r, n);
    });
    function fg(t, e) {
        return new dg({
            type: "intersection",
            left: t,
            right: e
        });
    }
    const pg = Ma("ZodTuple", (t, e)=>{
        Em.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>Lf(t, e, r, n), t.rest = (e)=>t.clone({
                ...t._zod.def,
                rest: e
            });
    });
    function hg(t, e, r) {
        const n = e instanceof Sl;
        return new pg({
            type: "tuple",
            items: t,
            rest: n ? e : null,
            ...lu(n ? r : e)
        });
    }
    const gg = Ma("ZodRecord", (t, e)=>{
        Cm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>$f(t, e, r, n), t.keyType = e.keyType, t.valueType = e.valueType;
    });
    function Ag(t, e, r) {
        return new gg({
            type: "record",
            keyType: t,
            valueType: e,
            ...lu(r)
        });
    }
    function _g(t, e, r) {
        const n = cu(t);
        return n._zod.values = void 0, new gg({
            type: "record",
            keyType: n,
            valueType: e,
            ...lu(r)
        });
    }
    function yg(t, e, r) {
        return new gg({
            type: "record",
            keyType: t,
            valueType: e,
            mode: "loose",
            ...lu(r)
        });
    }
    const wg = Ma("ZodMap", (t, e)=>{
        bm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (t, e, r)=>Df(0, t), t.keyType = e.keyType, t.valueType = e.valueType, t.min = (...e)=>t.check(Ld(...e)), t.nonempty = (e)=>t.check(Ld(1, e)), t.max = (...e)=>t.check(Fd(...e)), t.size = (...e)=>t.check($d(...e));
    });
    function Sg(t, e, r) {
        return new wg({
            type: "map",
            keyType: t,
            valueType: e,
            ...lu(r)
        });
    }
    const Jg = Ma("ZodSet", (t, e)=>{
        vm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (t, e, r)=>Uf(0, t), t.min = (...e)=>t.check(Ld(...e)), t.nonempty = (e)=>t.check(Ld(1, e)), t.max = (...e)=>t.check(Fd(...e)), t.size = (...e)=>t.check($d(...e));
    });
    function Bg(t, e) {
        return new Jg({
            type: "set",
            valueType: t,
            ...lu(e)
        });
    }
    const Eg = Ma("ZodEnum", (t, e)=>{
        Rm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>bf(t, 0, r), t.enum = e.entries, t.options = Object.values(e.entries);
        const r = new Set(Object.keys(e.entries));
        t.extract = (t, n)=>{
            const s = {};
            for (const n of t){
                if (!r.has(n)) throw new Error(`Key ${n} not found in enum`);
                s[n] = e.entries[n];
            }
            return new Eg({
                ...e,
                checks: [],
                ...lu(n),
                entries: s
            });
        }, t.exclude = (t, n)=>{
            const s = {
                ...e.entries
            };
            for (const e of t){
                if (!r.has(e)) throw new Error(`Key ${e} not found in enum`);
                delete s[e];
            }
            return new Eg({
                ...e,
                checks: [],
                ...lu(n),
                entries: s
            });
        };
    });
    function Ig(t, e) {
        const r = Array.isArray(t) ? Object.fromEntries(t.map((t)=>[
                t,
                t
            ])) : t;
        return new Eg({
            type: "enum",
            entries: r,
            ...lu(e)
        });
    }
    function Cg(t, e) {
        return new Eg({
            type: "enum",
            entries: t,
            ...lu(e)
        });
    }
    const bg = Ma("ZodLiteral", (t, e)=>{
        Pm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>kf(t, e, r), t.values = new Set(e.values), Object.defineProperty(t, "value", {
            get () {
                if (e.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
                return e.values[0];
            }
        });
    });
    function kg(t, e) {
        return new bg({
            type: "literal",
            values: Array.isArray(t) ? t : [
                t
            ],
            ...lu(e)
        });
    }
    const vg = Ma("ZodFile", (t, e)=>{
        Tm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>Rf(t, 0, r), t.min = (e, r)=>t.check(Ld(e, r)), t.max = (e, r)=>t.check(Fd(e, r)), t.mime = (e, r)=>t.check(tf(Array.isArray(e) ? e : [
                e
            ], r));
    });
    function qg(t) {
        return function(t, e) {
            return new t({
                type: "file",
                ...lu(e)
            });
        }(vg, t);
    }
    const Rg = Ma("ZodTransform", (t, e)=>{
        xm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (t, e, r)=>Nf(0, t), t._zod.parse = (r, n)=>{
            if ("backward" === n.direction) throw new Fa(t.constructor.name);
            r.addIssue = (n)=>{
                if ("string" == typeof n) r.issues.push(wu(n, r.value, e));
                else {
                    const e = n;
                    e.fatal && (e.continue = !1), e.code ?? (e.code = "custom"), e.input ?? (e.input = r.value), e.inst ?? (e.inst = t), r.issues.push(wu(e));
                }
            };
            const s = e.transform(r.value, r);
            return s instanceof Promise ? s.then((t)=>(r.value = t, r)) : (r.value = s, r);
        };
    });
    function Pg(t) {
        return new Rg({
            type: "transform",
            transform: t
        });
    }
    const Tg = Ma("ZodOptional", (t, e)=>{
        Dm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>Xf(t, e, 0, n), t.unwrap = ()=>t._zod.def.innerType;
    });
    function xg(t) {
        return new Tg({
            type: "optional",
            innerType: t
        });
    }
    const Ng = Ma("ZodExactOptional", (t, e)=>{
        Um.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>Xf(t, e, 0, n), t.unwrap = ()=>t._zod.def.innerType;
    });
    function Dg(t) {
        return new Ng({
            type: "optional",
            innerType: t
        });
    }
    const Ug = Ma("ZodNullable", (t, e)=>{
        Qm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>Gf(t, e, r, n), t.unwrap = ()=>t._zod.def.innerType;
    });
    function Qg(t) {
        return new Ug({
            type: "nullable",
            innerType: t
        });
    }
    function Mg(t) {
        return xg(Qg(t));
    }
    const Og = Ma("ZodDefault", (t, e)=>{
        Mm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>Kf(t, e, r, n), t.unwrap = ()=>t._zod.def.innerType, t.removeDefault = t.unwrap;
    });
    function Fg(t, e) {
        return new Og({
            type: "default",
            innerType: t,
            get defaultValue () {
                return "function" == typeof e ? e() : iu(e);
            }
        });
    }
    const Lg = Ma("ZodPrefault", (t, e)=>{
        Fm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>Vf(t, e, r, n), t.unwrap = ()=>t._zod.def.innerType;
    });
    function $g(t, e) {
        return new Lg({
            type: "prefault",
            innerType: t,
            get defaultValue () {
                return "function" == typeof e ? e() : iu(e);
            }
        });
    }
    const Gg = Ma("ZodNonOptional", (t, e)=>{
        Lm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>Hf(t, e, 0, n), t.unwrap = ()=>t._zod.def.innerType;
    });
    function Hg(t, e) {
        return new Gg({
            type: "nonoptional",
            innerType: t,
            ...lu(e)
        });
    }
    const Kg = Ma("ZodSuccess", (t, e)=>{
        Gm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (t, e, r)=>Pf(0, 0, e), t.unwrap = ()=>t._zod.def.innerType;
    });
    function Vg(t) {
        return new Kg({
            type: "success",
            innerType: t
        });
    }
    const zg = Ma("ZodCatch", (t, e)=>{
        Hm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>zf(t, e, r, n), t.unwrap = ()=>t._zod.def.innerType, t.removeCatch = t.unwrap;
    });
    function Wg(t, e) {
        return new zg({
            type: "catch",
            innerType: t,
            catchValue: "function" == typeof e ? e : ()=>e
        });
    }
    const Yg = Ma("ZodNaN", (t, e)=>{
        Km.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (t, e, r)=>vf(0, t);
    });
    function jg(t) {
        return function(t, e) {
            return new t({
                type: "nan",
                ...lu(e)
            });
        }(Yg, t);
    }
    const Xg = Ma("ZodPipe", (t, e)=>{
        Vm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>Wf(t, e, 0, n), t.in = e.in, t.out = e.out;
    });
    function Zg(t, e) {
        return new Xg({
            type: "pipe",
            in: t,
            out: e
        });
    }
    const tA = Ma("ZodCodec", (t, e)=>{
        Xg.init(t, e), Wm.init(t, e);
    });
    function eA(t, e, r) {
        return new tA({
            type: "pipe",
            in: t,
            out: e,
            transform: r.decode,
            reverseTransform: r.encode
        });
    }
    const rA = Ma("ZodReadonly", (t, e)=>{
        Xm.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>Yf(t, e, r, n), t.unwrap = ()=>t._zod.def.innerType;
    });
    function nA(t) {
        return new rA({
            type: "readonly",
            innerType: t
        });
    }
    const sA = Ma("ZodTemplateLiteral", (t, e)=>{
        td.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>qf(t, 0, r);
    });
    function iA(t, e) {
        return new sA({
            type: "template_literal",
            parts: t,
            ...lu(e)
        });
    }
    const oA = Ma("ZodLazy", (t, e)=>{
        nd.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>Zf(t, e, 0, n), t.unwrap = ()=>t._zod.def.getter();
    });
    function aA(t) {
        return new oA({
            type: "lazy",
            getter: t
        });
    }
    const uA = Ma("ZodPromise", (t, e)=>{
        rd.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (e, r, n)=>jf(t, e, 0, n), t.unwrap = ()=>t._zod.def.innerType;
    });
    function cA(t) {
        return new uA({
            type: "promise",
            innerType: t
        });
    }
    const lA = Ma("ZodFunction", (t, e)=>{
        ed.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (t, e, r)=>xf(0, t);
    });
    function mA(t) {
        return new lA({
            type: "function",
            input: Array.isArray(t?.input) ? hg(t?.input) : t?.input ?? tg(Kh()),
            output: t?.output ?? Kh()
        });
    }
    const dA = Ma("ZodCustom", (t, e)=>{
        sd.init(t, e), Jp.init(t, e), t._zod.processJSONSchema = (t, e, r)=>Tf(0, t);
    });
    function fA(t) {
        const e = new Wc({
            check: "custom"
        });
        return e._zod.check = t, e;
    }
    function pA(t, e) {
        return function(t, e, r) {
            const n = lu(r);
            return n.abort ?? (n.abort = !0), new t({
                type: "custom",
                check: "custom",
                fn: e,
                ...n
            });
        }(dA, t ?? (()=>!0), e);
    }
    function hA(t, e = {}) {
        return function(t, e, r) {
            return new t({
                type: "custom",
                check: "custom",
                fn: e,
                ...lu(r)
            });
        }(dA, t, e);
    }
    function gA(t) {
        return uf(t);
    }
    const AA = function(t) {
        const e = new Wc({
            check: "describe"
        });
        return e._zod.onattach = [
            (e)=>{
                const r = cd.get(e) ?? {};
                cd.add(e, {
                    ...r,
                    description: t
                });
            }
        ], e._zod.check = ()=>{}, e;
    }, _A = function(t) {
        const e = new Wc({
            check: "meta"
        });
        return e._zod.onattach = [
            (e)=>{
                const r = cd.get(e) ?? {};
                cd.add(e, {
                    ...r,
                    ...t
                });
            }
        ], e._zod.check = ()=>{}, e;
    };
    function yA(t, e = {}) {
        const r = new dA({
            type: "custom",
            check: "custom",
            fn: (e)=>e instanceof t,
            abort: !0,
            ...lu(e)
        });
        return r._zod.bag.Class = t, r._zod.check = (e)=>{
            e.value instanceof t || e.issues.push({
                code: "invalid_type",
                expected: t.name,
                input: e.value,
                inst: r,
                path: [
                    ...r._zod.def.path ?? []
                ]
            });
        }, r;
    }
    const wA = (...t)=>(function(t, e) {
            const r = lu(e);
            let n = r.truthy ?? [
                "true",
                "1",
                "yes",
                "on",
                "y",
                "enabled"
            ], s = r.falsy ?? [
                "false",
                "0",
                "no",
                "off",
                "n",
                "disabled"
            ];
            "sensitive" !== r.case && (n = n.map((t)=>"string" == typeof t ? t.toLowerCase() : t), s = s.map((t)=>"string" == typeof t ? t.toLowerCase() : t));
            const i = new Set(n), o = new Set(s), a = t.Codec ?? Wm, u = t.Boolean ?? Xl, c = new a({
                type: "pipe",
                in: new (t.String ?? Jl)({
                    type: "string",
                    error: r.error
                }),
                out: new u({
                    type: "boolean",
                    error: r.error
                }),
                transform: (t, e)=>{
                    let n = t;
                    return "sensitive" !== r.case && (n = n.toLowerCase()), !!i.has(n) || !o.has(n) && (e.issues.push({
                        code: "invalid_value",
                        expected: "stringbool",
                        values: [
                            ...i,
                            ...o
                        ],
                        input: e.value,
                        inst: c,
                        continue: !1
                    }), {});
                },
                reverseTransform: (t, e)=>!0 === t ? n[0] || "true" : s[0] || "false",
                error: r.error
            });
            return c;
        })({
            Codec: tA,
            Boolean: qh,
            String: Ep
        }, ...t);
    function SA(t) {
        const e = aA(()=>ag([
                Ip(t),
                Bh(),
                Rh(),
                Lh(),
                tg(e),
                Ag(Ip(), e)
            ]));
        return e;
    }
    function JA(t, e) {
        return Zg(Pg(t), e);
    }
    const BA = "custom";
    var EA;
    EA || (EA = {});
    new Set([
        "$schema",
        "$ref",
        "$defs",
        "definitions",
        "$id",
        "id",
        "$comment",
        "$anchor",
        "$vocabulary",
        "$dynamicRef",
        "$dynamicAnchor",
        "type",
        "enum",
        "const",
        "anyOf",
        "oneOf",
        "allOf",
        "not",
        "properties",
        "required",
        "additionalProperties",
        "patternProperties",
        "propertyNames",
        "minProperties",
        "maxProperties",
        "items",
        "prefixItems",
        "additionalItems",
        "minItems",
        "maxItems",
        "uniqueItems",
        "contains",
        "minContains",
        "maxContains",
        "minLength",
        "maxLength",
        "pattern",
        "format",
        "minimum",
        "maximum",
        "exclusiveMinimum",
        "exclusiveMaximum",
        "multipleOf",
        "description",
        "default",
        "contentEncoding",
        "contentMediaType",
        "contentSchema",
        "unevaluatedItems",
        "unevaluatedProperties",
        "if",
        "then",
        "else",
        "dependentSchemas",
        "dependentRequired",
        "nullable",
        "readOnly"
    ]);
    $a({
        localeError: od()
    });
    ng({
        lifecycle: Ig([
            "off",
            "default-on",
            "default-off",
            "hidden",
            "end-of-life",
            "internal"
        ]),
        pickerDisplayName: Ip().min(1).nullish(),
        upgradeModelId: Ip().min(1).nullish()
    }), Object.keys({
        agent_goal_continuation: {
            client: !0,
            default: !0
        },
        nal_websocket_client: {
            client: !0,
            default: !1
        },
        agent_queued_prompt_new_request_id: {
            client: !0,
            default: !1
        },
        org_billing_admin_role: {
            client: !0,
            default: !1
        },
        team_members_show_org_admins: {
            client: !0,
            default: !0
        },
        org_team_settings_copy_on_create: {
            client: !0,
            default: !0
        },
        org_team_settings_copy_to_existing_team: {
            client: !0,
            default: !1
        },
        org_credit_request_button_hide: {
            client: !0,
            default: !1
        },
        sso_jit_auto_enrollment_settings: {
            client: !0,
            default: !1
        },
        sand_mobile_session_upgrade: {
            client: !0,
            default: !0
        },
        remote_agent_host_mobile: {
            client: !0,
            default: !1
        },
        response_comparison_comment_prompt: {
            client: !0,
            default: !1
        },
        cursor_new_colors: {
            client: !0,
            default: !1
        },
        grok_bot_setup_checklist: {
            client: !0,
            default: !0
        },
        grok_bot_hibernated_owner_vm_termination: {
            client: !0,
            default: !0
        },
        grok_bot_team_bot_group_restrictions: {
            client: !0,
            default: !1
        },
        glass_grok_bot_topbar_cta_show: {
            client: !0,
            default: !1,
            requiresAuthenticatedBootstrap: !0
        },
        grok_bot_admin_enterprise_controls_frontend_enabled: {
            client: !0,
            default: !1
        },
        grok_bot_merged_bots_view_enabled: {
            client: !0,
            default: !1
        },
        dashboard_grok_bot_onboarding_checklist: {
            client: !0,
            default: !1
        },
        dashboard_team_checklist_origin_setup: {
            client: !0,
            default: !1
        },
        dashboard_grok_bot_terms: {
            client: !0,
            default: !1
        },
        gb_block_papered_org_signups: {
            client: !0,
            default: !1
        },
        sand_mobile_notification_sounds: {
            client: !0,
            default: !1
        },
        sand_mobile_agent_computer_console: {
            client: !0,
            default: !0
        },
        sand_mobile_i18n: {
            client: !0,
            default: !0
        },
        sand_mobile_home_unread_jump_pills: {
            client: !0,
            default: !1
        },
        sand_mobile_failures_screen: {
            client: !0,
            default: !1
        },
        sand_mobile_unified_marketplace: {
            client: !0,
            default: !1
        },
        sand_mobile_feedback_kill_switch: {
            client: !0,
            default: !1
        },
        sand_mobile_app_store_update_indicator: {
            client: !0,
            default: !0
        },
        sand_mobile_profile_multimedia_tabs: {
            client: !0,
            default: !0
        },
        sand_mobile_slash_skill_trigger: {
            client: !0,
            default: !0
        },
        sand_mobile_dictation_diagnostics: {
            client: !0,
            default: !0
        },
        sand_mobile_manage_subscription_kill_switch: {
            client: !0,
            default: !1
        },
        sand_mobile_change_limit_kill_switch: {
            client: !0,
            default: !1
        },
        sand_enable_home_pull_to_refresh: {
            client: !0,
            default: !1
        },
        sand_special_settings: {
            client: !0,
            default: !1
        },
        sand_messages_tools: {
            client: !0,
            default: !1
        },
        sand_mobile_local_tools: {
            client: !0,
            default: !1
        },
        sand_connected_activity_tool: {
            client: !0,
            default: !1
        },
        grok_bot_hide_internal_details: {
            client: !0,
            default: !0
        },
        grok_bot_active_reactions: {
            client: !0,
            default: !0
        },
        grok_bot_link_items: {
            client: !0,
            default: !1
        },
        grok_bot_renamed_prompt_markers: {
            client: !0,
            default: !1
        },
        sand_automation_agent_gone_terminal: {
            client: !0,
            default: !1
        },
        grok_bot_builtin_admin_tool_policy: {
            client: !0,
            default: !1
        },
        mcp_grant_migration_enabled: {
            client: !0,
            default: !1
        },
        hosted_mcp_routing_enabled: {
            client: !0,
            default: !1
        },
        grok_bot_durable_identity: {
            client: !0,
            default: !0
        },
        grok_bot_durable_identity_writes: {
            client: !0,
            default: !0
        },
        grok_bot_identity_backfill: {
            client: !0,
            default: !0
        },
        grok_bot_temporal_harness: {
            client: !0,
            default: !1
        },
        grok_bot_stripe_link: {
            client: !0,
            default: !0
        },
        grok_bot_spend_approval_passkey: {
            client: !0,
            default: !1
        },
        sand_memory_dreaming: {
            client: !0,
            default: !1
        },
        sand_1pass_manual_service_acct: {
            client: !0,
            default: !0
        },
        sand_new_1pass: {
            client: !0,
            default: !1
        },
        sand_cloud_agent_artifacts: {
            client: !0,
            default: !0
        },
        sand_cloud_agent_status_stream: {
            client: !0,
            default: !1
        },
        grok_bot_cloud_agent_durable_watch: {
            client: !0,
            default: !1
        },
        grok_bot_cloud_agent_secret_forwarding: {
            client: !0,
            default: !1
        },
        grok_bot_mcp_catalog_status_killswitch: {
            client: !0,
            default: !1
        },
        sand_desktop_scm_connect: {
            client: !0,
            default: !1
        },
        sand_computer_use_unicode_typing: {
            client: !0,
            default: !1
        },
        sand_on_demand_settings: {
            client: !0,
            default: !1
        },
        store_billed_web_on_demand: {
            client: !0,
            default: !0
        },
        sand_notification_sounds: {
            client: !0,
            default: !1
        },
        sand_scheduled_computer_updates: {
            client: !0,
            default: !1,
            requiresAuthenticatedBootstrap: !0
        },
        grok_bot_network_debugger: {
            client: !0,
            default: !1
        },
        grok_bot_form_vault: {
            client: !0,
            default: !1
        },
        sand_agent_network: {
            client: !0,
            default: !1
        },
        sand_draft_external_message: {
            client: !0,
            default: !0
        },
        sand_draft_external_message_by_default: {
            client: !0,
            default: !1
        },
        sand_auto_review_selector: {
            client: !0,
            default: !1
        },
        sand_enable_pressure_cpu_profiler: {
            client: !0,
            default: !0
        },
        sand_enable_accent_theming: {
            client: !0,
            default: !1
        },
        grok_bot_all_bots_color_theming: {
            client: !0,
            default: !1
        },
        sand_xvf_typeface: {
            client: !0,
            default: !1
        },
        sand_anonymized_egress_telemetry: {
            client: !0,
            default: !0
        },
        service_account_spend_limit_enforcement: {
            client: !0,
            default: !1
        },
        sand_action_audit_logs: {
            client: !0,
            default: !1
        },
        grok_bot_conversation_gc: {
            client: !0,
            default: !0
        },
        sand_enable_bot2bot_cloud_agent_ui: {
            client: !0,
            default: !1,
            requiresAuthenticatedBootstrap: !0
        },
        sand_hide_at_mentions: {
            client: !0,
            default: !1
        },
        sand_agent_titles: {
            client: !0,
            default: !0
        },
        sand_stream_idle_deadline: {
            client: !0,
            default: !0
        },
        sand_enable_spoof_gpu: {
            client: !0,
            default: !1
        },
        sand_browser_hardware_profile: {
            client: !0,
            default: !1
        },
        sand_box_store_skip_inaccessible: {
            client: !0,
            default: !1
        },
        sand_working_state_warming: {
            client: !0,
            default: !0,
            requiresAuthenticatedBootstrap: !0
        },
        grok_bot_box_harness_turns_blocked: {
            client: !0,
            default: !1
        },
        sand_web_bot_auth_signing: {
            client: !0,
            default: !0
        },
        sand_web_bot_auth_sign_xhr_fetch: {
            client: !0,
            default: !0
        },
        sand_web_bot_auth_sign_iframes: {
            client: !0,
            default: !1
        },
        sand_transcript_store_read: {
            client: !0,
            default: !1
        },
        sand_transcript_store_first: {
            client: !0,
            default: !1
        },
        sand_transcript_server_tail: {
            client: !0,
            default: !1
        },
        sand_attachments_via_server: {
            client: !0,
            default: !1
        },
        sand_better_link_unfurling: {
            client: !0,
            default: !0
        },
        grok_bot_link_chip_preload: {
            client: !0,
            default: !1
        },
        sand_create_temporal_agents: {
            client: !0,
            default: !1
        },
        sand_client_pause: {
            client: !0,
            default: !1
        },
        sand_desktop_away_park: {
            client: !0,
            default: !1
        },
        sand_desktop_present_park: {
            client: !0,
            default: !1
        },
        sand_roster_waking_hold: {
            client: !0,
            default: !1
        },
        sand_sidebar_activity_recency: {
            client: !0,
            default: !1
        },
        sand_get_grok_bot_ios: {
            client: !0,
            default: !0
        },
        sand_grok_main_agent: {
            client: !0,
            default: !1
        },
        sand_widget_v0: {
            client: !0,
            default: !1
        },
        sand_tasks: {
            client: !0,
            default: !1
        },
        sand_chat_prose_15px: {
            client: !0,
            default: !1
        },
        sand_new_connect_button: {
            client: !0,
            default: !1
        },
        sand_rich_text: {
            client: !0,
            default: !1
        },
        grok_bot_draft_revision_highlight: {
            client: !0,
            default: !1
        },
        sand_profile_photo_edit: {
            client: !0,
            default: !1,
            requiresAuthenticatedBootstrap: !0
        },
        sand_hide_working_dot: {
            client: !0,
            default: !1
        },
        sand_invite_teammates: {
            client: !0,
            default: !1,
            requiresAuthenticatedBootstrap: !0
        },
        sand_grok_force_main_agent_selection: {
            client: !0,
            default: !1
        },
        sand_desktop_mount: {
            client: !0,
            default: !1
        },
        sand_marketplace_for_you_auth_aware: {
            client: !0,
            default: !1
        },
        sand_header_template_share_menu: {
            client: !0,
            default: !0
        },
        grok_bot_multiplayer: {
            client: !0,
            default: !1
        },
        grok_bot_group_chats: {
            client: !0,
            default: !1
        },
        grok_bot_team_bot_managers: {
            client: !0,
            default: !1
        },
        grok_bot_team_bot_access_list: {
            client: !0,
            default: !1
        },
        grok_bot_team_exclude_gsuite_plugins: {
            client: !0,
            default: !1
        },
        grok_bot_agent_mail: {
            client: !0,
            default: !1
        },
        grok_bot_agent_mail_multiple_inboxes: {
            client: !0,
            default: !1
        },
        grok_bot_scm_connect_card: {
            client: !0,
            default: !1
        },
        grok_bot_check_subscription_usage: {
            client: !0,
            default: !1
        },
        grok_bot_search_bot_templates: {
            client: !0,
            default: !1
        },
        grok_bot_template_onboarding: {
            client: !0,
            default: !0
        },
        grok_bot_documents: {
            client: !0,
            default: !1
        },
        grok_bot_documents_ui: {
            client: !0,
            default: !1
        },
        grok_bot_library_pages: {
            client: !0,
            default: !1
        },
        grok_bot_page_stage_chat: {
            client: !0,
            default: !1
        },
        grok_bot_files_stage: {
            client: !0,
            default: !1
        },
        grok_bot_library_v2: {
            client: !0,
            default: !1
        },
        grok_bot_documents_web: {
            client: !0,
            default: !1
        },
        grok_bot_library_external_docs: {
            client: !0,
            default: !1
        },
        grok_bot_pages_search: {
            client: !0,
            default: !1
        },
        sand_simplified_right_pane: {
            client: !0,
            default: !1
        },
        sand_cloud_agent_tasks_card: {
            client: !0,
            default: !1
        },
        sand_import_chrome_cookies: {
            client: !0,
            default: !1
        },
        agent_prompted_cookie_sync: {
            client: !0,
            default: !1
        },
        sand_voice_call: {
            client: !0,
            default: !1
        },
        sand_pitman: {
            client: !0,
            default: !1
        },
        sand_voice_outbound_call: {
            client: !0,
            default: !1
        },
        sand_voice_call_overheard: {
            client: !0,
            default: !1
        },
        sand_voice_stay_silent: {
            client: !0,
            default: !1
        },
        sand_voice_async_update: {
            client: !0,
            default: !0
        },
        sand_voice_reconnect: {
            client: !0,
            default: !0
        },
        sand_voice_resumption: {
            client: !0,
            default: !1
        },
        sand_voice_steer: {
            client: !0,
            default: !0
        },
        sand_voice_final_word: {
            client: !0,
            default: !1
        },
        sand_voice_memos: {
            client: !0,
            default: !0
        },
        sand_voice_memo_speed: {
            client: !0,
            default: !0
        },
        sand_voice_server_harness: {
            client: !0,
            default: !0
        },
        sand_mcp_apps: {
            client: !0,
            default: !1
        },
        sand_team_bot_voice_available: {
            client: !0,
            default: !1
        },
        sand_voice_call_settings_for_teammates: {
            client: !0,
            default: !1
        },
        sand_focus_staleness_catch_up: {
            client: !0,
            default: !1
        },
        disable_smart_auto_show_routed_model: {
            client: !0,
            default: !1
        },
        migrate_default_model_config_to_auto_smart_cost: {
            client: !0,
            default: !1
        },
        app_open_model_nudge_pre_render_only: {
            client: !0,
            default: !1
        },
        new_automation_templates_slack_github_triggers: {
            client: !0,
            default: !0
        },
        customer_evals_ui: {
            client: !0,
            default: !1
        },
        git_diff_collect_stderr: {
            client: !0,
            default: !1
        },
        glass_chat_switch_tracing: {
            client: !0,
            default: !1
        },
        glass_webview_guest_render_throttle_killswitch: {
            client: !0,
            default: !1
        },
        glass_chat_switch_post_paint_commit: {
            client: !0,
            default: !1
        },
        glass_dispose_workspace_on_release: {
            client: !0,
            default: !1
        },
        glass_git_diff_meter: {
            client: !0,
            default: !1
        },
        glass_agent_worktree_reroot_prompt: {
            client: !0,
            default: !0
        },
        glass_cloud_meta_agents: {
            client: !0,
            default: !1
        },
        named_agent_single_session: {
            client: !0,
            default: !1
        },
        glass_empty_state_recommended_actions: {
            client: !0,
            default: !1
        },
        glass_branch_picker_redesign: {
            client: !0,
            default: !1
        },
        glass_triggers_naming: {
            client: !0,
            default: !1
        },
        unified_composer_tray_debug: {
            client: !0,
            default: !1
        },
        glass_remember_new_agent_environment_selection: {
            client: !0,
            default: !0
        },
        glass_editor_shadow_isolation: {
            client: !0,
            default: !0
        },
        glass_defer_shadow_style_rebuild: {
            client: !0,
            default: !1
        },
        sand_audit_logs: {
            client: !0,
            default: !0
        },
        origin_commit_email_verification_enabled: {
            client: !0,
            default: !1
        },
        limit_hit_ui_kill_switch: {
            client: !0,
            default: !1
        },
        rate_limited_reconnect_message_kill_switch: {
            client: !0,
            default: !1
        },
        glass_no_x_on_chips: {
            client: !0,
            default: !1
        },
        glass_preview_linear_tickets: {
            client: !0,
            default: !1
        },
        origin_repos: {
            client: !0,
            default: !1
        },
        origin_app_user_confirmation: {
            client: !0,
            default: !1
        },
        origin_app_deletion: {
            client: !0,
            default: !1
        },
        codebase_branches_redesign_in_progress: {
            client: !0,
            default: !1
        },
        automations_origin_request_reviewers: {
            client: !0,
            default: !1
        },
        origin_raw_file_links: {
            client: !0,
            default: !0
        },
        origin_inbox_osp_watch: {
            client: !0,
            default: !1
        },
        sand_auto_review: {
            client: !0,
            default: !0
        },
        sand_auto_review_admin_enforce: {
            client: !0,
            default: !0
        },
        sand_auto_review_admin_rules: {
            client: !0,
            default: !0
        },
        sand_local_egress_admin_control: {
            client: !0,
            default: !0
        },
        allow_disable_sudo_grok_bot: {
            client: !0,
            default: !1
        },
        smart_mode_classifier_shadow_mode: {
            client: !0,
            default: !1
        },
        ext_host_document_memory_estimates: {
            client: !0,
            default: !1
        },
        agent_exec_text_document_api_access_tracking: {
            client: !0,
            default: !1
        },
        cursor_agent_host: {
            client: !0,
            default: !1
        },
        cursor_agent_host_move_exec: {
            client: !0,
            default: !1
        },
        agent_host_own_request_context: {
            client: !0,
            default: !1
        },
        cursor_agent_host_owned_session_storage: {
            client: !0,
            default: !1
        },
        cursor_agent_host_session_storage_migrate_on_open: {
            client: !0,
            default: !1
        },
        cursor_agent_host_native_cloud_subagent: {
            client: !0,
            default: !1
        },
        cursor_agent_host_subagent_interactions: {
            client: !0,
            default: !1
        },
        agent_host_local_loop: {
            client: !0,
            default: !1
        },
        composer_send_prewarm: {
            client: !0,
            default: !1
        },
        glass_local_ollama: {
            client: !0,
            default: !1
        },
        agent_host_updater: {
            client: !0,
            default: !1
        },
        agent_host_private_inference: {
            client: !0,
            default: !1
        },
        defer_cursor_agent_exec_activation: {
            client: !0,
            default: !1
        },
        shell_exec_output_backpressure: {
            client: !0,
            default: !0
        },
        shell_exec_powershell_utf8_console: {
            client: !0,
            default: !1
        },
        file_watcher_metrics: {
            client: !0,
            default: !1
        },
        glass_shared_application_storage: {
            client: !0,
            default: !0
        },
        glass_startup_connect_transport: {
            client: !0,
            default: !1
        },
        reactivestorage_single_pass_stringify: {
            client: !0,
            default: !0
        },
        reactive_storage_size_report_enabled: {
            client: !0,
            default: !1
        },
        model_catalog_own_key: {
            client: !0,
            default: !1
        },
        slow_ipc_deserialize_sentry: {
            client: !0,
            default: !1
        },
        chunked_document_open_sync: {
            client: !0,
            default: !0
        },
        ripgrep_invocation_monitor: {
            client: !0,
            default: !1
        },
        rules_discovery_respect_cursorignore: {
            client: !0,
            default: !1
        },
        subagents_discovery_allow_external_symlinks: {
            client: !0,
            default: !1
        },
        grep_fallback_monitor: {
            client: !0,
            default: !1
        },
        crepe_lazy_external_git_index: {
            client: !0,
            default: !1
        },
        exthost_rpc_channel_history: {
            client: !0,
            default: !1
        },
        exthost_rpc_metrics: {
            client: !0,
            default: !1
        },
        remote_exthost_watchdog: {
            client: !0,
            default: !1
        },
        glass_remote_connection_dormancy: {
            client: !0,
            default: !1
        },
        disable_remote_workspace_reh_healthcheck: {
            client: !0,
            default: !1
        },
        service_account_repo_scope_use_installation_fanout: {
            client: !0,
            default: !1
        },
        cloud_agent_default_environment: {
            client: !0,
            default: !1
        },
        grok_bot_gkw_connectors: {
            client: !0,
            default: !1
        },
        ide_make_github_request_enabled: {
            client: !0,
            default: !1
        },
        customize_hooks_execution_log_detail: {
            client: !0,
            default: !0
        },
        skip_hooks_ready_wait_without_hooks: {
            client: !0,
            default: !1
        },
        dashboard_agent_requests_heatmap: {
            client: !0,
            default: !1
        },
        bugbot_enable_bulk_rules_upload_in_portal: {
            client: !0,
            default: !1
        },
        team_rule_agent_type_ui: {
            client: !0,
            default: !1
        },
        advanced_setup_for_self_hosted_gitlab_available: {
            client: !0,
            default: !1
        },
        gitlab_com_service_account_token_available: {
            client: !0,
            default: !1
        },
        enable_bitbucket_data_center_onboarding: {
            client: !0,
            default: !0
        },
        enable_bitbucket: {
            client: !0,
            default: !0
        },
        internal_team_user_profiles: {
            client: !0,
            default: !0
        },
        user_profile_glass: {
            client: !0,
            default: !0
        },
        automations_chain_prompts: {
            client: !0,
            default: !1
        },
        website_use_new_model_picker_for_automations: {
            client: !0,
            default: !0
        },
        green_dot_automation_status: {
            client: !0,
            default: !0
        },
        automations_validate_on_enable: {
            client: !0,
            default: !0
        },
        automations_retry_button: {
            client: !0,
            default: !1
        },
        managed_automations_team_revamp: {
            client: !0,
            default: !0
        },
        automations_gitlab_extended_triggers: {
            client: !0,
            default: !0
        },
        automations_bitbucket_extended_triggers: {
            client: !0,
            default: !1
        },
        automations_forge_agnostic_mirrors: {
            client: !0,
            default: !1
        },
        managed_agents_enabled: {
            client: !0,
            default: !1
        },
        custom_agents_enabled: {
            client: !0,
            default: !0
        },
        debug_bot_customer_facing_ui: {
            client: !0,
            default: !1
        },
        agents_bugbot_bottom_upsell: {
            client: !0,
            default: !1
        },
        review_agents_shared_growth: {
            client: !0,
            default: !1
        },
        automations_org_scoped_triggers_ui: {
            client: !0,
            default: !1
        },
        cloud_agents_no_repo_enabled: {
            client: !0,
            default: !0
        },
        cloud_agent_resubmit_from_message: {
            client: !0,
            default: !0
        },
        glass_cloud_agent_sidebar_ci_status: {
            client: !0,
            default: !1
        },
        cloud_agent_migration_resume_kickoff: {
            client: !0,
            default: !0
        },
        glass_cloud_agent_fork_from_turn: {
            client: !0,
            default: !0
        },
        cloud_agent_stop_permanent_stream_reconnect: {
            client: !0,
            default: !0
        },
        cloud_agent_repair_stalled_pane: {
            client: !0,
            default: !0
        },
        cloud_agent_plugins: {
            client: !0,
            default: !0
        },
        cloud_agent_origin_env_migration_rpc: {
            client: !0,
            default: !1
        },
        cloud_agent_environment_duplicate: {
            client: !0,
            default: !1
        },
        local_agent_subagent_state_blob_refs: {
            client: !0,
            default: !1
        },
        cloud_agent_env_setup_with_dockerfiles: {
            client: !0,
            default: !1
        },
        generalized_env_setup: {
            client: !0,
            default: !0
        },
        cloud_agent_ask_question_auto_answer: {
            client: !0,
            default: !1
        },
        cloud_agent_ask_question_auto_answer_timeout_setting: {
            client: !0,
            default: !1
        },
        cloud_agent_publish_ui: {
            client: !0,
            default: !1
        },
        grok_bot_publish_confirm_card: {
            client: !0,
            default: !1
        },
        cloud_agent_env_builds_default_enabled: {
            client: !0,
            default: !0
        },
        cloud_agent_migrate_to_builds_setup_agent_cta: {
            client: !0,
            default: !0
        },
        cloud_agent_transcript_reliability_controls: {
            client: !0,
            default: !0
        },
        local_agent_transcript_search_in_glass: {
            client: !0,
            default: !0
        },
        agent_conversation_search_tool: {
            client: !0,
            default: !0
        },
        disable_cloud_agent_transcript_indexing_in_glass: {
            client: !0,
            default: !1
        },
        nal_agent_retries: {
            client: !0,
            default: !0
        },
        cli_harness_telemetry: {
            client: !0,
            default: !1
        },
        cli_image_arg: {
            client: !0,
            default: !1
        },
        "x-chat-context": {
            client: !0,
            default: !1
        },
        referral_codes_v2: {
            client: !0,
            default: !0
        },
        p2p_referrals_v1: {
            client: !0,
            default: !0
        },
        oom_crash_watcher: {
            client: !0,
            default: !1
        },
        local_request_tracing: {
            client: !0,
            default: !1
        },
        local_request_trace_dd_slogs: {
            client: !0,
            default: !1
        },
        memory_pressure_profiling: {
            client: !0,
            default: !0
        },
        cpu_monitor_process_snapshot: {
            client: !0,
            default: !1
        },
        issue_traces_enabled: {
            client: !0,
            default: !0
        },
        glass_automations_ui: {
            client: !0,
            default: !0
        },
        glass_stable_diff_group_keys: {
            client: !0,
            default: !1
        },
        local_automations: {
            client: !0,
            default: !1
        },
        local_automations_nav: {
            client: !0,
            default: !1
        },
        glass_agent_confetti_cannon: {
            client: !0,
            default: !0
        },
        glass_install_plugin_tool_enabled: {
            client: !0,
            default: !0
        },
        cursor_backend_control_automation_mcp: {
            client: !0,
            default: !0
        },
        glass_multi_root_workspace_editing: {
            client: !0,
            default: !1
        },
        glass_search_first_repo_picker: {
            client: !0,
            default: !1
        },
        glass_remote_ssh_workspace_repair: {
            client: !0,
            default: !0
        },
        glass_remote_ssh_management_connection_token_loss_repair: {
            client: !0,
            default: !0
        },
        glass_custom_theme_support: {
            client: !0,
            default: !1
        },
        glass_send_feedback: {
            client: !0,
            default: !1
        },
        glass_project_filled_user_bubble: {
            client: !0,
            default: !1
        },
        environment_param_for_subagent: {
            client: !0,
            default: !1
        },
        glass_assistant_message_selection_feedback: {
            client: !0,
            default: !1
        },
        glass_turn_feedback_menu: {
            client: !0,
            default: !1
        },
        glass_turn_actions_reply: {
            client: !0,
            default: !1
        },
        glass_editor_panel_tab_copy_link: {
            client: !0,
            default: !1
        },
        glass_peaky_file_trees: {
            client: !0,
            default: !1
        },
        glass_markdown_table_expand: {
            client: !0,
            default: !1
        },
        glass_status_bar_environment_picker: {
            client: !0,
            default: !1
        },
        glass_project_agent_tool_rows: {
            client: !0,
            default: !1
        },
        glass_cloud_awaiting_turn_start: {
            client: !0,
            default: !1
        },
        glass_all_changes_diff_scope: {
            client: !0,
            default: !1
        },
        glass_scm_dynamic_base_branch: {
            client: !0,
            default: !1
        },
        glass_direct_github_connect: {
            client: !0,
            default: !1
        },
        scm_connect_in_app_ad: {
            client: !0,
            default: !0
        },
        scm_connect_in_app_ad_gitlab: {
            client: !0,
            default: !0
        },
        scm_connect_ad_cheap_probe: {
            client: !0,
            default: !0
        },
        import_cc_conversation: {
            client: !0,
            default: !0
        },
        import_cc_conversation_default: {
            client: !0,
            default: !1
        },
        glass_drafts_quick_action_pill: {
            client: !0,
            default: !1
        },
        glass_sidebar_source_metadata: {
            client: !0,
            default: !1
        },
        glass_sidebar_scroll_active_row_if_needed: {
            client: !0,
            default: !0
        },
        glass_sidebar_archive_toggle: {
            client: !0,
            default: !1
        },
        glass_sidebar_unified_group_headers: {
            client: !0,
            default: !1
        },
        glass_sidebar_env_icons: {
            client: !0,
            default: !1
        },
        glass_btw_side_question: {
            client: !0,
            default: !1
        },
        glass_side_chats: {
            client: !0,
            default: !0
        },
        cloud_agent_side_chats: {
            client: !0,
            default: !0
        },
        cloud_agent_desktop_lease: {
            client: !0,
            default: !0
        },
        cloud_agent_machine_resources: {
            client: !0,
            default: !1
        },
        cloud_project_coordinator_v2: {
            client: !0,
            default: !0
        },
        glass_project_worker_membership_rpc: {
            client: !0,
            default: !0
        },
        glass_composer_markdown_support: {
            client: !0,
            default: !1
        },
        glass_cloud_child_question_answered_in_child: {
            client: !0,
            default: !1
        },
        glass_cloud_pending_interactions: {
            client: !0,
            default: !1
        },
        prompt_input_image_annotation: {
            client: !0,
            default: !0
        },
        glass_lazy_file_tabs: {
            client: !0,
            default: !0
        },
        glass_temporary_pr_tabs: {
            client: !0,
            default: !1
        },
        glass_projects_enabled: {
            client: !0,
            default: !1
        },
        glass_project_pinning: {
            client: !0,
            default: !1
        },
        glass_enable_main_bot: {
            client: !0,
            default: !1
        },
        glass_main_bot_tasks: {
            client: !0,
            default: !1
        },
        internal_cloud_project_remote_control: {
            client: !0,
            default: !1
        },
        enable_add_local_agent_to_cloud_project: {
            client: !0,
            default: !1
        },
        remote_agent_host_glass: {
            client: !0,
            default: !1
        },
        glass_first_project_onboarding: {
            client: !0,
            default: !0
        },
        dev_only_force_first_project_experience: {
            client: !0,
            default: !1
        },
        staged_project_listing: {
            client: !0,
            default: !1
        },
        staged_project_instant_create: {
            client: !0,
            default: !1
        },
        staged_project_seeding: {
            client: !0,
            default: !1
        },
        glass_project_notes_tldr_card: {
            client: !0,
            default: !0
        },
        glass_project_notes_only_title_context: {
            client: !0,
            default: !1
        },
        glass_project_notes_notion_links: {
            client: !0,
            default: !1
        },
        glass_project_notes_document: {
            client: !0,
            default: !1
        },
        glass_project_notes_manual_status: {
            client: !0,
            default: !1
        },
        glass_project_notes_brief_view: {
            client: !0,
            default: !1
        },
        glass_project_notes_pr_stack_pill: {
            client: !0,
            default: !1
        },
        glass_project_tasks_pill: {
            client: !0,
            default: !1
        },
        glass_project_pinned_tab: {
            client: !0,
            default: !1
        },
        glass_projects_empty_state: {
            client: !0,
            default: !1
        },
        glass_projects_unread_divider: {
            client: !0,
            default: !0
        },
        glass_cloud_agents_unread_divider: {
            client: !0,
            default: !0
        },
        glass_local_agents_unread_divider: {
            client: !0,
            default: !0
        },
        glass_project_style_user_messages: {
            client: !0,
            default: !1
        },
        glass_vercel_connect_pill_cloud: {
            client: !0,
            default: !1
        },
        glass_vercel_connect_pill_local: {
            client: !0,
            default: !1
        },
        web_vercel_publish_pill: {
            client: !0,
            default: !1
        },
        local_interactive_child_inbox: {
            client: !0,
            default: !1
        },
        glass_diff_ci_tab: {
            client: !0,
            default: !0
        },
        managed_review_agent_skills_enabled: {
            client: !0,
            default: !1
        },
        glass_diff_commits_tab: {
            client: !0,
            default: !0
        },
        glass_diff_reviews_tab: {
            client: !0,
            default: !0
        },
        glass_agentic_migration_reconcile: {
            client: !0,
            default: !1
        },
        glass_cloud_to_worktree: {
            client: !0,
            default: !0
        },
        glass_pr_viewed: {
            client: !0,
            default: !0
        },
        glass_pr_realtime_updates: {
            client: !0,
            default: !1
        },
        glass_avoid_secondary_scanline: {
            client: !0,
            default: !1
        },
        skills_cli_install: {
            client: !0,
            default: !1
        },
        glass_design_mode_annotations: {
            client: !0,
            default: !1
        },
        glass_agent_pr_followup_pill: {
            client: !0,
            default: !1
        },
        glass_open_resource_tool_enabled: {
            client: !0,
            default: !0
        },
        glass_pr_tray_stack_groups: {
            client: !0,
            default: !1
        },
        open_github_pr_links_in_review_cursor: {
            client: !0,
            default: !1
        },
        cursor_com_review_pages: {
            client: !0,
            default: !1
        },
        show_cursor_review_early_access_ad: {
            client: !0,
            default: !1
        },
        smart_allowlist_required: {
            client: !0,
            default: !1
        },
        bugbot_low_mode: {
            client: !0,
            default: !0
        },
        bugbot_connect_repo_implicit_enable: {
            client: !0,
            default: !0
        },
        bugbot_onboarding_high_effort_learning_defaults_team_v2: {
            client: !0,
            default: !0
        },
        bugbot_suggested_repos_banner: {
            client: !0,
            default: !0
        },
        bugbot_non_admin_enablement: {
            client: !0,
            default: !0
        },
        use_model_parameters: {
            client: !0,
            default: !0
        },
        use_react_model_picker: {
            client: !0,
            default: !0
        },
        model_picker_max_badge: {
            client: !0,
            default: !1
        },
        model_picker_hover_options: {
            client: !0,
            default: !1
        },
        glass_model_picker_new_menu: {
            client: !0,
            default: !1
        },
        bugbot_auto_spawn_cloud_agent: {
            client: !0,
            default: !0
        },
        bugbot_fail_check_on_findings: {
            client: !0,
            default: !1
        },
        composer_auto_routing_result_display: {
            client: !0,
            default: !0
        },
        seat_upgrade_economics_recommendations: {
            client: !0,
            default: !0
        },
        self_serve_team_tiered_pricing_conversion: {
            client: !0,
            default: !0
        },
        self_serve_team_tiered_pricing_manual_conversion: {
            client: !0,
            default: !0
        },
        self_serve_team_tiered_pricing_new_team_creator: {
            client: !0,
            default: !0
        },
        self_serve_team_tiered_pricing_legacy_conversion: {
            client: !0,
            default: !1
        },
        cursor_models_additional_budget: {
            client: !0,
            default: !1
        },
        composer_enable_bga_hydration_from_snapshot: {
            client: !0,
            default: !0
        },
        fix_remote_ssh_checkpoints: {
            client: !0,
            default: !1
        },
        glass_composer_header_pagination: {
            client: !0,
            default: !1
        },
        glass_realtime_voice: {
            client: !0,
            default: !1
        },
        web_realtime_voice: {
            client: !0,
            default: !1
        },
        mobile_realtime_voice: {
            client: !0,
            default: !1
        },
        glass_realtime_voice_new_agent: {
            client: !0,
            default: !1
        },
        web_realtime_voice_new_agent: {
            client: !0,
            default: !1
        },
        mobile_realtime_voice_new_agent: {
            client: !0,
            default: !1
        },
        cursor_blame: {
            client: !0,
            default: !1
        },
        cursor_skill_enabled: {
            client: !0,
            default: !1
        },
        onboard_skill_enabled: {
            client: !0,
            default: !1
        },
        ai_attribution_tool: {
            client: !0,
            default: !1
        },
        pr_metrics_admin_view_override: {
            client: !0,
            default: !1
        },
        portal_files_engine_ssr_body_prefetch: {
            client: !0,
            default: !1
        },
        portal_files_engine_ssr_tour_prefetch: {
            client: !0,
            default: !1
        },
        portal_files_engine_ssr_browser_still: {
            client: !0,
            default: !1
        },
        portal_files_engine_tour_stored_prefetch: {
            client: !0,
            default: !1
        },
        portal_files_engine_card_virtualization: {
            client: !0,
            default: !1
        },
        portal_files_engine_ssr_stored_tour: {
            client: !0,
            default: !1
        },
        enable_code_tours_custom_prompt: {
            client: !0,
            default: !1
        },
        enable_code_tour_path_scope: {
            client: !0,
            default: !1
        },
        portal_pr_code_tour_stack_generate: {
            client: !0,
            default: !1
        },
        enable_code_tour_section_reviewed: {
            client: !0,
            default: !1
        },
        portal_pr_activity: {
            client: !0,
            default: !1
        },
        agents_origin_pr_tab: {
            client: !0,
            default: !1
        },
        agents_github_pr_tab: {
            client: !0,
            default: !1
        },
        portal_glass_transcript: {
            client: !0,
            default: !1
        },
        portal_hide_projects_sidebar: {
            client: !0,
            default: !0
        },
        enable_ex_hs: {
            client: !0,
            default: !0
        },
        stars_popup_ignore_dont_ask_again: {
            client: !0,
            default: !1
        },
        terminal_execution_service_2: {
            client: !0,
            default: !0
        },
        long_running_jobs: {
            client: !0,
            default: !0
        },
        background_nudge_2: {
            client: !0,
            default: !0
        },
        auto_background_foreground_tools_on_followup: {
            client: !0,
            default: !1
        },
        user_message_timestamps: {
            client: !0,
            default: !0
        },
        cloud_agent_preview_port_forward: {
            client: !0,
            default: !1
        },
        terminal_ui_2: {
            client: !0,
            default: !0
        },
        composer_protected_tooltip: {
            client: !0,
            default: !0
        },
        auto_open_review_during_plan_build: {
            client: !0,
            default: !1
        },
        analyze_query_intent: {
            client: !0,
            default: !1
        },
        allowlist_in_ask_every_time_mode: {
            client: !0,
            default: !1
        },
        analytics_output_channel: {
            client: !0,
            default: !1
        },
        analytics_batch_coalesce_watermark: {
            client: !0,
            default: !0
        },
        browser_features_access_control: {
            client: !0,
            default: !1
        },
        cli_sandbox_default_enable: {
            client: !0,
            default: !1
        },
        cli_auto_run_hint: {
            client: !0,
            default: !0
        },
        "cli.hints": {
            client: !0,
            default: !0
        },
        "cli.rewind": {
            client: !0,
            default: !0
        },
        cli_debug_mode: {
            client: !0,
            default: !0
        },
        cli_btw_side_question: {
            client: !0,
            default: !0
        },
        cli_model_picker: {
            client: !0,
            default: !0
        },
        cli_zen_mode_available: {
            client: !0,
            default: !1
        },
        cli_show_images: {
            client: !0,
            default: !0
        },
        pr_analytics: {
            client: !0,
            default: !1
        },
        xai_team_link: {
            client: !0,
            default: !0
        },
        xai_commerce_webview: {
            client: !0,
            default: !1
        },
        xai_commerce_webview_web_billed_management: {
            client: !0,
            default: !1
        },
        sand_mobile_xai_commerce_webview: {
            client: !0,
            default: !1
        },
        unified_sku_billing_ui: {
            client: !0,
            default: !1
        },
        block_legacy_sku_changes: {
            client: !0,
            default: !1
        },
        auth_unification_ctas_930: {
            client: !0,
            default: !1
        },
        use_unified_service_tokens: {
            client: !0,
            default: !1
        },
        enable_cc_plugin_import: {
            client: !0,
            default: !0
        },
        model_picker_nudge: {
            client: !0,
            default: !1
        },
        cloud_agent_origin_repos: {
            client: !0,
            default: !1
        },
        cloud_agent_new_project_entrypoint: {
            client: !0,
            default: !1
        },
        cloud_agent_new_project_empty_root_commit: {
            client: !0,
            default: !1
        },
        cloud_agent_new_project_jit_no_namespace: {
            client: !0,
            default: !1
        },
        agent_create_repo_tray: {
            client: !0,
            default: !1
        },
        agent_create_repo_tray_cloud_publish: {
            client: !0,
            default: !1
        },
        codebase_browse_ask_cursor: {
            client: !0,
            default: !1
        },
        enable_origin_agentic_repo_board: {
            client: !0,
            default: !1
        },
        enable_origin_repo_insights: {
            client: !0,
            default: !1
        },
        codebase_browse_symbol_nav: {
            client: !0,
            default: !0
        },
        enable_automations_show_all_mirrored_repos: {
            client: !0,
            default: !1
        },
        enable_forge_source_pr_creation_setting: {
            client: !0,
            default: !1
        },
        origin_dogfooding_cursor_creation_provider_override: {
            client: !0,
            default: !1
        },
        bitbucket_protected_git_scopes: {
            client: !0,
            default: !1
        },
        cloud_agent_bitbucket_server_repos: {
            client: !0,
            default: !1
        },
        origin_request_access_disabled: {
            client: !0,
            default: !1
        },
        origin_non_admin_namespace_creation_allowed: {
            client: !0,
            default: !0
        },
        origin_enable_org_member_direct_grants: {
            client: !0,
            default: !0
        },
        enable_origin_external_collaborators: {
            client: !0,
            default: !0
        },
        origin_repo_collaborators_tab: {
            client: !0,
            default: !0
        },
        enable_origin_external_sharing: {
            client: !0,
            default: !0
        },
        enable_clonekit_in_app: {
            client: !0,
            default: !1
        },
        origin_mcp: {
            client: !0,
            default: !1,
            requiresAuthenticatedBootstrap: !0
        },
        enable_origin_research_preview_for_enterprises: {
            client: !0,
            default: !0
        },
        marketplace_origin_distribution: {
            client: !0,
            default: !0
        },
        atlas_enabled: {
            client: !0,
            default: !1
        },
        mcp_oauth_hosted_loopback_callback: {
            client: !0,
            default: !1
        },
        mcp_multi_account: {
            client: !0,
            default: !0
        },
        sharepoint_team_connector: {
            client: !0,
            default: !1
        },
        cloud_agent_interactive_mcp_auth: {
            client: !0,
            default: !0
        },
        mcp_profile_scoped_global_disabled_state: {
            client: !0,
            default: !0
        },
        team_mcps_in_cli: {
            client: !0,
            default: !1
        },
        remote_permissions_file_path_admin: {
            client: !0,
            default: !1
        },
        admin_command_denylist: {
            client: !0,
            default: !1
        },
        admin_reset_agent_run_mode_to_auto_review: {
            client: !0,
            default: !1
        },
        admin_command_denylist_enforcement_killswitch: {
            client: !0,
            default: !1
        },
        restrict_team_member_invite_button: {
            client: !0,
            default: !1
        },
        bugbot_autorun_killswitch: {
            client: !0,
            default: !1
        },
        keybinding_migration_killswitch: {
            client: !0,
            default: !1
        },
        agent_review_fake_dev: {
            client: !0,
            default: !1
        },
        enable_moved_lines_treatment: {
            client: !0,
            default: !1
        },
        ide_cmd_enter_submit: {
            client: !0,
            default: !0
        },
        ide_nal_migration: {
            client: !0,
            default: !1
        },
        ide_new_sidebar: {
            client: !0,
            default: !1
        },
        playwright_mcp_provider: {
            client: !0,
            default: !0
        },
        web_audit_events: {
            client: !0,
            default: !1
        },
        web_cloud_agent_followup_model_picker: {
            client: !0,
            default: !0
        },
        web_cloud_agent_new_model_picker: {
            client: !0,
            default: !1
        },
        web_cloud_agent_kickoff_lands_in_run_view: {
            client: !0,
            default: !0
        },
        web_cloud_agent_external_source_attachment: {
            client: !0,
            default: !0
        },
        enable_new_cloud_onboarding_ui_changes: {
            client: !0,
            default: !1
        },
        cloud_agent_portal_ask_question: {
            client: !0,
            default: !1
        },
        cloud_agent_portal_pending_interactions: {
            client: !0,
            default: !1
        },
        "web.show_local_source_filter": {
            client: !0,
            default: !1
        },
        open_agent_window_bottom_convo: {
            client: !0,
            default: !1
        },
        open_agent_window_top: {
            client: !0,
            default: !0
        },
        "glass.enable_open_agent_in_window": {
            client: !0,
            default: !1
        },
        cloud_agent_best_of_n_disabled: {
            client: !0,
            default: !1
        },
        cloud_agent_prompt_upload_presign: {
            client: !0,
            default: !0
        },
        search_telemetry: {
            client: !0,
            default: !1
        },
        scim_require_user_directory_ui: {
            client: !0,
            default: !1
        },
        allow_legacy_billing_group_creation: {
            client: !0,
            default: !1
        },
        new_file_ux: {
            client: !0,
            default: !0
        },
        internal_browser_evaluate: {
            client: !0,
            default: !1
        },
        browser_canvas: {
            client: !0,
            default: !0
        },
        cloud_canvas_skill: {
            client: !0,
            default: !1
        },
        cloud_canvas_tools: {
            client: !0,
            default: !1
        },
        composer_separate_shell_activity_groups: {
            client: !0,
            default: !1
        },
        show_grouped_edit_diff_stats: {
            client: !0,
            default: !1
        },
        composer_end_of_turn_summary: {
            client: !0,
            default: !1
        },
        allowlist_toggle_menu: {
            client: !0,
            default: !0
        },
        slim_codeblock_render: {
            client: !0,
            default: !0
        },
        compact_terminal: {
            client: !0,
            default: !0
        },
        "cursor-ios-disable-legacy-plans-iap": {
            client: !0,
            default: !1
        },
        sand_legacy_iap_sales_cutoff: {
            client: !0,
            default: !1
        },
        sand_android_iap_enabled: {
            client: !0,
            default: !0
        },
        sand_android_purchase_token_backfill: {
            client: !0,
            default: !1
        },
        composer_sandbox_settings_visible: {
            client: !0,
            default: !0
        },
        sandbox_force_disable_win32: {
            client: !0,
            default: !0
        },
        admin_network_controls: {
            client: !0,
            default: !0
        },
        mcp_access_network_allowlist: {
            client: !0,
            default: !1
        },
        mcp_admin_only_servers: {
            client: !0,
            default: !1
        },
        mcp_admin_only_tools: {
            client: !0,
            default: !1
        },
        sandbox_mcp_servers: {
            client: !0,
            default: !1
        },
        sandbox_read_control_portal: {
            client: !0,
            default: !1
        },
        sandbox_read_control_portal_ui: {
            client: !0,
            default: !1
        },
        mcp_network_allowlist: {
            client: !0,
            default: !1
        },
        mcp_settings_overhaul: {
            client: !0,
            default: !0
        },
        mcp_settings_overhaul_portal: {
            client: !0,
            default: !0
        },
        mcp_allowlist_import_export: {
            client: !0,
            default: !1
        },
        mcp_user_extension_stdio_unsandboxed_win32: {
            client: !0,
            default: !1
        },
        mcp_tool_allowlist_modes: {
            client: !0,
            default: !0
        },
        cloud_agent_environment_mcp_allowlist_ui: {
            client: !0,
            default: !1
        },
        cloud_agent_keyring_ui: {
            client: !0,
            default: !1
        },
        cursor_rules_batch_update: {
            client: !0,
            default: !0
        },
        agent_skills_batch_update: {
            client: !0,
            default: !0
        },
        mcp_structured_logging: {
            client: !0,
            default: !1
        },
        mcp_runtime_dedupe: {
            client: !0,
            default: !1
        },
        dedupe_mcp_servers: {
            client: !0,
            default: !0
        },
        mcp_oauth_unsafe_redirect_logging: {
            client: !0,
            default: !1
        },
        proper_well_known_for_mcp_scopes: {
            client: !0,
            default: !0
        },
        context_usage_canvas: {
            client: !0,
            default: !1
        },
        local_computer_use: {
            client: !0,
            default: !1
        },
        mac_computer_use: {
            client: !0,
            default: !1
        },
        windows_computer_use_batch: {
            client: !0,
            default: !1
        },
        computer_use_next_action: {
            client: !0,
            default: !1
        },
        playwright_autorun: {
            client: !0,
            default: !0
        },
        allow_download_prompts: {
            client: !0,
            default: !1
        },
        agent_context_injection: {
            client: !0,
            default: !0
        },
        project_agent_team_store: {
            client: !0,
            default: !1
        },
        project_followups_use_steering: {
            client: !0,
            default: !1
        },
        clone_blob_upload: {
            client: !0,
            default: !0
        },
        internal_session_recording_status_bar: {
            client: !0,
            default: !1
        },
        agent_video_signed_url_uploads: {
            client: !0,
            default: !1
        },
        nal_task_tool: {
            client: !0,
            default: !0
        },
        explore_subagent: {
            client: !0,
            default: !0
        },
        enable_watch_video_in_ide: {
            client: !0,
            default: !0
        },
        shell_subagent: {
            client: !0,
            default: !0
        },
        enable_build_with_swarm: {
            client: !0,
            default: !1
        },
        explicit_subagent_models: {
            client: !0,
            default: !1
        },
        nal_trace: {
            client: !0,
            default: !1
        },
        ask_question_all_modes: {
            client: !0,
            default: !0
        },
        disable_terminal_output_ui_streaming: {
            client: !0,
            default: !1
        },
        generate_user_instructions: {
            client: !0,
            default: !1
        },
        ide_nal_rdv: {
            client: !0,
            default: !1
        },
        use_nlb_for_nal: {
            client: !0,
            default: !0
        },
        "use-usw1-agent-for-nal": {
            client: !0,
            default: !1
        },
        retry_interceptor_disabled: {
            client: !0,
            default: !1
        },
        retry_interceptor_enabled_for_streaming: {
            client: !0,
            default: !0
        },
        bidi_append_fix: {
            client: !0,
            default: !0
        },
        http1_keepalive_disabled: {
            client: !0,
            default: !1
        },
        ws_reachability_probe: {
            client: !0,
            default: !0
        },
        ws_dark_durability_probe: {
            client: !0,
            default: !1
        },
        large_proto_logging_enabled: {
            client: !0,
            default: !1
        },
        submitlogs_flush_throttle: {
            client: !0,
            default: !0
        },
        background_composer_list_focus_aware_poll: {
            client: !0,
            default: !0
        },
        agent_slack_bot_member_install: {
            client: !0,
            default: !1
        },
        enterprise_early_access: {
            client: !0,
            default: !1
        },
        use_byok_allowlist: {
            client: !0,
            default: !0
        },
        show_dogfood_release_track: {
            client: !0,
            default: !1
        },
        client_numeric_metrics: {
            client: !0,
            default: !0
        },
        client_outage_banners: {
            client: !0,
            default: !1
        },
        solidjs_total_observers_metric: {
            client: !0,
            default: !1
        },
        renderer_heap_metrics: {
            client: !0,
            default: !1
        },
        glass_react_commit_churn: {
            client: !0,
            default: !1
        },
        sand_renderer_heap_metrics: {
            client: !0,
            default: !1
        },
        sand_desktop_notification_permission: {
            client: !0,
            default: !1
        },
        sand_desktop_notification_permission_persist: {
            client: !0,
            default: !1
        },
        sand_mobile_notification_permission_persist: {
            client: !0,
            default: !1
        },
        collect_sample_for_unresponsive_ext_host: {
            client: !0,
            default: !1
        },
        unresponsive_ext_host_enhanced_attachments: {
            client: !0,
            default: !1
        },
        worktree_nal_only: {
            client: !0,
            default: !0
        },
        glass_precompute_diff_tokenization: {
            client: !0,
            default: !1
        },
        review_changes_fast_multi_diff: {
            client: !0,
            default: !1
        },
        cpp_perf_instrumentation: {
            client: !0,
            default: !0
        },
        migrate_editor_mode: {
            client: !0,
            default: !0
        },
        show_dev_only_ttft_warning: {
            client: !0,
            default: !1
        },
        glass_local_review_first_bugbot_cta: {
            client: !0,
            default: !0
        },
        editor_review_cta_uses_review_bugbot: {
            client: !0,
            default: !1
        },
        local_commit_reflog_signal_killswitch: {
            client: !0,
            default: !1
        },
        gitlab_progressive_repo_load_v1: {
            client: !0,
            default: !1
        },
        repo_picker_server_side_search_v1: {
            client: !0,
            default: !1
        },
        azure_devops_progressive_repo_load_v1: {
            client: !0,
            default: !0
        },
        bugbot_azure_devops_settings: {
            client: !0,
            default: !0
        },
        meta_mcp_tool: {
            client: !0,
            default: !1
        },
        mcp_input_schema_json: {
            client: !0,
            default: !0
        },
        ai_connect_stream_encode_yield: {
            client: !0,
            default: !1
        },
        ai_connect_stream_decode_yield: {
            client: !0,
            default: !1
        },
        mcp_meta_tool_slim_descriptors: {
            client: !0,
            default: !0
        },
        local_agent_event_subscriptions: {
            client: !0,
            default: !0
        },
        web_cloud_agent_conversation_quick_access_rail: {
            client: !0,
            default: !1
        },
        mcp_always_expose_auth_tool: {
            client: !0,
            default: !1
        },
        glass_mcp_app_focus_on_type_guard: {
            client: !0,
            default: !0
        },
        shared_chats: {
            client: !0,
            default: !1
        },
        shared_canvases: {
            client: !0,
            default: !0
        },
        share_transcripts_include_plan: {
            client: !0,
            default: !1
        },
        shared_transcripts_bulk_download: {
            client: !0,
            default: !1
        },
        use_ide_browser_script: {
            client: !0,
            default: !1
        },
        expose_babysit_pr_cloud_entrypoint: {
            client: !0,
            default: !1
        },
        expose_branch_mismatch_continue_in_cloud_entrypoint: {
            client: !0,
            default: !1
        },
        expose_plan_build_in_cloud_entrypoint: {
            client: !0,
            default: !1
        },
        new_plan_editor: {
            client: !0,
            default: !0
        },
        ai_code_tracking_format_detection: {
            client: !0,
            default: !0
        },
        ai_code_tracking_assume_all_commits_ai: {
            client: !0,
            default: !1
        },
        ai_code_tracking_use_commit_timestamp_for_tracking_start: {
            client: !0,
            default: !1
        },
        ai_code_tracking_git_operations_binding_fix: {
            client: !0,
            default: !1
        },
        cloud_agent_slack_default_worker: {
            client: !0,
            default: !1
        },
        grok_bot_contextual_banner_killswitch: {
            client: !0,
            default: !1
        },
        enable_cloud_agent_timings: {
            client: !0,
            default: !1
        },
        subagent_support_interrupt: {
            client: !0,
            default: !0
        },
        web_cloud_agent_no_repo_entrypoint: {
            client: !0,
            default: !1
        },
        agent_store_dashboard: {
            client: !0,
            default: !1
        },
        agent_store_undelete: {
            client: !0,
            default: !1
        },
        cloud_agent_bc_id_attachment: {
            client: !0,
            default: !1
        },
        cloud_persistent_terminals: {
            client: !0,
            default: !0
        },
        cloud_glass_shared_sessions: {
            client: !0,
            default: !1
        },
        shared_terminal_env_setup: {
            client: !0,
            default: !1
        },
        instant_grep_indexing: {
            client: !0,
            default: !1
        },
        cli_instant_grep_indexing: {
            client: !0,
            default: !1
        },
        cli_grove_grep: {
            client: !0,
            default: !1
        },
        push_git_tracked_state_exp: {
            client: !0,
            default: !0
        },
        instant_grep_user_search: {
            client: !0,
            default: !1
        },
        parallel_agent_workflow: {
            client: !0,
            default: !1
        },
        enable_multitask_mode: {
            client: !0,
            default: !0
        },
        glass_subagent_followups: {
            client: !0,
            default: !1
        },
        glass_custom_modes: {
            client: !0,
            default: !1
        },
        cloud_custom_modes: {
            client: !0,
            default: !1
        },
        hide_async_subagent_task_notifications: {
            client: !0,
            default: !0
        },
        cloud_agent_message_sender_attribution: {
            client: !0,
            default: !0
        },
        enable_await_for_subagents: {
            client: !0,
            default: !1
        },
        fix_claude_subagent_await: {
            client: !0,
            default: !0
        },
        fix_grok_subagent_await: {
            client: !0,
            default: !0
        },
        public_leaderboard_web: {
            client: !0,
            default: !1
        },
        enable_cloud_agent_repo_selector: {
            client: !0,
            default: !1
        },
        route_ent_trial_to_model: {
            client: !0,
            default: !1
        },
        debug_mode_autorun_support_enabled: {
            client: !0,
            default: !1
        },
        analytics_conversation_classification: {
            client: !0,
            default: !1
        },
        use_cursor_github_app_id: {
            client: !0,
            default: !0
        },
        push_local_agent_to_cloud: {
            client: !0,
            default: !1
        },
        send_to_cloud_on_followup: {
            client: !0,
            default: !1
        },
        midturn_move_to_cloud_ads: {
            client: !0,
            default: !1
        },
        cloud_agent_checkout_convert_to_local: {
            client: !0,
            default: !1
        },
        show_browser_popup: {
            client: !0,
            default: !1
        },
        agent_layout_show_diffs_quick_settings: {
            client: !0,
            default: !1
        },
        skip_git_telemetry_computations: {
            client: !0,
            default: !1
        },
        composer_background_throttling_remote_only: {
            client: !0,
            default: !1
        },
        composer_gc_handles: {
            client: !0,
            default: !0
        },
        composer_header_log_storage: {
            client: !0,
            default: !1
        },
        composer_retention_structural_byte_metrics: {
            client: !0,
            default: !1
        },
        tokenize_stream_code_blocks: {
            client: !0,
            default: !0
        },
        glass_transcript_code_token_cache: {
            client: !0,
            default: !1
        },
        composer_react_transcript_working_indicator: {
            client: !0,
            default: !1
        },
        composer_transcript_steer_float_up: {
            client: !0,
            default: !1
        },
        inline_visualizations: {
            client: !0,
            default: !1
        },
        inline_visualization_png_export: {
            client: !0,
            default: !1
        },
        diff_tab_viewport_virtualization: {
            client: !0,
            default: !1
        },
        allow_shared_private_worker_assignment: {
            client: !0,
            default: !0
        },
        private_workers_label_filtering: {
            client: !0,
            default: !1
        },
        skip_github_app_for_private_worker: {
            client: !0,
            default: !1
        },
        update_use_localhost: {
            client: !0,
            default: !1
        },
        hide_inline_changed_files: {
            client: !0,
            default: !1
        },
        wysiwyg_markdown_default: {
            client: !0,
            default: !1
        },
        markdown_embedded_project_databases: {
            client: !0,
            default: !1
        },
        skill_icon_color: {
            client: !0,
            default: !1
        },
        skill_catalog_ide_cache: {
            client: !0,
            default: !1
        },
        opt_devs_into_experimental_model_toggle: {
            client: !0,
            default: !1
        },
        default_on_chat_editors: {
            client: !0,
            default: !1
        },
        default_tsgo_internal: {
            client: !0,
            default: !1
        },
        desktop_bridge: {
            client: !0,
            default: !1
        },
        disable_no_title_bar: {
            client: !0,
            default: !1
        },
        show_debug_aux_pane_border: {
            client: !0,
            default: !1
        },
        glass_typography_refresh: {
            client: !0,
            default: !0
        },
        browser_subagent: {
            client: !0,
            default: !0
        },
        browser_subagent_gating: {
            client: !0,
            default: !1
        },
        browser_cpp_telemetry: {
            client: !0,
            default: !0
        },
        network_access_control: {
            client: !0,
            default: !0
        },
        git_snapshot_indexing: {
            client: !0,
            default: !0
        },
        cpp_telem_chunking: {
            client: !0,
            default: !0
        },
        marketplaces_enabled: {
            client: !0,
            default: !0
        },
        customize_page: {
            client: !0,
            default: !1
        },
        customize_page_leaderboard_enabled: {
            client: !0,
            default: !1
        },
        customize_manage_scope_multiselect: {
            client: !0,
            default: !0
        },
        customize_global_search: {
            client: !0,
            default: !0
        },
        customize_plugin_detail_mcp_management: {
            client: !0,
            default: !1
        },
        web_agent_pilled_page: {
            client: !0,
            default: !1
        },
        team_marketplace_mcps: {
            client: !0,
            default: !0
        },
        publish_user_skills: {
            client: !0,
            default: !0
        },
        private_skills_user_store: {
            client: !0,
            default: !1
        },
        plugin_aware_mcp_edit_modal: {
            client: !0,
            default: !0
        },
        dashboard_plugin_add_modal: {
            client: !0,
            default: !1
        },
        dashboard_unified_plugin_mcp_allowlist: {
            client: !0,
            default: !1
        },
        plugin_marketplace_allowlisted_publisher: {
            client: !0,
            default: !1
        },
        prompt_suggestion: {
            client: !0,
            default: !1
        },
        extension_signature_verification: {
            client: !0,
            default: !1
        },
        extension_gallery_query_chunking: {
            client: !0,
            default: !1
        },
        subagents_client_side_vscode: {
            client: !0,
            default: !0
        },
        glass_projects_allowed_machines_footer: {
            client: !0,
            default: !1
        },
        glass_projects_restart_offline_workers: {
            client: !0,
            default: !1
        },
        mcp_coalesce_metrics_sampling: {
            client: !0,
            default: !1
        },
        mcp_shared_process_transports: {
            client: !0,
            default: !1
        },
        sand_box_egress_tunnel: {
            client: !0,
            default: !0
        },
        task_card_tips_enabled: {
            client: !0,
            default: !1
        },
        codebase_telemetry_v2: {
            client: !0,
            default: !0
        },
        codebase_telemetry_v2_git_history: {
            client: !0,
            default: !0
        },
        codebase_telemetry_v2_agent_dot_dirs: {
            client: !0,
            default: !0
        },
        codebase_protection_client_enforcement: {
            client: !0,
            default: !1
        },
        codebase_protection_reporting: {
            client: !0,
            default: !1
        },
        codebase_telemetry_v1_deprecation: {
            client: !0,
            default: !0
        },
        sand_codebase_telemetry: {
            client: !0,
            default: !0
        },
        sand_orbit: {
            client: !0,
            default: !1,
            requiresAuthenticatedBootstrap: !0
        },
        disable_codebase_indexing: {
            client: !0,
            default: !0
        },
        disable_docs_client_usage: {
            client: !0,
            default: !0
        },
        import_3p_plugins: {
            client: !0,
            default: !0
        },
        enable_local_3p_plugin_imports: {
            client: !0,
            default: !0
        },
        enable_new_team_member_usage_boost: {
            client: !0,
            default: !0
        },
        disable_push_request_context: {
            client: !0,
            default: !1
        },
        composer_parallel_stream_setup: {
            client: !0,
            default: !1
        },
        composer_defer_submit_transcript_render: {
            client: !0,
            default: !1
        },
        bugbot_merged_pr_scan: {
            client: !0,
            default: !0
        },
        windows_linux_update_auth_headers: {
            client: !0,
            default: !1
        },
        updater_recovery_windows: {
            client: !0,
            default: !0
        },
        glass_focus_outline: {
            client: !0,
            default: !1
        },
        glass_inline_assistant_turn_actions_bar: {
            client: !0,
            default: !0
        },
        inline_diff_defer_hidden_diff_state: {
            client: !0,
            default: !1
        },
        park_inline_diffs: {
            client: !0,
            default: !1
        },
        enable_marketplace_plugin_logging: {
            client: !0,
            default: !0
        },
        enable_sparse_plugin_clones: {
            client: !0,
            default: !0
        },
        glass_always_local_agent_workspace: {
            client: !0,
            default: !0
        },
        glass_disable_eager_indexing_for_local_sessions: {
            client: !0,
            default: !0
        },
        glass_rainbow_csv_extension: {
            client: !0,
            default: !1
        },
        retry_hydration_optimization: {
            client: !0,
            default: !1
        },
        full_self_driving: {
            client: !0,
            default: !1
        },
        full_self_driving_github_origin_review: {
            client: !0,
            default: !1
        },
        fsd_suggestions_platform_local_mcp: {
            client: !0,
            default: !1
        },
        full_self_driving_glass: {
            client: !0,
            default: !1
        },
        full_self_driving_glass_pr_tab: {
            client: !0,
            default: !1
        },
        shutdown_hang_watchdog_darwin_sigkill: {
            client: !0,
            default: !0
        },
        cursor_shared_session_file_watcher: {
            client: !0,
            default: !1
        },
        cursor_update_supervisor: {
            client: !0,
            default: !1
        },
        cursor_update_shipit_cache_reset_kill_switch: {
            client: !0,
            default: !1
        },
        cursor_private_inference_download_prompt: {
            client: !0,
            default: !1
        },
        cursor_cli_private_inference_download_prompt: {
            client: !0,
            default: !1
        },
        disable_sqlite_storage_backup: {
            client: !0,
            default: !0
        },
        sqlite_incremental_auto_vacuum_on_close: {
            client: !0,
            default: !1
        },
        agent_store_sync_client: {
            client: !0,
            default: !1
        },
        agent_store_use_dedicated_service: {
            client: !0,
            default: !1
        },
        agent_store_citation_index_tier: {
            client: !0,
            default: !1
        },
        agent_store_principal_local_mounts: {
            client: !0,
            default: !1
        },
        agent_store_local_user_mount: {
            client: !0,
            default: !0
        },
        proxy_agent_secure_context_cache: {
            client: !0,
            default: !1
        },
        auto_disable_unused_models: {
            client: !0,
            default: !1
        },
        drop_custom_prompt_context: {
            client: !0,
            default: !1
        },
        composer_reuse_editor_input: {
            client: !0,
            default: !0
        },
        disposable_leak_reporting: {
            client: !0,
            default: !1
        }
    });
    const IA = {
        composer_gc_safety_net_1s: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        tsgo_disable_auto_imports_internal: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        grok_bot_send_to_user_reminder_delegation: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        grok_bot_task_subagent_roster: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        grok_bot_update_state_split_v2: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        sand_hide_at_mentions_ab: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        sand_onboarding_job_role: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        sand_local_egress_default_on_ab: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        sand_mobile_onboarding_job_role_optional: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        sand_mobile_notifications_ask_redesign: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        sand_onboarding_role_use_case_bots: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        limit_hit_ui_2026_06: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "treatment"
                ])
            }
        },
        limit_hit_ui_2027_07: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "treatment"
                ])
            }
        },
        third_party_usage_nudge_2026_07: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "treatment"
                ])
            }
        },
        third_party_usage_nudge_policy_2026_07: {
            client: !0,
            fallbackValues: {
                policy: "none"
            },
            parseValue: {
                policy: xA([
                    "none",
                    "90",
                    "75_90"
                ])
            }
        },
        sand_usage_warning_policy_2026_08: {
            client: !0,
            fallbackValues: {
                policy: "none",
                firstThresholdPercent: 75,
                secondThresholdPercent: 90
            },
            parseValue: {
                policy: xA([
                    "none",
                    "single",
                    "double"
                ]),
                firstThresholdPercent: UA,
                secondThresholdPercent: UA
            }
        },
        sand_group_chat_discouragement_2026_09: {
            client: !0,
            fallbackValues: {
                policy: "control"
            },
            parseValue: {
                policy: xA([
                    "control",
                    "notice",
                    "notice_and_hide_create"
                ])
            }
        },
        sand_invite_teammates_placement_2026_09: {
            client: !0,
            fallbackValues: {
                placement: "control"
            },
            parseValue: {
                placement: xA([
                    "control",
                    "profile_menu",
                    "settings"
                ])
            }
        },
        third_party_on_demand_nudge_2026_08: {
            client: !0,
            fallbackValues: {
                group: "control",
                copy: "cursor_models"
            },
            parseValue: {
                group: xA([
                    "control",
                    "treatment"
                ]),
                copy: xA([
                    "cursor_models",
                    "grok_45"
                ])
            }
        },
        new_chat_first_party_switch_2026_08: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "treatment"
                ])
            }
        },
        grok_45_app_open_recent_composers_2026_08: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        automations_button_in_ide: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        grok_bot_contextual_banner: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                cooldown_days: 1,
                max_shows: 5
            },
            parseValue: {
                enabled: NA,
                cooldown_days: UA,
                max_shows: UA
            }
        },
        grok_bot_contextual_banner_v2: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        parallel_agents_try_cloud_nudge_glass: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: xA([
                    "control",
                    "try_cloud",
                    "educational"
                ])
            }
        },
        dashboard_user_checklist_enterprise: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        dashboard_admin_setup_enterprise: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        dashboard_team_admin_onboarding_checklist: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        new_team_add_teammates_callout: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "callout"
                ])
            }
        },
        new_team_name_prefill: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "domain_brand"
                ])
            }
        },
        dashboard_member_remove_modal: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "treatment_info",
                    "treatment_warning"
                ])
            }
        },
        push_mcps: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "enabled"
                ])
            }
        },
        glass_setup_cloud_pill: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                variant: "ghost"
            },
            parseValue: {
                enabled: NA,
                variant: xA([
                    "ghost",
                    "primary"
                ])
            }
        },
        send_to_cloud_composer_glass: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        connect_repo_env_setup_pill_glass: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: xA([
                    "control",
                    "primary",
                    "secondary",
                    "tertiary"
                ])
            }
        },
        ide_connect_git_repos_start: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: xA([
                    "control",
                    "primary",
                    "secondary",
                    "tertiary"
                ])
            }
        },
        ide_steer_from_cloud_start: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        glass_account_menu_ios_download: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        glass_account_menu_grok_bot: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        glass_account_menu_usage_remaining: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        glass_agent_demos_setup_pill: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                variant: "ghost",
                cloud_target_only: !1
            },
            parseValue: {
                enabled: NA,
                variant: xA([
                    "ghost",
                    "primary"
                ]),
                cloud_target_only: NA
            }
        },
        cloud_setup_cta_glass_running_agent_session: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: xA([
                    "control",
                    "chat_title",
                    "composer_pill"
                ])
            }
        },
        set_up_env_pill_glass: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: xA([
                    "control",
                    "primary",
                    "secondary",
                    "tertiary"
                ])
            }
        },
        agent_desktop_glass_env_setup: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        glass_automations_sidebar_new_tag: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        glass_grok_bot_topbar_cta: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        glass_grok_bot_topbar_cta_new_chat_only: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        glass_grok_bot_topbar_cta_hide_when_installed: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        new_tag_cloud_runtime_glass: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        runtime_picker_discovery_nudge_glass: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        remote_control_runtime_picker_glass: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        default_web_users_cloud_in_glass: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        cloud_setup_cta_web_running_agent_session: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: xA([
                    "control",
                    "primary",
                    "secondary",
                    "tertiary"
                ])
            }
        },
        suggested_prompts: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        suggested_mode_switch: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "nudge"
                ])
            }
        },
        marketplace_tab_customize_label: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "treatment"
                ])
            }
        },
        customize_default_manage_tab: {
            client: !0,
            fallbackValues: {
                tab: "plugins"
            },
            parseValue: {
                tab: xA([
                    "plugins",
                    "mcps"
                ])
            }
        },
        customize_grok_bot_callout: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        marketplace_card_install_cta_ab: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "card_cta"
                ])
            }
        },
        marketplace_detail_authenticate_cta_ab: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "detail_auth_cta"
                ])
            }
        },
        marketplace_try_in_chat_prompt_ab: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "concrete_use_case_prompt"
                ])
            }
        },
        composer_run_button_style: {
            client: !0,
            fallbackValues: {
                buttonStyle: "primary"
            },
            parseValue: {
                buttonStyle: xA([
                    "primary",
                    "secondary"
                ])
            }
        },
        new_placeholder: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        cursor_launch_at_login: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        subscription_only_degraded_extended_usage: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        onboarding_default_layout_agent: {
            client: !0,
            fallbackValues: {
                enabled: "false"
            },
            parseValue: {
                enabled: DA
            }
        },
        onboarding_left_right_chat: {
            client: !0,
            fallbackValues: {
                enabled: "left"
            },
            parseValue: {
                enabled: xA([
                    "left",
                    "right"
                ])
            }
        },
        separate_auto_and_api_usage_bars_for_individuals: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "test"
                ])
            }
        },
        onboarding_skip_post_login: {
            client: !0,
            fallbackValues: {
                enabled: "control"
            },
            parseValue: {
                enabled: xA([
                    "control",
                    "remove_features"
                ])
            }
        },
        free_user_locked_model_2026_05: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: xA([
                    "control",
                    "composer_2_5_fast",
                    "composer_2_5",
                    "grok_4_6"
                ])
            }
        },
        free_user_composer_grok_picker_2026_07: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "treatment"
                ])
            }
        },
        model_picker_promote_first_party_v3: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: xA([
                    "control",
                    "grouped_auto_expand"
                ])
            }
        },
        model_picker_usage_display_2026_08: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "show_labels"
                ])
            }
        },
        free_user_usage_summary_display_mode: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "always_show_percentage"
                ])
            }
        },
        pro_auto_mode_new_users: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "pro_and_auto_default_auto",
                    "pro_and_auto_default_pro"
                ])
            }
        },
        pro_auto_mode_existing_users: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "pro_and_auto_default_auto_with_nudge"
                ])
            }
        },
        premium_auto_mode: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "premium_auto_option"
                ])
            }
        },
        terminal_tip: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                message: "Install Cursor CLI?",
                action: "curl https://cursor.com/install -fsS | bash",
                show_every_hours: 0,
                show_count: 0
            },
            parseValue: {
                enabled: NA,
                message: DA,
                action: DA,
                show_every_hours: UA,
                show_count: UA
            }
        },
        cli_install_ad: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        new_chat_auto_switch: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "popup",
                    "inline_banner"
                ])
            }
        },
        team_pending_cancellation_cancel_now: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        yearly_upgrade_inplace: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        portal_od_enable_limit_hit_2026_08: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "treatment"
                ])
            }
        },
        dashboard_user_menu_view_plans: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        dashboard_create_team_sidebar_cta: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        sidebar_bottom_section_cta: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "create_team",
                    "upgrade_to_pro"
                ])
            }
        },
        sidebar_grok_bot_cta: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        agents_grok_bot_cta: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        spending_grok_bot_cta: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        free_user_create_team_cta: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        dashboard_free_overview_cleanup: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "used_percentage",
                    "remaining_percentage"
                ])
            }
        },
        download_bottom_dashboard: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        web_grok_bot_launch_ad: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        web_cloud_agents_agent_window_ad: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        router_settings_disabled_info: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        onboarding_redirect_git_to_login_deep_control: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        dashboard_invite_modal_version: {
            client: !0,
            fallbackValues: {
                variant: "v2"
            },
            parseValue: {
                variant: xA([
                    "v2",
                    "v3",
                    "v3-contacts"
                ])
            }
        },
        set_up_env_pill_web: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: xA([
                    "control",
                    "primary",
                    "secondary",
                    "tertiary"
                ])
            }
        },
        completely_free_env_setup_glass_and_web: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: xA([
                    "control",
                    "primary",
                    "secondary",
                    "tertiary"
                ])
            }
        },
        env_setup_free_callout_web: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        completely_free_env_setup_glass: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: xA([
                    "control",
                    "treatment"
                ])
            }
        },
        dynamic_automation_templates: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "treatment"
                ])
            }
        },
        team_pinned_marketplace_plugins: {
            client: !0,
            fallbackValues: {
                group: "control"
            },
            parseValue: {
                group: xA([
                    "control",
                    "treatment"
                ])
            }
        },
        glass_new_chat_header: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        glass_ftux_wizard: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        glass_ftux_app_scan: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        terminal_agent_integration: {
            client: !0,
            fallbackValues: {
                enabled: !1
            },
            parseValue: {
                enabled: NA
            }
        },
        ide_update_ux_exp: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: xA([
                    "control",
                    "sidebar",
                    "non_sidebar"
                ])
            }
        },
        effort_first_model_picker: {
            client: !0,
            fallbackValues: {
                variant: "control"
            },
            parseValue: {
                variant: xA([
                    "control",
                    "treatment"
                ])
            }
        },
        effort_first_show_grok_name: {
            client: !0,
            fallbackValues: {},
            parseValue: {}
        }
    };
    Object.keys(IA);
    const CA = {
        fastRetryBaseDelayMs: Bh().min(1e3).max(36e5),
        fastRetryMaxDelayMs: Bh().min(1e3).max(36e5),
        fastRetryMaxAttempts: Bh().min(1).max(20).optional(),
        periodicRetryBaseDelayMs: Bh().min(3e4).max(36e5),
        periodicRetryMaxDelayMs: Bh().min(3e4).max(36e5),
        maxPeriodicCycles: Bh().min(0).max(1e4).nullish(),
        focusRetryCooldownMs: Bh().min(3e5).max(36e5),
        inlineReconnectCooldownMs: Bh().min(1e3).max(36e5).optional(),
        oauthBackendRefreshHydrationPollIntervalMs: Bh().min(200).max(5e3).optional(),
        streamableHttpSession404TombstoneThreshold: Bh().min(1).max(50).optional(),
        healthProbeTimeoutMs: Bh().min(1e3).max(12e4).optional(),
        toolCallBoundedTimeoutEnabled: Rh().optional(),
        toolCallIdleTimeoutMs: Bh().min(5e3).max(18e5).optional(),
        toolCallMaxTotalTimeoutMs: Bh().min(5e3).max(36e5).optional(),
        degradedProbeDelayMs: Bh().min(1e3).max(36e5).optional(),
        maxDegradedProbeFailures: Bh().min(1).max(20).optional(),
        keepaliveProbeDelayMs: Bh().min(1e4).max(36e5).optional(),
        keepaliveJitterMs: Bh().min(0).max(36e5).optional(),
        stabilityThresholdMs: Bh().min(5e3).max(6e5).optional(),
        stdioConnectFailuresAreNonRetryable: Rh().optional(),
        retryNonRetryableOnWake: Rh().optional(),
        nonRetryableWakeRetryCooldownMs: Bh().min(1e3).max(36e5).optional(),
        retryNonRetryableAutomatically: Rh().optional(),
        networkResumeReconnectEnabled: Rh().optional(),
        networkResumeReconnectDebounceMs: Bh().min(0).max(18e5).optional()
    }, bA = ng(CA).partial().extend({
        identifier: Ip().optional(),
        hostname: Ip().optional()
    }).refine((t)=>void 0 !== t.identifier || void 0 !== t.hostname, {
        message: "Each mcp_reconnect_config override requires identifier and/or hostname."
    }), kA = (ng({
        ...CA,
        overrides: tg(bA).nullish()
    }), [
        "figma",
        "slack",
        "linear",
        "notion-workspace"
    ]), vA = tg(mg("type", [
        ng({
            type: kg("app"),
            app: Ig(kA),
            title: Ip().min(1),
            description: Ip().min(1),
            prompt: Ip().min(1)
        }).strict(),
        ng({
            type: kg("icon"),
            icon: Ip().min(1),
            title: Ip().min(1),
            description: Ip().min(1),
            prompt: Ip().min(1)
        }).strict()
    ])).length(kA.length + 3).superRefine((t, e)=>{
        const r = t.flatMap((t)=>"app" === t.type ? [
                t.app
            ] : []), n = t.length - r.length;
        3 !== n && e.addIssue({
            code: BA,
            message: `Expected exactly 3 icon actions, got ${n}`
        });
        for (const t of kA){
            const n = r.filter((e)=>e === t).length;
            1 !== n && e.addIssue({
                code: BA,
                message: `Expected exactly one "${t}" action, got ${n}`
            });
        }
    }), qA = ng({
        coding: vA,
        tasks: vA
    }).strict(), RA = [
        "software-engineer",
        "designer",
        "product-manager",
        "researcher",
        "data-scientist",
        "student",
        "marketer",
        "operations",
        "something-else"
    ], PA = Ag(Ip().max(100), qA).superRefine((t, e)=>{
        const r = new Set(RA);
        for (const n of Object.keys(t))r.has(n) || e.addIssue({
            code: BA,
            message: `Unknown FTUX first-action job role key: ${n}`,
            path: [
                n
            ]
        });
    }), TA = (Bh().int().positive(), Bh().int().positive(), Bh().int().positive(), Bh().int().positive(), Bh().int().positive(), Bh().int().positive(), Bh().int().positive(), Bh().int().positive(), Bh().int().positive(), Bh().int().positive(), ng({
        enabled: Rh(),
        instructionsUrl: Ip().nullish()
    }), ng({
        products: Ag(Ip(), Ig([
            "pro",
            "pro_plus",
            "ultra"
        ]))
    }), ng({
        report_interval_ms: Bh().int().positive(),
        jitter_fraction: Bh().min(0).max(1)
    }), ng({
        initial_timeout_ms: Bh(),
        retry_timeout_ms: Bh(),
        max_attempts: Bh()
    }), ng({
        pollIntervalMs: Bh().nullable(),
        requestIdleTimeoutMs: Bh().nullable()
    }), ng({
        deadline_ms: Bh(),
        max_stale_age_ms: Bh()
    }), ng({
        maxClosureBytes: Bh().int().positive(),
        maxClosureBlobs: Bh().int().positive(),
        putConcurrency: Bh().int().min(1).max(32),
        parallelListing: Rh(),
        migrationAgentConcurrency: Bh().int().min(1).max(32),
        migrationReadBatchBlobs: Bh().int().min(1).max(64),
        migrationPutConcurrency: Bh().int().min(1).max(32),
        migrationCopyConcurrency: Bh().int().min(1).max(64),
        migrationExportCommandTimeoutMs: Bh().int().min(6e4).max(6e5),
        migrationHostWindowMs: Bh().int().min(6e4).max(27e5),
        migrationExportActivityTimeoutMs: Bh().int().min(6e4).max(18e5)
    }), ng({
        control: Ig([
            "legacy_gates",
            "config"
        ]),
        mode: Ig([
            "off",
            "shadow",
            "live"
        ]),
        autoReviewEnforce: Rh()
    }), ng({
        mode: Ig([
            "off",
            "shadow",
            "on"
        ])
    }), ng({
        sampleRate: Bh().min(0).max(1),
        connectors: tg(ng({
            name: Ip().min(1),
            hosts: tg(Ip().min(1)),
            sendTools: tg(Ip().min(1)),
            participants: ng({
                args: tg(Ip().min(1)).min(1),
                ownerArgs: tg(Ip().min(1)).optional()
            }).optional()
        })),
        firstPartySendTools: tg(ng({
            name: Ip().min(1),
            toolName: Ip().min(1)
        })).optional()
    }), ng({
        basePrompt: Ip()
    }), ng({
        healthcheck_timeout_ms: Bh().int().positive(),
        remote_extension_host_startup_grace_ms: Bh().int().nonnegative()
    }), ng({
        interval_ms: Bh().int().positive()
    }), ng({
        stackTraceLimitFloor: Bh().int().nonnegative()
    }), ng({
        windowIdleMinutesToSuspend: Bh().int().nonnegative(),
        hiddenAgentMinutesToSuspend: Bh().int().nonnegative(),
        suspendWhileWindowFocused: Rh(),
        maxDormantQueuedMessages: Bh().int().positive(),
        maxDormantQueuedBytes: Bh().int().positive(),
        hardMaxDormantQueuedMessages: Bh().int().positive(),
        hardMaxDormantQueuedBytes: Bh().int().positive()
    }), ng({
        idleMinutesToKillExtensionHost: Bh().int().nonnegative(),
        freeMemoryPercentageToKillExtensionHost: Bh().min(0).max(100),
        killUserExtensionHost: Rh()
    }), ng({
        rpcTimeoutMs: Bh().int().positive()
    }), ng({
        outputSuppressionWindowMs: Bh().int().positive(),
        outputSuppressionThresholdCharsPerSecond: Bh().int().positive(),
        outputSuppressionMinChars: Bh().int().positive(),
        outputLimiterFlushIntervalMs: Bh().int().positive(),
        outputLimiterMaxBufferedBytes: Bh().int().positive(),
        extHostMinBatchIntervalMs: Bh().int().positive(),
        extHostMaxBatchIntervalMs: Bh().int().positive(),
        extHostBytesPerIntervalStep: Bh().int().positive()
    }), ng({
        model: Ip(),
        iterations: Bh(),
        agentic_iterations: Bh(),
        agentic_model: Ip(),
        deep_review_model: Ip(),
        context_lines: Bh()
    }), ng({
        tokenUsageThresholdPercentage: Bh(),
        tolerancePercentage: Bh(),
        inflightMaxAgeMinutes: Bh(),
        speculativeStreamTimeoutMinutes: Bh()
    }), ng({
        message: Ip()
    }), ng({
        enable: Rh(),
        enabled_models: tg(Ip()),
        force_enable_on_all_models: Rh(),
        group_text: Rh(),
        group_thinking: Rh(),
        group_todos: Rh(),
        group_edits: Rh(),
        smooth_stream_enable: Rh(),
        grouped_text_max_length: Bh(),
        grouped_text_max_length_composer_family: Bh(),
        tool_summary_mode: Ip(),
        nest_tool_blocks: Rh()
    }), ng({
        meta_parent_model: Ip(),
        allow_subagent_followups: Rh(),
        enable_notes: Rh()
    }), ng({
        startup_tips: tg(ng({
            id: Ip(),
            text: Ip(),
            enabled: Rh().optional()
        }))
    }), ng({
        tips: tg(ng({
            id: Ip(),
            text: Ip(),
            targetSurfaces: tg(Ig([
                "editor",
                "glass"
            ])).min(1)
        }).strict()),
        config: ng({
            intervalMs: Bh().positive(),
            devIntervalMs: Bh().positive().optional(),
            minClientVersion: Ip()
        }).strict()
    }).strict(), ng({
        showSettings: Rh(),
        keepIsland: Rh(),
        sidebarLocation: Ig([
            "left",
            "right",
            "user",
            "noop"
        ])
    }), ng({
        default_diff_mode: Ig([
            "unified",
            "diffs"
        ])
    }), ng({
        enabledForNal: Rh(),
        enabledForOal: Rh(),
        fromModes: tg(Ip()),
        targetModes: tg(Ip())
    }), ng({
        authToolDescription: Ip(),
        errorStatusMessage: Ip(),
        needsAuthStatusMessageWithAuthTool: Ip()
    }), ng({
        oauthAttemptTtlMs: Bh().min(6e4).max(6048e5),
        refreshLockTtlMs: Bh().min(2e3).max(12e4).nullish(),
        refreshLockMaxHoldMs: Bh().min(3e4).max(36e5).optional(),
        registrationLockTtlMs: Bh().min(2e3).max(12e4).nullish()
    }), ng({
        classifyBeforeWipe: Rh()
    }), ng({
        enabled: Rh(),
        denylist: tg(Ip()),
        ipv4Hosts: tg(Ip()).optional()
    }), ng({
        operations: tg(Ig([
            "refresh",
            "registration"
        ])),
        executorKinds: tg(Ig([
            "backendHttpMcp",
            "cloudAgent",
            "agentHost",
            "localIde",
            "remoteExtensionHost"
        ])),
        providerAllowlist: tg(Ip()),
        fallbackMode: Ig([
            "fail_open",
            "fail_closed"
        ]),
        refreshLockTtlMs: Bh().min(2e3).max(12e4),
        registrationLockTtlMs: Bh().min(2e3).max(12e4),
        waitPollIntervalMs: Bh().min(25).max(5e3),
        waitJitterMs: Bh().min(0).max(5e3),
        maxWaitMs: Bh().min(0).max(12e4)
    }), ng({
        sustainedPressureWindowMs: Bh(),
        profileDurationMs: Bh(),
        minIntervalMs: Bh(),
        maxRetainedProfiles: Bh()
    }), ng({
        firstTokenDeadlineMs: Bh(),
        idleDeadlineMs: Bh()
    }), ng({
        maxDecorations: Bh()
    }), ng({
        enableMainProcessCloudRefresh: Rh().default(!1),
        activeIntervalMs: Bh().int().min(5e3).max(36e5),
        idleIntervalMs: Bh().int().min(5e3).max(36e5),
        emptyIntervalMs: Bh().int().min(5e3).max(36e5),
        engagementThrottleMs: Bh().int().min(1e3).max(6e4),
        menuCap: Bh().int().min(1).max(100),
        enablePoll: Rh(),
        enableEngagement: Rh(),
        enablePower: Rh()
    }), ng({
        enabled: Rh(),
        flushIntervalMs: Bh(),
        sampleRate: Bh(),
        maxScriptsPerLoaf: Bh(),
        maxBatchBytes: Bh(),
        loafThresholdMs: Bh(),
        maxEventsPerFlush: Bh()
    }), ng({
        version: Bh()
    }), ng({
        allowlist: tg(Ip())
    }), ng({
        logSizeThreshold: Bh(),
        logPreviewLines: Bh(),
        logPreviewChars: Bh()
    }), ng({
        mode: Ig([
            "off",
            "on_logged_in",
            "on"
        ])
    }), ng({
        tools: Ag(Ip(), ng({
            ttl: Bh().optional(),
            maxConcurrent: Bh().optional()
        })),
        defaultTtl: Bh(),
        defaultMaxConcurrent: Bh()
    }), ng({
        num_threads: Bh(),
        fallback_num_threads: Bh(),
        use_batch_executor: Rh(),
        batch_executor_wait_ms: Bh()
    }), ng({
        enabled: tg(Ip()),
        pingIdleConnection: Rh().nullable(),
        pingIntervalMs: Bh().nullable(),
        pingTimeoutMs: Bh().nullable(),
        idleConnectionTimeoutMs: Bh().nullable()
    }), ng({
        poolSize: Bh()
    }), ng({
        keepAliveInitialDelayMs: Bh().nullable()
    }), ng({
        maxConnections: Bh()
    }), ng({
        idleHoldMs: Bh(),
        echoTimeoutMs: Bh(),
        concurrency: Bh()
    }), ng({
        sampling_rate: Bh()
    }), ng({
        hooks_ready_timeout_ms: Bh()
    }), ng({
        thresholds_ms: tg(Bh())
    }), ng({
        error_type_denylist: tg(Ip())
    }), ng({
        advisoryTimeoutMs: Bh(),
        failTimeoutMs: Bh()
    }), ng({
        mode: Ig([
            "legacy",
            "dual",
            "ref_only"
        ]),
        max_blob_bytes: Bh().int().positive(),
        max_inline_dynamic_bytes: Bh().int().positive()
    }), ng({
        timeout_ms: Bh()
    }), ng({
        enabled: Rh(),
        min_display_threshold_ms: Bh()
    }), ng({
        ad_id_to_show: Ip()
    }), ng({
        quiet_period_ms: Bh(),
        first_launch_quiet_period_ms: Bh()
    }), ng({
        max_resume_age_ms: Bh().int().min(Na.Zw).max(Na.fg)
    }), ng({
        enabled: Rh(),
        subsample_polling_rate_sec: Bh(),
        sample_polling_rate_min: Bh()
    }), ng({
        user_routing_enabled: Rh(),
        inactive_days: Bh(),
        ch_timeout_ms: Bh(),
        ch_cache_ttl_seconds: Bh(),
        local_routing_enabled: Rh()
    }), ng({
        retriableErrors: tg(ng({
            code: Ip(),
            errorMessage: Ip().optional(),
            method: Ip().optional()
        }))
    }), ng({
        maxRetries: Bh().nullish(),
        baseDelayMs: Bh().nullish(),
        maxDelayMs: Bh().nullish()
    }), ng({
        targetCharsPerFrame: Bh(),
        maxLagFrames: Bh(),
        barrierMaxWaitMs: Bh()
    }), ng({
        local_enabled: Rh(),
        backend_reporting_enabled: Rh(),
        network_diagnostics_reporting_enabled: Rh().optional(),
        subsample_polling_rate_sec: Bh(),
        sample_polling_rate_min: Bh()
    }), ng({
        monitor_enabled: Rh(),
        low_memory_sustained_sec: Bh(),
        min_agent_process_age_sec: Bh(),
        low_memory_available_pct: Bh(),
        low_memory_available_abs_gb: Bh(),
        cpu_high_pct: Bh(),
        cpu_high_sustained_sec: Bh(),
        min_reported_cpu_pct: Bh()
    }), ng({
        local_enabled: Rh(),
        backend_reporting_enabled: Rh(),
        subsample_polling_rate_sec: Bh(),
        sample_polling_rate_min: Bh()
    }), ng({
        enabled: Rh(),
        sample_ratio: Bh()
    }), ng({
        enabled: Rh(),
        drain_interval_sec: Bh()
    }), ng({
        enabled: Rh()
    }), ng({
        max_bytes: Bh()
    }), ng({
        maxRunning: Bh().int().positive()
    }), ng({
        min_version: Ip(),
        backend_min_version: Ip(),
        novnc_port_token_min_version: Ip(),
        hosted_mcp_oauth_callback_min_version: Ip(),
        max_age_days: Bh().int().min(0).catch(0)
    }), ng({
        min_recommended_build: Bh(),
        min_allowed_build: Bh(),
        update_url: Ip()
    }), ng({
        modelId: Ip().min(1),
        maxMode: Rh(),
        parameters: tg(ng({
            id: Ip().min(1),
            value: Ip()
        }))
    }), ng({
        soft_limit_mb: Bh(),
        hard_limit_mb: Bh()
    }), ng({
        modelId: Ip(),
        maxMode: Rh(),
        parameters: tg(ng({
            id: Ip().min(1),
            value: Ip()
        }))
    }), ng({
        modelId: Ip(),
        maxMode: Rh(),
        parameters: tg(ng({
            id: Ip().min(1),
            value: Ip()
        }))
    }), ng({
        enabled: Rh(),
        sample_rate_denominator: Bh(),
        cooldown_seconds: Bh(),
        signup_grace_seconds: Bh()
    }), ng({
        sync_debounce_ms: Bh().int().min(250).max(36e5),
        idle_backoff_factor: Bh().min(1).max(4).optional(),
        sync_idle_max_ms: Bh().int().min(250).max(36e5).optional(),
        idle_quiesce_ms: Bh().int().min(0).max(36e5).optional(),
        large_target_ttl_ms: Bh().int().min(6e4).max(864e5).optional(),
        sync_backoff_base_ms: Bh().int().min(100).max(36e5),
        sync_backoff_max_ms: Bh().int().min(100).max(36e5),
        project_sync_debounce_ms: Bh().int().min(250).max(36e5),
        project_sync_idle_max_ms: Bh().int().min(250).max(36e5).optional(),
        project_sync_backoff_base_ms: Bh().int().min(100).max(36e5),
        project_sync_backoff_max_ms: Bh().int().min(100).max(36e5),
        passive_retry_interval_ms: Bh().int().min(0).max(36e5),
        passive_index_poll_interval_ms: Bh().int().min(0).max(36e5),
        project_store_poll_interval_ms: Bh().int().min(250).max(36e5),
        path_refresh_min_interval_ms: Bh().int().min(0).max(36e5).optional(),
        project_notes_poll_interval_ms: Bh().int().min(1e3).max(36e5).optional(),
        max_file_size_bytes: Bh().int().min(1024).max(1073741824),
        token_refresh_buffer_ms: Bh().int().min(0).max(6e5),
        mint_terminal_denial_cache_ms: ag([
            kg(0),
            Bh().int().min(6e4).max(864e5)
        ]).optional(),
        skip_denied_mount_sync: ag([
            kg(0),
            kg(1)
        ]).optional(),
        rpc_retry_max_attempts: Bh().int().min(1).max(10),
        rpc_retry_base_delay_ms: Bh().int().min(1).max(6e4),
        rpc_retry_max_delay_ms: Bh().int().min(1).max(3e5),
        rpc_retry_multiplier: Bh().min(1).max(10),
        token_refresh_jitter_ratio: ag([
            kg(0),
            Bh().min(.05).max(.9)
        ]).optional(),
        min_token_slack_ms: Bh().int().min(0).max(6e4).optional(),
        mint_retry_policy_version: ag([
            kg(0),
            kg(1)
        ]).optional(),
        mint_retry_max_attempts: Bh().int().min(1).max(5).optional(),
        mint_retry_base_delay_ms: Bh().int().min(1).max(1e4).optional(),
        mint_retry_max_delay_ms: Bh().int().min(1).max(6e4).optional(),
        mint_retry_budget_ratio: Bh().min(0).max(1).optional(),
        mint_retry_budget_floor: Bh().int().min(0).max(100).optional(),
        mint_transient_negative_cache_base_ms: Bh().int().min(100).max(6e5).optional(),
        mint_transient_negative_cache_max_ms: Bh().int().min(100).max(36e5).optional(),
        mint_gate_open_threshold: Bh().int().min(1).max(1e3).optional(),
        mint_gate_window_ms: Bh().int().min(1e3).max(6e5).optional(),
        mint_gate_open_base_ms: Bh().int().min(100).max(6e5).optional(),
        mint_gate_open_max_ms: Bh().int().min(100).max(36e5).optional(),
        rpc_timeout_ms: Bh().int().min(1e3).max(6e5),
        blob_idle_timeout_ms: ag([
            kg(0),
            Bh().int().min(1e3).max(6e5)
        ]),
        blob_connect_timeout_ms: ag([
            kg(0),
            Bh().int().min(1e3).max(3e5)
        ]).optional(),
        sync_round_timeout_ms: ag([
            kg(0),
            Bh().int().min(3e4).max(36e5)
        ]),
        sync_round_progress_timeout_ms: ag([
            kg(0),
            Bh().int().min(3e4).max(36e5)
        ]).optional(),
        sync_round_hard_cap_ms: ag([
            kg(0),
            Bh().int().min(6e4).max(72e5)
        ]).optional(),
        sync_round_unwind_timeout_ms: Bh().int().min(1e3).max(6e5),
        lock_release_failure_threshold: Bh().int().min(1).max(20),
        lock_release_failure_streak_threshold: Bh().int().min(0).max(100).optional(),
        lock_release_failure_streak_passive_ms: Bh().int().min(5e3).max(36e5).optional(),
        resume_gap_threshold_ms: ag([
            kg(0),
            Bh().int().min(3e4).max(36e5)
        ]),
        resume_detection_mode: Ig([
            "mono_gap",
            "timer_lateness"
        ]).optional(),
        dirty_passive_stalled_threshold_ms: ag([
            kg(0),
            Bh().int().min(3e4).max(36e5)
        ]),
        s3_concurrency: Bh().int().min(1).max(64),
        list_concurrency: Bh().int().min(1).max(64),
        list_walk_concurrency: Bh().int().min(1).max(64).optional(),
        hash_concurrency: Bh().int().min(1).max(64),
        presign_concurrency: Bh().int().min(1).max(64),
        multipart_upload_threshold_bytes: Bh().int().min(5242880).max(1073741824),
        multipart_part_size_bytes: Bh().int().min(5242880).max(536870912),
        multipart_presign_window_size: Bh().int().min(1).max(32),
        pull_presign_window_size: Bh().int().min(1).max(1e3),
        multipart_complete_max_attempts: Bh().int().min(1).max(5),
        multipart_max_restarts: Bh().int().min(0).max(2),
        multipart_max_conflict_renames: Bh().int().min(0).max(2),
        multipart_max_expiry_refreshes: Bh().int().min(0).max(3),
        write_barrier_timeout_ms: Bh().int().min(0).max(6e4),
        scoped_reserved_slots: Bh().int().min(0).max(8),
        path_sync_request_poll_ms: Bh().int().min(0).max(6e4),
        path_sync_request_wait_poll_ms: Bh().int().min(1).max(6e4),
        exclusive_mutation_claim_poll_ms: Bh().int().min(50).max(6e4),
        shared_scheduler: Rh().optional(),
        periodic_coalesce_ms: Bh().int().min(250).max(3e4).optional(),
        remote_version_enabled: Rh().optional(),
        version_full_list_interval_ms: Bh().int().min(36e5).max(6048e5).optional(),
        version_audit_sample_rate: Bh().min(0).max(1).optional(),
        version_probe_enabled: Rh().optional(),
        version_probe_max_entries: Bh().int().min(1).max(100).optional(),
        stale_store_root_max_idle_ms: Bh().int().min(0),
        store_root_id_fence: Rh().optional(),
        index_closed_invalidates_session: Rh().optional(),
        store_eviction_mode: Ig([
            "legacy_sweep",
            "off",
            "dry_run",
            "quarantine",
            "on"
        ]).optional(),
        store_eviction_quarantine_ms: Bh().int().min(0).optional(),
        store_eviction_max_roots_per_run: Bh().int().min(1).optional(),
        store_eviction_max_hash_bytes_per_run: Bh().int().min(1).optional(),
        store_eviction_mark_ttl_ms: Bh().int().min(1e3).max(6e5).optional(),
        store_eviction_min_interval_ms: Bh().int().min(0).optional(),
        tombstone_full_refresh_rounds: Bh().int().min(1),
        tombstone_full_refresh_interval_ms: Bh().int().min(0),
        tombstone_prune_slack_ms: Bh().int().min(0),
        local_stat_fast_path: Ig([
            "off",
            "posix",
            "all"
        ]).optional(),
        push_order: Ig([
            "scan",
            "size_asc"
        ]).optional(),
        local_stat_fast_path_audit_rate: Bh().min(0).max(1).optional(),
        local_stat_racy_margin_ms: Bh().int().min(0).max(6e4).optional(),
        harness_recovery_policy: Ig([
            "latch",
            "recover"
        ]).optional(),
        harness_recovery_start_jitter_ms: Bh().int().min(0).max(3e5).optional(),
        harness_recovery_probe_base_ms: Bh().int().min(1e3).max(36e5).optional(),
        harness_recovery_probe_max_ms: Bh().int().min(1e3).max(36e5).optional(),
        harness_remembered_mounts_max: Bh().int().min(0).max(64).optional(),
        mount_policy: Ig([
            "eager",
            "lazy"
        ]).nullable().optional(),
        surfaces: Ag(Ip(), ng({
            sync_debounce_ms: Bh().int().min(250).max(36e5).optional(),
            idle_backoff_factor: Bh().min(1).max(4).optional(),
            sync_idle_max_ms: Bh().int().min(250).max(36e5).optional(),
            idle_quiesce_ms: Bh().int().min(0).max(36e5).optional(),
            large_target_ttl_ms: Bh().int().min(6e4).max(864e5).optional(),
            sync_backoff_base_ms: Bh().int().min(100).max(36e5).optional(),
            sync_backoff_max_ms: Bh().int().min(100).max(36e5).optional(),
            project_sync_debounce_ms: Bh().int().min(250).max(36e5).optional(),
            project_sync_idle_max_ms: Bh().int().min(250).max(36e5).optional(),
            project_sync_backoff_base_ms: Bh().int().min(100).max(36e5).optional(),
            project_sync_backoff_max_ms: Bh().int().min(100).max(36e5).optional(),
            passive_retry_interval_ms: Bh().int().min(0).max(36e5).optional(),
            passive_index_poll_interval_ms: Bh().int().min(0).max(36e5).optional(),
            project_store_poll_interval_ms: Bh().int().min(250).max(36e5).optional(),
            path_refresh_min_interval_ms: Bh().int().min(0).max(36e5).optional(),
            project_notes_poll_interval_ms: Bh().int().min(1e3).max(36e5).optional(),
            max_file_size_bytes: Bh().int().min(1024).max(1073741824).optional(),
            token_refresh_buffer_ms: Bh().int().min(0).max(6e5).optional(),
            mint_terminal_denial_cache_ms: ag([
                kg(0),
                Bh().int().min(6e4).max(864e5)
            ]).optional(),
            skip_denied_mount_sync: ag([
                kg(0),
                kg(1)
            ]).optional(),
            rpc_retry_max_attempts: Bh().int().min(1).max(10).optional(),
            rpc_retry_base_delay_ms: Bh().int().min(1).max(6e4).optional(),
            rpc_retry_max_delay_ms: Bh().int().min(1).max(3e5).optional(),
            rpc_retry_multiplier: Bh().min(1).max(10).optional(),
            token_refresh_jitter_ratio: ag([
                kg(0),
                Bh().min(.05).max(.9)
            ]).optional(),
            min_token_slack_ms: Bh().int().min(0).max(6e4).optional(),
            mint_retry_policy_version: ag([
                kg(0),
                kg(1)
            ]).optional(),
            mint_retry_max_attempts: Bh().int().min(1).max(5).optional(),
            mint_retry_base_delay_ms: Bh().int().min(1).max(1e4).optional(),
            mint_retry_max_delay_ms: Bh().int().min(1).max(6e4).optional(),
            mint_retry_budget_ratio: Bh().min(0).max(1).optional(),
            mint_retry_budget_floor: Bh().int().min(0).max(100).optional(),
            mint_transient_negative_cache_base_ms: Bh().int().min(100).max(6e5).optional(),
            mint_transient_negative_cache_max_ms: Bh().int().min(100).max(36e5).optional(),
            mint_gate_open_threshold: Bh().int().min(1).max(1e3).optional(),
            mint_gate_window_ms: Bh().int().min(1e3).max(6e5).optional(),
            mint_gate_open_base_ms: Bh().int().min(100).max(6e5).optional(),
            mint_gate_open_max_ms: Bh().int().min(100).max(36e5).optional(),
            rpc_timeout_ms: Bh().int().min(1e3).max(6e5).optional(),
            blob_idle_timeout_ms: ag([
                kg(0),
                Bh().int().min(1e3).max(6e5)
            ]).optional(),
            blob_connect_timeout_ms: ag([
                kg(0),
                Bh().int().min(1e3).max(3e5)
            ]).optional(),
            sync_round_timeout_ms: ag([
                kg(0),
                Bh().int().min(3e4).max(36e5)
            ]).optional(),
            sync_round_progress_timeout_ms: ag([
                kg(0),
                Bh().int().min(3e4).max(36e5)
            ]).optional(),
            sync_round_hard_cap_ms: ag([
                kg(0),
                Bh().int().min(6e4).max(72e5)
            ]).optional(),
            sync_round_unwind_timeout_ms: Bh().int().min(1e3).max(6e5).optional(),
            lock_release_failure_threshold: Bh().int().min(1).max(20).optional(),
            lock_release_failure_streak_threshold: Bh().int().min(0).max(100).optional(),
            lock_release_failure_streak_passive_ms: Bh().int().min(5e3).max(36e5).optional(),
            resume_gap_threshold_ms: ag([
                kg(0),
                Bh().int().min(3e4).max(36e5)
            ]).optional(),
            resume_detection_mode: Ig([
                "mono_gap",
                "timer_lateness"
            ]).optional(),
            dirty_passive_stalled_threshold_ms: ag([
                kg(0),
                Bh().int().min(3e4).max(36e5)
            ]).optional(),
            s3_concurrency: Bh().int().min(1).max(64).optional(),
            list_concurrency: Bh().int().min(1).max(64).optional(),
            list_walk_concurrency: Bh().int().min(1).max(64).optional(),
            hash_concurrency: Bh().int().min(1).max(64).optional(),
            presign_concurrency: Bh().int().min(1).max(64).optional(),
            multipart_upload_threshold_bytes: Bh().int().min(5242880).max(1073741824).optional(),
            multipart_part_size_bytes: Bh().int().min(5242880).max(536870912).optional(),
            multipart_presign_window_size: Bh().int().min(1).max(32).optional(),
            pull_presign_window_size: Bh().int().min(1).max(1e3).optional(),
            multipart_complete_max_attempts: Bh().int().min(1).max(5).optional(),
            multipart_max_restarts: Bh().int().min(0).max(2).optional(),
            multipart_max_conflict_renames: Bh().int().min(0).max(2).optional(),
            multipart_max_expiry_refreshes: Bh().int().min(0).max(3).optional(),
            write_barrier_timeout_ms: Bh().int().min(0).max(6e4).optional(),
            scoped_reserved_slots: Bh().int().min(0).max(8).optional(),
            path_sync_request_poll_ms: Bh().int().min(0).max(6e4).optional(),
            path_sync_request_wait_poll_ms: Bh().int().min(1).max(6e4).optional(),
            exclusive_mutation_claim_poll_ms: Bh().int().min(50).max(6e4).optional(),
            shared_scheduler: Rh().optional(),
            periodic_coalesce_ms: Bh().int().min(250).max(3e4).optional(),
            remote_version_enabled: Rh().optional(),
            version_full_list_interval_ms: Bh().int().min(36e5).max(6048e5).optional(),
            version_audit_sample_rate: Bh().min(0).max(1).optional(),
            version_probe_enabled: Rh().optional(),
            version_probe_max_entries: Bh().int().min(1).max(100).optional(),
            stale_store_root_max_idle_ms: Bh().int().min(0).optional(),
            store_root_id_fence: Rh().optional(),
            index_closed_invalidates_session: Rh().optional(),
            store_eviction_mode: Ig([
                "legacy_sweep",
                "off",
                "dry_run",
                "quarantine",
                "on"
            ]).optional(),
            store_eviction_quarantine_ms: Bh().int().min(0).optional(),
            store_eviction_max_roots_per_run: Bh().int().min(1).optional(),
            store_eviction_max_hash_bytes_per_run: Bh().int().min(1).optional(),
            store_eviction_mark_ttl_ms: Bh().int().min(1e3).max(6e5).optional(),
            store_eviction_min_interval_ms: Bh().int().min(0).optional(),
            tombstone_full_refresh_rounds: Bh().int().min(1).optional(),
            tombstone_full_refresh_interval_ms: Bh().int().min(0).optional(),
            tombstone_prune_slack_ms: Bh().int().min(0).optional(),
            local_stat_fast_path: Ig([
                "off",
                "posix",
                "all"
            ]).optional(),
            push_order: Ig([
                "scan",
                "size_asc"
            ]).optional(),
            local_stat_fast_path_audit_rate: Bh().min(0).max(1).optional(),
            local_stat_racy_margin_ms: Bh().int().min(0).max(6e4).optional(),
            harness_recovery_policy: Ig([
                "latch",
                "recover"
            ]).optional(),
            harness_recovery_start_jitter_ms: Bh().int().min(0).max(3e5).optional(),
            harness_recovery_probe_base_ms: Bh().int().min(1e3).max(36e5).optional(),
            harness_recovery_probe_max_ms: Bh().int().min(1e3).max(36e5).optional(),
            harness_remembered_mounts_max: Bh().int().min(0).max(64).optional(),
            mount_policy: Ig([
                "eager",
                "lazy"
            ]).nullable().optional()
        }).strict()).default({})
    }).strict(), ng({
        mint_refresh_slack_ms: Bh().int().min(0).max(6e5),
        mint_failure_base_ms: Bh().int().min(100).max(6e4),
        mint_failure_max_ms: Bh().int().min(1e3).max(6e5),
        mint_failure_jitter: Bh().min(0).max(.5),
        mint_cache_max_conversations: Bh().int().min(16).max(4096)
    }), ng({
        maxBytes: Bh().int().positive(),
        inlineMaxBytes: Bh().int().positive(),
        signedUrlMaxBytes: Bh().int().positive(),
        cloudMaxVideoAttachmentsPerRequest: Bh().int().nonnegative(),
        cloudMaxDocumentAttachmentsPerRequest: Bh().int().nonnegative(),
        localMaxVideoAttachmentsPerRequest: Bh().int().positive(),
        localMaxTotalInlineVideoBytesPerRequest: Bh().int().positive()
    }), ng({
        limit: Bh()
    }), ng({
        modelSlug: Ip(),
        modelIdWithParams: ng({
            modelId: Ip(),
            params: tg(ng({
                id: Ip(),
                value: Ip()
            }))
        })
    }), ng({
        proceed_instructions: Ip(),
        mark_fixed_instructions: Ip()
    }), ng({
        maxChatsToRead: Bh(),
        maxProjectsToGroup: Bh(),
        model: Ip(),
        promptTemplate: Ip(),
        secondStepPromptTemplate: Ip()
    }), ng({
        defaultUrl: Ip()
    }), ng({
        agentTabSelectionTTL: Bh()
    }), ng({
        showDraftsInSidebar: Rh()
    }), ng({
        pillLabel: Ip().min(1).max(80),
        tooltip: Ip().min(1).max(240),
        dropdownAriaLabel: Ip().min(1).max(120),
        cloudOptionLabel: Ip().min(1).max(80),
        localOptionLabel: Ip().min(1).max(80),
        fixCiPillSingleLabel: Ip().min(1).max(80),
        fixCiPillPluralLabelTemplate: Ip().min(1).max(120),
        fixCiPillLoadingLabel: Ip().min(1).max(80),
        fixCiPillLoadingProgressLabel: Ip().min(1).max(80),
        fsdFixCiPillSingleLabel: Ip().min(1).max(80),
        fsdFixCiPillPluralLabelTemplate: Ip().min(1).max(120),
        fsdFixCiPillLoadingLabel: Ip().min(1).max(80),
        fsdFixCiPillLoadingProgressLabel: Ip().min(1).max(80)
    }), ng({
        title: Ip().min(1).max(120),
        description: Ip().min(1).max(240),
        downloadCtaLabel: Ip().min(1).max(40),
        downloadUrl: Ip().url(),
        openCtaLabel: Ip().min(1).max(40),
        openUrl: Ip().min(1).max(2048)
    }), ng({
        promptTemplate: Ip()
    }), ng({
        max_loaded_agents: Bh().int().min(2).max(10)
    }), ng({
        enabled: Rh(),
        keep_recent_hidden: Bh().int().min(0)
    }), ng({
        code_gate_bytes: Bh().int().min(153600).max(52428800)
    }), ng({
        enabled: Rh(),
        sweep_interval_ms: Bh().int().positive(),
        retained_after_close_threshold_ms: Bh().int().positive()
    }), ng({
        prChecksPollIntervalMs: Bh().int().positive(),
        prChecksPollMaxBackoffMs: Bh().int().positive(),
        prChecksErrorBackoffMultiplier: Bh().min(1).max(4),
        prChecksCacheTtlSeconds: Bh().int().positive(),
        scmPrMetadataCacheTtlSeconds: Bh().int().positive(),
        scmPrDetailedStatusCacheTtlSeconds: Bh().int().positive(),
        scmPrForBranchCacheTtlWhenPrsSeconds: Bh().int().positive(),
        scmPrForBranchCacheTtlWhenEmptySeconds: Bh().int().positive(),
        scmPrCodeownersCacheTtlSeconds: Bh().int().positive(),
        scmPrCommitsCacheTtlSeconds: Bh().int().positive(),
        scmPrTimelineEventsCacheTtlSeconds: Bh().int().positive(),
        scmPrDiscussionsCacheTtlSeconds: Bh().int().positive(),
        scmPrCheckLogExcerptOkTtlSeconds: Bh().int().positive(),
        scmPrCheckLogExcerptNegativeTtlSeconds: Bh().int().positive(),
        detailedPrStatusChecksScopedAuthBreakerTtlSeconds: Bh().int().positive(),
        scmGitlabEmojiReactionCacheTtlSeconds: Bh().int().positive(),
        localAgentPrHeaderBatchPollIntervalMs: Bh().int().positive(),
        localAgentPrStatePollIntervalMs: Bh().int().positive(),
        localAgentPrBurstBumpOffsetsMs: tg(Bh().int().nonnegative()),
        cloudAgentPrStatePollIntervalMs: Bh().int().positive(),
        cloudAgentPrBurstBumpOffsetsMs: tg(Bh().int().nonnegative()),
        cloudAgentPrStatePollMaxBackoffMs: Bh().int().positive(),
        cloudAgentPrErrorBackoffMultiplier: Bh().min(1).max(4)
    }), ng({
        enabled: Rh(),
        rehydrateAfterMs: Bh().int().nonnegative()
    }), ng({
        maxTurns: Bh().int().positive().nullish()
    }), ng({
        readFilesToolMaxFileSizeInBytes: Bh(),
        editFileToolMaxFileSizeInChars: Bh(),
        fileSearchToolMaxResults: Bh(),
        listDirV2ClientSideCharacterBudget: Bh(),
        readFileV2ToolMaxFileSizeInBytes: Bh(),
        composerDiffMaxComputationTimeMs: Bh()
    }), ng({
        min_hours_between_prompts: Bh(),
        max_prompts_per_version: Bh(),
        max_prompts_per_day: Bh(),
        snooze_duration_hours: Bh()
    }), ng({
        releaseTrack: Ip(),
        statsigUrl: Ip(),
        unlockInternalTracks: Rh()
    }), ng({
        releaseTrack: Ip(),
        unlockInternalTracks: Rh()
    }), ng({
        policy: Ig([
            "all",
            "team_only",
            "none"
        ])
    }), ng({
        enabled: Rh(),
        include_credits: Rh()
    }), ng({
        channel: Ip(),
        watchIntervalMs: Bh().min(6e5).max(6048e5).nullable()
    }), ng({
        sentry_threshold_bytes: Bh(),
        attach_content: Rh()
    }), ng({
        allocation_threshold_bytes: Bh(),
        blob_url_threshold_bytes: Bh(),
        retention_age_ms: Bh(),
        sweep_interval_ms: Bh()
    }), ng({
        sentry_threshold_bytes: Bh()
    }), ng({
        sentry_threshold_bytes: Bh()
    }), ng({
        metadata_timeout_ms: Bh(),
        lifecycle_timeout_ms: Bh(),
        dashboard_timeout_ms: Bh(),
        recovery_per_retry_timeout_ms: Bh()
    }), ng({
        replays_session_sample_rate: Bh().min(0).max(1)
    }), ng({
        extensionIds: tg(Ip()),
        remoteVerificationMinVersion: Ip()
    }), ng({
        autoTitle: Ip(),
        autoDescription: Ip(),
        apiTitle: Ip(),
        apiDescription: Ip(),
        autoBeyondLimitDescription: Ip(),
        autoUsageBarLabel: Ip(),
        apiUsageBarLabel: Ip()
    }), ng({
        enabled: Rh(),
        tagLabel: Ip(),
        yellowTooltip: Ip(),
        redTooltip: Ip(),
        yellowTitle: Ip(),
        redTitle: Ip(),
        noteSubtitle: Ip(),
        notePlaceholder: Ip()
    }), ng({
        enabled: Rh(),
        title: Ip(),
        description: Ip()
    }), ng({
        flush_delay_ms: Bh().int().positive()
    }), ng({
        window_ms: Bh().int().positive(),
        min_events: Bh().int().positive(),
        report_throttle_ms: Bh().int().positive(),
        top_buckets: Bh().int().positive()
    }), ng({
        enabled_platforms: tg(Ip()),
        safety_poll_interval_ms: Bh().int().positive(),
        inactivity_timeout_ms: Bh().int().positive(),
        max_consecutive_failures: Bh().int().positive(),
        reconnect_base_delay_ms: Bh().int().positive(),
        reconnect_max_delay_ms: Bh().int().positive(),
        reconcile_delay_ms: Bh().int().positive(),
        use_list_page_tokens: Rh(),
        split_project_list: Rh(),
        exclude_archived_default: Rh(),
        projects_only_owner_lookup: Rh(),
        projects_only_owner_lookup_max_projects: Bh().int().nonnegative(),
        membership_poll_interval_ms: Bh().int().nonnegative(),
        membership_safety_poll_interval_ms: Bh().int().nonnegative()
    }), ng({
        dummy: Bh()
    }), ng({
        heap_percent: Bh()
    }), ng({
        total_cpu_percent: Bh(),
        process_cpu_percent: Bh(),
        sustained_seconds: Bh(),
        check_interval_seconds: Bh(),
        cooldown_seconds: Bh(),
        include_system_processes: Rh()
    }), ng({
        trigger_heap_percent: Bh(),
        duration_seconds: Bh(),
        sampling_interval_bytes: Bh(),
        cooldown_seconds: Bh()
    }), ng({
        enabled: Rh(),
        metrics_interval_seconds: Bh().positive(),
        sample_interval_minutes: Bh().positive()
    }), ng({
        base_threshold_mb: Bh().positive(),
        critical_offset_mb: Bh().positive(),
        show_status_entry: Rh(),
        show_internal_warning_popup: Rh(),
        show_user_toast: Rh(),
        user_toast_heap_percent: Bh().min(1).max(100),
        emit_heap_usage_metric: Rh(),
        emergency_profiling_enabled: Rh(),
        emergency_profiling_trigger_heap_percent: Bh().min(1).max(100),
        emergency_profiling_duration_seconds: Bh().positive(),
        emergency_profiling_sampling_interval_bytes: Bh().positive(),
        emergency_profiling_cooldown_seconds: Bh().positive()
    }), ng({
        clientId: Ip()
    }), ng({
        clientId: Ip()
    }), ng({
        byJobRole: Ag(Ip().max(100), tg(ng({
            pluginName: Ip().min(1).max(100),
            title: Ip().min(1),
            description: Ip().min(1),
            prompt: Ip().min(1).max(9979)
        }))),
        recommendedPluginNamesByJobRole: Ag(Ip().max(100), tg(Ip().min(1).max(100)).max(4))
    }), ng({
        enabled: Rh(),
        reportIntervalMs: Bh()
    }), ng({
        enabled: Rh(),
        sessionSampleRate: Bh().min(0).max(1)
    }), ng({
        enabled: Rh(),
        sampleRate: Bh(),
        maxEventsPerFlush: Bh(),
        reportIntervalMs: Bh(),
        deepProbe: Rh(),
        deepProbeSampleRate: Bh(),
        deepProbeMaxBytes: Bh(),
        stackAttribution: Rh(),
        stackCreationSampleRate: Bh(),
        stackRedundantThreshold: Bh(),
        maxTrackedCreationStacks: Bh(),
        maxStackReportsPerSession: Bh(),
        maxStackBytes: Bh()
    }), ng({
        enabled: Rh(),
        sampleRate: Bh(),
        observerThreshold: Bh(),
        maxTrackedSources: Bh(),
        maxReportsPerSession: Bh(),
        maxStackBytes: Bh(),
        totalObserverThreshold: Bh(),
        totalTriggeredSourceFloor: Bh(),
        totalTriggeredMaxReports: Bh()
    }), ng({
        skillDescription: Ip(),
        errorFixPromptTemplate: Ip(),
        welcomePageEnabled: Rh(),
        marketplaceCategoryKey: Ip(),
        marketplaceMaxCards: Bh().int().positive()
    }), ng({
        byJobRole: PA
    }).strict(), ng({
        per_joiner_warn_ms: Bh().int().nonnegative(),
        fire_on_will_shutdown_total_ms: Bh().int().nonnegative(),
        process_exit_total_ms: Bh().int().nonnegative()
    }), ng({
        enabled: Rh(),
        restart_time_threshold_seconds: Bh().nonnegative(),
        attach_ship_it_log: Rh(),
        max_attachment_bytes: Bh().int().nonnegative()
    }), ng({
        enabled: Rh(),
        timer_name: Ig([
            "ellapsedLoadMainBundle",
            "ellapsedRunMainBundle",
            "ellapsedAppReady",
            "ellapsedExtensions",
            "ellapsedExtensionsReady",
            "ellapsedWindowLoad",
            "ellapsedRequire",
            "ellapsedEditorRestore",
            "ellapsedWorkbench",
            "ellapsedPreWorkbenchServices"
        ]),
        threshold_ms: Bh().nonnegative()
    }), ng({
        enabled: Rh(),
        ping_interval_ms: Bh().int().positive(),
        block_threshold_ms: Bh().int().positive(),
        collect_stack_traces: Rh(),
        report_rpc_drain: Rh().optional()
    }), ng({
        enabled: Rh(),
        flush_threshold_ms: Bh().int().positive(),
        anchor_interval_ms: Bh().int().positive(),
        anchor_lag_ms: Bh().int().positive(),
        cooldown_ms: Bh().int().positive(),
        session_cap: Bh().int().positive()
    }), ng({
        enabled: Rh(),
        sample_rate: Bh().min(0).max(1),
        window_duration_ms: Bh().int().positive()
    }), ng({
        enabled: Rh(),
        sample_rate: Bh().min(0).max(1),
        time_limit_ms: Bh().int().positive().optional()
    }), ng({
        window_ms: Bh().int().positive(),
        threshold: Bh().int().positive(),
        max_records: Bh().int().positive(),
        cooldown_ms: Bh().int().nonnegative(),
        report_to_sentry: Rh(),
        report_initialize_caches: Rh()
    }), ng({
        window_ms: Bh().int().positive(),
        min_samples: Bh().int().positive(),
        fallback_ratio_threshold: Bh().min(0).max(1),
        cooldown_ms: Bh().int().nonnegative(),
        report_to_sentry: Rh()
    }), ng({
        max_in_memory_documents: Bh().int().positive().nullish()
    }), ng({
        enabled: Rh(),
        max_reply_bytes: Bh().int().positive()
    }), ng({
        enabled: Rh(),
        threshold_ms: Bh().int().positive(),
        commit_attribution: Rh().nullish()
    }), ng({
        enabled: Rh(),
        min_fps: Bh().int().positive(),
        max_drops_per_interval: Bh().int().nonnegative(),
        interval_sec: Bh().int().positive(),
        baseline_interval_sec: Bh().int().positive().nullish(),
        baseline_sample_rate: Bh().min(0).max(1).nullish()
    }), ng({
        mode: Ig([
            "off",
            "signup_link",
            "create_and_link"
        ])
    }), sg({
        sidecarManifestUrl: ag([
            kg(""),
            Ip().regex(/^https:\/\/downloads\.cursor\.com\/computer-use-sidecar\/releases\/[A-Za-z0-9][A-Za-z0-9._-]*\/[A-Za-z0-9][A-Za-z0-9._-]*\/[0-9a-f]{40}\.json$/)
        ])
    }), sg({
        x64: ag([
            kg(""),
            Ip().regex(/^https:\/\/downloads\.cursor\.com\/computer-use-sidecar\/releases\/[A-Za-z0-9][A-Za-z0-9._-]*\/[A-Za-z0-9][A-Za-z0-9._-]*\/[0-9a-f]{40}-win32-x64\.json$/)
        ]),
        arm64: ag([
            kg(""),
            Ip().regex(/^https:\/\/downloads\.cursor\.com\/computer-use-sidecar\/releases\/[A-Za-z0-9][A-Za-z0-9._-]*\/[A-Za-z0-9][A-Za-z0-9._-]*\/[0-9a-f]{40}-win32-arm64\.json$/)
        ])
    }), sg({
        darwin: ag([
            Ip(),
            sg({
                companion: Ip(),
                remote: Ip()
            })
        ]),
        win32: Ip()
    }), ng({
        enrolled: Rh(),
        enableUI: Rh(),
        orgs: tg(Ip()).min(1)
    }), {
        cursor_private_inference_hard_stop: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                instructionsUrl: null
            }
        },
        mobile_iap_products: {
            client: !0,
            fallbackValues: {
                products: {
                    "co.anysphere.cursor.pro.monthly": "pro",
                    "co.anysphere.cursor.proplus.monthly": "pro_plus",
                    "co.anysphere.cursor.ultra.monthly": "ultra",
                    "co.anysphere.sand.pro.monthly": "pro",
                    "co.anysphere.sand.proplus.monthly": "pro_plus",
                    "co.anysphere.sand.ultra.monthly": "ultra"
                }
            }
        },
        codebase_protection_reporting_config: {
            client: !0,
            fallbackValues: {
                report_interval_ms: 18e5,
                jitter_fraction: .2
            }
        },
        agent_host_bridge_wait: {
            client: !0,
            fallbackValues: {
                initial_timeout_ms: 3e4,
                retry_timeout_ms: 5e3,
                max_attempts: 9
            }
        },
        agent_host_updater_timing: {
            client: !0,
            fallbackValues: {
                pollIntervalMs: null,
                requestIdleTimeoutMs: null
            }
        },
        composer_request_context_deadline: {
            client: !0,
            fallbackValues: {
                deadline_ms: 1500,
                max_stale_age_ms: 6e5
            }
        },
        sand_working_state_warming_config: {
            client: !0,
            fallbackValues: {
                maxClosureBytes: 1073741824,
                maxClosureBlobs: 5e4,
                putConcurrency: 16,
                parallelListing: !1,
                migrationAgentConcurrency: 8,
                migrationReadBatchBlobs: 32,
                migrationPutConcurrency: 8,
                migrationCopyConcurrency: 8,
                migrationExportCommandTimeoutMs: 15e4,
                migrationHostWindowMs: 6e5,
                migrationExportActivityTimeoutMs: 9e5
            }
        },
        grok_bot_temporal_harness_rollout: {
            client: !0,
            fallbackValues: {
                control: "legacy_gates",
                mode: "shadow",
                autoReviewEnforce: !1
            }
        },
        grok_bot_loop_detection: {
            client: !0,
            fallbackValues: {
                mode: "off"
            }
        },
        grok_bot_external_send_labeling_config: {
            client: !0,
            fallbackValues: {
                sampleRate: 0,
                connectors: [
                    {
                        name: "slack",
                        hosts: [
                            "mcp.slack.com"
                        ],
                        sendTools: [
                            "slack_send_message",
                            "slack_schedule_message"
                        ]
                    },
                    {
                        name: "gmail",
                        hosts: [
                            "gmailmcp.googleapis.com",
                            "api.cursor.com"
                        ],
                        sendTools: [
                            "send_message",
                            "reply",
                            "forward",
                            "send_email",
                            "send_draft"
                        ]
                    },
                    {
                        name: "outlook",
                        hosts: [
                            "api.cursor.com/rest-mcp/outlook"
                        ],
                        sendTools: [
                            "send_mail",
                            "reply_to_mail_message",
                            "forward_mail_message",
                            "send_draft"
                        ]
                    },
                    {
                        name: "google_calendar",
                        hosts: [
                            "calendarmcp.googleapis.com",
                            "api.cursor.com"
                        ],
                        sendTools: [
                            "create_event",
                            "update_event"
                        ],
                        participants: {
                            args: [
                                "attendees",
                                "attendeeEmails",
                                "addedAttendees",
                                "addedAttendeeEmails",
                                "addAttendees"
                            ],
                            ownerArgs: [
                                "calendarId"
                            ]
                        }
                    },
                    {
                        name: "outlook_calendar",
                        hosts: [
                            "api.cursor.com"
                        ],
                        sendTools: [
                            "create_calendar_event",
                            "update_calendar_event"
                        ],
                        participants: {
                            args: [
                                "attendees"
                            ]
                        }
                    },
                    {
                        name: "google_drive_share",
                        hosts: [
                            "drivemcp.googleapis.com",
                            "api.cursor.com"
                        ],
                        sendTools: [
                            "share_file",
                            "google_drive_share_file"
                        ]
                    },
                    {
                        name: "teams",
                        hosts: [
                            "api.cursor.com"
                        ],
                        sendTools: [
                            "send_chat_message",
                            "send_channel_message",
                            "reply_to_channel_message"
                        ]
                    }
                ],
                firstPartySendTools: [
                    {
                        name: "phone_call",
                        toolName: "place_phone_call"
                    },
                    {
                        name: "imessage",
                        toolName: "SendIMessage"
                    }
                ]
            }
        },
        grok_bot_system_prompt_override: {
            client: !0,
            fallbackValues: {
                basePrompt: ""
            }
        },
        remote_workspace_readiness_config: {
            client: !0,
            fallbackValues: {
                healthcheck_timeout_ms: 3e3,
                remote_extension_host_startup_grace_ms: 3e3
            }
        },
        ai_code_tracking_poll: {
            client: !0,
            fallbackValues: {
                interval_ms: 6e5
            }
        },
        solidjs_stack_trace_limit: {
            client: !0,
            fallbackValues: {
                stackTraceLimitFloor: 0
            }
        },
        glass_remote_connection_dormancy_config: {
            client: !0,
            fallbackValues: {
                windowIdleMinutesToSuspend: 20,
                hiddenAgentMinutesToSuspend: 0,
                suspendWhileWindowFocused: !1,
                maxDormantQueuedMessages: 1e3,
                maxDormantQueuedBytes: 4194304,
                hardMaxDormantQueuedMessages: 2e4,
                hardMaxDormantQueuedBytes: 67108864
            }
        },
        idle_extension_host_killer_config: {
            client: !0,
            fallbackValues: {
                idleMinutesToKillExtensionHost: 0,
                freeMemoryPercentageToKillExtensionHost: 0,
                killUserExtensionHost: !1
            }
        },
        marketplace_listing_config: {
            client: !0,
            fallbackValues: {
                rpcTimeoutMs: 15e3
            }
        },
        editor_bugbot_config: {
            client: !0,
            fallbackValues: {
                model: "claude-4-5-sonnet-20250929",
                iterations: 0,
                agentic_iterations: 1,
                agentic_model: "claude-4.5-haiku",
                deep_review_model: "",
                context_lines: 10
            }
        },
        client_speculative_summarization_config: {
            client: !0,
            fallbackValues: {
                tokenUsageThresholdPercentage: 70,
                tolerancePercentage: 5,
                inflightMaxAgeMinutes: 5,
                speculativeStreamTimeoutMinutes: 5
            }
        },
        rate_limited_reconnect_message_config: {
            client: !0,
            fallbackValues: {
                message: "Rate limited by model provider, retrying…"
            }
        },
        new_conversation_ux_config: {
            client: !0,
            fallbackValues: {
                enable: !0,
                enabled_models: [],
                force_enable_on_all_models: !0,
                group_text: !0,
                group_thinking: !0,
                group_todos: !0,
                group_edits: !1,
                smooth_stream_enable: !1,
                grouped_text_max_length: 100,
                grouped_text_max_length_composer_family: 88,
                tool_summary_mode: "single_word",
                nest_tool_blocks: !1
            }
        },
        meta_agent_config: {
            client: !0,
            fallbackValues: {
                meta_parent_model: "claude-4.6-opus-high-fast",
                allow_subagent_followups: !0,
                enable_notes: !1
            }
        },
        task_card_tips: {
            client: !0,
            fallbackValues: {
                startup_tips: [
                    {
                        id: "cloud-subagents",
                        text: "Use /in-cloud for cloud subagents"
                    }
                ]
            }
        },
        product_tips_config: {
            client: !0,
            fallbackValues: {
                tips: [],
                config: {
                    intervalMs: 8e3,
                    minClientVersion: ""
                }
            }
        },
        composer_sandboxing_promo: {
            client: !0,
            fallbackValues: {
                version: 0
            }
        },
        playwright_log_configs: {
            client: !0,
            fallbackValues: {
                logSizeThreshold: 25e3,
                logPreviewLines: 25,
                logPreviewChars: 25e3
            }
        },
        privacy_mode_acknowledgement_onboarding: {
            client: !0,
            fallbackValues: {
                mode: "on"
            }
        },
        tools_concurrency_config: {
            client: !0,
            fallbackValues: {
                tools: {
                    RIPGREP_RAW_SEARCH: {
                        ttl: 1e4,
                        maxConcurrent: 5
                    },
                    RIPGREP_SEARCH: {
                        ttl: 1e4,
                        maxConcurrent: 5
                    }
                },
                defaultTtl: 1e4,
                defaultMaxConcurrent: 999999
            }
        },
        client_rg: {
            client: !0,
            fallbackValues: {
                num_threads: 4,
                fallback_num_threads: 4,
                use_batch_executor: !1,
                batch_executor_wait_ms: 50
            }
        },
        http2_ping_config: {
            client: !0,
            fallbackValues: {
                enabled: [],
                pingIdleConnection: null,
                pingIntervalMs: null,
                pingTimeoutMs: null,
                idleConnectionTimeoutMs: null
            }
        },
        http2_agent_connection_pool_config: {
            client: !0,
            fallbackValues: {
                poolSize: 4
            }
        },
        http1_keepalive_config: {
            client: !0,
            fallbackValues: {
                keepAliveInitialDelayMs: null
            }
        },
        nal_websocket_client_pool: {
            client: !0,
            fallbackValues: {
                maxConnections: 1
            }
        },
        ws_dark_durability_probe_config: {
            client: !0,
            fallbackValues: {
                idleHoldMs: 3e4,
                echoTimeoutMs: 5e3,
                concurrency: 4
            }
        },
        abort_controller_logging_config: {
            client: !0,
            fallbackValues: {
                sampling_rate: 1
            }
        },
        hooks_client_config: {
            client: !0,
            fallbackValues: {
                hooks_ready_timeout_ms: 2e3
            }
        },
        composer_hang_detection_config: {
            client: !0,
            fallbackValues: {
                thresholds_ms: [
                    2e3,
                    4e3,
                    6e3,
                    8e3,
                    1e4,
                    12e3,
                    14e3,
                    16e3,
                    32e3
                ]
            }
        },
        composer_errors_without_button_support: {
            client: !0,
            fallbackValues: {
                error_type_denylist: []
            }
        },
        nal_stall_detector_timeout_config: {
            client: !0,
            fallbackValues: {
                advisoryTimeoutMs: 2e4,
                failTimeoutMs: 3e4
            }
        },
        nal_request_context_blob_transport_config: {
            client: !0,
            fallbackValues: {
                mode: "legacy",
                max_blob_bytes: 15728640,
                max_inline_dynamic_bytes: 1048576
            }
        },
        simulated_thinking_error_timeout: {
            client: !0,
            fallbackValues: {
                timeout_ms: 15e3
            }
        },
        agent_loop_phase_display: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                min_display_threshold_ms: 0
            }
        },
        in_app_ads_dev_override_config: {
            client: !0,
            fallbackValues: {
                ad_id_to_show: ""
            }
        },
        in_app_ads_quiet_period_config: {
            client: !0,
            fallbackValues: {
                quiet_period_ms: 6e5,
                first_launch_quiet_period_ms: 864e5
            }
        },
        environment_setup_resume_config: {
            client: !0,
            fallbackValues: {
                max_resume_age_ms: Na.Er
            }
        },
        perf_monitor_control: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                subsample_polling_rate_sec: 0,
                sample_polling_rate_min: 0
            }
        },
        glass_reactivated_user_routing_config: {
            client: !0,
            fallbackValues: {
                user_routing_enabled: !1,
                inactive_days: 7,
                ch_timeout_ms: 500,
                ch_cache_ttl_seconds: 86400,
                local_routing_enabled: !0
            }
        },
        retry_interceptor_config: {
            client: !0,
            fallbackValues: {
                retriableErrors: [
                    {
                        code: "Unavailable"
                    },
                    {
                        code: "Internal"
                    },
                    {
                        code: "DeadlineExceeded"
                    }
                ]
            }
        },
        retry_interceptor_params_config: {
            client: !0,
            fallbackValues: {
                maxRetries: null,
                baseDelayMs: null,
                maxDelayMs: null
            }
        },
        text_delta_pacing_config: {
            client: !0,
            fallbackValues: {
                targetCharsPerFrame: 0,
                maxLagFrames: 8,
                barrierMaxWaitMs: 0
            }
        },
        extension_monitor_control: {
            client: !0,
            fallbackValues: {
                local_enabled: !1,
                backend_reporting_enabled: !1,
                network_diagnostics_reporting_enabled: !1,
                subsample_polling_rate_sec: 0,
                sample_polling_rate_min: 0
            }
        },
        agent_memory_pressure_monitor: {
            client: !0,
            fallbackValues: {
                monitor_enabled: !1,
                low_memory_sustained_sec: 30,
                min_agent_process_age_sec: 0,
                low_memory_available_pct: 10,
                low_memory_available_abs_gb: 3,
                cpu_high_pct: 90,
                cpu_high_sustained_sec: 30,
                min_reported_cpu_pct: 5
            }
        },
        sand_process_metrics: {
            client: !0,
            fallbackValues: {
                local_enabled: !1,
                backend_reporting_enabled: !1,
                subsample_polling_rate_sec: 0,
                sample_polling_rate_min: 0
            }
        },
        sand_rpc_tracing: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                sample_ratio: .01
            }
        },
        gc_trace_control: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                drain_interval_sec: 120
            }
        },
        disable_infinite_cloud_agent_stream_retries: {
            client: !0,
            fallbackValues: {
                enabled: !1
            }
        },
        cloud_agent_shared_blob_cache: {
            client: !0,
            fallbackValues: {
                max_bytes: 134217728
            }
        },
        local_subagent_limits: {
            client: !0,
            fallbackValues: {
                maxRunning: 32
            }
        },
        sand_min_client_version: {
            client: !0,
            fallbackValues: {
                min_version: "",
                backend_min_version: "",
                novnc_port_token_min_version: "",
                hosted_mcp_oauth_callback_min_version: "",
                max_age_days: 14
            }
        },
        sand_mobile_version_support: {
            client: !0,
            fallbackValues: {
                min_recommended_build: 0,
                min_allowed_build: 0,
                update_url: ""
            }
        },
        sand_computer_use_playwright_config: {
            client: !0,
            fallbackValues: {
                modelId: "sand-cua",
                maxMode: !1,
                parameters: []
            }
        },
        grok_bot_conversation_size_limits: {
            client: !0,
            fallbackValues: {
                soft_limit_mb: 256,
                hard_limit_mb: 1024
            }
        },
        sand_share_bot_export_policy: {
            client: !0,
            fallbackValues: {
                policy: "team_only"
            }
        },
        sand_usage_breakdown: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                include_credits: !1
            }
        },
        sand_default_model: {
            client: !0,
            fallbackValues: {
                modelId: "default",
                maxMode: !1,
                parameters: []
            }
        },
        sand_automations_model: {
            client: !0,
            fallbackValues: {
                modelId: "default",
                maxMode: !1,
                parameters: []
            }
        },
        sand_feedback_prompt_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                sample_rate_denominator: 100,
                cooldown_seconds: 172800,
                signup_grace_seconds: 7200
            }
        },
        agent_store_sync_client_config: {
            client: !0,
            fallbackValues: {
                sync_debounce_ms: 5e3,
                idle_backoff_factor: 1,
                sync_idle_max_ms: 5e3,
                idle_quiesce_ms: 0,
                large_target_ttl_ms: 18e5,
                sync_backoff_base_ms: 5e3,
                sync_backoff_max_ms: 6e4,
                project_sync_debounce_ms: 5e3,
                project_sync_idle_max_ms: 5e3,
                project_sync_backoff_base_ms: 5e3,
                project_sync_backoff_max_ms: 6e4,
                passive_retry_interval_ms: 5e3,
                passive_index_poll_interval_ms: 2e3,
                project_store_poll_interval_ms: 4e3,
                path_refresh_min_interval_ms: 1e3,
                project_notes_poll_interval_ms: 5e3,
                max_file_size_bytes: Da.EO,
                token_refresh_buffer_ms: 6e4,
                mint_terminal_denial_cache_ms: 18e5,
                skip_denied_mount_sync: 0,
                rpc_retry_max_attempts: 3,
                rpc_retry_base_delay_ms: 250,
                rpc_retry_max_delay_ms: 5e3,
                rpc_retry_multiplier: 2,
                token_refresh_jitter_ratio: .5,
                min_token_slack_ms: 5e3,
                mint_retry_policy_version: 1,
                mint_retry_max_attempts: 2,
                mint_retry_base_delay_ms: 250,
                mint_retry_max_delay_ms: 2e3,
                mint_retry_budget_ratio: .1,
                mint_retry_budget_floor: 3,
                mint_transient_negative_cache_base_ms: 5e3,
                mint_transient_negative_cache_max_ms: 12e4,
                mint_gate_open_threshold: 5,
                mint_gate_window_ms: 3e4,
                mint_gate_open_base_ms: 5e3,
                mint_gate_open_max_ms: 12e4,
                rpc_timeout_ms: 6e4,
                blob_idle_timeout_ms: 6e4,
                blob_connect_timeout_ms: 0,
                sync_round_timeout_ms: 3e5,
                sync_round_progress_timeout_ms: 0,
                sync_round_hard_cap_ms: 0,
                sync_round_unwind_timeout_ms: 3e4,
                lock_release_failure_threshold: 3,
                lock_release_failure_streak_threshold: 0,
                lock_release_failure_streak_passive_ms: 3e5,
                resume_gap_threshold_ms: 12e4,
                resume_detection_mode: "mono_gap",
                dirty_passive_stalled_threshold_ms: 12e4,
                s3_concurrency: 8,
                list_concurrency: 4,
                list_walk_concurrency: 4,
                hash_concurrency: 4,
                presign_concurrency: 4,
                multipart_upload_threshold_bytes: 67108864,
                multipart_part_size_bytes: 16777216,
                multipart_presign_window_size: 8,
                pull_presign_window_size: 500,
                multipart_complete_max_attempts: 3,
                multipart_max_restarts: 1,
                multipart_max_conflict_renames: 1,
                multipart_max_expiry_refreshes: 1,
                write_barrier_timeout_ms: 2e3,
                scoped_reserved_slots: 1,
                path_sync_request_poll_ms: 250,
                path_sync_request_wait_poll_ms: 50,
                exclusive_mutation_claim_poll_ms: 250,
                shared_scheduler: !1,
                periodic_coalesce_ms: 2e3,
                remote_version_enabled: !1,
                version_full_list_interval_ms: 864e5,
                version_audit_sample_rate: 0,
                version_probe_enabled: !1,
                version_probe_max_entries: 50,
                stale_store_root_max_idle_ms: 6048e5,
                store_root_id_fence: !1,
                index_closed_invalidates_session: !1,
                store_eviction_mode: "legacy_sweep",
                store_eviction_quarantine_ms: 864e5,
                store_eviction_max_roots_per_run: 4,
                store_eviction_max_hash_bytes_per_run: 268435456,
                store_eviction_mark_ttl_ms: 6e5,
                store_eviction_min_interval_ms: 216e5,
                tombstone_full_refresh_rounds: 2880,
                tombstone_full_refresh_interval_ms: 864e5,
                tombstone_prune_slack_ms: 2592e5,
                local_stat_fast_path: "off",
                push_order: "scan",
                local_stat_fast_path_audit_rate: 1,
                local_stat_racy_margin_ms: 2e3,
                harness_recovery_policy: "recover",
                harness_recovery_start_jitter_ms: 3e4,
                harness_recovery_probe_base_ms: 3e5,
                harness_recovery_probe_max_ms: 36e5,
                harness_remembered_mounts_max: 16,
                mount_policy: null,
                surfaces: {}
            }
        },
        local_subscription_mint_cache_config: {
            client: !0,
            fallbackValues: {
                mint_refresh_slack_ms: 6e4,
                mint_failure_base_ms: 5e3,
                mint_failure_max_ms: 12e4,
                mint_failure_jitter: .2,
                mint_cache_max_conversations: 256
            }
        },
        gemini_video_attachment_config: {
            client: !0,
            fallbackValues: {
                maxBytes: 31457280,
                inlineMaxBytes: 15728640,
                signedUrlMaxBytes: 15728640,
                cloudMaxVideoAttachmentsPerRequest: 5,
                cloudMaxDocumentAttachmentsPerRequest: 5,
                localMaxVideoAttachmentsPerRequest: 5,
                localMaxTotalInlineVideoBytesPerRequest: 36700160
            }
        },
        agent_layout_migration: {
            client: !0,
            fallbackValues: {
                showSettings: !1,
                keepIsland: !1,
                sidebarLocation: "noop"
            }
        },
        default_diff_mode: {
            client: !0,
            fallbackValues: {
                default_diff_mode: "diffs"
            }
        },
        switch_mode_tool_config: {
            client: !0,
            fallbackValues: {
                enabledForNal: !1,
                enabledForOal: !1,
                fromModes: [],
                targetModes: []
            }
        },
        mcp_auth_status_copy_config: {
            client: !0,
            fallbackValues: {
                authToolDescription: "Authenticate this MCP server so its tools can be used. Call this tool through your MCP tool-calling interface when STATUS.md indicates this server needs authentication.",
                errorStatusMessage: "The MCP server errored. If this server is important for completing the task, concisely inform the user and ask them to check the MCP status in Cursor's Customize page > MCPs; otherwise continue with a different approach.",
                needsAuthStatusMessageWithAuthTool: 'The MCP server needs authentication. Authenticate it by calling the `{authToolName}` tool for server "{serverIdentifier}" through your MCP tool-calling interface using an empty arguments object. If this server is important for completing the task, authenticate it first; otherwise continue with a different approach.'
            }
        },
        mcp_reconnect_config: {
            client: !0,
            fallbackValues: {
                fastRetryBaseDelayMs: 5e3,
                fastRetryMaxDelayMs: 6e4,
                fastRetryMaxAttempts: 5,
                periodicRetryBaseDelayMs: 3e5,
                periodicRetryMaxDelayMs: 18e5,
                maxPeriodicCycles: null,
                focusRetryCooldownMs: 3e5,
                inlineReconnectCooldownMs: 3e5,
                oauthBackendRefreshHydrationPollIntervalMs: 500,
                streamableHttpSession404TombstoneThreshold: 5,
                healthProbeTimeoutMs: 1e4,
                toolCallBoundedTimeoutEnabled: !0,
                toolCallIdleTimeoutMs: 12e4,
                toolCallMaxTotalTimeoutMs: 36e5,
                degradedProbeDelayMs: 3e4,
                maxDegradedProbeFailures: 3,
                keepaliveProbeDelayMs: 3e5,
                keepaliveJitterMs: 3e4,
                stabilityThresholdMs: 3e4,
                stdioConnectFailuresAreNonRetryable: !0,
                retryNonRetryableOnWake: !1,
                nonRetryableWakeRetryCooldownMs: 3e5,
                retryNonRetryableAutomatically: !1,
                networkResumeReconnectEnabled: !1,
                networkResumeReconnectDebounceMs: 5e3,
                overrides: null
            }
        },
        mcp_oauth_sweep_config: {
            client: !0,
            fallbackValues: {
                oauthAttemptTtlMs: 36e5,
                refreshLockTtlMs: null,
                refreshLockMaxHoldMs: 12e4,
                registrationLockTtlMs: null
            }
        },
        mcp_oauth_refresh_policy: {
            client: !0,
            fallbackValues: {
                classifyBeforeWipe: !1
            }
        },
        mcp_oauth_loopback_redirect: {
            client: !0,
            fallbackValues: {
                enabled: !0,
                denylist: [],
                ipv4Hosts: []
            }
        },
        mcp_oauth_backend_redis_lock_config: {
            client: !0,
            fallbackValues: {
                operations: [
                    "refresh"
                ],
                executorKinds: [
                    "backendHttpMcp",
                    "cloudAgent",
                    "agentHost"
                ],
                providerAllowlist: [],
                fallbackMode: "fail_open",
                refreshLockTtlMs: 3e4,
                registrationLockTtlMs: 3e4,
                waitPollIntervalMs: 250,
                waitJitterMs: 100,
                maxWaitMs: 3e4
            }
        },
        sand_pressure_cpu_profiler_config: {
            client: !0,
            fallbackValues: {
                sustainedPressureWindowMs: 15e4,
                profileDurationMs: 15e3,
                minIntervalMs: 216e5,
                maxRetainedProfiles: 3
            }
        },
        sand_stream_deadline_config: {
            client: !0,
            fallbackValues: {
                firstTokenDeadlineMs: 15e4,
                idleDeadlineMs: 9e4
            }
        },
        inline_diff_performance_config: {
            client: !0,
            fallbackValues: {
                maxDecorations: 100
            }
        },
        tray_refresh_config: {
            client: !0,
            fallbackValues: {
                enableMainProcessCloudRefresh: !1,
                activeIntervalMs: 15e3,
                idleIntervalMs: 6e4,
                emptyIntervalMs: 3e5,
                engagementThrottleMs: 5e3,
                menuCap: 25,
                enablePoll: !0,
                enableEngagement: !0,
                enablePower: !0
            }
        },
        performance_events_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                flushIntervalMs: 3e4,
                sampleRate: 0,
                maxScriptsPerLoaf: 10,
                maxBatchBytes: 32768,
                loafThresholdMs: 1e3,
                maxEventsPerFlush: 20
            }
        },
        background_composer_list_limit: {
            client: !0,
            fallbackValues: {
                limit: 32
            }
        },
        switch_to_model_slug_config: {
            client: !0,
            fallbackValues: {
                modelSlug: "",
                modelIdWithParams: {
                    modelId: "",
                    params: []
                }
            }
        },
        debug_mode_ui_instructions_config: {
            client: !0,
            fallbackValues: {
                proceed_instructions: "Issue reproduced, please proceed",
                mark_fixed_instructions: "The issue has been fixed. Please clean up the instrumentation."
            }
        },
        user_intent_config: {
            client: !0,
            fallbackValues: {
                maxChatsToRead: 100,
                maxProjectsToGroup: 5,
                model: "claude-4.5-opus-high-thinking",
                promptTemplate: "You are analyzing conversation transcripts to identify repeated user behaviors.\n\n## Transcript Location\nTranscripts are stored at: {{agentTranscriptsPath}}\n\n## Transcript Format\nEach '.txt' file is a human-readable conversation transcript with this structure:\n- 'user:' sections contain user messages (often wrapped in '<user_query>' tags)\n- 'assistant:' sections contain assistant responses\n- '[Tool call]' blocks show which tools were invoked\n- '[Tool result]' blocks show tool outputs\n\nFiles can be large. Focus on extracting the '<user_query>' sections which contain the actual user requests. Do NOT try to read the entire file contents because it will pollute your context.\n\n## How to Read Transcripts\n1. Use Glob to list files: \"{{agentTranscriptsPath}}/*.txt\"\n2. For each file, extract just the '<user_query>' blocks - these show what users asked for\n3. You can use Grep to search for '<user_query>' patterns across files\n\n## Task\nAnalyze the {{maxChatsToRead}} most recent conversations (by file modification time). Be thorough and do not bias towards recency when analyzing conversations. Ignore trivial conversations and conversations where nothing concrete happened.\n\nYour goal is to understand how the user interacts with the agent. Focus especially on the corrections that the user makes repeatedly. Focus on common terminal commands/workflows the user instructs the agent to do, changes, and other very stable patterns.\n\n## Evidence Standards\nWhen making claims about what the agent SHOULD or SHOULD NOT do, only cite conversations where:\n- The user explicitly corrected the agent for doing something wrong\n- The user undid or rejected an agent action\n- The user gave an explicit instruction ('don\\'t do X', 'always do Y')\n\nDo NOT infer 'don\\'t do X' from:\n- The user asking a question about X (e.g., 'should we add tests?' does not mean 'don\\'t add tests proactively')\n- The user doing X themselves (doesn't mean the agent shouldn't)\n- Absence of the agent doing X\n\nFor each claim, ask: 'Is there a conversation where the user pushed back on the agent for doing this?' If not, don't include it as a guideline. For each piece of information you discern, you must cite 4 conversations. For each citation, verify that the conversation actually backs up your claim. Never include direct quotes from user messages; summarize at a high level.\n\nThese are the sections to cover. Do not overlap these with existing user and project rules; if there is overlap or conflict always go with the existing rules.\n\n- Developer profile: How does the user interact with the agent. Focus on how much autonomy they like to give the agent vs. how much they would like to oversee the changes the agent is making. What is their workflow for getting tasks done. What kind of tasks do they often work on. Verify across many conversations, and do not extrapolate too hard.\n- Frequented areas of the codebase: Parts of the codebase the user primarily works in, and what kinds of tasks correspond to each part of the codebase.\n- Important terminal commands: Terminal commands/workflows the user runs repeatedly that are unique to the project/user workflow, and when they should be used. Focus on test, lint, and build commands. Do not include git commands.\n\nDo not write any files in this step. You will be asked in a follow-up message to write the final user profile to disk.",
                secondStepPromptTemplate: "Turn your analysis into a concise 'index.md' markdown file that will be shown to all agents in the future.\n\nWrite the file contents to: {{userIntentDirPath}}\n(This is a temporary file path and will be atomically moved to {{finalUserIntentDirPath}}.)\n\nRequirements:\n- Do not cite user messages or transcripts directly (no quotes)\n- Avoid overly specific task details; focus on stable patterns and preferences\n- Keep it reasonably short\n- For each guideline/claim, include 4 conversation citations and verify that each citation supports the claim"
            }
        },
        browser_default_url_config: {
            client: !0,
            fallbackValues: {
                defaultUrl: "https://cursor.com"
            }
        },
        glass_per_app_tabs_config: {
            client: !0,
            fallbackValues: {
                agentTabSelectionTTL: 3e4
            }
        },
        glass_tiling_config: {
            client: !0,
            fallbackValues: {
                showDraftsInSidebar: !1
            }
        },
        glass_fsd_launch_pill_config: {
            client: !0,
            fallbackValues: {
                pillLabel: "Autopilot PR",
                tooltip: "Fix CI, conflicts, and comments with full self driving",
                dropdownAriaLabel: "Autopilot PR runtime",
                cloudOptionLabel: "Run in Cloud",
                localOptionLabel: "Run locally in a Worktree",
                fixCiPillSingleLabel: "Debug CI Failure",
                fixCiPillPluralLabelTemplate: "Debug {count} CI Failures",
                fixCiPillLoadingLabel: "Debugging CI",
                fixCiPillLoadingProgressLabel: "Debugging CI",
                fsdFixCiPillSingleLabel: "Fix CI with FSD",
                fsdFixCiPillPluralLabelTemplate: "Fix {count} CI Failures with FSD",
                fsdFixCiPillLoadingLabel: "Fixing CI with FSD",
                fsdFixCiPillLoadingProgressLabel: "Fixing CI with FSD"
            }
        },
        grok_bot_contextual_banner_copy: {
            client: !0,
            fallbackValues: {
                title: "Grok Bot can do this for you",
                description: "An AI teammate that works in your tools and comes back with finished work.",
                downloadCtaLabel: "Download",
                downloadUrl: "https://cursor.com/download/bot",
                openCtaLabel: "Open Grok Bot",
                openUrl: "grokbot://"
            }
        },
        glass_btw_side_question_prompt_config: {
            client: !0,
            fallbackValues: {
                promptTemplate: [
                    "You are answering a single ephemeral question about the user's current work. Use the provided conversation as context and respond directly in one answer. Do not ask follow-up questions, do not request mode switches, and do not mention tool limitations unless absolutely necessary.",
                    "If the conversation does not contain enough to answer, say so briefly.",
                    "",
                    "{{question}}"
                ].join("\n")
            }
        },
        glass_loaded_agent_lru_cap: {
            client: !0,
            fallbackValues: {
                max_loaded_agents: 5
            }
        },
        composer_hidden_bubble_eviction: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                keep_recent_hidden: 1
            }
        },
        glass_large_file_gate_config: {
            client: !0,
            fallbackValues: {
                code_gate_bytes: 10485760
            }
        },
        glass_workspace_lifecycle_metrics: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                sweep_interval_ms: 6e4,
                retained_after_close_threshold_ms: 45e3
            }
        },
        glass_pr_operations_polling_config: {
            client: !0,
            fallbackValues: {
                prChecksPollIntervalMs: 3e4,
                prChecksPollMaxBackoffMs: 18e4,
                prChecksErrorBackoffMultiplier: 1.5,
                prChecksCacheTtlSeconds: 900,
                scmPrMetadataCacheTtlSeconds: 3600,
                scmPrDetailedStatusCacheTtlSeconds: 60,
                scmPrForBranchCacheTtlWhenPrsSeconds: 60,
                scmPrForBranchCacheTtlWhenEmptySeconds: 10,
                scmPrCodeownersCacheTtlSeconds: 300,
                scmPrCommitsCacheTtlSeconds: 300,
                scmPrTimelineEventsCacheTtlSeconds: 300,
                scmPrDiscussionsCacheTtlSeconds: 300,
                scmPrCheckLogExcerptOkTtlSeconds: 120,
                scmPrCheckLogExcerptNegativeTtlSeconds: 30,
                detailedPrStatusChecksScopedAuthBreakerTtlSeconds: 900,
                scmGitlabEmojiReactionCacheTtlSeconds: 1800,
                localAgentPrHeaderBatchPollIntervalMs: 3e4,
                localAgentPrStatePollIntervalMs: 6e5,
                localAgentPrBurstBumpOffsetsMs: [
                    3e3,
                    6e3,
                    9e3,
                    15e3,
                    2e4,
                    25e3,
                    3e4
                ],
                cloudAgentPrStatePollIntervalMs: 6e4,
                cloudAgentPrBurstBumpOffsetsMs: [
                    3e3,
                    6e3,
                    9e3,
                    15e3,
                    2e4,
                    25e3,
                    3e4
                ],
                cloudAgentPrStatePollMaxBackoffMs: 3e5,
                cloudAgentPrErrorBackoffMultiplier: 1.5
            }
        },
        cloud_agent_stream_reattach: {
            client: !0,
            fallbackValues: {
                enabled: !0,
                rehydrateAfterMs: 12e4
            }
        },
        cloud_agent_stream_conversation_turn_window: {
            client: !0,
            fallbackValues: {
                maxTurns: null
            }
        },
        tool_limits_config: {
            client: !0,
            fallbackValues: {
                readFilesToolMaxFileSizeInBytes: 2e6,
                editFileToolMaxFileSizeInChars: 15e4,
                fileSearchToolMaxResults: 10,
                listDirV2ClientSideCharacterBudget: 1e3,
                readFileV2ToolMaxFileSizeInBytes: 2e8,
                composerDiffMaxComputationTimeMs: 2e3
            }
        },
        update_prompt_config: {
            client: !0,
            fallbackValues: {
                min_hours_between_prompts: 48,
                max_prompts_per_version: 3,
                max_prompts_per_day: 1,
                snooze_duration_hours: 72
            }
        },
        internal_release_track_override: {
            client: !0,
            fallbackValues: {
                releaseTrack: "",
                statsigUrl: "",
                unlockInternalTracks: !1
            }
        },
        sand_internal_release_track_override: {
            client: !0,
            fallbackValues: {
                releaseTrack: "",
                unlockInternalTracks: !1
            }
        },
        sand_host_bundle_channel: {
            client: !0,
            fallbackValues: {
                channel: "",
                watchIntervalMs: null
            }
        },
        giant_json_stringify_config: {
            client: !0,
            fallbackValues: {
                sentry_threshold_bytes: 1e7,
                attach_content: !1
            }
        },
        giant_buffer_retention_config: {
            client: !0,
            fallbackValues: {
                allocation_threshold_bytes: 33554432,
                blob_url_threshold_bytes: 33554432,
                retention_age_ms: 3e5,
                sweep_interval_ms: 6e4
            }
        },
        giant_json_parse_config: {
            client: !0,
            fallbackValues: {
                sentry_threshold_bytes: 1e9
            }
        },
        giant_vsbuffer_decode_config: {
            client: !0,
            fallbackValues: {
                sentry_threshold_bytes: 2e7
            }
        },
        mcp_ipc_timeouts: {
            client: !0,
            fallbackValues: {
                metadata_timeout_ms: 1e4,
                lifecycle_timeout_ms: 1e4,
                dashboard_timeout_ms: 1e4,
                recovery_per_retry_timeout_ms: 1e4
            }
        },
        sentry_session_recording_config: {
            client: !0,
            fallbackValues: {
                replays_session_sample_rate: 0
            }
        },
        extension_signature_verification_bypass_list: {
            client: !0,
            fallbackValues: {
                extensionIds: [
                    "nromanov.dotrush",
                    "ms-python.python",
                    "typescriptteam.native-preview",
                    "typespec.typespec-vscode",
                    "ms-toolsai.jupyter",
                    "k3ndr1ckfu.tcl-language-support-for-vscode",
                    "amiq.dvt"
                ],
                remoteVerificationMinVersion: "2.25.0"
            }
        },
        sandbox_default_network_allowlist: {
            client: !0,
            fallbackValues: {
                allowlist: []
            }
        },
        auto_spillover_ui_config: {
            client: !0,
            fallbackValues: Ua.rO
        },
        glass_perf_vote_config: {
            client: !0,
            fallbackValues: Qa.Q
        },
        portal_outage_alert: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                title: "",
                description: ""
            }
        },
        slack_mcp_client_id: {
            client: !0,
            fallbackValues: {
                clientId: "3660753192626.8903469228982"
            }
        },
        shopify_mcp_client_id: {
            client: !0,
            fallbackValues: {
                clientId: "2a457b21c946d5bc8d1675d1b3b8c2d6"
            }
        },
        file_watcher_metrics_config: {
            client: !0,
            fallbackValues: {
                flush_delay_ms: 3e4
            }
        },
        file_watcher_forwarded_storm_config: {
            client: !0,
            fallbackValues: {
                window_ms: 1e4,
                min_events: 2500,
                report_throttle_ms: 3e5,
                top_buckets: 8
            }
        },
        cloud_agent_list_stream_config: {
            client: !0,
            fallbackValues: {
                enabled_platforms: [],
                safety_poll_interval_ms: 6e4,
                inactivity_timeout_ms: 45e3,
                max_consecutive_failures: 5,
                reconnect_base_delay_ms: 1e3,
                reconnect_max_delay_ms: 6e4,
                reconcile_delay_ms: 1e3,
                use_list_page_tokens: !0,
                split_project_list: !1,
                exclude_archived_default: !1,
                projects_only_owner_lookup: !1,
                projects_only_owner_lookup_max_projects: 5e3,
                membership_poll_interval_ms: 0,
                membership_safety_poll_interval_ms: 0
            }
        },
        statsig_dummy_gauge_config: {
            client: !0,
            fallbackValues: {
                dummy: 0
            }
        },
        memory_monitor_user_toast_config: {
            client: !0,
            fallbackValues: {
                heap_percent: 80
            }
        },
        cpu_monitor_config: {
            client: !0,
            fallbackValues: {
                total_cpu_percent: 250,
                process_cpu_percent: 95,
                sustained_seconds: 60,
                check_interval_seconds: 15,
                cooldown_seconds: 1800,
                include_system_processes: !0
            }
        },
        memory_pressure_profiling_config: {
            client: !0,
            fallbackValues: {
                trigger_heap_percent: 70,
                duration_seconds: 30,
                sampling_interval_bytes: 4096,
                cooldown_seconds: 300
            }
        },
        webview_inventory_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                metrics_interval_seconds: 30,
                sample_interval_minutes: 5
            }
        },
        memory_monitor_config: {
            client: !0,
            fallbackValues: {
                base_threshold_mb: 1536,
                critical_offset_mb: 512,
                show_status_entry: !1,
                show_internal_warning_popup: !1,
                show_user_toast: !0,
                user_toast_heap_percent: 80,
                emit_heap_usage_metric: !1,
                emergency_profiling_enabled: !0,
                emergency_profiling_trigger_heap_percent: 70,
                emergency_profiling_duration_seconds: 30,
                emergency_profiling_sampling_interval_bytes: 4096,
                emergency_profiling_cooldown_seconds: 300
            }
        },
        plugin_onboarding_by_job_role: {
            client: !0,
            fallbackValues: {
                byJobRole: {},
                recommendedPluginNamesByJobRole: {}
            }
        },
        leaked_disposables_tracker: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                reportIntervalMs: 6e4
            }
        },
        gc_disposable_leak_reporting: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                sessionSampleRate: 0
            }
        },
        solidjs_memo_audit_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                sampleRate: 1,
                maxEventsPerFlush: 5e4,
                reportIntervalMs: 6e4,
                deepProbe: !1,
                deepProbeSampleRate: .01,
                deepProbeMaxBytes: 16384,
                stackAttribution: !1,
                stackCreationSampleRate: .02,
                stackRedundantThreshold: 2,
                maxTrackedCreationStacks: 500,
                maxStackReportsPerSession: 10,
                maxStackBytes: 4e3
            }
        },
        solidjs_listener_stacks_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                sampleRate: 1,
                observerThreshold: 2e3,
                maxTrackedSources: 500,
                maxReportsPerSession: 10,
                maxStackBytes: 4e3,
                totalObserverThreshold: 0,
                totalTriggeredSourceFloor: 200,
                totalTriggeredMaxReports: 20
            }
        },
        shell_exec_output_backpressure_config: {
            client: !0,
            fallbackValues: {
                outputSuppressionWindowMs: 6e4,
                outputSuppressionThresholdCharsPerSecond: 65536,
                outputSuppressionMinChars: 262144,
                outputLimiterFlushIntervalMs: 50,
                outputLimiterMaxBufferedBytes: 262144,
                extHostMinBatchIntervalMs: 50,
                extHostMaxBatchIntervalMs: 500,
                extHostBytesPerIntervalStep: 1e4
            }
        },
        canvas_prompt_text_config: {
            client: !0,
            fallbackValues: {
                skillDescription: "A Cursor Canvas is a live React app that the user can open beside the chat. You MUST use a canvas when the agent produces a standalone analytical artifact — quantitative analyses, billing investigations, security audits, architecture reviews, data-heavy content, timelines, charts, tables, interactive explorations, repeatable tools, or any response that benefits from visual layout. Especially prefer a canvas when presenting results from MCP tools (Datadog, Databricks, Linear, Sentry, Slack, etc.) where the data is the deliverable — render it in a rich canvas rather than dumping it into a markdown table or code block. If you catch yourself about to write a markdown table, stop and use a canvas instead. You MUST also read this skill whenever you create, edit, or debug any .canvas.tsx file.",
                errorFixPromptTemplate: [
                    "The canvas at `{canvasPath}` has the following error:",
                    "",
                    '"""',
                    "{errorMessage}",
                    '"""',
                    "",
                    "Check if the canvas SDK has changed since this canvas was created.",
                    "Update the canvas to use the latest SDK components according to the supplied documentation in the canvas skill."
                ].join("\n"),
                welcomePageEnabled: !0,
                marketplaceCategoryKey: "canvas-featured",
                marketplaceMaxCards: 4
            }
        },
        glass_ftux_first_action_config: {
            client: !0,
            fallbackValues: {
                byJobRole: {}
            }
        },
        shutdown_hang_watchdog_config: {
            client: !0,
            fallbackValues: {
                per_joiner_warn_ms: 2e3,
                fire_on_will_shutdown_total_ms: 3e3,
                process_exit_total_ms: 5e3
            }
        },
        update_diagnostics: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                restart_time_threshold_seconds: 30,
                attach_ship_it_log: !0,
                max_attachment_bytes: 5e6
            }
        },
        startup_diagnostics: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                timer_name: "ellapsedLoadMainBundle",
                threshold_ms: 3e4
            }
        },
        renderer_ping_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                ping_interval_ms: 5e3,
                block_threshold_ms: 15e3,
                collect_stack_traces: !0,
                report_rpc_drain: !1
            }
        },
        main_watcher_stall_probe_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                flush_threshold_ms: 250,
                anchor_interval_ms: 1e3,
                anchor_lag_ms: 500,
                cooldown_ms: 6e4,
                session_cap: 10
            }
        },
        editor_input_latency_metrics_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                sample_rate: .01,
                window_duration_ms: 6e4
            }
        },
        editor_tokenization_metrics_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                sample_rate: .01,
                time_limit_ms: 500
            }
        },
        ripgrep_invocation_monitor_config: {
            client: !0,
            fallbackValues: {
                window_ms: 1e4,
                threshold: 50,
                max_records: 100,
                cooldown_ms: 3e5,
                report_to_sentry: !0,
                report_initialize_caches: !1
            }
        },
        grep_fallback_monitor_config: {
            client: !0,
            fallbackValues: {
                window_ms: 6e4,
                min_samples: 20,
                fallback_ratio_threshold: .5,
                cooldown_ms: 3e5,
                report_to_sentry: !0
            }
        },
        instant_grep_indexing_config: {
            client: !0,
            fallbackValues: {
                max_in_memory_documents: null
            }
        },
        git_diff_reply_limit_config: {
            client: !0,
            fallbackValues: {
                enabled: !0,
                max_reply_bytes: 31457280
            }
        },
        renderer_slow_interaction_sentry_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                threshold_ms: 1e3,
                commit_attribution: !1
            }
        },
        glass_fps_monitor_config: {
            client: !0,
            fallbackValues: {
                enabled: !1,
                min_fps: 30,
                max_drops_per_interval: 3,
                interval_sec: 60,
                baseline_interval_sec: null,
                baseline_sample_rate: null
            }
        },
        xai_team_link_create_mode: {
            client: !0,
            fallbackValues: {
                mode: "off"
            }
        },
        mac_computer_use_sidecar_manifest: {
            client: !0,
            fallbackValues: {
                sidecarManifestUrl: ""
            }
        },
        windows_computer_use_sidecar_manifest: {
            client: !0,
            fallbackValues: {
                x64: "",
                arm64: ""
            }
        },
        computer_use_mcp_instructions: {
            client: !0,
            fallbackValues: {
                darwin: {
                    companion: "",
                    remote: ""
                },
                win32: ""
            }
        },
        change_monitor_enrollment: {
            client: !0,
            fallbackValues: {
                enrolled: !1,
                enableUI: !1,
                orgs: [
                    "*"
                ]
            }
        }
    });
    Object.keys(TA), xA([
        "control",
        "grok_primary",
        "pinned_selection",
        "grouped_auto_expand"
    ]), xA([
        "control",
        "treatment"
    ]);
    function xA(t) {
        return Object.assign((e)=>{
            if (-1 === t.findIndex((t)=>t === e)) throw new Error(`Invalid value for enum: ${e}, expected one of: ${t.join(", ")}`);
            return e;
        }, {
            enumValues: t
        });
    }
    function NA(t) {
        if ("boolean" != typeof t) throw new Error(`Invalid value for boolean: ${t}`);
        return t;
    }
    function DA(t) {
        if ("string" != typeof t) throw new Error(`Invalid value for string: ${t}`);
        return t;
    }
    function UA(t) {
        if ("number" != typeof t) throw new Error(`Invalid value for number: ${t}`);
        return t;
    }
    class QA {
        static init() {
            QA.output = o.window.createOutputChannel("Cursor-always-local debug logs", {
                log: !0
            });
        }
        static error(t, ...e) {
            QA.output && QA.output.error(t, ...e);
        }
        static warn(t, ...e) {
            QA.output && QA.output.warn(t, ...e);
        }
        static info(t, ...e) {
            QA.output && QA.output.info(t, ...e);
        }
        static debug(t, ...e) {
            QA.output && QA.output.debug(t, ...e);
        }
        static trace(t, ...e) {
            QA.output && QA.output.trace(t, ...e);
        }
    }
    class MA {
        static init() {
            MA.output = o.window.createOutputChannel("Cursor Tab", {
                log: !0
            });
        }
        static error(t, ...e) {
            MA.output && MA.output.error(t, ...e);
        }
        static warn(t, ...e) {
            MA.output && MA.output.warn(t, ...e);
        }
        static info(t, ...e) {
            MA.output && MA.output.info(t, ...e);
        }
        static debug(t, ...e) {
            MA.output && MA.output.debug(t, ...e);
        }
        static trace(t, ...e) {
            MA.output && MA.output.trace(t, ...e);
        }
    }
    class OA {
        constructor(t){
            let e = t.globalState.get("unique_cpp_user_id");
            null == e && (e = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), t.globalState.update("unique_cpp_user_id", e)), this._uniqueCppUserId = e;
        }
        static initialize(t) {
            OA._instance || (OA._instance = new OA(t));
        }
        static getInstance() {
            if (!OA._instance) throw new Error("SpoofedIdProvider not initialized");
            return OA._instance;
        }
        maybeGetSpoofedCppAccessToken(t, e) {
            const r = o.cursor.getCursorCreds()?.backendUrl, n = "redacted" + this._uniqueCppUserId;
            return (r?.includes("lclhst.build") || r?.includes("localhost")) && e?.includes("cursor.sh") ? (u.info("Using spoofed token"), function(t, e) {
                let r = t.split("").map((t)=>t.charCodeAt(0));
                for(let t = 0; t < r.length; t++)r[t] = (r[t] + 128 - e % 128) % 128;
                return String.fromCharCode(...r);
            }(n, 1)) : t;
        }
    }
    const FA = (()=>{
        try {
            const t = Pa.totalmem();
            return Number.isFinite(t) && t > 0 ? String(Math.round(t)) : void 0;
        } catch  {
            return;
        }
    })();
    class LA {
        constructor(t){
            this.disposables = [], this.privacyLogChannel = void 0, this.log = {
                debug: (t, ...e)=>u.debug(t, ...e),
                info: (t, ...e)=>u.info(t, ...e),
                warn: (t, ...e)=>u.warn(t, ...e),
                error: (t, ...e)=>u.error(t, ...e),
                trace: (t, ...e)=>u.trace(t, ...e)
            }, this.debugLog = {
                debug: (t, ...e)=>QA.debug(t, ...e),
                info: (t, ...e)=>QA.info(t, ...e),
                warn: (t, ...e)=>QA.warn(t, ...e),
                error: (t, ...e)=>QA.error(t, ...e),
                trace: (t, ...e)=>QA.trace(t, ...e)
            }, this.context = t, void 0 !== t && OA.initialize(t);
        }
        getCursorCreds() {
            return o.cursor.getCursorCreds();
        }
        onDidChangeCursorCreds(t) {
            const e = o.cursor.onDidChangeCursorCreds(t);
            return this.disposables.push(e), e;
        }
        getCursorAuthToken() {
            return o.cursor.getCursorAuthToken();
        }
        onDidChangeCursorAuthToken(t) {
            const e = o.cursor.onDidChangeCursorAuthToken(t);
            return this.disposables.push(e), e;
        }
        triggerTokenRefresh() {
            o.commands.executeCommand("cursorAuth.triggerTokenRefresh", !0);
        }
        maybeGetSpoofedCppAccessToken(t, e) {
            return void 0 === this.context ? t : OA.getInstance().maybeGetSpoofedCppAccessToken(t, e);
        }
        getTeamId() {
            return o.cursor.getTeamId();
        }
        onDidChangeActiveTeamId(t) {
            const e = o.cursor.onDidChangeActiveTeamId(t);
            return this.disposables.push(e), e;
        }
        getPrivacyModeEnum() {
            return o.cursor.getPrivacyModeEnum();
        }
        getPrivateInferenceEnablement() {
            return void 0 === this.privateInferenceEnablement && (this.privateInferenceEnablement = (0, a.createPrivateInferenceEnablementSource)({
                getEnablement: ()=>o.cursor.getPrivateInferenceEnablement()
            }), this.disposables.push(this.privateInferenceEnablement)), this.privateInferenceEnablement;
        }
        applyRequestHeaders(t, e, r) {
            o.cursor.getAllRequestHeadersExceptAccessToken({
                req: t,
                backupRequestId: e,
                ...void 0 !== r ? {
                    clientKey: r
                } : {}
            });
            const n = t.header;
            void 0 === FA || void 0 === n || n.has("x-cursor-client-device-memory") || n.set("x-cursor-client-device-memory", FA);
        }
        runWithNetworkContext(t) {
            return t();
        }
        checkFeatureGate(t) {
            return Promise.resolve(o.cursor.checkFeatureGate(t));
        }
        onDidChangeGates(t) {
            const e = o.cursor.onDidChangeGates(t);
            return this.disposables.push(e), e;
        }
        getDynamicConfigValue(t) {
            return Promise.resolve(o.cursor.getDynamicConfigValue(t));
        }
        getDynamicConfigFallbackValues(t) {
            return TA[t]?.fallbackValues;
        }
        async getCachedServerConfigJson() {
            return o.commands.executeCommand(Zo.GetCachedServerConfig);
        }
        isHttp2Disabled() {
            try {
                return o.workspace.getConfiguration().get(oa, !1);
            } catch  {
                return !1;
            }
        }
        async setHttp2Disabled() {
            await o.workspace.getConfiguration().update(oa, !0, !0);
        }
        isHttp1SseDisabled() {
            try {
                return o.workspace.getConfiguration().get(aa, !1);
            } catch  {
                return !1;
            }
        }
        async setHttp1SseDisabled() {
            await o.workspace.getConfiguration().update(aa, !0, !0);
        }
        onDidChangeHttpProtocolSettings(t) {
            const e = o.workspace.onDidChangeConfiguration((e)=>{
                (e.affectsConfiguration(oa) || e.affectsConfiguration(aa)) && t();
            });
            return this.disposables.push(e), e;
        }
        getDebugTimeoutPreventionMode() {
            try {
                return o.workspace.getConfiguration().get("cursor.debug.timeoutPrevention", "local_only");
            } catch  {
                return "local_only";
            }
        }
        isWindowFocused() {
            return o.window.state.focused;
        }
        onDidChangeWindowFocus(t) {
            const e = o.window.onDidChangeWindowState((e)=>t(e.focused));
            return this.disposables.push(e), e;
        }
        hasEffectiveProxy() {
            try {
                const t = o.workspace.getConfiguration("http").get("proxy", "");
                if ("string" == typeof t && t.trim().length > 0) return !0;
            } catch  {}
            const t = process.env;
            for (const e of [
                "HTTPS_PROXY",
                "https_proxy",
                "HTTP_PROXY",
                "http_proxy",
                "ALL_PROXY",
                "all_proxy"
            ]){
                const r = t[e];
                if (void 0 !== r && r.trim().length > 0) return !0;
            }
            return !1;
        }
        onDidChangeProxy(t) {
            const e = o.workspace.onDidChangeConfiguration((e)=>{
                e.affectsConfiguration("http.proxy") && t();
            });
            return this.disposables.push(e), e;
        }
        async loadSystemCertificates() {
            const { loadSystemCertificates: t } = require("./module-9018.js"), e = await t({
                log: {
                    error: (t, ...e)=>QA.error(t, ...e),
                    warn: (t, ...e)=>QA.warn(t, ...e),
                    info: (t, ...e)=>QA.info(t, ...e),
                    debug: (t, ...e)=>QA.debug(t, ...e),
                    trace: (t, ...e)=>QA.trace(t, ...e)
                },
                loadSystemCertificatesFromNode: ()=>!1
            });
            return e ? [
                ...e
            ] : void 0;
        }
        isLocalMode() {
            return xa;
        }
        isDevelopment() {
            return this.context?.isDevelopment ?? !1;
        }
        metricsIncrement(t) {
            o.cursor.metricsIncrement(t);
        }
        notifyRemoteAgentHostTunnelGoaway() {
            o.commands.executeCommand(Ta.Cz).then(void 0, ()=>{});
        }
        writePrivacyLog(t, e) {
            switch(void 0 === this.privacyLogChannel && (this.privacyLogChannel = o.window.createOutputChannel("Cursor Structured Logs", {
                log: !0
            }), this.disposables.push(this.privacyLogChannel)), t){
                case "error":
                    this.privacyLogChannel.error(e);
                    break;
                case "warn":
                    this.privacyLogChannel.warn(e);
                    break;
                default:
                    this.privacyLogChannel.info(e);
            }
        }
        dispose() {
            for (const t of this.disposables)t.dispose();
        }
    }
    class $A extends a.AiConnectTransportHandler {
        constructor(t){
            super(new LA(t));
        }
        signalAuthReadyToRenderer() {
            this.authReady.then((t)=>{
                this.isDisposed || o.cursor.signalAuthReady(t);
            });
        }
        async registerWithRenderer() {
            await this.isSetup;
            const t = this.getTransportIfReady();
            this.isDisposed || void 0 === t || o.cursor.registerConnectTransportProvider(t);
        }
    }
    class GA {
        constructor(){
            this.transport = o.cursor.connectTransport;
        }
        getAiServerClient() {
            return void 0 === this._aiServerClient && (this._aiServerClient = Ea(ka.AiService, this.transport)), this._aiServerClient;
        }
        async getBackgroundComposerClient() {
            return void 0 === this._backgroundComposerClient && (this._backgroundComposerClient = Ea(qa.BackgroundComposerService, this.transport)), this._backgroundComposerClient;
        }
        getAgentClient() {
            return void 0 === this._agentClient && (this._agentClient = Ea(Ra.AgentService, this.transport)), this._agentClient;
        }
        getFilesyncClient() {
            return void 0 === this._filesyncClient && (this._filesyncClient = Ea(va.FileSyncService, this.transport)), this._filesyncClient;
        }
        isDebug() {
            const t = o.cursor.getCursorCreds()?.backendUrl;
            return (t?.includes("lclhst.build") || t?.includes("localhost")) ?? !1;
        }
        async refresh() {}
    }
    class HA {
        ensureTagsMap(t) {
            return (0, a.normalizeMetricsProviderTags)(t);
        }
        increment(t) {
            this.metricsProvider.batch([
                {
                    kind: "increment",
                    stat: t.stat,
                    value: t.value ?? 1,
                    tags: t.tags
                }
            ]);
        }
        gauge(t) {
            this.metricsProvider.batch([
                {
                    kind: "gauge",
                    stat: t.stat,
                    value: t.value,
                    tags: t.tags
                }
            ]);
        }
        distribution(t) {
            this.metricsProvider.batch([
                {
                    kind: "distribution",
                    stat: t.stat,
                    value: t.value,
                    tags: t.tags
                }
            ]);
        }
        constructor(){
            this.host = new LA, this.aggregatingProvider = new a.AggregatingMetricsProvider(this.host), this.metricsProvider = {
                batch: (t)=>{
                    for (const e of t){
                        const t = this.ensureTagsMap(e.tags);
                        switch(e.kind){
                            case "increment":
                                this.aggregatingProvider.increment(e.stat, e.value, t);
                                break;
                            case "gauge":
                                this.aggregatingProvider.gauge(e.stat, e.value, t);
                                break;
                            case "distribution":
                                this.aggregatingProvider.distribution(e.stat, e.value, t);
                                break;
                            case "distribution_samples":
                                this.aggregatingProvider.distributionSamples(e.stat, e.values, t);
                                break;
                            default:
                                break;
                        }
                    }
                },
                flush: ()=>this.aggregatingProvider.flushAndWait()
            }, this.registration = o.cursor.registerMetricsProvider(this.metricsProvider);
        }
        async dispose() {
            this.registration.dispose();
            try {
                await this.aggregatingProvider.disposeAndWait();
            } finally{
                this.host.dispose();
            }
        }
    }
    class KA {
        constructor({ isDevelopment: t }){
            this.host = new LA, this.impl = new a.StructuredLogProviderImpl(this.host, {
                isDevelopment: t
            });
            const e = {
                debug: (t, e, r)=>this.impl.debug(t, e, r),
                info: (t, e, r)=>this.impl.info(t, e, r),
                warn: (t, e, r)=>this.impl.warn(t, e, r),
                error: (t, e, r, n)=>this.impl.error(t, e, r, n)
            };
            this.registration = o.cursor.registerStructuredLogProvider(e);
        }
        dispose() {
            this.registration.dispose(), this.impl.dispose(), this.host.dispose();
        }
    }
    var VA = require("./module-3896.js");
    class zA {
        constructor(){
            this.pendingRequests = new Map, this.lastCleanupTime = 0;
        }
        addChunk(t, e) {
            const { requestId: r, chunkIndex: n, isLast: s } = e;
            this.cleanupStaleRequests(), this.pendingRequests.has(r) || this.pendingRequests.set(r, {
                chunks: new Map,
                lastChunkIndex: -1,
                createdAt: performance.now()
            });
            const i = this.pendingRequests.get(r);
            if (i.chunks.set(n, t), s && (i.lastChunkIndex = n), !(i.lastChunkIndex < 0 || i.chunks.size <= i.lastChunkIndex)) try {
                return this.concatenate(i.chunks, i.lastChunkIndex + 1);
            } finally{
                this.pendingRequests.delete(r);
            }
        }
        cleanupStaleRequests() {
            const t = performance.now();
            if (t - this.lastCleanupTime < 3e4) return;
            this.lastCleanupTime = t;
            const e = [];
            for (const [r, n] of this.pendingRequests)t - n.createdAt > 6e4 && e.push(r);
            for (const r of e){
                const e = this.pendingRequests.get(r);
                if (e) {
                    const n = e.lastChunkIndex >= 0 ? `last=${e.lastChunkIndex}` : "no last seen";
                    console.warn(`[TelemChunkReassembler] Purging stale request ${r.slice(0, 50)}... (had ${e.chunks.size} chunks, ${n}, age: ${((t - e.createdAt) / 1e3).toFixed(1)}s)`), this.pendingRequests.delete(r);
                }
            }
        }
        concatenate(t, e) {
            let r = 0;
            for(let n = 0; n < e; n++){
                const e = t.get(n);
                if (!e) throw new Error(`Missing chunk ${n} for reassembly`);
                r += e.byteLength;
            }
            const n = new Uint8Array(r);
            let s = 0;
            for(let r = 0; r < e; r++){
                const e = t.get(r);
                n.set(e, s), s += e.byteLength;
            }
            return n;
        }
    }
    const WA = "<|SECRET_TEXT_OMITTED|>", YA = [
        {
            pattern: /-----BEGIN (?:RSA |EC |DSA |OPENSSH )?PRIVATE KEY-----[\s\S]*?-----END (?:RSA |EC |DSA |OPENSSH )?PRIVATE KEY-----/gi,
            replacer: ()=>WA
        },
        {
            pattern: /-----BEGIN PGP PRIVATE KEY BLOCK-----[\s\S]*?-----END PGP PRIVATE KEY BLOCK-----/gi,
            replacer: ()=>WA
        },
        {
            pattern: /\bsk-[a-zA-Z0-9]{20,}/gi,
            replacer: ()=>WA
        },
        {
            pattern: /\b(?:sk|pk)_(?:live|test)_[a-zA-Z0-9]{24,}/gi,
            replacer: ()=>WA
        },
        {
            pattern: /\bgh[ps]_[a-zA-Z0-9]{36,}/gi,
            replacer: ()=>WA
        },
        {
            pattern: /\b(?:api[_-]?key|apikey|access[_-]?token|secret[_-]?key|private[_-]?key|auth[_-]?token)[\s:=]+["']?[a-zA-Z0-9_\-]{20,}["']?/gi,
            replacer: ()=>WA
        },
        {
            pattern: /\b(?:AKIA|A3T|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16,}/g,
            replacer: ()=>WA
        },
        {
            pattern: /\b(?:aws_secret_access_key|aws_session_token)[\s:=]+["']?[a-zA-Z0-9/+=]{40,}["']?/gi,
            replacer: ()=>WA
        },
        {
            pattern: /\b(?:token|bearer|authorization)[\s:=]+["']?[a-zA-Z0-9_\-+=/.]{40,}["']?/gi,
            replacer: ()=>WA
        },
        {
            pattern: /\beyJ[a-zA-Z0-9_\-]+\.eyJ[a-zA-Z0-9_\-]+\.[a-zA-Z0-9_\-]+/g,
            replacer: ()=>WA
        },
        {
            pattern: /\b([A-Z0-9_]*(?:API|AUTH|SECRET|PASSWORD|PASSWD|PWD|KEY|TOKEN|CREDENTIAL|ACCESS|DATABASE|DB|REDIS|POSTGRES|MYSQL)[A-Z0-9_]*)=(["']?)([^\s"'\n]+)\2/gi,
            replacer: (t, e, r)=>`${e}=${r}${WA}${r}`
        },
        {
            pattern: /\b([a-zA-Z][a-zA-Z0-9+.-]*):\/\/([^:@\s]+):([^@\s]+)@/gi,
            replacer: (t, e, r)=>`${e}://${r}:${WA}@`
        },
        {
            pattern: /\b((?:password|passwd|pwd|secret)[\s]*[:=][\s]*["'])([^"'\n]{3,})(["'])/gi,
            replacer: (t, e, r, n)=>`${e}${WA}${n}`
        },
        {
            pattern: /\b((?:password|pwd)=)([^;,&\s]+)/gi,
            replacer: (t, e)=>`${e}${WA}`
        },
        {
            pattern: /\b((?:secret|key|token)[\s:=]+["']?)([0-9a-fA-F]{32,})(["']?)/gi,
            replacer: (t, e, r, n)=>`${e}${WA}${n}`
        }
    ], jA = class t {
        constructor(e, r, n){
            this.fileSyncer = r, this.aiConnectTransport = n, this.streams = [], this.succeeded = [], this.cppEvents = [], this.telemChunkReassembler = new zA, this.avgTimes = {
                streamTime: [],
                totalTime: [],
                clientTime: [],
                ttftTime: [],
                discrepencies: []
            }, this.providerRegistration = o.workspace.registerControlProvider(t.id, this), MA.info("CURSOR LOG: Finished creating provider!");
        }
        getRegistrationSource() {
            return t.id;
        }
        dispose() {
            this.providerRegistration.dispose();
        }
        async getFullDiff(t, e) {}
        async getDataframeSummary(t) {}
        async tokenizeBPE(t, e) {}
        async appendCppTelem(t, e) {
            if (!("enabled" === o.cursor.getPrivateInferenceEnablement() && (0, VA.AO)("tab"))) for(let r = 0; r < 4; r++){
                if (!0 === e) {
                    let t = 0;
                    for(; !0 !== o.cursor.getPrivacyMode() && t < 6;)await new Promise((t)=>setTimeout(t, 5e3)), t++;
                }
                if (!0 === o.cursor.getPrivacyMode()) return;
                try {
                    const e = this.aiConnectTransport.getAiServerClient();
                    if (void 0 === e) return;
                    this.aiConnectTransport.isDebug() && QA.info("Getting CPP Edit history status. Attempt: ", r);
                    const n = new AbortController, s = setTimeout(()=>n.abort(), 1e4), i = await e.cppEditHistoryStatus(new Yi, {
                        signal: n.signal
                    });
                    if (clearTimeout(s), !0 !== i.on) return;
                    {
                        this.aiConnectTransport.isDebug() && QA.info("Sending CPP Append request");
                        const r = new AbortController, n = setTimeout(()=>r.abort(), 1e5), s = await e.cppAppend(new Vi({
                            changes: t
                        }), {
                            signal: r.signal
                        });
                        if (clearTimeout(n), this.aiConnectTransport.isDebug() && QA.info("CPP Append request success", s), !0 === s.success) return;
                    }
                } catch (t) {
                    this.aiConnectTransport.isDebug() && QA.error("Edit history append failed, Retrying...", t), await new Promise((t)=>setTimeout(t, 1e3 * Math.pow(4, r)));
                }
            }
        }
        async appendCppTelemChunk(t, e, r) {
            if (e.isLast && 0 === e.chunkIndex) return this.aiConnectTransport.isDebug() && console.log(`[TelemChunk] Single chunk (fast path): ${t.byteLength} bytes, sending directly to backend`), void await this.appendCppTelem(t, r);
            let n;
            try {
                n = this.telemChunkReassembler.addChunk(t, e);
            } catch (t) {
                return console.warn(`[TelemChunk] Reassembly failed for ${e.requestId.slice(0, 30)}..., dropping request:`, t), void Y_?.increment({
                    stat: "cppclient.chunkReassemblyFailed"
                });
            }
            void 0 !== n ? (this.aiConnectTransport.isDebug() && console.log(`[TelemChunk] All ${e.chunkIndex + 1} chunk(s) received for ${e.requestId.slice(0, 30)}..., reassembled size: ${n.byteLength} bytes, sending to backend`), await this.appendCppTelem(n, r)) : this.aiConnectTransport.isDebug() && console.log(`[TelemChunk] Received chunk ${e.chunkIndex + 1}${e.isLast ? " (last)" : ""} for ${e.requestId.slice(0, 30)}..., size: ${t.byteLength} bytes`);
        }
        async redact(t) {
            let e = t;
            for (const t of YA)e = e.replace(t.pattern, t.replacer);
            return e;
        }
        abortCpp(t) {
            this.streams.find((e)=>e.generationUUID === t)?.abortController.abort(), this.streams = this.streams.filter((e)=>e.generationUUID !== t), this.streams = this.streams.filter((t)=>performance.now() - t.startTime < 8e3);
        }
        async streamCpp(t, e) {
            if ("enabled" === o.cursor.getPrivateInferenceEnablement() && (0, VA.AO)("tab")) return;
            const r = performance.timeOrigin + performance.now(), n = new AbortController;
            let s = !1;
            n.signal.addEventListener("abort", ()=>{
                s = !0;
            }), this.streams.push({
                generationUUID: e.generateUuid,
                abortController: n,
                startTime: performance.now(),
                modelInfo: void 0,
                buffer: []
            });
            const i = this.aiConnectTransport.getAiServerClient();
            if (void 0 !== i) {
                try {
                    const o = performance.timeOrigin + performance.now(), u = !0 !== e.retryWithoutFilesync && void 0 !== t.currentFile && this.fileSyncer.shouldRelyOnFileSyncForFile(t.currentFile?.relativeWorkspacePath, t.currentFile?.fileVersion), c = u ? this.fileSyncer.getRecentFilesyncUpdates({
                        relativeWorkspacePath: t.currentFile?.relativeWorkspacePath,
                        requestedModelVersion: t.currentFile?.fileVersion
                    }) : void 0, l = u ? "" : t.currentFile?.contents, m = await i.streamCpp(new ms({
                        ...t,
                        currentFile: new qn({
                            ...t.currentFile,
                            contents: l,
                            relyOnFilesync: u
                        }),
                        contextItems: [],
                        filesyncUpdates: await c,
                        isDebug: this.aiConnectTransport.isDebug(),
                        giveDebugOutput: this.aiConnectTransport.isDebug(),
                        supportsCpt: !0,
                        supportsCrlfCpt: !0
                    }), {
                        signal: n.signal,
                        headers: {
                            ...(a = e.generateUuid, {
                                "X-Request-ID": a,
                                "X-Amzn-Trace-Id": `Root=${a}`
                            }),
                            ...this.fileSyncer.getFileSyncEncryptionHeader()
                        }
                    });
                    let d = !0, f = 0, p = {};
                    (async ()=>{
                        try {
                            let n = !1;
                            for await (const t of m){
                                const r = this.streams.find((t)=>t.generationUUID === e.generateUuid);
                                if (void 0 === r) {
                                    MA.info("CURSOR LOG: Aborting streaming cpp with id", e.generateUuid), s = !0;
                                    break;
                                }
                                !0 === d && (f = performance.timeOrigin + performance.now(), d = !1);
                                let i = !0;
                                if (t.modelInfo && (r.modelInfo = t.modelInfo, i = !1), t.rangeToReplace && (r.buffer.push({
                                    case: "rangeToReplace",
                                    rangeToReplaceOneIndexed: {
                                        ...t.rangeToReplace,
                                        shouldRemoveLeadingEol: t.shouldRemoveLeadingEol
                                    },
                                    bindingId: t.bindingId
                                }), i = !1), i && void 0 !== t.text && t.text.length > 0 && r.buffer.push(t.text), t.cursorPredictionTarget && r.buffer.push({
                                    case: "cursorPredictionTarget",
                                    cursorPredictionTarget: t.cursorPredictionTarget,
                                    bindingId: t.bindingId
                                }), t.doneEdit && r.buffer.push({
                                    case: "doneEdit",
                                    doneEdit: t.doneEdit
                                }), t.beginEdit && r.buffer.push({
                                    case: "beginEdit",
                                    beginEdit: t.beginEdit
                                }), !0 === t.doneStream) {
                                    MA.info("CURSOR LOG: Done streaming cpp with id", e.generateUuid), n = !0;
                                    break;
                                }
                            }
                            const i = performance.timeOrigin + performance.now();
                            if (MA.info("CPP RT LOG: Time taken for streaming cpp", i - r, "with request", e.generateUuid), Y_?.distribution({
                                stat: "cppclient.streamingtime",
                                value: i - r,
                                tags: {
                                    isAborted: s ? "true" : "false"
                                }
                            }), Y_?.distribution({
                                stat: "cppclient.actualTtftFromStart",
                                value: f - e.startOfCpp,
                                tags: {
                                    isAborted: s ? "true" : "false"
                                }
                            }), Y_?.distribution({
                                stat: "cppclient.timeTillServerRequest",
                                value: o - e.startOfCpp,
                                tags: {
                                    isAborted: s ? "true" : "false"
                                }
                            }), Y_?.distribution({
                                stat: "cppclient.requestToTtft",
                                value: f - o,
                                tags: {
                                    isAborted: s ? "true" : "false"
                                }
                            }), n) {
                                for await (const t of m)if (void 0 !== t.debugModelOutput && (MA.info("CPP Request Log with id", e.generateUuid), MA.info("=======>Model output", "\n" + t.debugModelOutput), !p.modelInput && t.debugModelInput && (p.modelInput = t.debugModelInput), !p.modelOutput && t.debugModelOutput && (p.modelOutput = t.debugModelOutput)), void 0 !== t.debugStreamTime && (MA.info("=======>Debug stream time", t.debugStreamTime), this.avgTimes.streamTime.push(parseFloat(t.debugStreamTime ?? "0")), !p.debugStreamTime && t.debugStreamTime && (p.debugStreamTime = t.debugStreamTime)), void 0 !== t.debugTotalTime && (MA.info("=======>Debug total time", t.debugTotalTime), this.avgTimes.totalTime.push(parseFloat(t.debugTotalTime ?? "0")), !p.debugTotalTime && t.debugTotalTime && (p.debugTotalTime = t.debugTotalTime)), void 0 !== t.debugTtftTime && (MA.info("=======>Debug ttft time", t.debugTtftTime), this.avgTimes.ttftTime.push(parseFloat(t.debugTtftTime ?? "0")), !p.debugTtftTime && t.debugTtftTime && (p.debugTtftTime = t.debugTtftTime)), void 0 !== t.debugServerTiming) {
                                    let e, r;
                                    t.debugServerTiming.split(",").forEach((t)=>{
                                        const [n, s] = t.split(";"), [i, o] = s.split("="), a = parseFloat(o);
                                        "model.ttft" === n ? e = a : "model.server_time_to_first_token" === n ? r = a : "dur" === i ? MA.info("=======>Debug server timing", n, a) : MA.info("=======>Debug server number", n, a);
                                    }), void 0 !== r && MA.info("=======>Debug fireworks ttft", r), void 0 !== e && MA.info("=======>Debug model ttft", e), void 0 !== e && void 0 !== r && (MA.info("=======>Debug client vs fireworks ttft discrepency", e - r), this.avgTimes.discrepencies.push(e - r)), !p.debugServerTiming && t.debugServerTiming && (p.debugServerTiming = t.debugServerTiming);
                                }
                            } else MA.info("=======>No stream again", e.generateUuid);
                            if (this.avgTimes.clientTime.push(i - r), this.avgTimes.streamTime.length > 20 && (this.avgTimes.streamTime = this.avgTimes.streamTime.slice(-20)), this.avgTimes.totalTime.length > 20 && (this.avgTimes.totalTime = this.avgTimes.totalTime.slice(-20)), this.avgTimes.clientTime.length > 20 && (this.avgTimes.clientTime = this.avgTimes.clientTime.slice(-20)), this.avgTimes.ttftTime.length > 20 && (this.avgTimes.ttftTime = this.avgTimes.ttftTime.slice(-20)), !s) {
                                this.avgTimes.discrepencies.length > 0 && MA.info("Average of latest 20 discrepencies", this.avgTimes.discrepencies.reduce((t, e)=>t + e, 0) / this.avgTimes.discrepencies.length), MA.info("Average of latest 20 ttft time", this.avgTimes.ttftTime.reduce((t, e)=>t + e, 0) / this.avgTimes.ttftTime.length), MA.info("Average of latest 20 stream time", this.avgTimes.streamTime.reduce((t, e)=>t + e, 0) / this.avgTimes.streamTime.length), MA.info("Average of latest 20 total time", this.avgTimes.totalTime.reduce((t, e)=>t + e, 0) / this.avgTimes.totalTime.length), MA.info("Average of latest 20 client time", this.avgTimes.clientTime.reduce((t, e)=>t + e, 0) / this.avgTimes.clientTime.length), MA.info("Average of latest 20 discrepencies", this.avgTimes.discrepencies.reduce((t, e)=>t + e, 0) / this.avgTimes.discrepencies.length), MA.info("CPP RT LOG: All stats", {
                                    streamingtime: i - r,
                                    actualTtftFromStart: f - e.startOfCpp,
                                    timeTillServerRequest: o - e.startOfCpp,
                                    requestToTtft: f - o,
                                    totalTime: i - e.startOfCpp
                                }), this.succeeded.push(e.generateUuid), this.succeeded = this.succeeded.slice(-20);
                                try {
                                    const n = {
                                        requestId: e.generateUuid,
                                        relativeWorkspacePath: t.currentFile?.relativeWorkspacePath ?? "",
                                        timestamp: r,
                                        modelName: t.modelName ?? "unspecified",
                                        metrics: {
                                            timeToFirstToken: f - e.startOfCpp,
                                            serverTimeToFirstToken: p.debugTtftTime ? parseFloat(p.debugTtftTime) : 0,
                                            streamingTime: i - r,
                                            totalTime: i - e.startOfCpp,
                                            requestToTtft: f - o
                                        },
                                        debugInfo: {
                                            modelInput: p.modelInput,
                                            modelOutput: p.modelOutput,
                                            serverTimings: p.debugServerTiming ? ZA(p.debugServerTiming) : void 0,
                                            streamTime: p.debugStreamTime,
                                            totalTime: p.debugTotalTime,
                                            ttftTime: p.debugTtftTime
                                        }
                                    };
                                    this.cppEvents.unshift(n), this.cppEvents.length > 20 && (this.cppEvents = this.cppEvents.slice(0, 20));
                                } catch (t) {
                                    MA.info("CURSOR LOG: Error in adding cpp report event", t);
                                }
                            }
                        } catch (r) {
                            if (r instanceof pa) {
                                if (MA.info("CURSOR LOG: Error in streaming cpp (connect error)", r.message), r.findDetails(Dn).some((t)=>t.error === Un.FILE_NOT_FOUND) && !0 !== e.retryWithoutFilesync) return this.fileSyncer.resetSequentialSuccessfulSync(t.currentFile?.relativeWorkspacePath ?? ""), await this.streamCpp(t, {
                                    ...e,
                                    retryWithoutFilesync: !0
                                });
                            } else MA.info("CURSOR LOG: Error in streaming cpp (not connect error)", r);
                        }
                    })();
                } catch (t) {
                    null != t.message && t.message.includes("ENHANCE_YOUR_CALM") && (MA.info("CURSOR LOG: Refreshing cpp client", e.generateUuid), this.aiConnectTransport.refresh()), MA.info("CURSOR LOG: Error in streaming cpp (setup call)", t.message);
                }
                var a;
                MA.info("CURSOR LOG: requestId", e.generateUuid, " ");
            }
        }
        cancelCpp(t) {
            this.abortCpp(t);
        }
        flushCpp(t) {
            const e = this.streams.find((e)=>e.generationUUID === t);
            if (void 0 === e) return this.succeeded.includes(t) ? {
                type: "success",
                buffer: [
                    "m4CoTMbqtR9vV1zd"
                ],
                modelInfo: void 0
            } : {
                type: "failure",
                reason: "stream not found"
            };
            if (performance.now() - (e?.startTime ?? 0) > 1e4) return this.streams = this.streams.filter((e)=>e.generationUUID !== t), {
                type: "failure",
                reason: "stream took too long"
            };
            const r = e.buffer;
            return e.buffer = [], this.succeeded.includes(t) && (this.streams = this.streams.filter((e)=>e.generationUUID !== t)), {
                type: "success",
                buffer: r,
                modelInfo: e?.modelInfo ?? void 0
            };
        }
        async getCppReport() {
            return {
                events: [
                    ...this.cppEvents
                ].sort((t, e)=>e.timestamp - t.timestamp)
            };
        }
    };
    jA.id = "cursor-retrieval";
    let XA = jA;
    function ZA(t) {
        const e = {};
        return t.split(",").forEach((t)=>{
            const [r, n] = t.split(";"), [s, i] = n.split("=");
            "dur" === s && (e[r.trim()] = parseFloat(i));
        }), e;
    }
    const t_ = 256e3;
    class e_ {
        constructor(t){
            this.controlProvider = t, this.disposables = [], this.sessionEvents = [], this.runningPayloadSizeInBytes = 0, this.lastPerformanceNowTimestamp = 0, this.isFlushing = !1, this.disposables.push(o.cursor.registerExtHostEventLogger(this));
        }
        dispose() {
            this.flush(this.performanceNowTimestamp().performanceNow);
            for (const t of this.disposables)t.dispose();
        }
        async forceFlush() {
            this.isFlushing ? await new Promise((t)=>setTimeout(t, 3e3)) : await this.flush(this.performanceNowTimestamp().performanceNow);
        }
        isDebug() {
            const t = o.cursor.getCursorCreds()?.backendUrl;
            return (t?.includes("lclhst.build") || t?.includes("localhost")) ?? !1;
        }
        async recordExtHostEvent(t) {
            if (this.isDebug() && QA.info(`recordExtHostEvent: ${t.case}`), !0 !== o.cursor.getPrivacyMode()) try {
                if ("unknown" !== t.case) {
                    t.case;
                    throw new Error(`Unknown event case: ${t.case}`);
                }
            } catch (t) {}
        }
        performanceNowTimestamp() {
            const t = performance.timeOrigin - o.cursor.rendererPerformanceTimeOrigin;
            return {
                performanceNow: performance.now() + t,
                performanceTimeOrigin: o.cursor.rendererPerformanceTimeOrigin
            };
        }
        async appendCppTelemWithRetry(t, e = 2) {
            for(let r = 0; r <= e; r++)try {
                return await this.controlProvider.appendCppTelem(new zi(t).toBinary(), o.cursor.getPrivacyMode());
            } catch (t) {
                if (!(r < e)) throw this.isDebug() && QA.info(`Append threw error after ${e + 1} attempts`, t), t;
                this.isDebug() && QA.info(`Append threw error on attempt ${r + 1}, retrying...`, t), await new Promise((t)=>setTimeout(t, 1e3 * Math.pow(4, r)));
            }
        }
        async flush(t) {
            if (!this.isFlushing) {
                this.lastPerformanceNowTimestamp = t;
                try {
                    if (this.isFlushing = !0, this.isDebug() && QA.info(`Preparing to flush ${this.sessionEvents.length} session events`), 0 === this.sessionEvents.length) return;
                    const e = o.cursor.getCppSessionId();
                    if (void 0 === e) return;
                    this.isDebug() && QA.info(`Flushing ${this.sessionEvents.length} session events`);
                    try {
                        const r = this.sessionEvents;
                        for (const e of r)e.performanceNowFlushTime = t;
                        this.sessionEvents = [], this.runningPayloadSizeInBytes = 0;
                        const n = {
                            sessionId: e,
                            timeOrigin: o.cursor.rendererPerformanceTimeOrigin,
                            clientVersion: o.cursorVersion,
                            clientCommit: o.cursor.productCommit,
                            privacyModeStatus: this.getPrivacyModeStatus(),
                            sessionEvents: r,
                            modelUuid: "",
                            modelChangesMayBeOutOfOrder: !1,
                            relativePath: "",
                            startingModelValue: void 0,
                            startingModelVersion: void 0,
                            changes: [],
                            events: [],
                            uri: ""
                        };
                        await this.appendCppTelemWithRetry(n);
                    } catch (t) {}
                } finally{
                    this.isFlushing = !1;
                }
            }
        }
        getPrivacyModeStatus() {
            const t = o.cursor.getPrivacyMode();
            return !0 === t ? Wi.PRIVACY_ENABLED : !1 === t ? Wi.EXPLICIT_NO_PRIVACY : Wi.UNSPECIFIED;
        }
        shouldEarlyExit() {
            return this.sessionEvents.length > 5e3 || this.runningPayloadSizeInBytes > 128e4;
        }
        async recordEvent(t) {
            if (!0 === o.cursor.getPrivacyMode()) return void (this.isDebug() && QA.info("Not recording event because privacy mode is enabled"));
            if (!0 !== o.cursor.getCppTelemEnabled()) return void (this.isDebug() && QA.info("Not recording event because telemetry is not enabled"));
            if (this.shouldEarlyExit()) return void (this.isDebug() && QA.info("Not recording event because we are early exiting"));
            const e = this.performanceNowTimestamp(), r = {
                event: t,
                performanceNowTimestamp: e.performanceNow,
                performanceTimeOrigin: e.performanceTimeOrigin
            }, n = new Hi(r).toBinary().byteLength;
            n > 1e6 || (this.sessionEvents.push(new Hi(r)), this.runningPayloadSizeInBytes += n, (this.sessionEvents.length > 1e3 || this.lastPerformanceNowTimestamp + 6e5 < e.performanceNow || this.runningPayloadSizeInBytes > t_) && this.flush(e.performanceNow));
        }
    }
    var r_ = require("./module-6982.js");
    class n_ {
        constructor(t){
            this.context = t, this._isEnabledFromServer = !1, this.credChangeCallbacks = [], this.credChangeTimeout = null, this.disposables = [], this.refresh(), this.disposables.push(o.cursor.onDidChangeCursorAuthToken((t)=>{
                this.refresh();
            }), o.cursor.onDidChangeCursorCreds((t)=>{
                this.refresh();
            })), this.refreshInterval = setInterval(()=>this.refresh(), 3e4), OA.initialize(t);
        }
        dispose() {
            clearInterval(this.refreshInterval), this.credChangeTimeout && (clearTimeout(this.credChangeTimeout), this.credChangeTimeout = null);
            for (const t of this.disposables)t.dispose();
            this.disposables.length = 0;
        }
        getAccessToken() {
            const t = this.getGeoCppBackendUrl();
            return OA.getInstance().maybeGetSpoofedCppAccessToken(this._accessToken, t);
        }
        getGeoCppBackendUrl() {
            return this._geocppBackendUrl;
        }
        isFileSyncEnabled() {
            const t = "enabled" === o.cursor.getPrivateInferenceEnablement() && (0, VA.AO)("tab");
            return !xa && !t && this._isEnabledFromServer && (this._isFileSyncEnabled ?? !1) && (o.cursor.cppEnabled() ?? !0) && (e = o.cursor.cppConfig(), r = void 0 !== this._accessToken, n = function(t) {
                switch(t){
                    case "ultra":
                    case "pro":
                    case "pro_plus":
                    case "enterprise":
                    case "free_trial":
                    case "pro_student":
                    case "express":
                    case "premium":
                    case "plus":
                    case "super":
                    case "unified_ultra":
                        return !0;
                    default:
                        return !1;
                }
            }(o.cursor.membershipType() ?? sa.FREE), void 0 !== e && !1 !== e.isOn && !(!1 === r || !1 === n && !e.shouldLetUserEnableCppEvenIfNotPro));
            var e, r, n;
        }
        isDevelopment() {
            return this._isDevelopment ?? !1;
        }
        refresh() {
            const t = this._accessToken, e = this._geocppBackendUrl;
            this._accessToken = o.cursor.getCursorAuthToken(), this._geocppBackendUrl = o.cursor.getCursorCreds()?.geoCppBackendUrl, this._isDevelopment = this.context.isDevelopment, this._isFileSyncEnabled = o.cursor.isFileSyncClientEnabled() || !this.isDevelopment(), this._accessToken === t && this._geocppBackendUrl === e || (this.credChangeTimeout && clearTimeout(this.credChangeTimeout), this.credChangeTimeout = setTimeout(()=>{
                this.notifyCredChange(), this.credChangeTimeout = null;
            }, 1e3));
        }
        addCredChangeCallback(t) {
            this.credChangeCallbacks.push(t);
        }
        notifyCredChange() {
            for (const t of this.credChangeCallbacks)t();
        }
        set isEnabledFromServer(t) {
            this._isEnabledFromServer = t;
        }
        get fsConfig() {
            return this._fsConfig;
        }
        set fsConfig(t) {
            this._fsConfig = t;
        }
    }
    class s_ extends Error {
        constructor(t){
            super(t), this.name = "RateLimitError";
        }
    }
    class i_ {
        constructor({ rate: t = 10, capacity: e = 50, refillInterval: r = 1e3, maxFailures: n = 10, breakerResetTime: s = 3e5 }){
            this.rate = t, this.tokens = e, this.refillInterval = r, this.maxFailures = n, this.breakerResetTime = s, this.tokens = e, this.capacity = e, this.lastRefillTime = Date.now(), this.circuitBreakers = new Map;
        }
        updateConfig(t) {
            void 0 !== t && (this.rate = t.rateLimiterRps ?? this.rate, this.capacity = t.rateLimiterBurstCapacity ?? this.capacity, this.refillInterval = t.rateLimiterBreakerResetTimeMs ?? this.refillInterval, this.maxFailures = t.syncRetryMaxAttempts ?? this.maxFailures, this.breakerResetTime = t.rateLimiterBreakerResetTimeMs ?? this.breakerResetTime);
        }
        refillTokens() {
            const t = Date.now(), e = (t - this.lastRefillTime) / this.refillInterval * this.rate;
            this.tokens = Math.min(this.capacity, this.tokens + e), this.lastRefillTime = t;
        }
        checkCircuitBreaker(t) {
            const e = this.circuitBreakers.get(t);
            if (!e) return !1;
            return Date.now() - e.lastFailureTime > this.breakerResetTime ? (this.circuitBreakers.delete(t), !1) : e.failureCount >= this.maxFailures;
        }
        incrementFailure(t) {
            const e = this.circuitBreakers.get(t) || {
                failureCount: 0,
                lastFailureTime: 0
            };
            e.failureCount++, e.lastFailureTime = Date.now(), this.circuitBreakers.set(t, e);
        }
        executeForPath(t, e) {
            if (t = t ?? "", this.checkCircuitBreaker(t)) throw new s_(`Circuit breaker open for ${t} because it is rate limiting too often or is failing too often.`);
            if (this.refillTokens(), this.tokens < 1) throw this.incrementFailure(t), new s_("Rate limit exceeded");
            this.tokens -= 1;
            try {
                return e();
            } catch (e) {
                throw this.incrementFailure(t), e;
            }
        }
    }
    const o_ = "x-fs-client-key";
    class a_ {
        constructor(t, e){
            this.config = t, this.aiConnectTransport = e, this.myUUID = (0, r_.randomUUID)(), this.clientKey = r_.randomBytes(32), this.config.addCredChangeCallback(()=>this.initialize()), this.rateLimiter = new i_({
                rate: this.config.fsConfig?.rateLimiterRps ?? 10,
                capacity: this.config.fsConfig?.rateLimiterBurstCapacity ?? 100,
                breakerResetTime: this.config.fsConfig?.rateLimiterBreakerResetTimeMs ?? 3e5
            });
        }
        updateConfig(t) {
            this.rateLimiter.updateConfig(t);
        }
        async initialize() {
            try {
                await this.fsConfigUpdate();
            } catch (t) {
                throw c.error("Failed to initialize FileSyncClient", t), t;
            }
        }
        throwIfFSDisabled() {
            if (!this.config.isFileSyncEnabled()) throw new Error("File sync is disabled");
        }
        getFileSyncEncryptionHeader() {
            return {
                [o_]: this.clientKey.toString("hex")
            };
        }
        async syncFile(t) {
            const e = performance.now();
            try {
                this.throwIfFSDisabled();
                const r = this.aiConnectTransport.getFilesyncClient();
                return await this.rateLimiter.executeForPath(t.relativeWorkspacePath, async ()=>{
                    const n = await r.fSSyncFile({
                        uuid: this.myUUID,
                        ...t
                    }, {
                        headers: this.getFileSyncEncryptionHeader()
                    }), s = performance.now();
                    return c.info(`Synced file ${t.relativeWorkspacePath} modelVersion=${t.modelVersion} in ${s - e}ms`), n;
                });
            } catch (e) {
                throw e instanceof s_ && c.warn(`Rate limit exceeded for file sync: ${t.relativeWorkspacePath}`), e;
            }
        }
        async isEnabledForUserFromServer() {
            try {
                const t = this.aiConnectTransport.getFilesyncClient(), e = await t.fSIsEnabledForUser({
                    uuid: this.myUUID
                });
                return e.enabled ? c.info("[ENABLED STATUS] Filesync enabled from server.") : c.info("[ENABLED STATUS] Filesync is NOT enabled from server."), e.enabled;
            } catch (t) {
                return c.error("Failed to check if file sync is enabled for user", JSON.stringify(t)), !1;
            }
        }
        async uploadFile(t) {
            const e = performance.now();
            try {
                this.throwIfFSDisabled();
                const r = this.aiConnectTransport.getFilesyncClient();
                return await this.rateLimiter.executeForPath(t.relativeWorkspacePath, async ()=>{
                    const n = await r.fSUploadFile({
                        uuid: this.myUUID,
                        ...t
                    }, {
                        headers: this.getFileSyncEncryptionHeader()
                    }), s = performance.now();
                    return c.info(`Uploaded file ${t.relativeWorkspacePath} modelVersion=${t.modelVersion} in ${s - e}ms`), n;
                });
            } catch (e) {
                throw e instanceof s_ && c.warn(`Rate limit exceeded for file sync: ${t.relativeWorkspacePath}`), e;
            }
        }
        async fsConfig() {
            const t = performance.now();
            try {
                this.throwIfFSDisabled();
                const e = this.aiConnectTransport.getFilesyncClient(), r = await e.fSConfig({}), n = performance.now() - t;
                return c.info(`Fetched fsConfig in ${n}ms`), c.info("FSConfig response:", JSON.stringify(r)), r;
            } catch (t) {
                throw c.error("Failed to fetch fsConfig", t), t;
            }
        }
        async fsConfigUpdate() {
            const t = await this.isEnabledForUserFromServer();
            this.config.isEnabledFromServer = t;
            try {
                const t = await this.fsConfig();
                this.config.fsConfig = t;
            } catch (t) {
                c.error("Failed to fetch fsConfig", t), this.config.fsConfig = void 0;
            }
        }
    }
    var u_ = require("./module-3665.js");
    const c_ = require("node:diagnostics_channel");
    var l_ = (0, c_.channel)("lru-cache:metrics"), m_ = (0, c_.tracingChannel)("lru-cache"), d_ = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date, f_ = ()=>l_.hasSubscribers || m_.hasSubscribers, p_ = new Set, h_ = "object" == typeof process && process ? process : {}, g_ = (Symbol("type"), (t)=>!!t && t === Math.floor(t) && t > 0 && isFinite(t)), A_ = (t)=>g_(t) ? t <= Math.pow(2, 8) ? Uint8Array : t <= Math.pow(2, 16) ? Uint16Array : t <= Math.pow(2, 32) ? Uint32Array : t <= Number.MAX_SAFE_INTEGER ? __ : null : null, __ = class extends Array {
        constructor(t){
            super(t), this.fill(0);
        }
    }, y_ = class t {
        heap;
        length;
        static #g = !1;
        static create(e) {
            let r = A_(e);
            if (!r) return [];
            t.#g = !0;
            let n = new t(e, r);
            return t.#g = !1, n;
        }
        constructor(e, r){
            if (!t.#g) throw new TypeError("instantiate Stack using Stack.create(n)");
            this.heap = new r(e), this.length = 0;
        }
        push(t) {
            this.heap[this.length++] = t;
        }
        pop() {
            return this.heap[--this.length];
        }
    }, w_ = class t {
        #g;
        #A;
        #_;
        #y;
        #w;
        #S;
        #J;
        #B;
        get perf() {
            return this.#B;
        }
        ttl;
        ttlResolution;
        ttlAutopurge;
        updateAgeOnGet;
        updateAgeOnHas;
        allowStale;
        noDisposeOnSet;
        noUpdateTTL;
        maxEntrySize;
        sizeCalculation;
        noDeleteOnFetchRejection;
        noDeleteOnStaleGet;
        allowStaleOnFetchAbort;
        allowStaleOnFetchRejection;
        ignoreFetchAbort;
        #E;
        #I;
        #C;
        #b;
        #k;
        #v;
        #q;
        #R;
        #P;
        #T;
        #x;
        #N;
        #D;
        #U;
        #Q;
        #M;
        #O;
        #F;
        #L;
        static unsafeExposeInternals(t) {
            return {
                starts: t.#D,
                ttls: t.#U,
                autopurgeTimers: t.#Q,
                sizes: t.#N,
                keyMap: t.#C,
                keyList: t.#b,
                valList: t.#k,
                next: t.#v,
                prev: t.#q,
                get head () {
                    return t.#R;
                },
                get tail () {
                    return t.#P;
                },
                free: t.#T,
                isBackgroundFetch: (e)=>t.#$(e),
                backgroundFetch: (e, r, n, s)=>t.#G(e, r, n, s),
                moveToTail: (e)=>t.#H(e),
                indexes: (e)=>t.#K(e),
                rindexes: (e)=>t.#V(e),
                isStale: (e)=>t.#z(e)
            };
        }
        get max() {
            return this.#g;
        }
        get maxSize() {
            return this.#A;
        }
        get calculatedSize() {
            return this.#I;
        }
        get size() {
            return this.#E;
        }
        get fetchMethod() {
            return this.#S;
        }
        get memoMethod() {
            return this.#J;
        }
        get dispose() {
            return this.#_;
        }
        get onInsert() {
            return this.#y;
        }
        get disposeAfter() {
            return this.#w;
        }
        constructor(e){
            let { max: r = 0, ttl: n, ttlResolution: s = 1, ttlAutopurge: i, updateAgeOnGet: o, updateAgeOnHas: a, allowStale: u, dispose: c, onInsert: l, disposeAfter: m, noDisposeOnSet: d, noUpdateTTL: f, maxSize: p = 0, maxEntrySize: h = 0, sizeCalculation: g, fetchMethod: A, memoMethod: _, noDeleteOnFetchRejection: y, noDeleteOnStaleGet: w, allowStaleOnFetchRejection: S, allowStaleOnFetchAbort: J, ignoreFetchAbort: B, perf: E } = e;
            if (void 0 !== E && "function" != typeof E?.now) throw new TypeError("perf option must have a now() method if specified");
            if (this.#B = E ?? d_, 0 !== r && !g_(r)) throw new TypeError("max option must be a nonnegative integer");
            let I = r ? A_(r) : Array;
            if (!I) throw new Error("invalid max value: " + r);
            if (this.#g = r, this.#A = p, this.maxEntrySize = h || this.#A, this.sizeCalculation = g, this.sizeCalculation) {
                if (!this.#A && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
                if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function");
            }
            if (void 0 !== _ && "function" != typeof _) throw new TypeError("memoMethod must be a function if defined");
            if (this.#J = _, void 0 !== A && "function" != typeof A) throw new TypeError("fetchMethod must be a function if specified");
            if (this.#S = A, this.#O = !!A, this.#C = new Map, this.#b = Array.from({
                length: r
            }).fill(void 0), this.#k = Array.from({
                length: r
            }).fill(void 0), this.#v = new I(r), this.#q = new I(r), this.#R = 0, this.#P = 0, this.#T = y_.create(r), this.#E = 0, this.#I = 0, "function" == typeof c && (this.#_ = c), "function" == typeof l && (this.#y = l), "function" == typeof m ? (this.#w = m, this.#x = []) : (this.#w = void 0, this.#x = void 0), this.#M = !!this.#_, this.#L = !!this.#y, this.#F = !!this.#w, this.noDisposeOnSet = !!d, this.noUpdateTTL = !!f, this.noDeleteOnFetchRejection = !!y, this.allowStaleOnFetchRejection = !!S, this.allowStaleOnFetchAbort = !!J, this.ignoreFetchAbort = !!B, 0 !== this.maxEntrySize) {
                if (0 !== this.#A && !g_(this.#A)) throw new TypeError("maxSize must be a positive integer if specified");
                if (!g_(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
                this.#W();
            }
            if (this.allowStale = !!u, this.noDeleteOnStaleGet = !!w, this.updateAgeOnGet = !!o, this.updateAgeOnHas = !!a, this.ttlResolution = g_(s) || 0 === s ? s : 1, this.ttlAutopurge = !!i, this.ttl = n || 0, this.ttl) {
                if (!g_(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
                this.#Y();
            }
            if (0 === this.#g && 0 === this.ttl && 0 === this.#A) throw new TypeError("At least one of max, maxSize, or ttl is required");
            if (!this.ttlAutopurge && !this.#g && !this.#A) {
                let e = "LRU_CACHE_UNBOUNDED";
                ((t)=>!p_.has(t))(e) && (p_.add(e), ((t, e, r, n)=>{
                    "function" == typeof h_.emitWarning ? h_.emitWarning(t, e, r, n) : console.error(`[${r}] ${e}: ${t}`);
                })("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, t));
            }
        }
        getRemainingTTL(t) {
            return this.#C.has(t) ? 1 / 0 : 0;
        }
        #Y() {
            let t = new __(this.#g), e = new __(this.#g);
            this.#U = t, this.#D = e;
            let r = this.ttlAutopurge ? Array.from({
                length: this.#g
            }) : void 0;
            this.#Q = r, this.#j = (r, s, i = this.#B.now())=>{
                e[r] = 0 !== s ? i : 0, t[r] = s, n(r, s);
            }, this.#X = (r)=>{
                e[r] = 0 !== t[r] ? this.#B.now() : 0, n(r, t[r]);
            };
            let n = this.ttlAutopurge ? (t, e)=>{
                if (r?.[t] && (clearTimeout(r[t]), r[t] = void 0), e && 0 !== e && r) {
                    let n = setTimeout(()=>{
                        this.#z(t) && this.#Z(this.#b[t], "expire");
                    }, e + 1);
                    n.unref && n.unref(), r[t] = n;
                }
            } : ()=>{};
            this.#tt = (r, n)=>{
                if (t[n]) {
                    let o = t[n], a = e[n];
                    if (!o || !a) return;
                    r.ttl = o, r.start = a, r.now = s || i();
                    let u = r.now - a;
                    r.remainingTTL = o - u;
                }
            };
            let s = 0, i = ()=>{
                let t = this.#B.now();
                if (this.ttlResolution > 0) {
                    s = t;
                    let e = setTimeout(()=>s = 0, this.ttlResolution);
                    e.unref && e.unref();
                }
                return t;
            };
            this.getRemainingTTL = (r)=>{
                let n = this.#C.get(r);
                if (void 0 === n) return 0;
                let o = t[n], a = e[n];
                return o && a ? o - ((s || i()) - a) : 1 / 0;
            }, this.#z = (r)=>{
                let n = e[r], o = t[r];
                return !!o && !!n && (s || i()) - n > o;
            };
        }
        #X = ()=>{};
        #tt = ()=>{};
        #j = ()=>{};
        #z = ()=>!1;
        #W() {
            let t = new __(this.#g);
            this.#I = 0, this.#N = t, this.#et = (e)=>{
                this.#I -= t[e], t[e] = 0;
            }, this.#rt = (t, e, r, n)=>{
                if (this.#$(e)) return 0;
                if (!g_(r)) {
                    if (!n) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
                    if ("function" != typeof n) throw new TypeError("sizeCalculation must be a function");
                    if (r = n(e, t), !g_(r)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
                }
                return r;
            }, this.#nt = (e, r, n)=>{
                if (t[e] = r, this.#A) {
                    let r = this.#A - t[e];
                    for(; this.#I > r;)this.#st(!0);
                }
                this.#I += t[e], n && (n.entrySize = r, n.totalCalculatedSize = this.#I);
            };
        }
        #et = (t)=>{};
        #nt = (t, e, r)=>{};
        #rt = (t, e, r, n)=>{
            if (r || n) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
            return 0;
        };
        *#K({ allowStale: t = this.allowStale } = {}) {
            if (this.#E) for(let e = this.#P; this.#it(e) && ((t || !this.#z(e)) && (yield e), e !== this.#R);)e = this.#q[e];
        }
        *#V({ allowStale: t = this.allowStale } = {}) {
            if (this.#E) for(let e = this.#R; this.#it(e) && ((t || !this.#z(e)) && (yield e), e !== this.#P);)e = this.#v[e];
        }
        #it(t) {
            return void 0 !== t && this.#C.get(this.#b[t]) === t;
        }
        *entries() {
            for (let t of this.#K())void 0 !== this.#k[t] && void 0 !== this.#b[t] && !this.#$(this.#k[t]) && (yield [
                this.#b[t],
                this.#k[t]
            ]);
        }
        *rentries() {
            for (let t of this.#V())void 0 !== this.#k[t] && void 0 !== this.#b[t] && !this.#$(this.#k[t]) && (yield [
                this.#b[t],
                this.#k[t]
            ]);
        }
        *keys() {
            for (let t of this.#K()){
                let e = this.#b[t];
                void 0 !== e && !this.#$(this.#k[t]) && (yield e);
            }
        }
        *rkeys() {
            for (let t of this.#V()){
                let e = this.#b[t];
                void 0 !== e && !this.#$(this.#k[t]) && (yield e);
            }
        }
        *values() {
            for (let t of this.#K())void 0 !== this.#k[t] && !this.#$(this.#k[t]) && (yield this.#k[t]);
        }
        *rvalues() {
            for (let t of this.#V())void 0 !== this.#k[t] && !this.#$(this.#k[t]) && (yield this.#k[t]);
        }
        [Symbol.iterator]() {
            return this.entries();
        }
        [Symbol.toStringTag] = "LRUCache";
        find(t, e = {}) {
            for (let r of this.#K()){
                let n = this.#k[r], s = this.#$(n) ? n.__staleWhileFetching : n;
                if (void 0 !== s && t(s, this.#b[r], this)) return this.#ot(this.#b[r], e);
            }
        }
        forEach(t, e = this) {
            for (let r of this.#K()){
                let n = this.#k[r], s = this.#$(n) ? n.__staleWhileFetching : n;
                void 0 !== s && t.call(e, s, this.#b[r], this);
            }
        }
        rforEach(t, e = this) {
            for (let r of this.#V()){
                let n = this.#k[r], s = this.#$(n) ? n.__staleWhileFetching : n;
                void 0 !== s && t.call(e, s, this.#b[r], this);
            }
        }
        purgeStale() {
            let t = !1;
            for (let e of this.#V({
                allowStale: !0
            }))this.#z(e) && (this.#Z(this.#b[e], "expire"), t = !0);
            return t;
        }
        info(t) {
            let e = this.#C.get(t);
            if (void 0 === e) return;
            let r = this.#k[e], n = this.#$(r) ? r.__staleWhileFetching : r;
            if (void 0 === n) return;
            let s = {
                value: n
            };
            if (this.#U && this.#D) {
                let t = this.#U[e], r = this.#D[e];
                if (t && r) {
                    let e = t - (this.#B.now() - r);
                    s.ttl = e, s.start = Date.now();
                }
            }
            return this.#N && (s.size = this.#N[e]), s;
        }
        dump() {
            let t = [];
            for (let e of this.#K({
                allowStale: !0
            })){
                let r = this.#b[e], n = this.#k[e], s = this.#$(n) ? n.__staleWhileFetching : n;
                if (void 0 === s || void 0 === r) continue;
                let i = {
                    value: s
                };
                if (this.#U && this.#D) {
                    i.ttl = this.#U[e];
                    let t = this.#B.now() - this.#D[e];
                    i.start = Math.floor(Date.now() - t);
                }
                this.#N && (i.size = this.#N[e]), t.unshift([
                    r,
                    i
                ]);
            }
            return t;
        }
        load(t) {
            this.clear();
            for (let [e, r] of t){
                if (r.start) {
                    let t = Date.now() - r.start;
                    r.start = this.#B.now() - t;
                }
                this.#at(e, r.value, r);
            }
        }
        set(t, e, r = {}) {
            let { status: n = l_.hasSubscribers ? {} : void 0 } = r;
            r.status = n, n && (n.op = "set", n.key = t, void 0 !== e && (n.value = e));
            let s = this.#at(t, e, r);
            return n && l_.hasSubscribers && l_.publish(n), s;
        }
        #at(t, e, r = {}) {
            let { ttl: n = this.ttl, start: s, noDisposeOnSet: i = this.noDisposeOnSet, sizeCalculation: o = this.sizeCalculation, status: a } = r;
            if (void 0 === e) return a && (a.set = "deleted"), this.delete(t), this;
            let { noUpdateTTL: u = this.noUpdateTTL } = r;
            a && !this.#$(e) && (a.value = e);
            let c = this.#rt(t, e, r.size || 0, o, a);
            if (this.maxEntrySize && c > this.maxEntrySize) return this.#Z(t, "set"), a && (a.set = "miss", a.maxEntrySizeExceeded = !0), this;
            let l = 0 === this.#E ? void 0 : this.#C.get(t);
            if (void 0 === l) l = 0 === this.#E ? this.#P : 0 !== this.#T.length ? this.#T.pop() : this.#E === this.#g ? this.#st(!1) : this.#E, this.#b[l] = t, this.#k[l] = e, this.#C.set(t, l), this.#v[this.#P] = l, this.#q[l] = this.#P, this.#P = l, this.#E++, this.#nt(l, c, a), a && (a.set = "add"), u = !1, this.#L && this.#y?.(e, t, "add");
            else {
                this.#H(l);
                let r = this.#k[l];
                if (e !== r) {
                    if (this.#O && this.#$(r)) {
                        r.__abortController.abort(new Error("replaced"));
                        let { __staleWhileFetching: e } = r;
                        void 0 !== e && !i && (this.#M && this.#_?.(e, t, "set"), this.#F && this.#x?.push([
                            e,
                            t,
                            "set"
                        ]));
                    } else i || (this.#M && this.#_?.(r, t, "set"), this.#F && this.#x?.push([
                        r,
                        t,
                        "set"
                    ]));
                    if (this.#et(l), this.#nt(l, c, a), this.#k[l] = e, a) {
                        a.set = "replace";
                        let t = r && this.#$(r) ? r.__staleWhileFetching : r;
                        void 0 !== t && (a.oldValue = t);
                    }
                } else a && (a.set = "update");
                this.#L && this.onInsert?.(e, t, e === r ? "update" : "replace");
            }
            if (0 !== n && !this.#U && this.#Y(), this.#U && (u || this.#j(l, n, s), a && this.#tt(a, l)), !i && this.#F && this.#x) {
                let t, e = this.#x;
                for(; t = e?.shift();)this.#w?.(...t);
            }
            return this;
        }
        pop() {
            try {
                for(; this.#E;){
                    let t = this.#k[this.#R];
                    if (this.#st(!0), this.#$(t)) {
                        if (t.__staleWhileFetching) return t.__staleWhileFetching;
                    } else if (void 0 !== t) return t;
                }
            } finally{
                if (this.#F && this.#x) {
                    let t, e = this.#x;
                    for(; t = e?.shift();)this.#w?.(...t);
                }
            }
        }
        #st(t) {
            let e = this.#R, r = this.#b[e], n = this.#k[e];
            return this.#O && this.#$(n) ? n.__abortController.abort(new Error("evicted")) : (this.#M || this.#F) && (this.#M && this.#_?.(n, r, "evict"), this.#F && this.#x?.push([
                n,
                r,
                "evict"
            ])), this.#et(e), this.#Q?.[e] && (clearTimeout(this.#Q[e]), this.#Q[e] = void 0), t && (this.#b[e] = void 0, this.#k[e] = void 0, this.#T.push(e)), 1 === this.#E ? (this.#R = this.#P = 0, this.#T.length = 0) : this.#R = this.#v[e], this.#C.delete(r), this.#E--, e;
        }
        has(t, e = {}) {
            let { status: r = l_.hasSubscribers ? {} : void 0 } = e;
            e.status = r, r && (r.op = "has", r.key = t);
            let n = this.#ut(t, e);
            return l_.hasSubscribers && l_.publish(r), n;
        }
        #ut(t, e = {}) {
            let { updateAgeOnHas: r = this.updateAgeOnHas, status: n } = e, s = this.#C.get(t);
            if (void 0 !== s) {
                let t = this.#k[s];
                if (this.#$(t) && void 0 === t.__staleWhileFetching) return !1;
                if (!this.#z(s)) return r && this.#X(s), n && (n.has = "hit", this.#tt(n, s)), !0;
                n && (n.has = "stale", this.#tt(n, s));
            } else n && (n.has = "miss");
            return !1;
        }
        peek(t, e = {}) {
            let { status: r = f_() ? {} : void 0 } = e;
            r && (r.op = "peek", r.key = t), e.status = r;
            let n = this.#ct(t, e);
            return l_.hasSubscribers && l_.publish(r), n;
        }
        #ct(t, e) {
            let { status: r, allowStale: n = this.allowStale } = e, s = this.#C.get(t);
            if (void 0 === s || !n && this.#z(s)) return void (r && (r.peek = void 0 === s ? "miss" : "stale"));
            let i = this.#k[s], o = this.#$(i) ? i.__staleWhileFetching : i;
            return r && (void 0 !== o ? (r.peek = "hit", r.value = o) : r.peek = "miss"), o;
        }
        #G(t, e, r, n) {
            let s = void 0 === e ? void 0 : this.#k[e];
            if (this.#$(s)) return s;
            let i = new AbortController, { signal: o } = r;
            o?.addEventListener("abort", ()=>i.abort(o.reason), {
                signal: i.signal
            });
            let a = {
                signal: i.signal,
                options: r,
                context: n
            }, u = (n, s = !1)=>{
                let { aborted: o } = i.signal, u = r.ignoreFetchAbort && void 0 !== n, m = r.ignoreFetchAbort || !(!r.allowStaleOnFetchAbort || void 0 === n);
                if (r.status && (o && !s ? (r.status.fetchAborted = !0, r.status.fetchError = i.signal.reason, u && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), o && !u && !s) return c(i.signal.reason, m);
                let d = l, f = this.#k[e];
                return (f === l || void 0 === f && u && s) && (void 0 === n ? void 0 !== d.__staleWhileFetching ? this.#k[e] = d.__staleWhileFetching : this.#Z(t, "fetch") : (r.status && (r.status.fetchUpdated = !0), this.#at(t, n, a.options))), n;
            }, c = (n, s)=>{
                let { aborted: o } = i.signal, a = o && r.allowStaleOnFetchAbort, u = a || r.allowStaleOnFetchRejection, c = u || r.noDeleteOnFetchRejection, m = l;
                if (this.#k[e] === l && (!c || !s && void 0 === m.__staleWhileFetching ? this.#Z(t, "fetch") : a || (this.#k[e] = m.__staleWhileFetching)), u) return r.status && void 0 !== m.__staleWhileFetching && (r.status.returnedStale = !0), m.__staleWhileFetching;
                if (m.__returned === m) throw n;
            };
            r.status && (r.status.fetchDispatched = !0);
            let l = new Promise((e, n)=>{
                let o = this.#S?.(t, s, a);
                o && o instanceof Promise && o.then((t)=>e(void 0 === t ? void 0 : t), n), i.signal.addEventListener("abort", ()=>{
                    (!r.ignoreFetchAbort || r.allowStaleOnFetchAbort) && (e(void 0), r.allowStaleOnFetchAbort && (e = (t)=>u(t, !0)));
                });
            }).then(u, (t)=>(r.status && (r.status.fetchRejected = !0, r.status.fetchError = t), c(t, !1))), m = Object.assign(l, {
                __abortController: i,
                __staleWhileFetching: s,
                __returned: void 0
            });
            return void 0 === e ? (this.#at(t, m, {
                ...a.options,
                status: void 0
            }), e = this.#C.get(t)) : this.#k[e] = m, m;
        }
        #$(t) {
            if (!this.#O) return !1;
            let e = t;
            return !!e && e instanceof Promise && e.hasOwnProperty("__staleWhileFetching") && e.__abortController instanceof AbortController;
        }
        fetch(t, e = {}) {
            let r = m_.hasSubscribers, { status: n = f_() ? {} : void 0 } = e;
            e.status = n, n && e.context && (n.context = e.context);
            let s = this.#lt(t, e);
            return n && r && (n.trace = !0, m_.tracePromise(()=>s, n).catch(()=>{})), s;
        }
        async #lt(t, e = {}) {
            let { allowStale: r = this.allowStale, updateAgeOnGet: n = this.updateAgeOnGet, noDeleteOnStaleGet: s = this.noDeleteOnStaleGet, ttl: i = this.ttl, noDisposeOnSet: o = this.noDisposeOnSet, size: a = 0, sizeCalculation: u = this.sizeCalculation, noUpdateTTL: c = this.noUpdateTTL, noDeleteOnFetchRejection: l = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: m = this.allowStaleOnFetchRejection, ignoreFetchAbort: d = this.ignoreFetchAbort, allowStaleOnFetchAbort: f = this.allowStaleOnFetchAbort, context: p, forceRefresh: h = !1, status: g, signal: A } = e;
            if (g && (g.op = "fetch", g.key = t, h && (g.forceRefresh = !0)), !this.#O) return g && (g.fetch = "get"), this.#ot(t, {
                allowStale: r,
                updateAgeOnGet: n,
                noDeleteOnStaleGet: s,
                status: g
            });
            let _ = {
                allowStale: r,
                updateAgeOnGet: n,
                noDeleteOnStaleGet: s,
                ttl: i,
                noDisposeOnSet: o,
                size: a,
                sizeCalculation: u,
                noUpdateTTL: c,
                noDeleteOnFetchRejection: l,
                allowStaleOnFetchRejection: m,
                allowStaleOnFetchAbort: f,
                ignoreFetchAbort: d,
                status: g,
                signal: A
            }, y = this.#C.get(t);
            if (void 0 === y) {
                g && (g.fetch = "miss");
                let e = this.#G(t, y, _, p);
                return e.__returned = e;
            }
            {
                let e = this.#k[y];
                if (this.#$(e)) {
                    let t = r && void 0 !== e.__staleWhileFetching;
                    return g && (g.fetch = "inflight", t && (g.returnedStale = !0)), t ? e.__staleWhileFetching : e.__returned = e;
                }
                let s = this.#z(y);
                if (!h && !s) return g && (g.fetch = "hit"), this.#H(y), n && this.#X(y), g && this.#tt(g, y), e;
                let i = this.#G(t, y, _, p), o = void 0 !== i.__staleWhileFetching && r;
                return g && (g.fetch = s ? "stale" : "refresh", o && s && (g.returnedStale = !0)), o ? i.__staleWhileFetching : i.__returned = i;
            }
        }
        forceFetch(t, e = {}) {
            let r = m_.hasSubscribers, { status: n = f_() ? {} : void 0 } = e;
            e.status = n, n && e.context && (n.context = e.context);
            let s = this.#mt(t, e);
            return n && r && (n.trace = !0, m_.tracePromise(()=>s, n).catch(()=>{})), s;
        }
        async #mt(t, e = {}) {
            let r = await this.#lt(t, e);
            if (void 0 === r) throw new Error("fetch() returned undefined");
            return r;
        }
        memo(t, e = {}) {
            let { status: r = l_.hasSubscribers ? {} : void 0 } = e;
            e.status = r, r && (r.op = "memo", r.key = t, e.context && (r.context = e.context));
            let n = this.#dt(t, e);
            return r && (r.value = n), l_.hasSubscribers && l_.publish(r), n;
        }
        #dt(t, e = {}) {
            let r = this.#J;
            if (!r) throw new Error("no memoMethod provided to constructor");
            let { context: n, status: s, forceRefresh: i, ...o } = e;
            s && i && (s.forceRefresh = !0);
            let a = this.#ot(t, o), u = i || void 0 === a;
            if (s && (s.memo = u ? "miss" : "hit", u || (s.value = a)), !u) return a;
            let c = r(t, a, {
                options: o,
                context: n
            });
            return s && (s.value = c), this.#at(t, c, o), c;
        }
        get(t, e = {}) {
            let { status: r = l_.hasSubscribers ? {} : void 0 } = e;
            e.status = r, r && (r.op = "get", r.key = t);
            let n = this.#ot(t, e);
            return r && (void 0 !== n && (r.value = n), l_.hasSubscribers && l_.publish(r)), n;
        }
        #ot(t, e = {}) {
            let { allowStale: r = this.allowStale, updateAgeOnGet: n = this.updateAgeOnGet, noDeleteOnStaleGet: s = this.noDeleteOnStaleGet, status: i } = e, o = this.#C.get(t);
            if (void 0 === o) return void (i && (i.get = "miss"));
            let a = this.#k[o], u = this.#$(a);
            return i && this.#tt(i, o), this.#z(o) ? u ? (i && (i.get = "stale-fetching"), r && void 0 !== a.__staleWhileFetching ? (i && (i.returnedStale = !0), a.__staleWhileFetching) : void 0) : (s || this.#Z(t, "expire"), i && (i.get = "stale"), r ? (i && (i.returnedStale = !0), a) : void 0) : (i && (i.get = u ? "fetching" : "hit"), this.#H(o), n && this.#X(o), u ? a.__staleWhileFetching : a);
        }
        #ft(t, e) {
            this.#q[e] = t, this.#v[t] = e;
        }
        #H(t) {
            t !== this.#P && (t === this.#R ? this.#R = this.#v[t] : this.#ft(this.#q[t], this.#v[t]), this.#ft(this.#P, t), this.#P = t);
        }
        delete(t) {
            return this.#Z(t, "delete");
        }
        #Z(t, e) {
            l_.hasSubscribers && l_.publish({
                op: "delete",
                delete: e,
                key: t
            });
            let r = !1;
            if (0 !== this.#E) {
                let n = this.#C.get(t);
                if (void 0 !== n) if (this.#Q?.[n] && (clearTimeout(this.#Q?.[n]), this.#Q[n] = void 0), r = !0, 1 === this.#E) this.#pt(e);
                else {
                    this.#et(n);
                    let r = this.#k[n];
                    if (this.#$(r) ? r.__abortController.abort(new Error("deleted")) : (this.#M || this.#F) && (this.#M && this.#_?.(r, t, e), this.#F && this.#x?.push([
                        r,
                        t,
                        e
                    ])), this.#C.delete(t), this.#b[n] = void 0, this.#k[n] = void 0, n === this.#P) this.#P = this.#q[n];
                    else if (n === this.#R) this.#R = this.#v[n];
                    else {
                        let t = this.#q[n];
                        this.#v[t] = this.#v[n];
                        let e = this.#v[n];
                        this.#q[e] = this.#q[n];
                    }
                    this.#E--, this.#T.push(n);
                }
            }
            if (this.#F && this.#x?.length) {
                let t, e = this.#x;
                for(; t = e?.shift();)this.#w?.(...t);
            }
            return r;
        }
        clear() {
            return this.#pt("delete");
        }
        #pt(t) {
            for (let e of this.#V({
                allowStale: !0
            })){
                let r = this.#k[e];
                if (this.#$(r)) r.__abortController.abort(new Error("deleted"));
                else {
                    let n = this.#b[e];
                    this.#M && this.#_?.(r, n, t), this.#F && this.#x?.push([
                        r,
                        n,
                        t
                    ]);
                }
            }
            if (this.#C.clear(), this.#k.fill(void 0), this.#b.fill(void 0), this.#U && this.#D) {
                this.#U.fill(0), this.#D.fill(0);
                for (let t of this.#Q ?? [])void 0 !== t && clearTimeout(t);
                this.#Q?.fill(void 0);
            }
            if (this.#N && this.#N.fill(0), this.#R = 0, this.#P = 0, this.#T.length = 0, this.#I = 0, this.#E = 0, this.#F && this.#x) {
                let t, e = this.#x;
                for(; t = e?.shift();)this.#w?.(...t);
            }
        }
    };
    class S_ {
        constructor(){
            this.updates = [], this.latestModelVersions = new w_({
                max: 100
            }), this.maxRecentUpdatesStored = 100;
        }
        updateConfig(t) {
            if (void 0 === t) return;
            this.maxRecentUpdatesStored = t.maxRecentUpdatesStored ?? 100;
            const e = t.maxModelVersionCacheSize ?? 100;
            if (this.latestModelVersions.max !== e) {
                const t = this.latestModelVersions;
                this.latestModelVersions = new w_({
                    max: e
                }), this.latestModelVersions.load(t.dump());
            }
        }
        push(t) {
            this.updates.push(t), this.updates.length > this.maxRecentUpdatesStored && this.updates.shift();
            const e = this.getLatestModelVersion(t.relativeWorkspacePath) ?? -1;
            t.modelVersion > e && this.latestModelVersions.set(t.relativeWorkspacePath, t.modelVersion);
        }
        getRecentUpdates(t, e) {
            const r = t ?? this.maxRecentUpdatesStored, n = [];
            for(let t = this.updates.length - 1; t >= 0 && n.length < r; t--){
                const r = this.updates[t];
                e && r.relativeWorkspacePath !== e || n.push(r);
            }
            return n.reverse();
        }
        clearUpdatesUpToVersion(t, e) {
            this.updates = this.updates.filter((r)=>r.relativeWorkspacePath !== t || r.modelVersion > e);
        }
        getLatestModelVersion(t) {
            return this.latestModelVersions.get(t);
        }
    }
    class J_ {
        constructor(t){
            this.syncer = t, this._onDidChangeFileDecorations = new o.EventEmitter, this.onDidChangeFileDecorations = this._onDidChangeFileDecorations.event, this.disposables = [], this.pending = [], this.disposables.push(o.workspace.onDidOpenTextDocument((t)=>{
                this._onDidChangeFileDecorations.fire([
                    t.uri
                ]);
            }), o.workspace.onDidSaveTextDocument((t)=>{
                this._onDidChangeFileDecorations.fire([
                    t.uri
                ]);
            }), o.cursor.onDidChangeCursorIgnoredFiles(()=>{
                this._onDidChangeFileDecorations.fire(void 0);
            }));
        }
        provideFileDecoration(t) {
            return new Promise((e, r)=>{
                this.pending.push({
                    uri: t,
                    resolve: e,
                    reject: r
                }), this.flushTimer ??= setTimeout(()=>this.flush(), 0);
            });
        }
        async flush() {
            this.flushTimer = void 0;
            const t = this.pending;
            let e;
            this.pending = [];
            try {
                e = await o.cursor.shouldIgnoreUris(t.map((t)=>t.uri), {
                    skipRealpath: !0
                });
            } catch (e) {
                for (const r of t)r.reject(e);
                return;
            }
            t.forEach((t, r)=>{
                try {
                    t.resolve(this.toDecoration(e[r]));
                } catch (e) {
                    t.reject(e);
                }
            });
        }
        toDecoration(t) {
            if (t) switch(t.type){
                case "cursorIgnore":
                    return {
                        badge: "⊘",
                        tooltip: `AI features disabled (File in ${"globalIgnore" === t.source ? "globalignore" : ".cursorignore"})`
                    };
                case "adminBlock":
                    return {
                        badge: "⊘",
                        tooltip: "AI features disabled (Blocked by team admin)"
                    };
                case "outOfWorkspace":
                    return;
                default:
                    throw new Error(`Unknown reason: ${t.type}`);
            }
        }
        dispose() {
            void 0 !== this.flushTimer && (clearTimeout(this.flushTimer), this.flushTimer = void 0);
            const t = this.pending;
            this.pending = [];
            for (const e of t)e.resolve(void 0);
            this._onDidChangeFileDecorations.dispose(), this.disposables.forEach((t)=>t.dispose());
        }
    }
    const B_ = 5e5, E_ = 3e5;
    function I_(t) {
        const e = o.workspace.asRelativePath(t.uri);
        return "vscode-notebook-cell" === t.uri.scheme ? e + "#" + t.uri.fragment : e;
    }
    class C_ {
        constructor(t, e){
            this.context = t, this.aiConnectTransport = e, this.observationDisposables = [], this.maxFileSizeToSyncBytes = B_, this.successiveSyncsRequiredForReliance = 5, this.ONE_HUNDRED_MS = 100, this.config = new n_(this.context), this.client = new a_(this.config, this.aiConnectTransport), this.recentUpdatesManager = new S_, this.syncerAndUploader = new b_(this.client, this.config, this.recentUpdatesManager), this.decorationProvider = new J_(this), this.initialize(), this.observationDisposables.push(o.window.registerFileDecorationProvider(this.decorationProvider));
        }
        async initialize() {
            try {
                await this.client.initialize(), await new Promise((t)=>setTimeout(t, 3 * this.ONE_HUNDRED_MS)), this.observationDisposables.push(o.cursor.onDidChangeFileSyncClientEnabled(this.handleFileSyncEnabledChange.bind(this))), this.config.addCredChangeCallback(()=>this.syncVisibleTabs()), this.registerEventListeners(), this.syncVisibleTabs(), this.registerFileSyncActions();
            } catch (t) {
                c.error("Failed to initialize FileSyncer", t), this.config.isDevelopment() && this.config.isFileSyncEnabled() && o.window.showErrorMessage("Failed to initialize file sync. Please try reloading the window." + (t instanceof Error ? ` Error: ${t.message}` : ""));
            }
        }
        registerFileSyncActions() {
            f(ea.GetFileSyncUpdates, async (t)=>{
                if (!this.config.isFileSyncEnabled()) return [];
                return (await this.getRecentFilesyncUpdates(t)).map((t)=>t.toJson());
            }), f(ea.ShouldRelyOnFileSyncForFile, async (t)=>this.shouldRelyOnFileSyncForFile(t.relativeWorkspacePath, t.modelVersion)), f(ea.GetFileSyncEncryptionHeader, async ()=>this.getFileSyncEncryptionHeader()), f(ea.ResetSequentialSuccessfulSync, async (t)=>{
                this.resetSequentialSuccessfulSync(t.relativeWorkspacePath);
            }), f(ea.TriggerFileSync, async (t)=>{
                await this.triggerFileSync(t.relativePath, t.content, t.version);
            });
        }
        async scheduleFSConfigUpdate() {
            await this.client.fsConfigUpdate(), this.updateConfig(this.config.fsConfig), void 0 !== this.fsConfigUpdateInterval && clearInterval(this.fsConfigUpdateInterval), this.fsConfigUpdateInterval = setInterval(async ()=>{
                await this.client.fsConfigUpdate(), this.updateConfig(this.config.fsConfig);
            }, 3e5);
        }
        updateConfig(t) {
            this.syncerAndUploader.updateConfig(t), this.recentUpdatesManager.updateConfig(t), this.client.updateConfig(t), this.maxFileSizeToSyncBytes = t?.maxFileSizeToSyncBytes ?? B_, this.successiveSyncsRequiredForReliance = t?.successiveSyncsRequiredForReliance ?? 5;
        }
        async getRecentFilesyncUpdates({ maxUpdates: t, relativeWorkspacePath: e, requestedModelVersion: r }) {
            if (void 0 !== e && void 0 !== r) {
                const t = 8, n = 4;
                for(let s = 0; s < t; s++){
                    const t = this.recentUpdatesManager.getLatestModelVersion(e);
                    if (void 0 !== t && t >= r) break;
                    await new Promise((t)=>setTimeout(t, n));
                }
            }
            return this.recentUpdatesManager.getRecentUpdates(t, e);
        }
        getFileSyncEncryptionHeader() {
            return this.client.getFileSyncEncryptionHeader();
        }
        registerEventListeners() {
            c.info("[registerEventListeners] Registering event listeners"), this.observationDisposables.push(o.workspace.onDidChangeTextDocument(this.handleDocumentChange.bind(this)), o.window.onDidChangeVisibleTextEditors(this.handleVisibleEditorsChange.bind(this)));
        }
        handleDocumentChange(t) {
            if (!this.fastAllowSyncDocument(t.document)) return;
            if (!this.config.isFileSyncEnabled()) return;
            const e = function(t) {
                return {
                    relativeWorkspacePath: I_(t.document),
                    modelVersion: t.document.version,
                    contentChanges: t.contentChanges,
                    contentLength: t.document.getTextLength()
                };
            }(t);
            this.pushToRecentUpdatesManager(e), this.asyncShouldSyncDocument(t.document).then(async (r)=>{
                if (!r) return;
                const n = await this.getRecentFilesyncUpdates({
                    relativeWorkspacePath: e.relativeWorkspacePath
                });
                this.syncerAndUploader.syncDocumentChanges(t.document, e, n);
            }).catch((t)=>{
                c.error("Failed to handle document change", t);
            });
        }
        pushToRecentUpdatesManager(t) {
            const e = t.modelVersion, r = t.contentChanges.map((t)=>new rs({
                    startPosition: t.rangeOffset,
                    endPosition: t.rangeOffset + t.rangeLength,
                    changeLength: t.rangeLength,
                    replacedString: t.text
                }));
            this.recentUpdatesManager.push(new es({
                modelVersion: e,
                relativeWorkspacePath: t.relativeWorkspacePath,
                updates: r,
                expectedFileLength: t.contentLength
            }));
        }
        handleVisibleEditorsChange(t) {
            if (!this.config.isFileSyncEnabled()) return;
            const e = performance.now();
            Promise.all(t.map(async (t)=>{
                this.fastAllowSyncDocument(t.document) && await this.asyncShouldSyncDocument(t.document) && await this.syncerAndUploader.syncFullDocument(t.document);
            })).then(()=>{
                const t = performance.now();
                c.info(`Handled visible editors change in ${t - e}ms`);
            }).catch((t)=>{
                c.error("Failed to handle visible editors change", t);
            });
        }
        async handleFileSyncEnabledChange(t) {
            this.config.refresh(), await this.client.fsConfigUpdate(), c.info(`File sync enabled status: ${this.config.isFileSyncEnabled()}`), this.config.isFileSyncEnabled() && await this.syncVisibleTabs();
        }
        async syncVisibleTabs() {
            if (!this.config.isFileSyncEnabled()) return;
            c.info("Starting sync of visible tabs");
            const t = performance.now(), e = o.window.visibleTextEditors;
            Promise.all(e.map(async (t)=>{
                this.fastAllowSyncDocument(t.document) && await this.asyncShouldSyncDocument(t.document) && await this.syncerAndUploader.syncFullDocument(t.document);
            })).then(()=>{
                const e = performance.now();
                c.info(`Synced all visible tabs in ${e - t}ms`);
            }).catch((t)=>{
                c.error("Failed to sync all visible tabs", t);
            });
        }
        fastAllowSyncDocument(t) {
            return ("file" === t.uri.scheme || "untitled" === t.uri.scheme || "vscode-remote" === t.uri.scheme || "vscode-notebook-cell" === t.uri.scheme) && !(this.syncerAndUploader.getLatestDocumentVersionSynced(I_(t)) === t.version && !this.config.isDevelopment()) && (!(t.getTextLength() > this.maxFileSizeToSyncBytes || !ia(o.cursor.cppEnabled(), {
                languageId: t.languageId,
                fsPath: t.uri.fsPath
            }, o.workspace.getConfiguration().get("cursor.cpp.disabledLanguages") ?? [])) || (this.syncerAndUploader.resetSequentialSuccessfulSync(I_(t)), !1));
        }
        async asyncShouldSyncDocument(t) {
            return !await o.cursor.shouldBlockUriFromReading(t.uri) || (this.syncerAndUploader.resetSequentialSuccessfulSync(I_(t)), !1);
        }
        dispose() {
            void 0 !== this.fsConfigUpdateInterval && (clearInterval(this.fsConfigUpdateInterval), this.fsConfigUpdateInterval = void 0), this.observationDisposables.forEach((t)=>t.dispose()), this.observationDisposables.length = 0, this.config.dispose();
        }
        shouldRelyOnFileSyncForFile(t, e) {
            if (!this.config.isFileSyncEnabled() || 1 === e) return !1;
            const r = this.syncerAndUploader.getLatestDocumentVersionSynced(t);
            if (void 0 === r || void 0 !== e && r < e - 10) return !1;
            const n = this.syncerAndUploader.getSequentialSuccessfulSyncCount(t);
            return void 0 !== n && n >= this.successiveSyncsRequiredForReliance;
        }
        resetSequentialSuccessfulSync(t) {
            this.syncerAndUploader.resetSequentialSuccessfulSync(t);
        }
        async triggerFileSync(t, e, r) {
            return this.syncerAndUploader.triggerFileSync(t, e, r);
        }
    }
    class b_ {
        constructor(t, e, r){
            this.client = t, this.config = e, this.recentUpdatesManager = r, this.retryConfig = {
                numOfAttempts: 3,
                startingDelay: 20,
                timeMultiple: 2
            }, this.extraSuccessfulSyncsNeededAfterError = 0, this.syncDebounceMs = 250, this.syncUpdateThreshold = 20, this.pendingSyncs = new Map, this.documentSyncDetails = this.newFileSyncStatusCache(5, E_), this.config.addCredChangeCallback(()=>this.documentSyncDetails.clear());
        }
        newFileSyncStatusCache(t, e) {
            return new w_({
                max: t,
                ttl: e,
                updateAgeOnGet: !1,
                updateAgeOnHas: !1,
                allowStale: !1,
                noUpdateTTL: !1
            });
        }
        updateConfig(t) {
            this.recentUpdatesManager.updateConfig(t), this.retryConfig.numOfAttempts = t?.syncRetryMaxAttempts ?? this.retryConfig.numOfAttempts, this.retryConfig.startingDelay = t?.syncRetryInitialDelayMs ?? this.retryConfig.startingDelay, this.retryConfig.timeMultiple = t?.syncRetryTimeMultiplier ?? this.retryConfig.timeMultiple, this.extraSuccessfulSyncsNeededAfterError = t?.syncRetryMaxAttempts ?? this.extraSuccessfulSyncsNeededAfterError, this.syncDebounceMs = t?.syncDebounceMs ?? this.syncDebounceMs, this.syncUpdateThreshold = t?.syncUpdateThreshold ?? this.syncUpdateThreshold;
            const e = t?.fileSyncStatusMaxCacheSize ?? 5, r = t?.fileSyncStatusTtlMs ?? E_;
            if (this.documentSyncDetails.max !== e || this.documentSyncDetails.ttl !== r) {
                const t = this.documentSyncDetails;
                this.documentSyncDetails = this.newFileSyncStatusCache(e, r), this.documentSyncDetails.load(t.dump());
            }
        }
        maybeGetFileHash(t) {
            const e = this.config.fsConfig?.checkFilesyncHashPercent || 0;
            if (this.config.isDevelopment() || Math.random() < e) return this.getFileSHA256(t);
        }
        async syncDocumentChanges(t, e, r) {
            const n = this.getLatestDocumentVersionSynced(e.relativeWorkspacePath), s = r.filter((t)=>t.relativeWorkspacePath === e.relativeWorkspacePath).map((t)=>t.modelVersion).sort((t, e)=>t - e).pop();
            if (void 0 === s) return;
            if (s <= 1 || void 0 === n || n < s - 100 || n > s) return this.resetSequentialSuccessfulSync(e.relativeWorkspacePath, !0), await this.syncFullDocument(t);
            const i = this.pendingSyncs.get(e.relativeWorkspacePath);
            if (i && clearTimeout(i), r.length >= this.syncUpdateThreshold && r.length % this.syncUpdateThreshold === 0) return this.pendingSyncs.delete(e.relativeWorkspacePath), await this.performSync(t, r, e.relativeWorkspacePath, s);
            const o = setTimeout(()=>{
                this.pendingSyncs.delete(e.relativeWorkspacePath), this.performSync(t, r, e.relativeWorkspacePath, s);
            }, this.syncDebounceMs);
            this.pendingSyncs.set(e.relativeWorkspacePath, o);
        }
        shouldRetry(t) {
            if (t instanceof s_) return !1;
            if (t instanceof pa) {
                const e = t.findDetails(Dn)[0];
                if (!1 === e?.details?.isRetryable) return !1;
            }
            return !0;
        }
        async performSync(t, e, r, n) {
            const s = e.filter((t)=>t.relativeWorkspacePath === r).map((t)=>t.modelVersion).sort((t, e)=>t - e).pop();
            if (void 0 === s) return;
            const i = n === t.version ? this.maybeGetFileHash(t.getText()) : void 0, o = this.shouldRetry;
            try {
                await (0, u_.backOff)(async ()=>{
                    await this.client.syncFile({
                        relativeWorkspacePath: r,
                        modelVersion: s,
                        filesyncUpdates: e,
                        sha256Hash: i
                    }), this.recentUpdatesManager.clearUpdatesUpToVersion(r, s);
                }, {
                    ...this.retryConfig,
                    retry: (t, e)=>!!o(t) && (c.warn(`Failed to sync changes for ${r}, version=${s}, retrying (attempt ${e})`, t), !0)
                }), this.incrementSequentialSuccessfulSync(r, s);
            } catch (e) {
                c.error(`Failed to sync changes for ${r}, version=${s}, attempting full file sync`, e), this.resetSequentialSuccessfulSync(r, !0), await this.syncFullDocument(t);
            }
        }
        async syncFullDocument(t) {
            const e = I_(t), r = t.version, n = t.getText(), s = this.maybeGetFileHash(n), i = this.shouldRetry;
            try {
                await (0, u_.backOff)(async ()=>{
                    await this.client.uploadFile({
                        relativeWorkspacePath: e,
                        modelVersion: r,
                        contents: n,
                        sha256Hash: s
                    }), this.recentUpdatesManager.clearUpdatesUpToVersion(e, r);
                }, {
                    ...this.retryConfig,
                    retry: (t, n)=>!!i(t) && (c.warn(`Failed to sync full file ${e}, version=${r}, retrying (attempt ${n})`, t), !0)
                }), this.incrementSequentialSuccessfulSync(e, r);
            } catch (t) {
                throw c.error(`Failed to sync full file after all retries for ${e}, version=${r}`, t), this.resetSequentialSuccessfulSync(e, !0), t;
            }
        }
        getFileSHA256(t) {
            return (0, r_.createHash)("sha256").update(t).digest("hex");
        }
        incrementSequentialSuccessfulSync(t, e) {
            const r = this.documentSyncDetails.get(t) || {
                modelVersion: e,
                sequentialSuccessfulSyncCount: 0
            };
            r.sequentialSuccessfulSyncCount += 1, r.modelVersion = e, this.documentSyncDetails.set(t, r);
        }
        getLatestDocumentVersionSynced(t) {
            return this.documentSyncDetails.get(t)?.modelVersion;
        }
        resetSequentialSuccessfulSync(t, e = !1) {
            const r = this.documentSyncDetails.get(t);
            void 0 !== r && (e ? r.sequentialSuccessfulSyncCount = -this.extraSuccessfulSyncsNeededAfterError : this.documentSyncDetails.delete(t));
        }
        getSequentialSuccessfulSyncCount(t) {
            return this.documentSyncDetails.get(t)?.sequentialSuccessfulSyncCount;
        }
        async triggerFileSync(t, e, r) {
            if (!this.config.isFileSyncEnabled()) return;
            const n = this.maybeGetFileHash(e), s = this.shouldRetry;
            try {
                await (0, u_.backOff)(async ()=>{
                    await this.client.uploadFile({
                        relativeWorkspacePath: t,
                        modelVersion: r,
                        contents: e,
                        sha256Hash: n
                    });
                }, {
                    ...this.retryConfig,
                    retry: (e, n)=>!!s(e) && (c.warn(`Failed to trigger file sync for ${t}, version=${r}, retrying (attempt ${n})`, e), !0)
                });
            } catch (e) {
                throw c.error(`Failed to trigger file sync for ${t}, version=${r}`, e), e;
            }
        }
    }
    const k_ = require("path"), v_ = require("fs/promises");
    function q_(t, e) {
        let r;
        return (...n)=>{
            clearTimeout(r), r = setTimeout(()=>t(...n), e);
        };
    }
    const R_ = require("child_process");
    class P_ {
        constructor(t){
            this.extensionPath = t, this.worker = null, this.requestId = 0, this.pendingRequests = new Map, this.readyResolve = null, this.readyReject = null, this.disposed = !1, this.isRespawning = !1, this.consecutiveDeaths = 0, this.respawnTimer = null, this.requestTimeout = 3e4, this.ready = this.createReadyPromise(), this.spawnWorker();
        }
        createReadyPromise() {
            const t = new Promise((t, e)=>{
                this.readyResolve = t, this.readyReject = e;
            });
            return t.catch(()=>{}), t;
        }
        spawnWorker() {
            if (this.disposed) return;
            const t = -1 !== (o.extensions.getExtension("anysphere.cursor-always-local")?.packageJSON?.main || "").indexOf("/dist/") ? "dist" : "out", e = k_.join(this.extensionPath, t, "gitWorker.js");
            try {
                this.worker = (0, R_.fork)(e, [], {
                    stdio: [
                        "pipe",
                        "pipe",
                        "pipe",
                        "ipc"
                    ],
                    env: {
                        ...process.env,
                        NODE_OPTIONS: ""
                    }
                }), this.worker.on("message", (t)=>{
                    if ("type" in t && "ready" === t.type) return a.StructuredLogProviderImpl.info("git", "Git worker ready", {
                        subkey: "git_worker_ready"
                    }), this.consecutiveDeaths = 0, void this.readyResolve?.();
                    const e = t, r = this.pendingRequests.get(e.id);
                    r && (clearTimeout(r.timer), this.pendingRequests.delete(e.id), e.success ? r.resolve(e.result) : r.reject(new Error(e.error || "Unknown worker error")));
                }), this.worker.on("error", (t)=>{
                    a.StructuredLogProviderImpl.error("git", "Git worker error", t, {
                        subkey: "git_worker_error",
                        errorMessage: t.message
                    }), this.handleWorkerDeath();
                }), this.worker.on("exit", (t, e)=>{
                    this.disposed || (a.StructuredLogProviderImpl.warn("git", "Git worker exited unexpectedly", {
                        subkey: "git_worker_exit",
                        code: t,
                        signal: e
                    }), this.handleWorkerDeath(t, e));
                }), this.worker.stderr?.on("data", (t)=>{
                    a.StructuredLogProviderImpl.debug("git", "Git worker stderr", {
                        subkey: "git_worker_stderr",
                        output: t.toString()
                    });
                });
            } catch (t) {
                a.StructuredLogProviderImpl.error("git", "Failed to spawn git worker", t instanceof Error ? t : void 0, {
                    subkey: "git_worker_spawn_failed",
                    errorMessage: t instanceof Error ? t.message : String(t)
                }), this.readyReject?.(t instanceof Error ? t : new Error(String(t)));
            }
        }
        handleWorkerDeath(t, e) {
            if (this.isRespawning) return;
            this.isRespawning = !0;
            for (const [t, e] of this.pendingRequests)clearTimeout(e.timer), e.reject(new Error("Worker died")), this.pendingRequests.delete(t);
            if (this.readyReject?.(new Error("Worker died")), this.disposed) return;
            if (this.consecutiveDeaths++, this.consecutiveDeaths >= 5) return a.StructuredLogProviderImpl.warn("git", "Git worker respawn disabled after repeated failures", {
                subkey: "git_worker_respawn_disabled",
                attempts: this.consecutiveDeaths,
                code: t,
                signal: e
            }), this.worker = null, this.readyResolve = null, void (this.readyReject = null);
            const r = Math.min(1e3 * 2 ** (this.consecutiveDeaths - 1), 3e4);
            this.ready = this.createReadyPromise(), this.respawnTimer = setTimeout(()=>{
                this.respawnTimer = null, this.isRespawning = !1, this.spawnWorker();
            }, r);
        }
        async sendRequest(t, e, r) {
            if (!this.worker || this.disposed) throw new Error("Worker not available");
            await this.ready;
            const n = ++this.requestId, s = {
                id: n,
                type: t,
                workspacePath: e,
                args: r
            };
            return new Promise((e, r)=>{
                const i = setTimeout(()=>{
                    this.pendingRequests.delete(n), r(new Error(`Request ${t} timed out after ${this.requestTimeout}ms`));
                }, this.requestTimeout);
                this.pendingRequests.set(n, {
                    resolve: e,
                    reject: r,
                    timer: i
                }), this.worker?.send(s);
            });
        }
        async getRepoState(t) {
            return this.sendRequest("getRepoState", t);
        }
        async getBranches(t) {
            return this.sendRequest("getBranches", t);
        }
        async getTags(t) {
            return this.sendRequest("getTags", t);
        }
        async getRemoteRefs(t) {
            return this.sendRequest("getRemoteRefs", t);
        }
        async getCurrentCommitHash(t) {
            return this.sendRequest("getCurrentCommitHash", t);
        }
        async getCurrentBranch(t) {
            return this.sendRequest("getCurrentBranch", t);
        }
        async getDefaultBranch(t) {
            return this.sendRequest("getDefaultBranch", t);
        }
        async getFetchHead(t) {
            return this.sendRequest("getFetchHead", t);
        }
        async getStashHash(t) {
            return this.sendRequest("getStashHash", t);
        }
        async isRebasing(t) {
            return this.sendRequest("isRebasing", t);
        }
        async fileExists(t, e) {
            return this.sendRequest("fileExists", t, {
                filePath: e
            });
        }
        async getRemoteUrl(t, e) {
            return this.sendRequest("getRemoteUrl", t, {
                remoteName: e
            });
        }
        dispose() {
            this.disposed = !0, this.respawnTimer && (clearTimeout(this.respawnTimer), this.respawnTimer = null);
            for (const [t, e] of this.pendingRequests)clearTimeout(e.timer), e.reject(new Error("Client disposed")), this.pendingRequests.delete(t);
            this.worker && (this.worker.kill(), this.worker = null);
        }
    }
    class T_ {
        constructor(t, e){
            this.disposables = [], this.repoStates = new Map, this.watchers = new Map, this.workspaceDisposables = new Map, this.workerClient = null, this.logger = t, this.extensionPath = e, this.init().catch((t)=>{
                a.StructuredLogProviderImpl.error("git", "Failed to initialize GitListener", t instanceof Error ? t : void 0, {
                    subkey: "git_listener_init_failed",
                    workspaceFolders: o.workspace.workspaceFolders?.length ?? 0,
                    errorMessage: t instanceof Error ? t.message : String(t)
                });
            });
        }
        dispose() {
            for (const t of this.disposables)try {
                t.dispose();
            } catch (t) {}
            this.disposables.splice(0, this.disposables.length), this.watchers.clear(), this.workspaceDisposables.clear(), this.repoStates.clear(), this.workerClient && (this.workerClient.dispose(), this.workerClient = null);
        }
        async init() {
            try {
                if (await o.cursor.checkFeatureGate("skip_git_telemetry_computations")) return void a.StructuredLogProviderImpl.info("git", "Git telemetry computations skipped due to feature flag", {
                    subkey: "git_telemetry_skipped"
                });
            } catch (t) {
                a.StructuredLogProviderImpl.warn("git", "Failed to check git telemetry feature flag, proceeding with normal initialization", {
                    subkey: "git_telemetry_flag_check_failed",
                    errorMessage: t instanceof Error ? t.message : String(t)
                });
            }
            try {
                this.workerClient = new P_(this.extensionPath), a.StructuredLogProviderImpl.info("git", "Using git worker subprocess for filesystem operations", {
                    subkey: "git_worker_enabled"
                });
            } catch (t) {
                a.StructuredLogProviderImpl.warn("git", "Failed to check git worker feature flag, using inline filesystem operations", {
                    subkey: "git_worker_flag_check_failed",
                    errorMessage: t instanceof Error ? t.message : String(t)
                });
            }
            if (o.workspace.workspaceFolders) for (const t of o.workspace.workspaceFolders)await this.watchRepository(t.uri.fsPath);
            this.disposables.push(o.workspace.onDidChangeWorkspaceFolders(async (t)=>{
                for (const e of t.added)await this.watchRepository(e.uri.fsPath);
                for (const e of t.removed)this.unwatchRepository(e.uri.fsPath);
            }));
        }
        async watchRepository(t) {
            const e = k_.join(t, ".git");
            try {
                if (!(await v_.stat(e)).isDirectory()) return;
            } catch  {
                return;
            }
            const r = await this.initializeRepoState(t);
            this.repoStates.set(t, r);
            const n = [];
            this.workspaceDisposables.set(t, n);
            const s = [
                {
                    pattern: "HEAD",
                    handler: ()=>this.checkHeadChange(t)
                },
                {
                    pattern: "refs/heads/**",
                    handler: q_(()=>this.checkCommitOrBranchChange(t), 500)
                },
                {
                    pattern: "FETCH_HEAD",
                    handler: ()=>this.checkFetch(t)
                },
                {
                    pattern: "refs/remotes/**",
                    handler: q_(()=>this.checkRemoteChanges(t), 500)
                },
                {
                    pattern: "refs/tags/**",
                    handler: q_(()=>this.checkTags(t), 500)
                },
                {
                    pattern: "refs/stash",
                    handler: ()=>this.checkStash(t)
                },
                {
                    pattern: "logs/refs/stash",
                    handler: ()=>this.checkStash(t)
                },
                {
                    pattern: "MERGE_HEAD",
                    handler: ()=>this.checkMergeStatus(t)
                },
                {
                    pattern: "rebase-merge",
                    handler: ()=>this.checkRebaseStatus(t)
                },
                {
                    pattern: "rebase-apply",
                    handler: ()=>this.checkRebaseStatus(t)
                }
            ];
            for (const { pattern: r, handler: i } of s){
                const s = new o.RelativePattern(e, r), u = o.workspace.createFileSystemWatcher(s), c = async ()=>{
                    try {
                        await i();
                    } catch (e) {
                        a.StructuredLogProviderImpl.error("git", "Git event handler failed", e instanceof Error ? e : void 0, {
                            subkey: "git_event_handler_failed",
                            pattern: r,
                            workspacePath: t,
                            errorMessage: e instanceof Error ? e.message : String(e)
                        });
                    }
                }, l = [
                    u.onDidChange(c),
                    u.onDidCreate(c),
                    u.onDidDelete(c),
                    u
                ], m = `${t}:${r}`;
                this.watchers.set(m, u), this.disposables.push(...l), n.push(...l);
            }
            const i = Array.from(r.remoteRefs.keys()).map((t)=>t.split("/")[0]).filter((t, e, r)=>r.indexOf(t) === e), u = {};
            for (const e of i)u[e] = await this.getRemoteUrl(t, e);
            r.cachedRemoteUrl = Object.values(u).find(Boolean) || null;
        }
        async initializeRepoState(t) {
            if (this.workerClient) try {
                const e = await this.workerClient.getRepoState(t);
                return {
                    lastCommitHash: e.commitHash,
                    currentBranch: e.currentBranch,
                    defaultBranch: e.defaultBranch,
                    lastFetchHead: e.fetchHead,
                    lastStashHash: e.stashHash,
                    branches: new Set(e.branches),
                    tags: new Set(e.tags),
                    remoteRefs: new Map(e.remoteRefs),
                    isRebasing: !1,
                    isMerging: !1,
                    cachedRemoteUrl: void 0
                };
            } catch (t) {
                a.StructuredLogProviderImpl.debug("git", "Worker getRepoState failed, falling back to inline", {
                    subkey: "git_worker_fallback",
                    errorMessage: t instanceof Error ? t.message : String(t)
                });
            }
            const [e, r, n, s, i, o, u, c] = await Promise.all([
                this.getCurrentCommitHash(t),
                this.getCurrentBranch(t),
                this.getDefaultBranch(t),
                this.getBranches(t),
                this.getTags(t),
                this.getRemoteRefs(t),
                this.getFetchHead(t),
                this.getStashHash(t)
            ]);
            return {
                lastCommitHash: e,
                currentBranch: r,
                defaultBranch: n,
                lastFetchHead: u,
                lastStashHash: c,
                branches: new Set(s),
                tags: new Set(i),
                remoteRefs: new Map(o),
                isRebasing: !1,
                isMerging: !1,
                cachedRemoteUrl: void 0
            };
        }
        async checkHeadChange(t) {
            const e = this.repoStates.get(t);
            if (!e) return;
            const [r, n] = await Promise.all([
                this.getCurrentCommitHash(t),
                this.getCurrentBranch(t)
            ]);
            (n !== e.currentBranch || r && r !== e.lastCommitHash) && (await this.recordEvent(t, So.CHECKOUT, {
                commitHash: r,
                previousCommitHash: e.lastCommitHash
            }), e.lastCommitHash = r, e.currentBranch = n);
        }
        async checkCommitOrBranchChange(t) {
            const e = this.repoStates.get(t);
            if (!e) return;
            const [r, n, s] = await Promise.all([
                this.getCurrentCommitHash(t),
                this.getCurrentBranch(t),
                this.getBranches(t)
            ]), i = new Set(s);
            n === e.currentBranch && r && r !== e.lastCommitHash && (await this.recordEvent(t, So.COMMIT, {
                commitHash: r,
                previousCommitHash: e.lastCommitHash
            }), e.lastCommitHash = r, e.currentBranch = n), i.size === e.branches.size && s.every((t)=>e.branches.has(t)) || (await this.recordEvent(t, So.BRANCH, {
                commitHash: r
            }), e.branches = i);
        }
        async checkFetch(t) {
            const e = this.repoStates.get(t);
            if (e) try {
                const r = k_.join(t, ".git", "FETCH_HEAD"), n = (await v_.readFile(r, "utf-8")).split("\n")[0];
                if (n && n !== e.lastFetchHead) {
                    const r = n.match(/of\s+(.+)$/);
                    let s = null;
                    s = r ? r[1] : await this.getRemoteUrl(t), await this.recordEvent(t, So.FETCH, {
                        remoteUrl: s
                    }), e.lastFetchHead = n, s && (e.cachedRemoteUrl = s);
                }
            } catch (t) {}
        }
        async checkRemoteChanges(t) {
            const e = this.repoStates.get(t);
            if (!e) return;
            const r = await this.getRemoteRefs(t), n = new Map(r);
            let s = !1;
            for (const [t, r] of n)if (e.remoteRefs.get(t) !== r) {
                s = !0;
                break;
            }
            if (s) {
                if (await this.getFetchHead(t) !== e.lastFetchHead) {
                    const r = await this.getRemoteUrl(t);
                    await this.recordEvent(t, So.PULL, {
                        remoteUrl: r
                    }), r && (e.cachedRemoteUrl = r);
                }
                e.remoteRefs = n;
            }
        }
        async checkStash(t) {
            const e = this.repoStates.get(t);
            if (!e) return;
            const r = await this.getStashHash(t);
            r !== e.lastStashHash && (await this.recordEvent(t, So.STASH, {
                commitHash: await this.getCurrentCommitHash(t)
            }), e.lastStashHash = r);
        }
        async checkTags(t) {
            const e = this.repoStates.get(t);
            if (!e) return;
            const r = await this.getTags(t), n = new Set(r);
            n.size === e.tags.size && r.every((t)=>e.tags.has(t)) || (await this.recordEvent(t, So.TAG), e.tags = n);
        }
        async checkMergeStatus(t) {
            const e = this.repoStates.get(t);
            if (!e) return;
            const r = await this.fileExists(k_.join(t, ".git", "MERGE_HEAD"));
            if (r && !e.isMerging) e.isMerging = !0;
            else if (!r && e.isMerging) {
                e.isMerging = !1;
                const r = await this.getCurrentCommitHash(t);
                await this.recordEvent(t, So.MERGE, {
                    commitHash: r,
                    previousCommitHash: e.lastCommitHash
                }), e.lastCommitHash = r;
            }
        }
        async checkRebaseStatus(t) {
            const e = this.repoStates.get(t);
            if (!e) return;
            const r = await this.isRebasing(t);
            if (r && !e.isRebasing) e.isRebasing = !0;
            else if (!r && e.isRebasing) {
                e.isRebasing = !1;
                const r = await this.getCurrentCommitHash(t);
                await this.recordEvent(t, So.REBASE, {
                    commitHash: r,
                    previousCommitHash: e.lastCommitHash
                }), e.lastCommitHash = r;
            }
        }
        async recordEvent(t, e, r) {
            const n = this.repoStates.get(t), s = n?.currentBranch || await this.getCurrentBranch(t), i = n?.defaultBranch || await this.getDefaultBranch(t), o = r?.commitHash ?? n?.lastCommitHash ?? await this.getCurrentCommitHash(t);
            let a;
            if (e === So.FETCH || e === So.PULL) {
                const e = r?.remoteUrl || await this.getRemoteUrl(t);
                e && (a = this.sanitizeRemoteUrl(e));
            }
            let u = a;
            !u && n?.cachedRemoteUrl && (u = n.cachedRemoteUrl);
            const c = {
                operationType: e,
                repositoryPath: t,
                operationSuccess: !0,
                branchName: s || void 0,
                isDefaultBranch: s ? s === i : void 0,
                defaultBranchName: i || void 0,
                commitHash: o || void 0,
                previousCommitHash: r?.previousCommitHash || void 0,
                remoteUrl: u || void 0
            };
            this.logger.recordEvent({
                case: "gitEvent",
                value: c
            });
        }
        unwatchRepository(t) {
            const e = this.workspaceDisposables.get(t);
            if (e) {
                for (const r of e)try {
                    r.dispose();
                } catch (e) {
                    a.StructuredLogProviderImpl.warn("git", "Failed to dispose git watcher", {
                        subkey: "git_watcher_dispose_failed",
                        workspacePath: t,
                        errorMessage: e instanceof Error ? e.message : String(e)
                    });
                }
                this.workspaceDisposables.delete(t);
            }
            const r = [];
            for (const [e] of this.watchers.entries())e.startsWith(t + ":") && r.push(e);
            for (const t of r)this.watchers.delete(t);
            this.repoStates.delete(t);
        }
        async getCurrentCommitHash(t) {
            if (this.workerClient) try {
                return await this.workerClient.getCurrentCommitHash(t);
            } catch  {}
            try {
                const e = k_.join(t, ".git", "HEAD"), r = await v_.readFile(e, "utf-8");
                if (r.startsWith("ref: ")) {
                    const e = r.slice(5).trim(), n = k_.join(t, ".git", e);
                    return (await v_.readFile(n, "utf-8")).trim();
                }
                return r.trim();
            } catch (t) {
                return null;
            }
        }
        async getCurrentBranch(t) {
            if (this.workerClient) try {
                return await this.workerClient.getCurrentBranch(t);
            } catch  {}
            try {
                const e = k_.join(t, ".git", "HEAD"), r = await v_.readFile(e, "utf-8");
                if (r.startsWith("ref: ")) {
                    return r.slice(5).trim().replace("refs/heads/", "");
                }
                return null;
            } catch (t) {
                return null;
            }
        }
        async getDefaultBranch(t) {
            if (this.workerClient) try {
                return await this.workerClient.getDefaultBranch(t);
            } catch  {}
            try {
                const e = k_.join(t, ".git", "refs", "remotes", "origin", "HEAD");
                try {
                    const t = await v_.readFile(e, "utf-8");
                    if (t.startsWith("ref: ")) {
                        return t.slice(5).trim().replace("refs/remotes/origin/", "");
                    }
                } catch  {}
                const r = k_.join(t, ".git", "config"), n = (await v_.readFile(r, "utf-8")).match(/\[init\]\s*\n\s*defaultBranch\s*=\s*(.+)/);
                if (n) return n[1].trim();
                const s = await this.getBranches(t);
                return s.includes("main") ? "main" : s.includes("master") ? "master" : null;
            } catch (t) {
                return null;
            }
        }
        async getBranches(t) {
            if (this.workerClient) try {
                return await this.workerClient.getBranches(t);
            } catch  {}
            try {
                const e = k_.join(t, ".git", "refs", "heads");
                return (await this.readDirRecursive(e)).map((t)=>t.replace(e + k_.sep, ""));
            } catch  {
                return [];
            }
        }
        async getTags(t) {
            if (this.workerClient) try {
                return await this.workerClient.getTags(t);
            } catch  {}
            try {
                const e = k_.join(t, ".git", "refs", "tags");
                return (await this.readDirRecursive(e)).map((t)=>t.replace(e + k_.sep, ""));
            } catch  {
                return [];
            }
        }
        async getRemoteRefs(t) {
            if (this.workerClient) try {
                return await this.workerClient.getRemoteRefs(t);
            } catch  {}
            try {
                const e = k_.join(t, ".git", "refs", "remotes"), r = await this.readDirRecursive(e), n = [];
                for (const t of r){
                    const r = await v_.readFile(t, "utf-8"), s = t.replace(e + k_.sep, "");
                    n.push([
                        s,
                        r.trim()
                    ]);
                }
                return n;
            } catch  {
                return [];
            }
        }
        async getFetchHead(t) {
            try {
                const e = k_.join(t, ".git", "FETCH_HEAD");
                return (await v_.readFile(e, "utf-8")).split("\n")[0];
            } catch  {
                return null;
            }
        }
        async getStashHash(t) {
            try {
                const e = k_.join(t, ".git", "refs", "stash");
                return (await v_.readFile(e, "utf-8")).trim();
            } catch  {
                return null;
            }
        }
        async isRebasing(t) {
            const e = k_.join(t, ".git", "rebase-merge"), r = k_.join(t, ".git", "rebase-apply"), [n, s] = await Promise.all([
                this.fileExists(e),
                this.fileExists(r)
            ]);
            return n || s;
        }
        async fileExists(t) {
            try {
                return await v_.stat(t), !0;
            } catch  {
                return !1;
            }
        }
        async readDirRecursive(t) {
            const e = [];
            try {
                const r = await v_.readdir(t, {
                    withFileTypes: !0
                });
                for (const n of r){
                    const r = k_.join(t, n.name);
                    if (n.isDirectory()) {
                        const t = await this.readDirRecursive(r);
                        e.push(...t);
                    } else e.push(r);
                }
            } catch  {}
            return e;
        }
        async getRemoteUrl(t, e = "origin") {
            try {
                const r = k_.join(t, ".git", "config"), n = await v_.readFile(r, "utf-8"), s = `[remote "${e}"]`, i = n.indexOf(s);
                if (-1 === i) return null;
                const o = n.slice(i).match(/\s*url\s*=\s*(.+)$/m);
                return o && o[1] ? o[1].trim() : null;
            } catch (t) {
                return null;
            }
        }
        sanitizeRemoteUrl(t) {
            let e = t;
            return e = e.replace(/https:\/\/[^@]+@/, "https://"), e = e.replace(/^git@([^:]+):/, "https://$1/").replace(/\.git$/, ""), e;
        }
    }
    function x_(t, e = !1) {
        const r = t.length;
        let n = 0, s = "", i = 0, o = 16, a = 0, u = 0, c = 0, l = 0, m = 0;
        function d(e, r) {
            let s = 0, i = 0;
            for(; s < e || !r;){
                let e = t.charCodeAt(n);
                if (e >= 48 && e <= 57) i = 16 * i + e - 48;
                else if (e >= 65 && e <= 70) i = 16 * i + e - 65 + 10;
                else {
                    if (!(e >= 97 && e <= 102)) break;
                    i = 16 * i + e - 97 + 10;
                }
                n++, s++;
            }
            return s < e && (i = -1), i;
        }
        function f() {
            if (s = "", m = 0, i = n, u = a, l = c, n >= r) return i = r, o = 17;
            let e = t.charCodeAt(n);
            if (N_(e)) {
                do {
                    n++, s += String.fromCharCode(e), e = t.charCodeAt(n);
                }while (N_(e))
                return o = 15;
            }
            if (D_(e)) return n++, s += String.fromCharCode(e), 13 === e && 10 === t.charCodeAt(n) && (n++, s += "\n"), a++, c = n, o = 14;
            switch(e){
                case 123:
                    return n++, o = 1;
                case 125:
                    return n++, o = 2;
                case 91:
                    return n++, o = 3;
                case 93:
                    return n++, o = 4;
                case 58:
                    return n++, o = 6;
                case 44:
                    return n++, o = 5;
                case 34:
                    return n++, s = function() {
                        let e = "", s = n;
                        for(;;){
                            if (n >= r) {
                                e += t.substring(s, n), m = 2;
                                break;
                            }
                            const i = t.charCodeAt(n);
                            if (34 === i) {
                                e += t.substring(s, n), n++;
                                break;
                            }
                            if (92 !== i) {
                                if (i >= 0 && i <= 31) {
                                    if (D_(i)) {
                                        e += t.substring(s, n), m = 2;
                                        break;
                                    }
                                    m = 6;
                                }
                                n++;
                            } else {
                                if (e += t.substring(s, n), n++, n >= r) {
                                    m = 2;
                                    break;
                                }
                                switch(t.charCodeAt(n++)){
                                    case 34:
                                        e += '"';
                                        break;
                                    case 92:
                                        e += "\\";
                                        break;
                                    case 47:
                                        e += "/";
                                        break;
                                    case 98:
                                        e += "\b";
                                        break;
                                    case 102:
                                        e += "\f";
                                        break;
                                    case 110:
                                        e += "\n";
                                        break;
                                    case 114:
                                        e += "\r";
                                        break;
                                    case 116:
                                        e += "\t";
                                        break;
                                    case 117:
                                        const t = d(4, !0);
                                        t >= 0 ? e += String.fromCharCode(t) : m = 4;
                                        break;
                                    default:
                                        m = 5;
                                }
                                s = n;
                            }
                        }
                        return e;
                    }(), o = 10;
                case 47:
                    const u = n - 1;
                    if (47 === t.charCodeAt(n + 1)) {
                        for(n += 2; n < r && !D_(t.charCodeAt(n));)n++;
                        return s = t.substring(u, n), o = 12;
                    }
                    if (42 === t.charCodeAt(n + 1)) {
                        n += 2;
                        const e = r - 1;
                        let i = !1;
                        for(; n < e;){
                            const e = t.charCodeAt(n);
                            if (42 === e && 47 === t.charCodeAt(n + 1)) {
                                n += 2, i = !0;
                                break;
                            }
                            n++, D_(e) && (13 === e && 10 === t.charCodeAt(n) && n++, a++, c = n);
                        }
                        return i || (n++, m = 1), s = t.substring(u, n), o = 13;
                    }
                    return s += String.fromCharCode(e), n++, o = 16;
                case 45:
                    if (s += String.fromCharCode(e), n++, n === r || !U_(t.charCodeAt(n))) return o = 16;
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                    return s += function() {
                        let e = n;
                        if (48 === t.charCodeAt(n)) n++;
                        else for(n++; n < t.length && U_(t.charCodeAt(n));)n++;
                        if (n < t.length && 46 === t.charCodeAt(n)) {
                            if (n++, !(n < t.length && U_(t.charCodeAt(n)))) return m = 3, t.substring(e, n);
                            for(n++; n < t.length && U_(t.charCodeAt(n));)n++;
                        }
                        let r = n;
                        if (n < t.length && (69 === t.charCodeAt(n) || 101 === t.charCodeAt(n))) if (n++, (n < t.length && 43 === t.charCodeAt(n) || 45 === t.charCodeAt(n)) && n++, n < t.length && U_(t.charCodeAt(n))) {
                            for(n++; n < t.length && U_(t.charCodeAt(n));)n++;
                            r = n;
                        } else m = 3;
                        return t.substring(e, r);
                    }(), o = 11;
                default:
                    for(; n < r && p(e);)n++, e = t.charCodeAt(n);
                    if (i !== n) {
                        switch(s = t.substring(i, n), s){
                            case "true":
                                return o = 8;
                            case "false":
                                return o = 9;
                            case "null":
                                return o = 7;
                        }
                        return o = 16;
                    }
                    return s += String.fromCharCode(e), n++, o = 16;
            }
        }
        function p(t) {
            if (N_(t) || D_(t)) return !1;
            switch(t){
                case 125:
                case 93:
                case 123:
                case 91:
                case 34:
                case 58:
                case 44:
                case 47:
                    return !1;
            }
            return !0;
        }
        return {
            setPosition: function(t) {
                n = t, s = "", i = 0, o = 16, m = 0;
            },
            getPosition: ()=>n,
            scan: e ? function() {
                let t;
                do {
                    t = f();
                }while (t >= 12 && t <= 15)
                return t;
            } : f,
            getToken: ()=>o,
            getTokenValue: ()=>s,
            getTokenOffset: ()=>i,
            getTokenLength: ()=>n - i,
            getTokenStartLine: ()=>u,
            getTokenStartCharacter: ()=>i - l,
            getTokenError: ()=>m
        };
    }
    function N_(t) {
        return 32 === t || 9 === t;
    }
    function D_(t) {
        return 10 === t || 13 === t;
    }
    function U_(t) {
        return t >= 48 && t <= 57;
    }
    var Q_;
    !function(t) {
        t[t.lineFeed = 10] = "lineFeed", t[t.carriageReturn = 13] = "carriageReturn", t[t.space = 32] = "space", t[t._0 = 48] = "_0", t[t._1 = 49] = "_1", t[t._2 = 50] = "_2", t[t._3 = 51] = "_3", t[t._4 = 52] = "_4", t[t._5 = 53] = "_5", t[t._6 = 54] = "_6", t[t._7 = 55] = "_7", t[t._8 = 56] = "_8", t[t._9 = 57] = "_9", t[t.a = 97] = "a", t[t.b = 98] = "b", t[t.c = 99] = "c", t[t.d = 100] = "d", t[t.e = 101] = "e", t[t.f = 102] = "f", t[t.g = 103] = "g", t[t.h = 104] = "h", t[t.i = 105] = "i", t[t.j = 106] = "j", t[t.k = 107] = "k", t[t.l = 108] = "l", t[t.m = 109] = "m", t[t.n = 110] = "n", t[t.o = 111] = "o", t[t.p = 112] = "p", t[t.q = 113] = "q", t[t.r = 114] = "r", t[t.s = 115] = "s", t[t.t = 116] = "t", t[t.u = 117] = "u", t[t.v = 118] = "v", t[t.w = 119] = "w", t[t.x = 120] = "x", t[t.y = 121] = "y", t[t.z = 122] = "z", t[t.A = 65] = "A", t[t.B = 66] = "B", t[t.C = 67] = "C", t[t.D = 68] = "D", t[t.E = 69] = "E", t[t.F = 70] = "F", t[t.G = 71] = "G", t[t.H = 72] = "H", t[t.I = 73] = "I", t[t.J = 74] = "J", t[t.K = 75] = "K", t[t.L = 76] = "L", t[t.M = 77] = "M", t[t.N = 78] = "N", t[t.O = 79] = "O", t[t.P = 80] = "P", t[t.Q = 81] = "Q", t[t.R = 82] = "R", t[t.S = 83] = "S", t[t.T = 84] = "T", t[t.U = 85] = "U", t[t.V = 86] = "V", t[t.W = 87] = "W", t[t.X = 88] = "X", t[t.Y = 89] = "Y", t[t.Z = 90] = "Z", t[t.asterisk = 42] = "asterisk", t[t.backslash = 92] = "backslash", t[t.closeBrace = 125] = "closeBrace", t[t.closeBracket = 93] = "closeBracket", t[t.colon = 58] = "colon", t[t.comma = 44] = "comma", t[t.dot = 46] = "dot", t[t.doubleQuote = 34] = "doubleQuote", t[t.minus = 45] = "minus", t[t.openBrace = 123] = "openBrace", t[t.openBracket = 91] = "openBracket", t[t.plus = 43] = "plus", t[t.slash = 47] = "slash", t[t.formFeed = 12] = "formFeed", t[t.tab = 9] = "tab";
    }(Q_ || (Q_ = {}));
    new Array(20).fill(0).map((t, e)=>" ".repeat(e));
    const M_ = 200;
    new Array(M_).fill(0).map((t, e)=>"\n" + " ".repeat(e)), new Array(M_).fill(0).map((t, e)=>"\r" + " ".repeat(e)), new Array(M_).fill(0).map((t, e)=>"\r\n" + " ".repeat(e)), new Array(M_).fill(0).map((t, e)=>"\n" + "\t".repeat(e)), new Array(M_).fill(0).map((t, e)=>"\r" + "\t".repeat(e)), new Array(M_).fill(0).map((t, e)=>"\r\n" + "\t".repeat(e));
    var O_;
    function F_(t, e, r = O_.DEFAULT) {
        const n = x_(t, !1), s = [];
        let i = 0;
        function o(t) {
            return t ? (e)=>0 === i && t(e, n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter()) : ()=>!0;
        }
        function a(t) {
            return t ? (e)=>0 === i && t(e, n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter(), ()=>s.slice()) : ()=>!0;
        }
        function u(t) {
            return t ? ()=>{
                if (i > 0) i++;
                else {
                    !1 === t(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter(), ()=>s.slice()) && (i = 1);
                }
            } : ()=>!0;
        }
        function c(t) {
            return t ? ()=>{
                i > 0 && i--, 0 === i && t(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter());
            } : ()=>!0;
        }
        const l = u(e.onObjectBegin), m = a(e.onObjectProperty), d = c(e.onObjectEnd), f = u(e.onArrayBegin), p = c(e.onArrayEnd), h = a(e.onLiteralValue), g = o(e.onSeparator), A = (y = e.onComment) ? ()=>0 === i && y(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter()) : ()=>!0, _ = o(e.onError);
        var y;
        const w = r && r.disallowComments, S = r && r.allowTrailingComma;
        function J() {
            for(;;){
                const t = n.scan();
                switch(n.getTokenError()){
                    case 4:
                        B(14);
                        break;
                    case 5:
                        B(15);
                        break;
                    case 3:
                        B(13);
                        break;
                    case 1:
                        w || B(11);
                        break;
                    case 2:
                        B(12);
                        break;
                    case 6:
                        B(16);
                }
                switch(t){
                    case 12:
                    case 13:
                        w ? B(10) : A();
                        break;
                    case 16:
                        B(1);
                        break;
                    case 15:
                    case 14:
                        break;
                    default:
                        return t;
                }
            }
        }
        function B(t, e = [], r = []) {
            if (_(t), e.length + r.length > 0) {
                let t = n.getToken();
                for(; 17 !== t;){
                    if (-1 !== e.indexOf(t)) {
                        J();
                        break;
                    }
                    if (-1 !== r.indexOf(t)) break;
                    t = J();
                }
            }
        }
        function E(t) {
            const e = n.getTokenValue();
            return t ? h(e) : (m(e), s.push(e)), J(), !0;
        }
        function I() {
            return 10 !== n.getToken() ? (B(3, [], [
                2,
                5
            ]), !1) : (E(!1), 6 === n.getToken() ? (g(":"), J(), C() || B(4, [], [
                2,
                5
            ])) : B(5, [], [
                2,
                5
            ]), s.pop(), !0);
        }
        function C() {
            switch(n.getToken()){
                case 3:
                    return function() {
                        f(), J();
                        let t = !0, e = !1;
                        for(; 4 !== n.getToken() && 17 !== n.getToken();){
                            if (5 === n.getToken()) {
                                if (e || B(4, [], []), g(","), J(), 4 === n.getToken() && S) break;
                            } else e && B(6, [], []);
                            t ? (s.push(0), t = !1) : s[s.length - 1]++, C() || B(4, [], [
                                4,
                                5
                            ]), e = !0;
                        }
                        return p(), t || s.pop(), 4 !== n.getToken() ? B(8, [
                            4
                        ], []) : J(), !0;
                    }();
                case 1:
                    return function() {
                        l(), J();
                        let t = !1;
                        for(; 2 !== n.getToken() && 17 !== n.getToken();){
                            if (5 === n.getToken()) {
                                if (t || B(4, [], []), g(","), J(), 2 === n.getToken() && S) break;
                            } else t && B(6, [], []);
                            I() || B(4, [], [
                                2,
                                5
                            ]), t = !0;
                        }
                        return d(), 2 !== n.getToken() ? B(7, [
                            2
                        ], []) : J(), !0;
                    }();
                case 10:
                    return E(!0);
                default:
                    return function() {
                        switch(n.getToken()){
                            case 11:
                                const t = n.getTokenValue();
                                let e = Number(t);
                                isNaN(e) && (B(2), e = 0), h(e);
                                break;
                            case 7:
                                h(null);
                                break;
                            case 8:
                                h(!0);
                                break;
                            case 9:
                                h(!1);
                                break;
                            default:
                                return !1;
                        }
                        return J(), !0;
                    }();
            }
        }
        return J(), 17 === n.getToken() ? !!r.allowEmptyContent || (B(4, [], []), !1) : C() ? (17 !== n.getToken() && B(9, [], []), !0) : (B(4, [], []), !1);
    }
    !function(t) {
        t.DEFAULT = {
            allowTrailingComma: !1
        };
    }(O_ || (O_ = {}));
    var L_, $_;
    !function(t) {
        t[t.None = 0] = "None", t[t.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", t[t.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", t[t.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", t[t.InvalidUnicode = 4] = "InvalidUnicode", t[t.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", t[t.InvalidCharacter = 6] = "InvalidCharacter";
    }(L_ || (L_ = {})), function(t) {
        t[t.OpenBraceToken = 1] = "OpenBraceToken", t[t.CloseBraceToken = 2] = "CloseBraceToken", t[t.OpenBracketToken = 3] = "OpenBracketToken", t[t.CloseBracketToken = 4] = "CloseBracketToken", t[t.CommaToken = 5] = "CommaToken", t[t.ColonToken = 6] = "ColonToken", t[t.NullKeyword = 7] = "NullKeyword", t[t.TrueKeyword = 8] = "TrueKeyword", t[t.FalseKeyword = 9] = "FalseKeyword", t[t.StringLiteral = 10] = "StringLiteral", t[t.NumericLiteral = 11] = "NumericLiteral", t[t.LineCommentTrivia = 12] = "LineCommentTrivia", t[t.BlockCommentTrivia = 13] = "BlockCommentTrivia", t[t.LineBreakTrivia = 14] = "LineBreakTrivia", t[t.Trivia = 15] = "Trivia", t[t.Unknown = 16] = "Unknown", t[t.EOF = 17] = "EOF";
    }($_ || ($_ = {}));
    const G_ = function(t, e = [], r = O_.DEFAULT) {
        let n = null, s = [];
        const i = [];
        function o(t) {
            Array.isArray(s) ? s.push(t) : null !== n && (s[n] = t);
        }
        const a = {
            onObjectBegin: ()=>{
                const t = {};
                o(t), i.push(s), s = t, n = null;
            },
            onObjectProperty: (t)=>{
                n = t;
            },
            onObjectEnd: ()=>{
                s = i.pop();
            },
            onArrayBegin: ()=>{
                const t = [];
                o(t), i.push(s), s = t, n = null;
            },
            onArrayEnd: ()=>{
                s = i.pop();
            },
            onLiteralValue: o,
            onError: (t, r, n)=>{
                e.push({
                    error: t,
                    offset: r,
                    length: n
                });
            }
        };
        return F_(t, a, r), s[0];
    };
    var H_;
    !function(t) {
        t[t.InvalidSymbol = 1] = "InvalidSymbol", t[t.InvalidNumberFormat = 2] = "InvalidNumberFormat", t[t.PropertyNameExpected = 3] = "PropertyNameExpected", t[t.ValueExpected = 4] = "ValueExpected", t[t.ColonExpected = 5] = "ColonExpected", t[t.CommaExpected = 6] = "CommaExpected", t[t.CloseBraceExpected = 7] = "CloseBraceExpected", t[t.CloseBracketExpected = 8] = "CloseBracketExpected", t[t.EndOfFileExpected = 9] = "EndOfFileExpected", t[t.InvalidCommentToken = 10] = "InvalidCommentToken", t[t.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", t[t.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", t[t.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", t[t.InvalidUnicode = 14] = "InvalidUnicode", t[t.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", t[t.InvalidCharacter = 16] = "InvalidCharacter";
    }(H_ || (H_ = {}));
    class K_ {
        constructor(){
            this.disposables = [], this.collection = o.languages.createDiagnosticCollection("cursor-environment-json"), this.disposables.push(this.collection), o.workspace.textDocuments.forEach((t)=>{
                this.isEnvironmentJson(t) && this.validateDocument(t);
            }), this.disposables.push(o.workspace.onDidOpenTextDocument((t)=>{
                this.isEnvironmentJson(t) && this.validateDocument(t);
            })), this.disposables.push(o.workspace.onDidChangeTextDocument((t)=>{
                const e = t.document;
                this.isEnvironmentJson(e) && this.validateDocument(e);
            })), this.disposables.push(o.workspace.onDidCloseTextDocument((t)=>{
                this.isEnvironmentJson(t) && this.collection.delete(t.uri);
            }));
        }
        dispose() {
            this.disposables.forEach((t)=>t.dispose());
        }
        isEnvironmentJson(t) {
            if ("json" !== t.languageId && "jsonc" !== t.languageId) return !1;
            return "environment.json" === k_.posix.basename(t.uri.path) && t.uri.path.includes("/.cursor/");
        }
        async validateDocument(t) {
            const e = [];
            let r;
            try {
                r = G_(t.getText());
            } catch  {
                return void this.collection.set(t.uri, e);
            }
            const n = r?.build, s = n?.dockerfile, i = n?.context ?? ".";
            if (s && "string" == typeof s) {
                const r = this.resolvePath(t.uri, i, s);
                try {
                    await o.workspace.fs.stat(r);
                } catch  {
                    const n = this.getDockerfileValueRange(t), s = new o.Diagnostic(n, `Referenced Dockerfile does not exist on disk: ${r.fsPath}`, o.DiagnosticSeverity.Error);
                    s.source = "cursor", e.push(s);
                }
            }
            this.collection.set(t.uri, e);
        }
        resolvePath(t, e, r) {
            const n = k_.posix.dirname(t.path), s = k_.posix.join(n, e, r);
            return t.with({
                path: s
            });
        }
        getDockerfileValueRange(t) {
            const e = t.getText(), r = /"dockerfile"\s*:\s*"([^\"]*)"/m.exec(e);
            if (r) {
                const e = r.index + r[0].indexOf(r[1]), n = e + r[1].length;
                return new o.Range(t.positionAt(e), t.positionAt(n));
            }
            return new o.Range(new o.Position(0, 0), new o.Position(0, 0));
        }
    }
    const V_ = 256e3;
    function z_(t, e) {
        return o.commands.registerCommand("cursor.internal.recordBrowserTelemEvent", async (r)=>{
            const n = await e(r.argsJson), s = r.snapshotYaml ? await e(function(t, e) {
                if (void 0 === t) return;
                return Buffer.byteLength(t, "utf8") <= e ? t : Buffer.from(t, "utf8").subarray(0, e).toString("utf8");
            }(r.snapshotYaml, V_) ?? "") : void 0, i = r.url ? await e(r.url) : void 0, o = r.title ? await e(r.title) : void 0, a = new lo({
                viewId: r.viewId,
                event: {
                    case: "toolAction",
                    value: new ho({
                        toolName: r.toolName,
                        argsJson: n,
                        success: r.success,
                        postSnapshotYaml: s || void 0,
                        postUrl: i,
                        postTitle: o,
                        source: go.MCP_TOOL
                    })
                }
            });
            t.recordEvent({
                case: "browserEvent",
                value: a
            });
        });
    }
    const W_ = [];
    let Y_;
    function j_(t) {
        u.init(), MA.init(), c.init(), t.isDevelopment && QA.init();
        const e = (0, a.createPrivateInferenceEnablementSource)({
            getEnablement: ()=>o.cursor.getPrivateInferenceEnablement()
        });
        W_.push(async ()=>e.dispose()), (0, a.installPrivateInferenceHttpGuard)({
            enablement: e,
            cursorBackendUrls: ()=>[
                    o.cursor.getCursorCreds()?.backendUrl
                ],
            log: u
        });
        const r = new KA({
            isDevelopment: t.isDevelopment
        });
        W_.push(async ()=>r.dispose());
        const n = "agentWorkspace" === o.cursor.glassWorkspaceRole, s = n ? new GA : new $A(t);
        s instanceof $A && (W_.push(async ()=>s.dispose()), s.signalAuthReadyToRenderer(), s.registerWithRenderer());
        const i = function(t, e) {
            if (t.isTrusted) return void e();
            let r;
            return r = t.onDidGrantWorkspaceTrust(()=>{
                r?.dispose(), e();
            }), r;
        }(o.workspace, ()=>{
            if (!n) {
                const t = new m;
                W_.push(async ()=>t.dispose());
            }
            const e = new C_(t, s);
            W_.push(async ()=>e.dispose());
            const r = new XA(t, e, s);
            W_.push(async ()=>r.dispose());
            const i = new e_(r);
            W_.push(async ()=>i.dispose());
            const o = new T_(i, t.extensionPath);
            W_.push(async ()=>o.dispose());
            const a = z_(i, (t)=>r.redact(t));
            W_.push(async ()=>a.dispose()), Y_ = new HA, W_.push(async ()=>Y_?.dispose());
            const u = new la(t);
            W_.push(async ()=>u.dispose());
            const c = new K_;
            W_.push(async ()=>c.dispose());
        });
        i && W_.push(async ()=>i.dispose());
    }
    async function X_() {
        for (const t of W_)await t();
    }
})();
var i = exports;
for(var o in s)i[o] = s[o];
s.__esModule && Object.defineProperty(i, "__esModule", {
    value: !0
});
