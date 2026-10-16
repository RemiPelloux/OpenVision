import { GZe, J3s } from "./background_shell_exec_pb.js";
import { ba, e2 } from "./path_2.js";
import { Q3s, hee, k$, wbt } from "./shell_exec_pb.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
function gZv(e) {
    return e.startsWith("-");
}
async function m1o(e, t, n) {
    if (!e) return {
        isBlocked: !1
    };
    const r = t.getWorkspace().folders[0]?.uri, s = (h)=>e2(h) || !r ? h : Ee.joinPath(r, h).fsPath, o = (h)=>{
        const p = Ee.file(s(h));
        return n.shouldIgnoreUriSync(p)?.type === "adminBlock";
    }, a = (h)=>n.getBlockedChildPatternForListingPath(Ee.file(s(h))), c = s1h.some((h)=>new RegExp(`(?:^|[;&|]\\s*)${h}(?:\\s|$)`, "i").test(e)), l = [
        /(?:ls|stat|cat|head|tail|less|more|vi|vim|nano|rm|cp|mv|mkdir|rmdir|touch|chmod|chown|cd|pushd)\s+(?:[-\w]+\s+)*["']?([^\s"'|&;><]+)/gi,
        /(?:^|\s)(\.\/[^\s"'|&;><]+|[^\s"'|&;><]*\/[^\s"'|&;><]+)/g
    ], u = [];
    for (const h of l){
        let p;
        const g = new RegExp(h.source, h.flags);
        for(; (p = g.exec(e)) !== null;){
            const v = (p[1] || p[0]).trim().replace(/^["']|["']$/g, "");
            if (!(!v || gZv(v))) {
                if (u.push(v), v && o(v)) return {
                    isBlocked: !0,
                    blockedPath: v
                };
                if (v && c) {
                    const b = await a(v);
                    if (b) return {
                        isBlocked: !0,
                        blockedPath: `${v} (contains blocked path: ${b})`
                    };
                }
            }
        }
    }
    return {
        isBlocked: !1
    };
}
var s1h, o1h, a1h, c1h;
export { a1h, c1h, gZv, m1o, o1h, s1h };
var __wakaru_fZv_initialized = false;
export function fZv() {
if (__wakaru_fZv_initialized) return;
__wakaru_fZv_initialized = true;
"use strict";
x(), hee(), GZe(), ba(), Qt(), s1h = [
    "ls",
    "find",
    "tree",
    "dir",
    "stat"
], o1h = class {
    constructor(e, t, n){
        this.remoteShellExecutor = e, this.workspaceContextService = t, this.cursorIgnoreService = n;
    }
    async execute(e, t, n) {
        const i = await m1o(t.command, this.workspaceContextService, this.cursorIgnoreService);
        return i.isBlocked ? new k$({
            result: {
                case: "rejected",
                value: new wbt({
                    command: t.command,
                    workingDirectory: t.workingDirectory,
                    reason: `Command blocked: access to "${i.blockedPath}" is restricted by admin policy`,
                    isReadonly: !1
                })
            }
        }) : this.remoteShellExecutor.execute(e, t, n);
    }
}, a1h = class {
    constructor(e, t, n){
        this.remoteShellStreamExecutor = e, this.workspaceContextService = t, this.cursorIgnoreService = n;
    }
    async *execute(e, t, n) {
        const i = await m1o(t.command, this.workspaceContextService, this.cursorIgnoreService);
        if (i.isBlocked) {
            yield new Q3s({
                event: {
                    case: "rejected",
                    value: new wbt({
                        command: t.command,
                        workingDirectory: t.workingDirectory,
                        reason: `Command blocked: access to "${i.blockedPath}" is restricted by admin policy`,
                        isReadonly: !1
                    })
                }
            });
            return;
        }
        yield* this.remoteShellStreamExecutor.execute(e, t, n);
    }
}, c1h = class {
    constructor(e, t, n){
        this.remoteBackgroundShellExecutor = e, this.workspaceContextService = t, this.cursorIgnoreService = n;
    }
    async execute(e, t, n) {
        const i = await m1o(t.command, this.workspaceContextService, this.cursorIgnoreService);
        return i.isBlocked ? new J3s({
            result: {
                case: "rejected",
                value: new wbt({
                    command: t.command,
                    workingDirectory: t.workingDirectory,
                    reason: `Command blocked: access to "${i.blockedPath}" is restricted by admin policy`,
                    isReadonly: !1
                })
            }
        }) : this.remoteBackgroundShellExecutor.execute(e, t, n);
    }
};

}
