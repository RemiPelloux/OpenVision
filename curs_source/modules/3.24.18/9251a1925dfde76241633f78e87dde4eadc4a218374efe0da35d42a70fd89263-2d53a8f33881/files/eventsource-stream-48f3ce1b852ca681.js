import { require_util15 } from "./util.js";
var __wakaru_require_eventsource_stream_cache;
export function require_eventsource_stream() {
if (__wakaru_require_eventsource_stream_cache) return __wakaru_require_eventsource_stream_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_eventsource_stream_cache = module2;
"use strict";
var { Transform: Transform2 } = require("node:stream");
var { isASCIINumber, isValidLastEventId } = require_util15();
var BOM = [
    239,
    187,
    191
];
var LF2 = 10;
var CR2 = 13;
var COLON = 58;
var SPACE2 = 32;
var EventSourceStream = class extends Transform2 {
    state = null;
    checkBOM = true;
    crlfCheck = false;
    eventEndCheck = false;
    buffer = null;
    pos = 0;
    event = {
        data: void 0,
        event: void 0,
        id: void 0,
        retry: void 0
    };
    constructor(options2 = {}){
        options2.readableObjectMode = true;
        super(options2);
        this.state = options2.eventSourceSettings || {};
        if (options2.push) {
            this.push = options2.push;
        }
    }
    _transform(chunk, _encoding, callback) {
        if (chunk.length === 0) {
            callback();
            return;
        }
        if (this.buffer) {
            this.buffer = Buffer.concat([
                this.buffer,
                chunk
            ]);
        } else {
            this.buffer = chunk;
        }
        if (this.checkBOM) {
            switch(this.buffer.length){
                case 1:
                    if (this.buffer[0] === BOM[0]) {
                        callback();
                        return;
                    }
                    this.checkBOM = false;
                    callback();
                    return;
                case 2:
                    if (this.buffer[0] === BOM[0] && this.buffer[1] === BOM[1]) {
                        callback();
                        return;
                    }
                    this.checkBOM = false;
                    break;
                case 3:
                    if (this.buffer[0] === BOM[0] && this.buffer[1] === BOM[1] && this.buffer[2] === BOM[2]) {
                        this.buffer = Buffer.alloc(0);
                        this.checkBOM = false;
                        callback();
                        return;
                    }
                    this.checkBOM = false;
                    break;
                default:
                    if (this.buffer[0] === BOM[0] && this.buffer[1] === BOM[1] && this.buffer[2] === BOM[2]) {
                        this.buffer = this.buffer.subarray(3);
                    }
                    this.checkBOM = false;
                    break;
            }
        }
        while(this.pos < this.buffer.length){
            if (this.eventEndCheck) {
                if (this.crlfCheck) {
                    if (this.buffer[this.pos] === LF2) {
                        this.buffer = this.buffer.subarray(this.pos + 1);
                        this.pos = 0;
                        this.crlfCheck = false;
                        continue;
                    }
                    this.crlfCheck = false;
                }
                if (this.buffer[this.pos] === LF2 || this.buffer[this.pos] === CR2) {
                    if (this.buffer[this.pos] === CR2) {
                        this.crlfCheck = true;
                    }
                    this.buffer = this.buffer.subarray(this.pos + 1);
                    this.pos = 0;
                    if (this.event.data !== void 0 || this.event.event || this.event.id || this.event.retry) {
                        this.processEvent(this.event);
                    }
                    this.clearEvent();
                    continue;
                }
                this.eventEndCheck = false;
                continue;
            }
            if (this.buffer[this.pos] === LF2 || this.buffer[this.pos] === CR2) {
                if (this.buffer[this.pos] === CR2) {
                    this.crlfCheck = true;
                }
                this.parseLine(this.buffer.subarray(0, this.pos), this.event);
                this.buffer = this.buffer.subarray(this.pos + 1);
                this.pos = 0;
                this.eventEndCheck = true;
                continue;
            }
            this.pos++;
        }
        callback();
    }
    parseLine(line, event) {
        if (line.length === 0) {
            return;
        }
        const colonPosition = line.indexOf(COLON);
        if (colonPosition === 0) {
            return;
        }
        let field4 = "";
        let value = "";
        if (colonPosition !== -1) {
            field4 = line.subarray(0, colonPosition).toString("utf8");
            let valueStart = colonPosition + 1;
            if (line[valueStart] === SPACE2) {
                ++valueStart;
            }
            value = line.subarray(valueStart).toString("utf8");
        } else {
            field4 = line.toString("utf8");
            value = "";
        }
        switch(field4){
            case "data":
                if (event[field4] === void 0) {
                    event[field4] = value;
                } else {
                    event[field4] += `
${value}`;
                }
                break;
            case "retry":
                if (isASCIINumber(value)) {
                    event[field4] = value;
                }
                break;
            case "id":
                if (isValidLastEventId(value)) {
                    event[field4] = value;
                }
                break;
            case "event":
                if (value.length > 0) {
                    event[field4] = value;
                }
                break;
        }
    }
    processEvent(event) {
        if (event.retry && isASCIINumber(event.retry)) {
            this.state.reconnectionTime = parseInt(event.retry, 10);
        }
        if (event.id && isValidLastEventId(event.id)) {
            this.state.lastEventId = event.id;
        }
        if (event.data !== void 0) {
            this.push({
                type: event.event || "message",
                options: {
                    data: event.data,
                    lastEventId: this.state.lastEventId,
                    origin: this.state.origin
                }
            });
        }
    }
    clearEvent() {
        this.event = {
            data: void 0,
            event: void 0,
            id: void 0,
            retry: void 0
        };
    }
};
module2.exports = {
    EventSourceStream
};

return module2.exports;
}
