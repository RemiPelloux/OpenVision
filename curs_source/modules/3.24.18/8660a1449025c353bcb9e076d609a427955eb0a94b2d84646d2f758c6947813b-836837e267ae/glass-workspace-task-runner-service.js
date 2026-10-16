import { _$ } from "./Aeg.js";
import { _oc, a9v, fq0, i9v, n9v, r9v, s9v, t9v, voc, wq0 } from "./O4v.js";
import { Il, bn } from "./SZu.js";
import { gg } from "./Ycg.js";
import { zO } from "./agentReferenceLifetime.js";
import { ma, wl } from "./agentRepositoryServiceTypes.js";
import { wS } from "./displayHelpers.js";
import { Rn } from "./extensions.js";
import { $d, vT } from "./glass-tab-persistence-service.contract.js";
import { Hv, vm } from "./glassActiveAgentService.js";
import { It } from "./instantiation.js";
import { Ul } from "./path_2.js";
import { G9e, q9e } from "./taskService.js";
import { W9e, ex } from "./tasks.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { l3 } from "./workspace-services_2.js";
import { Cu, Lc } from "./workspaceCollectionService.js";
import { OJ } from "./workspaceRefHelpers.js";
var boc, l9v, c9v, HDs;
export { HDs, boc, c9v, l9v };
var __wakaru_Cq0_initialized = false;
export function Cq0() {
if (__wakaru_Cq0_initialized) return;
__wakaru_Cq0_initialized = true;
"use strict";
E(), Ul(), Rn(), It(), q9e(), W9e(), zO(), wl(), OJ(), wS(), Hv(), Cu(), l3(), vT(), boc = Il("glassWorkspaceTaskRunnerService"), l9v = "${workspaceFolder}", c9v = "::", HDs = class {
    constructor(t, e){
        this._agentRepositoryService = t, this._activeAgentService = e, this._tasksByKey = new Map, this._listTasksVersion = 0;
    }
    async listTasks() {
        const t = ++this._listTasksVersion;
        return wq0(this._agentRepositoryService, this._activeAgentService, async (e)=>{
            const { workspaceFactory: n } = e, i = await _$(n, Lc.Tasks), r = gg(i, G9e), s = r.createSorter(), o = await r.getWorkspaceTasks(), a = n9v(o), l = t9v(a), c = new Map, u = [];
            for (const d of a){
                if (d.configurationProperties.hide || !s9v(d, l)) continue;
                const h = `${d.getKey() ?? d._id}:${u.length}`;
                c.set(h, {
                    task: d,
                    workspaceFactory: n
                }), u.push({
                    task: d,
                    key: h,
                    label: d._label,
                    description: r.getTaskDescription(d),
                    detail: d.configurationProperties.detail
                });
            }
            if (u.sort((d, h)=>s.compare(d.task, h.task)), t === this._listTasksVersion) {
                this._tasksByKey.clear();
                for (const [d, h] of c)this._tasksByKey.set(d, h);
            }
            return u.map(({ task: d, ...h })=>h);
        });
    }
    async runTask(t) {
        const e = this._tasksByKey.get(t);
        if (!e) throw new Error("Task is no longer available.");
        const { task: n, workspaceFactory: i } = e, r = await _$(i, Lc.Tasks), s = gg(r, G9e), o = gg(r, $d), a = await s.getWorkspaceTasks(), l = n9v(a), c = fq0(l, n.getMapKey());
        if (!c) throw new Error("Task is no longer available.");
        const u = t9v(l);
        await this._runTask(c, u, o, new Set, new Map);
    }
    async _runTask(t, e, n, i = new Set, r = new Map) {
        const s = t.getMapKey();
        if (i.has(s)) throw new Error(`Task "${t._label}" has a dependency cycle.`);
        const o = r.get(s);
        if (o) {
            await o;
            return;
        }
        const a = new Set(i);
        a.add(s);
        const l = (async ()=>{
            const c = _oc(t, e);
            if (c.kind === "missing-dependency") throw new Error(`Task "${t._label}" cannot run because one or more dependencies could not be resolved.`);
            const u = c.kind === "composite" ? c.dependencies : void 0, d = voc(t);
            if (u && r9v(t) && d === void 0) {
                const h = i9v(t) ?? "Task command is not supported in Glass task terminals.";
                throw new Error(`Task "${t._label}" cannot run: ${h}`);
            }
            if (!u && !d) throw new Error(`Task "${t._label}" cannot run in a terminal yet.`);
            if (u && ex.is(t) && t.configurationProperties.dependsOrder === "sequence") {
                const h = a9v(t, e, i);
                if (!h) throw new Error(`Task "${t._label}" uses sequential dependencies that are not supported in Glass task terminals.`);
                await n.runCommandInTerminal({
                    name: t._label,
                    commandLine: h.commandLine,
                    cwd: h.cwd,
                    env: h.env
                });
                return;
            }
            u && await Promise.all(u.map((h)=>this._runTask(h, e, n, new Set(a), r))), d && await n.runCommandInTerminal(d);
        })();
        r.set(s, l), await l;
    }
}, HDs = Re([
    F(0, ma),
    F(1, vm)
], HDs), bn(boc, HDs, 1, 1);

}
