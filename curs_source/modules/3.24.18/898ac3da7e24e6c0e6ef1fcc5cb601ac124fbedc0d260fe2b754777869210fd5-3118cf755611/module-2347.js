"use strict";
const { Transform: t } = require("./module-2203.js"), { Console: s } = require("./module-4236.js");
module.exports = class {
    constructor({ disableColors: e } = {}){
        this.transform = new t({
            transform (e, n, a) {
                a(null, e);
            }
        }), this.logger = new s({
            stdout: this.transform,
            inspectOptions: {
                colors: !e && !process.env.CI
            }
        });
    }
    format(e) {
        const n = e.map(({ method: e, path: n, data: { statusCode: a }, persist: t, times: s, timesInvoked: o, origin: r })=>({
                Method: e,
                Origin: r,
                Path: n,
                "Status code": a,
                Persistent: t ? "✅" : "❌",
                Invocations: o,
                Remaining: t ? 1 / 0 : s - o
            }));
        return this.logger.table(n), this.transform.read().toString();
    }
};
