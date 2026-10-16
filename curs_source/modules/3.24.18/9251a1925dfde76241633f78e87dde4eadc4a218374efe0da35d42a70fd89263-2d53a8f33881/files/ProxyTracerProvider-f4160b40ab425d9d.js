import { NoopTracerProvider, init_NoopTracerProvider } from "./NoopTracerProvider.js";
import { ProxyTracer, init_ProxyTracer } from "./ProxyTracer.js";
var NOOP_TRACER_PROVIDER, ProxyTracerProvider;
export { NOOP_TRACER_PROVIDER, ProxyTracerProvider };
var __wakaru_init_ProxyTracerProvider_initialized = false;
export function init_ProxyTracerProvider() {
if (__wakaru_init_ProxyTracerProvider_initialized) return;
__wakaru_init_ProxyTracerProvider_initialized = true;
init_ProxyTracer();
init_NoopTracerProvider();
NOOP_TRACER_PROVIDER = new NoopTracerProvider();
ProxyTracerProvider = (function() {
    function ProxyTracerProvider2() {}
    ProxyTracerProvider2.prototype.getTracer = function(name17, version4, options2) {
        var _a18;
        return (_a18 = this.getDelegateTracer(name17, version4, options2)) !== null && _a18 !== void 0 ? _a18 : new ProxyTracer(this, name17, version4, options2);
    };
    ProxyTracerProvider2.prototype.getDelegate = function() {
        var _a18;
        return (_a18 = this._delegate) !== null && _a18 !== void 0 ? _a18 : NOOP_TRACER_PROVIDER;
    };
    ProxyTracerProvider2.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyTracerProvider2.prototype.getDelegateTracer = function(name17, version4, options2) {
        var _a18;
        return (_a18 = this._delegate) === null || _a18 === void 0 ? void 0 : _a18.getTracer(name17, version4, options2);
    };
    return ProxyTracerProvider2;
})();

}
