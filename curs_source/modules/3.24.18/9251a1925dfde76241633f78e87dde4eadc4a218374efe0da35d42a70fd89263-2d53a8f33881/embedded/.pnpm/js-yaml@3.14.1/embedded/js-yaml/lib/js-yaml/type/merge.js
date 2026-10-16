import { require_type } from "../type.js";
var __wakaru_require_merge2_cache;
export function require_merge2() {
if (__wakaru_require_merge2_cache) return __wakaru_require_merge2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_merge2_cache = module2;
"use strict";
var Type3 = require_type();
function resolveYamlMerge(data) {
    return data === "<<" || data === null;
}
module2.exports = new Type3("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: resolveYamlMerge
});

return module2.exports;
}
