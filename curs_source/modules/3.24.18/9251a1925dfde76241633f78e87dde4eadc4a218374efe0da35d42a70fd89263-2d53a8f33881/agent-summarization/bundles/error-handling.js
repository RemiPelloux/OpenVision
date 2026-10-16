import { init_dist26 } from "../../chat-inference/dist/index.js";
var NoSummaryResponseError, SummaryPlaceholderRejectedError, CONNECT_ERROR_CODES, TOO_MANY_IMAGES_OR_DOCUMENTS_MESSAGE_MARKERS, CannotTruncatePromptError;
export { CONNECT_ERROR_CODES, CannotTruncatePromptError, NoSummaryResponseError, SummaryPlaceholderRejectedError, TOO_MANY_IMAGES_OR_DOCUMENTS_MESSAGE_MARKERS };
var __wakaru_init_error_handling_initialized = false;
export function init_error_handling() {
if (__wakaru_init_error_handling_initialized) return;
__wakaru_init_error_handling_initialized = true;
"use strict";
init_dist26();
NoSummaryResponseError = class _NoSummaryResponseError extends Error {
    constructor(){
        super("No assistant response received");
        this.name = "NoSummaryResponseError";
        Object.setPrototypeOf(this, _NoSummaryResponseError.prototype);
    }
};
SummaryPlaceholderRejectedError = class extends Error {
    constructor(details){
        super(`Context summarization on ${details.summarizerModelId} failed (${details.errorKind}); the previous context was kept`);
        this.name = "SummaryPlaceholderRejectedError";
        Object.setPrototypeOf(this, new.target.prototype);
        this.errorKind = details.errorKind;
        this.summarizerModelId = details.summarizerModelId;
    }
};
CONNECT_ERROR_CODES = {
    InvalidArgument: 3,
    NotFound: 5,
    ResourceExhausted: 8,
    Aborted: 10,
    Unavailable: 14,
    Unauthenticated: 16
};
TOO_MANY_IMAGES_OR_DOCUMENTS_MESSAGE_MARKERS = [
    "request contained too many images or documents",
    "too many images or documents error",
    "too many images and documents",
    "too much media"
];
CannotTruncatePromptError = class extends Error {
    constructor(message, details){
        super(message);
        this.name = "CannotTruncatePromptError";
        Object.setPrototypeOf(this, new.target.prototype);
        this.totalMessages = details.totalMessages;
        this.originalChars = details.originalChars;
        this.budgetChars = details.budgetChars;
    }
};

}
