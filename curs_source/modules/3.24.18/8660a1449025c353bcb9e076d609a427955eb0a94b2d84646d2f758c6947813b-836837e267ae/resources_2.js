import { Gt, Qe, oby, st, tt } from "./Iwo.js";
import { or, yi } from "./configuration.js";
import { pP } from "./extpath.js";
import { NB } from "./glob.js";
import { du, gQ } from "./map.js";
import { Ki, Ot } from "./network.js";
import { cp } from "./objects.js";
import { Ul, eW } from "./path_2.js";
import { Lr, iL } from "./resources.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
import { gCe } from "./yBp.js";
import { Rp } from "./ze.js";
var ole;
export { ole };
var __wakaru_tns_initialized = false;
export function tns() {
if (__wakaru_tns_initialized) return;
__wakaru_tns_initialized = true;
"use strict";
E(), fn(), cp(), Ul(), Gt(), Lr(), Qe(), NB(), Sr(), or(), Ki(), du(), pP(), ole = class extends st {
    constructor(t, e, n, i){
        super(), this.getExpression = t, this.shouldUpdate = e, this.contextService = n, this.configurationService = i, this._onExpressionChange = this._register(new tt), this.onExpressionChange = this._onExpressionChange.event, this.mapFolderToParsedExpression = new Map, this.mapFolderToConfiguredExpression = new Map, this.updateExpressions(!1), this.registerListeners();
    }
    registerListeners() {
        this._register(this.configurationService.onDidChangeConfiguration((t)=>{
            this.shouldUpdate(t) && this.updateExpressions(!0);
        })), this._register(this.contextService.onDidChangeWorkspaceFolders(()=>this.updateExpressions(!0)));
    }
    updateExpressions(t) {
        let e = !1;
        for (const s of this.contextService.getWorkspace().folders){
            const o = s.uri.toString(), a = this.doGetExpression(s.uri), l = this.mapFolderToConfiguredExpression.get(o);
            a ? (!l || !Rp(l.expression, a.expression)) && (e = !0, this.mapFolderToParsedExpression.set(o, gCe(a.expression)), this.mapFolderToConfiguredExpression.set(o, a)) : l && (e = !0, this.mapFolderToParsedExpression.delete(o), this.mapFolderToConfiguredExpression.delete(o));
        }
        const n = new gQ(this.contextService.getWorkspace().folders.map((s)=>s.uri));
        for (const [s] of this.mapFolderToConfiguredExpression)s !== ole.NO_FOLDER && (n.has(rt.parse(s)) || (this.mapFolderToParsedExpression.delete(s), this.mapFolderToConfiguredExpression.delete(s), e = !0));
        const i = this.doGetExpression(void 0), r = this.mapFolderToConfiguredExpression.get(ole.NO_FOLDER);
        i ? (!r || !Rp(r.expression, i.expression)) && (e = !0, this.mapFolderToParsedExpression.set(ole.NO_FOLDER, gCe(i.expression)), this.mapFolderToConfiguredExpression.set(ole.NO_FOLDER, i)) : r && (e = !0, this.mapFolderToParsedExpression.delete(ole.NO_FOLDER), this.mapFolderToConfiguredExpression.delete(ole.NO_FOLDER)), t && e && this._onExpressionChange.fire();
    }
    doGetExpression(t) {
        const e = this.getExpression(t);
        if (!e) return;
        const n = Object.keys(e);
        if (n.length === 0) return;
        let i = !1;
        const r = Object.create(null);
        for (const s of n){
            i || (i = eW(s));
            let o = s;
            const a = oby(o, !0);
            if (a) {
                const l = a.toLowerCase();
                a !== a.toLowerCase() && (o = `${l}${o.substring(1)}`);
            }
            r[o] = e[s];
        }
        return {
            expression: r,
            hasAbsolutePath: i
        };
    }
    matches(t, e) {
        if (this.mapFolderToParsedExpression.size === 0) return !1;
        const n = this.contextService.getWorkspaceFolder(t);
        let i, r;
        if (n && this.mapFolderToParsedExpression.has(n.uri.toString()) ? (i = this.mapFolderToParsedExpression.get(n.uri.toString()), r = this.mapFolderToConfiguredExpression.get(n.uri.toString())) : (i = this.mapFolderToParsedExpression.get(ole.NO_FOLDER), r = this.mapFolderToConfiguredExpression.get(ole.NO_FOLDER)), !i) return !1;
        let s;
        return n ? s = iL(n.uri, t) : s = this.uriToPath(t), typeof s == "string" && i(s, void 0, e) ? !0 : s !== this.uriToPath(t) && r?.hasAbsolutePath ? !!i(this.uriToPath(t), void 0, e) : !1;
    }
    uriToPath(t) {
        return t.scheme === Ot.file ? t.fsPath : t.path;
    }
}, ole.NO_FOLDER = null, ole = Re([
    F(2, yr),
    F(3, yi)
], ole);

}
