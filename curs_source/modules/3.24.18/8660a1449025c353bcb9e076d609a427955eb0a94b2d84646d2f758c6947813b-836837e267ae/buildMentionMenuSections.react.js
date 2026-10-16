import { fvw } from "./createPromptInputTrayBackRow.react.js";
import { Mt } from "./index_197.js";
import { d_ } from "./index_205.js";
import { $In } from "./mcpServerPresentation.js";
import { WMf } from "./mentionMenuRowCache.js";
import { $b } from "./stylex.mjs";
import { E } from "./tslib.es6.js";
var VMf, M3i, KMf, YMf, p5l, m5l, XMf, ZMf, QMf, JMf, g5l, eDf;
export { JMf, KMf, M3i, QMf, VMf, XMf, YMf, ZMf, eDf, g5l, m5l, p5l };
var __wakaru_Ivw_initialized = false;
export function Ivw() {
if (__wakaru_Ivw_initialized) return;
__wakaru_Ivw_initialized = true;
"use strict";
E(), $b(), Mt(), Mt(), Mt(), fvw(), Mt(), $In(), Mt(), d_(), Mt(), WMf(), VMf = 18, M3i = {
    mcpStatus: {
        khDVqt: "glass-uxw1ft",
        $$css: !0
    },
    mcpStatusWarning: {
        kMwMTN: "glass-1izesbo",
        $$css: !0
    },
    mcpStatusError: {
        kMwMTN: "glass-1jh5svw",
        $$css: !0
    },
    mcpStatusTertiary: {
        kMwMTN: "glass-4b2ntj",
        $$css: !0
    }
}, KMf = {
    warning: M3i.mcpStatusWarning,
    error: M3i.mcpStatusError,
    tertiary: M3i.mcpStatusTertiary
}, YMf = 3, p5l = "mention-menu-empty-top", m5l = "mention-menu-empty-categories", XMf = [
    {
        id: "files-and-folders",
        label: "Files & Folders",
        mode: "files_and_folders",
        iconName: "folder"
    },
    {
        id: "past-chats",
        label: "Past Chats",
        mode: "past_chats",
        iconName: "chat-bubbles"
    }
], ZMf = "past-chats", QMf = "anchored-tray-browse-past-chats", JMf = "anchored-tray-browse-canvases", g5l = "anchored-tray-back", eDf = 10;

}
