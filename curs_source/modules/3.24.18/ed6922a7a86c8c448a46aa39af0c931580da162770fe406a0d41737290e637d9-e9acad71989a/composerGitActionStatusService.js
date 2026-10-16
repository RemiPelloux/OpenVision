import { Cl, He, Se, bt, po, ve, we } from "./HVr.js";
import { xd, zd } from "./agent_pb.js";
import { bn } from "./async.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, pd } from "./qIc.js";
import { x } from "./tslib.es6.js";
var iMu, rMu, fzs, sMu;
export { fzs, iMu, rMu, sMu };
var __wakaru_OUi_initialized = false;
export function OUi() {
if (__wakaru_OUi_initialized) return;
__wakaru_OUi_initialized = true;
"use strict";
x(), bn(), bt(), Se(), Ze(), Pn(), zd(), iMu = new Set([
    xd.DIFF_TAB_COMMIT,
    xd.DIFF_TAB_COMMIT_AND_PUSH,
    xd.DIFF_TAB_PUSH,
    xd.DIFF_TAB_CREATE_PR,
    xd.DIFF_TAB_FIX_MERGE_CONFLICTS,
    xd.DIFF_TAB_CREATE_BRANCH
]), rMu = 300 * 1e3, fzs = pd("composerGitActionStatusService"), sMu = class extends we {
    constructor(){
        super(...arguments), this._ongoingByComposerId = new Map, this._releasesByComposerId = this._register(new po), this._onDidChangeOngoingGitAction = this._register(new ve), this.onDidChangeOngoingGitAction = this._onDidChangeOngoingGitAction.event;
    }
    getOngoingGitAction(e) {
        return this._ongoingByComposerId.get(e);
    }
    setOngoingGitAction(e, t, n) {
        this._armRelease(e, n), this._ongoingByComposerId.get(e) !== t && (this._ongoingByComposerId.set(e, t), this._onDidChangeOngoingGitAction.fire({
            composerId: e
        }));
    }
    clearOngoingGitAction(e) {
        this._releasesByComposerId.deleteAndDispose(e), this._ongoingByComposerId.has(e) && (this._ongoingByComposerId.delete(e), this._onDidChangeOngoingGitAction.fire({
            composerId: e
        }));
    }
    _armRelease(e, t) {
        const n = new He, i = ()=>this.clearOngoingGitAction(e);
        Cl(i, rMu, n), t && n.add(t(i)), this._releasesByComposerId.set(e, n);
    }
}, mn(fzs, sMu, 1, 1);

}
