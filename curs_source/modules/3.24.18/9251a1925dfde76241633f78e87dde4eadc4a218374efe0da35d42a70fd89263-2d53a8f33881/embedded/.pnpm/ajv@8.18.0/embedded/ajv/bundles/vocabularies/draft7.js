import { require_applicator } from "./applicator/index.js";
import { require_core3 } from "./core/index.js";
import { require_format2 } from "./format/index.js";
import { require_metadata } from "./metadata.js";
import { require_validation2 } from "./validation/index.js";
var __wakaru_require_draft7_cache;
export function require_draft7() {
if (__wakaru_require_draft7_cache) return __wakaru_require_draft7_cache;
var exports2 = {};
__wakaru_require_draft7_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
var core_1 = require_core3();
var validation_1 = require_validation2();
var applicator_1 = require_applicator();
var format_1 = require_format2();
var metadata_1 = require_metadata();
var draft7Vocabularies = [
    core_1.default,
    validation_1.default,
    (0, applicator_1.default)(),
    format_1.default,
    metadata_1.metadataVocabulary,
    metadata_1.contentVocabulary
];
exports2.default = draft7Vocabularies;

return exports2;
}
