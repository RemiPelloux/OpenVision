import { Qk, om, rk } from "./SZu.js";
import { E } from "./tslib.es6.js";
import { ky } from "./util.js";
var Fsd;
export { Fsd };
var __wakaru_G0y_initialized = false;
export function G0y() {
if (__wakaru_G0y_initialized) return;
__wakaru_G0y_initialized = true;
E(), ky(), Fsd = ()=>{
    const t = {
        string: {
            unit: "karakter",
            verb: "legyen"
        },
        file: {
            unit: "byte",
            verb: "legyen"
        },
        array: {
            unit: "elem",
            verb: "legyen"
        },
        set: {
            unit: "elem",
            verb: "legyen"
        }
    };
    function e(r) {
        return t[r] ?? null;
    }
    const n = {
        regex: "bemenet",
        email: "email c\xEDm",
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
        datetime: "ISO id\u0151b\xE9lyeg",
        date: "ISO d\xE1tum",
        time: "ISO id\u0151",
        duration: "ISO id\u0151intervallum",
        ipv4: "IPv4 c\xEDm",
        ipv6: "IPv6 c\xEDm",
        cidrv4: "IPv4 tartom\xE1ny",
        cidrv6: "IPv6 tartom\xE1ny",
        base64: "base64-k\xF3dolt string",
        base64url: "base64url-k\xF3dolt string",
        json_string: "JSON string",
        e164: "E.164 sz\xE1m",
        jwt: "JWT",
        template_literal: "bemenet"
    }, i = {
        nan: "NaN",
        number: "sz\xE1m",
        array: "t\xF6mb"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Qk(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k instanceof ${r.expected}, a kapott \xE9rt\xE9k ${a}` : `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${s}, a kapott \xE9rt\xE9k ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${rk(r.values[0])}` : `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${om(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = e(r.origin);
                    return o ? `T\xFAl nagy: ${r.origin ?? "\xE9rt\xE9k"} m\xE9rete t\xFAl nagy ${s}${r.maximum.toString()} ${o.unit ?? "elem"}` : `T\xFAl nagy: a bemeneti \xE9rt\xE9k ${r.origin ?? "\xE9rt\xE9k"} t\xFAl nagy: ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = e(r.origin);
                    return o ? `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${r.origin} m\xE9rete t\xFAl kicsi ${s}${r.minimum.toString()} ${o.unit}` : `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${r.origin} t\xFAl kicsi ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `\xC9rv\xE9nytelen string: "${s.prefix}" \xE9rt\xE9kkel kell kezd\u0151dnie` : s.format === "ends_with" ? `\xC9rv\xE9nytelen string: "${s.suffix}" \xE9rt\xE9kkel kell v\xE9gz\u0151dnie` : s.format === "includes" ? `\xC9rv\xE9nytelen string: "${s.includes}" \xE9rt\xE9ket kell tartalmaznia` : s.format === "regex" ? `\xC9rv\xE9nytelen string: ${s.pattern} mint\xE1nak kell megfelelnie` : `\xC9rv\xE9nytelen ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `\xC9rv\xE9nytelen sz\xE1m: ${r.divisor} t\xF6bbsz\xF6r\xF6s\xE9nek kell lennie`;
            case "unrecognized_keys":
                return `Ismeretlen kulcs${r.keys.length > 1 ? "s" : ""}: ${om(r.keys, ", ")}`;
            case "invalid_key":
                return `\xC9rv\xE9nytelen kulcs ${r.origin}`;
            case "invalid_union":
                return "\xC9rv\xE9nytelen bemenet";
            case "invalid_element":
                return `\xC9rv\xE9nytelen \xE9rt\xE9k: ${r.origin}`;
            default:
                return "\xC9rv\xE9nytelen bemenet";
        }
    };
};

}
