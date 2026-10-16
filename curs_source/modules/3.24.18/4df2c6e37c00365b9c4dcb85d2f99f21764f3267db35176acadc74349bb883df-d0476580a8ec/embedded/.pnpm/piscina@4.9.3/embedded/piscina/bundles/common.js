import { require_symbols } from "./symbols.js";
var __wakaru_require_common_cache;
export function require_common() {
if (__wakaru_require_common_cache) return __wakaru_require_common_cache;
var exports2 = {};
__wakaru_require_common_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.commonState = exports2.READY = void 0;
exports2.isTransferable = isTransferable;
exports2.isMovable = isMovable;
exports2.markMovable = markMovable;
exports2.createHistogramSummary = createHistogramSummary;
exports2.toHistogramIntegerNano = toHistogramIntegerNano;
exports2.maybeFileURLToPath = maybeFileURLToPath;
exports2.getAvailableParallelism = getAvailableParallelism;
var node_url_12 = require("node:url");
var node_os_1 = require("node:os");
var symbols_12 = require_symbols();
exports2.READY = "_WORKER_READY";
function isTransferable(value) {
    return value != null && typeof value === "object" && symbols_12.kTransferable in value && symbols_12.kValue in value;
}
function isMovable(value) {
    return isTransferable(value) && value[symbols_12.kMovable] === true;
}
function markMovable(value) {
    Object.defineProperty(value, symbols_12.kMovable, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: true
    });
}
exports2.commonState = {
    isWorkerThread: false,
    workerData: void 0
};
function createHistogramSummary(histogram) {
    const { mean, stddev, min, max } = histogram;
    return {
        average: mean / 1e3,
        mean: mean / 1e3,
        stddev,
        min: min / 1e3,
        max: max / 1e3,
        p0_001: histogram.percentile(1e-3) / 1e3,
        p0_01: histogram.percentile(0.01) / 1e3,
        p0_1: histogram.percentile(0.1) / 1e3,
        p1: histogram.percentile(1) / 1e3,
        p2_5: histogram.percentile(2.5) / 1e3,
        p10: histogram.percentile(10) / 1e3,
        p25: histogram.percentile(25) / 1e3,
        p50: histogram.percentile(50) / 1e3,
        p75: histogram.percentile(75) / 1e3,
        p90: histogram.percentile(90) / 1e3,
        p97_5: histogram.percentile(97.5) / 1e3,
        p99: histogram.percentile(99) / 1e3,
        p99_9: histogram.percentile(99.9) / 1e3,
        p99_99: histogram.percentile(99.99) / 1e3,
        p99_999: histogram.percentile(99.999) / 1e3
    };
}
function toHistogramIntegerNano(milliseconds) {
    return Math.max(1, Math.trunc(milliseconds * 1e3));
}
function maybeFileURLToPath(filename) {
    return filename.startsWith("file:") ? (0, node_url_12.fileURLToPath)(new node_url_12.URL(filename)) : filename;
}
function getAvailableParallelism() {
    if (typeof node_os_1.availableParallelism === "function") {
        return (0, node_os_1.availableParallelism)();
    }
    try {
        return (0, node_os_1.cpus)().length;
    } catch  {
        return 1;
    }
}

return exports2;
}
