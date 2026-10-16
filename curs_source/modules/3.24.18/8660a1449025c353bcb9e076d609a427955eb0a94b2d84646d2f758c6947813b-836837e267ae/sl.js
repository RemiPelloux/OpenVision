import { Qk, om, rk } from "./SZu.js";
import { E } from "./tslib.es6.js";
import { ky } from "./util.js";
var aod;
export { aod };
var __wakaru_xCy_initialized = false;
export function xCy() {
if (__wakaru_xCy_initialized) return;
__wakaru_xCy_initialized = true;
E(), ky(), aod = ()=>{
    const t = {
        string: {
            unit: "znakov",
            verb: "imeti"
        },
        file: {
            unit: "bajtov",
            verb: "imeti"
        },
        array: {
            unit: "elementov",
            verb: "imeti"
        },
        set: {
            unit: "elementov",
            verb: "imeti"
        }
    };
    function e(r) {
        return t[r] ?? null;
    }
    const n = {
        regex: "vnos",
        email: "e-po\u0161tni naslov",
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
        datetime: "ISO datum in \u010Das",
        date: "ISO datum",
        time: "ISO \u010Das",
        duration: "ISO trajanje",
        ipv4: "IPv4 naslov",
        ipv6: "IPv6 naslov",
        cidrv4: "obseg IPv4",
        cidrv6: "obseg IPv6",
        base64: "base64 kodiran niz",
        base64url: "base64url kodiran niz",
        json_string: "JSON niz",
        e164: "E.164 \u0161tevilka",
        jwt: "JWT",
        template_literal: "vnos"
    }, i = {
        nan: "NaN",
        number: "\u0161tevilo",
        array: "tabela"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Qk(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Neveljaven vnos: pri\u010Dakovano instanceof ${r.expected}, prejeto ${a}` : `Neveljaven vnos: pri\u010Dakovano ${s}, prejeto ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Neveljaven vnos: pri\u010Dakovano ${rk(r.values[0])}` : `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${om(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = e(r.origin);
                    return o ? `Preveliko: pri\u010Dakovano, da bo ${r.origin ?? "vrednost"} imelo ${s}${r.maximum.toString()} ${o.unit ?? "elementov"}` : `Preveliko: pri\u010Dakovano, da bo ${r.origin ?? "vrednost"} ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = e(r.origin);
                    return o ? `Premajhno: pri\u010Dakovano, da bo ${r.origin} imelo ${s}${r.minimum.toString()} ${o.unit}` : `Premajhno: pri\u010Dakovano, da bo ${r.origin} ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `Neveljaven niz: mora se za\u010Deti z "${s.prefix}"` : s.format === "ends_with" ? `Neveljaven niz: mora se kon\u010Dati z "${s.suffix}"` : s.format === "includes" ? `Neveljaven niz: mora vsebovati "${s.includes}"` : s.format === "regex" ? `Neveljaven niz: mora ustrezati vzorcu ${s.pattern}` : `Neveljaven ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik ${r.divisor}`;
            case "unrecognized_keys":
                return `Neprepoznan${r.keys.length > 1 ? "i klju\u010Di" : " klju\u010D"}: ${om(r.keys, ", ")}`;
            case "invalid_key":
                return `Neveljaven klju\u010D v ${r.origin}`;
            case "invalid_union":
                return "Neveljaven vnos";
            case "invalid_element":
                return `Neveljavna vrednost v ${r.origin}`;
            default:
                return "Neveljaven vnos";
        }
    };
};

}
