import { $0o, Ei, Gt, Qe, Ya, Zm, en, st, tt } from "./Iwo.js";
import { STo, nv } from "./SZu.js";
import { qRi } from "./Ycg.js";
import { vu, za } from "./actions.js";
import { bo } from "./arrays.js";
import { tT } from "./errorMessage.js";
import { NKt } from "./linkedText.js";
import { du } from "./map.js";
import { AT, Awr, F1, Ks, Yn } from "./notification.js";
import { E } from "./tslib.es6.js";
import { kUo } from "./ze.js";
var ZXg, zwl, QXg, JXg, Vwl, Oms, YKt, eZg;
export { JXg, Oms, QXg, Vwl, YKt, ZXg, eZg, zwl };
var __wakaru_XKt_initialized = false;
export function XKt() {
if (__wakaru_XKt_initialized) return;
__wakaru_XKt_initialized = true;
"use strict";
E(), Ks(), tT(), Gt(), Qe(), Ei(), vu(), bo(), NKt(), du(), ZXg = class extends st {
    constructor(t, e){
        super(), this.item = t, this.onClose = e, this._onDidClose = this._register(new tt), this.onDidClose = this._onDidClose.event, this._onDidChangeVisibility = this._register(new tt), this.onDidChangeVisibility = this._onDidChangeVisibility.event, this.registerListeners();
    }
    registerListeners() {
        this._register(this.item.onDidChangeVisibility((t)=>this._onDidChangeVisibility.fire(t))), en.once(this.item.onDidClose)(()=>{
            this._onDidClose.fire(), this.dispose();
        });
    }
    get progress() {
        return this.item.progress;
    }
    updateSeverity(t) {
        this.item.updateSeverity(t);
    }
    updateMessage(t) {
        this.item.updateMessage(t);
    }
    updateActions(t) {
        this.item.updateActions(t);
    }
    close() {
        this.onClose(this.item), this.dispose();
    }
}, zwl = class nMb extends st {
    constructor(){
        super(...arguments), this._onDidChangeNotification = this._register(new tt), this.onDidChangeNotification = this._onDidChangeNotification.event, this._onDidChangeStatusMessage = this._register(new tt), this.onDidChangeStatusMessage = this._onDidChangeStatusMessage.event, this._onDidChangeFilter = this._register(new tt), this.onDidChangeFilter = this._onDidChangeFilter.event, this._notifications = [], this.filter = {
            global: AT.OFF,
            sources: new Map
        };
    }
    get notifications() {
        return this._notifications;
    }
    get statusMessage() {
        return this._statusMessage;
    }
    setFilter(e) {
        let n = !1;
        typeof e.global == "number" && (n = this.filter.global !== e.global, this.filter.global = e.global);
        let i = !1;
        e.sources && (i = !$0o(this.filter.sources, e.sources), this.filter.sources = e.sources), (n || i) && this._onDidChangeFilter.fire({
            global: n ? e.global : void 0,
            sources: i ? e.sources : void 0
        });
    }
    addNotification(e) {
        (e.source === "Github.copilot" || typeof e.source != "string" && e.source?.id === "Github.copilot") && (e = {
            ...e,
            message: "From COPILOT: " + e.message
        });
        const n = this.createViewItem(e);
        return n ? (this.findNotification(n)?.close(), this._notifications.splice(0, 0, n), this._onDidChangeNotification.fire({
            item: n,
            index: 0,
            kind: 0
        }), new ZXg(n, (r)=>this.onClose(r))) : nMb.NO_OP_NOTIFICATION;
    }
    onClose(e) {
        const n = this.findNotification(e);
        n && n !== e ? n.close() : e.close();
    }
    findNotification(e) {
        return this._notifications.find((n)=>n.equals(e));
    }
    createViewItem(e) {
        const n = Oms.create(e, this.filter);
        if (!n) return;
        const i = (o, a)=>{
            const l = this._notifications.indexOf(n);
            l >= 0 && this._onDidChangeNotification.fire({
                item: n,
                index: l,
                kind: o,
                detail: a
            });
        }, r = n.onDidChangeExpansion(()=>i(2)), s = n.onDidChangeContent((o)=>i(1, o.kind));
        return en.once(n.onDidClose)(()=>{
            r.dispose(), s.dispose();
            const o = this._notifications.indexOf(n);
            o >= 0 && (this._notifications.splice(o, 1), this._onDidChangeNotification.fire({
                item: n,
                index: o,
                kind: 3
            }));
        }), n;
    }
    showStatusMessage(e, n) {
        const i = eZg.create(e, n);
        return i ? (this._statusMessage = i, this._onDidChangeStatusMessage.fire({
            kind: 0,
            item: i
        }), {
            close: ()=>{
                this._statusMessage === i && (this._statusMessage = void 0, this._onDidChangeStatusMessage.fire({
                    kind: 1,
                    item: i
                }));
            }
        }) : {
            close: ()=>{}
        };
    }
}, zwl.NO_OP_NOTIFICATION = new Awr, QXg = zwl, JXg = class extends st {
    constructor(){
        super(), this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._state = Object.create(null);
    }
    get state() {
        return this._state;
    }
    infinite() {
        this._state.infinite || (this._state.infinite = !0, this._state.total = void 0, this._state.worked = void 0, this._state.done = void 0, this._onDidChange.fire());
    }
    done() {
        this._state.done || (this._state.done = !0, this._state.infinite = void 0, this._state.total = void 0, this._state.worked = void 0, this._onDidChange.fire());
    }
    total(t) {
        this._state.total !== t && (this._state.total = t, this._state.infinite = void 0, this._state.done = void 0, this._onDidChange.fire());
    }
    worked(t) {
        typeof this._state.worked == "number" ? this._state.worked += t : this._state.worked = t, this._state.infinite = void 0, this._state.done = void 0, this._onDidChange.fire();
    }
}, Vwl = class h$n extends st {
    constructor(e, n, i, r, s, o, a, l, c, u, d, h, p){
        super(), this.id = e, this._severity = n, this._sticky = i, this._priority = r, this._message = s, this._source = o, this._toastDurationMs = c, this._toastTitle = u, this._toastDescription = d, this._toastCode = h, this._closeNotificationOnToastDismiss = p, this._visible = !1, this._onDidChangeExpansion = this._register(new tt), this.onDidChangeExpansion = this._onDidChangeExpansion.event, this._onDidClose = this._register(new tt), this.onDidClose = this._onDidClose.event, this._onDidChangeContent = this._register(new tt), this.onDidChangeContent = this._onDidChangeContent.event, this._onDidChangeVisibility = this._register(new tt), this.onDidChangeVisibility = this._onDidChangeVisibility.event, a && this.setProgress(a), this.setActions(l);
    }
    static create(e, n) {
        if (!e || !e.message || Ya(e.message)) return;
        let i;
        typeof e.severity == "number" ? i = e.severity : i = Yn.Info;
        const r = h$n.parseNotificationMessage(e.message);
        if (!r) return;
        let s;
        e.actions ? s = e.actions : STo(e.message) && (s = {
            primary: e.message.actions
        });
        let o = e.priority ?? F1.DEFAULT;
        return (o === F1.DEFAULT || o === F1.OPTIONAL) && i !== Yn.Error && (n.global === AT.ERROR || kUo(e.source) && n.sources.get(e.source.id) === AT.ERROR) && (o = F1.SILENT), new h$n(e.id, i, e.sticky, o, r, e.source, e.progress, s, e.toastDurationMs, e.toastTitle, e.toastDescription, e.toastCode, e.closeNotificationOnToastDismiss);
    }
    static parseNotificationMessage(e) {
        let n;
        if (e instanceof Error ? n = nv(e, !1) : typeof e == "string" && (n = e), !n) return;
        const i = n;
        n.length > h$n.MAX_MESSAGE_LENGTH && (n = `${n.substr(0, h$n.MAX_MESSAGE_LENGTH)}...`), n = n.replace(/(\r\n|\n|\r)/gm, " ").trim();
        const r = qRi(n);
        return {
            raw: i,
            linkedText: r,
            original: e
        };
    }
    setProgress(e) {
        e.infinite ? this.progress.infinite() : e.total && (this.progress.total(e.total), e.worked && this.progress.worked(e.worked));
    }
    setActions(e = {
        primary: [],
        secondary: []
    }) {
        this._actions = {
            primary: Array.isArray(e.primary) ? e.primary : [],
            secondary: Array.isArray(e.secondary) ? e.secondary : []
        }, this._expanded = e.primary && e.primary.length > 0;
    }
    get canCollapse() {
        return !this.hasActions;
    }
    get expanded() {
        return !!this._expanded;
    }
    get severity() {
        return this._severity;
    }
    get sticky() {
        if (this._sticky) return !0;
        const e = this.hasActions;
        return !!(e && this._severity === Yn.Error || !e && this._expanded || this._progress && !this._progress.state.done);
    }
    get priority() {
        return this._priority;
    }
    get hasActions() {
        return !this._actions || !this._actions.primary ? !1 : this._actions.primary.length > 0;
    }
    get hasProgress() {
        return !!this._progress;
    }
    get progress() {
        return this._progress || (this._progress = this._register(new JXg), this._register(this._progress.onDidChange(()=>this._onDidChangeContent.fire({
                kind: 3
            })))), this._progress;
    }
    get toastDurationMs() {
        return this._toastDurationMs;
    }
    get toastTitle() {
        return this._toastTitle;
    }
    get toastDescription() {
        return this._toastDescription;
    }
    get toastCode() {
        return this._toastCode;
    }
    get closeNotificationOnToastDismiss() {
        return this._closeNotificationOnToastDismiss;
    }
    get message() {
        return this._message;
    }
    get source() {
        return typeof this._source == "string" ? this._source : this._source ? this._source.label : void 0;
    }
    get sourceId() {
        return this._source && typeof this._source != "string" && "id" in this._source ? this._source.id : void 0;
    }
    get actions() {
        return this._actions;
    }
    get visible() {
        return this._visible;
    }
    updateSeverity(e) {
        e !== this._severity && (this._severity = e, this._onDidChangeContent.fire({
            kind: 0
        }));
    }
    updateMessage(e) {
        const n = h$n.parseNotificationMessage(e);
        !n || n.raw === this._message.raw || (this._message = n, this._onDidChangeContent.fire({
            kind: 1
        }));
    }
    updateActions(e) {
        this.setActions(e), this._onDidChangeContent.fire({
            kind: 2
        });
    }
    updateVisibility(e) {
        this._visible !== e && (this._visible = e, this._onDidChangeVisibility.fire(e));
    }
    expand() {
        this._expanded || !this.canCollapse || (this._expanded = !0, this._onDidChangeExpansion.fire());
    }
    collapse(e) {
        !this._expanded || !this.canCollapse || (this._expanded = !1, e || this._onDidChangeExpansion.fire());
    }
    toggle() {
        this._expanded ? this.collapse() : this.expand();
    }
    close() {
        this._onDidClose.fire(), this.dispose();
    }
    equals(e) {
        if (this.hasProgress || e.hasProgress) return !1;
        if (typeof this.id == "string" || typeof e.id == "string") return this.id === e.id;
        if (typeof this._source == "object") {
            if (this._source.label !== e.source || this._source.id !== e.sourceId) return !1;
        } else if (this._source !== e.source) return !1;
        if (this._message.raw !== e.message.raw) return !1;
        const n = this._actions && this._actions.primary || [], i = e.actions && e.actions.primary || [];
        return Zm(n, i, (r, s)=>r.id + r.label === s.id + s.label);
    }
}, Vwl.MAX_MESSAGE_LENGTH = 1e3, Oms = Vwl, YKt = class iMb extends za {
    constructor(e, n){
        super(e, n.label, void 0, !0, async ()=>{
            n.run(), this._onDidRun.fire();
        }), this._onDidRun = this._register(new tt), this.onDidRun = this._onDidRun.event, this._keepOpen = !!n.keepOpen, this._menu = !n.isSecondary && n.menu ? n.menu.map((i, r)=>new iMb(`${e}.${r}`, i)) : void 0;
    }
    get menu() {
        return this._menu;
    }
    get keepOpen() {
        return this._keepOpen;
    }
}, eZg = class {
    static create(t, e) {
        if (!t || Ya(t)) return;
        let n;
        if (t instanceof Error ? n = nv(t, !1) : typeof t == "string" && (n = t), !!n) return {
            message: n,
            options: e
        };
    }
};

}
