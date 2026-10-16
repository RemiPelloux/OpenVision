import { Ey, mh, zb } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { Fv } from "./util_3.js";
var Ebu;
export { Ebu };
var __wakaru_mav_initialized = false;
export function mav() {
if (__wakaru_mav_initialized) return;
__wakaru_mav_initialized = true;
x(), Fv(), Ebu = ()=>{
    const e = {
        string: {
            unit: "\u5B57\u5143",
            verb: "\u64C1\u6709"
        },
        file: {
            unit: "\u4F4D\u5143\u7D44",
            verb: "\u64C1\u6709"
        },
        array: {
            unit: "\u9805\u76EE",
            verb: "\u64C1\u6709"
        },
        set: {
            unit: "\u9805\u76EE",
            verb: "\u64C1\u6709"
        }
    };
    function t(r) {
        return e[r] ?? null;
    }
    const n = {
        regex: "\u8F38\u5165",
        email: "\u90F5\u4EF6\u5730\u5740",
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
        datetime: "ISO \u65E5\u671F\u6642\u9593",
        date: "ISO \u65E5\u671F",
        time: "ISO \u6642\u9593",
        duration: "ISO \u671F\u9593",
        ipv4: "IPv4 \u4F4D\u5740",
        ipv6: "IPv6 \u4F4D\u5740",
        cidrv4: "IPv4 \u7BC4\u570D",
        cidrv6: "IPv6 \u7BC4\u570D",
        base64: "base64 \u7DE8\u78BC\u5B57\u4E32",
        base64url: "base64url \u7DE8\u78BC\u5B57\u4E32",
        json_string: "JSON \u5B57\u4E32",
        e164: "E.164 \u6578\u503C",
        jwt: "JWT",
        template_literal: "\u8F38\u5165"
    }, i = {
        nan: "NaN"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Ey(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA instanceof ${r.expected}\uFF0C\u4F46\u6536\u5230 ${a}` : `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${s}\uFF0C\u4F46\u6536\u5230 ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${zb(r.values[0])}` : `\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ${mh(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = t(r.origin);
                    return o ? `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${r.origin ?? "\u503C"} \u61C9\u70BA ${s}${r.maximum.toString()} ${o.unit ?? "\u500B\u5143\u7D20"}` : `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${r.origin ?? "\u503C"} \u61C9\u70BA ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = t(r.origin);
                    return o ? `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${r.origin} \u61C9\u70BA ${s}${r.minimum.toString()} ${o.unit}` : `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${r.origin} \u61C9\u70BA ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${s.prefix}" \u958B\u982D` : s.format === "ends_with" ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${s.suffix}" \u7D50\u5C3E` : s.format === "includes" ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u5305\u542B "${s.includes}"` : s.format === "regex" ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u7B26\u5408\u683C\u5F0F ${s.pattern}` : `\u7121\u6548\u7684 ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA ${r.divisor} \u7684\u500D\u6578`;
            case "unrecognized_keys":
                return `\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C${r.keys.length > 1 ? "\u5011" : ""}\uFF1A${mh(r.keys, "\u3001")}`;
            case "invalid_key":
                return `${r.origin} \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C`;
            case "invalid_union":
                return "\u7121\u6548\u7684\u8F38\u5165\u503C";
            case "invalid_element":
                return `${r.origin} \u4E2D\u6709\u7121\u6548\u7684\u503C`;
            default:
                return "\u7121\u6548\u7684\u8F38\u5165\u503C";
        }
    };
};

}
