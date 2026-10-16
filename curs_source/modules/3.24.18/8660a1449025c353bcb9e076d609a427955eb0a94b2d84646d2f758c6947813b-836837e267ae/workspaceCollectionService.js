import { Il } from "./SZu.js";
import { It } from "./instantiation.js";
import { Lr } from "./resources.js";
import { E } from "./tslib.es6.js";
import { Sr } from "./workspace.js";
var ey, Lc;
export { Lc, ey };
var __wakaru_Cu_initialized = false;
export function Cu() {
if (__wakaru_Cu_initialized) return;
__wakaru_Cu_initialized = true;
"use strict";
E(), Lr(), It(), Sr(), ey = Il("workspaceCollectionService"), Lc = ((t)=>(t[t.Unknown = 1] = "Unknown", t[t.Terminal = 2] = "Terminal", t[t.Files = 4] = "Files", t[t.Search = 8] = "Search", t[t.Git = 16] = "Git", t[t.Tasks = 32] = "Tasks", t[t.AgentExec = 64] = "AgentExec", t[t.Editor = 128] = "Editor", t[t.Mcp = 256] = "Mcp", t[t.Uri = 512] = "Uri", t[t.Customizations = 1024] = "Customizations", t[t.Composer = 2048] = "Composer", t[t.Commands = 4096] = "Commands", t))(Lc || {});

}
