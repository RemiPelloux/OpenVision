import { require_dispatcher2 } from "./dispatcher.js";
import { require_retry_handler } from "../handler/retry-handler.js";
var __wakaru_require_retry_agent_cache;
export function require_retry_agent() {
if (__wakaru_require_retry_agent_cache) return __wakaru_require_retry_agent_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_retry_agent_cache = module2;
"use strict";
var Dispatcher = require_dispatcher2();
var RetryHandler = require_retry_handler();
var RetryAgent = class extends Dispatcher {
    #agent = null;
    #options = null;
    constructor(agent, options2 = {}){
        super(options2);
        this.#agent = agent;
        this.#options = options2;
    }
    dispatch(opts, handler) {
        const retry2 = new RetryHandler({
            ...opts,
            retryOptions: this.#options
        }, {
            dispatch: this.#agent.dispatch.bind(this.#agent),
            handler
        });
        return this.#agent.dispatch(opts, retry2);
    }
    close() {
        return this.#agent.close();
    }
    destroy() {
        return this.#agent.destroy();
    }
};
module2.exports = RetryAgent;

return module2.exports;
}
