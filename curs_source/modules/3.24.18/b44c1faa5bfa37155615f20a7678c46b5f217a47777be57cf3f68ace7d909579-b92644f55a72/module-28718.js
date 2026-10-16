"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AggregatingMetricsProvider = exports.SHARED_METRICS_BEARER_TOKEN = void 0, exports.createMetricsBearerTokenInterceptor = l, exports.createMetricsAddHeadersInterceptor = u;
const n = require("./module-22670.js"), s = require("./module-1840.js"), o = require("./module-97163.js"), i = require("./module-85964.js"), a = require("./module-76982.js"), c = "x-cursor-team-id";
function l(e) {
    return (r)=>async (n)=>{
            const s = e.getCursorAuthToken();
            return void 0 !== s ? n.header.set("Authorization", `Bearer ${s}`) : n.header.set("Authorization", `Bearer ${exports.SHARED_METRICS_BEARER_TOKEN}`), await r(n);
        };
}
function u(e) {
    return (t)=>async (r)=>{
            e.applyRequestHeaders(r, (0, a.randomUUID)());
            const n = e.getTeamId();
            return void 0 !== n && r.header.set(c, n.toString()), await t(r);
        };
}
exports.SHARED_METRICS_BEARER_TOKEN = [
    "g",
    "g",
    "H",
    "r"
].slice().reverse().join("") + "iuZiWjUfGNs8z4HHTLHuMD8CccAumgjzjpLmDsDX6c3Eaj7nvzCJMNoVAv3P";
const d = 5e3;
function p(e, t) {
    if (!t) return e;
    const r = Object.keys(t);
    if (0 === r.length) return e;
    if (1 === r.length) {
        const n = r[0];
        return e + "|" + n + ":" + t[n];
    }
    r.sort();
    let n = e + "|" + r[0] + ":" + t[r[0]];
    for(let e = 1; e < r.length; e++)n += "," + r[e] + ":" + t[r[e]];
    return n;
}
function m(e, t) {
    if (e.observed += 1, e.samples.length < 100) return void e.samples.push(t);
    const r = Math.floor(Math.random() * e.observed);
    r < 100 && (e.samples[r] = t);
}
class h {
    constructor(e){
        this.metricsUrl = "https://api3.cursor.sh", this.metricsClient = void 0, this.incrementBuffer = new Map, this.gaugeBuffer = new Map, this.distributionBuffer = new Map, this.cardinalityOverflowLogged = !1, this.distributionFlushInFlight = !1, this.inFlightSends = new Set, this._logError = (e)=>this._host.debugLog.error(e), this._host = e, this.flushTimer = setInterval(()=>this.flush(), 3e4);
    }
    static withClient(e, t) {
        const r = new h(e);
        return r.metricsClient = t, r;
    }
    dispose() {
        clearInterval(this.flushTimer), this.flush(!1);
    }
    async disposeAndWait() {
        this.dispose();
        let e, t = !1;
        const r = new Promise((r)=>{
            e = setTimeout(()=>{
                t = !0, r();
            }, 2e3).unref();
        });
        try {
            await Promise.race([
                this.drain(()=>t),
                r
            ]);
        } finally{
            clearTimeout(e);
        }
    }
    async drain(e) {
        for(; this.inFlightSends.size > 0;){
            if (await Promise.race(this.inFlightSends), e()) return;
            this.flush(!1);
        }
    }
    increment(e, t, r) {
        const n = p(e, r), s = this.incrementBuffer.get(n);
        if (s) s.value += t;
        else {
            if (this.incrementBuffer.size >= d) return void this.logCardinalityOverflow("increment");
            this.incrementBuffer.set(n, {
                name: e,
                tags: r,
                value: t
            });
        }
    }
    gauge(e, t, r) {
        const n = p(e, r), s = this.gaugeBuffer.get(n);
        if (s) s.value = t;
        else {
            if (this.gaugeBuffer.size >= d) return void this.logCardinalityOverflow("gauge");
            this.gaugeBuffer.set(n, {
                name: e,
                tags: r,
                value: t
            });
        }
    }
    distribution(e, t, r) {
        const n = p(e, r), s = this.distributionBuffer.get(n);
        if (s) m(s, t);
        else {
            if (this.distributionBuffer.size >= d) return void this.logCardinalityOverflow("distribution");
            this.distributionBuffer.set(n, {
                name: e,
                tags: r,
                samples: [
                    t
                ],
                observed: 1
            });
        }
    }
    distributionSamples(e, t, r) {
        if (0 === t.length) return;
        const n = p(e, r);
        let s = this.distributionBuffer.get(n);
        if (!s) {
            if (this.distributionBuffer.size >= d) return void this.logCardinalityOverflow("distribution");
            s = {
                name: e,
                tags: r,
                samples: [],
                observed: 0
            }, this.distributionBuffer.set(n, s);
        }
        for(let e = 0; e < t.length; e++)m(s, t[e]);
    }
    async flushAndWait() {
        const e = this.getOrCreateClient();
        if (!e) return;
        const t = [
            ...this.flushNamedMetrics(this.incrementBuffer, (t)=>e.reportIncrement(t)),
            ...this.flushNamedMetrics(this.gaugeBuffer, (t)=>e.reportGauge(t))
        ];
        for(; this.distributionFlushInFlight;)await new Promise((e)=>setTimeout(e, 0));
        t.push(...await this.expandDistributions(e, !0)), await Promise.all(t);
    }
    flush(e = !0) {
        this.flushIncrements(), this.flushGauges(), this.flushDistributions(e), this.cardinalityOverflowLogged = !1;
    }
    flushIncrements() {
        if (0 === this.incrementBuffer.size) return;
        const e = this.getOrCreateClient();
        e && this.flushNamedMetrics(this.incrementBuffer, (t)=>e.reportIncrement(t));
    }
    flushGauges() {
        if (0 === this.gaugeBuffer.size) return;
        const e = this.getOrCreateClient();
        e && this.flushNamedMetrics(this.gaugeBuffer, (t)=>e.reportGauge(t));
    }
    flushNamedMetrics(e, t) {
        const r = [];
        let n = [];
        for (const o of e.values())n.push(new s.ReportMetricsRequest_NamedMetric({
            name: o.name,
            value: o.value,
            tags: o.tags
        })), n.length >= 1e3 && (r.push(this.track(t(new s.ReportMetricsRequest({
            metricsList: n
        })))), n = []);
        return e.clear(), n.length > 0 && r.push(this.track(t(new s.ReportMetricsRequest({
            metricsList: n
        })))), r;
    }
    track(e) {
        const t = e.then(()=>{}, this._logError);
        return this.inFlightSends.add(t), t.finally(()=>this.inFlightSends.delete(t)), t;
    }
    flushDistributions(e) {
        if (this.distributionFlushInFlight || 0 === this.distributionBuffer.size) return;
        const t = this.getOrCreateClient();
        t && this.expandDistributions(t, e);
    }
    expandDistributions(e, t) {
        const r = Array.from(this.distributionBuffer.values());
        this.distributionBuffer.clear(), this.distributionFlushInFlight = !0;
        const n = this.sendDistributionEntries(e, r, t).finally(()=>{
            this.distributionFlushInFlight = !1;
        });
        return this.track(n), n.catch(()=>[]);
    }
    async sendDistributionEntries(e, t, r) {
        const n = [];
        let o = [];
        for(let i = 0; i < t.length; i++){
            r && i > 0 && i % 100 == 0 && await new Promise((e)=>setTimeout(e, 0));
            const a = t[i];
            for (const e of a.samples)o.push(new s.ReportMetricsRequest_NamedMetric({
                name: a.name,
                value: e,
                tags: a.tags
            }));
            o.length >= 1e4 && (n.push(this.track(e.reportDistribution(new s.ReportMetricsRequest({
                metricsList: o
            })))), o = []);
        }
        return o.length > 0 && n.push(this.track(e.reportDistribution(new s.ReportMetricsRequest({
            metricsList: o
        })))), n;
    }
    logCardinalityOverflow(e) {
        this.cardinalityOverflowLogged || (this.cardinalityOverflowLogged = !0, this._host.debugLog.error(`AggregatingMetricsProvider: ${e} buffer exceeded cardinality limit of 5000. Dropping new metric keys.`));
    }
    getOrCreateClient() {
        if (void 0 !== this.metricsClient) return this.metricsClient;
        const e = (0, i.createConnectTransport)({
            httpVersion: "2",
            baseUrl: this.metricsUrl,
            interceptors: [
                l(this._host),
                u(this._host)
            ],
            useBinaryFormat: !0,
            jsonOptions: {
                ignoreUnknownFields: !0
            },
            sendCompression: i.compressionGzip,
            acceptCompression: [
                i.compressionGzip
            ]
        });
        return this.metricsClient = (0, o.createPromiseClient)(n.MetricsService, e), this.metricsClient;
    }
}
exports.AggregatingMetricsProvider = h;
