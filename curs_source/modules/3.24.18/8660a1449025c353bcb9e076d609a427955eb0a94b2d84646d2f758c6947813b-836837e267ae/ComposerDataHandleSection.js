import { FS } from "./button_4.js";
import { mk } from "./gallerySection.js";
import { eD } from "./scrollableDiv.js";
import { vo } from "./solidContext.js";
import { sk } from "./solidEventsWrapper.js";
import { Pie } from "./solidObservable.js";
import { E } from "./tslib.es6.js";
import { lMn } from "./usePersistentState.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { pi } from "./ze.js";
var Duc, Izv, xzv, Azv, Rzv, Pzv, Mzv, Dzv, Nzv, Lzv, Ozv, Fzv, Bzv, Uzv, jzv, $zv, Hzv, Wzv, Gzv, qzv, zzv, Vzv;
export { $zv, Azv, Bzv, Duc, Dzv, Fzv, Gzv, Hzv, Izv, Lzv, Mzv, Nzv, Ozv, Pzv, Rzv, Uzv, Vzv, Wzv, jzv, qzv, xzv, zzv };
var __wakaru_oaC_initialized = false;
export function oaC() {
if (__wakaru_oaC_initialized) return;
__wakaru_oaC_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), pi(), vo(), FS(), lMn(), eD(), mk(), sk(), Pie(), Duc = wt("<tr><td> </td><td></td><td></td><td></td><td></td><td></td><td>"), Izv = wt("<span class=badge>Filtered by: <span>\u2715"), xzv = wt("<span class=badge> handles match filters<span>\u2715"), Azv = wt("<table><thead><tr><th>Handle ID</th><th>Composer ID</th><th>Type</th><th>Created</th><th>Disposed</th><th>Lifetime</th><th>Stack Trace</th></tr></thead><tbody>"), Rzv = wt("<table><thead><tr><th>Composer ID</th><th>Strong Handles</th><th>Weak Handles</th><th>Total Handles</th></tr></thead><tbody>"), Pzv = wt("<span>(Clear Filter)"), Mzv = wt("<div><div><h2>Composer Data Handles</h2><div></div></div><div><div><div><div><span class=badge>Total Handles: </span><span class=badge>Active Handles: </span></div><div><span><strong>Filtered:</strong> </span></div></div><div class=filter-row><div class=filter-group><span class=filter-label>Handle Type:</span><label class=filter-option><input type=radio name=handleType>All</label><label class=filter-option><input type=radio name=handleType>Strong</label><label class=filter-option><input type=radio name=handleType>Weak</label></div><div class=filter-group><span class=filter-label>Parent:</span><label class=filter-option><input type=radio name=parentStatus>All</label><label class=filter-option><input type=radio name=parentStatus>Has Parent (Cloned)</label><label class=filter-option><input type=radio name=parentStatus>No Parent</label></div><div class=filter-group><span class=filter-label>Status:</span><label class=filter-option><input type=radio name=disposalStatus>All</label><label class=filter-option><input type=radio name=disposalStatus>Active</label><label class=filter-option><input type=radio name=disposalStatus>Disposed</label></div></div></div><div><div><span>Handle Details</span></div></div></div><div><div><span>Active Handles by Composer ID</span></div></div><div><h3>Leak Risk Analysis</h3><div></div></div><div><h3>Composer Lifetime Overview</h3><div>"), Dzv = wt("<div><div>Data handle debugging is not enabled."), Nzv = wt("<div>Select a handle to view details"), Lzv = wt("<div><strong>ID:</strong> "), Ozv = wt("<div><strong>Composer ID:</strong> "), Fzv = wt("<div><strong>Type:</strong> "), Bzv = wt("<div><strong>Created:</strong> "), Uzv = wt("<div><strong>Status:</strong> "), jzv = wt("<div><strong>Lifetime:</strong> "), $zv = wt("<div><strong>Parent:</strong> "), Hzv = wt("<div><strong>Stack Trace:</strong><pre>"), Wzv = wt("<div>"), Gzv = wt("<tr><td></td><td></td><td></td><td>"), qzv = wt("<div class=risk-analysis-card><div><strong></strong><div>Risk: <!>%</div></div><div><div><div>Active: </div><div>Total: </div></div><div><div>Avg Lifetime: <!>s</div><div>Peak Active: "), zzv = wt("<div><div><div></div><div> active</div></div><div><div></div></div><div><div>\u{1F465} </div><div>\u23F1 <!>s"), Vzv = wt("<div><p>No data handle tracking information found.</p><p>This may be because no handles have been created yet.");

}
