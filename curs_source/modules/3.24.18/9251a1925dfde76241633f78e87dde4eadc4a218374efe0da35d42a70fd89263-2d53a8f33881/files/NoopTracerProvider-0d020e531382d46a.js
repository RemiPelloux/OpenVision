import { NoopTracer, init_NoopTracer } from "./NoopTracer.js";
var NoopTracerProvider;
export { NoopTracerProvider };
var __wakaru_init_NoopTracerProvider_initialized = false;
export function init_NoopTracerProvider() {
if (__wakaru_init_NoopTracerProvider_initialized) return;
__wakaru_init_NoopTracerProvider_initialized = true;
init_NoopTracer();
NoopTracerProvider = (function() {
    function NoopTracerProvider2() {}
    NoopTracerProvider2.prototype.getTracer = function(_name, _version, _options) {
        return new NoopTracer();
    };
    return NoopTracerProvider2;
})();

}
