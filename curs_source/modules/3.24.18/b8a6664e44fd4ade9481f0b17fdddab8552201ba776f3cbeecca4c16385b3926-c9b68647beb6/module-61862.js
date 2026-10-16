"use strict";
const { UndiciError: r } = require("./module-95521.js");
class s extends r {
    constructor(A){
        super(A), Error.captureStackTrace(this, s), this.name = "MockNotMatchedError", this.message = A || "The request does not match any registered mock dispatches", this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED";
    }
}
module.exports = {
    MockNotMatchedError: s
};
