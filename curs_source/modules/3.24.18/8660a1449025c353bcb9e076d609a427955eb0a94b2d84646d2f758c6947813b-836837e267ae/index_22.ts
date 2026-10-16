import { zBk } from "./controller.ts";
import { Zif } from "./conversation-search_2.ts";
import { FTl } from "./end-the-call.ts";
import { VBk } from "./package-harness.ts";
import { mrf } from "./ports.ts";
import { Prf } from "./recall-text-messages.ts";
import { xTl } from "./recent-conversation.ts";
import { JBk } from "./rpc-harness.ts";
import { srf } from "./search-conversations.ts";
import { tfs } from "./send-task.ts";
import { BTl } from "./stay-silent.ts";
import { Mrf } from "./tool-definitions.ts";
import { LTl } from "./tool-runner.ts";
import { JPn } from "./tool.ts";
import { E } from "./tslib.es6.js";
import { Orf } from "./wire.ts";
var __wakaru_e8k_initialized = false;
export function e8k() {
if (__wakaru_e8k_initialized) return;
__wakaru_e8k_initialized = true;
E(), zBk(), mrf(), VBk(), JBk(), Zif(), xTl(), JPn(), Mrf(), LTl(), FTl(), Prf(), srf(), tfs(), BTl(), Orf();

}
