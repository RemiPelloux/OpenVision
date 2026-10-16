import { $7w, A7w, F7w, I7w, JXf, L7w, N7w, O7w, QXf, U7w, XXf, bce, cTs } from "./BA.js";
import { Ec, Gt, Nt, Pn, Qe, da, en, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { hMn } from "./Ycg.js";
import { Wgr } from "./agent-store-commands.ts";
import { qn } from "./async.js";
import { Rs, ss } from "./authenticationService.js";
import { bb, hf } from "./clipboardService.js";
import { hs, nr, rs } from "./commands.js";
import { Ub, py } from "./cursorCredsService.js";
import { a0, qbe } from "./cursorRules.js";
import { Wo, gr } from "./editorService.js";
import { fo, ps } from "./environmentService.js";
import { Rn } from "./extensions.js";
import { Kqm } from "./gYa.js";
import { pMn } from "./grpcPluginsProvider.js";
import { nl } from "./index.ts";
import { It } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { Ks, Wr } from "./notification.js";
import { Rd, ih } from "./pathService.js";
import { IA, VI } from "./pluginsProviderService.js";
import { Dw, oI } from "./prettyDialog.js";
import { AKe, lZt } from "./primitiveSourceService.js";
import { B1, ab } from "./progress.js";
import { g$l, x7w } from "./publishSkillPluginClient.js";
import { R7w } from "./resyncSkillPluginClient.js";
import { ZXf } from "./retargetSkillEditors.js";
import { jNn } from "./skillIdentity.js";
import { eZf } from "./skillStoreMove.js";
import { iZf, rZf } from "./skillStoreMoveCommands.js";
import { B7w, sZf } from "./skillStoreMoveRunner.js";
import { E } from "./tslib.es6.js";
import { j7w } from "./unpublishSkillPluginClient.js";
import { F, Re } from "./userDataProfile.js";
var f$l, uTs, aZf, dTs;
export { aZf, dTs, f$l, uTs };
var __wakaru_v$l_initialized = false;
export function v$l() {
if (__wakaru_v$l_initialized) return;
__wakaru_v$l_initialized = true;
"use strict";
E(), nl(), qn(), Gt(), Qe(), bb(), rs(), Rn(), It(), Ji(), Ks(), ab(), py(), Rs(), IA(), a0(), lZt(), Wo(), fo(), ih(), pMn(), x7w(), R7w(), ZXf(), jNn(), eZf(), rZf(), B7w(), j7w(), oI(), f$l = 3e4, uTs = jn("skillPublicationService"), aZf = {
    pendingPublications: [],
    runningOperations: []
}, dTs = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d){
        super(), this.clipboardService = t, this.commandService = e, this.cursorAuthenticationService = n, this.cursorCredsService = i, this.editorService = r, this.logService = s, this.notificationService = o, this.pathService = a, this.pluginsProviderService = l, this.primitiveSourceService = c, this.progressService = u, this.workbenchEnvironmentService = d, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._pending = new Map, this._pendingRetirements = this._register(new da), this._running = new Map, this._snapshot = aZf;
    }
    get snapshot() {
        return this._snapshot;
    }
    reserveSkillOperation(t, e) {
        if (!this._running.has(t)) return this._running.set(t, e), this.notifyChanged(), Pn(()=>{
            this._running.get(t) === e && (this._running.delete(t), this.notifyChanged());
        });
    }
    registerSkillRelocation({ identity: t, skill: e, destinationFilePath: n, destinationInAgentStore: i }) {
        const r = bce(n);
        this.setPending(t, e, {
            published: !1,
            destinationFilePath: r,
            inAgentStore: i
        }), this.armRelocationRetirement(t, r);
    }
    async publishSkill({ skill: t }) {
        if (qbe(t.filePath)) {
            this.notificationService.error("Built-in skills cannot be published.");
            return;
        }
        const e = t.inAgentStore === !0, n = await this.pathService.userHome();
        if (!e && !Kqm(t.filePath, n.fsPath)) {
            this.notificationService.error("Only your personal skills in ~/.cursor/skills can be published.");
            return;
        }
        if (this.cursorAuthenticationService.getTeamId() === void 0) {
            this.notificationService.error(g$l);
            return;
        }
        await this.runOperation(t, "publish", async ({ register: i, retire: r })=>{
            const s = e ? await this.moveOutOfStoreForPublish(t, i) : t.filePath;
            if (s === void 0) return;
            let o = !1;
            await I7w({
                ...this.flowDeps(),
                clipboardService: this.clipboardService,
                onLocalSkillDeleted: (a)=>{
                    o = !0, i({
                        pluginId: a,
                        published: !0,
                        inAgentStore: !1
                    });
                },
                websiteUrl: this.cursorCredsService.getWebsiteUrl()
            }, {
                skillFilePath: s,
                name: t.name,
                description: t.description
            }), e && !o && r();
        });
    }
    async syncSkill({ skill: t, pluginId: e }) {
        await this.runOperation(t, "sync", async ()=>A7w(this.flowDeps(), {
                pluginId: e,
                name: t.name,
                description: t.description
            }));
    }
    async unpublishSkill({ skill: t, pluginId: e }) {
        await this.runOperation(t, "unpublish", async ({ identity: n, register: i })=>{
            let r;
            await U7w({
                ...this.flowDeps(),
                onLocalSkillRestored: (s)=>{
                    r = $7w(s, n), i({
                        pluginId: e,
                        published: !0,
                        destinationFilePath: r,
                        inAgentStore: !1
                    });
                }
            }, {
                pluginId: e,
                name: t.name
            }), r !== void 0 && await this.moveIntoStoreAfterUnpublish(t, r, i);
        });
    }
    async moveOutOfStoreForPublish(t, e) {
        const n = await this.runStoreMove("moveOutOfStore", t.name, t.filePath);
        if (!n.deleted || n.filesMove === void 0) {
            this.notify(L7w({
                skillName: t.name,
                result: n
            }));
            return;
        }
        const i = QXf({
            nextDir: n.filesMove.nextDir,
            sourceFilePath: t.filePath
        });
        return e({
            published: !1,
            destinationFilePath: i,
            inAgentStore: !0
        }), await this.retargetEditorsQuietly(t.name, n.filesMove), i;
    }
    async moveIntoStoreAfterUnpublish(t, e, n) {
        if (await this.resolveStoreMoveAvailability() !== "available") {
            n({
                published: !1,
                destinationFilePath: e,
                inAgentStore: !1
            });
            return;
        }
        const i = await this.runStoreMove("moveToStore", t.name, e);
        i.deleted && i.filesMove !== void 0 ? (n({
            published: !1,
            destinationFilePath: QXf({
                nextDir: i.filesMove.nextDir,
                sourceFilePath: e
            }),
            inAgentStore: !0
        }), await this.retargetEditorsQuietly(t.name, i.filesMove)) : n({
            published: !1,
            destinationFilePath: e,
            inAgentStore: !1
        }), this.notify(O7w({
            skillName: t.name,
            result: i
        }));
    }
    async resolveStoreMoveAvailability() {
        let t = [];
        try {
            t = await this.commandService.executeCommand(Wgr) ?? [];
        } catch (e) {
            this.logService.trace(`Could not read the Agent Store skill roots: ${e instanceof Error ? e.message : String(e)}`);
        }
        return JXf({
            privacyMode: this.cursorAuthenticationService.granularPrivacyModeRawEnum(),
            agentStoreSkillsDirs: t
        });
    }
    async runStoreMove(t, e, n) {
        try {
            return await this.progressService.withProgress({
                location: 15,
                title: t === "moveToStore" ? `Syncing "${e}"...` : `Unsyncing "${e}"...`
            }, async ()=>await F7w(this.commandService, t, n));
        } catch (i) {
            return this.logService.warn(`Could not run the Agent Store move for skill "${e}": ${i instanceof Error ? i.message : String(i)}`), {
                confirmed: !1,
                deleted: !1,
                storeUnavailable: !0
            };
        }
    }
    async retargetEditors(t) {
        await XXf({
            commandService: this.commandService,
            editorService: this.editorService,
            isGlass: this.workbenchEnvironmentService.isGlass === !0,
            pathService: this.pathService,
            workbenchEnvironmentService: this.workbenchEnvironmentService
        }, t);
    }
    async retargetEditorsQuietly(t, e) {
        try {
            await this.retargetEditors(e);
        } catch (n) {
            this.logService.warn(`Could not move the editors open on skill "${t}" to its new path: ${n instanceof Error ? n.message : String(n)}`);
        }
    }
    notify(t) {
        this.notificationService.notify({
            severity: sZf[t.severity],
            message: t.message
        });
    }
    async runOperation(t, e, n) {
        const i = cTs(t.filePath);
        if (i === void 0) {
            this.notificationService.error(`Cannot ${e} '${t.name}': it is not inside a skills directory.`);
            return;
        }
        const r = this.reserveSkillOperation(i, e);
        if (r === void 0) return;
        let s = !1;
        try {
            await n({
                identity: i,
                register: (o)=>{
                    s = !0, this.setPending(i, t, o);
                },
                retire: ()=>{
                    s = !1, this.retirePending(i);
                }
            });
        } finally{
            r.dispose(), s && this.armRetirement(i);
        }
    }
    setPending(t, e, n) {
        this._pendingRetirements.deleteAndDispose(t), this._pending.set(t, {
            identity: t,
            rowWhenStarted: e,
            pluginId: n.pluginId,
            published: n.published,
            destinationFilePath: n.destinationFilePath === void 0 ? void 0 : bce(n.destinationFilePath),
            inAgentStore: n.inAgentStore
        }), this.notifyChanged();
    }
    armRetirement(t) {
        const e = new Nt;
        e.add(en.once(this.primitiveSourceService.onDidChangeSkillDescriptors)(()=>this.retirePending(t))), e.add(Ec(()=>this.retirePending(t), f$l)), this._pendingRetirements.set(t, e);
    }
    armRelocationRetirement(t, e) {
        const n = new Nt;
        n.add(this.primitiveSourceService.onDidChangeSkillDescriptors(()=>{
            this.retireWhenDestinationListed(t, e);
        })), n.add(Ec(()=>this.retirePending(t), f$l)), this._pendingRetirements.set(t, n);
    }
    async retireWhenDestinationListed(t, e) {
        const n = this._pending.get(t), i = await this.primitiveSourceService.getSkillDescriptors();
        n === void 0 || this._pending.get(t) !== n || i.some((r)=>bce(r.filePath) === e) && this.retirePending(t);
    }
    retirePending(t) {
        this._pending.delete(t) && (this._pendingRetirements.deleteAndDispose(t), this.notifyChanged());
    }
    notifyChanged() {
        this._snapshot = {
            pendingPublications: [
                ...this._pending.values()
            ],
            runningOperations: [
                ...this._running
            ].map(([t, e])=>({
                    identity: t,
                    kind: e
                }))
        }, this._onDidChange.fire();
    }
    flowDeps() {
        return this._marketplaceProvider ??= hMn(this.cursorAuthenticationService), {
            authService: this.cursorAuthenticationService,
            commandService: this.commandService,
            notificationService: this.notificationService,
            progressService: this.progressService,
            pluginsProviderService: this.pluginsProviderService,
            marketplaceProvider: this._marketplaceProvider,
            onSkillFilesMoved: async (t)=>this.retargetEditors(t)
        };
    }
}, dTs = Re([
    F(0, hf),
    F(1, nr),
    F(2, ss),
    F(3, Ub),
    F(4, gr),
    F(5, Li),
    F(6, Wr),
    F(7, Rd),
    F(8, VI),
    F(9, AKe),
    F(10, B1),
    F(11, ps)
], dTs), hs.registerCommand(iZf, async (t, e)=>{
    const n = N7w(e);
    return await t.get(Dw).openDialog({
        title: n.title,
        message: n.message,
        primaryButton: {
            id: "replace",
            label: n.primaryButton
        },
        cancelButton: {
            id: "cancel",
            label: "Cancel"
        }
    }) === "replace";
}), bn(uTs, dTs, 1);

}
