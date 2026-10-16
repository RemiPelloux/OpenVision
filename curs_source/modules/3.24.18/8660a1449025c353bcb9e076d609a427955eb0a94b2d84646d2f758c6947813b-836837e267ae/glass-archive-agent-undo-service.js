import { bsv } from "./BA.js";
import { D, Ei, Qe, st, xr } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { vu, za } from "./actions.js";
import { ma, wl } from "./agentRepositoryServiceTypes.js";
import { ZD, jO } from "./backgroundWorkRegistry.js";
import { Rn } from "./extensions.js";
import { Wme, gce } from "./glass-alert-dialog-service.js";
import { mC, tl } from "./glass-command-bridge-service.js";
import { X2s, jOn } from "./glass-desired-selection-service.js";
import { ul, zc } from "./glass-notification-service.js";
import { b9s, pwc } from "./glass-sidebar-agent-order-service.js";
import { It } from "./instantiation.js";
import { _uT, fuT, lI_, muT, vuT } from "./mE_.js";
import { Bt } from "./nls.js";
import { Yn } from "./notification.js";
import { guT } from "./optimistic-archive-selection.js";
import { Rpe } from "./subagentTaskState.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { hut } from "./windowQuitConfirmation.js";
import { iqt } from "./yBp.js";
var a9n, y9s;
export { a9n, y9s };
var __wakaru_S9s_initialized = false;
export function S9s() {
if (__wakaru_S9s_initialized) return;
__wakaru_S9s_initialized = true;
"use strict";
E(), vu(), Ei(), Qe(), Bt(), Rn(), It(), hut(), Rpe(), jO(), wl(), mC(), Wme(), X2s(), pwc(), zc(), guT(), a9n = Il("glassArchiveAgentUndoService"), y9s = class extends st {
    constructor(t, e, n, i, r, s, o){
        super(), this.agentRepositoryService = t, this.notificationService = e, this.alertDialogService = n, this.backgroundWorkService = i, this.desiredSelectionService = r, this.sidebarAgentOrderService = s, this.commandBridgeService = o, this.activeBatchToasts = new Set;
    }
    beginOptimisticArchiveSelection(t) {
        const e = this.desiredSelectionService.desiredId;
        return e === void 0 || !t.has(e) ? ()=>{} : muT({
            getSelectedAgentId: ()=>this.desiredSelectionService.desiredId,
            archivedAgentId: e,
            nextAgentId: lI_([
                ...this.sidebarAgentOrderService.getVisibleAgentIds()
            ], t, e),
            selectAgent: (n)=>{
                this.commandBridgeService.emit({
                    type: "selectAgentRequested",
                    payload: {
                        agentId: n,
                        preserveSidebarAction: !0
                    }
                });
            }
        });
    }
    async archiveAgentWithUndoToast(t) {
        const { agentId: e, archiveOptions: n } = t, i = this.agentRepositoryService.getAgentHeader(e), r = this.backgroundWorkService.getComposerBackgroundWork(e).some((a)=>this.isLiveSubagentWork(a)), s = i?.status.value === "in_progress";
        if (s || r) {
            let a = bsv();
            r && (a = s ? vuT() : fuT());
            const { title: l, detail: c, confirmLabel: u } = a;
            if (!await this.alertDialogService.confirm({
                title: l,
                description: c,
                primaryLabel: u,
                regretLabel: D("glassArchiveRunningAgentCancel", "Cancel"),
                destructive: !0
            })) return "cancelled";
        }
        const o = this.beginOptimisticArchiveSelection(new Set([
            e
        ]));
        try {
            await t.onDidConfirmArchive?.(), await this.agentRepositoryService.archiveAgent(e, n);
        } catch (a) {
            throw o(), a;
        }
        return "archived";
    }
    async archiveAgentsWithUndoToast(t) {
        const { agents: e, label: n, archiveOptions: i, archiveMore: r, onDidUndoError: s, onUndoSuccess: o } = t, a = e.filter((C)=>C.source !== "draft"), l = e.map((C)=>C.agentId), c = new Set(l), u = this.desiredSelectionService.desiredId, d = this.beginOptimisticArchiveSelection(c), h = await Promise.allSettled(l.map((C)=>this.agentRepositoryService.archiveAgent(C, i))), p = new Set;
        for(let C = 0; C < l.length; C++)h[C]?.status === "fulfilled" && p.add(l[C]);
        const g = l.filter((C)=>p.has(C));
        u !== void 0 && !p.has(u) && d();
        const f = a.map((C)=>C.agentId).filter((C)=>p.has(C));
        if (f.length === 0) return g;
        if (r !== void 0) try {
            f.push(...await r());
        } catch  {
            this.notificationService.notify({
                severity: Yn.Error,
                message: D("glassArchiveMoreFailed", "Some chats in this group could not be archived. They may still appear.")
            });
        }
        const _ = _uT(f.length, n), b = f.length > 1 ? D("glassArchiveUndoMany", "Undo all") : D("glassArchiveUndo", "Undo");
        let y;
        const S = new za(`glass.agentArchive.undoBatch.${f.join(",")}`, b, "", !0, async ()=>{
            if (y.disposed) return;
            this.disposeBatchToast(y, {
                closeHandle: !0
            });
            let C = [];
            try {
                C = await this.agentRepositoryService.unarchiveAgents(f);
            } catch (A) {
                (s ?? xr)(A);
                return;
            }
            C.length > 0 && o?.(C);
            const T = new Set(C), I = f.filter((A)=>!T.has(A));
            I.length > 0 && (s ?? xr)(new Error(`Failed to unarchive ${I.length} of ${f.length} agents`));
        }), k = this.notificationService.notify({
            severity: Yn.Info,
            message: _,
            actions: {
                primary: [
                    S
                ]
            }
        });
        return y = {
            handle: k,
            undoAction: S,
            closeListener: void 0,
            disposed: !1
        }, this.activeBatchToasts.add(y), y.closeListener = k.onDidClose(()=>{
            this.disposeBatchToast(y);
        }), g;
    }
    isLiveSubagentWork(t) {
        if (t.kind !== "subagent") return !1;
        const e = t.subagentComposerId ?? t.id;
        return iqt({
            subagentId: e,
            status: this.agentRepositoryService.getAgentHeader(e)?.status.value,
            hasLiveActivity: !0
        });
    }
    disposeBatchToast(t, e) {
        t.disposed || (t.disposed = !0, t.closeListener?.dispose(), t.closeListener = void 0, t.undoAction.dispose(), this.activeBatchToasts.delete(t), e?.closeHandle === !0 && t.handle.close());
    }
    dispose() {
        for (const t of Array.from(this.activeBatchToasts))this.disposeBatchToast(t, {
            closeHandle: !0
        });
        super.dispose();
    }
}, y9s = Re([
    F(0, ma),
    F(1, ul),
    F(2, gce),
    F(3, ZD),
    F(4, jOn),
    F(5, b9s),
    F(6, tl)
], y9s), bn(a9n, y9s, 1, 1);

}
