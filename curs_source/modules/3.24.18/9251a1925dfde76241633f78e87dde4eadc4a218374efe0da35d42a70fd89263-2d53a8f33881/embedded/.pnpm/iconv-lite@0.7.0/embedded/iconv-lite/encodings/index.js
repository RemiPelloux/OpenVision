import { require_dbcs_codec } from "./dbcs-codec.js";
import { require_dbcs_data } from "./dbcs-data.js";
import { require_internal } from "./internal.js";
import { require_sbcs_codec } from "./sbcs-codec.js";
import { require_sbcs_data_generated } from "./sbcs-data-generated.js";
import { require_sbcs_data } from "./sbcs-data.js";
import { require_utf16 } from "./utf16.js";
import { require_utf32 } from "./utf32.js";
import { require_utf7 } from "./utf7.js";
import { require_merge_exports } from "../lib/helpers/merge-exports.js";
var __wakaru_require_encodings_cache;
export function require_encodings() {
if (__wakaru_require_encodings_cache) return __wakaru_require_encodings_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_encodings_cache = module2;
"use strict";
var mergeModules = require_merge_exports();
var modules = [
    require_internal(),
    require_utf32(),
    require_utf16(),
    require_utf7(),
    require_sbcs_codec(),
    require_sbcs_data(),
    require_sbcs_data_generated(),
    require_dbcs_codec(),
    require_dbcs_data()
];
for(i = 0; i < modules.length; i++){
    module2 = modules[i];
    mergeModules(exports2, module2);
}
var module2;
var i;

return module2.exports;
}
