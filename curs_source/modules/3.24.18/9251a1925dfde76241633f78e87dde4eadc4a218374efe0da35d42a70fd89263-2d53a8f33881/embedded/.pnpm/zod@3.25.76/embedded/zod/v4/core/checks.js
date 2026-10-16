import { $constructor } from "../../../../../../../esm_exports8.js";
import { init_core3 } from "./core.js";
import { init_regexes, integer, lowercase, uppercase } from "./regexes.js";
import { NUMBER_FORMAT_RANGES, init_util4 } from "./util.js";
import { escapeRegex, floatSafeRemainder2, getLengthableOrigin, nullish } from "../../../../../../../util_exports.js";
var $ZodCheck, numericOriginMap, $ZodCheckLessThan, $ZodCheckGreaterThan, $ZodCheckMultipleOf, $ZodCheckNumberFormat, $ZodCheckMaxLength, $ZodCheckMinLength, $ZodCheckLengthEquals, $ZodCheckStringFormat, $ZodCheckRegex, $ZodCheckLowerCase, $ZodCheckUpperCase, $ZodCheckIncludes, $ZodCheckStartsWith, $ZodCheckEndsWith, $ZodCheckOverwrite;
export { $ZodCheck, $ZodCheckEndsWith, $ZodCheckGreaterThan, $ZodCheckIncludes, $ZodCheckLengthEquals, $ZodCheckLessThan, $ZodCheckLowerCase, $ZodCheckMaxLength, $ZodCheckMinLength, $ZodCheckMultipleOf, $ZodCheckNumberFormat, $ZodCheckOverwrite, $ZodCheckRegex, $ZodCheckStartsWith, $ZodCheckStringFormat, $ZodCheckUpperCase, numericOriginMap };
var __wakaru_init_checks_initialized = false;
export function init_checks() {
if (__wakaru_init_checks_initialized) return;
__wakaru_init_checks_initialized = true;
init_core3();
init_regexes();
init_util4();
$ZodCheck = $constructor("$ZodCheck", (inst, def)=>{
    var _a18;
    inst._zod ?? (inst._zod = {});
    inst._zod.def = def;
    (_a18 = inst._zod).onattach ?? (_a18.onattach = []);
});
numericOriginMap = {
    number: "number",
    bigint: "bigint",
    object: "date"
};
$ZodCheckLessThan = $constructor("$ZodCheckLessThan", (inst, def)=>{
    $ZodCheck.init(inst, def);
    const origin = numericOriginMap[typeof def.value];
    inst._zod.onattach.push((inst2)=>{
        const bag = inst2._zod.bag;
        const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
        if (def.value < curr) {
            if (def.inclusive) bag.maximum = def.value;
            else bag.exclusiveMaximum = def.value;
        }
    });
    inst._zod.check = (payload)=>{
        if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
            return;
        }
        payload.issues.push({
            origin,
            code: "too_big",
            maximum: def.value,
            input: payload.value,
            inclusive: def.inclusive,
            inst,
            continue: !def.abort
        });
    };
});
$ZodCheckGreaterThan = $constructor("$ZodCheckGreaterThan", (inst, def)=>{
    $ZodCheck.init(inst, def);
    const origin = numericOriginMap[typeof def.value];
    inst._zod.onattach.push((inst2)=>{
        const bag = inst2._zod.bag;
        const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
        if (def.value > curr) {
            if (def.inclusive) bag.minimum = def.value;
            else bag.exclusiveMinimum = def.value;
        }
    });
    inst._zod.check = (payload)=>{
        if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
            return;
        }
        payload.issues.push({
            origin,
            code: "too_small",
            minimum: def.value,
            input: payload.value,
            inclusive: def.inclusive,
            inst,
            continue: !def.abort
        });
    };
});
$ZodCheckMultipleOf = $constructor("$ZodCheckMultipleOf", (inst, def)=>{
    $ZodCheck.init(inst, def);
    inst._zod.onattach.push((inst2)=>{
        var _a18;
        (_a18 = inst2._zod.bag).multipleOf ?? (_a18.multipleOf = def.value);
    });
    inst._zod.check = (payload)=>{
        if (typeof payload.value !== typeof def.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
        const isMultiple = typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder2(payload.value, def.value) === 0;
        if (isMultiple) return;
        payload.issues.push({
            origin: typeof payload.value,
            code: "not_multiple_of",
            divisor: def.value,
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
$ZodCheckNumberFormat = $constructor("$ZodCheckNumberFormat", (inst, def)=>{
    $ZodCheck.init(inst, def);
    def.format = def.format || "float64";
    const isInt = def.format?.includes("int");
    const origin = isInt ? "int" : "number";
    const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
    inst._zod.onattach.push((inst2)=>{
        const bag = inst2._zod.bag;
        bag.format = def.format;
        bag.minimum = minimum;
        bag.maximum = maximum;
        if (isInt) bag.pattern = integer;
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        if (isInt) {
            if (!Number.isInteger(input)) {
                payload.issues.push({
                    expected: origin,
                    format: def.format,
                    code: "invalid_type",
                    input,
                    inst
                });
                return;
            }
            if (!Number.isSafeInteger(input)) {
                if (input > 0) {
                    payload.issues.push({
                        input,
                        code: "too_big",
                        maximum: Number.MAX_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst,
                        origin,
                        continue: !def.abort
                    });
                } else {
                    payload.issues.push({
                        input,
                        code: "too_small",
                        minimum: Number.MIN_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst,
                        origin,
                        continue: !def.abort
                    });
                }
                return;
            }
        }
        if (input < minimum) {
            payload.issues.push({
                origin: "number",
                input,
                code: "too_small",
                minimum,
                inclusive: true,
                inst,
                continue: !def.abort
            });
        }
        if (input > maximum) {
            payload.issues.push({
                origin: "number",
                input,
                code: "too_big",
                maximum,
                inst
            });
        }
    };
});
$ZodCheckMaxLength = $constructor("$ZodCheckMaxLength", (inst, def)=>{
    var _a18;
    $ZodCheck.init(inst, def);
    (_a18 = inst._zod.def).when ?? (_a18.when = (payload)=>{
        const val = payload.value;
        return !nullish(val) && val.length !== void 0;
    });
    inst._zod.onattach.push((inst2)=>{
        const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        if (def.maximum < curr) inst2._zod.bag.maximum = def.maximum;
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const length = input.length;
        if (length <= def.maximum) return;
        const origin = getLengthableOrigin(input);
        payload.issues.push({
            origin,
            code: "too_big",
            maximum: def.maximum,
            inclusive: true,
            input,
            inst,
            continue: !def.abort
        });
    };
});
$ZodCheckMinLength = $constructor("$ZodCheckMinLength", (inst, def)=>{
    var _a18;
    $ZodCheck.init(inst, def);
    (_a18 = inst._zod.def).when ?? (_a18.when = (payload)=>{
        const val = payload.value;
        return !nullish(val) && val.length !== void 0;
    });
    inst._zod.onattach.push((inst2)=>{
        const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        if (def.minimum > curr) inst2._zod.bag.minimum = def.minimum;
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const length = input.length;
        if (length >= def.minimum) return;
        const origin = getLengthableOrigin(input);
        payload.issues.push({
            origin,
            code: "too_small",
            minimum: def.minimum,
            inclusive: true,
            input,
            inst,
            continue: !def.abort
        });
    };
});
$ZodCheckLengthEquals = $constructor("$ZodCheckLengthEquals", (inst, def)=>{
    var _a18;
    $ZodCheck.init(inst, def);
    (_a18 = inst._zod.def).when ?? (_a18.when = (payload)=>{
        const val = payload.value;
        return !nullish(val) && val.length !== void 0;
    });
    inst._zod.onattach.push((inst2)=>{
        const bag = inst2._zod.bag;
        bag.minimum = def.length;
        bag.maximum = def.length;
        bag.length = def.length;
    });
    inst._zod.check = (payload)=>{
        const input = payload.value;
        const length = input.length;
        if (length === def.length) return;
        const origin = getLengthableOrigin(input);
        const tooBig = length > def.length;
        payload.issues.push({
            origin,
            ...tooBig ? {
                code: "too_big",
                maximum: def.length
            } : {
                code: "too_small",
                minimum: def.length
            },
            inclusive: true,
            exact: true,
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
$ZodCheckStringFormat = $constructor("$ZodCheckStringFormat", (inst, def)=>{
    var _a18, _b2;
    $ZodCheck.init(inst, def);
    inst._zod.onattach.push((inst2)=>{
        const bag = inst2._zod.bag;
        bag.format = def.format;
        if (def.pattern) {
            bag.patterns ?? (bag.patterns = new Set());
            bag.patterns.add(def.pattern);
        }
    });
    if (def.pattern) (_a18 = inst._zod).check ?? (_a18.check = (payload)=>{
        def.pattern.lastIndex = 0;
        if (def.pattern.test(payload.value)) return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: def.format,
            input: payload.value,
            ...def.pattern ? {
                pattern: def.pattern.toString()
            } : {},
            inst,
            continue: !def.abort
        });
    });
    else (_b2 = inst._zod).check ?? (_b2.check = ()=>{});
});
$ZodCheckRegex = $constructor("$ZodCheckRegex", (inst, def)=>{
    $ZodCheckStringFormat.init(inst, def);
    inst._zod.check = (payload)=>{
        def.pattern.lastIndex = 0;
        if (def.pattern.test(payload.value)) return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "regex",
            input: payload.value,
            pattern: def.pattern.toString(),
            inst,
            continue: !def.abort
        });
    };
});
$ZodCheckLowerCase = $constructor("$ZodCheckLowerCase", (inst, def)=>{
    def.pattern ?? (def.pattern = lowercase);
    $ZodCheckStringFormat.init(inst, def);
});
$ZodCheckUpperCase = $constructor("$ZodCheckUpperCase", (inst, def)=>{
    def.pattern ?? (def.pattern = uppercase);
    $ZodCheckStringFormat.init(inst, def);
});
$ZodCheckIncludes = $constructor("$ZodCheckIncludes", (inst, def)=>{
    $ZodCheck.init(inst, def);
    const escapedRegex = escapeRegex(def.includes);
    const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
    def.pattern = pattern;
    inst._zod.onattach.push((inst2)=>{
        const bag = inst2._zod.bag;
        bag.patterns ?? (bag.patterns = new Set());
        bag.patterns.add(pattern);
    });
    inst._zod.check = (payload)=>{
        if (payload.value.includes(def.includes, def.position)) return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: def.includes,
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
$ZodCheckStartsWith = $constructor("$ZodCheckStartsWith", (inst, def)=>{
    $ZodCheck.init(inst, def);
    const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
    def.pattern ?? (def.pattern = pattern);
    inst._zod.onattach.push((inst2)=>{
        const bag = inst2._zod.bag;
        bag.patterns ?? (bag.patterns = new Set());
        bag.patterns.add(pattern);
    });
    inst._zod.check = (payload)=>{
        if (payload.value.startsWith(def.prefix)) return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: def.prefix,
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
$ZodCheckEndsWith = $constructor("$ZodCheckEndsWith", (inst, def)=>{
    $ZodCheck.init(inst, def);
    const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
    def.pattern ?? (def.pattern = pattern);
    inst._zod.onattach.push((inst2)=>{
        const bag = inst2._zod.bag;
        bag.patterns ?? (bag.patterns = new Set());
        bag.patterns.add(pattern);
    });
    inst._zod.check = (payload)=>{
        if (payload.value.endsWith(def.suffix)) return;
        payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: def.suffix,
            input: payload.value,
            inst,
            continue: !def.abort
        });
    };
});
$ZodCheckOverwrite = $constructor("$ZodCheckOverwrite", (inst, def)=>{
    $ZodCheck.init(inst, def);
    inst._zod.check = (payload)=>{
        payload.value = def.tx(payload.value);
    };
});

}
