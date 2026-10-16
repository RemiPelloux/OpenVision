import { wrt } from "./agent-commit-hashes.ts";
import { Hve } from "./change-id.ts";
import { Ert } from "./command-filter.ts";
import { brt } from "./diff-utils.ts";
import { Rrt } from "./format-detection.ts";
import { Irt } from "./generate-hashes.ts";
import { Sf } from "./git-repo-utils.ts";
import { Art } from "./hash-line.ts";
import { Fu } from "./line-normalizer.ts";
import { ml } from "./murmurhash.ts";
import { Mrt } from "./normalize-ai-line-ranges.ts";
import { Prt } from "./score-all-ai-commit.ts";
import { Ort } from "./score-commit.ts";
import { h } from "./tslib.es6.js";
import { ul } from "./types_2.ts";
var __wakaru_Lrt_initialized = false;
export function Lrt() {
if (__wakaru_Lrt_initialized) return;
__wakaru_Lrt_initialized = true;
"use strict";
h(), wrt(), Hve(), Ert(), brt(), Rrt(), Irt(), Sf(), Art(), Fu(), ml(), Mrt(), Prt(), Ort(), ul();

}
