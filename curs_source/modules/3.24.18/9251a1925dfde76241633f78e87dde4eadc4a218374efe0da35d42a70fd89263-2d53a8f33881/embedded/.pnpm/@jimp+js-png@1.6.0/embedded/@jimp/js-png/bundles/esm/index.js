import { __toESM } from "../../../../../../../../agent-host/dist/storage/sqlite-store.js";
import { init_constants2 } from "./constants.js";
import { require_png } from "../../../../../../pngjs@7.0.0/node_modules/pngjs/lib/png.js";
var import_pngjs;
export { import_pngjs };
var __wakaru_init_esm13_initialized = false;
export function init_esm13() {
if (__wakaru_init_esm13_initialized) return;
__wakaru_init_esm13_initialized = true;
import_pngjs = __toESM(require_png(), 1);
init_constants2();
init_constants2();

}
