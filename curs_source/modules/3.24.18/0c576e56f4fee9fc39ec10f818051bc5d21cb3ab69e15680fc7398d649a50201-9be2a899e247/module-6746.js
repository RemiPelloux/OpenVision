"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createNoopMeter = exports.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = exports.NOOP_OBSERVABLE_GAUGE_METRIC = exports.NOOP_OBSERVABLE_COUNTER_METRIC = exports.NOOP_UP_DOWN_COUNTER_METRIC = exports.NOOP_HISTOGRAM_METRIC = exports.NOOP_GAUGE_METRIC = exports.NOOP_COUNTER_METRIC = exports.NOOP_METER = exports.NoopObservableUpDownCounterMetric = exports.NoopObservableGaugeMetric = exports.NoopObservableCounterMetric = exports.NoopObservableMetric = exports.NoopHistogramMetric = exports.NoopGaugeMetric = exports.NoopUpDownCounterMetric = exports.NoopCounterMetric = exports.NoopMetric = exports.NoopMeter = void 0;
class r {
    constructor(){}
    createGauge(e, r) {
        return exports.NOOP_GAUGE_METRIC;
    }
    createHistogram(e, r) {
        return exports.NOOP_HISTOGRAM_METRIC;
    }
    createCounter(e, r) {
        return exports.NOOP_COUNTER_METRIC;
    }
    createUpDownCounter(e, r) {
        return exports.NOOP_UP_DOWN_COUNTER_METRIC;
    }
    createObservableGauge(e, r) {
        return exports.NOOP_OBSERVABLE_GAUGE_METRIC;
    }
    createObservableCounter(e, r) {
        return exports.NOOP_OBSERVABLE_COUNTER_METRIC;
    }
    createObservableUpDownCounter(e, r) {
        return exports.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
    }
    addBatchObservableCallback(e, t) {}
    removeBatchObservableCallback(e) {}
}
exports.NoopMeter = r;
class n {
}
exports.NoopMetric = n;
class o extends n {
    add(e, t) {}
}
exports.NoopCounterMetric = o;
class s extends n {
    add(e, t) {}
}
exports.NoopUpDownCounterMetric = s;
class i extends n {
    record(e, t) {}
}
exports.NoopGaugeMetric = i;
class a extends n {
    record(e, t) {}
}
exports.NoopHistogramMetric = a;
class c {
    addCallback(e) {}
    removeCallback(e) {}
}
exports.NoopObservableMetric = c;
class u extends c {
}
exports.NoopObservableCounterMetric = u;
class l extends c {
}
exports.NoopObservableGaugeMetric = l;
class d extends c {
}
exports.NoopObservableUpDownCounterMetric = d, exports.NOOP_METER = new r, exports.NOOP_COUNTER_METRIC = new o, exports.NOOP_GAUGE_METRIC = new i, exports.NOOP_HISTOGRAM_METRIC = new a, exports.NOOP_UP_DOWN_COUNTER_METRIC = new s, exports.NOOP_OBSERVABLE_COUNTER_METRIC = new u, exports.NOOP_OBSERVABLE_GAUGE_METRIC = new l, exports.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new d, exports.createNoopMeter = function() {
    return exports.NOOP_METER;
};
