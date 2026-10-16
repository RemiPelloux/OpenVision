"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.PRIVATE_INFERENCE_PENDING_HOLD_MS = exports.PRIVATE_INFERENCE_BLOCKED_MESSAGE_PREFIX = void 0, exports.isPrivateInferenceRpcAllowedInState = o, exports.createBlockedRpcError = i, exports.isPrivateInferenceBlockedRpcError = function(e) {
    if (!(e instanceof n.ConnectError)) return !1;
    return e.code === n.Code.FailedPrecondition && e.rawMessage.startsWith(exports.PRIVATE_INFERENCE_BLOCKED_MESSAGE_PREFIX);
}, exports.waitForPrivateInferenceEnablement = a, exports.createPrivateInferencePerimeterInterceptor = function(e, t) {
    return (r)=>async (n)=>{
            const c = n.service.typeName, l = n.method.name;
            if ("pending" !== e.state || (0, s.isPrivateInferenceAllowlistedRpc)(c, l) || await a(e), !o(e.state, c, l)) throw t?.(c, l), i(c, l);
            return await r(n);
        };
};
const n = require("./module-97163.js"), s = require("./module-44269.js");
function o(e, t, r) {
    return "disabled" === e || (0, s.isPrivateInferenceAllowlistedRpc)(t, r);
}
function i(e, r) {
    return new n.ConnectError(`${exports.PRIVATE_INFERENCE_BLOCKED_MESSAGE_PREFIX} ${e}/${r} is disabled under private inference`, n.Code.FailedPrecondition);
}
function a(e, r = exports.PRIVATE_INFERENCE_PENDING_HOLD_MS) {
    return "pending" !== e.state ? Promise.resolve() : new Promise((t)=>{
        const n = ()=>{
            clearTimeout(o), s.dispose(), t();
        }, s = e.onDidChange((e)=>{
            "pending" !== e && n();
        }), o = setTimeout(n, r);
        "pending" !== e.state && n();
    });
}
exports.PRIVATE_INFERENCE_BLOCKED_MESSAGE_PREFIX = "private inference perimeter:", exports.PRIVATE_INFERENCE_PENDING_HOLD_MS = 1e4;
