import { require_constants8 } from "./constants.js";
var __wakaru_require_event_target_cache;
export function require_event_target() {
if (__wakaru_require_event_target_cache) return __wakaru_require_event_target_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_event_target_cache = module2;
"use strict";
var { kForOnEventAttribute, kListener } = require_constants8();
var kCode = Symbol("kCode");
var kData = Symbol("kData");
var kError = Symbol("kError");
var kMessage = Symbol("kMessage");
var kReason = Symbol("kReason");
var kTarget = Symbol("kTarget");
var kType = Symbol("kType");
var kWasClean = Symbol("kWasClean");
var Event2 = class {
    constructor(type2){
        this[kTarget] = null;
        this[kType] = type2;
    }
    get target() {
        return this[kTarget];
    }
    get type() {
        return this[kType];
    }
};
Object.defineProperty(Event2.prototype, "target", {
    enumerable: true
});
Object.defineProperty(Event2.prototype, "type", {
    enumerable: true
});
var CloseEvent = class extends Event2 {
    constructor(type2, options2 = {}){
        super(type2);
        this[kCode] = options2.code === void 0 ? 0 : options2.code;
        this[kReason] = options2.reason === void 0 ? "" : options2.reason;
        this[kWasClean] = options2.wasClean === void 0 ? false : options2.wasClean;
    }
    get code() {
        return this[kCode];
    }
    get reason() {
        return this[kReason];
    }
    get wasClean() {
        return this[kWasClean];
    }
};
Object.defineProperty(CloseEvent.prototype, "code", {
    enumerable: true
});
Object.defineProperty(CloseEvent.prototype, "reason", {
    enumerable: true
});
Object.defineProperty(CloseEvent.prototype, "wasClean", {
    enumerable: true
});
var ErrorEvent2 = class extends Event2 {
    constructor(type2, options2 = {}){
        super(type2);
        this[kError] = options2.error === void 0 ? null : options2.error;
        this[kMessage] = options2.message === void 0 ? "" : options2.message;
    }
    get error() {
        return this[kError];
    }
    get message() {
        return this[kMessage];
    }
};
Object.defineProperty(ErrorEvent2.prototype, "error", {
    enumerable: true
});
Object.defineProperty(ErrorEvent2.prototype, "message", {
    enumerable: true
});
var MessageEvent2 = class extends Event2 {
    constructor(type2, options2 = {}){
        super(type2);
        this[kData] = options2.data === void 0 ? null : options2.data;
    }
    get data() {
        return this[kData];
    }
};
Object.defineProperty(MessageEvent2.prototype, "data", {
    enumerable: true
});
var EventTarget2 = {
    addEventListener (type2, handler, options2 = {}) {
        for (const listener of this.listeners(type2)){
            if (!options2[kForOnEventAttribute] && listener[kListener] === handler && !listener[kForOnEventAttribute]) {
                return;
            }
        }
        let wrapper;
        if (type2 === "message") {
            wrapper = function onMessage(data, isBinary) {
                const event = new MessageEvent2("message", {
                    data: isBinary ? data : data.toString()
                });
                event[kTarget] = this;
                callListener(handler, this, event);
            };
        } else if (type2 === "close") {
            wrapper = function onClose(code, message) {
                const event = new CloseEvent("close", {
                    code,
                    reason: message.toString(),
                    wasClean: this._closeFrameReceived && this._closeFrameSent
                });
                event[kTarget] = this;
                callListener(handler, this, event);
            };
        } else if (type2 === "error") {
            wrapper = function onError(error3) {
                const event = new ErrorEvent2("error", {
                    error: error3,
                    message: error3.message
                });
                event[kTarget] = this;
                callListener(handler, this, event);
            };
        } else if (type2 === "open") {
            wrapper = function onOpen() {
                const event = new Event2("open");
                event[kTarget] = this;
                callListener(handler, this, event);
            };
        } else {
            return;
        }
        wrapper[kForOnEventAttribute] = !!options2[kForOnEventAttribute];
        wrapper[kListener] = handler;
        if (options2.once) {
            this.once(type2, wrapper);
        } else {
            this.on(type2, wrapper);
        }
    },
    removeEventListener (type2, handler) {
        for (const listener of this.listeners(type2)){
            if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
                this.removeListener(type2, listener);
                break;
            }
        }
    }
};
module2.exports = {
    CloseEvent,
    ErrorEvent: ErrorEvent2,
    Event: Event2,
    EventTarget: EventTarget2,
    MessageEvent: MessageEvent2
};
function callListener(listener, thisArg, event) {
    if (typeof listener === "object" && listener.handleEvent) {
        listener.handleEvent.call(listener, event);
    } else {
        listener.call(thisArg, event);
    }
}

return module2.exports;
}
