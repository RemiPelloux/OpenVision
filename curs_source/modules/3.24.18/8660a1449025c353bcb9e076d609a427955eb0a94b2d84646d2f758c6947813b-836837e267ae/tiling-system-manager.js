import { Cp1, PGe, Sp1, Tp1, Xyp, Yyp, Zyp, eAa, i_i, kp1, r_i, wp1 } from "./ipa.js";
import { Rxa, Yvi } from "./tab-activation-history.js";
import { tjr } from "./tiling-system-tree.js";
import { Fwn, Vxa } from "./tiling-system.types.js";
import { E } from "./tslib.es6.js";
var eSp, tSp, v6e, tAa, njr;
export { eSp, njr, tAa, tSp, v6e };
var __wakaru_nSp_initialized = false;
export function nSp() {
if (__wakaru_nSp_initialized) return;
__wakaru_nSp_initialized = true;
"use strict";
E(), Rxa(), Fwn(), tjr(), eSp = Object.defineProperty, tSp = (t, e, n)=>e in t ? eSp(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, v6e = (t, e, n)=>tSp(t, typeof e != "symbol" ? e + "" : e, n), tAa = class I2b {
    constructor(e){
        v6e(this, "managerId"), v6e(this, "_root"), v6e(this, "_focusedPanelId"), v6e(this, "_config"), v6e(this, "_listeners", new Set), v6e(this, "_focusHistory", new Yvi), v6e(this, "_suppressPointerFocusDepth", 0), v6e(this, "subscribe", (r, s)=>{
            const o = (a)=>{
                a.type === r && s(a.payload);
            };
            return this._listeners.add(o), ()=>{
                this._listeners.delete(o);
            };
        }), v6e(this, "subscribeAll", (r)=>(this._listeners.add(r), ()=>{
                this._listeners.delete(r);
            })), this.managerId = I2b._nextId++, this._root = e.root;
        const n = e.focusedPanelId ?? null;
        this._focusedPanelId = n !== null && PGe(this._root, n) ? n : null, this._config = {
            ...Vxa,
            ...e.config
        };
        const i = Zyp(this._root);
        i.length > 0 && console.warn("[Tiling] Invalid initial tree:", i);
    }
    get root() {
        return this._root;
    }
    get focusedPanelId() {
        return this._focusedPanelId;
    }
    get suppressPointerFocus() {
        return this._suppressPointerFocusDepth > 0;
    }
    get config() {
        return this._config;
    }
    getPanelIds() {
        return r_i(this._root).map((e)=>e.id);
    }
    getPanelData(e) {
        return PGe(this._root, e)?.data;
    }
    getDisallowedDropZones(e, n) {
        if (e === n) return new Set;
        const i = i_i(this._root, e);
        return !i || i.children[0].id !== n && i.children[1].id !== n ? new Set : i.direction === "horizontal" ? new Set([
            "left",
            "right"
        ]) : new Set([
            "top",
            "bottom"
        ]);
    }
    split(e, n, i, r, s = .5) {
        const o = Yyp(this._root, e, n, i, r, s);
        if (!o) return null;
        const [a, l] = o;
        return this._root = a, this._notify("panel-added", {
            panelId: l,
            data: r
        }), this._notify("layout-changed", {}), l;
    }
    splitPreservingRelativeAreas(e, n, i, r) {
        const s = Sp1(this._root, e, n, i, r);
        if (!s) return null;
        const [o, a] = s;
        return this._root = o, this._notify("panel-added", {
            panelId: a,
            data: r
        }), this._notify("layout-changed", {}), a;
    }
    close(e) {
        return this._close(e, eAa);
    }
    closePreservingRelativeAreas(e) {
        return this._close(e, kp1);
    }
    _close(e, n) {
        const i = n(this._root, e);
        if (!i) return !1;
        if (this._root = i, this._focusHistory.delete(e), this._focusedPanelId === e) {
            const r = r_i(this._root);
            this._focusedPanelId = this._focusHistory.findPreviousTab(r, [], {
                excludedTabIds: new Set,
                isTabEligible: ()=>!0
            }) ?? (r.length > 0 ? r[0].id : null), this._notify("panel-focused", {
                panelId: this._focusedPanelId
            });
        }
        return this._notify("panel-removed", {
            panelId: e
        }), this._notify("layout-changed", {}), !0;
    }
    swap(e, n) {
        const i = Xyp(this._root, e, n);
        return i ? (i === this._root || (this._root = i, this._notify("panel-swapped", {
            panelIdA: e,
            panelIdB: n
        }), this._notify("layout-changed", {})), !0) : !1;
    }
    resize(e, n) {
        const i = wp1(this._root, e, n);
        if (!i) return !1;
        if (i === this._root) return !0;
        this._root = i;
        const r = Math.max(.05, Math.min(.95, n));
        return this._notify("panel-resized", {
            branchId: e,
            ratio: r
        }), this._notify("layout-changed", {}), !0;
    }
    move(e, n, i) {
        const r = Tp1(this._root, e, n, i);
        return r ? (r === this._root || (this._root = r, this._notify("panel-moved", {
            panelId: e,
            targetPanelId: n,
            zone: i
        }), this._notify("layout-changed", {})), !0) : !1;
    }
    setPanelData(e, n) {
        const i = Cp1(this._root, e, n);
        return i ? (this._root = i, this._notify("panel-data-changed", {
            panelId: e,
            data: n
        }), !0) : !1;
    }
    setFocusedPanel(e) {
        this._focusedPanelId !== e && (e !== null && !PGe(this._root, e) || (this._focusHistory.record({
            previousTabId: this._focusedPanelId,
            nextTabId: e
        }), this._focusedPanelId = e, this._notify("panel-focused", {
            panelId: e
        })));
    }
    runWithoutPointerFocus(e) {
        this._suppressPointerFocusDepth++;
        try {
            e();
        } finally{
            const n = ()=>{
                this._suppressPointerFocusDepth = Math.max(0, this._suppressPointerFocusDepth - 1);
            };
            typeof requestAnimationFrame == "function" ? requestAnimationFrame(()=>{
                requestAnimationFrame(n);
            }) : setTimeout(n, 0);
        }
    }
    getLayout() {
        return structuredClone({
            root: this._root,
            focusedPanelId: this._focusedPanelId ?? void 0
        });
    }
    restoreLayout(e) {
        const n = Zyp(e.root);
        if (n.length > 0) {
            console.warn("[Tiling] Invalid layout to restore:", n);
            return;
        }
        this._root = structuredClone(e.root);
        const i = e.focusedPanelId ?? null;
        this._focusedPanelId = i !== null && PGe(this._root, i) ? i : null, this._notify("panel-focused", {
            panelId: this._focusedPanelId
        }), this._notify("layout-restored", {}), this._notify("layout-changed", {});
    }
    _notify(e, n) {
        for (const i of Array.from(this._listeners))i({
            type: e,
            payload: n
        });
    }
}, v6e(tAa, "_nextId", 0), njr = tAa;

}
