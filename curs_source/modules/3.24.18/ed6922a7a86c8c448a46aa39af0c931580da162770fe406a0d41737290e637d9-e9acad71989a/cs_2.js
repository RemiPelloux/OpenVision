import { Ey, mh, zb } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { Fv } from "./util_3.js";
var D_u;
export { D_u };
var __wakaru_Vsv_initialized = false;
export function Vsv() {
if (__wakaru_Vsv_initialized) return;
__wakaru_Vsv_initialized = true;
x(), Fv(), D_u = ()=>{
    const e = {
        string: {
            unit: "znak\u016F",
            verb: "m\xEDt"
        },
        file: {
            unit: "bajt\u016F",
            verb: "m\xEDt"
        },
        array: {
            unit: "prvk\u016F",
            verb: "m\xEDt"
        },
        set: {
            unit: "prvk\u016F",
            verb: "m\xEDt"
        }
    };
    function t(r) {
        return e[r] ?? null;
    }
    const n = {
        regex: "regul\xE1rn\xED v\xFDraz",
        email: "e-mailov\xE1 adresa",
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
        datetime: "datum a \u010Das ve form\xE1tu ISO",
        date: "datum ve form\xE1tu ISO",
        time: "\u010Das ve form\xE1tu ISO",
        duration: "doba trv\xE1n\xED ISO",
        ipv4: "IPv4 adresa",
        ipv6: "IPv6 adresa",
        cidrv4: "rozsah IPv4",
        cidrv6: "rozsah IPv6",
        base64: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64",
        base64url: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64url",
        json_string: "\u0159et\u011Bzec ve form\xE1tu JSON",
        e164: "\u010D\xEDslo E.164",
        jwt: "JWT",
        template_literal: "vstup"
    }, i = {
        nan: "NaN",
        number: "\u010D\xEDslo",
        string: "\u0159et\u011Bzec",
        function: "funkce",
        array: "pole"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Ey(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no instanceof ${r.expected}, obdr\u017Eeno ${a}` : `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${s}, obdr\u017Eeno ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${zb(r.values[0])}` : `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${mh(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = t(r.origin);
                    return o ? `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${r.origin ?? "hodnota"} mus\xED m\xEDt ${s}${r.maximum.toString()} ${o.unit ?? "prvk\u016F"}` : `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${r.origin ?? "hodnota"} mus\xED b\xFDt ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = t(r.origin);
                    return o ? `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${r.origin ?? "hodnota"} mus\xED m\xEDt ${s}${r.minimum.toString()} ${o.unit ?? "prvk\u016F"}` : `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${r.origin ?? "hodnota"} mus\xED b\xFDt ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "${s.prefix}"` : s.format === "ends_with" ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "${s.suffix}"` : s.format === "includes" ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "${s.includes}"` : s.format === "regex" ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ${s.pattern}` : `Neplatn\xFD form\xE1t ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ${r.divisor}`;
            case "unrecognized_keys":
                return `Nezn\xE1m\xE9 kl\xED\u010De: ${mh(r.keys, ", ")}`;
            case "invalid_key":
                return `Neplatn\xFD kl\xED\u010D v ${r.origin}`;
            case "invalid_union":
                return "Neplatn\xFD vstup";
            case "invalid_element":
                return `Neplatn\xE1 hodnota v ${r.origin}`;
            default:
                return "Neplatn\xFD vstup";
        }
    };
};

}
