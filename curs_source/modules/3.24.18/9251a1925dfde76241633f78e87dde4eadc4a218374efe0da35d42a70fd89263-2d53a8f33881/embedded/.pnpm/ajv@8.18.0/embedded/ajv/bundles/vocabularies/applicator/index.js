import { require_additionalItems } from "./additionalItems.js";
import { require_additionalProperties } from "./additionalProperties.js";
import { require_allOf } from "./allOf.js";
import { require_anyOf } from "./anyOf.js";
import { require_contains } from "./contains.js";
import { require_dependencies } from "./dependencies.js";
import { require_if } from "./if.js";
import { require_items } from "./items.js";
import { require_items2020 } from "./items2020.js";
import { require_not2 } from "./not.js";
import { require_oneOf } from "./oneOf.js";
import { require_patternProperties } from "./patternProperties.js";
import { require_prefixItems } from "./prefixItems.js";
import { require_properties } from "./properties.js";
import { require_propertyNames } from "./propertyNames.js";
import { require_thenElse } from "./thenElse.js";
var __wakaru_require_applicator_cache;
export function require_applicator() {
if (__wakaru_require_applicator_cache) return __wakaru_require_applicator_cache;
var exports2 = {};
__wakaru_require_applicator_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var additionalItems_1 = require_additionalItems();
var prefixItems_1 = require_prefixItems();
var items_1 = require_items();
var items2020_1 = require_items2020();
var contains_1 = require_contains();
var dependencies_1 = require_dependencies();
var propertyNames_1 = require_propertyNames();
var additionalProperties_1 = require_additionalProperties();
var properties_1 = require_properties();
var patternProperties_1 = require_patternProperties();
var not_1 = require_not2();
var anyOf_1 = require_anyOf();
var oneOf_1 = require_oneOf();
var allOf_1 = require_allOf();
var if_1 = require_if();
var thenElse_1 = require_thenElse();
function getApplicator(draft2020 = false) {
    const applicator = [
        not_1.default,
        anyOf_1.default,
        oneOf_1.default,
        allOf_1.default,
        if_1.default,
        thenElse_1.default,
        propertyNames_1.default,
        additionalProperties_1.default,
        dependencies_1.default,
        properties_1.default,
        patternProperties_1.default
    ];
    if (draft2020) applicator.push(prefixItems_1.default, items2020_1.default);
    else applicator.push(additionalItems_1.default, items_1.default);
    applicator.push(contains_1.default);
    return applicator;
}
exports2.default = getApplicator;

return exports2;
}
