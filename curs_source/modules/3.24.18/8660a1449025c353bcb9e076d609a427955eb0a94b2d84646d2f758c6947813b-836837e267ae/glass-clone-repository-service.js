import { PE } from "./Aeg.js";
import { Il, bn } from "./SZu.js";
import { Rs, ss } from "./authenticationService.js";
import { kl } from "./browser.ts";
import { Ub, py } from "./cursorCredsService.js";
import { wS } from "./displayHelpers.js";
import { Rn } from "./extensions.js";
import { Vc, yp } from "./glass-command-service.js";
import { AL, _N } from "./glass-configuration-service.js";
import { a5, yU } from "./glass-dialog-service.js";
import { ul, zc } from "./glass-notification-service.js";
import { F$, s9 } from "./glass-path-service.js";
import { OG, pU } from "./glass-workspaces-management-service.js";
import { It } from "./instantiation.js";
import { $Op, b6 } from "./ipa.js";
import { Woc } from "./lBv.js";
import { ub } from "./localAgentRepository.js";
import { wsT } from "./mm_.js";
import { Yn } from "./notification.js";
import { j4i } from "./origin-dev-host.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
var nnn, e9s;
export { e9s, nnn };
var __wakaru_Q4n_initialized = false;
export function Q4n() {
if (__wakaru_Q4n_initialized) return;
__wakaru_Q4n_initialized = true;
"use strict";
E(), kl(), fn(), Rn(), It(), ub(), wS(), py(), Rs(), yp(), AL(), a5(), zc(), F$(), OG(), j4i(), nnn = Il("glassCloneRepositoryService"), e9s = class {
    constructor(t, e, n, i, r, s, o, a){
        this._authenticationService = t, this._cursorCredsService = e, this._commandService = n, this._configurationService = i, this._fileDialogService = r, this._notificationService = s, this._pathService = o, this._workspacesService = a;
    }
    async cloneRepository(t) {
        const e = t === void 0 ? await this._commandService.executeCommand("git.clone", void 0, void 0, {
            openAfterClone: !1
        }) : await this._cloneWithProgress(t);
        if (e) return this._workspacesService.getSingleFolderWorkspaceIdentifier(rt.file(e));
    }
    async _cloneWithProgress(t) {
        const e = b6(t) || "repository", n = await this._pickDestination(e);
        if (!n) return;
        const i = this._notificationService.notify({
            severity: Yn.Info,
            message: `Cloning ${PE(e)}`,
            progress: {
                infinite: !0
            },
            sticky: !0
        });
        try {
            const r = wsT(t), s = await this._originAuthHeader(r);
            return await this._commandService.executeCommand("git.clone", r, n.fsPath, {
                openAfterClone: !1,
                displayUrl: e,
                ...s && {
                    httpExtraHeader: s
                }
            });
        } finally{
            i.close();
        }
    }
    async _originAuthHeader(t) {
        const e = Woc(this._cursorCredsService.getOriginBackendUrl());
        let n;
        try {
            n = new URL(t);
        } catch  {
            return;
        }
        if (n.protocol !== "https:" || n.host.toLowerCase() !== e.toLowerCase()) return;
        const i = await this._authenticationService.getAccessToken(), [r] = Object.values($Op([
            e
        ], i) ?? {});
        return r;
    }
    async _pickDestination(t) {
        const e = this._pathService.userHome({
            preferLocal: !0
        }), n = this._configurationService.getValue("git.defaultCloneDirectory");
        return (await this._fileDialogService.showOpenDialog({
            title: `Choose a folder to clone ${t} into`,
            openLabel: "Select as Repository Destination",
            canSelectFiles: !1,
            canSelectFolders: !0,
            canSelectMany: !1,
            defaultUri: n ? rt.file(n.replace(/^~/, e.fsPath)) : e
        }))?.[0];
    }
}, e9s = Re([
    F(0, ss),
    F(1, Ub),
    F(2, Vc),
    F(3, _N),
    F(4, yU),
    F(5, ul),
    F(6, s9),
    F(7, pU)
], e9s), bn(nnn, e9s, 2, 1);

}
