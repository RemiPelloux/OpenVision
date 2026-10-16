var import_promises32, queues;
export { import_promises32, queues };
var __wakaru_init_mutation_queue_initialized = false;
export function init_mutation_queue() {
if (__wakaru_init_mutation_queue_initialized) return;
__wakaru_init_mutation_queue_initialized = true;
"use strict";
import_promises32 = require("node:fs/promises");
queues = new Map();

}
