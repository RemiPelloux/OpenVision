"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.PRIVATE_INFERENCE_PENDING_HOLD_MS = exports.PRIVATE_INFERENCE_BLOCKED_MESSAGE_PREFIX = void 0, exports.isPrivateInferenceRpcAllowedInState = i, exports.createBlockedRpcError = o, exports.isPrivateInferenceBlockedRpcError = function(t) {
    if (!(t instanceof n.ConnectError)) return !1;
    return t.code === n.Code.FailedPrecondition && t.rawMessage.startsWith(exports.PRIVATE_INFERENCE_BLOCKED_MESSAGE_PREFIX);
}, exports.waitForPrivateInferenceEnablement = a, exports.createPrivateInferencePerimeterInterceptor = function(t, e) {
    return (r)=>async (n)=>{
            const u = n.service.typeName, c = n.method.name;
            if ("pending" !== t.state || (0, s.isPrivateInferenceAllowlistedRpc)(u, c) || await a(t), !i(t.state, u, c)) throw e?.(u, c), o(u, c);
            return await r(n);
        };
};
const n = require("./module-8394.js"), s = require("./module-4269.js");
function i(t, e, r) {
    return "disabled" === t || (0, s.isPrivateInferenceAllowlistedRpc)(e, r);
}
function o(t, r) {
    return new n.ConnectError(`${exports.PRIVATE_INFERENCE_BLOCKED_MESSAGE_PREFIX} ${t}/${r} is disabled under private inference`, n.Code.FailedPrecondition);
}
function a(t, r = exports.PRIVATE_INFERENCE_PENDING_HOLD_MS) {
    return "pending" !== t.state ? Promise.resolve() : new Promise((e)=>{
        const n = ()=>{
            clearTimeout(i), s.dispose(), e();
        }, s = t.onDidChange((t)=>{
            "pending" !== t && n();
        }), i = setTimeout(n, r);
        "pending" !== t.state && n();
    });
}
exports.PRIVATE_INFERENCE_BLOCKED_MESSAGE_PREFIX = "private inference perimeter:", exports.PRIVATE_INFERENCE_PENDING_HOLD_MS = 1e4;
