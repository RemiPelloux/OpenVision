var __wakaru_require_node_universal_header_cache;
export function require_node_universal_header() {
if (__wakaru_require_node_universal_header_cache) return __wakaru_require_node_universal_header_cache;
var exports2 = {};
__wakaru_require_node_universal_header_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.nodeHeaderToWebHeader = nodeHeaderToWebHeader2;
exports2.webHeaderToNodeHeaders = webHeaderToNodeHeaders2;
function nodeHeaderToWebHeader2(nodeHeaders) {
    const header = new Headers();
    for (const [k2, v2] of Object.entries(nodeHeaders)){
        if (k2.startsWith(":")) {
            continue;
        }
        if (v2 === void 0) {
            continue;
        }
        if (typeof v2 == "string") {
            header.append(k2, v2);
        } else if (typeof v2 == "number") {
            header.append(k2, String(v2));
        } else {
            for (const e of v2){
                header.append(k2, e);
            }
        }
    }
    return header;
}
function webHeaderToNodeHeaders2(headersInit, defaultNodeHeaders) {
    if (headersInit === void 0 && defaultNodeHeaders === void 0) {
        return void 0;
    }
    const o = Object.create(null);
    if (defaultNodeHeaders !== void 0) {
        for (const [key, value] of Object.entries(defaultNodeHeaders)){
            if (Array.isArray(value)) {
                o[key] = value.concat();
            } else if (value !== void 0) {
                o[key] = value;
            }
        }
    }
    if (headersInit !== void 0) {
        if (Array.isArray(headersInit)) {
            for (const [key, value] of headersInit){
                appendWebHeader2(o, key, value);
            }
        } else if ("forEach" in headersInit) {
            if (typeof headersInit.forEach == "function") {
                headersInit.forEach((value, key)=>{
                    appendWebHeader2(o, key, value);
                });
            }
        } else {
            for (const [key, value] of Object.entries(headersInit)){
                appendWebHeader2(o, key, value);
            }
        }
    }
    return o;
}
function appendWebHeader2(o, key, value) {
    key = key.toLowerCase();
    const existing = o[key];
    if (Array.isArray(existing)) {
        existing.push(value);
    } else if (existing === void 0) {
        o[key] = value;
    } else {
        o[key] = [
            existing.toString(),
            value
        ];
    }
}

return exports2;
}
