const t = require("./module-2613.js"), { ResponseStatusCodeError: s } = require("./module-7902.js"), { toUSVString: o } = require("./module-9361.js");
module.exports = {
    getResolveErrorBodyCallback: async function({ callback: e, body: a, contentType: n, statusCode: r, statusMessage: i, headers: l }) {
        t(a);
        let d = [], m = 0;
        for await (const e of a)if (d.push(e), m += e.length, m > 131072) {
            d = null;
            break;
        }
        if (204 !== r && n && d) {
            try {
                if (n.startsWith("application/json")) {
                    const a = JSON.parse(o(Buffer.concat(d)));
                    return void process.nextTick(e, new s(`Response status code ${r}${i ? `: ${i}` : ""}`, r, l, a));
                }
                if (n.startsWith("text/")) {
                    const a = o(Buffer.concat(d));
                    return void process.nextTick(e, new s(`Response status code ${r}${i ? `: ${i}` : ""}`, r, l, a));
                }
            } catch (e) {}
            process.nextTick(e, new s(`Response status code ${r}${i ? `: ${i}` : ""}`, r, l));
        } else process.nextTick(e, new s(`Response status code ${r}${i ? `: ${i}` : ""}`, r, l));
    }
};
