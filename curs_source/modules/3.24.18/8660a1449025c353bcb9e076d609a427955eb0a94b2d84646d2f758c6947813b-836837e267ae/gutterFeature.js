import { Qe, st } from "./Iwo.js";
import { PT, wM } from "./actionbar.js";
import { Db, Ft, es } from "./actions_2.js";
import { Jd } from "./autorun.js";
import { Hi, Rr } from "./contextkey.js";
import { Vqd, rqo } from "./diffEditorSash.js";
import { Hn, Pr } from "./dom_2.js";
import { ELy, _zd } from "./editorGutter.js";
import { dnt, gS } from "./hover.js";
import { Bu, Iw } from "./hoverWidget.js";
import { It, dn } from "./instantiation.js";
import { DD, eyt, wd } from "./lineRange.js";
import { Jc } from "./observable.js";
import { Im, W3 } from "./offsetRange.js";
import { Qs, qt } from "./range.js";
import { I7, Swe } from "./rangeMapping.js";
import { LQ, lhe } from "./textEdit.js";
import { DBt, koi } from "./textModelText.js";
import { Gyt, wwe } from "./toolbar_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Yv } from "./utils_10.js";
import { bwe } from "./utils_13.js";
import { vzd, wqo } from "./utils_15.js";
import { DI, Fyt, Jsi, Zo, _7o, bc, li, twe, xNy, xv } from "./ze.js";
var XTr, woi, ZTr, Cqo, QTr;
export { Cqo, QTr, XTr, ZTr, woi };
var __wakaru_ILy_initialized = false;
export function ILy() {
if (__wakaru_ILy_initialized) return;
__wakaru_ILy_initialized = true;
"use strict";
E(), Hn(), PT(), Iw(), Qe(), Jc(), wwe(), es(), Hi(), gS(), It(), DD(), W3(), Qs(), LQ(), Swe(), koi(), vzd(), Vqd(), bwe(), ELy(), XTr = [], woi = 35, ZTr = class extends st {
    constructor(t, e, n, i, r, s, o, a, l){
        super(), this._diffModel = e, this._editors = n, this._options = i, this._sashLayout = r, this._boundarySashes = s, this._instantiationService = o, this._contextKeyService = a, this._menuService = l, this._menu = this._register(this._menuService.createMenu(Ft.DiffEditorHunkToolbar, this._contextKeyService)), this._actions = Yv(this, this._menu.onDidChange, ()=>this._menu.getActions()), this._hasActions = this._actions.map((u)=>u.length > 0), this._showSash = Zo(this, (u)=>this._options.renderSideBySide.read(u) && this._hasActions.read(u)), this.width = Zo(this, (u)=>this._hasActions.read(u) ? woi : 0), this.elements = xv("div.gutter@gutter", {
            style: {
                position: "absolute",
                height: "100%",
                width: woi + "px"
            }
        }, []), this._currentDiff = Zo(this, (u)=>{
            const d = this._diffModel.read(u);
            if (!d) return;
            const h = d.diff.read(u)?.mappings, p = this._editors.modifiedCursor.read(u);
            if (p) return h?.find((g)=>g.lineRangeMapping.modified.contains(p.lineNumber));
        }), this._selectedDiffs = Zo(this, (u)=>{
            const h = this._diffModel.read(u)?.diff.read(u);
            if (!h) return XTr;
            const p = this._editors.modifiedSelections.read(u);
            if (p.every((b)=>b.isEmpty())) return XTr;
            const g = new eyt(p.map((b)=>wd.fromRangeInclusive(b))), _ = h.mappings.filter((b)=>b.lineRangeMapping.innerChanges && g.intersects(b.lineRangeMapping.modified)).map((b)=>({
                    mapping: b,
                    rangeMappings: b.lineRangeMapping.innerChanges.filter((y)=>p.some((S)=>qt.areIntersecting(y.modifiedRange, S)))
                }));
            return _.length === 0 || _.every((b)=>b.rangeMappings.length === 0) ? XTr : _;
        }), this._register(xNy(t, this.elements.root)), this._register(li(this.elements.root, "click", ()=>{
            this._editors.modified.focus();
        })), this._register(Fyt(this.elements.root, {
            display: this._hasActions.map((u)=>u ? "block" : "none")
        })), twe(this, (u)=>this._showSash.read(u) ? new rqo(t, this._sashLayout.dimensions, this._options.enableSplitViewResizing, this._boundarySashes, _7o(this, (h)=>this._sashLayout.sashLeft.read(h) - woi, (h, p)=>this._sashLayout.sashLeft.set(h + woi, p)), ()=>this._sashLayout.resetSash()) : void 0).recomputeInitiallyAndOnChange(this._store);
        const c = Zo(this, (u)=>{
            const d = this._diffModel.read(u);
            if (!d) return [];
            const h = d.diff.read(u);
            if (!h) return [];
            const p = this._selectedDiffs.read(u);
            if (p.length > 0) {
                const f = I7.fromRangeMappings(p.flatMap((_)=>_.rangeMappings));
                return [
                    new Cqo(f, !0, Ft.DiffEditorSelectionToolbar, void 0, d.model.original.uri, d.model.modified.uri)
                ];
            }
            const g = this._currentDiff.read(u);
            return h.mappings.map((f)=>new Cqo(f.lineRangeMapping.withInnerChangesFromLineRanges(), f.lineRangeMapping === g?.lineRangeMapping, Ft.DiffEditorHunkToolbar, void 0, d.model.original.uri, d.model.modified.uri));
        });
        this._register(new _zd(this._editors.modified, this.elements.root, {
            getIntersectingGutterItems: (u, d)=>c.read(d),
            createView: (u, d)=>this._instantiationService.createInstance(QTr, u, d, this)
        })), this._register(li(this.elements.gutter, Pr.MOUSE_WHEEL, (u)=>{
            this._editors.modified.getOption(108).handleMouseWheel && this._editors.modified.delegateScrollFromMouseWheelEvent(u);
        }, {
            passive: !1
        }));
    }
    computeStagedValue(t) {
        const e = t.innerChanges ?? [], n = new DBt(this._editors.modifiedModel.get()), i = new DBt(this._editors.original.getModel());
        return new lhe(e.map((o)=>o.toTextEdit(n))).apply(i);
    }
    layout(t) {
        this.elements.gutter.style.left = t + "px";
    }
}, ZTr = Re([
    F(6, dn),
    F(7, Rr),
    F(8, Db)
], ZTr), Cqo = class {
    constructor(t, e, n, i, r, s){
        this.mapping = t, this.showAlways = e, this.menuId = n, this.rangeOverride = i, this.originalUri = r, this.modifiedUri = s;
    }
    get id() {
        return this.mapping.modified.toString();
    }
    get range() {
        return this.rangeOverride ?? this.mapping.modified;
    }
}, QTr = class extends st {
    constructor(t, e, n, i){
        super(), this._item = t, this._elements = xv("div.gutterItem", {
            style: {
                height: "20px",
                width: "34px"
            }
        }, [
            xv("div.background@background", {}, []),
            xv("div.buttons@buttons", {}, [])
        ]), this._showAlways = this._item.map(this, (s)=>s.showAlways), this._menuId = this._item.map(this, (s)=>s.menuId), this._isSmall = bc(this, !1), this._lastItemRange = void 0, this._lastViewRange = void 0;
        const r = this._register(i.createInstance(dnt, "element", {
            instantHover: !0
        }, {
            position: {
                hoverPosition: Bu.RIGHT
            }
        }));
        this._register(Jsi(e, this._elements.root)), this._register(Jd((s)=>{
            const o = this._showAlways.read(s);
            this._elements.root.classList.toggle("noTransition", !0), this._elements.root.classList.toggle("showAlways", o), setTimeout(()=>{
                this._elements.root.classList.toggle("noTransition", !1);
            }, 0);
        })), this._register(DI((s, o)=>{
            this._elements.buttons.replaceChildren();
            const a = o.add(i.createInstance(Gyt, this._elements.buttons, this._menuId.read(s), {
                orientation: wM.VERTICAL,
                hoverDelegate: r,
                toolbarOptions: {
                    primaryGroup: (l)=>l.startsWith("primary")
                },
                overflowBehavior: {
                    maxItems: this._isSmall.read(s) ? 1 : 3
                },
                hiddenItemStrategy: 0,
                actionRunner: o.add(new wqo(()=>{
                    const l = this._item.read(void 0), c = l.mapping;
                    return {
                        mapping: c,
                        originalWithModifiedChanges: n.computeStagedValue(c),
                        originalUri: l.originalUri,
                        modifiedUri: l.modifiedUri
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
    layout(t, e) {
        this._lastItemRange = t, this._lastViewRange = e;
        let n = this._elements.buttons.clientHeight;
        this._isSmall.set(this._item.get().mapping.original.startLineNumber === 1 && t.length < 30, void 0), n = this._elements.buttons.clientHeight;
        const i = t.length / 2 - n / 2, r = n;
        let s = t.start + i;
        const o = Im.tryCreate(r, e.endExclusive - r - n), a = Im.tryCreate(t.start + r, t.endExclusive - n - r);
        a && o && a.start < a.endExclusive && (s = o.clip(s), s = a.clip(s)), this._elements.buttons.style.top = `${s - t.start}px`;
    }
}, QTr = Re([
    F(3, dn)
], QTr);

}
