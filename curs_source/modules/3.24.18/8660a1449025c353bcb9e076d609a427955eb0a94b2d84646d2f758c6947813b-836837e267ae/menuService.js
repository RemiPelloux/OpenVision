import { Gt, Npr, Nt, Qe, tCo, tt } from "./Iwo.js";
import { Kh, vu } from "./actions.js";
import { Ft, es, ji, kQ, n6 } from "./actions_2.js";
import { bo } from "./arrays.js";
import { Yu, qn } from "./async.js";
import { nr, rs } from "./commands.js";
import { or, yi } from "./configuration.js";
import { fMo, pa } from "./constants_8.js";
import { Hi, Rr } from "./contextkey.js";
import { Al, ru } from "./keybinding.js";
import { Bt } from "./nls.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ttt, pqo, yLy } from "./ze.js";
var WTr, yoe, mqo, IBt, voi;
export { IBt, WTr, mqo, voi, yoe };
var __wakaru_gqo_initialized = false;
export function gqo() {
if (__wakaru_gqo_initialized) return;
__wakaru_gqo_initialized = true;
"use strict";
E(), vu(), bo(), qn(), Gt(), Qe(), Bt(), rs(), Hi(), ru(), Zi(), or(), pa(), es(), WTr = class {
    constructor(t, e, n, i){
        this._commandService = t, this._keybindingService = e, this._hiddenStates = new yoe(n, i);
    }
    createMenu(t, e, n) {
        return new voi(t, this._hiddenStates, {
            emitEventsForSubmenuChanges: !1,
            eventDebounceDelay: 50,
            ...n
        }, this._commandService, this._keybindingService, e);
    }
    getMenuActions(t, e, n) {
        const i = new voi(t, this._hiddenStates, {
            emitEventsForSubmenuChanges: !1,
            eventDebounceDelay: 50,
            ...n
        }, this._commandService, this._keybindingService, e), r = i.getActions(n);
        return i.dispose(), r;
    }
    getMenuContexts(t) {
        const e = new mqo(t, !1);
        return new Set([
            ...e.structureContextKeys,
            ...e.preconditionContextKeys,
            ...e.toggledContextKeys
        ]);
    }
    resetHiddenStates(t) {
        this._hiddenStates.reset(t);
    }
}, WTr = Re([
    F(0, nr),
    F(1, Al),
    F(2, ki),
    F(3, yi)
], WTr), yoe = class {
    constructor(t, e){
        this._storageService = t, this._configurationService = e, this._disposables = new Nt, this._onDidChange = new tt, this.onDidChange = this._onDidChange.event, this._ignoreChangeEvent = !1, this._hiddenByDefaultCache = new Map;
        try {
            const n = t.get(yoe._key, 0, "{}");
            this._data = JSON.parse(n);
        } catch  {
            this._data = Object.create(null);
        }
        this._disposables.add(t.onDidChangeValue(0, yoe._key, this._disposables)(()=>{
            if (!this._ignoreChangeEvent) try {
                const n = t.get(yoe._key, 0, "{}");
                this._data = JSON.parse(n);
            } catch (n) {
                console.log("FAILED to read storage after UPDATE", n);
            }
            this._onDidChange.fire();
        }));
        try {
            const n = t.get(yoe._visibleCommandsKey, 0, "{}");
            this._visibleData = JSON.parse(n);
        } catch  {
            this._visibleData = Object.create(null);
        }
        this._disposables.add(t.onDidChangeValue(0, yoe._visibleCommandsKey, this._disposables)(()=>{
            if (!this._ignoreChangeEvent) try {
                const n = t.get(yoe._visibleCommandsKey, 0, "{}");
                this._visibleData = JSON.parse(n);
            } catch (n) {
                console.log("FAILED to read storage after UPDATE", n);
            }
            this._onDidChange.fire();
        }));
    }
    isEditorTitle(t) {
        return t.id === Ft.EditorTitle.id;
    }
    _matchesEditorTitleBuiltInCommandPrefix(t) {
        return yoe._editorTitleBuiltInCommandPrefixes.some((e)=>t.startsWith(e));
    }
    _isExtensionContributedEditorTitleCommand(t) {
        return ji.getCommand(t)?.source ? !0 : ji.getMenuItems(Ft.EditorTitle).some((e)=>Ttt(e) && e.command.id === t && !!e.command.source);
    }
    _isEditorTitleCommandVisibleByDefault(t) {
        return this._isExtensionContributedEditorTitleCommand(t) ? this._matchesEditorTitleBuiltInCommandPrefix(t) : !0;
    }
    dispose() {
        this._onDidChange.dispose(), this._disposables.dispose();
    }
    _isHiddenByDefault(t, e) {
        return this._hiddenByDefaultCache.get(`${t.id}/${e}`) ?? !1;
    }
    setDefaultState(t, e, n) {
        this._hiddenByDefaultCache.set(`${t.id}/${e}`, n);
    }
    isHidden(t, e) {
        if (this.isEditorTitle(t)) return (this._configurationService.getValue(fMo) ?? []).includes(e) ? !1 : this._data[t.id]?.includes(e) ?? !1 ? !0 : this._visibleData[t.id]?.includes(e) ?? !1 ? !1 : !this._isEditorTitleCommandVisibleByDefault(e);
        const n = this._isHiddenByDefault(t, e), i = this._data[t.id]?.includes(e) ?? !1;
        return n ? !i : i;
    }
    updateHidden(t, e, n) {
        if (this.isEditorTitle(t)) {
            const s = this._data[t.id], o = this._visibleData[t.id];
            if (n) {
                if (s ? s.includes(e) || s.push(e) : this._data[t.id] = [
                    e
                ], o) {
                    const a = o.indexOf(e);
                    a >= 0 && Npr(o, a), o.length === 0 && delete this._visibleData[t.id];
                }
            } else {
                if (s) {
                    const a = s.indexOf(e);
                    a >= 0 && Npr(s, a), s.length === 0 && delete this._data[t.id];
                }
                if (this._isEditorTitleCommandVisibleByDefault(e)) {
                    if (o) {
                        const a = o.indexOf(e);
                        a >= 0 && Npr(o, a), o.length === 0 && delete this._visibleData[t.id];
                    }
                } else o ? o.includes(e) || o.push(e) : this._visibleData[t.id] = [
                    e
                ];
            }
            this._persist();
            return;
        }
        this._isHiddenByDefault(t, e) && (n = !n);
        const r = this._data[t.id];
        if (n) r ? r.indexOf(e) < 0 && r.push(e) : this._data[t.id] = [
            e
        ];
        else if (r) {
            const s = r.indexOf(e);
            s >= 0 && Npr(r, s), r.length === 0 && delete this._data[t.id];
        }
        this._persist();
    }
    reset(t) {
        if (t === void 0) this._data = Object.create(null), this._visibleData = Object.create(null), this._persist();
        else {
            for (const { id: e } of t)this._data[e] && delete this._data[e], this._visibleData[e] && delete this._visibleData[e];
            this._persist();
        }
    }
    _persist() {
        try {
            this._ignoreChangeEvent = !0;
            const t = JSON.stringify(this._data);
            this._storageService.store(yoe._key, t, 0, 0);
            const e = JSON.stringify(this._visibleData);
            this._storageService.store(yoe._visibleCommandsKey, e, 0, 0);
        } finally{
            this._ignoreChangeEvent = !1;
        }
    }
}, yoe._key = "menu.hiddenCommands", yoe._visibleCommandsKey = "menu.visibleCommands", yoe._editorTitleBuiltInCommandPrefixes = [
    "workbench.",
    "_workbench.",
    "editor.",
    "settings.",
    "debug.",
    "terminal.",
    "git.",
    "merge-conflict.",
    "markdown.",
    "composer."
], yoe = Re([
    F(0, ki),
    F(1, yi)
], yoe), mqo = class oXs {
    constructor(e, n){
        this._id = e, this._collectContextKeysForSubmenus = n, this._menuGroups = [], this._allMenuIds = new Set, this._structureContextKeys = new Set, this._preconditionContextKeys = new Set, this._toggledContextKeys = new Set, this.refresh();
    }
    get allMenuIds() {
        return this._allMenuIds;
    }
    get structureContextKeys() {
        return this._structureContextKeys;
    }
    get preconditionContextKeys() {
        return this._preconditionContextKeys;
    }
    get toggledContextKeys() {
        return this._toggledContextKeys;
    }
    refresh() {
        this._menuGroups.length = 0, this._allMenuIds.clear(), this._structureContextKeys.clear(), this._preconditionContextKeys.clear(), this._toggledContextKeys.clear();
        const e = this._sort(ji.getMenuItems(this._id));
        let n;
        for (const i of e){
            const r = i.group || "";
            (!n || n[0] !== r) && (n = [
                r,
                []
            ], this._menuGroups.push(n)), n[1].push(i), this._collectContextKeysAndSubmenuIds(i);
        }
        this._allMenuIds.add(this._id);
    }
    _sort(e) {
        return e;
    }
    _collectContextKeysAndSubmenuIds(e) {
        if (oXs._fillInKbExprKeys(e.when, this._structureContextKeys), Ttt(e)) {
            if (e.command.precondition && oXs._fillInKbExprKeys(e.command.precondition, this._preconditionContextKeys), e.command.toggled) {
                const n = e.command.toggled.condition || e.command.toggled;
                oXs._fillInKbExprKeys(n, this._toggledContextKeys);
            }
        } else this._collectContextKeysForSubmenus && (ji.getMenuItems(e.submenu).forEach(this._collectContextKeysAndSubmenuIds, this), this._allMenuIds.add(e.submenu));
    }
    static _fillInKbExprKeys(e, n) {
        if (e) for (const i of e.keys())n.add(i);
    }
}, IBt = class extends mqo {
    constructor(t, e, n, i, r, s){
        super(t, n), this._hiddenStates = e, this._commandService = i, this._keybindingService = r, this._contextKeyService = s, this.refresh();
    }
    createActionGroups(t) {
        const e = [];
        for (const n of this._menuGroups){
            const [i, r] = n;
            let s;
            for (const o of r)if (this._contextKeyService.contextMatchesRules(o.when)) {
                const a = Ttt(o);
                a && this._hiddenStates.setDefaultState(this._id, o.command.id, !!o.isHiddenByDefault);
                const l = yLy(this._id, a ? o.command : o, this._hiddenStates);
                if (a) {
                    const c = pqo(this._commandService, this._keybindingService, o.command.id, o.when);
                    (s ??= []).push(new n6(o.command, o.alt, t, l, c, this._contextKeyService, this._commandService));
                } else {
                    const c = new IBt(o.submenu, this._hiddenStates, this._collectContextKeysForSubmenus, this._commandService, this._keybindingService, this._contextKeyService).createActionGroups(t), u = Kh.join(...c.map((d)=>d[1]));
                    u.length > 0 && (s ??= []).push(new kQ(o, l, u));
                }
            }
            s && s.length > 0 && e.push([
                i,
                s
            ]);
        }
        return e;
    }
    _sort(t) {
        return t.sort(IBt._compareMenuItems);
    }
    static _compareMenuItems(t, e) {
        const n = t.group, i = e.group;
        if (n !== i) {
            if (n) {
                if (!i) return -1;
            } else return 1;
            if (n === "navigation") return -1;
            if (i === "navigation") return 1;
            const o = n.localeCompare(i);
            if (o !== 0) return o;
        }
        const r = t.order || 0, s = e.order || 0;
        return r < s ? -1 : r > s ? 1 : IBt._compareTitles(Ttt(t) ? t.command.title : t.title, Ttt(e) ? e.command.title : e.title);
    }
    static _compareTitles(t, e) {
        const n = typeof t == "string" ? t : t.original, i = typeof e == "string" ? e : e.original;
        return n.localeCompare(i);
    }
}, IBt = Re([
    F(3, nr),
    F(4, Al),
    F(5, Rr)
], IBt), voi = class {
    constructor(t, e, n, i, r, s){
        this._disposables = new Nt, this._menuInfo = new IBt(t, e, n.emitEventsForSubmenuChanges, i, r, s);
        const o = new Yu(()=>{
            this._menuInfo.refresh(), this._onDidChange.fire({
                menu: this,
                isStructuralChange: !0,
                isEnablementChange: !0,
                isToggleChange: !0
            });
        }, n.eventDebounceDelay);
        this._disposables.add(o), this._disposables.add(ji.onDidChangeMenu((u)=>{
            for (const d of this._menuInfo.allMenuIds)if (u.has(d)) {
                o.schedule();
                break;
            }
        }));
        const a = this._disposables.add(new Nt), l = (u)=>{
            let d = !1, h = !1, p = !1;
            for (const g of u)if (d = d || g.isStructuralChange, h = h || g.isEnablementChange, p = p || g.isToggleChange, d && h && p) break;
            return {
                menu: this,
                isStructuralChange: d,
                isEnablementChange: h,
                isToggleChange: p
            };
        }, c = ()=>{
            a.add(s.onDidChangeContext((u)=>{
                const d = u.affectsSome(this._menuInfo.structureContextKeys), h = u.affectsSome(this._menuInfo.preconditionContextKeys), p = u.affectsSome(this._menuInfo.toggledContextKeys);
                (d || h || p) && this._onDidChange.fire({
                    menu: this,
                    isStructuralChange: d,
                    isEnablementChange: h,
                    isToggleChange: p
                });
            })), a.add(e.onDidChange((u)=>{
                this._onDidChange.fire({
                    menu: this,
                    isStructuralChange: !0,
                    isEnablementChange: !1,
                    isToggleChange: !1
                });
            }));
        };
        this._onDidChange = new tCo({
            onWillAddFirstListener: c,
            onDidRemoveLastListener: a.clear.bind(a),
            delay: n.eventDebounceDelay,
            merge: l
        }), this.onDidChange = this._onDidChange.event;
    }
    getActions(t) {
        return this._menuInfo.createActionGroups(t);
    }
    dispose() {
        this._disposables.dispose(), this._onDidChange.dispose();
    }
}, voi = Re([
    F(3, nr),
    F(4, Al),
    F(5, Rr)
], voi);

}
