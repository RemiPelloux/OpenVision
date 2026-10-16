import { Jrd, Pa, Pet, j6t, mfr, pfr, trd } from "./SZu.js";
import { uQn } from "./core.js";
import { Bxo, Gxo, Hxo, Wxo } from "./regexes.js";
import { E } from "./tslib.es6.js";
import { hxo, ky, pxo } from "./util.js";
var f4, qxo, Afr, Rfr, zxo, Vxo, Kxo, Yxo, Xxo, Zxo, Qxo, Jxo, eAo, _hn, tAo, nAo, iAo, rAo, sAo, oAo, aAo, lAo, cAo;
export { Afr, Jxo, Kxo, Qxo, Rfr, Vxo, Xxo, Yxo, Zxo, _hn, aAo, cAo, eAo, f4, iAo, lAo, nAo, oAo, qxo, rAo, sAo, tAo, zxo };
var __wakaru_uAo_initialized = false;
export function uAo() {
if (__wakaru_uAo_initialized) return;
__wakaru_uAo_initialized = true;
E(), uQn(), Gxo(), ky(), f4 = Pa("$ZodCheck", (t, e)=>{
    var n;
    t._zod ?? (t._zod = {}), t._zod.def = e, (n = t._zod).onattach ?? (n.onattach = []);
}), qxo = {
    number: "number",
    bigint: "bigint",
    object: "date"
}, Afr = Pa("$ZodCheckLessThan", (t, e)=>{
    f4.init(t, e);
    const n = qxo[typeof e.value];
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
}), Rfr = Pa("$ZodCheckGreaterThan", (t, e)=>{
    f4.init(t, e);
    const n = qxo[typeof e.value];
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
}), zxo = Pa("$ZodCheckMultipleOf", (t, e)=>{
    f4.init(t, e), t._zod.onattach.push((n)=>{
        var i;
        (i = n._zod.bag).multipleOf ?? (i.multipleOf = e.value);
    }), t._zod.check = (n)=>{
        if (typeof n.value != typeof e.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
        (typeof n.value == "bigint" ? n.value % e.value === BigInt(0) : trd(n.value, e.value) === 0) || n.issues.push({
            origin: typeof n.value,
            code: "not_multiple_of",
            divisor: e.value,
            input: n.value,
            inst: t,
            continue: !e.abort
        });
    };
}), Vxo = Pa("$ZodCheckNumberFormat", (t, e)=>{
    f4.init(t, e), e.format = e.format || "float64";
    const n = e.format?.includes("int"), i = n ? "int" : "number", [r, s] = hxo[e.format];
    t._zod.onattach.push((o)=>{
        const a = o._zod.bag;
        a.format = e.format, a.minimum = r, a.maximum = s, n && (a.pattern = Bxo);
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
}), Kxo = Pa("$ZodCheckBigIntFormat", (t, e)=>{
    f4.init(t, e);
    const [n, i] = pxo[e.format];
    t._zod.onattach.push((r)=>{
        const s = r._zod.bag;
        s.format = e.format, s.minimum = n, s.maximum = i;
    }), t._zod.check = (r)=>{
        const s = r.value;
        s < n && r.issues.push({
            origin: "bigint",
            input: s,
            code: "too_small",
            minimum: n,
            inclusive: !0,
            inst: t,
            continue: !e.abort
        }), s > i && r.issues.push({
            origin: "bigint",
            input: s,
            code: "too_big",
            maximum: i,
            inclusive: !0,
            inst: t,
            continue: !e.abort
        });
    };
}), Yxo = Pa("$ZodCheckMaxSize", (t, e)=>{
    var n;
    f4.init(t, e), (n = t._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !j6t(r) && r.size !== void 0;
    }), t._zod.onattach.push((i)=>{
        const r = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        e.maximum < r && (i._zod.bag.maximum = e.maximum);
    }), t._zod.check = (i)=>{
        const r = i.value;
        r.size <= e.maximum || i.issues.push({
            origin: pfr(r),
            code: "too_big",
            maximum: e.maximum,
            inclusive: !0,
            input: r,
            inst: t,
            continue: !e.abort
        });
    };
}), Xxo = Pa("$ZodCheckMinSize", (t, e)=>{
    var n;
    f4.init(t, e), (n = t._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !j6t(r) && r.size !== void 0;
    }), t._zod.onattach.push((i)=>{
        const r = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        e.minimum > r && (i._zod.bag.minimum = e.minimum);
    }), t._zod.check = (i)=>{
        const r = i.value;
        r.size >= e.minimum || i.issues.push({
            origin: pfr(r),
            code: "too_small",
            minimum: e.minimum,
            inclusive: !0,
            input: r,
            inst: t,
            continue: !e.abort
        });
    };
}), Zxo = Pa("$ZodCheckSizeEquals", (t, e)=>{
    var n;
    f4.init(t, e), (n = t._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !j6t(r) && r.size !== void 0;
    }), t._zod.onattach.push((i)=>{
        const r = i._zod.bag;
        r.minimum = e.size, r.maximum = e.size, r.size = e.size;
    }), t._zod.check = (i)=>{
        const r = i.value, s = r.size;
        if (s === e.size) return;
        const o = s > e.size;
        i.issues.push({
            origin: pfr(r),
            ...o ? {
                code: "too_big",
                maximum: e.size
            } : {
                code: "too_small",
                minimum: e.size
            },
            inclusive: !0,
            exact: !0,
            input: i.value,
            inst: t,
            continue: !e.abort
        });
    };
}), Qxo = Pa("$ZodCheckMaxLength", (t, e)=>{
    var n;
    f4.init(t, e), (n = t._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !j6t(r) && r.length !== void 0;
    }), t._zod.onattach.push((i)=>{
        const r = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        e.maximum < r && (i._zod.bag.maximum = e.maximum);
    }), t._zod.check = (i)=>{
        const r = i.value;
        if (r.length <= e.maximum) return;
        const o = mfr(r);
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
}), Jxo = Pa("$ZodCheckMinLength", (t, e)=>{
    var n;
    f4.init(t, e), (n = t._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !j6t(r) && r.length !== void 0;
    }), t._zod.onattach.push((i)=>{
        const r = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        e.minimum > r && (i._zod.bag.minimum = e.minimum);
    }), t._zod.check = (i)=>{
        const r = i.value;
        if (r.length >= e.minimum) return;
        const o = mfr(r);
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
}), eAo = Pa("$ZodCheckLengthEquals", (t, e)=>{
    var n;
    f4.init(t, e), (n = t._zod.def).when ?? (n.when = (i)=>{
        const r = i.value;
        return !j6t(r) && r.length !== void 0;
    }), t._zod.onattach.push((i)=>{
        const r = i._zod.bag;
        r.minimum = e.length, r.maximum = e.length, r.length = e.length;
    }), t._zod.check = (i)=>{
        const r = i.value, s = r.length;
        if (s === e.length) return;
        const o = mfr(r), a = s > e.length;
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
}), _hn = Pa("$ZodCheckStringFormat", (t, e)=>{
    var n, i;
    f4.init(t, e), t._zod.onattach.push((r)=>{
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
}), tAo = Pa("$ZodCheckRegex", (t, e)=>{
    _hn.init(t, e), t._zod.check = (n)=>{
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
}), nAo = Pa("$ZodCheckLowerCase", (t, e)=>{
    e.pattern ?? (e.pattern = Hxo), _hn.init(t, e);
}), iAo = Pa("$ZodCheckUpperCase", (t, e)=>{
    e.pattern ?? (e.pattern = Wxo), _hn.init(t, e);
}), rAo = Pa("$ZodCheckIncludes", (t, e)=>{
    f4.init(t, e);
    const n = Pet(e.includes), i = new RegExp(typeof e.position == "number" ? `^.{${e.position}}${n}` : n);
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
}), sAo = Pa("$ZodCheckStartsWith", (t, e)=>{
    f4.init(t, e);
    const n = new RegExp(`^${Pet(e.prefix)}.*`);
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
}), oAo = Pa("$ZodCheckEndsWith", (t, e)=>{
    f4.init(t, e);
    const n = new RegExp(`.*${Pet(e.suffix)}$`);
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
}), aAo = Pa("$ZodCheckProperty", (t, e)=>{
    f4.init(t, e), t._zod.check = (n)=>{
        const i = e.schema._zod.run({
            value: n.value[e.property],
            issues: []
        }, {});
        if (i instanceof Promise) return i.then((r)=>Jrd(r, n, e.property));
        Jrd(i, n, e.property);
    };
}), lAo = Pa("$ZodCheckMimeType", (t, e)=>{
    f4.init(t, e);
    const n = new Set(e.mime);
    t._zod.onattach.push((i)=>{
        i._zod.bag.mime = e.mime;
    }), t._zod.check = (i)=>{
        n.has(i.value.type) || i.issues.push({
            code: "invalid_value",
            values: e.mime,
            input: i.value.type,
            inst: t,
            continue: !e.abort
        });
    };
}), cAo = Pa("$ZodCheckOverwrite", (t, e)=>{
    f4.init(t, e), t._zod.check = (n)=>{
        n.value = e.tx(n.value);
    };
});

}
