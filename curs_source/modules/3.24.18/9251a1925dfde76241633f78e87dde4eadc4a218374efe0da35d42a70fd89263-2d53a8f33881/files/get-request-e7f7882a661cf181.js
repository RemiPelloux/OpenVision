import { require_cjs2 } from "../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/cjs/index.js";
import { require_headers4 } from "./headers.js";
import { require_version } from "./version.js";
var __wakaru_require_get_request_cache;
export function require_get_request() {
if (__wakaru_require_get_request_cache) return __wakaru_require_get_request_cache;
var exports2 = {};
__wakaru_require_get_request_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.transformConnectPostToGetRequest = transformConnectPostToGetRequest2;
var protobuf_1 = require_cjs2();
var headers_js_1 = require_headers4();
var version_js_1 = require_version();
var contentTypePrefix2 = "application/";
function encodeMessageForUrl2(message, useBase64) {
    if (useBase64) {
        return protobuf_1.protoBase64.enc(message).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    } else {
        return encodeURIComponent(new TextDecoder().decode(message));
    }
}
function transformConnectPostToGetRequest2(request3, message, useBase64) {
    let query = `?connect=v${version_js_1.protocolVersion}`;
    const contentType = request3.header.get(headers_js_1.headerContentType);
    if ((contentType === null || contentType === void 0 ? void 0 : contentType.indexOf(contentTypePrefix2)) === 0) {
        query += "&encoding=" + encodeURIComponent(contentType.slice(contentTypePrefix2.length));
    }
    const compression = request3.header.get(headers_js_1.headerUnaryEncoding);
    if (compression !== null && compression !== "identity") {
        query += "&compression=" + encodeURIComponent(compression);
        useBase64 = true;
    }
    if (useBase64) {
        query += "&base64=1";
    }
    query += "&message=" + encodeMessageForUrl2(message, useBase64);
    const url2 = request3.url + query;
    const header = new Headers(request3.header);
    [
        headers_js_1.headerProtocolVersion,
        headers_js_1.headerContentType,
        headers_js_1.headerUnaryContentLength,
        headers_js_1.headerUnaryEncoding,
        headers_js_1.headerUnaryAcceptEncoding
    ].forEach((h)=>header.delete(h));
    return Object.assign(Object.assign({}, request3), {
        init: Object.assign(Object.assign({}, request3.init), {
            method: "GET"
        }),
        url: url2,
        header
    });
}

return exports2;
}
