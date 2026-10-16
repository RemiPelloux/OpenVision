import { __copyProps, __defProp } from "../../agent-host/dist/storage/sqlite-store.js";
import { telemetry_connect_exports, telemetry_pb_exports } from "../../entry.js";
import { require_cjs4 } from "../../node_modules/.pnpm/_46b84b12e081161e2c23c10160f61a1d/node_modules/@connectrpc/connect-node/dist/cjs/index.js";
import { require_cjs3 } from "../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/cjs/index.js";
import { init_telemetry_connect } from "../../proto/dist/generated/aiserver/v1/telemetry_connect.js";
import { init_telemetry_pb } from "../../proto/dist/generated/aiserver/v1/telemetry_pb.js";
var __toCommonJS = (mod2)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod2);
export { __toCommonJS };
var __wakaru_require_aggregatingMetricsProvider_cache;
export function require_aggregatingMetricsProvider() {
if (__wakaru_require_aggregatingMetricsProvider_cache) return __wakaru_require_aggregatingMetricsProvider_cache;
var exports2 = {};
__wakaru_require_aggregatingMetricsProvider_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.AggregatingMetricsProvider = exports2.SHARED_METRICS_BEARER_TOKEN = void 0;
exports2.createMetricsBearerTokenInterceptor = createMetricsBearerTokenInterceptor;
exports2.createMetricsAddHeadersInterceptor = createMetricsAddHeadersInterceptor;
var telemetry_connect_js_1 = (init_telemetry_connect(), __toCommonJS(telemetry_connect_exports));
var telemetry_pb_js_1 = (init_telemetry_pb(), __toCommonJS(telemetry_pb_exports));
var connect_1 = require_cjs3();
var connect_node_1 = require_cjs4();
var crypto_1 = require("crypto");
var TEAM_ID_HEADER = "x-cursor-team-id";
exports2.SHARED_METRICS_BEARER_TOKEN = [
    "g",
    "g",
    "H",
    "r"
].slice().reverse().join("") + "iuZiWjUfGNs8z4HHTLHuMD8CccAumgjzjpLmDsDX6c3Eaj7nvzCJMNoVAv3P";
function createMetricsBearerTokenInterceptor(host) {
    return (next)=>async (req)=>{
            const accessToken = host.getCursorAuthToken();
            if (accessToken !== void 0) {
                req.header.set("Authorization", `Bearer ${accessToken}`);
            } else {
                req.header.set("Authorization", `Bearer ${exports2.SHARED_METRICS_BEARER_TOKEN}`);
            }
            return await next(req);
        };
}
function createMetricsAddHeadersInterceptor(host) {
    return (next)=>async (req)=>{
            host.applyRequestHeaders(req, (0, crypto_1.randomUUID)());
            const teamId = host.getTeamId();
            if (teamId !== void 0) {
                req.header.set(TEAM_ID_HEADER, teamId.toString());
            }
            return await next(req);
        };
}
var MAX_CARDINALITY = 5e3;
var FLUSH_INTERVAL_MS = 3e4;
var FINAL_FLUSH_TIMEOUT_MS = 2e3;
var MAX_DISTRIBUTION_SAMPLES_PER_KEY = 100;
var MAX_DISTRIBUTION_METRICS_PER_REQUEST = 1e4;
var MAX_NAMED_METRICS_PER_REQUEST = 1e3;
var DISTRIBUTION_FLUSH_ENTRIES_PER_TICK = 100;
function metricKey(name17, tags) {
    if (!tags) {
        return name17;
    }
    const keys = Object.keys(tags);
    if (keys.length === 0) {
        return name17;
    }
    if (keys.length === 1) {
        const k2 = keys[0];
        return name17 + "|" + k2 + ":" + tags[k2];
    }
    keys.sort();
    let s3 = name17 + "|" + keys[0] + ":" + tags[keys[0]];
    for(let i = 1; i < keys.length; i++){
        s3 += "," + keys[i] + ":" + tags[keys[i]];
    }
    return s3;
}
function reservoirSample(entry, value) {
    entry.observed += 1;
    if (entry.samples.length < MAX_DISTRIBUTION_SAMPLES_PER_KEY) {
        entry.samples.push(value);
        return;
    }
    const j2 = Math.floor(Math.random() * entry.observed);
    if (j2 < MAX_DISTRIBUTION_SAMPLES_PER_KEY) {
        entry.samples[j2] = value;
    }
}
var AggregatingMetricsProvider2 = class _AggregatingMetricsProvider {
    constructor(host){
        this.metricsUrl = "https://api3.cursor.sh";
        this.metricsClient = void 0;
        this.incrementBuffer = new Map();
        this.gaugeBuffer = new Map();
        this.distributionBuffer = new Map();
        this.cardinalityOverflowLogged = false;
        this.distributionFlushInFlight = false;
        this.inFlightSends = new Set();
        this._logError = (e)=>this._host.debugLog.error(e);
        this._host = host;
        this.flushTimer = setInterval(()=>this.flush(), FLUSH_INTERVAL_MS);
    }
    static withClient(host, client) {
        const provider = new _AggregatingMetricsProvider(host);
        provider.metricsClient = client;
        return provider;
    }
    dispose() {
        clearInterval(this.flushTimer);
        this.flush(false);
    }
    async disposeAndWait() {
        this.dispose();
        let expired = false;
        let deadline;
        const timedOut = new Promise((resolve36)=>{
            deadline = setTimeout(()=>{
                expired = true;
                resolve36();
            }, FINAL_FLUSH_TIMEOUT_MS).unref();
        });
        try {
            await Promise.race([
                this.drain(()=>expired),
                timedOut
            ]);
        } finally{
            clearTimeout(deadline);
        }
    }
    async drain(expired) {
        while(this.inFlightSends.size > 0){
            await Promise.race(this.inFlightSends);
            if (expired()) {
                return;
            }
            this.flush(false);
        }
    }
    increment(name17, value, tags) {
        const key = metricKey(name17, tags);
        const existing = this.incrementBuffer.get(key);
        if (existing) {
            existing.value += value;
        } else {
            if (this.incrementBuffer.size >= MAX_CARDINALITY) {
                this.logCardinalityOverflow("increment");
                return;
            }
            this.incrementBuffer.set(key, {
                name: name17,
                tags,
                value
            });
        }
    }
    gauge(name17, value, tags) {
        const key = metricKey(name17, tags);
        const existing = this.gaugeBuffer.get(key);
        if (existing) {
            existing.value = value;
        } else {
            if (this.gaugeBuffer.size >= MAX_CARDINALITY) {
                this.logCardinalityOverflow("gauge");
                return;
            }
            this.gaugeBuffer.set(key, {
                name: name17,
                tags,
                value
            });
        }
    }
    distribution(name17, value, tags) {
        const key = metricKey(name17, tags);
        const existing = this.distributionBuffer.get(key);
        if (existing) {
            reservoirSample(existing, value);
        } else {
            if (this.distributionBuffer.size >= MAX_CARDINALITY) {
                this.logCardinalityOverflow("distribution");
                return;
            }
            this.distributionBuffer.set(key, {
                name: name17,
                tags,
                samples: [
                    value
                ],
                observed: 1
            });
        }
    }
    distributionSamples(name17, values, tags) {
        if (values.length === 0) {
            return;
        }
        const key = metricKey(name17, tags);
        let entry = this.distributionBuffer.get(key);
        if (!entry) {
            if (this.distributionBuffer.size >= MAX_CARDINALITY) {
                this.logCardinalityOverflow("distribution");
                return;
            }
            entry = {
                name: name17,
                tags,
                samples: [],
                observed: 0
            };
            this.distributionBuffer.set(key, entry);
        }
        for(let i = 0; i < values.length; i++){
            reservoirSample(entry, values[i]);
        }
    }
    async flushAndWait() {
        const client = this.getOrCreateClient();
        if (!client) {
            return;
        }
        const sent = [
            ...this.flushNamedMetrics(this.incrementBuffer, (request3)=>client.reportIncrement(request3)),
            ...this.flushNamedMetrics(this.gaugeBuffer, (request3)=>client.reportGauge(request3))
        ];
        while(this.distributionFlushInFlight){
            await new Promise((resolve36)=>setTimeout(resolve36, 0));
        }
        sent.push(...await this.expandDistributions(client, true));
        await Promise.all(sent);
    }
    flush(yieldBetweenSlices = true) {
        this.flushIncrements();
        this.flushGauges();
        this.flushDistributions(yieldBetweenSlices);
        this.cardinalityOverflowLogged = false;
    }
    flushIncrements() {
        if (this.incrementBuffer.size === 0) {
            return;
        }
        const client = this.getOrCreateClient();
        if (!client) {
            return;
        }
        this.flushNamedMetrics(this.incrementBuffer, (request3)=>client.reportIncrement(request3));
    }
    flushGauges() {
        if (this.gaugeBuffer.size === 0) {
            return;
        }
        const client = this.getOrCreateClient();
        if (!client) {
            return;
        }
        this.flushNamedMetrics(this.gaugeBuffer, (request3)=>client.reportGauge(request3));
    }
    flushNamedMetrics(buffer, report) {
        const sent = [];
        let metricsList = [];
        for (const entry of buffer.values()){
            metricsList.push(new telemetry_pb_js_1.ReportMetricsRequest_NamedMetric({
                name: entry.name,
                value: entry.value,
                tags: entry.tags
            }));
            if (metricsList.length >= MAX_NAMED_METRICS_PER_REQUEST) {
                sent.push(this.track(report(new telemetry_pb_js_1.ReportMetricsRequest({
                    metricsList
                }))));
                metricsList = [];
            }
        }
        buffer.clear();
        if (metricsList.length > 0) {
            sent.push(this.track(report(new telemetry_pb_js_1.ReportMetricsRequest({
                metricsList
            }))));
        }
        return sent;
    }
    track(send) {
        const settled = send.then(()=>void 0, this._logError);
        this.inFlightSends.add(settled);
        void settled.finally(()=>this.inFlightSends.delete(settled));
        return settled;
    }
    flushDistributions(yieldBetweenSlices) {
        if (this.distributionFlushInFlight || this.distributionBuffer.size === 0) {
            return;
        }
        const client = this.getOrCreateClient();
        if (!client) {
            return;
        }
        void this.expandDistributions(client, yieldBetweenSlices);
    }
    expandDistributions(client, yieldBetweenSlices) {
        const entries = Array.from(this.distributionBuffer.values());
        this.distributionBuffer.clear();
        this.distributionFlushInFlight = true;
        const expansion = this.sendDistributionEntries(client, entries, yieldBetweenSlices).finally(()=>{
            this.distributionFlushInFlight = false;
        });
        this.track(expansion);
        return expansion.catch(()=>[]);
    }
    async sendDistributionEntries(client, entries, yieldBetweenSlices) {
        const sent = [];
        let metricsList = [];
        for(let i = 0; i < entries.length; i++){
            if (yieldBetweenSlices && i > 0 && i % DISTRIBUTION_FLUSH_ENTRIES_PER_TICK === 0) {
                await new Promise((resolve36)=>setTimeout(resolve36, 0));
            }
            const entry = entries[i];
            for (const sample of entry.samples){
                metricsList.push(new telemetry_pb_js_1.ReportMetricsRequest_NamedMetric({
                    name: entry.name,
                    value: sample,
                    tags: entry.tags
                }));
            }
            if (metricsList.length >= MAX_DISTRIBUTION_METRICS_PER_REQUEST) {
                sent.push(this.track(client.reportDistribution(new telemetry_pb_js_1.ReportMetricsRequest({
                    metricsList
                }))));
                metricsList = [];
            }
        }
        if (metricsList.length > 0) {
            sent.push(this.track(client.reportDistribution(new telemetry_pb_js_1.ReportMetricsRequest({
                metricsList
            }))));
        }
        return sent;
    }
    logCardinalityOverflow(bufferType) {
        if (!this.cardinalityOverflowLogged) {
            this.cardinalityOverflowLogged = true;
            this._host.debugLog.error(`AggregatingMetricsProvider: ${bufferType} buffer exceeded cardinality limit of ${MAX_CARDINALITY}. Dropping new metric keys.`);
        }
    }
    getOrCreateClient() {
        if (this.metricsClient !== void 0) {
            return this.metricsClient;
        }
        const transport = (0, connect_node_1.createConnectTransport)({
            httpVersion: "2",
            baseUrl: this.metricsUrl,
            interceptors: [
                createMetricsBearerTokenInterceptor(this._host),
                createMetricsAddHeadersInterceptor(this._host)
            ],
            useBinaryFormat: true,
            jsonOptions: {
                ignoreUnknownFields: true
            },
            sendCompression: connect_node_1.compressionGzip,
            acceptCompression: [
                connect_node_1.compressionGzip
            ]
        });
        this.metricsClient = (0, connect_1.createPromiseClient)(telemetry_connect_js_1.MetricsService, transport);
        return this.metricsClient;
    }
};
exports2.AggregatingMetricsProvider = AggregatingMetricsProvider2;

return exports2;
}
