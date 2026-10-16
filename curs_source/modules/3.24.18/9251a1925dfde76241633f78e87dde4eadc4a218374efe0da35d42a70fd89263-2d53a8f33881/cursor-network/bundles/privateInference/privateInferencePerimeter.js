import { require_privateInferenceRpcAllowlist } from "./privateInferenceRpcAllowlist.js";
import { require_cjs3 } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/index.js";
var __wakaru_require_privateInferencePerimeter_cache;
export function require_privateInferencePerimeter() {
if (__wakaru_require_privateInferencePerimeter_cache) return __wakaru_require_privateInferencePerimeter_cache;
var exports2 = {};
__wakaru_require_privateInferencePerimeter_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.PRIVATE_INFERENCE_PENDING_HOLD_MS = exports2.PRIVATE_INFERENCE_BLOCKED_MESSAGE_PREFIX = void 0;
exports2.isPrivateInferenceRpcAllowedInState = isPrivateInferenceRpcAllowedInState;
exports2.createBlockedRpcError = createBlockedRpcError;
exports2.isPrivateInferenceBlockedRpcError = isPrivateInferenceBlockedRpcError;
exports2.waitForPrivateInferenceEnablement = waitForPrivateInferenceEnablement;
exports2.createPrivateInferencePerimeterInterceptor = createPrivateInferencePerimeterInterceptor;
var connect_1 = require_cjs3();
var privateInferenceRpcAllowlist_js_1 = require_privateInferenceRpcAllowlist();
exports2.PRIVATE_INFERENCE_BLOCKED_MESSAGE_PREFIX = "private inference perimeter:";
function isPrivateInferenceRpcAllowedInState(state, serviceTypeName, methodName) {
    return state === "disabled" || (0, privateInferenceRpcAllowlist_js_1.isPrivateInferenceAllowlistedRpc)(serviceTypeName, methodName);
}
function createBlockedRpcError(serviceTypeName, methodName) {
    return new connect_1.ConnectError(`${exports2.PRIVATE_INFERENCE_BLOCKED_MESSAGE_PREFIX} ${serviceTypeName}/${methodName} is disabled under private inference`, connect_1.Code.FailedPrecondition);
}
function isPrivateInferenceBlockedRpcError(error3) {
    if (!(error3 instanceof connect_1.ConnectError)) {
        return false;
    }
    return error3.code === connect_1.Code.FailedPrecondition && error3.rawMessage.startsWith(exports2.PRIVATE_INFERENCE_BLOCKED_MESSAGE_PREFIX);
}
exports2.PRIVATE_INFERENCE_PENDING_HOLD_MS = 1e4;
function waitForPrivateInferenceEnablement(enablement, timeoutMs = exports2.PRIVATE_INFERENCE_PENDING_HOLD_MS) {
    if (enablement.state !== "pending") {
        return Promise.resolve();
    }
    return new Promise((resolve36)=>{
        const done = ()=>{
            clearTimeout(timer2);
            subscription.dispose();
            resolve36();
        };
        const subscription = enablement.onDidChange((state)=>{
            if (state !== "pending") {
                done();
            }
        });
        const timer2 = setTimeout(done, timeoutMs);
        if (enablement.state !== "pending") {
            done();
        }
    });
}
function createPrivateInferencePerimeterInterceptor(enablement, onBlocked) {
    return (next)=>async (req)=>{
            const serviceTypeName = req.service.typeName;
            const methodName = req.method.name;
            if (enablement.state === "pending" && !(0, privateInferenceRpcAllowlist_js_1.isPrivateInferenceAllowlistedRpc)(serviceTypeName, methodName)) {
                await waitForPrivateInferenceEnablement(enablement);
            }
            if (!isPrivateInferenceRpcAllowedInState(enablement.state, serviceTypeName, methodName)) {
                onBlocked?.(serviceTypeName, methodName);
                throw createBlockedRpcError(serviceTypeName, methodName);
            }
            return await next(req);
        };
}

return exports2;
}
