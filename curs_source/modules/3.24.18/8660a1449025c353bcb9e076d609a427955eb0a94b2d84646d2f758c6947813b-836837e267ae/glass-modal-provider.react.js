import { Ejv, M$v, Mjv, jjv, o$v } from "./Ejv.js";
import { Tjv } from "./Tjv.js";
import { Rs } from "./authenticationService.js";
import { LP } from "./backgroundComposer.js";
import { yBv } from "./buy-credits-modal-host.react.js";
import { rrC } from "./chat-switch-trace-dev-tools.react.js";
import { t50 } from "./clone-repository-dialog.react.js";
import { PtC } from "./create-project-dialog.react.js";
import { py } from "./cursorCredsService.js";
import { rnC } from "./edit-workspace-modal.react.js";
import { a50 } from "./file-tree-create-modal.react.js";
import { p50 } from "./github-connect-dialog.react.js";
import { d60 } from "./glass-claude-code-import-modal.react.js";
import { IV0 } from "./glass-diagnostics-modal.react.js";
import { rK0 } from "./glass-explorer-orchestrator-cache-modal.react.js";
import { y60 } from "./glass-heavy-load-dialog.react.js";
import { Cce } from "./glass-modal-service.js";
import { Xf } from "./glass-opener-service.js";
import { Nz0 } from "./glass-palette.react.js";
import { qz0 } from "./glass-recent-agent-switcher.react.js";
import { knC } from "./glass-startup-performance-dialog.react.js";
import { DnC } from "./glass-storage-dialog.react.js";
import { mK0 } from "./glass-workspace-metadata-modal.react.js";
import { iV0 } from "./glass-workspace-trust-dialog.react.js";
import { hjv } from "./hjv.js";
import { WO0 } from "./index_231.js";
import { wiC } from "./indexed-agent-search-dev-tools.react.js";
import { ZnC } from "./preview-staged-projects-dialog.react.js";
import { cV0 } from "./quit-background-terminals-dialog.react.js";
import { vV0 } from "./quit-streaming-agents-dialog.react.js";
import { Um } from "./reactiveStorageTypes_2.js";
import { Qz0 } from "./theme-builder-dialog.react.js";
import { E } from "./tslib.es6.js";
import { Ru } from "./use-feature-gate.react_2.js";
import { In } from "./use-service.react_2.js";
import { HP } from "./use-workspace.react_2.js";
import { lazy as sen } from "./react-runtime/react/esm-index-production.js";
import { createContext as srC } from "./react-runtime/react/esm-index-production.js";
var j$v, $$v, H$v, W$v, G$v, q$v, z$v, y9i;
export { $$v, G$v, H$v, W$v, j$v, q$v, y9i, z$v };
var __wakaru_hre_initialized = false;
export function hre() {
if (__wakaru_hre_initialized) return;
__wakaru_hre_initialized = true;
"use strict";
E(), Um(), LP(), py(), Rs(), Ru(), In(), HP(), Cce(), Xf(), WO0(), t50(), a50(), p50(), d60(), y60(), Nz0(), qz0(), Qz0(), iV0(), cV0(), vV0(), IV0(), yBv(), rK0(), mK0(), j$v = sen(async ()=>({
        default: (await Promise.resolve().then(()=>(PtC(), hjv))).CreateProjectDialog
    })), $$v = sen(async ()=>({
        default: (await Promise.resolve().then(()=>(rnC(), Tjv))).EditWorkspaceModal
    })), H$v = sen(async ()=>({
        default: (await Promise.resolve().then(()=>(knC(), Ejv))).GlassStartupPerformanceDialog
    })), W$v = sen(async ()=>({
        default: (await Promise.resolve().then(()=>(DnC(), Mjv))).GlassStorageDialog
    })), G$v = sen(async ()=>({
        default: (await Promise.resolve().then(()=>(ZnC(), jjv))).PreviewStagedProjectsDialog
    })), q$v = sen(async ()=>({
        default: (await Promise.resolve().then(()=>(wiC(), o$v))).IndexedAgentSearchDevTools
    })), z$v = sen(async ()=>({
        default: (await Promise.resolve().then(()=>(rrC(), M$v))).ChatSwitchTraceDevTools
    })), y9i = srC(null);

}
