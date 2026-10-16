import { Ze } from "./instantiation.js";
import { pd } from "./qIc.js";
import { Li } from "./resources.js";
import { x } from "./tslib.es6.js";
import { ci } from "./workspace.js";
var lL, U0;
export { U0, lL };
var __wakaru_Yv_initialized = false;
export function Yv() {
if (__wakaru_Yv_initialized) return;
__wakaru_Yv_initialized = true;
"use strict";
x(), Li(), Ze(), ci(), lL = pd("workspaceCollectionService"), U0 = ((e)=>(e[e.Unknown = 1] = "Unknown", e[e.Terminal = 2] = "Terminal", e[e.Files = 4] = "Files", e[e.Search = 8] = "Search", e[e.Git = 16] = "Git", e[e.Tasks = 32] = "Tasks", e[e.AgentExec = 64] = "AgentExec", e[e.Editor = 128] = "Editor", e[e.Mcp = 256] = "Mcp", e[e.Uri = 512] = "Uri", e[e.Customizations = 1024] = "Customizations", e[e.Composer = 2048] = "Composer", e[e.Commands = 4096] = "Commands", e))(U0 || {});

}
