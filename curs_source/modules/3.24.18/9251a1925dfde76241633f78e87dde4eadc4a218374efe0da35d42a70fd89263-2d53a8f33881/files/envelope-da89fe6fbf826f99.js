import { assertReadMaxBytes } from "../../../../../../../../../dist_exports.js";
import { init_code } from "../code.js";
import { init_connect_error } from "../connect-error.js";
import { init_compression } from "./compression.js";
import { init_limit_io } from "./limit-io.js";
var EnvelopeDecoderImpl;
export { EnvelopeDecoderImpl };
var __wakaru_init_envelope_initialized = false;
export function init_envelope() {
if (__wakaru_init_envelope_initialized) return;
__wakaru_init_envelope_initialized = true;
init_connect_error();
init_code();
init_compression();
init_limit_io();
EnvelopeDecoderImpl = class {
    constructor(readMaxBytes){
        this.readMaxBytes = readMaxBytes;
        this.header = new Uint8Array(5);
        this.headerView = new DataView(this.header.buffer);
        this.buf = [];
    }
    get byteLength() {
        return this.buf.reduce((a, b2)=>a + b2.byteLength, 0);
    }
    decode(chunk) {
        this.buf.push(chunk);
        const envs = [];
        for(;;){
            let env = this.pop();
            if (!env) {
                break;
            }
            envs.push(env);
        }
        return envs;
    }
    pop() {
        if (!this.env) {
            this.env = this.head();
            if (!this.env) {
                return void 0;
            }
        }
        if (this.cons(this.env.data)) {
            const env = this.env;
            this.env = void 0;
            return env;
        }
        return void 0;
    }
    head() {
        if (!this.cons(this.header)) {
            return void 0;
        }
        const flags = this.headerView.getUint8(0);
        const length = this.headerView.getUint32(1);
        assertReadMaxBytes(this.readMaxBytes, length, true);
        return {
            flags,
            data: new Uint8Array(length)
        };
    }
    cons(target) {
        const wantLength = target.byteLength;
        if (this.byteLength < wantLength) {
            return false;
        }
        let offset = 0;
        while(offset < wantLength){
            const chunk = this.buf.shift();
            if (chunk.byteLength > wantLength - offset) {
                target.set(chunk.subarray(0, wantLength - offset), offset);
                this.buf.unshift(chunk.subarray(wantLength - offset));
                offset += wantLength - offset;
            } else {
                target.set(chunk, offset);
                offset += chunk.byteLength;
            }
        }
        return true;
    }
};

}
