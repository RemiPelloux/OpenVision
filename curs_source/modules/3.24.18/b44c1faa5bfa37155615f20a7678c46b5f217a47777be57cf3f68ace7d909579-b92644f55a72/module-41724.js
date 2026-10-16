const n = require("./module-42613.js"), { ResponseStatusCodeError: s } = require("./module-48762.js"), { toUSVString: o } = require("./module-83589.js");
module.exports = {
    getResolveErrorBodyCallback: async function({ callback: e, body: t, contentType: r, statusCode: i, statusMessage: a, headers: c }) {
        n(t);
        let l = [], u = 0;
        for await (const e of t)if (l.push(e), u += e.length, u > 131072) {
            l = null;
            break;
        }
        if (204 !== i && r && l) {
            try {
                if (r.startsWith("application/json")) {
                    const t = JSON.parse(o(Buffer.concat(l)));
                    return void process.nextTick(e, new s(`Response status code ${i}${a ? `: ${a}` : ""}`, i, c, t));
                }
                if (r.startsWith("text/")) {
                    const t = o(Buffer.concat(l));
                    return void process.nextTick(e, new s(`Response status code ${i}${a ? `: ${a}` : ""}`, i, c, t));
                }
            } catch (e) {}
            process.nextTick(e, new s(`Response status code ${i}${a ? `: ${a}` : ""}`, i, c));
        } else process.nextTick(e, new s(`Response status code ${i}${a ? `: ${a}` : ""}`, i, c));
    }
};
