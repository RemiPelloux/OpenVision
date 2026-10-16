import { init_semver } from "./semver.js";
import { init_platform } from "../platform/index.js";
import { _globalThis } from "../platform/node/globalThis.js";
import { VERSION, init_version } from "../version.js";
var major, GLOBAL_OPENTELEMETRY_API_KEY, _global;
export { GLOBAL_OPENTELEMETRY_API_KEY, _global, major };
var __wakaru_init_global_utils_initialized = false;
export function init_global_utils() {
if (__wakaru_init_global_utils_initialized) return;
__wakaru_init_global_utils_initialized = true;
init_platform();
init_version();
init_semver();
major = VERSION.split(".")[0];
GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for("opentelemetry.js.api." + major);
_global = _globalThis;

}
