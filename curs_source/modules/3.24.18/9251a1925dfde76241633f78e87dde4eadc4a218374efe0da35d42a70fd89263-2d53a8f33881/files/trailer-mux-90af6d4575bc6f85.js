var __wakaru_require_trailer_mux_cache;
export function require_trailer_mux() {
if (__wakaru_require_trailer_mux_cache) return __wakaru_require_trailer_mux_cache;
var exports2 = {};
__wakaru_require_trailer_mux_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.trailerDemux = trailerDemux2;
exports2.trailerMux = trailerMux2;
function trailerDemux2(header) {
    const h = new Headers(), t = new Headers();
    header.forEach((value, key)=>{
        if (key.toLowerCase().startsWith("trailer-")) {
            t.append(key.substring(8), value);
        } else {
            h.append(key, value);
        }
    });
    return [
        h,
        t
    ];
}
function trailerMux2(header, trailer) {
    const h = new Headers(header);
    trailer.forEach((value, key)=>{
        h.append(`trailer-${key}`, value);
    });
    return h;
}

return exports2;
}
