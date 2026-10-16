import { require_packer_sync } from "./packer-sync.js";
import { require_parser_sync } from "./parser-sync.js";
var __wakaru_require_png_sync_cache;
export function require_png_sync() {
if (__wakaru_require_png_sync_cache) return __wakaru_require_png_sync_cache;
var exports2 = {};
__wakaru_require_png_sync_cache = exports2;
"use strict";
var parse11 = require_parser_sync();
var pack = require_packer_sync();
exports2.read = function(buffer, options2) {
    return parse11(buffer, options2 || {});
};
exports2.write = function(png2, options2) {
    return pack(png2, options2);
};

return exports2;
}
