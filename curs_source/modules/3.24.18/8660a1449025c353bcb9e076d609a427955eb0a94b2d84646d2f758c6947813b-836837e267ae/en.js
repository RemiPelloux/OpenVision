import { Qk, om, rk } from "./SZu.js";
import { E } from "./tslib.es6.js";
import { ky } from "./util.js";
var xsd;
export { xsd };
var __wakaru_Asd_initialized = false;
export function Asd() {
if (__wakaru_Asd_initialized) return;
__wakaru_Asd_initialized = true;
E(), ky(), xsd = ()=>{
    const t = {
        string: {
            unit: "characters",
            verb: "to have"
        },
        file: {
            unit: "bytes",
            verb: "to have"
        },
        array: {
            unit: "items",
            verb: "to have"
        },
        set: {
            unit: "items",
            verb: "to have"
        },
        map: {
            unit: "entries",
            verb: "to have"
        }
    };
    function e(r) {
        return t[r] ?? null;
    }
    const n = {
        regex: "input",
        email: "email address",
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
        datetime: "ISO datetime",
        date: "ISO date",
        time: "ISO time",
        duration: "ISO duration",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        mac: "MAC address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded string",
        base64url: "base64url-encoded string",
        json_string: "JSON string",
        e164: "E.164 number",
        jwt: "JWT",
        template_literal: "input"
    }, i = {
        nan: "NaN"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Qk(r.input), a = i[o] ?? o;
                    return `Invalid input: expected ${s}, received ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Invalid input: expected ${rk(r.values[0])}` : `Invalid option: expected one of ${om(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = e(r.origin);
                    return o ? `Too big: expected ${r.origin ?? "value"} to have ${s}${r.maximum.toString()} ${o.unit ?? "elements"}` : `Too big: expected ${r.origin ?? "value"} to be ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = e(r.origin);
                    return o ? `Too small: expected ${r.origin} to have ${s}${r.minimum.toString()} ${o.unit}` : `Too small: expected ${r.origin} to be ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `Invalid string: must start with "${s.prefix}"` : s.format === "ends_with" ? `Invalid string: must end with "${s.suffix}"` : s.format === "includes" ? `Invalid string: must include "${s.includes}"` : s.format === "regex" ? `Invalid string: must match pattern ${s.pattern}` : `Invalid ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `Invalid number: must be a multiple of ${r.divisor}`;
            case "unrecognized_keys":
                return `Unrecognized key${r.keys.length > 1 ? "s" : ""}: ${om(r.keys, ", ")}`;
            case "invalid_key":
                return `Invalid key in ${r.origin}`;
            case "invalid_union":
                return "Invalid input";
            case "invalid_element":
                return `Invalid value in ${r.origin}`;
            default:
                return "Invalid input";
        }
    };
};

}
