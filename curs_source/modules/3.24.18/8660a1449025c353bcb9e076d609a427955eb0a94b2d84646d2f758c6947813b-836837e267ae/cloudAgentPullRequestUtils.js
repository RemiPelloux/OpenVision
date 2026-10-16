import { Gt, tt } from "./Iwo.js";
import { iXt } from "./Ycg.js";
import { kl } from "./browser.ts";
import { Du } from "./dashboard_pb.js";
import { Zbf } from "./githubPullRequestOriginMirror.js";
import { oyf } from "./githubPullRequestReviewCursorLink.js";
import { XS } from "./githubUtils.js";
import { nl } from "./index.ts";
import { sQn } from "./pull-request-review-links.ts";
import { E } from "./tslib.es6.js";
var wbs, j2l, $2l, H2l, W2l, myf, kBe, G2l, q2l;
export { $2l, G2l, H2l, W2l, j2l, kBe, myf, q2l, wbs };
var __wakaru_Rme_initialized = false;
export function Rme() {
if (__wakaru_Rme_initialized) return;
__wakaru_Rme_initialized = true;
"use strict";
E(), nl(), kl(), Du(), Gt(), Zbf(), oyf(), XS(), wbs = new Set([
    "github.com",
    "www.github.com"
]), j2l = new Set([
    "app.graphite.com",
    "app.graphite.dev"
]), $2l = new Set(sQn), H2l = new Set([
    "cursor.com",
    "staging.cursor.com"
]), W2l = {
    destination: void 0,
    surface: void 0
}, myf = class {
    constructor(){
        this.value = W2l, this.present = !1, this.fetched = !1, this.generation = 0, this._onDidChangeDestination = new tt, this.onDidChangeDestination = this._onDidChangeDestination.event;
    }
    get cachedDestination() {
        return this.value.destination;
    }
    get hasFetched() {
        return this.fetched;
    }
    invalidate() {
        const t = this.value.destination;
        this.value = W2l, this.present = !1, this.fetched = !1, this.inflight = void 0, this.generation += 1, this.fireIfDestinationChanged(t);
    }
    setDestination(t) {
        const e = this.value.destination;
        this.inflight = void 0, this.generation += 1, this.value = {
            ...this.value,
            destination: iXt(t)
        }, this.present = !0, this.fireIfDestinationChanged(e);
    }
    fireIfDestinationChanged(t) {
        this.value.destination !== t && this._onDidChangeDestination.fire();
    }
    async resolveSurface(t) {
        return this.fetched ? (this.fetch(t), this.value.surface) : (await this.fetch(t)).surface;
    }
    async resolveSnapshot(t, e) {
        return e && this.fetched ? (this.fetch(t), this.value) : this.fetch(t);
    }
    async resolve(t, e) {
        return e && this.present ? (this.fetch(t), this.value) : this.fetch(t);
    }
    fetch(t) {
        if (this.inflight) return this.inflight;
        const e = this.value, n = this.generation, i = (async ()=>{
            try {
                const r = await t.getBackgroundComposerUserSettings(), s = {
                    destination: iXt(r.prReviewOpenDestination),
                    surface: r.prReviewOpenSurface
                };
                return this.generation !== n ? this.inflight ? await this.inflight : this.present ? this.value : e : (this.value = s, this.present = !0, this.fetched = !0, this.fireIfDestinationChanged(e.destination), s);
            } catch  {
                return this.generation === n && (this.value = e, this.present = !0), e;
            } finally{
                this.generation === n && (this.inflight = void 0);
            }
        })();
        return this.inflight = i, i;
    }
}, kBe = new myf, G2l = kBe.onDidChangeDestination, q2l = {
    githubNodeIds: [],
    missingGithubNodeId: !1
};

}
