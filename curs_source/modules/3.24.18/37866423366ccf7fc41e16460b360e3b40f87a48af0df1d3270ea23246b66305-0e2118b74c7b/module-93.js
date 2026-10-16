require.r(exports), require.d(exports, {
    DEFAULT_NDJSON_PORT_RANGE_END: ()=>h,
    DEFAULT_NDJSON_PORT_RANGE_START: ()=>f,
    NdjsonIngestServer: ()=>N,
    NdjsonServerStartError: ()=>w,
    chooseNdjsonPort: ()=>v,
    isPortAvailable: ()=>l,
    resolveLogger: ()=>d
});
const o = require("node:events"), n = require("node:fs"), s = require("node:http"), i = require("node:path"), a = require("node:stream/promises"), c = {
    info: ()=>{},
    warn: ()=>{},
    error: ()=>{}
};
function d(e) {
    return e ?? c;
}
const g = require("node:stream"), u = /^[a-zA-Z0-9-]+$/;
async function l(e, t) {
    return new Promise((r)=>{
        const o = s.createServer();
        o.once("error", ()=>r(!1)), o.once("listening", ()=>{
            o.close(()=>r(!0));
        }), o.listen(e, t);
    });
}
function p(e) {
    if (e && u.test(e)) return e;
}
const f = 7242, h = 7942;
class w extends Error {
    constructor(e){
        super(e.message), this.name = "NdjsonServerStartError", this.code = e.code, this.port = e.port, void 0 !== e.cause && (this.cause = e.cause);
    }
}
async function v(e) {
    const t = e.configuredPort ?? 0;
    if (0 !== t) return t;
    const r = new Set((e.excludedPorts ?? []).filter((e)=>e > 0)), o = e.previouslyAllocatedPort ?? 0;
    if (0 !== o && !r.has(o)) {
        if (await l(o, e.bindAddress)) return d(e.logger).info(`Reusing previously allocated port ${o}`), o;
        d(e.logger).info(`Previously allocated port ${o} is unavailable; scanning for a new port`);
    }
    const n = e.rangeStart ?? f, s = e.rangeEnd ?? h;
    if (n > s) throw new Error(`Invalid port range ${n}-${s}`);
    const i = s - n + 1, a = Math.floor(Math.random() * i);
    for(let t = 0; t < i; t++){
        const o = n + (a + t) % i;
        if (!r.has(o) && await l(o, e.bindAddress)) return await e.onAutoAllocatedPort?.(o), d(e.logger).info(`Auto-allocated port ${o} and saved to internal storage`), o;
    }
    throw new Error(`No available ports in range ${n}-${s}`);
}
class N {
    constructor(e){
        this.options = e, this.currentPort = 0, this.writeQueue = Promise.resolve(), this.logger = d(e.logger);
    }
    getLoopbackUrl() {
        if (this.currentPort) return `http://${this.options.bindAddress}:${this.currentPort}/ingest/${this.options.ingestPathId}`;
    }
    getLogDirectory() {
        return this.options.logDirectory;
    }
    getLogPathForSession(e) {
        const t = p(e);
        if (!t) throw new Error("Expected a valid debug session id");
        return (0, i.join)(this.options.logDirectory, `debug-${t}.log`);
    }
    async start() {
        if (this.server) return this.buildStartResult();
        n.mkdirSync(this.options.logDirectory, {
            recursive: !0
        });
        const e = s.createServer((e, t)=>this.handleRequest(e, t));
        try {
            await this.listen(e);
        } catch (t) {
            throw e.removeAllListeners(), function(e, t) {
                if (e instanceof w) return e;
                if (e instanceof Error) {
                    const r = e.message || `Failed to start NDJSON server on port ${t}`;
                    return new w({
                        message: r,
                        port: t,
                        code: y(e),
                        cause: e
                    });
                }
                return new w({
                    message: `Failed to start NDJSON server on port ${t}`,
                    port: t,
                    cause: e
                });
            }(t, this.options.port);
        }
        this.server = e;
        const t = this.server.address();
        return this.currentPort = t?.port ?? 0, this.logger.info(`NDJSON ingest server started on port ${this.currentPort} in directory ${this.options.logDirectory}`), this.buildStartResult();
    }
    async stop() {
        const e = this.server;
        e && (e.closeAllConnections(), e.close(), await (0, o.once)(e, "close"), this.server = void 0, this.currentPort = 0);
    }
    async appendExclusive(e, t) {
        const r = async ()=>{
            const r = n.createWriteStream(t, {
                flags: "a"
            });
            await (0, a.pipeline)(e, function() {
                let e = 10;
                return new g.Transform({
                    transform (t, r, o) {
                        t.length > 0 && (e = t[t.length - 1]), o(null, t);
                    },
                    flush (t) {
                        10 !== e && this.push(Buffer.from("\n")), t();
                    }
                });
            }(), r);
        }, o = this.writeQueue.then(r, r);
        return this.writeQueue = o.catch((e)=>{
            this.logger.error("Error appending to log file:", e);
        }), o;
    }
    buildStartResult() {
        const e = this.getLoopbackUrl();
        if (!e) throw new Error("NDJSON server is not listening");
        return {
            loopbackUrl: e,
            logDirectory: this.options.logDirectory
        };
    }
    async handleRequest(e, t) {
        if (t.setHeader("Access-Control-Allow-Origin", "*"), t.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"), t.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Debug-Session-Id"), "OPTIONS" === e.method) return t.writeHead(200), void t.end();
        if ("POST" !== e.method || e.url !== `/ingest/${this.options.ingestPathId}`) return t.writeHead(404), void t.end();
        const r = e.headers["x-debug-session-id"];
        if (void 0 === r) return this.logger.warn("Rejected NDJSON ingest request without X-Debug-Session-Id header"), t.writeHead(400), void t.end("missing-session-id");
        if ("string" != typeof r) return this.logger.warn("Rejected NDJSON ingest request with invalid X-Debug-Session-Id header"), t.writeHead(400), void t.end("invalid-session-id");
        const o = p(r);
        if (!o) return this.logger.warn("Rejected NDJSON ingest request with invalid X-Debug-Session-Id header"), t.writeHead(400), void t.end("invalid-session-id");
        try {
            const r = this.getLogPathForSession(o);
            await this.appendExclusive(e, r), t.writeHead(204), t.end();
        } catch (e) {
            this.logger.error("NDJSON ingest write error:", e), t.writeHead(500), t.end("write-failed");
        }
    }
    async listen(e) {
        e.listen(this.options.port, this.options.bindAddress), await (0, o.once)(e, "listening");
    }
}
function y(e) {
    if ("code" in e && "string" == typeof e.code) return e.code;
}
