var __wakaru_require_trailer_cache;
export function require_trailer() {
if (__wakaru_require_trailer_cache) return __wakaru_require_trailer_cache;
var exports2 = {};
__wakaru_require_trailer_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.trailerFlag = void 0;
exports2.trailerParse = trailerParse2;
exports2.trailerSerialize = trailerSerialize2;
exports2.createTrailerSerialization = createTrailerSerialization2;
exports2.trailerFlag = 128;
function trailerParse2(data) {
    const headers = new Headers();
    const lines2 = new TextDecoder().decode(data).split("\r\n");
    for (const line of lines2){
        if (line === "") {
            continue;
        }
        const i = line.indexOf(":");
        if (i > 0) {
            const name17 = line.substring(0, i).trim();
            const value = line.substring(i + 1).trim();
            headers.append(name17, value);
        }
    }
    return headers;
}
function trailerSerialize2(trailer) {
    const lines2 = [];
    trailer.forEach((value, key)=>{
        lines2.push(`${key}: ${value}\r
`);
    });
    return new TextEncoder().encode(lines2.join(""));
}
function createTrailerSerialization2() {
    return {
        serialize: trailerSerialize2,
        parse: trailerParse2
    };
}

return exports2;
}
