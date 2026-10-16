"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const n = require("./module-28.js"), o = {
    keyword: "prefixItems",
    type: "array",
    schemaType: [
        "array"
    ],
    before: "uniqueItems",
    code: (e)=>(0, n.validateTuple)(e, "items")
};
exports.default = o;
