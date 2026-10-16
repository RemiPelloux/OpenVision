"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.resolveHttpTransportMode = function(t) {
    if (!t.http2Disabled) return "http2";
    return t.http1SseDisabled ? "http1_poll" : "http1_sse";
}, exports.classifyBidiStreamLoop = function(t, e) {
    if (t === i.InferenceService.typeName && e === i.InferenceService.methods.runInference.name) return "local_loop";
    if (t === n.AgentService.typeName && e === n.AgentService.methods.run.name) return "nal";
    if (t === s.ChatService.typeName) return "oal";
    return "other";
}, exports.incrementTransportMetric = function(t, e, r) {
    try {
        t.metricsIncrement({
            stat: e,
            value: 1,
            tags: r
        });
    } catch  {}
}, exports.emitTransportStructuredLog = function(t, e) {
    try {
        if (void 0 !== t.logStructured) return void t.logStructured({
            key: "transport",
            ...e
        });
        switch(e.level){
            case "debug":
                o.StructuredLogProviderImpl.debug("transport", e.message, e.metadata);
                break;
            case "info":
                o.StructuredLogProviderImpl.info("transport", e.message, e.metadata);
                break;
            case "warn":
                o.StructuredLogProviderImpl.warn("transport", e.message, e.metadata);
                break;
            case "error":
                o.StructuredLogProviderImpl.error("transport", e.message, e.error, e.metadata);
        }
    } catch  {}
};
const n = require("./module-7714.js"), s = require("./module-3177.js"), i = require("./module-4410.js"), o = require("./module-7126.js");
