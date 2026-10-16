import { _u0, bu0, fu0, mu0, vu0 } from "./Asv.js";
import { Gt, Qe, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Dc, jl } from "./aiService.js";
import { dp } from "./connect.js";
import { Rn } from "./extensions.js";
import { gu0 } from "./glass-connect-ws-transport.js";
import { Zu, eu } from "./glass-log-service.js";
import { It } from "./instantiation.js";
import { DNg, nbl } from "./tmux_session_service_connectweb.js";
import { AVe, CRi } from "./tmux_session_service_pb.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { AFa } from "./yBp.js";
var qgv, zgv, Vgv, YVl, XVl, Kgv, kQt, Vxs;
export { Kgv, Vgv, Vxs, XVl, YVl, kQt, qgv, zgv };
var __wakaru_L5i_initialized = false;
export function L5i() {
if (__wakaru_L5i_initialized) return;
__wakaru_L5i_initialized = true;
"use strict";
E(), dp(), DNg(), CRi(), Gt(), Qe(), Rn(), It(), Dc(), Zu(), gu0(), qgv = 26054, zgv = "cursorvm.com", Vgv = 300 * 1e3, YVl = "/exec-daemon/tmux", XVl = "/exec-daemon/tmux.portal.conf", Kgv = "glass-tmux:", kQt = Il("glassTmuxSessionService"), Vxs = class extends st {
    constructor(t, e){
        super(), this._aiService = t, this._logService = e, this._podInfoCache = new Map, this._inFlightPodInfo = new Map, this._connections = new Map, this._onDidInvalidateSessions = this._register(new tt), this.onDidInvalidateSessions = this._onDidInvalidateSessions.event;
    }
    async getPodInfo(t) {
        const e = this._podInfoCache.get(t);
        if (e && Date.now() - e.fetchedAtMs < Vgv) return e.podInfo;
        const n = this._inFlightPodInfo.get(t);
        if (n) return n;
        const i = this._fetchPodInfo(t);
        this._inFlightPodInfo.set(t, i);
        try {
            const r = await i;
            return r ? this._podInfoCache.set(t, {
                fetchedAtMs: Date.now(),
                podInfo: r
            }) : this._podInfoCache.delete(t), r;
        } finally{
            this._inFlightPodInfo.delete(t);
        }
    }
    async _fetchPodInfo(t) {
        try {
            const n = await (await this._aiService.backgroundComposerClient()).getMachine({
                bcId: t
            });
            return vu0(fu0(n));
        } catch (e) {
            this._logService.warn(`[glass-tmux] getMachine failed for bcId=${t}`, e);
            return;
        }
    }
    async _getClient(t) {
        const e = await this.getPodInfo(t);
        if (!e) return;
        const n = bu0(e), i = this._connections.get(t);
        if (i && i.podInfoKey === n) return {
            client: i.client,
            pod: e
        };
        i && i.handle.dispose();
        const r = mu0({
            baseUrl: _u0(e),
            authToken: e.ptyAuthToken
        }), s = AFa(nbl, r.transport);
        return this._connections.set(t, {
            podInfoKey: n,
            client: s,
            handle: r
        }), {
            client: s,
            pod: e
        };
    }
    async listSessions(t) {
        const e = await this._getClient(t);
        if (!e) return [];
        try {
            return (await e.client.listSessions({})).sessions ?? [];
        } catch (n) {
            return this._logService.warn(`[glass-tmux] ListSessions failed for bcId=${t}`, n), [];
        }
    }
    async createSession(t, e) {
        const n = await this._getClient(t);
        if (n) try {
            const i = await n.client.createSession({
                ...e,
                kind: e.kind ?? AVe.USER_MANUAL
            });
            return this._onDidInvalidateSessions.fire({
                bcId: t
            }), i.session ? i.session : void 0;
        } catch (i) {
            this._logService.warn(`[glass-tmux] CreateSession failed for bcId=${t}`, i);
            return;
        }
    }
    async killSession({ bcId: t, sessionId: e }) {
        const n = await this._getClient(t);
        if (n) try {
            await n.client.killSession({
                sessionId: e
            }), this._onDidInvalidateSessions.fire({
                bcId: t
            });
        } catch (i) {
            this._logService.warn(`[glass-tmux] KillSession failed for bcId=${t} sessionId=${e}`, i);
        }
    }
    invalidate(t) {
        this._podInfoCache.delete(t);
        const e = this._connections.get(t);
        e && (e.handle.dispose(), this._connections.delete(t)), this._onDidInvalidateSessions.fire({
            bcId: t
        });
    }
    dispose() {
        for (const t of this._connections.values())t.handle.dispose();
        this._connections.clear(), super.dispose();
    }
}, Vxs = Re([
    F(0, jl),
    F(1, eu)
], Vxs), bn(kQt, Vxs, 1, 1);

}
