import { init_relayed_attempt_failure } from "./relayed-attempt-failure.js";
import { init_dist5 } from "../../agent-kv/dist/index.js";
import { Code } from "../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/code.js";
import { init_esm3 } from "../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { ErrorDetails_Error, init_utils_pb2 } from "../../proto/dist/generated/aiserver/v1/utils_pb.js";
var AgentError, RetriableError, ActionRequiredError, NonRetriableError, MaxStepsReachedError, MaxStepsUnsupportedError, CancelledError, AUTH_CODES, UPGRADE_CODES, PAYMENT_CODES, CONFIG_CODES, CANCELLED_CODES, TERMINAL_MESSAGE_CODES, TERMINAL_CONNECT_CODE_TITLES, TRANSPORT_PATTERNS, NETWORK_ERRNO_CODES, NETWORK_ERRNO_RE, INFERENCE_ERROR_RETRY_DENYLIST, INFERENCE_REQUEST_ERROR_TYPE_HEADER, AGENT_WEBSOCKET_DELIVERY_AMBIGUOUS_ERROR_NAME, SUMMARY_PLACEHOLDER_REJECTED_ERROR_NAME;
export { AGENT_WEBSOCKET_DELIVERY_AMBIGUOUS_ERROR_NAME, AUTH_CODES, ActionRequiredError, AgentError, CANCELLED_CODES, CONFIG_CODES, CancelledError, INFERENCE_ERROR_RETRY_DENYLIST, INFERENCE_REQUEST_ERROR_TYPE_HEADER, MaxStepsReachedError, MaxStepsUnsupportedError, NETWORK_ERRNO_CODES, NETWORK_ERRNO_RE, NonRetriableError, PAYMENT_CODES, RetriableError, SUMMARY_PLACEHOLDER_REJECTED_ERROR_NAME, TERMINAL_CONNECT_CODE_TITLES, TERMINAL_MESSAGE_CODES, TRANSPORT_PATTERNS, UPGRADE_CODES };
var __wakaru_init_errors2_initialized = false;
export function init_errors2() {
if (__wakaru_init_errors2_initialized) return;
__wakaru_init_errors2_initialized = true;
"use strict";
init_dist5();
init_utils_pb2();
init_esm3();
init_relayed_attempt_failure();
AgentError = class extends Error {
    constructor(message, options2 = {}){
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.cause = options2.cause;
        this.requestId = options2.requestId;
        this.displayInfo = options2.displayInfo;
        this.isTransport = options2.isTransport;
    }
    get name() {
        return this.kind;
    }
};
RetriableError = class extends AgentError {
    get kind() {
        return "RetriableError";
    }
};
ActionRequiredError = class extends AgentError {
    constructor(message, action, options2 = {}){
        super(message, options2);
        this.action = action;
    }
    get kind() {
        return "ActionRequiredError";
    }
};
NonRetriableError = class extends AgentError {
    get kind() {
        return "NonRetriableError";
    }
};
MaxStepsReachedError = class extends NonRetriableError {
    constructor(maxSteps, options2 = {}){
        const message = `Stopped at this turn's step limit (${maxSteps}).`;
        super(message, {
            ...options2,
            displayInfo: {
                ...options2.displayInfo,
                title: "Maximum steps reached",
                detail: message,
                isRetryable: false
            }
        });
        this.maxSteps = maxSteps;
    }
    get kind() {
        return "MaxStepsReachedError";
    }
};
MaxStepsUnsupportedError = class extends NonRetriableError {
    constructor(maxSteps){
        const message = `This turn's step limit (${maxSteps}) needs an in-process agent loop; the network client cannot send it.`;
        super(message, {
            displayInfo: {
                title: "Step limit not supported",
                detail: message,
                isRetryable: false
            }
        });
        this.maxSteps = maxSteps;
    }
};
CancelledError = class extends AgentError {
    get kind() {
        return "CancelledError";
    }
};
AUTH_CODES = new Set([
    ErrorDetails_Error.NOT_LOGGED_IN,
    ErrorDetails_Error.AGENT_REQUIRES_LOGIN,
    ErrorDetails_Error.AUTH_TOKEN_NOT_FOUND,
    ErrorDetails_Error.AUTH_TOKEN_EXPIRED,
    ErrorDetails_Error.INVALID_AUTH_ID,
    ErrorDetails_Error.UNAUTHORIZED,
    ErrorDetails_Error.GITHUB_NO_USER_CREDENTIALS,
    ErrorDetails_Error.GITHUB_USER_NO_ACCESS
]);
UPGRADE_CODES = new Set([
    ErrorDetails_Error.FREE_USER_USAGE_LIMIT,
    ErrorDetails_Error.FREE_USER_RATE_LIMIT_EXCEEDED,
    ErrorDetails_Error.PRO_USER_ONLY,
    ErrorDetails_Error.PRO_USER_USAGE_LIMIT,
    ErrorDetails_Error.PRO_USER_RATE_LIMIT_EXCEEDED,
    ErrorDetails_Error.RATE_LIMITED,
    ErrorDetails_Error.RATE_LIMITED_CHANGEABLE,
    ErrorDetails_Error.GENERIC_RATE_LIMIT_EXCEEDED
]);
PAYMENT_CODES = new Set([
    ErrorDetails_Error.USAGE_PRICING_REQUIRED,
    ErrorDetails_Error.USAGE_PRICING_REQUIRED_CHANGEABLE
]);
CONFIG_CODES = new Set([
    ErrorDetails_Error.BAD_API_KEY,
    ErrorDetails_Error.BAD_USER_API_KEY,
    ErrorDetails_Error.OUTDATED_CLIENT
]);
CANCELLED_CODES = new Set([
    ErrorDetails_Error.USER_ABORTED_REQUEST,
    ErrorDetails_Error.DEBOUNCED
]);
TERMINAL_MESSAGE_CODES = new Set([
    ErrorDetails_Error.CUSTOM_MESSAGE
]);
TERMINAL_CONNECT_CODE_TITLES = new Map([
    [
        Code.PermissionDenied,
        "Permission Denied"
    ]
]);
TRANSPORT_PATTERNS = [
    "NGHTTP2",
    "ECONNRESET",
    "ECONNREFUSED",
    "ETIMEDOUT",
    "EPIPE",
    "socket hang up",
    "Premature close",
    "UND_ERR_SOCKET",
    "ERR_STREAM",
    "protocol error",
    "http/2 stream",
    "ERR_HTTP2_SESSION_ERROR",
    "Session closed with error code",
    "connection aborted"
];
NETWORK_ERRNO_CODES = new Set([
    "ENOTFOUND",
    "EAI_AGAIN",
    "EAI_FAIL",
    "ENODATA",
    "ESERVFAIL",
    "EHOSTUNREACH",
    "ENETDOWN",
    "ENETUNREACH",
    "ECONNABORTED"
]);
NETWORK_ERRNO_RE = new RegExp(`\\b(${[
    ...NETWORK_ERRNO_CODES
].join("|")})\\b`);
INFERENCE_ERROR_RETRY_DENYLIST = [
    "IMAGE_TOO_LARGE",
    "MAX_TOKENS",
    "CONVERSATION_TOO_LONG",
    "CONTENT_POLICY",
    "DEPRECATED",
    "MAX_MODE_REQUIRED",
    "MODEL_NO_LONGER_SUPPORTED",
    "UNSUPPORTED_REGION",
    "OUTDATED_CLIENT"
];
INFERENCE_REQUEST_ERROR_TYPE_HEADER = "x-cursor-inference-request-error-type";
AGENT_WEBSOCKET_DELIVERY_AMBIGUOUS_ERROR_NAME = "AgentWebSocketDeliveryAmbiguousError";
SUMMARY_PLACEHOLDER_REJECTED_ERROR_NAME = "SummaryPlaceholderRejectedError";

}
