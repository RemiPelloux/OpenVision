import { makeInt64Support } from "../../../../../../../../external_exports.js";
import { init_varint } from "./google/varint.js";
import { init_assert } from "./private/assert.js";
var protoInt64;
export { protoInt64 };
var __wakaru_init_proto_int64_initialized = false;
export function init_proto_int64() {
if (__wakaru_init_proto_int64_initialized) return;
__wakaru_init_proto_int64_initialized = true;
init_assert();
init_varint();
protoInt64 = makeInt64Support();

}
