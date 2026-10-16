import { init_sand_auto_review_classifier_context } from "./sand-auto-review-classifier-context.js";
import { init_sand_auto_review_classifier } from "./sand-auto-review-classifier.js";
import { init_sand_auto_review_parser } from "./sand-auto-review-parser.js";
var __wakaru_init_sand_auto_review_initialized = false;
export function init_sand_auto_review() {
if (__wakaru_init_sand_auto_review_initialized) return;
__wakaru_init_sand_auto_review_initialized = true;
"use strict";
init_sand_auto_review_classifier();
init_sand_auto_review_classifier_context();
init_sand_auto_review_parser();

}
