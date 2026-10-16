import { SSh } from "./LYd.js";
import { E } from "./tslib.es6.js";
var f3h, v3h, _3h, b3h, y3h, S3h, k3h;
export { S3h, _3h, b3h, f3h, k3h, v3h, y3h };
var __wakaru_ThS_initialized = false;
export function ThS() {
if (__wakaru_ThS_initialized) return;
__wakaru_ThS_initialized = true;
"use strict";
E(), SSh(), f3h = /\[\^[\w-]{1,200}\](?!:)/, v3h = /\[\^[\w-]{1,200}\]:/, _3h = /\r\n|\r/g, b3h = /^\s*$/, y3h = /<\/(\w+)>/, S3h = /<(\w+)[\s>]/, k3h = new Set([
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
]);

}
