require.r(exports);
require.d(exports, {
    getCursorServerUrlRetryDelayMs: ()=>getCursorServerUrlRetryDelayMs,
    getCursorServerUrlRetryStatusText: ()=>getCursorServerUrlRetryStatusText,
    getTerminalWorkerCursorServerUrlDetail: ()=>getTerminalWorkerCursorServerUrlDetail,
    isPodGoneCursorServerUrlError: ()=>isPodGoneCursorServerUrlError,
    isWorkbenchRetryableCursorServerUrlError: ()=>isWorkbenchRetryableCursorServerUrlError,
    retryGetCursorServerUrl: ()=>retryGetCursorServerUrl,
    shouldRetryCursorServerUrlError: ()=>shouldRetryCursorServerUrlError
});
var _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__ = require("./module-199.js");
var _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__ = require("./module-200.js");
var proto_aiserver_v1_utils_pb_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-55.js");
const CURSOR_SERVER_URL_RETRY_DELAYS_MS = [
    0,
    5e3,
    5e3,
    1e4,
    1e4,
    1e4,
    3e4,
    3e4,
    6e4
];
const NO_VM_CONNECTION_INFO_RETRY_WINDOW_MS = 3e4;
const TRANSIENT_RETRY_WINDOW_MS = 3 * 6e4;
const NO_POD_INFO_RETRY_WINDOW_MS = 1e4;
const POD_MIGRATING_RETRY_WINDOW_MS = 63e4;
const CURSOR_SERVER_URL_REASON_INFO_KEY = "cursorServerUrlReason";
const CURSOR_SERVER_URL_RETRY_REASON_INFO_KEY = "cursorServerUrlRetryReason";
function getCursorServerUrlRetryDelayMs(attempt) {
    return CURSOR_SERVER_URL_RETRY_DELAYS_MS[Math.min(attempt, CURSOR_SERVER_URL_RETRY_DELAYS_MS.length - 1)];
}
function shouldRetryCursorServerUrlError(error, elapsedMs = 0) {
    const retryWindowMs = getCursorServerUrlRetryWindowMs(error);
    return retryWindowMs !== void 0 && elapsedMs < retryWindowMs;
}
function getCursorServerUrlRetryStatusText(error) {
    if (getStructuredCursorServerUrlReason(error) !== "POD_MIGRATING") {
        return void 0;
    }
    const detail = error instanceof _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__.ConnectError ? error.findDetails(proto_aiserver_v1_utils_pb_js__WEBPACK_IMPORTED_MODULE_0__.ErrorDetails)[0]?.details?.detail.trim() : void 0;
    if (detail) {
        return detail;
    }
    const message = error instanceof _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__.ConnectError ? error.rawMessage : error instanceof Error ? error.message : void 0;
    const statusText = message?.replace(/\s*(?:\(cursorServerUrl(?:Retry)?Reason=[A-Z_]+\)\s*)+$/, "").trim();
    return statusText ? statusText : void 0;
}
function getCursorServerUrlRetryWindowMs(error) {
    const structuredReason = getStructuredCursorServerUrlReason(error);
    if (structuredReason !== void 0) {
        return getStructuredCursorServerUrlRetryWindowMs(structuredReason);
    }
    const code = getConnectErrorCode(error);
    if (code === _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.DeadlineExceeded || code === _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.Unavailable) {
        return TRANSIENT_RETRY_WINDOW_MS;
    }
    return void 0;
}
function isWorkbenchRetryableCursorServerUrlError(error) {
    const code = getConnectErrorCode(error);
    return code === _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.Internal || code === _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.Unknown || code === _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.DeadlineExceeded || code === _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.Unavailable;
}
function getStructuredCursorServerUrlReason(error) {
    const errorDetail = error instanceof _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__.ConnectError ? error.findDetails(proto_aiserver_v1_utils_pb_js__WEBPACK_IMPORTED_MODULE_0__.ErrorDetails)[0] : void 0;
    const retryReasonFromDetails = errorDetail?.details?.additionalInfo?.[CURSOR_SERVER_URL_RETRY_REASON_INFO_KEY];
    if (retryReasonFromDetails !== void 0 && retryReasonFromDetails !== "") {
        return retryReasonFromDetails;
    }
    const reasonFromDetails = errorDetail?.details?.additionalInfo?.[CURSOR_SERVER_URL_REASON_INFO_KEY];
    if (reasonFromDetails !== void 0 && reasonFromDetails !== "") {
        return reasonFromDetails;
    }
    const message = error instanceof Error ? error.message : void 0;
    const retryReasonMatch = message ? /cursorServerUrlRetryReason=([A-Z_]+)/.exec(message) : null;
    if (retryReasonMatch?.[1]) {
        return retryReasonMatch[1];
    }
    const reasonMatch = message ? /cursorServerUrlReason=([A-Z_]+)/.exec(message) : null;
    return reasonMatch?.[1];
}
function getStructuredCursorServerUrlRetryWindowMs(reason) {
    switch(reason){
        case "NO_POD_INFO_YET":
            return NO_POD_INFO_RETRY_WINDOW_MS;
        case "NO_VM_CONNECTION_INFO_YET":
            return NO_VM_CONNECTION_INFO_RETRY_WINDOW_MS;
        case "EXEC_DAEMON_NOT_READY":
        case "POD_REPLACEMENT_IN_PROGRESS":
        case "WORKER_OFFLINE":
            return TRANSIENT_RETRY_WINDOW_MS;
        case "POD_MIGRATING":
            return POD_MIGRATING_RETRY_WINDOW_MS;
        default:
            return void 0;
    }
}
function isPodGoneCursorServerUrlError(error) {
    return getConnectErrorCode(error) === _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.NotFound;
}
const TERMINAL_WORKER_REASONS = new Set([
    "WORKER_UPDATE_REQUIRED"
]);
function getTerminalWorkerCursorServerUrlDetail(error) {
    const reason = getStructuredCursorServerUrlReason(error);
    if (reason === void 0 || !TERMINAL_WORKER_REASONS.has(reason)) {
        return void 0;
    }
    const structuredDetail = error instanceof _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__.ConnectError ? error.findDetails(proto_aiserver_v1_utils_pb_js__WEBPACK_IMPORTED_MODULE_0__.ErrorDetails)[0]?.details?.detail : void 0;
    if (structuredDetail !== void 0 && structuredDetail !== "") {
        return structuredDetail;
    }
    const message = error instanceof Error ? error.message : String(error);
    const stripped = message.replace(/^\[[a-z_]+\]\s*/, "").replace(/\s*\(cursorServerUrlReason=[A-Z_]+\)\s*$/, "").trim();
    return stripped !== "" ? stripped : "This cloud agent's workspace is unavailable on its self-hosted worker.";
}
async function retryGetCursorServerUrl({ getCursorServerUrl, initialUseCache, sleep = defaultSleep, onRetry }) {
    let useCache = initialUseCache;
    const startedAtMs = Date.now();
    for(let attempt = 0;; attempt++){
        try {
            return await getCursorServerUrl(useCache);
        } catch (error) {
            const elapsedMs = Date.now() - startedAtMs;
            if (!shouldRetryCursorServerUrlError(error, elapsedMs)) {
                throw error;
            }
            const retryWindowMs = getCursorServerUrlRetryWindowMs(error);
            const remainingRetryWindowMs = retryWindowMs !== void 0 ? retryWindowMs - elapsedMs : 0;
            const delayMs = Math.min(getCursorServerUrlRetryDelayMs(attempt), Math.max(0, remainingRetryWindowMs));
            onRetry?.(error, attempt + 1, delayMs);
            if (delayMs > 0) {
                await sleep(delayMs);
            }
            useCache = false;
        }
    }
}
async function defaultSleep(ms) {
    await new Promise((resolve)=>setTimeout(resolve, ms));
}
function getConnectErrorCode(error) {
    if (error instanceof _connectrpc_connect__WEBPACK_IMPORTED_MODULE_1__.ConnectError) {
        return error.code;
    }
    if (typeof error === "object" && error !== null && "code" in error) {
        const code = error.code;
        if (typeof code === "number") {
            return connectCodeFromNumber(code);
        }
    }
    if (!(error instanceof Error)) {
        return void 0;
    }
    const messageMatch = /^\[([a-z_]+)\](?:\s|$)/.exec(error.message);
    if (messageMatch) {
        return connectCodeFromName(messageMatch[1]);
    }
    const stackMatch = typeof error.stack === "string" ? /(?:^|\n)\s*ConnectError:\s*\[([a-z_]+)\](?:\s|$)/.exec(error.stack) : null;
    if (stackMatch) {
        return connectCodeFromName(stackMatch[1]);
    }
    return void 0;
}
function connectCodeFromNumber(code) {
    switch(code){
        case _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.InvalidArgument:
            return _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.InvalidArgument;
        case _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.DeadlineExceeded:
            return _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.DeadlineExceeded;
        case _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.Unavailable:
            return _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.Unavailable;
        case _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.Internal:
            return _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.Internal;
        case _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.Unknown:
            return _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.Unknown;
        case _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.NotFound:
            return _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.NotFound;
        default:
            return void 0;
    }
}
function connectCodeFromName(name) {
    switch(name){
        case "invalid_argument":
            return _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.InvalidArgument;
        case "deadline_exceeded":
            return _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.DeadlineExceeded;
        case "unavailable":
            return _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.Unavailable;
        case "internal":
            return _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.Internal;
        case "unknown":
            return _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.Unknown;
        case "not_found":
            return _connectrpc_connect__WEBPACK_IMPORTED_MODULE_2__.Code.NotFound;
        default:
            return void 0;
    }
}
