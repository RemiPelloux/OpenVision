import { require_items } from "./items.js";
var __wakaru_require_prefixItems_cache;
export function require_prefixItems() {
if (__wakaru_require_prefixItems_cache) return __wakaru_require_prefixItems_cache;
var exports2 = {};
__wakaru_require_prefixItems_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var items_1 = require_items();
var def = {
    keyword: "prefixItems",
    type: "array",
    schemaType: [
        "array"
    ],
    before: "uniqueItems",
    code: (cxt)=>(0, items_1.validateTuple)(cxt, "items")
};
exports2.default = def;

return exports2;
}
