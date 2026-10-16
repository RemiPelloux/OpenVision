import { getRedactionAwareDisplayValue, toPrivacyContext } from "../../mcp_sandbox_policy_exports.js";
import { DataClassification, init_classification } from "./classification.js";
import { init_factory } from "./factory.js";
import { init_privacy_context } from "./privacy-context.js";
import { PrivacyMode2, init_privacy_mode } from "./privacy-mode.js";
import { init_shouldRedact } from "./shouldRedact.js";
import { init_types11 } from "./types.js";
var RedactedTextPart, RedactedImagePart, RedactedFilePart, RedactedToolCallPart, RedactedUnknownPart, RedactedToolResultPart, DEFAULT_MEMO_CONFIG, memoConfig, coreMessageCachesByContext;
export { DEFAULT_MEMO_CONFIG, RedactedFilePart, RedactedImagePart, RedactedTextPart, RedactedToolCallPart, RedactedToolResultPart, RedactedUnknownPart, coreMessageCachesByContext, memoConfig };
var __wakaru_init_core_message_initialized = false;
export function init_core_message() {
if (__wakaru_init_core_message_initialized) return;
__wakaru_init_core_message_initialized = true;
"use strict";
init_privacy_mode();
init_classification();
init_factory();
init_privacy_context();
init_shouldRedact();
init_types11();
RedactedTextPart = class {
    text;
    providerOptions;
    type = "text";
    constructor(text4, providerOptions){
        this.text = text4;
        this.providerOptions = providerOptions;
    }
    toString() {
        return String(this.text);
    }
};
RedactedImagePart = class {
    image;
    mimeType;
    providerOptions;
    type = "image";
    __privacyContext;
    constructor(image2, mimeType, providerOptions, modeOrContext){
        this.image = image2;
        this.mimeType = mimeType;
        this.providerOptions = providerOptions;
        this.__privacyContext = modeOrContext ? toPrivacyContext(modeOrContext) : {
            privacyMode: PrivacyMode2.UNSPECIFIED
        };
    }
    toString() {
        const unredactedValue = typeof this.image === "string" ? this.image : this.image.toString();
        return getRedactionAwareDisplayValue({
            privacyMode: this.__privacyContext.privacyMode,
            classification: DataClassification.CODE,
            fieldName: "image",
            unredactedValue,
            enforceRedaction: this.__privacyContext.enforceRedaction
        });
    }
    toJSON() {
        return this.toString();
    }
};
RedactedFilePart = class {
    data;
    mimeType;
    providerOptions;
    type = "file";
    __privacyContext;
    constructor(data, mimeType, providerOptions, modeOrContext){
        this.data = data;
        this.mimeType = mimeType;
        this.providerOptions = providerOptions;
        this.__privacyContext = modeOrContext ? toPrivacyContext(modeOrContext) : {
            privacyMode: PrivacyMode2.UNSPECIFIED
        };
    }
    toString() {
        const unredactedValue = typeof this.data === "string" ? this.data : this.data.toString();
        return getRedactionAwareDisplayValue({
            privacyMode: this.__privacyContext.privacyMode,
            classification: DataClassification.CODE,
            fieldName: "file",
            unredactedValue,
            enforceRedaction: this.__privacyContext.enforceRedaction
        });
    }
    toJSON() {
        return this.toString();
    }
};
RedactedToolCallPart = class {
    type = "tool-call";
    toolCallId;
    toolName;
    args;
    providerOptions;
    constructor(params){
        this.toolCallId = params.toolCallId;
        this.toolName = params.toolName;
        this.args = params.args;
        this.providerOptions = params.providerOptions;
    }
    toString() {
        return String(this.args);
    }
};
RedactedUnknownPart = class {
    originalType;
    data;
    type = "unknown";
    constructor(originalType, data){
        this.originalType = originalType;
        this.data = data;
    }
    toString() {
        return String(this.data);
    }
};
RedactedToolResultPart = class {
    type = "tool-result";
    toolCallId;
    toolName;
    result;
    isError;
    providerOptions;
    experimental_content;
    constructor(params){
        this.toolCallId = params.toolCallId;
        this.toolName = params.toolName;
        this.result = params.result;
        this.isError = params.isError;
        this.providerOptions = params.providerOptions;
        this.experimental_content = params.experimental_content;
    }
    toString() {
        return String(this.result);
    }
};
DEFAULT_MEMO_CONFIG = {
    messageIdentity: true,
    contentIdentity: true
};
memoConfig = {
    ...DEFAULT_MEMO_CONFIG
};
coreMessageCachesByContext = new Map();

}
