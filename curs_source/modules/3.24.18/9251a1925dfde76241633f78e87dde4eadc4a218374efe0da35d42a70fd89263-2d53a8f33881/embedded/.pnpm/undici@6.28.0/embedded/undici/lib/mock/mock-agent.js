import { require_errors2 } from "../core/errors.js";
import { require_symbols6 } from "../core/symbols.js";
import { require_agent2 } from "../dispatcher/agent.js";
import { require_dispatcher2 } from "../dispatcher/dispatcher.js";
import { require_mock_client2 } from "./mock-client.js";
import { require_mock_pool2 } from "./mock-pool.js";
import { require_mock_symbols2 } from "./mock-symbols.js";
import { require_mock_utils2 } from "./mock-utils.js";
import { require_pending_interceptors_formatter2 } from "./pending-interceptors-formatter.js";
import { require_pluralizer2 } from "./pluralizer.js";
var __wakaru_require_mock_agent2_cache;
export function require_mock_agent2() {
if (__wakaru_require_mock_agent2_cache) return __wakaru_require_mock_agent2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_mock_agent2_cache = module2;
"use strict";
var { kClients } = require_symbols6();
var Agent = require_agent2();
var { kAgent, kMockAgentSet, kMockAgentGet, kDispatches, kIsMockActive, kNetConnect, kGetNetConnect, kOptions, kFactory } = require_mock_symbols2();
var MockClient = require_mock_client2();
var MockPool = require_mock_pool2();
var { matchValue, buildMockOptions } = require_mock_utils2();
var { InvalidArgumentError: InvalidArgumentError3, UndiciError } = require_errors2();
var Dispatcher = require_dispatcher2();
var Pluralizer = require_pluralizer2();
var PendingInterceptorsFormatter = require_pending_interceptors_formatter2();
var MockAgent = class extends Dispatcher {
    constructor(opts){
        super(opts);
        this[kNetConnect] = true;
        this[kIsMockActive] = true;
        if (opts?.agent && typeof opts.agent.dispatch !== "function") {
            throw new InvalidArgumentError3("Argument opts.agent must implement Agent");
        }
        const agent = opts?.agent ? opts.agent : new Agent(opts);
        this[kAgent] = agent;
        this[kClients] = agent[kClients];
        this[kOptions] = buildMockOptions(opts);
    }
    get(origin) {
        let dispatcher = this[kMockAgentGet](origin);
        if (!dispatcher) {
            dispatcher = this[kFactory](origin);
            this[kMockAgentSet](origin, dispatcher);
        }
        return dispatcher;
    }
    dispatch(opts, handler) {
        this.get(opts.origin);
        return this[kAgent].dispatch(opts, handler);
    }
    async close() {
        await this[kAgent].close();
        this[kClients].clear();
    }
    deactivate() {
        this[kIsMockActive] = false;
    }
    activate() {
        this[kIsMockActive] = true;
    }
    enableNetConnect(matcher) {
        if (typeof matcher === "string" || typeof matcher === "function" || matcher instanceof RegExp) {
            if (Array.isArray(this[kNetConnect])) {
                this[kNetConnect].push(matcher);
            } else {
                this[kNetConnect] = [
                    matcher
                ];
            }
        } else if (typeof matcher === "undefined") {
            this[kNetConnect] = true;
        } else {
            throw new InvalidArgumentError3("Unsupported matcher. Must be one of String|Function|RegExp.");
        }
    }
    disableNetConnect() {
        this[kNetConnect] = false;
    }
    get isMockActive() {
        return this[kIsMockActive];
    }
    [kMockAgentSet](origin, dispatcher) {
        this[kClients].set(origin, dispatcher);
    }
    [kFactory](origin) {
        const mockOptions = Object.assign({
            agent: this
        }, this[kOptions]);
        return this[kOptions] && this[kOptions].connections === 1 ? new MockClient(origin, mockOptions) : new MockPool(origin, mockOptions);
    }
    [kMockAgentGet](origin) {
        const client = this[kClients].get(origin);
        if (client) {
            return client;
        }
        if (typeof origin !== "string") {
            const dispatcher = this[kFactory]("http://localhost:9999");
            this[kMockAgentSet](origin, dispatcher);
            return dispatcher;
        }
        for (const [keyMatcher, nonExplicitDispatcher] of Array.from(this[kClients])){
            if (nonExplicitDispatcher && typeof keyMatcher !== "string" && matchValue(keyMatcher, origin)) {
                const dispatcher = this[kFactory](origin);
                this[kMockAgentSet](origin, dispatcher);
                dispatcher[kDispatches] = nonExplicitDispatcher[kDispatches];
                return dispatcher;
            }
        }
    }
    [kGetNetConnect]() {
        return this[kNetConnect];
    }
    pendingInterceptors() {
        const mockAgentClients = this[kClients];
        return Array.from(mockAgentClients.entries()).flatMap(([origin, scope])=>scope[kDispatches].map((dispatch)=>({
                    ...dispatch,
                    origin
                }))).filter(({ pending })=>pending);
    }
    assertNoPendingInterceptors({ pendingInterceptorsFormatter = new PendingInterceptorsFormatter() } = {}) {
        const pending = this.pendingInterceptors();
        if (pending.length === 0) {
            return;
        }
        const pluralizer = new Pluralizer("interceptor", "interceptors").pluralize(pending.length);
        throw new UndiciError(`
${pluralizer.count} ${pluralizer.noun} ${pluralizer.is} pending:

${pendingInterceptorsFormatter.format(pending)}
`.trim());
    }
};
module2.exports = MockAgent;

return module2.exports;
}
