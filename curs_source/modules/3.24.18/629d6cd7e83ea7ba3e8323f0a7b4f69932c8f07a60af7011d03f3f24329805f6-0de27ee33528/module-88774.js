"use strict";
const { createInflateRaw: r, Z_DEFAULT_WINDOWBITS: s } = require(38522), { isValidClientWindowBits: o } = require("./module-79946.js"), { MessageSizeExceededError: n } = require("./module-38238.js"), i = Buffer.from([
    0,
    0,
    255,
    255
]), a = Symbol("kBuffer"), Q = Symbol("kLength");
module.exports = {
    PerMessageDeflate: class {
        #QA;
        #f = {};
        #b = 0;
        constructor(A, e){
            this.#f.serverNoContextTakeover = A.has("server_no_context_takeover"), this.#f.serverMaxWindowBits = A.get("server_max_window_bits"), this.#b = e.maxPayloadSize;
        }
        decompress(A, e, t) {
            if (!this.#QA) {
                let A = s;
                if (this.#f.serverMaxWindowBits) {
                    if (!o(this.#f.serverMaxWindowBits)) return void t(new Error("Invalid server_max_window_bits"));
                    A = Number.parseInt(this.#f.serverMaxWindowBits);
                }
                try {
                    this.#QA = r({
                        windowBits: A
                    });
                } catch (A) {
                    return void t(A);
                }
                this.#QA[a] = [], this.#QA[Q] = 0, this.#QA.on("data", (A)=>{
                    if (this.#QA[Q] += A.length, this.#b > 0 && this.#QA[Q] > this.#b) return t(new n), this.#QA.removeAllListeners(), void (this.#QA = null);
                    this.#QA[a].push(A);
                }), this.#QA.on("error", (A)=>{
                    this.#QA = null, t(A);
                });
            }
            this.#QA.write(A), e && this.#QA.write(i), this.#QA.flush(()=>{
                if (!this.#QA) return;
                const A = Buffer.concat(this.#QA[a], this.#QA[Q]);
                this.#QA[a].length = 0, this.#QA[Q] = 0, t(null, A);
            });
        }
    }
};
