import { Ey, mh, nbu, zb } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { Fv } from "./util_3.js";
var k8t, ibu;
export { ibu, k8t };
var __wakaru_Iov_initialized = false;
export function Iov() {
if (__wakaru_Iov_initialized) return;
__wakaru_Iov_initialized = true;
x(), Fv(), k8t = (e)=>e.charAt(0).toUpperCase() + e.slice(1), ibu = ()=>{
    const e = {
        string: {
            unit: {
                one: "simbolis",
                few: "simboliai",
                many: "simboli\u0173"
            },
            verb: {
                smaller: {
                    inclusive: "turi b\u016Bti ne ilgesn\u0117 kaip",
                    notInclusive: "turi b\u016Bti trumpesn\u0117 kaip"
                },
                bigger: {
                    inclusive: "turi b\u016Bti ne trumpesn\u0117 kaip",
                    notInclusive: "turi b\u016Bti ilgesn\u0117 kaip"
                }
            }
        },
        file: {
            unit: {
                one: "baitas",
                few: "baitai",
                many: "bait\u0173"
            },
            verb: {
                smaller: {
                    inclusive: "turi b\u016Bti ne didesnis kaip",
                    notInclusive: "turi b\u016Bti ma\u017Eesnis kaip"
                },
                bigger: {
                    inclusive: "turi b\u016Bti ne ma\u017Eesnis kaip",
                    notInclusive: "turi b\u016Bti didesnis kaip"
                }
            }
        },
        array: {
            unit: {
                one: "element\u0105",
                few: "elementus",
                many: "element\u0173"
            },
            verb: {
                smaller: {
                    inclusive: "turi tur\u0117ti ne daugiau kaip",
                    notInclusive: "turi tur\u0117ti ma\u017Eiau kaip"
                },
                bigger: {
                    inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
                    notInclusive: "turi tur\u0117ti daugiau kaip"
                }
            }
        },
        set: {
            unit: {
                one: "element\u0105",
                few: "elementus",
                many: "element\u0173"
            },
            verb: {
                smaller: {
                    inclusive: "turi tur\u0117ti ne daugiau kaip",
                    notInclusive: "turi tur\u0117ti ma\u017Eiau kaip"
                },
                bigger: {
                    inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
                    notInclusive: "turi tur\u0117ti daugiau kaip"
                }
            }
        }
    };
    function t(r, s, o, a) {
        const c = e[r] ?? null;
        return c === null ? c : {
            unit: c.unit[s],
            verb: c.verb[a][o ? "inclusive" : "notInclusive"]
        };
    }
    const n = {
        regex: "\u012Fvestis",
        email: "el. pa\u0161to adresas",
        url: "URL",
        emoji: "jaustukas",
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
        datetime: "ISO data ir laikas",
        date: "ISO data",
        time: "ISO laikas",
        duration: "ISO trukm\u0117",
        ipv4: "IPv4 adresas",
        ipv6: "IPv6 adresas",
        cidrv4: "IPv4 tinklo prefiksas (CIDR)",
        cidrv6: "IPv6 tinklo prefiksas (CIDR)",
        base64: "base64 u\u017Ekoduota eilut\u0117",
        base64url: "base64url u\u017Ekoduota eilut\u0117",
        json_string: "JSON eilut\u0117",
        e164: "E.164 numeris",
        jwt: "JWT",
        template_literal: "\u012Fvestis"
    }, i = {
        nan: "NaN",
        number: "skai\u010Dius",
        bigint: "sveikasis skai\u010Dius",
        string: "eilut\u0117",
        boolean: "login\u0117 reik\u0161m\u0117",
        undefined: "neapibr\u0117\u017Eta reik\u0161m\u0117",
        function: "funkcija",
        symbol: "simbolis",
        array: "masyvas",
        object: "objektas",
        null: "nulin\u0117 reik\u0161m\u0117"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Ey(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Gautas tipas ${a}, o tik\u0117tasi - instanceof ${r.expected}` : `Gautas tipas ${a}, o tik\u0117tasi - ${s}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Privalo b\u016Bti ${zb(r.values[0])}` : `Privalo b\u016Bti vienas i\u0161 ${mh(r.values, "|")} pasirinkim\u0173`;
            case "too_big":
                {
                    const s = i[r.origin] ?? r.origin, o = t(r.origin, nbu(Number(r.maximum)), r.inclusive ?? !1, "smaller");
                    if (o?.verb) return `${k8t(s ?? r.origin ?? "reik\u0161m\u0117")} ${o.verb} ${r.maximum.toString()} ${o.unit ?? "element\u0173"}`;
                    const a = r.inclusive ? "ne didesnis kaip" : "ma\u017Eesnis kaip";
                    return `${k8t(s ?? r.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${a} ${r.maximum.toString()} ${o?.unit}`;
                }
            case "too_small":
                {
                    const s = i[r.origin] ?? r.origin, o = t(r.origin, nbu(Number(r.minimum)), r.inclusive ?? !1, "bigger");
                    if (o?.verb) return `${k8t(s ?? r.origin ?? "reik\u0161m\u0117")} ${o.verb} ${r.minimum.toString()} ${o.unit ?? "element\u0173"}`;
                    const a = r.inclusive ? "ne ma\u017Eesnis kaip" : "didesnis kaip";
                    return `${k8t(s ?? r.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${a} ${r.minimum.toString()} ${o?.unit}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `Eilut\u0117 privalo prasid\u0117ti "${s.prefix}"` : s.format === "ends_with" ? `Eilut\u0117 privalo pasibaigti "${s.suffix}"` : s.format === "includes" ? `Eilut\u0117 privalo \u012Ftraukti "${s.includes}"` : s.format === "regex" ? `Eilut\u0117 privalo atitikti ${s.pattern}` : `Neteisingas ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `Skai\u010Dius privalo b\u016Bti ${r.divisor} kartotinis.`;
            case "unrecognized_keys":
                return `Neatpa\u017Eint${r.keys.length > 1 ? "i" : "as"} rakt${r.keys.length > 1 ? "ai" : "as"}: ${mh(r.keys, ", ")}`;
            case "invalid_key":
                return "Rastas klaidingas raktas";
            case "invalid_union":
                return "Klaidinga \u012Fvestis";
            case "invalid_element":
                {
                    const s = i[r.origin] ?? r.origin;
                    return `${k8t(s ?? r.origin ?? "reik\u0161m\u0117")} turi klaiding\u0105 \u012Fvest\u012F`;
                }
            default:
                return "Klaidinga \u012Fvestis";
        }
    };
};

}
