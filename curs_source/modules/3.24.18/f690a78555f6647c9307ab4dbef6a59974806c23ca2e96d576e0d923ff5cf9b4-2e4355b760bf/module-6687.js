"use strict";
const { MessageChannel: n, receiveMessageOnPort: r } = require("./module-8167.js"), o = [
    "GET",
    "HEAD",
    "POST"
], s = new Set(o), a = [
    301,
    302,
    303,
    307,
    308
], i = new Set(a), c = [
    "1",
    "7",
    "9",
    "11",
    "13",
    "15",
    "17",
    "19",
    "20",
    "21",
    "22",
    "23",
    "25",
    "37",
    "42",
    "43",
    "53",
    "69",
    "77",
    "79",
    "87",
    "95",
    "101",
    "102",
    "103",
    "104",
    "109",
    "110",
    "111",
    "113",
    "115",
    "117",
    "119",
    "123",
    "135",
    "137",
    "139",
    "143",
    "161",
    "179",
    "389",
    "427",
    "465",
    "512",
    "513",
    "514",
    "515",
    "526",
    "530",
    "531",
    "532",
    "540",
    "548",
    "554",
    "556",
    "563",
    "587",
    "601",
    "636",
    "989",
    "990",
    "993",
    "995",
    "1719",
    "1720",
    "1723",
    "2049",
    "3659",
    "4045",
    "5060",
    "5061",
    "6000",
    "6566",
    "6665",
    "6666",
    "6667",
    "6668",
    "6669",
    "6697",
    "10080"
], l = new Set(c), g = [
    "",
    "no-referrer",
    "no-referrer-when-downgrade",
    "same-origin",
    "origin",
    "strict-origin",
    "origin-when-cross-origin",
    "strict-origin-when-cross-origin",
    "unsafe-url"
], E = new Set(g), u = [
    "GET",
    "HEAD",
    "OPTIONS",
    "TRACE"
], d = new Set(u), I = [
    "CONNECT",
    "TRACE",
    "TRACK"
], h = new Set(I), Q = [
    "audio",
    "audioworklet",
    "font",
    "image",
    "manifest",
    "paintworklet",
    "script",
    "style",
    "track",
    "video",
    "xslt",
    ""
], m = new Set(Q), C = globalThis.DOMException ?? (()=>{
    try {
        atob("~");
    } catch (e) {
        return Object.getPrototypeOf(e).constructor;
    }
})();
let B;
const p = globalThis.structuredClone ?? function(e, A = void 0) {
    if (0 === arguments.length) throw new TypeError("missing argument");
    return B || (B = new n), B.port1.unref(), B.port2.unref(), B.port1.postMessage(e, A?.transfer), r(B.port2).message;
};
module.exports = {
    DOMException: C,
    structuredClone: p,
    subresource: Q,
    forbiddenMethods: I,
    requestBodyHeader: [
        "content-encoding",
        "content-language",
        "content-location",
        "content-type",
        "content-length"
    ],
    referrerPolicy: g,
    requestRedirect: [
        "follow",
        "manual",
        "error"
    ],
    requestMode: [
        "navigate",
        "same-origin",
        "no-cors",
        "cors"
    ],
    requestCredentials: [
        "omit",
        "same-origin",
        "include"
    ],
    requestCache: [
        "default",
        "no-store",
        "reload",
        "no-cache",
        "force-cache",
        "only-if-cached"
    ],
    redirectStatus: a,
    corsSafeListedMethods: o,
    nullBodyStatus: [
        101,
        204,
        205,
        304
    ],
    safeMethods: u,
    badPorts: c,
    requestDuplex: [
        "half"
    ],
    subresourceSet: m,
    badPortsSet: l,
    redirectStatusSet: i,
    corsSafeListedMethodsSet: s,
    safeMethodsSet: d,
    forbiddenMethodsSet: h,
    referrerPolicySet: E
};
