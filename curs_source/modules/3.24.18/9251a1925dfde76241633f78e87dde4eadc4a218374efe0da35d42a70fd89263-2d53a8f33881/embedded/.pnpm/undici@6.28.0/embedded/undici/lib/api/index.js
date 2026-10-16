import { require_api_connect2 } from "./api-connect.js";
import { require_api_pipeline2 } from "./api-pipeline.js";
import { require_api_request2 } from "./api-request.js";
import { require_api_stream2 } from "./api-stream.js";
import { require_api_upgrade2 } from "./api-upgrade.js";
var __wakaru_require_api2_cache;
export function require_api2() {
if (__wakaru_require_api2_cache) return __wakaru_require_api2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_api2_cache = module2;
"use strict";
module2.exports.request = require_api_request2();
module2.exports.stream = require_api_stream2();
module2.exports.pipeline = require_api_pipeline2();
module2.exports.upgrade = require_api_upgrade2();
module2.exports.connect = require_api_connect2();

return module2.exports;
}
