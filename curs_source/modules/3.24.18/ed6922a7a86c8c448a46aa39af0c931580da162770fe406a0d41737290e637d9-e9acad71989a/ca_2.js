import { Ey, mh, zb } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { Fv } from "./util_3.js";
var R_u;
export { R_u };
var __wakaru_Wsv_initialized = false;
export function Wsv() {
if (__wakaru_Wsv_initialized) return;
__wakaru_Wsv_initialized = true;
x(), Fv(), R_u = ()=>{
    const e = {
        string: {
            unit: "car\xE0cters",
            verb: "contenir"
        },
        file: {
            unit: "bytes",
            verb: "contenir"
        },
        array: {
            unit: "elements",
            verb: "contenir"
        },
        set: {
            unit: "elements",
            verb: "contenir"
        }
    };
    function t(r) {
        return e[r] ?? null;
    }
    const n = {
        regex: "entrada",
        email: "adre\xE7a electr\xF2nica",
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
        datetime: "data i hora ISO",
        date: "data ISO",
        time: "hora ISO",
        duration: "durada ISO",
        ipv4: "adre\xE7a IPv4",
        ipv6: "adre\xE7a IPv6",
        cidrv4: "rang IPv4",
        cidrv6: "rang IPv6",
        base64: "cadena codificada en base64",
        base64url: "cadena codificada en base64url",
        json_string: "cadena JSON",
        e164: "n\xFAmero E.164",
        jwt: "JWT",
        template_literal: "entrada"
    }, i = {
        nan: "NaN"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Ey(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Tipus inv\xE0lid: s'esperava instanceof ${r.expected}, s'ha rebut ${a}` : `Tipus inv\xE0lid: s'esperava ${s}, s'ha rebut ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Valor inv\xE0lid: s'esperava ${zb(r.values[0])}` : `Opci\xF3 inv\xE0lida: s'esperava una de ${mh(r.values, " o ")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "com a m\xE0xim" : "menys de", o = t(r.origin);
                    return o ? `Massa gran: s'esperava que ${r.origin ?? "el valor"} contingu\xE9s ${s} ${r.maximum.toString()} ${o.unit ?? "elements"}` : `Massa gran: s'esperava que ${r.origin ?? "el valor"} fos ${s} ${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? "com a m\xEDnim" : "m\xE9s de", o = t(r.origin);
                    return o ? `Massa petit: s'esperava que ${r.origin} contingu\xE9s ${s} ${r.minimum.toString()} ${o.unit}` : `Massa petit: s'esperava que ${r.origin} fos ${s} ${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `Format inv\xE0lid: ha de comen\xE7ar amb "${s.prefix}"` : s.format === "ends_with" ? `Format inv\xE0lid: ha d'acabar amb "${s.suffix}"` : s.format === "includes" ? `Format inv\xE0lid: ha d'incloure "${s.includes}"` : s.format === "regex" ? `Format inv\xE0lid: ha de coincidir amb el patr\xF3 ${s.pattern}` : `Format inv\xE0lid per a ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ${r.divisor}`;
            case "unrecognized_keys":
                return `Clau${r.keys.length > 1 ? "s" : ""} no reconeguda${r.keys.length > 1 ? "s" : ""}: ${mh(r.keys, ", ")}`;
            case "invalid_key":
                return `Clau inv\xE0lida a ${r.origin}`;
            case "invalid_union":
                return "Entrada inv\xE0lida";
            case "invalid_element":
                return `Element inv\xE0lid a ${r.origin}`;
            default:
                return "Entrada inv\xE0lida";
        }
    };
};

}
