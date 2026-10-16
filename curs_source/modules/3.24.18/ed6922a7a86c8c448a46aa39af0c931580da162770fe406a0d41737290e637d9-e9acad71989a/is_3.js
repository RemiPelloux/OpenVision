import { Ey, mh, zb } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { Fv } from "./util_3.js";
var K_u;
export { K_u };
var __wakaru_fov_initialized = false;
export function fov() {
if (__wakaru_fov_initialized) return;
__wakaru_fov_initialized = true;
x(), Fv(), K_u = ()=>{
    const e = {
        string: {
            unit: "stafi",
            verb: "a\xF0 hafa"
        },
        file: {
            unit: "b\xE6ti",
            verb: "a\xF0 hafa"
        },
        array: {
            unit: "hluti",
            verb: "a\xF0 hafa"
        },
        set: {
            unit: "hluti",
            verb: "a\xF0 hafa"
        }
    };
    function t(r) {
        return e[r] ?? null;
    }
    const n = {
        regex: "gildi",
        email: "netfang",
        url: "vefsl\xF3\xF0",
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
        datetime: "ISO dagsetning og t\xEDmi",
        date: "ISO dagsetning",
        time: "ISO t\xEDmi",
        duration: "ISO t\xEDmalengd",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded strengur",
        base64url: "base64url-encoded strengur",
        json_string: "JSON strengur",
        e164: "E.164 t\xF6lugildi",
        jwt: "JWT",
        template_literal: "gildi"
    }, i = {
        nan: "NaN",
        number: "n\xFAmer",
        array: "fylki"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Ey(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Rangt gildi: \xDE\xFA sl\xF3st inn ${a} \xFEar sem \xE1 a\xF0 vera instanceof ${r.expected}` : `Rangt gildi: \xDE\xFA sl\xF3st inn ${a} \xFEar sem \xE1 a\xF0 vera ${s}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Rangt gildi: gert r\xE1\xF0 fyrir ${zb(r.values[0])}` : `\xD3gilt val: m\xE1 vera eitt af eftirfarandi ${mh(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = t(r.origin);
                    return o ? `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${r.origin ?? "gildi"} hafi ${s}${r.maximum.toString()} ${o.unit ?? "hluti"}` : `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${r.origin ?? "gildi"} s\xE9 ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = t(r.origin);
                    return o ? `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${r.origin} hafi ${s}${r.minimum.toString()} ${o.unit}` : `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${r.origin} s\xE9 ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `\xD3gildur strengur: ver\xF0ur a\xF0 byrja \xE1 "${s.prefix}"` : s.format === "ends_with" ? `\xD3gildur strengur: ver\xF0ur a\xF0 enda \xE1 "${s.suffix}"` : s.format === "includes" ? `\xD3gildur strengur: ver\xF0ur a\xF0 innihalda "${s.includes}"` : s.format === "regex" ? `\xD3gildur strengur: ver\xF0ur a\xF0 fylgja mynstri ${s.pattern}` : `Rangt ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `R\xF6ng tala: ver\xF0ur a\xF0 vera margfeldi af ${r.divisor}`;
            case "unrecognized_keys":
                return `\xD3\xFEekkt ${r.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${mh(r.keys, ", ")}`;
            case "invalid_key":
                return `Rangur lykill \xED ${r.origin}`;
            case "invalid_union":
                return "Rangt gildi";
            case "invalid_element":
                return `Rangt gildi \xED ${r.origin}`;
            default:
                return "Rangt gildi";
        }
    };
};

}
