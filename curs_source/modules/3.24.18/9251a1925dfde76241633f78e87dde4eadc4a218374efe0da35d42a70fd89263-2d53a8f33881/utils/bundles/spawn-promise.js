import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { require_cjs } from "../../node_modules/.pnpm/rxjs@8.0.0-alpha.14/node_modules/rxjs/dist/cjs/index.js";
import { require_operators } from "../../node_modules/.pnpm/rxjs@8.0.0-alpha.14/node_modules/rxjs/dist/cjs/operators/index.js";
import { init_find_executable } from "./find-executable.js";
var import_node_child_process, import_rxjs2, import_operators, SpawnError;
export { SpawnError, import_node_child_process, import_operators, import_rxjs2 };
var __wakaru_init_spawn_promise_initialized = false;
export function init_spawn_promise() {
if (__wakaru_init_spawn_promise_initialized) return;
__wakaru_init_spawn_promise_initialized = true;
"use strict";
import_node_child_process = require("node:child_process");
import_rxjs2 = __toESM(require_cjs(), 1);
import_operators = __toESM(require_operators(), 1);
init_find_executable();
SpawnError = class _SpawnError extends Error {
    constructor(message, exitCode, command, args, stdout, stderr){
        super(message);
        this.name = "SpawnError";
        this.exitCode = exitCode;
        this.code = exitCode;
        this.stdout = stdout;
        this.stderr = stderr;
        this.command = command;
        this.args = args;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, _SpawnError);
        }
    }
};

}
