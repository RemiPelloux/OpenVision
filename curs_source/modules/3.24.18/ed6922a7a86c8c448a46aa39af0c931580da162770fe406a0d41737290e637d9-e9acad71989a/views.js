import { jEv } from "./A3u.js";
import { S, Se, bt, eht, rn, ve, we } from "./HVr.js";
import { Pe, _i } from "./codicons.js";
import { Eht, So, jNt } from "./constants_8.js";
import { dh } from "./iconRegistry.js";
import { Ze } from "./instantiation.js";
import { oc, sNt } from "./map.js";
import { rt } from "./nls.js";
import { bu } from "./objects.js";
import { kn, rr } from "./platform_2.js";
import { Pi, vn, y3 } from "./qIc.js";
import { x } from "./tslib.es6.js";
var _Vi, bVi, yVi, Cm, tco, QFd, k_e, JFd, eh, cet, cF, wWt, e3d;
export { Cm, JFd, QFd, _Vi, bVi, cF, cet, e3d, eh, k_e, tco, wWt, yVi };
var __wakaru_cd_initialized = false;
export function cd() {
if (__wakaru_cd_initialized) return;
__wakaru_cd_initialized = true;
"use strict";
x(), bt(), rt(), Ze(), Se(), oc(), rr(), bu(), _i(), dh(), So(), _Vi = "views", bVi = S(4522, null), yVi = Pi("default-view-icon", Pe.window, S(4523, null)), ((e)=>{
    e.ViewContainersRegistry = "workbench.registry.view.containers", e.ViewsRegistry = "workbench.registry.view";
})(Cm || (Cm = {})), tco = [
    0,
    1,
    2
], QFd = class extends we {
    constructor(){
        super(...arguments), this.registeredViewContainerDeletions = new Map, this.viewContainerStatuses = new Map, this._onDidChangeViewContainerStatus = this._register(new ve), this.onDidChangeViewContainerStatus = this._onDidChangeViewContainerStatus.event, this._onDidRegister = this._register(new ve), this.onDidRegister = this._onDidRegister.event, this._onDidDeregister = this._register(new ve), this.onDidDeregister = this._onDidDeregister.event, this.viewContainers = new Map, this.defaultViewContainers = [];
    }
    registerViewContainerDeletion(e, t) {
        this.registeredViewContainerDeletions.set(e, t);
    }
    hasViewContainerDeletion(e) {
        return this.registeredViewContainerDeletions.has(e);
    }
    getViewContainerDeletion(e) {
        return this.registeredViewContainerDeletions.get(e);
    }
    deregisterViewContainerDeletion(e) {
        this.registeredViewContainerDeletions.delete(e);
    }
    setViewContainerStatus(e, t) {
        const n = this.viewContainerStatuses.get(e);
        t === void 0 ? this.viewContainerStatuses.delete(e) : this.viewContainerStatuses.set(e, t), this._onDidChangeViewContainerStatus.fire({
            containerId: e,
            status: t,
            oldStatus: n
        });
    }
    getViewContainerStatus(e) {
        return this.viewContainerStatuses.get(e);
    }
    get all() {
        return [
            ...this.viewContainers.values()
        ].flat();
    }
    registerViewContainer(e, t, n) {
        const i = this.get(e.id);
        if (i) return i;
        const r = e;
        return r.openCommandActionDescriptor = n?.doNotRegisterOpenCommand ? void 0 : r.openCommandActionDescriptor ?? {
            id: r.id
        }, eht(this.viewContainers, t, []).push(r), n?.isDefault && this.defaultViewContainers.push(r), this._onDidRegister.fire({
            viewContainer: r,
            viewContainerLocation: t
        }), r;
    }
    deregisterViewContainer(e) {
        for (const t of this.viewContainers.keys()){
            const n = this.viewContainers.get(t), i = n?.indexOf(e);
            if (i !== -1) {
                n?.splice(i, 1), n.length === 0 && this.viewContainers.delete(t), this.viewContainerStatuses.delete(e.id), this.registeredViewContainerDeletions.delete(e.id), this._onDidDeregister.fire({
                    viewContainer: e,
                    viewContainerLocation: t
                });
                return;
            }
        }
    }
    get(e) {
        return this.all.filter((t)=>t.id === e)[0];
    }
    getViewContainers(e) {
        return [
            ...this.viewContainers.get(e) || []
        ];
    }
    getViewContainerLocation(e) {
        return [
            ...this.viewContainers.keys()
        ].filter((t)=>this.getViewContainers(t).filter((n)=>n?.id === e.id).length > 0)[0];
    }
    getDefaultViewContainer(e) {
        if (Eht.isBcIdWindow && e === 0) {
            const t = this.get(jNt);
            if (t) return t;
        }
        return this.defaultViewContainers.find((t)=>this.getViewContainerLocation(t) === e);
    }
}, kn.add(Cm.ViewContainersRegistry, new QFd), k_e = ((e)=>(e.Open = "2_open", e.Debug = "4_debug", e.SCM = "5_scm", e.More = "9_more", e))(k_e || {}), JFd = class extends we {
    constructor(){
        super(...arguments), this._onViewsRegistered = this._register(new ve), this.onViewsRegistered = this._onViewsRegistered.event, this._onViewsDeregistered = this._register(new ve), this.onViewsDeregistered = this._onViewsDeregistered.event, this._onDidChangeContainer = this._register(new ve), this.onDidChangeContainer = this._onDidChangeContainer.event, this._onDidChangeViewWelcomeContent = this._register(new ve), this.onDidChangeViewWelcomeContent = this._onDidChangeViewWelcomeContent.event, this._viewContainers = [], this._views = new Map, this._viewWelcomeContents = new sNt;
    }
    registerViews(e, t) {
        this.registerViews2([
            {
                views: e,
                viewContainer: t
            }
        ]);
    }
    registerViews2(e) {
        e.forEach(({ views: t, viewContainer: n })=>this.addViews(t, n)), this._onViewsRegistered.fire(e);
    }
    deregisterViews(e, t) {
        const n = this.removeViews(e, t);
        n.length && this._onViewsDeregistered.fire({
            views: n,
            viewContainer: t
        });
    }
    moveViews(e, t) {
        for (const n of this._views.keys())if (n !== t) {
            const i = this.removeViews(e, n);
            i.length && (this.addViews(i, t), this._onDidChangeContainer.fire({
                views: i,
                from: n,
                to: t
            }));
        }
    }
    getViews(e) {
        return this._views.get(e) || [];
    }
    getView(e) {
        for (const t of this._viewContainers){
            const n = (this._views.get(t) || []).filter((i)=>i.id === e)[0];
            if (n) return n;
        }
        return null;
    }
    getViewContainer(e) {
        for (const t of this._viewContainers)if ((this._views.get(t) || []).filter((i)=>i.id === e)[0]) return t;
        return null;
    }
    registerViewWelcomeContent(e, t) {
        return this._viewWelcomeContents.add(e, t), this._onDidChangeViewWelcomeContent.fire(e), rn(()=>{
            this._viewWelcomeContents.delete(e, t), this._onDidChangeViewWelcomeContent.fire(e);
        });
    }
    registerViewWelcomeContent2(e, t) {
        const n = new Map;
        for (const [i, r] of t)this._viewWelcomeContents.add(e, r), n.set(i, rn(()=>{
            this._viewWelcomeContents.delete(e, r), this._onDidChangeViewWelcomeContent.fire(e);
        }));
        return this._onDidChangeViewWelcomeContent.fire(e), n;
    }
    getViewWelcomeContent(e) {
        const t = [];
        return this._viewWelcomeContents.forEach(e, (n)=>t.push(n)), t.sort(jEv);
    }
    addViews(e, t) {
        let n = this._views.get(t);
        n || (n = [], this._views.set(t, n), this._viewContainers.push(t));
        for (const i of e){
            if (this.getView(i.id) !== null) throw new Error(S(4524, null, i.id));
            n.push(i);
        }
    }
    removeViews(e, t) {
        const n = this._views.get(t);
        if (!n) return [];
        const i = [], r = [];
        for (const s of n)e.includes(s) ? i.push(s) : r.push(s);
        return i.length && (r.length ? this._views.set(t, r) : (this._views.delete(t), this._viewContainers.splice(this._viewContainers.indexOf(t), 1))), i;
    }
}, kn.add(Cm.ViewsRegistry, new JFd), eh = vn("viewDescriptorService"), cet = ((e)=>(e[e.Default = 0] = "Default", e[e.Expand = 1] = "Expand", e))(cet || {}), cF = ((e)=>(e[e.None = 0] = "None", e[e.Collapsed = 1] = "Collapsed", e[e.Expanded = 2] = "Expanded", e))(cF || {}), wWt = class {
    constructor(e, t){
        this.resolved = !1, this._hasResolve = !1, y3(this, e), this._hasResolve = !!t, this.resolve = async (n)=>{
            if (t && !this.resolved) {
                const i = await t(n);
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
}, e3d = class extends Error {
    constructor(e){
        super(S(4525, null, e)), this.name = "NoTreeViewError";
    }
    static is(e) {
        return !!e && e.name === "NoTreeViewError";
    }
};

}
