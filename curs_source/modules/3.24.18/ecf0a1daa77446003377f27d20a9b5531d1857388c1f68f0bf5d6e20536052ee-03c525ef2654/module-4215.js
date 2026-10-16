var s = require("./module-4576.js"), n = require("./module-2839.js"), r = require("./module-2195.js"), a = function(t) {
    return n.slice(0, t.length) === t;
};
module.exports = a("Bun/") ? "BUN" : a("Cloudflare-Workers") ? "CLOUDFLARE" : a("Deno/") ? "DENO" : a("Node.js/") ? "NODE" : s.Bun && "string" == typeof Bun.version ? "BUN" : s.Deno && "object" == typeof Deno.version ? "DENO" : "process" === r(s.process) ? "NODE" : s.window && s.document ? "BROWSER" : "REST";
