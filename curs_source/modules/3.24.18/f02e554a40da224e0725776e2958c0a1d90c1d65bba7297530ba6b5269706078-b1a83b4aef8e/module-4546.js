"use strict";
const { UndiciError: n } = require("./module-8762.js");
class s extends n {
    constructor(t){
        super(t), Error.captureStackTrace(this, s), this.name = "MockNotMatchedError", this.message = t || "The request does not match any registered mock dispatches", this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED";
    }
}
module.exports = {
    MockNotMatchedError: s
};
