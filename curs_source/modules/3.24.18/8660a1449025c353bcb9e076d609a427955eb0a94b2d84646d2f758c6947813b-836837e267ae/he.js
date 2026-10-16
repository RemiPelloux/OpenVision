import { Qk, om, rk } from "./SZu.js";
import { E } from "./tslib.es6.js";
import { ky } from "./util.js";
var Osd;
export { Osd };
var __wakaru_H0y_initialized = false;
export function H0y() {
if (__wakaru_H0y_initialized) return;
__wakaru_H0y_initialized = true;
E(), ky(), Osd = ()=>{
    const t = {
        string: {
            label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA",
            gender: "f"
        },
        number: {
            label: "\u05DE\u05E1\u05E4\u05E8",
            gender: "m"
        },
        boolean: {
            label: "\u05E2\u05E8\u05DA \u05D1\u05D5\u05DC\u05D9\u05D0\u05E0\u05D9",
            gender: "m"
        },
        bigint: {
            label: "BigInt",
            gender: "m"
        },
        date: {
            label: "\u05EA\u05D0\u05E8\u05D9\u05DA",
            gender: "m"
        },
        array: {
            label: "\u05DE\u05E2\u05E8\u05DA",
            gender: "m"
        },
        object: {
            label: "\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8",
            gender: "m"
        },
        null: {
            label: "\u05E2\u05E8\u05DA \u05E8\u05D9\u05E7 (null)",
            gender: "m"
        },
        undefined: {
            label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05DE\u05D5\u05D2\u05D3\u05E8 (undefined)",
            gender: "m"
        },
        symbol: {
            label: "\u05E1\u05D9\u05DE\u05D1\u05D5\u05DC (Symbol)",
            gender: "m"
        },
        function: {
            label: "\u05E4\u05D5\u05E0\u05E7\u05E6\u05D9\u05D4",
            gender: "f"
        },
        map: {
            label: "\u05DE\u05E4\u05D4 (Map)",
            gender: "f"
        },
        set: {
            label: "\u05E7\u05D1\u05D5\u05E6\u05D4 (Set)",
            gender: "f"
        },
        file: {
            label: "\u05E7\u05D5\u05D1\u05E5",
            gender: "m"
        },
        promise: {
            label: "Promise",
            gender: "m"
        },
        NaN: {
            label: "NaN",
            gender: "m"
        },
        unknown: {
            label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2",
            gender: "m"
        },
        value: {
            label: "\u05E2\u05E8\u05DA",
            gender: "m"
        }
    }, e = {
        string: {
            unit: "\u05EA\u05D5\u05D5\u05D9\u05DD",
            shortLabel: "\u05E7\u05E6\u05E8",
            longLabel: "\u05D0\u05E8\u05D5\u05DA"
        },
        file: {
            unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD",
            shortLabel: "\u05E7\u05D8\u05DF",
            longLabel: "\u05D2\u05D3\u05D5\u05DC"
        },
        array: {
            unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
            shortLabel: "\u05E7\u05D8\u05DF",
            longLabel: "\u05D2\u05D3\u05D5\u05DC"
        },
        set: {
            unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
            shortLabel: "\u05E7\u05D8\u05DF",
            longLabel: "\u05D2\u05D3\u05D5\u05DC"
        },
        number: {
            unit: "",
            shortLabel: "\u05E7\u05D8\u05DF",
            longLabel: "\u05D2\u05D3\u05D5\u05DC"
        }
    }, n = (c)=>c ? t[c] : void 0, i = (c)=>{
        const u = n(c);
        return u ? u.label : c ?? t.unknown.label;
    }, r = (c)=>`\u05D4${i(c)}`, s = (c)=>(n(c)?.gender ?? "m") === "f" ? "\u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA" : "\u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA", o = (c)=>c ? e[c] ?? null : null, a = {
        regex: {
            label: "\u05E7\u05DC\u05D8",
            gender: "m"
        },
        email: {
            label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC",
            gender: "f"
        },
        url: {
            label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA",
            gender: "f"
        },
        emoji: {
            label: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9",
            gender: "m"
        },
        uuid: {
            label: "UUID",
            gender: "m"
        },
        nanoid: {
            label: "nanoid",
            gender: "m"
        },
        guid: {
            label: "GUID",
            gender: "m"
        },
        cuid: {
            label: "cuid",
            gender: "m"
        },
        cuid2: {
            label: "cuid2",
            gender: "m"
        },
        ulid: {
            label: "ULID",
            gender: "m"
        },
        xid: {
            label: "XID",
            gender: "m"
        },
        ksuid: {
            label: "KSUID",
            gender: "m"
        },
        datetime: {
            label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO",
            gender: "m"
        },
        date: {
            label: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO",
            gender: "m"
        },
        time: {
            label: "\u05D6\u05DE\u05DF ISO",
            gender: "m"
        },
        duration: {
            label: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO",
            gender: "m"
        },
        ipv4: {
            label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4",
            gender: "f"
        },
        ipv6: {
            label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6",
            gender: "f"
        },
        cidrv4: {
            label: "\u05D8\u05D5\u05D5\u05D7 IPv4",
            gender: "m"
        },
        cidrv6: {
            label: "\u05D8\u05D5\u05D5\u05D7 IPv6",
            gender: "m"
        },
        base64: {
            label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64",
            gender: "f"
        },
        base64url: {
            label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA",
            gender: "f"
        },
        json_string: {
            label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON",
            gender: "f"
        },
        e164: {
            label: "\u05DE\u05E1\u05E4\u05E8 E.164",
            gender: "m"
        },
        jwt: {
            label: "JWT",
            gender: "m"
        },
        ends_with: {
            label: "\u05E7\u05DC\u05D8",
            gender: "m"
        },
        includes: {
            label: "\u05E7\u05DC\u05D8",
            gender: "m"
        },
        lowercase: {
            label: "\u05E7\u05DC\u05D8",
            gender: "m"
        },
        starts_with: {
            label: "\u05E7\u05DC\u05D8",
            gender: "m"
        },
        uppercase: {
            label: "\u05E7\u05DC\u05D8",
            gender: "m"
        }
    }, l = {
        nan: "NaN"
    };
    return (c)=>{
        switch(c.code){
            case "invalid_type":
                {
                    const u = c.expected, d = l[u ?? ""] ?? i(u), h = Qk(c.input), p = l[h] ?? t[h]?.label ?? h;
                    return /^[A-Z]/.test(c.expected) ? `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA instanceof ${c.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${p}` : `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${d}, \u05D4\u05EA\u05E7\u05D1\u05DC ${p}`;
                }
            case "invalid_value":
                {
                    if (c.values.length === 1) return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05E2\u05E8\u05DA \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA ${rk(c.values[0])}`;
                    const u = c.values.map((p)=>rk(p));
                    if (c.values.length === 2) return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${u[0]} \u05D0\u05D5 ${u[1]}`;
                    const d = u[u.length - 1];
                    return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${u.slice(0, -1).join(", ")} \u05D0\u05D5 ${d}`;
                }
            case "too_big":
                {
                    const u = o(c.origin), d = r(c.origin ?? "value");
                    if (c.origin === "string") return `${u?.longLabel ?? "\u05D0\u05E8\u05D5\u05DA"} \u05DE\u05D3\u05D9: ${d} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${c.maximum.toString()} ${u?.unit ?? ""} ${c.inclusive ? "\u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA" : "\u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8"}`.trim();
                    if (c.origin === "number") {
                        const g = c.inclusive ? `\u05E7\u05D8\u05DF \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${c.maximum}` : `\u05E7\u05D8\u05DF \u05DE-${c.maximum}`;
                        return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${d} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${g}`;
                    }
                    if (c.origin === "array" || c.origin === "set") {
                        const g = c.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA", f = c.inclusive ? `${c.maximum} ${u?.unit ?? ""} \u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA` : `\u05E4\u05D7\u05D5\u05EA \u05DE-${c.maximum} ${u?.unit ?? ""}`;
                        return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${d} ${g} \u05DC\u05D4\u05DB\u05D9\u05DC ${f}`.trim();
                    }
                    const h = c.inclusive ? "<=" : "<", p = s(c.origin ?? "value");
                    return u?.unit ? `${u.longLabel} \u05DE\u05D3\u05D9: ${d} ${p} ${h}${c.maximum.toString()} ${u.unit}` : `${u?.longLabel ?? "\u05D2\u05D3\u05D5\u05DC"} \u05DE\u05D3\u05D9: ${d} ${p} ${h}${c.maximum.toString()}`;
                }
            case "too_small":
                {
                    const u = o(c.origin), d = r(c.origin ?? "value");
                    if (c.origin === "string") return `${u?.shortLabel ?? "\u05E7\u05E6\u05E8"} \u05DE\u05D3\u05D9: ${d} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${c.minimum.toString()} ${u?.unit ?? ""} ${c.inclusive ? "\u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8" : "\u05DC\u05E4\u05D7\u05D5\u05EA"}`.trim();
                    if (c.origin === "number") {
                        const g = c.inclusive ? `\u05D2\u05D3\u05D5\u05DC \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${c.minimum}` : `\u05D2\u05D3\u05D5\u05DC \u05DE-${c.minimum}`;
                        return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${d} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${g}`;
                    }
                    if (c.origin === "array" || c.origin === "set") {
                        const g = c.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA";
                        if (c.minimum === 1 && c.inclusive) {
                            const _ = (c.origin === "set", "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3");
                            return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${d} ${g} \u05DC\u05D4\u05DB\u05D9\u05DC ${_}`;
                        }
                        const f = c.inclusive ? `${c.minimum} ${u?.unit ?? ""} \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8` : `\u05D9\u05D5\u05EA\u05E8 \u05DE-${c.minimum} ${u?.unit ?? ""}`;
                        return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${d} ${g} \u05DC\u05D4\u05DB\u05D9\u05DC ${f}`.trim();
                    }
                    const h = c.inclusive ? ">=" : ">", p = s(c.origin ?? "value");
                    return u?.unit ? `${u.shortLabel} \u05DE\u05D3\u05D9: ${d} ${p} ${h}${c.minimum.toString()} ${u.unit}` : `${u?.shortLabel ?? "\u05E7\u05D8\u05DF"} \u05DE\u05D3\u05D9: ${d} ${p} ${h}${c.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const u = c;
                    if (u.format === "starts_with") return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1 "${u.prefix}"`;
                    if (u.format === "ends_with") return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "${u.suffix}"`;
                    if (u.format === "includes") return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "${u.includes}"`;
                    if (u.format === "regex") return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ${u.pattern}`;
                    const d = a[u.format], h = d?.label ?? u.format, g = (d?.gender ?? "m") === "f" ? "\u05EA\u05E7\u05D9\u05E0\u05D4" : "\u05EA\u05E7\u05D9\u05DF";
                    return `${h} \u05DC\u05D0 ${g}`;
                }
            case "not_multiple_of":
                return `\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ${c.divisor}`;
            case "unrecognized_keys":
                return `\u05DE\u05E4\u05EA\u05D7${c.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${c.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${om(c.keys, ", ")}`;
            case "invalid_key":
                return "\u05E9\u05D3\u05D4 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8";
            case "invalid_union":
                return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
            case "invalid_element":
                return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${r(c.origin ?? "array")}`;
            default:
                return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
        }
    };
};

}
