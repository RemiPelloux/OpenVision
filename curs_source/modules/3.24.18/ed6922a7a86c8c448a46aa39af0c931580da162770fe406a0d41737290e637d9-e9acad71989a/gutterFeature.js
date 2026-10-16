import { Se, we } from "./HVr.js";
import { Zm, f1 } from "./actionbar.js";
import { C, Re, Zl, ei, ie } from "./actions_2.js";
import { Hc } from "./autorun.js";
import { dn, xn } from "./contextkey.js";
import { Jns, b7c } from "./diffEditorSash.js";
import { Fn, en } from "./dom_2.js";
import { G7c, RSg } from "./editorGutter.js";
import { Nle, du } from "./hover.js";
import { Tb, wl } from "./hoverWidget.js";
import { Ze, _t } from "./instantiation.js";
import { Vl, hA, wze } from "./lineRange.js";
import { qa } from "./observable.js";
import { Mh, uR } from "./offsetRange.js";
import { Ds, Nyg, Xo, Xt, cu, kvn, sKe, sYr, tw, ule } from "./qIc.js";
import { dt, qi } from "./range.js";
import { C3, Ple } from "./rangeMapping.js";
import { CJ, yW } from "./textEdit.js";
import { hmt, jvn } from "./textModelText.js";
import { CM, XV } from "./toolbar_2.js";
import { x } from "./tslib.es6.js";
import { qp } from "./utils_10.js";
import { Dle } from "./utils_13.js";
import { W7c, _is } from "./utils_15.js";
var gyi, qvn, fyi, bis, vyi;
export { bis, fyi, gyi, qvn, vyi };
var __wakaru_DSg_initialized = false;
export function DSg() {
if (__wakaru_DSg_initialized) return;
__wakaru_DSg_initialized = true;
"use strict";
x(), en(), Zm(), Tb(), Se(), qa(), CM(), ei(), dn(), du(), Ze(), hA(), uR(), qi(), yW(), Ple(), jvn(), W7c(), b7c(), Dle(), RSg(), gyi = [], qvn = 35, fyi = class extends we {
    constructor(e, t, n, i, r, s, o, a, c){
        super(), this._diffModel = t, this._editors = n, this._options = i, this._sashLayout = r, this._boundarySashes = s, this._instantiationService = o, this._contextKeyService = a, this._menuService = c, this._menu = this._register(this._menuService.createMenu(Re.DiffEditorHunkToolbar, this._contextKeyService)), this._actions = qp(this, this._menu.onDidChange, ()=>this._menu.getActions()), this._hasActions = this._actions.map((u)=>u.length > 0), this._showSash = Ds(this, (u)=>this._options.renderSideBySide.read(u) && this._hasActions.read(u)), this.width = Ds(this, (u)=>this._hasActions.read(u) ? qvn : 0), this.elements = cu("div.gutter@gutter", {
            style: {
                position: "absolute",
                height: "100%",
                width: qvn + "px"
            }
        }, []), this._currentDiff = Ds(this, (u)=>{
            const h = this._diffModel.read(u);
            if (!h) return;
            const p = h.diff.read(u)?.mappings, g = this._editors.modifiedCursor.read(u);
            if (g) return p?.find((f)=>f.lineRangeMapping.modified.contains(g.lineNumber));
        }), this._selectedDiffs = Ds(this, (u)=>{
            const p = this._diffModel.read(u)?.diff.read(u);
            if (!p) return gyi;
            const g = this._editors.modifiedSelections.read(u);
            if (g.every((y)=>y.isEmpty())) return gyi;
            const f = new wze(g.map((y)=>Vl.fromRangeInclusive(y))), b = p.mappings.filter((y)=>y.lineRangeMapping.innerChanges && f.intersects(y.lineRangeMapping.modified)).map((y)=>({
                    mapping: y,
                    rangeMappings: y.lineRangeMapping.innerChanges.filter((T)=>g.some((E)=>dt.areIntersecting(T.modifiedRange, E)))
                }));
            return b.length === 0 || b.every((y)=>y.rangeMappings.length === 0) ? gyi : b;
        }), this._register(Nyg(e, this.elements.root)), this._register(Xt(this.elements.root, "click", ()=>{
            this._editors.modified.focus();
        })), this._register(sKe(this.elements.root, {
            display: this._hasActions.map((u)=>u ? "block" : "none")
        })), ule(this, (u)=>this._showSash.read(u) ? new Jns(e, this._sashLayout.dimensions, this._options.enableSplitViewResizing, this._boundarySashes, sYr(this, (p)=>this._sashLayout.sashLeft.read(p) - qvn, (p, g)=>this._sashLayout.sashLeft.set(p + qvn, g)), ()=>this._sashLayout.resetSash()) : void 0).recomputeInitiallyAndOnChange(this._store);
        const l = Ds(this, (u)=>{
            const h = this._diffModel.read(u);
            if (!h) return [];
            const p = h.diff.read(u);
            if (!p) return [];
            const g = this._selectedDiffs.read(u);
            if (g.length > 0) {
                const v = C3.fromRangeMappings(g.flatMap((b)=>b.rangeMappings));
                return [
                    new bis(v, !0, Re.DiffEditorSelectionToolbar, void 0, h.model.original.uri, h.model.modified.uri)
                ];
            }
            const f = this._currentDiff.read(u);
            return p.mappings.map((v)=>new bis(v.lineRangeMapping.withInnerChangesFromLineRanges(), v.lineRangeMapping === f?.lineRangeMapping, Re.DiffEditorHunkToolbar, void 0, h.model.original.uri, h.model.modified.uri));
        });
        this._register(new G7c(this._editors.modified, this.elements.root, {
            getIntersectingGutterItems: (u, h)=>l.read(h),
            createView: (u, h)=>this._instantiationService.createInstance(vyi, u, h, this)
        })), this._register(Xt(this.elements.gutter, Fn.MOUSE_WHEEL, (u)=>{
            this._editors.modified.getOption(108).handleMouseWheel && this._editors.modified.delegateScrollFromMouseWheelEvent(u);
        }, {
            passive: !1
        }));
    }
    computeStagedValue(e) {
        const t = e.innerChanges ?? [], n = new hmt(this._editors.modifiedModel.get()), i = new hmt(this._editors.original.getModel());
        return new CJ(t.map((o)=>o.toTextEdit(n))).apply(i);
    }
    layout(e) {
        this.elements.gutter.style.left = e + "px";
    }
}, fyi = ie([
    C(6, _t),
    C(7, xn),
    C(8, Zl)
], fyi), bis = class {
    constructor(e, t, n, i, r, s){
        this.mapping = e, this.showAlways = t, this.menuId = n, this.rangeOverride = i, this.originalUri = r, this.modifiedUri = s;
    }
    get id() {
        return this.mapping.modified.toString();
    }
    get range() {
        return this.rangeOverride ?? this.mapping.modified;
    }
}, vyi = class extends we {
    constructor(e, t, n, i){
        super(), this._item = e, this._elements = cu("div.gutterItem", {
            style: {
                height: "20px",
                width: "34px"
            }
        }, [
            cu("div.background@background", {}, []),
            cu("div.buttons@buttons", {}, [])
        ]), this._showAlways = this._item.map(this, (s)=>s.showAlways), this._menuId = this._item.map(this, (s)=>s.menuId), this._isSmall = Xo(this, !1), this._lastItemRange = void 0, this._lastViewRange = void 0;
        const r = this._register(i.createInstance(Nle, "element", {
            instantHover: !0
        }, {
            position: {
                hoverPosition: wl.RIGHT
            }
        }));
        this._register(kvn(t, this._elements.root)), this._register(Hc((s)=>{
            const o = this._showAlways.read(s);
            this._elements.root.classList.toggle("noTransition", !0), this._elements.root.classList.toggle("showAlways", o), setTimeout(()=>{
                this._elements.root.classList.toggle("noTransition", !1);
            }, 0);
        })), this._register(tw((s, o)=>{
            this._elements.buttons.replaceChildren();
            const a = o.add(i.createInstance(XV, this._elements.buttons, this._menuId.read(s), {
                orientation: f1.VERTICAL,
                hoverDelegate: r,
                toolbarOptions: {
                    primaryGroup: (c)=>c.startsWith("primary")
                },
                overflowBehavior: {
                    maxItems: this._isSmall.read(s) ? 1 : 3
                },
                hiddenItemStrategy: 0,
                actionRunner: o.add(new _is(()=>{
                    const c = this._item.read(void 0), l = c.mapping;
                    return {
                        mapping: l,
                        originalWithModifiedChanges: n.computeStagedValue(l),
                        originalUri: c.originalUri,
                        modifiedUri: c.modifiedUri
                    };
                })),
                menuOptions: {
                    shouldForwardArgs: !0
                }
            }));
            o.add(a.onDidChangeMenuItems(()=>{
                this._lastItemRange && this.layout(this._lastItemRange, this._lastViewRange);
            }));
        }));
    }
    layout(e, t) {
        this._lastItemRange = e, this._lastViewRange = t;
        let n = this._elements.buttons.clientHeight;
        this._isSmall.set(this._item.get().mapping.original.startLineNumber === 1 && e.length < 30, void 0), n = this._elements.buttons.clientHeight;
        const i = e.length / 2 - n / 2, r = n;
        let s = e.start + i;
        const o = Mh.tryCreate(r, t.endExclusive - r - n), a = Mh.tryCreate(e.start + r, e.endExclusive - n - r);
        a && o && a.start < a.endExclusive && (s = o.clip(s), s = a.clip(s)), this._elements.buttons.style.top = `${s - e.start}px`;
    }
}, vyi = ie([
    C(3, _t)
], vyi);

}
