import { E } from "./tslib.es6.js";
var GZt, X$l, HQf, PTs;
export { GZt, HQf, PTs, X$l };
var __wakaru_WQf_initialized = false;
export function WQf() {
if (__wakaru_WQf_initialized) return;
__wakaru_WQf_initialized = true;
"use strict";
E(), GZt = class extends Error {
    constructor(t){
        super(t), this.name = "Warning";
    }
}, X$l = [
    {
        domain: "api2.cursor.sh",
        purpose: "API requests"
    },
    {
        domain: "api3.cursor.sh",
        purpose: "Cursor Tab"
    },
    {
        domain: "api4.cursor.sh",
        purpose: "Cursor Tab (regional)"
    },
    {
        domain: "*.api5.cursor.sh",
        purpose: "Agent requests"
    },
    {
        domain: "repo42.cursor.sh",
        purpose: "Training telemetry"
    },
    {
        domain: "*.authentication.cursor.sh",
        purpose: "Authentication"
    },
    {
        domain: "authenticator.cursor.sh",
        purpose: "Authentication UI (login page)"
    },
    {
        domain: "marketplace.cursorapi.com",
        purpose: "Extension marketplace"
    },
    {
        domain: "cursor-cdn.com",
        purpose: "Marketplace CDN"
    },
    {
        domain: "downloads.cursor.com",
        purpose: "Client updates"
    }
], HQf = {
    dns: "DNS",
    http2: "HTTP/2",
    tls: "SSL",
    unary: "API",
    ping: "Ping",
    stream: "Chat",
    bidi: "Agent",
    marketplace: "Marketplace",
    auth: "Authentication",
    authUI: "Authentication UI",
    cursorTab: "Cursor Tab",
    agentEndpoint: "Agent Endpoint",
    downloads: "Downloads",
    cdn: "CDN"
}, PTs = {
    http2: void 0,
    tls: void 0,
    unary: void 0,
    ping: void 0,
    stream: void 0,
    bidi: void 0,
    marketplace: void 0,
    auth: void 0,
    authUI: void 0,
    cursorTab: void 0,
    agentEndpoint: void 0,
    downloads: void 0,
    cdn: void 0
};

}
