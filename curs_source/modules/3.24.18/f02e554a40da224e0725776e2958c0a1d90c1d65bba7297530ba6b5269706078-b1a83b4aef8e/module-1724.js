const n = require("./module-2613.js"), { ResponseStatusCodeError: s } = require("./module-8762.js"), { toUSVString: i } = require("./module-3589.js");
module.exports = {
    getResolveErrorBodyCallback: async function({ callback: t, body: e, contentType: r, statusCode: o, statusMessage: a, headers: u }) {
        n(e);
        let c = [], l = 0;
        for await (const t of e)if (c.push(t), l += t.length, l > 131072) {
            c = null;
            break;
        }
        if (204 !== o && r && c) {
            try {
                if (r.startsWith("application/json")) {
                    const e = JSON.parse(i(Buffer.concat(c)));
                    return void process.nextTick(t, new s(`Response status code ${o}${a ? `: ${a}` : ""}`, o, u, e));
                }
                if (r.startsWith("text/")) {
                    const e = i(Buffer.concat(c));
                    return void process.nextTick(t, new s(`Response status code ${o}${a ? `: ${a}` : ""}`, o, u, e));
                }
            } catch (t) {}
            process.nextTick(t, new s(`Response status code ${o}${a ? `: ${a}` : ""}`, o, u));
        } else process.nextTick(t, new s(`Response status code ${o}${a ? `: ${a}` : ""}`, o, u));
    }
};
