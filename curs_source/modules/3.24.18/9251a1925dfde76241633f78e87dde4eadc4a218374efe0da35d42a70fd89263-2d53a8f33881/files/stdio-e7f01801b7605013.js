import { deserializeMessage } from "../../../../../../../../../coerce_exports.js";
import { init_types8 } from "../types.js";
var ReadBuffer;
export { ReadBuffer };
var __wakaru_init_stdio_initialized = false;
export function init_stdio() {
if (__wakaru_init_stdio_initialized) return;
__wakaru_init_stdio_initialized = true;
init_types8();
ReadBuffer = class {
    append(chunk) {
        this._buffer = this._buffer ? Buffer.concat([
            this._buffer,
            chunk
        ]) : chunk;
    }
    readMessage() {
        if (!this._buffer) {
            return null;
        }
        const index = this._buffer.indexOf("\n");
        if (index === -1) {
            return null;
        }
        const line = this._buffer.toString("utf8", 0, index).replace(/\r$/, "");
        this._buffer = this._buffer.subarray(index + 1);
        return deserializeMessage(line);
    }
    clear() {
        this._buffer = void 0;
    }
};

}
