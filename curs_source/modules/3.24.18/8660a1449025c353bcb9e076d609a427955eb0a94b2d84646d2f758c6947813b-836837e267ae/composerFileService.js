import { Adk, RTi, aat } from "./Aeg.js";
import { Ga, Qe, Tdn, Tr, st } from "./Iwo.js";
import { ID, aa, bn, jn } from "./SZu.js";
import { jD } from "./canvas.js";
import { Fb, LS } from "./composerEventService.js";
import { iI, w1 } from "./composerLogService.js";
import { lil } from "./composerSlowSpanUtils.js";
import { $Ce } from "./composerUriUtils.js";
import { Wo, gr } from "./editorService.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { Eet, is, ms } from "./files.js";
import { It } from "./instantiation.js";
import { Ki, Ot } from "./network.js";
import { TTt, qPe } from "./notebookEditorModelResolverService.js";
import { Zi, ki } from "./storage_2.js";
import { Vf, u_ } from "./textfiles.js";
import { __ } from "./tracing_2.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
var Ntg, Ail, dG, wie;
export { Ail, Ntg, dG, wie };
var __wakaru_Cie_initialized = false;
export function Cie() {
if (__wakaru_Cie_initialized) return;
__wakaru_Cie_initialized = true;
"use strict";
E(), Ga(), Qe(), Ki(), fn(), ms(), Rn(), It(), __(), Wo(), u_(), TTt(), LS(), Sr(), $Ce(), Zi(), _s(), jD(), lil(), iI(), Ntg = 500, Ail = 100, dG = jn("composerFileService"), wie = class extends st {
    constructor(t, e, n, i, r, s, o, a, l){
        super(), this._fileService = t, this._editorService = e, this._textFileService = n, this._notebookModelResolverService = i, this._composerEventService = r, this._workspaceContextService = s, this._experimentService = o, this._storageService = a, this._composerLogService = l, this._register(this._fileService.onDidFilesChange((c)=>{
            this._composerEventService.fireDidFilesChange(c);
        }));
    }
    async createFolder(t) {
        const { uri: e, composerData: n } = t, i = this.getURIForComposer(e, n);
        return this._fileService.createFolder(i);
    }
    async createNewFileAndMaybeFolder(t, e, n) {
        const i = this.getURIForComposer(t, e), r = await this.exists({
            uri: i,
            composerData: e
        }), s = [];
        if (!r) {
            let o = i.fsPath;
            for(; o.length > 0;){
                const c = o.split("/").slice(0, -1).join("/");
                if (await this.exists({
                    uri: rt.file(c),
                    composerData: e
                })) break;
                s.push({
                    uri: rt.file(c)
                }), o = c;
            }
            await this._fileService.createFile(i, Tr.fromString(""), {
                overwrite: n
            });
            const a = 10;
            let l = 0;
            for(; !await this.exists({
                uri: i,
                composerData: e
            }) && l < a;)await new Promise((c)=>setTimeout(c, Ntg)), l++;
            if (l === a) return this._composerLogService.error(`[composer] Failed to create file ${i.toString()} after ${a} attempts`), [];
        }
        return s;
    }
    async writeFile(t) {
        const { uri: e, composerData: n, bufferOrReadableOrStream: i, options: r } = t, s = this.getURIForComposer(e, n);
        return this._fileService.writeFile(s, i, r);
    }
    async deleteFolder(t) {
        const { uri: e, composerData: n, ...i } = t, r = this.getURIForComposer(e, n);
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
    async resolve(t) {
        const { uri: e, composerData: n, options: i } = t, r = this.getURIForComposer(e, n);
        return this._fileService.resolve(r, i);
    }
    watch(t) {
        const { uri: e, composerData: n, options: i } = t, r = this.getURIForComposer(e, n);
        return this._fileService.watch(r, i);
    }
    async stat(t) {
        const { uri: e, composerData: n } = t, i = this.getURIForComposer(e, n);
        return this._fileService.stat(i);
    }
    async readFile(t) {
        const { uri: e, composerData: n } = t, i = this.getURIForComposer(e, n);
        return await this._fileService.readFile(i);
    }
    async exists(t) {
        const { uri: e, composerData: n, traceParent: i } = t, r = this.getURIForComposer(e, n);
        return RTi({
            traceParent: i,
            name: "ComposerFileService.exists.slow",
            thresholdMs: Ail,
            operation: ()=>this._fileService.exists(r)
        });
    }
    async getFileExistence(t) {
        const { uri: e, composerData: n, traceParent: i } = t, r = this.getURIForComposer(e, n);
        try {
            return await RTi({
                traceParent: i,
                name: "ComposerFileService.getFileExistence.slow",
                thresholdMs: Ail,
                operation: ()=>this._fileService.stat(r)
            }), {
                state: "present"
            };
        } catch (s) {
            const o = ID(s);
            return o === 1 ? {
                state: "missing"
            } : {
                state: "unknown",
                result: o,
                error: s
            };
        }
    }
    async deleteFile(t) {
        const { uri: e, composerData: n } = t, i = this.getURIForComposer(e, n);
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
                }, o = new Eet([
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
    async deleteNewFileAndMaybeFolder(t, e, n) {
        const i = this.getURIForComposer(t, n);
        if (!n?.newlyCreatedFiles?.find((s)=>s.uri.toString() === i.toString())) return !1;
        try {
            return await this.deleteFile({
                uri: i,
                composerData: n
            }), this._composerEventService.fireNewFileDeleted({
                composerId: e,
                uri: i
            }), !0;
        } catch (s) {
            return this._composerLogService.error(`Error deleting file ${i.toString()}:`, s), !1;
        }
    }
    async saveFiles(t) {
        const { uris: e, composerData: n, options: i } = t;
        await Promise.allSettled(e.map(async (r)=>{
            await this.saveFile({
                uri: this.getURIForComposer(r, n),
                composerData: n,
                options: i
            });
        }));
    }
    async saveFile(t) {
        const { uri: e, composerData: n, options: i } = t;
        let r = this.getURIForComposer(e, n);
        r.scheme === Ot.vscodeNotebookCell && (r = Tdn(r));
        const s = Adk(r, i), o = !0;
        if (r.path.endsWith(".ipynb")) {
            if (!this._notebookModelResolverService.isDirty(r) && !o) return !0;
            let l;
            try {
                return l = await this._notebookModelResolverService.resolve(r), await l.object.save({
                    ...s,
                    force: o
                });
            } catch (c) {
                return this._composerLogService.error("[composer] Error saving notebook:", c), !1;
            } finally{
                l?.dispose();
            }
        } else return !this._textFileService.isDirty(r) && !o ? !0 : !!await this._textFileService.save(r, {
            reason: 1,
            force: o,
            ...s
        });
    }
    async revertFile(t) {
        const { uri: e, composerData: n, options: i } = t;
        let r = this.getURIForComposer(e, n);
        if (r.scheme === Ot.vscodeNotebookCell && (r = Tdn(r)), r.path.endsWith(".ipynb")) {
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
    getURIForComposer(t, e) {
        return aat(t, e, this._workspaceContextService);
    }
}, Re([
    aa("ComposerFileService.createFolder")
], wie.prototype, "createFolder", null), Re([
    aa("ComposerFileService.createNewFileAndMaybeFolder")
], wie.prototype, "createNewFileAndMaybeFolder", null), Re([
    aa("ComposerFileService.writeFile")
], wie.prototype, "writeFile", null), Re([
    aa("ComposerFileService.deleteFolder")
], wie.prototype, "deleteFolder", null), Re([
    aa("ComposerFileService.resolve")
], wie.prototype, "resolve", null), Re([
    aa("ComposerFileService.watch")
], wie.prototype, "watch", null), Re([
    aa("ComposerFileService.stat")
], wie.prototype, "stat", null), Re([
    aa("ComposerFileService.readFile")
], wie.prototype, "readFile", null), Re([
    aa("ComposerFileService.deleteFile")
], wie.prototype, "deleteFile", null), Re([
    aa("ComposerFileService.deleteNewFileAndMaybeFolder")
], wie.prototype, "deleteNewFileAndMaybeFolder", null), Re([
    aa("ComposerFileService.saveFiles")
], wie.prototype, "saveFiles", null), Re([
    aa("ComposerFileService.saveFile")
], wie.prototype, "saveFile", null), Re([
    aa("ComposerFileService.revertFile")
], wie.prototype, "revertFile", null), wie = Re([
    F(0, is),
    F(1, gr),
    F(2, Vf),
    F(3, qPe),
    F(4, Fb),
    F(5, yr),
    F(6, Cr),
    F(7, ki),
    F(8, w1)
], wie), bn(dG, wie, 1);

}
