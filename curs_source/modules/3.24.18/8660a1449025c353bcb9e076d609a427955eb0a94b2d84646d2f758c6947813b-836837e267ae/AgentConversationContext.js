import { cNr } from "./LinkNavigationContext.js";
import { Ddi } from "./MarkdownDefaultsContext.js";
import { fjt, mkt } from "./conversation-density.js";
import { E } from "./tslib.es6.js";
import { createContext as XIS } from "./react-runtime/react/esm-index-production.js";
var cFr;
export { cFr };
var __wakaru_AO_initialized = false;
export function AO() {
if (__wakaru_AO_initialized) return;
__wakaru_AO_initialized = true;
"use strict";
E(), cNr(), Ddi(), fjt(), cFr = XIS({
    conversationDensity: mkt,
    messageLayout: "default"
});

}
