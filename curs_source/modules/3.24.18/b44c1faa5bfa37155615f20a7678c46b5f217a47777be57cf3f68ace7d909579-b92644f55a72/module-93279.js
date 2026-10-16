"use strict";
const { Transform: n } = require("./module-2203.js"), { Console: s } = require("./module-64236.js");
module.exports = class {
    constructor({ disableColors: e } = {}){
        this.transform = new n({
            transform (e, t, r) {
                r(null, e);
            }
        }), this.logger = new s({
            stdout: this.transform,
            inspectOptions: {
                colors: !e && !process.env.CI
            }
        });
    }
    format(e) {
        const t = e.map(({ method: e, path: t, data: { statusCode: r }, persist: n, times: s, timesInvoked: o, origin: i })=>({
                Method: e,
                Origin: i,
                Path: t,
                "Status code": r,
                Persistent: n ? "✅" : "❌",
                Invocations: o,
                Remaining: n ? 1 / 0 : s - o
            }));
        return this.logger.table(t), this.transform.read().toString();
    }
};
