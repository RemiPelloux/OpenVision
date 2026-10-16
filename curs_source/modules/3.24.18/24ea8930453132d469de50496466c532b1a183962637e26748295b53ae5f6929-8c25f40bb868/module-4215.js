var globalThis2 = require("./module-4576.js");
var userAgent = require("./module-2839.js");
var classof = require("./module-2195.js");
var userAgentStartsWith = function(string) {
    return userAgent.slice(0, string.length) === string;
};
module.exports = function() {
    if (userAgentStartsWith("Bun/")) return "BUN";
    if (userAgentStartsWith("Cloudflare-Workers")) return "CLOUDFLARE";
    if (userAgentStartsWith("Deno/")) return "DENO";
    if (userAgentStartsWith("Node.js/")) return "NODE";
    if (globalThis2.Bun && typeof Bun.version == "string") return "BUN";
    if (globalThis2.Deno && typeof Deno.version == "object") return "DENO";
    if (classof(globalThis2.process) === "process") return "NODE";
    if (globalThis2.window && globalThis2.document) return "BROWSER";
    return "REST";
}();
