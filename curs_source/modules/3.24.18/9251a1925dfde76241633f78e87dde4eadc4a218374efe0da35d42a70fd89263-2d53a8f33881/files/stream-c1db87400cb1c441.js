import { createParser } from "../../../../../../coerce_exports.js";
import { init_dist17 } from "./index.js";
var EventSourceParserStream;
export { EventSourceParserStream };
var __wakaru_init_stream_initialized = false;
export function init_stream() {
if (__wakaru_init_stream_initialized) return;
__wakaru_init_stream_initialized = true;
init_dist17();
EventSourceParserStream = class extends TransformStream {
    constructor({ onError, onRetry, onComment } = {}){
        let parser;
        super({
            start (controller) {
                parser = createParser({
                    onEvent: (event)=>{
                        controller.enqueue(event);
                    },
                    onError (error3) {
                        onError === "terminate" ? controller.error(error3) : typeof onError == "function" && onError(error3);
                    },
                    onRetry,
                    onComment
                });
            },
            transform (chunk) {
                parser.feed(chunk);
            }
        });
    }
};

}
