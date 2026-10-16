import { Ey, mh, zb } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { Fv } from "./util_3.js";
var E_u;
export { E_u };
var __wakaru_Osv_initialized = false;
export function Osv() {
if (__wakaru_Osv_initialized) return;
__wakaru_Osv_initialized = true;
x(), Fv(), E_u = ()=>{
    const e = {
        string: {
            unit: "simvol",
            verb: "olmal\u0131d\u0131r"
        },
        file: {
            unit: "bayt",
            verb: "olmal\u0131d\u0131r"
        },
        array: {
            unit: "element",
            verb: "olmal\u0131d\u0131r"
        },
        set: {
            unit: "element",
            verb: "olmal\u0131d\u0131r"
        }
    };
    function t(r) {
        return e[r] ?? null;
    }
    const n = {
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
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded string",
        base64url: "base64url-encoded string",
        json_string: "JSON string",
        e164: "E.164 number",
        jwt: "JWT",
        template_literal: "input"
    }, i = {
        nan: "NaN"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Ey(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n instanceof ${r.expected}, daxil olan ${a}` : `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${s}, daxil olan ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${zb(r.values[0])}` : `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${mh(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = t(r.origin);
                    return o ? `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${r.origin ?? "d\u0259y\u0259r"} ${s}${r.maximum.toString()} ${o.unit ?? "element"}` : `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${r.origin ?? "d\u0259y\u0259r"} ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = t(r.origin);
                    return o ? `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${r.origin} ${s}${r.minimum.toString()} ${o.unit}` : `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${r.origin} ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `Yanl\u0131\u015F m\u0259tn: "${s.prefix}" il\u0259 ba\u015Flamal\u0131d\u0131r` : s.format === "ends_with" ? `Yanl\u0131\u015F m\u0259tn: "${s.suffix}" il\u0259 bitm\u0259lidir` : s.format === "includes" ? `Yanl\u0131\u015F m\u0259tn: "${s.includes}" daxil olmal\u0131d\u0131r` : s.format === "regex" ? `Yanl\u0131\u015F m\u0259tn: ${s.pattern} \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r` : `Yanl\u0131\u015F ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `Yanl\u0131\u015F \u0259d\u0259d: ${r.divisor} il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r`;
            case "unrecognized_keys":
                return `Tan\u0131nmayan a\xE7ar${r.keys.length > 1 ? "lar" : ""}: ${mh(r.keys, ", ")}`;
            case "invalid_key":
                return `${r.origin} daxilind\u0259 yanl\u0131\u015F a\xE7ar`;
            case "invalid_union":
                return "Yanl\u0131\u015F d\u0259y\u0259r";
            case "invalid_element":
                return `${r.origin} daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r`;
            default:
                return "Yanl\u0131\u015F d\u0259y\u0259r";
        }
    };
};

}
