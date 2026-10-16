import { require_readable2 } from "./readable.js";
import { require_errors2 } from "../core/errors.js";
var __wakaru_require_util10_cache;
export function require_util10() {
if (__wakaru_require_util10_cache) return __wakaru_require_util10_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_util10_cache = module2;
var assert4 = require("node:assert");
var { ResponseStatusCodeError } = require_errors2();
var { chunksDecode } = require_readable2();
var CHUNK_LIMIT = 128 * 1024;
async function getResolveErrorBodyCallback({ callback, body, contentType, statusCode, statusMessage, headers }) {
    assert4(body);
    let chunks = [];
    let length = 0;
    try {
        for await (const chunk of body){
            chunks.push(chunk);
            length += chunk.length;
            if (length > CHUNK_LIMIT) {
                chunks = [];
                length = 0;
                break;
            }
        }
    } catch  {
        chunks = [];
        length = 0;
    }
    const message = `Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ""}`;
    if (statusCode === 204 || !contentType || !length) {
        queueMicrotask(()=>callback(new ResponseStatusCodeError(message, statusCode, headers)));
        return;
    }
    const stackTraceLimit = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    let payload;
    try {
        if (isContentTypeApplicationJson(contentType)) {
            payload = JSON.parse(chunksDecode(chunks, length));
        } else if (isContentTypeText(contentType)) {
            payload = chunksDecode(chunks, length);
        }
    } catch  {} finally{
        Error.stackTraceLimit = stackTraceLimit;
    }
    queueMicrotask(()=>callback(new ResponseStatusCodeError(message, statusCode, headers, payload)));
}
var isContentTypeApplicationJson = (contentType)=>{
    return contentType.length > 15 && contentType[11] === "/" && contentType[0] === "a" && contentType[1] === "p" && contentType[2] === "p" && contentType[3] === "l" && contentType[4] === "i" && contentType[5] === "c" && contentType[6] === "a" && contentType[7] === "t" && contentType[8] === "i" && contentType[9] === "o" && contentType[10] === "n" && contentType[12] === "j" && contentType[13] === "s" && contentType[14] === "o" && contentType[15] === "n";
};
var isContentTypeText = (contentType)=>{
    return contentType.length > 4 && contentType[4] === "/" && contentType[0] === "t" && contentType[1] === "e" && contentType[2] === "x" && contentType[3] === "t";
};
module2.exports = {
    getResolveErrorBodyCallback,
    isContentTypeApplicationJson,
    isContentTypeText
};

return module2.exports;
}
