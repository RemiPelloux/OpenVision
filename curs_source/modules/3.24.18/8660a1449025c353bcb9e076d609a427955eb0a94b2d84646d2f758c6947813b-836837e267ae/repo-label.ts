import { E } from "./tslib.es6.js";
var JIo, Lid, Oid;
export { JIo, Lid, Oid };
var __wakaru_ywy_initialized = false;
export function ywy() {
if (__wakaru_ywy_initialized) return;
__wakaru_ywy_initialized = true;
"use strict";
E(), JIo = new Set([
    "github.com",
    "gitlab.com",
    "bitbucket.org",
    "bitbucket.com",
    "codeberg.org",
    "gitea.com",
    "sr.ht"
]), Lid = /^[^@/]+@[^:]+:.+$/, Oid = /^origin(?:-[a-z0-9]+)?\.cursor\.com$/i;

}
