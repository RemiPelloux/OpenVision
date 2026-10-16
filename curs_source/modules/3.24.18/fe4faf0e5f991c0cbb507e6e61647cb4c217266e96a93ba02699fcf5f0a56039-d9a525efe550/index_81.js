import { P3i } from "./attention.js";
import { j3i } from "./autolink.js";
import { xRt } from "./blank-line.js";
import { L3i } from "./block-quote.js";
import { D3i } from "./character-escape.js";
import { F3i } from "./character-reference.js";
import { O3i } from "./code-fenced.js";
import { z3i } from "./code-indented.js";
import { B3i } from "./code-text.js";
import { U3i } from "./content.js";
import { G3i } from "./definition_2.js";
import { W3i } from "./hard-break-escape.js";
import { H3i } from "./heading-atx.js";
import { Z3i } from "./html-flow.js";
import { V3i } from "./html-text.js";
import { jRt } from "./label-end.js";
import { K3i } from "./label-start-image.js";
import { X3i } from "./label-start-link.js";
import { Y3i } from "./line-ending.js";
import { J3i } from "./list_2.js";
import { Q3i } from "./setext-underline.js";
import { wdr } from "./thematic-break_2.js";
var __wakaru_DRt_initialized = false;
export function DRt() {
if (__wakaru_DRt_initialized) return;
__wakaru_DRt_initialized = true;
P3i(), j3i(), xRt(), L3i(), D3i(), F3i(), O3i(), z3i(), B3i(), U3i(), G3i(), W3i(), H3i(), Z3i(), V3i(), jRt(), K3i(), X3i(), Y3i(), J3i(), Q3i(), wdr();

}
