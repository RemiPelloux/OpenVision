import { init_dist8 } from "../../agent-exec/dist/index.js";
import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { init_dist5 } from "../../agent-kv/dist/index.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_attached_media } from "./attached-media.js";
import { init_git_commit_processing } from "./git-commit-processing.js";
import { init_git_diff_processing } from "./git-diff-processing.js";
import { init_git_pr_processing } from "./git-pr-processing.js";
import { init_simulated_message_prompts } from "./simulated-message-prompts.js";
import { init_common9 } from "./tools/common.js";
import { init_formatting } from "./tools/core/formatting.js";
import { init_formatters } from "./tools/core/ls/formatters.js";
import { init_image_utils } from "./tools/core/read/image-utils.js";
import { init_formatters2 } from "./tools/core/shell/formatters.js";
import { init_subagent_config } from "./tools/core/subagent/subagent-config.js";
import { init_common8 } from "./utils/common.js";
import { init_event_tracking } from "./utils/event-tracking.js";
import { init_slack_sender_line } from "./utils/slack-sender-line.js";
import { init_dist } from "../../context/dist/index.js";
import { createHistogram } from "../../dist_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
import { init_selected_context_pb } from "../../proto/dist/generated/agent/v1/selected_context_pb.js";
import { init_write_exec_pb } from "../../proto/dist/generated/agent/v1/write_exec_pb.js";
import { init_gray_matter } from "../../utils/dist/gray-matter.js";
import { init_dist3 } from "../../utils/dist/index.js";
var import_node_crypto29, import_node_path77, import_node_url5, logger63, enrichContextDuration, enrichContextExternalLinksDuration, enrichContextDocumentationDuration, enrichContextBlobStoreDuration, enrichContextActiveTaskCount, blobHydrationDuration, invocationContextDuration, processSelectedContextDuration, postEnrichmentAssemblyDuration, MAX_RULE_LENGTH, EXTERNAL_LINK_ENRICHMENT_MAX_CONCURRENCY, EXTERNAL_LINK_INLINE_LIMIT, EXTERNAL_LINK_CONTENT_TRUNCATION_LIMIT, CODE_SELECTION_INLINE_LIMIT, CUSTOM_MODE_ID_PREFIX, UNHYDRATED_CUSTOM_MODE_SOURCE_PATH_PREFIX;
export { CODE_SELECTION_INLINE_LIMIT, CUSTOM_MODE_ID_PREFIX, EXTERNAL_LINK_CONTENT_TRUNCATION_LIMIT, EXTERNAL_LINK_ENRICHMENT_MAX_CONCURRENCY, EXTERNAL_LINK_INLINE_LIMIT, MAX_RULE_LENGTH, UNHYDRATED_CUSTOM_MODE_SOURCE_PATH_PREFIX, blobHydrationDuration, enrichContextActiveTaskCount, enrichContextBlobStoreDuration, enrichContextDocumentationDuration, enrichContextDuration, enrichContextExternalLinksDuration, import_node_crypto29, import_node_path77, import_node_url5, invocationContextDuration, logger63, postEnrichmentAssemblyDuration, processSelectedContextDuration };
var __wakaru_init_context_processing_initialized = false;
export function init_context_processing() {
if (__wakaru_init_context_processing_initialized) return;
__wakaru_init_context_processing_initialized = true;
"use strict";
import_node_crypto29 = require("node:crypto");
import_node_path77 = __toESM(require("node:path"), 1);
import_node_url5 = require("node:url");
init_dist8();
init_dist5();
init_dist();
init_dist4();
init_selected_context_pb();
init_write_exec_pb();
init_dist3();
init_gray_matter();
init_attached_media();
init_git_commit_processing();
init_git_diff_processing();
init_git_pr_processing();
init_simulated_message_prompts();
init_common9();
init_formatting();
init_formatters();
init_image_utils();
init_formatters2();
init_subagent_config();
init_common8();
init_event_tracking();
init_slack_sender_line();
init_slack_sender_line();
logger63 = createLogger("@anysphere/agent/context-processing");
enrichContextDuration = createHistogram("agent.ttft.enrichContextMs", {
    description: "Time for the parallelizable context enrichment tasks in processSelectedContext (external links, documentation, PR hydration, etc.)"
});
enrichContextExternalLinksDuration = createHistogram("agent.ttft.enrichContext.externalLinksMs", {
    description: "Time for the external links enrichment sub-task",
    labelNames: [
        "hasWork"
    ]
});
enrichContextDocumentationDuration = createHistogram("agent.ttft.enrichContext.documentationMs", {
    description: "Time for the documentation hydration sub-task",
    labelNames: [
        "hasWork"
    ]
});
enrichContextBlobStoreDuration = createHistogram("agent.ttft.enrichContext.blobStoreMs", {
    description: "Time for the blob store hydration sub-task (PRs, diffs, extra context)",
    labelNames: [
        "hasWork"
    ]
});
enrichContextActiveTaskCount = createHistogram("agent.ttft.enrichContext.activeTaskCount", {
    description: "Number of enrichment sub-tasks that had actual work to do (0-3)."
});
blobHydrationDuration = createHistogram("agent.ttft.blobHydrationMs", {
    description: "Time for the pre-enrichment Promise.all that hydrates images, videos, documents, and human changes",
    labelNames: [
        "hasImages",
        "hasVideos",
        "hasDocs"
    ]
});
invocationContextDuration = createHistogram("agent.ttft.invocationContextMs", {
    description: "Time to hydrate and process invocation context (Slack thread, GitHub PR, IDE state)",
    labelNames: [
        "kind"
    ]
});
processSelectedContextDuration = createHistogram("agent.ttft.processSelectedContextMs", {
    description: "Total wall-clock time for the entire processSelectedContext function"
});
postEnrichmentAssemblyDuration = createHistogram("agent.ttft.postEnrichmentAssemblyMs", {
    description: "Time for sync context assembly after enrichment (rules, skills, git diffs, PRs, etc.)"
});
MAX_RULE_LENGTH = 1e5;
EXTERNAL_LINK_ENRICHMENT_MAX_CONCURRENCY = 4;
EXTERNAL_LINK_INLINE_LIMIT = 2e4;
EXTERNAL_LINK_CONTENT_TRUNCATION_LIMIT = 5e5;
CODE_SELECTION_INLINE_LIMIT = 2e4;
CUSTOM_MODE_ID_PREFIX = "custom-mode:";
UNHYDRATED_CUSTOM_MODE_SOURCE_PATH_PREFIX = "unhydrated:";

}
