import { ContextAPI, init_context2 } from "../api/context.js";
import { getSpan } from "../api/trace.js";
import { NonRecordingSpan, init_NonRecordingSpan } from "./NonRecordingSpan.js";
import { SPAN_KEY, init_context_utils } from "./context-utils.js";
import { INVALID_SPANID, INVALID_TRACEID } from "./invalid-span-constants.js";
import { VALID_SPANID_REGEX, VALID_TRACEID_REGEX, init_spancontext_utils } from "./spancontext-utils.js";
function setSpan(context2, span) {
    return context2.setValue(SPAN_KEY, span);
}
function getSpanContext(context2) {
    var _a18;
    return (_a18 = getSpan(context2)) === null || _a18 === void 0 ? void 0 : _a18.spanContext();
}
function isValidTraceId(traceId) {
    return VALID_TRACEID_REGEX.test(traceId) && traceId !== INVALID_TRACEID;
}
function isValidSpanId(spanId) {
    return VALID_SPANID_REGEX.test(spanId) && spanId !== INVALID_SPANID;
}
function isSpanContextValid(spanContext) {
    return isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId);
}
function isSpanContext(spanContext) {
    return typeof spanContext === "object" && typeof spanContext["spanId"] === "string" && typeof spanContext["traceId"] === "string" && typeof spanContext["traceFlags"] === "number";
}
var contextApi, NoopTracer;
export { NoopTracer, contextApi, getSpanContext, isSpanContext, isSpanContextValid, isValidSpanId, isValidTraceId, setSpan };
var __wakaru_init_NoopTracer_initialized = false;
export function init_NoopTracer() {
if (__wakaru_init_NoopTracer_initialized) return;
__wakaru_init_NoopTracer_initialized = true;
init_context2();
init_context_utils();
init_NonRecordingSpan();
init_spancontext_utils();
contextApi = ContextAPI.getInstance();
NoopTracer = (function() {
    function NoopTracer2() {}
    NoopTracer2.prototype.startSpan = function(name17, options2, context2) {
        if (context2 === void 0) {
            context2 = contextApi.active();
        }
        var root = Boolean(options2 === null || options2 === void 0 ? void 0 : options2.root);
        if (root) {
            return new NonRecordingSpan();
        }
        var parentFromContext = context2 && getSpanContext(context2);
        if (isSpanContext(parentFromContext) && isSpanContextValid(parentFromContext)) {
            return new NonRecordingSpan(parentFromContext);
        } else {
            return new NonRecordingSpan();
        }
    };
    NoopTracer2.prototype.startActiveSpan = function(name17, arg2, arg3, arg4) {
        var opts;
        var ctx;
        var fn;
        if (arguments.length < 2) {
            return;
        } else if (arguments.length === 2) {
            fn = arg2;
        } else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
        } else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
        }
        var parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
        var span = this.startSpan(name17, opts, parentContext);
        var contextWithSpanSet = setSpan(parentContext, span);
        return contextApi.with(contextWithSpanSet, fn, void 0, span);
    };
    return NoopTracer2;
})();

}
