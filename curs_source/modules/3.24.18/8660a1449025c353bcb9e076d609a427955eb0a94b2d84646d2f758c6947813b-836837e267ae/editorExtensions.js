import { D, Qe, m4 } from "./Iwo.js";
import { Ft, es, ji, sn } from "./actions_2.js";
import { Ju, og } from "./codeEditorService.js";
import { hs, rs } from "./commands.js";
import { Hi, Rr, mt } from "./contextkey.js";
import { Hn } from "./dom_2.js";
import { It } from "./instantiation.js";
import { Ma, Ze, ut } from "./keyCodes.js";
import { ja, xT } from "./keybindingsRegistry.js";
import { Ji, Li } from "./log.js";
import { xp } from "./model.js";
import { Bt } from "./nls.js";
import { Eo, Fi } from "./platform_2.js";
import { jc } from "./position.js";
import { Em } from "./resolverService.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn } from "./uri.js";
import { Dii, RC } from "./ze.js";
var Nii, Ett, z7o, Nj, xu, V7o, yP, pW, eFd, Kkr, rwe, ygn, Sgn, K7o;
export { Ett, K7o, Kkr, Nii, Nj, Sgn, V7o, eFd, pW, rwe, xu, yP, ygn, z7o };
var __wakaru_Ud_initialized = false;
export function Ud() {
if (__wakaru_Ud_initialized) return;
__wakaru_Ud_initialized = true;
"use strict";
E(), Bt(), fn(), og(), jc(), xp(), Em(), es(), rs(), Hi(), It(), xT(), Eo(), To(), Qe(), Ma(), Ji(), Hn(), Nii = class {
    constructor(t){
        this.id = t.id, this.precondition = t.precondition, this._kbOpts = t.kbOpts, this._menuOpts = t.menuOpts, this.metadata = t.metadata;
    }
    register() {
        if (Array.isArray(this._menuOpts) ? this._menuOpts.forEach(this._registerMenuItem, this) : this._menuOpts && this._registerMenuItem(this._menuOpts), this._kbOpts) {
            const t = Array.isArray(this._kbOpts) ? this._kbOpts : [
                this._kbOpts
            ];
            for (const e of t){
                let n = e.kbExpr;
                this.precondition && (n ? n = mt.and(n, this.precondition) : n = this.precondition);
                const i = {
                    id: this.id,
                    weight: e.weight,
                    args: e.args,
                    when: n,
                    primary: e.primary,
                    secondary: e.secondary,
                    win: e.win,
                    linux: e.linux,
                    mac: e.mac
                };
                m4(ja.registerKeybindingRule(i));
            }
        }
        hs.registerCommand({
            id: this.id,
            handler: (t, e)=>this.runCommand(t, e),
            metadata: this.metadata
        });
    }
    _registerMenuItem(t) {
        ji.appendMenuItem(t.menuId, {
            group: t.group,
            command: {
                id: this.id,
                title: t.title,
                icon: t.icon,
                precondition: this.precondition
            },
            when: t.when,
            order: t.order
        });
    }
}, Ett = class extends Nii {
    constructor(){
        super(...arguments), this._implementations = [];
    }
    addImplementation(t, e, n, i) {
        return this._implementations.push({
            priority: t,
            name: e,
            implementation: n,
            when: i
        }), this._implementations.sort((r, s)=>s.priority - r.priority), {
            dispose: ()=>{
                for(let r = 0; r < this._implementations.length; r++)if (this._implementations[r].implementation === n) {
                    this._implementations.splice(r, 1);
                    return;
                }
            }
        };
    }
    runCommand(t, e) {
        const n = t.get(Li), i = t.get(Rr);
        n.trace(`Executing Command '${this.id}' which has ${this._implementations.length} bound.`);
        for (const r of this._implementations){
            if (r.when) {
                const o = i.getContext(RC());
                if (!r.when.evaluate(o)) continue;
            }
            const s = r.implementation(t, e);
            if (s) return n.trace(`Command '${this.id}' was handled by '${r.name}'.`), typeof s == "boolean" ? void 0 : s;
        }
        n.trace(`The Command '${this.id}' was not handled by any implementation.`);
    }
}, z7o = class extends Nii {
    constructor(t, e){
        super(e), this.command = t;
    }
    runCommand(t, e) {
        return this.command.runCommand(t, e);
    }
}, Nj = class JQc extends Nii {
    static bindToContribution(e) {
        return class extends JQc {
            constructor(i){
                super(i), this._callback = i.handler;
            }
            runEditorCommand(i, r, s) {
                const o = e(r);
                o && this._callback(o, s);
            }
        };
    }
    static runEditorCommand(e, n, i, r) {
        const s = e.get(Ju), o = s.getFocusedCodeEditor() || s.getActiveCodeEditor();
        if (o) return o.invokeWithinContext((a)=>{
            if (a.get(Rr).contextMatchesRules(i ?? void 0)) return r(a, o, n);
        });
    }
    runCommand(e, n) {
        return JQc.runEditorCommand(e, n, this.precondition, (i, r, s)=>this.runEditorCommand(i, r, s));
    }
}, xu = class pAb extends Nj {
    static convertOptions(e) {
        let n;
        Array.isArray(e.menuOpts) ? n = e.menuOpts : e.menuOpts ? n = [
            e.menuOpts
        ] : n = [];
        function i(r) {
            return r.menuId || (r.menuId = Ft.EditorContext), r.title || (r.title = typeof e.label == "string" ? e.label : e.label.value), r.when = mt.and(e.precondition, r.when), r;
        }
        return Array.isArray(e.contextMenuOpts) ? n.push(...e.contextMenuOpts.map(i)) : e.contextMenuOpts && n.push(i(e.contextMenuOpts)), e.menuOpts = n, e;
    }
    constructor(e){
        super(pAb.convertOptions(e)), typeof e.label == "string" ? (this.label = e.label, this.alias = e.alias ?? e.label) : (this.label = e.label.value, this.alias = e.alias ?? e.label.original);
    }
    runEditorCommand(e, n, i) {
        return this.reportTelemetry(e, n), this.run(e, n, i || {});
    }
    reportTelemetry(e, n) {}
}, V7o = class extends xu {
    constructor(){
        super(...arguments), this._implementations = [];
    }
    addImplementation(t, e) {
        return this._implementations.push([
            t,
            e
        ]), this._implementations.sort((n, i)=>i[0] - n[0]), {
            dispose: ()=>{
                for(let n = 0; n < this._implementations.length; n++)if (this._implementations[n][1] === e) {
                    this._implementations.splice(n, 1);
                    return;
                }
            }
        };
    }
    run(t, e, n) {
        for (const i of this._implementations){
            const r = i[1](t, e, n);
            if (r) return typeof r == "boolean" ? void 0 : r;
        }
    }
}, yP = class extends sn {
    run(t, ...e) {
        const n = t.get(Ju), i = n.getFocusedCodeEditor() || n.getActiveCodeEditor();
        if (i) return i.invokeWithinContext((r)=>{
            const s = r.get(Rr), o = r.get(Li);
            if (!s.contextMatchesRules(this.desc.precondition ?? void 0)) {
                o.debug("[EditorAction2] NOT running command because its precondition is FALSE", this.desc.id, this.desc.precondition?.serialize());
                return;
            }
            return this.runEditorCommand(r, i, ...e);
        });
    }
}, ((t)=>{
    function e(o) {
        return rwe.INSTANCE.getEditorCommand(o);
    }
    t.getEditorCommand = e;
    function n() {
        return rwe.INSTANCE.getEditorActions();
    }
    t.getEditorActions = n;
    function i() {
        return rwe.INSTANCE.getEditorContributions();
    }
    t.getEditorContributions = i;
    function r(o) {
        return rwe.INSTANCE.getEditorContributions().filter((a)=>o.indexOf(a.id) >= 0);
    }
    t.getSomeEditorContributions = r;
    function s() {
        return rwe.INSTANCE.getDiffEditorContributions();
    }
    t.getDiffEditorContributions = s;
})(pW || (pW = {})), eFd = {
    EditorCommonContributions: "editor.contributions"
}, Kkr = class {
    constructor(){
        this.editorContributions = [], this.diffEditorContributions = [], this.editorActions = [], this.editorCommands = Object.create(null);
    }
    registerEditorContribution(e, n, i) {
        this.editorContributions.push({
            id: e,
            ctor: n,
            instantiation: i
        });
    }
    getEditorContributions() {
        return this.editorContributions.slice(0);
    }
    registerDiffEditorContribution(e, n) {
        this.diffEditorContributions.push({
            id: e,
            ctor: n
        });
    }
    getDiffEditorContributions() {
        return this.diffEditorContributions.slice(0);
    }
    registerEditorAction(e) {
        e.register(), this.editorActions.push(e);
    }
    getEditorActions() {
        return this.editorActions;
    }
    registerEditorCommand(e) {
        e.register(), this.editorCommands[e.id] = e;
    }
    getEditorCommand(e) {
        return this.editorCommands[e] || null;
    }
}, Kkr.INSTANCE = new Kkr, rwe = Kkr, Fi.add(eFd.EditorCommonContributions, rwe.INSTANCE), ygn = Dii(new Ett({
    id: "undo",
    precondition: void 0,
    kbOpts: {
        weight: 0,
        primary: ut.CtrlCmd | Ze.KeyZ
    },
    menuOpts: [
        {
            menuId: Ft.MenubarEditMenu,
            group: "1_do",
            title: D(190, null),
            order: 1
        },
        {
            menuId: Ft.CommandPalette,
            group: "",
            title: D(191, null),
            order: 1
        },
        {
            menuId: Ft.SimpleEditorContext,
            group: "1_do",
            title: D(192, null),
            order: 1
        }
    ]
})), Dii(new z7o(ygn, {
    id: "default:undo",
    precondition: void 0
})), Sgn = Dii(new Ett({
    id: "redo",
    precondition: void 0,
    kbOpts: {
        weight: 0,
        primary: ut.CtrlCmd | Ze.KeyY,
        secondary: [
            ut.CtrlCmd | ut.Shift | Ze.KeyZ
        ],
        mac: {
            primary: ut.CtrlCmd | ut.Shift | Ze.KeyZ
        }
    },
    menuOpts: [
        {
            menuId: Ft.MenubarEditMenu,
            group: "1_do",
            title: D(193, null),
            order: 2
        },
        {
            menuId: Ft.CommandPalette,
            group: "",
            title: D(194, null),
            order: 1
        },
        {
            menuId: Ft.SimpleEditorContext,
            group: "1_do",
            title: D(195, null),
            order: 2
        }
    ]
})), Dii(new z7o(Sgn, {
    id: "default:redo",
    precondition: void 0
})), K7o = Dii(new Ett({
    id: "editor.action.selectAll",
    precondition: void 0,
    kbOpts: {
        weight: 0,
        kbExpr: null,
        primary: ut.CtrlCmd | Ze.KeyA
    },
    menuOpts: [
        {
            menuId: Ft.MenubarSelectionMenu,
            group: "1_basic",
            title: D(196, null),
            order: 1
        },
        {
            menuId: Ft.CommandPalette,
            group: "",
            title: D(197, null),
            order: 1
        },
        {
            menuId: Ft.SimpleEditorContext,
            group: "9_select",
            title: D(198, null),
            order: 1
        }
    ]
}));

}
