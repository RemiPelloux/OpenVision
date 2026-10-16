var PROJECT_APPEARANCE_COLOR_IDS, STAGED_PROJECT_ICONS, STAGED_PROJECT_INIT_DESCRIPTION_MAX_CHARS, NEW_PROJECT_KICKOFF_MESSAGE;
export { NEW_PROJECT_KICKOFF_MESSAGE, PROJECT_APPEARANCE_COLOR_IDS, STAGED_PROJECT_ICONS, STAGED_PROJECT_INIT_DESCRIPTION_MAX_CHARS };
var __wakaru_init_project_conversation_initialized = false;
export function init_project_conversation() {
if (__wakaru_init_project_conversation_initialized) return;
__wakaru_init_project_conversation_initialized = true;
"use strict";
PROJECT_APPEARANCE_COLOR_IDS = new Set([
    "default",
    "green",
    "cyan",
    "blue",
    "purple",
    "magenta",
    "orange",
    "yellow",
    "red",
    "brand"
]);
STAGED_PROJECT_ICONS = [
    "code",
    "terminal",
    "bug",
    "git-branch",
    "chip",
    "folder",
    "book-open",
    "file-text",
    "globe",
    "browser",
    "chat-bubbles",
    "briefcase",
    "board-kanban",
    "database",
    "chart-bars",
    "beaker",
    "cloud",
    "server",
    "shield",
    "rocket"
];
STAGED_PROJECT_INIT_DESCRIPTION_MAX_CHARS = 600;
NEW_PROJECT_KICKOFF_MESSAGE = "Start this Project.";

}
