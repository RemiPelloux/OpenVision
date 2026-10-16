var __wakaru_require_timers_cache;
export function require_timers() {
if (__wakaru_require_timers_cache) return __wakaru_require_timers_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_timers_cache = module2;
"use strict";
var fastNow = Date.now();
var fastNowTimeout;
var fastTimers = [];
function onTimeout() {
    fastNow = Date.now();
    let len = fastTimers.length;
    let idx = 0;
    while(idx < len){
        const timer2 = fastTimers[idx];
        if (timer2.state === 0) {
            timer2.state = fastNow + timer2.delay;
        } else if (timer2.state > 0 && fastNow >= timer2.state) {
            timer2.state = -1;
            timer2.callback(timer2.opaque);
        }
        if (timer2.state === -1) {
            timer2.state = -2;
            if (idx !== len - 1) {
                fastTimers[idx] = fastTimers.pop();
            } else {
                fastTimers.pop();
            }
            len -= 1;
        } else {
            idx += 1;
        }
    }
    if (fastTimers.length > 0) {
        refreshTimeout();
    }
}
function refreshTimeout() {
    if (fastNowTimeout && fastNowTimeout.refresh) {
        fastNowTimeout.refresh();
    } else {
        clearTimeout(fastNowTimeout);
        fastNowTimeout = setTimeout(onTimeout, 1e3);
        if (fastNowTimeout.unref) {
            fastNowTimeout.unref();
        }
    }
}
var Timeout = class {
    constructor(callback, delay3, opaque){
        this.callback = callback;
        this.delay = delay3;
        this.opaque = opaque;
        this.state = -2;
        this.refresh();
    }
    refresh() {
        if (this.state === -2) {
            fastTimers.push(this);
            if (!fastNowTimeout || fastTimers.length === 1) {
                refreshTimeout();
            }
        }
        this.state = 0;
    }
    clear() {
        this.state = -1;
    }
};
module2.exports = {
    setTimeout (callback, delay3, opaque) {
        return delay3 < 1e3 ? setTimeout(callback, delay3, opaque) : new Timeout(callback, delay3, opaque);
    },
    clearTimeout (timeout2) {
        if (timeout2 instanceof Timeout) {
            timeout2.clear();
        } else {
            clearTimeout(timeout2);
        }
    }
};

return module2.exports;
}
