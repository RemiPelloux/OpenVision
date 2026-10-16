import { INVALID_SPAN_CONTEXT, init_invalid_span_constants } from "./invalid-span-constants.js";
var NonRecordingSpan;
export { NonRecordingSpan };
var __wakaru_init_NonRecordingSpan_initialized = false;
export function init_NonRecordingSpan() {
if (__wakaru_init_NonRecordingSpan_initialized) return;
__wakaru_init_NonRecordingSpan_initialized = true;
init_invalid_span_constants();
NonRecordingSpan = (function() {
    function NonRecordingSpan2(_spanContext) {
        if (_spanContext === void 0) {
            _spanContext = INVALID_SPAN_CONTEXT;
        }
        this._spanContext = _spanContext;
    }
    NonRecordingSpan2.prototype.spanContext = function() {
        return this._spanContext;
    };
    NonRecordingSpan2.prototype.setAttribute = function(_key, _value) {
        return this;
    };
    NonRecordingSpan2.prototype.setAttributes = function(_attributes) {
        return this;
    };
    NonRecordingSpan2.prototype.addEvent = function(_name, _attributes) {
        return this;
    };
    NonRecordingSpan2.prototype.addLink = function(_link) {
        return this;
    };
    NonRecordingSpan2.prototype.addLinks = function(_links) {
        return this;
    };
    NonRecordingSpan2.prototype.setStatus = function(_status) {
        return this;
    };
    NonRecordingSpan2.prototype.updateName = function(_name) {
        return this;
    };
    NonRecordingSpan2.prototype.end = function(_endTime) {};
    NonRecordingSpan2.prototype.isRecording = function() {
        return false;
    };
    NonRecordingSpan2.prototype.recordException = function(_exception, _time) {};
    return NonRecordingSpan2;
})();

}
