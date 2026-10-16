import { getErrorMessage2 } from "../../../../../../../mcp_sandbox_policy_exports.js";
var marker, symbol, _a3, _AISDKError, AISDKError, name, marker2, symbol2, _a22, APICallError, name2, marker3, symbol3, _a32, EmptyResponseBodyError, name3, marker4, symbol4, _a4, InvalidArgumentError, name4, marker5, symbol5, _a5, InvalidPromptError, name5, marker6, symbol6, _a6, InvalidResponseDataError, name6, marker7, symbol7, _a7, JSONParseError, name7, marker8, symbol8, _a8, LoadAPIKeyError, name8, marker9, symbol9, _a9, name9, marker10, symbol10, _a10, name10, marker11, symbol11, _a11, name11, marker12, symbol12, _a12, TooManyEmbeddingValuesForCallError, name12, marker13, symbol13, _a13, _TypeValidationError, TypeValidationError, name13, marker14, symbol14, _a14, UnsupportedFunctionalityError;
export { AISDKError, APICallError, EmptyResponseBodyError, InvalidArgumentError, InvalidPromptError, InvalidResponseDataError, JSONParseError, LoadAPIKeyError, TooManyEmbeddingValuesForCallError, TypeValidationError, UnsupportedFunctionalityError, _AISDKError, _TypeValidationError, _a10, _a11, _a12, _a13, _a14, _a22, _a3, _a32, _a4, _a5, _a6, _a7, _a8, _a9, marker, marker10, marker11, marker12, marker13, marker14, marker2, marker3, marker4, marker5, marker6, marker7, marker8, marker9, name, name10, name11, name12, name13, name2, name3, name4, name5, name6, name7, name8, name9, symbol, symbol10, symbol11, symbol12, symbol13, symbol14, symbol2, symbol3, symbol4, symbol5, symbol6, symbol7, symbol8, symbol9 };
var __wakaru_init_dist22_initialized = false;
export function init_dist22() {
if (__wakaru_init_dist22_initialized) return;
__wakaru_init_dist22_initialized = true;
marker = "vercel.ai.error";
symbol = Symbol.for(marker);
_AISDKError = class _AISDKError2 extends Error {
    constructor({ name: name143, message, cause }){
        super(message);
        this[_a3] = true;
        this.name = name143;
        this.cause = cause;
    }
    static isInstance(error3) {
        return _AISDKError2.hasMarker(error3, marker);
    }
    static hasMarker(error3, marker153) {
        const markerSymbol = Symbol.for(marker153);
        return error3 != null && typeof error3 === "object" && markerSymbol in error3 && typeof error3[markerSymbol] === "boolean" && error3[markerSymbol] === true;
    }
};
_a3 = symbol;
AISDKError = _AISDKError;
name = "AI_APICallError";
marker2 = `vercel.ai.error.${name}`;
symbol2 = Symbol.for(marker2);
APICallError = class extends AISDKError {
    constructor({ message, url: url2, requestBodyValues, statusCode, responseHeaders, responseBody, cause, isRetryable = statusCode != null && (statusCode === 408 || statusCode === 409 || statusCode === 429 || statusCode >= 500), data }){
        super({
            name,
            message,
            cause
        });
        this[_a22] = true;
        this.url = url2;
        this.requestBodyValues = requestBodyValues;
        this.statusCode = statusCode;
        this.responseHeaders = responseHeaders;
        this.responseBody = responseBody;
        this.isRetryable = isRetryable;
        this.data = data;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker2);
    }
};
_a22 = symbol2;
name2 = "AI_EmptyResponseBodyError";
marker3 = `vercel.ai.error.${name2}`;
symbol3 = Symbol.for(marker3);
EmptyResponseBodyError = class extends AISDKError {
    constructor({ message = "Empty response body" } = {}){
        super({
            name: name2,
            message
        });
        this[_a32] = true;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker3);
    }
};
_a32 = symbol3;
name3 = "AI_InvalidArgumentError";
marker4 = `vercel.ai.error.${name3}`;
symbol4 = Symbol.for(marker4);
InvalidArgumentError = class extends AISDKError {
    constructor({ message, cause, argument }){
        super({
            name: name3,
            message,
            cause
        });
        this[_a4] = true;
        this.argument = argument;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker4);
    }
};
_a4 = symbol4;
name4 = "AI_InvalidPromptError";
marker5 = `vercel.ai.error.${name4}`;
symbol5 = Symbol.for(marker5);
InvalidPromptError = class extends AISDKError {
    constructor({ prompt, message, cause }){
        super({
            name: name4,
            message: `Invalid prompt: ${message}`,
            cause
        });
        this[_a5] = true;
        this.prompt = prompt;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker5);
    }
};
_a5 = symbol5;
name5 = "AI_InvalidResponseDataError";
marker6 = `vercel.ai.error.${name5}`;
symbol6 = Symbol.for(marker6);
InvalidResponseDataError = class extends AISDKError {
    constructor({ data, message = `Invalid response data: ${JSON.stringify(data)}.` }){
        super({
            name: name5,
            message
        });
        this[_a6] = true;
        this.data = data;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker6);
    }
};
_a6 = symbol6;
name6 = "AI_JSONParseError";
marker7 = `vercel.ai.error.${name6}`;
symbol7 = Symbol.for(marker7);
JSONParseError = class extends AISDKError {
    constructor({ text: text4, cause }){
        super({
            name: name6,
            message: `JSON parsing failed: Text: ${text4}.
Error message: ${getErrorMessage2(cause)}`,
            cause
        });
        this[_a7] = true;
        this.text = text4;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker7);
    }
};
_a7 = symbol7;
name7 = "AI_LoadAPIKeyError";
marker8 = `vercel.ai.error.${name7}`;
symbol8 = Symbol.for(marker8);
LoadAPIKeyError = class extends AISDKError {
    constructor({ message }){
        super({
            name: name7,
            message
        });
        this[_a8] = true;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker8);
    }
};
_a8 = symbol8;
name8 = "AI_LoadSettingError";
marker9 = `vercel.ai.error.${name8}`;
symbol9 = Symbol.for(marker9);
_a9 = symbol9;
name9 = "AI_NoContentGeneratedError";
marker10 = `vercel.ai.error.${name9}`;
symbol10 = Symbol.for(marker10);
_a10 = symbol10;
name10 = "AI_NoSuchModelError";
marker11 = `vercel.ai.error.${name10}`;
symbol11 = Symbol.for(marker11);
_a11 = symbol11;
name11 = "AI_TooManyEmbeddingValuesForCallError";
marker12 = `vercel.ai.error.${name11}`;
symbol12 = Symbol.for(marker12);
TooManyEmbeddingValuesForCallError = class extends AISDKError {
    constructor(options2){
        super({
            name: name11,
            message: `Too many values for a single embedding call. The ${options2.provider} model "${options2.modelId}" can only embed up to ${options2.maxEmbeddingsPerCall} values per call, but ${options2.values.length} values were provided.`
        });
        this[_a12] = true;
        this.provider = options2.provider;
        this.modelId = options2.modelId;
        this.maxEmbeddingsPerCall = options2.maxEmbeddingsPerCall;
        this.values = options2.values;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker12);
    }
};
_a12 = symbol12;
name12 = "AI_TypeValidationError";
marker13 = `vercel.ai.error.${name12}`;
symbol13 = Symbol.for(marker13);
_TypeValidationError = class _TypeValidationError2 extends AISDKError {
    constructor({ value, cause }){
        super({
            name: name12,
            message: `Type validation failed: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage2(cause)}`,
            cause
        });
        this[_a13] = true;
        this.value = value;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker13);
    }
    static wrap({ value, cause }) {
        return _TypeValidationError2.isInstance(cause) && cause.value === value ? cause : new _TypeValidationError2({
            value,
            cause
        });
    }
};
_a13 = symbol13;
TypeValidationError = _TypeValidationError;
name13 = "AI_UnsupportedFunctionalityError";
marker14 = `vercel.ai.error.${name13}`;
symbol14 = Symbol.for(marker14);
UnsupportedFunctionalityError = class extends AISDKError {
    constructor({ functionality, message = `'${functionality}' functionality not supported.` }){
        super({
            name: name13,
            message
        });
        this[_a14] = true;
        this.functionality = functionality;
    }
    static isInstance(error3) {
        return AISDKError.hasMarker(error3, marker14);
    }
};
_a14 = symbol14;

}
