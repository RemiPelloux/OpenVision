import { kl } from "./browser.ts";
import { wX, yZm } from "./gYa.js";
import { tqr } from "./ipa.js";
import { Xei, Yei, eyr, k4t, zet } from "./ls_exec_pb.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { C2 } from "./workspaceProjectPaths.js";
var cdg;
export { cdg };
var __wakaru_Q_k_initialized = false;
export function Q_k() {
if (__wakaru_Q_k_initialized) return;
__wakaru_Q_k_initialized = true;
"use strict";
E(), zet(), kl(), C2(), fn(), cdg = class {
    constructor(t, e, n, i, r, s){
        this.remoteLsExecutor = t, this.terminalService = e, this.fileService = n, this.workspaceContextService = i, this.pathService = r, this.cursorIgnoreService = s;
    }
    filterBlockedEntries(t) {
        t.childrenDirs = t.childrenDirs.map((e)=>{
            const n = rt.file(e.absPath), i = this.cursorIgnoreService.shouldIgnoreUriSync(n, void 0);
            return i?.type === "adminBlock" || i?.type === "cursorIgnore" ? (e.childrenDirs = [], e.childrenFiles = [], e) : (this.filterBlockedEntries(e), e);
        }), t.childrenFiles = t.childrenFiles.filter((e)=>{
            const n = t.absPath + "/" + e.name, i = rt.file(n), r = this.cursorIgnoreService.shouldIgnoreUriSync(i, void 0);
            return !(r?.type === "adminBlock" || r?.type === "cursorIgnore");
        });
    }
    async getTerminalFileModificationTime(t) {
        try {
            const e = this.workspaceContextService.getWorkspace(), n = await wX(e, this.pathService), i = yZm(n), r = `${t}.txt`, s = rt.joinPath(i, r);
            return (await this.fileService.stat(s)).mtime;
        } catch  {
            return;
        }
    }
    async execute(t, e, n) {
        const i = e.path;
        if (i) {
            const l = this.workspaceContextService.resolveRelativePath(i), c = this.cursorIgnoreService.shouldIgnoreUriSync(l, void 0);
            if (c?.type === "adminBlock" || c?.type === "cursorIgnore") {
                let u = `Path '${i}' exists but is filtered out`;
                if (c.type === "cursorIgnore") {
                    const h = c.source === "globalIgnore" ? "globalignore" : ".cursorignore";
                    u = `Path '${i}' exists but is filtered out by ${h}`;
                } else c.type === "adminBlock" && (u = `Path '${i}' exists but is filtered out by admin blocklist`);
                return new k4t({
                    result: {
                        case: "error",
                        value: new Yei({
                            error: u
                        })
                    }
                });
            }
        }
        const r = await this.remoteLsExecutor.execute(t, e, n);
        if (r.result.case !== "success") return r;
        const s = r.result.value.directoryTreeRoot;
        if (!s || (this.filterBlockedEntries(s), !tqr(s.absPath))) return r;
        const a = [];
        for (const l of s.childrenFiles){
            const c = /^(\d+)\.txt$/.exec(l.name);
            if (c) {
                const u = this.terminalService.getInstanceFromId(+c[1]);
                if (u) {
                    const d = u.capabilities.get(2);
                    if (d) {
                        const p = d.commands.filter((b)=>b.command.trim()).slice(-5).map((b)=>new Xei({
                                command: b.command,
                                exitCode: b.exitCode !== void 0 && !isNaN(b.exitCode) ? b.exitCode : void 0,
                                timestampMs: BigInt(b.timestamp),
                                durationMs: BigInt(b.duration)
                            })), g = d.executingCommandObject, f = g && new Xei({
                            command: g.command,
                            exitCode: g.exitCode !== void 0 && !isNaN(g.exitCode) ? g.exitCode : void 0,
                            timestampMs: BigInt(g.timestamp),
                            durationMs: BigInt(g.duration)
                        }), _ = await this.getTerminalFileModificationTime(u.instanceId);
                        l.terminalMetadata = new eyr({
                            cwd: await u.getCwd(),
                            lastCommands: p,
                            lastModifiedMs: _ !== void 0 ? BigInt(_) : void 0,
                            currentCommand: f
                        });
                    }
                }
            }
            a.push(l);
        }
        return s.childrenFiles = a, r;
    }
};

}
