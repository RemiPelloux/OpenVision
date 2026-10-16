import { vQi } from "./localOpenAIProviderSettings.js";
import { x } from "./tslib.es6.js";
import { Ku } from "./utilities_3.js";
var yQi, T0h, E0h, Q0o;
export { E0h, Q0o, T0h, yQi };
var __wakaru_SQi_initialized = false;
export function SQi() {
if (__wakaru_SQi_initialized) return;
__wakaru_SQi_initialized = true;
"use strict";
x(), Ku(), vQi(), yQi = "https://api.openai.com/v1", T0h = new Map([
    [
        3294798,
        {
            baseUrl: "https://inference.tesla.com",
            headersSpec: "X-Cost-Tags: repo={gitOrgRepo},branch={gitBranch},tool=cursor",
            defaultAgentRunMode: "allowlist_without_sandbox",
            extraText: {
                text: "Find my personal token:",
                link: {
                    label: "https://tokens.bottlerocket.tesla.com/personal-tokens/",
                    url: "https://tokens.bottlerocket.tesla.com/personal-tokens/"
                }
            }
        }
    ]
]), E0h = "Base URL and API Key are required.", Q0o = "Connect Cursor to a compatible LLM Gateway or API when in local mode. Can also set via CURSOR_LOCAL_AGENT_BASE_URL, CURSOR_LOCAL_AGENT_API_KEY, and CURSOR_LOCAL_AGENT_HEADERS.";

}
