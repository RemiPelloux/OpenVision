import { D, Qe, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Ake, qn } from "./async.js";
import { Hi, mt } from "./contextkey.js";
import { Oj, Tk } from "./editOperation.js";
import { Rn } from "./extensions.js";
import { is, ms } from "./files.js";
import { It } from "./instantiation.js";
import { gCt } from "./jsonEdit.js";
import { $M } from "./json_2.js";
import { Bt } from "./nls.js";
import { cp } from "./objects.js";
import { Qs, qt } from "./range.js";
import { Em, Rh } from "./resolverService.js";
import { Cy, bu } from "./selection.js";
import { Vf, u_ } from "./textfiles.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { F0, Lw } from "./userDataProfile_2.js";
import { Epe, IE } from "./yBp.js";
import { Rp } from "./ze.js";
var SVt, pls;
export { SVt, pls };
var __wakaru_KAn_initialized = false;
export function KAn() {
if (__wakaru_KAn_initialized) return;
__wakaru_KAn_initialized = true;
"use strict";
E(), Bt(), qn(), $M(), cp(), gCt(), Qe(), Oj(), Qs(), Cy(), Em(), Hi(), ms(), It(), u_(), Rn(), F0(), SVt = jn("keybindingEditingService"), pls = class extends st {
    constructor(t, e, n, i){
        super(), this.textModelResolverService = t, this.textFileService = e, this.fileService = n, this.userDataProfileService = i, this.queue = new Ake;
    }
    addKeybinding(t, e, n) {
        return this.queue.queue(()=>this.doEditKeybinding(t, e, n, !0));
    }
    addKeybindingRule(t, e, n) {
        return this.queue.queue(async ()=>{
            const i = await this.resolveAndValidate(), r = i.object.textEditorModel, s = this.asObject(e, t, n, !1), { tabSize: o, insertSpaces: a } = r.getOptions(), l = r.getEOL();
            this.applyEditsToBuffer(Epe(r.getValue(), [
                -1
            ], s, {
                tabSize: o,
                insertSpaces: a,
                eol: l
            })[0], r);
            try {
                return await this.save();
            } finally{
                i.dispose();
            }
        });
    }
    editKeybinding(t, e, n) {
        return this.queue.queue(()=>this.doEditKeybinding(t, e, n, !1));
    }
    resetKeybinding(t) {
        return this.queue.queue(()=>this.doResetKeybinding(t));
    }
    removeKeybinding(t) {
        return this.queue.queue(()=>this.doRemoveKeybinding(t));
    }
    async doEditKeybinding(t, e, n, i) {
        const r = await this.resolveAndValidate(), s = r.object.textEditorModel;
        if (i) this.updateKeybinding(t, e, n, s, -1);
        else {
            const o = IE(s.getValue()), a = this.findUserKeybindingEntryIndex(t, o);
            this.updateKeybinding(t, e, n, s, a), t.isDefault && t.resolvedKeybinding && this.removeDefaultKeybinding(t, s);
        }
        try {
            await this.save();
        } finally{
            r.dispose();
        }
    }
    async doRemoveKeybinding(t) {
        const e = await this.resolveAndValidate(), n = e.object.textEditorModel;
        t.isDefault ? this.removeDefaultKeybinding(t, n) : this.removeUserKeybinding(t, n);
        try {
            return await this.save();
        } finally{
            e.dispose();
        }
    }
    async doResetKeybinding(t) {
        const e = await this.resolveAndValidate(), n = e.object.textEditorModel;
        t.isDefault || (this.removeUserKeybinding(t, n), this.removeUnassignedDefaultKeybinding(t, n));
        try {
            return await this.save();
        } finally{
            e.dispose();
        }
    }
    save() {
        return this.textFileService.save(this.userDataProfileService.currentProfile.keybindingsResource);
    }
    updateKeybinding(t, e, n, i, r) {
        const { tabSize: s, insertSpaces: o } = i.getOptions(), a = i.getEOL();
        if (r !== -1) {
            this.applyEditsToBuffer(Epe(i.getValue(), [
                r,
                "key"
            ], e, {
                tabSize: s,
                insertSpaces: o,
                eol: a
            })[0], i);
            const l = Epe(i.getValue(), [
                r,
                "when"
            ], n, {
                tabSize: s,
                insertSpaces: o,
                eol: a
            });
            l.length > 0 && this.applyEditsToBuffer(l[0], i);
        } else this.applyEditsToBuffer(Epe(i.getValue(), [
            -1
        ], this.asObject(e, t.command, n, !1), {
            tabSize: s,
            insertSpaces: o,
            eol: a
        })[0], i);
    }
    removeUserKeybinding(t, e) {
        const { tabSize: n, insertSpaces: i } = e.getOptions(), r = e.getEOL(), s = IE(e.getValue()), o = this.findUserKeybindingEntryIndex(t, s);
        o !== -1 && this.applyEditsToBuffer(Epe(e.getValue(), [
            o
        ], void 0, {
            tabSize: n,
            insertSpaces: i,
            eol: r
        })[0], e);
    }
    removeDefaultKeybinding(t, e) {
        const { tabSize: n, insertSpaces: i } = e.getOptions(), r = e.getEOL(), s = t.resolvedKeybinding ? t.resolvedKeybinding.getUserSettingsLabel() : null;
        if (s) {
            const o = this.asObject(s, t.command, t.when ? t.when.serialize() : void 0, !0);
            IE(e.getValue()).every((l)=>!this.areSame(l, o)) && this.applyEditsToBuffer(Epe(e.getValue(), [
                -1
            ], o, {
                tabSize: n,
                insertSpaces: i,
                eol: r
            })[0], e);
        }
    }
    removeUnassignedDefaultKeybinding(t, e) {
        const { tabSize: n, insertSpaces: i } = e.getOptions(), r = e.getEOL(), s = IE(e.getValue()), o = this.findUnassignedDefaultKeybindingEntryIndex(t, s).reverse();
        for (const a of o)this.applyEditsToBuffer(Epe(e.getValue(), [
            a
        ], void 0, {
            tabSize: n,
            insertSpaces: i,
            eol: r
        })[0], e);
    }
    findUserKeybindingEntryIndex(t, e) {
        for(let n = 0; n < e.length; n++){
            const i = e[n];
            if (i.command === t.command) {
                if (!i.when && !t.when) return n;
                if (i.when && t.when) {
                    const r = mt.deserialize(i.when);
                    if (r && r.serialize() === t.when.serialize()) return n;
                }
            }
        }
        return -1;
    }
    findUnassignedDefaultKeybindingEntryIndex(t, e) {
        const n = [];
        for(let i = 0; i < e.length; i++)e[i].command === `-${t.command}` && n.push(i);
        return n;
    }
    asObject(t, e, n, i) {
        const r = {
            key: t
        };
        return e && (r.command = i ? `-${e}` : e), n && (r.when = n), r;
    }
    areSame(t, e) {
        if (t.command !== e.command || t.key !== e.key) return !1;
        const n = mt.deserialize(t.when), i = mt.deserialize(e.when);
        return !(n && !i || !n && i || n && i && !n.equals(i) || !Rp(t.args, e.args));
    }
    applyEditsToBuffer(t, e) {
        const n = e.getPositionAt(t.offset), i = e.getPositionAt(t.offset + t.length), r = new qt(n.lineNumber, n.column, i.lineNumber, i.column), o = e.getValueInRange(r) ? Tk.replace(r, t.content) : Tk.insert(n, t.content);
        e.pushEditOperations([
            new bu(n.lineNumber, n.column, n.lineNumber, n.column)
        ], [
            o
        ], ()=>[]);
    }
    async resolveModelReference() {
        return await this.fileService.exists(this.userDataProfileService.currentProfile.keybindingsResource) || await this.textFileService.write(this.userDataProfileService.currentProfile.keybindingsResource, this.getEmptyContent(), {
            encoding: "utf8"
        }), this.textModelResolverService.createModelReference(this.userDataProfileService.currentProfile.keybindingsResource);
    }
    async resolveAndValidate() {
        if (this.textFileService.isDirty(this.userDataProfileService.currentProfile.keybindingsResource)) throw new Error(D(12872, null));
        const t = await this.resolveModelReference(), e = t.object.textEditorModel, n = e.getEOL();
        if (e.getValue()) {
            const i = this.parse(e);
            if (i.parseErrors.length) throw t.dispose(), new Error(D(12873, null));
            if (i.result) {
                if (!Array.isArray(i.result)) throw t.dispose(), new Error(D(12874, null));
            } else {
                const r = n + "[]";
                this.applyEditsToBuffer({
                    content: r,
                    length: r.length,
                    offset: e.getValueLength()
                }, e);
            }
        } else {
            const i = this.getEmptyContent();
            this.applyEditsToBuffer({
                content: i,
                length: i.length,
                offset: 0
            }, e);
        }
        return t;
    }
    parse(t) {
        const e = [];
        return {
            result: IE(t.getValue(), e, {
                allowTrailingComma: !0,
                allowEmptyContent: !0
            }),
            parseErrors: e
        };
    }
    getEmptyContent() {
        return "// " + D(12875, null) + `
[
]`;
    }
}, pls = Re([
    F(0, Rh),
    F(1, Vf),
    F(2, is),
    F(3, Lw)
], pls), bn(SVt, pls, 1);

}
