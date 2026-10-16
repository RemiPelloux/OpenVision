"use strict";
require.d(exports, {
    DG: ()=>g,
    E6: ()=>_,
    J: ()=>b,
    J_: ()=>c,
    Jk: ()=>u,
    KH: ()=>d,
    Kk: ()=>h,
    NI: ()=>y,
    QP: ()=>i,
    RM: ()=>m,
    Tt: ()=>w,
    Yk: ()=>p,
    kH: ()=>v,
    ql: ()=>f,
    sm: ()=>l,
    v$: ()=>S
});
var n = require("./module-47381.js"), o = require("./module-58927.js"), s = require("./module-7246.js");
const i = n.xI("$ZodCheck", (e, t)=>{
    var r;
    e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), a = {
    number: "number",
    bigint: "bigint",
    object: "date"
}, l = n.xI("$ZodCheckLessThan", (e, t)=>{
    i.init(e, t);
    const r = a[typeof t.value];
    e._zod.onattach.push((e)=>{
        const r = e._zod.bag, n = (t.inclusive ? r.maximum : r.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
        t.value < n && (t.inclusive ? r.maximum = t.value : r.exclusiveMaximum = t.value);
    }), e._zod.check = (n)=>{
        (t.inclusive ? n.value <= t.value : n.value < t.value) || n.issues.push({
            origin: r,
            code: "too_big",
            maximum: t.value,
            input: n.value,
            inclusive: t.inclusive,
            inst: e,
            continue: !t.abort
        });
    };
}), c = n.xI("$ZodCheckGreaterThan", (e, t)=>{
    i.init(e, t);
    const r = a[typeof t.value];
    e._zod.onattach.push((e)=>{
        const r = e._zod.bag, n = (t.inclusive ? r.minimum : r.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
        t.value > n && (t.inclusive ? r.minimum = t.value : r.exclusiveMinimum = t.value);
    }), e._zod.check = (n)=>{
        (t.inclusive ? n.value >= t.value : n.value > t.value) || n.issues.push({
            origin: r,
            code: "too_small",
            minimum: t.value,
            input: n.value,
            inclusive: t.inclusive,
            inst: e,
            continue: !t.abort
        });
    };
}), u = n.xI("$ZodCheckMultipleOf", (e, t)=>{
    i.init(e, t), e._zod.onattach.push((e)=>{
        var r;
        (r = e._zod.bag).multipleOf ?? (r.multipleOf = t.value);
    }), e._zod.check = (r)=>{
        if (typeof r.value != typeof t.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
        ("bigint" == typeof r.value ? r.value % t.value === BigInt(0) : 0 === s.LG(r.value, t.value)) || r.issues.push({
            origin: typeof r.value,
            code: "not_multiple_of",
            divisor: t.value,
            input: r.value,
            inst: e,
            continue: !t.abort
        });
    };
}), d = n.xI("$ZodCheckNumberFormat", (e, t)=>{
    i.init(e, t), t.format = t.format || "float64";
    const r = t.format?.includes("int"), n = r ? "int" : "number", [a, l] = s.zH[t.format];
    e._zod.onattach.push((e)=>{
        const n = e._zod.bag;
        n.format = t.format, n.minimum = a, n.maximum = l, r && (n.pattern = o.nd);
    }), e._zod.check = (o)=>{
        const s = o.value;
        if (r) {
            if (!Number.isInteger(s)) return void o.issues.push({
                expected: n,
                format: t.format,
                code: "invalid_type",
                input: s,
                inst: e
            });
            if (!Number.isSafeInteger(s)) return void (s > 0 ? o.issues.push({
                input: s,
                code: "too_big",
                maximum: Number.MAX_SAFE_INTEGER,
                note: "Integers must be within the safe integer range.",
                inst: e,
                origin: n,
                continue: !t.abort
            }) : o.issues.push({
                input: s,
                code: "too_small",
                minimum: Number.MIN_SAFE_INTEGER,
                note: "Integers must be within the safe integer range.",
                inst: e,
                origin: n,
                continue: !t.abort
            }));
        }
        s < a && o.issues.push({
            origin: "number",
            input: s,
            code: "too_small",
            minimum: a,
            inclusive: !0,
            inst: e,
            continue: !t.abort
        }), s > l && o.issues.push({
            origin: "number",
            input: s,
            code: "too_big",
            maximum: l,
            inst: e
        });
    };
}), p = n.xI("$ZodCheckMaxLength", (e, t)=>{
    var r;
    i.init(e, t), (r = e._zod.def).when ?? (r.when = (e)=>{
        const t = e.value;
        return !s.cl(t) && void 0 !== t.length;
    }), e._zod.onattach.push((e)=>{
        const r = e._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        t.maximum < r && (e._zod.bag.maximum = t.maximum);
    }), e._zod.check = (r)=>{
        const n = r.value;
        if (n.length <= t.maximum) return;
        const o = s.Rc(n);
        r.issues.push({
            origin: o,
            code: "too_big",
            maximum: t.maximum,
            inclusive: !0,
            input: n,
            inst: e,
            continue: !t.abort
        });
    };
}), h = n.xI("$ZodCheckMinLength", (e, t)=>{
    var r;
    i.init(e, t), (r = e._zod.def).when ?? (r.when = (e)=>{
        const t = e.value;
        return !s.cl(t) && void 0 !== t.length;
    }), e._zod.onattach.push((e)=>{
        const r = e._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        t.minimum > r && (e._zod.bag.minimum = t.minimum);
    }), e._zod.check = (r)=>{
        const n = r.value;
        if (n.length >= t.minimum) return;
        const o = s.Rc(n);
        r.issues.push({
            origin: o,
            code: "too_small",
            minimum: t.minimum,
            inclusive: !0,
            input: n,
            inst: e,
            continue: !t.abort
        });
    };
}), m = n.xI("$ZodCheckLengthEquals", (e, t)=>{
    var r;
    i.init(e, t), (r = e._zod.def).when ?? (r.when = (e)=>{
        const t = e.value;
        return !s.cl(t) && void 0 !== t.length;
    }), e._zod.onattach.push((e)=>{
        const r = e._zod.bag;
        r.minimum = t.length, r.maximum = t.length, r.length = t.length;
    }), e._zod.check = (r)=>{
        const n = r.value, o = n.length;
        if (o === t.length) return;
        const i = s.Rc(n), a = o > t.length;
        r.issues.push({
            origin: i,
            ...a ? {
                code: "too_big",
                maximum: t.length
            } : {
                code: "too_small",
                minimum: t.length
            },
            inclusive: !0,
            exact: !0,
            input: r.value,
            inst: e,
            continue: !t.abort
        });
    };
}), f = n.xI("$ZodCheckStringFormat", (e, t)=>{
    var r, n;
    i.init(e, t), e._zod.onattach.push((e)=>{
        const r = e._zod.bag;
        r.format = t.format, t.pattern && (r.patterns ?? (r.patterns = new Set), r.patterns.add(t.pattern));
    }), t.pattern ? (r = e._zod).check ?? (r.check = (r)=>{
        t.pattern.lastIndex = 0, t.pattern.test(r.value) || r.issues.push({
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
    }) : (n = e._zod).check ?? (n.check = ()=>{});
}), g = n.xI("$ZodCheckRegex", (e, t)=>{
    f.init(e, t), e._zod.check = (r)=>{
        t.pattern.lastIndex = 0, t.pattern.test(r.value) || r.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "regex",
            input: r.value,
            pattern: t.pattern.toString(),
            inst: e,
            continue: !t.abort
        });
    };
}), y = n.xI("$ZodCheckLowerCase", (e, t)=>{
    t.pattern ?? (t.pattern = o.AC), f.init(e, t);
}), v = n.xI("$ZodCheckUpperCase", (e, t)=>{
    t.pattern ?? (t.pattern = o.Zv), f.init(e, t);
}), w = n.xI("$ZodCheckIncludes", (e, t)=>{
    i.init(e, t);
    const r = s.$f(t.includes), n = new RegExp("number" == typeof t.position ? `^.{${t.position}}${r}` : r);
    t.pattern = n, e._zod.onattach.push((e)=>{
        const t = e._zod.bag;
        t.patterns ?? (t.patterns = new Set), t.patterns.add(n);
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
}), b = n.xI("$ZodCheckStartsWith", (e, t)=>{
    i.init(e, t);
    const r = new RegExp(`^${s.$f(t.prefix)}.*`);
    t.pattern ?? (t.pattern = r), e._zod.onattach.push((e)=>{
        const t = e._zod.bag;
        t.patterns ?? (t.patterns = new Set), t.patterns.add(r);
    }), e._zod.check = (r)=>{
        r.value.startsWith(t.prefix) || r.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: t.prefix,
            input: r.value,
            inst: e,
            continue: !t.abort
        });
    };
}), _ = n.xI("$ZodCheckEndsWith", (e, t)=>{
    i.init(e, t);
    const r = new RegExp(`.*${s.$f(t.suffix)}$`);
    t.pattern ?? (t.pattern = r), e._zod.onattach.push((e)=>{
        const t = e._zod.bag;
        t.patterns ?? (t.patterns = new Set), t.patterns.add(r);
    }), e._zod.check = (r)=>{
        r.value.endsWith(t.suffix) || r.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: t.suffix,
            input: r.value,
            inst: e,
            continue: !t.abort
        });
    };
});
const S = n.xI("$ZodCheckOverwrite", (e, t)=>{
    i.init(e, t), e._zod.check = (e)=>{
        e.value = t.tx(e.value);
    };
});
