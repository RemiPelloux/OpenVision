import { Qe, st } from "./Iwo.js";
import { GIk, HIk } from "./Ycg.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { X7, dPe } from "./cmdKStateService.js";
import { nr, rs } from "./commands.js";
import { lPe, mX } from "./diffChangeSource.js";
import { Hn } from "./dom_2.js";
import { fXr } from "./inlineDiffDecorationUtils.js";
import { zcs } from "./inlineDiffWidget.css";
import { It, dn } from "./instantiation.js";
import { Al, ru } from "./keybinding.js";
import { er, jc } from "./position.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { WIk } from "./renderInlineDiffPartialWidget.js";
import { fO, kM } from "./touch.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { qIk } from "./utils_27.js";
import { YTn, gXr, hCt } from "./yBp.js";
import { $u, Ii } from "./ze.js";
var Dle;
export { Dle };
var __wakaru_zIk_initialized = false;
export function zIk() {
if (__wakaru_zIk_initialized) return;
__wakaru_zIk_initialized = true;
"use strict";
E(), Hn(), fO(), Qe(), rs(), It(), ru(), el(), Ss(), dPe(), lPe(), fXr(), jc(), zcs(), WIk(), qIk(), Dle = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d){
        super(), this.id = t, this.diffId = e, this.composerId = n, this._editor = r, this.keybindingService = s, this.commandService = o, this.analyticsService = a, this._reactiveStorageService = l, this._diffChangeSourceRegistry = c, this.instantiationService = u, this.cmdKStateService = d, this._overlayPosition = null, this._position = null, Dle._instances.add(this), this.id = t, this._isMultiDiffEditor = this._editor.getIsMultiDiffEditor?.() ?? !1, this._hasSeenMouseMoveInEditor = !this._isMultiDiffEditor, this._latestInteractionPosition = null, this._latestInteractionSource = "cursor", this.reactiveStorageRoot = this._register(this._reactiveStorageService.createScoped(this)), this._domNode = Ii("div.acceptRejectPartialEditWidget"), this._domNode.style.display = "none", this._overlayDomNode = Ii("div.acceptRejectPartialEditOverlay"), this._overlayDomNode.style.pointerEvents = "none", this._overlayDomNode.style.zIndex = "11", this._overlayDomNode.style.display = "none";
        const h = `${this.id}:overlay`;
        this._overlayWidget = {
            getId: ()=>h,
            getDomNode: ()=>this._overlayDomNode,
            getPosition: ()=>this._overlayPosition
        }, this._editor.addOverlayWidget(this._overlayWidget), [this.line, this.setLine] = this.reactiveStorageRoot.createSignal(i), [this.isOnEditorEnd, this.setIsOnEditorEnd] = this.reactiveStorageRoot.createSignal(!1), this.updatePosition(i), this._register(HIk(this._overlayDomNode, this, this.instantiationService, this.isOnEditorEnd)), this._register(kM.ignoreTarget(this._domNode)), this.allowEditorOverflow = !1, Dle.registerEditorMouseMoveListener(this._editor);
        const p = this._editor;
        this._register({
            dispose: ()=>Dle.deregisterEditorMouseMoveListener(p)
        }), this._editor.addContentWidget(this), this.layoutOverlayAtAnchor(), this._register(this._editor.onDidChangeModel(()=>{
            this.validatePosition(), this.updatePosition(this.line()), this.updateLatestInteraction(this._editor.getPosition(), "cursor"), this.refreshVisibility();
        })), this.reactiveStorageRoot.onChangeEffect({
            deps: [
                this.line
            ],
            onChange: ({ deps: g })=>{
                this.updatePosition(g[0]), this._editor.layoutContentWidget(this), this.layoutOverlayAtAnchor(), this.refreshVisibility();
            }
        }), this.updateLatestInteraction(this._editor.getPosition(), "cursor"), this.refreshVisibility(), this._register(this._editor.onMouseLeave(()=>{
            Dle.handleMouseLeaveEditor(this._editor);
        })), this._register(this._editor.onDidScrollChange(()=>{
            this.refreshVisibility(), this.layoutOverlayAtAnchor();
        })), this._register(this._editor.onDidLayoutChange(()=>{
            this.layoutOverlayAtAnchor(), this.refreshVisibility();
        })), this._register(this._editor.onDidChangeCursorPosition((g)=>{
            this.updateLatestInteraction(g.position, "cursor"), this.refreshVisibility();
        })), this._register(this._editor.onDidChangeCursorSelection((g)=>{
            this.updateLatestInteraction(g.selection.getStartPosition(), "cursor"), this.refreshVisibility();
        })), this._register(this._diffChangeSourceRegistry.onDidChange(()=>this.refreshVisibility())), this._register(this.cmdKStateService.onDiffAttachmentChanged(()=>this.refreshVisibility()));
    }
    static refreshWidgetsForEditor(t) {
        for (const e of this._instances)e._editor === t && e.refreshVisibility();
    }
    static refreshAllWidgets() {
        for (const t of this._instances)t.refreshVisibility();
    }
    static registerEditorMouseMoveListener(t) {
        const e = this._editorMouseMoveListeners.get(t);
        if (e) {
            e.count++;
            return;
        }
        const n = t.onMouseMove((i)=>{
            this.handleEditorMouseMoveEvent(t, i);
        });
        this._editorMouseMoveListeners.set(t, {
            count: 1,
            disposable: n
        });
    }
    static deregisterEditorMouseMoveListener(t) {
        const e = this._editorMouseMoveListeners.get(t);
        if (e) {
            if (e.count === 1) {
                e.disposable.dispose(), this._editorMouseMoveListeners.delete(t);
                return;
            }
            e.count--;
        }
    }
    static handleEditorMouseMoveEvent(t, e) {
        let n = !1;
        for (const i of this._instances)i._editor === t && (n = i.handleEditorMouseMove(e) || n);
        n && this.handleMouseMoveInEditor(t);
    }
    static handleMouseMoveInEditor(t) {
        const e = this._activeMouseEditor !== t, n = !this._isMouseInsideActiveEditor;
        if (this._activeMouseEditor = t, this._isMouseInsideActiveEditor = !0, e || n) {
            this.refreshAllWidgets();
            return;
        }
        this.refreshWidgetsForEditor(t);
    }
    static handleMouseLeaveEditor(t) {
        this._activeMouseEditor !== t || !this._isMouseInsideActiveEditor || (this._isMouseInsideActiveEditor = !1, this.refreshWidgetsForEditor(t));
    }
    getEditor() {
        return this._editor;
    }
    getComposerRequestID() {
        return this._diffChangeSourceRegistry.getDescriptorById(this.diffId)?.descriptor.metadata?.generationId;
    }
    updateLatestInteraction(t, e) {
        this._latestInteractionPosition = t, this._latestInteractionSource = e;
    }
    handleEditorMouseMove(t) {
        const e = t.target.element;
        return !t.target.position && $u(e) && this._overlayDomNode.contains(e) ? !1 : (t.target.position && (this._hasSeenMouseMoveInEditor = !0, this.updateLatestInteraction(t.target.position, "mouse")), !0);
    }
    hideOverlay() {
        this._overlayDomNode.style.display = "none";
    }
    layoutOverlayAtAnchor() {
        const t = this._editor.getLayoutInfo(), e = GIk(this._editor, this.line());
        if (!t || e === null) {
            this._overlayPosition = null, this.hideOverlay(), this._editor.layoutOverlayWidget(this._overlayWidget);
            return;
        }
        this._overlayDomNode.style.width = `${t.contentWidth}px`, this._overlayPosition = {
            preference: {
                top: e,
                left: t.contentLeft
            }
        }, this._editor.layoutOverlayWidget(this._overlayWidget);
    }
    isLineVisible(t) {
        return this._editor.getVisibleRanges().some((e)=>e.startLineNumber <= t && t <= e.endLineNumber);
    }
    isWidgetOnEditorEnd(t, e) {
        for (const n of t.changes){
            const r = hCt(t, n).endLineNumber + 1;
            if (Math.min(r, e) === this.line() && r > e) return !0;
        }
        return !1;
    }
    getFirstVisibleWidgetInEditor() {
        const t = Array.from(Dle._instances).filter((e)=>e._editor === this._editor).filter((e)=>e.isLineVisible(e.line()));
        return t.length === 0 ? null : (t.sort((e, n)=>{
            const i = e.line() - n.line();
            return i !== 0 ? i : e.id.localeCompare(n.id);
        }), t[0]);
    }
    refreshVisibility() {
        const t = this._editor.getModel();
        if (!t) {
            this.hideOverlay(), this.setIsOnEditorEnd(!1);
            return;
        }
        if (this._isMultiDiffEditor && !this._hasSeenMouseMoveInEditor) {
            this.hideOverlay(), this.setIsOnEditorEnd(!1);
            return;
        }
        const e = this.line();
        if (!this.isLineVisible(e)) {
            this.hideOverlay(), this.setIsOnEditorEnd(!1);
            return;
        }
        if (this._latestInteractionSource === "mouse" && Dle._activeMouseEditor && Dle._activeMouseEditor !== this._editor) {
            this.hideOverlay(), this.setIsOnEditorEnd(!1);
            return;
        }
        const n = this._latestInteractionPosition ?? (this._latestInteractionSource === "mouse" ? null : this._editor.getPosition());
        if (!n) {
            this._latestInteractionSource === "mouse" && this.hideOverlay(), this.setIsOnEditorEnd(!1);
            return;
        }
        const i = this._diffChangeSourceRegistry.getDescriptorById(this.diffId);
        if (!i) {
            this.hideOverlay(), this.setIsOnEditorEnd(!1);
            return;
        }
        const r = i.descriptor, s = t.getLineCount(), o = YTn(r, new er(n.lineNumber, n.column));
        if (!o) {
            this.hideOverlay(), this.setIsOnEditorEnd(!1);
            return;
        }
        const a = gXr(r, o, s);
        let l = e === a;
        if (!l && !this._isMultiDiffEditor && !this.isLineVisible(a) && (l = this.getFirstVisibleWidgetInEditor() === this), !l) {
            this.hideOverlay(), this.setIsOnEditorEnd(!1);
            return;
        }
        this._overlayDomNode.style.display = "block", this.layoutOverlayAtAnchor(), this.setIsOnEditorEnd(this.isWidgetOnEditorEnd(r, s));
    }
    updatePosition(t) {
        const e = this._editor.getModel();
        if (!e || t <= 0 || t > e.getLineCount()) {
            this._position = null, this.hideOverlay(), this._overlayPosition = null;
            try {
                this._editor.layoutOverlayWidget(this._overlayWidget);
            } catch  {}
            return;
        }
        this._position = {
            position: {
                lineNumber: t,
                column: 1
            },
            preference: [
                0,
                2
            ]
        };
        try {
            this._editor.layoutContentWidget(this);
            try {
                this._editor.layoutOverlayWidget(this._overlayWidget);
            } catch  {}
        } catch  {
            this._position = null;
        }
    }
    validatePosition() {
        const t = this.line(), e = this._editor.getModel();
        if (!e || t <= 0 || t > e.getLineCount()) {
            this._position = null, this.hideOverlay(), this._overlayPosition = null;
            try {
                this._editor.layoutOverlayWidget(this._overlayWidget);
            } catch  {}
        }
    }
    dispose() {
        Dle._instances.delete(this), this._editor.removeContentWidget(this);
        try {
            this._editor.removeOverlayWidget(this._overlayWidget);
        } catch  {}
        this._domNode && this._domNode.remove(), this._overlayDomNode && this._overlayDomNode.remove(), super.dispose();
    }
    getId() {
        return this.id;
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        return this._position;
    }
    getRemovedText() {
        const t = this._diffChangeSourceRegistry.getDescriptorById(this.diffId);
        if (!t) return;
        const e = YTn(t.descriptor, new er(this.line(), 1));
        if (e) return e.removedTextLines.join(`
`);
    }
}, Dle._instances = new Set, Dle._activeMouseEditor = null, Dle._isMouseInsideActiveEditor = !1, Dle._editorMouseMoveListeners = new Map, Dle = Re([
    F(5, Al),
    F(6, nr),
    F(7, Qr),
    F(8, sa),
    F(9, mX),
    F(10, dn),
    F(11, X7)
], Dle);

}
