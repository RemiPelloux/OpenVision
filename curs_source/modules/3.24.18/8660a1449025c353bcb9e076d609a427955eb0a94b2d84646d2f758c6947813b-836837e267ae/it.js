import { Qk, om, rk } from "./SZu.js";
import { E } from "./tslib.es6.js";
import { ky } from "./util.js";
var Hsd;
export { Hsd };
var __wakaru_Q0y_initialized = false;
export function Q0y() {
if (__wakaru_Q0y_initialized) return;
__wakaru_Q0y_initialized = true;
E(), ky(), Hsd = ()=>{
    const t = {
        string: {
            unit: "caratteri",
            verb: "avere"
        },
        file: {
            unit: "byte",
            verb: "avere"
        },
        array: {
            unit: "elementi",
            verb: "avere"
        },
        set: {
            unit: "elementi",
            verb: "avere"
        }
    };
    function e(r) {
        return t[r] ?? null;
    }
    const n = {
        regex: "input",
        email: "indirizzo email",
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
        datetime: "data e ora ISO",
        date: "data ISO",
        time: "ora ISO",
        duration: "durata ISO",
        ipv4: "indirizzo IPv4",
        ipv6: "indirizzo IPv6",
        cidrv4: "intervallo IPv4",
        cidrv6: "intervallo IPv6",
        base64: "stringa codificata in base64",
        base64url: "URL codificata in base64",
        json_string: "stringa JSON",
        e164: "numero E.164",
        jwt: "JWT",
        template_literal: "input"
    }, i = {
        nan: "NaN",
        number: "numero",
        array: "vettore"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Qk(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Input non valido: atteso instanceof ${r.expected}, ricevuto ${a}` : `Input non valido: atteso ${s}, ricevuto ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Input non valido: atteso ${rk(r.values[0])}` : `Opzione non valida: atteso uno tra ${om(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = e(r.origin);
                    return o ? `Troppo grande: ${r.origin ?? "valore"} deve avere ${s}${r.maximum.toString()} ${o.unit ?? "elementi"}` : `Troppo grande: ${r.origin ?? "valore"} deve essere ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = e(r.origin);
                    return o ? `Troppo piccolo: ${r.origin} deve avere ${s}${r.minimum.toString()} ${o.unit}` : `Troppo piccolo: ${r.origin} deve essere ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `Stringa non valida: deve iniziare con "${s.prefix}"` : s.format === "ends_with" ? `Stringa non valida: deve terminare con "${s.suffix}"` : s.format === "includes" ? `Stringa non valida: deve includere "${s.includes}"` : s.format === "regex" ? `Stringa non valida: deve corrispondere al pattern ${s.pattern}` : `Invalid ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `Numero non valido: deve essere un multiplo di ${r.divisor}`;
            case "unrecognized_keys":
                return `Chiav${r.keys.length > 1 ? "i" : "e"} non riconosciut${r.keys.length > 1 ? "e" : "a"}: ${om(r.keys, ", ")}`;
            case "invalid_key":
                return `Chiave non valida in ${r.origin}`;
            case "invalid_union":
                return "Input non valido";
            case "invalid_element":
                return `Valore non valido in ${r.origin}`;
            default:
                return "Input non valido";
        }
    };
};

}
