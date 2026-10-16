import { add, darken2, difference, dstOver, exclusion, hardLight, lighten2, multiply, overlay, screen, srcOver } from "../../../../../../../../../composite_modes_exports.js";
var names2;
export { names2 };
var __wakaru_init_composite_modes_initialized = false;
export function init_composite_modes() {
if (__wakaru_init_composite_modes_initialized) return;
__wakaru_init_composite_modes_initialized = true;
names2 = [
    srcOver,
    dstOver,
    multiply,
    add,
    screen,
    overlay,
    darken2,
    lighten2,
    hardLight,
    difference,
    exclusion
];

}
