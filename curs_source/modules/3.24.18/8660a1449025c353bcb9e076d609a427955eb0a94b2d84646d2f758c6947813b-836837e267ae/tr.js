import { Qk, om, rk } from "./SZu.js";
import { E } from "./tslib.es6.js";
import { ky } from "./util.js";
var dod;
export { dod };
var __wakaru_OCy_initialized = false;
export function OCy() {
if (__wakaru_OCy_initialized) return;
__wakaru_OCy_initialized = true;
E(), ky(), dod = ()=>{
    const t = {
        string: {
            unit: "karakter",
            verb: "olmal\u0131"
        },
        file: {
            unit: "bayt",
            verb: "olmal\u0131"
        },
        array: {
            unit: "\xF6\u011Fe",
            verb: "olmal\u0131"
        },
        set: {
            unit: "\xF6\u011Fe",
            verb: "olmal\u0131"
        }
    };
    function e(r) {
        return t[r] ?? null;
    }
    const n = {
        regex: "girdi",
        email: "e-posta adresi",
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
        datetime: "ISO tarih ve saat",
        date: "ISO tarih",
        time: "ISO saat",
        duration: "ISO s\xFCre",
        ipv4: "IPv4 adresi",
        ipv6: "IPv6 adresi",
        cidrv4: "IPv4 aral\u0131\u011F\u0131",
        cidrv6: "IPv6 aral\u0131\u011F\u0131",
        base64: "base64 ile \u015Fifrelenmi\u015F metin",
        base64url: "base64url ile \u015Fifrelenmi\u015F metin",
        json_string: "JSON dizesi",
        e164: "E.164 say\u0131s\u0131",
        jwt: "JWT",
        template_literal: "\u015Eablon dizesi"
    }, i = {
        nan: "NaN"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Qk(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Ge\xE7ersiz de\u011Fer: beklenen instanceof ${r.expected}, al\u0131nan ${a}` : `Ge\xE7ersiz de\u011Fer: beklenen ${s}, al\u0131nan ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Ge\xE7ersiz de\u011Fer: beklenen ${rk(r.values[0])}` : `Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ${om(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = e(r.origin);
                    return o ? `\xC7ok b\xFCy\xFCk: beklenen ${r.origin ?? "de\u011Fer"} ${s}${r.maximum.toString()} ${o.unit ?? "\xF6\u011Fe"}` : `\xC7ok b\xFCy\xFCk: beklenen ${r.origin ?? "de\u011Fer"} ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = e(r.origin);
                    return o ? `\xC7ok k\xFC\xE7\xFCk: beklenen ${r.origin} ${s}${r.minimum.toString()} ${o.unit}` : `\xC7ok k\xFC\xE7\xFCk: beklenen ${r.origin} ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `Ge\xE7ersiz metin: "${s.prefix}" ile ba\u015Flamal\u0131` : s.format === "ends_with" ? `Ge\xE7ersiz metin: "${s.suffix}" ile bitmeli` : s.format === "includes" ? `Ge\xE7ersiz metin: "${s.includes}" i\xE7ermeli` : s.format === "regex" ? `Ge\xE7ersiz metin: ${s.pattern} desenine uymal\u0131` : `Ge\xE7ersiz ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `Ge\xE7ersiz say\u0131: ${r.divisor} ile tam b\xF6l\xFCnebilmeli`;
            case "unrecognized_keys":
                return `Tan\u0131nmayan anahtar${r.keys.length > 1 ? "lar" : ""}: ${om(r.keys, ", ")}`;
            case "invalid_key":
                return `${r.origin} i\xE7inde ge\xE7ersiz anahtar`;
            case "invalid_union":
                return "Ge\xE7ersiz de\u011Fer";
            case "invalid_element":
                return `${r.origin} i\xE7inde ge\xE7ersiz de\u011Fer`;
            default:
                return "Ge\xE7ersiz de\u011Fer";
        }
    };
};

}
