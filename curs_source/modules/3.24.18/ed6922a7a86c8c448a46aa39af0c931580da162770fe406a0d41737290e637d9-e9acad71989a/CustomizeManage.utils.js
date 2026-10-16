import { x } from "./tslib.es6.js";
var Fzi, $ih, Hih, bGt, T1e, Wih, Gih, Vih, lOn;
export { $ih, Fzi, Gih, Hih, T1e, Vih, Wih, bGt, lOn };
var __wakaru_$Ue_initialized = false;
export function $Ue() {
if (__wakaru_$Ue_initialized) return;
__wakaru_$Ue_initialized = true;
"use strict";
x(), Fzi = 5, $ih = 15, Hih = [
    "user",
    "plugin",
    "team",
    "dashboard",
    "project",
    "other"
], bGt = [
    {
        id: "plugins",
        label: "Plugins"
    },
    {
        id: "mcps",
        label: "MCPs"
    },
    {
        id: "skills",
        label: "Skills"
    },
    {
        id: "agents",
        label: "Subagents"
    },
    {
        id: "rules",
        label: "Rules"
    },
    {
        id: "commands",
        label: "Commands"
    },
    {
        id: "hooks",
        label: "Hooks"
    }
], T1e = {
    plugins: {
        title: "Extend Cursor with Plugins",
        description: "Plugins bundle rules, skills, subagents, commands, MCP servers, and hooks into one installable package.",
        docsUrl: "https://cursor.com/docs/plugins"
    },
    mcps: {
        title: "Connect External Tools with MCP",
        description: "Model Context Protocol servers connect Cursor to external tools and data sources like Linear, Figma, and Notion.",
        docsUrl: "https://cursor.com/docs/mcp"
    },
    skills: {
        title: "Teach Cursor New Skills",
        description: "Skills package domain-specific knowledge and workflows that Agent applies automatically when relevant.",
        docsUrl: "https://cursor.com/docs/skills"
    },
    agents: {
        title: "Delegate Work to Subagents",
        description: "Subagents are specialized assistants that run in their own context window so Agent can parallelize and stay focused.",
        docsUrl: "https://cursor.com/docs/agent/subagents"
    },
    rules: {
        title: "Guide Agent with Rules",
        description: "Rules give Agent persistent, system-level instructions for your coding standards and workflows.",
        docsUrl: "https://cursor.com/docs/rules"
    },
    commands: {
        title: "Create Reusable Commands",
        description: "Commands are reusable prompts you invoke with /name to standardize common workflows across your team.",
        docsUrl: "https://cursor.com/docs/agent/chat/commands"
    },
    hooks: {
        title: "Automate with Hooks",
        description: "Hooks run custom scripts at lifecycle events to observe, control, and extend the agent loop.",
        docsUrl: "https://cursor.com/docs/hooks"
    }
}, Wih = [], Gih = [
    "user",
    "team",
    "workspace"
], Vih = {
    user: "User",
    team: "Team",
    workspace: "Workspace",
    workspaces: "Workspaces",
    sources: "Sources"
}, lOn = {
    skills: "skill",
    rules: "rule",
    agents: "subagent",
    mcps: "mcp",
    commands: "command"
};

}
