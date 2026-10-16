import { mP } from "./SZu.js";
import { cS } from "./glass-clipboard-service.js";
import { Mt } from "./index_197.js";
import { E9e, T9e, aye, n2n } from "./timerService.js";
import { E } from "./tslib.es6.js";
import { In } from "./use-service.react_2.js";
var Lce, X3s, Z3s, Ajv, Q3s, J3s, Rjv;
export { Ajv, J3s, Lce, Q3s, Rjv, X3s, Z3s };
var __wakaru_knC_initialized = false;
export function knC() {
if (__wakaru_knC_initialized) return;
__wakaru_knC_initialized = true;
"use strict";
E(), Mt(), mP(), E9e(), In(), cS(), Lce = "code/willLoadWorkbenchMain", X3s = "code/didLoadWorkbenchMain", Z3s = "glass/didCommitShell", Ajv = /^code\/(will|did)CreateWorkbenchContributions\/(\d+)$/, Q3s = [
    {
        label: "import(workbench main) / require",
        from: Lce,
        to: X3s
    },
    {
        label: "wait for window config",
        from: "code/willWaitForWindowConfig",
        to: "code/didWaitForWindowConfig"
    },
    {
        label: "pre-workbench services",
        from: X3s,
        to: "code/willStartWorkbench"
    },
    {
        label: "init storage",
        from: "code/willInitStorage",
        to: "code/didInitStorage"
    },
    {
        label: "init workspace service",
        from: "code/willInitWorkspaceService",
        to: "code/didInitWorkspaceService"
    },
    {
        label: "overall workbench load",
        from: "code/willStartWorkbench",
        to: "code/didStartWorkbench"
    },
    {
        label: "contributions (Starting)",
        from: "code/willCreateWorkbenchContributions/1",
        to: "code/didCreateWorkbenchContributions/1"
    },
    {
        label: "contributions (Ready)",
        from: "code/willCreateWorkbenchContributions/2",
        to: "code/didCreateWorkbenchContributions/2"
    },
    {
        label: "lifecycle Starting \u2192 Ready",
        from: "code/willStartWorkbench",
        to: "code/LifecyclePhase/Ready"
    },
    {
        label: "lifecycle Ready \u2192 Restored",
        from: "code/LifecyclePhase/Ready",
        to: "code/LifecyclePhase/Restored"
    }
], J3s = [
    {
        label: "Workbench main \u2192 present",
        from: Lce,
        to: aye
    },
    {
        label: "React root \u2192 present",
        from: n2n,
        to: aye
    },
    {
        label: "Commit \u2192 present",
        from: Z3s,
        to: aye
    },
    {
        label: "Present \u2192 usable",
        from: aye,
        to: T9e
    },
    {
        label: "Workbench main \u2192 usable",
        from: Lce,
        to: T9e
    },
    {
        label: "Workbench main \u2192 commit",
        from: Lce,
        to: Z3s
    },
    {
        label: "Workbench main \u2192 React root",
        from: Lce,
        to: n2n
    }
], Rjv = new Set([
    ...Q3s,
    ...J3s
].flatMap((t)=>[
        t.from,
        t.to
    ]));

}
