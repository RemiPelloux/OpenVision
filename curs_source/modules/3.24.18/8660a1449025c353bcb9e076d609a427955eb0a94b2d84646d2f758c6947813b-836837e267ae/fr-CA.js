import { Qk, om, rk } from "./SZu.js";
import { E } from "./tslib.es6.js";
import { ky } from "./util.js";
var Lsd;
export { Lsd };
var __wakaru_j0y_initialized = false;
export function j0y() {
if (__wakaru_j0y_initialized) return;
__wakaru_j0y_initialized = true;
E(), ky(), Lsd = ()=>{
    const t = {
        string: {
            unit: "caract\xE8res",
            verb: "avoir"
        },
        file: {
            unit: "octets",
            verb: "avoir"
        },
        array: {
            unit: "\xE9l\xE9ments",
            verb: "avoir"
        },
        set: {
            unit: "\xE9l\xE9ments",
            verb: "avoir"
        }
    };
    function e(r) {
        return t[r] ?? null;
    }
    const n = {
        regex: "entr\xE9e",
        email: "adresse courriel",
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
        datetime: "date-heure ISO",
        date: "date ISO",
        time: "heure ISO",
        duration: "dur\xE9e ISO",
        ipv4: "adresse IPv4",
        ipv6: "adresse IPv6",
        cidrv4: "plage IPv4",
        cidrv6: "plage IPv6",
        base64: "cha\xEEne encod\xE9e en base64",
        base64url: "cha\xEEne encod\xE9e en base64url",
        json_string: "cha\xEEne JSON",
        e164: "num\xE9ro E.164",
        jwt: "JWT",
        template_literal: "entr\xE9e"
    }, i = {
        nan: "NaN"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Qk(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Entr\xE9e invalide : attendu instanceof ${r.expected}, re\xE7u ${a}` : `Entr\xE9e invalide : attendu ${s}, re\xE7u ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Entr\xE9e invalide : attendu ${rk(r.values[0])}` : `Option invalide : attendu l'une des valeurs suivantes ${om(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "\u2264" : "<", o = e(r.origin);
                    return o ? `Trop grand : attendu que ${r.origin ?? "la valeur"} ait ${s}${r.maximum.toString()} ${o.unit}` : `Trop grand : attendu que ${r.origin ?? "la valeur"} soit ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? "\u2265" : ">", o = e(r.origin);
                    return o ? `Trop petit : attendu que ${r.origin} ait ${s}${r.minimum.toString()} ${o.unit}` : `Trop petit : attendu que ${r.origin} soit ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `Cha\xEEne invalide : doit commencer par "${s.prefix}"` : s.format === "ends_with" ? `Cha\xEEne invalide : doit se terminer par "${s.suffix}"` : s.format === "includes" ? `Cha\xEEne invalide : doit inclure "${s.includes}"` : s.format === "regex" ? `Cha\xEEne invalide : doit correspondre au motif ${s.pattern}` : `${n[s.format] ?? r.format} invalide`;
                }
            case "not_multiple_of":
                return `Nombre invalide : doit \xEAtre un multiple de ${r.divisor}`;
            case "unrecognized_keys":
                return `Cl\xE9${r.keys.length > 1 ? "s" : ""} non reconnue${r.keys.length > 1 ? "s" : ""} : ${om(r.keys, ", ")}`;
            case "invalid_key":
                return `Cl\xE9 invalide dans ${r.origin}`;
            case "invalid_union":
                return "Entr\xE9e invalide";
            case "invalid_element":
                return `Valeur invalide dans ${r.origin}`;
            default:
                return "Entr\xE9e invalide";
        }
    };
};

}
