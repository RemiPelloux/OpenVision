import { Ey, mh, zb } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { Fv } from "./util_3.js";
var wbu;
export { wbu };
var __wakaru_cav_initialized = false;
export function cav() {
if (__wakaru_cav_initialized) return;
__wakaru_cav_initialized = true;
x(), Fv(), wbu = ()=>{
    const e = {
        string: {
            unit: "belgi",
            verb: "bo\u2018lishi kerak"
        },
        file: {
            unit: "bayt",
            verb: "bo\u2018lishi kerak"
        },
        array: {
            unit: "element",
            verb: "bo\u2018lishi kerak"
        },
        set: {
            unit: "element",
            verb: "bo\u2018lishi kerak"
        }
    };
    function t(r) {
        return e[r] ?? null;
    }
    const n = {
        regex: "kirish",
        email: "elektron pochta manzili",
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
        datetime: "ISO sana va vaqti",
        date: "ISO sana",
        time: "ISO vaqt",
        duration: "ISO davomiylik",
        ipv4: "IPv4 manzil",
        ipv6: "IPv6 manzil",
        mac: "MAC manzil",
        cidrv4: "IPv4 diapazon",
        cidrv6: "IPv6 diapazon",
        base64: "base64 kodlangan satr",
        base64url: "base64url kodlangan satr",
        json_string: "JSON satr",
        e164: "E.164 raqam",
        jwt: "JWT",
        template_literal: "kirish"
    }, i = {
        nan: "NaN",
        number: "raqam",
        array: "massiv"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Ey(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Noto\u2018g\u2018ri kirish: kutilgan instanceof ${r.expected}, qabul qilingan ${a}` : `Noto\u2018g\u2018ri kirish: kutilgan ${s}, qabul qilingan ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Noto\u2018g\u2018ri kirish: kutilgan ${zb(r.values[0])}` : `Noto\u2018g\u2018ri variant: quyidagilardan biri kutilgan ${mh(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = t(r.origin);
                    return o ? `Juda katta: kutilgan ${r.origin ?? "qiymat"} ${s}${r.maximum.toString()} ${o.unit} ${o.verb}` : `Juda katta: kutilgan ${r.origin ?? "qiymat"} ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = t(r.origin);
                    return o ? `Juda kichik: kutilgan ${r.origin} ${s}${r.minimum.toString()} ${o.unit} ${o.verb}` : `Juda kichik: kutilgan ${r.origin} ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `Noto\u2018g\u2018ri satr: "${s.prefix}" bilan boshlanishi kerak` : s.format === "ends_with" ? `Noto\u2018g\u2018ri satr: "${s.suffix}" bilan tugashi kerak` : s.format === "includes" ? `Noto\u2018g\u2018ri satr: "${s.includes}" ni o\u2018z ichiga olishi kerak` : s.format === "regex" ? `Noto\u2018g\u2018ri satr: ${s.pattern} shabloniga mos kelishi kerak` : `Noto\u2018g\u2018ri ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `Noto\u2018g\u2018ri raqam: ${r.divisor} ning karralisi bo\u2018lishi kerak`;
            case "unrecognized_keys":
                return `Noma\u2019lum kalit${r.keys.length > 1 ? "lar" : ""}: ${mh(r.keys, ", ")}`;
            case "invalid_key":
                return `${r.origin} dagi kalit noto\u2018g\u2018ri`;
            case "invalid_union":
                return "Noto\u2018g\u2018ri kirish";
            case "invalid_element":
                return `${r.origin} da noto\u2018g\u2018ri qiymat`;
            default:
                return "Noto\u2018g\u2018ri kirish";
        }
    };
};

}
