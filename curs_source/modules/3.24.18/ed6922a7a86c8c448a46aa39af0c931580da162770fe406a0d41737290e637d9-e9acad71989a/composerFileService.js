import { Fo, Se, we, wi, xNt } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { p2 } from "./canvas.js";
import { cGv, n8e, xFn } from "./cgh.js";
import { Zy, yC } from "./composerEventService.js";
import { lb, n0 } from "./composerLogService.js";
import { bSo } from "./composerSlowSpanUtils.js";
import { hoe } from "./composerUriUtils.js";
import { Ni, hn } from "./editorService.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { BBe, Fi, Ii } from "./files.js";
import { Ze } from "./instantiation.js";
import { gt, li } from "./network.js";
import { doe, oG } from "./notebookEditorModelResolverService.js";
import { AO, mn, vn, zs } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { Ag, Xp } from "./textfiles.js";
import { yv } from "./tracing_2.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Jn, ci } from "./workspace.js";
var vfh, FSo, pq, mq;
export { FSo, mq, pq, vfh };
var __wakaru_rte_initialized = false;
export function rte() {
if (__wakaru_rte_initialized) return;
__wakaru_rte_initialized = true;
"use strict";
x(), Fo(), Se(), li(), Qt(), Fi(), Pn(), Ze(), yv(), Ni(), Ag(), doe(), yC(), ci(), hoe(), Vn(), qs(), p2(), bSo(), n0(), vfh = 500, FSo = 100, pq = vn("composerFileService"), mq = class extends we {
    constructor(e, t, n, i, r, s, o, a, c){
        super(), this._fileService = e, this._editorService = t, this._textFileService = n, this._notebookModelResolverService = i, this._composerEventService = r, this._workspaceContextService = s, this._experimentService = o, this._storageService = a, this._composerLogService = c, this._register(this._fileService.onDidFilesChange((l)=>{
            this._composerEventService.fireDidFilesChange(l);
        }));
    }
    async createFolder(e) {
        const { uri: t, composerData: n } = e, i = this.getURIForComposer(t, n);
        return this._fileService.createFolder(i);
    }
    async createNewFileAndMaybeFolder(e, t, n) {
        const i = this.getURIForComposer(e, t), r = await this.exists({
            uri: i,
            composerData: t
        }), s = [];
        if (!r) {
            let o = i.fsPath;
            for(; o.length > 0;){
                const l = o.split("/").slice(0, -1).join("/");
                if (await this.exists({
                    uri: Ee.file(l),
                    composerData: t
                })) break;
                s.push({
                    uri: Ee.file(l)
                }), o = l;
            }
            await this._fileService.createFile(i, wi.fromString(""), {
                overwrite: n
            });
            const a = 10;
            let c = 0;
            for(; !await this.exists({
                uri: i,
                composerData: t
            }) && c < a;)await new Promise((l)=>setTimeout(l, vfh)), c++;
            if (c === a) return this._composerLogService.error(`[composer] Failed to create file ${i.toString()} after ${a} attempts`), [];
        }
        return s;
    }
    async writeFile(e) {
        const { uri: t, composerData: n, bufferOrReadableOrStream: i, options: r } = e, s = this.getURIForComposer(t, n);
        return this._fileService.writeFile(s, i, r);
    }
    async deleteFolder(e) {
        const { uri: t, composerData: n, ...i } = e, r = this.getURIForComposer(t, n);
        if (await this.exists({
            uri: r,
            composerData: n
        })) try {
            await this._fileService.del(r, {
                recursive: !0,
                ...i
            });
        } catch (s) {
            this._composerLogService.error(`Error deleting folder ${r.toString()}:`, s);
        }
    }
    async resolve(e) {
        const { uri: t, composerData: n, options: i } = e, r = this.getURIForComposer(t, n);
        return this._fileService.resolve(r, i);
    }
    watch(e) {
        const { uri: t, composerData: n, options: i } = e, r = this.getURIForComposer(t, n);
        return this._fileService.watch(r, i);
    }
    async stat(e) {
        const { uri: t, composerData: n } = e, i = this.getURIForComposer(t, n);
        return this._fileService.stat(i);
    }
    async readFile(e) {
        const { uri: t, composerData: n } = e, i = this.getURIForComposer(t, n);
        return await this._fileService.readFile(i);
    }
    async exists(e) {
        const { uri: t, composerData: n, traceParent: i } = e, r = this.getURIForComposer(t, n);
        return xFn({
            traceParent: i,
            name: "ComposerFileService.exists.slow",
            thresholdMs: FSo,
            operation: ()=>this._fileService.exists(r)
        });
    }
    async getFileExistence(e) {
        const { uri: t, composerData: n, traceParent: i } = e, r = this.getURIForComposer(t, n);
        try {
            return await xFn({
                traceParent: i,
                name: "ComposerFileService.getFileExistence.slow",
                thresholdMs: FSo,
                operation: ()=>this._fileService.stat(r)
            }), {
                state: "present"
            };
        } catch (s) {
            const o = AO(s);
            return o === 1 ? {
                state: "missing"
            } : {
                state: "unknown",
                result: o,
                error: s
            };
        }
    }
    async deleteFile(e) {
        const { uri: t, composerData: n } = e, i = this.getURIForComposer(t, n);
        this._composerEventService.fireToRemoveDiffs({
            uri: i
        });
        try {
            if (await this.revertFile({
                uri: i,
                composerData: n,
                options: {
                    soft: !1
                }
            }), await this.exists({
                uri: i,
                composerData: n
            })) {
                await this._fileService.del(i, {
                    recursive: !0
                });
                const s = {
                    resource: i,
                    type: 2
                }, o = new BBe([
                    s
                ], !0);
                this._composerEventService.fireDidFilesChange(o);
            }
            const r = this._editorService.findEditors(i);
            for (const s of r)await this._editorService.closeEditor(s);
        } catch (r) {
            this._composerLogService.error(`Error deleting file ${i.toString()}:`, r);
        }
    }
    async deleteNewFileAndMaybeFolder(e, t, n) {
        const i = this.getURIForComposer(e, n);
        if (!n?.newlyCreatedFiles?.find((s)=>s.uri.toString() === i.toString())) return !1;
        try {
            return await this.deleteFile({
                uri: i,
                composerData: n
            }), this._composerEventService.fireNewFileDeleted({
                composerId: t,
                uri: i
            }), !0;
        } catch (s) {
            return this._composerLogService.error(`Error deleting file ${i.toString()}:`, s), !1;
        }
    }
    async saveFiles(e) {
        const { uris: t, composerData: n, options: i } = e;
        await Promise.allSettled(t.map(async (r)=>{
            await this.saveFile({
                uri: this.getURIForComposer(r, n),
                composerData: n,
                options: i
            });
        }));
    }
    async saveFile(e) {
        const { uri: t, composerData: n, options: i } = e;
        let r = this.getURIForComposer(t, n);
        r.scheme === gt.vscodeNotebookCell && (r = xNt(r));
        const s = cGv(r, i), o = !0;
        if (r.path.endsWith(".ipynb")) {
            if (!this._notebookModelResolverService.isDirty(r) && !o) return !0;
            let c;
            try {
                return c = await this._notebookModelResolverService.resolve(r), await c.object.save({
                    ...s,
                    force: o
                });
            } catch (l) {
                return this._composerLogService.error("[composer] Error saving notebook:", l), !1;
            } finally{
                c?.dispose();
            }
        } else return !this._textFileService.isDirty(r) && !o ? !0 : !!await this._textFileService.save(r, {
            reason: 1,
            force: o,
            ...s
        });
    }
    async revertFile(e) {
        const { uri: t, composerData: n, options: i } = e;
        let r = this.getURIForComposer(t, n);
        if (r.scheme === gt.vscodeNotebookCell && (r = xNt(r)), r.path.endsWith(".ipynb")) {
            let o;
            try {
                o = await this._notebookModelResolverService.resolve(r), await o.object.revert(i);
            } catch (a) {
                this._composerLogService.error("[composer] Error reverting notebook:", a);
            } finally{
                o?.dispose();
            }
        } else await this._textFileService.revert(r, i);
    }
    getURIForComposer(e, t) {
        return n8e(e, t, this._workspaceContextService);
    }
}, ie([
    zs("ComposerFileService.createFolder")
], mq.prototype, "createFolder", null), ie([
    zs("ComposerFileService.createNewFileAndMaybeFolder")
], mq.prototype, "createNewFileAndMaybeFolder", null), ie([
    zs("ComposerFileService.writeFile")
], mq.prototype, "writeFile", null), ie([
    zs("ComposerFileService.deleteFolder")
], mq.prototype, "deleteFolder", null), ie([
    zs("ComposerFileService.resolve")
], mq.prototype, "resolve", null), ie([
    zs("ComposerFileService.watch")
], mq.prototype, "watch", null), ie([
    zs("ComposerFileService.stat")
], mq.prototype, "stat", null), ie([
    zs("ComposerFileService.readFile")
], mq.prototype, "readFile", null), ie([
    zs("ComposerFileService.deleteFile")
], mq.prototype, "deleteFile", null), ie([
    zs("ComposerFileService.deleteNewFileAndMaybeFolder")
], mq.prototype, "deleteNewFileAndMaybeFolder", null), ie([
    zs("ComposerFileService.saveFiles")
], mq.prototype, "saveFiles", null), ie([
    zs("ComposerFileService.saveFile")
], mq.prototype, "saveFile", null), ie([
    zs("ComposerFileService.revertFile")
], mq.prototype, "revertFile", null), mq = ie([
    C(0, Ii),
    C(1, hn),
    C(2, Xp),
    C(3, oG),
    C(4, Zy),
    C(5, Jn),
    C(6, Kr),
    C(7, yn),
    C(8, lb)
], mq), mn(pq, mq, 1);

}
