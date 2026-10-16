import { vll } from "./Ycg.js";
import { DDo, F_t } from "./background_shell_exec_pb.js";
import { Ul } from "./path_2.js";
import { $te, Aj, MDo, _4t } from "./shell_exec_pb.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
var Cdg, Tdg, Edg, Idg;
export { Cdg, Edg, Idg, Tdg };
var __wakaru_vbk_initialized = false;
export function vbk() {
if (__wakaru_vbk_initialized) return;
__wakaru_vbk_initialized = true;
"use strict";
E(), $te(), F_t(), Ul(), fn(), Cdg = [
    "ls",
    "find",
    "tree",
    "dir",
    "stat"
], Tdg = class {
    constructor(t, e, n){
        this.remoteShellExecutor = t, this.workspaceContextService = e, this.cursorIgnoreService = n;
    }
    async execute(t, e, n) {
        const i = await vll(e.command, this.workspaceContextService, this.cursorIgnoreService);
        return i.isBlocked ? new Aj({
            result: {
                case: "rejected",
                value: new _4t({
                    command: e.command,
                    workingDirectory: e.workingDirectory,
                    reason: `Command blocked: access to "${i.blockedPath}" is restricted by admin policy`,
                    isReadonly: !1
                })
            }
        }) : this.remoteShellExecutor.execute(t, e, n);
    }
}, Edg = class {
    constructor(t, e, n){
        this.remoteShellStreamExecutor = t, this.workspaceContextService = e, this.cursorIgnoreService = n;
    }
    async *execute(t, e, n) {
        const i = await vll(e.command, this.workspaceContextService, this.cursorIgnoreService);
        if (i.isBlocked) {
            yield new MDo({
                event: {
                    case: "rejected",
                    value: new _4t({
                        command: e.command,
                        workingDirectory: e.workingDirectory,
                        reason: `Command blocked: access to "${i.blockedPath}" is restricted by admin policy`,
                        isReadonly: !1
                    })
                }
            });
            return;
        }
        yield* this.remoteShellStreamExecutor.execute(t, e, n);
    }
}, Idg = class {
    constructor(t, e, n){
        this.remoteBackgroundShellExecutor = t, this.workspaceContextService = e, this.cursorIgnoreService = n;
    }
    async execute(t, e, n) {
        const i = await vll(e.command, this.workspaceContextService, this.cursorIgnoreService);
        return i.isBlocked ? new DDo({
            result: {
                case: "rejected",
                value: new _4t({
                    command: e.command,
                    workingDirectory: e.workingDirectory,
                    reason: `Command blocked: access to "${i.blockedPath}" is restricted by admin policy`,
                    isReadonly: !1
                })
            }
        }) : this.remoteBackgroundShellExecutor.execute(t, e, n);
    }
};

}
