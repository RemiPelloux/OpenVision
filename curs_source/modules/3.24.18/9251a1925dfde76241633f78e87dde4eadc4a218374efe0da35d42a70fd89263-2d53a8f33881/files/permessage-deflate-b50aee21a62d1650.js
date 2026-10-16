import { require_errors2 } from "../../core/errors.js";
import { require_util14 } from "./util.js";
var __wakaru_require_permessage_deflate2_cache;
export function require_permessage_deflate2() {
if (__wakaru_require_permessage_deflate2_cache) return __wakaru_require_permessage_deflate2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_permessage_deflate2_cache = module2;
"use strict";
var { createInflateRaw, Z_DEFAULT_WINDOWBITS } = require("node:zlib");
var { isValidClientWindowBits } = require_util14();
var { MessageSizeExceededError } = require_errors2();
var tail = Buffer.from([
    0,
    0,
    255,
    255
]);
var kBuffer = Symbol("kBuffer");
var kLength = Symbol("kLength");
var PerMessageDeflate = class {
    #inflate;
    #options = {};
    #maxPayloadSize = 0;
    constructor(extensions, options2){
        this.#options.serverNoContextTakeover = extensions.has("server_no_context_takeover");
        this.#options.serverMaxWindowBits = extensions.get("server_max_window_bits");
        this.#maxPayloadSize = options2.maxPayloadSize;
    }
    decompress(chunk, fin, callback) {
        if (!this.#inflate) {
            let windowBits = Z_DEFAULT_WINDOWBITS;
            if (this.#options.serverMaxWindowBits) {
                if (!isValidClientWindowBits(this.#options.serverMaxWindowBits)) {
                    callback(new Error("Invalid server_max_window_bits"));
                    return;
                }
                windowBits = Number.parseInt(this.#options.serverMaxWindowBits);
            }
            try {
                this.#inflate = createInflateRaw({
                    windowBits
                });
            } catch (err) {
                callback(err);
                return;
            }
            this.#inflate[kBuffer] = [];
            this.#inflate[kLength] = 0;
            this.#inflate.on("data", (data)=>{
                this.#inflate[kLength] += data.length;
                if (this.#maxPayloadSize > 0 && this.#inflate[kLength] > this.#maxPayloadSize) {
                    callback(new MessageSizeExceededError());
                    this.#inflate.removeAllListeners();
                    this.#inflate = null;
                    return;
                }
                this.#inflate[kBuffer].push(data);
            });
            this.#inflate.on("error", (err)=>{
                this.#inflate = null;
                callback(err);
            });
        }
        this.#inflate.write(chunk);
        if (fin) {
            this.#inflate.write(tail);
        }
        this.#inflate.flush(()=>{
            if (!this.#inflate) {
                return;
            }
            const full = Buffer.concat(this.#inflate[kBuffer], this.#inflate[kLength]);
            this.#inflate[kBuffer].length = 0;
            this.#inflate[kLength] = 0;
            callback(null, full);
        });
    }
};
module2.exports = {
    PerMessageDeflate
};

return module2.exports;
}
