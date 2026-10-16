import { init_util, util } from "./helpers/util.js";
var ZodIssueCode, quotelessJson, ZodError;
export { ZodError, ZodIssueCode, quotelessJson };
var __wakaru_init_ZodError_initialized = false;
export function init_ZodError() {
if (__wakaru_init_ZodError_initialized) return;
__wakaru_init_ZodError_initialized = true;
init_util();
ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
]);
quotelessJson = (obj)=>{
    const json2 = JSON.stringify(obj, null, 2);
    return json2.replace(/"([^"]+)":/g, "$1:");
};
ZodError = class _ZodError extends Error {
    get errors() {
        return this.issues;
    }
    constructor(issues){
        super();
        this.issues = [];
        this.addIssue = (sub)=>{
            this.issues = [
                ...this.issues,
                sub
            ];
        };
        this.addIssues = (subs = [])=>{
            this.issues = [
                ...this.issues,
                ...subs
            ];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(this, actualProto);
        } else {
            this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
    }
    format(_mapper) {
        const mapper = _mapper || function(issue2) {
            return issue2.message;
        };
        const fieldErrors = {
            _errors: []
        };
        const processError = (error3)=>{
            for (const issue2 of error3.issues){
                if (issue2.code === "invalid_union") {
                    issue2.unionErrors.map(processError);
                } else if (issue2.code === "invalid_return_type") {
                    processError(issue2.returnTypeError);
                } else if (issue2.code === "invalid_arguments") {
                    processError(issue2.argumentsError);
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
        processError(this);
        return fieldErrors;
    }
    static assert(value) {
        if (!(value instanceof _ZodError)) {
            throw new Error(`Not a ZodError: ${value}`);
        }
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(mapper = (issue2)=>issue2.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues){
            if (sub.path.length > 0) {
                const firstEl = sub.path[0];
                fieldErrors[firstEl] = fieldErrors[firstEl] || [];
                fieldErrors[firstEl].push(mapper(sub));
            } else {
                formErrors.push(mapper(sub));
            }
        }
        return {
            formErrors,
            fieldErrors
        };
    }
    get formErrors() {
        return this.flatten();
    }
};
ZodError.create = (issues)=>{
    const error3 = new ZodError(issues);
    return error3;
};

}
