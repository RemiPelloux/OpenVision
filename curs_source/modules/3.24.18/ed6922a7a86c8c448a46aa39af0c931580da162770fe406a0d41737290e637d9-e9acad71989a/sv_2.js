import { Ey, mh, zb } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { Fv } from "./util_3.js";
var gbu;
export { gbu };
var __wakaru_Xov_initialized = false;
export function Xov() {
if (__wakaru_Xov_initialized) return;
__wakaru_Xov_initialized = true;
x(), Fv(), gbu = ()=>{
    const e = {
        string: {
            unit: "tecken",
            verb: "att ha"
        },
        file: {
            unit: "bytes",
            verb: "att ha"
        },
        array: {
            unit: "objekt",
            verb: "att inneh\xE5lla"
        },
        set: {
            unit: "objekt",
            verb: "att inneh\xE5lla"
        }
    };
    function t(r) {
        return e[r] ?? null;
    }
    const n = {
        regex: "regulj\xE4rt uttryck",
        email: "e-postadress",
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
        datetime: "ISO-datum och tid",
        date: "ISO-datum",
        time: "ISO-tid",
        duration: "ISO-varaktighet",
        ipv4: "IPv4-intervall",
        ipv6: "IPv6-intervall",
        cidrv4: "IPv4-spektrum",
        cidrv6: "IPv6-spektrum",
        base64: "base64-kodad str\xE4ng",
        base64url: "base64url-kodad str\xE4ng",
        json_string: "JSON-str\xE4ng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "mall-literal"
    }, i = {
        nan: "NaN",
        number: "antal",
        array: "lista"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Ey(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Ogiltig inmatning: f\xF6rv\xE4ntat instanceof ${r.expected}, fick ${a}` : `Ogiltig inmatning: f\xF6rv\xE4ntat ${s}, fick ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Ogiltig inmatning: f\xF6rv\xE4ntat ${zb(r.values[0])}` : `Ogiltigt val: f\xF6rv\xE4ntade en av ${mh(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = t(r.origin);
                    return o ? `F\xF6r stor(t): f\xF6rv\xE4ntade ${r.origin ?? "v\xE4rdet"} att ha ${s}${r.maximum.toString()} ${o.unit ?? "element"}` : `F\xF6r stor(t): f\xF6rv\xE4ntat ${r.origin ?? "v\xE4rdet"} att ha ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = t(r.origin);
                    return o ? `F\xF6r lite(t): f\xF6rv\xE4ntade ${r.origin ?? "v\xE4rdet"} att ha ${s}${r.minimum.toString()} ${o.unit}` : `F\xF6r lite(t): f\xF6rv\xE4ntade ${r.origin ?? "v\xE4rdet"} att ha ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `Ogiltig str\xE4ng: m\xE5ste b\xF6rja med "${s.prefix}"` : s.format === "ends_with" ? `Ogiltig str\xE4ng: m\xE5ste sluta med "${s.suffix}"` : s.format === "includes" ? `Ogiltig str\xE4ng: m\xE5ste inneh\xE5lla "${s.includes}"` : s.format === "regex" ? `Ogiltig str\xE4ng: m\xE5ste matcha m\xF6nstret "${s.pattern}"` : `Ogiltig(t) ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `Ogiltigt tal: m\xE5ste vara en multipel av ${r.divisor}`;
            case "unrecognized_keys":
                return `${r.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel"}: ${mh(r.keys, ", ")}`;
            case "invalid_key":
                return `Ogiltig nyckel i ${r.origin ?? "v\xE4rdet"}`;
            case "invalid_union":
                return "Ogiltig input";
            case "invalid_element":
                return `Ogiltigt v\xE4rde i ${r.origin ?? "v\xE4rdet"}`;
            default:
                return "Ogiltig input";
        }
    };
};

}
