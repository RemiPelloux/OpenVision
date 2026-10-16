import { __toESM } from "../../../../../../../../agent-host/dist/storage/sqlite-store.js";
import { wrapZLibErrors } from "../../../../../../../../dashboard_connect_exports.js";
import { init_node_error } from "./node-error.js";
import { init_esm3 } from "../../../../../../_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
var zlib, import_util4, gzip2, gunzip2, brotliCompress2, brotliDecompress2, compressionGzip, compressionBrotli;
export { brotliCompress2, brotliDecompress2, compressionBrotli, compressionGzip, gunzip2, gzip2, import_util4, zlib };
var __wakaru_init_compression2_initialized = false;
export function init_compression2() {
if (__wakaru_init_compression2_initialized) return;
__wakaru_init_compression2_initialized = true;
zlib = __toESM(require("zlib"), 1);
import_util4 = require("util");
init_esm3();
init_node_error();
gzip2 = (0, import_util4.promisify)(zlib.gzip);
gunzip2 = (0, import_util4.promisify)(zlib.gunzip);
brotliCompress2 = (0, import_util4.promisify)(zlib.brotliCompress);
brotliDecompress2 = (0, import_util4.promisify)(zlib.brotliDecompress);
compressionGzip = {
    name: "gzip",
    compress (bytes) {
        return gzip2(bytes, {});
    },
    decompress (bytes, readMaxBytes) {
        if (bytes.length == 0) {
            return Promise.resolve(new Uint8Array(0));
        }
        return wrapZLibErrors(gunzip2(bytes, {
            maxOutputLength: readMaxBytes
        }), readMaxBytes);
    }
};
compressionBrotli = {
    name: "br",
    compress (bytes) {
        return brotliCompress2(bytes, {});
    },
    decompress (bytes, readMaxBytes) {
        if (bytes.length == 0) {
            return Promise.resolve(new Uint8Array(0));
        }
        return wrapZLibErrors(brotliDecompress2(bytes, {
            maxOutputLength: readMaxBytes
        }), readMaxBytes);
    }
};

}
