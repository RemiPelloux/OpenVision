"use strict";
const { Transform: n } = require("./module-2203.js"), { Console: s } = require("./module-4236.js");
module.exports = class {
    constructor({ disableColors: t } = {}){
        this.transform = new n({
            transform (t, e, r) {
                r(null, t);
            }
        }), this.logger = new s({
            stdout: this.transform,
            inspectOptions: {
                colors: !t && !process.env.CI
            }
        });
    }
    format(t) {
        const e = t.map(({ method: t, path: e, data: { statusCode: r }, persist: n, times: s, timesInvoked: i, origin: o })=>({
                Method: t,
                Origin: o,
                Path: e,
                "Status code": r,
                Persistent: n ? "✅" : "❌",
                Invocations: i,
                Remaining: n ? 1 / 0 : s - i
            }));
        return this.logger.table(e), this.transform.read().toString();
    }
};
