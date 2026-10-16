"use strict";
const { Transform: r } = require(57075), { Console: s } = require(37540), o = process.versions.icu ? "✅" : "Y ", n = process.versions.icu ? "❌" : "N ";
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
        const e = A.map(({ method: A, path: e, data: { statusCode: t }, persist: r, times: s, timesInvoked: i, origin: a })=>({
                Method: A,
                Origin: a,
                Path: e,
                "Status code": t,
                Persistent: r ? o : n,
                Invocations: i,
                Remaining: r ? 1 / 0 : s - i
            }));
        return this.logger.table(e), this.transform.read().toString();
    }
};
