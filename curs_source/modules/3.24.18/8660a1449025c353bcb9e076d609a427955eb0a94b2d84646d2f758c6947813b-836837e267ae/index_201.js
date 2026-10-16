import { X31 } from "./Metric.js";
import { F6p } from "./NoopMeter.js";
import { H6p } from "./ProxyTracer.js";
import { W6p } from "./ProxyTracerProvider.js";
import { J31 } from "./SamplingResult.js";
import { B6p } from "./TextMapPropagator.js";
import { Y31 } from "./consoleLogger.js";
import { sN1 } from "./context-api.js";
import { Zqr } from "./context.js";
import { oN1 } from "./diag-api.js";
import { b5a } from "./invalid-span-constants.js";
import { cN1 } from "./metrics-api.js";
import { pN1 } from "./propagation-api.js";
import { eN1 } from "./span_kind.js";
import { S5a } from "./spancontext-utils.js";
import { tN1 } from "./status.js";
import { gN1 } from "./trace-api.js";
import { U6p } from "./trace_flags.js";
import { E } from "./tslib.es6.js";
import { _5a } from "./types_9.js";
import { O6p } from "./utils_21.js";
import { rN1 } from "./utils_22.js";
var __wakaru_k5a_cache;
export function k5a() {
if (__wakaru_k5a_cache) return __wakaru_k5a_cache;
var t = {};
__wakaru_k5a_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.trace = t.propagation = t.metrics = t.diag = t.context = t.INVALID_SPAN_CONTEXT = t.INVALID_TRACEID = t.INVALID_SPANID = t.isValidSpanId = t.isValidTraceId = t.isSpanContextValid = t.createTraceState = t.TraceFlags = t.SpanStatusCode = t.SpanKind = t.SamplingDecision = t.ProxyTracerProvider = t.ProxyTracer = t.defaultTextMapSetter = t.defaultTextMapGetter = t.ValueType = t.createNoopMeter = t.DiagLogLevel = t.DiagConsoleLogger = t.ROOT_CONTEXT = t.createContextKey = t.baggageEntryMetadataFromString = void 0;
var e = O6p();
Object.defineProperty(t, "baggageEntryMetadataFromString", {
    enumerable: !0,
    get: function() {
        return e.baggageEntryMetadataFromString;
    }
});
var n = Zqr();
Object.defineProperty(t, "createContextKey", {
    enumerable: !0,
    get: function() {
        return n.createContextKey;
    }
}), Object.defineProperty(t, "ROOT_CONTEXT", {
    enumerable: !0,
    get: function() {
        return n.ROOT_CONTEXT;
    }
});
var i = Y31();
Object.defineProperty(t, "DiagConsoleLogger", {
    enumerable: !0,
    get: function() {
        return i.DiagConsoleLogger;
    }
});
var r = _5a();
Object.defineProperty(t, "DiagLogLevel", {
    enumerable: !0,
    get: function() {
        return r.DiagLogLevel;
    }
});
var s = F6p();
Object.defineProperty(t, "createNoopMeter", {
    enumerable: !0,
    get: function() {
        return s.createNoopMeter;
    }
});
var o = X31();
Object.defineProperty(t, "ValueType", {
    enumerable: !0,
    get: function() {
        return o.ValueType;
    }
});
var a = B6p();
Object.defineProperty(t, "defaultTextMapGetter", {
    enumerable: !0,
    get: function() {
        return a.defaultTextMapGetter;
    }
}), Object.defineProperty(t, "defaultTextMapSetter", {
    enumerable: !0,
    get: function() {
        return a.defaultTextMapSetter;
    }
});
var l = H6p();
Object.defineProperty(t, "ProxyTracer", {
    enumerable: !0,
    get: function() {
        return l.ProxyTracer;
    }
});
var c = W6p();
Object.defineProperty(t, "ProxyTracerProvider", {
    enumerable: !0,
    get: function() {
        return c.ProxyTracerProvider;
    }
});
var u = J31();
Object.defineProperty(t, "SamplingDecision", {
    enumerable: !0,
    get: function() {
        return u.SamplingDecision;
    }
});
var d = eN1();
Object.defineProperty(t, "SpanKind", {
    enumerable: !0,
    get: function() {
        return d.SpanKind;
    }
});
var h = tN1();
Object.defineProperty(t, "SpanStatusCode", {
    enumerable: !0,
    get: function() {
        return h.SpanStatusCode;
    }
});
var p = U6p();
Object.defineProperty(t, "TraceFlags", {
    enumerable: !0,
    get: function() {
        return p.TraceFlags;
    }
});
var g = rN1();
Object.defineProperty(t, "createTraceState", {
    enumerable: !0,
    get: function() {
        return g.createTraceState;
    }
});
var f = S5a();
Object.defineProperty(t, "isSpanContextValid", {
    enumerable: !0,
    get: function() {
        return f.isSpanContextValid;
    }
}), Object.defineProperty(t, "isValidTraceId", {
    enumerable: !0,
    get: function() {
        return f.isValidTraceId;
    }
}), Object.defineProperty(t, "isValidSpanId", {
    enumerable: !0,
    get: function() {
        return f.isValidSpanId;
    }
});
var _ = b5a();
Object.defineProperty(t, "INVALID_SPANID", {
    enumerable: !0,
    get: function() {
        return _.INVALID_SPANID;
    }
}), Object.defineProperty(t, "INVALID_TRACEID", {
    enumerable: !0,
    get: function() {
        return _.INVALID_TRACEID;
    }
}), Object.defineProperty(t, "INVALID_SPAN_CONTEXT", {
    enumerable: !0,
    get: function() {
        return _.INVALID_SPAN_CONTEXT;
    }
});
var b = sN1();
Object.defineProperty(t, "context", {
    enumerable: !0,
    get: function() {
        return b.context;
    }
});
var y = oN1();
Object.defineProperty(t, "diag", {
    enumerable: !0,
    get: function() {
        return y.diag;
    }
});
var S = cN1();
Object.defineProperty(t, "metrics", {
    enumerable: !0,
    get: function() {
        return S.metrics;
    }
});
var k = pN1();
Object.defineProperty(t, "propagation", {
    enumerable: !0,
    get: function() {
        return k.propagation;
    }
});
var C = gN1();
Object.defineProperty(t, "trace", {
    enumerable: !0,
    get: function() {
        return C.trace;
    }
}), t.default = {
    context: b.context,
    diag: y.diag,
    metrics: S.metrics,
    propagation: k.propagation,
    trace: C.trace
};

return t;
}
