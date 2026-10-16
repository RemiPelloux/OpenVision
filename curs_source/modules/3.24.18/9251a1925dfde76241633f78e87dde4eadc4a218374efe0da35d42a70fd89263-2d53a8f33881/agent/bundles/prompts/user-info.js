import { init_common12 } from "../actions/common.js";
import { init_meta_agent_notes } from "../actions/meta-agent-notes.js";
import { init_project_workspace_mcp_tools } from "../configs/project-workspace-mcp-tools.js";
import { init_anti_ask_question_copy } from "./anti-ask-question-copy.js";
import { init_automations2 } from "./bugbot/automations.js";
import { init_cloud_agent2 } from "./cloud-agent.js";
import { init_cloud_meta_agent } from "./cloud-meta-agent/index.js";
import { init_composer2_cloud_testing_sections } from "./composer2-cloud-testing-sections.js";
import { init_multitask_mode_user_reminder } from "./multitask-mode-user-reminder.js";
import { init_shared2 } from "./shared.js";
import { init_skill_catalog_budget } from "./skill-catalog-budget.js";
import { init_skill_catalog_path_roots } from "./skill-catalog-path-roots.js";
import { UI_BROWSER_VERIFICATION_USER_RULE, init_ui_browser_verification } from "./ui-browser-verification.js";
import { VEGA_FRONTEND_USER_RULE_INTERVENTION, init_vega_frontend_user_rule } from "./vega-frontend-user-rule.js";
import { init_git_sections } from "../tools/core/shell/prompts/git-sections.js";
import { init_agent_config } from "../utils/agent-config.js";
import { init_common8 } from "../utils/common.js";
import { init_cursor_rule_matching } from "../utils/cursor-rule-matching.js";
import { init_environment_filtering } from "../utils/environment-filtering.js";
import { init_mcp_file_system } from "../utils/mcp-file-system.js";
import { init_mcp_meta_tool } from "../utils/mcp-meta-tool.js";
import { init_prompt_tag_parsing } from "../utils/prompt-tag-parsing.js";
import { init_request_context4 } from "../utils/request-context.js";
import { init_scoped_rule_filtering } from "../utils/scoped-rule-filtering.js";
import { AGENT_STORE_MOUNT_ROOT2 } from "../../../constants/dist/agent-store-ids.js";
import { init_dist2 } from "../../../constants/dist/index.js";
import { UserInfoComponent, buildComposer2CustomUserRuleRealEnvironment, jsx, renderContent, renderMultitaskModeEnterUserReminderInner, stripWhitespace } from "../../../mcp_sandbox_policy_exports.js";
import { init_esm8 } from "../../../node_modules/.pnpm/minimatch@10.2.5/node_modules/minimatch/dist/esm/index.js";
import { init_dist32 } from "../../../prompt-jsx/dist/index.js";
import { init_jsx_runtime } from "../../../prompt-jsx/dist/jsx-runtime.js";
import { init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_cursor_rules_pb } from "../../../proto/dist/generated/agent/v1/cursor_rules_pb.js";
import { init_request_context_exec_pb } from "../../../proto/dist/generated/agent/v1/request_context_exec_pb.js";
import { init_background_composer_pb } from "../../../proto/dist/generated/aiserver/v1/background_composer_pb.js";
import { init_gray_matter } from "../../../utils/dist/gray-matter.js";
import { init_dist3 } from "../../../utils/dist/index.js";
var import_node_path80, SKILL_GLOB_PATTERNS, GIT_STATUS_CHARACTER_LIMIT, REQUEST_CONTEXT_COMPLETENESS_KEYS, SEP3, AGENT_STORE_DYNAMIC_MOUNT_NOTE, CURSOR_WORKTREE_NOTE, NON_PRIMARY_WORKTREE_NOTE, HOME_DIR_WORKTREE_NOTE, COMPOSER2_CUSTOM_USER_RULE_REAL_ENVIRONMENT, MATTERHORN_TRAINING_CUSTOM_USER_RULE_REAL_ENVIRONMENT, COMPOSER2_CUSTOM_USER_RULE_INSTRUCTION_FOLLOWING, MATTERHORN_TRAINING_CUSTOM_USER_RULE_SKILL_AND_MCP_REMINDER, COMPOSER2_CUSTOM_USER_RULE_USER_COMMUNICATION, MATTERHORN_TRAINING_CUSTOM_USER_RULE_USER_COMMUNICATION, COMPOSER2_CUSTOM_USER_RULE_CONVERSATION_INTENT, COMPOSER2_CUSTOM_USER_RULE_CODE_PRINCIPLES, COMPOSER2_CUSTOM_USER_RULES, TAHOMA_USER_RULE_INTERVENTION, CONTRASTIVE_NEGATION_USER_RULE_INTERVENTION, MULTITASK_MODE_ENTER_REMINDER_SENTINEL, COMPOSER2_RULES_PRESENCE_SENTINEL, TAHOMA_USER_RULE_INTERVENTION_SENTINEL, CONTRASTIVE_NEGATION_USER_RULE_INTERVENTION_SENTINEL, VEGA_FRONTEND_USER_RULE_INTERVENTION_SENTINEL, UI_BROWSER_VERIFICATION_USER_RULE_SENTINEL, UserInfo;
export { AGENT_STORE_DYNAMIC_MOUNT_NOTE, COMPOSER2_CUSTOM_USER_RULES, COMPOSER2_CUSTOM_USER_RULE_CODE_PRINCIPLES, COMPOSER2_CUSTOM_USER_RULE_CONVERSATION_INTENT, COMPOSER2_CUSTOM_USER_RULE_INSTRUCTION_FOLLOWING, COMPOSER2_CUSTOM_USER_RULE_REAL_ENVIRONMENT, COMPOSER2_CUSTOM_USER_RULE_USER_COMMUNICATION, COMPOSER2_RULES_PRESENCE_SENTINEL, CONTRASTIVE_NEGATION_USER_RULE_INTERVENTION, CONTRASTIVE_NEGATION_USER_RULE_INTERVENTION_SENTINEL, CURSOR_WORKTREE_NOTE, GIT_STATUS_CHARACTER_LIMIT, HOME_DIR_WORKTREE_NOTE, MATTERHORN_TRAINING_CUSTOM_USER_RULE_REAL_ENVIRONMENT, MATTERHORN_TRAINING_CUSTOM_USER_RULE_SKILL_AND_MCP_REMINDER, MATTERHORN_TRAINING_CUSTOM_USER_RULE_USER_COMMUNICATION, MULTITASK_MODE_ENTER_REMINDER_SENTINEL, NON_PRIMARY_WORKTREE_NOTE, REQUEST_CONTEXT_COMPLETENESS_KEYS, SEP3, SKILL_GLOB_PATTERNS, TAHOMA_USER_RULE_INTERVENTION, TAHOMA_USER_RULE_INTERVENTION_SENTINEL, UI_BROWSER_VERIFICATION_USER_RULE_SENTINEL, UserInfo, VEGA_FRONTEND_USER_RULE_INTERVENTION_SENTINEL, import_node_path80 };
var __wakaru_init_user_info_initialized = false;
export function init_user_info() {
if (__wakaru_init_user_info_initialized) return;
__wakaru_init_user_info_initialized = true;
"use strict";
init_jsx_runtime();
import_node_path80 = require("node:path");
init_dist2();
init_dist32();
init_agent_pb();
init_cursor_rules_pb();
init_request_context_exec_pb();
init_background_composer_pb();
init_dist3();
init_gray_matter();
init_esm8();
init_common12();
init_meta_agent_notes();
init_project_workspace_mcp_tools();
init_git_sections();
init_agent_config();
init_common8();
init_cursor_rule_matching();
init_environment_filtering();
init_mcp_file_system();
init_mcp_meta_tool();
init_prompt_tag_parsing();
init_request_context4();
init_scoped_rule_filtering();
init_anti_ask_question_copy();
init_automations2();
init_cloud_agent2();
init_cloud_meta_agent();
init_composer2_cloud_testing_sections();
init_multitask_mode_user_reminder();
init_shared2();
init_skill_catalog_budget();
init_skill_catalog_path_roots();
init_ui_browser_verification();
init_vega_frontend_user_rule();
SKILL_GLOB_PATTERNS = [
    "**/.cursor/skills/**",
    "**/.cursor/skills-cursor/**",
    "**/.claude/skills/**",
    "**/.codex/skills/**",
    "**/.grok/skills/**",
    "**/.claude/plugins/**",
    "**/.agents/skills/**",
    "**/SKILL.md",
    "**/.cursor/plugins/cache/**/skills/**"
];
GIT_STATUS_CHARACTER_LIMIT = 1e4;
REQUEST_CONTEXT_COMPLETENESS_KEYS = [
    "rules",
    "env",
    "repositoryInfo",
    "customSubagents",
    "agentSkills",
    "gitRepos",
    "gitStatus",
    "mcp",
    "mcpFileSystem"
];
SEP3 = "/";
AGENT_STORE_DYNAMIC_MOUNT_NOTE = `The stores listed are mounted now. A store id you were given (for example by the bot that launched you) opens at ${AGENT_STORE_MOUNT_ROOT2}/<store-id>: it is mounted on first access when you are authorized, and the path does not exist when you are not. A path whose access changed may take up to ten minutes to update.`;
CURSOR_WORKTREE_NOTE = `You are operating in a Cursor worktree, do not edit files outside of it unless explicitly asked to do so by the user.`;
NON_PRIMARY_WORKTREE_NOTE = `If editing a git workspace within your current directory, do not search or edit non-primary worktrees unless the user explicitly requests you to do so.`;
HOME_DIR_WORKTREE_NOTE = `This applies especially to Cursor-managed worktrees in ~/.cursor/worktrees.`;
COMPOSER2_CUSTOM_USER_RULE_REAL_ENVIRONMENT = buildComposer2CustomUserRuleRealEnvironment({
    includeCommandExecutionEnforcement: true,
    includeDateAuthority: true
});
MATTERHORN_TRAINING_CUSTOM_USER_RULE_REAL_ENVIRONMENT = buildComposer2CustomUserRuleRealEnvironment({
    includeCommandExecutionEnforcement: false,
    includeDateAuthority: false
});
COMPOSER2_CUSTOM_USER_RULE_INSTRUCTION_FOLLOWING = `Follow ALL user, tool, system, and skill instructions precisely and completely:
- Think about ALL instructions in user rules, user queries, skills, system reminders, and MCP server/tool descriptions in FULL. Do NOT skip or only partially apply them.
- When a skill, rule, system reminder, or tool description specifies a particular format, output structure, naming convention, or step-by-step workflow, FOLLOW it \u2014 even if you think a different approach might be better.
- Pay special attention to constraints embedded in tool descriptions, skills, and MCP server instructions. These are not suggestions \u2014 they are requirements that govern how you must use each tool/skill.
- Skills are special files/instructions that users create to guide you in completing their tasks \u2014 they provide enormous value; find and use them when they are relevant rather than improvising without them.
- Users provide MCP tools to help you interact with or gather needed context from external sources \u2014 use them extensively when they fit the task.
`;
MATTERHORN_TRAINING_CUSTOM_USER_RULE_SKILL_AND_MCP_REMINDER = `Remember to use skills and MCP tools:
- If there is a <manually_attached_skills> block, read and use the skills, especially if the user references one of the skills via a slash command, like \`/skillName\`. The slash command may also reference a skill in <agent_skills>.
- Always read and remember relevant skill and MCP tool descriptions.
- Prefer using skills and MCP tools over writing scripts.
- Report issues using skills and MCPs to the user.
`;
COMPOSER2_CUSTOM_USER_RULE_USER_COMMUNICATION = `When communicating with the user:
- Use code citation blocks to reference existing code: \`\`\`startLine:endLine:filepath format. Code citations are strictly better than describing code in prose or stringing backticked identifiers together \u2014 they give the user one-click navigation and immediate context.
- Code citation fences (the opening \`\`\`) MUST be on their own line, never prefixed by list markers or other text on the same line. E.g. "- \`\`\`12:34:path" will render incorrectly.
- Inside fenced code blocks and inline backticked text, content is shown literally: do not use HTML character references (e.g. &amp;, &lt;) expecting them to become symbols \u2014 use the actual characters.
- In code citations, it is preferred to skip large irrelevant chunks of code using \`...\`, or pseudocode comments.
- In non-citation code blocks, especially when meant for copy-pasting suggested commands, write full commands \u2014 no \`...\` or other omissions.
- Users prefer markdown links for ease of navigation when referencing web content. When you cite paths or URLs (https://, s3://, file paths, etc.), give the full string; do not shorten or elide prefixes or middle segments for brevity.
- Write like an excellent technical blog post \u2014 precise, well-structured, and clear, in complete sentences. Most responses should be concise and to the point, but the quality of prose should be high. Never use telegraphic shorthand, or sentence fragment chains.
- Same standards for commit and PR descriptions: complete sentences, good grammar, and only relevant detail.
- Prefer simple, accessible language over dense technical jargon. Explain what changed and why in plain language rather than listing identifiers.
- Keep final responses proportional to task complexity. A simple CI fix doesn't need multiple paragraphs.
- Do not overuse bolding or backticks for decoration. Use them very sparingly for emphasis.
- Avoid "\xA7" in user-facing text (these don't render well in the product UI).
- Use mermaid and ascii diagrams to explain complex logic flows and architecture when appropriate \u2014 but not for simple changes.
- Avoid engagement baiting at the end of responses. If there are obvious follow ups, simply ask the user directly if they want those done, but do not force suggestions or follow ups in every response like 'say the word and I'll do X'.
- Mark todo items done as they are completed, and do not leave todos marked as in_progress if they are actually completed.`;
MATTERHORN_TRAINING_CUSTOM_USER_RULE_USER_COMMUNICATION = `When communicating with the user:
- Use high quality prose with complete sentences, proper grammar, correct spelling, and punctuation. Be precise and clear, and ensure that ideas flow from sentence to sentence. Avoid stuttered phrasing, unnatural sentence structures, and shorthand.
- Do not write out comma-separated lists of more than 4 items in prose or parentheticals. When enumerating many items, use bulleted or numbered lists.
- Only use tables to display tabular data for visualization or analysis.
- Emphasize important concepts through word choice rather than bolding terms. Never bold terms in the middle of a sentence. Never bold an entire sentence or paragraph.
- Do not overuse bolding or backticks for decoration. Headings or short lead sentences are viable alternatives to bolding.
- Avoid using tilde to denote approximate numbers because these may be incorrectly parsed as strikeouts. Instead, use the word "approximately" or "about".
- Use code citation blocks to reference existing code: \`\`\`startLine:endLine:filepath format. Code citations are strictly better than describing code in prose or stringing backticked identifiers together \u2014 They give the user one-click navigation and immediate context.
- Prefer citing only the code file and line numbers in the final response instead of displaying the code content.
- Code citation fences (the opening \`\`\`) MUST be on their own line, never prefixed by list markers or other text on the same line. E.g. "- \`\`\`12:34:path" will render incorrectly.
- In code citations, it is preferred to skip large irrelevant chunks of code using \`...\`, or pseudocode comments.
- In non-citation code blocks, especially when meant for copy-pasting suggested commands, write full commands \u2014 Never use \`...\`, \u2026, or other omissions.
- Users prefer markdown links for ease of navigation when referencing web content. When you cite paths or URLs (https://, s3://, file paths, etc.), give the full string; do not shorten or elide prefixes or middle segments for brevity.
- When the user asks for one item per line, use Markdown hard line breaks with two trailing spaces.
- Before running any terminal commands that mutate the environment or long-running jobs, ALWAYS inform the user with a status update before running the command or job.
- Do not include tangential background details in the final response.
- Follow these communication rules by default, but adjust style and verbosity when explicitly requested by the user.`;
COMPOSER2_CUSTOM_USER_RULE_CONVERSATION_INTENT = `Reason about conversation history to understand user intent:
- Think about every user query in light of the full conversation history. The latest message inherits context from prior turns \u2014 e.g. "How does this work?" after discussing edge cases likely means explaining that code's behavior around those edge cases, not a generic overview.
- Identify the user's underlying goal and implicit requirements from the arc of the conversation, not just the literal text of the latest message. Think about what they are trying to accomplish, what constraints they care about, and what they would consider a successful outcome.
- When the user sends a message mid-task, think carefully about whether it's a refinement of the current task or a genuine change of direction or new task. Default to treating it as guidance for the work in progress \u2014 users are more often steering than canceling.`;
COMPOSER2_CUSTOM_USER_RULE_CODE_PRINCIPLES = `**Always follow these principles when writing code** (recall them in your thinking but don't mention them to the user):
1. Minimize scope \u2014 Use the simplest correct diff. Do not add or change unrelated or unrequested code, especially for question-only or review-only tasks. A focused 5-line change that solves the root problem is strictly better than a 100-line diff.
2. Avoid over-engineering - Do not over abstract the code, like adding one or two line helpers that should just be inline. Do not use excessive error handling or fallbacks for edges cases that are impossible or extremely unlikely.
3. Use existing conventions \u2014 Read the surrounding code before writing. Match its naming, types, abstractions, import style, and documentation level. Your additions should read as if written by the same author. Reuse and extend existing functions and components rather than reimplementing similar logic. When no convention exists, follow language and framework best practices.
4. Comments \u2014 Good code should mostly be self-explanatory. Only add comments that explain non-obvious business logic or deep technical details.
5. Useful tests only \u2014 Only add tests if requested or they add meaningful coverage of real behavior. Do not add tests that trivially assert the obvious.`;
COMPOSER2_CUSTOM_USER_RULES = [
    COMPOSER2_CUSTOM_USER_RULE_INSTRUCTION_FOLLOWING,
    COMPOSER2_CUSTOM_USER_RULE_REAL_ENVIRONMENT,
    COMPOSER2_CUSTOM_USER_RULE_USER_COMMUNICATION,
    COMPOSER2_CUSTOM_USER_RULE_CONVERSATION_INTENT,
    COMPOSER2_CUSTOM_USER_RULE_CODE_PRINCIPLES
];
TAHOMA_USER_RULE_INTERVENTION = `
When writing a final response for the user, keep the following communication rules in mind:
- Communicate directly and concisely.
- For long responses, start with a sentence or two summarizing the key finding or verdict without restating the task.
- Use bolding extremely sparingly to draw attention only to what is truly important; never put entire sentences in bold.
- Prefer pointed responses, think about what the user really wants to know and focus on clearly surfacing the information that is needed to satisfy the latest user query. Never mention what won't work or tangential information unrelated to the core answer the user is looking for.
- Only provide thorough detail when requested. Prefer to keep it concise with a sentence or two if possible per point. Only expand into full sections when needed. Don't restate the bottom line in a dedicated section.
`;
CONTRASTIVE_NEGATION_USER_RULE_INTERVENTION = `State points directly in affirmative language. Avoid unnecessary contrastive negation such as \u201CX, not Y,\u201D especially clarifications about alternatives the user did not mention.`;
MULTITASK_MODE_ENTER_REMINDER_SENTINEL = stripWhitespace(renderMultitaskModeEnterUserReminderInner("Task").slice(0, 40));
COMPOSER2_RULES_PRESENCE_SENTINEL = stripWhitespace(COMPOSER2_CUSTOM_USER_RULE_INSTRUCTION_FOLLOWING);
TAHOMA_USER_RULE_INTERVENTION_SENTINEL = stripWhitespace(TAHOMA_USER_RULE_INTERVENTION);
CONTRASTIVE_NEGATION_USER_RULE_INTERVENTION_SENTINEL = stripWhitespace(CONTRASTIVE_NEGATION_USER_RULE_INTERVENTION);
VEGA_FRONTEND_USER_RULE_INTERVENTION_SENTINEL = stripWhitespace(VEGA_FRONTEND_USER_RULE_INTERVENTION);
UI_BROWSER_VERIFICATION_USER_RULE_SENTINEL = stripWhitespace(UI_BROWSER_VERIFICATION_USER_RULE);
UserInfo = (props)=>{
    return renderContent(jsx(UserInfoComponent, {
        props
    }));
};

}
