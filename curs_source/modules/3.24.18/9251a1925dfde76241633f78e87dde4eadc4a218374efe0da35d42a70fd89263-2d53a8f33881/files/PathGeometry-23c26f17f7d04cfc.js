var PathGeometry, DrawOPS2;
export { DrawOPS2, PathGeometry };
var __wakaru_init_PathGeometry_initialized = false;
export function init_PathGeometry() {
if (__wakaru_init_PathGeometry_initialized) return;
__wakaru_init_PathGeometry_initialized = true;
(function(PathGeometry2) {
    PathGeometry2[PathGeometry2["undefined"] = 0] = "undefined";
    PathGeometry2[PathGeometry2["hline"] = 1] = "hline";
    PathGeometry2[PathGeometry2["vline"] = 2] = "vline";
    PathGeometry2[PathGeometry2["rectangle"] = 3] = "rectangle";
})(PathGeometry || (PathGeometry = {}));
(function(DrawOPS3) {
    DrawOPS3[DrawOPS3["moveTo"] = 0] = "moveTo";
    DrawOPS3[DrawOPS3["lineTo"] = 1] = "lineTo";
    DrawOPS3[DrawOPS3["curveTo"] = 2] = "curveTo";
    DrawOPS3[DrawOPS3["closePath"] = 3] = "closePath";
    DrawOPS3[DrawOPS3["rectangle"] = 4] = "rectangle";
})(DrawOPS2 || (DrawOPS2 = {}));

}
