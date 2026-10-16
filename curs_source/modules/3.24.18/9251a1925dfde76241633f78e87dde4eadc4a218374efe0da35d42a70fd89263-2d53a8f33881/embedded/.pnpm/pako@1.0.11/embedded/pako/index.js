import { require_deflate2 } from "./lib/deflate.js";
import { require_inflate2 } from "./lib/inflate.js";
import { require_common2 } from "./lib/utils/common.js";
import { require_constants16 } from "./lib/zlib/constants.js";
var __wakaru_require_pako_cache;
export function require_pako() {
if (__wakaru_require_pako_cache) return __wakaru_require_pako_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_pako_cache = module2;
"use strict";
var assign = require_common2().assign;
var deflate = require_deflate2();
var inflate = require_inflate2();
var constants14 = require_constants16();
var pako = {};
assign(pako, deflate, inflate, constants14);
module2.exports = pako;

return module2.exports;
}
