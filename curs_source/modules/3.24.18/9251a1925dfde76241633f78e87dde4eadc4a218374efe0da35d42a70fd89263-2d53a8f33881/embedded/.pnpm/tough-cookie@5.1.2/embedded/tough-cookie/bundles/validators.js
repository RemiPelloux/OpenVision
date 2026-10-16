import { require_utils2 } from "./utils.js";
var __wakaru_require_validators_cache;
export function require_validators() {
if (__wakaru_require_validators_cache) return __wakaru_require_validators_cache;
var exports2 = {};
__wakaru_require_validators_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.ParameterError = void 0;
exports2.isNonEmptyString = isNonEmptyString3;
exports2.isDate = isDate;
exports2.isEmptyString = isEmptyString;
exports2.isString = isString3;
exports2.isObject = isObject5;
exports2.isInteger = isInteger;
exports2.validate = validate;
var utils_1 = require_utils2();
function isNonEmptyString3(data) {
    return isString3(data) && data !== "";
}
function isDate(data) {
    return data instanceof Date && isInteger(data.getTime());
}
function isEmptyString(data) {
    return data === "" || data instanceof String && data.toString() === "";
}
function isString3(data) {
    return typeof data === "string" || data instanceof String;
}
function isObject5(data) {
    return (0, utils_1.objectToString)(data) === "[object Object]";
}
function isInteger(data) {
    return typeof data === "number" && data % 1 === 0;
}
function validate(bool2, cbOrMessage, message) {
    if (bool2) return;
    const cb = typeof cbOrMessage === "function" ? cbOrMessage : void 0;
    let options2 = typeof cbOrMessage === "function" ? message : cbOrMessage;
    if (!isObject5(options2)) options2 = "[object Object]";
    const err = new ParameterError((0, utils_1.safeToString)(options2));
    if (cb) cb(err);
    else throw err;
}
var ParameterError = class extends Error {
};
exports2.ParameterError = ParameterError;

return exports2;
}
