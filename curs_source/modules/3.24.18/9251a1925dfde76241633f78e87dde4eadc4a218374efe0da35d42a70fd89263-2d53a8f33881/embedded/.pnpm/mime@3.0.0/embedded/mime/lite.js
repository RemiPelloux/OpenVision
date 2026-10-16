import { require_Mime } from "./Mime.js";
import { require_standard } from "./types/standard.js";
var __wakaru_require_lite_cache;
export function require_lite() {
if (__wakaru_require_lite_cache) return __wakaru_require_lite_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_lite_cache = module2;
"use strict";
var Mime = require_Mime();
module2.exports = new Mime(require_standard());

return module2.exports;
}
