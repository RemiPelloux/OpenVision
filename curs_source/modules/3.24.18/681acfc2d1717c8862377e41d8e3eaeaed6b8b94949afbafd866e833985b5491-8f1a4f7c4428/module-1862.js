"use strict";
const { UndiciError: n } = require("./module-7902.js");
class r extends n {
    constructor(e){
        super(e), Error.captureStackTrace(this, r), this.name = "MockNotMatchedError", this.message = e || "The request does not match any registered mock dispatches", this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED";
    }
}
module.exports = {
    MockNotMatchedError: r
};
