"use strict";
const { Transform: t } = require("./module-2203.js"), { Console: s } = require("./module-4236.js");
module.exports = class {
    constructor({ disableColors: e } = {}){
        this.transform = new t({
            transform (e, a, n) {
                n(null, e);
            }
        }), this.logger = new s({
            stdout: this.transform,
            inspectOptions: {
                colors: !e && !process.env.CI
            }
        });
    }
    format(e) {
        const a = e.map(({ method: e, path: a, data: { statusCode: n }, persist: t, times: s, timesInvoked: o, origin: r })=>({
                Method: e,
                Origin: r,
                Path: a,
                "Status code": n,
                Persistent: t ? "✅" : "❌",
                Invocations: o,
                Remaining: t ? 1 / 0 : s - o
            }));
        return this.logger.table(a), this.transform.read().toString();
    }
};
