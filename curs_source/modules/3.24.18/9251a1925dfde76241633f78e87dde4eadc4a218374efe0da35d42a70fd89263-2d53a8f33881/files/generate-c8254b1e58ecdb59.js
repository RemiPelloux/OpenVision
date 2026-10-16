import { require_defer } from "./defer.js";
import { require_scheduleIterable } from "../scheduled/scheduleIterable.js";
import { require_identity } from "../util/identity.js";
import { require_isScheduler } from "../util/isScheduler.js";
var __wakaru_require_generate_cache;
export function require_generate() {
if (__wakaru_require_generate_cache) return __wakaru_require_generate_cache;
var exports2 = {};
__wakaru_require_generate_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.generate = void 0;
var identity_js_1 = require_identity();
var isScheduler_js_1 = require_isScheduler();
var defer_js_1 = require_defer();
var scheduleIterable_js_1 = require_scheduleIterable();
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
    let resultSelector;
    let initialState;
    if (arguments.length === 1) {
        ({ initialState, condition, iterate, resultSelector = identity_js_1.identity, scheduler } = initialStateOrOptions);
    } else {
        initialState = initialStateOrOptions;
        if (!resultSelectorOrScheduler || (0, isScheduler_js_1.isScheduler)(resultSelectorOrScheduler)) {
            resultSelector = identity_js_1.identity;
            scheduler = resultSelectorOrScheduler;
        } else {
            resultSelector = resultSelectorOrScheduler;
        }
    }
    function* gen() {
        for(let state = initialState; !condition || condition(state); state = iterate(state)){
            yield resultSelector(state);
        }
    }
    return (0, defer_js_1.defer)(scheduler ? ()=>(0, scheduleIterable_js_1.scheduleIterable)(gen(), scheduler) : gen);
}
exports2.generate = generate;

return exports2;
}
