"use strict";
const { MessageChannel: n, receiveMessageOnPort: s } = require("./module-28167.js"), o = [
    "GET",
    "HEAD",
    "POST"
], i = new Set(o), a = [
    301,
    302,
    303,
    307,
    308
], c = new Set(a), l = [
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
], u = new Set(l), d = [
    "",
    "no-referrer",
    "no-referrer-when-downgrade",
    "same-origin",
    "origin",
    "strict-origin",
    "origin-when-cross-origin",
    "strict-origin-when-cross-origin",
    "unsafe-url"
], p = new Set(d), m = [
    "GET",
    "HEAD",
    "OPTIONS",
    "TRACE"
], h = new Set(m), f = [
    "CONNECT",
    "TRACE",
    "TRACK"
], g = new Set(f), y = [
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
], w = new Set(y), v = globalThis.DOMException ?? (()=>{
    try {
        atob("~");
    } catch (e) {
        return Object.getPrototypeOf(e).constructor;
    }
})();
let _;
const A = globalThis.structuredClone ?? function(e, t = void 0) {
    if (0 === arguments.length) throw new TypeError("missing argument");
    return _ || (_ = new n), _.port1.unref(), _.port2.unref(), _.port1.postMessage(e, t?.transfer), s(_.port2).message;
};
module.exports = {
    DOMException: v,
    structuredClone: A,
    subresource: y,
    forbiddenMethods: f,
    requestBodyHeader: [
        "content-encoding",
        "content-language",
        "content-location",
        "content-type",
        "content-length"
    ],
    referrerPolicy: d,
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
    safeMethods: m,
    badPorts: l,
    requestDuplex: [
        "half"
    ],
    subresourceSet: w,
    badPortsSet: u,
    redirectStatusSet: c,
    corsSafeListedMethodsSet: i,
    safeMethodsSet: h,
    forbiddenMethodsSet: g,
    referrerPolicySet: p
};
