import { NCl } from "./channel-platform.ts";
import { mnf } from "./line-plan.ts";
import { v9k } from "./main-agent-context.ts";
import { b9k } from "./main-loop-voice-prompt.ts";
import { DIt } from "./nudge-reply.ts";
import { LIt } from "./session-tools.ts";
import { Hgs } from "./speak-policy.ts";
import { dnf } from "./spoken-name.ts";
import { Nie } from "./tool-names.ts";
import { iTl } from "./tool-prompts.ts";
import { VPn } from "./tool-replies.ts";
import { pnf } from "./topic-shift.ts";
import { E } from "./tslib.es6.js";
import { lTl } from "./voice-loop-instructions.ts";
var __wakaru_y9k_initialized = false;
export function y9k() {
if (__wakaru_y9k_initialized) return;
__wakaru_y9k_initialized = true;
"use strict";
E(), NCl(), mnf(), v9k(), b9k(), DIt(), LIt(), Hgs(), dnf(), Nie(), iTl(), VPn(), pnf(), lTl();

}
