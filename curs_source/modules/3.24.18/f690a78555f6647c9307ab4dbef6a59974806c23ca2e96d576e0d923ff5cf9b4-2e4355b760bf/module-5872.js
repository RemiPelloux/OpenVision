const n = require("./module-2613.js"), { ResponseStatusCodeError: r } = require("./module-7902.js"), { toUSVString: o } = require("./module-9361.js");
module.exports = {
    getResolveErrorBodyCallback: async function({ callback: e, body: A, contentType: t, statusCode: s, statusMessage: a, headers: i }) {
        n(A);
        let c = [], l = 0;
        for await (const e of A)if (c.push(e), l += e.length, l > 131072) {
            c = null;
            break;
        }
        if (204 !== s && t && c) {
            try {
                if (t.startsWith("application/json")) {
                    const A = JSON.parse(o(Buffer.concat(c)));
                    return void process.nextTick(e, new r(`Response status code ${s}${a ? `: ${a}` : ""}`, s, i, A));
                }
                if (t.startsWith("text/")) {
                    const A = o(Buffer.concat(c));
                    return void process.nextTick(e, new r(`Response status code ${s}${a ? `: ${a}` : ""}`, s, i, A));
                }
            } catch (e) {}
            process.nextTick(e, new r(`Response status code ${s}${a ? `: ${a}` : ""}`, s, i));
        } else process.nextTick(e, new r(`Response status code ${s}${a ? `: ${a}` : ""}`, s, i));
    }
};
