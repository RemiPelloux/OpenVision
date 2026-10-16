var __wakaru_require_rules_cache;
export function require_rules() {
if (__wakaru_require_rules_cache) return __wakaru_require_rules_cache;
var exports2 = {};
__wakaru_require_rules_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.getRules = exports2.isJSONType = void 0;
var _jsonTypes = [
    "string",
    "number",
    "integer",
    "boolean",
    "null",
    "object",
    "array"
];
var jsonTypes = new Set(_jsonTypes);
function isJSONType(x) {
    return typeof x == "string" && jsonTypes.has(x);
}
exports2.isJSONType = isJSONType;
function getRules() {
    const groups = {
        number: {
            type: "number",
            rules: []
        },
        string: {
            type: "string",
            rules: []
        },
        array: {
            type: "array",
            rules: []
        },
        object: {
            type: "object",
            rules: []
        }
    };
    return {
        types: {
            ...groups,
            integer: true,
            boolean: true,
            null: true
        },
        rules: [
            {
                rules: []
            },
            groups.number,
            groups.string,
            groups.array,
            groups.object
        ],
        post: {
            rules: []
        },
        all: {},
        keywords: {}
    };
}
exports2.getRules = getRules;

return exports2;
}
