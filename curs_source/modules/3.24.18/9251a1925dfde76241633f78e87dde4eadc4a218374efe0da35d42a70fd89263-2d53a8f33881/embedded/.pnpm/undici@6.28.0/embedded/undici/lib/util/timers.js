var __wakaru_require_timers2_cache;
export function require_timers2() {
if (__wakaru_require_timers2_cache) return __wakaru_require_timers2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_timers2_cache = module2;
"use strict";
var fastNow = 0;
var RESOLUTION_MS = 1e3;
var TICK_MS = (RESOLUTION_MS >> 1) - 1;
var fastNowTimeout;
var kFastTimer = Symbol("kFastTimer");
var fastTimers = [];
var NOT_IN_LIST = -2;
var TO_BE_CLEARED = -1;
var PENDING = 0;
var ACTIVE = 1;
function onTick() {
    fastNow += TICK_MS;
    let idx = 0;
    let len = fastTimers.length;
    while(idx < len){
        const timer2 = fastTimers[idx];
        if (timer2._state === PENDING) {
            timer2._idleStart = fastNow - TICK_MS;
            timer2._state = ACTIVE;
        } else if (timer2._state === ACTIVE && fastNow >= timer2._idleStart + timer2._idleTimeout) {
            timer2._state = TO_BE_CLEARED;
            timer2._idleStart = -1;
            timer2._onTimeout(timer2._timerArg);
        }
        if (timer2._state === TO_BE_CLEARED) {
            timer2._state = NOT_IN_LIST;
            if (--len !== 0) {
                fastTimers[idx] = fastTimers[len];
            }
        } else {
            ++idx;
        }
    }
    fastTimers.length = len;
    if (fastTimers.length !== 0) {
        refreshTimeout();
    }
}
function refreshTimeout() {
    if (fastNowTimeout) {
        fastNowTimeout.refresh();
    } else {
        clearTimeout(fastNowTimeout);
        fastNowTimeout = setTimeout(onTick, TICK_MS);
        if (fastNowTimeout.unref) {
            fastNowTimeout.unref();
        }
    }
}
var FastTimer = class {
    [kFastTimer] = true;
    _state = NOT_IN_LIST;
    _idleTimeout = -1;
    _idleStart = -1;
    _onTimeout;
    _timerArg;
    constructor(callback, delay3, arg){
        this._onTimeout = callback;
        this._idleTimeout = delay3;
        this._timerArg = arg;
        this.refresh();
    }
    refresh() {
        if (this._state === NOT_IN_LIST) {
            fastTimers.push(this);
        }
        if (!fastNowTimeout || fastTimers.length === 1) {
            refreshTimeout();
        }
        this._state = PENDING;
    }
    clear() {
        this._state = TO_BE_CLEARED;
        this._idleStart = -1;
    }
};
module2.exports = {
    setTimeout (callback, delay3, arg) {
        return delay3 <= RESOLUTION_MS ? setTimeout(callback, delay3, arg) : new FastTimer(callback, delay3, arg);
    },
    clearTimeout (timeout2) {
        if (timeout2[kFastTimer]) {
            timeout2.clear();
        } else {
            clearTimeout(timeout2);
        }
    },
    setFastTimeout (callback, delay3, arg) {
        return new FastTimer(callback, delay3, arg);
    },
    clearFastTimeout (timeout2) {
        timeout2.clear();
    },
    now () {
        return fastNow;
    },
    tick (delay3 = 0) {
        fastNow += delay3 - RESOLUTION_MS + 1;
        onTick();
        onTick();
    },
    reset () {
        fastNow = 0;
        fastTimers.length = 0;
        clearTimeout(fastNowTimeout);
        fastNowTimeout = null;
    },
    kFastTimer
};

return module2.exports;
}
