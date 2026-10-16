import { eme } from "./agentLayoutService.js";
import { Ss } from "./aiMiscServices.js";
import { rs } from "./commands.js";
import { or } from "./configuration.js";
import { CJn, Jcd, Qcd, TJn, opn, pa } from "./constants_8.js";
import { Wo } from "./editorService.js";
import { fo } from "./environmentService.js";
import { _s } from "./experimentService.js";
import { Mt } from "./index_197.js";
import { QWw } from "./layout-picker.react.js";
import { Pv } from "./layoutService_2.js";
import { XKg } from "./layoutSwitcherOverlay.js";
import { e0s } from "./noTitlebarLayoutPreference.js";
import { Zi } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { xL } from "./unificationGate.js";
import { qZt } from "./use-application-setting.react.js";
import { Lg } from "./use-service.react.js";
import { Mev } from "./use-storage-value.react.js";
import { yev } from "./use-user-scoped-config-value.react.js";
import { ck } from "./views.js";
var THl, Nev, Lev, Oev, Fev, Bev, Uev;
export { Bev, Fev, Lev, Nev, Oev, THl, Uev };
var __wakaru_pGw_initialized = false;
export function pGw() {
if (__wakaru_pGw_initialized) return;
__wakaru_pGw_initialized = true;
"use strict";
E(), Mt(), pa(), XKg(), ck(), xL(), eme(), e0s(), Ss(), Wo(), _s(), Pv(), QWw(), qZt(), Mev(), yev(), fo(), Lg(), rs(), or(), Zi(), THl = "workbench.statusBar.visible", Nev = "Open chat as editor tabs is unavailable while non-chat content is placed in the Secondary Side Bar.", Lev = [
    {
        value: opn,
        label: "Compact"
    },
    {
        value: TJn,
        label: "Balanced"
    },
    {
        value: CJn,
        label: "Detailed"
    }
], Oev = {
    [Qcd]: TJn,
    [Jcd]: opn
}, Fev = [
    {
        value: "breadcrumb",
        label: "Breadcrumb"
    },
    {
        value: "island",
        label: "Island"
    }
], Bev = "default-agent", Uev = "default-editor";

}
