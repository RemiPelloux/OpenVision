const a = require("./module-2613.js"), { ResponseStatusCodeError: s } = require("./module-7902.js"), { toUSVString: o } = require("./module-9361.js");
module.exports = {
    getResolveErrorBodyCallback: async function({ callback: e, body: n, contentType: t, statusCode: r, statusMessage: i, headers: A }) {
        a(n);
        let c = [], l = 0;
        for await (const e of n)if (c.push(e), l += e.length, l > 131072) {
            c = null;
            break;
        }
        if (204 !== r && t && c) {
            try {
                if (t.startsWith("application/json")) {
                    const n = JSON.parse(o(Buffer.concat(c)));
                    return void process.nextTick(e, new s(`Response status code ${r}${i ? `: ${i}` : ""}`, r, A, n));
                }
                if (t.startsWith("text/")) {
                    const n = o(Buffer.concat(c));
                    return void process.nextTick(e, new s(`Response status code ${r}${i ? `: ${i}` : ""}`, r, A, n));
                }
            } catch (e) {}
            process.nextTick(e, new s(`Response status code ${r}${i ? `: ${i}` : ""}`, r, A));
        } else process.nextTick(e, new s(`Response status code ${r}${i ? `: ${i}` : ""}`, r, A));
    }
};
