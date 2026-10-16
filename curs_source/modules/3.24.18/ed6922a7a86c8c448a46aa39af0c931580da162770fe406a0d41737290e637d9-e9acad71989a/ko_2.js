import { Ey, mh, zb } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { Fv } from "./util_3.js";
var tbu;
export { tbu };
var __wakaru_Eov_initialized = false;
export function Eov() {
if (__wakaru_Eov_initialized) return;
__wakaru_Eov_initialized = true;
x(), Fv(), tbu = ()=>{
    const e = {
        string: {
            unit: "\uBB38\uC790",
            verb: "to have"
        },
        file: {
            unit: "\uBC14\uC774\uD2B8",
            verb: "to have"
        },
        array: {
            unit: "\uAC1C",
            verb: "to have"
        },
        set: {
            unit: "\uAC1C",
            verb: "to have"
        }
    };
    function t(r) {
        return e[r] ?? null;
    }
    const n = {
        regex: "\uC785\uB825",
        email: "\uC774\uBA54\uC77C \uC8FC\uC18C",
        url: "URL",
        emoji: "\uC774\uBAA8\uC9C0",
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
        datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04",
        date: "ISO \uB0A0\uC9DC",
        time: "ISO \uC2DC\uAC04",
        duration: "ISO \uAE30\uAC04",
        ipv4: "IPv4 \uC8FC\uC18C",
        ipv6: "IPv6 \uC8FC\uC18C",
        cidrv4: "IPv4 \uBC94\uC704",
        cidrv6: "IPv6 \uBC94\uC704",
        base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
        base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
        json_string: "JSON \uBB38\uC790\uC5F4",
        e164: "E.164 \uBC88\uD638",
        jwt: "JWT",
        template_literal: "\uC785\uB825"
    }, i = {
        nan: "NaN"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Ey(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 instanceof ${r.expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${a}\uC785\uB2C8\uB2E4` : `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ${s}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${a}\uC785\uB2C8\uB2E4`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${zb(r.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4` : `\uC798\uBABB\uB41C \uC635\uC158: ${mh(r.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
            case "too_big":
                {
                    const s = r.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC", o = s === "\uBBF8\uB9CC" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4", a = t(r.origin), c = a?.unit ?? "\uC694\uC18C";
                    return a ? `${r.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${r.maximum.toString()}${c} ${s}${o}` : `${r.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${r.maximum.toString()} ${s}${o}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC", o = s === "\uC774\uC0C1" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4", a = t(r.origin), c = a?.unit ?? "\uC694\uC18C";
                    return a ? `${r.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${r.minimum.toString()}${c} ${s}${o}` : `${r.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${r.minimum.toString()} ${s}${o}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${s.prefix}"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4` : s.format === "ends_with" ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${s.suffix}"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4` : s.format === "includes" ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${s.includes}"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4` : s.format === "regex" ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD ${s.pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4` : `\uC798\uBABB\uB41C ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `\uC798\uBABB\uB41C \uC22B\uC790: ${r.divisor}\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
            case "unrecognized_keys":
                return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${mh(r.keys, ", ")}`;
            case "invalid_key":
                return `\uC798\uBABB\uB41C \uD0A4: ${r.origin}`;
            case "invalid_union":
                return "\uC798\uBABB\uB41C \uC785\uB825";
            case "invalid_element":
                return `\uC798\uBABB\uB41C \uAC12: ${r.origin}`;
            default:
                return "\uC798\uBABB\uB41C \uC785\uB825";
        }
    };
};

}
