import { $constructor } from "../../../../../../../esm_exports8.js";
import { _catch, _default2, _enum, array, date2, datetime2, duration2, int2, intersection, never, nonoptional, nullable, optional, pipe2, prefault, readonly, refine, superRefine, time2, transform, union, unknown } from "../../../../../../../iso_exports.js";
import { init_checks2 } from "./checks.js";
import { init_iso } from "./iso.js";
import { init_parse3, parse8, parseAsync2, safeParse2, safeParseAsync2 } from "./parse.js";
import { init_core4 } from "../core/index.js";
import { globalRegistry } from "../core/registries.js";
import { $ZodAny, $ZodArray, $ZodBase64, $ZodBase64URL, $ZodBigInt, $ZodBoolean, $ZodCIDRv4, $ZodCIDRv6, $ZodCUID, $ZodCUID2, $ZodCatch, $ZodCustom, $ZodDate, $ZodDefault, $ZodDiscriminatedUnion, $ZodE164, $ZodEmail, $ZodEmoji, $ZodEnum, $ZodGUID, $ZodIPv4, $ZodIPv6, $ZodIntersection, $ZodJWT, $ZodKSUID, $ZodLiteral, $ZodNanoID, $ZodNever, $ZodNonOptional, $ZodNull, $ZodNullable, $ZodNumber, $ZodNumberFormat, $ZodObject, $ZodOptional, $ZodPipe, $ZodPrefault, $ZodReadonly, $ZodRecord, $ZodString, $ZodStringFormat, $ZodTransform, $ZodType, $ZodULID, $ZodURL, $ZodUUID, $ZodUnion, $ZodUnknown, $ZodXID } from "../core/schemas.js";
import { _base64, _base64url, _cidrv4, _cidrv6, _cuid, _cuid2, _e164, _email, _emoji2, _endsWith, _gt, _gte, _guid, _includes, _ipv4, _ipv6, _jwt, _ksuid, _length, _lowercase, _lt, _lte, _maxLength, _minLength, _multipleOf, _nanoid, _normalize, _overwrite, _regex, _startsWith, _toLowerCase, _toUpperCase, _trim, _ulid, _uppercase, _url, _uuid, _uuidv4, _uuidv6, _uuidv7, _xid, clone2, util_exports } from "../../../../../../../util_exports.js";
var ZodType2, _ZodString, ZodString2, ZodStringFormat, ZodEmail, ZodGUID, ZodUUID, ZodURL, ZodEmoji, ZodNanoID, ZodCUID, ZodCUID2, ZodULID, ZodXID, ZodKSUID, ZodIPv4, ZodIPv6, ZodCIDRv4, ZodCIDRv6, ZodBase64, ZodBase64URL, ZodE164, ZodJWT, ZodNumber2, ZodNumberFormat, ZodBoolean2, ZodBigInt2, ZodNull2, ZodAny2, ZodUnknown2, ZodNever2, ZodDate2, ZodArray2, ZodObject2, ZodUnion2, ZodDiscriminatedUnion2, ZodIntersection2, ZodRecord2, ZodEnum2, ZodLiteral2, ZodTransform, ZodOptional2, ZodNullable2, ZodDefault2, ZodPrefault, ZodNonOptional, ZodCatch2, ZodPipe, ZodReadonly2, ZodCustom;
export { ZodAny2, ZodArray2, ZodBase64, ZodBase64URL, ZodBigInt2, ZodBoolean2, ZodCIDRv4, ZodCIDRv6, ZodCUID, ZodCUID2, ZodCatch2, ZodCustom, ZodDate2, ZodDefault2, ZodDiscriminatedUnion2, ZodE164, ZodEmail, ZodEmoji, ZodEnum2, ZodGUID, ZodIPv4, ZodIPv6, ZodIntersection2, ZodJWT, ZodKSUID, ZodLiteral2, ZodNanoID, ZodNever2, ZodNonOptional, ZodNull2, ZodNullable2, ZodNumber2, ZodNumberFormat, ZodObject2, ZodOptional2, ZodPipe, ZodPrefault, ZodReadonly2, ZodRecord2, ZodString2, ZodStringFormat, ZodTransform, ZodType2, ZodULID, ZodURL, ZodUUID, ZodUnion2, ZodUnknown2, ZodXID, _ZodString };
var __wakaru_init_schemas2_initialized = false;
export function init_schemas2() {
if (__wakaru_init_schemas2_initialized) return;
__wakaru_init_schemas2_initialized = true;
init_core4();
init_core4();
init_checks2();
init_iso();
init_parse3();
ZodType2 = $constructor("ZodType", (inst, def)=>{
    $ZodType.init(inst, def);
    inst.def = def;
    Object.defineProperty(inst, "_def", {
        value: def
    });
    inst.check = (...checks)=>{
        return inst.clone({
            ...def,
            checks: [
                ...def.checks ?? [],
                ...checks.map((ch)=>typeof ch === "function" ? {
                        _zod: {
                            check: ch,
                            def: {
                                check: "custom"
                            },
                            onattach: []
                        }
                    } : ch)
            ]
        });
    };
    inst.clone = (def2, params)=>clone2(inst, def2, params);
    inst.brand = ()=>inst;
    inst.register = ((reg, meta)=>{
        reg.add(inst, meta);
        return inst;
    });
    inst.parse = (data, params)=>parse8(inst, data, params, {
            callee: inst.parse
        });
    inst.safeParse = (data, params)=>safeParse2(inst, data, params);
    inst.parseAsync = async (data, params)=>parseAsync2(inst, data, params, {
            callee: inst.parseAsync
        });
    inst.safeParseAsync = async (data, params)=>safeParseAsync2(inst, data, params);
    inst.spa = inst.safeParseAsync;
    inst.refine = (check2, params)=>inst.check(refine(check2, params));
    inst.superRefine = (refinement)=>inst.check(superRefine(refinement));
    inst.overwrite = (fn)=>inst.check(_overwrite(fn));
    inst.optional = ()=>optional(inst);
    inst.nullable = ()=>nullable(inst);
    inst.nullish = ()=>optional(nullable(inst));
    inst.nonoptional = (params)=>nonoptional(inst, params);
    inst.array = ()=>array(inst);
    inst.or = (arg)=>union([
            inst,
            arg
        ]);
    inst.and = (arg)=>intersection(inst, arg);
    inst.transform = (tx)=>pipe2(inst, transform(tx));
    inst.default = (def2)=>_default2(inst, def2);
    inst.prefault = (def2)=>prefault(inst, def2);
    inst.catch = (params)=>_catch(inst, params);
    inst.pipe = (target)=>pipe2(inst, target);
    inst.readonly = ()=>readonly(inst);
    inst.describe = (description3)=>{
        const cl = inst.clone();
        globalRegistry.add(cl, {
            description: description3
        });
        return cl;
    };
    Object.defineProperty(inst, "description", {
        get () {
            return globalRegistry.get(inst)?.description;
        },
        configurable: true
    });
    inst.meta = (...args)=>{
        if (args.length === 0) {
            return globalRegistry.get(inst);
        }
        const cl = inst.clone();
        globalRegistry.add(cl, args[0]);
        return cl;
    };
    inst.isOptional = ()=>inst.safeParse(void 0).success;
    inst.isNullable = ()=>inst.safeParse(null).success;
    return inst;
});
_ZodString = $constructor("_ZodString", (inst, def)=>{
    $ZodString.init(inst, def);
    ZodType2.init(inst, def);
    const bag = inst._zod.bag;
    inst.format = bag.format ?? null;
    inst.minLength = bag.minimum ?? null;
    inst.maxLength = bag.maximum ?? null;
    inst.regex = (...args)=>inst.check(_regex(...args));
    inst.includes = (...args)=>inst.check(_includes(...args));
    inst.startsWith = (...args)=>inst.check(_startsWith(...args));
    inst.endsWith = (...args)=>inst.check(_endsWith(...args));
    inst.min = (...args)=>inst.check(_minLength(...args));
    inst.max = (...args)=>inst.check(_maxLength(...args));
    inst.length = (...args)=>inst.check(_length(...args));
    inst.nonempty = (...args)=>inst.check(_minLength(1, ...args));
    inst.lowercase = (params)=>inst.check(_lowercase(params));
    inst.uppercase = (params)=>inst.check(_uppercase(params));
    inst.trim = ()=>inst.check(_trim());
    inst.normalize = (...args)=>inst.check(_normalize(...args));
    inst.toLowerCase = ()=>inst.check(_toLowerCase());
    inst.toUpperCase = ()=>inst.check(_toUpperCase());
});
ZodString2 = $constructor("ZodString", (inst, def)=>{
    $ZodString.init(inst, def);
    _ZodString.init(inst, def);
    inst.email = (params)=>inst.check(_email(ZodEmail, params));
    inst.url = (params)=>inst.check(_url(ZodURL, params));
    inst.jwt = (params)=>inst.check(_jwt(ZodJWT, params));
    inst.emoji = (params)=>inst.check(_emoji2(ZodEmoji, params));
    inst.guid = (params)=>inst.check(_guid(ZodGUID, params));
    inst.uuid = (params)=>inst.check(_uuid(ZodUUID, params));
    inst.uuidv4 = (params)=>inst.check(_uuidv4(ZodUUID, params));
    inst.uuidv6 = (params)=>inst.check(_uuidv6(ZodUUID, params));
    inst.uuidv7 = (params)=>inst.check(_uuidv7(ZodUUID, params));
    inst.nanoid = (params)=>inst.check(_nanoid(ZodNanoID, params));
    inst.guid = (params)=>inst.check(_guid(ZodGUID, params));
    inst.cuid = (params)=>inst.check(_cuid(ZodCUID, params));
    inst.cuid2 = (params)=>inst.check(_cuid2(ZodCUID2, params));
    inst.ulid = (params)=>inst.check(_ulid(ZodULID, params));
    inst.base64 = (params)=>inst.check(_base64(ZodBase64, params));
    inst.base64url = (params)=>inst.check(_base64url(ZodBase64URL, params));
    inst.xid = (params)=>inst.check(_xid(ZodXID, params));
    inst.ksuid = (params)=>inst.check(_ksuid(ZodKSUID, params));
    inst.ipv4 = (params)=>inst.check(_ipv4(ZodIPv4, params));
    inst.ipv6 = (params)=>inst.check(_ipv6(ZodIPv6, params));
    inst.cidrv4 = (params)=>inst.check(_cidrv4(ZodCIDRv4, params));
    inst.cidrv6 = (params)=>inst.check(_cidrv6(ZodCIDRv6, params));
    inst.e164 = (params)=>inst.check(_e164(ZodE164, params));
    inst.datetime = (params)=>inst.check(datetime2(params));
    inst.date = (params)=>inst.check(date2(params));
    inst.time = (params)=>inst.check(time2(params));
    inst.duration = (params)=>inst.check(duration2(params));
});
ZodStringFormat = $constructor("ZodStringFormat", (inst, def)=>{
    $ZodStringFormat.init(inst, def);
    _ZodString.init(inst, def);
});
ZodEmail = $constructor("ZodEmail", (inst, def)=>{
    $ZodEmail.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodGUID = $constructor("ZodGUID", (inst, def)=>{
    $ZodGUID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodUUID = $constructor("ZodUUID", (inst, def)=>{
    $ZodUUID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodURL = $constructor("ZodURL", (inst, def)=>{
    $ZodURL.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodEmoji = $constructor("ZodEmoji", (inst, def)=>{
    $ZodEmoji.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodNanoID = $constructor("ZodNanoID", (inst, def)=>{
    $ZodNanoID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodCUID = $constructor("ZodCUID", (inst, def)=>{
    $ZodCUID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodCUID2 = $constructor("ZodCUID2", (inst, def)=>{
    $ZodCUID2.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodULID = $constructor("ZodULID", (inst, def)=>{
    $ZodULID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodXID = $constructor("ZodXID", (inst, def)=>{
    $ZodXID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodKSUID = $constructor("ZodKSUID", (inst, def)=>{
    $ZodKSUID.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodIPv4 = $constructor("ZodIPv4", (inst, def)=>{
    $ZodIPv4.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodIPv6 = $constructor("ZodIPv6", (inst, def)=>{
    $ZodIPv6.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodCIDRv4 = $constructor("ZodCIDRv4", (inst, def)=>{
    $ZodCIDRv4.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodCIDRv6 = $constructor("ZodCIDRv6", (inst, def)=>{
    $ZodCIDRv6.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodBase64 = $constructor("ZodBase64", (inst, def)=>{
    $ZodBase64.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodBase64URL = $constructor("ZodBase64URL", (inst, def)=>{
    $ZodBase64URL.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodE164 = $constructor("ZodE164", (inst, def)=>{
    $ZodE164.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodJWT = $constructor("ZodJWT", (inst, def)=>{
    $ZodJWT.init(inst, def);
    ZodStringFormat.init(inst, def);
});
ZodNumber2 = $constructor("ZodNumber", (inst, def)=>{
    $ZodNumber.init(inst, def);
    ZodType2.init(inst, def);
    inst.gt = (value, params)=>inst.check(_gt(value, params));
    inst.gte = (value, params)=>inst.check(_gte(value, params));
    inst.min = (value, params)=>inst.check(_gte(value, params));
    inst.lt = (value, params)=>inst.check(_lt(value, params));
    inst.lte = (value, params)=>inst.check(_lte(value, params));
    inst.max = (value, params)=>inst.check(_lte(value, params));
    inst.int = (params)=>inst.check(int2(params));
    inst.safe = (params)=>inst.check(int2(params));
    inst.positive = (params)=>inst.check(_gt(0, params));
    inst.nonnegative = (params)=>inst.check(_gte(0, params));
    inst.negative = (params)=>inst.check(_lt(0, params));
    inst.nonpositive = (params)=>inst.check(_lte(0, params));
    inst.multipleOf = (value, params)=>inst.check(_multipleOf(value, params));
    inst.step = (value, params)=>inst.check(_multipleOf(value, params));
    inst.finite = ()=>inst;
    const bag = inst._zod.bag;
    inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
    inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
    inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? 0.5);
    inst.isFinite = true;
    inst.format = bag.format ?? null;
});
ZodNumberFormat = $constructor("ZodNumberFormat", (inst, def)=>{
    $ZodNumberFormat.init(inst, def);
    ZodNumber2.init(inst, def);
});
ZodBoolean2 = $constructor("ZodBoolean", (inst, def)=>{
    $ZodBoolean.init(inst, def);
    ZodType2.init(inst, def);
});
ZodBigInt2 = $constructor("ZodBigInt", (inst, def)=>{
    $ZodBigInt.init(inst, def);
    ZodType2.init(inst, def);
    inst.gte = (value, params)=>inst.check(_gte(value, params));
    inst.min = (value, params)=>inst.check(_gte(value, params));
    inst.gt = (value, params)=>inst.check(_gt(value, params));
    inst.gte = (value, params)=>inst.check(_gte(value, params));
    inst.min = (value, params)=>inst.check(_gte(value, params));
    inst.lt = (value, params)=>inst.check(_lt(value, params));
    inst.lte = (value, params)=>inst.check(_lte(value, params));
    inst.max = (value, params)=>inst.check(_lte(value, params));
    inst.positive = (params)=>inst.check(_gt(BigInt(0), params));
    inst.negative = (params)=>inst.check(_lt(BigInt(0), params));
    inst.nonpositive = (params)=>inst.check(_lte(BigInt(0), params));
    inst.nonnegative = (params)=>inst.check(_gte(BigInt(0), params));
    inst.multipleOf = (value, params)=>inst.check(_multipleOf(value, params));
    const bag = inst._zod.bag;
    inst.minValue = bag.minimum ?? null;
    inst.maxValue = bag.maximum ?? null;
    inst.format = bag.format ?? null;
});
ZodNull2 = $constructor("ZodNull", (inst, def)=>{
    $ZodNull.init(inst, def);
    ZodType2.init(inst, def);
});
ZodAny2 = $constructor("ZodAny", (inst, def)=>{
    $ZodAny.init(inst, def);
    ZodType2.init(inst, def);
});
ZodUnknown2 = $constructor("ZodUnknown", (inst, def)=>{
    $ZodUnknown.init(inst, def);
    ZodType2.init(inst, def);
});
ZodNever2 = $constructor("ZodNever", (inst, def)=>{
    $ZodNever.init(inst, def);
    ZodType2.init(inst, def);
});
ZodDate2 = $constructor("ZodDate", (inst, def)=>{
    $ZodDate.init(inst, def);
    ZodType2.init(inst, def);
    inst.min = (value, params)=>inst.check(_gte(value, params));
    inst.max = (value, params)=>inst.check(_lte(value, params));
    const c = inst._zod.bag;
    inst.minDate = c.minimum ? new Date(c.minimum) : null;
    inst.maxDate = c.maximum ? new Date(c.maximum) : null;
});
ZodArray2 = $constructor("ZodArray", (inst, def)=>{
    $ZodArray.init(inst, def);
    ZodType2.init(inst, def);
    inst.element = def.element;
    inst.min = (minLength, params)=>inst.check(_minLength(minLength, params));
    inst.nonempty = (params)=>inst.check(_minLength(1, params));
    inst.max = (maxLength, params)=>inst.check(_maxLength(maxLength, params));
    inst.length = (len, params)=>inst.check(_length(len, params));
    inst.unwrap = ()=>inst.element;
});
ZodObject2 = $constructor("ZodObject", (inst, def)=>{
    $ZodObject.init(inst, def);
    ZodType2.init(inst, def);
    util_exports.defineLazy(inst, "shape", ()=>def.shape);
    inst.keyof = ()=>_enum(Object.keys(inst._zod.def.shape));
    inst.catchall = (catchall)=>inst.clone({
            ...inst._zod.def,
            catchall
        });
    inst.passthrough = ()=>inst.clone({
            ...inst._zod.def,
            catchall: unknown()
        });
    inst.loose = ()=>inst.clone({
            ...inst._zod.def,
            catchall: unknown()
        });
    inst.strict = ()=>inst.clone({
            ...inst._zod.def,
            catchall: never()
        });
    inst.strip = ()=>inst.clone({
            ...inst._zod.def,
            catchall: void 0
        });
    inst.extend = (incoming)=>{
        return util_exports.extend(inst, incoming);
    };
    inst.merge = (other)=>util_exports.merge(inst, other);
    inst.pick = (mask)=>util_exports.pick(inst, mask);
    inst.omit = (mask)=>util_exports.omit(inst, mask);
    inst.partial = (...args)=>util_exports.partial(ZodOptional2, inst, args[0]);
    inst.required = (...args)=>util_exports.required(ZodNonOptional, inst, args[0]);
});
ZodUnion2 = $constructor("ZodUnion", (inst, def)=>{
    $ZodUnion.init(inst, def);
    ZodType2.init(inst, def);
    inst.options = def.options;
});
ZodDiscriminatedUnion2 = $constructor("ZodDiscriminatedUnion", (inst, def)=>{
    ZodUnion2.init(inst, def);
    $ZodDiscriminatedUnion.init(inst, def);
});
ZodIntersection2 = $constructor("ZodIntersection", (inst, def)=>{
    $ZodIntersection.init(inst, def);
    ZodType2.init(inst, def);
});
ZodRecord2 = $constructor("ZodRecord", (inst, def)=>{
    $ZodRecord.init(inst, def);
    ZodType2.init(inst, def);
    inst.keyType = def.keyType;
    inst.valueType = def.valueType;
});
ZodEnum2 = $constructor("ZodEnum", (inst, def)=>{
    $ZodEnum.init(inst, def);
    ZodType2.init(inst, def);
    inst.enum = def.entries;
    inst.options = Object.values(def.entries);
    const keys = new Set(Object.keys(def.entries));
    inst.extract = (values, params)=>{
        const newEntries = {};
        for (const value of values){
            if (keys.has(value)) {
                newEntries[value] = def.entries[value];
            } else throw new Error(`Key ${value} not found in enum`);
        }
        return new ZodEnum2({
            ...def,
            checks: [],
            ...util_exports.normalizeParams(params),
            entries: newEntries
        });
    };
    inst.exclude = (values, params)=>{
        const newEntries = {
            ...def.entries
        };
        for (const value of values){
            if (keys.has(value)) {
                delete newEntries[value];
            } else throw new Error(`Key ${value} not found in enum`);
        }
        return new ZodEnum2({
            ...def,
            checks: [],
            ...util_exports.normalizeParams(params),
            entries: newEntries
        });
    };
});
ZodLiteral2 = $constructor("ZodLiteral", (inst, def)=>{
    $ZodLiteral.init(inst, def);
    ZodType2.init(inst, def);
    inst.values = new Set(def.values);
    Object.defineProperty(inst, "value", {
        get () {
            if (def.values.length > 1) {
                throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
            }
            return def.values[0];
        }
    });
});
ZodTransform = $constructor("ZodTransform", (inst, def)=>{
    $ZodTransform.init(inst, def);
    ZodType2.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        payload.addIssue = (issue2)=>{
            if (typeof issue2 === "string") {
                payload.issues.push(util_exports.issue(issue2, payload.value, def));
            } else {
                const _issue = issue2;
                if (_issue.fatal) _issue.continue = false;
                _issue.code ?? (_issue.code = "custom");
                _issue.input ?? (_issue.input = payload.value);
                _issue.inst ?? (_issue.inst = inst);
                _issue.continue ?? (_issue.continue = true);
                payload.issues.push(util_exports.issue(_issue));
            }
        };
        const output = def.transform(payload.value, payload);
        if (output instanceof Promise) {
            return output.then((output2)=>{
                payload.value = output2;
                return payload;
            });
        }
        payload.value = output;
        return payload;
    };
});
ZodOptional2 = $constructor("ZodOptional", (inst, def)=>{
    $ZodOptional.init(inst, def);
    ZodType2.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
});
ZodNullable2 = $constructor("ZodNullable", (inst, def)=>{
    $ZodNullable.init(inst, def);
    ZodType2.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
});
ZodDefault2 = $constructor("ZodDefault", (inst, def)=>{
    $ZodDefault.init(inst, def);
    ZodType2.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
    inst.removeDefault = inst.unwrap;
});
ZodPrefault = $constructor("ZodPrefault", (inst, def)=>{
    $ZodPrefault.init(inst, def);
    ZodType2.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
});
ZodNonOptional = $constructor("ZodNonOptional", (inst, def)=>{
    $ZodNonOptional.init(inst, def);
    ZodType2.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
});
ZodCatch2 = $constructor("ZodCatch", (inst, def)=>{
    $ZodCatch.init(inst, def);
    ZodType2.init(inst, def);
    inst.unwrap = ()=>inst._zod.def.innerType;
    inst.removeCatch = inst.unwrap;
});
ZodPipe = $constructor("ZodPipe", (inst, def)=>{
    $ZodPipe.init(inst, def);
    ZodType2.init(inst, def);
    inst.in = def.in;
    inst.out = def.out;
});
ZodReadonly2 = $constructor("ZodReadonly", (inst, def)=>{
    $ZodReadonly.init(inst, def);
    ZodType2.init(inst, def);
});
ZodCustom = $constructor("ZodCustom", (inst, def)=>{
    $ZodCustom.init(inst, def);
    ZodType2.init(inst, def);
});

}
