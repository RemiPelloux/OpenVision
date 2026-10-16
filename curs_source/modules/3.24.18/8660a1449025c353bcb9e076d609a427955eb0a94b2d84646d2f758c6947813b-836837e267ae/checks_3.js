import { jFe } from "./core_3.js";
import { Bfa, Ofa, RSn, ad, tTS } from "./ipa.js";
import { d7h, h7h, hkt, l7h } from "./regexes_2.js";
import { E } from "./tslib.es6.js";
import { M8h, yb } from "./util_2.js";
var Bhe, Vfa, Kfa, Yfa, p7h, m7h, g7h, f7h, v7h, Hpi, _7h, b7h, y7h, S7h, k7h, w7h, C7h;
export { Bhe, C7h, Hpi, Kfa, S7h, Vfa, Yfa, _7h, b7h, f7h, g7h, k7h, m7h, p7h, v7h, w7h, y7h };
var __wakaru_Wpi_initialized = false;
export function Wpi() {
if (__wakaru_Wpi_initialized) return;
__wakaru_Wpi_initialized = true;
E(), jFe(), hkt(), yb(), Bhe = ad("$ZodCheck", (t, e)=>{
    var n;
    t._zod ?? (t._zod = {}), t._zod.def = e, (n = t._zod).onattach ?? (n.onattach = []);
}), Vfa = {
    number: "number",
    bigint: "bigint",
    object: "date"
}, Kfa = ad("$ZodCheckLessThan", (t, e)=>{
    Bhe.init(t, e);
    const n = Vfa[typeof e.value];
    t._zod.onattach.push((i)=>{
        const r = i._zod.bag, s = (e.inclusive ? r.maximum : r.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
        e.value < s && (e.inclusive ? r.maximum = e.value : r.exclusiveMaximum = e.value);
    }), t._zod.check = (i)=>{
        (e.inclusive ? i.value <= e.value : i.value < e.value) || i.issues.push({
            origin: n,
            code: "too_big",
            maximum: typeof e.value == "object" ? e.value.getTime() : e.value,
            input: i.value,
            inclusive: e.inclusive,
            inst: t,
            continue: !e.abort
        });
    };
}), Yfa = ad("$ZodCheckGreaterThan", (t, e)=>{
    Bhe.init(t, e);
    const n = Vfa[typeof e.value];
    t._zod.onattach.push((i)=>{
        const r = i._zod.bag, s = (e.inclusive ? r.minimum : r.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
        e.value > s && (e.inclusive ? r.minimum = e.value : r.exclusiveMinimum = e.value);
    }), t._zod.check = (i)=>{
        (e.inclusive ? i.value >= e.value : i.value > e.value) || i.issues.push({
            origin: n,
            code: "too_small",
            minimum: typeof e.value == "object" ? e.value.getTime() : e.value,
            input: i.value,
            inclusive: e.inclusive,
            inst: t,
            continue: !e.abort
        });
    };
}), p7h = ad("$ZodCheckMultipleOf", (t, e)=>{
    Bhe.init(t, e), t._zod.onattach.push((n)=>{
        var i;
        (i = n._zod.bag).multipleOf ?? (i.multipleOf = e.value);
    }), t._zod.check = (n)=>{
        if (typeof n.value != typeof e.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
        (typeof n.value == "bigint" ? n.value % e.value === BigInt(0) : tTS(n.value, e.value) === 0) || n.issues.push({
            origin: typeof n.value,
            code: "not_multiple_of",
            divisor: e.value,
            input: n.value,
            inst: t,
            continue: !e.abort
        });
    };
}), m7h = ad("$ZodCheckNumberFormat", (t, e)=>{
    Bhe.init(t, e), e.format = e.format || "float64";
    const n = e.format?.includes("int"), i = n ? "int" : "number", [r, s] = M8h[e.format];
    t._zod.onattach.push((o)=>{
        const a = o._zod.bag;
        a.format = e.format, a.minimum = r, a.maximum = s, n && (a.pattern = l7h);
    }), t._zod.check = (o)=>{
        const a = o.value;
        if (n) {
            if (!Number.isInteger(a)) {
                o.issues.push({
                    expected: i,
                    format: e.format,
                    code: "invalid_type",
                    continue: !1,
                    input: a,
                    inst: t
                });
                return;
            }
            if (!Number.isSafeInteger(a)) {
                a > 0 ? o.issues.push({
                    input: a,
                    code: "too_big",
                    maximum: Number.MAX_SAFE_INTEGER,
                    note: "Integers must be within the safe integer range.",
                    inst: t,
                    origin: i,
                    inclusive: !0,
                    continue: !e.abort
                }) : o.issues.push({
                    input: a,
                    code: "too_small",
                    minimum: Number.MIN_SAFE_INTEGER,
                    note: "Integers must be within the safe integer range.",
                    inst: t,
                    origin: i,
                    inclusive: !0,
                    continue: !e.abort
                });
                return;
            }
        }
        a < r && o.issues.push({
            origin: "number",
            input: a,
            code: "too_small",
            minimum: r,
            inclusive: !0,
            inst: t,
            continue: !e.abort
        }), a > s && o.issues.push({
            origin: "number",
            input: a,
            code: "too_big",
            maximum: s,
            inclusive: !0,
            inst: t,
            continue: !e.abort
        });
    };
}), g7h = ad("$ZodCheckMaxLength", (t, e)=>{
    var n;
    Bhe.init(t, e), (n = t._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !Ofa(r) && r.length !== void 0;
    }), t._zod.onattach.push((i)=>{
        const r = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        e.maximum < r && (i._zod.bag.maximum = e.maximum);
    }), t._zod.check = (i)=>{
        const r = i.value;
        if (r.length <= e.maximum) return;
        const o = Bfa(r);
        i.issues.push({
            origin: o,
            code: "too_big",
            maximum: e.maximum,
            inclusive: !0,
            input: r,
            inst: t,
            continue: !e.abort
        });
    };
}), f7h = ad("$ZodCheckMinLength", (t, e)=>{
    var n;
    Bhe.init(t, e), (n = t._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !Ofa(r) && r.length !== void 0;
    }), t._zod.onattach.push((i)=>{
        const r = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        e.minimum > r && (i._zod.bag.minimum = e.minimum);
    }), t._zod.check = (i)=>{
        const r = i.value;
        if (r.length >= e.minimum) return;
        const o = Bfa(r);
        i.issues.push({
            origin: o,
            code: "too_small",
            minimum: e.minimum,
            inclusive: !0,
            input: r,
            inst: t,
            continue: !e.abort
        });
    };
}), v7h = ad("$ZodCheckLengthEquals", (t, e)=>{
    var n;
    Bhe.init(t, e), (n = t._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !Ofa(r) && r.length !== void 0;
    }), t._zod.onattach.push((i)=>{
        const r = i._zod.bag;
        r.minimum = e.length, r.maximum = e.length, r.length = e.length;
    }), t._zod.check = (i)=>{
        const r = i.value, s = r.length;
        if (s === e.length) return;
        const o = Bfa(r), a = s > e.length;
        i.issues.push({
            origin: o,
            ...a ? {
                code: "too_big",
                maximum: e.length
            } : {
                code: "too_small",
                minimum: e.length
            },
            inclusive: !0,
            exact: !0,
            input: i.value,
            inst: t,
            continue: !e.abort
        });
    };
}), Hpi = ad("$ZodCheckStringFormat", (t, e)=>{
    var n, i;
    Bhe.init(t, e), t._zod.onattach.push((r)=>{
        const s = r._zod.bag;
        s.format = e.format, e.pattern && (s.patterns ?? (s.patterns = new Set), s.patterns.add(e.pattern));
    }), e.pattern ? (n = t._zod).check ?? (n.check = (r)=>{
        e.pattern.lastIndex = 0, !e.pattern.test(r.value) && r.issues.push({
            origin: "string",
            code: "invalid_format",
            format: e.format,
            input: r.value,
            ...e.pattern ? {
                pattern: e.pattern.toString()
            } : {},
            inst: t,
            continue: !e.abort
        });
    }) : (i = t._zod).check ?? (i.check = ()=>{});
}), _7h = ad("$ZodCheckRegex", (t, e)=>{
    Hpi.init(t, e), t._zod.check = (n)=>{
        e.pattern.lastIndex = 0, !e.pattern.test(n.value) && n.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "regex",
            input: n.value,
            pattern: e.pattern.toString(),
            inst: t,
            continue: !e.abort
        });
    };
}), b7h = ad("$ZodCheckLowerCase", (t, e)=>{
    e.pattern ?? (e.pattern = d7h), Hpi.init(t, e);
}), y7h = ad("$ZodCheckUpperCase", (t, e)=>{
    e.pattern ?? (e.pattern = h7h), Hpi.init(t, e);
}), S7h = ad("$ZodCheckIncludes", (t, e)=>{
    Bhe.init(t, e);
    const n = RSn(e.includes), i = new RegExp(typeof e.position == "number" ? `^.{${e.position}}${n}` : n);
    e.pattern = i, t._zod.onattach.push((r)=>{
        const s = r._zod.bag;
        s.patterns ?? (s.patterns = new Set), s.patterns.add(i);
    }), t._zod.check = (r)=>{
        r.value.includes(e.includes, e.position) || r.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: e.includes,
            input: r.value,
            inst: t,
            continue: !e.abort
        });
    };
}), k7h = ad("$ZodCheckStartsWith", (t, e)=>{
    Bhe.init(t, e);
    const n = new RegExp(`^${RSn(e.prefix)}.*`);
    e.pattern ?? (e.pattern = n), t._zod.onattach.push((i)=>{
        const r = i._zod.bag;
        r.patterns ?? (r.patterns = new Set), r.patterns.add(n);
    }), t._zod.check = (i)=>{
        i.value.startsWith(e.prefix) || i.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: e.prefix,
            input: i.value,
            inst: t,
            continue: !e.abort
        });
    };
}), w7h = ad("$ZodCheckEndsWith", (t, e)=>{
    Bhe.init(t, e);
    const n = new RegExp(`.*${RSn(e.suffix)}$`);
    e.pattern ?? (e.pattern = n), t._zod.onattach.push((i)=>{
        const r = i._zod.bag;
        r.patterns ?? (r.patterns = new Set), r.patterns.add(n);
    }), t._zod.check = (i)=>{
        i.value.endsWith(e.suffix) || i.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: e.suffix,
            input: i.value,
            inst: t,
            continue: !e.abort
        });
    };
}), C7h = ad("$ZodCheckOverwrite", (t, e)=>{
    Bhe.init(t, e), t._zod.check = (n)=>{
        n.value = e.tx(n.value);
    };
});

}
