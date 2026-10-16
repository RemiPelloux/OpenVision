import { Zp } from "./Aeg.js";
import { Gt, Pn, Qe, st, tt } from "./Iwo.js";
import { n9e, zze } from "./PullRequestRepositoryService.contract.js";
import { Il, bn } from "./SZu.js";
import { Wqk } from "./Ycg.js";
import { BMC, Qu_, UMC, ed_, nH, n_c, t_c } from "./Zo_.js";
import { Rn } from "./extensions.js";
import { XS } from "./githubUtils.js";
import { It } from "./instantiation.js";
import { X1 } from "./pr-query-client.js";
import { Lme } from "./pr-query-client_2.js";
import { Bk } from "./pr-query-keys.js";
import { CDe } from "./pr-query-keys_2.js";
import { Mk } from "./pullRequestIdentity.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var i_c, r_c, eFs;
export { eFs, i_c, r_c };
var __wakaru_td__initialized = false;
export function td_() {
if (__wakaru_td__initialized) return;
__wakaru_td__initialized = true;
"use strict";
E(), Gt(), Qe(), Rn(), It(), XS(), Mk(), zze(), Lme(), CDe(), i_c = Il("glassPullRequestRecordStore"), r_c = {
    seed: 0,
    probe: 1,
    projection: 2
}, eFs = class extends st {
    constructor(t){
        super(), this._records = new Map, this._notifyScheduled = !1, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._keyOfProviderId = (n)=>{
            for (const i of this._records.values())if (i.id === n) return i.key;
        }, this._register(t.onDidApplyPullRequestMetadata(({ prUrl: n, metadata: i })=>this._ingestMetadata(n, i)));
        const e = X1.getQueryCache();
        for (const n of e.findAll({
            queryKey: Bk.all
        }))this._ingestStackQuery(n.queryKey, n.state);
        this._register(Pn(e.subscribe((n)=>{
            n.type === "updated" && this._ingestStackQuery(n.query.queryKey, n.query.state);
        })));
    }
    snapshot() {
        return this._snapshot ??= [
            ...this._records.values()
        ], this._snapshot;
    }
    get(t) {
        return this._records.get(Zp(t));
    }
    seed(t) {
        const e = Date.now();
        let n = !1;
        for (const i of t){
            const r = Zp(i.prUrl), s = this._records.get(r), o = ed_(s, i, e);
            o !== void 0 && o !== s && (this._records.set(r, o), n = !0);
        }
        n && this._didChange();
    }
    _ingestMetadata(t, e) {
        const n = Zp(t);
        if (n === "") return;
        const i = this._records.get(n) ?? t_c(n, t.trim());
        if (i === void 0) return;
        let r = Qu_(i, {
            authorLogin: nH(e.authorLogin),
            baseRefName: nH(e.baseRefName),
            headRefName: nH(e.headRefName),
            id: nH(e.id),
            isDraft: e.isDraft,
            isMerged: e.isMerged,
            number: e.number,
            repository: nH(e.repository),
            state: e.state,
            title: nH(e.title),
            updatedAt: nH(e.updatedAt)
        });
        const s = BMC(e, Date.now());
        s !== void 0 && (r = n_c(r, s, this._keyOfProviderId)), this._commit(n, i, r);
    }
    _ingestStackQuery(t, e) {
        const n = Wqk(t);
        if (n === void 0) return;
        const i = e?.data;
        if (i === void 0) {
            this._clearProbe(n);
            return;
        }
        const r = e?.dataUpdatedAt ?? Date.now();
        if (i === null) {
            const s = this._records.get(n);
            s !== void 0 && this._commit(n, s, n_c(s, {
                kind: "none",
                observedAt: r,
                origin: "probe"
            }, this._keyOfProviderId));
            return;
        }
        UMC(i) && this._ingestStack(i, r);
    }
    _ingestStack(t, e) {
        const n = new Map;
        for (const r of t.edges){
            const s = Zp(r.childPrUrl);
            s !== "" && !n.has(s) && n.set(s, r.parentPrUrl);
        }
        let i = !1;
        for (const r of t.members){
            const { pullRequest: s } = r, o = Zp(s.prUrl);
            if (o === "") continue;
            const a = this._records.get(o) ?? t_c(o, s.prUrl.trim());
            if (a === void 0) continue;
            const l = n_c(Qu_(a, {
                authorLogin: nH(s.authorLogin),
                baseRefName: nH(s.baseRefName),
                headRefName: nH(s.headRefName),
                isDraft: s.isDraft,
                isMerged: s.isMerged,
                number: s.number,
                repository: nH(s.repository),
                state: s.state,
                title: nH(s.title),
                updatedAt: nH(s.updatedAt)
            }), {
                baseRefName: nH(t.baseRefName),
                descriptor: void 0,
                kind: "member",
                observedAt: e,
                origin: "probe",
                position: r.position,
                probe: {
                    parentPrUrl: n.get(o)
                },
                source: t.source
            }, this._keyOfProviderId);
            l !== a && (this._records.set(o, l), i = !0);
        }
        i && this._didChange();
    }
    _clearProbe(t) {
        const e = this._records.get(t), n = e?.membership;
        if (!(e === void 0 || n === void 0 || n.kind === "withdrawn")) {
            if (n.kind === "member" && n.descriptor !== void 0) {
                n.probe !== void 0 && this._commit(t, e, {
                    ...e,
                    membership: {
                        ...n,
                        probe: void 0
                    }
                });
                return;
            }
            n.origin === "probe" && this._commit(t, e, {
                ...e,
                membership: {
                    kind: "withdrawn",
                    observedAt: Date.now(),
                    origin: "probe"
                }
            });
        }
    }
    _commit(t, e, n) {
        n !== e && (this._records.set(t, n), this._didChange());
    }
    _didChange() {
        this._snapshot = void 0, !this._notifyScheduled && (this._notifyScheduled = !0, queueMicrotask(()=>{
            this._notifyScheduled = !1, this._store.isDisposed || this._onDidChange.fire();
        }));
    }
}, eFs = Re([
    F(0, n9e)
], eFs), bn(i_c, eFs, 1, 1);

}
