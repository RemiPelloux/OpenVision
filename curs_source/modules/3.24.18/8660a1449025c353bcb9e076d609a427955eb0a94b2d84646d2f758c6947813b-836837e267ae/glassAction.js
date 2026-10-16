import { Di, Gt, Pn, Qe, tt } from "./Iwo.js";
import { _cw, bcw } from "./Ycg.js";
import { es } from "./actions_2.js";
import { wl } from "./agentRepositoryServiceTypes.js";
import { vf } from "./contextkeys_2.js";
import { yp } from "./glass-command-service.js";
import { aw } from "./glass-context-key-service.js";
import { TEf, Wys } from "./glass-menubar-ids.js";
import { Hv } from "./glassActiveAgentService.js";
import { _Nl } from "./glassAgentWorkspaceRouting.js";
import { Gv } from "./glassContextKeys.js";
import { xT } from "./keybindingsRegistry.js";
import { E } from "./tslib.es6.js";
import { Cu } from "./workspaceCollectionService.js";
var ml, ba, Zys, ZEf, oDe, QEf, JEf;
export { JEf, QEf, ZEf, Zys, ba, ml, oDe };
var __wakaru_A2_initialized = false;
export function A2() {
if (__wakaru_A2_initialized) return;
__wakaru_A2_initialized = true;
"use strict";
E(), Gt(), Qe(), Di(), es(), aw(), vf(), xT(), wl(), Hv(), Cu(), Gv(), TEf(), yp(), _Nl(), ml = ((t)=>(t[t.EMPTY_WORKSPACE = 1] = "EMPTY_WORKSPACE", t[t.AGENT_WORKSPACE = 2] = "AGENT_WORKSPACE", t))(ml || {}), ba = ((t)=>(t[t.BROWSER = 1] = "BROWSER", t[t.EDITOR_PANEL = 2] = "EDITOR_PANEL", t[t.GENERAL = 3] = "GENERAL", t[t.AGENT = 4] = "AGENT", t[t.WINDOW = 5] = "WINDOW", t[t.DIFF = 6] = "DIFF", t[t.TERMINAL = 7] = "TERMINAL", t[t.PLAN = 8] = "PLAN", t[t.FILE = 9] = "FILE", t[t.DEBUG = 10] = "DEBUG", t[t.QUESTIONNAIRE = 11] = "QUESTIONNAIRE", t[t.QUEUED_MESSAGE = 12] = "QUEUED_MESSAGE", t))(ba || {}), Zys = Object.freeze([]), ZEf = class {
    constructor(){
        this._commands = new Map, this._paletteCommands = Zys, this._onDidChange = new tt, this.onDidChange = this._onDidChange.event, this.getPaletteCommands = ()=>this._paletteCommands;
    }
    register(t) {
        const e = Symbol(t.commandId), n = this._commands.get(t.commandId), i = n !== void 0 && _cw(n.entry, t) ? n.entry : t;
        return this._commands.set(t.commandId, {
            entry: i,
            ownerToken: e
        }), (n === void 0 || i !== n.entry) && this._publishChange(), Pn(()=>{
            this._commands.get(t.commandId)?.ownerToken === e && (this._commands.delete(t.commandId), this._publishChange());
        });
    }
    has(t) {
        return this._commands.has(t);
    }
    getCommandScope(t) {
        return this._commands.get(t)?.entry.scope;
    }
    getCommand(t) {
        return this._commands.get(t)?.entry;
    }
    getAllCommands() {
        return Array.from(this._commands.values(), (t)=>t.entry);
    }
    dispose() {
        this._commands.clear(), this._paletteCommands = Zys, this._onDidChange.dispose();
    }
    _publishChange() {
        const t = [];
        for (const { entry: e } of this._commands.values())e.f1 && t.push(e);
        bcw(this._paletteCommands, t) || (this._paletteCommands = t.length === 0 ? Zys : Object.freeze(t)), this._onDidChange.fire();
    }
}, oDe = new ZEf, QEf = [
    "Agent",
    "Mode",
    "Workspace",
    "View",
    "Settings",
    "Appearance",
    "Developer"
], JEf = {
    id: Wys,
    title: "Glass Commands"
};

}
