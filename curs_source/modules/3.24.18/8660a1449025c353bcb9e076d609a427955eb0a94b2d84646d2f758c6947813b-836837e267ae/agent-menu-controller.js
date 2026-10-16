import { Wut } from "./agent-prompt-input-name.react.js";
import { Bt } from "./nls.js";
import { gk0 } from "./ofv.js";
import { E } from "./tslib.es6.js";
import { cm } from "./workspace-helpers.js";
var Z4n, enn, tnn, Q4s, J4s, wkc, Ckc, ZC_, QC_, JC_;
export { Ckc, J4s, JC_, Q4s, QC_, Z4n, ZC_, enn, tnn, wkc };
var __wakaru_tMt_initialized = false;
export function tMt() {
if (__wakaru_tMt_initialized) return;
__wakaru_tMt_initialized = true;
"use strict";
E(), Bt(), Wut(), cm(), Z4n = new Set([
    "sidebar-context"
]), enn = new Set([
    "panel"
]), tnn = new Set([
    "sidebar-context",
    "panel"
]), Q4s = [
    {
        id: "split-down",
        label: "Split Down",
        icon: "layout-split-vertical",
        section: "window",
        surfaces: enn
    },
    {
        id: "split-right",
        label: "Split Right",
        icon: "layout-split-horizontal",
        section: "window",
        surfaces: enn
    },
    {
        id: "close-panel",
        label: gk0(),
        icon: "x",
        section: "window",
        surfaces: enn
    },
    {
        id: "pin-agent",
        label: "Pin",
        icon: "pin",
        section: "agent",
        surfaces: tnn
    },
    {
        id: "rename-agent",
        label: "Rename",
        icon: "pencil",
        section: "agent",
        surfaces: tnn
    },
    {
        id: "edit-project-icon",
        label: "Edit Icon",
        icon: "smiley-happy",
        section: "agent",
        surfaces: Z4n
    },
    {
        id: "mark-read-unread",
        label: "Mark as Read",
        icon: "bell",
        section: "agent",
        surfaces: tnn
    },
    {
        id: "fork-agent",
        label: "Fork",
        icon: "split",
        section: "organization"
    },
    {
        id: "new-project-thread",
        label: "New Agent",
        icon: "plus",
        section: "organization",
        surfaces: Z4n
    },
    {
        id: "move-agent",
        label: "Move to",
        icon: "arrow-swap",
        section: "organization",
        surfaces: tnn
    },
    {
        id: "copy",
        label: "Copy",
        icon: "copy",
        section: "meta"
    },
    {
        id: "add-to-project",
        label: "Add to Project",
        icon: "folder-arrow-right-up",
        section: "meta",
        surfaces: Z4n
    },
    {
        id: "share-agent",
        label: "Share",
        icon: "arrow-square-from-up",
        section: "meta"
    },
    {
        id: "open-agent-in-web",
        label: "Open in Web",
        icon: "arrow-right-up",
        section: "meta"
    },
    {
        id: "open-agent-in-new-window",
        label: "Open in New Window",
        icon: "link-external",
        section: "meta",
        surfaces: tnn
    },
    {
        id: "archive-agent",
        label: "Archive",
        icon: "archive",
        section: "lifecycle",
        surfaces: tnn
    },
    {
        id: "archive-agents-below",
        label: "Archive All Below",
        icon: "archive",
        section: "lifecycle",
        surfaces: Z4n
    },
    {
        id: "unarchive-agent",
        label: "Unarchive",
        icon: "redo",
        section: "lifecycle",
        surfaces: Z4n
    },
    {
        id: "export-agent",
        label: "Export",
        icon: "file-arrow-right-up",
        section: "dev",
        surfaces: enn
    },
    {
        id: "open-prompt-quality",
        label: "Open in Prompt Quality",
        icon: "arrow-right-up",
        section: "dev",
        surfaces: enn
    },
    {
        id: "open-datadog",
        label: "Open in Datadog",
        icon: "arrow-right-up",
        section: "dev",
        surfaces: enn
    }
], J4s = [
    ...new Set(Q4s.map((t)=>t.section))
], wkc = Object.fromEntries(Q4s.map((t)=>[
        t.id,
        t
    ])), Ckc = new Map(Q4s.map((t, e)=>[
        t.id,
        e
    ])), ZC_ = "rename-agent", QC_ = "split-right", JC_ = "split-down";

}
