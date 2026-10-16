import { Ey, mh, zb } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { Fv } from "./util_3.js";
var lbu;
export { lbu };
var __wakaru_$ov_initialized = false;
export function $ov() {
if (__wakaru_$ov_initialized) return;
__wakaru_$ov_initialized = true;
x(), Fv(), lbu = ()=>{
    const e = {
        string: {
            unit: "\u062A\u0648\u06A9\u064A",
            verb: "\u0648\u0644\u0631\u064A"
        },
        file: {
            unit: "\u0628\u0627\u06CC\u067C\u0633",
            verb: "\u0648\u0644\u0631\u064A"
        },
        array: {
            unit: "\u062A\u0648\u06A9\u064A",
            verb: "\u0648\u0644\u0631\u064A"
        },
        set: {
            unit: "\u062A\u0648\u06A9\u064A",
            verb: "\u0648\u0644\u0631\u064A"
        }
    };
    function t(r) {
        return e[r] ?? null;
    }
    const n = {
        regex: "\u0648\u0631\u0648\u062F\u064A",
        email: "\u0628\u0631\u06CC\u069A\u0646\u0627\u0644\u06CC\u06A9",
        url: "\u06CC\u0648 \u0622\u0631 \u0627\u0644",
        emoji: "\u0627\u06CC\u0645\u0648\u062C\u064A",
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
        datetime: "\u0646\u06CC\u067C\u0647 \u0627\u0648 \u0648\u062E\u062A",
        date: "\u0646\u06D0\u067C\u0647",
        time: "\u0648\u062E\u062A",
        duration: "\u0645\u0648\u062F\u0647",
        ipv4: "\u062F IPv4 \u067E\u062A\u0647",
        ipv6: "\u062F IPv6 \u067E\u062A\u0647",
        cidrv4: "\u062F IPv4 \u0633\u0627\u062D\u0647",
        cidrv6: "\u062F IPv6 \u0633\u0627\u062D\u0647",
        base64: "base64-encoded \u0645\u062A\u0646",
        base64url: "base64url-encoded \u0645\u062A\u0646",
        json_string: "JSON \u0645\u062A\u0646",
        e164: "\u062F E.164 \u0634\u0645\u06D0\u0631\u0647",
        jwt: "JWT",
        template_literal: "\u0648\u0631\u0648\u062F\u064A"
    }, i = {
        nan: "NaN",
        number: "\u0639\u062F\u062F",
        array: "\u0627\u0631\u06D0"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Ey(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F instanceof ${r.expected} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${a} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648` : `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${s} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${a} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${zb(r.values[0])} \u0648\u0627\u06CC` : `\u0646\u0627\u0633\u0645 \u0627\u0646\u062A\u062E\u0627\u0628: \u0628\u0627\u06CC\u062F \u06CC\u0648 \u0644\u0647 ${mh(r.values, "|")} \u0685\u062E\u0647 \u0648\u0627\u06CC`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = t(r.origin);
                    return o ? `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${r.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${s}${r.maximum.toString()} ${o.unit ?? "\u0639\u0646\u0635\u0631\u0648\u0646\u0647"} \u0648\u0644\u0631\u064A` : `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${r.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${s}${r.maximum.toString()} \u0648\u064A`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = t(r.origin);
                    return o ? `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${r.origin} \u0628\u0627\u06CC\u062F ${s}${r.minimum.toString()} ${o.unit} \u0648\u0644\u0631\u064A` : `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${r.origin} \u0628\u0627\u06CC\u062F ${s}${r.minimum.toString()} \u0648\u064A`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${s.prefix}" \u0633\u0631\u0647 \u067E\u06CC\u0644 \u0634\u064A` : s.format === "ends_with" ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${s.suffix}" \u0633\u0631\u0647 \u067E\u0627\u06CC \u062A\u0647 \u0648\u0631\u0633\u064A\u0696\u064A` : s.format === "includes" ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F "${s.includes}" \u0648\u0644\u0631\u064A` : s.format === "regex" ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F ${s.pattern} \u0633\u0631\u0647 \u0645\u0637\u0627\u0628\u0642\u062A \u0648\u0644\u0631\u064A` : `${n[s.format] ?? r.format} \u0646\u0627\u0633\u0645 \u062F\u06CC`;
                }
            case "not_multiple_of":
                return `\u0646\u0627\u0633\u0645 \u0639\u062F\u062F: \u0628\u0627\u06CC\u062F \u062F ${r.divisor} \u0645\u0636\u0631\u0628 \u0648\u064A`;
            case "unrecognized_keys":
                return `\u0646\u0627\u0633\u0645 ${r.keys.length > 1 ? "\u06A9\u0644\u06CC\u0689\u0648\u0646\u0647" : "\u06A9\u0644\u06CC\u0689"}: ${mh(r.keys, ", ")}`;
            case "invalid_key":
                return `\u0646\u0627\u0633\u0645 \u06A9\u0644\u06CC\u0689 \u067E\u0647 ${r.origin} \u06A9\u06D0`;
            case "invalid_union":
                return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
            case "invalid_element":
                return `\u0646\u0627\u0633\u0645 \u0639\u0646\u0635\u0631 \u067E\u0647 ${r.origin} \u06A9\u06D0`;
            default:
                return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
        }
    };
};

}
