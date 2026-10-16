import { Gt, KXn, O0o, Pn, Qe, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { bo } from "./arrays.js";
import { I_, qn } from "./async.js";
import { Xs, yo } from "./cancellation.js";
import { Rn } from "./extensions.js";
import { is, ms } from "./files.js";
import { It, dn } from "./instantiation.js";
import { Vhs, pNk } from "./storedFileWorkingCopySaveParticipant.js";
import { E } from "./tslib.es6.js";
import { Vp, nh } from "./uriIdentity.js";
import { F, Re } from "./userDataProfile.js";
import { hNk, zhs } from "./workingCopyFileOperationParticipant.js";
import { V4, rF } from "./workingCopyService.js";
var BX, Khs;
export { BX, Khs };
var __wakaru_Fle_initialized = false;
export function Fle() {
if (__wakaru_Fle_initialized) return;
__wakaru_Fle_initialized = true;
"use strict";
E(), It(), Rn(), Gt(), qn(), bo(), Qe(), ms(), yo(), V4(), Vp(), hNk(), pNk(), BX = jn("workingCopyFileService"), Khs = class extends st {
    constructor(t, e, n, i){
        super(), this.fileService = t, this.workingCopyService = e, this.uriIdentityService = i, this._onWillRunWorkingCopyFileOperation = this._register(new KXn), this.onWillRunWorkingCopyFileOperation = this._onWillRunWorkingCopyFileOperation.event, this._onDidFailWorkingCopyFileOperation = this._register(new KXn), this.onDidFailWorkingCopyFileOperation = this._onDidFailWorkingCopyFileOperation.event, this._onDidRunWorkingCopyFileOperation = this._register(new KXn), this.onDidRunWorkingCopyFileOperation = this._onDidRunWorkingCopyFileOperation.event, this.correlationIds = 0, this.workingCopyProviders = [], this.fileOperationParticipants = this._register(n.createInstance(zhs)), this.saveParticipants = this._register(n.createInstance(Vhs)), this._register(this.registerWorkingCopyProvider((r)=>this.workingCopyService.workingCopies.filter((s)=>this.fileService.hasProvider(r) ? this.uriIdentityService.extUri.isEqualOrParent(s.resource, r) : this.uriIdentityService.extUri.isEqual(s.resource, r))));
    }
    create(t, e, n) {
        return this.doCreateFileOrFolder(t, !0, e, n);
    }
    createFolder(t, e, n) {
        return this.doCreateFileOrFolder(t, !1, e, n);
    }
    async doCreateFileOrFolder(t, e, n, i) {
        if (t.length === 0) return [];
        if (e) {
            const l = (await I_.settled(t.map((c)=>this.fileService.canCreateFile(c.resource, {
                    overwrite: c.overwrite
                })))).find((c)=>c instanceof Error);
            if (l instanceof Error) throw l;
        }
        const r = t.map((a)=>({
                target: a.resource
            }));
        await this.runFileOperationParticipants(r, 0, i, n);
        const s = {
            correlationId: this.correlationIds++,
            operation: 0,
            files: r
        };
        await this._onWillRunWorkingCopyFileOperation.fireAsync(s, Xs.None);
        let o;
        try {
            e ? o = await I_.settled(t.map((a)=>this.fileService.createFile(a.resource, a.contents, {
                    overwrite: a.overwrite
                }))) : o = await I_.settled(t.map((a)=>this.fileService.createFolder(a.resource)));
        } catch (a) {
            throw await this._onDidFailWorkingCopyFileOperation.fireAsync(s, Xs.None), a;
        }
        return await this._onDidRunWorkingCopyFileOperation.fireAsync(s, Xs.None), o;
    }
    async move(t, e, n) {
        return this.doMoveOrCopy(t, !0, e, n);
    }
    async copy(t, e, n) {
        return this.doMoveOrCopy(t, !1, e, n);
    }
    async doMoveOrCopy(t, e, n, i) {
        const r = [];
        for (const { file: { source: a, target: l }, overwrite: c } of t){
            const u = await (e ? this.fileService.canMove(a, l, c) : this.fileService.canCopy(a, l, c));
            if (u instanceof Error) throw u;
        }
        const s = t.map((a)=>a.file);
        await this.runFileOperationParticipants(s, e ? 2 : 3, i, n);
        const o = {
            correlationId: this.correlationIds++,
            operation: e ? 2 : 3,
            files: s
        };
        await this._onWillRunWorkingCopyFileOperation.fireAsync(o, Xs.None);
        try {
            for (const { file: { source: a, target: l }, overwrite: c } of t){
                if (!this.uriIdentityService.extUri.isEqual(a, l)) {
                    const u = e ? [
                        ...this.getDirty(a),
                        ...this.getDirty(l)
                    ] : this.getDirty(l);
                    await I_.settled(u.map((d)=>d.revert({
                            soft: !0
                        })));
                }
                e ? r.push(await this.fileService.move(a, l, c)) : r.push(await this.fileService.copy(a, l, c));
            }
        } catch (a) {
            throw await this._onDidFailWorkingCopyFileOperation.fireAsync(o, Xs.None), a;
        }
        return await this._onDidRunWorkingCopyFileOperation.fireAsync(o, Xs.None), r;
    }
    async delete(t, e, n) {
        for (const s of t){
            const o = await this.fileService.canDelete(s.resource, {
                recursive: s.recursive,
                useTrash: s.useTrash
            });
            if (o instanceof Error) throw o;
        }
        const i = t.map((s)=>({
                target: s.resource
            }));
        await this.runFileOperationParticipants(i, 1, n, e);
        const r = {
            correlationId: this.correlationIds++,
            operation: 1,
            files: i
        };
        await this._onWillRunWorkingCopyFileOperation.fireAsync(r, Xs.None);
        for (const s of t){
            const o = this.getDirty(s.resource);
            await I_.settled(o.map((a)=>a.revert({
                    soft: !0
                })));
        }
        try {
            for (const s of t)await this.fileService.del(s.resource, {
                recursive: s.recursive,
                useTrash: s.useTrash
            });
        } catch (s) {
            throw await this._onDidFailWorkingCopyFileOperation.fireAsync(r, Xs.None), s;
        }
        await this._onDidRunWorkingCopyFileOperation.fireAsync(r, Xs.None);
    }
    addFileOperationParticipant(t) {
        return this.fileOperationParticipants.addFileOperationParticipant(t);
    }
    runFileOperationParticipants(t, e, n, i) {
        return this.fileOperationParticipants.participate(t, e, n, i);
    }
    get hasSaveParticipants() {
        return this.saveParticipants.length > 0;
    }
    addSaveParticipant(t) {
        return this.saveParticipants.addSaveParticipant(t);
    }
    runSaveParticipants(t, e, n, i) {
        return this.saveParticipants.participate(t, e, n, i);
    }
    registerWorkingCopyProvider(t) {
        const e = O0o(this.workingCopyProviders, t);
        return Pn(e);
    }
    getDirty(t) {
        const e = new Set;
        for (const n of this.workingCopyProviders)for (const i of n(t))i.isDirty() && e.add(i);
        return Array.from(e);
    }
}, Khs = Re([
    F(0, is),
    F(1, rF),
    F(2, dn),
    F(3, nh)
], Khs), bn(BX, Khs, 1);

}
