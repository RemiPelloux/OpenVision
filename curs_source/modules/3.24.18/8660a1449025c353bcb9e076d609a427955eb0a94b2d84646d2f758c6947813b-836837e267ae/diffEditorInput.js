import { D } from "./Iwo.js";
import { FYd, hne } from "./LYd.js";
import { jfl, tRg } from "./diffEditorModel.js";
import { T4 } from "./editor.js";
import { Wo, gr } from "./editorService.js";
import { OVo, od, yIr } from "./editor_2.js";
import { D3a, Nx } from "./ipa.js";
import { Bt } from "./nls.js";
import { bV, dC, tpl } from "./sideBySideEditorInput.js";
import { $fl, nRg } from "./textDiffEditorModel.js";
import { o2n, wMe } from "./textEditorModel.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var FP, iRg;
export { FP, iRg };
var __wakaru_Lle_initialized = false;
export function Lle() {
if (__wakaru_Lle_initialized) return;
__wakaru_Lle_initialized = true;
"use strict";
E(), Bt(), bV(), od(), o2n(), tRg(), nRg(), Wo(), Nx(), T4(), FP = class extends dC {
    constructor(t, e, n, i, r, s){
        super(t, e, n, i, s), this.original = n, this.modified = i, this.forceOpenAsBinary = r, this.cachedModel = void 0, this.labels = this.computeLabels();
    }
    get typeId() {
        return FP.ID;
    }
    get editorId() {
        return this.modified.editorId === this.original.editorId ? this.modified.editorId : void 0;
    }
    get capabilities() {
        let t = super.capabilities;
        return this.labels.forceDescription && (t |= 64), t;
    }
    computeLabels() {
        let t, e = !1;
        if (this.preferredName) t = this.preferredName;
        else {
            const c = this.original.getName(), u = this.modified.getName();
            t = D(4358, null, c, u), e = c === u;
        }
        let n, i, r;
        if (this.preferredDescription) n = this.preferredDescription, i = this.preferredDescription, r = this.preferredDescription;
        else {
            n = this.computeLabel(this.original.getDescription(0), this.modified.getDescription(0)), r = this.computeLabel(this.original.getDescription(2), this.modified.getDescription(2));
            const c = this.original.getDescription(1), u = this.modified.getDescription(1);
            if (typeof c == "string" && typeof u == "string" && (c || u)) {
                const [d, h] = D3a([
                    c,
                    u
                ]);
                i = this.computeLabel(d, h);
            }
        }
        let s = this.computeLabel(this.original.getTitle(0) ?? this.original.getName(), this.modified.getTitle(0) ?? this.modified.getName(), " \u2194 "), o = this.computeLabel(this.original.getTitle(1) ?? this.original.getName(), this.modified.getTitle(1) ?? this.modified.getName(), " \u2194 "), a = this.computeLabel(this.original.getTitle(2) ?? this.original.getName(), this.modified.getTitle(2) ?? this.modified.getName(), " \u2194 ");
        const l = this.getPreferredTitle();
        return l && (s = `${l} (${s})`, o = `${l} (${o})`, a = `${l} (${a})`), {
            name: t,
            shortDescription: n,
            mediumDescription: i,
            longDescription: r,
            forceDescription: e,
            shortTitle: s,
            mediumTitle: o,
            longTitle: a
        };
    }
    computeLabel(t, e, n = " - ") {
        if (!(!t || !e)) return t === e ? e : `${t}${n}${e}`;
    }
    getName() {
        return this.labels.name;
    }
    getDescription(t = 1) {
        switch(t){
            case 0:
                return this.labels.shortDescription;
            case 2:
                return this.labels.longDescription;
            case 1:
            default:
                return this.labels.mediumDescription;
        }
    }
    getTitle(t) {
        switch(t){
            case 0:
                return this.labels.shortTitle;
            case 2:
                return this.labels.longTitle;
            default:
            case 1:
                return this.labels.mediumTitle;
        }
    }
    async resolve() {
        const t = await this.createModel();
        return this.cachedModel?.dispose(), this.cachedModel = t, this.cachedModel;
    }
    prefersEditorPane(t) {
        return this.forceOpenAsBinary ? t.find((e)=>e.typeId === OVo) : t.find((e)=>e.typeId === yIr);
    }
    async createModel() {
        const [t, e] = await Promise.all([
            this.original.resolve(),
            this.modified.resolve()
        ]);
        return e instanceof wMe && t instanceof wMe ? new $fl(t, e) : new jfl(FYd(t) ? t : void 0, FYd(e) ? e : void 0);
    }
    toUntyped(t) {
        const e = super.toUntyped(t);
        if (e) return {
            ...e,
            modified: e.primary,
            original: e.secondary
        };
    }
    matches(t) {
        return this === t ? !0 : t instanceof FP ? this.modified.matches(t.modified) && this.original.matches(t.original) && t.forceOpenAsBinary === this.forceOpenAsBinary : hne(t) ? this.modified.matches(t.modified) && this.original.matches(t.original) : !1;
    }
    dispose() {
        this.cachedModel && (this.cachedModel.dispose(), this.cachedModel = void 0), super.dispose();
    }
}, FP.ID = "workbench.editors.diffEditorInput", FP = Re([
    F(5, gr)
], FP), iRg = class extends tpl {
    createEditorInput(t, e, n, i, r) {
        return t.createInstance(FP, e, n, i, r, void 0);
    }
};

}
