import { N6p } from "./abort-reason.ts";
import { C5a } from "./core.ts";
import { Q6p } from "./ipa.js";
import { v4p } from "./logger.ts";
import { o4p } from "./otel.ts";
import { E } from "./tslib.es6.js";
var __wakaru_Ng_initialized = false;
export function Ng() {
if (__wakaru_Ng_initialized) return;
__wakaru_Ng_initialized = true;
E(), N6p(), Q6p(), C5a(), v4p(), o4p();

}
