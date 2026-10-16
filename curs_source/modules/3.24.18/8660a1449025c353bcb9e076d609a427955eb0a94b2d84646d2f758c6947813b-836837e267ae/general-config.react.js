import { Di } from "./Iwo.js";
import { vu } from "./actions.js";
import { iS } from "./adminSettingsService.js";
import { Ss } from "./aiMiscServices.js";
import { Rs } from "./authenticationService.js";
import { bb } from "./clipboardService.js";
import { DWw } from "./completion-sound-entry.react.js";
import { pa } from "./constants_8.js";
import { pf } from "./contextView.js";
import { py } from "./cursorCredsService.js";
import { vOi } from "./devAutoLoginOptions.js";
import { fo } from "./environmentService.js";
import { HWw } from "./extension-security-section.react.js";
import { EWw } from "./firstWindowStartup.js";
import { BWw } from "./general-account-upgrade-entry.react.js";
import { pGw } from "./general-layout-section.react.js";
import { CGw } from "./general-preferences-section.react.js";
import { Mt } from "./index_197.js";
import { Ks } from "./notification.js";
import { RGw } from "./privacy-settings-section.react.js";
import { el } from "./reactiveStorageServiceTypes.js";
import { Um } from "./reactiveStorageTypes_2.js";
import { dN } from "./settingsScrollIds.js";
import { $ye } from "./settingsTabContainer.react.js";
import { Zi } from "./storage_2.js";
import { JTn } from "./systemNotificationService.js";
import { vev } from "./tray_2.js";
import { E } from "./tslib.es6.js";
import { fS } from "./uiOverlayService.js";
import { MX } from "./unifiedSkuBillingService.js";
import { tee } from "./use-application-property.react.js";
import { qZt } from "./use-application-setting.react.js";
import { YZt } from "./use-auth-membership-snapshot.react.js";
import { EDe } from "./use-config-value-read-write.react.js";
import { LL } from "./use-disposable-effect.react.js";
import { NHl } from "./use-plan-usage.react.js";
import { YTe } from "./use-reactive-storage.react.js";
import { Lg } from "./use-service.react.js";
import { Mev } from "./use-storage-value.react.js";
import { wu } from "./utilities_3.js";
var ntv;
export { ntv };
var __wakaru_itv_initialized = false;
export function itv() {
if (__wakaru_itv_initialized) return;
__wakaru_itv_initialized = true;
"use strict";
E(), Mt(), vu(), pa(), Di(), pf(), EWw(), JTn(), tee(), el(), wu(), Um(), vev(), dN(), MX(), Ss(), py(), iS(), Rs(), vOi(), fS(), qZt(), DWw(), BWw(), HWw(), pGw(), CGw(), RGw(), $ye(), NHl(), Mev(), fo(), YZt(), EDe(), LL(), YTe(), Lg(), bb(), Ks(), Zi(), ntv = [
    {
        value: "default",
        label: "Default"
    },
    {
        value: "agentWindow",
        label: "Agent Window"
    },
    {
        value: "lastUsedWindows",
        label: "Last Used Windows"
    }
];

}
