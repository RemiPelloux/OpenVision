import { mPo } from "./recent-conversation.ts";
import { Fq } from "./tool-names.ts";
import { x } from "./tslib.es6.js";
var IUh, AUh, RUh, DUh, MUh, PUh, vPo, _Po, bPo, yPo, LUh;
export { AUh, DUh, IUh, LUh, MUh, PUh, RUh, _Po, bPo, vPo, yPo };
var __wakaru_NUh_initialized = false;
export function NUh() {
if (__wakaru_NUh_initialized) return;
__wakaru_NUh_initialized = true;
"use strict";
x(), Fq(), mPo(), IUh = "this-chat", AUh = new Set([
    "a",
    "an",
    "the",
    "of",
    "to",
    "for",
    "in",
    "on",
    "at",
    "is",
    "was",
    "what",
    "when",
    "who",
    "did",
    "do",
    "we",
    "i",
    "you",
    "our",
    "my",
    "me",
    "that",
    "just",
    "about",
    "sent",
    "earlier",
    "before"
]), RUh = /last (?:voice )?call|on our last call|when we spoke|on the phone|earlier call|prior call/i, DUh = new Set([
    "last",
    "call",
    "calls",
    "voice",
    "conversation",
    "conversations",
    "topic",
    "topics",
    "phone",
    "spoke"
]), MUh = /our last voice call|nothing in the record is stamped|i'll check that now|i have no record of/i, PUh = new Set([
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
]), vPo = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
], _Po = 864e5, bPo = new Set([
    "year",
    "years",
    "date",
    "dates",
    "history",
    "event",
    "events",
    "discussion",
    "thing",
    "things"
]), yPo = /^\d{4}-\d{2}-\d{2}$/, LUh = 9466848e5;

}
