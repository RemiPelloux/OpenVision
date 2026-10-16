var HeaderTypes, header_types_default;
export { HeaderTypes, header_types_default };
var __wakaru_init_header_types_initialized = false;
export function init_header_types() {
if (__wakaru_init_header_types_initialized) return;
__wakaru_init_header_types_initialized = true;
(function(HeaderTypes2) {
    HeaderTypes2[HeaderTypes2["BITMAP_INFO_HEADER"] = 40] = "BITMAP_INFO_HEADER";
    HeaderTypes2[HeaderTypes2["BITMAP_V2_INFO_HEADER"] = 52] = "BITMAP_V2_INFO_HEADER";
    HeaderTypes2[HeaderTypes2["BITMAP_V3_INFO_HEADER"] = 56] = "BITMAP_V3_INFO_HEADER";
    HeaderTypes2[HeaderTypes2["BITMAP_V4_HEADER"] = 108] = "BITMAP_V4_HEADER";
    HeaderTypes2[HeaderTypes2["BITMAP_V5_HEADER"] = 124] = "BITMAP_V5_HEADER";
})(HeaderTypes || (HeaderTypes = {}));
header_types_default = HeaderTypes;

}
