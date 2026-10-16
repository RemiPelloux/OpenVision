import { D, Gt, Pn, QFt, Qe, st, tt } from "./Iwo.js";
import { jn } from "./SZu.js";
import { gs, yt } from "./codicons.js";
import { Jhn, OPo, pa } from "./constants_8.js";
import { b_ } from "./iconRegistry.js";
import { It } from "./instantiation.js";
import { du, odn } from "./map.js";
import { Bt } from "./nls.js";
import { cp } from "./objects.js";
import { Eo, Fi } from "./platform_2.js";
import { E } from "./tslib.es6.js";
import { jU1 } from "./yBp.js";
import { kY, qa } from "./ze.js";
var qXr, zXr, VXr, oC, bTm, yTm, q1, vCt, BB, hEn, STm;
export { BB, STm, VXr, bTm, hEn, oC, q1, qXr, vCt, yTm, zXr };
var __wakaru_ck_initialized = false;
export function ck() {
if (__wakaru_ck_initialized) return;
__wakaru_ck_initialized = true;
"use strict";
E(), Gt(), Bt(), It(), Qe(), du(), Eo(), cp(), gs(), b_(), pa(), qXr = "views", zXr = D(4522, null), VXr = qa("default-view-icon", yt.window, D(4523, null)), ((t)=>{
    t.ViewContainersRegistry = "workbench.registry.view.containers", t.ViewsRegistry = "workbench.registry.view";
})(oC || (oC = {})), bTm = class extends st {
    constructor(){
        super(...arguments), this.registeredViewContainerDeletions = new Map, this.viewContainerStatuses = new Map, this._onDidChangeViewContainerStatus = this._register(new tt), this.onDidChangeViewContainerStatus = this._onDidChangeViewContainerStatus.event, this._onDidRegister = this._register(new tt), this.onDidRegister = this._onDidRegister.event, this._onDidDeregister = this._register(new tt), this.onDidDeregister = this._onDidDeregister.event, this.viewContainers = new Map, this.defaultViewContainers = [];
    }
    registerViewContainerDeletion(t, e) {
        this.registeredViewContainerDeletions.set(t, e);
    }
    hasViewContainerDeletion(t) {
        return this.registeredViewContainerDeletions.has(t);
    }
    getViewContainerDeletion(t) {
        return this.registeredViewContainerDeletions.get(t);
    }
    deregisterViewContainerDeletion(t) {
        this.registeredViewContainerDeletions.delete(t);
    }
    setViewContainerStatus(t, e) {
        const n = this.viewContainerStatuses.get(t);
        e === void 0 ? this.viewContainerStatuses.delete(t) : this.viewContainerStatuses.set(t, e), this._onDidChangeViewContainerStatus.fire({
            containerId: t,
            status: e,
            oldStatus: n
        });
    }
    getViewContainerStatus(t) {
        return this.viewContainerStatuses.get(t);
    }
    get all() {
        return [
            ...this.viewContainers.values()
        ].flat();
    }
    registerViewContainer(t, e, n) {
        const i = this.get(t.id);
        if (i) return i;
        const r = t;
        return r.openCommandActionDescriptor = n?.doNotRegisterOpenCommand ? void 0 : r.openCommandActionDescriptor ?? {
            id: r.id
        }, QFt(this.viewContainers, e, []).push(r), n?.isDefault && this.defaultViewContainers.push(r), this._onDidRegister.fire({
            viewContainer: r,
            viewContainerLocation: e
        }), r;
    }
    deregisterViewContainer(t) {
        for (const e of this.viewContainers.keys()){
            const n = this.viewContainers.get(e), i = n?.indexOf(t);
            if (i !== -1) {
                n?.splice(i, 1), n.length === 0 && this.viewContainers.delete(e), this.viewContainerStatuses.delete(t.id), this.registeredViewContainerDeletions.delete(t.id), this._onDidDeregister.fire({
                    viewContainer: t,
                    viewContainerLocation: e
                });
                return;
            }
        }
    }
    get(t) {
        return this.all.filter((e)=>e.id === t)[0];
    }
    getViewContainers(t) {
        return [
            ...this.viewContainers.get(t) || []
        ];
    }
    getViewContainerLocation(t) {
        return [
            ...this.viewContainers.keys()
        ].filter((e)=>this.getViewContainers(e).filter((n)=>n?.id === t.id).length > 0)[0];
    }
    getDefaultViewContainer(t) {
        if (Jhn.isBcIdWindow && t === 0) {
            const e = this.get(OPo);
            if (e) return e;
        }
        return this.defaultViewContainers.find((e)=>this.getViewContainerLocation(e) === t);
    }
}, Fi.add(oC.ViewContainersRegistry, new bTm), yTm = class extends st {
    constructor(){
        super(...arguments), this._onViewsRegistered = this._register(new tt), this.onViewsRegistered = this._onViewsRegistered.event, this._onViewsDeregistered = this._register(new tt), this.onViewsDeregistered = this._onViewsDeregistered.event, this._onDidChangeContainer = this._register(new tt), this.onDidChangeContainer = this._onDidChangeContainer.event, this._onDidChangeViewWelcomeContent = this._register(new tt), this.onDidChangeViewWelcomeContent = this._onDidChangeViewWelcomeContent.event, this._viewContainers = [], this._views = new Map, this._viewWelcomeContents = new odn;
    }
    registerViews(t, e) {
        this.registerViews2([
            {
                views: t,
                viewContainer: e
            }
        ]);
    }
    registerViews2(t) {
        t.forEach(({ views: e, viewContainer: n })=>this.addViews(e, n)), this._onViewsRegistered.fire(t);
    }
    deregisterViews(t, e) {
        const n = this.removeViews(t, e);
        n.length && this._onViewsDeregistered.fire({
            views: n,
            viewContainer: e
        });
    }
    moveViews(t, e) {
        for (const n of this._views.keys())if (n !== e) {
            const i = this.removeViews(t, n);
            i.length && (this.addViews(i, e), this._onDidChangeContainer.fire({
                views: i,
                from: n,
                to: e
            }));
        }
    }
    getViews(t) {
        return this._views.get(t) || [];
    }
    getView(t) {
        for (const e of this._viewContainers){
            const n = (this._views.get(e) || []).filter((i)=>i.id === t)[0];
            if (n) return n;
        }
        return null;
    }
    getViewContainer(t) {
        for (const e of this._viewContainers)if ((this._views.get(e) || []).filter((i)=>i.id === t)[0]) return e;
        return null;
    }
    registerViewWelcomeContent(t, e) {
        return this._viewWelcomeContents.add(t, e), this._onDidChangeViewWelcomeContent.fire(t), Pn(()=>{
            this._viewWelcomeContents.delete(t, e), this._onDidChangeViewWelcomeContent.fire(t);
        });
    }
    registerViewWelcomeContent2(t, e) {
        const n = new Map;
        for (const [i, r] of e)this._viewWelcomeContents.add(t, r), n.set(i, Pn(()=>{
            this._viewWelcomeContents.delete(t, r), this._onDidChangeViewWelcomeContent.fire(t);
        }));
        return this._onDidChangeViewWelcomeContent.fire(t), n;
    }
    getViewWelcomeContent(t) {
        const e = [];
        return this._viewWelcomeContents.forEach(t, (n)=>e.push(n)), e.sort(jU1);
    }
    addViews(t, e) {
        let n = this._views.get(e);
        n || (n = [], this._views.set(e, n), this._viewContainers.push(e));
        for (const i of t){
            if (this.getView(i.id) !== null) throw new Error(D(4524, null, i.id));
            n.push(i);
        }
    }
    removeViews(t, e) {
        const n = this._views.get(e);
        if (!n) return [];
        const i = [], r = [];
        for (const s of n)t.includes(s) ? i.push(s) : r.push(s);
        return i.length && (r.length ? this._views.set(e, r) : (this._views.delete(e), this._viewContainers.splice(this._viewContainers.indexOf(e), 1))), i;
    }
}, Fi.add(oC.ViewsRegistry, new yTm), q1 = jn("viewDescriptorService"), vCt = ((t)=>(t[t.Default = 0] = "Default", t[t.Expand = 1] = "Expand", t))(vCt || {}), BB = ((t)=>(t[t.None = 0] = "None", t[t.Collapsed = 1] = "Collapsed", t[t.Expanded = 2] = "Expanded", t))(BB || {}), hEn = class {
    constructor(t, e){
        this.resolved = !1, this._hasResolve = !1, kY(this, t), this._hasResolve = !!e, this.resolve = async (n)=>{
            if (e && !this.resolved) {
                const i = await e(n);
                i && (this.tooltip = this.tooltip ?? i.tooltip, this.command = this.command ?? i.command);
            }
            n.isCancellationRequested || (this.resolved = !0);
        };
    }
    get hasResolve() {
        return this._hasResolve;
    }
    resetResolve() {
        this.resolved = !1;
    }
    asTreeItem() {
        return {
            handle: this.handle,
            parentHandle: this.parentHandle,
            collapsibleState: this.collapsibleState,
            label: this.label,
            description: this.description,
            icon: this.icon,
            iconDark: this.iconDark,
            themeIcon: this.themeIcon,
            resourceUri: this.resourceUri,
            tooltip: this.tooltip,
            contextValue: this.contextValue,
            command: this.command,
            children: this.children,
            accessibilityInformation: this.accessibilityInformation
        };
    }
}, STm = class extends Error {
    constructor(t){
        super(D(4525, null, t)), this.name = "NoTreeViewError";
    }
    static is(t) {
        return !!t && t.name === "NoTreeViewError";
    }
};

}
