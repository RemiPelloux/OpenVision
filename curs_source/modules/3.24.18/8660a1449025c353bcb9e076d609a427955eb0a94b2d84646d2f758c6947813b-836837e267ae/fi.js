import { Qk, om, rk } from "./SZu.js";
import { E } from "./tslib.es6.js";
import { ky } from "./util.js";
var Dsd;
export { Dsd };
var __wakaru_O0y_initialized = false;
export function O0y() {
if (__wakaru_O0y_initialized) return;
__wakaru_O0y_initialized = true;
E(), ky(), Dsd = ()=>{
    const t = {
        string: {
            unit: "merkki\xE4",
            subject: "merkkijonon"
        },
        file: {
            unit: "tavua",
            subject: "tiedoston"
        },
        array: {
            unit: "alkiota",
            subject: "listan"
        },
        set: {
            unit: "alkiota",
            subject: "joukon"
        },
        number: {
            unit: "",
            subject: "luvun"
        },
        bigint: {
            unit: "",
            subject: "suuren kokonaisluvun"
        },
        int: {
            unit: "",
            subject: "kokonaisluvun"
        },
        date: {
            unit: "",
            subject: "p\xE4iv\xE4m\xE4\xE4r\xE4n"
        }
    };
    function e(r) {
        return t[r] ?? null;
    }
    const n = {
        regex: "s\xE4\xE4nn\xF6llinen lauseke",
        email: "s\xE4hk\xF6postiosoite",
        url: "URL-osoite",
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
        datetime: "ISO-aikaleima",
        date: "ISO-p\xE4iv\xE4m\xE4\xE4r\xE4",
        time: "ISO-aika",
        duration: "ISO-kesto",
        ipv4: "IPv4-osoite",
        ipv6: "IPv6-osoite",
        cidrv4: "IPv4-alue",
        cidrv6: "IPv6-alue",
        base64: "base64-koodattu merkkijono",
        base64url: "base64url-koodattu merkkijono",
        json_string: "JSON-merkkijono",
        e164: "E.164-luku",
        jwt: "JWT",
        template_literal: "templaattimerkkijono"
    }, i = {
        nan: "NaN"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Qk(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Virheellinen tyyppi: odotettiin instanceof ${r.expected}, oli ${a}` : `Virheellinen tyyppi: odotettiin ${s}, oli ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Virheellinen sy\xF6te: t\xE4ytyy olla ${rk(r.values[0])}` : `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${om(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = e(r.origin);
                    return o ? `Liian suuri: ${o.subject} t\xE4ytyy olla ${s}${r.maximum.toString()} ${o.unit}`.trim() : `Liian suuri: arvon t\xE4ytyy olla ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = e(r.origin);
                    return o ? `Liian pieni: ${o.subject} t\xE4ytyy olla ${s}${r.minimum.toString()} ${o.unit}`.trim() : `Liian pieni: arvon t\xE4ytyy olla ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `Virheellinen sy\xF6te: t\xE4ytyy alkaa "${s.prefix}"` : s.format === "ends_with" ? `Virheellinen sy\xF6te: t\xE4ytyy loppua "${s.suffix}"` : s.format === "includes" ? `Virheellinen sy\xF6te: t\xE4ytyy sis\xE4lt\xE4\xE4 "${s.includes}"` : s.format === "regex" ? `Virheellinen sy\xF6te: t\xE4ytyy vastata s\xE4\xE4nn\xF6llist\xE4 lauseketta ${s.pattern}` : `Virheellinen ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `Virheellinen luku: t\xE4ytyy olla luvun ${r.divisor} monikerta`;
            case "unrecognized_keys":
                return `${r.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${om(r.keys, ", ")}`;
            case "invalid_key":
                return "Virheellinen avain tietueessa";
            case "invalid_union":
                return "Virheellinen unioni";
            case "invalid_element":
                return "Virheellinen arvo joukossa";
            default:
                return "Virheellinen sy\xF6te";
        }
    };
};

}
