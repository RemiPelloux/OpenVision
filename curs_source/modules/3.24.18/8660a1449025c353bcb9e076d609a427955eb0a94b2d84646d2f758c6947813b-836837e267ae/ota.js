import { Qk, om, rk } from "./SZu.js";
import { E } from "./tslib.es6.js";
import { ky } from "./util.js";
var tod;
export { tod };
var __wakaru__Cy_initialized = false;
export function _Cy() {
if (__wakaru__Cy_initialized) return;
__wakaru__Cy_initialized = true;
E(), ky(), tod = ()=>{
    const t = {
        string: {
            unit: "harf",
            verb: "olmal\u0131d\u0131r"
        },
        file: {
            unit: "bayt",
            verb: "olmal\u0131d\u0131r"
        },
        array: {
            unit: "unsur",
            verb: "olmal\u0131d\u0131r"
        },
        set: {
            unit: "unsur",
            verb: "olmal\u0131d\u0131r"
        }
    };
    function e(r) {
        return t[r] ?? null;
    }
    const n = {
        regex: "giren",
        email: "epostag\xE2h",
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
        datetime: "ISO heng\xE2m\u0131",
        date: "ISO tarihi",
        time: "ISO zaman\u0131",
        duration: "ISO m\xFCddeti",
        ipv4: "IPv4 ni\u015F\xE2n\u0131",
        ipv6: "IPv6 ni\u015F\xE2n\u0131",
        cidrv4: "IPv4 menzili",
        cidrv6: "IPv6 menzili",
        base64: "base64-\u015Fifreli metin",
        base64url: "base64url-\u015Fifreli metin",
        json_string: "JSON metin",
        e164: "E.164 say\u0131s\u0131",
        jwt: "JWT",
        template_literal: "giren"
    }, i = {
        nan: "NaN",
        number: "numara",
        array: "saf",
        null: "gayb"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Qk(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `F\xE2sit giren: umulan instanceof ${r.expected}, al\u0131nan ${a}` : `F\xE2sit giren: umulan ${s}, al\u0131nan ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `F\xE2sit giren: umulan ${rk(r.values[0])}` : `F\xE2sit tercih: m\xFBteberler ${om(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = e(r.origin);
                    return o ? `Fazla b\xFCy\xFCk: ${r.origin ?? "value"}, ${s}${r.maximum.toString()} ${o.unit ?? "elements"} sahip olmal\u0131yd\u0131.` : `Fazla b\xFCy\xFCk: ${r.origin ?? "value"}, ${s}${r.maximum.toString()} olmal\u0131yd\u0131.`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = e(r.origin);
                    return o ? `Fazla k\xFC\xE7\xFCk: ${r.origin}, ${s}${r.minimum.toString()} ${o.unit} sahip olmal\u0131yd\u0131.` : `Fazla k\xFC\xE7\xFCk: ${r.origin}, ${s}${r.minimum.toString()} olmal\u0131yd\u0131.`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `F\xE2sit metin: "${s.prefix}" ile ba\u015Flamal\u0131.` : s.format === "ends_with" ? `F\xE2sit metin: "${s.suffix}" ile bitmeli.` : s.format === "includes" ? `F\xE2sit metin: "${s.includes}" ihtiv\xE2 etmeli.` : s.format === "regex" ? `F\xE2sit metin: ${s.pattern} nak\u015F\u0131na uymal\u0131.` : `F\xE2sit ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `F\xE2sit say\u0131: ${r.divisor} kat\u0131 olmal\u0131yd\u0131.`;
            case "unrecognized_keys":
                return `Tan\u0131nmayan anahtar ${r.keys.length > 1 ? "s" : ""}: ${om(r.keys, ", ")}`;
            case "invalid_key":
                return `${r.origin} i\xE7in tan\u0131nmayan anahtar var.`;
            case "invalid_union":
                return "Giren tan\u0131namad\u0131.";
            case "invalid_element":
                return `${r.origin} i\xE7in tan\u0131nmayan k\u0131ymet var.`;
            default:
                return "K\u0131ymet tan\u0131namad\u0131.";
        }
    };
};

}
