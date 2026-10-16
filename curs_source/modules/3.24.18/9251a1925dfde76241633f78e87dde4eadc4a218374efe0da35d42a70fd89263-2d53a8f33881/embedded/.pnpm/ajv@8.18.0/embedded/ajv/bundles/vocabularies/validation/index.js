import { require_const } from "./const.js";
import { require_enum2 } from "./enum.js";
import { require_limitItems } from "./limitItems.js";
import { require_limitLength } from "./limitLength.js";
import { require_limitNumber } from "./limitNumber.js";
import { require_limitProperties } from "./limitProperties.js";
import { require_multipleOf } from "./multipleOf.js";
import { require_pattern } from "./pattern.js";
import { require_required } from "./required.js";
import { require_uniqueItems } from "./uniqueItems.js";
var __wakaru_require_validation2_cache;
export function require_validation2() {
if (__wakaru_require_validation2_cache) return __wakaru_require_validation2_cache;
var exports2 = {};
__wakaru_require_validation2_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var limitNumber_1 = require_limitNumber();
var multipleOf_1 = require_multipleOf();
var limitLength_1 = require_limitLength();
var pattern_1 = require_pattern();
var limitProperties_1 = require_limitProperties();
var required_1 = require_required();
var limitItems_1 = require_limitItems();
var uniqueItems_1 = require_uniqueItems();
var const_1 = require_const();
var enum_1 = require_enum2();
var validation = [
    limitNumber_1.default,
    multipleOf_1.default,
    limitLength_1.default,
    pattern_1.default,
    limitProperties_1.default,
    required_1.default,
    limitItems_1.default,
    uniqueItems_1.default,
    {
        keyword: "type",
        schemaType: [
            "string",
            "array"
        ]
    },
    {
        keyword: "nullable",
        schemaType: "boolean"
    },
    const_1.default,
    enum_1.default
];
exports2.default = validation;

return exports2;
}
