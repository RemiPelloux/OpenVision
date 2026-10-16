var escape2;
export { escape2 };
var __wakaru_init_escape_initialized = false;
export function init_escape() {
if (__wakaru_init_escape_initialized) return;
__wakaru_init_escape_initialized = true;
escape2 = (s3, { windowsPathsNoEscape = false, magicalBraces = false } = {})=>{
    if (magicalBraces) {
        return windowsPathsNoEscape ? s3.replace(/[?*()[\]{}]/g, "[$&]") : s3.replace(/[?*()[\]\\{}]/g, "\\$&");
    }
    return windowsPathsNoEscape ? s3.replace(/[?*()[\]]/g, "[$&]") : s3.replace(/[?*()[\]\\]/g, "\\$&");
};

}
