var PRIVATE_INFERENCE_FEATURE_OFF_MESSAGE, PRIVATE_INFERENCE_OFF_FEATURES;
export { PRIVATE_INFERENCE_FEATURE_OFF_MESSAGE, PRIVATE_INFERENCE_OFF_FEATURES };
var __wakaru_init_private_inference_features_initialized = false;
export function init_private_inference_features() {
if (__wakaru_init_private_inference_features_initialized) return;
__wakaru_init_private_inference_features_initialized = true;
"use strict";
PRIVATE_INFERENCE_FEATURE_OFF_MESSAGE = "Off under private inference";
PRIVATE_INFERENCE_OFF_FEATURES = {
    tab: {
        why: "Every keystroke ships the file body, filename and edit history to Cursor's Tab model.",
        rpcs: [
            "aiserver.v1.AiService/StreamCpp",
            "aiserver.v1.AiService/CppAppend",
            "aiserver.v1.FileSyncService/FSUploadFile",
            "aiserver.v1.FileSyncService/FSSyncFile"
        ]
    },
    cmdk: {
        why: "Sends the instruction, selection, file and reranked context to Cursor-managed models.",
        rpcs: [
            "aiserver.v1.CmdKService/StreamCmdK",
            "aiserver.v1.CmdKService/StreamTerminalCmdK",
            "aiserver.v1.CmdKService/RerankCmdKContext",
            "aiserver.v1.CmdKService/RerankTerminalCmdKContext"
        ]
    },
    "chat-auto-title": {
        why: "Sends the first user message to Cursor; the chat's own model names it on the team's gateway instead.",
        rpcs: [
            "aiserver.v1.AiService/NameTab"
        ]
    },
    "commit-message": {
        why: "Sends the staged diff to Cursor.",
        rpcs: [
            "aiserver.v1.AiService/WriteGitCommitMessage"
        ]
    },
    "branch-name": {
        why: "Sends the diff or prompt to Cursor.",
        rpcs: [
            "aiserver.v1.AiService/WriteGitBranchName"
        ]
    },
    "conversation-classification": {
        why: "Uploads the full conversation for analytics.",
        rpcs: [
            "aiserver.v1.AnalyticsService/IngestConversation"
        ]
    },
    "transcript-overview": {
        why: "The overview is generated server-side from the conversation text.",
        rpcs: [
            "agent.v1.AgentService/CreateTranscriptOverview"
        ]
    },
    "agent-review": {
        why: "Streams the working-tree diff to Cursor.",
        rpcs: [
            "aiserver.v1.AiService/StreamBugBotAgentic"
        ]
    },
    "codebase-indexing": {
        why: "Uploads file contents and paths to Cursor's embedding service.",
        rpcs: [
            "aiserver.v1.RepositoryService/FastRepoInitHandshakeV2",
            "aiserver.v1.RepositoryService/SyncMerkleSubtreeV2",
            "aiserver.v1.RepositoryService/FastUpdateFileV2",
            "aiserver.v1.RepositoryService/FastRepoSyncComplete",
            "aiserver.v1.RepositoryService/EnsureIndexCreated"
        ]
    },
    "prompt-quality-upload": {
        why: "Uploads a local agent run (every model invocation) to Cursor.",
        rpcs: [
            "agent.v1.AgentService/UploadLocalAgentRunToPromptQuality"
        ]
    },
    "share-conversation": {
        why: "Publishes the transcript to Cursor.",
        rpcs: [
            "aiserver.v1.DashboardService/ShareConversation"
        ]
    },
    "knowledge-base": {
        why: "Knowledge base items and agent memories are stored on Cursor's servers.",
        rpcs: [
            "aiserver.v1.AiService/KnowledgeBaseAdd",
            "aiserver.v1.AiService/KnowledgeBaseUpdate",
            "aiserver.v1.AiService/KnowledgeBaseList"
        ]
    },
    "web-fetch": {
        why: "The agent's web fetch tool sends the URL to Cursor; the private-inference tool client refuses it.",
        rpcs: [
            "aiserver.v1.AiService/RunWebFetch"
        ]
    },
    "image-generation": {
        why: "The agent's image generation tool sends the description and reference images to Cursor; the private-inference tool client refuses it.",
        rpcs: [
            "aiserver.v1.AiService/RunGenerateImage"
        ]
    },
    "video-generation": {
        why: "The agent's video generation tool sends the prompt, source image, and reference images to Cursor; the private-inference tool client refuses it.",
        rpcs: [
            "aiserver.v1.AiService/RunGenerateVideo"
        ]
    },
    "x-search": {
        why: "The agent's X search tool sends the query to Cursor; the private-inference tool client refuses it.",
        rpcs: [
            "aiserver.v1.AiService/RunXSearch"
        ]
    },
    "scm-integration": {
        why: "Pull-request metadata, diffs, checks, comments and merge actions go through Cursor's SCM service, as does the GitHub/GitLab connection probe.",
        rpcs: [
            "aiserver.v1.SCMService/GetPullRequest",
            "aiserver.v1.SCMService/GetPullRequestStack",
            "aiserver.v1.SCMService/BatchGetPullRequests",
            "aiserver.v1.SCMService/BatchGetPullRequestStatus",
            "aiserver.v1.SCMService/GetPullRequestDiff",
            "aiserver.v1.SCMService/GetPullRequestFileContents",
            "aiserver.v1.SCMService/GetPullRequestChecks",
            "aiserver.v1.SCMService/GetPullRequestCheckLogExcerpt",
            "aiserver.v1.SCMService/GetPullRequestCodeowners",
            "aiserver.v1.SCMService/GetSCMPullRequestCommits",
            "aiserver.v1.SCMService/GetSCMPullRequestTimelineEvents",
            "aiserver.v1.SCMService/GetBranchComparison",
            "aiserver.v1.SCMService/GetPullRequestForBranch",
            "aiserver.v1.SCMService/BatchGetPullRequestForBranch",
            "aiserver.v1.SCMService/StreamPullRequestUpdates",
            "aiserver.v1.SCMService/MergePullRequest",
            "aiserver.v1.SCMService/UpdatePullRequestTitle",
            "aiserver.v1.SCMService/MakePullRequestReady",
            "aiserver.v1.SCMService/ClosePullRequest",
            "aiserver.v1.SCMService/ReopenPullRequest",
            "aiserver.v1.SCMService/EnablePullRequestAutoMerge",
            "aiserver.v1.SCMService/DisablePullRequestAutoMerge",
            "aiserver.v1.SCMService/RemovePullRequestFromMergeQueue",
            "aiserver.v1.BackgroundComposerService/GetPullRequestDiscussions",
            "aiserver.v1.BackgroundComposerService/DeletePullRequestReviewComment",
            "aiserver.v1.DashboardService/GetScmConnectionStatus"
        ]
    },
    "online-metrics": {
        why: "After an agent turn edits files, uploads each file's path and diff to Cursor, plus the added lines and original contents when the server config asks for them.",
        rpcs: [
            "aiserver.v1.OnlineMetricsService/ReportAgentSnapshot"
        ]
    },
    "codebase-telemetry": {
        why: "Uploads git packfiles of the workspace's repositories to Cursor and reports which repositories the workspace contains.",
        rpcs: [
            "aiserver.v1.CodebaseSnapshotService/RegisterCodebase",
            "aiserver.v1.CodebaseSnapshotService/CreatePackfileUpload",
            "aiserver.v1.CodebaseSnapshotService/UploadPackfileChunk",
            "aiserver.v1.CodebaseSnapshotService/CompletePackfileUpload",
            "aiserver.v1.CodebaseProtectionService/ReportWorkspaceRepositories",
            "aiserver.v1.CodebaseProtectionService/CheckCodebaseTelemetryPolicy"
        ]
    },
    "github-context": {
        why: "Pull-request, issue and commit context is fetched from GitHub with the user's GitHub token, proxied through Cursor when the gate is on; all GitHub egress stays off until it is decided.",
        rpcs: [
            "aiserver.v1.BackgroundComposerService/MakeGithubRequest"
        ]
    }
};

}
