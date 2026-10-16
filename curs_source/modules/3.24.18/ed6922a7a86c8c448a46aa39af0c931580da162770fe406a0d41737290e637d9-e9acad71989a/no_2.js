import { Ey, mh, zb } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { Fv } from "./util_3.js";
var abu;
export { abu };
var __wakaru_Oov_initialized = false;
export function Oov() {
if (__wakaru_Oov_initialized) return;
__wakaru_Oov_initialized = true;
x(), Fv(), abu = ()=>{
    const e = {
        string: {
            unit: "tegn",
            verb: "\xE5 ha"
        },
        file: {
            unit: "bytes",
            verb: "\xE5 ha"
        },
        array: {
            unit: "elementer",
            verb: "\xE5 inneholde"
        },
        set: {
            unit: "elementer",
            verb: "\xE5 inneholde"
        }
    };
    function t(r) {
        return e[r] ?? null;
    }
    const n = {
        regex: "input",
        email: "e-postadresse",
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
        datetime: "ISO dato- og klokkeslett",
        date: "ISO-dato",
        time: "ISO-klokkeslett",
        duration: "ISO-varighet",
        ipv4: "IPv4-omr\xE5de",
        ipv6: "IPv6-omr\xE5de",
        cidrv4: "IPv4-spekter",
        cidrv6: "IPv6-spekter",
        base64: "base64-enkodet streng",
        base64url: "base64url-enkodet streng",
        json_string: "JSON-streng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "input"
    }, i = {
        nan: "NaN",
        number: "tall",
        array: "liste"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Ey(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Ugyldig input: forventet instanceof ${r.expected}, fikk ${a}` : `Ugyldig input: forventet ${s}, fikk ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Ugyldig verdi: forventet ${zb(r.values[0])}` : `Ugyldig valg: forventet en av ${mh(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = t(r.origin);
                    return o ? `For stor(t): forventet ${r.origin ?? "value"} til \xE5 ha ${s}${r.maximum.toString()} ${o.unit ?? "elementer"}` : `For stor(t): forventet ${r.origin ?? "value"} til \xE5 ha ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = t(r.origin);
                    return o ? `For lite(n): forventet ${r.origin} til \xE5 ha ${s}${r.minimum.toString()} ${o.unit}` : `For lite(n): forventet ${r.origin} til \xE5 ha ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `Ugyldig streng: m\xE5 starte med "${s.prefix}"` : s.format === "ends_with" ? `Ugyldig streng: m\xE5 ende med "${s.suffix}"` : s.format === "includes" ? `Ugyldig streng: m\xE5 inneholde "${s.includes}"` : s.format === "regex" ? `Ugyldig streng: m\xE5 matche m\xF8nsteret ${s.pattern}` : `Ugyldig ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `Ugyldig tall: m\xE5 v\xE6re et multiplum av ${r.divisor}`;
            case "unrecognized_keys":
                return `${r.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${mh(r.keys, ", ")}`;
            case "invalid_key":
                return `Ugyldig n\xF8kkel i ${r.origin}`;
            case "invalid_union":
                return "Ugyldig input";
            case "invalid_element":
                return `Ugyldig verdi i ${r.origin}`;
            default:
                return "Ugyldig input";
        }
    };
};

}
