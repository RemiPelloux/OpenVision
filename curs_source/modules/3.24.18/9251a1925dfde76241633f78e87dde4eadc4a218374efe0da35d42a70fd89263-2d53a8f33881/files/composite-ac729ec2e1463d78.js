import { init_composite_modes } from "./composite-modes.js";
import { init_constants } from "./constants.js";
import { init_esm9 } from "../../../../../../../@jimp+types@1.6.0/node_modules/@jimp/types/dist/esm/index.js";
import { init_esm10 } from "../../../../../../../@jimp+utils@1.6.0/node_modules/@jimp/utils/dist/esm/index.js";
var __wakaru_init_composite_initialized = false;
export function init_composite() {
if (__wakaru_init_composite_initialized) return;
__wakaru_init_composite_initialized = true;
init_esm9();
init_constants();
init_composite_modes();
init_esm10();

}
