import { E } from "./tslib.es6.js";
var SKf;
export { SKf };
var __wakaru_k9w_initialized = false;
export function k9w() {
if (__wakaru_k9w_initialized) return;
__wakaru_k9w_initialized = true;
"use strict";
E(), SKf = [
    {
        key: "description",
        kind: "string",
        description: "Tells the agent when to use this skill"
    },
    {
        key: "globs",
        kind: "stringArray",
        description: "Attach when files matching these patterns are read"
    },
    {
        key: "disable-model-invocation",
        kind: "boolean",
        description: "Only runs when you invoke it explicitly"
    }
];

}
