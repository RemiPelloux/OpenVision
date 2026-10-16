import { S, Se, u3 } from "./HVr.js";
import { Bn, Re, ei, pt } from "./actions_2.js";
import { Ja, md } from "./codeEditorService.js";
import { ki, vi } from "./commands.js";
import { dn, he, xn } from "./contextkey.js";
import { en } from "./dom_2.js";
import { Ze } from "./instantiation.js";
import { Ie, Pr, fe } from "./keyCodes.js";
import { Qr, eb } from "./keybindingsRegistry.js";
import { Qn, Wn } from "./log.js";
import { Ll } from "./model.js";
import { rt } from "./nls.js";
import { kn, rr } from "./platform_2.js";
import { ya } from "./position.js";
import { Vmn, WS } from "./qIc.js";
import { Nl } from "./resolverService.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { Qt } from "./uri.js";
var jmn, kBe, eXr, i2, Ua, tXr, SI, zC, PMc, ofi, hle, wBe, CBe, nXr;
export { CBe, PMc, SI, Ua, eXr, hle, i2, jmn, kBe, nXr, ofi, tXr, wBe, zC };
var __wakaru_yc_initialized = false;
export function yc() {
if (__wakaru_yc_initialized) return;
__wakaru_yc_initialized = true;
"use strict";
x(), rt(), Qt(), md(), ya(), Ll(), Nl(), ei(), vi(), dn(), Ze(), eb(), rr(), gr(), Se(), Pr(), Qn(), en(), jmn = class {
    constructor(e){
        this.id = e.id, this.precondition = e.precondition, this._kbOpts = e.kbOpts, this._menuOpts = e.menuOpts, this.metadata = e.metadata;
    }
    register() {
        if (Array.isArray(this._menuOpts) ? this._menuOpts.forEach(this._registerMenuItem, this) : this._menuOpts && this._registerMenuItem(this._menuOpts), this._kbOpts) {
            const e = Array.isArray(this._kbOpts) ? this._kbOpts : [
                this._kbOpts
            ];
            for (const t of e){
                let n = t.kbExpr;
                this.precondition && (n ? n = he.and(n, this.precondition) : n = this.precondition);
                const i = {
                    id: this.id,
                    weight: t.weight,
                    args: t.args,
                    when: n,
                    primary: t.primary,
                    secondary: t.secondary,
                    win: t.win,
                    linux: t.linux,
                    mac: t.mac
                };
                u3(Qr.registerKeybindingRule(i));
            }
        }
        ki.registerCommand({
            id: this.id,
            handler: (e, t)=>this.runCommand(e, t),
            metadata: this.metadata
        });
    }
    _registerMenuItem(e) {
        Bn.appendMenuItem(e.menuId, {
            group: e.group,
            command: {
                id: this.id,
                title: e.title,
                icon: e.icon,
                precondition: this.precondition
            },
            when: e.when,
            order: e.order
        });
    }
}, kBe = class extends jmn {
    constructor(){
        super(...arguments), this._implementations = [];
    }
    addImplementation(e, t, n, i) {
        return this._implementations.push({
            priority: e,
            name: t,
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
    runCommand(e, t) {
        const n = e.get(Wn), i = e.get(xn);
        n.trace(`Executing Command '${this.id}' which has ${this._implementations.length} bound.`);
        for (const r of this._implementations){
            if (r.when) {
                const o = i.getContext(WS());
                if (!r.when.evaluate(o)) continue;
            }
            const s = r.implementation(e, t);
            if (s) return n.trace(`Command '${this.id}' was handled by '${r.name}'.`), typeof s == "boolean" ? void 0 : s;
        }
        n.trace(`The Command '${this.id}' was not handled by any implementation.`);
    }
}, eXr = class extends jmn {
    constructor(e, t){
        super(t), this.command = e;
    }
    runCommand(e, t) {
        return this.command.runCommand(e, t);
    }
}, i2 = class gIa extends jmn {
    static bindToContribution(t) {
        return class extends gIa {
            constructor(i){
                super(i), this._callback = i.handler;
            }
            runEditorCommand(i, r, s) {
                const o = t(r);
                o && this._callback(o, s);
            }
        };
    }
    static runEditorCommand(t, n, i, r) {
        const s = t.get(Ja), o = s.getFocusedCodeEditor() || s.getActiveCodeEditor();
        if (o) return o.invokeWithinContext((a)=>{
            if (a.get(xn).contextMatchesRules(i ?? void 0)) return r(a, o, n);
        });
    }
    runCommand(t, n) {
        return gIa.runEditorCommand(t, n, this.precondition, (i, r, s)=>this.runEditorCommand(i, r, s));
    }
}, Ua = class USm extends i2 {
    static convertOptions(t) {
        let n;
        Array.isArray(t.menuOpts) ? n = t.menuOpts : t.menuOpts ? n = [
            t.menuOpts
        ] : n = [];
        function i(r) {
            return r.menuId || (r.menuId = Re.EditorContext), r.title || (r.title = typeof t.label == "string" ? t.label : t.label.value), r.when = he.and(t.precondition, r.when), r;
        }
        return Array.isArray(t.contextMenuOpts) ? n.push(...t.contextMenuOpts.map(i)) : t.contextMenuOpts && n.push(i(t.contextMenuOpts)), t.menuOpts = n, t;
    }
    constructor(t){
        super(USm.convertOptions(t)), typeof t.label == "string" ? (this.label = t.label, this.alias = t.alias ?? t.label) : (this.label = t.label.value, this.alias = t.alias ?? t.label.original);
    }
    runEditorCommand(t, n, i) {
        return this.reportTelemetry(t, n), this.run(t, n, i || {});
    }
    reportTelemetry(t, n) {}
}, tXr = class extends Ua {
    constructor(){
        super(...arguments), this._implementations = [];
    }
    addImplementation(e, t) {
        return this._implementations.push([
            e,
            t
        ]), this._implementations.sort((n, i)=>i[0] - n[0]), {
            dispose: ()=>{
                for(let n = 0; n < this._implementations.length; n++)if (this._implementations[n][1] === t) {
                    this._implementations.splice(n, 1);
                    return;
                }
            }
        };
    }
    run(e, t, n) {
        for (const i of this._implementations){
            const r = i[1](e, t, n);
            if (r) return typeof r == "boolean" ? void 0 : r;
        }
    }
}, SI = class extends pt {
    run(e, ...t) {
        const n = e.get(Ja), i = n.getFocusedCodeEditor() || n.getActiveCodeEditor();
        if (i) return i.invokeWithinContext((r)=>{
            const s = r.get(xn), o = r.get(Wn);
            if (!s.contextMatchesRules(this.desc.precondition ?? void 0)) {
                o.debug("[EditorAction2] NOT running command because its precondition is FALSE", this.desc.id, this.desc.precondition?.serialize());
                return;
            }
            return this.runEditorCommand(r, i, ...t);
        });
    }
}, ((e)=>{
    function t(o) {
        return hle.INSTANCE.getEditorCommand(o);
    }
    e.getEditorCommand = t;
    function n() {
        return hle.INSTANCE.getEditorActions();
    }
    e.getEditorActions = n;
    function i() {
        return hle.INSTANCE.getEditorContributions();
    }
    e.getEditorContributions = i;
    function r(o) {
        return hle.INSTANCE.getEditorContributions().filter((a)=>o.indexOf(a.id) >= 0);
    }
    e.getSomeEditorContributions = r;
    function s() {
        return hle.INSTANCE.getDiffEditorContributions();
    }
    e.getDiffEditorContributions = s;
})(zC || (zC = {})), PMc = {
    EditorCommonContributions: "editor.contributions"
}, ofi = class {
    constructor(){
        this.editorContributions = [], this.diffEditorContributions = [], this.editorActions = [], this.editorCommands = Object.create(null);
    }
    registerEditorContribution(t, n, i) {
        this.editorContributions.push({
            id: t,
            ctor: n,
            instantiation: i
        });
    }
    getEditorContributions() {
        return this.editorContributions.slice(0);
    }
    registerDiffEditorContribution(t, n) {
        this.diffEditorContributions.push({
            id: t,
            ctor: n
        });
    }
    getDiffEditorContributions() {
        return this.diffEditorContributions.slice(0);
    }
    registerEditorAction(t) {
        t.register(), this.editorActions.push(t);
    }
    getEditorActions() {
        return this.editorActions;
    }
    registerEditorCommand(t) {
        t.register(), this.editorCommands[t.id] = t;
    }
    getEditorCommand(t) {
        return this.editorCommands[t] || null;
    }
}, ofi.INSTANCE = new ofi, hle = ofi, kn.add(PMc.EditorCommonContributions, hle.INSTANCE), wBe = Vmn(new kBe({
    id: "undo",
    precondition: void 0,
    kbOpts: {
        weight: 0,
        primary: Ie.CtrlCmd | fe.KeyZ
    },
    menuOpts: [
        {
            menuId: Re.MenubarEditMenu,
            group: "1_do",
            title: S(190, null),
            order: 1
        },
        {
            menuId: Re.CommandPalette,
            group: "",
            title: S(191, null),
            order: 1
        },
        {
            menuId: Re.SimpleEditorContext,
            group: "1_do",
            title: S(192, null),
            order: 1
        }
    ]
})), Vmn(new eXr(wBe, {
    id: "default:undo",
    precondition: void 0
})), CBe = Vmn(new kBe({
    id: "redo",
    precondition: void 0,
    kbOpts: {
        weight: 0,
        primary: Ie.CtrlCmd | fe.KeyY,
        secondary: [
            Ie.CtrlCmd | Ie.Shift | fe.KeyZ
        ],
        mac: {
            primary: Ie.CtrlCmd | Ie.Shift | fe.KeyZ
        }
    },
    menuOpts: [
        {
            menuId: Re.MenubarEditMenu,
            group: "1_do",
            title: S(193, null),
            order: 2
        },
        {
            menuId: Re.CommandPalette,
            group: "",
            title: S(194, null),
            order: 1
        },
        {
            menuId: Re.SimpleEditorContext,
            group: "1_do",
            title: S(195, null),
            order: 2
        }
    ]
})), Vmn(new eXr(CBe, {
    id: "default:redo",
    precondition: void 0
})), nXr = Vmn(new kBe({
    id: "editor.action.selectAll",
    precondition: void 0,
    kbOpts: {
        weight: 0,
        kbExpr: null,
        primary: Ie.CtrlCmd | fe.KeyA
    },
    menuOpts: [
        {
            menuId: Re.MenubarSelectionMenu,
            group: "1_basic",
            title: S(196, null),
            order: 1
        },
        {
            menuId: Re.CommandPalette,
            group: "",
            title: S(197, null),
            order: 1
        },
        {
            menuId: Re.SimpleEditorContext,
            group: "9_select",
            title: S(198, null),
            order: 1
        }
    ]
}));

}
