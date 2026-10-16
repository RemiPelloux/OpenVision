var n = require("./module-9117.js"), o = require("./module-8060.js"), i = require("./module-8689.js"), a = function(t) {
    return o.slice(0, t.length) === t;
};
module.exports = a("Bun/") ? "BUN" : a("Cloudflare-Workers") ? "CLOUDFLARE" : a("Deno/") ? "DENO" : a("Node.js/") ? "NODE" : n.Bun && "string" == typeof Bun.version ? "BUN" : n.Deno && "object" == typeof Deno.version ? "DENO" : "process" === i(n.process) ? "NODE" : n.window && n.document ? "BROWSER" : "REST";
