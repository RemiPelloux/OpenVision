var HorizontalAlign, VerticalAlign, BlendMode;
export { BlendMode, HorizontalAlign, VerticalAlign };
var __wakaru_init_constants_initialized = false;
export function init_constants() {
if (__wakaru_init_constants_initialized) return;
__wakaru_init_constants_initialized = true;
(function(HorizontalAlign2) {
    HorizontalAlign2[HorizontalAlign2["LEFT"] = 1] = "LEFT";
    HorizontalAlign2[HorizontalAlign2["CENTER"] = 2] = "CENTER";
    HorizontalAlign2[HorizontalAlign2["RIGHT"] = 4] = "RIGHT";
})(HorizontalAlign || (HorizontalAlign = {}));
(function(VerticalAlign2) {
    VerticalAlign2[VerticalAlign2["TOP"] = 8] = "TOP";
    VerticalAlign2[VerticalAlign2["MIDDLE"] = 16] = "MIDDLE";
    VerticalAlign2[VerticalAlign2["BOTTOM"] = 32] = "BOTTOM";
})(VerticalAlign || (VerticalAlign = {}));
(function(BlendMode2) {
    BlendMode2["SRC_OVER"] = "srcOver";
    BlendMode2["DST_OVER"] = "dstOver";
    BlendMode2["MULTIPLY"] = "multiply";
    BlendMode2["ADD"] = "add";
    BlendMode2["SCREEN"] = "screen";
    BlendMode2["OVERLAY"] = "overlay";
    BlendMode2["DARKEN"] = "darken";
    BlendMode2["LIGHTEN"] = "lighten";
    BlendMode2["HARD_LIGHT"] = "hardLight";
    BlendMode2["DIFFERENCE"] = "difference";
    BlendMode2["EXCLUSION"] = "exclusion";
})(BlendMode || (BlendMode = {}));

}
