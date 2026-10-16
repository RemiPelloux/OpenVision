var globalThis2 = require("./module-4576.js");
var userAgent = require("./module-2839.js");
var process2 = globalThis2.process;
var Deno2 = globalThis2.Deno;
var versions = process2 && process2.versions || Deno2 && Deno2.version;
var v8 = versions && versions.v8;
var match, version2;
if (v8) {
    match = v8.split(".");
    version2 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
if (!version2 && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version2 = +match[1];
    }
}
module.exports = version2;
