"use strict";
const { MessageChannel: r, receiveMessageOnPort: s } = require(28167), o = [
    "GET",
    "HEAD",
    "POST"
], n = new Set(o), i = [
    301,
    302,
    303,
    307,
    308
], E = new Set(i), Q = [
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
], g = new Set(Q), C = [
    "",
    "no-referrer",
    "no-referrer-when-downgrade",
    "same-origin",
    "origin",
    "strict-origin",
    "origin-when-cross-origin",
    "strict-origin-when-cross-origin",
    "unsafe-url"
], B = new Set(C), a = [
    "GET",
    "HEAD",
    "OPTIONS",
    "TRACE"
], I = new Set(a), c = [
    "CONNECT",
    "TRACE",
    "TRACK"
], h = new Set(c), l = [
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
], u = new Set(l), d = globalThis.DOMException ?? (()=>{
    try {
        atob("~");
    } catch (A) {
        return Object.getPrototypeOf(A).constructor;
    }
})();
let f;
const y = globalThis.structuredClone ?? function(A, e = void 0) {
    if (0 === arguments.length) throw new TypeError("missing argument");
    return f || (f = new r), f.port1.unref(), f.port2.unref(), f.port1.postMessage(A, e?.transfer), s(f.port2).message;
};
module.exports = {
    DOMException: d,
    structuredClone: y,
    subresource: l,
    forbiddenMethods: c,
    requestBodyHeader: [
        "content-encoding",
        "content-language",
        "content-location",
        "content-type",
        "content-length"
    ],
    referrerPolicy: C,
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
    redirectStatus: i,
    corsSafeListedMethods: o,
    nullBodyStatus: [
        101,
        204,
        205,
        304
    ],
    safeMethods: a,
    badPorts: Q,
    requestDuplex: [
        "half"
    ],
    subresourceSet: u,
    badPortsSet: g,
    redirectStatusSet: E,
    corsSafeListedMethodsSet: n,
    safeMethodsSet: I,
    forbiddenMethodsSet: h,
    referrerPolicySet: B
};
