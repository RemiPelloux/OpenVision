import { Ey, mh, zb } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { Fv } from "./util_3.js";
var F_u;
export { F_u };
var __wakaru_Xsv_initialized = false;
export function Xsv() {
if (__wakaru_Xsv_initialized) return;
__wakaru_Xsv_initialized = true;
x(), Fv(), F_u = ()=>{
    const e = {
        string: {
            unit: "karaktrojn",
            verb: "havi"
        },
        file: {
            unit: "bajtojn",
            verb: "havi"
        },
        array: {
            unit: "elementojn",
            verb: "havi"
        },
        set: {
            unit: "elementojn",
            verb: "havi"
        }
    };
    function t(r) {
        return e[r] ?? null;
    }
    const n = {
        regex: "enigo",
        email: "retadreso",
        url: "URL",
        emoji: "emo\u011Dio",
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
        datetime: "ISO-datotempo",
        date: "ISO-dato",
        time: "ISO-tempo",
        duration: "ISO-da\u016Dro",
        ipv4: "IPv4-adreso",
        ipv6: "IPv6-adreso",
        cidrv4: "IPv4-rango",
        cidrv6: "IPv6-rango",
        base64: "64-ume kodita karaktraro",
        base64url: "URL-64-ume kodita karaktraro",
        json_string: "JSON-karaktraro",
        e164: "E.164-nombro",
        jwt: "JWT",
        template_literal: "enigo"
    }, i = {
        nan: "NaN",
        number: "nombro",
        array: "tabelo",
        null: "senvalora"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Ey(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Nevalida enigo: atendi\u011Dis instanceof ${r.expected}, ricevi\u011Dis ${a}` : `Nevalida enigo: atendi\u011Dis ${s}, ricevi\u011Dis ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Nevalida enigo: atendi\u011Dis ${zb(r.values[0])}` : `Nevalida opcio: atendi\u011Dis unu el ${mh(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = t(r.origin);
                    return o ? `Tro granda: atendi\u011Dis ke ${r.origin ?? "valoro"} havu ${s}${r.maximum.toString()} ${o.unit ?? "elementojn"}` : `Tro granda: atendi\u011Dis ke ${r.origin ?? "valoro"} havu ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = t(r.origin);
                    return o ? `Tro malgranda: atendi\u011Dis ke ${r.origin} havu ${s}${r.minimum.toString()} ${o.unit}` : `Tro malgranda: atendi\u011Dis ke ${r.origin} estu ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `Nevalida karaktraro: devas komenci\u011Di per "${s.prefix}"` : s.format === "ends_with" ? `Nevalida karaktraro: devas fini\u011Di per "${s.suffix}"` : s.format === "includes" ? `Nevalida karaktraro: devas inkluzivi "${s.includes}"` : s.format === "regex" ? `Nevalida karaktraro: devas kongrui kun la modelo ${s.pattern}` : `Nevalida ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `Nevalida nombro: devas esti oblo de ${r.divisor}`;
            case "unrecognized_keys":
                return `Nekonata${r.keys.length > 1 ? "j" : ""} \u015Dlosilo${r.keys.length > 1 ? "j" : ""}: ${mh(r.keys, ", ")}`;
            case "invalid_key":
                return `Nevalida \u015Dlosilo en ${r.origin}`;
            case "invalid_union":
                return "Nevalida enigo";
            case "invalid_element":
                return `Nevalida valoro en ${r.origin}`;
            default:
                return "Nevalida enigo";
        }
    };
};

}
