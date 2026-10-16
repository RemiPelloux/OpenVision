import { Gt, Qe, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { es, sn } from "./actions_2.js";
import { DJr, MJr } from "./backendUrl.js";
import { Hi, Rr, mt } from "./contextkey.js";
import { Tm, ch, x_ } from "./contextkeys.js";
import { fo, ps } from "./environmentService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Ma, Ze, ut } from "./keyCodes.js";
import { Ks, Wr } from "./notification.js";
import { Cl, Gu } from "./quickInput.js";
import { BYr, JUa, LYr, Mki, OYr, Pki, Rki, UTn, UYr, eja, fGt, tja, vGt } from "./reactiveStorageService.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { CL, QD } from "./statusbar.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { dYa, gG1 } from "./yBp.js";
import { Ht } from "./ze.js";
var Ub, sG, NJr, tze, FCt, LJr, $O, GBm, nze, HO, qBm, vqt, hYa, zBm, VBm;
export { $O, FCt, GBm, HO, LJr, NJr, Ub, VBm, hYa, nze, qBm, sG, tze, vqt, zBm };
var __wakaru_py_initialized = false;
export function py() {
if (__wakaru_py_initialized) return;
__wakaru_py_initialized = true;
"use strict";
E(), Rn(), It(), Ma(), es(), UTn(), el(), Gt(), CL(), Qe(), Gu(), Hi(), x_(), Ks(), fo(), DJr(), Ub = Il("cursorCredsService"), sG = "https://staging.cursor.sh", NJr = "https://repo42.cursor.sh", tze = "https://dev-staging.cursor.sh", FCt = "OzaBXLClY5CAGxNzUhQ2vlknpi07tGuE", LJr = "dev.authentication.cursor.sh", $O = "https://localhost:", GBm = 8e3, nze = "http://localhost:4000", HO = {
    PROD: "Prod",
    STAGING: "Staging",
    DEV_STAGING: "DevStaging(w/local-website)",
    STAGING_LOCAL_WEBSITE: "Staging(w/local-website)",
    LOCAL_EXCEPT_CPP_AND_EMBEDDINGS: "DefaultLocal(no cpp/embeddings)",
    STAGING_LOCAL_EXCEPT_CPP_AND_EMBEDDINGS: "StagingLocal(cpp/embeddings on Staging)",
    LOCAL_EXCEPT_CPP: "Local(except cpp)",
    FULL_LOCAL: "FullLocal",
    LOCAL_EXCEPT_EMBEDDINGS: "Local(except embeddings)"
}, qBm = new Set([
    HO.LOCAL_EXCEPT_CPP_AND_EMBEDDINGS,
    HO.LOCAL_EXCEPT_CPP,
    HO.FULL_LOCAL,
    HO.STAGING_LOCAL_EXCEPT_CPP_AND_EMBEDDINGS,
    HO.LOCAL_EXCEPT_EMBEDDINGS
]), vqt = class extends st {
    constructor(t, e, n, i){
        super(), this.reactiveStorageService = t, this.statusbarService = e, this.environmentService = n, this.contextKeyService = i, this._onDidRequestRelogin = this._register(new tt), this.onDidRequestRelogin = this._onDidRequestRelogin.event, this.prodGeoCppUrl = LYr, this.namingMap = {
            [HO.PROD]: ()=>this.switchToProdServer(),
            [HO.LOCAL_EXCEPT_CPP_AND_EMBEDDINGS]: ()=>this.switchToLocalExceptCppAndEmbeddingsServer(),
            [HO.LOCAL_EXCEPT_CPP]: ()=>this.switchToLocalExceptCppServer(),
            [HO.FULL_LOCAL]: ()=>this.switchToFullLocalServer(),
            [HO.STAGING]: ()=>this.switchToStagingServer(),
            [HO.DEV_STAGING]: ()=>this.switchToDevStagingServer(),
            [HO.STAGING_LOCAL_WEBSITE]: ()=>this.switchToStagingServerLocalWebsite(),
            [HO.STAGING_LOCAL_EXCEPT_CPP_AND_EMBEDDINGS]: ()=>this.switchToLocalExceptCppAndEmbeddingsServerStagingProd(),
            [HO.LOCAL_EXCEPT_EMBEDDINGS]: ()=>this.switchToLocalExceptEmbeddingsServer()
        }, this.testBackendUrlOverride = this.environmentService.testBackendUrl, this.switchToProdServer();
        const r = MJr.bindTo(this.contextKeyService);
        this._register(this.reactiveStorageService.onChangeEffectManuallyDisposed({
            deps: [
                ()=>this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.backendUrl
            ],
            onChange: ()=>{
                r.set(dYa(this.getBackendUrl()));
            },
            runNowToo: !0
        })), this.updateServerStatusBarOnlyRunsOnLocal();
    }
    isDevUserOrDevBuild() {
        const t = this.contextKeyService.getContextKeyValue(Tm.key) ?? !1;
        return !this.environmentService.isBuilt || this.environmentService.isExtensionDevelopment || t;
    }
    getEffectiveCredentials() {
        const t = this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds, e = t.localLoopInferenceUrl && t.credentialsDisplayName !== HO.PROD ? {
            ...t,
            localLoopInferenceUrl: ""
        } : t, n = this.testBackendUrlOverride;
        if (!n) return e;
        const i = this.getAgentBackendUrls(n);
        return {
            ...e,
            backendUrl: n,
            repoBackendUrl: n,
            telemBackendUrl: n,
            geoCppBackendUrl: n,
            cppConfigBackendUrl: n,
            cmdkBackendUrl: n,
            originBackendUrl: n,
            bcProxyUrl: n,
            agentBackendUrlNonPrivacy: i,
            localLoopInferenceUrl: ""
        };
    }
    switchToExistingServer() {
        this.testBackendUrlOverride;
    }
    updateServerStatusBarOnlyRunsOnLocal() {
        if (!this.isDevUserOrDevBuild()) return;
        let t = this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.credentialsDisplayName;
        if (!t) return;
        t = t.replace("(", " (").replace("  (", " (");
        const e = {
            text: `Server: ${t}`,
            tooltip: "Click to switch backend server",
            command: "cursor.selectBackend",
            color: "statusBarItemProminentForeground",
            name: "currentServer",
            ariaLabel: `Current Server: ${t}`
        };
        let n = this.serverStatusBarEntry ?? vqt.globalServerStatusBarEntry;
        n ? (n.update(e), this.serverStatusBarEntry = n, vqt.globalServerStatusBarEntry = n) : (n = this.statusbarService.addEntry(e, "status.currentServer", 1, 200), this.serverStatusBarEntry = n, vqt.globalServerStatusBarEntry = n);
    }
    getAuth0ClientId() {
        return this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.authClientId;
    }
    reloginIfNeeded(t) {
        const e = this.getAuth0ClientId();
        t !== e && this._onDidRequestRelogin.fire();
    }
    localBackendPort() {
        return GBm;
    }
    getBcProxyDevUrl() {
        const t = this.reactiveStorageService.applicationUserPersistentStorage.backgroundComposerEnv ?? "prod";
        return this.getBackendUrl().includes("localhost") || t === "dev" || t === "fullLocal" ? $O + this.localBackendPort() : fGt;
    }
    switchToProdServer() {
        const t = this.getAuth0ClientId(), e = this.getAgentBackendUrls(fGt);
        this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
            websiteUrl: Rki,
            backendUrl: fGt,
            authClientId: BYr,
            authDomain: UYr,
            repoBackendUrl: eja,
            telemBackendUrl: vGt,
            geoCppBackendUrl: this.prodGeoCppUrl,
            cppConfigBackendUrl: Pki,
            cmdkBackendUrl: JUa,
            originBackendUrl: tja,
            bcProxyUrl: fGt,
            agentBackendUrlNonPrivacy: e,
            localLoopInferenceUrl: "",
            credentialsDisplayName: HO.PROD
        }), this.reloginIfNeeded(t), this.updateServerStatusBarOnlyRunsOnLocal();
    }
    switchToLocalExceptCppServer() {
        const t = this.localBackendPort(), e = $O + t, n = this.getAgentBackendUrls(e);
        this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
            websiteUrl: nze,
            backendUrl: e,
            authClientId: FCt,
            authDomain: $O + t,
            repoBackendUrl: $O + t,
            telemBackendUrl: vGt,
            geoCppBackendUrl: this.prodGeoCppUrl,
            cppConfigBackendUrl: Pki,
            cmdkBackendUrl: $O + t,
            originBackendUrl: $O + t,
            bcProxyUrl: this.getBcProxyDevUrl(),
            agentBackendUrlNonPrivacy: n,
            localLoopInferenceUrl: "",
            credentialsDisplayName: HO.LOCAL_EXCEPT_CPP
        }), this.updateServerStatusBarOnlyRunsOnLocal();
    }
    switchToFullLocalServer() {
        const t = this.localBackendPort(), e = $O + t, n = this.getAgentBackendUrls(e);
        this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
            websiteUrl: nze,
            backendUrl: e,
            authClientId: FCt,
            authDomain: $O + t,
            repoBackendUrl: $O + t,
            telemBackendUrl: $O + t,
            geoCppBackendUrl: $O + t,
            cppConfigBackendUrl: $O + t,
            cmdkBackendUrl: $O + t,
            originBackendUrl: $O + t,
            bcProxyUrl: this.getBcProxyDevUrl(),
            agentBackendUrlNonPrivacy: n,
            localLoopInferenceUrl: "",
            credentialsDisplayName: HO.FULL_LOCAL
        }), this.updateServerStatusBarOnlyRunsOnLocal();
    }
    switchToLocalExceptCppAndEmbeddingsServerStagingProd() {
        const t = this.localBackendPort(), e = $O + t, n = this.getAgentBackendUrls(e);
        this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
            websiteUrl: nze,
            backendUrl: e,
            authClientId: FCt,
            authDomain: $O + t,
            repoBackendUrl: NJr,
            telemBackendUrl: sG,
            geoCppBackendUrl: sG,
            cppConfigBackendUrl: sG,
            cmdkBackendUrl: $O + t,
            originBackendUrl: $O + t,
            bcProxyUrl: this.getBcProxyDevUrl(),
            agentBackendUrlNonPrivacy: n,
            localLoopInferenceUrl: "",
            credentialsDisplayName: HO.STAGING_LOCAL_EXCEPT_CPP_AND_EMBEDDINGS
        }), this.updateServerStatusBarOnlyRunsOnLocal();
    }
    switchToLocalExceptCppAndEmbeddingsServer() {
        const t = this.localBackendPort(), e = $O + t, n = this.getAgentBackendUrls(e);
        this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
            websiteUrl: nze,
            backendUrl: e,
            authClientId: FCt,
            authDomain: $O + t,
            repoBackendUrl: NJr,
            telemBackendUrl: vGt,
            geoCppBackendUrl: this.prodGeoCppUrl,
            cppConfigBackendUrl: Pki,
            cmdkBackendUrl: $O + t,
            originBackendUrl: $O + t,
            bcProxyUrl: this.getBcProxyDevUrl(),
            agentBackendUrlNonPrivacy: n,
            localLoopInferenceUrl: "",
            credentialsDisplayName: HO.LOCAL_EXCEPT_CPP_AND_EMBEDDINGS
        }), this.updateServerStatusBarOnlyRunsOnLocal();
    }
    switchToStagingServer() {
        const t = this.getAgentBackendUrls(sG);
        this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
            websiteUrl: Rki,
            backendUrl: sG,
            authClientId: BYr,
            authDomain: UYr,
            repoBackendUrl: sG,
            telemBackendUrl: sG,
            geoCppBackendUrl: sG,
            cppConfigBackendUrl: sG,
            cmdkBackendUrl: sG,
            originBackendUrl: OYr,
            bcProxyUrl: sG,
            agentBackendUrlNonPrivacy: t,
            localLoopInferenceUrl: "",
            credentialsDisplayName: HO.STAGING
        }), this.updateServerStatusBarOnlyRunsOnLocal();
    }
    switchToDevStagingServer() {
        const t = this.getAgentBackendUrls(tze);
        this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
            websiteUrl: nze,
            backendUrl: tze,
            authClientId: FCt,
            authDomain: LJr,
            repoBackendUrl: tze,
            telemBackendUrl: tze,
            geoCppBackendUrl: tze,
            cppConfigBackendUrl: tze,
            cmdkBackendUrl: tze,
            originBackendUrl: OYr,
            bcProxyUrl: tze,
            agentBackendUrlNonPrivacy: t,
            localLoopInferenceUrl: "",
            credentialsDisplayName: HO.DEV_STAGING
        });
    }
    switchToStagingServerLocalWebsite() {
        const t = this.getAgentBackendUrls(sG);
        this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
            websiteUrl: nze,
            backendUrl: sG,
            authClientId: FCt,
            authDomain: LJr,
            repoBackendUrl: sG,
            telemBackendUrl: sG,
            geoCppBackendUrl: sG,
            cppConfigBackendUrl: sG,
            cmdkBackendUrl: sG,
            originBackendUrl: OYr,
            bcProxyUrl: sG,
            agentBackendUrlNonPrivacy: t,
            localLoopInferenceUrl: "",
            credentialsDisplayName: HO.STAGING_LOCAL_WEBSITE
        }), this.updateServerStatusBarOnlyRunsOnLocal();
    }
    switchToLocalExceptEmbeddingsServer() {
        const t = this.localBackendPort(), e = $O + t, n = this.getAgentBackendUrls(e);
        this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
            websiteUrl: nze,
            backendUrl: e,
            authClientId: FCt,
            authDomain: LJr,
            repoBackendUrl: NJr,
            telemBackendUrl: vGt,
            geoCppBackendUrl: $O + t,
            cppConfigBackendUrl: $O + t,
            cmdkBackendUrl: $O + t,
            originBackendUrl: $O + t,
            bcProxyUrl: this.getBcProxyDevUrl(),
            agentBackendUrlNonPrivacy: n,
            localLoopInferenceUrl: "",
            credentialsDisplayName: HO.LOCAL_EXCEPT_EMBEDDINGS
        }), this.updateServerStatusBarOnlyRunsOnLocal();
    }
    getCredentials() {
        return this.getEffectiveCredentials();
    }
    getLoginUrl() {
        return `${this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.websiteUrl}/loginDeepControl`;
    }
    getLogoutUrl() {
        return `${this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.websiteUrl}/api/auth/logout`;
    }
    getPricingUrl() {
        return `${this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.websiteUrl}/pricing`;
    }
    getSettingsUrl() {
        return `${this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.websiteUrl}/dashboard`;
    }
    getBackgroundAgentSettingsUrl() {
        return `${this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.websiteUrl}/dashboard?tab=cloud-agents`;
    }
    getIntegrationsUrl() {
        return `${this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.websiteUrl}/dashboard?tab=integrations`;
    }
    getConnectGithubUrl({ authId: t, githubRepo: e, useBackgroundComposerEnv: n }) {
        let i = this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.websiteUrl;
        if (n === !0) {
            const r = this.reactiveStorageService.applicationUserPersistentStorage.backgroundComposerEnv ?? "prod";
            this.getBackendUrl().includes("localhost") || r === "dev" || r === "fullLocal" ? i = nze : i = Rki;
        }
        return `${i}/api/auth/connect-github?auth_id=${encodeURIComponent(t)}&github_repo=${encodeURIComponent(e ?? "")}&source=BACKGROUND_AGENT`;
    }
    getPollingEndpoint() {
        return `${this.getBackendUrl()}/auth/poll`;
    }
    getWebsiteUrl() {
        return this.getCredentials().websiteUrl;
    }
    getBackendUrl() {
        return this.getCredentials().backendUrl;
    }
    getRepoBackendUrl() {
        return this.getCredentials().repoBackendUrl;
    }
    getOriginBackendUrl() {
        return this.getCredentials().originBackendUrl;
    }
    getTelemBackendUrl() {
        return this.getCredentials().telemBackendUrl;
    }
    getGeoCppBackendUrl() {
        return this.getCredentials().geoCppBackendUrl;
    }
    getCppConfigBackendUrl() {
        return this.getCredentials().cppConfigBackendUrl;
    }
    upgradeToPlanOrGetUrl(t, e, n) {
        let i = `${this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.websiteUrl}/api/auth/checkoutDeepControl?tier=${t}`;
        return e === !0 ? i += "&allowTrial=true" : e === !1 && (i += "&allowTrial=false"), n === !0 && (i += "&allowAutomaticPayment=true"), i;
    }
    setGeoCppBackendUrl(t) {
        (t === "" || !t.includes("cursor.sh")) && (t = LYr), this.prodGeoCppUrl = t, this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", (e)=>e.credentialsDisplayName !== HO.LOCAL_EXCEPT_EMBEDDINGS && e.credentialsDisplayName !== HO.FULL_LOCAL ? {
                ...e,
                geoCppBackendUrl: t
            } : e);
    }
    getAgentBackendUrls(t) {
        return t.includes("localhost") || t.includes("lclhst.build") ? {
            default: t
        } : t.includes(sG) || t.includes(tze) ? {
            default: t
        } : {
            default: Mki
        };
    }
}, vqt = Re([
    F(0, sa),
    F(1, QD),
    F(2, ps),
    F(3, Rr)
], vqt), bn(Ub, vqt, 1, 1), hYa = ((t)=>(t.Prod = "prod", t.Staging = "staging", t.DevStaging = "devStagingEverything", t.StagingLocalWebsite = "stagingLocalWebsite", t.LocalExceptCppAndEmbeddings = "local", t.LocalExceptCppAndEmbeddingsStaging = "localStaging", t.LocalExceptCPP = "fullLocal", t.LocalExceptEmbeddings = "localExceptEmbeddings", t.FullLocal = "fullLocalincludingcpp", t))(hYa || {}), zBm = {
    prod: ut.WinCtrl | ut.Shift | ut.Alt | Ze.Digit1,
    staging: ut.WinCtrl | ut.Shift | ut.Alt | Ze.Digit2,
    stagingLocalWebsite: ut.WinCtrl | ut.Shift | ut.Alt | Ze.Digit3,
    local: ut.WinCtrl | ut.Shift | ut.Alt | Ze.Digit4,
    fullLocal: ut.WinCtrl | ut.Shift | ut.Alt | Ze.Digit5,
    fullLocalincludingcpp: ut.WinCtrl | ut.Shift | ut.Alt | Ze.Digit6,
    localExceptEmbeddings: ut.WinCtrl | ut.Shift | ut.Alt | Ze.Digit7,
    devStagingEverything: ut.WinCtrl | ut.Shift | ut.Alt | Ze.Digit8,
    localStaging: ut.WinCtrl | ut.Shift | ut.Alt | Ze.Digit9
}, gG1().map(Ht), VBm = class extends sn {
    constructor(){
        super({
            id: "cursor.selectBackend",
            title: {
                value: "Select Backend Server",
                original: "Select Backend Server"
            },
            f1: !0,
            precondition: mt.or(ch, Tm)
        });
    }
    async run(t) {
        const e = t.get(ps), n = t.get(Rr), i = t.get(Wr), r = n.getContextKeyValue(Tm.key) ?? !1;
        if (e.isBuilt && !e.isExtensionDevelopment && !r) {
            i.warn("Backend switching is not available in production builds.");
            return;
        }
        const s = t.get(Cl), o = t.get(Ub), a = o.getCredentials().credentialsDisplayName, l = Object.entries(o.namingMap).filter(([, h])=>typeof h == "function").map(([h])=>({
                label: h,
                description: h === a ? "Current" : void 0
            })), c = await s.pick(l, {
            placeHolder: "Select backend server to use",
            matchOnDescription: !0
        });
        if (!c) return;
        const u = c.label, d = o.namingMap[u];
        if (typeof d == "function") {
            const h = o.getAuth0ClientId();
            d(), o.reloginIfNeeded(h);
        }
    }
}, Ht(VBm);

}
