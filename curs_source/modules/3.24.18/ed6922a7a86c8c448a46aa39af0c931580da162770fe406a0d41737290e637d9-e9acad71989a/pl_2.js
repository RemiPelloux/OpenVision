import { Ey, mh, zb } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { Fv } from "./util_3.js";
var ubu;
export { ubu };
var __wakaru_Wov_initialized = false;
export function Wov() {
if (__wakaru_Wov_initialized) return;
__wakaru_Wov_initialized = true;
x(), Fv(), ubu = ()=>{
    const e = {
        string: {
            unit: "znak\xF3w",
            verb: "mie\u0107"
        },
        file: {
            unit: "bajt\xF3w",
            verb: "mie\u0107"
        },
        array: {
            unit: "element\xF3w",
            verb: "mie\u0107"
        },
        set: {
            unit: "element\xF3w",
            verb: "mie\u0107"
        }
    };
    function t(r) {
        return e[r] ?? null;
    }
    const n = {
        regex: "wyra\u017Cenie",
        email: "adres email",
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
        datetime: "data i godzina w formacie ISO",
        date: "data w formacie ISO",
        time: "godzina w formacie ISO",
        duration: "czas trwania ISO",
        ipv4: "adres IPv4",
        ipv6: "adres IPv6",
        cidrv4: "zakres IPv4",
        cidrv6: "zakres IPv6",
        base64: "ci\u0105g znak\xF3w zakodowany w formacie base64",
        base64url: "ci\u0105g znak\xF3w zakodowany w formacie base64url",
        json_string: "ci\u0105g znak\xF3w w formacie JSON",
        e164: "liczba E.164",
        jwt: "JWT",
        template_literal: "wej\u015Bcie"
    }, i = {
        nan: "NaN",
        number: "liczba",
        array: "tablica"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Ey(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano instanceof ${r.expected}, otrzymano ${a}` : `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${s}, otrzymano ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${zb(r.values[0])}` : `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${mh(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = t(r.origin);
                    return o ? `Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ${r.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${s}${r.maximum.toString()} ${o.unit ?? "element\xF3w"}` : `Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ${r.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = t(r.origin);
                    return o ? `Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce ${r.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${s}${r.minimum.toString()} ${o.unit ?? "element\xF3w"}` : `Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce ${r.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zaczyna\u0107 si\u0119 od "${s.prefix}"` : s.format === "ends_with" ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi ko\u0144czy\u0107 si\u0119 na "${s.suffix}"` : s.format === "includes" ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zawiera\u0107 "${s.includes}"` : s.format === "regex" ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi odpowiada\u0107 wzorcowi ${s.pattern}` : `Nieprawid\u0142ow(y/a/e) ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 ${r.divisor}`;
            case "unrecognized_keys":
                return `Nierozpoznane klucze${r.keys.length > 1 ? "s" : ""}: ${mh(r.keys, ", ")}`;
            case "invalid_key":
                return `Nieprawid\u0142owy klucz w ${r.origin}`;
            case "invalid_union":
                return "Nieprawid\u0142owe dane wej\u015Bciowe";
            case "invalid_element":
                return `Nieprawid\u0142owa warto\u015B\u0107 w ${r.origin}`;
            default:
                return "Nieprawid\u0142owe dane wej\u015Bciowe";
        }
    };
};

}
