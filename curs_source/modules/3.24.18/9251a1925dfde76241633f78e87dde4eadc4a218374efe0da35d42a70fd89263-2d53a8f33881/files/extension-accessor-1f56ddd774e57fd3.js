import { init_assert } from "./private/assert.js";
import { init_extensions } from "./private/extensions.js";
var __wakaru_init_extension_accessor_initialized = false;
export function init_extension_accessor() {
if (__wakaru_init_extension_accessor_initialized) return;
__wakaru_init_extension_accessor_initialized = true;
init_assert();
init_extensions();

}
