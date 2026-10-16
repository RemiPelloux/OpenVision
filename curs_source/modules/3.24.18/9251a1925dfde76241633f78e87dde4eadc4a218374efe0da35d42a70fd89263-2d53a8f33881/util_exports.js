import { config } from "./esm_exports8.js";
import { $ZodCheckEndsWith, $ZodCheckGreaterThan, $ZodCheckIncludes, $ZodCheckLengthEquals, $ZodCheckLessThan, $ZodCheckLowerCase, $ZodCheckMaxLength, $ZodCheckMinLength, $ZodCheckMultipleOf, $ZodCheckOverwrite, $ZodCheckRegex, $ZodCheckStartsWith, $ZodCheckUpperCase } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/core/checks.js";
import { _emoji, base64url, dateSource } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/core/regexes.js";
import { $ZodRegistry } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/core/registries.js";
import { BIGINT_FORMAT_RANGES, Class, NUMBER_FORMAT_RANGES, allowsEval, captureStackTrace, getParsedType2, primitiveTypes, propertyKeyTypes } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/core/util.js";
import { error2 } from "./node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4/locales/en.js";
export function assertEqual(val) {
    return val;
}
export function assertNotEqual(val) {
    return val;
}
export function assertIs(_arg) {}
export function assertNever(_x) {
    throw new Error();
}
export function assert2(_2) {}
export function getEnumValues(entries) {
    const numericValues = Object.values(entries).filter((v2)=>typeof v2 === "number");
    const values = Object.entries(entries).filter(([k2, _2])=>numericValues.indexOf(+k2) === -1).map(([_2, v2])=>v2);
    return values;
}
export function joinValues(array3, separator = "|") {
    return array3.map((val)=>stringifyPrimitive(val)).join(separator);
}
export function jsonStringifyReplacer(_2, value) {
    if (typeof value === "bigint") return value.toString();
    return value;
}
export function cached(getter) {
    const set2 = false;
    return {
        get value () {
            if (!set2) {
                const value = getter();
                Object.defineProperty(this, "value", {
                    value
                });
                return value;
            }
            throw new Error("cached value already set");
        }
    };
}
export function nullish(input) {
    return input === null || input === void 0;
}
export function cleanRegex(source) {
    const start = source.startsWith("^") ? 1 : 0;
    const end = source.endsWith("$") ? source.length - 1 : source.length;
    return source.slice(start, end);
}
export function floatSafeRemainder2(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / 10 ** decCount;
}
export function defineLazy(object4, key, getter) {
    const set2 = false;
    Object.defineProperty(object4, key, {
        get () {
            if (!set2) {
                const value = getter();
                object4[key] = value;
                return value;
            }
            throw new Error("cached value already set");
        },
        set (v2) {
            Object.defineProperty(object4, key, {
                value: v2
            });
        },
        configurable: true
    });
}
export function assignProp(target, prop, value) {
    Object.defineProperty(target, prop, {
        value,
        writable: true,
        enumerable: true,
        configurable: true
    });
}
export function getElementAtPath(obj, path64) {
    if (!path64) return obj;
    return path64.reduce((acc, key)=>acc?.[key], obj);
}
export function promiseAllObject(promisesObj) {
    const keys = Object.keys(promisesObj);
    const promises4 = keys.map((key)=>promisesObj[key]);
    return Promise.all(promises4).then((results)=>{
        const resolvedObj = {};
        for(let i = 0; i < keys.length; i++){
            resolvedObj[keys[i]] = results[i];
        }
        return resolvedObj;
    });
}
export function randomString(length = 10) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let str3 = "";
    for(let i = 0; i < length; i++){
        str3 += chars[Math.floor(Math.random() * chars.length)];
    }
    return str3;
}
export function esc(str3) {
    return JSON.stringify(str3);
}
export function isObject3(data) {
    return typeof data === "object" && data !== null && !Array.isArray(data);
}
export function isPlainObject(o) {
    if (isObject3(o) === false) return false;
    const ctor = o.constructor;
    if (ctor === void 0) return true;
    const prot = ctor.prototype;
    if (isObject3(prot) === false) return false;
    if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
        return false;
    }
    return true;
}
export function numKeys(data) {
    let keyCount = 0;
    for(const key in data){
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            keyCount++;
        }
    }
    return keyCount;
}
export function escapeRegex(str3) {
    return str3.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
export function clone2(inst, def, params) {
    const cl = new inst._zod.constr(def ?? inst._zod.def);
    if (!def || params?.parent) cl._zod.parent = inst;
    return cl;
}
export function normalizeParams(_params) {
    const params = _params;
    if (!params) return {};
    if (typeof params === "string") return {
        error: ()=>params
    };
    if (params?.message !== void 0) {
        if (params?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
        params.error = params.message;
    }
    delete params.message;
    if (typeof params.error === "string") return {
        ...params,
        error: ()=>params.error
    };
    return params;
}
export function createTransparentProxy(getter) {
    let target;
    return new Proxy({}, {
        get (_2, prop, receiver) {
            target ?? (target = getter());
            return Reflect.get(target, prop, receiver);
        },
        set (_2, prop, value, receiver) {
            target ?? (target = getter());
            return Reflect.set(target, prop, value, receiver);
        },
        has (_2, prop) {
            target ?? (target = getter());
            return Reflect.has(target, prop);
        },
        deleteProperty (_2, prop) {
            target ?? (target = getter());
            return Reflect.deleteProperty(target, prop);
        },
        ownKeys (_2) {
            target ?? (target = getter());
            return Reflect.ownKeys(target);
        },
        getOwnPropertyDescriptor (_2, prop) {
            target ?? (target = getter());
            return Reflect.getOwnPropertyDescriptor(target, prop);
        },
        defineProperty (_2, prop, descriptor) {
            target ?? (target = getter());
            return Reflect.defineProperty(target, prop, descriptor);
        }
    });
}
export function stringifyPrimitive(value) {
    if (typeof value === "bigint") return value.toString() + "n";
    if (typeof value === "string") return `"${value}"`;
    return `${value}`;
}
export function optionalKeys(shape) {
    return Object.keys(shape).filter((k2)=>{
        return shape[k2]._zod.optin === "optional" && shape[k2]._zod.optout === "optional";
    });
}
export function pick(schema2, mask) {
    const newShape = {};
    const currDef = schema2._zod.def;
    for(const key in mask){
        if (!(key in currDef.shape)) {
            throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key]) continue;
        newShape[key] = currDef.shape[key];
    }
    return clone2(schema2, {
        ...schema2._zod.def,
        shape: newShape,
        checks: []
    });
}
export function omit(schema2, mask) {
    const newShape = {
        ...schema2._zod.def.shape
    };
    const currDef = schema2._zod.def;
    for(const key in mask){
        if (!(key in currDef.shape)) {
            throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key]) continue;
        delete newShape[key];
    }
    return clone2(schema2, {
        ...schema2._zod.def,
        shape: newShape,
        checks: []
    });
}
export function extend(schema2, shape) {
    if (!isPlainObject(shape)) {
        throw new Error("Invalid input to extend: expected a plain object");
    }
    const def = {
        ...schema2._zod.def,
        get shape () {
            const _shape = {
                ...schema2._zod.def.shape,
                ...shape
            };
            assignProp(this, "shape", _shape);
            return _shape;
        },
        checks: []
    };
    return clone2(schema2, def);
}
export function merge3(a, b2) {
    return clone2(a, {
        ...a._zod.def,
        get shape () {
            const _shape = {
                ...a._zod.def.shape,
                ...b2._zod.def.shape
            };
            assignProp(this, "shape", _shape);
            return _shape;
        },
        catchall: b2._zod.def.catchall,
        checks: []
    });
}
export function partial(Class2, schema2, mask) {
    const oldShape = schema2._zod.def.shape;
    const shape = {
        ...oldShape
    };
    if (mask) {
        for(const key in mask){
            if (!(key in oldShape)) {
                throw new Error(`Unrecognized key: "${key}"`);
            }
            if (!mask[key]) continue;
            shape[key] = Class2 ? new Class2({
                type: "optional",
                innerType: oldShape[key]
            }) : oldShape[key];
        }
    } else {
        for(const key in oldShape){
            shape[key] = Class2 ? new Class2({
                type: "optional",
                innerType: oldShape[key]
            }) : oldShape[key];
        }
    }
    return clone2(schema2, {
        ...schema2._zod.def,
        shape,
        checks: []
    });
}
export function required(Class2, schema2, mask) {
    const oldShape = schema2._zod.def.shape;
    const shape = {
        ...oldShape
    };
    if (mask) {
        for(const key in mask){
            if (!(key in shape)) {
                throw new Error(`Unrecognized key: "${key}"`);
            }
            if (!mask[key]) continue;
            shape[key] = new Class2({
                type: "nonoptional",
                innerType: oldShape[key]
            });
        }
    } else {
        for(const key in oldShape){
            shape[key] = new Class2({
                type: "nonoptional",
                innerType: oldShape[key]
            });
        }
    }
    return clone2(schema2, {
        ...schema2._zod.def,
        shape,
        checks: []
    });
}
export function aborted(x, startIndex = 0) {
    for(let i = startIndex; i < x.issues.length; i++){
        if (x.issues[i]?.continue !== true) return true;
    }
    return false;
}
export function prefixIssues(path64, issues) {
    return issues.map((iss)=>{
        var _a18;
        (_a18 = iss).path ?? (_a18.path = []);
        iss.path.unshift(path64);
        return iss;
    });
}
export function unwrapMessage(message) {
    return typeof message === "string" ? message : message?.message;
}
export function finalizeIssue(iss, ctx, config2) {
    const full = {
        ...iss,
        path: iss.path ?? []
    };
    if (!iss.message) {
        const message = unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config2.customError?.(iss)) ?? unwrapMessage(config2.localeError?.(iss)) ?? "Invalid input";
        full.message = message;
    }
    delete full.inst;
    delete full.continue;
    if (!ctx?.reportInput) {
        delete full.input;
    }
    return full;
}
export function getSizableOrigin(input) {
    if (input instanceof Set) return "set";
    if (input instanceof Map) return "map";
    if (input instanceof File) return "file";
    return "unknown";
}
export function getLengthableOrigin(input) {
    if (Array.isArray(input)) return "array";
    if (typeof input === "string") return "string";
    return "unknown";
}
export function issue(...args) {
    const [iss, input, inst] = args;
    if (typeof iss === "string") {
        return {
            message: iss,
            code: "custom",
            input,
            inst
        };
    }
    return {
        ...iss
    };
}
export function cleanEnum(obj) {
    return Object.entries(obj).filter(([k2, _2])=>{
        return Number.isNaN(Number.parseInt(k2, 10));
    }).map((el)=>el[1]);
}
export function flattenError(error3, mapper = (issue2)=>issue2.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of error3.issues){
        if (sub.path.length > 0) {
            fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
            fieldErrors[sub.path[0]].push(mapper(sub));
        } else {
            formErrors.push(mapper(sub));
        }
    }
    return {
        formErrors,
        fieldErrors
    };
}
export function formatError(error3, _mapper) {
    const mapper = _mapper || function(issue2) {
        return issue2.message;
    };
    const fieldErrors = {
        _errors: []
    };
    const processError = (error4)=>{
        for (const issue2 of error4.issues){
            if (issue2.code === "invalid_union" && issue2.errors.length) {
                issue2.errors.map((issues)=>processError({
                        issues
                    }));
            } else if (issue2.code === "invalid_key") {
                processError({
                    issues: issue2.issues
                });
            } else if (issue2.code === "invalid_element") {
                processError({
                    issues: issue2.issues
                });
            } else if (issue2.path.length === 0) {
                fieldErrors._errors.push(mapper(issue2));
            } else {
                let curr = fieldErrors;
                let i = 0;
                while(i < issue2.path.length){
                    const el = issue2.path[i];
                    const terminal = i === issue2.path.length - 1;
                    if (!terminal) {
                        curr[el] = curr[el] || {
                            _errors: []
                        };
                    } else {
                        curr[el] = curr[el] || {
                            _errors: []
                        };
                        curr[el]._errors.push(mapper(issue2));
                    }
                    curr = curr[el];
                    i++;
                }
            }
        }
    };
    processError(error3);
    return fieldErrors;
}
export function emoji() {
    return new RegExp(_emoji, "u");
}
function timeSource(args) {
    const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
    const regex = typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
    return regex;
}
export function time(args) {
    return new RegExp(`^${timeSource(args)}$`);
}
export function datetime(args) {
    const time3 = timeSource({
        precision: args.precision
    });
    const opts = [
        "Z"
    ];
    if (args.local) opts.push("");
    if (args.offset) opts.push(`([+-]\\d{2}:\\d{2})`);
    const timeRegex2 = `${time3}(?:${opts.join("|")})`;
    return new RegExp(`^${dateSource}T(?:${timeRegex2})$`);
}
export function isValidBase64(data) {
    if (data === "") return true;
    if (data.length % 4 !== 0) return false;
    try {
        atob(data);
        return true;
    } catch  {
        return false;
    }
}
export function isValidBase64URL(data) {
    if (!base64url.test(data)) return false;
    const base642 = data.replace(/[-_]/g, (c)=>c === "-" ? "+" : "/");
    const padded = base642.padEnd(Math.ceil(base642.length / 4) * 4, "=");
    return isValidBase64(padded);
}
export function isValidJWT2(token, algorithm = null) {
    try {
        const tokensParts = token.split(".");
        if (tokensParts.length !== 3) return false;
        const [header] = tokensParts;
        if (!header) return false;
        const parsedHeader = JSON.parse(atob(header));
        if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT") return false;
        if (!parsedHeader.alg) return false;
        if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm)) return false;
        return true;
    } catch  {
        return false;
    }
}
export function handleArrayResult(result, final, index) {
    if (result.issues.length) {
        final.issues.push(...prefixIssues(index, result.issues));
    }
    final.value[index] = result.value;
}
export function handleObjectResult(result, final, key) {
    if (result.issues.length) {
        final.issues.push(...prefixIssues(key, result.issues));
    }
    final.value[key] = result.value;
}
export function handleOptionalObjectResult(result, final, key, input) {
    if (result.issues.length) {
        if (input[key] === void 0) {
            if (key in input) {
                final.value[key] = void 0;
            } else {
                final.value[key] = result.value;
            }
        } else {
            final.issues.push(...prefixIssues(key, result.issues));
        }
    } else if (result.value === void 0) {
        if (key in input) final.value[key] = void 0;
    } else {
        final.value[key] = result.value;
    }
}
export function handleUnionResults(results, final, inst, ctx) {
    for (const result of results){
        if (result.issues.length === 0) {
            final.value = result.value;
            return final;
        }
    }
    final.issues.push({
        code: "invalid_union",
        input: final.value,
        inst,
        errors: results.map((result)=>result.issues.map((iss)=>finalizeIssue(iss, ctx, config())))
    });
    return final;
}
function mergeValues2(a, b2) {
    if (a === b2) {
        return {
            valid: true,
            data: a
        };
    }
    if (a instanceof Date && b2 instanceof Date && +a === +b2) {
        return {
            valid: true,
            data: a
        };
    }
    if (isPlainObject(a) && isPlainObject(b2)) {
        const bKeys = Object.keys(b2);
        const sharedKeys = Object.keys(a).filter((key)=>bKeys.indexOf(key) !== -1);
        const newObj = {
            ...a,
            ...b2
        };
        for (const key of sharedKeys){
            const sharedValue = mergeValues2(a[key], b2[key]);
            if (!sharedValue.valid) {
                return {
                    valid: false,
                    mergeErrorPath: [
                        key,
                        ...sharedValue.mergeErrorPath
                    ]
                };
            }
            newObj[key] = sharedValue.data;
        }
        return {
            valid: true,
            data: newObj
        };
    }
    if (Array.isArray(a) && Array.isArray(b2)) {
        if (a.length !== b2.length) {
            return {
                valid: false,
                mergeErrorPath: []
            };
        }
        const newArray = [];
        for(let index = 0; index < a.length; index++){
            const itemA = a[index];
            const itemB = b2[index];
            const sharedValue = mergeValues2(itemA, itemB);
            if (!sharedValue.valid) {
                return {
                    valid: false,
                    mergeErrorPath: [
                        index,
                        ...sharedValue.mergeErrorPath
                    ]
                };
            }
            newArray.push(sharedValue.data);
        }
        return {
            valid: true,
            data: newArray
        };
    }
    return {
        valid: false,
        mergeErrorPath: []
    };
}
export function handleIntersectionResults(result, left, right) {
    if (left.issues.length) {
        result.issues.push(...left.issues);
    }
    if (right.issues.length) {
        result.issues.push(...right.issues);
    }
    if (aborted(result)) return result;
    const merged = mergeValues2(left.value, right.value);
    if (!merged.valid) {
        throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
    }
    result.value = merged.data;
    return result;
}
export function handleDefaultResult(payload, def) {
    if (payload.value === void 0) {
        payload.value = def.defaultValue;
    }
    return payload;
}
export function handleNonOptionalResult(payload, inst) {
    if (!payload.issues.length && payload.value === void 0) {
        payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: payload.value,
            inst
        });
    }
    return payload;
}
export function handlePipeResult(left, def, ctx) {
    if (aborted(left)) {
        return left;
    }
    return def.out._zod.run({
        value: left.value,
        issues: left.issues
    }, ctx);
}
export function handleReadonlyResult(payload) {
    payload.value = Object.freeze(payload.value);
    return payload;
}
export function handleRefineResult(result, payload, input, inst) {
    if (!result) {
        const _iss = {
            code: "custom",
            input,
            inst,
            path: [
                ...inst._zod.def.path ?? []
            ],
            continue: !inst._zod.def.abort
        };
        if (inst._zod.def.params) _iss.params = inst._zod.def.params;
        payload.issues.push(issue(_iss));
    }
}
export function en_default2() {
    return {
        localeError: error2()
    };
}
export function registry() {
    return new $ZodRegistry();
}
export function _string(Class2, params) {
    return new Class2({
        type: "string",
        ...normalizeParams(params)
    });
}
export function _coercedString(Class2, params) {
    return new Class2({
        type: "string",
        coerce: true,
        ...normalizeParams(params)
    });
}
export function _email(Class2, params) {
    return new Class2({
        type: "string",
        format: "email",
        check: "string_format",
        abort: false,
        ...normalizeParams(params)
    });
}
export function _guid(Class2, params) {
    return new Class2({
        type: "string",
        format: "guid",
        check: "string_format",
        abort: false,
        ...normalizeParams(params)
    });
}
export function _uuid(Class2, params) {
    return new Class2({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        ...normalizeParams(params)
    });
}
export function _uuidv4(Class2, params) {
    return new Class2({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v4",
        ...normalizeParams(params)
    });
}
export function _uuidv6(Class2, params) {
    return new Class2({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v6",
        ...normalizeParams(params)
    });
}
export function _uuidv7(Class2, params) {
    return new Class2({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v7",
        ...normalizeParams(params)
    });
}
export function _url(Class2, params) {
    return new Class2({
        type: "string",
        format: "url",
        check: "string_format",
        abort: false,
        ...normalizeParams(params)
    });
}
export function _emoji2(Class2, params) {
    return new Class2({
        type: "string",
        format: "emoji",
        check: "string_format",
        abort: false,
        ...normalizeParams(params)
    });
}
export function _nanoid(Class2, params) {
    return new Class2({
        type: "string",
        format: "nanoid",
        check: "string_format",
        abort: false,
        ...normalizeParams(params)
    });
}
export function _cuid(Class2, params) {
    return new Class2({
        type: "string",
        format: "cuid",
        check: "string_format",
        abort: false,
        ...normalizeParams(params)
    });
}
export function _cuid2(Class2, params) {
    return new Class2({
        type: "string",
        format: "cuid2",
        check: "string_format",
        abort: false,
        ...normalizeParams(params)
    });
}
export function _ulid(Class2, params) {
    return new Class2({
        type: "string",
        format: "ulid",
        check: "string_format",
        abort: false,
        ...normalizeParams(params)
    });
}
export function _xid(Class2, params) {
    return new Class2({
        type: "string",
        format: "xid",
        check: "string_format",
        abort: false,
        ...normalizeParams(params)
    });
}
export function _ksuid(Class2, params) {
    return new Class2({
        type: "string",
        format: "ksuid",
        check: "string_format",
        abort: false,
        ...normalizeParams(params)
    });
}
export function _ipv4(Class2, params) {
    return new Class2({
        type: "string",
        format: "ipv4",
        check: "string_format",
        abort: false,
        ...normalizeParams(params)
    });
}
export function _ipv6(Class2, params) {
    return new Class2({
        type: "string",
        format: "ipv6",
        check: "string_format",
        abort: false,
        ...normalizeParams(params)
    });
}
export function _cidrv4(Class2, params) {
    return new Class2({
        type: "string",
        format: "cidrv4",
        check: "string_format",
        abort: false,
        ...normalizeParams(params)
    });
}
export function _cidrv6(Class2, params) {
    return new Class2({
        type: "string",
        format: "cidrv6",
        check: "string_format",
        abort: false,
        ...normalizeParams(params)
    });
}
export function _base64(Class2, params) {
    return new Class2({
        type: "string",
        format: "base64",
        check: "string_format",
        abort: false,
        ...normalizeParams(params)
    });
}
export function _base64url(Class2, params) {
    return new Class2({
        type: "string",
        format: "base64url",
        check: "string_format",
        abort: false,
        ...normalizeParams(params)
    });
}
export function _e164(Class2, params) {
    return new Class2({
        type: "string",
        format: "e164",
        check: "string_format",
        abort: false,
        ...normalizeParams(params)
    });
}
export function _jwt(Class2, params) {
    return new Class2({
        type: "string",
        format: "jwt",
        check: "string_format",
        abort: false,
        ...normalizeParams(params)
    });
}
export function _isoDateTime(Class2, params) {
    return new Class2({
        type: "string",
        format: "datetime",
        check: "string_format",
        offset: false,
        local: false,
        precision: null,
        ...normalizeParams(params)
    });
}
export function _isoDate(Class2, params) {
    return new Class2({
        type: "string",
        format: "date",
        check: "string_format",
        ...normalizeParams(params)
    });
}
export function _isoTime(Class2, params) {
    return new Class2({
        type: "string",
        format: "time",
        check: "string_format",
        precision: null,
        ...normalizeParams(params)
    });
}
export function _isoDuration(Class2, params) {
    return new Class2({
        type: "string",
        format: "duration",
        check: "string_format",
        ...normalizeParams(params)
    });
}
export function _number(Class2, params) {
    return new Class2({
        type: "number",
        checks: [],
        ...normalizeParams(params)
    });
}
export function _coercedNumber(Class2, params) {
    return new Class2({
        type: "number",
        coerce: true,
        checks: [],
        ...normalizeParams(params)
    });
}
export function _int(Class2, params) {
    return new Class2({
        type: "number",
        check: "number_format",
        abort: false,
        format: "safeint",
        ...normalizeParams(params)
    });
}
export function _boolean(Class2, params) {
    return new Class2({
        type: "boolean",
        ...normalizeParams(params)
    });
}
export function _coercedBoolean(Class2, params) {
    return new Class2({
        type: "boolean",
        coerce: true,
        ...normalizeParams(params)
    });
}
export function _coercedBigint(Class2, params) {
    return new Class2({
        type: "bigint",
        coerce: true,
        ...normalizeParams(params)
    });
}
export function _null3(Class2, params) {
    return new Class2({
        type: "null",
        ...normalizeParams(params)
    });
}
export function _any(Class2) {
    return new Class2({
        type: "any"
    });
}
export function _unknown(Class2) {
    return new Class2({
        type: "unknown"
    });
}
export function _never(Class2, params) {
    return new Class2({
        type: "never",
        ...normalizeParams(params)
    });
}
export function _coercedDate(Class2, params) {
    return new Class2({
        type: "date",
        coerce: true,
        ...normalizeParams(params)
    });
}
export function _lt(value, params) {
    return new $ZodCheckLessThan({
        check: "less_than",
        ...normalizeParams(params),
        value,
        inclusive: false
    });
}
export function _lte(value, params) {
    return new $ZodCheckLessThan({
        check: "less_than",
        ...normalizeParams(params),
        value,
        inclusive: true
    });
}
export function _gt(value, params) {
    return new $ZodCheckGreaterThan({
        check: "greater_than",
        ...normalizeParams(params),
        value,
        inclusive: false
    });
}
export function _gte(value, params) {
    return new $ZodCheckGreaterThan({
        check: "greater_than",
        ...normalizeParams(params),
        value,
        inclusive: true
    });
}
export function _multipleOf(value, params) {
    return new $ZodCheckMultipleOf({
        check: "multiple_of",
        ...normalizeParams(params),
        value
    });
}
export function _maxLength(maximum, params) {
    const ch = new $ZodCheckMaxLength({
        check: "max_length",
        ...normalizeParams(params),
        maximum
    });
    return ch;
}
export function _minLength(minimum, params) {
    return new $ZodCheckMinLength({
        check: "min_length",
        ...normalizeParams(params),
        minimum
    });
}
export function _length(length, params) {
    return new $ZodCheckLengthEquals({
        check: "length_equals",
        ...normalizeParams(params),
        length
    });
}
export function _regex(pattern, params) {
    return new $ZodCheckRegex({
        check: "string_format",
        format: "regex",
        ...normalizeParams(params),
        pattern
    });
}
export function _lowercase(params) {
    return new $ZodCheckLowerCase({
        check: "string_format",
        format: "lowercase",
        ...normalizeParams(params)
    });
}
export function _uppercase(params) {
    return new $ZodCheckUpperCase({
        check: "string_format",
        format: "uppercase",
        ...normalizeParams(params)
    });
}
export function _includes(includes, params) {
    return new $ZodCheckIncludes({
        check: "string_format",
        format: "includes",
        ...normalizeParams(params),
        includes
    });
}
export function _startsWith(prefix, params) {
    return new $ZodCheckStartsWith({
        check: "string_format",
        format: "starts_with",
        ...normalizeParams(params),
        prefix
    });
}
export function _endsWith(suffix, params) {
    return new $ZodCheckEndsWith({
        check: "string_format",
        format: "ends_with",
        ...normalizeParams(params),
        suffix
    });
}
export function _overwrite(tx) {
    return new $ZodCheckOverwrite({
        check: "overwrite",
        tx
    });
}
export function _normalize(form) {
    return _overwrite((input)=>input.normalize(form));
}
export function _trim() {
    return _overwrite((input)=>input.trim());
}
export function _toLowerCase() {
    return _overwrite((input)=>input.toLowerCase());
}
export function _toUpperCase() {
    return _overwrite((input)=>input.toUpperCase());
}
export function _array(Class2, element, params) {
    return new Class2({
        type: "array",
        element,
        ...normalizeParams(params)
    });
}
export function _custom(Class2, fn, _params) {
    const norm = normalizeParams(_params);
    norm.abort ?? (norm.abort = true);
    const schema2 = new Class2({
        type: "custom",
        check: "custom",
        fn,
        ...norm
    });
    return schema2;
}
export function _refine(Class2, fn, _params) {
    const schema2 = new Class2({
        type: "custom",
        check: "custom",
        fn,
        ...normalizeParams(_params)
    });
    return schema2;
}
export { BIGINT_FORMAT_RANGES, Class, NUMBER_FORMAT_RANGES, allowsEval, captureStackTrace, getParsedType2, primitiveTypes, propertyKeyTypes };

export var util_exports = {};
Object.defineProperty(util_exports, "BIGINT_FORMAT_RANGES", {
    enumerable: true,
    get: ()=>BIGINT_FORMAT_RANGES
});
Object.defineProperty(util_exports, "Class", {
    enumerable: true,
    get: ()=>Class
});
Object.defineProperty(util_exports, "NUMBER_FORMAT_RANGES", {
    enumerable: true,
    get: ()=>NUMBER_FORMAT_RANGES
});
Object.defineProperty(util_exports, "aborted", {
    enumerable: true,
    get: ()=>aborted
});
Object.defineProperty(util_exports, "allowsEval", {
    enumerable: true,
    get: ()=>allowsEval
});
Object.defineProperty(util_exports, "assert", {
    enumerable: true,
    get: ()=>assert2
});
Object.defineProperty(util_exports, "assertEqual", {
    enumerable: true,
    get: ()=>assertEqual
});
Object.defineProperty(util_exports, "assertIs", {
    enumerable: true,
    get: ()=>assertIs
});
Object.defineProperty(util_exports, "assertNever", {
    enumerable: true,
    get: ()=>assertNever
});
Object.defineProperty(util_exports, "assertNotEqual", {
    enumerable: true,
    get: ()=>assertNotEqual
});
Object.defineProperty(util_exports, "assignProp", {
    enumerable: true,
    get: ()=>assignProp
});
Object.defineProperty(util_exports, "cached", {
    enumerable: true,
    get: ()=>cached
});
Object.defineProperty(util_exports, "captureStackTrace", {
    enumerable: true,
    get: ()=>captureStackTrace
});
Object.defineProperty(util_exports, "cleanEnum", {
    enumerable: true,
    get: ()=>cleanEnum
});
Object.defineProperty(util_exports, "cleanRegex", {
    enumerable: true,
    get: ()=>cleanRegex
});
Object.defineProperty(util_exports, "clone", {
    enumerable: true,
    get: ()=>clone2
});
Object.defineProperty(util_exports, "createTransparentProxy", {
    enumerable: true,
    get: ()=>createTransparentProxy
});
Object.defineProperty(util_exports, "defineLazy", {
    enumerable: true,
    get: ()=>defineLazy
});
Object.defineProperty(util_exports, "esc", {
    enumerable: true,
    get: ()=>esc
});
Object.defineProperty(util_exports, "escapeRegex", {
    enumerable: true,
    get: ()=>escapeRegex
});
Object.defineProperty(util_exports, "extend", {
    enumerable: true,
    get: ()=>extend
});
Object.defineProperty(util_exports, "finalizeIssue", {
    enumerable: true,
    get: ()=>finalizeIssue
});
Object.defineProperty(util_exports, "floatSafeRemainder", {
    enumerable: true,
    get: ()=>floatSafeRemainder2
});
Object.defineProperty(util_exports, "getElementAtPath", {
    enumerable: true,
    get: ()=>getElementAtPath
});
Object.defineProperty(util_exports, "getEnumValues", {
    enumerable: true,
    get: ()=>getEnumValues
});
Object.defineProperty(util_exports, "getLengthableOrigin", {
    enumerable: true,
    get: ()=>getLengthableOrigin
});
Object.defineProperty(util_exports, "getParsedType", {
    enumerable: true,
    get: ()=>getParsedType2
});
Object.defineProperty(util_exports, "getSizableOrigin", {
    enumerable: true,
    get: ()=>getSizableOrigin
});
Object.defineProperty(util_exports, "isObject", {
    enumerable: true,
    get: ()=>isObject3
});
Object.defineProperty(util_exports, "isPlainObject", {
    enumerable: true,
    get: ()=>isPlainObject
});
Object.defineProperty(util_exports, "issue", {
    enumerable: true,
    get: ()=>issue
});
Object.defineProperty(util_exports, "joinValues", {
    enumerable: true,
    get: ()=>joinValues
});
Object.defineProperty(util_exports, "jsonStringifyReplacer", {
    enumerable: true,
    get: ()=>jsonStringifyReplacer
});
Object.defineProperty(util_exports, "merge", {
    enumerable: true,
    get: ()=>merge3
});
Object.defineProperty(util_exports, "normalizeParams", {
    enumerable: true,
    get: ()=>normalizeParams
});
Object.defineProperty(util_exports, "nullish", {
    enumerable: true,
    get: ()=>nullish
});
Object.defineProperty(util_exports, "numKeys", {
    enumerable: true,
    get: ()=>numKeys
});
Object.defineProperty(util_exports, "omit", {
    enumerable: true,
    get: ()=>omit
});
Object.defineProperty(util_exports, "optionalKeys", {
    enumerable: true,
    get: ()=>optionalKeys
});
Object.defineProperty(util_exports, "partial", {
    enumerable: true,
    get: ()=>partial
});
Object.defineProperty(util_exports, "pick", {
    enumerable: true,
    get: ()=>pick
});
Object.defineProperty(util_exports, "prefixIssues", {
    enumerable: true,
    get: ()=>prefixIssues
});
Object.defineProperty(util_exports, "primitiveTypes", {
    enumerable: true,
    get: ()=>primitiveTypes
});
Object.defineProperty(util_exports, "promiseAllObject", {
    enumerable: true,
    get: ()=>promiseAllObject
});
Object.defineProperty(util_exports, "propertyKeyTypes", {
    enumerable: true,
    get: ()=>propertyKeyTypes
});
Object.defineProperty(util_exports, "randomString", {
    enumerable: true,
    get: ()=>randomString
});
Object.defineProperty(util_exports, "required", {
    enumerable: true,
    get: ()=>required
});
Object.defineProperty(util_exports, "stringifyPrimitive", {
    enumerable: true,
    get: ()=>stringifyPrimitive
});
Object.defineProperty(util_exports, "unwrapMessage", {
    enumerable: true,
    get: ()=>unwrapMessage
});
