import { Uuf } from "./ComposerUsageStatusBar.js";
import { mk } from "./gallerySection.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { pi } from "./ze.js";
var Kzv, Yzv, Xzv;
export { Kzv, Xzv, Yzv };
var __wakaru_caC_initialized = false;
export function caC() {
if (__wakaru_caC_initialized) return;
__wakaru_caC_initialized = true;
"use strict";
E(), at(), at(), at(), pi(), Uuf(), mk(), Kzv = wt("<div><h2>Usage Limit Bar Variations</h2><p>This component shows usage limit information with different states and configurations. The bar only appears when usage is above the display threshold (default 50%)."), Yzv = wt(`<div><h3>Usage Logic</h3><ul><li>Bar appears when usage \u2265 display threshold (default 50%)</li><li>50-80%: "You've used X% of your included usage"</li><li>80-100%: "You're approaching your usage limit"</li><li>100%+: "You've hit your usage limit" (or spend limit messages)</li><li>Hover shows detailed breakdown with progress bars</li><li>Spend limit takes priority when plan limit is fully used`), Xzv = wt("<div><div><h3></h3><div>Plan: $<!>/$</div></div><div>");

}
