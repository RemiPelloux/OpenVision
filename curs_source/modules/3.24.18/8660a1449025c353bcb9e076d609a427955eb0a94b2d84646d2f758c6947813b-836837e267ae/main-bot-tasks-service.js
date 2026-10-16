import { AlT, PlT, xlT } from "./$T_.js";
import { _$, _Tt } from "./Aeg.js";
import { Il, bn } from "./SZu.js";
import { Fms } from "./Ycg.js";
import { Bme } from "./agentAppearance.js";
import { mN } from "./agentLinks.js";
import { zO } from "./agentReferenceLifetime.js";
import { ma, wl } from "./agentRepositoryServiceTypes.js";
import { F4e, gle } from "./agentWorkspaceResolutionConstants.js";
import { Rn } from "./extensions.js";
import { Vc, yp } from "./glass-command-service.js";
import { hv, t_ } from "./glass-file-service.js";
import { Nu, xc } from "./glass-storage-service.js";
import { F_, xd } from "./glass-workspace-context-service.js";
import { Hv, vm } from "./glassActiveAgentService.js";
import { It, dn } from "./instantiation.js";
import { TlT } from "./merge-project-notes.js";
import { Bt } from "./nls.js";
import { RlT } from "./project-notes-mirrors.js";
import { jB } from "./projectAgentHeader.js";
import { Wg, io } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Cu, Lc } from "./workspaceCollectionService.js";
import { OJ } from "./workspaceRefHelpers.js";
var s9n, Ykc, cE_, u9s;
export { Ykc, cE_, s9n, u9s };
var __wakaru_Xkc_initialized = false;
export function Xkc() {
if (__wakaru_Xkc_initialized) return;
__wakaru_Xkc_initialized = true;
"use strict";
E(), Bt(), Rn(), It(), mN(), Bme(), zO(), wl(), OJ(), F4e(), Hv(), jB(), Cu(), yp(), hv(), xc(), xd(), TlT(), RlT(), s9n = Il("glassMainBotTasksService"), Ykc = "glass.mainBot.tasks.view", cE_ = 3e4, u9s = class {
    constructor(t, e, n, i, r, s, o){
        this.agentRepositoryService = t, this.instantiationService = e, this.activeAgentService = n, this.commandService = i, this.fileService = r, this.storageService = s, this.workspaceContextService = o;
    }
    get view() {
        return this.storageService.get(Ykc, io.PROFILE) === "board" ? "board" : "list";
    }
    pickView(t) {
        this.storageService.store(Ykc, t, io.PROFILE, Wg.USER);
    }
    projectMarkdown(t, e, n) {
        return t({
            agentReference: void 0,
            instantiationService: this.instantiationService,
            ownerAgentId: e,
            routeLinks: (i)=>this.projectLinkRouter(e, i),
            sourceDocumentUri: n
        });
    }
    openProject(t) {
        this.commandService.executeCommand("glass.openAgentById", t);
    }
    revealTask({ projectId: t, taskId: e }) {
        this.inProject(t, ()=>void this.commandService.executeCommand("glass.openProjectTasksPage", {
                agentId: t,
                section: "notes",
                taskId: e
            }));
    }
    projectLinkRouter(t, e) {
        return {
            open: (n, i)=>{
                if (Fms(n) !== void 0) {
                    e.open(n, i);
                    return;
                }
                this.inProject(t, ()=>e.open(n, i));
            },
            openInCursorBrowser: (n)=>this.inProject(t, ()=>void this.commandService.executeCommand("workbench.action.openBrowserEditor", {
                        agentId: t,
                        url: n,
                        reuseExistingUrlTab: !0
                    }))
        };
    }
    inProject(t, e) {
        this.showProject(t).then((n)=>{
            n && e();
        });
    }
    async showProject(t) {
        if (await this.commandService.executeCommand("glass.openAgentById", t) === !1) return !1;
        try {
            await _Tt(this.agentRepositoryService, t, (e)=>_$(e.workspaceFactory, Lc.Editor, gle));
        } catch  {
            return !1;
        }
        return this.activeAgentService.getActiveAgentId() === t;
    }
    async readTasks() {
        const t = await this.readMirroredTasks();
        return t.kind === "read" ? t : (this.storeMount ??= xlT({
            commandService: this.commandService
        }, cE_), await this.storeMount ? this.readMirroredTasks() : t);
    }
    readMirroredTasks() {
        return PlT({
            agentRepositoryService: this.agentRepositoryService,
            readProjectNotes: (t)=>AlT({
                    commandService: this.commandService,
                    fileService: this.fileService,
                    workspaceContextService: this.workspaceContextService
                }, t)
        });
    }
}, u9s = Re([
    F(0, ma),
    F(1, dn),
    F(2, vm),
    F(3, Vc),
    F(4, t_),
    F(5, Nu),
    F(6, F_)
], u9s), bn(s9n, u9s, 1, 1);

}
