var __wakaru_require_array_queue_cache;
export function require_array_queue() {
if (__wakaru_require_array_queue_cache) return __wakaru_require_array_queue_cache;
var exports2 = {};
__wakaru_require_array_queue_cache = exports2;
"use strict";
var __importDefault = exports2 && exports2.__importDefault || function(mod2) {
    return mod2 && mod2.__esModule ? mod2 : {
        "default": mod2
    };
};
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.ArrayTaskQueue = void 0;
var node_assert_1 = __importDefault(require("node:assert"));
var ArrayTaskQueue2 = class {
    constructor(){
        this.tasks = [];
    }
    get size() {
        return this.tasks.length;
    }
    shift() {
        var _a18;
        return (_a18 = this.tasks.shift()) !== null && _a18 !== void 0 ? _a18 : null;
    }
    push(task) {
        this.tasks.push(task);
    }
    remove(task) {
        const index = this.tasks.indexOf(task);
        node_assert_1.default.notStrictEqual(index, -1);
        this.tasks.splice(index, 1);
    }
};
exports2.ArrayTaskQueue = ArrayTaskQueue2;

return exports2;
}
