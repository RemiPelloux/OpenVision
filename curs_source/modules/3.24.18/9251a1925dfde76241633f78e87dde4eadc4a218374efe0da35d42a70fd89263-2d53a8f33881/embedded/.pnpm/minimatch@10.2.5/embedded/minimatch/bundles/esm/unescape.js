var unescape2;
export { unescape2 };
var __wakaru_init_unescape_initialized = false;
export function init_unescape() {
if (__wakaru_init_unescape_initialized) return;
__wakaru_init_unescape_initialized = true;
unescape2 = (s3, { windowsPathsNoEscape = false, magicalBraces = true } = {})=>{
    if (magicalBraces) {
        return windowsPathsNoEscape ? s3.replace(/\[([^/\\])\]/g, "$1") : s3.replace(/((?!\\).|^)\[([^/\\])\]/g, "$1$2").replace(/\\([^/])/g, "$1");
    }
    return windowsPathsNoEscape ? s3.replace(/\[([^/\\{}])\]/g, "$1") : s3.replace(/((?!\\).|^)\[([^/\\{}])\]/g, "$1$2").replace(/\\([^/{}])/g, "$1");
};

}
