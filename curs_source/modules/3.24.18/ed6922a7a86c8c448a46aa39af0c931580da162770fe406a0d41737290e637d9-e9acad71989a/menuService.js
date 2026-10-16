import { He, Se, Upi, bt, pqr, ve } from "./HVr.js";
import { Vc, Vo } from "./actions.js";
import { Bn, C, Re, ei, ie, n2, rv } from "./actions_2.js";
import { dr } from "./arrays.js";
import { ac, bn } from "./async.js";
import { $n, vi } from "./commands.js";
import { Cn, qt } from "./configuration.js";
import { PKr, So } from "./constants_8.js";
import { dn, xn } from "./contextkey.js";
import { no, qr } from "./keybinding.js";
import { rt } from "./nls.js";
import { TSg, cwe, lis } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { x } from "./tslib.es6.js";
var dyi, zK, uis, omt, Wvn;
export { Wvn, dyi, omt, uis, zK };
var __wakaru_dis_initialized = false;
export function dis() {
if (__wakaru_dis_initialized) return;
__wakaru_dis_initialized = true;
"use strict";
x(), Vo(), dr(), bn(), bt(), Se(), rt(), vi(), dn(), no(), Vn(), Cn(), So(), ei(), dyi = class {
    constructor(e, t, n, i){
        this._commandService = e, this._keybindingService = t, this._hiddenStates = new zK(n, i);
    }
    createMenu(e, t, n) {
        return new Wvn(e, this._hiddenStates, {
            emitEventsForSubmenuChanges: !1,
            eventDebounceDelay: 50,
            ...n
        }, this._commandService, this._keybindingService, t);
    }
    getMenuActions(e, t, n) {
        const i = new Wvn(e, this._hiddenStates, {
            emitEventsForSubmenuChanges: !1,
            eventDebounceDelay: 50,
            ...n
        }, this._commandService, this._keybindingService, t), r = i.getActions(n);
        return i.dispose(), r;
    }
    getMenuContexts(e) {
        const t = new uis(e, !1);
        return new Set([
            ...t.structureContextKeys,
            ...t.preconditionContextKeys,
            ...t.toggledContextKeys
        ]);
    }
    resetHiddenStates(e) {
        this._hiddenStates.reset(e);
    }
}, dyi = ie([
    C(0, $n),
    C(1, qr),
    C(2, yn),
    C(3, qt)
], dyi), zK = class {
    constructor(e, t){
        this._storageService = e, this._configurationService = t, this._disposables = new He, this._onDidChange = new ve, this.onDidChange = this._onDidChange.event, this._ignoreChangeEvent = !1, this._hiddenByDefaultCache = new Map;
        try {
            const n = e.get(zK._key, 0, "{}");
            this._data = JSON.parse(n);
        } catch  {
            this._data = Object.create(null);
        }
        this._disposables.add(e.onDidChangeValue(0, zK._key, this._disposables)(()=>{
            if (!this._ignoreChangeEvent) try {
                const n = e.get(zK._key, 0, "{}");
                this._data = JSON.parse(n);
            } catch (n) {
                console.log("FAILED to read storage after UPDATE", n);
            }
            this._onDidChange.fire();
        }));
        try {
            const n = e.get(zK._visibleCommandsKey, 0, "{}");
            this._visibleData = JSON.parse(n);
        } catch  {
            this._visibleData = Object.create(null);
        }
        this._disposables.add(e.onDidChangeValue(0, zK._visibleCommandsKey, this._disposables)(()=>{
            if (!this._ignoreChangeEvent) try {
                const n = e.get(zK._visibleCommandsKey, 0, "{}");
                this._visibleData = JSON.parse(n);
            } catch (n) {
                console.log("FAILED to read storage after UPDATE", n);
            }
            this._onDidChange.fire();
        }));
    }
    isEditorTitle(e) {
        return e.id === Re.EditorTitle.id;
    }
    _matchesEditorTitleBuiltInCommandPrefix(e) {
        return zK._editorTitleBuiltInCommandPrefixes.some((t)=>e.startsWith(t));
    }
    _isExtensionContributedEditorTitleCommand(e) {
        return Bn.getCommand(e)?.source ? !0 : Bn.getMenuItems(Re.EditorTitle).some((t)=>cwe(t) && t.command.id === e && !!t.command.source);
    }
    _isEditorTitleCommandVisibleByDefault(e) {
        return this._isExtensionContributedEditorTitleCommand(e) ? this._matchesEditorTitleBuiltInCommandPrefix(e) : !0;
    }
    dispose() {
        this._onDidChange.dispose(), this._disposables.dispose();
    }
    _isHiddenByDefault(e, t) {
        return this._hiddenByDefaultCache.get(`${e.id}/${t}`) ?? !1;
    }
    setDefaultState(e, t, n) {
        this._hiddenByDefaultCache.set(`${e.id}/${t}`, n);
    }
    isHidden(e, t) {
        if (this.isEditorTitle(e)) return (this._configurationService.getValue(PKr) ?? []).includes(t) ? !1 : this._data[e.id]?.includes(t) ?? !1 ? !0 : this._visibleData[e.id]?.includes(t) ?? !1 ? !1 : !this._isEditorTitleCommandVisibleByDefault(t);
        const n = this._isHiddenByDefault(e, t), i = this._data[e.id]?.includes(t) ?? !1;
        return n ? !i : i;
    }
    updateHidden(e, t, n) {
        if (this.isEditorTitle(e)) {
            const s = this._data[e.id], o = this._visibleData[e.id];
            if (n) {
                if (s ? s.includes(t) || s.push(t) : this._data[e.id] = [
                    t
                ], o) {
                    const a = o.indexOf(t);
                    a >= 0 && Upi(o, a), o.length === 0 && delete this._visibleData[e.id];
                }
            } else {
                if (s) {
                    const a = s.indexOf(t);
                    a >= 0 && Upi(s, a), s.length === 0 && delete this._data[e.id];
                }
                if (this._isEditorTitleCommandVisibleByDefault(t)) {
                    if (o) {
                        const a = o.indexOf(t);
                        a >= 0 && Upi(o, a), o.length === 0 && delete this._visibleData[e.id];
                    }
                } else o ? o.includes(t) || o.push(t) : this._visibleData[e.id] = [
                    t
                ];
            }
            this._persist();
            return;
        }
        this._isHiddenByDefault(e, t) && (n = !n);
        const r = this._data[e.id];
        if (n) r ? r.indexOf(t) < 0 && r.push(t) : this._data[e.id] = [
            t
        ];
        else if (r) {
            const s = r.indexOf(t);
            s >= 0 && Upi(r, s), r.length === 0 && delete this._data[e.id];
        }
        this._persist();
    }
    reset(e) {
        if (e === void 0) this._data = Object.create(null), this._visibleData = Object.create(null), this._persist();
        else {
            for (const { id: t } of e)this._data[t] && delete this._data[t], this._visibleData[t] && delete this._visibleData[t];
            this._persist();
        }
    }
    _persist() {
        try {
            this._ignoreChangeEvent = !0;
            const e = JSON.stringify(this._data);
            this._storageService.store(zK._key, e, 0, 0);
            const t = JSON.stringify(this._visibleData);
            this._storageService.store(zK._visibleCommandsKey, t, 0, 0);
        } finally{
            this._ignoreChangeEvent = !1;
        }
    }
}, zK._key = "menu.hiddenCommands", zK._visibleCommandsKey = "menu.visibleCommands", zK._editorTitleBuiltInCommandPrefixes = [
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
], zK = ie([
    C(0, yn),
    C(1, qt)
], zK), uis = class b1r {
    constructor(t, n){
        this._id = t, this._collectContextKeysForSubmenus = n, this._menuGroups = [], this._allMenuIds = new Set, this._structureContextKeys = new Set, this._preconditionContextKeys = new Set, this._toggledContextKeys = new Set, this.refresh();
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
        const t = this._sort(Bn.getMenuItems(this._id));
        let n;
        for (const i of t){
            const r = i.group || "";
            (!n || n[0] !== r) && (n = [
                r,
                []
            ], this._menuGroups.push(n)), n[1].push(i), this._collectContextKeysAndSubmenuIds(i);
        }
        this._allMenuIds.add(this._id);
    }
    _sort(t) {
        return t;
    }
    _collectContextKeysAndSubmenuIds(t) {
        if (b1r._fillInKbExprKeys(t.when, this._structureContextKeys), cwe(t)) {
            if (t.command.precondition && b1r._fillInKbExprKeys(t.command.precondition, this._preconditionContextKeys), t.command.toggled) {
                const n = t.command.toggled.condition || t.command.toggled;
                b1r._fillInKbExprKeys(n, this._toggledContextKeys);
            }
        } else this._collectContextKeysForSubmenus && (Bn.getMenuItems(t.submenu).forEach(this._collectContextKeysAndSubmenuIds, this), this._allMenuIds.add(t.submenu));
    }
    static _fillInKbExprKeys(t, n) {
        if (t) for (const i of t.keys())n.add(i);
    }
}, omt = class extends uis {
    constructor(e, t, n, i, r, s){
        super(e, n), this._hiddenStates = t, this._commandService = i, this._keybindingService = r, this._contextKeyService = s, this.refresh();
    }
    createActionGroups(e) {
        const t = [];
        for (const n of this._menuGroups){
            const [i, r] = n;
            let s;
            for (const o of r)if (this._contextKeyService.contextMatchesRules(o.when)) {
                const a = cwe(o);
                a && this._hiddenStates.setDefaultState(this._id, o.command.id, !!o.isHiddenByDefault);
                const c = TSg(this._id, a ? o.command : o, this._hiddenStates);
                if (a) {
                    const l = lis(this._commandService, this._keybindingService, o.command.id, o.when);
                    (s ??= []).push(new rv(o.command, o.alt, e, c, l, this._contextKeyService, this._commandService));
                } else {
                    const l = new omt(o.submenu, this._hiddenStates, this._collectContextKeysForSubmenus, this._commandService, this._keybindingService, this._contextKeyService).createActionGroups(e), u = Vc.join(...l.map((h)=>h[1]));
                    u.length > 0 && (s ??= []).push(new n2(o, c, u));
                }
            }
            s && s.length > 0 && t.push([
                i,
                s
            ]);
        }
        return t;
    }
    _sort(e) {
        return e.sort(omt._compareMenuItems);
    }
    static _compareMenuItems(e, t) {
        const n = e.group, i = t.group;
        if (n !== i) {
            if (n) {
                if (!i) return -1;
            } else return 1;
            if (n === "navigation") return -1;
            if (i === "navigation") return 1;
            const o = n.localeCompare(i);
            if (o !== 0) return o;
        }
        const r = e.order || 0, s = t.order || 0;
        return r < s ? -1 : r > s ? 1 : omt._compareTitles(cwe(e) ? e.command.title : e.title, cwe(t) ? t.command.title : t.title);
    }
    static _compareTitles(e, t) {
        const n = typeof e == "string" ? e : e.original, i = typeof t == "string" ? t : t.original;
        return n.localeCompare(i);
    }
}, omt = ie([
    C(3, $n),
    C(4, qr),
    C(5, xn)
], omt), Wvn = class {
    constructor(e, t, n, i, r, s){
        this._disposables = new He, this._menuInfo = new omt(e, t, n.emitEventsForSubmenuChanges, i, r, s);
        const o = new ac(()=>{
            this._menuInfo.refresh(), this._onDidChange.fire({
                menu: this,
                isStructuralChange: !0,
                isEnablementChange: !0,
                isToggleChange: !0
            });
        }, n.eventDebounceDelay);
        this._disposables.add(o), this._disposables.add(Bn.onDidChangeMenu((u)=>{
            for (const h of this._menuInfo.allMenuIds)if (u.has(h)) {
                o.schedule();
                break;
            }
        }));
        const a = this._disposables.add(new He), c = (u)=>{
            let h = !1, p = !1, g = !1;
            for (const f of u)if (h = h || f.isStructuralChange, p = p || f.isEnablementChange, g = g || f.isToggleChange, h && p && g) break;
            return {
                menu: this,
                isStructuralChange: h,
                isEnablementChange: p,
                isToggleChange: g
            };
        }, l = ()=>{
            a.add(s.onDidChangeContext((u)=>{
                const h = u.affectsSome(this._menuInfo.structureContextKeys), p = u.affectsSome(this._menuInfo.preconditionContextKeys), g = u.affectsSome(this._menuInfo.toggledContextKeys);
                (h || p || g) && this._onDidChange.fire({
                    menu: this,
                    isStructuralChange: h,
                    isEnablementChange: p,
                    isToggleChange: g
                });
            })), a.add(t.onDidChange((u)=>{
                this._onDidChange.fire({
                    menu: this,
                    isStructuralChange: !0,
                    isEnablementChange: !1,
                    isToggleChange: !1
                });
            }));
        };
        this._onDidChange = new pqr({
            onWillAddFirstListener: l,
            onDidRemoveLastListener: a.clear.bind(a),
            delay: n.eventDebounceDelay,
            merge: c
        }), this.onDidChange = this._onDidChange.event;
    }
    getActions(e) {
        return this._menuInfo.createActionGroups(e);
    }
    dispose() {
        this._disposables.dispose(), this._onDidChange.dispose();
    }
}, Wvn = ie([
    C(3, $n),
    C(4, qr),
    C(5, xn)
], Wvn);

}
