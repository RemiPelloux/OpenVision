import { Re, xO } from "./abstractUpdateService.js";
import { Ie, Mt } from "./cancellation.js";
import { at, ot } from "./configuration.js";
import { E } from "./configurationRegistry.js";
import { Ye, qe } from "./environmentMainService.js";
import { Pd } from "./extHostContinuousProfilingService.js";
import { B } from "./ipc.js";
import { Vt, ht } from "./lifecycleMainService.js";
import { ige, lXe } from "./linuxPackageManager.js";
import { Z, te } from "./log.js";
import { Gi, _s } from "./nativeHostMainService.js";
import { Ne } from "./nls.js";
import { Tt, et } from "./productService.js";
import { fs, li } from "./request_2.js";
import { Cn, or } from "./storageMainService.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Eo, xe } from "./update.js";
import { XO, sge } from "./updateStorageKeys.js";
import { readFileSync as aXe } from "fs";
import dXe from "node:path";
import oXe from "path";
import { spawn as uXe } from "node:child_process";
function Mze(e, t) {
    return e === "deb" ? `sudo apt-get update && sudo apt-get install --only-upgrade ${t}` : `sudo dnf upgrade ${t}`;
}
function cXe(e = process.resourcesPath, t = (r)=>aXe(r, "utf8"), n = process.env.APPIMAGE !== void 0) {
    if (!n) try {
        const r = t(oXe.join(e, ige)).trim();
        return r === "deb" || r === "rpm" ? r : void 0;
    } catch  {
        return;
    }
}
var d1;
export { Mze, cXe, d1 };
var __wakaru_mXe_initialized = false;
export function mXe() {
if (__wakaru_mXe_initialized) return;
__wakaru_mXe_initialized = true;
"use strict";
h(), Mt(), Ne(), at(), Ye(), Vt(), te(), Gi(), Tt(), fs(), Eo(), xO(), or(), sge(), lXe(), d1 = class extends Re {
    constructor(e, t, n, r, s, i, a, o, l){
        super(t, n, r, s, i, o, l), this.machineId = e, this.nativeHostMainService = a, t.setRelaunchHandler(this);
    }
    shouldSendAuthHeaders() {
        return this.applicationStorageMainService.getBoolean(XO, -1, !1);
    }
    buildUpdateFeedUrl(e, t = !1) {
        return this.createUpdateURL(`linux-${process.arch}`, e, this.productService, t);
    }
    isAppImage() {
        return process.env.APPIMAGE !== void 0;
    }
    handleRelaunch(e) {
        return e?.addArgs || e?.removeArgs || this.state.type !== "ready" ? !1 : (this.logService.trace("update#handleRelaunch(): running raw#quitAndInstall()"), this.isAppImage() ? (this.markUpdateInstallation(), this.doQuitAndInstall(), !0) : (this.logService.info("Not running in an appimage; cannot auto-update"), !1));
    }
    async linuxCheckForUpdates(e, t) {
        try {
            let n;
            this.shouldSendAuthHeaders() ? n = await this.requestService.request({
                url: t,
                headers: this.getUpdateRequestHeaders()
            }, Ie.None) : n = await this.requestService.request({
                url: t
            }, Ie.None);
            const r = await Pd(n);
            if (!r || !r.url || !r.version || !r.productVersion) return this.setState(xe.Idle(1)), !1;
            if (this.url = t, this.isAppImage()) {
                if (await this.abortBeforeReadyIfOutdated(r.version)) return !0;
                this.scheduleCheckForOutdatedUpdate(), this.setState(xe.Ready(r));
            } else {
                this.scheduleCheckForOutdatedUpdate();
                const s = cXe();
                this.setState(s ? xe.PackageUpdateAvailable(r, s) : xe.AvailableForDownload(r));
            }
            return !0;
        } catch (n) {
            this.logService.error(n);
            const r = e ? n.message || n : void 0;
            return this.setState(xe.Idle(1, r)), !1;
        }
    }
    getPendingUpdateVersionIfAbortable() {
        return this.state.type === "ready" ? this.state.update?.version : void 0;
    }
    async getOutdatedUpdateCheckResponseVersion(e) {
        const t = await Pd(e);
        return t?.url ? t.version : void 0;
    }
    invalidateUpdate(e, t) {
        this.setState(xe.Idle(1));
    }
    async doCheckForUpdates(e) {
        this.logService.debug("UpdateService: doCheckForUpdates"), this.setState(xe.CheckingForUpdates(e));
        for (const t of [
            this.url
        ])if (t) try {
            if (await this.linuxCheckForUpdates(e, t)) return;
        } catch (n) {
            this.logService.error("Failed to check for updates:", n);
        }
    }
    async doDownloadUpdate(e) {
        if (e.packageManager) {
            await this.offerPackageUpgradeCommand(e.packageManager);
            return;
        }
        !this.isAppImage() && this.productService.downloadUrl && this.productService.downloadUrl.length > 0 ? this.nativeHostMainService.openExternal(void 0, this.productService.downloadUrl) : e.update.url && this.nativeHostMainService.openExternal(void 0, e.update.url), this.setState(xe.Idle(1));
    }
    async offerPackageUpgradeCommand(e) {
        const t = Mze(e, this.productService.applicationName), { response: n } = await this.nativeHostMainService.showMessageBox(void 0, {
            type: "info",
            message: E(2631, null, this.productService.nameShort),
            detail: E(2632, null, this.productService.nameShort, t),
            buttons: [
                E(2633, null),
                E(2634, null)
            ],
            cancelId: 1
        });
        n === 0 && await this.nativeHostMainService.writeClipboardText(void 0, t);
    }
    doQuitAndInstall() {
        if (this.state.type !== "ready") {
            this.logService.info("update#quitAndInstall(): Not ready; skippingupdate");
            return;
        } else if (this.isAppImage()) {
            if (!this.state.update?.url) {
                this.logService.warn("update#quitAndInstall(): No update url; skipping update");
                return;
            }
        } else {
            this.logService.info("update#quitAndInstall(): Unsupported installer type; skipping update");
            return;
        }
        const e = process.env.APPIMAGE;
        this.logService.debug("update#quitAndInstall(): updating appImage at " + e);
        const n = `${dXe.join(process.resourcesPath, "appimageupdatetool.AppImage")} -u "zsync|${this.state.update.url}" -O "${e}"; ${e} &`;
        this.logService.info("update#quitAndInstall(): starting updater with command " + n), uXe(n, {
            detached: !0,
            stdio: "inherit",
            shell: !0
        });
    }
}, d1 = B([
    w(1, ht),
    w(2, ot),
    w(3, qe),
    w(4, li),
    w(5, Z),
    w(6, _s),
    w(7, et),
    w(8, Cn)
], d1);

}
