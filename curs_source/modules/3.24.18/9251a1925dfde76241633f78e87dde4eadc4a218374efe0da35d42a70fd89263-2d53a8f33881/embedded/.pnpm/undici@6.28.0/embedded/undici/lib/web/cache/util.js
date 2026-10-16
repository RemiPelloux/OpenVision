import { require_data_url } from "../fetch/data-url.js";
import { require_util9 } from "../fetch/util.js";
var __wakaru_require_util12_cache;
export function require_util12() {
if (__wakaru_require_util12_cache) return __wakaru_require_util12_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_util12_cache = module2;
"use strict";
var assert4 = require("node:assert");
var { URLSerializer } = require_data_url();
var { isValidHeaderName } = require_util9();
function urlEquals(A2, B2, excludeFragment = false) {
    const serializedA = URLSerializer(A2, excludeFragment);
    const serializedB = URLSerializer(B2, excludeFragment);
    return serializedA === serializedB;
}
function getFieldValues(header) {
    assert4(header !== null);
    const values = [];
    for (let value of header.split(",")){
        value = value.trim();
        if (isValidHeaderName(value)) {
            values.push(value);
        }
    }
    return values;
}
module2.exports = {
    urlEquals,
    getFieldValues
};

return module2.exports;
}
