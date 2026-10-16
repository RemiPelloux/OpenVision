import { Ebe, c_ } from "./async.cursor.js";
import { qn } from "./async.js";
import { ARt } from "./diff-render-limits.js";
import { jls, uRn } from "./evictingLRUCache.js";
import { p_c } from "./fsd-diff-entry-policy.js";
import { fre } from "./fsd-finding-utils.js";
import { f_c } from "./fsd-git-coalesce.js";
import { Xd_ } from "./fsd-git-range-walk.js";
import { n0v } from "./glass-diff-batched-patch.js";
import { e9e } from "./pullRequestStateConversion.js";
import { E } from "./tslib.es6.js";
var Jd_, eh_, th_, b_c, y_c;
export { Jd_, b_c, eh_, th_, y_c };
var __wakaru_S_c_initialized = false;
export function S_c() {
if (__wakaru_S_c_initialized) return;
__wakaru_S_c_initialized = true;
"use strict";
E(), qn(), c_(), jls(), e9e(), ARt(), n0v(), p_c(), fre(), f_c(), Xd_(), Jd_ = 6, eh_ = 64, th_ = 12, b_c = new Ebe(th_), y_c = new uRn(eh_, (t, e)=>e.dispose());

}
