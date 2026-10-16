var PNGFilterType, PNGColorType;
export { PNGColorType, PNGFilterType };
var __wakaru_init_constants2_initialized = false;
export function init_constants2() {
if (__wakaru_init_constants2_initialized) return;
__wakaru_init_constants2_initialized = true;
(function(PNGFilterType2) {
    PNGFilterType2[PNGFilterType2["AUTO"] = -1] = "AUTO";
    PNGFilterType2[PNGFilterType2["NONE"] = 0] = "NONE";
    PNGFilterType2[PNGFilterType2["SUB"] = 1] = "SUB";
    PNGFilterType2[PNGFilterType2["UP"] = 2] = "UP";
    PNGFilterType2[PNGFilterType2["AVERAGE"] = 3] = "AVERAGE";
    PNGFilterType2[PNGFilterType2["PATH"] = 4] = "PATH";
})(PNGFilterType || (PNGFilterType = {}));
(function(PNGColorType2) {
    PNGColorType2[PNGColorType2["GRAYSCALE"] = 0] = "GRAYSCALE";
    PNGColorType2[PNGColorType2["COLOR"] = 2] = "COLOR";
    PNGColorType2[PNGColorType2["GRAYSCALE_ALPHA"] = 4] = "GRAYSCALE_ALPHA";
    PNGColorType2[PNGColorType2["COLOR_ALPHA"] = 6] = "COLOR_ALPHA";
})(PNGColorType || (PNGColorType = {}));

}
