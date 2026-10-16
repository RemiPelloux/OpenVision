var NO_TOOLS_SECTION;
export { NO_TOOLS_SECTION };
var __wakaru_init_media_subagent_prompt_initialized = false;
export function init_media_subagent_prompt() {
if (__wakaru_init_media_subagent_prompt_initialized) return;
__wakaru_init_media_subagent_prompt_initialized = true;
"use strict";
NO_TOOLS_SECTION = `
## No tools

You have no tools. Respond in plain text only. Do not emit \`<tool_call>\` XML, JSON tool-call payloads, function-call markup, or the name of a tool, even if the request or an earlier message mentions one.

If no video is attached, say so and stop. Do not claim you extracted frames or watched a file you were not given, and do not describe a path that appears only in the request text.
`;

}
