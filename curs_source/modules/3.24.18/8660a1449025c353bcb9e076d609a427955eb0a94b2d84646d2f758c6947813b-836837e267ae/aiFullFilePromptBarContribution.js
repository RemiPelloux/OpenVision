import { Gt, Qe, Vn, st, tt } from "./Iwo.js";
import { _Cg, lxk } from "./Ycg.js";
import { Q71 } from "./aiFullFilePromptBar.css";
import { cxk } from "./aiFullFilePromptBar.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Hi, Rr } from "./contextkey.js";
import { lPe, mX } from "./diffChangeSource.js";
import { Hn, Xde, ws } from "./dom_2.js";
import { Ud } from "./editorExtensions.js";
import { G4, Rbe } from "./inlineDiffService.js";
import { It, dn } from "./instantiation.js";
import { Xh } from "./ipa.js";
import { ES, hP } from "./lazy.js";
import { Ki, Ot } from "./network.js";
import { MB } from "./pathUtils.js";
import { $j, c_e } from "./peekView.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { Zi, ki } from "./storage_2.js";
import { fO, kM } from "./touch.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { wu } from "./utilities_3.js";
import { Sr, yr } from "./workspace.js";
import { aPe } from "./yBp.js";
import { Ii, sv } from "./ze.js";
var EEt, ius;
export { EEt, ius };
var __wakaru_bCg_initialized = false;
export function bCg() {
if (__wakaru_bCg_initialized) return;
__wakaru_bCg_initialized = true;
"use strict";
E(), Ud(), hP(), Qe(), It(), el(), Hn(), fO(), Gt(), Ki(), Hi(), wu(), Zi(), Sr(), Pl(), MB(), lPe(), G4(), c_e(), Q71(), cxk(), EEt = class extends st {
    constructor(t, e, n, i, r, s, o){
        super(), this._instantiationService = e, this._reactiveStorageService = n, this._contextKeyService = i, this._diffChangeSourceRegistry = r, this._composerDataService = s, this._storageService = o, this._editor = t, this._breadcrumbsControlsDispose = this._register(new Vn), this.reactiveStorageRoot = this._register(this._reactiveStorageService.createScoped(this)), this._widget = new ES(()=>{
            const p = this._register(this._instantiationService.createInstance(ius, this._editor));
            return this._register(p.onClick((g)=>{})), p;
        });
        const a = $j.inPeekEditor.getValue(this._contextKeyService), l = this._editor.getDomNode(), c = Array.from(l?.classList.values() ?? []).find((p)=>p.includes("monaco-diff-editor")), d = l?.getAttribute("data-uri")?.startsWith("output:");
        if (!a && !c && !d) {
            const p = Xh(this._storageService, "reviewControlLocation");
            this._register(p);
            const g = ()=>{
                const S = this._editor.getContainerDomNode()?.closest(".editor-group-container"), k = S?.querySelector(".title"), C = S?.querySelector(".label-container"), T = !!(k && k.classList.contains("breadcrumbs")), I = S?.querySelector(".breadcrumbs-below-tabs"), A = S?.querySelector(".breadcrumbs-below-tabs .breadcrumbs-control"), P = !!(A && !A.classList.contains("hidden")), M = T || P, O = this._diffChangeSourceRegistry.getDescriptors().filter((G)=>G.metadata?.source === Rbe).filter((G)=>!this._composerDataService.isWorktreeComposer(G.metadata?.composerId)).filter((G)=>!aPe(G.uri)).length > 0, N = p.get() === "breadcrumb", U = this._editor.getModel()?.uri?.scheme === Ot.git;
                O && !U && (!N || !M) ? this._widget.value.show() : this._widget.value.hide();
                const $ = T ? C || void 0 : I || void 0;
                if (N && O && M && !!$ && $) {
                    const G = this._editor.hasTextFocus() || this._editor.hasWidgetFocus(), q = S?.querySelector("[data-breadcrumb-review-controls]");
                    if (!(G || !q)) return;
                    k && k.classList.contains("breadcrumbs") && !k.classList.contains("has-review-controls") && k.classList.add("has-review-controls");
                    const V = $.querySelector(".breadcrumbs-control");
                    let Y = $.querySelector(".breadcrumbs-row");
                    Y ? V && V.parentElement !== Y && Y.appendChild(V) : (Y = document.createElement("div"), Y.className = "breadcrumbs-row", V && V.parentElement ? (V.parentElement.insertBefore(Y, V), Y.appendChild(V)) : $.appendChild(Y)), G && q && q !== this._breadcrumbsControlsContainer && q.remove();
                    let J = !this._breadcrumbsControlsDispose.value;
                    (!this._breadcrumbsControlsContainer || !this._breadcrumbsControlsContainer.isConnected) && (this._breadcrumbsControlsDispose.clear(), J = !0, this._breadcrumbsControlsContainer = document.createElement("div"), this._breadcrumbsControlsContainer.setAttribute("data-breadcrumb-review-controls", "true")), this._breadcrumbsControlsContainer.parentElement !== Y && Y.appendChild(this._breadcrumbsControlsContainer), J && (this._breadcrumbsControlsDispose.value = lxk(this._breadcrumbsControlsContainer, this._instantiationService, this._editor));
                    try {
                        const Q = $.querySelector(".breadcrumbs-control.relative-path .monaco-breadcrumbs");
                        if (Q) {
                            const te = ws(Q);
                            te.requestAnimationFrame(()=>{
                                te.requestAnimationFrame(()=>{
                                    Q.scrollLeft = Q.scrollWidth;
                                });
                            });
                        }
                    } catch (Q) {
                        console.error("Error ensuring breadcrumbs scroll to the end for review controls", Q);
                    }
                } else this._clearBreadcrumbReviewControls();
            };
            this._register(this._diffChangeSourceRegistry.onDidChange(g)), p.recomputeInitiallyAndOnChange(this._store, g);
            const f = Xh(this._storageService, "unifiedAppLayout");
            this._register(f), f.recomputeInitiallyAndOnChange(this._store, g), this.reactiveStorageRoot.onChangeEffect({
                deps: [
                    ()=>this._reactiveStorageService.applicationUserPersistentStorage.hideChatEditTooltip
                ],
                onChange: g
            }), this._register(this._editor.onDidChangeModel(()=>{
                this._widget.value.rerender();
            }));
            const _ = this._editor.getContainerDomNode()?.closest(".editor-group-container"), b = _?.querySelector(".title");
            b && this._register(Xde.observe(b, this._store, {
                attributes: !0,
                attributeFilter: [
                    "class"
                ]
            })(g));
            const y = _?.querySelector(".breadcrumbs-below-tabs");
            y && this._register(Xde.observe(y, this._store, {
                subtree: !0,
                attributes: !0,
                attributeFilter: [
                    "class"
                ]
            })(g)), this._widget.value.rerender(), g();
        }
    }
    static get(t) {
        return t.getContribution(EEt.ID);
    }
    _clearBreadcrumbReviewControls() {
        this._breadcrumbsControlsDispose.clear(), this._breadcrumbsControlsContainer?.parentElement && this._breadcrumbsControlsContainer.remove(), this._breadcrumbsControlsContainer = void 0;
        const t = this._editor.getContainerDomNode()?.closest(".editor-group-container")?.querySelector(".title");
        t?.classList.contains("has-review-controls") && t.classList.remove("has-review-controls");
    }
    dispose() {
        this._clearBreadcrumbReviewControls(), super.dispose();
    }
}, EEt.ID = "aiFullFilePromptBar", EEt = Re([
    F(1, dn),
    F(2, sa),
    F(3, Rr),
    F(4, mX),
    F(5, no),
    F(6, ki)
], EEt), ius = class extends st {
    constructor(t, e, n, i){
        super(), this._editor = t, this.reactiveStorageService = e, this.workspaceContextService = n, this.instantiationService = i, this.allowEditorOverflow = !0, this._onClick = this._register(new tt), this.onClick = this._onClick.event, this.isWordWrap = !1, this._renderSlot = this._register(new Vn), this._domNode = Ii("div.aiFullFilePromptBarWidget"), this._domNode.style.width = "100%", this._domNode.style.boxSizing = "border-box", this._domNode.style.pointerEvents = "none", this._domNode.style.display = "flex", this._domNode.style.justifyContent = "center", this._domNode.style.zIndex = "1000", this._offsetDomNode = Ii("div"), this._offsetDomNode.style.width = "100%", this._offsetDomNode.style.display = "flex", this._offsetDomNode.style.justifyContent = "center", this._offsetDomNode.style.alignItems = "center", this._offsetDomNode.style.boxSizing = "border-box", this._offsetDomNode.style.position = "relative", this._offsetDomNode.style.zIndex = "2530", this._domNode.appendChild(this._offsetDomNode), this._register(this._editor.onMouseMove((r)=>{
            this._isMouseInEditor(r) && this._applyHoverEffect();
        })), this._register(this._editor.onMouseLeave(()=>{
            this._editor.hasTextFocus() || this._removeHoverEffect();
        })), this._register(this._editor.onDidFocusEditorText(()=>{
            this._applyHoverEffect();
        })), this._register(this._editor.onDidBlurEditorText(()=>{
            this._removeHoverEffect();
        })), this._register(kM.ignoreTarget(this._domNode)), this._editor.addOverlayWidget(this), this._renderSlot.value = _Cg(this._offsetDomNode, this, this.instantiationService, this._editor), this._register(this._editor.onDidChangeModelContent(()=>{
            this._editor.layoutOverlayWidget(this);
        }));
    }
    _isMouseInEditor(t) {
        return !t.target || t.target.type === 0 ? !1 : t.target.type !== 13;
    }
    rerender() {
        this._renderSlot.clear(), this._renderSlot.value = _Cg(this._offsetDomNode, this, this.instantiationService, this._editor);
    }
    getId() {
        return "aiFullFilePromptBarWidget";
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        return {
            preference: 3
        };
    }
    getURI() {
        const t = this._editor.getModel()?.uri;
        if (t?.path) return t;
    }
    show() {
        this._editor.getModel()?.uri?.scheme !== Ot.git && (this._domNode.style.display = "block");
    }
    hide() {
        this._domNode.style.display = "none";
    }
    update() {
        this.rerender();
    }
    _applyHoverEffect() {
        this._domNode.classList.contains("editor-hover") || this._domNode.classList.add("editor-hover");
    }
    _removeHoverEffect() {
        this._domNode.classList.contains("editor-hover") && this._domNode.classList.remove("editor-hover");
    }
    dispose() {
        this._renderSlot.clear(), super.dispose();
    }
}, ius = Re([
    F(1, sa),
    F(2, yr),
    F(3, dn)
], ius), sv(EEt.ID, EEt, 3);

}
