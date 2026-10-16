import { $constructor, config } from "../../../../../../../esm_exports8.js";
import { $ZodCheck, $ZodCheckNumberFormat, $ZodCheckStringFormat, init_checks } from "./checks.js";
import { $ZodAsyncError, globalConfig, init_core3 } from "./core.js";
import { Doc, init_doc } from "./doc.js";
import { init_parse2, safeParse, safeParseAsync } from "./parse.js";
import { _null2, base64, base64url, bigint, boolean, cidrv4, cidrv6, cuid, cuid2, date, duration, e164, email, guid, hostname, init_regexes, ipv4, ipv6, ksuid, nanoid, number, string, ulid, uuid, xid } from "./regexes.js";
import { allowsEval, init_util4, propertyKeyTypes } from "./util.js";
import { init_versions, version } from "./versions.js";
import { aborted, cached, cleanRegex, datetime, defineLazy, emoji, esc, escapeRegex, finalizeIssue, getEnumValues, handleArrayResult, handleDefaultResult, handleIntersectionResults, handleNonOptionalResult, handleObjectResult, handleOptionalObjectResult, handlePipeResult, handleReadonlyResult, handleRefineResult, handleUnionResults, isObject3, isPlainObject, isValidBase64, isValidBase64URL, isValidJWT2, optionalKeys, prefixIssues, time } from "../../../../../../../util_exports.js";
var $ZodType, $ZodString, $ZodStringFormat, $ZodGUID, $ZodUUID, $ZodEmail, $ZodURL, $ZodEmoji, $ZodNanoID, $ZodCUID, $ZodCUID2, $ZodULID, $ZodXID, $ZodKSUID, $ZodISODateTime, $ZodISODate, $ZodISOTime, $ZodISODuration, $ZodIPv4, $ZodIPv6, $ZodCIDRv4, $ZodCIDRv6, $ZodBase64, $ZodBase64URL, $ZodE164, $ZodJWT, $ZodNumber, $ZodNumberFormat, $ZodBoolean, $ZodBigInt, $ZodNull, $ZodAny, $ZodUnknown, $ZodNever, $ZodDate, $ZodArray, $ZodObject, $ZodUnion, $ZodDiscriminatedUnion, $ZodIntersection, $ZodRecord, $ZodEnum, $ZodLiteral, $ZodTransform, $ZodOptional, $ZodNullable, $ZodDefault, $ZodPrefault, $ZodNonOptional, $ZodCatch, $ZodPipe, $ZodReadonly, $ZodCustom;
export { $ZodAny, $ZodArray, $ZodBase64, $ZodBase64URL, $ZodBigInt, $ZodBoolean, $ZodCIDRv4, $ZodCIDRv6, $ZodCUID, $ZodCUID2, $ZodCatch, $ZodCustom, $ZodDate, $ZodDefault, $ZodDiscriminatedUnion, $ZodE164, $ZodEmail, $ZodEmoji, $ZodEnum, $ZodGUID, $ZodIPv4, $ZodIPv6, $ZodISODate, $ZodISODateTime, $ZodISODuration, $ZodISOTime, $ZodIntersection, $ZodJWT, $ZodKSUID, $ZodLiteral, $ZodNanoID, $ZodNever, $ZodNonOptional, $ZodNull, $ZodNullable, $ZodNumber, $ZodNumberFormat, $ZodObject, $ZodOptional, $ZodPipe, $ZodPrefault, $ZodReadonly, $ZodRecord, $ZodString, $ZodStringFormat, $ZodTransform, $ZodType, $ZodULID, $ZodURL, $ZodUUID, $ZodUnion, $ZodUnknown, $ZodXID };
var __wakaru_init_schemas_initialized = false;
export function init_schemas() {
if (__wakaru_init_schemas_initialized) return;
__wakaru_init_schemas_initialized = true;
init_checks();
init_core3();
init_doc();
init_parse2();
init_regexes();
init_util4();
init_versions();
init_util4();
$ZodType = $constructor("$ZodType", (inst, def)=>{
    var _a18;
    inst ?? (inst = {});
    inst._zod.def = def;
    inst._zod.bag = inst._zod.bag || {};
    inst._zod.version = version;
    const checks = [
        ...inst._zod.def.checks ?? []
    ];
    if (inst._zod.traits.has("$ZodCheck")) {
        checks.unshift(inst);
    }
    for (const ch of checks){
        for (const fn of ch._zod.onattach){
            fn(inst);
        }
    }
    if (checks.length === 0) {
        (_a18 = inst._zod).deferred ?? (_a18.deferred = []);
        inst._zod.deferred?.push(()=>{
            inst._zod.run = inst._zod.parse;
        });
    } else {
        const runChecks = (payload, checks2, ctx)=>{
            let isAborted3 = aborted(payload);
            let asyncResult;
            for (const ch of checks2){
                if (ch._zod.def.when) {
                    const shouldRun = ch._zod.def.when(payload);
                    if (!shouldRun) continue;
                } else if (isAborted3) {
                    continue;
                }
                const currLen = payload.issues.length;
                const _2 = ch._zod.check(payload);
                if (_2 instanceof Promise && ctx?.async === false) {
                    throw new $ZodAsyncError();
                }
                if (asyncResult || _2 instanceof Promise) {
                    asyncResult = (asyncResult ?? Promise.resolve()).then(async ()=>{
                        await _2;
                        const nextLen = payload.issues.length;
                        if (nextLen === currLen) return;
                        if (!isAborted3) isAborted3 = aborted(payload, currLen);
                    });
                } else {
                    const nextLen = payload.issues.length;
                    if (nextLen === currLen) continue;
                    if (!isAborted3) isAborted3 = aborted(payload, currLen);
                }
            }
            if (asyncResult) {
                return asyncResult.then(()=>{
                    return payload;
                });
            }
            return payload;
        };
        inst._zod.run = (payload, ctx)=>{
            const result = inst._zod.parse(payload, ctx);
            if (result instanceof Promise) {
                if (ctx.async === false) throw new $ZodAsyncError();
                return result.then((result2)=>runChecks(result2, checks, ctx));
            }
            return runChecks(result, checks, ctx);
        };
    }
    inst["~standard"] = {
        validate: (value)=>{
            try {
                const r = safeParse(inst, value);
                return r.success ? {
                    value: r.data
                } : {
                    issues: r.error?.issues
                };
            } catch (_2) {
                return safeParseAsync(inst, value).then((r)=>r.success ? {
                        value: r.data
                    } : {
                        issues: r.error?.issues
                    });
            }
        },
        vendor: "zod",
        version: 1
    };
});
$ZodString = $constructor("$ZodString", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.pattern = [
        ...inst?._zod.bag?.patterns ?? []
    ].pop() ?? string(inst._zod.bag);
    inst._zod.parse = (payload, _2)=>{
        if (def.coerce) try {
            payload.value = String(payload.value);
        } catch (_3) {}
        if (typeof payload.value === "string") return payload;
        payload.issues.push({
            expected: "string",
            code: "invalid_type",
            input: payload.value,
            inst
        });
        return payload;
    };
});
$ZodStringFormat = $constructor("$ZodStringFormat", (inst, def)=>{
    $ZodCheckStringFormat.init(inst, def);
    $ZodString.init(inst, def);
});
$ZodGUID = $constructor("$ZodGUID", (inst, def)=>{
    def.pattern ?? (def.pattern = guid);
    $ZodStringFormat.init(inst, def);
});
$ZodUUID = $constructor("$ZodUUID", (inst, def)=>{
    if (def.version) {
        const versionMap = {
            v1: 1,
            v2: 2,
            v3: 3,
            v4: 4,
            v5: 5,
            v6: 6,
            v7: 7,
            v8: 8
        };
        const v2 = versionMap[def.version];
        if (v2 === void 0) throw new Error(`Invalid UUID version: "${def.version}"`);
        def.pattern ?? (def.pattern = uuid(v2));
    } else def.pattern ?? (def.pattern = uuid());
    $ZodStringFormat.init(inst, def);
});
$ZodEmail = $constructor("$ZodEmail", (inst, def)=>{
    def.pattern ?? (def.pattern = email);
    $ZodStringFormat.init(inst, def);
});
$ZodURL = $constructor("$ZodURL", (inst, def)=>{
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload)=>{
        try {
            const orig = payload.value;
            const url2 = new URL(orig);
            const href = url2.href;
            if (def.hostname) {
                def.hostname.lastIndex = 0;
                if (!def.hostname.test(url2.hostname)) {
                    payload.issues.push({
                        code: "invalid_format",
                        format: "url",
                        note: "Invalid hostname",
                        pattern: hostname.source,
                        input: payload.value,
                        inst,
                        continue: !def.abort
                    });
                }
            }
            if (def.protocol) {
                def.protocol.lastIndex = 0;
                if (!def.protocol.test(url2.protocol.endsWith(":") ? url2.protocol.slice(0, -1) : url2.protocol)) {
                    payload.issues.push({
                        code: "invalid_format",
                        format: "url",
                        note: "Invalid protocol",
                        pattern: def.protocol.source,
                        input: payload.value,
                        inst,
                        continue: !def.abort
                    });
                }
            }
            if (!orig.endsWith("/") && href.endsWith("/")) {
                payload.value = href.slice(0, -1);
            } else {
                payload.value = href;
            }
            return;
        } catch (_2) {
            payload.issues.push({
                code: "invalid_format",
                format: "url",
                input: payload.value,
                inst,
                continue: !def.abort
            });
        }
    };
});
$ZodEmoji = $constructor("$ZodEmoji", (inst, def)=>{
    def.pattern ?? (def.pattern = emoji());
    $ZodStringFormat.init(inst, def);
});
$ZodNanoID = $constructor("$ZodNanoID", (inst, def)=>{
    def.pattern ?? (def.pattern = nanoid);
    $ZodStringFormat.init(inst, def);
});
$ZodCUID = $constructor("$ZodCUID", (inst, def)=>{
    def.pattern ?? (def.pattern = cuid);
    $ZodStringFormat.init(inst, def);
});
$ZodCUID2 = $constructor("$ZodCUID2", (inst, def)=>{
    def.pattern ?? (def.pattern = cuid2);
    $ZodStringFormat.init(inst, def);
});
$ZodULID = $constructor("$ZodULID", (inst, def)=>{
    def.pattern ?? (def.pattern = ulid);
    $ZodStringFormat.init(inst, def);
});
$ZodXID = $constructor("$ZodXID", (inst, def)=>{
    def.pattern ?? (def.pattern = xid);
    $ZodStringFormat.init(inst, def);
});
$ZodKSUID = $constructor("$ZodKSUID", (inst, def)=>{
    def.pattern ?? (def.pattern = ksuid);
    $ZodStringFormat.init(inst, def);
});
$ZodISODateTime = $constructor("$ZodISODateTime", (inst, def)=>{
    def.pattern ?? (def.pattern = datetime(def));
    $ZodStringFormat.init(inst, def);
});
$ZodISODate = $constructor("$ZodISODate", (inst, def)=>{
    def.pattern ?? (def.pattern = date);
    $ZodStringFormat.init(inst, def);
});
$ZodISOTime = $constructor("$ZodISOTime", (inst, def)=>{
    def.pattern ?? (def.pattern = time(def));
    $ZodStringFormat.init(inst, def);
});
$ZodISODuration = $constructor("$ZodISODuration", (inst, def)=>{
    def.pattern ?? (def.pattern = duration);
    $ZodStringFormat.init(inst, def);
});
$ZodIPv4 = $constructor("$ZodIPv4", (inst, def)=>{
    def.pattern ?? (def.pattern = ipv4);
    $ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst2)=>{
        const bag = inst2._zod.bag;
        bag.format = `ipv4`;
    });
});
$ZodIPv6 = $constructor("$ZodIPv6", (inst, def)=>{
    def.pattern ?? (def.pattern = ipv6);
    $ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst2)=>{
        const bag = inst2._zod.bag;
        bag.format = `ipv6`;
    });
    inst._zod.check = (payload)=>{
        try {
            new URL(`http://[${payload.value}]`);
        } catch  {
            payload.issues.push({
                code: "invalid_format",
                format: "ipv6",
                input: payload.value,
                inst,
                continue: !def.abort
            });
        }
    };
});
$ZodCIDRv4 = $constructor("$ZodCIDRv4", (inst, def)=>{
    def.pattern ?? (def.pattern = cidrv4);
    $ZodStringFormat.init(inst, def);
});
$ZodCIDRv6 = $constructor("$ZodCIDRv6", (inst, def)=>{
    def.pattern ?? (def.pattern = cidrv6);
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload)=>{
        const [address, prefix] = payload.value.split("/");
        try {
            if (!prefix) throw new Error();
            const prefixNum = Number(prefix);
            if (`${prefixNum}` !== prefix) throw new Error();
            if (prefixNum < 0 || prefixNum > 128) throw new Error();
            new URL(`http://[${address}]`);
        } catch  {
            payload.issues.push({
                code: "invalid_format",
                format: "cidrv6",
                input: payload.value,
                inst,
                continue: !def.abort
            });
        }
    };
});
$ZodBase64 = $constructor("$ZodBase64", (inst, def)=>{
    def.pattern ?? (def.pattern = base64);
    $ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst2)=>{
        inst2._zod.bag.contentEncoding = "base64";
    });
    inst._zod.check = (payload)=>{
        if (isValidBase64(payload.value)) return;
        payload.issues.push({
            code: "invalid_format",
            format: "base64",
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
$ZodBase64URL = $constructor("$ZodBase64URL", (inst, def)=>{
    def.pattern ?? (def.pattern = base64url);
    $ZodStringFormat.init(inst, def);
    inst._zod.onattach.push((inst2)=>{
        inst2._zod.bag.contentEncoding = "base64url";
    });
    inst._zod.check = (payload)=>{
        if (isValidBase64URL(payload.value)) return;
        payload.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
$ZodE164 = $constructor("$ZodE164", (inst, def)=>{
    def.pattern ?? (def.pattern = e164);
    $ZodStringFormat.init(inst, def);
});
$ZodJWT = $constructor("$ZodJWT", (inst, def)=>{
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload)=>{
        if (isValidJWT2(payload.value, def.alg)) return;
        payload.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
$ZodNumber = $constructor("$ZodNumber", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.pattern = inst._zod.bag.pattern ?? number;
    inst._zod.parse = (payload, _ctx)=>{
        if (def.coerce) try {
            payload.value = Number(payload.value);
        } catch (_2) {}
        const input = payload.value;
        if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
            return payload;
        }
        const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : void 0 : void 0;
        payload.issues.push({
            expected: "number",
            code: "invalid_type",
            input,
            inst,
            ...received ? {
                received
            } : {}
        });
        return payload;
    };
});
$ZodNumberFormat = $constructor("$ZodNumber", (inst, def)=>{
    $ZodCheckNumberFormat.init(inst, def);
    $ZodNumber.init(inst, def);
});
$ZodBoolean = $constructor("$ZodBoolean", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.pattern = boolean;
    inst._zod.parse = (payload, _ctx)=>{
        if (def.coerce) try {
            payload.value = Boolean(payload.value);
        } catch (_2) {}
        const input = payload.value;
        if (typeof input === "boolean") return payload;
        payload.issues.push({
            expected: "boolean",
            code: "invalid_type",
            input,
            inst
        });
        return payload;
    };
});
$ZodBigInt = $constructor("$ZodBigInt", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.pattern = bigint;
    inst._zod.parse = (payload, _ctx)=>{
        if (def.coerce) try {
            payload.value = BigInt(payload.value);
        } catch (_2) {}
        if (typeof payload.value === "bigint") return payload;
        payload.issues.push({
            expected: "bigint",
            code: "invalid_type",
            input: payload.value,
            inst
        });
        return payload;
    };
});
$ZodNull = $constructor("$ZodNull", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.pattern = _null2;
    inst._zod.values = new Set([
        null
    ]);
    inst._zod.parse = (payload, _ctx)=>{
        const input = payload.value;
        if (input === null) return payload;
        payload.issues.push({
            expected: "null",
            code: "invalid_type",
            input,
            inst
        });
        return payload;
    };
});
$ZodAny = $constructor("$ZodAny", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload)=>payload;
});
$ZodUnknown = $constructor("$ZodUnknown", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload)=>payload;
});
$ZodNever = $constructor("$ZodNever", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        payload.issues.push({
            expected: "never",
            code: "invalid_type",
            input: payload.value,
            inst
        });
        return payload;
    };
});
$ZodDate = $constructor("$ZodDate", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        if (def.coerce) {
            try {
                payload.value = new Date(payload.value);
            } catch (_err) {}
        }
        const input = payload.value;
        const isDate = input instanceof Date;
        const isValidDate = isDate && !Number.isNaN(input.getTime());
        if (isValidDate) return payload;
        payload.issues.push({
            expected: "date",
            code: "invalid_type",
            input,
            ...isDate ? {
                received: "Invalid Date"
            } : {},
            inst
        });
        return payload;
    };
});
$ZodArray = $constructor("$ZodArray", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx)=>{
        const input = payload.value;
        if (!Array.isArray(input)) {
            payload.issues.push({
                expected: "array",
                code: "invalid_type",
                input,
                inst
            });
            return payload;
        }
        payload.value = Array(input.length);
        const proms = [];
        for(let i = 0; i < input.length; i++){
            const item = input[i];
            const result = def.element._zod.run({
                value: item,
                issues: []
            }, ctx);
            if (result instanceof Promise) {
                proms.push(result.then((result2)=>handleArrayResult(result2, payload, i)));
            } else {
                handleArrayResult(result, payload, i);
            }
        }
        if (proms.length) {
            return Promise.all(proms).then(()=>payload);
        }
        return payload;
    };
});
$ZodObject = $constructor("$ZodObject", (inst, def)=>{
    $ZodType.init(inst, def);
    const _normalized = cached(()=>{
        const keys = Object.keys(def.shape);
        for (const k2 of keys){
            if (!(def.shape[k2] instanceof $ZodType)) {
                throw new Error(`Invalid element at key "${k2}": expected a Zod schema`);
            }
        }
        const okeys = optionalKeys(def.shape);
        return {
            shape: def.shape,
            keys,
            keySet: new Set(keys),
            numKeys: keys.length,
            optionalKeys: new Set(okeys)
        };
    });
    defineLazy(inst._zod, "propValues", ()=>{
        const shape = def.shape;
        const propValues = {};
        for(const key in shape){
            const field4 = shape[key]._zod;
            if (field4.values) {
                propValues[key] ?? (propValues[key] = new Set());
                for (const v2 of field4.values)propValues[key].add(v2);
            }
        }
        return propValues;
    });
    const generateFastpass = (shape)=>{
        const doc = new Doc([
            "shape",
            "payload",
            "ctx"
        ]);
        const normalized = _normalized.value;
        const parseStr = (key)=>{
            const k2 = esc(key);
            return `shape[${k2}]._zod.run({ value: input[${k2}], issues: [] }, ctx)`;
        };
        doc.write(`const input = payload.value;`);
        const ids = Object.create(null);
        let counter = 0;
        for (const key of normalized.keys){
            ids[key] = `key_${counter++}`;
        }
        doc.write(`const newResult = {}`);
        for (const key of normalized.keys){
            if (normalized.optionalKeys.has(key)) {
                const id = ids[key];
                doc.write(`const ${id} = ${parseStr(key)};`);
                const k2 = esc(key);
                doc.write(`
        if (${id}.issues.length) {
          if (input[${k2}] === undefined) {
            if (${k2} in input) {
              newResult[${k2}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${id}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${k2}, ...iss.path] : [${k2}],
              }))
            );
          }
        } else if (${id}.value === undefined) {
          if (${k2} in input) newResult[${k2}] = undefined;
        } else {
          newResult[${k2}] = ${id}.value;
        }
        `);
            } else {
                const id = ids[key];
                doc.write(`const ${id} = ${parseStr(key)};`);
                doc.write(`
          if (${id}.issues.length) payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${esc(key)}, ...iss.path] : [${esc(key)}]
          })));`);
                doc.write(`newResult[${esc(key)}] = ${id}.value`);
            }
        }
        doc.write(`payload.value = newResult;`);
        doc.write(`return payload;`);
        const fn = doc.compile();
        return (payload, ctx)=>fn(shape, payload, ctx);
    };
    let fastpass;
    const isObject5 = isObject3;
    const jit = !globalConfig.jitless;
    const allowsEval2 = allowsEval;
    const fastEnabled = jit && allowsEval2.value;
    const catchall = def.catchall;
    let value;
    inst._zod.parse = (payload, ctx)=>{
        value ?? (value = _normalized.value);
        const input = payload.value;
        if (!isObject5(input)) {
            payload.issues.push({
                expected: "object",
                code: "invalid_type",
                input,
                inst
            });
            return payload;
        }
        const proms = [];
        if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
            if (!fastpass) fastpass = generateFastpass(def.shape);
            payload = fastpass(payload, ctx);
        } else {
            payload.value = {};
            const shape = value.shape;
            for (const key of value.keys){
                const el = shape[key];
                const r = el._zod.run({
                    value: input[key],
                    issues: []
                }, ctx);
                const isOptional = el._zod.optin === "optional" && el._zod.optout === "optional";
                if (r instanceof Promise) {
                    proms.push(r.then((r2)=>isOptional ? handleOptionalObjectResult(r2, payload, key, input) : handleObjectResult(r2, payload, key)));
                } else if (isOptional) {
                    handleOptionalObjectResult(r, payload, key, input);
                } else {
                    handleObjectResult(r, payload, key);
                }
            }
        }
        if (!catchall) {
            return proms.length ? Promise.all(proms).then(()=>payload) : payload;
        }
        const unrecognized = [];
        const keySet = value.keySet;
        const _catchall = catchall._zod;
        const t = _catchall.def.type;
        for (const key of Object.keys(input)){
            if (keySet.has(key)) continue;
            if (t === "never") {
                unrecognized.push(key);
                continue;
            }
            const r = _catchall.run({
                value: input[key],
                issues: []
            }, ctx);
            if (r instanceof Promise) {
                proms.push(r.then((r2)=>handleObjectResult(r2, payload, key)));
            } else {
                handleObjectResult(r, payload, key);
            }
        }
        if (unrecognized.length) {
            payload.issues.push({
                code: "unrecognized_keys",
                keys: unrecognized,
                input,
                inst
            });
        }
        if (!proms.length) return payload;
        return Promise.all(proms).then(()=>{
            return payload;
        });
    };
});
$ZodUnion = $constructor("$ZodUnion", (inst, def)=>{
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "optin", ()=>def.options.some((o)=>o._zod.optin === "optional") ? "optional" : void 0);
    defineLazy(inst._zod, "optout", ()=>def.options.some((o)=>o._zod.optout === "optional") ? "optional" : void 0);
    defineLazy(inst._zod, "values", ()=>{
        if (def.options.every((o)=>o._zod.values)) {
            return new Set(def.options.flatMap((option)=>Array.from(option._zod.values)));
        }
        return void 0;
    });
    defineLazy(inst._zod, "pattern", ()=>{
        if (def.options.every((o)=>o._zod.pattern)) {
            const patterns = def.options.map((o)=>o._zod.pattern);
            return new RegExp(`^(${patterns.map((p2)=>cleanRegex(p2.source)).join("|")})$`);
        }
        return void 0;
    });
    inst._zod.parse = (payload, ctx)=>{
        let async = false;
        const results = [];
        for (const option of def.options){
            const result = option._zod.run({
                value: payload.value,
                issues: []
            }, ctx);
            if (result instanceof Promise) {
                results.push(result);
                async = true;
            } else {
                if (result.issues.length === 0) return result;
                results.push(result);
            }
        }
        if (!async) return handleUnionResults(results, payload, inst, ctx);
        return Promise.all(results).then((results2)=>{
            return handleUnionResults(results2, payload, inst, ctx);
        });
    };
});
$ZodDiscriminatedUnion = $constructor("$ZodDiscriminatedUnion", (inst, def)=>{
    $ZodUnion.init(inst, def);
    const _super = inst._zod.parse;
    defineLazy(inst._zod, "propValues", ()=>{
        const propValues = {};
        for (const option of def.options){
            const pv = option._zod.propValues;
            if (!pv || Object.keys(pv).length === 0) throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
            for (const [k2, v2] of Object.entries(pv)){
                if (!propValues[k2]) propValues[k2] = new Set();
                for (const val of v2){
                    propValues[k2].add(val);
                }
            }
        }
        return propValues;
    });
    const disc = cached(()=>{
        const opts = def.options;
        const map4 = new Map();
        for (const o of opts){
            const values = o._zod.propValues[def.discriminator];
            if (!values || values.size === 0) throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(o)}"`);
            for (const v2 of values){
                if (map4.has(v2)) {
                    throw new Error(`Duplicate discriminator value "${String(v2)}"`);
                }
                map4.set(v2, o);
            }
        }
        return map4;
    });
    inst._zod.parse = (payload, ctx)=>{
        const input = payload.value;
        if (!isObject3(input)) {
            payload.issues.push({
                code: "invalid_type",
                expected: "object",
                input,
                inst
            });
            return payload;
        }
        const opt = disc.value.get(input?.[def.discriminator]);
        if (opt) {
            return opt._zod.run(payload, ctx);
        }
        if (def.unionFallback) {
            return _super(payload, ctx);
        }
        payload.issues.push({
            code: "invalid_union",
            errors: [],
            note: "No matching discriminator",
            input,
            path: [
                def.discriminator
            ],
            inst
        });
        return payload;
    };
});
$ZodIntersection = $constructor("$ZodIntersection", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx)=>{
        const input = payload.value;
        const left = def.left._zod.run({
            value: input,
            issues: []
        }, ctx);
        const right = def.right._zod.run({
            value: input,
            issues: []
        }, ctx);
        const async = left instanceof Promise || right instanceof Promise;
        if (async) {
            return Promise.all([
                left,
                right
            ]).then(([left2, right2])=>{
                return handleIntersectionResults(payload, left2, right2);
            });
        }
        return handleIntersectionResults(payload, left, right);
    };
});
$ZodRecord = $constructor("$ZodRecord", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx)=>{
        const input = payload.value;
        if (!isPlainObject(input)) {
            payload.issues.push({
                expected: "record",
                code: "invalid_type",
                input,
                inst
            });
            return payload;
        }
        const proms = [];
        if (def.keyType._zod.values) {
            const values = def.keyType._zod.values;
            payload.value = {};
            for (const key of values){
                if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
                    const result = def.valueType._zod.run({
                        value: input[key],
                        issues: []
                    }, ctx);
                    if (result instanceof Promise) {
                        proms.push(result.then((result2)=>{
                            if (result2.issues.length) {
                                payload.issues.push(...prefixIssues(key, result2.issues));
                            }
                            payload.value[key] = result2.value;
                        }));
                    } else {
                        if (result.issues.length) {
                            payload.issues.push(...prefixIssues(key, result.issues));
                        }
                        payload.value[key] = result.value;
                    }
                }
            }
            let unrecognized;
            for(const key in input){
                if (!values.has(key)) {
                    unrecognized = unrecognized ?? [];
                    unrecognized.push(key);
                }
            }
            if (unrecognized && unrecognized.length > 0) {
                payload.issues.push({
                    code: "unrecognized_keys",
                    input,
                    inst,
                    keys: unrecognized
                });
            }
        } else {
            payload.value = {};
            for (const key of Reflect.ownKeys(input)){
                if (key === "__proto__") continue;
                const keyResult = def.keyType._zod.run({
                    value: key,
                    issues: []
                }, ctx);
                if (keyResult instanceof Promise) {
                    throw new Error("Async schemas not supported in object keys currently");
                }
                if (keyResult.issues.length) {
                    payload.issues.push({
                        origin: "record",
                        code: "invalid_key",
                        issues: keyResult.issues.map((iss)=>finalizeIssue(iss, ctx, config())),
                        input: key,
                        path: [
                            key
                        ],
                        inst
                    });
                    payload.value[keyResult.value] = keyResult.value;
                    continue;
                }
                const result = def.valueType._zod.run({
                    value: input[key],
                    issues: []
                }, ctx);
                if (result instanceof Promise) {
                    proms.push(result.then((result2)=>{
                        if (result2.issues.length) {
                            payload.issues.push(...prefixIssues(key, result2.issues));
                        }
                        payload.value[keyResult.value] = result2.value;
                    }));
                } else {
                    if (result.issues.length) {
                        payload.issues.push(...prefixIssues(key, result.issues));
                    }
                    payload.value[keyResult.value] = result.value;
                }
            }
        }
        if (proms.length) {
            return Promise.all(proms).then(()=>payload);
        }
        return payload;
    };
});
$ZodEnum = $constructor("$ZodEnum", (inst, def)=>{
    $ZodType.init(inst, def);
    const values = getEnumValues(def.entries);
    inst._zod.values = new Set(values);
    inst._zod.pattern = new RegExp(`^(${values.filter((k2)=>propertyKeyTypes.has(typeof k2)).map((o)=>typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
    inst._zod.parse = (payload, _ctx)=>{
        const input = payload.value;
        if (inst._zod.values.has(input)) {
            return payload;
        }
        payload.issues.push({
            code: "invalid_value",
            values,
            input,
            inst
        });
        return payload;
    };
});
$ZodLiteral = $constructor("$ZodLiteral", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.values = new Set(def.values);
    inst._zod.pattern = new RegExp(`^(${def.values.map((o)=>typeof o === "string" ? escapeRegex(o) : o ? o.toString() : String(o)).join("|")})$`);
    inst._zod.parse = (payload, _ctx)=>{
        const input = payload.value;
        if (inst._zod.values.has(input)) {
            return payload;
        }
        payload.issues.push({
            code: "invalid_value",
            values: def.values,
            input,
            inst
        });
        return payload;
    };
});
$ZodTransform = $constructor("$ZodTransform", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx)=>{
        const _out = def.transform(payload.value, payload);
        if (_ctx.async) {
            const output = _out instanceof Promise ? _out : Promise.resolve(_out);
            return output.then((output2)=>{
                payload.value = output2;
                return payload;
            });
        }
        if (_out instanceof Promise) {
            throw new $ZodAsyncError();
        }
        payload.value = _out;
        return payload;
    };
});
$ZodOptional = $constructor("$ZodOptional", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    inst._zod.optout = "optional";
    defineLazy(inst._zod, "values", ()=>{
        return def.innerType._zod.values ? new Set([
            ...def.innerType._zod.values,
            void 0
        ]) : void 0;
    });
    defineLazy(inst._zod, "pattern", ()=>{
        const pattern = def.innerType._zod.pattern;
        return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
    });
    inst._zod.parse = (payload, ctx)=>{
        if (def.innerType._zod.optin === "optional") {
            return def.innerType._zod.run(payload, ctx);
        }
        if (payload.value === void 0) {
            return payload;
        }
        return def.innerType._zod.run(payload, ctx);
    };
});
$ZodNullable = $constructor("$ZodNullable", (inst, def)=>{
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "optin", ()=>def.innerType._zod.optin);
    defineLazy(inst._zod, "optout", ()=>def.innerType._zod.optout);
    defineLazy(inst._zod, "pattern", ()=>{
        const pattern = def.innerType._zod.pattern;
        return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
    });
    defineLazy(inst._zod, "values", ()=>{
        return def.innerType._zod.values ? new Set([
            ...def.innerType._zod.values,
            null
        ]) : void 0;
    });
    inst._zod.parse = (payload, ctx)=>{
        if (payload.value === null) return payload;
        return def.innerType._zod.run(payload, ctx);
    };
});
$ZodDefault = $constructor("$ZodDefault", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    defineLazy(inst._zod, "values", ()=>def.innerType._zod.values);
    inst._zod.parse = (payload, ctx)=>{
        if (payload.value === void 0) {
            payload.value = def.defaultValue;
            return payload;
        }
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result2)=>handleDefaultResult(result2, def));
        }
        return handleDefaultResult(result, def);
    };
});
$ZodPrefault = $constructor("$ZodPrefault", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    defineLazy(inst._zod, "values", ()=>def.innerType._zod.values);
    inst._zod.parse = (payload, ctx)=>{
        if (payload.value === void 0) {
            payload.value = def.defaultValue;
        }
        return def.innerType._zod.run(payload, ctx);
    };
});
$ZodNonOptional = $constructor("$ZodNonOptional", (inst, def)=>{
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "values", ()=>{
        const v2 = def.innerType._zod.values;
        return v2 ? new Set([
            ...v2
        ].filter((x)=>x !== void 0)) : void 0;
    });
    inst._zod.parse = (payload, ctx)=>{
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result2)=>handleNonOptionalResult(result2, inst));
        }
        return handleNonOptionalResult(result, inst);
    };
});
$ZodCatch = $constructor("$ZodCatch", (inst, def)=>{
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    defineLazy(inst._zod, "optout", ()=>def.innerType._zod.optout);
    defineLazy(inst._zod, "values", ()=>def.innerType._zod.values);
    inst._zod.parse = (payload, ctx)=>{
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then((result2)=>{
                payload.value = result2.value;
                if (result2.issues.length) {
                    payload.value = def.catchValue({
                        ...payload,
                        error: {
                            issues: result2.issues.map((iss)=>finalizeIssue(iss, ctx, config()))
                        },
                        input: payload.value
                    });
                    payload.issues = [];
                }
                return payload;
            });
        }
        payload.value = result.value;
        if (result.issues.length) {
            payload.value = def.catchValue({
                ...payload,
                error: {
                    issues: result.issues.map((iss)=>finalizeIssue(iss, ctx, config()))
                },
                input: payload.value
            });
            payload.issues = [];
        }
        return payload;
    };
});
$ZodPipe = $constructor("$ZodPipe", (inst, def)=>{
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "values", ()=>def.in._zod.values);
    defineLazy(inst._zod, "optin", ()=>def.in._zod.optin);
    defineLazy(inst._zod, "optout", ()=>def.out._zod.optout);
    inst._zod.parse = (payload, ctx)=>{
        const left = def.in._zod.run(payload, ctx);
        if (left instanceof Promise) {
            return left.then((left2)=>handlePipeResult(left2, def, ctx));
        }
        return handlePipeResult(left, def, ctx);
    };
});
$ZodReadonly = $constructor("$ZodReadonly", (inst, def)=>{
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "propValues", ()=>def.innerType._zod.propValues);
    defineLazy(inst._zod, "values", ()=>def.innerType._zod.values);
    defineLazy(inst._zod, "optin", ()=>def.innerType._zod.optin);
    defineLazy(inst._zod, "optout", ()=>def.innerType._zod.optout);
    inst._zod.parse = (payload, ctx)=>{
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
            return result.then(handleReadonlyResult);
        }
        return handleReadonlyResult(result);
    };
});
$ZodCustom = $constructor("$ZodCustom", (inst, def)=>{
    $ZodCheck.init(inst, def);
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _2)=>{
        return payload;
    };
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const r = def.fn(input);
        if (r instanceof Promise) {
            return r.then((r2)=>handleRefineResult(r2, payload, input, inst));
        }
        handleRefineResult(r, payload, input, inst);
        return;
    };
});

}
