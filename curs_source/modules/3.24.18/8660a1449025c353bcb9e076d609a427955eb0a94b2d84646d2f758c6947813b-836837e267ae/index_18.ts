import { lCk } from "./agent-commit-hashes.ts";
import { oSg } from "./change-id.ts";
import { cCk } from "./command-filter.ts";
import { uCk } from "./diff-utils.ts";
import { mCk } from "./format-detection.ts";
import { gCk } from "./generate-hashes.ts";
import { fls } from "./git-repo-utils.ts";
import { fCk } from "./hash-line.ts";
import { XAn } from "./line-normalizer.ts";
import { wVt } from "./murmurhash.ts";
import { wCk } from "./normalize-ai-line-ranges.ts";
import { TCk } from "./score-all-ai-commit.ts";
import { DCk } from "./score-commit.ts";
import { E } from "./tslib.es6.js";
import { ZAn } from "./types_3.ts";
var __wakaru_$at_initialized = false;
export function $at() {
if (__wakaru_$at_initialized) return;
__wakaru_$at_initialized = true;
E(), lCk(), oSg(), cCk(), uCk(), mCk(), gCk(), fls(), fCk(), XAn(), wVt(), wCk(), TCk(), DCk(), ZAn();

}
