"use strict";
var n, s = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
    void 0 === n && (n = r);
    var s = Object.getOwnPropertyDescriptor(t, r);
    s && !("get" in s ? !t.__esModule : s.writable || s.configurable) || (s = {
        enumerable: !0,
        get: function() {
            return t[r];
        }
    }), Object.defineProperty(e, n, s);
} : function(e, t, r, n) {
    void 0 === n && (n = r), e[n] = t[r];
}), o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
    });
} : function(e, t) {
    e.default = t;
}), i = this && this.__importStar || (n = function(e) {
    return n = Object.getOwnPropertyNames || function(e) {
        var t = [];
        for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
        return t;
    }, n(e);
}, function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for(var r = n(e), i = 0; i < r.length; i++)"default" !== r[i] && s(t, e, r[i]);
    return o(t, e), t;
});
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.dnsLookup = function(e) {
    return new Promise((t)=>{
        const r = e.hostname;
        switch(e.source){
            case "nodejs":
                {
                    const e = Date.now();
                    a.lookup(r, (n, s)=>{
                        if (n) return void t({
                            host: r,
                            servers: a.getServers(),
                            error: n.message
                        });
                        const o = Date.now() - e;
                        t({
                            host: r,
                            servers: a.getServers(),
                            address: s.toString(),
                            duration: o
                        });
                    });
                    break;
                }
            default:
                {
                    if (!e.resolveHostViaSystem) {
                        t({
                            host: r,
                            servers: e.source,
                            error: "System DNS resolver unavailable in this process"
                        });
                        break;
                    }
                    const n = Date.now();
                    e.resolveHostViaSystem(r, {
                        source: e.source
                    }).then((s)=>{
                        const o = Date.now() - n;
                        t({
                            host: r,
                            servers: e.source,
                            address: s.endpoints.map((e)=>e.address.toString()).join(", "),
                            duration: o
                        });
                    }).catch((n)=>{
                        t({
                            host: r,
                            servers: e.source,
                            error: n.message
                        });
                    });
                    break;
                }
        }
    });
}, exports.inspectTLSInfo = function(e) {
    return new Promise((t)=>{
        let r, n = "unknown";
        const s = Date.now();
        let o = 0, i = 0, a = 0;
        const c = l.request({
            method: "POST",
            host: e.hostname,
            port: e.port,
            path: "/aiserver.v1.HealthService/Unary",
            headers: {
                Connection: "keep-alive",
                "Content-Type": "application/proto",
                "Content-Length": "0"
            },
            rejectUnauthorized: !1,
            agent: !1
        }, (s)=>{
            const c = s.socket;
            r = c.getPeerCertificate(), null !== r ? (s.on("data", ()=>{}), s.on("end", ()=>{
                t({
                    url: e.toString(),
                    ip: c.remoteAddress ?? n,
                    status: s.statusCode?.toString() ?? "unknown",
                    name: Array.isArray(r.subject.CN) ? r.subject.CN.join(",") : r.subject.CN ?? "",
                    issuer: `C=${r.issuer.C}; O=${r.issuer.O}; CN=${r.issuer.CN}`,
                    altName: r.subjectaltname ?? "",
                    dns_time: o,
                    connect_time: i,
                    tls_time: a
                });
            })) : t({
                error: "No certificate found"
            });
        });
        c.on("socket", (e)=>{
            o = Date.now() - s, e.connecting ? e.on("connect", ()=>{
                n = e.remoteAddress ?? "unknown", i = Date.now() - s - o;
            }) : (n = e.remoteAddress ?? "unknown", i = Date.now() - s - o), e.on("secureConnect", ()=>{
                a = Date.now() - s - i - o;
            });
        }), c.on("error", (e)=>{
            t({
                error: e.message
            });
        }), c.end();
    });
}, exports.http2Ping = function(e) {
    return new Promise((t)=>{
        const r = c.connect(e.toString(), {
            protocol: "https:",
            rejectUnauthorized: !1,
            ALPNProtocols: [
                "h2"
            ]
        });
        r.on("error", (r)=>{
            t({
                host: e.host,
                error: r.message
            });
        }), r.on("connect", ()=>{
            r.alpnProtocol ? t({
                host: e.host,
                protocol: r.alpnProtocol ?? "unknown"
            }) : t({
                host: e.host,
                error: "HTTP/2 ALPN could not be negotiated"
            });
        });
    });
};
const a = i(require("./module-40610.js")), c = i(require("./module-32467.js")), l = i(require("./module-44708.js"));
