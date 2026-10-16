import { require_dataURL } from "../fetch/dataURL.js";
import { require_util2 } from "../fetch/util.js";
var __wakaru_require_util5_cache;
export function require_util5() {
if (__wakaru_require_util5_cache) return __wakaru_require_util5_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_util5_cache = module2;
"use strict";
var assert4 = require("assert");
var { URLSerializer } = require_dataURL();
var { isValidHeaderName } = require_util2();
function urlEquals(A2, B2, excludeFragment = false) {
    const serializedA = URLSerializer(A2, excludeFragment);
    const serializedB = URLSerializer(B2, excludeFragment);
    return serializedA === serializedB;
}
function fieldValues(header) {
    assert4(header !== null);
    const values = [];
    for (let value of header.split(",")){
        value = value.trim();
        if (!value.length) {
            continue;
        } else if (!isValidHeaderName(value)) {
            continue;
        }
        values.push(value);
    }
    return values;
}
module2.exports = {
    urlEquals,
    fieldValues
};

return module2.exports;
}
