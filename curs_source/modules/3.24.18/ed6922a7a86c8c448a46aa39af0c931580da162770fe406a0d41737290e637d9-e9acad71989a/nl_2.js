import { Ey, mh, zb } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { Fv } from "./util_3.js";
var obu;
export { obu };
var __wakaru_Lov_initialized = false;
export function Lov() {
if (__wakaru_Lov_initialized) return;
__wakaru_Lov_initialized = true;
x(), Fv(), obu = ()=>{
    const e = {
        string: {
            unit: "tekens",
            verb: "heeft"
        },
        file: {
            unit: "bytes",
            verb: "heeft"
        },
        array: {
            unit: "elementen",
            verb: "heeft"
        },
        set: {
            unit: "elementen",
            verb: "heeft"
        }
    };
    function t(r) {
        return e[r] ?? null;
    }
    const n = {
        regex: "invoer",
        email: "emailadres",
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
        datetime: "ISO datum en tijd",
        date: "ISO datum",
        time: "ISO tijd",
        duration: "ISO duur",
        ipv4: "IPv4-adres",
        ipv6: "IPv6-adres",
        cidrv4: "IPv4-bereik",
        cidrv6: "IPv6-bereik",
        base64: "base64-gecodeerde tekst",
        base64url: "base64 URL-gecodeerde tekst",
        json_string: "JSON string",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "invoer"
    }, i = {
        nan: "NaN",
        number: "getal"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Ey(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Ongeldige invoer: verwacht instanceof ${r.expected}, ontving ${a}` : `Ongeldige invoer: verwacht ${s}, ontving ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Ongeldige invoer: verwacht ${zb(r.values[0])}` : `Ongeldige optie: verwacht \xE9\xE9n van ${mh(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = t(r.origin), a = r.origin === "date" ? "laat" : r.origin === "string" ? "lang" : "groot";
                    return o ? `Te ${a}: verwacht dat ${r.origin ?? "waarde"} ${s}${r.maximum.toString()} ${o.unit ?? "elementen"} ${o.verb}` : `Te ${a}: verwacht dat ${r.origin ?? "waarde"} ${s}${r.maximum.toString()} is`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = t(r.origin), a = r.origin === "date" ? "vroeg" : r.origin === "string" ? "kort" : "klein";
                    return o ? `Te ${a}: verwacht dat ${r.origin} ${s}${r.minimum.toString()} ${o.unit} ${o.verb}` : `Te ${a}: verwacht dat ${r.origin} ${s}${r.minimum.toString()} is`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `Ongeldige tekst: moet met "${s.prefix}" beginnen` : s.format === "ends_with" ? `Ongeldige tekst: moet op "${s.suffix}" eindigen` : s.format === "includes" ? `Ongeldige tekst: moet "${s.includes}" bevatten` : s.format === "regex" ? `Ongeldige tekst: moet overeenkomen met patroon ${s.pattern}` : `Ongeldig: ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `Ongeldig getal: moet een veelvoud van ${r.divisor} zijn`;
            case "unrecognized_keys":
                return `Onbekende key${r.keys.length > 1 ? "s" : ""}: ${mh(r.keys, ", ")}`;
            case "invalid_key":
                return `Ongeldige key in ${r.origin}`;
            case "invalid_union":
                return "Ongeldige invoer";
            case "invalid_element":
                return `Ongeldige waarde in ${r.origin}`;
            default:
                return "Ongeldige invoer";
        }
    };
};

}
