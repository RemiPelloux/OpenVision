import { sp } from "./find-executable.ts";
import { N5 } from "./path-utils.ts";
import { vp } from "./safe-spawn-cwd.ts";
import { gb } from "./spawn-promise.ts";
import { h } from "./tslib.es6.js";
import { Rb } from "./workload-spawn.ts";
import { kb } from "./workspace-paths.ts";
import { k5 } from "./writable-iterable.ts";
var __wakaru_ze_initialized = false;
export function ze() {
if (__wakaru_ze_initialized) return;
__wakaru_ze_initialized = true;
h(), sp(), N5(), vp(), gb(), Rb(), kb(), k5();

}
