import { Vss } from "./localOpenAIProviderSettings.js";
import { E } from "./tslib.es6.js";
import { wu } from "./utilities_3.js";
var vAn, Gug, qug, Qss;
export { Gug, Qss, qug, vAn };
var __wakaru_zEi_initialized = false;
export function zEi() {
if (__wakaru_zEi_initialized) return;
__wakaru_zEi_initialized = true;
"use strict";
E(), wu(), Vss(), vAn = "https://api.openai.com/v1", Gug = new Map([
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
]), qug = "Base URL and API Key are required.", Qss = "Connect Cursor to a compatible LLM Gateway or API when in local mode. Can also set via CURSOR_LOCAL_AGENT_BASE_URL, CURSOR_LOCAL_AGENT_API_KEY, and CURSOR_LOCAL_AGENT_HEADERS.";

}
