import { NoopTracer, init_NoopTracer } from "./NoopTracer.js";
var NOOP_TRACER, ProxyTracer;
export { NOOP_TRACER, ProxyTracer };
var __wakaru_init_ProxyTracer_initialized = false;
export function init_ProxyTracer() {
if (__wakaru_init_ProxyTracer_initialized) return;
__wakaru_init_ProxyTracer_initialized = true;
init_NoopTracer();
NOOP_TRACER = new NoopTracer();
ProxyTracer = (function() {
    function ProxyTracer2(_provider, name17, version4, options2) {
        this._provider = _provider;
        this.name = name17;
        this.version = version4;
        this.options = options2;
    }
    ProxyTracer2.prototype.startSpan = function(name17, options2, context2) {
        return this._getTracer().startSpan(name17, options2, context2);
    };
    ProxyTracer2.prototype.startActiveSpan = function(_name, _options, _context, _fn) {
        var tracer = this._getTracer();
        return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
    };
    ProxyTracer2.prototype._getTracer = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
        if (!tracer) {
            return NOOP_TRACER;
        }
        this._delegate = tracer;
        return this._delegate;
    };
    return ProxyTracer2;
})();

}
