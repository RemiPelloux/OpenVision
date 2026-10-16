import { Am, cs } from "./Sol.js";
import { FS } from "./button_4.js";
import { PaC } from "./diffSourceRegistryDebug.css";
import { mk } from "./gallerySection.js";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { pi } from "./ze.js";
var _Vv, bVv, yVv, SVv, kVv, wVv, CVv, TVv, EVv, IVv, xVv, AVv, RVv, PVv, MVv, DVv, NVv, LVv, OVv, FVv, BVv, UVv, jVv, $Vv, HVv, WVv, GVv, qVv, zVv, VVv, KVv, YVv, XVv, nBi, Cen, Ten, r6n, Een, cPt, s6n, _Ls, ZVv, QVv, JVv, eKv;
export { $Vv, AVv, BVv, CVv, Cen, DVv, EVv, Een, FVv, GVv, HVv, IVv, JVv, KVv, LVv, MVv, NVv, OVv, PVv, QVv, RVv, SVv, TVv, Ten, UVv, VVv, WVv, XVv, YVv, ZVv, _Ls, _Vv, bVv, cPt, eKv, jVv, kVv, nBi, qVv, r6n, s6n, wVv, xVv, yVv, zVv };
var __wakaru_DaC_initialized = false;
export function DaC() {
if (__wakaru_DaC_initialized) return;
__wakaru_DaC_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), at(), Am(), pi(), vo(), FS(), mk(), PaC(), _Vv = wt("<span class=source-badge>[<!>]"), bVv = wt("<span class=descriptor-streaming title=Streaming>\u23F3"), yVv = wt("<div class=descriptor-expanded>"), SVv = wt("<div class=descriptor-container><div><span class=descriptor-toggle></span><span class=descriptor-file></span><span class=descriptor-range></span><span class=descriptor-changes> change</span><span class=descriptor-id>#"), kVv = wt("<div>Generation ID: "), wVv = wt("<div>Composer ID: "), CVv = wt("<div>Tool Call ID: "), TVv = wt("<div>Patch IDs: "), EVv = wt("<div>Source: "), IVv = wt("<div>Created: "), xVv = wt("<div>Hide Deletion View Zones: Yes"), AVv = wt("<div>Show Native Accept/Reject: Yes"), RVv = wt("<div>Hide Decorations: Yes"), PVv = wt("<div class=detail-section><span class=detail-label>Metadata:</span><div class=detail-nested>"), MVv = wt("<div>Active Line: "), DVv = wt("<div>Pending Range: L<!>-"), NVv = wt("<div class=detail-section><span class=detail-label>Streaming State:</span><div class=detail-nested>"), LVv = wt("<div class=descriptor-details><div class=detail-row><span class=detail-label>Full ID:</span><span class=detail-value></span></div><div class=detail-row><span class=detail-label>URI:</span><span class=detail-value></span></div><div class=detail-row><span class=detail-label>Range:</span><span class=detail-value>Line <!> to <!> (<!> lines)</span></div><div class=detail-section><span class=detail-label>Changes (<!>):</span><div class=changes-container>"), OVv = wt('<div class="diff-section diff-removed"><div class=diff-section-header>Before (<!> line<!>)</div><div class=diff-lines>'), FVv = wt('<div class="diff-section diff-added"><div class=diff-section-header>After (<!> line<!>)</div><div class=diff-lines>'), BVv = wt("<div class=diff-empty>No line content available"), UVv = wt("<div class=change-item><div class=change-header>Change <!>:<span></span></div><div class=change-ranges><div>Original: L<!>-</div><div>Current: L<!>-</div></div><div class=change-diff-view>"), jVv = wt('<div class="diff-line diff-line-removed"><span class=diff-line-prefix>-</span><span class=diff-line-content>'), $Vv = wt('<div class="diff-line diff-line-added"><span class=diff-line-prefix>+</span><span class=diff-line-content>'), HVv = wt("<div class=sources-panel><div class=panel-header><h4>Registered Sources (<!>)</h4></div><div class=sources-list>"), WVv = wt("<div class=empty-message>No sources registered"), GVv = wt("<div><span class=source-descriptor-count> descriptor"), qVv = wt("<div class=diff-registry-header><h3>Diff Source Registry Debugger</h3><p class=description>Live view of all registered diff sources and their descriptors. Click a source to filter. Click a descriptor to see details."), zVv = wt("<span class=current-file-name>(<!>)"), VVv = wt("<div class=diff-registry-controls><label class=filter-checkbox><input type=checkbox><span>Current file only</span></label><span class=descriptor-count>"), KVv = wt("<span class=filter-indicator>(filtered by: <!>)<span class=clear-filter>\xD7"), YVv = wt("<div class=diff-registry-content><div class=descriptors-panel><div class=panel-header><h4>Descriptors</h4></div><div class=descriptors-list>"), XVv = wt("<div class=empty-message>"), nBi = cs([]), Cen = cs([]), Ten = cs(null), r6n = cs(!1), Een = cs(null), cPt = cs(new Set), s6n = cs(null), _Ls = cs((t)=>{
    let e = t(Cen);
    const n = t(s6n);
    if (n && (e = e.filter((i)=>i.descriptor.sourceId === n)), t(r6n) && t(Een)) {
        const i = t(Een);
        e = e.filter((r)=>r.descriptor.uri.toString() === i);
    }
    return e;
}), ZVv = cs(null, (t, e, n)=>{
    e(nBi, n.sources), e(Cen, n.descriptors);
    const i = t(Ten);
    i && !n.descriptors.some((r)=>r.descriptor.id === i.descriptor.id) && e(Ten, null);
}), QVv = cs(null, (t, e, n)=>{
    const i = new Set(t(cPt));
    i.has(n) ? i.delete(n) : i.add(n), e(cPt, i);
}), JVv = cs(null, (t, e)=>{
    const n = new Set;
    for (const i of t(Cen))n.add(i.descriptor.id);
    e(cPt, n);
}), eKv = cs(null, (t, e)=>{
    e(cPt, new Set);
});

}
