import { I$ } from "./De_3.js";
import { Gp } from "./index_3.ts";
import { x } from "./tslib.es6.js";
var fkv, vkv, _kv;
export { _kv, fkv, vkv };
var __wakaru_bkv_initialized = false;
export function bkv() {
if (__wakaru_bkv_initialized) return;
__wakaru_bkv_initialized = true;
"use strict";
x(), Gp(), fkv = I$(Symbol("execConversationId"), void 0), vkv = I$(Symbol("execRequestId"), void 0), _kv = I$(Symbol("execBrowserOperationSource"), void 0);

}
