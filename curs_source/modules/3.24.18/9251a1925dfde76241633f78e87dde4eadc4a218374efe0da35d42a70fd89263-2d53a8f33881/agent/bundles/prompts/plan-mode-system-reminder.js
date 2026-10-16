import { init_plan_mode_followup_reminder } from "./plan-mode-followup-reminder.js";
import { init_tahoma_plan_commitment } from "./tahoma-plan-commitment.js";
import { init_tool_name } from "../tools/core/create-plan/tool-name.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var META_AGENT_PLAN_MODE_SYSTEM_REMINDER, AFFIRMATIVE_PLAN_LANGUAGE_SENTINEL, MERMAID_SYNTAX_BLOCK;
export { AFFIRMATIVE_PLAN_LANGUAGE_SENTINEL, MERMAID_SYNTAX_BLOCK, META_AGENT_PLAN_MODE_SYSTEM_REMINDER };
var __wakaru_init_plan_mode_system_reminder_initialized = false;
export function init_plan_mode_system_reminder() {
if (__wakaru_init_plan_mode_system_reminder_initialized) return;
__wakaru_init_plan_mode_system_reminder_initialized = true;
"use strict";
init_agent_pb();
init_tool_name();
init_plan_mode_followup_reminder();
init_tahoma_plan_commitment();
META_AGENT_PLAN_MODE_SYSTEM_REMINDER = `<system_reminder>
The user has selected Plan mode. If you create subagents to address the user's request, at least one must have mode=Plan.

Do not execute the generated plan until the user approves it.
</system_reminder>`;
AFFIRMATIVE_PLAN_LANGUAGE_SENTINEL = "Write the plan in affirmative language";
MERMAID_SYNTAX_BLOCK = `
<mermaid_syntax>
When writing mermaid diagrams:
- Do NOT use spaces in node names/IDs. Use camelCase, PascalCase, or underscores instead.
  - Good: \`UserService\`, \`user_service\`, \`userAuth\`
  - Bad: \`User Service\`, \`user auth\`
- When edge labels contain parentheses, brackets, or other special characters, wrap the label in quotes:
  - Good: \`A -->|"O(1) lookup"| B\`
  - Bad: \`A -->|O(1) lookup| B\` (parentheses parsed as node syntax)
- Use double quotes for node labels containing special characters (parentheses, commas, colons):
  - Good: \`A["Process (main)"]\`, \`B["Step 1: Init"]\`
  - Bad: \`A[Process (main)]\` (parentheses parsed as shape syntax)
- Avoid reserved keywords as node IDs: \`end\`, \`subgraph\`, \`graph\`, \`flowchart\`
  - Good: \`endNode[End]\`, \`processEnd[End]\`
  - Bad: \`end[End]\` (conflicts with subgraph syntax)
- For subgraphs, use explicit IDs with labels in brackets: \`subgraph id [Label]\`
  - Good: \`subgraph auth [Authentication Flow]\`
  - Bad: \`subgraph Authentication Flow\` (spaces cause parsing issues)
- Avoid angle brackets and HTML entities in labels - they render as literal text:
  - Good: \`Files[Files Vec]\` or \`Files[FilesTuple]\`
  - Bad: \`Files["Vec&lt;T&gt;"]\`
- Do NOT use explicit colors or styling - the renderer applies theme colors automatically:
  - Bad: \`style A fill:#fff\`, \`classDef myClass fill:white\`, \`A:::someStyle\`
  - These break in dark mode. Let the default theme handle colors.
- Click events are disabled for security - don't use \`click\` syntax
</mermaid_syntax>`;

}
