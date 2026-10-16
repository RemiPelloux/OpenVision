import { E } from "./tslib.es6.js";
var __wakaru_F6p_cache;
export function F6p() {
if (__wakaru_F6p_cache) return __wakaru_F6p_cache;
var t = {};
__wakaru_F6p_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.createNoopMeter = t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t.NOOP_OBSERVABLE_GAUGE_METRIC = t.NOOP_OBSERVABLE_COUNTER_METRIC = t.NOOP_UP_DOWN_COUNTER_METRIC = t.NOOP_HISTOGRAM_METRIC = t.NOOP_GAUGE_METRIC = t.NOOP_COUNTER_METRIC = t.NOOP_METER = t.NoopObservableUpDownCounterMetric = t.NoopObservableGaugeMetric = t.NoopObservableCounterMetric = t.NoopObservableMetric = t.NoopHistogramMetric = t.NoopGaugeMetric = t.NoopUpDownCounterMetric = t.NoopCounterMetric = t.NoopMetric = t.NoopMeter = void 0;
var e = class {
    constructor(){}
    createGauge(h, p) {
        return t.NOOP_GAUGE_METRIC;
    }
    createHistogram(h, p) {
        return t.NOOP_HISTOGRAM_METRIC;
    }
    createCounter(h, p) {
        return t.NOOP_COUNTER_METRIC;
    }
    createUpDownCounter(h, p) {
        return t.NOOP_UP_DOWN_COUNTER_METRIC;
    }
    createObservableGauge(h, p) {
        return t.NOOP_OBSERVABLE_GAUGE_METRIC;
    }
    createObservableCounter(h, p) {
        return t.NOOP_OBSERVABLE_COUNTER_METRIC;
    }
    createObservableUpDownCounter(h, p) {
        return t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
    }
    addBatchObservableCallback(h, p) {}
    removeBatchObservableCallback(h) {}
};
t.NoopMeter = e;
var n = class {
};
t.NoopMetric = n;
var i = class extends n {
    add(h, p) {}
};
t.NoopCounterMetric = i;
var r = class extends n {
    add(h, p) {}
};
t.NoopUpDownCounterMetric = r;
var s = class extends n {
    record(h, p) {}
};
t.NoopGaugeMetric = s;
var o = class extends n {
    record(h, p) {}
};
t.NoopHistogramMetric = o;
var a = class {
    addCallback(h) {}
    removeCallback(h) {}
};
t.NoopObservableMetric = a;
var l = class extends a {
};
t.NoopObservableCounterMetric = l;
var c = class extends a {
};
t.NoopObservableGaugeMetric = c;
var u = class extends a {
};
t.NoopObservableUpDownCounterMetric = u, t.NOOP_METER = new e, t.NOOP_COUNTER_METRIC = new i, t.NOOP_GAUGE_METRIC = new s, t.NOOP_HISTOGRAM_METRIC = new o, t.NOOP_UP_DOWN_COUNTER_METRIC = new r, t.NOOP_OBSERVABLE_COUNTER_METRIC = new l, t.NOOP_OBSERVABLE_GAUGE_METRIC = new c, t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new u;
function d() {
    return t.NOOP_METER;
}
t.createNoopMeter = d;

return t;
}
