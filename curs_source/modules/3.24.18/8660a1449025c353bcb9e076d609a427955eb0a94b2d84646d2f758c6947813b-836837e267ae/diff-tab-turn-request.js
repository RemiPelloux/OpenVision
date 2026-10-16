import { ju } from "./agent_pb.js";
import { sd } from "./chat_pb.js";
import { tU } from "./composerMessagesHelpers.js";
import { aNi } from "./composerMessagesToolCalls.js";
import { cie } from "./composerNotLoadedError.js";
import { qSi } from "./messageGrouping.js";
import { v1 } from "./store.js";
import { Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { pi } from "./ze.js";
var __wakaru_or__initialized = false;
export function or_() {
if (__wakaru_or__initialized) return;
__wakaru_or__initialized = true;
"use strict";
E(), pi(), v1(), ju(), sd(), Pu(), tU(), aNi(), cie(), qSi();

}
