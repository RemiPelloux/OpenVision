import { FS } from "./button_4.js";
import { mk } from "./gallerySection.js";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { pi } from "./ze.js";
var xdt, IXv, xXv, AXv, RXv, PXv, Sdc, kdc, MXv, DXv, NXv, LXv, OXv, wdc, FXv, BXv, UXv, jXv, $Xv, HXv, WXv, GXv, ALs;
export { $Xv, ALs, AXv, BXv, DXv, FXv, GXv, HXv, IXv, LXv, MXv, NXv, OXv, PXv, RXv, Sdc, UXv, WXv, jXv, kdc, wdc, xXv, xdt };
var __wakaru_McC_initialized = false;
export function McC() {
if (__wakaru_McC_initialized) return;
__wakaru_McC_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), vo(), FS(), mk(), xdt = wt("<span>"), IXv = wt("<span>null"), xXv = wt('<span>"<!>"'), AXv = wt("<span>[]"), RXv = wt("<span>["), PXv = wt("<span>]"), Sdc = wt("<span> "), kdc = wt("<span>,"), MXv = wt("<span>{}"), DXv = wt("<span>{"), NXv = wt("<span>}"), LXv = wt("<span>: "), OXv = wt("<div><p>View and modify reactive storage in real-time. Changes are immediately reflected in the application. Double-click any JSON key to prepopulate the REPL with a setStorage command for easy editing."), wdc = wt("<div>"), FXv = wt("<div><div><label>Storage Scope:</label><select><option>APPLICATION</option><option>PROFILE</option><option>WORKSPACE</option></select></div><div><label>Storage Target:</label><select><option>USER</option><option>MACHINE"), BXv = wt("<div><span>"), UXv = wt('<div><div><input type=text placeholder="Search in JSON content...">'), jXv = wt("<div><strong>:</strong> "), $Xv = wt("<div>No changes yet"), HXv = wt('<div><div><div><pre></pre></div></div><div><div><h4>Set Storage Value</h4><div><div>\u{1F4A1} Tips:</div><div>\u2022 Use dot notation for nested keys (e.g., "composerState.unifiedMode")<br>\u2022 Values are parsed as JSON first, then as strings if parsing fails<br>\u2022 Double-click any JSON key to populate the form</div></div></div><div><div><label>Key (supports nested paths):</label><input type=text placeholder="e.g., myKey or composerState.unifiedMode"></div><div><label>Value (JSON or string):</label><textarea placeholder="e.g., &quot;hello&quot;, true, 42, {&quot;nested&quot;: &quot;object&quot;}"></textarea></div><div></div></div><div><h5>Recent Changes:'), WXv = wt("<div><span>Size: <!> KB</span><span>Keys: </span><span>Storage Scope: "), GXv = wt("<div><div><span></span><span></span></div><div>"), ALs = [
    {
        type: "applicationUserPersistent",
        label: "Application User Persistent Storage",
        description: "Global storage across entire application"
    },
    {
        type: "storageService",
        label: "Storage Service",
        description: "IStorageService"
    }
];

}
