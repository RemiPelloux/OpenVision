"use strict";
function n(e) {
    return null != e && void 0 === e.subagent && void 0 === e.sideChat;
}
function s(e) {
    const t = void 0 !== e.projectDetails?.subagent || void 0 !== e.projectDetails?.sideChat;
    return !e.hasCloudSubagentParent && !t && (n(e.projectDetails) || !0 === e.isRootProjectConversation);
}
require.d(exports, {
    DG: ()=>c,
    OG: ()=>o,
    Qt: ()=>n,
    YW: ()=>s,
    or: ()=>i,
    uv: ()=>a
});
const o = new Set([
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
]), i = [
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
], a = 600, c = "Start this Project.";
