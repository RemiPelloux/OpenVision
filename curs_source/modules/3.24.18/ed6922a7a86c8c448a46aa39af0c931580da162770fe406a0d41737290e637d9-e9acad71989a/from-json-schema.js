import { f7s } from "./checks_5.js";
import { hyu } from "./entry.js";
import { E5i } from "./iso_2.js";
import { r5i } from "./registries_2.js";
import { u9i } from "./schemas_6.js";
import { x } from "./tslib.es6.js";
import { v7s, yyu } from "./v7s.js";
var nm, PSu;
export { PSu, nm };
var __wakaru_Xav_initialized = false;
export function Xav() {
if (__wakaru_Xav_initialized) return;
__wakaru_Xav_initialized = true;
x(), r5i(), f7s(), E5i(), u9i(), nm = {
    ...yyu,
    ...hyu,
    iso: v7s
}, PSu = new Set([
    "$schema",
    "$ref",
    "$defs",
    "definitions",
    "$id",
    "id",
    "$comment",
    "$anchor",
    "$vocabulary",
    "$dynamicRef",
    "$dynamicAnchor",
    "type",
    "enum",
    "const",
    "anyOf",
    "oneOf",
    "allOf",
    "not",
    "properties",
    "required",
    "additionalProperties",
    "patternProperties",
    "propertyNames",
    "minProperties",
    "maxProperties",
    "items",
    "prefixItems",
    "additionalItems",
    "minItems",
    "maxItems",
    "uniqueItems",
    "contains",
    "minContains",
    "maxContains",
    "minLength",
    "maxLength",
    "pattern",
    "format",
    "minimum",
    "maximum",
    "exclusiveMinimum",
    "exclusiveMaximum",
    "multipleOf",
    "description",
    "default",
    "contentEncoding",
    "contentMediaType",
    "contentSchema",
    "unevaluatedItems",
    "unevaluatedProperties",
    "if",
    "then",
    "else",
    "dependentSchemas",
    "dependentRequired",
    "nullable",
    "readOnly"
]);

}
