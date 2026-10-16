import { Mt } from "./index_197.js";
import { Bkp, P9r, Qkp, mwp, swp } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { createElement as tDn } from "./react-runtime/react/esm-index-production.js";
var kff, wff, Cff;
export { Cff, kff, wff };
var __wakaru_gRl_initialized = false;
export function gRl() {
if (__wakaru_gRl_initialized) return;
__wakaru_gRl_initialized = true;
"use strict";
E(), Mt(), kff = 16, wff = "cube-transparent", Cff = [
    {
        matchers: [
            (t)=>t.includes("claude"),
            (t)=>t === "opus" || t.startsWith("opus-"),
            (t)=>t === "sonnet" || t.startsWith("sonnet-"),
            (t)=>t === "haiku" || t.startsWith("haiku-")
        ],
        keywords: [
            "anthropic",
            "claude"
        ],
        iconFactory: (t)=>tDn(Bkp, {
                size: t
            })
    },
    {
        matchers: [
            (t)=>t.includes("gpt"),
            (t)=>t === "o1" || t.startsWith("o1-"),
            (t)=>t === "o3" || t.startsWith("o3-")
        ],
        keywords: [
            "openai",
            "gpt"
        ],
        iconFactory: (t)=>tDn(swp, {
                size: t
            })
    },
    {
        matchers: [
            (t)=>t.includes("gemini")
        ],
        keywords: [
            "google",
            "gemini"
        ],
        iconFactory: (t)=>tDn(Qkp, {
                size: t
            })
    },
    {
        matchers: [
            (t)=>t.includes("cursor"),
            (t)=>t.includes("composer"),
            (t)=>t.startsWith("grok-4.5"),
            (t)=>t.startsWith("grok-4.6")
        ],
        keywords: [
            "cursor"
        ],
        iconFactory: (t)=>tDn(P9r, {
                size: t
            })
    },
    {
        matchers: [
            (t)=>t.includes("grok")
        ],
        keywords: [
            "xai",
            "x.ai",
            "grok"
        ],
        iconFactory: (t)=>tDn(mwp, {
                size: t
            })
    }
];

}
