import { init_Line } from "./Line.js";
import { init_LineStore } from "./LineStore.js";
import { init_Point } from "./Point.js";
import { init_Rectangle } from "./Rectangle.js";
import { init_Shape } from "./Shape.js";
import { init_Table } from "./Table.js";
var __wakaru_init_geometry_initialized = false;
export function init_geometry() {
if (__wakaru_init_geometry_initialized) return;
__wakaru_init_geometry_initialized = true;
init_Line();
init_LineStore();
init_Point();
init_Rectangle();
init_Shape();
init_Table();

}
