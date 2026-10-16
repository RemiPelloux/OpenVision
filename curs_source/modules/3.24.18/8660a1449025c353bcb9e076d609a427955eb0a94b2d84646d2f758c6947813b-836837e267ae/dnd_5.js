import { Di, Gt, Mm, Nt, Qe, en, m4, st, tt } from "./Iwo.js";
import { F6t, p_t } from "./SZu.js";
import { qRn } from "./Ycg.js";
import { bo } from "./arrays.js";
import { OEg, lgl } from "./broadcast.js";
import { hnt } from "./dataTransfer.js";
import { fwe } from "./dnd.js";
import { BD, bO } from "./dnd_3.js";
import { Hn, Pr, aoe, hW } from "./dom_2.js";
import { Wo, gr } from "./editorService.js";
import { od } from "./editor_2.js";
import { is, ms } from "./files.js";
import { Od, Tc } from "./host.js";
import { It, dn } from "./instantiation.js";
import { qg } from "./label.js";
import { Yq } from "./marshalling.js";
import { tB } from "./mime.js";
import { Ki, Ot } from "./network.js";
import { qc } from "./opener.js";
import { Eo } from "./platform_2.js";
import { Aa, Lr } from "./resources.js";
import { u_ } from "./textfiles.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { $t, Bs } from "./window.js";
import { Sr, yr } from "./workspace.js";
import { Uat, eTe } from "./workspaceEditing.js";
import { HM, lN } from "./workspaces.js";
import { Nqo, li } from "./ze.js";
var kR, n9, zRn, UEg, gTe, k9e, dVe, cgl, ugl, jEg, $Eg;
export { $Eg, UEg, cgl, dVe, gTe, jEg, k9e, kR, n9, ugl, zRn };
var __wakaru_fTe_initialized = false;
export function fTe() {
if (__wakaru_fTe_initialized) return;
__wakaru_fTe_initialized = true;
"use strict";
E(), fwe(), Hn(), bo(), hnt(), Gt(), Qe(), Yq(), tB(), Ki(), Di(), Lr(), fn(), bO(), ms(), It(), qg(), qc(), Eo(), Sr(), HM(), od(), Wo(), Od(), u_(), Uat(), Bs(), OEg(), kR = class {
    constructor(t){
        this.identifier = t;
    }
}, n9 = class {
    constructor(t){
        this.identifier = t;
    }
}, zRn = class {
    constructor(t, e, n, i, r, s, o, a){
        this.options = t, this.fileService = e, this.workspacesService = n, this.editorService = i, this.workspaceEditingService = r, this.hostService = s, this.contextService = o, this.instantiationService = a;
    }
    async handleDrop(t, e, n, i, r) {
        const s = await this.instantiationService.invokeFunction((l)=>Nqo(l, t));
        if (!s.length) return;
        if (await this.hostService.focus(e), this.options.allowWorkspaceOpen) {
            const l = Mm(s.filter((c)=>c.allowWorkspaceOpen && c.resource?.scheme === Ot.file).map((c)=>c.resource));
            if (l.length > 0 && await this.handleWorkspaceDrop(l)) return;
        }
        const o = Mm(s.filter((l)=>l.isExternal && l.resource?.scheme === Ot.file).map((l)=>l.resource));
        o.length && this.workspacesService.addRecentlyOpened(o.map((l)=>({
                fileUri: l
            })));
        const a = n?.();
        await this.editorService.openEditors(s.map((l)=>({
                ...l,
                resource: l.resource,
                options: {
                    ...l.options,
                    ...r,
                    pinned: !0
                }
            })), a, {
            validateTrust: !0
        }), i?.(a);
    }
    async handleWorkspaceDrop(t) {
        const e = [], n = [];
        return await Promise.all(t.map(async (i)=>{
            if (F6t(i)) {
                e.push({
                    workspaceUri: i
                });
                return;
            }
            try {
                const r = await this.fileService.stat(i);
                r.isDirectory && (e.push({
                    folderUri: r.resource
                }), n.push({
                    uri: r.resource
                }));
            } catch  {}
        })), e.length === 0 ? !1 : (e.length > n.length || n.length === 1 ? await this.hostService.openWindow(e) : p_t(this.contextService.getWorkspace()) ? await this.workspaceEditingService.addFolders(n) : await this.workspaceEditingService.createAndEnterWorkspace(n), !0);
    }
}, zRn = Re([
    F(1, is),
    F(2, lN),
    F(3, gr),
    F(4, eTe),
    F(5, Tc),
    F(6, yr),
    F(7, dn)
], zRn), UEg = class {
    constructor(t, e){
        this.type = t, this.id = e;
    }
    update(t) {}
    getData() {
        return {
            type: this.type,
            id: this.id
        };
    }
}, gTe = class {
    constructor(t){
        this.compositeId = t;
    }
    get id() {
        return this.compositeId;
    }
}, k9e = class {
    constructor(t){
        this.viewId = t;
    }
    get id() {
        return this.viewId;
    }
}, dVe = class d$n extends st {
    constructor(){
        super(), this.transferData = BD.getInstance(), this.onDragStart = this._register(new tt), this.onDragEnd = this._register(new tt), this._register(this.onDragEnd.event((e)=>{
            const n = e.dragAndDropData.getData().id, i = e.dragAndDropData.getData().type;
            this.readDragData(i)?.getData().id === n && this.transferData.clearData(i === "view" ? k9e.prototype : gTe.prototype);
        }));
    }
    static get INSTANCE() {
        return d$n.instance || (d$n.instance = new d$n, m4(d$n.instance)), d$n.instance;
    }
    readDragData(e) {
        if (this.transferData.hasData(e === "view" ? k9e.prototype : gTe.prototype)) {
            const n = this.transferData.getData(e === "view" ? k9e.prototype : gTe.prototype);
            if (n && n[0]) return new UEg(e, n[0].id);
        }
    }
    writeDragData(e, n) {
        this.transferData.setData([
            n === "view" ? new k9e(e) : new gTe(e)
        ], n === "view" ? k9e.prototype : gTe.prototype);
    }
    registerTarget(e, n) {
        const i = new Nt;
        return i.add(new aoe(e, {
            onDragEnter: (r)=>{
                if (r.preventDefault(), n.onDragEnter) {
                    const s = this.readDragData("composite") || this.readDragData("view");
                    s && n.onDragEnter({
                        eventData: r,
                        dragAndDropData: s
                    });
                }
            },
            onDragLeave: (r)=>{
                const s = this.readDragData("composite") || this.readDragData("view");
                n.onDragLeave && s && n.onDragLeave({
                    eventData: r,
                    dragAndDropData: s
                });
            },
            onDrop: (r)=>{
                if (n.onDrop) {
                    const s = this.readDragData("composite") || this.readDragData("view");
                    if (!s) return;
                    n.onDrop({
                        eventData: r,
                        dragAndDropData: s
                    }), this.onDragEnd.fire({
                        eventData: r,
                        dragAndDropData: s
                    });
                }
            },
            onDragOver: (r)=>{
                if (r.preventDefault(), n.onDragOver) {
                    const s = this.readDragData("composite") || this.readDragData("view");
                    if (!s) return;
                    n.onDragOver({
                        eventData: r,
                        dragAndDropData: s
                    });
                }
            }
        })), n.onDragStart && this.onDragStart.event((r)=>{
            n.onDragStart(r);
        }, this, i), n.onDragEnd && this.onDragEnd.event((r)=>{
            n.onDragEnd(r);
        }, this, i), i;
    }
    registerDraggable(e, n, i) {
        e.draggable = !0;
        const r = new Nt;
        return r.add(new aoe(e, {
            onDragStart: (s)=>{
                const { id: o, type: a } = n();
                this.writeDragData(o, a), s.dataTransfer?.setDragImage(e, 0, 0), this.onDragStart.fire({
                    eventData: s,
                    dragAndDropData: this.readDragData(a)
                });
            },
            onDragEnd: (s)=>{
                const { type: o } = n(), a = this.readDragData(o);
                a && this.onDragEnd.fire({
                    eventData: s,
                    dragAndDropData: a
                });
            },
            onDragEnter: (s)=>{
                if (i.onDragEnter) {
                    const o = this.readDragData("composite") || this.readDragData("view");
                    if (!o) return;
                    o && i.onDragEnter({
                        eventData: s,
                        dragAndDropData: o
                    });
                }
            },
            onDragLeave: (s)=>{
                const o = this.readDragData("composite") || this.readDragData("view");
                o && i.onDragLeave?.({
                    eventData: s,
                    dragAndDropData: o
                });
            },
            onDrop: (s)=>{
                if (i.onDrop) {
                    const o = this.readDragData("composite") || this.readDragData("view");
                    if (!o) return;
                    i.onDrop({
                        eventData: s,
                        dragAndDropData: o
                    }), this.onDragEnd.fire({
                        eventData: s,
                        dragAndDropData: o
                    });
                }
            },
            onDragOver: (s)=>{
                if (i.onDragOver) {
                    const o = this.readDragData("composite") || this.readDragData("view");
                    if (!o) return;
                    i.onDragOver({
                        eventData: s,
                        dragAndDropData: o
                    });
                }
            }
        })), i.onDragStart && this.onDragStart.event((s)=>{
            i.onDragStart(s);
        }, this, r), i.onDragEnd && this.onDragEnd.event((s)=>{
            i.onDragEnd(s);
        }, this, r), r;
    }
}, cgl = class {
    constructor(t, e){
        this.toResource = t, this.instantiationService = e;
    }
    getDragURI(t) {
        const e = this.toResource(t);
        return e ? e.toString() : null;
    }
    getDragLabel(t) {
        const e = Mm(t.map(this.toResource));
        return e.length === 1 ? Aa(e[0]) : e.length > 1 ? String(e.length) : void 0;
    }
    onDragStart(t, e) {
        const n = [], i = t.elements;
        for (const r of i){
            const s = this.toResource(r);
            s && n.push(s);
        }
        this.onWillDragElements(i, e), n.length && this.instantiationService.invokeFunction((r)=>qRn(r, n, e));
    }
    onWillDragElements(t, e) {}
    onDragOver(t, e, n, i, r) {
        return !1;
    }
    drop(t, e, n, i, r) {}
    dispose() {}
}, cgl = Re([
    F(1, dn)
], cgl), ugl = class kPb extends st {
    constructor(){
        super(), this.broadcaster = this._register(new lgl(kPb.CHANNEL_NAME)), this.draggedOver = !1, this.registerListeners();
    }
    registerListeners() {
        this._register(en.runAndSubscribe(hW, ({ window: e, disposables: n })=>{
            n.add(li(e, Pr.DRAG_OVER, ()=>this.markDraggedOver(!1), !0)), n.add(li(e, Pr.DRAG_LEAVE, ()=>this.clearDraggedOver(!1), !0));
        }, {
            window: $t,
            disposables: this._store
        })), this._register(this.broadcaster.onDidReceiveData((e)=>{
            e === !0 ? this.markDraggedOver(!0) : this.clearDraggedOver(!0);
        }));
    }
    get isDraggedOver() {
        return this.draggedOver;
    }
    markDraggedOver(e) {
        this.draggedOver !== !0 && (this.draggedOver = !0, e || this.broadcaster.postData(!0));
    }
    clearDraggedOver(e) {
        this.draggedOver !== !1 && (this.draggedOver = !1, e || this.broadcaster.postData(!1));
    }
}, ugl.CHANNEL_NAME = "monaco-workbench-global-dragged-over", jEg = ugl, $Eg = new jEg;

}
