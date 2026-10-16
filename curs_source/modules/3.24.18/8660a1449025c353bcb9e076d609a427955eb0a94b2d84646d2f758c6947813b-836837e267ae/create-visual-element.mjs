import { e1v } from "./HTMLVisualElement.mjs";
import { u1v } from "./SVGVisualElement.mjs";
import { r8 } from "./index_18.mjs";
import { iZl } from "./is-svg-component.mjs";
import { nZl } from "./ofv.js";
import { E } from "./tslib.es6.js";
import { Fragment as mb0 } from "./react-runtime/react/esm-index-production.js";
var Y1v;
export { Y1v };
var __wakaru_gb0_initialized = false;
export function gb0() {
if (__wakaru_gb0_initialized) return;
__wakaru_gb0_initialized = true;
E(), r8(), iZl(), Y1v = (t, e)=>e.isSVG ?? nZl(t) ? new u1v(e) : new e1v(e, {
        allowProjection: t !== mb0
    });

}
