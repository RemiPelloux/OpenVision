import { require_fixed_queue2 } from "../../dispatcher/fixed-queue.js";
import { require_constants13 } from "./constants.js";
import { require_frame2 } from "./frame.js";
var __wakaru_require_sender2_cache;
export function require_sender2() {
if (__wakaru_require_sender2_cache) return __wakaru_require_sender2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_sender2_cache = module2;
"use strict";
var { WebsocketFrameSend } = require_frame2();
var { opcodes, sendHints } = require_constants13();
var FixedQueue2 = require_fixed_queue2();
var FastBuffer = Buffer[Symbol.species];
var SendQueue = class {
    #queue = new FixedQueue2();
    #running = false;
    #socket;
    constructor(socket){
        this.#socket = socket;
    }
    add(item, cb, hint) {
        if (hint !== sendHints.blob) {
            const frame = createFrame(item, hint);
            if (!this.#running) {
                this.#socket.write(frame, cb);
            } else {
                const node2 = {
                    promise: null,
                    callback: cb,
                    frame
                };
                this.#queue.push(node2);
            }
            return;
        }
        const node = {
            promise: item.arrayBuffer().then((ab)=>{
                node.promise = null;
                node.frame = createFrame(ab, hint);
            }),
            callback: cb,
            frame: null
        };
        this.#queue.push(node);
        if (!this.#running) {
            this.#run();
        }
    }
    async #run() {
        this.#running = true;
        const queue = this.#queue;
        while(!queue.isEmpty()){
            const node = queue.shift();
            if (node.promise !== null) {
                await node.promise;
            }
            this.#socket.write(node.frame, node.callback);
            node.callback = node.frame = null;
        }
        this.#running = false;
    }
};
function createFrame(data, hint) {
    return new WebsocketFrameSend(toBuffer2(data, hint)).createFrame(hint === sendHints.string ? opcodes.TEXT : opcodes.BINARY);
}
function toBuffer2(data, hint) {
    switch(hint){
        case sendHints.string:
            return Buffer.from(data);
        case sendHints.arrayBuffer:
        case sendHints.blob:
            return new FastBuffer(data);
        case sendHints.typedArray:
            return new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
    }
}
module2.exports = {
    SendQueue
};

return module2.exports;
}
