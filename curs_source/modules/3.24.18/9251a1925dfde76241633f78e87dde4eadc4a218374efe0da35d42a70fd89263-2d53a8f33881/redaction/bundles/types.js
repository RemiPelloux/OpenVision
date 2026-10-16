import { _logger, allowedPurpose, formatRedacted, getRedactionAwareDisplayValue, logEnforcementSkipped, logUnspecifiedWarnings, resolveEnforceRedaction, shouldRedact, stringAtIndex, toPrivacyContext } from "../../mcp_sandbox_policy_exports.js";
import { init_classification } from "./classification.js";
import { init_privacy_context } from "./privacy-context.js";
import { init_privacy_mode } from "./privacy-mode.js";
import { init_shouldRedact } from "./shouldRedact.js";
var _a17, IS_DEV, REDACTION_LOG_MESSAGES, RedactedString, RedactedBytes;
export { IS_DEV, REDACTION_LOG_MESSAGES, RedactedBytes, RedactedString, _a17 };
var __wakaru_init_types11_initialized = false;
export function init_types11() {
if (__wakaru_init_types11_initialized) return;
__wakaru_init_types11_initialized = true;
"use strict";
init_classification();
init_privacy_context();
init_privacy_mode();
init_shouldRedact();
IS_DEV = typeof process !== "undefined" && process.env.NODE_ENV === "development" && process.env.VITEST !== "true";
REDACTION_LOG_MESSAGES = {
    UNSPECIFIED_FIELD: "[PRIVACY REDACTION] unwrapping UNSPECIFIED field \u2014 classify this field",
    UNSPECIFIED_PRIVACY_MODE: "[PRIVACY REDACTION] unwrapping with PrivacyMode.UNSPECIFIED \u2014 resolve privacy mode",
    LOGGER_NOT_INITIALIZED: "[PRIVACY REDACTION] logger not initialized \u2014 call setRedactionLogger() at process startup",
    ENFORCEMENT_SKIPPED: "[PRIVACY REDACTION] would have been redacted but enforceRedaction is false",
    LOGGING_ERROR: "[PRIVACY REDACTION] error logging violation",
    IMPLICIT_SERIALIZATION: "[PRIVACY REDACTION] implicit serialization of would-be-redacted field",
    IMPLICIT_SERIALIZATION_DEV: "[PRIVACY REDACTION] ERROR: Redaction via implicit serialization caught in test, please call unwrap() explicitly"
};
RedactedString = class {
    #value;
    #privacyContext;
    __classification;
    __fieldName;
    __isRedacted;
    __privacyMode;
    constructor(value, classification, fieldName, modeOrContext){
        const ctx = toPrivacyContext(modeOrContext);
        this.#value = value;
        this.#privacyContext = ctx;
        this.__classification = classification;
        this.__fieldName = fieldName;
        this.__privacyMode = ctx.privacyMode;
        this.__isRedacted = shouldRedact(ctx.privacyMode, classification);
    }
    #displayValue() {
        return getRedactionAwareDisplayValue({
            privacyMode: this.#privacyContext.privacyMode,
            classification: this.__classification,
            fieldName: this.__fieldName,
            unredactedValue: this.#value,
            enforceRedaction: this.#privacyContext.enforceRedaction
        });
    }
    #rewrap(newValue) {
        return new _a17(newValue, this.__classification, this.__fieldName, this.#privacyContext);
    }
    #logImplicitSerialization(serializationPath) {
        if (!this.__isRedacted || resolveEnforceRedaction(this.#privacyContext, this.__classification)) {
            return;
        }
        if (IS_DEV) {
            throw new Error(`${REDACTION_LOG_MESSAGES.IMPLICIT_SERIALIZATION_DEV} (field=${this.__fieldName}, classification=${this.__classification}, path=${serializationPath})`);
        }
        try {
            _logger?.info({
                redaction_field_name: this.__fieldName,
                redaction_classification: this.__classification,
                redaction_privacy_mode: this.__privacyMode,
                redaction_serialization_path: serializationPath
            }, REDACTION_LOG_MESSAGES.IMPLICIT_SERIALIZATION);
        } catch  {}
    }
    get length() {
        return this.#value.length;
    }
    get empty() {
        return this.#value.length === 0;
    }
    getPrivacyContext() {
        return this.#privacyContext.enforceRedaction !== void 0 ? {
            privacyMode: this.#privacyContext.privacyMode,
            enforceRedaction: this.#privacyContext.enforceRedaction
        } : {
            privacyMode: this.#privacyContext.privacyMode
        };
    }
    unwrap(purpose, opts) {
        const info2 = {
            fieldName: this.__fieldName,
            classification: this.__classification,
            privacyMode: this.__privacyMode
        };
        logUnspecifiedWarnings(info2);
        if (allowedPurpose(this.__privacyMode, purpose, this.__classification)) {
            return this.#value;
        }
        const enforce = opts?.enforcing || resolveEnforceRedaction(this.#privacyContext, this.__classification);
        if (!enforce && !IS_DEV) {
            logEnforcementSkipped(info2);
        }
        if (!enforce) {
            return this.#value;
        }
        if (opts?.redactUnallowedFieldsInsteadOfThrowing) {
            return formatRedacted(this.__fieldName);
        }
        throw new Error(`Unwrap not allowed for purpose ${purpose} with classification ${this.__classification} and privacy mode ${this.__privacyMode}`);
    }
    __clone(newValue) {
        return new _a17(newValue, this.__classification, `${this.__fieldName}.clone`, this.#privacyContext);
    }
    safeTransform(fn) {
        return this.#rewrap(fn(this.#value));
    }
    toString() {
        this.#logImplicitSerialization("toString");
        return this.#displayValue();
    }
    toJSON() {
        this.#logImplicitSerialization("toJSON");
        return this.#displayValue();
    }
    valueOf() {
        this.#logImplicitSerialization("valueOf");
        return this.#displayValue();
    }
    [Symbol.toPrimitive](hint) {
        if (hint === "string" || hint === "default") {
            this.#logImplicitSerialization("toPrimitive");
            return this.#displayValue();
        }
        return NaN;
    }
    get [Symbol.toStringTag]() {
        return "RedactedString";
    }
    startsWith(searchString, position) {
        return this.#value.startsWith(searchString, position);
    }
    endsWith(searchString, endPosition) {
        return this.#value.endsWith(searchString, endPosition);
    }
    includes(searchString, position) {
        return this.#value.includes(searchString, position);
    }
    trim() {
        return this.#rewrap(this.#value.trim());
    }
    trimStart() {
        return this.#rewrap(this.#value.trimStart());
    }
    trimLeft() {
        return this.#rewrap(this.#value.trimStart());
    }
    trimEnd() {
        return this.#rewrap(this.#value.trimEnd());
    }
    trimRight() {
        return this.#rewrap(this.#value.trimEnd());
    }
    slice(start, end) {
        return this.#rewrap(this.#value.slice(start, end));
    }
    substring(start, end) {
        return this.#rewrap(this.#value.substring(start, end));
    }
    substr(start, length) {
        return this.#rewrap(this.#value.substr(start, length));
    }
    toLowerCase() {
        return this.#rewrap(this.#value.toLowerCase());
    }
    toUpperCase() {
        return this.#rewrap(this.#value.toUpperCase());
    }
    toLocaleLowerCase(locales) {
        return this.#rewrap(this.#value.toLocaleLowerCase(locales));
    }
    toLocaleUpperCase(locales) {
        return this.#rewrap(this.#value.toLocaleUpperCase(locales));
    }
    replace(searchValue, replaceValue) {
        return this.#rewrap(this.#value.replace(searchValue, replaceValue));
    }
    replaceAll(searchValue, replaceValue) {
        return this.#rewrap(this.#value.replaceAll(searchValue, replaceValue));
    }
    padStart(maxLength, fillString) {
        return this.#rewrap(this.#value.padStart(maxLength, fillString));
    }
    padEnd(maxLength, fillString) {
        return this.#rewrap(this.#value.padEnd(maxLength, fillString));
    }
    repeat(count2) {
        return this.#rewrap(this.#value.repeat(count2));
    }
    normalize(form) {
        return this.#rewrap(this.#value.normalize(form));
    }
    concat(...strings) {
        return this.#rewrap(this.#value.concat(...strings));
    }
    charAt(pos) {
        return this.#rewrap(this.#value.charAt(pos));
    }
    at(index) {
        const char = stringAtIndex(this.#value, index);
        return char !== void 0 ? this.#rewrap(char) : void 0;
    }
    split(separator, limit) {
        return this.#value.split(separator, limit).map((s3)=>this.#rewrap(s3));
    }
    indexOf(searchString, position) {
        return this.#value.indexOf(searchString, position);
    }
    lastIndexOf(searchString, position) {
        return this.#value.lastIndexOf(searchString, position);
    }
    search(regexp) {
        return this.#value.search(regexp);
    }
    localeCompare(that, locales, options2) {
        return this.#value.localeCompare(that, locales, options2);
    }
};
_a17 = RedactedString;
RedactedBytes = class _RedactedBytes {
    #value;
    #privacyContext;
    __classification;
    __fieldName;
    __isRedacted;
    __privacyMode;
    constructor(value, classification, fieldName, modeOrContext){
        const ctx = toPrivacyContext(modeOrContext);
        this.#value = value;
        this.#privacyContext = ctx;
        this.__classification = classification;
        this.__fieldName = fieldName;
        this.__privacyMode = ctx.privacyMode;
        this.__isRedacted = shouldRedact(ctx.privacyMode, classification);
    }
    getPrivacyContext() {
        return this.#privacyContext.enforceRedaction !== void 0 ? {
            privacyMode: this.#privacyContext.privacyMode,
            enforceRedaction: this.#privacyContext.enforceRedaction
        } : {
            privacyMode: this.#privacyContext.privacyMode
        };
    }
    unwrap(purpose, opts) {
        const info2 = {
            fieldName: this.__fieldName,
            classification: this.__classification,
            privacyMode: this.__privacyMode
        };
        logUnspecifiedWarnings(info2);
        if (allowedPurpose(this.__privacyMode, purpose, this.__classification)) {
            return this.#value;
        }
        const enforce = opts?.enforcing || resolveEnforceRedaction(this.#privacyContext, this.__classification);
        if (!enforce && !IS_DEV) {
            logEnforcementSkipped(info2);
        }
        if (!enforce) {
            return this.#value;
        }
        if (opts?.redactUnallowedFieldsInsteadOfThrowing) {
            return new Uint8Array(0);
        }
        throw new Error(`Unwrap not allowed for purpose ${purpose} with classification ${this.__classification} and privacy mode ${this.__privacyMode}`);
    }
    __clone(newValue) {
        return new _RedactedBytes(newValue, this.__classification, this.__fieldName, this.#privacyContext);
    }
    get empty() {
        return this.#value.length === 0;
    }
    get length() {
        return this.#value.length;
    }
    safeTransform(fn) {
        return new _RedactedBytes(fn(this.#value), this.__classification, this.__fieldName, this.#privacyContext);
    }
};

}
