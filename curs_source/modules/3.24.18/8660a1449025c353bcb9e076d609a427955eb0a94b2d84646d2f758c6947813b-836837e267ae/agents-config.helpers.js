import { S$ } from "./Sol.js";
import { dAn } from "./toolUtils.js";
import { E } from "./tslib.es6.js";
var uHl, SJf, kJf, wJf, CJf, TJf, dHl, EJf, IJf;
export { CJf, EJf, IJf, SJf, TJf, dHl, kJf, uHl, wJf };
var __wakaru_oOi_initialized = false;
export function oOi() {
if (__wakaru_oOi_initialized) return;
__wakaru_oOi_initialized = true;
"use strict";
E(), S$(), dAn(), uHl = [
    {
        id: "last-used",
        label: "Last Used"
    },
    {
        id: "cloud",
        label: "Cloud"
    },
    {
        id: "local",
        label: "Local"
    },
    {
        id: "new-worktree",
        label: "New Worktree"
    },
    {
        id: "shared-pool",
        label: "Remote Machines"
    },
    {
        id: "remote-control",
        label: "Remote Control"
    }
], SJf = [
    {
        value: "queue",
        label: "Send After Current Message"
    },
    {
        value: "stop-and-send",
        label: "Send Right Away"
    }
], kJf = [
    {
        value: "auto",
        label: "Auto"
    },
    {
        value: "always",
        label: "Always"
    },
    {
        value: "never",
        label: "Never"
    }
], wJf = [
    {
        value: "user_config_only",
        label: "sandbox.json Only"
    },
    {
        value: "user_config_with_defaults",
        label: "sandbox.json + Defaults"
    },
    {
        value: "allow_all",
        label: "Allow All"
    }
], CJf = [
    {
        value: "system",
        label: "System"
    },
    {
        value: "workspace",
        label: "Workspace"
    }
], TJf = "Choose how Agents run tools like command execution, MCP, and file writes.", dHl = "https://cursor.com/docs/agent/security/run-modes", EJf = [
    "cd",
    "pwd",
    "ls",
    "cat",
    "head",
    "tail",
    "dirname",
    "basename",
    "which",
    "file",
    "stat",
    "du",
    "df",
    "grep",
    "wc",
    "sort",
    "uniq",
    "cut",
    "rg",
    "echo",
    "printf",
    "date",
    "sleep",
    "whoami",
    "id",
    "uname",
    "printenv",
    "git status",
    "git diff",
    "git log",
    "git show",
    "docker ps",
    "docker images",
    "docker logs",
    "docker inspect",
    "docker compose ps",
    "docker compose logs",
    "docker compose config"
], IJf = /^(\*\.)?[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/;

}
