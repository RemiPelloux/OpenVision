import { vu } from "./actions.js";
import { Ft, es } from "./actions_2.js";
import { TEf } from "./glass-menubar-ids.js";
import { A2 } from "./glassAction.js";
import { RA } from "./glassModeConstants.js";
import { Q3l } from "./keybinding-help-step-utils.js";
import { MC } from "./menuEntryActionViewItem.js";
import { jZv } from "./menubar.js";
import { E } from "./tslib.es6.js";
var Wdc, WZv, Gdc;
export { Gdc, WZv, Wdc };
var __wakaru_GZv_initialized = false;
export function GZv() {
if (__wakaru_GZv_initialized) return;
__wakaru_GZv_initialized = true;
"use strict";
E(), vu(), MC(), es(), jZv(), RA(), Q3l(), A2(), TEf(), Wdc = [
    {
        menuId: Ft.MenubarMainMenu,
        menubarKey: "GlassMacApplication"
    },
    {
        menuId: Ft.MenubarFileMenu,
        menubarKey: "File"
    },
    {
        menuId: Ft.MenubarViewMenu,
        menubarKey: "View"
    },
    {
        menuId: Ft.MenubarHelpMenu,
        menubarKey: "Help"
    },
    {
        menuId: Ft.MenubarEditMenu,
        menubarKey: "Edit"
    }
], WZv = [
    {
        menuId: Ft.MenubarMainMenu,
        label: "Cursor",
        trigger: "logo"
    },
    {
        menuId: Ft.MenubarFileMenu,
        label: "File",
        trigger: "text"
    },
    {
        menuId: Ft.MenubarEditMenu,
        label: "Edit",
        trigger: "text"
    },
    {
        menuId: Ft.MenubarViewMenu,
        label: "View",
        trigger: "text"
    },
    {
        menuId: Ft.MenubarHelpMenu,
        label: "Help",
        trigger: "text"
    }
], Gdc = Wdc.map(({ menuId: t })=>t);

}
