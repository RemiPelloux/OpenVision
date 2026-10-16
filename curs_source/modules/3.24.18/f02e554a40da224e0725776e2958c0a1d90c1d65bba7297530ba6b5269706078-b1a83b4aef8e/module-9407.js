"use strict";
var n, s = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
    void 0 === n && (n = r);
    var s = Object.getOwnPropertyDescriptor(e, r);
    s && !("get" in s ? !e.__esModule : s.writable || s.configurable) || (s = {
        enumerable: !0,
        get: function() {
            return e[r];
        }
    }), Object.defineProperty(t, n, s);
} : function(t, e, r, n) {
    void 0 === n && (n = r), t[n] = e[r];
}), i = this && this.__setModuleDefault || (Object.create ? function(t, e) {
    Object.defineProperty(t, "default", {
        enumerable: !0,
        value: e
    });
} : function(t, e) {
    t.default = e;
}), o = this && this.__importStar || (n = function(t) {
    return n = Object.getOwnPropertyNames || function(t) {
        var e = [];
        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[e.length] = r);
        return e;
    }, n(t);
}, function(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for(var r = n(t), o = 0; o < r.length; o++)"default" !== r[o] && s(e, t, r[o]);
    return i(e, t), e;
});
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.dnsLookup = function(t) {
    return new Promise((e)=>{
        const r = t.hostname;
        switch(t.source){
            case "nodejs":
                {
                    const t = Date.now();
                    a.lookup(r, (n, s)=>{
                        if (n) return void e({
                            host: r,
                            servers: a.getServers(),
                            error: n.message
                        });
                        const i = Date.now() - t;
                        e({
                            host: r,
                            servers: a.getServers(),
                            address: s.toString(),
                            duration: i
                        });
                    });
                    break;
                }
            default:
                {
                    if (!t.resolveHostViaSystem) {
                        e({
                            host: r,
                            servers: t.source,
                            error: "System DNS resolver unavailable in this process"
                        });
                        break;
                    }
                    const n = Date.now();
                    t.resolveHostViaSystem(r, {
                        source: t.source
                    }).then((s)=>{
                        const i = Date.now() - n;
                        e({
                            host: r,
                            servers: t.source,
                            address: s.endpoints.map((t)=>t.address.toString()).join(", "),
                            duration: i
                        });
                    }).catch((n)=>{
                        e({
                            host: r,
                            servers: t.source,
                            error: n.message
                        });
                    });
                    break;
                }
        }
    });
}, exports.inspectTLSInfo = function(t) {
    return new Promise((e)=>{
        let r, n = "unknown";
        const s = Date.now();
        let i = 0, o = 0, a = 0;
        const u = c.request({
            method: "POST",
            host: t.hostname,
            port: t.port,
            path: "/aiserver.v1.HealthService/Unary",
            headers: {
                Connection: "keep-alive",
                "Content-Type": "application/proto",
                "Content-Length": "0"
            },
            rejectUnauthorized: !1,
            agent: !1
        }, (s)=>{
            const u = s.socket;
            r = u.getPeerCertificate(), null !== r ? (s.on("data", ()=>{}), s.on("end", ()=>{
                e({
                    url: t.toString(),
                    ip: u.remoteAddress ?? n,
                    status: s.statusCode?.toString() ?? "unknown",
                    name: Array.isArray(r.subject.CN) ? r.subject.CN.join(",") : r.subject.CN ?? "",
                    issuer: `C=${r.issuer.C}; O=${r.issuer.O}; CN=${r.issuer.CN}`,
                    altName: r.subjectaltname ?? "",
                    dns_time: i,
                    connect_time: o,
                    tls_time: a
                });
            })) : e({
                error: "No certificate found"
            });
        });
        u.on("socket", (t)=>{
            i = Date.now() - s, t.connecting ? t.on("connect", ()=>{
                n = t.remoteAddress ?? "unknown", o = Date.now() - s - i;
            }) : (n = t.remoteAddress ?? "unknown", o = Date.now() - s - i), t.on("secureConnect", ()=>{
                a = Date.now() - s - o - i;
            });
        }), u.on("error", (t)=>{
            e({
                error: t.message
            });
        }), u.end();
    });
}, exports.http2Ping = function(t) {
    return new Promise((e)=>{
        const r = u.connect(t.toString(), {
            protocol: "https:",
            rejectUnauthorized: !1,
            ALPNProtocols: [
                "h2"
            ]
        });
        r.on("error", (r)=>{
            e({
                host: t.host,
                error: r.message
            });
        }), r.on("connect", ()=>{
            r.alpnProtocol ? e({
                host: t.host,
                protocol: r.alpnProtocol ?? "unknown"
            }) : e({
                host: t.host,
                error: "HTTP/2 ALPN could not be negotiated"
            });
        });
    });
};
const a = o(require("./module-610.js")), u = o(require("./module-2467.js")), c = o(require("./module-4708.js"));
