import { Ey, mh, zb } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { Fv } from "./util_3.js";
var G_u;
export { G_u };
var __wakaru_cov_initialized = false;
export function cov() {
if (__wakaru_cov_initialized) return;
__wakaru_cov_initialized = true;
x(), Fv(), G_u = ()=>{
    const e = {
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
    }, t = {
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
    }, n = (l)=>l ? e[l] : void 0, i = (l)=>{
        const u = n(l);
        return u ? u.label : l ?? e.unknown.label;
    }, r = (l)=>`\u05D4${i(l)}`, s = (l)=>(n(l)?.gender ?? "m") === "f" ? "\u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA" : "\u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA", o = (l)=>l ? t[l] ?? null : null, a = {
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
    }, c = {
        nan: "NaN"
    };
    return (l)=>{
        switch(l.code){
            case "invalid_type":
                {
                    const u = l.expected, h = c[u ?? ""] ?? i(u), p = Ey(l.input), g = c[p] ?? e[p]?.label ?? p;
                    return /^[A-Z]/.test(l.expected) ? `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA instanceof ${l.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${g}` : `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${h}, \u05D4\u05EA\u05E7\u05D1\u05DC ${g}`;
                }
            case "invalid_value":
                {
                    if (l.values.length === 1) return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05E2\u05E8\u05DA \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA ${zb(l.values[0])}`;
                    const u = l.values.map((g)=>zb(g));
                    if (l.values.length === 2) return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${u[0]} \u05D0\u05D5 ${u[1]}`;
                    const h = u[u.length - 1];
                    return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${u.slice(0, -1).join(", ")} \u05D0\u05D5 ${h}`;
                }
            case "too_big":
                {
                    const u = o(l.origin), h = r(l.origin ?? "value");
                    if (l.origin === "string") return `${u?.longLabel ?? "\u05D0\u05E8\u05D5\u05DA"} \u05DE\u05D3\u05D9: ${h} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${l.maximum.toString()} ${u?.unit ?? ""} ${l.inclusive ? "\u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA" : "\u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8"}`.trim();
                    if (l.origin === "number") {
                        const f = l.inclusive ? `\u05E7\u05D8\u05DF \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${l.maximum}` : `\u05E7\u05D8\u05DF \u05DE-${l.maximum}`;
                        return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${h} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${f}`;
                    }
                    if (l.origin === "array" || l.origin === "set") {
                        const f = l.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA", v = l.inclusive ? `${l.maximum} ${u?.unit ?? ""} \u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA` : `\u05E4\u05D7\u05D5\u05EA \u05DE-${l.maximum} ${u?.unit ?? ""}`;
                        return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${h} ${f} \u05DC\u05D4\u05DB\u05D9\u05DC ${v}`.trim();
                    }
                    const p = l.inclusive ? "<=" : "<", g = s(l.origin ?? "value");
                    return u?.unit ? `${u.longLabel} \u05DE\u05D3\u05D9: ${h} ${g} ${p}${l.maximum.toString()} ${u.unit}` : `${u?.longLabel ?? "\u05D2\u05D3\u05D5\u05DC"} \u05DE\u05D3\u05D9: ${h} ${g} ${p}${l.maximum.toString()}`;
                }
            case "too_small":
                {
                    const u = o(l.origin), h = r(l.origin ?? "value");
                    if (l.origin === "string") return `${u?.shortLabel ?? "\u05E7\u05E6\u05E8"} \u05DE\u05D3\u05D9: ${h} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${l.minimum.toString()} ${u?.unit ?? ""} ${l.inclusive ? "\u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8" : "\u05DC\u05E4\u05D7\u05D5\u05EA"}`.trim();
                    if (l.origin === "number") {
                        const f = l.inclusive ? `\u05D2\u05D3\u05D5\u05DC \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${l.minimum}` : `\u05D2\u05D3\u05D5\u05DC \u05DE-${l.minimum}`;
                        return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${h} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${f}`;
                    }
                    if (l.origin === "array" || l.origin === "set") {
                        const f = l.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA";
                        if (l.minimum === 1 && l.inclusive) {
                            const b = (l.origin === "set", "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3");
                            return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${h} ${f} \u05DC\u05D4\u05DB\u05D9\u05DC ${b}`;
                        }
                        const v = l.inclusive ? `${l.minimum} ${u?.unit ?? ""} \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8` : `\u05D9\u05D5\u05EA\u05E8 \u05DE-${l.minimum} ${u?.unit ?? ""}`;
                        return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${h} ${f} \u05DC\u05D4\u05DB\u05D9\u05DC ${v}`.trim();
                    }
                    const p = l.inclusive ? ">=" : ">", g = s(l.origin ?? "value");
                    return u?.unit ? `${u.shortLabel} \u05DE\u05D3\u05D9: ${h} ${g} ${p}${l.minimum.toString()} ${u.unit}` : `${u?.shortLabel ?? "\u05E7\u05D8\u05DF"} \u05DE\u05D3\u05D9: ${h} ${g} ${p}${l.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const u = l;
                    if (u.format === "starts_with") return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1 "${u.prefix}"`;
                    if (u.format === "ends_with") return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "${u.suffix}"`;
                    if (u.format === "includes") return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "${u.includes}"`;
                    if (u.format === "regex") return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ${u.pattern}`;
                    const h = a[u.format], p = h?.label ?? u.format, f = (h?.gender ?? "m") === "f" ? "\u05EA\u05E7\u05D9\u05E0\u05D4" : "\u05EA\u05E7\u05D9\u05DF";
                    return `${p} \u05DC\u05D0 ${f}`;
                }
            case "not_multiple_of":
                return `\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ${l.divisor}`;
            case "unrecognized_keys":
                return `\u05DE\u05E4\u05EA\u05D7${l.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${l.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${mh(l.keys, ", ")}`;
            case "invalid_key":
                return "\u05E9\u05D3\u05D4 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8";
            case "invalid_union":
                return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
            case "invalid_element":
                return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${r(l.origin ?? "array")}`;
            default:
                return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
        }
    };
};

}
