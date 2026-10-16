"use strict";
require.d(exports, {
    DG: ()=>g,
    E6: ()=>A,
    J: ()=>_,
    J_: ()=>l,
    Jk: ()=>u,
    KH: ()=>d,
    Kk: ()=>m,
    NI: ()=>y,
    QP: ()=>i,
    RM: ()=>h,
    Tt: ()=>v,
    Yk: ()=>p,
    kH: ()=>w,
    ql: ()=>f,
    sm: ()=>c,
    v$: ()=>S
});
var n = require("./module-47381.js"), s = require("./module-58927.js"), o = require("./module-7246.js");
const i = n.xI("$ZodCheck", (e, t)=>{
    var r;
    e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), a = {
    number: "number",
    bigint: "bigint",
    object: "date"
}, c = n.xI("$ZodCheckLessThan", (e, t)=>{
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
}), l = n.xI("$ZodCheckGreaterThan", (e, t)=>{
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
        ("bigint" == typeof r.value ? r.value % t.value === BigInt(0) : 0 === o.LG(r.value, t.value)) || r.issues.push({
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
    const r = t.format?.includes("int"), n = r ? "int" : "number", [a, c] = o.zH[t.format];
    e._zod.onattach.push((e)=>{
        const n = e._zod.bag;
        n.format = t.format, n.minimum = a, n.maximum = c, r && (n.pattern = s.nd);
    }), e._zod.check = (s)=>{
        const o = s.value;
        if (r) {
            if (!Number.isInteger(o)) return void s.issues.push({
                expected: n,
                format: t.format,
                code: "invalid_type",
                input: o,
                inst: e
            });
            if (!Number.isSafeInteger(o)) return void (o > 0 ? s.issues.push({
                input: o,
                code: "too_big",
                maximum: Number.MAX_SAFE_INTEGER,
                note: "Integers must be within the safe integer range.",
                inst: e,
                origin: n,
                continue: !t.abort
            }) : s.issues.push({
                input: o,
                code: "too_small",
                minimum: Number.MIN_SAFE_INTEGER,
                note: "Integers must be within the safe integer range.",
                inst: e,
                origin: n,
                continue: !t.abort
            }));
        }
        o < a && s.issues.push({
            origin: "number",
            input: o,
            code: "too_small",
            minimum: a,
            inclusive: !0,
            inst: e,
            continue: !t.abort
        }), o > c && s.issues.push({
            origin: "number",
            input: o,
            code: "too_big",
            maximum: c,
            inst: e
        });
    };
}), p = n.xI("$ZodCheckMaxLength", (e, t)=>{
    var r;
    i.init(e, t), (r = e._zod.def).when ?? (r.when = (e)=>{
        const t = e.value;
        return !o.cl(t) && void 0 !== t.length;
    }), e._zod.onattach.push((e)=>{
        const r = e._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        t.maximum < r && (e._zod.bag.maximum = t.maximum);
    }), e._zod.check = (r)=>{
        const n = r.value;
        if (n.length <= t.maximum) return;
        const s = o.Rc(n);
        r.issues.push({
            origin: s,
            code: "too_big",
            maximum: t.maximum,
            inclusive: !0,
            input: n,
            inst: e,
            continue: !t.abort
        });
    };
}), m = n.xI("$ZodCheckMinLength", (e, t)=>{
    var r;
    i.init(e, t), (r = e._zod.def).when ?? (r.when = (e)=>{
        const t = e.value;
        return !o.cl(t) && void 0 !== t.length;
    }), e._zod.onattach.push((e)=>{
        const r = e._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        t.minimum > r && (e._zod.bag.minimum = t.minimum);
    }), e._zod.check = (r)=>{
        const n = r.value;
        if (n.length >= t.minimum) return;
        const s = o.Rc(n);
        r.issues.push({
            origin: s,
            code: "too_small",
            minimum: t.minimum,
            inclusive: !0,
            input: n,
            inst: e,
            continue: !t.abort
        });
    };
}), h = n.xI("$ZodCheckLengthEquals", (e, t)=>{
    var r;
    i.init(e, t), (r = e._zod.def).when ?? (r.when = (e)=>{
        const t = e.value;
        return !o.cl(t) && void 0 !== t.length;
    }), e._zod.onattach.push((e)=>{
        const r = e._zod.bag;
        r.minimum = t.length, r.maximum = t.length, r.length = t.length;
    }), e._zod.check = (r)=>{
        const n = r.value, s = n.length;
        if (s === t.length) return;
        const i = o.Rc(n), a = s > t.length;
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
    t.pattern ?? (t.pattern = s.AC), f.init(e, t);
}), w = n.xI("$ZodCheckUpperCase", (e, t)=>{
    t.pattern ?? (t.pattern = s.Zv), f.init(e, t);
}), v = n.xI("$ZodCheckIncludes", (e, t)=>{
    i.init(e, t);
    const r = o.$f(t.includes), n = new RegExp("number" == typeof t.position ? `^.{${t.position}}${r}` : r);
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
}), _ = n.xI("$ZodCheckStartsWith", (e, t)=>{
    i.init(e, t);
    const r = new RegExp(`^${o.$f(t.prefix)}.*`);
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
}), A = n.xI("$ZodCheckEndsWith", (e, t)=>{
    i.init(e, t);
    const r = new RegExp(`.*${o.$f(t.suffix)}$`);
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
