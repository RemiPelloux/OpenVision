import { ContextAPI } from "./context.js";
import { DiagAPI, getGlobal, init_diag, registerGlobal, unregisterGlobal } from "./diag.js";
import { init_global_utils } from "../internal/global-utils.js";
import { NonRecordingSpan } from "../trace/NonRecordingSpan.js";
import { getSpanContext, isSpanContextValid, setSpan } from "../trace/NoopTracer.js";
import { ProxyTracerProvider, init_ProxyTracerProvider } from "../trace/ProxyTracerProvider.js";
import { SPAN_KEY, init_context_utils } from "../trace/context-utils.js";
import { init_spancontext_utils } from "../trace/spancontext-utils.js";
function getSpan(context2) {
    return context2.getValue(SPAN_KEY) || void 0;
}
function getActiveSpan() {
    return getSpan(ContextAPI.getInstance().active());
}
function deleteSpan(context2) {
    return context2.deleteValue(SPAN_KEY);
}
function setSpanContext(context2, spanContext) {
    return setSpan(context2, new NonRecordingSpan(spanContext));
}
function wrapSpanContext(spanContext) {
    return new NonRecordingSpan(spanContext);
}
var API_NAME3, TraceAPI;
export { API_NAME3, TraceAPI, deleteSpan, getActiveSpan, getSpan, setSpanContext, wrapSpanContext };
var __wakaru_init_trace_initialized = false;
export function init_trace() {
if (__wakaru_init_trace_initialized) return;
__wakaru_init_trace_initialized = true;
init_global_utils();
init_ProxyTracerProvider();
init_spancontext_utils();
init_context_utils();
init_diag();
API_NAME3 = "trace";
TraceAPI = (function() {
    function TraceAPI2() {
        this._proxyTracerProvider = new ProxyTracerProvider();
        this.wrapSpanContext = wrapSpanContext;
        this.isSpanContextValid = isSpanContextValid;
        this.deleteSpan = deleteSpan;
        this.getSpan = getSpan;
        this.getActiveSpan = getActiveSpan;
        this.getSpanContext = getSpanContext;
        this.setSpan = setSpan;
        this.setSpanContext = setSpanContext;
    }
    TraceAPI2.getInstance = function() {
        if (!this._instance) {
            this._instance = new TraceAPI2();
        }
        return this._instance;
    };
    TraceAPI2.prototype.setGlobalTracerProvider = function(provider) {
        var success = registerGlobal(API_NAME3, this._proxyTracerProvider, DiagAPI.instance());
        if (success) {
            this._proxyTracerProvider.setDelegate(provider);
        }
        return success;
    };
    TraceAPI2.prototype.getTracerProvider = function() {
        return getGlobal(API_NAME3) || this._proxyTracerProvider;
    };
    TraceAPI2.prototype.getTracer = function(name17, version4) {
        return this.getTracerProvider().getTracer(name17, version4);
    };
    TraceAPI2.prototype.disable = function() {
        unregisterGlobal(API_NAME3, DiagAPI.instance());
        this._proxyTracerProvider = new ProxyTracerProvider();
    };
    return TraceAPI2;
})();

}
