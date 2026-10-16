import { Qk, om, rk } from "./SZu.js";
import { E } from "./tslib.es6.js";
import { ky } from "./util.js";
var Tsd;
export { Tsd };
var __wakaru_E0y_initialized = false;
export function E0y() {
if (__wakaru_E0y_initialized) return;
__wakaru_E0y_initialized = true;
E(), ky(), Tsd = ()=>{
    const t = {
        string: {
            unit: "tegn",
            verb: "havde"
        },
        file: {
            unit: "bytes",
            verb: "havde"
        },
        array: {
            unit: "elementer",
            verb: "indeholdt"
        },
        set: {
            unit: "elementer",
            verb: "indeholdt"
        }
    };
    function e(r) {
        return t[r] ?? null;
    }
    const n = {
        regex: "input",
        email: "e-mailadresse",
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
        datetime: "ISO dato- og klokkesl\xE6t",
        date: "ISO-dato",
        time: "ISO-klokkesl\xE6t",
        duration: "ISO-varighed",
        ipv4: "IPv4-omr\xE5de",
        ipv6: "IPv6-omr\xE5de",
        cidrv4: "IPv4-spektrum",
        cidrv6: "IPv6-spektrum",
        base64: "base64-kodet streng",
        base64url: "base64url-kodet streng",
        json_string: "JSON-streng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "input"
    }, i = {
        nan: "NaN",
        string: "streng",
        number: "tal",
        boolean: "boolean",
        array: "liste",
        object: "objekt",
        set: "s\xE6t",
        file: "fil"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Qk(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Ugyldigt input: forventede instanceof ${r.expected}, fik ${a}` : `Ugyldigt input: forventede ${s}, fik ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Ugyldig v\xE6rdi: forventede ${rk(r.values[0])}` : `Ugyldigt valg: forventede en af f\xF8lgende ${om(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = e(r.origin), a = i[r.origin] ?? r.origin;
                    return o ? `For stor: forventede ${a ?? "value"} ${o.verb} ${s} ${r.maximum.toString()} ${o.unit ?? "elementer"}` : `For stor: forventede ${a ?? "value"} havde ${s} ${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = e(r.origin), a = i[r.origin] ?? r.origin;
                    return o ? `For lille: forventede ${a} ${o.verb} ${s} ${r.minimum.toString()} ${o.unit}` : `For lille: forventede ${a} havde ${s} ${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `Ugyldig streng: skal starte med "${s.prefix}"` : s.format === "ends_with" ? `Ugyldig streng: skal ende med "${s.suffix}"` : s.format === "includes" ? `Ugyldig streng: skal indeholde "${s.includes}"` : s.format === "regex" ? `Ugyldig streng: skal matche m\xF8nsteret ${s.pattern}` : `Ugyldig ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `Ugyldigt tal: skal v\xE6re deleligt med ${r.divisor}`;
            case "unrecognized_keys":
                return `${r.keys.length > 1 ? "Ukendte n\xF8gler" : "Ukendt n\xF8gle"}: ${om(r.keys, ", ")}`;
            case "invalid_key":
                return `Ugyldig n\xF8gle i ${r.origin}`;
            case "invalid_union":
                return "Ugyldigt input: matcher ingen af de tilladte typer";
            case "invalid_element":
                return `Ugyldig v\xE6rdi i ${r.origin}`;
            default:
                return "Ugyldigt input";
        }
    };
};

}
