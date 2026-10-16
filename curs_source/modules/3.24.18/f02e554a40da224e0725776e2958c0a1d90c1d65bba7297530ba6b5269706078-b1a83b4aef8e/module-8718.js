"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AggregatingMetricsProvider = exports.SHARED_METRICS_BEARER_TOKEN = void 0, exports.createMetricsBearerTokenInterceptor = c, exports.createMetricsAddHeadersInterceptor = l;
const n = require("./module-2670.js"), s = require("./module-1840.js"), i = require("./module-8394.js"), o = require("./module-4384.js"), a = require("./module-6982.js"), u = "x-cursor-team-id";
function c(t) {
    return (r)=>async (n)=>{
            const s = t.getCursorAuthToken();
            return void 0 !== s ? n.header.set("Authorization", `Bearer ${s}`) : n.header.set("Authorization", `Bearer ${exports.SHARED_METRICS_BEARER_TOKEN}`), await r(n);
        };
}
function l(t) {
    return (e)=>async (r)=>{
            t.applyRequestHeaders(r, (0, a.randomUUID)());
            const n = t.getTeamId();
            return void 0 !== n && r.header.set(u, n.toString()), await e(r);
        };
}
exports.SHARED_METRICS_BEARER_TOKEN = [
    "g",
    "g",
    "H",
    "r"
].slice().reverse().join("") + "iuZiWjUfGNs8z4HHTLHuMD8CccAumgjzjpLmDsDX6c3Eaj7nvzCJMNoVAv3P";
const m = 5e3;
function d(t, e) {
    if (!e) return t;
    const r = Object.keys(e);
    if (0 === r.length) return t;
    if (1 === r.length) {
        const n = r[0];
        return t + "|" + n + ":" + e[n];
    }
    r.sort();
    let n = t + "|" + r[0] + ":" + e[r[0]];
    for(let t = 1; t < r.length; t++)n += "," + r[t] + ":" + e[r[t]];
    return n;
}
function f(t, e) {
    if (t.observed += 1, t.samples.length < 100) return void t.samples.push(e);
    const r = Math.floor(Math.random() * t.observed);
    r < 100 && (t.samples[r] = e);
}
class p {
    constructor(t){
        this.metricsUrl = "https://api3.cursor.sh", this.metricsClient = void 0, this.incrementBuffer = new Map, this.gaugeBuffer = new Map, this.distributionBuffer = new Map, this.cardinalityOverflowLogged = !1, this.distributionFlushInFlight = !1, this.inFlightSends = new Set, this._logError = (t)=>this._host.debugLog.error(t), this._host = t, this.flushTimer = setInterval(()=>this.flush(), 3e4);
    }
    static withClient(t, e) {
        const r = new p(t);
        return r.metricsClient = e, r;
    }
    dispose() {
        clearInterval(this.flushTimer), this.flush(!1);
    }
    async disposeAndWait() {
        this.dispose();
        let t, e = !1;
        const r = new Promise((r)=>{
            t = setTimeout(()=>{
                e = !0, r();
            }, 2e3).unref();
        });
        try {
            await Promise.race([
                this.drain(()=>e),
                r
            ]);
        } finally{
            clearTimeout(t);
        }
    }
    async drain(t) {
        for(; this.inFlightSends.size > 0;){
            if (await Promise.race(this.inFlightSends), t()) return;
            this.flush(!1);
        }
    }
    increment(t, e, r) {
        const n = d(t, r), s = this.incrementBuffer.get(n);
        if (s) s.value += e;
        else {
            if (this.incrementBuffer.size >= m) return void this.logCardinalityOverflow("increment");
            this.incrementBuffer.set(n, {
                name: t,
                tags: r,
                value: e
            });
        }
    }
    gauge(t, e, r) {
        const n = d(t, r), s = this.gaugeBuffer.get(n);
        if (s) s.value = e;
        else {
            if (this.gaugeBuffer.size >= m) return void this.logCardinalityOverflow("gauge");
            this.gaugeBuffer.set(n, {
                name: t,
                tags: r,
                value: e
            });
        }
    }
    distribution(t, e, r) {
        const n = d(t, r), s = this.distributionBuffer.get(n);
        if (s) f(s, e);
        else {
            if (this.distributionBuffer.size >= m) return void this.logCardinalityOverflow("distribution");
            this.distributionBuffer.set(n, {
                name: t,
                tags: r,
                samples: [
                    e
                ],
                observed: 1
            });
        }
    }
    distributionSamples(t, e, r) {
        if (0 === e.length) return;
        const n = d(t, r);
        let s = this.distributionBuffer.get(n);
        if (!s) {
            if (this.distributionBuffer.size >= m) return void this.logCardinalityOverflow("distribution");
            s = {
                name: t,
                tags: r,
                samples: [],
                observed: 0
            }, this.distributionBuffer.set(n, s);
        }
        for(let t = 0; t < e.length; t++)f(s, e[t]);
    }
    async flushAndWait() {
        const t = this.getOrCreateClient();
        if (!t) return;
        const e = [
            ...this.flushNamedMetrics(this.incrementBuffer, (e)=>t.reportIncrement(e)),
            ...this.flushNamedMetrics(this.gaugeBuffer, (e)=>t.reportGauge(e))
        ];
        for(; this.distributionFlushInFlight;)await new Promise((t)=>setTimeout(t, 0));
        e.push(...await this.expandDistributions(t, !0)), await Promise.all(e);
    }
    flush(t = !0) {
        this.flushIncrements(), this.flushGauges(), this.flushDistributions(t), this.cardinalityOverflowLogged = !1;
    }
    flushIncrements() {
        if (0 === this.incrementBuffer.size) return;
        const t = this.getOrCreateClient();
        t && this.flushNamedMetrics(this.incrementBuffer, (e)=>t.reportIncrement(e));
    }
    flushGauges() {
        if (0 === this.gaugeBuffer.size) return;
        const t = this.getOrCreateClient();
        t && this.flushNamedMetrics(this.gaugeBuffer, (e)=>t.reportGauge(e));
    }
    flushNamedMetrics(t, e) {
        const r = [];
        let n = [];
        for (const i of t.values())n.push(new s.ReportMetricsRequest_NamedMetric({
            name: i.name,
            value: i.value,
            tags: i.tags
        })), n.length >= 1e3 && (r.push(this.track(e(new s.ReportMetricsRequest({
            metricsList: n
        })))), n = []);
        return t.clear(), n.length > 0 && r.push(this.track(e(new s.ReportMetricsRequest({
            metricsList: n
        })))), r;
    }
    track(t) {
        const e = t.then(()=>{}, this._logError);
        return this.inFlightSends.add(e), e.finally(()=>this.inFlightSends.delete(e)), e;
    }
    flushDistributions(t) {
        if (this.distributionFlushInFlight || 0 === this.distributionBuffer.size) return;
        const e = this.getOrCreateClient();
        e && this.expandDistributions(e, t);
    }
    expandDistributions(t, e) {
        const r = Array.from(this.distributionBuffer.values());
        this.distributionBuffer.clear(), this.distributionFlushInFlight = !0;
        const n = this.sendDistributionEntries(t, r, e).finally(()=>{
            this.distributionFlushInFlight = !1;
        });
        return this.track(n), n.catch(()=>[]);
    }
    async sendDistributionEntries(t, e, r) {
        const n = [];
        let i = [];
        for(let o = 0; o < e.length; o++){
            r && o > 0 && o % 100 == 0 && await new Promise((t)=>setTimeout(t, 0));
            const a = e[o];
            for (const t of a.samples)i.push(new s.ReportMetricsRequest_NamedMetric({
                name: a.name,
                value: t,
                tags: a.tags
            }));
            i.length >= 1e4 && (n.push(this.track(t.reportDistribution(new s.ReportMetricsRequest({
                metricsList: i
            })))), i = []);
        }
        return i.length > 0 && n.push(this.track(t.reportDistribution(new s.ReportMetricsRequest({
            metricsList: i
        })))), n;
    }
    logCardinalityOverflow(t) {
        this.cardinalityOverflowLogged || (this.cardinalityOverflowLogged = !0, this._host.debugLog.error(`AggregatingMetricsProvider: ${t} buffer exceeded cardinality limit of 5000. Dropping new metric keys.`));
    }
    getOrCreateClient() {
        if (void 0 !== this.metricsClient) return this.metricsClient;
        const t = (0, o.createConnectTransport)({
            httpVersion: "2",
            baseUrl: this.metricsUrl,
            interceptors: [
                c(this._host),
                l(this._host)
            ],
            useBinaryFormat: !0,
            jsonOptions: {
                ignoreUnknownFields: !0
            },
            sendCompression: o.compressionGzip,
            acceptCompression: [
                o.compressionGzip
            ]
        });
        return this.metricsClient = (0, i.createPromiseClient)(n.MetricsService, t), this.metricsClient;
    }
}
exports.AggregatingMetricsProvider = p;
