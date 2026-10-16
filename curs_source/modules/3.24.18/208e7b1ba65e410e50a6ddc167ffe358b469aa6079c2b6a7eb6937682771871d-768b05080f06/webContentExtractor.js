import { Q, ne } from "./instantiation.js";
import { h } from "./tslib.es6.js";
var S9, Gst;
export { Gst, S9 };
var __wakaru_Vst_initialized = false;
export function Vst() {
if (__wakaru_Vst_initialized) return;
__wakaru_Vst_initialized = true;
"use strict";
h(), ne(), S9 = Q("IWebContentExtractorService"), Gst = Q("ISharedWebContentExtractorService");

}
