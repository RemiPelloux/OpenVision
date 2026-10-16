import { Vse } from "./A3u.js";
import { Se, Tug, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Cn, qt } from "./configuration.js";
import { vI } from "./extpath.js";
import { qM } from "./glob.js";
import { oc, yO } from "./map.js";
import { gt, li } from "./network.js";
import { bu } from "./objects.js";
import { ba, e2 } from "./path_2.js";
import { yh } from "./qIc.js";
import { Li, h3 } from "./resources.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Jn, ci } from "./workspace.js";
var UX;
export { UX };
var __wakaru_BKi_initialized = false;
export function BKi() {
if (__wakaru_BKi_initialized) return;
__wakaru_BKi_initialized = true;
"use strict";
x(), Qt(), bu(), ba(), bt(), Li(), Se(), qM(), ci(), Cn(), li(), oc(), vI(), UX = class extends we {
    constructor(e, t, n, i){
        super(), this.getExpression = e, this.shouldUpdate = t, this.contextService = n, this.configurationService = i, this._onExpressionChange = this._register(new ve), this.onExpressionChange = this._onExpressionChange.event, this.mapFolderToParsedExpression = new Map, this.mapFolderToConfiguredExpression = new Map, this.updateExpressions(!1), this.registerListeners();
    }
    registerListeners() {
        this._register(this.configurationService.onDidChangeConfiguration((e)=>{
            this.shouldUpdate(e) && this.updateExpressions(!0);
        })), this._register(this.contextService.onDidChangeWorkspaceFolders(()=>this.updateExpressions(!0)));
    }
    updateExpressions(e) {
        let t = !1;
        for (const s of this.contextService.getWorkspace().folders){
            const o = s.uri.toString(), a = this.doGetExpression(s.uri), c = this.mapFolderToConfiguredExpression.get(o);
            a ? (!c || !yh(c.expression, a.expression)) && (t = !0, this.mapFolderToParsedExpression.set(o, Vse(a.expression)), this.mapFolderToConfiguredExpression.set(o, a)) : c && (t = !0, this.mapFolderToParsedExpression.delete(o), this.mapFolderToConfiguredExpression.delete(o));
        }
        const n = new yO(this.contextService.getWorkspace().folders.map((s)=>s.uri));
        for (const [s] of this.mapFolderToConfiguredExpression)s !== UX.NO_FOLDER && (n.has(Ee.parse(s)) || (this.mapFolderToParsedExpression.delete(s), this.mapFolderToConfiguredExpression.delete(s), t = !0));
        const i = this.doGetExpression(void 0), r = this.mapFolderToConfiguredExpression.get(UX.NO_FOLDER);
        i ? (!r || !yh(r.expression, i.expression)) && (t = !0, this.mapFolderToParsedExpression.set(UX.NO_FOLDER, Vse(i.expression)), this.mapFolderToConfiguredExpression.set(UX.NO_FOLDER, i)) : r && (t = !0, this.mapFolderToParsedExpression.delete(UX.NO_FOLDER), this.mapFolderToConfiguredExpression.delete(UX.NO_FOLDER)), e && t && this._onExpressionChange.fire();
    }
    doGetExpression(e) {
        const t = this.getExpression(e);
        if (!t) return;
        const n = Object.keys(t);
        if (n.length === 0) return;
        let i = !1;
        const r = Object.create(null);
        for (const s of n){
            i || (i = e2(s));
            let o = s;
            const a = Tug(o, !0);
            if (a) {
                const c = a.toLowerCase();
                a !== a.toLowerCase() && (o = `${c}${o.substring(1)}`);
            }
            r[o] = t[s];
        }
        return {
            expression: r,
            hasAbsolutePath: i
        };
    }
    matches(e, t) {
        if (this.mapFolderToParsedExpression.size === 0) return !1;
        const n = this.contextService.getWorkspaceFolder(e);
        let i, r;
        if (n && this.mapFolderToParsedExpression.has(n.uri.toString()) ? (i = this.mapFolderToParsedExpression.get(n.uri.toString()), r = this.mapFolderToConfiguredExpression.get(n.uri.toString())) : (i = this.mapFolderToParsedExpression.get(UX.NO_FOLDER), r = this.mapFolderToConfiguredExpression.get(UX.NO_FOLDER)), !i) return !1;
        let s;
        return n ? s = h3(n.uri, e) : s = this.uriToPath(e), typeof s == "string" && i(s, void 0, t) ? !0 : s !== this.uriToPath(e) && r?.hasAbsolutePath ? !!i(this.uriToPath(e), void 0, t) : !1;
    }
    uriToPath(e) {
        return e.scheme === gt.file ? e.fsPath : e.path;
    }
}, UX.NO_FOLDER = null, UX = ie([
    C(2, Jn),
    C(3, qt)
], UX);

}
