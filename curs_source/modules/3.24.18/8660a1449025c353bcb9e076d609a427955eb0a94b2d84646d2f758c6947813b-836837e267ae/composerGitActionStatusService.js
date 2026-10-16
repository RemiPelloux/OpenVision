import { Ec, Gt, Nt, Qe, da, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { hc, ju } from "./agent_pb.js";
import { qn } from "./async.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var ILp, xLp, kCn, ALp;
export { ALp, ILp, kCn, xLp };
var __wakaru_wCn_initialized = false;
export function wCn() {
if (__wakaru_wCn_initialized) return;
__wakaru_wCn_initialized = true;
"use strict";
E(), qn(), Gt(), Qe(), It(), Rn(), ju(), ILp = new Set([
    hc.DIFF_TAB_COMMIT,
    hc.DIFF_TAB_COMMIT_AND_PUSH,
    hc.DIFF_TAB_PUSH,
    hc.DIFF_TAB_CREATE_PR,
    hc.DIFF_TAB_FIX_MERGE_CONFLICTS,
    hc.DIFF_TAB_CREATE_BRANCH
]), xLp = 300 * 1e3, kCn = Il("composerGitActionStatusService"), ALp = class extends st {
    constructor(){
        super(...arguments), this._ongoingByComposerId = new Map, this._releasesByComposerId = this._register(new da), this._onDidChangeOngoingGitAction = this._register(new tt), this.onDidChangeOngoingGitAction = this._onDidChangeOngoingGitAction.event;
    }
    getOngoingGitAction(t) {
        return this._ongoingByComposerId.get(t);
    }
    setOngoingGitAction(t, e, n) {
        this._armRelease(t, n), this._ongoingByComposerId.get(t) !== e && (this._ongoingByComposerId.set(t, e), this._onDidChangeOngoingGitAction.fire({
            composerId: t
        }));
    }
    clearOngoingGitAction(t) {
        this._releasesByComposerId.deleteAndDispose(t), this._ongoingByComposerId.has(t) && (this._ongoingByComposerId.delete(t), this._onDidChangeOngoingGitAction.fire({
            composerId: t
        }));
    }
    _armRelease(t, e) {
        const n = new Nt, i = ()=>this.clearOngoingGitAction(t);
        Ec(i, xLp, n), e && n.add(e(i)), this._releasesByComposerId.set(t, n);
    }
}, bn(kCn, ALp, 1, 1);

}
