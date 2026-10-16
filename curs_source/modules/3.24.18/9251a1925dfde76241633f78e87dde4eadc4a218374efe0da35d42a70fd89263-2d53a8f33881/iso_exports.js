import { _any, _array, _boolean, _custom, _int, _isoDate, _isoDateTime, _isoDuration, _isoTime, _never, _null3, _number, _refine, _string, _unknown, _url, util_exports } from "./util_exports.js";
import { ZodISODate, ZodISODateTime, ZodISODuration, ZodISOTime } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/classic/iso.js";
import { ZodAny2, ZodArray2, ZodBoolean2, ZodCatch2, ZodCustom, ZodDefault2, ZodDiscriminatedUnion2, ZodEnum2, ZodIntersection2, ZodLiteral2, ZodNever2, ZodNonOptional, ZodNull2, ZodNullable2, ZodNumber2, ZodNumberFormat, ZodObject2, ZodOptional2, ZodPipe, ZodPrefault, ZodReadonly2, ZodRecord2, ZodString2, ZodTransform, ZodURL, ZodUnion2, ZodUnknown2 } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/classic/schemas.js";
import { $ZodCheck } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/core/checks.js";
export function datetime2(params) {
    return _isoDateTime(ZodISODateTime, params);
}
export function date2(params) {
    return _isoDate(ZodISODate, params);
}
export function time2(params) {
    return _isoTime(ZodISOTime, params);
}
export function duration2(params) {
    return _isoDuration(ZodISODuration, params);
}
export function string2(params) {
    return _string(ZodString2, params);
}
export function url(params) {
    return _url(ZodURL, params);
}
export function number2(params) {
    return _number(ZodNumber2, params);
}
export function int2(params) {
    return _int(ZodNumberFormat, params);
}
export function boolean2(params) {
    return _boolean(ZodBoolean2, params);
}
export function _null4(params) {
    return _null3(ZodNull2, params);
}
export function any() {
    return _any(ZodAny2);
}
export function unknown() {
    return _unknown(ZodUnknown2);
}
export function never(params) {
    return _never(ZodNever2, params);
}
export function array(element, params) {
    return _array(ZodArray2, element, params);
}
export function object(shape, params) {
    const def = {
        type: "object",
        get shape () {
            util_exports.assignProp(this, "shape", {
                ...shape
            });
            return this.shape;
        },
        ...util_exports.normalizeParams(params)
    };
    return new ZodObject2(def);
}
export function looseObject(shape, params) {
    return new ZodObject2({
        type: "object",
        get shape () {
            util_exports.assignProp(this, "shape", {
                ...shape
            });
            return this.shape;
        },
        catchall: unknown(),
        ...util_exports.normalizeParams(params)
    });
}
export function union(options2, params) {
    return new ZodUnion2({
        type: "union",
        options: options2,
        ...util_exports.normalizeParams(params)
    });
}
export function discriminatedUnion(discriminator, options2, params) {
    return new ZodDiscriminatedUnion2({
        type: "union",
        options: options2,
        discriminator,
        ...util_exports.normalizeParams(params)
    });
}
export function intersection(left, right) {
    return new ZodIntersection2({
        type: "intersection",
        left,
        right
    });
}
export function record(keyType, valueType, params) {
    return new ZodRecord2({
        type: "record",
        keyType,
        valueType,
        ...util_exports.normalizeParams(params)
    });
}
export function _enum(values, params) {
    const entries = Array.isArray(values) ? Object.fromEntries(values.map((v2)=>[
            v2,
            v2
        ])) : values;
    return new ZodEnum2({
        type: "enum",
        entries,
        ...util_exports.normalizeParams(params)
    });
}
export function literal(value, params) {
    return new ZodLiteral2({
        type: "literal",
        values: Array.isArray(value) ? value : [
            value
        ],
        ...util_exports.normalizeParams(params)
    });
}
export function transform(fn) {
    return new ZodTransform({
        type: "transform",
        transform: fn
    });
}
export function optional(innerType) {
    return new ZodOptional2({
        type: "optional",
        innerType
    });
}
export function nullable(innerType) {
    return new ZodNullable2({
        type: "nullable",
        innerType
    });
}
export function _default2(innerType, defaultValue) {
    return new ZodDefault2({
        type: "default",
        innerType,
        get defaultValue () {
            return typeof defaultValue === "function" ? defaultValue() : defaultValue;
        }
    });
}
export function prefault(innerType, defaultValue) {
    return new ZodPrefault({
        type: "prefault",
        innerType,
        get defaultValue () {
            return typeof defaultValue === "function" ? defaultValue() : defaultValue;
        }
    });
}
export function nonoptional(innerType, params) {
    return new ZodNonOptional({
        type: "nonoptional",
        innerType,
        ...util_exports.normalizeParams(params)
    });
}
export function _catch(innerType, catchValue) {
    return new ZodCatch2({
        type: "catch",
        innerType,
        catchValue: typeof catchValue === "function" ? catchValue : ()=>catchValue
    });
}
export function pipe2(in_, out) {
    return new ZodPipe({
        type: "pipe",
        in: in_,
        out
    });
}
export function readonly(innerType) {
    return new ZodReadonly2({
        type: "readonly",
        innerType
    });
}
function check(fn) {
    const ch = new $ZodCheck({
        check: "custom"
    });
    ch._zod.check = fn;
    return ch;
}
export function custom2(fn, _params) {
    return _custom(ZodCustom, fn ?? (()=>true), _params);
}
export function refine(fn, _params = {}) {
    return _refine(ZodCustom, fn, _params);
}
export function superRefine(fn) {
    const ch = check((payload)=>{
        payload.addIssue = (issue2)=>{
            if (typeof issue2 === "string") {
                payload.issues.push(util_exports.issue(issue2, payload.value, ch._zod.def));
            } else {
                const _issue = issue2;
                if (_issue.fatal) _issue.continue = false;
                _issue.code ?? (_issue.code = "custom");
                _issue.input ?? (_issue.input = payload.value);
                _issue.inst ?? (_issue.inst = ch);
                _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
                payload.issues.push(util_exports.issue(_issue));
            }
        };
        return fn(payload.value, payload);
    });
    return ch;
}
export function preprocess(fn, schema2) {
    return pipe2(transform(fn), schema2);
}
export { ZodISODate, ZodISODateTime, ZodISODuration, ZodISOTime };

export var iso_exports = {};
Object.defineProperty(iso_exports, "ZodISODate", {
    enumerable: true,
    get: ()=>ZodISODate
});
Object.defineProperty(iso_exports, "ZodISODateTime", {
    enumerable: true,
    get: ()=>ZodISODateTime
});
Object.defineProperty(iso_exports, "ZodISODuration", {
    enumerable: true,
    get: ()=>ZodISODuration
});
Object.defineProperty(iso_exports, "ZodISOTime", {
    enumerable: true,
    get: ()=>ZodISOTime
});
Object.defineProperty(iso_exports, "date", {
    enumerable: true,
    get: ()=>date2
});
Object.defineProperty(iso_exports, "datetime", {
    enumerable: true,
    get: ()=>datetime2
});
Object.defineProperty(iso_exports, "duration", {
    enumerable: true,
    get: ()=>duration2
});
Object.defineProperty(iso_exports, "time", {
    enumerable: true,
    get: ()=>time2
});
