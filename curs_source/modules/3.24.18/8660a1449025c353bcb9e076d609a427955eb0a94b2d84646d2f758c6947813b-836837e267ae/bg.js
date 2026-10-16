import { Qk, om, rk } from "./SZu.js";
import { E } from "./tslib.es6.js";
import { ky } from "./util.js";
var ksd;
export { ksd };
var __wakaru_y0y_initialized = false;
export function y0y() {
if (__wakaru_y0y_initialized) return;
__wakaru_y0y_initialized = true;
E(), ky(), ksd = ()=>{
    const t = {
        string: {
            unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
            verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430"
        },
        file: {
            unit: "\u0431\u0430\u0439\u0442\u0430",
            verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430"
        },
        array: {
            unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
            verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430"
        },
        set: {
            unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
            verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430"
        }
    };
    function e(r) {
        return t[r] ?? null;
    }
    const n = {
        regex: "\u0432\u0445\u043E\u0434",
        email: "\u0438\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441",
        url: "URL",
        emoji: "\u0435\u043C\u043E\u0434\u0436\u0438",
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
        datetime: "ISO \u0432\u0440\u0435\u043C\u0435",
        date: "ISO \u0434\u0430\u0442\u0430",
        time: "ISO \u0432\u0440\u0435\u043C\u0435",
        duration: "ISO \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442",
        ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
        ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
        cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
        cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
        base64: "base64-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
        base64url: "base64url-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
        json_string: "JSON \u043D\u0438\u0437",
        e164: "E.164 \u043D\u043E\u043C\u0435\u0440",
        jwt: "JWT",
        template_literal: "\u0432\u0445\u043E\u0434"
    }, i = {
        nan: "NaN",
        number: "\u0447\u0438\u0441\u043B\u043E",
        array: "\u043C\u0430\u0441\u0438\u0432"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Qk(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D instanceof ${r.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${a}` : `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${s}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${rk(r.values[0])}` : `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u043E\u043F\u0446\u0438\u044F: \u043E\u0447\u0430\u043A\u0432\u0430\u043D\u043E \u0435\u0434\u043D\u043E \u043E\u0442 ${om(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = e(r.origin);
                    return o ? `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${r.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${s}${r.maximum.toString()} ${o.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430"}` : `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${r.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0431\u044A\u0434\u0435 ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = e(r.origin);
                    return o ? `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${r.origin} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${s}${r.minimum.toString()} ${o.unit}` : `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${r.origin} \u0434\u0430 \u0431\u044A\u0434\u0435 ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    if (s.format === "starts_with") return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u0432\u0430 \u0441 "${s.prefix}"`;
                    if (s.format === "ends_with") return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u0432\u044A\u0440\u0448\u0432\u0430 \u0441 "${s.suffix}"`;
                    if (s.format === "includes") return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0432\u0430 "${s.includes}"`;
                    if (s.format === "regex") return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0432\u043F\u0430\u0434\u0430 \u0441 ${s.pattern}`;
                    let o = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D";
                    return s.format === "emoji" && (o = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"), s.format === "datetime" && (o = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"), s.format === "date" && (o = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430"), s.format === "time" && (o = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"), s.format === "duration" && (o = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430"), `${o} ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E \u0447\u0438\u0441\u043B\u043E: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043A\u0440\u0430\u0442\u043D\u043E \u043D\u0430 ${r.divisor}`;
            case "unrecognized_keys":
                return `\u041D\u0435\u0440\u0430\u0437\u043F\u043E\u0437\u043D\u0430\u0442${r.keys.length > 1 ? "\u0438" : ""} \u043A\u043B\u044E\u0447${r.keys.length > 1 ? "\u043E\u0432\u0435" : ""}: ${om(r.keys, ", ")}`;
            case "invalid_key":
                return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043A\u043B\u044E\u0447 \u0432 ${r.origin}`;
            case "invalid_union":
                return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
            case "invalid_element":
                return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 \u0432 ${r.origin}`;
            default:
                return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
        }
    };
};

}
