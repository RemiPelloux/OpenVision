"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.resolveHttpTransportMode = function(e) {
    if (!e.http2Disabled) return "http2";
    return e.http1SseDisabled ? "http1_poll" : "http1_sse";
}, exports.classifyBidiStreamLoop = function(e, t) {
    if (e === o.InferenceService.typeName && t === o.InferenceService.methods.runInference.name) return "local_loop";
    if (e === n.AgentService.typeName && t === n.AgentService.methods.run.name) return "nal";
    if (e === s.ChatService.typeName) return "oal";
    return "other";
}, exports.incrementTransportMetric = function(e, t, r) {
    try {
        e.metricsIncrement({
            stat: t,
            value: 1,
            tags: r
        });
    } catch  {}
}, exports.emitTransportStructuredLog = function(e, t) {
    try {
        if (void 0 !== e.logStructured) return void e.logStructured({
            key: "transport",
            ...t
        });
        switch(t.level){
            case "debug":
                i.StructuredLogProviderImpl.debug("transport", t.message, t.metadata);
                break;
            case "info":
                i.StructuredLogProviderImpl.info("transport", t.message, t.metadata);
                break;
            case "warn":
                i.StructuredLogProviderImpl.warn("transport", t.message, t.metadata);
                break;
            case "error":
                i.StructuredLogProviderImpl.error("transport", t.message, t.error, t.metadata);
        }
    } catch  {}
};
const n = require("./module-17714.js"), s = require("./module-33177.js"), o = require("./module-4410.js"), i = require("./module-7126.js");
