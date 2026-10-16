import { Zj, gw } from "./A3u.js";
import { S, Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { bn, zie } from "./async.js";
import { dn, he } from "./contextkey.js";
import { Dv, hR } from "./editOperation.js";
import { Pn } from "./extensions.js";
import { Fi, Ii } from "./files.js";
import { Ze } from "./instantiation.js";
import { mUe } from "./jsonEdit.js";
import { GE } from "./json_2.js";
import { rt } from "./nls.js";
import { bu } from "./objects.js";
import { mn, vn, yh } from "./qIc.js";
import { dt, qi } from "./range.js";
import { Nl, bc } from "./resolverService.js";
import { _f, za } from "./selection.js";
import { Ag, Xp } from "./textfiles.js";
import { x } from "./tslib.es6.js";
import { py, q_ } from "./userDataProfile_2.js";
var Vtt, Per;
export { Per, Vtt };
var __wakaru_qCt_initialized = false;
export function qCt() {
if (__wakaru_qCt_initialized) return;
__wakaru_qCt_initialized = true;
"use strict";
x(), rt(), bn(), GE(), bu(), mUe(), Se(), hR(), qi(), _f(), Nl(), dn(), Fi(), Ze(), Ag(), Pn(), py(), Vtt = vn("keybindingEditingService"), Per = class extends we {
    constructor(e, t, n, i){
        super(), this.textModelResolverService = e, this.textFileService = t, this.fileService = n, this.userDataProfileService = i, this.queue = new zie;
    }
    addKeybinding(e, t, n) {
        return this.queue.queue(()=>this.doEditKeybinding(e, t, n, !0));
    }
    addKeybindingRule(e, t, n) {
        return this.queue.queue(async ()=>{
            const i = await this.resolveAndValidate(), r = i.object.textEditorModel, s = this.asObject(t, e, n, !1), { tabSize: o, insertSpaces: a } = r.getOptions(), c = r.getEOL();
            this.applyEditsToBuffer(Zj(r.getValue(), [
                -1
            ], s, {
                tabSize: o,
                insertSpaces: a,
                eol: c
            })[0], r);
            try {
                return await this.save();
            } finally{
                i.dispose();
            }
        });
    }
    editKeybinding(e, t, n) {
        return this.queue.queue(()=>this.doEditKeybinding(e, t, n, !1));
    }
    resetKeybinding(e) {
        return this.queue.queue(()=>this.doResetKeybinding(e));
    }
    removeKeybinding(e) {
        return this.queue.queue(()=>this.doRemoveKeybinding(e));
    }
    async doEditKeybinding(e, t, n, i) {
        const r = await this.resolveAndValidate(), s = r.object.textEditorModel;
        if (i) this.updateKeybinding(e, t, n, s, -1);
        else {
            const o = gw(s.getValue()), a = this.findUserKeybindingEntryIndex(e, o);
            this.updateKeybinding(e, t, n, s, a), e.isDefault && e.resolvedKeybinding && this.removeDefaultKeybinding(e, s);
        }
        try {
            await this.save();
        } finally{
            r.dispose();
        }
    }
    async doRemoveKeybinding(e) {
        const t = await this.resolveAndValidate(), n = t.object.textEditorModel;
        e.isDefault ? this.removeDefaultKeybinding(e, n) : this.removeUserKeybinding(e, n);
        try {
            return await this.save();
        } finally{
            t.dispose();
        }
    }
    async doResetKeybinding(e) {
        const t = await this.resolveAndValidate(), n = t.object.textEditorModel;
        e.isDefault || (this.removeUserKeybinding(e, n), this.removeUnassignedDefaultKeybinding(e, n));
        try {
            return await this.save();
        } finally{
            t.dispose();
        }
    }
    save() {
        return this.textFileService.save(this.userDataProfileService.currentProfile.keybindingsResource);
    }
    updateKeybinding(e, t, n, i, r) {
        const { tabSize: s, insertSpaces: o } = i.getOptions(), a = i.getEOL();
        if (r !== -1) {
            this.applyEditsToBuffer(Zj(i.getValue(), [
                r,
                "key"
            ], t, {
                tabSize: s,
                insertSpaces: o,
                eol: a
            })[0], i);
            const c = Zj(i.getValue(), [
                r,
                "when"
            ], n, {
                tabSize: s,
                insertSpaces: o,
                eol: a
            });
            c.length > 0 && this.applyEditsToBuffer(c[0], i);
        } else this.applyEditsToBuffer(Zj(i.getValue(), [
            -1
        ], this.asObject(t, e.command, n, !1), {
            tabSize: s,
            insertSpaces: o,
            eol: a
        })[0], i);
    }
    removeUserKeybinding(e, t) {
        const { tabSize: n, insertSpaces: i } = t.getOptions(), r = t.getEOL(), s = gw(t.getValue()), o = this.findUserKeybindingEntryIndex(e, s);
        o !== -1 && this.applyEditsToBuffer(Zj(t.getValue(), [
            o
        ], void 0, {
            tabSize: n,
            insertSpaces: i,
            eol: r
        })[0], t);
    }
    removeDefaultKeybinding(e, t) {
        const { tabSize: n, insertSpaces: i } = t.getOptions(), r = t.getEOL(), s = e.resolvedKeybinding ? e.resolvedKeybinding.getUserSettingsLabel() : null;
        if (s) {
            const o = this.asObject(s, e.command, e.when ? e.when.serialize() : void 0, !0);
            gw(t.getValue()).every((c)=>!this.areSame(c, o)) && this.applyEditsToBuffer(Zj(t.getValue(), [
                -1
            ], o, {
                tabSize: n,
                insertSpaces: i,
                eol: r
            })[0], t);
        }
    }
    removeUnassignedDefaultKeybinding(e, t) {
        const { tabSize: n, insertSpaces: i } = t.getOptions(), r = t.getEOL(), s = gw(t.getValue()), o = this.findUnassignedDefaultKeybindingEntryIndex(e, s).reverse();
        for (const a of o)this.applyEditsToBuffer(Zj(t.getValue(), [
            a
        ], void 0, {
            tabSize: n,
            insertSpaces: i,
            eol: r
        })[0], t);
    }
    findUserKeybindingEntryIndex(e, t) {
        for(let n = 0; n < t.length; n++){
            const i = t[n];
            if (i.command === e.command) {
                if (!i.when && !e.when) return n;
                if (i.when && e.when) {
                    const r = he.deserialize(i.when);
                    if (r && r.serialize() === e.when.serialize()) return n;
                }
            }
        }
        return -1;
    }
    findUnassignedDefaultKeybindingEntryIndex(e, t) {
        const n = [];
        for(let i = 0; i < t.length; i++)t[i].command === `-${e.command}` && n.push(i);
        return n;
    }
    asObject(e, t, n, i) {
        const r = {
            key: e
        };
        return t && (r.command = i ? `-${t}` : t), n && (r.when = n), r;
    }
    areSame(e, t) {
        if (e.command !== t.command || e.key !== t.key) return !1;
        const n = he.deserialize(e.when), i = he.deserialize(t.when);
        return !(n && !i || !n && i || n && i && !n.equals(i) || !yh(e.args, t.args));
    }
    applyEditsToBuffer(e, t) {
        const n = t.getPositionAt(e.offset), i = t.getPositionAt(e.offset + e.length), r = new dt(n.lineNumber, n.column, i.lineNumber, i.column), o = t.getValueInRange(r) ? Dv.replace(r, e.content) : Dv.insert(n, e.content);
        t.pushEditOperations([
            new za(n.lineNumber, n.column, n.lineNumber, n.column)
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
        if (this.textFileService.isDirty(this.userDataProfileService.currentProfile.keybindingsResource)) throw new Error(S(12872, null));
        const e = await this.resolveModelReference(), t = e.object.textEditorModel, n = t.getEOL();
        if (t.getValue()) {
            const i = this.parse(t);
            if (i.parseErrors.length) throw e.dispose(), new Error(S(12873, null));
            if (i.result) {
                if (!Array.isArray(i.result)) throw e.dispose(), new Error(S(12874, null));
            } else {
                const r = n + "[]";
                this.applyEditsToBuffer({
                    content: r,
                    length: r.length,
                    offset: t.getValueLength()
                }, t);
            }
        } else {
            const i = this.getEmptyContent();
            this.applyEditsToBuffer({
                content: i,
                length: i.length,
                offset: 0
            }, t);
        }
        return e;
    }
    parse(e) {
        const t = [];
        return {
            result: gw(e.getValue(), t, {
                allowTrailingComma: !0,
                allowEmptyContent: !0
            }),
            parseErrors: t
        };
    }
    getEmptyContent() {
        return "// " + S(12875, null) + `
[
]`;
    }
}, Per = ie([
    C(0, bc),
    C(1, Xp),
    C(2, Ii),
    C(3, q_)
], Per), mn(Vtt, Per, 1);

}
