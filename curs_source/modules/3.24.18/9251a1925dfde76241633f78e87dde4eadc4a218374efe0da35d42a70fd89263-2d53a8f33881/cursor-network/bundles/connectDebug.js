var __wakaru_require_connectDebug_cache;
export function require_connectDebug() {
if (__wakaru_require_connectDebug_cache) return __wakaru_require_connectDebug_cache;
var exports2 = {};
__wakaru_require_connectDebug_cache = exports2;
"use strict";
var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m2, k2, k22) {
    if (k22 === void 0) k22 = k2;
    var desc = Object.getOwnPropertyDescriptor(m2, k2);
    if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m2[k2];
            }
        };
    }
    Object.defineProperty(o, k22, desc);
}) : (function(o, m2, k2, k22) {
    if (k22 === void 0) k22 = k2;
    o[k22] = m2[k2];
}));
var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v2) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v2
    });
}) : function(o, v2) {
    o["default"] = v2;
});
var __importStar = exports2 && exports2.__importStar || (function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
            var ar2 = [];
            for(var k2 in o2)if (Object.prototype.hasOwnProperty.call(o2, k2)) ar2[ar2.length] = k2;
            return ar2;
        };
        return ownKeys(o);
    };
    return function(mod2) {
        if (mod2 && mod2.__esModule) return mod2;
        var result = {};
        if (mod2 != null) {
            for(var k2 = ownKeys(mod2), i = 0; i < k2.length; i++)if (k2[i] !== "default") __createBinding(result, mod2, k2[i]);
        }
        __setModuleDefault(result, mod2);
        return result;
    };
})();
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.dnsLookup = dnsLookup;
exports2.inspectTLSInfo = inspectTLSInfo;
exports2.http2Ping = http2Ping;
var dns = __importStar(require("node:dns"));
var http23 = __importStar(require("node:http2"));
var https3 = __importStar(require("node:https"));
function dnsLookup(options2) {
    return new Promise((resolve36)=>{
        const hostname3 = options2.hostname;
        switch(options2.source){
            case "nodejs":
                {
                    const start = Date.now();
                    dns.lookup(hostname3, (err, address)=>{
                        if (err) {
                            resolve36({
                                host: hostname3,
                                servers: dns.getServers(),
                                error: err.message
                            });
                            return;
                        }
                        const duration3 = Date.now() - start;
                        resolve36({
                            host: hostname3,
                            servers: dns.getServers(),
                            address: address.toString(),
                            duration: duration3
                        });
                    });
                    break;
                }
            default:
                {
                    if (!options2.resolveHostViaSystem) {
                        resolve36({
                            host: hostname3,
                            servers: options2.source,
                            error: "System DNS resolver unavailable in this process"
                        });
                        break;
                    }
                    const start = Date.now();
                    options2.resolveHostViaSystem(hostname3, {
                        source: options2.source
                    }).then((result)=>{
                        const duration3 = Date.now() - start;
                        resolve36({
                            host: hostname3,
                            servers: options2.source,
                            address: result.endpoints.map((e)=>e.address.toString()).join(", "),
                            duration: duration3
                        });
                    }).catch((err)=>{
                        resolve36({
                            host: hostname3,
                            servers: options2.source,
                            error: err.message
                        });
                    });
                    break;
                }
        }
    });
}
function inspectTLSInfo(backendUrl) {
    return new Promise((resolve36)=>{
        let cert;
        let ip = "unknown";
        const start = Date.now();
        let dns_time = 0;
        let connect_time = 0;
        let tls_time = 0;
        const req = https3.request({
            method: "POST",
            host: backendUrl.hostname,
            port: backendUrl.port,
            path: "/aiserver.v1.HealthService/Unary",
            headers: {
                Connection: "keep-alive",
                "Content-Type": "application/proto",
                "Content-Length": "0"
            },
            rejectUnauthorized: false,
            agent: false
        }, (res)=>{
            const socket = res.socket;
            cert = socket.getPeerCertificate();
            if (cert === null) {
                resolve36({
                    error: "No certificate found"
                });
                return;
            }
            res.on("data", ()=>{});
            res.on("end", ()=>{
                resolve36({
                    url: backendUrl.toString(),
                    ip: socket.remoteAddress ?? ip,
                    status: res.statusCode?.toString() ?? "unknown",
                    name: Array.isArray(cert.subject.CN) ? cert.subject.CN.join(",") : cert.subject.CN ?? "",
                    issuer: `C=${cert.issuer.C}; O=${cert.issuer.O}; CN=${cert.issuer.CN}`,
                    altName: cert.subjectaltname ?? "",
                    dns_time,
                    connect_time,
                    tls_time
                });
            });
        });
        req.on("socket", (socket)=>{
            dns_time = Date.now() - start;
            if (socket.connecting) {
                socket.on("connect", ()=>{
                    ip = socket.remoteAddress ?? "unknown";
                    connect_time = Date.now() - start - dns_time;
                });
            } else {
                ip = socket.remoteAddress ?? "unknown";
                connect_time = Date.now() - start - dns_time;
            }
            socket.on("secureConnect", ()=>{
                tls_time = Date.now() - start - connect_time - dns_time;
            });
        });
        req.on("error", (e)=>{
            resolve36({
                error: e.message
            });
        });
        req.end();
    });
}
function http2Ping(backendUrl) {
    return new Promise((resolve36)=>{
        const session = http23.connect(backendUrl.toString(), {
            protocol: "https:",
            rejectUnauthorized: false,
            ALPNProtocols: [
                "h2"
            ]
        });
        session.on("error", (e)=>{
            resolve36({
                host: backendUrl.host,
                error: e.message
            });
        });
        session.on("connect", ()=>{
            if (!session.alpnProtocol) {
                resolve36({
                    host: backendUrl.host,
                    error: "HTTP/2 ALPN could not be negotiated"
                });
                return;
            }
            resolve36({
                host: backendUrl.host,
                protocol: session.alpnProtocol ?? "unknown"
            });
        });
    });
}

return exports2;
}
