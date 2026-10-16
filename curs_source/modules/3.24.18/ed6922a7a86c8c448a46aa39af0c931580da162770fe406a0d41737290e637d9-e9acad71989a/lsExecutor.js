import { jUi } from "./De_3.js";
import { Yu } from "./browser.ts";
import { E3i, G6e, eIn, tIn, xbt } from "./ls_exec_pb.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { NR } from "./workspaceProjectPaths.js";
import { $$, qdh } from "./xmo.js";
var V0h;
export { V0h };
var __wakaru_ZXv_initialized = false;
export function ZXv() {
if (__wakaru_ZXv_initialized) return;
__wakaru_ZXv_initialized = true;
"use strict";
x(), G6e(), Yu(), NR(), Qt(), V0h = class {
    constructor(e, t, n, i, r, s){
        this.remoteLsExecutor = e, this.terminalService = t, this.fileService = n, this.workspaceContextService = i, this.pathService = r, this.cursorIgnoreService = s;
    }
    filterBlockedEntries(e) {
        e.childrenDirs = e.childrenDirs.map((t)=>{
            const n = Ee.file(t.absPath), i = this.cursorIgnoreService.shouldIgnoreUriSync(n, void 0);
            return i?.type === "adminBlock" || i?.type === "cursorIgnore" ? (t.childrenDirs = [], t.childrenFiles = [], t) : (this.filterBlockedEntries(t), t);
        }), e.childrenFiles = e.childrenFiles.filter((t)=>{
            const n = e.absPath + "/" + t.name, i = Ee.file(n), r = this.cursorIgnoreService.shouldIgnoreUriSync(i, void 0);
            return !(r?.type === "adminBlock" || r?.type === "cursorIgnore");
        });
    }
    async getTerminalFileModificationTime(e) {
        try {
            const t = this.workspaceContextService.getWorkspace(), n = await $$(t, this.pathService), i = qdh(n), r = `${e}.txt`, s = Ee.joinPath(i, r);
            return (await this.fileService.stat(s)).mtime;
        } catch  {
            return;
        }
    }
    async execute(e, t, n) {
        const i = t.path;
        if (i) {
            const c = this.workspaceContextService.resolveRelativePath(i), l = this.cursorIgnoreService.shouldIgnoreUriSync(c, void 0);
            if (l?.type === "adminBlock" || l?.type === "cursorIgnore") {
                let u = `Path '${i}' exists but is filtered out`;
                if (l.type === "cursorIgnore") {
                    const p = l.source === "globalIgnore" ? "globalignore" : ".cursorignore";
                    u = `Path '${i}' exists but is filtered out by ${p}`;
                } else l.type === "adminBlock" && (u = `Path '${i}' exists but is filtered out by admin blocklist`);
                return new xbt({
                    result: {
                        case: "error",
                        value: new eIn({
                            error: u
                        })
                    }
                });
            }
        }
        const r = await this.remoteLsExecutor.execute(e, t, n);
        if (r.result.case !== "success") return r;
        const s = r.result.value.directoryTreeRoot;
        if (!s || (this.filterBlockedEntries(s), !jUi(s.absPath))) return r;
        const a = [];
        for (const c of s.childrenFiles){
            const l = /^(\d+)\.txt$/.exec(c.name);
            if (l) {
                const u = this.terminalService.getInstanceFromId(+l[1]);
                if (u) {
                    const h = u.capabilities.get(2);
                    if (h) {
                        const g = h.commands.filter((y)=>y.command.trim()).slice(-5).map((y)=>new tIn({
                                command: y.command,
                                exitCode: y.exitCode !== void 0 && !isNaN(y.exitCode) ? y.exitCode : void 0,
                                timestampMs: BigInt(y.timestamp),
                                durationMs: BigInt(y.duration)
                            })), f = h.executingCommandObject, v = f && new tIn({
                            command: f.command,
                            exitCode: f.exitCode !== void 0 && !isNaN(f.exitCode) ? f.exitCode : void 0,
                            timestampMs: BigInt(f.timestamp),
                            durationMs: BigInt(f.duration)
                        }), b = await this.getTerminalFileModificationTime(u.instanceId);
                        c.terminalMetadata = new E3i({
                            cwd: await u.getCwd(),
                            lastCommands: g,
                            lastModifiedMs: b !== void 0 ? BigInt(b) : void 0,
                            currentCommand: v
                        });
                    }
                }
            }
            a.push(c);
        }
        return s.childrenFiles = a, r;
    }
};

}
