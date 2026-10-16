"use strict";
const { MessageChannel: t, receiveMessageOnPort: s } = require("./module-8167.js"), o = [
    "GET",
    "HEAD",
    "POST"
], r = new Set(o), i = [
    301,
    302,
    303,
    307,
    308
], l = new Set(i), d = [
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
], m = new Set(d), c = [
    "",
    "no-referrer",
    "no-referrer-when-downgrade",
    "same-origin",
    "origin",
    "strict-origin",
    "origin-when-cross-origin",
    "strict-origin-when-cross-origin",
    "unsafe-url"
], p = new Set(c), A = [
    "GET",
    "HEAD",
    "OPTIONS",
    "TRACE"
], u = new Set(A), g = [
    "CONNECT",
    "TRACE",
    "TRACK"
], T = new Set(g), h = [
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
], k = new Set(h), _ = globalThis.DOMException ?? (()=>{
    try {
        atob("~");
    } catch (e) {
        return Object.getPrototypeOf(e).constructor;
    }
})();
let E;
const f = globalThis.structuredClone ?? function(e, a = void 0) {
    if (0 === arguments.length) throw new TypeError("missing argument");
    return E || (E = new t), E.port1.unref(), E.port2.unref(), E.port1.postMessage(e, a?.transfer), s(E.port2).message;
};
module.exports = {
    DOMException: _,
    structuredClone: f,
    subresource: h,
    forbiddenMethods: g,
    requestBodyHeader: [
        "content-encoding",
        "content-language",
        "content-location",
        "content-type",
        "content-length"
    ],
    referrerPolicy: c,
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
    safeMethods: A,
    badPorts: d,
    requestDuplex: [
        "half"
    ],
    subresourceSet: k,
    badPortsSet: m,
    redirectStatusSet: l,
    corsSafeListedMethodsSet: r,
    safeMethodsSet: u,
    forbiddenMethodsSet: T,
    referrerPolicySet: p
};
