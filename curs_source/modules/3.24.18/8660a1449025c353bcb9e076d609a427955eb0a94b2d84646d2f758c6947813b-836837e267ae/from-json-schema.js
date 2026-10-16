import { D2o, had } from "./D2o.js";
import { M2o } from "./checks_2.js";
import { rad } from "./entry.js";
import { Svr } from "./iso.js";
import { Jfr } from "./registries.js";
import { s_r } from "./schemas_2.js";
import { E } from "./tslib.es6.js";
var Cf, Tld;
export { Cf, Tld };
var __wakaru_RTy_initialized = false;
export function RTy() {
if (__wakaru_RTy_initialized) return;
__wakaru_RTy_initialized = true;
E(), Jfr(), M2o(), Svr(), s_r(), Cf = {
    ...had,
    ...rad,
    iso: D2o
}, Tld = new Set([
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
