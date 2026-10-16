import { D, Mm, Qe, st } from "./Iwo.js";
import { bo } from "./arrays.js";
import { hnt } from "./dataTransfer.js";
import { DC, o_e } from "./hierarchicalKind.js";
import { Dg, Nd } from "./languageFeatures.js";
import { Iy, Yri } from "./languages.js";
import { Jk, tB } from "./mime.js";
import { Ki, Ot } from "./network.js";
import { Bt } from "./nls.js";
import { Lr, iL } from "./resources.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
import { Mzd } from "./ze.js";
var sEr, Fqo, fvn, Bqo, Ioi, Dzd, zyt, oEr, Uqo;
export { Bqo, Dzd, Fqo, Ioi, Uqo, fvn, oEr, sEr, zyt };
var __wakaru_jqo_initialized = false;
export function jqo() {
if (__wakaru_jqo_initialized) return;
__wakaru_jqo_initialized = true;
"use strict";
E(), bo(), hnt(), o_e(), Qe(), tB(), Ki(), Lr(), fn(), Iy(), Dg(), Bt(), Sr(), sEr = class {
    constructor(t){
        this.copyMimeTypes = [], this.kind = t, this.providedDropEditKinds = [
            this.kind
        ], this.providedPasteEditKinds = [
            this.kind
        ];
    }
    async provideDocumentPasteEdits(t, e, n, i, r) {
        const s = await this.getEdit(n, r);
        if (s) return {
            edits: [
                {
                    insertText: s.insertText,
                    title: s.title,
                    kind: s.kind,
                    handledMimeType: s.handledMimeType,
                    yieldTo: s.yieldTo
                }
            ],
            dispose () {}
        };
    }
    async provideDocumentDropEdits(t, e, n, i) {
        const r = await this.getEdit(n, i);
        if (r) return {
            edits: [
                {
                    insertText: r.insertText,
                    title: r.title,
                    kind: r.kind,
                    handledMimeType: r.handledMimeType,
                    yieldTo: r.yieldTo
                }
            ],
            dispose () {}
        };
    }
}, Fqo = class bRb extends sEr {
    constructor(){
        super(DC.Empty.append("text", "plain")), this.id = bRb.id, this.dropMimeTypes = [
            Jk.text
        ], this.pasteMimeTypes = [
            Jk.text
        ];
    }
    async getEdit(e, n) {
        const i = e.get(Jk.text);
        if (!i || e.has(Jk.uriList)) return;
        const r = await i.asString();
        return {
            handledMimeType: Jk.text,
            title: D(1062, null),
            insertText: r,
            kind: this.kind
        };
    }
}, Fqo.id = "text", fvn = Fqo, Bqo = class extends sEr {
    constructor(){
        super(DC.Empty.append("uri", "path", "absolute")), this.dropMimeTypes = [
            Jk.uriList
        ], this.pasteMimeTypes = [
            Jk.uriList
        ];
    }
    async getEdit(t, e) {
        const n = await Mzd(t);
        if (!n.length || e.isCancellationRequested) return;
        let i = 0;
        const r = n.map(({ uri: o, originalText: a })=>o.scheme === Ot.file ? o.fsPath : (i++, a)).join(" ");
        let s;
        return i > 0 ? s = n.length > 1 ? D(1063, null) : D(1064, null) : s = n.length > 1 ? D(1065, null) : D(1066, null), {
            handledMimeType: Jk.uriList,
            insertText: r,
            title: s,
            kind: this.kind
        };
    }
}, Ioi = class extends sEr {
    constructor(t){
        super(DC.Empty.append("uri", "path", "relative")), this._workspaceContextService = t, this.dropMimeTypes = [
            Jk.uriList
        ], this.pasteMimeTypes = [
            Jk.uriList
        ];
    }
    async getEdit(t, e) {
        const n = await Mzd(t);
        if (!n.length || e.isCancellationRequested) return;
        const i = Mm(n.map(({ uri: r })=>{
            const s = this._workspaceContextService.getWorkspaceFolder(r);
            return s ? iL(s.uri, r) : void 0;
        }));
        if (i.length) return {
            handledMimeType: Jk.uriList,
            insertText: i.join(" "),
            title: n.length > 1 ? D(1067, null) : D(1068, null),
            kind: this.kind
        };
    }
}, Ioi = Re([
    F(0, yr)
], Ioi), Dzd = class {
    constructor(){
        this.kind = new DC("html"), this.providedPasteEditKinds = [
            this.kind
        ], this.copyMimeTypes = [], this.pasteMimeTypes = [
            "text/html"
        ], this._yieldTo = [
            {
                mimeType: Jk.text
            }
        ];
    }
    async provideDocumentPasteEdits(t, e, n, i, r) {
        if (i.triggerKind !== Yri.PasteAs && !i.only?.contains(this.kind)) return;
        const o = await n.get("text/html")?.asString();
        if (!(!o || r.isCancellationRequested)) return {
            dispose () {},
            edits: [
                {
                    insertText: o,
                    yieldTo: this._yieldTo,
                    title: D(1069, null),
                    kind: this.kind
                }
            ]
        };
    }
}, zyt = {
    scheme: "*",
    hasAccessToAllModels: !0
}, oEr = class extends st {
    constructor(t, e){
        super(), this._register(t.documentDropEditProvider.register(zyt, new fvn)), this._register(t.documentDropEditProvider.register(zyt, new Bqo)), this._register(t.documentDropEditProvider.register(zyt, new Ioi(e)));
    }
}, oEr = Re([
    F(0, Nd),
    F(1, yr)
], oEr), Uqo = class extends st {
    constructor(t, e){
        super(), this._register(t.documentPasteEditProvider.register(zyt, new fvn)), this._register(t.documentPasteEditProvider.register(zyt, new Bqo)), this._register(t.documentPasteEditProvider.register(zyt, new Ioi(e))), this._register(t.documentPasteEditProvider.register(zyt, new Dzd));
    }
}, Uqo = Re([
    F(0, Nd),
    F(1, yr)
], Uqo);

}
