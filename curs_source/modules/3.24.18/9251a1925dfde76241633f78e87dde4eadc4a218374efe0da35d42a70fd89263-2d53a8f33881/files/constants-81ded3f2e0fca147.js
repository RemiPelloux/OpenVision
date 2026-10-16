var ResizeStrategy;
export { ResizeStrategy };
var __wakaru_init_constants3_initialized = false;
export function init_constants3() {
if (__wakaru_init_constants3_initialized) return;
__wakaru_init_constants3_initialized = true;
(function(ResizeStrategy2) {
    ResizeStrategy2["NEAREST_NEIGHBOR"] = "nearestNeighbor";
    ResizeStrategy2["BILINEAR"] = "bilinearInterpolation";
    ResizeStrategy2["BICUBIC"] = "bicubicInterpolation";
    ResizeStrategy2["HERMITE"] = "hermiteInterpolation";
    ResizeStrategy2["BEZIER"] = "bezierInterpolation";
})(ResizeStrategy || (ResizeStrategy = {}));

}
