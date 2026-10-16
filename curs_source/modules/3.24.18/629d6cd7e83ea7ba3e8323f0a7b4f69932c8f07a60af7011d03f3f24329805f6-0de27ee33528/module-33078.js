"use strict";
const { UndiciError: r } = require("./module-38238.js"), s = Symbol.for("undici.error.UND_MOCK_ERR_MOCK_NOT_MATCHED");
class o extends r {
    constructor(A){
        super(A), Error.captureStackTrace(this, o), this.name = "MockNotMatchedError", this.message = A || "The request does not match any registered mock dispatches", this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED";
    }
    static [Symbol.hasInstance](A) {
        return A && !0 === A[s];
    }
    [s] = !0;
}
module.exports = {
    MockNotMatchedError: o
};
