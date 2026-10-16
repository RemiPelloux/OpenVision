import { require_api_connect } from "./api-connect.js";
import { require_api_pipeline } from "./api-pipeline.js";
import { require_api_request } from "./api-request.js";
import { require_api_stream } from "./api-stream.js";
import { require_api_upgrade } from "./api-upgrade.js";
var __wakaru_require_api_cache;
export function require_api() {
if (__wakaru_require_api_cache) return __wakaru_require_api_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_api_cache = module2;
"use strict";
module2.exports.request = require_api_request();
module2.exports.stream = require_api_stream();
module2.exports.pipeline = require_api_pipeline();
module2.exports.upgrade = require_api_upgrade();
module2.exports.connect = require_api_connect();

return module2.exports;
}
