import { init_esm20 } from "../../../../../../../_a0bfa0c1d160da5255f5725e22e2e76b/node_modules/zod-to-json-schema/dist/esm/index.js";
import { init_zod_compat } from "./zod-compat.js";
var __wakaru_init_zod_json_schema_compat_initialized = false;
export function init_zod_json_schema_compat() {
if (__wakaru_init_zod_json_schema_compat_initialized) return;
__wakaru_init_zod_json_schema_compat_initialized = true;
init_zod_compat();
init_esm20();

}
