import { gHs, sT } from "./De_3.js";
import { S } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { ABh, nDo } from "./diffEditorModel.js";
import { EM } from "./editor.js";
import { Ni, hn } from "./editorService.js";
import { Hos, Mki, xc } from "./editor_2.js";
import { rt } from "./nls.js";
import { ij, tjc } from "./qIc.js";
import { RIo, Tk, d8 } from "./sideBySideEditorInput.js";
import { RBh, iDo } from "./textDiffEditorModel.js";
import { ezt, obe } from "./textEditorModel.js";
import { x } from "./tslib.es6.js";
var ZE, DBh;
export { DBh, ZE };
var __wakaru_Mq_initialized = false;
export function Mq() {
if (__wakaru_Mq_initialized) return;
__wakaru_Mq_initialized = true;
"use strict";
x(), rt(), d8(), xc(), ezt(), ABh(), RBh(), Ni(), sT(), EM(), ZE = class extends Tk {
    constructor(e, t, n, i, r, s){
        super(e, t, n, i, s), this.original = n, this.modified = i, this.forceOpenAsBinary = r, this.cachedModel = void 0, this.labels = this.computeLabels();
    }
    get typeId() {
        return ZE.ID;
    }
    get editorId() {
        return this.modified.editorId === this.original.editorId ? this.modified.editorId : void 0;
    }
    get capabilities() {
        let e = super.capabilities;
        return this.labels.forceDescription && (e |= 64), e;
    }
    computeLabels() {
        let e, t = !1;
        if (this.preferredName) e = this.preferredName;
        else {
            const l = this.original.getName(), u = this.modified.getName();
            e = S(4358, null, l, u), t = l === u;
        }
        let n, i, r;
        if (this.preferredDescription) n = this.preferredDescription, i = this.preferredDescription, r = this.preferredDescription;
        else {
            n = this.computeLabel(this.original.getDescription(0), this.modified.getDescription(0)), r = this.computeLabel(this.original.getDescription(2), this.modified.getDescription(2));
            const l = this.original.getDescription(1), u = this.modified.getDescription(1);
            if (typeof l == "string" && typeof u == "string" && (l || u)) {
                const [h, p] = gHs([
                    l,
                    u
                ]);
                i = this.computeLabel(h, p);
            }
        }
        let s = this.computeLabel(this.original.getTitle(0) ?? this.original.getName(), this.modified.getTitle(0) ?? this.modified.getName(), " \u2194 "), o = this.computeLabel(this.original.getTitle(1) ?? this.original.getName(), this.modified.getTitle(1) ?? this.modified.getName(), " \u2194 "), a = this.computeLabel(this.original.getTitle(2) ?? this.original.getName(), this.modified.getTitle(2) ?? this.modified.getName(), " \u2194 ");
        const c = this.getPreferredTitle();
        return c && (s = `${c} (${s})`, o = `${c} (${o})`, a = `${c} (${a})`), {
            name: e,
            shortDescription: n,
            mediumDescription: i,
            longDescription: r,
            forceDescription: t,
            shortTitle: s,
            mediumTitle: o,
            longTitle: a
        };
    }
    computeLabel(e, t, n = " - ") {
        if (!(!e || !t)) return e === t ? t : `${e}${n}${t}`;
    }
    getName() {
        return this.labels.name;
    }
    getDescription(e = 1) {
        switch(e){
            case 0:
                return this.labels.shortDescription;
            case 2:
                return this.labels.longDescription;
            case 1:
            default:
                return this.labels.mediumDescription;
        }
    }
    getTitle(e) {
        switch(e){
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
        const e = await this.createModel();
        return this.cachedModel?.dispose(), this.cachedModel = e, this.cachedModel;
    }
    prefersEditorPane(e) {
        return this.forceOpenAsBinary ? e.find((t)=>t.typeId === Hos) : e.find((t)=>t.typeId === Mki);
    }
    async createModel() {
        const [e, t] = await Promise.all([
            this.original.resolve(),
            this.modified.resolve()
        ]);
        return t instanceof obe && e instanceof obe ? new iDo(e, t) : new nDo(tjc(e) ? e : void 0, tjc(t) ? t : void 0);
    }
    toUntyped(e) {
        const t = super.toUntyped(e);
        if (t) return {
            ...t,
            modified: t.primary,
            original: t.secondary
        };
    }
    matches(e) {
        return this === e ? !0 : e instanceof ZE ? this.modified.matches(e.modified) && this.original.matches(e.original) && e.forceOpenAsBinary === this.forceOpenAsBinary : ij(e) ? this.modified.matches(e.modified) && this.original.matches(e.original) : !1;
    }
    dispose() {
        this.cachedModel && (this.cachedModel.dispose(), this.cachedModel = void 0), super.dispose();
    }
}, ZE.ID = "workbench.editors.diffEditorInput", ZE = ie([
    C(5, hn)
], ZE), DBh = class extends RIo {
    createEditorInput(e, t, n, i, r) {
        return e.createInstance(ZE, t, n, i, r, void 0);
    }
};

}
