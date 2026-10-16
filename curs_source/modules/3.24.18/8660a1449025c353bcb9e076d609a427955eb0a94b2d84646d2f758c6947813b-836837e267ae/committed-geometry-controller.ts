import { $Wk, FWk, GHk, Gdf, JWk, KWk, LWk, MWk, NWk, OWk, QWk, SGk, WWk, Yuf, Zdf, _Gk, bGk, cGk, cWk, dGk, eGk, fvs, gGk, hGk, iGk, jWk, lGk, mGk, odf, ohf, pGk, qWk, qdf, rWk, tGk, yGk, yYt } from "./Ycg.js";
import { DWk } from "./apply-committed-geometry.ts";
import { Juf, Quf, YMe } from "./brands.ts";
import { BWk } from "./controller-state.ts";
import { HWk } from "./frame-trigger.ts";
import { GWk } from "./host-surface-visibility.ts";
import { VWk } from "./keyboard-intent.ts";
import { nGk } from "./measurement-proposals.ts";
import { txl } from "./motion.ts";
import { Ivs, uGk } from "./navigation.ts";
import { Idf } from "./plan-frame.ts";
import { shf, vGk } from "./read-width-epoch.ts";
import { Qdf, fGk, mxl, pxl } from "./smooth-follow.ts";
import { E } from "./tslib.es6.js";
import { dF, mvs } from "./viewport-anchor.ts";
import { MGk } from "./virtual-plane-model-state.ts";
var gxl, ict, hhf;
export { gxl, hhf, ict };
var __wakaru_DGk_initialized = false;
export function DGk() {
if (__wakaru_DGk_initialized) return;
__wakaru_DGk_initialized = true;
"use strict";
E(), YMe(), txl(), Idf(), mvs(), DWk(), BWk(), HWk(), GWk(), VWk(), nGk(), uGk(), fGk(), vGk(), MGk(), gxl = 128, ict = new WeakMap, hhf = class {
    constructor(t, e){
        this.environment = e, this.listeners = new Set, this.outerElements = new Map, this.outerRowIdsByElement = new Map, this.boundaryStyledElements = new WeakSet, this.measurementElements = new Map, this.measurementRowIdsByElement = new Map, this.rowRefs = new Map, this.splitRowRefs = new Map, this.pendingMeasurements = new Map, this.heldMeasurements = new Map, this.mounted = !1, this.replanAfterRemount = !1, this.lifecycleGeneration = 0, this.lastObservedHeightPx = new WeakMap, this.observerDrainScheduled = !1, this.viewportResizePending = !1, this.surfaceHidden = !1, this.scrollElement = null, this.planeElement = null, this.listenersElement = null, this.pointerDocument = null, this.userInputState = {
            kind: "idle"
        }, this.scrollInputCount = 0, this.programmaticScrollState = {
            kind: "idle"
        }, this.programmaticScrollGeneration = 0, this.activeNavigationState = {
            kind: "idle"
        }, this.latestNavigationId = Juf, this.followFrameOwedAtQuietInput = !1, this.correctionWriteState = {
            kind: "idle"
        }, this.isScrolling = !1, this.followState = {
            kind: "active"
        }, this.streamingFollowEligible = !1, this.bottomOverscrollPx = 0, this.latestMeasurementOrder = Quf, this.pinTrace = [], this.subscribe = (i)=>(this.listeners.add(i), ()=>{
                this.listeners.delete(i);
            }), this.getSnapshot = ()=>this.snapshot, this.getDebugState = ()=>({
                lastPlan: this.lastPlan,
                heldProposals: [
                    ...this.heldMeasurements.values()
                ].map((i)=>({
                        proposal: i,
                        reason: "above-fold-during-motion"
                    })),
                defects: this.lastPlan?.defects ?? [],
                pinTrace: [
                    ...this.pinTrace
                ],
                bottomPinState: this.snapshot.geometry.viewport.mode.kind === "pinned-bottom" ? {
                    kind: "pinned"
                } : {
                    kind: "released"
                },
                userInputState: this.userInputState,
                programmaticScrollState: this.programmaticScrollState,
                activeNavigationState: this.activeNavigationState,
                latestNavigationCompletion: this.latestNavigationCompletion,
                followState: this.followState
            }), this.getInteractionState = ()=>{
            const i = this.observeUserInput(this.environment.now());
            return {
                isScrolling: this.isScrolling,
                isUserInputActive: i.state.kind !== "idle",
                scrollInputCount: this.scrollInputCount,
                direction: i.direction,
                bottomPin: this.snapshot.geometry.viewport.mode.kind === "pinned-bottom" ? {
                    kind: "pinned"
                } : {
                    kind: "released"
                },
                follow: this.followState,
                navigation: this.activeNavigationState
            };
        }, this.scrollElementRef = (i)=>{
            i !== this.scrollElement && (i !== null && this.assertScrollElementAvailable(i), this.detachScrollElement(), this.scrollElement = i, i !== null && (ict.set(i, this), this.applyPendingBoundCorrection(), this.mounted && (this.attachScrollElement(), this.syncViewport())));
        }, this.planeElementRef = (i)=>{
            if (i !== this.planeElement) {
                if (this.planeElement = i, i === null) {
                    this.cancelFollowUnlessNavigating(), this.reduceProgrammaticScroll({
                        kind: "element-unbound"
                    });
                    return;
                }
                Gdf(i, this.snapshot), this.scrollTopShadow = void 0, this.applyPendingBoundCorrection();
            }
        }, this.setBottomOverscrollPx = (i)=>{
            const r = Number.isFinite(i) ? Math.max(0, i) : 0;
            r !== this.bottomOverscrollPx && (this.bottomOverscrollPx = r);
        }, this.handleResizeObservations = (i)=>{
            for (const s of i)this.lastObservedHeightPx.set(s.target, s.heightPx);
            if (!this.mounted) return;
            const r = i.find((s)=>s.target === this.scrollElement);
            if (r !== void 0) if (r.heightPx <= 0) this.noteSurfaceHidden();
            else {
                this.surfaceHidden && this.latestOptions.surfaceHidden !== !0 && this.restoreViewportAfterSurfaceShown(), this.viewportResizePending = !0, this.invalidateViewportShadow();
                const s = this.latestOptions.readContentWidthPx;
                s !== void 0 && this.scrollElement !== null && this.readWidthEpoch.observe(s(this.scrollElement));
            }
            for (const s of i){
                if (s.target === this.scrollElement || this.surfaceHidden) continue;
                const o = this.measurementRowIdsByElement.get(s.target), a = o === void 0 ? void 0 : this.measurementElements.get(o);
                o === void 0 || a === void 0 || a.element !== s.target || this.enqueueMeasurement(o, fvs(Math.max(0, s.heightPx)), {
                    kind: a.box,
                    element: a.element
                });
            }
            this.scheduleObserverDrain();
        }, this.handleScroll = ()=>{
            const i = this.readLiveScrollTop();
            if (this.surfaceHidden) return;
            if (this.correctionWriteState.kind === "writing") {
                this.correctionWriteState.echoObserved = !0;
                return;
            }
            this.nativeFollow !== void 0 && Math.abs(i - this.nativeFollow.targetScrollTopPx) < dF && (this.nativeFollow = void 0);
            const s = this.readLiveViewportHeight(), o = !this.isScrolling && this.programmaticScrollState.kind === "awaiting-observation" && i === this.programmaticScrollState.targetScrollTopPx;
            this.userInputState.kind === "pointer-held" && (this.scrollInputCount += 1), o || (this.isScrolling = !0, this.scheduleScrollIdle());
            const a = this.snapshot.geometry.viewport.scrollTopPx, l = i - a;
            if (l !== 0 && (this.userInputState = yYt(this.userInputState, {
                kind: "scroll-direction",
                direction: l > 0 ? 1 : -1
            })), i === a && s === this.snapshot.geometry.viewport.viewportHeightPx) {
                this.reduceProgrammaticScroll({
                    kind: "scroll-observed"
                }), this.syncNavigationPacer();
                return;
            }
            const c = this.programmaticScrollGeneration;
            this.commitFrame([], "scroll"), this.programmaticScrollGeneration === c && this.reduceProgrammaticScroll({
                kind: "scroll-observed"
            });
        }, this.handleScrollEnd = ()=>{
            this.isScrolling = !1, this.cancelScrollIdle(), this.publishInteractionChange(), this.activeNavigationState.kind === "smooth" && this.syncNavigationPacer();
        }, this.handleWheel = (i)=>{
            const r = i.deltaY > 0 ? 1 : i.deltaY < 0 ? -1 : 0;
            this.recordPinTrace({
                kind: "input",
                atMs: this.environment.now(),
                input: "wheel",
                direction: r,
                deltaY: i.deltaY,
                deltaMode: i.deltaMode
            }), this.recordUserInput(r, i.ctrlKey ? "zoom" : "scroll");
        }, this.handleKeyDown = (i)=>{
            const r = qWk(i);
            r !== void 0 && (this.recordPinTrace({
                kind: "input",
                atMs: this.environment.now(),
                input: "keydown",
                direction: r
            }), this.recordUserInput(r, "scroll"));
        }, this.handlePointerDown = ()=>{
            this.recordPinTrace({
                kind: "input",
                atMs: this.environment.now(),
                input: "pointer-down",
                direction: 0
            }), this.userInputState = yYt(this.userInputState, {
                kind: "pointer-down",
                atMs: this.environment.now()
            }), this.cancelSmoothFollowUnderInput(this.yieldToUserInput(0)), this.scheduleHeldReplay(), this.publishInteractionChange();
        }, this.handlePointerUp = ()=>{
            if (this.userInputState.kind !== "pointer-held") return;
            this.userInputState = yYt(this.userInputState, {
                kind: "pointer-up"
            });
            const i = this.createFrameInput("input");
            if (this.heldMeasurements.size > 0 && this.shouldReplayHeld(i)) {
                this.commitFrame([], "input");
                return;
            }
            this.scheduleHeldReplay();
        }, this.modelState = _Gk(t), this.latestOptions = t, this.readWidthEpoch = new shf(t.epoch), this.streamingFollowEligible = t.streamingFollowEligible ?? !1;
        const n = cWk({
            epoch: t.epoch,
            seeds: bGk(this.modelState),
            scrollTopPx: t.initialViewport.scrollTopPx,
            viewportHeightPx: t.initialViewport.viewportHeightPx,
            mode: t.initialViewport.mode,
            gapPx: t.config.gapPx
        });
        this.snapshot = ohf(this.modelState, n), this.reduceProgrammaticScroll({
            kind: "unbound-correction-requested",
            targetScrollTopPx: t.initialViewport.scrollTopPx
        });
    }
    mount() {
        if (!this.mounted) {
            this.scrollElement !== null && this.assertScrollElementAvailable(this.scrollElement), this.mounted = !0, this.lifecycleGeneration += 1, this.ensureResizeObserver();
            for (const t of this.measurementElements.values())this.resizeObserver?.observe(t.element);
            this.attachScrollElement(), this.syncViewport(), this.replanAfterRemount && (this.replanAfterRemount = !1, this.commitFrame([], "options")), this.scheduleHeldReplay(), this.pendingMeasurements.size > 0 && this.scheduleObserverDrain();
        }
    }
    unmount() {
        this.mounted && (this.replanAfterRemount = this.replanAfterRemount || this.activeNavigationState.kind !== "idle" || this.followState.kind !== "active", this.mounted = !1, this.lifecycleGeneration += 1, this.disposeActiveNavigation(), this.followState = {
            kind: "active"
        }, this.userInputState = yYt(this.userInputState, {
            kind: "reset"
        }), this.isScrolling = !1, this.detachScrollElement(), this.resizeObserver?.disconnect(), this.pendingMeasurements.clear(), this.viewportResizePending = !1, this.readWidthEpoch.release(), this.observerDrainScheduled = !1, this.cancelHeldReplay(), this.cancelScrollIdle());
    }
    updateOptions(t) {
        this.updateOptionsInternal(t);
    }
    updateOptionsInternal(t) {
        const e = this.readWidthEpoch.forHost(t, this.snapshot.geometry.epoch);
        this.latestOptions = e;
        const n = WWk({
            hidden: e.surfaceHidden,
            parked: this.surfaceHidden,
            scrollElement: this.scrollElement
        });
        n === "park" ? this.noteSurfaceHidden() : n === "unpark" && this.restoreViewportAfterSurfaceShown();
        const i = e.followState !== void 0 && e.followState.kind !== this.followState.kind;
        i && e.followState?.kind === "suspended" && this.cancelFollowUnlessNavigating(), e.followState !== void 0 && (this.followState = e.followState), this.streamingFollowEligible = e.streamingFollowEligible ?? !1;
        const r = this.prepareOptionUpdate(e);
        if (r.kind === "unchanged") {
            i && this.followState.kind === "active" && this.commitFrame([], "options");
            return;
        }
        this.commitOptionUpdate(r, {
            kind: "host",
            epochId: e.epoch.id
        });
    }
    prepareOptionUpdate(t) {
        return SGk({
            current: this.modelState,
            geometry: this.snapshot.geometry,
            options: t,
            viewportTopPx: this.smoothFollow?.startScrollTopPx ?? this.nativeFollow?.startScrollTopPx,
            registeredRowIds: new Set([
                ...this.outerElements.keys(),
                ...this.measurementElements.keys()
            ])
        });
    }
    commitOptionUpdate(t, e) {
        const n = QWk({
            source: e,
            geometry: this.snapshot.geometry,
            previous: this.modelState.modelsById,
            next: t.next.modelsById,
            measuredRowIds: t.measuredRowsToReobserve,
            isCurrentSource: (r)=>this.isCurrentMeasurementSource(r),
            measurementElements: this.measurementElements,
            readElementHeightPx: this.surfaceHidden ? void 0 : this.environment.readElementHeightPx,
            lastObservedHeightPx: (r)=>this.lastObservedHeightPx.get(r),
            tolerancePx: this.modelState.config.driftTolerancePx,
            latestMeasurementOrder: this.latestMeasurementOrder
        });
        this.latestMeasurementOrder = n.latestMeasurementOrder, this.modelState = t.next, this.pruneRowState(), this.pruneHeldMeasurements();
        const i = this.commitFrame([
            ...t.proposals,
            ...n.proposals
        ], e.kind === "host" ? "options" : "observer", t.identityOf);
        this.modelState = yGk(this.modelState, i), this.reobserveMeasuredRows(n.reobserve);
    }
    syncViewport() {
        if (this.scrollElement === null) return;
        const e = this.readFrameScrollTop(), n = this.readTrackedViewportHeight();
        if (n <= 0 || Math.abs(e - this.snapshot.geometry.viewport.scrollTopPx) < dF && n === this.snapshot.geometry.viewport.viewportHeightPx) return;
        const i = this.layoutSyncedViewportInput;
        i !== void 0 && Math.abs(e - i.scrollTopPx) < dF && n === i.viewportHeightPx || (this.layoutSyncedViewportInput = {
            scrollTopPx: e,
            viewportHeightPx: n
        }, this.commitFrame([], "layout"));
    }
    getRowRef(t) {
        const e = this.rowRefs.get(t);
        if (e !== void 0) return e;
        const n = (i)=>{
            if (i === null) {
                this.setMeasurementElement(t, null, "border-box"), this.setOuterElement(t, null);
                return;
            }
            this.setOuterElement(t, i), this.setMeasurementElement(t, i, "border-box");
        };
        return this.rowRefs.set(t, n), n;
    }
    getRowRefs(t) {
        const e = this.splitRowRefs.get(t);
        if (e !== void 0) return e;
        const n = {
            outerRef: (i)=>{
                this.setOuterElement(t, i);
            },
            measurementRef: (i)=>{
                this.setMeasurementElement(t, i, "measured-part");
            }
        };
        return this.splitRowRefs.set(t, n), n;
    }
    reportMeasurement(t, e) {
        if (!this.mounted || this.surfaceHidden) return !1;
        const n = this.enqueueMeasurement(t, fvs(e), {
            kind: "reported"
        });
        return n && this.scheduleObserverDrain(), n;
    }
    navigate(t) {
        const e = GHk(this.latestNavigationId), n = lGk({
            navigationId: e,
            motion: iGk({
                request: t,
                reducedMotion: this.environment.reducedMotion()
            }),
            snapshot: this.snapshot.geometry,
            startedAtMs: this.environment.now()
        });
        if (n.kind === "unresolved") return n;
        const i = this.activeNavigationState;
        return i.kind !== "idle" && this.completeNavigation(i.navigationId, {
            kind: "replaced",
            replacementNavigationId: e
        }, {
            kind: "none"
        }), this.cancelSmoothFollow(), this.latestNavigationId = e, this.activeNavigationState = n.state, n.state.kind === "instant" ? (this.completeNavigation(n.state.navigationId, n.state.reason === "reduced-motion" ? {
            kind: "reduced-motion"
        } : {
            kind: "target-reached"
        }, {
            kind: "semantic-target"
        }), n) : this.isNavigationTargetReached(n.state) ? (this.completeNavigation(n.state.navigationId, {
            kind: "target-reached"
        }, {
            kind: "semantic-target"
        }), n) : (n.state.target.kind !== "bottom" && this.snapshot.geometry.viewport.mode.kind === "pinned-bottom" && this.releaseBottomPinForNavigationAway(n.state), this.publishInteractionChange(), this.scheduleNavigationWatchdog(n.state), this.syncNavigationPacer(), n);
    }
    releaseBottomPinForNavigationAway(t) {
        const e = this.readLiveScrollTop();
        this.commitFrame([
            {
                kind: "scroll-intent",
                cause: "user-navigation",
                target: this.freeOffsetTarget(e, t.resolvedTarget.targetScrollTopPx < e ? -1 : 1)
            }
        ], "navigation");
    }
    writeUserInputProxyOffset(t) {
        const e = this.readLiveScrollTop(), n = this.clampScrollTop(t), i = n > e ? 1 : n < e ? -1 : 0;
        this.recordUserInput(i, "scroll"), this.scrollElement !== null && (this.scrollElement.scrollTop = n, this.scrollTopShadow = this.scrollElement.scrollTop), this.commitFrame([
            {
                kind: "scroll-intent",
                cause: "user-navigation",
                target: this.freeOffsetTarget(n, i)
            }
        ], "input");
    }
    scrollTo(t) {
        return this.activeNavigationState.kind !== "idle" ? !1 : (this.scrollInputCount += 1, this.commitScrollTarget(t, "user-navigation"));
    }
    restoreTo(t) {
        return this.commitScrollTarget(t, "restore");
    }
    commitScrollTarget(t, e) {
        return t.kind === "row" && this.snapshot.geometry.indexOf(t.rowId) === void 0 ? !1 : (this.commitFrame([
            {
                kind: "scroll-intent",
                cause: e,
                target: t
            }
        ], "options"), !0);
    }
    preserveAnchor(t) {
        if (this.activeNavigationState.kind !== "idle") return !1;
        const e = this.snapshot.geometry.offsetOf(t);
        if (e === void 0) return !1;
        const n = e - this.readFrameScrollTop();
        return this.restoreTo({
            kind: "row",
            rowId: t,
            edgeOffsetPx: n
        });
    }
    assertScrollElementAvailable(t) {
        const e = ict.get(t);
        if (e !== void 0 && e !== this) throw new RangeError("a scroll element cannot be bound to more than one committed geometry controller");
    }
    recordPinTrace(t) {
        this.pinTrace.push(t), this.pinTrace.length > gxl && this.pinTrace.splice(0, this.pinTrace.length - gxl);
    }
    observeUserInput(t, e = !0) {
        const n = NWk({
            state: this.userInputState,
            nowMs: t,
            inputWindowMs: this.modelState.config.userInputWindowMs
        });
        return e && (this.userInputState = n.state), n;
    }
    recordUserInput(t, e) {
        const n = this.observeUserInput(this.environment.now(), !1).state.kind === "idle";
        this.userInputState = yYt(this.userInputState, {
            kind: "input",
            atMs: this.environment.now(),
            input: t === 0 ? {
                kind: "undirected"
            } : {
                kind: e,
                direction: t
            }
        }), this.cancelSmoothFollowUnderInput(this.yieldToUserInput(t)), this.scheduleHeldReplay(), n && this.publishInteractionChange();
    }
    yieldToUserInput(t) {
        this.scrollInputCount += 1, this.reduceProgrammaticScroll({
            kind: "user-input"
        });
        const e = this.activeNavigationState;
        return e.kind === "idle" ? !1 : (this.completeNavigation(e.navigationId, {
            kind: "user-cancelled"
        }, {
            kind: "observed-offset",
            direction: t
        }), !0);
    }
    completeNavigation(t, e, n) {
        const i = this.activeNavigationState;
        if (i.kind === "idle" || i.navigationId !== t) return !1;
        const r = cGk(i, {
            navigationId: t,
            outcome: e
        });
        if (r.kind === "stale") return !1;
        let s;
        switch(n.kind){
            case "semantic-target":
                {
                    const o = Zdf({
                        state: i,
                        snapshot: this.snapshot.geometry
                    });
                    s = o.kind === "retargeted" ? o.state.resolvedTarget.arrivalTarget : this.freeOffsetTarget(this.readLiveScrollTop(), 0);
                    break;
                }
            case "observed-offset":
                s = this.freeOffsetTarget(this.readLiveScrollTop(), n.direction);
                break;
            case "none":
                break;
            default:
                {
                    const o = n;
                    throw new TypeError(`unknown navigation settlement ${JSON.stringify(o)}`);
                }
        }
        return this.cancelNavigationWatchdog(t), this.activeNavigationState = r.state, this.cancelSmoothFollow(), this.latestNavigationCompletion = {
            navigationId: t,
            outcome: e
        }, this.isScrolling = !1, this.cancelScrollIdle(), s !== void 0 && this.commitFrame([
            {
                kind: "scroll-intent",
                cause: "user-navigation",
                target: s
            }
        ], "navigation"), !0;
    }
    disposeActiveNavigation() {
        const t = this.activeNavigationState;
        if (t.kind === "idle") {
            this.cancelNavigationWatchdog();
            return;
        }
        this.completeNavigation(t.navigationId, {
            kind: "disposed"
        }, {
            kind: "none"
        });
    }
    scheduleNavigationWatchdog(t, e = t.watchdogDeadlineMs - t.startedAtMs) {
        this.cancelNavigationWatchdog();
        const n = t.navigationId, i = this.environment.scheduleDeadline(()=>{
            this.navigationWatchdog?.navigationId === n && (this.navigationWatchdog = void 0), this.completeNavigation(n, {
                kind: "watchdog-expired"
            }, {
                kind: "semantic-target"
            });
        }, Math.max(0, t.watchdogDeadlineMs - this.environment.now()));
        this.navigationWatchdog = {
            navigationId: n,
            timeoutMs: e,
            cancel: i
        };
    }
    extendNavigationWatchdog(t) {
        const e = this.navigationWatchdog?.timeoutMs ?? t.watchdogDeadlineMs - t.startedAtMs, n = this.environment.now() + e;
        if (n <= t.watchdogDeadlineMs) return t;
        const i = {
            ...t,
            watchdogDeadlineMs: n
        };
        return this.scheduleNavigationWatchdog(i, e), i;
    }
    cancelNavigationWatchdog(t) {
        const e = this.navigationWatchdog;
        e === void 0 || t !== void 0 && e.navigationId !== t || (e.cancel(), this.navigationWatchdog = void 0);
    }
    syncNavigationPacer() {
        const t = this.activeNavigationState;
        if (t.kind !== "smooth") return;
        const e = Zdf({
            state: t,
            snapshot: this.snapshot.geometry
        });
        if (e.kind === "unresolved") {
            this.completeNavigation(t.navigationId, {
                kind: "target-unresolved"
            }, {
                kind: "observed-offset",
                direction: 0
            });
            return;
        }
        const n = this.readTrackedScrollTop(), i = e.state.resolvedTarget.targetScrollTopPx, r = this.smoothFollow, o = r !== void 0 && Math.abs(i - n) > Math.abs(r.targetScrollTopPx - r.positionPx) + Ivs ? this.extendNavigationWatchdog(e.state) : e.state;
        if (this.activeNavigationState = o, this.isNavigationTargetReached(o)) {
            this.completeNavigation(o.navigationId, {
                kind: "target-reached"
            }, {
                kind: "semantic-target"
            });
            return;
        }
        this.applySmoothFollow(i, {
            maxVelocityPxPerMs: dGk({
                distancePx: i - n,
                remainingTravelMs: o.startedAtMs + pxl - this.environment.now()
            })
        });
    }
    isNavigationTargetReached(t) {
        return Math.abs(this.readLiveScrollTop() - t.resolvedTarget.targetScrollTopPx) <= Ivs;
    }
    freeOffsetTarget(t, e) {
        return {
            kind: "offset",
            scrollTopPx: t,
            arrivalMode: {
                kind: "free",
                lastUserDirection: e
            }
        };
    }
    clampScrollTop(t) {
        if (!Number.isFinite(t)) throw new RangeError(`scroll offset must be finite, got ${t}`);
        return Math.min(Math.max(0, this.snapshot.geometry.totalSizePx - this.snapshot.geometry.viewport.viewportHeightPx), Math.max(0, t));
    }
    setOuterElement(t, e) {
        const n = this.outerElements.get(t);
        n !== e && (n !== void 0 && (this.outerRowIdsByElement.delete(n), this.outerElements.delete(t)), !(e === null || !this.modelState.modelsById.has(t)) && (this.assertRowElementAvailable(t, e), this.outerElements.set(t, e), this.outerRowIdsByElement.set(e, t), qdf(this.snapshot, t, e, this.boundaryStyledElements)));
    }
    setMeasurementElement(t, e, n) {
        const i = this.measurementElements.get(t);
        i?.element === e && i.box === n || (i !== void 0 && (this.resizeObserver?.unobserve(i.element), this.measurementRowIdsByElement.delete(i.element), this.measurementElements.delete(t)), !(e === null || !this.modelState.modelsById.has(t)) && (this.assertRowElementAvailable(t, e), this.measurementElements.set(t, {
            element: e,
            box: n
        }), this.measurementRowIdsByElement.set(e, t), this.mounted && (this.ensureResizeObserver(), this.resizeObserver?.observe(e))));
    }
    assertRowElementAvailable(t, e) {
        const n = this.outerRowIdsByElement.get(e) ?? this.measurementRowIdsByElement.get(e);
        if (n !== void 0 && n !== t) throw new RangeError(`one row element cannot register both "${n}" and "${t}"`);
    }
    reobserveMeasuredRows(t) {
        const e = this.mounted ? this.resizeObserver : void 0;
        JWk(e, this.measurementElements, t);
    }
    ensureResizeObserver() {
        this.resizeObserver ??= this.environment.createResizeObserver(this.handleResizeObservations);
    }
    enqueueMeasurement(t, e, n) {
        const i = this.modelState.modelsById.get(t);
        return i === void 0 || !i.parts.some((r)=>r.kind === "measured") ? !1 : (this.latestMeasurementOrder = Yuf(this.latestMeasurementOrder), this.pendingMeasurements.set(t, {
            rowId: t,
            revision: i.revision,
            epochId: this.readWidthEpoch.current()?.id ?? this.snapshot.geometry.epoch.id,
            heightPx: e,
            measurementOrder: this.latestMeasurementOrder,
            source: n
        }), !0);
    }
    scheduleObserverDrain() {
        if (this.observerDrainScheduled) return;
        this.observerDrainScheduled = !0;
        const t = this.lifecycleGeneration;
        this.environment.queueObserverMicrotask(()=>{
            if (this.observerDrainScheduled = !1, !!this.mounted) {
                if (t !== this.lifecycleGeneration) {
                    this.scheduleObserverDrain();
                    return;
                }
                this.drainObserverBatch();
            }
        });
    }
    drainObserverBatch() {
        const t = this.viewportResizePending;
        this.viewportResizePending = !1;
        const e = [
            ...this.pendingMeasurements.values()
        ];
        this.pendingMeasurements.clear();
        const n = this.readWidthEpoch.current();
        if (n !== void 0 && n.id !== this.snapshot.geometry.epoch.id) {
            this.commitReadWidthEpoch(n, e);
            return;
        }
        const i = this.readWidthEpoch.release(), { proposals: r, reverified: s } = KWk({
            samples: e,
            models: this.modelState.modelsById,
            geometry: this.snapshot.geometry,
            isCurrentSource: (o)=>this.isCurrentMeasurementSource(o),
            tolerancePx: this.modelState.config.driftTolerancePx
        });
        for (const o of s)this.heldMeasurements.delete(o);
        r.length === 0 && !t && !i || this.commitFrame(r, "observer");
    }
    commitReadWidthEpoch(t, e) {
        this.latestOptions = {
            ...this.latestOptions,
            epoch: t
        };
        const n = this.prepareOptionUpdate(this.latestOptions);
        n.kind === "commit" && (this.readWidthEpoch.retain([
            ...this.measurementElements.keys()
        ]), this.commitOptionUpdate(n, {
            kind: "surface-fold",
            epochId: t.id,
            samples: e
        }), this.reobserveMeasuredRows(this.readWidthEpoch.keepOutsideBand(this.snapshot)));
    }
    isCurrentMeasurementSource(t) {
        if (t.source.kind === "reported") return !0;
        const e = this.measurementElements.get(t.rowId);
        return e?.element === t.source.element && e.box === t.source.kind;
    }
    commitFrame(t, e, n = (i)=>this.modelState.modelsById.get(i)?.identity) {
        e !== "layout" && (this.layoutSyncedViewportInput = void 0);
        for (const l of t)l.kind === "measured-verification" && this.heldMeasurements.delete(l.rowId);
        const i = this.createFrameInput(e), r = eGk(this.heldMeasurements, {
            releaseHeldShrinkAtCommittedBox: this.modelState.config.releaseHeldShrinkAtCommittedBox,
            isDue: e === "scroll" || this.shouldReplayHeld(i)
        }), s = tGk(r, t), o = rWk(this.snapshot.geometry, s, i, this.planConfig(n));
        this.recordPinTrace({
            kind: "commit",
            atMs: this.environment.now(),
            source: e,
            scrollTopPx: i.scrollTopPx,
            resolution: o.pinResolution,
            scrollWriteTargetPx: o.scroll?.targetScrollTopPx,
            scrollWriteReason: o.scroll?.reason
        });
        for (const l of o.held)l.reason === "above-fold-during-motion" && l.proposal.kind === "measured-verification" && this.heldMeasurements.set(l.proposal.rowId, l.proposal);
        const a = ()=>{
            const l = this.scrollElement, c = this.readTrackedViewportHeight(), u = (o.scroll?.motion === "smooth" || this.nativeFollow !== void 0 && mGk(this.readTrackedScrollTop(), o.scroll, c)) && this.environment.reducedMotion().kind !== "reduce" && this.hasCorrectionWriteSurface() && l !== null && ict.get(l) === this;
            this.snapshot = ohf(this.readWidthEpoch.withRetainedRows(this.modelState), FWk(o, u, this.readTrackedScrollTop())), this.lastPlan = o, this.followFrameOwedAtQuietInput = o.next.viewport.mode.kind === "pinned-bottom" && (o.followAwaitsQuietInput || this.followFrameOwedAtQuietInput && !$Wk(i, this.modelState.config.userInputWindowMs));
            const d = this.scrollTopShadow;
            if (MWk(this.snapshot, this.planeElement, this.outerElements, this.boundaryStyledElements), this.invalidateShadowIfClampPossible(this.snapshot), o.scroll !== void 0) if (u) this.applyNativeFollow(o.scroll.targetScrollTopPx);
            else if (l === null || ict.get(l) !== this || !this.hasCorrectionWriteSurface() || Math.abs(o.scroll.targetScrollTopPx - this.readTrackedScrollTop()) >= dF) this.cancelFollowUnlessNavigating(), this.applyCorrection(o.scroll.targetScrollTopPx);
            else {
                this.cancelFollowUnlessNavigating();
                const h = this.readTrackedScrollTop();
                h !== d && h !== o.scroll.targetScrollTopPx ? this.reduceProgrammaticScroll({
                    kind: "clamp-observed",
                    observedScrollTopPx: h
                }) : h === o.scroll.targetScrollTopPx && this.programmaticScrollState.kind === "awaiting-observation" && this.reduceProgrammaticScroll({
                    kind: "write-skipped"
                });
            }
            else !this.hasCorrectionWriteSurface() && this.programmaticScrollState.kind === "pending-bind" && this.reduceProgrammaticScroll({
                kind: "unbound-correction-requested",
                targetScrollTopPx: o.next.viewport.scrollTopPx
            });
            this.syncNavigationPacer();
            for (const h of [
                ...this.listeners
            ])h();
        };
        return e === "observer" ? this.environment.publishObserverUpdate(a) : a(), this.scheduleHeldReplay(), o;
    }
    applyCorrection(t) {
        this.nativeFollow = void 0;
        const e = this.readTrackedScrollTop(), n = this.scrollElement;
        if (!this.hasCorrectionWriteSurface() || n === null || ict.get(n) !== this) {
            this.reduceProgrammaticScroll({
                kind: "unbound-correction-requested",
                targetScrollTopPx: t
            });
            return;
        }
        if (this.reduceProgrammaticScroll({
            kind: "bound-correction-requested",
            targetScrollTopPx: t
        }), e === t) {
            this.reduceProgrammaticScroll({
                kind: "write-skipped"
            });
            return;
        }
        const i = {
            kind: "writing",
            echoObserved: !1
        };
        this.correctionWriteState = i;
        try {
            n.scrollTop = t;
        } finally{
            this.correctionWriteState = {
                kind: "idle"
            };
        }
        const r = i.echoObserved ? this.readTrackedScrollTop() : n.scrollTop;
        if (this.scrollTopShadow = r, this.reduceProgrammaticScroll({
            kind: "write-applied",
            observedScrollTopPx: r
        }), i.echoObserved) {
            const s = this.programmaticScrollGeneration;
            this.commitFrame([], "scroll"), this.programmaticScrollGeneration === s && this.reduceProgrammaticScroll({
                kind: "scroll-observed"
            });
        }
    }
    applySmoothFollow(t, e) {
        const n = this.smoothFollow;
        if (n !== void 0) {
            pGk(n, {
                targetPx: t,
                pace: e
            });
            return;
        }
        if (this.scrollElement === null) {
            this.applyCorrection(t);
            return;
        }
        const i = hGk({
            targetScrollTopPx: t,
            startScrollTopPx: this.readTrackedScrollTop(),
            nowMs: this.environment.now(),
            pace: e
        });
        this.smoothFollow = i, this.scheduleSmoothFollowTick(i);
    }
    applyNativeFollow(t) {
        const e = this.scrollElement;
        if (e === null) {
            this.applyCorrection(t);
            return;
        }
        const n = this.readTrackedScrollTop();
        if (Math.abs(t - n) < dF) {
            this.nativeFollow = void 0;
            return;
        }
        this.nativeFollow?.targetScrollTopPx !== t && (this.nativeFollow = {
            startScrollTopPx: this.nativeFollow?.startScrollTopPx ?? n,
            targetScrollTopPx: t
        }, e.scrollTo({
            top: t,
            behavior: "smooth"
        }));
    }
    scheduleSmoothFollowTick(t) {
        t.cancelFrame = this.environment.requestFrame((e)=>{
            this.smoothFollow === t && this.tickSmoothFollow(t, e);
        }), this.armSmoothFollowDeadline(t);
    }
    armSmoothFollowDeadline(t) {
        t.cancelWatchdog(), t.cancelWatchdog = this.environment.scheduleDeadline(()=>{
            if (this.smoothFollow !== t) return;
            if (this.environment.isFrameClockPaused?.() !== !0) {
                this.armSmoothFollowDeadline(t);
                return;
            }
            t.cancelFrame(), this.smoothFollow = void 0;
            const e = Math.abs(t.targetScrollTopPx - this.readTrackedScrollTop()) < dF;
            if (e || this.applyCorrection(t.targetScrollTopPx), !this.completeNavigationAtClamp(t.targetScrollTopPx)) {
                if (e) {
                    this.syncNavigationPacer();
                    return;
                }
                this.commitFrame([], "deadline");
            }
        }, Qdf);
    }
    tickSmoothFollow(t, e) {
        const n = Math.max(e - t.lastTickMs, 0);
        t.lastTickMs = e;
        const i = this.readTrackedScrollTop();
        Math.abs(i - t.landedPx) > mxl && (t.positionPx = i);
        const r = gGk(t, t.targetScrollTopPx, n);
        if (t.positionPx = r.positionPx, t.velocityPxPerMs = r.velocityPxPerMs, Math.abs(t.targetScrollTopPx - t.positionPx) < mxl) {
            t.cancelWatchdog(), this.smoothFollow = void 0, this.applyCorrection(t.targetScrollTopPx), this.completeNavigationAtClamp(t.targetScrollTopPx) || this.syncNavigationPacer();
            return;
        }
        this.applyCorrection(t.positionPx), t.landedPx = this.readTrackedScrollTop(), this.scheduleSmoothFollowTick(t);
    }
    completeNavigationAtClamp(t) {
        const e = this.activeNavigationState;
        return e.kind !== "smooth" || Math.abs(this.readLiveScrollTop() - t) <= Ivs ? !1 : (this.completeNavigation(e.navigationId, {
            kind: "target-reached"
        }, {
            kind: "semantic-target"
        }), !0);
    }
    cancelSmoothFollow() {
        if (this.activeNavigationState.kind === "smooth") throw new TypeError("a paced navigation owns the spring until it completes or lands; cancel the streaming follow through cancelFollowUnlessNavigating");
        this.nativeFollow = void 0;
        const t = this.smoothFollow;
        t !== void 0 && (t.cancelFrame(), t.cancelWatchdog(), this.smoothFollow = void 0);
    }
    cancelSmoothFollowUnderInput(t) {
        this.followFrameOwedAtQuietInput ||= !t && this.nativeFollow !== void 0, this.cancelSmoothFollow();
    }
    cancelFollowUnlessNavigating() {
        this.activeNavigationState.kind !== "smooth" && this.cancelSmoothFollow();
    }
    hasCorrectionWriteSurface() {
        return !this.surfaceHidden && this.scrollElement?.isConnected === !0 && this.planeElement?.isConnected === !0;
    }
    applyPendingBoundCorrection() {
        this.programmaticScrollState.kind === "pending-bind" && this.applyCorrection(this.programmaticScrollState.targetScrollTopPx);
    }
    noteSurfaceHidden() {
        this.surfaceHidden || (this.surfaceHidden = !0, this.pendingMeasurements.clear());
    }
    restoreViewportAfterSurfaceShown() {
        if (this.surfaceHidden = !1, this.invalidateViewportShadow(), this.programmaticScrollState.kind === "pending-bind") this.applyPendingBoundCorrection();
        else {
            const t = this.snapshot.geometry.viewport.scrollTopPx;
            Math.abs(this.readLiveScrollTop() - t) >= dF && this.applyCorrection(t);
        }
        this.reobserveMeasuredRows([
            ...this.measurementElements.keys()
        ]);
    }
    createFrameInput(t) {
        const e = this.environment.now(), n = this.readFrameScrollTop(), i = this.observeUserInput(e);
        return jWk({
            source: t,
            userInput: i,
            followState: this.followState,
            followOwedAtQuietInput: this.followFrameOwedAtQuietInput,
            programmaticMotionActive: this.activeNavigationState.kind === "smooth" || this.nativeFollow !== void 0,
            offsetMatchesProgrammaticWrite: OWk(this.programmaticScrollState, n),
            facts: {
                nowMs: e,
                scrollTopPx: n,
                viewportHeightPx: this.readTrackedViewportHeight(),
                isGenerating: this.modelState.isGenerating,
                streamingFollowEligible: this.streamingFollowEligible,
                navigation: this.activeNavigationState.kind === "idle" ? {
                    kind: "idle"
                } : {
                    kind: "in-flight"
                },
                bottomOverscrollPx: this.bottomOverscrollPx
            }
        });
    }
    planConfig(t) {
        return {
            ...this.modelState.config,
            identityOf: (e)=>{
                const n = t(e.rowId);
                if (n === void 0) throw new RangeError(`missing anchor identity for row "${e.rowId}"`);
                return n;
            }
        };
    }
    shouldReplayHeld(t) {
        return !odf({
            isGenerating: t.isGenerating,
            isPinnedBottom: this.snapshot.geometry.viewport.mode.kind === "pinned-bottom",
            isUserPointerDown: t.isUserPointerDown,
            msSinceUserScrollInput: t.msSinceUserScrollInput,
            userInputWindowMs: this.modelState.config.userInputWindowMs
        });
    }
    scheduleHeldReplay() {
        this.cancelHeldReplay();
        const t = this.observeUserInput(this.environment.now());
        if (!this.mounted || this.heldMeasurements.size === 0 && !this.followFrameOwedAtQuietInput || t.isPointerHeld) return;
        const e = Math.max(0, this.modelState.config.userInputWindowMs - t.msSinceUserInput + 1);
        this.cancelHeldDeadline = this.environment.scheduleDeadline(()=>{
            if (this.cancelHeldDeadline = void 0, !this.mounted) return;
            const n = this.createFrameInput("held-replay");
            if (!this.shouldReplayHeld(n)) {
                this.scheduleHeldReplay();
                return;
            }
            const i = this.followFrameOwedAtQuietInput;
            this.followFrameOwedAtQuietInput = !1, this.commitFrame([], i ? "input-quiet" : "held-replay");
        }, e);
    }
    cancelHeldReplay() {
        this.cancelHeldDeadline?.(), this.cancelHeldDeadline = void 0;
    }
    scheduleScrollIdle() {
        this.cancelScrollIdle();
        const t = this.lifecycleGeneration;
        this.cancelScrollIdleDeadline = this.environment.scheduleDeadline(()=>{
            this.cancelScrollIdleDeadline = void 0, !(!this.mounted || t !== this.lifecycleGeneration || !this.isScrolling) && (this.isScrolling = !1, this.publishInteractionChange());
        }, Math.max(1, this.modelState.config.userInputWindowMs));
    }
    cancelScrollIdle() {
        this.cancelScrollIdleDeadline?.(), this.cancelScrollIdleDeadline = void 0;
    }
    reduceProgrammaticScroll(t) {
        this.programmaticScrollState = LWk(this.programmaticScrollState, t), this.programmaticScrollGeneration += 1;
    }
    publishInteractionChange() {
        this.snapshot = {
            ...this.snapshot
        };
        for (const t of [
            ...this.listeners
        ])t();
    }
    surfaceHasBox() {
        const t = this.scrollElement;
        return t === null || typeof t.checkVisibility != "function" || t.checkVisibility();
    }
    readLiveScrollTop() {
        if (!this.surfaceHidden && !this.surfaceHasBox() && this.noteSurfaceHidden(), this.surfaceHidden) return this.scrollTopShadow ?? this.snapshot.geometry.viewport.scrollTopPx;
        const t = this.scrollElement?.scrollTop ?? this.snapshot.geometry.viewport.scrollTopPx;
        return this.scrollElement !== null && (this.scrollTopShadow = t), t;
    }
    readTrackedScrollTop() {
        return this.scrollTopShadow ?? this.readLiveScrollTop();
    }
    readLiveViewportHeight() {
        if (this.surfaceHidden) return this.viewportHeightShadow ?? this.snapshot.geometry.viewport.viewportHeightPx;
        const t = this.scrollElement?.clientHeight ?? this.snapshot.geometry.viewport.viewportHeightPx;
        return this.scrollElement !== null && t > 0 && (this.viewportHeightShadow = t), t;
    }
    readTrackedViewportHeight() {
        return this.viewportHeightShadow ?? this.readLiveViewportHeight();
    }
    invalidateViewportShadow() {
        this.scrollTopShadow = void 0, this.viewportHeightShadow = void 0;
    }
    invalidateShadowIfClampPossible(t) {
        this.scrollTopShadow !== void 0 && this.scrollTopShadow > t.totalSizePx - t.geometry.viewport.viewportHeightPx && (this.scrollTopShadow = void 0);
    }
    readFrameScrollTop() {
        return this.programmaticScrollState.kind === "pending-bind" ? this.programmaticScrollState.targetScrollTopPx : this.readTrackedScrollTop();
    }
    attachScrollElement() {
        const t = this.scrollElement;
        t !== null && (this.assertScrollElementAvailable(t), ict.set(t, this), this.invalidateViewportShadow(), this.applyPendingBoundCorrection(), this.ensureResizeObserver(), this.resizeObserver?.observe(t), this.listenersElement !== t && (this.detachScrollListeners(), this.listenersElement = t, t.addEventListener("scroll", this.handleScroll, {
            passive: !0
        }), t.addEventListener("scrollend", this.handleScrollEnd), t.addEventListener("wheel", this.handleWheel, {
            passive: !0
        }), t.addEventListener("keydown", this.handleKeyDown), t.addEventListener("pointerdown", this.handlePointerDown), this.pointerDocument = t.ownerDocument, this.pointerDocument.addEventListener("pointerup", this.handlePointerUp, {
            capture: !0
        }), this.pointerDocument.addEventListener("pointercancel", this.handlePointerUp, {
            capture: !0
        })));
    }
    detachScrollElement() {
        this.cancelFollowUnlessNavigating(), this.invalidateViewportShadow();
        const t = this.scrollElement, e = this.surfaceHidden ? this.snapshot.geometry.viewport.scrollTopPx : t?.scrollTop;
        this.surfaceHidden = !1, t !== null && (this.resizeObserver?.unobserve(t), ict.get(t) === this && ict.delete(t)), this.detachScrollListeners();
        const n = this.isScrolling;
        this.isScrolling = !1, this.cancelScrollIdle(), n && this.mounted && this.publishInteractionChange(), this.reduceProgrammaticScroll({
            kind: "element-unbound"
        }), this.programmaticScrollState.kind === "idle" && e !== void 0 && this.reduceProgrammaticScroll({
            kind: "unbound-correction-requested",
            targetScrollTopPx: e
        });
    }
    detachScrollListeners() {
        const t = this.listenersElement;
        t !== null && (t.removeEventListener("scroll", this.handleScroll), t.removeEventListener("scrollend", this.handleScrollEnd), t.removeEventListener("wheel", this.handleWheel), t.removeEventListener("keydown", this.handleKeyDown), t.removeEventListener("pointerdown", this.handlePointerDown)), this.pointerDocument?.removeEventListener("pointerup", this.handlePointerUp, {
            capture: !0
        }), this.pointerDocument?.removeEventListener("pointercancel", this.handlePointerUp, {
            capture: !0
        }), this.userInputState.kind === "pointer-held" && (this.userInputState = yYt(this.userInputState, {
            kind: "pointer-up"
        }), this.scheduleHeldReplay()), this.listenersElement = null, this.pointerDocument = null;
    }
    pruneRowState() {
        const t = this.modelState.modelsById;
        for (const [e, n] of this.outerElements)t.has(e) || (this.outerElements.delete(e), this.outerRowIdsByElement.delete(n), this.rowRefs.delete(e), this.splitRowRefs.delete(e));
        for (const [e, n] of this.measurementElements)t.has(e) || (this.resizeObserver?.unobserve(n.element), this.measurementElements.delete(e), this.measurementRowIdsByElement.delete(n.element), this.rowRefs.delete(e), this.splitRowRefs.delete(e));
    }
    pruneHeldMeasurements() {
        for (const [t, e] of this.heldMeasurements)this.modelState.modelsById.get(e.rowId)?.revision === e.revision && this.snapshot.geometry.epoch.id === e.epochId || this.heldMeasurements.delete(t);
    }
};

}
