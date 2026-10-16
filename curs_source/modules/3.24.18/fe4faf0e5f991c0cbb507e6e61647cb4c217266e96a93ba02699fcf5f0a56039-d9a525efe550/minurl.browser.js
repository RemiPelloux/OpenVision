import { Hhr, wMe } from "./minurl.shared.js";
import { i } from "./plugin-brand-icon.js";
function Zhr(r) {
    if (typeof r == "string") r = new URL(r);
    else if (!wMe(r)) {
        const e = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + r + "`");
        throw e.code = "ERR_INVALID_ARG_TYPE", e;
    }
    if (r.protocol !== "file:") {
        const e = new TypeError("The URL must be of scheme file");
        throw e.code = "ERR_INVALID_URL_SCHEME", e;
    }
    return Vhr(r);
}
function Vhr(r) {
    if (r.hostname !== "") {
        const s = new TypeError('File URL host must be "localhost" or empty on darwin');
        throw s.code = "ERR_INVALID_FILE_URL_HOST", s;
    }
    const e = r.pathname;
    let a = -1;
    for(; ++a < e.length;)if (e.codePointAt(a) === 37 && e.codePointAt(a + 1) === 50) {
        const s = e.codePointAt(a + 2);
        if (s === 70 || s === 102) {
            const l = new TypeError("File URL path must not include encoded / characters");
            throw l.code = "ERR_INVALID_FILE_URL_PATH", l;
        }
    }
    return decodeURIComponent(e);
}
export { Vhr, Zhr };
var __wakaru_C4i_initialized = false;
export function C4i() {
if (__wakaru_C4i_initialized) return;
__wakaru_C4i_initialized = true;
Hhr(), Hhr(), i(Zhr, "urlToPath"), i(Vhr, "getPathFromURLPosix");

}
