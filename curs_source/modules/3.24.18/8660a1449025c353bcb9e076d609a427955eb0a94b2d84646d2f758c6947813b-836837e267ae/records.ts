import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { IMs } from "./types_4.ts";
import { ze } from "./ze.js";
var pNv, mNv, gNv, fNv, vNv, _Nv, Tic;
export { Tic, _Nv, fNv, gNv, mNv, pNv, vNv };
var __wakaru_bNv_initialized = false;
export function bNv() {
if (__wakaru_bNv_initialized) return;
__wakaru_bNv_initialized = true;
"use strict";
E(), iv(), IMs(), pNv = ze.record(ze.string(), ze.unknown()), mNv = [
    "[Request interrupted by user]",
    "[Request interrupted by user for tool use]",
    "The user doesn't want to take this action right now. STOP what you are doing and wait for the user to tell you how to proceed."
], gNv = [
    "<bash-stdout",
    "<bash-stderr",
    "<local-command-stdout",
    "<local-command-stderr",
    '<channel source="',
    "<teammate-message>",
    "<teammate-message ",
    "<command-name>"
], fNv = [
    "<bash-input>",
    "<command-message>",
    "<user-memory-input>",
    "<task-notification",
    "<mcp-resource-update",
    "<mcp-polling-update",
    "<fork-boilerplate>",
    "<cross-session-message",
    "<local-command-caveat>"
], vNv = [
    "A message arrived from ",
    "Another Claude session sent a message"
], _Nv = /<tick[\s>]/, Tic = new Set([
    "attachment",
    "file-history-snapshot",
    "last-prompt",
    "permission-mode",
    "system"
]);

}
