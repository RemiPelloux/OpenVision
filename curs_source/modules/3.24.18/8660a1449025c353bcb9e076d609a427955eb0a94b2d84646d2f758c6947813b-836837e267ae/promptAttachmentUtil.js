import { qJ } from "./ImageUtil.js";
import { Ga } from "./Iwo.js";
import { ms } from "./files.js";
import { Lr } from "./resources.js";
import { E } from "./tslib.es6.js";
import { Xo } from "./uuid_2.js";
import { C2 } from "./workspaceProjectPaths.js";
var GPg, qPg, zPg, Qvl, VPg, ZAi;
export { GPg, Qvl, VPg, ZAi, qPg, zPg };
var __wakaru_eIt_initialized = false;
export function eIt() {
if (__wakaru_eIt_initialized) return;
__wakaru_eIt_initialized = true;
"use strict";
E(), Ga(), Lr(), Xo(), ms(), C2(), qJ(), GPg = new Set([
    "md",
    "markdown",
    "txt",
    "csv",
    "json",
    "har",
    "xml",
    "yaml",
    "yml",
    "toml",
    "ini",
    "log"
]), qPg = new Set([
    "text/plain",
    "text/markdown",
    "text/x-markdown",
    "text/csv",
    "application/json",
    "application/har+json",
    "text/xml",
    "application/xml",
    "application/x-yaml",
    "text/yaml"
]), zPg = 15 * 1024 * 1024, Qvl = 10 * 1024 * 1024, VPg = new Set([
    "mp4",
    "mov",
    "webm",
    "mkv",
    "avi",
    "wmv",
    "m4v",
    "mpeg",
    "mpg"
]), ZAi = new Map;

}
