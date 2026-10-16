import { Qk, om, rk } from "./SZu.js";
import { E } from "./tslib.es6.js";
import { ky } from "./util.js";
var Esd;
export { Esd };
var __wakaru_x0y_initialized = false;
export function x0y() {
if (__wakaru_x0y_initialized) return;
__wakaru_x0y_initialized = true;
E(), ky(), Esd = ()=>{
    const t = {
        string: {
            unit: "Zeichen",
            verb: "zu haben"
        },
        file: {
            unit: "Bytes",
            verb: "zu haben"
        },
        array: {
            unit: "Elemente",
            verb: "zu haben"
        },
        set: {
            unit: "Elemente",
            verb: "zu haben"
        }
    };
    function e(r) {
        return t[r] ?? null;
    }
    const n = {
        regex: "Eingabe",
        email: "E-Mail-Adresse",
        url: "URL",
        emoji: "Emoji",
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
        datetime: "ISO-Datum und -Uhrzeit",
        date: "ISO-Datum",
        time: "ISO-Uhrzeit",
        duration: "ISO-Dauer",
        ipv4: "IPv4-Adresse",
        ipv6: "IPv6-Adresse",
        cidrv4: "IPv4-Bereich",
        cidrv6: "IPv6-Bereich",
        base64: "Base64-codierter String",
        base64url: "Base64-URL-codierter String",
        json_string: "JSON-String",
        e164: "E.164-Nummer",
        jwt: "JWT",
        template_literal: "Eingabe"
    }, i = {
        nan: "NaN",
        number: "Zahl",
        array: "Array"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Qk(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Ung\xFCltige Eingabe: erwartet instanceof ${r.expected}, erhalten ${a}` : `Ung\xFCltige Eingabe: erwartet ${s}, erhalten ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Ung\xFCltige Eingabe: erwartet ${rk(r.values[0])}` : `Ung\xFCltige Option: erwartet eine von ${om(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = e(r.origin);
                    return o ? `Zu gro\xDF: erwartet, dass ${r.origin ?? "Wert"} ${s}${r.maximum.toString()} ${o.unit ?? "Elemente"} hat` : `Zu gro\xDF: erwartet, dass ${r.origin ?? "Wert"} ${s}${r.maximum.toString()} ist`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = e(r.origin);
                    return o ? `Zu klein: erwartet, dass ${r.origin} ${s}${r.minimum.toString()} ${o.unit} hat` : `Zu klein: erwartet, dass ${r.origin} ${s}${r.minimum.toString()} ist`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `Ung\xFCltiger String: muss mit "${s.prefix}" beginnen` : s.format === "ends_with" ? `Ung\xFCltiger String: muss mit "${s.suffix}" enden` : s.format === "includes" ? `Ung\xFCltiger String: muss "${s.includes}" enthalten` : s.format === "regex" ? `Ung\xFCltiger String: muss dem Muster ${s.pattern} entsprechen` : `Ung\xFCltig: ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `Ung\xFCltige Zahl: muss ein Vielfaches von ${r.divisor} sein`;
            case "unrecognized_keys":
                return `${r.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${om(r.keys, ", ")}`;
            case "invalid_key":
                return `Ung\xFCltiger Schl\xFCssel in ${r.origin}`;
            case "invalid_union":
                return "Ung\xFCltige Eingabe";
            case "invalid_element":
                return `Ung\xFCltiger Wert in ${r.origin}`;
            default:
                return "Ung\xFCltige Eingabe";
        }
    };
};

}
