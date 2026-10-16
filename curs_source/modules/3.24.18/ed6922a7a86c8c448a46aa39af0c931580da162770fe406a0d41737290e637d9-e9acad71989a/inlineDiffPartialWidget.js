import { OGi, ZJe, aWt } from "./A3u.js";
import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { ca, la } from "./aiMiscServices.js";
import { Y3, f_e } from "./cmdKStateService.js";
import { $n, vi } from "./commands.js";
import { D$, p_e } from "./diffChangeSource.js";
import { en } from "./dom_2.js";
import { FGi } from "./inlineDiffDecorationUtils.js";
import { anr } from "./inlineDiffWidget.css";
import { Ze, _t } from "./instantiation.js";
import { no, qr } from "./keybinding.js";
import { Yn, ya } from "./position.js";
import { Ve, nu, pe } from "./qIc.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { Jy } from "./renderCursorBlamePane.js";
import { oFh, ol_ } from "./renderInlineDiffPartialWidget.js";
import { Ex, zT } from "./touch.js";
import { x } from "./tslib.es6.js";
import { cl_ } from "./utils_27.js";
function sl_(e, t, n, i) {
    return Jy(()=>pe(oFh, {
            thisX: t,
            isOnEditorEnd: i
        }), e, n);
}
function al_(e, t) {
    return e.getDomNode() ? e.getTopForLineNumber(t) - e.getScrollTop() : null;
}
var lZ;
export { al_, lZ, sl_ };
var __wakaru_ll__initialized = false;
export function ll_() {
if (__wakaru_ll__initialized) return;
__wakaru_ll__initialized = true;
"use strict";
x(), en(), Ex(), Se(), vi(), Ze(), no(), Ha(), la(), f_e(), p_e(), FGi(), ya(), anr(), ol_(), cl_(), lZ = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h){
        super(), this.id = e, this.diffId = t, this.composerId = n, this._editor = r, this.keybindingService = s, this.commandService = o, this.analyticsService = a, this._reactiveStorageService = c, this._diffChangeSourceRegistry = l, this.instantiationService = u, this.cmdKStateService = h, this._overlayPosition = null, this._position = null, lZ._instances.add(this), this.id = e, this._isMultiDiffEditor = this._editor.getIsMultiDiffEditor?.() ?? !1, this._hasSeenMouseMoveInEditor = !this._isMultiDiffEditor, this._latestInteractionPosition = null, this._latestInteractionSource = "cursor", this.reactiveStorageRoot = this._register(this._reactiveStorageService.createScoped(this)), this._domNode = Ve("div.acceptRejectPartialEditWidget"), this._domNode.style.display = "none", this._overlayDomNode = Ve("div.acceptRejectPartialEditOverlay"), this._overlayDomNode.style.pointerEvents = "none", this._overlayDomNode.style.zIndex = "11", this._overlayDomNode.style.display = "none";
        const p = `${this.id}:overlay`;
        this._overlayWidget = {
            getId: ()=>p,
            getDomNode: ()=>this._overlayDomNode,
            getPosition: ()=>this._overlayPosition
        }, this._editor.addOverlayWidget(this._overlayWidget), [this.line, this.setLine] = this.reactiveStorageRoot.createSignal(i), [this.isOnEditorEnd, this.setIsOnEditorEnd] = this.reactiveStorageRoot.createSignal(!1), this.updatePosition(i), this._register(sl_(this._overlayDomNode, this, this.instantiationService, this.isOnEditorEnd)), this._register(zT.ignoreTarget(this._domNode)), this.allowEditorOverflow = !1, lZ.registerEditorMouseMoveListener(this._editor);
        const g = this._editor;
        this._register({
            dispose: ()=>lZ.deregisterEditorMouseMoveListener(g)
        }), this._editor.addContentWidget(this), this.layoutOverlayAtAnchor(), this._register(this._editor.onDidChangeModel(()=>{
            this.validatePosition(), this.updatePosition(this.line()), this.updateLatestInteraction(this._editor.getPosition(), "cursor"), this.refreshVisibility();
        })), this.reactiveStorageRoot.onChangeEffect({
            deps: [
                this.line
            ],
            onChange: ({ deps: f })=>{
                this.updatePosition(f[0]), this._editor.layoutContentWidget(this), this.layoutOverlayAtAnchor(), this.refreshVisibility();
            }
        }), this.updateLatestInteraction(this._editor.getPosition(), "cursor"), this.refreshVisibility(), this._register(this._editor.onMouseLeave(()=>{
            lZ.handleMouseLeaveEditor(this._editor);
        })), this._register(this._editor.onDidScrollChange(()=>{
            this.refreshVisibility(), this.layoutOverlayAtAnchor();
        })), this._register(this._editor.onDidLayoutChange(()=>{
            this.layoutOverlayAtAnchor(), this.refreshVisibility();
        })), this._register(this._editor.onDidChangeCursorPosition((f)=>{
            this.updateLatestInteraction(f.position, "cursor"), this.refreshVisibility();
        })), this._register(this._editor.onDidChangeCursorSelection((f)=>{
            this.updateLatestInteraction(f.selection.getStartPosition(), "cursor"), this.refreshVisibility();
        })), this._register(this._diffChangeSourceRegistry.onDidChange(()=>this.refreshVisibility())), this._register(this.cmdKStateService.onDiffAttachmentChanged(()=>this.refreshVisibility()));
    }
    static refreshWidgetsForEditor(e) {
        for (const t of this._instances)t._editor === e && t.refreshVisibility();
    }
    static refreshAllWidgets() {
        for (const e of this._instances)e.refreshVisibility();
    }
    static registerEditorMouseMoveListener(e) {
        const t = this._editorMouseMoveListeners.get(e);
        if (t) {
            t.count++;
            return;
        }
        const n = e.onMouseMove((i)=>{
            this.handleEditorMouseMoveEvent(e, i);
        });
        this._editorMouseMoveListeners.set(e, {
            count: 1,
            disposable: n
        });
    }
    static deregisterEditorMouseMoveListener(e) {
        const t = this._editorMouseMoveListeners.get(e);
        if (t) {
            if (t.count === 1) {
                t.disposable.dispose(), this._editorMouseMoveListeners.delete(e);
                return;
            }
            t.count--;
        }
    }
    static handleEditorMouseMoveEvent(e, t) {
        let n = !1;
        for (const i of this._instances)i._editor === e && (n = i.handleEditorMouseMove(t) || n);
        n && this.handleMouseMoveInEditor(e);
    }
    static handleMouseMoveInEditor(e) {
        const t = this._activeMouseEditor !== e, n = !this._isMouseInsideActiveEditor;
        if (this._activeMouseEditor = e, this._isMouseInsideActiveEditor = !0, t || n) {
            this.refreshAllWidgets();
            return;
        }
        this.refreshWidgetsForEditor(e);
    }
    static handleMouseLeaveEditor(e) {
        this._activeMouseEditor !== e || !this._isMouseInsideActiveEditor || (this._isMouseInsideActiveEditor = !1, this.refreshWidgetsForEditor(e));
    }
    getEditor() {
        return this._editor;
    }
    getComposerRequestID() {
        return this._diffChangeSourceRegistry.getDescriptorById(this.diffId)?.descriptor.metadata?.generationId;
    }
    updateLatestInteraction(e, t) {
        this._latestInteractionPosition = e, this._latestInteractionSource = t;
    }
    handleEditorMouseMove(e) {
        const t = e.target.element;
        return !e.target.position && nu(t) && this._overlayDomNode.contains(t) ? !1 : (e.target.position && (this._hasSeenMouseMoveInEditor = !0, this.updateLatestInteraction(e.target.position, "mouse")), !0);
    }
    hideOverlay() {
        this._overlayDomNode.style.display = "none";
    }
    layoutOverlayAtAnchor() {
        const e = this._editor.getLayoutInfo(), t = al_(this._editor, this.line());
        if (!e || t === null) {
            this._overlayPosition = null, this.hideOverlay(), this._editor.layoutOverlayWidget(this._overlayWidget);
            return;
        }
        this._overlayDomNode.style.width = `${e.contentWidth}px`, this._overlayPosition = {
            preference: {
                top: t,
                left: e.contentLeft
            }
        }, this._editor.layoutOverlayWidget(this._overlayWidget);
    }
    isLineVisible(e) {
        return this._editor.getVisibleRanges().some((t)=>t.startLineNumber <= e && e <= t.endLineNumber);
    }
    isWidgetOnEditorEnd(e, t) {
        for (const n of e.changes){
            const r = ZJe(e, n).endLineNumber + 1;
            if (Math.min(r, t) === this.line() && r > t) return !0;
        }
        return !1;
    }
    getFirstVisibleWidgetInEditor() {
        const e = Array.from(lZ._instances).filter((t)=>t._editor === this._editor).filter((t)=>t.isLineVisible(t.line()));
        return e.length === 0 ? null : (e.sort((t, n)=>{
            const i = t.line() - n.line();
            return i !== 0 ? i : t.id.localeCompare(n.id);
        }), e[0]);
    }
    refreshVisibility() {
        const e = this._editor.getModel();
        if (!e) {
            this.hideOverlay(), this.setIsOnEditorEnd(!1);
            return;
        }
        if (this._isMultiDiffEditor && !this._hasSeenMouseMoveInEditor) {
            this.hideOverlay(), this.setIsOnEditorEnd(!1);
            return;
        }
        const t = this.line();
        if (!this.isLineVisible(t)) {
            this.hideOverlay(), this.setIsOnEditorEnd(!1);
            return;
        }
        if (this._latestInteractionSource === "mouse" && lZ._activeMouseEditor && lZ._activeMouseEditor !== this._editor) {
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
        const r = i.descriptor, s = e.getLineCount(), o = aWt(r, new Yn(n.lineNumber, n.column));
        if (!o) {
            this.hideOverlay(), this.setIsOnEditorEnd(!1);
            return;
        }
        const a = OGi(r, o, s);
        let c = t === a;
        if (!c && !this._isMultiDiffEditor && !this.isLineVisible(a) && (c = this.getFirstVisibleWidgetInEditor() === this), !c) {
            this.hideOverlay(), this.setIsOnEditorEnd(!1);
            return;
        }
        this._overlayDomNode.style.display = "block", this.layoutOverlayAtAnchor(), this.setIsOnEditorEnd(this.isWidgetOnEditorEnd(r, s));
    }
    updatePosition(e) {
        const t = this._editor.getModel();
        if (!t || e <= 0 || e > t.getLineCount()) {
            this._position = null, this.hideOverlay(), this._overlayPosition = null;
            try {
                this._editor.layoutOverlayWidget(this._overlayWidget);
            } catch  {}
            return;
        }
        this._position = {
            position: {
                lineNumber: e,
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
        const e = this.line(), t = this._editor.getModel();
        if (!t || e <= 0 || e > t.getLineCount()) {
            this._position = null, this.hideOverlay(), this._overlayPosition = null;
            try {
                this._editor.layoutOverlayWidget(this._overlayWidget);
            } catch  {}
        }
    }
    dispose() {
        lZ._instances.delete(this), this._editor.removeContentWidget(this);
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
        const e = this._diffChangeSourceRegistry.getDescriptorById(this.diffId);
        if (!e) return;
        const t = aWt(e.descriptor, new Yn(this.line(), 1));
        if (t) return t.removedTextLines.join(`
`);
    }
}, lZ._instances = new Set, lZ._activeMouseEditor = null, lZ._isMouseInsideActiveEditor = !1, lZ._editorMouseMoveListeners = new Map, lZ = ie([
    C(5, qr),
    C(6, $n),
    C(7, ca),
    C(8, Do),
    C(9, D$),
    C(10, _t),
    C(11, Y3)
], lZ);

}
