import { Rgv } from "./Metric.js";
import { pNu } from "./NoopMeter.js";
import { _Nu } from "./ProxyTracer.js";
import { bNu } from "./ProxyTracerProvider.js";
import { Pgv } from "./SamplingResult.js";
import { mNu } from "./TextMapPropagator.js";
import { Agv } from "./consoleLogger.js";
import { Ugv } from "./context-api.js";
import { x8i } from "./context.js";
import { $gv } from "./diag-api.js";
import { zKs } from "./invalid-span-constants.js";
import { Ggv } from "./metrics-api.js";
import { zgv } from "./propagation-api.js";
import { Lgv } from "./span_kind.js";
import { YKs } from "./spancontext-utils.js";
import { Ngv } from "./status.js";
import { Ygv } from "./trace-api.js";
import { gNu } from "./trace_flags.js";
import { x } from "./tslib.es6.js";
import { qKs } from "./types_9.js";
import { hNu } from "./utils_21.js";
import { Bgv } from "./utils_22.js";
var __wakaru_XKs_cache;
export function XKs() {
if (__wakaru_XKs_cache) return __wakaru_XKs_cache;
var e = {};
__wakaru_XKs_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.trace = e.propagation = e.metrics = e.diag = e.context = e.INVALID_SPAN_CONTEXT = e.INVALID_TRACEID = e.INVALID_SPANID = e.isValidSpanId = e.isValidTraceId = e.isSpanContextValid = e.createTraceState = e.TraceFlags = e.SpanStatusCode = e.SpanKind = e.SamplingDecision = e.ProxyTracerProvider = e.ProxyTracer = e.defaultTextMapSetter = e.defaultTextMapGetter = e.ValueType = e.createNoopMeter = e.DiagLogLevel = e.DiagConsoleLogger = e.ROOT_CONTEXT = e.createContextKey = e.baggageEntryMetadataFromString = void 0;
var t = hNu();
Object.defineProperty(e, "baggageEntryMetadataFromString", {
    enumerable: !0,
    get: function() {
        return t.baggageEntryMetadataFromString;
    }
});
var n = x8i();
Object.defineProperty(e, "createContextKey", {
    enumerable: !0,
    get: function() {
        return n.createContextKey;
    }
}), Object.defineProperty(e, "ROOT_CONTEXT", {
    enumerable: !0,
    get: function() {
        return n.ROOT_CONTEXT;
    }
});
var i = Agv();
Object.defineProperty(e, "DiagConsoleLogger", {
    enumerable: !0,
    get: function() {
        return i.DiagConsoleLogger;
    }
});
var r = qKs();
Object.defineProperty(e, "DiagLogLevel", {
    enumerable: !0,
    get: function() {
        return r.DiagLogLevel;
    }
});
var s = pNu();
Object.defineProperty(e, "createNoopMeter", {
    enumerable: !0,
    get: function() {
        return s.createNoopMeter;
    }
});
var o = Rgv();
Object.defineProperty(e, "ValueType", {
    enumerable: !0,
    get: function() {
        return o.ValueType;
    }
});
var a = mNu();
Object.defineProperty(e, "defaultTextMapGetter", {
    enumerable: !0,
    get: function() {
        return a.defaultTextMapGetter;
    }
}), Object.defineProperty(e, "defaultTextMapSetter", {
    enumerable: !0,
    get: function() {
        return a.defaultTextMapSetter;
    }
});
var c = _Nu();
Object.defineProperty(e, "ProxyTracer", {
    enumerable: !0,
    get: function() {
        return c.ProxyTracer;
    }
});
var l = bNu();
Object.defineProperty(e, "ProxyTracerProvider", {
    enumerable: !0,
    get: function() {
        return l.ProxyTracerProvider;
    }
});
var u = Pgv();
Object.defineProperty(e, "SamplingDecision", {
    enumerable: !0,
    get: function() {
        return u.SamplingDecision;
    }
});
var h = Lgv();
Object.defineProperty(e, "SpanKind", {
    enumerable: !0,
    get: function() {
        return h.SpanKind;
    }
});
var p = Ngv();
Object.defineProperty(e, "SpanStatusCode", {
    enumerable: !0,
    get: function() {
        return p.SpanStatusCode;
    }
});
var g = gNu();
Object.defineProperty(e, "TraceFlags", {
    enumerable: !0,
    get: function() {
        return g.TraceFlags;
    }
});
var f = Bgv();
Object.defineProperty(e, "createTraceState", {
    enumerable: !0,
    get: function() {
        return f.createTraceState;
    }
});
var v = YKs();
Object.defineProperty(e, "isSpanContextValid", {
    enumerable: !0,
    get: function() {
        return v.isSpanContextValid;
    }
}), Object.defineProperty(e, "isValidTraceId", {
    enumerable: !0,
    get: function() {
        return v.isValidTraceId;
    }
}), Object.defineProperty(e, "isValidSpanId", {
    enumerable: !0,
    get: function() {
        return v.isValidSpanId;
    }
});
var b = zKs();
Object.defineProperty(e, "INVALID_SPANID", {
    enumerable: !0,
    get: function() {
        return b.INVALID_SPANID;
    }
}), Object.defineProperty(e, "INVALID_TRACEID", {
    enumerable: !0,
    get: function() {
        return b.INVALID_TRACEID;
    }
}), Object.defineProperty(e, "INVALID_SPAN_CONTEXT", {
    enumerable: !0,
    get: function() {
        return b.INVALID_SPAN_CONTEXT;
    }
});
var y = Ugv();
Object.defineProperty(e, "context", {
    enumerable: !0,
    get: function() {
        return y.context;
    }
});
var T = $gv();
Object.defineProperty(e, "diag", {
    enumerable: !0,
    get: function() {
        return T.diag;
    }
});
var E = Ggv();
Object.defineProperty(e, "metrics", {
    enumerable: !0,
    get: function() {
        return E.metrics;
    }
});
var A = zgv();
Object.defineProperty(e, "propagation", {
    enumerable: !0,
    get: function() {
        return A.propagation;
    }
});
var R = Ygv();
Object.defineProperty(e, "trace", {
    enumerable: !0,
    get: function() {
        return R.trace;
    }
}), e.default = {
    context: y.context,
    diag: T.diag,
    metrics: E.metrics,
    propagation: A.propagation,
    trace: R.trace
};

return e;
}
