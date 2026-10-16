import { x } from "./tslib.es6.js";
var __wakaru_pNu_cache;
export function pNu() {
if (__wakaru_pNu_cache) return __wakaru_pNu_cache;
var e = {};
__wakaru_pNu_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.createNoopMeter = e.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = e.NOOP_OBSERVABLE_GAUGE_METRIC = e.NOOP_OBSERVABLE_COUNTER_METRIC = e.NOOP_UP_DOWN_COUNTER_METRIC = e.NOOP_HISTOGRAM_METRIC = e.NOOP_GAUGE_METRIC = e.NOOP_COUNTER_METRIC = e.NOOP_METER = e.NoopObservableUpDownCounterMetric = e.NoopObservableGaugeMetric = e.NoopObservableCounterMetric = e.NoopObservableMetric = e.NoopHistogramMetric = e.NoopGaugeMetric = e.NoopUpDownCounterMetric = e.NoopCounterMetric = e.NoopMetric = e.NoopMeter = void 0;
var t = class {
    constructor(){}
    createGauge(p, g) {
        return e.NOOP_GAUGE_METRIC;
    }
    createHistogram(p, g) {
        return e.NOOP_HISTOGRAM_METRIC;
    }
    createCounter(p, g) {
        return e.NOOP_COUNTER_METRIC;
    }
    createUpDownCounter(p, g) {
        return e.NOOP_UP_DOWN_COUNTER_METRIC;
    }
    createObservableGauge(p, g) {
        return e.NOOP_OBSERVABLE_GAUGE_METRIC;
    }
    createObservableCounter(p, g) {
        return e.NOOP_OBSERVABLE_COUNTER_METRIC;
    }
    createObservableUpDownCounter(p, g) {
        return e.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
    }
    addBatchObservableCallback(p, g) {}
    removeBatchObservableCallback(p) {}
};
e.NoopMeter = t;
var n = class {
};
e.NoopMetric = n;
var i = class extends n {
    add(p, g) {}
};
e.NoopCounterMetric = i;
var r = class extends n {
    add(p, g) {}
};
e.NoopUpDownCounterMetric = r;
var s = class extends n {
    record(p, g) {}
};
e.NoopGaugeMetric = s;
var o = class extends n {
    record(p, g) {}
};
e.NoopHistogramMetric = o;
var a = class {
    addCallback(p) {}
    removeCallback(p) {}
};
e.NoopObservableMetric = a;
var c = class extends a {
};
e.NoopObservableCounterMetric = c;
var l = class extends a {
};
e.NoopObservableGaugeMetric = l;
var u = class extends a {
};
e.NoopObservableUpDownCounterMetric = u, e.NOOP_METER = new t, e.NOOP_COUNTER_METRIC = new i, e.NOOP_GAUGE_METRIC = new s, e.NOOP_HISTOGRAM_METRIC = new o, e.NOOP_UP_DOWN_COUNTER_METRIC = new r, e.NOOP_OBSERVABLE_COUNTER_METRIC = new c, e.NOOP_OBSERVABLE_GAUGE_METRIC = new l, e.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new u;
function h() {
    return e.NOOP_METER;
}
e.createNoopMeter = h;

return e;
}
