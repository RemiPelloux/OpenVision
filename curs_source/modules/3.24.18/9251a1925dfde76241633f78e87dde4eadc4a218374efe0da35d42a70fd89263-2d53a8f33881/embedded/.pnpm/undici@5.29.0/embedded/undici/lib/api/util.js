import { require_errors } from "../core/errors.js";
import { require_util } from "../core/util.js";
var __wakaru_require_util3_cache;
export function require_util3() {
if (__wakaru_require_util3_cache) return __wakaru_require_util3_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_util3_cache = module2;
var assert4 = require("assert");
var { ResponseStatusCodeError } = require_errors();
var { toUSVString } = require_util();
async function getResolveErrorBodyCallback({ callback, body, contentType, statusCode, statusMessage, headers }) {
    assert4(body);
    let chunks = [];
    let limit = 0;
    for await (const chunk of body){
        chunks.push(chunk);
        limit += chunk.length;
        if (limit > 128 * 1024) {
            chunks = null;
            break;
        }
    }
    if (statusCode === 204 || !contentType || !chunks) {
        process.nextTick(callback, new ResponseStatusCodeError(`Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ""}`, statusCode, headers));
        return;
    }
    try {
        if (contentType.startsWith("application/json")) {
            const payload = JSON.parse(toUSVString(Buffer.concat(chunks)));
            process.nextTick(callback, new ResponseStatusCodeError(`Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ""}`, statusCode, headers, payload));
            return;
        }
        if (contentType.startsWith("text/")) {
            const payload = toUSVString(Buffer.concat(chunks));
            process.nextTick(callback, new ResponseStatusCodeError(`Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ""}`, statusCode, headers, payload));
            return;
        }
    } catch (err) {}
    process.nextTick(callback, new ResponseStatusCodeError(`Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ""}`, statusCode, headers));
}
module2.exports = {
    getResolveErrorBodyCallback
};

return module2.exports;
}
