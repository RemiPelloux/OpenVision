import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { require_lib } from "../../node_modules/.pnpm/iconv-lite@0.7.0/node_modules/iconv-lite/lib/index.js";
import { require_jschardet } from "../../node_modules/.pnpm/jschardet@3.1.4/node_modules/jschardet/index.js";
import { init_encoding_browser } from "./encoding-browser.js";
var import_node_buffer, import_promises, import_node_path3, import_node_util, import_iconv_lite, import_jschardet, LineEnding, VIDEO_EXTENSION_LIST, VIDEO_EXTENSIONS, UTF8_DECODER, LATIN1_DECODER, MAX_FILE_ENCODINGS, UTF8_BOM_BYTES, ESCAPE_BYTE, DETECTED_UTF8_ENCODING, _FILE_TO_ENCODING, BINARY_EXTENSIONS, IMAGE_EXTENSIONS;
export { BINARY_EXTENSIONS, DETECTED_UTF8_ENCODING, ESCAPE_BYTE, IMAGE_EXTENSIONS, LATIN1_DECODER, LineEnding, MAX_FILE_ENCODINGS, UTF8_BOM_BYTES, UTF8_DECODER, VIDEO_EXTENSIONS, VIDEO_EXTENSION_LIST, _FILE_TO_ENCODING, import_iconv_lite, import_jschardet, import_node_buffer, import_node_path3, import_node_util, import_promises };
var __wakaru_init_encoding_initialized = false;
export function init_encoding() {
if (__wakaru_init_encoding_initialized) return;
__wakaru_init_encoding_initialized = true;
"use strict";
import_node_buffer = require("node:buffer");
import_promises = require("node:fs/promises");
import_node_path3 = require("node:path");
import_node_util = require("node:util");
import_iconv_lite = __toESM(require_lib(), 1);
import_jschardet = __toESM(require_jschardet(), 1);
init_encoding_browser();
(function(LineEnding2) {
    LineEnding2["CRLF"] = "CRLF";
    LineEnding2["LF"] = "LF";
})(LineEnding || (LineEnding = {}));
VIDEO_EXTENSION_LIST = [
    ".mp4",
    ".webm",
    ".mov",
    ".avi",
    ".mkv",
    ".wmv",
    ".flv",
    ".m4v"
];
VIDEO_EXTENSIONS = new Set(VIDEO_EXTENSION_LIST);
UTF8_DECODER = new import_node_util.TextDecoder("utf-8", {
    fatal: true
});
LATIN1_DECODER = new import_node_util.TextDecoder("latin1");
MAX_FILE_ENCODINGS = 100;
UTF8_BOM_BYTES = Buffer.from([
    239,
    187,
    191
]);
ESCAPE_BYTE = 27;
DETECTED_UTF8_ENCODING = "UTF-8";
_FILE_TO_ENCODING = new Map();
BINARY_EXTENSIONS = new Set([
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".ico",
    ".bmp",
    ".svg",
    ".pdf",
    ".zip",
    ".tar",
    ".gz",
    ".exe",
    ".dll",
    ".so",
    ".dylib",
    ".bin",
    ...VIDEO_EXTENSION_LIST
]);
IMAGE_EXTENSIONS = /\.(png|jpg|jpeg|gif|webp|ico|bmp|svg)$/i;

}
