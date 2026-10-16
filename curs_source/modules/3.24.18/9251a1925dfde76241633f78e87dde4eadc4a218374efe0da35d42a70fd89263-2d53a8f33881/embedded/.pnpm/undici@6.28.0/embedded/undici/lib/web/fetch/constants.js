var __wakaru_require_constants11_cache;
export function require_constants11() {
if (__wakaru_require_constants11_cache) return __wakaru_require_constants11_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_constants11_cache = module2;
"use strict";
var corsSafeListedMethods = ([
    "GET",
    "HEAD",
    "POST"
]);
var corsSafeListedMethodsSet = new Set(corsSafeListedMethods);
var nullBodyStatus = ([
    101,
    204,
    205,
    304
]);
var redirectStatus = ([
    301,
    302,
    303,
    307,
    308
]);
var redirectStatusSet = new Set(redirectStatus);
var badPorts = ([
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
    "4190",
    "5060",
    "5061",
    "6000",
    "6566",
    "6665",
    "6666",
    "6667",
    "6668",
    "6669",
    "6679",
    "6697",
    "10080"
]);
var badPortsSet = new Set(badPorts);
var referrerPolicy = ([
    "",
    "no-referrer",
    "no-referrer-when-downgrade",
    "same-origin",
    "origin",
    "strict-origin",
    "origin-when-cross-origin",
    "strict-origin-when-cross-origin",
    "unsafe-url"
]);
var referrerPolicySet = new Set(referrerPolicy);
var requestRedirect = ([
    "follow",
    "manual",
    "error"
]);
var safeMethods = ([
    "GET",
    "HEAD",
    "OPTIONS",
    "TRACE"
]);
var safeMethodsSet = new Set(safeMethods);
var requestMode = ([
    "navigate",
    "same-origin",
    "no-cors",
    "cors"
]);
var requestCredentials = ([
    "omit",
    "same-origin",
    "include"
]);
var requestCache = ([
    "default",
    "no-store",
    "reload",
    "no-cache",
    "force-cache",
    "only-if-cached"
]);
var requestBodyHeader = ([
    "content-encoding",
    "content-language",
    "content-location",
    "content-type",
    "content-length"
]);
var requestDuplex = ([
    "half"
]);
var forbiddenMethods = ([
    "CONNECT",
    "TRACE",
    "TRACK"
]);
var forbiddenMethodsSet = new Set(forbiddenMethods);
var subresource = ([
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
]);
var subresourceSet = new Set(subresource);
module2.exports = {
    subresource,
    forbiddenMethods,
    requestBodyHeader,
    referrerPolicy,
    requestRedirect,
    requestMode,
    requestCredentials,
    requestCache,
    redirectStatus,
    corsSafeListedMethods,
    nullBodyStatus,
    safeMethods,
    badPorts,
    requestDuplex,
    subresourceSet,
    badPortsSet,
    redirectStatusSet,
    corsSafeListedMethodsSet,
    safeMethodsSet,
    forbiddenMethodsSet,
    referrerPolicySet
};

return module2.exports;
}
