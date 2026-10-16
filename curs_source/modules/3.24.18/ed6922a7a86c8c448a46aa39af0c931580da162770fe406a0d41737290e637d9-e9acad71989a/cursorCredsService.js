import { XDv, kmo } from "./A3u.js";
import { Se, bt, ve, we } from "./HVr.js";
import { C, ei, ie, pt } from "./actions_2.js";
import { Cmo, wmo } from "./backendUrl.js";
import { dn, he, xn } from "./contextkey.js";
import { bg, of, oy } from "./contextkeys.js";
import { Vr, Yi } from "./environmentService.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Ie, Pr, fe } from "./keyCodes.js";
import { di, ji } from "./notification.js";
import { mn, pd, qe } from "./qIc.js";
import { Gs, Ya } from "./quickInput.js";
import { Foo, JLn, KHt, Noo, Ooo, QLn, ZLn, cGi, lGi, mkt, oGi, pkt, sGi } from "./reactiveStorageService.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { CS, L1 } from "./statusbar.js";
import { x } from "./tslib.es6.js";
var PR, B6, Aqi, APe, Pet, Rqi, YM, HQd, RPe, XM, WQd, twt, Tmo, GQd, VQd;
export { APe, Aqi, B6, GQd, HQd, PR, Pet, RPe, Rqi, Tmo, VQd, WQd, XM, YM, twt };
var __wakaru_ZM_initialized = false;
export function ZM() {
if (__wakaru_ZM_initialized) return;
__wakaru_ZM_initialized = true;
"use strict";
x(), Pn(), Ze(), Pr(), ei(), KHt(), Ha(), bt(), L1(), Se(), Ya(), dn(), of(), ji(), Vr(), Cmo(), PR = pd("cursorCredsService"), B6 = "https://staging.cursor.sh", Aqi = "https://repo42.cursor.sh", APe = "https://dev-staging.cursor.sh", Pet = "OzaBXLClY5CAGxNzUhQ2vlknpi07tGuE", Rqi = "dev.authentication.cursor.sh", YM = "https://localhost:", HQd = 8e3, RPe = "http://localhost:4000", XM = {
    PROD: "Prod",
    STAGING: "Staging",
    DEV_STAGING: "DevStaging(w/local-website)",
    STAGING_LOCAL_WEBSITE: "Staging(w/local-website)",
    LOCAL_EXCEPT_CPP_AND_EMBEDDINGS: "DefaultLocal(no cpp/embeddings)",
    STAGING_LOCAL_EXCEPT_CPP_AND_EMBEDDINGS: "StagingLocal(cpp/embeddings on Staging)",
    LOCAL_EXCEPT_CPP: "Local(except cpp)",
    FULL_LOCAL: "FullLocal",
    LOCAL_EXCEPT_EMBEDDINGS: "Local(except embeddings)"
}, WQd = new Set([
    XM.LOCAL_EXCEPT_CPP_AND_EMBEDDINGS,
    XM.LOCAL_EXCEPT_CPP,
    XM.FULL_LOCAL,
    XM.STAGING_LOCAL_EXCEPT_CPP_AND_EMBEDDINGS,
    XM.LOCAL_EXCEPT_EMBEDDINGS
]), twt = class extends we {
    constructor(e, t, n, i){
        super(), this.reactiveStorageService = e, this.statusbarService = t, this.environmentService = n, this.contextKeyService = i, this._onDidRequestRelogin = this._register(new ve), this.onDidRequestRelogin = this._onDidRequestRelogin.event, this.prodGeoCppUrl = sGi, this.namingMap = {
            [XM.PROD]: ()=>this.switchToProdServer(),
            [XM.LOCAL_EXCEPT_CPP_AND_EMBEDDINGS]: ()=>this.switchToLocalExceptCppAndEmbeddingsServer(),
            [XM.LOCAL_EXCEPT_CPP]: ()=>this.switchToLocalExceptCppServer(),
            [XM.FULL_LOCAL]: ()=>this.switchToFullLocalServer(),
            [XM.STAGING]: ()=>this.switchToStagingServer(),
            [XM.DEV_STAGING]: ()=>this.switchToDevStagingServer(),
            [XM.STAGING_LOCAL_WEBSITE]: ()=>this.switchToStagingServerLocalWebsite(),
            [XM.STAGING_LOCAL_EXCEPT_CPP_AND_EMBEDDINGS]: ()=>this.switchToLocalExceptCppAndEmbeddingsServerStagingProd(),
            [XM.LOCAL_EXCEPT_EMBEDDINGS]: ()=>this.switchToLocalExceptEmbeddingsServer()
        }, this.testBackendUrlOverride = this.environmentService.testBackendUrl, this.switchToProdServer();
        const r = wmo.bindTo(this.contextKeyService);
        this._register(this.reactiveStorageService.onChangeEffectManuallyDisposed({
            deps: [
                ()=>this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.backendUrl
            ],
            onChange: ()=>{
                r.set(kmo(this.getBackendUrl()));
            },
            runNowToo: !0
        })), this.updateServerStatusBarOnlyRunsOnLocal();
    }
    isDevUserOrDevBuild() {
        const e = this.contextKeyService.getContextKeyValue(oy.key) ?? !1;
        return !this.environmentService.isBuilt || this.environmentService.isExtensionDevelopment || e;
    }
    getEffectiveCredentials() {
        const e = this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds, t = e.localLoopInferenceUrl && e.credentialsDisplayName !== XM.PROD ? {
            ...e,
            localLoopInferenceUrl: ""
        } : e, n = this.testBackendUrlOverride;
        if (!n) return t;
        const i = this.getAgentBackendUrls(n);
        return {
            ...t,
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
        let e = this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.credentialsDisplayName;
        if (!e) return;
        e = e.replace("(", " (").replace("  (", " (");
        const t = {
            text: `Server: ${e}`,
            tooltip: "Click to switch backend server",
            command: "cursor.selectBackend",
            color: "statusBarItemProminentForeground",
            name: "currentServer",
            ariaLabel: `Current Server: ${e}`
        };
        let n = this.serverStatusBarEntry ?? twt.globalServerStatusBarEntry;
        n ? (n.update(t), this.serverStatusBarEntry = n, twt.globalServerStatusBarEntry = n) : (n = this.statusbarService.addEntry(t, "status.currentServer", 1, 200), this.serverStatusBarEntry = n, twt.globalServerStatusBarEntry = n);
    }
    getAuth0ClientId() {
        return this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.authClientId;
    }
    reloginIfNeeded(e) {
        const t = this.getAuth0ClientId();
        e !== t && this._onDidRequestRelogin.fire();
    }
    localBackendPort() {
        return HQd;
    }
    getBcProxyDevUrl() {
        const e = this.reactiveStorageService.applicationUserPersistentStorage.backgroundComposerEnv ?? "prod";
        return this.getBackendUrl().includes("localhost") || e === "dev" || e === "fullLocal" ? YM + this.localBackendPort() : pkt;
    }
    switchToProdServer() {
        const e = this.getAuth0ClientId(), t = this.getAgentBackendUrls(pkt);
        this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
            websiteUrl: ZLn,
            backendUrl: pkt,
            authClientId: cGi,
            authDomain: lGi,
            repoBackendUrl: Ooo,
            telemBackendUrl: mkt,
            geoCppBackendUrl: this.prodGeoCppUrl,
            cppConfigBackendUrl: QLn,
            cmdkBackendUrl: Noo,
            originBackendUrl: Foo,
            bcProxyUrl: pkt,
            agentBackendUrlNonPrivacy: t,
            localLoopInferenceUrl: "",
            credentialsDisplayName: XM.PROD
        }), this.reloginIfNeeded(e), this.updateServerStatusBarOnlyRunsOnLocal();
    }
    switchToLocalExceptCppServer() {
        const e = this.localBackendPort(), t = YM + e, n = this.getAgentBackendUrls(t);
        this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
            websiteUrl: RPe,
            backendUrl: t,
            authClientId: Pet,
            authDomain: YM + e,
            repoBackendUrl: YM + e,
            telemBackendUrl: mkt,
            geoCppBackendUrl: this.prodGeoCppUrl,
            cppConfigBackendUrl: QLn,
            cmdkBackendUrl: YM + e,
            originBackendUrl: YM + e,
            bcProxyUrl: this.getBcProxyDevUrl(),
            agentBackendUrlNonPrivacy: n,
            localLoopInferenceUrl: "",
            credentialsDisplayName: XM.LOCAL_EXCEPT_CPP
        }), this.updateServerStatusBarOnlyRunsOnLocal();
    }
    switchToFullLocalServer() {
        const e = this.localBackendPort(), t = YM + e, n = this.getAgentBackendUrls(t);
        this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
            websiteUrl: RPe,
            backendUrl: t,
            authClientId: Pet,
            authDomain: YM + e,
            repoBackendUrl: YM + e,
            telemBackendUrl: YM + e,
            geoCppBackendUrl: YM + e,
            cppConfigBackendUrl: YM + e,
            cmdkBackendUrl: YM + e,
            originBackendUrl: YM + e,
            bcProxyUrl: this.getBcProxyDevUrl(),
            agentBackendUrlNonPrivacy: n,
            localLoopInferenceUrl: "",
            credentialsDisplayName: XM.FULL_LOCAL
        }), this.updateServerStatusBarOnlyRunsOnLocal();
    }
    switchToLocalExceptCppAndEmbeddingsServerStagingProd() {
        const e = this.localBackendPort(), t = YM + e, n = this.getAgentBackendUrls(t);
        this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
            websiteUrl: RPe,
            backendUrl: t,
            authClientId: Pet,
            authDomain: YM + e,
            repoBackendUrl: Aqi,
            telemBackendUrl: B6,
            geoCppBackendUrl: B6,
            cppConfigBackendUrl: B6,
            cmdkBackendUrl: YM + e,
            originBackendUrl: YM + e,
            bcProxyUrl: this.getBcProxyDevUrl(),
            agentBackendUrlNonPrivacy: n,
            localLoopInferenceUrl: "",
            credentialsDisplayName: XM.STAGING_LOCAL_EXCEPT_CPP_AND_EMBEDDINGS
        }), this.updateServerStatusBarOnlyRunsOnLocal();
    }
    switchToLocalExceptCppAndEmbeddingsServer() {
        const e = this.localBackendPort(), t = YM + e, n = this.getAgentBackendUrls(t);
        this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
            websiteUrl: RPe,
            backendUrl: t,
            authClientId: Pet,
            authDomain: YM + e,
            repoBackendUrl: Aqi,
            telemBackendUrl: mkt,
            geoCppBackendUrl: this.prodGeoCppUrl,
            cppConfigBackendUrl: QLn,
            cmdkBackendUrl: YM + e,
            originBackendUrl: YM + e,
            bcProxyUrl: this.getBcProxyDevUrl(),
            agentBackendUrlNonPrivacy: n,
            localLoopInferenceUrl: "",
            credentialsDisplayName: XM.LOCAL_EXCEPT_CPP_AND_EMBEDDINGS
        }), this.updateServerStatusBarOnlyRunsOnLocal();
    }
    switchToStagingServer() {
        const e = this.getAgentBackendUrls(B6);
        this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
            websiteUrl: ZLn,
            backendUrl: B6,
            authClientId: cGi,
            authDomain: lGi,
            repoBackendUrl: B6,
            telemBackendUrl: B6,
            geoCppBackendUrl: B6,
            cppConfigBackendUrl: B6,
            cmdkBackendUrl: B6,
            originBackendUrl: oGi,
            bcProxyUrl: B6,
            agentBackendUrlNonPrivacy: e,
            localLoopInferenceUrl: "",
            credentialsDisplayName: XM.STAGING
        }), this.updateServerStatusBarOnlyRunsOnLocal();
    }
    switchToDevStagingServer() {
        const e = this.getAgentBackendUrls(APe);
        this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
            websiteUrl: RPe,
            backendUrl: APe,
            authClientId: Pet,
            authDomain: Rqi,
            repoBackendUrl: APe,
            telemBackendUrl: APe,
            geoCppBackendUrl: APe,
            cppConfigBackendUrl: APe,
            cmdkBackendUrl: APe,
            originBackendUrl: oGi,
            bcProxyUrl: APe,
            agentBackendUrlNonPrivacy: e,
            localLoopInferenceUrl: "",
            credentialsDisplayName: XM.DEV_STAGING
        });
    }
    switchToStagingServerLocalWebsite() {
        const e = this.getAgentBackendUrls(B6);
        this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
            websiteUrl: RPe,
            backendUrl: B6,
            authClientId: Pet,
            authDomain: Rqi,
            repoBackendUrl: B6,
            telemBackendUrl: B6,
            geoCppBackendUrl: B6,
            cppConfigBackendUrl: B6,
            cmdkBackendUrl: B6,
            originBackendUrl: oGi,
            bcProxyUrl: B6,
            agentBackendUrlNonPrivacy: e,
            localLoopInferenceUrl: "",
            credentialsDisplayName: XM.STAGING_LOCAL_WEBSITE
        }), this.updateServerStatusBarOnlyRunsOnLocal();
    }
    switchToLocalExceptEmbeddingsServer() {
        const e = this.localBackendPort(), t = YM + e, n = this.getAgentBackendUrls(t);
        this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", {
            websiteUrl: RPe,
            backendUrl: t,
            authClientId: Pet,
            authDomain: Rqi,
            repoBackendUrl: Aqi,
            telemBackendUrl: mkt,
            geoCppBackendUrl: YM + e,
            cppConfigBackendUrl: YM + e,
            cmdkBackendUrl: YM + e,
            originBackendUrl: YM + e,
            bcProxyUrl: this.getBcProxyDevUrl(),
            agentBackendUrlNonPrivacy: n,
            localLoopInferenceUrl: "",
            credentialsDisplayName: XM.LOCAL_EXCEPT_EMBEDDINGS
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
    getConnectGithubUrl({ authId: e, githubRepo: t, useBackgroundComposerEnv: n }) {
        let i = this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.websiteUrl;
        if (n === !0) {
            const r = this.reactiveStorageService.applicationUserPersistentStorage.backgroundComposerEnv ?? "prod";
            this.getBackendUrl().includes("localhost") || r === "dev" || r === "fullLocal" ? i = RPe : i = ZLn;
        }
        return `${i}/api/auth/connect-github?auth_id=${encodeURIComponent(e)}&github_repo=${encodeURIComponent(t ?? "")}&source=BACKGROUND_AGENT`;
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
    upgradeToPlanOrGetUrl(e, t, n) {
        let i = `${this.reactiveStorageService.applicationUserPersistentStorage.cursorCreds.websiteUrl}/api/auth/checkoutDeepControl?tier=${e}`;
        return t === !0 ? i += "&allowTrial=true" : t === !1 && (i += "&allowTrial=false"), n === !0 && (i += "&allowAutomaticPayment=true"), i;
    }
    setGeoCppBackendUrl(e) {
        (e === "" || !e.includes("cursor.sh")) && (e = sGi), this.prodGeoCppUrl = e, this.reactiveStorageService.setApplicationUserPersistentStorage("cursorCreds", (t)=>t.credentialsDisplayName !== XM.LOCAL_EXCEPT_EMBEDDINGS && t.credentialsDisplayName !== XM.FULL_LOCAL ? {
                ...t,
                geoCppBackendUrl: e
            } : t);
    }
    getAgentBackendUrls(e) {
        return e.includes("localhost") || e.includes("lclhst.build") ? {
            default: e
        } : e.includes(B6) || e.includes(APe) ? {
            default: e
        } : {
            default: JLn
        };
    }
}, twt = ie([
    C(0, Do),
    C(1, CS),
    C(2, Yi),
    C(3, xn)
], twt), mn(PR, twt, 1, 1), Tmo = ((e)=>(e.Prod = "prod", e.Staging = "staging", e.DevStaging = "devStagingEverything", e.StagingLocalWebsite = "stagingLocalWebsite", e.LocalExceptCppAndEmbeddings = "local", e.LocalExceptCppAndEmbeddingsStaging = "localStaging", e.LocalExceptCPP = "fullLocal", e.LocalExceptEmbeddings = "localExceptEmbeddings", e.FullLocal = "fullLocalincludingcpp", e))(Tmo || {}), GQd = {
    prod: Ie.WinCtrl | Ie.Shift | Ie.Alt | fe.Digit1,
    staging: Ie.WinCtrl | Ie.Shift | Ie.Alt | fe.Digit2,
    stagingLocalWebsite: Ie.WinCtrl | Ie.Shift | Ie.Alt | fe.Digit3,
    local: Ie.WinCtrl | Ie.Shift | Ie.Alt | fe.Digit4,
    fullLocal: Ie.WinCtrl | Ie.Shift | Ie.Alt | fe.Digit5,
    fullLocalincludingcpp: Ie.WinCtrl | Ie.Shift | Ie.Alt | fe.Digit6,
    localExceptEmbeddings: Ie.WinCtrl | Ie.Shift | Ie.Alt | fe.Digit7,
    devStagingEverything: Ie.WinCtrl | Ie.Shift | Ie.Alt | fe.Digit8,
    localStaging: Ie.WinCtrl | Ie.Shift | Ie.Alt | fe.Digit9
}, XDv().map(qe), VQd = class extends pt {
    constructor(){
        super({
            id: "cursor.selectBackend",
            title: {
                value: "Select Backend Server",
                original: "Select Backend Server"
            },
            f1: !0,
            precondition: he.or(bg, oy)
        });
    }
    async run(e) {
        const t = e.get(Yi), n = e.get(xn), i = e.get(di), r = n.getContextKeyValue(oy.key) ?? !1;
        if (t.isBuilt && !t.isExtensionDevelopment && !r) {
            i.warn("Backend switching is not available in production builds.");
            return;
        }
        const s = e.get(Gs), o = e.get(PR), a = o.getCredentials().credentialsDisplayName, c = Object.entries(o.namingMap).filter(([, p])=>typeof p == "function").map(([p])=>({
                label: p,
                description: p === a ? "Current" : void 0
            })), l = await s.pick(c, {
            placeHolder: "Select backend server to use",
            matchOnDescription: !0
        });
        if (!l) return;
        const u = l.label, h = o.namingMap[u];
        if (typeof h == "function") {
            const p = o.getAuth0ClientId();
            h(), o.reloginIfNeeded(p);
        }
    }
}, qe(VQd);

}
