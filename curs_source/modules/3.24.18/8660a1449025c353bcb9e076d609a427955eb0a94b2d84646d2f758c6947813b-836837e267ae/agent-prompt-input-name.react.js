import { D } from "./Iwo.js";
import { Bt } from "./nls.js";
import { jB } from "./projectAgentHeader.js";
import { VEn } from "./sideChatHeader.js";
import { E } from "./tslib.es6.js";
import { createContext as p2s } from "./react-runtime/react/esm-index-production.js";
var NCv, m2s, TQl, EQl, IQl;
export { EQl, IQl, NCv, TQl, m2s };
var __wakaru_Wut_initialized = false;
export function Wut() {
if (__wakaru_Wut_initialized) return;
__wakaru_Wut_initialized = true;
"use strict";
E(), Bt(), jB(), VEn(), NCv = {
    agent: ()=>D("glass.agentPanel.promptInput.ariaLabel", "Prompt"),
    sideChat: ()=>D("glass.agentPanel.promptInput.sideChatAriaLabel", "Side chat prompt"),
    subagent: ()=>D("glass.agentPanel.promptInput.subagentAriaLabel", "Subagent prompt"),
    fullscreen: ()=>D("glass.agentPanel.promptInput.fullscreenAriaLabel", "Fullscreen prompt"),
    designMode: ()=>D("glass.agentPanel.promptInput.designModeAriaLabel", "Design mode prompt")
}, m2s = p2s(0), TQl = p2s(0), EQl = p2s(void 0), IQl = p2s(0);

}
