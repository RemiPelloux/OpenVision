import { D, Gt, Nt, Qe, da, en, st } from "./Iwo.js";
import { E_l } from "./Ycg.js";
import { Jd } from "./autorun.js";
import { or, yi } from "./configuration.js";
import { Hi, Rr, cn } from "./contextkey.js";
import { _Uw } from "./dirtydiffDecorator.css";
import { xw } from "./editorBrowser.js";
import { Wo, gr } from "./editorService.js";
import { du, gd } from "./map.js";
import { J0, gO } from "./model_2.js";
import { Bt } from "./nls.js";
import { Jc } from "./observable.js";
import { A_l, P_l, R_l, aIt, cDg, lDg, x_l, yKt } from "./quickDiff.js";
import { O2n, Tlt } from "./quickDiffModel.js";
import { Kg, PC } from "./textModel.js";
import { Dl } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { Vp, nh } from "./uriIdentity.js";
import { F, Re } from "./userDataProfile.js";
import { Yv } from "./utils_10.js";
import { DI, OI, U3, bP, qS } from "./ze.js";
var gTs, LKe, fTs;
export { LKe, fTs, gTs };
var __wakaru_T$l_initialized = false;
export function T$l() {
if (__wakaru_T$l_initialized) return;
__wakaru_T$l_initialized = true;
"use strict";
E(), Bt(), _Uw(), Qe(), Gt(), or(), PC(), Dl(), xw(), J0(), U3(), Wo(), yKt(), O2n(), du(), Vp(), Hi(), Jc(), gTs = new cn("quickDiffDecorationCount", 0), LKe = class extends st {
    constructor(t, e, n = !1, i){
        super(), this.codeEditor = t, this.quickDiffModelRef = e, this.forceSolidModifiedIndicator = n, this.configurationService = i;
        const r = i.getValue("scm.diffDecorations"), s = r === "all" || r === "gutter", o = r === "all" || r === "overview", a = r === "all" || r === "minimap", l = D(9138, null);
        this.addedOptions = LKe.createDecoration("dirty-diff-added", l, {
            gutter: s,
            overview: {
                active: o,
                color: P_l
            },
            minimap: {
                active: a,
                color: A_l
            },
            isWholeLine: !0
        }), this.addedPatternOptions = LKe.createDecoration("dirty-diff-added-pattern", l, {
            gutter: s,
            overview: {
                active: o,
                color: P_l
            },
            minimap: {
                active: a,
                color: A_l
            },
            isWholeLine: !0
        });
        const c = D(9139, null);
        this.modifiedOptions = LKe.createDecoration("dirty-diff-modified", c, {
            gutter: s,
            overview: {
                active: o,
                color: R_l
            },
            minimap: {
                active: a,
                color: x_l
            },
            isWholeLine: !0
        }), this.modifiedPatternOptions = LKe.createDecoration("dirty-diff-modified-pattern", c, {
            gutter: s,
            overview: {
                active: o,
                color: R_l
            },
            minimap: {
                active: a,
                color: x_l
            },
            isWholeLine: !0
        }), this.deletedOptions = LKe.createDecoration("dirty-diff-deleted", D(9140, null), {
            gutter: s,
            overview: {
                active: o,
                color: cDg
            },
            minimap: {
                active: a,
                color: lDg
            },
            isWholeLine: !1
        }), this._register(i.onDidChangeConfiguration((u)=>{
            u.affectsConfiguration("scm.diffDecorationsGutterPattern") && this.onDidChange();
        })), this._register(en.runAndSubscribe(this.quickDiffModelRef.object.onDidChange, ()=>this.onDidChange()));
    }
    static createDecoration(t, e, n) {
        const i = {
            description: "dirty-diff-decoration",
            isWholeLine: n.isWholeLine
        };
        return n.gutter && (i.linesDecorationsClassName = `dirty-diff-glyph ${t}`, i.linesDecorationsTooltip = e), n.overview.active && (i.overviewRuler = {
            color: OI(n.overview.color),
            position: gO.Left
        }), n.minimap.active && (i.minimap = {
            color: OI(n.minimap.color),
            position: 2
        }), Kg.createDynamic(i);
    }
    onDidChange() {
        if (!this.codeEditor.hasModel()) return;
        const t = this.quickDiffModelRef.object.quickDiffs.filter((i)=>i.visible), e = this.configurationService.getValue("scm.diffDecorationsGutterPattern"), n = this.quickDiffModelRef.object.changes.filter((i)=>t.some((r)=>r.label === i.label)).map((i)=>{
            const r = i.change, s = E_l(r), o = r.modifiedStartLineNumber, a = r.modifiedEndLineNumber || o;
            switch(s){
                case aIt.Add:
                    return {
                        range: {
                            startLineNumber: o,
                            startColumn: 1,
                            endLineNumber: a,
                            endColumn: 1
                        },
                        options: e.added ? this.addedPatternOptions : this.addedOptions
                    };
                case aIt.Delete:
                    return {
                        range: {
                            startLineNumber: o,
                            startColumn: Number.MAX_VALUE,
                            endLineNumber: o,
                            endColumn: Number.MAX_VALUE
                        },
                        options: this.deletedOptions
                    };
                case aIt.Modify:
                    {
                        const l = !this.forceSolidModifiedIndicator && e.modified;
                        return {
                            range: {
                                startLineNumber: o,
                                startColumn: 1,
                                endLineNumber: a,
                                endColumn: 1
                            },
                            options: l ? this.modifiedPatternOptions : this.modifiedOptions
                        };
                    }
            }
        });
        this.decorationsCollection ? this.decorationsCollection.set(n) : this.decorationsCollection = this.codeEditor.createDecorationsCollection(n);
    }
    dispose() {
        this.decorationsCollection && this.decorationsCollection.clear(), this.decorationsCollection = void 0, this.quickDiffModelRef.dispose(), super.dispose();
    }
}, LKe = Re([
    F(3, yi)
], LKe), fTs = class extends st {
    constructor(t, e, n, i, r){
        super(), this.editorService = t, this.configurationService = e, this.quickDiffModelService = n, this.uriIdentityService = i, this.enabled = !1, this.decorators = new gd, this.viewState = {
            width: 3,
            visibility: "always"
        }, this.transientDisposables = this._register(new Nt), this.stylesheet = bP(void 0, void 0, this._store), this.quickDiffDecorationCount = gTs.bindTo(r), this.activeEditor = Yv(this, this.editorService.onDidActiveEditorChange, ()=>this.editorService.activeEditor);
        const s = en.filter(e.onDidChangeConfiguration, (l)=>l.affectsConfiguration("scm.diffDecorations"));
        this._register(s(this.onDidChangeConfiguration, this)), this.onDidChangeConfiguration();
        const o = en.filter(e.onDidChangeConfiguration, (l)=>l.affectsConfiguration("scm.diffDecorationsGutterWidth"));
        this._register(o(this.onDidChangeDiffWidthConfiguration, this)), this.onDidChangeDiffWidthConfiguration();
        const a = en.filter(e.onDidChangeConfiguration, (l)=>l.affectsConfiguration("scm.diffDecorationsGutterVisibility"));
        this._register(a(this.onDidChangeDiffVisibilityConfiguration, this)), this.onDidChangeDiffVisibilityConfiguration();
    }
    onDidChangeConfiguration() {
        this.configurationService.getValue("scm.diffDecorations") !== "none" ? this.enable() : this.disable();
    }
    onDidChangeDiffWidthConfiguration() {
        let t = this.configurationService.getValue("scm.diffDecorationsGutterWidth");
        (isNaN(t) || t <= 0 || t > 5) && (t = 3), this.setViewState({
            ...this.viewState,
            width: t
        });
    }
    onDidChangeDiffVisibilityConfiguration() {
        const t = this.configurationService.getValue("scm.diffDecorationsGutterVisibility");
        this.setViewState({
            ...this.viewState,
            visibility: t
        });
    }
    setViewState(t) {
        this.viewState = t, this.stylesheet.textContent = `
			.monaco-editor .dirty-diff-added,
			.monaco-editor .dirty-diff-modified {
				border-left-width:${t.width}px;
			}
			.monaco-editor .dirty-diff-added-pattern,
			.monaco-editor .dirty-diff-added-pattern:before,
			.monaco-editor .dirty-diff-modified-pattern,
			.monaco-editor .dirty-diff-modified-pattern:before {
				background-size: ${t.width}px ${t.width}px;
			}
			.monaco-editor .dirty-diff-added,
			.monaco-editor .dirty-diff-added-pattern,
			.monaco-editor .dirty-diff-modified,
			.monaco-editor .dirty-diff-modified-pattern,
			.monaco-editor .dirty-diff-deleted {
				opacity: ${t.visibility === "always" ? 1 : 0};
			}
		`;
    }
    enable() {
        this.enabled && this.disable(), this.transientDisposables.add(en.any(this.editorService.onDidCloseEditor, this.editorService.onDidVisibleEditorsChange)(()=>this.onEditorsChanged())), this.onEditorsChanged(), this.onDidActiveEditorChange(), this.enabled = !0;
    }
    disable() {
        if (this.enabled) {
            this.transientDisposables.clear(), this.quickDiffDecorationCount.set(0);
            for (const [t, e] of this.decorators.entries())e.dispose(), this.decorators.delete(t);
            this.enabled = !1;
        }
    }
    onDidActiveEditorChange() {
        this.transientDisposables.add(DI((t, e)=>{
            const n = this.activeEditor.read(t), i = this.editorService.activeTextEditorControl;
            if (!qS(i) || !n?.resource) {
                this.quickDiffDecorationCount.set(0);
                return;
            }
            const r = this.quickDiffModelService.createQuickDiffModelReference(n.resource);
            if (!r) {
                this.quickDiffDecorationCount.set(0);
                return;
            }
            e.add(r);
            const s = Yv(this, r.object.onDidChange, ()=>{
                const o = r.object.quickDiffs.filter((a)=>a.visible);
                return r.object.changes.filter((a)=>o.some((l)=>l.label === a.label)).length;
            });
            e.add(Jd((o)=>{
                const a = s.read(o);
                this.quickDiffDecorationCount.set(a);
            }));
        }));
    }
    onEditorsChanged() {
        for (const t of this.editorService.visibleTextEditorControls){
            if (!qS(t)) continue;
            const e = t.getModel();
            if (!e) continue;
            const n = t.getId();
            if (this.decorators.get(e.uri)?.has(n)) continue;
            const i = this.quickDiffModelService.createQuickDiffModelReference(e.uri);
            i && (this.decorators.has(e.uri) || this.decorators.set(e.uri, new da), this.decorators.get(e.uri).set(n, new LKe(t, i, !1, this.configurationService)));
        }
        for (const [t, e] of this.decorators.entries()){
            for (const n of e.keys())this.editorService.visibleTextEditorControls.find((r)=>qS(r) && r.getId() === n && this.uriIdentityService.extUri.isEqual(r.getModel()?.uri, t)) || e.deleteAndDispose(n);
            e.size === 0 && (e.dispose(), this.decorators.delete(t));
        }
    }
    dispose() {
        this.disable(), super.dispose();
    }
}, fTs = Re([
    F(0, gr),
    F(1, yi),
    F(2, Tlt),
    F(3, nh),
    F(4, Rr)
], fTs);

}
