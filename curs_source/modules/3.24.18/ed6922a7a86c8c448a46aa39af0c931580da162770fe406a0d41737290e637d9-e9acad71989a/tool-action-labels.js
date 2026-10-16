import { x } from "./tslib.es6.js";
var nxs, c4l;
export { c4l, nxs };
var __wakaru_w6t_initialized = false;
export function w6t() {
if (__wakaru_w6t_initialized) return;
__wakaru_w6t_initialized = true;
"use strict";
x(), nxs = {
    shellToolCall: {
        loading: "Running",
        completed: "Ran",
        error: "Run"
    },
    deleteToolCall: {
        loading: "Deleting",
        completed: "Deleted",
        error: "Delete"
    },
    globToolCall: {
        loading: "Searching files",
        completed: "Searched files",
        error: "Search files"
    },
    grepToolCall: {
        loading: "Grepping",
        completed: "Grepped",
        error: "Grep"
    },
    readToolCall: {
        loading: "Reading",
        completed: "Read",
        error: "Read"
    },
    updateTodosToolCall: {
        loading: "Updating todos",
        completed: "Updated todos",
        error: "Update todos"
    },
    readTodosToolCall: {
        loading: "Reading todos",
        completed: "Read todos",
        error: "Read todos"
    },
    editToolCall: {
        loading: "Editing",
        completed: "Edited",
        error: "Edit"
    },
    lsToolCall: {
        loading: "Listing",
        completed: "Listed",
        error: "List"
    },
    readLintsToolCall: {
        loading: "Reading lints",
        completed: "Read lints",
        error: "Read lints"
    },
    mcpToolCall: {
        loading: "Running",
        completed: "Ran",
        error: "Run"
    },
    getMcpToolsToolCall: {
        loading: "Exploring tools",
        completed: "Explored tools",
        error: "Explore tools"
    },
    semSearchToolCall: {
        loading: "Searching",
        completed: "Searched",
        error: "Search"
    },
    createPlanToolCall: {
        loading: "Writing plan",
        completed: "Wrote plan",
        error: "Write plan"
    },
    webSearchToolCall: {
        loading: "Searching web",
        completed: "Searched web",
        error: "Search web"
    },
    xSearchToolCall: {
        loading: "Searching X",
        completed: "Searched X",
        error: "Search X"
    },
    taskToolCall: {
        loading: "Working on task",
        completed: "Completed task",
        error: "Work on task"
    },
    getAgentStatusToolCall: {
        loading: "Checking agents",
        completed: "Checked agents",
        error: "Check agents"
    },
    sendToAgentToolCall: {
        loading: "Messaging agent",
        completed: "Messaged agent",
        error: "Message agent"
    },
    readAgentTranscriptToolCall: {
        loading: "Reading transcript",
        completed: "Read transcript",
        error: "Read transcript"
    },
    createAgentToolCall: {
        loading: "Creating agent",
        completed: "Created agent",
        error: "Create agent"
    },
    stopAgentToolCall: {
        loading: "Stopping agent",
        completed: "Stopped agent",
        error: "Stop agent"
    },
    listMcpResourcesToolCall: {
        loading: "Listing resources",
        completed: "Listed resources",
        error: "List resources"
    },
    readMcpResourceToolCall: {
        loading: "Reading resource",
        completed: "Read resource",
        error: "Read resource"
    },
    applyAgentDiffToolCall: {
        loading: "Applying diff",
        completed: "Applied diff",
        error: "Apply diff"
    },
    askQuestionToolCall: {
        loading: "Asking questions",
        completed: "Asked questions",
        error: "Ask question"
    },
    blameByFilePathToolCall: {
        loading: "Looking up blame",
        completed: "Looked up blame",
        error: "Look up blame"
    },
    awaitToolCall: {
        loading: "Waiting",
        completed: "Waited",
        error: "Wait"
    },
    fetchToolCall: {
        loading: "Fetching",
        completed: "Fetched",
        error: "Fetch"
    },
    switchModeToolCall: {
        loading: "Switching mode",
        completed: "Switched mode",
        error: "Switch mode"
    },
    generateImageToolCall: {
        loading: "Generating image",
        completed: "Generated image",
        error: "Generate image"
    },
    generateVideoToolCall: {
        loading: "Generating video",
        completed: "Generated video",
        error: "Generate video"
    },
    recordScreenToolCall: {
        loading: "Recording screen",
        completed: "Recorded screen",
        error: "Record screen"
    },
    computerUseToolCall: {
        loading: "Using computer",
        completed: "Used computer",
        error: "Use computer"
    },
    writeShellStdinToolCall: {
        loading: "Writing to shell",
        completed: "Wrote to shell",
        error: "Write to shell"
    },
    reflectToolCall: {
        loading: "Reflecting",
        completed: "Reflected",
        error: "Reflect"
    },
    setupVmEnvironmentToolCall: {
        loading: "Setting up VM",
        completed: "Set up VM",
        error: "Set up VM"
    },
    replaceEnvToolCall: {
        loading: "Replacing environment",
        completed: "Replaced environment",
        error: "Replace environment"
    },
    searchConversationsToolCall: {
        loading: "Searching conversations",
        completed: "Searched conversations",
        error: "Search conversations"
    },
    createGoalToolCall: {
        loading: "Creating goal",
        completed: "Created goal",
        error: "Create goal"
    },
    updateGoalToolCall: {
        loading: "Updating goal",
        completed: "Updated goal",
        error: "Update goal"
    },
    truncatedToolCall: {
        loading: "Processing",
        completed: "Processed",
        error: "Process"
    },
    startGrindExecutionToolCall: {
        loading: "Executing",
        completed: "Executed",
        error: "Execute"
    },
    startGrindPlanningToolCall: {
        loading: "Planning",
        completed: "Planned",
        error: "Plan"
    },
    webFetchToolCall: {
        loading: "Fetching page",
        completed: "Fetched page",
        error: "Fetch page"
    },
    reportBugfixResultsToolCall: {
        loading: "Reporting results",
        completed: "Reported results",
        error: "Report results"
    },
    aiAttributionToolCall: {
        loading: "Learning from Cursor Blame",
        completed: "Learned from Cursor Blame",
        error: "Learn from Cursor Blame"
    },
    communicateUpdateToolCall: {
        loading: "Updating progress",
        completed: "Updated progress",
        error: "Update progress"
    },
    prManagementToolCall: {
        loading: "Managing PR",
        completed: "Managed PR",
        error: "Manage PR"
    },
    editPrLabelsToolCall: {
        loading: "Editing PR labels",
        completed: "Edited PR labels",
        error: "Edit PR labels"
    },
    fetchCloudAgentDataToolCall: {
        loading: "Fetching cloud agent data",
        completed: "Fetched cloud agent data",
        error: "Fetch cloud agent data"
    },
    mcpAuthToolCall: {
        loading: "Authenticating MCP server",
        completed: "Authenticated MCP server",
        error: "MCP authentication"
    },
    connectScmToolCall: {
        loading: "Connecting GitHub",
        completed: "Connected GitHub",
        error: "Connect GitHub"
    },
    reportBugToolCall: {
        loading: "Reporting bug",
        completed: "Reported bug",
        error: "Report bug"
    },
    sendFinalSummaryToolCall: {
        loading: "Recording final summary",
        completed: "Recorded final summary",
        error: "Record final summary"
    },
    sendMessageToolCall: {
        loading: "Sending message",
        completed: "Sent message",
        error: "Send message"
    },
    sendToUserToolCall: {
        loading: "Sending message",
        completed: "Sent message",
        error: "Send message"
    },
    setActiveBranchToolCall: {
        loading: "Updating metadata",
        completed: "Updated metadata",
        error: "Update metadata"
    },
    writeCanvasToolCall: {
        loading: "Writing canvas",
        completed: "Wrote canvas",
        error: "Write canvas"
    },
    readCanvasToolCall: {
        loading: "Reading canvas",
        completed: "Read canvas",
        error: "Read canvas"
    },
    recordCiInvestigationFindingsToolCall: {
        loading: "Recording CI findings",
        completed: "Recorded CI findings",
        error: "Record CI findings"
    },
    piReadToolCall: {
        loading: "Reading",
        completed: "Read",
        error: "Read"
    },
    piBashToolCall: {
        loading: "Running",
        completed: "Ran",
        error: "Run"
    },
    piEditToolCall: {
        loading: "Editing",
        completed: "Edited",
        error: "Edit"
    },
    piWriteToolCall: {
        loading: "Writing",
        completed: "Wrote",
        error: "Write"
    },
    piGrepToolCall: {
        loading: "Grepping",
        completed: "Grepped",
        error: "Grep"
    },
    piFindToolCall: {
        loading: "Searching files",
        completed: "Searched files",
        error: "Search files"
    },
    piLsToolCall: {
        loading: "Listing",
        completed: "Listed",
        error: "List"
    }
}, c4l = {
    loading: "Creating",
    completed: "Created",
    error: "Create"
};

}
