"use strict";
const { Transform: r } = require(2203), { Console: s } = require(64236);
module.exports = class {
    constructor({ disableColors: A } = {}){
        this.transform = new r({
            transform (A, e, t) {
                t(null, A);
            }
        }), this.logger = new s({
            stdout: this.transform,
            inspectOptions: {
                colors: !A && !process.env.CI
            }
        });
    }
    format(A) {
        const e = A.map(({ method: A, path: e, data: { statusCode: t }, persist: r, times: s, timesInvoked: o, origin: n })=>({
                Method: A,
                Origin: n,
                Path: e,
                "Status code": t,
                Persistent: r ? "✅" : "❌",
                Invocations: o,
                Remaining: r ? 1 / 0 : s - o
            }));
        return this.logger.table(e), this.transform.read().toString();
    }
};
