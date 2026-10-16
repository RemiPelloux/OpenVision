"use strict";
const { Transform: n } = require("./module-2203.js"), { Console: r } = require("./module-4236.js");
module.exports = class {
    constructor({ disableColors: e } = {}){
        this.transform = new n({
            transform (e, t, A) {
                A(null, e);
            }
        }), this.logger = new r({
            stdout: this.transform,
            inspectOptions: {
                colors: !e && !process.env.CI
            }
        });
    }
    format(e) {
        const t = e.map(({ method: e, path: t, data: { statusCode: A }, persist: n, times: r, timesInvoked: o, origin: s })=>({
                Method: e,
                Origin: s,
                Path: t,
                "Status code": A,
                Persistent: n ? "✅" : "❌",
                Invocations: o,
                Remaining: n ? 1 / 0 : r - o
            }));
        return this.logger.table(t), this.transform.read().toString();
    }
};
