import { x } from "./tslib.es6.js";
var Ogn, xZr, Jmg, egg, e2c, t2c, n2c, tgg, ngg, igg, rgg, sgg;
export { Jmg, Ogn, e2c, egg, igg, n2c, ngg, rgg, sgg, t2c, tgg, xZr };
var __wakaru_IZr_initialized = false;
export function IZr() {
if (__wakaru_IZr_initialized) return;
__wakaru_IZr_initialized = true;
"use strict";
x(), Ogn = "composerConvHeaders:", xZr = [
    "chats",
    "messages",
    "agentBlobs",
    "agentCheckpoints",
    "agentArtifacts",
    "checkpoints",
    "diffs",
    "cloudAgents",
    "composerIndex",
    "settings",
    "otherKv",
    "sqliteOverhead",
    "wal",
    "sqliteFree"
], Jmg = new Map(xZr.map((e, t)=>[
        e,
        t
    ])), egg = xZr.filter((e)=>e !== "wal" && e !== "sqliteFree" && e !== "sqliteOverhead"), e2c = [
    "cloudAgents",
    "diffs",
    "checkpoints",
    "agentArtifacts",
    "agentCheckpoints"
], t2c = [
    "chats",
    "messages",
    "agentBlobs",
    "otherKv"
], n2c = [
    "settings",
    "composerIndex",
    ...e2c
], tgg = [
    ...n2c,
    ...t2c
], ngg = 3600 * 1e3, igg = 1024 * 1024, rgg = 512 * 1024 * 1024, sgg = 900 * 1e3;

}
