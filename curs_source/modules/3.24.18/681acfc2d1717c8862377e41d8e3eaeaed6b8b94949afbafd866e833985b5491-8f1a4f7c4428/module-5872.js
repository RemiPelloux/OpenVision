const n = require("./module-2613.js"), { ResponseStatusCodeError: r } = require("./module-7902.js"), { toUSVString: o } = require("./module-9361.js");
module.exports = {
    getResolveErrorBodyCallback: async function({ callback: e, body: t, contentType: A, statusCode: s, statusMessage: i, headers: a }) {
        n(t);
        let c = [], l = 0;
        for await (const e of t)if (c.push(e), l += e.length, l > 131072) {
            c = null;
            break;
        }
        if (204 !== s && A && c) {
            try {
                if (A.startsWith("application/json")) {
                    const t = JSON.parse(o(Buffer.concat(c)));
                    return void process.nextTick(e, new r(`Response status code ${s}${i ? `: ${i}` : ""}`, s, a, t));
                }
                if (A.startsWith("text/")) {
                    const t = o(Buffer.concat(c));
                    return void process.nextTick(e, new r(`Response status code ${s}${i ? `: ${i}` : ""}`, s, a, t));
                }
            } catch (e) {}
            process.nextTick(e, new r(`Response status code ${s}${i ? `: ${i}` : ""}`, s, a));
        } else process.nextTick(e, new r(`Response status code ${s}${i ? `: ${i}` : ""}`, s, a));
    }
};
