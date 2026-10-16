"use strict";
const { Transform: n } = require("./module-2203.js"), { Console: r } = require("./module-4236.js");
module.exports = class {
    constructor({ disableColors: e } = {}){
        this.transform = new n({
            transform (e, A, t) {
                t(null, e);
            }
        }), this.logger = new r({
            stdout: this.transform,
            inspectOptions: {
                colors: !e && !process.env.CI
            }
        });
    }
    format(e) {
        const A = e.map(({ method: e, path: A, data: { statusCode: t }, persist: n, times: r, timesInvoked: o, origin: s })=>({
                Method: e,
                Origin: s,
                Path: A,
                "Status code": t,
                Persistent: n ? "✅" : "❌",
                Invocations: o,
                Remaining: n ? 1 / 0 : r - o
            }));
        return this.logger.table(A), this.transform.read().toString();
    }
};
