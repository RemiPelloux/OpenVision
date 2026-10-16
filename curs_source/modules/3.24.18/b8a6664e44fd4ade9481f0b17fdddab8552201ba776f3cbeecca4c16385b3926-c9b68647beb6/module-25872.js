const r = require(42613), { ResponseStatusCodeError: s } = require("./module-95521.js"), { toUSVString: o } = require("./module-9361.js");
module.exports = {
    getResolveErrorBodyCallback: async function({ callback: A, body: e, contentType: t, statusCode: n, statusMessage: i, headers: E }) {
        r(e);
        let Q = [], g = 0;
        for await (const A of e)if (Q.push(A), g += A.length, g > 131072) {
            Q = null;
            break;
        }
        if (204 !== n && t && Q) {
            try {
                if (t.startsWith("application/json")) {
                    const e = JSON.parse(o(Buffer.concat(Q)));
                    return void process.nextTick(A, new s(`Response status code ${n}${i ? `: ${i}` : ""}`, n, E, e));
                }
                if (t.startsWith("text/")) {
                    const e = o(Buffer.concat(Q));
                    return void process.nextTick(A, new s(`Response status code ${n}${i ? `: ${i}` : ""}`, n, E, e));
                }
            } catch (A) {}
            process.nextTick(A, new s(`Response status code ${n}${i ? `: ${i}` : ""}`, n, E));
        } else process.nextTick(A, new s(`Response status code ${n}${i ? `: ${i}` : ""}`, n, E));
    }
};
