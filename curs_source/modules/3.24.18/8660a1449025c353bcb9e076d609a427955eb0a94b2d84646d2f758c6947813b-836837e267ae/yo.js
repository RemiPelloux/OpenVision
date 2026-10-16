import { Qk, om, rk } from "./SZu.js";
import { E } from "./tslib.es6.js";
import { ky } from "./util.js";
var yod;
export { yod };
var __wakaru_XCy_initialized = false;
export function XCy() {
if (__wakaru_XCy_initialized) return;
__wakaru_XCy_initialized = true;
E(), ky(), yod = ()=>{
    const t = {
        string: {
            unit: "\xE0mi",
            verb: "n\xED"
        },
        file: {
            unit: "bytes",
            verb: "n\xED"
        },
        array: {
            unit: "nkan",
            verb: "n\xED"
        },
        set: {
            unit: "nkan",
            verb: "n\xED"
        }
    };
    function e(r) {
        return t[r] ?? null;
    }
    const n = {
        regex: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9",
        email: "\xE0d\xEDr\u1EB9\u0301s\xEC \xECm\u1EB9\u0301l\xEC",
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
        datetime: "\xE0k\xF3k\xF2 ISO",
        date: "\u1ECDj\u1ECD\u0301 ISO",
        time: "\xE0k\xF3k\xF2 ISO",
        duration: "\xE0k\xF3k\xF2 t\xF3 p\xE9 ISO",
        ipv4: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv4",
        ipv6: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv6",
        cidrv4: "\xE0gb\xE8gb\xE8 IPv4",
        cidrv6: "\xE0gb\xE8gb\xE8 IPv6",
        base64: "\u1ECD\u0300r\u1ECD\u0300 t\xED a k\u1ECD\u0301 n\xED base64",
        base64url: "\u1ECD\u0300r\u1ECD\u0300 base64url",
        json_string: "\u1ECD\u0300r\u1ECD\u0300 JSON",
        e164: "n\u1ECD\u0301mb\xE0 E.164",
        jwt: "JWT",
        template_literal: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9"
    }, i = {
        nan: "NaN",
        number: "n\u1ECD\u0301mb\xE0",
        array: "akop\u1ECD"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Qk(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi instanceof ${r.expected}, \xE0m\u1ECD\u0300 a r\xED ${a}` : `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${s}, \xE0m\u1ECD\u0300 a r\xED ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${rk(r.values[0])}` : `\xC0\u1E63\xE0y\xE0n a\u1E63\xEC\u1E63e: yan \u1ECD\u0300kan l\xE1ra ${om(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = e(r.origin);
                    return o ? `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${r.origin ?? "iye"} ${o.verb} ${s}${r.maximum} ${o.unit}` : `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 ${s}${r.maximum}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = e(r.origin);
                    return o ? `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${r.origin} ${o.verb} ${s}${r.minimum} ${o.unit}` : `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 ${s}${r.minimum}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\u1EB9\u0300r\u1EB9\u0300 p\u1EB9\u0300l\xFA "${s.prefix}"` : s.format === "ends_with" ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 par\xED p\u1EB9\u0300l\xFA "${s.suffix}"` : s.format === "includes" ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 n\xED "${s.includes}"` : s.format === "regex" ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\xE1 \xE0p\u1EB9\u1EB9r\u1EB9 mu ${s.pattern}` : `A\u1E63\xEC\u1E63e: ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `N\u1ECD\u0301mb\xE0 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 j\u1EB9\u0301 \xE8y\xE0 p\xEDp\xEDn ti ${r.divisor}`;
            case "unrecognized_keys":
                return `B\u1ECDt\xECn\xEC \xE0\xECm\u1ECD\u0300: ${om(r.keys, ", ")}`;
            case "invalid_key":
                return `B\u1ECDt\xECn\xEC a\u1E63\xEC\u1E63e n\xEDn\xFA ${r.origin}`;
            case "invalid_union":
                return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
            case "invalid_element":
                return `Iye a\u1E63\xEC\u1E63e n\xEDn\xFA ${r.origin}`;
            default:
                return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
        }
    };
};

}
