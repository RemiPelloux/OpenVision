import { Qk, om, rk } from "./SZu.js";
import { E } from "./tslib.es6.js";
import { ky } from "./util.js";
var vod;
export { vod };
var __wakaru_GCy_initialized = false;
export function GCy() {
if (__wakaru_GCy_initialized) return;
__wakaru_GCy_initialized = true;
E(), ky(), vod = ()=>{
    const t = {
        string: {
            unit: "k\xFD t\u1EF1",
            verb: "c\xF3"
        },
        file: {
            unit: "byte",
            verb: "c\xF3"
        },
        array: {
            unit: "ph\u1EA7n t\u1EED",
            verb: "c\xF3"
        },
        set: {
            unit: "ph\u1EA7n t\u1EED",
            verb: "c\xF3"
        }
    };
    function e(r) {
        return t[r] ?? null;
    }
    const n = {
        regex: "\u0111\u1EA7u v\xE0o",
        email: "\u0111\u1ECBa ch\u1EC9 email",
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
        datetime: "ng\xE0y gi\u1EDD ISO",
        date: "ng\xE0y ISO",
        time: "gi\u1EDD ISO",
        duration: "kho\u1EA3ng th\u1EDDi gian ISO",
        ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4",
        ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6",
        cidrv4: "d\u1EA3i IPv4",
        cidrv6: "d\u1EA3i IPv6",
        base64: "chu\u1ED7i m\xE3 h\xF3a base64",
        base64url: "chu\u1ED7i m\xE3 h\xF3a base64url",
        json_string: "chu\u1ED7i JSON",
        e164: "s\u1ED1 E.164",
        jwt: "JWT",
        template_literal: "\u0111\u1EA7u v\xE0o"
    }, i = {
        nan: "NaN",
        number: "s\u1ED1",
        array: "m\u1EA3ng"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Qk(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i instanceof ${r.expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${a}` : `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${s}, nh\u1EADn \u0111\u01B0\u1EE3c ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${rk(r.values[0])}` : `T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ${om(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = e(r.origin);
                    return o ? `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${r.origin ?? "gi\xE1 tr\u1ECB"} ${o.verb} ${s}${r.maximum.toString()} ${o.unit ?? "ph\u1EA7n t\u1EED"}` : `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${r.origin ?? "gi\xE1 tr\u1ECB"} ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = e(r.origin);
                    return o ? `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${r.origin} ${o.verb} ${s}${r.minimum.toString()} ${o.unit}` : `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${r.origin} ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "${s.prefix}"` : s.format === "ends_with" ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\xFAc b\u1EB1ng "${s.suffix}"` : s.format === "includes" ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "${s.includes}"` : s.format === "regex" ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu ${s.pattern}` : `${n[s.format] ?? r.format} kh\xF4ng h\u1EE3p l\u1EC7`;
                }
            case "not_multiple_of":
                return `S\u1ED1 kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\xE0 b\u1ED9i s\u1ED1 c\u1EE7a ${r.divisor}`;
            case "unrecognized_keys":
                return `Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ${om(r.keys, ", ")}`;
            case "invalid_key":
                return `Kh\xF3a kh\xF4ng h\u1EE3p l\u1EC7 trong ${r.origin}`;
            case "invalid_union":
                return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
            case "invalid_element":
                return `Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7 trong ${r.origin}`;
            default:
                return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
        }
    };
};

}
