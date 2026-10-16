import { krt } from "./ai-code-tracking.ts";
import { nrt } from "./get-user-commits.ts";
import { lrt } from "./git-relative-path.ts";
import { urt } from "./poll-commit-merge.ts";
import { vrt } from "./repo-utils.ts";
import { Srt } from "./sqlite-storage.ts";
import { h } from "./tslib.es6.js";
var __wakaru_yrt_initialized = false;
export function yrt() {
if (__wakaru_yrt_initialized) return;
__wakaru_yrt_initialized = true;
"use strict";
h(), nrt(), lrt(), urt(), vrt(), krt(), Srt();

}
