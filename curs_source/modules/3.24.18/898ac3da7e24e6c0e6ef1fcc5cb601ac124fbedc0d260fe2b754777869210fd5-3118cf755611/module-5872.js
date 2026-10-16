const t = require("./module-2613.js"), { ResponseStatusCodeError: s } = require("./module-7902.js"), { toUSVString: o } = require("./module-9361.js");
module.exports = {
    getResolveErrorBodyCallback: async function({ callback: e, body: n, contentType: a, statusCode: r, statusMessage: i, headers: A }) {
        t(n);
        let l = [], c = 0;
        for await (const e of n)if (l.push(e), c += e.length, c > 131072) {
            l = null;
            break;
        }
        if (204 !== r && a && l) {
            try {
                if (a.startsWith("application/json")) {
                    const n = JSON.parse(o(Buffer.concat(l)));
                    return void process.nextTick(e, new s(`Response status code ${r}${i ? `: ${i}` : ""}`, r, A, n));
                }
                if (a.startsWith("text/")) {
                    const n = o(Buffer.concat(l));
                    return void process.nextTick(e, new s(`Response status code ${r}${i ? `: ${i}` : ""}`, r, A, n));
                }
            } catch (e) {}
            process.nextTick(e, new s(`Response status code ${r}${i ? `: ${i}` : ""}`, r, A));
        } else process.nextTick(e, new s(`Response status code ${r}${i ? `: ${i}` : ""}`, r, A));
    }
};
