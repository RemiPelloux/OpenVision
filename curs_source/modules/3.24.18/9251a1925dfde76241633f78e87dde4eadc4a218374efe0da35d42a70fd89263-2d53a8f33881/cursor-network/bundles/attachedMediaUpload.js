var __wakaru_require_attachedMediaUpload_cache;
export function require_attachedMediaUpload() {
if (__wakaru_require_attachedMediaUpload_cache) return __wakaru_require_attachedMediaUpload_cache;
var exports2 = {};
__wakaru_require_attachedMediaUpload_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.uploadToSignedUrl = uploadToSignedUrl;
var node_fs_1 = require("node:fs");
var node_path_1 = require("node:path");
var node_stream_1 = require("node:stream");
function buildPresignedPutHeaders(mimeType, contentLengthBytes) {
    return {
        "Content-Type": mimeType,
        "Content-Length": String(contentLengthBytes)
    };
}
async function getUploadFailure(response) {
    let s3ErrorCode;
    try {
        const responseBodyPreview = (await response.text()).slice(0, 500);
        s3ErrorCode = responseBodyPreview.match(/<Code>([A-Za-z0-9]{1,64})<\/Code>/u)?.[1];
    } catch  {}
    return {
        httpStatus: response.status,
        ...s3ErrorCode === void 0 ? {} : {
            s3ErrorCode
        }
    };
}
async function uploadToSignedUrl(args) {
    const stat24 = await node_fs_1.promises.stat(args.filePath).catch(()=>void 0);
    if (stat24 === void 0) {
        return {
            success: false,
            fallbackUsed: false,
            putFailure: {}
        };
    }
    const requestHeaders = buildPresignedPutHeaders(args.mimeType, stat24.size);
    const readStreamOpts = stat24.size > 0 ? {
        start: 0,
        end: stat24.size - 1
    } : void 0;
    const body = node_stream_1.Readable.toWeb((0, node_fs_1.createReadStream)(args.filePath, readStreamOpts));
    const init = {
        method: "PUT",
        body,
        headers: requestHeaders,
        duplex: "half"
    };
    let putFailure;
    try {
        const response = await fetch(args.putUrl, init);
        if (response.ok) {
            return {
                success: true,
                fallbackUsed: false
            };
        }
        putFailure = await getUploadFailure(response);
    } catch  {
        putFailure = {};
    }
    if (!args.postUrl || !args.postFields) {
        return {
            success: false,
            fallbackUsed: false,
            putFailure
        };
    }
    try {
        const formData = new FormData();
        for (const [name17, value] of Object.entries(args.postFields)){
            formData.append(name17, value);
        }
        formData.append("file", await (0, node_fs_1.openAsBlob)(args.filePath, {
            type: args.mimeType
        }), (0, node_path_1.basename)(args.filePath));
        const response = await fetch(args.postUrl, {
            method: "POST",
            body: formData
        });
        if (response.ok) {
            return {
                success: true,
                fallbackUsed: true,
                putFailure
            };
        }
        return {
            success: false,
            fallbackUsed: true,
            putFailure,
            postFailure: await getUploadFailure(response)
        };
    } catch  {
        return {
            success: false,
            fallbackUsed: true,
            putFailure,
            postFailure: {}
        };
    }
}

return exports2;
}
