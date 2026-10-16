import { KIn } from "./core_4.js";
import { K6e, To, Ubt, bBi, cvu, o_u, yBi } from "./f0s.js";
import { E4s, I4s, k4s, x4s } from "./regexes_3.js";
import { x } from "./tslib.es6.js";
import { Fv, X6s, Z6s } from "./util_3.js";
var S2, A4s, NBi, OBi, R4s, D4s, M4s, P4s, L4s, N4s, O4s, F4s, B4s, y8t, U4s, $4s, H4s, W4s, G4s, V4s, j4s, q4s, z4s;
export { $4s, A4s, B4s, D4s, F4s, G4s, H4s, L4s, M4s, N4s, NBi, O4s, OBi, P4s, R4s, S2, U4s, V4s, W4s, j4s, q4s, y8t, z4s };
var __wakaru_K4s_initialized = false;
export function K4s() {
if (__wakaru_K4s_initialized) return;
__wakaru_K4s_initialized = true;
x(), KIn(), I4s(), Fv(), S2 = To("$ZodCheck", (e, t)=>{
    var n;
    e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), A4s = {
    number: "number",
    bigint: "bigint",
    object: "date"
}, NBi = To("$ZodCheckLessThan", (e, t)=>{
    S2.init(e, t);
    const n = A4s[typeof t.value];
    e._zod.onattach.push((i)=>{
        const r = i._zod.bag, s = (t.inclusive ? r.maximum : r.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
        t.value < s && (t.inclusive ? r.maximum = t.value : r.exclusiveMaximum = t.value);
    }), e._zod.check = (i)=>{
        (t.inclusive ? i.value <= t.value : i.value < t.value) || i.issues.push({
            origin: n,
            code: "too_big",
            maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
            input: i.value,
            inclusive: t.inclusive,
            inst: e,
            continue: !t.abort
        });
    };
}), OBi = To("$ZodCheckGreaterThan", (e, t)=>{
    S2.init(e, t);
    const n = A4s[typeof t.value];
    e._zod.onattach.push((i)=>{
        const r = i._zod.bag, s = (t.inclusive ? r.minimum : r.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
        t.value > s && (t.inclusive ? r.minimum = t.value : r.exclusiveMinimum = t.value);
    }), e._zod.check = (i)=>{
        (t.inclusive ? i.value >= t.value : i.value > t.value) || i.issues.push({
            origin: n,
            code: "too_small",
            minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
            input: i.value,
            inclusive: t.inclusive,
            inst: e,
            continue: !t.abort
        });
    };
}), R4s = To("$ZodCheckMultipleOf", (e, t)=>{
    S2.init(e, t), e._zod.onattach.push((n)=>{
        var i;
        (i = n._zod.bag).multipleOf ?? (i.multipleOf = t.value);
    }), e._zod.check = (n)=>{
        if (typeof n.value != typeof t.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
        (typeof n.value == "bigint" ? n.value % t.value === BigInt(0) : cvu(n.value, t.value) === 0) || n.issues.push({
            origin: typeof n.value,
            code: "not_multiple_of",
            divisor: t.value,
            input: n.value,
            inst: e,
            continue: !t.abort
        });
    };
}), D4s = To("$ZodCheckNumberFormat", (e, t)=>{
    S2.init(e, t), t.format = t.format || "float64";
    const n = t.format?.includes("int"), i = n ? "int" : "number", [r, s] = X6s[t.format];
    e._zod.onattach.push((o)=>{
        const a = o._zod.bag;
        a.format = t.format, a.minimum = r, a.maximum = s, n && (a.pattern = k4s);
    }), e._zod.check = (o)=>{
        const a = o.value;
        if (n) {
            if (!Number.isInteger(a)) {
                o.issues.push({
                    expected: i,
                    format: t.format,
                    code: "invalid_type",
                    continue: !1,
                    input: a,
                    inst: e
                });
                return;
            }
            if (!Number.isSafeInteger(a)) {
                a > 0 ? o.issues.push({
                    input: a,
                    code: "too_big",
                    maximum: Number.MAX_SAFE_INTEGER,
                    note: "Integers must be within the safe integer range.",
                    inst: e,
                    origin: i,
                    inclusive: !0,
                    continue: !t.abort
                }) : o.issues.push({
                    input: a,
                    code: "too_small",
                    minimum: Number.MIN_SAFE_INTEGER,
                    note: "Integers must be within the safe integer range.",
                    inst: e,
                    origin: i,
                    inclusive: !0,
                    continue: !t.abort
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
            inst: e,
            continue: !t.abort
        }), a > s && o.issues.push({
            origin: "number",
            input: a,
            code: "too_big",
            maximum: s,
            inclusive: !0,
            inst: e,
            continue: !t.abort
        });
    };
}), M4s = To("$ZodCheckBigIntFormat", (e, t)=>{
    S2.init(e, t);
    const [n, i] = Z6s[t.format];
    e._zod.onattach.push((r)=>{
        const s = r._zod.bag;
        s.format = t.format, s.minimum = n, s.maximum = i;
    }), e._zod.check = (r)=>{
        const s = r.value;
        s < n && r.issues.push({
            origin: "bigint",
            input: s,
            code: "too_small",
            minimum: n,
            inclusive: !0,
            inst: e,
            continue: !t.abort
        }), s > i && r.issues.push({
            origin: "bigint",
            input: s,
            code: "too_big",
            maximum: i,
            inclusive: !0,
            inst: e,
            continue: !t.abort
        });
    };
}), P4s = To("$ZodCheckMaxSize", (e, t)=>{
    var n;
    S2.init(e, t), (n = e._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !Ubt(r) && r.size !== void 0;
    }), e._zod.onattach.push((i)=>{
        const r = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        t.maximum < r && (i._zod.bag.maximum = t.maximum);
    }), e._zod.check = (i)=>{
        const r = i.value;
        r.size <= t.maximum || i.issues.push({
            origin: bBi(r),
            code: "too_big",
            maximum: t.maximum,
            inclusive: !0,
            input: r,
            inst: e,
            continue: !t.abort
        });
    };
}), L4s = To("$ZodCheckMinSize", (e, t)=>{
    var n;
    S2.init(e, t), (n = e._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !Ubt(r) && r.size !== void 0;
    }), e._zod.onattach.push((i)=>{
        const r = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        t.minimum > r && (i._zod.bag.minimum = t.minimum);
    }), e._zod.check = (i)=>{
        const r = i.value;
        r.size >= t.minimum || i.issues.push({
            origin: bBi(r),
            code: "too_small",
            minimum: t.minimum,
            inclusive: !0,
            input: r,
            inst: e,
            continue: !t.abort
        });
    };
}), N4s = To("$ZodCheckSizeEquals", (e, t)=>{
    var n;
    S2.init(e, t), (n = e._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !Ubt(r) && r.size !== void 0;
    }), e._zod.onattach.push((i)=>{
        const r = i._zod.bag;
        r.minimum = t.size, r.maximum = t.size, r.size = t.size;
    }), e._zod.check = (i)=>{
        const r = i.value, s = r.size;
        if (s === t.size) return;
        const o = s > t.size;
        i.issues.push({
            origin: bBi(r),
            ...o ? {
                code: "too_big",
                maximum: t.size
            } : {
                code: "too_small",
                minimum: t.size
            },
            inclusive: !0,
            exact: !0,
            input: i.value,
            inst: e,
            continue: !t.abort
        });
    };
}), O4s = To("$ZodCheckMaxLength", (e, t)=>{
    var n;
    S2.init(e, t), (n = e._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !Ubt(r) && r.length !== void 0;
    }), e._zod.onattach.push((i)=>{
        const r = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        t.maximum < r && (i._zod.bag.maximum = t.maximum);
    }), e._zod.check = (i)=>{
        const r = i.value;
        if (r.length <= t.maximum) return;
        const o = yBi(r);
        i.issues.push({
            origin: o,
            code: "too_big",
            maximum: t.maximum,
            inclusive: !0,
            input: r,
            inst: e,
            continue: !t.abort
        });
    };
}), F4s = To("$ZodCheckMinLength", (e, t)=>{
    var n;
    S2.init(e, t), (n = e._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !Ubt(r) && r.length !== void 0;
    }), e._zod.onattach.push((i)=>{
        const r = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        t.minimum > r && (i._zod.bag.minimum = t.minimum);
    }), e._zod.check = (i)=>{
        const r = i.value;
        if (r.length >= t.minimum) return;
        const o = yBi(r);
        i.issues.push({
            origin: o,
            code: "too_small",
            minimum: t.minimum,
            inclusive: !0,
            input: r,
            inst: e,
            continue: !t.abort
        });
    };
}), B4s = To("$ZodCheckLengthEquals", (e, t)=>{
    var n;
    S2.init(e, t), (n = e._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !Ubt(r) && r.length !== void 0;
    }), e._zod.onattach.push((i)=>{
        const r = i._zod.bag;
        r.minimum = t.length, r.maximum = t.length, r.length = t.length;
    }), e._zod.check = (i)=>{
        const r = i.value, s = r.length;
        if (s === t.length) return;
        const o = yBi(r), a = s > t.length;
        i.issues.push({
            origin: o,
            ...a ? {
                code: "too_big",
                maximum: t.length
            } : {
                code: "too_small",
                minimum: t.length
            },
            inclusive: !0,
            exact: !0,
            input: i.value,
            inst: e,
            continue: !t.abort
        });
    };
}), y8t = To("$ZodCheckStringFormat", (e, t)=>{
    var n, i;
    S2.init(e, t), e._zod.onattach.push((r)=>{
        const s = r._zod.bag;
        s.format = t.format, t.pattern && (s.patterns ?? (s.patterns = new Set), s.patterns.add(t.pattern));
    }), t.pattern ? (n = e._zod).check ?? (n.check = (r)=>{
        t.pattern.lastIndex = 0, !t.pattern.test(r.value) && r.issues.push({
            origin: "string",
            code: "invalid_format",
            format: t.format,
            input: r.value,
            ...t.pattern ? {
                pattern: t.pattern.toString()
            } : {},
            inst: e,
            continue: !t.abort
        });
    }) : (i = e._zod).check ?? (i.check = ()=>{});
}), U4s = To("$ZodCheckRegex", (e, t)=>{
    y8t.init(e, t), e._zod.check = (n)=>{
        t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "regex",
            input: n.value,
            pattern: t.pattern.toString(),
            inst: e,
            continue: !t.abort
        });
    };
}), $4s = To("$ZodCheckLowerCase", (e, t)=>{
    t.pattern ?? (t.pattern = E4s), y8t.init(e, t);
}), H4s = To("$ZodCheckUpperCase", (e, t)=>{
    t.pattern ?? (t.pattern = x4s), y8t.init(e, t);
}), W4s = To("$ZodCheckIncludes", (e, t)=>{
    S2.init(e, t);
    const n = K6e(t.includes), i = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
    t.pattern = i, e._zod.onattach.push((r)=>{
        const s = r._zod.bag;
        s.patterns ?? (s.patterns = new Set), s.patterns.add(i);
    }), e._zod.check = (r)=>{
        r.value.includes(t.includes, t.position) || r.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: t.includes,
            input: r.value,
            inst: e,
            continue: !t.abort
        });
    };
}), G4s = To("$ZodCheckStartsWith", (e, t)=>{
    S2.init(e, t);
    const n = new RegExp(`^${K6e(t.prefix)}.*`);
    t.pattern ?? (t.pattern = n), e._zod.onattach.push((i)=>{
        const r = i._zod.bag;
        r.patterns ?? (r.patterns = new Set), r.patterns.add(n);
    }), e._zod.check = (i)=>{
        i.value.startsWith(t.prefix) || i.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: t.prefix,
            input: i.value,
            inst: e,
            continue: !t.abort
        });
    };
}), V4s = To("$ZodCheckEndsWith", (e, t)=>{
    S2.init(e, t);
    const n = new RegExp(`.*${K6e(t.suffix)}$`);
    t.pattern ?? (t.pattern = n), e._zod.onattach.push((i)=>{
        const r = i._zod.bag;
        r.patterns ?? (r.patterns = new Set), r.patterns.add(n);
    }), e._zod.check = (i)=>{
        i.value.endsWith(t.suffix) || i.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: t.suffix,
            input: i.value,
            inst: e,
            continue: !t.abort
        });
    };
}), j4s = To("$ZodCheckProperty", (e, t)=>{
    S2.init(e, t), e._zod.check = (n)=>{
        const i = t.schema._zod.run({
            value: n.value[t.property],
            issues: []
        }, {});
        if (i instanceof Promise) return i.then((r)=>o_u(r, n, t.property));
        o_u(i, n, t.property);
    };
}), q4s = To("$ZodCheckMimeType", (e, t)=>{
    S2.init(e, t);
    const n = new Set(t.mime);
    e._zod.onattach.push((i)=>{
        i._zod.bag.mime = t.mime;
    }), e._zod.check = (i)=>{
        n.has(i.value.type) || i.issues.push({
            code: "invalid_value",
            values: t.mime,
            input: i.value.type,
            inst: e,
            continue: !t.abort
        });
    };
}), z4s = To("$ZodCheckOverwrite", (e, t)=>{
    S2.init(e, t), e._zod.check = (n)=>{
        n.value = t.tx(n.value);
    };
});

}
