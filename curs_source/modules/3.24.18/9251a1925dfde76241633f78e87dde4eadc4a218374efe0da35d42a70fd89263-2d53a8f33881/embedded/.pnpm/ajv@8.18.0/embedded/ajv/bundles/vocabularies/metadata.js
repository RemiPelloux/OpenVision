var __wakaru_require_metadata_cache;
export function require_metadata() {
if (__wakaru_require_metadata_cache) return __wakaru_require_metadata_cache;
var exports2 = {};
__wakaru_require_metadata_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.contentVocabulary = exports2.metadataVocabulary = void 0;
exports2.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
];
exports2.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
];

return exports2;
}
