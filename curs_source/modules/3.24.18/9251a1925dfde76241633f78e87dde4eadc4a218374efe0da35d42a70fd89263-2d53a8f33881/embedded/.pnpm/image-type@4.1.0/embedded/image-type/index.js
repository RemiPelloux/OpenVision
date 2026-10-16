import { require_file_type } from "../../../file-type@10.11.0/node_modules/file-type/index.js";
var __wakaru_require_image_type_cache;
export function require_image_type() {
if (__wakaru_require_image_type_cache) return __wakaru_require_image_type_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_image_type_cache = module2;
"use strict";
var fileType3 = require_file_type();
var imageExts = new Set([
    "jpg",
    "png",
    "gif",
    "webp",
    "flif",
    "cr2",
    "tif",
    "bmp",
    "jxr",
    "psd",
    "ico",
    "bpg",
    "jp2",
    "jpm",
    "jpx",
    "heic",
    "cur",
    "dcm"
]);
var imageType2 = (input)=>{
    const ret = fileType3(input);
    return imageExts.has(ret && ret.ext) ? ret : null;
};
module2.exports = imageType2;
module2.exports.default = imageType2;
Object.defineProperty(imageType2, "minimumBytes", {
    value: fileType3.minimumBytes
});

return module2.exports;
}
